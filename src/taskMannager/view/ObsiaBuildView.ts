import type { WorkspaceLeaf } from 'obsidian'

import { ItemView, TFile, setIcon } from 'obsidian'

import { OBSIA_VIEW_TYPE } from '../constants'
import type { ObsiaViewApi } from '../types'
const ISO_COS = 0.8660254038
const ISO_SIN = 0.5
const ISO_GRID_BASE = 18
const ISO_BUILDING_GRID_UNITS = 2
const ISO_GRID_STEP = ISO_GRID_BASE * ISO_BUILDING_GRID_UNITS
const FLOOR_BASE_VERTEX_X = 90
const FLOOR_BASE_VERTEX_Y = 76
const FLOOR_SVG_OFFSET_Y = -18
const FLOOR_STACK_STEP = 44
const FLOOR_ISO_UX = 26
const FLOOR_ISO_UY = 15

type BuildingFloor = {
  path: string | null
  name: string
  kind: 'file' | 'command'
  isRoot: boolean
}

type Building = {
  id: string
  rootPath: string
  rootName: string
  floors: BuildingFloor[]
}

type BuildEdge = {
  fromPath: string
  toPath: string
}

type BuildingPosition = {
  x: number
  y: number
}

type BuildingSize = {
  x: number
  y: number
}

type CommandTower = {
  floors: BuildingFloor[]
  depthCenterUnits: number
  size: BuildingSize
}

type CommandComposition = {
  commandFloor: BuildingFloor
  minSize: BuildingSize
  rows: BuildingFloor[][]
  rowDepths: number[]
  size: BuildingSize
  towers: CommandTower[]
}

function normalize(text: string): string {
  return text.trim().toLowerCase()
}

function sortByNameAsc(items: TFile[]): TFile[] {
  return [...items].sort((a, b) => a.basename.localeCompare(b.basename, undefined, { sensitivity: 'base' }))
}

export class ObsiaBuildView extends ItemView {
  private static readonly MAX_FLOORS_PER_ROW = 8
  private static readonly MIN_ROW_DEPTH_UNITS = 2
  private static readonly MAX_BUILDING_WIDTH_UNITS = 12
  private static readonly MAX_BUILDING_DEPTH_UNITS = 96
  private static readonly BASE_TO_ROWS_GAP_PX = FLOOR_STACK_STEP

  private plugin: ObsiaViewApi
  private sceneEl!: HTMLElement
  private worldEl!: HTMLElement
  private gridSvgEl!: SVGSVGElement
  private linksSvgEl!: SVGSVGElement
  private footprintSvgEl!: SVGSVGElement
  private footprintPathEl!: SVGPathElement
  private searchInputEl!: HTMLInputElement
  private searchStatusEl!: HTMLElement
  private searchResultsEl!: HTMLElement
  private floorByPath = new Map<string, HTMLElement>()
  private buildingByRoot = new Map<string, Building>()
  private buildingElByRoot = new Map<string, HTMLElement>()
  private buildingPosByRoot = new Map<string, BuildingPosition>()
  private buildingRotationByRoot = new Map<string, number>()
  private buildingSizeByRoot = new Map<string, BuildingSize>()
  private resizeObserver: ResizeObserver | null = null
  private appliedQuery = ''
  private disposed = false
  private activeEdges: BuildEdge[] = []
  private projectionShiftX = 0
  private projectionShiftY = 0
  private hasProjectionShift = false
  private cameraOffsetX = 0
  private cameraOffsetY = 0
  private cameraZoom = 1
  private dragging: {
    rootPath: string
    startClientX: number
    startClientY: number
    startX: number
    startY: number
  } | null = null
  private resizing: {
    rootPath: string
    fixedWorldX: number
    fixedWorldY: number
  } | null = null
  private panning: {
    startClientX: number
    startClientY: number
    startCameraX: number
    startCameraY: number
  } | null = null
  private activeControlRootPath: string | null = null
  private hoveredCommandFloorEl: HTMLElement | null = null

  private normalizeRotation(rotation: number): 0 | 1 {
    const normalized = ((Math.round(rotation) % 4) + 4) % 4
    return (normalized === 1 || normalized === 3) ? 1 : 0
  }

  constructor(leaf: WorkspaceLeaf, plugin: ObsiaViewApi) {
    super(leaf)
    this.plugin = plugin
  }

  getViewType() {
    return OBSIA_VIEW_TYPE
  }

  getDisplayText() {
    return 'Build View'
  }

  getIcon() {
    return 'blocks'
  }

  async onOpen() {
    this.disposed = false
    const root = this.containerEl.children[1] as HTMLElement
    root.empty()
    root.addClass('obsia-build-root')

    const scene = root.createDiv({ cls: 'obsia-build-scene' })
    this.sceneEl = scene

    const world = scene.createDiv({ cls: 'obsia-build-world' })
    this.worldEl = world

    this.gridSvgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    this.gridSvgEl.classList.add('obsia-build-grid-overlay')
    world.appendChild(this.gridSvgEl)

    this.linksSvgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    this.linksSvgEl.classList.add('obsia-build-links')
    world.appendChild(this.linksSvgEl)

    this.footprintSvgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    this.footprintSvgEl.classList.add('obsia-build-footprints')
    this.footprintPathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    this.footprintPathEl.classList.add('obsia-build-footprint')
    this.footprintSvgEl.appendChild(this.footprintPathEl)
    world.appendChild(this.footprintSvgEl)

    const searchWrap = scene.createDiv({ cls: 'obsia-build-search-wrap' })
    this.searchResultsEl = searchWrap.createDiv({ cls: 'obsia-build-search-results' })
    const searchBar = searchWrap.createDiv({ cls: 'obsia-build-search-bar' })
    this.searchInputEl = searchBar.createEl('input', {
      cls: 'obsia-build-search-input',
      attr: {
        type: 'search',
        placeholder: 'Buscar en nombre y contenido...',
      },
    })
    this.searchStatusEl = searchBar.createDiv({ cls: 'obsia-build-search-status', text: 'Sin filtro' })

    this.searchInputEl.addEventListener('keydown', this.onSearchKeydown)
    this.sceneEl.addEventListener('pointerdown', this.onScenePointerDown, true)
    this.sceneEl.addEventListener('pointerdown', this.onScenePanPointerDown)
    this.sceneEl.addEventListener('pointermove', this.onScenePointerMove, true)
    this.sceneEl.addEventListener('pointerleave', this.onScenePointerLeave)
    this.sceneEl.addEventListener('dblclick', this.onSceneDoubleClick, true)
    this.sceneEl.addEventListener('wheel', this.onSceneWheel)

    this.resizeObserver = new ResizeObserver(() => this.redrawConnections())
    this.resizeObserver.observe(this.sceneEl)

    await this.render()
  }

  async onClose() {
    this.disposed = true
    this.searchInputEl?.removeEventListener('keydown', this.onSearchKeydown)
    this.sceneEl?.removeEventListener('pointerdown', this.onScenePointerDown, true)
    this.sceneEl?.removeEventListener('pointerdown', this.onScenePanPointerDown)
    this.sceneEl?.removeEventListener('pointermove', this.onScenePointerMove, true)
    this.sceneEl?.removeEventListener('pointerleave', this.onScenePointerLeave)
    this.sceneEl?.removeEventListener('dblclick', this.onSceneDoubleClick, true)
    this.sceneEl?.removeEventListener('wheel', this.onSceneWheel)
    window.removeEventListener('pointermove', this.onWindowPointerMove)
    window.removeEventListener('pointerup', this.onWindowPointerUp)
    this.resizeObserver?.disconnect()
    this.resizeObserver = null
    this.floorByPath.clear()
    this.buildingElByRoot.clear()
    this.buildingPosByRoot.clear()
    this.buildingRotationByRoot.clear()
    this.buildingSizeByRoot.clear()
    this.hasProjectionShift = false
    this.activeEdges = []
    this.dragging = null
    this.resizing = null
    this.panning = null
    this.sceneEl?.classList.remove('is-panning-camera')
    this.activeControlRootPath = null
    this.setHoveredCommandFloor(null)
  }

