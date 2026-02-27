import { ORDER_STEP } from '../constants'
import type { TaskItem } from '../types'

export function reorderList<T>(items: T[], fromIndex: number, toIndex: number): T[] {
  if (fromIndex < 0 || toIndex < 0 || fromIndex === toIndex)
    return items

  const next = [...items]
  const [moved] = next.splice(fromIndex, 1)
  next.splice(toIndex, 0, moved)
  return next
}

export async function persistTaskOrder(
  tasks: TaskItem[],
  updater: (task: TaskItem, order: number) => Promise<void>,
): Promise<void> {
  for (const [index, task] of tasks.entries())
    await updater(task, (index + 1) * ORDER_STEP)
}
