import type { CachedMetadata, TAbstractFile } from 'obsidian'

import { TFile, setIcon } from 'obsidian'

import { OBSIA_GRAPH_HIDE_CLASS, OBSIA_VIEW_TYPE } from '../constants'
import type {
  BuildModel,
  Building,
  BuildingPosition,
  BuildingSize,
  CachedSearchEntry,
  ObsiaSettings,
  ObsiaViewApi,
} from '../types'
import { ObsiaBuildView } from '../view/ObsiaBuildView'
import type { TareasPlugin } from './TareasPlugin'

function normalize(text: string): string {
  return text.trim().toLowerCase()
}

function sortByNameAsc(items: TFile[]): TFile[] {
  return [...items].sort((a, b) => a.basename.localeCompare(b.basename, undefined, { sensitivity: 'base' }))
}

export class ObsiaIntegration implements ObsiaViewApi {
  private static readonly ISO_BUILDING_GRID_UNITS = 2

  private settings: ObsiaSettings
  private searchCache = new Map<string, CachedSearchEntry>()
  private ribbonEl: HTMLElement | null = null
  private ribbonObserver: MutationObserver | null = null
  private saveTimer: number | null = null

  constructor(
    private readonly plugin: TareasPlugin,
    settings: ObsiaSettings,
  ) {
    this.settings = {
      buildingPositions: { ...settings.buildingPositions },
      buildingRotations: { ...settings.buildingRotations },
      buildingSizes: { ...settings.buildingSizes },
    }
  }

  getSettings(): ObsiaSettings {
    return {
      buildingPositions: { ...this.settings.buildingPositions },
      buildingRotations: { ...this.settings.buildingRotations },
      buildingSizes: { ...this.settings.buildingSizes },
    }
  }

  onload() {
    this.plugin.registerView(OBSIA_VIEW_TYPE, leaf => new ObsiaBuildView(leaf, this))
    this.plugin.addCommand({
      id: 'open-build-view',
      name: 'Open Build View',
      callback: () => {
        void this.activateBuildView()
      },
    })

    this.ribbonEl = this.plugin.addRibbonIcon('blocks', 'Open Build View', () => {
      void this.activateBuildView()
    })
    this.ribbonEl.addClass('obsia-build-ribbon-button')
    this.decorateBuildRibbonButton(this.ribbonEl)

    document.body.classList.add(OBSIA_GRAPH_HIDE_CLASS)
    this.hideGraphRibbonButtons()
    this.observeRibbonForGraphButtons()

    this.plugin.registerEvent(this.plugin.app.vault.on('modify', (file) => this.invalidateCache(file)))
    this.plugin.registerEvent(this.plugin.app.vault.on('delete', (file) => this.invalidateCache(file)))
    this.plugin.registerEvent(this.plugin.app.vault.on('rename', (file, oldPath) => this.invalidateCache(file, oldPath)))
    this.plugin.registerEvent(this.plugin.app.metadataCache.on('resolved', () => this.refreshBuildViews()))
    this.plugin.registerEvent(this.plugin.app.workspace.on('layout-change', () => this.refreshBuildViews()))
  }

  onunload() {
    document.body.classList.remove(OBSIA_GRAPH_HIDE_CLASS)
    this.ribbonObserver?.disconnect()
    this.ribbonObserver = null

    for (const leaf of this.plugin.app.workspace.getLeavesOfType(OBSIA_VIEW_TYPE))
      leaf.detach()

    if (this.saveTimer) {
      window.clearTimeout(this.saveTimer)
      this.saveTimer = null
    }
  }

  async activateBuildView() {
    const { workspace } = this.plugin.app
    const existing = workspace.getLeavesOfType(OBSIA_VIEW_TYPE)[0]
    if (existing) {
      await workspace.revealLeaf(existing)
      return
    }

    const leaf = workspace.getLeaf(true)
    await leaf.setViewState({
      type: OBSIA_VIEW_TYPE,
      active: true,
    })
    await workspace.revealLeaf(leaf)
  }

