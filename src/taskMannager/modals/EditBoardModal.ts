import * as obsidian from 'obsidian'

import { DEFAULT_BOARD_NAME, PRESET_COLORS } from '../constants'
import type { TareasPlugin } from '../plugin/TareasPlugin'
import type { TareasViewHandle } from '../types'
import { createColorPicker } from '../ui/colorPicker'

export class EditBoardModal extends obsidian.Modal {
  private plugin: TareasPlugin
  private view: TareasViewHandle
  private boardName: string
  private data: { name: string, color: string }

  constructor(
    app: obsidian.App,
    plugin: TareasPlugin,
    view: TareasViewHandle,
    board: { name: string, color: string },
  ) {
    super(app)
    this.plugin = plugin
    this.view = view
    this.boardName = board.name
    this.data = { name: board.name, color: board.color }
  }

  onOpen() {
    const { contentEl } = this
    const isDefaultBoard = this.boardName === DEFAULT_BOARD_NAME

    contentEl.addClass('tareas-modal')
    contentEl.createEl('h2', { text: 'Editar tablero' })

    new obsidian.Setting(contentEl).setName('Nombre del tablero').addText((text) => {
      text.setValue(this.data.name)
      text.onChange(value => this.data.name = value)
      text.setDisabled(isDefaultBoard)
      setTimeout(() => text.inputEl.focus(), 50)
    })

    if (isDefaultBoard) {
      const note = contentEl.createEl('p')
      note.addClass('setting-item-description')
      note.setText('El tablero "default" no puede editarse.')
    }

    const colorSetting = new obsidian.Setting(contentEl).setName('Color')
    createColorPicker(colorSetting.controlEl, PRESET_COLORS, this.data.color, (nextColor) => {
      this.data.color = nextColor
    })

    const footer = contentEl.createDiv({ cls: 'tareas-modal-footer' })
    const cancelButton = footer.createEl('button', { text: 'Cancelar' })
    cancelButton.onclick = () => this.close()

    const saveButton = footer.createEl('button', { text: 'Guardar', cls: 'mod-cta' })
    saveButton.onclick = () => void this.save()
  }

  onClose() {
    this.contentEl.empty()
  }

  private async save() {
    const nextName = this.data.name.trim().toLowerCase()
    if (!nextName) {
      new obsidian.Notice('El nombre es requerido')
      return
    }

    const result = await this.plugin.editTablero(this.boardName, {
      name: nextName,
      color: this.data.color,
    })
    if (!result.ok) {
      const messageByError: Record<string, string> = {
        'invalid-name': 'El nombre del tablero no es válido.',
        'board-not-found': 'No se encontró el tablero a editar.',
        'default-board-locked': 'El tablero "default" no puede editarse.',
        'board-already-exists': `Ya existe un tablero llamado "${nextName}".`,
        'board-folder-conflict': `No se pudo renombrar el tablero porque ya existe la carpeta "${nextName}".`,
      }
      new obsidian.Notice(messageByError[result.error || ''] || 'No se pudo editar el tablero.')
      return
    }

    this.view.setActiveTab(result.boardName)
    this.view.render()
    new obsidian.Notice(`Tablero "${this.boardName}" actualizado.`)
    this.close()
  }
}
