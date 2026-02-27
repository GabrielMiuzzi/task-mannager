import type { TFile } from 'obsidian'

export interface Equipo {
  name: string
  color: string
}

export interface TaskItem {
  file: TFile
  tarea: string
  detalle: string
  estado: string
  fechaInicio: string
  fechaFin: string
  equipo: string
  prioridad: string
  dedicado: number
  estimacion: number
  desvio: number
  parent: string
  order: number
}

export interface TaskFrontmatter {
  tarea?: string
  detalle?: string
  estado?: string
  fechaInicio?: string
  fechaFin?: string
  equipo?: string
  prioridad?: string
  dedicado?: number | string
  estimacion?: number | string
  desvio?: number | string
  parent?: string
  childs?: string[] | string
  tags?: string[] | string
  order?: number | string
}

export interface TaskFormData {
  tarea: string
  detalle: string
  estado: string
  fechaFin: string
  equipo: string
  prioridad: string
  estimacion: number
  parent: string
}

export type PomodoroPhase = 'work' | 'short-break' | 'long-break'
export type PomodoroRunState = 'idle' | 'running' | 'paused'

export interface PomodoroDurations {
  workMinutes: number
  shortBreakMinutes: number
  longBreakMinutes: number
}

export interface PomodoroState {
  phase: PomodoroPhase
  runState: PomodoroRunState
  remainingSeconds: number
  endTimestamp: number | null
  completedWorkCycles: number
  selectedTaskPath: string | null
  isDeviationActive: boolean
  deviationStartedAt: number | null
  deviationBaseRemainingSeconds: number
  phaseDeviationSeconds: number
  durations: PomodoroDurations
}

export interface TareasViewHandle {
  expandedGroups: Set<string>
  render: () => Promise<void> | void
}

export interface PluginSettingsData {
  equipos?: Equipo[] | string[]
  pomodoro?: unknown
}
