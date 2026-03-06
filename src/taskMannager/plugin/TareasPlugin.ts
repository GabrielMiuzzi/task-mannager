import * as obsidian from 'obsidian'

import {
  CANCELLED_SUBTASKS_FOLDER,
  CANCELLED_TASKS_FOLDER,
  COMPLETED_SUBTASKS_FOLDER,
  COMPLETED_TASKS_FOLDER,
  DEFAULT_BOARD_NAME,
  DEFAULT_EQUIPOS,
  DEFAULT_TABLEROS,
  INDEX_TAG,
  LEGACY_COMPLETED_TASKS_FOLDER,
  LOCKED_EQUIPO_NAMES,
  SUBTASK_TAG,
  TAREAS_FOLDER,
  TASK_TAG,
  VIEW_TYPE,
} from '../constants'
import { createDefaultPomodoroState } from '../engines/pomodoroEngine'
import { rebuildTaskChildLinks, syncTaskTypeTags } from '../engines/frontmatterEngine'
import { getTasks } from '../engines/taskEngine'
import {
  ensureBoardTaskIndexFile,
  getBoardTaskIndexBasename,
  removeTaskLinkFromCancelledIndex,
  removeTaskLinkFromFinishedIndex,
  removeTaskLinkFromIndex,
  syncAllTaskIndexes,
  syncRootTaskIndexLinks,
} from '../engines/taskIndexEngine'
import { NewTaskModal } from '../modals/NewTaskModal'
import { ObsiaIntegration } from './ObsiaIntegration'
import type { Equipo, ObsiaSettings, PomodoroState } from '../types'
import {
  createDefaultObsiaSettings,
  normalizeEquiposFromSettings,
  normalizeObsiaFromSettings,
  normalizePomodoroFromSettings,
  normalizeTablerosFromSettings,
} from '../utils/settings'
import { TareasView } from '../view/TareasView'

interface GraphGroupDefinition {
  query: string
  color: string
}

export class TareasPlugin extends obsidian.Plugin {
  tableros: Equipo[] = [...DEFAULT_TABLEROS]
  equipos: Equipo[] = [...DEFAULT_EQUIPOS]
  pomodoro: PomodoroState = createDefaultPomodoroState()
  obsia: ObsiaSettings = createDefaultObsiaSettings()
  private obsiaIntegration: ObsiaIntegration | null = null

  async onload() {
    await this.loadSettings()
    await this.ensureDefaultBoardInSettings()
    this.obsiaIntegration = new ObsiaIntegration(this, this.obsia)

    this.registerView(VIEW_TYPE, leaf => new TareasView(leaf, this))
    this.obsiaIntegration.onload()

    this.addRibbonIcon('list-checks', 'Abrir Tareas', () => this.activateView())

    this.addCommand({
      id: 'open-tareas-view',
      name: 'Abrir vista de Tareas',
      callback: () => this.activateView(),
    })

    this.addCommand({
      id: 'new-tarea',
      name: 'Nueva tarea',
      callback: () => new NewTaskModal(this.app, this).open(),
    })

    await this.ensureTasksFolder()
    await syncAllTaskIndexes(this.app)
    await rebuildTaskChildLinks(this.app)
    await syncTaskTypeTags(this.app)
    await this.ensureObsidianGraphGroups()

    this.registerEvent(this.app.vault.on('delete', (file) => {
      void this.handleFileDelete(file)
    }))
  }

  onunload() {
    this.obsiaIntegration?.onunload()
    this.obsiaIntegration = null
  }

  async activateView() {
    const { workspace } = this.app
    let leaf = workspace.getLeavesOfType(VIEW_TYPE)[0]

    if (!leaf) {
      leaf = workspace.getLeaf('tab')
      await leaf.setViewState({ type: VIEW_TYPE, active: true })
    }

    workspace.revealLeaf(leaf)
  }

