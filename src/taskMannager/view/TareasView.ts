import * as obsidian from 'obsidian'

import { DEFAULT_BOARD_NAME, ESTADOS, ORDER_STEP, POMODORO_LOG_BASENAME, PRIORIDADES, VIEW_TYPE } from '../constants'
import { moveTaskToActiveFolder, moveTaskToCancelledFolder, moveTaskToCompletedFolder } from '../engines/completionEngine'
import { updateFrontmatter } from '../engines/frontmatterEngine'
import { persistTaskOrder, reorderList } from '../engines/orderEngine'
import {
  advancePomodoroState,
  applyPomodoroDurations,
  enterPomodoroDeviation,
  exitPomodoroDeviation,
  formatPomodoroCountdown,
  getDeviationElapsedSeconds,
  getPhaseDurationSeconds,
  getPomodoroPhaseLabel,
  getPomodoroRemainingSeconds,
  normalizePomodoroDurations,
  pausePomodoro,
  resetPomodoro,
  resumePomodoro,
  startPomodoro,
} from '../engines/pomodoroEngine'
import { appendPomodoroLogEntry, getEntriesByDate, readPomodoroLogEntries, toLocalDateText } from '../engines/pomodoroLogEngine'
import { rebalanceGroupEndDates } from '../engines/scheduleEngine'
import {
  extractTaskBodyPreview,
  getTasks,
  groupTopLevelTasks,
  isTaskInCancelledFolder,
  isTaskInCompletedFolder,
  isTaskInFinishedFolder,
  parseTaskDate,
} from '../engines/taskEngine'
import { EditSectionModal } from '../modals/EditSectionModal'
import { NewBoardModal } from '../modals/NewBoardModal'
import { NewGroupModal } from '../modals/NewGroupModal'
import { NewTaskModal } from '../modals/NewTaskModal'
import { EditTaskFileModal } from '../modals/EditTaskFileModal'
import { AddTaskCommentModal } from '../modals/AddTaskCommentModal'
import { ConfirmDeleteTaskModal } from '../modals/ConfirmDeleteTaskModal'
import { getPomodoroPresetCardData, PomodoroPresetModal } from '../modals/PomodoroPresetModal'
import { SelectPomodoroTaskModal } from '../modals/SelectPomodoroTaskModal'
import type { TareasPlugin } from '../plugin/TareasPlugin'
import type { Equipo, PomodoroDurations, PomodoroPhase, PomodoroState, TaskFrontmatter, TaskItem } from '../types'
import { showDropdown } from '../ui/dropdown'
import { debounce } from '../utils/debounce'

export class TareasView extends obsidian.ItemView {
  private static readonly COMPLETED_TAB_ID = '__completed__'
  private static readonly CANCELLED_TAB_ID = '__cancelled__'
  private static readonly POMODORO_TAB_ID = '__pomodoro__'

  private plugin: TareasPlugin
  expandedGroups: Set<string>
  expandedTasks: Set<string>
  expandedCardSubtasks: Set<string>

  private debouncedRender: () => void
  private dragPath: string | null = null
  private dragDepth: number | null = null
  private dragParent: string | null = null
  private dragInsertPosition: 'before' | 'after' | null = null
  private droppedTaskAnimationPath: string | null = null
  private lastRenderedTab: string | null = null
  private activeTab: string
  private pomodoroPanelEl: HTMLElement | null = null
  private pomodoroTimeEl: HTMLElement | null = null
  private pomodoroProgressEl: HTMLElement | null = null
  private pomodoroPhaseEl: HTMLElement | null = null
  private pomodoroCycleEl: HTMLElement | null = null
  private pomodoroStateEl: HTMLElement | null = null
  private pomodoroAudioContext: AudioContext | null = null

  constructor(leaf: obsidian.WorkspaceLeaf, plugin: TareasPlugin) {
    super(leaf)
    this.plugin = plugin
    this.expandedGroups = new Set(plugin.equipos.map(equipo => `${equipo.tablero || 'default'}::${equipo.name}`))
    this.expandedTasks = new Set()
    this.expandedCardSubtasks = new Set()
    this.activeTab = plugin.tableros[0]?.name || 'default'
    this.debouncedRender = debounce(() => this.render(), 250)
  }

  getViewType() {
    return VIEW_TYPE
  }

  getDisplayText() {
    return 'Tareas'
  }

  getIcon() {
    return 'list-checks'
  }

  async onOpen() {
    const root = this.getRootEl()
    root.addClass('tareas-root')
    await this.render()

    this.registerInterval(window.setInterval(() => {
      void this.handlePomodoroTick()
    }, 1000))

    this.registerEvent(this.app.metadataCache.on('resolved', this.debouncedRender))
    this.registerEvent(this.app.vault.on('create', this.debouncedRender))
    this.registerEvent(this.app.vault.on('delete', this.debouncedRender))
    this.registerEvent(this.app.vault.on('rename', this.debouncedRender))
  }

  async onClose() {
    if (this.pomodoroAudioContext) {
      try {
        await this.pomodoroAudioContext.close()
      }
      catch {
        // Ignore close errors when context is already closed.
      }
      this.pomodoroAudioContext = null
    }
  }

  async render() {
    this.ensureValidActiveTab()
    const shouldAnimateTabTransition = this.lastRenderedTab !== null && this.lastRenderedTab !== this.activeTab
    this.lastRenderedTab = this.activeTab

    const root = this.getRootEl()
    root.empty()
    this.resetPomodoroDomRefs()

    this.renderHeader(root)
    this.renderTabs(root)
    const content = root.createDiv({ cls: 'tareas-tab-content' })
    if (shouldAnimateTabTransition)
      content.addClass('tareas-tab-content-animate')

    if (this.activeTab === TareasView.POMODORO_TAB_ID) {
      await this.renderPomodoroPanel(content)
      return
    }

    const allTasks = getTasks(this.app)
    const tabTasks = this.activeTab === TareasView.COMPLETED_TAB_ID
      ? allTasks.filter(task => isTaskInFinishedFolder(task.file.path))
      : this.activeTab === TareasView.CANCELLED_TAB_ID
        ? allTasks.filter(task => isTaskInCancelledFolder(task.file.path))
        : allTasks
            .filter(task => !isTaskInCompletedFolder(task.file.path))
            .filter(task => task.file.basename.toLowerCase() !== POMODORO_LOG_BASENAME.toLowerCase())
            .filter(task => task.tablero === this.activeTab)

    if (this.activeTab === TareasView.COMPLETED_TAB_ID || this.activeTab === TareasView.CANCELLED_TAB_ID) {
      this.renderCompletedTable(content, tabTasks)
      return
    }

    const taskPreviewMap = await this.buildTaskPreviewMap(tabTasks)
    const board = content.createDiv({ cls: 'tareas-board' })
    const boardGroups = this.plugin.getEquiposForTablero(this.activeTab)
    const groups = groupTopLevelTasks(tabTasks, boardGroups)
    for (const group of boardGroups)
      this.renderGroup(board, group, groups[group.name] || [], tabTasks, taskPreviewMap)

    if (groups['Sin grupo']?.length)
      this.renderGroup(board, { name: 'Sin grupo', color: 'var(--text-faint)' }, groups['Sin grupo'], tabTasks, taskPreviewMap)

    const addGroup = content.createDiv({ cls: 'tareas-new-group' })
    const addGroupLink = addGroup.createEl('span', { text: '+ Nuevo grupo', cls: 'tareas-add-link' })
    addGroupLink.onclick = () => new NewGroupModal(this.app, this.plugin, this, this.activeTab).open()
  }

  private renderCompletedTable(root: HTMLElement, tasks: TaskItem[]) {
    const wrap = root.createDiv({ cls: 'tareas-table-wrap' })
    const table = wrap.createEl('table', { cls: 'tareas-table' })
    const columns = ['', '', 'Tarea', 'Estado', 'Grupo', 'Prioridad', 'Dedicado', 'Estimación', 'Inicio', 'Fin', '%', 'Acciones']

    const tableHead = table.createEl('thead')
    const headRow = tableHead.createEl('tr')
    for (const column of columns) {
      const headerCell = headRow.createEl('th', { text: column })
      if (['Dedicado', 'Estimación', '%'].includes(column))
        headerCell.addClass('tareas-th-num')
    }

    const tableBody = table.createEl('tbody')
    const topLevelTasks = tasks
      .filter(task => !task.parent)
      .sort((a, b) => a.order - b.order)

    for (const task of topLevelTasks)
      this.renderRow(tableBody, task, tasks, 0)
  }

  private renderTabs(root: HTMLElement) {
    const tabs = root.createDiv({ cls: 'tareas-tabs' })

    for (const board of this.plugin.tableros) {
      const boardBtn = tabs.createEl('button', {
        text: board.name,
        cls: `tareas-tab-btn${this.activeTab === board.name ? ' is-active' : ''}`,
      })
      boardBtn.onclick = () => {
        this.activeTab = board.name
        this.render()
      }
    }

    const completedBtn = tabs.createEl('button', {
      text: 'Completadas',
      cls: `tareas-tab-btn${this.activeTab === TareasView.COMPLETED_TAB_ID ? ' is-active' : ''}`,
    })
    completedBtn.onclick = () => {
      this.activeTab = TareasView.COMPLETED_TAB_ID
      this.render()
    }

    const cancelledBtn = tabs.createEl('button', {
      text: 'Canceladas',
      cls: `tareas-tab-btn${this.activeTab === TareasView.CANCELLED_TAB_ID ? ' is-active' : ''}`,
    })
    cancelledBtn.onclick = () => {
      this.activeTab = TareasView.CANCELLED_TAB_ID
      this.render()
    }

    const pomodoroBtn = tabs.createEl('button', {
      text: 'Pomodoro',
      cls: `tareas-tab-btn${this.activeTab === TareasView.POMODORO_TAB_ID ? ' is-active' : ''}`,
    })
    pomodoroBtn.onclick = () => {
      this.activeTab = TareasView.POMODORO_TAB_ID
      this.render()
    }
  }

