import * as obsidian from 'obsidian'

import type { PomodoroDurations } from '../types'

interface PomodoroPreset {
  id: string
  title: string
  workLabel: string
  shortBreakLabel: string
  cyclesLabel: string
  longBreakLabel: string
  idealFor: string
  durations: PomodoroDurations
}

export interface PomodoroPresetCardData {
  title: string
  usage: string
  workLabel: string
  shortBreakLabel: string
  longBreakLabel: string
  cyclesLabel: string
}

const POMODORO_PRESETS: PomodoroPreset[] = [
  {
    id: 'debug-1-1',
    title: '🛠 Debug - 1/1',
    workLabel: 'Trabajo: 1 min',
    shortBreakLabel: 'Descanso corto: 1 min',
    cyclesLabel: 'Ciclos: 4',
    longBreakLabel: 'Descanso largo: 1 min',
    idealFor: 'Ideal para: probar rápido el flujo del temporizador y transiciones de fase.',
    durations: { workMinutes: 1, shortBreakMinutes: 1, longBreakMinutes: 1 },
  },
  {
    id: 'standard-25-5',
    title: '⭐ Estándar - 25/5',
    workLabel: 'Trabajo: 25 min',
    shortBreakLabel: 'Descanso corto: 5 min',
    cyclesLabel: 'Ciclos: 4',
    longBreakLabel: 'Descanso largo: 15 min',
    idealFor: 'Ideal para: tareas moderadas, programación, estudio, mantener ritmo constante sin quemarse.',
    durations: { workMinutes: 25, shortBreakMinutes: 5, longBreakMinutes: 15 },
  },
  {
    id: 'deep-focus-50-10',
    title: '⚡ Para foco profundo - 50/10',
    workLabel: 'Trabajo: 50 min',
    shortBreakLabel: 'Descanso corto: 10 min',
    cyclesLabel: 'Ciclos: 3',
    longBreakLabel: 'Descanso largo: 20 min',
    idealFor: 'Ideal para: programación pesada, debugging, investigación, escritura larga. Cuando te metés en "deep work".',
    durations: { workMinutes: 50, shortBreakMinutes: 10, longBreakMinutes: 20 },
  },
  {
    id: 'dev-classic-52-17',
    title: '💻 Clásico de programadores - 52/17',
    workLabel: 'Trabajo: 52 min',
    shortBreakLabel: 'Descanso corto: 17 min',
    cyclesLabel: 'Ciclos: 2',
    longBreakLabel: 'Descanso largo: 20 min',
    idealFor: 'Ideal para: tareas complejas que requieren fluir sin cortes largos. Mantiene energía alta.',
    durations: { workMinutes: 52, shortBreakMinutes: 17, longBreakMinutes: 20 },
  },
  {
    id: 'creative-40-10',
    title: '🎨 Creativo - 40/10',
    workLabel: 'Trabajo: 40 min',
    shortBreakLabel: 'Descanso corto: 10 min',
    cyclesLabel: 'Ciclos: 4',
    longBreakLabel: 'Descanso largo: 20 min',
    idealFor: 'Ideal para: diseño, escritura creativa, brainstorming, donde querés tiempo para entrar en estado.',
    durations: { workMinutes: 40, shortBreakMinutes: 10, longBreakMinutes: 20 },
  },
  {
    id: 'sprint-45-15',
    title: '🔨 Sprint - 45/15',
    workLabel: 'Trabajo: 45 min',
    shortBreakLabel: 'Descanso corto: 15 min',
    cyclesLabel: 'Ciclos: 3',
    longBreakLabel: 'Descanso largo: 25 min',
    idealFor: 'Ideal para: tareas grandes donde necesitás empujar fuerte (refactors, documentación, análisis).',
    durations: { workMinutes: 45, shortBreakMinutes: 15, longBreakMinutes: 25 },
  },
  {
    id: 'adhd-20-5',
    title: '🧠 Para TDAH o mucha distracción - 20/5',
    workLabel: 'Trabajo: 20 min',
    shortBreakLabel: 'Descanso corto: 5 min',
    cyclesLabel: 'Ciclos: 4',
    longBreakLabel: 'Descanso largo: 15 min',
    idealFor: 'Ideal para: cuando te cuesta engancharte o mantener foco sostenido. Entradas cortas pero efectivas.',
    durations: { workMinutes: 20, shortBreakMinutes: 5, longBreakMinutes: 15 },
  },
  {
    id: 'micro-15-5',
    title: '📉 Micro-Pomodoro - 15/5',
    workLabel: 'Trabajo: 15 min',
    shortBreakLabel: 'Descanso corto: 5 min',
    cyclesLabel: 'Ciclos: 4',
    longBreakLabel: 'Descanso largo: 15 min',
    idealFor: 'Ideal para: tareas chicas, revisar mails, ordenar pendientes, cuando estás mentalmente muy cansado.',
    durations: { workMinutes: 15, shortBreakMinutes: 5, longBreakMinutes: 15 },
  },
  {
    id: 'low-energy-15-3',
    title: '🔋 Energía baja - 15/3',
    workLabel: 'Trabajo: 15 min',
    shortBreakLabel: 'Descanso corto: 3 min',
    cyclesLabel: 'Ciclos: 4',
    longBreakLabel: 'Descanso largo: 12 min',
    idealFor: 'Ideal para: días de fatiga mental, tareas ligeras, avanzar lento pero constante.',
    durations: { workMinutes: 15, shortBreakMinutes: 3, longBreakMinutes: 12 },
  },
  {
    id: 'ultradian-90-20',
    title: '🧱 Ciclos ultradianos - 90/20',
    workLabel: 'Trabajo: 90 min',
    shortBreakLabel: 'Descanso corto: no aplica',
    cyclesLabel: 'Ciclos: 2 por sesión',
    longBreakLabel: 'Descanso largo: 20 min',
    idealFor: 'Ideal para: sesiones creativas profundas o de ingeniería donde cortar es contraproducente.',
    durations: { workMinutes: 90, shortBreakMinutes: 20, longBreakMinutes: 20 },
  },
  {
    id: 'aggressive-50-5',
    title: '🧩 50/5 (agresivo)',
    workLabel: 'Trabajo: 50 min',
    shortBreakLabel: 'Descanso corto: 5 min',
    cyclesLabel: 'Ciclos: 3',
    longBreakLabel: 'Descanso largo: 20 min',
    idealFor: 'Ideal para: tareas de alta presión o entregas donde querés minimizar pausas.',
    durations: { workMinutes: 50, shortBreakMinutes: 5, longBreakMinutes: 20 },
  },
  {
    id: 'balanced-30-10',
    title: '🪶 30/10 (balanceado)',
    workLabel: 'Trabajo: 30 min',
    shortBreakLabel: 'Descanso corto: 10 min',
    cyclesLabel: 'Ciclos: 4',
    longBreakLabel: 'Descanso largo: 20 min',
    idealFor: 'Ideal para: tareas de análisis, administración, contabilidad mental liviana o research variado.',
    durations: { workMinutes: 30, shortBreakMinutes: 10, longBreakMinutes: 20 },
  },
]

