import * as obsidian from 'obsidian'

import { ESTADOS, PRIORIDADES } from '../constants'
import { rebuildTaskChildLinks, syncTaskTypeTags } from '../engines/frontmatterEngine'
import { rebalanceGroupEndDates } from '../engines/scheduleEngine'
import { appendTaskLinkToIndex } from '../engines/taskIndexEngine'
import {
  buildTaskContent,
  getBoardFolder,
  getBoardSubtasksFolder,
  resolveNewTaskOrder,
  resolveTaskEndDate,
  resolveTaskPath,
} from '../engines/taskEngine'
import type { TaskFormData } from '../types'
import { sanitizeFilename } from '../utils/sanitizeFilename'
import type { TareasPlugin } from '../plugin/TareasPlugin'

export class NewTaskModal extends obsidian.Modal {
  private plugin: TareasPlugin
  private data: TaskFormData

  constructor(app: obsidian.App, plugin: TareasPlugin, defaultBoard?: string, defaultParent?: string, defaultGroup?: string) {
    super(app)
    const resolvedBoard = defaultBoard || plugin.tableros[0]?.name || ''
    const firstGroupForBoard = plugin.getEquiposForTablero(resolvedBoard)[0]?.name || ''
    this.plugin = plugin
    this.data = {
      tarea: '',
      detalle: '',
      estado: 'Pendiente',
      fechaFin: '',
      tablero: resolvedBoard,
      equipo: defaultGroup || firstGroupForBoard,
      prioridad: 'Media',
      estimacion: 0,
      parent: defaultParent || '',
    }
  }

  onOpen() {
    const { contentEl } = this
    contentEl.addClass('tareas-modal')
    contentEl.createEl('h2', { text: 'Nueva Tarea' })

    new obsidian.Setting(contentEl).setName('Tarea').addText((text) => {
      text.setPlaceholder('Nombre de la tarea')
      text.onChange(value => this.data.tarea = value)
      setTimeout(() => text.inputEl.focus(), 50)
    })

    new obsidian.Setting(contentEl).setName('Estado').addDropdown((dropdown) => {
      for (const estado of ESTADOS)
        dropdown.addOption(estado, estado)

      dropdown.setValue(this.data.estado)
      dropdown.onChange(value => this.data.estado = value)
    })

    new obsidian.Setting(contentEl)
      .setName('Fecha fin')
      .setDesc('Opcional. Si queda vacía, se calcula con la estimación.')
      .addText((text) => {
        text.inputEl.type = 'datetime-local'
        text.setValue(this.data.fechaFin)
        text.onChange(value => this.data.fechaFin = value)
      })

    let groupDropdown: obsidian.DropdownComponent | null = null

    const refreshGroupOptions = () => {
      if (!groupDropdown)
        return

      const selectEl = groupDropdown.selectEl
      while (selectEl.options.length > 0)
        selectEl.remove(0)

      groupDropdown.addOption('', 'Sin grupo')
      const groups = this.plugin.getEquiposForTablero(this.data.tablero)
      for (const equipo of groups)
        groupDropdown.addOption(equipo.name, equipo.name)

      if (this.data.equipo && groups.some(group => group.name === this.data.equipo)) {
        groupDropdown.setValue(this.data.equipo)
        return
      }

      this.data.equipo = groups[0]?.name || ''
      groupDropdown.setValue(this.data.equipo)
    }

    new obsidian.Setting(contentEl).setName('Tablero').addDropdown((dropdown) => {
      for (const tablero of this.plugin.tableros)
        dropdown.addOption(tablero.name, tablero.name)

      dropdown.setValue(this.data.tablero)
      dropdown.onChange((value) => {
        this.data.tablero = value
        refreshGroupOptions()
      })
    })

    new obsidian.Setting(contentEl).setName('Grupo').addDropdown((dropdown) => {
      groupDropdown = dropdown
      refreshGroupOptions()
      dropdown.onChange(value => this.data.equipo = value)
    })

    new obsidian.Setting(contentEl).setName('Prioridad').addDropdown((dropdown) => {
      for (const prioridad of PRIORIDADES)
        dropdown.addOption(prioridad, prioridad)

      dropdown.setValue(this.data.prioridad)
      dropdown.onChange(value => this.data.prioridad = value)
    })

    new obsidian.Setting(contentEl)
      .setName('Estimación (horas)')
      .addText((text) => {
        text.setPlaceholder('0')
        text.inputEl.type = 'number'
        text.inputEl.min = '0'
        text.inputEl.step = '0.01'
        text.onChange((value) => {
          const parsed = Number.parseFloat(value)
          this.data.estimacion = Number.isNaN(parsed) || parsed < 0
            ? 0
            : Math.round(parsed * 100) / 100
        })
      })

    new obsidian.Setting(contentEl)
      .setName('Subtarea de')
      .setDesc('Dejar vacío si es tarea principal')
      .addText((text) => {
        text.setPlaceholder('Nombre de tarea padre (sin .md)')
        text.setValue(this.data.parent)
        text.onChange(value => this.data.parent = value)
      })

    const footer = contentEl.createDiv({ cls: 'tareas-modal-footer' })

    const createButton = footer.createEl('button', { text: 'Crear tarea', cls: 'mod-cta' })
    createButton.onclick = () => this.create()

    const cancelButton = footer.createEl('button', { text: 'Cancelar' })
    cancelButton.onclick = () => this.close()
  }

  onClose() {
    this.contentEl.empty()
  }

  private async create() {
    if (!this.data.tarea.trim()) {
      new obsidian.Notice('El nombre es requerido')
      return
    }

    const sanitizedTaskName = sanitizeFilename(this.data.tarea)
    const targetFolder = this.data.parent.trim()
      ? getBoardSubtasksFolder(this.data.tablero)
      : getBoardFolder(this.data.tablero)
    await this.ensureFolderPath(targetFolder)

    const path = resolveTaskPath(this.app, sanitizedTaskName, this.data.tablero, this.data.parent)
    const order = resolveNewTaskOrder(this.app, this.data)
    const content = buildTaskContent(
      {
        ...this.data,
        fechaFin: resolveTaskEndDate(this.data.fechaFin, this.data.estimacion),
      },
      order,
    )

    const taskFile = await this.app.vault.create(path, content)
    await appendTaskLinkToIndex(this.app, taskFile)
    await rebuildTaskChildLinks(this.app)
    await syncTaskTypeTags(this.app)
    await rebalanceGroupEndDates(this.app, this.data.tablero, this.data.equipo)
    new obsidian.Notice(`Tarea "${this.data.tarea}" creada`)
    this.close()
  }

  private async ensureFolderPath(path: string) {
    const existing = this.app.vault.getAbstractFileByPath(path)
    if (existing instanceof obsidian.TFolder)
      return

    if (existing)
      throw new Error(`No se pudo crear la carpeta "${path}" porque existe un archivo con ese nombre`)

    const segments = path.split('/').filter(Boolean)
    let currentPath = ''
    for (const segment of segments) {
      currentPath = currentPath ? `${currentPath}/${segment}` : segment
      const current = this.app.vault.getAbstractFileByPath(currentPath)
      if (current instanceof obsidian.TFolder)
        continue
      if (current)
        throw new Error(`No se pudo crear la carpeta "${currentPath}" porque existe un archivo con ese nombre`)

      try {
        await this.app.vault.createFolder(currentPath)
      }
      catch {
        const retry = this.app.vault.getAbstractFileByPath(currentPath)
        if (retry instanceof obsidian.TFolder)
          continue

        throw new Error(`No se pudo crear la carpeta "${currentPath}"`)
      }
    }
  }
}