  private async renderPomodoroPanel(root: HTMLElement) {
    const runtimeState = this.getPomodoroRuntimeState(true)
    const panel = root.createDiv({ cls: 'tareas-pomodoro-panel' })
    this.pomodoroPanelEl = panel

    const top = panel.createDiv({ cls: 'tareas-pomodoro-top' })
    this.pomodoroPhaseEl = top.createEl('h2', { cls: 'tareas-pomodoro-phase' })
    this.pomodoroCycleEl = top.createEl('span', { cls: 'tareas-pomodoro-cycles' })

    const timerWrap = panel.createDiv({ cls: 'tareas-pomodoro-timer-wrap' })
    this.pomodoroProgressEl = timerWrap.createDiv({ cls: 'tareas-pomodoro-progress' })
    const timerInner = this.pomodoroProgressEl.createDiv({ cls: 'tareas-pomodoro-progress-inner' })
    this.pomodoroTimeEl = timerInner.createEl('div', { cls: 'tareas-pomodoro-time' })

    const controls = panel.createDiv({ cls: 'tareas-pomodoro-controls' })
    this.renderPomodoroControls(controls, runtimeState)
    this.pomodoroStateEl = panel.createEl('div', { cls: 'tareas-pomodoro-state-bar' })

    const config = panel.createDiv({ cls: 'tareas-pomodoro-config' })
    config.createEl('h3', { text: 'Duraciones (min)' })
    this.renderPomodoroDurationCard(config, runtimeState.durations)
    await this.renderPomodoroTaskCard(panel)
    await this.renderPomodoroDailyLog(panel)

    this.updatePomodoroDom(runtimeState, Date.now())
  }

  private renderPomodoroDurationCard(container: HTMLElement, durations: PomodoroDurations) {
    const cardData = getPomodoroPresetCardData(durations)
    const card = container.createDiv({ cls: 'tareas-pomodoro-config-card' })
    card.setAttr('role', 'button')
    card.setAttr('tabindex', '0')
    card.ondblclick = () => this.openPomodoroPresetModal(durations)
    card.onkeydown = (event) => {
      if (event.key !== 'Enter' && event.key !== ' ')
        return
      event.preventDefault()
      this.openPomodoroPresetModal(durations)
    }

    card.createEl('h4', { cls: 'tareas-pomodoro-config-card-title', text: cardData.title })
    card.createDiv({ cls: 'tareas-pomodoro-config-card-divider' })
    card.createEl('p', { cls: 'tareas-pomodoro-config-card-label', text: 'Uso' })
    card.createEl('p', { cls: 'tareas-pomodoro-config-card-text', text: cardData.usage })
    card.createDiv({ cls: 'tareas-pomodoro-config-card-divider' })
    card.createEl('p', { cls: 'tareas-pomodoro-config-card-text', text: cardData.workLabel })
    card.createEl('p', { cls: 'tareas-pomodoro-config-card-text', text: cardData.shortBreakLabel })
    card.createEl('p', { cls: 'tareas-pomodoro-config-card-text', text: cardData.longBreakLabel })
    card.createEl('p', { cls: 'tareas-pomodoro-config-card-text', text: cardData.cyclesLabel })
    card.createEl('p', { cls: 'tareas-pomodoro-config-card-hint', text: 'Doble click para cambiar duración' })
  }

  private openPomodoroPresetModal(durations: PomodoroDurations) {
    new PomodoroPresetModal(this.app, durations, (nextDurations) => {
      this.updatePomodoroDurations(nextDurations)
      this.render()
    }).open()
  }

  private async renderPomodoroTaskCard(container: HTMLElement) {
    const section = container.createDiv({ cls: 'tareas-pomodoro-task-section' })
    section.createEl('h3', { text: 'Tarea vinculada' })
    const isRunning = this.plugin.pomodoro.runState === 'running'

    const selectedTask = this.getSelectedPomodoroTask()
    if (selectedTask) {
      const allTasks = getTasks(this.app)
      const taskPreviewMap = await this.buildTaskPreviewMap([selectedTask])
      const list = section.createDiv({ cls: 'tareas-card-list tareas-pomodoro-task-card-list' })
      this.renderTaskCard(list, selectedTask, allTasks, taskPreviewMap.get(selectedTask.file.path) || '')
      section.createEl('p', { cls: 'tareas-pomodoro-task-card-hint', text: 'Usá el botón para cambiar la tarea vinculada' })
    }
    else {
      const emptyCard = section.createDiv({ cls: 'tareas-pomodoro-task-card' })
      emptyCard.createEl('p', {
        cls: 'tareas-pomodoro-task-card-empty',
        text: 'No hay tarea seleccionada',
      })
      emptyCard.createEl('p', {
        cls: 'tareas-pomodoro-task-card-hint',
        text: 'Seleccioná una tarea con el botón',
      })
    }

    const changeButton = section.createEl('button', {
      text: 'Cambiar tarea vinculada',
      cls: 'tareas-pomodoro-btn tareas-pomodoro-task-change-btn',
    })
    changeButton.disabled = isRunning
    changeButton.setAttr('aria-label', 'Cambiar tarea vinculada')
    changeButton.setAttr('title', isRunning
      ? 'No se puede cambiar la tarea mientras el contador está corriendo'
      : 'Cambiar tarea vinculada')
    changeButton.onclick = () => this.openPomodoroTaskSelector()
  }

  private getSelectedPomodoroTask(): TaskItem | null {
    const selectedTaskPath = this.plugin.pomodoro.selectedTaskPath
    if (!selectedTaskPath)
      return null

    const task = getTasks(this.app).find(item => item.file.path === selectedTaskPath)
    if (task)
      return task

    this.setPomodoroSelectedTaskPath(null)
    return null
  }

  private openPomodoroTaskSelector() {
    if (this.plugin.pomodoro.runState === 'running') {
      new obsidian.Notice('No se puede cambiar la tarea mientras el contador está corriendo.')
      return
    }

    const allTasks = getTasks(this.app)
    const selectableTasks = allTasks
      .filter(task => !task.parent)
      .filter(task => task.estado === 'En progreso')
      .filter(task => !isTaskInCompletedFolder(task.file.path))

    new SelectPomodoroTaskModal(
      this.app,
      selectableTasks,
      this.plugin.pomodoro.selectedTaskPath,
      (taskPath) => {
        this.setPomodoroSelectedTaskPath(taskPath)
        this.render()
      },
    ).open()
  }

  private setPomodoroSelectedTaskPath(taskPath: string | null) {
    this.plugin.setPomodoroState({
      ...this.plugin.pomodoro,
      durations: { ...this.plugin.pomodoro.durations },
      selectedTaskPath: taskPath,
    })
  }

  private renderPomodoroControls(container: HTMLElement, state: PomodoroState) {
    const iconControls = container.createDiv({ cls: 'tareas-pomodoro-controls-icons' })

    if (state.runState === 'running') {
      const pauseButton = iconControls.createEl('button', { text: '⏸', cls: 'tareas-pomodoro-btn tareas-pomodoro-btn-icon' })
      pauseButton.setAttr('aria-label', 'Pausar')
      pauseButton.setAttr('title', 'Pausar')
      pauseButton.onclick = () => this.handlePomodoroPause()
    }
    else if (state.runState === 'paused') {
      const resumeButton = iconControls.createEl('button', { text: '▶', cls: 'tareas-pomodoro-btn tareas-pomodoro-btn-icon mod-cta' })
      resumeButton.setAttr('aria-label', 'Reanudar')
      resumeButton.setAttr('title', 'Reanudar')
      resumeButton.onclick = () => this.handlePomodoroResume()
    }
    else {
      const startButton = iconControls.createEl('button', { text: '▶', cls: 'tareas-pomodoro-btn tareas-pomodoro-btn-icon mod-cta' })
      startButton.setAttr('aria-label', 'Iniciar')
      startButton.setAttr('title', 'Iniciar')
      startButton.onclick = () => this.handlePomodoroStart()
    }

    const resetButton = iconControls.createEl('button', { text: '↺', cls: 'tareas-pomodoro-btn tareas-pomodoro-btn-icon' })
    resetButton.setAttr('aria-label', 'Reiniciar')
    resetButton.setAttr('title', 'Reiniciar')
    resetButton.onclick = () => this.handlePomodoroReset()

    const deviationButton = iconControls.createEl('button', {
      text: state.isDeviationActive ? '📵' : '📞',
      cls: `tareas-pomodoro-btn tareas-pomodoro-btn-icon${state.isDeviationActive ? ' is-deviation-active' : ''}`,
    })
    deviationButton.setAttr('aria-label', 'Desvío')
    deviationButton.setAttr('title', state.isDeviationActive
      ? 'Finalizar desvío'
      : 'Iniciar desvío (llamadas/reuniones)')
    const canToggleDeviation = state.isDeviationActive || state.runState === 'running'
    deviationButton.disabled = !canToggleDeviation
    deviationButton.onclick = () => this.handlePomodoroDeviationToggle()

    if (state.phase !== 'work') {
      const extraControls = container.createDiv({ cls: 'tareas-pomodoro-controls-extra' })
      const workButton = extraControls.createEl('button', {
        text: 'Ir a trabajo',
        cls: 'tareas-pomodoro-btn',
      })
      workButton.onclick = () => this.handlePomodoroSwitchToWork()
    }
  }

  private handlePomodoroStart() {
    this.unlockPomodoroAudio()
    const next = startPomodoro(this.getPomodoroRuntimeState(false), Date.now())
    this.plugin.setPomodoroState(next)
    this.render()
  }

  private handlePomodoroPause() {
    this.unlockPomodoroAudio()
    const next = pausePomodoro(this.getPomodoroRuntimeState(false), Date.now())
    this.plugin.setPomodoroState(next)
    this.render()
  }

  private handlePomodoroResume() {
    this.unlockPomodoroAudio()
    const next = resumePomodoro(this.getPomodoroRuntimeState(false), Date.now())
    this.plugin.setPomodoroState(next)
    this.render()
  }

  private handlePomodoroReset() {
    this.unlockPomodoroAudio()
    const next = resetPomodoro(this.getPomodoroRuntimeState(false))
    this.plugin.setPomodoroState(next)
    this.render()
  }

  private async handlePomodoroDeviationToggle() {
    this.unlockPomodoroAudio()
    const now = Date.now()
    const current = this.getPomodoroRuntimeState(false)

    if (current.isDeviationActive) {
      const result = exitPomodoroDeviation(current, now)
      this.plugin.setPomodoroState(result.state)
      await this.addPomodoroDeviationTimeToSelectedTask(result.elapsedSeconds, result.state)

      if (result.completedWork) {
        const nextPhaseLabel = getPomodoroPhaseLabel(result.state.phase)
        new obsidian.Notice(`Desvío finalizado. Iniciando ${nextPhaseLabel.toLowerCase()}.`, 7000)
        this.flashPomodoroPanel()
        this.playPomodoroBeep()
        await this.addPomodoroWorkTimeToSelectedTask(['work'], result.state)
        await this.logPomodoroEntries(['work'], result.state, now)
      }

      this.render()
      return
    }

    const next = enterPomodoroDeviation(current, now)
    if (next === current) {
      new obsidian.Notice('Solo podés iniciar desvío cuando el contador está corriendo.')
      return
    }

    this.plugin.setPomodoroState(next)
    this.render()
  }

