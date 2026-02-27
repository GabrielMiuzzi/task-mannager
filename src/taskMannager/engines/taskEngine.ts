import type { App, TFile } from 'obsidian'

import {
  DEFAULT_BOARD_NAME,
  CANCELLED_SUBTASKS_FOLDER,
  CANCELLED_TASK_INDEX_BASENAME,
  CANCELLED_TASKS_FOLDER,
  COMPLETED_SUBTASKS_FOLDER,
  COMPLETED_TASKS_FOLDER,
  FINISHED_TASK_INDEX_BASENAME,
  LEGACY_COMPLETED_TASKS_FOLDER,
  SUBTASK_TAG,
  TASK_INDEX_BASENAME,
  TASK_TAG,
  ORDER_STEP,
  TAREAS_FOLDER,
} from '../constants'
import { isBoardTaskIndexPath } from './taskIndexEngine'
import type { Equipo, TaskFormData, TaskFrontmatter, TaskItem } from '../types'
import { toTaskFrontmatter } from '../utils/guards'
import { normalizeEstado } from '../utils/status'

export function getTaskFiles(app: App) {
  return app.vault
    .getMarkdownFiles()
    .filter(file => file.path.startsWith(`${TAREAS_FOLDER}/`))
    .filter(file => file.basename !== TASK_INDEX_BASENAME
      && file.basename !== FINISHED_TASK_INDEX_BASENAME
      && file.basename !== CANCELLED_TASK_INDEX_BASENAME
      && !isBoardTaskIndexPath(file.path))
}

export function isTaskInFinishedFolder(path: string): boolean {
  return path.startsWith(`${COMPLETED_TASKS_FOLDER}/`)
    || path.startsWith(`${COMPLETED_SUBTASKS_FOLDER}/`)
    || path.startsWith(`${LEGACY_COMPLETED_TASKS_FOLDER}/`)
}

export function isTaskInCancelledFolder(path: string): boolean {
  return path.startsWith(`${CANCELLED_TASKS_FOLDER}/`)
    || path.startsWith(`${CANCELLED_SUBTASKS_FOLDER}/`)
}

export function isTaskInCompletedFolder(path: string): boolean {
  return isTaskInFinishedFolder(path) || isTaskInCancelledFolder(path)
}

export function getTasks(app: App): TaskItem[] {
  const tasks: TaskItem[] = []

  for (const file of getTaskFiles(app)) {
    const fm = getTaskFrontmatter(app, file)
    if (!fm)
      continue

    tasks.push({
      file,
      tarea: fm.tarea ?? file.basename,
      detalle: fm.detalle ?? '',
      estado: normalizeEstado(fm.estado),
      fechaInicio: fm.fechaInicio ?? '',
      fechaFin: fm.fechaFin ?? '',
      tablero: resolveTaskBoard(file.path, fm),
      equipo: fm.equipo ?? '',
      prioridad: fm.prioridad ?? '',
      dedicado: Number(fm.dedicado) || 0,
      estimacion: Number(fm.estimacion) || 0,
      desvio: Number(fm.desvio) || 0,
      parent: normalizeParentTaskName(fm.parent ?? ''),
      order: Number(fm.order) ?? 999999,
    })
  }

  return tasks
}

export function groupTopLevelTasks(tasks: TaskItem[], equipos: Equipo[]) {
  const groups: Record<string, TaskItem[]> = {}

  for (const equipo of equipos)
    groups[equipo.name] = []

  for (const task of tasks) {
    if (task.parent)
      continue

    const groupName = task.equipo || 'Sin grupo'
    if (!groups[groupName])
      groups[groupName] = []

    groups[groupName].push(task)
  }

  return groups
}