  async refresh() {
    if (this.disposed)
      return
    await this.render()
  }

  private onSearchKeydown = (event: KeyboardEvent) => {
    if (event.key !== 'Enter')
      return
    event.preventDefault()
    void this.applySearch(this.searchInputEl.value)
  }

  private onScenePointerDown = (event: PointerEvent) => {
    if (this.resizing)
      return

    if (!this.activeControlRootPath)
      return

    const target = event.target as HTMLElement | null
    if (!target)
      return

    const activeBuilding = this.buildingElByRoot.get(this.activeControlRootPath)
    if (!activeBuilding) {
      this.closeActiveControls()
      return
    }

    const inCommandHandle = !!target.closest('.is-command-handle')
    const inControls = !!target.closest('.obsia-building-controls')
    const inResizeHandle = !!target.closest('.obsia-anchor-marker')
    const insideActiveBuilding = activeBuilding.contains(target)

    if (insideActiveBuilding && (inCommandHandle || inControls || inResizeHandle))
      return

    this.closeActiveControls()
  }

  private onScenePanPointerDown = (event: PointerEvent) => {
    if (event.button !== 0)
      return
    if (this.dragging || this.resizing)
      return

    const target = event.target as HTMLElement | null
    if (!target)
      return
    if (target.closest('.obsia-building') || target.closest('.obsia-build-search-wrap'))
      return

    this.panning = {
      startClientX: event.clientX,
      startClientY: event.clientY,
      startCameraX: this.cameraOffsetX,
      startCameraY: this.cameraOffsetY,
    }
    this.sceneEl.classList.add('is-panning-camera')
    window.addEventListener('pointermove', this.onWindowPointerMove)
    window.addEventListener('pointerup', this.onWindowPointerUp)
  }

  private onScenePointerMove = (event: PointerEvent) => {
    const commandFloor = this.findCommandFloorAtPoint(event.clientX, event.clientY)
    this.setHoveredCommandFloor(commandFloor)
  }

  private onScenePointerLeave = () => {
    this.setHoveredCommandFloor(null)
  }

  private onSceneDoubleClick = (event: MouseEvent) => {
    const commandFloor = this.findCommandFloorAtPoint(event.clientX, event.clientY)
    if (!commandFloor)
      return

    const buildingEl = commandFloor.closest<HTMLElement>('.obsia-building')
    const rootPath = buildingEl?.getAttribute('data-root-path')
    if (!rootPath)
      return

    event.preventDefault()
    event.stopPropagation()
    this.toggleBuildingControls(rootPath)
  }

  private onSceneWheel = (event: WheelEvent) => {
    event.preventDefault()
    const factor = Math.exp(-event.deltaY * 0.0015)
    const next = this.clampZoom(this.cameraZoom * factor)
    if (next === this.cameraZoom)
      return
    this.cameraZoom = next
    this.updateWorldCameraTransform()
    this.redrawConnections(this.activeEdges)
  }

  private clampZoom(zoom: number): number {
    return Math.max(0.45, Math.min(2.6, zoom))
  }

  private updateWorldCameraTransform() {
    this.worldEl.style.transform = `scale(${this.cameraZoom})`
    this.worldEl.style.transformOrigin = '0 0'
  }

  private clientToWorldLocal(clientX: number, clientY: number): { x: number, y: number } {
    const sceneRect = this.sceneEl.getBoundingClientRect()
    return {
      x: (clientX - sceneRect.left) / this.cameraZoom,
      y: (clientY - sceneRect.top) / this.cameraZoom,
    }
  }

  private async render() {
    const model = this.plugin.buildModel()
    this.activeEdges = model.edges

    this.worldEl.empty()
    this.worldEl.appendChild(this.gridSvgEl)
    this.worldEl.appendChild(this.linksSvgEl)
    this.worldEl.appendChild(this.footprintSvgEl)
    this.floorByPath.clear()
    this.buildingByRoot.clear()
    this.buildingElByRoot.clear()
    this.buildingPosByRoot.clear()
    this.buildingRotationByRoot.clear()
    this.buildingSizeByRoot.clear()

    for (const [idx, building] of model.buildings.entries()) {
      const rawPosition = this.plugin.getBuildingPosition(building.rootPath) ?? this.getDefaultPosition(idx)
      const position = this.snapWorld(rawPosition)
      const rotation = this.normalizeRotation(this.plugin.getBuildingRotation(building.rootPath))
      const originalSize = this.plugin.getBuildingSize(building.rootPath)
      const size = this.clampBuildingSize(originalSize, building.rootPath, building)
      this.buildingByRoot.set(building.rootPath, building)
      this.buildingPosByRoot.set(building.rootPath, position)
      this.buildingRotationByRoot.set(building.rootPath, rotation)
      this.buildingSizeByRoot.set(building.rootPath, size)
      this.plugin.setBuildingRotation(building.rootPath, rotation)
      if (size.x !== originalSize.x || size.y !== originalSize.y)
        this.plugin.setBuildingSize(building.rootPath, size)
      this.renderBuilding(building)
    }
    this.layoutBuildings(true)
    this.updateWorldCameraTransform()

    this.redrawConnections(model.edges)

    if (this.appliedQuery)
      await this.applySearch(this.appliedQuery)
    else
      this.clearSearchVisuals()
  }

  private getDefaultPosition(index: number): BuildingPosition {
    const cols = 5
    const col = index % cols
    const row = Math.floor(index / cols)
    return {
      x: col * ISO_GRID_STEP * 4,
      y: row * ISO_GRID_STEP * 4,
    }
  }

  private renderBuilding(building: Building) {
    const buildingEl = this.worldEl.createDiv({ cls: 'obsia-building' })
    buildingEl.setAttribute('data-root-path', building.rootPath)
    this.buildingElByRoot.set(building.rootPath, buildingEl)
    this.applyBuildingRotationClass(buildingEl, this.buildingRotationByRoot.get(building.rootPath) ?? 0)
    this.applyBuildingSizeVars(building.rootPath, buildingEl)
    const anchorMarker = buildingEl.createDiv({ cls: 'obsia-anchor-marker' })
    anchorMarker.addEventListener('pointerdown', (event) => {
      event.preventDefault()
      event.stopPropagation()
      this.onResizePointerDown(event, building.rootPath)
    })

    buildingEl.createDiv({
      cls: 'obsia-building-title',
      text: building.rootName,
    })

    const stacksWrap = buildingEl.createDiv({ cls: 'obsia-building-stacks' })
    const controls = buildingEl.createDiv({ cls: 'obsia-building-controls' })
    const moveButton = controls.createEl('button', {
      cls: 'obsia-building-control is-move',
      attr: { type: 'button', 'aria-label': 'Move building' },
    })
    setIcon(moveButton, 'move')
    moveButton.addEventListener('pointerdown', (event) => {
      event.preventDefault()
      event.stopPropagation()
      this.onBasePointerDown(event, building.rootPath)
    })

    const rotateButton = controls.createEl('button', {
      cls: 'obsia-building-control is-rotate',
      attr: { type: 'button', 'aria-label': 'Rotate building' },
    })
    setIcon(rotateButton, 'rotate-cw')
    rotateButton.addEventListener('click', (event) => {
      event.preventDefault()
      event.stopPropagation()
      this.rotateBuilding(building.rootPath)
    })

    this.renderBuildingStacks(building, stacksWrap)
  }

