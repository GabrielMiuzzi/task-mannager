import { DEFAULT_BOARD_NAME, DEFAULT_EQUIPOS, DEFAULT_TABLEROS } from '../constants'
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
        name: name.trim(),
        color: LEGACY_FALLBACK_COLORS[index % LEGACY_FALLBACK_COLORS.length],
        tablero: DEFAULT_BOARD_NAME,
      }))
    return mergeWithDefaultEquipos(normalizedFromLegacy)
  }

  const normalized = equipos
    .filter(isEquipo)
    .map(equipo => ({
      name: equipo.name.trim(),
      color: equipo.color,
      tablero: (equipo.tablero || DEFAULT_BOARD_NAME).trim().toLowerCase(),
    }))
    .filter(equipo => !REMOVED_DEFAULT_TEAM_NAMES.has(equipo.name))
    .filter(equipo => Boolean(equipo.name))

  if (normalized.length === 0)
    return [...DEFAULT_EQUIPOS]

  return mergeWithDefaultEquipos(normalized)
}

export function normalizeTablerosFromSettings(rawData: unknown): Equipo[] {
  let tableros = extractTableros(rawData)
  if ((!tableros || tableros.length === 0) && shouldReuseEquiposAsBoards(rawData))
    tableros = extractEquipos(rawData)

  if (!tableros || tableros.length === 0)
    return [...DEFAULT_TABLEROS]

  if (isStringArray(tableros)) {
    const normalized = tableros
      .map((name, index) => ({
        name: name.trim().toLowerCase(),
        color: LEGACY_FALLBACK_COLORS[index % LEGACY_FALLBACK_COLORS.length],
      }))
      .filter(board => Boolean(board.name))
    return mergeWithDefaultTableros(normalized)
  }

  const normalized = tableros
    .filter(isEquipo)
    .map(board => ({ name: board.name.trim().toLowerCase(), color: board.color }))
    .filter(board => Boolean(board.name))
  return mergeWithDefaultTableros(normalized)
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

function extractTableros(rawData: unknown): unknown[] | undefined {
  if (!isRecord(rawData))
    return undefined

  const tableros = rawData.tableros
  if (!Array.isArray(tableros))
    return undefined

  return tableros
}

function shouldReuseEquiposAsBoards(rawData: unknown): boolean {
  const equipos = extractEquipos(rawData)
  if (!equipos || equipos.length === 0)
    return false

  if (isStringArray(equipos))
    return equipos.some(name => name.trim().toLowerCase() === 'default')

  const namedEquipos = equipos.filter(isEquipo)
  return namedEquipos.some(item => item.name.trim().toLowerCase() === 'default')
}

function isEquipo(value: unknown): value is Equipo {
  if (!isRecord(value))
    return false

  return typeof value.name === 'string'
    && typeof value.color === 'string'
    && (typeof value.tablero === 'undefined' || typeof value.tablero === 'string')
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

function mergeWithDefaultTableros(tableros: Equipo[]): Equipo[] {
  const defaultsByName = new Map(DEFAULT_TABLEROS.map(board => [board.name, board]))
  const normalizedByName = new Map(tableros.map(board => [board.name, board]))

  const withDefaults = DEFAULT_TABLEROS.map((board) => {
    const savedBoard = normalizedByName.get(board.name)
    return savedBoard ? { ...savedBoard } : { ...board }
  })

  const customBoards = tableros.filter(board => !defaultsByName.has(board.name))
  return [...withDefaults, ...customBoards]
}
