import type { App, TAbstractFile, TFile, TFolder } from 'obsidian'

import { COMPLETED_SUBTASKS_FOLDER, COMPLETED_TASKS_FOLDER, SUBTASKS_FOLDER, TAREAS_FOLDER } from '../constants'
import {
  appendTaskLinkToFinishedIndex,
  appendTaskLinkToIndex,
  removeTaskLinkFromFinishedIndex,
  removeTaskLinkFromIndex,
} from './taskIndexEngine'
import { syncTaskTypeTags } from './frontmatterEngine'

export async function moveTaskToCompletedFolder(app: App, file: TFile, isSubtask = false): Promise<void> {
  const targetFolder = isSubtask ? COMPLETED_SUBTASKS_FOLDER : COMPLETED_TASKS_FOLDER
  await ensureFolder(app, targetFolder)
  const nextPath = resolveUniquePath(app, `${targetFolder}/${file.name}`)
  if (nextPath === file.path)
    return

  await removeTaskLinkFromIndex(app, file)
  await app.fileManager.renameFile(file, nextPath)
  await appendTaskLinkToFinishedIndex(app, file)
  await syncTaskTypeTags(app)
}

export async function moveTaskToActiveFolder(app: App, file: TFile, isSubtask = false): Promise<void> {
  const targetFolder = isSubtask ? SUBTASKS_FOLDER : TAREAS_FOLDER
  await ensureFolder(app, targetFolder)
  const nextPath = resolveUniquePath(app, `${targetFolder}/${file.name}`)
  if (nextPath === file.path)
    return

  await removeTaskLinkFromFinishedIndex(app, file)
  await app.fileManager.renameFile(file, nextPath)
  await appendTaskLinkToIndex(app, file)
  await syncTaskTypeTags(app)
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

    await app.vault.createFolder(currentPath)
  }
}

function isFolder(file: TAbstractFile | null): file is TFolder {
  return file !== null && 'children' in file
}