  private renderBuildingStacks(building: Building, rootEl: HTMLElement) {
    rootEl.empty()
    this.clearFloorIndexForBuilding(building)

    const composition = this.buildCommandComposition(building, this.getBuildingSize(building.rootPath))

    const baseStack = rootEl.createDiv({ cls: 'obsia-building-stack obsia-building-base-stack' })
    this.renderFloor(building, baseStack, composition.commandFloor, composition.size)

    const rowsWrap = rootEl.createDiv({ cls: 'obsia-building-rows' })
    rowsWrap.style.setProperty('--obsia-row-gap', `${ObsiaBuildView.BASE_TO_ROWS_GAP_PX}px`)
    const baseTopCenter = this.getBaseTopCenter(baseStack)
    const depthAxis = this.getDepthAxisForRotation(building.rootPath)
    for (const tower of composition.towers) {
      const stack = rowsWrap.createDiv({ cls: 'obsia-building-stack obsia-building-row-stack' })
      const localOffset = {
        x: depthAxis.x * tower.depthCenterUnits,
        y: depthAxis.y * tower.depthCenterUnits,
      }
      for (const floor of tower.floors)
        this.renderFloor(building, stack, floor, tower.size)

      this.positionRowStackFromBaseTop(stack, baseTopCenter, localOffset)
    }

    const buildingEl = rootEl.closest<HTMLElement>('.obsia-building')
    if (buildingEl)
      this.updateBuildingTitlePosition(buildingEl)
  }

  private buildCommandComposition(building: Building, requestedSize: BuildingSize): CommandComposition {
    const commandFloor = building.floors.find(floor => floor.kind === 'command') ?? {
      path: null,
      name: 'Comandos',
      kind: 'command' as const,
      isRoot: false,
    }
    const fileFloors = building.floors.filter(floor => floor.kind === 'file')
    const rows = this.chunkFloors(fileFloors, ObsiaBuildView.MAX_FLOORS_PER_ROW)
    const rowsCount = Math.max(1, rows.length)
    const minSize: BuildingSize = {
      x: 2,
      y: Math.max(2, rowsCount * ObsiaBuildView.MIN_ROW_DEPTH_UNITS),
    }
    const size: BuildingSize = {
      x: Math.max(minSize.x, Math.round(requestedSize.x)),
      y: Math.max(minSize.y, Math.round(requestedSize.y)),
    }

    const rowDepths = this.splitDepthAcrossRows(size.y, rowsCount)
    let cursor = -size.y / 2
    const towers: CommandTower[] = rows.map((floors, rowIndex) => {
      const rowDepth = rowDepths[rowIndex] ?? ObsiaBuildView.MIN_ROW_DEPTH_UNITS
      const depthCenterUnits = cursor + (rowDepth / 2)
      cursor += rowDepth
      return {
        floors,
        depthCenterUnits,
        size: {
          x: size.x,
          y: rowDepth,
        },
      }
    })

    return {
      commandFloor,
      minSize,
      rows,
      rowDepths,
      size,
      towers,
    }
  }

  private chunkFloors(floors: BuildingFloor[], chunkSize: number): BuildingFloor[][] {
    if (!floors.length)
      return []

    const chunks: BuildingFloor[][] = []
    for (let i = 0; i < floors.length; i += chunkSize)
      chunks.push(floors.slice(i, i + chunkSize))
    return chunks
  }

  private renderFloor(building: Building, stackEl: HTMLElement, floor: BuildingFloor, size: BuildingSize) {
    const metrics = this.getFloorMetrics(this.getRenderSize(building.rootPath, size))
    const isDefaultCommandBlock = floor.kind === 'command' && floor.name.trim().toLowerCase() === 'comandos'
    const floorEl = stackEl.createDiv({
      cls: `obsia-floor ${floor.isRoot ? 'is-root' : ''} ${floor.kind === 'command' ? 'is-command' : ''} ${isDefaultCommandBlock ? 'is-default-command-block' : ''}`,
    })
    floorEl.style.setProperty('--obsia-floor-w', `${metrics.width}px`)
    floorEl.style.setProperty('--obsia-floor-h', `${metrics.height}px`)
    if (floor.path)
      floorEl.setAttribute('data-path', floor.path)
    floorEl.setAttribute('data-name', floor.name)
    floorEl.title = floor.path ?? `${building.rootName} - comandos`
    const floorSvg = this.createFloorSvg(metrics, floor.name)
    floorEl.appendChild(floorSvg)

    if (floor.kind === 'file' && floor.path)
      this.floorByPath.set(floor.path, floorEl)

    if (floor.kind === 'command') {
      floorEl.addClass('is-command-handle')
      return
    }

    if (floor.path) {
      const filePath = floor.path
      const interactiveParts = Array.from(
        floorSvg.querySelectorAll<SVGElement>('.obsia-floor-face, .obsia-floor-label'),
      )
      let hoverDepth = 0

      const onPartEnter = () => {
        hoverDepth += 1
        floorEl.addClass('is-file-hover')
      }

      const onPartLeave = () => {
        hoverDepth = Math.max(hoverDepth - 1, 0)
        if (!hoverDepth)
          floorEl.removeClass('is-file-hover')
      }

      for (const part of interactiveParts) {
        part.addEventListener('pointerenter', onPartEnter)
        part.addEventListener('pointerleave', onPartLeave)
        part.addEventListener('click', () => this.plugin.openFileByPath(filePath))
      }
    }
  }

  private clearFloorIndexForBuilding(building: Building) {
    for (const floor of building.floors) {
      if (floor.kind === 'file' && floor.path)
        this.floorByPath.delete(floor.path)
    }
  }

  private updateBuildingTitlePosition(buildingEl: HTMLElement) {
    const baseFloorEl = buildingEl.querySelector<HTMLElement>('.obsia-building-base-stack .obsia-floor')
      ?? buildingEl.querySelector<HTMLElement>('.obsia-floor')
    if (!baseFloorEl)
      return

    const buildingRect = buildingEl.getBoundingClientRect()
    const baseRect = baseFloorEl.getBoundingClientRect()
    const baseTop = baseRect.top - buildingRect.top

    let maxTowerLevels = 0
    const rowStacks = Array.from(buildingEl.querySelectorAll<HTMLElement>('.obsia-building-row-stack'))
    for (const stackEl of rowStacks) {
      const levels = stackEl.querySelectorAll('.obsia-floor').length
      if (levels > maxTowerLevels)
        maxTowerLevels = levels
    }

    const highestFloorTop = maxTowerLevels > 0
      ? baseTop - (FLOOR_STACK_STEP * maxTowerLevels)
      : baseTop

    // Keep title elevation tied to floor stack levels, not floor footprint size.
    const top = Math.round(highestFloorTop - Math.max(8, FLOOR_STACK_STEP * 0.22))
    buildingEl.style.setProperty('--obsia-title-top', `${top}px`)
  }

  private setHoveredCommandFloor(floorEl: HTMLElement | null) {
    if (this.hoveredCommandFloorEl === floorEl)
      return

    this.hoveredCommandFloorEl?.classList.remove('is-command-hover-exact')
    this.hoveredCommandFloorEl = floorEl
    this.hoveredCommandFloorEl?.classList.add('is-command-hover-exact')
  }

  private findCommandFloorAtPoint(clientX: number, clientY: number): HTMLElement | null {
    const layeredElements = typeof document.elementsFromPoint === 'function'
      ? document.elementsFromPoint(clientX, clientY)
      : [document.elementFromPoint(clientX, clientY)].filter((element): element is Element => !!element)

    for (const element of layeredElements) {
      if (!(element instanceof SVGPathElement))
        continue
      if (!element.classList.contains('obsia-floor-face'))
        continue

      const commandFloor = element.closest<HTMLElement>('.obsia-floor.is-command')
      if (!commandFloor)
        continue
      if (!this.isPointInsideFace(element, clientX, clientY))
        continue
      return commandFloor
    }
    return null
  }