  private handlePomodoroSwitchToWork() {
    this.unlockPomodoroAudio()
    const current = this.getPomodoroRuntimeState(false)
    const workState = {
      ...current,
      phase: 'work' as PomodoroPhase,
      runState: 'idle' as const,
      remainingSeconds: current.durations.workMinutes * 60,
      endTimestamp: null,
      isDeviationActive: false,
      deviationStartedAt: null,
      deviationBaseRemainingSeconds: 0,
      phaseDeviationSeconds: 0,
    }
    this.plugin.setPomodoroState(workState)
    this.render()
  }

  private updatePomodoroDurations(nextDurations: PomodoroDurations) {
    const normalized = normalizePomodoroDurations(nextDurations)
    const next = applyPomodoroDurations(this.getPomodoroRuntimeState(false), normalized)
    this.plugin.setPomodoroState(next)
    this.updatePomodoroDom(next, Date.now())
  }

  private async handlePomodoroTick() {
    const runtimeState = this.getPomodoroRuntimeState(true)
    if (this.activeTab === TareasView.POMODORO_TAB_ID)
      this.updatePomodoroDom(runtimeState, Date.now())
  }

  private getPomodoroRuntimeState(notifyCompletion: boolean): PomodoroState {
    const now = Date.now()
    const advanced = advancePomodoroState(this.plugin.pomodoro, now)

    if (advanced.transitioned) {
      this.plugin.setPomodoroState(advanced.state)

      if (notifyCompletion)
        this.notifyPomodoroTransitions(advanced.completedPhases, advanced.state)

      if (this.activeTab === TareasView.POMODORO_TAB_ID)
        void this.render()

      return advanced.state
    }

    if (advanced.state !== this.plugin.pomodoro) {
      return {
        ...advanced.state,
        remainingSeconds: getPomodoroRemainingSeconds(advanced.state, now),
      }
    }

    return {
      ...this.plugin.pomodoro,
      durations: { ...this.plugin.pomodoro.durations },
      remainingSeconds: getPomodoroRemainingSeconds(this.plugin.pomodoro, now),
    }
  }

  private updatePomodoroDom(state: PomodoroState, nowMs: number) {
    if (!this.pomodoroTimeEl || !this.pomodoroPhaseEl || !this.pomodoroCycleEl || !this.pomodoroStateEl)
      return

    const remaining = getPomodoroRemainingSeconds(state, nowMs)
    const deviationElapsed = getDeviationElapsedSeconds(state, nowMs)
    const displayedSeconds = state.isDeviationActive ? deviationElapsed : remaining
    this.pomodoroTimeEl.setText(formatPomodoroCountdown(displayedSeconds))
    this.pomodoroTimeEl.toggleClass('is-deviation', state.isDeviationActive)
    if (this.pomodoroProgressEl) {
      const totalSeconds = Math.max(1, state.isDeviationActive
        ? Math.max(1, state.deviationBaseRemainingSeconds)
        : getPhaseDurationSeconds(state.durations, state.phase))
      const elapsed = state.isDeviationActive
        ? deviationElapsed
        : Math.max(0, totalSeconds - remaining)
      const progressPercent = Math.min(100, (elapsed / totalSeconds) * 100)
      this.pomodoroProgressEl.style.setProperty('--tareas-pomodoro-progress', `${progressPercent}%`)
      this.pomodoroProgressEl.setAttr('data-mode', state.isDeviationActive ? 'deviation' : 'normal')
    }
    this.pomodoroPhaseEl.setText(getPomodoroPhaseLabel(state.phase))
    this.pomodoroCycleEl.setText(`Ciclos completados: ${state.completedWorkCycles}`)

    const runStateLabel = state.isDeviationActive
      ? 'Desvío'
      : state.runState === 'running'
        ? 'En curso'
        : state.runState === 'paused'
          ? 'Pausado'
          : 'Listo'
    this.pomodoroStateEl.setText(runStateLabel)
    this.pomodoroStateEl.setAttr('data-state', state.isDeviationActive ? 'deviation' : state.runState)
  }

  private notifyPomodoroTransitions(completedPhases: PomodoroPhase[], nextState: PomodoroState) {
    const completed = completedPhases[completedPhases.length - 1]
    if (!completed)
      return

    const nextPhaseLabel = getPomodoroPhaseLabel(nextState.phase)
    if (completed === 'work')
      new obsidian.Notice(`Pomodoro finalizado. Iniciando ${nextPhaseLabel.toLowerCase()}.`, 7000)
    else
      new obsidian.Notice(`Descanso finalizado. Iniciando ${nextPhaseLabel.toLowerCase()}.`, 7000)

    this.flashPomodoroPanel()
    this.playPomodoroBeep()
    void this.addPomodoroWorkTimeToSelectedTask(completedPhases, nextState)
    void this.logPomodoroEntries(completedPhases, nextState, Date.now())
  }

  private async logPomodoroEntries(completedPhases: PomodoroPhase[], state: PomodoroState, nowMs: number) {
    if (completedPhases.length === 0)
      return

    const selectedTask = state.selectedTaskPath
      ? getTasks(this.app).find(item => item.file.path === state.selectedTaskPath)
      : null
    const taskName = selectedTask?.tarea || 'Sin tarea vinculada'
    const totalDeviationHours = this.roundToTwo(state.phaseDeviationSeconds / 3600)

    for (let index = 0; index < completedPhases.length; index++) {
      const phase = completedPhases[index]
      const deviationHours = index === completedPhases.length - 1
        ? totalDeviationHours
        : 0
      await appendPomodoroLogEntry(this.app, {
        timestampMs: nowMs,
        type: getPomodoroPhaseLabel(phase),
        task: taskName,
        deviationHours,
      })
    }

    if (state.phaseDeviationSeconds > 0) {
      this.plugin.setPomodoroState({
        ...state,
        durations: { ...state.durations },
        phaseDeviationSeconds: 0,
      })
    }

    if (this.activeTab === TareasView.POMODORO_TAB_ID)
      await this.render()
  }

  private async addPomodoroWorkTimeToSelectedTask(completedPhases: PomodoroPhase[], state: PomodoroState) {
    const completedWorkCount = completedPhases.filter(phase => phase === 'work').length
    if (completedWorkCount === 0)
      return

    const selectedTaskPath = state.selectedTaskPath
    if (!selectedTaskPath)
      return

    const task = getTasks(this.app).find(item => item.file.path === selectedTaskPath)
    if (!task) {
      this.setPomodoroSelectedTaskPath(null)
      new obsidian.Notice('La tarea seleccionada para Pomodoro ya no existe. Se quitó la selección.')
      return
    }

    const workedHours = this.roundToTwo((completedWorkCount * state.durations.workMinutes) / 60)
    if (workedHours <= 0)
      return

    const nextDedicated = this.roundToTwo(task.dedicado + workedHours)
    await this.updateTask(task, { dedicado: nextDedicated })
    new obsidian.Notice(`Se sumaron ${this.formatDecimal(workedHours)} h a "${task.tarea}".`, 5000)
  }

  private async addPomodoroDeviationTimeToSelectedTask(elapsedSeconds: number, state: PomodoroState) {
    if (elapsedSeconds <= 0)
      return

    const selectedTaskPath = state.selectedTaskPath
    if (!selectedTaskPath)
      return

    const task = getTasks(this.app).find(item => item.file.path === selectedTaskPath)
    if (!task) {
      this.setPomodoroSelectedTaskPath(null)
      new obsidian.Notice('La tarea seleccionada para Pomodoro ya no existe. Se quitó la selección.')
      return
    }

    const deviationHours = this.roundToTwo(elapsedSeconds / 3600)
    if (deviationHours <= 0)
      return

    const nextDeviation = this.roundToTwo(task.desvio + deviationHours)
    await this.updateTask(task, { desvio: nextDeviation })
    new obsidian.Notice(`Se sumaron ${this.formatDecimal(deviationHours)} h de desvío a "${task.tarea}".`, 5000)
  }

  private async renderPomodoroDailyLog(container: HTMLElement) {
    const section = container.createDiv({ cls: 'tareas-pomodoro-log-section' })
    section.createEl('h3', { text: 'Registros del dia' })

    const entries = await readPomodoroLogEntries(this.app)
    const todayEntries = getEntriesByDate(entries, toLocalDateText(new Date()))

    if (todayEntries.length === 0) {
      section.createEl('p', {
        cls: 'tareas-pomodoro-log-empty',
        text: 'todavia no se registran pomodoros en el dia',
      })
      this.renderPomodoroHourlyHeatmap(section, todayEntries)
      return
    }

    const wrap = section.createDiv({ cls: 'tareas-pomodoro-log-table-wrap' })
    const table = wrap.createEl('table', { cls: 'tareas-pomodoro-log-table' })
    const head = table.createEl('thead')
    const headRow = head.createEl('tr')
    for (const title of ['Horario', 'Tipo de pomodoro', 'Tarea', 'Desvio'])
      headRow.createEl('th', { text: title })

    const body = table.createEl('tbody')
    for (const entry of todayEntries) {
      const row = body.createEl('tr')
      row.createEl('td', { text: entry.time })
      row.createEl('td', { text: entry.type })
      row.createEl('td', { text: entry.task })
      row.createEl('td', { text: `${this.formatDecimal(entry.deviationHours)} h` })
    }

    this.renderPomodoroHourlyHeatmap(section, todayEntries)
  }