export function getPomodoroPresetCardData(durations: PomodoroDurations): PomodoroPresetCardData {
  const preset = findPomodoroPresetByDurations(durations)
  if (preset) {
    return {
      title: preset.title,
      usage: preset.idealFor.replace(/^Ideal para:\s*/i, ''),
      workLabel: preset.workLabel,
      shortBreakLabel: preset.shortBreakLabel,
      longBreakLabel: preset.longBreakLabel,
      cyclesLabel: preset.cyclesLabel,
    }
  }

  return {
    title: `Personalizado - ${durations.workMinutes}/${durations.shortBreakMinutes}`,
    usage: 'Configuración manual guardada.',
    workLabel: `Trabajo: ${durations.workMinutes} min`,
    shortBreakLabel: `Descanso corto: ${durations.shortBreakMinutes} min`,
    longBreakLabel: `Descanso largo: ${durations.longBreakMinutes} min`,
    cyclesLabel: 'Ciclos: 4',
  }
}

function findPomodoroPresetByDurations(durations: PomodoroDurations): PomodoroPreset | null {
  for (const preset of POMODORO_PRESETS) {
    if (
      preset.durations.workMinutes === durations.workMinutes
      && preset.durations.shortBreakMinutes === durations.shortBreakMinutes
      && preset.durations.longBreakMinutes === durations.longBreakMinutes
    ) {
      return preset
    }
  }

  return null
}