  buildModel(): BuildModel {
    const files = this.plugin.app.vault.getFiles()
    const fileByPath = new Map(files.map(file => [file.path, file] as const))
    const outlinks = this.getResolvedOutlinks(fileByPath)

    const roots = files
      .filter((file) => {
        const count = outlinks.get(file.path)?.size ?? 0
        const name = normalize(file.basename)
        return name.includes('index') || count >= 2
      })
      .sort((a, b) => {
        const countA = outlinks.get(a.path)?.size ?? 0
        const countB = outlinks.get(b.path)?.size ?? 0
        if (countA !== countB)
          return countB - countA
        return a.basename.localeCompare(b.basename, undefined, { sensitivity: 'base' })
      })

    const assigned = new Set<string>()
    const buildings: Building[] = []

    for (const root of roots) {
      const members = [root]
      const links = outlinks.get(root.path) ?? new Set<string>()
      const linkedFiles = [...links]
        .map(path => fileByPath.get(path))
        .filter((file): file is TFile => !!file)
        .filter(file => !assigned.has(file.path))
      members.push(...sortByNameAsc(linkedFiles))

      if (members.length <= 1)
        continue

      const floors: Building['floors'] = members.map((file, idx) => ({
        path: file.path,
        name: file.basename,
        kind: 'file' as const,
        isRoot: idx === 0,
      }))
      floors.unshift({
        path: null,
        name: 'Comandos',
        kind: 'command',
        isRoot: false,
      })
      buildings.push({
        id: root.path,
        rootPath: root.path,
        rootName: root.basename,
        floors,
      })
      for (const member of members)
        assigned.add(member.path)
    }

    const unassigned = files.filter(file => !assigned.has(file.path))
    for (const file of sortByNameAsc(unassigned)) {
      buildings.push({
        id: file.path,
        rootPath: file.path,
        rootName: file.basename,
        floors: [
          {
            path: null,
            name: 'Comandos',
            kind: 'command',
            isRoot: false,
          },
          {
            path: file.path,
            name: file.basename,
            kind: 'file',
            isRoot: true,
          },
        ],
      })
      assigned.add(file.path)
    }

    const representedPaths = new Set(
      buildings.flatMap(building => building.floors.map(floor => floor.path).filter((path): path is string => !!path)),
    )
    const edges: Array<{ fromPath: string, toPath: string }> = []
    const seen = new Set<string>()

    for (const [fromPath, targets] of outlinks.entries()) {
      if (!representedPaths.has(fromPath))
        continue
      for (const toPath of targets) {
        if (!representedPaths.has(toPath))
          continue
        const key = `${fromPath}=>${toPath}`
        if (seen.has(key))
          continue
        seen.add(key)
        edges.push({ fromPath, toPath })
      }
    }

    return { buildings, edges, representedPaths }
  }

  async findMatches(query: string): Promise<TFile[]> {
    const normalizedQuery = normalize(query)
    if (!normalizedQuery)
      return []

    const files = this.plugin.app.vault.getFiles()
    const results: TFile[] = []
    await Promise.all(files.map(async (file) => {
      const cached = await this.getSearchEntry(file)
      if (!cached)
        return
      if (cached.basenameLower.includes(normalizedQuery) || cached.contentLower.includes(normalizedQuery))
        results.push(file)
    }))
    return results
  }

  async openFileByPath(path: string) {
    const file = this.plugin.app.vault.getAbstractFileByPath(path)
    if (!(file instanceof TFile))
      return
    await this.plugin.app.workspace.getLeaf(true).openFile(file)
  }

  getBuildingPosition(rootPath: string): BuildingPosition | null {
    const pos = this.settings.buildingPositions[rootPath]
    if (!pos)
      return null
    return { x: pos.x, y: pos.y }
  }

  getBuildingRotation(rootPath: string): number {
    const raw = this.settings.buildingRotations[rootPath]
    if (typeof raw !== 'number' || Number.isNaN(raw))
      return 0
    const normalized = Math.round(raw) % 4
    return normalized < 0 ? normalized + 4 : normalized
  }

  getBuildingSize(rootPath: string): BuildingSize {
    const raw = this.settings.buildingSizes[rootPath]
    if (typeof raw === 'number' && !Number.isNaN(raw)) {
      const normalized = Math.max(2, Math.min(12, Math.round(raw)))
      return { x: normalized, y: normalized }
    }
    if (!raw || typeof raw !== 'object')
      return { x: ObsiaIntegration.ISO_BUILDING_GRID_UNITS, y: ObsiaIntegration.ISO_BUILDING_GRID_UNITS }
    const x = Math.max(2, Math.min(12, Math.round((raw as BuildingSize).x)))
    const y = Math.max(2, Math.min(12, Math.round((raw as BuildingSize).y)))
    return { x, y }
  }

