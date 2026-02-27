import * as obsidian from 'obsidian'

interface ConfirmDeleteTaskModalOptions {
  title: string
  message: string
  confirmText?: string
  onConfirm: () => Promise<void>
}

export class ConfirmDeleteTaskModal extends obsidian.Modal {
  private readonly options: ConfirmDeleteTaskModalOptions

  constructor(app: obsidian.App, options: ConfirmDeleteTaskModalOptions) {
    super(app)
    this.options = options
  }

  onOpen() {
    const { contentEl } = this
    contentEl.addClass('tareas-modal')
    contentEl.createEl('h2', { text: this.options.title })
    contentEl.createEl('p', { text: this.options.message })

    const footer = contentEl.createDiv({ cls: 'tareas-modal-footer' })
    const cancelButton = footer.createEl('button', { text: 'Cancelar' })
    cancelButton.onclick = () => this.close()

    const confirmButton = footer.createEl('button', {
      text: this.options.confirmText ?? 'Eliminar',
      cls: 'mod-warning',
    })
    confirmButton.onclick = async () => {
      confirmButton.disabled = true
      cancelButton.disabled = true
      try {
        await this.options.onConfirm()
        this.close()
      }
      finally {
        confirmButton.disabled = false
        cancelButton.disabled = false
      }
    }
  }

  onClose() {
    this.contentEl.empty()
  }
}