  private isPointInsideFace(faceEl: SVGPathElement, clientX: number, clientY: number): boolean {
    const screenCtm = faceEl.getScreenCTM()
    if (!screenCtm)
      return false
    const localPoint = new DOMPoint(clientX, clientY).matrixTransform(screenCtm.inverse())
    return typeof faceEl.isPointInFill === 'function'
      ? faceEl.isPointInFill(localPoint)
      : true
  }

  private toggleBuildingControls(rootPath: string) {
    if (this.activeControlRootPath === rootPath) {
      this.activeControlRootPath = null
    }
    else {
      this.activeControlRootPath = rootPath
    }

    this.syncActiveBuildingState()
  }

  private closeActiveControls() {
    this.activeControlRootPath = null
    this.syncActiveBuildingState()
  }

  private syncActiveBuildingState() {
    const hasActive = !!this.activeControlRootPath
    this.worldEl.classList.toggle('has-active-building', hasActive)
    for (const [path, buildingEl] of this.buildingElByRoot.entries()) {
      const isActive = path === this.activeControlRootPath
      buildingEl.classList.toggle('show-controls', isActive)
      buildingEl.classList.toggle('is-active-building', isActive)
    }

    // Recompute z-order immediately when selecting/deselecting.
    this.layoutBuildings(false)
    this.redrawConnections(this.activeEdges)
  }

  private createFloorSvg(metrics: ReturnType<ObsiaBuildView['getFloorMetrics']>, label: string): SVGSVGElement {
    const svgOffsetY = Math.round(metrics.height * -0.23)

    const ns = 'http://www.w3.org/2000/svg'
    const svg = document.createElementNS(ns, 'svg')
    svg.setAttribute('viewBox', `0 0 ${metrics.width} ${metrics.height}`)
    svg.setAttribute('class', 'obsia-floor-svg')
    svg.setAttribute('aria-hidden', 'true')

    const top = document.createElementNS(ns, 'path')
    top.setAttribute('d', this.pathFromPoints(metrics.top))
    top.setAttribute('class', 'obsia-floor-face obsia-face-top')
    svg.appendChild(top)

    const left = document.createElementNS(ns, 'path')
    left.setAttribute('d', this.pathFromPoints(metrics.left))
    left.setAttribute('class', 'obsia-floor-face obsia-face-left')
    svg.appendChild(left)

    const right = document.createElementNS(ns, 'path')
    right.setAttribute('d', this.pathFromPoints(metrics.right))
    right.setAttribute('class', 'obsia-floor-face obsia-face-right')
    svg.appendChild(right)

    const labelText = this.compactLabel(label)

    const textRight = document.createElementNS(ns, 'text')
    textRight.setAttribute('x', String(metrics.textRight.x))
    textRight.setAttribute('y', String(metrics.textRight.y))
    textRight.setAttribute('class', 'obsia-floor-label face-right')
    textRight.setAttribute('text-anchor', 'middle')
    textRight.setAttribute('transform', `rotate(-30 ${metrics.textRight.x} ${metrics.textRight.y})`)
    textRight.textContent = labelText
    svg.appendChild(textRight)

    const textLeft = document.createElementNS(ns, 'text')
    textLeft.setAttribute('x', String(metrics.textLeft.x))
    textLeft.setAttribute('y', String(metrics.textLeft.y))
    textLeft.setAttribute('class', 'obsia-floor-label face-left')
    textLeft.setAttribute('text-anchor', 'middle')
    textLeft.setAttribute('transform', `rotate(30 ${metrics.textLeft.x} ${metrics.textLeft.y})`)
    textLeft.textContent = labelText
    svg.appendChild(textLeft)

    const textTop = document.createElementNS(ns, 'text')
    textTop.setAttribute('x', String(metrics.textTop.x))
    textTop.setAttribute('y', String(metrics.textTop.y))
    textTop.setAttribute('class', 'obsia-floor-label face-top')
    textTop.setAttribute('text-anchor', 'middle')
    textTop.setAttribute('transform', `rotate(0 ${metrics.textTop.x} ${metrics.textTop.y})`)
    textTop.textContent = labelText
    svg.appendChild(textTop)

    svg.setAttribute('data-anchor-x', String(metrics.anchor.x))
    svg.setAttribute('data-anchor-y', String(metrics.anchor.y))
    svg.setAttribute('data-top-center-x', String(metrics.textTop.x))
    svg.setAttribute('data-top-center-y', String(metrics.textTop.y))
    svg.setAttribute('data-svg-offset-y', String(svgOffsetY))
    svg.style.width = `${metrics.width}px`
    svg.style.height = `${metrics.height}px`
    svg.style.transform = `translateY(${svgOffsetY}px)`
    return svg
  }

  private getBaseTopCenter(baseStack: HTMLElement): BuildingPosition {
    const baseFloor = baseStack.querySelector<HTMLElement>('.obsia-floor')
    if (!baseFloor)
      return { x: FLOOR_BASE_VERTEX_X, y: FLOOR_BASE_VERTEX_Y + FLOOR_SVG_OFFSET_Y }

    const baseSvg = baseFloor.querySelector<SVGSVGElement>('.obsia-floor-svg')
    const topCenterX = Number(baseSvg?.getAttribute('data-top-center-x') ?? '')
    const topCenterY = Number(baseSvg?.getAttribute('data-top-center-y') ?? '')
    const svgOffsetY = Number(baseSvg?.getAttribute('data-svg-offset-y') ?? '')

    const anchorX = Number.isFinite(topCenterX) ? topCenterX : FLOOR_BASE_VERTEX_X
    const anchorY = (Number.isFinite(topCenterY) ? topCenterY : FLOOR_BASE_VERTEX_Y)
      + (Number.isFinite(svgOffsetY) ? svgOffsetY : FLOOR_SVG_OFFSET_Y)

    return {
      x: baseFloor.offsetLeft + anchorX,
      y: baseFloor.offsetTop + anchorY,
    }
  }

  private positionRowStackFromBaseTop(
    stackEl: HTMLElement,
    baseTopCenter: BuildingPosition,
    localOffset: BuildingPosition,
  ) {
    const bottomFloor = stackEl.firstElementChild as HTMLElement | null
    if (!bottomFloor) {
      stackEl.style.left = `${baseTopCenter.x + localOffset.x}px`
      stackEl.style.top = `${baseTopCenter.y + localOffset.y - FLOOR_STACK_STEP}px`
      return
    }

    const floorTopCenterLocal = this.getFloorTopCenterLocal(bottomFloor)
    const desiredTopCenter = {
      x: baseTopCenter.x + localOffset.x,
      y: baseTopCenter.y + localOffset.y - FLOOR_STACK_STEP,
    }

    stackEl.style.left = `${desiredTopCenter.x - floorTopCenterLocal.x}px`
    stackEl.style.top = `${desiredTopCenter.y - floorTopCenterLocal.y}px`
  }

  private getFloorTopCenterLocal(floorEl: HTMLElement): BuildingPosition {
    const svgEl = floorEl.querySelector<SVGSVGElement>('.obsia-floor-svg')
    const topCenterX = Number(svgEl?.getAttribute('data-top-center-x') ?? '')
    const topCenterY = Number(svgEl?.getAttribute('data-top-center-y') ?? '')
    const svgOffsetY = Number(svgEl?.getAttribute('data-svg-offset-y') ?? '')

    const localX = Number.isFinite(topCenterX) ? topCenterX : (floorEl.offsetWidth / 2)
    const localY = (Number.isFinite(topCenterY) ? topCenterY : 0)
      + (Number.isFinite(svgOffsetY) ? svgOffsetY : FLOOR_SVG_OFFSET_Y)

    return {
      x: floorEl.offsetLeft + localX,
      y: floorEl.offsetTop + localY,
    }
  }

