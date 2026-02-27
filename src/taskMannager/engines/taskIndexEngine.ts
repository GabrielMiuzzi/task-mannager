import * as obsidian from 'obsidian'

import {
  CANCELLED_TASK_INDEX_BASENAME,
  CANCELLED_TASKS_FOLDER,
  COMPLETED_TASKS_FOLDER,
  DEFAULT_BOARD_NAME,
  FINISHED_TASK_INDEX_BASENAME,
  INDEX_TAG,
  LEGACY_COMPLETED_TASKS_FOLDER,
  TAREAS_FOLDER,
  TASK_INDEX_BASENAME,
} from '../constants'

const TASK_INDEX_FILENAME = `${TASK_INDEX_BASENAME}.md`
const TASK_INDEX_PATH = `${TAREAS_FOLDER}/${TASK_INDEX_FILENAME}`
const FINISHED_TASK_INDEX_FILENAME = `${FINISHED_TASK_INDEX_BASENAME}.md`
const FINISHED_TASK_INDEX_PATH = `${COMPLETED_TASKS_FOLDER}/${FINISHED_TASK_INDEX_FILENAME}`
const CANCELLED_TASK_INDEX_FILENAME = `${CANCELLED_TASK_INDEX_BASENAME}.md`
const CANCELLED_TASK_INDEX_PATH = `${CANCELLED_TASKS_FOLDER}/${CANCELLED_TASK_INDEX_FILENAME}`
const BOARD_TASK_INDEX_SUFFIX = 'TaskIndex'

export async function ensureTaskIndexFile(app: obsidian.App): Promise<obsidian.TFile | null> {
  const indexFile = await ensureIndexFile(app, TAREAS_FOLDER, TASK_INDEX_PATH)
  if (!indexFile)
    return null

  await syncRootTaskIndexLinks(app)
  return indexFile
}

export async function ensureFinishedTaskIndexFile(app: obsidian.App): Promise<obsidian.TFile | null> {
  return ensureIndexFile(app, COMPLETED_TASKS_FOLDER, FINISHED_TASK_INDEX_PATH)
}

export async function ensureCancelledTaskIndexFile(app: obsidian.App): Promise<obsidian.TFile | null> {
  return ensureIndexFile(app, CANCELLED_TASKS_FOLDER, CANCELLED_TASK_INDEX_PATH)
}

export async function appendTaskLinkToIndex(app: obsidian.App, taskFile: obsidian.TFile): Promise<void> {
  const boardName = resolveActiveTaskBoard(app, taskFile)
  const boardIndexPath = getBoardTaskIndexPath(boardName)
  await appendTaskLinkToIndexFile(app, taskFile, boardIndexPath, () => ensureBoardTaskIndexFile(app, boardName))
}

export async function appendTaskLinkToFinishedIndex(app: obsidian.App, taskFile: obsidian.TFile): Promise<void> {
  await appendTaskLinkToIndexFile(app, taskFile, FINISHED_TASK_INDEX_PATH, () => ensureFinishedTaskIndexFile(app))
}

export async function appendTaskLinkToCancelledIndex(app: obsidian.App, taskFile: obsidian.TFile): Promise<void> {
  await appendTaskLinkToIndexFile(app, taskFile, CANCELLED_TASK_INDEX_PATH, () => ensureCancelledTaskIndexFile(app))
}

export async function removeTaskLinkFromIndex(app: obsidian.App, taskFile: obsidian.TFile): Promise<void> {
  const boardNames = await getBoardFolderNames(app)
  for (const boardName of boardNames)
    await removeTaskLinkFromIndexFile(app, taskFile, getBoardTaskIndexPath(boardName))
}

export async function removeTaskLinkFromFinishedIndex(app: obsidian.App, taskFile: obsidian.TFile): Promise<void> {
  await removeTaskLinkFromIndexFile(app, taskFile, FINISHED_TASK_INDEX_PATH)
}

export async function removeTaskLinkFromCancelledIndex(app: obsidian.App, taskFile: obsidian.TFile): Promise<void> {
  await removeTaskLinkFromIndexFile(app, taskFile, CANCELLED_TASK_INDEX_PATH)
}

export function getBoardTaskIndexBasename(boardName: string): string {
  const normalized = normalizeBoardName(boardName)
  return `${normalized}${BOARD_TASK_INDEX_SUFFIX}`
}

export function getBoardTaskIndexPath(boardName: string): string {
  const normalized = normalizeBoardName(boardName)
  const fileName = `${getBoardTaskIndexBasename(normalized)}.md`
  return `${TAREAS_FOLDER}/${normalized}/${fileName}`
}