export class PomodoroPresetModal extends obsidian.Modal {
  private onAccept: (durations: PomodoroDurations) => void
  private selectedPresetId: string
  private cardById = new Map<string, HTMLDivElement>()

  constructor(app: obsidian.App, currentDurations: PomodoroDurations, onAccept: (durations: PomodoroDurations) => void) {
    super(app)
    this.onAccept = onAccept
    const matched = findPomodoroPresetByDurations(currentDurations)
    this.selectedPresetId = matched?.id ?? POMODORO_PRESETS[0].id
  }

  onOpen() {
    this.modalEl.addClass('tareas-pomodoro-preset-modal-shell')
    const { contentEl } = this
    contentEl.addClass('tareas-modal', 'tareas-pomodoro-preset-modal')
    contentEl.createEl('h2', { text: 'Elegí un preset Pomodoro' })

    const cards = contentEl.createDiv({ cls: 'tareas-pomodoro-preset-cards' })
    for (const preset of POMODORO_PRESETS) {
      const card = cards.createDiv({ cls: 'tareas-pomodoro-preset-card' })
      card.setAttr('role', 'button')
      card.setAttr('tabindex', '0')
      card.onclick = () => this.selectPreset(preset.id)
      card.onkeydown = (event) => {
        if (event.key !== 'Enter' && event.key !== ' ')
          return
        event.preventDefault()
        this.selectPreset(preset.id)
      }

      card.createEl('h3', { cls: 'tareas-pomodoro-preset-title', text: preset.title })
      card.createDiv({ cls: 'tareas-pomodoro-preset-divider' })
      card.createEl('p', { cls: 'tareas-pomodoro-preset-usage-title', text: 'Uso' })
      card.createEl('p', {
        cls: 'tareas-pomodoro-preset-usage',
        text: preset.idealFor.replace(/^Ideal para:\s*/i, ''),
      })
      card.createDiv({ cls: 'tareas-pomodoro-preset-divider' })
      card.createEl('p', { cls: 'tareas-pomodoro-preset-line', text: preset.workLabel })
      card.createEl('p', { cls: 'tareas-pomodoro-preset-line', text: preset.shortBreakLabel })
      card.createEl('p', { cls: 'tareas-pomodoro-preset-line', text: preset.longBreakLabel })
      card.createEl('p', { cls: 'tareas-pomodoro-preset-line', text: preset.cyclesLabel })

      this.cardById.set(preset.id, card)
    }

    this.refreshSelection()

    const footer = contentEl.createDiv({ cls: 'tareas-modal-footer' })
    const cancelButton = footer.createEl('button', { text: 'Cancelar' })
    cancelButton.onclick = () => this.close()

    const acceptButton = footer.createEl('button', { text: 'Aceptar', cls: 'mod-cta' })
    acceptButton.onclick = () => this.accept()
  }

  onClose() {
    this.modalEl.removeClass('tareas-pomodoro-preset-modal-shell')
    this.cardById.clear()
    this.contentEl.empty()
  }

  private selectPreset(presetId: string) {
    this.selectedPresetId = presetId
    this.refreshSelection()
  }

  private refreshSelection() {
    for (const preset of POMODORO_PRESETS) {
      const card = this.cardById.get(preset.id)
      if (!card)
        continue

      card.toggleClass('is-selected', this.selectedPresetId === preset.id)
    }
  }

  private accept() {
    const selected = POMODORO_PRESETS.find(preset => preset.id === this.selectedPresetId)
    if (!selected)
      return

    this.onAccept({ ...selected.durations })
    this.close()
  }
}