  async loadSettings() {
    const rawData = await this.loadData()
    this.tableros = normalizeTablerosFromSettings(rawData)
    this.equipos = normalizeEquiposFromSettings(rawData)
    this.pomodoro = normalizePomodoroFromSettings(rawData)
    this.obsia = normalizeObsiaFromSettings(rawData)
  }

  private async ensureDefaultBoardInSettings() {
    const hasDefaultBoard = this.tableros.some(board => board.name === DEFAULT_BOARD_NAME)
    if (hasDefaultBoard)
      return

    this.tableros.unshift({ name: DEFAULT_BOARD_NAME, color: '#2e6db0' })
    await this.saveSettings()
  }

  async saveSettings() {
    await this.saveData({
      tableros: this.tableros,
      equipos: this.equipos,
      pomodoro: this.pomodoro,
      obsia: this.obsia,
    })
  }

  setObsiaSettings(nextSettings: ObsiaSettings) {
    this.obsia = {
      buildingPositions: { ...nextSettings.buildingPositions },
      buildingRotations: { ...nextSettings.buildingRotations },
      buildingSizes: { ...nextSettings.buildingSizes },
    }
  }

  setPomodoroState(nextState: PomodoroState) {
    this.pomodoro = {
      ...nextState,
      durations: { ...nextState.durations },
    }
    void this.saveSettings()
  }

  addTablero(name: string, color = '#6b5ce7') {
    const normalizedName = name.trim().toLowerCase()
    if (!normalizedName)
      return

    if (this.tableros.some(tablero => tablero.name.toLowerCase() === normalizedName))
      return

    this.tableros.push({ name: normalizedName, color })
    void this.ensureBoardWorkspace(normalizedName)
    void this.saveSettings()
  }

  async editTablero(
    currentBoardName: string,
    updates: { name: string, color: string },
  ): Promise<{ ok: boolean, boardName: string, error?: string }> {
    const currentName = currentBoardName.trim().toLowerCase()
    const nextName = updates.name.trim().toLowerCase()
    if (!currentName || !nextName)
      return { ok: false, boardName: currentName || nextName, error: 'invalid-name' }

    const boardIndex = this.tableros.findIndex(tablero => tablero.name === currentName)
    if (boardIndex < 0)
      return { ok: false, boardName: currentName, error: 'board-not-found' }

    if (currentName === DEFAULT_BOARD_NAME)
      return { ok: false, boardName: currentName, error: 'default-board-locked' }

    if (nextName !== currentName && this.tableros.some(tablero => tablero.name === nextName))
      return { ok: false, boardName: currentName, error: 'board-already-exists' }

    if (nextName !== currentName) {
      const renamed = await this.renameBoardFolder(currentName, nextName)
      if (!renamed)
        return { ok: false, boardName: currentName, error: 'board-folder-conflict' }

      await this.renameBoardTaskIndexFile(currentName, nextName)
      await this.renameBoardInTaskFrontmatter(currentName, nextName)

      this.equipos = this.equipos.map((equipo) => {
        if ((equipo.tablero || DEFAULT_BOARD_NAME) !== currentName)
          return equipo

        return { ...equipo, tablero: nextName }
      })

      this.pomodoro = this.remapPomodoroTaskPath(currentName, nextName)
    }

    this.tableros[boardIndex] = {
      ...this.tableros[boardIndex],
      name: nextName,
      color: updates.color,
    }

    await this.ensureBoardWorkspace(nextName)
    await syncAllTaskIndexes(this.app)
    await this.saveSettings()

    return { ok: true, boardName: nextName }
  }

  canRemoveTablero(boardName: string): boolean {
    const normalizedBoardName = boardName.trim().toLowerCase()
    if (!normalizedBoardName || normalizedBoardName === DEFAULT_BOARD_NAME)
      return false

    return this.tableros.some(tablero => tablero.name === normalizedBoardName)
  }

