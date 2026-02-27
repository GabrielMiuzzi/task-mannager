import type { App, TAbstractFile, TFile, TFolder } from 'obsidian'

import {
  CANCELLED_SUBTASKS_FOLDER,
  CANCELLED_TASKS_FOLDER,
  COMPLETED_SUBTASKS_FOLDER,
  COMPLETED_TASKS_FOLDER,
  DEFAULT_BOARD_NAME,
} from '../constants'
import { getBoardFolder, getBoardSubtasksFolder } from './taskEngine'
import {
  appendTaskLinkToCancelledIndex,
  appendTaskLinkToFinishedIndex,
  appendTaskLinkToIndex,
  removeTaskLinkFromCancelledIndex,
  removeTaskLinkFromFinishedIndex,
  removeTaskLinkFromIndex,
} from './taskIndexEngine'
import { syncTaskTypeTags } from './frontmatterEngine'
import { toTaskFrontmatter } from '../utils/guards'

export async function moveTaskToCompletedFolder(app: App, file: TFile, isSubtask = false): Promise<void> {
  const targetFolder = isSubtask ? COMPLETED_SUBTASKS_FOLDER : COMPLETED_TASKS_FOLDER
  await ensureFolder(app, targetFolder)
  const nextPath = resolveUniquePath(app, `${targetFolder}/${file.name}`)
  if (nextPath === file.path)
    return

  await removeTaskFromAllIndexes(app, file)
  await app.fileManager.renameFile(file, nextPath)
  await appendTaskLinkToFinishedIndex(app, file)
  await syncTaskTypeTags(app)
}

export async function moveTaskToCancelledFolder(app: App, file: TFile, isSubtask = false): Promise<void> {
  const targetFolder = isSubtask ? CANCELLED_SUBTASKS_FOLDER : CANCELLED_TASKS_FOLDER
  await ensureFolder(app, targetFolder)
  const nextPath = resolveUniquePath(app, `${targetFolder}/${file.name}`)
  if (nextPath === file.path)
    return

  await removeTaskFromAllIndexes(app, file)
  await app.fileManager.renameFile(file, nextPath)
  await appendTaskLinkToCancelledIndex(app, file)
  await syncTaskTypeTags(app)
}

export async function moveTaskToActiveFolder(app: App, file: TFile, isSubtask = false): Promise<void> {
  const targetBoard = resolveTaskBoardForFile(app, file)
  const targetFolder = isSubtask
    ? getBoardSubtasksFolder(targetBoard)
    : getBoardFolder(targetBoard)
  await ensureFolder(app, targetFolder)
  const nextPath = resolveUniquePath(app, `${targetFolder}/${file.name}`)
  if (nextPath === file.path)
    return

  await removeTaskFromAllIndexes(app, file)
  await app.fileManager.renameFile(file, nextPath)
  await appendTaskLinkToIndex(app, file)
  await syncTaskTypeTags(app)
}

async function removeTaskFromAllIndexes(app: App, file: TFile): Promise<void> {
  await removeTaskLinkFromIndex(app, file)
  await removeTaskLinkFromFinishedIndex(app, file)
  await removeTaskLinkFromCancelledIndex(app, file)
}

function resolveTaskBoardForFile(app: App, file: TFile): string {
  const rawFrontmatter = app.metadataCache.getFileCache(file)?.frontmatter
  const frontmatter = toTaskFrontmatter(rawFrontmatter)
  const rawBoard = (frontmatter?.tablero || '').trim().toLowerCase()
  return rawBoard || DEFAULT_BOARD_NAME
}

function resolveUniquePath(app: App, desiredPath: string): string {
  const existing = app.vault.getAbstractFileByPath(desiredPath)
  if (!existing || existing.path === desiredPath)
    return desiredPath

  const dotIndex = desiredPath.lastIndexOf('.')
  const base = dotIndex > 0 ? desiredPath.slice(0, dotIndex) : desiredPath
  const ext = dotIndex > 0 ? desiredPath.slice(dotIndex) : ''
  return `${base} ${Date.now()}${ext}`
}

async function ensureFolder(app: App, path: string): Promise<void> {
  const segments = path.split('/').filter(Boolean)
  let currentPath = ''
  for (const segment of segments) {
    currentPath = currentPath ? `${currentPath}/${segment}` : segment
    const existing = app.vault.getAbstractFileByPath(currentPath)
    if (isFolder(existing))
      continue

    if (existing)
      throw new Error(`Cannot create folder "${currentPath}" because a file with that name exists.`)

    try {
      await app.vault.createFolder(currentPath)
    }
    catch {
      const retry = app.vault.getAbstractFileByPath(currentPath)
      if (isFolder(retry))
        continue

      throw new Error(`Cannot create folder "${currentPath}".`)
    }
  }
}

function isFolder(file: TAbstractFile | null): file is TFolder {
  return file !== null && 'children' in file
}
