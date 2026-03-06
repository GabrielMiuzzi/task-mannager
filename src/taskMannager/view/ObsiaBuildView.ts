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

function normalize(text: string): string {
  return text.trim().toLowerCase()
}

function sortByNameAsc(items: TFile[]): TFile[] {
  return [...items].sort((a, b) => a.basename.localeCompare(b.basename, undefined, { sensitivity: 'base' }))
}

export class ObsiaBuildView extends ItemView {
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
    this.buildingElByRoot.clear()
    this.buildingPosByRoot.clear()
    this.buildingRotationByRoot.clear()
    this.buildingSizeByRoot.clear()

    for (const [idx, building] of model.buildings.entries()) {
      const rawPosition = this.plugin.getBuildingPosition(building.rootPath) ?? this.getDefaultPosition(idx)
      const position = this.snapWorld(rawPosition)
      const rotation = this.plugin.getBuildingRotation(building.rootPath)
      const size = this.plugin.getBuildingSize(building.rootPath)
      this.buildingPosByRoot.set(building.rootPath, position)
      this.buildingRotationByRoot.set(building.rootPath, rotation)
      this.buildingSizeByRoot.set(building.rootPath, size)
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

    const stack = buildingEl.createDiv({ cls: 'obsia-building-stack' })
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

    for (const floor of building.floors) {
      const floorEl = stack.createDiv({
        cls: `obsia-floor ${floor.isRoot ? 'is-root' : ''} ${floor.kind === 'command' ? 'is-command' : ''}`,
      })
      if (floor.path)
        floorEl.setAttribute('data-path', floor.path)
      floorEl.setAttribute('data-name', floor.name)
      floorEl.title = floor.path ?? `${building.rootName} - comandos`
      floorEl.appendChild(this.createFloorSvg(building.rootPath, floor.name))

      if (floor.kind === 'file' && floor.path)
        this.floorByPath.set(floor.path, floorEl)

      if (floor.kind === 'command') {
        floorEl.addClass('is-command-handle')
        floorEl.addEventListener('dblclick', (event) => {
          event.preventDefault()
          event.stopPropagation()
          this.toggleBuildingControls(building.rootPath)
        })
      }
      else if (floor.path) {
        const filePath = floor.path
        floorEl.addEventListener('click', () => this.plugin.openFileByPath(filePath))
      }
    }
  }

  private refreshBuildingFloorSvg(rootPath: string, buildingEl: HTMLElement) {
    const floors = Array.from(buildingEl.querySelectorAll<HTMLElement>('.obsia-floor'))
    for (const floorEl of floors) {
      const label = floorEl.getAttribute('data-name') ?? ''
      const current = floorEl.querySelector('.obsia-floor-svg')
      current?.remove()
      floorEl.appendChild(this.createFloorSvg(rootPath, label))
    }
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

  private createFloorSvg(rootPath: string, label: string): SVGSVGElement {
    const size = this.getBuildingSize(rootPath)
    const metrics = this.getFloorMetrics(size)

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
    return svg
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

  private clampBuildingSize(size: BuildingSize): BuildingSize {
    return {
      x: Math.max(2, Math.min(12, Math.round(size.x))),
      y: Math.max(2, Math.min(12, Math.round(size.y))),
    }
  }

  private getBuildingSize(rootPath: string): BuildingSize {
    return this.clampBuildingSize(this.buildingSizeByRoot.get(rootPath) ?? {
      x: ISO_BUILDING_GRID_UNITS,
      y: ISO_BUILDING_GRID_UNITS,
    })
  }

  private applyBuildingSizeVars(rootPath: string, buildingEl: HTMLElement) {
    const size = this.getBuildingSize(rootPath)
    const metrics = this.getFloorMetrics(size)
    buildingEl.style.setProperty('--obsia-floor-w', `${metrics.width}px`)
    buildingEl.style.setProperty('--obsia-floor-h', `${metrics.height}px`)
    buildingEl.style.setProperty('--obsia-floor-slot-h', `${FLOOR_STACK_STEP}px`)
    buildingEl.style.setProperty('--obsia-svg-offset-y', `${Math.round(metrics.height * -0.23)}px`)
    buildingEl.style.setProperty('--obsia-title-x', `${metrics.textTop.x}px`)
    buildingEl.style.setProperty('--obsia-title-y', `${metrics.textTop.y}px`)
  }

  private getBuildingAnchor(rootPath: string, buildingEl: HTMLElement): BuildingPosition {
    const baseEl = buildingEl.querySelector<HTMLElement>('.obsia-floor.is-command')
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
    const svgOffsetYRaw = getComputedStyle(buildingEl).getPropertyValue('--obsia-svg-offset-y').trim()
    const svgOffsetY = Number.parseFloat(svgOffsetYRaw)
    const localAnchorX = Number.isFinite(dataAnchorX) ? dataAnchorX : FLOOR_BASE_VERTEX_X
    const localAnchorYBase = Number.isFinite(dataAnchorY) ? dataAnchorY : FLOOR_BASE_VERTEX_Y
    const localAnchorY = localAnchorYBase + (Number.isFinite(svgOffsetY) ? svgOffsetY : FLOOR_SVG_OFFSET_Y)
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
    const fixedWorld = {
      x: worldPos.x - (currentSize.x * ISO_GRID_BASE),
      y: worldPos.y - (currentSize.y * ISO_GRID_BASE),
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
      const size = this.clampBuildingSize({
        x: rawSizeX,
        y: rawSizeY,
      })
      const snappedAnchor = {
        x: this.resizing.fixedWorldX + (size.x * ISO_GRID_BASE),
        y: this.resizing.fixedWorldY + (size.y * ISO_GRID_BASE),
      }

      this.buildingSizeByRoot.set(this.resizing.rootPath, size)
      this.buildingPosByRoot.set(this.resizing.rootPath, snappedAnchor)
      const buildingEl = this.buildingElByRoot.get(this.resizing.rootPath)
      if (buildingEl) {
        this.applyBuildingSizeVars(this.resizing.rootPath, buildingEl)
        this.refreshBuildingFloorSvg(this.resizing.rootPath, buildingEl)
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
    const current = this.buildingRotationByRoot.get(rootPath) ?? 0
    const next = (current + 1) % 4
    this.buildingRotationByRoot.set(rootPath, next)
    this.plugin.setBuildingRotation(rootPath, next)
    const buildingEl = this.buildingElByRoot.get(rootPath)
    if (buildingEl)
      this.applyBuildingRotationClass(buildingEl, next)
    this.redrawConnections(this.activeEdges)
  }

  private applyBuildingRotationClass(buildingEl: HTMLElement, rotation: number) {
    buildingEl.classList.remove('rot-0', 'rot-1', 'rot-2', 'rot-3')
    buildingEl.classList.add(`rot-${rotation % 4}`)
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
    // Use the exact same screen-space basis as floor geometry, so the
    // movement footprint matches building size 1:1.
    const edgeToRight = {
      x: FLOOR_ISO_UX * size.y,
      y: -FLOOR_ISO_UY * size.y,
    }
    const edgeToLeft = {
      x: -FLOOR_ISO_UX * size.x,
      y: -FLOOR_ISO_UY * size.x,
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
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
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
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      line.setAttribute('x1', String(a.x))
      line.setAttribute('y1', String(a.y))
      line.setAttribute('x2', String(b.x))
      line.setAttribute('y2', String(b.y))
      line.classList.add('obsia-grid-line')
      if (i % ISO_BUILDING_GRID_UNITS === 0)
        line.classList.add('is-major')
      this.gridSvgEl.appendChild(line)
    }
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
