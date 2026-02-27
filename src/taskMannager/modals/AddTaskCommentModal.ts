import * as obsidian from 'obsidian'

import type { TaskItem } from '../types'

export class AddTaskCommentModal extends obsidian.Modal {
  private task: TaskItem
  private textarea: HTMLTextAreaElement | null = null

  constructor(app: obsidian.App, task: TaskItem) {
    super(app)
    this.task = task
  }

  onOpen() {
    const { contentEl } = this
    contentEl.addClass('tareas-modal')
    contentEl.createEl('h2', { text: `Comentario: ${this.task.tarea}` })

    const help = contentEl.createEl('p', { cls: 'tareas-comment-modal-hint' })
    help.setText('Se agregará al final del archivo de la tarea.')

    this.textarea = contentEl.createEl('textarea', {
      cls: 'tareas-comment-modal-textarea',
      attr: { placeholder: 'Escribe un comentario...' },
    })
    this.textarea.focus()

    const footer = contentEl.createDiv({ cls: 'tareas-modal-footer' })

    const cancelButton = footer.createEl('button', { text: 'Cancelar' })
    cancelButton.onclick = () => this.close()

    const addButton = footer.createEl('button', { text: 'Agregar', cls: 'mod-cta' })
    addButton.onclick = () => {
      void this.appendComment()
    }
  }

  onClose() {
    this.contentEl.empty()
  }

  private async appendComment() {
    const rawComment = this.textarea?.value ?? ''
    const comment = rawComment.trim()
    if (!comment) {
      new obsidian.Notice('Escribe un comentario antes de guardar')
      return
    }

    const current = await this.app.vault.cachedRead(this.task.file)
    const hasContent = current.trim().length > 0
    const withNewline = current.endsWith('\n') ? current : `${current}\n`
    const spacer = hasContent ? '\n' : ''
    const commentBlock = this.buildCommentBlock(comment)
    const next = `${withNewline}${spacer}${commentBlock}`

    await this.app.vault.modify(this.task.file, next)
    new obsidian.Notice('Comentario agregado')
    this.close()
  }

  private buildCommentBlock(comment: string): string {
    const now = new Date()
    const day = String(now.getDate()).padStart(2, '0')
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const year = now.getFullYear()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')

    const stamp = `${day}/${month}/${year} ${hours}:${minutes}`
    return `## Comentario - ${stamp}\n\n${comment}\n`
  }
}
