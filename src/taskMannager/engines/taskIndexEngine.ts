import * as obsidian from 'obsidian'

import {
  COMPLETED_TASKS_FOLDER,
  FINISHED_TASK_INDEX_BASENAME,
  INDEX_TAG,
  TAREAS_FOLDER,
  TASK_INDEX_BASENAME,
} from '../constants'

const TASK_INDEX_FILENAME = `${TASK_INDEX_BASENAME}.md`
const TASK_INDEX_PATH = `${TAREAS_FOLDER}/${TASK_INDEX_FILENAME}`
const FINISHED_TASK_INDEX_FILENAME = `${FINISHED_TASK_INDEX_BASENAME}.md`
const FINISHED_TASK_INDEX_PATH = `${COMPLETED_TASKS_FOLDER}/${FINISHED_TASK_INDEX_FILENAME}`

export async function ensureTaskIndexFile(app: obsidian.App): Promise<obsidian.TFile | null> {
  return ensureIndexFile(app, TAREAS_FOLDER, TASK_INDEX_PATH)
}

export async function ensureFinishedTaskIndexFile(app: obsidian.App): Promise<obsidian.TFile | null> {
  return ensureIndexFile(app, COMPLETED_TASKS_FOLDER, FINISHED_TASK_INDEX_PATH)
}

export async function appendTaskLinkToIndex(app: obsidian.App, taskFile: obsidian.TFile): Promise<void> {
  await appendTaskLinkToIndexFile(app, taskFile, TASK_INDEX_PATH, () => ensureTaskIndexFile(app))
}

export async function appendTaskLinkToFinishedIndex(app: obsidian.App, taskFile: obsidian.TFile): Promise<void> {
  await appendTaskLinkToIndexFile(app, taskFile, FINISHED_TASK_INDEX_PATH, () => ensureFinishedTaskIndexFile(app))
}

export async function removeTaskLinkFromIndex(app: obsidian.App, taskFile: obsidian.TFile): Promise<void> {
  await removeTaskLinkFromIndexFile(app, taskFile, TASK_INDEX_PATH)
}

export async function removeTaskLinkFromFinishedIndex(app: obsidian.App, taskFile: obsidian.TFile): Promise<void> {
  await removeTaskLinkFromIndexFile(app, taskFile, FINISHED_TASK_INDEX_PATH)
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

  const nonEmpty = filtered.filter(line => line.trim().length > 0)
  const next = nonEmpty.length > 0 ? `${nonEmpty.join('\n')}\n` : ''
  await app.vault.modify(indexFile, next)
}
