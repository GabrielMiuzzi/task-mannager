import type { App, TFile } from 'obsidian'

import {
  CANCELLED_TASK_INDEX_BASENAME,
  FINISHED_TASK_INDEX_BASENAME,
  INDEX_TAG,
  SUBTASK_TAG,
  TAREAS_FOLDER,
  TASK_INDEX_BASENAME,
  TASK_TAG,
} from '../constants'
import { isBoardTaskIndexPath } from './taskIndexEngine'
import type { TaskFrontmatter } from '../types'
import { toTaskFrontmatter } from '../utils/guards'

export async function updateFrontmatter(app: App, file: TFile, updates: Partial<TaskFrontmatter>) {
  await app.fileManager.processFrontMatter(file, (fm) => {
    for (const [key, value] of Object.entries(updates))
      fm[key] = value
  })
}

export async function renameTeamInTasks(app: App, oldName: string, newName: string, boardName: string) {
  const files = app.vault
    .getMarkdownFiles()
    .filter(file => file.path.startsWith(`${TAREAS_FOLDER}/`))

  for (const file of files) {
    const fm = toTaskFrontmatter(app.metadataCache.getFileCache(file)?.frontmatter)
    if (fm?.equipo !== oldName || (fm?.tablero || '').trim().toLowerCase() !== boardName.trim().toLowerCase())
      continue

    await app.fileManager.processFrontMatter(file, (frontmatter) => {
      frontmatter.equipo = newName
    })
  }
}

export function countTopLevelTeamTasks(app: App, teamName: string, boardName: string): number {
  const files = app.vault
    .getMarkdownFiles()
    .filter(file => file.path.startsWith(`${TAREAS_FOLDER}/`))

  let count = 0
  for (const file of files) {
    const fm = toTaskFrontmatter(app.metadataCache.getFileCache(file)?.frontmatter)
    if (fm?.equipo === teamName
      && (fm?.tablero || '').trim().toLowerCase() === boardName.trim().toLowerCase()
      && !fm?.parent)
      count++
  }

  return count
}

export async function rebuildTaskChildLinks(app: App) {
  const files = app.vault
    .getMarkdownFiles()
    .filter(file => file.path.startsWith(`${TAREAS_FOLDER}/`))
    .filter(file => file.basename !== TASK_INDEX_BASENAME
      && file.basename !== FINISHED_TASK_INDEX_BASENAME
      && file.basename !== CANCELLED_TASK_INDEX_BASENAME)

  const childMap = new Map<string, Set<string>>()
  const taskEntries: Array<{ file: TFile, taskName: string }> = []

  for (const file of files) {
    const fm = await readTaskFrontmatter(app, file)
    if (!fm)
      continue

    const taskName = (fm?.tarea?.trim() || file.basename).trim()
    taskEntries.push({ file, taskName })

    const parentName = normalizeParentReference(fm?.parent)
    if (!parentName)
      continue

    const childSet = childMap.get(parentName) ?? new Set<string>()
    childSet.add(file.basename)
    childMap.set(parentName, childSet)
  }

  for (const entry of taskEntries) {
    const { file, taskName } = entry
    const childBasenames = new Set<string>([
      ...(childMap.get(file.basename) ?? []),
      ...(childMap.get(taskName) ?? []),
    ])
    childBasenames.delete(file.basename)

    const nextChildLinks = Array.from(childBasenames)
      .sort((a, b) => a.localeCompare(b))
      .map(name => `[[${name}]]`)

    await app.fileManager.processFrontMatter(file, (fm) => {
      fm.childs = nextChildLinks
    })
  }
}

export async function syncTaskTypeTags(app: App) {
  const files = app.vault
    .getMarkdownFiles()
    .filter(file => file.path.startsWith(`${TAREAS_FOLDER}/`))

  const classificationTags = new Set([INDEX_TAG, TASK_TAG, SUBTASK_TAG])
  for (const file of files) {
    const nextClassification = resolveClassificationTag(file)

    await app.fileManager.processFrontMatter(file, (frontmatter) => {
      const currentTags = normalizeTags(frontmatter.tags)
      const preservedTags = currentTags.filter(tag => !classificationTags.has(tag))
      frontmatter.tags = [...preservedTags, nextClassification]
    })
  }
}

async function readTaskFrontmatter(app: App, file: TFile): Promise<TaskFrontmatter | null> {
  const content = await app.vault.cachedRead(file)
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match)
    return null

  const rawYaml = match[1]
  const frontmatterData = parseSimpleYaml(rawYaml)
  return toTaskFrontmatter(frontmatterData)
}

function parseSimpleYaml(yamlText: string): Record<string, unknown> {
  const result: Record<string, unknown> = {}
  const lines = yamlText.split(/\r?\n/)
  let index = 0

  while (index < lines.length) {
    const line = lines[index]
    if (!line.trim()) {
      index++
      continue
    }

    const keyValueMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (!keyValueMatch) {
      index++
      continue
    }

    const [, key, rawValue] = keyValueMatch
    const trimmedValue = rawValue.trim()

    if (trimmedValue === '') {
      result[key] = ''
      index++
      continue
    }

    if (trimmedValue === '[]') {
      result[key] = []
      index++
      continue
    }

    if (trimmedValue.startsWith('[') && trimmedValue.endsWith(']')) {
      const inner = trimmedValue.slice(1, -1).trim()
      if (!inner) {
        result[key] = []
        index++
        continue
      }

      result[key] = inner.split(',').map(item => unquoteYamlValue(item.trim()))
      index++
      continue
    }

    if (trimmedValue === '|') {
      const blockLines: string[] = []
      index++
      while (index < lines.length && /^\s+/.test(lines[index])) {
        blockLines.push(lines[index].replace(/^\s+/, ''))
        index++
      }
      result[key] = blockLines.join('\n')
      continue
    }

    result[key] = unquoteYamlValue(trimmedValue)
    index++
  }

  return result
}

function unquoteYamlValue(value: string): string {
  if (value.startsWith('"') && value.endsWith('"'))
    return value.slice(1, -1).replace(/\\"/g, '"')

  if (value.startsWith('\'') && value.endsWith('\''))
    return value.slice(1, -1)

  return value
}

function normalizeParentReference(parentValue: string | undefined): string {
  const trimmed = (parentValue || '').trim()
  if (!trimmed)
    return ''

  const linkMatch = trimmed.match(/^\[\[(.+?)\]\]$/)
  const rawReference = (linkMatch ? linkMatch[1] : trimmed).trim()
  const withoutAlias = rawReference.split('|')[0].trim()
  const withoutHeading = withoutAlias.split('#')[0].trim()
  const basename = withoutHeading.split('/').pop() ?? withoutHeading
  return basename.replace(/\.md$/i, '').trim()
}

function resolveClassificationTag(file: TFile): string {
  if (file.basename === TASK_INDEX_BASENAME
    || file.basename === FINISHED_TASK_INDEX_BASENAME
    || file.basename === CANCELLED_TASK_INDEX_BASENAME
    || isBoardTaskIndexPath(file.path))
    return INDEX_TAG

  if (file.path.includes('/subTasks/'))
    return SUBTASK_TAG

  return TASK_TAG
}

function normalizeTags(value: unknown): string[] {
  if (Array.isArray(value))
    return value.filter((item): item is string => typeof item === 'string').map(normalizeTagValue).filter(Boolean)

  if (typeof value === 'string') {
    const normalized = normalizeTagValue(value)
    return normalized ? [normalized] : []
  }

  return []
}

function normalizeTagValue(tag: string): string {
  return tag.replace(/^#/, '').trim()
}
