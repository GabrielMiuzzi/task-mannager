import { TFile, TFolder, type App } from 'obsidian'

import { POMODORO_LOG_BASENAME, TAREAS_FOLDER } from '../constants'

export interface PomodoroLogEntry {
  date: string
  time: string
  type: string
  durationChoice: string
  task: string
  durationMinutes: number
  deviationHours: number
  finalized: boolean
}

interface AppendPomodoroLogEntryInput {
  timestampMs: number
  type: string
  durationChoice: string
  task: string
  durationMinutes: number
  deviationHours: number
  finalized: boolean
}

const POMODORO_LOG_PATH = `${TAREAS_FOLDER}/${POMODORO_LOG_BASENAME}.md`
const POMODORO_LOG_HEADER = [
  '# Registro Pomodoro',
  '',
  '| fecha | horario | tipo de pomodoro | duracion elegida | tarea | tiempo | desvio | finalizacion |',
  '| --- | --- | --- | --- | --- | --- | --- | --- |',
].join('\n')

export async function appendPomodoroLogEntry(app: App, input: AppendPomodoroLogEntryInput) {
  await ensurePomodoroLogFile(app)

  const date = new Date(input.timestampMs)
  const dateText = toLocalDateText(date)
  const timeText = toLocalTimeText(date)
  const typeText = sanitizePipeText(input.type)
  const durationChoiceText = sanitizePipeText(input.durationChoice)
  const taskText = sanitizePipeText(input.task)
  const durationMinutesText = formatMinutes(input.durationMinutes)
  const deviationText = formatHours(input.deviationHours)
  const finalizedText = input.finalized ? 'true' : 'false'
  const row = `| ${dateText} | ${timeText} | ${typeText} | ${durationChoiceText} | ${taskText} | ${durationMinutesText} | ${deviationText} | ${finalizedText} |`

  const file = app.vault.getAbstractFileByPath(POMODORO_LOG_PATH)
  if (!(file instanceof TFile))
    return

  const current = await app.vault.cachedRead(file)
  const nextContent = current.trimEnd()
    ? `${current.trimEnd()}\n${row}\n`
    : `${POMODORO_LOG_HEADER}\n${row}\n`
  await app.vault.modify(file, nextContent)
}

export async function readPomodoroLogEntries(app: App): Promise<PomodoroLogEntry[]> {
  await ensurePomodoroLogFile(app)

  const file = app.vault.getAbstractFileByPath(POMODORO_LOG_PATH)
  if (!(file instanceof TFile))
    return []

  const content = await app.vault.cachedRead(file)
  const entries: PomodoroLogEntry[] = []

  const lines = content.split(/\r?\n/)
  for (const line of lines) {
    if (!line.trim().startsWith('|'))
      continue

    if (line.includes('fecha | horario | tipo de pomodoro'))
      continue

    if (line.includes('| --- |'))
      continue

    const columns = line.split('|').map(item => item.trim()).filter(Boolean)
    if (columns.length < 5)
      continue

    const hasDurationColumns = columns.length >= 7
    const hasFinalizedColumn = columns.length >= 8
    const durationChoice = hasDurationColumns ? columns[3] : '-'
    const task = hasDurationColumns ? columns[4] : columns[3]
    const durationMinutes = hasDurationColumns ? Number.parseFloat(columns[5]) : 0
    const deviationHours = Number.parseFloat(hasDurationColumns ? columns[6] : columns[4])
    const finalizedValue = hasFinalizedColumn ? columns[7] : 'true'

    entries.push({
      date: columns[0],
      time: columns[1],
      type: columns[2],
      durationChoice,
      task,
      durationMinutes: Number.isNaN(durationMinutes) ? 0 : durationMinutes,
      deviationHours: Number.isNaN(deviationHours) ? 0 : deviationHours,
      finalized: finalizedValue.toLowerCase() !== 'false',
    })
  }

  return entries
}

export function getEntriesByDate(entries: PomodoroLogEntry[], localDateText: string): PomodoroLogEntry[] {
  return entries.filter(entry => entry.date === localDateText)
}

export function toLocalDateText(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function toLocalTimeText(date: Date): string {
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${hours}:${minutes}`
}

async function ensurePomodoroLogFile(app: App) {
  const folder = app.vault.getAbstractFileByPath(TAREAS_FOLDER)
  if (!folder) {
    try {
      await app.vault.createFolder(TAREAS_FOLDER)
    }
    catch {
      const retry = app.vault.getAbstractFileByPath(TAREAS_FOLDER)
      if (!(retry instanceof TFolder))
        throw new Error(`No se pudo crear la carpeta "${TAREAS_FOLDER}".`)
    }
  }

  const existing = app.vault.getAbstractFileByPath(POMODORO_LOG_PATH)
  if (existing)
    return

  await app.vault.create(POMODORO_LOG_PATH, `${POMODORO_LOG_HEADER}\n`)
}

function sanitizePipeText(value: string): string {
  return value.replace(/\|/g, '/').trim() || '-'
}

function formatHours(hours: number): string {
  return (Math.round(hours * 100) / 100).toFixed(2)
}

function formatMinutes(minutes: number): string {
  return (Math.round(minutes * 100) / 100).toFixed(2)
}