  async removeTablero(boardName: string): Promise<boolean> {
    const normalizedBoardName = boardName.trim().toLowerCase()
    if (!this.canRemoveTablero(normalizedBoardName))
      return false

    const boardTaskPaths = new Set(
      getTasks(this.app)
        .filter(task => task.tablero === normalizedBoardName)
        .map(task => task.file.path),
    )

    for (const taskPath of boardTaskPaths) {
      const taskFile = this.app.vault.getAbstractFileByPath(taskPath)
      if (!(taskFile instanceof obsidian.TFile))
        continue

      await this.app.vault.delete(taskFile, true)
    }

    const selectedTaskPath = this.pomodoro.selectedTaskPath
    if (selectedTaskPath && boardTaskPaths.has(selectedTaskPath)) {
      this.pomodoro = {
        ...this.pomodoro,
        durations: { ...this.pomodoro.durations },
        selectedTaskPath: null,
      }
    }

    this.tableros = this.tableros.filter(tablero => tablero.name !== normalizedBoardName)
    this.equipos = this.equipos.filter(equipo => (equipo.tablero || DEFAULT_BOARD_NAME) !== normalizedBoardName)

    await this.removeBoardFolders(normalizedBoardName)
    await syncRootTaskIndexLinks(this.app)
    await this.saveSettings()
    return true
  }

  addEquipo(name: string, color = '#6b5ce7') {
    this.addEquipoInTablero(name, color, this.tableros[0]?.name || 'default')
  }

  addEquipoInTablero(name: string, color = '#6b5ce7', boardName = 'default') {
    const normalizedName = name.trim()
    const normalizedBoardName = boardName.trim().toLowerCase()
    if (!normalizedName)
      return

    if (this.equipos.some(equipo => equipo.name === normalizedName && (equipo.tablero || 'default') === normalizedBoardName))
      return

    this.equipos.push({ name: normalizedName, color, tablero: normalizedBoardName })
    void this.saveSettings()
  }

  removeEquipo(name: string, boardName = 'default'): boolean {
    if (LOCKED_EQUIPO_NAMES.includes(name))
      return false

    const normalizedBoardName = boardName.trim().toLowerCase()
    const nextEquipos = this.equipos.filter(equipo => !(equipo.name === name && (equipo.tablero || 'default') === normalizedBoardName))
    if (nextEquipos.length === this.equipos.length)
      return false

    this.equipos = nextEquipos
    void this.saveSettings()
    return true
  }

  updateEquipo(name: string, boardName: string, updates: Partial<Equipo>) {
    const normalizedBoardName = boardName.trim().toLowerCase()
    const team = this.equipos.find(equipo => equipo.name === name && (equipo.tablero || 'default') === normalizedBoardName)
    if (!team)
      return

    Object.assign(team, updates)
    void this.saveSettings()
  }

  getEquiposForTablero(boardName: string): Equipo[] {
    const normalizedBoardName = boardName.trim().toLowerCase()
    return this.equipos.filter(equipo => (equipo.tablero || 'default') === normalizedBoardName)
  }

  async reorderEquipoInTablero(
    boardName: string,
    draggedGroupName: string,
    targetGroupName: string,
    insertPosition: 'before' | 'after',
  ): Promise<boolean> {
    const normalizedBoardName = boardName.trim().toLowerCase()
    if (!normalizedBoardName)
      return false

    const boardGroups = this.getEquiposForTablero(normalizedBoardName)
    const fromIndex = boardGroups.findIndex(group => group.name === draggedGroupName)
    const targetIndex = boardGroups.findIndex(group => group.name === targetGroupName)
    if (fromIndex < 0 || targetIndex < 0 || fromIndex === targetIndex)
      return false

    const nextBoardGroups = [...boardGroups]
    const [dragged] = nextBoardGroups.splice(fromIndex, 1)
    let nextIndex = nextBoardGroups.findIndex(group => group.name === targetGroupName)
    if (nextIndex < 0)
      return false

    if (insertPosition === 'after')
      nextIndex += 1

    nextBoardGroups.splice(nextIndex, 0, dragged)

    const orderedGroupNames = nextBoardGroups.map(group => group.name)
    return this.setEquiposOrderForTablero(normalizedBoardName, orderedGroupNames)
  }