  private compactLabel(input: string): string {
    const max = 20
    if (input.length <= max)
      return input
    return `${input.slice(0, max - 1)}…`
  }

  private pathFromPoints(points: Array<{ x: number, y: number }>): string {
    return `M ${points.map(point => `${point.x} ${point.y}`).join(' L ')} Z`
  }

  private getFloorMetrics(size: BuildingSize) {
    const ux = FLOOR_ISO_UX
    const uy = FLOOR_ISO_UY
    const extrude = 32
    const padding = 2

    const back = { x: 0, y: 0 }
    const right = { x: ux * size.x, y: uy * size.x }
    const left = { x: -ux * size.y, y: uy * size.y }
    const front = { x: right.x + left.x, y: right.y + left.y }
    const down = { x: 0, y: extrude }

    const topFace = [back, right, front, left]
    const leftFace = [left, front, { x: front.x + down.x, y: front.y + down.y }, { x: left.x + down.x, y: left.y + down.y }]
    const rightFace = [right, front, { x: front.x + down.x, y: front.y + down.y }, { x: right.x + down.x, y: right.y + down.y }]

    const all = [...topFace, ...leftFace, ...rightFace]
    const minX = Math.min(...all.map(point => point.x))
    const maxX = Math.max(...all.map(point => point.x))
    const minY = Math.min(...all.map(point => point.y))
    const maxY = Math.max(...all.map(point => point.y))
    const shiftX = padding - minX
    const shiftY = padding - minY
    const shiftPoint = (point: { x: number, y: number }) => ({ x: point.x + shiftX, y: point.y + shiftY })

    const shiftedFrontBottom = shiftPoint({ x: front.x + down.x, y: front.y + down.y })
    const center = (points: Array<{ x: number, y: number }>) => {
      const sum = points.reduce((acc, point) => ({
        x: acc.x + point.x,
        y: acc.y + point.y,
      }), { x: 0, y: 0 })
      return {
        x: sum.x / points.length,
        y: sum.y / points.length,
      }
    }
    const topCenter = center(topFace.map(shiftPoint))
    const leftCenter = center(leftFace.map(shiftPoint))
    const rightCenter = center(rightFace.map(shiftPoint))

    return {
      width: Math.ceil((maxX - minX) + (padding * 2)),
      height: Math.ceil((maxY - minY) + (padding * 2)),
      top: topFace.map(shiftPoint),
      left: leftFace.map(shiftPoint),
      right: rightFace.map(shiftPoint),
      anchor: shiftedFrontBottom,
      textRight: {
        x: rightCenter.x,
        y: rightCenter.y + 1,
      },
      textLeft: {
        x: leftCenter.x,
        y: leftCenter.y + 1,
      },
      textTop: {
        x: topCenter.x,
        y: topCenter.y - 2,
      },
    }
  }

  private layoutBuildings(recomputeShift: boolean = false) {
    const placements: Array<{
      rootPath: string
      x: number
      y: number
      w: number
      h: number
      anchorX: number
      anchorY: number
      depth: number
    }> = []

    for (const [rootPath, buildingEl] of this.buildingElByRoot.entries()) {
      const worldPos = this.buildingPosByRoot.get(rootPath)
      if (!worldPos)
        continue
      const projected = this.project(worldPos)
      const anchor = this.getBuildingAnchor(rootPath, buildingEl)
      placements.push({
        rootPath,
        x: projected.x,
        y: projected.y,
        w: buildingEl.offsetWidth || 180,
        h: buildingEl.offsetHeight || 240,
        anchorX: anchor.x,
        anchorY: anchor.y,
        // Right and lower buildings should render above left/upper ones.
        depth: (projected.y * 1000) + projected.x,
      })
    }
    if (!placements.length)
      return

    if (recomputeShift || !this.hasProjectionShift) {
      const minX = Math.min(...placements.map(p => p.x))
      const minY = Math.min(...placements.map(p => p.y))
      this.projectionShiftX = 90 - minX
      this.projectionShiftY = 90 - minY
      this.hasProjectionShift = true
    }
    const shiftX = this.projectionShiftX
    const shiftY = this.projectionShiftY

    const byDepth = [...placements].sort((a, b) => a.depth - b.depth)
    const zByRoot = new Map<string, number>()
    for (const [idx, placement] of byDepth.entries())
      zByRoot.set(placement.rootPath, 20 + idx)

    for (const placement of placements) {
      const buildingEl = this.buildingElByRoot.get(placement.rootPath)
      if (!buildingEl)
        continue
      const left = placement.x + shiftX - placement.anchorX
      const top = placement.y + shiftY - placement.anchorY
      buildingEl.style.left = `${left}px`
      buildingEl.style.top = `${top}px`
      buildingEl.style.transform = `translate(${this.cameraOffsetX}px, ${this.cameraOffsetY}px)`
      const isActive = placement.rootPath === this.activeControlRootPath
      buildingEl.style.zIndex = String(isActive ? 9999 : (zByRoot.get(placement.rootPath) ?? 20))
      buildingEl.style.setProperty('--obsia-anchor-x', `${placement.anchorX}px`)
      buildingEl.style.setProperty('--obsia-anchor-y', `${placement.anchorY}px`)
    }
  }

  private project(position: BuildingPosition): BuildingPosition {
    return {
      x: (position.x - position.y) * ISO_COS,
      y: (position.x + position.y) * ISO_SIN,
    }
  }

  private clampBuildingSize(size: BuildingSize, rootPath?: string, building?: Building): BuildingSize {
    const minSize = this.getMinSizeForBuilding(rootPath, building)
    const rows = this.getRequiredRows(rootPath, building)
    return {
      x: Math.max(minSize.x, Math.min(ObsiaBuildView.MAX_BUILDING_WIDTH_UNITS, Math.round(size.x))),
      y: this.snapDepthToRowGrowth(size.y, rows, minSize.y),
    }
  }

  private getBuildingSize(rootPath: string): BuildingSize {
    return this.clampBuildingSize(this.buildingSizeByRoot.get(rootPath) ?? {
      x: ISO_BUILDING_GRID_UNITS,
      y: ISO_BUILDING_GRID_UNITS,
    }, rootPath)
  }

  private getRequiredRows(rootPath?: string, building?: Building): number {
    const targetBuilding = building ?? (rootPath ? this.buildingByRoot.get(rootPath) : undefined)
    const fileFloorCount = targetBuilding
      ? targetBuilding.floors.filter(floor => floor.kind === 'file').length
      : 0
    return this.getRequiredRowsForFloorCount(fileFloorCount)
  }

  private getRequiredRowsForFloorCount(fileFloorCount: number): number {
    return Math.max(1, Math.ceil(fileFloorCount / ObsiaBuildView.MAX_FLOORS_PER_ROW))
  }

  private getMinSizeForBuilding(rootPath?: string, building?: Building): BuildingSize {
    const requiredRows = this.getRequiredRows(rootPath, building)
    return {
      x: 2,
      y: Math.max(2, requiredRows * ObsiaBuildView.MIN_ROW_DEPTH_UNITS),
    }
  }

  private splitDepthAcrossRows(totalDepth: number, rows: number): number[] {
    const normalizedRows = Math.max(1, rows)
    const normalizedDepth = Math.max(
      ObsiaBuildView.MIN_ROW_DEPTH_UNITS * normalizedRows,
      Math.round(totalDepth),
    )
    const base = Math.floor(normalizedDepth / normalizedRows)
    const remainder = normalizedDepth % normalizedRows
    return Array.from({ length: normalizedRows }, (_, index) => {
      return base + (index < remainder ? 1 : 0)
    })
  }

