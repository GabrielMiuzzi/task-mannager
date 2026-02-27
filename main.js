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
	      this.renderGroup(board, { name: "Sin equipo", color: "#555" }, groups["Sin equipo"], tabTasks, taskPreviewMap);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL3Rhc2tNYW5uYWdlci9jb25zdGFudHMudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL3V0aWxzL2d1YXJkcy50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy9wb21vZG9yb0VuZ2luZS50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy9mcm9udG1hdHRlckVuZ2luZS50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy90YXNrSW5kZXhFbmdpbmUudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL3V0aWxzL3N0YXR1cy50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy90YXNrRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9lbmdpbmVzL3NjaGVkdWxlRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci91dGlscy9zYW5pdGl6ZUZpbGVuYW1lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9tb2RhbHMvTmV3VGFza01vZGFsLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci91dGlscy9zZXR0aW5ncy50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy9jb21wbGV0aW9uRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9lbmdpbmVzL29yZGVyRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9lbmdpbmVzL3BvbW9kb3JvTG9nRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci91aS9jb2xvclBpY2tlci50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvbW9kYWxzL05ld0dyb3VwTW9kYWwudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL21vZGFscy9FZGl0U2VjdGlvbk1vZGFsLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9tb2RhbHMvRWRpdFRhc2tGaWxlTW9kYWwudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL21vZGFscy9BZGRUYXNrQ29tbWVudE1vZGFsLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9tb2RhbHMvUG9tb2Rvcm9QcmVzZXRNb2RhbC50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvbW9kYWxzL1NlbGVjdFBvbW9kb3JvVGFza01vZGFsLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci91aS9kcm9wZG93bi50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvdXRpbHMvZGVib3VuY2UudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL3ZpZXcvVGFyZWFzVmlldy50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvcGx1Z2luL1RhcmVhc1BsdWdpbi50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyLnRzP2NvbW1vbmpzLWVudHJ5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBWSUVXX1RZUEUgPSAndGFyZWFzLXZpZXcnXG5leHBvcnQgY29uc3QgVEFSRUFTX0ZPTERFUiA9ICd0YXNrLW1hbm5hZ2VyJ1xuZXhwb3J0IGNvbnN0IFNVQlRBU0tTX0ZPTERFUiA9IGAke1RBUkVBU19GT0xERVJ9L3N1YlRhc2tzYFxuZXhwb3J0IGNvbnN0IENPTVBMRVRFRF9UQVNLU19GT0xERVIgPSBgJHtUQVJFQVNfRk9MREVSfS9maW5pc2hlZGBcbmV4cG9ydCBjb25zdCBDT01QTEVURURfU1VCVEFTS1NfRk9MREVSID0gYCR7Q09NUExFVEVEX1RBU0tTX0ZPTERFUn0vc3ViVGFza3NgXG5leHBvcnQgY29uc3QgTEVHQUNZX0NPTVBMRVRFRF9UQVNLU19GT0xERVIgPSBgJHtUQVJFQVNfRk9MREVSfS9jb21wbGV0YWRhc2BcbmV4cG9ydCBjb25zdCBUQVNLX0lOREVYX0JBU0VOQU1FID0gJ3Rhc2tJbmRleCdcbmV4cG9ydCBjb25zdCBGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FID0gJ3Rhc2tJbmRleEZpbmlzaGVkJ1xuZXhwb3J0IGNvbnN0IFBPTU9ET1JPX0xPR19CQVNFTkFNRSA9ICdwb21vZG9ybydcbmV4cG9ydCBjb25zdCBJTkRFWF9UQUcgPSAnaW5kZXgnXG5leHBvcnQgY29uc3QgVEFTS19UQUcgPSAndGFzaydcbmV4cG9ydCBjb25zdCBTVUJUQVNLX1RBRyA9ICdzdWItdGFzaydcblxuZXhwb3J0IGNvbnN0IEVTVEFET1MgPSBbJ1BlbmRpZW50ZScsICdDYW5jZWxhZGEnLCAnRW4gcHJvZ3Jlc28nLCAnRmluYWxpemFkYScsICdCbG9xdWVhZGEnXVxuZXhwb3J0IGNvbnN0IFBSSU9SSURBREVTID0gWydCYWphJywgJ01lZGlhJywgJ0FsdGEnLCAnVXJnZW50ZSddXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0VRVUlQT1M6IEFycmF5PHsgbmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nIH0+ID0gW11cbmV4cG9ydCBjb25zdCBMT0NLRURfRVFVSVBPX05BTUVTOiBzdHJpbmdbXSA9IFtdXG5cbmV4cG9ydCBjb25zdCBQUkVTRVRfQ09MT1JTID0gW1xuICAnI2UwNWM1YycsICcjZTA4NTVjJywgJyNkOTdhMWUnLCAnI2M5Yjg0YScsXG4gICcjNGNhZjUwJywgJyMwMGI4OTQnLCAnIzA5ODRlMycsICcjMmU2ZGIwJyxcbiAgJyM3YzVjZTcnLCAnI2ZkNzlhOCcsICcjNjM2ZTcyJywgJyNiMmJlYzMnLFxuXVxuXG5leHBvcnQgY29uc3QgT1JERVJfU1RFUCA9IDEwXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BPTU9ET1JPX1dPUktfTUlOVVRFUyA9IDI1XG5leHBvcnQgY29uc3QgREVGQVVMVF9QT01PRE9ST19TSE9SVF9CUkVBS19NSU5VVEVTID0gNVxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUE9NT0RPUk9fTE9OR19CUkVBS19NSU5VVEVTID0gMTVcbmV4cG9ydCBjb25zdCBQT01PRE9ST19XT1JLX0NZQ0xFU19CRUZPUkVfTE9OR19CUkVBSyA9IDRcbiIsImltcG9ydCB0eXBlIHsgVGFza0Zyb250bWF0dGVyIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlY29yZCh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgcmV0dXJuIEJvb2xlYW4odmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvVGFza0Zyb250bWF0dGVyKHZhbHVlOiB1bmtub3duKTogVGFza0Zyb250bWF0dGVyIHwgbnVsbCB7XG4gIGlmICghaXNSZWNvcmQodmFsdWUpKVxuICAgIHJldHVybiBudWxsXG5cbiAgY29uc3QgZnJvbnRtYXR0ZXI6IFRhc2tGcm9udG1hdHRlciA9IHt9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZS50YXJlYSA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIudGFyZWEgPSB2YWx1ZS50YXJlYVxuICBpZiAodHlwZW9mIHZhbHVlLmRldGFsbGUgPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLmRldGFsbGUgPSB2YWx1ZS5kZXRhbGxlXG4gIGlmICh0eXBlb2YgdmFsdWUuZXN0YWRvID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5lc3RhZG8gPSB2YWx1ZS5lc3RhZG9cbiAgaWYgKHR5cGVvZiB2YWx1ZS5mZWNoYUluaWNpbyA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIuZmVjaGFJbmljaW8gPSB2YWx1ZS5mZWNoYUluaWNpb1xuICBpZiAodHlwZW9mIHZhbHVlLmZlY2hhRmluID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5mZWNoYUZpbiA9IHZhbHVlLmZlY2hhRmluXG4gIGlmICh0eXBlb2YgdmFsdWUuZXF1aXBvID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5lcXVpcG8gPSB2YWx1ZS5lcXVpcG9cbiAgaWYgKHR5cGVvZiB2YWx1ZS5wcmlvcmlkYWQgPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLnByaW9yaWRhZCA9IHZhbHVlLnByaW9yaWRhZFxuICBpZiAodHlwZW9mIHZhbHVlLmRlZGljYWRvID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUuZGVkaWNhZG8gPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLmRlZGljYWRvID0gdmFsdWUuZGVkaWNhZG9cbiAgaWYgKHR5cGVvZiB2YWx1ZS5lc3RpbWFjaW9uID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUuZXN0aW1hY2lvbiA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIuZXN0aW1hY2lvbiA9IHZhbHVlLmVzdGltYWNpb25cbiAgaWYgKHR5cGVvZiB2YWx1ZS5kZXN2aW8gPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWx1ZS5kZXN2aW8gPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLmRlc3ZpbyA9IHZhbHVlLmRlc3Zpb1xuICBpZiAodHlwZW9mIHZhbHVlLnBhcmVudCA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIucGFyZW50ID0gdmFsdWUucGFyZW50XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlLmNoaWxkcykgJiYgdmFsdWUuY2hpbGRzLmV2ZXJ5KGl0ZW0gPT4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSlcbiAgICBmcm9udG1hdHRlci5jaGlsZHMgPSB2YWx1ZS5jaGlsZHNcbiAgZWxzZSBpZiAodHlwZW9mIHZhbHVlLmNoaWxkcyA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIuY2hpbGRzID0gdmFsdWUuY2hpbGRzXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlLnRhZ3MpICYmIHZhbHVlLnRhZ3MuZXZlcnkoaXRlbSA9PiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpKVxuICAgIGZyb250bWF0dGVyLnRhZ3MgPSB2YWx1ZS50YWdzXG4gIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZS50YWdzID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci50YWdzID0gdmFsdWUudGFnc1xuICBpZiAodHlwZW9mIHZhbHVlLm9yZGVyID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUub3JkZXIgPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLm9yZGVyID0gdmFsdWUub3JkZXJcblxuICByZXR1cm4gZnJvbnRtYXR0ZXJcbn1cbiIsImltcG9ydCB7XG4gIERFRkFVTFRfUE9NT0RPUk9fTE9OR19CUkVBS19NSU5VVEVTLFxuICBERUZBVUxUX1BPTU9ET1JPX1NIT1JUX0JSRUFLX01JTlVURVMsXG4gIERFRkFVTFRfUE9NT0RPUk9fV09SS19NSU5VVEVTLFxuICBQT01PRE9ST19XT1JLX0NZQ0xFU19CRUZPUkVfTE9OR19CUkVBSyxcbn0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHR5cGUgeyBQb21vZG9yb0R1cmF0aW9ucywgUG9tb2Rvcm9QaGFzZSwgUG9tb2Rvcm9SdW5TdGF0ZSwgUG9tb2Rvcm9TdGF0ZSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgaXNSZWNvcmQgfSBmcm9tICcuLi91dGlscy9ndWFyZHMnXG5cbmNvbnN0IE1JTl9EVVJBVElPTl9NSU5VVEVTID0gMVxuY29uc3QgTUFYX0RVUkFUSU9OX01JTlVURVMgPSAxODBcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQb21vZG9yb1N0YXRlKCk6IFBvbW9kb3JvU3RhdGUge1xuICBjb25zdCBkdXJhdGlvbnMgPSBjcmVhdGVEZWZhdWx0UG9tb2Rvcm9EdXJhdGlvbnMoKVxuICByZXR1cm4ge1xuICAgIHBoYXNlOiAnd29yaycsXG4gICAgcnVuU3RhdGU6ICdpZGxlJyxcbiAgICByZW1haW5pbmdTZWNvbmRzOiBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyhkdXJhdGlvbnMsICd3b3JrJyksXG4gICAgZW5kVGltZXN0YW1wOiBudWxsLFxuICAgIGNvbXBsZXRlZFdvcmtDeWNsZXM6IDAsXG4gICAgc2VsZWN0ZWRUYXNrUGF0aDogbnVsbCxcbiAgICBpc0RldmlhdGlvbkFjdGl2ZTogZmFsc2UsXG4gICAgZGV2aWF0aW9uU3RhcnRlZEF0OiBudWxsLFxuICAgIGRldmlhdGlvbkJhc2VSZW1haW5pbmdTZWNvbmRzOiAwLFxuICAgIHBoYXNlRGV2aWF0aW9uU2Vjb25kczogMCxcbiAgICBkdXJhdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQb21vZG9yb0R1cmF0aW9ucygpOiBQb21vZG9yb0R1cmF0aW9ucyB7XG4gIHJldHVybiB7XG4gICAgd29ya01pbnV0ZXM6IERFRkFVTFRfUE9NT0RPUk9fV09SS19NSU5VVEVTLFxuICAgIHNob3J0QnJlYWtNaW51dGVzOiBERUZBVUxUX1BPTU9ET1JPX1NIT1JUX0JSRUFLX01JTlVURVMsXG4gICAgbG9uZ0JyZWFrTWludXRlczogREVGQVVMVF9QT01PRE9ST19MT05HX0JSRUFLX01JTlVURVMsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVBvbW9kb3JvU3RhdGUocmF3VmFsdWU6IHVua25vd24pOiBQb21vZG9yb1N0YXRlIHtcbiAgY29uc3QgZmFsbGJhY2sgPSBjcmVhdGVEZWZhdWx0UG9tb2Rvcm9TdGF0ZSgpXG4gIGlmICghaXNSZWNvcmQocmF3VmFsdWUpKVxuICAgIHJldHVybiBmYWxsYmFja1xuXG4gIGNvbnN0IGR1cmF0aW9ucyA9IG5vcm1hbGl6ZVBvbW9kb3JvRHVyYXRpb25zKHJhd1ZhbHVlLmR1cmF0aW9ucylcbiAgY29uc3QgcGhhc2UgPSBub3JtYWxpemVQb21vZG9yb1BoYXNlKHJhd1ZhbHVlLnBoYXNlKVxuICBjb25zdCBydW5TdGF0ZSA9IG5vcm1hbGl6ZVBvbW9kb3JvUnVuU3RhdGUocmF3VmFsdWUucnVuU3RhdGUpXG4gIGNvbnN0IGRlZmF1bHRSZW1haW5pbmcgPSBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyhkdXJhdGlvbnMsIHBoYXNlKVxuICBjb25zdCByZW1haW5pbmdTZWNvbmRzID0gbm9ybWFsaXplU2Vjb25kcyhyYXdWYWx1ZS5yZW1haW5pbmdTZWNvbmRzLCBkZWZhdWx0UmVtYWluaW5nKVxuICBjb25zdCBlbmRUaW1lc3RhbXAgPSB0eXBlb2YgcmF3VmFsdWUuZW5kVGltZXN0YW1wID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNGaW5pdGUocmF3VmFsdWUuZW5kVGltZXN0YW1wKVxuICAgID8gcmF3VmFsdWUuZW5kVGltZXN0YW1wXG4gICAgOiBudWxsXG4gIGNvbnN0IGNvbXBsZXRlZFdvcmtDeWNsZXMgPSB0eXBlb2YgcmF3VmFsdWUuY29tcGxldGVkV29ya0N5Y2xlcyA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzRmluaXRlKHJhd1ZhbHVlLmNvbXBsZXRlZFdvcmtDeWNsZXMpXG4gICAgPyBNYXRoLm1heCgwLCBNYXRoLmZsb29yKHJhd1ZhbHVlLmNvbXBsZXRlZFdvcmtDeWNsZXMpKVxuICAgIDogMFxuICBjb25zdCBzZWxlY3RlZFRhc2tQYXRoID0gdHlwZW9mIHJhd1ZhbHVlLnNlbGVjdGVkVGFza1BhdGggPT09ICdzdHJpbmcnICYmIHJhd1ZhbHVlLnNlbGVjdGVkVGFza1BhdGgudHJpbSgpLmxlbmd0aCA+IDBcbiAgICA/IHJhd1ZhbHVlLnNlbGVjdGVkVGFza1BhdGhcbiAgICA6IG51bGxcbiAgY29uc3QgaXNEZXZpYXRpb25BY3RpdmUgPSBCb29sZWFuKHJhd1ZhbHVlLmlzRGV2aWF0aW9uQWN0aXZlKVxuICBjb25zdCBkZXZpYXRpb25TdGFydGVkQXQgPSB0eXBlb2YgcmF3VmFsdWUuZGV2aWF0aW9uU3RhcnRlZEF0ID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNGaW5pdGUocmF3VmFsdWUuZGV2aWF0aW9uU3RhcnRlZEF0KVxuICAgID8gcmF3VmFsdWUuZGV2aWF0aW9uU3RhcnRlZEF0XG4gICAgOiBudWxsXG4gIGNvbnN0IGRldmlhdGlvbkJhc2VSZW1haW5pbmdTZWNvbmRzID0gbm9ybWFsaXplU2Vjb25kcyhyYXdWYWx1ZS5kZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kcywgMClcbiAgY29uc3QgcGhhc2VEZXZpYXRpb25TZWNvbmRzID0gbm9ybWFsaXplU2Vjb25kcyhyYXdWYWx1ZS5waGFzZURldmlhdGlvblNlY29uZHMsIDApXG5cbiAgcmV0dXJuIHtcbiAgICBwaGFzZSxcbiAgICBydW5TdGF0ZSxcbiAgICByZW1haW5pbmdTZWNvbmRzLFxuICAgIGVuZFRpbWVzdGFtcCxcbiAgICBjb21wbGV0ZWRXb3JrQ3ljbGVzLFxuICAgIHNlbGVjdGVkVGFza1BhdGgsXG4gICAgaXNEZXZpYXRpb25BY3RpdmUsXG4gICAgZGV2aWF0aW9uU3RhcnRlZEF0OiBpc0RldmlhdGlvbkFjdGl2ZSA/IGRldmlhdGlvblN0YXJ0ZWRBdCA6IG51bGwsXG4gICAgZGV2aWF0aW9uQmFzZVJlbWFpbmluZ1NlY29uZHM6IGlzRGV2aWF0aW9uQWN0aXZlID8gZGV2aWF0aW9uQmFzZVJlbWFpbmluZ1NlY29uZHMgOiAwLFxuICAgIHBoYXNlRGV2aWF0aW9uU2Vjb25kcyxcbiAgICBkdXJhdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVBvbW9kb3JvRHVyYXRpb25zKHJhd1ZhbHVlOiB1bmtub3duKTogUG9tb2Rvcm9EdXJhdGlvbnMge1xuICBjb25zdCBmYWxsYmFjayA9IGNyZWF0ZURlZmF1bHRQb21vZG9yb0R1cmF0aW9ucygpXG4gIGlmICghaXNSZWNvcmQocmF3VmFsdWUpKVxuICAgIHJldHVybiBmYWxsYmFja1xuXG4gIHJldHVybiB7XG4gICAgd29ya01pbnV0ZXM6IGNsYW1wTWludXRlcyhyYXdWYWx1ZS53b3JrTWludXRlcywgZmFsbGJhY2sud29ya01pbnV0ZXMpLFxuICAgIHNob3J0QnJlYWtNaW51dGVzOiBjbGFtcE1pbnV0ZXMocmF3VmFsdWUuc2hvcnRCcmVha01pbnV0ZXMsIGZhbGxiYWNrLnNob3J0QnJlYWtNaW51dGVzKSxcbiAgICBsb25nQnJlYWtNaW51dGVzOiBjbGFtcE1pbnV0ZXMocmF3VmFsdWUubG9uZ0JyZWFrTWludXRlcywgZmFsbGJhY2subG9uZ0JyZWFrTWludXRlcyksXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKGR1cmF0aW9uczogUG9tb2Rvcm9EdXJhdGlvbnMsIHBoYXNlOiBQb21vZG9yb1BoYXNlKTogbnVtYmVyIHtcbiAgaWYgKHBoYXNlID09PSAnc2hvcnQtYnJlYWsnKVxuICAgIHJldHVybiBkdXJhdGlvbnMuc2hvcnRCcmVha01pbnV0ZXMgKiA2MFxuXG4gIGlmIChwaGFzZSA9PT0gJ2xvbmctYnJlYWsnKVxuICAgIHJldHVybiBkdXJhdGlvbnMubG9uZ0JyZWFrTWludXRlcyAqIDYwXG5cbiAgcmV0dXJuIGR1cmF0aW9ucy53b3JrTWludXRlcyAqIDYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb21vZG9yb1JlbWFpbmluZ1NlY29uZHMoc3RhdGU6IFBvbW9kb3JvU3RhdGUsIG5vd01zOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAoc3RhdGUucnVuU3RhdGUgIT09ICdydW5uaW5nJyB8fCBzdGF0ZS5lbmRUaW1lc3RhbXAgPT09IG51bGwpXG4gICAgcmV0dXJuIHN0YXRlLnJlbWFpbmluZ1NlY29uZHNcblxuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5jZWlsKChzdGF0ZS5lbmRUaW1lc3RhbXAgLSBub3dNcykgLyAxMDAwKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UG9tb2Rvcm8oc3RhdGU6IFBvbW9kb3JvU3RhdGUsIG5vd01zOiBudW1iZXIpOiBQb21vZG9yb1N0YXRlIHtcbiAgaWYgKHN0YXRlLnJ1blN0YXRlID09PSAncnVubmluZycgfHwgc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUpXG4gICAgcmV0dXJuIHN0YXRlXG5cbiAgY29uc3QgcmVtYWluaW5nU2Vjb25kcyA9IHN0YXRlLnJ1blN0YXRlID09PSAncGF1c2VkJ1xuICAgID8gc3RhdGUucmVtYWluaW5nU2Vjb25kc1xuICAgIDogZ2V0UGhhc2VEdXJhdGlvblNlY29uZHMoc3RhdGUuZHVyYXRpb25zLCBzdGF0ZS5waGFzZSlcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIHJ1blN0YXRlOiAncnVubmluZycsXG4gICAgcmVtYWluaW5nU2Vjb25kcyxcbiAgICBlbmRUaW1lc3RhbXA6IG5vd01zICsgcmVtYWluaW5nU2Vjb25kcyAqIDEwMDAsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdXNlUG9tb2Rvcm8oc3RhdGU6IFBvbW9kb3JvU3RhdGUsIG5vd01zOiBudW1iZXIpOiBQb21vZG9yb1N0YXRlIHtcbiAgaWYgKHN0YXRlLnJ1blN0YXRlICE9PSAncnVubmluZycgfHwgc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUpXG4gICAgcmV0dXJuIHN0YXRlXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBydW5TdGF0ZTogJ3BhdXNlZCcsXG4gICAgcmVtYWluaW5nU2Vjb25kczogZ2V0UG9tb2Rvcm9SZW1haW5pbmdTZWNvbmRzKHN0YXRlLCBub3dNcyksXG4gICAgZW5kVGltZXN0YW1wOiBudWxsLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXN1bWVQb21vZG9ybyhzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgbm93TXM6IG51bWJlcik6IFBvbW9kb3JvU3RhdGUge1xuICBpZiAoc3RhdGUucnVuU3RhdGUgIT09ICdwYXVzZWQnIHx8IHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlKVxuICAgIHJldHVybiBzdGF0ZVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgcnVuU3RhdGU6ICdydW5uaW5nJyxcbiAgICBlbmRUaW1lc3RhbXA6IG5vd01zICsgc3RhdGUucmVtYWluaW5nU2Vjb25kcyAqIDEwMDAsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0UG9tb2Rvcm8oc3RhdGU6IFBvbW9kb3JvU3RhdGUpOiBQb21vZG9yb1N0YXRlIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBydW5TdGF0ZTogJ2lkbGUnLFxuICAgIHJlbWFpbmluZ1NlY29uZHM6IGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKHN0YXRlLmR1cmF0aW9ucywgc3RhdGUucGhhc2UpLFxuICAgIGVuZFRpbWVzdGFtcDogbnVsbCxcbiAgICBpc0RldmlhdGlvbkFjdGl2ZTogZmFsc2UsXG4gICAgZGV2aWF0aW9uU3RhcnRlZEF0OiBudWxsLFxuICAgIGRldmlhdGlvbkJhc2VSZW1haW5pbmdTZWNvbmRzOiAwLFxuICAgIHBoYXNlRGV2aWF0aW9uU2Vjb25kczogMCxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQb21vZG9yb0R1cmF0aW9ucyhzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgZHVyYXRpb25zOiBQb21vZG9yb0R1cmF0aW9ucyk6IFBvbW9kb3JvU3RhdGUge1xuICBpZiAoc3RhdGUucnVuU3RhdGUgIT09ICdpZGxlJylcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgZHVyYXRpb25zOiB7IC4uLmR1cmF0aW9ucyB9IH1cblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGR1cmF0aW9uczogeyAuLi5kdXJhdGlvbnMgfSxcbiAgICByZW1haW5pbmdTZWNvbmRzOiBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyhkdXJhdGlvbnMsIHN0YXRlLnBoYXNlKSxcbiAgICBlbmRUaW1lc3RhbXA6IG51bGwsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkdmFuY2VQb21vZG9yb1N0YXRlKFxuICBzdGF0ZTogUG9tb2Rvcm9TdGF0ZSxcbiAgbm93TXM6IG51bWJlcixcbik6IHsgc3RhdGU6IFBvbW9kb3JvU3RhdGUsIGNvbXBsZXRlZFBoYXNlczogUG9tb2Rvcm9QaGFzZVtdLCB0cmFuc2l0aW9uZWQ6IGJvb2xlYW4gfSB7XG4gIGlmIChzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSB8fCBzdGF0ZS5ydW5TdGF0ZSAhPT0gJ3J1bm5pbmcnIHx8IHN0YXRlLmVuZFRpbWVzdGFtcCA9PT0gbnVsbClcbiAgICByZXR1cm4geyBzdGF0ZSwgY29tcGxldGVkUGhhc2VzOiBbXSwgdHJhbnNpdGlvbmVkOiBmYWxzZSB9XG5cbiAgbGV0IG5leHQgPSB7IC4uLnN0YXRlLCBkdXJhdGlvbnM6IHsgLi4uc3RhdGUuZHVyYXRpb25zIH0gfVxuICBjb25zdCBjb21wbGV0ZWRQaGFzZXM6IFBvbW9kb3JvUGhhc2VbXSA9IFtdXG4gIGxldCB0cmFuc2l0aW9uZWQgPSBmYWxzZVxuXG4gIHdoaWxlIChuZXh0LmVuZFRpbWVzdGFtcCAhPT0gbnVsbCAmJiBuZXh0LmVuZFRpbWVzdGFtcCA8PSBub3dNcykge1xuICAgIGNvbXBsZXRlZFBoYXNlcy5wdXNoKG5leHQucGhhc2UpXG4gICAgdHJhbnNpdGlvbmVkID0gdHJ1ZVxuXG4gICAgaWYgKG5leHQucGhhc2UgPT09ICd3b3JrJykge1xuICAgICAgY29uc3QgY29tcGxldGVkV29ya0N5Y2xlcyA9IG5leHQuY29tcGxldGVkV29ya0N5Y2xlcyArIDFcbiAgICAgIGNvbnN0IG5leHRQaGFzZTogUG9tb2Rvcm9QaGFzZSA9IGNvbXBsZXRlZFdvcmtDeWNsZXMgJSBQT01PRE9ST19XT1JLX0NZQ0xFU19CRUZPUkVfTE9OR19CUkVBSyA9PT0gMFxuICAgICAgICA/ICdsb25nLWJyZWFrJ1xuICAgICAgICA6ICdzaG9ydC1icmVhaydcbiAgICAgIGNvbnN0IG5leHREdXJhdGlvbiA9IGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKG5leHQuZHVyYXRpb25zLCBuZXh0UGhhc2UpXG4gICAgICBuZXh0ID0ge1xuICAgICAgICAuLi5uZXh0LFxuICAgICAgICBwaGFzZTogbmV4dFBoYXNlLFxuICAgICAgICBjb21wbGV0ZWRXb3JrQ3ljbGVzLFxuICAgICAgICBydW5TdGF0ZTogJ3J1bm5pbmcnLFxuICAgICAgICByZW1haW5pbmdTZWNvbmRzOiBuZXh0RHVyYXRpb24sXG4gICAgICAgIGVuZFRpbWVzdGFtcDogKG5leHQuZW5kVGltZXN0YW1wID8/IG5vd01zKSArIG5leHREdXJhdGlvbiAqIDEwMDAsXG4gICAgICB9XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IG5leHREdXJhdGlvbiA9IGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKG5leHQuZHVyYXRpb25zLCAnd29yaycpXG4gICAgbmV4dCA9IHtcbiAgICAgIC4uLm5leHQsXG4gICAgICBwaGFzZTogJ3dvcmsnLFxuICAgICAgcnVuU3RhdGU6ICdydW5uaW5nJyxcbiAgICAgIHJlbWFpbmluZ1NlY29uZHM6IG5leHREdXJhdGlvbixcbiAgICAgIGVuZFRpbWVzdGFtcDogKG5leHQuZW5kVGltZXN0YW1wID8/IG5vd01zKSArIG5leHREdXJhdGlvbiAqIDEwMDAsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVtYWluaW5nU2Vjb25kcyA9IGdldFBvbW9kb3JvUmVtYWluaW5nU2Vjb25kcyhuZXh0LCBub3dNcylcbiAgaWYgKHJlbWFpbmluZ1NlY29uZHMgIT09IG5leHQucmVtYWluaW5nU2Vjb25kcylcbiAgICBuZXh0ID0geyAuLi5uZXh0LCByZW1haW5pbmdTZWNvbmRzIH1cblxuICByZXR1cm4geyBzdGF0ZTogbmV4dCwgY29tcGxldGVkUGhhc2VzLCB0cmFuc2l0aW9uZWQgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGV2aWF0aW9uRWxhcHNlZFNlY29uZHMoc3RhdGU6IFBvbW9kb3JvU3RhdGUsIG5vd01zOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAoIXN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlIHx8IHN0YXRlLmRldmlhdGlvblN0YXJ0ZWRBdCA9PT0gbnVsbClcbiAgICByZXR1cm4gMFxuXG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLmZsb29yKChub3dNcyAtIHN0YXRlLmRldmlhdGlvblN0YXJ0ZWRBdCkgLyAxMDAwKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGVyUG9tb2Rvcm9EZXZpYXRpb24oc3RhdGU6IFBvbW9kb3JvU3RhdGUsIG5vd01zOiBudW1iZXIpOiBQb21vZG9yb1N0YXRlIHtcbiAgaWYgKHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlIHx8IHN0YXRlLnJ1blN0YXRlICE9PSAncnVubmluZycpXG4gICAgcmV0dXJuIHN0YXRlXG5cbiAgY29uc3QgcmVtYWluaW5nU2Vjb25kcyA9IGdldFBvbW9kb3JvUmVtYWluaW5nU2Vjb25kcyhzdGF0ZSwgbm93TXMpXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgcnVuU3RhdGU6ICdwYXVzZWQnLFxuICAgIHJlbWFpbmluZ1NlY29uZHMsXG4gICAgZW5kVGltZXN0YW1wOiBudWxsLFxuICAgIGlzRGV2aWF0aW9uQWN0aXZlOiB0cnVlLFxuICAgIGRldmlhdGlvblN0YXJ0ZWRBdDogbm93TXMsXG4gICAgZGV2aWF0aW9uQmFzZVJlbWFpbmluZ1NlY29uZHM6IHJlbWFpbmluZ1NlY29uZHMsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4aXRQb21vZG9yb0RldmlhdGlvbihcbiAgc3RhdGU6IFBvbW9kb3JvU3RhdGUsXG4gIG5vd01zOiBudW1iZXIsXG4pOiB7IHN0YXRlOiBQb21vZG9yb1N0YXRlLCBlbGFwc2VkU2Vjb25kczogbnVtYmVyLCBjb21wbGV0ZWRXb3JrOiBib29sZWFuLCBvdmVydGltZVNlY29uZHM6IG51bWJlciB9IHtcbiAgaWYgKCFzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSlcbiAgICByZXR1cm4geyBzdGF0ZSwgZWxhcHNlZFNlY29uZHM6IDAsIGNvbXBsZXRlZFdvcms6IGZhbHNlLCBvdmVydGltZVNlY29uZHM6IDAgfVxuXG4gIGNvbnN0IGVsYXBzZWRTZWNvbmRzID0gZ2V0RGV2aWF0aW9uRWxhcHNlZFNlY29uZHMoc3RhdGUsIG5vd01zKVxuICBjb25zdCBiYXNlUmVtYWluaW5nID0gTWF0aC5tYXgoMCwgc3RhdGUuZGV2aWF0aW9uQmFzZVJlbWFpbmluZ1NlY29uZHMpXG5cbiAgY29uc3QgY2xlYXJEZXZpYXRpb24gPSAobmV4dDogUG9tb2Rvcm9TdGF0ZSk6IFBvbW9kb3JvU3RhdGUgPT4gKHtcbiAgICAuLi5uZXh0LFxuICAgIGlzRGV2aWF0aW9uQWN0aXZlOiBmYWxzZSxcbiAgICBkZXZpYXRpb25TdGFydGVkQXQ6IG51bGwsXG4gICAgZGV2aWF0aW9uQmFzZVJlbWFpbmluZ1NlY29uZHM6IDAsXG4gICAgcGhhc2VEZXZpYXRpb25TZWNvbmRzOiBuZXh0LnBoYXNlRGV2aWF0aW9uU2Vjb25kcyArIGVsYXBzZWRTZWNvbmRzLFxuICB9KVxuXG4gIGlmIChzdGF0ZS5waGFzZSAhPT0gJ3dvcmsnKSB7XG4gICAgY29uc3QgcmVtYWluaW5nU2Vjb25kcyA9IE1hdGgubWF4KDAsIGJhc2VSZW1haW5pbmcgLSBlbGFwc2VkU2Vjb25kcylcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IGNsZWFyRGV2aWF0aW9uKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJ1blN0YXRlOiAncnVubmluZycsXG4gICAgICAgIHJlbWFpbmluZ1NlY29uZHMsXG4gICAgICAgIGVuZFRpbWVzdGFtcDogbm93TXMgKyByZW1haW5pbmdTZWNvbmRzICogMTAwMCxcbiAgICAgIH0pLFxuICAgICAgZWxhcHNlZFNlY29uZHMsXG4gICAgICBjb21wbGV0ZWRXb3JrOiBmYWxzZSxcbiAgICAgIG92ZXJ0aW1lU2Vjb25kczogMCxcbiAgICB9XG4gIH1cblxuICBpZiAoZWxhcHNlZFNlY29uZHMgPCBiYXNlUmVtYWluaW5nKSB7XG4gICAgY29uc3QgcmVtYWluaW5nU2Vjb25kcyA9IE1hdGgubWF4KDAsIGJhc2VSZW1haW5pbmcgLSBlbGFwc2VkU2Vjb25kcylcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IGNsZWFyRGV2aWF0aW9uKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJ1blN0YXRlOiAncnVubmluZycsXG4gICAgICAgIHJlbWFpbmluZ1NlY29uZHMsXG4gICAgICAgIGVuZFRpbWVzdGFtcDogbm93TXMgKyByZW1haW5pbmdTZWNvbmRzICogMTAwMCxcbiAgICAgIH0pLFxuICAgICAgZWxhcHNlZFNlY29uZHMsXG4gICAgICBjb21wbGV0ZWRXb3JrOiBmYWxzZSxcbiAgICAgIG92ZXJ0aW1lU2Vjb25kczogMCxcbiAgICB9XG4gIH1cblxuICBjb25zdCBvdmVydGltZVNlY29uZHMgPSBlbGFwc2VkU2Vjb25kcyAtIGJhc2VSZW1haW5pbmdcbiAgY29uc3QgY29tcGxldGVkV29ya0N5Y2xlcyA9IHN0YXRlLmNvbXBsZXRlZFdvcmtDeWNsZXMgKyAxXG4gIGNvbnN0IG5leHRQaGFzZTogUG9tb2Rvcm9QaGFzZSA9IGNvbXBsZXRlZFdvcmtDeWNsZXMgJSBQT01PRE9ST19XT1JLX0NZQ0xFU19CRUZPUkVfTE9OR19CUkVBSyA9PT0gMFxuICAgID8gJ2xvbmctYnJlYWsnXG4gICAgOiAnc2hvcnQtYnJlYWsnXG4gIGNvbnN0IGJhc2VCcmVha1NlY29uZHMgPSBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyhzdGF0ZS5kdXJhdGlvbnMsIG5leHRQaGFzZSlcbiAgY29uc3Qgd29ya0R1cmF0aW9uU2Vjb25kcyA9IE1hdGgubWF4KDEsIGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKHN0YXRlLmR1cmF0aW9ucywgJ3dvcmsnKSlcbiAgY29uc3QgZXh0cmFCcmVha1NlY29uZHMgPSBNYXRoLnJvdW5kKChvdmVydGltZVNlY29uZHMgKiBiYXNlQnJlYWtTZWNvbmRzKSAvIHdvcmtEdXJhdGlvblNlY29uZHMpXG4gIGNvbnN0IG5leHRCcmVha1NlY29uZHMgPSBiYXNlQnJlYWtTZWNvbmRzICsgZXh0cmFCcmVha1NlY29uZHNcblxuICByZXR1cm4ge1xuICAgIHN0YXRlOiBjbGVhckRldmlhdGlvbih7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHBoYXNlOiBuZXh0UGhhc2UsXG4gICAgICBydW5TdGF0ZTogJ3J1bm5pbmcnLFxuICAgICAgY29tcGxldGVkV29ya0N5Y2xlcyxcbiAgICAgIHJlbWFpbmluZ1NlY29uZHM6IG5leHRCcmVha1NlY29uZHMsXG4gICAgICBlbmRUaW1lc3RhbXA6IG5vd01zICsgbmV4dEJyZWFrU2Vjb25kcyAqIDEwMDAsXG4gICAgfSksXG4gICAgZWxhcHNlZFNlY29uZHMsXG4gICAgY29tcGxldGVkV29yazogdHJ1ZSxcbiAgICBvdmVydGltZVNlY29uZHMsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvbW9kb3JvUGhhc2VMYWJlbChwaGFzZTogUG9tb2Rvcm9QaGFzZSk6IHN0cmluZyB7XG4gIGlmIChwaGFzZSA9PT0gJ3Nob3J0LWJyZWFrJylcbiAgICByZXR1cm4gJ0Rlc2NhbnNvIGNvcnRvJ1xuXG4gIGlmIChwaGFzZSA9PT0gJ2xvbmctYnJlYWsnKVxuICAgIHJldHVybiAnRGVzY2Fuc28gbGFyZ28nXG5cbiAgcmV0dXJuICdUcmFiYWpvJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UG9tb2Rvcm9Db3VudGRvd24odG90YWxTZWNvbmRzOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHMgLyA2MClcbiAgY29uc3Qgc2Vjb25kcyA9IHRvdGFsU2Vjb25kcyAlIDYwXG4gIHJldHVybiBgJHtTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgJzAnKX06JHtTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwgJzAnKX1gXG59XG5cbmZ1bmN0aW9uIGNsYW1wTWludXRlcyh2YWx1ZTogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInIHx8ICFOdW1iZXIuaXNGaW5pdGUodmFsdWUpKVxuICAgIHJldHVybiBmYWxsYmFja1xuXG4gIHJldHVybiBNYXRoLm1pbihNQVhfRFVSQVRJT05fTUlOVVRFUywgTWF0aC5tYXgoTUlOX0RVUkFUSU9OX01JTlVURVMsIE1hdGgucm91bmQodmFsdWUpKSlcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUG9tb2Rvcm9QaGFzZSh2YWx1ZTogdW5rbm93bik6IFBvbW9kb3JvUGhhc2Uge1xuICBpZiAodmFsdWUgPT09ICd3b3JrJyB8fCB2YWx1ZSA9PT0gJ3Nob3J0LWJyZWFrJyB8fCB2YWx1ZSA9PT0gJ2xvbmctYnJlYWsnKVxuICAgIHJldHVybiB2YWx1ZVxuXG4gIHJldHVybiAnd29yaydcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUG9tb2Rvcm9SdW5TdGF0ZSh2YWx1ZTogdW5rbm93bik6IFBvbW9kb3JvUnVuU3RhdGUge1xuICBpZiAodmFsdWUgPT09ICdpZGxlJyB8fCB2YWx1ZSA9PT0gJ3J1bm5pbmcnIHx8IHZhbHVlID09PSAncGF1c2VkJylcbiAgICByZXR1cm4gdmFsdWVcblxuICByZXR1cm4gJ2lkbGUnXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNlY29uZHModmFsdWU6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJyB8fCAhTnVtYmVyLmlzRmluaXRlKHZhbHVlKSlcbiAgICByZXR1cm4gZmFsbGJhY2tcblxuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcih2YWx1ZSkpXG59XG4iLCJpbXBvcnQgdHlwZSB7IEFwcCwgVEZpbGUgfSBmcm9tICdvYnNpZGlhbidcblxuaW1wb3J0IHtcbiAgRklOSVNIRURfVEFTS19JTkRFWF9CQVNFTkFNRSxcbiAgSU5ERVhfVEFHLFxuICBTVUJUQVNLX1RBRyxcbiAgU1VCVEFTS1NfRk9MREVSLFxuICBUQVJFQVNfRk9MREVSLFxuICBUQVNLX0lOREVYX0JBU0VOQU1FLFxuICBUQVNLX1RBRyxcbn0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHR5cGUgeyBUYXNrRnJvbnRtYXR0ZXIgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IHRvVGFza0Zyb250bWF0dGVyIH0gZnJvbSAnLi4vdXRpbHMvZ3VhcmRzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRnJvbnRtYXR0ZXIoYXBwOiBBcHAsIGZpbGU6IFRGaWxlLCB1cGRhdGVzOiBQYXJ0aWFsPFRhc2tGcm9udG1hdHRlcj4pIHtcbiAgYXdhaXQgYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcihmaWxlLCAoZm0pID0+IHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh1cGRhdGVzKSlcbiAgICAgIGZtW2tleV0gPSB2YWx1ZVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lVGVhbUluVGFza3MoYXBwOiBBcHAsIG9sZE5hbWU6IHN0cmluZywgbmV3TmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IGZpbGVzID0gYXBwLnZhdWx0XG4gICAgLmdldE1hcmtkb3duRmlsZXMoKVxuICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLnBhdGguc3RhcnRzV2l0aChgJHtUQVJFQVNfRk9MREVSfS9gKSlcblxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBmbSA9IHRvVGFza0Zyb250bWF0dGVyKGFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKT8uZnJvbnRtYXR0ZXIpXG4gICAgaWYgKGZtPy5lcXVpcG8gIT09IG9sZE5hbWUpXG4gICAgICBjb250aW51ZVxuXG4gICAgYXdhaXQgYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcihmaWxlLCAoZnJvbnRtYXR0ZXIpID0+IHtcbiAgICAgIGZyb250bWF0dGVyLmVxdWlwbyA9IG5ld05hbWVcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3VudFRvcExldmVsVGVhbVRhc2tzKGFwcDogQXBwLCB0ZWFtTmFtZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgZmlsZXMgPSBhcHAudmF1bHRcbiAgICAuZ2V0TWFya2Rvd25GaWxlcygpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUucGF0aC5zdGFydHNXaXRoKGAke1RBUkVBU19GT0xERVJ9L2ApKVxuXG4gIGxldCBjb3VudCA9IDBcbiAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgY29uc3QgZm0gPSB0b1Rhc2tGcm9udG1hdHRlcihhcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk/LmZyb250bWF0dGVyKVxuICAgIGlmIChmbT8uZXF1aXBvID09PSB0ZWFtTmFtZSAmJiAhZm0/LnBhcmVudClcbiAgICAgIGNvdW50KytcbiAgfVxuXG4gIHJldHVybiBjb3VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVidWlsZFRhc2tDaGlsZExpbmtzKGFwcDogQXBwKSB7XG4gIGNvbnN0IGZpbGVzID0gYXBwLnZhdWx0XG4gICAgLmdldE1hcmtkb3duRmlsZXMoKVxuICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLnBhdGguc3RhcnRzV2l0aChgJHtUQVJFQVNfRk9MREVSfS9gKSlcbiAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5iYXNlbmFtZSAhPT0gVEFTS19JTkRFWF9CQVNFTkFNRSAmJiBmaWxlLmJhc2VuYW1lICE9PSBGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FKVxuXG4gIGNvbnN0IGNoaWxkTWFwID0gbmV3IE1hcDxzdHJpbmcsIFNldDxzdHJpbmc+PigpXG4gIGNvbnN0IHRhc2tFbnRyaWVzOiBBcnJheTx7IGZpbGU6IFRGaWxlLCB0YXNrTmFtZTogc3RyaW5nIH0+ID0gW11cblxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBmbSA9IGF3YWl0IHJlYWRUYXNrRnJvbnRtYXR0ZXIoYXBwLCBmaWxlKVxuICAgIGlmICghZm0pXG4gICAgICBjb250aW51ZVxuXG4gICAgY29uc3QgdGFza05hbWUgPSAoZm0/LnRhcmVhPy50cmltKCkgfHwgZmlsZS5iYXNlbmFtZSkudHJpbSgpXG4gICAgdGFza0VudHJpZXMucHVzaCh7IGZpbGUsIHRhc2tOYW1lIH0pXG5cbiAgICBjb25zdCBwYXJlbnROYW1lID0gbm9ybWFsaXplUGFyZW50UmVmZXJlbmNlKGZtPy5wYXJlbnQpXG4gICAgaWYgKCFwYXJlbnROYW1lKVxuICAgICAgY29udGludWVcblxuICAgIGNvbnN0IGNoaWxkU2V0ID0gY2hpbGRNYXAuZ2V0KHBhcmVudE5hbWUpID8/IG5ldyBTZXQ8c3RyaW5nPigpXG4gICAgY2hpbGRTZXQuYWRkKGZpbGUuYmFzZW5hbWUpXG4gICAgY2hpbGRNYXAuc2V0KHBhcmVudE5hbWUsIGNoaWxkU2V0KVxuICB9XG5cbiAgZm9yIChjb25zdCBlbnRyeSBvZiB0YXNrRW50cmllcykge1xuICAgIGNvbnN0IHsgZmlsZSwgdGFza05hbWUgfSA9IGVudHJ5XG4gICAgY29uc3QgY2hpbGRCYXNlbmFtZXMgPSBuZXcgU2V0PHN0cmluZz4oW1xuICAgICAgLi4uKGNoaWxkTWFwLmdldChmaWxlLmJhc2VuYW1lKSA/PyBbXSksXG4gICAgICAuLi4oY2hpbGRNYXAuZ2V0KHRhc2tOYW1lKSA/PyBbXSksXG4gICAgXSlcbiAgICBjaGlsZEJhc2VuYW1lcy5kZWxldGUoZmlsZS5iYXNlbmFtZSlcblxuICAgIGNvbnN0IG5leHRDaGlsZExpbmtzID0gQXJyYXkuZnJvbShjaGlsZEJhc2VuYW1lcylcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmxvY2FsZUNvbXBhcmUoYikpXG4gICAgICAubWFwKG5hbWUgPT4gYFtbJHtuYW1lfV1dYClcblxuICAgIGF3YWl0IGFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIoZmlsZSwgKGZtKSA9PiB7XG4gICAgICBmbS5jaGlsZHMgPSBuZXh0Q2hpbGRMaW5rc1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNUYXNrVHlwZVRhZ3MoYXBwOiBBcHApIHtcbiAgY29uc3QgZmlsZXMgPSBhcHAudmF1bHRcbiAgICAuZ2V0TWFya2Rvd25GaWxlcygpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUucGF0aC5zdGFydHNXaXRoKGAke1RBUkVBU19GT0xERVJ9L2ApKVxuXG4gIGNvbnN0IGNsYXNzaWZpY2F0aW9uVGFncyA9IG5ldyBTZXQoW0lOREVYX1RBRywgVEFTS19UQUcsIFNVQlRBU0tfVEFHXSlcbiAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgY29uc3QgbmV4dENsYXNzaWZpY2F0aW9uID0gcmVzb2x2ZUNsYXNzaWZpY2F0aW9uVGFnKGZpbGUpXG5cbiAgICBhd2FpdCBhcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKGZpbGUsIChmcm9udG1hdHRlcikgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFRhZ3MgPSBub3JtYWxpemVUYWdzKGZyb250bWF0dGVyLnRhZ3MpXG4gICAgICBjb25zdCBwcmVzZXJ2ZWRUYWdzID0gY3VycmVudFRhZ3MuZmlsdGVyKHRhZyA9PiAhY2xhc3NpZmljYXRpb25UYWdzLmhhcyh0YWcpKVxuICAgICAgZnJvbnRtYXR0ZXIudGFncyA9IFsuLi5wcmVzZXJ2ZWRUYWdzLCBuZXh0Q2xhc3NpZmljYXRpb25dXG4gICAgfSlcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWFkVGFza0Zyb250bWF0dGVyKGFwcDogQXBwLCBmaWxlOiBURmlsZSk6IFByb21pc2U8VGFza0Zyb250bWF0dGVyIHwgbnVsbD4ge1xuICBjb25zdCBjb250ZW50ID0gYXdhaXQgYXBwLnZhdWx0LmNhY2hlZFJlYWQoZmlsZSlcbiAgY29uc3QgbWF0Y2ggPSBjb250ZW50Lm1hdGNoKC9eLS0tXFxyP1xcbihbXFxzXFxTXSo/KVxccj9cXG4tLS0vKVxuICBpZiAoIW1hdGNoKVxuICAgIHJldHVybiBudWxsXG5cbiAgY29uc3QgcmF3WWFtbCA9IG1hdGNoWzFdXG4gIGNvbnN0IGZyb250bWF0dGVyRGF0YSA9IHBhcnNlU2ltcGxlWWFtbChyYXdZYW1sKVxuICByZXR1cm4gdG9UYXNrRnJvbnRtYXR0ZXIoZnJvbnRtYXR0ZXJEYXRhKVxufVxuXG5mdW5jdGlvbiBwYXJzZVNpbXBsZVlhbWwoeWFtbFRleHQ6IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgY29uc3QgcmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9XG4gIGNvbnN0IGxpbmVzID0geWFtbFRleHQuc3BsaXQoL1xccj9cXG4vKVxuICBsZXQgaW5kZXggPSAwXG5cbiAgd2hpbGUgKGluZGV4IDwgbGluZXMubGVuZ3RoKSB7XG4gICAgY29uc3QgbGluZSA9IGxpbmVzW2luZGV4XVxuICAgIGlmICghbGluZS50cmltKCkpIHtcbiAgICAgIGluZGV4KytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3Qga2V5VmFsdWVNYXRjaCA9IGxpbmUubWF0Y2goL14oW0EtWmEtejAtOV8tXSspOlxccyooLiopJC8pXG4gICAgaWYgKCFrZXlWYWx1ZU1hdGNoKSB7XG4gICAgICBpbmRleCsrXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IFssIGtleSwgcmF3VmFsdWVdID0ga2V5VmFsdWVNYXRjaFxuICAgIGNvbnN0IHRyaW1tZWRWYWx1ZSA9IHJhd1ZhbHVlLnRyaW0oKVxuXG4gICAgaWYgKHRyaW1tZWRWYWx1ZSA9PT0gJycpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gJydcbiAgICAgIGluZGV4KytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKHRyaW1tZWRWYWx1ZSA9PT0gJ1tdJykge1xuICAgICAgcmVzdWx0W2tleV0gPSBbXVxuICAgICAgaW5kZXgrK1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAodHJpbW1lZFZhbHVlLnN0YXJ0c1dpdGgoJ1snKSAmJiB0cmltbWVkVmFsdWUuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgY29uc3QgaW5uZXIgPSB0cmltbWVkVmFsdWUuc2xpY2UoMSwgLTEpLnRyaW0oKVxuICAgICAgaWYgKCFpbm5lcikge1xuICAgICAgICByZXN1bHRba2V5XSA9IFtdXG4gICAgICAgIGluZGV4KytcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgcmVzdWx0W2tleV0gPSBpbm5lci5zcGxpdCgnLCcpLm1hcChpdGVtID0+IHVucXVvdGVZYW1sVmFsdWUoaXRlbS50cmltKCkpKVxuICAgICAgaW5kZXgrK1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAodHJpbW1lZFZhbHVlID09PSAnfCcpIHtcbiAgICAgIGNvbnN0IGJsb2NrTGluZXM6IHN0cmluZ1tdID0gW11cbiAgICAgIGluZGV4KytcbiAgICAgIHdoaWxlIChpbmRleCA8IGxpbmVzLmxlbmd0aCAmJiAvXlxccysvLnRlc3QobGluZXNbaW5kZXhdKSkge1xuICAgICAgICBibG9ja0xpbmVzLnB1c2gobGluZXNbaW5kZXhdLnJlcGxhY2UoL15cXHMrLywgJycpKVxuICAgICAgICBpbmRleCsrXG4gICAgICB9XG4gICAgICByZXN1bHRba2V5XSA9IGJsb2NrTGluZXMuam9pbignXFxuJylcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgcmVzdWx0W2tleV0gPSB1bnF1b3RlWWFtbFZhbHVlKHRyaW1tZWRWYWx1ZSlcbiAgICBpbmRleCsrXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIHVucXVvdGVZYW1sVmFsdWUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICh2YWx1ZS5zdGFydHNXaXRoKCdcIicpICYmIHZhbHVlLmVuZHNXaXRoKCdcIicpKVxuICAgIHJldHVybiB2YWx1ZS5zbGljZSgxLCAtMSkucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG5cbiAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoJ1xcJycpICYmIHZhbHVlLmVuZHNXaXRoKCdcXCcnKSlcbiAgICByZXR1cm4gdmFsdWUuc2xpY2UoMSwgLTEpXG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmVudFJlZmVyZW5jZShwYXJlbnRWYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgY29uc3QgdHJpbW1lZCA9IChwYXJlbnRWYWx1ZSB8fCAnJykudHJpbSgpXG4gIGlmICghdHJpbW1lZClcbiAgICByZXR1cm4gJydcblxuICBjb25zdCBsaW5rTWF0Y2ggPSB0cmltbWVkLm1hdGNoKC9eXFxbXFxbKC4rPylcXF1cXF0kLylcbiAgY29uc3QgcmF3UmVmZXJlbmNlID0gKGxpbmtNYXRjaCA/IGxpbmtNYXRjaFsxXSA6IHRyaW1tZWQpLnRyaW0oKVxuICBjb25zdCB3aXRob3V0QWxpYXMgPSByYXdSZWZlcmVuY2Uuc3BsaXQoJ3wnKVswXS50cmltKClcbiAgY29uc3Qgd2l0aG91dEhlYWRpbmcgPSB3aXRob3V0QWxpYXMuc3BsaXQoJyMnKVswXS50cmltKClcbiAgY29uc3QgYmFzZW5hbWUgPSB3aXRob3V0SGVhZGluZy5zcGxpdCgnLycpLnBvcCgpID8/IHdpdGhvdXRIZWFkaW5nXG4gIHJldHVybiBiYXNlbmFtZS5yZXBsYWNlKC9cXC5tZCQvaSwgJycpLnRyaW0oKVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQ2xhc3NpZmljYXRpb25UYWcoZmlsZTogVEZpbGUpOiBzdHJpbmcge1xuICBpZiAoZmlsZS5iYXNlbmFtZSA9PT0gVEFTS19JTkRFWF9CQVNFTkFNRSB8fCBmaWxlLmJhc2VuYW1lID09PSBGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FKVxuICAgIHJldHVybiBJTkRFWF9UQUdcblxuICBpZiAoZmlsZS5wYXRoLnN0YXJ0c1dpdGgoYCR7U1VCVEFTS1NfRk9MREVSfS9gKSB8fCBmaWxlLnBhdGguaW5jbHVkZXMoJy9zdWJUYXNrcy8nKSlcbiAgICByZXR1cm4gU1VCVEFTS19UQUdcblxuICByZXR1cm4gVEFTS19UQUdcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVGFncyh2YWx1ZTogdW5rbm93bik6IHN0cmluZ1tdIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKVxuICAgIHJldHVybiB2YWx1ZS5maWx0ZXIoKGl0ZW0pOiBpdGVtIGlzIHN0cmluZyA9PiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpLm1hcChub3JtYWxpemVUYWdWYWx1ZSkuZmlsdGVyKEJvb2xlYW4pXG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplVGFnVmFsdWUodmFsdWUpXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWQgPyBbbm9ybWFsaXplZF0gOiBbXVxuICB9XG5cbiAgcmV0dXJuIFtdXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVRhZ1ZhbHVlKHRhZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRhZy5yZXBsYWNlKC9eIy8sICcnKS50cmltKClcbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQge1xuICBDT01QTEVURURfVEFTS1NfRk9MREVSLFxuICBGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FLFxuICBJTkRFWF9UQUcsXG4gIFRBUkVBU19GT0xERVIsXG4gIFRBU0tfSU5ERVhfQkFTRU5BTUUsXG59IGZyb20gJy4uL2NvbnN0YW50cydcblxuY29uc3QgVEFTS19JTkRFWF9GSUxFTkFNRSA9IGAke1RBU0tfSU5ERVhfQkFTRU5BTUV9Lm1kYFxuY29uc3QgVEFTS19JTkRFWF9QQVRIID0gYCR7VEFSRUFTX0ZPTERFUn0vJHtUQVNLX0lOREVYX0ZJTEVOQU1FfWBcbmNvbnN0IEZJTklTSEVEX1RBU0tfSU5ERVhfRklMRU5BTUUgPSBgJHtGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FfS5tZGBcbmNvbnN0IEZJTklTSEVEX1RBU0tfSU5ERVhfUEFUSCA9IGAke0NPTVBMRVRFRF9UQVNLU19GT0xERVJ9LyR7RklOSVNIRURfVEFTS19JTkRFWF9GSUxFTkFNRX1gXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnN1cmVUYXNrSW5kZXhGaWxlKGFwcDogb2JzaWRpYW4uQXBwKTogUHJvbWlzZTxvYnNpZGlhbi5URmlsZSB8IG51bGw+IHtcbiAgcmV0dXJuIGVuc3VyZUluZGV4RmlsZShhcHAsIFRBUkVBU19GT0xERVIsIFRBU0tfSU5ERVhfUEFUSClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuc3VyZUZpbmlzaGVkVGFza0luZGV4RmlsZShhcHA6IG9ic2lkaWFuLkFwcCk6IFByb21pc2U8b2JzaWRpYW4uVEZpbGUgfCBudWxsPiB7XG4gIHJldHVybiBlbnN1cmVJbmRleEZpbGUoYXBwLCBDT01QTEVURURfVEFTS1NfRk9MREVSLCBGSU5JU0hFRF9UQVNLX0lOREVYX1BBVEgpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBlbmRUYXNrTGlua1RvSW5kZXgoYXBwOiBvYnNpZGlhbi5BcHAsIHRhc2tGaWxlOiBvYnNpZGlhbi5URmlsZSk6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBhcHBlbmRUYXNrTGlua1RvSW5kZXhGaWxlKGFwcCwgdGFza0ZpbGUsIFRBU0tfSU5ERVhfUEFUSCwgKCkgPT4gZW5zdXJlVGFza0luZGV4RmlsZShhcHApKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBwZW5kVGFza0xpbmtUb0ZpbmlzaGVkSW5kZXgoYXBwOiBvYnNpZGlhbi5BcHAsIHRhc2tGaWxlOiBvYnNpZGlhbi5URmlsZSk6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBhcHBlbmRUYXNrTGlua1RvSW5kZXhGaWxlKGFwcCwgdGFza0ZpbGUsIEZJTklTSEVEX1RBU0tfSU5ERVhfUEFUSCwgKCkgPT4gZW5zdXJlRmluaXNoZWRUYXNrSW5kZXhGaWxlKGFwcCkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVUYXNrTGlua0Zyb21JbmRleChhcHA6IG9ic2lkaWFuLkFwcCwgdGFza0ZpbGU6IG9ic2lkaWFuLlRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IHJlbW92ZVRhc2tMaW5rRnJvbUluZGV4RmlsZShhcHAsIHRhc2tGaWxlLCBUQVNLX0lOREVYX1BBVEgpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVUYXNrTGlua0Zyb21GaW5pc2hlZEluZGV4KGFwcDogb2JzaWRpYW4uQXBwLCB0YXNrRmlsZTogb2JzaWRpYW4uVEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgcmVtb3ZlVGFza0xpbmtGcm9tSW5kZXhGaWxlKGFwcCwgdGFza0ZpbGUsIEZJTklTSEVEX1RBU0tfSU5ERVhfUEFUSClcbn1cblxuYXN5bmMgZnVuY3Rpb24gZW5zdXJlSW5kZXhGaWxlKFxuICBhcHA6IG9ic2lkaWFuLkFwcCxcbiAgZm9sZGVyUGF0aDogc3RyaW5nLFxuICBmaWxlUGF0aDogc3RyaW5nLFxuKTogUHJvbWlzZTxvYnNpZGlhbi5URmlsZSB8IG51bGw+IHtcbiAgY29uc3QgZm9sZGVyID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmb2xkZXJQYXRoKVxuICBpZiAoIShmb2xkZXIgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKSlcbiAgICByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IGV4aXN0aW5nID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmaWxlUGF0aClcbiAgaWYgKGV4aXN0aW5nIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZpbGUpXG4gICAgcmV0dXJuIGV4aXN0aW5nXG5cbiAgaWYgKGV4aXN0aW5nKVxuICAgIHJldHVybiBudWxsXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBpbml0aWFsQ29udGVudCA9IFsnLS0tJywgYHRhZ3M6IFske0lOREVYX1RBR31dYCwgJy0tLScsICcnXS5qb2luKCdcXG4nKVxuICAgIHJldHVybiBhd2FpdCBhcHAudmF1bHQuY3JlYXRlKGZpbGVQYXRoLCBpbml0aWFsQ29udGVudClcbiAgfVxuICBjYXRjaCB7XG4gICAgY29uc3QgcmV0cnkgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZpbGVQYXRoKVxuICAgIHJldHVybiByZXRyeSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGaWxlID8gcmV0cnkgOiBudWxsXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gYXBwZW5kVGFza0xpbmtUb0luZGV4RmlsZShcbiAgYXBwOiBvYnNpZGlhbi5BcHAsXG4gIHRhc2tGaWxlOiBvYnNpZGlhbi5URmlsZSxcbiAgaW5kZXhQYXRoOiBzdHJpbmcsXG4gIGVuc3VyZUluZGV4OiAoKSA9PiBQcm9taXNlPG9ic2lkaWFuLlRGaWxlIHwgbnVsbD4sXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKHRhc2tGaWxlLnBhdGggPT09IGluZGV4UGF0aClcbiAgICByZXR1cm5cblxuICBjb25zdCBpbmRleEZpbGUgPSBhd2FpdCBlbnN1cmVJbmRleCgpXG4gIGlmICghaW5kZXhGaWxlKVxuICAgIHJldHVyblxuXG4gIGNvbnN0IGxpbmtMaW5lID0gYFtbJHt0YXNrRmlsZS5iYXNlbmFtZX1dXWBcbiAgY29uc3QgY3VycmVudCA9IGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKGluZGV4RmlsZSlcbiAgY29uc3QgbGluZXMgPSBjdXJyZW50LnNwbGl0KCdcXG4nKS5tYXAobGluZSA9PiBsaW5lLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pXG4gIGlmIChsaW5lcy5pbmNsdWRlcyhsaW5rTGluZSkpXG4gICAgcmV0dXJuXG5cbiAgY29uc3Qgc2VwYXJhdG9yID0gY3VycmVudC5sZW5ndGggPiAwICYmICFjdXJyZW50LmVuZHNXaXRoKCdcXG4nKSA/ICdcXG4nIDogJydcbiAgY29uc3QgbmV4dCA9IGAke2N1cnJlbnR9JHtzZXBhcmF0b3J9JHtsaW5rTGluZX1cXG5gXG4gIGF3YWl0IGFwcC52YXVsdC5tb2RpZnkoaW5kZXhGaWxlLCBuZXh0KVxufVxuXG5hc3luYyBmdW5jdGlvbiByZW1vdmVUYXNrTGlua0Zyb21JbmRleEZpbGUoXG4gIGFwcDogb2JzaWRpYW4uQXBwLFxuICB0YXNrRmlsZTogb2JzaWRpYW4uVEZpbGUsXG4gIGluZGV4UGF0aDogc3RyaW5nLFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmICh0YXNrRmlsZS5wYXRoID09PSBpbmRleFBhdGgpXG4gICAgcmV0dXJuXG5cbiAgY29uc3QgaW5kZXhGaWxlID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChpbmRleFBhdGgpXG4gIGlmICghKGluZGV4RmlsZSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGaWxlKSlcbiAgICByZXR1cm5cblxuICBjb25zdCBsaW5rTGluZSA9IGBbWyR7dGFza0ZpbGUuYmFzZW5hbWV9XV1gXG4gIGNvbnN0IGxpbmVzID0gKGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKGluZGV4RmlsZSkpLnNwbGl0KCdcXG4nKVxuICBjb25zdCBmaWx0ZXJlZCA9IGxpbmVzLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBsaW5rTGluZSlcblxuICBpZiAoZmlsdGVyZWQubGVuZ3RoID09PSBsaW5lcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgY29uc3Qgbm9uRW1wdHkgPSBmaWx0ZXJlZC5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKS5sZW5ndGggPiAwKVxuICBjb25zdCBuZXh0ID0gbm9uRW1wdHkubGVuZ3RoID4gMCA/IGAke25vbkVtcHR5LmpvaW4oJ1xcbicpfVxcbmAgOiAnJ1xuICBhd2FpdCBhcHAudmF1bHQubW9kaWZ5KGluZGV4RmlsZSwgbmV4dClcbn1cbiIsImNvbnN0IEVTVEFET19BTElBU0VTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBjYW5jZWxhZGE6ICdDYW5jZWxhZGEnLFxuICBjYW5jZWxhZG86ICdDYW5jZWxhZGEnLFxuICBkZXNlc3RpbWFkYTogJ0NhbmNlbGFkYScsXG4gIGRlc2VzdGltYWRvOiAnQ2FuY2VsYWRhJyxcbiAgJ2VuIHByb2dyZXNvJzogJ0VuIHByb2dyZXNvJyxcbiAgcGVuZGllbnRlOiAnUGVuZGllbnRlJyxcbiAgZmluYWxpemFkYTogJ0ZpbmFsaXphZGEnLFxuICBmaW5hbGl6YWRvOiAnRmluYWxpemFkYScsXG4gIGNvbXBsZXRhZGE6ICdGaW5hbGl6YWRhJyxcbiAgY29tcGxldGFkbzogJ0ZpbmFsaXphZGEnLFxuICBibG9xdWVhZGE6ICdCbG9xdWVhZGEnLFxuICBibG9xdWVhZG86ICdCbG9xdWVhZGEnLFxuICB1cmdlbnRlOiAnUGVuZGllbnRlJyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUVzdGFkbyh2YWx1ZT86IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghdmFsdWUpXG4gICAgcmV0dXJuICdQZW5kaWVudGUnXG5cbiAgY29uc3Qgbm9ybWFsaXplZCA9IHZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiBFU1RBRE9fQUxJQVNFU1tub3JtYWxpemVkXSA/PyAnUGVuZGllbnRlJ1xufVxuIiwiaW1wb3J0IHR5cGUgeyBBcHAsIFRGaWxlIH0gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7XG4gIENPTVBMRVRFRF9TVUJUQVNLU19GT0xERVIsXG4gIENPTVBMRVRFRF9UQVNLU19GT0xERVIsXG4gIEZJTklTSEVEX1RBU0tfSU5ERVhfQkFTRU5BTUUsXG4gIExFR0FDWV9DT01QTEVURURfVEFTS1NfRk9MREVSLFxuICBTVUJUQVNLX1RBRyxcbiAgVEFTS19JTkRFWF9CQVNFTkFNRSxcbiAgVEFTS19UQUcsXG4gIE9SREVSX1NURVAsXG4gIFNVQlRBU0tTX0ZPTERFUixcbiAgVEFSRUFTX0ZPTERFUixcbn0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHR5cGUgeyBFcXVpcG8sIFRhc2tGb3JtRGF0YSwgVGFza0Zyb250bWF0dGVyLCBUYXNrSXRlbSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgdG9UYXNrRnJvbnRtYXR0ZXIgfSBmcm9tICcuLi91dGlscy9ndWFyZHMnXG5pbXBvcnQgeyBub3JtYWxpemVFc3RhZG8gfSBmcm9tICcuLi91dGlscy9zdGF0dXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrRmlsZXMoYXBwOiBBcHApIHtcbiAgcmV0dXJuIGFwcC52YXVsdFxuICAgIC5nZXRNYXJrZG93bkZpbGVzKClcbiAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5wYXRoLnN0YXJ0c1dpdGgoYCR7VEFSRUFTX0ZPTERFUn0vYCkpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUuYmFzZW5hbWUgIT09IFRBU0tfSU5ERVhfQkFTRU5BTUUgJiYgZmlsZS5iYXNlbmFtZSAhPT0gRklOSVNIRURfVEFTS19JTkRFWF9CQVNFTkFNRSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGFza0luQ29tcGxldGVkRm9sZGVyKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aC5zdGFydHNXaXRoKGAke0NPTVBMRVRFRF9UQVNLU19GT0xERVJ9L2ApXG4gICAgfHwgcGF0aC5zdGFydHNXaXRoKGAke0NPTVBMRVRFRF9TVUJUQVNLU19GT0xERVJ9L2ApXG4gICAgfHwgcGF0aC5zdGFydHNXaXRoKGAke0xFR0FDWV9DT01QTEVURURfVEFTS1NfRk9MREVSfS9gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza3MoYXBwOiBBcHApOiBUYXNrSXRlbVtdIHtcbiAgY29uc3QgdGFza3M6IFRhc2tJdGVtW10gPSBbXVxuXG4gIGZvciAoY29uc3QgZmlsZSBvZiBnZXRUYXNrRmlsZXMoYXBwKSkge1xuICAgIGNvbnN0IGZtID0gZ2V0VGFza0Zyb250bWF0dGVyKGFwcCwgZmlsZSlcbiAgICBpZiAoIWZtKVxuICAgICAgY29udGludWVcblxuICAgIHRhc2tzLnB1c2goe1xuICAgICAgZmlsZSxcbiAgICAgIHRhcmVhOiBmbS50YXJlYSA/PyBmaWxlLmJhc2VuYW1lLFxuICAgICAgZGV0YWxsZTogZm0uZGV0YWxsZSA/PyAnJyxcbiAgICAgIGVzdGFkbzogbm9ybWFsaXplRXN0YWRvKGZtLmVzdGFkbyksXG4gICAgICBmZWNoYUluaWNpbzogZm0uZmVjaGFJbmljaW8gPz8gJycsXG4gICAgICBmZWNoYUZpbjogZm0uZmVjaGFGaW4gPz8gJycsXG4gICAgICBlcXVpcG86IGZtLmVxdWlwbyA/PyAnJyxcbiAgICAgIHByaW9yaWRhZDogZm0ucHJpb3JpZGFkID8/ICcnLFxuICAgICAgZGVkaWNhZG86IE51bWJlcihmbS5kZWRpY2FkbykgfHwgMCxcbiAgICAgIGVzdGltYWNpb246IE51bWJlcihmbS5lc3RpbWFjaW9uKSB8fCAwLFxuICAgICAgZGVzdmlvOiBOdW1iZXIoZm0uZGVzdmlvKSB8fCAwLFxuICAgICAgcGFyZW50OiBub3JtYWxpemVQYXJlbnRUYXNrTmFtZShmbS5wYXJlbnQgPz8gJycpLFxuICAgICAgb3JkZXI6IE51bWJlcihmbS5vcmRlcikgPz8gOTk5OTk5LFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gdGFza3Ncbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwVG9wTGV2ZWxUYXNrcyh0YXNrczogVGFza0l0ZW1bXSwgZXF1aXBvczogRXF1aXBvW10pIHtcbiAgY29uc3QgZ3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUYXNrSXRlbVtdPiA9IHt9XG5cbiAgZm9yIChjb25zdCBlcXVpcG8gb2YgZXF1aXBvcylcbiAgICBncm91cHNbZXF1aXBvLm5hbWVdID0gW11cblxuICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpIHtcbiAgICBpZiAodGFzay5wYXJlbnQpXG4gICAgICBjb250aW51ZVxuXG4gICAgY29uc3QgdGVhbU5hbWUgPSB0YXNrLmVxdWlwbyB8fCAnU2luIGVxdWlwbydcbiAgICBpZiAoIWdyb3Vwc1t0ZWFtTmFtZV0pXG4gICAgICBncm91cHNbdGVhbU5hbWVdID0gW11cblxuICAgIGdyb3Vwc1t0ZWFtTmFtZV0ucHVzaCh0YXNrKVxuICB9XG5cbiAgcmV0dXJuIGdyb3Vwc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUYXNrQ29udGVudChkYXRhOiBUYXNrRm9ybURhdGEsIG9yZGVyOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBzYWZlVGl0bGUgPSBkYXRhLnRhcmVhLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuICBjb25zdCBzYWZlRGV0YWlsID0gZGF0YS5kZXRhbGxlLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuICBjb25zdCBzYWZlRW5kRGF0ZSA9IGRhdGEuZmVjaGFGaW4ucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpXG4gIGNvbnN0IHNhZmVQYXJlbnRUYXNrID0gZGF0YS5wYXJlbnQudHJpbSgpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuICBjb25zdCBwYXJlbnRMaW5rID0gc2FmZVBhcmVudFRhc2sgPyBgW1ske3NhZmVQYXJlbnRUYXNrfV1dYCA6ICcnXG4gIGNvbnN0IHRhc2tUYWcgPSBzYWZlUGFyZW50VGFzayA/IFNVQlRBU0tfVEFHIDogVEFTS19UQUdcblxuICByZXR1cm4gW1xuICAgICctLS0nLFxuICAgIGB0YXJlYTogXCIke3NhZmVUaXRsZX1cImAsXG4gICAgYGRldGFsbGU6IFwiJHtzYWZlRGV0YWlsfVwiYCxcbiAgICBgZXN0YWRvOiBcIiR7ZGF0YS5lc3RhZG99XCJgLFxuICAgICdmZWNoYUluaWNpbzogXCJcIicsXG4gICAgYGZlY2hhRmluOiBcIiR7c2FmZUVuZERhdGV9XCJgLFxuICAgIGBlcXVpcG86IFwiJHtkYXRhLmVxdWlwb31cImAsXG4gICAgYHByaW9yaWRhZDogXCIke2RhdGEucHJpb3JpZGFkfVwiYCxcbiAgICAnZGVkaWNhZG86IDAnLFxuICAgIGBlc3RpbWFjaW9uOiAke2RhdGEuZXN0aW1hY2lvbn1gLFxuICAgICdkZXN2aW86IDAnLFxuICAgIGBwYXJlbnQ6IFwiJHtwYXJlbnRMaW5rfVwiYCxcbiAgICAnY2hpbGRzOiBbXScsXG4gICAgYHRhZ3M6IFske3Rhc2tUYWd9XWAsXG4gICAgYG9yZGVyOiAke29yZGVyfWAsXG4gICAgJy0tLScsXG4gICAgJycsXG4gICAgZGF0YS5kZXRhbGxlIHx8ICcnLFxuICAgICcnLFxuICBdLmpvaW4oJ1xcbicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlTmV3VGFza09yZGVyKGFwcDogQXBwLCBkYXRhOiBUYXNrRm9ybURhdGEpOiBudW1iZXIge1xuICBjb25zdCBnb2VzVG9wID0gZGF0YS5lc3RhZG8gPT09ICdFbiBwcm9ncmVzbycgfHwgZGF0YS5wcmlvcmlkYWQgPT09ICdVcmdlbnRlJ1xuXG4gIGlmIChkYXRhLnBhcmVudClcbiAgICByZXR1cm4gT1JERVJfU1RFUFxuXG4gIGNvbnN0IHNpYmxpbmdPcmRlcnMgPSBnZXRUYXNrRmlsZXMoYXBwKVxuICAgIC5tYXAoZmlsZSA9PiBnZXRUYXNrRnJvbnRtYXR0ZXIoYXBwLCBmaWxlKSlcbiAgICAuZmlsdGVyKChmbSk6IGZtIGlzIFRhc2tGcm9udG1hdHRlciA9PiBCb29sZWFuKGZtKSlcbiAgICAuZmlsdGVyKGZtID0+ICFmbS5wYXJlbnQgJiYgZm0uZXF1aXBvID09PSBkYXRhLmVxdWlwbylcbiAgICAubWFwKGZtID0+IE51bWJlcihmbS5vcmRlcikgfHwgMClcblxuICBpZiAoc2libGluZ09yZGVycy5sZW5ndGggPT09IDApXG4gICAgcmV0dXJuIE9SREVSX1NURVBcblxuICByZXR1cm4gZ29lc1RvcFxuICAgID8gTWF0aC5taW4oLi4uc2libGluZ09yZGVycykgLSBPUkRFUl9TVEVQXG4gICAgOiBNYXRoLm1heCguLi5zaWJsaW5nT3JkZXJzKSArIE9SREVSX1NURVBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVUYXNrUGF0aChhcHA6IEFwcCwgdGFza05hbWU6IHN0cmluZywgcGFyZW50VGFza05hbWUgPSAnJyk6IHN0cmluZyB7XG4gIGNvbnN0IGZvbGRlclBhdGggPSBwYXJlbnRUYXNrTmFtZS50cmltKCkgPyBTVUJUQVNLU19GT0xERVIgOiBUQVJFQVNfRk9MREVSXG4gIGNvbnN0IGJhc2VQYXRoID0gYCR7Zm9sZGVyUGF0aH0vJHt0YXNrTmFtZX0ubWRgXG4gIGlmICghYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChiYXNlUGF0aCkpXG4gICAgcmV0dXJuIGJhc2VQYXRoXG5cbiAgcmV0dXJuIGAke2ZvbGRlclBhdGh9LyR7dGFza05hbWV9ICR7RGF0ZS5ub3coKX0ubWRgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlVGFza0VuZERhdGUoZmVjaGFGaW46IHN0cmluZywgZXN0aW1hY2lvbjogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgZXhwbGljaXRFbmQgPSBwYXJzZVRhc2tEYXRlKGZlY2hhRmluKVxuICBpZiAoZXhwbGljaXRFbmQpXG4gICAgcmV0dXJuIGV4cGxpY2l0RW5kLnRvSVNPU3RyaW5nKClcblxuICBpZiAoZXN0aW1hY2lvbiA8PSAwKVxuICAgIHJldHVybiAnJ1xuXG4gIGNvbnN0IGNvbXB1dGVkID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIGVzdGltYWNpb24gKiA2MCAqIDYwICogMTAwMClcbiAgcmV0dXJuIGNvbXB1dGVkLnRvSVNPU3RyaW5nKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGFza0RhdGUodmFsdWU6IHN0cmluZyk6IERhdGUgfCBudWxsIHtcbiAgY29uc3QgdHJpbW1lZCA9IHZhbHVlLnRyaW0oKVxuICBpZiAoIXRyaW1tZWQpXG4gICAgcmV0dXJuIG51bGxcblxuICBjb25zdCBwYXJzZWQgPSBuZXcgRGF0ZSh0cmltbWVkKVxuICBpZiAoTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpKVxuICAgIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIHBhcnNlZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFRhc2tCb2R5UHJldmlldyhjb250ZW50OiBzdHJpbmcsIG1heExlbmd0aCA9IDE4MCk6IHN0cmluZyB7XG4gIGxldCBib2R5ID0gY29udGVudFxuXG4gIC8vIFJlbW92ZSBZQU1MIGZyb250bWF0dGVyIGJsb2NrIGlmIHByZXNlbnQuXG4gIGJvZHkgPSBib2R5LnJlcGxhY2UoL14tLS1cXHI/XFxuW1xcc1xcU10qP1xccj9cXG4tLS1cXHI/XFxuPy8sICcnKVxuXG4gIGNvbnN0IGxpbmVzID0gYm9keVxuICAgIC5zcGxpdCgvXFxyP1xcbi8pXG4gICAgLm1hcChsaW5lID0+IGxpbmUudHJpbSgpKVxuXG4gIHdoaWxlIChsaW5lcy5sZW5ndGggPiAwICYmICFsaW5lc1swXSlcbiAgICBsaW5lcy5zaGlmdCgpXG5cbiAgLy8gUmVtb3ZlIGxlYWRpbmcgdGl0bGUgaGVhZGluZyBzbyBwcmV2aWV3IHN0YXJ0cyB3aXRoIHRoZSBib2R5IHRleHQuXG4gIGlmIChsaW5lc1swXT8uc3RhcnRzV2l0aCgnIyAnKSlcbiAgICBsaW5lcy5zaGlmdCgpXG5cbiAgd2hpbGUgKGxpbmVzLmxlbmd0aCA+IDAgJiYgIWxpbmVzWzBdKVxuICAgIGxpbmVzLnNoaWZ0KClcblxuICBjb25zdCBub3JtYWxpemVkID0gbGluZXMuam9pbignICcpLnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKClcbiAgaWYgKCFub3JtYWxpemVkKVxuICAgIHJldHVybiAnJ1xuXG4gIGlmIChub3JtYWxpemVkLmxlbmd0aCA8PSBtYXhMZW5ndGgpXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRcblxuICByZXR1cm4gYCR7bm9ybWFsaXplZC5zbGljZSgwLCBtYXhMZW5ndGggLSAxKS50cmltRW5kKCl94oCmYFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQYXJlbnRUYXNrTmFtZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgdHJpbW1lZCA9IHZhbHVlLnRyaW0oKVxuICBpZiAoIXRyaW1tZWQpXG4gICAgcmV0dXJuICcnXG5cbiAgY29uc3QgbGlua01hdGNoID0gdHJpbW1lZC5tYXRjaCgvXlxcW1xcWyguKz8pXFxdXFxdJC8pXG4gIGNvbnN0IHJhd1JlZiA9IGxpbmtNYXRjaCA/IGxpbmtNYXRjaFsxXS50cmltKCkgOiB0cmltbWVkXG4gIGNvbnN0IHdpdGhvdXRBbGlhcyA9IHJhd1JlZi5zcGxpdCgnfCcpWzBdLnRyaW0oKVxuICBjb25zdCB3aXRob3V0SGVhZGluZyA9IHdpdGhvdXRBbGlhcy5zcGxpdCgnIycpWzBdLnRyaW0oKVxuICBjb25zdCBsYXN0U2VnbWVudCA9IHdpdGhvdXRIZWFkaW5nLnNwbGl0KCcvJykucG9wKCkgPz8gd2l0aG91dEhlYWRpbmdcblxuICByZXR1cm4gbGFzdFNlZ21lbnQucmVwbGFjZSgvXFwubWQkL2ksICcnKS50cmltKClcbn1cblxuZnVuY3Rpb24gZ2V0VGFza0Zyb250bWF0dGVyKGFwcDogQXBwLCBmaWxlOiBURmlsZSk6IFRhc2tGcm9udG1hdHRlciB8IG51bGwge1xuICBjb25zdCByYXdGcm9udG1hdHRlciA9IGFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKT8uZnJvbnRtYXR0ZXJcbiAgcmV0dXJuIHRvVGFza0Zyb250bWF0dGVyKHJhd0Zyb250bWF0dGVyKVxufVxuIiwiaW1wb3J0IHR5cGUgeyBBcHAgfSBmcm9tICdvYnNpZGlhbidcblxuaW1wb3J0IHsgZ2V0VGFza3MsIGlzVGFza0luQ29tcGxldGVkRm9sZGVyLCBwYXJzZVRhc2tEYXRlIH0gZnJvbSAnLi90YXNrRW5naW5lJ1xuaW1wb3J0IHsgdXBkYXRlRnJvbnRtYXR0ZXIgfSBmcm9tICcuL2Zyb250bWF0dGVyRW5naW5lJ1xuXG5jb25zdCBIT1VSX01TID0gNjAgKiA2MCAqIDEwMDBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYmFsYW5jZUdyb3VwRW5kRGF0ZXMoYXBwOiBBcHAsIHRlYW1OYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgdGFza3MgPSBnZXRUYXNrcyhhcHApXG4gICAgLmZpbHRlcih0YXNrID0+ICF0YXNrLnBhcmVudCAmJiB0YXNrLmVxdWlwbyA9PT0gdGVhbU5hbWUgJiYgIWlzVGFza0luQ29tcGxldGVkRm9sZGVyKHRhc2suZmlsZS5wYXRoKSlcbiAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpXG5cbiAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMClcbiAgICByZXR1cm5cblxuICBjb25zdCBmaXJzdFN0YXJ0ID0gcGFyc2VUYXNrRGF0ZSh0YXNrc1swXS5mZWNoYUluaWNpbykgPz8gbmV3IERhdGUoKVxuICBsZXQgY3Vyc29yID0gZmlyc3RTdGFydC5nZXRUaW1lKClcblxuICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpIHtcbiAgICBjb25zdCBlc3RpbWF0ZWRIb3VycyA9IE51bWJlci5pc0Zpbml0ZSh0YXNrLmVzdGltYWNpb24pICYmIHRhc2suZXN0aW1hY2lvbiA+IDBcbiAgICAgID8gdGFzay5lc3RpbWFjaW9uXG4gICAgICA6IDBcbiAgICBjb25zdCBkZWRpY2F0ZWRIb3VycyA9IE51bWJlci5pc0Zpbml0ZSh0YXNrLmRlZGljYWRvKSAmJiB0YXNrLmRlZGljYWRvID4gMFxuICAgICAgPyB0YXNrLmRlZGljYWRvXG4gICAgICA6IDBcbiAgICBjb25zdCBlc3RpbWF0ZUhvdXJzID0gTWF0aC5tYXgoZXN0aW1hdGVkSG91cnMsIGRlZGljYXRlZEhvdXJzKVxuXG4gICAgY3Vyc29yICs9IGVzdGltYXRlSG91cnMgKiBIT1VSX01TXG4gICAgYXdhaXQgdXBkYXRlRnJvbnRtYXR0ZXIoYXBwLCB0YXNrLmZpbGUsIHsgZmVjaGFGaW46IG5ldyBEYXRlKGN1cnNvcikudG9JU09TdHJpbmcoKSB9KVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2FuaXRpemVGaWxlbmFtZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC9bXFxcXC86Kj9cIjw+fCNeW1xcXV0vZywgJy0nKS50cmltKClcbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQgeyBFU1RBRE9TLCBQUklPUklEQURFUywgU1VCVEFTS1NfRk9MREVSLCBUQVJFQVNfRk9MREVSIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgcmVidWlsZFRhc2tDaGlsZExpbmtzLCBzeW5jVGFza1R5cGVUYWdzIH0gZnJvbSAnLi4vZW5naW5lcy9mcm9udG1hdHRlckVuZ2luZSdcbmltcG9ydCB7IHJlYmFsYW5jZUdyb3VwRW5kRGF0ZXMgfSBmcm9tICcuLi9lbmdpbmVzL3NjaGVkdWxlRW5naW5lJ1xuaW1wb3J0IHsgYXBwZW5kVGFza0xpbmtUb0luZGV4IH0gZnJvbSAnLi4vZW5naW5lcy90YXNrSW5kZXhFbmdpbmUnXG5pbXBvcnQgeyBidWlsZFRhc2tDb250ZW50LCByZXNvbHZlTmV3VGFza09yZGVyLCByZXNvbHZlVGFza0VuZERhdGUsIHJlc29sdmVUYXNrUGF0aCB9IGZyb20gJy4uL2VuZ2luZXMvdGFza0VuZ2luZSdcbmltcG9ydCB0eXBlIHsgVGFza0Zvcm1EYXRhIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBzYW5pdGl6ZUZpbGVuYW1lIH0gZnJvbSAnLi4vdXRpbHMvc2FuaXRpemVGaWxlbmFtZSdcbmltcG9ydCB0eXBlIHsgVGFyZWFzUGx1Z2luIH0gZnJvbSAnLi4vcGx1Z2luL1RhcmVhc1BsdWdpbidcblxuZXhwb3J0IGNsYXNzIE5ld1Rhc2tNb2RhbCBleHRlbmRzIG9ic2lkaWFuLk1vZGFsIHtcbiAgcHJpdmF0ZSBwbHVnaW46IFRhcmVhc1BsdWdpblxuICBwcml2YXRlIGRhdGE6IFRhc2tGb3JtRGF0YVxuXG4gIGNvbnN0cnVjdG9yKGFwcDogb2JzaWRpYW4uQXBwLCBwbHVnaW46IFRhcmVhc1BsdWdpbiwgZGVmYXVsdEVxdWlwbz86IHN0cmluZywgZGVmYXVsdFBhcmVudD86IHN0cmluZykge1xuICAgIHN1cGVyKGFwcClcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpblxuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIHRhcmVhOiAnJyxcbiAgICAgIGRldGFsbGU6ICcnLFxuICAgICAgZXN0YWRvOiAnUGVuZGllbnRlJyxcbiAgICAgIGZlY2hhRmluOiAnJyxcbiAgICAgIGVxdWlwbzogZGVmYXVsdEVxdWlwbyB8fCBwbHVnaW4uZXF1aXBvc1swXT8ubmFtZSB8fCAnJyxcbiAgICAgIHByaW9yaWRhZDogJ01lZGlhJyxcbiAgICAgIGVzdGltYWNpb246IDAsXG4gICAgICBwYXJlbnQ6IGRlZmF1bHRQYXJlbnQgfHwgJycsXG4gICAgfVxuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzXG4gICAgY29udGVudEVsLmFkZENsYXNzKCd0YXJlYXMtbW9kYWwnKVxuICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdOdWV2YSBUYXJlYScgfSlcblxuICAgIG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZSgnVGFyZWEnKS5hZGRUZXh0KCh0ZXh0KSA9PiB7XG4gICAgICB0ZXh0LnNldFBsYWNlaG9sZGVyKCdOb21icmUgZGUgbGEgdGFyZWEnKVxuICAgICAgdGV4dC5vbkNoYW5nZSh2YWx1ZSA9PiB0aGlzLmRhdGEudGFyZWEgPSB2YWx1ZSlcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGV4dC5pbnB1dEVsLmZvY3VzKCksIDUwKVxuICAgIH0pXG5cbiAgICBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpLnNldE5hbWUoJ0VzdGFkbycpLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT4ge1xuICAgICAgZm9yIChjb25zdCBlc3RhZG8gb2YgRVNUQURPUylcbiAgICAgICAgZHJvcGRvd24uYWRkT3B0aW9uKGVzdGFkbywgZXN0YWRvKVxuXG4gICAgICBkcm9wZG93bi5zZXRWYWx1ZSh0aGlzLmRhdGEuZXN0YWRvKVxuICAgICAgZHJvcGRvd24ub25DaGFuZ2UodmFsdWUgPT4gdGhpcy5kYXRhLmVzdGFkbyA9IHZhbHVlKVxuICAgIH0pXG5cbiAgICBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpXG4gICAgICAuc2V0TmFtZSgnRmVjaGEgZmluJylcbiAgICAgIC5zZXREZXNjKCdPcGNpb25hbC4gU2kgcXVlZGEgdmFjw61hLCBzZSBjYWxjdWxhIGNvbiBsYSBlc3RpbWFjacOzbi4nKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+IHtcbiAgICAgICAgdGV4dC5pbnB1dEVsLnR5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnXG4gICAgICAgIHRleHQuc2V0VmFsdWUodGhpcy5kYXRhLmZlY2hhRmluKVxuICAgICAgICB0ZXh0Lm9uQ2hhbmdlKHZhbHVlID0+IHRoaXMuZGF0YS5mZWNoYUZpbiA9IHZhbHVlKVxuICAgICAgfSlcblxuICAgIG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZSgnRXF1aXBvJykuYWRkRHJvcGRvd24oKGRyb3Bkb3duKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGVxdWlwbyBvZiB0aGlzLnBsdWdpbi5lcXVpcG9zKVxuICAgICAgICBkcm9wZG93bi5hZGRPcHRpb24oZXF1aXBvLm5hbWUsIGVxdWlwby5uYW1lKVxuXG4gICAgICBkcm9wZG93bi5zZXRWYWx1ZSh0aGlzLmRhdGEuZXF1aXBvKVxuICAgICAgZHJvcGRvd24ub25DaGFuZ2UodmFsdWUgPT4gdGhpcy5kYXRhLmVxdWlwbyA9IHZhbHVlKVxuICAgIH0pXG5cbiAgICBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpLnNldE5hbWUoJ1ByaW9yaWRhZCcpLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT4ge1xuICAgICAgZm9yIChjb25zdCBwcmlvcmlkYWQgb2YgUFJJT1JJREFERVMpXG4gICAgICAgIGRyb3Bkb3duLmFkZE9wdGlvbihwcmlvcmlkYWQsIHByaW9yaWRhZClcblxuICAgICAgZHJvcGRvd24uc2V0VmFsdWUodGhpcy5kYXRhLnByaW9yaWRhZClcbiAgICAgIGRyb3Bkb3duLm9uQ2hhbmdlKHZhbHVlID0+IHRoaXMuZGF0YS5wcmlvcmlkYWQgPSB2YWx1ZSlcbiAgICB9KVxuXG4gICAgbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKVxuICAgICAgLnNldE5hbWUoJ0VzdGltYWNpw7NuIChob3JhcyknKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+IHtcbiAgICAgICAgdGV4dC5zZXRQbGFjZWhvbGRlcignMCcpXG4gICAgICAgIHRleHQuaW5wdXRFbC50eXBlID0gJ251bWJlcidcbiAgICAgICAgdGV4dC5pbnB1dEVsLm1pbiA9ICcwJ1xuICAgICAgICB0ZXh0LmlucHV0RWwuc3RlcCA9ICcwLjAxJ1xuICAgICAgICB0ZXh0Lm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IE51bWJlci5wYXJzZUZsb2F0KHZhbHVlKVxuICAgICAgICAgIHRoaXMuZGF0YS5lc3RpbWFjaW9uID0gTnVtYmVyLmlzTmFOKHBhcnNlZCkgfHwgcGFyc2VkIDwgMFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IE1hdGgucm91bmQocGFyc2VkICogMTAwKSAvIDEwMFxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgIG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbClcbiAgICAgIC5zZXROYW1lKCdTdWJ0YXJlYSBkZScpXG4gICAgICAuc2V0RGVzYygnRGVqYXIgdmFjw61vIHNpIGVzIHRhcmVhIHByaW5jaXBhbCcpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgICB0ZXh0LnNldFBsYWNlaG9sZGVyKCdOb21icmUgZGUgdGFyZWEgcGFkcmUgKHNpbiAubWQpJylcbiAgICAgICAgdGV4dC5zZXRWYWx1ZSh0aGlzLmRhdGEucGFyZW50KVxuICAgICAgICB0ZXh0Lm9uQ2hhbmdlKHZhbHVlID0+IHRoaXMuZGF0YS5wYXJlbnQgPSB2YWx1ZSlcbiAgICAgIH0pXG5cbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLW1vZGFsLWZvb3RlcicgfSlcblxuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ3JlYXIgdGFyZWEnLCBjbHM6ICdtb2QtY3RhJyB9KVxuICAgIGNyZWF0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jcmVhdGUoKVxuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdDYW5jZWxhcicgfSlcbiAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuY2xvc2UoKVxuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNyZWF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YS50YXJlYS50cmltKCkpIHtcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoJ0VsIG5vbWJyZSBlcyByZXF1ZXJpZG8nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2FuaXRpemVkVGFza05hbWUgPSBzYW5pdGl6ZUZpbGVuYW1lKHRoaXMuZGF0YS50YXJlYSlcbiAgICBjb25zdCB0YXJnZXRGb2xkZXIgPSB0aGlzLmRhdGEucGFyZW50LnRyaW0oKSA/IFNVQlRBU0tTX0ZPTERFUiA6IFRBUkVBU19GT0xERVJcbiAgICBhd2FpdCB0aGlzLmVuc3VyZUZvbGRlclBhdGgodGFyZ2V0Rm9sZGVyKVxuXG4gICAgY29uc3QgcGF0aCA9IHJlc29sdmVUYXNrUGF0aCh0aGlzLmFwcCwgc2FuaXRpemVkVGFza05hbWUsIHRoaXMuZGF0YS5wYXJlbnQpXG4gICAgY29uc3Qgb3JkZXIgPSByZXNvbHZlTmV3VGFza09yZGVyKHRoaXMuYXBwLCB0aGlzLmRhdGEpXG4gICAgY29uc3QgY29udGVudCA9IGJ1aWxkVGFza0NvbnRlbnQoXG4gICAgICB7XG4gICAgICAgIC4uLnRoaXMuZGF0YSxcbiAgICAgICAgZmVjaGFGaW46IHJlc29sdmVUYXNrRW5kRGF0ZSh0aGlzLmRhdGEuZmVjaGFGaW4sIHRoaXMuZGF0YS5lc3RpbWFjaW9uKSxcbiAgICAgIH0sXG4gICAgICBvcmRlcixcbiAgICApXG5cbiAgICBjb25zdCB0YXNrRmlsZSA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShwYXRoLCBjb250ZW50KVxuICAgIGF3YWl0IGFwcGVuZFRhc2tMaW5rVG9JbmRleCh0aGlzLmFwcCwgdGFza0ZpbGUpXG4gICAgYXdhaXQgcmVidWlsZFRhc2tDaGlsZExpbmtzKHRoaXMuYXBwKVxuICAgIGF3YWl0IHN5bmNUYXNrVHlwZVRhZ3ModGhpcy5hcHApXG4gICAgYXdhaXQgcmViYWxhbmNlR3JvdXBFbmREYXRlcyh0aGlzLmFwcCwgdGhpcy5kYXRhLmVxdWlwbylcbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBUYXJlYSBcIiR7dGhpcy5kYXRhLnRhcmVhfVwiIGNyZWFkYWApXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGVuc3VyZUZvbGRlclBhdGgocGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aClcbiAgICBpZiAoZXhpc3RpbmcgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKVxuICAgICAgcmV0dXJuXG5cbiAgICBpZiAoZXhpc3RpbmcpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHNlIHB1ZG8gY3JlYXIgbGEgY2FycGV0YSBcIiR7cGF0aH1cIiBwb3JxdWUgZXhpc3RlIHVuIGFyY2hpdm8gY29uIGVzZSBub21icmVgKVxuXG4gICAgY29uc3Qgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJykuZmlsdGVyKEJvb2xlYW4pXG4gICAgbGV0IGN1cnJlbnRQYXRoID0gJydcbiAgICBmb3IgKGNvbnN0IHNlZ21lbnQgb2Ygc2VnbWVudHMpIHtcbiAgICAgIGN1cnJlbnRQYXRoID0gY3VycmVudFBhdGggPyBgJHtjdXJyZW50UGF0aH0vJHtzZWdtZW50fWAgOiBzZWdtZW50XG4gICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGN1cnJlbnRQYXRoKVxuICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKVxuICAgICAgICBjb250aW51ZVxuICAgICAgaWYgKGN1cnJlbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gc2UgcHVkbyBjcmVhciBsYSBjYXJwZXRhIFwiJHtjdXJyZW50UGF0aH1cIiBwb3JxdWUgZXhpc3RlIHVuIGFyY2hpdm8gY29uIGVzZSBub21icmVgKVxuXG4gICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoY3VycmVudFBhdGgpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBERUZBVUxUX0VRVUlQT1MgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBub3JtYWxpemVQb21vZG9yb1N0YXRlIH0gZnJvbSAnLi4vZW5naW5lcy9wb21vZG9yb0VuZ2luZSdcbmltcG9ydCB0eXBlIHsgRXF1aXBvLCBQb21vZG9yb1N0YXRlIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBpc1JlY29yZCB9IGZyb20gJy4vZ3VhcmRzJ1xuXG5jb25zdCBMRUdBQ1lfRkFMTEJBQ0tfQ09MT1JTID0gWycjZDk3YTFlJywgJyMyZTZkYjAnLCAnIzdjNWNlNycsICcjMDBiODk0JywgJyNlMTcwNTUnLCAnI2ZkNzlhOCddXG5jb25zdCBSRU1PVkVEX0RFRkFVTFRfVEVBTV9OQU1FUyA9IG5ldyBTZXQoWydTZW1hbmFsJywgJ0RpYXJpbycsICdDb21wbGV0YWRhcyddKVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplRXF1aXBvc0Zyb21TZXR0aW5ncyhyYXdEYXRhOiB1bmtub3duKTogRXF1aXBvW10ge1xuICBjb25zdCBlcXVpcG9zID0gZXh0cmFjdEVxdWlwb3MocmF3RGF0YSlcblxuICBpZiAoIWVxdWlwb3MgfHwgZXF1aXBvcy5sZW5ndGggPT09IDApXG4gICAgcmV0dXJuIFsuLi5ERUZBVUxUX0VRVUlQT1NdXG5cbiAgaWYgKGlzU3RyaW5nQXJyYXkoZXF1aXBvcykpIHtcbiAgICBjb25zdCBub3JtYWxpemVkRnJvbUxlZ2FjeSA9IGVxdWlwb3NcbiAgICAgIC5maWx0ZXIobmFtZSA9PiAhUkVNT1ZFRF9ERUZBVUxUX1RFQU1fTkFNRVMuaGFzKG5hbWUpKVxuICAgICAgLm1hcCgobmFtZSwgaW5kZXgpID0+ICh7XG4gICAgICBuYW1lLFxuICAgICAgY29sb3I6IExFR0FDWV9GQUxMQkFDS19DT0xPUlNbaW5kZXggJSBMRUdBQ1lfRkFMTEJBQ0tfQ09MT1JTLmxlbmd0aF0sXG4gICAgICB9KSlcbiAgICByZXR1cm4gbWVyZ2VXaXRoRGVmYXVsdEVxdWlwb3Mobm9ybWFsaXplZEZyb21MZWdhY3kpXG4gIH1cblxuICBjb25zdCBub3JtYWxpemVkID0gZXF1aXBvc1xuICAgIC5maWx0ZXIoaXNFcXVpcG8pXG4gICAgLm1hcChlcXVpcG8gPT4gKHsgbmFtZTogZXF1aXBvLm5hbWUudHJpbSgpLCBjb2xvcjogZXF1aXBvLmNvbG9yIH0pKVxuICAgIC5maWx0ZXIoZXF1aXBvID0+ICFSRU1PVkVEX0RFRkFVTFRfVEVBTV9OQU1FUy5oYXMoZXF1aXBvLm5hbWUpKVxuICAgIC5maWx0ZXIoZXF1aXBvID0+IEJvb2xlYW4oZXF1aXBvLm5hbWUpKVxuXG4gIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gMClcbiAgICByZXR1cm4gWy4uLkRFRkFVTFRfRVFVSVBPU11cblxuICByZXR1cm4gbWVyZ2VXaXRoRGVmYXVsdEVxdWlwb3Mobm9ybWFsaXplZClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVBvbW9kb3JvRnJvbVNldHRpbmdzKHJhd0RhdGE6IHVua25vd24pOiBQb21vZG9yb1N0YXRlIHtcbiAgaWYgKCFpc1JlY29yZChyYXdEYXRhKSlcbiAgICByZXR1cm4gbm9ybWFsaXplUG9tb2Rvcm9TdGF0ZShudWxsKVxuXG4gIHJldHVybiBub3JtYWxpemVQb21vZG9yb1N0YXRlKHJhd0RhdGEucG9tb2Rvcm8pXG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RFcXVpcG9zKHJhd0RhdGE6IHVua25vd24pOiB1bmtub3duW10gfCB1bmRlZmluZWQge1xuICBpZiAoIWlzUmVjb3JkKHJhd0RhdGEpKVxuICAgIHJldHVybiB1bmRlZmluZWRcblxuICBjb25zdCBlcXVpcG9zID0gcmF3RGF0YS5lcXVpcG9zXG4gIGlmICghQXJyYXkuaXNBcnJheShlcXVpcG9zKSlcbiAgICByZXR1cm4gdW5kZWZpbmVkXG5cbiAgcmV0dXJuIGVxdWlwb3Ncbn1cblxuZnVuY3Rpb24gaXNFcXVpcG8odmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBFcXVpcG8ge1xuICBpZiAoIWlzUmVjb3JkKHZhbHVlKSlcbiAgICByZXR1cm4gZmFsc2VcblxuICByZXR1cm4gdHlwZW9mIHZhbHVlLm5hbWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2YWx1ZS5jb2xvciA9PT0gJ3N0cmluZydcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmdBcnJheSh2YWx1ZTogdW5rbm93bltdKTogdmFsdWUgaXMgc3RyaW5nW10ge1xuICByZXR1cm4gdmFsdWUuZXZlcnkoaXRlbSA9PiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpXG59XG5cbmZ1bmN0aW9uIG1lcmdlV2l0aERlZmF1bHRFcXVpcG9zKGVxdWlwb3M6IEVxdWlwb1tdKTogRXF1aXBvW10ge1xuICBjb25zdCBkZWZhdWx0c0J5TmFtZSA9IG5ldyBNYXAoREVGQVVMVF9FUVVJUE9TLm1hcChlcXVpcG8gPT4gW2VxdWlwby5uYW1lLCBlcXVpcG9dKSlcbiAgY29uc3Qgbm9ybWFsaXplZEJ5TmFtZSA9IG5ldyBNYXAoZXF1aXBvcy5tYXAoZXF1aXBvID0+IFtlcXVpcG8ubmFtZSwgZXF1aXBvXSkpXG5cbiAgY29uc3Qgd2l0aERlZmF1bHRzID0gREVGQVVMVF9FUVVJUE9TLm1hcCgoZXF1aXBvKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRFcXVpcG8gPSBub3JtYWxpemVkQnlOYW1lLmdldChlcXVpcG8ubmFtZSlcbiAgICByZXR1cm4gc2F2ZWRFcXVpcG8gPyB7IC4uLnNhdmVkRXF1aXBvIH0gOiB7IC4uLmVxdWlwbyB9XG4gIH0pXG5cbiAgY29uc3QgY3VzdG9tRXF1aXBvcyA9IGVxdWlwb3MuZmlsdGVyKGVxdWlwbyA9PiAhZGVmYXVsdHNCeU5hbWUuaGFzKGVxdWlwby5uYW1lKSlcbiAgcmV0dXJuIFsuLi53aXRoRGVmYXVsdHMsIC4uLmN1c3RvbUVxdWlwb3NdXG59XG4iLCJpbXBvcnQgdHlwZSB7IEFwcCwgVEFic3RyYWN0RmlsZSwgVEZpbGUsIFRGb2xkZXIgfSBmcm9tICdvYnNpZGlhbidcblxuaW1wb3J0IHsgQ09NUExFVEVEX1NVQlRBU0tTX0ZPTERFUiwgQ09NUExFVEVEX1RBU0tTX0ZPTERFUiwgU1VCVEFTS1NfRk9MREVSLCBUQVJFQVNfRk9MREVSIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHtcbiAgYXBwZW5kVGFza0xpbmtUb0ZpbmlzaGVkSW5kZXgsXG4gIGFwcGVuZFRhc2tMaW5rVG9JbmRleCxcbiAgcmVtb3ZlVGFza0xpbmtGcm9tRmluaXNoZWRJbmRleCxcbiAgcmVtb3ZlVGFza0xpbmtGcm9tSW5kZXgsXG59IGZyb20gJy4vdGFza0luZGV4RW5naW5lJ1xuaW1wb3J0IHsgc3luY1Rhc2tUeXBlVGFncyB9IGZyb20gJy4vZnJvbnRtYXR0ZXJFbmdpbmUnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtb3ZlVGFza1RvQ29tcGxldGVkRm9sZGVyKGFwcDogQXBwLCBmaWxlOiBURmlsZSwgaXNTdWJ0YXNrID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgdGFyZ2V0Rm9sZGVyID0gaXNTdWJ0YXNrID8gQ09NUExFVEVEX1NVQlRBU0tTX0ZPTERFUiA6IENPTVBMRVRFRF9UQVNLU19GT0xERVJcbiAgYXdhaXQgZW5zdXJlRm9sZGVyKGFwcCwgdGFyZ2V0Rm9sZGVyKVxuICBjb25zdCBuZXh0UGF0aCA9IHJlc29sdmVVbmlxdWVQYXRoKGFwcCwgYCR7dGFyZ2V0Rm9sZGVyfS8ke2ZpbGUubmFtZX1gKVxuICBpZiAobmV4dFBhdGggPT09IGZpbGUucGF0aClcbiAgICByZXR1cm5cblxuICBhd2FpdCByZW1vdmVUYXNrTGlua0Zyb21JbmRleChhcHAsIGZpbGUpXG4gIGF3YWl0IGFwcC5maWxlTWFuYWdlci5yZW5hbWVGaWxlKGZpbGUsIG5leHRQYXRoKVxuICBhd2FpdCBhcHBlbmRUYXNrTGlua1RvRmluaXNoZWRJbmRleChhcHAsIGZpbGUpXG4gIGF3YWl0IHN5bmNUYXNrVHlwZVRhZ3MoYXBwKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZVRhc2tUb0FjdGl2ZUZvbGRlcihhcHA6IEFwcCwgZmlsZTogVEZpbGUsIGlzU3VidGFzayA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHRhcmdldEZvbGRlciA9IGlzU3VidGFzayA/IFNVQlRBU0tTX0ZPTERFUiA6IFRBUkVBU19GT0xERVJcbiAgYXdhaXQgZW5zdXJlRm9sZGVyKGFwcCwgdGFyZ2V0Rm9sZGVyKVxuICBjb25zdCBuZXh0UGF0aCA9IHJlc29sdmVVbmlxdWVQYXRoKGFwcCwgYCR7dGFyZ2V0Rm9sZGVyfS8ke2ZpbGUubmFtZX1gKVxuICBpZiAobmV4dFBhdGggPT09IGZpbGUucGF0aClcbiAgICByZXR1cm5cblxuICBhd2FpdCByZW1vdmVUYXNrTGlua0Zyb21GaW5pc2hlZEluZGV4KGFwcCwgZmlsZSlcbiAgYXdhaXQgYXBwLmZpbGVNYW5hZ2VyLnJlbmFtZUZpbGUoZmlsZSwgbmV4dFBhdGgpXG4gIGF3YWl0IGFwcGVuZFRhc2tMaW5rVG9JbmRleChhcHAsIGZpbGUpXG4gIGF3YWl0IHN5bmNUYXNrVHlwZVRhZ3MoYXBwKVxufVxuXG5mdW5jdGlvbiByZXNvbHZlVW5pcXVlUGF0aChhcHA6IEFwcCwgZGVzaXJlZFBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGV4aXN0aW5nID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChkZXNpcmVkUGF0aClcbiAgaWYgKCFleGlzdGluZyB8fCBleGlzdGluZy5wYXRoID09PSBkZXNpcmVkUGF0aClcbiAgICByZXR1cm4gZGVzaXJlZFBhdGhcblxuICBjb25zdCBkb3RJbmRleCA9IGRlc2lyZWRQYXRoLmxhc3RJbmRleE9mKCcuJylcbiAgY29uc3QgYmFzZSA9IGRvdEluZGV4ID4gMCA/IGRlc2lyZWRQYXRoLnNsaWNlKDAsIGRvdEluZGV4KSA6IGRlc2lyZWRQYXRoXG4gIGNvbnN0IGV4dCA9IGRvdEluZGV4ID4gMCA/IGRlc2lyZWRQYXRoLnNsaWNlKGRvdEluZGV4KSA6ICcnXG4gIHJldHVybiBgJHtiYXNlfSAke0RhdGUubm93KCl9JHtleHR9YFxufVxuXG5hc3luYyBmdW5jdGlvbiBlbnN1cmVGb2xkZXIoYXBwOiBBcHAsIHBhdGg6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbilcbiAgbGV0IGN1cnJlbnRQYXRoID0gJydcbiAgZm9yIChjb25zdCBzZWdtZW50IG9mIHNlZ21lbnRzKSB7XG4gICAgY3VycmVudFBhdGggPSBjdXJyZW50UGF0aCA/IGAke2N1cnJlbnRQYXRofS8ke3NlZ21lbnR9YCA6IHNlZ21lbnRcbiAgICBjb25zdCBleGlzdGluZyA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoY3VycmVudFBhdGgpXG4gICAgaWYgKGlzRm9sZGVyKGV4aXN0aW5nKSlcbiAgICAgIGNvbnRpbnVlXG5cbiAgICBpZiAoZXhpc3RpbmcpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjcmVhdGUgZm9sZGVyIFwiJHtjdXJyZW50UGF0aH1cIiBiZWNhdXNlIGEgZmlsZSB3aXRoIHRoYXQgbmFtZSBleGlzdHMuYClcblxuICAgIGF3YWl0IGFwcC52YXVsdC5jcmVhdGVGb2xkZXIoY3VycmVudFBhdGgpXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNGb2xkZXIoZmlsZTogVEFic3RyYWN0RmlsZSB8IG51bGwpOiBmaWxlIGlzIFRGb2xkZXIge1xuICByZXR1cm4gZmlsZSAhPT0gbnVsbCAmJiAnY2hpbGRyZW4nIGluIGZpbGVcbn1cbiIsImltcG9ydCB7IE9SREVSX1NURVAgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgdHlwZSB7IFRhc2tJdGVtIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiByZW9yZGVyTGlzdDxUPihpdGVtczogVFtdLCBmcm9tSW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyKTogVFtdIHtcbiAgaWYgKGZyb21JbmRleCA8IDAgfHwgdG9JbmRleCA8IDAgfHwgZnJvbUluZGV4ID09PSB0b0luZGV4KVxuICAgIHJldHVybiBpdGVtc1xuXG4gIGNvbnN0IG5leHQgPSBbLi4uaXRlbXNdXG4gIGNvbnN0IFttb3ZlZF0gPSBuZXh0LnNwbGljZShmcm9tSW5kZXgsIDEpXG4gIG5leHQuc3BsaWNlKHRvSW5kZXgsIDAsIG1vdmVkKVxuICByZXR1cm4gbmV4dFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGVyc2lzdFRhc2tPcmRlcihcbiAgdGFza3M6IFRhc2tJdGVtW10sXG4gIHVwZGF0ZXI6ICh0YXNrOiBUYXNrSXRlbSwgb3JkZXI6IG51bWJlcikgPT4gUHJvbWlzZTx2b2lkPixcbik6IFByb21pc2U8dm9pZD4ge1xuICBmb3IgKGNvbnN0IFtpbmRleCwgdGFza10gb2YgdGFza3MuZW50cmllcygpKVxuICAgIGF3YWl0IHVwZGF0ZXIodGFzaywgKGluZGV4ICsgMSkgKiBPUkRFUl9TVEVQKVxufVxuIiwiaW1wb3J0IHsgVEZpbGUsIHR5cGUgQXBwIH0gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7IFBPTU9ET1JPX0xPR19CQVNFTkFNRSwgVEFSRUFTX0ZPTERFUiB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGludGVyZmFjZSBQb21vZG9yb0xvZ0VudHJ5IHtcbiAgZGF0ZTogc3RyaW5nXG4gIHRpbWU6IHN0cmluZ1xuICB0eXBlOiBzdHJpbmdcbiAgdGFzazogc3RyaW5nXG4gIGRldmlhdGlvbkhvdXJzOiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIEFwcGVuZFBvbW9kb3JvTG9nRW50cnlJbnB1dCB7XG4gIHRpbWVzdGFtcE1zOiBudW1iZXJcbiAgdHlwZTogc3RyaW5nXG4gIHRhc2s6IHN0cmluZ1xuICBkZXZpYXRpb25Ib3VyczogbnVtYmVyXG59XG5cbmNvbnN0IFBPTU9ET1JPX0xPR19QQVRIID0gYCR7VEFSRUFTX0ZPTERFUn0vJHtQT01PRE9ST19MT0dfQkFTRU5BTUV9Lm1kYFxuY29uc3QgUE9NT0RPUk9fTE9HX0hFQURFUiA9IFtcbiAgJyMgUmVnaXN0cm8gUG9tb2Rvcm8nLFxuICAnJyxcbiAgJ3wgZmVjaGEgfCBob3JhcmlvIHwgdGlwbyBkZSBwb21vZG9ybyB8IHRhcmVhIHwgZGVzdmlvIHwnLFxuICAnfCAtLS0gfCAtLS0gfCAtLS0gfCAtLS0gfCAtLS0gfCcsXG5dLmpvaW4oJ1xcbicpXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBlbmRQb21vZG9yb0xvZ0VudHJ5KGFwcDogQXBwLCBpbnB1dDogQXBwZW5kUG9tb2Rvcm9Mb2dFbnRyeUlucHV0KSB7XG4gIGF3YWl0IGVuc3VyZVBvbW9kb3JvTG9nRmlsZShhcHApXG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGlucHV0LnRpbWVzdGFtcE1zKVxuICBjb25zdCBkYXRlVGV4dCA9IHRvTG9jYWxEYXRlVGV4dChkYXRlKVxuICBjb25zdCB0aW1lVGV4dCA9IHRvTG9jYWxUaW1lVGV4dChkYXRlKVxuICBjb25zdCB0eXBlVGV4dCA9IHNhbml0aXplUGlwZVRleHQoaW5wdXQudHlwZSlcbiAgY29uc3QgdGFza1RleHQgPSBzYW5pdGl6ZVBpcGVUZXh0KGlucHV0LnRhc2spXG4gIGNvbnN0IGRldmlhdGlvblRleHQgPSBmb3JtYXRIb3VycyhpbnB1dC5kZXZpYXRpb25Ib3VycylcbiAgY29uc3Qgcm93ID0gYHwgJHtkYXRlVGV4dH0gfCAke3RpbWVUZXh0fSB8ICR7dHlwZVRleHR9IHwgJHt0YXNrVGV4dH0gfCAke2RldmlhdGlvblRleHR9IHxgXG5cbiAgY29uc3QgZmlsZSA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoUE9NT0RPUk9fTE9HX1BBVEgpXG4gIGlmICghKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpXG4gICAgcmV0dXJuXG5cbiAgY29uc3QgY3VycmVudCA9IGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKGZpbGUpXG4gIGNvbnN0IG5leHRDb250ZW50ID0gY3VycmVudC50cmltRW5kKClcbiAgICA/IGAke2N1cnJlbnQudHJpbUVuZCgpfVxcbiR7cm93fVxcbmBcbiAgICA6IGAke1BPTU9ET1JPX0xPR19IRUFERVJ9XFxuJHtyb3d9XFxuYFxuICBhd2FpdCBhcHAudmF1bHQubW9kaWZ5KGZpbGUsIG5leHRDb250ZW50KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVhZFBvbW9kb3JvTG9nRW50cmllcyhhcHA6IEFwcCk6IFByb21pc2U8UG9tb2Rvcm9Mb2dFbnRyeVtdPiB7XG4gIGF3YWl0IGVuc3VyZVBvbW9kb3JvTG9nRmlsZShhcHApXG5cbiAgY29uc3QgZmlsZSA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoUE9NT0RPUk9fTE9HX1BBVEgpXG4gIGlmICghKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpXG4gICAgcmV0dXJuIFtdXG5cbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKGZpbGUpXG4gIGNvbnN0IGVudHJpZXM6IFBvbW9kb3JvTG9nRW50cnlbXSA9IFtdXG5cbiAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KC9cXHI/XFxuLylcbiAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgaWYgKCFsaW5lLnRyaW0oKS5zdGFydHNXaXRoKCd8JykpXG4gICAgICBjb250aW51ZVxuXG4gICAgaWYgKGxpbmUuaW5jbHVkZXMoJ2ZlY2hhIHwgaG9yYXJpbyB8IHRpcG8gZGUgcG9tb2Rvcm8gfCB0YXJlYSB8IGRlc3ZpbycpKVxuICAgICAgY29udGludWVcblxuICAgIGlmIChsaW5lLmluY2x1ZGVzKCd8IC0tLSB8JykpXG4gICAgICBjb250aW51ZVxuXG4gICAgY29uc3QgY29sdW1ucyA9IGxpbmUuc3BsaXQoJ3wnKS5tYXAoaXRlbSA9PiBpdGVtLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pXG4gICAgaWYgKGNvbHVtbnMubGVuZ3RoIDwgNSlcbiAgICAgIGNvbnRpbnVlXG5cbiAgICBjb25zdCBkZXZpYXRpb25Ib3VycyA9IE51bWJlci5wYXJzZUZsb2F0KGNvbHVtbnNbNF0pXG4gICAgZW50cmllcy5wdXNoKHtcbiAgICAgIGRhdGU6IGNvbHVtbnNbMF0sXG4gICAgICB0aW1lOiBjb2x1bW5zWzFdLFxuICAgICAgdHlwZTogY29sdW1uc1syXSxcbiAgICAgIHRhc2s6IGNvbHVtbnNbM10sXG4gICAgICBkZXZpYXRpb25Ib3VyczogTnVtYmVyLmlzTmFOKGRldmlhdGlvbkhvdXJzKSA/IDAgOiBkZXZpYXRpb25Ib3VycyxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVudHJpZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVudHJpZXNCeURhdGUoZW50cmllczogUG9tb2Rvcm9Mb2dFbnRyeVtdLCBsb2NhbERhdGVUZXh0OiBzdHJpbmcpOiBQb21vZG9yb0xvZ0VudHJ5W10ge1xuICByZXR1cm4gZW50cmllcy5maWx0ZXIoZW50cnkgPT4gZW50cnkuZGF0ZSA9PT0gbG9jYWxEYXRlVGV4dClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTG9jYWxEYXRlVGV4dChkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICBjb25zdCBtb250aCA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpXG4gIGNvbnN0IGRheSA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKVxuICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YFxufVxuXG5mdW5jdGlvbiB0b0xvY2FsVGltZVRleHQoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIGNvbnN0IGhvdXJzID0gU3RyaW5nKGRhdGUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgJzAnKVxuICBjb25zdCBtaW51dGVzID0gU3RyaW5nKGRhdGUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpXG4gIHJldHVybiBgJHtob3Vyc306JHttaW51dGVzfWBcbn1cblxuYXN5bmMgZnVuY3Rpb24gZW5zdXJlUG9tb2Rvcm9Mb2dGaWxlKGFwcDogQXBwKSB7XG4gIGNvbnN0IGZvbGRlciA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoVEFSRUFTX0ZPTERFUilcbiAgaWYgKCFmb2xkZXIpXG4gICAgYXdhaXQgYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihUQVJFQVNfRk9MREVSKVxuXG4gIGNvbnN0IGV4aXN0aW5nID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChQT01PRE9ST19MT0dfUEFUSClcbiAgaWYgKGV4aXN0aW5nKVxuICAgIHJldHVyblxuXG4gIGF3YWl0IGFwcC52YXVsdC5jcmVhdGUoUE9NT0RPUk9fTE9HX1BBVEgsIGAke1BPTU9ET1JPX0xPR19IRUFERVJ9XFxuYClcbn1cblxuZnVuY3Rpb24gc2FuaXRpemVQaXBlVGV4dCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xcfC9nLCAnLycpLnRyaW0oKSB8fCAnLSdcbn1cblxuZnVuY3Rpb24gZm9ybWF0SG91cnMoaG91cnM6IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiAoTWF0aC5yb3VuZChob3VycyAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMilcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb2xvclBpY2tlcihcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgY29sb3JzOiBzdHJpbmdbXSxcbiAgc2VsZWN0ZWQ6IHN0cmluZyxcbiAgb25DaGFuZ2U6IChuZXh0Q29sb3I6IHN0cmluZykgPT4gdm9pZCxcbikge1xuICBjb25zdCB3cmFwID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jb2xvci1waWNrZXInIH0pXG5cbiAgZm9yIChjb25zdCBjb2xvciBvZiBjb2xvcnMpIHtcbiAgICBjb25zdCBzd2F0Y2ggPSB3cmFwLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICd0YXJlYXMtY29sb3Itc3dhdGNoJyB9KVxuICAgIHN3YXRjaC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3JcblxuICAgIGlmIChjb2xvciA9PT0gc2VsZWN0ZWQpXG4gICAgICBzd2F0Y2guYWRkQ2xhc3MoJ3RhcmVhcy1zd2F0Y2gtc2VsZWN0ZWQnKVxuXG4gICAgc3dhdGNoLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBvbkNoYW5nZShjb2xvcilcbiAgICAgIG1hcmtTZWxlY3RlZCh3cmFwLCBzd2F0Y2gpXG4gICAgICBjdXN0b21JbnB1dC52YWx1ZSA9IGNvbG9yXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY3VzdG9tSW5wdXQgPSB3cmFwLmNyZWF0ZUVsKCdpbnB1dCcpXG4gIGN1c3RvbUlucHV0LnR5cGUgPSAnY29sb3InXG4gIGN1c3RvbUlucHV0LnZhbHVlID0gc2VsZWN0ZWRcbiAgY3VzdG9tSW5wdXQuY2xhc3NOYW1lID0gJ3RhcmVhcy1jb2xvci1pbnB1dCdcbiAgY3VzdG9tSW5wdXQub25pbnB1dCA9ICgpID0+IHtcbiAgICBvbkNoYW5nZShjdXN0b21JbnB1dC52YWx1ZSlcbiAgICBjbGVhclNlbGVjdGVkKHdyYXApXG4gIH1cblxuICByZXR1cm4geyB3cmFwLCBjdXN0b21JbnB1dCB9XG59XG5cbmZ1bmN0aW9uIG1hcmtTZWxlY3RlZCh3cmFwOiBIVE1MRWxlbWVudCwgc2VsZWN0ZWRTd2F0Y2g6IEhUTUxFbGVtZW50KSB7XG4gIGNsZWFyU2VsZWN0ZWQod3JhcClcbiAgc2VsZWN0ZWRTd2F0Y2guYWRkQ2xhc3MoJ3RhcmVhcy1zd2F0Y2gtc2VsZWN0ZWQnKVxufVxuXG5mdW5jdGlvbiBjbGVhclNlbGVjdGVkKHdyYXA6IEhUTUxFbGVtZW50KSB7XG4gIHdyYXBcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy1jb2xvci1zd2F0Y2gnKVxuICAgIC5mb3JFYWNoKHN3YXRjaCA9PiBzd2F0Y2guY2xhc3NMaXN0LnJlbW92ZSgndGFyZWFzLXN3YXRjaC1zZWxlY3RlZCcpKVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7IFBSRVNFVF9DT0xPUlMgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgdHlwZSB7IFRhcmVhc1BsdWdpbiB9IGZyb20gJy4uL3BsdWdpbi9UYXJlYXNQbHVnaW4nXG5pbXBvcnQgdHlwZSB7IFRhcmVhc1ZpZXdIYW5kbGUgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IGNyZWF0ZUNvbG9yUGlja2VyIH0gZnJvbSAnLi4vdWkvY29sb3JQaWNrZXInXG5cbmV4cG9ydCBjbGFzcyBOZXdHcm91cE1vZGFsIGV4dGVuZHMgb2JzaWRpYW4uTW9kYWwge1xuICBwcml2YXRlIHBsdWdpbjogVGFyZWFzUGx1Z2luXG4gIHByaXZhdGUgdmlldzogVGFyZWFzVmlld0hhbmRsZVxuICBwcml2YXRlIGRhdGE6IHsgbmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nIH1cblxuICBjb25zdHJ1Y3RvcihhcHA6IG9ic2lkaWFuLkFwcCwgcGx1Z2luOiBUYXJlYXNQbHVnaW4sIHZpZXc6IFRhcmVhc1ZpZXdIYW5kbGUpIHtcbiAgICBzdXBlcihhcHApXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW5cbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy5kYXRhID0geyBuYW1lOiAnJywgY29sb3I6IFBSRVNFVF9DT0xPUlNbMl0gfVxuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzXG4gICAgY29udGVudEVsLmFkZENsYXNzKCd0YXJlYXMtbW9kYWwnKVxuICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdOdWV2byBHcnVwbycgfSlcblxuICAgIG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZSgnTm9tYnJlIGRlbCBncnVwbycpLmFkZFRleHQoKHRleHQpID0+IHtcbiAgICAgIHRleHQuc2V0UGxhY2Vob2xkZXIoJ0VqOiBEaWFyaWFzLCBzZW1hbmFsZXMuLi4nKVxuICAgICAgdGV4dC5vbkNoYW5nZSh2YWx1ZSA9PiB0aGlzLmRhdGEubmFtZSA9IHZhbHVlKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0ZXh0LmlucHV0RWwuZm9jdXMoKSwgNTApXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbG9yU2V0dGluZyA9IG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZSgnQ29sb3InKVxuICAgIGNyZWF0ZUNvbG9yUGlja2VyKGNvbG9yU2V0dGluZy5jb250cm9sRWwsIFBSRVNFVF9DT0xPUlMsIHRoaXMuZGF0YS5jb2xvciwgKG5leHRDb2xvcikgPT4ge1xuICAgICAgdGhpcy5kYXRhLmNvbG9yID0gbmV4dENvbG9yXG4gICAgfSlcblxuICAgIGNvbnN0IGZvb3RlciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtbW9kYWwtZm9vdGVyJyB9KVxuXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdDcmVhciBncnVwbycsIGNsczogJ21vZC1jdGEnIH0pXG4gICAgY3JlYXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNyZWF0ZUdyb3VwKClcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ2FuY2VsYXInIH0pXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlKClcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVHcm91cCgpIHtcbiAgICBjb25zdCBncm91cE5hbWUgPSB0aGlzLmRhdGEubmFtZS50cmltKClcbiAgICBpZiAoIWdyb3VwTmFtZSkge1xuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZSgnRWwgbm9tYnJlIGVzIHJlcXVlcmlkbycpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnBsdWdpbi5hZGRFcXVpcG8oZ3JvdXBOYW1lLCB0aGlzLmRhdGEuY29sb3IpXG4gICAgdGhpcy52aWV3LmV4cGFuZGVkR3JvdXBzLmFkZChncm91cE5hbWUpXG4gICAgdGhpcy52aWV3LnJlbmRlcigpXG5cbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBHcnVwbyBcIiR7Z3JvdXBOYW1lfVwiIGNyZWFkb2ApXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQgeyBMT0NLRURfRVFVSVBPX05BTUVTLCBQUkVTRVRfQ09MT1JTIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgY291bnRUb3BMZXZlbFRlYW1UYXNrcywgcmVuYW1lVGVhbUluVGFza3MgfSBmcm9tICcuLi9lbmdpbmVzL2Zyb250bWF0dGVyRW5naW5lJ1xuaW1wb3J0IHR5cGUgeyBUYXJlYXNQbHVnaW4gfSBmcm9tICcuLi9wbHVnaW4vVGFyZWFzUGx1Z2luJ1xuaW1wb3J0IHR5cGUgeyBFcXVpcG8sIFRhcmVhc1ZpZXdIYW5kbGUgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IGNyZWF0ZUNvbG9yUGlja2VyIH0gZnJvbSAnLi4vdWkvY29sb3JQaWNrZXInXG5cbmV4cG9ydCBjbGFzcyBFZGl0U2VjdGlvbk1vZGFsIGV4dGVuZHMgb2JzaWRpYW4uTW9kYWwge1xuICBwcml2YXRlIHBsdWdpbjogVGFyZWFzUGx1Z2luXG4gIHByaXZhdGUgZXFPYmo6IEVxdWlwb1xuICBwcml2YXRlIHZpZXc6IFRhcmVhc1ZpZXdIYW5kbGVcbiAgcHJpdmF0ZSBkYXRhOiB7IG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyB9XG5cbiAgY29uc3RydWN0b3IoYXBwOiBvYnNpZGlhbi5BcHAsIHBsdWdpbjogVGFyZWFzUGx1Z2luLCBlcU9iajogRXF1aXBvLCB2aWV3OiBUYXJlYXNWaWV3SGFuZGxlKSB7XG4gICAgc3VwZXIoYXBwKVxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luXG4gICAgdGhpcy5lcU9iaiA9IGVxT2JqXG4gICAgdGhpcy52aWV3ID0gdmlld1xuICAgIHRoaXMuZGF0YSA9IHsgbmFtZTogZXFPYmoubmFtZSwgY29sb3I6IGVxT2JqLmNvbG9yIH1cbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpc1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLW1vZGFsJylcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnRWRpdGFyIHNlY2Npw7NuJyB9KVxuXG4gICAgbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKS5zZXROYW1lKCdOb21icmUnKS5hZGRUZXh0KCh0ZXh0KSA9PiB7XG4gICAgICB0ZXh0LnNldFZhbHVlKHRoaXMuZGF0YS5uYW1lKVxuICAgICAgdGV4dC5vbkNoYW5nZSh2YWx1ZSA9PiB0aGlzLmRhdGEubmFtZSA9IHZhbHVlKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0ZXh0LmlucHV0RWwuZm9jdXMoKSwgNTApXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbG9yU2V0dGluZyA9IG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZSgnQ29sb3InKVxuICAgIGNyZWF0ZUNvbG9yUGlja2VyKGNvbG9yU2V0dGluZy5jb250cm9sRWwsIFBSRVNFVF9DT0xPUlMsIHRoaXMuZGF0YS5jb2xvciwgKG5leHRDb2xvcikgPT4ge1xuICAgICAgdGhpcy5kYXRhLmNvbG9yID0gbmV4dENvbG9yXG4gICAgfSlcblxuICAgIGNvbnN0IGZvb3RlciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtbW9kYWwtZm9vdGVyJyB9KVxuXG4gICAgaWYgKCF0aGlzLmlzTG9ja2VkU2VjdGlvbigpKSB7XG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgICAgdGV4dDogJ0VsaW1pbmFyIHNlY2Npw7NuJyxcbiAgICAgICAgY2xzOiAnbW9kLXdhcm5pbmcnLFxuICAgICAgfSlcbiAgICAgIGRlbGV0ZUJ1dHRvbi5zdHlsZS5tYXJnaW5SaWdodCA9ICdhdXRvJ1xuICAgICAgZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNvbmZpcm1EZWxldGUoKVxuICAgIH1cblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ2FuY2VsYXInIH0pXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlKClcblxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0d1YXJkYXInLCBjbHM6ICdtb2QtY3RhJyB9KVxuICAgIHNhdmVCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuc2F2ZSgpXG4gIH1cblxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2F2ZSgpIHtcbiAgICBjb25zdCBuZXdOYW1lID0gdGhpcy5kYXRhLm5hbWUudHJpbSgpXG4gICAgaWYgKCFuZXdOYW1lKSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdFbCBub21icmUgZXMgcmVxdWVyaWRvJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9sZE5hbWUgPSB0aGlzLmVxT2JqLm5hbWVcbiAgICBpZiAodGhpcy5pc0xvY2tlZFNlY3Rpb24oKSAmJiBuZXdOYW1lICE9PSBvbGROYW1lKSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBMYSBzZWNjacOzbiBcIiR7b2xkTmFtZX1cIiBubyBwdWVkZSByZW5vbWJyYXJzZWApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAobmV3TmFtZSAhPT0gb2xkTmFtZSlcbiAgICAgIGF3YWl0IHJlbmFtZVRlYW1JblRhc2tzKHRoaXMuYXBwLCBvbGROYW1lLCBuZXdOYW1lKVxuXG4gICAgdGhpcy5wbHVnaW4udXBkYXRlRXF1aXBvKG9sZE5hbWUsIHsgbmFtZTogbmV3TmFtZSwgY29sb3I6IHRoaXMuZGF0YS5jb2xvciB9KVxuICAgIHRoaXMudmlldy5leHBhbmRlZEdyb3Vwcy5kZWxldGUob2xkTmFtZSlcbiAgICB0aGlzLnZpZXcuZXhwYW5kZWRHcm91cHMuYWRkKG5ld05hbWUpXG4gICAgdGhpcy52aWV3LnJlbmRlcigpXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cblxuICBwcml2YXRlIGNvbmZpcm1EZWxldGUoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2NrZWRTZWN0aW9uKCkpIHtcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYExhIHNlY2Npw7NuIFwiJHt0aGlzLmVxT2JqLm5hbWV9XCIgbm8gc2UgcHVlZGUgZWxpbWluYXJgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGFza0NvdW50ID0gY291bnRUb3BMZXZlbFRlYW1UYXNrcyh0aGlzLmFwcCwgdGhpcy5lcU9iai5uYW1lKVxuICAgIGlmICh0YXNrQ291bnQgPiAwKSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBMYSBzZWNjacOzbiBcIiR7dGhpcy5lcU9iai5uYW1lfVwiIHRpZW5lICR7dGFza0NvdW50fSB0YXJlYShzKS4gTW92YWxhcyBhIG90cmEgc2VjY2nDs24gYW50ZXMgZGUgZWxpbWluYXIuYClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMucGx1Z2luLnJlbW92ZUVxdWlwbyh0aGlzLmVxT2JqLm5hbWUpXG4gICAgdGhpcy52aWV3LmV4cGFuZGVkR3JvdXBzLmRlbGV0ZSh0aGlzLmVxT2JqLm5hbWUpXG4gICAgdGhpcy52aWV3LnJlbmRlcigpXG4gICAgbmV3IG9ic2lkaWFuLk5vdGljZShgU2VjY2nDs24gXCIke3RoaXMuZXFPYmoubmFtZX1cIiBlbGltaW5hZGFgKVxuICAgIHRoaXMuY2xvc2UoKVxuICB9XG5cbiAgcHJpdmF0ZSBpc0xvY2tlZFNlY3Rpb24oKSB7XG4gICAgcmV0dXJuIExPQ0tFRF9FUVVJUE9fTkFNRVMuaW5jbHVkZXModGhpcy5lcU9iai5uYW1lKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBvYnNpZGlhbiBmcm9tICdvYnNpZGlhbidcblxuaW1wb3J0IHR5cGUgeyBUYXNrSXRlbSB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgY2xhc3MgRWRpdFRhc2tGaWxlTW9kYWwgZXh0ZW5kcyBvYnNpZGlhbi5Nb2RhbCB7XG4gIHByaXZhdGUgdGFzazogVGFza0l0ZW1cbiAgcHJpdmF0ZSB0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgaW5pdGlhbENvbnRlbnQgPSAnJ1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogb2JzaWRpYW4uQXBwLCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIHN1cGVyKGFwcClcbiAgICB0aGlzLnRhc2sgPSB0YXNrXG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXNcbiAgICB0aGlzLm1vZGFsRWwuYWRkQ2xhc3MoJ3RhcmVhcy1lZGl0LXRhc2stbW9kYWwtc2hlbGwnKVxuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLW1vZGFsJylcbiAgICBjb250ZW50RWwuYWRkQ2xhc3MoJ3RhcmVhcy1lZGl0LXRhc2stbW9kYWwnKVxuICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6IGBFZGl0YXI6ICR7dGhpcy50YXNrLnRhcmVhfWAgfSlcblxuICAgIGNvbnN0IGhlbHBlciA9IGNvbnRlbnRFbC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLWVkaXQtdGFzay1oaW50JyB9KVxuICAgIGhlbHBlci5zZXRUZXh0KGBFZGl0YSBlbCBjb250ZW5pZG8gY29tcGxldG8gZGUgJHt0aGlzLnRhc2suZmlsZS5wYXRofWApXG5cbiAgICB0aGlzLnRleHRhcmVhID0gY29udGVudEVsLmNyZWF0ZUVsKCd0ZXh0YXJlYScsIHtcbiAgICAgIGNsczogJ3RhcmVhcy1lZGl0LXRhc2stdGV4dGFyZWEnLFxuICAgICAgYXR0cjoge1xuICAgICAgICBzcGVsbGNoZWNrOiAnZmFsc2UnLFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgY29uc3QgZm9vdGVyID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1tb2RhbC1mb290ZXInIH0pXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdDYW5jZWxhcicgfSlcbiAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuY2xvc2UoKVxuXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnR3VhcmRhcicsIGNsczogJ21vZC1jdGEnIH0pXG4gICAgc2F2ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdm9pZCB0aGlzLnNhdmUoKVxuICAgIH1cblxuICAgIHZvaWQgdGhpcy5sb2FkRmlsZUNvbnRlbnQoKVxuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxvYWRGaWxlQ29udGVudCgpIHtcbiAgICBpZiAoIXRoaXMudGV4dGFyZWEpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5jYWNoZWRSZWFkKHRoaXMudGFzay5maWxlKVxuICAgIHRoaXMuaW5pdGlhbENvbnRlbnQgPSBjb250ZW50XG4gICAgdGhpcy50ZXh0YXJlYS52YWx1ZSA9IGNvbnRlbnRcbiAgICB0aGlzLnRleHRhcmVhLmZvY3VzKClcbiAgICB0aGlzLnRleHRhcmVhLnNldFNlbGVjdGlvblJhbmdlKDAsIDApXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNhdmUoKSB7XG4gICAgaWYgKCF0aGlzLnRleHRhcmVhKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBuZXh0Q29udGVudCA9IHRoaXMudGV4dGFyZWEudmFsdWVcbiAgICBpZiAobmV4dENvbnRlbnQgPT09IHRoaXMuaW5pdGlhbENvbnRlbnQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgdGhpcy5hcHAudmF1bHQubW9kaWZ5KHRoaXMudGFzay5maWxlLCBuZXh0Q29udGVudClcbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdUYXJlYSBhY3R1YWxpemFkYScpXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQgdHlwZSB7IFRhc2tJdGVtIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBjbGFzcyBBZGRUYXNrQ29tbWVudE1vZGFsIGV4dGVuZHMgb2JzaWRpYW4uTW9kYWwge1xuICBwcml2YXRlIHRhc2s6IFRhc2tJdGVtXG4gIHByaXZhdGUgdGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBudWxsID0gbnVsbFxuXG4gIGNvbnN0cnVjdG9yKGFwcDogb2JzaWRpYW4uQXBwLCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIHN1cGVyKGFwcClcbiAgICB0aGlzLnRhc2sgPSB0YXNrXG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXNcbiAgICBjb250ZW50RWwuYWRkQ2xhc3MoJ3RhcmVhcy1tb2RhbCcpXG4gICAgY29udGVudEVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogYENvbWVudGFyaW86ICR7dGhpcy50YXNrLnRhcmVhfWAgfSlcblxuICAgIGNvbnN0IGhlbHAgPSBjb250ZW50RWwuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1jb21tZW50LW1vZGFsLWhpbnQnIH0pXG4gICAgaGVscC5zZXRUZXh0KCdTZSBhZ3JlZ2Fyw6EgYWwgZmluYWwgZGVsIGFyY2hpdm8gZGUgbGEgdGFyZWEuJylcblxuICAgIHRoaXMudGV4dGFyZWEgPSBjb250ZW50RWwuY3JlYXRlRWwoJ3RleHRhcmVhJywge1xuICAgICAgY2xzOiAndGFyZWFzLWNvbW1lbnQtbW9kYWwtdGV4dGFyZWEnLFxuICAgICAgYXR0cjogeyBwbGFjZWhvbGRlcjogJ0VzY3JpYmUgdW4gY29tZW50YXJpby4uLicgfSxcbiAgICB9KVxuICAgIHRoaXMudGV4dGFyZWEuZm9jdXMoKVxuXG4gICAgY29uc3QgZm9vdGVyID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1tb2RhbC1mb290ZXInIH0pXG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NhbmNlbGFyJyB9KVxuICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jbG9zZSgpXG5cbiAgICBjb25zdCBhZGRCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0FncmVnYXInLCBjbHM6ICdtb2QtY3RhJyB9KVxuICAgIGFkZEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdm9pZCB0aGlzLmFwcGVuZENvbW1lbnQoKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBhcHBlbmRDb21tZW50KCkge1xuICAgIGNvbnN0IHJhd0NvbW1lbnQgPSB0aGlzLnRleHRhcmVhPy52YWx1ZSA/PyAnJ1xuICAgIGNvbnN0IGNvbW1lbnQgPSByYXdDb21tZW50LnRyaW0oKVxuICAgIGlmICghY29tbWVudCkge1xuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZSgnRXNjcmliZSB1biBjb21lbnRhcmlvIGFudGVzIGRlIGd1YXJkYXInKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNhY2hlZFJlYWQodGhpcy50YXNrLmZpbGUpXG4gICAgY29uc3QgaGFzQ29udGVudCA9IGN1cnJlbnQudHJpbSgpLmxlbmd0aCA+IDBcbiAgICBjb25zdCB3aXRoTmV3bGluZSA9IGN1cnJlbnQuZW5kc1dpdGgoJ1xcbicpID8gY3VycmVudCA6IGAke2N1cnJlbnR9XFxuYFxuICAgIGNvbnN0IHNwYWNlciA9IGhhc0NvbnRlbnQgPyAnXFxuJyA6ICcnXG4gICAgY29uc3QgY29tbWVudEJsb2NrID0gdGhpcy5idWlsZENvbW1lbnRCbG9jayhjb21tZW50KVxuICAgIGNvbnN0IG5leHQgPSBgJHt3aXRoTmV3bGluZX0ke3NwYWNlcn0ke2NvbW1lbnRCbG9ja31gXG5cbiAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkodGhpcy50YXNrLmZpbGUsIG5leHQpXG4gICAgbmV3IG9ic2lkaWFuLk5vdGljZSgnQ29tZW50YXJpbyBhZ3JlZ2FkbycpXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQ29tbWVudEJsb2NrKGNvbW1lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IGRheSA9IFN0cmluZyhub3cuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpXG4gICAgY29uc3QgbW9udGggPSBTdHJpbmcobm93LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpXG4gICAgY29uc3QgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpXG4gICAgY29uc3QgaG91cnMgPSBTdHJpbmcobm93LmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJylcbiAgICBjb25zdCBtaW51dGVzID0gU3RyaW5nKG5vdy5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsICcwJylcblxuICAgIGNvbnN0IHN0YW1wID0gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9ICR7aG91cnN9OiR7bWludXRlc31gXG4gICAgcmV0dXJuIGAjIyBDb21lbnRhcmlvIC0gJHtzdGFtcH1cXG5cXG4ke2NvbW1lbnR9XFxuYFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBvYnNpZGlhbiBmcm9tICdvYnNpZGlhbidcblxuaW1wb3J0IHR5cGUgeyBQb21vZG9yb0R1cmF0aW9ucyB9IGZyb20gJy4uL3R5cGVzJ1xuXG5pbnRlcmZhY2UgUG9tb2Rvcm9QcmVzZXQge1xuICBpZDogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgd29ya0xhYmVsOiBzdHJpbmdcbiAgc2hvcnRCcmVha0xhYmVsOiBzdHJpbmdcbiAgY3ljbGVzTGFiZWw6IHN0cmluZ1xuICBsb25nQnJlYWtMYWJlbDogc3RyaW5nXG4gIGlkZWFsRm9yOiBzdHJpbmdcbiAgZHVyYXRpb25zOiBQb21vZG9yb0R1cmF0aW9uc1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvbW9kb3JvUHJlc2V0Q2FyZERhdGEge1xuICB0aXRsZTogc3RyaW5nXG4gIHVzYWdlOiBzdHJpbmdcbiAgd29ya0xhYmVsOiBzdHJpbmdcbiAgc2hvcnRCcmVha0xhYmVsOiBzdHJpbmdcbiAgbG9uZ0JyZWFrTGFiZWw6IHN0cmluZ1xuICBjeWNsZXNMYWJlbDogc3RyaW5nXG59XG5cbmNvbnN0IFBPTU9ET1JPX1BSRVNFVFM6IFBvbW9kb3JvUHJlc2V0W10gPSBbXG4gIHtcbiAgICBpZDogJ3N0YW5kYXJkLTI1LTUnLFxuICAgIHRpdGxlOiAn4q2QIEVzdMOhbmRhciAtIDI1LzUnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDI1IG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDUgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogNCcsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMTUgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IHRhcmVhcyBtb2RlcmFkYXMsIHByb2dyYW1hY2nDs24sIGVzdHVkaW8sIG1hbnRlbmVyIHJpdG1vIGNvbnN0YW50ZSBzaW4gcXVlbWFyc2UuJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDI1LCBzaG9ydEJyZWFrTWludXRlczogNSwgbG9uZ0JyZWFrTWludXRlczogMTUgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnZGVlcC1mb2N1cy01MC0xMCcsXG4gICAgdGl0bGU6ICfimqEgUGFyYSBmb2NvIHByb2Z1bmRvIC0gNTAvMTAnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDUwIG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDEwIG1pbicsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDMnLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDIwIG1pbicsXG4gICAgaWRlYWxGb3I6ICdJZGVhbCBwYXJhOiBwcm9ncmFtYWNpw7NuIHBlc2FkYSwgZGVidWdnaW5nLCBpbnZlc3RpZ2FjacOzbiwgZXNjcml0dXJhIGxhcmdhLiBDdWFuZG8gdGUgbWV0w6lzIGVuIFwiZGVlcCB3b3JrXCIuJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDUwLCBzaG9ydEJyZWFrTWludXRlczogMTAsIGxvbmdCcmVha01pbnV0ZXM6IDIwIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ2Rldi1jbGFzc2ljLTUyLTE3JyxcbiAgICB0aXRsZTogJ/CfkrsgQ2zDoXNpY28gZGUgcHJvZ3JhbWFkb3JlcyAtIDUyLzE3JyxcbiAgICB3b3JrTGFiZWw6ICdUcmFiYWpvOiA1MiBtaW4nLFxuICAgIHNob3J0QnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGNvcnRvOiAxNyBtaW4nLFxuICAgIGN5Y2xlc0xhYmVsOiAnQ2ljbG9zOiAyJyxcbiAgICBsb25nQnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGxhcmdvOiAyMCBtaW4nLFxuICAgIGlkZWFsRm9yOiAnSWRlYWwgcGFyYTogdGFyZWFzIGNvbXBsZWphcyBxdWUgcmVxdWllcmVuIGZsdWlyIHNpbiBjb3J0ZXMgbGFyZ29zLiBNYW50aWVuZSBlbmVyZ8OtYSBhbHRhLicsXG4gICAgZHVyYXRpb25zOiB7IHdvcmtNaW51dGVzOiA1Miwgc2hvcnRCcmVha01pbnV0ZXM6IDE3LCBsb25nQnJlYWtNaW51dGVzOiAyMCB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdjcmVhdGl2ZS00MC0xMCcsXG4gICAgdGl0bGU6ICfwn46oIENyZWF0aXZvIC0gNDAvMTAnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDQwIG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDEwIG1pbicsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDQnLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDIwIG1pbicsXG4gICAgaWRlYWxGb3I6ICdJZGVhbCBwYXJhOiBkaXNlw7FvLCBlc2NyaXR1cmEgY3JlYXRpdmEsIGJyYWluc3Rvcm1pbmcsIGRvbmRlIHF1ZXLDqXMgdGllbXBvIHBhcmEgZW50cmFyIGVuIGVzdGFkby4nLFxuICAgIGR1cmF0aW9uczogeyB3b3JrTWludXRlczogNDAsIHNob3J0QnJlYWtNaW51dGVzOiAxMCwgbG9uZ0JyZWFrTWludXRlczogMjAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnc3ByaW50LTQ1LTE1JyxcbiAgICB0aXRsZTogJ/CflKggU3ByaW50IC0gNDUvMTUnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDQ1IG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDE1IG1pbicsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDMnLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDI1IG1pbicsXG4gICAgaWRlYWxGb3I6ICdJZGVhbCBwYXJhOiB0YXJlYXMgZ3JhbmRlcyBkb25kZSBuZWNlc2l0w6FzIGVtcHVqYXIgZnVlcnRlIChyZWZhY3RvcnMsIGRvY3VtZW50YWNpw7NuLCBhbsOhbGlzaXMpLicsXG4gICAgZHVyYXRpb25zOiB7IHdvcmtNaW51dGVzOiA0NSwgc2hvcnRCcmVha01pbnV0ZXM6IDE1LCBsb25nQnJlYWtNaW51dGVzOiAyNSB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdhZGhkLTIwLTUnLFxuICAgIHRpdGxlOiAn8J+noCBQYXJhIFREQUggbyBtdWNoYSBkaXN0cmFjY2nDs24gLSAyMC81JyxcbiAgICB3b3JrTGFiZWw6ICdUcmFiYWpvOiAyMCBtaW4nLFxuICAgIHNob3J0QnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGNvcnRvOiA1IG1pbicsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDQnLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDE1IG1pbicsXG4gICAgaWRlYWxGb3I6ICdJZGVhbCBwYXJhOiBjdWFuZG8gdGUgY3Vlc3RhIGVuZ2FuY2hhcnRlIG8gbWFudGVuZXIgZm9jbyBzb3N0ZW5pZG8uIEVudHJhZGFzIGNvcnRhcyBwZXJvIGVmZWN0aXZhcy4nLFxuICAgIGR1cmF0aW9uczogeyB3b3JrTWludXRlczogMjAsIHNob3J0QnJlYWtNaW51dGVzOiA1LCBsb25nQnJlYWtNaW51dGVzOiAxNSB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdtaWNyby0xNS01JyxcbiAgICB0aXRsZTogJ/Cfk4kgTWljcm8tUG9tb2Rvcm8gLSAxNS81JyxcbiAgICB3b3JrTGFiZWw6ICdUcmFiYWpvOiAxNSBtaW4nLFxuICAgIHNob3J0QnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGNvcnRvOiA1IG1pbicsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDQnLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDE1IG1pbicsXG4gICAgaWRlYWxGb3I6ICdJZGVhbCBwYXJhOiB0YXJlYXMgY2hpY2FzLCByZXZpc2FyIG1haWxzLCBvcmRlbmFyIHBlbmRpZW50ZXMsIGN1YW5kbyBlc3TDoXMgbWVudGFsbWVudGUgbXV5IGNhbnNhZG8uJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDE1LCBzaG9ydEJyZWFrTWludXRlczogNSwgbG9uZ0JyZWFrTWludXRlczogMTUgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnbG93LWVuZXJneS0xNS0zJyxcbiAgICB0aXRsZTogJ/CflIsgRW5lcmfDrWEgYmFqYSAtIDE1LzMnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDE1IG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDMgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogNCcsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMTIgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IGTDrWFzIGRlIGZhdGlnYSBtZW50YWwsIHRhcmVhcyBsaWdlcmFzLCBhdmFuemFyIGxlbnRvIHBlcm8gY29uc3RhbnRlLicsXG4gICAgZHVyYXRpb25zOiB7IHdvcmtNaW51dGVzOiAxNSwgc2hvcnRCcmVha01pbnV0ZXM6IDMsIGxvbmdCcmVha01pbnV0ZXM6IDEyIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ3VsdHJhZGlhbi05MC0yMCcsXG4gICAgdGl0bGU6ICfwn6exIENpY2xvcyB1bHRyYWRpYW5vcyAtIDkwLzIwJyxcbiAgICB3b3JrTGFiZWw6ICdUcmFiYWpvOiA5MCBtaW4nLFxuICAgIHNob3J0QnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGNvcnRvOiBubyBhcGxpY2EnLFxuICAgIGN5Y2xlc0xhYmVsOiAnQ2ljbG9zOiAyIHBvciBzZXNpw7NuJyxcbiAgICBsb25nQnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGxhcmdvOiAyMCBtaW4nLFxuICAgIGlkZWFsRm9yOiAnSWRlYWwgcGFyYTogc2VzaW9uZXMgY3JlYXRpdmFzIHByb2Z1bmRhcyBvIGRlIGluZ2VuaWVyw61hIGRvbmRlIGNvcnRhciBlcyBjb250cmFwcm9kdWNlbnRlLicsXG4gICAgZHVyYXRpb25zOiB7IHdvcmtNaW51dGVzOiA5MCwgc2hvcnRCcmVha01pbnV0ZXM6IDIwLCBsb25nQnJlYWtNaW51dGVzOiAyMCB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdhZ2dyZXNzaXZlLTUwLTUnLFxuICAgIHRpdGxlOiAn8J+nqSA1MC81IChhZ3Jlc2l2byknLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDUwIG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDUgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogMycsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMjAgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IHRhcmVhcyBkZSBhbHRhIHByZXNpw7NuIG8gZW50cmVnYXMgZG9uZGUgcXVlcsOpcyBtaW5pbWl6YXIgcGF1c2FzLicsXG4gICAgZHVyYXRpb25zOiB7IHdvcmtNaW51dGVzOiA1MCwgc2hvcnRCcmVha01pbnV0ZXM6IDUsIGxvbmdCcmVha01pbnV0ZXM6IDIwIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ2JhbGFuY2VkLTMwLTEwJyxcbiAgICB0aXRsZTogJ/CfqrYgMzAvMTAgKGJhbGFuY2VhZG8pJyxcbiAgICB3b3JrTGFiZWw6ICdUcmFiYWpvOiAzMCBtaW4nLFxuICAgIHNob3J0QnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGNvcnRvOiAxMCBtaW4nLFxuICAgIGN5Y2xlc0xhYmVsOiAnQ2ljbG9zOiA0JyxcbiAgICBsb25nQnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGxhcmdvOiAyMCBtaW4nLFxuICAgIGlkZWFsRm9yOiAnSWRlYWwgcGFyYTogdGFyZWFzIGRlIGFuw6FsaXNpcywgYWRtaW5pc3RyYWNpw7NuLCBjb250YWJpbGlkYWQgbWVudGFsIGxpdmlhbmEgbyByZXNlYXJjaCB2YXJpYWRvLicsXG4gICAgZHVyYXRpb25zOiB7IHdvcmtNaW51dGVzOiAzMCwgc2hvcnRCcmVha01pbnV0ZXM6IDEwLCBsb25nQnJlYWtNaW51dGVzOiAyMCB9LFxuICB9LFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9tb2Rvcm9QcmVzZXRDYXJkRGF0YShkdXJhdGlvbnM6IFBvbW9kb3JvRHVyYXRpb25zKTogUG9tb2Rvcm9QcmVzZXRDYXJkRGF0YSB7XG4gIGNvbnN0IHByZXNldCA9IGZpbmRQb21vZG9yb1ByZXNldEJ5RHVyYXRpb25zKGR1cmF0aW9ucylcbiAgaWYgKHByZXNldCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogcHJlc2V0LnRpdGxlLFxuICAgICAgdXNhZ2U6IHByZXNldC5pZGVhbEZvci5yZXBsYWNlKC9eSWRlYWwgcGFyYTpcXHMqL2ksICcnKSxcbiAgICAgIHdvcmtMYWJlbDogcHJlc2V0LndvcmtMYWJlbCxcbiAgICAgIHNob3J0QnJlYWtMYWJlbDogcHJlc2V0LnNob3J0QnJlYWtMYWJlbCxcbiAgICAgIGxvbmdCcmVha0xhYmVsOiBwcmVzZXQubG9uZ0JyZWFrTGFiZWwsXG4gICAgICBjeWNsZXNMYWJlbDogcHJlc2V0LmN5Y2xlc0xhYmVsLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGl0bGU6IGBQZXJzb25hbGl6YWRvIC0gJHtkdXJhdGlvbnMud29ya01pbnV0ZXN9LyR7ZHVyYXRpb25zLnNob3J0QnJlYWtNaW51dGVzfWAsXG4gICAgdXNhZ2U6ICdDb25maWd1cmFjacOzbiBtYW51YWwgZ3VhcmRhZGEuJyxcbiAgICB3b3JrTGFiZWw6IGBUcmFiYWpvOiAke2R1cmF0aW9ucy53b3JrTWludXRlc30gbWluYCxcbiAgICBzaG9ydEJyZWFrTGFiZWw6IGBEZXNjYW5zbyBjb3J0bzogJHtkdXJhdGlvbnMuc2hvcnRCcmVha01pbnV0ZXN9IG1pbmAsXG4gICAgbG9uZ0JyZWFrTGFiZWw6IGBEZXNjYW5zbyBsYXJnbzogJHtkdXJhdGlvbnMubG9uZ0JyZWFrTWludXRlc30gbWluYCxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogNCcsXG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZFBvbW9kb3JvUHJlc2V0QnlEdXJhdGlvbnMoZHVyYXRpb25zOiBQb21vZG9yb0R1cmF0aW9ucyk6IFBvbW9kb3JvUHJlc2V0IHwgbnVsbCB7XG4gIGZvciAoY29uc3QgcHJlc2V0IG9mIFBPTU9ET1JPX1BSRVNFVFMpIHtcbiAgICBpZiAoXG4gICAgICBwcmVzZXQuZHVyYXRpb25zLndvcmtNaW51dGVzID09PSBkdXJhdGlvbnMud29ya01pbnV0ZXNcbiAgICAgICYmIHByZXNldC5kdXJhdGlvbnMuc2hvcnRCcmVha01pbnV0ZXMgPT09IGR1cmF0aW9ucy5zaG9ydEJyZWFrTWludXRlc1xuICAgICAgJiYgcHJlc2V0LmR1cmF0aW9ucy5sb25nQnJlYWtNaW51dGVzID09PSBkdXJhdGlvbnMubG9uZ0JyZWFrTWludXRlc1xuICAgICkge1xuICAgICAgcmV0dXJuIHByZXNldFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBjbGFzcyBQb21vZG9yb1ByZXNldE1vZGFsIGV4dGVuZHMgb2JzaWRpYW4uTW9kYWwge1xuICBwcml2YXRlIG9uQWNjZXB0OiAoZHVyYXRpb25zOiBQb21vZG9yb0R1cmF0aW9ucykgPT4gdm9pZFxuICBwcml2YXRlIHNlbGVjdGVkUHJlc2V0SWQ6IHN0cmluZ1xuICBwcml2YXRlIGNhcmRCeUlkID0gbmV3IE1hcDxzdHJpbmcsIEhUTUxEaXZFbGVtZW50PigpXG5cbiAgY29uc3RydWN0b3IoYXBwOiBvYnNpZGlhbi5BcHAsIGN1cnJlbnREdXJhdGlvbnM6IFBvbW9kb3JvRHVyYXRpb25zLCBvbkFjY2VwdDogKGR1cmF0aW9uczogUG9tb2Rvcm9EdXJhdGlvbnMpID0+IHZvaWQpIHtcbiAgICBzdXBlcihhcHApXG4gICAgdGhpcy5vbkFjY2VwdCA9IG9uQWNjZXB0XG4gICAgY29uc3QgbWF0Y2hlZCA9IGZpbmRQb21vZG9yb1ByZXNldEJ5RHVyYXRpb25zKGN1cnJlbnREdXJhdGlvbnMpXG4gICAgdGhpcy5zZWxlY3RlZFByZXNldElkID0gbWF0Y2hlZD8uaWQgPz8gUE9NT0RPUk9fUFJFU0VUU1swXS5pZFxuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIHRoaXMubW9kYWxFbC5hZGRDbGFzcygndGFyZWFzLXBvbW9kb3JvLXByZXNldC1tb2RhbC1zaGVsbCcpXG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXNcbiAgICBjb250ZW50RWwuYWRkQ2xhc3MoJ3RhcmVhcy1tb2RhbCcsICd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LW1vZGFsJylcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnRWxlZ8OtIHVuIHByZXNldCBQb21vZG9ybycgfSlcblxuICAgIGNvbnN0IGNhcmRzID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtY2FyZHMnIH0pXG4gICAgZm9yIChjb25zdCBwcmVzZXQgb2YgUE9NT0RPUk9fUFJFU0VUUykge1xuICAgICAgY29uc3QgY2FyZCA9IGNhcmRzLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtY2FyZCcgfSlcbiAgICAgIGNhcmQuc2V0QXR0cigncm9sZScsICdidXR0b24nKVxuICAgICAgY2FyZC5zZXRBdHRyKCd0YWJpbmRleCcsICcwJylcbiAgICAgIGNhcmQub25jbGljayA9ICgpID0+IHRoaXMuc2VsZWN0UHJlc2V0KHByZXNldC5pZClcbiAgICAgIGNhcmQub25rZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgIT09ICdFbnRlcicgJiYgZXZlbnQua2V5ICE9PSAnICcpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5zZWxlY3RQcmVzZXQocHJlc2V0LmlkKVxuICAgICAgfVxuXG4gICAgICBjYXJkLmNyZWF0ZUVsKCdoMycsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXByZXNldC10aXRsZScsIHRleHQ6IHByZXNldC50aXRsZSB9KVxuICAgICAgY2FyZC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LWRpdmlkZXInIH0pXG4gICAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LXVzYWdlLXRpdGxlJywgdGV4dDogJ1VzbycgfSlcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7XG4gICAgICAgIGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtdXNhZ2UnLFxuICAgICAgICB0ZXh0OiBwcmVzZXQuaWRlYWxGb3IucmVwbGFjZSgvXklkZWFsIHBhcmE6XFxzKi9pLCAnJyksXG4gICAgICB9KVxuICAgICAgY2FyZC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LWRpdmlkZXInIH0pXG4gICAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LWxpbmUnLCB0ZXh0OiBwcmVzZXQud29ya0xhYmVsIH0pXG4gICAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LWxpbmUnLCB0ZXh0OiBwcmVzZXQuc2hvcnRCcmVha0xhYmVsIH0pXG4gICAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LWxpbmUnLCB0ZXh0OiBwcmVzZXQubG9uZ0JyZWFrTGFiZWwgfSlcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtbGluZScsIHRleHQ6IHByZXNldC5jeWNsZXNMYWJlbCB9KVxuXG4gICAgICB0aGlzLmNhcmRCeUlkLnNldChwcmVzZXQuaWQsIGNhcmQpXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoU2VsZWN0aW9uKClcblxuICAgIGNvbnN0IGZvb3RlciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtbW9kYWwtZm9vdGVyJyB9KVxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ2FuY2VsYXInIH0pXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlKClcblxuICAgIGNvbnN0IGFjY2VwdEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQWNlcHRhcicsIGNsczogJ21vZC1jdGEnIH0pXG4gICAgYWNjZXB0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmFjY2VwdCgpXG4gIH1cblxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMubW9kYWxFbC5yZW1vdmVDbGFzcygndGFyZWFzLXBvbW9kb3JvLXByZXNldC1tb2RhbC1zaGVsbCcpXG4gICAgdGhpcy5jYXJkQnlJZC5jbGVhcigpXG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKVxuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RQcmVzZXQocHJlc2V0SWQ6IHN0cmluZykge1xuICAgIHRoaXMuc2VsZWN0ZWRQcmVzZXRJZCA9IHByZXNldElkXG4gICAgdGhpcy5yZWZyZXNoU2VsZWN0aW9uKClcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaFNlbGVjdGlvbigpIHtcbiAgICBmb3IgKGNvbnN0IHByZXNldCBvZiBQT01PRE9ST19QUkVTRVRTKSB7XG4gICAgICBjb25zdCBjYXJkID0gdGhpcy5jYXJkQnlJZC5nZXQocHJlc2V0LmlkKVxuICAgICAgaWYgKCFjYXJkKVxuICAgICAgICBjb250aW51ZVxuXG4gICAgICBjYXJkLnRvZ2dsZUNsYXNzKCdpcy1zZWxlY3RlZCcsIHRoaXMuc2VsZWN0ZWRQcmVzZXRJZCA9PT0gcHJlc2V0LmlkKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWNjZXB0KCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gUE9NT0RPUk9fUFJFU0VUUy5maW5kKHByZXNldCA9PiBwcmVzZXQuaWQgPT09IHRoaXMuc2VsZWN0ZWRQcmVzZXRJZClcbiAgICBpZiAoIXNlbGVjdGVkKVxuICAgICAgcmV0dXJuXG5cbiAgICB0aGlzLm9uQWNjZXB0KHsgLi4uc2VsZWN0ZWQuZHVyYXRpb25zIH0pXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQgdHlwZSB7IFRhc2tJdGVtIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RQb21vZG9yb1Rhc2tNb2RhbCBleHRlbmRzIG9ic2lkaWFuLk1vZGFsIHtcbiAgcHJpdmF0ZSB0YXNrczogVGFza0l0ZW1bXVxuICBwcml2YXRlIHNlbGVjdGVkVGFza1BhdGg6IHN0cmluZyB8IG51bGxcbiAgcHJpdmF0ZSBvblNlbGVjdDogKHRhc2tQYXRoOiBzdHJpbmcpID0+IHZvaWRcblxuICBjb25zdHJ1Y3RvcihcbiAgICBhcHA6IG9ic2lkaWFuLkFwcCxcbiAgICB0YXNrczogVGFza0l0ZW1bXSxcbiAgICBzZWxlY3RlZFRhc2tQYXRoOiBzdHJpbmcgfCBudWxsLFxuICAgIG9uU2VsZWN0OiAodGFza1BhdGg6IHN0cmluZykgPT4gdm9pZCxcbiAgKSB7XG4gICAgc3VwZXIoYXBwKVxuICAgIHRoaXMudGFza3MgPSBbLi4udGFza3NdLnNvcnQoKGEsIGIpID0+IGEudGFyZWEubG9jYWxlQ29tcGFyZShiLnRhcmVhKSlcbiAgICB0aGlzLnNlbGVjdGVkVGFza1BhdGggPSBzZWxlY3RlZFRhc2tQYXRoXG4gICAgdGhpcy5vblNlbGVjdCA9IG9uU2VsZWN0XG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgdGhpcy5tb2RhbEVsLmFkZENsYXNzKCd0YXJlYXMtcG9tb2Rvcm8tdGFzay1tb2RhbC1zaGVsbCcpXG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXNcbiAgICBjb250ZW50RWwuYWRkQ2xhc3MoJ3RhcmVhcy1tb2RhbCcsICd0YXJlYXMtcG9tb2Rvcm8tdGFzay1tb2RhbCcpXG4gICAgY29udGVudEVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ1NlbGVjY2lvbmFyIHRhcmVhIHBhcmEgUG9tb2Rvcm8nIH0pXG5cbiAgICBpZiAodGhpcy50YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgncCcsIHtcbiAgICAgICAgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRhc2stZW1wdHknLFxuICAgICAgICB0ZXh0OiAnTm8gaGF5IHRhcmVhcyBwYWRyZSBlbiBjdXJzbyBkaXNwb25pYmxlcy4nLFxuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBsaXN0ID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby10YXNrLWxpc3QnIH0pXG4gICAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGhpcy50YXNrcykge1xuICAgICAgICBjb25zdCBpdGVtID0gbGlzdC5jcmVhdGVEaXYoe1xuICAgICAgICAgIGNsczogYHRhcmVhcy1wb21vZG9yby10YXNrLWl0ZW0ke3RoaXMuc2VsZWN0ZWRUYXNrUGF0aCA9PT0gdGFzay5maWxlLnBhdGggPyAnIGlzLXNlbGVjdGVkJyA6ICcnfWAsXG4gICAgICAgIH0pXG4gICAgICAgIGl0ZW0uc2V0QXR0cigncm9sZScsICdidXR0b24nKVxuICAgICAgICBpdGVtLnNldEF0dHIoJ3RhYmluZGV4JywgJzAnKVxuXG4gICAgICAgIGl0ZW0uY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby10YXNrLW5hbWUnLCB0ZXh0OiB0YXNrLnRhcmVhIH0pXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBbXG4gICAgICAgICAgdGFzay5lcXVpcG8gPyBgRXF1aXBvOiAke3Rhc2suZXF1aXBvfWAgOiBudWxsLFxuICAgICAgICAgIGBFc3RhZG86ICR7dGFzay5lc3RhZG99YCxcbiAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignIMK3ICcpXG4gICAgICAgIGl0ZW0uY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby10YXNrLW1ldGEnLCB0ZXh0OiBkZXRhaWxzIH0pXG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25TZWxlY3QodGFzay5maWxlLnBhdGgpXG4gICAgICAgICAgdGhpcy5jbG9zZSgpXG4gICAgICAgIH1cblxuICAgICAgICBpdGVtLm9uY2xpY2sgPSBzZWxlY3RcbiAgICAgICAgaXRlbS5vbmtleWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5ICE9PSAnRW50ZXInICYmIGV2ZW50LmtleSAhPT0gJyAnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHNlbGVjdCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLW1vZGFsLWZvb3RlcicgfSlcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NhbmNlbGFyJyB9KVxuICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jbG9zZSgpXG4gIH1cblxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMubW9kYWxFbC5yZW1vdmVDbGFzcygndGFyZWFzLXBvbW9kb3JvLXRhc2stbW9kYWwtc2hlbGwnKVxuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93RHJvcGRvd24oXG4gIGFuY2hvcjogSFRNTEVsZW1lbnQsXG4gIG9wdGlvbnM6IHN0cmluZ1tdLFxuICBjdXJyZW50OiBzdHJpbmcsXG4gIG9uU2VsZWN0OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCxcbikge1xuICBjb25zdCBtZW51ID0gbmV3IG9ic2lkaWFuLk1lbnUoKVxuXG4gIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICBtZW51LmFkZEl0ZW0oKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uc2V0VGl0bGUoYCR7b3B0aW9uID09PSBjdXJyZW50ID8gJ+KckyAnIDogJyAgJ30ke29wdGlvbn1gKVxuICAgICAgaXRlbS5vbkNsaWNrKCgpID0+IG9uU2VsZWN0KG9wdGlvbikpXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHJlY3QgPSBhbmNob3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgbWVudS5zaG93QXRQb3NpdGlvbih7IHg6IHJlY3QubGVmdCwgeTogcmVjdC5ib3R0b20gKyA0IH0pXG59XG4iLCJ0eXBlIEdlbmVyaWNGbiA9ICguLi5hcmdzOiB1bmtub3duW10pID0+IHZvaWRcblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlPFQgZXh0ZW5kcyBHZW5lcmljRm4+KGZuOiBULCBtczogbnVtYmVyKSB7XG4gIGxldCB0aW1lb3V0OiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IHVuZGVmaW5lZFxuXG4gIHJldHVybiAoLi4uYXJnczogUGFyYW1ldGVyczxUPikgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IGZuKC4uLmFyZ3MpLCBtcylcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7IEVTVEFET1MsIFBSSU9SSURBREVTLCBWSUVXX1RZUEUgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBtb3ZlVGFza1RvQWN0aXZlRm9sZGVyLCBtb3ZlVGFza1RvQ29tcGxldGVkRm9sZGVyIH0gZnJvbSAnLi4vZW5naW5lcy9jb21wbGV0aW9uRW5naW5lJ1xuaW1wb3J0IHsgdXBkYXRlRnJvbnRtYXR0ZXIgfSBmcm9tICcuLi9lbmdpbmVzL2Zyb250bWF0dGVyRW5naW5lJ1xuaW1wb3J0IHsgcGVyc2lzdFRhc2tPcmRlciwgcmVvcmRlckxpc3QgfSBmcm9tICcuLi9lbmdpbmVzL29yZGVyRW5naW5lJ1xuaW1wb3J0IHtcbiAgYWR2YW5jZVBvbW9kb3JvU3RhdGUsXG4gIGFwcGx5UG9tb2Rvcm9EdXJhdGlvbnMsXG4gIGVudGVyUG9tb2Rvcm9EZXZpYXRpb24sXG4gIGV4aXRQb21vZG9yb0RldmlhdGlvbixcbiAgZm9ybWF0UG9tb2Rvcm9Db3VudGRvd24sXG4gIGdldERldmlhdGlvbkVsYXBzZWRTZWNvbmRzLFxuICBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyxcbiAgZ2V0UG9tb2Rvcm9QaGFzZUxhYmVsLFxuICBnZXRQb21vZG9yb1JlbWFpbmluZ1NlY29uZHMsXG4gIG5vcm1hbGl6ZVBvbW9kb3JvRHVyYXRpb25zLFxuICBwYXVzZVBvbW9kb3JvLFxuICByZXNldFBvbW9kb3JvLFxuICByZXN1bWVQb21vZG9ybyxcbiAgc3RhcnRQb21vZG9ybyxcbn0gZnJvbSAnLi4vZW5naW5lcy9wb21vZG9yb0VuZ2luZSdcbmltcG9ydCB7IGFwcGVuZFBvbW9kb3JvTG9nRW50cnksIGdldEVudHJpZXNCeURhdGUsIHJlYWRQb21vZG9yb0xvZ0VudHJpZXMsIHRvTG9jYWxEYXRlVGV4dCB9IGZyb20gJy4uL2VuZ2luZXMvcG9tb2Rvcm9Mb2dFbmdpbmUnXG5pbXBvcnQgeyByZWJhbGFuY2VHcm91cEVuZERhdGVzIH0gZnJvbSAnLi4vZW5naW5lcy9zY2hlZHVsZUVuZ2luZSdcbmltcG9ydCB7IGV4dHJhY3RUYXNrQm9keVByZXZpZXcsIGdldFRhc2tzLCBncm91cFRvcExldmVsVGFza3MsIGlzVGFza0luQ29tcGxldGVkRm9sZGVyLCBwYXJzZVRhc2tEYXRlIH0gZnJvbSAnLi4vZW5naW5lcy90YXNrRW5naW5lJ1xuaW1wb3J0IHsgTmV3R3JvdXBNb2RhbCB9IGZyb20gJy4uL21vZGFscy9OZXdHcm91cE1vZGFsJ1xuaW1wb3J0IHsgTmV3VGFza01vZGFsIH0gZnJvbSAnLi4vbW9kYWxzL05ld1Rhc2tNb2RhbCdcbmltcG9ydCB7IEVkaXRTZWN0aW9uTW9kYWwgfSBmcm9tICcuLi9tb2RhbHMvRWRpdFNlY3Rpb25Nb2RhbCdcbmltcG9ydCB7IEVkaXRUYXNrRmlsZU1vZGFsIH0gZnJvbSAnLi4vbW9kYWxzL0VkaXRUYXNrRmlsZU1vZGFsJ1xuaW1wb3J0IHsgQWRkVGFza0NvbW1lbnRNb2RhbCB9IGZyb20gJy4uL21vZGFscy9BZGRUYXNrQ29tbWVudE1vZGFsJ1xuaW1wb3J0IHsgZ2V0UG9tb2Rvcm9QcmVzZXRDYXJkRGF0YSwgUG9tb2Rvcm9QcmVzZXRNb2RhbCB9IGZyb20gJy4uL21vZGFscy9Qb21vZG9yb1ByZXNldE1vZGFsJ1xuaW1wb3J0IHsgU2VsZWN0UG9tb2Rvcm9UYXNrTW9kYWwgfSBmcm9tICcuLi9tb2RhbHMvU2VsZWN0UG9tb2Rvcm9UYXNrTW9kYWwnXG5pbXBvcnQgdHlwZSB7IFRhcmVhc1BsdWdpbiB9IGZyb20gJy4uL3BsdWdpbi9UYXJlYXNQbHVnaW4nXG5pbXBvcnQgdHlwZSB7IEVxdWlwbywgUG9tb2Rvcm9EdXJhdGlvbnMsIFBvbW9kb3JvUGhhc2UsIFBvbW9kb3JvU3RhdGUsIFRhc2tGcm9udG1hdHRlciwgVGFza0l0ZW0gfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IHNob3dEcm9wZG93biB9IGZyb20gJy4uL3VpL2Ryb3Bkb3duJ1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICcuLi91dGlscy9kZWJvdW5jZSdcblxuZXhwb3J0IGNsYXNzIFRhcmVhc1ZpZXcgZXh0ZW5kcyBvYnNpZGlhbi5JdGVtVmlldyB7XG4gIHByaXZhdGUgcGx1Z2luOiBUYXJlYXNQbHVnaW5cbiAgZXhwYW5kZWRHcm91cHM6IFNldDxzdHJpbmc+XG4gIGV4cGFuZGVkVGFza3M6IFNldDxzdHJpbmc+XG4gIGV4cGFuZGVkQ2FyZFN1YnRhc2tzOiBTZXQ8c3RyaW5nPlxuXG4gIHByaXZhdGUgZGVib3VuY2VkUmVuZGVyOiAoKSA9PiB2b2lkXG4gIHByaXZhdGUgZHJhZ0dyb3VwOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGRyYWdQYXRoOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGRyYWdEZXB0aDogbnVtYmVyIHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBkcmFnUGFyZW50OiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGFjdGl2ZVRhYjogJ2FjdGl2ZScgfCAnY29tcGxldGVkJyB8ICdwb21vZG9ybycgPSAnYWN0aXZlJ1xuICBwcml2YXRlIHBvbW9kb3JvUGFuZWxFbDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIHBvbW9kb3JvVGltZUVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcG9tb2Rvcm9Qcm9ncmVzc0VsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcG9tb2Rvcm9QaGFzZUVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcG9tb2Rvcm9DeWNsZUVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcG9tb2Rvcm9TdGF0ZUVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcG9tb2Rvcm9BdWRpb0NvbnRleHQ6IEF1ZGlvQ29udGV4dCB8IG51bGwgPSBudWxsXG5cbiAgY29uc3RydWN0b3IobGVhZjogb2JzaWRpYW4uV29ya3NwYWNlTGVhZiwgcGx1Z2luOiBUYXJlYXNQbHVnaW4pIHtcbiAgICBzdXBlcihsZWFmKVxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luXG4gICAgdGhpcy5leHBhbmRlZEdyb3VwcyA9IG5ldyBTZXQocGx1Z2luLmVxdWlwb3MubWFwKGVxdWlwbyA9PiBlcXVpcG8ubmFtZSkpXG4gICAgdGhpcy5leHBhbmRlZFRhc2tzID0gbmV3IFNldCgpXG4gICAgdGhpcy5leHBhbmRlZENhcmRTdWJ0YXNrcyA9IG5ldyBTZXQoKVxuICAgIHRoaXMuZGVib3VuY2VkUmVuZGVyID0gZGVib3VuY2UoKCkgPT4gdGhpcy5yZW5kZXIoKSwgMjUwKVxuICB9XG5cbiAgZ2V0Vmlld1R5cGUoKSB7XG4gICAgcmV0dXJuIFZJRVdfVFlQRVxuICB9XG5cbiAgZ2V0RGlzcGxheVRleHQoKSB7XG4gICAgcmV0dXJuICdUYXJlYXMnXG4gIH1cblxuICBnZXRJY29uKCkge1xuICAgIHJldHVybiAnbGlzdC1jaGVja3MnXG4gIH1cblxuICBhc3luYyBvbk9wZW4oKSB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuZ2V0Um9vdEVsKClcbiAgICByb290LmFkZENsYXNzKCd0YXJlYXMtcm9vdCcpXG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKVxuXG4gICAgdGhpcy5yZWdpc3RlckludGVydmFsKHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB2b2lkIHRoaXMuaGFuZGxlUG9tb2Rvcm9UaWNrKClcbiAgICB9LCAxMDAwKSlcblxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLm9uKCdyZXNvbHZlZCcsIHRoaXMuZGVib3VuY2VkUmVuZGVyKSlcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5hcHAudmF1bHQub24oJ2NyZWF0ZScsIHRoaXMuZGVib3VuY2VkUmVuZGVyKSlcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5hcHAudmF1bHQub24oJ2RlbGV0ZScsIHRoaXMuZGVib3VuY2VkUmVuZGVyKSlcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5hcHAudmF1bHQub24oJ3JlbmFtZScsIHRoaXMuZGVib3VuY2VkUmVuZGVyKSlcbiAgfVxuXG4gIGFzeW5jIG9uQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMucG9tb2Rvcm9BdWRpb0NvbnRleHQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMucG9tb2Rvcm9BdWRpb0NvbnRleHQuY2xvc2UoKVxuICAgICAgfVxuICAgICAgY2F0Y2gge1xuICAgICAgICAvLyBJZ25vcmUgY2xvc2UgZXJyb3JzIHdoZW4gY29udGV4dCBpcyBhbHJlYWR5IGNsb3NlZC5cbiAgICAgIH1cbiAgICAgIHRoaXMucG9tb2Rvcm9BdWRpb0NvbnRleHQgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmdldFJvb3RFbCgpXG4gICAgcm9vdC5lbXB0eSgpXG4gICAgdGhpcy5yZXNldFBvbW9kb3JvRG9tUmVmcygpXG5cbiAgICB0aGlzLnJlbmRlckhlYWRlcihyb290KVxuICAgIHRoaXMucmVuZGVyVGFicyhyb290KVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlVGFiID09PSAncG9tb2Rvcm8nKSB7XG4gICAgICBhd2FpdCB0aGlzLnJlbmRlclBvbW9kb3JvUGFuZWwocm9vdClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFsbFRhc2tzID0gZ2V0VGFza3ModGhpcy5hcHApXG4gICAgY29uc3QgdGFiVGFza3MgPSB0aGlzLmFjdGl2ZVRhYiA9PT0gJ2NvbXBsZXRlZCdcbiAgICAgID8gYWxsVGFza3MuZmlsdGVyKHRhc2sgPT4gaXNUYXNrSW5Db21wbGV0ZWRGb2xkZXIodGFzay5maWxlLnBhdGgpKVxuICAgICAgOiBhbGxUYXNrcy5maWx0ZXIodGFzayA9PiAhaXNUYXNrSW5Db21wbGV0ZWRGb2xkZXIodGFzay5maWxlLnBhdGgpKVxuICAgIGNvbnN0IGdyb3VwcyA9IGdyb3VwVG9wTGV2ZWxUYXNrcyh0YWJUYXNrcywgdGhpcy5wbHVnaW4uZXF1aXBvcylcblxuICAgIGlmICh0aGlzLmFjdGl2ZVRhYiA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgIHRoaXMucmVuZGVyQ29tcGxldGVkVGFibGUocm9vdCwgdGFiVGFza3MpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0YXNrUHJldmlld01hcCA9IGF3YWl0IHRoaXMuYnVpbGRUYXNrUHJldmlld01hcCh0YWJUYXNrcylcbiAgICBjb25zdCBib2FyZCA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWJvYXJkJyB9KVxuXG4gICAgZm9yIChjb25zdCB0ZWFtIG9mIHRoaXMucGx1Z2luLmVxdWlwb3MpXG4gICAgICB0aGlzLnJlbmRlckdyb3VwKGJvYXJkLCB0ZWFtLCBncm91cHNbdGVhbS5uYW1lXSB8fCBbXSwgdGFiVGFza3MsIHRhc2tQcmV2aWV3TWFwKVxuXG4gICAgaWYgKGdyb3Vwc1snU2luIGVxdWlwbyddPy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbmRlckdyb3VwKGJvYXJkLCB7IG5hbWU6ICdTaW4gZXF1aXBvJywgY29sb3I6ICcjNTU1JyB9LCBncm91cHNbJ1NpbiBlcXVpcG8nXSwgdGFiVGFza3MsIHRhc2tQcmV2aWV3TWFwKVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlVGFiID09PSAnYWN0aXZlJykge1xuICAgICAgY29uc3QgYWRkR3JvdXAgPSByb290LmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1uZXctZ3JvdXAnIH0pXG4gICAgICBjb25zdCBhZGRHcm91cExpbmsgPSBhZGRHcm91cC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJysgTnVldm8gZ3J1cG8nLCBjbHM6ICd0YXJlYXMtYWRkLWxpbmsnIH0pXG4gICAgICBhZGRHcm91cExpbmsub25jbGljayA9ICgpID0+IG5ldyBOZXdHcm91cE1vZGFsKHRoaXMuYXBwLCB0aGlzLnBsdWdpbiwgdGhpcykub3BlbigpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJDb21wbGV0ZWRUYWJsZShyb290OiBIVE1MRWxlbWVudCwgdGFza3M6IFRhc2tJdGVtW10pIHtcbiAgICBjb25zdCB3cmFwID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtdGFibGUtd3JhcCcgfSlcbiAgICBjb25zdCB0YWJsZSA9IHdyYXAuY3JlYXRlRWwoJ3RhYmxlJywgeyBjbHM6ICd0YXJlYXMtdGFibGUnIH0pXG4gICAgY29uc3QgY29sdW1ucyA9IFsnJywgJycsICdUYXJlYScsICdFc3RhZG8nLCAnRXF1aXBvJywgJ1ByaW9yaWRhZCcsICdEZWRpY2FkbycsICdFc3RpbWFjacOzbicsICdJbmljaW8nLCAnRmluJywgJyUnLCAnQWNjaW9uZXMnXVxuXG4gICAgY29uc3QgdGFibGVIZWFkID0gdGFibGUuY3JlYXRlRWwoJ3RoZWFkJylcbiAgICBjb25zdCBoZWFkUm93ID0gdGFibGVIZWFkLmNyZWF0ZUVsKCd0cicpXG4gICAgZm9yIChjb25zdCBjb2x1bW4gb2YgY29sdW1ucykge1xuICAgICAgY29uc3QgaGVhZGVyQ2VsbCA9IGhlYWRSb3cuY3JlYXRlRWwoJ3RoJywgeyB0ZXh0OiBjb2x1bW4gfSlcbiAgICAgIGlmIChbJ0RlZGljYWRvJywgJ0VzdGltYWNpw7NuJywgJyUnXS5pbmNsdWRlcyhjb2x1bW4pKVxuICAgICAgICBoZWFkZXJDZWxsLmFkZENsYXNzKCd0YXJlYXMtdGgtbnVtJylcbiAgICB9XG5cbiAgICBjb25zdCB0YWJsZUJvZHkgPSB0YWJsZS5jcmVhdGVFbCgndGJvZHknKVxuICAgIGNvbnN0IHRvcExldmVsVGFza3MgPSB0YXNrc1xuICAgICAgLmZpbHRlcih0YXNrID0+ICF0YXNrLnBhcmVudClcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcilcblxuICAgIGZvciAoY29uc3QgdGFzayBvZiB0b3BMZXZlbFRhc2tzKVxuICAgICAgdGhpcy5yZW5kZXJSb3codGFibGVCb2R5LCB0YXNrLCB0YXNrcywgMClcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyVGFicyhyb290OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHRhYnMgPSByb290LmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy10YWJzJyB9KVxuXG4gICAgY29uc3QgYWN0aXZlQnRuID0gdGFicy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgdGV4dDogJ0FjdGl2YXMnLFxuICAgICAgY2xzOiBgdGFyZWFzLXRhYi1idG4ke3RoaXMuYWN0aXZlVGFiID09PSAnYWN0aXZlJyA/ICcgaXMtYWN0aXZlJyA6ICcnfWAsXG4gICAgfSlcbiAgICBhY3RpdmVCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gJ2FjdGl2ZSdcbiAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZWRCdG4gPSB0YWJzLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICB0ZXh0OiAnQ29tcGxldGFkYXMnLFxuICAgICAgY2xzOiBgdGFyZWFzLXRhYi1idG4ke3RoaXMuYWN0aXZlVGFiID09PSAnY29tcGxldGVkJyA/ICcgaXMtYWN0aXZlJyA6ICcnfWAsXG4gICAgfSlcbiAgICBjb21wbGV0ZWRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gJ2NvbXBsZXRlZCdcbiAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9XG5cbiAgICBjb25zdCBwb21vZG9yb0J0biA9IHRhYnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIHRleHQ6ICdQb21vZG9ybycsXG4gICAgICBjbHM6IGB0YXJlYXMtdGFiLWJ0biR7dGhpcy5hY3RpdmVUYWIgPT09ICdwb21vZG9ybycgPyAnIGlzLWFjdGl2ZScgOiAnJ31gLFxuICAgIH0pXG4gICAgcG9tb2Rvcm9CdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gJ3BvbW9kb3JvJ1xuICAgICAgdGhpcy5yZW5kZXIoKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVuZGVyUG9tb2Rvcm9QYW5lbChyb290OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHJ1bnRpbWVTdGF0ZSA9IHRoaXMuZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBwYW5lbCA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXBhbmVsJyB9KVxuICAgIHRoaXMucG9tb2Rvcm9QYW5lbEVsID0gcGFuZWxcblxuICAgIGNvbnN0IHRvcCA9IHBhbmVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby10b3AnIH0pXG4gICAgdGhpcy5wb21vZG9yb1BoYXNlRWwgPSB0b3AuY3JlYXRlRWwoJ2gyJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcGhhc2UnIH0pXG4gICAgdGhpcy5wb21vZG9yb0N5Y2xlRWwgPSB0b3AuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jeWNsZXMnIH0pXG5cbiAgICBjb25zdCB0aW1lcldyYXAgPSBwYW5lbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tdGltZXItd3JhcCcgfSlcbiAgICB0aGlzLnBvbW9kb3JvUHJvZ3Jlc3NFbCA9IHRpbWVyV3JhcC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcHJvZ3Jlc3MnIH0pXG4gICAgY29uc3QgdGltZXJJbm5lciA9IHRoaXMucG9tb2Rvcm9Qcm9ncmVzc0VsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcm9ncmVzcy1pbm5lcicgfSlcbiAgICB0aGlzLnBvbW9kb3JvVGltZUVsID0gdGltZXJJbm5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tdGltZScgfSlcblxuICAgIGNvbnN0IGNvbnRyb2xzID0gcGFuZWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbnRyb2xzJyB9KVxuICAgIHRoaXMucmVuZGVyUG9tb2Rvcm9Db250cm9scyhjb250cm9scywgcnVudGltZVN0YXRlKVxuICAgIHRoaXMucG9tb2Rvcm9TdGF0ZUVsID0gcGFuZWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXN0YXRlLWJhcicgfSlcblxuICAgIGNvbnN0IGNvbmZpZyA9IHBhbmVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb25maWcnIH0pXG4gICAgY29uZmlnLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ0R1cmFjaW9uZXMgKG1pbiknIH0pXG4gICAgdGhpcy5yZW5kZXJQb21vZG9yb0R1cmF0aW9uQ2FyZChjb25maWcsIHJ1bnRpbWVTdGF0ZS5kdXJhdGlvbnMpXG4gICAgYXdhaXQgdGhpcy5yZW5kZXJQb21vZG9yb1Rhc2tDYXJkKHBhbmVsKVxuICAgIGF3YWl0IHRoaXMucmVuZGVyUG9tb2Rvcm9EYWlseUxvZyhwYW5lbClcblxuICAgIHRoaXMudXBkYXRlUG9tb2Rvcm9Eb20ocnVudGltZVN0YXRlLCBEYXRlLm5vdygpKVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJQb21vZG9yb0R1cmF0aW9uQ2FyZChjb250YWluZXI6IEhUTUxFbGVtZW50LCBkdXJhdGlvbnM6IFBvbW9kb3JvRHVyYXRpb25zKSB7XG4gICAgY29uc3QgY2FyZERhdGEgPSBnZXRQb21vZG9yb1ByZXNldENhcmREYXRhKGR1cmF0aW9ucylcbiAgICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb25maWctY2FyZCcgfSlcbiAgICBjYXJkLnNldEF0dHIoJ3JvbGUnLCAnYnV0dG9uJylcbiAgICBjYXJkLnNldEF0dHIoJ3RhYmluZGV4JywgJzAnKVxuICAgIGNhcmQub25kYmxjbGljayA9ICgpID0+IHRoaXMub3BlblBvbW9kb3JvUHJlc2V0TW9kYWwoZHVyYXRpb25zKVxuICAgIGNhcmQub25rZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ICE9PSAnRW50ZXInICYmIGV2ZW50LmtleSAhPT0gJyAnKVxuICAgICAgICByZXR1cm5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMub3BlblBvbW9kb3JvUHJlc2V0TW9kYWwoZHVyYXRpb25zKVxuICAgIH1cblxuICAgIGNhcmQuY3JlYXRlRWwoJ2g0JywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnLWNhcmQtdGl0bGUnLCB0ZXh0OiBjYXJkRGF0YS50aXRsZSB9KVxuICAgIGNhcmQuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZy1jYXJkLWRpdmlkZXInIH0pXG4gICAgY2FyZC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZy1jYXJkLWxhYmVsJywgdGV4dDogJ1VzbycgfSlcbiAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnLWNhcmQtdGV4dCcsIHRleHQ6IGNhcmREYXRhLnVzYWdlIH0pXG4gICAgY2FyZC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnLWNhcmQtZGl2aWRlcicgfSlcbiAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnLWNhcmQtdGV4dCcsIHRleHQ6IGNhcmREYXRhLndvcmtMYWJlbCB9KVxuICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb25maWctY2FyZC10ZXh0JywgdGV4dDogY2FyZERhdGEuc2hvcnRCcmVha0xhYmVsIH0pXG4gICAgY2FyZC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZy1jYXJkLXRleHQnLCB0ZXh0OiBjYXJkRGF0YS5sb25nQnJlYWtMYWJlbCB9KVxuICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb25maWctY2FyZC10ZXh0JywgdGV4dDogY2FyZERhdGEuY3ljbGVzTGFiZWwgfSlcbiAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnLWNhcmQtaGludCcsIHRleHQ6ICdEb2JsZSBjbGljayBwYXJhIGNhbWJpYXIgZHVyYWNpw7NuJyB9KVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuUG9tb2Rvcm9QcmVzZXRNb2RhbChkdXJhdGlvbnM6IFBvbW9kb3JvRHVyYXRpb25zKSB7XG4gICAgbmV3IFBvbW9kb3JvUHJlc2V0TW9kYWwodGhpcy5hcHAsIGR1cmF0aW9ucywgKG5leHREdXJhdGlvbnMpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlUG9tb2Rvcm9EdXJhdGlvbnMobmV4dER1cmF0aW9ucylcbiAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9KS5vcGVuKClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVuZGVyUG9tb2Rvcm9UYXNrQ2FyZChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tdGFzay1zZWN0aW9uJyB9KVxuICAgIHNlY3Rpb24uY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnVGFyZWEgdmluY3VsYWRhJyB9KVxuICAgIGNvbnN0IGlzUnVubmluZyA9IHRoaXMucGx1Z2luLnBvbW9kb3JvLnJ1blN0YXRlID09PSAncnVubmluZydcblxuICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IHRoaXMuZ2V0U2VsZWN0ZWRQb21vZG9yb1Rhc2soKVxuICAgIGlmIChzZWxlY3RlZFRhc2spIHtcbiAgICAgIGNvbnN0IGFsbFRhc2tzID0gZ2V0VGFza3ModGhpcy5hcHApXG4gICAgICBjb25zdCB0YXNrUHJldmlld01hcCA9IGF3YWl0IHRoaXMuYnVpbGRUYXNrUHJldmlld01hcChbc2VsZWN0ZWRUYXNrXSlcbiAgICAgIGNvbnN0IGxpc3QgPSBzZWN0aW9uLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLWxpc3QgdGFyZWFzLXBvbW9kb3JvLXRhc2stY2FyZC1saXN0JyB9KVxuICAgICAgdGhpcy5yZW5kZXJUYXNrQ2FyZChsaXN0LCBzZWxlY3RlZFRhc2ssIGFsbFRhc2tzLCB0YXNrUHJldmlld01hcC5nZXQoc2VsZWN0ZWRUYXNrLmZpbGUucGF0aCkgfHwgJycpXG4gICAgICBzZWN0aW9uLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tdGFzay1jYXJkLWhpbnQnLCB0ZXh0OiAnVXPDoSBlbCBib3TDs24gcGFyYSBjYW1iaWFyIGxhIHRhcmVhIHZpbmN1bGFkYScgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBlbXB0eUNhcmQgPSBzZWN0aW9uLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby10YXNrLWNhcmQnIH0pXG4gICAgICBlbXB0eUNhcmQuY3JlYXRlRWwoJ3AnLCB7XG4gICAgICAgIGNsczogJ3RhcmVhcy1wb21vZG9yby10YXNrLWNhcmQtZW1wdHknLFxuICAgICAgICB0ZXh0OiAnTm8gaGF5IHRhcmVhIHNlbGVjY2lvbmFkYScsXG4gICAgICB9KVxuICAgICAgZW1wdHlDYXJkLmNyZWF0ZUVsKCdwJywge1xuICAgICAgICBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tdGFzay1jYXJkLWhpbnQnLFxuICAgICAgICB0ZXh0OiAnU2VsZWNjaW9uw6EgdW5hIHRhcmVhIGNvbiBlbCBib3TDs24nLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VCdXR0b24gPSBzZWN0aW9uLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICB0ZXh0OiAnQ2FtYmlhciB0YXJlYSB2aW5jdWxhZGEnLFxuICAgICAgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWJ0biB0YXJlYXMtcG9tb2Rvcm8tdGFzay1jaGFuZ2UtYnRuJyxcbiAgICB9KVxuICAgIGNoYW5nZUJ1dHRvbi5kaXNhYmxlZCA9IGlzUnVubmluZ1xuICAgIGNoYW5nZUJ1dHRvbi5zZXRBdHRyKCdhcmlhLWxhYmVsJywgJ0NhbWJpYXIgdGFyZWEgdmluY3VsYWRhJylcbiAgICBjaGFuZ2VCdXR0b24uc2V0QXR0cigndGl0bGUnLCBpc1J1bm5pbmdcbiAgICAgID8gJ05vIHNlIHB1ZWRlIGNhbWJpYXIgbGEgdGFyZWEgbWllbnRyYXMgZWwgY29udGFkb3IgZXN0w6EgY29ycmllbmRvJ1xuICAgICAgOiAnQ2FtYmlhciB0YXJlYSB2aW5jdWxhZGEnKVxuICAgIGNoYW5nZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5vcGVuUG9tb2Rvcm9UYXNrU2VsZWN0b3IoKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZWxlY3RlZFBvbW9kb3JvVGFzaygpOiBUYXNrSXRlbSB8IG51bGwge1xuICAgIGNvbnN0IHNlbGVjdGVkVGFza1BhdGggPSB0aGlzLnBsdWdpbi5wb21vZG9yby5zZWxlY3RlZFRhc2tQYXRoXG4gICAgaWYgKCFzZWxlY3RlZFRhc2tQYXRoKVxuICAgICAgcmV0dXJuIG51bGxcblxuICAgIGNvbnN0IHRhc2sgPSBnZXRUYXNrcyh0aGlzLmFwcCkuZmluZChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSBzZWxlY3RlZFRhc2tQYXRoKVxuICAgIGlmICh0YXNrKVxuICAgICAgcmV0dXJuIHRhc2tcblxuICAgIHRoaXMuc2V0UG9tb2Rvcm9TZWxlY3RlZFRhc2tQYXRoKG51bGwpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHByaXZhdGUgb3BlblBvbW9kb3JvVGFza1NlbGVjdG9yKCkge1xuICAgIGlmICh0aGlzLnBsdWdpbi5wb21vZG9yby5ydW5TdGF0ZSA9PT0gJ3J1bm5pbmcnKSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdObyBzZSBwdWVkZSBjYW1iaWFyIGxhIHRhcmVhIG1pZW50cmFzIGVsIGNvbnRhZG9yIGVzdMOhIGNvcnJpZW5kby4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWxsVGFza3MgPSBnZXRUYXNrcyh0aGlzLmFwcClcbiAgICBjb25zdCBzZWxlY3RhYmxlVGFza3MgPSBhbGxUYXNrc1xuICAgICAgLmZpbHRlcih0YXNrID0+ICF0YXNrLnBhcmVudClcbiAgICAgIC5maWx0ZXIodGFzayA9PiB0YXNrLmVzdGFkbyA9PT0gJ0VuIHByb2dyZXNvJylcbiAgICAgIC5maWx0ZXIodGFzayA9PiAhaXNUYXNrSW5Db21wbGV0ZWRGb2xkZXIodGFzay5maWxlLnBhdGgpKVxuXG4gICAgbmV3IFNlbGVjdFBvbW9kb3JvVGFza01vZGFsKFxuICAgICAgdGhpcy5hcHAsXG4gICAgICBzZWxlY3RhYmxlVGFza3MsXG4gICAgICB0aGlzLnBsdWdpbi5wb21vZG9yby5zZWxlY3RlZFRhc2tQYXRoLFxuICAgICAgKHRhc2tQYXRoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0UG9tb2Rvcm9TZWxlY3RlZFRhc2tQYXRoKHRhc2tQYXRoKVxuICAgICAgICB0aGlzLnJlbmRlcigpXG4gICAgICB9LFxuICAgICkub3BlbigpXG4gIH1cblxuICBwcml2YXRlIHNldFBvbW9kb3JvU2VsZWN0ZWRUYXNrUGF0aCh0YXNrUGF0aDogc3RyaW5nIHwgbnVsbCkge1xuICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUoe1xuICAgICAgLi4udGhpcy5wbHVnaW4ucG9tb2Rvcm8sXG4gICAgICBkdXJhdGlvbnM6IHsgLi4udGhpcy5wbHVnaW4ucG9tb2Rvcm8uZHVyYXRpb25zIH0sXG4gICAgICBzZWxlY3RlZFRhc2tQYXRoOiB0YXNrUGF0aCxcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJQb21vZG9yb0NvbnRyb2xzKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHN0YXRlOiBQb21vZG9yb1N0YXRlKSB7XG4gICAgY29uc3QgaWNvbkNvbnRyb2xzID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb250cm9scy1pY29ucycgfSlcblxuICAgIGlmIChzdGF0ZS5ydW5TdGF0ZSA9PT0gJ3J1bm5pbmcnKSB7XG4gICAgICBjb25zdCBwYXVzZUJ1dHRvbiA9IGljb25Db250cm9scy5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAn4o+4JywgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWJ0biB0YXJlYXMtcG9tb2Rvcm8tYnRuLWljb24nIH0pXG4gICAgICBwYXVzZUJ1dHRvbi5zZXRBdHRyKCdhcmlhLWxhYmVsJywgJ1BhdXNhcicpXG4gICAgICBwYXVzZUJ1dHRvbi5zZXRBdHRyKCd0aXRsZScsICdQYXVzYXInKVxuICAgICAgcGF1c2VCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuaGFuZGxlUG9tb2Rvcm9QYXVzZSgpXG4gICAgfVxuICAgIGVsc2UgaWYgKHN0YXRlLnJ1blN0YXRlID09PSAncGF1c2VkJykge1xuICAgICAgY29uc3QgcmVzdW1lQnV0dG9uID0gaWNvbkNvbnRyb2xzLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICfilrYnLCBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tYnRuIHRhcmVhcy1wb21vZG9yby1idG4taWNvbiBtb2QtY3RhJyB9KVxuICAgICAgcmVzdW1lQnV0dG9uLnNldEF0dHIoJ2FyaWEtbGFiZWwnLCAnUmVhbnVkYXInKVxuICAgICAgcmVzdW1lQnV0dG9uLnNldEF0dHIoJ3RpdGxlJywgJ1JlYW51ZGFyJylcbiAgICAgIHJlc3VtZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5oYW5kbGVQb21vZG9yb1Jlc3VtZSgpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3Qgc3RhcnRCdXR0b24gPSBpY29uQ29udHJvbHMuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ+KWticsIGNsczogJ3RhcmVhcy1wb21vZG9yby1idG4gdGFyZWFzLXBvbW9kb3JvLWJ0bi1pY29uIG1vZC1jdGEnIH0pXG4gICAgICBzdGFydEJ1dHRvbi5zZXRBdHRyKCdhcmlhLWxhYmVsJywgJ0luaWNpYXInKVxuICAgICAgc3RhcnRCdXR0b24uc2V0QXR0cigndGl0bGUnLCAnSW5pY2lhcicpXG4gICAgICBzdGFydEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5oYW5kbGVQb21vZG9yb1N0YXJ0KClcbiAgICB9XG5cbiAgICBjb25zdCByZXNldEJ1dHRvbiA9IGljb25Db250cm9scy5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAn4oa6JywgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWJ0biB0YXJlYXMtcG9tb2Rvcm8tYnRuLWljb24nIH0pXG4gICAgcmVzZXRCdXR0b24uc2V0QXR0cignYXJpYS1sYWJlbCcsICdSZWluaWNpYXInKVxuICAgIHJlc2V0QnV0dG9uLnNldEF0dHIoJ3RpdGxlJywgJ1JlaW5pY2lhcicpXG4gICAgcmVzZXRCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuaGFuZGxlUG9tb2Rvcm9SZXNldCgpXG5cbiAgICBjb25zdCBkZXZpYXRpb25CdXR0b24gPSBpY29uQ29udHJvbHMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIHRleHQ6IHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlID8gJ/Cfk7UnIDogJ/Cfk54nLFxuICAgICAgY2xzOiBgdGFyZWFzLXBvbW9kb3JvLWJ0biB0YXJlYXMtcG9tb2Rvcm8tYnRuLWljb24ke3N0YXRlLmlzRGV2aWF0aW9uQWN0aXZlID8gJyBpcy1kZXZpYXRpb24tYWN0aXZlJyA6ICcnfWAsXG4gICAgfSlcbiAgICBkZXZpYXRpb25CdXR0b24uc2V0QXR0cignYXJpYS1sYWJlbCcsICdEZXN2w61vJylcbiAgICBkZXZpYXRpb25CdXR0b24uc2V0QXR0cigndGl0bGUnLCBzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZVxuICAgICAgPyAnRmluYWxpemFyIGRlc3bDrW8nXG4gICAgICA6ICdJbmljaWFyIGRlc3bDrW8gKGxsYW1hZGFzL3JldW5pb25lcyknKVxuICAgIGNvbnN0IGNhblRvZ2dsZURldmlhdGlvbiA9IHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlIHx8IHN0YXRlLnJ1blN0YXRlID09PSAncnVubmluZydcbiAgICBkZXZpYXRpb25CdXR0b24uZGlzYWJsZWQgPSAhY2FuVG9nZ2xlRGV2aWF0aW9uXG4gICAgZGV2aWF0aW9uQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmhhbmRsZVBvbW9kb3JvRGV2aWF0aW9uVG9nZ2xlKClcblxuICAgIGlmIChzdGF0ZS5waGFzZSAhPT0gJ3dvcmsnKSB7XG4gICAgICBjb25zdCBleHRyYUNvbnRyb2xzID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb250cm9scy1leHRyYScgfSlcbiAgICAgIGNvbnN0IHdvcmtCdXR0b24gPSBleHRyYUNvbnRyb2xzLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgIHRleHQ6ICdJciBhIHRyYWJham8nLFxuICAgICAgICBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tYnRuJyxcbiAgICAgIH0pXG4gICAgICB3b3JrQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmhhbmRsZVBvbW9kb3JvU3dpdGNoVG9Xb3JrKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBvbW9kb3JvU3RhcnQoKSB7XG4gICAgdGhpcy51bmxvY2tQb21vZG9yb0F1ZGlvKClcbiAgICBjb25zdCBuZXh0ID0gc3RhcnRQb21vZG9ybyh0aGlzLmdldFBvbW9kb3JvUnVudGltZVN0YXRlKGZhbHNlKSwgRGF0ZS5ub3coKSlcbiAgICB0aGlzLnBsdWdpbi5zZXRQb21vZG9yb1N0YXRlKG5leHQpXG4gICAgdGhpcy5yZW5kZXIoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb21vZG9yb1BhdXNlKCkge1xuICAgIHRoaXMudW5sb2NrUG9tb2Rvcm9BdWRpbygpXG4gICAgY29uc3QgbmV4dCA9IHBhdXNlUG9tb2Rvcm8odGhpcy5nZXRQb21vZG9yb1J1bnRpbWVTdGF0ZShmYWxzZSksIERhdGUubm93KCkpXG4gICAgdGhpcy5wbHVnaW4uc2V0UG9tb2Rvcm9TdGF0ZShuZXh0KVxuICAgIHRoaXMucmVuZGVyKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUG9tb2Rvcm9SZXN1bWUoKSB7XG4gICAgdGhpcy51bmxvY2tQb21vZG9yb0F1ZGlvKClcbiAgICBjb25zdCBuZXh0ID0gcmVzdW1lUG9tb2Rvcm8odGhpcy5nZXRQb21vZG9yb1J1bnRpbWVTdGF0ZShmYWxzZSksIERhdGUubm93KCkpXG4gICAgdGhpcy5wbHVnaW4uc2V0UG9tb2Rvcm9TdGF0ZShuZXh0KVxuICAgIHRoaXMucmVuZGVyKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUG9tb2Rvcm9SZXNldCgpIHtcbiAgICB0aGlzLnVubG9ja1BvbW9kb3JvQXVkaW8oKVxuICAgIGNvbnN0IG5leHQgPSByZXNldFBvbW9kb3JvKHRoaXMuZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUoZmFsc2UpKVxuICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUobmV4dClcbiAgICB0aGlzLnJlbmRlcigpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZVBvbW9kb3JvRGV2aWF0aW9uVG9nZ2xlKCkge1xuICAgIHRoaXMudW5sb2NrUG9tb2Rvcm9BdWRpbygpXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldFBvbW9kb3JvUnVudGltZVN0YXRlKGZhbHNlKVxuXG4gICAgaWYgKGN1cnJlbnQuaXNEZXZpYXRpb25BY3RpdmUpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGV4aXRQb21vZG9yb0RldmlhdGlvbihjdXJyZW50LCBub3cpXG4gICAgICB0aGlzLnBsdWdpbi5zZXRQb21vZG9yb1N0YXRlKHJlc3VsdC5zdGF0ZSlcbiAgICAgIGF3YWl0IHRoaXMuYWRkUG9tb2Rvcm9EZXZpYXRpb25UaW1lVG9TZWxlY3RlZFRhc2socmVzdWx0LmVsYXBzZWRTZWNvbmRzLCByZXN1bHQuc3RhdGUpXG5cbiAgICAgIGlmIChyZXN1bHQuY29tcGxldGVkV29yaykge1xuICAgICAgICBjb25zdCBuZXh0UGhhc2VMYWJlbCA9IGdldFBvbW9kb3JvUGhhc2VMYWJlbChyZXN1bHQuc3RhdGUucGhhc2UpXG4gICAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYERlc3bDrW8gZmluYWxpemFkby4gSW5pY2lhbmRvICR7bmV4dFBoYXNlTGFiZWwudG9Mb3dlckNhc2UoKX0uYCwgNzAwMClcbiAgICAgICAgdGhpcy5mbGFzaFBvbW9kb3JvUGFuZWwoKVxuICAgICAgICB0aGlzLnBsYXlQb21vZG9yb0JlZXAoKVxuICAgICAgICBhd2FpdCB0aGlzLmFkZFBvbW9kb3JvV29ya1RpbWVUb1NlbGVjdGVkVGFzayhbJ3dvcmsnXSwgcmVzdWx0LnN0YXRlKVxuICAgICAgICBhd2FpdCB0aGlzLmxvZ1BvbW9kb3JvRW50cmllcyhbJ3dvcmsnXSwgcmVzdWx0LnN0YXRlLCBub3cpXG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVuZGVyKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG5leHQgPSBlbnRlclBvbW9kb3JvRGV2aWF0aW9uKGN1cnJlbnQsIG5vdylcbiAgICBpZiAobmV4dCA9PT0gY3VycmVudCkge1xuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZSgnU29sbyBwb2TDqXMgaW5pY2lhciBkZXN2w61vIGN1YW5kbyBlbCBjb250YWRvciBlc3TDoSBjb3JyaWVuZG8uJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUobmV4dClcbiAgICB0aGlzLnJlbmRlcigpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBvbW9kb3JvU3dpdGNoVG9Xb3JrKCkge1xuICAgIHRoaXMudW5sb2NrUG9tb2Rvcm9BdWRpbygpXG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUoZmFsc2UpXG4gICAgY29uc3Qgd29ya1N0YXRlID0ge1xuICAgICAgLi4uY3VycmVudCxcbiAgICAgIHBoYXNlOiAnd29yaycgYXMgUG9tb2Rvcm9QaGFzZSxcbiAgICAgIHJ1blN0YXRlOiAnaWRsZScgYXMgY29uc3QsXG4gICAgICByZW1haW5pbmdTZWNvbmRzOiBjdXJyZW50LmR1cmF0aW9ucy53b3JrTWludXRlcyAqIDYwLFxuICAgICAgZW5kVGltZXN0YW1wOiBudWxsLFxuICAgICAgaXNEZXZpYXRpb25BY3RpdmU6IGZhbHNlLFxuICAgICAgZGV2aWF0aW9uU3RhcnRlZEF0OiBudWxsLFxuICAgICAgZGV2aWF0aW9uQmFzZVJlbWFpbmluZ1NlY29uZHM6IDAsXG4gICAgICBwaGFzZURldmlhdGlvblNlY29uZHM6IDAsXG4gICAgfVxuICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUod29ya1N0YXRlKVxuICAgIHRoaXMucmVuZGVyKClcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUG9tb2Rvcm9EdXJhdGlvbnMobmV4dER1cmF0aW9uczogUG9tb2Rvcm9EdXJhdGlvbnMpIHtcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplUG9tb2Rvcm9EdXJhdGlvbnMobmV4dER1cmF0aW9ucylcbiAgICBjb25zdCBuZXh0ID0gYXBwbHlQb21vZG9yb0R1cmF0aW9ucyh0aGlzLmdldFBvbW9kb3JvUnVudGltZVN0YXRlKGZhbHNlKSwgbm9ybWFsaXplZClcbiAgICB0aGlzLnBsdWdpbi5zZXRQb21vZG9yb1N0YXRlKG5leHQpXG4gICAgdGhpcy51cGRhdGVQb21vZG9yb0RvbShuZXh0LCBEYXRlLm5vdygpKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVQb21vZG9yb1RpY2soKSB7XG4gICAgY29uc3QgcnVudGltZVN0YXRlID0gdGhpcy5nZXRQb21vZG9yb1J1bnRpbWVTdGF0ZSh0cnVlKVxuICAgIGlmICh0aGlzLmFjdGl2ZVRhYiA9PT0gJ3BvbW9kb3JvJylcbiAgICAgIHRoaXMudXBkYXRlUG9tb2Rvcm9Eb20ocnVudGltZVN0YXRlLCBEYXRlLm5vdygpKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQb21vZG9yb1J1bnRpbWVTdGF0ZShub3RpZnlDb21wbGV0aW9uOiBib29sZWFuKTogUG9tb2Rvcm9TdGF0ZSB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGNvbnN0IGFkdmFuY2VkID0gYWR2YW5jZVBvbW9kb3JvU3RhdGUodGhpcy5wbHVnaW4ucG9tb2Rvcm8sIG5vdylcblxuICAgIGlmIChhZHZhbmNlZC50cmFuc2l0aW9uZWQpIHtcbiAgICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUoYWR2YW5jZWQuc3RhdGUpXG5cbiAgICAgIGlmIChub3RpZnlDb21wbGV0aW9uKVxuICAgICAgICB0aGlzLm5vdGlmeVBvbW9kb3JvVHJhbnNpdGlvbnMoYWR2YW5jZWQuY29tcGxldGVkUGhhc2VzLCBhZHZhbmNlZC5zdGF0ZSlcblxuICAgICAgaWYgKHRoaXMuYWN0aXZlVGFiID09PSAncG9tb2Rvcm8nKVxuICAgICAgICB2b2lkIHRoaXMucmVuZGVyKClcblxuICAgICAgcmV0dXJuIGFkdmFuY2VkLnN0YXRlXG4gICAgfVxuXG4gICAgaWYgKGFkdmFuY2VkLnN0YXRlICE9PSB0aGlzLnBsdWdpbi5wb21vZG9ybykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWR2YW5jZWQuc3RhdGUsXG4gICAgICAgIHJlbWFpbmluZ1NlY29uZHM6IGdldFBvbW9kb3JvUmVtYWluaW5nU2Vjb25kcyhhZHZhbmNlZC5zdGF0ZSwgbm93KSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5wbHVnaW4ucG9tb2Rvcm8sXG4gICAgICBkdXJhdGlvbnM6IHsgLi4udGhpcy5wbHVnaW4ucG9tb2Rvcm8uZHVyYXRpb25zIH0sXG4gICAgICByZW1haW5pbmdTZWNvbmRzOiBnZXRQb21vZG9yb1JlbWFpbmluZ1NlY29uZHModGhpcy5wbHVnaW4ucG9tb2Rvcm8sIG5vdyksXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQb21vZG9yb0RvbShzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgbm93TXM6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5wb21vZG9yb1RpbWVFbCB8fCAhdGhpcy5wb21vZG9yb1BoYXNlRWwgfHwgIXRoaXMucG9tb2Rvcm9DeWNsZUVsIHx8ICF0aGlzLnBvbW9kb3JvU3RhdGVFbClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgcmVtYWluaW5nID0gZ2V0UG9tb2Rvcm9SZW1haW5pbmdTZWNvbmRzKHN0YXRlLCBub3dNcylcbiAgICBjb25zdCBkZXZpYXRpb25FbGFwc2VkID0gZ2V0RGV2aWF0aW9uRWxhcHNlZFNlY29uZHMoc3RhdGUsIG5vd01zKVxuICAgIGNvbnN0IGRpc3BsYXllZFNlY29uZHMgPSBzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSA/IGRldmlhdGlvbkVsYXBzZWQgOiByZW1haW5pbmdcbiAgICB0aGlzLnBvbW9kb3JvVGltZUVsLnNldFRleHQoZm9ybWF0UG9tb2Rvcm9Db3VudGRvd24oZGlzcGxheWVkU2Vjb25kcykpXG4gICAgdGhpcy5wb21vZG9yb1RpbWVFbC50b2dnbGVDbGFzcygnaXMtZGV2aWF0aW9uJywgc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUpXG4gICAgaWYgKHRoaXMucG9tb2Rvcm9Qcm9ncmVzc0VsKSB7XG4gICAgICBjb25zdCB0b3RhbFNlY29uZHMgPSBNYXRoLm1heCgxLCBzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZVxuICAgICAgICA/IE1hdGgubWF4KDEsIHN0YXRlLmRldmlhdGlvbkJhc2VSZW1haW5pbmdTZWNvbmRzKVxuICAgICAgICA6IGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKHN0YXRlLmR1cmF0aW9ucywgc3RhdGUucGhhc2UpKVxuICAgICAgY29uc3QgZWxhcHNlZCA9IHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlXG4gICAgICAgID8gZGV2aWF0aW9uRWxhcHNlZFxuICAgICAgICA6IE1hdGgubWF4KDAsIHRvdGFsU2Vjb25kcyAtIHJlbWFpbmluZylcbiAgICAgIGNvbnN0IHByb2dyZXNzUGVyY2VudCA9IE1hdGgubWluKDEwMCwgKGVsYXBzZWQgLyB0b3RhbFNlY29uZHMpICogMTAwKVxuICAgICAgdGhpcy5wb21vZG9yb1Byb2dyZXNzRWwuc3R5bGUuc2V0UHJvcGVydHkoJy0tdGFyZWFzLXBvbW9kb3JvLXByb2dyZXNzJywgYCR7cHJvZ3Jlc3NQZXJjZW50fSVgKVxuICAgICAgdGhpcy5wb21vZG9yb1Byb2dyZXNzRWwuc2V0QXR0cignZGF0YS1tb2RlJywgc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUgPyAnZGV2aWF0aW9uJyA6ICdub3JtYWwnKVxuICAgIH1cbiAgICB0aGlzLnBvbW9kb3JvUGhhc2VFbC5zZXRUZXh0KGdldFBvbW9kb3JvUGhhc2VMYWJlbChzdGF0ZS5waGFzZSkpXG4gICAgdGhpcy5wb21vZG9yb0N5Y2xlRWwuc2V0VGV4dChgQ2ljbG9zIGNvbXBsZXRhZG9zOiAke3N0YXRlLmNvbXBsZXRlZFdvcmtDeWNsZXN9YClcblxuICAgIGNvbnN0IHJ1blN0YXRlTGFiZWwgPSBzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZVxuICAgICAgPyAnRGVzdsOtbydcbiAgICAgIDogc3RhdGUucnVuU3RhdGUgPT09ICdydW5uaW5nJ1xuICAgICAgICA/ICdFbiBjdXJzbydcbiAgICAgICAgOiBzdGF0ZS5ydW5TdGF0ZSA9PT0gJ3BhdXNlZCdcbiAgICAgICAgICA/ICdQYXVzYWRvJ1xuICAgICAgICAgIDogJ0xpc3RvJ1xuICAgIHRoaXMucG9tb2Rvcm9TdGF0ZUVsLnNldFRleHQocnVuU3RhdGVMYWJlbClcbiAgICB0aGlzLnBvbW9kb3JvU3RhdGVFbC5zZXRBdHRyKCdkYXRhLXN0YXRlJywgc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUgPyAnZGV2aWF0aW9uJyA6IHN0YXRlLnJ1blN0YXRlKVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlQb21vZG9yb1RyYW5zaXRpb25zKGNvbXBsZXRlZFBoYXNlczogUG9tb2Rvcm9QaGFzZVtdLCBuZXh0U3RhdGU6IFBvbW9kb3JvU3RhdGUpIHtcbiAgICBjb25zdCBjb21wbGV0ZWQgPSBjb21wbGV0ZWRQaGFzZXNbY29tcGxldGVkUGhhc2VzLmxlbmd0aCAtIDFdXG4gICAgaWYgKCFjb21wbGV0ZWQpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IG5leHRQaGFzZUxhYmVsID0gZ2V0UG9tb2Rvcm9QaGFzZUxhYmVsKG5leHRTdGF0ZS5waGFzZSlcbiAgICBpZiAoY29tcGxldGVkID09PSAnd29yaycpXG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBQb21vZG9ybyBmaW5hbGl6YWRvLiBJbmljaWFuZG8gJHtuZXh0UGhhc2VMYWJlbC50b0xvd2VyQ2FzZSgpfS5gLCA3MDAwKVxuICAgIGVsc2VcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYERlc2NhbnNvIGZpbmFsaXphZG8uIEluaWNpYW5kbyAke25leHRQaGFzZUxhYmVsLnRvTG93ZXJDYXNlKCl9LmAsIDcwMDApXG5cbiAgICB0aGlzLmZsYXNoUG9tb2Rvcm9QYW5lbCgpXG4gICAgdGhpcy5wbGF5UG9tb2Rvcm9CZWVwKClcbiAgICB2b2lkIHRoaXMuYWRkUG9tb2Rvcm9Xb3JrVGltZVRvU2VsZWN0ZWRUYXNrKGNvbXBsZXRlZFBoYXNlcywgbmV4dFN0YXRlKVxuICAgIHZvaWQgdGhpcy5sb2dQb21vZG9yb0VudHJpZXMoY29tcGxldGVkUGhhc2VzLCBuZXh0U3RhdGUsIERhdGUubm93KCkpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxvZ1BvbW9kb3JvRW50cmllcyhjb21wbGV0ZWRQaGFzZXM6IFBvbW9kb3JvUGhhc2VbXSwgc3RhdGU6IFBvbW9kb3JvU3RhdGUsIG5vd01zOiBudW1iZXIpIHtcbiAgICBpZiAoY29tcGxldGVkUGhhc2VzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gc3RhdGUuc2VsZWN0ZWRUYXNrUGF0aFxuICAgICAgPyBnZXRUYXNrcyh0aGlzLmFwcCkuZmluZChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSBzdGF0ZS5zZWxlY3RlZFRhc2tQYXRoKVxuICAgICAgOiBudWxsXG4gICAgY29uc3QgdGFza05hbWUgPSBzZWxlY3RlZFRhc2s/LnRhcmVhIHx8ICdTaW4gdGFyZWEgdmluY3VsYWRhJ1xuICAgIGNvbnN0IHRvdGFsRGV2aWF0aW9uSG91cnMgPSB0aGlzLnJvdW5kVG9Ud28oc3RhdGUucGhhc2VEZXZpYXRpb25TZWNvbmRzIC8gMzYwMClcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wbGV0ZWRQaGFzZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBwaGFzZSA9IGNvbXBsZXRlZFBoYXNlc1tpbmRleF1cbiAgICAgIGNvbnN0IGRldmlhdGlvbkhvdXJzID0gaW5kZXggPT09IGNvbXBsZXRlZFBoYXNlcy5sZW5ndGggLSAxXG4gICAgICAgID8gdG90YWxEZXZpYXRpb25Ib3Vyc1xuICAgICAgICA6IDBcbiAgICAgIGF3YWl0IGFwcGVuZFBvbW9kb3JvTG9nRW50cnkodGhpcy5hcHAsIHtcbiAgICAgICAgdGltZXN0YW1wTXM6IG5vd01zLFxuICAgICAgICB0eXBlOiBnZXRQb21vZG9yb1BoYXNlTGFiZWwocGhhc2UpLFxuICAgICAgICB0YXNrOiB0YXNrTmFtZSxcbiAgICAgICAgZGV2aWF0aW9uSG91cnMsXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChzdGF0ZS5waGFzZURldmlhdGlvblNlY29uZHMgPiAwKSB7XG4gICAgICB0aGlzLnBsdWdpbi5zZXRQb21vZG9yb1N0YXRlKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGR1cmF0aW9uczogeyAuLi5zdGF0ZS5kdXJhdGlvbnMgfSxcbiAgICAgICAgcGhhc2VEZXZpYXRpb25TZWNvbmRzOiAwLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hY3RpdmVUYWIgPT09ICdwb21vZG9ybycpXG4gICAgICBhd2FpdCB0aGlzLnJlbmRlcigpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGFkZFBvbW9kb3JvV29ya1RpbWVUb1NlbGVjdGVkVGFzayhjb21wbGV0ZWRQaGFzZXM6IFBvbW9kb3JvUGhhc2VbXSwgc3RhdGU6IFBvbW9kb3JvU3RhdGUpIHtcbiAgICBjb25zdCBjb21wbGV0ZWRXb3JrQ291bnQgPSBjb21wbGV0ZWRQaGFzZXMuZmlsdGVyKHBoYXNlID0+IHBoYXNlID09PSAnd29yaycpLmxlbmd0aFxuICAgIGlmIChjb21wbGV0ZWRXb3JrQ291bnQgPT09IDApXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHNlbGVjdGVkVGFza1BhdGggPSBzdGF0ZS5zZWxlY3RlZFRhc2tQYXRoXG4gICAgaWYgKCFzZWxlY3RlZFRhc2tQYXRoKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCB0YXNrID0gZ2V0VGFza3ModGhpcy5hcHApLmZpbmQoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gc2VsZWN0ZWRUYXNrUGF0aClcbiAgICBpZiAoIXRhc2spIHtcbiAgICAgIHRoaXMuc2V0UG9tb2Rvcm9TZWxlY3RlZFRhc2tQYXRoKG51bGwpXG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdMYSB0YXJlYSBzZWxlY2Npb25hZGEgcGFyYSBQb21vZG9ybyB5YSBubyBleGlzdGUuIFNlIHF1aXTDsyBsYSBzZWxlY2Npw7NuLicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB3b3JrZWRIb3VycyA9IHRoaXMucm91bmRUb1R3bygoY29tcGxldGVkV29ya0NvdW50ICogc3RhdGUuZHVyYXRpb25zLndvcmtNaW51dGVzKSAvIDYwKVxuICAgIGlmICh3b3JrZWRIb3VycyA8PSAwKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBuZXh0RGVkaWNhdGVkID0gdGhpcy5yb3VuZFRvVHdvKHRhc2suZGVkaWNhZG8gKyB3b3JrZWRIb3VycylcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBkZWRpY2FkbzogbmV4dERlZGljYXRlZCB9KVxuICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYFNlIHN1bWFyb24gJHt0aGlzLmZvcm1hdERlY2ltYWwod29ya2VkSG91cnMpfSBoIGEgXCIke3Rhc2sudGFyZWF9XCIuYCwgNTAwMClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgYWRkUG9tb2Rvcm9EZXZpYXRpb25UaW1lVG9TZWxlY3RlZFRhc2soZWxhcHNlZFNlY29uZHM6IG51bWJlciwgc3RhdGU6IFBvbW9kb3JvU3RhdGUpIHtcbiAgICBpZiAoZWxhcHNlZFNlY29uZHMgPD0gMClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrUGF0aCA9IHN0YXRlLnNlbGVjdGVkVGFza1BhdGhcbiAgICBpZiAoIXNlbGVjdGVkVGFza1BhdGgpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHRhc2sgPSBnZXRUYXNrcyh0aGlzLmFwcCkuZmluZChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSBzZWxlY3RlZFRhc2tQYXRoKVxuICAgIGlmICghdGFzaykge1xuICAgICAgdGhpcy5zZXRQb21vZG9yb1NlbGVjdGVkVGFza1BhdGgobnVsbClcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoJ0xhIHRhcmVhIHNlbGVjY2lvbmFkYSBwYXJhIFBvbW9kb3JvIHlhIG5vIGV4aXN0ZS4gU2UgcXVpdMOzIGxhIHNlbGVjY2nDs24uJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRldmlhdGlvbkhvdXJzID0gdGhpcy5yb3VuZFRvVHdvKGVsYXBzZWRTZWNvbmRzIC8gMzYwMClcbiAgICBpZiAoZGV2aWF0aW9uSG91cnMgPD0gMClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgbmV4dERldmlhdGlvbiA9IHRoaXMucm91bmRUb1R3byh0YXNrLmRlc3ZpbyArIGRldmlhdGlvbkhvdXJzKVxuICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IGRlc3ZpbzogbmV4dERldmlhdGlvbiB9KVxuICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYFNlIHN1bWFyb24gJHt0aGlzLmZvcm1hdERlY2ltYWwoZGV2aWF0aW9uSG91cnMpfSBoIGRlIGRlc3bDrW8gYSBcIiR7dGFzay50YXJlYX1cIi5gLCA1MDAwKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZW5kZXJQb21vZG9yb0RhaWx5TG9nKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1sb2ctc2VjdGlvbicgfSlcbiAgICBzZWN0aW9uLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ1JlZ2lzdHJvcyBkZWwgZGlhJyB9KVxuXG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IHJlYWRQb21vZG9yb0xvZ0VudHJpZXModGhpcy5hcHApXG4gICAgY29uc3QgdG9kYXlFbnRyaWVzID0gZ2V0RW50cmllc0J5RGF0ZShlbnRyaWVzLCB0b0xvY2FsRGF0ZVRleHQobmV3IERhdGUoKSkpXG5cbiAgICBpZiAodG9kYXlFbnRyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2VjdGlvbi5jcmVhdGVFbCgncCcsIHtcbiAgICAgICAgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWxvZy1lbXB0eScsXG4gICAgICAgIHRleHQ6ICd0b2RhdmlhIG5vIHNlIHJlZ2lzdHJhbiBwb21vZG9yb3MgZW4gZWwgZGlhJyxcbiAgICAgIH0pXG4gICAgICB0aGlzLnJlbmRlclBvbW9kb3JvSG91cmx5SGVhdG1hcChzZWN0aW9uLCB0b2RheUVudHJpZXMpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB3cmFwID0gc2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tbG9nLXRhYmxlLXdyYXAnIH0pXG4gICAgY29uc3QgdGFibGUgPSB3cmFwLmNyZWF0ZUVsKCd0YWJsZScsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWxvZy10YWJsZScgfSlcbiAgICBjb25zdCBoZWFkID0gdGFibGUuY3JlYXRlRWwoJ3RoZWFkJylcbiAgICBjb25zdCBoZWFkUm93ID0gaGVhZC5jcmVhdGVFbCgndHInKVxuICAgIGZvciAoY29uc3QgdGl0bGUgb2YgWydIb3JhcmlvJywgJ1RpcG8gZGUgcG9tb2Rvcm8nLCAnVGFyZWEnLCAnRGVzdmlvJ10pXG4gICAgICBoZWFkUm93LmNyZWF0ZUVsKCd0aCcsIHsgdGV4dDogdGl0bGUgfSlcblxuICAgIGNvbnN0IGJvZHkgPSB0YWJsZS5jcmVhdGVFbCgndGJvZHknKVxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdG9kYXlFbnRyaWVzKSB7XG4gICAgICBjb25zdCByb3cgPSBib2R5LmNyZWF0ZUVsKCd0cicpXG4gICAgICByb3cuY3JlYXRlRWwoJ3RkJywgeyB0ZXh0OiBlbnRyeS50aW1lIH0pXG4gICAgICByb3cuY3JlYXRlRWwoJ3RkJywgeyB0ZXh0OiBlbnRyeS50eXBlIH0pXG4gICAgICByb3cuY3JlYXRlRWwoJ3RkJywgeyB0ZXh0OiBlbnRyeS50YXNrIH0pXG4gICAgICByb3cuY3JlYXRlRWwoJ3RkJywgeyB0ZXh0OiBgJHt0aGlzLmZvcm1hdERlY2ltYWwoZW50cnkuZGV2aWF0aW9uSG91cnMpfSBoYCB9KVxuICAgIH1cblxuICAgIHRoaXMucmVuZGVyUG9tb2Rvcm9Ib3VybHlIZWF0bWFwKHNlY3Rpb24sIHRvZGF5RW50cmllcylcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUG9tb2Rvcm9Ib3VybHlIZWF0bWFwKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRvZGF5RW50cmllczogQXJyYXk8eyB0aW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZyB9Pikge1xuICAgIGNvbnN0IGhlYXRtYXBTZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1oZWF0bWFwJyB9KVxuICAgIGhlYXRtYXBTZWN0aW9uLmNyZWF0ZUVsKCdoNCcsIHsgdGV4dDogJ0hlYXRtYXAgaG9yYXJpbyAodHJhYmFqbyknIH0pXG5cbiAgICBjb25zdCB3b3JrRW50cmllcyA9IHRvZGF5RW50cmllcy5maWx0ZXIoZW50cnkgPT4gZW50cnkudHlwZSA9PT0gJ1RyYWJham8nKVxuICAgIGNvbnN0IGhvdXJseUNvdW50cyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDI0IH0sICgpID0+IDApXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB3b3JrRW50cmllcykge1xuICAgICAgY29uc3QgaG91ciA9IE51bWJlci5wYXJzZUludChlbnRyeS50aW1lLnNsaWNlKDAsIDIpLCAxMClcbiAgICAgIGlmIChOdW1iZXIuaXNOYU4oaG91cikgfHwgaG91ciA8IDAgfHwgaG91ciA+IDIzKVxuICAgICAgICBjb250aW51ZVxuICAgICAgaG91cmx5Q291bnRzW2hvdXJdICs9IDFcbiAgICB9XG5cbiAgICBjb25zdCBtYXhDb3VudCA9IE1hdGgubWF4KDEsIC4uLmhvdXJseUNvdW50cylcbiAgICBjb25zdCBncmlkID0gaGVhdG1hcFNlY3Rpb24uY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWhlYXRtYXAtZ3JpZCcgfSlcbiAgICBmb3IgKGxldCBob3VyID0gMDsgaG91ciA8IDI0OyBob3VyKyspIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gaG91cmx5Q291bnRzW2hvdXJdXG4gICAgICBjb25zdCBsZXZlbCA9IGNvdW50ID09PSAwXG4gICAgICAgID8gMFxuICAgICAgICA6IE1hdGgubWluKDQsIE1hdGguY2VpbCgoY291bnQgLyBtYXhDb3VudCkgKiA0KSlcbiAgICAgIGNvbnN0IGNlbGwgPSBncmlkLmNyZWF0ZURpdih7IGNsczogYHRhcmVhcy1wb21vZG9yby1oZWF0bWFwLWNlbGwgaXMtbGV2ZWwtJHtsZXZlbH1gIH0pXG4gICAgICBjZWxsLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8taGVhdG1hcC1ob3VyJyxcbiAgICAgICAgdGV4dDogU3RyaW5nKGhvdXIpLnBhZFN0YXJ0KDIsICcwJyksXG4gICAgICB9KVxuICAgICAgY2VsbC5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgICAgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWhlYXRtYXAtY291bnQnLFxuICAgICAgICB0ZXh0OiBTdHJpbmcoY291bnQpLFxuICAgICAgfSlcbiAgICAgIGNlbGwuc2V0QXR0cigndGl0bGUnLCBgJHtTdHJpbmcoaG91cikucGFkU3RhcnQoMiwgJzAnKX06MDAgLSAke2NvdW50fSBwb21vZG9ybyhzKSBkZSB0cmFiYWpvYClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZsYXNoUG9tb2Rvcm9QYW5lbCgpIHtcbiAgICBpZiAoIXRoaXMucG9tb2Rvcm9QYW5lbEVsKVxuICAgICAgcmV0dXJuXG5cbiAgICB0aGlzLnBvbW9kb3JvUGFuZWxFbC5hZGRDbGFzcygndGFyZWFzLXBvbW9kb3JvLXBhbmVsLWZsYXNoJylcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnBvbW9kb3JvUGFuZWxFbD8ucmVtb3ZlQ2xhc3MoJ3RhcmVhcy1wb21vZG9yby1wYW5lbC1mbGFzaCcpXG4gICAgfSwgOTAwKVxuICB9XG5cbiAgcHJpdmF0ZSBwbGF5UG9tb2Rvcm9CZWVwKCkge1xuICAgIGNvbnN0IGF1ZGlvQ29udGV4dCA9IHRoaXMuZW5zdXJlUG9tb2Rvcm9BdWRpb0NvbnRleHQoKVxuICAgIGlmICghYXVkaW9Db250ZXh0KVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBzdGFydEJlZXAgPSAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBub3cgPSBhdWRpb0NvbnRleHQuY3VycmVudFRpbWVcbiAgICAgICAgY29uc3QgZmlyc3QgPSBhdWRpb0NvbnRleHQuY3JlYXRlT3NjaWxsYXRvcigpXG4gICAgICAgIGNvbnN0IHNlY29uZCA9IGF1ZGlvQ29udGV4dC5jcmVhdGVPc2NpbGxhdG9yKClcbiAgICAgICAgY29uc3QgZ2FpbiA9IGF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKClcblxuICAgICAgICBmaXJzdC50eXBlID0gJ3NpbmUnXG4gICAgICAgIHNlY29uZC50eXBlID0gJ3NpbmUnXG4gICAgICAgIGZpcnN0LmZyZXF1ZW5jeS52YWx1ZSA9IDg4MFxuICAgICAgICBzZWNvbmQuZnJlcXVlbmN5LnZhbHVlID0gOTg4XG5cbiAgICAgICAgZ2Fpbi5nYWluLnNldFZhbHVlQXRUaW1lKDAuMDAwMSwgbm93KVxuICAgICAgICBnYWluLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjA5LCBub3cgKyAwLjAxKVxuICAgICAgICBnYWluLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMDEsIG5vdyArIDAuMTgpXG4gICAgICAgIGdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZSgwLjAwMDEsIG5vdyArIDAuMjApXG4gICAgICAgIGdhaW4uZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMDgsIG5vdyArIDAuMjIpXG4gICAgICAgIGdhaW4uZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMDAwMSwgbm93ICsgMC4zOClcblxuICAgICAgICBmaXJzdC5jb25uZWN0KGdhaW4pXG4gICAgICAgIHNlY29uZC5jb25uZWN0KGdhaW4pXG4gICAgICAgIGdhaW4uY29ubmVjdChhdWRpb0NvbnRleHQuZGVzdGluYXRpb24pXG5cbiAgICAgICAgZmlyc3Quc3RhcnQobm93KVxuICAgICAgICBmaXJzdC5zdG9wKG5vdyArIDAuMTgpXG4gICAgICAgIHNlY29uZC5zdGFydChub3cgKyAwLjIwKVxuICAgICAgICBzZWNvbmQuc3RvcChub3cgKyAwLjM4KVxuICAgICAgfVxuICAgICAgY2F0Y2gge1xuICAgICAgICAvLyBJZ25vcmUgcGxheWJhY2sgZXJyb3JzIGluIGVudmlyb25tZW50cyB0aGF0IGJsb2NrIGF1dG9wbGF5LlxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhdWRpb0NvbnRleHQuc3RhdGUgPT09ICdzdXNwZW5kZWQnKSB7XG4gICAgICB2b2lkIGF1ZGlvQ29udGV4dC5yZXN1bWUoKVxuICAgICAgICAudGhlbihzdGFydEJlZXApXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgLy8gSWdub3JlIHJlc3VtZSBlcnJvcnMuXG4gICAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzdGFydEJlZXAoKVxuICB9XG5cbiAgcHJpdmF0ZSBlbnN1cmVQb21vZG9yb0F1ZGlvQ29udGV4dCgpOiBBdWRpb0NvbnRleHQgfCBudWxsIHtcbiAgICBpZiAodGhpcy5wb21vZG9yb0F1ZGlvQ29udGV4dCAmJiB0aGlzLnBvbW9kb3JvQXVkaW9Db250ZXh0LnN0YXRlICE9PSAnY2xvc2VkJylcbiAgICAgIHJldHVybiB0aGlzLnBvbW9kb3JvQXVkaW9Db250ZXh0XG5cbiAgICBjb25zdCBBdWRpb0NvbnRleHRDdG9yID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCAod2luZG93IGFzIHR5cGVvZiB3aW5kb3cgJiB7IHdlYmtpdEF1ZGlvQ29udGV4dD86IHR5cGVvZiBBdWRpb0NvbnRleHQgfSkud2Via2l0QXVkaW9Db250ZXh0XG4gICAgaWYgKCFBdWRpb0NvbnRleHRDdG9yKVxuICAgICAgcmV0dXJuIG51bGxcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLnBvbW9kb3JvQXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dEN0b3IoKVxuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICB0aGlzLnBvbW9kb3JvQXVkaW9Db250ZXh0ID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnBvbW9kb3JvQXVkaW9Db250ZXh0XG4gIH1cblxuICBwcml2YXRlIHVubG9ja1BvbW9kb3JvQXVkaW8oKSB7XG4gICAgY29uc3QgYXVkaW9Db250ZXh0ID0gdGhpcy5lbnN1cmVQb21vZG9yb0F1ZGlvQ29udGV4dCgpXG4gICAgaWYgKCFhdWRpb0NvbnRleHQgfHwgYXVkaW9Db250ZXh0LnN0YXRlICE9PSAnc3VzcGVuZGVkJylcbiAgICAgIHJldHVyblxuXG4gICAgdm9pZCBhdWRpb0NvbnRleHQucmVzdW1lKCkuY2F0Y2goKCkgPT4ge1xuICAgICAgLy8gSWdub3JlIHJlc3VtZSBlcnJvcnMuXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRQb21vZG9yb0RvbVJlZnMoKSB7XG4gICAgdGhpcy5wb21vZG9yb1BhbmVsRWwgPSBudWxsXG4gICAgdGhpcy5wb21vZG9yb1RpbWVFbCA9IG51bGxcbiAgICB0aGlzLnBvbW9kb3JvUHJvZ3Jlc3NFbCA9IG51bGxcbiAgICB0aGlzLnBvbW9kb3JvUGhhc2VFbCA9IG51bGxcbiAgICB0aGlzLnBvbW9kb3JvQ3ljbGVFbCA9IG51bGxcbiAgICB0aGlzLnBvbW9kb3JvU3RhdGVFbCA9IG51bGxcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVySGVhZGVyKHJvb3Q6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgaGVhZGVyID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtaGVhZGVyJyB9KVxuXG4gICAgY29uc3QgdGl0bGVXcmFwID0gaGVhZGVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy10aXRsZS13cmFwJyB9KVxuICAgIHRpdGxlV3JhcC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJ+KYsCcsIGNsczogJ3RhcmVhcy1pY29uJyB9KVxuICAgIHRpdGxlV3JhcC5jcmVhdGVFbCgnaDEnLCB7IHRleHQ6ICcgVGFyZWFzJyB9KVxuXG4gICAgY29uc3QgYWN0aW9ucyA9IGhlYWRlci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtaGVhZGVyLWFjdGlvbnMnIH0pXG4gICAgYWN0aW9ucy5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJ+KWpiBUYWJsZXJvJywgY2xzOiAndGFyZWFzLXZpZXctdG9nZ2xlJyB9KVxuXG4gICAgY29uc3QgbmV3QnV0dG9uID0gYWN0aW9ucy5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICd0YXJlYXMtYnRuLW5ldycgfSlcbiAgICBuZXdCdXR0b24uY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICdOdWV2byDilr4nIH0pXG4gICAgbmV3QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiBuZXcgTmV3VGFza01vZGFsKHRoaXMuYXBwLCB0aGlzLnBsdWdpbikub3BlbigpXG4gIH1cblxuICBwcml2YXRlIHJlbmRlckdyb3VwKFxuICAgIHJvb3Q6IEhUTUxFbGVtZW50LFxuICAgIHRlYW06IEVxdWlwbyxcbiAgICB0YXNrczogVGFza0l0ZW1bXSxcbiAgICBhbGxUYXNrczogVGFza0l0ZW1bXSxcbiAgICB0YXNrUHJldmlld01hcDogTWFwPHN0cmluZywgc3RyaW5nPixcbiAgKSB7XG4gICAgY29uc3QgdGVhbU5hbWUgPSB0ZWFtLm5hbWVcbiAgICBjb25zdCBpc01hbmFnZWQgPSB0aGlzLnBsdWdpbi5lcXVpcG9zLnNvbWUoaXRlbSA9PiBpdGVtLm5hbWUgPT09IHRlYW1OYW1lKVxuICAgIGNvbnN0IGV4cGFuZGVkID0gdGhpcy5leHBhbmRlZEdyb3Vwcy5oYXModGVhbU5hbWUpXG5cbiAgICBjb25zdCBncm91cCA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWdyb3VwJyB9KVxuICAgIGdyb3VwLmRhdGFzZXQuZXF1aXBvID0gdGVhbU5hbWVcblxuICAgIGNvbnN0IGhlYWRlciA9IGdyb3VwLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1ncm91cC1oZWFkZXInIH0pXG5cbiAgICBpZiAoaXNNYW5hZ2VkKVxuICAgICAgdGhpcy5hdHRhY2hHcm91cERyYWdIYW5kbGVycyhyb290LCBncm91cCwgaGVhZGVyLCB0ZWFtTmFtZSlcblxuICAgIGhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogZXhwYW5kZWQgPyAn4pa8ICcgOiAn4pa2ICcsIGNsczogJ3RhcmVhcy10b2dnbGUnIH0pXG5cbiAgICBjb25zdCBiYWRnZSA9IGhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogdGVhbU5hbWUsIGNsczogJ3RhcmVhcy1iYWRnZScgfSlcbiAgICBiYWRnZS5zdHlsZS5iYWNrZ3JvdW5kID0gdGVhbS5jb2xvclxuXG4gICAgaGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBgICAke3Rhc2tzLmxlbmd0aH1gLCBjbHM6ICd0YXJlYXMtY291bnQnIH0pXG5cbiAgICBpZiAoaXNNYW5hZ2VkKSB7XG4gICAgICBjb25zdCBlZGl0QnV0dG9uID0gaGVhZGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICfinI4nLCBjbHM6ICd0YXJlYXMtZ3JvdXAtZWRpdC1idG4nIH0pXG4gICAgICBlZGl0QnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgbmV3IEVkaXRTZWN0aW9uTW9kYWwodGhpcy5hcHAsIHRoaXMucGx1Z2luLCB0ZWFtLCB0aGlzKS5vcGVuKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoZWFkZXIub25jbGljayA9ICgpID0+IHtcbiAgICAgIGlmIChleHBhbmRlZClcbiAgICAgICAgdGhpcy5leHBhbmRlZEdyb3Vwcy5kZWxldGUodGVhbU5hbWUpXG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuZXhwYW5kZWRHcm91cHMuYWRkKHRlYW1OYW1lKVxuXG4gICAgICB0aGlzLnJlbmRlcigpXG4gICAgfVxuXG4gICAgaWYgKCFleHBhbmRlZClcbiAgICAgIHJldHVyblxuXG4gICAgdGFza3Muc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpXG5cbiAgICBjb25zdCBjYXJkcyA9IGdyb3VwLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLWxpc3QnIH0pXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tzKVxuICAgICAgdGhpcy5yZW5kZXJUYXNrQ2FyZChjYXJkcywgdGFzaywgYWxsVGFza3MsIHRhc2tQcmV2aWV3TWFwLmdldCh0YXNrLmZpbGUucGF0aCkgfHwgJycpXG5cbiAgICBpZiAodGhpcy5hY3RpdmVUYWIgPT09ICdhY3RpdmUnKSB7XG4gICAgICBjb25zdCBhZGRDYXJkID0gY2FyZHMuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXRhc2stY2FyZCB0YXJlYXMtdGFzay1jYXJkLWFkZCcgfSlcbiAgICAgIGNvbnN0IGxpbmsgPSBhZGRDYXJkLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnKyBOdWV2YSB0YXJlYScsIGNsczogJ3RhcmVhcy1hZGQtbGluaycgfSlcbiAgICAgIGxpbmsub25jbGljayA9ICgpID0+IG5ldyBOZXdUYXNrTW9kYWwodGhpcy5hcHAsIHRoaXMucGx1Z2luLCB0ZWFtTmFtZSkub3BlbigpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJUYXNrQ2FyZChjb250YWluZXI6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSwgYWxsVGFza3M6IFRhc2tJdGVtW10sIHRhc2tQcmV2aWV3OiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdWJ0YXNrcyA9IGFsbFRhc2tzXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wYXJlbnQgPT09IHRhc2suZmlsZS5iYXNlbmFtZSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcilcbiAgICBjb25zdCBoYXNTdWJ0YXNrcyA9IHN1YnRhc2tzLmxlbmd0aCA+IDBcbiAgICBjb25zdCBzdWJ0YXNrc0V4cGFuZGVkID0gdGhpcy5leHBhbmRlZENhcmRTdWJ0YXNrcy5oYXModGFzay5maWxlLnBhdGgpXG5cbiAgICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy10YXNrLWNhcmQnIH0pXG4gICAgdGhpcy5hdHRhY2hDYXJkRHJhZ0hhbmRsZXJzKGNvbnRhaW5lciwgY2FyZCwgdGFzaywgYWxsVGFza3MpXG4gICAgdGhpcy5hdHRhY2hDYXJkRWRpdEhhbmRsZXJzKGNhcmQsIHRhc2spXG5cbiAgICBjb25zdCBzdGF0dXNCYW5kQ2xhc3MgPSB0aGlzLmdldFN0YXR1c0NsYXNzTmFtZSh0YXNrLmVzdGFkbylcbiAgICBjb25zdCBzdGF0dXNCYW5kID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IGB0YXJlYXMtY2FyZC1zaWRlLWJhbmQgdGFyZWFzLWNhcmQtc3RhdHVzLWJhbmQgdGFyZWFzLWNhcmQtc3RhdHVzLWJhbmQtJHtzdGF0dXNCYW5kQ2xhc3N9YCB9KVxuICAgIHRoaXMucmVuZGVyU3RhdHVzQmFuZChzdGF0dXNCYW5kLCB0YXNrKVxuXG4gICAgY29uc3QgcHJpb3JpdHlCYW5kQ2xhc3MgPSB0aGlzLmdldFByaW9yaXR5Q2xhc3NOYW1lKHRhc2sucHJpb3JpZGFkKVxuICAgIGNvbnN0IHByaW9yaXR5QmFuZCA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBgdGFyZWFzLWNhcmQtc2lkZS1iYW5kIHRhcmVhcy1jYXJkLXByaW9yaXR5LWJhbmQgdGFyZWFzLWNhcmQtcHJpb3JpdHktYmFuZC0ke3ByaW9yaXR5QmFuZENsYXNzfWAgfSlcbiAgICB0aGlzLnJlbmRlclByaW9yaXR5QmFuZChwcmlvcml0eUJhbmQsIHRhc2spXG5cbiAgICBjb25zdCBhY3Rpb25zID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtY2FyZC1hY3Rpb25zIHRhcmVhcy1jYXJkLWFjdGlvbnMtYmFuZCcgfSlcbiAgICB0aGlzLnJlbmRlclN0YXR1c0FjdGlvbnMoYWN0aW9ucywgdGFzaylcbiAgICB0aGlzLnN5bmNDYXJkU2lkZUJhbmRzVG9wT2Zmc2V0KGNhcmQsIGFjdGlvbnMpXG5cbiAgICBjb25zdCB0aXRsZVJvdyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWNhcmQtdGl0bGUtcm93JyB9KVxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVSb3cuY3JlYXRlRWwoJ2EnLCB7IHRleHQ6IHRhc2sudGFyZWEsIGNsczogJ3RhcmVhcy10YXNrLWNhcmQtdGl0bGUnIH0pXG4gICAgdGl0bGUuc2V0QXR0cigndGl0bGUnLCB0YXNrLnRhcmVhKVxuICAgIHRpdGxlLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KHRhc2suZmlsZS5wYXRoLCAnJywgdHJ1ZSlcblxuICAgIGNvbnN0IGNvbW1lbnRCdXR0b24gPSB0aXRsZVJvdy5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICd0YXJlYXMtY2FyZC1jb21tZW50LWJ0bicgfSlcbiAgICBjb21tZW50QnV0dG9uLnNldEF0dHIoJ2FyaWEtbGFiZWwnLCAnQWdyZWdhciBjb21lbnRhcmlvJylcbiAgICBjb21tZW50QnV0dG9uLnNldEF0dHIoJ3RpdGxlJywgJ0FncmVnYXIgY29tZW50YXJpbycpXG4gICAgb2JzaWRpYW4uc2V0SWNvbihjb21tZW50QnV0dG9uLCAnc2Nyb2xsLXRleHQnKVxuICAgIGNvbW1lbnRCdXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIG5ldyBBZGRUYXNrQ29tbWVudE1vZGFsKHRoaXMuYXBwLCB0YXNrKS5vcGVuKClcbiAgICB9XG5cbiAgICBpZiAodGFza1ByZXZpZXcpXG4gICAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyB0ZXh0OiB0YXNrUHJldmlldywgY2xzOiAndGFyZWFzLWNhcmQtcHJldmlldycgfSlcblxuICAgIGNvbnN0IGZvb3RlciA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWNhcmQtZm9vdGVyJyB9KVxuICAgIGlmIChoYXNTdWJ0YXNrcykge1xuICAgICAgY29uc3Qgc3VidGFza3NUb2dnbGUgPSBmb290ZXIuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgIHRleHQ6IGAke3N1YnRhc2tzRXhwYW5kZWQgPyAn4pa8JyA6ICfilrYnfSAke3N1YnRhc2tzLmxlbmd0aH0gc3VidGFyZWEocylgLFxuICAgICAgICBjbHM6IGB0YXJlYXMtY2FyZC1zdWJ0YXNrcyB0YXJlYXMtY2FyZC1zdWJ0YXNrcy10b2dnbGUke3N1YnRhc2tzRXhwYW5kZWQgPyAnIGlzLWV4cGFuZGVkJyA6ICcnfWAsXG4gICAgICB9KVxuXG4gICAgICBzdWJ0YXNrc1RvZ2dsZS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGlmIChzdWJ0YXNrc0V4cGFuZGVkKVxuICAgICAgICAgIHRoaXMuZXhwYW5kZWRDYXJkU3VidGFza3MuZGVsZXRlKHRhc2suZmlsZS5wYXRoKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy5leHBhbmRlZENhcmRTdWJ0YXNrcy5hZGQodGFzay5maWxlLnBhdGgpXG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFN1YnRhc2sgPSBmb290ZXIuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICcrIFN1YnRhcmVhJywgY2xzOiAndGFyZWFzLWFkZC1saW5rJyB9KVxuICAgIGFkZFN1YnRhc2sub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIG5ldyBOZXdUYXNrTW9kYWwodGhpcy5hcHAsIHRoaXMucGx1Z2luLCB0YXNrLmVxdWlwbywgdGFzay5maWxlLmJhc2VuYW1lKS5vcGVuKClcbiAgICB9XG5cbiAgICBpZiAoaGFzU3VidGFza3MgJiYgc3VidGFza3NFeHBhbmRlZClcbiAgICAgIHRoaXMucmVuZGVyQ2FyZFN1YnRhc2tMaXN0KGNhcmQsIHN1YnRhc2tzKVxuXG4gICAgdGhpcy5yZW5kZXJDYXJkUHJvZ3Jlc3NCYW5kKGNhcmQsIHRhc2spXG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENhcmRFZGl0SGFuZGxlcnMoY2FyZDogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCEoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICByZXR1cm5cblxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdhLCBidXR0b24sIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0JykpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgbmV3IEVkaXRUYXNrRmlsZU1vZGFsKHRoaXMuYXBwLCB0YXNrKS5vcGVuKClcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jQ2FyZFNpZGVCYW5kc1RvcE9mZnNldChjYXJkOiBIVE1MRWxlbWVudCwgYWN0aW9uc0JhbmQ6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgYXBwbHlPZmZzZXQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBtZWFzdXJlZEhlaWdodCA9IE1hdGguY2VpbChhY3Rpb25zQmFuZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpXG4gICAgICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KCctLXRhcmVhcy1jYXJkLWFjdGlvbnMtYmFuZC1oZWlnaHQnLCBgJHttZWFzdXJlZEhlaWdodH1weGApXG4gICAgfVxuXG4gICAgYXBwbHlPZmZzZXQoKVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXBwbHlPZmZzZXQpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGJ1aWxkVGFza1ByZXZpZXdNYXAodGFza3M6IFRhc2tJdGVtW10pOiBQcm9taXNlPE1hcDxzdHJpbmcsIHN0cmluZz4+IHtcbiAgICBjb25zdCBwcmV2aWV3TWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwodGFza3MubWFwKGFzeW5jICh0YXNrKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlQ29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNhY2hlZFJlYWQodGFzay5maWxlKVxuICAgICAgICBwcmV2aWV3TWFwLnNldCh0YXNrLmZpbGUucGF0aCwgZXh0cmFjdFRhc2tCb2R5UHJldmlldyhmaWxlQ29udGVudCkpXG4gICAgICB9XG4gICAgICBjYXRjaCB7XG4gICAgICAgIHByZXZpZXdNYXAuc2V0KHRhc2suZmlsZS5wYXRoLCAnJylcbiAgICAgIH1cbiAgICB9KSlcblxuICAgIHJldHVybiBwcmV2aWV3TWFwXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclJvdyh0Ym9keTogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtLCBhbGxUYXNrczogVGFza0l0ZW1bXSwgZGVwdGg6IG51bWJlcikge1xuICAgIGNvbnN0IHN1YnRhc2tzID0gYWxsVGFza3NcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLnBhcmVudCA9PT0gdGFzay5maWxlLmJhc2VuYW1lKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKVxuXG4gICAgY29uc3QgaGFzU3VidGFza3MgPSBzdWJ0YXNrcy5sZW5ndGggPiAwXG4gICAgY29uc3QgZXhwYW5kZWQgPSB0aGlzLmV4cGFuZGVkVGFza3MuaGFzKHRhc2suZmlsZS5wYXRoKVxuXG4gICAgY29uc3Qgcm93ID0gdGJvZHkuY3JlYXRlRWwoJ3RyJywgeyBjbHM6ICd0YXJlYXMtcm93JyB9KVxuICAgIHJvdy5kYXRhc2V0LnBhdGggPSB0YXNrLmZpbGUucGF0aFxuICAgIHJvdy5kYXRhc2V0LmRlcHRoID0gU3RyaW5nKGRlcHRoKVxuXG4gICAgdGhpcy5yZW5kZXJEcmFnQ2VsbChyb3csIHRib2R5LCB0YXNrLCBhbGxUYXNrcywgZGVwdGgpXG4gICAgdGhpcy5yZW5kZXJUb2dnbGVDZWxsKHJvdywgdGFzaywgaGFzU3VidGFza3MsIGV4cGFuZGVkLCBkZXB0aClcbiAgICB0aGlzLnJlbmRlclRhc2tOYW1lQ2VsbChyb3csIHRhc2ssIGRlcHRoKVxuICAgIHRoaXMucmVuZGVyU3RhdHVzQ2VsbChyb3csIHRhc2spXG4gICAgdGhpcy5yZW5kZXJUZWFtQ2VsbChyb3csIHRhc2ssIGRlcHRoKVxuICAgIHRoaXMucmVuZGVyUHJpb3JpdHlDZWxsKHJvdywgdGFzaylcbiAgICB0aGlzLnJlbmRlckRlZGljYXRlZENlbGwocm93LCB0YXNrKVxuICAgIHRoaXMucmVuZGVyRXN0aW1hdGVkQ2VsbChyb3csIHRhc2spXG4gICAgdGhpcy5yZW5kZXJTdGFydERhdGVDZWxsKHJvdywgdGFzaylcbiAgICB0aGlzLnJlbmRlckVuZERhdGVDZWxsKHJvdywgdGFzaylcbiAgICB0aGlzLnJlbmRlclBlcmNlbnRDZWxsKHJvdywgdGFzaylcbiAgICB0aGlzLnJlbmRlclN0YXR1c0FjdGlvbnNDZWxsKHJvdywgdGFzaylcblxuICAgIGlmICghZXhwYW5kZWQpXG4gICAgICByZXR1cm5cblxuICAgIGZvciAoY29uc3Qgc3VidGFzayBvZiBzdWJ0YXNrcylcbiAgICAgIHRoaXMucmVuZGVyUm93KHRib2R5LCBzdWJ0YXNrLCBhbGxUYXNrcywgZGVwdGggKyAxKVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlVGFiID09PSAnYWN0aXZlJykge1xuICAgICAgY29uc3QgYWRkU3ViUm93ID0gdGJvZHkuY3JlYXRlRWwoJ3RyJywgeyBjbHM6ICd0YXJlYXMtYWRkLXJvdycgfSlcbiAgICAgIGFkZFN1YlJvdy5jcmVhdGVFbCgndGQnKVxuICAgICAgYWRkU3ViUm93LmNyZWF0ZUVsKCd0ZCcpXG5cbiAgICAgIGNvbnN0IGFkZFN1YkNlbGwgPSBhZGRTdWJSb3cuY3JlYXRlRWwoJ3RkJywgeyBhdHRyOiB7IGNvbHNwYW46ICcxMCcgfSB9KVxuICAgICAgYWRkU3ViQ2VsbC5zdHlsZS5wYWRkaW5nTGVmdCA9IGAkeyhkZXB0aCArIDEpICogMjQgKyA4fXB4YFxuXG4gICAgICBjb25zdCBhZGRTdWJ0YXNrID0gYWRkU3ViQ2VsbC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJysgU3VidGFyZWEnLCBjbHM6ICd0YXJlYXMtYWRkLWxpbmsnIH0pXG4gICAgICBhZGRTdWJ0YXNrLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgbmV3IE5ld1Rhc2tNb2RhbCh0aGlzLmFwcCwgdGhpcy5wbHVnaW4sIHRhc2suZXF1aXBvLCB0YXNrLmZpbGUuYmFzZW5hbWUpLm9wZW4oKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyRHJhZ0NlbGwocm93OiBIVE1MRWxlbWVudCwgdGJvZHk6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSwgYWxsVGFza3M6IFRhc2tJdGVtW10sIGRlcHRoOiBudW1iZXIpIHtcbiAgICBjb25zdCBkcmFnQ2VsbCA9IHJvdy5jcmVhdGVFbCgndGQnLCB7IGNsczogJ3RhcmVhcy1jZWxsLWRyYWcnIH0pXG4gICAgZHJhZ0NlbGwuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICfioIHioIHioIEnLCBjbHM6ICd0YXJlYXMtZHJhZy1oYW5kbGUnIH0pXG5cbiAgICByb3cuZHJhZ2dhYmxlID0gdHJ1ZVxuXG4gICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZGF0YVRyYW5zZmVyID0gZXZlbnQuZGF0YVRyYW5zZmVyXG4gICAgICBpZiAoIWRhdGFUcmFuc2ZlcilcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHRoaXMuZHJhZ1BhdGggPSB0YXNrLmZpbGUucGF0aFxuICAgICAgdGhpcy5kcmFnRGVwdGggPSBkZXB0aFxuICAgICAgdGhpcy5kcmFnUGFyZW50ID0gdGFzay5wYXJlbnRcbiAgICAgIHJvdy5hZGRDbGFzcygndGFyZWFzLXJvdy1kcmFnZ2luZycpXG4gICAgICBkYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJ1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9KVxuXG4gICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0Um93RHJhZ1N0YXRlKHRib2R5LCByb3cpXG4gICAgfSlcblxuICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNhbkRyb3BPblJvdyh0YXNrLCBkZXB0aCkpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2ZlcilcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcblxuICAgICAgdGJvZHkucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy1yb3ctZHJhZy1vdmVyJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgndGFyZWFzLXJvdy1kcmFnLW92ZXInKSlcbiAgICAgIHJvdy5hZGRDbGFzcygndGFyZWFzLXJvdy1kcmFnLW92ZXInKVxuICAgIH0pXG5cbiAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKCkgPT4ge1xuICAgICAgcm93LnJlbW92ZUNsYXNzKCd0YXJlYXMtcm93LWRyYWctb3ZlcicpXG4gICAgfSlcblxuICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY2FuRHJvcE9uUm93KHRhc2ssIGRlcHRoKSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICByb3cucmVtb3ZlQ2xhc3MoJ3RhcmVhcy1yb3ctZHJhZy1vdmVyJylcblxuICAgICAgaWYgKCF0aGlzLmRyYWdQYXRoKVxuICAgICAgICByZXR1cm5cblxuICAgICAgaWYgKGRlcHRoID09PSAwKVxuICAgICAgICBhd2FpdCB0aGlzLnJlb3JkZXJUYXNrKHRoaXMuZHJhZ1BhdGgsIHRhc2suZmlsZS5wYXRoLCBhbGxUYXNrcylcbiAgICAgIGVsc2VcbiAgICAgICAgYXdhaXQgdGhpcy5yZW9yZGVyU3VidGFzayh0aGlzLmRyYWdQYXRoLCB0YXNrLmZpbGUucGF0aCwgYWxsVGFza3MpXG5cbiAgICAgIHRoaXMucmVzZXRSb3dEcmFnU3RhdGUodGJvZHksIHJvdylcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJUb2dnbGVDZWxsKHJvdzogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtLCBoYXNTdWJ0YXNrczogYm9vbGVhbiwgZXhwYW5kZWQ6IGJvb2xlYW4sIGRlcHRoOiBudW1iZXIpIHtcbiAgICBjb25zdCB0b2dnbGVDZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtdG9nZ2xlJyB9KVxuXG4gICAgaWYgKGRlcHRoICE9PSAwKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCB0b2dnbGUgPSB0b2dnbGVDZWxsLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgdGV4dDogZXhwYW5kZWQgPyAn4pa8JyA6ICfilrYnLFxuICAgICAgY2xzOiBgdGFyZWFzLXN1YnRhc2stdG9nZ2xlJHtoYXNTdWJ0YXNrcyA/ICcnIDogJyB0YXJlYXMtdG9nZ2xlLWVtcHR5J31gLFxuICAgIH0pXG5cbiAgICB0b2dnbGUub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgaWYgKGV4cGFuZGVkKVxuICAgICAgICB0aGlzLmV4cGFuZGVkVGFza3MuZGVsZXRlKHRhc2suZmlsZS5wYXRoKVxuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmV4cGFuZGVkVGFza3MuYWRkKHRhc2suZmlsZS5wYXRoKVxuXG4gICAgICB0aGlzLnJlbmRlcigpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJUYXNrTmFtZUNlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0sIGRlcHRoOiBudW1iZXIpIHtcbiAgICBjb25zdCBjZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtbmFtZScgfSlcbiAgICBjZWxsLnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7ZGVwdGggKiAyNCArIDh9cHhgXG5cbiAgICBjb25zdCB0aXRsZVdyYXAgPSBjZWxsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy10YXNrLXRpdGxlLXdyYXAnIH0pXG5cbiAgICBpZiAoZGVwdGggPiAwKVxuICAgICAgdGl0bGVXcmFwLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAn4pSUICcsIGNsczogJ3RhcmVhcy1zdWJ0YXNrLWluZGVudCcgfSlcblxuICAgIGNvbnN0IGxpbmsgPSB0aXRsZVdyYXAuY3JlYXRlRWwoJ2EnLCB7IHRleHQ6IHRhc2sudGFyZWEsIGNsczogJ3RhcmVhcy10YXNrLWxpbmsnIH0pXG4gICAgbGluay5zZXRBdHRyKCd0aXRsZScsIHRhc2sudGFyZWEpXG4gICAgbGluay5vbmNsaWNrID0gKCkgPT4gdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dCh0YXNrLmZpbGUucGF0aCwgJycsIHRydWUpXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclN0YXR1c0NlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBjZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtZXN0YWRvJyB9KVxuICAgIHRoaXMucmVuZGVyU3RhdHVzQmFkZ2UoY2VsbCwgdGFzaylcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU3RhdHVzQmFkZ2UoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBzdGF0dXNDbGFzcyA9IHRoaXMuZ2V0U3RhdHVzQ2xhc3NOYW1lKHRhc2suZXN0YWRvKVxuICAgIGNvbnN0IGJhZGdlID0gY29udGFpbmVyLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgdGV4dDogdGFzay5lc3RhZG8sXG4gICAgICBjbHM6IGB0YXJlYXMtZXN0YWRvIHRhcmVhcy1lc3RhZG8tJHtzdGF0dXNDbGFzc31gLFxuICAgIH0pXG5cbiAgICBiYWRnZS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgc2hvd0Ryb3Bkb3duKGJhZGdlLCBFU1RBRE9TLCB0YXNrLmVzdGFkbywgYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwbHlTdGF0ZVRyYW5zaXRpb24odGFzaywgdmFsdWUpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU3RhdHVzQmFuZChjb250YWluZXI6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnRhaW5lci5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogdGFzay5lc3RhZG8sIGNsczogJ3RhcmVhcy1jYXJkLXNpZGUtYmFuZC10ZXh0JyB9KVxuICAgIGNvbnRhaW5lci5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgc2hvd0Ryb3Bkb3duKGNvbnRhaW5lciwgRVNUQURPUywgdGFzay5lc3RhZG8sIGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcGx5U3RhdGVUcmFuc2l0aW9uKHRhc2ssIHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclByaW9yaXR5QmFuZChjb250YWluZXI6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnRhaW5lci5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogdGFzay5wcmlvcmlkYWQsIGNsczogJ3RhcmVhcy1jYXJkLXNpZGUtYmFuZC10ZXh0JyB9KVxuICAgIGNvbnRhaW5lci5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgc2hvd0Ryb3Bkb3duKGNvbnRhaW5lciwgUFJJT1JJREFERVMsIHRhc2sucHJpb3JpZGFkLCBhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgcHJpb3JpZGFkOiB2YWx1ZSB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckNhcmRTdWJ0YXNrTGlzdChjYXJkOiBIVE1MRWxlbWVudCwgc3VidGFza3M6IFRhc2tJdGVtW10pIHtcbiAgICBjb25zdCBsaXN0ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtY2FyZC1zdWJ0YXNrLWxpc3QnIH0pXG5cbiAgICBmb3IgKGNvbnN0IHN1YnRhc2sgb2Ygc3VidGFza3MpIHtcbiAgICAgIGNvbnN0IHJvdyA9IGxpc3QuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWNhcmQtc3VidGFzay1yb3cnIH0pXG4gICAgICBjb25zdCBjaGVja2VkID0gc3VidGFzay5lc3RhZG8gPT09ICdGaW5hbGl6YWRhJ1xuXG4gICAgICBjb25zdCBjaGVja2JveCA9IHJvdy5jcmVhdGVFbCgnaW5wdXQnLCB7XG4gICAgICAgIGNsczogJ3RhcmVhcy1jYXJkLXN1YnRhc2stY2hlY2snLFxuICAgICAgICBhdHRyOiB7IHR5cGU6ICdjaGVja2JveCcgfSxcbiAgICAgIH0pXG4gICAgICBjaGVja2JveC5jaGVja2VkID0gY2hlY2tlZFxuXG4gICAgICBjaGVja2JveC5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB9XG5cbiAgICAgIGNoZWNrYm94Lm9uY2hhbmdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnN0IG5leHRTdGF0dXMgPSBjaGVja2JveC5jaGVja2VkID8gJ0ZpbmFsaXphZGEnIDogJ1BlbmRpZW50ZSdcbiAgICAgICAgaWYgKHN1YnRhc2suZXN0YWRvID09PSBuZXh0U3RhdHVzKVxuICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIGF3YWl0IHRoaXMuYXBwbHlTdGF0ZVRyYW5zaXRpb24oc3VidGFzaywgbmV4dFN0YXR1cywgdW5kZWZpbmVkLCB7IG1vdmVGaWxlOiBmYWxzZSB9KVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0aXRsZSA9IHJvdy5jcmVhdGVFbCgnYScsIHtcbiAgICAgICAgdGV4dDogc3VidGFzay50YXJlYSxcbiAgICAgICAgY2xzOiBgdGFyZWFzLWNhcmQtc3VidGFzay10aXRsZSR7Y2hlY2tlZCA/ICcgaXMtZG9uZScgOiAnJ31gLFxuICAgICAgfSlcbiAgICAgIHRpdGxlLnNldEF0dHIoJ3RpdGxlJywgc3VidGFzay50YXJlYSlcbiAgICAgIHRpdGxlLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChzdWJ0YXNrLmZpbGUucGF0aCwgJycsIHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbW1lbnRCdXR0b24gPSByb3cuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAndGFyZWFzLWNhcmQtY29tbWVudC1idG4gdGFyZWFzLWNhcmQtc3VidGFzay1jb21tZW50LWJ0bicgfSlcbiAgICAgIGNvbW1lbnRCdXR0b24uc2V0QXR0cignYXJpYS1sYWJlbCcsICdBZ3JlZ2FyIGNvbWVudGFyaW8nKVxuICAgICAgY29tbWVudEJ1dHRvbi5zZXRBdHRyKCd0aXRsZScsICdBZ3JlZ2FyIGNvbWVudGFyaW8nKVxuICAgICAgb2JzaWRpYW4uc2V0SWNvbihjb21tZW50QnV0dG9uLCAnc2Nyb2xsLXRleHQnKVxuICAgICAgY29tbWVudEJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIG5ldyBBZGRUYXNrQ29tbWVudE1vZGFsKHRoaXMuYXBwLCBzdWJ0YXNrKS5vcGVuKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckNhcmRQcm9ncmVzc0JhbmQoY2FyZDogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgYmFuZCA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWNhcmQtcHJvZ3Jlc3MtYmFuZCcgfSlcbiAgICBjb25zdCBmaWxsID0gYmFuZC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtY2FyZC1wcm9ncmVzcy1iYW5kLWZpbGwnIH0pXG4gICAgY29uc3QgdGV4dCA9IGJhbmQuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWNhcmQtcHJvZ3Jlc3MtYmFuZC10ZXh0JyB9KVxuICAgIGNvbnN0IGRlZGljYXRlZEFuZEVzdGltYXRlZFRleHQgPSBgJHt0aGlzLmZvcm1hdERlY2ltYWwodGFzay5kZWRpY2Fkbyl9LyR7dGhpcy5mb3JtYXREZWNpbWFsKHRhc2suZXN0aW1hY2lvbil9YFxuICAgIGNvbnN0IGRldmlhdGlvblRleHQgPSBgICstPiAke3RoaXMuZm9ybWF0RGVjaW1hbCh0YXNrLmRlc3Zpbyl9YFxuICAgIGNvbnN0IHRleHRWYWx1ZSA9IHRleHQuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICBjbHM6ICd0YXJlYXMtY2FyZC1wcm9ncmVzcy1iYW5kLXRleHQtdmFsdWUgdGFyZWFzLWNhcmQtcHJvZ3Jlc3MtYmFuZC10ZXh0LWVkaXRhYmxlJyxcbiAgICAgIHRleHQ6IGRlZGljYXRlZEFuZEVzdGltYXRlZFRleHQsXG4gICAgfSlcbiAgICB0ZXh0VmFsdWUuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ3RhcmVhcy1jYXJkLXByb2dyZXNzLWJhbmQtdGV4dC1kZXZpYXRpb24nLCB0ZXh0OiBkZXZpYXRpb25UZXh0IH0pXG4gICAgdGV4dFZhbHVlLnNldEF0dHIoJ3RpdGxlJywgYCR7dGhpcy5mb3JtYXREZWNpbWFsKHRhc2suZGVkaWNhZG8pfSBoIC8gJHt0aGlzLmZvcm1hdERlY2ltYWwodGFzay5lc3RpbWFjaW9uKX0gaCArLT4gJHt0aGlzLmZvcm1hdERlY2ltYWwodGFzay5kZXN2aW8pfSBoYClcbiAgICB0ZXh0VmFsdWUub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHRoaXMuZWRpdENhcmREZWRpY2F0ZWRWYWx1ZShiYW5kLCB0ZXh0VmFsdWUsIHRhc2spXG4gICAgfVxuXG4gICAgY29uc3QgcHJvZ3Jlc3NQZXJjZW50ID0gdGFzay5lc3RpbWFjaW9uID4gMFxuICAgICAgPyAodGFzay5kZWRpY2FkbyAvIHRhc2suZXN0aW1hY2lvbikgKiAxMDBcbiAgICAgIDogMFxuXG4gICAgY29uc3QgaXNPdmVyZmxvdyA9IHByb2dyZXNzUGVyY2VudCA+IDEwMFxuICAgIGxldCB2aXNpYmxlUGVyY2VudCA9IGlzT3ZlcmZsb3dcbiAgICAgID8gcHJvZ3Jlc3NQZXJjZW50ICUgMTAwXG4gICAgICA6IHByb2dyZXNzUGVyY2VudFxuXG4gICAgaWYgKGlzT3ZlcmZsb3cgJiYgdmlzaWJsZVBlcmNlbnQgPT09IDApXG4gICAgICB2aXNpYmxlUGVyY2VudCA9IDEwMFxuXG4gICAgY29uc3QgY2xhbXBlZFBlcmNlbnQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIHZpc2libGVQZXJjZW50KSlcbiAgICBmaWxsLnN0eWxlLndpZHRoID0gYCR7Y2xhbXBlZFBlcmNlbnR9JWBcblxuICAgIGlmIChpc092ZXJmbG93KVxuICAgICAgYmFuZC5hZGRDbGFzcygnaXMtb3ZlcmZsb3cnKVxuICB9XG5cbiAgcHJpdmF0ZSBlZGl0Q2FyZERlZGljYXRlZFZhbHVlKGJhbmQ6IEhUTUxFbGVtZW50LCB0ZXh0OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBpZiAoYmFuZC5xdWVyeVNlbGVjdG9yKCcudGFyZWFzLWNhcmQtcHJvZ3Jlc3MtaW5wdXQnKSlcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgaW5wdXQgPSBiYW5kLmNyZWF0ZUVsKCdpbnB1dCcsIHsgY2xzOiAndGFyZWFzLWNhcmQtcHJvZ3Jlc3MtaW5wdXQnIH0pXG4gICAgaW5wdXQudHlwZSA9ICdudW1iZXInXG4gICAgaW5wdXQubWluID0gJzAnXG4gICAgaW5wdXQuc3RlcCA9ICcwLjAxJ1xuICAgIGlucHV0LnZhbHVlID0gdGhpcy5mb3JtYXREZWNpbWFsKHRhc2suZGVkaWNhZG8pXG5cbiAgICB0ZXh0LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgIGlucHV0LmZvY3VzKClcbiAgICBpbnB1dC5zZWxlY3QoKVxuXG4gICAgY29uc3QgY2xvc2VFZGl0b3IgPSBhc3luYyAoc2F2ZTogYm9vbGVhbikgPT4ge1xuICAgICAgY29uc3QgbmV4dFZhbHVlID0gdGhpcy5wYXJzZURlY2ltYWwoaW5wdXQudmFsdWUpXG4gICAgICBpbnB1dC5yZW1vdmUoKVxuICAgICAgdGV4dC5zdHlsZS52aXNpYmlsaXR5ID0gJydcblxuICAgICAgaWYgKCFzYXZlIHx8IG5leHRWYWx1ZSA9PT0gdGFzay5kZWRpY2FkbylcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IGRlZGljYWRvOiBuZXh0VmFsdWUgfSlcbiAgICB9XG5cbiAgICBpbnB1dC5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICB2b2lkIGNsb3NlRWRpdG9yKHRydWUpXG4gICAgfSlcblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpXG4gICAgICAgIGlucHV0LmJsdXIoKVxuXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHZvaWQgY2xvc2VFZGl0b3IoZmFsc2UpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU3RhdHVzQWN0aW9uc0NlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBjZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtYWN0aW9ucycgfSlcbiAgICB0aGlzLnJlbmRlclN0YXR1c0FjdGlvbnMoY2VsbCwgdGFzaylcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RhdHVzQ2xhc3NOYW1lKHN0YXR1czogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RhdHVzLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnLScpXG4gIH1cblxuICBwcml2YXRlIGdldFByaW9yaXR5Q2xhc3NOYW1lKHByaW9yaXR5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBwcmlvcml0eS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJy0nKVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJTdGF0dXNBY3Rpb25zKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtc3RhdHVzLWFjdGlvbnMnIH0pXG5cbiAgICBjb25zdCBwcm9ncmVzc0FjdGlvbiA9IHRhc2suZXN0YWRvID09PSAnRW4gcHJvZ3Jlc28nXG4gICAgICA/IHsgbGFiZWw6ICdQYXJhcicsIG5leHRTdGF0dXM6ICdQZW5kaWVudGUnIH1cbiAgICAgIDogeyBsYWJlbDogJ0luaWNpYXInLCBuZXh0U3RhdHVzOiAnRW4gcHJvZ3Jlc28nIH1cblxuICAgIGNvbnN0IHN0YXR1c0FjdGlvbnMgPSBbXG4gICAgICB7IGlkOiAnZGlzbWlzcycsIGxhYmVsOiAnRGVzZXN0aW1hcicsIG5leHRTdGF0dXM6ICdDYW5jZWxhZGEnLCBjbHM6ICdpcy1kaXNtaXNzJyB9LFxuICAgICAgeyBpZDogJ3N0YXJ0LXN0b3AnLCAuLi5wcm9ncmVzc0FjdGlvbiwgY2xzOiAnaXMtc3RhcnQtc3RvcCcgfSxcbiAgICAgIHsgaWQ6ICdmaW5pc2gnLCBsYWJlbDogJ0ZpbmFsaXphcicsIG5leHRTdGF0dXM6ICdGaW5hbGl6YWRhJywgY2xzOiAnaXMtZmluaXNoJyB9LFxuICAgICAgeyBpZDogJ2Jsb2NrJywgbGFiZWw6ICdCbG9xdWVhcicsIG5leHRTdGF0dXM6ICdCbG9xdWVhZGEnLCBjbHM6ICdpcy1ibG9jaycgfSxcbiAgICBdXG5cbiAgICBmb3IgKGNvbnN0IGFjdGlvbiBvZiBzdGF0dXNBY3Rpb25zKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBhY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgIHRleHQ6IGFjdGlvbi5sYWJlbCxcbiAgICAgICAgY2xzOiAndGFyZWFzLXN0YXR1cy1hY3Rpb24tYnRuJyxcbiAgICAgIH0pXG4gICAgICBidXR0b24uYWRkQ2xhc3MoYWN0aW9uLmNscylcblxuICAgICAgaWYgKHRhc2suZXN0YWRvID09PSBhY3Rpb24ubmV4dFN0YXR1cylcbiAgICAgICAgYnV0dG9uLmFkZENsYXNzKCdpcy1hY3RpdmUnKVxuXG4gICAgICBidXR0b24ub25jbGljayA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgIGlmICh0YXNrLmVzdGFkbyA9PT0gYWN0aW9uLm5leHRTdGF0dXMpXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgYXdhaXQgdGhpcy5hcHBseVN0YXR1c0FjdGlvbih0YXNrLCBhY3Rpb24uaWQsIGFjdGlvbi5uZXh0U3RhdHVzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHVyZ2VudEJ1dHRvbiA9IGFjdGlvbnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIHRleHQ6ICdVcmdlbnRlJyxcbiAgICAgIGNsczogJ3RhcmVhcy1zdGF0dXMtYWN0aW9uLWJ0bicsXG4gICAgfSlcbiAgICB1cmdlbnRCdXR0b24uYWRkQ2xhc3MoJ2lzLXVyZ2VudCcpXG5cbiAgICBpZiAodGFzay5wcmlvcmlkYWQgPT09ICdVcmdlbnRlJylcbiAgICAgIHVyZ2VudEJ1dHRvbi5hZGRDbGFzcygnaXMtYWN0aXZlJylcblxuICAgIHVyZ2VudEJ1dHRvbi5vbmNsaWNrID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaWYgKHRhc2sucHJpb3JpZGFkID09PSAnVXJnZW50ZScpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBwcmlvcmlkYWQ6ICdVcmdlbnRlJyB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgYXBwbHlTdGF0dXNBY3Rpb24odGFzazogVGFza0l0ZW0sIGFjdGlvbklkOiBzdHJpbmcsIG5leHRTdGF0dXM6IHN0cmluZykge1xuICAgIGlmIChhY3Rpb25JZCA9PT0gJ3N0YXJ0LXN0b3AnKSB7XG4gICAgICBpZiAodGFzay5lc3RhZG8gPT09ICdFbiBwcm9ncmVzbycpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHBseVN0YXRlVHJhbnNpdGlvbih0YXNrLCBuZXh0U3RhdHVzKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5hcHBseVN0YXRlVHJhbnNpdGlvbih0YXNrLCBuZXh0U3RhdHVzLCB7XG4gICAgICAgIC4uLnRoaXMuYnVpbGRTdGF0ZUNoYW5nZVVwZGF0ZXModGFzaywgbmV4dFN0YXR1cyksXG4gICAgICAgIGZlY2hhSW5pY2lvOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbklkID09PSAnZmluaXNoJykge1xuICAgICAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHBhcnNlVGFza0RhdGUodGFzay5mZWNoYUluaWNpbylcbiAgICAgIGNvbnN0IGRlZGljYXRlZEhvdXJzID0gc3RhcnREYXRlXG4gICAgICAgID8gdGhpcy5yb3VuZFRvVHdvKChlbmREYXRlLmdldFRpbWUoKSAtIHN0YXJ0RGF0ZS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwKSlcbiAgICAgICAgOiAwXG5cbiAgICAgIGNvbnN0IHVwZGF0ZXM6IFBhcnRpYWw8VGFza0Zyb250bWF0dGVyPiA9IHtcbiAgICAgICAgZXN0YWRvOiBuZXh0U3RhdHVzLFxuICAgICAgICBmZWNoYUZpbjogZW5kRGF0ZS50b0lTT1N0cmluZygpLFxuICAgICAgICBkZWRpY2FkbzogZGVkaWNhdGVkSG91cnMsXG4gICAgICB9XG5cbiAgICAgIGlmICghc3RhcnREYXRlKVxuICAgICAgICB1cGRhdGVzLmZlY2hhSW5pY2lvID0gZW5kRGF0ZS50b0lTT1N0cmluZygpXG5cbiAgICAgIGlmICh0YXNrLmVzdGltYWNpb24gPT09IDApXG4gICAgICAgIHVwZGF0ZXMuZXN0aW1hY2lvbiA9IGRlZGljYXRlZEhvdXJzXG5cbiAgICAgIGF3YWl0IHRoaXMuYXBwbHlTdGF0ZVRyYW5zaXRpb24odGFzaywgbmV4dFN0YXR1cywgdXBkYXRlcylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuYXBwbHlTdGF0ZVRyYW5zaXRpb24odGFzaywgbmV4dFN0YXR1cylcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRTdGF0ZUNoYW5nZVVwZGF0ZXModGFzazogVGFza0l0ZW0sIG5leHRTdGF0dXM6IHN0cmluZyk6IFBhcnRpYWw8VGFza0Zyb250bWF0dGVyPiB7XG4gICAgY29uc3QgdXBkYXRlczogUGFydGlhbDxUYXNrRnJvbnRtYXR0ZXI+ID0geyBlc3RhZG86IG5leHRTdGF0dXMgfVxuXG4gICAgaWYgKHRhc2suZXN0YWRvICE9PSAnRmluYWxpemFkYScgfHwgbmV4dFN0YXR1cyA9PT0gJ0ZpbmFsaXphZGEnKVxuICAgICAgcmV0dXJuIHVwZGF0ZXNcblxuICAgIGNvbnN0IHJlbWFpbmluZ0hvdXJzID0gdGhpcy5yb3VuZFRvVHdvKHRhc2suZXN0aW1hY2lvbiAtIHRhc2suZGVkaWNhZG8pXG4gICAgaWYgKHJlbWFpbmluZ0hvdXJzIDw9IDApXG4gICAgICByZXR1cm4gdXBkYXRlc1xuXG4gICAgdXBkYXRlcy5mZWNoYUZpbiA9IG5ldyBEYXRlKERhdGUubm93KCkgKyByZW1haW5pbmdIb3VycyAqIDYwICogNjAgKiAxMDAwKS50b0lTT1N0cmluZygpXG4gICAgcmV0dXJuIHVwZGF0ZXNcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyVGVhbUNlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0sIGRlcHRoOiBudW1iZXIpIHtcbiAgICBjb25zdCBjZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcpXG4gICAgaWYgKGRlcHRoID4gMClcbiAgICAgIHJldHVyblxuXG4gICAgdGhpcy5yZW5kZXJUZWFtQmFkZ2UoY2VsbCwgdGFzaylcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyVGVhbUJhZGdlKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgdGVhbUNvbmZpZyA9IHRoaXMucGx1Z2luLmVxdWlwb3MuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gdGFzay5lcXVpcG8pXG4gICAgY29uc3QgYmFkZ2UgPSBjb250YWluZXIuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICB0ZXh0OiB0YXNrLmVxdWlwbyB8fCAn4oCUJyxcbiAgICAgIGNsczogJ3RhcmVhcy1lcXVpcG8tYmFkZ2UnLFxuICAgIH0pXG5cbiAgICBpZiAodGVhbUNvbmZpZylcbiAgICAgIGJhZGdlLnN0eWxlLmJhY2tncm91bmQgPSB0ZWFtQ29uZmlnLmNvbG9yXG5cbiAgICBiYWRnZS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5wbHVnaW4uZXF1aXBvcy5tYXAoZXF1aXBvID0+IGVxdWlwby5uYW1lKVxuICAgICAgc2hvd0Ryb3Bkb3duKGJhZGdlLCBvcHRpb25zLCB0YXNrLmVxdWlwbywgYXN5bmMgKG5leHRUZWFtKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVGVhbSA9IHRhc2suZXF1aXBvXG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IGVxdWlwbzogbmV4dFRlYW0gfSlcblxuICAgICAgICBjb25zdCBzdWJ0YXNrcyA9IGdldFRhc2tzKHRoaXMuYXBwKS5maWx0ZXIoaXRlbSA9PiBpdGVtLnBhcmVudCA9PT0gdGFzay5maWxlLmJhc2VuYW1lKVxuICAgICAgICBmb3IgKGNvbnN0IHN1YnRhc2sgb2Ygc3VidGFza3MpXG4gICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKHN1YnRhc2ssIHsgZXF1aXBvOiBuZXh0VGVhbSB9KVxuXG4gICAgICAgIGF3YWl0IHRoaXMucmViYWxhbmNlVGVhbVNjaGVkdWxlKHByZXZpb3VzVGVhbSlcbiAgICAgICAgYXdhaXQgdGhpcy5yZWJhbGFuY2VUZWFtU2NoZWR1bGUobmV4dFRlYW0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUHJpb3JpdHlDZWxsKHJvdzogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgY2VsbCA9IHJvdy5jcmVhdGVFbCgndGQnLCB7IGNsczogJ3RhcmVhcy1jZWxsLXByaW9yaWRhZCcgfSlcbiAgICB0aGlzLnJlbmRlclByaW9yaXR5QmFkZ2UoY2VsbCwgdGFzaylcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUHJpb3JpdHlCYWRnZShjb250YWluZXI6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnN0IHByaW9yaXR5Q2xhc3MgPSB0YXNrLnByaW9yaWRhZC50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgdXJnZW50QWN0aXZlID0gdGFzay5wcmlvcmlkYWQgPT09ICdVcmdlbnRlJyAmJiB0YXNrLmVzdGFkbyAhPT0gJ0ZpbmFsaXphZGEnXG5cbiAgICBjb25zdCBiYWRnZSA9IGNvbnRhaW5lci5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgIHRleHQ6IHRhc2sucHJpb3JpZGFkLFxuICAgICAgY2xzOiBgdGFyZWFzLXByaW9yaWRhZCB0YXJlYXMtcHJpb3JpZGFkLSR7cHJpb3JpdHlDbGFzc30ke3VyZ2VudEFjdGl2ZSA/ICcgdGFyZWFzLXVyZ2VudGUtYWN0aXZhJyA6ICcnfWAsXG4gICAgfSlcblxuICAgIGJhZGdlLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBzaG93RHJvcGRvd24oYmFkZ2UsIFBSSU9SSURBREVTLCB0YXNrLnByaW9yaWRhZCwgYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IHByaW9yaWRhZDogdmFsdWUgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJEZWRpY2F0ZWRDZWxsKHJvdzogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgY2VsbCA9IHJvdy5jcmVhdGVFbCgndGQnLCB7IGNsczogJ3RhcmVhcy1jZWxsLW51bScgfSlcbiAgICBjb25zdCBlZGl0YWJsZSA9IGNlbGwuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IHRoaXMuZm9ybWF0RGVjaW1hbCh0YXNrLmRlZGljYWRvKSwgY2xzOiAndGFyZWFzLWVkaXRhYmxlJyB9KVxuXG4gICAgZWRpdGFibGUub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuZWRpdE51bWJlckNlbGwoZWRpdGFibGUsIHRhc2suZGVkaWNhZG8sIGFzeW5jIHZhbHVlID0+IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IGRlZGljYWRvOiB2YWx1ZSB9KSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckVzdGltYXRlZENlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBjZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtbnVtJyB9KVxuICAgIGNvbnN0IGVkaXRhYmxlID0gY2VsbC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogdGhpcy5mb3JtYXREZWNpbWFsKHRhc2suZXN0aW1hY2lvbiksIGNsczogJ3RhcmVhcy1lZGl0YWJsZScgfSlcblxuICAgIGVkaXRhYmxlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmVkaXROdW1iZXJDZWxsKGVkaXRhYmxlLCB0YXNrLmVzdGltYWNpb24sIGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBlc3RpbWFjaW9uOiB2YWx1ZSB9KVxuICAgICAgICBhd2FpdCB0aGlzLnJlYmFsYW5jZVRlYW1TY2hlZHVsZSh0YXNrLmVxdWlwbylcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJTdGFydERhdGVDZWxsKHJvdzogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtZGF0ZScsIHRleHQ6IHRoaXMuZm9ybWF0VGFza0RhdGUodGFzay5mZWNoYUluaWNpbykgfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyRW5kRGF0ZUNlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICByb3cuY3JlYXRlRWwoJ3RkJywgeyBjbHM6ICd0YXJlYXMtY2VsbC1kYXRlJywgdGV4dDogdGhpcy5mb3JtYXRUYXNrRGF0ZSh0YXNrLmZlY2hhRmluKSB9KVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJQZXJjZW50Q2VsbChyb3c6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmNhbGN1bGF0ZVByb2dyZXNzUGVyY2VudCh0YXNrKVxuXG4gICAgY29uc3QgY2VsbCA9IHJvdy5jcmVhdGVFbCgndGQnLCB7IGNsczogJ3RhcmVhcy1jZWxsLXBjdCcgfSlcbiAgICBjZWxsLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBgJHtwZXJjZW50fSAlYCwgY2xzOiAndGFyZWFzLXBjdC10ZXh0JyB9KVxuXG4gICAgY29uc3QgZG90ID0gY2VsbC5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAndGFyZWFzLXBjdC1kb3QnIH0pXG4gICAgaWYgKHBlcmNlbnQgPj0gMTAwKVxuICAgICAgZG90LmFkZENsYXNzKCdmdWxsJylcbiAgICBlbHNlIGlmIChwZXJjZW50ID4gMClcbiAgICAgIGRvdC5hZGRDbGFzcygncGFydGlhbCcpXG4gIH1cblxuICBwcml2YXRlIGVkaXROdW1iZXJDZWxsKFxuICAgIHNwYW46IEhUTUxTcGFuRWxlbWVudCxcbiAgICBjdXJyZW50VmFsdWU6IG51bWJlcixcbiAgICBvblNhdmU6IChuZXh0VmFsdWU6IG51bWJlcikgPT4gUHJvbWlzZTx2b2lkPixcbiAgKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQudHlwZSA9ICdudW1iZXInXG4gICAgaW5wdXQuY2xhc3NOYW1lID0gJ3RhcmVhcy1pbmxpbmUtaW5wdXQnXG4gICAgaW5wdXQudmFsdWUgPSB0aGlzLmZvcm1hdERlY2ltYWwoY3VycmVudFZhbHVlKVxuICAgIGlucHV0Lm1pbiA9ICcwJ1xuICAgIGlucHV0LnN0ZXAgPSAnMC4wMSdcblxuICAgIHNwYW4ucmVwbGFjZVdpdGgoaW5wdXQpXG4gICAgaW5wdXQuZm9jdXMoKVxuICAgIGlucHV0LnNlbGVjdCgpXG5cbiAgICBjb25zdCBmaW5pc2ggPSAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucGFyc2VEZWNpbWFsKGlucHV0LnZhbHVlKVxuICAgICAgdm9pZCBvblNhdmUodmFsdWUpXG4gICAgfVxuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZpbmlzaClcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKVxuICAgICAgICBpbnB1dC5ibHVyKClcblxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLmZvcm1hdERlY2ltYWwoY3VycmVudFZhbHVlKVxuICAgICAgICBpbnB1dC5ibHVyKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZURlY2ltYWwodmFsdWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgcGFyc2VkID0gTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUpXG4gICAgaWYgKE51bWJlci5pc05hTihwYXJzZWQpIHx8IHBhcnNlZCA8IDApXG4gICAgICByZXR1cm4gMFxuXG4gICAgcmV0dXJuIE1hdGgucm91bmQocGFyc2VkICogMTAwKSAvIDEwMFxuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXREZWNpbWFsKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBhcnNlRGVjaW1hbChTdHJpbmcodmFsdWUpKS50b0ZpeGVkKDIpXG4gIH1cblxuICBwcml2YXRlIGZvcm1hdFRhc2tEYXRlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGRhdGUgPSBwYXJzZVRhc2tEYXRlKHZhbHVlKVxuICAgIGlmICghZGF0ZSlcbiAgICAgIHJldHVybiAn4oCUJ1xuXG4gICAgY29uc3QgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpXG4gICAgY29uc3QgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKVxuICAgIGNvbnN0IGhvdXIgPSBTdHJpbmcoZGF0ZS5nZXRIb3VycygpKS5wYWRTdGFydCgyLCAnMCcpXG4gICAgY29uc3QgbWludXRlID0gU3RyaW5nKGRhdGUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpXG5cbiAgICByZXR1cm4gYCR7ZGF5fS8ke21vbnRofSAke2hvdXJ9OiR7bWludXRlfWBcbiAgfVxuXG4gIHByaXZhdGUgcm91bmRUb1R3byh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA8PSAwKVxuICAgICAgcmV0dXJuIDBcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMFxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVQcm9ncmVzc1BlcmNlbnQodGFzazogVGFza0l0ZW0pOiBudW1iZXIge1xuICAgIGNvbnN0IHRvdGFsID0gdGFzay5lc3RpbWFjaW9uIHx8IDBcbiAgICBpZiAodG90YWwgPD0gMClcbiAgICAgIHJldHVybiAwXG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCgodGFzay5kZWRpY2FkbyAvIHRvdGFsKSAqIDEwMClcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2FyZERyYWdIYW5kbGVycyhjb250YWluZXI6IEhUTUxFbGVtZW50LCBjYXJkOiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0sIGFsbFRhc2tzOiBUYXNrSXRlbVtdKSB7XG4gICAgY2FyZC5kcmFnZ2FibGUgPSB0cnVlXG5cbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZGF0YVRyYW5zZmVyID0gZXZlbnQuZGF0YVRyYW5zZmVyXG4gICAgICBpZiAoIWRhdGFUcmFuc2ZlcilcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHRoaXMuZHJhZ1BhdGggPSB0YXNrLmZpbGUucGF0aFxuICAgICAgdGhpcy5kcmFnRGVwdGggPSAwXG4gICAgICB0aGlzLmRyYWdQYXJlbnQgPSB0YXNrLnBhcmVudFxuICAgICAgY2FyZC5hZGRDbGFzcygndGFyZWFzLXRhc2stY2FyZC1kcmFnZ2luZycpXG4gICAgICBkYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJ1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9KVxuXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldENhcmREcmFnU3RhdGUoY29udGFpbmVyLCBjYXJkKVxuICAgIH0pXG5cbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY2FuRHJvcE9uUm93KHRhc2ssIDApKVxuICAgICAgICByZXR1cm5cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIpXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG5cbiAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZWFzLXRhc2stY2FyZC1kcmFnLW92ZXInKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd0YXJlYXMtdGFzay1jYXJkLWRyYWctb3ZlcicpKVxuICAgICAgY2FyZC5hZGRDbGFzcygndGFyZWFzLXRhc2stY2FyZC1kcmFnLW92ZXInKVxuICAgIH0pXG5cbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsICgpID0+IHtcbiAgICAgIGNhcmQucmVtb3ZlQ2xhc3MoJ3RhcmVhcy10YXNrLWNhcmQtZHJhZy1vdmVyJylcbiAgICB9KVxuXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY2FuRHJvcE9uUm93KHRhc2ssIDApKVxuICAgICAgICByZXR1cm5cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGNhcmQucmVtb3ZlQ2xhc3MoJ3RhcmVhcy10YXNrLWNhcmQtZHJhZy1vdmVyJylcblxuICAgICAgaWYgKCF0aGlzLmRyYWdQYXRoKVxuICAgICAgICByZXR1cm5cblxuICAgICAgYXdhaXQgdGhpcy5yZW9yZGVyVGFzayh0aGlzLmRyYWdQYXRoLCB0YXNrLmZpbGUucGF0aCwgYWxsVGFza3MpXG4gICAgICB0aGlzLnJlc2V0Q2FyZERyYWdTdGF0ZShjb250YWluZXIsIGNhcmQpXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoR3JvdXBEcmFnSGFuZGxlcnMocm9vdDogSFRNTEVsZW1lbnQsIGdyb3VwOiBIVE1MRWxlbWVudCwgaGVhZGVyOiBIVE1MRWxlbWVudCwgdGVhbU5hbWU6IHN0cmluZykge1xuICAgIGhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJ+KggeKggeKggScsIGNsczogJ3RhcmVhcy1ncm91cC1kcmFnLWhhbmRsZScgfSlcbiAgICBoZWFkZXIuZHJhZ2dhYmxlID0gdHJ1ZVxuXG4gICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZGF0YVRyYW5zZmVyID0gZXZlbnQuZGF0YVRyYW5zZmVyXG4gICAgICBpZiAoIWRhdGFUcmFuc2ZlcilcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHRoaXMuZHJhZ0dyb3VwID0gdGVhbU5hbWVcbiAgICAgIGdyb3VwLmFkZENsYXNzKCd0YXJlYXMtZ3JvdXAtZHJhZ2dpbmcnKVxuICAgICAgZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfSlcblxuICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xuICAgICAgdGhpcy5kcmFnR3JvdXAgPSBudWxsXG4gICAgICBncm91cC5yZW1vdmVDbGFzcygndGFyZWFzLWdyb3VwLWRyYWdnaW5nJylcbiAgICAgIHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy1ncm91cC1kcmFnLW92ZXInKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd0YXJlYXMtZ3JvdXAtZHJhZy1vdmVyJykpXG4gICAgfSlcblxuICAgIGdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZHJhZ0dyb3VwIHx8IHRoaXMuZHJhZ0dyb3VwID09PSB0ZWFtTmFtZSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJlYXMtZ3JvdXAtZHJhZy1vdmVyJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgndGFyZWFzLWdyb3VwLWRyYWctb3ZlcicpKVxuICAgICAgZ3JvdXAuYWRkQ2xhc3MoJ3RhcmVhcy1ncm91cC1kcmFnLW92ZXInKVxuICAgIH0pXG5cbiAgICBncm91cC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5yZWxhdGVkVGFyZ2V0IGluc3RhbmNlb2YgTm9kZSAmJiBncm91cC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGdyb3VwLnJlbW92ZUNsYXNzKCd0YXJlYXMtZ3JvdXAtZHJhZy1vdmVyJylcbiAgICB9KVxuXG4gICAgZ3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGdyb3VwLnJlbW92ZUNsYXNzKCd0YXJlYXMtZ3JvdXAtZHJhZy1vdmVyJylcblxuICAgICAgaWYgKCF0aGlzLmRyYWdHcm91cCB8fCB0aGlzLmRyYWdHcm91cCA9PT0gdGVhbU5hbWUpXG4gICAgICAgIHJldHVyblxuXG4gICAgICB0aGlzLnJlb3JkZXJHcm91cCh0aGlzLmRyYWdHcm91cCwgdGVhbU5hbWUpXG4gICAgICB0aGlzLmRyYWdHcm91cCA9IG51bGxcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSByZW9yZGVyR3JvdXAoZHJhZ2dlZE5hbWU6IHN0cmluZywgdGFyZ2V0TmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMucGx1Z2luLmVxdWlwb3NcbiAgICBjb25zdCBmcm9tSW5kZXggPSBjdXJyZW50LmZpbmRJbmRleChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gZHJhZ2dlZE5hbWUpXG4gICAgY29uc3QgdG9JbmRleCA9IGN1cnJlbnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5uYW1lID09PSB0YXJnZXROYW1lKVxuXG4gICAgaWYgKGZyb21JbmRleCA8IDAgfHwgdG9JbmRleCA8IDApXG4gICAgICByZXR1cm5cblxuICAgIHRoaXMucGx1Z2luLmVxdWlwb3MgPSByZW9yZGVyTGlzdChjdXJyZW50LCBmcm9tSW5kZXgsIHRvSW5kZXgpXG4gICAgdm9pZCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKVxuICAgIHRoaXMucmVuZGVyKClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVvcmRlclRhc2soZHJhZ2dlZFBhdGg6IHN0cmluZywgdGFyZ2V0UGF0aDogc3RyaW5nLCBhbGxUYXNrczogVGFza0l0ZW1bXSkge1xuICAgIGNvbnN0IGRyYWdnZWQgPSBhbGxUYXNrcy5maW5kKHRhc2sgPT4gdGFzay5maWxlLnBhdGggPT09IGRyYWdnZWRQYXRoKVxuICAgIGNvbnN0IHRhcmdldCA9IGFsbFRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmZpbGUucGF0aCA9PT0gdGFyZ2V0UGF0aClcbiAgICBpZiAoIWRyYWdnZWQgfHwgIXRhcmdldClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3Qgc2libGluZ3MgPSBhbGxUYXNrc1xuICAgICAgLmZpbHRlcih0YXNrID0+ICF0YXNrLnBhcmVudCAmJiB0YXNrLmVxdWlwbyA9PT0gZHJhZ2dlZC5lcXVpcG8pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpXG5cbiAgICBjb25zdCBmcm9tSW5kZXggPSBzaWJsaW5ncy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gZHJhZ2dlZFBhdGgpXG4gICAgY29uc3QgdG9JbmRleCA9IHNpYmxpbmdzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSB0YXJnZXRQYXRoKVxuXG4gICAgY29uc3QgbmV4dE9yZGVyID0gcmVvcmRlckxpc3Qoc2libGluZ3MsIGZyb21JbmRleCwgdG9JbmRleClcbiAgICBhd2FpdCBwZXJzaXN0VGFza09yZGVyKG5leHRPcmRlciwgYXN5bmMgKHRhc2ssIG9yZGVyKSA9PiB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBvcmRlciB9KSlcbiAgICBhd2FpdCB0aGlzLnJlYmFsYW5jZVRlYW1TY2hlZHVsZShkcmFnZ2VkLmVxdWlwbylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVvcmRlclN1YnRhc2soZHJhZ2dlZFBhdGg6IHN0cmluZywgdGFyZ2V0UGF0aDogc3RyaW5nLCBhbGxUYXNrczogVGFza0l0ZW1bXSkge1xuICAgIGNvbnN0IGRyYWdnZWQgPSBhbGxUYXNrcy5maW5kKHRhc2sgPT4gdGFzay5maWxlLnBhdGggPT09IGRyYWdnZWRQYXRoKVxuICAgIGNvbnN0IHRhcmdldCA9IGFsbFRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmZpbGUucGF0aCA9PT0gdGFyZ2V0UGF0aClcbiAgICBpZiAoIWRyYWdnZWQgfHwgIXRhcmdldClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3Qgc2libGluZ3MgPSBhbGxUYXNrc1xuICAgICAgLmZpbHRlcih0YXNrID0+IHRhc2sucGFyZW50ID09PSBkcmFnZ2VkLnBhcmVudClcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcilcblxuICAgIGNvbnN0IGZyb21JbmRleCA9IHNpYmxpbmdzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSBkcmFnZ2VkUGF0aClcbiAgICBjb25zdCB0b0luZGV4ID0gc2libGluZ3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5maWxlLnBhdGggPT09IHRhcmdldFBhdGgpXG5cbiAgICBjb25zdCBuZXh0T3JkZXIgPSByZW9yZGVyTGlzdChzaWJsaW5ncywgZnJvbUluZGV4LCB0b0luZGV4KVxuICAgIGF3YWl0IHBlcnNpc3RUYXNrT3JkZXIobmV4dE9yZGVyLCBhc3luYyAodGFzaywgb3JkZXIpID0+IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IG9yZGVyIH0pKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyB1cGRhdGVUYXNrKHRhc2s6IFRhc2tJdGVtLCB1cGRhdGVzOiBQYXJ0aWFsPFRhc2tGcm9udG1hdHRlcj4pIHtcbiAgICBhd2FpdCB1cGRhdGVGcm9udG1hdHRlcih0aGlzLmFwcCwgdGFzay5maWxlLCB1cGRhdGVzKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBhcHBseVN0YXRlVHJhbnNpdGlvbihcbiAgICB0YXNrOiBUYXNrSXRlbSxcbiAgICBuZXh0U3RhdHVzOiBzdHJpbmcsXG4gICAgZXhwbGljaXRVcGRhdGVzPzogUGFydGlhbDxUYXNrRnJvbnRtYXR0ZXI+LFxuICAgIG9wdGlvbnM/OiB7IG1vdmVGaWxlPzogYm9vbGVhbiwgc3luY1N1YnRhc2tzV2l0aFBhcmVudD86IGJvb2xlYW4gfSxcbiAgKSB7XG4gICAgY29uc3QgdXBkYXRlcyA9IGV4cGxpY2l0VXBkYXRlcyA/PyB0aGlzLmJ1aWxkU3RhdGVDaGFuZ2VVcGRhdGVzKHRhc2ssIG5leHRTdGF0dXMpXG4gICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKHRhc2ssIHVwZGF0ZXMpXG5cbiAgICBjb25zdCBzaG91bGRNb3ZlRmlsZSA9IG9wdGlvbnM/Lm1vdmVGaWxlID8/IHRydWVcbiAgICBjb25zdCBzaG91bGRTeW5jU3VidGFza3MgPSBvcHRpb25zPy5zeW5jU3VidGFza3NXaXRoUGFyZW50ID8/IHRydWVcbiAgICBjb25zdCBpc0luQ29tcGxldGVkRm9sZGVyID0gaXNUYXNrSW5Db21wbGV0ZWRGb2xkZXIodGFzay5maWxlLnBhdGgpXG4gICAgaWYgKHNob3VsZE1vdmVGaWxlICYmIG5leHRTdGF0dXMgPT09ICdGaW5hbGl6YWRhJyAmJiAhaXNJbkNvbXBsZXRlZEZvbGRlcilcbiAgICAgIGF3YWl0IG1vdmVUYXNrVG9Db21wbGV0ZWRGb2xkZXIodGhpcy5hcHAsIHRhc2suZmlsZSwgQm9vbGVhbih0YXNrLnBhcmVudCkpXG5cbiAgICBpZiAoc2hvdWxkTW92ZUZpbGUgJiYgbmV4dFN0YXR1cyAhPT0gJ0ZpbmFsaXphZGEnICYmIGlzSW5Db21wbGV0ZWRGb2xkZXIpXG4gICAgICBhd2FpdCBtb3ZlVGFza1RvQWN0aXZlRm9sZGVyKHRoaXMuYXBwLCB0YXNrLmZpbGUsIEJvb2xlYW4odGFzay5wYXJlbnQpKVxuXG4gICAgaWYgKHNob3VsZE1vdmVGaWxlICYmIHNob3VsZFN5bmNTdWJ0YXNrcyAmJiAhdGFzay5wYXJlbnQpIHtcbiAgICAgIGlmIChuZXh0U3RhdHVzID09PSAnRW4gcHJvZ3Jlc28nKVxuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN1YnRhc2tzU3RhdHVzRm9yUGFyZW50KHRhc2suZmlsZS5iYXNlbmFtZSwgJ0VuIHByb2dyZXNvJylcblxuICAgICAgaWYgKG5leHRTdGF0dXMgPT09ICdGaW5hbGl6YWRhJylcbiAgICAgICAgYXdhaXQgdGhpcy5tb3ZlU3VidGFza3NGb3JQYXJlbnQodGFzay5maWxlLmJhc2VuYW1lLCB0cnVlKVxuXG4gICAgICBpZiAobmV4dFN0YXR1cyAhPT0gJ0ZpbmFsaXphZGEnICYmIGlzSW5Db21wbGV0ZWRGb2xkZXIpXG4gICAgICAgIGF3YWl0IHRoaXMubW92ZVN1YnRhc2tzRm9yUGFyZW50KHRhc2suZmlsZS5iYXNlbmFtZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgaWYgKG5leHRTdGF0dXMgPT09ICdGaW5hbGl6YWRhJyB8fCBpc0luQ29tcGxldGVkRm9sZGVyKVxuICAgICAgYXdhaXQgdGhpcy5yZWJhbGFuY2VUZWFtU2NoZWR1bGUodGFzay5lcXVpcG8pXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG1vdmVTdWJ0YXNrc0ZvclBhcmVudChwYXJlbnRUYXNrTmFtZTogc3RyaW5nLCB0b0NvbXBsZXRlZDogYm9vbGVhbikge1xuICAgIGNvbnN0IHN1YnRhc2tzID0gZ2V0VGFza3ModGhpcy5hcHApLmZpbHRlcihpdGVtID0+IGl0ZW0ucGFyZW50ID09PSBwYXJlbnRUYXNrTmFtZSlcblxuICAgIGZvciAoY29uc3Qgc3VidGFzayBvZiBzdWJ0YXNrcykge1xuICAgICAgaWYgKHRvQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChzdWJ0YXNrLmVzdGFkbyAhPT0gJ0ZpbmFsaXphZGEnKVxuICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayhzdWJ0YXNrLCB7IGVzdGFkbzogJ0ZpbmFsaXphZGEnIH0pXG5cbiAgICAgICAgYXdhaXQgbW92ZVRhc2tUb0NvbXBsZXRlZEZvbGRlcih0aGlzLmFwcCwgc3VidGFzay5maWxlLCB0cnVlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGF3YWl0IG1vdmVUYXNrVG9BY3RpdmVGb2xkZXIodGhpcy5hcHAsIHN1YnRhc2suZmlsZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHVwZGF0ZVN1YnRhc2tzU3RhdHVzRm9yUGFyZW50KHBhcmVudFRhc2tOYW1lOiBzdHJpbmcsIG5leHRTdGF0dXM6IHN0cmluZykge1xuICAgIGNvbnN0IHN1YnRhc2tzID0gZ2V0VGFza3ModGhpcy5hcHApLmZpbHRlcihpdGVtID0+IGl0ZW0ucGFyZW50ID09PSBwYXJlbnRUYXNrTmFtZSlcblxuICAgIGZvciAoY29uc3Qgc3VidGFzayBvZiBzdWJ0YXNrcykge1xuICAgICAgaWYgKHN1YnRhc2suZXN0YWRvID09PSBuZXh0U3RhdHVzKVxuICAgICAgICBjb250aW51ZVxuXG4gICAgICBhd2FpdCB0aGlzLmFwcGx5U3RhdGVUcmFuc2l0aW9uKHN1YnRhc2ssIG5leHRTdGF0dXMsIHVuZGVmaW5lZCwgeyBzeW5jU3VidGFza3NXaXRoUGFyZW50OiBmYWxzZSB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmViYWxhbmNlVGVhbVNjaGVkdWxlKHRlYW1OYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRlYW1OYW1lKVxuICAgICAgcmV0dXJuXG5cbiAgICBhd2FpdCByZWJhbGFuY2VHcm91cEVuZERhdGVzKHRoaXMuYXBwLCB0ZWFtTmFtZSlcbiAgfVxuXG4gIHByaXZhdGUgY2FuRHJvcE9uUm93KHRhcmdldDogVGFza0l0ZW0sIGRlcHRoOiBudW1iZXIpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLmRyYWdQYXRoXG4gICAgICAmJiB0aGlzLmRyYWdQYXRoICE9PSB0YXJnZXQuZmlsZS5wYXRoXG4gICAgICAmJiB0aGlzLmRyYWdEZXB0aCA9PT0gZGVwdGhcbiAgICAgICYmIHRoaXMuZHJhZ1BhcmVudCA9PT0gdGFyZ2V0LnBhcmVudFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRSb3dEcmFnU3RhdGUodGJvZHk6IEhUTUxFbGVtZW50LCByb3c6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5kcmFnUGF0aCA9IG51bGxcbiAgICB0aGlzLmRyYWdEZXB0aCA9IG51bGxcbiAgICB0aGlzLmRyYWdQYXJlbnQgPSBudWxsXG4gICAgcm93LnJlbW92ZUNsYXNzKCd0YXJlYXMtcm93LWRyYWdnaW5nJylcbiAgICB0Ym9keS5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZWFzLXJvdy1kcmFnLW92ZXInKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd0YXJlYXMtcm93LWRyYWctb3ZlcicpKVxuICB9XG5cbiAgcHJpdmF0ZSByZXNldENhcmREcmFnU3RhdGUoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgY2FyZDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLmRyYWdQYXRoID0gbnVsbFxuICAgIHRoaXMuZHJhZ0RlcHRoID0gbnVsbFxuICAgIHRoaXMuZHJhZ1BhcmVudCA9IG51bGxcbiAgICBjYXJkLnJlbW92ZUNsYXNzKCd0YXJlYXMtdGFzay1jYXJkLWRyYWdnaW5nJylcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy10YXNrLWNhcmQtZHJhZy1vdmVyJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgndGFyZWFzLXRhc2stY2FyZC1kcmFnLW92ZXInKSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um9vdEVsKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCByb290ID0gdGhpcy5jb250YWluZXJFbC5jaGlsZHJlblsxXVxuICAgIGlmICghKHJvb3QgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RhcmVhc1ZpZXcgcm9vdCBlbGVtZW50IGlzIG5vdCBhdmFpbGFibGUnKVxuXG4gICAgcmV0dXJuIHJvb3RcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7XG4gIENPTVBMRVRFRF9TVUJUQVNLU19GT0xERVIsXG4gIENPTVBMRVRFRF9UQVNLU19GT0xERVIsXG4gIERFRkFVTFRfRVFVSVBPUyxcbiAgSU5ERVhfVEFHLFxuICBMT0NLRURfRVFVSVBPX05BTUVTLFxuICBTVUJUQVNLX1RBRyxcbiAgU1VCVEFTS1NfRk9MREVSLFxuICBUQVJFQVNfRk9MREVSLFxuICBUQVNLX1RBRyxcbiAgVklFV19UWVBFLFxufSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBjcmVhdGVEZWZhdWx0UG9tb2Rvcm9TdGF0ZSB9IGZyb20gJy4uL2VuZ2luZXMvcG9tb2Rvcm9FbmdpbmUnXG5pbXBvcnQgeyByZWJ1aWxkVGFza0NoaWxkTGlua3MsIHN5bmNUYXNrVHlwZVRhZ3MgfSBmcm9tICcuLi9lbmdpbmVzL2Zyb250bWF0dGVyRW5naW5lJ1xuaW1wb3J0IHtcbiAgZW5zdXJlRmluaXNoZWRUYXNrSW5kZXhGaWxlLFxuICBlbnN1cmVUYXNrSW5kZXhGaWxlLFxuICByZW1vdmVUYXNrTGlua0Zyb21GaW5pc2hlZEluZGV4LFxuICByZW1vdmVUYXNrTGlua0Zyb21JbmRleCxcbn0gZnJvbSAnLi4vZW5naW5lcy90YXNrSW5kZXhFbmdpbmUnXG5pbXBvcnQgeyBOZXdUYXNrTW9kYWwgfSBmcm9tICcuLi9tb2RhbHMvTmV3VGFza01vZGFsJ1xuaW1wb3J0IHR5cGUgeyBFcXVpcG8sIFBvbW9kb3JvU3RhdGUgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IG5vcm1hbGl6ZUVxdWlwb3NGcm9tU2V0dGluZ3MsIG5vcm1hbGl6ZVBvbW9kb3JvRnJvbVNldHRpbmdzIH0gZnJvbSAnLi4vdXRpbHMvc2V0dGluZ3MnXG5pbXBvcnQgeyBUYXJlYXNWaWV3IH0gZnJvbSAnLi4vdmlldy9UYXJlYXNWaWV3J1xuXG5pbnRlcmZhY2UgR3JhcGhHcm91cERlZmluaXRpb24ge1xuICBxdWVyeTogc3RyaW5nXG4gIGNvbG9yOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNsYXNzIFRhcmVhc1BsdWdpbiBleHRlbmRzIG9ic2lkaWFuLlBsdWdpbiB7XG4gIGVxdWlwb3M6IEVxdWlwb1tdID0gWy4uLkRFRkFVTFRfRVFVSVBPU11cbiAgcG9tb2Rvcm86IFBvbW9kb3JvU3RhdGUgPSBjcmVhdGVEZWZhdWx0UG9tb2Rvcm9TdGF0ZSgpXG5cbiAgYXN5bmMgb25sb2FkKCkge1xuICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKClcblxuICAgIHRoaXMucmVnaXN0ZXJWaWV3KFZJRVdfVFlQRSwgbGVhZiA9PiBuZXcgVGFyZWFzVmlldyhsZWFmLCB0aGlzKSlcblxuICAgIHRoaXMuYWRkUmliYm9uSWNvbignbGlzdC1jaGVja3MnLCAnQWJyaXIgVGFyZWFzJywgKCkgPT4gdGhpcy5hY3RpdmF0ZVZpZXcoKSlcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ29wZW4tdGFyZWFzLXZpZXcnLFxuICAgICAgbmFtZTogJ0FicmlyIHZpc3RhIGRlIFRhcmVhcycsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5hY3RpdmF0ZVZpZXcoKSxcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnbmV3LXRhcmVhJyxcbiAgICAgIG5hbWU6ICdOdWV2YSB0YXJlYScsXG4gICAgICBjYWxsYmFjazogKCkgPT4gbmV3IE5ld1Rhc2tNb2RhbCh0aGlzLmFwcCwgdGhpcykub3BlbigpLFxuICAgIH0pXG5cbiAgICBhd2FpdCB0aGlzLmVuc3VyZVRhc2tzRm9sZGVyKClcbiAgICBhd2FpdCBlbnN1cmVUYXNrSW5kZXhGaWxlKHRoaXMuYXBwKVxuICAgIGF3YWl0IGVuc3VyZUZpbmlzaGVkVGFza0luZGV4RmlsZSh0aGlzLmFwcClcbiAgICBhd2FpdCByZWJ1aWxkVGFza0NoaWxkTGlua3ModGhpcy5hcHApXG4gICAgYXdhaXQgc3luY1Rhc2tUeXBlVGFncyh0aGlzLmFwcClcbiAgICBhd2FpdCB0aGlzLmVuc3VyZU9ic2lkaWFuR3JhcGhHcm91cHMoKVxuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLnZhdWx0Lm9uKCdkZWxldGUnLCAoZmlsZSkgPT4ge1xuICAgICAgdm9pZCB0aGlzLmhhbmRsZUZpbGVEZWxldGUoZmlsZSlcbiAgICB9KSlcbiAgfVxuXG4gIGFzeW5jIGFjdGl2YXRlVmlldygpIHtcbiAgICBjb25zdCB7IHdvcmtzcGFjZSB9ID0gdGhpcy5hcHBcbiAgICBsZXQgbGVhZiA9IHdvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFKVswXVxuXG4gICAgaWYgKCFsZWFmKSB7XG4gICAgICBsZWFmID0gd29ya3NwYWNlLmdldExlYWYoJ3RhYicpXG4gICAgICBhd2FpdCBsZWFmLnNldFZpZXdTdGF0ZSh7IHR5cGU6IFZJRVdfVFlQRSwgYWN0aXZlOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgd29ya3NwYWNlLnJldmVhbExlYWYobGVhZilcbiAgfVxuXG4gIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcbiAgICBjb25zdCByYXdEYXRhID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gICAgdGhpcy5lcXVpcG9zID0gbm9ybWFsaXplRXF1aXBvc0Zyb21TZXR0aW5ncyhyYXdEYXRhKVxuICAgIHRoaXMucG9tb2Rvcm8gPSBub3JtYWxpemVQb21vZG9yb0Zyb21TZXR0aW5ncyhyYXdEYXRhKVxuICB9XG5cbiAgYXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEoe1xuICAgICAgZXF1aXBvczogdGhpcy5lcXVpcG9zLFxuICAgICAgcG9tb2Rvcm86IHRoaXMucG9tb2Rvcm8sXG4gICAgfSlcbiAgfVxuXG4gIHNldFBvbW9kb3JvU3RhdGUobmV4dFN0YXRlOiBQb21vZG9yb1N0YXRlKSB7XG4gICAgdGhpcy5wb21vZG9ybyA9IHtcbiAgICAgIC4uLm5leHRTdGF0ZSxcbiAgICAgIGR1cmF0aW9uczogeyAuLi5uZXh0U3RhdGUuZHVyYXRpb25zIH0sXG4gICAgfVxuICAgIHZvaWQgdGhpcy5zYXZlU2V0dGluZ3MoKVxuICB9XG5cbiAgYWRkRXF1aXBvKG5hbWU6IHN0cmluZywgY29sb3IgPSAnIzZiNWNlNycpIHtcbiAgICBpZiAodGhpcy5lcXVpcG9zLnNvbWUoZXF1aXBvID0+IGVxdWlwby5uYW1lID09PSBuYW1lKSlcbiAgICAgIHJldHVyblxuXG4gICAgdGhpcy5lcXVpcG9zLnB1c2goeyBuYW1lLCBjb2xvciB9KVxuICAgIHZvaWQgdGhpcy5zYXZlU2V0dGluZ3MoKVxuICB9XG5cbiAgcmVtb3ZlRXF1aXBvKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmIChMT0NLRURfRVFVSVBPX05BTUVTLmluY2x1ZGVzKG5hbWUpKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBjb25zdCBuZXh0RXF1aXBvcyA9IHRoaXMuZXF1aXBvcy5maWx0ZXIoZXF1aXBvID0+IGVxdWlwby5uYW1lICE9PSBuYW1lKVxuICAgIGlmIChuZXh0RXF1aXBvcy5sZW5ndGggPT09IHRoaXMuZXF1aXBvcy5sZW5ndGgpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIHRoaXMuZXF1aXBvcyA9IG5leHRFcXVpcG9zXG4gICAgdm9pZCB0aGlzLnNhdmVTZXR0aW5ncygpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHVwZGF0ZUVxdWlwbyhuYW1lOiBzdHJpbmcsIHVwZGF0ZXM6IFBhcnRpYWw8RXF1aXBvPikge1xuICAgIGNvbnN0IHRlYW0gPSB0aGlzLmVxdWlwb3MuZmluZChlcXVpcG8gPT4gZXF1aXBvLm5hbWUgPT09IG5hbWUpXG4gICAgaWYgKCF0ZWFtKVxuICAgICAgcmV0dXJuXG5cbiAgICBPYmplY3QuYXNzaWduKHRlYW0sIHVwZGF0ZXMpXG4gICAgdm9pZCB0aGlzLnNhdmVTZXR0aW5ncygpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGVuc3VyZVRhc2tzRm9sZGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmVuc3VyZUZvbGRlclBhdGgoVEFSRUFTX0ZPTERFUilcbiAgICAgIGF3YWl0IHRoaXMuZW5zdXJlRm9sZGVyUGF0aChTVUJUQVNLU19GT0xERVIpXG4gICAgICBhd2FpdCB0aGlzLmVuc3VyZUZvbGRlclBhdGgoQ09NUExFVEVEX1RBU0tTX0ZPTERFUilcbiAgICAgIGF3YWl0IHRoaXMuZW5zdXJlRm9sZGVyUGF0aChDT01QTEVURURfU1VCVEFTS1NfRk9MREVSKVxuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBObyBzZSBwdWRvIGNyZWFyIGxhIGNhcnBldGEgXCIke1RBUkVBU19GT0xERVJ9XCIuYClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGVuc3VyZUZvbGRlclBhdGgocGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJykuZmlsdGVyKEJvb2xlYW4pXG4gICAgbGV0IGN1cnJlbnRQYXRoID0gJydcblxuICAgIGZvciAoY29uc3Qgc2VnbWVudCBvZiBzZWdtZW50cykge1xuICAgICAgY3VycmVudFBhdGggPSBjdXJyZW50UGF0aCA/IGAke2N1cnJlbnRQYXRofS8ke3NlZ21lbnR9YCA6IHNlZ21lbnRcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGN1cnJlbnRQYXRoKVxuXG4gICAgICBpZiAoZXhpc3RpbmcgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKVxuICAgICAgICBjb250aW51ZVxuXG4gICAgICBpZiAoZXhpc3RpbmcpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhpc3RlIHVuIGFyY2hpdm8gbGxhbWFkbyBcIiR7Y3VycmVudFBhdGh9XCIuYClcblxuICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlRm9sZGVyKGN1cnJlbnRQYXRoKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlRmlsZURlbGV0ZShmaWxlOiBvYnNpZGlhbi5UQWJzdHJhY3RGaWxlKSB7XG4gICAgaWYgKCEoZmlsZSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGaWxlKSlcbiAgICAgIHJldHVyblxuXG4gICAgaWYgKGZpbGUuZXh0ZW5zaW9uICE9PSAnbWQnKVxuICAgICAgcmV0dXJuXG5cbiAgICBpZiAoIWZpbGUucGF0aC5zdGFydHNXaXRoKGAke1RBUkVBU19GT0xERVJ9L2ApKVxuICAgICAgcmV0dXJuXG5cbiAgICBhd2FpdCByZW1vdmVUYXNrTGlua0Zyb21JbmRleCh0aGlzLmFwcCwgZmlsZSlcbiAgICBhd2FpdCByZW1vdmVUYXNrTGlua0Zyb21GaW5pc2hlZEluZGV4KHRoaXMuYXBwLCBmaWxlKVxuICAgIGF3YWl0IHJlYnVpbGRUYXNrQ2hpbGRMaW5rcyh0aGlzLmFwcClcbiAgICBhd2FpdCBzeW5jVGFza1R5cGVUYWdzKHRoaXMuYXBwKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBlbnN1cmVPYnNpZGlhbkdyYXBoR3JvdXBzKCkge1xuICAgIGNvbnN0IGRlc2lyZWRHcm91cHM6IEdyYXBoR3JvdXBEZWZpbml0aW9uW10gPSBbXG4gICAgICB7IHF1ZXJ5OiBgdGFnOiMke0lOREVYX1RBR31gLCBjb2xvcjogJyM3YzVjZTcnIH0sXG4gICAgICB7IHF1ZXJ5OiBgdGFnOiMke1RBU0tfVEFHfWAsIGNvbG9yOiAnIzJlNmRiMCcgfSxcbiAgICAgIHsgcXVlcnk6IGB0YWc6IyR7U1VCVEFTS19UQUd9YCwgY29sb3I6ICcjMDBiODk0JyB9LFxuICAgIF1cblxuICAgIGF3YWl0IHRoaXMuZW5zdXJlR3JhcGhDb25maWdHcm91cHMoZGVzaXJlZEdyb3VwcylcbiAgICB0aGlzLmVuc3VyZVJ1bnRpbWVHcmFwaEdyb3VwcyhkZXNpcmVkR3JvdXBzKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBlbnN1cmVHcmFwaENvbmZpZ0dyb3VwcyhkZXNpcmVkR3JvdXBzOiBHcmFwaEdyb3VwRGVmaW5pdGlvbltdKSB7XG4gICAgY29uc3QgYWRhcHRlciA9IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXJcbiAgICBjb25zdCBjb25maWdEaXIgPSB0aGlzLmFwcC52YXVsdC5jb25maWdEaXJcbiAgICBjb25zdCBncmFwaENvbmZpZ1BhdGggPSBgJHtjb25maWdEaXJ9L2dyYXBoLmpzb25gXG5cbiAgICBsZXQgZ3JhcGhDb25maWc6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge31cbiAgICB0cnkge1xuICAgICAgaWYgKGF3YWl0IGFkYXB0ZXIuZXhpc3RzKGdyYXBoQ29uZmlnUGF0aCkpIHtcbiAgICAgICAgY29uc3QgcmF3Q29uZmlnID0gYXdhaXQgYWRhcHRlci5yZWFkKGdyYXBoQ29uZmlnUGF0aClcbiAgICAgICAgZ3JhcGhDb25maWcgPSByYXdDb25maWcudHJpbSgpID8gSlNPTi5wYXJzZShyYXdDb25maWcpIDoge31cbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgZ3JhcGhDb25maWcgPSB7fVxuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRHcm91cHMgPSBBcnJheS5pc0FycmF5KGdyYXBoQ29uZmlnLmdyb3VwcykgPyBncmFwaENvbmZpZy5ncm91cHMgOiBbXVxuICAgIGdyYXBoQ29uZmlnLmdyb3VwcyA9IHRoaXMubWVyZ2VHcmFwaEdyb3VwcyhjdXJyZW50R3JvdXBzLCBkZXNpcmVkR3JvdXBzKVxuXG4gICAgYXdhaXQgYWRhcHRlci53cml0ZShncmFwaENvbmZpZ1BhdGgsIEpTT04uc3RyaW5naWZ5KGdyYXBoQ29uZmlnLCBudWxsLCAyKSlcbiAgfVxuXG4gIHByaXZhdGUgZW5zdXJlUnVudGltZUdyYXBoR3JvdXBzKGRlc2lyZWRHcm91cHM6IEdyYXBoR3JvdXBEZWZpbml0aW9uW10pIHtcbiAgICBjb25zdCBhcHBXaXRoSW50ZXJuYWxzID0gdGhpcy5hcHAgYXMgdW5rbm93biBhcyB7XG4gICAgICBpbnRlcm5hbFBsdWdpbnM/OiB7XG4gICAgICAgIHBsdWdpbnM/OiBSZWNvcmQ8c3RyaW5nLCB7XG4gICAgICAgICAgaW5zdGFuY2U/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgICB9PlxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdyYXBoSW5zdGFuY2UgPSBhcHBXaXRoSW50ZXJuYWxzLmludGVybmFsUGx1Z2lucz8ucGx1Z2lucz8uZ3JhcGg/Lmluc3RhbmNlXG4gICAgaWYgKCFncmFwaEluc3RhbmNlKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBjYW5kaWRhdGVIb2xkZXJzID0gW1xuICAgICAgZ3JhcGhJbnN0YW5jZS5vcHRpb25zLFxuICAgICAgZ3JhcGhJbnN0YW5jZS5sb2NhbEdyYXBoT3B0aW9ucyxcbiAgICAgIGdyYXBoSW5zdGFuY2UuZ2xvYmFsR3JhcGhPcHRpb25zLFxuICAgIF0gYXMgQXJyYXk8UmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQ+XG5cbiAgICBmb3IgKGNvbnN0IGhvbGRlciBvZiBjYW5kaWRhdGVIb2xkZXJzKSB7XG4gICAgICBpZiAoIWhvbGRlciB8fCAhQXJyYXkuaXNBcnJheShob2xkZXIuZ3JvdXBzKSlcbiAgICAgICAgY29udGludWVcblxuICAgICAgaG9sZGVyLmdyb3VwcyA9IHRoaXMubWVyZ2VHcmFwaEdyb3Vwcyhob2xkZXIuZ3JvdXBzLCBkZXNpcmVkR3JvdXBzKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbWVyZ2VHcmFwaEdyb3VwcyhcbiAgICBjdXJyZW50R3JvdXBzOiB1bmtub3duW10sXG4gICAgZGVzaXJlZEdyb3VwczogR3JhcGhHcm91cERlZmluaXRpb25bXSxcbiAgKTogQXJyYXk8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+IHtcbiAgICBjb25zdCBub3JtYWxpemVkQ3VycmVudCA9IGN1cnJlbnRHcm91cHNcbiAgICAgIC5maWx0ZXIoKGdyb3VwKTogZ3JvdXAgaXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPT4gQm9vbGVhbihncm91cCkgJiYgdHlwZW9mIGdyb3VwID09PSAnb2JqZWN0JylcbiAgICAgIC5maWx0ZXIoZ3JvdXAgPT4gdHlwZW9mIGdyb3VwLnF1ZXJ5ID09PSAnc3RyaW5nJylcblxuICAgIGNvbnN0IGJ5UXVlcnkgPSBuZXcgTWFwPHN0cmluZywgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KClcbiAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIG5vcm1hbGl6ZWRDdXJyZW50KVxuICAgICAgYnlRdWVyeS5zZXQoZ3JvdXAucXVlcnkgYXMgc3RyaW5nLCB7IC4uLmdyb3VwIH0pXG5cbiAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIGRlc2lyZWRHcm91cHMpIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gYnlRdWVyeS5nZXQoZ3JvdXAucXVlcnkpXG4gICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgaWYgKCFleGlzdGluZy5jb2xvcilcbiAgICAgICAgICBleGlzdGluZy5jb2xvciA9IGdyb3VwLmNvbG9yXG4gICAgICAgIGJ5UXVlcnkuc2V0KGdyb3VwLnF1ZXJ5LCBleGlzdGluZylcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgYnlRdWVyeS5zZXQoZ3JvdXAucXVlcnksIHsgcXVlcnk6IGdyb3VwLnF1ZXJ5LCBjb2xvcjogZ3JvdXAuY29sb3IgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShieVF1ZXJ5LnZhbHVlcygpKVxuICB9XG59XG4iLCJpbXBvcnQgeyBUYXJlYXNQbHVnaW4gfSBmcm9tICcuL3Rhc2tNYW5uYWdlci9wbHVnaW4vVGFyZWFzUGx1Z2luJ1xuXG5leHBvcnQgeyBUYXJlYXNQbHVnaW4gfVxuZXhwb3J0IGRlZmF1bHQgVGFyZWFzUGx1Z2luXG4iLCJpbXBvcnQgeyBnZXREZWZhdWx0RXhwb3J0RnJvbUNqcyB9IGZyb20gXCJcdTAwMDBjb21tb25qc0hlbHBlcnMuanNcIjtcbmltcG9ydCB7IF9fcmVxdWlyZSBhcyByZXF1aXJlVGFza01hbm5hZ2VyIH0gZnJvbSBcIi9ob21lL2dhYnJpZWwvRGVza3RvcC9yZXBvcy90YXNrLW1hbm5hZ2VyL3NyYy90YXNrTWFubmFnZXIudHNcIjtcbnZhciB0YXNrTWFubmFnZXJFeHBvcnRzID0gcmVxdWlyZVRhc2tNYW5uYWdlcigpO1xuZXhwb3J0IHsgdGFza01hbm5hZ2VyRXhwb3J0cyBhcyBfX21vZHVsZUV4cG9ydHMgfTtcbmV4cG9ydCBkZWZhdWx0IC8qQF9fUFVSRV9fKi9nZXREZWZhdWx0RXhwb3J0RnJvbUNqcyh0YXNrTWFubmFnZXJFeHBvcnRzKTsiXSwibmFtZXMiOlsicmVxdWlyZSQkMCIsInJlcXVpcmUkJDEiLCJuZXh0RHVyYXRpb24iLCJyZXF1aXJlJCQyIiwicmVxdWlyZSQkMyIsInJlcXVpcmUkJDQiLCJyZXF1aXJlJCQ1IiwicmVxdWlyZSQkNiIsInJlcXVpcmUkJDciLCJyZXF1aXJlJCQ4IiwicmVxdWlyZSQkOSIsInJlcXVpcmUkJDEwIiwicmVxdWlyZSQkMTEiLCJyZXF1aXJlJCQxMiIsInJlcXVpcmUkJDEzIiwicmVxdWlyZSQkMTQiLCJyZXF1aXJlJCQxNSIsInJlcXVpcmUkJDE2IiwicmVxdWlyZSQkMTciLCJ0YXNrTWFubmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQSxJQUFBLGlCQUFBLEdBQUEsRUFBQTtDQUFBLFFBQUEsQ0FBQSxpQkFBQSxFQUFBO0dBQUEseUJBQUEsRUFBQSxNQUFBLHlCQUFBO0dBQUEsc0JBQUEsRUFBQSxNQUFBLHNCQUFBO0dBQUEsZUFBQSxFQUFBLE1BQUEs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