export function isBoardTaskIndexPath(path: string): boolean {
  if (!path.startsWith(`${TAREAS_FOLDER}/`) || !path.endsWith('.md'))
    return false

  const relativePath = path.slice(`${TAREAS_FOLDER}/`.length)
  const segments = relativePath.split('/')
  if (segments.length !== 2)
    return false

  const [boardName, fileName] = segments
  if (!boardName)
    return false

  const expectedFileName = `${getBoardTaskIndexBasename(boardName)}.md`
  return fileName === expectedFileName
}

export async function ensureBoardTaskIndexFile(app: obsidian.App, boardName: string): Promise<obsidian.TFile | null> {
  const normalized = normalizeBoardName(boardName)
  const folderPath = `${TAREAS_FOLDER}/${normalized}`
  const indexPath = getBoardTaskIndexPath(normalized)
  return ensureIndexFile(app, folderPath, indexPath)
}

export async function syncRootTaskIndexLinks(app: obsidian.App): Promise<void> {
  const rootIndex = app.vault.getAbstractFileByPath(TASK_INDEX_PATH)
  if (!(rootIndex instanceof obsidian.TFile))
    return

  const boardNames = await getBoardFolderNames(app)
  const links = boardNames
    .map(boardName => `[[${boardName}/${getBoardTaskIndexBasename(boardName)}]]`)
    .sort((a, b) => a.localeCompare(b))

  const defaultLink = `[[${DEFAULT_BOARD_NAME}/${getBoardTaskIndexBasename(DEFAULT_BOARD_NAME)}]]`
  const finishedLink = `[[finished/${FINISHED_TASK_INDEX_BASENAME}]]`
  const cancelledLink = `[[cancelled/${CANCELLED_TASK_INDEX_BASENAME}]]`
  const orderedLinks = [
    defaultLink,
    ...links.filter(link => link !== defaultLink),
    finishedLink,
    cancelledLink,
  ]
  const nextContent = buildIndexContent(orderedLinks)
  const currentContent = await app.vault.cachedRead(rootIndex)
  if (currentContent === nextContent)
    return

  await app.vault.modify(rootIndex, nextContent)
}

export async function syncBoardTaskIndexLinks(app: obsidian.App, boardName: string): Promise<void> {
  const normalizedBoardName = normalizeBoardName(boardName)
  const boardFolderPrefix = `${TAREAS_FOLDER}/${normalizedBoardName}/`
  const boardIndexPath = getBoardTaskIndexPath(normalizedBoardName)
  const boardIndex = await ensureBoardTaskIndexFile(app, normalizedBoardName)
  if (!boardIndex)
    return

  const links = app.vault
    .getMarkdownFiles()
    .filter(file => file.path.startsWith(boardFolderPrefix))
    .filter(file => file.path !== boardIndexPath)
    .filter(file => !isBoardTaskIndexPath(file.path))
    .map(file => `[[${file.basename}]]`)
    .sort((a, b) => a.localeCompare(b))

  const nextContent = buildIndexContent(links)
  const currentContent = await app.vault.cachedRead(boardIndex)
  if (currentContent === nextContent)
    return

  await app.vault.modify(boardIndex, nextContent)
}

export async function syncAllBoardTaskIndexLinks(app: obsidian.App): Promise<void> {
  const boardNames = await getBoardFolderNames(app)
  for (const boardName of boardNames)
    await syncBoardTaskIndexLinks(app, boardName)
}

export async function syncFinishedTaskIndexLinks(app: obsidian.App): Promise<void> {
  await syncTerminalTaskIndexLinks(app, COMPLETED_TASKS_FOLDER, FINISHED_TASK_INDEX_PATH, () => ensureFinishedTaskIndexFile(app))
}

export async function syncCancelledTaskIndexLinks(app: obsidian.App): Promise<void> {
  await syncTerminalTaskIndexLinks(app, CANCELLED_TASKS_FOLDER, CANCELLED_TASK_INDEX_PATH, () => ensureCancelledTaskIndexFile(app))
}

export async function syncAllTaskIndexes(app: obsidian.App): Promise<void> {
  await ensureTaskIndexFile(app)
  await ensureFinishedTaskIndexFile(app)
  await ensureCancelledTaskIndexFile(app)
  await syncAllBoardTaskIndexLinks(app)
  await syncFinishedTaskIndexLinks(app)
  await syncCancelledTaskIndexLinks(app)
  await syncRootTaskIndexLinks(app)
}