  async setEquiposOrderForTablero(boardName: string, orderedGroupNames: string[]): Promise<boolean> {
    const normalizedBoardName = boardName.trim().toLowerCase()
    if (!normalizedBoardName)
      return false

    const boardGroups = this.getEquiposForTablero(normalizedBoardName)
    if (boardGroups.length === 0)
      return false

    const uniqueOrderedNames = Array.from(new Set(orderedGroupNames))
    if (uniqueOrderedNames.length !== boardGroups.length)
      return false

    const orderedGroupByName = new Map(boardGroups.map(group => [group.name, group]))
    const nextBoardGroups: Equipo[] = []
    for (const groupName of uniqueOrderedNames) {
      const group = orderedGroupByName.get(groupName)
      if (!group)
        return false

      nextBoardGroups.push(group)
    }

    let boardPointer = 0
    this.equipos = this.equipos.map((equipo) => {
      if ((equipo.tablero || 'default') !== normalizedBoardName)
        return equipo

      const replacement = nextBoardGroups[boardPointer]
      boardPointer += 1
      return replacement || equipo
    })

    await this.saveSettings()
    return true
  }

  private async ensureTasksFolder() {
    try {
      await this.ensureFolderPath(TAREAS_FOLDER)
      await this.ensureFolderPath(COMPLETED_TASKS_FOLDER)
      await this.ensureFolderPath(COMPLETED_SUBTASKS_FOLDER)
      await this.ensureFolderPath(CANCELLED_TASKS_FOLDER)
      await this.ensureFolderPath(CANCELLED_SUBTASKS_FOLDER)
      const boardNames = new Set<string>([
        ...this.tableros.map(board => board.name.trim().toLowerCase()).filter(Boolean),
        ...this.getExistingBoardFolderNames(),
      ])
      boardNames.add(DEFAULT_BOARD_NAME)

      for (const boardName of boardNames)
        await this.ensureBoardWorkspace(boardName)
    }
    catch {
      new obsidian.Notice(`No se pudo crear la carpeta "${TAREAS_FOLDER}".`)
    }
  }

  async ensureBoardFolders(boardName: string) {
    const normalized = boardName.trim().toLowerCase()
    if (!normalized)
      return

    await this.ensureFolderPath(`${TAREAS_FOLDER}/${normalized}`)
    await this.ensureFolderPath(`${TAREAS_FOLDER}/${normalized}/subTasks`)
  }

  async ensureBoardWorkspace(boardName: string) {
    const normalized = boardName.trim().toLowerCase()
    if (!normalized)
      return

    await this.ensureBoardFolders(normalized)
    await ensureBoardTaskIndexFile(this.app, normalized)
    await syncRootTaskIndexLinks(this.app)
  }

  private async removeBoardFolders(boardName: string) {
    const boardRootPath = `${TAREAS_FOLDER}/${boardName}`
    const boardSubtasksPath = `${boardRootPath}/subTasks`
    await this.deleteFolderIfExists(boardSubtasksPath)
    await this.deleteFolderIfExists(boardRootPath)
  }

  private async renameBoardFolder(currentBoardName: string, nextBoardName: string): Promise<boolean> {
    const currentFolderPath = `${TAREAS_FOLDER}/${currentBoardName}`
    const nextFolderPath = `${TAREAS_FOLDER}/${nextBoardName}`
    const currentFolder = this.app.vault.getAbstractFileByPath(currentFolderPath)
    const nextFolder = this.app.vault.getAbstractFileByPath(nextFolderPath)
    if (nextFolder)
      return false

    if (!(currentFolder instanceof obsidian.TFolder))
      return true

    await this.app.fileManager.renameFile(currentFolder, nextFolderPath)
    return true
  }

