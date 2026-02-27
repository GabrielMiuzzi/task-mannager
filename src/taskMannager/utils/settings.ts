import { DEFAULT_EQUIPOS } from '../constants'
import { normalizePomodoroState } from '../engines/pomodoroEngine'
import type { Equipo, PomodoroState } from '../types'
import { isRecord } from './guards'

const LEGACY_FALLBACK_COLORS = ['#d97a1e', '#2e6db0', '#7c5ce7', '#00b894', '#e17055', '#fd79a8']
const REMOVED_DEFAULT_TEAM_NAMES = new Set(['Semanal', 'Diario', 'Completadas'])

export function normalizeEquiposFromSettings(rawData: unknown): Equipo[] {
  const equipos = extractEquipos(rawData)

  if (!equipos || equipos.length === 0)
    return [...DEFAULT_EQUIPOS]

  if (isStringArray(equipos)) {
    const normalizedFromLegacy = equipos
      .filter(name => !REMOVED_DEFAULT_TEAM_NAMES.has(name))
      .map((name, index) => ({
      name,
      color: LEGACY_FALLBACK_COLORS[index % LEGACY_FALLBACK_COLORS.length],
      }))
    return mergeWithDefaultEquipos(normalizedFromLegacy)
  }

  const normalized = equipos
    .filter(isEquipo)
    .map(equipo => ({ name: equipo.name.trim(), color: equipo.color }))
    .filter(equipo => !REMOVED_DEFAULT_TEAM_NAMES.has(equipo.name))
    .filter(equipo => Boolean(equipo.name))

  if (normalized.length === 0)
    return [...DEFAULT_EQUIPOS]

  return mergeWithDefaultEquipos(normalized)
}

export function normalizePomodoroFromSettings(rawData: unknown): PomodoroState {
  if (!isRecord(rawData))
    return normalizePomodoroState(null)

  return normalizePomodoroState(rawData.pomodoro)
}

function extractEquipos(rawData: unknown): unknown[] | undefined {
  if (!isRecord(rawData))
    return undefined

  const equipos = rawData.equipos
  if (!Array.isArray(equipos))
    return undefined

  return equipos
}

function isEquipo(value: unknown): value is Equipo {
  if (!isRecord(value))
    return false

  return typeof value.name === 'string' && typeof value.color === 'string'
}

function isStringArray(value: unknown[]): value is string[] {
  return value.every(item => typeof item === 'string')
}

function mergeWithDefaultEquipos(equipos: Equipo[]): Equipo[] {
  const defaultsByName = new Map(DEFAULT_EQUIPOS.map(equipo => [equipo.name, equipo]))
  const normalizedByName = new Map(equipos.map(equipo => [equipo.name, equipo]))

  const withDefaults = DEFAULT_EQUIPOS.map((equipo) => {
    const savedEquipo = normalizedByName.get(equipo.name)
    return savedEquipo ? { ...savedEquipo } : { ...equipo }
  })

  const customEquipos = equipos.filter(equipo => !defaultsByName.has(equipo.name))
  return [...withDefaults, ...customEquipos]
}