async function ensureIndexFile(
  app: obsidian.App,
  folderPath: string,
  filePath: string,
): Promise<obsidian.TFile | null> {
  const folder = app.vault.getAbstractFileByPath(folderPath)
  if (!(folder instanceof obsidian.TFolder))
    return null

  const existing = app.vault.getAbstractFileByPath(filePath)
  if (existing instanceof obsidian.TFile)
    return existing

  if (existing)
    return null

  try {
    const initialContent = ['---', `tags: [${INDEX_TAG}]`, '---', ''].join('\n')
    return await app.vault.create(filePath, initialContent)
  }
  catch {
    const retry = app.vault.getAbstractFileByPath(filePath)
    return retry instanceof obsidian.TFile ? retry : null
  }
}

async function getBoardFolderNames(app: obsidian.App): Promise<string[]> {
  const rootFolder = app.vault.getAbstractFileByPath(TAREAS_FOLDER)
  if (!(rootFolder instanceof obsidian.TFolder))
    return [DEFAULT_BOARD_NAME]

  const boardNames = rootFolder.children
    .filter((child): child is obsidian.TFolder => child instanceof obsidian.TFolder)
    .map(folder => folder.name.trim().toLowerCase())
    .filter(name => Boolean(name)
      && name !== COMPLETED_TASKS_FOLDER.split('/').pop()
      && name !== CANCELLED_TASKS_FOLDER.split('/').pop()
      && name !== LEGACY_COMPLETED_TASKS_FOLDER.split('/').pop())

  if (!boardNames.includes(DEFAULT_BOARD_NAME))
    boardNames.push(DEFAULT_BOARD_NAME)

  return boardNames
}

async function appendTaskLinkToIndexFile(
  app: obsidian.App,
  taskFile: obsidian.TFile,
  indexPath: string,
  ensureIndex: () => Promise<obsidian.TFile | null>,
): Promise<void> {
  if (taskFile.path === indexPath)
    return

  const indexFile = await ensureIndex()
  if (!indexFile)
    return

  const linkLine = `[[${taskFile.basename}]]`
  const current = await app.vault.cachedRead(indexFile)
  const lines = current.split('\n').map(line => line.trim()).filter(Boolean)
  if (lines.includes(linkLine))
    return

  const separator = current.length > 0 && !current.endsWith('\n') ? '\n' : ''
  const next = `${current}${separator}${linkLine}\n`
  await app.vault.modify(indexFile, next)
}

async function removeTaskLinkFromIndexFile(
  app: obsidian.App,
  taskFile: obsidian.TFile,
  indexPath: string,
): Promise<void> {
  if (taskFile.path === indexPath)
    return

  const indexFile = app.vault.getAbstractFileByPath(indexPath)
  if (!(indexFile instanceof obsidian.TFile))
    return

  const linkLine = `[[${taskFile.basename}]]`
  const lines = (await app.vault.cachedRead(indexFile)).split('\n')
  const filtered = lines.filter(line => line.trim() !== linkLine)

  if (filtered.length === lines.length)
    return

  const next = filtered.join('\n')
  await app.vault.modify(indexFile, next)
}

function resolveActiveTaskBoard(app: obsidian.App, taskFile: obsidian.TFile): string {
  const frontmatter = app.metadataCache.getFileCache(taskFile)?.frontmatter
  const rawBoard = typeof frontmatter?.tablero === 'string'
    ? frontmatter.tablero.trim().toLowerCase()
    : ''
  if (rawBoard)
    return rawBoard

  const relativePath = taskFile.path.startsWith(`${TAREAS_FOLDER}/`)
    ? taskFile.path.slice(`${TAREAS_FOLDER}/`.length)
    : ''
  const boardFromPath = relativePath.split('/')[0]?.trim().toLowerCase() || ''
  return normalizeBoardName(boardFromPath)
}

function normalizeBoardName(boardName: string): string {
  const normalized = boardName.trim().toLowerCase()
  return normalized || DEFAULT_BOARD_NAME
}

function buildIndexContent(lines: string[]): string {
  return ['---', `tags: [${INDEX_TAG}]`, '---', '', ...lines, ''].join('\n')
}

async function syncTerminalTaskIndexLinks(
  app: obsidian.App,
  folderPath: string,
  indexPath: string,
  ensureIndex: () => Promise<obsidian.TFile | null>,
): Promise<void> {
  const indexFile = await ensureIndex()
  if (!indexFile)
    return

  const links = app.vault
    .getMarkdownFiles()
    .filter(file => file.path.startsWith(`${folderPath}/`))
    .filter(file => file.path !== indexPath)
    .map(file => `[[${file.basename}]]`)
    .sort((a, b) => a.localeCompare(b))

  const nextContent = buildIndexContent(links)
  const currentContent = await app.vault.cachedRead(indexFile)
  if (currentContent === nextContent)
    return

  await app.vault.modify(indexFile, nextContent)
}