export function buildTaskContent(data: TaskFormData, order: number): string {
  const safeTitle = data.tarea.replace(/"/g, '\\"')
  const safeDetail = data.detalle.replace(/"/g, '\\"')
  const safeEndDate = data.fechaFin.replace(/"/g, '\\"')
  const safeParentTask = data.parent.trim().replace(/"/g, '\\"')
  const parentLink = safeParentTask ? `[[${safeParentTask}]]` : ''
  const taskTag = safeParentTask ? SUBTASK_TAG : TASK_TAG

  return [
    '---',
    `tarea: "${safeTitle}"`,
    `detalle: "${safeDetail}"`,
    `estado: "${data.estado}"`,
    'fechaInicio: ""',
    `fechaFin: "${safeEndDate}"`,
    `tablero: "${data.tablero}"`,
    `equipo: "${data.equipo}"`,
    `prioridad: "${data.prioridad}"`,
    'dedicado: 0',
    `estimacion: ${data.estimacion}`,
    'desvio: 0',
    `parent: "${parentLink}"`,
    'childs: []',
    `tags: [${taskTag}]`,
    `order: ${order}`,
    '---',
    '',
    data.detalle || '',
    '',
  ].join('\n')
}

export function resolveNewTaskOrder(app: App, data: TaskFormData): number {
  const goesTop = data.estado === 'En progreso' || data.prioridad === 'Urgente'

  if (data.parent)
    return ORDER_STEP

  const siblingOrders = getTaskFiles(app)
    .map(file => getTaskFrontmatter(app, file))
    .filter((fm): fm is TaskFrontmatter => Boolean(fm))
    .filter((fm) => {
      if (fm.parent)
        return false

      const boardName = normalizeBoardName(fm.tablero || '')
      const groupName = (fm.equipo || '').trim()
      return boardName === normalizeBoardName(data.tablero) && groupName === data.equipo
    })
    .map(fm => Number(fm.order) || 0)

  if (siblingOrders.length === 0)
    return ORDER_STEP

  return goesTop
    ? Math.min(...siblingOrders) - ORDER_STEP
    : Math.max(...siblingOrders) + ORDER_STEP
}

export function resolveTaskPath(app: App, taskName: string, boardName: string, parentTaskName = ''): string {
  const folderPath = parentTaskName.trim()
    ? getBoardSubtasksFolder(boardName)
    : getBoardFolder(boardName)
  const basePath = `${folderPath}/${taskName}.md`
  if (!app.vault.getAbstractFileByPath(basePath))
    return basePath

  return `${folderPath}/${taskName} ${Date.now()}.md`
}

export function getBoardFolder(boardName: string): string {
  return `${TAREAS_FOLDER}/${normalizeBoardName(boardName)}`
}

export function getBoardSubtasksFolder(boardName: string): string {
  return `${getBoardFolder(boardName)}/subTasks`
}

function resolveTaskBoard(path: string, fm: TaskFrontmatter): string {
  const rawFromFrontmatter = (fm.tablero || '').trim().toLowerCase()
  if (rawFromFrontmatter)
    return rawFromFrontmatter

  const rootPrefix = `${TAREAS_FOLDER}/`
  if (!path.startsWith(rootPrefix))
    return DEFAULT_BOARD_NAME

  const segments = path.slice(rootPrefix.length).split('/')
  const candidate = segments[0]?.trim().toLowerCase() || ''
  if (!candidate || candidate === 'finished' || candidate === 'cancelled' || candidate === 'completadas')
    return DEFAULT_BOARD_NAME

  return candidate
}

function normalizeBoardName(value: string): string {
  const normalized = value.trim().toLowerCase()
  return normalized || DEFAULT_BOARD_NAME
}

export function resolveTaskEndDate(fechaFin: string, estimacion: number): string {
  const explicitEnd = parseTaskDate(fechaFin)
  if (explicitEnd)
    return explicitEnd.toISOString()

  if (estimacion <= 0)
    return ''

  const computed = new Date(Date.now() + estimacion * 60 * 60 * 1000)
  return computed.toISOString()
}

export function parseTaskDate(value: string): Date | null {
  const trimmed = value.trim()
  if (!trimmed)
    return null

  const parsed = new Date(trimmed)
  if (Number.isNaN(parsed.getTime()))
    return null

  return parsed
}

export function extractTaskBodyPreview(content: string, maxLength = 180): string {
  let body = content

  // Remove YAML frontmatter block if present.
  body = body.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')

  const lines = body
    .split(/\r?\n/)
    .map(line => line.trim())

  while (lines.length > 0 && !lines[0])
    lines.shift()

  // Remove leading title heading so preview starts with the body text.
  if (lines[0]?.startsWith('# '))
    lines.shift()

  while (lines.length > 0 && !lines[0])
    lines.shift()

  const normalized = lines.join(' ').replace(/\s+/g, ' ').trim()
  if (!normalized)
    return ''

  if (normalized.length <= maxLength)
    return normalized

  return `${normalized.slice(0, maxLength - 1).trimEnd()}…`
}

function normalizeParentTaskName(value: string): string {
  const trimmed = value.trim()
  if (!trimmed)
    return ''

  const linkMatch = trimmed.match(/^\[\[(.+?)\]\]$/)
  const rawRef = linkMatch ? linkMatch[1].trim() : trimmed
  const withoutAlias = rawRef.split('|')[0].trim()
  const withoutHeading = withoutAlias.split('#')[0].trim()
  const lastSegment = withoutHeading.split('/').pop() ?? withoutHeading

  return lastSegment.replace(/\.md$/i, '').trim()
}

function getTaskFrontmatter(app: App, file: TFile): TaskFrontmatter | null {
  const rawFrontmatter = app.metadataCache.getFileCache(file)?.frontmatter
  return toTaskFrontmatter(rawFrontmatter)
}
