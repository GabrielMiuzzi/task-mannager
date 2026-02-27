import * as obsidian from 'obsidian'

import type { TaskItem } from '../types'

export class SelectPomodoroTaskModal extends obsidian.Modal {
  private tasks: TaskItem[]
  private selectedTaskPath: string | null
  private onSelect: (taskPath: string) => void

  constructor(
    app: obsidian.App,
    tasks: TaskItem[],
    selectedTaskPath: string | null,
    onSelect: (taskPath: string) => void,
  ) {
    super(app)
    this.tasks = [...tasks].sort((a, b) => a.tarea.localeCompare(b.tarea))
    this.selectedTaskPath = selectedTaskPath
    this.onSelect = onSelect
  }

  onOpen() {
    this.modalEl.addClass('tareas-pomodoro-task-modal-shell')
    const { contentEl } = this
    contentEl.addClass('tareas-modal', 'tareas-pomodoro-task-modal')
    contentEl.createEl('h2', { text: 'Seleccionar tarea para Pomodoro' })

    if (this.tasks.length === 0) {
      contentEl.createEl('p', {
        cls: 'tareas-pomodoro-task-empty',
        text: 'No hay tareas padre en curso disponibles.',
      })
    }
    else {
      const list = contentEl.createDiv({ cls: 'tareas-pomodoro-task-list' })
      for (const task of this.tasks) {
        const item = list.createDiv({
          cls: `tareas-pomodoro-task-item${this.selectedTaskPath === task.file.path ? ' is-selected' : ''}`,
        })
        item.setAttr('role', 'button')
        item.setAttr('tabindex', '0')

        item.createEl('p', { cls: 'tareas-pomodoro-task-name', text: task.tarea })
        const details = [
          task.tablero ? `Tablero: ${task.tablero}` : null,
          `Estado: ${task.estado}`,
        ].filter(Boolean).join(' · ')
        item.createEl('p', { cls: 'tareas-pomodoro-task-meta', text: details })

        const select = () => {
          this.onSelect(task.file.path)
          this.close()
        }

        item.onclick = select
        item.onkeydown = (event) => {
          if (event.key !== 'Enter' && event.key !== ' ')
            return
          event.preventDefault()
          select()
        }
      }
    }

    const footer = contentEl.createDiv({ cls: 'tareas-modal-footer' })
    const cancelButton = footer.createEl('button', { text: 'Cancelar' })
    cancelButton.onclick = () => this.close()
  }

  onClose() {
    this.modalEl.removeClass('tareas-pomodoro-task-modal-shell')
    this.contentEl.empty()
  }
}
