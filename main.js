'use strict';

const require$$0 = require('obsidian');

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var constants;
var hasRequiredConstants;

function requireConstants () {
	if (hasRequiredConstants) return constants;
	hasRequiredConstants = 1;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var constants_exports = {};
	__export(constants_exports, {
	  COMPLETED_SUBTASKS_FOLDER: () => COMPLETED_SUBTASKS_FOLDER,
	  COMPLETED_TASKS_FOLDER: () => COMPLETED_TASKS_FOLDER,
	  DEFAULT_EQUIPOS: () => DEFAULT_EQUIPOS,
	  DEFAULT_POMODORO_LONG_BREAK_MINUTES: () => DEFAULT_POMODORO_LONG_BREAK_MINUTES,
	  DEFAULT_POMODORO_SHORT_BREAK_MINUTES: () => DEFAULT_POMODORO_SHORT_BREAK_MINUTES,
	  DEFAULT_POMODORO_WORK_MINUTES: () => DEFAULT_POMODORO_WORK_MINUTES,
	  ESTADOS: () => ESTADOS,
	  FINISHED_TASK_INDEX_BASENAME: () => FINISHED_TASK_INDEX_BASENAME,
	  INDEX_TAG: () => INDEX_TAG,
	  LEGACY_COMPLETED_TASKS_FOLDER: () => LEGACY_COMPLETED_TASKS_FOLDER,
	  LOCKED_EQUIPO_NAMES: () => LOCKED_EQUIPO_NAMES,
	  ORDER_STEP: () => ORDER_STEP,
	  POMODORO_LOG_BASENAME: () => POMODORO_LOG_BASENAME,
	  POMODORO_WORK_CYCLES_BEFORE_LONG_BREAK: () => POMODORO_WORK_CYCLES_BEFORE_LONG_BREAK,
	  PRESET_COLORS: () => PRESET_COLORS,
	  PRIORIDADES: () => PRIORIDADES,
	  SUBTASKS_FOLDER: () => SUBTASKS_FOLDER,
	  SUBTASK_TAG: () => SUBTASK_TAG,
	  TAREAS_FOLDER: () => TAREAS_FOLDER,
	  TASK_INDEX_BASENAME: () => TASK_INDEX_BASENAME,
	  TASK_TAG: () => TASK_TAG,
	  VIEW_TYPE: () => VIEW_TYPE
	});
	constants = __toCommonJS(constants_exports);
	const VIEW_TYPE = "tareas-view";
	const TAREAS_FOLDER = "task-mannager";
	const SUBTASKS_FOLDER = `${TAREAS_FOLDER}/subTasks`;
	const COMPLETED_TASKS_FOLDER = `${TAREAS_FOLDER}/finished`;
	const COMPLETED_SUBTASKS_FOLDER = `${COMPLETED_TASKS_FOLDER}/subTasks`;
	const LEGACY_COMPLETED_TASKS_FOLDER = `${TAREAS_FOLDER}/completadas`;
	const TASK_INDEX_BASENAME = "taskIndex";
	const FINISHED_TASK_INDEX_BASENAME = "taskIndexFinished";
	const POMODORO_LOG_BASENAME = "pomodoro";
	const INDEX_TAG = "index";
	const TASK_TAG = "task";
	const SUBTASK_TAG = "sub-task";
	const ESTADOS = ["Pendiente", "Cancelada", "En progreso", "Finalizada", "Bloqueada"];
	const PRIORIDADES = ["Baja", "Media", "Alta", "Urgente"];
	const DEFAULT_EQUIPOS = [];
	const LOCKED_EQUIPO_NAMES = [];
	const PRESET_COLORS = [
	  "#e05c5c",
	  "#e0855c",
	  "#d97a1e",
	  "#c9b84a",
	  "#4caf50",
	  "#00b894",
	  "#0984e3",
	  "#2e6db0",
	  "#7c5ce7",
	  "#fd79a8",
	  "#636e72",
	  "#b2bec3"
	];
	const ORDER_STEP = 10;
	const DEFAULT_POMODORO_WORK_MINUTES = 25;
	const DEFAULT_POMODORO_SHORT_BREAK_MINUTES = 5;
	const DEFAULT_POMODORO_LONG_BREAK_MINUTES = 15;
	const POMODORO_WORK_CYCLES_BEFORE_LONG_BREAK = 4;
	return constants;
}

var guards;
var hasRequiredGuards;

function requireGuards () {
	if (hasRequiredGuards) return guards;
	hasRequiredGuards = 1;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var guards_exports = {};
	__export(guards_exports, {
	  isRecord: () => isRecord,
	  toTaskFrontmatter: () => toTaskFrontmatter
	});
	guards = __toCommonJS(guards_exports);
	function isRecord(value) {
	  return Boolean(value) && typeof value === "object";
	}
	function toTaskFrontmatter(value) {
	  if (!isRecord(value))
	    return null;
	  const frontmatter = {};
	  if (typeof value.tarea === "string")
	    frontmatter.tarea = value.tarea;
	  if (typeof value.detalle === "string")
	    frontmatter.detalle = value.detalle;
	  if (typeof value.estado === "string")
	    frontmatter.estado = value.estado;
	  if (typeof value.fechaInicio === "string")
	    frontmatter.fechaInicio = value.fechaInicio;
	  if (typeof value.fechaFin === "string")
	    frontmatter.fechaFin = value.fechaFin;
	  if (typeof value.equipo === "string")
	    frontmatter.equipo = value.equipo;
	  if (typeof value.prioridad === "string")
	    frontmatter.prioridad = value.prioridad;
	  if (typeof value.dedicado === "number" || typeof value.dedicado === "string")
	    frontmatter.dedicado = value.dedicado;
	  if (typeof value.estimacion === "number" || typeof value.estimacion === "string")
	    frontmatter.estimacion = value.estimacion;
	  if (typeof value.desvio === "number" || typeof value.desvio === "string")
	    frontmatter.desvio = value.desvio;
	  if (typeof value.parent === "string")
	    frontmatter.parent = value.parent;
	  if (Array.isArray(value.childs) && value.childs.every((item) => typeof item === "string"))
	    frontmatter.childs = value.childs;
	  else if (typeof value.childs === "string")
	    frontmatter.childs = value.childs;
	  if (Array.isArray(value.tags) && value.tags.every((item) => typeof item === "string"))
	    frontmatter.tags = value.tags;
	  else if (typeof value.tags === "string")
	    frontmatter.tags = value.tags;
	  if (typeof value.order === "number" || typeof value.order === "string")
	    frontmatter.order = value.order;
	  return frontmatter;
	}
	return guards;
}

var pomodoroEngine;
var hasRequiredPomodoroEngine;

function requirePomodoroEngine () {
	if (hasRequiredPomodoroEngine) return pomodoroEngine;
	hasRequiredPomodoroEngine = 1;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var pomodoroEngine_exports = {};
	__export(pomodoroEngine_exports, {
	  advancePomodoroState: () => advancePomodoroState,
	  applyPomodoroDurations: () => applyPomodoroDurations,
	  createDefaultPomodoroDurations: () => createDefaultPomodoroDurations,
	  createDefaultPomodoroState: () => createDefaultPomodoroState,
	  enterPomodoroDeviation: () => enterPomodoroDeviation,
	  exitPomodoroDeviation: () => exitPomodoroDeviation,
	  formatPomodoroCountdown: () => formatPomodoroCountdown,
	  getDeviationElapsedSeconds: () => getDeviationElapsedSeconds,
	  getPhaseDurationSeconds: () => getPhaseDurationSeconds,
	  getPomodoroPhaseLabel: () => getPomodoroPhaseLabel,
	  getPomodoroRemainingSeconds: () => getPomodoroRemainingSeconds,
	  normalizePomodoroDurations: () => normalizePomodoroDurations,
	  normalizePomodoroState: () => normalizePomodoroState,
	  pausePomodoro: () => pausePomodoro,
	  resetPomodoro: () => resetPomodoro,
	  resumePomodoro: () => resumePomodoro,
	  startPomodoro: () => startPomodoro
	});
	pomodoroEngine = __toCommonJS(pomodoroEngine_exports);
	var import_constants = requireConstants();
	var import_guards = requireGuards();
	const MIN_DURATION_MINUTES = 1;
	const MAX_DURATION_MINUTES = 180;
	function createDefaultPomodoroState() {
	  const durations = createDefaultPomodoroDurations();
	  return {
	    phase: "work",
	    runState: "idle",
	    remainingSeconds: getPhaseDurationSeconds(durations, "work"),
	    endTimestamp: null,
	    completedWorkCycles: 0,
	    selectedTaskPath: null,
	    isDeviationActive: false,
	    deviationStartedAt: null,
	    deviationBaseRemainingSeconds: 0,
	    phaseDeviationSeconds: 0,
	    durations
	  };
	}
	function createDefaultPomodoroDurations() {
	  return {
	    workMinutes: import_constants.DEFAULT_POMODORO_WORK_MINUTES,
	    shortBreakMinutes: import_constants.DEFAULT_POMODORO_SHORT_BREAK_MINUTES,
	    longBreakMinutes: import_constants.DEFAULT_POMODORO_LONG_BREAK_MINUTES
	  };
	}
	function normalizePomodoroState(rawValue) {
	  const fallback = createDefaultPomodoroState();
	  if (!(0, import_guards.isRecord)(rawValue))
	    return fallback;
	  const durations = normalizePomodoroDurations(rawValue.durations);
	  const phase = normalizePomodoroPhase(rawValue.phase);
	  const runState = normalizePomodoroRunState(rawValue.runState);
	  const defaultRemaining = getPhaseDurationSeconds(durations, phase);
	  const remainingSeconds = normalizeSeconds(rawValue.remainingSeconds, defaultRemaining);
	  const endTimestamp = typeof rawValue.endTimestamp === "number" && Number.isFinite(rawValue.endTimestamp) ? rawValue.endTimestamp : null;
	  const completedWorkCycles = typeof rawValue.completedWorkCycles === "number" && Number.isFinite(rawValue.completedWorkCycles) ? Math.max(0, Math.floor(rawValue.completedWorkCycles)) : 0;
	  const selectedTaskPath = typeof rawValue.selectedTaskPath === "string" && rawValue.selectedTaskPath.trim().length > 0 ? rawValue.selectedTaskPath : null;
	  const isDeviationActive = Boolean(rawValue.isDeviationActive);
	  const deviationStartedAt = typeof rawValue.deviationStartedAt === "number" && Number.isFinite(rawValue.deviationStartedAt) ? rawValue.deviationStartedAt : null;
	  const deviationBaseRemainingSeconds = normalizeSeconds(rawValue.deviationBaseRemainingSeconds, 0);
	  const phaseDeviationSeconds = normalizeSeconds(rawValue.phaseDeviationSeconds, 0);
	  return {
	    phase,
	    runState,
	    remainingSeconds,
	    endTimestamp,
	    completedWorkCycles,
	    selectedTaskPath,
	    isDeviationActive,
	    deviationStartedAt: isDeviationActive ? deviationStartedAt : null,
	    deviationBaseRemainingSeconds: isDeviationActive ? deviationBaseRemainingSeconds : 0,
	    phaseDeviationSeconds,
	    durations
	  };
	}
	function normalizePomodoroDurations(rawValue) {
	  const fallback = createDefaultPomodoroDurations();
	  if (!(0, import_guards.isRecord)(rawValue))
	    return fallback;
	  return {
	    workMinutes: clampMinutes(rawValue.workMinutes, fallback.workMinutes),
	    shortBreakMinutes: clampMinutes(rawValue.shortBreakMinutes, fallback.shortBreakMinutes),
	    longBreakMinutes: clampMinutes(rawValue.longBreakMinutes, fallback.longBreakMinutes)
	  };
	}
	function getPhaseDurationSeconds(durations, phase) {
	  if (phase === "short-break")
	    return durations.shortBreakMinutes * 60;
	  if (phase === "long-break")
	    return durations.longBreakMinutes * 60;
	  return durations.workMinutes * 60;
	}
	function getPomodoroRemainingSeconds(state, nowMs) {
	  if (state.runState !== "running" || state.endTimestamp === null)
	    return state.remainingSeconds;
	  return Math.max(0, Math.ceil((state.endTimestamp - nowMs) / 1e3));
	}
	function startPomodoro(state, nowMs) {
	  if (state.runState === "running" || state.isDeviationActive)
	    return state;
	  const remainingSeconds = state.runState === "paused" ? state.remainingSeconds : getPhaseDurationSeconds(state.durations, state.phase);
	  return {
	    ...state,
	    runState: "running",
	    remainingSeconds,
	    endTimestamp: nowMs + remainingSeconds * 1e3
	  };
	}
	function pausePomodoro(state, nowMs) {
	  if (state.runState !== "running" || state.isDeviationActive)
	    return state;
	  return {
	    ...state,
	    runState: "paused",
	    remainingSeconds: getPomodoroRemainingSeconds(state, nowMs),
	    endTimestamp: null
	  };
	}
	function resumePomodoro(state, nowMs) {
	  if (state.runState !== "paused" || state.isDeviationActive)
	    return state;
	  return {
	    ...state,
	    runState: "running",
	    endTimestamp: nowMs + state.remainingSeconds * 1e3
	  };
	}
	function resetPomodoro(state) {
	  return {
	    ...state,
	    runState: "idle",
	    remainingSeconds: getPhaseDurationSeconds(state.durations, state.phase),
	    endTimestamp: null,
	    isDeviationActive: false,
	    deviationStartedAt: null,
	    deviationBaseRemainingSeconds: 0,
	    phaseDeviationSeconds: 0
	  };
	}
	function applyPomodoroDurations(state, durations) {
	  if (state.runState !== "idle")
	    return { ...state, durations: { ...durations } };
	  return {
	    ...state,
	    durations: { ...durations },
	    remainingSeconds: getPhaseDurationSeconds(durations, state.phase),
	    endTimestamp: null
	  };
	}
	function advancePomodoroState(state, nowMs) {
	  if (state.isDeviationActive || state.runState !== "running" || state.endTimestamp === null)
	    return { state, completedPhases: [], transitioned: false };
	  let next = { ...state, durations: { ...state.durations } };
	  const completedPhases = [];
	  let transitioned = false;
	  while (next.endTimestamp !== null && next.endTimestamp <= nowMs) {
	    completedPhases.push(next.phase);
	    transitioned = true;
	    if (next.phase === "work") {
	      const completedWorkCycles = next.completedWorkCycles + 1;
	      const nextPhase = completedWorkCycles % import_constants.POMODORO_WORK_CYCLES_BEFORE_LONG_BREAK === 0 ? "long-break" : "short-break";
	      const nextDuration2 = getPhaseDurationSeconds(next.durations, nextPhase);
	      next = {
	        ...next,
	        phase: nextPhase,
	        completedWorkCycles,
	        runState: "running",
	        remainingSeconds: nextDuration2,
	        endTimestamp: (next.endTimestamp ?? nowMs) + nextDuration2 * 1e3
	      };
	      continue;
	    }
	    const nextDuration = getPhaseDurationSeconds(next.durations, "work");
	    next = {
	      ...next,
	      phase: "work",
	      runState: "running",
	      remainingSeconds: nextDuration,
	      endTimestamp: (next.endTimestamp ?? nowMs) + nextDuration * 1e3
	    };
	  }
	  const remainingSeconds = getPomodoroRemainingSeconds(next, nowMs);
	  if (remainingSeconds !== next.remainingSeconds)
	    next = { ...next, remainingSeconds };
	  return { state: next, completedPhases, transitioned };
	}
	function getDeviationElapsedSeconds(state, nowMs) {
	  if (!state.isDeviationActive || state.deviationStartedAt === null)
	    return 0;
	  return Math.max(0, Math.floor((nowMs - state.deviationStartedAt) / 1e3));
	}
	function enterPomodoroDeviation(state, nowMs) {
	  if (state.isDeviationActive || state.runState !== "running")
	    return state;
	  const remainingSeconds = getPomodoroRemainingSeconds(state, nowMs);
	  return {
	    ...state,
	    runState: "paused",
	    remainingSeconds,
	    endTimestamp: null,
	    isDeviationActive: true,
	    deviationStartedAt: nowMs,
	    deviationBaseRemainingSeconds: remainingSeconds
	  };
	}
	function exitPomodoroDeviation(state, nowMs) {
	  if (!state.isDeviationActive)
	    return { state, elapsedSeconds: 0, completedWork: false, overtimeSeconds: 0 };
	  const elapsedSeconds = getDeviationElapsedSeconds(state, nowMs);
	  const baseRemaining = Math.max(0, state.deviationBaseRemainingSeconds);
	  const clearDeviation = (next) => ({
	    ...next,
	    isDeviationActive: false,
	    deviationStartedAt: null,
	    deviationBaseRemainingSeconds: 0,
	    phaseDeviationSeconds: next.phaseDeviationSeconds + elapsedSeconds
	  });
	  if (state.phase !== "work") {
	    const remainingSeconds = Math.max(0, baseRemaining - elapsedSeconds);
	    return {
	      state: clearDeviation({
	        ...state,
	        runState: "running",
	        remainingSeconds,
	        endTimestamp: nowMs + remainingSeconds * 1e3
	      }),
	      elapsedSeconds,
	      completedWork: false,
	      overtimeSeconds: 0
	    };
	  }
	  if (elapsedSeconds < baseRemaining) {
	    const remainingSeconds = Math.max(0, baseRemaining - elapsedSeconds);
	    return {
	      state: clearDeviation({
	        ...state,
	        runState: "running",
	        remainingSeconds,
	        endTimestamp: nowMs + remainingSeconds * 1e3
	      }),
	      elapsedSeconds,
	      completedWork: false,
	      overtimeSeconds: 0
	    };
	  }
	  const overtimeSeconds = elapsedSeconds - baseRemaining;
	  const completedWorkCycles = state.completedWorkCycles + 1;
	  const nextPhase = completedWorkCycles % import_constants.POMODORO_WORK_CYCLES_BEFORE_LONG_BREAK === 0 ? "long-break" : "short-break";
	  const baseBreakSeconds = getPhaseDurationSeconds(state.durations, nextPhase);
	  const workDurationSeconds = Math.max(1, getPhaseDurationSeconds(state.durations, "work"));
	  const extraBreakSeconds = Math.round(overtimeSeconds * baseBreakSeconds / workDurationSeconds);
	  const nextBreakSeconds = baseBreakSeconds + extraBreakSeconds;
	  return {
	    state: clearDeviation({
	      ...state,
	      phase: nextPhase,
	      runState: "running",
	      completedWorkCycles,
	      remainingSeconds: nextBreakSeconds,
	      endTimestamp: nowMs + nextBreakSeconds * 1e3
	    }),
	    elapsedSeconds,
	    completedWork: true,
	    overtimeSeconds
	  };
	}
	function getPomodoroPhaseLabel(phase) {
	  if (phase === "short-break")
	    return "Descanso corto";
	  if (phase === "long-break")
	    return "Descanso largo";
	  return "Trabajo";
	}
	function formatPomodoroCountdown(totalSeconds) {
	  const minutes = Math.floor(totalSeconds / 60);
	  const seconds = totalSeconds % 60;
	  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
	}
	function clampMinutes(value, fallback) {
	  if (typeof value !== "number" || !Number.isFinite(value))
	    return fallback;
	  return Math.min(MAX_DURATION_MINUTES, Math.max(MIN_DURATION_MINUTES, Math.round(value)));
	}
	function normalizePomodoroPhase(value) {
	  if (value === "work" || value === "short-break" || value === "long-break")
	    return value;
	  return "work";
	}
	function normalizePomodoroRunState(value) {
	  if (value === "idle" || value === "running" || value === "paused")
	    return value;
	  return "idle";
	}
	function normalizeSeconds(value, fallback) {
	  if (typeof value !== "number" || !Number.isFinite(value))
	    return fallback;
	  return Math.max(0, Math.floor(value));
	}
	return pomodoroEngine;
}

var frontmatterEngine;
var hasRequiredFrontmatterEngine;

function requireFrontmatterEngine () {
	if (hasRequiredFrontmatterEngine) return frontmatterEngine;
	hasRequiredFrontmatterEngine = 1;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var frontmatterEngine_exports = {};
	__export(frontmatterEngine_exports, {
	  countTopLevelTeamTasks: () => countTopLevelTeamTasks,
	  rebuildTaskChildLinks: () => rebuildTaskChildLinks,
	  renameTeamInTasks: () => renameTeamInTasks,
	  syncTaskTypeTags: () => syncTaskTypeTags,
	  updateFrontmatter: () => updateFrontmatter
	});
	frontmatterEngine = __toCommonJS(frontmatterEngine_exports);
	var import_constants = requireConstants();
	var import_guards = requireGuards();
	async function updateFrontmatter(app, file, updates) {
	  await app.fileManager.processFrontMatter(file, (fm) => {
	    for (const [key, value] of Object.entries(updates))
	      fm[key] = value;
	  });
	}
	async function renameTeamInTasks(app, oldName, newName) {
	  const files = app.vault.getMarkdownFiles().filter((file) => file.path.startsWith(`${import_constants.TAREAS_FOLDER}/`));
	  for (const file of files) {
	    const fm = (0, import_guards.toTaskFrontmatter)(app.metadataCache.getFileCache(file)?.frontmatter);
	    if (fm?.equipo !== oldName)
	      continue;
	    await app.fileManager.processFrontMatter(file, (frontmatter) => {
	      frontmatter.equipo = newName;
	    });
	  }
	}
	function countTopLevelTeamTasks(app, teamName) {
	  const files = app.vault.getMarkdownFiles().filter((file) => file.path.startsWith(`${import_constants.TAREAS_FOLDER}/`));
	  let count = 0;
	  for (const file of files) {
	    const fm = (0, import_guards.toTaskFrontmatter)(app.metadataCache.getFileCache(file)?.frontmatter);
	    if (fm?.equipo === teamName && !fm?.parent)
	      count++;
	  }
	  return count;
	}
	async function rebuildTaskChildLinks(app) {
	  const files = app.vault.getMarkdownFiles().filter((file) => file.path.startsWith(`${import_constants.TAREAS_FOLDER}/`)).filter((file) => file.basename !== import_constants.TASK_INDEX_BASENAME && file.basename !== import_constants.FINISHED_TASK_INDEX_BASENAME);
	  const childMap = /* @__PURE__ */ new Map();
	  const taskEntries = [];
	  for (const file of files) {
	    const fm = await readTaskFrontmatter(app, file);
	    if (!fm)
	      continue;
	    const taskName = (fm?.tarea?.trim() || file.basename).trim();
	    taskEntries.push({ file, taskName });
	    const parentName = normalizeParentReference(fm?.parent);
	    if (!parentName)
	      continue;
	    const childSet = childMap.get(parentName) ?? /* @__PURE__ */ new Set();
	    childSet.add(file.basename);
	    childMap.set(parentName, childSet);
	  }
	  for (const entry of taskEntries) {
	    const { file, taskName } = entry;
	    const childBasenames = /* @__PURE__ */ new Set([
	      ...childMap.get(file.basename) ?? [],
	      ...childMap.get(taskName) ?? []
	    ]);
	    childBasenames.delete(file.basename);
	    const nextChildLinks = Array.from(childBasenames).sort((a, b) => a.localeCompare(b)).map((name) => `[[${name}]]`);
	    await app.fileManager.processFrontMatter(file, (fm) => {
	      fm.childs = nextChildLinks;
	    });
	  }
	}
	async function syncTaskTypeTags(app) {
	  const files = app.vault.getMarkdownFiles().filter((file) => file.path.startsWith(`${import_constants.TAREAS_FOLDER}/`));
	  const classificationTags = /* @__PURE__ */ new Set([import_constants.INDEX_TAG, import_constants.TASK_TAG, import_constants.SUBTASK_TAG]);
	  for (const file of files) {
	    const nextClassification = resolveClassificationTag(file);
	    await app.fileManager.processFrontMatter(file, (frontmatter) => {
	      const currentTags = normalizeTags(frontmatter.tags);
	      const preservedTags = currentTags.filter((tag) => !classificationTags.has(tag));
	      frontmatter.tags = [...preservedTags, nextClassification];
	    });
	  }
	}
	async function readTaskFrontmatter(app, file) {
	  const content = await app.vault.cachedRead(file);
	  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	  if (!match)
	    return null;
	  const rawYaml = match[1];
	  const frontmatterData = parseSimpleYaml(rawYaml);
	  return (0, import_guards.toTaskFrontmatter)(frontmatterData);
	}
	function parseSimpleYaml(yamlText) {
	  const result = {};
	  const lines = yamlText.split(/\r?\n/);
	  let index = 0;
	  while (index < lines.length) {
	    const line = lines[index];
	    if (!line.trim()) {
	      index++;
	      continue;
	    }
	    const keyValueMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
	    if (!keyValueMatch) {
	      index++;
	      continue;
	    }
	    const [, key, rawValue] = keyValueMatch;
	    const trimmedValue = rawValue.trim();
	    if (trimmedValue === "") {
	      result[key] = "";
	      index++;
	      continue;
	    }
	    if (trimmedValue === "[]") {
	      result[key] = [];
	      index++;
	      continue;
	    }
	    if (trimmedValue.startsWith("[") && trimmedValue.endsWith("]")) {
	      const inner = trimmedValue.slice(1, -1).trim();
	      if (!inner) {
	        result[key] = [];
	        index++;
	        continue;
	      }
	      result[key] = inner.split(",").map((item) => unquoteYamlValue(item.trim()));
	      index++;
	      continue;
	    }
	    if (trimmedValue === "|") {
	      const blockLines = [];
	      index++;
	      while (index < lines.length && /^\s+/.test(lines[index])) {
	        blockLines.push(lines[index].replace(/^\s+/, ""));
	        index++;
	      }
	      result[key] = blockLines.join("\n");
	      continue;
	    }
	    result[key] = unquoteYamlValue(trimmedValue);
	    index++;
	  }
	  return result;
	}
	function unquoteYamlValue(value) {
	  if (value.startsWith('"') && value.endsWith('"'))
	    return value.slice(1, -1).replace(/\\"/g, '"');
	  if (value.startsWith("'") && value.endsWith("'"))
	    return value.slice(1, -1);
	  return value;
	}
	function normalizeParentReference(parentValue) {
	  const trimmed = (parentValue || "").trim();
	  if (!trimmed)
	    return "";
	  const linkMatch = trimmed.match(/^\[\[(.+?)\]\]$/);
	  const rawReference = (linkMatch ? linkMatch[1] : trimmed).trim();
	  const withoutAlias = rawReference.split("|")[0].trim();
	  const withoutHeading = withoutAlias.split("#")[0].trim();
	  const basename = withoutHeading.split("/").pop() ?? withoutHeading;
	  return basename.replace(/\.md$/i, "").trim();
	}
	function resolveClassificationTag(file) {
	  if (file.basename === import_constants.TASK_INDEX_BASENAME || file.basename === import_constants.FINISHED_TASK_INDEX_BASENAME)
	    return import_constants.INDEX_TAG;
	  if (file.path.startsWith(`${import_constants.SUBTASKS_FOLDER}/`) || file.path.includes("/subTasks/"))
	    return import_constants.SUBTASK_TAG;
	  return import_constants.TASK_TAG;
	}
	function normalizeTags(value) {
	  if (Array.isArray(value))
	    return value.filter((item) => typeof item === "string").map(normalizeTagValue).filter(Boolean);
	  if (typeof value === "string") {
	    const normalized = normalizeTagValue(value);
	    return normalized ? [normalized] : [];
	  }
	  return [];
	}
	function normalizeTagValue(tag) {
	  return tag.replace(/^#/, "").trim();
	}
	return frontmatterEngine;
}

var taskIndexEngine;
var hasRequiredTaskIndexEngine;

function requireTaskIndexEngine () {
	if (hasRequiredTaskIndexEngine) return taskIndexEngine;
	hasRequiredTaskIndexEngine = 1;
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
	  // If the importer is in node compatibility mode or this is not an ESM
	  // file that has been converted to a CommonJS file using a Babel-
	  // compatible transform (i.e. "__esModule" has not been set), then set
	  // "default" to the CommonJS "module.exports" for node compatibility.
	  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
	  mod
	));
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var taskIndexEngine_exports = {};
	__export(taskIndexEngine_exports, {
	  appendTaskLinkToFinishedIndex: () => appendTaskLinkToFinishedIndex,
	  appendTaskLinkToIndex: () => appendTaskLinkToIndex,
	  ensureFinishedTaskIndexFile: () => ensureFinishedTaskIndexFile,
	  ensureTaskIndexFile: () => ensureTaskIndexFile,
	  removeTaskLinkFromFinishedIndex: () => removeTaskLinkFromFinishedIndex,
	  removeTaskLinkFromIndex: () => removeTaskLinkFromIndex
	});
	taskIndexEngine = __toCommonJS(taskIndexEngine_exports);
	var obsidian = __toESM(require$$0);
	var import_constants = requireConstants();
	const TASK_INDEX_FILENAME = `${import_constants.TASK_INDEX_BASENAME}.md`;
	const TASK_INDEX_PATH = `${import_constants.TAREAS_FOLDER}/${TASK_INDEX_FILENAME}`;
	const FINISHED_TASK_INDEX_FILENAME = `${import_constants.FINISHED_TASK_INDEX_BASENAME}.md`;
	const FINISHED_TASK_INDEX_PATH = `${import_constants.COMPLETED_TASKS_FOLDER}/${FINISHED_TASK_INDEX_FILENAME}`;
	async function ensureTaskIndexFile(app) {
	  return ensureIndexFile(app, import_constants.TAREAS_FOLDER, TASK_INDEX_PATH);
	}
	async function ensureFinishedTaskIndexFile(app) {
	  return ensureIndexFile(app, import_constants.COMPLETED_TASKS_FOLDER, FINISHED_TASK_INDEX_PATH);
	}
	async function appendTaskLinkToIndex(app, taskFile) {
	  await appendTaskLinkToIndexFile(app, taskFile, TASK_INDEX_PATH, () => ensureTaskIndexFile(app));
	}
	async function appendTaskLinkToFinishedIndex(app, taskFile) {
	  await appendTaskLinkToIndexFile(app, taskFile, FINISHED_TASK_INDEX_PATH, () => ensureFinishedTaskIndexFile(app));
	}
	async function removeTaskLinkFromIndex(app, taskFile) {
	  await removeTaskLinkFromIndexFile(app, taskFile, TASK_INDEX_PATH);
	}
	async function removeTaskLinkFromFinishedIndex(app, taskFile) {
	  await removeTaskLinkFromIndexFile(app, taskFile, FINISHED_TASK_INDEX_PATH);
	}
	async function ensureIndexFile(app, folderPath, filePath) {
	  const folder = app.vault.getAbstractFileByPath(folderPath);
	  if (!(folder instanceof obsidian.TFolder))
	    return null;
	  const existing = app.vault.getAbstractFileByPath(filePath);
	  if (existing instanceof obsidian.TFile)
	    return existing;
	  if (existing)
	    return null;
	  try {
	    const initialContent = ["---", `tags: [${import_constants.INDEX_TAG}]`, "---", ""].join("\n");
	    return await app.vault.create(filePath, initialContent);
	  } catch {
	    const retry = app.vault.getAbstractFileByPath(filePath);
	    return retry instanceof obsidian.TFile ? retry : null;
	  }
	}
	async function appendTaskLinkToIndexFile(app, taskFile, indexPath, ensureIndex) {
	  if (taskFile.path === indexPath)
	    return;
	  const indexFile = await ensureIndex();
	  if (!indexFile)
	    return;
	  const linkLine = `[[${taskFile.basename}]]`;
	  const current = await app.vault.cachedRead(indexFile);
	  const lines = current.split("\n").map((line) => line.trim()).filter(Boolean);
	  if (lines.includes(linkLine))
	    return;
	  const separator = current.length > 0 && !current.endsWith("\n") ? "\n" : "";
	  const next = `${current}${separator}${linkLine}
`;
	  await app.vault.modify(indexFile, next);
	}
	async function removeTaskLinkFromIndexFile(app, taskFile, indexPath) {
	  if (taskFile.path === indexPath)
	    return;
	  const indexFile = app.vault.getAbstractFileByPath(indexPath);
	  if (!(indexFile instanceof obsidian.TFile))
	    return;
	  const linkLine = `[[${taskFile.basename}]]`;
	  const lines = (await app.vault.cachedRead(indexFile)).split("\n");
	  const filtered = lines.filter((line) => line.trim() !== linkLine);
	  if (filtered.length === lines.length)
	    return;
	  const nonEmpty = filtered.filter((line) => line.trim().length > 0);
	  const next = nonEmpty.length > 0 ? `${nonEmpty.join("\n")}
` : "";
	  await app.vault.modify(indexFile, next);
	}
	return taskIndexEngine;
}

var status;
var hasRequiredStatus;

function requireStatus () {
	if (hasRequiredStatus) return status;
	hasRequiredStatus = 1;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var status_exports = {};
	__export(status_exports, {
	  normalizeEstado: () => normalizeEstado
	});
	status = __toCommonJS(status_exports);
	const ESTADO_ALIASES = {
	  cancelada: "Cancelada",
	  cancelado: "Cancelada",
	  desestimada: "Cancelada",
	  desestimado: "Cancelada",
	  "en progreso": "En progreso",
	  pendiente: "Pendiente",
	  finalizada: "Finalizada",
	  finalizado: "Finalizada",
	  completada: "Finalizada",
	  completado: "Finalizada",
	  bloqueada: "Bloqueada",
	  bloqueado: "Bloqueada",
	  urgente: "Pendiente"
	};
	function normalizeEstado(value) {
	  if (!value)
	    return "Pendiente";
	  const normalized = value.trim().toLowerCase();
	  return ESTADO_ALIASES[normalized] ?? "Pendiente";
	}
	return status;
}

var taskEngine;
var hasRequiredTaskEngine;

function requireTaskEngine () {
	if (hasRequiredTaskEngine) return taskEngine;
	hasRequiredTaskEngine = 1;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var taskEngine_exports = {};
	__export(taskEngine_exports, {
	  buildTaskContent: () => buildTaskContent,
	  extractTaskBodyPreview: () => extractTaskBodyPreview,
	  getTaskFiles: () => getTaskFiles,
	  getTasks: () => getTasks,
	  groupTopLevelTasks: () => groupTopLevelTasks,
	  isTaskInCompletedFolder: () => isTaskInCompletedFolder,
	  parseTaskDate: () => parseTaskDate,
	  resolveNewTaskOrder: () => resolveNewTaskOrder,
	  resolveTaskEndDate: () => resolveTaskEndDate,
	  resolveTaskPath: () => resolveTaskPath
	});
	taskEngine = __toCommonJS(taskEngine_exports);
	var import_constants = requireConstants();
	var import_guards = requireGuards();
	var import_status = requireStatus();
	function getTaskFiles(app) {
	  return app.vault.getMarkdownFiles().filter((file) => file.path.startsWith(`${import_constants.TAREAS_FOLDER}/`)).filter((file) => file.basename !== import_constants.TASK_INDEX_BASENAME && file.basename !== import_constants.FINISHED_TASK_INDEX_BASENAME);
	}
	function isTaskInCompletedFolder(path) {
	  return path.startsWith(`${import_constants.COMPLETED_TASKS_FOLDER}/`) || path.startsWith(`${import_constants.COMPLETED_SUBTASKS_FOLDER}/`) || path.startsWith(`${import_constants.LEGACY_COMPLETED_TASKS_FOLDER}/`);
	}
	function getTasks(app) {
	  const tasks = [];
	  for (const file of getTaskFiles(app)) {
	    const fm = getTaskFrontmatter(app, file);
	    if (!fm)
	      continue;
	    tasks.push({
	      file,
	      tarea: fm.tarea ?? file.basename,
	      detalle: fm.detalle ?? "",
	      estado: (0, import_status.normalizeEstado)(fm.estado),
	      fechaInicio: fm.fechaInicio ?? "",
	      fechaFin: fm.fechaFin ?? "",
	      equipo: fm.equipo ?? "",
	      prioridad: fm.prioridad ?? "",
	      dedicado: Number(fm.dedicado) || 0,
	      estimacion: Number(fm.estimacion) || 0,
	      desvio: Number(fm.desvio) || 0,
	      parent: normalizeParentTaskName(fm.parent ?? ""),
	      order: Number(fm.order) ?? 999999
	    });
	  }
	  return tasks;
	}
	function groupTopLevelTasks(tasks, equipos) {
	  const groups = {};
	  for (const equipo of equipos)
	    groups[equipo.name] = [];
	  for (const task of tasks) {
	    if (task.parent)
	      continue;
	    const teamName = task.equipo || "Sin equipo";
	    if (!groups[teamName])
	      groups[teamName] = [];
	    groups[teamName].push(task);
	  }
	  return groups;
	}
	function buildTaskContent(data, order) {
	  const safeTitle = data.tarea.replace(/"/g, '\\"');
	  const safeDetail = data.detalle.replace(/"/g, '\\"');
	  const safeEndDate = data.fechaFin.replace(/"/g, '\\"');
	  const safeParentTask = data.parent.trim().replace(/"/g, '\\"');
	  const parentLink = safeParentTask ? `[[${safeParentTask}]]` : "";
	  const taskTag = safeParentTask ? import_constants.SUBTASK_TAG : import_constants.TASK_TAG;
	  return [
	    "---",
	    `tarea: "${safeTitle}"`,
	    `detalle: "${safeDetail}"`,
	    `estado: "${data.estado}"`,
	    'fechaInicio: ""',
	    `fechaFin: "${safeEndDate}"`,
	    `equipo: "${data.equipo}"`,
	    `prioridad: "${data.prioridad}"`,
	    "dedicado: 0",
	    `estimacion: ${data.estimacion}`,
	    "desvio: 0",
	    `parent: "${parentLink}"`,
	    "childs: []",
	    `tags: [${taskTag}]`,
	    `order: ${order}`,
	    "---",
	    "",
	    data.detalle || "",
	    ""
	  ].join("\n");
	}
	function resolveNewTaskOrder(app, data) {
	  const goesTop = data.estado === "En progreso" || data.prioridad === "Urgente";
	  if (data.parent)
	    return import_constants.ORDER_STEP;
	  const siblingOrders = getTaskFiles(app).map((file) => getTaskFrontmatter(app, file)).filter((fm) => Boolean(fm)).filter((fm) => !fm.parent && fm.equipo === data.equipo).map((fm) => Number(fm.order) || 0);
	  if (siblingOrders.length === 0)
	    return import_constants.ORDER_STEP;
	  return goesTop ? Math.min(...siblingOrders) - import_constants.ORDER_STEP : Math.max(...siblingOrders) + import_constants.ORDER_STEP;
	}
	function resolveTaskPath(app, taskName, parentTaskName = "") {
	  const folderPath = parentTaskName.trim() ? import_constants.SUBTASKS_FOLDER : import_constants.TAREAS_FOLDER;
	  const basePath = `${folderPath}/${taskName}.md`;
	  if (!app.vault.getAbstractFileByPath(basePath))
	    return basePath;
	  return `${folderPath}/${taskName} ${Date.now()}.md`;
	}
	function resolveTaskEndDate(fechaFin, estimacion) {
	  const explicitEnd = parseTaskDate(fechaFin);
	  if (explicitEnd)
	    return explicitEnd.toISOString();
	  if (estimacion <= 0)
	    return "";
	  const computed = new Date(Date.now() + estimacion * 60 * 60 * 1e3);
	  return computed.toISOString();
	}
	function parseTaskDate(value) {
	  const trimmed = value.trim();
	  if (!trimmed)
	    return null;
	  const parsed = new Date(trimmed);
	  if (Number.isNaN(parsed.getTime()))
	    return null;
	  return parsed;
	}
	function extractTaskBodyPreview(content, maxLength = 180) {
	  let body = content;
	  body = body.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
	  const lines = body.split(/\r?\n/).map((line) => line.trim());
	  while (lines.length > 0 && !lines[0])
	    lines.shift();
	  if (lines[0]?.startsWith("# "))
	    lines.shift();
	  while (lines.length > 0 && !lines[0])
	    lines.shift();
	  const normalized = lines.join(" ").replace(/\s+/g, " ").trim();
	  if (!normalized)
	    return "";
	  if (normalized.length <= maxLength)
	    return normalized;
	  return `${normalized.slice(0, maxLength - 1).trimEnd()}\u2026`;
	}
	function normalizeParentTaskName(value) {
	  const trimmed = value.trim();
	  if (!trimmed)
	    return "";
	  const linkMatch = trimmed.match(/^\[\[(.+?)\]\]$/);
	  const rawRef = linkMatch ? linkMatch[1].trim() : trimmed;
	  const withoutAlias = rawRef.split("|")[0].trim();
	  const withoutHeading = withoutAlias.split("#")[0].trim();
	  const lastSegment = withoutHeading.split("/").pop() ?? withoutHeading;
	  return lastSegment.replace(/\.md$/i, "").trim();
	}
	function getTaskFrontmatter(app, file) {
	  const rawFrontmatter = app.metadataCache.getFileCache(file)?.frontmatter;
	  return (0, import_guards.toTaskFrontmatter)(rawFrontmatter);
	}
	return taskEngine;
}

var scheduleEngine;
var hasRequiredScheduleEngine;

function requireScheduleEngine () {
	if (hasRequiredScheduleEngine) return scheduleEngine;
	hasRequiredScheduleEngine = 1;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var scheduleEngine_exports = {};
	__export(scheduleEngine_exports, {
	  rebalanceGroupEndDates: () => rebalanceGroupEndDates
	});
	scheduleEngine = __toCommonJS(scheduleEngine_exports);
	var import_taskEngine = requireTaskEngine();
	var import_frontmatterEngine = requireFrontmatterEngine();
	const HOUR_MS = 60 * 60 * 1e3;
	async function rebalanceGroupEndDates(app, teamName) {
	  const tasks = (0, import_taskEngine.getTasks)(app).filter((task) => !task.parent && task.equipo === teamName && !(0, import_taskEngine.isTaskInCompletedFolder)(task.file.path)).sort((a, b) => a.order - b.order);
	  if (tasks.length === 0)
	    return;
	  const firstStart = (0, import_taskEngine.parseTaskDate)(tasks[0].fechaInicio) ?? /* @__PURE__ */ new Date();
	  let cursor = firstStart.getTime();
	  for (const task of tasks) {
	    const estimatedHours = Number.isFinite(task.estimacion) && task.estimacion > 0 ? task.estimacion : 0;
	    const dedicatedHours = Number.isFinite(task.dedicado) && task.dedicado > 0 ? task.dedicado : 0;
	    const estimateHours = Math.max(estimatedHours, dedicatedHours);
	    cursor += estimateHours * HOUR_MS;
	    await (0, import_frontmatterEngine.updateFrontmatter)(app, task.file, { fechaFin: new Date(cursor).toISOString() });
	  }
	}
	return scheduleEngine;
}

var sanitizeFilename_1;
var hasRequiredSanitizeFilename;

function requireSanitizeFilename () {
	if (hasRequiredSanitizeFilename) return sanitizeFilename_1;
	hasRequiredSanitizeFilename = 1;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var sanitizeFilename_exports = {};
	__export(sanitizeFilename_exports, {
	  sanitizeFilename: () => sanitizeFilename
	});
	sanitizeFilename_1 = __toCommonJS(sanitizeFilename_exports);
	function sanitizeFilename(name) {
	  return name.replace(/[\\/:*?"<>|#^[\]]/g, "-").trim();
	}
	return sanitizeFilename_1;
}

var NewTaskModal_1;
var hasRequiredNewTaskModal;

function requireNewTaskModal () {
	if (hasRequiredNewTaskModal) return NewTaskModal_1;
	hasRequiredNewTaskModal = 1;
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
	  // If the importer is in node compatibility mode or this is not an ESM
	  // file that has been converted to a CommonJS file using a Babel-
	  // compatible transform (i.e. "__esModule" has not been set), then set
	  // "default" to the CommonJS "module.exports" for node compatibility.
	  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
	  mod
	));
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var NewTaskModal_exports = {};
	__export(NewTaskModal_exports, {
	  NewTaskModal: () => NewTaskModal
	});
	NewTaskModal_1 = __toCommonJS(NewTaskModal_exports);
	var obsidian = __toESM(require$$0);
	var import_constants = requireConstants();
	var import_frontmatterEngine = requireFrontmatterEngine();
	var import_scheduleEngine = requireScheduleEngine();
	var import_taskIndexEngine = requireTaskIndexEngine();
	var import_taskEngine = requireTaskEngine();
	var import_sanitizeFilename = requireSanitizeFilename();
	class NewTaskModal extends obsidian.Modal {
	  plugin;
	  data;
	  constructor(app, plugin, defaultEquipo, defaultParent) {
	    super(app);
	    this.plugin = plugin;
	    this.data = {
	      tarea: "",
	      detalle: "",
	      estado: "Pendiente",
	      fechaFin: "",
	      equipo: defaultEquipo || plugin.equipos[0]?.name || "",
	      prioridad: "Media",
	      estimacion: 0,
	      parent: defaultParent || ""
	    };
	  }
	  onOpen() {
	    const { contentEl } = this;
	    contentEl.addClass("tareas-modal");
	    contentEl.createEl("h2", { text: "Nueva Tarea" });
	    new obsidian.Setting(contentEl).setName("Tarea").addText((text) => {
	      text.setPlaceholder("Nombre de la tarea");
	      text.onChange((value) => this.data.tarea = value);
	      setTimeout(() => text.inputEl.focus(), 50);
	    });
	    new obsidian.Setting(contentEl).setName("Estado").addDropdown((dropdown) => {
	      for (const estado of import_constants.ESTADOS)
	        dropdown.addOption(estado, estado);
	      dropdown.setValue(this.data.estado);
	      dropdown.onChange((value) => this.data.estado = value);
	    });
	    new obsidian.Setting(contentEl).setName("Fecha fin").setDesc("Opcional. Si queda vac\xEDa, se calcula con la estimaci\xF3n.").addText((text) => {
	      text.inputEl.type = "datetime-local";
	      text.setValue(this.data.fechaFin);
	      text.onChange((value) => this.data.fechaFin = value);
	    });
	    new obsidian.Setting(contentEl).setName("Equipo").addDropdown((dropdown) => {
	      for (const equipo of this.plugin.equipos)
	        dropdown.addOption(equipo.name, equipo.name);
	      dropdown.setValue(this.data.equipo);
	      dropdown.onChange((value) => this.data.equipo = value);
	    });
	    new obsidian.Setting(contentEl).setName("Prioridad").addDropdown((dropdown) => {
	      for (const prioridad of import_constants.PRIORIDADES)
	        dropdown.addOption(prioridad, prioridad);
	      dropdown.setValue(this.data.prioridad);
	      dropdown.onChange((value) => this.data.prioridad = value);
	    });
	    new obsidian.Setting(contentEl).setName("Estimaci\xF3n (horas)").addText((text) => {
	      text.setPlaceholder("0");
	      text.inputEl.type = "number";
	      text.inputEl.min = "0";
	      text.inputEl.step = "0.01";
	      text.onChange((value) => {
	        const parsed = Number.parseFloat(value);
	        this.data.estimacion = Number.isNaN(parsed) || parsed < 0 ? 0 : Math.round(parsed * 100) / 100;
	      });
	    });
	    new obsidian.Setting(contentEl).setName("Subtarea de").setDesc("Dejar vac\xEDo si es tarea principal").addText((text) => {
	      text.setPlaceholder("Nombre de tarea padre (sin .md)");
	      text.setValue(this.data.parent);
	      text.onChange((value) => this.data.parent = value);
	    });
	    const footer = contentEl.createDiv({ cls: "tareas-modal-footer" });
	    const createButton = footer.createEl("button", { text: "Crear tarea", cls: "mod-cta" });
	    createButton.onclick = () => this.create();
	    const cancelButton = footer.createEl("button", { text: "Cancelar" });
	    cancelButton.onclick = () => this.close();
	  }
	  onClose() {
	    this.contentEl.empty();
	  }
	  async create() {
	    if (!this.data.tarea.trim()) {
	      new obsidian.Notice("El nombre es requerido");
	      return;
	    }
	    const sanitizedTaskName = (0, import_sanitizeFilename.sanitizeFilename)(this.data.tarea);
	    const targetFolder = this.data.parent.trim() ? import_constants.SUBTASKS_FOLDER : import_constants.TAREAS_FOLDER;
	    await this.ensureFolderPath(targetFolder);
	    const path = (0, import_taskEngine.resolveTaskPath)(this.app, sanitizedTaskName, this.data.parent);
	    const order = (0, import_taskEngine.resolveNewTaskOrder)(this.app, this.data);
	    const content = (0, import_taskEngine.buildTaskContent)(
	      {
	        ...this.data,
	        fechaFin: (0, import_taskEngine.resolveTaskEndDate)(this.data.fechaFin, this.data.estimacion)
	      },
	      order
	    );
	    const taskFile = await this.app.vault.create(path, content);
	    await (0, import_taskIndexEngine.appendTaskLinkToIndex)(this.app, taskFile);
	    await (0, import_frontmatterEngine.rebuildTaskChildLinks)(this.app);
	    await (0, import_frontmatterEngine.syncTaskTypeTags)(this.app);
	    await (0, import_scheduleEngine.rebalanceGroupEndDates)(this.app, this.data.equipo);
	    new obsidian.Notice(`Tarea "${this.data.tarea}" creada`);
	    this.close();
	  }
	  async ensureFolderPath(path) {
	    const existing = this.app.vault.getAbstractFileByPath(path);
	    if (existing instanceof obsidian.TFolder)
	      return;
	    if (existing)
	      throw new Error(`No se pudo crear la carpeta "${path}" porque existe un archivo con ese nombre`);
	    const segments = path.split("/").filter(Boolean);
	    let currentPath = "";
	    for (const segment of segments) {
	      currentPath = currentPath ? `${currentPath}/${segment}` : segment;
	      const current = this.app.vault.getAbstractFileByPath(currentPath);
	      if (current instanceof obsidian.TFolder)
	        continue;
	      if (current)
	        throw new Error(`No se pudo crear la carpeta "${currentPath}" porque existe un archivo con ese nombre`);
	      await this.app.vault.createFolder(currentPath);
	    }
	  }
	}
	return NewTaskModal_1;
}

var settings;
var hasRequiredSettings;

function requireSettings () {
	if (hasRequiredSettings) return settings;
	hasRequiredSettings = 1;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var settings_exports = {};
	__export(settings_exports, {
	  normalizeEquiposFromSettings: () => normalizeEquiposFromSettings,
	  normalizePomodoroFromSettings: () => normalizePomodoroFromSettings
	});
	settings = __toCommonJS(settings_exports);
	var import_constants = requireConstants();
	var import_pomodoroEngine = requirePomodoroEngine();
	var import_guards = requireGuards();
	const LEGACY_FALLBACK_COLORS = ["#d97a1e", "#2e6db0", "#7c5ce7", "#00b894", "#e17055", "#fd79a8"];
	const REMOVED_DEFAULT_TEAM_NAMES = /* @__PURE__ */ new Set(["Semanal", "Diario", "Completadas"]);
	function normalizeEquiposFromSettings(rawData) {
	  const equipos = extractEquipos(rawData);
	  if (!equipos || equipos.length === 0)
	    return [...import_constants.DEFAULT_EQUIPOS];
	  if (isStringArray(equipos)) {
	    const normalizedFromLegacy = equipos.filter((name) => !REMOVED_DEFAULT_TEAM_NAMES.has(name)).map((name, index) => ({
	      name,
	      color: LEGACY_FALLBACK_COLORS[index % LEGACY_FALLBACK_COLORS.length]
	    }));
	    return mergeWithDefaultEquipos(normalizedFromLegacy);
	  }
	  const normalized = equipos.filter(isEquipo).map((equipo) => ({ name: equipo.name.trim(), color: equipo.color })).filter((equipo) => !REMOVED_DEFAULT_TEAM_NAMES.has(equipo.name)).filter((equipo) => Boolean(equipo.name));
	  if (normalized.length === 0)
	    return [...import_constants.DEFAULT_EQUIPOS];
	  return mergeWithDefaultEquipos(normalized);
	}
	function normalizePomodoroFromSettings(rawData) {
	  if (!(0, import_guards.isRecord)(rawData))
	    return (0, import_pomodoroEngine.normalizePomodoroState)(null);
	  return (0, import_pomodoroEngine.normalizePomodoroState)(rawData.pomodoro);
	}
	function extractEquipos(rawData) {
	  if (!(0, import_guards.isRecord)(rawData))
	    return void 0;
	  const equipos = rawData.equipos;
	  if (!Array.isArray(equipos))
	    return void 0;
	  return equipos;
	}
	function isEquipo(value) {
	  if (!(0, import_guards.isRecord)(value))
	    return false;
	  return typeof value.name === "string" && typeof value.color === "string";
	}
	function isStringArray(value) {
	  return value.every((item) => typeof item === "string");
	}
	function mergeWithDefaultEquipos(equipos) {
	  const defaultsByName = new Map(import_constants.DEFAULT_EQUIPOS.map((equipo) => [equipo.name, equipo]));
	  const normalizedByName = new Map(equipos.map((equipo) => [equipo.name, equipo]));
	  const withDefaults = import_constants.DEFAULT_EQUIPOS.map((equipo) => {
	    const savedEquipo = normalizedByName.get(equipo.name);
	    return savedEquipo ? { ...savedEquipo } : { ...equipo };
	  });
	  const customEquipos = equipos.filter((equipo) => !defaultsByName.has(equipo.name));
	  return [...withDefaults, ...customEquipos];
	}
	return settings;
}

var completionEngine;
var hasRequiredCompletionEngine;

function requireCompletionEngine () {
	if (hasRequiredCompletionEngine) return completionEngine;
	hasRequiredCompletionEngine = 1;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var completionEngine_exports = {};
	__export(completionEngine_exports, {
	  moveTaskToActiveFolder: () => moveTaskToActiveFolder,
	  moveTaskToCompletedFolder: () => moveTaskToCompletedFolder
	});
	completionEngine = __toCommonJS(completionEngine_exports);
	var import_constants = requireConstants();
	var import_taskIndexEngine = requireTaskIndexEngine();
	var import_frontmatterEngine = requireFrontmatterEngine();
	async function moveTaskToCompletedFolder(app, file, isSubtask = false) {
	  const targetFolder = isSubtask ? import_constants.COMPLETED_SUBTASKS_FOLDER : import_constants.COMPLETED_TASKS_FOLDER;
	  await ensureFolder(app, targetFolder);
	  const nextPath = resolveUniquePath(app, `${targetFolder}/${file.name}`);
	  if (nextPath === file.path)
	    return;
	  await (0, import_taskIndexEngine.removeTaskLinkFromIndex)(app, file);
	  await app.fileManager.renameFile(file, nextPath);
	  await (0, import_taskIndexEngine.appendTaskLinkToFinishedIndex)(app, file);
	  await (0, import_frontmatterEngine.syncTaskTypeTags)(app);
	}
	async function moveTaskToActiveFolder(app, file, isSubtask = false) {
	  const targetFolder = isSubtask ? import_constants.SUBTASKS_FOLDER : import_constants.TAREAS_FOLDER;
	  await ensureFolder(app, targetFolder);
	  const nextPath = resolveUniquePath(app, `${targetFolder}/${file.name}`);
	  if (nextPath === file.path)
	    return;
	  await (0, import_taskIndexEngine.removeTaskLinkFromFinishedIndex)(app, file);
	  await app.fileManager.renameFile(file, nextPath);
	  await (0, import_taskIndexEngine.appendTaskLinkToIndex)(app, file);
	  await (0, import_frontmatterEngine.syncTaskTypeTags)(app);
	}
	function resolveUniquePath(app, desiredPath) {
	  const existing = app.vault.getAbstractFileByPath(desiredPath);
	  if (!existing || existing.path === desiredPath)
	    return desiredPath;
	  const dotIndex = desiredPath.lastIndexOf(".");
	  const base = dotIndex > 0 ? desiredPath.slice(0, dotIndex) : desiredPath;
	  const ext = dotIndex > 0 ? desiredPath.slice(dotIndex) : "";
	  return `${base} ${Date.now()}${ext}`;
	}
	async function ensureFolder(app, path) {
	  const segments = path.split("/").filter(Boolean);
	  let currentPath = "";
	  for (const segment of segments) {
	    currentPath = currentPath ? `${currentPath}/${segment}` : segment;
	    const existing = app.vault.getAbstractFileByPath(currentPath);
	    if (isFolder(existing))
	      continue;
	    if (existing)
	      throw new Error(`Cannot create folder "${currentPath}" because a file with that name exists.`);
	    await app.vault.createFolder(currentPath);
	  }
	}
	function isFolder(file) {
	  return file !== null && "children" in file;
	}
	return completionEngine;
}

var orderEngine;
var hasRequiredOrderEngine;

function requireOrderEngine () {
	if (hasRequiredOrderEngine) return orderEngine;
	hasRequiredOrderEngine = 1;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var orderEngine_exports = {};
	__export(orderEngine_exports, {
	  persistTaskOrder: () => persistTaskOrder,
	  reorderList: () => reorderList
	});
	orderEngine = __toCommonJS(orderEngine_exports);
	var import_constants = requireConstants();
	function reorderList(items, fromIndex, toIndex) {
	  if (fromIndex < 0 || toIndex < 0 || fromIndex === toIndex)
	    return items;
	  const next = [...items];
	  const [moved] = next.splice(fromIndex, 1);
	  next.splice(toIndex, 0, moved);
	  return next;
	}
	async function persistTaskOrder(tasks, updater) {
	  for (const [index, task] of tasks.entries())
	    await updater(task, (index + 1) * import_constants.ORDER_STEP);
	}
	return orderEngine;
}

var pomodoroLogEngine;
var hasRequiredPomodoroLogEngine;

function requirePomodoroLogEngine () {
	if (hasRequiredPomodoroLogEngine) return pomodoroLogEngine;
	hasRequiredPomodoroLogEngine = 1;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var pomodoroLogEngine_exports = {};
	__export(pomodoroLogEngine_exports, {
	  appendPomodoroLogEntry: () => appendPomodoroLogEntry,
	  getEntriesByDate: () => getEntriesByDate,
	  readPomodoroLogEntries: () => readPomodoroLogEntries,
	  toLocalDateText: () => toLocalDateText
	});
	pomodoroLogEngine = __toCommonJS(pomodoroLogEngine_exports);
	var import_obsidian = require$$0;
	var import_constants = requireConstants();
	const POMODORO_LOG_PATH = `${import_constants.TAREAS_FOLDER}/${import_constants.POMODORO_LOG_BASENAME}.md`;
	const POMODORO_LOG_HEADER = [
	  "# Registro Pomodoro",
	  "",
	  "| fecha | horario | tipo de pomodoro | tarea | desvio |",
	  "| --- | --- | --- | --- | --- |"
	].join("\n");
	async function appendPomodoroLogEntry(app, input) {
	  await ensurePomodoroLogFile(app);
	  const date = new Date(input.timestampMs);
	  const dateText = toLocalDateText(date);
	  const timeText = toLocalTimeText(date);
	  const typeText = sanitizePipeText(input.type);
	  const taskText = sanitizePipeText(input.task);
	  const deviationText = formatHours(input.deviationHours);
	  const row = `| ${dateText} | ${timeText} | ${typeText} | ${taskText} | ${deviationText} |`;
	  const file = app.vault.getAbstractFileByPath(POMODORO_LOG_PATH);
	  if (!(file instanceof import_obsidian.TFile))
	    return;
	  const current = await app.vault.cachedRead(file);
	  const nextContent = current.trimEnd() ? `${current.trimEnd()}
${row}
` : `${POMODORO_LOG_HEADER}
${row}
`;
	  await app.vault.modify(file, nextContent);
	}
	async function readPomodoroLogEntries(app) {
	  await ensurePomodoroLogFile(app);
	  const file = app.vault.getAbstractFileByPath(POMODORO_LOG_PATH);
	  if (!(file instanceof import_obsidian.TFile))
	    return [];
	  const content = await app.vault.cachedRead(file);
	  const entries = [];
	  const lines = content.split(/\r?\n/);
	  for (const line of lines) {
	    if (!line.trim().startsWith("|"))
	      continue;
	    if (line.includes("fecha | horario | tipo de pomodoro | tarea | desvio"))
	      continue;
	    if (line.includes("| --- |"))
	      continue;
	    const columns = line.split("|").map((item) => item.trim()).filter(Boolean);
	    if (columns.length < 5)
	      continue;
	    const deviationHours = Number.parseFloat(columns[4]);
	    entries.push({
	      date: columns[0],
	      time: columns[1],
	      type: columns[2],
	      task: columns[3],
	      deviationHours: Number.isNaN(deviationHours) ? 0 : deviationHours
	    });
	  }
	  return entries;
	}
	function getEntriesByDate(entries, localDateText) {
	  return entries.filter((entry) => entry.date === localDateText);
	}
	function toLocalDateText(date) {
	  const year = date.getFullYear();
	  const month = String(date.getMonth() + 1).padStart(2, "0");
	  const day = String(date.getDate()).padStart(2, "0");
	  return `${year}-${month}-${day}`;
	}
	function toLocalTimeText(date) {
	  const hours = String(date.getHours()).padStart(2, "0");
	  const minutes = String(date.getMinutes()).padStart(2, "0");
	  return `${hours}:${minutes}`;
	}
	async function ensurePomodoroLogFile(app) {
	  const folder = app.vault.getAbstractFileByPath(import_constants.TAREAS_FOLDER);
	  if (!folder)
	    await app.vault.createFolder(import_constants.TAREAS_FOLDER);
	  const existing = app.vault.getAbstractFileByPath(POMODORO_LOG_PATH);
	  if (existing)
	    return;
	  await app.vault.create(POMODORO_LOG_PATH, `${POMODORO_LOG_HEADER}
`);
	}
	function sanitizePipeText(value) {
	  return value.replace(/\|/g, "/").trim() || "-";
	}
	function formatHours(hours) {
	  return (Math.round(hours * 100) / 100).toFixed(2);
	}
	return pomodoroLogEngine;
}

var colorPicker;
var hasRequiredColorPicker;

function requireColorPicker () {
	if (hasRequiredColorPicker) return colorPicker;
	hasRequiredColorPicker = 1;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var colorPicker_exports = {};
	__export(colorPicker_exports, {
	  createColorPicker: () => createColorPicker
	});
	colorPicker = __toCommonJS(colorPicker_exports);
	function createColorPicker(container, colors, selected, onChange) {
	  const wrap = container.createDiv({ cls: "tareas-color-picker" });
	  for (const color of colors) {
	    const swatch = wrap.createEl("span", { cls: "tareas-color-swatch" });
	    swatch.style.background = color;
	    if (color === selected)
	      swatch.addClass("tareas-swatch-selected");
	    swatch.onclick = () => {
	      onChange(color);
	      markSelected(wrap, swatch);
	      customInput.value = color;
	    };
	  }
	  const customInput = wrap.createEl("input");
	  customInput.type = "color";
	  customInput.value = selected;
	  customInput.className = "tareas-color-input";
	  customInput.oninput = () => {
	    onChange(customInput.value);
	    clearSelected(wrap);
	  };
	  return { wrap, customInput };
	}
	function markSelected(wrap, selectedSwatch) {
	  clearSelected(wrap);
	  selectedSwatch.addClass("tareas-swatch-selected");
	}
	function clearSelected(wrap) {
	  wrap.querySelectorAll(".tareas-color-swatch").forEach((swatch) => swatch.classList.remove("tareas-swatch-selected"));
	}
	return colorPicker;
}

var NewGroupModal_1;
var hasRequiredNewGroupModal;

function requireNewGroupModal () {
	if (hasRequiredNewGroupModal) return NewGroupModal_1;
	hasRequiredNewGroupModal = 1;
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
	  // If the importer is in node compatibility mode or this is not an ESM
	  // file that has been converted to a CommonJS file using a Babel-
	  // compatible transform (i.e. "__esModule" has not been set), then set
	  // "default" to the CommonJS "module.exports" for node compatibility.
	  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
	  mod
	));
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var NewGroupModal_exports = {};
	__export(NewGroupModal_exports, {
	  NewGroupModal: () => NewGroupModal
	});
	NewGroupModal_1 = __toCommonJS(NewGroupModal_exports);
	var obsidian = __toESM(require$$0);
	var import_constants = requireConstants();
	var import_colorPicker = requireColorPicker();
	class NewGroupModal extends obsidian.Modal {
	  plugin;
	  view;
	  data;
	  constructor(app, plugin, view) {
	    super(app);
	    this.plugin = plugin;
	    this.view = view;
	    this.data = { name: "", color: import_constants.PRESET_COLORS[2] };
	  }
	  onOpen() {
	    const { contentEl } = this;
	    contentEl.addClass("tareas-modal");
	    contentEl.createEl("h2", { text: "Nuevo Grupo" });
	    new obsidian.Setting(contentEl).setName("Nombre del grupo").addText((text) => {
	      text.setPlaceholder("Ej: Diarias, semanales...");
	      text.onChange((value) => this.data.name = value);
	      setTimeout(() => text.inputEl.focus(), 50);
	    });
	    const colorSetting = new obsidian.Setting(contentEl).setName("Color");
	    (0, import_colorPicker.createColorPicker)(colorSetting.controlEl, import_constants.PRESET_COLORS, this.data.color, (nextColor) => {
	      this.data.color = nextColor;
	    });
	    const footer = contentEl.createDiv({ cls: "tareas-modal-footer" });
	    const createButton = footer.createEl("button", { text: "Crear grupo", cls: "mod-cta" });
	    createButton.onclick = () => this.createGroup();
	    const cancelButton = footer.createEl("button", { text: "Cancelar" });
	    cancelButton.onclick = () => this.close();
	  }
	  onClose() {
	    this.contentEl.empty();
	  }
	  createGroup() {
	    const groupName = this.data.name.trim();
	    if (!groupName) {
	      new obsidian.Notice("El nombre es requerido");
	      return;
	    }
	    this.plugin.addEquipo(groupName, this.data.color);
	    this.view.expandedGroups.add(groupName);
	    this.view.render();
	    new obsidian.Notice(`Grupo "${groupName}" creado`);
	    this.close();
	  }
	}
	return NewGroupModal_1;
}

var EditSectionModal_1;
var hasRequiredEditSectionModal;

function requireEditSectionModal () {
	if (hasRequiredEditSectionModal) return EditSectionModal_1;
	hasRequiredEditSectionModal = 1;
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
	  // If the importer is in node compatibility mode or this is not an ESM
	  // file that has been converted to a CommonJS file using a Babel-
	  // compatible transform (i.e. "__esModule" has not been set), then set
	  // "default" to the CommonJS "module.exports" for node compatibility.
	  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
	  mod
	));
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var EditSectionModal_exports = {};
	__export(EditSectionModal_exports, {
	  EditSectionModal: () => EditSectionModal
	});
	EditSectionModal_1 = __toCommonJS(EditSectionModal_exports);
	var obsidian = __toESM(require$$0);
	var import_constants = requireConstants();
	var import_frontmatterEngine = requireFrontmatterEngine();
	var import_colorPicker = requireColorPicker();
	class EditSectionModal extends obsidian.Modal {
	  plugin;
	  eqObj;
	  view;
	  data;
	  constructor(app, plugin, eqObj, view) {
	    super(app);
	    this.plugin = plugin;
	    this.eqObj = eqObj;
	    this.view = view;
	    this.data = { name: eqObj.name, color: eqObj.color };
	  }
	  onOpen() {
	    const { contentEl } = this;
	    contentEl.addClass("tareas-modal");
	    contentEl.createEl("h2", { text: "Editar secci\xF3n" });
	    new obsidian.Setting(contentEl).setName("Nombre").addText((text) => {
	      text.setValue(this.data.name);
	      text.onChange((value) => this.data.name = value);
	      setTimeout(() => text.inputEl.focus(), 50);
	    });
	    const colorSetting = new obsidian.Setting(contentEl).setName("Color");
	    (0, import_colorPicker.createColorPicker)(colorSetting.controlEl, import_constants.PRESET_COLORS, this.data.color, (nextColor) => {
	      this.data.color = nextColor;
	    });
	    const footer = contentEl.createDiv({ cls: "tareas-modal-footer" });
	    if (!this.isLockedSection()) {
	      const deleteButton = footer.createEl("button", {
	        text: "Eliminar secci\xF3n",
	        cls: "mod-warning"
	      });
	      deleteButton.style.marginRight = "auto";
	      deleteButton.onclick = () => this.confirmDelete();
	    }
	    const cancelButton = footer.createEl("button", { text: "Cancelar" });
	    cancelButton.onclick = () => this.close();
	    const saveButton = footer.createEl("button", { text: "Guardar", cls: "mod-cta" });
	    saveButton.onclick = () => this.save();
	  }
	  onClose() {
	    this.contentEl.empty();
	  }
	  async save() {
	    const newName = this.data.name.trim();
	    if (!newName) {
	      new obsidian.Notice("El nombre es requerido");
	      return;
	    }
	    const oldName = this.eqObj.name;
	    if (this.isLockedSection() && newName !== oldName) {
	      new obsidian.Notice(`La secci\xF3n "${oldName}" no puede renombrarse`);
	      return;
	    }
	    if (newName !== oldName)
	      await (0, import_frontmatterEngine.renameTeamInTasks)(this.app, oldName, newName);
	    this.plugin.updateEquipo(oldName, { name: newName, color: this.data.color });
	    this.view.expandedGroups.delete(oldName);
	    this.view.expandedGroups.add(newName);
	    this.view.render();
	    this.close();
	  }
	  confirmDelete() {
	    if (this.isLockedSection()) {
	      new obsidian.Notice(`La secci\xF3n "${this.eqObj.name}" no se puede eliminar`);
	      return;
	    }
	    const taskCount = (0, import_frontmatterEngine.countTopLevelTeamTasks)(this.app, this.eqObj.name);
	    if (taskCount > 0) {
	      new obsidian.Notice(`La secci\xF3n "${this.eqObj.name}" tiene ${taskCount} tarea(s). Movalas a otra secci\xF3n antes de eliminar.`);
	      return;
	    }
	    this.plugin.removeEquipo(this.eqObj.name);
	    this.view.expandedGroups.delete(this.eqObj.name);
	    this.view.render();
	    new obsidian.Notice(`Secci\xF3n "${this.eqObj.name}" eliminada`);
	    this.close();
	  }
	  isLockedSection() {
	    return import_constants.LOCKED_EQUIPO_NAMES.includes(this.eqObj.name);
	  }
	}
	return EditSectionModal_1;
}

var EditTaskFileModal_1;
var hasRequiredEditTaskFileModal;

function requireEditTaskFileModal () {
	if (hasRequiredEditTaskFileModal) return EditTaskFileModal_1;
	hasRequiredEditTaskFileModal = 1;
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
	  // If the importer is in node compatibility mode or this is not an ESM
	  // file that has been converted to a CommonJS file using a Babel-
	  // compatible transform (i.e. "__esModule" has not been set), then set
	  // "default" to the CommonJS "module.exports" for node compatibility.
	  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
	  mod
	));
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var EditTaskFileModal_exports = {};
	__export(EditTaskFileModal_exports, {
	  EditTaskFileModal: () => EditTaskFileModal
	});
	EditTaskFileModal_1 = __toCommonJS(EditTaskFileModal_exports);
	var obsidian = __toESM(require$$0);
	class EditTaskFileModal extends obsidian.Modal {
	  task;
	  textarea = null;
	  initialContent = "";
	  constructor(app, task) {
	    super(app);
	    this.task = task;
	  }
	  onOpen() {
	    const { contentEl } = this;
	    this.modalEl.addClass("tareas-edit-task-modal-shell");
	    contentEl.addClass("tareas-modal");
	    contentEl.addClass("tareas-edit-task-modal");
	    contentEl.createEl("h2", { text: `Editar: ${this.task.tarea}` });
	    const helper = contentEl.createEl("p", { cls: "tareas-edit-task-hint" });
	    helper.setText(`Edita el contenido completo de ${this.task.file.path}`);
	    this.textarea = contentEl.createEl("textarea", {
	      cls: "tareas-edit-task-textarea",
	      attr: {
	        spellcheck: "false"
	      }
	    });
	    const footer = contentEl.createDiv({ cls: "tareas-modal-footer" });
	    const cancelButton = footer.createEl("button", { text: "Cancelar" });
	    cancelButton.onclick = () => this.close();
	    const saveButton = footer.createEl("button", { text: "Guardar", cls: "mod-cta" });
	    saveButton.onclick = () => {
	      void this.save();
	    };
	    void this.loadFileContent();
	  }
	  onClose() {
	    this.contentEl.empty();
	  }
	  async loadFileContent() {
	    if (!this.textarea)
	      return;
	    const content = await this.app.vault.cachedRead(this.task.file);
	    this.initialContent = content;
	    this.textarea.value = content;
	    this.textarea.focus();
	    this.textarea.setSelectionRange(0, 0);
	  }
	  async save() {
	    if (!this.textarea)
	      return;
	    const nextContent = this.textarea.value;
	    if (nextContent === this.initialContent) {
	      this.close();
	      return;
	    }
	    await this.app.vault.modify(this.task.file, nextContent);
	    new obsidian.Notice("Tarea actualizada");
	    this.close();
	  }
	}
	return EditTaskFileModal_1;
}

var AddTaskCommentModal_1;
var hasRequiredAddTaskCommentModal;

function requireAddTaskCommentModal () {
	if (hasRequiredAddTaskCommentModal) return AddTaskCommentModal_1;
	hasRequiredAddTaskCommentModal = 1;
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
	  // If the importer is in node compatibility mode or this is not an ESM
	  // file that has been converted to a CommonJS file using a Babel-
	  // compatible transform (i.e. "__esModule" has not been set), then set
	  // "default" to the CommonJS "module.exports" for node compatibility.
	  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
	  mod
	));
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var AddTaskCommentModal_exports = {};
	__export(AddTaskCommentModal_exports, {
	  AddTaskCommentModal: () => AddTaskCommentModal
	});
	AddTaskCommentModal_1 = __toCommonJS(AddTaskCommentModal_exports);
	var obsidian = __toESM(require$$0);
	class AddTaskCommentModal extends obsidian.Modal {
	  task;
	  textarea = null;
	  constructor(app, task) {
	    super(app);
	    this.task = task;
	  }
	  onOpen() {
	    const { contentEl } = this;
	    contentEl.addClass("tareas-modal");
	    contentEl.createEl("h2", { text: `Comentario: ${this.task.tarea}` });
	    const help = contentEl.createEl("p", { cls: "tareas-comment-modal-hint" });
	    help.setText("Se agregar\xE1 al final del archivo de la tarea.");
	    this.textarea = contentEl.createEl("textarea", {
	      cls: "tareas-comment-modal-textarea",
	      attr: { placeholder: "Escribe un comentario..." }
	    });
	    this.textarea.focus();
	    const footer = contentEl.createDiv({ cls: "tareas-modal-footer" });
	    const cancelButton = footer.createEl("button", { text: "Cancelar" });
	    cancelButton.onclick = () => this.close();
	    const addButton = footer.createEl("button", { text: "Agregar", cls: "mod-cta" });
	    addButton.onclick = () => {
	      void this.appendComment();
	    };
	  }
	  onClose() {
	    this.contentEl.empty();
	  }
	  async appendComment() {
	    const rawComment = this.textarea?.value ?? "";
	    const comment = rawComment.trim();
	    if (!comment) {
	      new obsidian.Notice("Escribe un comentario antes de guardar");
	      return;
	    }
	    const current = await this.app.vault.cachedRead(this.task.file);
	    const hasContent = current.trim().length > 0;
	    const withNewline = current.endsWith("\n") ? current : `${current}
`;
	    const spacer = hasContent ? "\n" : "";
	    const commentBlock = this.buildCommentBlock(comment);
	    const next = `${withNewline}${spacer}${commentBlock}`;
	    await this.app.vault.modify(this.task.file, next);
	    new obsidian.Notice("Comentario agregado");
	    this.close();
	  }
	  buildCommentBlock(comment) {
	    const now = /* @__PURE__ */ new Date();
	    const day = String(now.getDate()).padStart(2, "0");
	    const month = String(now.getMonth() + 1).padStart(2, "0");
	    const year = now.getFullYear();
	    const hours = String(now.getHours()).padStart(2, "0");
	    const minutes = String(now.getMinutes()).padStart(2, "0");
	    const stamp = `${day}/${month}/${year} ${hours}:${minutes}`;
	    return `## Comentario - ${stamp}

${comment}
`;
	  }
	}
	return AddTaskCommentModal_1;
}

var PomodoroPresetModal_1;
var hasRequiredPomodoroPresetModal;

function requirePomodoroPresetModal () {
	if (hasRequiredPomodoroPresetModal) return PomodoroPresetModal_1;
	hasRequiredPomodoroPresetModal = 1;
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
	  // If the importer is in node compatibility mode or this is not an ESM
	  // file that has been converted to a CommonJS file using a Babel-
	  // compatible transform (i.e. "__esModule" has not been set), then set
	  // "default" to the CommonJS "module.exports" for node compatibility.
	  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
	  mod
	));
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var PomodoroPresetModal_exports = {};
	__export(PomodoroPresetModal_exports, {
	  PomodoroPresetModal: () => PomodoroPresetModal,
	  getPomodoroPresetCardData: () => getPomodoroPresetCardData
	});
	PomodoroPresetModal_1 = __toCommonJS(PomodoroPresetModal_exports);
	var obsidian = __toESM(require$$0);
	const POMODORO_PRESETS = [
	  {
	    id: "standard-25-5",
	    title: "\u2B50 Est\xE1ndar - 25/5",
	    workLabel: "Trabajo: 25 min",
	    shortBreakLabel: "Descanso corto: 5 min",
	    cyclesLabel: "Ciclos: 4",
	    longBreakLabel: "Descanso largo: 15 min",
	    idealFor: "Ideal para: tareas moderadas, programaci\xF3n, estudio, mantener ritmo constante sin quemarse.",
	    durations: { workMinutes: 25, shortBreakMinutes: 5, longBreakMinutes: 15 }
	  },
	  {
	    id: "deep-focus-50-10",
	    title: "\u26A1 Para foco profundo - 50/10",
	    workLabel: "Trabajo: 50 min",
	    shortBreakLabel: "Descanso corto: 10 min",
	    cyclesLabel: "Ciclos: 3",
	    longBreakLabel: "Descanso largo: 20 min",
	    idealFor: 'Ideal para: programaci\xF3n pesada, debugging, investigaci\xF3n, escritura larga. Cuando te met\xE9s en "deep work".',
	    durations: { workMinutes: 50, shortBreakMinutes: 10, longBreakMinutes: 20 }
	  },
	  {
	    id: "dev-classic-52-17",
	    title: "\u{1F4BB} Cl\xE1sico de programadores - 52/17",
	    workLabel: "Trabajo: 52 min",
	    shortBreakLabel: "Descanso corto: 17 min",
	    cyclesLabel: "Ciclos: 2",
	    longBreakLabel: "Descanso largo: 20 min",
	    idealFor: "Ideal para: tareas complejas que requieren fluir sin cortes largos. Mantiene energ\xEDa alta.",
	    durations: { workMinutes: 52, shortBreakMinutes: 17, longBreakMinutes: 20 }
	  },
	  {
	    id: "creative-40-10",
	    title: "\u{1F3A8} Creativo - 40/10",
	    workLabel: "Trabajo: 40 min",
	    shortBreakLabel: "Descanso corto: 10 min",
	    cyclesLabel: "Ciclos: 4",
	    longBreakLabel: "Descanso largo: 20 min",
	    idealFor: "Ideal para: dise\xF1o, escritura creativa, brainstorming, donde quer\xE9s tiempo para entrar en estado.",
	    durations: { workMinutes: 40, shortBreakMinutes: 10, longBreakMinutes: 20 }
	  },
	  {
	    id: "sprint-45-15",
	    title: "\u{1F528} Sprint - 45/15",
	    workLabel: "Trabajo: 45 min",
	    shortBreakLabel: "Descanso corto: 15 min",
	    cyclesLabel: "Ciclos: 3",
	    longBreakLabel: "Descanso largo: 25 min",
	    idealFor: "Ideal para: tareas grandes donde necesit\xE1s empujar fuerte (refactors, documentaci\xF3n, an\xE1lisis).",
	    durations: { workMinutes: 45, shortBreakMinutes: 15, longBreakMinutes: 25 }
	  },
	  {
	    id: "adhd-20-5",
	    title: "\u{1F9E0} Para TDAH o mucha distracci\xF3n - 20/5",
	    workLabel: "Trabajo: 20 min",
	    shortBreakLabel: "Descanso corto: 5 min",
	    cyclesLabel: "Ciclos: 4",
	    longBreakLabel: "Descanso largo: 15 min",
	    idealFor: "Ideal para: cuando te cuesta engancharte o mantener foco sostenido. Entradas cortas pero efectivas.",
	    durations: { workMinutes: 20, shortBreakMinutes: 5, longBreakMinutes: 15 }
	  },
	  {
	    id: "micro-15-5",
	    title: "\u{1F4C9} Micro-Pomodoro - 15/5",
	    workLabel: "Trabajo: 15 min",
	    shortBreakLabel: "Descanso corto: 5 min",
	    cyclesLabel: "Ciclos: 4",
	    longBreakLabel: "Descanso largo: 15 min",
	    idealFor: "Ideal para: tareas chicas, revisar mails, ordenar pendientes, cuando est\xE1s mentalmente muy cansado.",
	    durations: { workMinutes: 15, shortBreakMinutes: 5, longBreakMinutes: 15 }
	  },
	  {
	    id: "low-energy-15-3",
	    title: "\u{1F50B} Energ\xEDa baja - 15/3",
	    workLabel: "Trabajo: 15 min",
	    shortBreakLabel: "Descanso corto: 3 min",
	    cyclesLabel: "Ciclos: 4",
	    longBreakLabel: "Descanso largo: 12 min",
	    idealFor: "Ideal para: d\xEDas de fatiga mental, tareas ligeras, avanzar lento pero constante.",
	    durations: { workMinutes: 15, shortBreakMinutes: 3, longBreakMinutes: 12 }
	  },
	  {
	    id: "ultradian-90-20",
	    title: "\u{1F9F1} Ciclos ultradianos - 90/20",
	    workLabel: "Trabajo: 90 min",
	    shortBreakLabel: "Descanso corto: no aplica",
	    cyclesLabel: "Ciclos: 2 por sesi\xF3n",
	    longBreakLabel: "Descanso largo: 20 min",
	    idealFor: "Ideal para: sesiones creativas profundas o de ingenier\xEDa donde cortar es contraproducente.",
	    durations: { workMinutes: 90, shortBreakMinutes: 20, longBreakMinutes: 20 }
	  },
	  {
	    id: "aggressive-50-5",
	    title: "\u{1F9E9} 50/5 (agresivo)",
	    workLabel: "Trabajo: 50 min",
	    shortBreakLabel: "Descanso corto: 5 min",
	    cyclesLabel: "Ciclos: 3",
	    longBreakLabel: "Descanso largo: 20 min",
	    idealFor: "Ideal para: tareas de alta presi\xF3n o entregas donde quer\xE9s minimizar pausas.",
	    durations: { workMinutes: 50, shortBreakMinutes: 5, longBreakMinutes: 20 }
	  },
	  {
	    id: "balanced-30-10",
	    title: "\u{1FAB6} 30/10 (balanceado)",
	    workLabel: "Trabajo: 30 min",
	    shortBreakLabel: "Descanso corto: 10 min",
	    cyclesLabel: "Ciclos: 4",
	    longBreakLabel: "Descanso largo: 20 min",
	    idealFor: "Ideal para: tareas de an\xE1lisis, administraci\xF3n, contabilidad mental liviana o research variado.",
	    durations: { workMinutes: 30, shortBreakMinutes: 10, longBreakMinutes: 20 }
	  }
	];
	function getPomodoroPresetCardData(durations) {
	  const preset = findPomodoroPresetByDurations(durations);
	  if (preset) {
	    return {
	      title: preset.title,
	      usage: preset.idealFor.replace(/^Ideal para:\s*/i, ""),
	      workLabel: preset.workLabel,
	      shortBreakLabel: preset.shortBreakLabel,
	      longBreakLabel: preset.longBreakLabel,
	      cyclesLabel: preset.cyclesLabel
	    };
	  }
	  return {
	    title: `Personalizado - ${durations.workMinutes}/${durations.shortBreakMinutes}`,
	    usage: "Configuraci\xF3n manual guardada.",
	    workLabel: `Trabajo: ${durations.workMinutes} min`,
	    shortBreakLabel: `Descanso corto: ${durations.shortBreakMinutes} min`,
	    longBreakLabel: `Descanso largo: ${durations.longBreakMinutes} min`,
	    cyclesLabel: "Ciclos: 4"
	  };
	}
	function findPomodoroPresetByDurations(durations) {
	  for (const preset of POMODORO_PRESETS) {
	    if (preset.durations.workMinutes === durations.workMinutes && preset.durations.shortBreakMinutes === durations.shortBreakMinutes && preset.durations.longBreakMinutes === durations.longBreakMinutes) {
	      return preset;
	    }
	  }
	  return null;
	}
	class PomodoroPresetModal extends obsidian.Modal {
	  onAccept;
	  selectedPresetId;
	  cardById = /* @__PURE__ */ new Map();
	  constructor(app, currentDurations, onAccept) {
	    super(app);
	    this.onAccept = onAccept;
	    const matched = findPomodoroPresetByDurations(currentDurations);
	    this.selectedPresetId = matched?.id ?? POMODORO_PRESETS[0].id;
	  }
	  onOpen() {
	    this.modalEl.addClass("tareas-pomodoro-preset-modal-shell");
	    const { contentEl } = this;
	    contentEl.addClass("tareas-modal", "tareas-pomodoro-preset-modal");
	    contentEl.createEl("h2", { text: "Eleg\xED un preset Pomodoro" });
	    const cards = contentEl.createDiv({ cls: "tareas-pomodoro-preset-cards" });
	    for (const preset of POMODORO_PRESETS) {
	      const card = cards.createDiv({ cls: "tareas-pomodoro-preset-card" });
	      card.setAttr("role", "button");
	      card.setAttr("tabindex", "0");
	      card.onclick = () => this.selectPreset(preset.id);
	      card.onkeydown = (event) => {
	        if (event.key !== "Enter" && event.key !== " ")
	          return;
	        event.preventDefault();
	        this.selectPreset(preset.id);
	      };
	      card.createEl("h3", { cls: "tareas-pomodoro-preset-title", text: preset.title });
	      card.createDiv({ cls: "tareas-pomodoro-preset-divider" });
	      card.createEl("p", { cls: "tareas-pomodoro-preset-usage-title", text: "Uso" });
	      card.createEl("p", {
	        cls: "tareas-pomodoro-preset-usage",
	        text: preset.idealFor.replace(/^Ideal para:\s*/i, "")
	      });
	      card.createDiv({ cls: "tareas-pomodoro-preset-divider" });
	      card.createEl("p", { cls: "tareas-pomodoro-preset-line", text: preset.workLabel });
	      card.createEl("p", { cls: "tareas-pomodoro-preset-line", text: preset.shortBreakLabel });
	      card.createEl("p", { cls: "tareas-pomodoro-preset-line", text: preset.longBreakLabel });
	      card.createEl("p", { cls: "tareas-pomodoro-preset-line", text: preset.cyclesLabel });
	      this.cardById.set(preset.id, card);
	    }
	    this.refreshSelection();
	    const footer = contentEl.createDiv({ cls: "tareas-modal-footer" });
	    const cancelButton = footer.createEl("button", { text: "Cancelar" });
	    cancelButton.onclick = () => this.close();
	    const acceptButton = footer.createEl("button", { text: "Aceptar", cls: "mod-cta" });
	    acceptButton.onclick = () => this.accept();
	  }
	  onClose() {
	    this.modalEl.removeClass("tareas-pomodoro-preset-modal-shell");
	    this.cardById.clear();
	    this.contentEl.empty();
	  }
	  selectPreset(presetId) {
	    this.selectedPresetId = presetId;
	    this.refreshSelection();
	  }
	  refreshSelection() {
	    for (const preset of POMODORO_PRESETS) {
	      const card = this.cardById.get(preset.id);
	      if (!card)
	        continue;
	      card.toggleClass("is-selected", this.selectedPresetId === preset.id);
	    }
	  }
	  accept() {
	    const selected = POMODORO_PRESETS.find((preset) => preset.id === this.selectedPresetId);
	    if (!selected)
	      return;
	    this.onAccept({ ...selected.durations });
	    this.close();
	  }
	}
	return PomodoroPresetModal_1;
}

var SelectPomodoroTaskModal_1;
var hasRequiredSelectPomodoroTaskModal;

function requireSelectPomodoroTaskModal () {
	if (hasRequiredSelectPomodoroTaskModal) return SelectPomodoroTaskModal_1;
	hasRequiredSelectPomodoroTaskModal = 1;
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
	  // If the importer is in node compatibility mode or this is not an ESM
	  // file that has been converted to a CommonJS file using a Babel-
	  // compatible transform (i.e. "__esModule" has not been set), then set
	  // "default" to the CommonJS "module.exports" for node compatibility.
	  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
	  mod
	));
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var SelectPomodoroTaskModal_exports = {};
	__export(SelectPomodoroTaskModal_exports, {
	  SelectPomodoroTaskModal: () => SelectPomodoroTaskModal
	});
	SelectPomodoroTaskModal_1 = __toCommonJS(SelectPomodoroTaskModal_exports);
	var obsidian = __toESM(require$$0);
	class SelectPomodoroTaskModal extends obsidian.Modal {
	  tasks;
	  selectedTaskPath;
	  onSelect;
	  constructor(app, tasks, selectedTaskPath, onSelect) {
	    super(app);
	    this.tasks = [...tasks].sort((a, b) => a.tarea.localeCompare(b.tarea));
	    this.selectedTaskPath = selectedTaskPath;
	    this.onSelect = onSelect;
	  }
	  onOpen() {
	    this.modalEl.addClass("tareas-pomodoro-task-modal-shell");
	    const { contentEl } = this;
	    contentEl.addClass("tareas-modal", "tareas-pomodoro-task-modal");
	    contentEl.createEl("h2", { text: "Seleccionar tarea para Pomodoro" });
	    if (this.tasks.length === 0) {
	      contentEl.createEl("p", {
	        cls: "tareas-pomodoro-task-empty",
	        text: "No hay tareas padre en curso disponibles."
	      });
	    } else {
	      const list = contentEl.createDiv({ cls: "tareas-pomodoro-task-list" });
	      for (const task of this.tasks) {
	        const item = list.createDiv({
	          cls: `tareas-pomodoro-task-item${this.selectedTaskPath === task.file.path ? " is-selected" : ""}`
	        });
	        item.setAttr("role", "button");
	        item.setAttr("tabindex", "0");
	        item.createEl("p", { cls: "tareas-pomodoro-task-name", text: task.tarea });
	        const details = [
	          task.equipo ? `Equipo: ${task.equipo}` : null,
	          `Estado: ${task.estado}`
	        ].filter(Boolean).join(" \xB7 ");
	        item.createEl("p", { cls: "tareas-pomodoro-task-meta", text: details });
	        const select = () => {
	          this.onSelect(task.file.path);
	          this.close();
	        };
	        item.onclick = select;
	        item.onkeydown = (event) => {
	          if (event.key !== "Enter" && event.key !== " ")
	            return;
	          event.preventDefault();
	          select();
	        };
	      }
	    }
	    const footer = contentEl.createDiv({ cls: "tareas-modal-footer" });
	    const cancelButton = footer.createEl("button", { text: "Cancelar" });
	    cancelButton.onclick = () => this.close();
	  }
	  onClose() {
	    this.modalEl.removeClass("tareas-pomodoro-task-modal-shell");
	    this.contentEl.empty();
	  }
	}
	return SelectPomodoroTaskModal_1;
}

var dropdown;
var hasRequiredDropdown;

function requireDropdown () {
	if (hasRequiredDropdown) return dropdown;
	hasRequiredDropdown = 1;
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
	  // If the importer is in node compatibility mode or this is not an ESM
	  // file that has been converted to a CommonJS file using a Babel-
	  // compatible transform (i.e. "__esModule" has not been set), then set
	  // "default" to the CommonJS "module.exports" for node compatibility.
	  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
	  mod
	));
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var dropdown_exports = {};
	__export(dropdown_exports, {
	  showDropdown: () => showDropdown
	});
	dropdown = __toCommonJS(dropdown_exports);
	var obsidian = __toESM(require$$0);
	function showDropdown(anchor, options, current, onSelect) {
	  const menu = new obsidian.Menu();
	  for (const option of options) {
	    menu.addItem((item) => {
	      item.setTitle(`${option === current ? "\u2713 " : "  "}${option}`);
	      item.onClick(() => onSelect(option));
	    });
	  }
	  const rect = anchor.getBoundingClientRect();
	  menu.showAtPosition({ x: rect.left, y: rect.bottom + 4 });
	}
	return dropdown;
}

var debounce_1;
var hasRequiredDebounce;

function requireDebounce () {
	if (hasRequiredDebounce) return debounce_1;
	hasRequiredDebounce = 1;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var debounce_exports = {};
	__export(debounce_exports, {
	  debounce: () => debounce
	});
	debounce_1 = __toCommonJS(debounce_exports);
	function debounce(fn, ms) {
	  let timeout;
	  return (...args) => {
	    clearTimeout(timeout);
	    timeout = setTimeout(() => fn(...args), ms);
	  };
	}
	return debounce_1;
}

var TareasView_1;
var hasRequiredTareasView;

function requireTareasView () {
	if (hasRequiredTareasView) return TareasView_1;
	hasRequiredTareasView = 1;
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
	  // If the importer is in node compatibility mode or this is not an ESM
	  // file that has been converted to a CommonJS file using a Babel-
	  // compatible transform (i.e. "__esModule" has not been set), then set
	  // "default" to the CommonJS "module.exports" for node compatibility.
	  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
	  mod
	));
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var TareasView_exports = {};
	__export(TareasView_exports, {
	  TareasView: () => TareasView
	});
	TareasView_1 = __toCommonJS(TareasView_exports);
	var obsidian = __toESM(require$$0);
	var import_constants = requireConstants();
	var import_completionEngine = requireCompletionEngine();
	var import_frontmatterEngine = requireFrontmatterEngine();
	var import_orderEngine = requireOrderEngine();
	var import_pomodoroEngine = requirePomodoroEngine();
	var import_pomodoroLogEngine = requirePomodoroLogEngine();
	var import_scheduleEngine = requireScheduleEngine();
	var import_taskEngine = requireTaskEngine();
	var import_NewGroupModal = requireNewGroupModal();
	var import_NewTaskModal = requireNewTaskModal();
	var import_EditSectionModal = requireEditSectionModal();
	var import_EditTaskFileModal = requireEditTaskFileModal();
	var import_AddTaskCommentModal = requireAddTaskCommentModal();
	var import_PomodoroPresetModal = requirePomodoroPresetModal();
	var import_SelectPomodoroTaskModal = requireSelectPomodoroTaskModal();
	var import_dropdown = requireDropdown();
	var import_debounce = requireDebounce();
	class TareasView extends obsidian.ItemView {
	  plugin;
	  expandedGroups;
	  expandedTasks;
	  expandedCardSubtasks;
	  debouncedRender;
	  dragGroup = null;
	  dragPath = null;
	  dragDepth = null;
	  dragParent = null;
	  activeTab = "active";
	  pomodoroPanelEl = null;
	  pomodoroTimeEl = null;
	  pomodoroProgressEl = null;
	  pomodoroPhaseEl = null;
	  pomodoroCycleEl = null;
	  pomodoroStateEl = null;
	  pomodoroAudioContext = null;
	  constructor(leaf, plugin) {
	    super(leaf);
	    this.plugin = plugin;
	    this.expandedGroups = new Set(plugin.equipos.map((equipo) => equipo.name));
	    this.expandedTasks = /* @__PURE__ */ new Set();
	    this.expandedCardSubtasks = /* @__PURE__ */ new Set();
	    this.debouncedRender = (0, import_debounce.debounce)(() => this.render(), 250);
	  }
	  getViewType() {
	    return import_constants.VIEW_TYPE;
	  }
	  getDisplayText() {
	    return "Tareas";
	  }
	  getIcon() {
	    return "list-checks";
	  }
	  async onOpen() {
	    const root = this.getRootEl();
	    root.addClass("tareas-root");
	    await this.render();
	    this.registerInterval(window.setInterval(() => {
	      void this.handlePomodoroTick();
	    }, 1e3));
	    this.registerEvent(this.app.metadataCache.on("resolved", this.debouncedRender));
	    this.registerEvent(this.app.vault.on("create", this.debouncedRender));
	    this.registerEvent(this.app.vault.on("delete", this.debouncedRender));
	    this.registerEvent(this.app.vault.on("rename", this.debouncedRender));
	  }
	  async onClose() {
	    if (this.pomodoroAudioContext) {
	      try {
	        await this.pomodoroAudioContext.close();
	      } catch {
	      }
	      this.pomodoroAudioContext = null;
	    }
	  }
	  async render() {
	    const root = this.getRootEl();
	    root.empty();
	    this.resetPomodoroDomRefs();
	    this.renderHeader(root);
	    this.renderTabs(root);
	    if (this.activeTab === "pomodoro") {
	      await this.renderPomodoroPanel(root);
	      return;
	    }
	    const allTasks = (0, import_taskEngine.getTasks)(this.app);
	    const tabTasks = this.activeTab === "completed" ? allTasks.filter((task) => (0, import_taskEngine.isTaskInCompletedFolder)(task.file.path)) : allTasks.filter((task) => !(0, import_taskEngine.isTaskInCompletedFolder)(task.file.path));
	    const groups = (0, import_taskEngine.groupTopLevelTasks)(tabTasks, this.plugin.equipos);
	    if (this.activeTab === "completed") {
	      this.renderCompletedTable(root, tabTasks);
	      return;
	    }
	    const taskPreviewMap = await this.buildTaskPreviewMap(tabTasks);
	    const board = root.createDiv({ cls: "tareas-board" });
	    for (const team of this.plugin.equipos)
	      this.renderGroup(board, team, groups[team.name] || [], tabTasks, taskPreviewMap);
	    if (groups["Sin equipo"]?.length)
	      this.renderGroup(board, { name: "Sin equipo", color: "var(--text-faint)" }, groups["Sin equipo"], tabTasks, taskPreviewMap);
	    if (this.activeTab === "active") {
	      const addGroup = root.createDiv({ cls: "tareas-new-group" });
	      const addGroupLink = addGroup.createEl("span", { text: "+ Nuevo grupo", cls: "tareas-add-link" });
	      addGroupLink.onclick = () => new import_NewGroupModal.NewGroupModal(this.app, this.plugin, this).open();
	    }
	  }
	  renderCompletedTable(root, tasks) {
	    const wrap = root.createDiv({ cls: "tareas-table-wrap" });
	    const table = wrap.createEl("table", { cls: "tareas-table" });
	    const columns = ["", "", "Tarea", "Estado", "Equipo", "Prioridad", "Dedicado", "Estimaci\xF3n", "Inicio", "Fin", "%", "Acciones"];
	    const tableHead = table.createEl("thead");
	    const headRow = tableHead.createEl("tr");
	    for (const column of columns) {
	      const headerCell = headRow.createEl("th", { text: column });
	      if (["Dedicado", "Estimaci\xF3n", "%"].includes(column))
	        headerCell.addClass("tareas-th-num");
	    }
	    const tableBody = table.createEl("tbody");
	    const topLevelTasks = tasks.filter((task) => !task.parent).sort((a, b) => a.order - b.order);
	    for (const task of topLevelTasks)
	      this.renderRow(tableBody, task, tasks, 0);
	  }
	  renderTabs(root) {
	    const tabs = root.createDiv({ cls: "tareas-tabs" });
	    const activeBtn = tabs.createEl("button", {
	      text: "Activas",
	      cls: `tareas-tab-btn${this.activeTab === "active" ? " is-active" : ""}`
	    });
	    activeBtn.onclick = () => {
	      this.activeTab = "active";
	      this.render();
	    };
	    const completedBtn = tabs.createEl("button", {
	      text: "Completadas",
	      cls: `tareas-tab-btn${this.activeTab === "completed" ? " is-active" : ""}`
	    });
	    completedBtn.onclick = () => {
	      this.activeTab = "completed";
	      this.render();
	    };
	    const pomodoroBtn = tabs.createEl("button", {
	      text: "Pomodoro",
	      cls: `tareas-tab-btn${this.activeTab === "pomodoro" ? " is-active" : ""}`
	    });
	    pomodoroBtn.onclick = () => {
	      this.activeTab = "pomodoro";
	      this.render();
	    };
	  }
	  async renderPomodoroPanel(root) {
	    const runtimeState = this.getPomodoroRuntimeState(true);
	    const panel = root.createDiv({ cls: "tareas-pomodoro-panel" });
	    this.pomodoroPanelEl = panel;
	    const top = panel.createDiv({ cls: "tareas-pomodoro-top" });
	    this.pomodoroPhaseEl = top.createEl("h2", { cls: "tareas-pomodoro-phase" });
	    this.pomodoroCycleEl = top.createEl("span", { cls: "tareas-pomodoro-cycles" });
	    const timerWrap = panel.createDiv({ cls: "tareas-pomodoro-timer-wrap" });
	    this.pomodoroProgressEl = timerWrap.createDiv({ cls: "tareas-pomodoro-progress" });
	    const timerInner = this.pomodoroProgressEl.createDiv({ cls: "tareas-pomodoro-progress-inner" });
	    this.pomodoroTimeEl = timerInner.createEl("div", { cls: "tareas-pomodoro-time" });
	    const controls = panel.createDiv({ cls: "tareas-pomodoro-controls" });
	    this.renderPomodoroControls(controls, runtimeState);
	    this.pomodoroStateEl = panel.createEl("div", { cls: "tareas-pomodoro-state-bar" });
	    const config = panel.createDiv({ cls: "tareas-pomodoro-config" });
	    config.createEl("h3", { text: "Duraciones (min)" });
	    this.renderPomodoroDurationCard(config, runtimeState.durations);
	    await this.renderPomodoroTaskCard(panel);
	    await this.renderPomodoroDailyLog(panel);
	    this.updatePomodoroDom(runtimeState, Date.now());
	  }
	  renderPomodoroDurationCard(container, durations) {
	    const cardData = (0, import_PomodoroPresetModal.getPomodoroPresetCardData)(durations);
	    const card = container.createDiv({ cls: "tareas-pomodoro-config-card" });
	    card.setAttr("role", "button");
	    card.setAttr("tabindex", "0");
	    card.ondblclick = () => this.openPomodoroPresetModal(durations);
	    card.onkeydown = (event) => {
	      if (event.key !== "Enter" && event.key !== " ")
	        return;
	      event.preventDefault();
	      this.openPomodoroPresetModal(durations);
	    };
	    card.createEl("h4", { cls: "tareas-pomodoro-config-card-title", text: cardData.title });
	    card.createDiv({ cls: "tareas-pomodoro-config-card-divider" });
	    card.createEl("p", { cls: "tareas-pomodoro-config-card-label", text: "Uso" });
	    card.createEl("p", { cls: "tareas-pomodoro-config-card-text", text: cardData.usage });
	    card.createDiv({ cls: "tareas-pomodoro-config-card-divider" });
	    card.createEl("p", { cls: "tareas-pomodoro-config-card-text", text: cardData.workLabel });
	    card.createEl("p", { cls: "tareas-pomodoro-config-card-text", text: cardData.shortBreakLabel });
	    card.createEl("p", { cls: "tareas-pomodoro-config-card-text", text: cardData.longBreakLabel });
	    card.createEl("p", { cls: "tareas-pomodoro-config-card-text", text: cardData.cyclesLabel });
	    card.createEl("p", { cls: "tareas-pomodoro-config-card-hint", text: "Doble click para cambiar duraci\xF3n" });
	  }
	  openPomodoroPresetModal(durations) {
	    new import_PomodoroPresetModal.PomodoroPresetModal(this.app, durations, (nextDurations) => {
	      this.updatePomodoroDurations(nextDurations);
	      this.render();
	    }).open();
	  }
	  async renderPomodoroTaskCard(container) {
	    const section = container.createDiv({ cls: "tareas-pomodoro-task-section" });
	    section.createEl("h3", { text: "Tarea vinculada" });
	    const isRunning = this.plugin.pomodoro.runState === "running";
	    const selectedTask = this.getSelectedPomodoroTask();
	    if (selectedTask) {
	      const allTasks = (0, import_taskEngine.getTasks)(this.app);
	      const taskPreviewMap = await this.buildTaskPreviewMap([selectedTask]);
	      const list = section.createDiv({ cls: "tareas-card-list tareas-pomodoro-task-card-list" });
	      this.renderTaskCard(list, selectedTask, allTasks, taskPreviewMap.get(selectedTask.file.path) || "");
	      section.createEl("p", { cls: "tareas-pomodoro-task-card-hint", text: "Us\xE1 el bot\xF3n para cambiar la tarea vinculada" });
	    } else {
	      const emptyCard = section.createDiv({ cls: "tareas-pomodoro-task-card" });
	      emptyCard.createEl("p", {
	        cls: "tareas-pomodoro-task-card-empty",
	        text: "No hay tarea seleccionada"
	      });
	      emptyCard.createEl("p", {
	        cls: "tareas-pomodoro-task-card-hint",
	        text: "Seleccion\xE1 una tarea con el bot\xF3n"
	      });
	    }
	    const changeButton = section.createEl("button", {
	      text: "Cambiar tarea vinculada",
	      cls: "tareas-pomodoro-btn tareas-pomodoro-task-change-btn"
	    });
	    changeButton.disabled = isRunning;
	    changeButton.setAttr("aria-label", "Cambiar tarea vinculada");
	    changeButton.setAttr("title", isRunning ? "No se puede cambiar la tarea mientras el contador est\xE1 corriendo" : "Cambiar tarea vinculada");
	    changeButton.onclick = () => this.openPomodoroTaskSelector();
	  }
	  getSelectedPomodoroTask() {
	    const selectedTaskPath = this.plugin.pomodoro.selectedTaskPath;
	    if (!selectedTaskPath)
	      return null;
	    const task = (0, import_taskEngine.getTasks)(this.app).find((item) => item.file.path === selectedTaskPath);
	    if (task)
	      return task;
	    this.setPomodoroSelectedTaskPath(null);
	    return null;
	  }
	  openPomodoroTaskSelector() {
	    if (this.plugin.pomodoro.runState === "running") {
	      new obsidian.Notice("No se puede cambiar la tarea mientras el contador est\xE1 corriendo.");
	      return;
	    }
	    const allTasks = (0, import_taskEngine.getTasks)(this.app);
	    const selectableTasks = allTasks.filter((task) => !task.parent).filter((task) => task.estado === "En progreso").filter((task) => !(0, import_taskEngine.isTaskInCompletedFolder)(task.file.path));
	    new import_SelectPomodoroTaskModal.SelectPomodoroTaskModal(
	      this.app,
	      selectableTasks,
	      this.plugin.pomodoro.selectedTaskPath,
	      (taskPath) => {
	        this.setPomodoroSelectedTaskPath(taskPath);
	        this.render();
	      }
	    ).open();
	  }
	  setPomodoroSelectedTaskPath(taskPath) {
	    this.plugin.setPomodoroState({
	      ...this.plugin.pomodoro,
	      durations: { ...this.plugin.pomodoro.durations },
	      selectedTaskPath: taskPath
	    });
	  }
	  renderPomodoroControls(container, state) {
	    const iconControls = container.createDiv({ cls: "tareas-pomodoro-controls-icons" });
	    if (state.runState === "running") {
	      const pauseButton = iconControls.createEl("button", { text: "\u23F8", cls: "tareas-pomodoro-btn tareas-pomodoro-btn-icon" });
	      pauseButton.setAttr("aria-label", "Pausar");
	      pauseButton.setAttr("title", "Pausar");
	      pauseButton.onclick = () => this.handlePomodoroPause();
	    } else if (state.runState === "paused") {
	      const resumeButton = iconControls.createEl("button", { text: "\u25B6", cls: "tareas-pomodoro-btn tareas-pomodoro-btn-icon mod-cta" });
	      resumeButton.setAttr("aria-label", "Reanudar");
	      resumeButton.setAttr("title", "Reanudar");
	      resumeButton.onclick = () => this.handlePomodoroResume();
	    } else {
	      const startButton = iconControls.createEl("button", { text: "\u25B6", cls: "tareas-pomodoro-btn tareas-pomodoro-btn-icon mod-cta" });
	      startButton.setAttr("aria-label", "Iniciar");
	      startButton.setAttr("title", "Iniciar");
	      startButton.onclick = () => this.handlePomodoroStart();
	    }
	    const resetButton = iconControls.createEl("button", { text: "\u21BA", cls: "tareas-pomodoro-btn tareas-pomodoro-btn-icon" });
	    resetButton.setAttr("aria-label", "Reiniciar");
	    resetButton.setAttr("title", "Reiniciar");
	    resetButton.onclick = () => this.handlePomodoroReset();
	    const deviationButton = iconControls.createEl("button", {
	      text: state.isDeviationActive ? "\u{1F4F5}" : "\u{1F4DE}",
	      cls: `tareas-pomodoro-btn tareas-pomodoro-btn-icon${state.isDeviationActive ? " is-deviation-active" : ""}`
	    });
	    deviationButton.setAttr("aria-label", "Desv\xEDo");
	    deviationButton.setAttr("title", state.isDeviationActive ? "Finalizar desv\xEDo" : "Iniciar desv\xEDo (llamadas/reuniones)");
	    const canToggleDeviation = state.isDeviationActive || state.runState === "running";
	    deviationButton.disabled = !canToggleDeviation;
	    deviationButton.onclick = () => this.handlePomodoroDeviationToggle();
	    if (state.phase !== "work") {
	      const extraControls = container.createDiv({ cls: "tareas-pomodoro-controls-extra" });
	      const workButton = extraControls.createEl("button", {
	        text: "Ir a trabajo",
	        cls: "tareas-pomodoro-btn"
	      });
	      workButton.onclick = () => this.handlePomodoroSwitchToWork();
	    }
	  }
	  handlePomodoroStart() {
	    this.unlockPomodoroAudio();
	    const next = (0, import_pomodoroEngine.startPomodoro)(this.getPomodoroRuntimeState(false), Date.now());
	    this.plugin.setPomodoroState(next);
	    this.render();
	  }
	  handlePomodoroPause() {
	    this.unlockPomodoroAudio();
	    const next = (0, import_pomodoroEngine.pausePomodoro)(this.getPomodoroRuntimeState(false), Date.now());
	    this.plugin.setPomodoroState(next);
	    this.render();
	  }
	  handlePomodoroResume() {
	    this.unlockPomodoroAudio();
	    const next = (0, import_pomodoroEngine.resumePomodoro)(this.getPomodoroRuntimeState(false), Date.now());
	    this.plugin.setPomodoroState(next);
	    this.render();
	  }
	  handlePomodoroReset() {
	    this.unlockPomodoroAudio();
	    const next = (0, import_pomodoroEngine.resetPomodoro)(this.getPomodoroRuntimeState(false));
	    this.plugin.setPomodoroState(next);
	    this.render();
	  }
	  async handlePomodoroDeviationToggle() {
	    this.unlockPomodoroAudio();
	    const now = Date.now();
	    const current = this.getPomodoroRuntimeState(false);
	    if (current.isDeviationActive) {
	      const result = (0, import_pomodoroEngine.exitPomodoroDeviation)(current, now);
	      this.plugin.setPomodoroState(result.state);
	      await this.addPomodoroDeviationTimeToSelectedTask(result.elapsedSeconds, result.state);
	      if (result.completedWork) {
	        const nextPhaseLabel = (0, import_pomodoroEngine.getPomodoroPhaseLabel)(result.state.phase);
	        new obsidian.Notice(`Desv\xEDo finalizado. Iniciando ${nextPhaseLabel.toLowerCase()}.`, 7e3);
	        this.flashPomodoroPanel();
	        this.playPomodoroBeep();
	        await this.addPomodoroWorkTimeToSelectedTask(["work"], result.state);
	        await this.logPomodoroEntries(["work"], result.state, now);
	      }
	      this.render();
	      return;
	    }
	    const next = (0, import_pomodoroEngine.enterPomodoroDeviation)(current, now);
	    if (next === current) {
	      new obsidian.Notice("Solo pod\xE9s iniciar desv\xEDo cuando el contador est\xE1 corriendo.");
	      return;
	    }
	    this.plugin.setPomodoroState(next);
	    this.render();
	  }
	  handlePomodoroSwitchToWork() {
	    this.unlockPomodoroAudio();
	    const current = this.getPomodoroRuntimeState(false);
	    const workState = {
	      ...current,
	      phase: "work",
	      runState: "idle",
	      remainingSeconds: current.durations.workMinutes * 60,
	      endTimestamp: null,
	      isDeviationActive: false,
	      deviationStartedAt: null,
	      deviationBaseRemainingSeconds: 0,
	      phaseDeviationSeconds: 0
	    };
	    this.plugin.setPomodoroState(workState);
	    this.render();
	  }
	  updatePomodoroDurations(nextDurations) {
	    const normalized = (0, import_pomodoroEngine.normalizePomodoroDurations)(nextDurations);
	    const next = (0, import_pomodoroEngine.applyPomodoroDurations)(this.getPomodoroRuntimeState(false), normalized);
	    this.plugin.setPomodoroState(next);
	    this.updatePomodoroDom(next, Date.now());
	  }
	  async handlePomodoroTick() {
	    const runtimeState = this.getPomodoroRuntimeState(true);
	    if (this.activeTab === "pomodoro")
	      this.updatePomodoroDom(runtimeState, Date.now());
	  }
	  getPomodoroRuntimeState(notifyCompletion) {
	    const now = Date.now();
	    const advanced = (0, import_pomodoroEngine.advancePomodoroState)(this.plugin.pomodoro, now);
	    if (advanced.transitioned) {
	      this.plugin.setPomodoroState(advanced.state);
	      if (notifyCompletion)
	        this.notifyPomodoroTransitions(advanced.completedPhases, advanced.state);
	      if (this.activeTab === "pomodoro")
	        void this.render();
	      return advanced.state;
	    }
	    if (advanced.state !== this.plugin.pomodoro) {
	      return {
	        ...advanced.state,
	        remainingSeconds: (0, import_pomodoroEngine.getPomodoroRemainingSeconds)(advanced.state, now)
	      };
	    }
	    return {
	      ...this.plugin.pomodoro,
	      durations: { ...this.plugin.pomodoro.durations },
	      remainingSeconds: (0, import_pomodoroEngine.getPomodoroRemainingSeconds)(this.plugin.pomodoro, now)
	    };
	  }
	  updatePomodoroDom(state, nowMs) {
	    if (!this.pomodoroTimeEl || !this.pomodoroPhaseEl || !this.pomodoroCycleEl || !this.pomodoroStateEl)
	      return;
	    const remaining = (0, import_pomodoroEngine.getPomodoroRemainingSeconds)(state, nowMs);
	    const deviationElapsed = (0, import_pomodoroEngine.getDeviationElapsedSeconds)(state, nowMs);
	    const displayedSeconds = state.isDeviationActive ? deviationElapsed : remaining;
	    this.pomodoroTimeEl.setText((0, import_pomodoroEngine.formatPomodoroCountdown)(displayedSeconds));
	    this.pomodoroTimeEl.toggleClass("is-deviation", state.isDeviationActive);
	    if (this.pomodoroProgressEl) {
	      const totalSeconds = Math.max(1, state.isDeviationActive ? Math.max(1, state.deviationBaseRemainingSeconds) : (0, import_pomodoroEngine.getPhaseDurationSeconds)(state.durations, state.phase));
	      const elapsed = state.isDeviationActive ? deviationElapsed : Math.max(0, totalSeconds - remaining);
	      const progressPercent = Math.min(100, elapsed / totalSeconds * 100);
	      this.pomodoroProgressEl.style.setProperty("--tareas-pomodoro-progress", `${progressPercent}%`);
	      this.pomodoroProgressEl.setAttr("data-mode", state.isDeviationActive ? "deviation" : "normal");
	    }
	    this.pomodoroPhaseEl.setText((0, import_pomodoroEngine.getPomodoroPhaseLabel)(state.phase));
	    this.pomodoroCycleEl.setText(`Ciclos completados: ${state.completedWorkCycles}`);
	    const runStateLabel = state.isDeviationActive ? "Desv\xEDo" : state.runState === "running" ? "En curso" : state.runState === "paused" ? "Pausado" : "Listo";
	    this.pomodoroStateEl.setText(runStateLabel);
	    this.pomodoroStateEl.setAttr("data-state", state.isDeviationActive ? "deviation" : state.runState);
	  }
	  notifyPomodoroTransitions(completedPhases, nextState) {
	    const completed = completedPhases[completedPhases.length - 1];
	    if (!completed)
	      return;
	    const nextPhaseLabel = (0, import_pomodoroEngine.getPomodoroPhaseLabel)(nextState.phase);
	    if (completed === "work")
	      new obsidian.Notice(`Pomodoro finalizado. Iniciando ${nextPhaseLabel.toLowerCase()}.`, 7e3);
	    else
	      new obsidian.Notice(`Descanso finalizado. Iniciando ${nextPhaseLabel.toLowerCase()}.`, 7e3);
	    this.flashPomodoroPanel();
	    this.playPomodoroBeep();
	    void this.addPomodoroWorkTimeToSelectedTask(completedPhases, nextState);
	    void this.logPomodoroEntries(completedPhases, nextState, Date.now());
	  }
	  async logPomodoroEntries(completedPhases, state, nowMs) {
	    if (completedPhases.length === 0)
	      return;
	    const selectedTask = state.selectedTaskPath ? (0, import_taskEngine.getTasks)(this.app).find((item) => item.file.path === state.selectedTaskPath) : null;
	    const taskName = selectedTask?.tarea || "Sin tarea vinculada";
	    const totalDeviationHours = this.roundToTwo(state.phaseDeviationSeconds / 3600);
	    for (let index = 0; index < completedPhases.length; index++) {
	      const phase = completedPhases[index];
	      const deviationHours = index === completedPhases.length - 1 ? totalDeviationHours : 0;
	      await (0, import_pomodoroLogEngine.appendPomodoroLogEntry)(this.app, {
	        timestampMs: nowMs,
	        type: (0, import_pomodoroEngine.getPomodoroPhaseLabel)(phase),
	        task: taskName,
	        deviationHours
	      });
	    }
	    if (state.phaseDeviationSeconds > 0) {
	      this.plugin.setPomodoroState({
	        ...state,
	        durations: { ...state.durations },
	        phaseDeviationSeconds: 0
	      });
	    }
	    if (this.activeTab === "pomodoro")
	      await this.render();
	  }
	  async addPomodoroWorkTimeToSelectedTask(completedPhases, state) {
	    const completedWorkCount = completedPhases.filter((phase) => phase === "work").length;
	    if (completedWorkCount === 0)
	      return;
	    const selectedTaskPath = state.selectedTaskPath;
	    if (!selectedTaskPath)
	      return;
	    const task = (0, import_taskEngine.getTasks)(this.app).find((item) => item.file.path === selectedTaskPath);
	    if (!task) {
	      this.setPomodoroSelectedTaskPath(null);
	      new obsidian.Notice("La tarea seleccionada para Pomodoro ya no existe. Se quit\xF3 la selecci\xF3n.");
	      return;
	    }
	    const workedHours = this.roundToTwo(completedWorkCount * state.durations.workMinutes / 60);
	    if (workedHours <= 0)
	      return;
	    const nextDedicated = this.roundToTwo(task.dedicado + workedHours);
	    await this.updateTask(task, { dedicado: nextDedicated });
	    new obsidian.Notice(`Se sumaron ${this.formatDecimal(workedHours)} h a "${task.tarea}".`, 5e3);
	  }
	  async addPomodoroDeviationTimeToSelectedTask(elapsedSeconds, state) {
	    if (elapsedSeconds <= 0)
	      return;
	    const selectedTaskPath = state.selectedTaskPath;
	    if (!selectedTaskPath)
	      return;
	    const task = (0, import_taskEngine.getTasks)(this.app).find((item) => item.file.path === selectedTaskPath);
	    if (!task) {
	      this.setPomodoroSelectedTaskPath(null);
	      new obsidian.Notice("La tarea seleccionada para Pomodoro ya no existe. Se quit\xF3 la selecci\xF3n.");
	      return;
	    }
	    const deviationHours = this.roundToTwo(elapsedSeconds / 3600);
	    if (deviationHours <= 0)
	      return;
	    const nextDeviation = this.roundToTwo(task.desvio + deviationHours);
	    await this.updateTask(task, { desvio: nextDeviation });
	    new obsidian.Notice(`Se sumaron ${this.formatDecimal(deviationHours)} h de desv\xEDo a "${task.tarea}".`, 5e3);
	  }
	  async renderPomodoroDailyLog(container) {
	    const section = container.createDiv({ cls: "tareas-pomodoro-log-section" });
	    section.createEl("h3", { text: "Registros del dia" });
	    const entries = await (0, import_pomodoroLogEngine.readPomodoroLogEntries)(this.app);
	    const todayEntries = (0, import_pomodoroLogEngine.getEntriesByDate)(entries, (0, import_pomodoroLogEngine.toLocalDateText)(/* @__PURE__ */ new Date()));
	    if (todayEntries.length === 0) {
	      section.createEl("p", {
	        cls: "tareas-pomodoro-log-empty",
	        text: "todavia no se registran pomodoros en el dia"
	      });
	      this.renderPomodoroHourlyHeatmap(section, todayEntries);
	      return;
	    }
	    const wrap = section.createDiv({ cls: "tareas-pomodoro-log-table-wrap" });
	    const table = wrap.createEl("table", { cls: "tareas-pomodoro-log-table" });
	    const head = table.createEl("thead");
	    const headRow = head.createEl("tr");
	    for (const title of ["Horario", "Tipo de pomodoro", "Tarea", "Desvio"])
	      headRow.createEl("th", { text: title });
	    const body = table.createEl("tbody");
	    for (const entry of todayEntries) {
	      const row = body.createEl("tr");
	      row.createEl("td", { text: entry.time });
	      row.createEl("td", { text: entry.type });
	      row.createEl("td", { text: entry.task });
	      row.createEl("td", { text: `${this.formatDecimal(entry.deviationHours)} h` });
	    }
	    this.renderPomodoroHourlyHeatmap(section, todayEntries);
	  }
	  renderPomodoroHourlyHeatmap(container, todayEntries) {
	    const heatmapSection = container.createDiv({ cls: "tareas-pomodoro-heatmap" });
	    heatmapSection.createEl("h4", { text: "Heatmap horario (trabajo)" });
	    const workEntries = todayEntries.filter((entry) => entry.type === "Trabajo");
	    const hourlyCounts = Array.from({ length: 24 }, () => 0);
	    for (const entry of workEntries) {
	      const hour = Number.parseInt(entry.time.slice(0, 2), 10);
	      if (Number.isNaN(hour) || hour < 0 || hour > 23)
	        continue;
	      hourlyCounts[hour] += 1;
	    }
	    const maxCount = Math.max(1, ...hourlyCounts);
	    const grid = heatmapSection.createDiv({ cls: "tareas-pomodoro-heatmap-grid" });
	    for (let hour = 0; hour < 24; hour++) {
	      const count = hourlyCounts[hour];
	      const level = count === 0 ? 0 : Math.min(4, Math.ceil(count / maxCount * 4));
	      const cell = grid.createDiv({ cls: `tareas-pomodoro-heatmap-cell is-level-${level}` });
	      cell.createEl("span", {
	        cls: "tareas-pomodoro-heatmap-hour",
	        text: String(hour).padStart(2, "0")
	      });
	      cell.createEl("span", {
	        cls: "tareas-pomodoro-heatmap-count",
	        text: String(count)
	      });
	      cell.setAttr("title", `${String(hour).padStart(2, "0")}:00 - ${count} pomodoro(s) de trabajo`);
	    }
	  }
	  flashPomodoroPanel() {
	    if (!this.pomodoroPanelEl)
	      return;
	    this.pomodoroPanelEl.addClass("tareas-pomodoro-panel-flash");
	    window.setTimeout(() => {
	      this.pomodoroPanelEl?.removeClass("tareas-pomodoro-panel-flash");
	    }, 900);
	  }
	  playPomodoroBeep() {
	    const audioContext = this.ensurePomodoroAudioContext();
	    if (!audioContext)
	      return;
	    const startBeep = () => {
	      try {
	        const now = audioContext.currentTime;
	        const first = audioContext.createOscillator();
	        const second = audioContext.createOscillator();
	        const gain = audioContext.createGain();
	        first.type = "sine";
	        second.type = "sine";
	        first.frequency.value = 880;
	        second.frequency.value = 988;
	        gain.gain.setValueAtTime(1e-4, now);
	        gain.gain.exponentialRampToValueAtTime(0.09, now + 0.01);
	        gain.gain.exponentialRampToValueAtTime(1e-4, now + 0.18);
	        gain.gain.setValueAtTime(1e-4, now + 0.2);
	        gain.gain.exponentialRampToValueAtTime(0.08, now + 0.22);
	        gain.gain.exponentialRampToValueAtTime(1e-4, now + 0.38);
	        first.connect(gain);
	        second.connect(gain);
	        gain.connect(audioContext.destination);
	        first.start(now);
	        first.stop(now + 0.18);
	        second.start(now + 0.2);
	        second.stop(now + 0.38);
	      } catch {
	      }
	    };
	    if (audioContext.state === "suspended") {
	      void audioContext.resume().then(startBeep).catch(() => {
	      });
	      return;
	    }
	    startBeep();
	  }
	  ensurePomodoroAudioContext() {
	    if (this.pomodoroAudioContext && this.pomodoroAudioContext.state !== "closed")
	      return this.pomodoroAudioContext;
	    const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
	    if (!AudioContextCtor)
	      return null;
	    try {
	      this.pomodoroAudioContext = new AudioContextCtor();
	    } catch {
	      this.pomodoroAudioContext = null;
	    }
	    return this.pomodoroAudioContext;
	  }
	  unlockPomodoroAudio() {
	    const audioContext = this.ensurePomodoroAudioContext();
	    if (!audioContext || audioContext.state !== "suspended")
	      return;
	    void audioContext.resume().catch(() => {
	    });
	  }
	  resetPomodoroDomRefs() {
	    this.pomodoroPanelEl = null;
	    this.pomodoroTimeEl = null;
	    this.pomodoroProgressEl = null;
	    this.pomodoroPhaseEl = null;
	    this.pomodoroCycleEl = null;
	    this.pomodoroStateEl = null;
	  }
	  renderHeader(root) {
	    const header = root.createDiv({ cls: "tareas-header" });
	    const titleWrap = header.createDiv({ cls: "tareas-title-wrap" });
	    titleWrap.createEl("span", { text: "\u2630", cls: "tareas-icon" });
	    titleWrap.createEl("h1", { text: " Tareas" });
	    const actions = header.createDiv({ cls: "tareas-header-actions" });
	    actions.createEl("span", { text: "\u25A6 Tablero", cls: "tareas-view-toggle" });
	    const newButton = actions.createEl("button", { cls: "tareas-btn-new" });
	    newButton.createEl("span", { text: "Nuevo \u25BE" });
	    newButton.onclick = () => new import_NewTaskModal.NewTaskModal(this.app, this.plugin).open();
	  }
	  renderGroup(root, team, tasks, allTasks, taskPreviewMap) {
	    const teamName = team.name;
	    const isManaged = this.plugin.equipos.some((item) => item.name === teamName);
	    const expanded = this.expandedGroups.has(teamName);
	    const group = root.createDiv({ cls: "tareas-group" });
	    group.dataset.equipo = teamName;
	    const header = group.createDiv({ cls: "tareas-group-header" });
	    if (isManaged)
	      this.attachGroupDragHandlers(root, group, header, teamName);
	    header.createEl("span", { text: expanded ? "\u25BC " : "\u25B6 ", cls: "tareas-toggle" });
	    const badge = header.createEl("span", { text: teamName, cls: "tareas-badge" });
	    badge.style.background = team.color;
	    header.createEl("span", { text: `  ${tasks.length}`, cls: "tareas-count" });
	    if (isManaged) {
	      const editButton = header.createEl("button", { text: "\u270E", cls: "tareas-group-edit-btn" });
	      editButton.onclick = (event) => {
	        event.stopPropagation();
	        new import_EditSectionModal.EditSectionModal(this.app, this.plugin, team, this).open();
	      };
	    }
	    header.onclick = () => {
	      if (expanded)
	        this.expandedGroups.delete(teamName);
	      else
	        this.expandedGroups.add(teamName);
	      this.render();
	    };
	    if (!expanded)
	      return;
	    tasks.sort((a, b) => a.order - b.order);
	    const cards = group.createDiv({ cls: "tareas-card-list" });
	    for (const task of tasks)
	      this.renderTaskCard(cards, task, allTasks, taskPreviewMap.get(task.file.path) || "");
	    if (this.activeTab === "active") {
	      const addCard = cards.createDiv({ cls: "tareas-task-card tareas-task-card-add" });
	      const link = addCard.createEl("span", { text: "+ Nueva tarea", cls: "tareas-add-link" });
	      link.onclick = () => new import_NewTaskModal.NewTaskModal(this.app, this.plugin, teamName).open();
	    }
	  }
	  renderTaskCard(container, task, allTasks, taskPreview) {
	    const subtasks = allTasks.filter((item) => item.parent === task.file.basename).sort((a, b) => a.order - b.order);
	    const hasSubtasks = subtasks.length > 0;
	    const subtasksExpanded = this.expandedCardSubtasks.has(task.file.path);
	    const card = container.createDiv({ cls: "tareas-task-card" });
	    this.attachCardDragHandlers(container, card, task, allTasks);
	    this.attachCardEditHandlers(card, task);
	    const statusBandClass = this.getStatusClassName(task.estado);
	    const statusBand = card.createDiv({ cls: `tareas-card-side-band tareas-card-status-band tareas-card-status-band-${statusBandClass}` });
	    this.renderStatusBand(statusBand, task);
	    const priorityBandClass = this.getPriorityClassName(task.prioridad);
	    const priorityBand = card.createDiv({ cls: `tareas-card-side-band tareas-card-priority-band tareas-card-priority-band-${priorityBandClass}` });
	    this.renderPriorityBand(priorityBand, task);
	    const actions = card.createDiv({ cls: "tareas-card-actions tareas-card-actions-band" });
	    this.renderStatusActions(actions, task);
	    this.syncCardSideBandsTopOffset(card, actions);
	    const titleRow = card.createDiv({ cls: "tareas-card-title-row" });
	    const title = titleRow.createEl("a", { text: task.tarea, cls: "tareas-task-card-title" });
	    title.setAttr("title", task.tarea);
	    title.onclick = () => this.app.workspace.openLinkText(task.file.path, "", true);
	    const commentButton = titleRow.createEl("button", { cls: "tareas-card-comment-btn" });
	    commentButton.setAttr("aria-label", "Agregar comentario");
	    commentButton.setAttr("title", "Agregar comentario");
	    obsidian.setIcon(commentButton, "scroll-text");
	    commentButton.onclick = (event) => {
	      event.stopPropagation();
	      new import_AddTaskCommentModal.AddTaskCommentModal(this.app, task).open();
	    };
	    if (taskPreview)
	      card.createEl("p", { text: taskPreview, cls: "tareas-card-preview" });
	    const footer = card.createDiv({ cls: "tareas-card-footer" });
	    if (hasSubtasks) {
	      const subtasksToggle = footer.createEl("span", {
	        text: `${subtasksExpanded ? "\u25BC" : "\u25B6"} ${subtasks.length} subtarea(s)`,
	        cls: `tareas-card-subtasks tareas-card-subtasks-toggle${subtasksExpanded ? " is-expanded" : ""}`
	      });
	      subtasksToggle.onclick = (event) => {
	        event.stopPropagation();
	        if (subtasksExpanded)
	          this.expandedCardSubtasks.delete(task.file.path);
	        else
	          this.expandedCardSubtasks.add(task.file.path);
	        this.render();
	      };
	    }
	    const addSubtask = footer.createEl("span", { text: "+ Subtarea", cls: "tareas-add-link" });
	    addSubtask.onclick = (event) => {
	      event.stopPropagation();
	      new import_NewTaskModal.NewTaskModal(this.app, this.plugin, task.equipo, task.file.basename).open();
	    };
	    if (hasSubtasks && subtasksExpanded)
	      this.renderCardSubtaskList(card, subtasks);
	    this.renderCardProgressBand(card, task);
	  }
	  attachCardEditHandlers(card, task) {
	    card.addEventListener("dblclick", (event) => {
	      if (!(event.target instanceof HTMLElement))
	        return;
	      if (event.target.closest("a, button, input, textarea, select"))
	        return;
	      event.stopPropagation();
	      new import_EditTaskFileModal.EditTaskFileModal(this.app, task).open();
	    });
	  }
	  syncCardSideBandsTopOffset(card, actionsBand) {
	    const applyOffset = () => {
	      const measuredHeight = Math.ceil(actionsBand.getBoundingClientRect().height);
	      card.style.setProperty("--tareas-card-actions-band-height", `${measuredHeight}px`);
	    };
	    applyOffset();
	    window.requestAnimationFrame(applyOffset);
	  }
	  async buildTaskPreviewMap(tasks) {
	    const previewMap = /* @__PURE__ */ new Map();
	    await Promise.all(tasks.map(async (task) => {
	      try {
	        const fileContent = await this.app.vault.cachedRead(task.file);
	        previewMap.set(task.file.path, (0, import_taskEngine.extractTaskBodyPreview)(fileContent));
	      } catch {
	        previewMap.set(task.file.path, "");
	      }
	    }));
	    return previewMap;
	  }
	  renderRow(tbody, task, allTasks, depth) {
	    const subtasks = allTasks.filter((item) => item.parent === task.file.basename).sort((a, b) => a.order - b.order);
	    const hasSubtasks = subtasks.length > 0;
	    const expanded = this.expandedTasks.has(task.file.path);
	    const row = tbody.createEl("tr", { cls: "tareas-row" });
	    row.dataset.path = task.file.path;
	    row.dataset.depth = String(depth);
	    this.renderDragCell(row, tbody, task, allTasks, depth);
	    this.renderToggleCell(row, task, hasSubtasks, expanded, depth);
	    this.renderTaskNameCell(row, task, depth);
	    this.renderStatusCell(row, task);
	    this.renderTeamCell(row, task, depth);
	    this.renderPriorityCell(row, task);
	    this.renderDedicatedCell(row, task);
	    this.renderEstimatedCell(row, task);
	    this.renderStartDateCell(row, task);
	    this.renderEndDateCell(row, task);
	    this.renderPercentCell(row, task);
	    this.renderStatusActionsCell(row, task);
	    if (!expanded)
	      return;
	    for (const subtask of subtasks)
	      this.renderRow(tbody, subtask, allTasks, depth + 1);
	    if (this.activeTab === "active") {
	      const addSubRow = tbody.createEl("tr", { cls: "tareas-add-row" });
	      addSubRow.createEl("td");
	      addSubRow.createEl("td");
	      const addSubCell = addSubRow.createEl("td", { attr: { colspan: "10" } });
	      addSubCell.style.paddingLeft = `${(depth + 1) * 24 + 8}px`;
	      const addSubtask = addSubCell.createEl("span", { text: "+ Subtarea", cls: "tareas-add-link" });
	      addSubtask.onclick = (event) => {
	        event.stopPropagation();
	        new import_NewTaskModal.NewTaskModal(this.app, this.plugin, task.equipo, task.file.basename).open();
	      };
	    }
	  }
	  renderDragCell(row, tbody, task, allTasks, depth) {
	    const dragCell = row.createEl("td", { cls: "tareas-cell-drag" });
	    dragCell.createEl("span", { text: "\u2801\u2801\u2801", cls: "tareas-drag-handle" });
	    row.draggable = true;
	    row.addEventListener("dragstart", (event) => {
	      const dataTransfer = event.dataTransfer;
	      if (!dataTransfer)
	        return;
	      this.dragPath = task.file.path;
	      this.dragDepth = depth;
	      this.dragParent = task.parent;
	      row.addClass("tareas-row-dragging");
	      dataTransfer.effectAllowed = "move";
	      event.stopPropagation();
	    });
	    row.addEventListener("dragend", () => {
	      this.resetRowDragState(tbody, row);
	    });
	    row.addEventListener("dragover", (event) => {
	      if (!this.canDropOnRow(task, depth))
	        return;
	      event.preventDefault();
	      event.stopPropagation();
	      if (event.dataTransfer)
	        event.dataTransfer.dropEffect = "move";
	      tbody.querySelectorAll(".tareas-row-drag-over").forEach((item) => item.classList.remove("tareas-row-drag-over"));
	      row.addClass("tareas-row-drag-over");
	    });
	    row.addEventListener("dragleave", () => {
	      row.removeClass("tareas-row-drag-over");
	    });
	    row.addEventListener("drop", async (event) => {
	      if (!this.canDropOnRow(task, depth))
	        return;
	      event.preventDefault();
	      event.stopPropagation();
	      row.removeClass("tareas-row-drag-over");
	      if (!this.dragPath)
	        return;
	      if (depth === 0)
	        await this.reorderTask(this.dragPath, task.file.path, allTasks);
	      else
	        await this.reorderSubtask(this.dragPath, task.file.path, allTasks);
	      this.resetRowDragState(tbody, row);
	    });
	  }
	  renderToggleCell(row, task, hasSubtasks, expanded, depth) {
	    const toggleCell = row.createEl("td", { cls: "tareas-cell-toggle" });
	    if (depth !== 0)
	      return;
	    const toggle = toggleCell.createEl("span", {
	      text: expanded ? "\u25BC" : "\u25B6",
	      cls: `tareas-subtask-toggle${hasSubtasks ? "" : " tareas-toggle-empty"}`
	    });
	    toggle.onclick = (event) => {
	      event.stopPropagation();
	      if (expanded)
	        this.expandedTasks.delete(task.file.path);
	      else
	        this.expandedTasks.add(task.file.path);
	      this.render();
	    };
	  }
	  renderTaskNameCell(row, task, depth) {
	    const cell = row.createEl("td", { cls: "tareas-cell-name" });
	    cell.style.paddingLeft = `${depth * 24 + 8}px`;
	    const titleWrap = cell.createDiv({ cls: "tareas-task-title-wrap" });
	    if (depth > 0)
	      titleWrap.createEl("span", { text: "\u2514 ", cls: "tareas-subtask-indent" });
	    const link = titleWrap.createEl("a", { text: task.tarea, cls: "tareas-task-link" });
	    link.setAttr("title", task.tarea);
	    link.onclick = () => this.app.workspace.openLinkText(task.file.path, "", true);
	  }
	  renderStatusCell(row, task) {
	    const cell = row.createEl("td", { cls: "tareas-cell-estado" });
	    this.renderStatusBadge(cell, task);
	  }
	  renderStatusBadge(container, task) {
	    const statusClass = this.getStatusClassName(task.estado);
	    const badge = container.createEl("span", {
	      text: task.estado,
	      cls: `tareas-estado tareas-estado-${statusClass}`
	    });
	    badge.onclick = (event) => {
	      event.stopPropagation();
	      (0, import_dropdown.showDropdown)(badge, import_constants.ESTADOS, task.estado, async (value) => {
	        await this.applyStateTransition(task, value);
	      });
	    };
	  }
	  renderStatusBand(container, task) {
	    container.createEl("span", { text: task.estado, cls: "tareas-card-side-band-text" });
	    container.onclick = (event) => {
	      event.stopPropagation();
	      (0, import_dropdown.showDropdown)(container, import_constants.ESTADOS, task.estado, async (value) => {
	        await this.applyStateTransition(task, value);
	      });
	    };
	  }
	  renderPriorityBand(container, task) {
	    container.createEl("span", { text: task.prioridad, cls: "tareas-card-side-band-text" });
	    container.onclick = (event) => {
	      event.stopPropagation();
	      (0, import_dropdown.showDropdown)(container, import_constants.PRIORIDADES, task.prioridad, async (value) => {
	        await this.updateTask(task, { prioridad: value });
	      });
	    };
	  }
	  renderCardSubtaskList(card, subtasks) {
	    const list = card.createDiv({ cls: "tareas-card-subtask-list" });
	    for (const subtask of subtasks) {
	      const row = list.createDiv({ cls: "tareas-card-subtask-row" });
	      const checked = subtask.estado === "Finalizada";
	      const checkbox = row.createEl("input", {
	        cls: "tareas-card-subtask-check",
	        attr: { type: "checkbox" }
	      });
	      checkbox.checked = checked;
	      checkbox.onclick = (event) => {
	        event.stopPropagation();
	      };
	      checkbox.onchange = async (event) => {
	        event.stopPropagation();
	        const nextStatus = checkbox.checked ? "Finalizada" : "Pendiente";
	        if (subtask.estado === nextStatus)
	          return;
	        await this.applyStateTransition(subtask, nextStatus, void 0, { moveFile: false });
	      };
	      const title = row.createEl("a", {
	        text: subtask.tarea,
	        cls: `tareas-card-subtask-title${checked ? " is-done" : ""}`
	      });
	      title.setAttr("title", subtask.tarea);
	      title.onclick = (event) => {
	        event.stopPropagation();
	        this.app.workspace.openLinkText(subtask.file.path, "", true);
	      };
	      const commentButton = row.createEl("button", { cls: "tareas-card-comment-btn tareas-card-subtask-comment-btn" });
	      commentButton.setAttr("aria-label", "Agregar comentario");
	      commentButton.setAttr("title", "Agregar comentario");
	      obsidian.setIcon(commentButton, "scroll-text");
	      commentButton.onclick = (event) => {
	        event.stopPropagation();
	        new import_AddTaskCommentModal.AddTaskCommentModal(this.app, subtask).open();
	      };
	    }
	  }
	  renderCardProgressBand(card, task) {
	    const band = card.createDiv({ cls: "tareas-card-progress-band" });
	    const fill = band.createDiv({ cls: "tareas-card-progress-band-fill" });
	    const text = band.createDiv({ cls: "tareas-card-progress-band-text" });
	    const dedicatedAndEstimatedText = `${this.formatDecimal(task.dedicado)}/${this.formatDecimal(task.estimacion)}`;
	    const deviationText = ` +-> ${this.formatDecimal(task.desvio)}`;
	    const textValue = text.createEl("span", {
	      cls: "tareas-card-progress-band-text-value tareas-card-progress-band-text-editable",
	      text: dedicatedAndEstimatedText
	    });
	    textValue.createEl("span", { cls: "tareas-card-progress-band-text-deviation", text: deviationText });
	    textValue.setAttr("title", `${this.formatDecimal(task.dedicado)} h / ${this.formatDecimal(task.estimacion)} h +-> ${this.formatDecimal(task.desvio)} h`);
	    textValue.onclick = (event) => {
	      event.stopPropagation();
	      this.editCardDedicatedValue(band, textValue, task);
	    };
	    const progressPercent = task.estimacion > 0 ? task.dedicado / task.estimacion * 100 : 0;
	    const isOverflow = progressPercent > 100;
	    let visiblePercent = isOverflow ? progressPercent % 100 : progressPercent;
	    if (isOverflow && visiblePercent === 0)
	      visiblePercent = 100;
	    const clampedPercent = Math.max(0, Math.min(100, visiblePercent));
	    fill.style.width = `${clampedPercent}%`;
	    if (isOverflow)
	      band.addClass("is-overflow");
	  }
	  editCardDedicatedValue(band, text, task) {
	    if (band.querySelector(".tareas-card-progress-input"))
	      return;
	    const input = band.createEl("input", { cls: "tareas-card-progress-input" });
	    input.type = "number";
	    input.min = "0";
	    input.step = "0.01";
	    input.value = this.formatDecimal(task.dedicado);
	    text.style.visibility = "hidden";
	    input.focus();
	    input.select();
	    const closeEditor = async (save) => {
	      const nextValue = this.parseDecimal(input.value);
	      input.remove();
	      text.style.visibility = "";
	      if (!save || nextValue === task.dedicado)
	        return;
	      await this.updateTask(task, { dedicado: nextValue });
	    };
	    input.onclick = (event) => {
	      event.stopPropagation();
	    };
	    input.addEventListener("blur", () => {
	      void closeEditor(true);
	    });
	    input.addEventListener("keydown", (event) => {
	      if (event.key === "Enter")
	        input.blur();
	      if (event.key === "Escape") {
	        event.preventDefault();
	        void closeEditor(false);
	      }
	    });
	  }
	  renderStatusActionsCell(row, task) {
	    const cell = row.createEl("td", { cls: "tareas-cell-actions" });
	    this.renderStatusActions(cell, task);
	  }
	  getStatusClassName(status) {
	    return status.toLowerCase().replace(/ /g, "-");
	  }
	  getPriorityClassName(priority) {
	    return priority.toLowerCase().replace(/ /g, "-");
	  }
	  renderStatusActions(container, task) {
	    const actions = container.createDiv({ cls: "tareas-status-actions" });
	    const progressAction = task.estado === "En progreso" ? { label: "Parar", nextStatus: "Pendiente" } : { label: "Iniciar", nextStatus: "En progreso" };
	    const statusActions = [
	      { id: "dismiss", label: "Desestimar", nextStatus: "Cancelada", cls: "is-dismiss" },
	      { id: "start-stop", ...progressAction, cls: "is-start-stop" },
	      { id: "finish", label: "Finalizar", nextStatus: "Finalizada", cls: "is-finish" },
	      { id: "block", label: "Bloquear", nextStatus: "Bloqueada", cls: "is-block" }
	    ];
	    for (const action of statusActions) {
	      const button = actions.createEl("button", {
	        text: action.label,
	        cls: "tareas-status-action-btn"
	      });
	      button.addClass(action.cls);
	      if (task.estado === action.nextStatus)
	        button.addClass("is-active");
	      button.onclick = async (event) => {
	        event.stopPropagation();
	        if (task.estado === action.nextStatus)
	          return;
	        await this.applyStatusAction(task, action.id, action.nextStatus);
	      };
	    }
	    const urgentButton = actions.createEl("button", {
	      text: "Urgente",
	      cls: "tareas-status-action-btn"
	    });
	    urgentButton.addClass("is-urgent");
	    if (task.prioridad === "Urgente")
	      urgentButton.addClass("is-active");
	    urgentButton.onclick = async (event) => {
	      event.stopPropagation();
	      if (task.prioridad === "Urgente")
	        return;
	      await this.updateTask(task, { prioridad: "Urgente" });
	    };
	  }
	  async applyStatusAction(task, actionId, nextStatus) {
	    if (actionId === "start-stop") {
	      if (task.estado === "En progreso") {
	        await this.applyStateTransition(task, nextStatus);
	        return;
	      }
	      await this.applyStateTransition(task, nextStatus, {
	        ...this.buildStateChangeUpdates(task, nextStatus),
	        fechaInicio: (/* @__PURE__ */ new Date()).toISOString()
	      });
	      return;
	    }
	    if (actionId === "finish") {
	      const endDate = /* @__PURE__ */ new Date();
	      const startDate = (0, import_taskEngine.parseTaskDate)(task.fechaInicio);
	      const dedicatedHours = startDate ? this.roundToTwo((endDate.getTime() - startDate.getTime()) / (1e3 * 60 * 60)) : 0;
	      const updates = {
	        estado: nextStatus,
	        fechaFin: endDate.toISOString(),
	        dedicado: dedicatedHours
	      };
	      if (!startDate)
	        updates.fechaInicio = endDate.toISOString();
	      if (task.estimacion === 0)
	        updates.estimacion = dedicatedHours;
	      await this.applyStateTransition(task, nextStatus, updates);
	      return;
	    }
	    await this.applyStateTransition(task, nextStatus);
	  }
	  buildStateChangeUpdates(task, nextStatus) {
	    const updates = { estado: nextStatus };
	    if (task.estado !== "Finalizada" || nextStatus === "Finalizada")
	      return updates;
	    const remainingHours = this.roundToTwo(task.estimacion - task.dedicado);
	    if (remainingHours <= 0)
	      return updates;
	    updates.fechaFin = new Date(Date.now() + remainingHours * 60 * 60 * 1e3).toISOString();
	    return updates;
	  }
	  renderTeamCell(row, task, depth) {
	    const cell = row.createEl("td");
	    if (depth > 0)
	      return;
	    this.renderTeamBadge(cell, task);
	  }
	  renderTeamBadge(container, task) {
	    const teamConfig = this.plugin.equipos.find((item) => item.name === task.equipo);
	    const badge = container.createEl("span", {
	      text: task.equipo || "\u2014",
	      cls: "tareas-equipo-badge"
	    });
	    if (teamConfig)
	      badge.style.background = teamConfig.color;
	    badge.onclick = (event) => {
	      event.stopPropagation();
	      const options = this.plugin.equipos.map((equipo) => equipo.name);
	      (0, import_dropdown.showDropdown)(badge, options, task.equipo, async (nextTeam) => {
	        const previousTeam = task.equipo;
	        await this.updateTask(task, { equipo: nextTeam });
	        const subtasks = (0, import_taskEngine.getTasks)(this.app).filter((item) => item.parent === task.file.basename);
	        for (const subtask of subtasks)
	          await this.updateTask(subtask, { equipo: nextTeam });
	        await this.rebalanceTeamSchedule(previousTeam);
	        await this.rebalanceTeamSchedule(nextTeam);
	      });
	    };
	  }
	  renderPriorityCell(row, task) {
	    const cell = row.createEl("td", { cls: "tareas-cell-prioridad" });
	    this.renderPriorityBadge(cell, task);
	  }
	  renderPriorityBadge(container, task) {
	    const priorityClass = task.prioridad.toLowerCase();
	    const urgentActive = task.prioridad === "Urgente" && task.estado !== "Finalizada";
	    const badge = container.createEl("span", {
	      text: task.prioridad,
	      cls: `tareas-prioridad tareas-prioridad-${priorityClass}${urgentActive ? " tareas-urgente-activa" : ""}`
	    });
	    badge.onclick = (event) => {
	      event.stopPropagation();
	      (0, import_dropdown.showDropdown)(badge, import_constants.PRIORIDADES, task.prioridad, async (value) => {
	        await this.updateTask(task, { prioridad: value });
	      });
	    };
	  }
	  renderDedicatedCell(row, task) {
	    const cell = row.createEl("td", { cls: "tareas-cell-num" });
	    const editable = cell.createEl("span", { text: this.formatDecimal(task.dedicado), cls: "tareas-editable" });
	    editable.onclick = () => {
	      this.editNumberCell(editable, task.dedicado, async (value) => this.updateTask(task, { dedicado: value }));
	    };
	  }
	  renderEstimatedCell(row, task) {
	    const cell = row.createEl("td", { cls: "tareas-cell-num" });
	    const editable = cell.createEl("span", { text: this.formatDecimal(task.estimacion), cls: "tareas-editable" });
	    editable.onclick = () => {
	      this.editNumberCell(editable, task.estimacion, async (value) => {
	        await this.updateTask(task, { estimacion: value });
	        await this.rebalanceTeamSchedule(task.equipo);
	      });
	    };
	  }
	  renderStartDateCell(row, task) {
	    row.createEl("td", { cls: "tareas-cell-date", text: this.formatTaskDate(task.fechaInicio) });
	  }
	  renderEndDateCell(row, task) {
	    row.createEl("td", { cls: "tareas-cell-date", text: this.formatTaskDate(task.fechaFin) });
	  }
	  renderPercentCell(row, task) {
	    const percent = this.calculateProgressPercent(task);
	    const cell = row.createEl("td", { cls: "tareas-cell-pct" });
	    cell.createEl("span", { text: `${percent} %`, cls: "tareas-pct-text" });
	    const dot = cell.createEl("span", { cls: "tareas-pct-dot" });
	    if (percent >= 100)
	      dot.addClass("full");
	    else if (percent > 0)
	      dot.addClass("partial");
	  }
	  editNumberCell(span, currentValue, onSave) {
	    const input = document.createElement("input");
	    input.type = "number";
	    input.className = "tareas-inline-input";
	    input.value = this.formatDecimal(currentValue);
	    input.min = "0";
	    input.step = "0.01";
	    span.replaceWith(input);
	    input.focus();
	    input.select();
	    const finish = () => {
	      const value = this.parseDecimal(input.value);
	      void onSave(value);
	    };
	    input.addEventListener("blur", finish);
	    input.addEventListener("keydown", (event) => {
	      if (event.key === "Enter")
	        input.blur();
	      if (event.key === "Escape") {
	        input.value = this.formatDecimal(currentValue);
	        input.blur();
	      }
	    });
	  }
	  parseDecimal(value) {
	    const parsed = Number.parseFloat(value);
	    if (Number.isNaN(parsed) || parsed < 0)
	      return 0;
	    return Math.round(parsed * 100) / 100;
	  }
	  formatDecimal(value) {
	    return this.parseDecimal(String(value)).toFixed(2);
	  }
	  formatTaskDate(value) {
	    const date = (0, import_taskEngine.parseTaskDate)(value);
	    if (!date)
	      return "\u2014";
	    const day = String(date.getDate()).padStart(2, "0");
	    const month = String(date.getMonth() + 1).padStart(2, "0");
	    const hour = String(date.getHours()).padStart(2, "0");
	    const minute = String(date.getMinutes()).padStart(2, "0");
	    return `${day}/${month} ${hour}:${minute}`;
	  }
	  roundToTwo(value) {
	    if (Number.isNaN(value) || value <= 0)
	      return 0;
	    return Math.round(value * 100) / 100;
	  }
	  calculateProgressPercent(task) {
	    const total = task.estimacion || 0;
	    if (total <= 0)
	      return 0;
	    return Math.round(task.dedicado / total * 100);
	  }
	  attachCardDragHandlers(container, card, task, allTasks) {
	    card.draggable = true;
	    card.addEventListener("dragstart", (event) => {
	      const dataTransfer = event.dataTransfer;
	      if (!dataTransfer)
	        return;
	      this.dragPath = task.file.path;
	      this.dragDepth = 0;
	      this.dragParent = task.parent;
	      card.addClass("tareas-task-card-dragging");
	      dataTransfer.effectAllowed = "move";
	      event.stopPropagation();
	    });
	    card.addEventListener("dragend", () => {
	      this.resetCardDragState(container, card);
	    });
	    card.addEventListener("dragover", (event) => {
	      if (!this.canDropOnRow(task, 0))
	        return;
	      event.preventDefault();
	      event.stopPropagation();
	      if (event.dataTransfer)
	        event.dataTransfer.dropEffect = "move";
	      container.querySelectorAll(".tareas-task-card-drag-over").forEach((item) => item.classList.remove("tareas-task-card-drag-over"));
	      card.addClass("tareas-task-card-drag-over");
	    });
	    card.addEventListener("dragleave", () => {
	      card.removeClass("tareas-task-card-drag-over");
	    });
	    card.addEventListener("drop", async (event) => {
	      if (!this.canDropOnRow(task, 0))
	        return;
	      event.preventDefault();
	      event.stopPropagation();
	      card.removeClass("tareas-task-card-drag-over");
	      if (!this.dragPath)
	        return;
	      await this.reorderTask(this.dragPath, task.file.path, allTasks);
	      this.resetCardDragState(container, card);
	    });
	  }
	  attachGroupDragHandlers(root, group, header, teamName) {
	    header.createEl("span", { text: "\u2801\u2801\u2801", cls: "tareas-group-drag-handle" });
	    header.draggable = true;
	    header.addEventListener("dragstart", (event) => {
	      const dataTransfer = event.dataTransfer;
	      if (!dataTransfer)
	        return;
	      this.dragGroup = teamName;
	      group.addClass("tareas-group-dragging");
	      dataTransfer.effectAllowed = "move";
	      event.stopPropagation();
	    });
	    header.addEventListener("dragend", () => {
	      this.dragGroup = null;
	      group.removeClass("tareas-group-dragging");
	      root.querySelectorAll(".tareas-group-drag-over").forEach((item) => item.classList.remove("tareas-group-drag-over"));
	    });
	    group.addEventListener("dragover", (event) => {
	      if (!this.dragGroup || this.dragGroup === teamName)
	        return;
	      event.preventDefault();
	      event.stopPropagation();
	      root.querySelectorAll(".tareas-group-drag-over").forEach((item) => item.classList.remove("tareas-group-drag-over"));
	      group.addClass("tareas-group-drag-over");
	    });
	    group.addEventListener("dragleave", (event) => {
	      if (event.relatedTarget instanceof Node && group.contains(event.relatedTarget))
	        return;
	      group.removeClass("tareas-group-drag-over");
	    });
	    group.addEventListener("drop", (event) => {
	      event.preventDefault();
	      event.stopPropagation();
	      group.removeClass("tareas-group-drag-over");
	      if (!this.dragGroup || this.dragGroup === teamName)
	        return;
	      this.reorderGroup(this.dragGroup, teamName);
	      this.dragGroup = null;
	    });
	  }
	  reorderGroup(draggedName, targetName) {
	    const current = this.plugin.equipos;
	    const fromIndex = current.findIndex((item) => item.name === draggedName);
	    const toIndex = current.findIndex((item) => item.name === targetName);
	    if (fromIndex < 0 || toIndex < 0)
	      return;
	    this.plugin.equipos = (0, import_orderEngine.reorderList)(current, fromIndex, toIndex);
	    void this.plugin.saveSettings();
	    this.render();
	  }
	  async reorderTask(draggedPath, targetPath, allTasks) {
	    const dragged = allTasks.find((task) => task.file.path === draggedPath);
	    const target = allTasks.find((task) => task.file.path === targetPath);
	    if (!dragged || !target)
	      return;
	    const siblings = allTasks.filter((task) => !task.parent && task.equipo === dragged.equipo).sort((a, b) => a.order - b.order);
	    const fromIndex = siblings.findIndex((item) => item.file.path === draggedPath);
	    const toIndex = siblings.findIndex((item) => item.file.path === targetPath);
	    const nextOrder = (0, import_orderEngine.reorderList)(siblings, fromIndex, toIndex);
	    await (0, import_orderEngine.persistTaskOrder)(nextOrder, async (task, order) => this.updateTask(task, { order }));
	    await this.rebalanceTeamSchedule(dragged.equipo);
	  }
	  async reorderSubtask(draggedPath, targetPath, allTasks) {
	    const dragged = allTasks.find((task) => task.file.path === draggedPath);
	    const target = allTasks.find((task) => task.file.path === targetPath);
	    if (!dragged || !target)
	      return;
	    const siblings = allTasks.filter((task) => task.parent === dragged.parent).sort((a, b) => a.order - b.order);
	    const fromIndex = siblings.findIndex((item) => item.file.path === draggedPath);
	    const toIndex = siblings.findIndex((item) => item.file.path === targetPath);
	    const nextOrder = (0, import_orderEngine.reorderList)(siblings, fromIndex, toIndex);
	    await (0, import_orderEngine.persistTaskOrder)(nextOrder, async (task, order) => this.updateTask(task, { order }));
	  }
	  async updateTask(task, updates) {
	    await (0, import_frontmatterEngine.updateFrontmatter)(this.app, task.file, updates);
	  }
	  async applyStateTransition(task, nextStatus, explicitUpdates, options) {
	    const updates = explicitUpdates ?? this.buildStateChangeUpdates(task, nextStatus);
	    await this.updateTask(task, updates);
	    const shouldMoveFile = options?.moveFile ?? true;
	    const shouldSyncSubtasks = options?.syncSubtasksWithParent ?? true;
	    const isInCompletedFolder = (0, import_taskEngine.isTaskInCompletedFolder)(task.file.path);
	    if (shouldMoveFile && nextStatus === "Finalizada" && !isInCompletedFolder)
	      await (0, import_completionEngine.moveTaskToCompletedFolder)(this.app, task.file, Boolean(task.parent));
	    if (shouldMoveFile && nextStatus !== "Finalizada" && isInCompletedFolder)
	      await (0, import_completionEngine.moveTaskToActiveFolder)(this.app, task.file, Boolean(task.parent));
	    if (shouldMoveFile && shouldSyncSubtasks && !task.parent) {
	      if (nextStatus === "En progreso")
	        await this.updateSubtasksStatusForParent(task.file.basename, "En progreso");
	      if (nextStatus === "Finalizada")
	        await this.moveSubtasksForParent(task.file.basename, true);
	      if (nextStatus !== "Finalizada" && isInCompletedFolder)
	        await this.moveSubtasksForParent(task.file.basename, false);
	    }
	    if (nextStatus === "Finalizada" || isInCompletedFolder)
	      await this.rebalanceTeamSchedule(task.equipo);
	  }
	  async moveSubtasksForParent(parentTaskName, toCompleted) {
	    const subtasks = (0, import_taskEngine.getTasks)(this.app).filter((item) => item.parent === parentTaskName);
	    for (const subtask of subtasks) {
	      if (toCompleted) {
	        if (subtask.estado !== "Finalizada")
	          await this.updateTask(subtask, { estado: "Finalizada" });
	        await (0, import_completionEngine.moveTaskToCompletedFolder)(this.app, subtask.file, true);
	      } else {
	        await (0, import_completionEngine.moveTaskToActiveFolder)(this.app, subtask.file, true);
	      }
	    }
	  }
	  async updateSubtasksStatusForParent(parentTaskName, nextStatus) {
	    const subtasks = (0, import_taskEngine.getTasks)(this.app).filter((item) => item.parent === parentTaskName);
	    for (const subtask of subtasks) {
	      if (subtask.estado === nextStatus)
	        continue;
	      await this.applyStateTransition(subtask, nextStatus, void 0, { syncSubtasksWithParent: false });
	    }
	  }
	  async rebalanceTeamSchedule(teamName) {
	    if (!teamName)
	      return;
	    await (0, import_scheduleEngine.rebalanceGroupEndDates)(this.app, teamName);
	  }
	  canDropOnRow(target, depth) {
	    return Boolean(
	      this.dragPath && this.dragPath !== target.file.path && this.dragDepth === depth && this.dragParent === target.parent
	    );
	  }
	  resetRowDragState(tbody, row) {
	    this.dragPath = null;
	    this.dragDepth = null;
	    this.dragParent = null;
	    row.removeClass("tareas-row-dragging");
	    tbody.querySelectorAll(".tareas-row-drag-over").forEach((item) => item.classList.remove("tareas-row-drag-over"));
	  }
	  resetCardDragState(container, card) {
	    this.dragPath = null;
	    this.dragDepth = null;
	    this.dragParent = null;
	    card.removeClass("tareas-task-card-dragging");
	    container.querySelectorAll(".tareas-task-card-drag-over").forEach((item) => item.classList.remove("tareas-task-card-drag-over"));
	  }
	  getRootEl() {
	    const root = this.containerEl.children[1];
	    if (!(root instanceof HTMLElement))
	      throw new Error("TareasView root element is not available");
	    return root;
	  }
	}
	return TareasView_1;
}

var TareasPlugin_1;
var hasRequiredTareasPlugin;

function requireTareasPlugin () {
	if (hasRequiredTareasPlugin) return TareasPlugin_1;
	hasRequiredTareasPlugin = 1;
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
	  // If the importer is in node compatibility mode or this is not an ESM
	  // file that has been converted to a CommonJS file using a Babel-
	  // compatible transform (i.e. "__esModule" has not been set), then set
	  // "default" to the CommonJS "module.exports" for node compatibility.
	  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
	  mod
	));
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var TareasPlugin_exports = {};
	__export(TareasPlugin_exports, {
	  TareasPlugin: () => TareasPlugin
	});
	TareasPlugin_1 = __toCommonJS(TareasPlugin_exports);
	var obsidian = __toESM(require$$0);
	var import_constants = requireConstants();
	var import_pomodoroEngine = requirePomodoroEngine();
	var import_frontmatterEngine = requireFrontmatterEngine();
	var import_taskIndexEngine = requireTaskIndexEngine();
	var import_NewTaskModal = requireNewTaskModal();
	var import_settings = requireSettings();
	var import_TareasView = requireTareasView();
	class TareasPlugin extends obsidian.Plugin {
	  equipos = [...import_constants.DEFAULT_EQUIPOS];
	  pomodoro = (0, import_pomodoroEngine.createDefaultPomodoroState)();
	  async onload() {
	    await this.loadSettings();
	    this.registerView(import_constants.VIEW_TYPE, (leaf) => new import_TareasView.TareasView(leaf, this));
	    this.addRibbonIcon("list-checks", "Abrir Tareas", () => this.activateView());
	    this.addCommand({
	      id: "open-tareas-view",
	      name: "Abrir vista de Tareas",
	      callback: () => this.activateView()
	    });
	    this.addCommand({
	      id: "new-tarea",
	      name: "Nueva tarea",
	      callback: () => new import_NewTaskModal.NewTaskModal(this.app, this).open()
	    });
	    await this.ensureTasksFolder();
	    await (0, import_taskIndexEngine.ensureTaskIndexFile)(this.app);
	    await (0, import_taskIndexEngine.ensureFinishedTaskIndexFile)(this.app);
	    await (0, import_frontmatterEngine.rebuildTaskChildLinks)(this.app);
	    await (0, import_frontmatterEngine.syncTaskTypeTags)(this.app);
	    await this.ensureObsidianGraphGroups();
	    this.registerEvent(this.app.vault.on("delete", (file) => {
	      void this.handleFileDelete(file);
	    }));
	  }
	  async activateView() {
	    const { workspace } = this.app;
	    let leaf = workspace.getLeavesOfType(import_constants.VIEW_TYPE)[0];
	    if (!leaf) {
	      leaf = workspace.getLeaf("tab");
	      await leaf.setViewState({ type: import_constants.VIEW_TYPE, active: true });
	    }
	    workspace.revealLeaf(leaf);
	  }
	  async loadSettings() {
	    const rawData = await this.loadData();
	    this.equipos = (0, import_settings.normalizeEquiposFromSettings)(rawData);
	    this.pomodoro = (0, import_settings.normalizePomodoroFromSettings)(rawData);
	  }
	  async saveSettings() {
	    await this.saveData({
	      equipos: this.equipos,
	      pomodoro: this.pomodoro
	    });
	  }
	  setPomodoroState(nextState) {
	    this.pomodoro = {
	      ...nextState,
	      durations: { ...nextState.durations }
	    };
	    void this.saveSettings();
	  }
	  addEquipo(name, color = "#6b5ce7") {
	    if (this.equipos.some((equipo) => equipo.name === name))
	      return;
	    this.equipos.push({ name, color });
	    void this.saveSettings();
	  }
	  removeEquipo(name) {
	    if (import_constants.LOCKED_EQUIPO_NAMES.includes(name))
	      return false;
	    const nextEquipos = this.equipos.filter((equipo) => equipo.name !== name);
	    if (nextEquipos.length === this.equipos.length)
	      return false;
	    this.equipos = nextEquipos;
	    void this.saveSettings();
	    return true;
	  }
	  updateEquipo(name, updates) {
	    const team = this.equipos.find((equipo) => equipo.name === name);
	    if (!team)
	      return;
	    Object.assign(team, updates);
	    void this.saveSettings();
	  }
	  async ensureTasksFolder() {
	    try {
	      await this.ensureFolderPath(import_constants.TAREAS_FOLDER);
	      await this.ensureFolderPath(import_constants.SUBTASKS_FOLDER);
	      await this.ensureFolderPath(import_constants.COMPLETED_TASKS_FOLDER);
	      await this.ensureFolderPath(import_constants.COMPLETED_SUBTASKS_FOLDER);
	    } catch {
	      new obsidian.Notice(`No se pudo crear la carpeta "${import_constants.TAREAS_FOLDER}".`);
	    }
	  }
	  async ensureFolderPath(path) {
	    const segments = path.split("/").filter(Boolean);
	    let currentPath = "";
	    for (const segment of segments) {
	      currentPath = currentPath ? `${currentPath}/${segment}` : segment;
	      const existing = this.app.vault.getAbstractFileByPath(currentPath);
	      if (existing instanceof obsidian.TFolder)
	        continue;
	      if (existing)
	        throw new Error(`Existe un archivo llamado "${currentPath}".`);
	      await this.app.vault.createFolder(currentPath);
	    }
	  }
	  async handleFileDelete(file) {
	    if (!(file instanceof obsidian.TFile))
	      return;
	    if (file.extension !== "md")
	      return;
	    if (!file.path.startsWith(`${import_constants.TAREAS_FOLDER}/`))
	      return;
	    await (0, import_taskIndexEngine.removeTaskLinkFromIndex)(this.app, file);
	    await (0, import_taskIndexEngine.removeTaskLinkFromFinishedIndex)(this.app, file);
	    await (0, import_frontmatterEngine.rebuildTaskChildLinks)(this.app);
	    await (0, import_frontmatterEngine.syncTaskTypeTags)(this.app);
	  }
	  async ensureObsidianGraphGroups() {
	    const desiredGroups = [
	      { query: `tag:#${import_constants.INDEX_TAG}`, color: "#7c5ce7" },
	      { query: `tag:#${import_constants.TASK_TAG}`, color: "#2e6db0" },
	      { query: `tag:#${import_constants.SUBTASK_TAG}`, color: "#00b894" }
	    ];
	    await this.ensureGraphConfigGroups(desiredGroups);
	    this.ensureRuntimeGraphGroups(desiredGroups);
	  }
	  async ensureGraphConfigGroups(desiredGroups) {
	    const adapter = this.app.vault.adapter;
	    const configDir = this.app.vault.configDir;
	    const graphConfigPath = `${configDir}/graph.json`;
	    let graphConfig = {};
	    try {
	      if (await adapter.exists(graphConfigPath)) {
	        const rawConfig = await adapter.read(graphConfigPath);
	        graphConfig = rawConfig.trim() ? JSON.parse(rawConfig) : {};
	      }
	    } catch {
	      graphConfig = {};
	    }
	    const currentGroups = Array.isArray(graphConfig.groups) ? graphConfig.groups : [];
	    graphConfig.groups = this.mergeGraphGroups(currentGroups, desiredGroups);
	    await adapter.write(graphConfigPath, JSON.stringify(graphConfig, null, 2));
	  }
	  ensureRuntimeGraphGroups(desiredGroups) {
	    const appWithInternals = this.app;
	    const graphInstance = appWithInternals.internalPlugins?.plugins?.graph?.instance;
	    if (!graphInstance)
	      return;
	    const candidateHolders = [
	      graphInstance.options,
	      graphInstance.localGraphOptions,
	      graphInstance.globalGraphOptions
	    ];
	    for (const holder of candidateHolders) {
	      if (!holder || !Array.isArray(holder.groups))
	        continue;
	      holder.groups = this.mergeGraphGroups(holder.groups, desiredGroups);
	    }
	  }
	  mergeGraphGroups(currentGroups, desiredGroups) {
	    const normalizedCurrent = currentGroups.filter((group) => Boolean(group) && typeof group === "object").filter((group) => typeof group.query === "string");
	    const byQuery = /* @__PURE__ */ new Map();
	    for (const group of normalizedCurrent)
	      byQuery.set(group.query, { ...group });
	    for (const group of desiredGroups) {
	      const existing = byQuery.get(group.query);
	      if (existing) {
	        if (!existing.color)
	          existing.color = group.color;
	        byQuery.set(group.query, existing);
	        continue;
	      }
	      byQuery.set(group.query, { query: group.query, color: group.color });
	    }
	    return Array.from(byQuery.values());
	  }
	}
	return TareasPlugin_1;
}

var taskMannager$1;
var hasRequiredTaskMannager;

function requireTaskMannager () {
	if (hasRequiredTaskMannager) return taskMannager$1;
	hasRequiredTaskMannager = 1;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from))
	      if (!__hasOwnProp.call(to, key) && key !== except)
	        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
	  }
	  return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var taskMannager_exports = {};
	__export(taskMannager_exports, {
	  TareasPlugin: () => import_TareasPlugin.TareasPlugin,
	  default: () => taskMannager_default
	});
	taskMannager$1 = __toCommonJS(taskMannager_exports);
	var import_TareasPlugin = requireTareasPlugin();
	var taskMannager_default = import_TareasPlugin.TareasPlugin;
	return taskMannager$1;
}

var taskMannagerExports = requireTaskMannager();
const taskMannager = /*@__PURE__*/getDefaultExportFromCjs(taskMannagerExports);

module.exports = taskMannager;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL3Rhc2tNYW5uYWdlci9jb25zdGFudHMudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL3V0aWxzL2d1YXJkcy50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy9wb21vZG9yb0VuZ2luZS50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy9mcm9udG1hdHRlckVuZ2luZS50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy90YXNrSW5kZXhFbmdpbmUudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL3V0aWxzL3N0YXR1cy50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy90YXNrRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9lbmdpbmVzL3NjaGVkdWxlRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci91dGlscy9zYW5pdGl6ZUZpbGVuYW1lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9tb2RhbHMvTmV3VGFza01vZGFsLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci91dGlscy9zZXR0aW5ncy50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy9jb21wbGV0aW9uRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9lbmdpbmVzL29yZGVyRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9lbmdpbmVzL3BvbW9kb3JvTG9nRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci91aS9jb2xvclBpY2tlci50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvbW9kYWxzL05ld0dyb3VwTW9kYWwudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL21vZGFscy9FZGl0U2VjdGlvbk1vZGFsLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9tb2RhbHMvRWRpdFRhc2tGaWxlTW9kYWwudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL21vZGFscy9BZGRUYXNrQ29tbWVudE1vZGFsLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9tb2RhbHMvUG9tb2Rvcm9QcmVzZXRNb2RhbC50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvbW9kYWxzL1NlbGVjdFBvbW9kb3JvVGFza01vZGFsLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci91aS9kcm9wZG93bi50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvdXRpbHMvZGVib3VuY2UudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL3ZpZXcvVGFyZWFzVmlldy50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvcGx1Z2luL1RhcmVhc1BsdWdpbi50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyLnRzP2NvbW1vbmpzLWVudHJ5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBWSUVXX1RZUEUgPSAndGFyZWFzLXZpZXcnXG5leHBvcnQgY29uc3QgVEFSRUFTX0ZPTERFUiA9ICd0YXNrLW1hbm5hZ2VyJ1xuZXhwb3J0IGNvbnN0IFNVQlRBU0tTX0ZPTERFUiA9IGAke1RBUkVBU19GT0xERVJ9L3N1YlRhc2tzYFxuZXhwb3J0IGNvbnN0IENPTVBMRVRFRF9UQVNLU19GT0xERVIgPSBgJHtUQVJFQVNfRk9MREVSfS9maW5pc2hlZGBcbmV4cG9ydCBjb25zdCBDT01QTEVURURfU1VCVEFTS1NfRk9MREVSID0gYCR7Q09NUExFVEVEX1RBU0tTX0ZPTERFUn0vc3ViVGFza3NgXG5leHBvcnQgY29uc3QgTEVHQUNZX0NPTVBMRVRFRF9UQVNLU19GT0xERVIgPSBgJHtUQVJFQVNfRk9MREVSfS9jb21wbGV0YWRhc2BcbmV4cG9ydCBjb25zdCBUQVNLX0lOREVYX0JBU0VOQU1FID0gJ3Rhc2tJbmRleCdcbmV4cG9ydCBjb25zdCBGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FID0gJ3Rhc2tJbmRleEZpbmlzaGVkJ1xuZXhwb3J0IGNvbnN0IFBPTU9ET1JPX0xPR19CQVNFTkFNRSA9ICdwb21vZG9ybydcbmV4cG9ydCBjb25zdCBJTkRFWF9UQUcgPSAnaW5kZXgnXG5leHBvcnQgY29uc3QgVEFTS19UQUcgPSAndGFzaydcbmV4cG9ydCBjb25zdCBTVUJUQVNLX1RBRyA9ICdzdWItdGFzaydcblxuZXhwb3J0IGNvbnN0IEVTVEFET1MgPSBbJ1BlbmRpZW50ZScsICdDYW5jZWxhZGEnLCAnRW4gcHJvZ3Jlc28nLCAnRmluYWxpemFkYScsICdCbG9xdWVhZGEnXVxuZXhwb3J0IGNvbnN0IFBSSU9SSURBREVTID0gWydCYWphJywgJ01lZGlhJywgJ0FsdGEnLCAnVXJnZW50ZSddXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0VRVUlQT1M6IEFycmF5PHsgbmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nIH0+ID0gW11cbmV4cG9ydCBjb25zdCBMT0NLRURfRVFVSVBPX05BTUVTOiBzdHJpbmdbXSA9IFtdXG5cbmV4cG9ydCBjb25zdCBQUkVTRVRfQ09MT1JTID0gW1xuICAnI2UwNWM1YycsICcjZTA4NTVjJywgJyNkOTdhMWUnLCAnI2M5Yjg0YScsXG4gICcjNGNhZjUwJywgJyMwMGI4OTQnLCAnIzA5ODRlMycsICcjMmU2ZGIwJyxcbiAgJyM3YzVjZTcnLCAnI2ZkNzlhOCcsICcjNjM2ZTcyJywgJyNiMmJlYzMnLFxuXVxuXG5leHBvcnQgY29uc3QgT1JERVJfU1RFUCA9IDEwXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BPTU9ET1JPX1dPUktfTUlOVVRFUyA9IDI1XG5leHBvcnQgY29uc3QgREVGQVVMVF9QT01PRE9ST19TSE9SVF9CUkVBS19NSU5VVEVTID0gNVxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUE9NT0RPUk9fTE9OR19CUkVBS19NSU5VVEVTID0gMTVcbmV4cG9ydCBjb25zdCBQT01PRE9ST19XT1JLX0NZQ0xFU19CRUZPUkVfTE9OR19CUkVBSyA9IDRcbiIsImltcG9ydCB0eXBlIHsgVGFza0Zyb250bWF0dGVyIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlY29yZCh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgcmV0dXJuIEJvb2xlYW4odmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvVGFza0Zyb250bWF0dGVyKHZhbHVlOiB1bmtub3duKTogVGFza0Zyb250bWF0dGVyIHwgbnVsbCB7XG4gIGlmICghaXNSZWNvcmQodmFsdWUpKVxuICAgIHJldHVybiBudWxsXG5cbiAgY29uc3QgZnJvbnRtYXR0ZXI6IFRhc2tGcm9udG1hdHRlciA9IHt9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZS50YXJlYSA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIudGFyZWEgPSB2YWx1ZS50YXJlYVxuICBpZiAodHlwZW9mIHZhbHVlLmRldGFsbGUgPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLmRldGFsbGUgPSB2YWx1ZS5kZXRhbGxlXG4gIGlmICh0eXBlb2YgdmFsdWUuZXN0YWRvID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5lc3RhZG8gPSB2YWx1ZS5lc3RhZG9cbiAgaWYgKHR5cGVvZiB2YWx1ZS5mZWNoYUluaWNpbyA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIuZmVjaGFJbmljaW8gPSB2YWx1ZS5mZWNoYUluaWNpb1xuICBpZiAodHlwZW9mIHZhbHVlLmZlY2hhRmluID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5mZWNoYUZpbiA9IHZhbHVlLmZlY2hhRmluXG4gIGlmICh0eXBlb2YgdmFsdWUuZXF1aXBvID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5lcXVpcG8gPSB2YWx1ZS5lcXVpcG9cbiAgaWYgKHR5cGVvZiB2YWx1ZS5wcmlvcmlkYWQgPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLnByaW9yaWRhZCA9IHZhbHVlLnByaW9yaWRhZFxuICBpZiAodHlwZW9mIHZhbHVlLmRlZGljYWRvID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUuZGVkaWNhZG8gPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLmRlZGljYWRvID0gdmFsdWUuZGVkaWNhZG9cbiAgaWYgKHR5cGVvZiB2YWx1ZS5lc3RpbWFjaW9uID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUuZXN0aW1hY2lvbiA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIuZXN0aW1hY2lvbiA9IHZhbHVlLmVzdGltYWNpb25cbiAgaWYgKHR5cGVvZiB2YWx1ZS5kZXN2aW8gPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWx1ZS5kZXN2aW8gPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLmRlc3ZpbyA9IHZhbHVlLmRlc3Zpb1xuICBpZiAodHlwZW9mIHZhbHVlLnBhcmVudCA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIucGFyZW50ID0gdmFsdWUucGFyZW50XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlLmNoaWxkcykgJiYgdmFsdWUuY2hpbGRzLmV2ZXJ5KGl0ZW0gPT4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSlcbiAgICBmcm9udG1hdHRlci5jaGlsZHMgPSB2YWx1ZS5jaGlsZHNcbiAgZWxzZSBpZiAodHlwZW9mIHZhbHVlLmNoaWxkcyA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIuY2hpbGRzID0gdmFsdWUuY2hpbGRzXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlLnRhZ3MpICYmIHZhbHVlLnRhZ3MuZXZlcnkoaXRlbSA9PiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpKVxuICAgIGZyb250bWF0dGVyLnRhZ3MgPSB2YWx1ZS50YWdzXG4gIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZS50YWdzID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci50YWdzID0gdmFsdWUudGFnc1xuICBpZiAodHlwZW9mIHZhbHVlLm9yZGVyID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUub3JkZXIgPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLm9yZGVyID0gdmFsdWUub3JkZXJcblxuICByZXR1cm4gZnJvbnRtYXR0ZXJcbn1cbiIsImltcG9ydCB7XG4gIERFRkFVTFRfUE9NT0RPUk9fTE9OR19CUkVBS19NSU5VVEVTLFxuICBERUZBVUxUX1BPTU9ET1JPX1NIT1JUX0JSRUFLX01JTlVURVMsXG4gIERFRkFVTFRfUE9NT0RPUk9fV09SS19NSU5VVEVTLFxuICBQT01PRE9ST19XT1JLX0NZQ0xFU19CRUZPUkVfTE9OR19CUkVBSyxcbn0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHR5cGUgeyBQb21vZG9yb0R1cmF0aW9ucywgUG9tb2Rvcm9QaGFzZSwgUG9tb2Rvcm9SdW5TdGF0ZSwgUG9tb2Rvcm9TdGF0ZSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgaXNSZWNvcmQgfSBmcm9tICcuLi91dGlscy9ndWFyZHMnXG5cbmNvbnN0IE1JTl9EVVJBVElPTl9NSU5VVEVTID0gMVxuY29uc3QgTUFYX0RVUkFUSU9OX01JTlVURVMgPSAxODBcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQb21vZG9yb1N0YXRlKCk6IFBvbW9kb3JvU3RhdGUge1xuICBjb25zdCBkdXJhdGlvbnMgPSBjcmVhdGVEZWZhdWx0UG9tb2Rvcm9EdXJhdGlvbnMoKVxuICByZXR1cm4ge1xuICAgIHBoYXNlOiAnd29yaycsXG4gICAgcnVuU3RhdGU6ICdpZGxlJyxcbiAgICByZW1haW5pbmdTZWNvbmRzOiBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyhkdXJhdGlvbnMsICd3b3JrJyksXG4gICAgZW5kVGltZXN0YW1wOiBudWxsLFxuICAgIGNvbXBsZXRlZFdvcmtDeWNsZXM6IDAsXG4gICAgc2VsZWN0ZWRUYXNrUGF0aDogbnVsbCxcbiAgICBpc0RldmlhdGlvbkFjdGl2ZTogZmFsc2UsXG4gICAgZGV2aWF0aW9uU3RhcnRlZEF0OiBudWxsLFxuICAgIGRldmlhdGlvbkJhc2VSZW1haW5pbmdTZWNvbmRzOiAwLFxuICAgIHBoYXNlRGV2aWF0aW9uU2Vjb25kczogMCxcbiAgICBkdXJhdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQb21vZG9yb0R1cmF0aW9ucygpOiBQb21vZG9yb0R1cmF0aW9ucyB7XG4gIHJldHVybiB7XG4gICAgd29ya01pbnV0ZXM6IERFRkFVTFRfUE9NT0RPUk9fV09SS19NSU5VVEVTLFxuICAgIHNob3J0QnJlYWtNaW51dGVzOiBERUZBVUxUX1BPTU9ET1JPX1NIT1JUX0JSRUFLX01JTlVURVMsXG4gICAgbG9uZ0JyZWFrTWludXRlczogREVGQVVMVF9QT01PRE9ST19MT05HX0JSRUFLX01JTlVURVMsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVBvbW9kb3JvU3RhdGUocmF3VmFsdWU6IHVua25vd24pOiBQb21vZG9yb1N0YXRlIHtcbiAgY29uc3QgZmFsbGJhY2sgPSBjcmVhdGVEZWZhdWx0UG9tb2Rvcm9TdGF0ZSgpXG4gIGlmICghaXNSZWNvcmQocmF3VmFsdWUpKVxuICAgIHJldHVybiBmYWxsYmFja1xuXG4gIGNvbnN0IGR1cmF0aW9ucyA9IG5vcm1hbGl6ZVBvbW9kb3JvRHVyYXRpb25zKHJhd1ZhbHVlLmR1cmF0aW9ucylcbiAgY29uc3QgcGhhc2UgPSBub3JtYWxpemVQb21vZG9yb1BoYXNlKHJhd1ZhbHVlLnBoYXNlKVxuICBjb25zdCBydW5TdGF0ZSA9IG5vcm1hbGl6ZVBvbW9kb3JvUnVuU3RhdGUocmF3VmFsdWUucnVuU3RhdGUpXG4gIGNvbnN0IGRlZmF1bHRSZW1haW5pbmcgPSBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyhkdXJhdGlvbnMsIHBoYXNlKVxuICBjb25zdCByZW1haW5pbmdTZWNvbmRzID0gbm9ybWFsaXplU2Vjb25kcyhyYXdWYWx1ZS5yZW1haW5pbmdTZWNvbmRzLCBkZWZhdWx0UmVtYWluaW5nKVxuICBjb25zdCBlbmRUaW1lc3RhbXAgPSB0eXBlb2YgcmF3VmFsdWUuZW5kVGltZXN0YW1wID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNGaW5pdGUocmF3VmFsdWUuZW5kVGltZXN0YW1wKVxuICAgID8gcmF3VmFsdWUuZW5kVGltZXN0YW1wXG4gICAgOiBudWxsXG4gIGNvbnN0IGNvbXBsZXRlZFdvcmtDeWNsZXMgPSB0eXBlb2YgcmF3VmFsdWUuY29tcGxldGVkV29ya0N5Y2xlcyA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzRmluaXRlKHJhd1ZhbHVlLmNvbXBsZXRlZFdvcmtDeWNsZXMpXG4gICAgPyBNYXRoLm1heCgwLCBNYXRoLmZsb29yKHJhd1ZhbHVlLmNvbXBsZXRlZFdvcmtDeWNsZXMpKVxuICAgIDogMFxuICBjb25zdCBzZWxlY3RlZFRhc2tQYXRoID0gdHlwZW9mIHJhd1ZhbHVlLnNlbGVjdGVkVGFza1BhdGggPT09ICdzdHJpbmcnICYmIHJhd1ZhbHVlLnNlbGVjdGVkVGFza1BhdGgudHJpbSgpLmxlbmd0aCA+IDBcbiAgICA/IHJhd1ZhbHVlLnNlbGVjdGVkVGFza1BhdGhcbiAgICA6IG51bGxcbiAgY29uc3QgaXNEZXZpYXRpb25BY3RpdmUgPSBCb29sZWFuKHJhd1ZhbHVlLmlzRGV2aWF0aW9uQWN0aXZlKVxuICBjb25zdCBkZXZpYXRpb25TdGFydGVkQXQgPSB0eXBlb2YgcmF3VmFsdWUuZGV2aWF0aW9uU3RhcnRlZEF0ID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNGaW5pdGUocmF3VmFsdWUuZGV2aWF0aW9uU3RhcnRlZEF0KVxuICAgID8gcmF3VmFsdWUuZGV2aWF0aW9uU3RhcnRlZEF0XG4gICAgOiBudWxsXG4gIGNvbnN0IGRldmlhdGlvbkJhc2VSZW1haW5pbmdTZWNvbmRzID0gbm9ybWFsaXplU2Vjb25kcyhyYXdWYWx1ZS5kZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kcywgMClcbiAgY29uc3QgcGhhc2VEZXZpYXRpb25TZWNvbmRzID0gbm9ybWFsaXplU2Vjb25kcyhyYXdWYWx1ZS5waGFzZURldmlhdGlvblNlY29uZHMsIDApXG5cbiAgcmV0dXJuIHtcbiAgICBwaGFzZSxcbiAgICBydW5TdGF0ZSxcbiAgICByZW1haW5pbmdTZWNvbmRzLFxuICAgIGVuZFRpbWVzdGFtcCxcbiAgICBjb21wbGV0ZWRXb3JrQ3ljbGVzLFxuICAgIHNlbGVjdGVkVGFza1BhdGgsXG4gICAgaXNEZXZpYXRpb25BY3RpdmUsXG4gICAgZGV2aWF0aW9uU3RhcnRlZEF0OiBpc0RldmlhdGlvbkFjdGl2ZSA/IGRldmlhdGlvblN0YXJ0ZWRBdCA6IG51bGwsXG4gICAgZGV2aWF0aW9uQmFzZVJlbWFpbmluZ1NlY29uZHM6IGlzRGV2aWF0aW9uQWN0aXZlID8gZGV2aWF0aW9uQmFzZVJlbWFpbmluZ1NlY29uZHMgOiAwLFxuICAgIHBoYXNlRGV2aWF0aW9uU2Vjb25kcyxcbiAgICBkdXJhdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVBvbW9kb3JvRHVyYXRpb25zKHJhd1ZhbHVlOiB1bmtub3duKTogUG9tb2Rvcm9EdXJhdGlvbnMge1xuICBjb25zdCBmYWxsYmFjayA9IGNyZWF0ZURlZmF1bHRQb21vZG9yb0R1cmF0aW9ucygpXG4gIGlmICghaXNSZWNvcmQocmF3VmFsdWUpKVxuICAgIHJldHVybiBmYWxsYmFja1xuXG4gIHJldHVybiB7XG4gICAgd29ya01pbnV0ZXM6IGNsYW1wTWludXRlcyhyYXdWYWx1ZS53b3JrTWludXRlcywgZmFsbGJhY2sud29ya01pbnV0ZXMpLFxuICAgIHNob3J0QnJlYWtNaW51dGVzOiBjbGFtcE1pbnV0ZXMocmF3VmFsdWUuc2hvcnRCcmVha01pbnV0ZXMsIGZhbGxiYWNrLnNob3J0QnJlYWtNaW51dGVzKSxcbiAgICBsb25nQnJlYWtNaW51dGVzOiBjbGFtcE1pbnV0ZXMocmF3VmFsdWUubG9uZ0JyZWFrTWludXRlcywgZmFsbGJhY2subG9uZ0JyZWFrTWludXRlcyksXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKGR1cmF0aW9uczogUG9tb2Rvcm9EdXJhdGlvbnMsIHBoYXNlOiBQb21vZG9yb1BoYXNlKTogbnVtYmVyIHtcbiAgaWYgKHBoYXNlID09PSAnc2hvcnQtYnJlYWsnKVxuICAgIHJldHVybiBkdXJhdGlvbnMuc2hvcnRCcmVha01pbnV0ZXMgKiA2MFxuXG4gIGlmIChwaGFzZSA9PT0gJ2xvbmctYnJlYWsnKVxuICAgIHJldHVybiBkdXJhdGlvbnMubG9uZ0JyZWFrTWludXRlcyAqIDYwXG5cbiAgcmV0dXJuIGR1cmF0aW9ucy53b3JrTWludXRlcyAqIDYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb21vZG9yb1JlbWFpbmluZ1NlY29uZHMoc3RhdGU6IFBvbW9kb3JvU3RhdGUsIG5vd01zOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAoc3RhdGUucnVuU3RhdGUgIT09ICdydW5uaW5nJyB8fCBzdGF0ZS5lbmRUaW1lc3RhbXAgPT09IG51bGwpXG4gICAgcmV0dXJuIHN0YXRlLnJlbWFpbmluZ1NlY29uZHNcblxuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5jZWlsKChzdGF0ZS5lbmRUaW1lc3RhbXAgLSBub3dNcykgLyAxMDAwKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UG9tb2Rvcm8oc3RhdGU6IFBvbW9kb3JvU3RhdGUsIG5vd01zOiBudW1iZXIpOiBQb21vZG9yb1N0YXRlIHtcbiAgaWYgKHN0YXRlLnJ1blN0YXRlID09PSAncnVubmluZycgfHwgc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUpXG4gICAgcmV0dXJuIHN0YXRlXG5cbiAgY29uc3QgcmVtYWluaW5nU2Vjb25kcyA9IHN0YXRlLnJ1blN0YXRlID09PSAncGF1c2VkJ1xuICAgID8gc3RhdGUucmVtYWluaW5nU2Vjb25kc1xuICAgIDogZ2V0UGhhc2VEdXJhdGlvblNlY29uZHMoc3RhdGUuZHVyYXRpb25zLCBzdGF0ZS5waGFzZSlcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIHJ1blN0YXRlOiAncnVubmluZycsXG4gICAgcmVtYWluaW5nU2Vjb25kcyxcbiAgICBlbmRUaW1lc3RhbXA6IG5vd01zICsgcmVtYWluaW5nU2Vjb25kcyAqIDEwMDAsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdXNlUG9tb2Rvcm8oc3RhdGU6IFBvbW9kb3JvU3RhdGUsIG5vd01zOiBudW1iZXIpOiBQb21vZG9yb1N0YXRlIHtcbiAgaWYgKHN0YXRlLnJ1blN0YXRlICE9PSAncnVubmluZycgfHwgc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUpXG4gICAgcmV0dXJuIHN0YXRlXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBydW5TdGF0ZTogJ3BhdXNlZCcsXG4gICAgcmVtYWluaW5nU2Vjb25kczogZ2V0UG9tb2Rvcm9SZW1haW5pbmdTZWNvbmRzKHN0YXRlLCBub3dNcyksXG4gICAgZW5kVGltZXN0YW1wOiBudWxsLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXN1bWVQb21vZG9ybyhzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgbm93TXM6IG51bWJlcik6IFBvbW9kb3JvU3RhdGUge1xuICBpZiAoc3RhdGUucnVuU3RhdGUgIT09ICdwYXVzZWQnIHx8IHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlKVxuICAgIHJldHVybiBzdGF0ZVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgcnVuU3RhdGU6ICdydW5uaW5nJyxcbiAgICBlbmRUaW1lc3RhbXA6IG5vd01zICsgc3RhdGUucmVtYWluaW5nU2Vjb25kcyAqIDEwMDAsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0UG9tb2Rvcm8oc3RhdGU6IFBvbW9kb3JvU3RhdGUpOiBQb21vZG9yb1N0YXRlIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBydW5TdGF0ZTogJ2lkbGUnLFxuICAgIHJlbWFpbmluZ1NlY29uZHM6IGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKHN0YXRlLmR1cmF0aW9ucywgc3RhdGUucGhhc2UpLFxuICAgIGVuZFRpbWVzdGFtcDogbnVsbCxcbiAgICBpc0RldmlhdGlvbkFjdGl2ZTogZmFsc2UsXG4gICAgZGV2aWF0aW9uU3RhcnRlZEF0OiBudWxsLFxuICAgIGRldmlhdGlvbkJhc2VSZW1haW5pbmdTZWNvbmRzOiAwLFxuICAgIHBoYXNlRGV2aWF0aW9uU2Vjb25kczogMCxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQb21vZG9yb0R1cmF0aW9ucyhzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgZHVyYXRpb25zOiBQb21vZG9yb0R1cmF0aW9ucyk6IFBvbW9kb3JvU3RhdGUge1xuICBpZiAoc3RhdGUucnVuU3RhdGUgIT09ICdpZGxlJylcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgZHVyYXRpb25zOiB7IC4uLmR1cmF0aW9ucyB9IH1cblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGR1cmF0aW9uczogeyAuLi5kdXJhdGlvbnMgfSxcbiAgICByZW1haW5pbmdTZWNvbmRzOiBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyhkdXJhdGlvbnMsIHN0YXRlLnBoYXNlKSxcbiAgICBlbmRUaW1lc3RhbXA6IG51bGwsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkdmFuY2VQb21vZG9yb1N0YXRlKFxuICBzdGF0ZTogUG9tb2Rvcm9TdGF0ZSxcbiAgbm93TXM6IG51bWJlcixcbik6IHsgc3RhdGU6IFBvbW9kb3JvU3RhdGUsIGNvbXBsZXRlZFBoYXNlczogUG9tb2Rvcm9QaGFzZVtdLCB0cmFuc2l0aW9uZWQ6IGJvb2xlYW4gfSB7XG4gIGlmIChzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSB8fCBzdGF0ZS5ydW5TdGF0ZSAhPT0gJ3J1bm5pbmcnIHx8IHN0YXRlLmVuZFRpbWVzdGFtcCA9PT0gbnVsbClcbiAgICByZXR1cm4geyBzdGF0ZSwgY29tcGxldGVkUGhhc2VzOiBbXSwgdHJhbnNpdGlvbmVkOiBmYWxzZSB9XG5cbiAgbGV0IG5leHQgPSB7IC4uLnN0YXRlLCBkdXJhdGlvbnM6IHsgLi4uc3RhdGUuZHVyYXRpb25zIH0gfVxuICBjb25zdCBjb21wbGV0ZWRQaGFzZXM6IFBvbW9kb3JvUGhhc2VbXSA9IFtdXG4gIGxldCB0cmFuc2l0aW9uZWQgPSBmYWxzZVxuXG4gIHdoaWxlIChuZXh0LmVuZFRpbWVzdGFtcCAhPT0gbnVsbCAmJiBuZXh0LmVuZFRpbWVzdGFtcCA8PSBub3dNcykge1xuICAgIGNvbXBsZXRlZFBoYXNlcy5wdXNoKG5leHQucGhhc2UpXG4gICAgdHJhbnNpdGlvbmVkID0gdHJ1ZVxuXG4gICAgaWYgKG5leHQucGhhc2UgPT09ICd3b3JrJykge1xuICAgICAgY29uc3QgY29tcGxldGVkV29ya0N5Y2xlcyA9IG5leHQuY29tcGxldGVkV29ya0N5Y2xlcyArIDFcbiAgICAgIGNvbnN0IG5leHRQaGFzZTogUG9tb2Rvcm9QaGFzZSA9IGNvbXBsZXRlZFdvcmtDeWNsZXMgJSBQT01PRE9ST19XT1JLX0NZQ0xFU19CRUZPUkVfTE9OR19CUkVBSyA9PT0gMFxuICAgICAgICA/ICdsb25nLWJyZWFrJ1xuICAgICAgICA6ICdzaG9ydC1icmVhaydcbiAgICAgIGNvbnN0IG5leHREdXJhdGlvbiA9IGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKG5leHQuZHVyYXRpb25zLCBuZXh0UGhhc2UpXG4gICAgICBuZXh0ID0ge1xuICAgICAgICAuLi5uZXh0LFxuICAgICAgICBwaGFzZTogbmV4dFBoYXNlLFxuICAgICAgICBjb21wbGV0ZWRXb3JrQ3ljbGVzLFxuICAgICAgICBydW5TdGF0ZTogJ3J1bm5pbmcnLFxuICAgICAgICByZW1haW5pbmdTZWNvbmRzOiBuZXh0RHVyYXRpb24sXG4gICAgICAgIGVuZFRpbWVzdGFtcDogKG5leHQuZW5kVGltZXN0YW1wID8/IG5vd01zKSArIG5leHREdXJhdGlvbiAqIDEwMDAsXG4gICAgICB9XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IG5leHREdXJhdGlvbiA9IGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKG5leHQuZHVyYXRpb25zLCAnd29yaycpXG4gICAgbmV4dCA9IHtcbiAgICAgIC4uLm5leHQsXG4gICAgICBwaGFzZTogJ3dvcmsnLFxuICAgICAgcnVuU3RhdGU6ICdydW5uaW5nJyxcbiAgICAgIHJlbWFpbmluZ1NlY29uZHM6IG5leHREdXJhdGlvbixcbiAgICAgIGVuZFRpbWVzdGFtcDogKG5leHQuZW5kVGltZXN0YW1wID8/IG5vd01zKSArIG5leHREdXJhdGlvbiAqIDEwMDAsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVtYWluaW5nU2Vjb25kcyA9IGdldFBvbW9kb3JvUmVtYWluaW5nU2Vjb25kcyhuZXh0LCBub3dNcylcbiAgaWYgKHJlbWFpbmluZ1NlY29uZHMgIT09IG5leHQucmVtYWluaW5nU2Vjb25kcylcbiAgICBuZXh0ID0geyAuLi5uZXh0LCByZW1haW5pbmdTZWNvbmRzIH1cblxuICByZXR1cm4geyBzdGF0ZTogbmV4dCwgY29tcGxldGVkUGhhc2VzLCB0cmFuc2l0aW9uZWQgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGV2aWF0aW9uRWxhcHNlZFNlY29uZHMoc3RhdGU6IFBvbW9kb3JvU3RhdGUsIG5vd01zOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAoIXN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlIHx8IHN0YXRlLmRldmlhdGlvblN0YXJ0ZWRBdCA9PT0gbnVsbClcbiAgICByZXR1cm4gMFxuXG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLmZsb29yKChub3dNcyAtIHN0YXRlLmRldmlhdGlvblN0YXJ0ZWRBdCkgLyAxMDAwKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGVyUG9tb2Rvcm9EZXZpYXRpb24oc3RhdGU6IFBvbW9kb3JvU3RhdGUsIG5vd01zOiBudW1iZXIpOiBQb21vZG9yb1N0YXRlIHtcbiAgaWYgKHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlIHx8IHN0YXRlLnJ1blN0YXRlICE9PSAncnVubmluZycpXG4gICAgcmV0dXJuIHN0YXRlXG5cbiAgY29uc3QgcmVtYWluaW5nU2Vjb25kcyA9IGdldFBvbW9kb3JvUmVtYWluaW5nU2Vjb25kcyhzdGF0ZSwgbm93TXMpXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgcnVuU3RhdGU6ICdwYXVzZWQnLFxuICAgIHJlbWFpbmluZ1NlY29uZHMsXG4gICAgZW5kVGltZXN0YW1wOiBudWxsLFxuICAgIGlzRGV2aWF0aW9uQWN0aXZlOiB0cnVlLFxuICAgIGRldmlhdGlvblN0YXJ0ZWRBdDogbm93TXMsXG4gICAgZGV2aWF0aW9uQmFzZVJlbWFpbmluZ1NlY29uZHM6IHJlbWFpbmluZ1NlY29uZHMsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4aXRQb21vZG9yb0RldmlhdGlvbihcbiAgc3RhdGU6IFBvbW9kb3JvU3RhdGUsXG4gIG5vd01zOiBudW1iZXIsXG4pOiB7IHN0YXRlOiBQb21vZG9yb1N0YXRlLCBlbGFwc2VkU2Vjb25kczogbnVtYmVyLCBjb21wbGV0ZWRXb3JrOiBib29sZWFuLCBvdmVydGltZVNlY29uZHM6IG51bWJlciB9IHtcbiAgaWYgKCFzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSlcbiAgICByZXR1cm4geyBzdGF0ZSwgZWxhcHNlZFNlY29uZHM6IDAsIGNvbXBsZXRlZFdvcms6IGZhbHNlLCBvdmVydGltZVNlY29uZHM6IDAgfVxuXG4gIGNvbnN0IGVsYXBzZWRTZWNvbmRzID0gZ2V0RGV2aWF0aW9uRWxhcHNlZFNlY29uZHMoc3RhdGUsIG5vd01zKVxuICBjb25zdCBiYXNlUmVtYWluaW5nID0gTWF0aC5tYXgoMCwgc3RhdGUuZGV2aWF0aW9uQmFzZVJlbWFpbmluZ1NlY29uZHMpXG5cbiAgY29uc3QgY2xlYXJEZXZpYXRpb24gPSAobmV4dDogUG9tb2Rvcm9TdGF0ZSk6IFBvbW9kb3JvU3RhdGUgPT4gKHtcbiAgICAuLi5uZXh0LFxuICAgIGlzRGV2aWF0aW9uQWN0aXZlOiBmYWxzZSxcbiAgICBkZXZpYXRpb25TdGFydGVkQXQ6IG51bGwsXG4gICAgZGV2aWF0aW9uQmFzZVJlbWFpbmluZ1NlY29uZHM6IDAsXG4gICAgcGhhc2VEZXZpYXRpb25TZWNvbmRzOiBuZXh0LnBoYXNlRGV2aWF0aW9uU2Vjb25kcyArIGVsYXBzZWRTZWNvbmRzLFxuICB9KVxuXG4gIGlmIChzdGF0ZS5waGFzZSAhPT0gJ3dvcmsnKSB7XG4gICAgY29uc3QgcmVtYWluaW5nU2Vjb25kcyA9IE1hdGgubWF4KDAsIGJhc2VSZW1haW5pbmcgLSBlbGFwc2VkU2Vjb25kcylcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IGNsZWFyRGV2aWF0aW9uKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJ1blN0YXRlOiAncnVubmluZycsXG4gICAgICAgIHJlbWFpbmluZ1NlY29uZHMsXG4gICAgICAgIGVuZFRpbWVzdGFtcDogbm93TXMgKyByZW1haW5pbmdTZWNvbmRzICogMTAwMCxcbiAgICAgIH0pLFxuICAgICAgZWxhcHNlZFNlY29uZHMsXG4gICAgICBjb21wbGV0ZWRXb3JrOiBmYWxzZSxcbiAgICAgIG92ZXJ0aW1lU2Vjb25kczogMCxcbiAgICB9XG4gIH1cblxuICBpZiAoZWxhcHNlZFNlY29uZHMgPCBiYXNlUmVtYWluaW5nKSB7XG4gICAgY29uc3QgcmVtYWluaW5nU2Vjb25kcyA9IE1hdGgubWF4KDAsIGJhc2VSZW1haW5pbmcgLSBlbGFwc2VkU2Vjb25kcylcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IGNsZWFyRGV2aWF0aW9uKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJ1blN0YXRlOiAncnVubmluZycsXG4gICAgICAgIHJlbWFpbmluZ1NlY29uZHMsXG4gICAgICAgIGVuZFRpbWVzdGFtcDogbm93TXMgKyByZW1haW5pbmdTZWNvbmRzICogMTAwMCxcbiAgICAgIH0pLFxuICAgICAgZWxhcHNlZFNlY29uZHMsXG4gICAgICBjb21wbGV0ZWRXb3JrOiBmYWxzZSxcbiAgICAgIG92ZXJ0aW1lU2Vjb25kczogMCxcbiAgICB9XG4gIH1cblxuICBjb25zdCBvdmVydGltZVNlY29uZHMgPSBlbGFwc2VkU2Vjb25kcyAtIGJhc2VSZW1haW5pbmdcbiAgY29uc3QgY29tcGxldGVkV29ya0N5Y2xlcyA9IHN0YXRlLmNvbXBsZXRlZFdvcmtDeWNsZXMgKyAxXG4gIGNvbnN0IG5leHRQaGFzZTogUG9tb2Rvcm9QaGFzZSA9IGNvbXBsZXRlZFdvcmtDeWNsZXMgJSBQT01PRE9ST19XT1JLX0NZQ0xFU19CRUZPUkVfTE9OR19CUkVBSyA9PT0gMFxuICAgID8gJ2xvbmctYnJlYWsnXG4gICAgOiAnc2hvcnQtYnJlYWsnXG4gIGNvbnN0IGJhc2VCcmVha1NlY29uZHMgPSBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyhzdGF0ZS5kdXJhdGlvbnMsIG5leHRQaGFzZSlcbiAgY29uc3Qgd29ya0R1cmF0aW9uU2Vjb25kcyA9IE1hdGgubWF4KDEsIGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKHN0YXRlLmR1cmF0aW9ucywgJ3dvcmsnKSlcbiAgY29uc3QgZXh0cmFCcmVha1NlY29uZHMgPSBNYXRoLnJvdW5kKChvdmVydGltZVNlY29uZHMgKiBiYXNlQnJlYWtTZWNvbmRzKSAvIHdvcmtEdXJhdGlvblNlY29uZHMpXG4gIGNvbnN0IG5leHRCcmVha1NlY29uZHMgPSBiYXNlQnJlYWtTZWNvbmRzICsgZXh0cmFCcmVha1NlY29uZHNcblxuICByZXR1cm4ge1xuICAgIHN0YXRlOiBjbGVhckRldmlhdGlvbih7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHBoYXNlOiBuZXh0UGhhc2UsXG4gICAgICBydW5TdGF0ZTogJ3J1bm5pbmcnLFxuICAgICAgY29tcGxldGVkV29ya0N5Y2xlcyxcbiAgICAgIHJlbWFpbmluZ1NlY29uZHM6IG5leHRCcmVha1NlY29uZHMsXG4gICAgICBlbmRUaW1lc3RhbXA6IG5vd01zICsgbmV4dEJyZWFrU2Vjb25kcyAqIDEwMDAsXG4gICAgfSksXG4gICAgZWxhcHNlZFNlY29uZHMsXG4gICAgY29tcGxldGVkV29yazogdHJ1ZSxcbiAgICBvdmVydGltZVNlY29uZHMsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvbW9kb3JvUGhhc2VMYWJlbChwaGFzZTogUG9tb2Rvcm9QaGFzZSk6IHN0cmluZyB7XG4gIGlmIChwaGFzZSA9PT0gJ3Nob3J0LWJyZWFrJylcbiAgICByZXR1cm4gJ0Rlc2NhbnNvIGNvcnRvJ1xuXG4gIGlmIChwaGFzZSA9PT0gJ2xvbmctYnJlYWsnKVxuICAgIHJldHVybiAnRGVzY2Fuc28gbGFyZ28nXG5cbiAgcmV0dXJuICdUcmFiYWpvJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UG9tb2Rvcm9Db3VudGRvd24odG90YWxTZWNvbmRzOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHMgLyA2MClcbiAgY29uc3Qgc2Vjb25kcyA9IHRvdGFsU2Vjb25kcyAlIDYwXG4gIHJldHVybiBgJHtTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgJzAnKX06JHtTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwgJzAnKX1gXG59XG5cbmZ1bmN0aW9uIGNsYW1wTWludXRlcyh2YWx1ZTogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInIHx8ICFOdW1iZXIuaXNGaW5pdGUodmFsdWUpKVxuICAgIHJldHVybiBmYWxsYmFja1xuXG4gIHJldHVybiBNYXRoLm1pbihNQVhfRFVSQVRJT05fTUlOVVRFUywgTWF0aC5tYXgoTUlOX0RVUkFUSU9OX01JTlVURVMsIE1hdGgucm91bmQodmFsdWUpKSlcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUG9tb2Rvcm9QaGFzZSh2YWx1ZTogdW5rbm93bik6IFBvbW9kb3JvUGhhc2Uge1xuICBpZiAodmFsdWUgPT09ICd3b3JrJyB8fCB2YWx1ZSA9PT0gJ3Nob3J0LWJyZWFrJyB8fCB2YWx1ZSA9PT0gJ2xvbmctYnJlYWsnKVxuICAgIHJldHVybiB2YWx1ZVxuXG4gIHJldHVybiAnd29yaydcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUG9tb2Rvcm9SdW5TdGF0ZSh2YWx1ZTogdW5rbm93bik6IFBvbW9kb3JvUnVuU3RhdGUge1xuICBpZiAodmFsdWUgPT09ICdpZGxlJyB8fCB2YWx1ZSA9PT0gJ3J1bm5pbmcnIHx8IHZhbHVlID09PSAncGF1c2VkJylcbiAgICByZXR1cm4gdmFsdWVcblxuICByZXR1cm4gJ2lkbGUnXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNlY29uZHModmFsdWU6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJyB8fCAhTnVtYmVyLmlzRmluaXRlKHZhbHVlKSlcbiAgICByZXR1cm4gZmFsbGJhY2tcblxuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcih2YWx1ZSkpXG59XG4iLCJpbXBvcnQgdHlwZSB7IEFwcCwgVEZpbGUgfSBmcm9tICdvYnNpZGlhbidcblxuaW1wb3J0IHtcbiAgRklOSVNIRURfVEFTS19JTkRFWF9CQVNFTkFNRSxcbiAgSU5ERVhfVEFHLFxuICBTVUJUQVNLX1RBRyxcbiAgU1VCVEFTS1NfRk9MREVSLFxuICBUQVJFQVNfRk9MREVSLFxuICBUQVNLX0lOREVYX0JBU0VOQU1FLFxuICBUQVNLX1RBRyxcbn0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHR5cGUgeyBUYXNrRnJvbnRtYXR0ZXIgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IHRvVGFza0Zyb250bWF0dGVyIH0gZnJvbSAnLi4vdXRpbHMvZ3VhcmRzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRnJvbnRtYXR0ZXIoYXBwOiBBcHAsIGZpbGU6IFRGaWxlLCB1cGRhdGVzOiBQYXJ0aWFsPFRhc2tGcm9udG1hdHRlcj4pIHtcbiAgYXdhaXQgYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcihmaWxlLCAoZm0pID0+IHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh1cGRhdGVzKSlcbiAgICAgIGZtW2tleV0gPSB2YWx1ZVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lVGVhbUluVGFza3MoYXBwOiBBcHAsIG9sZE5hbWU6IHN0cmluZywgbmV3TmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IGZpbGVzID0gYXBwLnZhdWx0XG4gICAgLmdldE1hcmtkb3duRmlsZXMoKVxuICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLnBhdGguc3RhcnRzV2l0aChgJHtUQVJFQVNfRk9MREVSfS9gKSlcblxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBmbSA9IHRvVGFza0Zyb250bWF0dGVyKGFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKT8uZnJvbnRtYXR0ZXIpXG4gICAgaWYgKGZtPy5lcXVpcG8gIT09IG9sZE5hbWUpXG4gICAgICBjb250aW51ZVxuXG4gICAgYXdhaXQgYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcihmaWxlLCAoZnJvbnRtYXR0ZXIpID0+IHtcbiAgICAgIGZyb250bWF0dGVyLmVxdWlwbyA9IG5ld05hbWVcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3VudFRvcExldmVsVGVhbVRhc2tzKGFwcDogQXBwLCB0ZWFtTmFtZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgZmlsZXMgPSBhcHAudmF1bHRcbiAgICAuZ2V0TWFya2Rvd25GaWxlcygpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUucGF0aC5zdGFydHNXaXRoKGAke1RBUkVBU19GT0xERVJ9L2ApKVxuXG4gIGxldCBjb3VudCA9IDBcbiAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgY29uc3QgZm0gPSB0b1Rhc2tGcm9udG1hdHRlcihhcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk/LmZyb250bWF0dGVyKVxuICAgIGlmIChmbT8uZXF1aXBvID09PSB0ZWFtTmFtZSAmJiAhZm0/LnBhcmVudClcbiAgICAgIGNvdW50KytcbiAgfVxuXG4gIHJldHVybiBjb3VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVidWlsZFRhc2tDaGlsZExpbmtzKGFwcDogQXBwKSB7XG4gIGNvbnN0IGZpbGVzID0gYXBwLnZhdWx0XG4gICAgLmdldE1hcmtkb3duRmlsZXMoKVxuICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLnBhdGguc3RhcnRzV2l0aChgJHtUQVJFQVNfRk9MREVSfS9gKSlcbiAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5iYXNlbmFtZSAhPT0gVEFTS19JTkRFWF9CQVNFTkFNRSAmJiBmaWxlLmJhc2VuYW1lICE9PSBGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FKVxuXG4gIGNvbnN0IGNoaWxkTWFwID0gbmV3IE1hcDxzdHJpbmcsIFNldDxzdHJpbmc+PigpXG4gIGNvbnN0IHRhc2tFbnRyaWVzOiBBcnJheTx7IGZpbGU6IFRGaWxlLCB0YXNrTmFtZTogc3RyaW5nIH0+ID0gW11cblxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBmbSA9IGF3YWl0IHJlYWRUYXNrRnJvbnRtYXR0ZXIoYXBwLCBmaWxlKVxuICAgIGlmICghZm0pXG4gICAgICBjb250aW51ZVxuXG4gICAgY29uc3QgdGFza05hbWUgPSAoZm0/LnRhcmVhPy50cmltKCkgfHwgZmlsZS5iYXNlbmFtZSkudHJpbSgpXG4gICAgdGFza0VudHJpZXMucHVzaCh7IGZpbGUsIHRhc2tOYW1lIH0pXG5cbiAgICBjb25zdCBwYXJlbnROYW1lID0gbm9ybWFsaXplUGFyZW50UmVmZXJlbmNlKGZtPy5wYXJlbnQpXG4gICAgaWYgKCFwYXJlbnROYW1lKVxuICAgICAgY29udGludWVcblxuICAgIGNvbnN0IGNoaWxkU2V0ID0gY2hpbGRNYXAuZ2V0KHBhcmVudE5hbWUpID8/IG5ldyBTZXQ8c3RyaW5nPigpXG4gICAgY2hpbGRTZXQuYWRkKGZpbGUuYmFzZW5hbWUpXG4gICAgY2hpbGRNYXAuc2V0KHBhcmVudE5hbWUsIGNoaWxkU2V0KVxuICB9XG5cbiAgZm9yIChjb25zdCBlbnRyeSBvZiB0YXNrRW50cmllcykge1xuICAgIGNvbnN0IHsgZmlsZSwgdGFza05hbWUgfSA9IGVudHJ5XG4gICAgY29uc3QgY2hpbGRCYXNlbmFtZXMgPSBuZXcgU2V0PHN0cmluZz4oW1xuICAgICAgLi4uKGNoaWxkTWFwLmdldChmaWxlLmJhc2VuYW1lKSA/PyBbXSksXG4gICAgICAuLi4oY2hpbGRNYXAuZ2V0KHRhc2tOYW1lKSA/PyBbXSksXG4gICAgXSlcbiAgICBjaGlsZEJhc2VuYW1lcy5kZWxldGUoZmlsZS5iYXNlbmFtZSlcblxuICAgIGNvbnN0IG5leHRDaGlsZExpbmtzID0gQXJyYXkuZnJvbShjaGlsZEJhc2VuYW1lcylcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmxvY2FsZUNvbXBhcmUoYikpXG4gICAgICAubWFwKG5hbWUgPT4gYFtbJHtuYW1lfV1dYClcblxuICAgIGF3YWl0IGFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIoZmlsZSwgKGZtKSA9PiB7XG4gICAgICBmbS5jaGlsZHMgPSBuZXh0Q2hpbGRMaW5rc1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNUYXNrVHlwZVRhZ3MoYXBwOiBBcHApIHtcbiAgY29uc3QgZmlsZXMgPSBhcHAudmF1bHRcbiAgICAuZ2V0TWFya2Rvd25GaWxlcygpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUucGF0aC5zdGFydHNXaXRoKGAke1RBUkVBU19GT0xERVJ9L2ApKVxuXG4gIGNvbnN0IGNsYXNzaWZpY2F0aW9uVGFncyA9IG5ldyBTZXQoW0lOREVYX1RBRywgVEFTS19UQUcsIFNVQlRBU0tfVEFHXSlcbiAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgY29uc3QgbmV4dENsYXNzaWZpY2F0aW9uID0gcmVzb2x2ZUNsYXNzaWZpY2F0aW9uVGFnKGZpbGUpXG5cbiAgICBhd2FpdCBhcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKGZpbGUsIChmcm9udG1hdHRlcikgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFRhZ3MgPSBub3JtYWxpemVUYWdzKGZyb250bWF0dGVyLnRhZ3MpXG4gICAgICBjb25zdCBwcmVzZXJ2ZWRUYWdzID0gY3VycmVudFRhZ3MuZmlsdGVyKHRhZyA9PiAhY2xhc3NpZmljYXRpb25UYWdzLmhhcyh0YWcpKVxuICAgICAgZnJvbnRtYXR0ZXIudGFncyA9IFsuLi5wcmVzZXJ2ZWRUYWdzLCBuZXh0Q2xhc3NpZmljYXRpb25dXG4gICAgfSlcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWFkVGFza0Zyb250bWF0dGVyKGFwcDogQXBwLCBmaWxlOiBURmlsZSk6IFByb21pc2U8VGFza0Zyb250bWF0dGVyIHwgbnVsbD4ge1xuICBjb25zdCBjb250ZW50ID0gYXdhaXQgYXBwLnZhdWx0LmNhY2hlZFJlYWQoZmlsZSlcbiAgY29uc3QgbWF0Y2ggPSBjb250ZW50Lm1hdGNoKC9eLS0tXFxyP1xcbihbXFxzXFxTXSo/KVxccj9cXG4tLS0vKVxuICBpZiAoIW1hdGNoKVxuICAgIHJldHVybiBudWxsXG5cbiAgY29uc3QgcmF3WWFtbCA9IG1hdGNoWzFdXG4gIGNvbnN0IGZyb250bWF0dGVyRGF0YSA9IHBhcnNlU2ltcGxlWWFtbChyYXdZYW1sKVxuICByZXR1cm4gdG9UYXNrRnJvbnRtYXR0ZXIoZnJvbnRtYXR0ZXJEYXRhKVxufVxuXG5mdW5jdGlvbiBwYXJzZVNpbXBsZVlhbWwoeWFtbFRleHQ6IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgY29uc3QgcmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9XG4gIGNvbnN0IGxpbmVzID0geWFtbFRleHQuc3BsaXQoL1xccj9cXG4vKVxuICBsZXQgaW5kZXggPSAwXG5cbiAgd2hpbGUgKGluZGV4IDwgbGluZXMubGVuZ3RoKSB7XG4gICAgY29uc3QgbGluZSA9IGxpbmVzW2luZGV4XVxuICAgIGlmICghbGluZS50cmltKCkpIHtcbiAgICAgIGluZGV4KytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3Qga2V5VmFsdWVNYXRjaCA9IGxpbmUubWF0Y2goL14oW0EtWmEtejAtOV8tXSspOlxccyooLiopJC8pXG4gICAgaWYgKCFrZXlWYWx1ZU1hdGNoKSB7XG4gICAgICBpbmRleCsrXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IFssIGtleSwgcmF3VmFsdWVdID0ga2V5VmFsdWVNYXRjaFxuICAgIGNvbnN0IHRyaW1tZWRWYWx1ZSA9IHJhd1ZhbHVlLnRyaW0oKVxuXG4gICAgaWYgKHRyaW1tZWRWYWx1ZSA9PT0gJycpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gJydcbiAgICAgIGluZGV4KytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKHRyaW1tZWRWYWx1ZSA9PT0gJ1tdJykge1xuICAgICAgcmVzdWx0W2tleV0gPSBbXVxuICAgICAgaW5kZXgrK1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAodHJpbW1lZFZhbHVlLnN0YXJ0c1dpdGgoJ1snKSAmJiB0cmltbWVkVmFsdWUuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgY29uc3QgaW5uZXIgPSB0cmltbWVkVmFsdWUuc2xpY2UoMSwgLTEpLnRyaW0oKVxuICAgICAgaWYgKCFpbm5lcikge1xuICAgICAgICByZXN1bHRba2V5XSA9IFtdXG4gICAgICAgIGluZGV4KytcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgcmVzdWx0W2tleV0gPSBpbm5lci5zcGxpdCgnLCcpLm1hcChpdGVtID0+IHVucXVvdGVZYW1sVmFsdWUoaXRlbS50cmltKCkpKVxuICAgICAgaW5kZXgrK1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAodHJpbW1lZFZhbHVlID09PSAnfCcpIHtcbiAgICAgIGNvbnN0IGJsb2NrTGluZXM6IHN0cmluZ1tdID0gW11cbiAgICAgIGluZGV4KytcbiAgICAgIHdoaWxlIChpbmRleCA8IGxpbmVzLmxlbmd0aCAmJiAvXlxccysvLnRlc3QobGluZXNbaW5kZXhdKSkge1xuICAgICAgICBibG9ja0xpbmVzLnB1c2gobGluZXNbaW5kZXhdLnJlcGxhY2UoL15cXHMrLywgJycpKVxuICAgICAgICBpbmRleCsrXG4gICAgICB9XG4gICAgICByZXN1bHRba2V5XSA9IGJsb2NrTGluZXMuam9pbignXFxuJylcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgcmVzdWx0W2tleV0gPSB1bnF1b3RlWWFtbFZhbHVlKHRyaW1tZWRWYWx1ZSlcbiAgICBpbmRleCsrXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIHVucXVvdGVZYW1sVmFsdWUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICh2YWx1ZS5zdGFydHNXaXRoKCdcIicpICYmIHZhbHVlLmVuZHNXaXRoKCdcIicpKVxuICAgIHJldHVybiB2YWx1ZS5zbGljZSgxLCAtMSkucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG5cbiAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoJ1xcJycpICYmIHZhbHVlLmVuZHNXaXRoKCdcXCcnKSlcbiAgICByZXR1cm4gdmFsdWUuc2xpY2UoMSwgLTEpXG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmVudFJlZmVyZW5jZShwYXJlbnRWYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgY29uc3QgdHJpbW1lZCA9IChwYXJlbnRWYWx1ZSB8fCAnJykudHJpbSgpXG4gIGlmICghdHJpbW1lZClcbiAgICByZXR1cm4gJydcblxuICBjb25zdCBsaW5rTWF0Y2ggPSB0cmltbWVkLm1hdGNoKC9eXFxbXFxbKC4rPylcXF1cXF0kLylcbiAgY29uc3QgcmF3UmVmZXJlbmNlID0gKGxpbmtNYXRjaCA/IGxpbmtNYXRjaFsxXSA6IHRyaW1tZWQpLnRyaW0oKVxuICBjb25zdCB3aXRob3V0QWxpYXMgPSByYXdSZWZlcmVuY2Uuc3BsaXQoJ3wnKVswXS50cmltKClcbiAgY29uc3Qgd2l0aG91dEhlYWRpbmcgPSB3aXRob3V0QWxpYXMuc3BsaXQoJyMnKVswXS50cmltKClcbiAgY29uc3QgYmFzZW5hbWUgPSB3aXRob3V0SGVhZGluZy5zcGxpdCgnLycpLnBvcCgpID8/IHdpdGhvdXRIZWFkaW5nXG4gIHJldHVybiBiYXNlbmFtZS5yZXBsYWNlKC9cXC5tZCQvaSwgJycpLnRyaW0oKVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQ2xhc3NpZmljYXRpb25UYWcoZmlsZTogVEZpbGUpOiBzdHJpbmcge1xuICBpZiAoZmlsZS5iYXNlbmFtZSA9PT0gVEFTS19JTkRFWF9CQVNFTkFNRSB8fCBmaWxlLmJhc2VuYW1lID09PSBGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FKVxuICAgIHJldHVybiBJTkRFWF9UQUdcblxuICBpZiAoZmlsZS5wYXRoLnN0YXJ0c1dpdGgoYCR7U1VCVEFTS1NfRk9MREVSfS9gKSB8fCBmaWxlLnBhdGguaW5jbHVkZXMoJy9zdWJUYXNrcy8nKSlcbiAgICByZXR1cm4gU1VCVEFTS19UQUdcblxuICByZXR1cm4gVEFTS19UQUdcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVGFncyh2YWx1ZTogdW5rbm93bik6IHN0cmluZ1tdIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKVxuICAgIHJldHVybiB2YWx1ZS5maWx0ZXIoKGl0ZW0pOiBpdGVtIGlzIHN0cmluZyA9PiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpLm1hcChub3JtYWxpemVUYWdWYWx1ZSkuZmlsdGVyKEJvb2xlYW4pXG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplVGFnVmFsdWUodmFsdWUpXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWQgPyBbbm9ybWFsaXplZF0gOiBbXVxuICB9XG5cbiAgcmV0dXJuIFtdXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVRhZ1ZhbHVlKHRhZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRhZy5yZXBsYWNlKC9eIy8sICcnKS50cmltKClcbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQge1xuICBDT01QTEVURURfVEFTS1NfRk9MREVSLFxuICBGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FLFxuICBJTkRFWF9UQUcsXG4gIFRBUkVBU19GT0xERVIsXG4gIFRBU0tfSU5ERVhfQkFTRU5BTUUsXG59IGZyb20gJy4uL2NvbnN0YW50cydcblxuY29uc3QgVEFTS19JTkRFWF9GSUxFTkFNRSA9IGAke1RBU0tfSU5ERVhfQkFTRU5BTUV9Lm1kYFxuY29uc3QgVEFTS19JTkRFWF9QQVRIID0gYCR7VEFSRUFTX0ZPTERFUn0vJHtUQVNLX0lOREVYX0ZJTEVOQU1FfWBcbmNvbnN0IEZJTklTSEVEX1RBU0tfSU5ERVhfRklMRU5BTUUgPSBgJHtGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FfS5tZGBcbmNvbnN0IEZJTklTSEVEX1RBU0tfSU5ERVhfUEFUSCA9IGAke0NPTVBMRVRFRF9UQVNLU19GT0xERVJ9LyR7RklOSVNIRURfVEFTS19JTkRFWF9GSUxFTkFNRX1gXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnN1cmVUYXNrSW5kZXhGaWxlKGFwcDogb2JzaWRpYW4uQXBwKTogUHJvbWlzZTxvYnNpZGlhbi5URmlsZSB8IG51bGw+IHtcbiAgcmV0dXJuIGVuc3VyZUluZGV4RmlsZShhcHAsIFRBUkVBU19GT0xERVIsIFRBU0tfSU5ERVhfUEFUSClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuc3VyZUZpbmlzaGVkVGFza0luZGV4RmlsZShhcHA6IG9ic2lkaWFuLkFwcCk6IFByb21pc2U8b2JzaWRpYW4uVEZpbGUgfCBudWxsPiB7XG4gIHJldHVybiBlbnN1cmVJbmRleEZpbGUoYXBwLCBDT01QTEVURURfVEFTS1NfRk9MREVSLCBGSU5JU0hFRF9UQVNLX0lOREVYX1BBVEgpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBlbmRUYXNrTGlua1RvSW5kZXgoYXBwOiBvYnNpZGlhbi5BcHAsIHRhc2tGaWxlOiBvYnNpZGlhbi5URmlsZSk6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBhcHBlbmRUYXNrTGlua1RvSW5kZXhGaWxlKGFwcCwgdGFza0ZpbGUsIFRBU0tfSU5ERVhfUEFUSCwgKCkgPT4gZW5zdXJlVGFza0luZGV4RmlsZShhcHApKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBwZW5kVGFza0xpbmtUb0ZpbmlzaGVkSW5kZXgoYXBwOiBvYnNpZGlhbi5BcHAsIHRhc2tGaWxlOiBvYnNpZGlhbi5URmlsZSk6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBhcHBlbmRUYXNrTGlua1RvSW5kZXhGaWxlKGFwcCwgdGFza0ZpbGUsIEZJTklTSEVEX1RBU0tfSU5ERVhfUEFUSCwgKCkgPT4gZW5zdXJlRmluaXNoZWRUYXNrSW5kZXhGaWxlKGFwcCkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVUYXNrTGlua0Zyb21JbmRleChhcHA6IG9ic2lkaWFuLkFwcCwgdGFza0ZpbGU6IG9ic2lkaWFuLlRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IHJlbW92ZVRhc2tMaW5rRnJvbUluZGV4RmlsZShhcHAsIHRhc2tGaWxlLCBUQVNLX0lOREVYX1BBVEgpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVUYXNrTGlua0Zyb21GaW5pc2hlZEluZGV4KGFwcDogb2JzaWRpYW4uQXBwLCB0YXNrRmlsZTogb2JzaWRpYW4uVEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgcmVtb3ZlVGFza0xpbmtGcm9tSW5kZXhGaWxlKGFwcCwgdGFza0ZpbGUsIEZJTklTSEVEX1RBU0tfSU5ERVhfUEFUSClcbn1cblxuYXN5bmMgZnVuY3Rpb24gZW5zdXJlSW5kZXhGaWxlKFxuICBhcHA6IG9ic2lkaWFuLkFwcCxcbiAgZm9sZGVyUGF0aDogc3RyaW5nLFxuICBmaWxlUGF0aDogc3RyaW5nLFxuKTogUHJvbWlzZTxvYnNpZGlhbi5URmlsZSB8IG51bGw+IHtcbiAgY29uc3QgZm9sZGVyID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmb2xkZXJQYXRoKVxuICBpZiAoIShmb2xkZXIgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKSlcbiAgICByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IGV4aXN0aW5nID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmaWxlUGF0aClcbiAgaWYgKGV4aXN0aW5nIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZpbGUpXG4gICAgcmV0dXJuIGV4aXN0aW5nXG5cbiAgaWYgKGV4aXN0aW5nKVxuICAgIHJldHVybiBudWxsXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBpbml0aWFsQ29udGVudCA9IFsnLS0tJywgYHRhZ3M6IFske0lOREVYX1RBR31dYCwgJy0tLScsICcnXS5qb2luKCdcXG4nKVxuICAgIHJldHVybiBhd2FpdCBhcHAudmF1bHQuY3JlYXRlKGZpbGVQYXRoLCBpbml0aWFsQ29udGVudClcbiAgfVxuICBjYXRjaCB7XG4gICAgY29uc3QgcmV0cnkgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZpbGVQYXRoKVxuICAgIHJldHVybiByZXRyeSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGaWxlID8gcmV0cnkgOiBudWxsXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gYXBwZW5kVGFza0xpbmtUb0luZGV4RmlsZShcbiAgYXBwOiBvYnNpZGlhbi5BcHAsXG4gIHRhc2tGaWxlOiBvYnNpZGlhbi5URmlsZSxcbiAgaW5kZXhQYXRoOiBzdHJpbmcsXG4gIGVuc3VyZUluZGV4OiAoKSA9PiBQcm9taXNlPG9ic2lkaWFuLlRGaWxlIHwgbnVsbD4sXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKHRhc2tGaWxlLnBhdGggPT09IGluZGV4UGF0aClcbiAgICByZXR1cm5cblxuICBjb25zdCBpbmRleEZpbGUgPSBhd2FpdCBlbnN1cmVJbmRleCgpXG4gIGlmICghaW5kZXhGaWxlKVxuICAgIHJldHVyblxuXG4gIGNvbnN0IGxpbmtMaW5lID0gYFtbJHt0YXNrRmlsZS5iYXNlbmFtZX1dXWBcbiAgY29uc3QgY3VycmVudCA9IGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKGluZGV4RmlsZSlcbiAgY29uc3QgbGluZXMgPSBjdXJyZW50LnNwbGl0KCdcXG4nKS5tYXAobGluZSA9PiBsaW5lLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pXG4gIGlmIChsaW5lcy5pbmNsdWRlcyhsaW5rTGluZSkpXG4gICAgcmV0dXJuXG5cbiAgY29uc3Qgc2VwYXJhdG9yID0gY3VycmVudC5sZW5ndGggPiAwICYmICFjdXJyZW50LmVuZHNXaXRoKCdcXG4nKSA/ICdcXG4nIDogJydcbiAgY29uc3QgbmV4dCA9IGAke2N1cnJlbnR9JHtzZXBhcmF0b3J9JHtsaW5rTGluZX1cXG5gXG4gIGF3YWl0IGFwcC52YXVsdC5tb2RpZnkoaW5kZXhGaWxlLCBuZXh0KVxufVxuXG5hc3luYyBmdW5jdGlvbiByZW1vdmVUYXNrTGlua0Zyb21JbmRleEZpbGUoXG4gIGFwcDogb2JzaWRpYW4uQXBwLFxuICB0YXNrRmlsZTogb2JzaWRpYW4uVEZpbGUsXG4gIGluZGV4UGF0aDogc3RyaW5nLFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmICh0YXNrRmlsZS5wYXRoID09PSBpbmRleFBhdGgpXG4gICAgcmV0dXJuXG5cbiAgY29uc3QgaW5kZXhGaWxlID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChpbmRleFBhdGgpXG4gIGlmICghKGluZGV4RmlsZSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGaWxlKSlcbiAgICByZXR1cm5cblxuICBjb25zdCBsaW5rTGluZSA9IGBbWyR7dGFza0ZpbGUuYmFzZW5hbWV9XV1gXG4gIGNvbnN0IGxpbmVzID0gKGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKGluZGV4RmlsZSkpLnNwbGl0KCdcXG4nKVxuICBjb25zdCBmaWx0ZXJlZCA9IGxpbmVzLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBsaW5rTGluZSlcblxuICBpZiAoZmlsdGVyZWQubGVuZ3RoID09PSBsaW5lcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgY29uc3Qgbm9uRW1wdHkgPSBmaWx0ZXJlZC5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKS5sZW5ndGggPiAwKVxuICBjb25zdCBuZXh0ID0gbm9uRW1wdHkubGVuZ3RoID4gMCA/IGAke25vbkVtcHR5LmpvaW4oJ1xcbicpfVxcbmAgOiAnJ1xuICBhd2FpdCBhcHAudmF1bHQubW9kaWZ5KGluZGV4RmlsZSwgbmV4dClcbn1cbiIsImNvbnN0IEVTVEFET19BTElBU0VTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBjYW5jZWxhZGE6ICdDYW5jZWxhZGEnLFxuICBjYW5jZWxhZG86ICdDYW5jZWxhZGEnLFxuICBkZXNlc3RpbWFkYTogJ0NhbmNlbGFkYScsXG4gIGRlc2VzdGltYWRvOiAnQ2FuY2VsYWRhJyxcbiAgJ2VuIHByb2dyZXNvJzogJ0VuIHByb2dyZXNvJyxcbiAgcGVuZGllbnRlOiAnUGVuZGllbnRlJyxcbiAgZmluYWxpemFkYTogJ0ZpbmFsaXphZGEnLFxuICBmaW5hbGl6YWRvOiAnRmluYWxpemFkYScsXG4gIGNvbXBsZXRhZGE6ICdGaW5hbGl6YWRhJyxcbiAgY29tcGxldGFkbzogJ0ZpbmFsaXphZGEnLFxuICBibG9xdWVhZGE6ICdCbG9xdWVhZGEnLFxuICBibG9xdWVhZG86ICdCbG9xdWVhZGEnLFxuICB1cmdlbnRlOiAnUGVuZGllbnRlJyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUVzdGFkbyh2YWx1ZT86IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghdmFsdWUpXG4gICAgcmV0dXJuICdQZW5kaWVudGUnXG5cbiAgY29uc3Qgbm9ybWFsaXplZCA9IHZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiBFU1RBRE9fQUxJQVNFU1tub3JtYWxpemVkXSA/PyAnUGVuZGllbnRlJ1xufVxuIiwiaW1wb3J0IHR5cGUgeyBBcHAsIFRGaWxlIH0gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7XG4gIENPTVBMRVRFRF9TVUJUQVNLU19GT0xERVIsXG4gIENPTVBMRVRFRF9UQVNLU19GT0xERVIsXG4gIEZJTklTSEVEX1RBU0tfSU5ERVhfQkFTRU5BTUUsXG4gIExFR0FDWV9DT01QTEVURURfVEFTS1NfRk9MREVSLFxuICBTVUJUQVNLX1RBRyxcbiAgVEFTS19JTkRFWF9CQVNFTkFNRSxcbiAgVEFTS19UQUcsXG4gIE9SREVSX1NURVAsXG4gIFNVQlRBU0tTX0ZPTERFUixcbiAgVEFSRUFTX0ZPTERFUixcbn0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHR5cGUgeyBFcXVpcG8sIFRhc2tGb3JtRGF0YSwgVGFza0Zyb250bWF0dGVyLCBUYXNrSXRlbSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgdG9UYXNrRnJvbnRtYXR0ZXIgfSBmcm9tICcuLi91dGlscy9ndWFyZHMnXG5pbXBvcnQgeyBub3JtYWxpemVFc3RhZG8gfSBmcm9tICcuLi91dGlscy9zdGF0dXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrRmlsZXMoYXBwOiBBcHApIHtcbiAgcmV0dXJuIGFwcC52YXVsdFxuICAgIC5nZXRNYXJrZG93bkZpbGVzKClcbiAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5wYXRoLnN0YXJ0c1dpdGgoYCR7VEFSRUFTX0ZPTERFUn0vYCkpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUuYmFzZW5hbWUgIT09IFRBU0tfSU5ERVhfQkFTRU5BTUUgJiYgZmlsZS5iYXNlbmFtZSAhPT0gRklOSVNIRURfVEFTS19JTkRFWF9CQVNFTkFNRSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGFza0luQ29tcGxldGVkRm9sZGVyKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aC5zdGFydHNXaXRoKGAke0NPTVBMRVRFRF9UQVNLU19GT0xERVJ9L2ApXG4gICAgfHwgcGF0aC5zdGFydHNXaXRoKGAke0NPTVBMRVRFRF9TVUJUQVNLU19GT0xERVJ9L2ApXG4gICAgfHwgcGF0aC5zdGFydHNXaXRoKGAke0xFR0FDWV9DT01QTEVURURfVEFTS1NfRk9MREVSfS9gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza3MoYXBwOiBBcHApOiBUYXNrSXRlbVtdIHtcbiAgY29uc3QgdGFza3M6IFRhc2tJdGVtW10gPSBbXVxuXG4gIGZvciAoY29uc3QgZmlsZSBvZiBnZXRUYXNrRmlsZXMoYXBwKSkge1xuICAgIGNvbnN0IGZtID0gZ2V0VGFza0Zyb250bWF0dGVyKGFwcCwgZmlsZSlcbiAgICBpZiAoIWZtKVxuICAgICAgY29udGludWVcblxuICAgIHRhc2tzLnB1c2goe1xuICAgICAgZmlsZSxcbiAgICAgIHRhcmVhOiBmbS50YXJlYSA/PyBmaWxlLmJhc2VuYW1lLFxuICAgICAgZGV0YWxsZTogZm0uZGV0YWxsZSA/PyAnJyxcbiAgICAgIGVzdGFkbzogbm9ybWFsaXplRXN0YWRvKGZtLmVzdGFkbyksXG4gICAgICBmZWNoYUluaWNpbzogZm0uZmVjaGFJbmljaW8gPz8gJycsXG4gICAgICBmZWNoYUZpbjogZm0uZmVjaGFGaW4gPz8gJycsXG4gICAgICBlcXVpcG86IGZtLmVxdWlwbyA/PyAnJyxcbiAgICAgIHByaW9yaWRhZDogZm0ucHJpb3JpZGFkID8/ICcnLFxuICAgICAgZGVkaWNhZG86IE51bWJlcihmbS5kZWRpY2FkbykgfHwgMCxcbiAgICAgIGVzdGltYWNpb246IE51bWJlcihmbS5lc3RpbWFjaW9uKSB8fCAwLFxuICAgICAgZGVzdmlvOiBOdW1iZXIoZm0uZGVzdmlvKSB8fCAwLFxuICAgICAgcGFyZW50OiBub3JtYWxpemVQYXJlbnRUYXNrTmFtZShmbS5wYXJlbnQgPz8gJycpLFxuICAgICAgb3JkZXI6IE51bWJlcihmbS5vcmRlcikgPz8gOTk5OTk5LFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gdGFza3Ncbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwVG9wTGV2ZWxUYXNrcyh0YXNrczogVGFza0l0ZW1bXSwgZXF1aXBvczogRXF1aXBvW10pIHtcbiAgY29uc3QgZ3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUYXNrSXRlbVtdPiA9IHt9XG5cbiAgZm9yIChjb25zdCBlcXVpcG8gb2YgZXF1aXBvcylcbiAgICBncm91cHNbZXF1aXBvLm5hbWVdID0gW11cblxuICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpIHtcbiAgICBpZiAodGFzay5wYXJlbnQpXG4gICAgICBjb250aW51ZVxuXG4gICAgY29uc3QgdGVhbU5hbWUgPSB0YXNrLmVxdWlwbyB8fCAnU2luIGVxdWlwbydcbiAgICBpZiAoIWdyb3Vwc1t0ZWFtTmFtZV0pXG4gICAgICBncm91cHNbdGVhbU5hbWVdID0gW11cblxuICAgIGdyb3Vwc1t0ZWFtTmFtZV0ucHVzaCh0YXNrKVxuICB9XG5cbiAgcmV0dXJuIGdyb3Vwc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUYXNrQ29udGVudChkYXRhOiBUYXNrRm9ybURhdGEsIG9yZGVyOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBzYWZlVGl0bGUgPSBkYXRhLnRhcmVhLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuICBjb25zdCBzYWZlRGV0YWlsID0gZGF0YS5kZXRhbGxlLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuICBjb25zdCBzYWZlRW5kRGF0ZSA9IGRhdGEuZmVjaGFGaW4ucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpXG4gIGNvbnN0IHNhZmVQYXJlbnRUYXNrID0gZGF0YS5wYXJlbnQudHJpbSgpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuICBjb25zdCBwYXJlbnRMaW5rID0gc2FmZVBhcmVudFRhc2sgPyBgW1ske3NhZmVQYXJlbnRUYXNrfV1dYCA6ICcnXG4gIGNvbnN0IHRhc2tUYWcgPSBzYWZlUGFyZW50VGFzayA/IFNVQlRBU0tfVEFHIDogVEFTS19UQUdcblxuICByZXR1cm4gW1xuICAgICctLS0nLFxuICAgIGB0YXJlYTogXCIke3NhZmVUaXRsZX1cImAsXG4gICAgYGRldGFsbGU6IFwiJHtzYWZlRGV0YWlsfVwiYCxcbiAgICBgZXN0YWRvOiBcIiR7ZGF0YS5lc3RhZG99XCJgLFxuICAgICdmZWNoYUluaWNpbzogXCJcIicsXG4gICAgYGZlY2hhRmluOiBcIiR7c2FmZUVuZERhdGV9XCJgLFxuICAgIGBlcXVpcG86IFwiJHtkYXRhLmVxdWlwb31cImAsXG4gICAgYHByaW9yaWRhZDogXCIke2RhdGEucHJpb3JpZGFkfVwiYCxcbiAgICAnZGVkaWNhZG86IDAnLFxuICAgIGBlc3RpbWFjaW9uOiAke2RhdGEuZXN0aW1hY2lvbn1gLFxuICAgICdkZXN2aW86IDAnLFxuICAgIGBwYXJlbnQ6IFwiJHtwYXJlbnRMaW5rfVwiYCxcbiAgICAnY2hpbGRzOiBbXScsXG4gICAgYHRhZ3M6IFske3Rhc2tUYWd9XWAsXG4gICAgYG9yZGVyOiAke29yZGVyfWAsXG4gICAgJy0tLScsXG4gICAgJycsXG4gICAgZGF0YS5kZXRhbGxlIHx8ICcnLFxuICAgICcnLFxuICBdLmpvaW4oJ1xcbicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlTmV3VGFza09yZGVyKGFwcDogQXBwLCBkYXRhOiBUYXNrRm9ybURhdGEpOiBudW1iZXIge1xuICBjb25zdCBnb2VzVG9wID0gZGF0YS5lc3RhZG8gPT09ICdFbiBwcm9ncmVzbycgfHwgZGF0YS5wcmlvcmlkYWQgPT09ICdVcmdlbnRlJ1xuXG4gIGlmIChkYXRhLnBhcmVudClcbiAgICByZXR1cm4gT1JERVJfU1RFUFxuXG4gIGNvbnN0IHNpYmxpbmdPcmRlcnMgPSBnZXRUYXNrRmlsZXMoYXBwKVxuICAgIC5tYXAoZmlsZSA9PiBnZXRUYXNrRnJvbnRtYXR0ZXIoYXBwLCBmaWxlKSlcbiAgICAuZmlsdGVyKChmbSk6IGZtIGlzIFRhc2tGcm9udG1hdHRlciA9PiBCb29sZWFuKGZtKSlcbiAgICAuZmlsdGVyKGZtID0+ICFmbS5wYXJlbnQgJiYgZm0uZXF1aXBvID09PSBkYXRhLmVxdWlwbylcbiAgICAubWFwKGZtID0+IE51bWJlcihmbS5vcmRlcikgfHwgMClcblxuICBpZiAoc2libGluZ09yZGVycy5sZW5ndGggPT09IDApXG4gICAgcmV0dXJuIE9SREVSX1NURVBcblxuICByZXR1cm4gZ29lc1RvcFxuICAgID8gTWF0aC5taW4oLi4uc2libGluZ09yZGVycykgLSBPUkRFUl9TVEVQXG4gICAgOiBNYXRoLm1heCguLi5zaWJsaW5nT3JkZXJzKSArIE9SREVSX1NURVBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVUYXNrUGF0aChhcHA6IEFwcCwgdGFza05hbWU6IHN0cmluZywgcGFyZW50VGFza05hbWUgPSAnJyk6IHN0cmluZyB7XG4gIGNvbnN0IGZvbGRlclBhdGggPSBwYXJlbnRUYXNrTmFtZS50cmltKCkgPyBTVUJUQVNLU19GT0xERVIgOiBUQVJFQVNfRk9MREVSXG4gIGNvbnN0IGJhc2VQYXRoID0gYCR7Zm9sZGVyUGF0aH0vJHt0YXNrTmFtZX0ubWRgXG4gIGlmICghYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChiYXNlUGF0aCkpXG4gICAgcmV0dXJuIGJhc2VQYXRoXG5cbiAgcmV0dXJuIGAke2ZvbGRlclBhdGh9LyR7dGFza05hbWV9ICR7RGF0ZS5ub3coKX0ubWRgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlVGFza0VuZERhdGUoZmVjaGFGaW46IHN0cmluZywgZXN0aW1hY2lvbjogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgZXhwbGljaXRFbmQgPSBwYXJzZVRhc2tEYXRlKGZlY2hhRmluKVxuICBpZiAoZXhwbGljaXRFbmQpXG4gICAgcmV0dXJuIGV4cGxpY2l0RW5kLnRvSVNPU3RyaW5nKClcblxuICBpZiAoZXN0aW1hY2lvbiA8PSAwKVxuICAgIHJldHVybiAnJ1xuXG4gIGNvbnN0IGNvbXB1dGVkID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIGVzdGltYWNpb24gKiA2MCAqIDYwICogMTAwMClcbiAgcmV0dXJuIGNvbXB1dGVkLnRvSVNPU3RyaW5nKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGFza0RhdGUodmFsdWU6IHN0cmluZyk6IERhdGUgfCBudWxsIHtcbiAgY29uc3QgdHJpbW1lZCA9IHZhbHVlLnRyaW0oKVxuICBpZiAoIXRyaW1tZWQpXG4gICAgcmV0dXJuIG51bGxcblxuICBjb25zdCBwYXJzZWQgPSBuZXcgRGF0ZSh0cmltbWVkKVxuICBpZiAoTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpKVxuICAgIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIHBhcnNlZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFRhc2tCb2R5UHJldmlldyhjb250ZW50OiBzdHJpbmcsIG1heExlbmd0aCA9IDE4MCk6IHN0cmluZyB7XG4gIGxldCBib2R5ID0gY29udGVudFxuXG4gIC8vIFJlbW92ZSBZQU1MIGZyb250bWF0dGVyIGJsb2NrIGlmIHByZXNlbnQuXG4gIGJvZHkgPSBib2R5LnJlcGxhY2UoL14tLS1cXHI/XFxuW1xcc1xcU10qP1xccj9cXG4tLS1cXHI/XFxuPy8sICcnKVxuXG4gIGNvbnN0IGxpbmVzID0gYm9keVxuICAgIC5zcGxpdCgvXFxyP1xcbi8pXG4gICAgLm1hcChsaW5lID0+IGxpbmUudHJpbSgpKVxuXG4gIHdoaWxlIChsaW5lcy5sZW5ndGggPiAwICYmICFsaW5lc1swXSlcbiAgICBsaW5lcy5zaGlmdCgpXG5cbiAgLy8gUmVtb3ZlIGxlYWRpbmcgdGl0bGUgaGVhZGluZyBzbyBwcmV2aWV3IHN0YXJ0cyB3aXRoIHRoZSBib2R5IHRleHQuXG4gIGlmIChsaW5lc1swXT8uc3RhcnRzV2l0aCgnIyAnKSlcbiAgICBsaW5lcy5zaGlmdCgpXG5cbiAgd2hpbGUgKGxpbmVzLmxlbmd0aCA+IDAgJiYgIWxpbmVzWzBdKVxuICAgIGxpbmVzLnNoaWZ0KClcblxuICBjb25zdCBub3JtYWxpemVkID0gbGluZXMuam9pbignICcpLnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKClcbiAgaWYgKCFub3JtYWxpemVkKVxuICAgIHJldHVybiAnJ1xuXG4gIGlmIChub3JtYWxpemVkLmxlbmd0aCA8PSBtYXhMZW5ndGgpXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRcblxuICByZXR1cm4gYCR7bm9ybWFsaXplZC5zbGljZSgwLCBtYXhMZW5ndGggLSAxKS50cmltRW5kKCl94oCmYFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQYXJlbnRUYXNrTmFtZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgdHJpbW1lZCA9IHZhbHVlLnRyaW0oKVxuICBpZiAoIXRyaW1tZWQpXG4gICAgcmV0dXJuICcnXG5cbiAgY29uc3QgbGlua01hdGNoID0gdHJpbW1lZC5tYXRjaCgvXlxcW1xcWyguKz8pXFxdXFxdJC8pXG4gIGNvbnN0IHJhd1JlZiA9IGxpbmtNYXRjaCA/IGxpbmtNYXRjaFsxXS50cmltKCkgOiB0cmltbWVkXG4gIGNvbnN0IHdpdGhvdXRBbGlhcyA9IHJhd1JlZi5zcGxpdCgnfCcpWzBdLnRyaW0oKVxuICBjb25zdCB3aXRob3V0SGVhZGluZyA9IHdpdGhvdXRBbGlhcy5zcGxpdCgnIycpWzBdLnRyaW0oKVxuICBjb25zdCBsYXN0U2VnbWVudCA9IHdpdGhvdXRIZWFkaW5nLnNwbGl0KCcvJykucG9wKCkgPz8gd2l0aG91dEhlYWRpbmdcblxuICByZXR1cm4gbGFzdFNlZ21lbnQucmVwbGFjZSgvXFwubWQkL2ksICcnKS50cmltKClcbn1cblxuZnVuY3Rpb24gZ2V0VGFza0Zyb250bWF0dGVyKGFwcDogQXBwLCBmaWxlOiBURmlsZSk6IFRhc2tGcm9udG1hdHRlciB8IG51bGwge1xuICBjb25zdCByYXdGcm9udG1hdHRlciA9IGFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKT8uZnJvbnRtYXR0ZXJcbiAgcmV0dXJuIHRvVGFza0Zyb250bWF0dGVyKHJhd0Zyb250bWF0dGVyKVxufVxuIiwiaW1wb3J0IHR5cGUgeyBBcHAgfSBmcm9tICdvYnNpZGlhbidcblxuaW1wb3J0IHsgZ2V0VGFza3MsIGlzVGFza0luQ29tcGxldGVkRm9sZGVyLCBwYXJzZVRhc2tEYXRlIH0gZnJvbSAnLi90YXNrRW5naW5lJ1xuaW1wb3J0IHsgdXBkYXRlRnJvbnRtYXR0ZXIgfSBmcm9tICcuL2Zyb250bWF0dGVyRW5naW5lJ1xuXG5jb25zdCBIT1VSX01TID0gNjAgKiA2MCAqIDEwMDBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYmFsYW5jZUdyb3VwRW5kRGF0ZXMoYXBwOiBBcHAsIHRlYW1OYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgdGFza3MgPSBnZXRUYXNrcyhhcHApXG4gICAgLmZpbHRlcih0YXNrID0+ICF0YXNrLnBhcmVudCAmJiB0YXNrLmVxdWlwbyA9PT0gdGVhbU5hbWUgJiYgIWlzVGFza0luQ29tcGxldGVkRm9sZGVyKHRhc2suZmlsZS5wYXRoKSlcbiAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpXG5cbiAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMClcbiAgICByZXR1cm5cblxuICBjb25zdCBmaXJzdFN0YXJ0ID0gcGFyc2VUYXNrRGF0ZSh0YXNrc1swXS5mZWNoYUluaWNpbykgPz8gbmV3IERhdGUoKVxuICBsZXQgY3Vyc29yID0gZmlyc3RTdGFydC5nZXRUaW1lKClcblxuICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpIHtcbiAgICBjb25zdCBlc3RpbWF0ZWRIb3VycyA9IE51bWJlci5pc0Zpbml0ZSh0YXNrLmVzdGltYWNpb24pICYmIHRhc2suZXN0aW1hY2lvbiA+IDBcbiAgICAgID8gdGFzay5lc3RpbWFjaW9uXG4gICAgICA6IDBcbiAgICBjb25zdCBkZWRpY2F0ZWRIb3VycyA9IE51bWJlci5pc0Zpbml0ZSh0YXNrLmRlZGljYWRvKSAmJiB0YXNrLmRlZGljYWRvID4gMFxuICAgICAgPyB0YXNrLmRlZGljYWRvXG4gICAgICA6IDBcbiAgICBjb25zdCBlc3RpbWF0ZUhvdXJzID0gTWF0aC5tYXgoZXN0aW1hdGVkSG91cnMsIGRlZGljYXRlZEhvdXJzKVxuXG4gICAgY3Vyc29yICs9IGVzdGltYXRlSG91cnMgKiBIT1VSX01TXG4gICAgYXdhaXQgdXBkYXRlRnJvbnRtYXR0ZXIoYXBwLCB0YXNrLmZpbGUsIHsgZmVjaGFGaW46IG5ldyBEYXRlKGN1cnNvcikudG9JU09TdHJpbmcoKSB9KVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2FuaXRpemVGaWxlbmFtZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC9bXFxcXC86Kj9cIjw+fCNeW1xcXV0vZywgJy0nKS50cmltKClcbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQgeyBFU1RBRE9TLCBQUklPUklEQURFUywgU1VCVEFTS1NfRk9MREVSLCBUQVJFQVNfRk9MREVSIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgcmVidWlsZFRhc2tDaGlsZExpbmtzLCBzeW5jVGFza1R5cGVUYWdzIH0gZnJvbSAnLi4vZW5naW5lcy9mcm9udG1hdHRlckVuZ2luZSdcbmltcG9ydCB7IHJlYmFsYW5jZUdyb3VwRW5kRGF0ZXMgfSBmcm9tICcuLi9lbmdpbmVzL3NjaGVkdWxlRW5naW5lJ1xuaW1wb3J0IHsgYXBwZW5kVGFza0xpbmtUb0luZGV4IH0gZnJvbSAnLi4vZW5naW5lcy90YXNrSW5kZXhFbmdpbmUnXG5pbXBvcnQgeyBidWlsZFRhc2tDb250ZW50LCByZXNvbHZlTmV3VGFza09yZGVyLCByZXNvbHZlVGFza0VuZERhdGUsIHJlc29sdmVUYXNrUGF0aCB9IGZyb20gJy4uL2VuZ2luZXMvdGFza0VuZ2luZSdcbmltcG9ydCB0eXBlIHsgVGFza0Zvcm1EYXRhIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBzYW5pdGl6ZUZpbGVuYW1lIH0gZnJvbSAnLi4vdXRpbHMvc2FuaXRpemVGaWxlbmFtZSdcbmltcG9ydCB0eXBlIHsgVGFyZWFzUGx1Z2luIH0gZnJvbSAnLi4vcGx1Z2luL1RhcmVhc1BsdWdpbidcblxuZXhwb3J0IGNsYXNzIE5ld1Rhc2tNb2RhbCBleHRlbmRzIG9ic2lkaWFuLk1vZGFsIHtcbiAgcHJpdmF0ZSBwbHVnaW46IFRhcmVhc1BsdWdpblxuICBwcml2YXRlIGRhdGE6IFRhc2tGb3JtRGF0YVxuXG4gIGNvbnN0cnVjdG9yKGFwcDogb2JzaWRpYW4uQXBwLCBwbHVnaW46IFRhcmVhc1BsdWdpbiwgZGVmYXVsdEVxdWlwbz86IHN0cmluZywgZGVmYXVsdFBhcmVudD86IHN0cmluZykge1xuICAgIHN1cGVyKGFwcClcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpblxuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIHRhcmVhOiAnJyxcbiAgICAgIGRldGFsbGU6ICcnLFxuICAgICAgZXN0YWRvOiAnUGVuZGllbnRlJyxcbiAgICAgIGZlY2hhRmluOiAnJyxcbiAgICAgIGVxdWlwbzogZGVmYXVsdEVxdWlwbyB8fCBwbHVnaW4uZXF1aXBvc1swXT8ubmFtZSB8fCAnJyxcbiAgICAgIHByaW9yaWRhZDogJ01lZGlhJyxcbiAgICAgIGVzdGltYWNpb246IDAsXG4gICAgICBwYXJlbnQ6IGRlZmF1bHRQYXJlbnQgfHwgJycsXG4gICAgfVxuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzXG4gICAgY29udGVudEVsLmFkZENsYXNzKCd0YXJlYXMtbW9kYWwnKVxuICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdOdWV2YSBUYXJlYScgfSlcblxuICAgIG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZSgnVGFyZWEnKS5hZGRUZXh0KCh0ZXh0KSA9PiB7XG4gICAgICB0ZXh0LnNldFBsYWNlaG9sZGVyKCdOb21icmUgZGUgbGEgdGFyZWEnKVxuICAgICAgdGV4dC5vbkNoYW5nZSh2YWx1ZSA9PiB0aGlzLmRhdGEudGFyZWEgPSB2YWx1ZSlcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGV4dC5pbnB1dEVsLmZvY3VzKCksIDUwKVxuICAgIH0pXG5cbiAgICBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpLnNldE5hbWUoJ0VzdGFkbycpLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT4ge1xuICAgICAgZm9yIChjb25zdCBlc3RhZG8gb2YgRVNUQURPUylcbiAgICAgICAgZHJvcGRvd24uYWRkT3B0aW9uKGVzdGFkbywgZXN0YWRvKVxuXG4gICAgICBkcm9wZG93bi5zZXRWYWx1ZSh0aGlzLmRhdGEuZXN0YWRvKVxuICAgICAgZHJvcGRvd24ub25DaGFuZ2UodmFsdWUgPT4gdGhpcy5kYXRhLmVzdGFkbyA9IHZhbHVlKVxuICAgIH0pXG5cbiAgICBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpXG4gICAgICAuc2V0TmFtZSgnRmVjaGEgZmluJylcbiAgICAgIC5zZXREZXNjKCdPcGNpb25hbC4gU2kgcXVlZGEgdmFjw61hLCBzZSBjYWxjdWxhIGNvbiBsYSBlc3RpbWFjacOzbi4nKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+IHtcbiAgICAgICAgdGV4dC5pbnB1dEVsLnR5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnXG4gICAgICAgIHRleHQuc2V0VmFsdWUodGhpcy5kYXRhLmZlY2hhRmluKVxuICAgICAgICB0ZXh0Lm9uQ2hhbmdlKHZhbHVlID0+IHRoaXMuZGF0YS5mZWNoYUZpbiA9IHZhbHVlKVxuICAgICAgfSlcblxuICAgIG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZSgnRXF1aXBvJykuYWRkRHJvcGRvd24oKGRyb3Bkb3duKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGVxdWlwbyBvZiB0aGlzLnBsdWdpbi5lcXVpcG9zKVxuICAgICAgICBkcm9wZG93bi5hZGRPcHRpb24oZXF1aXBvLm5hbWUsIGVxdWlwby5uYW1lKVxuXG4gICAgICBkcm9wZG93bi5zZXRWYWx1ZSh0aGlzLmRhdGEuZXF1aXBvKVxuICAgICAgZHJvcGRvd24ub25DaGFuZ2UodmFsdWUgPT4gdGhpcy5kYXRhLmVxdWlwbyA9IHZhbHVlKVxuICAgIH0pXG5cbiAgICBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpLnNldE5hbWUoJ1ByaW9yaWRhZCcpLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT4ge1xuICAgICAgZm9yIChjb25zdCBwcmlvcmlkYWQgb2YgUFJJT1JJREFERVMpXG4gICAgICAgIGRyb3Bkb3duLmFkZE9wdGlvbihwcmlvcmlkYWQsIHByaW9yaWRhZClcblxuICAgICAgZHJvcGRvd24uc2V0VmFsdWUodGhpcy5kYXRhLnByaW9yaWRhZClcbiAgICAgIGRyb3Bkb3duLm9uQ2hhbmdlKHZhbHVlID0+IHRoaXMuZGF0YS5wcmlvcmlkYWQgPSB2YWx1ZSlcbiAgICB9KVxuXG4gICAgbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKVxuICAgICAgLnNldE5hbWUoJ0VzdGltYWNpw7NuIChob3JhcyknKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+IHtcbiAgICAgICAgdGV4dC5zZXRQbGFjZWhvbGRlcignMCcpXG4gICAgICAgIHRleHQuaW5wdXRFbC50eXBlID0gJ251bWJlcidcbiAgICAgICAgdGV4dC5pbnB1dEVsLm1pbiA9ICcwJ1xuICAgICAgICB0ZXh0LmlucHV0RWwuc3RlcCA9ICcwLjAxJ1xuICAgICAgICB0ZXh0Lm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IE51bWJlci5wYXJzZUZsb2F0KHZhbHVlKVxuICAgICAgICAgIHRoaXMuZGF0YS5lc3RpbWFjaW9uID0gTnVtYmVyLmlzTmFOKHBhcnNlZCkgfHwgcGFyc2VkIDwgMFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IE1hdGgucm91bmQocGFyc2VkICogMTAwKSAvIDEwMFxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgIG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbClcbiAgICAgIC5zZXROYW1lKCdTdWJ0YXJlYSBkZScpXG4gICAgICAuc2V0RGVzYygnRGVqYXIgdmFjw61vIHNpIGVzIHRhcmVhIHByaW5jaXBhbCcpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgICB0ZXh0LnNldFBsYWNlaG9sZGVyKCdOb21icmUgZGUgdGFyZWEgcGFkcmUgKHNpbiAubWQpJylcbiAgICAgICAgdGV4dC5zZXRWYWx1ZSh0aGlzLmRhdGEucGFyZW50KVxuICAgICAgICB0ZXh0Lm9uQ2hhbmdlKHZhbHVlID0+IHRoaXMuZGF0YS5wYXJlbnQgPSB2YWx1ZSlcbiAgICAgIH0pXG5cbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLW1vZGFsLWZvb3RlcicgfSlcblxuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ3JlYXIgdGFyZWEnLCBjbHM6ICdtb2QtY3RhJyB9KVxuICAgIGNyZWF0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jcmVhdGUoKVxuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdDYW5jZWxhcicgfSlcbiAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuY2xvc2UoKVxuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNyZWF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YS50YXJlYS50cmltKCkpIHtcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoJ0VsIG5vbWJyZSBlcyByZXF1ZXJpZG8nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2FuaXRpemVkVGFza05hbWUgPSBzYW5pdGl6ZUZpbGVuYW1lKHRoaXMuZGF0YS50YXJlYSlcbiAgICBjb25zdCB0YXJnZXRGb2xkZXIgPSB0aGlzLmRhdGEucGFyZW50LnRyaW0oKSA/IFNVQlRBU0tTX0ZPTERFUiA6IFRBUkVBU19GT0xERVJcbiAgICBhd2FpdCB0aGlzLmVuc3VyZUZvbGRlclBhdGgodGFyZ2V0Rm9sZGVyKVxuXG4gICAgY29uc3QgcGF0aCA9IHJlc29sdmVUYXNrUGF0aCh0aGlzLmFwcCwgc2FuaXRpemVkVGFza05hbWUsIHRoaXMuZGF0YS5wYXJlbnQpXG4gICAgY29uc3Qgb3JkZXIgPSByZXNvbHZlTmV3VGFza09yZGVyKHRoaXMuYXBwLCB0aGlzLmRhdGEpXG4gICAgY29uc3QgY29udGVudCA9IGJ1aWxkVGFza0NvbnRlbnQoXG4gICAgICB7XG4gICAgICAgIC4uLnRoaXMuZGF0YSxcbiAgICAgICAgZmVjaGFGaW46IHJlc29sdmVUYXNrRW5kRGF0ZSh0aGlzLmRhdGEuZmVjaGFGaW4sIHRoaXMuZGF0YS5lc3RpbWFjaW9uKSxcbiAgICAgIH0sXG4gICAgICBvcmRlcixcbiAgICApXG5cbiAgICBjb25zdCB0YXNrRmlsZSA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShwYXRoLCBjb250ZW50KVxuICAgIGF3YWl0IGFwcGVuZFRhc2tMaW5rVG9JbmRleCh0aGlzLmFwcCwgdGFza0ZpbGUpXG4gICAgYXdhaXQgcmVidWlsZFRhc2tDaGlsZExpbmtzKHRoaXMuYXBwKVxuICAgIGF3YWl0IHN5bmNUYXNrVHlwZVRhZ3ModGhpcy5hcHApXG4gICAgYXdhaXQgcmViYWxhbmNlR3JvdXBFbmREYXRlcyh0aGlzLmFwcCwgdGhpcy5kYXRhLmVxdWlwbylcbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBUYXJlYSBcIiR7dGhpcy5kYXRhLnRhcmVhfVwiIGNyZWFkYWApXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGVuc3VyZUZvbGRlclBhdGgocGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aClcbiAgICBpZiAoZXhpc3RpbmcgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKVxuICAgICAgcmV0dXJuXG5cbiAgICBpZiAoZXhpc3RpbmcpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHNlIHB1ZG8gY3JlYXIgbGEgY2FycGV0YSBcIiR7cGF0aH1cIiBwb3JxdWUgZXhpc3RlIHVuIGFyY2hpdm8gY29uIGVzZSBub21icmVgKVxuXG4gICAgY29uc3Qgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJykuZmlsdGVyKEJvb2xlYW4pXG4gICAgbGV0IGN1cnJlbnRQYXRoID0gJydcbiAgICBmb3IgKGNvbnN0IHNlZ21lbnQgb2Ygc2VnbWVudHMpIHtcbiAgICAgIGN1cnJlbnRQYXRoID0gY3VycmVudFBhdGggPyBgJHtjdXJyZW50UGF0aH0vJHtzZWdtZW50fWAgOiBzZWdtZW50XG4gICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGN1cnJlbnRQYXRoKVxuICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKVxuICAgICAgICBjb250aW51ZVxuICAgICAgaWYgKGN1cnJlbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gc2UgcHVkbyBjcmVhciBsYSBjYXJwZXRhIFwiJHtjdXJyZW50UGF0aH1cIiBwb3JxdWUgZXhpc3RlIHVuIGFyY2hpdm8gY29uIGVzZSBub21icmVgKVxuXG4gICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoY3VycmVudFBhdGgpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBERUZBVUxUX0VRVUlQT1MgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBub3JtYWxpemVQb21vZG9yb1N0YXRlIH0gZnJvbSAnLi4vZW5naW5lcy9wb21vZG9yb0VuZ2luZSdcbmltcG9ydCB0eXBlIHsgRXF1aXBvLCBQb21vZG9yb1N0YXRlIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBpc1JlY29yZCB9IGZyb20gJy4vZ3VhcmRzJ1xuXG5jb25zdCBMRUdBQ1lfRkFMTEJBQ0tfQ09MT1JTID0gWycjZDk3YTFlJywgJyMyZTZkYjAnLCAnIzdjNWNlNycsICcjMDBiODk0JywgJyNlMTcwNTUnLCAnI2ZkNzlhOCddXG5jb25zdCBSRU1PVkVEX0RFRkFVTFRfVEVBTV9OQU1FUyA9IG5ldyBTZXQoWydTZW1hbmFsJywgJ0RpYXJpbycsICdDb21wbGV0YWRhcyddKVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplRXF1aXBvc0Zyb21TZXR0aW5ncyhyYXdEYXRhOiB1bmtub3duKTogRXF1aXBvW10ge1xuICBjb25zdCBlcXVpcG9zID0gZXh0cmFjdEVxdWlwb3MocmF3RGF0YSlcblxuICBpZiAoIWVxdWlwb3MgfHwgZXF1aXBvcy5sZW5ndGggPT09IDApXG4gICAgcmV0dXJuIFsuLi5ERUZBVUxUX0VRVUlQT1NdXG5cbiAgaWYgKGlzU3RyaW5nQXJyYXkoZXF1aXBvcykpIHtcbiAgICBjb25zdCBub3JtYWxpemVkRnJvbUxlZ2FjeSA9IGVxdWlwb3NcbiAgICAgIC5maWx0ZXIobmFtZSA9PiAhUkVNT1ZFRF9ERUZBVUxUX1RFQU1fTkFNRVMuaGFzKG5hbWUpKVxuICAgICAgLm1hcCgobmFtZSwgaW5kZXgpID0+ICh7XG4gICAgICBuYW1lLFxuICAgICAgY29sb3I6IExFR0FDWV9GQUxMQkFDS19DT0xPUlNbaW5kZXggJSBMRUdBQ1lfRkFMTEJBQ0tfQ09MT1JTLmxlbmd0aF0sXG4gICAgICB9KSlcbiAgICByZXR1cm4gbWVyZ2VXaXRoRGVmYXVsdEVxdWlwb3Mobm9ybWFsaXplZEZyb21MZWdhY3kpXG4gIH1cblxuICBjb25zdCBub3JtYWxpemVkID0gZXF1aXBvc1xuICAgIC5maWx0ZXIoaXNFcXVpcG8pXG4gICAgLm1hcChlcXVpcG8gPT4gKHsgbmFtZTogZXF1aXBvLm5hbWUudHJpbSgpLCBjb2xvcjogZXF1aXBvLmNvbG9yIH0pKVxuICAgIC5maWx0ZXIoZXF1aXBvID0+ICFSRU1PVkVEX0RFRkFVTFRfVEVBTV9OQU1FUy5oYXMoZXF1aXBvLm5hbWUpKVxuICAgIC5maWx0ZXIoZXF1aXBvID0+IEJvb2xlYW4oZXF1aXBvLm5hbWUpKVxuXG4gIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gMClcbiAgICByZXR1cm4gWy4uLkRFRkFVTFRfRVFVSVBPU11cblxuICByZXR1cm4gbWVyZ2VXaXRoRGVmYXVsdEVxdWlwb3Mobm9ybWFsaXplZClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVBvbW9kb3JvRnJvbVNldHRpbmdzKHJhd0RhdGE6IHVua25vd24pOiBQb21vZG9yb1N0YXRlIHtcbiAgaWYgKCFpc1JlY29yZChyYXdEYXRhKSlcbiAgICByZXR1cm4gbm9ybWFsaXplUG9tb2Rvcm9TdGF0ZShudWxsKVxuXG4gIHJldHVybiBub3JtYWxpemVQb21vZG9yb1N0YXRlKHJhd0RhdGEucG9tb2Rvcm8pXG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RFcXVpcG9zKHJhd0RhdGE6IHVua25vd24pOiB1bmtub3duW10gfCB1bmRlZmluZWQge1xuICBpZiAoIWlzUmVjb3JkKHJhd0RhdGEpKVxuICAgIHJldHVybiB1bmRlZmluZWRcblxuICBjb25zdCBlcXVpcG9zID0gcmF3RGF0YS5lcXVpcG9zXG4gIGlmICghQXJyYXkuaXNBcnJheShlcXVpcG9zKSlcbiAgICByZXR1cm4gdW5kZWZpbmVkXG5cbiAgcmV0dXJuIGVxdWlwb3Ncbn1cblxuZnVuY3Rpb24gaXNFcXVpcG8odmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBFcXVpcG8ge1xuICBpZiAoIWlzUmVjb3JkKHZhbHVlKSlcbiAgICByZXR1cm4gZmFsc2VcblxuICByZXR1cm4gdHlwZW9mIHZhbHVlLm5hbWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2YWx1ZS5jb2xvciA9PT0gJ3N0cmluZydcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmdBcnJheSh2YWx1ZTogdW5rbm93bltdKTogdmFsdWUgaXMgc3RyaW5nW10ge1xuICByZXR1cm4gdmFsdWUuZXZlcnkoaXRlbSA9PiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpXG59XG5cbmZ1bmN0aW9uIG1lcmdlV2l0aERlZmF1bHRFcXVpcG9zKGVxdWlwb3M6IEVxdWlwb1tdKTogRXF1aXBvW10ge1xuICBjb25zdCBkZWZhdWx0c0J5TmFtZSA9IG5ldyBNYXAoREVGQVVMVF9FUVVJUE9TLm1hcChlcXVpcG8gPT4gW2VxdWlwby5uYW1lLCBlcXVpcG9dKSlcbiAgY29uc3Qgbm9ybWFsaXplZEJ5TmFtZSA9IG5ldyBNYXAoZXF1aXBvcy5tYXAoZXF1aXBvID0+IFtlcXVpcG8ubmFtZSwgZXF1aXBvXSkpXG5cbiAgY29uc3Qgd2l0aERlZmF1bHRzID0gREVGQVVMVF9FUVVJUE9TLm1hcCgoZXF1aXBvKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRFcXVpcG8gPSBub3JtYWxpemVkQnlOYW1lLmdldChlcXVpcG8ubmFtZSlcbiAgICByZXR1cm4gc2F2ZWRFcXVpcG8gPyB7IC4uLnNhdmVkRXF1aXBvIH0gOiB7IC4uLmVxdWlwbyB9XG4gIH0pXG5cbiAgY29uc3QgY3VzdG9tRXF1aXBvcyA9IGVxdWlwb3MuZmlsdGVyKGVxdWlwbyA9PiAhZGVmYXVsdHNCeU5hbWUuaGFzKGVxdWlwby5uYW1lKSlcbiAgcmV0dXJuIFsuLi53aXRoRGVmYXVsdHMsIC4uLmN1c3RvbUVxdWlwb3NdXG59XG4iLCJpbXBvcnQgdHlwZSB7IEFwcCwgVEFic3RyYWN0RmlsZSwgVEZpbGUsIFRGb2xkZXIgfSBmcm9tICdvYnNpZGlhbidcblxuaW1wb3J0IHsgQ09NUExFVEVEX1NVQlRBU0tTX0ZPTERFUiwgQ09NUExFVEVEX1RBU0tTX0ZPTERFUiwgU1VCVEFTS1NfRk9MREVSLCBUQVJFQVNfRk9MREVSIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHtcbiAgYXBwZW5kVGFza0xpbmtUb0ZpbmlzaGVkSW5kZXgsXG4gIGFwcGVuZFRhc2tMaW5rVG9JbmRleCxcbiAgcmVtb3ZlVGFza0xpbmtGcm9tRmluaXNoZWRJbmRleCxcbiAgcmVtb3ZlVGFza0xpbmtGcm9tSW5kZXgsXG59IGZyb20gJy4vdGFza0luZGV4RW5naW5lJ1xuaW1wb3J0IHsgc3luY1Rhc2tUeXBlVGFncyB9IGZyb20gJy4vZnJvbnRtYXR0ZXJFbmdpbmUnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtb3ZlVGFza1RvQ29tcGxldGVkRm9sZGVyKGFwcDogQXBwLCBmaWxlOiBURmlsZSwgaXNTdWJ0YXNrID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgdGFyZ2V0Rm9sZGVyID0gaXNTdWJ0YXNrID8gQ09NUExFVEVEX1NVQlRBU0tTX0ZPTERFUiA6IENPTVBMRVRFRF9UQVNLU19GT0xERVJcbiAgYXdhaXQgZW5zdXJlRm9sZGVyKGFwcCwgdGFyZ2V0Rm9sZGVyKVxuICBjb25zdCBuZXh0UGF0aCA9IHJlc29sdmVVbmlxdWVQYXRoKGFwcCwgYCR7dGFyZ2V0Rm9sZGVyfS8ke2ZpbGUubmFtZX1gKVxuICBpZiAobmV4dFBhdGggPT09IGZpbGUucGF0aClcbiAgICByZXR1cm5cblxuICBhd2FpdCByZW1vdmVUYXNrTGlua0Zyb21JbmRleChhcHAsIGZpbGUpXG4gIGF3YWl0IGFwcC5maWxlTWFuYWdlci5yZW5hbWVGaWxlKGZpbGUsIG5leHRQYXRoKVxuICBhd2FpdCBhcHBlbmRUYXNrTGlua1RvRmluaXNoZWRJbmRleChhcHAsIGZpbGUpXG4gIGF3YWl0IHN5bmNUYXNrVHlwZVRhZ3MoYXBwKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZVRhc2tUb0FjdGl2ZUZvbGRlcihhcHA6IEFwcCwgZmlsZTogVEZpbGUsIGlzU3VidGFzayA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHRhcmdldEZvbGRlciA9IGlzU3VidGFzayA/IFNVQlRBU0tTX0ZPTERFUiA6IFRBUkVBU19GT0xERVJcbiAgYXdhaXQgZW5zdXJlRm9sZGVyKGFwcCwgdGFyZ2V0Rm9sZGVyKVxuICBjb25zdCBuZXh0UGF0aCA9IHJlc29sdmVVbmlxdWVQYXRoKGFwcCwgYCR7dGFyZ2V0Rm9sZGVyfS8ke2ZpbGUubmFtZX1gKVxuICBpZiAobmV4dFBhdGggPT09IGZpbGUucGF0aClcbiAgICByZXR1cm5cblxuICBhd2FpdCByZW1vdmVUYXNrTGlua0Zyb21GaW5pc2hlZEluZGV4KGFwcCwgZmlsZSlcbiAgYXdhaXQgYXBwLmZpbGVNYW5hZ2VyLnJlbmFtZUZpbGUoZmlsZSwgbmV4dFBhdGgpXG4gIGF3YWl0IGFwcGVuZFRhc2tMaW5rVG9JbmRleChhcHAsIGZpbGUpXG4gIGF3YWl0IHN5bmNUYXNrVHlwZVRhZ3MoYXBwKVxufVxuXG5mdW5jdGlvbiByZXNvbHZlVW5pcXVlUGF0aChhcHA6IEFwcCwgZGVzaXJlZFBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGV4aXN0aW5nID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChkZXNpcmVkUGF0aClcbiAgaWYgKCFleGlzdGluZyB8fCBleGlzdGluZy5wYXRoID09PSBkZXNpcmVkUGF0aClcbiAgICByZXR1cm4gZGVzaXJlZFBhdGhcblxuICBjb25zdCBkb3RJbmRleCA9IGRlc2lyZWRQYXRoLmxhc3RJbmRleE9mKCcuJylcbiAgY29uc3QgYmFzZSA9IGRvdEluZGV4ID4gMCA/IGRlc2lyZWRQYXRoLnNsaWNlKDAsIGRvdEluZGV4KSA6IGRlc2lyZWRQYXRoXG4gIGNvbnN0IGV4dCA9IGRvdEluZGV4ID4gMCA/IGRlc2lyZWRQYXRoLnNsaWNlKGRvdEluZGV4KSA6ICcnXG4gIHJldHVybiBgJHtiYXNlfSAke0RhdGUubm93KCl9JHtleHR9YFxufVxuXG5hc3luYyBmdW5jdGlvbiBlbnN1cmVGb2xkZXIoYXBwOiBBcHAsIHBhdGg6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbilcbiAgbGV0IGN1cnJlbnRQYXRoID0gJydcbiAgZm9yIChjb25zdCBzZWdtZW50IG9mIHNlZ21lbnRzKSB7XG4gICAgY3VycmVudFBhdGggPSBjdXJyZW50UGF0aCA/IGAke2N1cnJlbnRQYXRofS8ke3NlZ21lbnR9YCA6IHNlZ21lbnRcbiAgICBjb25zdCBleGlzdGluZyA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoY3VycmVudFBhdGgpXG4gICAgaWYgKGlzRm9sZGVyKGV4aXN0aW5nKSlcbiAgICAgIGNvbnRpbnVlXG5cbiAgICBpZiAoZXhpc3RpbmcpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjcmVhdGUgZm9sZGVyIFwiJHtjdXJyZW50UGF0aH1cIiBiZWNhdXNlIGEgZmlsZSB3aXRoIHRoYXQgbmFtZSBleGlzdHMuYClcblxuICAgIGF3YWl0IGFwcC52YXVsdC5jcmVhdGVGb2xkZXIoY3VycmVudFBhdGgpXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNGb2xkZXIoZmlsZTogVEFic3RyYWN0RmlsZSB8IG51bGwpOiBmaWxlIGlzIFRGb2xkZXIge1xuICByZXR1cm4gZmlsZSAhPT0gbnVsbCAmJiAnY2hpbGRyZW4nIGluIGZpbGVcbn1cbiIsImltcG9ydCB7IE9SREVSX1NURVAgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgdHlwZSB7IFRhc2tJdGVtIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiByZW9yZGVyTGlzdDxUPihpdGVtczogVFtdLCBmcm9tSW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyKTogVFtdIHtcbiAgaWYgKGZyb21JbmRleCA8IDAgfHwgdG9JbmRleCA8IDAgfHwgZnJvbUluZGV4ID09PSB0b0luZGV4KVxuICAgIHJldHVybiBpdGVtc1xuXG4gIGNvbnN0IG5leHQgPSBbLi4uaXRlbXNdXG4gIGNvbnN0IFttb3ZlZF0gPSBuZXh0LnNwbGljZShmcm9tSW5kZXgsIDEpXG4gIG5leHQuc3BsaWNlKHRvSW5kZXgsIDAsIG1vdmVkKVxuICByZXR1cm4gbmV4dFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGVyc2lzdFRhc2tPcmRlcihcbiAgdGFza3M6IFRhc2tJdGVtW10sXG4gIHVwZGF0ZXI6ICh0YXNrOiBUYXNrSXRlbSwgb3JkZXI6IG51bWJlcikgPT4gUHJvbWlzZTx2b2lkPixcbik6IFByb21pc2U8dm9pZD4ge1xuICBmb3IgKGNvbnN0IFtpbmRleCwgdGFza10gb2YgdGFza3MuZW50cmllcygpKVxuICAgIGF3YWl0IHVwZGF0ZXIodGFzaywgKGluZGV4ICsgMSkgKiBPUkRFUl9TVEVQKVxufVxuIiwiaW1wb3J0IHsgVEZpbGUsIHR5cGUgQXBwIH0gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7IFBPTU9ET1JPX0xPR19CQVNFTkFNRSwgVEFSRUFTX0ZPTERFUiB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGludGVyZmFjZSBQb21vZG9yb0xvZ0VudHJ5IHtcbiAgZGF0ZTogc3RyaW5nXG4gIHRpbWU6IHN0cmluZ1xuICB0eXBlOiBzdHJpbmdcbiAgdGFzazogc3RyaW5nXG4gIGRldmlhdGlvbkhvdXJzOiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIEFwcGVuZFBvbW9kb3JvTG9nRW50cnlJbnB1dCB7XG4gIHRpbWVzdGFtcE1zOiBudW1iZXJcbiAgdHlwZTogc3RyaW5nXG4gIHRhc2s6IHN0cmluZ1xuICBkZXZpYXRpb25Ib3VyczogbnVtYmVyXG59XG5cbmNvbnN0IFBPTU9ET1JPX0xPR19QQVRIID0gYCR7VEFSRUFTX0ZPTERFUn0vJHtQT01PRE9ST19MT0dfQkFTRU5BTUV9Lm1kYFxuY29uc3QgUE9NT0RPUk9fTE9HX0hFQURFUiA9IFtcbiAgJyMgUmVnaXN0cm8gUG9tb2Rvcm8nLFxuICAnJyxcbiAgJ3wgZmVjaGEgfCBob3JhcmlvIHwgdGlwbyBkZSBwb21vZG9ybyB8IHRhcmVhIHwgZGVzdmlvIHwnLFxuICAnfCAtLS0gfCAtLS0gfCAtLS0gfCAtLS0gfCAtLS0gfCcsXG5dLmpvaW4oJ1xcbicpXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBlbmRQb21vZG9yb0xvZ0VudHJ5KGFwcDogQXBwLCBpbnB1dDogQXBwZW5kUG9tb2Rvcm9Mb2dFbnRyeUlucHV0KSB7XG4gIGF3YWl0IGVuc3VyZVBvbW9kb3JvTG9nRmlsZShhcHApXG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGlucHV0LnRpbWVzdGFtcE1zKVxuICBjb25zdCBkYXRlVGV4dCA9IHRvTG9jYWxEYXRlVGV4dChkYXRlKVxuICBjb25zdCB0aW1lVGV4dCA9IHRvTG9jYWxUaW1lVGV4dChkYXRlKVxuICBjb25zdCB0eXBlVGV4dCA9IHNhbml0aXplUGlwZVRleHQoaW5wdXQudHlwZSlcbiAgY29uc3QgdGFza1RleHQgPSBzYW5pdGl6ZVBpcGVUZXh0KGlucHV0LnRhc2spXG4gIGNvbnN0IGRldmlhdGlvblRleHQgPSBmb3JtYXRIb3VycyhpbnB1dC5kZXZpYXRpb25Ib3VycylcbiAgY29uc3Qgcm93ID0gYHwgJHtkYXRlVGV4dH0gfCAke3RpbWVUZXh0fSB8ICR7dHlwZVRleHR9IHwgJHt0YXNrVGV4dH0gfCAke2RldmlhdGlvblRleHR9IHxgXG5cbiAgY29uc3QgZmlsZSA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoUE9NT0RPUk9fTE9HX1BBVEgpXG4gIGlmICghKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpXG4gICAgcmV0dXJuXG5cbiAgY29uc3QgY3VycmVudCA9IGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKGZpbGUpXG4gIGNvbnN0IG5leHRDb250ZW50ID0gY3VycmVudC50cmltRW5kKClcbiAgICA/IGAke2N1cnJlbnQudHJpbUVuZCgpfVxcbiR7cm93fVxcbmBcbiAgICA6IGAke1BPTU9ET1JPX0xPR19IRUFERVJ9XFxuJHtyb3d9XFxuYFxuICBhd2FpdCBhcHAudmF1bHQubW9kaWZ5KGZpbGUsIG5leHRDb250ZW50KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVhZFBvbW9kb3JvTG9nRW50cmllcyhhcHA6IEFwcCk6IFByb21pc2U8UG9tb2Rvcm9Mb2dFbnRyeVtdPiB7XG4gIGF3YWl0IGVuc3VyZVBvbW9kb3JvTG9nRmlsZShhcHApXG5cbiAgY29uc3QgZmlsZSA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoUE9NT0RPUk9fTE9HX1BBVEgpXG4gIGlmICghKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpXG4gICAgcmV0dXJuIFtdXG5cbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKGZpbGUpXG4gIGNvbnN0IGVudHJpZXM6IFBvbW9kb3JvTG9nRW50cnlbXSA9IFtdXG5cbiAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KC9cXHI/XFxuLylcbiAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgaWYgKCFsaW5lLnRyaW0oKS5zdGFydHNXaXRoKCd8JykpXG4gICAgICBjb250aW51ZVxuXG4gICAgaWYgKGxpbmUuaW5jbHVkZXMoJ2ZlY2hhIHwgaG9yYXJpbyB8IHRpcG8gZGUgcG9tb2Rvcm8gfCB0YXJlYSB8IGRlc3ZpbycpKVxuICAgICAgY29udGludWVcblxuICAgIGlmIChsaW5lLmluY2x1ZGVzKCd8IC0tLSB8JykpXG4gICAgICBjb250aW51ZVxuXG4gICAgY29uc3QgY29sdW1ucyA9IGxpbmUuc3BsaXQoJ3wnKS5tYXAoaXRlbSA9PiBpdGVtLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pXG4gICAgaWYgKGNvbHVtbnMubGVuZ3RoIDwgNSlcbiAgICAgIGNvbnRpbnVlXG5cbiAgICBjb25zdCBkZXZpYXRpb25Ib3VycyA9IE51bWJlci5wYXJzZUZsb2F0KGNvbHVtbnNbNF0pXG4gICAgZW50cmllcy5wdXNoKHtcbiAgICAgIGRhdGU6IGNvbHVtbnNbMF0sXG4gICAgICB0aW1lOiBjb2x1bW5zWzFdLFxuICAgICAgdHlwZTogY29sdW1uc1syXSxcbiAgICAgIHRhc2s6IGNvbHVtbnNbM10sXG4gICAgICBkZXZpYXRpb25Ib3VyczogTnVtYmVyLmlzTmFOKGRldmlhdGlvbkhvdXJzKSA/IDAgOiBkZXZpYXRpb25Ib3VycyxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVudHJpZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVudHJpZXNCeURhdGUoZW50cmllczogUG9tb2Rvcm9Mb2dFbnRyeVtdLCBsb2NhbERhdGVUZXh0OiBzdHJpbmcpOiBQb21vZG9yb0xvZ0VudHJ5W10ge1xuICByZXR1cm4gZW50cmllcy5maWx0ZXIoZW50cnkgPT4gZW50cnkuZGF0ZSA9PT0gbG9jYWxEYXRlVGV4dClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTG9jYWxEYXRlVGV4dChkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICBjb25zdCBtb250aCA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpXG4gIGNvbnN0IGRheSA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKVxuICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YFxufVxuXG5mdW5jdGlvbiB0b0xvY2FsVGltZVRleHQoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIGNvbnN0IGhvdXJzID0gU3RyaW5nKGRhdGUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgJzAnKVxuICBjb25zdCBtaW51dGVzID0gU3RyaW5nKGRhdGUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpXG4gIHJldHVybiBgJHtob3Vyc306JHttaW51dGVzfWBcbn1cblxuYXN5bmMgZnVuY3Rpb24gZW5zdXJlUG9tb2Rvcm9Mb2dGaWxlKGFwcDogQXBwKSB7XG4gIGNvbnN0IGZvbGRlciA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoVEFSRUFTX0ZPTERFUilcbiAgaWYgKCFmb2xkZXIpXG4gICAgYXdhaXQgYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihUQVJFQVNfRk9MREVSKVxuXG4gIGNvbnN0IGV4aXN0aW5nID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChQT01PRE9ST19MT0dfUEFUSClcbiAgaWYgKGV4aXN0aW5nKVxuICAgIHJldHVyblxuXG4gIGF3YWl0IGFwcC52YXVsdC5jcmVhdGUoUE9NT0RPUk9fTE9HX1BBVEgsIGAke1BPTU9ET1JPX0xPR19IRUFERVJ9XFxuYClcbn1cblxuZnVuY3Rpb24gc2FuaXRpemVQaXBlVGV4dCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xcfC9nLCAnLycpLnRyaW0oKSB8fCAnLSdcbn1cblxuZnVuY3Rpb24gZm9ybWF0SG91cnMoaG91cnM6IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiAoTWF0aC5yb3VuZChob3VycyAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMilcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb2xvclBpY2tlcihcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgY29sb3JzOiBzdHJpbmdbXSxcbiAgc2VsZWN0ZWQ6IHN0cmluZyxcbiAgb25DaGFuZ2U6IChuZXh0Q29sb3I6IHN0cmluZykgPT4gdm9pZCxcbikge1xuICBjb25zdCB3cmFwID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jb2xvci1waWNrZXInIH0pXG5cbiAgZm9yIChjb25zdCBjb2xvciBvZiBjb2xvcnMpIHtcbiAgICBjb25zdCBzd2F0Y2ggPSB3cmFwLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICd0YXJlYXMtY29sb3Itc3dhdGNoJyB9KVxuICAgIHN3YXRjaC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3JcblxuICAgIGlmIChjb2xvciA9PT0gc2VsZWN0ZWQpXG4gICAgICBzd2F0Y2guYWRkQ2xhc3MoJ3RhcmVhcy1zd2F0Y2gtc2VsZWN0ZWQnKVxuXG4gICAgc3dhdGNoLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBvbkNoYW5nZShjb2xvcilcbiAgICAgIG1hcmtTZWxlY3RlZCh3cmFwLCBzd2F0Y2gpXG4gICAgICBjdXN0b21JbnB1dC52YWx1ZSA9IGNvbG9yXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY3VzdG9tSW5wdXQgPSB3cmFwLmNyZWF0ZUVsKCdpbnB1dCcpXG4gIGN1c3RvbUlucHV0LnR5cGUgPSAnY29sb3InXG4gIGN1c3RvbUlucHV0LnZhbHVlID0gc2VsZWN0ZWRcbiAgY3VzdG9tSW5wdXQuY2xhc3NOYW1lID0gJ3RhcmVhcy1jb2xvci1pbnB1dCdcbiAgY3VzdG9tSW5wdXQub25pbnB1dCA9ICgpID0+IHtcbiAgICBvbkNoYW5nZShjdXN0b21JbnB1dC52YWx1ZSlcbiAgICBjbGVhclNlbGVjdGVkKHdyYXApXG4gIH1cblxuICByZXR1cm4geyB3cmFwLCBjdXN0b21JbnB1dCB9XG59XG5cbmZ1bmN0aW9uIG1hcmtTZWxlY3RlZCh3cmFwOiBIVE1MRWxlbWVudCwgc2VsZWN0ZWRTd2F0Y2g6IEhUTUxFbGVtZW50KSB7XG4gIGNsZWFyU2VsZWN0ZWQod3JhcClcbiAgc2VsZWN0ZWRTd2F0Y2guYWRkQ2xhc3MoJ3RhcmVhcy1zd2F0Y2gtc2VsZWN0ZWQnKVxufVxuXG5mdW5jdGlvbiBjbGVhclNlbGVjdGVkKHdyYXA6IEhUTUxFbGVtZW50KSB7XG4gIHdyYXBcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy1jb2xvci1zd2F0Y2gnKVxuICAgIC5mb3JFYWNoKHN3YXRjaCA9PiBzd2F0Y2guY2xhc3NMaXN0LnJlbW92ZSgndGFyZWFzLXN3YXRjaC1zZWxlY3RlZCcpKVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7IFBSRVNFVF9DT0xPUlMgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgdHlwZSB7IFRhcmVhc1BsdWdpbiB9IGZyb20gJy4uL3BsdWdpbi9UYXJlYXNQbHVnaW4nXG5pbXBvcnQgdHlwZSB7IFRhcmVhc1ZpZXdIYW5kbGUgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IGNyZWF0ZUNvbG9yUGlja2VyIH0gZnJvbSAnLi4vdWkvY29sb3JQaWNrZXInXG5cbmV4cG9ydCBjbGFzcyBOZXdHcm91cE1vZGFsIGV4dGVuZHMgb2JzaWRpYW4uTW9kYWwge1xuICBwcml2YXRlIHBsdWdpbjogVGFyZWFzUGx1Z2luXG4gIHByaXZhdGUgdmlldzogVGFyZWFzVmlld0hhbmRsZVxuICBwcml2YXRlIGRhdGE6IHsgbmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nIH1cblxuICBjb25zdHJ1Y3RvcihhcHA6IG9ic2lkaWFuLkFwcCwgcGx1Z2luOiBUYXJlYXNQbHVnaW4sIHZpZXc6IFRhcmVhc1ZpZXdIYW5kbGUpIHtcbiAgICBzdXBlcihhcHApXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW5cbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy5kYXRhID0geyBuYW1lOiAnJywgY29sb3I6IFBSRVNFVF9DT0xPUlNbMl0gfVxuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzXG4gICAgY29udGVudEVsLmFkZENsYXNzKCd0YXJlYXMtbW9kYWwnKVxuICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdOdWV2byBHcnVwbycgfSlcblxuICAgIG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZSgnTm9tYnJlIGRlbCBncnVwbycpLmFkZFRleHQoKHRleHQpID0+IHtcbiAgICAgIHRleHQuc2V0UGxhY2Vob2xkZXIoJ0VqOiBEaWFyaWFzLCBzZW1hbmFsZXMuLi4nKVxuICAgICAgdGV4dC5vbkNoYW5nZSh2YWx1ZSA9PiB0aGlzLmRhdGEubmFtZSA9IHZhbHVlKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0ZXh0LmlucHV0RWwuZm9jdXMoKSwgNTApXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbG9yU2V0dGluZyA9IG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZSgnQ29sb3InKVxuICAgIGNyZWF0ZUNvbG9yUGlja2VyKGNvbG9yU2V0dGluZy5jb250cm9sRWwsIFBSRVNFVF9DT0xPUlMsIHRoaXMuZGF0YS5jb2xvciwgKG5leHRDb2xvcikgPT4ge1xuICAgICAgdGhpcy5kYXRhLmNvbG9yID0gbmV4dENvbG9yXG4gICAgfSlcblxuICAgIGNvbnN0IGZvb3RlciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtbW9kYWwtZm9vdGVyJyB9KVxuXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdDcmVhciBncnVwbycsIGNsczogJ21vZC1jdGEnIH0pXG4gICAgY3JlYXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNyZWF0ZUdyb3VwKClcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ2FuY2VsYXInIH0pXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlKClcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVHcm91cCgpIHtcbiAgICBjb25zdCBncm91cE5hbWUgPSB0aGlzLmRhdGEubmFtZS50cmltKClcbiAgICBpZiAoIWdyb3VwTmFtZSkge1xuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZSgnRWwgbm9tYnJlIGVzIHJlcXVlcmlkbycpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnBsdWdpbi5hZGRFcXVpcG8oZ3JvdXBOYW1lLCB0aGlzLmRhdGEuY29sb3IpXG4gICAgdGhpcy52aWV3LmV4cGFuZGVkR3JvdXBzLmFkZChncm91cE5hbWUpXG4gICAgdGhpcy52aWV3LnJlbmRlcigpXG5cbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBHcnVwbyBcIiR7Z3JvdXBOYW1lfVwiIGNyZWFkb2ApXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQgeyBMT0NLRURfRVFVSVBPX05BTUVTLCBQUkVTRVRfQ09MT1JTIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgY291bnRUb3BMZXZlbFRlYW1UYXNrcywgcmVuYW1lVGVhbUluVGFza3MgfSBmcm9tICcuLi9lbmdpbmVzL2Zyb250bWF0dGVyRW5naW5lJ1xuaW1wb3J0IHR5cGUgeyBUYXJlYXNQbHVnaW4gfSBmcm9tICcuLi9wbHVnaW4vVGFyZWFzUGx1Z2luJ1xuaW1wb3J0IHR5cGUgeyBFcXVpcG8sIFRhcmVhc1ZpZXdIYW5kbGUgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IGNyZWF0ZUNvbG9yUGlja2VyIH0gZnJvbSAnLi4vdWkvY29sb3JQaWNrZXInXG5cbmV4cG9ydCBjbGFzcyBFZGl0U2VjdGlvbk1vZGFsIGV4dGVuZHMgb2JzaWRpYW4uTW9kYWwge1xuICBwcml2YXRlIHBsdWdpbjogVGFyZWFzUGx1Z2luXG4gIHByaXZhdGUgZXFPYmo6IEVxdWlwb1xuICBwcml2YXRlIHZpZXc6IFRhcmVhc1ZpZXdIYW5kbGVcbiAgcHJpdmF0ZSBkYXRhOiB7IG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyB9XG5cbiAgY29uc3RydWN0b3IoYXBwOiBvYnNpZGlhbi5BcHAsIHBsdWdpbjogVGFyZWFzUGx1Z2luLCBlcU9iajogRXF1aXBvLCB2aWV3OiBUYXJlYXNWaWV3SGFuZGxlKSB7XG4gICAgc3VwZXIoYXBwKVxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luXG4gICAgdGhpcy5lcU9iaiA9IGVxT2JqXG4gICAgdGhpcy52aWV3ID0gdmlld1xuICAgIHRoaXMuZGF0YSA9IHsgbmFtZTogZXFPYmoubmFtZSwgY29sb3I6IGVxT2JqLmNvbG9yIH1cbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpc1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLW1vZGFsJylcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnRWRpdGFyIHNlY2Npw7NuJyB9KVxuXG4gICAgbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKS5zZXROYW1lKCdOb21icmUnKS5hZGRUZXh0KCh0ZXh0KSA9PiB7XG4gICAgICB0ZXh0LnNldFZhbHVlKHRoaXMuZGF0YS5uYW1lKVxuICAgICAgdGV4dC5vbkNoYW5nZSh2YWx1ZSA9PiB0aGlzLmRhdGEubmFtZSA9IHZhbHVlKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0ZXh0LmlucHV0RWwuZm9jdXMoKSwgNTApXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbG9yU2V0dGluZyA9IG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZSgnQ29sb3InKVxuICAgIGNyZWF0ZUNvbG9yUGlja2VyKGNvbG9yU2V0dGluZy5jb250cm9sRWwsIFBSRVNFVF9DT0xPUlMsIHRoaXMuZGF0YS5jb2xvciwgKG5leHRDb2xvcikgPT4ge1xuICAgICAgdGhpcy5kYXRhLmNvbG9yID0gbmV4dENvbG9yXG4gICAgfSlcblxuICAgIGNvbnN0IGZvb3RlciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtbW9kYWwtZm9vdGVyJyB9KVxuXG4gICAgaWYgKCF0aGlzLmlzTG9ja2VkU2VjdGlvbigpKSB7XG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgICAgdGV4dDogJ0VsaW1pbmFyIHNlY2Npw7NuJyxcbiAgICAgICAgY2xzOiAnbW9kLXdhcm5pbmcnLFxuICAgICAgfSlcbiAgICAgIGRlbGV0ZUJ1dHRvbi5zdHlsZS5tYXJnaW5SaWdodCA9ICdhdXRvJ1xuICAgICAgZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNvbmZpcm1EZWxldGUoKVxuICAgIH1cblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ2FuY2VsYXInIH0pXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlKClcblxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0d1YXJkYXInLCBjbHM6ICdtb2QtY3RhJyB9KVxuICAgIHNhdmVCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuc2F2ZSgpXG4gIH1cblxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2F2ZSgpIHtcbiAgICBjb25zdCBuZXdOYW1lID0gdGhpcy5kYXRhLm5hbWUudHJpbSgpXG4gICAgaWYgKCFuZXdOYW1lKSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdFbCBub21icmUgZXMgcmVxdWVyaWRvJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9sZE5hbWUgPSB0aGlzLmVxT2JqLm5hbWVcbiAgICBpZiAodGhpcy5pc0xvY2tlZFNlY3Rpb24oKSAmJiBuZXdOYW1lICE9PSBvbGROYW1lKSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBMYSBzZWNjacOzbiBcIiR7b2xkTmFtZX1cIiBubyBwdWVkZSByZW5vbWJyYXJzZWApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAobmV3TmFtZSAhPT0gb2xkTmFtZSlcbiAgICAgIGF3YWl0IHJlbmFtZVRlYW1JblRhc2tzKHRoaXMuYXBwLCBvbGROYW1lLCBuZXdOYW1lKVxuXG4gICAgdGhpcy5wbHVnaW4udXBkYXRlRXF1aXBvKG9sZE5hbWUsIHsgbmFtZTogbmV3TmFtZSwgY29sb3I6IHRoaXMuZGF0YS5jb2xvciB9KVxuICAgIHRoaXMudmlldy5leHBhbmRlZEdyb3Vwcy5kZWxldGUob2xkTmFtZSlcbiAgICB0aGlzLnZpZXcuZXhwYW5kZWRHcm91cHMuYWRkKG5ld05hbWUpXG4gICAgdGhpcy52aWV3LnJlbmRlcigpXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cblxuICBwcml2YXRlIGNvbmZpcm1EZWxldGUoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2NrZWRTZWN0aW9uKCkpIHtcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYExhIHNlY2Npw7NuIFwiJHt0aGlzLmVxT2JqLm5hbWV9XCIgbm8gc2UgcHVlZGUgZWxpbWluYXJgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGFza0NvdW50ID0gY291bnRUb3BMZXZlbFRlYW1UYXNrcyh0aGlzLmFwcCwgdGhpcy5lcU9iai5uYW1lKVxuICAgIGlmICh0YXNrQ291bnQgPiAwKSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBMYSBzZWNjacOzbiBcIiR7dGhpcy5lcU9iai5uYW1lfVwiIHRpZW5lICR7dGFza0NvdW50fSB0YXJlYShzKS4gTW92YWxhcyBhIG90cmEgc2VjY2nDs24gYW50ZXMgZGUgZWxpbWluYXIuYClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMucGx1Z2luLnJlbW92ZUVxdWlwbyh0aGlzLmVxT2JqLm5hbWUpXG4gICAgdGhpcy52aWV3LmV4cGFuZGVkR3JvdXBzLmRlbGV0ZSh0aGlzLmVxT2JqLm5hbWUpXG4gICAgdGhpcy52aWV3LnJlbmRlcigpXG4gICAgbmV3IG9ic2lkaWFuLk5vdGljZShgU2VjY2nDs24gXCIke3RoaXMuZXFPYmoubmFtZX1cIiBlbGltaW5hZGFgKVxuICAgIHRoaXMuY2xvc2UoKVxuICB9XG5cbiAgcHJpdmF0ZSBpc0xvY2tlZFNlY3Rpb24oKSB7XG4gICAgcmV0dXJuIExPQ0tFRF9FUVVJUE9fTkFNRVMuaW5jbHVkZXModGhpcy5lcU9iai5uYW1lKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBvYnNpZGlhbiBmcm9tICdvYnNpZGlhbidcblxuaW1wb3J0IHR5cGUgeyBUYXNrSXRlbSB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgY2xhc3MgRWRpdFRhc2tGaWxlTW9kYWwgZXh0ZW5kcyBvYnNpZGlhbi5Nb2RhbCB7XG4gIHByaXZhdGUgdGFzazogVGFza0l0ZW1cbiAgcHJpdmF0ZSB0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgaW5pdGlhbENvbnRlbnQgPSAnJ1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogb2JzaWRpYW4uQXBwLCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIHN1cGVyKGFwcClcbiAgICB0aGlzLnRhc2sgPSB0YXNrXG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXNcbiAgICB0aGlzLm1vZGFsRWwuYWRkQ2xhc3MoJ3RhcmVhcy1lZGl0LXRhc2stbW9kYWwtc2hlbGwnKVxuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLW1vZGFsJylcbiAgICBjb250ZW50RWwuYWRkQ2xhc3MoJ3RhcmVhcy1lZGl0LXRhc2stbW9kYWwnKVxuICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6IGBFZGl0YXI6ICR7dGhpcy50YXNrLnRhcmVhfWAgfSlcblxuICAgIGNvbnN0IGhlbHBlciA9IGNvbnRlbnRFbC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLWVkaXQtdGFzay1oaW50JyB9KVxuICAgIGhlbHBlci5zZXRUZXh0KGBFZGl0YSBlbCBjb250ZW5pZG8gY29tcGxldG8gZGUgJHt0aGlzLnRhc2suZmlsZS5wYXRofWApXG5cbiAgICB0aGlzLnRleHRhcmVhID0gY29udGVudEVsLmNyZWF0ZUVsKCd0ZXh0YXJlYScsIHtcbiAgICAgIGNsczogJ3RhcmVhcy1lZGl0LXRhc2stdGV4dGFyZWEnLFxuICAgICAgYXR0cjoge1xuICAgICAgICBzcGVsbGNoZWNrOiAnZmFsc2UnLFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgY29uc3QgZm9vdGVyID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1tb2RhbC1mb290ZXInIH0pXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdDYW5jZWxhcicgfSlcbiAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuY2xvc2UoKVxuXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnR3VhcmRhcicsIGNsczogJ21vZC1jdGEnIH0pXG4gICAgc2F2ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdm9pZCB0aGlzLnNhdmUoKVxuICAgIH1cblxuICAgIHZvaWQgdGhpcy5sb2FkRmlsZUNvbnRlbnQoKVxuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxvYWRGaWxlQ29udGVudCgpIHtcbiAgICBpZiAoIXRoaXMudGV4dGFyZWEpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5jYWNoZWRSZWFkKHRoaXMudGFzay5maWxlKVxuICAgIHRoaXMuaW5pdGlhbENvbnRlbnQgPSBjb250ZW50XG4gICAgdGhpcy50ZXh0YXJlYS52YWx1ZSA9IGNvbnRlbnRcbiAgICB0aGlzLnRleHRhcmVhLmZvY3VzKClcbiAgICB0aGlzLnRleHRhcmVhLnNldFNlbGVjdGlvblJhbmdlKDAsIDApXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNhdmUoKSB7XG4gICAgaWYgKCF0aGlzLnRleHRhcmVhKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBuZXh0Q29udGVudCA9IHRoaXMudGV4dGFyZWEudmFsdWVcbiAgICBpZiAobmV4dENvbnRlbnQgPT09IHRoaXMuaW5pdGlhbENvbnRlbnQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgdGhpcy5hcHAudmF1bHQubW9kaWZ5KHRoaXMudGFzay5maWxlLCBuZXh0Q29udGVudClcbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdUYXJlYSBhY3R1YWxpemFkYScpXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQgdHlwZSB7IFRhc2tJdGVtIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBjbGFzcyBBZGRUYXNrQ29tbWVudE1vZGFsIGV4dGVuZHMgb2JzaWRpYW4uTW9kYWwge1xuICBwcml2YXRlIHRhc2s6IFRhc2tJdGVtXG4gIHByaXZhdGUgdGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBudWxsID0gbnVsbFxuXG4gIGNvbnN0cnVjdG9yKGFwcDogb2JzaWRpYW4uQXBwLCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIHN1cGVyKGFwcClcbiAgICB0aGlzLnRhc2sgPSB0YXNrXG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXNcbiAgICBjb250ZW50RWwuYWRkQ2xhc3MoJ3RhcmVhcy1tb2RhbCcpXG4gICAgY29udGVudEVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogYENvbWVudGFyaW86ICR7dGhpcy50YXNrLnRhcmVhfWAgfSlcblxuICAgIGNvbnN0IGhlbHAgPSBjb250ZW50RWwuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1jb21tZW50LW1vZGFsLWhpbnQnIH0pXG4gICAgaGVscC5zZXRUZXh0KCdTZSBhZ3JlZ2Fyw6EgYWwgZmluYWwgZGVsIGFyY2hpdm8gZGUgbGEgdGFyZWEuJylcblxuICAgIHRoaXMudGV4dGFyZWEgPSBjb250ZW50RWwuY3JlYXRlRWwoJ3RleHRhcmVhJywge1xuICAgICAgY2xzOiAndGFyZWFzLWNvbW1lbnQtbW9kYWwtdGV4dGFyZWEnLFxuICAgICAgYXR0cjogeyBwbGFjZWhvbGRlcjogJ0VzY3JpYmUgdW4gY29tZW50YXJpby4uLicgfSxcbiAgICB9KVxuICAgIHRoaXMudGV4dGFyZWEuZm9jdXMoKVxuXG4gICAgY29uc3QgZm9vdGVyID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1tb2RhbC1mb290ZXInIH0pXG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NhbmNlbGFyJyB9KVxuICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jbG9zZSgpXG5cbiAgICBjb25zdCBhZGRCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0FncmVnYXInLCBjbHM6ICdtb2QtY3RhJyB9KVxuICAgIGFkZEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdm9pZCB0aGlzLmFwcGVuZENvbW1lbnQoKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBhcHBlbmRDb21tZW50KCkge1xuICAgIGNvbnN0IHJhd0NvbW1lbnQgPSB0aGlzLnRleHRhcmVhPy52YWx1ZSA/PyAnJ1xuICAgIGNvbnN0IGNvbW1lbnQgPSByYXdDb21tZW50LnRyaW0oKVxuICAgIGlmICghY29tbWVudCkge1xuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZSgnRXNjcmliZSB1biBjb21lbnRhcmlvIGFudGVzIGRlIGd1YXJkYXInKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNhY2hlZFJlYWQodGhpcy50YXNrLmZpbGUpXG4gICAgY29uc3QgaGFzQ29udGVudCA9IGN1cnJlbnQudHJpbSgpLmxlbmd0aCA+IDBcbiAgICBjb25zdCB3aXRoTmV3bGluZSA9IGN1cnJlbnQuZW5kc1dpdGgoJ1xcbicpID8gY3VycmVudCA6IGAke2N1cnJlbnR9XFxuYFxuICAgIGNvbnN0IHNwYWNlciA9IGhhc0NvbnRlbnQgPyAnXFxuJyA6ICcnXG4gICAgY29uc3QgY29tbWVudEJsb2NrID0gdGhpcy5idWlsZENvbW1lbnRCbG9jayhjb21tZW50KVxuICAgIGNvbnN0IG5leHQgPSBgJHt3aXRoTmV3bGluZX0ke3NwYWNlcn0ke2NvbW1lbnRCbG9ja31gXG5cbiAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkodGhpcy50YXNrLmZpbGUsIG5leHQpXG4gICAgbmV3IG9ic2lkaWFuLk5vdGljZSgnQ29tZW50YXJpbyBhZ3JlZ2FkbycpXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQ29tbWVudEJsb2NrKGNvbW1lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IGRheSA9IFN0cmluZyhub3cuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpXG4gICAgY29uc3QgbW9udGggPSBTdHJpbmcobm93LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpXG4gICAgY29uc3QgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpXG4gICAgY29uc3QgaG91cnMgPSBTdHJpbmcobm93LmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJylcbiAgICBjb25zdCBtaW51dGVzID0gU3RyaW5nKG5vdy5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsICcwJylcblxuICAgIGNvbnN0IHN0YW1wID0gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9ICR7aG91cnN9OiR7bWludXRlc31gXG4gICAgcmV0dXJuIGAjIyBDb21lbnRhcmlvIC0gJHtzdGFtcH1cXG5cXG4ke2NvbW1lbnR9XFxuYFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBvYnNpZGlhbiBmcm9tICdvYnNpZGlhbidcblxuaW1wb3J0IHR5cGUgeyBQb21vZG9yb0R1cmF0aW9ucyB9IGZyb20gJy4uL3R5cGVzJ1xuXG5pbnRlcmZhY2UgUG9tb2Rvcm9QcmVzZXQge1xuICBpZDogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgd29ya0xhYmVsOiBzdHJpbmdcbiAgc2hvcnRCcmVha0xhYmVsOiBzdHJpbmdcbiAgY3ljbGVzTGFiZWw6IHN0cmluZ1xuICBsb25nQnJlYWtMYWJlbDogc3RyaW5nXG4gIGlkZWFsRm9yOiBzdHJpbmdcbiAgZHVyYXRpb25zOiBQb21vZG9yb0R1cmF0aW9uc1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvbW9kb3JvUHJlc2V0Q2FyZERhdGEge1xuICB0aXRsZTogc3RyaW5nXG4gIHVzYWdlOiBzdHJpbmdcbiAgd29ya0xhYmVsOiBzdHJpbmdcbiAgc2hvcnRCcmVha0xhYmVsOiBzdHJpbmdcbiAgbG9uZ0JyZWFrTGFiZWw6IHN0cmluZ1xuICBjeWNsZXNMYWJlbDogc3RyaW5nXG59XG5cbmNvbnN0IFBPTU9ET1JPX1BSRVNFVFM6IFBvbW9kb3JvUHJlc2V0W10gPSBbXG4gIHtcbiAgICBpZDogJ3N0YW5kYXJkLTI1LTUnLFxuICAgIHRpdGxlOiAn4q2QIEVzdMOhbmRhciAtIDI1LzUnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDI1IG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDUgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogNCcsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMTUgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IHRhcmVhcyBtb2RlcmFkYXMsIHByb2dyYW1hY2nDs24sIGVzdHVkaW8sIG1hbnRlbmVyIHJpdG1vIGNvbnN0YW50ZSBzaW4gcXVlbWFyc2UuJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDI1LCBzaG9ydEJyZWFrTWludXRlczogNSwgbG9uZ0JyZWFrTWludXRlczogMTUgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnZGVlcC1mb2N1cy01MC0xMCcsXG4gICAgdGl0bGU6ICfimqEgUGFyYSBmb2NvIHByb2Z1bmRvIC0gNTAvMTAnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDUwIG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDEwIG1pbicsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDMnLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDIwIG1pbicsXG4gICAgaWRlYWxGb3I6ICdJZGVhbCBwYXJhOiBwcm9ncmFtYWNpw7NuIHBlc2FkYSwgZGVidWdnaW5nLCBpbnZlc3RpZ2FjacOzbiwgZXNjcml0dXJhIGxhcmdhLiBDdWFuZG8gdGUgbWV0w6lzIGVuIFwiZGVlcCB3b3JrXCIuJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDUwLCBzaG9ydEJyZWFrTWludXRlczogMTAsIGxvbmdCcmVha01pbnV0ZXM6IDIwIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ2Rldi1jbGFzc2ljLTUyLTE3JyxcbiAgICB0aXRsZTogJ/CfkrsgQ2zDoXNpY28gZGUgcHJvZ3JhbWFkb3JlcyAtIDUyLzE3JyxcbiAgICB3b3JrTGFiZWw6ICdUcmFiYWpvOiA1MiBtaW4nLFxuICAgIHNob3J0QnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGNvcnRvOiAxNyBtaW4nLFxuICAgIGN5Y2xlc0xhYmVsOiAnQ2ljbG9zOiAyJyxcbiAgICBsb25nQnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGxhcmdvOiAyMCBtaW4nLFxuICAgIGlkZWFsRm9yOiAnSWRlYWwgcGFyYTogdGFyZWFzIGNvbXBsZWphcyBxdWUgcmVxdWllcmVuIGZsdWlyIHNpbiBjb3J0ZXMgbGFyZ29zLiBNYW50aWVuZSBlbmVyZ8OtYSBhbHRhLicsXG4gICAgZHVyYXRpb25zOiB7IHdvcmtNaW51dGVzOiA1Miwgc2hvcnRCcmVha01pbnV0ZXM6IDE3LCBsb25nQnJlYWtNaW51dGVzOiAyMCB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdjcmVhdGl2ZS00MC0xMCcsXG4gICAgdGl0bGU6ICfwn46oIENyZWF0aXZvIC0gNDAvMTAnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDQwIG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDEwIG1pbicsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDQnLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDIwIG1pbicsXG4gICAgaWRlYWxGb3I6ICdJZGVhbCBwYXJhOiBkaXNlw7FvLCBlc2NyaXR1cmEgY3JlYXRpdmEsIGJyYWluc3Rvcm1pbmcsIGRvbmRlIHF1ZXLDqXMgdGllbXBvIHBhcmEgZW50cmFyIGVuIGVzdGFkby4nLFxuICAgIGR1cmF0aW9uczogeyB3b3JrTWludXRlczogNDAsIHNob3J0QnJlYWtNaW51dGVzOiAxMCwgbG9uZ0JyZWFrTWludXRlczogMjAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnc3ByaW50LTQ1LTE1JyxcbiAgICB0aXRsZTogJ/CflKggU3ByaW50IC0gNDUvMTUnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDQ1IG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDE1IG1pbicsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDMnLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDI1IG1pbicsXG4gICAgaWRlYWxGb3I6ICdJZGVhbCBwYXJhOiB0YXJlYXMgZ3JhbmRlcyBkb25kZSBuZWNlc2l0w6FzIGVtcHVqYXIgZnVlcnRlIChyZWZhY3RvcnMsIGRvY3VtZW50YWNpw7NuLCBhbsOhbGlzaXMpLicsXG4gICAgZHVyYXRpb25zOiB7IHdvcmtNaW51dGVzOiA0NSwgc2hvcnRCcmVha01pbnV0ZXM6IDE1LCBsb25nQnJlYWtNaW51dGVzOiAyNSB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdhZGhkLTIwLTUnLFxuICAgIHRpdGxlOiAn8J+noCBQYXJhIFREQUggbyBtdWNoYSBkaXN0cmFjY2nDs24gLSAyMC81JyxcbiAgICB3b3JrTGFiZWw6ICdUcmFiYWpvOiAyMCBtaW4nLFxuICAgIHNob3J0QnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGNvcnRvOiA1IG1pbicsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDQnLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDE1IG1pbicsXG4gICAgaWRlYWxGb3I6ICdJZGVhbCBwYXJhOiBjdWFuZG8gdGUgY3Vlc3RhIGVuZ2FuY2hhcnRlIG8gbWFudGVuZXIgZm9jbyBzb3N0ZW5pZG8uIEVudHJhZGFzIGNvcnRhcyBwZXJvIGVmZWN0aXZhcy4nLFxuICAgIGR1cmF0aW9uczogeyB3b3JrTWludXRlczogMjAsIHNob3J0QnJlYWtNaW51dGVzOiA1LCBsb25nQnJlYWtNaW51dGVzOiAxNSB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdtaWNyby0xNS01JyxcbiAgICB0aXRsZTogJ/Cfk4kgTWljcm8tUG9tb2Rvcm8gLSAxNS81JyxcbiAgICB3b3JrTGFiZWw6ICdUcmFiYWpvOiAxNSBtaW4nLFxuICAgIHNob3J0QnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGNvcnRvOiA1IG1pbicsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDQnLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDE1IG1pbicsXG4gICAgaWRlYWxGb3I6ICdJZGVhbCBwYXJhOiB0YXJlYXMgY2hpY2FzLCByZXZpc2FyIG1haWxzLCBvcmRlbmFyIHBlbmRpZW50ZXMsIGN1YW5kbyBlc3TDoXMgbWVudGFsbWVudGUgbXV5IGNhbnNhZG8uJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDE1LCBzaG9ydEJyZWFrTWludXRlczogNSwgbG9uZ0JyZWFrTWludXRlczogMTUgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnbG93LWVuZXJneS0xNS0zJyxcbiAgICB0aXRsZTogJ/CflIsgRW5lcmfDrWEgYmFqYSAtIDE1LzMnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDE1IG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDMgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogNCcsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMTIgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IGTDrWFzIGRlIGZhdGlnYSBtZW50YWwsIHRhcmVhcyBsaWdlcmFzLCBhdmFuemFyIGxlbnRvIHBlcm8gY29uc3RhbnRlLicsXG4gICAgZHVyYXRpb25zOiB7IHdvcmtNaW51dGVzOiAxNSwgc2hvcnRCcmVha01pbnV0ZXM6IDMsIGxvbmdCcmVha01pbnV0ZXM6IDEyIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ3VsdHJhZGlhbi05MC0yMCcsXG4gICAgdGl0bGU6ICfwn6exIENpY2xvcyB1bHRyYWRpYW5vcyAtIDkwLzIwJyxcbiAgICB3b3JrTGFiZWw6ICdUcmFiYWpvOiA5MCBtaW4nLFxuICAgIHNob3J0QnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGNvcnRvOiBubyBhcGxpY2EnLFxuICAgIGN5Y2xlc0xhYmVsOiAnQ2ljbG9zOiAyIHBvciBzZXNpw7NuJyxcbiAgICBsb25nQnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGxhcmdvOiAyMCBtaW4nLFxuICAgIGlkZWFsRm9yOiAnSWRlYWwgcGFyYTogc2VzaW9uZXMgY3JlYXRpdmFzIHByb2Z1bmRhcyBvIGRlIGluZ2VuaWVyw61hIGRvbmRlIGNvcnRhciBlcyBjb250cmFwcm9kdWNlbnRlLicsXG4gICAgZHVyYXRpb25zOiB7IHdvcmtNaW51dGVzOiA5MCwgc2hvcnRCcmVha01pbnV0ZXM6IDIwLCBsb25nQnJlYWtNaW51dGVzOiAyMCB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdhZ2dyZXNzaXZlLTUwLTUnLFxuICAgIHRpdGxlOiAn8J+nqSA1MC81IChhZ3Jlc2l2byknLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDUwIG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDUgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogMycsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMjAgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IHRhcmVhcyBkZSBhbHRhIHByZXNpw7NuIG8gZW50cmVnYXMgZG9uZGUgcXVlcsOpcyBtaW5pbWl6YXIgcGF1c2FzLicsXG4gICAgZHVyYXRpb25zOiB7IHdvcmtNaW51dGVzOiA1MCwgc2hvcnRCcmVha01pbnV0ZXM6IDUsIGxvbmdCcmVha01pbnV0ZXM6IDIwIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ2JhbGFuY2VkLTMwLTEwJyxcbiAgICB0aXRsZTogJ/CfqrYgMzAvMTAgKGJhbGFuY2VhZG8pJyxcbiAgICB3b3JrTGFiZWw6ICdUcmFiYWpvOiAzMCBtaW4nLFxuICAgIHNob3J0QnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGNvcnRvOiAxMCBtaW4nLFxuICAgIGN5Y2xlc0xhYmVsOiAnQ2ljbG9zOiA0JyxcbiAgICBsb25nQnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGxhcmdvOiAyMCBtaW4nLFxuICAgIGlkZWFsRm9yOiAnSWRlYWwgcGFyYTogdGFyZWFzIGRlIGFuw6FsaXNpcywgYWRtaW5pc3RyYWNpw7NuLCBjb250YWJpbGlkYWQgbWVudGFsIGxpdmlhbmEgbyByZXNlYXJjaCB2YXJpYWRvLicsXG4gICAgZHVyYXRpb25zOiB7IHdvcmtNaW51dGVzOiAzMCwgc2hvcnRCcmVha01pbnV0ZXM6IDEwLCBsb25nQnJlYWtNaW51dGVzOiAyMCB9LFxuICB9LFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9tb2Rvcm9QcmVzZXRDYXJkRGF0YShkdXJhdGlvbnM6IFBvbW9kb3JvRHVyYXRpb25zKTogUG9tb2Rvcm9QcmVzZXRDYXJkRGF0YSB7XG4gIGNvbnN0IHByZXNldCA9IGZpbmRQb21vZG9yb1ByZXNldEJ5RHVyYXRpb25zKGR1cmF0aW9ucylcbiAgaWYgKHByZXNldCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogcHJlc2V0LnRpdGxlLFxuICAgICAgdXNhZ2U6IHByZXNldC5pZGVhbEZvci5yZXBsYWNlKC9eSWRlYWwgcGFyYTpcXHMqL2ksICcnKSxcbiAgICAgIHdvcmtMYWJlbDogcHJlc2V0LndvcmtMYWJlbCxcbiAgICAgIHNob3J0QnJlYWtMYWJlbDogcHJlc2V0LnNob3J0QnJlYWtMYWJlbCxcbiAgICAgIGxvbmdCcmVha0xhYmVsOiBwcmVzZXQubG9uZ0JyZWFrTGFiZWwsXG4gICAgICBjeWNsZXNMYWJlbDogcHJlc2V0LmN5Y2xlc0xhYmVsLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGl0bGU6IGBQZXJzb25hbGl6YWRvIC0gJHtkdXJhdGlvbnMud29ya01pbnV0ZXN9LyR7ZHVyYXRpb25zLnNob3J0QnJlYWtNaW51dGVzfWAsXG4gICAgdXNhZ2U6ICdDb25maWd1cmFjacOzbiBtYW51YWwgZ3VhcmRhZGEuJyxcbiAgICB3b3JrTGFiZWw6IGBUcmFiYWpvOiAke2R1cmF0aW9ucy53b3JrTWludXRlc30gbWluYCxcbiAgICBzaG9ydEJyZWFrTGFiZWw6IGBEZXNjYW5zbyBjb3J0bzogJHtkdXJhdGlvbnMuc2hvcnRCcmVha01pbnV0ZXN9IG1pbmAsXG4gICAgbG9uZ0JyZWFrTGFiZWw6IGBEZXNjYW5zbyBsYXJnbzogJHtkdXJhdGlvbnMubG9uZ0JyZWFrTWludXRlc30gbWluYCxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogNCcsXG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZFBvbW9kb3JvUHJlc2V0QnlEdXJhdGlvbnMoZHVyYXRpb25zOiBQb21vZG9yb0R1cmF0aW9ucyk6IFBvbW9kb3JvUHJlc2V0IHwgbnVsbCB7XG4gIGZvciAoY29uc3QgcHJlc2V0IG9mIFBPTU9ET1JPX1BSRVNFVFMpIHtcbiAgICBpZiAoXG4gICAgICBwcmVzZXQuZHVyYXRpb25zLndvcmtNaW51dGVzID09PSBkdXJhdGlvbnMud29ya01pbnV0ZXNcbiAgICAgICYmIHByZXNldC5kdXJhdGlvbnMuc2hvcnRCcmVha01pbnV0ZXMgPT09IGR1cmF0aW9ucy5zaG9ydEJyZWFrTWludXRlc1xuICAgICAgJiYgcHJlc2V0LmR1cmF0aW9ucy5sb25nQnJlYWtNaW51dGVzID09PSBkdXJhdGlvbnMubG9uZ0JyZWFrTWludXRlc1xuICAgICkge1xuICAgICAgcmV0dXJuIHByZXNldFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBjbGFzcyBQb21vZG9yb1ByZXNldE1vZGFsIGV4dGVuZHMgb2JzaWRpYW4uTW9kYWwge1xuICBwcml2YXRlIG9uQWNjZXB0OiAoZHVyYXRpb25zOiBQb21vZG9yb0R1cmF0aW9ucykgPT4gdm9pZFxuICBwcml2YXRlIHNlbGVjdGVkUHJlc2V0SWQ6IHN0cmluZ1xuICBwcml2YXRlIGNhcmRCeUlkID0gbmV3IE1hcDxzdHJpbmcsIEhUTUxEaXZFbGVtZW50PigpXG5cbiAgY29uc3RydWN0b3IoYXBwOiBvYnNpZGlhbi5BcHAsIGN1cnJlbnREdXJhdGlvbnM6IFBvbW9kb3JvRHVyYXRpb25zLCBvbkFjY2VwdDogKGR1cmF0aW9uczogUG9tb2Rvcm9EdXJhdGlvbnMpID0+IHZvaWQpIHtcbiAgICBzdXBlcihhcHApXG4gICAgdGhpcy5vbkFjY2VwdCA9IG9uQWNjZXB0XG4gICAgY29uc3QgbWF0Y2hlZCA9IGZpbmRQb21vZG9yb1ByZXNldEJ5RHVyYXRpb25zKGN1cnJlbnREdXJhdGlvbnMpXG4gICAgdGhpcy5zZWxlY3RlZFByZXNldElkID0gbWF0Y2hlZD8uaWQgPz8gUE9NT0RPUk9fUFJFU0VUU1swXS5pZFxuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIHRoaXMubW9kYWxFbC5hZGRDbGFzcygndGFyZWFzLXBvbW9kb3JvLXByZXNldC1tb2RhbC1zaGVsbCcpXG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXNcbiAgICBjb250ZW50RWwuYWRkQ2xhc3MoJ3RhcmVhcy1tb2RhbCcsICd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LW1vZGFsJylcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnRWxlZ8OtIHVuIHByZXNldCBQb21vZG9ybycgfSlcblxuICAgIGNvbnN0IGNhcmRzID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtY2FyZHMnIH0pXG4gICAgZm9yIChjb25zdCBwcmVzZXQgb2YgUE9NT0RPUk9fUFJFU0VUUykge1xuICAgICAgY29uc3QgY2FyZCA9IGNhcmRzLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtY2FyZCcgfSlcbiAgICAgIGNhcmQuc2V0QXR0cigncm9sZScsICdidXR0b24nKVxuICAgICAgY2FyZC5zZXRBdHRyKCd0YWJpbmRleCcsICcwJylcbiAgICAgIGNhcmQub25jbGljayA9ICgpID0+IHRoaXMuc2VsZWN0UHJlc2V0KHByZXNldC5pZClcbiAgICAgIGNhcmQub25rZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgIT09ICdFbnRlcicgJiYgZXZlbnQua2V5ICE9PSAnICcpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5zZWxlY3RQcmVzZXQocHJlc2V0LmlkKVxuICAgICAgfVxuXG4gICAgICBjYXJkLmNyZWF0ZUVsKCdoMycsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXByZXNldC10aXRsZScsIHRleHQ6IHByZXNldC50aXRsZSB9KVxuICAgICAgY2FyZC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LWRpdmlkZXInIH0pXG4gICAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LXVzYWdlLXRpdGxlJywgdGV4dDogJ1VzbycgfSlcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7XG4gICAgICAgIGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtdXNhZ2UnLFxuICAgICAgICB0ZXh0OiBwcmVzZXQuaWRlYWxGb3IucmVwbGFjZSgvXklkZWFsIHBhcmE6XFxzKi9pLCAnJyksXG4gICAgICB9KVxuICAgICAgY2FyZC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LWRpdmlkZXInIH0pXG4gICAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LWxpbmUnLCB0ZXh0OiBwcmVzZXQud29ya0xhYmVsIH0pXG4gICAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LWxpbmUnLCB0ZXh0OiBwcmVzZXQuc2hvcnRCcmVha0xhYmVsIH0pXG4gICAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LWxpbmUnLCB0ZXh0OiBwcmVzZXQubG9uZ0JyZWFrTGFiZWwgfSlcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtbGluZScsIHRleHQ6IHByZXNldC5jeWNsZXNMYWJlbCB9KVxuXG4gICAgICB0aGlzLmNhcmRCeUlkLnNldChwcmVzZXQuaWQsIGNhcmQpXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoU2VsZWN0aW9uKClcblxuICAgIGNvbnN0IGZvb3RlciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtbW9kYWwtZm9vdGVyJyB9KVxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ2FuY2VsYXInIH0pXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlKClcblxuICAgIGNvbnN0IGFjY2VwdEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQWNlcHRhcicsIGNsczogJ21vZC1jdGEnIH0pXG4gICAgYWNjZXB0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmFjY2VwdCgpXG4gIH1cblxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMubW9kYWxFbC5yZW1vdmVDbGFzcygndGFyZWFzLXBvbW9kb3JvLXByZXNldC1tb2RhbC1zaGVsbCcpXG4gICAgdGhpcy5jYXJkQnlJZC5jbGVhcigpXG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKVxuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RQcmVzZXQocHJlc2V0SWQ6IHN0cmluZykge1xuICAgIHRoaXMuc2VsZWN0ZWRQcmVzZXRJZCA9IHByZXNldElkXG4gICAgdGhpcy5yZWZyZXNoU2VsZWN0aW9uKClcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaFNlbGVjdGlvbigpIHtcbiAgICBmb3IgKGNvbnN0IHByZXNldCBvZiBQT01PRE9ST19QUkVTRVRTKSB7XG4gICAgICBjb25zdCBjYXJkID0gdGhpcy5jYXJkQnlJZC5nZXQocHJlc2V0LmlkKVxuICAgICAgaWYgKCFjYXJkKVxuICAgICAgICBjb250aW51ZVxuXG4gICAgICBjYXJkLnRvZ2dsZUNsYXNzKCdpcy1zZWxlY3RlZCcsIHRoaXMuc2VsZWN0ZWRQcmVzZXRJZCA9PT0gcHJlc2V0LmlkKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWNjZXB0KCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gUE9NT0RPUk9fUFJFU0VUUy5maW5kKHByZXNldCA9PiBwcmVzZXQuaWQgPT09IHRoaXMuc2VsZWN0ZWRQcmVzZXRJZClcbiAgICBpZiAoIXNlbGVjdGVkKVxuICAgICAgcmV0dXJuXG5cbiAgICB0aGlzLm9uQWNjZXB0KHsgLi4uc2VsZWN0ZWQuZHVyYXRpb25zIH0pXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQgdHlwZSB7IFRhc2tJdGVtIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RQb21vZG9yb1Rhc2tNb2RhbCBleHRlbmRzIG9ic2lkaWFuLk1vZGFsIHtcbiAgcHJpdmF0ZSB0YXNrczogVGFza0l0ZW1bXVxuICBwcml2YXRlIHNlbGVjdGVkVGFza1BhdGg6IHN0cmluZyB8IG51bGxcbiAgcHJpdmF0ZSBvblNlbGVjdDogKHRhc2tQYXRoOiBzdHJpbmcpID0+IHZvaWRcblxuICBjb25zdHJ1Y3RvcihcbiAgICBhcHA6IG9ic2lkaWFuLkFwcCxcbiAgICB0YXNrczogVGFza0l0ZW1bXSxcbiAgICBzZWxlY3RlZFRhc2tQYXRoOiBzdHJpbmcgfCBudWxsLFxuICAgIG9uU2VsZWN0OiAodGFza1BhdGg6IHN0cmluZykgPT4gdm9pZCxcbiAgKSB7XG4gICAgc3VwZXIoYXBwKVxuICAgIHRoaXMudGFza3MgPSBbLi4udGFza3NdLnNvcnQoKGEsIGIpID0+IGEudGFyZWEubG9jYWxlQ29tcGFyZShiLnRhcmVhKSlcbiAgICB0aGlzLnNlbGVjdGVkVGFza1BhdGggPSBzZWxlY3RlZFRhc2tQYXRoXG4gICAgdGhpcy5vblNlbGVjdCA9IG9uU2VsZWN0XG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgdGhpcy5tb2RhbEVsLmFkZENsYXNzKCd0YXJlYXMtcG9tb2Rvcm8tdGFzay1tb2RhbC1zaGVsbCcpXG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXNcbiAgICBjb250ZW50RWwuYWRkQ2xhc3MoJ3RhcmVhcy1tb2RhbCcsICd0YXJlYXMtcG9tb2Rvcm8tdGFzay1tb2RhbCcpXG4gICAgY29udGVudEVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ1NlbGVjY2lvbmFyIHRhcmVhIHBhcmEgUG9tb2Rvcm8nIH0pXG5cbiAgICBpZiAodGhpcy50YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgncCcsIHtcbiAgICAgICAgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRhc2stZW1wdHknLFxuICAgICAgICB0ZXh0OiAnTm8gaGF5IHRhcmVhcyBwYWRyZSBlbiBjdXJzbyBkaXNwb25pYmxlcy4nLFxuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBsaXN0ID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby10YXNrLWxpc3QnIH0pXG4gICAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGhpcy50YXNrcykge1xuICAgICAgICBjb25zdCBpdGVtID0gbGlzdC5jcmVhdGVEaXYoe1xuICAgICAgICAgIGNsczogYHRhcmVhcy1wb21vZG9yby10YXNrLWl0ZW0ke3RoaXMuc2VsZWN0ZWRUYXNrUGF0aCA9PT0gdGFzay5maWxlLnBhdGggPyAnIGlzLXNlbGVjdGVkJyA6ICcnfWAsXG4gICAgICAgIH0pXG4gICAgICAgIGl0ZW0uc2V0QXR0cigncm9sZScsICdidXR0b24nKVxuICAgICAgICBpdGVtLnNldEF0dHIoJ3RhYmluZGV4JywgJzAnKVxuXG4gICAgICAgIGl0ZW0uY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby10YXNrLW5hbWUnLCB0ZXh0OiB0YXNrLnRhcmVhIH0pXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBbXG4gICAgICAgICAgdGFzay5lcXVpcG8gPyBgRXF1aXBvOiAke3Rhc2suZXF1aXBvfWAgOiBudWxsLFxuICAgICAgICAgIGBFc3RhZG86ICR7dGFzay5lc3RhZG99YCxcbiAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignIMK3ICcpXG4gICAgICAgIGl0ZW0uY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby10YXNrLW1ldGEnLCB0ZXh0OiBkZXRhaWxzIH0pXG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25TZWxlY3QodGFzay5maWxlLnBhdGgpXG4gICAgICAgICAgdGhpcy5jbG9zZSgpXG4gICAgICAgIH1cblxuICAgICAgICBpdGVtLm9uY2xpY2sgPSBzZWxlY3RcbiAgICAgICAgaXRlbS5vbmtleWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5ICE9PSAnRW50ZXInICYmIGV2ZW50LmtleSAhPT0gJyAnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHNlbGVjdCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLW1vZGFsLWZvb3RlcicgfSlcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NhbmNlbGFyJyB9KVxuICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jbG9zZSgpXG4gIH1cblxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMubW9kYWxFbC5yZW1vdmVDbGFzcygndGFyZWFzLXBvbW9kb3JvLXRhc2stbW9kYWwtc2hlbGwnKVxuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93RHJvcGRvd24oXG4gIGFuY2hvcjogSFRNTEVsZW1lbnQsXG4gIG9wdGlvbnM6IHN0cmluZ1tdLFxuICBjdXJyZW50OiBzdHJpbmcsXG4gIG9uU2VsZWN0OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCxcbikge1xuICBjb25zdCBtZW51ID0gbmV3IG9ic2lkaWFuLk1lbnUoKVxuXG4gIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICBtZW51LmFkZEl0ZW0oKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uc2V0VGl0bGUoYCR7b3B0aW9uID09PSBjdXJyZW50ID8gJ+KckyAnIDogJyAgJ30ke29wdGlvbn1gKVxuICAgICAgaXRlbS5vbkNsaWNrKCgpID0+IG9uU2VsZWN0KG9wdGlvbikpXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHJlY3QgPSBhbmNob3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgbWVudS5zaG93QXRQb3NpdGlvbih7IHg6IHJlY3QubGVmdCwgeTogcmVjdC5ib3R0b20gKyA0IH0pXG59XG4iLCJ0eXBlIEdlbmVyaWNGbiA9ICguLi5hcmdzOiB1bmtub3duW10pID0+IHZvaWRcblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlPFQgZXh0ZW5kcyBHZW5lcmljRm4+KGZuOiBULCBtczogbnVtYmVyKSB7XG4gIGxldCB0aW1lb3V0OiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IHVuZGVmaW5lZFxuXG4gIHJldHVybiAoLi4uYXJnczogUGFyYW1ldGVyczxUPikgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IGZuKC4uLmFyZ3MpLCBtcylcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7IEVTVEFET1MsIFBSSU9SSURBREVTLCBWSUVXX1RZUEUgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBtb3ZlVGFza1RvQWN0aXZlRm9sZGVyLCBtb3ZlVGFza1RvQ29tcGxldGVkRm9sZGVyIH0gZnJvbSAnLi4vZW5naW5lcy9jb21wbGV0aW9uRW5naW5lJ1xuaW1wb3J0IHsgdXBkYXRlRnJvbnRtYXR0ZXIgfSBmcm9tICcuLi9lbmdpbmVzL2Zyb250bWF0dGVyRW5naW5lJ1xuaW1wb3J0IHsgcGVyc2lzdFRhc2tPcmRlciwgcmVvcmRlckxpc3QgfSBmcm9tICcuLi9lbmdpbmVzL29yZGVyRW5naW5lJ1xuaW1wb3J0IHtcbiAgYWR2YW5jZVBvbW9kb3JvU3RhdGUsXG4gIGFwcGx5UG9tb2Rvcm9EdXJhdGlvbnMsXG4gIGVudGVyUG9tb2Rvcm9EZXZpYXRpb24sXG4gIGV4aXRQb21vZG9yb0RldmlhdGlvbixcbiAgZm9ybWF0UG9tb2Rvcm9Db3VudGRvd24sXG4gIGdldERldmlhdGlvbkVsYXBzZWRTZWNvbmRzLFxuICBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyxcbiAgZ2V0UG9tb2Rvcm9QaGFzZUxhYmVsLFxuICBnZXRQb21vZG9yb1JlbWFpbmluZ1NlY29uZHMsXG4gIG5vcm1hbGl6ZVBvbW9kb3JvRHVyYXRpb25zLFxuICBwYXVzZVBvbW9kb3JvLFxuICByZXNldFBvbW9kb3JvLFxuICByZXN1bWVQb21vZG9ybyxcbiAgc3RhcnRQb21vZG9ybyxcbn0gZnJvbSAnLi4vZW5naW5lcy9wb21vZG9yb0VuZ2luZSdcbmltcG9ydCB7IGFwcGVuZFBvbW9kb3JvTG9nRW50cnksIGdldEVudHJpZXNCeURhdGUsIHJlYWRQb21vZG9yb0xvZ0VudHJpZXMsIHRvTG9jYWxEYXRlVGV4dCB9IGZyb20gJy4uL2VuZ2luZXMvcG9tb2Rvcm9Mb2dFbmdpbmUnXG5pbXBvcnQgeyByZWJhbGFuY2VHcm91cEVuZERhdGVzIH0gZnJvbSAnLi4vZW5naW5lcy9zY2hlZHVsZUVuZ2luZSdcbmltcG9ydCB7IGV4dHJhY3RUYXNrQm9keVByZXZpZXcsIGdldFRhc2tzLCBncm91cFRvcExldmVsVGFza3MsIGlzVGFza0luQ29tcGxldGVkRm9sZGVyLCBwYXJzZVRhc2tEYXRlIH0gZnJvbSAnLi4vZW5naW5lcy90YXNrRW5naW5lJ1xuaW1wb3J0IHsgTmV3R3JvdXBNb2RhbCB9IGZyb20gJy4uL21vZGFscy9OZXdHcm91cE1vZGFsJ1xuaW1wb3J0IHsgTmV3VGFza01vZGFsIH0gZnJvbSAnLi4vbW9kYWxzL05ld1Rhc2tNb2RhbCdcbmltcG9ydCB7IEVkaXRTZWN0aW9uTW9kYWwgfSBmcm9tICcuLi9tb2RhbHMvRWRpdFNlY3Rpb25Nb2RhbCdcbmltcG9ydCB7IEVkaXRUYXNrRmlsZU1vZGFsIH0gZnJvbSAnLi4vbW9kYWxzL0VkaXRUYXNrRmlsZU1vZGFsJ1xuaW1wb3J0IHsgQWRkVGFza0NvbW1lbnRNb2RhbCB9IGZyb20gJy4uL21vZGFscy9BZGRUYXNrQ29tbWVudE1vZGFsJ1xuaW1wb3J0IHsgZ2V0UG9tb2Rvcm9QcmVzZXRDYXJkRGF0YSwgUG9tb2Rvcm9QcmVzZXRNb2RhbCB9IGZyb20gJy4uL21vZGFscy9Qb21vZG9yb1ByZXNldE1vZGFsJ1xuaW1wb3J0IHsgU2VsZWN0UG9tb2Rvcm9UYXNrTW9kYWwgfSBmcm9tICcuLi9tb2RhbHMvU2VsZWN0UG9tb2Rvcm9UYXNrTW9kYWwnXG5pbXBvcnQgdHlwZSB7IFRhcmVhc1BsdWdpbiB9IGZyb20gJy4uL3BsdWdpbi9UYXJlYXNQbHVnaW4nXG5pbXBvcnQgdHlwZSB7IEVxdWlwbywgUG9tb2Rvcm9EdXJhdGlvbnMsIFBvbW9kb3JvUGhhc2UsIFBvbW9kb3JvU3RhdGUsIFRhc2tGcm9udG1hdHRlciwgVGFza0l0ZW0gfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IHNob3dEcm9wZG93biB9IGZyb20gJy4uL3VpL2Ryb3Bkb3duJ1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICcuLi91dGlscy9kZWJvdW5jZSdcblxuZXhwb3J0IGNsYXNzIFRhcmVhc1ZpZXcgZXh0ZW5kcyBvYnNpZGlhbi5JdGVtVmlldyB7XG4gIHByaXZhdGUgcGx1Z2luOiBUYXJlYXNQbHVnaW5cbiAgZXhwYW5kZWRHcm91cHM6IFNldDxzdHJpbmc+XG4gIGV4cGFuZGVkVGFza3M6IFNldDxzdHJpbmc+XG4gIGV4cGFuZGVkQ2FyZFN1YnRhc2tzOiBTZXQ8c3RyaW5nPlxuXG4gIHByaXZhdGUgZGVib3VuY2VkUmVuZGVyOiAoKSA9PiB2b2lkXG4gIHByaXZhdGUgZHJhZ0dyb3VwOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGRyYWdQYXRoOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGRyYWdEZXB0aDogbnVtYmVyIHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBkcmFnUGFyZW50OiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGFjdGl2ZVRhYjogJ2FjdGl2ZScgfCAnY29tcGxldGVkJyB8ICdwb21vZG9ybycgPSAnYWN0aXZlJ1xuICBwcml2YXRlIHBvbW9kb3JvUGFuZWxFbDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIHBvbW9kb3JvVGltZUVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcG9tb2Rvcm9Qcm9ncmVzc0VsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcG9tb2Rvcm9QaGFzZUVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcG9tb2Rvcm9DeWNsZUVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcG9tb2Rvcm9TdGF0ZUVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcG9tb2Rvcm9BdWRpb0NvbnRleHQ6IEF1ZGlvQ29udGV4dCB8IG51bGwgPSBudWxsXG5cbiAgY29uc3RydWN0b3IobGVhZjogb2JzaWRpYW4uV29ya3NwYWNlTGVhZiwgcGx1Z2luOiBUYXJlYXNQbHVnaW4pIHtcbiAgICBzdXBlcihsZWFmKVxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luXG4gICAgdGhpcy5leHBhbmRlZEdyb3VwcyA9IG5ldyBTZXQocGx1Z2luLmVxdWlwb3MubWFwKGVxdWlwbyA9PiBlcXVpcG8ubmFtZSkpXG4gICAgdGhpcy5leHBhbmRlZFRhc2tzID0gbmV3IFNldCgpXG4gICAgdGhpcy5leHBhbmRlZENhcmRTdWJ0YXNrcyA9IG5ldyBTZXQoKVxuICAgIHRoaXMuZGVib3VuY2VkUmVuZGVyID0gZGVib3VuY2UoKCkgPT4gdGhpcy5yZW5kZXIoKSwgMjUwKVxuICB9XG5cbiAgZ2V0Vmlld1R5cGUoKSB7XG4gICAgcmV0dXJuIFZJRVdfVFlQRVxuICB9XG5cbiAgZ2V0RGlzcGxheVRleHQoKSB7XG4gICAgcmV0dXJuICdUYXJlYXMnXG4gIH1cblxuICBnZXRJY29uKCkge1xuICAgIHJldHVybiAnbGlzdC1jaGVja3MnXG4gIH1cblxuICBhc3luYyBvbk9wZW4oKSB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuZ2V0Um9vdEVsKClcbiAgICByb290LmFkZENsYXNzKCd0YXJlYXMtcm9vdCcpXG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKVxuXG4gICAgdGhpcy5yZWdpc3RlckludGVydmFsKHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB2b2lkIHRoaXMuaGFuZGxlUG9tb2Rvcm9UaWNrKClcbiAgICB9LCAxMDAwKSlcblxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLm9uKCdyZXNvbHZlZCcsIHRoaXMuZGVib3VuY2VkUmVuZGVyKSlcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5hcHAudmF1bHQub24oJ2NyZWF0ZScsIHRoaXMuZGVib3VuY2VkUmVuZGVyKSlcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5hcHAudmF1bHQub24oJ2RlbGV0ZScsIHRoaXMuZGVib3VuY2VkUmVuZGVyKSlcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5hcHAudmF1bHQub24oJ3JlbmFtZScsIHRoaXMuZGVib3VuY2VkUmVuZGVyKSlcbiAgfVxuXG4gIGFzeW5jIG9uQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMucG9tb2Rvcm9BdWRpb0NvbnRleHQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMucG9tb2Rvcm9BdWRpb0NvbnRleHQuY2xvc2UoKVxuICAgICAgfVxuICAgICAgY2F0Y2gge1xuICAgICAgICAvLyBJZ25vcmUgY2xvc2UgZXJyb3JzIHdoZW4gY29udGV4dCBpcyBhbHJlYWR5IGNsb3NlZC5cbiAgICAgIH1cbiAgICAgIHRoaXMucG9tb2Rvcm9BdWRpb0NvbnRleHQgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmdldFJvb3RFbCgpXG4gICAgcm9vdC5lbXB0eSgpXG4gICAgdGhpcy5yZXNldFBvbW9kb3JvRG9tUmVmcygpXG5cbiAgICB0aGlzLnJlbmRlckhlYWRlcihyb290KVxuICAgIHRoaXMucmVuZGVyVGFicyhyb290KVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlVGFiID09PSAncG9tb2Rvcm8nKSB7XG4gICAgICBhd2FpdCB0aGlzLnJlbmRlclBvbW9kb3JvUGFuZWwocm9vdClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFsbFRhc2tzID0gZ2V0VGFza3ModGhpcy5hcHApXG4gICAgY29uc3QgdGFiVGFza3MgPSB0aGlzLmFjdGl2ZVRhYiA9PT0gJ2NvbXBsZXRlZCdcbiAgICAgID8gYWxsVGFza3MuZmlsdGVyKHRhc2sgPT4gaXNUYXNrSW5Db21wbGV0ZWRGb2xkZXIodGFzay5maWxlLnBhdGgpKVxuICAgICAgOiBhbGxUYXNrcy5maWx0ZXIodGFzayA9PiAhaXNUYXNrSW5Db21wbGV0ZWRGb2xkZXIodGFzay5maWxlLnBhdGgpKVxuICAgIGNvbnN0IGdyb3VwcyA9IGdyb3VwVG9wTGV2ZWxUYXNrcyh0YWJUYXNrcywgdGhpcy5wbHVnaW4uZXF1aXBvcylcblxuICAgIGlmICh0aGlzLmFjdGl2ZVRhYiA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgIHRoaXMucmVuZGVyQ29tcGxldGVkVGFibGUocm9vdCwgdGFiVGFza3MpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0YXNrUHJldmlld01hcCA9IGF3YWl0IHRoaXMuYnVpbGRUYXNrUHJldmlld01hcCh0YWJUYXNrcylcbiAgICBjb25zdCBib2FyZCA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWJvYXJkJyB9KVxuXG4gICAgZm9yIChjb25zdCB0ZWFtIG9mIHRoaXMucGx1Z2luLmVxdWlwb3MpXG4gICAgICB0aGlzLnJlbmRlckdyb3VwKGJvYXJkLCB0ZWFtLCBncm91cHNbdGVhbS5uYW1lXSB8fCBbXSwgdGFiVGFza3MsIHRhc2tQcmV2aWV3TWFwKVxuXG4gICAgaWYgKGdyb3Vwc1snU2luIGVxdWlwbyddPy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbmRlckdyb3VwKGJvYXJkLCB7IG5hbWU6ICdTaW4gZXF1aXBvJywgY29sb3I6ICd2YXIoLS10ZXh0LWZhaW50KScgfSwgZ3JvdXBzWydTaW4gZXF1aXBvJ10sIHRhYlRhc2tzLCB0YXNrUHJldmlld01hcClcblxuICAgIGlmICh0aGlzLmFjdGl2ZVRhYiA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIGNvbnN0IGFkZEdyb3VwID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtbmV3LWdyb3VwJyB9KVxuICAgICAgY29uc3QgYWRkR3JvdXBMaW5rID0gYWRkR3JvdXAuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICcrIE51ZXZvIGdydXBvJywgY2xzOiAndGFyZWFzLWFkZC1saW5rJyB9KVxuICAgICAgYWRkR3JvdXBMaW5rLm9uY2xpY2sgPSAoKSA9PiBuZXcgTmV3R3JvdXBNb2RhbCh0aGlzLmFwcCwgdGhpcy5wbHVnaW4sIHRoaXMpLm9wZW4oKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQ29tcGxldGVkVGFibGUocm9vdDogSFRNTEVsZW1lbnQsIHRhc2tzOiBUYXNrSXRlbVtdKSB7XG4gICAgY29uc3Qgd3JhcCA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXRhYmxlLXdyYXAnIH0pXG4gICAgY29uc3QgdGFibGUgPSB3cmFwLmNyZWF0ZUVsKCd0YWJsZScsIHsgY2xzOiAndGFyZWFzLXRhYmxlJyB9KVxuICAgIGNvbnN0IGNvbHVtbnMgPSBbJycsICcnLCAnVGFyZWEnLCAnRXN0YWRvJywgJ0VxdWlwbycsICdQcmlvcmlkYWQnLCAnRGVkaWNhZG8nLCAnRXN0aW1hY2nDs24nLCAnSW5pY2lvJywgJ0ZpbicsICclJywgJ0FjY2lvbmVzJ11cblxuICAgIGNvbnN0IHRhYmxlSGVhZCA9IHRhYmxlLmNyZWF0ZUVsKCd0aGVhZCcpXG4gICAgY29uc3QgaGVhZFJvdyA9IHRhYmxlSGVhZC5jcmVhdGVFbCgndHInKVxuICAgIGZvciAoY29uc3QgY29sdW1uIG9mIGNvbHVtbnMpIHtcbiAgICAgIGNvbnN0IGhlYWRlckNlbGwgPSBoZWFkUm93LmNyZWF0ZUVsKCd0aCcsIHsgdGV4dDogY29sdW1uIH0pXG4gICAgICBpZiAoWydEZWRpY2FkbycsICdFc3RpbWFjacOzbicsICclJ10uaW5jbHVkZXMoY29sdW1uKSlcbiAgICAgICAgaGVhZGVyQ2VsbC5hZGRDbGFzcygndGFyZWFzLXRoLW51bScpXG4gICAgfVxuXG4gICAgY29uc3QgdGFibGVCb2R5ID0gdGFibGUuY3JlYXRlRWwoJ3Rib2R5JylcbiAgICBjb25zdCB0b3BMZXZlbFRhc2tzID0gdGFza3NcbiAgICAgIC5maWx0ZXIodGFzayA9PiAhdGFzay5wYXJlbnQpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpXG5cbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdG9wTGV2ZWxUYXNrcylcbiAgICAgIHRoaXMucmVuZGVyUm93KHRhYmxlQm9keSwgdGFzaywgdGFza3MsIDApXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclRhYnMocm9vdDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCB0YWJzID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtdGFicycgfSlcblxuICAgIGNvbnN0IGFjdGl2ZUJ0biA9IHRhYnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIHRleHQ6ICdBY3RpdmFzJyxcbiAgICAgIGNsczogYHRhcmVhcy10YWItYnRuJHt0aGlzLmFjdGl2ZVRhYiA9PT0gJ2FjdGl2ZScgPyAnIGlzLWFjdGl2ZScgOiAnJ31gLFxuICAgIH0pXG4gICAgYWN0aXZlQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICdhY3RpdmUnXG4gICAgICB0aGlzLnJlbmRlcigpXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGVkQnRuID0gdGFicy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgdGV4dDogJ0NvbXBsZXRhZGFzJyxcbiAgICAgIGNsczogYHRhcmVhcy10YWItYnRuJHt0aGlzLmFjdGl2ZVRhYiA9PT0gJ2NvbXBsZXRlZCcgPyAnIGlzLWFjdGl2ZScgOiAnJ31gLFxuICAgIH0pXG4gICAgY29tcGxldGVkQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICdjb21wbGV0ZWQnXG4gICAgICB0aGlzLnJlbmRlcigpXG4gICAgfVxuXG4gICAgY29uc3QgcG9tb2Rvcm9CdG4gPSB0YWJzLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICB0ZXh0OiAnUG9tb2Rvcm8nLFxuICAgICAgY2xzOiBgdGFyZWFzLXRhYi1idG4ke3RoaXMuYWN0aXZlVGFiID09PSAncG9tb2Rvcm8nID8gJyBpcy1hY3RpdmUnIDogJyd9YCxcbiAgICB9KVxuICAgIHBvbW9kb3JvQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICdwb21vZG9ybydcbiAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlbmRlclBvbW9kb3JvUGFuZWwocm9vdDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBydW50aW1lU3RhdGUgPSB0aGlzLmdldFBvbW9kb3JvUnVudGltZVN0YXRlKHRydWUpXG4gICAgY29uc3QgcGFuZWwgPSByb290LmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wYW5lbCcgfSlcbiAgICB0aGlzLnBvbW9kb3JvUGFuZWxFbCA9IHBhbmVsXG5cbiAgICBjb25zdCB0b3AgPSBwYW5lbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tdG9wJyB9KVxuICAgIHRoaXMucG9tb2Rvcm9QaGFzZUVsID0gdG9wLmNyZWF0ZUVsKCdoMicsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXBoYXNlJyB9KVxuICAgIHRoaXMucG9tb2Rvcm9DeWNsZUVsID0gdG9wLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY3ljbGVzJyB9KVxuXG4gICAgY29uc3QgdGltZXJXcmFwID0gcGFuZWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRpbWVyLXdyYXAnIH0pXG4gICAgdGhpcy5wb21vZG9yb1Byb2dyZXNzRWwgPSB0aW1lcldyYXAuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXByb2dyZXNzJyB9KVxuICAgIGNvbnN0IHRpbWVySW5uZXIgPSB0aGlzLnBvbW9kb3JvUHJvZ3Jlc3NFbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcHJvZ3Jlc3MtaW5uZXInIH0pXG4gICAgdGhpcy5wb21vZG9yb1RpbWVFbCA9IHRpbWVySW5uZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRpbWUnIH0pXG5cbiAgICBjb25zdCBjb250cm9scyA9IHBhbmVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb250cm9scycgfSlcbiAgICB0aGlzLnJlbmRlclBvbW9kb3JvQ29udHJvbHMoY29udHJvbHMsIHJ1bnRpbWVTdGF0ZSlcbiAgICB0aGlzLnBvbW9kb3JvU3RhdGVFbCA9IHBhbmVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1zdGF0ZS1iYXInIH0pXG5cbiAgICBjb25zdCBjb25maWcgPSBwYW5lbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnJyB9KVxuICAgIGNvbmZpZy5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6ICdEdXJhY2lvbmVzIChtaW4pJyB9KVxuICAgIHRoaXMucmVuZGVyUG9tb2Rvcm9EdXJhdGlvbkNhcmQoY29uZmlnLCBydW50aW1lU3RhdGUuZHVyYXRpb25zKVxuICAgIGF3YWl0IHRoaXMucmVuZGVyUG9tb2Rvcm9UYXNrQ2FyZChwYW5lbClcbiAgICBhd2FpdCB0aGlzLnJlbmRlclBvbW9kb3JvRGFpbHlMb2cocGFuZWwpXG5cbiAgICB0aGlzLnVwZGF0ZVBvbW9kb3JvRG9tKHJ1bnRpbWVTdGF0ZSwgRGF0ZS5ub3coKSlcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUG9tb2Rvcm9EdXJhdGlvbkNhcmQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgZHVyYXRpb25zOiBQb21vZG9yb0R1cmF0aW9ucykge1xuICAgIGNvbnN0IGNhcmREYXRhID0gZ2V0UG9tb2Rvcm9QcmVzZXRDYXJkRGF0YShkdXJhdGlvbnMpXG4gICAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnLWNhcmQnIH0pXG4gICAgY2FyZC5zZXRBdHRyKCdyb2xlJywgJ2J1dHRvbicpXG4gICAgY2FyZC5zZXRBdHRyKCd0YWJpbmRleCcsICcwJylcbiAgICBjYXJkLm9uZGJsY2xpY2sgPSAoKSA9PiB0aGlzLm9wZW5Qb21vZG9yb1ByZXNldE1vZGFsKGR1cmF0aW9ucylcbiAgICBjYXJkLm9ua2V5ZG93biA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSAhPT0gJ0VudGVyJyAmJiBldmVudC5rZXkgIT09ICcgJylcbiAgICAgICAgcmV0dXJuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLm9wZW5Qb21vZG9yb1ByZXNldE1vZGFsKGR1cmF0aW9ucylcbiAgICB9XG5cbiAgICBjYXJkLmNyZWF0ZUVsKCdoNCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZy1jYXJkLXRpdGxlJywgdGV4dDogY2FyZERhdGEudGl0bGUgfSlcbiAgICBjYXJkLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb25maWctY2FyZC1kaXZpZGVyJyB9KVxuICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb25maWctY2FyZC1sYWJlbCcsIHRleHQ6ICdVc28nIH0pXG4gICAgY2FyZC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZy1jYXJkLXRleHQnLCB0ZXh0OiBjYXJkRGF0YS51c2FnZSB9KVxuICAgIGNhcmQuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZy1jYXJkLWRpdmlkZXInIH0pXG4gICAgY2FyZC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZy1jYXJkLXRleHQnLCB0ZXh0OiBjYXJkRGF0YS53b3JrTGFiZWwgfSlcbiAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnLWNhcmQtdGV4dCcsIHRleHQ6IGNhcmREYXRhLnNob3J0QnJlYWtMYWJlbCB9KVxuICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb25maWctY2FyZC10ZXh0JywgdGV4dDogY2FyZERhdGEubG9uZ0JyZWFrTGFiZWwgfSlcbiAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnLWNhcmQtdGV4dCcsIHRleHQ6IGNhcmREYXRhLmN5Y2xlc0xhYmVsIH0pXG4gICAgY2FyZC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZy1jYXJkLWhpbnQnLCB0ZXh0OiAnRG9ibGUgY2xpY2sgcGFyYSBjYW1iaWFyIGR1cmFjacOzbicgfSlcbiAgfVxuXG4gIHByaXZhdGUgb3BlblBvbW9kb3JvUHJlc2V0TW9kYWwoZHVyYXRpb25zOiBQb21vZG9yb0R1cmF0aW9ucykge1xuICAgIG5ldyBQb21vZG9yb1ByZXNldE1vZGFsKHRoaXMuYXBwLCBkdXJhdGlvbnMsIChuZXh0RHVyYXRpb25zKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVBvbW9kb3JvRHVyYXRpb25zKG5leHREdXJhdGlvbnMpXG4gICAgICB0aGlzLnJlbmRlcigpXG4gICAgfSkub3BlbigpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlbmRlclBvbW9kb3JvVGFza0NhcmQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRhc2stc2VjdGlvbicgfSlcbiAgICBzZWN0aW9uLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ1RhcmVhIHZpbmN1bGFkYScgfSlcbiAgICBjb25zdCBpc1J1bm5pbmcgPSB0aGlzLnBsdWdpbi5wb21vZG9yby5ydW5TdGF0ZSA9PT0gJ3J1bm5pbmcnXG5cbiAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSB0aGlzLmdldFNlbGVjdGVkUG9tb2Rvcm9UYXNrKClcbiAgICBpZiAoc2VsZWN0ZWRUYXNrKSB7XG4gICAgICBjb25zdCBhbGxUYXNrcyA9IGdldFRhc2tzKHRoaXMuYXBwKVxuICAgICAgY29uc3QgdGFza1ByZXZpZXdNYXAgPSBhd2FpdCB0aGlzLmJ1aWxkVGFza1ByZXZpZXdNYXAoW3NlbGVjdGVkVGFza10pXG4gICAgICBjb25zdCBsaXN0ID0gc2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtY2FyZC1saXN0IHRhcmVhcy1wb21vZG9yby10YXNrLWNhcmQtbGlzdCcgfSlcbiAgICAgIHRoaXMucmVuZGVyVGFza0NhcmQobGlzdCwgc2VsZWN0ZWRUYXNrLCBhbGxUYXNrcywgdGFza1ByZXZpZXdNYXAuZ2V0KHNlbGVjdGVkVGFzay5maWxlLnBhdGgpIHx8ICcnKVxuICAgICAgc2VjdGlvbi5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRhc2stY2FyZC1oaW50JywgdGV4dDogJ1Vzw6EgZWwgYm90w7NuIHBhcmEgY2FtYmlhciBsYSB0YXJlYSB2aW5jdWxhZGEnIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3QgZW1wdHlDYXJkID0gc2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tdGFzay1jYXJkJyB9KVxuICAgICAgZW1wdHlDYXJkLmNyZWF0ZUVsKCdwJywge1xuICAgICAgICBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tdGFzay1jYXJkLWVtcHR5JyxcbiAgICAgICAgdGV4dDogJ05vIGhheSB0YXJlYSBzZWxlY2Npb25hZGEnLFxuICAgICAgfSlcbiAgICAgIGVtcHR5Q2FyZC5jcmVhdGVFbCgncCcsIHtcbiAgICAgICAgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRhc2stY2FyZC1oaW50JyxcbiAgICAgICAgdGV4dDogJ1NlbGVjY2lvbsOhIHVuYSB0YXJlYSBjb24gZWwgYm90w7NuJyxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlQnV0dG9uID0gc2VjdGlvbi5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgdGV4dDogJ0NhbWJpYXIgdGFyZWEgdmluY3VsYWRhJyxcbiAgICAgIGNsczogJ3RhcmVhcy1wb21vZG9yby1idG4gdGFyZWFzLXBvbW9kb3JvLXRhc2stY2hhbmdlLWJ0bicsXG4gICAgfSlcbiAgICBjaGFuZ2VCdXR0b24uZGlzYWJsZWQgPSBpc1J1bm5pbmdcbiAgICBjaGFuZ2VCdXR0b24uc2V0QXR0cignYXJpYS1sYWJlbCcsICdDYW1iaWFyIHRhcmVhIHZpbmN1bGFkYScpXG4gICAgY2hhbmdlQnV0dG9uLnNldEF0dHIoJ3RpdGxlJywgaXNSdW5uaW5nXG4gICAgICA/ICdObyBzZSBwdWVkZSBjYW1iaWFyIGxhIHRhcmVhIG1pZW50cmFzIGVsIGNvbnRhZG9yIGVzdMOhIGNvcnJpZW5kbydcbiAgICAgIDogJ0NhbWJpYXIgdGFyZWEgdmluY3VsYWRhJylcbiAgICBjaGFuZ2VCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMub3BlblBvbW9kb3JvVGFza1NlbGVjdG9yKClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VsZWN0ZWRQb21vZG9yb1Rhc2soKTogVGFza0l0ZW0gfCBudWxsIHtcbiAgICBjb25zdCBzZWxlY3RlZFRhc2tQYXRoID0gdGhpcy5wbHVnaW4ucG9tb2Rvcm8uc2VsZWN0ZWRUYXNrUGF0aFxuICAgIGlmICghc2VsZWN0ZWRUYXNrUGF0aClcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICBjb25zdCB0YXNrID0gZ2V0VGFza3ModGhpcy5hcHApLmZpbmQoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gc2VsZWN0ZWRUYXNrUGF0aClcbiAgICBpZiAodGFzaylcbiAgICAgIHJldHVybiB0YXNrXG5cbiAgICB0aGlzLnNldFBvbW9kb3JvU2VsZWN0ZWRUYXNrUGF0aChudWxsKVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBwcml2YXRlIG9wZW5Qb21vZG9yb1Rhc2tTZWxlY3RvcigpIHtcbiAgICBpZiAodGhpcy5wbHVnaW4ucG9tb2Rvcm8ucnVuU3RhdGUgPT09ICdydW5uaW5nJykge1xuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZSgnTm8gc2UgcHVlZGUgY2FtYmlhciBsYSB0YXJlYSBtaWVudHJhcyBlbCBjb250YWRvciBlc3TDoSBjb3JyaWVuZG8uJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFsbFRhc2tzID0gZ2V0VGFza3ModGhpcy5hcHApXG4gICAgY29uc3Qgc2VsZWN0YWJsZVRhc2tzID0gYWxsVGFza3NcbiAgICAgIC5maWx0ZXIodGFzayA9PiAhdGFzay5wYXJlbnQpXG4gICAgICAuZmlsdGVyKHRhc2sgPT4gdGFzay5lc3RhZG8gPT09ICdFbiBwcm9ncmVzbycpXG4gICAgICAuZmlsdGVyKHRhc2sgPT4gIWlzVGFza0luQ29tcGxldGVkRm9sZGVyKHRhc2suZmlsZS5wYXRoKSlcblxuICAgIG5ldyBTZWxlY3RQb21vZG9yb1Rhc2tNb2RhbChcbiAgICAgIHRoaXMuYXBwLFxuICAgICAgc2VsZWN0YWJsZVRhc2tzLFxuICAgICAgdGhpcy5wbHVnaW4ucG9tb2Rvcm8uc2VsZWN0ZWRUYXNrUGF0aCxcbiAgICAgICh0YXNrUGF0aCkgPT4ge1xuICAgICAgICB0aGlzLnNldFBvbW9kb3JvU2VsZWN0ZWRUYXNrUGF0aCh0YXNrUGF0aClcbiAgICAgICAgdGhpcy5yZW5kZXIoKVxuICAgICAgfSxcbiAgICApLm9wZW4oKVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRQb21vZG9yb1NlbGVjdGVkVGFza1BhdGgodGFza1BhdGg6IHN0cmluZyB8IG51bGwpIHtcbiAgICB0aGlzLnBsdWdpbi5zZXRQb21vZG9yb1N0YXRlKHtcbiAgICAgIC4uLnRoaXMucGx1Z2luLnBvbW9kb3JvLFxuICAgICAgZHVyYXRpb25zOiB7IC4uLnRoaXMucGx1Z2luLnBvbW9kb3JvLmR1cmF0aW9ucyB9LFxuICAgICAgc2VsZWN0ZWRUYXNrUGF0aDogdGFza1BhdGgsXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUG9tb2Rvcm9Db250cm9scyhjb250YWluZXI6IEhUTUxFbGVtZW50LCBzdGF0ZTogUG9tb2Rvcm9TdGF0ZSkge1xuICAgIGNvbnN0IGljb25Db250cm9scyA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29udHJvbHMtaWNvbnMnIH0pXG5cbiAgICBpZiAoc3RhdGUucnVuU3RhdGUgPT09ICdydW5uaW5nJykge1xuICAgICAgY29uc3QgcGF1c2VCdXR0b24gPSBpY29uQ29udHJvbHMuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ+KPuCcsIGNsczogJ3RhcmVhcy1wb21vZG9yby1idG4gdGFyZWFzLXBvbW9kb3JvLWJ0bi1pY29uJyB9KVxuICAgICAgcGF1c2VCdXR0b24uc2V0QXR0cignYXJpYS1sYWJlbCcsICdQYXVzYXInKVxuICAgICAgcGF1c2VCdXR0b24uc2V0QXR0cigndGl0bGUnLCAnUGF1c2FyJylcbiAgICAgIHBhdXNlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmhhbmRsZVBvbW9kb3JvUGF1c2UoKVxuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5ydW5TdGF0ZSA9PT0gJ3BhdXNlZCcpIHtcbiAgICAgIGNvbnN0IHJlc3VtZUJ1dHRvbiA9IGljb25Db250cm9scy5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAn4pa2JywgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWJ0biB0YXJlYXMtcG9tb2Rvcm8tYnRuLWljb24gbW9kLWN0YScgfSlcbiAgICAgIHJlc3VtZUJ1dHRvbi5zZXRBdHRyKCdhcmlhLWxhYmVsJywgJ1JlYW51ZGFyJylcbiAgICAgIHJlc3VtZUJ1dHRvbi5zZXRBdHRyKCd0aXRsZScsICdSZWFudWRhcicpXG4gICAgICByZXN1bWVCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuaGFuZGxlUG9tb2Rvcm9SZXN1bWUoKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gaWNvbkNvbnRyb2xzLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICfilrYnLCBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tYnRuIHRhcmVhcy1wb21vZG9yby1idG4taWNvbiBtb2QtY3RhJyB9KVxuICAgICAgc3RhcnRCdXR0b24uc2V0QXR0cignYXJpYS1sYWJlbCcsICdJbmljaWFyJylcbiAgICAgIHN0YXJ0QnV0dG9uLnNldEF0dHIoJ3RpdGxlJywgJ0luaWNpYXInKVxuICAgICAgc3RhcnRCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuaGFuZGxlUG9tb2Rvcm9TdGFydCgpXG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRCdXR0b24gPSBpY29uQ29udHJvbHMuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ+KGuicsIGNsczogJ3RhcmVhcy1wb21vZG9yby1idG4gdGFyZWFzLXBvbW9kb3JvLWJ0bi1pY29uJyB9KVxuICAgIHJlc2V0QnV0dG9uLnNldEF0dHIoJ2FyaWEtbGFiZWwnLCAnUmVpbmljaWFyJylcbiAgICByZXNldEJ1dHRvbi5zZXRBdHRyKCd0aXRsZScsICdSZWluaWNpYXInKVxuICAgIHJlc2V0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmhhbmRsZVBvbW9kb3JvUmVzZXQoKVxuXG4gICAgY29uc3QgZGV2aWF0aW9uQnV0dG9uID0gaWNvbkNvbnRyb2xzLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICB0ZXh0OiBzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSA/ICfwn5O1JyA6ICfwn5OeJyxcbiAgICAgIGNsczogYHRhcmVhcy1wb21vZG9yby1idG4gdGFyZWFzLXBvbW9kb3JvLWJ0bi1pY29uJHtzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSA/ICcgaXMtZGV2aWF0aW9uLWFjdGl2ZScgOiAnJ31gLFxuICAgIH0pXG4gICAgZGV2aWF0aW9uQnV0dG9uLnNldEF0dHIoJ2FyaWEtbGFiZWwnLCAnRGVzdsOtbycpXG4gICAgZGV2aWF0aW9uQnV0dG9uLnNldEF0dHIoJ3RpdGxlJywgc3RhdGUuaXNEZXZpYXRpb25BY3RpdmVcbiAgICAgID8gJ0ZpbmFsaXphciBkZXN2w61vJ1xuICAgICAgOiAnSW5pY2lhciBkZXN2w61vIChsbGFtYWRhcy9yZXVuaW9uZXMpJylcbiAgICBjb25zdCBjYW5Ub2dnbGVEZXZpYXRpb24gPSBzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSB8fCBzdGF0ZS5ydW5TdGF0ZSA9PT0gJ3J1bm5pbmcnXG4gICAgZGV2aWF0aW9uQnV0dG9uLmRpc2FibGVkID0gIWNhblRvZ2dsZURldmlhdGlvblxuICAgIGRldmlhdGlvbkJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5oYW5kbGVQb21vZG9yb0RldmlhdGlvblRvZ2dsZSgpXG5cbiAgICBpZiAoc3RhdGUucGhhc2UgIT09ICd3b3JrJykge1xuICAgICAgY29uc3QgZXh0cmFDb250cm9scyA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29udHJvbHMtZXh0cmEnIH0pXG4gICAgICBjb25zdCB3b3JrQnV0dG9uID0gZXh0cmFDb250cm9scy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgICB0ZXh0OiAnSXIgYSB0cmFiYWpvJyxcbiAgICAgICAgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWJ0bicsXG4gICAgICB9KVxuICAgICAgd29ya0J1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5oYW5kbGVQb21vZG9yb1N3aXRjaFRvV29yaygpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb21vZG9yb1N0YXJ0KCkge1xuICAgIHRoaXMudW5sb2NrUG9tb2Rvcm9BdWRpbygpXG4gICAgY29uc3QgbmV4dCA9IHN0YXJ0UG9tb2Rvcm8odGhpcy5nZXRQb21vZG9yb1J1bnRpbWVTdGF0ZShmYWxzZSksIERhdGUubm93KCkpXG4gICAgdGhpcy5wbHVnaW4uc2V0UG9tb2Rvcm9TdGF0ZShuZXh0KVxuICAgIHRoaXMucmVuZGVyKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUG9tb2Rvcm9QYXVzZSgpIHtcbiAgICB0aGlzLnVubG9ja1BvbW9kb3JvQXVkaW8oKVxuICAgIGNvbnN0IG5leHQgPSBwYXVzZVBvbW9kb3JvKHRoaXMuZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUoZmFsc2UpLCBEYXRlLm5vdygpKVxuICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUobmV4dClcbiAgICB0aGlzLnJlbmRlcigpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBvbW9kb3JvUmVzdW1lKCkge1xuICAgIHRoaXMudW5sb2NrUG9tb2Rvcm9BdWRpbygpXG4gICAgY29uc3QgbmV4dCA9IHJlc3VtZVBvbW9kb3JvKHRoaXMuZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUoZmFsc2UpLCBEYXRlLm5vdygpKVxuICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUobmV4dClcbiAgICB0aGlzLnJlbmRlcigpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBvbW9kb3JvUmVzZXQoKSB7XG4gICAgdGhpcy51bmxvY2tQb21vZG9yb0F1ZGlvKClcbiAgICBjb25zdCBuZXh0ID0gcmVzZXRQb21vZG9ybyh0aGlzLmdldFBvbW9kb3JvUnVudGltZVN0YXRlKGZhbHNlKSlcbiAgICB0aGlzLnBsdWdpbi5zZXRQb21vZG9yb1N0YXRlKG5leHQpXG4gICAgdGhpcy5yZW5kZXIoKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVQb21vZG9yb0RldmlhdGlvblRvZ2dsZSgpIHtcbiAgICB0aGlzLnVubG9ja1BvbW9kb3JvQXVkaW8oKVxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5nZXRQb21vZG9yb1J1bnRpbWVTdGF0ZShmYWxzZSlcblxuICAgIGlmIChjdXJyZW50LmlzRGV2aWF0aW9uQWN0aXZlKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBleGl0UG9tb2Rvcm9EZXZpYXRpb24oY3VycmVudCwgbm93KVxuICAgICAgdGhpcy5wbHVnaW4uc2V0UG9tb2Rvcm9TdGF0ZShyZXN1bHQuc3RhdGUpXG4gICAgICBhd2FpdCB0aGlzLmFkZFBvbW9kb3JvRGV2aWF0aW9uVGltZVRvU2VsZWN0ZWRUYXNrKHJlc3VsdC5lbGFwc2VkU2Vjb25kcywgcmVzdWx0LnN0YXRlKVxuXG4gICAgICBpZiAocmVzdWx0LmNvbXBsZXRlZFdvcmspIHtcbiAgICAgICAgY29uc3QgbmV4dFBoYXNlTGFiZWwgPSBnZXRQb21vZG9yb1BoYXNlTGFiZWwocmVzdWx0LnN0YXRlLnBoYXNlKVxuICAgICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBEZXN2w61vIGZpbmFsaXphZG8uIEluaWNpYW5kbyAke25leHRQaGFzZUxhYmVsLnRvTG93ZXJDYXNlKCl9LmAsIDcwMDApXG4gICAgICAgIHRoaXMuZmxhc2hQb21vZG9yb1BhbmVsKClcbiAgICAgICAgdGhpcy5wbGF5UG9tb2Rvcm9CZWVwKClcbiAgICAgICAgYXdhaXQgdGhpcy5hZGRQb21vZG9yb1dvcmtUaW1lVG9TZWxlY3RlZFRhc2soWyd3b3JrJ10sIHJlc3VsdC5zdGF0ZSlcbiAgICAgICAgYXdhaXQgdGhpcy5sb2dQb21vZG9yb0VudHJpZXMoWyd3b3JrJ10sIHJlc3VsdC5zdGF0ZSwgbm93KVxuICAgICAgfVxuXG4gICAgICB0aGlzLnJlbmRlcigpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBuZXh0ID0gZW50ZXJQb21vZG9yb0RldmlhdGlvbihjdXJyZW50LCBub3cpXG4gICAgaWYgKG5leHQgPT09IGN1cnJlbnQpIHtcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoJ1NvbG8gcG9kw6lzIGluaWNpYXIgZGVzdsOtbyBjdWFuZG8gZWwgY29udGFkb3IgZXN0w6EgY29ycmllbmRvLicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnBsdWdpbi5zZXRQb21vZG9yb1N0YXRlKG5leHQpXG4gICAgdGhpcy5yZW5kZXIoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb21vZG9yb1N3aXRjaFRvV29yaygpIHtcbiAgICB0aGlzLnVubG9ja1BvbW9kb3JvQXVkaW8oKVxuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldFBvbW9kb3JvUnVudGltZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHdvcmtTdGF0ZSA9IHtcbiAgICAgIC4uLmN1cnJlbnQsXG4gICAgICBwaGFzZTogJ3dvcmsnIGFzIFBvbW9kb3JvUGhhc2UsXG4gICAgICBydW5TdGF0ZTogJ2lkbGUnIGFzIGNvbnN0LFxuICAgICAgcmVtYWluaW5nU2Vjb25kczogY3VycmVudC5kdXJhdGlvbnMud29ya01pbnV0ZXMgKiA2MCxcbiAgICAgIGVuZFRpbWVzdGFtcDogbnVsbCxcbiAgICAgIGlzRGV2aWF0aW9uQWN0aXZlOiBmYWxzZSxcbiAgICAgIGRldmlhdGlvblN0YXJ0ZWRBdDogbnVsbCxcbiAgICAgIGRldmlhdGlvbkJhc2VSZW1haW5pbmdTZWNvbmRzOiAwLFxuICAgICAgcGhhc2VEZXZpYXRpb25TZWNvbmRzOiAwLFxuICAgIH1cbiAgICB0aGlzLnBsdWdpbi5zZXRQb21vZG9yb1N0YXRlKHdvcmtTdGF0ZSlcbiAgICB0aGlzLnJlbmRlcigpXG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBvbW9kb3JvRHVyYXRpb25zKG5leHREdXJhdGlvbnM6IFBvbW9kb3JvRHVyYXRpb25zKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVBvbW9kb3JvRHVyYXRpb25zKG5leHREdXJhdGlvbnMpXG4gICAgY29uc3QgbmV4dCA9IGFwcGx5UG9tb2Rvcm9EdXJhdGlvbnModGhpcy5nZXRQb21vZG9yb1J1bnRpbWVTdGF0ZShmYWxzZSksIG5vcm1hbGl6ZWQpXG4gICAgdGhpcy5wbHVnaW4uc2V0UG9tb2Rvcm9TdGF0ZShuZXh0KVxuICAgIHRoaXMudXBkYXRlUG9tb2Rvcm9Eb20obmV4dCwgRGF0ZS5ub3coKSlcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlUG9tb2Rvcm9UaWNrKCkge1xuICAgIGNvbnN0IHJ1bnRpbWVTdGF0ZSA9IHRoaXMuZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUodHJ1ZSlcbiAgICBpZiAodGhpcy5hY3RpdmVUYWIgPT09ICdwb21vZG9ybycpXG4gICAgICB0aGlzLnVwZGF0ZVBvbW9kb3JvRG9tKHJ1bnRpbWVTdGF0ZSwgRGF0ZS5ub3coKSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUobm90aWZ5Q29tcGxldGlvbjogYm9vbGVhbik6IFBvbW9kb3JvU3RhdGUge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBjb25zdCBhZHZhbmNlZCA9IGFkdmFuY2VQb21vZG9yb1N0YXRlKHRoaXMucGx1Z2luLnBvbW9kb3JvLCBub3cpXG5cbiAgICBpZiAoYWR2YW5jZWQudHJhbnNpdGlvbmVkKSB7XG4gICAgICB0aGlzLnBsdWdpbi5zZXRQb21vZG9yb1N0YXRlKGFkdmFuY2VkLnN0YXRlKVxuXG4gICAgICBpZiAobm90aWZ5Q29tcGxldGlvbilcbiAgICAgICAgdGhpcy5ub3RpZnlQb21vZG9yb1RyYW5zaXRpb25zKGFkdmFuY2VkLmNvbXBsZXRlZFBoYXNlcywgYWR2YW5jZWQuc3RhdGUpXG5cbiAgICAgIGlmICh0aGlzLmFjdGl2ZVRhYiA9PT0gJ3BvbW9kb3JvJylcbiAgICAgICAgdm9pZCB0aGlzLnJlbmRlcigpXG5cbiAgICAgIHJldHVybiBhZHZhbmNlZC5zdGF0ZVxuICAgIH1cblxuICAgIGlmIChhZHZhbmNlZC5zdGF0ZSAhPT0gdGhpcy5wbHVnaW4ucG9tb2Rvcm8pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFkdmFuY2VkLnN0YXRlLFxuICAgICAgICByZW1haW5pbmdTZWNvbmRzOiBnZXRQb21vZG9yb1JlbWFpbmluZ1NlY29uZHMoYWR2YW5jZWQuc3RhdGUsIG5vdyksXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMucGx1Z2luLnBvbW9kb3JvLFxuICAgICAgZHVyYXRpb25zOiB7IC4uLnRoaXMucGx1Z2luLnBvbW9kb3JvLmR1cmF0aW9ucyB9LFxuICAgICAgcmVtYWluaW5nU2Vjb25kczogZ2V0UG9tb2Rvcm9SZW1haW5pbmdTZWNvbmRzKHRoaXMucGx1Z2luLnBvbW9kb3JvLCBub3cpLFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUG9tb2Rvcm9Eb20oc3RhdGU6IFBvbW9kb3JvU3RhdGUsIG5vd01zOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMucG9tb2Rvcm9UaW1lRWwgfHwgIXRoaXMucG9tb2Rvcm9QaGFzZUVsIHx8ICF0aGlzLnBvbW9kb3JvQ3ljbGVFbCB8fCAhdGhpcy5wb21vZG9yb1N0YXRlRWwpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHJlbWFpbmluZyA9IGdldFBvbW9kb3JvUmVtYWluaW5nU2Vjb25kcyhzdGF0ZSwgbm93TXMpXG4gICAgY29uc3QgZGV2aWF0aW9uRWxhcHNlZCA9IGdldERldmlhdGlvbkVsYXBzZWRTZWNvbmRzKHN0YXRlLCBub3dNcylcbiAgICBjb25zdCBkaXNwbGF5ZWRTZWNvbmRzID0gc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUgPyBkZXZpYXRpb25FbGFwc2VkIDogcmVtYWluaW5nXG4gICAgdGhpcy5wb21vZG9yb1RpbWVFbC5zZXRUZXh0KGZvcm1hdFBvbW9kb3JvQ291bnRkb3duKGRpc3BsYXllZFNlY29uZHMpKVxuICAgIHRoaXMucG9tb2Rvcm9UaW1lRWwudG9nZ2xlQ2xhc3MoJ2lzLWRldmlhdGlvbicsIHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlKVxuICAgIGlmICh0aGlzLnBvbW9kb3JvUHJvZ3Jlc3NFbCkge1xuICAgICAgY29uc3QgdG90YWxTZWNvbmRzID0gTWF0aC5tYXgoMSwgc3RhdGUuaXNEZXZpYXRpb25BY3RpdmVcbiAgICAgICAgPyBNYXRoLm1heCgxLCBzdGF0ZS5kZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kcylcbiAgICAgICAgOiBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyhzdGF0ZS5kdXJhdGlvbnMsIHN0YXRlLnBoYXNlKSlcbiAgICAgIGNvbnN0IGVsYXBzZWQgPSBzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZVxuICAgICAgICA/IGRldmlhdGlvbkVsYXBzZWRcbiAgICAgICAgOiBNYXRoLm1heCgwLCB0b3RhbFNlY29uZHMgLSByZW1haW5pbmcpXG4gICAgICBjb25zdCBwcm9ncmVzc1BlcmNlbnQgPSBNYXRoLm1pbigxMDAsIChlbGFwc2VkIC8gdG90YWxTZWNvbmRzKSAqIDEwMClcbiAgICAgIHRoaXMucG9tb2Rvcm9Qcm9ncmVzc0VsLnN0eWxlLnNldFByb3BlcnR5KCctLXRhcmVhcy1wb21vZG9yby1wcm9ncmVzcycsIGAke3Byb2dyZXNzUGVyY2VudH0lYClcbiAgICAgIHRoaXMucG9tb2Rvcm9Qcm9ncmVzc0VsLnNldEF0dHIoJ2RhdGEtbW9kZScsIHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlID8gJ2RldmlhdGlvbicgOiAnbm9ybWFsJylcbiAgICB9XG4gICAgdGhpcy5wb21vZG9yb1BoYXNlRWwuc2V0VGV4dChnZXRQb21vZG9yb1BoYXNlTGFiZWwoc3RhdGUucGhhc2UpKVxuICAgIHRoaXMucG9tb2Rvcm9DeWNsZUVsLnNldFRleHQoYENpY2xvcyBjb21wbGV0YWRvczogJHtzdGF0ZS5jb21wbGV0ZWRXb3JrQ3ljbGVzfWApXG5cbiAgICBjb25zdCBydW5TdGF0ZUxhYmVsID0gc3RhdGUuaXNEZXZpYXRpb25BY3RpdmVcbiAgICAgID8gJ0Rlc3bDrW8nXG4gICAgICA6IHN0YXRlLnJ1blN0YXRlID09PSAncnVubmluZydcbiAgICAgICAgPyAnRW4gY3Vyc28nXG4gICAgICAgIDogc3RhdGUucnVuU3RhdGUgPT09ICdwYXVzZWQnXG4gICAgICAgICAgPyAnUGF1c2FkbydcbiAgICAgICAgICA6ICdMaXN0bydcbiAgICB0aGlzLnBvbW9kb3JvU3RhdGVFbC5zZXRUZXh0KHJ1blN0YXRlTGFiZWwpXG4gICAgdGhpcy5wb21vZG9yb1N0YXRlRWwuc2V0QXR0cignZGF0YS1zdGF0ZScsIHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlID8gJ2RldmlhdGlvbicgOiBzdGF0ZS5ydW5TdGF0ZSlcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5UG9tb2Rvcm9UcmFuc2l0aW9ucyhjb21wbGV0ZWRQaGFzZXM6IFBvbW9kb3JvUGhhc2VbXSwgbmV4dFN0YXRlOiBQb21vZG9yb1N0YXRlKSB7XG4gICAgY29uc3QgY29tcGxldGVkID0gY29tcGxldGVkUGhhc2VzW2NvbXBsZXRlZFBoYXNlcy5sZW5ndGggLSAxXVxuICAgIGlmICghY29tcGxldGVkKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBuZXh0UGhhc2VMYWJlbCA9IGdldFBvbW9kb3JvUGhhc2VMYWJlbChuZXh0U3RhdGUucGhhc2UpXG4gICAgaWYgKGNvbXBsZXRlZCA9PT0gJ3dvcmsnKVxuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShgUG9tb2Rvcm8gZmluYWxpemFkby4gSW5pY2lhbmRvICR7bmV4dFBoYXNlTGFiZWwudG9Mb3dlckNhc2UoKX0uYCwgNzAwMClcbiAgICBlbHNlXG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBEZXNjYW5zbyBmaW5hbGl6YWRvLiBJbmljaWFuZG8gJHtuZXh0UGhhc2VMYWJlbC50b0xvd2VyQ2FzZSgpfS5gLCA3MDAwKVxuXG4gICAgdGhpcy5mbGFzaFBvbW9kb3JvUGFuZWwoKVxuICAgIHRoaXMucGxheVBvbW9kb3JvQmVlcCgpXG4gICAgdm9pZCB0aGlzLmFkZFBvbW9kb3JvV29ya1RpbWVUb1NlbGVjdGVkVGFzayhjb21wbGV0ZWRQaGFzZXMsIG5leHRTdGF0ZSlcbiAgICB2b2lkIHRoaXMubG9nUG9tb2Rvcm9FbnRyaWVzKGNvbXBsZXRlZFBoYXNlcywgbmV4dFN0YXRlLCBEYXRlLm5vdygpKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2dQb21vZG9yb0VudHJpZXMoY29tcGxldGVkUGhhc2VzOiBQb21vZG9yb1BoYXNlW10sIHN0YXRlOiBQb21vZG9yb1N0YXRlLCBub3dNczogbnVtYmVyKSB7XG4gICAgaWYgKGNvbXBsZXRlZFBoYXNlcy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IHN0YXRlLnNlbGVjdGVkVGFza1BhdGhcbiAgICAgID8gZ2V0VGFza3ModGhpcy5hcHApLmZpbmQoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gc3RhdGUuc2VsZWN0ZWRUYXNrUGF0aClcbiAgICAgIDogbnVsbFxuICAgIGNvbnN0IHRhc2tOYW1lID0gc2VsZWN0ZWRUYXNrPy50YXJlYSB8fCAnU2luIHRhcmVhIHZpbmN1bGFkYSdcbiAgICBjb25zdCB0b3RhbERldmlhdGlvbkhvdXJzID0gdGhpcy5yb3VuZFRvVHdvKHN0YXRlLnBoYXNlRGV2aWF0aW9uU2Vjb25kcyAvIDM2MDApXG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcGxldGVkUGhhc2VzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgcGhhc2UgPSBjb21wbGV0ZWRQaGFzZXNbaW5kZXhdXG4gICAgICBjb25zdCBkZXZpYXRpb25Ib3VycyA9IGluZGV4ID09PSBjb21wbGV0ZWRQaGFzZXMubGVuZ3RoIC0gMVxuICAgICAgICA/IHRvdGFsRGV2aWF0aW9uSG91cnNcbiAgICAgICAgOiAwXG4gICAgICBhd2FpdCBhcHBlbmRQb21vZG9yb0xvZ0VudHJ5KHRoaXMuYXBwLCB7XG4gICAgICAgIHRpbWVzdGFtcE1zOiBub3dNcyxcbiAgICAgICAgdHlwZTogZ2V0UG9tb2Rvcm9QaGFzZUxhYmVsKHBoYXNlKSxcbiAgICAgICAgdGFzazogdGFza05hbWUsXG4gICAgICAgIGRldmlhdGlvbkhvdXJzLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUucGhhc2VEZXZpYXRpb25TZWNvbmRzID4gMCkge1xuICAgICAgdGhpcy5wbHVnaW4uc2V0UG9tb2Rvcm9TdGF0ZSh7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkdXJhdGlvbnM6IHsgLi4uc3RhdGUuZHVyYXRpb25zIH0sXG4gICAgICAgIHBoYXNlRGV2aWF0aW9uU2Vjb25kczogMCxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlVGFiID09PSAncG9tb2Rvcm8nKVxuICAgICAgYXdhaXQgdGhpcy5yZW5kZXIoKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBhZGRQb21vZG9yb1dvcmtUaW1lVG9TZWxlY3RlZFRhc2soY29tcGxldGVkUGhhc2VzOiBQb21vZG9yb1BoYXNlW10sIHN0YXRlOiBQb21vZG9yb1N0YXRlKSB7XG4gICAgY29uc3QgY29tcGxldGVkV29ya0NvdW50ID0gY29tcGxldGVkUGhhc2VzLmZpbHRlcihwaGFzZSA9PiBwaGFzZSA9PT0gJ3dvcmsnKS5sZW5ndGhcbiAgICBpZiAoY29tcGxldGVkV29ya0NvdW50ID09PSAwKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBzZWxlY3RlZFRhc2tQYXRoID0gc3RhdGUuc2VsZWN0ZWRUYXNrUGF0aFxuICAgIGlmICghc2VsZWN0ZWRUYXNrUGF0aClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgdGFzayA9IGdldFRhc2tzKHRoaXMuYXBwKS5maW5kKGl0ZW0gPT4gaXRlbS5maWxlLnBhdGggPT09IHNlbGVjdGVkVGFza1BhdGgpXG4gICAgaWYgKCF0YXNrKSB7XG4gICAgICB0aGlzLnNldFBvbW9kb3JvU2VsZWN0ZWRUYXNrUGF0aChudWxsKVxuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZSgnTGEgdGFyZWEgc2VsZWNjaW9uYWRhIHBhcmEgUG9tb2Rvcm8geWEgbm8gZXhpc3RlLiBTZSBxdWl0w7MgbGEgc2VsZWNjacOzbi4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgd29ya2VkSG91cnMgPSB0aGlzLnJvdW5kVG9Ud28oKGNvbXBsZXRlZFdvcmtDb3VudCAqIHN0YXRlLmR1cmF0aW9ucy53b3JrTWludXRlcykgLyA2MClcbiAgICBpZiAod29ya2VkSG91cnMgPD0gMClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgbmV4dERlZGljYXRlZCA9IHRoaXMucm91bmRUb1R3byh0YXNrLmRlZGljYWRvICsgd29ya2VkSG91cnMpXG4gICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgZGVkaWNhZG86IG5leHREZWRpY2F0ZWQgfSlcbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBTZSBzdW1hcm9uICR7dGhpcy5mb3JtYXREZWNpbWFsKHdvcmtlZEhvdXJzKX0gaCBhIFwiJHt0YXNrLnRhcmVhfVwiLmAsIDUwMDApXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGFkZFBvbW9kb3JvRGV2aWF0aW9uVGltZVRvU2VsZWN0ZWRUYXNrKGVsYXBzZWRTZWNvbmRzOiBudW1iZXIsIHN0YXRlOiBQb21vZG9yb1N0YXRlKSB7XG4gICAgaWYgKGVsYXBzZWRTZWNvbmRzIDw9IDApXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHNlbGVjdGVkVGFza1BhdGggPSBzdGF0ZS5zZWxlY3RlZFRhc2tQYXRoXG4gICAgaWYgKCFzZWxlY3RlZFRhc2tQYXRoKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCB0YXNrID0gZ2V0VGFza3ModGhpcy5hcHApLmZpbmQoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gc2VsZWN0ZWRUYXNrUGF0aClcbiAgICBpZiAoIXRhc2spIHtcbiAgICAgIHRoaXMuc2V0UG9tb2Rvcm9TZWxlY3RlZFRhc2tQYXRoKG51bGwpXG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdMYSB0YXJlYSBzZWxlY2Npb25hZGEgcGFyYSBQb21vZG9ybyB5YSBubyBleGlzdGUuIFNlIHF1aXTDsyBsYSBzZWxlY2Npw7NuLicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkZXZpYXRpb25Ib3VycyA9IHRoaXMucm91bmRUb1R3byhlbGFwc2VkU2Vjb25kcyAvIDM2MDApXG4gICAgaWYgKGRldmlhdGlvbkhvdXJzIDw9IDApXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IG5leHREZXZpYXRpb24gPSB0aGlzLnJvdW5kVG9Ud28odGFzay5kZXN2aW8gKyBkZXZpYXRpb25Ib3VycylcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBkZXN2aW86IG5leHREZXZpYXRpb24gfSlcbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBTZSBzdW1hcm9uICR7dGhpcy5mb3JtYXREZWNpbWFsKGRldmlhdGlvbkhvdXJzKX0gaCBkZSBkZXN2w61vIGEgXCIke3Rhc2sudGFyZWF9XCIuYCwgNTAwMClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVuZGVyUG9tb2Rvcm9EYWlseUxvZyhjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tbG9nLXNlY3Rpb24nIH0pXG4gICAgc2VjdGlvbi5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6ICdSZWdpc3Ryb3MgZGVsIGRpYScgfSlcblxuICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCByZWFkUG9tb2Rvcm9Mb2dFbnRyaWVzKHRoaXMuYXBwKVxuICAgIGNvbnN0IHRvZGF5RW50cmllcyA9IGdldEVudHJpZXNCeURhdGUoZW50cmllcywgdG9Mb2NhbERhdGVUZXh0KG5ldyBEYXRlKCkpKVxuXG4gICAgaWYgKHRvZGF5RW50cmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNlY3Rpb24uY3JlYXRlRWwoJ3AnLCB7XG4gICAgICAgIGNsczogJ3RhcmVhcy1wb21vZG9yby1sb2ctZW1wdHknLFxuICAgICAgICB0ZXh0OiAndG9kYXZpYSBubyBzZSByZWdpc3RyYW4gcG9tb2Rvcm9zIGVuIGVsIGRpYScsXG4gICAgICB9KVxuICAgICAgdGhpcy5yZW5kZXJQb21vZG9yb0hvdXJseUhlYXRtYXAoc2VjdGlvbiwgdG9kYXlFbnRyaWVzKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgd3JhcCA9IHNlY3Rpb24uY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWxvZy10YWJsZS13cmFwJyB9KVxuICAgIGNvbnN0IHRhYmxlID0gd3JhcC5jcmVhdGVFbCgndGFibGUnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1sb2ctdGFibGUnIH0pXG4gICAgY29uc3QgaGVhZCA9IHRhYmxlLmNyZWF0ZUVsKCd0aGVhZCcpXG4gICAgY29uc3QgaGVhZFJvdyA9IGhlYWQuY3JlYXRlRWwoJ3RyJylcbiAgICBmb3IgKGNvbnN0IHRpdGxlIG9mIFsnSG9yYXJpbycsICdUaXBvIGRlIHBvbW9kb3JvJywgJ1RhcmVhJywgJ0Rlc3ZpbyddKVxuICAgICAgaGVhZFJvdy5jcmVhdGVFbCgndGgnLCB7IHRleHQ6IHRpdGxlIH0pXG5cbiAgICBjb25zdCBib2R5ID0gdGFibGUuY3JlYXRlRWwoJ3Rib2R5JylcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRvZGF5RW50cmllcykge1xuICAgICAgY29uc3Qgcm93ID0gYm9keS5jcmVhdGVFbCgndHInKVxuICAgICAgcm93LmNyZWF0ZUVsKCd0ZCcsIHsgdGV4dDogZW50cnkudGltZSB9KVxuICAgICAgcm93LmNyZWF0ZUVsKCd0ZCcsIHsgdGV4dDogZW50cnkudHlwZSB9KVxuICAgICAgcm93LmNyZWF0ZUVsKCd0ZCcsIHsgdGV4dDogZW50cnkudGFzayB9KVxuICAgICAgcm93LmNyZWF0ZUVsKCd0ZCcsIHsgdGV4dDogYCR7dGhpcy5mb3JtYXREZWNpbWFsKGVudHJ5LmRldmlhdGlvbkhvdXJzKX0gaGAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlclBvbW9kb3JvSG91cmx5SGVhdG1hcChzZWN0aW9uLCB0b2RheUVudHJpZXMpXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclBvbW9kb3JvSG91cmx5SGVhdG1hcChjb250YWluZXI6IEhUTUxFbGVtZW50LCB0b2RheUVudHJpZXM6IEFycmF5PHsgdGltZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcgfT4pIHtcbiAgICBjb25zdCBoZWF0bWFwU2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8taGVhdG1hcCcgfSlcbiAgICBoZWF0bWFwU2VjdGlvbi5jcmVhdGVFbCgnaDQnLCB7IHRleHQ6ICdIZWF0bWFwIGhvcmFyaW8gKHRyYWJham8pJyB9KVxuXG4gICAgY29uc3Qgd29ya0VudHJpZXMgPSB0b2RheUVudHJpZXMuZmlsdGVyKGVudHJ5ID0+IGVudHJ5LnR5cGUgPT09ICdUcmFiYWpvJylcbiAgICBjb25zdCBob3VybHlDb3VudHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAyNCB9LCAoKSA9PiAwKVxuICAgIGZvciAoY29uc3QgZW50cnkgb2Ygd29ya0VudHJpZXMpIHtcbiAgICAgIGNvbnN0IGhvdXIgPSBOdW1iZXIucGFyc2VJbnQoZW50cnkudGltZS5zbGljZSgwLCAyKSwgMTApXG4gICAgICBpZiAoTnVtYmVyLmlzTmFOKGhvdXIpIHx8IGhvdXIgPCAwIHx8IGhvdXIgPiAyMylcbiAgICAgICAgY29udGludWVcbiAgICAgIGhvdXJseUNvdW50c1tob3VyXSArPSAxXG4gICAgfVxuXG4gICAgY29uc3QgbWF4Q291bnQgPSBNYXRoLm1heCgxLCAuLi5ob3VybHlDb3VudHMpXG4gICAgY29uc3QgZ3JpZCA9IGhlYXRtYXBTZWN0aW9uLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1oZWF0bWFwLWdyaWQnIH0pXG4gICAgZm9yIChsZXQgaG91ciA9IDA7IGhvdXIgPCAyNDsgaG91cisrKSB7XG4gICAgICBjb25zdCBjb3VudCA9IGhvdXJseUNvdW50c1tob3VyXVxuICAgICAgY29uc3QgbGV2ZWwgPSBjb3VudCA9PT0gMFxuICAgICAgICA/IDBcbiAgICAgICAgOiBNYXRoLm1pbig0LCBNYXRoLmNlaWwoKGNvdW50IC8gbWF4Q291bnQpICogNCkpXG4gICAgICBjb25zdCBjZWxsID0gZ3JpZC5jcmVhdGVEaXYoeyBjbHM6IGB0YXJlYXMtcG9tb2Rvcm8taGVhdG1hcC1jZWxsIGlzLWxldmVsLSR7bGV2ZWx9YCB9KVxuICAgICAgY2VsbC5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgICAgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWhlYXRtYXAtaG91cicsXG4gICAgICAgIHRleHQ6IFN0cmluZyhob3VyKS5wYWRTdGFydCgyLCAnMCcpLFxuICAgICAgfSlcbiAgICAgIGNlbGwuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgIGNsczogJ3RhcmVhcy1wb21vZG9yby1oZWF0bWFwLWNvdW50JyxcbiAgICAgICAgdGV4dDogU3RyaW5nKGNvdW50KSxcbiAgICAgIH0pXG4gICAgICBjZWxsLnNldEF0dHIoJ3RpdGxlJywgYCR7U3RyaW5nKGhvdXIpLnBhZFN0YXJ0KDIsICcwJyl9OjAwIC0gJHtjb3VudH0gcG9tb2Rvcm8ocykgZGUgdHJhYmFqb2ApXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmbGFzaFBvbW9kb3JvUGFuZWwoKSB7XG4gICAgaWYgKCF0aGlzLnBvbW9kb3JvUGFuZWxFbClcbiAgICAgIHJldHVyblxuXG4gICAgdGhpcy5wb21vZG9yb1BhbmVsRWwuYWRkQ2xhc3MoJ3RhcmVhcy1wb21vZG9yby1wYW5lbC1mbGFzaCcpXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5wb21vZG9yb1BhbmVsRWw/LnJlbW92ZUNsYXNzKCd0YXJlYXMtcG9tb2Rvcm8tcGFuZWwtZmxhc2gnKVxuICAgIH0sIDkwMClcbiAgfVxuXG4gIHByaXZhdGUgcGxheVBvbW9kb3JvQmVlcCgpIHtcbiAgICBjb25zdCBhdWRpb0NvbnRleHQgPSB0aGlzLmVuc3VyZVBvbW9kb3JvQXVkaW9Db250ZXh0KClcbiAgICBpZiAoIWF1ZGlvQ29udGV4dClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3Qgc3RhcnRCZWVwID0gKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm93ID0gYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lXG4gICAgICAgIGNvbnN0IGZpcnN0ID0gYXVkaW9Db250ZXh0LmNyZWF0ZU9zY2lsbGF0b3IoKVxuICAgICAgICBjb25zdCBzZWNvbmQgPSBhdWRpb0NvbnRleHQuY3JlYXRlT3NjaWxsYXRvcigpXG4gICAgICAgIGNvbnN0IGdhaW4gPSBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpXG5cbiAgICAgICAgZmlyc3QudHlwZSA9ICdzaW5lJ1xuICAgICAgICBzZWNvbmQudHlwZSA9ICdzaW5lJ1xuICAgICAgICBmaXJzdC5mcmVxdWVuY3kudmFsdWUgPSA4ODBcbiAgICAgICAgc2Vjb25kLmZyZXF1ZW5jeS52YWx1ZSA9IDk4OFxuXG4gICAgICAgIGdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZSgwLjAwMDEsIG5vdylcbiAgICAgICAgZ2Fpbi5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wOSwgbm93ICsgMC4wMSlcbiAgICAgICAgZ2Fpbi5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wMDAxLCBub3cgKyAwLjE4KVxuICAgICAgICBnYWluLmdhaW4uc2V0VmFsdWVBdFRpbWUoMC4wMDAxLCBub3cgKyAwLjIwKVxuICAgICAgICBnYWluLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjA4LCBub3cgKyAwLjIyKVxuICAgICAgICBnYWluLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMDEsIG5vdyArIDAuMzgpXG5cbiAgICAgICAgZmlyc3QuY29ubmVjdChnYWluKVxuICAgICAgICBzZWNvbmQuY29ubmVjdChnYWluKVxuICAgICAgICBnYWluLmNvbm5lY3QoYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKVxuXG4gICAgICAgIGZpcnN0LnN0YXJ0KG5vdylcbiAgICAgICAgZmlyc3Quc3RvcChub3cgKyAwLjE4KVxuICAgICAgICBzZWNvbmQuc3RhcnQobm93ICsgMC4yMClcbiAgICAgICAgc2Vjb25kLnN0b3Aobm93ICsgMC4zOClcbiAgICAgIH1cbiAgICAgIGNhdGNoIHtcbiAgICAgICAgLy8gSWdub3JlIHBsYXliYWNrIGVycm9ycyBpbiBlbnZpcm9ubWVudHMgdGhhdCBibG9jayBhdXRvcGxheS5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXVkaW9Db250ZXh0LnN0YXRlID09PSAnc3VzcGVuZGVkJykge1xuICAgICAgdm9pZCBhdWRpb0NvbnRleHQucmVzdW1lKClcbiAgICAgICAgLnRoZW4oc3RhcnRCZWVwKVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIC8vIElnbm9yZSByZXN1bWUgZXJyb3JzLlxuICAgICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3RhcnRCZWVwKClcbiAgfVxuXG4gIHByaXZhdGUgZW5zdXJlUG9tb2Rvcm9BdWRpb0NvbnRleHQoKTogQXVkaW9Db250ZXh0IHwgbnVsbCB7XG4gICAgaWYgKHRoaXMucG9tb2Rvcm9BdWRpb0NvbnRleHQgJiYgdGhpcy5wb21vZG9yb0F1ZGlvQ29udGV4dC5zdGF0ZSAhPT0gJ2Nsb3NlZCcpXG4gICAgICByZXR1cm4gdGhpcy5wb21vZG9yb0F1ZGlvQ29udGV4dFxuXG4gICAgY29uc3QgQXVkaW9Db250ZXh0Q3RvciA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgKHdpbmRvdyBhcyB0eXBlb2Ygd2luZG93ICYgeyB3ZWJraXRBdWRpb0NvbnRleHQ/OiB0eXBlb2YgQXVkaW9Db250ZXh0IH0pLndlYmtpdEF1ZGlvQ29udGV4dFxuICAgIGlmICghQXVkaW9Db250ZXh0Q3RvcilcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5wb21vZG9yb0F1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHRDdG9yKClcbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgdGhpcy5wb21vZG9yb0F1ZGlvQ29udGV4dCA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wb21vZG9yb0F1ZGlvQ29udGV4dFxuICB9XG5cbiAgcHJpdmF0ZSB1bmxvY2tQb21vZG9yb0F1ZGlvKCkge1xuICAgIGNvbnN0IGF1ZGlvQ29udGV4dCA9IHRoaXMuZW5zdXJlUG9tb2Rvcm9BdWRpb0NvbnRleHQoKVxuICAgIGlmICghYXVkaW9Db250ZXh0IHx8IGF1ZGlvQ29udGV4dC5zdGF0ZSAhPT0gJ3N1c3BlbmRlZCcpXG4gICAgICByZXR1cm5cblxuICAgIHZvaWQgYXVkaW9Db250ZXh0LnJlc3VtZSgpLmNhdGNoKCgpID0+IHtcbiAgICAgIC8vIElnbm9yZSByZXN1bWUgZXJyb3JzLlxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIHJlc2V0UG9tb2Rvcm9Eb21SZWZzKCkge1xuICAgIHRoaXMucG9tb2Rvcm9QYW5lbEVsID0gbnVsbFxuICAgIHRoaXMucG9tb2Rvcm9UaW1lRWwgPSBudWxsXG4gICAgdGhpcy5wb21vZG9yb1Byb2dyZXNzRWwgPSBudWxsXG4gICAgdGhpcy5wb21vZG9yb1BoYXNlRWwgPSBudWxsXG4gICAgdGhpcy5wb21vZG9yb0N5Y2xlRWwgPSBudWxsXG4gICAgdGhpcy5wb21vZG9yb1N0YXRlRWwgPSBudWxsXG4gIH1cblxuICBwcml2YXRlIHJlbmRlckhlYWRlcihyb290OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGhlYWRlciA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWhlYWRlcicgfSlcblxuICAgIGNvbnN0IHRpdGxlV3JhcCA9IGhlYWRlci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtdGl0bGUtd3JhcCcgfSlcbiAgICB0aXRsZVdyYXAuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICfimLAnLCBjbHM6ICd0YXJlYXMtaWNvbicgfSlcbiAgICB0aXRsZVdyYXAuY3JlYXRlRWwoJ2gxJywgeyB0ZXh0OiAnIFRhcmVhcycgfSlcblxuICAgIGNvbnN0IGFjdGlvbnMgPSBoZWFkZXIuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWhlYWRlci1hY3Rpb25zJyB9KVxuICAgIGFjdGlvbnMuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICfilqYgVGFibGVybycsIGNsczogJ3RhcmVhcy12aWV3LXRvZ2dsZScgfSlcblxuICAgIGNvbnN0IG5ld0J1dHRvbiA9IGFjdGlvbnMuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAndGFyZWFzLWJ0bi1uZXcnIH0pXG4gICAgbmV3QnV0dG9uLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnTnVldm8g4pa+JyB9KVxuICAgIG5ld0J1dHRvbi5vbmNsaWNrID0gKCkgPT4gbmV3IE5ld1Rhc2tNb2RhbCh0aGlzLmFwcCwgdGhpcy5wbHVnaW4pLm9wZW4oKVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJHcm91cChcbiAgICByb290OiBIVE1MRWxlbWVudCxcbiAgICB0ZWFtOiBFcXVpcG8sXG4gICAgdGFza3M6IFRhc2tJdGVtW10sXG4gICAgYWxsVGFza3M6IFRhc2tJdGVtW10sXG4gICAgdGFza1ByZXZpZXdNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4sXG4gICkge1xuICAgIGNvbnN0IHRlYW1OYW1lID0gdGVhbS5uYW1lXG4gICAgY29uc3QgaXNNYW5hZ2VkID0gdGhpcy5wbHVnaW4uZXF1aXBvcy5zb21lKGl0ZW0gPT4gaXRlbS5uYW1lID09PSB0ZWFtTmFtZSlcbiAgICBjb25zdCBleHBhbmRlZCA9IHRoaXMuZXhwYW5kZWRHcm91cHMuaGFzKHRlYW1OYW1lKVxuXG4gICAgY29uc3QgZ3JvdXAgPSByb290LmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1ncm91cCcgfSlcbiAgICBncm91cC5kYXRhc2V0LmVxdWlwbyA9IHRlYW1OYW1lXG5cbiAgICBjb25zdCBoZWFkZXIgPSBncm91cC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtZ3JvdXAtaGVhZGVyJyB9KVxuXG4gICAgaWYgKGlzTWFuYWdlZClcbiAgICAgIHRoaXMuYXR0YWNoR3JvdXBEcmFnSGFuZGxlcnMocm9vdCwgZ3JvdXAsIGhlYWRlciwgdGVhbU5hbWUpXG5cbiAgICBoZWFkZXIuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IGV4cGFuZGVkID8gJ+KWvCAnIDogJ+KWtiAnLCBjbHM6ICd0YXJlYXMtdG9nZ2xlJyB9KVxuXG4gICAgY29uc3QgYmFkZ2UgPSBoZWFkZXIuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IHRlYW1OYW1lLCBjbHM6ICd0YXJlYXMtYmFkZ2UnIH0pXG4gICAgYmFkZ2Uuc3R5bGUuYmFja2dyb3VuZCA9IHRlYW0uY29sb3JcblxuICAgIGhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogYCAgJHt0YXNrcy5sZW5ndGh9YCwgY2xzOiAndGFyZWFzLWNvdW50JyB9KVxuXG4gICAgaWYgKGlzTWFuYWdlZCkge1xuICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGhlYWRlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAn4pyOJywgY2xzOiAndGFyZWFzLWdyb3VwLWVkaXQtYnRuJyB9KVxuICAgICAgZWRpdEJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIG5ldyBFZGl0U2VjdGlvbk1vZGFsKHRoaXMuYXBwLCB0aGlzLnBsdWdpbiwgdGVhbSwgdGhpcykub3BlbigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaGVhZGVyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoZXhwYW5kZWQpXG4gICAgICAgIHRoaXMuZXhwYW5kZWRHcm91cHMuZGVsZXRlKHRlYW1OYW1lKVxuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmV4cGFuZGVkR3JvdXBzLmFkZCh0ZWFtTmFtZSlcblxuICAgICAgdGhpcy5yZW5kZXIoKVxuICAgIH1cblxuICAgIGlmICghZXhwYW5kZWQpXG4gICAgICByZXR1cm5cblxuICAgIHRhc2tzLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKVxuXG4gICAgY29uc3QgY2FyZHMgPSBncm91cC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtY2FyZC1saXN0JyB9KVxuICAgIGZvciAoY29uc3QgdGFzayBvZiB0YXNrcylcbiAgICAgIHRoaXMucmVuZGVyVGFza0NhcmQoY2FyZHMsIHRhc2ssIGFsbFRhc2tzLCB0YXNrUHJldmlld01hcC5nZXQodGFzay5maWxlLnBhdGgpIHx8ICcnKVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlVGFiID09PSAnYWN0aXZlJykge1xuICAgICAgY29uc3QgYWRkQ2FyZCA9IGNhcmRzLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy10YXNrLWNhcmQgdGFyZWFzLXRhc2stY2FyZC1hZGQnIH0pXG4gICAgICBjb25zdCBsaW5rID0gYWRkQ2FyZC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJysgTnVldmEgdGFyZWEnLCBjbHM6ICd0YXJlYXMtYWRkLWxpbmsnIH0pXG4gICAgICBsaW5rLm9uY2xpY2sgPSAoKSA9PiBuZXcgTmV3VGFza01vZGFsKHRoaXMuYXBwLCB0aGlzLnBsdWdpbiwgdGVhbU5hbWUpLm9wZW4oKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyVGFza0NhcmQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0sIGFsbFRhc2tzOiBUYXNrSXRlbVtdLCB0YXNrUHJldmlldzogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3VidGFza3MgPSBhbGxUYXNrc1xuICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0ucGFyZW50ID09PSB0YXNrLmZpbGUuYmFzZW5hbWUpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpXG4gICAgY29uc3QgaGFzU3VidGFza3MgPSBzdWJ0YXNrcy5sZW5ndGggPiAwXG4gICAgY29uc3Qgc3VidGFza3NFeHBhbmRlZCA9IHRoaXMuZXhwYW5kZWRDYXJkU3VidGFza3MuaGFzKHRhc2suZmlsZS5wYXRoKVxuXG4gICAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtdGFzay1jYXJkJyB9KVxuICAgIHRoaXMuYXR0YWNoQ2FyZERyYWdIYW5kbGVycyhjb250YWluZXIsIGNhcmQsIHRhc2ssIGFsbFRhc2tzKVxuICAgIHRoaXMuYXR0YWNoQ2FyZEVkaXRIYW5kbGVycyhjYXJkLCB0YXNrKVxuXG4gICAgY29uc3Qgc3RhdHVzQmFuZENsYXNzID0gdGhpcy5nZXRTdGF0dXNDbGFzc05hbWUodGFzay5lc3RhZG8pXG4gICAgY29uc3Qgc3RhdHVzQmFuZCA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBgdGFyZWFzLWNhcmQtc2lkZS1iYW5kIHRhcmVhcy1jYXJkLXN0YXR1cy1iYW5kIHRhcmVhcy1jYXJkLXN0YXR1cy1iYW5kLSR7c3RhdHVzQmFuZENsYXNzfWAgfSlcbiAgICB0aGlzLnJlbmRlclN0YXR1c0JhbmQoc3RhdHVzQmFuZCwgdGFzaylcblxuICAgIGNvbnN0IHByaW9yaXR5QmFuZENsYXNzID0gdGhpcy5nZXRQcmlvcml0eUNsYXNzTmFtZSh0YXNrLnByaW9yaWRhZClcbiAgICBjb25zdCBwcmlvcml0eUJhbmQgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogYHRhcmVhcy1jYXJkLXNpZGUtYmFuZCB0YXJlYXMtY2FyZC1wcmlvcml0eS1iYW5kIHRhcmVhcy1jYXJkLXByaW9yaXR5LWJhbmQtJHtwcmlvcml0eUJhbmRDbGFzc31gIH0pXG4gICAgdGhpcy5yZW5kZXJQcmlvcml0eUJhbmQocHJpb3JpdHlCYW5kLCB0YXNrKVxuXG4gICAgY29uc3QgYWN0aW9ucyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWNhcmQtYWN0aW9ucyB0YXJlYXMtY2FyZC1hY3Rpb25zLWJhbmQnIH0pXG4gICAgdGhpcy5yZW5kZXJTdGF0dXNBY3Rpb25zKGFjdGlvbnMsIHRhc2spXG4gICAgdGhpcy5zeW5jQ2FyZFNpZGVCYW5kc1RvcE9mZnNldChjYXJkLCBhY3Rpb25zKVxuXG4gICAgY29uc3QgdGl0bGVSb3cgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLXRpdGxlLXJvdycgfSlcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlUm93LmNyZWF0ZUVsKCdhJywgeyB0ZXh0OiB0YXNrLnRhcmVhLCBjbHM6ICd0YXJlYXMtdGFzay1jYXJkLXRpdGxlJyB9KVxuICAgIHRpdGxlLnNldEF0dHIoJ3RpdGxlJywgdGFzay50YXJlYSlcbiAgICB0aXRsZS5vbmNsaWNrID0gKCkgPT4gdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dCh0YXNrLmZpbGUucGF0aCwgJycsIHRydWUpXG5cbiAgICBjb25zdCBjb21tZW50QnV0dG9uID0gdGl0bGVSb3cuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAndGFyZWFzLWNhcmQtY29tbWVudC1idG4nIH0pXG4gICAgY29tbWVudEJ1dHRvbi5zZXRBdHRyKCdhcmlhLWxhYmVsJywgJ0FncmVnYXIgY29tZW50YXJpbycpXG4gICAgY29tbWVudEJ1dHRvbi5zZXRBdHRyKCd0aXRsZScsICdBZ3JlZ2FyIGNvbWVudGFyaW8nKVxuICAgIG9ic2lkaWFuLnNldEljb24oY29tbWVudEJ1dHRvbiwgJ3Njcm9sbC10ZXh0JylcbiAgICBjb21tZW50QnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBuZXcgQWRkVGFza0NvbW1lbnRNb2RhbCh0aGlzLmFwcCwgdGFzaykub3BlbigpXG4gICAgfVxuXG4gICAgaWYgKHRhc2tQcmV2aWV3KVxuICAgICAgY2FyZC5jcmVhdGVFbCgncCcsIHsgdGV4dDogdGFza1ByZXZpZXcsIGNsczogJ3RhcmVhcy1jYXJkLXByZXZpZXcnIH0pXG5cbiAgICBjb25zdCBmb290ZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLWZvb3RlcicgfSlcbiAgICBpZiAoaGFzU3VidGFza3MpIHtcbiAgICAgIGNvbnN0IHN1YnRhc2tzVG9nZ2xlID0gZm9vdGVyLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICB0ZXh0OiBgJHtzdWJ0YXNrc0V4cGFuZGVkID8gJ+KWvCcgOiAn4pa2J30gJHtzdWJ0YXNrcy5sZW5ndGh9IHN1YnRhcmVhKHMpYCxcbiAgICAgICAgY2xzOiBgdGFyZWFzLWNhcmQtc3VidGFza3MgdGFyZWFzLWNhcmQtc3VidGFza3MtdG9nZ2xlJHtzdWJ0YXNrc0V4cGFuZGVkID8gJyBpcy1leHBhbmRlZCcgOiAnJ31gLFxuICAgICAgfSlcblxuICAgICAgc3VidGFza3NUb2dnbGUub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBpZiAoc3VidGFza3NFeHBhbmRlZClcbiAgICAgICAgICB0aGlzLmV4cGFuZGVkQ2FyZFN1YnRhc2tzLmRlbGV0ZSh0YXNrLmZpbGUucGF0aClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXMuZXhwYW5kZWRDYXJkU3VidGFza3MuYWRkKHRhc2suZmlsZS5wYXRoKVxuXG4gICAgICAgIHRoaXMucmVuZGVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRTdWJ0YXNrID0gZm9vdGVyLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnKyBTdWJ0YXJlYScsIGNsczogJ3RhcmVhcy1hZGQtbGluaycgfSlcbiAgICBhZGRTdWJ0YXNrLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBuZXcgTmV3VGFza01vZGFsKHRoaXMuYXBwLCB0aGlzLnBsdWdpbiwgdGFzay5lcXVpcG8sIHRhc2suZmlsZS5iYXNlbmFtZSkub3BlbigpXG4gICAgfVxuXG4gICAgaWYgKGhhc1N1YnRhc2tzICYmIHN1YnRhc2tzRXhwYW5kZWQpXG4gICAgICB0aGlzLnJlbmRlckNhcmRTdWJ0YXNrTGlzdChjYXJkLCBzdWJ0YXNrcylcblxuICAgIHRoaXMucmVuZGVyQ2FyZFByb2dyZXNzQmFuZChjYXJkLCB0YXNrKVxuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDYXJkRWRpdEhhbmRsZXJzKGNhcmQ6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdCgnYSwgYnV0dG9uLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCcpKVxuICAgICAgICByZXR1cm5cblxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIG5ldyBFZGl0VGFza0ZpbGVNb2RhbCh0aGlzLmFwcCwgdGFzaykub3BlbigpXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgc3luY0NhcmRTaWRlQmFuZHNUb3BPZmZzZXQoY2FyZDogSFRNTEVsZW1lbnQsIGFjdGlvbnNCYW5kOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGFwcGx5T2Zmc2V0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgbWVhc3VyZWRIZWlnaHQgPSBNYXRoLmNlaWwoYWN0aW9uc0JhbmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KVxuICAgICAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10YXJlYXMtY2FyZC1hY3Rpb25zLWJhbmQtaGVpZ2h0JywgYCR7bWVhc3VyZWRIZWlnaHR9cHhgKVxuICAgIH1cblxuICAgIGFwcGx5T2Zmc2V0KClcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFwcGx5T2Zmc2V0KVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBidWlsZFRhc2tQcmV2aWV3TWFwKHRhc2tzOiBUYXNrSXRlbVtdKTogUHJvbWlzZTxNYXA8c3RyaW5nLCBzdHJpbmc+PiB7XG4gICAgY29uc3QgcHJldmlld01hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KClcblxuICAgIGF3YWl0IFByb21pc2UuYWxsKHRhc2tzLm1hcChhc3luYyAodGFzaykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmlsZUNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5jYWNoZWRSZWFkKHRhc2suZmlsZSlcbiAgICAgICAgcHJldmlld01hcC5zZXQodGFzay5maWxlLnBhdGgsIGV4dHJhY3RUYXNrQm9keVByZXZpZXcoZmlsZUNvbnRlbnQpKVxuICAgICAgfVxuICAgICAgY2F0Y2gge1xuICAgICAgICBwcmV2aWV3TWFwLnNldCh0YXNrLmZpbGUucGF0aCwgJycpXG4gICAgICB9XG4gICAgfSkpXG5cbiAgICByZXR1cm4gcHJldmlld01hcFxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJSb3codGJvZHk6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSwgYWxsVGFza3M6IFRhc2tJdGVtW10sIGRlcHRoOiBudW1iZXIpIHtcbiAgICBjb25zdCBzdWJ0YXNrcyA9IGFsbFRhc2tzXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wYXJlbnQgPT09IHRhc2suZmlsZS5iYXNlbmFtZSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcilcblxuICAgIGNvbnN0IGhhc1N1YnRhc2tzID0gc3VidGFza3MubGVuZ3RoID4gMFxuICAgIGNvbnN0IGV4cGFuZGVkID0gdGhpcy5leHBhbmRlZFRhc2tzLmhhcyh0YXNrLmZpbGUucGF0aClcblxuICAgIGNvbnN0IHJvdyA9IHRib2R5LmNyZWF0ZUVsKCd0cicsIHsgY2xzOiAndGFyZWFzLXJvdycgfSlcbiAgICByb3cuZGF0YXNldC5wYXRoID0gdGFzay5maWxlLnBhdGhcbiAgICByb3cuZGF0YXNldC5kZXB0aCA9IFN0cmluZyhkZXB0aClcblxuICAgIHRoaXMucmVuZGVyRHJhZ0NlbGwocm93LCB0Ym9keSwgdGFzaywgYWxsVGFza3MsIGRlcHRoKVxuICAgIHRoaXMucmVuZGVyVG9nZ2xlQ2VsbChyb3csIHRhc2ssIGhhc1N1YnRhc2tzLCBleHBhbmRlZCwgZGVwdGgpXG4gICAgdGhpcy5yZW5kZXJUYXNrTmFtZUNlbGwocm93LCB0YXNrLCBkZXB0aClcbiAgICB0aGlzLnJlbmRlclN0YXR1c0NlbGwocm93LCB0YXNrKVxuICAgIHRoaXMucmVuZGVyVGVhbUNlbGwocm93LCB0YXNrLCBkZXB0aClcbiAgICB0aGlzLnJlbmRlclByaW9yaXR5Q2VsbChyb3csIHRhc2spXG4gICAgdGhpcy5yZW5kZXJEZWRpY2F0ZWRDZWxsKHJvdywgdGFzaylcbiAgICB0aGlzLnJlbmRlckVzdGltYXRlZENlbGwocm93LCB0YXNrKVxuICAgIHRoaXMucmVuZGVyU3RhcnREYXRlQ2VsbChyb3csIHRhc2spXG4gICAgdGhpcy5yZW5kZXJFbmREYXRlQ2VsbChyb3csIHRhc2spXG4gICAgdGhpcy5yZW5kZXJQZXJjZW50Q2VsbChyb3csIHRhc2spXG4gICAgdGhpcy5yZW5kZXJTdGF0dXNBY3Rpb25zQ2VsbChyb3csIHRhc2spXG5cbiAgICBpZiAoIWV4cGFuZGVkKVxuICAgICAgcmV0dXJuXG5cbiAgICBmb3IgKGNvbnN0IHN1YnRhc2sgb2Ygc3VidGFza3MpXG4gICAgICB0aGlzLnJlbmRlclJvdyh0Ym9keSwgc3VidGFzaywgYWxsVGFza3MsIGRlcHRoICsgMSlcblxuICAgIGlmICh0aGlzLmFjdGl2ZVRhYiA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIGNvbnN0IGFkZFN1YlJvdyA9IHRib2R5LmNyZWF0ZUVsKCd0cicsIHsgY2xzOiAndGFyZWFzLWFkZC1yb3cnIH0pXG4gICAgICBhZGRTdWJSb3cuY3JlYXRlRWwoJ3RkJylcbiAgICAgIGFkZFN1YlJvdy5jcmVhdGVFbCgndGQnKVxuXG4gICAgICBjb25zdCBhZGRTdWJDZWxsID0gYWRkU3ViUm93LmNyZWF0ZUVsKCd0ZCcsIHsgYXR0cjogeyBjb2xzcGFuOiAnMTAnIH0gfSlcbiAgICAgIGFkZFN1YkNlbGwuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHsoZGVwdGggKyAxKSAqIDI0ICsgOH1weGBcblxuICAgICAgY29uc3QgYWRkU3VidGFzayA9IGFkZFN1YkNlbGwuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICcrIFN1YnRhcmVhJywgY2xzOiAndGFyZWFzLWFkZC1saW5rJyB9KVxuICAgICAgYWRkU3VidGFzay5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIG5ldyBOZXdUYXNrTW9kYWwodGhpcy5hcHAsIHRoaXMucGx1Z2luLCB0YXNrLmVxdWlwbywgdGFzay5maWxlLmJhc2VuYW1lKS5vcGVuKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckRyYWdDZWxsKHJvdzogSFRNTEVsZW1lbnQsIHRib2R5OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0sIGFsbFRhc2tzOiBUYXNrSXRlbVtdLCBkZXB0aDogbnVtYmVyKSB7XG4gICAgY29uc3QgZHJhZ0NlbGwgPSByb3cuY3JlYXRlRWwoJ3RkJywgeyBjbHM6ICd0YXJlYXMtY2VsbC1kcmFnJyB9KVxuICAgIGRyYWdDZWxsLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAn4qCB4qCB4qCBJywgY2xzOiAndGFyZWFzLWRyYWctaGFuZGxlJyB9KVxuXG4gICAgcm93LmRyYWdnYWJsZSA9IHRydWVcblxuICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGRhdGFUcmFuc2ZlciA9IGV2ZW50LmRhdGFUcmFuc2ZlclxuICAgICAgaWYgKCFkYXRhVHJhbnNmZXIpXG4gICAgICAgIHJldHVyblxuXG4gICAgICB0aGlzLmRyYWdQYXRoID0gdGFzay5maWxlLnBhdGhcbiAgICAgIHRoaXMuZHJhZ0RlcHRoID0gZGVwdGhcbiAgICAgIHRoaXMuZHJhZ1BhcmVudCA9IHRhc2sucGFyZW50XG4gICAgICByb3cuYWRkQ2xhc3MoJ3RhcmVhcy1yb3ctZHJhZ2dpbmcnKVxuICAgICAgZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfSlcblxuICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldFJvd0RyYWdTdGF0ZSh0Ym9keSwgcm93KVxuICAgIH0pXG5cbiAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghdGhpcy5jYW5Ecm9wT25Sb3codGFzaywgZGVwdGgpKVxuICAgICAgICByZXR1cm5cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIpXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG5cbiAgICAgIHRib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJlYXMtcm93LWRyYWctb3ZlcicpLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmVhcy1yb3ctZHJhZy1vdmVyJykpXG4gICAgICByb3cuYWRkQ2xhc3MoJ3RhcmVhcy1yb3ctZHJhZy1vdmVyJylcbiAgICB9KVxuXG4gICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsICgpID0+IHtcbiAgICAgIHJvdy5yZW1vdmVDbGFzcygndGFyZWFzLXJvdy1kcmFnLW92ZXInKVxuICAgIH0pXG5cbiAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNhbkRyb3BPblJvdyh0YXNrLCBkZXB0aCkpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgcm93LnJlbW92ZUNsYXNzKCd0YXJlYXMtcm93LWRyYWctb3ZlcicpXG5cbiAgICAgIGlmICghdGhpcy5kcmFnUGF0aClcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGlmIChkZXB0aCA9PT0gMClcbiAgICAgICAgYXdhaXQgdGhpcy5yZW9yZGVyVGFzayh0aGlzLmRyYWdQYXRoLCB0YXNrLmZpbGUucGF0aCwgYWxsVGFza3MpXG4gICAgICBlbHNlXG4gICAgICAgIGF3YWl0IHRoaXMucmVvcmRlclN1YnRhc2sodGhpcy5kcmFnUGF0aCwgdGFzay5maWxlLnBhdGgsIGFsbFRhc2tzKVxuXG4gICAgICB0aGlzLnJlc2V0Um93RHJhZ1N0YXRlKHRib2R5LCByb3cpXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyVG9nZ2xlQ2VsbChyb3c6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSwgaGFzU3VidGFza3M6IGJvb2xlYW4sIGV4cGFuZGVkOiBib29sZWFuLCBkZXB0aDogbnVtYmVyKSB7XG4gICAgY29uc3QgdG9nZ2xlQ2VsbCA9IHJvdy5jcmVhdGVFbCgndGQnLCB7IGNsczogJ3RhcmVhcy1jZWxsLXRvZ2dsZScgfSlcblxuICAgIGlmIChkZXB0aCAhPT0gMClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgdG9nZ2xlID0gdG9nZ2xlQ2VsbC5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgIHRleHQ6IGV4cGFuZGVkID8gJ+KWvCcgOiAn4pa2JyxcbiAgICAgIGNsczogYHRhcmVhcy1zdWJ0YXNrLXRvZ2dsZSR7aGFzU3VidGFza3MgPyAnJyA6ICcgdGFyZWFzLXRvZ2dsZS1lbXB0eSd9YCxcbiAgICB9KVxuXG4gICAgdG9nZ2xlLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgIGlmIChleHBhbmRlZClcbiAgICAgICAgdGhpcy5leHBhbmRlZFRhc2tzLmRlbGV0ZSh0YXNrLmZpbGUucGF0aClcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5leHBhbmRlZFRhc2tzLmFkZCh0YXNrLmZpbGUucGF0aClcblxuICAgICAgdGhpcy5yZW5kZXIoKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyVGFza05hbWVDZWxsKHJvdzogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtLCBkZXB0aDogbnVtYmVyKSB7XG4gICAgY29uc3QgY2VsbCA9IHJvdy5jcmVhdGVFbCgndGQnLCB7IGNsczogJ3RhcmVhcy1jZWxsLW5hbWUnIH0pXG4gICAgY2VsbC5zdHlsZS5wYWRkaW5nTGVmdCA9IGAke2RlcHRoICogMjQgKyA4fXB4YFxuXG4gICAgY29uc3QgdGl0bGVXcmFwID0gY2VsbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtdGFzay10aXRsZS13cmFwJyB9KVxuXG4gICAgaWYgKGRlcHRoID4gMClcbiAgICAgIHRpdGxlV3JhcC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJ+KUlCAnLCBjbHM6ICd0YXJlYXMtc3VidGFzay1pbmRlbnQnIH0pXG5cbiAgICBjb25zdCBsaW5rID0gdGl0bGVXcmFwLmNyZWF0ZUVsKCdhJywgeyB0ZXh0OiB0YXNrLnRhcmVhLCBjbHM6ICd0YXJlYXMtdGFzay1saW5rJyB9KVxuICAgIGxpbmsuc2V0QXR0cigndGl0bGUnLCB0YXNrLnRhcmVhKVxuICAgIGxpbmsub25jbGljayA9ICgpID0+IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQodGFzay5maWxlLnBhdGgsICcnLCB0cnVlKVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJTdGF0dXNDZWxsKHJvdzogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgY2VsbCA9IHJvdy5jcmVhdGVFbCgndGQnLCB7IGNsczogJ3RhcmVhcy1jZWxsLWVzdGFkbycgfSlcbiAgICB0aGlzLnJlbmRlclN0YXR1c0JhZGdlKGNlbGwsIHRhc2spXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclN0YXR1c0JhZGdlKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3Qgc3RhdHVzQ2xhc3MgPSB0aGlzLmdldFN0YXR1c0NsYXNzTmFtZSh0YXNrLmVzdGFkbylcbiAgICBjb25zdCBiYWRnZSA9IGNvbnRhaW5lci5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgIHRleHQ6IHRhc2suZXN0YWRvLFxuICAgICAgY2xzOiBgdGFyZWFzLWVzdGFkbyB0YXJlYXMtZXN0YWRvLSR7c3RhdHVzQ2xhc3N9YCxcbiAgICB9KVxuXG4gICAgYmFkZ2Uub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHNob3dEcm9wZG93bihiYWRnZSwgRVNUQURPUywgdGFzay5lc3RhZG8sIGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcGx5U3RhdGVUcmFuc2l0aW9uKHRhc2ssIHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclN0YXR1c0JhbmQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb250YWluZXIuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IHRhc2suZXN0YWRvLCBjbHM6ICd0YXJlYXMtY2FyZC1zaWRlLWJhbmQtdGV4dCcgfSlcbiAgICBjb250YWluZXIub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHNob3dEcm9wZG93bihjb250YWluZXIsIEVTVEFET1MsIHRhc2suZXN0YWRvLCBhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHBseVN0YXRlVHJhbnNpdGlvbih0YXNrLCB2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJQcmlvcml0eUJhbmQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb250YWluZXIuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IHRhc2sucHJpb3JpZGFkLCBjbHM6ICd0YXJlYXMtY2FyZC1zaWRlLWJhbmQtdGV4dCcgfSlcbiAgICBjb250YWluZXIub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHNob3dEcm9wZG93bihjb250YWluZXIsIFBSSU9SSURBREVTLCB0YXNrLnByaW9yaWRhZCwgYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IHByaW9yaWRhZDogdmFsdWUgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJDYXJkU3VidGFza0xpc3QoY2FyZDogSFRNTEVsZW1lbnQsIHN1YnRhc2tzOiBUYXNrSXRlbVtdKSB7XG4gICAgY29uc3QgbGlzdCA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWNhcmQtc3VidGFzay1saXN0JyB9KVxuXG4gICAgZm9yIChjb25zdCBzdWJ0YXNrIG9mIHN1YnRhc2tzKSB7XG4gICAgICBjb25zdCByb3cgPSBsaXN0LmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLXN1YnRhc2stcm93JyB9KVxuICAgICAgY29uc3QgY2hlY2tlZCA9IHN1YnRhc2suZXN0YWRvID09PSAnRmluYWxpemFkYSdcblxuICAgICAgY29uc3QgY2hlY2tib3ggPSByb3cuY3JlYXRlRWwoJ2lucHV0Jywge1xuICAgICAgICBjbHM6ICd0YXJlYXMtY2FyZC1zdWJ0YXNrLWNoZWNrJyxcbiAgICAgICAgYXR0cjogeyB0eXBlOiAnY2hlY2tib3gnIH0sXG4gICAgICB9KVxuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGNoZWNrZWRcblxuICAgICAgY2hlY2tib3gub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgfVxuXG4gICAgICBjaGVja2JveC5vbmNoYW5nZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBjb25zdCBuZXh0U3RhdHVzID0gY2hlY2tib3guY2hlY2tlZCA/ICdGaW5hbGl6YWRhJyA6ICdQZW5kaWVudGUnXG4gICAgICAgIGlmIChzdWJ0YXNrLmVzdGFkbyA9PT0gbmV4dFN0YXR1cylcbiAgICAgICAgICByZXR1cm5cblxuICAgICAgICBhd2FpdCB0aGlzLmFwcGx5U3RhdGVUcmFuc2l0aW9uKHN1YnRhc2ssIG5leHRTdGF0dXMsIHVuZGVmaW5lZCwgeyBtb3ZlRmlsZTogZmFsc2UgfSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGl0bGUgPSByb3cuY3JlYXRlRWwoJ2EnLCB7XG4gICAgICAgIHRleHQ6IHN1YnRhc2sudGFyZWEsXG4gICAgICAgIGNsczogYHRhcmVhcy1jYXJkLXN1YnRhc2stdGl0bGUke2NoZWNrZWQgPyAnIGlzLWRvbmUnIDogJyd9YCxcbiAgICAgIH0pXG4gICAgICB0aXRsZS5zZXRBdHRyKCd0aXRsZScsIHN1YnRhc2sudGFyZWEpXG4gICAgICB0aXRsZS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoc3VidGFzay5maWxlLnBhdGgsICcnLCB0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb21tZW50QnV0dG9uID0gcm93LmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ3RhcmVhcy1jYXJkLWNvbW1lbnQtYnRuIHRhcmVhcy1jYXJkLXN1YnRhc2stY29tbWVudC1idG4nIH0pXG4gICAgICBjb21tZW50QnV0dG9uLnNldEF0dHIoJ2FyaWEtbGFiZWwnLCAnQWdyZWdhciBjb21lbnRhcmlvJylcbiAgICAgIGNvbW1lbnRCdXR0b24uc2V0QXR0cigndGl0bGUnLCAnQWdyZWdhciBjb21lbnRhcmlvJylcbiAgICAgIG9ic2lkaWFuLnNldEljb24oY29tbWVudEJ1dHRvbiwgJ3Njcm9sbC10ZXh0JylcbiAgICAgIGNvbW1lbnRCdXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBuZXcgQWRkVGFza0NvbW1lbnRNb2RhbCh0aGlzLmFwcCwgc3VidGFzaykub3BlbigpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJDYXJkUHJvZ3Jlc3NCYW5kKGNhcmQ6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnN0IGJhbmQgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLXByb2dyZXNzLWJhbmQnIH0pXG4gICAgY29uc3QgZmlsbCA9IGJhbmQuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWNhcmQtcHJvZ3Jlc3MtYmFuZC1maWxsJyB9KVxuICAgIGNvbnN0IHRleHQgPSBiYW5kLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLXByb2dyZXNzLWJhbmQtdGV4dCcgfSlcbiAgICBjb25zdCBkZWRpY2F0ZWRBbmRFc3RpbWF0ZWRUZXh0ID0gYCR7dGhpcy5mb3JtYXREZWNpbWFsKHRhc2suZGVkaWNhZG8pfS8ke3RoaXMuZm9ybWF0RGVjaW1hbCh0YXNrLmVzdGltYWNpb24pfWBcbiAgICBjb25zdCBkZXZpYXRpb25UZXh0ID0gYCArLT4gJHt0aGlzLmZvcm1hdERlY2ltYWwodGFzay5kZXN2aW8pfWBcbiAgICBjb25zdCB0ZXh0VmFsdWUgPSB0ZXh0LmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgY2xzOiAndGFyZWFzLWNhcmQtcHJvZ3Jlc3MtYmFuZC10ZXh0LXZhbHVlIHRhcmVhcy1jYXJkLXByb2dyZXNzLWJhbmQtdGV4dC1lZGl0YWJsZScsXG4gICAgICB0ZXh0OiBkZWRpY2F0ZWRBbmRFc3RpbWF0ZWRUZXh0LFxuICAgIH0pXG4gICAgdGV4dFZhbHVlLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICd0YXJlYXMtY2FyZC1wcm9ncmVzcy1iYW5kLXRleHQtZGV2aWF0aW9uJywgdGV4dDogZGV2aWF0aW9uVGV4dCB9KVxuICAgIHRleHRWYWx1ZS5zZXRBdHRyKCd0aXRsZScsIGAke3RoaXMuZm9ybWF0RGVjaW1hbCh0YXNrLmRlZGljYWRvKX0gaCAvICR7dGhpcy5mb3JtYXREZWNpbWFsKHRhc2suZXN0aW1hY2lvbil9IGggKy0+ICR7dGhpcy5mb3JtYXREZWNpbWFsKHRhc2suZGVzdmlvKX0gaGApXG4gICAgdGV4dFZhbHVlLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0aGlzLmVkaXRDYXJkRGVkaWNhdGVkVmFsdWUoYmFuZCwgdGV4dFZhbHVlLCB0YXNrKVxuICAgIH1cblxuICAgIGNvbnN0IHByb2dyZXNzUGVyY2VudCA9IHRhc2suZXN0aW1hY2lvbiA+IDBcbiAgICAgID8gKHRhc2suZGVkaWNhZG8gLyB0YXNrLmVzdGltYWNpb24pICogMTAwXG4gICAgICA6IDBcblxuICAgIGNvbnN0IGlzT3ZlcmZsb3cgPSBwcm9ncmVzc1BlcmNlbnQgPiAxMDBcbiAgICBsZXQgdmlzaWJsZVBlcmNlbnQgPSBpc092ZXJmbG93XG4gICAgICA/IHByb2dyZXNzUGVyY2VudCAlIDEwMFxuICAgICAgOiBwcm9ncmVzc1BlcmNlbnRcblxuICAgIGlmIChpc092ZXJmbG93ICYmIHZpc2libGVQZXJjZW50ID09PSAwKVxuICAgICAgdmlzaWJsZVBlcmNlbnQgPSAxMDBcblxuICAgIGNvbnN0IGNsYW1wZWRQZXJjZW50ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCB2aXNpYmxlUGVyY2VudCkpXG4gICAgZmlsbC5zdHlsZS53aWR0aCA9IGAke2NsYW1wZWRQZXJjZW50fSVgXG5cbiAgICBpZiAoaXNPdmVyZmxvdylcbiAgICAgIGJhbmQuYWRkQ2xhc3MoJ2lzLW92ZXJmbG93JylcbiAgfVxuXG4gIHByaXZhdGUgZWRpdENhcmREZWRpY2F0ZWRWYWx1ZShiYW5kOiBIVE1MRWxlbWVudCwgdGV4dDogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgaWYgKGJhbmQucXVlcnlTZWxlY3RvcignLnRhcmVhcy1jYXJkLXByb2dyZXNzLWlucHV0JykpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IGlucHV0ID0gYmFuZC5jcmVhdGVFbCgnaW5wdXQnLCB7IGNsczogJ3RhcmVhcy1jYXJkLXByb2dyZXNzLWlucHV0JyB9KVxuICAgIGlucHV0LnR5cGUgPSAnbnVtYmVyJ1xuICAgIGlucHV0Lm1pbiA9ICcwJ1xuICAgIGlucHV0LnN0ZXAgPSAnMC4wMSdcbiAgICBpbnB1dC52YWx1ZSA9IHRoaXMuZm9ybWF0RGVjaW1hbCh0YXNrLmRlZGljYWRvKVxuXG4gICAgdGV4dC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcbiAgICBpbnB1dC5mb2N1cygpXG4gICAgaW5wdXQuc2VsZWN0KClcblxuICAgIGNvbnN0IGNsb3NlRWRpdG9yID0gYXN5bmMgKHNhdmU6IGJvb2xlYW4pID0+IHtcbiAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IHRoaXMucGFyc2VEZWNpbWFsKGlucHV0LnZhbHVlKVxuICAgICAgaW5wdXQucmVtb3ZlKClcbiAgICAgIHRleHQuc3R5bGUudmlzaWJpbGl0eSA9ICcnXG5cbiAgICAgIGlmICghc2F2ZSB8fCBuZXh0VmFsdWUgPT09IHRhc2suZGVkaWNhZG8pXG4gICAgICAgIHJldHVyblxuXG4gICAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBkZWRpY2FkbzogbmV4dFZhbHVlIH0pXG4gICAgfVxuXG4gICAgaW5wdXQub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9XG5cbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgdm9pZCBjbG9zZUVkaXRvcih0cnVlKVxuICAgIH0pXG5cbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKVxuICAgICAgICBpbnB1dC5ibHVyKClcblxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB2b2lkIGNsb3NlRWRpdG9yKGZhbHNlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclN0YXR1c0FjdGlvbnNDZWxsKHJvdzogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgY2VsbCA9IHJvdy5jcmVhdGVFbCgndGQnLCB7IGNsczogJ3RhcmVhcy1jZWxsLWFjdGlvbnMnIH0pXG4gICAgdGhpcy5yZW5kZXJTdGF0dXNBY3Rpb25zKGNlbGwsIHRhc2spXG4gIH1cblxuICBwcml2YXRlIGdldFN0YXR1c0NsYXNzTmFtZShzdGF0dXM6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN0YXR1cy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJy0nKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcmlvcml0eUNsYXNzTmFtZShwcmlvcml0eTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcHJpb3JpdHkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csICctJylcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU3RhdHVzQWN0aW9ucyhjb250YWluZXI6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXN0YXR1cy1hY3Rpb25zJyB9KVxuXG4gICAgY29uc3QgcHJvZ3Jlc3NBY3Rpb24gPSB0YXNrLmVzdGFkbyA9PT0gJ0VuIHByb2dyZXNvJ1xuICAgICAgPyB7IGxhYmVsOiAnUGFyYXInLCBuZXh0U3RhdHVzOiAnUGVuZGllbnRlJyB9XG4gICAgICA6IHsgbGFiZWw6ICdJbmljaWFyJywgbmV4dFN0YXR1czogJ0VuIHByb2dyZXNvJyB9XG5cbiAgICBjb25zdCBzdGF0dXNBY3Rpb25zID0gW1xuICAgICAgeyBpZDogJ2Rpc21pc3MnLCBsYWJlbDogJ0Rlc2VzdGltYXInLCBuZXh0U3RhdHVzOiAnQ2FuY2VsYWRhJywgY2xzOiAnaXMtZGlzbWlzcycgfSxcbiAgICAgIHsgaWQ6ICdzdGFydC1zdG9wJywgLi4ucHJvZ3Jlc3NBY3Rpb24sIGNsczogJ2lzLXN0YXJ0LXN0b3AnIH0sXG4gICAgICB7IGlkOiAnZmluaXNoJywgbGFiZWw6ICdGaW5hbGl6YXInLCBuZXh0U3RhdHVzOiAnRmluYWxpemFkYScsIGNsczogJ2lzLWZpbmlzaCcgfSxcbiAgICAgIHsgaWQ6ICdibG9jaycsIGxhYmVsOiAnQmxvcXVlYXInLCBuZXh0U3RhdHVzOiAnQmxvcXVlYWRhJywgY2xzOiAnaXMtYmxvY2snIH0sXG4gICAgXVxuXG4gICAgZm9yIChjb25zdCBhY3Rpb24gb2Ygc3RhdHVzQWN0aW9ucykge1xuICAgICAgY29uc3QgYnV0dG9uID0gYWN0aW9ucy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgICB0ZXh0OiBhY3Rpb24ubGFiZWwsXG4gICAgICAgIGNsczogJ3RhcmVhcy1zdGF0dXMtYWN0aW9uLWJ0bicsXG4gICAgICB9KVxuICAgICAgYnV0dG9uLmFkZENsYXNzKGFjdGlvbi5jbHMpXG5cbiAgICAgIGlmICh0YXNrLmVzdGFkbyA9PT0gYWN0aW9uLm5leHRTdGF0dXMpXG4gICAgICAgIGJ1dHRvbi5hZGRDbGFzcygnaXMtYWN0aXZlJylcblxuICAgICAgYnV0dG9uLm9uY2xpY2sgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICBpZiAodGFzay5lc3RhZG8gPT09IGFjdGlvbi5uZXh0U3RhdHVzKVxuICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIGF3YWl0IHRoaXMuYXBwbHlTdGF0dXNBY3Rpb24odGFzaywgYWN0aW9uLmlkLCBhY3Rpb24ubmV4dFN0YXR1cylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB1cmdlbnRCdXR0b24gPSBhY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICB0ZXh0OiAnVXJnZW50ZScsXG4gICAgICBjbHM6ICd0YXJlYXMtc3RhdHVzLWFjdGlvbi1idG4nLFxuICAgIH0pXG4gICAgdXJnZW50QnV0dG9uLmFkZENsYXNzKCdpcy11cmdlbnQnKVxuXG4gICAgaWYgKHRhc2sucHJpb3JpZGFkID09PSAnVXJnZW50ZScpXG4gICAgICB1cmdlbnRCdXR0b24uYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpXG5cbiAgICB1cmdlbnRCdXR0b24ub25jbGljayA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGlmICh0YXNrLnByaW9yaWRhZCA9PT0gJ1VyZ2VudGUnKVxuICAgICAgICByZXR1cm5cblxuICAgICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgcHJpb3JpZGFkOiAnVXJnZW50ZScgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGFwcGx5U3RhdHVzQWN0aW9uKHRhc2s6IFRhc2tJdGVtLCBhY3Rpb25JZDogc3RyaW5nLCBuZXh0U3RhdHVzOiBzdHJpbmcpIHtcbiAgICBpZiAoYWN0aW9uSWQgPT09ICdzdGFydC1zdG9wJykge1xuICAgICAgaWYgKHRhc2suZXN0YWRvID09PSAnRW4gcHJvZ3Jlc28nKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwbHlTdGF0ZVRyYW5zaXRpb24odGFzaywgbmV4dFN0YXR1cylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuYXBwbHlTdGF0ZVRyYW5zaXRpb24odGFzaywgbmV4dFN0YXR1cywge1xuICAgICAgICAuLi50aGlzLmJ1aWxkU3RhdGVDaGFuZ2VVcGRhdGVzKHRhc2ssIG5leHRTdGF0dXMpLFxuICAgICAgICBmZWNoYUluaWNpbzogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChhY3Rpb25JZCA9PT0gJ2ZpbmlzaCcpIHtcbiAgICAgIGNvbnN0IGVuZERhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICBjb25zdCBzdGFydERhdGUgPSBwYXJzZVRhc2tEYXRlKHRhc2suZmVjaGFJbmljaW8pXG4gICAgICBjb25zdCBkZWRpY2F0ZWRIb3VycyA9IHN0YXJ0RGF0ZVxuICAgICAgICA/IHRoaXMucm91bmRUb1R3bygoZW5kRGF0ZS5nZXRUaW1lKCkgLSBzdGFydERhdGUuZ2V0VGltZSgpKSAvICgxMDAwICogNjAgKiA2MCkpXG4gICAgICAgIDogMFxuXG4gICAgICBjb25zdCB1cGRhdGVzOiBQYXJ0aWFsPFRhc2tGcm9udG1hdHRlcj4gPSB7XG4gICAgICAgIGVzdGFkbzogbmV4dFN0YXR1cyxcbiAgICAgICAgZmVjaGFGaW46IGVuZERhdGUudG9JU09TdHJpbmcoKSxcbiAgICAgICAgZGVkaWNhZG86IGRlZGljYXRlZEhvdXJzLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXN0YXJ0RGF0ZSlcbiAgICAgICAgdXBkYXRlcy5mZWNoYUluaWNpbyA9IGVuZERhdGUudG9JU09TdHJpbmcoKVxuXG4gICAgICBpZiAodGFzay5lc3RpbWFjaW9uID09PSAwKVxuICAgICAgICB1cGRhdGVzLmVzdGltYWNpb24gPSBkZWRpY2F0ZWRIb3Vyc1xuXG4gICAgICBhd2FpdCB0aGlzLmFwcGx5U3RhdGVUcmFuc2l0aW9uKHRhc2ssIG5leHRTdGF0dXMsIHVwZGF0ZXMpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLmFwcGx5U3RhdGVUcmFuc2l0aW9uKHRhc2ssIG5leHRTdGF0dXMpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkU3RhdGVDaGFuZ2VVcGRhdGVzKHRhc2s6IFRhc2tJdGVtLCBuZXh0U3RhdHVzOiBzdHJpbmcpOiBQYXJ0aWFsPFRhc2tGcm9udG1hdHRlcj4ge1xuICAgIGNvbnN0IHVwZGF0ZXM6IFBhcnRpYWw8VGFza0Zyb250bWF0dGVyPiA9IHsgZXN0YWRvOiBuZXh0U3RhdHVzIH1cblxuICAgIGlmICh0YXNrLmVzdGFkbyAhPT0gJ0ZpbmFsaXphZGEnIHx8IG5leHRTdGF0dXMgPT09ICdGaW5hbGl6YWRhJylcbiAgICAgIHJldHVybiB1cGRhdGVzXG5cbiAgICBjb25zdCByZW1haW5pbmdIb3VycyA9IHRoaXMucm91bmRUb1R3byh0YXNrLmVzdGltYWNpb24gLSB0YXNrLmRlZGljYWRvKVxuICAgIGlmIChyZW1haW5pbmdIb3VycyA8PSAwKVxuICAgICAgcmV0dXJuIHVwZGF0ZXNcblxuICAgIHVwZGF0ZXMuZmVjaGFGaW4gPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgcmVtYWluaW5nSG91cnMgKiA2MCAqIDYwICogMTAwMCkudG9JU09TdHJpbmcoKVxuICAgIHJldHVybiB1cGRhdGVzXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclRlYW1DZWxsKHJvdzogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtLCBkZXB0aDogbnVtYmVyKSB7XG4gICAgY29uc3QgY2VsbCA9IHJvdy5jcmVhdGVFbCgndGQnKVxuICAgIGlmIChkZXB0aCA+IDApXG4gICAgICByZXR1cm5cblxuICAgIHRoaXMucmVuZGVyVGVhbUJhZGdlKGNlbGwsIHRhc2spXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclRlYW1CYWRnZShjb250YWluZXI6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnN0IHRlYW1Db25maWcgPSB0aGlzLnBsdWdpbi5lcXVpcG9zLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IHRhc2suZXF1aXBvKVxuICAgIGNvbnN0IGJhZGdlID0gY29udGFpbmVyLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgdGV4dDogdGFzay5lcXVpcG8gfHwgJ+KAlCcsXG4gICAgICBjbHM6ICd0YXJlYXMtZXF1aXBvLWJhZGdlJyxcbiAgICB9KVxuXG4gICAgaWYgKHRlYW1Db25maWcpXG4gICAgICBiYWRnZS5zdHlsZS5iYWNrZ3JvdW5kID0gdGVhbUNvbmZpZy5jb2xvclxuXG4gICAgYmFkZ2Uub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMucGx1Z2luLmVxdWlwb3MubWFwKGVxdWlwbyA9PiBlcXVpcG8ubmFtZSlcbiAgICAgIHNob3dEcm9wZG93bihiYWRnZSwgb3B0aW9ucywgdGFzay5lcXVpcG8sIGFzeW5jIChuZXh0VGVhbSkgPT4ge1xuICAgICAgICBjb25zdCBwcmV2aW91c1RlYW0gPSB0YXNrLmVxdWlwb1xuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBlcXVpcG86IG5leHRUZWFtIH0pXG5cbiAgICAgICAgY29uc3Qgc3VidGFza3MgPSBnZXRUYXNrcyh0aGlzLmFwcCkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wYXJlbnQgPT09IHRhc2suZmlsZS5iYXNlbmFtZSlcbiAgICAgICAgZm9yIChjb25zdCBzdWJ0YXNrIG9mIHN1YnRhc2tzKVxuICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayhzdWJ0YXNrLCB7IGVxdWlwbzogbmV4dFRlYW0gfSlcblxuICAgICAgICBhd2FpdCB0aGlzLnJlYmFsYW5jZVRlYW1TY2hlZHVsZShwcmV2aW91c1RlYW0pXG4gICAgICAgIGF3YWl0IHRoaXMucmViYWxhbmNlVGVhbVNjaGVkdWxlKG5leHRUZWFtKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclByaW9yaXR5Q2VsbChyb3c6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnN0IGNlbGwgPSByb3cuY3JlYXRlRWwoJ3RkJywgeyBjbHM6ICd0YXJlYXMtY2VsbC1wcmlvcmlkYWQnIH0pXG4gICAgdGhpcy5yZW5kZXJQcmlvcml0eUJhZGdlKGNlbGwsIHRhc2spXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclByaW9yaXR5QmFkZ2UoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBwcmlvcml0eUNsYXNzID0gdGFzay5wcmlvcmlkYWQudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IHVyZ2VudEFjdGl2ZSA9IHRhc2sucHJpb3JpZGFkID09PSAnVXJnZW50ZScgJiYgdGFzay5lc3RhZG8gIT09ICdGaW5hbGl6YWRhJ1xuXG4gICAgY29uc3QgYmFkZ2UgPSBjb250YWluZXIuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICB0ZXh0OiB0YXNrLnByaW9yaWRhZCxcbiAgICAgIGNsczogYHRhcmVhcy1wcmlvcmlkYWQgdGFyZWFzLXByaW9yaWRhZC0ke3ByaW9yaXR5Q2xhc3N9JHt1cmdlbnRBY3RpdmUgPyAnIHRhcmVhcy11cmdlbnRlLWFjdGl2YScgOiAnJ31gLFxuICAgIH0pXG5cbiAgICBiYWRnZS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgc2hvd0Ryb3Bkb3duKGJhZGdlLCBQUklPUklEQURFUywgdGFzay5wcmlvcmlkYWQsIGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBwcmlvcmlkYWQ6IHZhbHVlIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyRGVkaWNhdGVkQ2VsbChyb3c6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnN0IGNlbGwgPSByb3cuY3JlYXRlRWwoJ3RkJywgeyBjbHM6ICd0YXJlYXMtY2VsbC1udW0nIH0pXG4gICAgY29uc3QgZWRpdGFibGUgPSBjZWxsLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiB0aGlzLmZvcm1hdERlY2ltYWwodGFzay5kZWRpY2FkbyksIGNsczogJ3RhcmVhcy1lZGl0YWJsZScgfSlcblxuICAgIGVkaXRhYmxlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmVkaXROdW1iZXJDZWxsKGVkaXRhYmxlLCB0YXNrLmRlZGljYWRvLCBhc3luYyB2YWx1ZSA9PiB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBkZWRpY2FkbzogdmFsdWUgfSkpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJFc3RpbWF0ZWRDZWxsKHJvdzogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgY2VsbCA9IHJvdy5jcmVhdGVFbCgndGQnLCB7IGNsczogJ3RhcmVhcy1jZWxsLW51bScgfSlcbiAgICBjb25zdCBlZGl0YWJsZSA9IGNlbGwuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IHRoaXMuZm9ybWF0RGVjaW1hbCh0YXNrLmVzdGltYWNpb24pLCBjbHM6ICd0YXJlYXMtZWRpdGFibGUnIH0pXG5cbiAgICBlZGl0YWJsZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5lZGl0TnVtYmVyQ2VsbChlZGl0YWJsZSwgdGFzay5lc3RpbWFjaW9uLCBhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgZXN0aW1hY2lvbjogdmFsdWUgfSlcbiAgICAgICAgYXdhaXQgdGhpcy5yZWJhbGFuY2VUZWFtU2NoZWR1bGUodGFzay5lcXVpcG8pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU3RhcnREYXRlQ2VsbChyb3c6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIHJvdy5jcmVhdGVFbCgndGQnLCB7IGNsczogJ3RhcmVhcy1jZWxsLWRhdGUnLCB0ZXh0OiB0aGlzLmZvcm1hdFRhc2tEYXRlKHRhc2suZmVjaGFJbmljaW8pIH0pXG4gIH1cblxuICBwcml2YXRlIHJlbmRlckVuZERhdGVDZWxsKHJvdzogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtZGF0ZScsIHRleHQ6IHRoaXMuZm9ybWF0VGFza0RhdGUodGFzay5mZWNoYUZpbikgfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUGVyY2VudENlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBwZXJjZW50ID0gdGhpcy5jYWxjdWxhdGVQcm9ncmVzc1BlcmNlbnQodGFzaylcblxuICAgIGNvbnN0IGNlbGwgPSByb3cuY3JlYXRlRWwoJ3RkJywgeyBjbHM6ICd0YXJlYXMtY2VsbC1wY3QnIH0pXG4gICAgY2VsbC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogYCR7cGVyY2VudH0gJWAsIGNsczogJ3RhcmVhcy1wY3QtdGV4dCcgfSlcblxuICAgIGNvbnN0IGRvdCA9IGNlbGwuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ3RhcmVhcy1wY3QtZG90JyB9KVxuICAgIGlmIChwZXJjZW50ID49IDEwMClcbiAgICAgIGRvdC5hZGRDbGFzcygnZnVsbCcpXG4gICAgZWxzZSBpZiAocGVyY2VudCA+IDApXG4gICAgICBkb3QuYWRkQ2xhc3MoJ3BhcnRpYWwnKVxuICB9XG5cbiAgcHJpdmF0ZSBlZGl0TnVtYmVyQ2VsbChcbiAgICBzcGFuOiBIVE1MU3BhbkVsZW1lbnQsXG4gICAgY3VycmVudFZhbHVlOiBudW1iZXIsXG4gICAgb25TYXZlOiAobmV4dFZhbHVlOiBudW1iZXIpID0+IFByb21pc2U8dm9pZD4sXG4gICkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnR5cGUgPSAnbnVtYmVyJ1xuICAgIGlucHV0LmNsYXNzTmFtZSA9ICd0YXJlYXMtaW5saW5lLWlucHV0J1xuICAgIGlucHV0LnZhbHVlID0gdGhpcy5mb3JtYXREZWNpbWFsKGN1cnJlbnRWYWx1ZSlcbiAgICBpbnB1dC5taW4gPSAnMCdcbiAgICBpbnB1dC5zdGVwID0gJzAuMDEnXG5cbiAgICBzcGFuLnJlcGxhY2VXaXRoKGlucHV0KVxuICAgIGlucHV0LmZvY3VzKClcbiAgICBpbnB1dC5zZWxlY3QoKVxuXG4gICAgY29uc3QgZmluaXNoID0gKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlRGVjaW1hbChpbnB1dC52YWx1ZSlcbiAgICAgIHZvaWQgb25TYXZlKHZhbHVlKVxuICAgIH1cblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmaW5pc2gpXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJylcbiAgICAgICAgaW5wdXQuYmx1cigpXG5cbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gdGhpcy5mb3JtYXREZWNpbWFsKGN1cnJlbnRWYWx1ZSlcbiAgICAgICAgaW5wdXQuYmx1cigpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VEZWNpbWFsKHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IHBhcnNlZCA9IE51bWJlci5wYXJzZUZsb2F0KHZhbHVlKVxuICAgIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VkKSB8fCBwYXJzZWQgPCAwKVxuICAgICAgcmV0dXJuIDBcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKHBhcnNlZCAqIDEwMCkgLyAxMDBcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0RGVjaW1hbCh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZURlY2ltYWwoU3RyaW5nKHZhbHVlKSkudG9GaXhlZCgyKVxuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRUYXNrRGF0ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBkYXRlID0gcGFyc2VUYXNrRGF0ZSh2YWx1ZSlcbiAgICBpZiAoIWRhdGUpXG4gICAgICByZXR1cm4gJ+KAlCdcblxuICAgIGNvbnN0IGRheSA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKVxuICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJylcbiAgICBjb25zdCBob3VyID0gU3RyaW5nKGRhdGUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgJzAnKVxuICAgIGNvbnN0IG1pbnV0ZSA9IFN0cmluZyhkYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKVxuXG4gICAgcmV0dXJuIGAke2RheX0vJHttb250aH0gJHtob3VyfToke21pbnV0ZX1gXG4gIH1cblxuICBwcml2YXRlIHJvdW5kVG9Ud28odmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkgfHwgdmFsdWUgPD0gMClcbiAgICAgIHJldHVybiAwXG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDBcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlUHJvZ3Jlc3NQZXJjZW50KHRhc2s6IFRhc2tJdGVtKTogbnVtYmVyIHtcbiAgICBjb25zdCB0b3RhbCA9IHRhc2suZXN0aW1hY2lvbiB8fCAwXG4gICAgaWYgKHRvdGFsIDw9IDApXG4gICAgICByZXR1cm4gMFxuXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKHRhc2suZGVkaWNhZG8gLyB0b3RhbCkgKiAxMDApXG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENhcmREcmFnSGFuZGxlcnMoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgY2FyZDogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtLCBhbGxUYXNrczogVGFza0l0ZW1bXSkge1xuICAgIGNhcmQuZHJhZ2dhYmxlID0gdHJ1ZVxuXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGRhdGFUcmFuc2ZlciA9IGV2ZW50LmRhdGFUcmFuc2ZlclxuICAgICAgaWYgKCFkYXRhVHJhbnNmZXIpXG4gICAgICAgIHJldHVyblxuXG4gICAgICB0aGlzLmRyYWdQYXRoID0gdGFzay5maWxlLnBhdGhcbiAgICAgIHRoaXMuZHJhZ0RlcHRoID0gMFxuICAgICAgdGhpcy5kcmFnUGFyZW50ID0gdGFzay5wYXJlbnRcbiAgICAgIGNhcmQuYWRkQ2xhc3MoJ3RhcmVhcy10YXNrLWNhcmQtZHJhZ2dpbmcnKVxuICAgICAgZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfSlcblxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHtcbiAgICAgIHRoaXMucmVzZXRDYXJkRHJhZ1N0YXRlKGNvbnRhaW5lciwgY2FyZClcbiAgICB9KVxuXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNhbkRyb3BPblJvdyh0YXNrLCAwKSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyKVxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJ1xuXG4gICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy10YXNrLWNhcmQtZHJhZy1vdmVyJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgndGFyZWFzLXRhc2stY2FyZC1kcmFnLW92ZXInKSlcbiAgICAgIGNhcmQuYWRkQ2xhc3MoJ3RhcmVhcy10YXNrLWNhcmQtZHJhZy1vdmVyJylcbiAgICB9KVxuXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoKSA9PiB7XG4gICAgICBjYXJkLnJlbW92ZUNsYXNzKCd0YXJlYXMtdGFzay1jYXJkLWRyYWctb3ZlcicpXG4gICAgfSlcblxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNhbkRyb3BPblJvdyh0YXNrLCAwKSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBjYXJkLnJlbW92ZUNsYXNzKCd0YXJlYXMtdGFzay1jYXJkLWRyYWctb3ZlcicpXG5cbiAgICAgIGlmICghdGhpcy5kcmFnUGF0aClcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGF3YWl0IHRoaXMucmVvcmRlclRhc2sodGhpcy5kcmFnUGF0aCwgdGFzay5maWxlLnBhdGgsIGFsbFRhc2tzKVxuICAgICAgdGhpcy5yZXNldENhcmREcmFnU3RhdGUoY29udGFpbmVyLCBjYXJkKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGF0dGFjaEdyb3VwRHJhZ0hhbmRsZXJzKHJvb3Q6IEhUTUxFbGVtZW50LCBncm91cDogSFRNTEVsZW1lbnQsIGhlYWRlcjogSFRNTEVsZW1lbnQsIHRlYW1OYW1lOiBzdHJpbmcpIHtcbiAgICBoZWFkZXIuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICfioIHioIHioIEnLCBjbHM6ICd0YXJlYXMtZ3JvdXAtZHJhZy1oYW5kbGUnIH0pXG4gICAgaGVhZGVyLmRyYWdnYWJsZSA9IHRydWVcblxuICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGRhdGFUcmFuc2ZlciA9IGV2ZW50LmRhdGFUcmFuc2ZlclxuICAgICAgaWYgKCFkYXRhVHJhbnNmZXIpXG4gICAgICAgIHJldHVyblxuXG4gICAgICB0aGlzLmRyYWdHcm91cCA9IHRlYW1OYW1lXG4gICAgICBncm91cC5hZGRDbGFzcygndGFyZWFzLWdyb3VwLWRyYWdnaW5nJylcbiAgICAgIGRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH0pXG5cbiAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHtcbiAgICAgIHRoaXMuZHJhZ0dyb3VwID0gbnVsbFxuICAgICAgZ3JvdXAucmVtb3ZlQ2xhc3MoJ3RhcmVhcy1ncm91cC1kcmFnZ2luZycpXG4gICAgICByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJlYXMtZ3JvdXAtZHJhZy1vdmVyJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgndGFyZWFzLWdyb3VwLWRyYWctb3ZlcicpKVxuICAgIH0pXG5cbiAgICBncm91cC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRyYWdHcm91cCB8fCB0aGlzLmRyYWdHcm91cCA9PT0gdGVhbU5hbWUpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZWFzLWdyb3VwLWRyYWctb3ZlcicpLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmVhcy1ncm91cC1kcmFnLW92ZXInKSlcbiAgICAgIGdyb3VwLmFkZENsYXNzKCd0YXJlYXMtZ3JvdXAtZHJhZy1vdmVyJylcbiAgICB9KVxuXG4gICAgZ3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQucmVsYXRlZFRhcmdldCBpbnN0YW5jZW9mIE5vZGUgJiYgZ3JvdXAuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBncm91cC5yZW1vdmVDbGFzcygndGFyZWFzLWdyb3VwLWRyYWctb3ZlcicpXG4gICAgfSlcblxuICAgIGdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBncm91cC5yZW1vdmVDbGFzcygndGFyZWFzLWdyb3VwLWRyYWctb3ZlcicpXG5cbiAgICAgIGlmICghdGhpcy5kcmFnR3JvdXAgfHwgdGhpcy5kcmFnR3JvdXAgPT09IHRlYW1OYW1lKVxuICAgICAgICByZXR1cm5cblxuICAgICAgdGhpcy5yZW9yZGVyR3JvdXAodGhpcy5kcmFnR3JvdXAsIHRlYW1OYW1lKVxuICAgICAgdGhpcy5kcmFnR3JvdXAgPSBudWxsXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVvcmRlckdyb3VwKGRyYWdnZWROYW1lOiBzdHJpbmcsIHRhcmdldE5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnBsdWdpbi5lcXVpcG9zXG4gICAgY29uc3QgZnJvbUluZGV4ID0gY3VycmVudC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm5hbWUgPT09IGRyYWdnZWROYW1lKVxuICAgIGNvbnN0IHRvSW5kZXggPSBjdXJyZW50LmZpbmRJbmRleChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gdGFyZ2V0TmFtZSlcblxuICAgIGlmIChmcm9tSW5kZXggPCAwIHx8IHRvSW5kZXggPCAwKVxuICAgICAgcmV0dXJuXG5cbiAgICB0aGlzLnBsdWdpbi5lcXVpcG9zID0gcmVvcmRlckxpc3QoY3VycmVudCwgZnJvbUluZGV4LCB0b0luZGV4KVxuICAgIHZvaWQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKClcbiAgICB0aGlzLnJlbmRlcigpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlb3JkZXJUYXNrKGRyYWdnZWRQYXRoOiBzdHJpbmcsIHRhcmdldFBhdGg6IHN0cmluZywgYWxsVGFza3M6IFRhc2tJdGVtW10pIHtcbiAgICBjb25zdCBkcmFnZ2VkID0gYWxsVGFza3MuZmluZCh0YXNrID0+IHRhc2suZmlsZS5wYXRoID09PSBkcmFnZ2VkUGF0aClcbiAgICBjb25zdCB0YXJnZXQgPSBhbGxUYXNrcy5maW5kKHRhc2sgPT4gdGFzay5maWxlLnBhdGggPT09IHRhcmdldFBhdGgpXG4gICAgaWYgKCFkcmFnZ2VkIHx8ICF0YXJnZXQpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHNpYmxpbmdzID0gYWxsVGFza3NcbiAgICAgIC5maWx0ZXIodGFzayA9PiAhdGFzay5wYXJlbnQgJiYgdGFzay5lcXVpcG8gPT09IGRyYWdnZWQuZXF1aXBvKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKVxuXG4gICAgY29uc3QgZnJvbUluZGV4ID0gc2libGluZ3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5maWxlLnBhdGggPT09IGRyYWdnZWRQYXRoKVxuICAgIGNvbnN0IHRvSW5kZXggPSBzaWJsaW5ncy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gdGFyZ2V0UGF0aClcblxuICAgIGNvbnN0IG5leHRPcmRlciA9IHJlb3JkZXJMaXN0KHNpYmxpbmdzLCBmcm9tSW5kZXgsIHRvSW5kZXgpXG4gICAgYXdhaXQgcGVyc2lzdFRhc2tPcmRlcihuZXh0T3JkZXIsIGFzeW5jICh0YXNrLCBvcmRlcikgPT4gdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgb3JkZXIgfSkpXG4gICAgYXdhaXQgdGhpcy5yZWJhbGFuY2VUZWFtU2NoZWR1bGUoZHJhZ2dlZC5lcXVpcG8pXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlb3JkZXJTdWJ0YXNrKGRyYWdnZWRQYXRoOiBzdHJpbmcsIHRhcmdldFBhdGg6IHN0cmluZywgYWxsVGFza3M6IFRhc2tJdGVtW10pIHtcbiAgICBjb25zdCBkcmFnZ2VkID0gYWxsVGFza3MuZmluZCh0YXNrID0+IHRhc2suZmlsZS5wYXRoID09PSBkcmFnZ2VkUGF0aClcbiAgICBjb25zdCB0YXJnZXQgPSBhbGxUYXNrcy5maW5kKHRhc2sgPT4gdGFzay5maWxlLnBhdGggPT09IHRhcmdldFBhdGgpXG4gICAgaWYgKCFkcmFnZ2VkIHx8ICF0YXJnZXQpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHNpYmxpbmdzID0gYWxsVGFza3NcbiAgICAgIC5maWx0ZXIodGFzayA9PiB0YXNrLnBhcmVudCA9PT0gZHJhZ2dlZC5wYXJlbnQpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpXG5cbiAgICBjb25zdCBmcm9tSW5kZXggPSBzaWJsaW5ncy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gZHJhZ2dlZFBhdGgpXG4gICAgY29uc3QgdG9JbmRleCA9IHNpYmxpbmdzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSB0YXJnZXRQYXRoKVxuXG4gICAgY29uc3QgbmV4dE9yZGVyID0gcmVvcmRlckxpc3Qoc2libGluZ3MsIGZyb21JbmRleCwgdG9JbmRleClcbiAgICBhd2FpdCBwZXJzaXN0VGFza09yZGVyKG5leHRPcmRlciwgYXN5bmMgKHRhc2ssIG9yZGVyKSA9PiB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBvcmRlciB9KSlcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgdXBkYXRlVGFzayh0YXNrOiBUYXNrSXRlbSwgdXBkYXRlczogUGFydGlhbDxUYXNrRnJvbnRtYXR0ZXI+KSB7XG4gICAgYXdhaXQgdXBkYXRlRnJvbnRtYXR0ZXIodGhpcy5hcHAsIHRhc2suZmlsZSwgdXBkYXRlcylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgYXBwbHlTdGF0ZVRyYW5zaXRpb24oXG4gICAgdGFzazogVGFza0l0ZW0sXG4gICAgbmV4dFN0YXR1czogc3RyaW5nLFxuICAgIGV4cGxpY2l0VXBkYXRlcz86IFBhcnRpYWw8VGFza0Zyb250bWF0dGVyPixcbiAgICBvcHRpb25zPzogeyBtb3ZlRmlsZT86IGJvb2xlYW4sIHN5bmNTdWJ0YXNrc1dpdGhQYXJlbnQ/OiBib29sZWFuIH0sXG4gICkge1xuICAgIGNvbnN0IHVwZGF0ZXMgPSBleHBsaWNpdFVwZGF0ZXMgPz8gdGhpcy5idWlsZFN0YXRlQ2hhbmdlVXBkYXRlcyh0YXNrLCBuZXh0U3RhdHVzKVxuICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayh0YXNrLCB1cGRhdGVzKVxuXG4gICAgY29uc3Qgc2hvdWxkTW92ZUZpbGUgPSBvcHRpb25zPy5tb3ZlRmlsZSA/PyB0cnVlXG4gICAgY29uc3Qgc2hvdWxkU3luY1N1YnRhc2tzID0gb3B0aW9ucz8uc3luY1N1YnRhc2tzV2l0aFBhcmVudCA/PyB0cnVlXG4gICAgY29uc3QgaXNJbkNvbXBsZXRlZEZvbGRlciA9IGlzVGFza0luQ29tcGxldGVkRm9sZGVyKHRhc2suZmlsZS5wYXRoKVxuICAgIGlmIChzaG91bGRNb3ZlRmlsZSAmJiBuZXh0U3RhdHVzID09PSAnRmluYWxpemFkYScgJiYgIWlzSW5Db21wbGV0ZWRGb2xkZXIpXG4gICAgICBhd2FpdCBtb3ZlVGFza1RvQ29tcGxldGVkRm9sZGVyKHRoaXMuYXBwLCB0YXNrLmZpbGUsIEJvb2xlYW4odGFzay5wYXJlbnQpKVxuXG4gICAgaWYgKHNob3VsZE1vdmVGaWxlICYmIG5leHRTdGF0dXMgIT09ICdGaW5hbGl6YWRhJyAmJiBpc0luQ29tcGxldGVkRm9sZGVyKVxuICAgICAgYXdhaXQgbW92ZVRhc2tUb0FjdGl2ZUZvbGRlcih0aGlzLmFwcCwgdGFzay5maWxlLCBCb29sZWFuKHRhc2sucGFyZW50KSlcblxuICAgIGlmIChzaG91bGRNb3ZlRmlsZSAmJiBzaG91bGRTeW5jU3VidGFza3MgJiYgIXRhc2sucGFyZW50KSB7XG4gICAgICBpZiAobmV4dFN0YXR1cyA9PT0gJ0VuIHByb2dyZXNvJylcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdWJ0YXNrc1N0YXR1c0ZvclBhcmVudCh0YXNrLmZpbGUuYmFzZW5hbWUsICdFbiBwcm9ncmVzbycpXG5cbiAgICAgIGlmIChuZXh0U3RhdHVzID09PSAnRmluYWxpemFkYScpXG4gICAgICAgIGF3YWl0IHRoaXMubW92ZVN1YnRhc2tzRm9yUGFyZW50KHRhc2suZmlsZS5iYXNlbmFtZSwgdHJ1ZSlcblxuICAgICAgaWYgKG5leHRTdGF0dXMgIT09ICdGaW5hbGl6YWRhJyAmJiBpc0luQ29tcGxldGVkRm9sZGVyKVxuICAgICAgICBhd2FpdCB0aGlzLm1vdmVTdWJ0YXNrc0ZvclBhcmVudCh0YXNrLmZpbGUuYmFzZW5hbWUsIGZhbHNlKVxuICAgIH1cblxuICAgIGlmIChuZXh0U3RhdHVzID09PSAnRmluYWxpemFkYScgfHwgaXNJbkNvbXBsZXRlZEZvbGRlcilcbiAgICAgIGF3YWl0IHRoaXMucmViYWxhbmNlVGVhbVNjaGVkdWxlKHRhc2suZXF1aXBvKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBtb3ZlU3VidGFza3NGb3JQYXJlbnQocGFyZW50VGFza05hbWU6IHN0cmluZywgdG9Db21wbGV0ZWQ6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBzdWJ0YXNrcyA9IGdldFRhc2tzKHRoaXMuYXBwKS5maWx0ZXIoaXRlbSA9PiBpdGVtLnBhcmVudCA9PT0gcGFyZW50VGFza05hbWUpXG5cbiAgICBmb3IgKGNvbnN0IHN1YnRhc2sgb2Ygc3VidGFza3MpIHtcbiAgICAgIGlmICh0b0NvbXBsZXRlZCkge1xuICAgICAgICBpZiAoc3VidGFzay5lc3RhZG8gIT09ICdGaW5hbGl6YWRhJylcbiAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2soc3VidGFzaywgeyBlc3RhZG86ICdGaW5hbGl6YWRhJyB9KVxuXG4gICAgICAgIGF3YWl0IG1vdmVUYXNrVG9Db21wbGV0ZWRGb2xkZXIodGhpcy5hcHAsIHN1YnRhc2suZmlsZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBhd2FpdCBtb3ZlVGFza1RvQWN0aXZlRm9sZGVyKHRoaXMuYXBwLCBzdWJ0YXNrLmZpbGUsIHRydWUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyB1cGRhdGVTdWJ0YXNrc1N0YXR1c0ZvclBhcmVudChwYXJlbnRUYXNrTmFtZTogc3RyaW5nLCBuZXh0U3RhdHVzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdWJ0YXNrcyA9IGdldFRhc2tzKHRoaXMuYXBwKS5maWx0ZXIoaXRlbSA9PiBpdGVtLnBhcmVudCA9PT0gcGFyZW50VGFza05hbWUpXG5cbiAgICBmb3IgKGNvbnN0IHN1YnRhc2sgb2Ygc3VidGFza3MpIHtcbiAgICAgIGlmIChzdWJ0YXNrLmVzdGFkbyA9PT0gbmV4dFN0YXR1cylcbiAgICAgICAgY29udGludWVcblxuICAgICAgYXdhaXQgdGhpcy5hcHBseVN0YXRlVHJhbnNpdGlvbihzdWJ0YXNrLCBuZXh0U3RhdHVzLCB1bmRlZmluZWQsIHsgc3luY1N1YnRhc2tzV2l0aFBhcmVudDogZmFsc2UgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlYmFsYW5jZVRlYW1TY2hlZHVsZSh0ZWFtTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0ZWFtTmFtZSlcbiAgICAgIHJldHVyblxuXG4gICAgYXdhaXQgcmViYWxhbmNlR3JvdXBFbmREYXRlcyh0aGlzLmFwcCwgdGVhbU5hbWUpXG4gIH1cblxuICBwcml2YXRlIGNhbkRyb3BPblJvdyh0YXJnZXQ6IFRhc2tJdGVtLCBkZXB0aDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5kcmFnUGF0aFxuICAgICAgJiYgdGhpcy5kcmFnUGF0aCAhPT0gdGFyZ2V0LmZpbGUucGF0aFxuICAgICAgJiYgdGhpcy5kcmFnRGVwdGggPT09IGRlcHRoXG4gICAgICAmJiB0aGlzLmRyYWdQYXJlbnQgPT09IHRhcmdldC5wYXJlbnRcbiAgICApXG4gIH1cblxuICBwcml2YXRlIHJlc2V0Um93RHJhZ1N0YXRlKHRib2R5OiBIVE1MRWxlbWVudCwgcm93OiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuZHJhZ1BhdGggPSBudWxsXG4gICAgdGhpcy5kcmFnRGVwdGggPSBudWxsXG4gICAgdGhpcy5kcmFnUGFyZW50ID0gbnVsbFxuICAgIHJvdy5yZW1vdmVDbGFzcygndGFyZWFzLXJvdy1kcmFnZ2luZycpXG4gICAgdGJvZHkucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy1yb3ctZHJhZy1vdmVyJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgndGFyZWFzLXJvdy1kcmFnLW92ZXInKSlcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRDYXJkRHJhZ1N0YXRlKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGNhcmQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5kcmFnUGF0aCA9IG51bGxcbiAgICB0aGlzLmRyYWdEZXB0aCA9IG51bGxcbiAgICB0aGlzLmRyYWdQYXJlbnQgPSBudWxsXG4gICAgY2FyZC5yZW1vdmVDbGFzcygndGFyZWFzLXRhc2stY2FyZC1kcmFnZ2luZycpXG4gICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJlYXMtdGFzay1jYXJkLWRyYWctb3ZlcicpLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmVhcy10YXNrLWNhcmQtZHJhZy1vdmVyJykpXG4gIH1cblxuICBwcml2YXRlIGdldFJvb3RFbCgpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuY29udGFpbmVyRWwuY2hpbGRyZW5bMV1cbiAgICBpZiAoIShyb290IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYXJlYXNWaWV3IHJvb3QgZWxlbWVudCBpcyBub3QgYXZhaWxhYmxlJylcblxuICAgIHJldHVybiByb290XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQge1xuICBDT01QTEVURURfU1VCVEFTS1NfRk9MREVSLFxuICBDT01QTEVURURfVEFTS1NfRk9MREVSLFxuICBERUZBVUxUX0VRVUlQT1MsXG4gIElOREVYX1RBRyxcbiAgTE9DS0VEX0VRVUlQT19OQU1FUyxcbiAgU1VCVEFTS19UQUcsXG4gIFNVQlRBU0tTX0ZPTERFUixcbiAgVEFSRUFTX0ZPTERFUixcbiAgVEFTS19UQUcsXG4gIFZJRVdfVFlQRSxcbn0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdFBvbW9kb3JvU3RhdGUgfSBmcm9tICcuLi9lbmdpbmVzL3BvbW9kb3JvRW5naW5lJ1xuaW1wb3J0IHsgcmVidWlsZFRhc2tDaGlsZExpbmtzLCBzeW5jVGFza1R5cGVUYWdzIH0gZnJvbSAnLi4vZW5naW5lcy9mcm9udG1hdHRlckVuZ2luZSdcbmltcG9ydCB7XG4gIGVuc3VyZUZpbmlzaGVkVGFza0luZGV4RmlsZSxcbiAgZW5zdXJlVGFza0luZGV4RmlsZSxcbiAgcmVtb3ZlVGFza0xpbmtGcm9tRmluaXNoZWRJbmRleCxcbiAgcmVtb3ZlVGFza0xpbmtGcm9tSW5kZXgsXG59IGZyb20gJy4uL2VuZ2luZXMvdGFza0luZGV4RW5naW5lJ1xuaW1wb3J0IHsgTmV3VGFza01vZGFsIH0gZnJvbSAnLi4vbW9kYWxzL05ld1Rhc2tNb2RhbCdcbmltcG9ydCB0eXBlIHsgRXF1aXBvLCBQb21vZG9yb1N0YXRlIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBub3JtYWxpemVFcXVpcG9zRnJvbVNldHRpbmdzLCBub3JtYWxpemVQb21vZG9yb0Zyb21TZXR0aW5ncyB9IGZyb20gJy4uL3V0aWxzL3NldHRpbmdzJ1xuaW1wb3J0IHsgVGFyZWFzVmlldyB9IGZyb20gJy4uL3ZpZXcvVGFyZWFzVmlldydcblxuaW50ZXJmYWNlIEdyYXBoR3JvdXBEZWZpbml0aW9uIHtcbiAgcXVlcnk6IHN0cmluZ1xuICBjb2xvcjogc3RyaW5nXG59XG5cbmV4cG9ydCBjbGFzcyBUYXJlYXNQbHVnaW4gZXh0ZW5kcyBvYnNpZGlhbi5QbHVnaW4ge1xuICBlcXVpcG9zOiBFcXVpcG9bXSA9IFsuLi5ERUZBVUxUX0VRVUlQT1NdXG4gIHBvbW9kb3JvOiBQb21vZG9yb1N0YXRlID0gY3JlYXRlRGVmYXVsdFBvbW9kb3JvU3RhdGUoKVxuXG4gIGFzeW5jIG9ubG9hZCgpIHtcbiAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpXG5cbiAgICB0aGlzLnJlZ2lzdGVyVmlldyhWSUVXX1RZUEUsIGxlYWYgPT4gbmV3IFRhcmVhc1ZpZXcobGVhZiwgdGhpcykpXG5cbiAgICB0aGlzLmFkZFJpYmJvbkljb24oJ2xpc3QtY2hlY2tzJywgJ0FicmlyIFRhcmVhcycsICgpID0+IHRoaXMuYWN0aXZhdGVWaWV3KCkpXG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdvcGVuLXRhcmVhcy12aWV3JyxcbiAgICAgIG5hbWU6ICdBYnJpciB2aXN0YSBkZSBUYXJlYXMnLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuYWN0aXZhdGVWaWV3KCksXG4gICAgfSlcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ25ldy10YXJlYScsXG4gICAgICBuYW1lOiAnTnVldmEgdGFyZWEnLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IG5ldyBOZXdUYXNrTW9kYWwodGhpcy5hcHAsIHRoaXMpLm9wZW4oKSxcbiAgICB9KVxuXG4gICAgYXdhaXQgdGhpcy5lbnN1cmVUYXNrc0ZvbGRlcigpXG4gICAgYXdhaXQgZW5zdXJlVGFza0luZGV4RmlsZSh0aGlzLmFwcClcbiAgICBhd2FpdCBlbnN1cmVGaW5pc2hlZFRhc2tJbmRleEZpbGUodGhpcy5hcHApXG4gICAgYXdhaXQgcmVidWlsZFRhc2tDaGlsZExpbmtzKHRoaXMuYXBwKVxuICAgIGF3YWl0IHN5bmNUYXNrVHlwZVRhZ3ModGhpcy5hcHApXG4gICAgYXdhaXQgdGhpcy5lbnN1cmVPYnNpZGlhbkdyYXBoR3JvdXBzKClcblxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC52YXVsdC5vbignZGVsZXRlJywgKGZpbGUpID0+IHtcbiAgICAgIHZvaWQgdGhpcy5oYW5kbGVGaWxlRGVsZXRlKGZpbGUpXG4gICAgfSkpXG4gIH1cblxuICBhc3luYyBhY3RpdmF0ZVZpZXcoKSB7XG4gICAgY29uc3QgeyB3b3Jrc3BhY2UgfSA9IHRoaXMuYXBwXG4gICAgbGV0IGxlYWYgPSB3b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRSlbMF1cblxuICAgIGlmICghbGVhZikge1xuICAgICAgbGVhZiA9IHdvcmtzcGFjZS5nZXRMZWFmKCd0YWInKVxuICAgICAgYXdhaXQgbGVhZi5zZXRWaWV3U3RhdGUoeyB0eXBlOiBWSUVXX1RZUEUsIGFjdGl2ZTogdHJ1ZSB9KVxuICAgIH1cblxuICAgIHdvcmtzcGFjZS5yZXZlYWxMZWFmKGxlYWYpXG4gIH1cblxuICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IHRoaXMubG9hZERhdGEoKVxuICAgIHRoaXMuZXF1aXBvcyA9IG5vcm1hbGl6ZUVxdWlwb3NGcm9tU2V0dGluZ3MocmF3RGF0YSlcbiAgICB0aGlzLnBvbW9kb3JvID0gbm9ybWFsaXplUG9tb2Rvcm9Gcm9tU2V0dGluZ3MocmF3RGF0YSlcbiAgfVxuXG4gIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcbiAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHtcbiAgICAgIGVxdWlwb3M6IHRoaXMuZXF1aXBvcyxcbiAgICAgIHBvbW9kb3JvOiB0aGlzLnBvbW9kb3JvLFxuICAgIH0pXG4gIH1cblxuICBzZXRQb21vZG9yb1N0YXRlKG5leHRTdGF0ZTogUG9tb2Rvcm9TdGF0ZSkge1xuICAgIHRoaXMucG9tb2Rvcm8gPSB7XG4gICAgICAuLi5uZXh0U3RhdGUsXG4gICAgICBkdXJhdGlvbnM6IHsgLi4ubmV4dFN0YXRlLmR1cmF0aW9ucyB9LFxuICAgIH1cbiAgICB2b2lkIHRoaXMuc2F2ZVNldHRpbmdzKClcbiAgfVxuXG4gIGFkZEVxdWlwbyhuYW1lOiBzdHJpbmcsIGNvbG9yID0gJyM2YjVjZTcnKSB7XG4gICAgaWYgKHRoaXMuZXF1aXBvcy5zb21lKGVxdWlwbyA9PiBlcXVpcG8ubmFtZSA9PT0gbmFtZSkpXG4gICAgICByZXR1cm5cblxuICAgIHRoaXMuZXF1aXBvcy5wdXNoKHsgbmFtZSwgY29sb3IgfSlcbiAgICB2b2lkIHRoaXMuc2F2ZVNldHRpbmdzKClcbiAgfVxuXG4gIHJlbW92ZUVxdWlwbyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoTE9DS0VEX0VRVUlQT19OQU1FUy5pbmNsdWRlcyhuYW1lKSlcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgY29uc3QgbmV4dEVxdWlwb3MgPSB0aGlzLmVxdWlwb3MuZmlsdGVyKGVxdWlwbyA9PiBlcXVpcG8ubmFtZSAhPT0gbmFtZSlcbiAgICBpZiAobmV4dEVxdWlwb3MubGVuZ3RoID09PSB0aGlzLmVxdWlwb3MubGVuZ3RoKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICB0aGlzLmVxdWlwb3MgPSBuZXh0RXF1aXBvc1xuICAgIHZvaWQgdGhpcy5zYXZlU2V0dGluZ3MoKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICB1cGRhdGVFcXVpcG8obmFtZTogc3RyaW5nLCB1cGRhdGVzOiBQYXJ0aWFsPEVxdWlwbz4pIHtcbiAgICBjb25zdCB0ZWFtID0gdGhpcy5lcXVpcG9zLmZpbmQoZXF1aXBvID0+IGVxdWlwby5uYW1lID09PSBuYW1lKVxuICAgIGlmICghdGVhbSlcbiAgICAgIHJldHVyblxuXG4gICAgT2JqZWN0LmFzc2lnbih0ZWFtLCB1cGRhdGVzKVxuICAgIHZvaWQgdGhpcy5zYXZlU2V0dGluZ3MoKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBlbnN1cmVUYXNrc0ZvbGRlcigpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5lbnN1cmVGb2xkZXJQYXRoKFRBUkVBU19GT0xERVIpXG4gICAgICBhd2FpdCB0aGlzLmVuc3VyZUZvbGRlclBhdGgoU1VCVEFTS1NfRk9MREVSKVxuICAgICAgYXdhaXQgdGhpcy5lbnN1cmVGb2xkZXJQYXRoKENPTVBMRVRFRF9UQVNLU19GT0xERVIpXG4gICAgICBhd2FpdCB0aGlzLmVuc3VyZUZvbGRlclBhdGgoQ09NUExFVEVEX1NVQlRBU0tTX0ZPTERFUilcbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShgTm8gc2UgcHVkbyBjcmVhciBsYSBjYXJwZXRhIFwiJHtUQVJFQVNfRk9MREVSfVwiLmApXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBlbnN1cmVGb2xkZXJQYXRoKHBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IHNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLycpLmZpbHRlcihCb29sZWFuKVxuICAgIGxldCBjdXJyZW50UGF0aCA9ICcnXG5cbiAgICBmb3IgKGNvbnN0IHNlZ21lbnQgb2Ygc2VnbWVudHMpIHtcbiAgICAgIGN1cnJlbnRQYXRoID0gY3VycmVudFBhdGggPyBgJHtjdXJyZW50UGF0aH0vJHtzZWdtZW50fWAgOiBzZWdtZW50XG4gICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChjdXJyZW50UGF0aClcblxuICAgICAgaWYgKGV4aXN0aW5nIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZvbGRlcilcbiAgICAgICAgY29udGludWVcblxuICAgICAgaWYgKGV4aXN0aW5nKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4aXN0ZSB1biBhcmNoaXZvIGxsYW1hZG8gXCIke2N1cnJlbnRQYXRofVwiLmApXG5cbiAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihjdXJyZW50UGF0aClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZUZpbGVEZWxldGUoZmlsZTogb2JzaWRpYW4uVEFic3RyYWN0RmlsZSkge1xuICAgIGlmICghKGZpbGUgaW5zdGFuY2VvZiBvYnNpZGlhbi5URmlsZSkpXG4gICAgICByZXR1cm5cblxuICAgIGlmIChmaWxlLmV4dGVuc2lvbiAhPT0gJ21kJylcbiAgICAgIHJldHVyblxuXG4gICAgaWYgKCFmaWxlLnBhdGguc3RhcnRzV2l0aChgJHtUQVJFQVNfRk9MREVSfS9gKSlcbiAgICAgIHJldHVyblxuXG4gICAgYXdhaXQgcmVtb3ZlVGFza0xpbmtGcm9tSW5kZXgodGhpcy5hcHAsIGZpbGUpXG4gICAgYXdhaXQgcmVtb3ZlVGFza0xpbmtGcm9tRmluaXNoZWRJbmRleCh0aGlzLmFwcCwgZmlsZSlcbiAgICBhd2FpdCByZWJ1aWxkVGFza0NoaWxkTGlua3ModGhpcy5hcHApXG4gICAgYXdhaXQgc3luY1Rhc2tUeXBlVGFncyh0aGlzLmFwcClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZW5zdXJlT2JzaWRpYW5HcmFwaEdyb3VwcygpIHtcbiAgICBjb25zdCBkZXNpcmVkR3JvdXBzOiBHcmFwaEdyb3VwRGVmaW5pdGlvbltdID0gW1xuICAgICAgeyBxdWVyeTogYHRhZzojJHtJTkRFWF9UQUd9YCwgY29sb3I6ICcjN2M1Y2U3JyB9LFxuICAgICAgeyBxdWVyeTogYHRhZzojJHtUQVNLX1RBR31gLCBjb2xvcjogJyMyZTZkYjAnIH0sXG4gICAgICB7IHF1ZXJ5OiBgdGFnOiMke1NVQlRBU0tfVEFHfWAsIGNvbG9yOiAnIzAwYjg5NCcgfSxcbiAgICBdXG5cbiAgICBhd2FpdCB0aGlzLmVuc3VyZUdyYXBoQ29uZmlnR3JvdXBzKGRlc2lyZWRHcm91cHMpXG4gICAgdGhpcy5lbnN1cmVSdW50aW1lR3JhcGhHcm91cHMoZGVzaXJlZEdyb3VwcylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZW5zdXJlR3JhcGhDb25maWdHcm91cHMoZGVzaXJlZEdyb3VwczogR3JhcGhHcm91cERlZmluaXRpb25bXSkge1xuICAgIGNvbnN0IGFkYXB0ZXIgPSB0aGlzLmFwcC52YXVsdC5hZGFwdGVyXG4gICAgY29uc3QgY29uZmlnRGlyID0gdGhpcy5hcHAudmF1bHQuY29uZmlnRGlyXG4gICAgY29uc3QgZ3JhcGhDb25maWdQYXRoID0gYCR7Y29uZmlnRGlyfS9ncmFwaC5qc29uYFxuXG4gICAgbGV0IGdyYXBoQ29uZmlnOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9XG4gICAgdHJ5IHtcbiAgICAgIGlmIChhd2FpdCBhZGFwdGVyLmV4aXN0cyhncmFwaENvbmZpZ1BhdGgpKSB7XG4gICAgICAgIGNvbnN0IHJhd0NvbmZpZyA9IGF3YWl0IGFkYXB0ZXIucmVhZChncmFwaENvbmZpZ1BhdGgpXG4gICAgICAgIGdyYXBoQ29uZmlnID0gcmF3Q29uZmlnLnRyaW0oKSA/IEpTT04ucGFyc2UocmF3Q29uZmlnKSA6IHt9XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgIGdyYXBoQ29uZmlnID0ge31cbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50R3JvdXBzID0gQXJyYXkuaXNBcnJheShncmFwaENvbmZpZy5ncm91cHMpID8gZ3JhcGhDb25maWcuZ3JvdXBzIDogW11cbiAgICBncmFwaENvbmZpZy5ncm91cHMgPSB0aGlzLm1lcmdlR3JhcGhHcm91cHMoY3VycmVudEdyb3VwcywgZGVzaXJlZEdyb3VwcylcblxuICAgIGF3YWl0IGFkYXB0ZXIud3JpdGUoZ3JhcGhDb25maWdQYXRoLCBKU09OLnN0cmluZ2lmeShncmFwaENvbmZpZywgbnVsbCwgMikpXG4gIH1cblxuICBwcml2YXRlIGVuc3VyZVJ1bnRpbWVHcmFwaEdyb3VwcyhkZXNpcmVkR3JvdXBzOiBHcmFwaEdyb3VwRGVmaW5pdGlvbltdKSB7XG4gICAgY29uc3QgYXBwV2l0aEludGVybmFscyA9IHRoaXMuYXBwIGFzIHVua25vd24gYXMge1xuICAgICAgaW50ZXJuYWxQbHVnaW5zPzoge1xuICAgICAgICBwbHVnaW5zPzogUmVjb3JkPHN0cmluZywge1xuICAgICAgICAgIGluc3RhbmNlPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgICAgfT5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBncmFwaEluc3RhbmNlID0gYXBwV2l0aEludGVybmFscy5pbnRlcm5hbFBsdWdpbnM/LnBsdWdpbnM/LmdyYXBoPy5pbnN0YW5jZVxuICAgIGlmICghZ3JhcGhJbnN0YW5jZSlcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgY2FuZGlkYXRlSG9sZGVycyA9IFtcbiAgICAgIGdyYXBoSW5zdGFuY2Uub3B0aW9ucyxcbiAgICAgIGdyYXBoSW5zdGFuY2UubG9jYWxHcmFwaE9wdGlvbnMsXG4gICAgICBncmFwaEluc3RhbmNlLmdsb2JhbEdyYXBoT3B0aW9ucyxcbiAgICBdIGFzIEFycmF5PFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkPlxuXG4gICAgZm9yIChjb25zdCBob2xkZXIgb2YgY2FuZGlkYXRlSG9sZGVycykge1xuICAgICAgaWYgKCFob2xkZXIgfHwgIUFycmF5LmlzQXJyYXkoaG9sZGVyLmdyb3VwcykpXG4gICAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGhvbGRlci5ncm91cHMgPSB0aGlzLm1lcmdlR3JhcGhHcm91cHMoaG9sZGVyLmdyb3VwcywgZGVzaXJlZEdyb3VwcylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1lcmdlR3JhcGhHcm91cHMoXG4gICAgY3VycmVudEdyb3VwczogdW5rbm93bltdLFxuICAgIGRlc2lyZWRHcm91cHM6IEdyYXBoR3JvdXBEZWZpbml0aW9uW10sXG4gICk6IEFycmF5PFJlY29yZDxzdHJpbmcsIHVua25vd24+PiB7XG4gICAgY29uc3Qgbm9ybWFsaXplZEN1cnJlbnQgPSBjdXJyZW50R3JvdXBzXG4gICAgICAuZmlsdGVyKChncm91cCk6IGdyb3VwIGlzIFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0+IEJvb2xlYW4oZ3JvdXApICYmIHR5cGVvZiBncm91cCA9PT0gJ29iamVjdCcpXG4gICAgICAuZmlsdGVyKGdyb3VwID0+IHR5cGVvZiBncm91cC5xdWVyeSA9PT0gJ3N0cmluZycpXG5cbiAgICBjb25zdCBieVF1ZXJ5ID0gbmV3IE1hcDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHVua25vd24+PigpXG4gICAgZm9yIChjb25zdCBncm91cCBvZiBub3JtYWxpemVkQ3VycmVudClcbiAgICAgIGJ5UXVlcnkuc2V0KGdyb3VwLnF1ZXJ5IGFzIHN0cmluZywgeyAuLi5ncm91cCB9KVxuXG4gICAgZm9yIChjb25zdCBncm91cCBvZiBkZXNpcmVkR3JvdXBzKSB7XG4gICAgICBjb25zdCBleGlzdGluZyA9IGJ5UXVlcnkuZ2V0KGdyb3VwLnF1ZXJ5KVxuICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgIGlmICghZXhpc3RpbmcuY29sb3IpXG4gICAgICAgICAgZXhpc3RpbmcuY29sb3IgPSBncm91cC5jb2xvclxuICAgICAgICBieVF1ZXJ5LnNldChncm91cC5xdWVyeSwgZXhpc3RpbmcpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGJ5UXVlcnkuc2V0KGdyb3VwLnF1ZXJ5LCB7IHF1ZXJ5OiBncm91cC5xdWVyeSwgY29sb3I6IGdyb3VwLmNvbG9yIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIEFycmF5LmZyb20oYnlRdWVyeS52YWx1ZXMoKSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgVGFyZWFzUGx1Z2luIH0gZnJvbSAnLi90YXNrTWFubmFnZXIvcGx1Z2luL1RhcmVhc1BsdWdpbidcblxuZXhwb3J0IHsgVGFyZWFzUGx1Z2luIH1cbmV4cG9ydCBkZWZhdWx0IFRhcmVhc1BsdWdpblxuIiwiaW1wb3J0IHsgZ2V0RGVmYXVsdEV4cG9ydEZyb21DanMgfSBmcm9tIFwiXHUwMDAwY29tbW9uanNIZWxwZXJzLmpzXCI7XG5pbXBvcnQgeyBfX3JlcXVpcmUgYXMgcmVxdWlyZVRhc2tNYW5uYWdlciB9IGZyb20gXCIvaG9tZS9nYWJyaWVsL0Rlc2t0b3AvcmVwb3MvdGFzay1tYW5uYWdlci9zcmMvdGFza01hbm5hZ2VyLnRzXCI7XG52YXIgdGFza01hbm5hZ2VyRXhwb3J0cyA9IHJlcXVpcmVUYXNrTWFubmFnZXIoKTtcbmV4cG9ydCB7IHRhc2tNYW5uYWdlckV4cG9ydHMgYXMgX19tb2R1bGVFeHBvcnRzIH07XG5leHBvcnQgZGVmYXVsdCAvKkBfX1BVUkVfXyovZ2V0RGVmYXVsdEV4cG9ydEZyb21DanModGFza01hbm5hZ2VyRXhwb3J0cyk7Il0sIm5hbWVzIjpbInJlcXVpcmUkJDAiLCJyZXF1aXJlJCQxIiwibmV4dER1cmF0aW9uIiwicmVxdWlyZSQkMiIsInJlcXVpcmUkJDMiLCJyZXF1aXJlJCQ0IiwicmVxdWlyZSQkNSIsInJlcXVpcmUkJDYiLCJyZXF1aXJlJCQ3IiwicmVxdWlyZSQkOCIsInJlcXVpcmUkJDkiLCJyZXF1aXJlJCQxMCIsInJlcXVpcmUkJDExIiwicmVxdWlyZSQkMTIiLCJyZXF1aXJlJCQxMyIsInJlcXVpcmUkJDE0IiwicmVxdWlyZSQkMTUiLCJyZXF1aXJlJCQxNiIsInJlcXVpcmUkJDE3IiwidGFza01hbm5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUEsSUFBQSxpQkFBQSxHQUFBLEVBQUE7Q0FBQSxRQUFBLENBQUEsaUJBQUEsRUFBQTtHQUFBLHlCQUFBLEVBQUEsTUFBQSx5QkFBQTtHQUFBLHNCQUFBLEVBQUEsTUFBQSxzQkFBQTtHQUFBLGVB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
