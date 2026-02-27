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
  removeTaskLinkFromCancelledIndex,
  removeTaskLinkFromFinishedIndex,
  removeTaskLinkFromIndex,
  syncAllTaskIndexes,
  syncRootTaskIndexLinks,
} from '../engines/taskIndexEngine'
import { NewTaskModal } from '../modals/NewTaskModal'
import type { Equipo, PomodoroState } from '../types'
import { normalizeEquiposFromSettings, normalizePomodoroFromSettings, normalizeTablerosFromSettings } from '../utils/settings'
import { TareasView } from '../view/TareasView'

interface GraphGroupDefinition {
  query: string
  color: string
}

export class TareasPlugin extends obsidian.Plugin {
  tableros: Equipo[] = [...DEFAULT_TABLEROS]
  equipos: Equipo[] = [...DEFAULT_EQUIPOS]
  pomodoro: PomodoroState = createDefaultPomodoroState()

  async onload() {
    await this.loadSettings()
    await this.ensureDefaultBoardInSettings()

    this.registerView(VIEW_TYPE, leaf => new TareasView(leaf, this))

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
    })
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
