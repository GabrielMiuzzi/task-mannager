import * as obsidian from 'obsidian'

import { PRESET_COLORS } from '../constants'
import type { TareasPlugin } from '../plugin/TareasPlugin'
import type { TareasViewHandle } from '../types'
import { createColorPicker } from '../ui/colorPicker'

export class NewBoardModal extends obsidian.Modal {
  private plugin: TareasPlugin
  private view: TareasViewHandle
  private data: { name: string, color: string }

  constructor(app: obsidian.App, plugin: TareasPlugin, view: TareasViewHandle) {
    super(app)
    this.plugin = plugin
    this.view = view
    this.data = { name: '', color: PRESET_COLORS[1] }
  }

  onOpen() {
    const { contentEl } = this
    contentEl.addClass('tareas-modal')
    contentEl.createEl('h2', { text: 'Nuevo Tablero' })

    new obsidian.Setting(contentEl).setName('Nombre del tablero').addText((text) => {
      text.setPlaceholder('Ej: personal, estudio, trabajo')
      text.onChange(value => this.data.name = value)
      setTimeout(() => text.inputEl.focus(), 50)
    })

    const colorSetting = new obsidian.Setting(contentEl).setName('Color')
    createColorPicker(colorSetting.controlEl, PRESET_COLORS, this.data.color, (nextColor) => {
      this.data.color = nextColor
    })

    const footer = contentEl.createDiv({ cls: 'tareas-modal-footer' })
    const createButton = footer.createEl('button', { text: 'Crear tablero', cls: 'mod-cta' })
    createButton.onclick = () => this.createBoard()

    const cancelButton = footer.createEl('button', { text: 'Cancelar' })
    cancelButton.onclick = () => this.close()
  }

  onClose() {
    this.contentEl.empty()
  }

  private createBoard() {
    const boardName = this.data.name.trim()
    if (!boardName) {
      new obsidian.Notice('El nombre es requerido')
      return
    }

    this.plugin.addTablero(boardName, this.data.color)
    this.view.render()
    new obsidian.Notice(`Tablero "${boardName}" creado`)
    this.close()
  }
}