  private getRenderSize(rootPath: string, size: BuildingSize): BuildingSize {
    const rotation = this.normalizeRotation(this.buildingRotationByRoot.get(rootPath) ?? 0)
    if (rotation === 1) {
      return {
        x: size.y,
        y: size.x,
      }
    }
    return size
  }

  private getDepthAxisForRotation(rootPath: string): BuildingPosition {
    const rotation = this.normalizeRotation(this.buildingRotationByRoot.get(rootPath) ?? 0)
    const axes: BuildingPosition[] = [
      { x: -FLOOR_ISO_UX, y: FLOOR_ISO_UY },
      { x: FLOOR_ISO_UX, y: FLOOR_ISO_UY },
    ]
    return axes[rotation] ?? axes[0]
  }

  private snapDepthToRowGrowth(rawDepth: number, rows: number, minDepth: number): number {
    const normalizedRows = Math.max(1, rows)
    const maxDepth = ObsiaBuildView.MAX_BUILDING_DEPTH_UNITS
    const safeMinDepth = Math.max(2, Math.round(minDepth))
    const boundedMinDepth = Math.min(maxDepth, safeMinDepth)
    const maxSteps = Math.max(0, Math.floor((maxDepth - boundedMinDepth) / normalizedRows))
    const rawSteps = Math.round((Math.round(rawDepth) - boundedMinDepth) / normalizedRows)
    const steps = Math.max(0, Math.min(maxSteps, rawSteps))
    return boundedMinDepth + (steps * normalizedRows)
  }

  private applyBuildingSizeVars(rootPath: string, buildingEl: HTMLElement) {
    const size = this.getBuildingSize(rootPath)
    const metrics = this.getFloorMetrics(this.getRenderSize(rootPath, size))
    buildingEl.style.setProperty('--obsia-floor-w', `${metrics.width}px`)
    buildingEl.style.setProperty('--obsia-floor-h', `${metrics.height}px`)
    buildingEl.style.setProperty('--obsia-floor-slot-h', `${FLOOR_STACK_STEP}px`)
    buildingEl.style.setProperty('--obsia-svg-offset-y', `${Math.round(metrics.height * -0.23)}px`)
    buildingEl.style.setProperty('--obsia-title-x', `${metrics.textTop.x}px`)
    buildingEl.style.setProperty('--obsia-title-y', `${metrics.textTop.y}px`)
  }

  private getBuildingAnchor(rootPath: string, buildingEl: HTMLElement): BuildingPosition {
    const commandFloors = Array.from(buildingEl.querySelectorAll<HTMLElement>('.obsia-floor.is-command'))
    const baseEl = commandFloors[Math.floor(commandFloors.length / 2)]
      ?? buildingEl.querySelector<HTMLElement>('.obsia-floor')
    if (!baseEl) {
      return {
        x: buildingEl.offsetWidth / 2,
        y: buildingEl.offsetHeight,
      }
    }

    const svgEl = baseEl.querySelector<SVGSVGElement>('.obsia-floor-svg')
    const dataAnchorX = Number(svgEl?.getAttribute('data-anchor-x') ?? '')
    const dataAnchorY = Number(svgEl?.getAttribute('data-anchor-y') ?? '')
    const svgOffsetYRaw = Number(svgEl?.getAttribute('data-svg-offset-y') ?? '')
    const svgOffsetY = Number.isFinite(svgOffsetYRaw) ? svgOffsetYRaw : FLOOR_SVG_OFFSET_Y
    const localAnchorX = Number.isFinite(dataAnchorX) ? dataAnchorX : FLOOR_BASE_VERTEX_X
    const localAnchorYBase = Number.isFinite(dataAnchorY) ? dataAnchorY : FLOOR_BASE_VERTEX_Y
    const localAnchorY = localAnchorYBase + svgOffsetY
    return {
      x: baseEl.offsetLeft + localAnchorX,
      y: baseEl.offsetTop + localAnchorY,
    }
  }

  private snapWorld(position: BuildingPosition): BuildingPosition {
    return {
      x: Math.round(position.x / ISO_GRID_STEP) * ISO_GRID_STEP,
      y: Math.round(position.y / ISO_GRID_STEP) * ISO_GRID_STEP,
    }
  }

  private onResizePointerDown(event: PointerEvent, rootPath: string) {
    if (this.activeControlRootPath !== rootPath)
      return

    const worldPos = this.buildingPosByRoot.get(rootPath)
    if (!worldPos)
      return

    const currentSize = this.getBuildingSize(rootPath)
    const rotation = this.normalizeRotation(this.buildingRotationByRoot.get(rootPath) ?? 0)
    const xSpan = rotation === 1 ? currentSize.y : currentSize.x
    const ySpan = rotation === 1 ? currentSize.x : currentSize.y
    const fixedWorld = {
      x: worldPos.x - (xSpan * ISO_GRID_BASE),
      y: worldPos.y - (ySpan * ISO_GRID_BASE),
    }

    this.resizing = {
      rootPath,
      fixedWorldX: fixedWorld.x,
      fixedWorldY: fixedWorld.y,
    }

    this.sceneEl.classList.add('is-resizing-building')
    window.addEventListener('pointermove', this.onWindowPointerMove)
    window.addEventListener('pointerup', this.onWindowPointerUp)
  }

  private onBasePointerDown(event: PointerEvent, rootPath: string) {
    const current = this.buildingPosByRoot.get(rootPath)
    if (!current)
      return

    event.preventDefault()
    event.stopPropagation()

    this.dragging = {
      rootPath,
      startClientX: event.clientX,
      startClientY: event.clientY,
      startX: current.x,
      startY: current.y,
    }

    this.buildingElByRoot.get(rootPath)?.classList.add('is-dragging')
    this.sceneEl.classList.add('is-dragging-building')
    this.updateFootprint()
    window.addEventListener('pointermove', this.onWindowPointerMove)
    window.addEventListener('pointerup', this.onWindowPointerUp)
  }

  private onWindowPointerMove = (event: PointerEvent) => {
    if (this.panning) {
      const dx = event.clientX - this.panning.startClientX
      const dy = event.clientY - this.panning.startClientY
      this.cameraOffsetX = this.panning.startCameraX + (dx / this.cameraZoom)
      this.cameraOffsetY = this.panning.startCameraY + (dy / this.cameraZoom)
      this.layoutBuildings(false)
      this.redrawConnections(this.activeEdges)
      return
    }

    if (this.resizing) {
      const mouseLocal = this.clientToWorldLocal(event.clientX, event.clientY)
      const fixedProjected = this.project({
        x: this.resizing.fixedWorldX,
        y: this.resizing.fixedWorldY,
      })
      const fixedLocal = {
        x: fixedProjected.x + this.projectionShiftX + this.cameraOffsetX,
        y: fixedProjected.y + this.projectionShiftY + this.cameraOffsetY,
      }

      const u = this.project({ x: ISO_GRID_BASE, y: 0 })
      const d = {
        x: mouseLocal.x - fixedLocal.x,
        y: mouseLocal.y - fixedLocal.y,
      }
      const ax = Math.max(1e-6, Math.abs(u.x))
      const ay = Math.max(1e-6, Math.abs(u.y))

      // d = sx * u + sy * v (iso basis), with opposite corner fixed.
      const rawSizeX = ((d.y / ay) + (d.x / ax)) * 0.5
      const rawSizeY = ((d.y / ay) - (d.x / ax)) * 0.5
      const rotation = this.normalizeRotation(this.buildingRotationByRoot.get(this.resizing.rootPath) ?? 0)
      const requestedSize = rotation === 1
        // At 90deg, visual X growth maps to logical Y (row-growth axis).
        ? { x: rawSizeY, y: rawSizeX }
        : { x: rawSizeX, y: rawSizeY }
      const size = this.clampBuildingSize(requestedSize, this.resizing.rootPath)
      const xSpan = rotation === 1 ? size.y : size.x
      const ySpan = rotation === 1 ? size.x : size.y
      const snappedAnchor = {
        x: this.resizing.fixedWorldX + (xSpan * ISO_GRID_BASE),
        y: this.resizing.fixedWorldY + (ySpan * ISO_GRID_BASE),
      }

      this.buildingSizeByRoot.set(this.resizing.rootPath, size)
      this.buildingPosByRoot.set(this.resizing.rootPath, snappedAnchor)
      const buildingEl = this.buildingElByRoot.get(this.resizing.rootPath)
      const building = this.buildingByRoot.get(this.resizing.rootPath)
      if (buildingEl) {
        this.applyBuildingSizeVars(this.resizing.rootPath, buildingEl)
        const stacksWrap = buildingEl.querySelector<HTMLElement>('.obsia-building-stacks')
        if (building && stacksWrap)
          this.renderBuildingStacks(building, stacksWrap)
      }
      this.layoutBuildings(false)
      this.redrawConnections(this.activeEdges)
      return
    }

    if (!this.dragging)
      return

    const dx = event.clientX - this.dragging.startClientX
    const dy = event.clientY - this.dragging.startClientY

    // Inverse isometric projection for pointer movement.
    const worldDx = (dy / this.cameraZoom) + ((dx / this.cameraZoom) / (2 * ISO_COS))
    const worldDy = (dy / this.cameraZoom) - ((dx / this.cameraZoom) / (2 * ISO_COS))
    const nextRaw: BuildingPosition = {
      x: this.dragging.startX + worldDx,
      y: this.dragging.startY + worldDy,
    }
    const next = this.snapWorld(nextRaw)
    this.buildingPosByRoot.set(this.dragging.rootPath, next)

    this.layoutBuildings(false)
    this.redrawConnections(this.activeEdges)
    this.updateFootprint()
  }