  private renderPomodoroHourlyHeatmap(container: HTMLElement, todayEntries: Array<{ time: string, type: string }>) {
    const heatmapSection = container.createDiv({ cls: 'tareas-pomodoro-heatmap' })
    heatmapSection.createEl('h4', { text: 'Heatmap horario (trabajo)' })

    const workEntries = todayEntries.filter(entry => entry.type === 'Trabajo')
    const hourlyCounts = Array.from({ length: 24 }, () => 0)
    for (const entry of workEntries) {
      const hour = Number.parseInt(entry.time.slice(0, 2), 10)
      if (Number.isNaN(hour) || hour < 0 || hour > 23)
        continue
      hourlyCounts[hour] += 1
    }

    const maxCount = Math.max(1, ...hourlyCounts)
    const grid = heatmapSection.createDiv({ cls: 'tareas-pomodoro-heatmap-grid' })
    for (let hour = 0; hour < 24; hour++) {
      const count = hourlyCounts[hour]
      const level = count === 0
        ? 0
        : Math.min(4, Math.ceil((count / maxCount) * 4))
      const cell = grid.createDiv({ cls: `tareas-pomodoro-heatmap-cell is-level-${level}` })
      cell.createEl('span', {
        cls: 'tareas-pomodoro-heatmap-hour',
        text: String(hour).padStart(2, '0'),
      })
      cell.createEl('span', {
        cls: 'tareas-pomodoro-heatmap-count',
        text: String(count),
      })
      cell.setAttr('title', `${String(hour).padStart(2, '0')}:00 - ${count} pomodoro(s) de trabajo`)
    }
  }

  private flashPomodoroPanel() {
    if (!this.pomodoroPanelEl)
      return

    this.pomodoroPanelEl.addClass('tareas-pomodoro-panel-flash')
    window.setTimeout(() => {
      this.pomodoroPanelEl?.removeClass('tareas-pomodoro-panel-flash')
    }, 900)
  }

