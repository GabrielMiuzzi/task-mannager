import * as obsidian from 'obsidian'

import type { TaskItem } from '../types'

export class EditTaskFileModal extends obsidian.Modal {
  private task: TaskItem
  private textarea: HTMLTextAreaElement | null = null
  private initialContent = ''

  constructor(app: obsidian.App, task: TaskItem) {
    super(app)
    this.task = task
  }

  onOpen() {
    const { contentEl } = this
    this.modalEl.addClass('tareas-edit-task-modal-shell')
    contentEl.addClass('tareas-modal')
    contentEl.addClass('tareas-edit-task-modal')
    contentEl.createEl('h2', { text: `Editar: ${this.task.tarea}` })

    const helper = contentEl.createEl('p', { cls: 'tareas-edit-task-hint' })
    helper.setText(`Edita el contenido completo de ${this.task.file.path}`)

    this.textarea = contentEl.createEl('textarea', {
      cls: 'tareas-edit-task-textarea',
      attr: {
        spellcheck: 'false',
      },
    })

    const footer = contentEl.createDiv({ cls: 'tareas-modal-footer' })
    const cancelButton = footer.createEl('button', { text: 'Cancelar' })
    cancelButton.onclick = () => this.close()

    const saveButton = footer.createEl('button', { text: 'Guardar', cls: 'mod-cta' })
    saveButton.onclick = () => {
      void this.save()
    }

    void this.loadFileContent()
  }

  onClose() {
    this.contentEl.empty()
  }

  private async loadFileContent() {
    if (!this.textarea)
      return

    const content = await this.app.vault.cachedRead(this.task.file)
    this.initialContent = content
    this.textarea.value = content
    this.textarea.focus()
    this.textarea.setSelectionRange(0, 0)
  }

  private async save() {
    if (!this.textarea)
      return

    const nextContent = this.textarea.value
    if (nextContent === this.initialContent) {
      this.close()
      return
    }

    await this.app.vault.modify(this.task.file, nextContent)
    new obsidian.Notice('Tarea actualizada')
    this.close()
  }
}