  private onWindowPointerUp = () => {
    if (this.panning) {
      this.panning = null
      this.sceneEl.classList.remove('is-panning-camera')
      window.removeEventListener('pointermove', this.onWindowPointerMove)
      window.removeEventListener('pointerup', this.onWindowPointerUp)
      return
    }

    if (this.resizing) {
      const finalSize = this.getBuildingSize(this.resizing.rootPath)
      const finalPos = this.buildingPosByRoot.get(this.resizing.rootPath)
      this.plugin.setBuildingSize(this.resizing.rootPath, finalSize)
      if (finalPos)
        this.plugin.setBuildingPosition(this.resizing.rootPath, finalPos)
      this.resizing = null
      this.sceneEl.classList.remove('is-resizing-building')
      window.removeEventListener('pointermove', this.onWindowPointerMove)
      window.removeEventListener('pointerup', this.onWindowPointerUp)
      return
    }

    if (!this.dragging)
      return

    const finalPos = this.buildingPosByRoot.get(this.dragging.rootPath)
    if (finalPos)
      this.plugin.setBuildingPosition(this.dragging.rootPath, this.snapWorld(finalPos))

    this.buildingElByRoot.get(this.dragging.rootPath)?.classList.remove('is-dragging')
    this.dragging = null
    this.sceneEl.classList.remove('is-dragging-building')
    this.hideFootprint()
    window.removeEventListener('pointermove', this.onWindowPointerMove)
    window.removeEventListener('pointerup', this.onWindowPointerUp)
  }

  private rotateBuilding(rootPath: string) {
    const current = this.normalizeRotation(this.buildingRotationByRoot.get(rootPath) ?? 0)
    const next: 0 | 1 = current === 0 ? 1 : 0
    this.buildingRotationByRoot.set(rootPath, next)
    this.plugin.setBuildingRotation(rootPath, next)
    const buildingEl = this.buildingElByRoot.get(rootPath)
    const building = this.buildingByRoot.get(rootPath)
    if (buildingEl) {
      this.applyBuildingRotationClass(buildingEl, next)
      this.applyBuildingSizeVars(rootPath, buildingEl)
      const stacksWrap = buildingEl.querySelector<HTMLElement>('.obsia-building-stacks')
      if (building && stacksWrap)
        this.renderBuildingStacks(building, stacksWrap)
    }
    this.layoutBuildings(false)
    this.redrawConnections(this.activeEdges)
  }

  private applyBuildingRotationClass(buildingEl: HTMLElement, rotation: number) {
    const normalized = this.normalizeRotation(rotation)
    buildingEl.classList.remove('rot-0', 'rot-1', 'rot-2', 'rot-3')
    buildingEl.classList.add(`rot-${normalized}`)
  }

  private updateFootprint() {
    if (!this.dragging) {
      this.hideFootprint()
      return
    }

    const worldPos = this.buildingPosByRoot.get(this.dragging.rootPath)
    if (!worldPos) {
      this.hideFootprint()
      return
    }

    const projected = this.project(worldPos)
    const center = {
      x: projected.x + this.projectionShiftX + this.cameraOffsetX,
      y: projected.y + this.projectionShiftY + this.cameraOffsetY,
    }

    const size = this.getBuildingSize(this.dragging.rootPath)
    const renderSize = this.getRenderSize(this.dragging.rootPath, size)
    // Use the exact same screen-space basis as floor geometry, so the
    // movement footprint matches building size 1:1.
    const edgeToRight = {
      x: FLOOR_ISO_UX * renderSize.y,
      y: -FLOOR_ISO_UY * renderSize.y,
    }
    const edgeToLeft = {
      x: -FLOOR_ISO_UX * renderSize.x,
      y: -FLOOR_ISO_UY * renderSize.x,
    }

    const p0 = { x: center.x, y: center.y }
    const p1 = { x: center.x + edgeToRight.x, y: center.y + edgeToRight.y }
    const p2 = { x: center.x + edgeToRight.x + edgeToLeft.x, y: center.y + edgeToRight.y + edgeToLeft.y }
    const p3 = { x: center.x + edgeToLeft.x, y: center.y + edgeToLeft.y }

    this.footprintPathEl.setAttribute('d', `M ${p0.x} ${p0.y} L ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y} Z`)
    this.footprintPathEl.classList.add('is-visible')
  }

  private hideFootprint() {
    this.footprintPathEl.classList.remove('is-visible')
    this.footprintPathEl.setAttribute('d', '')
  }

  private redrawConnections(edges?: BuildEdge[]) {
    const modelEdges = edges ?? this.activeEdges
    this.linksSvgEl.empty()

    const sceneRect = this.sceneEl.getBoundingClientRect()
    const width = Math.max(1, Math.floor(sceneRect.width / this.cameraZoom))
    const height = Math.max(1, Math.floor(sceneRect.height / this.cameraZoom))

    this.worldEl.style.width = `${width}px`
    this.worldEl.style.height = `${height}px`

    this.linksSvgEl.setAttribute('viewBox', `0 0 ${width} ${height}`)
    this.linksSvgEl.setAttribute('width', String(width))
    this.linksSvgEl.setAttribute('height', String(height))
    this.gridSvgEl.setAttribute('viewBox', `0 0 ${width} ${height}`)
    this.gridSvgEl.setAttribute('width', String(width))
    this.gridSvgEl.setAttribute('height', String(height))
    this.footprintSvgEl.setAttribute('viewBox', `0 0 ${width} ${height}`)
    this.footprintSvgEl.setAttribute('width', String(width))
    this.footprintSvgEl.setAttribute('height', String(height))
    this.redrawGrid(width, height)

    for (const edge of modelEdges) {
      const from = this.floorByPath.get(edge.fromPath)
      const to = this.floorByPath.get(edge.toPath)
      if (!from || !to)
        continue

      const fromPoint = this.getFloorCenterWorld(from)
      const toPoint = this.getFloorCenterWorld(to)
      if (!fromPoint || !toPoint)
        continue

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      line.setAttribute('x1', String(fromPoint.x))
      line.setAttribute('y1', String(fromPoint.y))
      line.setAttribute('x2', String(toPoint.x))
      line.setAttribute('y2', String(toPoint.y))
      line.classList.add('obsia-build-link')
      this.linksSvgEl.appendChild(line)
    }
  }

