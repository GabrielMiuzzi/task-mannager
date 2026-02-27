import * as obsidian from 'obsidian'

import { LOCKED_EQUIPO_NAMES, PRESET_COLORS } from '../constants'
import { countTopLevelTeamTasks, renameTeamInTasks } from '../engines/frontmatterEngine'
import type { TareasPlugin } from '../plugin/TareasPlugin'
import type { Equipo, TareasViewHandle } from '../types'
import { createColorPicker } from '../ui/colorPicker'

export class EditSectionModal extends obsidian.Modal {
  private plugin: TareasPlugin
  private eqObj: Equipo
  private view: TareasViewHandle
  private data: { name: string, color: string }

  constructor(app: obsidian.App, plugin: TareasPlugin, eqObj: Equipo, view: TareasViewHandle) {
    super(app)
    this.plugin = plugin
    this.eqObj = eqObj
    this.view = view
    this.data = { name: eqObj.name, color: eqObj.color }
  }

  onOpen() {
    const { contentEl } = this
    contentEl.addClass('tareas-modal')
    contentEl.createEl('h2', { text: 'Editar sección' })

    new obsidian.Setting(contentEl).setName('Nombre').addText((text) => {
      text.setValue(this.data.name)
      text.onChange(value => this.data.name = value)
      setTimeout(() => text.inputEl.focus(), 50)
    })

    const colorSetting = new obsidian.Setting(contentEl).setName('Color')
    createColorPicker(colorSetting.controlEl, PRESET_COLORS, this.data.color, (nextColor) => {
      this.data.color = nextColor
    })

    const footer = contentEl.createDiv({ cls: 'tareas-modal-footer' })

    if (!this.isLockedSection()) {
      const deleteButton = footer.createEl('button', {
        text: 'Eliminar sección',
        cls: 'mod-warning',
      })
      deleteButton.style.marginRight = 'auto'
      deleteButton.onclick = () => this.confirmDelete()
    }

    const cancelButton = footer.createEl('button', { text: 'Cancelar' })
    cancelButton.onclick = () => this.close()

    const saveButton = footer.createEl('button', { text: 'Guardar', cls: 'mod-cta' })
    saveButton.onclick = () => this.save()
  }

  onClose() {
    this.contentEl.empty()
  }

  private async save() {
    const newName = this.data.name.trim()
    if (!newName) {
      new obsidian.Notice('El nombre es requerido')
      return
    }

    const oldName = this.eqObj.name
    if (this.isLockedSection() && newName !== oldName) {
      new obsidian.Notice(`La sección "${oldName}" no puede renombrarse`)
      return
    }

    if (newName !== oldName)
      await renameTeamInTasks(this.app, oldName, newName)

    this.plugin.updateEquipo(oldName, { name: newName, color: this.data.color })
    this.view.expandedGroups.delete(oldName)
    this.view.expandedGroups.add(newName)
    this.view.render()
    this.close()
  }

  private confirmDelete() {
    if (this.isLockedSection()) {
      new obsidian.Notice(`La sección "${this.eqObj.name}" no se puede eliminar`)
      return
    }

    const taskCount = countTopLevelTeamTasks(this.app, this.eqObj.name)
    if (taskCount > 0) {
      new obsidian.Notice(`La sección "${this.eqObj.name}" tiene ${taskCount} tarea(s). Movalas a otra sección antes de eliminar.`)
      return
    }

    this.plugin.removeEquipo(this.eqObj.name)
    this.view.expandedGroups.delete(this.eqObj.name)
    this.view.render()
    new obsidian.Notice(`Sección "${this.eqObj.name}" eliminada`)
    this.close()
  }

  private isLockedSection() {
    return LOCKED_EQUIPO_NAMES.includes(this.eqObj.name)
  }
}