  private async renameBoardTaskIndexFile(currentBoardName: string, nextBoardName: string): Promise<void> {
    const currentIndexBasename = getBoardTaskIndexBasename(currentBoardName)
    const nextIndexBasename = getBoardTaskIndexBasename(nextBoardName)
    const currentIndexPath = `${TAREAS_FOLDER}/${nextBoardName}/${currentIndexBasename}.md`
    const nextIndexPath = `${TAREAS_FOLDER}/${nextBoardName}/${nextIndexBasename}.md`

    const currentIndexFile = this.app.vault.getAbstractFileByPath(currentIndexPath)
    const nextIndexFile = this.app.vault.getAbstractFileByPath(nextIndexPath)

    if (nextIndexFile instanceof obsidian.TFile) {
      if (currentIndexFile instanceof obsidian.TFile)
        await this.app.vault.delete(currentIndexFile, true)
      return
    }

    if (currentIndexFile instanceof obsidian.TFile)
      await this.app.fileManager.renameFile(currentIndexFile, nextIndexPath)
  }

  private async renameBoardInTaskFrontmatter(currentBoardName: string, nextBoardName: string): Promise<void> {
    const files = this.app.vault
      .getMarkdownFiles()
      .filter(file => file.path.startsWith(`${TAREAS_FOLDER}/${nextBoardName}/`))

    for (const file of files) {
      await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
        const boardInFrontmatter = typeof frontmatter.tablero === 'string'
          ? frontmatter.tablero.trim().toLowerCase()
          : ''

        if (boardInFrontmatter === currentBoardName)
          frontmatter.tablero = nextBoardName
      })
    }
  }

  private remapPomodoroTaskPath(currentBoardName: string, nextBoardName: string): PomodoroState {
    const selectedTaskPath = this.pomodoro.selectedTaskPath
    const currentPrefix = `${TAREAS_FOLDER}/${currentBoardName}/`
    const nextPrefix = `${TAREAS_FOLDER}/${nextBoardName}/`
    const nextSelectedTaskPath = selectedTaskPath?.startsWith(currentPrefix)
      ? `${nextPrefix}${selectedTaskPath.slice(currentPrefix.length)}`
      : selectedTaskPath

    return {
      ...this.pomodoro,
      durations: { ...this.pomodoro.durations },
      selectedTaskPath: nextSelectedTaskPath ?? null,
    }
  }

  private async deleteFolderIfExists(path: string) {
    const abstractFile = this.app.vault.getAbstractFileByPath(path)
    if (!(abstractFile instanceof obsidian.TFolder))
      return

    await this.app.vault.delete(abstractFile, true)
  }

  private async ensureFolderPath(path: string) {
    const adapter = this.app.vault.adapter
    const segments = path.split('/').filter(Boolean)
    let currentPath = ''

    for (const segment of segments) {
      currentPath = currentPath ? `${currentPath}/${segment}` : segment
      const existing = this.app.vault.getAbstractFileByPath(currentPath)

      if (existing instanceof obsidian.TFolder)
        continue

      if (existing)
        throw new Error(`Existe un archivo llamado "${currentPath}".`)

      try {
        await this.app.vault.createFolder(currentPath)
      }
      catch {
        const retry = this.app.vault.getAbstractFileByPath(currentPath)
        if (retry instanceof obsidian.TFolder)
          continue

        if (await adapter.exists(currentPath))
          continue

        throw new Error(`No se pudo crear la carpeta "${currentPath}".`)
      }
    }
  }

  private getExistingBoardFolderNames(): string[] {
    const rootFolder = this.app.vault.getAbstractFileByPath(TAREAS_FOLDER)
    if (!(rootFolder instanceof obsidian.TFolder))
      return []

    const excludedFolders = new Set([
      COMPLETED_TASKS_FOLDER.split('/').pop() ?? '',
      CANCELLED_TASKS_FOLDER.split('/').pop() ?? '',
      LEGACY_COMPLETED_TASKS_FOLDER.split('/').pop() ?? '',
    ])

    return rootFolder.children
      .filter((child): child is obsidian.TFolder => child instanceof obsidian.TFolder)
      .map(folder => folder.name.trim().toLowerCase())
      .filter(name => Boolean(name) && !excludedFolders.has(name))
  }

  private async handleFileDelete(file: obsidian.TAbstractFile) {
    if (!(file instanceof obsidian.TFile))
      return

    if (file.extension !== 'md')
      return

    if (!file.path.startsWith(`${TAREAS_FOLDER}/`))
      return

    await removeTaskLinkFromIndex(this.app, file)
    await removeTaskLinkFromFinishedIndex(this.app, file)
    await removeTaskLinkFromCancelledIndex(this.app, file)
    await rebuildTaskChildLinks(this.app)
    await syncTaskTypeTags(this.app)
  }

  private async ensureObsidianGraphGroups() {
    const desiredGroups: GraphGroupDefinition[] = [
      { query: `tag:#${INDEX_TAG}`, color: '#7c5ce7' },
      { query: `tag:#${TASK_TAG}`, color: '#2e6db0' },
      { query: `tag:#${SUBTASK_TAG}`, color: '#00b894' },
    ]

    await this.ensureGraphConfigGroups(desiredGroups)
    this.ensureRuntimeGraphGroups(desiredGroups)
  }

  private async ensureGraphConfigGroups(desiredGroups: GraphGroupDefinition[]) {
    const adapter = this.app.vault.adapter
    const configDir = this.app.vault.configDir
    const graphConfigPath = `${configDir}/graph.json`

    let graphConfig: Record<string, unknown> = {}
    try {
      if (await adapter.exists(graphConfigPath)) {
        const rawConfig = await adapter.read(graphConfigPath)
        graphConfig = rawConfig.trim() ? JSON.parse(rawConfig) : {}
      }
    }
    catch {
      graphConfig = {}
    }

    const currentGroups = Array.isArray(graphConfig.groups) ? graphConfig.groups : []
    graphConfig.groups = this.mergeGraphGroups(currentGroups, desiredGroups)

    await adapter.write(graphConfigPath, JSON.stringify(graphConfig, null, 2))
  }

  private ensureRuntimeGraphGroups(desiredGroups: GraphGroupDefinition[]) {
    const appWithInternals = this.app as unknown as {
      internalPlugins?: {
        plugins?: Record<string, {
          instance?: Record<string, unknown>
        }>
      }
    }

    const graphInstance = appWithInternals.internalPlugins?.plugins?.graph?.instance
    if (!graphInstance)
      return

    const candidateHolders = [
      graphInstance.options,
      graphInstance.localGraphOptions,
      graphInstance.globalGraphOptions,
    ] as Array<Record<string, unknown> | undefined>

    for (const holder of candidateHolders) {
      if (!holder || !Array.isArray(holder.groups))
        continue

      holder.groups = this.mergeGraphGroups(holder.groups, desiredGroups)
    }
  }

  private mergeGraphGroups(
    currentGroups: unknown[],
    desiredGroups: GraphGroupDefinition[],
  ): Array<Record<string, unknown>> {
    const normalizedCurrent = currentGroups
      .filter((group): group is Record<string, unknown> => Boolean(group) && typeof group === 'object')
      .filter(group => typeof group.query === 'string')

    const byQuery = new Map<string, Record<string, unknown>>()
    for (const group of normalizedCurrent)
      byQuery.set(group.query as string, { ...group })

    for (const group of desiredGroups) {
      const existing = byQuery.get(group.query)
      if (existing) {
        if (!existing.color)
          existing.color = group.color
        byQuery.set(group.query, existing)
        continue
      }

      byQuery.set(group.query, { query: group.query, color: group.color })
    }

    return Array.from(byQuery.values())
  }
}