  private getFloorCenterWorld(floorEl: HTMLElement): { x: number, y: number } | null {
    const buildingEl = floorEl.closest<HTMLElement>('.obsia-building')
    if (!buildingEl)
      return null

    const bx = buildingEl.offsetLeft + this.cameraOffsetX
    const by = buildingEl.offsetTop + this.cameraOffsetY
    const fx = floorEl.offsetLeft + (floorEl.offsetWidth / 2)
    const fy = floorEl.offsetTop + (floorEl.offsetHeight / 2)
    return {
      x: bx + fx,
      y: by + fy,
    }
  }

  private redrawGrid(width: number, height: number) {
    this.gridSvgEl.empty()

    const ns = 'http://www.w3.org/2000/svg'
    const u = this.project({ x: ISO_GRID_BASE, y: 0 })
    const v = this.project({ x: 0, y: ISO_GRID_BASE })
    const origin = {
      x: this.projectionShiftX + this.cameraOffsetX,
      y: this.projectionShiftY + this.cameraOffsetY,
    }

    const reach = Math.ceil((Math.max(width, height) / ISO_GRID_BASE) * 1.8)
    const min = -reach
    const max = reach

    for (let i = min; i <= max; i++) {
      const a = {
        x: origin.x + (i * u.x) + (min * v.x),
        y: origin.y + (i * u.y) + (min * v.y),
      }
      const b = {
        x: origin.x + (i * u.x) + (max * v.x),
        y: origin.y + (i * u.y) + (max * v.y),
      }
      const line = document.createElementNS(ns, 'line')
      line.setAttribute('x1', String(a.x))
      line.setAttribute('y1', String(a.y))
      line.setAttribute('x2', String(b.x))
      line.setAttribute('y2', String(b.y))
      line.classList.add('obsia-grid-line')
      if (i % ISO_BUILDING_GRID_UNITS === 0)
        line.classList.add('is-major')
      this.gridSvgEl.appendChild(line)
    }

    for (let i = min; i <= max; i++) {
      const a = {
        x: origin.x + (min * u.x) + (i * v.x),
        y: origin.y + (min * u.y) + (i * v.y),
      }
      const b = {
        x: origin.x + (max * u.x) + (i * v.x),
        y: origin.y + (max * u.y) + (i * v.y),
      }
      const line = document.createElementNS(ns, 'line')
      line.setAttribute('x1', String(a.x))
      line.setAttribute('y1', String(a.y))
      line.setAttribute('x2', String(b.x))
      line.setAttribute('y2', String(b.y))
      line.classList.add('obsia-grid-line')
      if (i % ISO_BUILDING_GRID_UNITS === 0)
        line.classList.add('is-major')
      this.gridSvgEl.appendChild(line)
    }

    const axisLength = Math.max(width, height)
    const axisXEnd = {
      x: origin.x + ((axisLength / ISO_GRID_BASE) * u.x),
      y: origin.y + ((axisLength / ISO_GRID_BASE) * u.y),
    }
    const axisYEnd = {
      x: origin.x + ((axisLength / ISO_GRID_BASE) * v.x),
      y: origin.y + ((axisLength / ISO_GRID_BASE) * v.y),
    }

    const axisXLine = document.createElementNS(ns, 'line')
    axisXLine.setAttribute('x1', String(origin.x))
    axisXLine.setAttribute('y1', String(origin.y))
    axisXLine.setAttribute('x2', String(axisXEnd.x))
    axisXLine.setAttribute('y2', String(axisXEnd.y))
    axisXLine.classList.add('obsia-grid-axis', 'is-x')
    this.gridSvgEl.appendChild(axisXLine)

    const axisYLine = document.createElementNS(ns, 'line')
    axisYLine.setAttribute('x1', String(origin.x))
    axisYLine.setAttribute('y1', String(origin.y))
    axisYLine.setAttribute('x2', String(axisYEnd.x))
    axisYLine.setAttribute('y2', String(axisYEnd.y))
    axisYLine.classList.add('obsia-grid-axis', 'is-y')
    this.gridSvgEl.appendChild(axisYLine)

    const labelStep = ISO_GRID_BASE * 3
    const axisXLabelPos = {
      x: origin.x + ((labelStep / ISO_GRID_BASE) * u.x),
      y: origin.y + ((labelStep / ISO_GRID_BASE) * u.y),
    }
    const axisYLabelPos = {
      x: origin.x + ((labelStep / ISO_GRID_BASE) * v.x),
      y: origin.y + ((labelStep / ISO_GRID_BASE) * v.y),
    }

    const axisXLabel = document.createElementNS(ns, 'text')
    axisXLabel.setAttribute('x', String(axisXLabelPos.x + 8))
    axisXLabel.setAttribute('y', String(axisXLabelPos.y + 2))
    axisXLabel.textContent = 'X'
    axisXLabel.classList.add('obsia-grid-axis-label', 'is-x')
    this.gridSvgEl.appendChild(axisXLabel)

    const axisYLabel = document.createElementNS(ns, 'text')
    axisYLabel.setAttribute('x', String(axisYLabelPos.x - 8))
    axisYLabel.setAttribute('y', String(axisYLabelPos.y + 2))
    axisYLabel.textContent = 'Y'
    axisYLabel.classList.add('obsia-grid-axis-label', 'is-y')
    this.gridSvgEl.appendChild(axisYLabel)
  }

  private clearSearchVisuals() {
    for (const floorEl of this.floorByPath.values()) {
      floorEl.classList.remove('is-match')
      floorEl.classList.remove('is-dim')
    }
    this.searchResultsEl.classList.remove('is-visible')
    this.searchResultsEl.empty()
    this.searchStatusEl.setText('Sin filtro')
  }

  private async applySearch(rawQuery: string) {
    const query = normalize(rawQuery)
    this.appliedQuery = query

    if (!query) {
      this.clearSearchVisuals()
      return
    }

    this.searchStatusEl.setText('Buscando...')
    const matches = await this.plugin.findMatches(query)
    const matchedPaths = new Set(matches.map(file => file.path))

    let highlighted = 0
    for (const [path, floorEl] of this.floorByPath.entries()) {
      const isMatch = matchedPaths.has(path)
      floorEl.classList.toggle('is-match', isMatch)
      floorEl.classList.toggle('is-dim', !isMatch)
      if (isMatch)
        highlighted++
    }

    this.renderSearchMatches(matches)
    this.searchStatusEl.setText(`${highlighted} pisos resaltados`)
  }

  private renderSearchMatches(matches: TFile[]) {
    this.searchResultsEl.empty()
    this.searchResultsEl.classList.add('is-visible')

    if (!matches.length) {
      this.searchResultsEl.createDiv({
        cls: 'obsia-build-search-item is-empty',
        text: 'Sin coincidencias',
      })
      return
    }

    const sorted = sortByNameAsc(matches)
    const limit = 12
    const visible = sorted.slice(0, limit)
    for (const match of visible) {
      const item = this.searchResultsEl.createDiv({
        cls: 'obsia-build-search-item',
        text: match.basename,
      })
      item.title = match.path
      item.addEventListener('click', () => {
        void this.plugin.openFileByPath(match.path)
      })
    }

    if (sorted.length > limit) {
      this.searchResultsEl.createDiv({
        cls: 'obsia-build-search-item is-more',
        text: `+${sorted.length - limit} mas`,
      })
    }
  }
}
