import type { App } from 'obsidian'

import { getTasks, isTaskInCompletedFolder, parseTaskDate } from './taskEngine'
import { updateFrontmatter } from './frontmatterEngine'

const HOUR_MS = 60 * 60 * 1000

export async function rebalanceGroupEndDates(app: App, teamName: string): Promise<void> {
  const tasks = getTasks(app)
    .filter(task => !task.parent && task.equipo === teamName && !isTaskInCompletedFolder(task.file.path))
    .sort((a, b) => a.order - b.order)

  if (tasks.length === 0)
    return

  const firstStart = parseTaskDate(tasks[0].fechaInicio) ?? new Date()
  let cursor = firstStart.getTime()

  for (const task of tasks) {
    const estimatedHours = Number.isFinite(task.estimacion) && task.estimacion > 0
      ? task.estimacion
      : 0
    const dedicatedHours = Number.isFinite(task.dedicado) && task.dedicado > 0
      ? task.dedicado
      : 0
    const estimateHours = Math.max(estimatedHours, dedicatedHours)

    cursor += estimateHours * HOUR_MS
    await updateFrontmatter(app, task.file, { fechaFin: new Date(cursor).toISOString() })
  }
}
