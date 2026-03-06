import { DEFAULT_BOARD_NAME, DEFAULT_EQUIPOS, DEFAULT_TABLEROS } from '../constants'
import { normalizePomodoroState } from '../engines/pomodoroEngine'
import type { BuildingPosition, BuildingSize, Equipo, ObsiaSettings, PomodoroState } from '../types'
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

export function createDefaultObsiaSettings(): ObsiaSettings {
  return {
    buildingPositions: {},
    buildingRotations: {},
    buildingSizes: {},
  }
}

export function normalizeObsiaFromSettings(rawData: unknown): ObsiaSettings {
  const defaults = createDefaultObsiaSettings()
  if (!isRecord(rawData) || !isRecord(rawData.obsia))
    return defaults

  const obsiaData = rawData.obsia
  return {
    buildingPositions: normalizeBuildingPositions(obsiaData.buildingPositions),
    buildingRotations: normalizeBuildingRotations(obsiaData.buildingRotations),
    buildingSizes: normalizeBuildingSizes(obsiaData.buildingSizes),
  }
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

function normalizeBuildingPositions(value: unknown): Record<string, BuildingPosition> {
  if (!isRecord(value))
    return {}

  const positions: Record<string, BuildingPosition> = {}
  for (const [key, rawPosition] of Object.entries(value)) {
    if (!isRecord(rawPosition))
      continue

    const x = Number(rawPosition.x)
    const y = Number(rawPosition.y)
    if (Number.isNaN(x) || Number.isNaN(y))
      continue

    positions[key] = { x, y }
  }
  return positions
}

function normalizeBuildingRotations(value: unknown): Record<string, number> {
  if (!isRecord(value))
    return {}

  const rotations: Record<string, number> = {}
  for (const [key, rawRotation] of Object.entries(value)) {
    const rotation = Number(rawRotation)
    if (!Number.isNaN(rotation))
      rotations[key] = rotation
  }
  return rotations
}

function normalizeBuildingSizes(value: unknown): Record<string, BuildingSize | number> {
  if (!isRecord(value))
    return {}

  const sizes: Record<string, BuildingSize | number> = {}
  for (const [key, rawSize] of Object.entries(value)) {
    if (typeof rawSize === 'number' && !Number.isNaN(rawSize)) {
      sizes[key] = rawSize
      continue
    }

    if (!isRecord(rawSize))
      continue

    const x = Number(rawSize.x)
    const y = Number(rawSize.y)
    if (Number.isNaN(x) || Number.isNaN(y))
      continue

    sizes[key] = { x, y }
  }
  return sizes
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
