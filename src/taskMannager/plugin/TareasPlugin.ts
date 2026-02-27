import * as obsidian from 'obsidian'

import {
  COMPLETED_SUBTASKS_FOLDER,
  COMPLETED_TASKS_FOLDER,
  DEFAULT_EQUIPOS,
  INDEX_TAG,
  LOCKED_EQUIPO_NAMES,
  SUBTASK_TAG,
  SUBTASKS_FOLDER,
  TAREAS_FOLDER,
  TASK_TAG,
  VIEW_TYPE,
} from '../constants'
import { createDefaultPomodoroState } from '../engines/pomodoroEngine'
import { rebuildTaskChildLinks, syncTaskTypeTags } from '../engines/frontmatterEngine'
import {
  ensureFinishedTaskIndexFile,
  ensureTaskIndexFile,
  removeTaskLinkFromFinishedIndex,
  removeTaskLinkFromIndex,
} from '../engines/taskIndexEngine'
import { NewTaskModal } from '../modals/NewTaskModal'
import type { Equipo, PomodoroState } from '../types'
import { normalizeEquiposFromSettings, normalizePomodoroFromSettings } from '../utils/settings'
import { TareasView } from '../view/TareasView'

interface GraphGroupDefinition {
  query: string
  color: string
}

export class TareasPlugin extends obsidian.Plugin {
  equipos: Equipo[] = [...DEFAULT_EQUIPOS]
  pomodoro: PomodoroState = createDefaultPomodoroState()

  async onload() {
    await this.loadSettings()

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
    await ensureTaskIndexFile(this.app)
    await ensureFinishedTaskIndexFile(this.app)
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
    this.equipos = normalizeEquiposFromSettings(rawData)
    this.pomodoro = normalizePomodoroFromSettings(rawData)
  }

  async saveSettings() {
    await this.saveData({
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

  addEquipo(name: string, color = '#6b5ce7') {
    if (this.equipos.some(equipo => equipo.name === name))
      return

    this.equipos.push({ name, color })
    void this.saveSettings()
  }

  removeEquipo(name: string): boolean {
    if (LOCKED_EQUIPO_NAMES.includes(name))
      return false

    const nextEquipos = this.equipos.filter(equipo => equipo.name !== name)
    if (nextEquipos.length === this.equipos.length)
      return false

    this.equipos = nextEquipos
    void this.saveSettings()
    return true
  }

  updateEquipo(name: string, updates: Partial<Equipo>) {
    const team = this.equipos.find(equipo => equipo.name === name)
    if (!team)
      return

    Object.assign(team, updates)
    void this.saveSettings()
  }

  private async ensureTasksFolder() {
    try {
      await this.ensureFolderPath(TAREAS_FOLDER)
      await this.ensureFolderPath(SUBTASKS_FOLDER)
      await this.ensureFolderPath(COMPLETED_TASKS_FOLDER)
      await this.ensureFolderPath(COMPLETED_SUBTASKS_FOLDER)
    }
    catch {
      new obsidian.Notice(`No se pudo crear la carpeta "${TAREAS_FOLDER}".`)
    }
  }

  private async ensureFolderPath(path: string) {
    const segments = path.split('/').filter(Boolean)
    let currentPath = ''

    for (const segment of segments) {
      currentPath = currentPath ? `${currentPath}/${segment}` : segment
      const existing = this.app.vault.getAbstractFileByPath(currentPath)

      if (existing instanceof obsidian.TFolder)
        continue

      if (existing)
        throw new Error(`Existe un archivo llamado "${currentPath}".`)

      await this.app.vault.createFolder(currentPath)
    }
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
