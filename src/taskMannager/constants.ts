export const VIEW_TYPE = 'tareas-view'
export const TAREAS_FOLDER = 'task-mannager'
export const COMPLETED_TASKS_FOLDER = `${TAREAS_FOLDER}/finished`
export const COMPLETED_SUBTASKS_FOLDER = `${COMPLETED_TASKS_FOLDER}/subTasks`
export const CANCELLED_TASKS_FOLDER = `${TAREAS_FOLDER}/cancelled`
export const CANCELLED_SUBTASKS_FOLDER = `${CANCELLED_TASKS_FOLDER}/subTasks`
export const LEGACY_COMPLETED_TASKS_FOLDER = `${TAREAS_FOLDER}/completadas`
export const TASK_INDEX_BASENAME = 'taskIndex'
export const FINISHED_TASK_INDEX_BASENAME = 'taskIndexFinished'
export const CANCELLED_TASK_INDEX_BASENAME = 'taskIndexCancelled'
export const POMODORO_LOG_BASENAME = 'pomodoro'
export const INDEX_TAG = 'index'
export const TASK_TAG = 'task'
export const SUBTASK_TAG = 'sub-task'

export const ESTADOS = ['Pendiente', 'Cancelada', 'En progreso', 'Finalizada', 'Bloqueada']
export const PRIORIDADES = ['Baja', 'Media', 'Alta', 'Urgente']

export const DEFAULT_BOARD_NAME = 'default'
export const DEFAULT_TABLEROS: Array<{ name: string, color: string }> = [
  { name: DEFAULT_BOARD_NAME, color: '#2e6db0' },
]
export const DEFAULT_EQUIPOS: Array<{ name: string, color: string }> = []
export const LOCKED_EQUIPO_NAMES: string[] = []

export const PRESET_COLORS = [
  '#e05c5c', '#e0855c', '#d97a1e', '#c9b84a',
  '#4caf50', '#00b894', '#0984e3', '#2e6db0',
  '#7c5ce7', '#fd79a8', '#636e72', '#b2bec3',
]

export const ORDER_STEP = 10

export const DEFAULT_POMODORO_WORK_MINUTES = 25
export const DEFAULT_POMODORO_SHORT_BREAK_MINUTES = 5
export const DEFAULT_POMODORO_LONG_BREAK_MINUTES = 15
export const POMODORO_WORK_CYCLES_BEFORE_LONG_BREAK = 4