  setBuildingPosition(rootPath: string, position: BuildingPosition) {
    this.settings.buildingPositions[rootPath] = {
      x: Math.round(position.x),
      y: Math.round(position.y),
    }
    this.queueSaveSettings()
  }

  setBuildingRotation(rootPath: string, rotation: number) {
    const normalized = ((Math.round(rotation) % 4) + 4) % 4
    this.settings.buildingRotations[rootPath] = normalized
    this.queueSaveSettings()
  }

  setBuildingSize(rootPath: string, size: BuildingSize) {
    this.settings.buildingSizes[rootPath] = {
      x: Math.max(2, Math.min(12, Math.round(size.x))),
      y: Math.max(2, Math.min(12, Math.round(size.y))),
    }
    this.queueSaveSettings()
  }

  private queueSaveSettings() {
    if (this.saveTimer)
      window.clearTimeout(this.saveTimer)
    this.saveTimer = window.setTimeout(() => {
      this.saveTimer = null
      this.plugin.setObsiaSettings(this.getSettings())
      void this.plugin.saveSettings()
    }, 220)
  }

  private decorateBuildRibbonButton(button: HTMLElement) {
    const iconWrap = button.querySelector<HTMLElement>('.svg-icon')
    if (iconWrap) {
      iconWrap.empty()
      setIcon(iconWrap, 'blocks')
    }
    button.setAttribute('aria-label', 'Open Build View')
  }

  private hideGraphRibbonButtons() {
    const candidates = Array.from(document.querySelectorAll<HTMLElement>('.workspace-ribbon .clickable-icon'))
    for (const candidate of candidates) {
      const label = normalize(candidate.getAttribute('aria-label') ?? '')
      if (!label)
        continue
      if (label.includes('graph view') || label.includes('vista de grafo') || label.includes('graph') || label.includes('grafo'))
        candidate.addClass('obsia-hidden-graph-button')
    }
  }

  private observeRibbonForGraphButtons() {
    const ribbon = document.querySelector<HTMLElement>('.workspace-ribbon')
    if (!ribbon)
      return
    this.ribbonObserver = new MutationObserver(() => this.hideGraphRibbonButtons())
    this.ribbonObserver.observe(ribbon, { childList: true, subtree: true, attributes: true })
    this.plugin.register(() => this.ribbonObserver?.disconnect())
  }

  private refreshBuildViews() {
    const leaves = this.plugin.app.workspace.getLeavesOfType(OBSIA_VIEW_TYPE)
    for (const leaf of leaves) {
      const view = leaf.view
      if (view instanceof ObsiaBuildView)
        void view.refresh()
    }
  }

  private getResolvedOutlinks(fileByPath: Map<string, TFile>): Map<string, Set<string>> {
    const outlinks = new Map<string, Set<string>>()
    const resolved = (this.plugin.app.metadataCache.resolvedLinks ?? {}) as Record<string, Record<string, number>>

    for (const [fromPath, targets] of Object.entries(resolved)) {
      if (!fileByPath.has(fromPath))
        continue
      const targetSet = new Set<string>()
      for (const targetPath of Object.keys(targets)) {
        if (fileByPath.has(targetPath))
          targetSet.add(targetPath)
      }
      outlinks.set(fromPath, targetSet)
    }

    for (const path of fileByPath.keys()) {
      if (!outlinks.has(path))
        outlinks.set(path, new Set<string>())
    }

    return outlinks
  }

  private invalidateCache(file: TAbstractFile, oldPath?: string) {
    if (oldPath)
      this.searchCache.delete(oldPath)
    if (file instanceof TFile)
      this.searchCache.delete(file.path)
  }

  private async getSearchEntry(file: TFile): Promise<CachedSearchEntry | null> {
    const existing = this.searchCache.get(file.path)
    if (existing && existing.mtime === file.stat.mtime)
      return existing

    try {
      let contentLower = ''
      const meta = this.plugin.app.metadataCache.getFileCache(file) as CachedMetadata | null
      const extension = file.extension.toLowerCase()
      const isMarkdown = extension === 'md'
      const isTextLike = extension === 'txt' || extension === 'canvas'
      if (isMarkdown || isTextLike || meta) {
        const content = await this.plugin.app.vault.cachedRead(file)
        contentLower = normalize(content)
      }

      const entry: CachedSearchEntry = {
        mtime: file.stat.mtime,
        basenameLower: normalize(file.basename),
        contentLower,
      }
      this.searchCache.set(file.path, entry)
      return entry
    }
    catch {
      return null
    }
  }
}