  private playPomodoroBeep() {
    const audioContext = this.ensurePomodoroAudioContext()
    if (!audioContext)
      return

    const startBeep = () => {
      try {
        const now = audioContext.currentTime
        const first = audioContext.createOscillator()
        const second = audioContext.createOscillator()
        const gain = audioContext.createGain()

        first.type = 'sine'
        second.type = 'sine'
        first.frequency.value = 880
        second.frequency.value = 988

        gain.gain.setValueAtTime(0.0001, now)
        gain.gain.exponentialRampToValueAtTime(0.09, now + 0.01)
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18)
        gain.gain.setValueAtTime(0.0001, now + 0.20)
        gain.gain.exponentialRampToValueAtTime(0.08, now + 0.22)
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.38)

        first.connect(gain)
        second.connect(gain)
        gain.connect(audioContext.destination)

        first.start(now)
        first.stop(now + 0.18)
        second.start(now + 0.20)
        second.stop(now + 0.38)
      }
      catch {
        // Ignore playback errors in environments that block autoplay.
      }
    }

    if (audioContext.state === 'suspended') {
      void audioContext.resume()
        .then(startBeep)
        .catch(() => {
          // Ignore resume errors.
        })
      return
    }

    startBeep()
  }

  private ensurePomodoroAudioContext(): AudioContext | null {
    if (this.pomodoroAudioContext && this.pomodoroAudioContext.state !== 'closed')
      return this.pomodoroAudioContext

    const AudioContextCtor = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AudioContextCtor)
      return null

    try {
      this.pomodoroAudioContext = new AudioContextCtor()
    }
    catch {
      this.pomodoroAudioContext = null
    }

    return this.pomodoroAudioContext
  }

  private unlockPomodoroAudio() {
    const audioContext = this.ensurePomodoroAudioContext()
    if (!audioContext || audioContext.state !== 'suspended')
      return

    void audioContext.resume().catch(() => {
      // Ignore resume errors.
    })
  }

  private resetPomodoroDomRefs() {
    this.pomodoroPanelEl = null
    this.pomodoroTimeEl = null
    this.pomodoroProgressEl = null
    this.pomodoroPhaseEl = null
    this.pomodoroCycleEl = null
    this.pomodoroStateEl = null
  }

  private ensureValidActiveTab() {
    const boardNames = this.plugin.tableros.map(board => board.name)
    const fixedTabs = new Set([
      TareasView.COMPLETED_TAB_ID,
      TareasView.CANCELLED_TAB_ID,
      TareasView.POMODORO_TAB_ID,
    ])

    if (fixedTabs.has(this.activeTab))
      return

    if (boardNames.includes(this.activeTab))
      return

    this.activeTab = boardNames[0] || 'default'
  }

  private getGroupExpansionKey(groupName: string): string {
    return `${this.activeTab}::${groupName}`
  }

  private isArchivedTab(): boolean {
    return this.activeTab === TareasView.COMPLETED_TAB_ID || this.activeTab === TareasView.CANCELLED_TAB_ID
  }

  private isPomodoroTab(): boolean {
    return this.activeTab === TareasView.POMODORO_TAB_ID
  }

  private renderHeader(root: HTMLElement) {
    const header = root.createDiv({ cls: 'tareas-header' })

    const titleWrap = header.createDiv({ cls: 'tareas-title-wrap' })
    titleWrap.createEl('span', { text: '☰', cls: 'tareas-icon' })
    titleWrap.createEl('h1', { text: ' Tareas' })

    const actions = header.createDiv({ cls: 'tareas-header-actions' })
    actions.createEl('span', { text: '▦ Tablero', cls: 'tareas-view-toggle' })

    const newButton = actions.createEl('button', { cls: 'tareas-btn-new' })
    newButton.createEl('span', { text: 'Nuevo tablero' })
    newButton.onclick = () => new NewBoardModal(this.app, this.plugin, this).open()

    const deleteButton = actions.createEl('button', { cls: 'tareas-btn-delete-board' })
    deleteButton.createEl('span', { text: 'Eliminar tablero' })
    deleteButton.disabled = !this.plugin.canRemoveTablero(this.activeTab)
    deleteButton.onclick = () => this.openDeleteBoardConfirm()
  }

  private openDeleteBoardConfirm() {
    if (!this.plugin.canRemoveTablero(this.activeTab)) {
      new obsidian.Notice(`El tablero "${this.activeTab}" no se puede eliminar.`)
      return
    }

    const boardName = this.activeTab
    const boardTasks = getTasks(this.app).filter(task => task.tablero === boardName)
    const topLevelCount = boardTasks.filter(task => !task.parent).length
    const subtaskCount = boardTasks.length - topLevelCount
    const taskSummary = subtaskCount > 0
      ? `${topLevelCount} tarea(s) y ${subtaskCount} subtarea(s)`
      : `${topLevelCount} tarea(s)`

    new ConfirmDeleteTaskModal(this.app, {
      title: 'Eliminar tablero',
      message: `¿Seguro que querés eliminar el tablero "${boardName}"? Se borrarán ${taskSummary}, sus archivos .md, grupos y carpetas asociadas.`,
      confirmText: 'Aceptar',
      onConfirm: async () => {
        const removed = await this.plugin.removeTablero(boardName)
        if (!removed) {
          new obsidian.Notice(`No se pudo eliminar el tablero "${boardName}".`)
          return
        }

        this.activeTab = this.plugin.tableros[0]?.name || DEFAULT_BOARD_NAME
        await this.render()
        new obsidian.Notice(`Tablero "${boardName}" eliminado.`)
      },
    }).open()
  }

  private renderGroup(
    root: HTMLElement,
    group: Equipo,
    tasks: TaskItem[],
    allTasks: TaskItem[],
    taskPreviewMap: Map<string, string>,
  ) {
    const groupName = group.name
    const expansionKey = this.getGroupExpansionKey(groupName)
    const isManaged = this.plugin.getEquiposForTablero(this.activeTab).some(item => item.name === groupName)
    const expanded = this.expandedGroups.has(expansionKey)

    const column = root.createDiv({ cls: 'tareas-group' })
    const header = column.createDiv({ cls: 'tareas-group-header' })

    header.createEl('span', { text: expanded ? '▼ ' : '▶ ', cls: 'tareas-toggle' })
    const badge = header.createEl('span', { text: groupName, cls: 'tareas-badge' })
    badge.style.background = group.color
    header.createEl('span', { text: `  ${tasks.length}`, cls: 'tareas-count' })

    if (isManaged) {
      const editButton = header.createEl('button', { text: '✎', cls: 'tareas-group-edit-btn' })
      editButton.onclick = (event) => {
        event.stopPropagation()
        new EditSectionModal(this.app, this.plugin, group, this, this.activeTab).open()
      }
    }

    header.onclick = () => {
      if (expanded)
        this.expandedGroups.delete(expansionKey)
      else
        this.expandedGroups.add(expansionKey)

      this.render()
    }

    if (!expanded)
      return

    tasks.sort((a, b) => a.order - b.order)
    const cards = column.createDiv({ cls: 'tareas-card-list' })
    cards.dataset.group = groupName
    cards.dataset.board = this.activeTab
    cards.dataset.hasTasks = tasks.length > 0 ? 'true' : 'false'
    this.attachGroupCardListDropHandlers(cards, groupName, allTasks)
    for (const task of tasks)
      this.renderTaskCard(cards, task, allTasks, taskPreviewMap.get(task.file.path) || '')

    const addCard = cards.createDiv({ cls: 'tareas-task-card tareas-task-card-add' })
    const link = addCard.createEl('span', { text: '+ Nueva tarea', cls: 'tareas-add-link' })
    link.onclick = () => new NewTaskModal(this.app, this.plugin, this.activeTab, '', groupName).open()
  }

  private renderTaskCard(container: HTMLElement, task: TaskItem, allTasks: TaskItem[], taskPreview: string) {
    const subtasks = allTasks
      .filter(item => item.parent === task.file.basename)
      .sort((a, b) => a.order - b.order)
    const hasSubtasks = subtasks.length > 0
    const subtasksExpanded = this.expandedCardSubtasks.has(task.file.path)

    const card = container.createDiv({ cls: 'tareas-task-card' })
    card.dataset.path = task.file.path
    if (this.droppedTaskAnimationPath === task.file.path) {
      card.addClass('tareas-task-card-drop-animate')
      this.droppedTaskAnimationPath = null
    }

    this.attachCardDragHandlers(container, card, task, allTasks)
    this.attachCardEditHandlers(card, task)

    const statusBandClass = this.getStatusClassName(task.estado)
    const statusBand = card.createDiv({ cls: `tareas-card-side-band tareas-card-status-band tareas-card-status-band-${statusBandClass}` })
    this.renderStatusBand(statusBand, task)

    const priorityBandClass = this.getPriorityClassName(task.prioridad)
    const priorityBand = card.createDiv({ cls: `tareas-card-side-band tareas-card-priority-band tareas-card-priority-band-${priorityBandClass}` })
    this.renderPriorityBand(priorityBand, task)

    const actions = card.createDiv({ cls: 'tareas-card-actions tareas-card-actions-band' })
    this.renderStatusActions(actions, task)
    this.syncCardSideBandsTopOffset(card, actions)

    const titleRow = card.createDiv({ cls: 'tareas-card-title-row' })
    const title = titleRow.createEl('a', { text: task.tarea, cls: 'tareas-task-card-title' })
    title.setAttr('title', task.tarea)
    title.onclick = () => this.app.workspace.openLinkText(task.file.path, '', true)

    const commentButton = titleRow.createEl('button', { cls: 'tareas-card-comment-btn' })
    commentButton.setAttr('aria-label', 'Agregar comentario')
    commentButton.setAttr('title', 'Agregar comentario')
    obsidian.setIcon(commentButton, 'scroll-text')
    commentButton.onclick = (event) => {
      event.stopPropagation()
      new AddTaskCommentModal(this.app, task).open()
    }

    if (taskPreview)
      card.createEl('p', { text: taskPreview, cls: 'tareas-card-preview' })

    const footer = card.createDiv({ cls: 'tareas-card-footer' })
    if (hasSubtasks) {
      const subtasksToggle = footer.createEl('span', {
        text: `${subtasksExpanded ? '▼' : '▶'} ${subtasks.length} subtarea(s)`,
        cls: `tareas-card-subtasks tareas-card-subtasks-toggle${subtasksExpanded ? ' is-expanded' : ''}`,
      })

      subtasksToggle.onclick = (event) => {
        event.stopPropagation()
        if (subtasksExpanded)
          this.expandedCardSubtasks.delete(task.file.path)
        else
          this.expandedCardSubtasks.add(task.file.path)

        this.render()
      }
    }

    const addSubtask = footer.createEl('span', { text: '+ Subtarea', cls: 'tareas-add-link' })
    addSubtask.onclick = (event) => {
      event.stopPropagation()
      new NewTaskModal(this.app, this.plugin, task.tablero, task.file.basename, task.equipo).open()
    }

    if (hasSubtasks && subtasksExpanded)
      this.renderCardSubtaskList(card, subtasks)

    this.renderCardProgressBand(card, task)
  }

  private attachCardEditHandlers(card: HTMLElement, task: TaskItem) {
    card.addEventListener('dblclick', (event) => {
      if (!(event.target instanceof HTMLElement))
        return

      if (event.target.closest('a, button, input, textarea, select'))
        return

      event.stopPropagation()
      new EditTaskFileModal(this.app, task).open()
    })
  }

  private syncCardSideBandsTopOffset(card: HTMLElement, actionsBand: HTMLElement) {
    const applyOffset = () => {
      const measuredHeight = Math.ceil(actionsBand.getBoundingClientRect().height)
      card.style.setProperty('--tareas-card-actions-band-height', `${measuredHeight}px`)
    }

    applyOffset()
    window.requestAnimationFrame(applyOffset)
  }

  private async buildTaskPreviewMap(tasks: TaskItem[]): Promise<Map<string, string>> {
    const previewMap = new Map<string, string>()

    await Promise.all(tasks.map(async (task) => {
      try {
        const fileContent = await this.app.vault.cachedRead(task.file)
        previewMap.set(task.file.path, extractTaskBodyPreview(fileContent))
      }
      catch {
        previewMap.set(task.file.path, '')
      }
    }))

    return previewMap
  }

  private renderRow(tbody: HTMLElement, task: TaskItem, allTasks: TaskItem[], depth: number) {
    const subtasks = allTasks
      .filter(item => item.parent === task.file.basename)
      .sort((a, b) => a.order - b.order)

    const hasSubtasks = subtasks.length > 0
    const expanded = this.expandedTasks.has(task.file.path)

    const row = tbody.createEl('tr', { cls: 'tareas-row' })
    row.dataset.path = task.file.path
    row.dataset.depth = String(depth)

    this.renderDragCell(row, tbody, task, allTasks, depth)
    this.renderToggleCell(row, task, hasSubtasks, expanded, depth)
    this.renderTaskNameCell(row, task, depth)
    this.renderStatusCell(row, task)
    this.renderTeamCell(row, task, depth)
    this.renderPriorityCell(row, task)
    this.renderDedicatedCell(row, task)
    this.renderEstimatedCell(row, task)
    this.renderStartDateCell(row, task)
    this.renderEndDateCell(row, task)
    this.renderPercentCell(row, task)
    this.renderStatusActionsCell(row, task)

    if (!expanded)
      return

    for (const subtask of subtasks)
      this.renderRow(tbody, subtask, allTasks, depth + 1)

    if (!this.isArchivedTab() && !this.isPomodoroTab()) {
      const addSubRow = tbody.createEl('tr', { cls: 'tareas-add-row' })
      addSubRow.createEl('td')
      addSubRow.createEl('td')

      const addSubCell = addSubRow.createEl('td', { attr: { colspan: '10' } })
      addSubCell.style.paddingLeft = `${(depth + 1) * 24 + 8}px`

      const addSubtask = addSubCell.createEl('span', { text: '+ Subtarea', cls: 'tareas-add-link' })
      addSubtask.onclick = (event) => {
        event.stopPropagation()
        new NewTaskModal(this.app, this.plugin, task.tablero, task.file.basename, task.equipo).open()
      }
    }
  }

  private renderDragCell(row: HTMLElement, tbody: HTMLElement, task: TaskItem, allTasks: TaskItem[], depth: number) {
    const dragCell = row.createEl('td', { cls: 'tareas-cell-drag' })
    dragCell.createEl('span', { text: '⠁⠁⠁', cls: 'tareas-drag-handle' })

    row.draggable = true

    row.addEventListener('dragstart', (event) => {
      const dataTransfer = event.dataTransfer
      if (!dataTransfer)
        return

      this.dragPath = task.file.path
      this.dragDepth = depth
      this.dragParent = task.parent
      row.addClass('tareas-row-dragging')
      dataTransfer.effectAllowed = 'move'
      event.stopPropagation()
    })

    row.addEventListener('dragend', () => {
      this.resetRowDragState(tbody, row)
    })

    row.addEventListener('dragover', (event) => {
      if (!this.canDropOnRow(task, depth))
        return

      event.preventDefault()
      event.stopPropagation()
      if (event.dataTransfer)
        event.dataTransfer.dropEffect = 'move'

      tbody.querySelectorAll('.tareas-row-drag-over').forEach(item => item.classList.remove('tareas-row-drag-over'))
      row.addClass('tareas-row-drag-over')
    })

    row.addEventListener('dragleave', () => {
      row.removeClass('tareas-row-drag-over')
    })

    row.addEventListener('drop', async (event) => {
      if (!this.canDropOnRow(task, depth))
        return

      event.preventDefault()
      event.stopPropagation()
      row.removeClass('tareas-row-drag-over')

      if (!this.dragPath)
        return

      if (depth === 0)
        await this.reorderTask(this.dragPath, task.file.path, allTasks)
      else
        await this.reorderSubtask(this.dragPath, task.file.path, allTasks)

      this.resetRowDragState(tbody, row)
    })
  }

  private renderToggleCell(row: HTMLElement, task: TaskItem, hasSubtasks: boolean, expanded: boolean, depth: number) {
    const toggleCell = row.createEl('td', { cls: 'tareas-cell-toggle' })

    if (depth !== 0)
      return

    const toggle = toggleCell.createEl('span', {
      text: expanded ? '▼' : '▶',
      cls: `tareas-subtask-toggle${hasSubtasks ? '' : ' tareas-toggle-empty'}`,
    })

    toggle.onclick = (event) => {
      event.stopPropagation()

      if (expanded)
        this.expandedTasks.delete(task.file.path)
      else
        this.expandedTasks.add(task.file.path)

      this.render()
    }
  }

  private renderTaskNameCell(row: HTMLElement, task: TaskItem, depth: number) {
    const cell = row.createEl('td', { cls: 'tareas-cell-name' })
    cell.style.paddingLeft = `${depth * 24 + 8}px`

    const titleWrap = cell.createDiv({ cls: 'tareas-task-title-wrap' })

    if (depth > 0)
      titleWrap.createEl('span', { text: '└ ', cls: 'tareas-subtask-indent' })

    const link = titleWrap.createEl('a', { text: task.tarea, cls: 'tareas-task-link' })
    link.setAttr('title', task.tarea)
    link.onclick = () => this.app.workspace.openLinkText(task.file.path, '', true)
  }

  private renderStatusCell(row: HTMLElement, task: TaskItem) {
    const cell = row.createEl('td', { cls: 'tareas-cell-estado' })
    this.renderStatusBadge(cell, task)
  }

  private renderStatusBadge(container: HTMLElement, task: TaskItem) {
    const statusClass = this.getStatusClassName(task.estado)
    const badge = container.createEl('span', {
      text: task.estado,
      cls: `tareas-estado tareas-estado-${statusClass}`,
    })

    badge.onclick = (event) => {
      event.stopPropagation()
      showDropdown(badge, ESTADOS, task.estado, async (value) => {
        await this.applyStateTransition(task, value)
      })
    }
  }

  private renderStatusBand(container: HTMLElement, task: TaskItem) {
    container.createEl('span', { text: task.estado, cls: 'tareas-card-side-band-text' })
    container.onclick = (event) => {
      event.stopPropagation()
      showDropdown(container, ESTADOS, task.estado, async (value) => {
        await this.applyStateTransition(task, value)
      })
    }
  }

  private renderPriorityBand(container: HTMLElement, task: TaskItem) {
    container.createEl('span', { text: task.prioridad, cls: 'tareas-card-side-band-text' })
    container.onclick = (event) => {
      event.stopPropagation()
      showDropdown(container, PRIORIDADES, task.prioridad, async (value) => {
        await this.updateTask(task, { prioridad: value })
      })
    }
  }

  private renderCardSubtaskList(card: HTMLElement, subtasks: TaskItem[]) {
    const list = card.createDiv({ cls: 'tareas-card-subtask-list' })

    for (const subtask of subtasks) {
      const row = list.createDiv({ cls: 'tareas-card-subtask-row' })
      const checked = subtask.estado === 'Finalizada'

      const checkbox = row.createEl('input', {
        cls: 'tareas-card-subtask-check',
        attr: { type: 'checkbox' },
      })
      checkbox.checked = checked

      checkbox.onclick = (event) => {
        event.stopPropagation()
      }

      checkbox.onchange = async (event) => {
        event.stopPropagation()
        const nextStatus = checkbox.checked ? 'Finalizada' : 'Pendiente'
        if (subtask.estado === nextStatus)
          return

        await this.applyStateTransition(subtask, nextStatus, undefined, { moveFile: false })
      }

      const title = row.createEl('a', {
        text: subtask.tarea,
        cls: `tareas-card-subtask-title${checked ? ' is-done' : ''}`,
      })
      title.setAttr('title', subtask.tarea)
      title.onclick = (event) => {
        event.stopPropagation()
        this.app.workspace.openLinkText(subtask.file.path, '', true)
      }

      const commentButton = row.createEl('button', { cls: 'tareas-card-comment-btn tareas-card-subtask-comment-btn' })
      commentButton.setAttr('aria-label', 'Agregar comentario')
      commentButton.setAttr('title', 'Agregar comentario')
      obsidian.setIcon(commentButton, 'scroll-text')
      commentButton.onclick = (event) => {
        event.stopPropagation()
        new AddTaskCommentModal(this.app, subtask).open()
      }
    }
  }

  private renderCardProgressBand(card: HTMLElement, task: TaskItem) {
    const row = card.createDiv({ cls: 'tareas-card-progress-row' })
    const band = row.createDiv({ cls: 'tareas-card-progress-band' })
    const fill = band.createDiv({ cls: 'tareas-card-progress-band-fill' })
    const text = band.createDiv({ cls: 'tareas-card-progress-band-text' })
    const dedicatedAndEstimatedText = `${this.formatDecimal(task.dedicado)}/${this.formatDecimal(task.estimacion)}`
    const deviationText = ` +-> ${this.formatDecimal(task.desvio)}`
    const textValue = text.createEl('span', {
      cls: 'tareas-card-progress-band-text-value tareas-card-progress-band-text-editable',
      text: dedicatedAndEstimatedText,
    })
    textValue.createEl('span', { cls: 'tareas-card-progress-band-text-deviation', text: deviationText })
    textValue.setAttr('title', `${this.formatDecimal(task.dedicado)} h / ${this.formatDecimal(task.estimacion)} h +-> ${this.formatDecimal(task.desvio)} h`)
    textValue.onclick = (event) => {
      event.stopPropagation()
      this.editCardDedicatedValue(band, textValue, task)
    }

    const progressPercent = task.estimacion > 0
      ? (task.dedicado / task.estimacion) * 100
      : 0

    const isOverflow = progressPercent > 100
    let visiblePercent = isOverflow
      ? progressPercent % 100
      : progressPercent

    if (isOverflow && visiblePercent === 0)
      visiblePercent = 100

    const clampedPercent = Math.max(0, Math.min(100, visiblePercent))
    fill.style.width = `${clampedPercent}%`

    if (isOverflow)
      band.addClass('is-overflow')

    const pomodoroButton = row.createEl('button', { cls: 'tareas-card-pomodoro-btn' })
    const isPomodoroRunning = this.plugin.pomodoro.runState === 'running'
    pomodoroButton.disabled = isPomodoroRunning
    pomodoroButton.setAttr('aria-label', 'Abrir Pomodoro con esta tarea')
    pomodoroButton.setAttr('title', isPomodoroRunning
      ? 'No se puede vincular una tarea mientras el contador está corriendo'
      : 'Abrir Pomodoro con esta tarea')
    obsidian.setIcon(pomodoroButton, 'clock-3')
    pomodoroButton.onclick = (event) => {
      event.stopPropagation()
      this.openPomodoroWithTask(task)
    }
  }

  private openPomodoroWithTask(task: TaskItem) {
    if (this.plugin.pomodoro.runState === 'running') {
      new obsidian.Notice('No se puede cambiar la tarea mientras el contador está corriendo.')
      return
    }

    this.setPomodoroSelectedTaskPath(task.file.path)
    this.activeTab = TareasView.POMODORO_TAB_ID
    void this.render()
  }

  private editCardDedicatedValue(band: HTMLElement, text: HTMLElement, task: TaskItem) {
    if (band.querySelector('.tareas-card-progress-input'))
      return

    const input = band.createEl('input', { cls: 'tareas-card-progress-input' })
    input.type = 'number'
    input.min = '0'
    input.step = '0.01'
    input.value = this.formatDecimal(task.dedicado)

    text.style.visibility = 'hidden'
    input.focus()
    input.select()

    const closeEditor = async (save: boolean) => {
      const nextValue = this.parseDecimal(input.value)
      input.remove()
      text.style.visibility = ''

      if (!save || nextValue === task.dedicado)
        return

      await this.updateTask(task, { dedicado: nextValue })
    }

    input.onclick = (event) => {
      event.stopPropagation()
    }

    input.addEventListener('blur', () => {
      void closeEditor(true)
    })

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter')
        input.blur()

      if (event.key === 'Escape') {
        event.preventDefault()
        void closeEditor(false)
      }
    })
  }

  private renderStatusActionsCell(row: HTMLElement, task: TaskItem) {
    const cell = row.createEl('td', { cls: 'tareas-cell-actions' })
    if (this.isArchivedTab()) {
      this.renderArchivedActions(cell, task)
      return
    }

    this.renderStatusActions(cell, task)
  }

  private getStatusClassName(status: string): string {
    return status.toLowerCase().replace(/ /g, '-')
  }

  private getPriorityClassName(priority: string): string {
    return priority.toLowerCase().replace(/ /g, '-')
  }

  private renderStatusActions(container: HTMLElement, task: TaskItem) {
    const actions = container.createDiv({ cls: 'tareas-status-actions' })

    const progressAction = task.estado === 'En progreso'
      ? { label: 'Parar', nextStatus: 'Pendiente' }
      : { label: 'Iniciar', nextStatus: 'En progreso' }

    const statusActions = [
      { id: 'dismiss', label: 'Desestimar', nextStatus: 'Cancelada', cls: 'is-dismiss' },
      { id: 'start-stop', ...progressAction, cls: 'is-start-stop' },
      { id: 'finish', label: 'Finalizar', nextStatus: 'Finalizada', cls: 'is-finish' },
      { id: 'block', label: 'Bloquear', nextStatus: 'Bloqueada', cls: 'is-block' },
    ]

    for (const action of statusActions) {
      const button = actions.createEl('button', {
        text: action.label,
        cls: 'tareas-status-action-btn',
      })
      button.addClass(action.cls)

      if (task.estado === action.nextStatus)
        button.addClass('is-active')

      button.onclick = async (event) => {
        event.stopPropagation()

        if (task.estado === action.nextStatus)
          return

        await this.applyStatusAction(task, action.id, action.nextStatus)
      }
    }

    const urgentButton = actions.createEl('button', {
      text: 'Urgente',
      cls: 'tareas-status-action-btn',
    })
    urgentButton.addClass('is-urgent')

    if (task.prioridad === 'Urgente')
      urgentButton.addClass('is-active')

    urgentButton.onclick = async (event) => {
      event.stopPropagation()
      if (task.prioridad === 'Urgente')
        return

      await this.updateTask(task, { prioridad: 'Urgente' })
    }
  }

  private renderArchivedActions(container: HTMLElement, task: TaskItem) {
    const actions = container.createDiv({ cls: 'tareas-status-actions' })

    const recoverButton = actions.createEl('button', {
      text: 'Recuperar',
      cls: 'tareas-status-action-btn',
    })
    recoverButton.onclick = async (event) => {
      event.stopPropagation()
      await this.recoverArchivedTask(task)
    }

    const deleteButton = actions.createEl('button', {
      text: 'Eliminar',
      cls: 'tareas-status-action-btn is-dismiss',
    })
    deleteButton.onclick = (event) => {
      event.stopPropagation()
      this.openDeleteTaskConfirm(task)
    }
  }

  private async recoverArchivedTask(task: TaskItem) {
    await this.applyStateTransition(task, 'Pendiente')
    await this.render()
  }

  private openDeleteTaskConfirm(task: TaskItem) {
    const family = this.getTaskFamilyPostOrder(task)
    const fileCount = family.length
    const taskLabel = fileCount > 1
      ? `"${task.tarea}" y ${fileCount - 1} subtarea(s)`
      : `"${task.tarea}"`

    new ConfirmDeleteTaskModal(this.app, {
      title: 'Eliminar tarea definitivamente',
      message: `¿Seguro que querés eliminar ${taskLabel}? Esta acción borra los archivos .md y no se puede deshacer.`,
      confirmText: 'Aceptar',
      onConfirm: async () => {
        await this.deleteTaskFamily(task, family)
      },
    }).open()
  }

  private getTaskFamilyPostOrder(task: TaskItem): TaskItem[] {
    const allTasks = getTasks(this.app)
    const byParent = new Map<string, TaskItem[]>()
    for (const current of allTasks) {
      if (!current.parent)
        continue

      const siblings = byParent.get(current.parent) ?? []
      siblings.push(current)
      byParent.set(current.parent, siblings)
    }

    const visitedPaths = new Set<string>()
    const ordered: TaskItem[] = []

    const visit = (currentTask: TaskItem) => {
      if (visitedPaths.has(currentTask.file.path))
        return

      visitedPaths.add(currentTask.file.path)
      const children = byParent.get(currentTask.file.basename) ?? []
      for (const child of children)
        visit(child)

      ordered.push(currentTask)
    }

    visit(task)
    return ordered
  }

  private async deleteTaskFamily(task: TaskItem, family: TaskItem[]) {
    const selectedTaskPath = this.plugin.pomodoro.selectedTaskPath
    for (const member of family) {
      const abstractFile = this.app.vault.getAbstractFileByPath(member.file.path)
      if (!(abstractFile instanceof obsidian.TFile))
        continue

      await this.app.vault.delete(abstractFile, true)
    }

    if (selectedTaskPath && family.some(member => member.file.path === selectedTaskPath))
      this.setPomodoroSelectedTaskPath(null)

    await this.render()
    new obsidian.Notice(`Se eliminó "${task.tarea}" de forma definitiva.`)
  }

  private async applyStatusAction(task: TaskItem, actionId: string, nextStatus: string) {
    if (actionId === 'start-stop') {
      if (task.estado === 'En progreso') {
        await this.applyStateTransition(task, nextStatus)
        return
      }

      await this.applyStateTransition(task, nextStatus, {
        ...this.buildStateChangeUpdates(task, nextStatus),
        fechaInicio: new Date().toISOString(),
      })
      return
    }

    if (actionId === 'finish') {
      const endDate = new Date()
      const startDate = parseTaskDate(task.fechaInicio)
      const dedicatedHours = startDate
        ? this.roundToTwo((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60))
        : 0

      const updates: Partial<TaskFrontmatter> = {
        estado: nextStatus,
        fechaFin: endDate.toISOString(),
        dedicado: dedicatedHours,
      }

      if (!startDate)
        updates.fechaInicio = endDate.toISOString()

      if (task.estimacion === 0)
        updates.estimacion = dedicatedHours

      await this.applyStateTransition(task, nextStatus, updates)
      return
    }

    await this.applyStateTransition(task, nextStatus)
  }

  private buildStateChangeUpdates(task: TaskItem, nextStatus: string): Partial<TaskFrontmatter> {
    const updates: Partial<TaskFrontmatter> = { estado: nextStatus }

    if (task.estado !== 'Finalizada' || nextStatus === 'Finalizada')
      return updates

    const remainingHours = this.roundToTwo(task.estimacion - task.dedicado)
    if (remainingHours <= 0)
      return updates

    updates.fechaFin = new Date(Date.now() + remainingHours * 60 * 60 * 1000).toISOString()
    return updates
  }

  private renderTeamCell(row: HTMLElement, task: TaskItem, depth: number) {
    const cell = row.createEl('td')
    if (depth > 0)
      return

    this.renderTeamBadge(cell, task)
  }

  private renderTeamBadge(container: HTMLElement, task: TaskItem) {
    const boardGroups = this.plugin.getEquiposForTablero(task.tablero)
    const teamConfig = boardGroups.find(item => item.name === task.equipo)
    const badge = container.createEl('span', {
      text: task.equipo || 'Sin grupo',
      cls: 'tareas-equipo-badge',
    })

    if (teamConfig)
      badge.style.background = teamConfig.color

    badge.onclick = (event) => {
      event.stopPropagation()

      const options = boardGroups.map(equipo => equipo.name)
      showDropdown(badge, options, task.equipo, async (nextTeam) => {
        const previousTeam = task.equipo
        await this.updateTask(task, { equipo: nextTeam })

        const subtasks = getTasks(this.app).filter(item => item.parent === task.file.basename)
        for (const subtask of subtasks)
          await this.updateTask(subtask, { equipo: nextTeam })

        await this.rebalanceBoardSchedule(task.tablero, previousTeam)
        await this.rebalanceBoardSchedule(task.tablero, nextTeam)
      })
    }
  }

  private renderPriorityCell(row: HTMLElement, task: TaskItem) {
    const cell = row.createEl('td', { cls: 'tareas-cell-prioridad' })
    this.renderPriorityBadge(cell, task)
  }

  private renderPriorityBadge(container: HTMLElement, task: TaskItem) {
    const priorityClass = task.prioridad.toLowerCase()
    const urgentActive = task.prioridad === 'Urgente' && task.estado !== 'Finalizada'

    const badge = container.createEl('span', {
      text: task.prioridad,
      cls: `tareas-prioridad tareas-prioridad-${priorityClass}${urgentActive ? ' tareas-urgente-activa' : ''}`,
    })

    badge.onclick = (event) => {
      event.stopPropagation()
      showDropdown(badge, PRIORIDADES, task.prioridad, async (value) => {
        await this.updateTask(task, { prioridad: value })
      })
    }
  }

  private renderDedicatedCell(row: HTMLElement, task: TaskItem) {
    const cell = row.createEl('td', { cls: 'tareas-cell-num' })
    const editable = cell.createEl('span', { text: this.formatDecimal(task.dedicado), cls: 'tareas-editable' })

    editable.onclick = () => {
      this.editNumberCell(editable, task.dedicado, async value => this.updateTask(task, { dedicado: value }))
    }
  }

  private renderEstimatedCell(row: HTMLElement, task: TaskItem) {
    const cell = row.createEl('td', { cls: 'tareas-cell-num' })
    const editable = cell.createEl('span', { text: this.formatDecimal(task.estimacion), cls: 'tareas-editable' })

    editable.onclick = () => {
      this.editNumberCell(editable, task.estimacion, async (value) => {
        await this.updateTask(task, { estimacion: value })
        await this.rebalanceBoardSchedule(task.tablero, task.equipo)
      })
    }
  }

  private renderStartDateCell(row: HTMLElement, task: TaskItem) {
    row.createEl('td', { cls: 'tareas-cell-date', text: this.formatTaskDate(task.fechaInicio) })
  }

  private renderEndDateCell(row: HTMLElement, task: TaskItem) {
    row.createEl('td', { cls: 'tareas-cell-date', text: this.formatTaskDate(task.fechaFin) })
  }

  private renderPercentCell(row: HTMLElement, task: TaskItem) {
    const percent = this.calculateProgressPercent(task)

    const cell = row.createEl('td', { cls: 'tareas-cell-pct' })
    cell.createEl('span', { text: `${percent} %`, cls: 'tareas-pct-text' })

    const dot = cell.createEl('span', { cls: 'tareas-pct-dot' })
    if (percent >= 100)
      dot.addClass('full')
    else if (percent > 0)
      dot.addClass('partial')
  }

  private editNumberCell(
    span: HTMLSpanElement,
    currentValue: number,
    onSave: (nextValue: number) => Promise<void>,
  ) {
    const input = document.createElement('input')
    input.type = 'number'
    input.className = 'tareas-inline-input'
    input.value = this.formatDecimal(currentValue)
    input.min = '0'
    input.step = '0.01'

    span.replaceWith(input)
    input.focus()
    input.select()

    const finish = () => {
      const value = this.parseDecimal(input.value)
      void onSave(value)
    }

    input.addEventListener('blur', finish)
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter')
        input.blur()

      if (event.key === 'Escape') {
        input.value = this.formatDecimal(currentValue)
        input.blur()
      }
    })
  }

  private parseDecimal(value: string): number {
    const parsed = Number.parseFloat(value)
    if (Number.isNaN(parsed) || parsed < 0)
      return 0

    return Math.round(parsed * 100) / 100
  }

  private formatDecimal(value: number): string {
    return this.parseDecimal(String(value)).toFixed(2)
  }

  private formatTaskDate(value: string): string {
    const date = parseTaskDate(value)
    if (!date)
      return '—'

    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const hour = String(date.getHours()).padStart(2, '0')
    const minute = String(date.getMinutes()).padStart(2, '0')

    return `${day}/${month} ${hour}:${minute}`
  }

  private roundToTwo(value: number): number {
    if (Number.isNaN(value) || value <= 0)
      return 0

    return Math.round(value * 100) / 100
  }

  private calculateProgressPercent(task: TaskItem): number {
    const total = task.estimacion || 0
    if (total <= 0)
      return 0

    return Math.round((task.dedicado / total) * 100)
  }

  private attachCardDragHandlers(container: HTMLElement, card: HTMLElement, task: TaskItem, allTasks: TaskItem[]) {
    card.draggable = true

    card.addEventListener('dragstart', (event) => {
      const dataTransfer = event.dataTransfer
      if (!dataTransfer)
        return

      this.dragPath = task.file.path
      this.dragDepth = 0
      this.dragParent = task.parent
      this.dragInsertPosition = null
      card.addClass('tareas-task-card-dragging')
      card.addClass('tareas-task-card-drag-preview')
      dataTransfer.effectAllowed = 'move'
      event.stopPropagation()
    })

    card.addEventListener('dragend', () => {
      this.resetCardDragState(container, card)
    })

    card.addEventListener('dragover', (event) => {
      if (!this.canDropOnRow(task, 0))
        return

      event.preventDefault()
      event.stopPropagation()
      if (event.dataTransfer)
        event.dataTransfer.dropEffect = 'move'

      const insertPosition = this.resolveCardInsertPosition(event, card)
      this.dragInsertPosition = insertPosition
      this.clearCardDropMarkers()
      card.addClass(insertPosition === 'before' ? 'tareas-task-card-drag-over-top' : 'tareas-task-card-drag-over-bottom')
    })

    card.addEventListener('drop', async (event) => {
      if (!this.canDropOnRow(task, 0))
        return

      event.preventDefault()
      event.stopPropagation()
      const insertPosition = this.dragInsertPosition ?? this.resolveCardInsertPosition(event, card)
      card.removeClass('tareas-task-card-drag-over-top')
      card.removeClass('tareas-task-card-drag-over-bottom')

      if (!this.dragPath)
        return

      const dragged = allTasks.find(item => item.file.path === this.dragPath)
      if (!dragged)
        return

      this.droppedTaskAnimationPath = this.dragPath
      if (!dragged.parent && dragged.tablero === task.tablero && dragged.equipo !== task.equipo)
        await this.moveTaskToGroup(this.dragPath, task.equipo, allTasks, task.file.path, insertPosition)
      else
        await this.reorderTask(this.dragPath, task.file.path, allTasks, insertPosition)

      this.resetCardDragState(container, card)
    })
  }

  private attachGroupCardListDropHandlers(container: HTMLElement, groupName: string, allTasks: TaskItem[]) {
    container.addEventListener('dragover', (event) => {
      const dragPath = this.dragPath
      if (!dragPath)
        return

      const dragged = allTasks.find(item => item.file.path === dragPath)
      if (!dragged || dragged.parent)
        return

      if (dragged.tablero !== this.activeTab || dragged.equipo === groupName)
        return

      event.preventDefault()
      event.stopPropagation()
      if (event.dataTransfer)
        event.dataTransfer.dropEffect = 'move'

      container.addClass('tareas-card-list-drop-target')
    })

    container.addEventListener('dragleave', (event) => {
      if (event.relatedTarget instanceof Node && container.contains(event.relatedTarget))
        return

      container.removeClass('tareas-card-list-drop-target')
    })

    container.addEventListener('drop', async (event) => {
      const dragPath = this.dragPath
      if (!dragPath)
        return

      const markerCard = container.querySelector('.tareas-task-card-drag-over-top, .tareas-task-card-drag-over-bottom')
      const markerTargetPath = markerCard instanceof HTMLElement ? markerCard.dataset.path ?? null : null
      const markerInsertPosition: 'before' | 'after' | null = markerCard instanceof HTMLElement
        ? (markerCard.classList.contains('tareas-task-card-drag-over-top') ? 'before' : 'after')
        : null

      const targetCard = (event.target as HTMLElement | null)?.closest('.tareas-task-card')
      if (targetCard && !targetCard.classList.contains('tareas-task-card-add'))
        return

      const dragged = allTasks.find(item => item.file.path === dragPath)
      if (!dragged || dragged.parent)
        return

      if (dragged.tablero !== this.activeTab)
        return

      event.preventDefault()
      event.stopPropagation()
      container.removeClass('tareas-card-list-drop-target')
      this.droppedTaskAnimationPath = dragPath

      if (markerTargetPath && markerInsertPosition) {
        if (dragged.equipo === groupName)
          await this.reorderTask(dragPath, markerTargetPath, allTasks, markerInsertPosition)
        else
          await this.moveTaskToGroup(dragPath, groupName, allTasks, markerTargetPath, markerInsertPosition)
      }
      else if (dragged.equipo !== groupName) {
        await this.moveTaskToGroup(dragPath, groupName, allTasks)
      }

      this.dragPath = null
      this.dragDepth = null
      this.dragParent = null
      this.dragInsertPosition = null
      this.clearCardDropMarkers()
    })
  }

  private async reorderTask(draggedPath: string, targetPath: string, allTasks: TaskItem[], insertPosition: 'before' | 'after' | null = null) {
    const dragged = allTasks.find(task => task.file.path === draggedPath)
    const target = allTasks.find(task => task.file.path === targetPath)
    if (!dragged || !target)
      return

    const siblings = allTasks
      .filter(task => !task.parent && task.tablero === dragged.tablero && task.equipo === dragged.equipo)
      .sort((a, b) => a.order - b.order)

    const fromIndex = siblings.findIndex(item => item.file.path === draggedPath)
    const toIndex = siblings.findIndex(item => item.file.path === targetPath)

    let nextIndex = toIndex
    if (insertPosition) {
      nextIndex = toIndex + (insertPosition === 'after' ? 1 : 0)
      if (fromIndex < nextIndex)
        nextIndex -= 1
    }

    const nextOrder = reorderList(siblings, fromIndex, nextIndex)
    await persistTaskOrder(nextOrder, async (task, order) => this.updateTask(task, { order }))
    await this.rebalanceBoardSchedule(dragged.tablero, dragged.equipo)
    await this.render()
  }

  private async reorderSubtask(draggedPath: string, targetPath: string, allTasks: TaskItem[]) {
    const dragged = allTasks.find(task => task.file.path === draggedPath)
    const target = allTasks.find(task => task.file.path === targetPath)
    if (!dragged || !target)
      return

    const siblings = allTasks
      .filter(task => task.parent === dragged.parent)
      .sort((a, b) => a.order - b.order)

    const fromIndex = siblings.findIndex(item => item.file.path === draggedPath)
    const toIndex = siblings.findIndex(item => item.file.path === targetPath)

    const nextOrder = reorderList(siblings, fromIndex, toIndex)
    await persistTaskOrder(nextOrder, async (task, order) => this.updateTask(task, { order }))
  }

  private async moveTaskToGroup(
    draggedPath: string,
    targetGroup: string,
    allTasks: TaskItem[],
    targetPath: string | null = null,
    insertPosition: 'before' | 'after' = 'after',
  ) {
    const dragged = allTasks.find(task => task.file.path === draggedPath)
    if (!dragged || dragged.parent)
      return

    const previousGroup = dragged.equipo
    await this.updateTask(dragged, { equipo: targetGroup })

    const subtasks = allTasks.filter(task => task.parent === dragged.file.basename)
    for (const subtask of subtasks)
      await this.updateTask(subtask, { equipo: targetGroup })

    if (!targetPath) {
      const nextOrder = this.resolveNextOrderForGroup(allTasks, dragged.tablero, targetGroup, draggedPath)
      await this.updateTask(dragged, { order: nextOrder })
    }
    else {
      const siblings = allTasks
        .filter(task => !task.parent && task.tablero === dragged.tablero && task.equipo === targetGroup && task.file.path !== draggedPath)
        .sort((a, b) => a.order - b.order)

      const targetIndex = siblings.findIndex(item => item.file.path === targetPath)
      if (targetIndex < 0) {
        const nextOrder = this.resolveNextOrderForGroup(allTasks, dragged.tablero, targetGroup, draggedPath)
        await this.updateTask(dragged, { order: nextOrder })
      }
      else {
        const insertIndex = targetIndex + (insertPosition === 'after' ? 1 : 0)
        const nextOrder = [...siblings]
        nextOrder.splice(insertIndex, 0, dragged)
        await persistTaskOrder(nextOrder, async (task, order) => this.updateTask(task, { order }))
      }
    }

    await this.rebalanceBoardSchedule(dragged.tablero, previousGroup)
    await this.rebalanceBoardSchedule(dragged.tablero, targetGroup)
    await this.render()
  }

  private resolveCardInsertPosition(event: DragEvent, card: HTMLElement): 'before' | 'after' {
    const bounds = card.getBoundingClientRect()
    const midpoint = bounds.top + (bounds.height / 2)
    return event.clientY < midpoint ? 'before' : 'after'
  }

  private clearCardDropMarkers() {
    const root = this.getRootEl()
    root.querySelectorAll('.tareas-task-card-drag-over').forEach(item => item.classList.remove('tareas-task-card-drag-over'))
    root.querySelectorAll('.tareas-task-card-drag-over-top').forEach(item => item.classList.remove('tareas-task-card-drag-over-top'))
    root.querySelectorAll('.tareas-task-card-drag-over-bottom').forEach(item => item.classList.remove('tareas-task-card-drag-over-bottom'))
  }

  private resolveNextOrderForGroup(allTasks: TaskItem[], boardName: string, groupName: string, excludePath: string): number {
    const siblingOrders = allTasks
      .filter(task => !task.parent && task.tablero === boardName && task.equipo === groupName && task.file.path !== excludePath)
      .map(task => Number.isFinite(task.order) ? task.order : 0)

    if (siblingOrders.length === 0)
      return ORDER_STEP

    return Math.max(...siblingOrders) + ORDER_STEP
  }

  private async updateTask(task: TaskItem, updates: Partial<TaskFrontmatter>) {
    await updateFrontmatter(this.app, task.file, updates)
  }

  private async applyStateTransition(
    task: TaskItem,
    nextStatus: string,
    explicitUpdates?: Partial<TaskFrontmatter>,
    options?: { moveFile?: boolean, syncSubtasksWithParent?: boolean },
  ) {
    const updates = explicitUpdates ?? this.buildStateChangeUpdates(task, nextStatus)
    await this.updateTask(task, updates)

    const shouldMoveFile = options?.moveFile ?? true
    const shouldSyncSubtasks = options?.syncSubtasksWithParent ?? true
    const isInArchivedFolder = isTaskInCompletedFolder(task.file.path)
    if (shouldMoveFile && nextStatus === 'Finalizada')
      await moveTaskToCompletedFolder(this.app, task.file, Boolean(task.parent))

    if (shouldMoveFile && nextStatus === 'Cancelada')
      await moveTaskToCancelledFolder(this.app, task.file, Boolean(task.parent))

    if (shouldMoveFile && nextStatus !== 'Finalizada' && nextStatus !== 'Cancelada' && isInArchivedFolder)
      await moveTaskToActiveFolder(this.app, task.file, Boolean(task.parent))

    if (shouldMoveFile && shouldSyncSubtasks && !task.parent) {
      if (nextStatus === 'En progreso')
        await this.updateSubtasksStatusForParent(task.file.basename, 'En progreso')

      if (nextStatus === 'Finalizada')
        await this.moveSubtasksForParent(task.file.basename, 'Finalizada')

      if (nextStatus === 'Cancelada')
        await this.moveSubtasksForParent(task.file.basename, 'Cancelada')

      if (nextStatus !== 'Finalizada' && nextStatus !== 'Cancelada' && isInArchivedFolder)
        await this.moveSubtasksForParent(task.file.basename, null)
    }

    if (nextStatus === 'Finalizada' || nextStatus === 'Cancelada' || isInArchivedFolder)
      await this.rebalanceBoardSchedule(task.tablero, task.equipo)
  }

  private async moveSubtasksForParent(parentTaskName: string, nextTerminalStatus: 'Finalizada' | 'Cancelada' | null) {
    const subtasks = getTasks(this.app).filter(item => item.parent === parentTaskName)

    for (const subtask of subtasks) {
      if (nextTerminalStatus) {
        if (subtask.estado !== nextTerminalStatus)
          await this.updateTask(subtask, { estado: nextTerminalStatus })

        if (nextTerminalStatus === 'Finalizada')
          await moveTaskToCompletedFolder(this.app, subtask.file, true)
        else
          await moveTaskToCancelledFolder(this.app, subtask.file, true)
      }
      else {
        await moveTaskToActiveFolder(this.app, subtask.file, true)
      }
    }
  }

  private async updateSubtasksStatusForParent(parentTaskName: string, nextStatus: string) {
    const subtasks = getTasks(this.app).filter(item => item.parent === parentTaskName)

    for (const subtask of subtasks) {
      if (subtask.estado === nextStatus)
        continue

      await this.applyStateTransition(subtask, nextStatus, undefined, { syncSubtasksWithParent: false })
    }
  }

  private async rebalanceBoardSchedule(boardName: string, groupName: string) {
    if (!boardName || !groupName)
      return

    await rebalanceGroupEndDates(this.app, boardName, groupName)
  }

  private canDropOnRow(target: TaskItem, depth: number) {
    return Boolean(this.dragPath
      && this.dragPath !== target.file.path
      && this.dragDepth === depth
      && this.dragParent === target.parent
    )
  }

  private resetRowDragState(tbody: HTMLElement, row: HTMLElement) {
    this.dragPath = null
    this.dragDepth = null
    this.dragParent = null
    row.removeClass('tareas-row-dragging')
    tbody.querySelectorAll('.tareas-row-drag-over').forEach(item => item.classList.remove('tareas-row-drag-over'))
  }

  private resetCardDragState(container: HTMLElement, card: HTMLElement) {
    this.dragPath = null
    this.dragDepth = null
    this.dragParent = null
    this.dragInsertPosition = null
    card.removeClass('tareas-task-card-dragging')
    card.removeClass('tareas-task-card-drag-preview')
    this.clearCardDropMarkers()
    this.getRootEl().querySelectorAll('.tareas-card-list-drop-target').forEach(item => item.classList.remove('tareas-card-list-drop-target'))
  }

  private getRootEl(): HTMLElement {
    const root = this.containerEl.children[1]
    if (!(root instanceof HTMLElement))
      throw new Error('TareasView root element is not available')

    return root
  }
}
