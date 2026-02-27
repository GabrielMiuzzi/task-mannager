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
	  CANCELLED_SUBTASKS_FOLDER: () => CANCELLED_SUBTASKS_FOLDER,
	  CANCELLED_TASKS_FOLDER: () => CANCELLED_TASKS_FOLDER,
	  CANCELLED_TASK_INDEX_BASENAME: () => CANCELLED_TASK_INDEX_BASENAME,
	  COMPLETED_SUBTASKS_FOLDER: () => COMPLETED_SUBTASKS_FOLDER,
	  COMPLETED_TASKS_FOLDER: () => COMPLETED_TASKS_FOLDER,
	  DEFAULT_BOARD_NAME: () => DEFAULT_BOARD_NAME,
	  DEFAULT_EQUIPOS: () => DEFAULT_EQUIPOS,
	  DEFAULT_POMODORO_LONG_BREAK_MINUTES: () => DEFAULT_POMODORO_LONG_BREAK_MINUTES,
	  DEFAULT_POMODORO_SHORT_BREAK_MINUTES: () => DEFAULT_POMODORO_SHORT_BREAK_MINUTES,
	  DEFAULT_POMODORO_WORK_MINUTES: () => DEFAULT_POMODORO_WORK_MINUTES,
	  DEFAULT_TABLEROS: () => DEFAULT_TABLEROS,
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
	  SUBTASK_TAG: () => SUBTASK_TAG,
	  TAREAS_FOLDER: () => TAREAS_FOLDER,
	  TASK_INDEX_BASENAME: () => TASK_INDEX_BASENAME,
	  TASK_TAG: () => TASK_TAG,
	  VIEW_TYPE: () => VIEW_TYPE
	});
	constants = __toCommonJS(constants_exports);
	const VIEW_TYPE = "tareas-view";
	const TAREAS_FOLDER = "task-mannager";
	const COMPLETED_TASKS_FOLDER = `${TAREAS_FOLDER}/finished`;
	const COMPLETED_SUBTASKS_FOLDER = `${COMPLETED_TASKS_FOLDER}/subTasks`;
	const CANCELLED_TASKS_FOLDER = `${TAREAS_FOLDER}/cancelled`;
	const CANCELLED_SUBTASKS_FOLDER = `${CANCELLED_TASKS_FOLDER}/subTasks`;
	const LEGACY_COMPLETED_TASKS_FOLDER = `${TAREAS_FOLDER}/completadas`;
	const TASK_INDEX_BASENAME = "taskIndex";
	const FINISHED_TASK_INDEX_BASENAME = "taskIndexFinished";
	const CANCELLED_TASK_INDEX_BASENAME = "taskIndexCancelled";
	const POMODORO_LOG_BASENAME = "pomodoro";
	const INDEX_TAG = "index";
	const TASK_TAG = "task";
	const SUBTASK_TAG = "sub-task";
	const ESTADOS = ["Pendiente", "Cancelada", "En progreso", "Finalizada", "Bloqueada"];
	const PRIORIDADES = ["Baja", "Media", "Alta", "Urgente"];
	const DEFAULT_BOARD_NAME = "default";
	const DEFAULT_TABLEROS = [
	  { name: DEFAULT_BOARD_NAME, color: "#2e6db0" }
	];
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
	  if (typeof value.tablero === "string")
	    frontmatter.tablero = value.tablero;
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
	  appendTaskLinkToCancelledIndex: () => appendTaskLinkToCancelledIndex,
	  appendTaskLinkToFinishedIndex: () => appendTaskLinkToFinishedIndex,
	  appendTaskLinkToIndex: () => appendTaskLinkToIndex,
	  ensureBoardTaskIndexFile: () => ensureBoardTaskIndexFile,
	  ensureCancelledTaskIndexFile: () => ensureCancelledTaskIndexFile,
	  ensureFinishedTaskIndexFile: () => ensureFinishedTaskIndexFile,
	  ensureTaskIndexFile: () => ensureTaskIndexFile,
	  getBoardTaskIndexBasename: () => getBoardTaskIndexBasename,
	  getBoardTaskIndexPath: () => getBoardTaskIndexPath,
	  isBoardTaskIndexPath: () => isBoardTaskIndexPath,
	  removeTaskLinkFromCancelledIndex: () => removeTaskLinkFromCancelledIndex,
	  removeTaskLinkFromFinishedIndex: () => removeTaskLinkFromFinishedIndex,
	  removeTaskLinkFromIndex: () => removeTaskLinkFromIndex,
	  syncAllBoardTaskIndexLinks: () => syncAllBoardTaskIndexLinks,
	  syncAllTaskIndexes: () => syncAllTaskIndexes,
	  syncBoardTaskIndexLinks: () => syncBoardTaskIndexLinks,
	  syncCancelledTaskIndexLinks: () => syncCancelledTaskIndexLinks,
	  syncFinishedTaskIndexLinks: () => syncFinishedTaskIndexLinks,
	  syncRootTaskIndexLinks: () => syncRootTaskIndexLinks
	});
	taskIndexEngine = __toCommonJS(taskIndexEngine_exports);
	var obsidian = __toESM(require$$0);
	var import_constants = requireConstants();
	const TASK_INDEX_FILENAME = `${import_constants.TASK_INDEX_BASENAME}.md`;
	const TASK_INDEX_PATH = `${import_constants.TAREAS_FOLDER}/${TASK_INDEX_FILENAME}`;
	const FINISHED_TASK_INDEX_FILENAME = `${import_constants.FINISHED_TASK_INDEX_BASENAME}.md`;
	const FINISHED_TASK_INDEX_PATH = `${import_constants.COMPLETED_TASKS_FOLDER}/${FINISHED_TASK_INDEX_FILENAME}`;
	const CANCELLED_TASK_INDEX_FILENAME = `${import_constants.CANCELLED_TASK_INDEX_BASENAME}.md`;
	const CANCELLED_TASK_INDEX_PATH = `${import_constants.CANCELLED_TASKS_FOLDER}/${CANCELLED_TASK_INDEX_FILENAME}`;
	const BOARD_TASK_INDEX_SUFFIX = "TaskIndex";
	async function ensureTaskIndexFile(app) {
	  const indexFile = await ensureIndexFile(app, import_constants.TAREAS_FOLDER, TASK_INDEX_PATH);
	  if (!indexFile)
	    return null;
	  await syncRootTaskIndexLinks(app);
	  return indexFile;
	}
	async function ensureFinishedTaskIndexFile(app) {
	  return ensureIndexFile(app, import_constants.COMPLETED_TASKS_FOLDER, FINISHED_TASK_INDEX_PATH);
	}
	async function ensureCancelledTaskIndexFile(app) {
	  return ensureIndexFile(app, import_constants.CANCELLED_TASKS_FOLDER, CANCELLED_TASK_INDEX_PATH);
	}
	async function appendTaskLinkToIndex(app, taskFile) {
	  const boardName = resolveActiveTaskBoard(app, taskFile);
	  const boardIndexPath = getBoardTaskIndexPath(boardName);
	  await appendTaskLinkToIndexFile(app, taskFile, boardIndexPath, () => ensureBoardTaskIndexFile(app, boardName));
	}
	async function appendTaskLinkToFinishedIndex(app, taskFile) {
	  await appendTaskLinkToIndexFile(app, taskFile, FINISHED_TASK_INDEX_PATH, () => ensureFinishedTaskIndexFile(app));
	}
	async function appendTaskLinkToCancelledIndex(app, taskFile) {
	  await appendTaskLinkToIndexFile(app, taskFile, CANCELLED_TASK_INDEX_PATH, () => ensureCancelledTaskIndexFile(app));
	}
	async function removeTaskLinkFromIndex(app, taskFile) {
	  const boardNames = await getBoardFolderNames(app);
	  for (const boardName of boardNames)
	    await removeTaskLinkFromIndexFile(app, taskFile, getBoardTaskIndexPath(boardName));
	}
	async function removeTaskLinkFromFinishedIndex(app, taskFile) {
	  await removeTaskLinkFromIndexFile(app, taskFile, FINISHED_TASK_INDEX_PATH);
	}
	async function removeTaskLinkFromCancelledIndex(app, taskFile) {
	  await removeTaskLinkFromIndexFile(app, taskFile, CANCELLED_TASK_INDEX_PATH);
	}
	function getBoardTaskIndexBasename(boardName) {
	  const normalized = normalizeBoardName(boardName);
	  return `${normalized}${BOARD_TASK_INDEX_SUFFIX}`;
	}
	function getBoardTaskIndexPath(boardName) {
	  const normalized = normalizeBoardName(boardName);
	  const fileName = `${getBoardTaskIndexBasename(normalized)}.md`;
	  return `${import_constants.TAREAS_FOLDER}/${normalized}/${fileName}`;
	}
	function isBoardTaskIndexPath(path) {
	  if (!path.startsWith(`${import_constants.TAREAS_FOLDER}/`) || !path.endsWith(".md"))
	    return false;
	  const relativePath = path.slice(`${import_constants.TAREAS_FOLDER}/`.length);
	  const segments = relativePath.split("/");
	  if (segments.length !== 2)
	    return false;
	  const [boardName, fileName] = segments;
	  if (!boardName)
	    return false;
	  const expectedFileName = `${getBoardTaskIndexBasename(boardName)}.md`;
	  return fileName === expectedFileName;
	}
	async function ensureBoardTaskIndexFile(app, boardName) {
	  const normalized = normalizeBoardName(boardName);
	  const folderPath = `${import_constants.TAREAS_FOLDER}/${normalized}`;
	  const indexPath = getBoardTaskIndexPath(normalized);
	  return ensureIndexFile(app, folderPath, indexPath);
	}
	async function syncRootTaskIndexLinks(app) {
	  const rootIndex = app.vault.getAbstractFileByPath(TASK_INDEX_PATH);
	  if (!(rootIndex instanceof obsidian.TFile))
	    return;
	  const boardNames = await getBoardFolderNames(app);
	  const links = boardNames.map((boardName) => `[[${boardName}/${getBoardTaskIndexBasename(boardName)}]]`).sort((a, b) => a.localeCompare(b));
	  const defaultLink = `[[${import_constants.DEFAULT_BOARD_NAME}/${getBoardTaskIndexBasename(import_constants.DEFAULT_BOARD_NAME)}]]`;
	  const finishedLink = `[[finished/${import_constants.FINISHED_TASK_INDEX_BASENAME}]]`;
	  const cancelledLink = `[[cancelled/${import_constants.CANCELLED_TASK_INDEX_BASENAME}]]`;
	  const orderedLinks = [
	    defaultLink,
	    ...links.filter((link) => link !== defaultLink),
	    finishedLink,
	    cancelledLink
	  ];
	  const nextContent = buildIndexContent(orderedLinks);
	  const currentContent = await app.vault.cachedRead(rootIndex);
	  if (currentContent === nextContent)
	    return;
	  await app.vault.modify(rootIndex, nextContent);
	}
	async function syncBoardTaskIndexLinks(app, boardName) {
	  const normalizedBoardName = normalizeBoardName(boardName);
	  const boardFolderPrefix = `${import_constants.TAREAS_FOLDER}/${normalizedBoardName}/`;
	  const boardIndexPath = getBoardTaskIndexPath(normalizedBoardName);
	  const boardIndex = await ensureBoardTaskIndexFile(app, normalizedBoardName);
	  if (!boardIndex)
	    return;
	  const links = app.vault.getMarkdownFiles().filter((file) => file.path.startsWith(boardFolderPrefix)).filter((file) => file.path !== boardIndexPath).filter((file) => !isBoardTaskIndexPath(file.path)).map((file) => `[[${file.basename}]]`).sort((a, b) => a.localeCompare(b));
	  const nextContent = buildIndexContent(links);
	  const currentContent = await app.vault.cachedRead(boardIndex);
	  if (currentContent === nextContent)
	    return;
	  await app.vault.modify(boardIndex, nextContent);
	}
	async function syncAllBoardTaskIndexLinks(app) {
	  const boardNames = await getBoardFolderNames(app);
	  for (const boardName of boardNames)
	    await syncBoardTaskIndexLinks(app, boardName);
	}
	async function syncFinishedTaskIndexLinks(app) {
	  await syncTerminalTaskIndexLinks(app, import_constants.COMPLETED_TASKS_FOLDER, FINISHED_TASK_INDEX_PATH, () => ensureFinishedTaskIndexFile(app));
	}
	async function syncCancelledTaskIndexLinks(app) {
	  await syncTerminalTaskIndexLinks(app, import_constants.CANCELLED_TASKS_FOLDER, CANCELLED_TASK_INDEX_PATH, () => ensureCancelledTaskIndexFile(app));
	}
	async function syncAllTaskIndexes(app) {
	  await ensureTaskIndexFile(app);
	  await ensureFinishedTaskIndexFile(app);
	  await ensureCancelledTaskIndexFile(app);
	  await syncAllBoardTaskIndexLinks(app);
	  await syncFinishedTaskIndexLinks(app);
	  await syncCancelledTaskIndexLinks(app);
	  await syncRootTaskIndexLinks(app);
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
	async function getBoardFolderNames(app) {
	  const rootFolder = app.vault.getAbstractFileByPath(import_constants.TAREAS_FOLDER);
	  if (!(rootFolder instanceof obsidian.TFolder))
	    return [import_constants.DEFAULT_BOARD_NAME];
	  const boardNames = rootFolder.children.filter((child) => child instanceof obsidian.TFolder).map((folder) => folder.name.trim().toLowerCase()).filter((name) => Boolean(name) && name !== import_constants.COMPLETED_TASKS_FOLDER.split("/").pop() && name !== import_constants.CANCELLED_TASKS_FOLDER.split("/").pop() && name !== import_constants.LEGACY_COMPLETED_TASKS_FOLDER.split("/").pop());
	  if (!boardNames.includes(import_constants.DEFAULT_BOARD_NAME))
	    boardNames.push(import_constants.DEFAULT_BOARD_NAME);
	  return boardNames;
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
	  const next = filtered.join("\n");
	  await app.vault.modify(indexFile, next);
	}
	function resolveActiveTaskBoard(app, taskFile) {
	  const frontmatter = app.metadataCache.getFileCache(taskFile)?.frontmatter;
	  const rawBoard = typeof frontmatter?.tablero === "string" ? frontmatter.tablero.trim().toLowerCase() : "";
	  if (rawBoard)
	    return rawBoard;
	  const relativePath = taskFile.path.startsWith(`${import_constants.TAREAS_FOLDER}/`) ? taskFile.path.slice(`${import_constants.TAREAS_FOLDER}/`.length) : "";
	  const boardFromPath = relativePath.split("/")[0]?.trim().toLowerCase() || "";
	  return normalizeBoardName(boardFromPath);
	}
	function normalizeBoardName(boardName) {
	  const normalized = boardName.trim().toLowerCase();
	  return normalized || import_constants.DEFAULT_BOARD_NAME;
	}
	function buildIndexContent(lines) {
	  return ["---", `tags: [${import_constants.INDEX_TAG}]`, "---", "", ...lines, ""].join("\n");
	}
	async function syncTerminalTaskIndexLinks(app, folderPath, indexPath, ensureIndex) {
	  const indexFile = await ensureIndex();
	  if (!indexFile)
	    return;
	  const links = app.vault.getMarkdownFiles().filter((file) => file.path.startsWith(`${folderPath}/`)).filter((file) => file.path !== indexPath).map((file) => `[[${file.basename}]]`).sort((a, b) => a.localeCompare(b));
	  const nextContent = buildIndexContent(links);
	  const currentContent = await app.vault.cachedRead(indexFile);
	  if (currentContent === nextContent)
	    return;
	  await app.vault.modify(indexFile, nextContent);
	}
	return taskIndexEngine;
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
	var import_taskIndexEngine = requireTaskIndexEngine();
	var import_guards = requireGuards();
	async function updateFrontmatter(app, file, updates) {
	  await app.fileManager.processFrontMatter(file, (fm) => {
	    for (const [key, value] of Object.entries(updates))
	      fm[key] = value;
	  });
	}
	async function renameTeamInTasks(app, oldName, newName, boardName) {
	  const files = app.vault.getMarkdownFiles().filter((file) => file.path.startsWith(`${import_constants.TAREAS_FOLDER}/`));
	  for (const file of files) {
	    const fm = (0, import_guards.toTaskFrontmatter)(app.metadataCache.getFileCache(file)?.frontmatter);
	    if (fm?.equipo !== oldName || (fm?.tablero || "").trim().toLowerCase() !== boardName.trim().toLowerCase())
	      continue;
	    await app.fileManager.processFrontMatter(file, (frontmatter) => {
	      frontmatter.equipo = newName;
	    });
	  }
	}
	function countTopLevelTeamTasks(app, teamName, boardName) {
	  const files = app.vault.getMarkdownFiles().filter((file) => file.path.startsWith(`${import_constants.TAREAS_FOLDER}/`));
	  let count = 0;
	  for (const file of files) {
	    const fm = (0, import_guards.toTaskFrontmatter)(app.metadataCache.getFileCache(file)?.frontmatter);
	    if (fm?.equipo === teamName && (fm?.tablero || "").trim().toLowerCase() === boardName.trim().toLowerCase() && !fm?.parent)
	      count++;
	  }
	  return count;
	}
	async function rebuildTaskChildLinks(app) {
	  const files = app.vault.getMarkdownFiles().filter((file) => file.path.startsWith(`${import_constants.TAREAS_FOLDER}/`)).filter((file) => file.basename !== import_constants.TASK_INDEX_BASENAME && file.basename !== import_constants.FINISHED_TASK_INDEX_BASENAME && file.basename !== import_constants.CANCELLED_TASK_INDEX_BASENAME);
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
	  if (file.basename === import_constants.TASK_INDEX_BASENAME || file.basename === import_constants.FINISHED_TASK_INDEX_BASENAME || file.basename === import_constants.CANCELLED_TASK_INDEX_BASENAME || (0, import_taskIndexEngine.isBoardTaskIndexPath)(file.path))
	    return import_constants.INDEX_TAG;
	  if (file.path.includes("/subTasks/"))
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
	  getBoardFolder: () => getBoardFolder,
	  getBoardSubtasksFolder: () => getBoardSubtasksFolder,
	  getTaskFiles: () => getTaskFiles,
	  getTasks: () => getTasks,
	  groupTopLevelTasks: () => groupTopLevelTasks,
	  isTaskInCancelledFolder: () => isTaskInCancelledFolder,
	  isTaskInCompletedFolder: () => isTaskInCompletedFolder,
	  isTaskInFinishedFolder: () => isTaskInFinishedFolder,
	  parseTaskDate: () => parseTaskDate,
	  resolveNewTaskOrder: () => resolveNewTaskOrder,
	  resolveTaskEndDate: () => resolveTaskEndDate,
	  resolveTaskPath: () => resolveTaskPath
	});
	taskEngine = __toCommonJS(taskEngine_exports);
	var import_constants = requireConstants();
	var import_taskIndexEngine = requireTaskIndexEngine();
	var import_guards = requireGuards();
	var import_status = requireStatus();
	function getTaskFiles(app) {
	  return app.vault.getMarkdownFiles().filter((file) => file.path.startsWith(`${import_constants.TAREAS_FOLDER}/`)).filter((file) => file.basename !== import_constants.TASK_INDEX_BASENAME && file.basename !== import_constants.FINISHED_TASK_INDEX_BASENAME && file.basename !== import_constants.CANCELLED_TASK_INDEX_BASENAME && !(0, import_taskIndexEngine.isBoardTaskIndexPath)(file.path));
	}
	function isTaskInFinishedFolder(path) {
	  return path.startsWith(`${import_constants.COMPLETED_TASKS_FOLDER}/`) || path.startsWith(`${import_constants.COMPLETED_SUBTASKS_FOLDER}/`) || path.startsWith(`${import_constants.LEGACY_COMPLETED_TASKS_FOLDER}/`);
	}
	function isTaskInCancelledFolder(path) {
	  return path.startsWith(`${import_constants.CANCELLED_TASKS_FOLDER}/`) || path.startsWith(`${import_constants.CANCELLED_SUBTASKS_FOLDER}/`);
	}
	function isTaskInCompletedFolder(path) {
	  return isTaskInFinishedFolder(path) || isTaskInCancelledFolder(path);
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
	      tablero: resolveTaskBoard(file.path, fm),
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
	    const groupName = task.equipo || "Sin grupo";
	    if (!groups[groupName])
	      groups[groupName] = [];
	    groups[groupName].push(task);
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
	    `tablero: "${data.tablero}"`,
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
	  const siblingOrders = getTaskFiles(app).map((file) => getTaskFrontmatter(app, file)).filter((fm) => Boolean(fm)).filter((fm) => {
	    if (fm.parent)
	      return false;
	    const boardName = normalizeBoardName(fm.tablero || "");
	    const groupName = (fm.equipo || "").trim();
	    return boardName === normalizeBoardName(data.tablero) && groupName === data.equipo;
	  }).map((fm) => Number(fm.order) || 0);
	  if (siblingOrders.length === 0)
	    return import_constants.ORDER_STEP;
	  return goesTop ? Math.min(...siblingOrders) - import_constants.ORDER_STEP : Math.max(...siblingOrders) + import_constants.ORDER_STEP;
	}
	function resolveTaskPath(app, taskName, boardName, parentTaskName = "") {
	  const folderPath = parentTaskName.trim() ? getBoardSubtasksFolder(boardName) : getBoardFolder(boardName);
	  const basePath = `${folderPath}/${taskName}.md`;
	  if (!app.vault.getAbstractFileByPath(basePath))
	    return basePath;
	  return `${folderPath}/${taskName} ${Date.now()}.md`;
	}
	function getBoardFolder(boardName) {
	  return `${import_constants.TAREAS_FOLDER}/${normalizeBoardName(boardName)}`;
	}
	function getBoardSubtasksFolder(boardName) {
	  return `${getBoardFolder(boardName)}/subTasks`;
	}
	function resolveTaskBoard(path, fm) {
	  const rawFromFrontmatter = (fm.tablero || "").trim().toLowerCase();
	  if (rawFromFrontmatter)
	    return rawFromFrontmatter;
	  const rootPrefix = `${import_constants.TAREAS_FOLDER}/`;
	  if (!path.startsWith(rootPrefix))
	    return import_constants.DEFAULT_BOARD_NAME;
	  const segments = path.slice(rootPrefix.length).split("/");
	  const candidate = segments[0]?.trim().toLowerCase() || "";
	  if (!candidate || candidate === "finished" || candidate === "cancelled" || candidate === "completadas")
	    return import_constants.DEFAULT_BOARD_NAME;
	  return candidate;
	}
	function normalizeBoardName(value) {
	  const normalized = value.trim().toLowerCase();
	  return normalized || import_constants.DEFAULT_BOARD_NAME;
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
	async function rebalanceGroupEndDates(app, boardName, groupName) {
	  const tasks = (0, import_taskEngine.getTasks)(app).filter((task) => !task.parent && task.tablero === boardName && task.equipo === groupName && !(0, import_taskEngine.isTaskInCompletedFolder)(task.file.path)).sort((a, b) => a.order - b.order);
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
	  constructor(app, plugin, defaultBoard, defaultParent, defaultGroup) {
	    super(app);
	    const resolvedBoard = defaultBoard || plugin.tableros[0]?.name || "";
	    const firstGroupForBoard = plugin.getEquiposForTablero(resolvedBoard)[0]?.name || "";
	    this.plugin = plugin;
	    this.data = {
	      tarea: "",
	      detalle: "",
	      estado: "Pendiente",
	      fechaFin: "",
	      tablero: resolvedBoard,
	      equipo: defaultGroup || firstGroupForBoard,
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
	    let groupDropdown = null;
	    const refreshGroupOptions = () => {
	      if (!groupDropdown)
	        return;
	      const selectEl = groupDropdown.selectEl;
	      while (selectEl.options.length > 0)
	        selectEl.remove(0);
	      groupDropdown.addOption("", "Sin grupo");
	      const groups = this.plugin.getEquiposForTablero(this.data.tablero);
	      for (const equipo of groups)
	        groupDropdown.addOption(equipo.name, equipo.name);
	      if (this.data.equipo && groups.some((group) => group.name === this.data.equipo)) {
	        groupDropdown.setValue(this.data.equipo);
	        return;
	      }
	      this.data.equipo = groups[0]?.name || "";
	      groupDropdown.setValue(this.data.equipo);
	    };
	    new obsidian.Setting(contentEl).setName("Tablero").addDropdown((dropdown) => {
	      for (const tablero of this.plugin.tableros)
	        dropdown.addOption(tablero.name, tablero.name);
	      dropdown.setValue(this.data.tablero);
	      dropdown.onChange((value) => {
	        this.data.tablero = value;
	        refreshGroupOptions();
	      });
	    });
	    new obsidian.Setting(contentEl).setName("Grupo").addDropdown((dropdown) => {
	      groupDropdown = dropdown;
	      refreshGroupOptions();
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
	    const targetFolder = this.data.parent.trim() ? (0, import_taskEngine.getBoardSubtasksFolder)(this.data.tablero) : (0, import_taskEngine.getBoardFolder)(this.data.tablero);
	    await this.ensureFolderPath(targetFolder);
	    const path = (0, import_taskEngine.resolveTaskPath)(this.app, sanitizedTaskName, this.data.tablero, this.data.parent);
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
	    await (0, import_scheduleEngine.rebalanceGroupEndDates)(this.app, this.data.tablero, this.data.equipo);
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
	      try {
	        await this.app.vault.createFolder(currentPath);
	      } catch {
	        const retry = this.app.vault.getAbstractFileByPath(currentPath);
	        if (retry instanceof obsidian.TFolder)
	          continue;
	        throw new Error(`No se pudo crear la carpeta "${currentPath}"`);
	      }
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
	  normalizePomodoroFromSettings: () => normalizePomodoroFromSettings,
	  normalizeTablerosFromSettings: () => normalizeTablerosFromSettings
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
	      name: name.trim(),
	      color: LEGACY_FALLBACK_COLORS[index % LEGACY_FALLBACK_COLORS.length],
	      tablero: import_constants.DEFAULT_BOARD_NAME
	    }));
	    return mergeWithDefaultEquipos(normalizedFromLegacy);
	  }
	  const normalized = equipos.filter(isEquipo).map((equipo) => ({
	    name: equipo.name.trim(),
	    color: equipo.color,
	    tablero: (equipo.tablero || import_constants.DEFAULT_BOARD_NAME).trim().toLowerCase()
	  })).filter((equipo) => !REMOVED_DEFAULT_TEAM_NAMES.has(equipo.name)).filter((equipo) => Boolean(equipo.name));
	  if (normalized.length === 0)
	    return [...import_constants.DEFAULT_EQUIPOS];
	  return mergeWithDefaultEquipos(normalized);
	}
	function normalizeTablerosFromSettings(rawData) {
	  let tableros = extractTableros(rawData);
	  if ((!tableros || tableros.length === 0) && shouldReuseEquiposAsBoards(rawData))
	    tableros = extractEquipos(rawData);
	  if (!tableros || tableros.length === 0)
	    return [...import_constants.DEFAULT_TABLEROS];
	  if (isStringArray(tableros)) {
	    const normalized2 = tableros.map((name, index) => ({
	      name: name.trim().toLowerCase(),
	      color: LEGACY_FALLBACK_COLORS[index % LEGACY_FALLBACK_COLORS.length]
	    })).filter((board) => Boolean(board.name));
	    return mergeWithDefaultTableros(normalized2);
	  }
	  const normalized = tableros.filter(isEquipo).map((board) => ({ name: board.name.trim().toLowerCase(), color: board.color })).filter((board) => Boolean(board.name));
	  return mergeWithDefaultTableros(normalized);
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
	function extractTableros(rawData) {
	  if (!(0, import_guards.isRecord)(rawData))
	    return void 0;
	  const tableros = rawData.tableros;
	  if (!Array.isArray(tableros))
	    return void 0;
	  return tableros;
	}
	function shouldReuseEquiposAsBoards(rawData) {
	  const equipos = extractEquipos(rawData);
	  if (!equipos || equipos.length === 0)
	    return false;
	  if (isStringArray(equipos))
	    return equipos.some((name) => name.trim().toLowerCase() === "default");
	  const namedEquipos = equipos.filter(isEquipo);
	  return namedEquipos.some((item) => item.name.trim().toLowerCase() === "default");
	}
	function isEquipo(value) {
	  if (!(0, import_guards.isRecord)(value))
	    return false;
	  return typeof value.name === "string" && typeof value.color === "string" && (typeof value.tablero === "undefined" || typeof value.tablero === "string");
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
	function mergeWithDefaultTableros(tableros) {
	  const defaultsByName = new Map(import_constants.DEFAULT_TABLEROS.map((board) => [board.name, board]));
	  const normalizedByName = new Map(tableros.map((board) => [board.name, board]));
	  const withDefaults = import_constants.DEFAULT_TABLEROS.map((board) => {
	    const savedBoard = normalizedByName.get(board.name);
	    return savedBoard ? { ...savedBoard } : { ...board };
	  });
	  const customBoards = tableros.filter((board) => !defaultsByName.has(board.name));
	  return [...withDefaults, ...customBoards];
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
	  moveTaskToCancelledFolder: () => moveTaskToCancelledFolder,
	  moveTaskToCompletedFolder: () => moveTaskToCompletedFolder
	});
	completionEngine = __toCommonJS(completionEngine_exports);
	var import_constants = requireConstants();
	var import_taskEngine = requireTaskEngine();
	var import_taskIndexEngine = requireTaskIndexEngine();
	var import_frontmatterEngine = requireFrontmatterEngine();
	var import_guards = requireGuards();
	async function moveTaskToCompletedFolder(app, file, isSubtask = false) {
	  const targetFolder = isSubtask ? import_constants.COMPLETED_SUBTASKS_FOLDER : import_constants.COMPLETED_TASKS_FOLDER;
	  await ensureFolder(app, targetFolder);
	  const nextPath = resolveUniquePath(app, `${targetFolder}/${file.name}`);
	  if (nextPath === file.path)
	    return;
	  await removeTaskFromAllIndexes(app, file);
	  await app.fileManager.renameFile(file, nextPath);
	  await (0, import_taskIndexEngine.appendTaskLinkToFinishedIndex)(app, file);
	  await (0, import_frontmatterEngine.syncTaskTypeTags)(app);
	}
	async function moveTaskToCancelledFolder(app, file, isSubtask = false) {
	  const targetFolder = isSubtask ? import_constants.CANCELLED_SUBTASKS_FOLDER : import_constants.CANCELLED_TASKS_FOLDER;
	  await ensureFolder(app, targetFolder);
	  const nextPath = resolveUniquePath(app, `${targetFolder}/${file.name}`);
	  if (nextPath === file.path)
	    return;
	  await removeTaskFromAllIndexes(app, file);
	  await app.fileManager.renameFile(file, nextPath);
	  await (0, import_taskIndexEngine.appendTaskLinkToCancelledIndex)(app, file);
	  await (0, import_frontmatterEngine.syncTaskTypeTags)(app);
	}
	async function moveTaskToActiveFolder(app, file, isSubtask = false) {
	  const targetBoard = resolveTaskBoardForFile(app, file);
	  const targetFolder = isSubtask ? (0, import_taskEngine.getBoardSubtasksFolder)(targetBoard) : (0, import_taskEngine.getBoardFolder)(targetBoard);
	  await ensureFolder(app, targetFolder);
	  const nextPath = resolveUniquePath(app, `${targetFolder}/${file.name}`);
	  if (nextPath === file.path)
	    return;
	  await removeTaskFromAllIndexes(app, file);
	  await app.fileManager.renameFile(file, nextPath);
	  await (0, import_taskIndexEngine.appendTaskLinkToIndex)(app, file);
	  await (0, import_frontmatterEngine.syncTaskTypeTags)(app);
	}
	async function removeTaskFromAllIndexes(app, file) {
	  await (0, import_taskIndexEngine.removeTaskLinkFromIndex)(app, file);
	  await (0, import_taskIndexEngine.removeTaskLinkFromFinishedIndex)(app, file);
	  await (0, import_taskIndexEngine.removeTaskLinkFromCancelledIndex)(app, file);
	}
	function resolveTaskBoardForFile(app, file) {
	  const rawFrontmatter = app.metadataCache.getFileCache(file)?.frontmatter;
	  const frontmatter = (0, import_guards.toTaskFrontmatter)(rawFrontmatter);
	  const rawBoard = (frontmatter?.tablero || "").trim().toLowerCase();
	  return rawBoard || import_constants.DEFAULT_BOARD_NAME;
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
	    try {
	      await app.vault.createFolder(currentPath);
	    } catch {
	      const retry = app.vault.getAbstractFileByPath(currentPath);
	      if (isFolder(retry))
	        continue;
	      throw new Error(`Cannot create folder "${currentPath}".`);
	    }
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
	  if (!folder) {
	    try {
	      await app.vault.createFolder(import_constants.TAREAS_FOLDER);
	    } catch {
	      const retry = app.vault.getAbstractFileByPath(import_constants.TAREAS_FOLDER);
	      if (!(retry instanceof import_obsidian.TFolder))
	        throw new Error(`No se pudo crear la carpeta "${import_constants.TAREAS_FOLDER}".`);
	    }
	  }
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
	  boardName;
	  view;
	  data;
	  constructor(app, plugin, eqObj, view, boardName) {
	    super(app);
	    this.plugin = plugin;
	    this.eqObj = eqObj;
	    this.boardName = boardName;
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
	      await (0, import_frontmatterEngine.renameTeamInTasks)(this.app, oldName, newName, this.boardName);
	    this.plugin.updateEquipo(oldName, this.boardName, { name: newName, color: this.data.color });
	    this.view.expandedGroups.delete(`${this.boardName}::${oldName}`);
	    this.view.expandedGroups.add(`${this.boardName}::${newName}`);
	    this.view.render();
	    this.close();
	  }
	  confirmDelete() {
	    if (this.isLockedSection()) {
	      new obsidian.Notice(`La secci\xF3n "${this.eqObj.name}" no se puede eliminar`);
	      return;
	    }
	    const taskCount = (0, import_frontmatterEngine.countTopLevelTeamTasks)(this.app, this.eqObj.name, this.boardName);
	    if (taskCount > 0) {
	      new obsidian.Notice(`La secci\xF3n "${this.eqObj.name}" tiene ${taskCount} tarea(s). Movalas a otra secci\xF3n antes de eliminar.`);
	      return;
	    }
	    this.plugin.removeEquipo(this.eqObj.name, this.boardName);
	    this.view.expandedGroups.delete(`${this.boardName}::${this.eqObj.name}`);
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

var NewBoardModal_1;
var hasRequiredNewBoardModal;

function requireNewBoardModal () {
	if (hasRequiredNewBoardModal) return NewBoardModal_1;
	hasRequiredNewBoardModal = 1;
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
	var NewBoardModal_exports = {};
	__export(NewBoardModal_exports, {
	  NewBoardModal: () => NewBoardModal
	});
	NewBoardModal_1 = __toCommonJS(NewBoardModal_exports);
	var obsidian = __toESM(require$$0);
	var import_constants = requireConstants();
	var import_colorPicker = requireColorPicker();
	class NewBoardModal extends obsidian.Modal {
	  plugin;
	  view;
	  data;
	  constructor(app, plugin, view) {
	    super(app);
	    this.plugin = plugin;
	    this.view = view;
	    this.data = { name: "", color: import_constants.PRESET_COLORS[1] };
	  }
	  onOpen() {
	    const { contentEl } = this;
	    contentEl.addClass("tareas-modal");
	    contentEl.createEl("h2", { text: "Nuevo Tablero" });
	    new obsidian.Setting(contentEl).setName("Nombre del tablero").addText((text) => {
	      text.setPlaceholder("Ej: personal, estudio, trabajo");
	      text.onChange((value) => this.data.name = value);
	      setTimeout(() => text.inputEl.focus(), 50);
	    });
	    const colorSetting = new obsidian.Setting(contentEl).setName("Color");
	    (0, import_colorPicker.createColorPicker)(colorSetting.controlEl, import_constants.PRESET_COLORS, this.data.color, (nextColor) => {
	      this.data.color = nextColor;
	    });
	    const footer = contentEl.createDiv({ cls: "tareas-modal-footer" });
	    const createButton = footer.createEl("button", { text: "Crear tablero", cls: "mod-cta" });
	    createButton.onclick = () => this.createBoard();
	    const cancelButton = footer.createEl("button", { text: "Cancelar" });
	    cancelButton.onclick = () => this.close();
	  }
	  onClose() {
	    this.contentEl.empty();
	  }
	  createBoard() {
	    const boardName = this.data.name.trim();
	    if (!boardName) {
	      new obsidian.Notice("El nombre es requerido");
	      return;
	    }
	    this.plugin.addTablero(boardName, this.data.color);
	    this.view.render();
	    new obsidian.Notice(`Tablero "${boardName}" creado`);
	    this.close();
	  }
	}
	return NewBoardModal_1;
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
	  boardName;
	  data;
	  constructor(app, plugin, view, boardName) {
	    super(app);
	    this.plugin = plugin;
	    this.view = view;
	    this.boardName = boardName;
	    this.data = { name: "", color: import_constants.PRESET_COLORS[2] };
	  }
	  onOpen() {
	    const { contentEl } = this;
	    contentEl.addClass("tareas-modal");
	    contentEl.createEl("h2", { text: "Nuevo Grupo" });
	    new obsidian.Setting(contentEl).setName("Nombre del grupo").addText((text) => {
	      text.setPlaceholder("Ej: Backend, Frontend, QA");
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
	    this.plugin.addEquipoInTablero(groupName, this.data.color, this.boardName);
	    this.view.render();
	    new obsidian.Notice(`Grupo "${groupName}" creado`);
	    this.close();
	  }
	}
	return NewGroupModal_1;
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

var ConfirmDeleteTaskModal_1;
var hasRequiredConfirmDeleteTaskModal;

function requireConfirmDeleteTaskModal () {
	if (hasRequiredConfirmDeleteTaskModal) return ConfirmDeleteTaskModal_1;
	hasRequiredConfirmDeleteTaskModal = 1;
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
	var ConfirmDeleteTaskModal_exports = {};
	__export(ConfirmDeleteTaskModal_exports, {
	  ConfirmDeleteTaskModal: () => ConfirmDeleteTaskModal
	});
	ConfirmDeleteTaskModal_1 = __toCommonJS(ConfirmDeleteTaskModal_exports);
	var obsidian = __toESM(require$$0);
	class ConfirmDeleteTaskModal extends obsidian.Modal {
	  options;
	  constructor(app, options) {
	    super(app);
	    this.options = options;
	  }
	  onOpen() {
	    const { contentEl } = this;
	    contentEl.addClass("tareas-modal");
	    contentEl.createEl("h2", { text: this.options.title });
	    contentEl.createEl("p", { text: this.options.message });
	    const footer = contentEl.createDiv({ cls: "tareas-modal-footer" });
	    const cancelButton = footer.createEl("button", { text: "Cancelar" });
	    cancelButton.onclick = () => this.close();
	    const confirmButton = footer.createEl("button", {
	      text: this.options.confirmText ?? "Eliminar",
	      cls: "mod-warning"
	    });
	    confirmButton.onclick = async () => {
	      confirmButton.disabled = true;
	      cancelButton.disabled = true;
	      try {
	        await this.options.onConfirm();
	        this.close();
	      } finally {
	        confirmButton.disabled = false;
	        cancelButton.disabled = false;
	      }
	    };
	  }
	  onClose() {
	    this.contentEl.empty();
	  }
	}
	return ConfirmDeleteTaskModal_1;
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
	    id: "debug-1-1",
	    title: "\u{1F6E0} Debug - 1/1",
	    workLabel: "Trabajo: 1 min",
	    shortBreakLabel: "Descanso corto: 1 min",
	    cyclesLabel: "Ciclos: 4",
	    longBreakLabel: "Descanso largo: 1 min",
	    idealFor: "Ideal para: probar r\xE1pido el flujo del temporizador y transiciones de fase.",
	    durations: { workMinutes: 1, shortBreakMinutes: 1, longBreakMinutes: 1 }
	  },
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
	          task.tablero ? `Tablero: ${task.tablero}` : null,
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
	var import_EditSectionModal = requireEditSectionModal();
	var import_NewBoardModal = requireNewBoardModal();
	var import_NewGroupModal = requireNewGroupModal();
	var import_NewTaskModal = requireNewTaskModal();
	var import_EditTaskFileModal = requireEditTaskFileModal();
	var import_AddTaskCommentModal = requireAddTaskCommentModal();
	var import_ConfirmDeleteTaskModal = requireConfirmDeleteTaskModal();
	var import_PomodoroPresetModal = requirePomodoroPresetModal();
	var import_SelectPomodoroTaskModal = requireSelectPomodoroTaskModal();
	var import_dropdown = requireDropdown();
	var import_debounce = requireDebounce();
	class TareasView extends obsidian.ItemView {
	  static COMPLETED_TAB_ID = "__completed__";
	  static CANCELLED_TAB_ID = "__cancelled__";
	  static POMODORO_TAB_ID = "__pomodoro__";
	  plugin;
	  expandedGroups;
	  expandedTasks;
	  expandedCardSubtasks;
	  debouncedRender;
	  dragPath = null;
	  dragDepth = null;
	  dragParent = null;
	  dragInsertPosition = null;
	  droppedTaskAnimationPath = null;
	  lastRenderedTab = null;
	  activeTab;
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
	    this.expandedGroups = new Set(plugin.equipos.map((equipo) => `${equipo.tablero || "default"}::${equipo.name}`));
	    this.expandedTasks = /* @__PURE__ */ new Set();
	    this.expandedCardSubtasks = /* @__PURE__ */ new Set();
	    this.activeTab = plugin.tableros[0]?.name || "default";
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
	    this.ensureValidActiveTab();
	    const shouldAnimateTabTransition = this.lastRenderedTab !== null && this.lastRenderedTab !== this.activeTab;
	    this.lastRenderedTab = this.activeTab;
	    const root = this.getRootEl();
	    root.empty();
	    this.resetPomodoroDomRefs();
	    this.renderHeader(root);
	    this.renderTabs(root);
	    const content = root.createDiv({ cls: "tareas-tab-content" });
	    if (shouldAnimateTabTransition)
	      content.addClass("tareas-tab-content-animate");
	    if (this.activeTab === TareasView.POMODORO_TAB_ID) {
	      await this.renderPomodoroPanel(content);
	      return;
	    }
	    const allTasks = (0, import_taskEngine.getTasks)(this.app);
	    const tabTasks = this.activeTab === TareasView.COMPLETED_TAB_ID ? allTasks.filter((task) => (0, import_taskEngine.isTaskInFinishedFolder)(task.file.path)) : this.activeTab === TareasView.CANCELLED_TAB_ID ? allTasks.filter((task) => (0, import_taskEngine.isTaskInCancelledFolder)(task.file.path)) : allTasks.filter((task) => !(0, import_taskEngine.isTaskInCompletedFolder)(task.file.path)).filter((task) => task.file.basename.toLowerCase() !== import_constants.POMODORO_LOG_BASENAME.toLowerCase()).filter((task) => task.tablero === this.activeTab);
	    if (this.activeTab === TareasView.COMPLETED_TAB_ID || this.activeTab === TareasView.CANCELLED_TAB_ID) {
	      this.renderCompletedTable(content, tabTasks);
	      return;
	    }
	    const taskPreviewMap = await this.buildTaskPreviewMap(tabTasks);
	    const board = content.createDiv({ cls: "tareas-board" });
	    const boardGroups = this.plugin.getEquiposForTablero(this.activeTab);
	    const groups = (0, import_taskEngine.groupTopLevelTasks)(tabTasks, boardGroups);
	    for (const group of boardGroups)
	      this.renderGroup(board, group, groups[group.name] || [], tabTasks, taskPreviewMap);
	    if (groups["Sin grupo"]?.length)
	      this.renderGroup(board, { name: "Sin grupo", color: "var(--text-faint)" }, groups["Sin grupo"], tabTasks, taskPreviewMap);
	    const addGroup = content.createDiv({ cls: "tareas-new-group" });
	    const addGroupLink = addGroup.createEl("span", { text: "+ Nuevo grupo", cls: "tareas-add-link" });
	    addGroupLink.onclick = () => new import_NewGroupModal.NewGroupModal(this.app, this.plugin, this, this.activeTab).open();
	  }
	  renderCompletedTable(root, tasks) {
	    const wrap = root.createDiv({ cls: "tareas-table-wrap" });
	    const table = wrap.createEl("table", { cls: "tareas-table" });
	    const columns = ["", "", "Tarea", "Estado", "Grupo", "Prioridad", "Dedicado", "Estimaci\xF3n", "Inicio", "Fin", "%", "Acciones"];
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
	    for (const board of this.plugin.tableros) {
	      const boardBtn = tabs.createEl("button", {
	        text: board.name,
	        cls: `tareas-tab-btn${this.activeTab === board.name ? " is-active" : ""}`
	      });
	      boardBtn.onclick = () => {
	        this.activeTab = board.name;
	        this.render();
	      };
	    }
	    const completedBtn = tabs.createEl("button", {
	      text: "Completadas",
	      cls: `tareas-tab-btn${this.activeTab === TareasView.COMPLETED_TAB_ID ? " is-active" : ""}`
	    });
	    completedBtn.onclick = () => {
	      this.activeTab = TareasView.COMPLETED_TAB_ID;
	      this.render();
	    };
	    const cancelledBtn = tabs.createEl("button", {
	      text: "Canceladas",
	      cls: `tareas-tab-btn${this.activeTab === TareasView.CANCELLED_TAB_ID ? " is-active" : ""}`
	    });
	    cancelledBtn.onclick = () => {
	      this.activeTab = TareasView.CANCELLED_TAB_ID;
	      this.render();
	    };
	    const pomodoroBtn = tabs.createEl("button", {
	      text: "Pomodoro",
	      cls: `tareas-tab-btn${this.activeTab === TareasView.POMODORO_TAB_ID ? " is-active" : ""}`
	    });
	    pomodoroBtn.onclick = () => {
	      this.activeTab = TareasView.POMODORO_TAB_ID;
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
	    if (this.activeTab === TareasView.POMODORO_TAB_ID)
	      this.updatePomodoroDom(runtimeState, Date.now());
	  }
	  getPomodoroRuntimeState(notifyCompletion) {
	    const now = Date.now();
	    const advanced = (0, import_pomodoroEngine.advancePomodoroState)(this.plugin.pomodoro, now);
	    if (advanced.transitioned) {
	      this.plugin.setPomodoroState(advanced.state);
	      if (notifyCompletion)
	        this.notifyPomodoroTransitions(advanced.completedPhases, advanced.state);
	      if (this.activeTab === TareasView.POMODORO_TAB_ID)
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
	    if (this.activeTab === TareasView.POMODORO_TAB_ID)
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
	  ensureValidActiveTab() {
	    const boardNames = this.plugin.tableros.map((board) => board.name);
	    const fixedTabs = /* @__PURE__ */ new Set([
	      TareasView.COMPLETED_TAB_ID,
	      TareasView.CANCELLED_TAB_ID,
	      TareasView.POMODORO_TAB_ID
	    ]);
	    if (fixedTabs.has(this.activeTab))
	      return;
	    if (boardNames.includes(this.activeTab))
	      return;
	    this.activeTab = boardNames[0] || "default";
	  }
	  getGroupExpansionKey(groupName) {
	    return `${this.activeTab}::${groupName}`;
	  }
	  isArchivedTab() {
	    return this.activeTab === TareasView.COMPLETED_TAB_ID || this.activeTab === TareasView.CANCELLED_TAB_ID;
	  }
	  isPomodoroTab() {
	    return this.activeTab === TareasView.POMODORO_TAB_ID;
	  }
	  renderHeader(root) {
	    const header = root.createDiv({ cls: "tareas-header" });
	    const titleWrap = header.createDiv({ cls: "tareas-title-wrap" });
	    titleWrap.createEl("span", { text: "\u2630", cls: "tareas-icon" });
	    titleWrap.createEl("h1", { text: " Tareas" });
	    const actions = header.createDiv({ cls: "tareas-header-actions" });
	    actions.createEl("span", { text: "\u25A6 Tablero", cls: "tareas-view-toggle" });
	    const newButton = actions.createEl("button", { cls: "tareas-btn-new" });
	    newButton.createEl("span", { text: "Nuevo tablero" });
	    newButton.onclick = () => new import_NewBoardModal.NewBoardModal(this.app, this.plugin, this).open();
	    const deleteButton = actions.createEl("button", { cls: "tareas-btn-delete-board" });
	    deleteButton.createEl("span", { text: "Eliminar tablero" });
	    deleteButton.disabled = !this.plugin.canRemoveTablero(this.activeTab);
	    deleteButton.onclick = () => this.openDeleteBoardConfirm();
	  }
	  openDeleteBoardConfirm() {
	    if (!this.plugin.canRemoveTablero(this.activeTab)) {
	      new obsidian.Notice(`El tablero "${this.activeTab}" no se puede eliminar.`);
	      return;
	    }
	    const boardName = this.activeTab;
	    const boardTasks = (0, import_taskEngine.getTasks)(this.app).filter((task) => task.tablero === boardName);
	    const topLevelCount = boardTasks.filter((task) => !task.parent).length;
	    const subtaskCount = boardTasks.length - topLevelCount;
	    const taskSummary = subtaskCount > 0 ? `${topLevelCount} tarea(s) y ${subtaskCount} subtarea(s)` : `${topLevelCount} tarea(s)`;
	    new import_ConfirmDeleteTaskModal.ConfirmDeleteTaskModal(this.app, {
	      title: "Eliminar tablero",
	      message: `\xBFSeguro que quer\xE9s eliminar el tablero "${boardName}"? Se borrar\xE1n ${taskSummary}, sus archivos .md, grupos y carpetas asociadas.`,
	      confirmText: "Aceptar",
	      onConfirm: async () => {
	        const removed = await this.plugin.removeTablero(boardName);
	        if (!removed) {
	          new obsidian.Notice(`No se pudo eliminar el tablero "${boardName}".`);
	          return;
	        }
	        this.activeTab = this.plugin.tableros[0]?.name || import_constants.DEFAULT_BOARD_NAME;
	        await this.render();
	        new obsidian.Notice(`Tablero "${boardName}" eliminado.`);
	      }
	    }).open();
	  }
	  renderGroup(root, group, tasks, allTasks, taskPreviewMap) {
	    const groupName = group.name;
	    const expansionKey = this.getGroupExpansionKey(groupName);
	    const isManaged = this.plugin.getEquiposForTablero(this.activeTab).some((item) => item.name === groupName);
	    const expanded = this.expandedGroups.has(expansionKey);
	    const column = root.createDiv({ cls: "tareas-group" });
	    const header = column.createDiv({ cls: "tareas-group-header" });
	    header.createEl("span", { text: expanded ? "\u25BC " : "\u25B6 ", cls: "tareas-toggle" });
	    const badge = header.createEl("span", { text: groupName, cls: "tareas-badge" });
	    badge.style.background = group.color;
	    header.createEl("span", { text: `  ${tasks.length}`, cls: "tareas-count" });
	    if (isManaged) {
	      const editButton = header.createEl("button", { text: "\u270E", cls: "tareas-group-edit-btn" });
	      editButton.onclick = (event) => {
	        event.stopPropagation();
	        new import_EditSectionModal.EditSectionModal(this.app, this.plugin, group, this, this.activeTab).open();
	      };
	    }
	    header.onclick = () => {
	      if (expanded)
	        this.expandedGroups.delete(expansionKey);
	      else
	        this.expandedGroups.add(expansionKey);
	      this.render();
	    };
	    if (!expanded)
	      return;
	    tasks.sort((a, b) => a.order - b.order);
	    const cards = column.createDiv({ cls: "tareas-card-list" });
	    cards.dataset.group = groupName;
	    cards.dataset.board = this.activeTab;
	    cards.dataset.hasTasks = tasks.length > 0 ? "true" : "false";
	    this.attachGroupCardListDropHandlers(cards, groupName, allTasks);
	    for (const task of tasks)
	      this.renderTaskCard(cards, task, allTasks, taskPreviewMap.get(task.file.path) || "");
	    const addCard = cards.createDiv({ cls: "tareas-task-card tareas-task-card-add" });
	    const link = addCard.createEl("span", { text: "+ Nueva tarea", cls: "tareas-add-link" });
	    link.onclick = () => new import_NewTaskModal.NewTaskModal(this.app, this.plugin, this.activeTab, "", groupName).open();
	  }
	  renderTaskCard(container, task, allTasks, taskPreview) {
	    const subtasks = allTasks.filter((item) => item.parent === task.file.basename).sort((a, b) => a.order - b.order);
	    const hasSubtasks = subtasks.length > 0;
	    const subtasksExpanded = this.expandedCardSubtasks.has(task.file.path);
	    const card = container.createDiv({ cls: "tareas-task-card" });
	    card.dataset.path = task.file.path;
	    if (this.droppedTaskAnimationPath === task.file.path) {
	      card.addClass("tareas-task-card-drop-animate");
	      this.droppedTaskAnimationPath = null;
	    }
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
	      new import_NewTaskModal.NewTaskModal(this.app, this.plugin, task.tablero, task.file.basename, task.equipo).open();
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
	    if (!this.isArchivedTab() && !this.isPomodoroTab()) {
	      const addSubRow = tbody.createEl("tr", { cls: "tareas-add-row" });
	      addSubRow.createEl("td");
	      addSubRow.createEl("td");
	      const addSubCell = addSubRow.createEl("td", { attr: { colspan: "10" } });
	      addSubCell.style.paddingLeft = `${(depth + 1) * 24 + 8}px`;
	      const addSubtask = addSubCell.createEl("span", { text: "+ Subtarea", cls: "tareas-add-link" });
	      addSubtask.onclick = (event) => {
	        event.stopPropagation();
	        new import_NewTaskModal.NewTaskModal(this.app, this.plugin, task.tablero, task.file.basename, task.equipo).open();
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
	    const row = card.createDiv({ cls: "tareas-card-progress-row" });
	    const band = row.createDiv({ cls: "tareas-card-progress-band" });
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
	    const pomodoroButton = row.createEl("button", { cls: "tareas-card-pomodoro-btn" });
	    const isPomodoroRunning = this.plugin.pomodoro.runState === "running";
	    pomodoroButton.disabled = isPomodoroRunning;
	    pomodoroButton.setAttr("aria-label", "Abrir Pomodoro con esta tarea");
	    pomodoroButton.setAttr("title", isPomodoroRunning ? "No se puede vincular una tarea mientras el contador est\xE1 corriendo" : "Abrir Pomodoro con esta tarea");
	    obsidian.setIcon(pomodoroButton, "clock-3");
	    pomodoroButton.onclick = (event) => {
	      event.stopPropagation();
	      this.openPomodoroWithTask(task);
	    };
	  }
	  openPomodoroWithTask(task) {
	    if (this.plugin.pomodoro.runState === "running") {
	      new obsidian.Notice("No se puede cambiar la tarea mientras el contador est\xE1 corriendo.");
	      return;
	    }
	    this.setPomodoroSelectedTaskPath(task.file.path);
	    this.activeTab = TareasView.POMODORO_TAB_ID;
	    void this.render();
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
	    if (this.isArchivedTab()) {
	      this.renderArchivedActions(cell, task);
	      return;
	    }
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
	  renderArchivedActions(container, task) {
	    const actions = container.createDiv({ cls: "tareas-status-actions" });
	    const recoverButton = actions.createEl("button", {
	      text: "Recuperar",
	      cls: "tareas-status-action-btn"
	    });
	    recoverButton.onclick = async (event) => {
	      event.stopPropagation();
	      await this.recoverArchivedTask(task);
	    };
	    const deleteButton = actions.createEl("button", {
	      text: "Eliminar",
	      cls: "tareas-status-action-btn is-dismiss"
	    });
	    deleteButton.onclick = (event) => {
	      event.stopPropagation();
	      this.openDeleteTaskConfirm(task);
	    };
	  }
	  async recoverArchivedTask(task) {
	    await this.applyStateTransition(task, "Pendiente");
	    await this.render();
	  }
	  openDeleteTaskConfirm(task) {
	    const family = this.getTaskFamilyPostOrder(task);
	    const fileCount = family.length;
	    const taskLabel = fileCount > 1 ? `"${task.tarea}" y ${fileCount - 1} subtarea(s)` : `"${task.tarea}"`;
	    new import_ConfirmDeleteTaskModal.ConfirmDeleteTaskModal(this.app, {
	      title: "Eliminar tarea definitivamente",
	      message: `\xBFSeguro que quer\xE9s eliminar ${taskLabel}? Esta acci\xF3n borra los archivos .md y no se puede deshacer.`,
	      confirmText: "Aceptar",
	      onConfirm: async () => {
	        await this.deleteTaskFamily(task, family);
	      }
	    }).open();
	  }
	  getTaskFamilyPostOrder(task) {
	    const allTasks = (0, import_taskEngine.getTasks)(this.app);
	    const byParent = /* @__PURE__ */ new Map();
	    for (const current of allTasks) {
	      if (!current.parent)
	        continue;
	      const siblings = byParent.get(current.parent) ?? [];
	      siblings.push(current);
	      byParent.set(current.parent, siblings);
	    }
	    const visitedPaths = /* @__PURE__ */ new Set();
	    const ordered = [];
	    const visit = (currentTask) => {
	      if (visitedPaths.has(currentTask.file.path))
	        return;
	      visitedPaths.add(currentTask.file.path);
	      const children = byParent.get(currentTask.file.basename) ?? [];
	      for (const child of children)
	        visit(child);
	      ordered.push(currentTask);
	    };
	    visit(task);
	    return ordered;
	  }
	  async deleteTaskFamily(task, family) {
	    const selectedTaskPath = this.plugin.pomodoro.selectedTaskPath;
	    for (const member of family) {
	      const abstractFile = this.app.vault.getAbstractFileByPath(member.file.path);
	      if (!(abstractFile instanceof obsidian.TFile))
	        continue;
	      await this.app.vault.delete(abstractFile, true);
	    }
	    if (selectedTaskPath && family.some((member) => member.file.path === selectedTaskPath))
	      this.setPomodoroSelectedTaskPath(null);
	    await this.render();
	    new obsidian.Notice(`Se elimin\xF3 "${task.tarea}" de forma definitiva.`);
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
	    const boardGroups = this.plugin.getEquiposForTablero(task.tablero);
	    const teamConfig = boardGroups.find((item) => item.name === task.equipo);
	    const badge = container.createEl("span", {
	      text: task.equipo || "Sin grupo",
	      cls: "tareas-equipo-badge"
	    });
	    if (teamConfig)
	      badge.style.background = teamConfig.color;
	    badge.onclick = (event) => {
	      event.stopPropagation();
	      const options = boardGroups.map((equipo) => equipo.name);
	      (0, import_dropdown.showDropdown)(badge, options, task.equipo, async (nextTeam) => {
	        const previousTeam = task.equipo;
	        await this.updateTask(task, { equipo: nextTeam });
	        const subtasks = (0, import_taskEngine.getTasks)(this.app).filter((item) => item.parent === task.file.basename);
	        for (const subtask of subtasks)
	          await this.updateTask(subtask, { equipo: nextTeam });
	        await this.rebalanceBoardSchedule(task.tablero, previousTeam);
	        await this.rebalanceBoardSchedule(task.tablero, nextTeam);
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
	        await this.rebalanceBoardSchedule(task.tablero, task.equipo);
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
	      this.dragInsertPosition = null;
	      card.addClass("tareas-task-card-dragging");
	      card.addClass("tareas-task-card-drag-preview");
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
	      const insertPosition = this.resolveCardInsertPosition(event, card);
	      this.dragInsertPosition = insertPosition;
	      this.clearCardDropMarkers();
	      card.addClass(insertPosition === "before" ? "tareas-task-card-drag-over-top" : "tareas-task-card-drag-over-bottom");
	    });
	    card.addEventListener("drop", async (event) => {
	      if (!this.canDropOnRow(task, 0))
	        return;
	      event.preventDefault();
	      event.stopPropagation();
	      const insertPosition = this.dragInsertPosition ?? this.resolveCardInsertPosition(event, card);
	      card.removeClass("tareas-task-card-drag-over-top");
	      card.removeClass("tareas-task-card-drag-over-bottom");
	      if (!this.dragPath)
	        return;
	      const dragged = allTasks.find((item) => item.file.path === this.dragPath);
	      if (!dragged)
	        return;
	      this.droppedTaskAnimationPath = this.dragPath;
	      if (!dragged.parent && dragged.tablero === task.tablero && dragged.equipo !== task.equipo)
	        await this.moveTaskToGroup(this.dragPath, task.equipo, allTasks, task.file.path, insertPosition);
	      else
	        await this.reorderTask(this.dragPath, task.file.path, allTasks, insertPosition);
	      this.resetCardDragState(container, card);
	    });
	  }
	  attachGroupCardListDropHandlers(container, groupName, allTasks) {
	    container.addEventListener("dragover", (event) => {
	      const dragPath = this.dragPath;
	      if (!dragPath)
	        return;
	      const dragged = allTasks.find((item) => item.file.path === dragPath);
	      if (!dragged || dragged.parent)
	        return;
	      if (dragged.tablero !== this.activeTab || dragged.equipo === groupName)
	        return;
	      event.preventDefault();
	      event.stopPropagation();
	      if (event.dataTransfer)
	        event.dataTransfer.dropEffect = "move";
	      container.addClass("tareas-card-list-drop-target");
	    });
	    container.addEventListener("dragleave", (event) => {
	      if (event.relatedTarget instanceof Node && container.contains(event.relatedTarget))
	        return;
	      container.removeClass("tareas-card-list-drop-target");
	    });
	    container.addEventListener("drop", async (event) => {
	      const dragPath = this.dragPath;
	      if (!dragPath)
	        return;
	      const markerCard = container.querySelector(".tareas-task-card-drag-over-top, .tareas-task-card-drag-over-bottom");
	      const markerTargetPath = markerCard instanceof HTMLElement ? markerCard.dataset.path ?? null : null;
	      const markerInsertPosition = markerCard instanceof HTMLElement ? markerCard.classList.contains("tareas-task-card-drag-over-top") ? "before" : "after" : null;
	      const targetCard = event.target?.closest(".tareas-task-card");
	      if (targetCard && !targetCard.classList.contains("tareas-task-card-add"))
	        return;
	      const dragged = allTasks.find((item) => item.file.path === dragPath);
	      if (!dragged || dragged.parent)
	        return;
	      if (dragged.tablero !== this.activeTab)
	        return;
	      event.preventDefault();
	      event.stopPropagation();
	      container.removeClass("tareas-card-list-drop-target");
	      this.droppedTaskAnimationPath = dragPath;
	      if (markerTargetPath && markerInsertPosition) {
	        if (dragged.equipo === groupName)
	          await this.reorderTask(dragPath, markerTargetPath, allTasks, markerInsertPosition);
	        else
	          await this.moveTaskToGroup(dragPath, groupName, allTasks, markerTargetPath, markerInsertPosition);
	      } else if (dragged.equipo !== groupName) {
	        await this.moveTaskToGroup(dragPath, groupName, allTasks);
	      }
	      this.dragPath = null;
	      this.dragDepth = null;
	      this.dragParent = null;
	      this.dragInsertPosition = null;
	      this.clearCardDropMarkers();
	    });
	  }
	  async reorderTask(draggedPath, targetPath, allTasks, insertPosition = null) {
	    const dragged = allTasks.find((task) => task.file.path === draggedPath);
	    const target = allTasks.find((task) => task.file.path === targetPath);
	    if (!dragged || !target)
	      return;
	    const siblings = allTasks.filter((task) => !task.parent && task.tablero === dragged.tablero && task.equipo === dragged.equipo).sort((a, b) => a.order - b.order);
	    const fromIndex = siblings.findIndex((item) => item.file.path === draggedPath);
	    const toIndex = siblings.findIndex((item) => item.file.path === targetPath);
	    let nextIndex = toIndex;
	    if (insertPosition) {
	      nextIndex = toIndex + (insertPosition === "after" ? 1 : 0);
	      if (fromIndex < nextIndex)
	        nextIndex -= 1;
	    }
	    const nextOrder = (0, import_orderEngine.reorderList)(siblings, fromIndex, nextIndex);
	    await (0, import_orderEngine.persistTaskOrder)(nextOrder, async (task, order) => this.updateTask(task, { order }));
	    await this.rebalanceBoardSchedule(dragged.tablero, dragged.equipo);
	    await this.render();
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
	  async moveTaskToGroup(draggedPath, targetGroup, allTasks, targetPath = null, insertPosition = "after") {
	    const dragged = allTasks.find((task) => task.file.path === draggedPath);
	    if (!dragged || dragged.parent)
	      return;
	    const previousGroup = dragged.equipo;
	    await this.updateTask(dragged, { equipo: targetGroup });
	    const subtasks = allTasks.filter((task) => task.parent === dragged.file.basename);
	    for (const subtask of subtasks)
	      await this.updateTask(subtask, { equipo: targetGroup });
	    if (!targetPath) {
	      const nextOrder = this.resolveNextOrderForGroup(allTasks, dragged.tablero, targetGroup, draggedPath);
	      await this.updateTask(dragged, { order: nextOrder });
	    } else {
	      const siblings = allTasks.filter((task) => !task.parent && task.tablero === dragged.tablero && task.equipo === targetGroup && task.file.path !== draggedPath).sort((a, b) => a.order - b.order);
	      const targetIndex = siblings.findIndex((item) => item.file.path === targetPath);
	      if (targetIndex < 0) {
	        const nextOrder = this.resolveNextOrderForGroup(allTasks, dragged.tablero, targetGroup, draggedPath);
	        await this.updateTask(dragged, { order: nextOrder });
	      } else {
	        const insertIndex = targetIndex + (insertPosition === "after" ? 1 : 0);
	        const nextOrder = [...siblings];
	        nextOrder.splice(insertIndex, 0, dragged);
	        await (0, import_orderEngine.persistTaskOrder)(nextOrder, async (task, order) => this.updateTask(task, { order }));
	      }
	    }
	    await this.rebalanceBoardSchedule(dragged.tablero, previousGroup);
	    await this.rebalanceBoardSchedule(dragged.tablero, targetGroup);
	    await this.render();
	  }
	  resolveCardInsertPosition(event, card) {
	    const bounds = card.getBoundingClientRect();
	    const midpoint = bounds.top + bounds.height / 2;
	    return event.clientY < midpoint ? "before" : "after";
	  }
	  clearCardDropMarkers() {
	    const root = this.getRootEl();
	    root.querySelectorAll(".tareas-task-card-drag-over").forEach((item) => item.classList.remove("tareas-task-card-drag-over"));
	    root.querySelectorAll(".tareas-task-card-drag-over-top").forEach((item) => item.classList.remove("tareas-task-card-drag-over-top"));
	    root.querySelectorAll(".tareas-task-card-drag-over-bottom").forEach((item) => item.classList.remove("tareas-task-card-drag-over-bottom"));
	  }
	  resolveNextOrderForGroup(allTasks, boardName, groupName, excludePath) {
	    const siblingOrders = allTasks.filter((task) => !task.parent && task.tablero === boardName && task.equipo === groupName && task.file.path !== excludePath).map((task) => Number.isFinite(task.order) ? task.order : 0);
	    if (siblingOrders.length === 0)
	      return import_constants.ORDER_STEP;
	    return Math.max(...siblingOrders) + import_constants.ORDER_STEP;
	  }
	  async updateTask(task, updates) {
	    await (0, import_frontmatterEngine.updateFrontmatter)(this.app, task.file, updates);
	  }
	  async applyStateTransition(task, nextStatus, explicitUpdates, options) {
	    const updates = explicitUpdates ?? this.buildStateChangeUpdates(task, nextStatus);
	    await this.updateTask(task, updates);
	    const shouldMoveFile = options?.moveFile ?? true;
	    const shouldSyncSubtasks = options?.syncSubtasksWithParent ?? true;
	    const isInArchivedFolder = (0, import_taskEngine.isTaskInCompletedFolder)(task.file.path);
	    if (shouldMoveFile && nextStatus === "Finalizada")
	      await (0, import_completionEngine.moveTaskToCompletedFolder)(this.app, task.file, Boolean(task.parent));
	    if (shouldMoveFile && nextStatus === "Cancelada")
	      await (0, import_completionEngine.moveTaskToCancelledFolder)(this.app, task.file, Boolean(task.parent));
	    if (shouldMoveFile && nextStatus !== "Finalizada" && nextStatus !== "Cancelada" && isInArchivedFolder)
	      await (0, import_completionEngine.moveTaskToActiveFolder)(this.app, task.file, Boolean(task.parent));
	    if (shouldMoveFile && shouldSyncSubtasks && !task.parent) {
	      if (nextStatus === "En progreso")
	        await this.updateSubtasksStatusForParent(task.file.basename, "En progreso");
	      if (nextStatus === "Finalizada")
	        await this.moveSubtasksForParent(task.file.basename, "Finalizada");
	      if (nextStatus === "Cancelada")
	        await this.moveSubtasksForParent(task.file.basename, "Cancelada");
	      if (nextStatus !== "Finalizada" && nextStatus !== "Cancelada" && isInArchivedFolder)
	        await this.moveSubtasksForParent(task.file.basename, null);
	    }
	    if (nextStatus === "Finalizada" || nextStatus === "Cancelada" || isInArchivedFolder)
	      await this.rebalanceBoardSchedule(task.tablero, task.equipo);
	  }
	  async moveSubtasksForParent(parentTaskName, nextTerminalStatus) {
	    const subtasks = (0, import_taskEngine.getTasks)(this.app).filter((item) => item.parent === parentTaskName);
	    for (const subtask of subtasks) {
	      if (nextTerminalStatus) {
	        if (subtask.estado !== nextTerminalStatus)
	          await this.updateTask(subtask, { estado: nextTerminalStatus });
	        if (nextTerminalStatus === "Finalizada")
	          await (0, import_completionEngine.moveTaskToCompletedFolder)(this.app, subtask.file, true);
	        else
	          await (0, import_completionEngine.moveTaskToCancelledFolder)(this.app, subtask.file, true);
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
	  async rebalanceBoardSchedule(boardName, groupName) {
	    if (!boardName || !groupName)
	      return;
	    await (0, import_scheduleEngine.rebalanceGroupEndDates)(this.app, boardName, groupName);
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
	    this.dragInsertPosition = null;
	    card.removeClass("tareas-task-card-dragging");
	    card.removeClass("tareas-task-card-drag-preview");
	    this.clearCardDropMarkers();
	    this.getRootEl().querySelectorAll(".tareas-card-list-drop-target").forEach((item) => item.classList.remove("tareas-card-list-drop-target"));
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
	var import_taskEngine = requireTaskEngine();
	var import_taskIndexEngine = requireTaskIndexEngine();
	var import_NewTaskModal = requireNewTaskModal();
	var import_settings = requireSettings();
	var import_TareasView = requireTareasView();
	class TareasPlugin extends obsidian.Plugin {
	  tableros = [...import_constants.DEFAULT_TABLEROS];
	  equipos = [...import_constants.DEFAULT_EQUIPOS];
	  pomodoro = (0, import_pomodoroEngine.createDefaultPomodoroState)();
	  async onload() {
	    await this.loadSettings();
	    await this.ensureDefaultBoardInSettings();
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
	    await this.ensureBoardWorkspace(import_constants.DEFAULT_BOARD_NAME);
	    await (0, import_taskIndexEngine.syncAllTaskIndexes)(this.app);
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
	    this.tableros = (0, import_settings.normalizeTablerosFromSettings)(rawData);
	    this.equipos = (0, import_settings.normalizeEquiposFromSettings)(rawData);
	    this.pomodoro = (0, import_settings.normalizePomodoroFromSettings)(rawData);
	  }
	  async ensureDefaultBoardInSettings() {
	    const hasDefaultBoard = this.tableros.some((board) => board.name === import_constants.DEFAULT_BOARD_NAME);
	    if (hasDefaultBoard)
	      return;
	    this.tableros.unshift({ name: import_constants.DEFAULT_BOARD_NAME, color: "#2e6db0" });
	    await this.saveSettings();
	  }
	  async saveSettings() {
	    await this.saveData({
	      tableros: this.tableros,
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
	  addTablero(name, color = "#6b5ce7") {
	    const normalizedName = name.trim().toLowerCase();
	    if (!normalizedName)
	      return;
	    if (this.tableros.some((tablero) => tablero.name.toLowerCase() === normalizedName))
	      return;
	    this.tableros.push({ name: normalizedName, color });
	    void this.ensureBoardWorkspace(normalizedName);
	    void this.saveSettings();
	  }
	  canRemoveTablero(boardName) {
	    const normalizedBoardName = boardName.trim().toLowerCase();
	    if (!normalizedBoardName || normalizedBoardName === import_constants.DEFAULT_BOARD_NAME)
	      return false;
	    return this.tableros.some((tablero) => tablero.name === normalizedBoardName);
	  }
	  async removeTablero(boardName) {
	    const normalizedBoardName = boardName.trim().toLowerCase();
	    if (!this.canRemoveTablero(normalizedBoardName))
	      return false;
	    const boardTaskPaths = new Set(
	      (0, import_taskEngine.getTasks)(this.app).filter((task) => task.tablero === normalizedBoardName).map((task) => task.file.path)
	    );
	    for (const taskPath of boardTaskPaths) {
	      const taskFile = this.app.vault.getAbstractFileByPath(taskPath);
	      if (!(taskFile instanceof obsidian.TFile))
	        continue;
	      await this.app.vault.delete(taskFile, true);
	    }
	    const selectedTaskPath = this.pomodoro.selectedTaskPath;
	    if (selectedTaskPath && boardTaskPaths.has(selectedTaskPath)) {
	      this.pomodoro = {
	        ...this.pomodoro,
	        durations: { ...this.pomodoro.durations },
	        selectedTaskPath: null
	      };
	    }
	    this.tableros = this.tableros.filter((tablero) => tablero.name !== normalizedBoardName);
	    this.equipos = this.equipos.filter((equipo) => (equipo.tablero || import_constants.DEFAULT_BOARD_NAME) !== normalizedBoardName);
	    await this.removeBoardFolders(normalizedBoardName);
	    await (0, import_taskIndexEngine.syncRootTaskIndexLinks)(this.app);
	    await this.saveSettings();
	    return true;
	  }
	  addEquipo(name, color = "#6b5ce7") {
	    this.addEquipoInTablero(name, color, this.tableros[0]?.name || "default");
	  }
	  addEquipoInTablero(name, color = "#6b5ce7", boardName = "default") {
	    const normalizedName = name.trim();
	    const normalizedBoardName = boardName.trim().toLowerCase();
	    if (!normalizedName)
	      return;
	    if (this.equipos.some((equipo) => equipo.name === normalizedName && (equipo.tablero || "default") === normalizedBoardName))
	      return;
	    this.equipos.push({ name: normalizedName, color, tablero: normalizedBoardName });
	    void this.saveSettings();
	  }
	  removeEquipo(name, boardName = "default") {
	    if (import_constants.LOCKED_EQUIPO_NAMES.includes(name))
	      return false;
	    const normalizedBoardName = boardName.trim().toLowerCase();
	    const nextEquipos = this.equipos.filter((equipo) => !(equipo.name === name && (equipo.tablero || "default") === normalizedBoardName));
	    if (nextEquipos.length === this.equipos.length)
	      return false;
	    this.equipos = nextEquipos;
	    void this.saveSettings();
	    return true;
	  }
	  updateEquipo(name, boardName, updates) {
	    const normalizedBoardName = boardName.trim().toLowerCase();
	    const team = this.equipos.find((equipo) => equipo.name === name && (equipo.tablero || "default") === normalizedBoardName);
	    if (!team)
	      return;
	    Object.assign(team, updates);
	    void this.saveSettings();
	  }
	  getEquiposForTablero(boardName) {
	    const normalizedBoardName = boardName.trim().toLowerCase();
	    return this.equipos.filter((equipo) => (equipo.tablero || "default") === normalizedBoardName);
	  }
	  async ensureTasksFolder() {
	    try {
	      await this.ensureFolderPath(import_constants.TAREAS_FOLDER);
	      await this.ensureFolderPath(import_constants.COMPLETED_TASKS_FOLDER);
	      await this.ensureFolderPath(import_constants.COMPLETED_SUBTASKS_FOLDER);
	      await this.ensureFolderPath(import_constants.CANCELLED_TASKS_FOLDER);
	      await this.ensureFolderPath(import_constants.CANCELLED_SUBTASKS_FOLDER);
	      const boardNames = /* @__PURE__ */ new Set([
	        ...this.tableros.map((board) => board.name.trim().toLowerCase()).filter(Boolean),
	        ...this.getExistingBoardFolderNames()
	      ]);
	      boardNames.add(import_constants.DEFAULT_BOARD_NAME);
	      for (const boardName of boardNames)
	        await this.ensureBoardWorkspace(boardName);
	    } catch {
	      new obsidian.Notice(`No se pudo crear la carpeta "${import_constants.TAREAS_FOLDER}".`);
	    }
	  }
	  async ensureBoardFolders(boardName) {
	    const normalized = boardName.trim().toLowerCase();
	    if (!normalized)
	      return;
	    await this.ensureFolderPath(`${import_constants.TAREAS_FOLDER}/${normalized}`);
	    await this.ensureFolderPath(`${import_constants.TAREAS_FOLDER}/${normalized}/subTasks`);
	  }
	  async ensureBoardWorkspace(boardName) {
	    const normalized = boardName.trim().toLowerCase();
	    if (!normalized)
	      return;
	    await this.ensureBoardFolders(normalized);
	    await (0, import_taskIndexEngine.ensureBoardTaskIndexFile)(this.app, normalized);
	    await (0, import_taskIndexEngine.syncRootTaskIndexLinks)(this.app);
	  }
	  async removeBoardFolders(boardName) {
	    const boardRootPath = `${import_constants.TAREAS_FOLDER}/${boardName}`;
	    const boardSubtasksPath = `${boardRootPath}/subTasks`;
	    await this.deleteFolderIfExists(boardSubtasksPath);
	    await this.deleteFolderIfExists(boardRootPath);
	  }
	  async deleteFolderIfExists(path) {
	    const abstractFile = this.app.vault.getAbstractFileByPath(path);
	    if (!(abstractFile instanceof obsidian.TFolder))
	      return;
	    await this.app.vault.delete(abstractFile, true);
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
	      try {
	        await this.app.vault.createFolder(currentPath);
	      } catch {
	        const retry = this.app.vault.getAbstractFileByPath(currentPath);
	        if (retry instanceof obsidian.TFolder)
	          continue;
	        throw new Error(`No se pudo crear la carpeta "${currentPath}".`);
	      }
	    }
	  }
	  getExistingBoardFolderNames() {
	    const rootFolder = this.app.vault.getAbstractFileByPath(import_constants.TAREAS_FOLDER);
	    if (!(rootFolder instanceof obsidian.TFolder))
	      return [];
	    const excludedFolders = /* @__PURE__ */ new Set([
	      import_constants.COMPLETED_TASKS_FOLDER.split("/").pop() ?? "",
	      import_constants.CANCELLED_TASKS_FOLDER.split("/").pop() ?? "",
	      import_constants.LEGACY_COMPLETED_TASKS_FOLDER.split("/").pop() ?? ""
	    ]);
	    return rootFolder.children.filter((child) => child instanceof obsidian.TFolder).map((folder) => folder.name.trim().toLowerCase()).filter((name) => Boolean(name) && !excludedFolders.has(name));
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
	    await (0, import_taskIndexEngine.removeTaskLinkFromCancelledIndex)(this.app, file);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL3Rhc2tNYW5uYWdlci9jb25zdGFudHMudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL3V0aWxzL2d1YXJkcy50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy9wb21vZG9yb0VuZ2luZS50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy90YXNrSW5kZXhFbmdpbmUudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL2VuZ2luZXMvZnJvbnRtYXR0ZXJFbmdpbmUudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL3V0aWxzL3N0YXR1cy50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy90YXNrRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9lbmdpbmVzL3NjaGVkdWxlRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci91dGlscy9zYW5pdGl6ZUZpbGVuYW1lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9tb2RhbHMvTmV3VGFza01vZGFsLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci91dGlscy9zZXR0aW5ncy50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy9jb21wbGV0aW9uRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9lbmdpbmVzL29yZGVyRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9lbmdpbmVzL3BvbW9kb3JvTG9nRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci91aS9jb2xvclBpY2tlci50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvbW9kYWxzL0VkaXRTZWN0aW9uTW9kYWwudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL21vZGFscy9OZXdCb2FyZE1vZGFsLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9tb2RhbHMvTmV3R3JvdXBNb2RhbC50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvbW9kYWxzL0VkaXRUYXNrRmlsZU1vZGFsLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9tb2RhbHMvQWRkVGFza0NvbW1lbnRNb2RhbC50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvbW9kYWxzL0NvbmZpcm1EZWxldGVUYXNrTW9kYWwudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL21vZGFscy9Qb21vZG9yb1ByZXNldE1vZGFsLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9tb2RhbHMvU2VsZWN0UG9tb2Rvcm9UYXNrTW9kYWwudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL3VpL2Ryb3Bkb3duLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci91dGlscy9kZWJvdW5jZS50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvdmlldy9UYXJlYXNWaWV3LnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9wbHVnaW4vVGFyZWFzUGx1Z2luLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIudHM/Y29tbW9uanMtZW50cnkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFZJRVdfVFlQRSA9ICd0YXJlYXMtdmlldydcbmV4cG9ydCBjb25zdCBUQVJFQVNfRk9MREVSID0gJ3Rhc2stbWFubmFnZXInXG5leHBvcnQgY29uc3QgQ09NUExFVEVEX1RBU0tTX0ZPTERFUiA9IGAke1RBUkVBU19GT0xERVJ9L2ZpbmlzaGVkYFxuZXhwb3J0IGNvbnN0IENPTVBMRVRFRF9TVUJUQVNLU19GT0xERVIgPSBgJHtDT01QTEVURURfVEFTS1NfRk9MREVSfS9zdWJUYXNrc2BcbmV4cG9ydCBjb25zdCBDQU5DRUxMRURfVEFTS1NfRk9MREVSID0gYCR7VEFSRUFTX0ZPTERFUn0vY2FuY2VsbGVkYFxuZXhwb3J0IGNvbnN0IENBTkNFTExFRF9TVUJUQVNLU19GT0xERVIgPSBgJHtDQU5DRUxMRURfVEFTS1NfRk9MREVSfS9zdWJUYXNrc2BcbmV4cG9ydCBjb25zdCBMRUdBQ1lfQ09NUExFVEVEX1RBU0tTX0ZPTERFUiA9IGAke1RBUkVBU19GT0xERVJ9L2NvbXBsZXRhZGFzYFxuZXhwb3J0IGNvbnN0IFRBU0tfSU5ERVhfQkFTRU5BTUUgPSAndGFza0luZGV4J1xuZXhwb3J0IGNvbnN0IEZJTklTSEVEX1RBU0tfSU5ERVhfQkFTRU5BTUUgPSAndGFza0luZGV4RmluaXNoZWQnXG5leHBvcnQgY29uc3QgQ0FOQ0VMTEVEX1RBU0tfSU5ERVhfQkFTRU5BTUUgPSAndGFza0luZGV4Q2FuY2VsbGVkJ1xuZXhwb3J0IGNvbnN0IFBPTU9ET1JPX0xPR19CQVNFTkFNRSA9ICdwb21vZG9ybydcbmV4cG9ydCBjb25zdCBJTkRFWF9UQUcgPSAnaW5kZXgnXG5leHBvcnQgY29uc3QgVEFTS19UQUcgPSAndGFzaydcbmV4cG9ydCBjb25zdCBTVUJUQVNLX1RBRyA9ICdzdWItdGFzaydcblxuZXhwb3J0IGNvbnN0IEVTVEFET1MgPSBbJ1BlbmRpZW50ZScsICdDYW5jZWxhZGEnLCAnRW4gcHJvZ3Jlc28nLCAnRmluYWxpemFkYScsICdCbG9xdWVhZGEnXVxuZXhwb3J0IGNvbnN0IFBSSU9SSURBREVTID0gWydCYWphJywgJ01lZGlhJywgJ0FsdGEnLCAnVXJnZW50ZSddXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0JPQVJEX05BTUUgPSAnZGVmYXVsdCdcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RBQkxFUk9TOiBBcnJheTx7IG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyB9PiA9IFtcbiAgeyBuYW1lOiBERUZBVUxUX0JPQVJEX05BTUUsIGNvbG9yOiAnIzJlNmRiMCcgfSxcbl1cbmV4cG9ydCBjb25zdCBERUZBVUxUX0VRVUlQT1M6IEFycmF5PHsgbmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nIH0+ID0gW11cbmV4cG9ydCBjb25zdCBMT0NLRURfRVFVSVBPX05BTUVTOiBzdHJpbmdbXSA9IFtdXG5cbmV4cG9ydCBjb25zdCBQUkVTRVRfQ09MT1JTID0gW1xuICAnI2UwNWM1YycsICcjZTA4NTVjJywgJyNkOTdhMWUnLCAnI2M5Yjg0YScsXG4gICcjNGNhZjUwJywgJyMwMGI4OTQnLCAnIzA5ODRlMycsICcjMmU2ZGIwJyxcbiAgJyM3YzVjZTcnLCAnI2ZkNzlhOCcsICcjNjM2ZTcyJywgJyNiMmJlYzMnLFxuXVxuXG5leHBvcnQgY29uc3QgT1JERVJfU1RFUCA9IDEwXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BPTU9ET1JPX1dPUktfTUlOVVRFUyA9IDI1XG5leHBvcnQgY29uc3QgREVGQVVMVF9QT01PRE9ST19TSE9SVF9CUkVBS19NSU5VVEVTID0gNVxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUE9NT0RPUk9fTE9OR19CUkVBS19NSU5VVEVTID0gMTVcbmV4cG9ydCBjb25zdCBQT01PRE9ST19XT1JLX0NZQ0xFU19CRUZPUkVfTE9OR19CUkVBSyA9IDRcbiIsImltcG9ydCB0eXBlIHsgVGFza0Zyb250bWF0dGVyIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlY29yZCh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgcmV0dXJuIEJvb2xlYW4odmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvVGFza0Zyb250bWF0dGVyKHZhbHVlOiB1bmtub3duKTogVGFza0Zyb250bWF0dGVyIHwgbnVsbCB7XG4gIGlmICghaXNSZWNvcmQodmFsdWUpKVxuICAgIHJldHVybiBudWxsXG5cbiAgY29uc3QgZnJvbnRtYXR0ZXI6IFRhc2tGcm9udG1hdHRlciA9IHt9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZS50YXJlYSA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIudGFyZWEgPSB2YWx1ZS50YXJlYVxuICBpZiAodHlwZW9mIHZhbHVlLmRldGFsbGUgPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLmRldGFsbGUgPSB2YWx1ZS5kZXRhbGxlXG4gIGlmICh0eXBlb2YgdmFsdWUuZXN0YWRvID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5lc3RhZG8gPSB2YWx1ZS5lc3RhZG9cbiAgaWYgKHR5cGVvZiB2YWx1ZS5mZWNoYUluaWNpbyA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIuZmVjaGFJbmljaW8gPSB2YWx1ZS5mZWNoYUluaWNpb1xuICBpZiAodHlwZW9mIHZhbHVlLmZlY2hhRmluID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5mZWNoYUZpbiA9IHZhbHVlLmZlY2hhRmluXG4gIGlmICh0eXBlb2YgdmFsdWUudGFibGVybyA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIudGFibGVybyA9IHZhbHVlLnRhYmxlcm9cbiAgaWYgKHR5cGVvZiB2YWx1ZS5lcXVpcG8gPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLmVxdWlwbyA9IHZhbHVlLmVxdWlwb1xuICBpZiAodHlwZW9mIHZhbHVlLnByaW9yaWRhZCA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIucHJpb3JpZGFkID0gdmFsdWUucHJpb3JpZGFkXG4gIGlmICh0eXBlb2YgdmFsdWUuZGVkaWNhZG8gPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWx1ZS5kZWRpY2FkbyA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIuZGVkaWNhZG8gPSB2YWx1ZS5kZWRpY2Fkb1xuICBpZiAodHlwZW9mIHZhbHVlLmVzdGltYWNpb24gPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWx1ZS5lc3RpbWFjaW9uID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5lc3RpbWFjaW9uID0gdmFsdWUuZXN0aW1hY2lvblxuICBpZiAodHlwZW9mIHZhbHVlLmRlc3ZpbyA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlLmRlc3ZpbyA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIuZGVzdmlvID0gdmFsdWUuZGVzdmlvXG4gIGlmICh0eXBlb2YgdmFsdWUucGFyZW50ID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5wYXJlbnQgPSB2YWx1ZS5wYXJlbnRcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUuY2hpbGRzKSAmJiB2YWx1ZS5jaGlsZHMuZXZlcnkoaXRlbSA9PiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpKVxuICAgIGZyb250bWF0dGVyLmNoaWxkcyA9IHZhbHVlLmNoaWxkc1xuICBlbHNlIGlmICh0eXBlb2YgdmFsdWUuY2hpbGRzID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5jaGlsZHMgPSB2YWx1ZS5jaGlsZHNcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUudGFncykgJiYgdmFsdWUudGFncy5ldmVyeShpdGVtID0+IHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykpXG4gICAgZnJvbnRtYXR0ZXIudGFncyA9IHZhbHVlLnRhZ3NcbiAgZWxzZSBpZiAodHlwZW9mIHZhbHVlLnRhZ3MgPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLnRhZ3MgPSB2YWx1ZS50YWdzXG4gIGlmICh0eXBlb2YgdmFsdWUub3JkZXIgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWx1ZS5vcmRlciA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIub3JkZXIgPSB2YWx1ZS5vcmRlclxuXG4gIHJldHVybiBmcm9udG1hdHRlclxufVxuIiwiaW1wb3J0IHtcbiAgREVGQVVMVF9QT01PRE9ST19MT05HX0JSRUFLX01JTlVURVMsXG4gIERFRkFVTFRfUE9NT0RPUk9fU0hPUlRfQlJFQUtfTUlOVVRFUyxcbiAgREVGQVVMVF9QT01PRE9ST19XT1JLX01JTlVURVMsXG4gIFBPTU9ET1JPX1dPUktfQ1lDTEVTX0JFRk9SRV9MT05HX0JSRUFLLFxufSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgdHlwZSB7IFBvbW9kb3JvRHVyYXRpb25zLCBQb21vZG9yb1BoYXNlLCBQb21vZG9yb1J1blN0YXRlLCBQb21vZG9yb1N0YXRlIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBpc1JlY29yZCB9IGZyb20gJy4uL3V0aWxzL2d1YXJkcydcblxuY29uc3QgTUlOX0RVUkFUSU9OX01JTlVURVMgPSAxXG5jb25zdCBNQVhfRFVSQVRJT05fTUlOVVRFUyA9IDE4MFxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFBvbW9kb3JvU3RhdGUoKTogUG9tb2Rvcm9TdGF0ZSB7XG4gIGNvbnN0IGR1cmF0aW9ucyA9IGNyZWF0ZURlZmF1bHRQb21vZG9yb0R1cmF0aW9ucygpXG4gIHJldHVybiB7XG4gICAgcGhhc2U6ICd3b3JrJyxcbiAgICBydW5TdGF0ZTogJ2lkbGUnLFxuICAgIHJlbWFpbmluZ1NlY29uZHM6IGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKGR1cmF0aW9ucywgJ3dvcmsnKSxcbiAgICBlbmRUaW1lc3RhbXA6IG51bGwsXG4gICAgY29tcGxldGVkV29ya0N5Y2xlczogMCxcbiAgICBzZWxlY3RlZFRhc2tQYXRoOiBudWxsLFxuICAgIGlzRGV2aWF0aW9uQWN0aXZlOiBmYWxzZSxcbiAgICBkZXZpYXRpb25TdGFydGVkQXQ6IG51bGwsXG4gICAgZGV2aWF0aW9uQmFzZVJlbWFpbmluZ1NlY29uZHM6IDAsXG4gICAgcGhhc2VEZXZpYXRpb25TZWNvbmRzOiAwLFxuICAgIGR1cmF0aW9ucyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFBvbW9kb3JvRHVyYXRpb25zKCk6IFBvbW9kb3JvRHVyYXRpb25zIHtcbiAgcmV0dXJuIHtcbiAgICB3b3JrTWludXRlczogREVGQVVMVF9QT01PRE9ST19XT1JLX01JTlVURVMsXG4gICAgc2hvcnRCcmVha01pbnV0ZXM6IERFRkFVTFRfUE9NT0RPUk9fU0hPUlRfQlJFQUtfTUlOVVRFUyxcbiAgICBsb25nQnJlYWtNaW51dGVzOiBERUZBVUxUX1BPTU9ET1JPX0xPTkdfQlJFQUtfTUlOVVRFUyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUG9tb2Rvcm9TdGF0ZShyYXdWYWx1ZTogdW5rbm93bik6IFBvbW9kb3JvU3RhdGUge1xuICBjb25zdCBmYWxsYmFjayA9IGNyZWF0ZURlZmF1bHRQb21vZG9yb1N0YXRlKClcbiAgaWYgKCFpc1JlY29yZChyYXdWYWx1ZSkpXG4gICAgcmV0dXJuIGZhbGxiYWNrXG5cbiAgY29uc3QgZHVyYXRpb25zID0gbm9ybWFsaXplUG9tb2Rvcm9EdXJhdGlvbnMocmF3VmFsdWUuZHVyYXRpb25zKVxuICBjb25zdCBwaGFzZSA9IG5vcm1hbGl6ZVBvbW9kb3JvUGhhc2UocmF3VmFsdWUucGhhc2UpXG4gIGNvbnN0IHJ1blN0YXRlID0gbm9ybWFsaXplUG9tb2Rvcm9SdW5TdGF0ZShyYXdWYWx1ZS5ydW5TdGF0ZSlcbiAgY29uc3QgZGVmYXVsdFJlbWFpbmluZyA9IGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKGR1cmF0aW9ucywgcGhhc2UpXG4gIGNvbnN0IHJlbWFpbmluZ1NlY29uZHMgPSBub3JtYWxpemVTZWNvbmRzKHJhd1ZhbHVlLnJlbWFpbmluZ1NlY29uZHMsIGRlZmF1bHRSZW1haW5pbmcpXG4gIGNvbnN0IGVuZFRpbWVzdGFtcCA9IHR5cGVvZiByYXdWYWx1ZS5lbmRUaW1lc3RhbXAgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZShyYXdWYWx1ZS5lbmRUaW1lc3RhbXApXG4gICAgPyByYXdWYWx1ZS5lbmRUaW1lc3RhbXBcbiAgICA6IG51bGxcbiAgY29uc3QgY29tcGxldGVkV29ya0N5Y2xlcyA9IHR5cGVvZiByYXdWYWx1ZS5jb21wbGV0ZWRXb3JrQ3ljbGVzID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNGaW5pdGUocmF3VmFsdWUuY29tcGxldGVkV29ya0N5Y2xlcylcbiAgICA/IE1hdGgubWF4KDAsIE1hdGguZmxvb3IocmF3VmFsdWUuY29tcGxldGVkV29ya0N5Y2xlcykpXG4gICAgOiAwXG4gIGNvbnN0IHNlbGVjdGVkVGFza1BhdGggPSB0eXBlb2YgcmF3VmFsdWUuc2VsZWN0ZWRUYXNrUGF0aCA9PT0gJ3N0cmluZycgJiYgcmF3VmFsdWUuc2VsZWN0ZWRUYXNrUGF0aC50cmltKCkubGVuZ3RoID4gMFxuICAgID8gcmF3VmFsdWUuc2VsZWN0ZWRUYXNrUGF0aFxuICAgIDogbnVsbFxuICBjb25zdCBpc0RldmlhdGlvbkFjdGl2ZSA9IEJvb2xlYW4ocmF3VmFsdWUuaXNEZXZpYXRpb25BY3RpdmUpXG4gIGNvbnN0IGRldmlhdGlvblN0YXJ0ZWRBdCA9IHR5cGVvZiByYXdWYWx1ZS5kZXZpYXRpb25TdGFydGVkQXQgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZShyYXdWYWx1ZS5kZXZpYXRpb25TdGFydGVkQXQpXG4gICAgPyByYXdWYWx1ZS5kZXZpYXRpb25TdGFydGVkQXRcbiAgICA6IG51bGxcbiAgY29uc3QgZGV2aWF0aW9uQmFzZVJlbWFpbmluZ1NlY29uZHMgPSBub3JtYWxpemVTZWNvbmRzKHJhd1ZhbHVlLmRldmlhdGlvbkJhc2VSZW1haW5pbmdTZWNvbmRzLCAwKVxuICBjb25zdCBwaGFzZURldmlhdGlvblNlY29uZHMgPSBub3JtYWxpemVTZWNvbmRzKHJhd1ZhbHVlLnBoYXNlRGV2aWF0aW9uU2Vjb25kcywgMClcblxuICByZXR1cm4ge1xuICAgIHBoYXNlLFxuICAgIHJ1blN0YXRlLFxuICAgIHJlbWFpbmluZ1NlY29uZHMsXG4gICAgZW5kVGltZXN0YW1wLFxuICAgIGNvbXBsZXRlZFdvcmtDeWNsZXMsXG4gICAgc2VsZWN0ZWRUYXNrUGF0aCxcbiAgICBpc0RldmlhdGlvbkFjdGl2ZSxcbiAgICBkZXZpYXRpb25TdGFydGVkQXQ6IGlzRGV2aWF0aW9uQWN0aXZlID8gZGV2aWF0aW9uU3RhcnRlZEF0IDogbnVsbCxcbiAgICBkZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kczogaXNEZXZpYXRpb25BY3RpdmUgPyBkZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kcyA6IDAsXG4gICAgcGhhc2VEZXZpYXRpb25TZWNvbmRzLFxuICAgIGR1cmF0aW9ucyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUG9tb2Rvcm9EdXJhdGlvbnMocmF3VmFsdWU6IHVua25vd24pOiBQb21vZG9yb0R1cmF0aW9ucyB7XG4gIGNvbnN0IGZhbGxiYWNrID0gY3JlYXRlRGVmYXVsdFBvbW9kb3JvRHVyYXRpb25zKClcbiAgaWYgKCFpc1JlY29yZChyYXdWYWx1ZSkpXG4gICAgcmV0dXJuIGZhbGxiYWNrXG5cbiAgcmV0dXJuIHtcbiAgICB3b3JrTWludXRlczogY2xhbXBNaW51dGVzKHJhd1ZhbHVlLndvcmtNaW51dGVzLCBmYWxsYmFjay53b3JrTWludXRlcyksXG4gICAgc2hvcnRCcmVha01pbnV0ZXM6IGNsYW1wTWludXRlcyhyYXdWYWx1ZS5zaG9ydEJyZWFrTWludXRlcywgZmFsbGJhY2suc2hvcnRCcmVha01pbnV0ZXMpLFxuICAgIGxvbmdCcmVha01pbnV0ZXM6IGNsYW1wTWludXRlcyhyYXdWYWx1ZS5sb25nQnJlYWtNaW51dGVzLCBmYWxsYmFjay5sb25nQnJlYWtNaW51dGVzKSxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGhhc2VEdXJhdGlvblNlY29uZHMoZHVyYXRpb25zOiBQb21vZG9yb0R1cmF0aW9ucywgcGhhc2U6IFBvbW9kb3JvUGhhc2UpOiBudW1iZXIge1xuICBpZiAocGhhc2UgPT09ICdzaG9ydC1icmVhaycpXG4gICAgcmV0dXJuIGR1cmF0aW9ucy5zaG9ydEJyZWFrTWludXRlcyAqIDYwXG5cbiAgaWYgKHBoYXNlID09PSAnbG9uZy1icmVhaycpXG4gICAgcmV0dXJuIGR1cmF0aW9ucy5sb25nQnJlYWtNaW51dGVzICogNjBcblxuICByZXR1cm4gZHVyYXRpb25zLndvcmtNaW51dGVzICogNjBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvbW9kb3JvUmVtYWluaW5nU2Vjb25kcyhzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgbm93TXM6IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChzdGF0ZS5ydW5TdGF0ZSAhPT0gJ3J1bm5pbmcnIHx8IHN0YXRlLmVuZFRpbWVzdGFtcCA9PT0gbnVsbClcbiAgICByZXR1cm4gc3RhdGUucmVtYWluaW5nU2Vjb25kc1xuXG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLmNlaWwoKHN0YXRlLmVuZFRpbWVzdGFtcCAtIG5vd01zKSAvIDEwMDApKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRQb21vZG9ybyhzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgbm93TXM6IG51bWJlcik6IFBvbW9kb3JvU3RhdGUge1xuICBpZiAoc3RhdGUucnVuU3RhdGUgPT09ICdydW5uaW5nJyB8fCBzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSlcbiAgICByZXR1cm4gc3RhdGVcblxuICBjb25zdCByZW1haW5pbmdTZWNvbmRzID0gc3RhdGUucnVuU3RhdGUgPT09ICdwYXVzZWQnXG4gICAgPyBzdGF0ZS5yZW1haW5pbmdTZWNvbmRzXG4gICAgOiBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyhzdGF0ZS5kdXJhdGlvbnMsIHN0YXRlLnBoYXNlKVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgcnVuU3RhdGU6ICdydW5uaW5nJyxcbiAgICByZW1haW5pbmdTZWNvbmRzLFxuICAgIGVuZFRpbWVzdGFtcDogbm93TXMgKyByZW1haW5pbmdTZWNvbmRzICogMTAwMCxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF1c2VQb21vZG9ybyhzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgbm93TXM6IG51bWJlcik6IFBvbW9kb3JvU3RhdGUge1xuICBpZiAoc3RhdGUucnVuU3RhdGUgIT09ICdydW5uaW5nJyB8fCBzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSlcbiAgICByZXR1cm4gc3RhdGVcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIHJ1blN0YXRlOiAncGF1c2VkJyxcbiAgICByZW1haW5pbmdTZWNvbmRzOiBnZXRQb21vZG9yb1JlbWFpbmluZ1NlY29uZHMoc3RhdGUsIG5vd01zKSxcbiAgICBlbmRUaW1lc3RhbXA6IG51bGwsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3VtZVBvbW9kb3JvKHN0YXRlOiBQb21vZG9yb1N0YXRlLCBub3dNczogbnVtYmVyKTogUG9tb2Rvcm9TdGF0ZSB7XG4gIGlmIChzdGF0ZS5ydW5TdGF0ZSAhPT0gJ3BhdXNlZCcgfHwgc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUpXG4gICAgcmV0dXJuIHN0YXRlXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBydW5TdGF0ZTogJ3J1bm5pbmcnLFxuICAgIGVuZFRpbWVzdGFtcDogbm93TXMgKyBzdGF0ZS5yZW1haW5pbmdTZWNvbmRzICogMTAwMCxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRQb21vZG9ybyhzdGF0ZTogUG9tb2Rvcm9TdGF0ZSk6IFBvbW9kb3JvU3RhdGUge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIHJ1blN0YXRlOiAnaWRsZScsXG4gICAgcmVtYWluaW5nU2Vjb25kczogZ2V0UGhhc2VEdXJhdGlvblNlY29uZHMoc3RhdGUuZHVyYXRpb25zLCBzdGF0ZS5waGFzZSksXG4gICAgZW5kVGltZXN0YW1wOiBudWxsLFxuICAgIGlzRGV2aWF0aW9uQWN0aXZlOiBmYWxzZSxcbiAgICBkZXZpYXRpb25TdGFydGVkQXQ6IG51bGwsXG4gICAgZGV2aWF0aW9uQmFzZVJlbWFpbmluZ1NlY29uZHM6IDAsXG4gICAgcGhhc2VEZXZpYXRpb25TZWNvbmRzOiAwLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBvbW9kb3JvRHVyYXRpb25zKHN0YXRlOiBQb21vZG9yb1N0YXRlLCBkdXJhdGlvbnM6IFBvbW9kb3JvRHVyYXRpb25zKTogUG9tb2Rvcm9TdGF0ZSB7XG4gIGlmIChzdGF0ZS5ydW5TdGF0ZSAhPT0gJ2lkbGUnKVxuICAgIHJldHVybiB7IC4uLnN0YXRlLCBkdXJhdGlvbnM6IHsgLi4uZHVyYXRpb25zIH0gfVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZHVyYXRpb25zOiB7IC4uLmR1cmF0aW9ucyB9LFxuICAgIHJlbWFpbmluZ1NlY29uZHM6IGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKGR1cmF0aW9ucywgc3RhdGUucGhhc2UpLFxuICAgIGVuZFRpbWVzdGFtcDogbnVsbCxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWR2YW5jZVBvbW9kb3JvU3RhdGUoXG4gIHN0YXRlOiBQb21vZG9yb1N0YXRlLFxuICBub3dNczogbnVtYmVyLFxuKTogeyBzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgY29tcGxldGVkUGhhc2VzOiBQb21vZG9yb1BoYXNlW10sIHRyYW5zaXRpb25lZDogYm9vbGVhbiB9IHtcbiAgaWYgKHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlIHx8IHN0YXRlLnJ1blN0YXRlICE9PSAncnVubmluZycgfHwgc3RhdGUuZW5kVGltZXN0YW1wID09PSBudWxsKVxuICAgIHJldHVybiB7IHN0YXRlLCBjb21wbGV0ZWRQaGFzZXM6IFtdLCB0cmFuc2l0aW9uZWQ6IGZhbHNlIH1cblxuICBsZXQgbmV4dCA9IHsgLi4uc3RhdGUsIGR1cmF0aW9uczogeyAuLi5zdGF0ZS5kdXJhdGlvbnMgfSB9XG4gIGNvbnN0IGNvbXBsZXRlZFBoYXNlczogUG9tb2Rvcm9QaGFzZVtdID0gW11cbiAgbGV0IHRyYW5zaXRpb25lZCA9IGZhbHNlXG5cbiAgd2hpbGUgKG5leHQuZW5kVGltZXN0YW1wICE9PSBudWxsICYmIG5leHQuZW5kVGltZXN0YW1wIDw9IG5vd01zKSB7XG4gICAgY29tcGxldGVkUGhhc2VzLnB1c2gobmV4dC5waGFzZSlcbiAgICB0cmFuc2l0aW9uZWQgPSB0cnVlXG5cbiAgICBpZiAobmV4dC5waGFzZSA9PT0gJ3dvcmsnKSB7XG4gICAgICBjb25zdCBjb21wbGV0ZWRXb3JrQ3ljbGVzID0gbmV4dC5jb21wbGV0ZWRXb3JrQ3ljbGVzICsgMVxuICAgICAgY29uc3QgbmV4dFBoYXNlOiBQb21vZG9yb1BoYXNlID0gY29tcGxldGVkV29ya0N5Y2xlcyAlIFBPTU9ET1JPX1dPUktfQ1lDTEVTX0JFRk9SRV9MT05HX0JSRUFLID09PSAwXG4gICAgICAgID8gJ2xvbmctYnJlYWsnXG4gICAgICAgIDogJ3Nob3J0LWJyZWFrJ1xuICAgICAgY29uc3QgbmV4dER1cmF0aW9uID0gZ2V0UGhhc2VEdXJhdGlvblNlY29uZHMobmV4dC5kdXJhdGlvbnMsIG5leHRQaGFzZSlcbiAgICAgIG5leHQgPSB7XG4gICAgICAgIC4uLm5leHQsXG4gICAgICAgIHBoYXNlOiBuZXh0UGhhc2UsXG4gICAgICAgIGNvbXBsZXRlZFdvcmtDeWNsZXMsXG4gICAgICAgIHJ1blN0YXRlOiAncnVubmluZycsXG4gICAgICAgIHJlbWFpbmluZ1NlY29uZHM6IG5leHREdXJhdGlvbixcbiAgICAgICAgZW5kVGltZXN0YW1wOiAobmV4dC5lbmRUaW1lc3RhbXAgPz8gbm93TXMpICsgbmV4dER1cmF0aW9uICogMTAwMCxcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgbmV4dER1cmF0aW9uID0gZ2V0UGhhc2VEdXJhdGlvblNlY29uZHMobmV4dC5kdXJhdGlvbnMsICd3b3JrJylcbiAgICBuZXh0ID0ge1xuICAgICAgLi4ubmV4dCxcbiAgICAgIHBoYXNlOiAnd29yaycsXG4gICAgICBydW5TdGF0ZTogJ3J1bm5pbmcnLFxuICAgICAgcmVtYWluaW5nU2Vjb25kczogbmV4dER1cmF0aW9uLFxuICAgICAgZW5kVGltZXN0YW1wOiAobmV4dC5lbmRUaW1lc3RhbXAgPz8gbm93TXMpICsgbmV4dER1cmF0aW9uICogMTAwMCxcbiAgICB9XG4gIH1cblxuICBjb25zdCByZW1haW5pbmdTZWNvbmRzID0gZ2V0UG9tb2Rvcm9SZW1haW5pbmdTZWNvbmRzKG5leHQsIG5vd01zKVxuICBpZiAocmVtYWluaW5nU2Vjb25kcyAhPT0gbmV4dC5yZW1haW5pbmdTZWNvbmRzKVxuICAgIG5leHQgPSB7IC4uLm5leHQsIHJlbWFpbmluZ1NlY29uZHMgfVxuXG4gIHJldHVybiB7IHN0YXRlOiBuZXh0LCBjb21wbGV0ZWRQaGFzZXMsIHRyYW5zaXRpb25lZCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZXZpYXRpb25FbGFwc2VkU2Vjb25kcyhzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgbm93TXM6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICghc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUgfHwgc3RhdGUuZGV2aWF0aW9uU3RhcnRlZEF0ID09PSBudWxsKVxuICAgIHJldHVybiAwXG5cbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGguZmxvb3IoKG5vd01zIC0gc3RhdGUuZGV2aWF0aW9uU3RhcnRlZEF0KSAvIDEwMDApKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW50ZXJQb21vZG9yb0RldmlhdGlvbihzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgbm93TXM6IG51bWJlcik6IFBvbW9kb3JvU3RhdGUge1xuICBpZiAoc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUgfHwgc3RhdGUucnVuU3RhdGUgIT09ICdydW5uaW5nJylcbiAgICByZXR1cm4gc3RhdGVcblxuICBjb25zdCByZW1haW5pbmdTZWNvbmRzID0gZ2V0UG9tb2Rvcm9SZW1haW5pbmdTZWNvbmRzKHN0YXRlLCBub3dNcylcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBydW5TdGF0ZTogJ3BhdXNlZCcsXG4gICAgcmVtYWluaW5nU2Vjb25kcyxcbiAgICBlbmRUaW1lc3RhbXA6IG51bGwsXG4gICAgaXNEZXZpYXRpb25BY3RpdmU6IHRydWUsXG4gICAgZGV2aWF0aW9uU3RhcnRlZEF0OiBub3dNcyxcbiAgICBkZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kczogcmVtYWluaW5nU2Vjb25kcyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhpdFBvbW9kb3JvRGV2aWF0aW9uKFxuICBzdGF0ZTogUG9tb2Rvcm9TdGF0ZSxcbiAgbm93TXM6IG51bWJlcixcbik6IHsgc3RhdGU6IFBvbW9kb3JvU3RhdGUsIGVsYXBzZWRTZWNvbmRzOiBudW1iZXIsIGNvbXBsZXRlZFdvcms6IGJvb2xlYW4sIG92ZXJ0aW1lU2Vjb25kczogbnVtYmVyIH0ge1xuICBpZiAoIXN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlKVxuICAgIHJldHVybiB7IHN0YXRlLCBlbGFwc2VkU2Vjb25kczogMCwgY29tcGxldGVkV29yazogZmFsc2UsIG92ZXJ0aW1lU2Vjb25kczogMCB9XG5cbiAgY29uc3QgZWxhcHNlZFNlY29uZHMgPSBnZXREZXZpYXRpb25FbGFwc2VkU2Vjb25kcyhzdGF0ZSwgbm93TXMpXG4gIGNvbnN0IGJhc2VSZW1haW5pbmcgPSBNYXRoLm1heCgwLCBzdGF0ZS5kZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kcylcblxuICBjb25zdCBjbGVhckRldmlhdGlvbiA9IChuZXh0OiBQb21vZG9yb1N0YXRlKTogUG9tb2Rvcm9TdGF0ZSA9PiAoe1xuICAgIC4uLm5leHQsXG4gICAgaXNEZXZpYXRpb25BY3RpdmU6IGZhbHNlLFxuICAgIGRldmlhdGlvblN0YXJ0ZWRBdDogbnVsbCxcbiAgICBkZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kczogMCxcbiAgICBwaGFzZURldmlhdGlvblNlY29uZHM6IG5leHQucGhhc2VEZXZpYXRpb25TZWNvbmRzICsgZWxhcHNlZFNlY29uZHMsXG4gIH0pXG5cbiAgaWYgKHN0YXRlLnBoYXNlICE9PSAnd29yaycpIHtcbiAgICBjb25zdCByZW1haW5pbmdTZWNvbmRzID0gTWF0aC5tYXgoMCwgYmFzZVJlbWFpbmluZyAtIGVsYXBzZWRTZWNvbmRzKVxuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZTogY2xlYXJEZXZpYXRpb24oe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcnVuU3RhdGU6ICdydW5uaW5nJyxcbiAgICAgICAgcmVtYWluaW5nU2Vjb25kcyxcbiAgICAgICAgZW5kVGltZXN0YW1wOiBub3dNcyArIHJlbWFpbmluZ1NlY29uZHMgKiAxMDAwLFxuICAgICAgfSksXG4gICAgICBlbGFwc2VkU2Vjb25kcyxcbiAgICAgIGNvbXBsZXRlZFdvcms6IGZhbHNlLFxuICAgICAgb3ZlcnRpbWVTZWNvbmRzOiAwLFxuICAgIH1cbiAgfVxuXG4gIGlmIChlbGFwc2VkU2Vjb25kcyA8IGJhc2VSZW1haW5pbmcpIHtcbiAgICBjb25zdCByZW1haW5pbmdTZWNvbmRzID0gTWF0aC5tYXgoMCwgYmFzZVJlbWFpbmluZyAtIGVsYXBzZWRTZWNvbmRzKVxuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZTogY2xlYXJEZXZpYXRpb24oe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcnVuU3RhdGU6ICdydW5uaW5nJyxcbiAgICAgICAgcmVtYWluaW5nU2Vjb25kcyxcbiAgICAgICAgZW5kVGltZXN0YW1wOiBub3dNcyArIHJlbWFpbmluZ1NlY29uZHMgKiAxMDAwLFxuICAgICAgfSksXG4gICAgICBlbGFwc2VkU2Vjb25kcyxcbiAgICAgIGNvbXBsZXRlZFdvcms6IGZhbHNlLFxuICAgICAgb3ZlcnRpbWVTZWNvbmRzOiAwLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG92ZXJ0aW1lU2Vjb25kcyA9IGVsYXBzZWRTZWNvbmRzIC0gYmFzZVJlbWFpbmluZ1xuICBjb25zdCBjb21wbGV0ZWRXb3JrQ3ljbGVzID0gc3RhdGUuY29tcGxldGVkV29ya0N5Y2xlcyArIDFcbiAgY29uc3QgbmV4dFBoYXNlOiBQb21vZG9yb1BoYXNlID0gY29tcGxldGVkV29ya0N5Y2xlcyAlIFBPTU9ET1JPX1dPUktfQ1lDTEVTX0JFRk9SRV9MT05HX0JSRUFLID09PSAwXG4gICAgPyAnbG9uZy1icmVhaydcbiAgICA6ICdzaG9ydC1icmVhaydcbiAgY29uc3QgYmFzZUJyZWFrU2Vjb25kcyA9IGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKHN0YXRlLmR1cmF0aW9ucywgbmV4dFBoYXNlKVxuICBjb25zdCB3b3JrRHVyYXRpb25TZWNvbmRzID0gTWF0aC5tYXgoMSwgZ2V0UGhhc2VEdXJhdGlvblNlY29uZHMoc3RhdGUuZHVyYXRpb25zLCAnd29yaycpKVxuICBjb25zdCBleHRyYUJyZWFrU2Vjb25kcyA9IE1hdGgucm91bmQoKG92ZXJ0aW1lU2Vjb25kcyAqIGJhc2VCcmVha1NlY29uZHMpIC8gd29ya0R1cmF0aW9uU2Vjb25kcylcbiAgY29uc3QgbmV4dEJyZWFrU2Vjb25kcyA9IGJhc2VCcmVha1NlY29uZHMgKyBleHRyYUJyZWFrU2Vjb25kc1xuXG4gIHJldHVybiB7XG4gICAgc3RhdGU6IGNsZWFyRGV2aWF0aW9uKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgcGhhc2U6IG5leHRQaGFzZSxcbiAgICAgIHJ1blN0YXRlOiAncnVubmluZycsXG4gICAgICBjb21wbGV0ZWRXb3JrQ3ljbGVzLFxuICAgICAgcmVtYWluaW5nU2Vjb25kczogbmV4dEJyZWFrU2Vjb25kcyxcbiAgICAgIGVuZFRpbWVzdGFtcDogbm93TXMgKyBuZXh0QnJlYWtTZWNvbmRzICogMTAwMCxcbiAgICB9KSxcbiAgICBlbGFwc2VkU2Vjb25kcyxcbiAgICBjb21wbGV0ZWRXb3JrOiB0cnVlLFxuICAgIG92ZXJ0aW1lU2Vjb25kcyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9tb2Rvcm9QaGFzZUxhYmVsKHBoYXNlOiBQb21vZG9yb1BoYXNlKTogc3RyaW5nIHtcbiAgaWYgKHBoYXNlID09PSAnc2hvcnQtYnJlYWsnKVxuICAgIHJldHVybiAnRGVzY2Fuc28gY29ydG8nXG5cbiAgaWYgKHBoYXNlID09PSAnbG9uZy1icmVhaycpXG4gICAgcmV0dXJuICdEZXNjYW5zbyBsYXJnbydcblxuICByZXR1cm4gJ1RyYWJham8nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQb21vZG9yb0NvdW50ZG93bih0b3RhbFNlY29uZHM6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDYwKVxuICBjb25zdCBzZWNvbmRzID0gdG90YWxTZWNvbmRzICUgNjBcbiAgcmV0dXJuIGAke1N0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCAnMCcpfToke1N0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpfWBcbn1cblxuZnVuY3Rpb24gY2xhbXBNaW51dGVzKHZhbHVlOiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgfHwgIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpXG4gICAgcmV0dXJuIGZhbGxiYWNrXG5cbiAgcmV0dXJuIE1hdGgubWluKE1BWF9EVVJBVElPTl9NSU5VVEVTLCBNYXRoLm1heChNSU5fRFVSQVRJT05fTUlOVVRFUywgTWF0aC5yb3VuZCh2YWx1ZSkpKVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQb21vZG9yb1BoYXNlKHZhbHVlOiB1bmtub3duKTogUG9tb2Rvcm9QaGFzZSB7XG4gIGlmICh2YWx1ZSA9PT0gJ3dvcmsnIHx8IHZhbHVlID09PSAnc2hvcnQtYnJlYWsnIHx8IHZhbHVlID09PSAnbG9uZy1icmVhaycpXG4gICAgcmV0dXJuIHZhbHVlXG5cbiAgcmV0dXJuICd3b3JrJ1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQb21vZG9yb1J1blN0YXRlKHZhbHVlOiB1bmtub3duKTogUG9tb2Rvcm9SdW5TdGF0ZSB7XG4gIGlmICh2YWx1ZSA9PT0gJ2lkbGUnIHx8IHZhbHVlID09PSAncnVubmluZycgfHwgdmFsdWUgPT09ICdwYXVzZWQnKVxuICAgIHJldHVybiB2YWx1ZVxuXG4gIHJldHVybiAnaWRsZSdcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplU2Vjb25kcyh2YWx1ZTogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInIHx8ICFOdW1iZXIuaXNGaW5pdGUodmFsdWUpKVxuICAgIHJldHVybiBmYWxsYmFja1xuXG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLmZsb29yKHZhbHVlKSlcbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQge1xuICBDQU5DRUxMRURfVEFTS19JTkRFWF9CQVNFTkFNRSxcbiAgQ0FOQ0VMTEVEX1RBU0tTX0ZPTERFUixcbiAgQ09NUExFVEVEX1RBU0tTX0ZPTERFUixcbiAgREVGQVVMVF9CT0FSRF9OQU1FLFxuICBGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FLFxuICBJTkRFWF9UQUcsXG4gIExFR0FDWV9DT01QTEVURURfVEFTS1NfRk9MREVSLFxuICBUQVJFQVNfRk9MREVSLFxuICBUQVNLX0lOREVYX0JBU0VOQU1FLFxufSBmcm9tICcuLi9jb25zdGFudHMnXG5cbmNvbnN0IFRBU0tfSU5ERVhfRklMRU5BTUUgPSBgJHtUQVNLX0lOREVYX0JBU0VOQU1FfS5tZGBcbmNvbnN0IFRBU0tfSU5ERVhfUEFUSCA9IGAke1RBUkVBU19GT0xERVJ9LyR7VEFTS19JTkRFWF9GSUxFTkFNRX1gXG5jb25zdCBGSU5JU0hFRF9UQVNLX0lOREVYX0ZJTEVOQU1FID0gYCR7RklOSVNIRURfVEFTS19JTkRFWF9CQVNFTkFNRX0ubWRgXG5jb25zdCBGSU5JU0hFRF9UQVNLX0lOREVYX1BBVEggPSBgJHtDT01QTEVURURfVEFTS1NfRk9MREVSfS8ke0ZJTklTSEVEX1RBU0tfSU5ERVhfRklMRU5BTUV9YFxuY29uc3QgQ0FOQ0VMTEVEX1RBU0tfSU5ERVhfRklMRU5BTUUgPSBgJHtDQU5DRUxMRURfVEFTS19JTkRFWF9CQVNFTkFNRX0ubWRgXG5jb25zdCBDQU5DRUxMRURfVEFTS19JTkRFWF9QQVRIID0gYCR7Q0FOQ0VMTEVEX1RBU0tTX0ZPTERFUn0vJHtDQU5DRUxMRURfVEFTS19JTkRFWF9GSUxFTkFNRX1gXG5jb25zdCBCT0FSRF9UQVNLX0lOREVYX1NVRkZJWCA9ICdUYXNrSW5kZXgnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnN1cmVUYXNrSW5kZXhGaWxlKGFwcDogb2JzaWRpYW4uQXBwKTogUHJvbWlzZTxvYnNpZGlhbi5URmlsZSB8IG51bGw+IHtcbiAgY29uc3QgaW5kZXhGaWxlID0gYXdhaXQgZW5zdXJlSW5kZXhGaWxlKGFwcCwgVEFSRUFTX0ZPTERFUiwgVEFTS19JTkRFWF9QQVRIKVxuICBpZiAoIWluZGV4RmlsZSlcbiAgICByZXR1cm4gbnVsbFxuXG4gIGF3YWl0IHN5bmNSb290VGFza0luZGV4TGlua3MoYXBwKVxuICByZXR1cm4gaW5kZXhGaWxlXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnN1cmVGaW5pc2hlZFRhc2tJbmRleEZpbGUoYXBwOiBvYnNpZGlhbi5BcHApOiBQcm9taXNlPG9ic2lkaWFuLlRGaWxlIHwgbnVsbD4ge1xuICByZXR1cm4gZW5zdXJlSW5kZXhGaWxlKGFwcCwgQ09NUExFVEVEX1RBU0tTX0ZPTERFUiwgRklOSVNIRURfVEFTS19JTkRFWF9QQVRIKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW5zdXJlQ2FuY2VsbGVkVGFza0luZGV4RmlsZShhcHA6IG9ic2lkaWFuLkFwcCk6IFByb21pc2U8b2JzaWRpYW4uVEZpbGUgfCBudWxsPiB7XG4gIHJldHVybiBlbnN1cmVJbmRleEZpbGUoYXBwLCBDQU5DRUxMRURfVEFTS1NfRk9MREVSLCBDQU5DRUxMRURfVEFTS19JTkRFWF9QQVRIKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBwZW5kVGFza0xpbmtUb0luZGV4KGFwcDogb2JzaWRpYW4uQXBwLCB0YXNrRmlsZTogb2JzaWRpYW4uVEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgYm9hcmROYW1lID0gcmVzb2x2ZUFjdGl2ZVRhc2tCb2FyZChhcHAsIHRhc2tGaWxlKVxuICBjb25zdCBib2FyZEluZGV4UGF0aCA9IGdldEJvYXJkVGFza0luZGV4UGF0aChib2FyZE5hbWUpXG4gIGF3YWl0IGFwcGVuZFRhc2tMaW5rVG9JbmRleEZpbGUoYXBwLCB0YXNrRmlsZSwgYm9hcmRJbmRleFBhdGgsICgpID0+IGVuc3VyZUJvYXJkVGFza0luZGV4RmlsZShhcHAsIGJvYXJkTmFtZSkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBlbmRUYXNrTGlua1RvRmluaXNoZWRJbmRleChhcHA6IG9ic2lkaWFuLkFwcCwgdGFza0ZpbGU6IG9ic2lkaWFuLlRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IGFwcGVuZFRhc2tMaW5rVG9JbmRleEZpbGUoYXBwLCB0YXNrRmlsZSwgRklOSVNIRURfVEFTS19JTkRFWF9QQVRILCAoKSA9PiBlbnN1cmVGaW5pc2hlZFRhc2tJbmRleEZpbGUoYXBwKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcGVuZFRhc2tMaW5rVG9DYW5jZWxsZWRJbmRleChhcHA6IG9ic2lkaWFuLkFwcCwgdGFza0ZpbGU6IG9ic2lkaWFuLlRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IGFwcGVuZFRhc2tMaW5rVG9JbmRleEZpbGUoYXBwLCB0YXNrRmlsZSwgQ0FOQ0VMTEVEX1RBU0tfSU5ERVhfUEFUSCwgKCkgPT4gZW5zdXJlQ2FuY2VsbGVkVGFza0luZGV4RmlsZShhcHApKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlVGFza0xpbmtGcm9tSW5kZXgoYXBwOiBvYnNpZGlhbi5BcHAsIHRhc2tGaWxlOiBvYnNpZGlhbi5URmlsZSk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBib2FyZE5hbWVzID0gYXdhaXQgZ2V0Qm9hcmRGb2xkZXJOYW1lcyhhcHApXG4gIGZvciAoY29uc3QgYm9hcmROYW1lIG9mIGJvYXJkTmFtZXMpXG4gICAgYXdhaXQgcmVtb3ZlVGFza0xpbmtGcm9tSW5kZXhGaWxlKGFwcCwgdGFza0ZpbGUsIGdldEJvYXJkVGFza0luZGV4UGF0aChib2FyZE5hbWUpKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlVGFza0xpbmtGcm9tRmluaXNoZWRJbmRleChhcHA6IG9ic2lkaWFuLkFwcCwgdGFza0ZpbGU6IG9ic2lkaWFuLlRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IHJlbW92ZVRhc2tMaW5rRnJvbUluZGV4RmlsZShhcHAsIHRhc2tGaWxlLCBGSU5JU0hFRF9UQVNLX0lOREVYX1BBVEgpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVUYXNrTGlua0Zyb21DYW5jZWxsZWRJbmRleChhcHA6IG9ic2lkaWFuLkFwcCwgdGFza0ZpbGU6IG9ic2lkaWFuLlRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IHJlbW92ZVRhc2tMaW5rRnJvbUluZGV4RmlsZShhcHAsIHRhc2tGaWxlLCBDQU5DRUxMRURfVEFTS19JTkRFWF9QQVRIKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm9hcmRUYXNrSW5kZXhCYXNlbmFtZShib2FyZE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVCb2FyZE5hbWUoYm9hcmROYW1lKVxuICByZXR1cm4gYCR7bm9ybWFsaXplZH0ke0JPQVJEX1RBU0tfSU5ERVhfU1VGRklYfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvYXJkVGFza0luZGV4UGF0aChib2FyZE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVCb2FyZE5hbWUoYm9hcmROYW1lKVxuICBjb25zdCBmaWxlTmFtZSA9IGAke2dldEJvYXJkVGFza0luZGV4QmFzZW5hbWUobm9ybWFsaXplZCl9Lm1kYFxuICByZXR1cm4gYCR7VEFSRUFTX0ZPTERFUn0vJHtub3JtYWxpemVkfS8ke2ZpbGVOYW1lfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQm9hcmRUYXNrSW5kZXhQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoIXBhdGguc3RhcnRzV2l0aChgJHtUQVJFQVNfRk9MREVSfS9gKSB8fCAhcGF0aC5lbmRzV2l0aCgnLm1kJykpXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAgY29uc3QgcmVsYXRpdmVQYXRoID0gcGF0aC5zbGljZShgJHtUQVJFQVNfRk9MREVSfS9gLmxlbmd0aClcbiAgY29uc3Qgc2VnbWVudHMgPSByZWxhdGl2ZVBhdGguc3BsaXQoJy8nKVxuICBpZiAoc2VnbWVudHMubGVuZ3RoICE9PSAyKVxuICAgIHJldHVybiBmYWxzZVxuXG4gIGNvbnN0IFtib2FyZE5hbWUsIGZpbGVOYW1lXSA9IHNlZ21lbnRzXG4gIGlmICghYm9hcmROYW1lKVxuICAgIHJldHVybiBmYWxzZVxuXG4gIGNvbnN0IGV4cGVjdGVkRmlsZU5hbWUgPSBgJHtnZXRCb2FyZFRhc2tJbmRleEJhc2VuYW1lKGJvYXJkTmFtZSl9Lm1kYFxuICByZXR1cm4gZmlsZU5hbWUgPT09IGV4cGVjdGVkRmlsZU5hbWVcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuc3VyZUJvYXJkVGFza0luZGV4RmlsZShhcHA6IG9ic2lkaWFuLkFwcCwgYm9hcmROYW1lOiBzdHJpbmcpOiBQcm9taXNlPG9ic2lkaWFuLlRGaWxlIHwgbnVsbD4ge1xuICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplQm9hcmROYW1lKGJvYXJkTmFtZSlcbiAgY29uc3QgZm9sZGVyUGF0aCA9IGAke1RBUkVBU19GT0xERVJ9LyR7bm9ybWFsaXplZH1gXG4gIGNvbnN0IGluZGV4UGF0aCA9IGdldEJvYXJkVGFza0luZGV4UGF0aChub3JtYWxpemVkKVxuICByZXR1cm4gZW5zdXJlSW5kZXhGaWxlKGFwcCwgZm9sZGVyUGF0aCwgaW5kZXhQYXRoKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3luY1Jvb3RUYXNrSW5kZXhMaW5rcyhhcHA6IG9ic2lkaWFuLkFwcCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCByb290SW5kZXggPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKFRBU0tfSU5ERVhfUEFUSClcbiAgaWYgKCEocm9vdEluZGV4IGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZpbGUpKVxuICAgIHJldHVyblxuXG4gIGNvbnN0IGJvYXJkTmFtZXMgPSBhd2FpdCBnZXRCb2FyZEZvbGRlck5hbWVzKGFwcClcbiAgY29uc3QgbGlua3MgPSBib2FyZE5hbWVzXG4gICAgLm1hcChib2FyZE5hbWUgPT4gYFtbJHtib2FyZE5hbWV9LyR7Z2V0Qm9hcmRUYXNrSW5kZXhCYXNlbmFtZShib2FyZE5hbWUpfV1dYClcbiAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKVxuXG4gIGNvbnN0IGRlZmF1bHRMaW5rID0gYFtbJHtERUZBVUxUX0JPQVJEX05BTUV9LyR7Z2V0Qm9hcmRUYXNrSW5kZXhCYXNlbmFtZShERUZBVUxUX0JPQVJEX05BTUUpfV1dYFxuICBjb25zdCBmaW5pc2hlZExpbmsgPSBgW1tmaW5pc2hlZC8ke0ZJTklTSEVEX1RBU0tfSU5ERVhfQkFTRU5BTUV9XV1gXG4gIGNvbnN0IGNhbmNlbGxlZExpbmsgPSBgW1tjYW5jZWxsZWQvJHtDQU5DRUxMRURfVEFTS19JTkRFWF9CQVNFTkFNRX1dXWBcbiAgY29uc3Qgb3JkZXJlZExpbmtzID0gW1xuICAgIGRlZmF1bHRMaW5rLFxuICAgIC4uLmxpbmtzLmZpbHRlcihsaW5rID0+IGxpbmsgIT09IGRlZmF1bHRMaW5rKSxcbiAgICBmaW5pc2hlZExpbmssXG4gICAgY2FuY2VsbGVkTGluayxcbiAgXVxuICBjb25zdCBuZXh0Q29udGVudCA9IGJ1aWxkSW5kZXhDb250ZW50KG9yZGVyZWRMaW5rcylcbiAgY29uc3QgY3VycmVudENvbnRlbnQgPSBhd2FpdCBhcHAudmF1bHQuY2FjaGVkUmVhZChyb290SW5kZXgpXG4gIGlmIChjdXJyZW50Q29udGVudCA9PT0gbmV4dENvbnRlbnQpXG4gICAgcmV0dXJuXG5cbiAgYXdhaXQgYXBwLnZhdWx0Lm1vZGlmeShyb290SW5kZXgsIG5leHRDb250ZW50KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3luY0JvYXJkVGFza0luZGV4TGlua3MoYXBwOiBvYnNpZGlhbi5BcHAsIGJvYXJkTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IG5vcm1hbGl6ZWRCb2FyZE5hbWUgPSBub3JtYWxpemVCb2FyZE5hbWUoYm9hcmROYW1lKVxuICBjb25zdCBib2FyZEZvbGRlclByZWZpeCA9IGAke1RBUkVBU19GT0xERVJ9LyR7bm9ybWFsaXplZEJvYXJkTmFtZX0vYFxuICBjb25zdCBib2FyZEluZGV4UGF0aCA9IGdldEJvYXJkVGFza0luZGV4UGF0aChub3JtYWxpemVkQm9hcmROYW1lKVxuICBjb25zdCBib2FyZEluZGV4ID0gYXdhaXQgZW5zdXJlQm9hcmRUYXNrSW5kZXhGaWxlKGFwcCwgbm9ybWFsaXplZEJvYXJkTmFtZSlcbiAgaWYgKCFib2FyZEluZGV4KVxuICAgIHJldHVyblxuXG4gIGNvbnN0IGxpbmtzID0gYXBwLnZhdWx0XG4gICAgLmdldE1hcmtkb3duRmlsZXMoKVxuICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLnBhdGguc3RhcnRzV2l0aChib2FyZEZvbGRlclByZWZpeCkpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUucGF0aCAhPT0gYm9hcmRJbmRleFBhdGgpXG4gICAgLmZpbHRlcihmaWxlID0+ICFpc0JvYXJkVGFza0luZGV4UGF0aChmaWxlLnBhdGgpKVxuICAgIC5tYXAoZmlsZSA9PiBgW1ske2ZpbGUuYmFzZW5hbWV9XV1gKVxuICAgIC5zb3J0KChhLCBiKSA9PiBhLmxvY2FsZUNvbXBhcmUoYikpXG5cbiAgY29uc3QgbmV4dENvbnRlbnQgPSBidWlsZEluZGV4Q29udGVudChsaW5rcylcbiAgY29uc3QgY3VycmVudENvbnRlbnQgPSBhd2FpdCBhcHAudmF1bHQuY2FjaGVkUmVhZChib2FyZEluZGV4KVxuICBpZiAoY3VycmVudENvbnRlbnQgPT09IG5leHRDb250ZW50KVxuICAgIHJldHVyblxuXG4gIGF3YWl0IGFwcC52YXVsdC5tb2RpZnkoYm9hcmRJbmRleCwgbmV4dENvbnRlbnQpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzeW5jQWxsQm9hcmRUYXNrSW5kZXhMaW5rcyhhcHA6IG9ic2lkaWFuLkFwcCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBib2FyZE5hbWVzID0gYXdhaXQgZ2V0Qm9hcmRGb2xkZXJOYW1lcyhhcHApXG4gIGZvciAoY29uc3QgYm9hcmROYW1lIG9mIGJvYXJkTmFtZXMpXG4gICAgYXdhaXQgc3luY0JvYXJkVGFza0luZGV4TGlua3MoYXBwLCBib2FyZE5hbWUpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzeW5jRmluaXNoZWRUYXNrSW5kZXhMaW5rcyhhcHA6IG9ic2lkaWFuLkFwcCk6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBzeW5jVGVybWluYWxUYXNrSW5kZXhMaW5rcyhhcHAsIENPTVBMRVRFRF9UQVNLU19GT0xERVIsIEZJTklTSEVEX1RBU0tfSU5ERVhfUEFUSCwgKCkgPT4gZW5zdXJlRmluaXNoZWRUYXNrSW5kZXhGaWxlKGFwcCkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzeW5jQ2FuY2VsbGVkVGFza0luZGV4TGlua3MoYXBwOiBvYnNpZGlhbi5BcHApOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgc3luY1Rlcm1pbmFsVGFza0luZGV4TGlua3MoYXBwLCBDQU5DRUxMRURfVEFTS1NfRk9MREVSLCBDQU5DRUxMRURfVEFTS19JTkRFWF9QQVRILCAoKSA9PiBlbnN1cmVDYW5jZWxsZWRUYXNrSW5kZXhGaWxlKGFwcCkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzeW5jQWxsVGFza0luZGV4ZXMoYXBwOiBvYnNpZGlhbi5BcHApOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgZW5zdXJlVGFza0luZGV4RmlsZShhcHApXG4gIGF3YWl0IGVuc3VyZUZpbmlzaGVkVGFza0luZGV4RmlsZShhcHApXG4gIGF3YWl0IGVuc3VyZUNhbmNlbGxlZFRhc2tJbmRleEZpbGUoYXBwKVxuICBhd2FpdCBzeW5jQWxsQm9hcmRUYXNrSW5kZXhMaW5rcyhhcHApXG4gIGF3YWl0IHN5bmNGaW5pc2hlZFRhc2tJbmRleExpbmtzKGFwcClcbiAgYXdhaXQgc3luY0NhbmNlbGxlZFRhc2tJbmRleExpbmtzKGFwcClcbiAgYXdhaXQgc3luY1Jvb3RUYXNrSW5kZXhMaW5rcyhhcHApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZUluZGV4RmlsZShcbiAgYXBwOiBvYnNpZGlhbi5BcHAsXG4gIGZvbGRlclBhdGg6IHN0cmluZyxcbiAgZmlsZVBhdGg6IHN0cmluZyxcbik6IFByb21pc2U8b2JzaWRpYW4uVEZpbGUgfCBudWxsPiB7XG4gIGNvbnN0IGZvbGRlciA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZm9sZGVyUGF0aClcbiAgaWYgKCEoZm9sZGVyIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZvbGRlcikpXG4gICAgcmV0dXJuIG51bGxcblxuICBjb25zdCBleGlzdGluZyA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZmlsZVBhdGgpXG4gIGlmIChleGlzdGluZyBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGaWxlKVxuICAgIHJldHVybiBleGlzdGluZ1xuXG4gIGlmIChleGlzdGluZylcbiAgICByZXR1cm4gbnVsbFxuXG4gIHRyeSB7XG4gICAgY29uc3QgaW5pdGlhbENvbnRlbnQgPSBbJy0tLScsIGB0YWdzOiBbJHtJTkRFWF9UQUd9XWAsICctLS0nLCAnJ10uam9pbignXFxuJylcbiAgICByZXR1cm4gYXdhaXQgYXBwLnZhdWx0LmNyZWF0ZShmaWxlUGF0aCwgaW5pdGlhbENvbnRlbnQpXG4gIH1cbiAgY2F0Y2gge1xuICAgIGNvbnN0IHJldHJ5ID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmaWxlUGF0aClcbiAgICByZXR1cm4gcmV0cnkgaW5zdGFuY2VvZiBvYnNpZGlhbi5URmlsZSA/IHJldHJ5IDogbnVsbFxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEJvYXJkRm9sZGVyTmFtZXMoYXBwOiBvYnNpZGlhbi5BcHApOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGNvbnN0IHJvb3RGb2xkZXIgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKFRBUkVBU19GT0xERVIpXG4gIGlmICghKHJvb3RGb2xkZXIgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKSlcbiAgICByZXR1cm4gW0RFRkFVTFRfQk9BUkRfTkFNRV1cblxuICBjb25zdCBib2FyZE5hbWVzID0gcm9vdEZvbGRlci5jaGlsZHJlblxuICAgIC5maWx0ZXIoKGNoaWxkKTogY2hpbGQgaXMgb2JzaWRpYW4uVEZvbGRlciA9PiBjaGlsZCBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGb2xkZXIpXG4gICAgLm1hcChmb2xkZXIgPT4gZm9sZGVyLm5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCkpXG4gICAgLmZpbHRlcihuYW1lID0+IEJvb2xlYW4obmFtZSlcbiAgICAgICYmIG5hbWUgIT09IENPTVBMRVRFRF9UQVNLU19GT0xERVIuc3BsaXQoJy8nKS5wb3AoKVxuICAgICAgJiYgbmFtZSAhPT0gQ0FOQ0VMTEVEX1RBU0tTX0ZPTERFUi5zcGxpdCgnLycpLnBvcCgpXG4gICAgICAmJiBuYW1lICE9PSBMRUdBQ1lfQ09NUExFVEVEX1RBU0tTX0ZPTERFUi5zcGxpdCgnLycpLnBvcCgpKVxuXG4gIGlmICghYm9hcmROYW1lcy5pbmNsdWRlcyhERUZBVUxUX0JPQVJEX05BTUUpKVxuICAgIGJvYXJkTmFtZXMucHVzaChERUZBVUxUX0JPQVJEX05BTUUpXG5cbiAgcmV0dXJuIGJvYXJkTmFtZXNcbn1cblxuYXN5bmMgZnVuY3Rpb24gYXBwZW5kVGFza0xpbmtUb0luZGV4RmlsZShcbiAgYXBwOiBvYnNpZGlhbi5BcHAsXG4gIHRhc2tGaWxlOiBvYnNpZGlhbi5URmlsZSxcbiAgaW5kZXhQYXRoOiBzdHJpbmcsXG4gIGVuc3VyZUluZGV4OiAoKSA9PiBQcm9taXNlPG9ic2lkaWFuLlRGaWxlIHwgbnVsbD4sXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKHRhc2tGaWxlLnBhdGggPT09IGluZGV4UGF0aClcbiAgICByZXR1cm5cblxuICBjb25zdCBpbmRleEZpbGUgPSBhd2FpdCBlbnN1cmVJbmRleCgpXG4gIGlmICghaW5kZXhGaWxlKVxuICAgIHJldHVyblxuXG4gIGNvbnN0IGxpbmtMaW5lID0gYFtbJHt0YXNrRmlsZS5iYXNlbmFtZX1dXWBcbiAgY29uc3QgY3VycmVudCA9IGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKGluZGV4RmlsZSlcbiAgY29uc3QgbGluZXMgPSBjdXJyZW50LnNwbGl0KCdcXG4nKS5tYXAobGluZSA9PiBsaW5lLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pXG4gIGlmIChsaW5lcy5pbmNsdWRlcyhsaW5rTGluZSkpXG4gICAgcmV0dXJuXG5cbiAgY29uc3Qgc2VwYXJhdG9yID0gY3VycmVudC5sZW5ndGggPiAwICYmICFjdXJyZW50LmVuZHNXaXRoKCdcXG4nKSA/ICdcXG4nIDogJydcbiAgY29uc3QgbmV4dCA9IGAke2N1cnJlbnR9JHtzZXBhcmF0b3J9JHtsaW5rTGluZX1cXG5gXG4gIGF3YWl0IGFwcC52YXVsdC5tb2RpZnkoaW5kZXhGaWxlLCBuZXh0KVxufVxuXG5hc3luYyBmdW5jdGlvbiByZW1vdmVUYXNrTGlua0Zyb21JbmRleEZpbGUoXG4gIGFwcDogb2JzaWRpYW4uQXBwLFxuICB0YXNrRmlsZTogb2JzaWRpYW4uVEZpbGUsXG4gIGluZGV4UGF0aDogc3RyaW5nLFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmICh0YXNrRmlsZS5wYXRoID09PSBpbmRleFBhdGgpXG4gICAgcmV0dXJuXG5cbiAgY29uc3QgaW5kZXhGaWxlID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChpbmRleFBhdGgpXG4gIGlmICghKGluZGV4RmlsZSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGaWxlKSlcbiAgICByZXR1cm5cblxuICBjb25zdCBsaW5rTGluZSA9IGBbWyR7dGFza0ZpbGUuYmFzZW5hbWV9XV1gXG4gIGNvbnN0IGxpbmVzID0gKGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKGluZGV4RmlsZSkpLnNwbGl0KCdcXG4nKVxuICBjb25zdCBmaWx0ZXJlZCA9IGxpbmVzLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBsaW5rTGluZSlcblxuICBpZiAoZmlsdGVyZWQubGVuZ3RoID09PSBsaW5lcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgY29uc3QgbmV4dCA9IGZpbHRlcmVkLmpvaW4oJ1xcbicpXG4gIGF3YWl0IGFwcC52YXVsdC5tb2RpZnkoaW5kZXhGaWxlLCBuZXh0KVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQWN0aXZlVGFza0JvYXJkKGFwcDogb2JzaWRpYW4uQXBwLCB0YXNrRmlsZTogb2JzaWRpYW4uVEZpbGUpOiBzdHJpbmcge1xuICBjb25zdCBmcm9udG1hdHRlciA9IGFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZSh0YXNrRmlsZSk/LmZyb250bWF0dGVyXG4gIGNvbnN0IHJhd0JvYXJkID0gdHlwZW9mIGZyb250bWF0dGVyPy50YWJsZXJvID09PSAnc3RyaW5nJ1xuICAgID8gZnJvbnRtYXR0ZXIudGFibGVyby50cmltKCkudG9Mb3dlckNhc2UoKVxuICAgIDogJydcbiAgaWYgKHJhd0JvYXJkKVxuICAgIHJldHVybiByYXdCb2FyZFxuXG4gIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHRhc2tGaWxlLnBhdGguc3RhcnRzV2l0aChgJHtUQVJFQVNfRk9MREVSfS9gKVxuICAgID8gdGFza0ZpbGUucGF0aC5zbGljZShgJHtUQVJFQVNfRk9MREVSfS9gLmxlbmd0aClcbiAgICA6ICcnXG4gIGNvbnN0IGJvYXJkRnJvbVBhdGggPSByZWxhdGl2ZVBhdGguc3BsaXQoJy8nKVswXT8udHJpbSgpLnRvTG93ZXJDYXNlKCkgfHwgJydcbiAgcmV0dXJuIG5vcm1hbGl6ZUJvYXJkTmFtZShib2FyZEZyb21QYXRoKVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVCb2FyZE5hbWUoYm9hcmROYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBub3JtYWxpemVkID0gYm9hcmROYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiBub3JtYWxpemVkIHx8IERFRkFVTFRfQk9BUkRfTkFNRVxufVxuXG5mdW5jdGlvbiBidWlsZEluZGV4Q29udGVudChsaW5lczogc3RyaW5nW10pOiBzdHJpbmcge1xuICByZXR1cm4gWyctLS0nLCBgdGFnczogWyR7SU5ERVhfVEFHfV1gLCAnLS0tJywgJycsIC4uLmxpbmVzLCAnJ10uam9pbignXFxuJylcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3luY1Rlcm1pbmFsVGFza0luZGV4TGlua3MoXG4gIGFwcDogb2JzaWRpYW4uQXBwLFxuICBmb2xkZXJQYXRoOiBzdHJpbmcsXG4gIGluZGV4UGF0aDogc3RyaW5nLFxuICBlbnN1cmVJbmRleDogKCkgPT4gUHJvbWlzZTxvYnNpZGlhbi5URmlsZSB8IG51bGw+LFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGluZGV4RmlsZSA9IGF3YWl0IGVuc3VyZUluZGV4KClcbiAgaWYgKCFpbmRleEZpbGUpXG4gICAgcmV0dXJuXG5cbiAgY29uc3QgbGlua3MgPSBhcHAudmF1bHRcbiAgICAuZ2V0TWFya2Rvd25GaWxlcygpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUucGF0aC5zdGFydHNXaXRoKGAke2ZvbGRlclBhdGh9L2ApKVxuICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLnBhdGggIT09IGluZGV4UGF0aClcbiAgICAubWFwKGZpbGUgPT4gYFtbJHtmaWxlLmJhc2VuYW1lfV1dYClcbiAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKVxuXG4gIGNvbnN0IG5leHRDb250ZW50ID0gYnVpbGRJbmRleENvbnRlbnQobGlua3MpXG4gIGNvbnN0IGN1cnJlbnRDb250ZW50ID0gYXdhaXQgYXBwLnZhdWx0LmNhY2hlZFJlYWQoaW5kZXhGaWxlKVxuICBpZiAoY3VycmVudENvbnRlbnQgPT09IG5leHRDb250ZW50KVxuICAgIHJldHVyblxuXG4gIGF3YWl0IGFwcC52YXVsdC5tb2RpZnkoaW5kZXhGaWxlLCBuZXh0Q29udGVudClcbn1cbiIsImltcG9ydCB0eXBlIHsgQXBwLCBURmlsZSB9IGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQge1xuICBDQU5DRUxMRURfVEFTS19JTkRFWF9CQVNFTkFNRSxcbiAgRklOSVNIRURfVEFTS19JTkRFWF9CQVNFTkFNRSxcbiAgSU5ERVhfVEFHLFxuICBTVUJUQVNLX1RBRyxcbiAgVEFSRUFTX0ZPTERFUixcbiAgVEFTS19JTkRFWF9CQVNFTkFNRSxcbiAgVEFTS19UQUcsXG59IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB7IGlzQm9hcmRUYXNrSW5kZXhQYXRoIH0gZnJvbSAnLi90YXNrSW5kZXhFbmdpbmUnXG5pbXBvcnQgdHlwZSB7IFRhc2tGcm9udG1hdHRlciB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgdG9UYXNrRnJvbnRtYXR0ZXIgfSBmcm9tICcuLi91dGlscy9ndWFyZHMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVGcm9udG1hdHRlcihhcHA6IEFwcCwgZmlsZTogVEZpbGUsIHVwZGF0ZXM6IFBhcnRpYWw8VGFza0Zyb250bWF0dGVyPikge1xuICBhd2FpdCBhcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKGZpbGUsIChmbSkgPT4ge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHVwZGF0ZXMpKVxuICAgICAgZm1ba2V5XSA9IHZhbHVlXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5hbWVUZWFtSW5UYXNrcyhhcHA6IEFwcCwgb2xkTmFtZTogc3RyaW5nLCBuZXdOYW1lOiBzdHJpbmcsIGJvYXJkTmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IGZpbGVzID0gYXBwLnZhdWx0XG4gICAgLmdldE1hcmtkb3duRmlsZXMoKVxuICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLnBhdGguc3RhcnRzV2l0aChgJHtUQVJFQVNfRk9MREVSfS9gKSlcblxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBmbSA9IHRvVGFza0Zyb250bWF0dGVyKGFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKT8uZnJvbnRtYXR0ZXIpXG4gICAgaWYgKGZtPy5lcXVpcG8gIT09IG9sZE5hbWUgfHwgKGZtPy50YWJsZXJvIHx8ICcnKS50cmltKCkudG9Mb3dlckNhc2UoKSAhPT0gYm9hcmROYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgY29udGludWVcblxuICAgIGF3YWl0IGFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIoZmlsZSwgKGZyb250bWF0dGVyKSA9PiB7XG4gICAgICBmcm9udG1hdHRlci5lcXVpcG8gPSBuZXdOYW1lXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY291bnRUb3BMZXZlbFRlYW1UYXNrcyhhcHA6IEFwcCwgdGVhbU5hbWU6IHN0cmluZywgYm9hcmROYW1lOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBmaWxlcyA9IGFwcC52YXVsdFxuICAgIC5nZXRNYXJrZG93bkZpbGVzKClcbiAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5wYXRoLnN0YXJ0c1dpdGgoYCR7VEFSRUFTX0ZPTERFUn0vYCkpXG5cbiAgbGV0IGNvdW50ID0gMFxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBmbSA9IHRvVGFza0Zyb250bWF0dGVyKGFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKT8uZnJvbnRtYXR0ZXIpXG4gICAgaWYgKGZtPy5lcXVpcG8gPT09IHRlYW1OYW1lXG4gICAgICAmJiAoZm0/LnRhYmxlcm8gfHwgJycpLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBib2FyZE5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICAgICYmICFmbT8ucGFyZW50KVxuICAgICAgY291bnQrK1xuICB9XG5cbiAgcmV0dXJuIGNvdW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWJ1aWxkVGFza0NoaWxkTGlua3MoYXBwOiBBcHApIHtcbiAgY29uc3QgZmlsZXMgPSBhcHAudmF1bHRcbiAgICAuZ2V0TWFya2Rvd25GaWxlcygpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUucGF0aC5zdGFydHNXaXRoKGAke1RBUkVBU19GT0xERVJ9L2ApKVxuICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLmJhc2VuYW1lICE9PSBUQVNLX0lOREVYX0JBU0VOQU1FXG4gICAgICAmJiBmaWxlLmJhc2VuYW1lICE9PSBGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FXG4gICAgICAmJiBmaWxlLmJhc2VuYW1lICE9PSBDQU5DRUxMRURfVEFTS19JTkRFWF9CQVNFTkFNRSlcblxuICBjb25zdCBjaGlsZE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBTZXQ8c3RyaW5nPj4oKVxuICBjb25zdCB0YXNrRW50cmllczogQXJyYXk8eyBmaWxlOiBURmlsZSwgdGFza05hbWU6IHN0cmluZyB9PiA9IFtdXG5cbiAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgY29uc3QgZm0gPSBhd2FpdCByZWFkVGFza0Zyb250bWF0dGVyKGFwcCwgZmlsZSlcbiAgICBpZiAoIWZtKVxuICAgICAgY29udGludWVcblxuICAgIGNvbnN0IHRhc2tOYW1lID0gKGZtPy50YXJlYT8udHJpbSgpIHx8IGZpbGUuYmFzZW5hbWUpLnRyaW0oKVxuICAgIHRhc2tFbnRyaWVzLnB1c2goeyBmaWxlLCB0YXNrTmFtZSB9KVxuXG4gICAgY29uc3QgcGFyZW50TmFtZSA9IG5vcm1hbGl6ZVBhcmVudFJlZmVyZW5jZShmbT8ucGFyZW50KVxuICAgIGlmICghcGFyZW50TmFtZSlcbiAgICAgIGNvbnRpbnVlXG5cbiAgICBjb25zdCBjaGlsZFNldCA9IGNoaWxkTWFwLmdldChwYXJlbnROYW1lKSA/PyBuZXcgU2V0PHN0cmluZz4oKVxuICAgIGNoaWxkU2V0LmFkZChmaWxlLmJhc2VuYW1lKVxuICAgIGNoaWxkTWFwLnNldChwYXJlbnROYW1lLCBjaGlsZFNldClcbiAgfVxuXG4gIGZvciAoY29uc3QgZW50cnkgb2YgdGFza0VudHJpZXMpIHtcbiAgICBjb25zdCB7IGZpbGUsIHRhc2tOYW1lIH0gPSBlbnRyeVxuICAgIGNvbnN0IGNoaWxkQmFzZW5hbWVzID0gbmV3IFNldDxzdHJpbmc+KFtcbiAgICAgIC4uLihjaGlsZE1hcC5nZXQoZmlsZS5iYXNlbmFtZSkgPz8gW10pLFxuICAgICAgLi4uKGNoaWxkTWFwLmdldCh0YXNrTmFtZSkgPz8gW10pLFxuICAgIF0pXG4gICAgY2hpbGRCYXNlbmFtZXMuZGVsZXRlKGZpbGUuYmFzZW5hbWUpXG5cbiAgICBjb25zdCBuZXh0Q2hpbGRMaW5rcyA9IEFycmF5LmZyb20oY2hpbGRCYXNlbmFtZXMpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKVxuICAgICAgLm1hcChuYW1lID0+IGBbWyR7bmFtZX1dXWApXG5cbiAgICBhd2FpdCBhcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKGZpbGUsIChmbSkgPT4ge1xuICAgICAgZm0uY2hpbGRzID0gbmV4dENoaWxkTGlua3NcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzeW5jVGFza1R5cGVUYWdzKGFwcDogQXBwKSB7XG4gIGNvbnN0IGZpbGVzID0gYXBwLnZhdWx0XG4gICAgLmdldE1hcmtkb3duRmlsZXMoKVxuICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLnBhdGguc3RhcnRzV2l0aChgJHtUQVJFQVNfRk9MREVSfS9gKSlcblxuICBjb25zdCBjbGFzc2lmaWNhdGlvblRhZ3MgPSBuZXcgU2V0KFtJTkRFWF9UQUcsIFRBU0tfVEFHLCBTVUJUQVNLX1RBR10pXG4gIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgIGNvbnN0IG5leHRDbGFzc2lmaWNhdGlvbiA9IHJlc29sdmVDbGFzc2lmaWNhdGlvblRhZyhmaWxlKVxuXG4gICAgYXdhaXQgYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcihmaWxlLCAoZnJvbnRtYXR0ZXIpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUYWdzID0gbm9ybWFsaXplVGFncyhmcm9udG1hdHRlci50YWdzKVxuICAgICAgY29uc3QgcHJlc2VydmVkVGFncyA9IGN1cnJlbnRUYWdzLmZpbHRlcih0YWcgPT4gIWNsYXNzaWZpY2F0aW9uVGFncy5oYXModGFnKSlcbiAgICAgIGZyb250bWF0dGVyLnRhZ3MgPSBbLi4ucHJlc2VydmVkVGFncywgbmV4dENsYXNzaWZpY2F0aW9uXVxuICAgIH0pXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVhZFRhc2tGcm9udG1hdHRlcihhcHA6IEFwcCwgZmlsZTogVEZpbGUpOiBQcm9taXNlPFRhc2tGcm9udG1hdHRlciB8IG51bGw+IHtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKGZpbGUpXG4gIGNvbnN0IG1hdGNoID0gY29udGVudC5tYXRjaCgvXi0tLVxccj9cXG4oW1xcc1xcU10qPylcXHI/XFxuLS0tLylcbiAgaWYgKCFtYXRjaClcbiAgICByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHJhd1lhbWwgPSBtYXRjaFsxXVxuICBjb25zdCBmcm9udG1hdHRlckRhdGEgPSBwYXJzZVNpbXBsZVlhbWwocmF3WWFtbClcbiAgcmV0dXJuIHRvVGFza0Zyb250bWF0dGVyKGZyb250bWF0dGVyRGF0YSlcbn1cblxuZnVuY3Rpb24gcGFyc2VTaW1wbGVZYW1sKHlhbWxUZXh0OiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIGNvbnN0IHJlc3VsdDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fVxuICBjb25zdCBsaW5lcyA9IHlhbWxUZXh0LnNwbGl0KC9cXHI/XFxuLylcbiAgbGV0IGluZGV4ID0gMFxuXG4gIHdoaWxlIChpbmRleCA8IGxpbmVzLmxlbmd0aCkge1xuICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpbmRleF1cbiAgICBpZiAoIWxpbmUudHJpbSgpKSB7XG4gICAgICBpbmRleCsrXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IGtleVZhbHVlTWF0Y2ggPSBsaW5lLm1hdGNoKC9eKFtBLVphLXowLTlfLV0rKTpcXHMqKC4qKSQvKVxuICAgIGlmICgha2V5VmFsdWVNYXRjaCkge1xuICAgICAgaW5kZXgrK1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBbLCBrZXksIHJhd1ZhbHVlXSA9IGtleVZhbHVlTWF0Y2hcbiAgICBjb25zdCB0cmltbWVkVmFsdWUgPSByYXdWYWx1ZS50cmltKClcblxuICAgIGlmICh0cmltbWVkVmFsdWUgPT09ICcnKSB7XG4gICAgICByZXN1bHRba2V5XSA9ICcnXG4gICAgICBpbmRleCsrXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmICh0cmltbWVkVmFsdWUgPT09ICdbXScpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gW11cbiAgICAgIGluZGV4KytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKHRyaW1tZWRWYWx1ZS5zdGFydHNXaXRoKCdbJykgJiYgdHJpbW1lZFZhbHVlLmVuZHNXaXRoKCddJykpIHtcbiAgICAgIGNvbnN0IGlubmVyID0gdHJpbW1lZFZhbHVlLnNsaWNlKDEsIC0xKS50cmltKClcbiAgICAgIGlmICghaW5uZXIpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBbXVxuICAgICAgICBpbmRleCsrXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHJlc3VsdFtrZXldID0gaW5uZXIuc3BsaXQoJywnKS5tYXAoaXRlbSA9PiB1bnF1b3RlWWFtbFZhbHVlKGl0ZW0udHJpbSgpKSlcbiAgICAgIGluZGV4KytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKHRyaW1tZWRWYWx1ZSA9PT0gJ3wnKSB7XG4gICAgICBjb25zdCBibG9ja0xpbmVzOiBzdHJpbmdbXSA9IFtdXG4gICAgICBpbmRleCsrXG4gICAgICB3aGlsZSAoaW5kZXggPCBsaW5lcy5sZW5ndGggJiYgL15cXHMrLy50ZXN0KGxpbmVzW2luZGV4XSkpIHtcbiAgICAgICAgYmxvY2tMaW5lcy5wdXNoKGxpbmVzW2luZGV4XS5yZXBsYWNlKC9eXFxzKy8sICcnKSlcbiAgICAgICAgaW5kZXgrK1xuICAgICAgfVxuICAgICAgcmVzdWx0W2tleV0gPSBibG9ja0xpbmVzLmpvaW4oJ1xcbicpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHJlc3VsdFtrZXldID0gdW5xdW90ZVlhbWxWYWx1ZSh0cmltbWVkVmFsdWUpXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiB1bnF1b3RlWWFtbFZhbHVlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnXCInKSAmJiB2YWx1ZS5lbmRzV2l0aCgnXCInKSlcbiAgICByZXR1cm4gdmFsdWUuc2xpY2UoMSwgLTEpLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuXG4gIGlmICh2YWx1ZS5zdGFydHNXaXRoKCdcXCcnKSAmJiB2YWx1ZS5lbmRzV2l0aCgnXFwnJykpXG4gICAgcmV0dXJuIHZhbHVlLnNsaWNlKDEsIC0xKVxuXG4gIHJldHVybiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQYXJlbnRSZWZlcmVuY2UocGFyZW50VmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gIGNvbnN0IHRyaW1tZWQgPSAocGFyZW50VmFsdWUgfHwgJycpLnRyaW0oKVxuICBpZiAoIXRyaW1tZWQpXG4gICAgcmV0dXJuICcnXG5cbiAgY29uc3QgbGlua01hdGNoID0gdHJpbW1lZC5tYXRjaCgvXlxcW1xcWyguKz8pXFxdXFxdJC8pXG4gIGNvbnN0IHJhd1JlZmVyZW5jZSA9IChsaW5rTWF0Y2ggPyBsaW5rTWF0Y2hbMV0gOiB0cmltbWVkKS50cmltKClcbiAgY29uc3Qgd2l0aG91dEFsaWFzID0gcmF3UmVmZXJlbmNlLnNwbGl0KCd8JylbMF0udHJpbSgpXG4gIGNvbnN0IHdpdGhvdXRIZWFkaW5nID0gd2l0aG91dEFsaWFzLnNwbGl0KCcjJylbMF0udHJpbSgpXG4gIGNvbnN0IGJhc2VuYW1lID0gd2l0aG91dEhlYWRpbmcuc3BsaXQoJy8nKS5wb3AoKSA/PyB3aXRob3V0SGVhZGluZ1xuICByZXR1cm4gYmFzZW5hbWUucmVwbGFjZSgvXFwubWQkL2ksICcnKS50cmltKClcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUNsYXNzaWZpY2F0aW9uVGFnKGZpbGU6IFRGaWxlKTogc3RyaW5nIHtcbiAgaWYgKGZpbGUuYmFzZW5hbWUgPT09IFRBU0tfSU5ERVhfQkFTRU5BTUVcbiAgICB8fCBmaWxlLmJhc2VuYW1lID09PSBGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FXG4gICAgfHwgZmlsZS5iYXNlbmFtZSA9PT0gQ0FOQ0VMTEVEX1RBU0tfSU5ERVhfQkFTRU5BTUVcbiAgICB8fCBpc0JvYXJkVGFza0luZGV4UGF0aChmaWxlLnBhdGgpKVxuICAgIHJldHVybiBJTkRFWF9UQUdcblxuICBpZiAoZmlsZS5wYXRoLmluY2x1ZGVzKCcvc3ViVGFza3MvJykpXG4gICAgcmV0dXJuIFNVQlRBU0tfVEFHXG5cbiAgcmV0dXJuIFRBU0tfVEFHXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVRhZ3ModmFsdWU6IHVua25vd24pOiBzdHJpbmdbXSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSlcbiAgICByZXR1cm4gdmFsdWUuZmlsdGVyKChpdGVtKTogaXRlbSBpcyBzdHJpbmcgPT4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKS5tYXAobm9ybWFsaXplVGFnVmFsdWUpLmZpbHRlcihCb29sZWFuKVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVRhZ1ZhbHVlKHZhbHVlKVxuICAgIHJldHVybiBub3JtYWxpemVkID8gW25vcm1hbGl6ZWRdIDogW11cbiAgfVxuXG4gIHJldHVybiBbXVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVUYWdWYWx1ZSh0YWc6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB0YWcucmVwbGFjZSgvXiMvLCAnJykudHJpbSgpXG59XG4iLCJjb25zdCBFU1RBRE9fQUxJQVNFUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgY2FuY2VsYWRhOiAnQ2FuY2VsYWRhJyxcbiAgY2FuY2VsYWRvOiAnQ2FuY2VsYWRhJyxcbiAgZGVzZXN0aW1hZGE6ICdDYW5jZWxhZGEnLFxuICBkZXNlc3RpbWFkbzogJ0NhbmNlbGFkYScsXG4gICdlbiBwcm9ncmVzbyc6ICdFbiBwcm9ncmVzbycsXG4gIHBlbmRpZW50ZTogJ1BlbmRpZW50ZScsXG4gIGZpbmFsaXphZGE6ICdGaW5hbGl6YWRhJyxcbiAgZmluYWxpemFkbzogJ0ZpbmFsaXphZGEnLFxuICBjb21wbGV0YWRhOiAnRmluYWxpemFkYScsXG4gIGNvbXBsZXRhZG86ICdGaW5hbGl6YWRhJyxcbiAgYmxvcXVlYWRhOiAnQmxvcXVlYWRhJyxcbiAgYmxvcXVlYWRvOiAnQmxvcXVlYWRhJyxcbiAgdXJnZW50ZTogJ1BlbmRpZW50ZScsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVFc3RhZG8odmFsdWU/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIXZhbHVlKVxuICAgIHJldHVybiAnUGVuZGllbnRlJ1xuXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSB2YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICByZXR1cm4gRVNUQURPX0FMSUFTRVNbbm9ybWFsaXplZF0gPz8gJ1BlbmRpZW50ZSdcbn1cbiIsImltcG9ydCB0eXBlIHsgQXBwLCBURmlsZSB9IGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQge1xuICBERUZBVUxUX0JPQVJEX05BTUUsXG4gIENBTkNFTExFRF9TVUJUQVNLU19GT0xERVIsXG4gIENBTkNFTExFRF9UQVNLX0lOREVYX0JBU0VOQU1FLFxuICBDQU5DRUxMRURfVEFTS1NfRk9MREVSLFxuICBDT01QTEVURURfU1VCVEFTS1NfRk9MREVSLFxuICBDT01QTEVURURfVEFTS1NfRk9MREVSLFxuICBGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FLFxuICBMRUdBQ1lfQ09NUExFVEVEX1RBU0tTX0ZPTERFUixcbiAgU1VCVEFTS19UQUcsXG4gIFRBU0tfSU5ERVhfQkFTRU5BTUUsXG4gIFRBU0tfVEFHLFxuICBPUkRFUl9TVEVQLFxuICBUQVJFQVNfRk9MREVSLFxufSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBpc0JvYXJkVGFza0luZGV4UGF0aCB9IGZyb20gJy4vdGFza0luZGV4RW5naW5lJ1xuaW1wb3J0IHR5cGUgeyBFcXVpcG8sIFRhc2tGb3JtRGF0YSwgVGFza0Zyb250bWF0dGVyLCBUYXNrSXRlbSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgdG9UYXNrRnJvbnRtYXR0ZXIgfSBmcm9tICcuLi91dGlscy9ndWFyZHMnXG5pbXBvcnQgeyBub3JtYWxpemVFc3RhZG8gfSBmcm9tICcuLi91dGlscy9zdGF0dXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrRmlsZXMoYXBwOiBBcHApIHtcbiAgcmV0dXJuIGFwcC52YXVsdFxuICAgIC5nZXRNYXJrZG93bkZpbGVzKClcbiAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5wYXRoLnN0YXJ0c1dpdGgoYCR7VEFSRUFTX0ZPTERFUn0vYCkpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUuYmFzZW5hbWUgIT09IFRBU0tfSU5ERVhfQkFTRU5BTUVcbiAgICAgICYmIGZpbGUuYmFzZW5hbWUgIT09IEZJTklTSEVEX1RBU0tfSU5ERVhfQkFTRU5BTUVcbiAgICAgICYmIGZpbGUuYmFzZW5hbWUgIT09IENBTkNFTExFRF9UQVNLX0lOREVYX0JBU0VOQU1FXG4gICAgICAmJiAhaXNCb2FyZFRhc2tJbmRleFBhdGgoZmlsZS5wYXRoKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGFza0luRmluaXNoZWRGb2xkZXIocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoLnN0YXJ0c1dpdGgoYCR7Q09NUExFVEVEX1RBU0tTX0ZPTERFUn0vYClcbiAgICB8fCBwYXRoLnN0YXJ0c1dpdGgoYCR7Q09NUExFVEVEX1NVQlRBU0tTX0ZPTERFUn0vYClcbiAgICB8fCBwYXRoLnN0YXJ0c1dpdGgoYCR7TEVHQUNZX0NPTVBMRVRFRF9UQVNLU19GT0xERVJ9L2ApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Rhc2tJbkNhbmNlbGxlZEZvbGRlcihwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGguc3RhcnRzV2l0aChgJHtDQU5DRUxMRURfVEFTS1NfRk9MREVSfS9gKVxuICAgIHx8IHBhdGguc3RhcnRzV2l0aChgJHtDQU5DRUxMRURfU1VCVEFTS1NfRk9MREVSfS9gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUYXNrSW5Db21wbGV0ZWRGb2xkZXIocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc1Rhc2tJbkZpbmlzaGVkRm9sZGVyKHBhdGgpIHx8IGlzVGFza0luQ2FuY2VsbGVkRm9sZGVyKHBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrcyhhcHA6IEFwcCk6IFRhc2tJdGVtW10ge1xuICBjb25zdCB0YXNrczogVGFza0l0ZW1bXSA9IFtdXG5cbiAgZm9yIChjb25zdCBmaWxlIG9mIGdldFRhc2tGaWxlcyhhcHApKSB7XG4gICAgY29uc3QgZm0gPSBnZXRUYXNrRnJvbnRtYXR0ZXIoYXBwLCBmaWxlKVxuICAgIGlmICghZm0pXG4gICAgICBjb250aW51ZVxuXG4gICAgdGFza3MucHVzaCh7XG4gICAgICBmaWxlLFxuICAgICAgdGFyZWE6IGZtLnRhcmVhID8/IGZpbGUuYmFzZW5hbWUsXG4gICAgICBkZXRhbGxlOiBmbS5kZXRhbGxlID8/ICcnLFxuICAgICAgZXN0YWRvOiBub3JtYWxpemVFc3RhZG8oZm0uZXN0YWRvKSxcbiAgICAgIGZlY2hhSW5pY2lvOiBmbS5mZWNoYUluaWNpbyA/PyAnJyxcbiAgICAgIGZlY2hhRmluOiBmbS5mZWNoYUZpbiA/PyAnJyxcbiAgICAgIHRhYmxlcm86IHJlc29sdmVUYXNrQm9hcmQoZmlsZS5wYXRoLCBmbSksXG4gICAgICBlcXVpcG86IGZtLmVxdWlwbyA/PyAnJyxcbiAgICAgIHByaW9yaWRhZDogZm0ucHJpb3JpZGFkID8/ICcnLFxuICAgICAgZGVkaWNhZG86IE51bWJlcihmbS5kZWRpY2FkbykgfHwgMCxcbiAgICAgIGVzdGltYWNpb246IE51bWJlcihmbS5lc3RpbWFjaW9uKSB8fCAwLFxuICAgICAgZGVzdmlvOiBOdW1iZXIoZm0uZGVzdmlvKSB8fCAwLFxuICAgICAgcGFyZW50OiBub3JtYWxpemVQYXJlbnRUYXNrTmFtZShmbS5wYXJlbnQgPz8gJycpLFxuICAgICAgb3JkZXI6IE51bWJlcihmbS5vcmRlcikgPz8gOTk5OTk5LFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gdGFza3Ncbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwVG9wTGV2ZWxUYXNrcyh0YXNrczogVGFza0l0ZW1bXSwgZXF1aXBvczogRXF1aXBvW10pIHtcbiAgY29uc3QgZ3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUYXNrSXRlbVtdPiA9IHt9XG5cbiAgZm9yIChjb25zdCBlcXVpcG8gb2YgZXF1aXBvcylcbiAgICBncm91cHNbZXF1aXBvLm5hbWVdID0gW11cblxuICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpIHtcbiAgICBpZiAodGFzay5wYXJlbnQpXG4gICAgICBjb250aW51ZVxuXG4gICAgY29uc3QgZ3JvdXBOYW1lID0gdGFzay5lcXVpcG8gfHwgJ1NpbiBncnVwbydcbiAgICBpZiAoIWdyb3Vwc1tncm91cE5hbWVdKVxuICAgICAgZ3JvdXBzW2dyb3VwTmFtZV0gPSBbXVxuXG4gICAgZ3JvdXBzW2dyb3VwTmFtZV0ucHVzaCh0YXNrKVxuICB9XG5cbiAgcmV0dXJuIGdyb3Vwc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUYXNrQ29udGVudChkYXRhOiBUYXNrRm9ybURhdGEsIG9yZGVyOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBzYWZlVGl0bGUgPSBkYXRhLnRhcmVhLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuICBjb25zdCBzYWZlRGV0YWlsID0gZGF0YS5kZXRhbGxlLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuICBjb25zdCBzYWZlRW5kRGF0ZSA9IGRhdGEuZmVjaGFGaW4ucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpXG4gIGNvbnN0IHNhZmVQYXJlbnRUYXNrID0gZGF0YS5wYXJlbnQudHJpbSgpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuICBjb25zdCBwYXJlbnRMaW5rID0gc2FmZVBhcmVudFRhc2sgPyBgW1ske3NhZmVQYXJlbnRUYXNrfV1dYCA6ICcnXG4gIGNvbnN0IHRhc2tUYWcgPSBzYWZlUGFyZW50VGFzayA/IFNVQlRBU0tfVEFHIDogVEFTS19UQUdcblxuICByZXR1cm4gW1xuICAgICctLS0nLFxuICAgIGB0YXJlYTogXCIke3NhZmVUaXRsZX1cImAsXG4gICAgYGRldGFsbGU6IFwiJHtzYWZlRGV0YWlsfVwiYCxcbiAgICBgZXN0YWRvOiBcIiR7ZGF0YS5lc3RhZG99XCJgLFxuICAgICdmZWNoYUluaWNpbzogXCJcIicsXG4gICAgYGZlY2hhRmluOiBcIiR7c2FmZUVuZERhdGV9XCJgLFxuICAgIGB0YWJsZXJvOiBcIiR7ZGF0YS50YWJsZXJvfVwiYCxcbiAgICBgZXF1aXBvOiBcIiR7ZGF0YS5lcXVpcG99XCJgLFxuICAgIGBwcmlvcmlkYWQ6IFwiJHtkYXRhLnByaW9yaWRhZH1cImAsXG4gICAgJ2RlZGljYWRvOiAwJyxcbiAgICBgZXN0aW1hY2lvbjogJHtkYXRhLmVzdGltYWNpb259YCxcbiAgICAnZGVzdmlvOiAwJyxcbiAgICBgcGFyZW50OiBcIiR7cGFyZW50TGlua31cImAsXG4gICAgJ2NoaWxkczogW10nLFxuICAgIGB0YWdzOiBbJHt0YXNrVGFnfV1gLFxuICAgIGBvcmRlcjogJHtvcmRlcn1gLFxuICAgICctLS0nLFxuICAgICcnLFxuICAgIGRhdGEuZGV0YWxsZSB8fCAnJyxcbiAgICAnJyxcbiAgXS5qb2luKCdcXG4nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZU5ld1Rhc2tPcmRlcihhcHA6IEFwcCwgZGF0YTogVGFza0Zvcm1EYXRhKTogbnVtYmVyIHtcbiAgY29uc3QgZ29lc1RvcCA9IGRhdGEuZXN0YWRvID09PSAnRW4gcHJvZ3Jlc28nIHx8IGRhdGEucHJpb3JpZGFkID09PSAnVXJnZW50ZSdcblxuICBpZiAoZGF0YS5wYXJlbnQpXG4gICAgcmV0dXJuIE9SREVSX1NURVBcblxuICBjb25zdCBzaWJsaW5nT3JkZXJzID0gZ2V0VGFza0ZpbGVzKGFwcClcbiAgICAubWFwKGZpbGUgPT4gZ2V0VGFza0Zyb250bWF0dGVyKGFwcCwgZmlsZSkpXG4gICAgLmZpbHRlcigoZm0pOiBmbSBpcyBUYXNrRnJvbnRtYXR0ZXIgPT4gQm9vbGVhbihmbSkpXG4gICAgLmZpbHRlcigoZm0pID0+IHtcbiAgICAgIGlmIChmbS5wYXJlbnQpXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgICBjb25zdCBib2FyZE5hbWUgPSBub3JtYWxpemVCb2FyZE5hbWUoZm0udGFibGVybyB8fCAnJylcbiAgICAgIGNvbnN0IGdyb3VwTmFtZSA9IChmbS5lcXVpcG8gfHwgJycpLnRyaW0oKVxuICAgICAgcmV0dXJuIGJvYXJkTmFtZSA9PT0gbm9ybWFsaXplQm9hcmROYW1lKGRhdGEudGFibGVybykgJiYgZ3JvdXBOYW1lID09PSBkYXRhLmVxdWlwb1xuICAgIH0pXG4gICAgLm1hcChmbSA9PiBOdW1iZXIoZm0ub3JkZXIpIHx8IDApXG5cbiAgaWYgKHNpYmxpbmdPcmRlcnMubGVuZ3RoID09PSAwKVxuICAgIHJldHVybiBPUkRFUl9TVEVQXG5cbiAgcmV0dXJuIGdvZXNUb3BcbiAgICA/IE1hdGgubWluKC4uLnNpYmxpbmdPcmRlcnMpIC0gT1JERVJfU1RFUFxuICAgIDogTWF0aC5tYXgoLi4uc2libGluZ09yZGVycykgKyBPUkRFUl9TVEVQXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlVGFza1BhdGgoYXBwOiBBcHAsIHRhc2tOYW1lOiBzdHJpbmcsIGJvYXJkTmFtZTogc3RyaW5nLCBwYXJlbnRUYXNrTmFtZSA9ICcnKTogc3RyaW5nIHtcbiAgY29uc3QgZm9sZGVyUGF0aCA9IHBhcmVudFRhc2tOYW1lLnRyaW0oKVxuICAgID8gZ2V0Qm9hcmRTdWJ0YXNrc0ZvbGRlcihib2FyZE5hbWUpXG4gICAgOiBnZXRCb2FyZEZvbGRlcihib2FyZE5hbWUpXG4gIGNvbnN0IGJhc2VQYXRoID0gYCR7Zm9sZGVyUGF0aH0vJHt0YXNrTmFtZX0ubWRgXG4gIGlmICghYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChiYXNlUGF0aCkpXG4gICAgcmV0dXJuIGJhc2VQYXRoXG5cbiAgcmV0dXJuIGAke2ZvbGRlclBhdGh9LyR7dGFza05hbWV9ICR7RGF0ZS5ub3coKX0ubWRgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCb2FyZEZvbGRlcihib2FyZE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtUQVJFQVNfRk9MREVSfS8ke25vcm1hbGl6ZUJvYXJkTmFtZShib2FyZE5hbWUpfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvYXJkU3VidGFza3NGb2xkZXIoYm9hcmROYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7Z2V0Qm9hcmRGb2xkZXIoYm9hcmROYW1lKX0vc3ViVGFza3NgXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVUYXNrQm9hcmQocGF0aDogc3RyaW5nLCBmbTogVGFza0Zyb250bWF0dGVyKTogc3RyaW5nIHtcbiAgY29uc3QgcmF3RnJvbUZyb250bWF0dGVyID0gKGZtLnRhYmxlcm8gfHwgJycpLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gIGlmIChyYXdGcm9tRnJvbnRtYXR0ZXIpXG4gICAgcmV0dXJuIHJhd0Zyb21Gcm9udG1hdHRlclxuXG4gIGNvbnN0IHJvb3RQcmVmaXggPSBgJHtUQVJFQVNfRk9MREVSfS9gXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKHJvb3RQcmVmaXgpKVxuICAgIHJldHVybiBERUZBVUxUX0JPQVJEX05BTUVcblxuICBjb25zdCBzZWdtZW50cyA9IHBhdGguc2xpY2Uocm9vdFByZWZpeC5sZW5ndGgpLnNwbGl0KCcvJylcbiAgY29uc3QgY2FuZGlkYXRlID0gc2VnbWVudHNbMF0/LnRyaW0oKS50b0xvd2VyQ2FzZSgpIHx8ICcnXG4gIGlmICghY2FuZGlkYXRlIHx8IGNhbmRpZGF0ZSA9PT0gJ2ZpbmlzaGVkJyB8fCBjYW5kaWRhdGUgPT09ICdjYW5jZWxsZWQnIHx8IGNhbmRpZGF0ZSA9PT0gJ2NvbXBsZXRhZGFzJylcbiAgICByZXR1cm4gREVGQVVMVF9CT0FSRF9OQU1FXG5cbiAgcmV0dXJuIGNhbmRpZGF0ZVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVCb2FyZE5hbWUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSB2YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICByZXR1cm4gbm9ybWFsaXplZCB8fCBERUZBVUxUX0JPQVJEX05BTUVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVUYXNrRW5kRGF0ZShmZWNoYUZpbjogc3RyaW5nLCBlc3RpbWFjaW9uOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBleHBsaWNpdEVuZCA9IHBhcnNlVGFza0RhdGUoZmVjaGFGaW4pXG4gIGlmIChleHBsaWNpdEVuZClcbiAgICByZXR1cm4gZXhwbGljaXRFbmQudG9JU09TdHJpbmcoKVxuXG4gIGlmIChlc3RpbWFjaW9uIDw9IDApXG4gICAgcmV0dXJuICcnXG5cbiAgY29uc3QgY29tcHV0ZWQgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgZXN0aW1hY2lvbiAqIDYwICogNjAgKiAxMDAwKVxuICByZXR1cm4gY29tcHV0ZWQudG9JU09TdHJpbmcoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUYXNrRGF0ZSh2YWx1ZTogc3RyaW5nKTogRGF0ZSB8IG51bGwge1xuICBjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpXG4gIGlmICghdHJpbW1lZClcbiAgICByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHBhcnNlZCA9IG5ldyBEYXRlKHRyaW1tZWQpXG4gIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkpXG4gICAgcmV0dXJuIG51bGxcblxuICByZXR1cm4gcGFyc2VkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0VGFza0JvZHlQcmV2aWV3KGNvbnRlbnQ6IHN0cmluZywgbWF4TGVuZ3RoID0gMTgwKTogc3RyaW5nIHtcbiAgbGV0IGJvZHkgPSBjb250ZW50XG5cbiAgLy8gUmVtb3ZlIFlBTUwgZnJvbnRtYXR0ZXIgYmxvY2sgaWYgcHJlc2VudC5cbiAgYm9keSA9IGJvZHkucmVwbGFjZSgvXi0tLVxccj9cXG5bXFxzXFxTXSo/XFxyP1xcbi0tLVxccj9cXG4/LywgJycpXG5cbiAgY29uc3QgbGluZXMgPSBib2R5XG4gICAgLnNwbGl0KC9cXHI/XFxuLylcbiAgICAubWFwKGxpbmUgPT4gbGluZS50cmltKCkpXG5cbiAgd2hpbGUgKGxpbmVzLmxlbmd0aCA+IDAgJiYgIWxpbmVzWzBdKVxuICAgIGxpbmVzLnNoaWZ0KClcblxuICAvLyBSZW1vdmUgbGVhZGluZyB0aXRsZSBoZWFkaW5nIHNvIHByZXZpZXcgc3RhcnRzIHdpdGggdGhlIGJvZHkgdGV4dC5cbiAgaWYgKGxpbmVzWzBdPy5zdGFydHNXaXRoKCcjICcpKVxuICAgIGxpbmVzLnNoaWZ0KClcblxuICB3aGlsZSAobGluZXMubGVuZ3RoID4gMCAmJiAhbGluZXNbMF0pXG4gICAgbGluZXMuc2hpZnQoKVxuXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBsaW5lcy5qb2luKCcgJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKVxuICBpZiAoIW5vcm1hbGl6ZWQpXG4gICAgcmV0dXJuICcnXG5cbiAgaWYgKG5vcm1hbGl6ZWQubGVuZ3RoIDw9IG1heExlbmd0aClcbiAgICByZXR1cm4gbm9ybWFsaXplZFxuXG4gIHJldHVybiBgJHtub3JtYWxpemVkLnNsaWNlKDAsIG1heExlbmd0aCAtIDEpLnRyaW1FbmQoKX3igKZgXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmVudFRhc2tOYW1lKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpXG4gIGlmICghdHJpbW1lZClcbiAgICByZXR1cm4gJydcblxuICBjb25zdCBsaW5rTWF0Y2ggPSB0cmltbWVkLm1hdGNoKC9eXFxbXFxbKC4rPylcXF1cXF0kLylcbiAgY29uc3QgcmF3UmVmID0gbGlua01hdGNoID8gbGlua01hdGNoWzFdLnRyaW0oKSA6IHRyaW1tZWRcbiAgY29uc3Qgd2l0aG91dEFsaWFzID0gcmF3UmVmLnNwbGl0KCd8JylbMF0udHJpbSgpXG4gIGNvbnN0IHdpdGhvdXRIZWFkaW5nID0gd2l0aG91dEFsaWFzLnNwbGl0KCcjJylbMF0udHJpbSgpXG4gIGNvbnN0IGxhc3RTZWdtZW50ID0gd2l0aG91dEhlYWRpbmcuc3BsaXQoJy8nKS5wb3AoKSA/PyB3aXRob3V0SGVhZGluZ1xuXG4gIHJldHVybiBsYXN0U2VnbWVudC5yZXBsYWNlKC9cXC5tZCQvaSwgJycpLnRyaW0oKVxufVxuXG5mdW5jdGlvbiBnZXRUYXNrRnJvbnRtYXR0ZXIoYXBwOiBBcHAsIGZpbGU6IFRGaWxlKTogVGFza0Zyb250bWF0dGVyIHwgbnVsbCB7XG4gIGNvbnN0IHJhd0Zyb250bWF0dGVyID0gYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpPy5mcm9udG1hdHRlclxuICByZXR1cm4gdG9UYXNrRnJvbnRtYXR0ZXIocmF3RnJvbnRtYXR0ZXIpXG59XG4iLCJpbXBvcnQgdHlwZSB7IEFwcCB9IGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQgeyBnZXRUYXNrcywgaXNUYXNrSW5Db21wbGV0ZWRGb2xkZXIsIHBhcnNlVGFza0RhdGUgfSBmcm9tICcuL3Rhc2tFbmdpbmUnXG5pbXBvcnQgeyB1cGRhdGVGcm9udG1hdHRlciB9IGZyb20gJy4vZnJvbnRtYXR0ZXJFbmdpbmUnXG5cbmNvbnN0IEhPVVJfTVMgPSA2MCAqIDYwICogMTAwMFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmViYWxhbmNlR3JvdXBFbmREYXRlcyhhcHA6IEFwcCwgYm9hcmROYW1lOiBzdHJpbmcsIGdyb3VwTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHRhc2tzID0gZ2V0VGFza3MoYXBwKVxuICAgIC5maWx0ZXIodGFzayA9PiAhdGFzay5wYXJlbnRcbiAgICAgICYmIHRhc2sudGFibGVybyA9PT0gYm9hcmROYW1lXG4gICAgICAmJiB0YXNrLmVxdWlwbyA9PT0gZ3JvdXBOYW1lXG4gICAgICAmJiAhaXNUYXNrSW5Db21wbGV0ZWRGb2xkZXIodGFzay5maWxlLnBhdGgpKVxuICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcilcblxuICBpZiAodGFza3MubGVuZ3RoID09PSAwKVxuICAgIHJldHVyblxuXG4gIGNvbnN0IGZpcnN0U3RhcnQgPSBwYXJzZVRhc2tEYXRlKHRhc2tzWzBdLmZlY2hhSW5pY2lvKSA/PyBuZXcgRGF0ZSgpXG4gIGxldCBjdXJzb3IgPSBmaXJzdFN0YXJ0LmdldFRpbWUoKVxuXG4gIGZvciAoY29uc3QgdGFzayBvZiB0YXNrcykge1xuICAgIGNvbnN0IGVzdGltYXRlZEhvdXJzID0gTnVtYmVyLmlzRmluaXRlKHRhc2suZXN0aW1hY2lvbikgJiYgdGFzay5lc3RpbWFjaW9uID4gMFxuICAgICAgPyB0YXNrLmVzdGltYWNpb25cbiAgICAgIDogMFxuICAgIGNvbnN0IGRlZGljYXRlZEhvdXJzID0gTnVtYmVyLmlzRmluaXRlKHRhc2suZGVkaWNhZG8pICYmIHRhc2suZGVkaWNhZG8gPiAwXG4gICAgICA/IHRhc2suZGVkaWNhZG9cbiAgICAgIDogMFxuICAgIGNvbnN0IGVzdGltYXRlSG91cnMgPSBNYXRoLm1heChlc3RpbWF0ZWRIb3VycywgZGVkaWNhdGVkSG91cnMpXG5cbiAgICBjdXJzb3IgKz0gZXN0aW1hdGVIb3VycyAqIEhPVVJfTVNcbiAgICBhd2FpdCB1cGRhdGVGcm9udG1hdHRlcihhcHAsIHRhc2suZmlsZSwgeyBmZWNoYUZpbjogbmV3IERhdGUoY3Vyc29yKS50b0lTT1N0cmluZygpIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUZpbGVuYW1lKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoL1tcXFxcLzoqP1wiPD58I15bXFxdXS9nLCAnLScpLnRyaW0oKVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7IEVTVEFET1MsIFBSSU9SSURBREVTIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgcmVidWlsZFRhc2tDaGlsZExpbmtzLCBzeW5jVGFza1R5cGVUYWdzIH0gZnJvbSAnLi4vZW5naW5lcy9mcm9udG1hdHRlckVuZ2luZSdcbmltcG9ydCB7IHJlYmFsYW5jZUdyb3VwRW5kRGF0ZXMgfSBmcm9tICcuLi9lbmdpbmVzL3NjaGVkdWxlRW5naW5lJ1xuaW1wb3J0IHsgYXBwZW5kVGFza0xpbmtUb0luZGV4IH0gZnJvbSAnLi4vZW5naW5lcy90YXNrSW5kZXhFbmdpbmUnXG5pbXBvcnQge1xuICBidWlsZFRhc2tDb250ZW50LFxuICBnZXRCb2FyZEZvbGRlcixcbiAgZ2V0Qm9hcmRTdWJ0YXNrc0ZvbGRlcixcbiAgcmVzb2x2ZU5ld1Rhc2tPcmRlcixcbiAgcmVzb2x2ZVRhc2tFbmREYXRlLFxuICByZXNvbHZlVGFza1BhdGgsXG59IGZyb20gJy4uL2VuZ2luZXMvdGFza0VuZ2luZSdcbmltcG9ydCB0eXBlIHsgVGFza0Zvcm1EYXRhIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBzYW5pdGl6ZUZpbGVuYW1lIH0gZnJvbSAnLi4vdXRpbHMvc2FuaXRpemVGaWxlbmFtZSdcbmltcG9ydCB0eXBlIHsgVGFyZWFzUGx1Z2luIH0gZnJvbSAnLi4vcGx1Z2luL1RhcmVhc1BsdWdpbidcblxuZXhwb3J0IGNsYXNzIE5ld1Rhc2tNb2RhbCBleHRlbmRzIG9ic2lkaWFuLk1vZGFsIHtcbiAgcHJpdmF0ZSBwbHVnaW46IFRhcmVhc1BsdWdpblxuICBwcml2YXRlIGRhdGE6IFRhc2tGb3JtRGF0YVxuXG4gIGNvbnN0cnVjdG9yKGFwcDogb2JzaWRpYW4uQXBwLCBwbHVnaW46IFRhcmVhc1BsdWdpbiwgZGVmYXVsdEJvYXJkPzogc3RyaW5nLCBkZWZhdWx0UGFyZW50Pzogc3RyaW5nLCBkZWZhdWx0R3JvdXA/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihhcHApXG4gICAgY29uc3QgcmVzb2x2ZWRCb2FyZCA9IGRlZmF1bHRCb2FyZCB8fCBwbHVnaW4udGFibGVyb3NbMF0/Lm5hbWUgfHwgJydcbiAgICBjb25zdCBmaXJzdEdyb3VwRm9yQm9hcmQgPSBwbHVnaW4uZ2V0RXF1aXBvc0ZvclRhYmxlcm8ocmVzb2x2ZWRCb2FyZClbMF0/Lm5hbWUgfHwgJydcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpblxuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIHRhcmVhOiAnJyxcbiAgICAgIGRldGFsbGU6ICcnLFxuICAgICAgZXN0YWRvOiAnUGVuZGllbnRlJyxcbiAgICAgIGZlY2hhRmluOiAnJyxcbiAgICAgIHRhYmxlcm86IHJlc29sdmVkQm9hcmQsXG4gICAgICBlcXVpcG86IGRlZmF1bHRHcm91cCB8fCBmaXJzdEdyb3VwRm9yQm9hcmQsXG4gICAgICBwcmlvcmlkYWQ6ICdNZWRpYScsXG4gICAgICBlc3RpbWFjaW9uOiAwLFxuICAgICAgcGFyZW50OiBkZWZhdWx0UGFyZW50IHx8ICcnLFxuICAgIH1cbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpc1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLW1vZGFsJylcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnTnVldmEgVGFyZWEnIH0pXG5cbiAgICBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpLnNldE5hbWUoJ1RhcmVhJykuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgdGV4dC5zZXRQbGFjZWhvbGRlcignTm9tYnJlIGRlIGxhIHRhcmVhJylcbiAgICAgIHRleHQub25DaGFuZ2UodmFsdWUgPT4gdGhpcy5kYXRhLnRhcmVhID0gdmFsdWUpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRleHQuaW5wdXRFbC5mb2N1cygpLCA1MClcbiAgICB9KVxuXG4gICAgbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKS5zZXROYW1lKCdFc3RhZG8nKS5hZGREcm9wZG93bigoZHJvcGRvd24pID0+IHtcbiAgICAgIGZvciAoY29uc3QgZXN0YWRvIG9mIEVTVEFET1MpXG4gICAgICAgIGRyb3Bkb3duLmFkZE9wdGlvbihlc3RhZG8sIGVzdGFkbylcblxuICAgICAgZHJvcGRvd24uc2V0VmFsdWUodGhpcy5kYXRhLmVzdGFkbylcbiAgICAgIGRyb3Bkb3duLm9uQ2hhbmdlKHZhbHVlID0+IHRoaXMuZGF0YS5lc3RhZG8gPSB2YWx1ZSlcbiAgICB9KVxuXG4gICAgbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKVxuICAgICAgLnNldE5hbWUoJ0ZlY2hhIGZpbicpXG4gICAgICAuc2V0RGVzYygnT3BjaW9uYWwuIFNpIHF1ZWRhIHZhY8OtYSwgc2UgY2FsY3VsYSBjb24gbGEgZXN0aW1hY2nDs24uJylcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PiB7XG4gICAgICAgIHRleHQuaW5wdXRFbC50eXBlID0gJ2RhdGV0aW1lLWxvY2FsJ1xuICAgICAgICB0ZXh0LnNldFZhbHVlKHRoaXMuZGF0YS5mZWNoYUZpbilcbiAgICAgICAgdGV4dC5vbkNoYW5nZSh2YWx1ZSA9PiB0aGlzLmRhdGEuZmVjaGFGaW4gPSB2YWx1ZSlcbiAgICAgIH0pXG5cbiAgICBsZXQgZ3JvdXBEcm9wZG93bjogb2JzaWRpYW4uRHJvcGRvd25Db21wb25lbnQgfCBudWxsID0gbnVsbFxuXG4gICAgY29uc3QgcmVmcmVzaEdyb3VwT3B0aW9ucyA9ICgpID0+IHtcbiAgICAgIGlmICghZ3JvdXBEcm9wZG93bilcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGNvbnN0IHNlbGVjdEVsID0gZ3JvdXBEcm9wZG93bi5zZWxlY3RFbFxuICAgICAgd2hpbGUgKHNlbGVjdEVsLm9wdGlvbnMubGVuZ3RoID4gMClcbiAgICAgICAgc2VsZWN0RWwucmVtb3ZlKDApXG5cbiAgICAgIGdyb3VwRHJvcGRvd24uYWRkT3B0aW9uKCcnLCAnU2luIGdydXBvJylcbiAgICAgIGNvbnN0IGdyb3VwcyA9IHRoaXMucGx1Z2luLmdldEVxdWlwb3NGb3JUYWJsZXJvKHRoaXMuZGF0YS50YWJsZXJvKVxuICAgICAgZm9yIChjb25zdCBlcXVpcG8gb2YgZ3JvdXBzKVxuICAgICAgICBncm91cERyb3Bkb3duLmFkZE9wdGlvbihlcXVpcG8ubmFtZSwgZXF1aXBvLm5hbWUpXG5cbiAgICAgIGlmICh0aGlzLmRhdGEuZXF1aXBvICYmIGdyb3Vwcy5zb21lKGdyb3VwID0+IGdyb3VwLm5hbWUgPT09IHRoaXMuZGF0YS5lcXVpcG8pKSB7XG4gICAgICAgIGdyb3VwRHJvcGRvd24uc2V0VmFsdWUodGhpcy5kYXRhLmVxdWlwbylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0YS5lcXVpcG8gPSBncm91cHNbMF0/Lm5hbWUgfHwgJydcbiAgICAgIGdyb3VwRHJvcGRvd24uc2V0VmFsdWUodGhpcy5kYXRhLmVxdWlwbylcbiAgICB9XG5cbiAgICBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpLnNldE5hbWUoJ1RhYmxlcm8nKS5hZGREcm9wZG93bigoZHJvcGRvd24pID0+IHtcbiAgICAgIGZvciAoY29uc3QgdGFibGVybyBvZiB0aGlzLnBsdWdpbi50YWJsZXJvcylcbiAgICAgICAgZHJvcGRvd24uYWRkT3B0aW9uKHRhYmxlcm8ubmFtZSwgdGFibGVyby5uYW1lKVxuXG4gICAgICBkcm9wZG93bi5zZXRWYWx1ZSh0aGlzLmRhdGEudGFibGVybylcbiAgICAgIGRyb3Bkb3duLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEudGFibGVybyA9IHZhbHVlXG4gICAgICAgIHJlZnJlc2hHcm91cE9wdGlvbnMoKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKS5zZXROYW1lKCdHcnVwbycpLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT4ge1xuICAgICAgZ3JvdXBEcm9wZG93biA9IGRyb3Bkb3duXG4gICAgICByZWZyZXNoR3JvdXBPcHRpb25zKClcbiAgICAgIGRyb3Bkb3duLm9uQ2hhbmdlKHZhbHVlID0+IHRoaXMuZGF0YS5lcXVpcG8gPSB2YWx1ZSlcbiAgICB9KVxuXG4gICAgbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKS5zZXROYW1lKCdQcmlvcmlkYWQnKS5hZGREcm9wZG93bigoZHJvcGRvd24pID0+IHtcbiAgICAgIGZvciAoY29uc3QgcHJpb3JpZGFkIG9mIFBSSU9SSURBREVTKVxuICAgICAgICBkcm9wZG93bi5hZGRPcHRpb24ocHJpb3JpZGFkLCBwcmlvcmlkYWQpXG5cbiAgICAgIGRyb3Bkb3duLnNldFZhbHVlKHRoaXMuZGF0YS5wcmlvcmlkYWQpXG4gICAgICBkcm9wZG93bi5vbkNoYW5nZSh2YWx1ZSA9PiB0aGlzLmRhdGEucHJpb3JpZGFkID0gdmFsdWUpXG4gICAgfSlcblxuICAgIG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbClcbiAgICAgIC5zZXROYW1lKCdFc3RpbWFjacOzbiAoaG9yYXMpJylcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PiB7XG4gICAgICAgIHRleHQuc2V0UGxhY2Vob2xkZXIoJzAnKVxuICAgICAgICB0ZXh0LmlucHV0RWwudHlwZSA9ICdudW1iZXInXG4gICAgICAgIHRleHQuaW5wdXRFbC5taW4gPSAnMCdcbiAgICAgICAgdGV4dC5pbnB1dEVsLnN0ZXAgPSAnMC4wMSdcbiAgICAgICAgdGV4dC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJzZWQgPSBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSlcbiAgICAgICAgICB0aGlzLmRhdGEuZXN0aW1hY2lvbiA9IE51bWJlci5pc05hTihwYXJzZWQpIHx8IHBhcnNlZCA8IDBcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiBNYXRoLnJvdW5kKHBhcnNlZCAqIDEwMCkgLyAxMDBcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpXG4gICAgICAuc2V0TmFtZSgnU3VidGFyZWEgZGUnKVxuICAgICAgLnNldERlc2MoJ0RlamFyIHZhY8OtbyBzaSBlcyB0YXJlYSBwcmluY2lwYWwnKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+IHtcbiAgICAgICAgdGV4dC5zZXRQbGFjZWhvbGRlcignTm9tYnJlIGRlIHRhcmVhIHBhZHJlIChzaW4gLm1kKScpXG4gICAgICAgIHRleHQuc2V0VmFsdWUodGhpcy5kYXRhLnBhcmVudClcbiAgICAgICAgdGV4dC5vbkNoYW5nZSh2YWx1ZSA9PiB0aGlzLmRhdGEucGFyZW50ID0gdmFsdWUpXG4gICAgICB9KVxuXG4gICAgY29uc3QgZm9vdGVyID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1tb2RhbC1mb290ZXInIH0pXG5cbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NyZWFyIHRhcmVhJywgY2xzOiAnbW9kLWN0YScgfSlcbiAgICBjcmVhdGVCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuY3JlYXRlKClcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ2FuY2VsYXInIH0pXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlKClcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjcmVhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEudGFyZWEudHJpbSgpKSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdFbCBub21icmUgZXMgcmVxdWVyaWRvJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNhbml0aXplZFRhc2tOYW1lID0gc2FuaXRpemVGaWxlbmFtZSh0aGlzLmRhdGEudGFyZWEpXG4gICAgY29uc3QgdGFyZ2V0Rm9sZGVyID0gdGhpcy5kYXRhLnBhcmVudC50cmltKClcbiAgICAgID8gZ2V0Qm9hcmRTdWJ0YXNrc0ZvbGRlcih0aGlzLmRhdGEudGFibGVybylcbiAgICAgIDogZ2V0Qm9hcmRGb2xkZXIodGhpcy5kYXRhLnRhYmxlcm8pXG4gICAgYXdhaXQgdGhpcy5lbnN1cmVGb2xkZXJQYXRoKHRhcmdldEZvbGRlcilcblxuICAgIGNvbnN0IHBhdGggPSByZXNvbHZlVGFza1BhdGgodGhpcy5hcHAsIHNhbml0aXplZFRhc2tOYW1lLCB0aGlzLmRhdGEudGFibGVybywgdGhpcy5kYXRhLnBhcmVudClcbiAgICBjb25zdCBvcmRlciA9IHJlc29sdmVOZXdUYXNrT3JkZXIodGhpcy5hcHAsIHRoaXMuZGF0YSlcbiAgICBjb25zdCBjb250ZW50ID0gYnVpbGRUYXNrQ29udGVudChcbiAgICAgIHtcbiAgICAgICAgLi4udGhpcy5kYXRhLFxuICAgICAgICBmZWNoYUZpbjogcmVzb2x2ZVRhc2tFbmREYXRlKHRoaXMuZGF0YS5mZWNoYUZpbiwgdGhpcy5kYXRhLmVzdGltYWNpb24pLFxuICAgICAgfSxcbiAgICAgIG9yZGVyLFxuICAgIClcblxuICAgIGNvbnN0IHRhc2tGaWxlID0gYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKHBhdGgsIGNvbnRlbnQpXG4gICAgYXdhaXQgYXBwZW5kVGFza0xpbmtUb0luZGV4KHRoaXMuYXBwLCB0YXNrRmlsZSlcbiAgICBhd2FpdCByZWJ1aWxkVGFza0NoaWxkTGlua3ModGhpcy5hcHApXG4gICAgYXdhaXQgc3luY1Rhc2tUeXBlVGFncyh0aGlzLmFwcClcbiAgICBhd2FpdCByZWJhbGFuY2VHcm91cEVuZERhdGVzKHRoaXMuYXBwLCB0aGlzLmRhdGEudGFibGVybywgdGhpcy5kYXRhLmVxdWlwbylcbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBUYXJlYSBcIiR7dGhpcy5kYXRhLnRhcmVhfVwiIGNyZWFkYWApXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGVuc3VyZUZvbGRlclBhdGgocGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aClcbiAgICBpZiAoZXhpc3RpbmcgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKVxuICAgICAgcmV0dXJuXG5cbiAgICBpZiAoZXhpc3RpbmcpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHNlIHB1ZG8gY3JlYXIgbGEgY2FycGV0YSBcIiR7cGF0aH1cIiBwb3JxdWUgZXhpc3RlIHVuIGFyY2hpdm8gY29uIGVzZSBub21icmVgKVxuXG4gICAgY29uc3Qgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJykuZmlsdGVyKEJvb2xlYW4pXG4gICAgbGV0IGN1cnJlbnRQYXRoID0gJydcbiAgICBmb3IgKGNvbnN0IHNlZ21lbnQgb2Ygc2VnbWVudHMpIHtcbiAgICAgIGN1cnJlbnRQYXRoID0gY3VycmVudFBhdGggPyBgJHtjdXJyZW50UGF0aH0vJHtzZWdtZW50fWAgOiBzZWdtZW50XG4gICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGN1cnJlbnRQYXRoKVxuICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKVxuICAgICAgICBjb250aW51ZVxuICAgICAgaWYgKGN1cnJlbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gc2UgcHVkbyBjcmVhciBsYSBjYXJwZXRhIFwiJHtjdXJyZW50UGF0aH1cIiBwb3JxdWUgZXhpc3RlIHVuIGFyY2hpdm8gY29uIGVzZSBub21icmVgKVxuXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoY3VycmVudFBhdGgpXG4gICAgICB9XG4gICAgICBjYXRjaCB7XG4gICAgICAgIGNvbnN0IHJldHJ5ID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGN1cnJlbnRQYXRoKVxuICAgICAgICBpZiAocmV0cnkgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBzZSBwdWRvIGNyZWFyIGxhIGNhcnBldGEgXCIke2N1cnJlbnRQYXRofVwiYClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERFRkFVTFRfQk9BUkRfTkFNRSwgREVGQVVMVF9FUVVJUE9TLCBERUZBVUxUX1RBQkxFUk9TIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgbm9ybWFsaXplUG9tb2Rvcm9TdGF0ZSB9IGZyb20gJy4uL2VuZ2luZXMvcG9tb2Rvcm9FbmdpbmUnXG5pbXBvcnQgdHlwZSB7IEVxdWlwbywgUG9tb2Rvcm9TdGF0ZSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgaXNSZWNvcmQgfSBmcm9tICcuL2d1YXJkcydcblxuY29uc3QgTEVHQUNZX0ZBTExCQUNLX0NPTE9SUyA9IFsnI2Q5N2ExZScsICcjMmU2ZGIwJywgJyM3YzVjZTcnLCAnIzAwYjg5NCcsICcjZTE3MDU1JywgJyNmZDc5YTgnXVxuY29uc3QgUkVNT1ZFRF9ERUZBVUxUX1RFQU1fTkFNRVMgPSBuZXcgU2V0KFsnU2VtYW5hbCcsICdEaWFyaW8nLCAnQ29tcGxldGFkYXMnXSlcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUVxdWlwb3NGcm9tU2V0dGluZ3MocmF3RGF0YTogdW5rbm93bik6IEVxdWlwb1tdIHtcbiAgY29uc3QgZXF1aXBvcyA9IGV4dHJhY3RFcXVpcG9zKHJhd0RhdGEpXG5cbiAgaWYgKCFlcXVpcG9zIHx8IGVxdWlwb3MubGVuZ3RoID09PSAwKVxuICAgIHJldHVybiBbLi4uREVGQVVMVF9FUVVJUE9TXVxuXG4gIGlmIChpc1N0cmluZ0FycmF5KGVxdWlwb3MpKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZEZyb21MZWdhY3kgPSBlcXVpcG9zXG4gICAgICAuZmlsdGVyKG5hbWUgPT4gIVJFTU9WRURfREVGQVVMVF9URUFNX05BTUVTLmhhcyhuYW1lKSlcbiAgICAgIC5tYXAoKG5hbWUsIGluZGV4KSA9PiAoe1xuICAgICAgICBuYW1lOiBuYW1lLnRyaW0oKSxcbiAgICAgICAgY29sb3I6IExFR0FDWV9GQUxMQkFDS19DT0xPUlNbaW5kZXggJSBMRUdBQ1lfRkFMTEJBQ0tfQ09MT1JTLmxlbmd0aF0sXG4gICAgICAgIHRhYmxlcm86IERFRkFVTFRfQk9BUkRfTkFNRSxcbiAgICAgIH0pKVxuICAgIHJldHVybiBtZXJnZVdpdGhEZWZhdWx0RXF1aXBvcyhub3JtYWxpemVkRnJvbUxlZ2FjeSlcbiAgfVxuXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBlcXVpcG9zXG4gICAgLmZpbHRlcihpc0VxdWlwbylcbiAgICAubWFwKGVxdWlwbyA9PiAoe1xuICAgICAgbmFtZTogZXF1aXBvLm5hbWUudHJpbSgpLFxuICAgICAgY29sb3I6IGVxdWlwby5jb2xvcixcbiAgICAgIHRhYmxlcm86IChlcXVpcG8udGFibGVybyB8fCBERUZBVUxUX0JPQVJEX05BTUUpLnRyaW0oKS50b0xvd2VyQ2FzZSgpLFxuICAgIH0pKVxuICAgIC5maWx0ZXIoZXF1aXBvID0+ICFSRU1PVkVEX0RFRkFVTFRfVEVBTV9OQU1FUy5oYXMoZXF1aXBvLm5hbWUpKVxuICAgIC5maWx0ZXIoZXF1aXBvID0+IEJvb2xlYW4oZXF1aXBvLm5hbWUpKVxuXG4gIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gMClcbiAgICByZXR1cm4gWy4uLkRFRkFVTFRfRVFVSVBPU11cblxuICByZXR1cm4gbWVyZ2VXaXRoRGVmYXVsdEVxdWlwb3Mobm9ybWFsaXplZClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVRhYmxlcm9zRnJvbVNldHRpbmdzKHJhd0RhdGE6IHVua25vd24pOiBFcXVpcG9bXSB7XG4gIGxldCB0YWJsZXJvcyA9IGV4dHJhY3RUYWJsZXJvcyhyYXdEYXRhKVxuICBpZiAoKCF0YWJsZXJvcyB8fCB0YWJsZXJvcy5sZW5ndGggPT09IDApICYmIHNob3VsZFJldXNlRXF1aXBvc0FzQm9hcmRzKHJhd0RhdGEpKVxuICAgIHRhYmxlcm9zID0gZXh0cmFjdEVxdWlwb3MocmF3RGF0YSlcblxuICBpZiAoIXRhYmxlcm9zIHx8IHRhYmxlcm9zLmxlbmd0aCA9PT0gMClcbiAgICByZXR1cm4gWy4uLkRFRkFVTFRfVEFCTEVST1NdXG5cbiAgaWYgKGlzU3RyaW5nQXJyYXkodGFibGVyb3MpKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IHRhYmxlcm9zXG4gICAgICAubWFwKChuYW1lLCBpbmRleCkgPT4gKHtcbiAgICAgICAgbmFtZTogbmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgY29sb3I6IExFR0FDWV9GQUxMQkFDS19DT0xPUlNbaW5kZXggJSBMRUdBQ1lfRkFMTEJBQ0tfQ09MT1JTLmxlbmd0aF0sXG4gICAgICB9KSlcbiAgICAgIC5maWx0ZXIoYm9hcmQgPT4gQm9vbGVhbihib2FyZC5uYW1lKSlcbiAgICByZXR1cm4gbWVyZ2VXaXRoRGVmYXVsdFRhYmxlcm9zKG5vcm1hbGl6ZWQpXG4gIH1cblxuICBjb25zdCBub3JtYWxpemVkID0gdGFibGVyb3NcbiAgICAuZmlsdGVyKGlzRXF1aXBvKVxuICAgIC5tYXAoYm9hcmQgPT4gKHsgbmFtZTogYm9hcmQubmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSwgY29sb3I6IGJvYXJkLmNvbG9yIH0pKVxuICAgIC5maWx0ZXIoYm9hcmQgPT4gQm9vbGVhbihib2FyZC5uYW1lKSlcbiAgcmV0dXJuIG1lcmdlV2l0aERlZmF1bHRUYWJsZXJvcyhub3JtYWxpemVkKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUG9tb2Rvcm9Gcm9tU2V0dGluZ3MocmF3RGF0YTogdW5rbm93bik6IFBvbW9kb3JvU3RhdGUge1xuICBpZiAoIWlzUmVjb3JkKHJhd0RhdGEpKVxuICAgIHJldHVybiBub3JtYWxpemVQb21vZG9yb1N0YXRlKG51bGwpXG5cbiAgcmV0dXJuIG5vcm1hbGl6ZVBvbW9kb3JvU3RhdGUocmF3RGF0YS5wb21vZG9ybylcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEVxdWlwb3MocmF3RGF0YTogdW5rbm93bik6IHVua25vd25bXSB8IHVuZGVmaW5lZCB7XG4gIGlmICghaXNSZWNvcmQocmF3RGF0YSkpXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuXG4gIGNvbnN0IGVxdWlwb3MgPSByYXdEYXRhLmVxdWlwb3NcbiAgaWYgKCFBcnJheS5pc0FycmF5KGVxdWlwb3MpKVxuICAgIHJldHVybiB1bmRlZmluZWRcblxuICByZXR1cm4gZXF1aXBvc1xufVxuXG5mdW5jdGlvbiBleHRyYWN0VGFibGVyb3MocmF3RGF0YTogdW5rbm93bik6IHVua25vd25bXSB8IHVuZGVmaW5lZCB7XG4gIGlmICghaXNSZWNvcmQocmF3RGF0YSkpXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuXG4gIGNvbnN0IHRhYmxlcm9zID0gcmF3RGF0YS50YWJsZXJvc1xuICBpZiAoIUFycmF5LmlzQXJyYXkodGFibGVyb3MpKVxuICAgIHJldHVybiB1bmRlZmluZWRcblxuICByZXR1cm4gdGFibGVyb3Ncbn1cblxuZnVuY3Rpb24gc2hvdWxkUmV1c2VFcXVpcG9zQXNCb2FyZHMocmF3RGF0YTogdW5rbm93bik6IGJvb2xlYW4ge1xuICBjb25zdCBlcXVpcG9zID0gZXh0cmFjdEVxdWlwb3MocmF3RGF0YSlcbiAgaWYgKCFlcXVpcG9zIHx8IGVxdWlwb3MubGVuZ3RoID09PSAwKVxuICAgIHJldHVybiBmYWxzZVxuXG4gIGlmIChpc1N0cmluZ0FycmF5KGVxdWlwb3MpKVxuICAgIHJldHVybiBlcXVpcG9zLnNvbWUobmFtZSA9PiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSAnZGVmYXVsdCcpXG5cbiAgY29uc3QgbmFtZWRFcXVpcG9zID0gZXF1aXBvcy5maWx0ZXIoaXNFcXVpcG8pXG4gIHJldHVybiBuYW1lZEVxdWlwb3Muc29tZShpdGVtID0+IGl0ZW0ubmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSA9PT0gJ2RlZmF1bHQnKVxufVxuXG5mdW5jdGlvbiBpc0VxdWlwbyh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIEVxdWlwbyB7XG4gIGlmICghaXNSZWNvcmQodmFsdWUpKVxuICAgIHJldHVybiBmYWxzZVxuXG4gIHJldHVybiB0eXBlb2YgdmFsdWUubmFtZSA9PT0gJ3N0cmluZydcbiAgICAmJiB0eXBlb2YgdmFsdWUuY29sb3IgPT09ICdzdHJpbmcnXG4gICAgJiYgKHR5cGVvZiB2YWx1ZS50YWJsZXJvID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdmFsdWUudGFibGVybyA9PT0gJ3N0cmluZycpXG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nQXJyYXkodmFsdWU6IHVua25vd25bXSk6IHZhbHVlIGlzIHN0cmluZ1tdIHtcbiAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGl0ZW0gPT4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKVxufVxuXG5mdW5jdGlvbiBtZXJnZVdpdGhEZWZhdWx0RXF1aXBvcyhlcXVpcG9zOiBFcXVpcG9bXSk6IEVxdWlwb1tdIHtcbiAgY29uc3QgZGVmYXVsdHNCeU5hbWUgPSBuZXcgTWFwKERFRkFVTFRfRVFVSVBPUy5tYXAoZXF1aXBvID0+IFtlcXVpcG8ubmFtZSwgZXF1aXBvXSkpXG4gIGNvbnN0IG5vcm1hbGl6ZWRCeU5hbWUgPSBuZXcgTWFwKGVxdWlwb3MubWFwKGVxdWlwbyA9PiBbZXF1aXBvLm5hbWUsIGVxdWlwb10pKVxuXG4gIGNvbnN0IHdpdGhEZWZhdWx0cyA9IERFRkFVTFRfRVFVSVBPUy5tYXAoKGVxdWlwbykgPT4ge1xuICAgIGNvbnN0IHNhdmVkRXF1aXBvID0gbm9ybWFsaXplZEJ5TmFtZS5nZXQoZXF1aXBvLm5hbWUpXG4gICAgcmV0dXJuIHNhdmVkRXF1aXBvID8geyAuLi5zYXZlZEVxdWlwbyB9IDogeyAuLi5lcXVpcG8gfVxuICB9KVxuXG4gIGNvbnN0IGN1c3RvbUVxdWlwb3MgPSBlcXVpcG9zLmZpbHRlcihlcXVpcG8gPT4gIWRlZmF1bHRzQnlOYW1lLmhhcyhlcXVpcG8ubmFtZSkpXG4gIHJldHVybiBbLi4ud2l0aERlZmF1bHRzLCAuLi5jdXN0b21FcXVpcG9zXVxufVxuXG5mdW5jdGlvbiBtZXJnZVdpdGhEZWZhdWx0VGFibGVyb3ModGFibGVyb3M6IEVxdWlwb1tdKTogRXF1aXBvW10ge1xuICBjb25zdCBkZWZhdWx0c0J5TmFtZSA9IG5ldyBNYXAoREVGQVVMVF9UQUJMRVJPUy5tYXAoYm9hcmQgPT4gW2JvYXJkLm5hbWUsIGJvYXJkXSkpXG4gIGNvbnN0IG5vcm1hbGl6ZWRCeU5hbWUgPSBuZXcgTWFwKHRhYmxlcm9zLm1hcChib2FyZCA9PiBbYm9hcmQubmFtZSwgYm9hcmRdKSlcblxuICBjb25zdCB3aXRoRGVmYXVsdHMgPSBERUZBVUxUX1RBQkxFUk9TLm1hcCgoYm9hcmQpID0+IHtcbiAgICBjb25zdCBzYXZlZEJvYXJkID0gbm9ybWFsaXplZEJ5TmFtZS5nZXQoYm9hcmQubmFtZSlcbiAgICByZXR1cm4gc2F2ZWRCb2FyZCA/IHsgLi4uc2F2ZWRCb2FyZCB9IDogeyAuLi5ib2FyZCB9XG4gIH0pXG5cbiAgY29uc3QgY3VzdG9tQm9hcmRzID0gdGFibGVyb3MuZmlsdGVyKGJvYXJkID0+ICFkZWZhdWx0c0J5TmFtZS5oYXMoYm9hcmQubmFtZSkpXG4gIHJldHVybiBbLi4ud2l0aERlZmF1bHRzLCAuLi5jdXN0b21Cb2FyZHNdXG59XG4iLCJpbXBvcnQgdHlwZSB7IEFwcCwgVEFic3RyYWN0RmlsZSwgVEZpbGUsIFRGb2xkZXIgfSBmcm9tICdvYnNpZGlhbidcblxuaW1wb3J0IHtcbiAgQ0FOQ0VMTEVEX1NVQlRBU0tTX0ZPTERFUixcbiAgQ0FOQ0VMTEVEX1RBU0tTX0ZPTERFUixcbiAgQ09NUExFVEVEX1NVQlRBU0tTX0ZPTERFUixcbiAgQ09NUExFVEVEX1RBU0tTX0ZPTERFUixcbiAgREVGQVVMVF9CT0FSRF9OQU1FLFxufSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBnZXRCb2FyZEZvbGRlciwgZ2V0Qm9hcmRTdWJ0YXNrc0ZvbGRlciB9IGZyb20gJy4vdGFza0VuZ2luZSdcbmltcG9ydCB7XG4gIGFwcGVuZFRhc2tMaW5rVG9DYW5jZWxsZWRJbmRleCxcbiAgYXBwZW5kVGFza0xpbmtUb0ZpbmlzaGVkSW5kZXgsXG4gIGFwcGVuZFRhc2tMaW5rVG9JbmRleCxcbiAgcmVtb3ZlVGFza0xpbmtGcm9tQ2FuY2VsbGVkSW5kZXgsXG4gIHJlbW92ZVRhc2tMaW5rRnJvbUZpbmlzaGVkSW5kZXgsXG4gIHJlbW92ZVRhc2tMaW5rRnJvbUluZGV4LFxufSBmcm9tICcuL3Rhc2tJbmRleEVuZ2luZSdcbmltcG9ydCB7IHN5bmNUYXNrVHlwZVRhZ3MgfSBmcm9tICcuL2Zyb250bWF0dGVyRW5naW5lJ1xuaW1wb3J0IHsgdG9UYXNrRnJvbnRtYXR0ZXIgfSBmcm9tICcuLi91dGlscy9ndWFyZHMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtb3ZlVGFza1RvQ29tcGxldGVkRm9sZGVyKGFwcDogQXBwLCBmaWxlOiBURmlsZSwgaXNTdWJ0YXNrID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgdGFyZ2V0Rm9sZGVyID0gaXNTdWJ0YXNrID8gQ09NUExFVEVEX1NVQlRBU0tTX0ZPTERFUiA6IENPTVBMRVRFRF9UQVNLU19GT0xERVJcbiAgYXdhaXQgZW5zdXJlRm9sZGVyKGFwcCwgdGFyZ2V0Rm9sZGVyKVxuICBjb25zdCBuZXh0UGF0aCA9IHJlc29sdmVVbmlxdWVQYXRoKGFwcCwgYCR7dGFyZ2V0Rm9sZGVyfS8ke2ZpbGUubmFtZX1gKVxuICBpZiAobmV4dFBhdGggPT09IGZpbGUucGF0aClcbiAgICByZXR1cm5cblxuICBhd2FpdCByZW1vdmVUYXNrRnJvbUFsbEluZGV4ZXMoYXBwLCBmaWxlKVxuICBhd2FpdCBhcHAuZmlsZU1hbmFnZXIucmVuYW1lRmlsZShmaWxlLCBuZXh0UGF0aClcbiAgYXdhaXQgYXBwZW5kVGFza0xpbmtUb0ZpbmlzaGVkSW5kZXgoYXBwLCBmaWxlKVxuICBhd2FpdCBzeW5jVGFza1R5cGVUYWdzKGFwcClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1vdmVUYXNrVG9DYW5jZWxsZWRGb2xkZXIoYXBwOiBBcHAsIGZpbGU6IFRGaWxlLCBpc1N1YnRhc2sgPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB0YXJnZXRGb2xkZXIgPSBpc1N1YnRhc2sgPyBDQU5DRUxMRURfU1VCVEFTS1NfRk9MREVSIDogQ0FOQ0VMTEVEX1RBU0tTX0ZPTERFUlxuICBhd2FpdCBlbnN1cmVGb2xkZXIoYXBwLCB0YXJnZXRGb2xkZXIpXG4gIGNvbnN0IG5leHRQYXRoID0gcmVzb2x2ZVVuaXF1ZVBhdGgoYXBwLCBgJHt0YXJnZXRGb2xkZXJ9LyR7ZmlsZS5uYW1lfWApXG4gIGlmIChuZXh0UGF0aCA9PT0gZmlsZS5wYXRoKVxuICAgIHJldHVyblxuXG4gIGF3YWl0IHJlbW92ZVRhc2tGcm9tQWxsSW5kZXhlcyhhcHAsIGZpbGUpXG4gIGF3YWl0IGFwcC5maWxlTWFuYWdlci5yZW5hbWVGaWxlKGZpbGUsIG5leHRQYXRoKVxuICBhd2FpdCBhcHBlbmRUYXNrTGlua1RvQ2FuY2VsbGVkSW5kZXgoYXBwLCBmaWxlKVxuICBhd2FpdCBzeW5jVGFza1R5cGVUYWdzKGFwcClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1vdmVUYXNrVG9BY3RpdmVGb2xkZXIoYXBwOiBBcHAsIGZpbGU6IFRGaWxlLCBpc1N1YnRhc2sgPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB0YXJnZXRCb2FyZCA9IHJlc29sdmVUYXNrQm9hcmRGb3JGaWxlKGFwcCwgZmlsZSlcbiAgY29uc3QgdGFyZ2V0Rm9sZGVyID0gaXNTdWJ0YXNrXG4gICAgPyBnZXRCb2FyZFN1YnRhc2tzRm9sZGVyKHRhcmdldEJvYXJkKVxuICAgIDogZ2V0Qm9hcmRGb2xkZXIodGFyZ2V0Qm9hcmQpXG4gIGF3YWl0IGVuc3VyZUZvbGRlcihhcHAsIHRhcmdldEZvbGRlcilcbiAgY29uc3QgbmV4dFBhdGggPSByZXNvbHZlVW5pcXVlUGF0aChhcHAsIGAke3RhcmdldEZvbGRlcn0vJHtmaWxlLm5hbWV9YClcbiAgaWYgKG5leHRQYXRoID09PSBmaWxlLnBhdGgpXG4gICAgcmV0dXJuXG5cbiAgYXdhaXQgcmVtb3ZlVGFza0Zyb21BbGxJbmRleGVzKGFwcCwgZmlsZSlcbiAgYXdhaXQgYXBwLmZpbGVNYW5hZ2VyLnJlbmFtZUZpbGUoZmlsZSwgbmV4dFBhdGgpXG4gIGF3YWl0IGFwcGVuZFRhc2tMaW5rVG9JbmRleChhcHAsIGZpbGUpXG4gIGF3YWl0IHN5bmNUYXNrVHlwZVRhZ3MoYXBwKVxufVxuXG5hc3luYyBmdW5jdGlvbiByZW1vdmVUYXNrRnJvbUFsbEluZGV4ZXMoYXBwOiBBcHAsIGZpbGU6IFRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IHJlbW92ZVRhc2tMaW5rRnJvbUluZGV4KGFwcCwgZmlsZSlcbiAgYXdhaXQgcmVtb3ZlVGFza0xpbmtGcm9tRmluaXNoZWRJbmRleChhcHAsIGZpbGUpXG4gIGF3YWl0IHJlbW92ZVRhc2tMaW5rRnJvbUNhbmNlbGxlZEluZGV4KGFwcCwgZmlsZSlcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVRhc2tCb2FyZEZvckZpbGUoYXBwOiBBcHAsIGZpbGU6IFRGaWxlKTogc3RyaW5nIHtcbiAgY29uc3QgcmF3RnJvbnRtYXR0ZXIgPSBhcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk/LmZyb250bWF0dGVyXG4gIGNvbnN0IGZyb250bWF0dGVyID0gdG9UYXNrRnJvbnRtYXR0ZXIocmF3RnJvbnRtYXR0ZXIpXG4gIGNvbnN0IHJhd0JvYXJkID0gKGZyb250bWF0dGVyPy50YWJsZXJvIHx8ICcnKS50cmltKCkudG9Mb3dlckNhc2UoKVxuICByZXR1cm4gcmF3Qm9hcmQgfHwgREVGQVVMVF9CT0FSRF9OQU1FXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVVbmlxdWVQYXRoKGFwcDogQXBwLCBkZXNpcmVkUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgZXhpc3RpbmcgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGRlc2lyZWRQYXRoKVxuICBpZiAoIWV4aXN0aW5nIHx8IGV4aXN0aW5nLnBhdGggPT09IGRlc2lyZWRQYXRoKVxuICAgIHJldHVybiBkZXNpcmVkUGF0aFxuXG4gIGNvbnN0IGRvdEluZGV4ID0gZGVzaXJlZFBhdGgubGFzdEluZGV4T2YoJy4nKVxuICBjb25zdCBiYXNlID0gZG90SW5kZXggPiAwID8gZGVzaXJlZFBhdGguc2xpY2UoMCwgZG90SW5kZXgpIDogZGVzaXJlZFBhdGhcbiAgY29uc3QgZXh0ID0gZG90SW5kZXggPiAwID8gZGVzaXJlZFBhdGguc2xpY2UoZG90SW5kZXgpIDogJydcbiAgcmV0dXJuIGAke2Jhc2V9ICR7RGF0ZS5ub3coKX0ke2V4dH1gXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZUZvbGRlcihhcHA6IEFwcCwgcGF0aDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLycpLmZpbHRlcihCb29sZWFuKVxuICBsZXQgY3VycmVudFBhdGggPSAnJ1xuICBmb3IgKGNvbnN0IHNlZ21lbnQgb2Ygc2VnbWVudHMpIHtcbiAgICBjdXJyZW50UGF0aCA9IGN1cnJlbnRQYXRoID8gYCR7Y3VycmVudFBhdGh9LyR7c2VnbWVudH1gIDogc2VnbWVudFxuICAgIGNvbnN0IGV4aXN0aW5nID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChjdXJyZW50UGF0aClcbiAgICBpZiAoaXNGb2xkZXIoZXhpc3RpbmcpKVxuICAgICAgY29udGludWVcblxuICAgIGlmIChleGlzdGluZylcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGNyZWF0ZSBmb2xkZXIgXCIke2N1cnJlbnRQYXRofVwiIGJlY2F1c2UgYSBmaWxlIHdpdGggdGhhdCBuYW1lIGV4aXN0cy5gKVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFwcC52YXVsdC5jcmVhdGVGb2xkZXIoY3VycmVudFBhdGgpXG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgIGNvbnN0IHJldHJ5ID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChjdXJyZW50UGF0aClcbiAgICAgIGlmIChpc0ZvbGRlcihyZXRyeSkpXG4gICAgICAgIGNvbnRpbnVlXG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGNyZWF0ZSBmb2xkZXIgXCIke2N1cnJlbnRQYXRofVwiLmApXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzRm9sZGVyKGZpbGU6IFRBYnN0cmFjdEZpbGUgfCBudWxsKTogZmlsZSBpcyBURm9sZGVyIHtcbiAgcmV0dXJuIGZpbGUgIT09IG51bGwgJiYgJ2NoaWxkcmVuJyBpbiBmaWxlXG59XG4iLCJpbXBvcnQgeyBPUkRFUl9TVEVQIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHR5cGUgeyBUYXNrSXRlbSB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVvcmRlckxpc3Q8VD4oaXRlbXM6IFRbXSwgZnJvbUluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcik6IFRbXSB7XG4gIGlmIChmcm9tSW5kZXggPCAwIHx8IHRvSW5kZXggPCAwIHx8IGZyb21JbmRleCA9PT0gdG9JbmRleClcbiAgICByZXR1cm4gaXRlbXNcblxuICBjb25zdCBuZXh0ID0gWy4uLml0ZW1zXVxuICBjb25zdCBbbW92ZWRdID0gbmV4dC5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICBuZXh0LnNwbGljZSh0b0luZGV4LCAwLCBtb3ZlZClcbiAgcmV0dXJuIG5leHRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBlcnNpc3RUYXNrT3JkZXIoXG4gIHRhc2tzOiBUYXNrSXRlbVtdLFxuICB1cGRhdGVyOiAodGFzazogVGFza0l0ZW0sIG9yZGVyOiBudW1iZXIpID0+IFByb21pc2U8dm9pZD4sXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgZm9yIChjb25zdCBbaW5kZXgsIHRhc2tdIG9mIHRhc2tzLmVudHJpZXMoKSlcbiAgICBhd2FpdCB1cGRhdGVyKHRhc2ssIChpbmRleCArIDEpICogT1JERVJfU1RFUClcbn1cbiIsImltcG9ydCB7IFRGaWxlLCBURm9sZGVyLCB0eXBlIEFwcCB9IGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQgeyBQT01PRE9ST19MT0dfQkFTRU5BTUUsIFRBUkVBU19GT0xERVIgfSBmcm9tICcuLi9jb25zdGFudHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9tb2Rvcm9Mb2dFbnRyeSB7XG4gIGRhdGU6IHN0cmluZ1xuICB0aW1lOiBzdHJpbmdcbiAgdHlwZTogc3RyaW5nXG4gIHRhc2s6IHN0cmluZ1xuICBkZXZpYXRpb25Ib3VyczogbnVtYmVyXG59XG5cbmludGVyZmFjZSBBcHBlbmRQb21vZG9yb0xvZ0VudHJ5SW5wdXQge1xuICB0aW1lc3RhbXBNczogbnVtYmVyXG4gIHR5cGU6IHN0cmluZ1xuICB0YXNrOiBzdHJpbmdcbiAgZGV2aWF0aW9uSG91cnM6IG51bWJlclxufVxuXG5jb25zdCBQT01PRE9ST19MT0dfUEFUSCA9IGAke1RBUkVBU19GT0xERVJ9LyR7UE9NT0RPUk9fTE9HX0JBU0VOQU1FfS5tZGBcbmNvbnN0IFBPTU9ET1JPX0xPR19IRUFERVIgPSBbXG4gICcjIFJlZ2lzdHJvIFBvbW9kb3JvJyxcbiAgJycsXG4gICd8IGZlY2hhIHwgaG9yYXJpbyB8IHRpcG8gZGUgcG9tb2Rvcm8gfCB0YXJlYSB8IGRlc3ZpbyB8JyxcbiAgJ3wgLS0tIHwgLS0tIHwgLS0tIHwgLS0tIHwgLS0tIHwnLFxuXS5qb2luKCdcXG4nKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBwZW5kUG9tb2Rvcm9Mb2dFbnRyeShhcHA6IEFwcCwgaW5wdXQ6IEFwcGVuZFBvbW9kb3JvTG9nRW50cnlJbnB1dCkge1xuICBhd2FpdCBlbnN1cmVQb21vZG9yb0xvZ0ZpbGUoYXBwKVxuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShpbnB1dC50aW1lc3RhbXBNcylcbiAgY29uc3QgZGF0ZVRleHQgPSB0b0xvY2FsRGF0ZVRleHQoZGF0ZSlcbiAgY29uc3QgdGltZVRleHQgPSB0b0xvY2FsVGltZVRleHQoZGF0ZSlcbiAgY29uc3QgdHlwZVRleHQgPSBzYW5pdGl6ZVBpcGVUZXh0KGlucHV0LnR5cGUpXG4gIGNvbnN0IHRhc2tUZXh0ID0gc2FuaXRpemVQaXBlVGV4dChpbnB1dC50YXNrKVxuICBjb25zdCBkZXZpYXRpb25UZXh0ID0gZm9ybWF0SG91cnMoaW5wdXQuZGV2aWF0aW9uSG91cnMpXG4gIGNvbnN0IHJvdyA9IGB8ICR7ZGF0ZVRleHR9IHwgJHt0aW1lVGV4dH0gfCAke3R5cGVUZXh0fSB8ICR7dGFza1RleHR9IHwgJHtkZXZpYXRpb25UZXh0fSB8YFxuXG4gIGNvbnN0IGZpbGUgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKFBPTU9ET1JPX0xPR19QQVRIKVxuICBpZiAoIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKVxuICAgIHJldHVyblxuXG4gIGNvbnN0IGN1cnJlbnQgPSBhd2FpdCBhcHAudmF1bHQuY2FjaGVkUmVhZChmaWxlKVxuICBjb25zdCBuZXh0Q29udGVudCA9IGN1cnJlbnQudHJpbUVuZCgpXG4gICAgPyBgJHtjdXJyZW50LnRyaW1FbmQoKX1cXG4ke3Jvd31cXG5gXG4gICAgOiBgJHtQT01PRE9ST19MT0dfSEVBREVSfVxcbiR7cm93fVxcbmBcbiAgYXdhaXQgYXBwLnZhdWx0Lm1vZGlmeShmaWxlLCBuZXh0Q29udGVudClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYWRQb21vZG9yb0xvZ0VudHJpZXMoYXBwOiBBcHApOiBQcm9taXNlPFBvbW9kb3JvTG9nRW50cnlbXT4ge1xuICBhd2FpdCBlbnN1cmVQb21vZG9yb0xvZ0ZpbGUoYXBwKVxuXG4gIGNvbnN0IGZpbGUgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKFBPTU9ET1JPX0xPR19QQVRIKVxuICBpZiAoIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKVxuICAgIHJldHVybiBbXVxuXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBhcHAudmF1bHQuY2FjaGVkUmVhZChmaWxlKVxuICBjb25zdCBlbnRyaWVzOiBQb21vZG9yb0xvZ0VudHJ5W10gPSBbXVxuXG4gIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdCgvXFxyP1xcbi8pXG4gIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgIGlmICghbGluZS50cmltKCkuc3RhcnRzV2l0aCgnfCcpKVxuICAgICAgY29udGludWVcblxuICAgIGlmIChsaW5lLmluY2x1ZGVzKCdmZWNoYSB8IGhvcmFyaW8gfCB0aXBvIGRlIHBvbW9kb3JvIHwgdGFyZWEgfCBkZXN2aW8nKSlcbiAgICAgIGNvbnRpbnVlXG5cbiAgICBpZiAobGluZS5pbmNsdWRlcygnfCAtLS0gfCcpKVxuICAgICAgY29udGludWVcblxuICAgIGNvbnN0IGNvbHVtbnMgPSBsaW5lLnNwbGl0KCd8JykubWFwKGl0ZW0gPT4gaXRlbS50cmltKCkpLmZpbHRlcihCb29sZWFuKVxuICAgIGlmIChjb2x1bW5zLmxlbmd0aCA8IDUpXG4gICAgICBjb250aW51ZVxuXG4gICAgY29uc3QgZGV2aWF0aW9uSG91cnMgPSBOdW1iZXIucGFyc2VGbG9hdChjb2x1bW5zWzRdKVxuICAgIGVudHJpZXMucHVzaCh7XG4gICAgICBkYXRlOiBjb2x1bW5zWzBdLFxuICAgICAgdGltZTogY29sdW1uc1sxXSxcbiAgICAgIHR5cGU6IGNvbHVtbnNbMl0sXG4gICAgICB0YXNrOiBjb2x1bW5zWzNdLFxuICAgICAgZGV2aWF0aW9uSG91cnM6IE51bWJlci5pc05hTihkZXZpYXRpb25Ib3VycykgPyAwIDogZGV2aWF0aW9uSG91cnMsXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlbnRyaWVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbnRyaWVzQnlEYXRlKGVudHJpZXM6IFBvbW9kb3JvTG9nRW50cnlbXSwgbG9jYWxEYXRlVGV4dDogc3RyaW5nKTogUG9tb2Rvcm9Mb2dFbnRyeVtdIHtcbiAgcmV0dXJuIGVudHJpZXMuZmlsdGVyKGVudHJ5ID0+IGVudHJ5LmRhdGUgPT09IGxvY2FsRGF0ZVRleHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0xvY2FsRGF0ZVRleHQoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgY29uc3QgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKVxuICBjb25zdCBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJylcbiAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWBcbn1cblxuZnVuY3Rpb24gdG9Mb2NhbFRpbWVUZXh0KGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICBjb25zdCBob3VycyA9IFN0cmluZyhkYXRlLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJylcbiAgY29uc3QgbWludXRlcyA9IFN0cmluZyhkYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKVxuICByZXR1cm4gYCR7aG91cnN9OiR7bWludXRlc31gXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVBvbW9kb3JvTG9nRmlsZShhcHA6IEFwcCkge1xuICBjb25zdCBmb2xkZXIgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKFRBUkVBU19GT0xERVIpXG4gIGlmICghZm9sZGVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFwcC52YXVsdC5jcmVhdGVGb2xkZXIoVEFSRUFTX0ZPTERFUilcbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgY29uc3QgcmV0cnkgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKFRBUkVBU19GT0xERVIpXG4gICAgICBpZiAoIShyZXRyeSBpbnN0YW5jZW9mIFRGb2xkZXIpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHNlIHB1ZG8gY3JlYXIgbGEgY2FycGV0YSBcIiR7VEFSRUFTX0ZPTERFUn1cIi5gKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGV4aXN0aW5nID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChQT01PRE9ST19MT0dfUEFUSClcbiAgaWYgKGV4aXN0aW5nKVxuICAgIHJldHVyblxuXG4gIGF3YWl0IGFwcC52YXVsdC5jcmVhdGUoUE9NT0RPUk9fTE9HX1BBVEgsIGAke1BPTU9ET1JPX0xPR19IRUFERVJ9XFxuYClcbn1cblxuZnVuY3Rpb24gc2FuaXRpemVQaXBlVGV4dCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xcfC9nLCAnLycpLnRyaW0oKSB8fCAnLSdcbn1cblxuZnVuY3Rpb24gZm9ybWF0SG91cnMoaG91cnM6IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiAoTWF0aC5yb3VuZChob3VycyAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMilcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb2xvclBpY2tlcihcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgY29sb3JzOiBzdHJpbmdbXSxcbiAgc2VsZWN0ZWQ6IHN0cmluZyxcbiAgb25DaGFuZ2U6IChuZXh0Q29sb3I6IHN0cmluZykgPT4gdm9pZCxcbikge1xuICBjb25zdCB3cmFwID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jb2xvci1waWNrZXInIH0pXG5cbiAgZm9yIChjb25zdCBjb2xvciBvZiBjb2xvcnMpIHtcbiAgICBjb25zdCBzd2F0Y2ggPSB3cmFwLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICd0YXJlYXMtY29sb3Itc3dhdGNoJyB9KVxuICAgIHN3YXRjaC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3JcblxuICAgIGlmIChjb2xvciA9PT0gc2VsZWN0ZWQpXG4gICAgICBzd2F0Y2guYWRkQ2xhc3MoJ3RhcmVhcy1zd2F0Y2gtc2VsZWN0ZWQnKVxuXG4gICAgc3dhdGNoLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBvbkNoYW5nZShjb2xvcilcbiAgICAgIG1hcmtTZWxlY3RlZCh3cmFwLCBzd2F0Y2gpXG4gICAgICBjdXN0b21JbnB1dC52YWx1ZSA9IGNvbG9yXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY3VzdG9tSW5wdXQgPSB3cmFwLmNyZWF0ZUVsKCdpbnB1dCcpXG4gIGN1c3RvbUlucHV0LnR5cGUgPSAnY29sb3InXG4gIGN1c3RvbUlucHV0LnZhbHVlID0gc2VsZWN0ZWRcbiAgY3VzdG9tSW5wdXQuY2xhc3NOYW1lID0gJ3RhcmVhcy1jb2xvci1pbnB1dCdcbiAgY3VzdG9tSW5wdXQub25pbnB1dCA9ICgpID0+IHtcbiAgICBvbkNoYW5nZShjdXN0b21JbnB1dC52YWx1ZSlcbiAgICBjbGVhclNlbGVjdGVkKHdyYXApXG4gIH1cblxuICByZXR1cm4geyB3cmFwLCBjdXN0b21JbnB1dCB9XG59XG5cbmZ1bmN0aW9uIG1hcmtTZWxlY3RlZCh3cmFwOiBIVE1MRWxlbWVudCwgc2VsZWN0ZWRTd2F0Y2g6IEhUTUxFbGVtZW50KSB7XG4gIGNsZWFyU2VsZWN0ZWQod3JhcClcbiAgc2VsZWN0ZWRTd2F0Y2guYWRkQ2xhc3MoJ3RhcmVhcy1zd2F0Y2gtc2VsZWN0ZWQnKVxufVxuXG5mdW5jdGlvbiBjbGVhclNlbGVjdGVkKHdyYXA6IEhUTUxFbGVtZW50KSB7XG4gIHdyYXBcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy1jb2xvci1zd2F0Y2gnKVxuICAgIC5mb3JFYWNoKHN3YXRjaCA9PiBzd2F0Y2guY2xhc3NMaXN0LnJlbW92ZSgndGFyZWFzLXN3YXRjaC1zZWxlY3RlZCcpKVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7IExPQ0tFRF9FUVVJUE9fTkFNRVMsIFBSRVNFVF9DT0xPUlMgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBjb3VudFRvcExldmVsVGVhbVRhc2tzLCByZW5hbWVUZWFtSW5UYXNrcyB9IGZyb20gJy4uL2VuZ2luZXMvZnJvbnRtYXR0ZXJFbmdpbmUnXG5pbXBvcnQgdHlwZSB7IFRhcmVhc1BsdWdpbiB9IGZyb20gJy4uL3BsdWdpbi9UYXJlYXNQbHVnaW4nXG5pbXBvcnQgdHlwZSB7IEVxdWlwbywgVGFyZWFzVmlld0hhbmRsZSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgY3JlYXRlQ29sb3JQaWNrZXIgfSBmcm9tICcuLi91aS9jb2xvclBpY2tlcidcblxuZXhwb3J0IGNsYXNzIEVkaXRTZWN0aW9uTW9kYWwgZXh0ZW5kcyBvYnNpZGlhbi5Nb2RhbCB7XG4gIHByaXZhdGUgcGx1Z2luOiBUYXJlYXNQbHVnaW5cbiAgcHJpdmF0ZSBlcU9iajogRXF1aXBvXG4gIHByaXZhdGUgYm9hcmROYW1lOiBzdHJpbmdcbiAgcHJpdmF0ZSB2aWV3OiBUYXJlYXNWaWV3SGFuZGxlXG4gIHByaXZhdGUgZGF0YTogeyBuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcgfVxuXG4gIGNvbnN0cnVjdG9yKGFwcDogb2JzaWRpYW4uQXBwLCBwbHVnaW46IFRhcmVhc1BsdWdpbiwgZXFPYmo6IEVxdWlwbywgdmlldzogVGFyZWFzVmlld0hhbmRsZSwgYm9hcmROYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihhcHApXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW5cbiAgICB0aGlzLmVxT2JqID0gZXFPYmpcbiAgICB0aGlzLmJvYXJkTmFtZSA9IGJvYXJkTmFtZVxuICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICB0aGlzLmRhdGEgPSB7IG5hbWU6IGVxT2JqLm5hbWUsIGNvbG9yOiBlcU9iai5jb2xvciB9XG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXNcbiAgICBjb250ZW50RWwuYWRkQ2xhc3MoJ3RhcmVhcy1tb2RhbCcpXG4gICAgY29udGVudEVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ0VkaXRhciBzZWNjacOzbicgfSlcblxuICAgIG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZSgnTm9tYnJlJykuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgdGV4dC5zZXRWYWx1ZSh0aGlzLmRhdGEubmFtZSlcbiAgICAgIHRleHQub25DaGFuZ2UodmFsdWUgPT4gdGhpcy5kYXRhLm5hbWUgPSB2YWx1ZSlcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGV4dC5pbnB1dEVsLmZvY3VzKCksIDUwKVxuICAgIH0pXG5cbiAgICBjb25zdCBjb2xvclNldHRpbmcgPSBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpLnNldE5hbWUoJ0NvbG9yJylcbiAgICBjcmVhdGVDb2xvclBpY2tlcihjb2xvclNldHRpbmcuY29udHJvbEVsLCBQUkVTRVRfQ09MT1JTLCB0aGlzLmRhdGEuY29sb3IsIChuZXh0Q29sb3IpID0+IHtcbiAgICAgIHRoaXMuZGF0YS5jb2xvciA9IG5leHRDb2xvclxuICAgIH0pXG5cbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLW1vZGFsLWZvb3RlcicgfSlcblxuICAgIGlmICghdGhpcy5pc0xvY2tlZFNlY3Rpb24oKSkge1xuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgIHRleHQ6ICdFbGltaW5hciBzZWNjacOzbicsXG4gICAgICAgIGNsczogJ21vZC13YXJuaW5nJyxcbiAgICAgIH0pXG4gICAgICBkZWxldGVCdXR0b24uc3R5bGUubWFyZ2luUmlnaHQgPSAnYXV0bydcbiAgICAgIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jb25maXJtRGVsZXRlKClcbiAgICB9XG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NhbmNlbGFyJyB9KVxuICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jbG9zZSgpXG5cbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdHdWFyZGFyJywgY2xzOiAnbW9kLWN0YScgfSlcbiAgICBzYXZlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLnNhdmUoKVxuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNhdmUoKSB7XG4gICAgY29uc3QgbmV3TmFtZSA9IHRoaXMuZGF0YS5uYW1lLnRyaW0oKVxuICAgIGlmICghbmV3TmFtZSkge1xuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZSgnRWwgbm9tYnJlIGVzIHJlcXVlcmlkbycpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBvbGROYW1lID0gdGhpcy5lcU9iai5uYW1lXG4gICAgaWYgKHRoaXMuaXNMb2NrZWRTZWN0aW9uKCkgJiYgbmV3TmFtZSAhPT0gb2xkTmFtZSkge1xuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShgTGEgc2VjY2nDs24gXCIke29sZE5hbWV9XCIgbm8gcHVlZGUgcmVub21icmFyc2VgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKG5ld05hbWUgIT09IG9sZE5hbWUpXG4gICAgICBhd2FpdCByZW5hbWVUZWFtSW5UYXNrcyh0aGlzLmFwcCwgb2xkTmFtZSwgbmV3TmFtZSwgdGhpcy5ib2FyZE5hbWUpXG5cbiAgICB0aGlzLnBsdWdpbi51cGRhdGVFcXVpcG8ob2xkTmFtZSwgdGhpcy5ib2FyZE5hbWUsIHsgbmFtZTogbmV3TmFtZSwgY29sb3I6IHRoaXMuZGF0YS5jb2xvciB9KVxuICAgIHRoaXMudmlldy5leHBhbmRlZEdyb3Vwcy5kZWxldGUoYCR7dGhpcy5ib2FyZE5hbWV9Ojoke29sZE5hbWV9YClcbiAgICB0aGlzLnZpZXcuZXhwYW5kZWRHcm91cHMuYWRkKGAke3RoaXMuYm9hcmROYW1lfTo6JHtuZXdOYW1lfWApXG4gICAgdGhpcy52aWV3LnJlbmRlcigpXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cblxuICBwcml2YXRlIGNvbmZpcm1EZWxldGUoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2NrZWRTZWN0aW9uKCkpIHtcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYExhIHNlY2Npw7NuIFwiJHt0aGlzLmVxT2JqLm5hbWV9XCIgbm8gc2UgcHVlZGUgZWxpbWluYXJgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGFza0NvdW50ID0gY291bnRUb3BMZXZlbFRlYW1UYXNrcyh0aGlzLmFwcCwgdGhpcy5lcU9iai5uYW1lLCB0aGlzLmJvYXJkTmFtZSlcbiAgICBpZiAodGFza0NvdW50ID4gMCkge1xuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShgTGEgc2VjY2nDs24gXCIke3RoaXMuZXFPYmoubmFtZX1cIiB0aWVuZSAke3Rhc2tDb3VudH0gdGFyZWEocykuIE1vdmFsYXMgYSBvdHJhIHNlY2Npw7NuIGFudGVzIGRlIGVsaW1pbmFyLmApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnBsdWdpbi5yZW1vdmVFcXVpcG8odGhpcy5lcU9iai5uYW1lLCB0aGlzLmJvYXJkTmFtZSlcbiAgICB0aGlzLnZpZXcuZXhwYW5kZWRHcm91cHMuZGVsZXRlKGAke3RoaXMuYm9hcmROYW1lfTo6JHt0aGlzLmVxT2JqLm5hbWV9YClcbiAgICB0aGlzLnZpZXcucmVuZGVyKClcbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBTZWNjacOzbiBcIiR7dGhpcy5lcU9iai5uYW1lfVwiIGVsaW1pbmFkYWApXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cblxuICBwcml2YXRlIGlzTG9ja2VkU2VjdGlvbigpIHtcbiAgICByZXR1cm4gTE9DS0VEX0VRVUlQT19OQU1FUy5pbmNsdWRlcyh0aGlzLmVxT2JqLm5hbWUpXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQgeyBQUkVTRVRfQ09MT1JTIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHR5cGUgeyBUYXJlYXNQbHVnaW4gfSBmcm9tICcuLi9wbHVnaW4vVGFyZWFzUGx1Z2luJ1xuaW1wb3J0IHR5cGUgeyBUYXJlYXNWaWV3SGFuZGxlIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBjcmVhdGVDb2xvclBpY2tlciB9IGZyb20gJy4uL3VpL2NvbG9yUGlja2VyJ1xuXG5leHBvcnQgY2xhc3MgTmV3Qm9hcmRNb2RhbCBleHRlbmRzIG9ic2lkaWFuLk1vZGFsIHtcbiAgcHJpdmF0ZSBwbHVnaW46IFRhcmVhc1BsdWdpblxuICBwcml2YXRlIHZpZXc6IFRhcmVhc1ZpZXdIYW5kbGVcbiAgcHJpdmF0ZSBkYXRhOiB7IG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyB9XG5cbiAgY29uc3RydWN0b3IoYXBwOiBvYnNpZGlhbi5BcHAsIHBsdWdpbjogVGFyZWFzUGx1Z2luLCB2aWV3OiBUYXJlYXNWaWV3SGFuZGxlKSB7XG4gICAgc3VwZXIoYXBwKVxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luXG4gICAgdGhpcy52aWV3ID0gdmlld1xuICAgIHRoaXMuZGF0YSA9IHsgbmFtZTogJycsIGNvbG9yOiBQUkVTRVRfQ09MT1JTWzFdIH1cbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpc1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLW1vZGFsJylcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnTnVldm8gVGFibGVybycgfSlcblxuICAgIG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZSgnTm9tYnJlIGRlbCB0YWJsZXJvJykuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgdGV4dC5zZXRQbGFjZWhvbGRlcignRWo6IHBlcnNvbmFsLCBlc3R1ZGlvLCB0cmFiYWpvJylcbiAgICAgIHRleHQub25DaGFuZ2UodmFsdWUgPT4gdGhpcy5kYXRhLm5hbWUgPSB2YWx1ZSlcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGV4dC5pbnB1dEVsLmZvY3VzKCksIDUwKVxuICAgIH0pXG5cbiAgICBjb25zdCBjb2xvclNldHRpbmcgPSBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpLnNldE5hbWUoJ0NvbG9yJylcbiAgICBjcmVhdGVDb2xvclBpY2tlcihjb2xvclNldHRpbmcuY29udHJvbEVsLCBQUkVTRVRfQ09MT1JTLCB0aGlzLmRhdGEuY29sb3IsIChuZXh0Q29sb3IpID0+IHtcbiAgICAgIHRoaXMuZGF0YS5jb2xvciA9IG5leHRDb2xvclxuICAgIH0pXG5cbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLW1vZGFsLWZvb3RlcicgfSlcbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NyZWFyIHRhYmxlcm8nLCBjbHM6ICdtb2QtY3RhJyB9KVxuICAgIGNyZWF0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jcmVhdGVCb2FyZCgpXG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NhbmNlbGFyJyB9KVxuICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jbG9zZSgpXG4gIH1cblxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KClcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmROYW1lID0gdGhpcy5kYXRhLm5hbWUudHJpbSgpXG4gICAgaWYgKCFib2FyZE5hbWUpIHtcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoJ0VsIG5vbWJyZSBlcyByZXF1ZXJpZG8nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5wbHVnaW4uYWRkVGFibGVybyhib2FyZE5hbWUsIHRoaXMuZGF0YS5jb2xvcilcbiAgICB0aGlzLnZpZXcucmVuZGVyKClcbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBUYWJsZXJvIFwiJHtib2FyZE5hbWV9XCIgY3JlYWRvYClcbiAgICB0aGlzLmNsb3NlKClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7IFBSRVNFVF9DT0xPUlMgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgdHlwZSB7IFRhcmVhc1BsdWdpbiB9IGZyb20gJy4uL3BsdWdpbi9UYXJlYXNQbHVnaW4nXG5pbXBvcnQgdHlwZSB7IFRhcmVhc1ZpZXdIYW5kbGUgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IGNyZWF0ZUNvbG9yUGlja2VyIH0gZnJvbSAnLi4vdWkvY29sb3JQaWNrZXInXG5cbmV4cG9ydCBjbGFzcyBOZXdHcm91cE1vZGFsIGV4dGVuZHMgb2JzaWRpYW4uTW9kYWwge1xuICBwcml2YXRlIHBsdWdpbjogVGFyZWFzUGx1Z2luXG4gIHByaXZhdGUgdmlldzogVGFyZWFzVmlld0hhbmRsZVxuICBwcml2YXRlIGJvYXJkTmFtZTogc3RyaW5nXG4gIHByaXZhdGUgZGF0YTogeyBuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcgfVxuXG4gIGNvbnN0cnVjdG9yKGFwcDogb2JzaWRpYW4uQXBwLCBwbHVnaW46IFRhcmVhc1BsdWdpbiwgdmlldzogVGFyZWFzVmlld0hhbmRsZSwgYm9hcmROYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihhcHApXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW5cbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy5ib2FyZE5hbWUgPSBib2FyZE5hbWVcbiAgICB0aGlzLmRhdGEgPSB7IG5hbWU6ICcnLCBjb2xvcjogUFJFU0VUX0NPTE9SU1syXSB9XG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXNcbiAgICBjb250ZW50RWwuYWRkQ2xhc3MoJ3RhcmVhcy1tb2RhbCcpXG4gICAgY29udGVudEVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ051ZXZvIEdydXBvJyB9KVxuXG4gICAgbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKS5zZXROYW1lKCdOb21icmUgZGVsIGdydXBvJykuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgdGV4dC5zZXRQbGFjZWhvbGRlcignRWo6IEJhY2tlbmQsIEZyb250ZW5kLCBRQScpXG4gICAgICB0ZXh0Lm9uQ2hhbmdlKHZhbHVlID0+IHRoaXMuZGF0YS5uYW1lID0gdmFsdWUpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRleHQuaW5wdXRFbC5mb2N1cygpLCA1MClcbiAgICB9KVxuXG4gICAgY29uc3QgY29sb3JTZXR0aW5nID0gbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKS5zZXROYW1lKCdDb2xvcicpXG4gICAgY3JlYXRlQ29sb3JQaWNrZXIoY29sb3JTZXR0aW5nLmNvbnRyb2xFbCwgUFJFU0VUX0NPTE9SUywgdGhpcy5kYXRhLmNvbG9yLCAobmV4dENvbG9yKSA9PiB7XG4gICAgICB0aGlzLmRhdGEuY29sb3IgPSBuZXh0Q29sb3JcbiAgICB9KVxuXG4gICAgY29uc3QgZm9vdGVyID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1tb2RhbC1mb290ZXInIH0pXG5cbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NyZWFyIGdydXBvJywgY2xzOiAnbW9kLWN0YScgfSlcbiAgICBjcmVhdGVCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuY3JlYXRlR3JvdXAoKVxuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdDYW5jZWxhcicgfSlcbiAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuY2xvc2UoKVxuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpXG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUdyb3VwKCkge1xuICAgIGNvbnN0IGdyb3VwTmFtZSA9IHRoaXMuZGF0YS5uYW1lLnRyaW0oKVxuICAgIGlmICghZ3JvdXBOYW1lKSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdFbCBub21icmUgZXMgcmVxdWVyaWRvJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMucGx1Z2luLmFkZEVxdWlwb0luVGFibGVybyhncm91cE5hbWUsIHRoaXMuZGF0YS5jb2xvciwgdGhpcy5ib2FyZE5hbWUpXG4gICAgdGhpcy52aWV3LnJlbmRlcigpXG5cbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBHcnVwbyBcIiR7Z3JvdXBOYW1lfVwiIGNyZWFkb2ApXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQgdHlwZSB7IFRhc2tJdGVtIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBjbGFzcyBFZGl0VGFza0ZpbGVNb2RhbCBleHRlbmRzIG9ic2lkaWFuLk1vZGFsIHtcbiAgcHJpdmF0ZSB0YXNrOiBUYXNrSXRlbVxuICBwcml2YXRlIHRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBpbml0aWFsQ29udGVudCA9ICcnXG5cbiAgY29uc3RydWN0b3IoYXBwOiBvYnNpZGlhbi5BcHAsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgc3VwZXIoYXBwKVxuICAgIHRoaXMudGFzayA9IHRhc2tcbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpc1xuICAgIHRoaXMubW9kYWxFbC5hZGRDbGFzcygndGFyZWFzLWVkaXQtdGFzay1tb2RhbC1zaGVsbCcpXG4gICAgY29udGVudEVsLmFkZENsYXNzKCd0YXJlYXMtbW9kYWwnKVxuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLWVkaXQtdGFzay1tb2RhbCcpXG4gICAgY29udGVudEVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogYEVkaXRhcjogJHt0aGlzLnRhc2sudGFyZWF9YCB9KVxuXG4gICAgY29uc3QgaGVscGVyID0gY29udGVudEVsLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtZWRpdC10YXNrLWhpbnQnIH0pXG4gICAgaGVscGVyLnNldFRleHQoYEVkaXRhIGVsIGNvbnRlbmlkbyBjb21wbGV0byBkZSAke3RoaXMudGFzay5maWxlLnBhdGh9YClcblxuICAgIHRoaXMudGV4dGFyZWEgPSBjb250ZW50RWwuY3JlYXRlRWwoJ3RleHRhcmVhJywge1xuICAgICAgY2xzOiAndGFyZWFzLWVkaXQtdGFzay10ZXh0YXJlYScsXG4gICAgICBhdHRyOiB7XG4gICAgICAgIHNwZWxsY2hlY2s6ICdmYWxzZScsXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLW1vZGFsLWZvb3RlcicgfSlcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NhbmNlbGFyJyB9KVxuICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jbG9zZSgpXG5cbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdHdWFyZGFyJywgY2xzOiAnbW9kLWN0YScgfSlcbiAgICBzYXZlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB2b2lkIHRoaXMuc2F2ZSgpXG4gICAgfVxuXG4gICAgdm9pZCB0aGlzLmxvYWRGaWxlQ29udGVudCgpXG4gIH1cblxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbG9hZEZpbGVDb250ZW50KCkge1xuICAgIGlmICghdGhpcy50ZXh0YXJlYSlcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNhY2hlZFJlYWQodGhpcy50YXNrLmZpbGUpXG4gICAgdGhpcy5pbml0aWFsQ29udGVudCA9IGNvbnRlbnRcbiAgICB0aGlzLnRleHRhcmVhLnZhbHVlID0gY29udGVudFxuICAgIHRoaXMudGV4dGFyZWEuZm9jdXMoKVxuICAgIHRoaXMudGV4dGFyZWEuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgMClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2F2ZSgpIHtcbiAgICBpZiAoIXRoaXMudGV4dGFyZWEpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IG5leHRDb250ZW50ID0gdGhpcy50ZXh0YXJlYS52YWx1ZVxuICAgIGlmIChuZXh0Q29udGVudCA9PT0gdGhpcy5pbml0aWFsQ29udGVudCkge1xuICAgICAgdGhpcy5jbG9zZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkodGhpcy50YXNrLmZpbGUsIG5leHRDb250ZW50KVxuICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoJ1RhcmVhIGFjdHVhbGl6YWRhJylcbiAgICB0aGlzLmNsb3NlKClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB0eXBlIHsgVGFza0l0ZW0gfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGNsYXNzIEFkZFRhc2tDb21tZW50TW9kYWwgZXh0ZW5kcyBvYnNpZGlhbi5Nb2RhbCB7XG4gIHByaXZhdGUgdGFzazogVGFza0l0ZW1cbiAgcHJpdmF0ZSB0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGwgPSBudWxsXG5cbiAgY29uc3RydWN0b3IoYXBwOiBvYnNpZGlhbi5BcHAsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgc3VwZXIoYXBwKVxuICAgIHRoaXMudGFzayA9IHRhc2tcbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpc1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLW1vZGFsJylcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiBgQ29tZW50YXJpbzogJHt0aGlzLnRhc2sudGFyZWF9YCB9KVxuXG4gICAgY29uc3QgaGVscCA9IGNvbnRlbnRFbC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLWNvbW1lbnQtbW9kYWwtaGludCcgfSlcbiAgICBoZWxwLnNldFRleHQoJ1NlIGFncmVnYXLDoSBhbCBmaW5hbCBkZWwgYXJjaGl2byBkZSBsYSB0YXJlYS4nKVxuXG4gICAgdGhpcy50ZXh0YXJlYSA9IGNvbnRlbnRFbC5jcmVhdGVFbCgndGV4dGFyZWEnLCB7XG4gICAgICBjbHM6ICd0YXJlYXMtY29tbWVudC1tb2RhbC10ZXh0YXJlYScsXG4gICAgICBhdHRyOiB7IHBsYWNlaG9sZGVyOiAnRXNjcmliZSB1biBjb21lbnRhcmlvLi4uJyB9LFxuICAgIH0pXG4gICAgdGhpcy50ZXh0YXJlYS5mb2N1cygpXG5cbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLW1vZGFsLWZvb3RlcicgfSlcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ2FuY2VsYXInIH0pXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlKClcblxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQWdyZWdhcicsIGNsczogJ21vZC1jdGEnIH0pXG4gICAgYWRkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB2b2lkIHRoaXMuYXBwZW5kQ29tbWVudCgpXG4gICAgfVxuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGFwcGVuZENvbW1lbnQoKSB7XG4gICAgY29uc3QgcmF3Q29tbWVudCA9IHRoaXMudGV4dGFyZWE/LnZhbHVlID8/ICcnXG4gICAgY29uc3QgY29tbWVudCA9IHJhd0NvbW1lbnQudHJpbSgpXG4gICAgaWYgKCFjb21tZW50KSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdFc2NyaWJlIHVuIGNvbWVudGFyaW8gYW50ZXMgZGUgZ3VhcmRhcicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQuY2FjaGVkUmVhZCh0aGlzLnRhc2suZmlsZSlcbiAgICBjb25zdCBoYXNDb250ZW50ID0gY3VycmVudC50cmltKCkubGVuZ3RoID4gMFxuICAgIGNvbnN0IHdpdGhOZXdsaW5lID0gY3VycmVudC5lbmRzV2l0aCgnXFxuJykgPyBjdXJyZW50IDogYCR7Y3VycmVudH1cXG5gXG4gICAgY29uc3Qgc3BhY2VyID0gaGFzQ29udGVudCA/ICdcXG4nIDogJydcbiAgICBjb25zdCBjb21tZW50QmxvY2sgPSB0aGlzLmJ1aWxkQ29tbWVudEJsb2NrKGNvbW1lbnQpXG4gICAgY29uc3QgbmV4dCA9IGAke3dpdGhOZXdsaW5lfSR7c3BhY2VyfSR7Y29tbWVudEJsb2NrfWBcblxuICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeSh0aGlzLnRhc2suZmlsZSwgbmV4dClcbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdDb21lbnRhcmlvIGFncmVnYWRvJylcbiAgICB0aGlzLmNsb3NlKClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRDb21tZW50QmxvY2soY29tbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgZGF5ID0gU3RyaW5nKG5vdy5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJylcbiAgICBjb25zdCBtb250aCA9IFN0cmluZyhub3cuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJylcbiAgICBjb25zdCB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKClcbiAgICBjb25zdCBob3VycyA9IFN0cmluZyhub3cuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgJzAnKVxuICAgIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcobm93LmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKVxuXG4gICAgY29uc3Qgc3RhbXAgPSBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn0gJHtob3Vyc306JHttaW51dGVzfWBcbiAgICByZXR1cm4gYCMjIENvbWVudGFyaW8gLSAke3N0YW1wfVxcblxcbiR7Y29tbWVudH1cXG5gXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbnRlcmZhY2UgQ29uZmlybURlbGV0ZVRhc2tNb2RhbE9wdGlvbnMge1xuICB0aXRsZTogc3RyaW5nXG4gIG1lc3NhZ2U6IHN0cmluZ1xuICBjb25maXJtVGV4dD86IHN0cmluZ1xuICBvbkNvbmZpcm06ICgpID0+IFByb21pc2U8dm9pZD5cbn1cblxuZXhwb3J0IGNsYXNzIENvbmZpcm1EZWxldGVUYXNrTW9kYWwgZXh0ZW5kcyBvYnNpZGlhbi5Nb2RhbCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogQ29uZmlybURlbGV0ZVRhc2tNb2RhbE9wdGlvbnNcblxuICBjb25zdHJ1Y3RvcihhcHA6IG9ic2lkaWFuLkFwcCwgb3B0aW9uczogQ29uZmlybURlbGV0ZVRhc2tNb2RhbE9wdGlvbnMpIHtcbiAgICBzdXBlcihhcHApXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzXG4gICAgY29udGVudEVsLmFkZENsYXNzKCd0YXJlYXMtbW9kYWwnKVxuICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6IHRoaXMub3B0aW9ucy50aXRsZSB9KVxuICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgncCcsIHsgdGV4dDogdGhpcy5vcHRpb25zLm1lc3NhZ2UgfSlcblxuICAgIGNvbnN0IGZvb3RlciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtbW9kYWwtZm9vdGVyJyB9KVxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ2FuY2VsYXInIH0pXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlKClcblxuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIHRleHQ6IHRoaXMub3B0aW9ucy5jb25maXJtVGV4dCA/PyAnRWxpbWluYXInLFxuICAgICAgY2xzOiAnbW9kLXdhcm5pbmcnLFxuICAgIH0pXG4gICAgY29uZmlybUJ1dHRvbi5vbmNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIGNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMub3B0aW9ucy5vbkNvbmZpcm0oKVxuICAgICAgICB0aGlzLmNsb3NlKClcbiAgICAgIH1cbiAgICAgIGZpbmFsbHkge1xuICAgICAgICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgICAgY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB0eXBlIHsgUG9tb2Rvcm9EdXJhdGlvbnMgfSBmcm9tICcuLi90eXBlcydcblxuaW50ZXJmYWNlIFBvbW9kb3JvUHJlc2V0IHtcbiAgaWQ6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIHdvcmtMYWJlbDogc3RyaW5nXG4gIHNob3J0QnJlYWtMYWJlbDogc3RyaW5nXG4gIGN5Y2xlc0xhYmVsOiBzdHJpbmdcbiAgbG9uZ0JyZWFrTGFiZWw6IHN0cmluZ1xuICBpZGVhbEZvcjogc3RyaW5nXG4gIGR1cmF0aW9uczogUG9tb2Rvcm9EdXJhdGlvbnNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb21vZG9yb1ByZXNldENhcmREYXRhIHtcbiAgdGl0bGU6IHN0cmluZ1xuICB1c2FnZTogc3RyaW5nXG4gIHdvcmtMYWJlbDogc3RyaW5nXG4gIHNob3J0QnJlYWtMYWJlbDogc3RyaW5nXG4gIGxvbmdCcmVha0xhYmVsOiBzdHJpbmdcbiAgY3ljbGVzTGFiZWw6IHN0cmluZ1xufVxuXG5jb25zdCBQT01PRE9ST19QUkVTRVRTOiBQb21vZG9yb1ByZXNldFtdID0gW1xuICB7XG4gICAgaWQ6ICdkZWJ1Zy0xLTEnLFxuICAgIHRpdGxlOiAn8J+boCBEZWJ1ZyAtIDEvMScsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogMSBtaW4nLFxuICAgIHNob3J0QnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGNvcnRvOiAxIG1pbicsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDQnLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDEgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IHByb2JhciByw6FwaWRvIGVsIGZsdWpvIGRlbCB0ZW1wb3JpemFkb3IgeSB0cmFuc2ljaW9uZXMgZGUgZmFzZS4nLFxuICAgIGR1cmF0aW9uczogeyB3b3JrTWludXRlczogMSwgc2hvcnRCcmVha01pbnV0ZXM6IDEsIGxvbmdCcmVha01pbnV0ZXM6IDEgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnc3RhbmRhcmQtMjUtNScsXG4gICAgdGl0bGU6ICfirZAgRXN0w6FuZGFyIC0gMjUvNScsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogMjUgbWluJyxcbiAgICBzaG9ydEJyZWFrTGFiZWw6ICdEZXNjYW5zbyBjb3J0bzogNSBtaW4nLFxuICAgIGN5Y2xlc0xhYmVsOiAnQ2ljbG9zOiA0JyxcbiAgICBsb25nQnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGxhcmdvOiAxNSBtaW4nLFxuICAgIGlkZWFsRm9yOiAnSWRlYWwgcGFyYTogdGFyZWFzIG1vZGVyYWRhcywgcHJvZ3JhbWFjacOzbiwgZXN0dWRpbywgbWFudGVuZXIgcml0bW8gY29uc3RhbnRlIHNpbiBxdWVtYXJzZS4nLFxuICAgIGR1cmF0aW9uczogeyB3b3JrTWludXRlczogMjUsIHNob3J0QnJlYWtNaW51dGVzOiA1LCBsb25nQnJlYWtNaW51dGVzOiAxNSB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdkZWVwLWZvY3VzLTUwLTEwJyxcbiAgICB0aXRsZTogJ+KaoSBQYXJhIGZvY28gcHJvZnVuZG8gLSA1MC8xMCcsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogNTAgbWluJyxcbiAgICBzaG9ydEJyZWFrTGFiZWw6ICdEZXNjYW5zbyBjb3J0bzogMTAgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogMycsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMjAgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IHByb2dyYW1hY2nDs24gcGVzYWRhLCBkZWJ1Z2dpbmcsIGludmVzdGlnYWNpw7NuLCBlc2NyaXR1cmEgbGFyZ2EuIEN1YW5kbyB0ZSBtZXTDqXMgZW4gXCJkZWVwIHdvcmtcIi4nLFxuICAgIGR1cmF0aW9uczogeyB3b3JrTWludXRlczogNTAsIHNob3J0QnJlYWtNaW51dGVzOiAxMCwgbG9uZ0JyZWFrTWludXRlczogMjAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnZGV2LWNsYXNzaWMtNTItMTcnLFxuICAgIHRpdGxlOiAn8J+SuyBDbMOhc2ljbyBkZSBwcm9ncmFtYWRvcmVzIC0gNTIvMTcnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDUyIG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDE3IG1pbicsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDInLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDIwIG1pbicsXG4gICAgaWRlYWxGb3I6ICdJZGVhbCBwYXJhOiB0YXJlYXMgY29tcGxlamFzIHF1ZSByZXF1aWVyZW4gZmx1aXIgc2luIGNvcnRlcyBsYXJnb3MuIE1hbnRpZW5lIGVuZXJnw61hIGFsdGEuJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDUyLCBzaG9ydEJyZWFrTWludXRlczogMTcsIGxvbmdCcmVha01pbnV0ZXM6IDIwIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ2NyZWF0aXZlLTQwLTEwJyxcbiAgICB0aXRsZTogJ/CfjqggQ3JlYXRpdm8gLSA0MC8xMCcsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogNDAgbWluJyxcbiAgICBzaG9ydEJyZWFrTGFiZWw6ICdEZXNjYW5zbyBjb3J0bzogMTAgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogNCcsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMjAgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IGRpc2XDsW8sIGVzY3JpdHVyYSBjcmVhdGl2YSwgYnJhaW5zdG9ybWluZywgZG9uZGUgcXVlcsOpcyB0aWVtcG8gcGFyYSBlbnRyYXIgZW4gZXN0YWRvLicsXG4gICAgZHVyYXRpb25zOiB7IHdvcmtNaW51dGVzOiA0MCwgc2hvcnRCcmVha01pbnV0ZXM6IDEwLCBsb25nQnJlYWtNaW51dGVzOiAyMCB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdzcHJpbnQtNDUtMTUnLFxuICAgIHRpdGxlOiAn8J+UqCBTcHJpbnQgLSA0NS8xNScsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogNDUgbWluJyxcbiAgICBzaG9ydEJyZWFrTGFiZWw6ICdEZXNjYW5zbyBjb3J0bzogMTUgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogMycsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMjUgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IHRhcmVhcyBncmFuZGVzIGRvbmRlIG5lY2VzaXTDoXMgZW1wdWphciBmdWVydGUgKHJlZmFjdG9ycywgZG9jdW1lbnRhY2nDs24sIGFuw6FsaXNpcykuJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDQ1LCBzaG9ydEJyZWFrTWludXRlczogMTUsIGxvbmdCcmVha01pbnV0ZXM6IDI1IH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ2FkaGQtMjAtNScsXG4gICAgdGl0bGU6ICfwn6egIFBhcmEgVERBSCBvIG11Y2hhIGRpc3RyYWNjacOzbiAtIDIwLzUnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDIwIG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDUgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogNCcsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMTUgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IGN1YW5kbyB0ZSBjdWVzdGEgZW5nYW5jaGFydGUgbyBtYW50ZW5lciBmb2NvIHNvc3Rlbmlkby4gRW50cmFkYXMgY29ydGFzIHBlcm8gZWZlY3RpdmFzLicsXG4gICAgZHVyYXRpb25zOiB7IHdvcmtNaW51dGVzOiAyMCwgc2hvcnRCcmVha01pbnV0ZXM6IDUsIGxvbmdCcmVha01pbnV0ZXM6IDE1IH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ21pY3JvLTE1LTUnLFxuICAgIHRpdGxlOiAn8J+TiSBNaWNyby1Qb21vZG9ybyAtIDE1LzUnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDE1IG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDUgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogNCcsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMTUgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IHRhcmVhcyBjaGljYXMsIHJldmlzYXIgbWFpbHMsIG9yZGVuYXIgcGVuZGllbnRlcywgY3VhbmRvIGVzdMOhcyBtZW50YWxtZW50ZSBtdXkgY2Fuc2Fkby4nLFxuICAgIGR1cmF0aW9uczogeyB3b3JrTWludXRlczogMTUsIHNob3J0QnJlYWtNaW51dGVzOiA1LCBsb25nQnJlYWtNaW51dGVzOiAxNSB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdsb3ctZW5lcmd5LTE1LTMnLFxuICAgIHRpdGxlOiAn8J+UiyBFbmVyZ8OtYSBiYWphIC0gMTUvMycsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogMTUgbWluJyxcbiAgICBzaG9ydEJyZWFrTGFiZWw6ICdEZXNjYW5zbyBjb3J0bzogMyBtaW4nLFxuICAgIGN5Y2xlc0xhYmVsOiAnQ2ljbG9zOiA0JyxcbiAgICBsb25nQnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGxhcmdvOiAxMiBtaW4nLFxuICAgIGlkZWFsRm9yOiAnSWRlYWwgcGFyYTogZMOtYXMgZGUgZmF0aWdhIG1lbnRhbCwgdGFyZWFzIGxpZ2VyYXMsIGF2YW56YXIgbGVudG8gcGVybyBjb25zdGFudGUuJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDE1LCBzaG9ydEJyZWFrTWludXRlczogMywgbG9uZ0JyZWFrTWludXRlczogMTIgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAndWx0cmFkaWFuLTkwLTIwJyxcbiAgICB0aXRsZTogJ/Cfp7EgQ2ljbG9zIHVsdHJhZGlhbm9zIC0gOTAvMjAnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDkwIG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IG5vIGFwbGljYScsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDIgcG9yIHNlc2nDs24nLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDIwIG1pbicsXG4gICAgaWRlYWxGb3I6ICdJZGVhbCBwYXJhOiBzZXNpb25lcyBjcmVhdGl2YXMgcHJvZnVuZGFzIG8gZGUgaW5nZW5pZXLDrWEgZG9uZGUgY29ydGFyIGVzIGNvbnRyYXByb2R1Y2VudGUuJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDkwLCBzaG9ydEJyZWFrTWludXRlczogMjAsIGxvbmdCcmVha01pbnV0ZXM6IDIwIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ2FnZ3Jlc3NpdmUtNTAtNScsXG4gICAgdGl0bGU6ICfwn6epIDUwLzUgKGFncmVzaXZvKScsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogNTAgbWluJyxcbiAgICBzaG9ydEJyZWFrTGFiZWw6ICdEZXNjYW5zbyBjb3J0bzogNSBtaW4nLFxuICAgIGN5Y2xlc0xhYmVsOiAnQ2ljbG9zOiAzJyxcbiAgICBsb25nQnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGxhcmdvOiAyMCBtaW4nLFxuICAgIGlkZWFsRm9yOiAnSWRlYWwgcGFyYTogdGFyZWFzIGRlIGFsdGEgcHJlc2nDs24gbyBlbnRyZWdhcyBkb25kZSBxdWVyw6lzIG1pbmltaXphciBwYXVzYXMuJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDUwLCBzaG9ydEJyZWFrTWludXRlczogNSwgbG9uZ0JyZWFrTWludXRlczogMjAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnYmFsYW5jZWQtMzAtMTAnLFxuICAgIHRpdGxlOiAn8J+qtiAzMC8xMCAoYmFsYW5jZWFkbyknLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDMwIG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDEwIG1pbicsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDQnLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDIwIG1pbicsXG4gICAgaWRlYWxGb3I6ICdJZGVhbCBwYXJhOiB0YXJlYXMgZGUgYW7DoWxpc2lzLCBhZG1pbmlzdHJhY2nDs24sIGNvbnRhYmlsaWRhZCBtZW50YWwgbGl2aWFuYSBvIHJlc2VhcmNoIHZhcmlhZG8uJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDMwLCBzaG9ydEJyZWFrTWludXRlczogMTAsIGxvbmdCcmVha01pbnV0ZXM6IDIwIH0sXG4gIH0sXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb21vZG9yb1ByZXNldENhcmREYXRhKGR1cmF0aW9uczogUG9tb2Rvcm9EdXJhdGlvbnMpOiBQb21vZG9yb1ByZXNldENhcmREYXRhIHtcbiAgY29uc3QgcHJlc2V0ID0gZmluZFBvbW9kb3JvUHJlc2V0QnlEdXJhdGlvbnMoZHVyYXRpb25zKVxuICBpZiAocHJlc2V0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBwcmVzZXQudGl0bGUsXG4gICAgICB1c2FnZTogcHJlc2V0LmlkZWFsRm9yLnJlcGxhY2UoL15JZGVhbCBwYXJhOlxccyovaSwgJycpLFxuICAgICAgd29ya0xhYmVsOiBwcmVzZXQud29ya0xhYmVsLFxuICAgICAgc2hvcnRCcmVha0xhYmVsOiBwcmVzZXQuc2hvcnRCcmVha0xhYmVsLFxuICAgICAgbG9uZ0JyZWFrTGFiZWw6IHByZXNldC5sb25nQnJlYWtMYWJlbCxcbiAgICAgIGN5Y2xlc0xhYmVsOiBwcmVzZXQuY3ljbGVzTGFiZWwsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogYFBlcnNvbmFsaXphZG8gLSAke2R1cmF0aW9ucy53b3JrTWludXRlc30vJHtkdXJhdGlvbnMuc2hvcnRCcmVha01pbnV0ZXN9YCxcbiAgICB1c2FnZTogJ0NvbmZpZ3VyYWNpw7NuIG1hbnVhbCBndWFyZGFkYS4nLFxuICAgIHdvcmtMYWJlbDogYFRyYWJham86ICR7ZHVyYXRpb25zLndvcmtNaW51dGVzfSBtaW5gLFxuICAgIHNob3J0QnJlYWtMYWJlbDogYERlc2NhbnNvIGNvcnRvOiAke2R1cmF0aW9ucy5zaG9ydEJyZWFrTWludXRlc30gbWluYCxcbiAgICBsb25nQnJlYWtMYWJlbDogYERlc2NhbnNvIGxhcmdvOiAke2R1cmF0aW9ucy5sb25nQnJlYWtNaW51dGVzfSBtaW5gLFxuICAgIGN5Y2xlc0xhYmVsOiAnQ2ljbG9zOiA0JyxcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kUG9tb2Rvcm9QcmVzZXRCeUR1cmF0aW9ucyhkdXJhdGlvbnM6IFBvbW9kb3JvRHVyYXRpb25zKTogUG9tb2Rvcm9QcmVzZXQgfCBudWxsIHtcbiAgZm9yIChjb25zdCBwcmVzZXQgb2YgUE9NT0RPUk9fUFJFU0VUUykge1xuICAgIGlmIChcbiAgICAgIHByZXNldC5kdXJhdGlvbnMud29ya01pbnV0ZXMgPT09IGR1cmF0aW9ucy53b3JrTWludXRlc1xuICAgICAgJiYgcHJlc2V0LmR1cmF0aW9ucy5zaG9ydEJyZWFrTWludXRlcyA9PT0gZHVyYXRpb25zLnNob3J0QnJlYWtNaW51dGVzXG4gICAgICAmJiBwcmVzZXQuZHVyYXRpb25zLmxvbmdCcmVha01pbnV0ZXMgPT09IGR1cmF0aW9ucy5sb25nQnJlYWtNaW51dGVzXG4gICAgKSB7XG4gICAgICByZXR1cm4gcHJlc2V0XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGNsYXNzIFBvbW9kb3JvUHJlc2V0TW9kYWwgZXh0ZW5kcyBvYnNpZGlhbi5Nb2RhbCB7XG4gIHByaXZhdGUgb25BY2NlcHQ6IChkdXJhdGlvbnM6IFBvbW9kb3JvRHVyYXRpb25zKSA9PiB2b2lkXG4gIHByaXZhdGUgc2VsZWN0ZWRQcmVzZXRJZDogc3RyaW5nXG4gIHByaXZhdGUgY2FyZEJ5SWQgPSBuZXcgTWFwPHN0cmluZywgSFRNTERpdkVsZW1lbnQ+KClcblxuICBjb25zdHJ1Y3RvcihhcHA6IG9ic2lkaWFuLkFwcCwgY3VycmVudER1cmF0aW9uczogUG9tb2Rvcm9EdXJhdGlvbnMsIG9uQWNjZXB0OiAoZHVyYXRpb25zOiBQb21vZG9yb0R1cmF0aW9ucykgPT4gdm9pZCkge1xuICAgIHN1cGVyKGFwcClcbiAgICB0aGlzLm9uQWNjZXB0ID0gb25BY2NlcHRcbiAgICBjb25zdCBtYXRjaGVkID0gZmluZFBvbW9kb3JvUHJlc2V0QnlEdXJhdGlvbnMoY3VycmVudER1cmF0aW9ucylcbiAgICB0aGlzLnNlbGVjdGVkUHJlc2V0SWQgPSBtYXRjaGVkPy5pZCA/PyBQT01PRE9ST19QUkVTRVRTWzBdLmlkXG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgdGhpcy5tb2RhbEVsLmFkZENsYXNzKCd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LW1vZGFsLXNoZWxsJylcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpc1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLW1vZGFsJywgJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtbW9kYWwnKVxuICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdFbGVnw60gdW4gcHJlc2V0IFBvbW9kb3JvJyB9KVxuXG4gICAgY29uc3QgY2FyZHMgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXByZXNldC1jYXJkcycgfSlcbiAgICBmb3IgKGNvbnN0IHByZXNldCBvZiBQT01PRE9ST19QUkVTRVRTKSB7XG4gICAgICBjb25zdCBjYXJkID0gY2FyZHMuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXByZXNldC1jYXJkJyB9KVxuICAgICAgY2FyZC5zZXRBdHRyKCdyb2xlJywgJ2J1dHRvbicpXG4gICAgICBjYXJkLnNldEF0dHIoJ3RhYmluZGV4JywgJzAnKVxuICAgICAgY2FyZC5vbmNsaWNrID0gKCkgPT4gdGhpcy5zZWxlY3RQcmVzZXQocHJlc2V0LmlkKVxuICAgICAgY2FyZC5vbmtleWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSAhPT0gJ0VudGVyJyAmJiBldmVudC5rZXkgIT09ICcgJylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLnNlbGVjdFByZXNldChwcmVzZXQuaWQpXG4gICAgICB9XG5cbiAgICAgIGNhcmQuY3JlYXRlRWwoJ2gzJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LXRpdGxlJywgdGV4dDogcHJlc2V0LnRpdGxlIH0pXG4gICAgICBjYXJkLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtZGl2aWRlcicgfSlcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtdXNhZ2UtdGl0bGUnLCB0ZXh0OiAnVXNvJyB9KVxuICAgICAgY2FyZC5jcmVhdGVFbCgncCcsIHtcbiAgICAgICAgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXByZXNldC11c2FnZScsXG4gICAgICAgIHRleHQ6IHByZXNldC5pZGVhbEZvci5yZXBsYWNlKC9eSWRlYWwgcGFyYTpcXHMqL2ksICcnKSxcbiAgICAgIH0pXG4gICAgICBjYXJkLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtZGl2aWRlcicgfSlcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtbGluZScsIHRleHQ6IHByZXNldC53b3JrTGFiZWwgfSlcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtbGluZScsIHRleHQ6IHByZXNldC5zaG9ydEJyZWFrTGFiZWwgfSlcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtbGluZScsIHRleHQ6IHByZXNldC5sb25nQnJlYWtMYWJlbCB9KVxuICAgICAgY2FyZC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXByZXNldC1saW5lJywgdGV4dDogcHJlc2V0LmN5Y2xlc0xhYmVsIH0pXG5cbiAgICAgIHRoaXMuY2FyZEJ5SWQuc2V0KHByZXNldC5pZCwgY2FyZClcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hTZWxlY3Rpb24oKVxuXG4gICAgY29uc3QgZm9vdGVyID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1tb2RhbC1mb290ZXInIH0pXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdDYW5jZWxhcicgfSlcbiAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuY2xvc2UoKVxuXG4gICAgY29uc3QgYWNjZXB0QnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdBY2VwdGFyJywgY2xzOiAnbW9kLWN0YScgfSlcbiAgICBhY2NlcHRCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuYWNjZXB0KClcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5tb2RhbEVsLnJlbW92ZUNsYXNzKCd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LW1vZGFsLXNoZWxsJylcbiAgICB0aGlzLmNhcmRCeUlkLmNsZWFyKClcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpXG4gIH1cblxuICBwcml2YXRlIHNlbGVjdFByZXNldChwcmVzZXRJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWxlY3RlZFByZXNldElkID0gcHJlc2V0SWRcbiAgICB0aGlzLnJlZnJlc2hTZWxlY3Rpb24oKVxuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoU2VsZWN0aW9uKCkge1xuICAgIGZvciAoY29uc3QgcHJlc2V0IG9mIFBPTU9ET1JPX1BSRVNFVFMpIHtcbiAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmNhcmRCeUlkLmdldChwcmVzZXQuaWQpXG4gICAgICBpZiAoIWNhcmQpXG4gICAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGNhcmQudG9nZ2xlQ2xhc3MoJ2lzLXNlbGVjdGVkJywgdGhpcy5zZWxlY3RlZFByZXNldElkID09PSBwcmVzZXQuaWQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhY2NlcHQoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBQT01PRE9ST19QUkVTRVRTLmZpbmQocHJlc2V0ID0+IHByZXNldC5pZCA9PT0gdGhpcy5zZWxlY3RlZFByZXNldElkKVxuICAgIGlmICghc2VsZWN0ZWQpXG4gICAgICByZXR1cm5cblxuICAgIHRoaXMub25BY2NlcHQoeyAuLi5zZWxlY3RlZC5kdXJhdGlvbnMgfSlcbiAgICB0aGlzLmNsb3NlKClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB0eXBlIHsgVGFza0l0ZW0gfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGNsYXNzIFNlbGVjdFBvbW9kb3JvVGFza01vZGFsIGV4dGVuZHMgb2JzaWRpYW4uTW9kYWwge1xuICBwcml2YXRlIHRhc2tzOiBUYXNrSXRlbVtdXG4gIHByaXZhdGUgc2VsZWN0ZWRUYXNrUGF0aDogc3RyaW5nIHwgbnVsbFxuICBwcml2YXRlIG9uU2VsZWN0OiAodGFza1BhdGg6IHN0cmluZykgPT4gdm9pZFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGFwcDogb2JzaWRpYW4uQXBwLFxuICAgIHRhc2tzOiBUYXNrSXRlbVtdLFxuICAgIHNlbGVjdGVkVGFza1BhdGg6IHN0cmluZyB8IG51bGwsXG4gICAgb25TZWxlY3Q6ICh0YXNrUGF0aDogc3RyaW5nKSA9PiB2b2lkLFxuICApIHtcbiAgICBzdXBlcihhcHApXG4gICAgdGhpcy50YXNrcyA9IFsuLi50YXNrc10uc29ydCgoYSwgYikgPT4gYS50YXJlYS5sb2NhbGVDb21wYXJlKGIudGFyZWEpKVxuICAgIHRoaXMuc2VsZWN0ZWRUYXNrUGF0aCA9IHNlbGVjdGVkVGFza1BhdGhcbiAgICB0aGlzLm9uU2VsZWN0ID0gb25TZWxlY3RcbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICB0aGlzLm1vZGFsRWwuYWRkQ2xhc3MoJ3RhcmVhcy1wb21vZG9yby10YXNrLW1vZGFsLXNoZWxsJylcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpc1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLW1vZGFsJywgJ3RhcmVhcy1wb21vZG9yby10YXNrLW1vZGFsJylcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnU2VsZWNjaW9uYXIgdGFyZWEgcGFyYSBQb21vZG9ybycgfSlcblxuICAgIGlmICh0aGlzLnRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29udGVudEVsLmNyZWF0ZUVsKCdwJywge1xuICAgICAgICBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tdGFzay1lbXB0eScsXG4gICAgICAgIHRleHQ6ICdObyBoYXkgdGFyZWFzIHBhZHJlIGVuIGN1cnNvIGRpc3BvbmlibGVzLicsXG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IGxpc3QgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRhc2stbGlzdCcgfSlcbiAgICAgIGZvciAoY29uc3QgdGFzayBvZiB0aGlzLnRhc2tzKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBsaXN0LmNyZWF0ZURpdih7XG4gICAgICAgICAgY2xzOiBgdGFyZWFzLXBvbW9kb3JvLXRhc2staXRlbSR7dGhpcy5zZWxlY3RlZFRhc2tQYXRoID09PSB0YXNrLmZpbGUucGF0aCA/ICcgaXMtc2VsZWN0ZWQnIDogJyd9YCxcbiAgICAgICAgfSlcbiAgICAgICAgaXRlbS5zZXRBdHRyKCdyb2xlJywgJ2J1dHRvbicpXG4gICAgICAgIGl0ZW0uc2V0QXR0cigndGFiaW5kZXgnLCAnMCcpXG5cbiAgICAgICAgaXRlbS5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRhc2stbmFtZScsIHRleHQ6IHRhc2sudGFyZWEgfSlcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IFtcbiAgICAgICAgICB0YXNrLnRhYmxlcm8gPyBgVGFibGVybzogJHt0YXNrLnRhYmxlcm99YCA6IG51bGwsXG4gICAgICAgICAgYEVzdGFkbzogJHt0YXNrLmVzdGFkb31gLFxuICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgwrcgJylcbiAgICAgICAgaXRlbS5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRhc2stbWV0YScsIHRleHQ6IGRldGFpbHMgfSlcblxuICAgICAgICBjb25zdCBzZWxlY3QgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vblNlbGVjdCh0YXNrLmZpbGUucGF0aClcbiAgICAgICAgICB0aGlzLmNsb3NlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0ub25jbGljayA9IHNlbGVjdFxuICAgICAgICBpdGVtLm9ua2V5ZG93biA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXkgIT09ICdFbnRlcicgJiYgZXZlbnQua2V5ICE9PSAnICcpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgc2VsZWN0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZvb3RlciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtbW9kYWwtZm9vdGVyJyB9KVxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ2FuY2VsYXInIH0pXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlKClcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5tb2RhbEVsLnJlbW92ZUNsYXNzKCd0YXJlYXMtcG9tb2Rvcm8tdGFzay1tb2RhbC1zaGVsbCcpXG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBvYnNpZGlhbiBmcm9tICdvYnNpZGlhbidcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dEcm9wZG93bihcbiAgYW5jaG9yOiBIVE1MRWxlbWVudCxcbiAgb3B0aW9uczogc3RyaW5nW10sXG4gIGN1cnJlbnQ6IHN0cmluZyxcbiAgb25TZWxlY3Q6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLFxuKSB7XG4gIGNvbnN0IG1lbnUgPSBuZXcgb2JzaWRpYW4uTWVudSgpXG5cbiAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5zZXRUaXRsZShgJHtvcHRpb24gPT09IGN1cnJlbnQgPyAn4pyTICcgOiAnICAnfSR7b3B0aW9ufWApXG4gICAgICBpdGVtLm9uQ2xpY2soKCkgPT4gb25TZWxlY3Qob3B0aW9uKSlcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgcmVjdCA9IGFuY2hvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICBtZW51LnNob3dBdFBvc2l0aW9uKHsgeDogcmVjdC5sZWZ0LCB5OiByZWN0LmJvdHRvbSArIDQgfSlcbn1cbiIsInR5cGUgR2VuZXJpY0ZuID0gKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdm9pZFxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2U8VCBleHRlbmRzIEdlbmVyaWNGbj4oZm46IFQsIG1zOiBudW1iZXIpIHtcbiAgbGV0IHRpbWVvdXQ6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgdW5kZWZpbmVkXG5cbiAgcmV0dXJuICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gZm4oLi4uYXJncyksIG1zKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBvYnNpZGlhbiBmcm9tICdvYnNpZGlhbidcblxuaW1wb3J0IHsgREVGQVVMVF9CT0FSRF9OQU1FLCBFU1RBRE9TLCBPUkRFUl9TVEVQLCBQT01PRE9ST19MT0dfQkFTRU5BTUUsIFBSSU9SSURBREVTLCBWSUVXX1RZUEUgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBtb3ZlVGFza1RvQWN0aXZlRm9sZGVyLCBtb3ZlVGFza1RvQ2FuY2VsbGVkRm9sZGVyLCBtb3ZlVGFza1RvQ29tcGxldGVkRm9sZGVyIH0gZnJvbSAnLi4vZW5naW5lcy9jb21wbGV0aW9uRW5naW5lJ1xuaW1wb3J0IHsgdXBkYXRlRnJvbnRtYXR0ZXIgfSBmcm9tICcuLi9lbmdpbmVzL2Zyb250bWF0dGVyRW5naW5lJ1xuaW1wb3J0IHsgcGVyc2lzdFRhc2tPcmRlciwgcmVvcmRlckxpc3QgfSBmcm9tICcuLi9lbmdpbmVzL29yZGVyRW5naW5lJ1xuaW1wb3J0IHtcbiAgYWR2YW5jZVBvbW9kb3JvU3RhdGUsXG4gIGFwcGx5UG9tb2Rvcm9EdXJhdGlvbnMsXG4gIGVudGVyUG9tb2Rvcm9EZXZpYXRpb24sXG4gIGV4aXRQb21vZG9yb0RldmlhdGlvbixcbiAgZm9ybWF0UG9tb2Rvcm9Db3VudGRvd24sXG4gIGdldERldmlhdGlvbkVsYXBzZWRTZWNvbmRzLFxuICBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyxcbiAgZ2V0UG9tb2Rvcm9QaGFzZUxhYmVsLFxuICBnZXRQb21vZG9yb1JlbWFpbmluZ1NlY29uZHMsXG4gIG5vcm1hbGl6ZVBvbW9kb3JvRHVyYXRpb25zLFxuICBwYXVzZVBvbW9kb3JvLFxuICByZXNldFBvbW9kb3JvLFxuICByZXN1bWVQb21vZG9ybyxcbiAgc3RhcnRQb21vZG9ybyxcbn0gZnJvbSAnLi4vZW5naW5lcy9wb21vZG9yb0VuZ2luZSdcbmltcG9ydCB7IGFwcGVuZFBvbW9kb3JvTG9nRW50cnksIGdldEVudHJpZXNCeURhdGUsIHJlYWRQb21vZG9yb0xvZ0VudHJpZXMsIHRvTG9jYWxEYXRlVGV4dCB9IGZyb20gJy4uL2VuZ2luZXMvcG9tb2Rvcm9Mb2dFbmdpbmUnXG5pbXBvcnQgeyByZWJhbGFuY2VHcm91cEVuZERhdGVzIH0gZnJvbSAnLi4vZW5naW5lcy9zY2hlZHVsZUVuZ2luZSdcbmltcG9ydCB7XG4gIGV4dHJhY3RUYXNrQm9keVByZXZpZXcsXG4gIGdldFRhc2tzLFxuICBncm91cFRvcExldmVsVGFza3MsXG4gIGlzVGFza0luQ2FuY2VsbGVkRm9sZGVyLFxuICBpc1Rhc2tJbkNvbXBsZXRlZEZvbGRlcixcbiAgaXNUYXNrSW5GaW5pc2hlZEZvbGRlcixcbiAgcGFyc2VUYXNrRGF0ZSxcbn0gZnJvbSAnLi4vZW5naW5lcy90YXNrRW5naW5lJ1xuaW1wb3J0IHsgRWRpdFNlY3Rpb25Nb2RhbCB9IGZyb20gJy4uL21vZGFscy9FZGl0U2VjdGlvbk1vZGFsJ1xuaW1wb3J0IHsgTmV3Qm9hcmRNb2RhbCB9IGZyb20gJy4uL21vZGFscy9OZXdCb2FyZE1vZGFsJ1xuaW1wb3J0IHsgTmV3R3JvdXBNb2RhbCB9IGZyb20gJy4uL21vZGFscy9OZXdHcm91cE1vZGFsJ1xuaW1wb3J0IHsgTmV3VGFza01vZGFsIH0gZnJvbSAnLi4vbW9kYWxzL05ld1Rhc2tNb2RhbCdcbmltcG9ydCB7IEVkaXRUYXNrRmlsZU1vZGFsIH0gZnJvbSAnLi4vbW9kYWxzL0VkaXRUYXNrRmlsZU1vZGFsJ1xuaW1wb3J0IHsgQWRkVGFza0NvbW1lbnRNb2RhbCB9IGZyb20gJy4uL21vZGFscy9BZGRUYXNrQ29tbWVudE1vZGFsJ1xuaW1wb3J0IHsgQ29uZmlybURlbGV0ZVRhc2tNb2RhbCB9IGZyb20gJy4uL21vZGFscy9Db25maXJtRGVsZXRlVGFza01vZGFsJ1xuaW1wb3J0IHsgZ2V0UG9tb2Rvcm9QcmVzZXRDYXJkRGF0YSwgUG9tb2Rvcm9QcmVzZXRNb2RhbCB9IGZyb20gJy4uL21vZGFscy9Qb21vZG9yb1ByZXNldE1vZGFsJ1xuaW1wb3J0IHsgU2VsZWN0UG9tb2Rvcm9UYXNrTW9kYWwgfSBmcm9tICcuLi9tb2RhbHMvU2VsZWN0UG9tb2Rvcm9UYXNrTW9kYWwnXG5pbXBvcnQgdHlwZSB7IFRhcmVhc1BsdWdpbiB9IGZyb20gJy4uL3BsdWdpbi9UYXJlYXNQbHVnaW4nXG5pbXBvcnQgdHlwZSB7IEVxdWlwbywgUG9tb2Rvcm9EdXJhdGlvbnMsIFBvbW9kb3JvUGhhc2UsIFBvbW9kb3JvU3RhdGUsIFRhc2tGcm9udG1hdHRlciwgVGFza0l0ZW0gfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IHNob3dEcm9wZG93biB9IGZyb20gJy4uL3VpL2Ryb3Bkb3duJ1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICcuLi91dGlscy9kZWJvdW5jZSdcblxuZXhwb3J0IGNsYXNzIFRhcmVhc1ZpZXcgZXh0ZW5kcyBvYnNpZGlhbi5JdGVtVmlldyB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENPTVBMRVRFRF9UQUJfSUQgPSAnX19jb21wbGV0ZWRfXydcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ0FOQ0VMTEVEX1RBQl9JRCA9ICdfX2NhbmNlbGxlZF9fJ1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBQT01PRE9ST19UQUJfSUQgPSAnX19wb21vZG9yb19fJ1xuXG4gIHByaXZhdGUgcGx1Z2luOiBUYXJlYXNQbHVnaW5cbiAgZXhwYW5kZWRHcm91cHM6IFNldDxzdHJpbmc+XG4gIGV4cGFuZGVkVGFza3M6IFNldDxzdHJpbmc+XG4gIGV4cGFuZGVkQ2FyZFN1YnRhc2tzOiBTZXQ8c3RyaW5nPlxuXG4gIHByaXZhdGUgZGVib3VuY2VkUmVuZGVyOiAoKSA9PiB2b2lkXG4gIHByaXZhdGUgZHJhZ1BhdGg6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgZHJhZ0RlcHRoOiBudW1iZXIgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGRyYWdQYXJlbnQ6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgZHJhZ0luc2VydFBvc2l0aW9uOiAnYmVmb3JlJyB8ICdhZnRlcicgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGRyb3BwZWRUYXNrQW5pbWF0aW9uUGF0aDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBsYXN0UmVuZGVyZWRUYWI6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgYWN0aXZlVGFiOiBzdHJpbmdcbiAgcHJpdmF0ZSBwb21vZG9yb1BhbmVsRWw6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBwb21vZG9yb1RpbWVFbDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIHBvbW9kb3JvUHJvZ3Jlc3NFbDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIHBvbW9kb3JvUGhhc2VFbDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIHBvbW9kb3JvQ3ljbGVFbDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIHBvbW9kb3JvU3RhdGVFbDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIHBvbW9kb3JvQXVkaW9Db250ZXh0OiBBdWRpb0NvbnRleHQgfCBudWxsID0gbnVsbFxuXG4gIGNvbnN0cnVjdG9yKGxlYWY6IG9ic2lkaWFuLldvcmtzcGFjZUxlYWYsIHBsdWdpbjogVGFyZWFzUGx1Z2luKSB7XG4gICAgc3VwZXIobGVhZilcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpblxuICAgIHRoaXMuZXhwYW5kZWRHcm91cHMgPSBuZXcgU2V0KHBsdWdpbi5lcXVpcG9zLm1hcChlcXVpcG8gPT4gYCR7ZXF1aXBvLnRhYmxlcm8gfHwgJ2RlZmF1bHQnfTo6JHtlcXVpcG8ubmFtZX1gKSlcbiAgICB0aGlzLmV4cGFuZGVkVGFza3MgPSBuZXcgU2V0KClcbiAgICB0aGlzLmV4cGFuZGVkQ2FyZFN1YnRhc2tzID0gbmV3IFNldCgpXG4gICAgdGhpcy5hY3RpdmVUYWIgPSBwbHVnaW4udGFibGVyb3NbMF0/Lm5hbWUgfHwgJ2RlZmF1bHQnXG4gICAgdGhpcy5kZWJvdW5jZWRSZW5kZXIgPSBkZWJvdW5jZSgoKSA9PiB0aGlzLnJlbmRlcigpLCAyNTApXG4gIH1cblxuICBnZXRWaWV3VHlwZSgpIHtcbiAgICByZXR1cm4gVklFV19UWVBFXG4gIH1cblxuICBnZXREaXNwbGF5VGV4dCgpIHtcbiAgICByZXR1cm4gJ1RhcmVhcydcbiAgfVxuXG4gIGdldEljb24oKSB7XG4gICAgcmV0dXJuICdsaXN0LWNoZWNrcydcbiAgfVxuXG4gIGFzeW5jIG9uT3BlbigpIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5nZXRSb290RWwoKVxuICAgIHJvb3QuYWRkQ2xhc3MoJ3RhcmVhcy1yb290JylcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpXG5cbiAgICB0aGlzLnJlZ2lzdGVySW50ZXJ2YWwod2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHZvaWQgdGhpcy5oYW5kbGVQb21vZG9yb1RpY2soKVxuICAgIH0sIDEwMDApKVxuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUub24oJ3Jlc29sdmVkJywgdGhpcy5kZWJvdW5jZWRSZW5kZXIpKVxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC52YXVsdC5vbignY3JlYXRlJywgdGhpcy5kZWJvdW5jZWRSZW5kZXIpKVxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC52YXVsdC5vbignZGVsZXRlJywgdGhpcy5kZWJvdW5jZWRSZW5kZXIpKVxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC52YXVsdC5vbigncmVuYW1lJywgdGhpcy5kZWJvdW5jZWRSZW5kZXIpKVxuICB9XG5cbiAgYXN5bmMgb25DbG9zZSgpIHtcbiAgICBpZiAodGhpcy5wb21vZG9yb0F1ZGlvQ29udGV4dCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5wb21vZG9yb0F1ZGlvQ29udGV4dC5jbG9zZSgpXG4gICAgICB9XG4gICAgICBjYXRjaCB7XG4gICAgICAgIC8vIElnbm9yZSBjbG9zZSBlcnJvcnMgd2hlbiBjb250ZXh0IGlzIGFscmVhZHkgY2xvc2VkLlxuICAgICAgfVxuICAgICAgdGhpcy5wb21vZG9yb0F1ZGlvQ29udGV4dCA9IG51bGxcbiAgICB9XG4gIH1cblxuICBhc3luYyByZW5kZXIoKSB7XG4gICAgdGhpcy5lbnN1cmVWYWxpZEFjdGl2ZVRhYigpXG4gICAgY29uc3Qgc2hvdWxkQW5pbWF0ZVRhYlRyYW5zaXRpb24gPSB0aGlzLmxhc3RSZW5kZXJlZFRhYiAhPT0gbnVsbCAmJiB0aGlzLmxhc3RSZW5kZXJlZFRhYiAhPT0gdGhpcy5hY3RpdmVUYWJcbiAgICB0aGlzLmxhc3RSZW5kZXJlZFRhYiA9IHRoaXMuYWN0aXZlVGFiXG5cbiAgICBjb25zdCByb290ID0gdGhpcy5nZXRSb290RWwoKVxuICAgIHJvb3QuZW1wdHkoKVxuICAgIHRoaXMucmVzZXRQb21vZG9yb0RvbVJlZnMoKVxuXG4gICAgdGhpcy5yZW5kZXJIZWFkZXIocm9vdClcbiAgICB0aGlzLnJlbmRlclRhYnMocm9vdClcbiAgICBjb25zdCBjb250ZW50ID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtdGFiLWNvbnRlbnQnIH0pXG4gICAgaWYgKHNob3VsZEFuaW1hdGVUYWJUcmFuc2l0aW9uKVxuICAgICAgY29udGVudC5hZGRDbGFzcygndGFyZWFzLXRhYi1jb250ZW50LWFuaW1hdGUnKVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlVGFiID09PSBUYXJlYXNWaWV3LlBPTU9ET1JPX1RBQl9JRCkge1xuICAgICAgYXdhaXQgdGhpcy5yZW5kZXJQb21vZG9yb1BhbmVsKGNvbnRlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhbGxUYXNrcyA9IGdldFRhc2tzKHRoaXMuYXBwKVxuICAgIGNvbnN0IHRhYlRhc2tzID0gdGhpcy5hY3RpdmVUYWIgPT09IFRhcmVhc1ZpZXcuQ09NUExFVEVEX1RBQl9JRFxuICAgICAgPyBhbGxUYXNrcy5maWx0ZXIodGFzayA9PiBpc1Rhc2tJbkZpbmlzaGVkRm9sZGVyKHRhc2suZmlsZS5wYXRoKSlcbiAgICAgIDogdGhpcy5hY3RpdmVUYWIgPT09IFRhcmVhc1ZpZXcuQ0FOQ0VMTEVEX1RBQl9JRFxuICAgICAgICA/IGFsbFRhc2tzLmZpbHRlcih0YXNrID0+IGlzVGFza0luQ2FuY2VsbGVkRm9sZGVyKHRhc2suZmlsZS5wYXRoKSlcbiAgICAgICAgOiBhbGxUYXNrc1xuICAgICAgICAgICAgLmZpbHRlcih0YXNrID0+ICFpc1Rhc2tJbkNvbXBsZXRlZEZvbGRlcih0YXNrLmZpbGUucGF0aCkpXG4gICAgICAgICAgICAuZmlsdGVyKHRhc2sgPT4gdGFzay5maWxlLmJhc2VuYW1lLnRvTG93ZXJDYXNlKCkgIT09IFBPTU9ET1JPX0xPR19CQVNFTkFNRS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgLmZpbHRlcih0YXNrID0+IHRhc2sudGFibGVybyA9PT0gdGhpcy5hY3RpdmVUYWIpXG5cbiAgICBpZiAodGhpcy5hY3RpdmVUYWIgPT09IFRhcmVhc1ZpZXcuQ09NUExFVEVEX1RBQl9JRCB8fCB0aGlzLmFjdGl2ZVRhYiA9PT0gVGFyZWFzVmlldy5DQU5DRUxMRURfVEFCX0lEKSB7XG4gICAgICB0aGlzLnJlbmRlckNvbXBsZXRlZFRhYmxlKGNvbnRlbnQsIHRhYlRhc2tzKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGFza1ByZXZpZXdNYXAgPSBhd2FpdCB0aGlzLmJ1aWxkVGFza1ByZXZpZXdNYXAodGFiVGFza3MpXG4gICAgY29uc3QgYm9hcmQgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1ib2FyZCcgfSlcbiAgICBjb25zdCBib2FyZEdyb3VwcyA9IHRoaXMucGx1Z2luLmdldEVxdWlwb3NGb3JUYWJsZXJvKHRoaXMuYWN0aXZlVGFiKVxuICAgIGNvbnN0IGdyb3VwcyA9IGdyb3VwVG9wTGV2ZWxUYXNrcyh0YWJUYXNrcywgYm9hcmRHcm91cHMpXG4gICAgZm9yIChjb25zdCBncm91cCBvZiBib2FyZEdyb3VwcylcbiAgICAgIHRoaXMucmVuZGVyR3JvdXAoYm9hcmQsIGdyb3VwLCBncm91cHNbZ3JvdXAubmFtZV0gfHwgW10sIHRhYlRhc2tzLCB0YXNrUHJldmlld01hcClcblxuICAgIGlmIChncm91cHNbJ1NpbiBncnVwbyddPy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbmRlckdyb3VwKGJvYXJkLCB7IG5hbWU6ICdTaW4gZ3J1cG8nLCBjb2xvcjogJ3ZhcigtLXRleHQtZmFpbnQpJyB9LCBncm91cHNbJ1NpbiBncnVwbyddLCB0YWJUYXNrcywgdGFza1ByZXZpZXdNYXApXG5cbiAgICBjb25zdCBhZGRHcm91cCA9IGNvbnRlbnQuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLW5ldy1ncm91cCcgfSlcbiAgICBjb25zdCBhZGRHcm91cExpbmsgPSBhZGRHcm91cC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJysgTnVldm8gZ3J1cG8nLCBjbHM6ICd0YXJlYXMtYWRkLWxpbmsnIH0pXG4gICAgYWRkR3JvdXBMaW5rLm9uY2xpY2sgPSAoKSA9PiBuZXcgTmV3R3JvdXBNb2RhbCh0aGlzLmFwcCwgdGhpcy5wbHVnaW4sIHRoaXMsIHRoaXMuYWN0aXZlVGFiKS5vcGVuKClcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQ29tcGxldGVkVGFibGUocm9vdDogSFRNTEVsZW1lbnQsIHRhc2tzOiBUYXNrSXRlbVtdKSB7XG4gICAgY29uc3Qgd3JhcCA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXRhYmxlLXdyYXAnIH0pXG4gICAgY29uc3QgdGFibGUgPSB3cmFwLmNyZWF0ZUVsKCd0YWJsZScsIHsgY2xzOiAndGFyZWFzLXRhYmxlJyB9KVxuICAgIGNvbnN0IGNvbHVtbnMgPSBbJycsICcnLCAnVGFyZWEnLCAnRXN0YWRvJywgJ0dydXBvJywgJ1ByaW9yaWRhZCcsICdEZWRpY2FkbycsICdFc3RpbWFjacOzbicsICdJbmljaW8nLCAnRmluJywgJyUnLCAnQWNjaW9uZXMnXVxuXG4gICAgY29uc3QgdGFibGVIZWFkID0gdGFibGUuY3JlYXRlRWwoJ3RoZWFkJylcbiAgICBjb25zdCBoZWFkUm93ID0gdGFibGVIZWFkLmNyZWF0ZUVsKCd0cicpXG4gICAgZm9yIChjb25zdCBjb2x1bW4gb2YgY29sdW1ucykge1xuICAgICAgY29uc3QgaGVhZGVyQ2VsbCA9IGhlYWRSb3cuY3JlYXRlRWwoJ3RoJywgeyB0ZXh0OiBjb2x1bW4gfSlcbiAgICAgIGlmIChbJ0RlZGljYWRvJywgJ0VzdGltYWNpw7NuJywgJyUnXS5pbmNsdWRlcyhjb2x1bW4pKVxuICAgICAgICBoZWFkZXJDZWxsLmFkZENsYXNzKCd0YXJlYXMtdGgtbnVtJylcbiAgICB9XG5cbiAgICBjb25zdCB0YWJsZUJvZHkgPSB0YWJsZS5jcmVhdGVFbCgndGJvZHknKVxuICAgIGNvbnN0IHRvcExldmVsVGFza3MgPSB0YXNrc1xuICAgICAgLmZpbHRlcih0YXNrID0+ICF0YXNrLnBhcmVudClcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcilcblxuICAgIGZvciAoY29uc3QgdGFzayBvZiB0b3BMZXZlbFRhc2tzKVxuICAgICAgdGhpcy5yZW5kZXJSb3codGFibGVCb2R5LCB0YXNrLCB0YXNrcywgMClcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyVGFicyhyb290OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHRhYnMgPSByb290LmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy10YWJzJyB9KVxuXG4gICAgZm9yIChjb25zdCBib2FyZCBvZiB0aGlzLnBsdWdpbi50YWJsZXJvcykge1xuICAgICAgY29uc3QgYm9hcmRCdG4gPSB0YWJzLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgIHRleHQ6IGJvYXJkLm5hbWUsXG4gICAgICAgIGNsczogYHRhcmVhcy10YWItYnRuJHt0aGlzLmFjdGl2ZVRhYiA9PT0gYm9hcmQubmFtZSA/ICcgaXMtYWN0aXZlJyA6ICcnfWAsXG4gICAgICB9KVxuICAgICAgYm9hcmRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSBib2FyZC5uYW1lXG4gICAgICAgIHRoaXMucmVuZGVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZWRCdG4gPSB0YWJzLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICB0ZXh0OiAnQ29tcGxldGFkYXMnLFxuICAgICAgY2xzOiBgdGFyZWFzLXRhYi1idG4ke3RoaXMuYWN0aXZlVGFiID09PSBUYXJlYXNWaWV3LkNPTVBMRVRFRF9UQUJfSUQgPyAnIGlzLWFjdGl2ZScgOiAnJ31gLFxuICAgIH0pXG4gICAgY29tcGxldGVkQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9IFRhcmVhc1ZpZXcuQ09NUExFVEVEX1RBQl9JRFxuICAgICAgdGhpcy5yZW5kZXIoKVxuICAgIH1cblxuICAgIGNvbnN0IGNhbmNlbGxlZEJ0biA9IHRhYnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIHRleHQ6ICdDYW5jZWxhZGFzJyxcbiAgICAgIGNsczogYHRhcmVhcy10YWItYnRuJHt0aGlzLmFjdGl2ZVRhYiA9PT0gVGFyZWFzVmlldy5DQU5DRUxMRURfVEFCX0lEID8gJyBpcy1hY3RpdmUnIDogJyd9YCxcbiAgICB9KVxuICAgIGNhbmNlbGxlZEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVUYWIgPSBUYXJlYXNWaWV3LkNBTkNFTExFRF9UQUJfSURcbiAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9XG5cbiAgICBjb25zdCBwb21vZG9yb0J0biA9IHRhYnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIHRleHQ6ICdQb21vZG9ybycsXG4gICAgICBjbHM6IGB0YXJlYXMtdGFiLWJ0biR7dGhpcy5hY3RpdmVUYWIgPT09IFRhcmVhc1ZpZXcuUE9NT0RPUk9fVEFCX0lEID8gJyBpcy1hY3RpdmUnIDogJyd9YCxcbiAgICB9KVxuICAgIHBvbW9kb3JvQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9IFRhcmVhc1ZpZXcuUE9NT0RPUk9fVEFCX0lEXG4gICAgICB0aGlzLnJlbmRlcigpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZW5kZXJQb21vZG9yb1BhbmVsKHJvb3Q6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgcnVudGltZVN0YXRlID0gdGhpcy5nZXRQb21vZG9yb1J1bnRpbWVTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IHBhbmVsID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcGFuZWwnIH0pXG4gICAgdGhpcy5wb21vZG9yb1BhbmVsRWwgPSBwYW5lbFxuXG4gICAgY29uc3QgdG9wID0gcGFuZWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRvcCcgfSlcbiAgICB0aGlzLnBvbW9kb3JvUGhhc2VFbCA9IHRvcC5jcmVhdGVFbCgnaDInLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1waGFzZScgfSlcbiAgICB0aGlzLnBvbW9kb3JvQ3ljbGVFbCA9IHRvcC5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWN5Y2xlcycgfSlcblxuICAgIGNvbnN0IHRpbWVyV3JhcCA9IHBhbmVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby10aW1lci13cmFwJyB9KVxuICAgIHRoaXMucG9tb2Rvcm9Qcm9ncmVzc0VsID0gdGltZXJXcmFwLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcm9ncmVzcycgfSlcbiAgICBjb25zdCB0aW1lcklubmVyID0gdGhpcy5wb21vZG9yb1Byb2dyZXNzRWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXByb2dyZXNzLWlubmVyJyB9KVxuICAgIHRoaXMucG9tb2Rvcm9UaW1lRWwgPSB0aW1lcklubmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby10aW1lJyB9KVxuXG4gICAgY29uc3QgY29udHJvbHMgPSBwYW5lbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29udHJvbHMnIH0pXG4gICAgdGhpcy5yZW5kZXJQb21vZG9yb0NvbnRyb2xzKGNvbnRyb2xzLCBydW50aW1lU3RhdGUpXG4gICAgdGhpcy5wb21vZG9yb1N0YXRlRWwgPSBwYW5lbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tc3RhdGUtYmFyJyB9KVxuXG4gICAgY29uc3QgY29uZmlnID0gcGFuZWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZycgfSlcbiAgICBjb25maWcuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnRHVyYWNpb25lcyAobWluKScgfSlcbiAgICB0aGlzLnJlbmRlclBvbW9kb3JvRHVyYXRpb25DYXJkKGNvbmZpZywgcnVudGltZVN0YXRlLmR1cmF0aW9ucylcbiAgICBhd2FpdCB0aGlzLnJlbmRlclBvbW9kb3JvVGFza0NhcmQocGFuZWwpXG4gICAgYXdhaXQgdGhpcy5yZW5kZXJQb21vZG9yb0RhaWx5TG9nKHBhbmVsKVxuXG4gICAgdGhpcy51cGRhdGVQb21vZG9yb0RvbShydW50aW1lU3RhdGUsIERhdGUubm93KCkpXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclBvbW9kb3JvRHVyYXRpb25DYXJkKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGR1cmF0aW9uczogUG9tb2Rvcm9EdXJhdGlvbnMpIHtcbiAgICBjb25zdCBjYXJkRGF0YSA9IGdldFBvbW9kb3JvUHJlc2V0Q2FyZERhdGEoZHVyYXRpb25zKVxuICAgIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZy1jYXJkJyB9KVxuICAgIGNhcmQuc2V0QXR0cigncm9sZScsICdidXR0b24nKVxuICAgIGNhcmQuc2V0QXR0cigndGFiaW5kZXgnLCAnMCcpXG4gICAgY2FyZC5vbmRibGNsaWNrID0gKCkgPT4gdGhpcy5vcGVuUG9tb2Rvcm9QcmVzZXRNb2RhbChkdXJhdGlvbnMpXG4gICAgY2FyZC5vbmtleWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgIT09ICdFbnRlcicgJiYgZXZlbnQua2V5ICE9PSAnICcpXG4gICAgICAgIHJldHVyblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5vcGVuUG9tb2Rvcm9QcmVzZXRNb2RhbChkdXJhdGlvbnMpXG4gICAgfVxuXG4gICAgY2FyZC5jcmVhdGVFbCgnaDQnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb25maWctY2FyZC10aXRsZScsIHRleHQ6IGNhcmREYXRhLnRpdGxlIH0pXG4gICAgY2FyZC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnLWNhcmQtZGl2aWRlcicgfSlcbiAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnLWNhcmQtbGFiZWwnLCB0ZXh0OiAnVXNvJyB9KVxuICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb25maWctY2FyZC10ZXh0JywgdGV4dDogY2FyZERhdGEudXNhZ2UgfSlcbiAgICBjYXJkLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb25maWctY2FyZC1kaXZpZGVyJyB9KVxuICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb25maWctY2FyZC10ZXh0JywgdGV4dDogY2FyZERhdGEud29ya0xhYmVsIH0pXG4gICAgY2FyZC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZy1jYXJkLXRleHQnLCB0ZXh0OiBjYXJkRGF0YS5zaG9ydEJyZWFrTGFiZWwgfSlcbiAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnLWNhcmQtdGV4dCcsIHRleHQ6IGNhcmREYXRhLmxvbmdCcmVha0xhYmVsIH0pXG4gICAgY2FyZC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZy1jYXJkLXRleHQnLCB0ZXh0OiBjYXJkRGF0YS5jeWNsZXNMYWJlbCB9KVxuICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb25maWctY2FyZC1oaW50JywgdGV4dDogJ0RvYmxlIGNsaWNrIHBhcmEgY2FtYmlhciBkdXJhY2nDs24nIH0pXG4gIH1cblxuICBwcml2YXRlIG9wZW5Qb21vZG9yb1ByZXNldE1vZGFsKGR1cmF0aW9uczogUG9tb2Rvcm9EdXJhdGlvbnMpIHtcbiAgICBuZXcgUG9tb2Rvcm9QcmVzZXRNb2RhbCh0aGlzLmFwcCwgZHVyYXRpb25zLCAobmV4dER1cmF0aW9ucykgPT4ge1xuICAgICAgdGhpcy51cGRhdGVQb21vZG9yb0R1cmF0aW9ucyhuZXh0RHVyYXRpb25zKVxuICAgICAgdGhpcy5yZW5kZXIoKVxuICAgIH0pLm9wZW4oKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZW5kZXJQb21vZG9yb1Rhc2tDYXJkKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby10YXNrLXNlY3Rpb24nIH0pXG4gICAgc2VjdGlvbi5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6ICdUYXJlYSB2aW5jdWxhZGEnIH0pXG4gICAgY29uc3QgaXNSdW5uaW5nID0gdGhpcy5wbHVnaW4ucG9tb2Rvcm8ucnVuU3RhdGUgPT09ICdydW5uaW5nJ1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gdGhpcy5nZXRTZWxlY3RlZFBvbW9kb3JvVGFzaygpXG4gICAgaWYgKHNlbGVjdGVkVGFzaykge1xuICAgICAgY29uc3QgYWxsVGFza3MgPSBnZXRUYXNrcyh0aGlzLmFwcClcbiAgICAgIGNvbnN0IHRhc2tQcmV2aWV3TWFwID0gYXdhaXQgdGhpcy5idWlsZFRhc2tQcmV2aWV3TWFwKFtzZWxlY3RlZFRhc2tdKVxuICAgICAgY29uc3QgbGlzdCA9IHNlY3Rpb24uY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWNhcmQtbGlzdCB0YXJlYXMtcG9tb2Rvcm8tdGFzay1jYXJkLWxpc3QnIH0pXG4gICAgICB0aGlzLnJlbmRlclRhc2tDYXJkKGxpc3QsIHNlbGVjdGVkVGFzaywgYWxsVGFza3MsIHRhc2tQcmV2aWV3TWFwLmdldChzZWxlY3RlZFRhc2suZmlsZS5wYXRoKSB8fCAnJylcbiAgICAgIHNlY3Rpb24uY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby10YXNrLWNhcmQtaGludCcsIHRleHQ6ICdVc8OhIGVsIGJvdMOzbiBwYXJhIGNhbWJpYXIgbGEgdGFyZWEgdmluY3VsYWRhJyB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IGVtcHR5Q2FyZCA9IHNlY3Rpb24uY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRhc2stY2FyZCcgfSlcbiAgICAgIGVtcHR5Q2FyZC5jcmVhdGVFbCgncCcsIHtcbiAgICAgICAgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRhc2stY2FyZC1lbXB0eScsXG4gICAgICAgIHRleHQ6ICdObyBoYXkgdGFyZWEgc2VsZWNjaW9uYWRhJyxcbiAgICAgIH0pXG4gICAgICBlbXB0eUNhcmQuY3JlYXRlRWwoJ3AnLCB7XG4gICAgICAgIGNsczogJ3RhcmVhcy1wb21vZG9yby10YXNrLWNhcmQtaGludCcsXG4gICAgICAgIHRleHQ6ICdTZWxlY2Npb27DoSB1bmEgdGFyZWEgY29uIGVsIGJvdMOzbicsXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZUJ1dHRvbiA9IHNlY3Rpb24uY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIHRleHQ6ICdDYW1iaWFyIHRhcmVhIHZpbmN1bGFkYScsXG4gICAgICBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tYnRuIHRhcmVhcy1wb21vZG9yby10YXNrLWNoYW5nZS1idG4nLFxuICAgIH0pXG4gICAgY2hhbmdlQnV0dG9uLmRpc2FibGVkID0gaXNSdW5uaW5nXG4gICAgY2hhbmdlQnV0dG9uLnNldEF0dHIoJ2FyaWEtbGFiZWwnLCAnQ2FtYmlhciB0YXJlYSB2aW5jdWxhZGEnKVxuICAgIGNoYW5nZUJ1dHRvbi5zZXRBdHRyKCd0aXRsZScsIGlzUnVubmluZ1xuICAgICAgPyAnTm8gc2UgcHVlZGUgY2FtYmlhciBsYSB0YXJlYSBtaWVudHJhcyBlbCBjb250YWRvciBlc3TDoSBjb3JyaWVuZG8nXG4gICAgICA6ICdDYW1iaWFyIHRhcmVhIHZpbmN1bGFkYScpXG4gICAgY2hhbmdlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm9wZW5Qb21vZG9yb1Rhc2tTZWxlY3RvcigpXG4gIH1cblxuICBwcml2YXRlIGdldFNlbGVjdGVkUG9tb2Rvcm9UYXNrKCk6IFRhc2tJdGVtIHwgbnVsbCB7XG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrUGF0aCA9IHRoaXMucGx1Z2luLnBvbW9kb3JvLnNlbGVjdGVkVGFza1BhdGhcbiAgICBpZiAoIXNlbGVjdGVkVGFza1BhdGgpXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgdGFzayA9IGdldFRhc2tzKHRoaXMuYXBwKS5maW5kKGl0ZW0gPT4gaXRlbS5maWxlLnBhdGggPT09IHNlbGVjdGVkVGFza1BhdGgpXG4gICAgaWYgKHRhc2spXG4gICAgICByZXR1cm4gdGFza1xuXG4gICAgdGhpcy5zZXRQb21vZG9yb1NlbGVjdGVkVGFza1BhdGgobnVsbClcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuUG9tb2Rvcm9UYXNrU2VsZWN0b3IoKSB7XG4gICAgaWYgKHRoaXMucGx1Z2luLnBvbW9kb3JvLnJ1blN0YXRlID09PSAncnVubmluZycpIHtcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoJ05vIHNlIHB1ZWRlIGNhbWJpYXIgbGEgdGFyZWEgbWllbnRyYXMgZWwgY29udGFkb3IgZXN0w6EgY29ycmllbmRvLicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhbGxUYXNrcyA9IGdldFRhc2tzKHRoaXMuYXBwKVxuICAgIGNvbnN0IHNlbGVjdGFibGVUYXNrcyA9IGFsbFRhc2tzXG4gICAgICAuZmlsdGVyKHRhc2sgPT4gIXRhc2sucGFyZW50KVxuICAgICAgLmZpbHRlcih0YXNrID0+IHRhc2suZXN0YWRvID09PSAnRW4gcHJvZ3Jlc28nKVxuICAgICAgLmZpbHRlcih0YXNrID0+ICFpc1Rhc2tJbkNvbXBsZXRlZEZvbGRlcih0YXNrLmZpbGUucGF0aCkpXG5cbiAgICBuZXcgU2VsZWN0UG9tb2Rvcm9UYXNrTW9kYWwoXG4gICAgICB0aGlzLmFwcCxcbiAgICAgIHNlbGVjdGFibGVUYXNrcyxcbiAgICAgIHRoaXMucGx1Z2luLnBvbW9kb3JvLnNlbGVjdGVkVGFza1BhdGgsXG4gICAgICAodGFza1BhdGgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRQb21vZG9yb1NlbGVjdGVkVGFza1BhdGgodGFza1BhdGgpXG4gICAgICAgIHRoaXMucmVuZGVyKClcbiAgICAgIH0sXG4gICAgKS5vcGVuKClcbiAgfVxuXG4gIHByaXZhdGUgc2V0UG9tb2Rvcm9TZWxlY3RlZFRhc2tQYXRoKHRhc2tQYXRoOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgdGhpcy5wbHVnaW4uc2V0UG9tb2Rvcm9TdGF0ZSh7XG4gICAgICAuLi50aGlzLnBsdWdpbi5wb21vZG9ybyxcbiAgICAgIGR1cmF0aW9uczogeyAuLi50aGlzLnBsdWdpbi5wb21vZG9yby5kdXJhdGlvbnMgfSxcbiAgICAgIHNlbGVjdGVkVGFza1BhdGg6IHRhc2tQYXRoLFxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclBvbW9kb3JvQ29udHJvbHMoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgc3RhdGU6IFBvbW9kb3JvU3RhdGUpIHtcbiAgICBjb25zdCBpY29uQ29udHJvbHMgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbnRyb2xzLWljb25zJyB9KVxuXG4gICAgaWYgKHN0YXRlLnJ1blN0YXRlID09PSAncnVubmluZycpIHtcbiAgICAgIGNvbnN0IHBhdXNlQnV0dG9uID0gaWNvbkNvbnRyb2xzLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICfij7gnLCBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tYnRuIHRhcmVhcy1wb21vZG9yby1idG4taWNvbicgfSlcbiAgICAgIHBhdXNlQnV0dG9uLnNldEF0dHIoJ2FyaWEtbGFiZWwnLCAnUGF1c2FyJylcbiAgICAgIHBhdXNlQnV0dG9uLnNldEF0dHIoJ3RpdGxlJywgJ1BhdXNhcicpXG4gICAgICBwYXVzZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5oYW5kbGVQb21vZG9yb1BhdXNlKClcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhdGUucnVuU3RhdGUgPT09ICdwYXVzZWQnKSB7XG4gICAgICBjb25zdCByZXN1bWVCdXR0b24gPSBpY29uQ29udHJvbHMuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ+KWticsIGNsczogJ3RhcmVhcy1wb21vZG9yby1idG4gdGFyZWFzLXBvbW9kb3JvLWJ0bi1pY29uIG1vZC1jdGEnIH0pXG4gICAgICByZXN1bWVCdXR0b24uc2V0QXR0cignYXJpYS1sYWJlbCcsICdSZWFudWRhcicpXG4gICAgICByZXN1bWVCdXR0b24uc2V0QXR0cigndGl0bGUnLCAnUmVhbnVkYXInKVxuICAgICAgcmVzdW1lQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmhhbmRsZVBvbW9kb3JvUmVzdW1lKClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGljb25Db250cm9scy5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAn4pa2JywgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWJ0biB0YXJlYXMtcG9tb2Rvcm8tYnRuLWljb24gbW9kLWN0YScgfSlcbiAgICAgIHN0YXJ0QnV0dG9uLnNldEF0dHIoJ2FyaWEtbGFiZWwnLCAnSW5pY2lhcicpXG4gICAgICBzdGFydEJ1dHRvbi5zZXRBdHRyKCd0aXRsZScsICdJbmljaWFyJylcbiAgICAgIHN0YXJ0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmhhbmRsZVBvbW9kb3JvU3RhcnQoKVxuICAgIH1cblxuICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gaWNvbkNvbnRyb2xzLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICfihronLCBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tYnRuIHRhcmVhcy1wb21vZG9yby1idG4taWNvbicgfSlcbiAgICByZXNldEJ1dHRvbi5zZXRBdHRyKCdhcmlhLWxhYmVsJywgJ1JlaW5pY2lhcicpXG4gICAgcmVzZXRCdXR0b24uc2V0QXR0cigndGl0bGUnLCAnUmVpbmljaWFyJylcbiAgICByZXNldEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5oYW5kbGVQb21vZG9yb1Jlc2V0KClcblxuICAgIGNvbnN0IGRldmlhdGlvbkJ1dHRvbiA9IGljb25Db250cm9scy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgdGV4dDogc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUgPyAn8J+TtScgOiAn8J+TnicsXG4gICAgICBjbHM6IGB0YXJlYXMtcG9tb2Rvcm8tYnRuIHRhcmVhcy1wb21vZG9yby1idG4taWNvbiR7c3RhdGUuaXNEZXZpYXRpb25BY3RpdmUgPyAnIGlzLWRldmlhdGlvbi1hY3RpdmUnIDogJyd9YCxcbiAgICB9KVxuICAgIGRldmlhdGlvbkJ1dHRvbi5zZXRBdHRyKCdhcmlhLWxhYmVsJywgJ0Rlc3bDrW8nKVxuICAgIGRldmlhdGlvbkJ1dHRvbi5zZXRBdHRyKCd0aXRsZScsIHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlXG4gICAgICA/ICdGaW5hbGl6YXIgZGVzdsOtbydcbiAgICAgIDogJ0luaWNpYXIgZGVzdsOtbyAobGxhbWFkYXMvcmV1bmlvbmVzKScpXG4gICAgY29uc3QgY2FuVG9nZ2xlRGV2aWF0aW9uID0gc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUgfHwgc3RhdGUucnVuU3RhdGUgPT09ICdydW5uaW5nJ1xuICAgIGRldmlhdGlvbkJ1dHRvbi5kaXNhYmxlZCA9ICFjYW5Ub2dnbGVEZXZpYXRpb25cbiAgICBkZXZpYXRpb25CdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuaGFuZGxlUG9tb2Rvcm9EZXZpYXRpb25Ub2dnbGUoKVxuXG4gICAgaWYgKHN0YXRlLnBoYXNlICE9PSAnd29yaycpIHtcbiAgICAgIGNvbnN0IGV4dHJhQ29udHJvbHMgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbnRyb2xzLWV4dHJhJyB9KVxuICAgICAgY29uc3Qgd29ya0J1dHRvbiA9IGV4dHJhQ29udHJvbHMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgICAgdGV4dDogJ0lyIGEgdHJhYmFqbycsXG4gICAgICAgIGNsczogJ3RhcmVhcy1wb21vZG9yby1idG4nLFxuICAgICAgfSlcbiAgICAgIHdvcmtCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuaGFuZGxlUG9tb2Rvcm9Td2l0Y2hUb1dvcmsoKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUG9tb2Rvcm9TdGFydCgpIHtcbiAgICB0aGlzLnVubG9ja1BvbW9kb3JvQXVkaW8oKVxuICAgIGNvbnN0IG5leHQgPSBzdGFydFBvbW9kb3JvKHRoaXMuZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUoZmFsc2UpLCBEYXRlLm5vdygpKVxuICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUobmV4dClcbiAgICB0aGlzLnJlbmRlcigpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBvbW9kb3JvUGF1c2UoKSB7XG4gICAgdGhpcy51bmxvY2tQb21vZG9yb0F1ZGlvKClcbiAgICBjb25zdCBuZXh0ID0gcGF1c2VQb21vZG9ybyh0aGlzLmdldFBvbW9kb3JvUnVudGltZVN0YXRlKGZhbHNlKSwgRGF0ZS5ub3coKSlcbiAgICB0aGlzLnBsdWdpbi5zZXRQb21vZG9yb1N0YXRlKG5leHQpXG4gICAgdGhpcy5yZW5kZXIoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb21vZG9yb1Jlc3VtZSgpIHtcbiAgICB0aGlzLnVubG9ja1BvbW9kb3JvQXVkaW8oKVxuICAgIGNvbnN0IG5leHQgPSByZXN1bWVQb21vZG9ybyh0aGlzLmdldFBvbW9kb3JvUnVudGltZVN0YXRlKGZhbHNlKSwgRGF0ZS5ub3coKSlcbiAgICB0aGlzLnBsdWdpbi5zZXRQb21vZG9yb1N0YXRlKG5leHQpXG4gICAgdGhpcy5yZW5kZXIoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb21vZG9yb1Jlc2V0KCkge1xuICAgIHRoaXMudW5sb2NrUG9tb2Rvcm9BdWRpbygpXG4gICAgY29uc3QgbmV4dCA9IHJlc2V0UG9tb2Rvcm8odGhpcy5nZXRQb21vZG9yb1J1bnRpbWVTdGF0ZShmYWxzZSkpXG4gICAgdGhpcy5wbHVnaW4uc2V0UG9tb2Rvcm9TdGF0ZShuZXh0KVxuICAgIHRoaXMucmVuZGVyKClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlUG9tb2Rvcm9EZXZpYXRpb25Ub2dnbGUoKSB7XG4gICAgdGhpcy51bmxvY2tQb21vZG9yb0F1ZGlvKClcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUoZmFsc2UpXG5cbiAgICBpZiAoY3VycmVudC5pc0RldmlhdGlvbkFjdGl2ZSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZXhpdFBvbW9kb3JvRGV2aWF0aW9uKGN1cnJlbnQsIG5vdylcbiAgICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUocmVzdWx0LnN0YXRlKVxuICAgICAgYXdhaXQgdGhpcy5hZGRQb21vZG9yb0RldmlhdGlvblRpbWVUb1NlbGVjdGVkVGFzayhyZXN1bHQuZWxhcHNlZFNlY29uZHMsIHJlc3VsdC5zdGF0ZSlcblxuICAgICAgaWYgKHJlc3VsdC5jb21wbGV0ZWRXb3JrKSB7XG4gICAgICAgIGNvbnN0IG5leHRQaGFzZUxhYmVsID0gZ2V0UG9tb2Rvcm9QaGFzZUxhYmVsKHJlc3VsdC5zdGF0ZS5waGFzZSlcbiAgICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShgRGVzdsOtbyBmaW5hbGl6YWRvLiBJbmljaWFuZG8gJHtuZXh0UGhhc2VMYWJlbC50b0xvd2VyQ2FzZSgpfS5gLCA3MDAwKVxuICAgICAgICB0aGlzLmZsYXNoUG9tb2Rvcm9QYW5lbCgpXG4gICAgICAgIHRoaXMucGxheVBvbW9kb3JvQmVlcCgpXG4gICAgICAgIGF3YWl0IHRoaXMuYWRkUG9tb2Rvcm9Xb3JrVGltZVRvU2VsZWN0ZWRUYXNrKFsnd29yayddLCByZXN1bHQuc3RhdGUpXG4gICAgICAgIGF3YWl0IHRoaXMubG9nUG9tb2Rvcm9FbnRyaWVzKFsnd29yayddLCByZXN1bHQuc3RhdGUsIG5vdylcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZW5kZXIoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbmV4dCA9IGVudGVyUG9tb2Rvcm9EZXZpYXRpb24oY3VycmVudCwgbm93KVxuICAgIGlmIChuZXh0ID09PSBjdXJyZW50KSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdTb2xvIHBvZMOpcyBpbmljaWFyIGRlc3bDrW8gY3VhbmRvIGVsIGNvbnRhZG9yIGVzdMOhIGNvcnJpZW5kby4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5wbHVnaW4uc2V0UG9tb2Rvcm9TdGF0ZShuZXh0KVxuICAgIHRoaXMucmVuZGVyKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUG9tb2Rvcm9Td2l0Y2hUb1dvcmsoKSB7XG4gICAgdGhpcy51bmxvY2tQb21vZG9yb0F1ZGlvKClcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5nZXRQb21vZG9yb1J1bnRpbWVTdGF0ZShmYWxzZSlcbiAgICBjb25zdCB3b3JrU3RhdGUgPSB7XG4gICAgICAuLi5jdXJyZW50LFxuICAgICAgcGhhc2U6ICd3b3JrJyBhcyBQb21vZG9yb1BoYXNlLFxuICAgICAgcnVuU3RhdGU6ICdpZGxlJyBhcyBjb25zdCxcbiAgICAgIHJlbWFpbmluZ1NlY29uZHM6IGN1cnJlbnQuZHVyYXRpb25zLndvcmtNaW51dGVzICogNjAsXG4gICAgICBlbmRUaW1lc3RhbXA6IG51bGwsXG4gICAgICBpc0RldmlhdGlvbkFjdGl2ZTogZmFsc2UsXG4gICAgICBkZXZpYXRpb25TdGFydGVkQXQ6IG51bGwsXG4gICAgICBkZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kczogMCxcbiAgICAgIHBoYXNlRGV2aWF0aW9uU2Vjb25kczogMCxcbiAgICB9XG4gICAgdGhpcy5wbHVnaW4uc2V0UG9tb2Rvcm9TdGF0ZSh3b3JrU3RhdGUpXG4gICAgdGhpcy5yZW5kZXIoKVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQb21vZG9yb0R1cmF0aW9ucyhuZXh0RHVyYXRpb25zOiBQb21vZG9yb0R1cmF0aW9ucykge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVQb21vZG9yb0R1cmF0aW9ucyhuZXh0RHVyYXRpb25zKVxuICAgIGNvbnN0IG5leHQgPSBhcHBseVBvbW9kb3JvRHVyYXRpb25zKHRoaXMuZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUoZmFsc2UpLCBub3JtYWxpemVkKVxuICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUobmV4dClcbiAgICB0aGlzLnVwZGF0ZVBvbW9kb3JvRG9tKG5leHQsIERhdGUubm93KCkpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZVBvbW9kb3JvVGljaygpIHtcbiAgICBjb25zdCBydW50aW1lU3RhdGUgPSB0aGlzLmdldFBvbW9kb3JvUnVudGltZVN0YXRlKHRydWUpXG4gICAgaWYgKHRoaXMuYWN0aXZlVGFiID09PSBUYXJlYXNWaWV3LlBPTU9ET1JPX1RBQl9JRClcbiAgICAgIHRoaXMudXBkYXRlUG9tb2Rvcm9Eb20ocnVudGltZVN0YXRlLCBEYXRlLm5vdygpKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQb21vZG9yb1J1bnRpbWVTdGF0ZShub3RpZnlDb21wbGV0aW9uOiBib29sZWFuKTogUG9tb2Rvcm9TdGF0ZSB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGNvbnN0IGFkdmFuY2VkID0gYWR2YW5jZVBvbW9kb3JvU3RhdGUodGhpcy5wbHVnaW4ucG9tb2Rvcm8sIG5vdylcblxuICAgIGlmIChhZHZhbmNlZC50cmFuc2l0aW9uZWQpIHtcbiAgICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUoYWR2YW5jZWQuc3RhdGUpXG5cbiAgICAgIGlmIChub3RpZnlDb21wbGV0aW9uKVxuICAgICAgICB0aGlzLm5vdGlmeVBvbW9kb3JvVHJhbnNpdGlvbnMoYWR2YW5jZWQuY29tcGxldGVkUGhhc2VzLCBhZHZhbmNlZC5zdGF0ZSlcblxuICAgICAgaWYgKHRoaXMuYWN0aXZlVGFiID09PSBUYXJlYXNWaWV3LlBPTU9ET1JPX1RBQl9JRClcbiAgICAgICAgdm9pZCB0aGlzLnJlbmRlcigpXG5cbiAgICAgIHJldHVybiBhZHZhbmNlZC5zdGF0ZVxuICAgIH1cblxuICAgIGlmIChhZHZhbmNlZC5zdGF0ZSAhPT0gdGhpcy5wbHVnaW4ucG9tb2Rvcm8pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFkdmFuY2VkLnN0YXRlLFxuICAgICAgICByZW1haW5pbmdTZWNvbmRzOiBnZXRQb21vZG9yb1JlbWFpbmluZ1NlY29uZHMoYWR2YW5jZWQuc3RhdGUsIG5vdyksXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMucGx1Z2luLnBvbW9kb3JvLFxuICAgICAgZHVyYXRpb25zOiB7IC4uLnRoaXMucGx1Z2luLnBvbW9kb3JvLmR1cmF0aW9ucyB9LFxuICAgICAgcmVtYWluaW5nU2Vjb25kczogZ2V0UG9tb2Rvcm9SZW1haW5pbmdTZWNvbmRzKHRoaXMucGx1Z2luLnBvbW9kb3JvLCBub3cpLFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUG9tb2Rvcm9Eb20oc3RhdGU6IFBvbW9kb3JvU3RhdGUsIG5vd01zOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMucG9tb2Rvcm9UaW1lRWwgfHwgIXRoaXMucG9tb2Rvcm9QaGFzZUVsIHx8ICF0aGlzLnBvbW9kb3JvQ3ljbGVFbCB8fCAhdGhpcy5wb21vZG9yb1N0YXRlRWwpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHJlbWFpbmluZyA9IGdldFBvbW9kb3JvUmVtYWluaW5nU2Vjb25kcyhzdGF0ZSwgbm93TXMpXG4gICAgY29uc3QgZGV2aWF0aW9uRWxhcHNlZCA9IGdldERldmlhdGlvbkVsYXBzZWRTZWNvbmRzKHN0YXRlLCBub3dNcylcbiAgICBjb25zdCBkaXNwbGF5ZWRTZWNvbmRzID0gc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUgPyBkZXZpYXRpb25FbGFwc2VkIDogcmVtYWluaW5nXG4gICAgdGhpcy5wb21vZG9yb1RpbWVFbC5zZXRUZXh0KGZvcm1hdFBvbW9kb3JvQ291bnRkb3duKGRpc3BsYXllZFNlY29uZHMpKVxuICAgIHRoaXMucG9tb2Rvcm9UaW1lRWwudG9nZ2xlQ2xhc3MoJ2lzLWRldmlhdGlvbicsIHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlKVxuICAgIGlmICh0aGlzLnBvbW9kb3JvUHJvZ3Jlc3NFbCkge1xuICAgICAgY29uc3QgdG90YWxTZWNvbmRzID0gTWF0aC5tYXgoMSwgc3RhdGUuaXNEZXZpYXRpb25BY3RpdmVcbiAgICAgICAgPyBNYXRoLm1heCgxLCBzdGF0ZS5kZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kcylcbiAgICAgICAgOiBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyhzdGF0ZS5kdXJhdGlvbnMsIHN0YXRlLnBoYXNlKSlcbiAgICAgIGNvbnN0IGVsYXBzZWQgPSBzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZVxuICAgICAgICA/IGRldmlhdGlvbkVsYXBzZWRcbiAgICAgICAgOiBNYXRoLm1heCgwLCB0b3RhbFNlY29uZHMgLSByZW1haW5pbmcpXG4gICAgICBjb25zdCBwcm9ncmVzc1BlcmNlbnQgPSBNYXRoLm1pbigxMDAsIChlbGFwc2VkIC8gdG90YWxTZWNvbmRzKSAqIDEwMClcbiAgICAgIHRoaXMucG9tb2Rvcm9Qcm9ncmVzc0VsLnN0eWxlLnNldFByb3BlcnR5KCctLXRhcmVhcy1wb21vZG9yby1wcm9ncmVzcycsIGAke3Byb2dyZXNzUGVyY2VudH0lYClcbiAgICAgIHRoaXMucG9tb2Rvcm9Qcm9ncmVzc0VsLnNldEF0dHIoJ2RhdGEtbW9kZScsIHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlID8gJ2RldmlhdGlvbicgOiAnbm9ybWFsJylcbiAgICB9XG4gICAgdGhpcy5wb21vZG9yb1BoYXNlRWwuc2V0VGV4dChnZXRQb21vZG9yb1BoYXNlTGFiZWwoc3RhdGUucGhhc2UpKVxuICAgIHRoaXMucG9tb2Rvcm9DeWNsZUVsLnNldFRleHQoYENpY2xvcyBjb21wbGV0YWRvczogJHtzdGF0ZS5jb21wbGV0ZWRXb3JrQ3ljbGVzfWApXG5cbiAgICBjb25zdCBydW5TdGF0ZUxhYmVsID0gc3RhdGUuaXNEZXZpYXRpb25BY3RpdmVcbiAgICAgID8gJ0Rlc3bDrW8nXG4gICAgICA6IHN0YXRlLnJ1blN0YXRlID09PSAncnVubmluZydcbiAgICAgICAgPyAnRW4gY3Vyc28nXG4gICAgICAgIDogc3RhdGUucnVuU3RhdGUgPT09ICdwYXVzZWQnXG4gICAgICAgICAgPyAnUGF1c2FkbydcbiAgICAgICAgICA6ICdMaXN0bydcbiAgICB0aGlzLnBvbW9kb3JvU3RhdGVFbC5zZXRUZXh0KHJ1blN0YXRlTGFiZWwpXG4gICAgdGhpcy5wb21vZG9yb1N0YXRlRWwuc2V0QXR0cignZGF0YS1zdGF0ZScsIHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlID8gJ2RldmlhdGlvbicgOiBzdGF0ZS5ydW5TdGF0ZSlcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5UG9tb2Rvcm9UcmFuc2l0aW9ucyhjb21wbGV0ZWRQaGFzZXM6IFBvbW9kb3JvUGhhc2VbXSwgbmV4dFN0YXRlOiBQb21vZG9yb1N0YXRlKSB7XG4gICAgY29uc3QgY29tcGxldGVkID0gY29tcGxldGVkUGhhc2VzW2NvbXBsZXRlZFBoYXNlcy5sZW5ndGggLSAxXVxuICAgIGlmICghY29tcGxldGVkKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBuZXh0UGhhc2VMYWJlbCA9IGdldFBvbW9kb3JvUGhhc2VMYWJlbChuZXh0U3RhdGUucGhhc2UpXG4gICAgaWYgKGNvbXBsZXRlZCA9PT0gJ3dvcmsnKVxuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShgUG9tb2Rvcm8gZmluYWxpemFkby4gSW5pY2lhbmRvICR7bmV4dFBoYXNlTGFiZWwudG9Mb3dlckNhc2UoKX0uYCwgNzAwMClcbiAgICBlbHNlXG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBEZXNjYW5zbyBmaW5hbGl6YWRvLiBJbmljaWFuZG8gJHtuZXh0UGhhc2VMYWJlbC50b0xvd2VyQ2FzZSgpfS5gLCA3MDAwKVxuXG4gICAgdGhpcy5mbGFzaFBvbW9kb3JvUGFuZWwoKVxuICAgIHRoaXMucGxheVBvbW9kb3JvQmVlcCgpXG4gICAgdm9pZCB0aGlzLmFkZFBvbW9kb3JvV29ya1RpbWVUb1NlbGVjdGVkVGFzayhjb21wbGV0ZWRQaGFzZXMsIG5leHRTdGF0ZSlcbiAgICB2b2lkIHRoaXMubG9nUG9tb2Rvcm9FbnRyaWVzKGNvbXBsZXRlZFBoYXNlcywgbmV4dFN0YXRlLCBEYXRlLm5vdygpKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2dQb21vZG9yb0VudHJpZXMoY29tcGxldGVkUGhhc2VzOiBQb21vZG9yb1BoYXNlW10sIHN0YXRlOiBQb21vZG9yb1N0YXRlLCBub3dNczogbnVtYmVyKSB7XG4gICAgaWYgKGNvbXBsZXRlZFBoYXNlcy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IHN0YXRlLnNlbGVjdGVkVGFza1BhdGhcbiAgICAgID8gZ2V0VGFza3ModGhpcy5hcHApLmZpbmQoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gc3RhdGUuc2VsZWN0ZWRUYXNrUGF0aClcbiAgICAgIDogbnVsbFxuICAgIGNvbnN0IHRhc2tOYW1lID0gc2VsZWN0ZWRUYXNrPy50YXJlYSB8fCAnU2luIHRhcmVhIHZpbmN1bGFkYSdcbiAgICBjb25zdCB0b3RhbERldmlhdGlvbkhvdXJzID0gdGhpcy5yb3VuZFRvVHdvKHN0YXRlLnBoYXNlRGV2aWF0aW9uU2Vjb25kcyAvIDM2MDApXG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcGxldGVkUGhhc2VzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgcGhhc2UgPSBjb21wbGV0ZWRQaGFzZXNbaW5kZXhdXG4gICAgICBjb25zdCBkZXZpYXRpb25Ib3VycyA9IGluZGV4ID09PSBjb21wbGV0ZWRQaGFzZXMubGVuZ3RoIC0gMVxuICAgICAgICA/IHRvdGFsRGV2aWF0aW9uSG91cnNcbiAgICAgICAgOiAwXG4gICAgICBhd2FpdCBhcHBlbmRQb21vZG9yb0xvZ0VudHJ5KHRoaXMuYXBwLCB7XG4gICAgICAgIHRpbWVzdGFtcE1zOiBub3dNcyxcbiAgICAgICAgdHlwZTogZ2V0UG9tb2Rvcm9QaGFzZUxhYmVsKHBoYXNlKSxcbiAgICAgICAgdGFzazogdGFza05hbWUsXG4gICAgICAgIGRldmlhdGlvbkhvdXJzLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUucGhhc2VEZXZpYXRpb25TZWNvbmRzID4gMCkge1xuICAgICAgdGhpcy5wbHVnaW4uc2V0UG9tb2Rvcm9TdGF0ZSh7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkdXJhdGlvbnM6IHsgLi4uc3RhdGUuZHVyYXRpb25zIH0sXG4gICAgICAgIHBoYXNlRGV2aWF0aW9uU2Vjb25kczogMCxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlVGFiID09PSBUYXJlYXNWaWV3LlBPTU9ET1JPX1RBQl9JRClcbiAgICAgIGF3YWl0IHRoaXMucmVuZGVyKClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgYWRkUG9tb2Rvcm9Xb3JrVGltZVRvU2VsZWN0ZWRUYXNrKGNvbXBsZXRlZFBoYXNlczogUG9tb2Rvcm9QaGFzZVtdLCBzdGF0ZTogUG9tb2Rvcm9TdGF0ZSkge1xuICAgIGNvbnN0IGNvbXBsZXRlZFdvcmtDb3VudCA9IGNvbXBsZXRlZFBoYXNlcy5maWx0ZXIocGhhc2UgPT4gcGhhc2UgPT09ICd3b3JrJykubGVuZ3RoXG4gICAgaWYgKGNvbXBsZXRlZFdvcmtDb3VudCA9PT0gMClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrUGF0aCA9IHN0YXRlLnNlbGVjdGVkVGFza1BhdGhcbiAgICBpZiAoIXNlbGVjdGVkVGFza1BhdGgpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHRhc2sgPSBnZXRUYXNrcyh0aGlzLmFwcCkuZmluZChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSBzZWxlY3RlZFRhc2tQYXRoKVxuICAgIGlmICghdGFzaykge1xuICAgICAgdGhpcy5zZXRQb21vZG9yb1NlbGVjdGVkVGFza1BhdGgobnVsbClcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoJ0xhIHRhcmVhIHNlbGVjY2lvbmFkYSBwYXJhIFBvbW9kb3JvIHlhIG5vIGV4aXN0ZS4gU2UgcXVpdMOzIGxhIHNlbGVjY2nDs24uJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHdvcmtlZEhvdXJzID0gdGhpcy5yb3VuZFRvVHdvKChjb21wbGV0ZWRXb3JrQ291bnQgKiBzdGF0ZS5kdXJhdGlvbnMud29ya01pbnV0ZXMpIC8gNjApXG4gICAgaWYgKHdvcmtlZEhvdXJzIDw9IDApXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IG5leHREZWRpY2F0ZWQgPSB0aGlzLnJvdW5kVG9Ud28odGFzay5kZWRpY2FkbyArIHdvcmtlZEhvdXJzKVxuICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IGRlZGljYWRvOiBuZXh0RGVkaWNhdGVkIH0pXG4gICAgbmV3IG9ic2lkaWFuLk5vdGljZShgU2Ugc3VtYXJvbiAke3RoaXMuZm9ybWF0RGVjaW1hbCh3b3JrZWRIb3Vycyl9IGggYSBcIiR7dGFzay50YXJlYX1cIi5gLCA1MDAwKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBhZGRQb21vZG9yb0RldmlhdGlvblRpbWVUb1NlbGVjdGVkVGFzayhlbGFwc2VkU2Vjb25kczogbnVtYmVyLCBzdGF0ZTogUG9tb2Rvcm9TdGF0ZSkge1xuICAgIGlmIChlbGFwc2VkU2Vjb25kcyA8PSAwKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBzZWxlY3RlZFRhc2tQYXRoID0gc3RhdGUuc2VsZWN0ZWRUYXNrUGF0aFxuICAgIGlmICghc2VsZWN0ZWRUYXNrUGF0aClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgdGFzayA9IGdldFRhc2tzKHRoaXMuYXBwKS5maW5kKGl0ZW0gPT4gaXRlbS5maWxlLnBhdGggPT09IHNlbGVjdGVkVGFza1BhdGgpXG4gICAgaWYgKCF0YXNrKSB7XG4gICAgICB0aGlzLnNldFBvbW9kb3JvU2VsZWN0ZWRUYXNrUGF0aChudWxsKVxuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZSgnTGEgdGFyZWEgc2VsZWNjaW9uYWRhIHBhcmEgUG9tb2Rvcm8geWEgbm8gZXhpc3RlLiBTZSBxdWl0w7MgbGEgc2VsZWNjacOzbi4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGV2aWF0aW9uSG91cnMgPSB0aGlzLnJvdW5kVG9Ud28oZWxhcHNlZFNlY29uZHMgLyAzNjAwKVxuICAgIGlmIChkZXZpYXRpb25Ib3VycyA8PSAwKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBuZXh0RGV2aWF0aW9uID0gdGhpcy5yb3VuZFRvVHdvKHRhc2suZGVzdmlvICsgZGV2aWF0aW9uSG91cnMpXG4gICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgZGVzdmlvOiBuZXh0RGV2aWF0aW9uIH0pXG4gICAgbmV3IG9ic2lkaWFuLk5vdGljZShgU2Ugc3VtYXJvbiAke3RoaXMuZm9ybWF0RGVjaW1hbChkZXZpYXRpb25Ib3Vycyl9IGggZGUgZGVzdsOtbyBhIFwiJHt0YXNrLnRhcmVhfVwiLmAsIDUwMDApXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlbmRlclBvbW9kb3JvRGFpbHlMb2coY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWxvZy1zZWN0aW9uJyB9KVxuICAgIHNlY3Rpb24uY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnUmVnaXN0cm9zIGRlbCBkaWEnIH0pXG5cbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcmVhZFBvbW9kb3JvTG9nRW50cmllcyh0aGlzLmFwcClcbiAgICBjb25zdCB0b2RheUVudHJpZXMgPSBnZXRFbnRyaWVzQnlEYXRlKGVudHJpZXMsIHRvTG9jYWxEYXRlVGV4dChuZXcgRGF0ZSgpKSlcblxuICAgIGlmICh0b2RheUVudHJpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZWN0aW9uLmNyZWF0ZUVsKCdwJywge1xuICAgICAgICBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tbG9nLWVtcHR5JyxcbiAgICAgICAgdGV4dDogJ3RvZGF2aWEgbm8gc2UgcmVnaXN0cmFuIHBvbW9kb3JvcyBlbiBlbCBkaWEnLFxuICAgICAgfSlcbiAgICAgIHRoaXMucmVuZGVyUG9tb2Rvcm9Ib3VybHlIZWF0bWFwKHNlY3Rpb24sIHRvZGF5RW50cmllcylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHdyYXAgPSBzZWN0aW9uLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1sb2ctdGFibGUtd3JhcCcgfSlcbiAgICBjb25zdCB0YWJsZSA9IHdyYXAuY3JlYXRlRWwoJ3RhYmxlJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tbG9nLXRhYmxlJyB9KVxuICAgIGNvbnN0IGhlYWQgPSB0YWJsZS5jcmVhdGVFbCgndGhlYWQnKVxuICAgIGNvbnN0IGhlYWRSb3cgPSBoZWFkLmNyZWF0ZUVsKCd0cicpXG4gICAgZm9yIChjb25zdCB0aXRsZSBvZiBbJ0hvcmFyaW8nLCAnVGlwbyBkZSBwb21vZG9ybycsICdUYXJlYScsICdEZXN2aW8nXSlcbiAgICAgIGhlYWRSb3cuY3JlYXRlRWwoJ3RoJywgeyB0ZXh0OiB0aXRsZSB9KVxuXG4gICAgY29uc3QgYm9keSA9IHRhYmxlLmNyZWF0ZUVsKCd0Ym9keScpXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0b2RheUVudHJpZXMpIHtcbiAgICAgIGNvbnN0IHJvdyA9IGJvZHkuY3JlYXRlRWwoJ3RyJylcbiAgICAgIHJvdy5jcmVhdGVFbCgndGQnLCB7IHRleHQ6IGVudHJ5LnRpbWUgfSlcbiAgICAgIHJvdy5jcmVhdGVFbCgndGQnLCB7IHRleHQ6IGVudHJ5LnR5cGUgfSlcbiAgICAgIHJvdy5jcmVhdGVFbCgndGQnLCB7IHRleHQ6IGVudHJ5LnRhc2sgfSlcbiAgICAgIHJvdy5jcmVhdGVFbCgndGQnLCB7IHRleHQ6IGAke3RoaXMuZm9ybWF0RGVjaW1hbChlbnRyeS5kZXZpYXRpb25Ib3Vycyl9IGhgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJQb21vZG9yb0hvdXJseUhlYXRtYXAoc2VjdGlvbiwgdG9kYXlFbnRyaWVzKVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJQb21vZG9yb0hvdXJseUhlYXRtYXAoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgdG9kYXlFbnRyaWVzOiBBcnJheTx7IHRpbWU6IHN0cmluZywgdHlwZTogc3RyaW5nIH0+KSB7XG4gICAgY29uc3QgaGVhdG1hcFNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWhlYXRtYXAnIH0pXG4gICAgaGVhdG1hcFNlY3Rpb24uY3JlYXRlRWwoJ2g0JywgeyB0ZXh0OiAnSGVhdG1hcCBob3JhcmlvICh0cmFiYWpvKScgfSlcblxuICAgIGNvbnN0IHdvcmtFbnRyaWVzID0gdG9kYXlFbnRyaWVzLmZpbHRlcihlbnRyeSA9PiBlbnRyeS50eXBlID09PSAnVHJhYmFqbycpXG4gICAgY29uc3QgaG91cmx5Q291bnRzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMjQgfSwgKCkgPT4gMClcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHdvcmtFbnRyaWVzKSB7XG4gICAgICBjb25zdCBob3VyID0gTnVtYmVyLnBhcnNlSW50KGVudHJ5LnRpbWUuc2xpY2UoMCwgMiksIDEwKVxuICAgICAgaWYgKE51bWJlci5pc05hTihob3VyKSB8fCBob3VyIDwgMCB8fCBob3VyID4gMjMpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICBob3VybHlDb3VudHNbaG91cl0gKz0gMVxuICAgIH1cblxuICAgIGNvbnN0IG1heENvdW50ID0gTWF0aC5tYXgoMSwgLi4uaG91cmx5Q291bnRzKVxuICAgIGNvbnN0IGdyaWQgPSBoZWF0bWFwU2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8taGVhdG1hcC1ncmlkJyB9KVxuICAgIGZvciAobGV0IGhvdXIgPSAwOyBob3VyIDwgMjQ7IGhvdXIrKykge1xuICAgICAgY29uc3QgY291bnQgPSBob3VybHlDb3VudHNbaG91cl1cbiAgICAgIGNvbnN0IGxldmVsID0gY291bnQgPT09IDBcbiAgICAgICAgPyAwXG4gICAgICAgIDogTWF0aC5taW4oNCwgTWF0aC5jZWlsKChjb3VudCAvIG1heENvdW50KSAqIDQpKVxuICAgICAgY29uc3QgY2VsbCA9IGdyaWQuY3JlYXRlRGl2KHsgY2xzOiBgdGFyZWFzLXBvbW9kb3JvLWhlYXRtYXAtY2VsbCBpcy1sZXZlbC0ke2xldmVsfWAgfSlcbiAgICAgIGNlbGwuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgIGNsczogJ3RhcmVhcy1wb21vZG9yby1oZWF0bWFwLWhvdXInLFxuICAgICAgICB0ZXh0OiBTdHJpbmcoaG91cikucGFkU3RhcnQoMiwgJzAnKSxcbiAgICAgIH0pXG4gICAgICBjZWxsLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8taGVhdG1hcC1jb3VudCcsXG4gICAgICAgIHRleHQ6IFN0cmluZyhjb3VudCksXG4gICAgICB9KVxuICAgICAgY2VsbC5zZXRBdHRyKCd0aXRsZScsIGAke1N0cmluZyhob3VyKS5wYWRTdGFydCgyLCAnMCcpfTowMCAtICR7Y291bnR9IHBvbW9kb3JvKHMpIGRlIHRyYWJham9gKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmxhc2hQb21vZG9yb1BhbmVsKCkge1xuICAgIGlmICghdGhpcy5wb21vZG9yb1BhbmVsRWwpXG4gICAgICByZXR1cm5cblxuICAgIHRoaXMucG9tb2Rvcm9QYW5lbEVsLmFkZENsYXNzKCd0YXJlYXMtcG9tb2Rvcm8tcGFuZWwtZmxhc2gnKVxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucG9tb2Rvcm9QYW5lbEVsPy5yZW1vdmVDbGFzcygndGFyZWFzLXBvbW9kb3JvLXBhbmVsLWZsYXNoJylcbiAgICB9LCA5MDApXG4gIH1cblxuICBwcml2YXRlIHBsYXlQb21vZG9yb0JlZXAoKSB7XG4gICAgY29uc3QgYXVkaW9Db250ZXh0ID0gdGhpcy5lbnN1cmVQb21vZG9yb0F1ZGlvQ29udGV4dCgpXG4gICAgaWYgKCFhdWRpb0NvbnRleHQpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHN0YXJ0QmVlcCA9ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IGF1ZGlvQ29udGV4dC5jdXJyZW50VGltZVxuICAgICAgICBjb25zdCBmaXJzdCA9IGF1ZGlvQ29udGV4dC5jcmVhdGVPc2NpbGxhdG9yKClcbiAgICAgICAgY29uc3Qgc2Vjb25kID0gYXVkaW9Db250ZXh0LmNyZWF0ZU9zY2lsbGF0b3IoKVxuICAgICAgICBjb25zdCBnYWluID0gYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKVxuXG4gICAgICAgIGZpcnN0LnR5cGUgPSAnc2luZSdcbiAgICAgICAgc2Vjb25kLnR5cGUgPSAnc2luZSdcbiAgICAgICAgZmlyc3QuZnJlcXVlbmN5LnZhbHVlID0gODgwXG4gICAgICAgIHNlY29uZC5mcmVxdWVuY3kudmFsdWUgPSA5ODhcblxuICAgICAgICBnYWluLmdhaW4uc2V0VmFsdWVBdFRpbWUoMC4wMDAxLCBub3cpXG4gICAgICAgIGdhaW4uZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMDksIG5vdyArIDAuMDEpXG4gICAgICAgIGdhaW4uZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMDAwMSwgbm93ICsgMC4xOClcbiAgICAgICAgZ2Fpbi5nYWluLnNldFZhbHVlQXRUaW1lKDAuMDAwMSwgbm93ICsgMC4yMClcbiAgICAgICAgZ2Fpbi5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wOCwgbm93ICsgMC4yMilcbiAgICAgICAgZ2Fpbi5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wMDAxLCBub3cgKyAwLjM4KVxuXG4gICAgICAgIGZpcnN0LmNvbm5lY3QoZ2FpbilcbiAgICAgICAgc2Vjb25kLmNvbm5lY3QoZ2FpbilcbiAgICAgICAgZ2Fpbi5jb25uZWN0KGF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbilcblxuICAgICAgICBmaXJzdC5zdGFydChub3cpXG4gICAgICAgIGZpcnN0LnN0b3Aobm93ICsgMC4xOClcbiAgICAgICAgc2Vjb25kLnN0YXJ0KG5vdyArIDAuMjApXG4gICAgICAgIHNlY29uZC5zdG9wKG5vdyArIDAuMzgpXG4gICAgICB9XG4gICAgICBjYXRjaCB7XG4gICAgICAgIC8vIElnbm9yZSBwbGF5YmFjayBlcnJvcnMgaW4gZW52aXJvbm1lbnRzIHRoYXQgYmxvY2sgYXV0b3BsYXkuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGF1ZGlvQ29udGV4dC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIHtcbiAgICAgIHZvaWQgYXVkaW9Db250ZXh0LnJlc3VtZSgpXG4gICAgICAgIC50aGVuKHN0YXJ0QmVlcClcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAvLyBJZ25vcmUgcmVzdW1lIGVycm9ycy5cbiAgICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHN0YXJ0QmVlcCgpXG4gIH1cblxuICBwcml2YXRlIGVuc3VyZVBvbW9kb3JvQXVkaW9Db250ZXh0KCk6IEF1ZGlvQ29udGV4dCB8IG51bGwge1xuICAgIGlmICh0aGlzLnBvbW9kb3JvQXVkaW9Db250ZXh0ICYmIHRoaXMucG9tb2Rvcm9BdWRpb0NvbnRleHQuc3RhdGUgIT09ICdjbG9zZWQnKVxuICAgICAgcmV0dXJuIHRoaXMucG9tb2Rvcm9BdWRpb0NvbnRleHRcblxuICAgIGNvbnN0IEF1ZGlvQ29udGV4dEN0b3IgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8ICh3aW5kb3cgYXMgdHlwZW9mIHdpbmRvdyAmIHsgd2Via2l0QXVkaW9Db250ZXh0PzogdHlwZW9mIEF1ZGlvQ29udGV4dCB9KS53ZWJraXRBdWRpb0NvbnRleHRcbiAgICBpZiAoIUF1ZGlvQ29udGV4dEN0b3IpXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucG9tb2Rvcm9BdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0Q3RvcigpXG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgIHRoaXMucG9tb2Rvcm9BdWRpb0NvbnRleHQgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucG9tb2Rvcm9BdWRpb0NvbnRleHRcbiAgfVxuXG4gIHByaXZhdGUgdW5sb2NrUG9tb2Rvcm9BdWRpbygpIHtcbiAgICBjb25zdCBhdWRpb0NvbnRleHQgPSB0aGlzLmVuc3VyZVBvbW9kb3JvQXVkaW9Db250ZXh0KClcbiAgICBpZiAoIWF1ZGlvQ29udGV4dCB8fCBhdWRpb0NvbnRleHQuc3RhdGUgIT09ICdzdXNwZW5kZWQnKVxuICAgICAgcmV0dXJuXG5cbiAgICB2b2lkIGF1ZGlvQ29udGV4dC5yZXN1bWUoKS5jYXRjaCgoKSA9PiB7XG4gICAgICAvLyBJZ25vcmUgcmVzdW1lIGVycm9ycy5cbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSByZXNldFBvbW9kb3JvRG9tUmVmcygpIHtcbiAgICB0aGlzLnBvbW9kb3JvUGFuZWxFbCA9IG51bGxcbiAgICB0aGlzLnBvbW9kb3JvVGltZUVsID0gbnVsbFxuICAgIHRoaXMucG9tb2Rvcm9Qcm9ncmVzc0VsID0gbnVsbFxuICAgIHRoaXMucG9tb2Rvcm9QaGFzZUVsID0gbnVsbFxuICAgIHRoaXMucG9tb2Rvcm9DeWNsZUVsID0gbnVsbFxuICAgIHRoaXMucG9tb2Rvcm9TdGF0ZUVsID0gbnVsbFxuICB9XG5cbiAgcHJpdmF0ZSBlbnN1cmVWYWxpZEFjdGl2ZVRhYigpIHtcbiAgICBjb25zdCBib2FyZE5hbWVzID0gdGhpcy5wbHVnaW4udGFibGVyb3MubWFwKGJvYXJkID0+IGJvYXJkLm5hbWUpXG4gICAgY29uc3QgZml4ZWRUYWJzID0gbmV3IFNldChbXG4gICAgICBUYXJlYXNWaWV3LkNPTVBMRVRFRF9UQUJfSUQsXG4gICAgICBUYXJlYXNWaWV3LkNBTkNFTExFRF9UQUJfSUQsXG4gICAgICBUYXJlYXNWaWV3LlBPTU9ET1JPX1RBQl9JRCxcbiAgICBdKVxuXG4gICAgaWYgKGZpeGVkVGFicy5oYXModGhpcy5hY3RpdmVUYWIpKVxuICAgICAgcmV0dXJuXG5cbiAgICBpZiAoYm9hcmROYW1lcy5pbmNsdWRlcyh0aGlzLmFjdGl2ZVRhYikpXG4gICAgICByZXR1cm5cblxuICAgIHRoaXMuYWN0aXZlVGFiID0gYm9hcmROYW1lc1swXSB8fCAnZGVmYXVsdCdcbiAgfVxuXG4gIHByaXZhdGUgZ2V0R3JvdXBFeHBhbnNpb25LZXkoZ3JvdXBOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmFjdGl2ZVRhYn06OiR7Z3JvdXBOYW1lfWBcbiAgfVxuXG4gIHByaXZhdGUgaXNBcmNoaXZlZFRhYigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVUYWIgPT09IFRhcmVhc1ZpZXcuQ09NUExFVEVEX1RBQl9JRCB8fCB0aGlzLmFjdGl2ZVRhYiA9PT0gVGFyZWFzVmlldy5DQU5DRUxMRURfVEFCX0lEXG4gIH1cblxuICBwcml2YXRlIGlzUG9tb2Rvcm9UYWIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlVGFiID09PSBUYXJlYXNWaWV3LlBPTU9ET1JPX1RBQl9JRFxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJIZWFkZXIocm9vdDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBoZWFkZXIgPSByb290LmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1oZWFkZXInIH0pXG5cbiAgICBjb25zdCB0aXRsZVdyYXAgPSBoZWFkZXIuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXRpdGxlLXdyYXAnIH0pXG4gICAgdGl0bGVXcmFwLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAn4piwJywgY2xzOiAndGFyZWFzLWljb24nIH0pXG4gICAgdGl0bGVXcmFwLmNyZWF0ZUVsKCdoMScsIHsgdGV4dDogJyBUYXJlYXMnIH0pXG5cbiAgICBjb25zdCBhY3Rpb25zID0gaGVhZGVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1oZWFkZXItYWN0aW9ucycgfSlcbiAgICBhY3Rpb25zLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAn4pamIFRhYmxlcm8nLCBjbHM6ICd0YXJlYXMtdmlldy10b2dnbGUnIH0pXG5cbiAgICBjb25zdCBuZXdCdXR0b24gPSBhY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ3RhcmVhcy1idG4tbmV3JyB9KVxuICAgIG5ld0J1dHRvbi5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJ051ZXZvIHRhYmxlcm8nIH0pXG4gICAgbmV3QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiBuZXcgTmV3Qm9hcmRNb2RhbCh0aGlzLmFwcCwgdGhpcy5wbHVnaW4sIHRoaXMpLm9wZW4oKVxuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gYWN0aW9ucy5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICd0YXJlYXMtYnRuLWRlbGV0ZS1ib2FyZCcgfSlcbiAgICBkZWxldGVCdXR0b24uY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICdFbGltaW5hciB0YWJsZXJvJyB9KVxuICAgIGRlbGV0ZUJ1dHRvbi5kaXNhYmxlZCA9ICF0aGlzLnBsdWdpbi5jYW5SZW1vdmVUYWJsZXJvKHRoaXMuYWN0aXZlVGFiKVxuICAgIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5vcGVuRGVsZXRlQm9hcmRDb25maXJtKClcbiAgfVxuXG4gIHByaXZhdGUgb3BlbkRlbGV0ZUJvYXJkQ29uZmlybSgpIHtcbiAgICBpZiAoIXRoaXMucGx1Z2luLmNhblJlbW92ZVRhYmxlcm8odGhpcy5hY3RpdmVUYWIpKSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBFbCB0YWJsZXJvIFwiJHt0aGlzLmFjdGl2ZVRhYn1cIiBubyBzZSBwdWVkZSBlbGltaW5hci5gKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYm9hcmROYW1lID0gdGhpcy5hY3RpdmVUYWJcbiAgICBjb25zdCBib2FyZFRhc2tzID0gZ2V0VGFza3ModGhpcy5hcHApLmZpbHRlcih0YXNrID0+IHRhc2sudGFibGVybyA9PT0gYm9hcmROYW1lKVxuICAgIGNvbnN0IHRvcExldmVsQ291bnQgPSBib2FyZFRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLnBhcmVudCkubGVuZ3RoXG4gICAgY29uc3Qgc3VidGFza0NvdW50ID0gYm9hcmRUYXNrcy5sZW5ndGggLSB0b3BMZXZlbENvdW50XG4gICAgY29uc3QgdGFza1N1bW1hcnkgPSBzdWJ0YXNrQ291bnQgPiAwXG4gICAgICA/IGAke3RvcExldmVsQ291bnR9IHRhcmVhKHMpIHkgJHtzdWJ0YXNrQ291bnR9IHN1YnRhcmVhKHMpYFxuICAgICAgOiBgJHt0b3BMZXZlbENvdW50fSB0YXJlYShzKWBcblxuICAgIG5ldyBDb25maXJtRGVsZXRlVGFza01vZGFsKHRoaXMuYXBwLCB7XG4gICAgICB0aXRsZTogJ0VsaW1pbmFyIHRhYmxlcm8nLFxuICAgICAgbWVzc2FnZTogYMK/U2VndXJvIHF1ZSBxdWVyw6lzIGVsaW1pbmFyIGVsIHRhYmxlcm8gXCIke2JvYXJkTmFtZX1cIj8gU2UgYm9ycmFyw6FuICR7dGFza1N1bW1hcnl9LCBzdXMgYXJjaGl2b3MgLm1kLCBncnVwb3MgeSBjYXJwZXRhcyBhc29jaWFkYXMuYCxcbiAgICAgIGNvbmZpcm1UZXh0OiAnQWNlcHRhcicsXG4gICAgICBvbkNvbmZpcm06IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVtb3ZlZCA9IGF3YWl0IHRoaXMucGx1Z2luLnJlbW92ZVRhYmxlcm8oYm9hcmROYW1lKVxuICAgICAgICBpZiAoIXJlbW92ZWQpIHtcbiAgICAgICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBObyBzZSBwdWRvIGVsaW1pbmFyIGVsIHRhYmxlcm8gXCIke2JvYXJkTmFtZX1cIi5gKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSB0aGlzLnBsdWdpbi50YWJsZXJvc1swXT8ubmFtZSB8fCBERUZBVUxUX0JPQVJEX05BTUVcbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXIoKVxuICAgICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBUYWJsZXJvIFwiJHtib2FyZE5hbWV9XCIgZWxpbWluYWRvLmApXG4gICAgICB9LFxuICAgIH0pLm9wZW4oKVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJHcm91cChcbiAgICByb290OiBIVE1MRWxlbWVudCxcbiAgICBncm91cDogRXF1aXBvLFxuICAgIHRhc2tzOiBUYXNrSXRlbVtdLFxuICAgIGFsbFRhc2tzOiBUYXNrSXRlbVtdLFxuICAgIHRhc2tQcmV2aWV3TWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+LFxuICApIHtcbiAgICBjb25zdCBncm91cE5hbWUgPSBncm91cC5uYW1lXG4gICAgY29uc3QgZXhwYW5zaW9uS2V5ID0gdGhpcy5nZXRHcm91cEV4cGFuc2lvbktleShncm91cE5hbWUpXG4gICAgY29uc3QgaXNNYW5hZ2VkID0gdGhpcy5wbHVnaW4uZ2V0RXF1aXBvc0ZvclRhYmxlcm8odGhpcy5hY3RpdmVUYWIpLnNvbWUoaXRlbSA9PiBpdGVtLm5hbWUgPT09IGdyb3VwTmFtZSlcbiAgICBjb25zdCBleHBhbmRlZCA9IHRoaXMuZXhwYW5kZWRHcm91cHMuaGFzKGV4cGFuc2lvbktleSlcblxuICAgIGNvbnN0IGNvbHVtbiA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWdyb3VwJyB9KVxuICAgIGNvbnN0IGhlYWRlciA9IGNvbHVtbi5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtZ3JvdXAtaGVhZGVyJyB9KVxuXG4gICAgaGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBleHBhbmRlZCA/ICfilrwgJyA6ICfilrYgJywgY2xzOiAndGFyZWFzLXRvZ2dsZScgfSlcbiAgICBjb25zdCBiYWRnZSA9IGhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogZ3JvdXBOYW1lLCBjbHM6ICd0YXJlYXMtYmFkZ2UnIH0pXG4gICAgYmFkZ2Uuc3R5bGUuYmFja2dyb3VuZCA9IGdyb3VwLmNvbG9yXG4gICAgaGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBgICAke3Rhc2tzLmxlbmd0aH1gLCBjbHM6ICd0YXJlYXMtY291bnQnIH0pXG5cbiAgICBpZiAoaXNNYW5hZ2VkKSB7XG4gICAgICBjb25zdCBlZGl0QnV0dG9uID0gaGVhZGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICfinI4nLCBjbHM6ICd0YXJlYXMtZ3JvdXAtZWRpdC1idG4nIH0pXG4gICAgICBlZGl0QnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgbmV3IEVkaXRTZWN0aW9uTW9kYWwodGhpcy5hcHAsIHRoaXMucGx1Z2luLCBncm91cCwgdGhpcywgdGhpcy5hY3RpdmVUYWIpLm9wZW4oKVxuICAgICAgfVxuICAgIH1cblxuICAgIGhlYWRlci5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKGV4cGFuZGVkKVxuICAgICAgICB0aGlzLmV4cGFuZGVkR3JvdXBzLmRlbGV0ZShleHBhbnNpb25LZXkpXG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuZXhwYW5kZWRHcm91cHMuYWRkKGV4cGFuc2lvbktleSlcblxuICAgICAgdGhpcy5yZW5kZXIoKVxuICAgIH1cblxuICAgIGlmICghZXhwYW5kZWQpXG4gICAgICByZXR1cm5cblxuICAgIHRhc2tzLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKVxuICAgIGNvbnN0IGNhcmRzID0gY29sdW1uLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLWxpc3QnIH0pXG4gICAgY2FyZHMuZGF0YXNldC5ncm91cCA9IGdyb3VwTmFtZVxuICAgIGNhcmRzLmRhdGFzZXQuYm9hcmQgPSB0aGlzLmFjdGl2ZVRhYlxuICAgIGNhcmRzLmRhdGFzZXQuaGFzVGFza3MgPSB0YXNrcy5sZW5ndGggPiAwID8gJ3RydWUnIDogJ2ZhbHNlJ1xuICAgIHRoaXMuYXR0YWNoR3JvdXBDYXJkTGlzdERyb3BIYW5kbGVycyhjYXJkcywgZ3JvdXBOYW1lLCBhbGxUYXNrcylcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpXG4gICAgICB0aGlzLnJlbmRlclRhc2tDYXJkKGNhcmRzLCB0YXNrLCBhbGxUYXNrcywgdGFza1ByZXZpZXdNYXAuZ2V0KHRhc2suZmlsZS5wYXRoKSB8fCAnJylcblxuICAgIGNvbnN0IGFkZENhcmQgPSBjYXJkcy5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtdGFzay1jYXJkIHRhcmVhcy10YXNrLWNhcmQtYWRkJyB9KVxuICAgIGNvbnN0IGxpbmsgPSBhZGRDYXJkLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnKyBOdWV2YSB0YXJlYScsIGNsczogJ3RhcmVhcy1hZGQtbGluaycgfSlcbiAgICBsaW5rLm9uY2xpY2sgPSAoKSA9PiBuZXcgTmV3VGFza01vZGFsKHRoaXMuYXBwLCB0aGlzLnBsdWdpbiwgdGhpcy5hY3RpdmVUYWIsICcnLCBncm91cE5hbWUpLm9wZW4oKVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJUYXNrQ2FyZChjb250YWluZXI6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSwgYWxsVGFza3M6IFRhc2tJdGVtW10sIHRhc2tQcmV2aWV3OiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdWJ0YXNrcyA9IGFsbFRhc2tzXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wYXJlbnQgPT09IHRhc2suZmlsZS5iYXNlbmFtZSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcilcbiAgICBjb25zdCBoYXNTdWJ0YXNrcyA9IHN1YnRhc2tzLmxlbmd0aCA+IDBcbiAgICBjb25zdCBzdWJ0YXNrc0V4cGFuZGVkID0gdGhpcy5leHBhbmRlZENhcmRTdWJ0YXNrcy5oYXModGFzay5maWxlLnBhdGgpXG5cbiAgICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy10YXNrLWNhcmQnIH0pXG4gICAgY2FyZC5kYXRhc2V0LnBhdGggPSB0YXNrLmZpbGUucGF0aFxuICAgIGlmICh0aGlzLmRyb3BwZWRUYXNrQW5pbWF0aW9uUGF0aCA9PT0gdGFzay5maWxlLnBhdGgpIHtcbiAgICAgIGNhcmQuYWRkQ2xhc3MoJ3RhcmVhcy10YXNrLWNhcmQtZHJvcC1hbmltYXRlJylcbiAgICAgIHRoaXMuZHJvcHBlZFRhc2tBbmltYXRpb25QYXRoID0gbnVsbFxuICAgIH1cblxuICAgIHRoaXMuYXR0YWNoQ2FyZERyYWdIYW5kbGVycyhjb250YWluZXIsIGNhcmQsIHRhc2ssIGFsbFRhc2tzKVxuICAgIHRoaXMuYXR0YWNoQ2FyZEVkaXRIYW5kbGVycyhjYXJkLCB0YXNrKVxuXG4gICAgY29uc3Qgc3RhdHVzQmFuZENsYXNzID0gdGhpcy5nZXRTdGF0dXNDbGFzc05hbWUodGFzay5lc3RhZG8pXG4gICAgY29uc3Qgc3RhdHVzQmFuZCA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBgdGFyZWFzLWNhcmQtc2lkZS1iYW5kIHRhcmVhcy1jYXJkLXN0YXR1cy1iYW5kIHRhcmVhcy1jYXJkLXN0YXR1cy1iYW5kLSR7c3RhdHVzQmFuZENsYXNzfWAgfSlcbiAgICB0aGlzLnJlbmRlclN0YXR1c0JhbmQoc3RhdHVzQmFuZCwgdGFzaylcblxuICAgIGNvbnN0IHByaW9yaXR5QmFuZENsYXNzID0gdGhpcy5nZXRQcmlvcml0eUNsYXNzTmFtZSh0YXNrLnByaW9yaWRhZClcbiAgICBjb25zdCBwcmlvcml0eUJhbmQgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogYHRhcmVhcy1jYXJkLXNpZGUtYmFuZCB0YXJlYXMtY2FyZC1wcmlvcml0eS1iYW5kIHRhcmVhcy1jYXJkLXByaW9yaXR5LWJhbmQtJHtwcmlvcml0eUJhbmRDbGFzc31gIH0pXG4gICAgdGhpcy5yZW5kZXJQcmlvcml0eUJhbmQocHJpb3JpdHlCYW5kLCB0YXNrKVxuXG4gICAgY29uc3QgYWN0aW9ucyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWNhcmQtYWN0aW9ucyB0YXJlYXMtY2FyZC1hY3Rpb25zLWJhbmQnIH0pXG4gICAgdGhpcy5yZW5kZXJTdGF0dXNBY3Rpb25zKGFjdGlvbnMsIHRhc2spXG4gICAgdGhpcy5zeW5jQ2FyZFNpZGVCYW5kc1RvcE9mZnNldChjYXJkLCBhY3Rpb25zKVxuXG4gICAgY29uc3QgdGl0bGVSb3cgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLXRpdGxlLXJvdycgfSlcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlUm93LmNyZWF0ZUVsKCdhJywgeyB0ZXh0OiB0YXNrLnRhcmVhLCBjbHM6ICd0YXJlYXMtdGFzay1jYXJkLXRpdGxlJyB9KVxuICAgIHRpdGxlLnNldEF0dHIoJ3RpdGxlJywgdGFzay50YXJlYSlcbiAgICB0aXRsZS5vbmNsaWNrID0gKCkgPT4gdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dCh0YXNrLmZpbGUucGF0aCwgJycsIHRydWUpXG5cbiAgICBjb25zdCBjb21tZW50QnV0dG9uID0gdGl0bGVSb3cuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAndGFyZWFzLWNhcmQtY29tbWVudC1idG4nIH0pXG4gICAgY29tbWVudEJ1dHRvbi5zZXRBdHRyKCdhcmlhLWxhYmVsJywgJ0FncmVnYXIgY29tZW50YXJpbycpXG4gICAgY29tbWVudEJ1dHRvbi5zZXRBdHRyKCd0aXRsZScsICdBZ3JlZ2FyIGNvbWVudGFyaW8nKVxuICAgIG9ic2lkaWFuLnNldEljb24oY29tbWVudEJ1dHRvbiwgJ3Njcm9sbC10ZXh0JylcbiAgICBjb21tZW50QnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBuZXcgQWRkVGFza0NvbW1lbnRNb2RhbCh0aGlzLmFwcCwgdGFzaykub3BlbigpXG4gICAgfVxuXG4gICAgaWYgKHRhc2tQcmV2aWV3KVxuICAgICAgY2FyZC5jcmVhdGVFbCgncCcsIHsgdGV4dDogdGFza1ByZXZpZXcsIGNsczogJ3RhcmVhcy1jYXJkLXByZXZpZXcnIH0pXG5cbiAgICBjb25zdCBmb290ZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLWZvb3RlcicgfSlcbiAgICBpZiAoaGFzU3VidGFza3MpIHtcbiAgICAgIGNvbnN0IHN1YnRhc2tzVG9nZ2xlID0gZm9vdGVyLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICB0ZXh0OiBgJHtzdWJ0YXNrc0V4cGFuZGVkID8gJ+KWvCcgOiAn4pa2J30gJHtzdWJ0YXNrcy5sZW5ndGh9IHN1YnRhcmVhKHMpYCxcbiAgICAgICAgY2xzOiBgdGFyZWFzLWNhcmQtc3VidGFza3MgdGFyZWFzLWNhcmQtc3VidGFza3MtdG9nZ2xlJHtzdWJ0YXNrc0V4cGFuZGVkID8gJyBpcy1leHBhbmRlZCcgOiAnJ31gLFxuICAgICAgfSlcblxuICAgICAgc3VidGFza3NUb2dnbGUub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBpZiAoc3VidGFza3NFeHBhbmRlZClcbiAgICAgICAgICB0aGlzLmV4cGFuZGVkQ2FyZFN1YnRhc2tzLmRlbGV0ZSh0YXNrLmZpbGUucGF0aClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXMuZXhwYW5kZWRDYXJkU3VidGFza3MuYWRkKHRhc2suZmlsZS5wYXRoKVxuXG4gICAgICAgIHRoaXMucmVuZGVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRTdWJ0YXNrID0gZm9vdGVyLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnKyBTdWJ0YXJlYScsIGNsczogJ3RhcmVhcy1hZGQtbGluaycgfSlcbiAgICBhZGRTdWJ0YXNrLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBuZXcgTmV3VGFza01vZGFsKHRoaXMuYXBwLCB0aGlzLnBsdWdpbiwgdGFzay50YWJsZXJvLCB0YXNrLmZpbGUuYmFzZW5hbWUsIHRhc2suZXF1aXBvKS5vcGVuKClcbiAgICB9XG5cbiAgICBpZiAoaGFzU3VidGFza3MgJiYgc3VidGFza3NFeHBhbmRlZClcbiAgICAgIHRoaXMucmVuZGVyQ2FyZFN1YnRhc2tMaXN0KGNhcmQsIHN1YnRhc2tzKVxuXG4gICAgdGhpcy5yZW5kZXJDYXJkUHJvZ3Jlc3NCYW5kKGNhcmQsIHRhc2spXG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENhcmRFZGl0SGFuZGxlcnMoY2FyZDogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCEoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICByZXR1cm5cblxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdhLCBidXR0b24sIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0JykpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgbmV3IEVkaXRUYXNrRmlsZU1vZGFsKHRoaXMuYXBwLCB0YXNrKS5vcGVuKClcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jQ2FyZFNpZGVCYW5kc1RvcE9mZnNldChjYXJkOiBIVE1MRWxlbWVudCwgYWN0aW9uc0JhbmQ6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgYXBwbHlPZmZzZXQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBtZWFzdXJlZEhlaWdodCA9IE1hdGguY2VpbChhY3Rpb25zQmFuZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpXG4gICAgICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KCctLXRhcmVhcy1jYXJkLWFjdGlvbnMtYmFuZC1oZWlnaHQnLCBgJHttZWFzdXJlZEhlaWdodH1weGApXG4gICAgfVxuXG4gICAgYXBwbHlPZmZzZXQoKVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXBwbHlPZmZzZXQpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGJ1aWxkVGFza1ByZXZpZXdNYXAodGFza3M6IFRhc2tJdGVtW10pOiBQcm9taXNlPE1hcDxzdHJpbmcsIHN0cmluZz4+IHtcbiAgICBjb25zdCBwcmV2aWV3TWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwodGFza3MubWFwKGFzeW5jICh0YXNrKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlQ29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNhY2hlZFJlYWQodGFzay5maWxlKVxuICAgICAgICBwcmV2aWV3TWFwLnNldCh0YXNrLmZpbGUucGF0aCwgZXh0cmFjdFRhc2tCb2R5UHJldmlldyhmaWxlQ29udGVudCkpXG4gICAgICB9XG4gICAgICBjYXRjaCB7XG4gICAgICAgIHByZXZpZXdNYXAuc2V0KHRhc2suZmlsZS5wYXRoLCAnJylcbiAgICAgIH1cbiAgICB9KSlcblxuICAgIHJldHVybiBwcmV2aWV3TWFwXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclJvdyh0Ym9keTogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtLCBhbGxUYXNrczogVGFza0l0ZW1bXSwgZGVwdGg6IG51bWJlcikge1xuICAgIGNvbnN0IHN1YnRhc2tzID0gYWxsVGFza3NcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLnBhcmVudCA9PT0gdGFzay5maWxlLmJhc2VuYW1lKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKVxuXG4gICAgY29uc3QgaGFzU3VidGFza3MgPSBzdWJ0YXNrcy5sZW5ndGggPiAwXG4gICAgY29uc3QgZXhwYW5kZWQgPSB0aGlzLmV4cGFuZGVkVGFza3MuaGFzKHRhc2suZmlsZS5wYXRoKVxuXG4gICAgY29uc3Qgcm93ID0gdGJvZHkuY3JlYXRlRWwoJ3RyJywgeyBjbHM6ICd0YXJlYXMtcm93JyB9KVxuICAgIHJvdy5kYXRhc2V0LnBhdGggPSB0YXNrLmZpbGUucGF0aFxuICAgIHJvdy5kYXRhc2V0LmRlcHRoID0gU3RyaW5nKGRlcHRoKVxuXG4gICAgdGhpcy5yZW5kZXJEcmFnQ2VsbChyb3csIHRib2R5LCB0YXNrLCBhbGxUYXNrcywgZGVwdGgpXG4gICAgdGhpcy5yZW5kZXJUb2dnbGVDZWxsKHJvdywgdGFzaywgaGFzU3VidGFza3MsIGV4cGFuZGVkLCBkZXB0aClcbiAgICB0aGlzLnJlbmRlclRhc2tOYW1lQ2VsbChyb3csIHRhc2ssIGRlcHRoKVxuICAgIHRoaXMucmVuZGVyU3RhdHVzQ2VsbChyb3csIHRhc2spXG4gICAgdGhpcy5yZW5kZXJUZWFtQ2VsbChyb3csIHRhc2ssIGRlcHRoKVxuICAgIHRoaXMucmVuZGVyUHJpb3JpdHlDZWxsKHJvdywgdGFzaylcbiAgICB0aGlzLnJlbmRlckRlZGljYXRlZENlbGwocm93LCB0YXNrKVxuICAgIHRoaXMucmVuZGVyRXN0aW1hdGVkQ2VsbChyb3csIHRhc2spXG4gICAgdGhpcy5yZW5kZXJTdGFydERhdGVDZWxsKHJvdywgdGFzaylcbiAgICB0aGlzLnJlbmRlckVuZERhdGVDZWxsKHJvdywgdGFzaylcbiAgICB0aGlzLnJlbmRlclBlcmNlbnRDZWxsKHJvdywgdGFzaylcbiAgICB0aGlzLnJlbmRlclN0YXR1c0FjdGlvbnNDZWxsKHJvdywgdGFzaylcblxuICAgIGlmICghZXhwYW5kZWQpXG4gICAgICByZXR1cm5cblxuICAgIGZvciAoY29uc3Qgc3VidGFzayBvZiBzdWJ0YXNrcylcbiAgICAgIHRoaXMucmVuZGVyUm93KHRib2R5LCBzdWJ0YXNrLCBhbGxUYXNrcywgZGVwdGggKyAxKVxuXG4gICAgaWYgKCF0aGlzLmlzQXJjaGl2ZWRUYWIoKSAmJiAhdGhpcy5pc1BvbW9kb3JvVGFiKCkpIHtcbiAgICAgIGNvbnN0IGFkZFN1YlJvdyA9IHRib2R5LmNyZWF0ZUVsKCd0cicsIHsgY2xzOiAndGFyZWFzLWFkZC1yb3cnIH0pXG4gICAgICBhZGRTdWJSb3cuY3JlYXRlRWwoJ3RkJylcbiAgICAgIGFkZFN1YlJvdy5jcmVhdGVFbCgndGQnKVxuXG4gICAgICBjb25zdCBhZGRTdWJDZWxsID0gYWRkU3ViUm93LmNyZWF0ZUVsKCd0ZCcsIHsgYXR0cjogeyBjb2xzcGFuOiAnMTAnIH0gfSlcbiAgICAgIGFkZFN1YkNlbGwuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHsoZGVwdGggKyAxKSAqIDI0ICsgOH1weGBcblxuICAgICAgY29uc3QgYWRkU3VidGFzayA9IGFkZFN1YkNlbGwuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICcrIFN1YnRhcmVhJywgY2xzOiAndGFyZWFzLWFkZC1saW5rJyB9KVxuICAgICAgYWRkU3VidGFzay5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIG5ldyBOZXdUYXNrTW9kYWwodGhpcy5hcHAsIHRoaXMucGx1Z2luLCB0YXNrLnRhYmxlcm8sIHRhc2suZmlsZS5iYXNlbmFtZSwgdGFzay5lcXVpcG8pLm9wZW4oKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyRHJhZ0NlbGwocm93OiBIVE1MRWxlbWVudCwgdGJvZHk6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSwgYWxsVGFza3M6IFRhc2tJdGVtW10sIGRlcHRoOiBudW1iZXIpIHtcbiAgICBjb25zdCBkcmFnQ2VsbCA9IHJvdy5jcmVhdGVFbCgndGQnLCB7IGNsczogJ3RhcmVhcy1jZWxsLWRyYWcnIH0pXG4gICAgZHJhZ0NlbGwuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICfioIHioIHioIEnLCBjbHM6ICd0YXJlYXMtZHJhZy1oYW5kbGUnIH0pXG5cbiAgICByb3cuZHJhZ2dhYmxlID0gdHJ1ZVxuXG4gICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZGF0YVRyYW5zZmVyID0gZXZlbnQuZGF0YVRyYW5zZmVyXG4gICAgICBpZiAoIWRhdGFUcmFuc2ZlcilcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHRoaXMuZHJhZ1BhdGggPSB0YXNrLmZpbGUucGF0aFxuICAgICAgdGhpcy5kcmFnRGVwdGggPSBkZXB0aFxuICAgICAgdGhpcy5kcmFnUGFyZW50ID0gdGFzay5wYXJlbnRcbiAgICAgIHJvdy5hZGRDbGFzcygndGFyZWFzLXJvdy1kcmFnZ2luZycpXG4gICAgICBkYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJ1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9KVxuXG4gICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0Um93RHJhZ1N0YXRlKHRib2R5LCByb3cpXG4gICAgfSlcblxuICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNhbkRyb3BPblJvdyh0YXNrLCBkZXB0aCkpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2ZlcilcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcblxuICAgICAgdGJvZHkucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy1yb3ctZHJhZy1vdmVyJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgndGFyZWFzLXJvdy1kcmFnLW92ZXInKSlcbiAgICAgIHJvdy5hZGRDbGFzcygndGFyZWFzLXJvdy1kcmFnLW92ZXInKVxuICAgIH0pXG5cbiAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKCkgPT4ge1xuICAgICAgcm93LnJlbW92ZUNsYXNzKCd0YXJlYXMtcm93LWRyYWctb3ZlcicpXG4gICAgfSlcblxuICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY2FuRHJvcE9uUm93KHRhc2ssIGRlcHRoKSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICByb3cucmVtb3ZlQ2xhc3MoJ3RhcmVhcy1yb3ctZHJhZy1vdmVyJylcblxuICAgICAgaWYgKCF0aGlzLmRyYWdQYXRoKVxuICAgICAgICByZXR1cm5cblxuICAgICAgaWYgKGRlcHRoID09PSAwKVxuICAgICAgICBhd2FpdCB0aGlzLnJlb3JkZXJUYXNrKHRoaXMuZHJhZ1BhdGgsIHRhc2suZmlsZS5wYXRoLCBhbGxUYXNrcylcbiAgICAgIGVsc2VcbiAgICAgICAgYXdhaXQgdGhpcy5yZW9yZGVyU3VidGFzayh0aGlzLmRyYWdQYXRoLCB0YXNrLmZpbGUucGF0aCwgYWxsVGFza3MpXG5cbiAgICAgIHRoaXMucmVzZXRSb3dEcmFnU3RhdGUodGJvZHksIHJvdylcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJUb2dnbGVDZWxsKHJvdzogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtLCBoYXNTdWJ0YXNrczogYm9vbGVhbiwgZXhwYW5kZWQ6IGJvb2xlYW4sIGRlcHRoOiBudW1iZXIpIHtcbiAgICBjb25zdCB0b2dnbGVDZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtdG9nZ2xlJyB9KVxuXG4gICAgaWYgKGRlcHRoICE9PSAwKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCB0b2dnbGUgPSB0b2dnbGVDZWxsLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgdGV4dDogZXhwYW5kZWQgPyAn4pa8JyA6ICfilrYnLFxuICAgICAgY2xzOiBgdGFyZWFzLXN1YnRhc2stdG9nZ2xlJHtoYXNTdWJ0YXNrcyA/ICcnIDogJyB0YXJlYXMtdG9nZ2xlLWVtcHR5J31gLFxuICAgIH0pXG5cbiAgICB0b2dnbGUub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgaWYgKGV4cGFuZGVkKVxuICAgICAgICB0aGlzLmV4cGFuZGVkVGFza3MuZGVsZXRlKHRhc2suZmlsZS5wYXRoKVxuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmV4cGFuZGVkVGFza3MuYWRkKHRhc2suZmlsZS5wYXRoKVxuXG4gICAgICB0aGlzLnJlbmRlcigpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJUYXNrTmFtZUNlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0sIGRlcHRoOiBudW1iZXIpIHtcbiAgICBjb25zdCBjZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtbmFtZScgfSlcbiAgICBjZWxsLnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7ZGVwdGggKiAyNCArIDh9cHhgXG5cbiAgICBjb25zdCB0aXRsZVdyYXAgPSBjZWxsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy10YXNrLXRpdGxlLXdyYXAnIH0pXG5cbiAgICBpZiAoZGVwdGggPiAwKVxuICAgICAgdGl0bGVXcmFwLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAn4pSUICcsIGNsczogJ3RhcmVhcy1zdWJ0YXNrLWluZGVudCcgfSlcblxuICAgIGNvbnN0IGxpbmsgPSB0aXRsZVdyYXAuY3JlYXRlRWwoJ2EnLCB7IHRleHQ6IHRhc2sudGFyZWEsIGNsczogJ3RhcmVhcy10YXNrLWxpbmsnIH0pXG4gICAgbGluay5zZXRBdHRyKCd0aXRsZScsIHRhc2sudGFyZWEpXG4gICAgbGluay5vbmNsaWNrID0gKCkgPT4gdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dCh0YXNrLmZpbGUucGF0aCwgJycsIHRydWUpXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclN0YXR1c0NlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBjZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtZXN0YWRvJyB9KVxuICAgIHRoaXMucmVuZGVyU3RhdHVzQmFkZ2UoY2VsbCwgdGFzaylcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU3RhdHVzQmFkZ2UoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBzdGF0dXNDbGFzcyA9IHRoaXMuZ2V0U3RhdHVzQ2xhc3NOYW1lKHRhc2suZXN0YWRvKVxuICAgIGNvbnN0IGJhZGdlID0gY29udGFpbmVyLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgdGV4dDogdGFzay5lc3RhZG8sXG4gICAgICBjbHM6IGB0YXJlYXMtZXN0YWRvIHRhcmVhcy1lc3RhZG8tJHtzdGF0dXNDbGFzc31gLFxuICAgIH0pXG5cbiAgICBiYWRnZS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgc2hvd0Ryb3Bkb3duKGJhZGdlLCBFU1RBRE9TLCB0YXNrLmVzdGFkbywgYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwbHlTdGF0ZVRyYW5zaXRpb24odGFzaywgdmFsdWUpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU3RhdHVzQmFuZChjb250YWluZXI6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnRhaW5lci5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogdGFzay5lc3RhZG8sIGNsczogJ3RhcmVhcy1jYXJkLXNpZGUtYmFuZC10ZXh0JyB9KVxuICAgIGNvbnRhaW5lci5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgc2hvd0Ryb3Bkb3duKGNvbnRhaW5lciwgRVNUQURPUywgdGFzay5lc3RhZG8sIGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcGx5U3RhdGVUcmFuc2l0aW9uKHRhc2ssIHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclByaW9yaXR5QmFuZChjb250YWluZXI6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnRhaW5lci5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogdGFzay5wcmlvcmlkYWQsIGNsczogJ3RhcmVhcy1jYXJkLXNpZGUtYmFuZC10ZXh0JyB9KVxuICAgIGNvbnRhaW5lci5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgc2hvd0Ryb3Bkb3duKGNvbnRhaW5lciwgUFJJT1JJREFERVMsIHRhc2sucHJpb3JpZGFkLCBhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgcHJpb3JpZGFkOiB2YWx1ZSB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckNhcmRTdWJ0YXNrTGlzdChjYXJkOiBIVE1MRWxlbWVudCwgc3VidGFza3M6IFRhc2tJdGVtW10pIHtcbiAgICBjb25zdCBsaXN0ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtY2FyZC1zdWJ0YXNrLWxpc3QnIH0pXG5cbiAgICBmb3IgKGNvbnN0IHN1YnRhc2sgb2Ygc3VidGFza3MpIHtcbiAgICAgIGNvbnN0IHJvdyA9IGxpc3QuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWNhcmQtc3VidGFzay1yb3cnIH0pXG4gICAgICBjb25zdCBjaGVja2VkID0gc3VidGFzay5lc3RhZG8gPT09ICdGaW5hbGl6YWRhJ1xuXG4gICAgICBjb25zdCBjaGVja2JveCA9IHJvdy5jcmVhdGVFbCgnaW5wdXQnLCB7XG4gICAgICAgIGNsczogJ3RhcmVhcy1jYXJkLXN1YnRhc2stY2hlY2snLFxuICAgICAgICBhdHRyOiB7IHR5cGU6ICdjaGVja2JveCcgfSxcbiAgICAgIH0pXG4gICAgICBjaGVja2JveC5jaGVja2VkID0gY2hlY2tlZFxuXG4gICAgICBjaGVja2JveC5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB9XG5cbiAgICAgIGNoZWNrYm94Lm9uY2hhbmdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnN0IG5leHRTdGF0dXMgPSBjaGVja2JveC5jaGVja2VkID8gJ0ZpbmFsaXphZGEnIDogJ1BlbmRpZW50ZSdcbiAgICAgICAgaWYgKHN1YnRhc2suZXN0YWRvID09PSBuZXh0U3RhdHVzKVxuICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIGF3YWl0IHRoaXMuYXBwbHlTdGF0ZVRyYW5zaXRpb24oc3VidGFzaywgbmV4dFN0YXR1cywgdW5kZWZpbmVkLCB7IG1vdmVGaWxlOiBmYWxzZSB9KVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0aXRsZSA9IHJvdy5jcmVhdGVFbCgnYScsIHtcbiAgICAgICAgdGV4dDogc3VidGFzay50YXJlYSxcbiAgICAgICAgY2xzOiBgdGFyZWFzLWNhcmQtc3VidGFzay10aXRsZSR7Y2hlY2tlZCA/ICcgaXMtZG9uZScgOiAnJ31gLFxuICAgICAgfSlcbiAgICAgIHRpdGxlLnNldEF0dHIoJ3RpdGxlJywgc3VidGFzay50YXJlYSlcbiAgICAgIHRpdGxlLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChzdWJ0YXNrLmZpbGUucGF0aCwgJycsIHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbW1lbnRCdXR0b24gPSByb3cuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAndGFyZWFzLWNhcmQtY29tbWVudC1idG4gdGFyZWFzLWNhcmQtc3VidGFzay1jb21tZW50LWJ0bicgfSlcbiAgICAgIGNvbW1lbnRCdXR0b24uc2V0QXR0cignYXJpYS1sYWJlbCcsICdBZ3JlZ2FyIGNvbWVudGFyaW8nKVxuICAgICAgY29tbWVudEJ1dHRvbi5zZXRBdHRyKCd0aXRsZScsICdBZ3JlZ2FyIGNvbWVudGFyaW8nKVxuICAgICAgb2JzaWRpYW4uc2V0SWNvbihjb21tZW50QnV0dG9uLCAnc2Nyb2xsLXRleHQnKVxuICAgICAgY29tbWVudEJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIG5ldyBBZGRUYXNrQ29tbWVudE1vZGFsKHRoaXMuYXBwLCBzdWJ0YXNrKS5vcGVuKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckNhcmRQcm9ncmVzc0JhbmQoY2FyZDogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3Qgcm93ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtY2FyZC1wcm9ncmVzcy1yb3cnIH0pXG4gICAgY29uc3QgYmFuZCA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtY2FyZC1wcm9ncmVzcy1iYW5kJyB9KVxuICAgIGNvbnN0IGZpbGwgPSBiYW5kLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLXByb2dyZXNzLWJhbmQtZmlsbCcgfSlcbiAgICBjb25zdCB0ZXh0ID0gYmFuZC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtY2FyZC1wcm9ncmVzcy1iYW5kLXRleHQnIH0pXG4gICAgY29uc3QgZGVkaWNhdGVkQW5kRXN0aW1hdGVkVGV4dCA9IGAke3RoaXMuZm9ybWF0RGVjaW1hbCh0YXNrLmRlZGljYWRvKX0vJHt0aGlzLmZvcm1hdERlY2ltYWwodGFzay5lc3RpbWFjaW9uKX1gXG4gICAgY29uc3QgZGV2aWF0aW9uVGV4dCA9IGAgKy0+ICR7dGhpcy5mb3JtYXREZWNpbWFsKHRhc2suZGVzdmlvKX1gXG4gICAgY29uc3QgdGV4dFZhbHVlID0gdGV4dC5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgIGNsczogJ3RhcmVhcy1jYXJkLXByb2dyZXNzLWJhbmQtdGV4dC12YWx1ZSB0YXJlYXMtY2FyZC1wcm9ncmVzcy1iYW5kLXRleHQtZWRpdGFibGUnLFxuICAgICAgdGV4dDogZGVkaWNhdGVkQW5kRXN0aW1hdGVkVGV4dCxcbiAgICB9KVxuICAgIHRleHRWYWx1ZS5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAndGFyZWFzLWNhcmQtcHJvZ3Jlc3MtYmFuZC10ZXh0LWRldmlhdGlvbicsIHRleHQ6IGRldmlhdGlvblRleHQgfSlcbiAgICB0ZXh0VmFsdWUuc2V0QXR0cigndGl0bGUnLCBgJHt0aGlzLmZvcm1hdERlY2ltYWwodGFzay5kZWRpY2Fkbyl9IGggLyAke3RoaXMuZm9ybWF0RGVjaW1hbCh0YXNrLmVzdGltYWNpb24pfSBoICstPiAke3RoaXMuZm9ybWF0RGVjaW1hbCh0YXNrLmRlc3Zpbyl9IGhgKVxuICAgIHRleHRWYWx1ZS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgdGhpcy5lZGl0Q2FyZERlZGljYXRlZFZhbHVlKGJhbmQsIHRleHRWYWx1ZSwgdGFzaylcbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzc1BlcmNlbnQgPSB0YXNrLmVzdGltYWNpb24gPiAwXG4gICAgICA/ICh0YXNrLmRlZGljYWRvIC8gdGFzay5lc3RpbWFjaW9uKSAqIDEwMFxuICAgICAgOiAwXG5cbiAgICBjb25zdCBpc092ZXJmbG93ID0gcHJvZ3Jlc3NQZXJjZW50ID4gMTAwXG4gICAgbGV0IHZpc2libGVQZXJjZW50ID0gaXNPdmVyZmxvd1xuICAgICAgPyBwcm9ncmVzc1BlcmNlbnQgJSAxMDBcbiAgICAgIDogcHJvZ3Jlc3NQZXJjZW50XG5cbiAgICBpZiAoaXNPdmVyZmxvdyAmJiB2aXNpYmxlUGVyY2VudCA9PT0gMClcbiAgICAgIHZpc2libGVQZXJjZW50ID0gMTAwXG5cbiAgICBjb25zdCBjbGFtcGVkUGVyY2VudCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgdmlzaWJsZVBlcmNlbnQpKVxuICAgIGZpbGwuc3R5bGUud2lkdGggPSBgJHtjbGFtcGVkUGVyY2VudH0lYFxuXG4gICAgaWYgKGlzT3ZlcmZsb3cpXG4gICAgICBiYW5kLmFkZENsYXNzKCdpcy1vdmVyZmxvdycpXG5cbiAgICBjb25zdCBwb21vZG9yb0J1dHRvbiA9IHJvdy5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICd0YXJlYXMtY2FyZC1wb21vZG9yby1idG4nIH0pXG4gICAgY29uc3QgaXNQb21vZG9yb1J1bm5pbmcgPSB0aGlzLnBsdWdpbi5wb21vZG9yby5ydW5TdGF0ZSA9PT0gJ3J1bm5pbmcnXG4gICAgcG9tb2Rvcm9CdXR0b24uZGlzYWJsZWQgPSBpc1BvbW9kb3JvUnVubmluZ1xuICAgIHBvbW9kb3JvQnV0dG9uLnNldEF0dHIoJ2FyaWEtbGFiZWwnLCAnQWJyaXIgUG9tb2Rvcm8gY29uIGVzdGEgdGFyZWEnKVxuICAgIHBvbW9kb3JvQnV0dG9uLnNldEF0dHIoJ3RpdGxlJywgaXNQb21vZG9yb1J1bm5pbmdcbiAgICAgID8gJ05vIHNlIHB1ZWRlIHZpbmN1bGFyIHVuYSB0YXJlYSBtaWVudHJhcyBlbCBjb250YWRvciBlc3TDoSBjb3JyaWVuZG8nXG4gICAgICA6ICdBYnJpciBQb21vZG9ybyBjb24gZXN0YSB0YXJlYScpXG4gICAgb2JzaWRpYW4uc2V0SWNvbihwb21vZG9yb0J1dHRvbiwgJ2Nsb2NrLTMnKVxuICAgIHBvbW9kb3JvQnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0aGlzLm9wZW5Qb21vZG9yb1dpdGhUYXNrKHRhc2spXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuUG9tb2Rvcm9XaXRoVGFzayh0YXNrOiBUYXNrSXRlbSkge1xuICAgIGlmICh0aGlzLnBsdWdpbi5wb21vZG9yby5ydW5TdGF0ZSA9PT0gJ3J1bm5pbmcnKSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdObyBzZSBwdWVkZSBjYW1iaWFyIGxhIHRhcmVhIG1pZW50cmFzIGVsIGNvbnRhZG9yIGVzdMOhIGNvcnJpZW5kby4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zZXRQb21vZG9yb1NlbGVjdGVkVGFza1BhdGgodGFzay5maWxlLnBhdGgpXG4gICAgdGhpcy5hY3RpdmVUYWIgPSBUYXJlYXNWaWV3LlBPTU9ET1JPX1RBQl9JRFxuICAgIHZvaWQgdGhpcy5yZW5kZXIoKVxuICB9XG5cbiAgcHJpdmF0ZSBlZGl0Q2FyZERlZGljYXRlZFZhbHVlKGJhbmQ6IEhUTUxFbGVtZW50LCB0ZXh0OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBpZiAoYmFuZC5xdWVyeVNlbGVjdG9yKCcudGFyZWFzLWNhcmQtcHJvZ3Jlc3MtaW5wdXQnKSlcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgaW5wdXQgPSBiYW5kLmNyZWF0ZUVsKCdpbnB1dCcsIHsgY2xzOiAndGFyZWFzLWNhcmQtcHJvZ3Jlc3MtaW5wdXQnIH0pXG4gICAgaW5wdXQudHlwZSA9ICdudW1iZXInXG4gICAgaW5wdXQubWluID0gJzAnXG4gICAgaW5wdXQuc3RlcCA9ICcwLjAxJ1xuICAgIGlucHV0LnZhbHVlID0gdGhpcy5mb3JtYXREZWNpbWFsKHRhc2suZGVkaWNhZG8pXG5cbiAgICB0ZXh0LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgIGlucHV0LmZvY3VzKClcbiAgICBpbnB1dC5zZWxlY3QoKVxuXG4gICAgY29uc3QgY2xvc2VFZGl0b3IgPSBhc3luYyAoc2F2ZTogYm9vbGVhbikgPT4ge1xuICAgICAgY29uc3QgbmV4dFZhbHVlID0gdGhpcy5wYXJzZURlY2ltYWwoaW5wdXQudmFsdWUpXG4gICAgICBpbnB1dC5yZW1vdmUoKVxuICAgICAgdGV4dC5zdHlsZS52aXNpYmlsaXR5ID0gJydcblxuICAgICAgaWYgKCFzYXZlIHx8IG5leHRWYWx1ZSA9PT0gdGFzay5kZWRpY2FkbylcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IGRlZGljYWRvOiBuZXh0VmFsdWUgfSlcbiAgICB9XG5cbiAgICBpbnB1dC5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICB2b2lkIGNsb3NlRWRpdG9yKHRydWUpXG4gICAgfSlcblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpXG4gICAgICAgIGlucHV0LmJsdXIoKVxuXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHZvaWQgY2xvc2VFZGl0b3IoZmFsc2UpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU3RhdHVzQWN0aW9uc0NlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBjZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtYWN0aW9ucycgfSlcbiAgICBpZiAodGhpcy5pc0FyY2hpdmVkVGFiKCkpIHtcbiAgICAgIHRoaXMucmVuZGVyQXJjaGl2ZWRBY3Rpb25zKGNlbGwsIHRhc2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlclN0YXR1c0FjdGlvbnMoY2VsbCwgdGFzaylcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RhdHVzQ2xhc3NOYW1lKHN0YXR1czogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RhdHVzLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnLScpXG4gIH1cblxuICBwcml2YXRlIGdldFByaW9yaXR5Q2xhc3NOYW1lKHByaW9yaXR5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBwcmlvcml0eS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJy0nKVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJTdGF0dXNBY3Rpb25zKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtc3RhdHVzLWFjdGlvbnMnIH0pXG5cbiAgICBjb25zdCBwcm9ncmVzc0FjdGlvbiA9IHRhc2suZXN0YWRvID09PSAnRW4gcHJvZ3Jlc28nXG4gICAgICA/IHsgbGFiZWw6ICdQYXJhcicsIG5leHRTdGF0dXM6ICdQZW5kaWVudGUnIH1cbiAgICAgIDogeyBsYWJlbDogJ0luaWNpYXInLCBuZXh0U3RhdHVzOiAnRW4gcHJvZ3Jlc28nIH1cblxuICAgIGNvbnN0IHN0YXR1c0FjdGlvbnMgPSBbXG4gICAgICB7IGlkOiAnZGlzbWlzcycsIGxhYmVsOiAnRGVzZXN0aW1hcicsIG5leHRTdGF0dXM6ICdDYW5jZWxhZGEnLCBjbHM6ICdpcy1kaXNtaXNzJyB9LFxuICAgICAgeyBpZDogJ3N0YXJ0LXN0b3AnLCAuLi5wcm9ncmVzc0FjdGlvbiwgY2xzOiAnaXMtc3RhcnQtc3RvcCcgfSxcbiAgICAgIHsgaWQ6ICdmaW5pc2gnLCBsYWJlbDogJ0ZpbmFsaXphcicsIG5leHRTdGF0dXM6ICdGaW5hbGl6YWRhJywgY2xzOiAnaXMtZmluaXNoJyB9LFxuICAgICAgeyBpZDogJ2Jsb2NrJywgbGFiZWw6ICdCbG9xdWVhcicsIG5leHRTdGF0dXM6ICdCbG9xdWVhZGEnLCBjbHM6ICdpcy1ibG9jaycgfSxcbiAgICBdXG5cbiAgICBmb3IgKGNvbnN0IGFjdGlvbiBvZiBzdGF0dXNBY3Rpb25zKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBhY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgIHRleHQ6IGFjdGlvbi5sYWJlbCxcbiAgICAgICAgY2xzOiAndGFyZWFzLXN0YXR1cy1hY3Rpb24tYnRuJyxcbiAgICAgIH0pXG4gICAgICBidXR0b24uYWRkQ2xhc3MoYWN0aW9uLmNscylcblxuICAgICAgaWYgKHRhc2suZXN0YWRvID09PSBhY3Rpb24ubmV4dFN0YXR1cylcbiAgICAgICAgYnV0dG9uLmFkZENsYXNzKCdpcy1hY3RpdmUnKVxuXG4gICAgICBidXR0b24ub25jbGljayA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgIGlmICh0YXNrLmVzdGFkbyA9PT0gYWN0aW9uLm5leHRTdGF0dXMpXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgYXdhaXQgdGhpcy5hcHBseVN0YXR1c0FjdGlvbih0YXNrLCBhY3Rpb24uaWQsIGFjdGlvbi5uZXh0U3RhdHVzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHVyZ2VudEJ1dHRvbiA9IGFjdGlvbnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIHRleHQ6ICdVcmdlbnRlJyxcbiAgICAgIGNsczogJ3RhcmVhcy1zdGF0dXMtYWN0aW9uLWJ0bicsXG4gICAgfSlcbiAgICB1cmdlbnRCdXR0b24uYWRkQ2xhc3MoJ2lzLXVyZ2VudCcpXG5cbiAgICBpZiAodGFzay5wcmlvcmlkYWQgPT09ICdVcmdlbnRlJylcbiAgICAgIHVyZ2VudEJ1dHRvbi5hZGRDbGFzcygnaXMtYWN0aXZlJylcblxuICAgIHVyZ2VudEJ1dHRvbi5vbmNsaWNrID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaWYgKHRhc2sucHJpb3JpZGFkID09PSAnVXJnZW50ZScpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBwcmlvcmlkYWQ6ICdVcmdlbnRlJyB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQXJjaGl2ZWRBY3Rpb25zKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtc3RhdHVzLWFjdGlvbnMnIH0pXG5cbiAgICBjb25zdCByZWNvdmVyQnV0dG9uID0gYWN0aW9ucy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgdGV4dDogJ1JlY3VwZXJhcicsXG4gICAgICBjbHM6ICd0YXJlYXMtc3RhdHVzLWFjdGlvbi1idG4nLFxuICAgIH0pXG4gICAgcmVjb3ZlckJ1dHRvbi5vbmNsaWNrID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgYXdhaXQgdGhpcy5yZWNvdmVyQXJjaGl2ZWRUYXNrKHRhc2spXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gYWN0aW9ucy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgdGV4dDogJ0VsaW1pbmFyJyxcbiAgICAgIGNsczogJ3RhcmVhcy1zdGF0dXMtYWN0aW9uLWJ0biBpcy1kaXNtaXNzJyxcbiAgICB9KVxuICAgIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgdGhpcy5vcGVuRGVsZXRlVGFza0NvbmZpcm0odGFzaylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlY292ZXJBcmNoaXZlZFRhc2sodGFzazogVGFza0l0ZW0pIHtcbiAgICBhd2FpdCB0aGlzLmFwcGx5U3RhdGVUcmFuc2l0aW9uKHRhc2ssICdQZW5kaWVudGUnKVxuICAgIGF3YWl0IHRoaXMucmVuZGVyKClcbiAgfVxuXG4gIHByaXZhdGUgb3BlbkRlbGV0ZVRhc2tDb25maXJtKHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgZmFtaWx5ID0gdGhpcy5nZXRUYXNrRmFtaWx5UG9zdE9yZGVyKHRhc2spXG4gICAgY29uc3QgZmlsZUNvdW50ID0gZmFtaWx5Lmxlbmd0aFxuICAgIGNvbnN0IHRhc2tMYWJlbCA9IGZpbGVDb3VudCA+IDFcbiAgICAgID8gYFwiJHt0YXNrLnRhcmVhfVwiIHkgJHtmaWxlQ291bnQgLSAxfSBzdWJ0YXJlYShzKWBcbiAgICAgIDogYFwiJHt0YXNrLnRhcmVhfVwiYFxuXG4gICAgbmV3IENvbmZpcm1EZWxldGVUYXNrTW9kYWwodGhpcy5hcHAsIHtcbiAgICAgIHRpdGxlOiAnRWxpbWluYXIgdGFyZWEgZGVmaW5pdGl2YW1lbnRlJyxcbiAgICAgIG1lc3NhZ2U6IGDCv1NlZ3VybyBxdWUgcXVlcsOpcyBlbGltaW5hciAke3Rhc2tMYWJlbH0/IEVzdGEgYWNjacOzbiBib3JyYSBsb3MgYXJjaGl2b3MgLm1kIHkgbm8gc2UgcHVlZGUgZGVzaGFjZXIuYCxcbiAgICAgIGNvbmZpcm1UZXh0OiAnQWNlcHRhcicsXG4gICAgICBvbkNvbmZpcm06IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5kZWxldGVUYXNrRmFtaWx5KHRhc2ssIGZhbWlseSlcbiAgICAgIH0sXG4gICAgfSkub3BlbigpXG4gIH1cblxuICBwcml2YXRlIGdldFRhc2tGYW1pbHlQb3N0T3JkZXIodGFzazogVGFza0l0ZW0pOiBUYXNrSXRlbVtdIHtcbiAgICBjb25zdCBhbGxUYXNrcyA9IGdldFRhc2tzKHRoaXMuYXBwKVxuICAgIGNvbnN0IGJ5UGFyZW50ID0gbmV3IE1hcDxzdHJpbmcsIFRhc2tJdGVtW10+KClcbiAgICBmb3IgKGNvbnN0IGN1cnJlbnQgb2YgYWxsVGFza3MpIHtcbiAgICAgIGlmICghY3VycmVudC5wYXJlbnQpXG4gICAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGNvbnN0IHNpYmxpbmdzID0gYnlQYXJlbnQuZ2V0KGN1cnJlbnQucGFyZW50KSA/PyBbXVxuICAgICAgc2libGluZ3MucHVzaChjdXJyZW50KVxuICAgICAgYnlQYXJlbnQuc2V0KGN1cnJlbnQucGFyZW50LCBzaWJsaW5ncylcbiAgICB9XG5cbiAgICBjb25zdCB2aXNpdGVkUGF0aHMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICAgIGNvbnN0IG9yZGVyZWQ6IFRhc2tJdGVtW10gPSBbXVxuXG4gICAgY29uc3QgdmlzaXQgPSAoY3VycmVudFRhc2s6IFRhc2tJdGVtKSA9PiB7XG4gICAgICBpZiAodmlzaXRlZFBhdGhzLmhhcyhjdXJyZW50VGFzay5maWxlLnBhdGgpKVxuICAgICAgICByZXR1cm5cblxuICAgICAgdmlzaXRlZFBhdGhzLmFkZChjdXJyZW50VGFzay5maWxlLnBhdGgpXG4gICAgICBjb25zdCBjaGlsZHJlbiA9IGJ5UGFyZW50LmdldChjdXJyZW50VGFzay5maWxlLmJhc2VuYW1lKSA/PyBbXVxuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbilcbiAgICAgICAgdmlzaXQoY2hpbGQpXG5cbiAgICAgIG9yZGVyZWQucHVzaChjdXJyZW50VGFzaylcbiAgICB9XG5cbiAgICB2aXNpdCh0YXNrKVxuICAgIHJldHVybiBvcmRlcmVkXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGRlbGV0ZVRhc2tGYW1pbHkodGFzazogVGFza0l0ZW0sIGZhbWlseTogVGFza0l0ZW1bXSkge1xuICAgIGNvbnN0IHNlbGVjdGVkVGFza1BhdGggPSB0aGlzLnBsdWdpbi5wb21vZG9yby5zZWxlY3RlZFRhc2tQYXRoXG4gICAgZm9yIChjb25zdCBtZW1iZXIgb2YgZmFtaWx5KSB7XG4gICAgICBjb25zdCBhYnN0cmFjdEZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgobWVtYmVyLmZpbGUucGF0aClcbiAgICAgIGlmICghKGFic3RyYWN0RmlsZSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGaWxlKSlcbiAgICAgICAgY29udGludWVcblxuICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuZGVsZXRlKGFic3RyYWN0RmlsZSwgdHJ1ZSlcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0ZWRUYXNrUGF0aCAmJiBmYW1pbHkuc29tZShtZW1iZXIgPT4gbWVtYmVyLmZpbGUucGF0aCA9PT0gc2VsZWN0ZWRUYXNrUGF0aCkpXG4gICAgICB0aGlzLnNldFBvbW9kb3JvU2VsZWN0ZWRUYXNrUGF0aChudWxsKVxuXG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKVxuICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYFNlIGVsaW1pbsOzIFwiJHt0YXNrLnRhcmVhfVwiIGRlIGZvcm1hIGRlZmluaXRpdmEuYClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgYXBwbHlTdGF0dXNBY3Rpb24odGFzazogVGFza0l0ZW0sIGFjdGlvbklkOiBzdHJpbmcsIG5leHRTdGF0dXM6IHN0cmluZykge1xuICAgIGlmIChhY3Rpb25JZCA9PT0gJ3N0YXJ0LXN0b3AnKSB7XG4gICAgICBpZiAodGFzay5lc3RhZG8gPT09ICdFbiBwcm9ncmVzbycpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHBseVN0YXRlVHJhbnNpdGlvbih0YXNrLCBuZXh0U3RhdHVzKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5hcHBseVN0YXRlVHJhbnNpdGlvbih0YXNrLCBuZXh0U3RhdHVzLCB7XG4gICAgICAgIC4uLnRoaXMuYnVpbGRTdGF0ZUNoYW5nZVVwZGF0ZXModGFzaywgbmV4dFN0YXR1cyksXG4gICAgICAgIGZlY2hhSW5pY2lvOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbklkID09PSAnZmluaXNoJykge1xuICAgICAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHBhcnNlVGFza0RhdGUodGFzay5mZWNoYUluaWNpbylcbiAgICAgIGNvbnN0IGRlZGljYXRlZEhvdXJzID0gc3RhcnREYXRlXG4gICAgICAgID8gdGhpcy5yb3VuZFRvVHdvKChlbmREYXRlLmdldFRpbWUoKSAtIHN0YXJ0RGF0ZS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwKSlcbiAgICAgICAgOiAwXG5cbiAgICAgIGNvbnN0IHVwZGF0ZXM6IFBhcnRpYWw8VGFza0Zyb250bWF0dGVyPiA9IHtcbiAgICAgICAgZXN0YWRvOiBuZXh0U3RhdHVzLFxuICAgICAgICBmZWNoYUZpbjogZW5kRGF0ZS50b0lTT1N0cmluZygpLFxuICAgICAgICBkZWRpY2FkbzogZGVkaWNhdGVkSG91cnMsXG4gICAgICB9XG5cbiAgICAgIGlmICghc3RhcnREYXRlKVxuICAgICAgICB1cGRhdGVzLmZlY2hhSW5pY2lvID0gZW5kRGF0ZS50b0lTT1N0cmluZygpXG5cbiAgICAgIGlmICh0YXNrLmVzdGltYWNpb24gPT09IDApXG4gICAgICAgIHVwZGF0ZXMuZXN0aW1hY2lvbiA9IGRlZGljYXRlZEhvdXJzXG5cbiAgICAgIGF3YWl0IHRoaXMuYXBwbHlTdGF0ZVRyYW5zaXRpb24odGFzaywgbmV4dFN0YXR1cywgdXBkYXRlcylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuYXBwbHlTdGF0ZVRyYW5zaXRpb24odGFzaywgbmV4dFN0YXR1cylcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRTdGF0ZUNoYW5nZVVwZGF0ZXModGFzazogVGFza0l0ZW0sIG5leHRTdGF0dXM6IHN0cmluZyk6IFBhcnRpYWw8VGFza0Zyb250bWF0dGVyPiB7XG4gICAgY29uc3QgdXBkYXRlczogUGFydGlhbDxUYXNrRnJvbnRtYXR0ZXI+ID0geyBlc3RhZG86IG5leHRTdGF0dXMgfVxuXG4gICAgaWYgKHRhc2suZXN0YWRvICE9PSAnRmluYWxpemFkYScgfHwgbmV4dFN0YXR1cyA9PT0gJ0ZpbmFsaXphZGEnKVxuICAgICAgcmV0dXJuIHVwZGF0ZXNcblxuICAgIGNvbnN0IHJlbWFpbmluZ0hvdXJzID0gdGhpcy5yb3VuZFRvVHdvKHRhc2suZXN0aW1hY2lvbiAtIHRhc2suZGVkaWNhZG8pXG4gICAgaWYgKHJlbWFpbmluZ0hvdXJzIDw9IDApXG4gICAgICByZXR1cm4gdXBkYXRlc1xuXG4gICAgdXBkYXRlcy5mZWNoYUZpbiA9IG5ldyBEYXRlKERhdGUubm93KCkgKyByZW1haW5pbmdIb3VycyAqIDYwICogNjAgKiAxMDAwKS50b0lTT1N0cmluZygpXG4gICAgcmV0dXJuIHVwZGF0ZXNcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyVGVhbUNlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0sIGRlcHRoOiBudW1iZXIpIHtcbiAgICBjb25zdCBjZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcpXG4gICAgaWYgKGRlcHRoID4gMClcbiAgICAgIHJldHVyblxuXG4gICAgdGhpcy5yZW5kZXJUZWFtQmFkZ2UoY2VsbCwgdGFzaylcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyVGVhbUJhZGdlKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgYm9hcmRHcm91cHMgPSB0aGlzLnBsdWdpbi5nZXRFcXVpcG9zRm9yVGFibGVybyh0YXNrLnRhYmxlcm8pXG4gICAgY29uc3QgdGVhbUNvbmZpZyA9IGJvYXJkR3JvdXBzLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IHRhc2suZXF1aXBvKVxuICAgIGNvbnN0IGJhZGdlID0gY29udGFpbmVyLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgdGV4dDogdGFzay5lcXVpcG8gfHwgJ1NpbiBncnVwbycsXG4gICAgICBjbHM6ICd0YXJlYXMtZXF1aXBvLWJhZGdlJyxcbiAgICB9KVxuXG4gICAgaWYgKHRlYW1Db25maWcpXG4gICAgICBiYWRnZS5zdHlsZS5iYWNrZ3JvdW5kID0gdGVhbUNvbmZpZy5jb2xvclxuXG4gICAgYmFkZ2Uub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgY29uc3Qgb3B0aW9ucyA9IGJvYXJkR3JvdXBzLm1hcChlcXVpcG8gPT4gZXF1aXBvLm5hbWUpXG4gICAgICBzaG93RHJvcGRvd24oYmFkZ2UsIG9wdGlvbnMsIHRhc2suZXF1aXBvLCBhc3luYyAobmV4dFRlYW0pID0+IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNUZWFtID0gdGFzay5lcXVpcG9cbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgZXF1aXBvOiBuZXh0VGVhbSB9KVxuXG4gICAgICAgIGNvbnN0IHN1YnRhc2tzID0gZ2V0VGFza3ModGhpcy5hcHApLmZpbHRlcihpdGVtID0+IGl0ZW0ucGFyZW50ID09PSB0YXNrLmZpbGUuYmFzZW5hbWUpXG4gICAgICAgIGZvciAoY29uc3Qgc3VidGFzayBvZiBzdWJ0YXNrcylcbiAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2soc3VidGFzaywgeyBlcXVpcG86IG5leHRUZWFtIH0pXG5cbiAgICAgICAgYXdhaXQgdGhpcy5yZWJhbGFuY2VCb2FyZFNjaGVkdWxlKHRhc2sudGFibGVybywgcHJldmlvdXNUZWFtKVxuICAgICAgICBhd2FpdCB0aGlzLnJlYmFsYW5jZUJvYXJkU2NoZWR1bGUodGFzay50YWJsZXJvLCBuZXh0VGVhbSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJQcmlvcml0eUNlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBjZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtcHJpb3JpZGFkJyB9KVxuICAgIHRoaXMucmVuZGVyUHJpb3JpdHlCYWRnZShjZWxsLCB0YXNrKVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJQcmlvcml0eUJhZGdlKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgcHJpb3JpdHlDbGFzcyA9IHRhc2sucHJpb3JpZGFkLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCB1cmdlbnRBY3RpdmUgPSB0YXNrLnByaW9yaWRhZCA9PT0gJ1VyZ2VudGUnICYmIHRhc2suZXN0YWRvICE9PSAnRmluYWxpemFkYSdcblxuICAgIGNvbnN0IGJhZGdlID0gY29udGFpbmVyLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgdGV4dDogdGFzay5wcmlvcmlkYWQsXG4gICAgICBjbHM6IGB0YXJlYXMtcHJpb3JpZGFkIHRhcmVhcy1wcmlvcmlkYWQtJHtwcmlvcml0eUNsYXNzfSR7dXJnZW50QWN0aXZlID8gJyB0YXJlYXMtdXJnZW50ZS1hY3RpdmEnIDogJyd9YCxcbiAgICB9KVxuXG4gICAgYmFkZ2Uub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHNob3dEcm9wZG93bihiYWRnZSwgUFJJT1JJREFERVMsIHRhc2sucHJpb3JpZGFkLCBhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgcHJpb3JpZGFkOiB2YWx1ZSB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckRlZGljYXRlZENlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBjZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtbnVtJyB9KVxuICAgIGNvbnN0IGVkaXRhYmxlID0gY2VsbC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogdGhpcy5mb3JtYXREZWNpbWFsKHRhc2suZGVkaWNhZG8pLCBjbHM6ICd0YXJlYXMtZWRpdGFibGUnIH0pXG5cbiAgICBlZGl0YWJsZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5lZGl0TnVtYmVyQ2VsbChlZGl0YWJsZSwgdGFzay5kZWRpY2FkbywgYXN5bmMgdmFsdWUgPT4gdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgZGVkaWNhZG86IHZhbHVlIH0pKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyRXN0aW1hdGVkQ2VsbChyb3c6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnN0IGNlbGwgPSByb3cuY3JlYXRlRWwoJ3RkJywgeyBjbHM6ICd0YXJlYXMtY2VsbC1udW0nIH0pXG4gICAgY29uc3QgZWRpdGFibGUgPSBjZWxsLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiB0aGlzLmZvcm1hdERlY2ltYWwodGFzay5lc3RpbWFjaW9uKSwgY2xzOiAndGFyZWFzLWVkaXRhYmxlJyB9KVxuXG4gICAgZWRpdGFibGUub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuZWRpdE51bWJlckNlbGwoZWRpdGFibGUsIHRhc2suZXN0aW1hY2lvbiwgYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IGVzdGltYWNpb246IHZhbHVlIH0pXG4gICAgICAgIGF3YWl0IHRoaXMucmViYWxhbmNlQm9hcmRTY2hlZHVsZSh0YXNrLnRhYmxlcm8sIHRhc2suZXF1aXBvKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclN0YXJ0RGF0ZUNlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICByb3cuY3JlYXRlRWwoJ3RkJywgeyBjbHM6ICd0YXJlYXMtY2VsbC1kYXRlJywgdGV4dDogdGhpcy5mb3JtYXRUYXNrRGF0ZSh0YXNrLmZlY2hhSW5pY2lvKSB9KVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJFbmREYXRlQ2VsbChyb3c6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIHJvdy5jcmVhdGVFbCgndGQnLCB7IGNsczogJ3RhcmVhcy1jZWxsLWRhdGUnLCB0ZXh0OiB0aGlzLmZvcm1hdFRhc2tEYXRlKHRhc2suZmVjaGFGaW4pIH0pXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclBlcmNlbnRDZWxsKHJvdzogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgcGVyY2VudCA9IHRoaXMuY2FsY3VsYXRlUHJvZ3Jlc3NQZXJjZW50KHRhc2spXG5cbiAgICBjb25zdCBjZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtcGN0JyB9KVxuICAgIGNlbGwuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IGAke3BlcmNlbnR9ICVgLCBjbHM6ICd0YXJlYXMtcGN0LXRleHQnIH0pXG5cbiAgICBjb25zdCBkb3QgPSBjZWxsLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICd0YXJlYXMtcGN0LWRvdCcgfSlcbiAgICBpZiAocGVyY2VudCA+PSAxMDApXG4gICAgICBkb3QuYWRkQ2xhc3MoJ2Z1bGwnKVxuICAgIGVsc2UgaWYgKHBlcmNlbnQgPiAwKVxuICAgICAgZG90LmFkZENsYXNzKCdwYXJ0aWFsJylcbiAgfVxuXG4gIHByaXZhdGUgZWRpdE51bWJlckNlbGwoXG4gICAgc3BhbjogSFRNTFNwYW5FbGVtZW50LFxuICAgIGN1cnJlbnRWYWx1ZTogbnVtYmVyLFxuICAgIG9uU2F2ZTogKG5leHRWYWx1ZTogbnVtYmVyKSA9PiBQcm9taXNlPHZvaWQ+LFxuICApIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC50eXBlID0gJ251bWJlcidcbiAgICBpbnB1dC5jbGFzc05hbWUgPSAndGFyZWFzLWlubGluZS1pbnB1dCdcbiAgICBpbnB1dC52YWx1ZSA9IHRoaXMuZm9ybWF0RGVjaW1hbChjdXJyZW50VmFsdWUpXG4gICAgaW5wdXQubWluID0gJzAnXG4gICAgaW5wdXQuc3RlcCA9ICcwLjAxJ1xuXG4gICAgc3Bhbi5yZXBsYWNlV2l0aChpbnB1dClcbiAgICBpbnB1dC5mb2N1cygpXG4gICAgaW5wdXQuc2VsZWN0KClcblxuICAgIGNvbnN0IGZpbmlzaCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wYXJzZURlY2ltYWwoaW5wdXQudmFsdWUpXG4gICAgICB2b2lkIG9uU2F2ZSh2YWx1ZSlcbiAgICB9XG5cbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZmluaXNoKVxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpXG4gICAgICAgIGlucHV0LmJsdXIoKVxuXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHRoaXMuZm9ybWF0RGVjaW1hbChjdXJyZW50VmFsdWUpXG4gICAgICAgIGlucHV0LmJsdXIoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIHBhcnNlRGVjaW1hbCh2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBwYXJzZWQgPSBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSlcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHBhcnNlZCkgfHwgcGFyc2VkIDwgMClcbiAgICAgIHJldHVybiAwXG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZChwYXJzZWQgKiAxMDApIC8gMTAwXG4gIH1cblxuICBwcml2YXRlIGZvcm1hdERlY2ltYWwodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VEZWNpbWFsKFN0cmluZyh2YWx1ZSkpLnRvRml4ZWQoMilcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0VGFza0RhdGUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZGF0ZSA9IHBhcnNlVGFza0RhdGUodmFsdWUpXG4gICAgaWYgKCFkYXRlKVxuICAgICAgcmV0dXJuICfigJQnXG5cbiAgICBjb25zdCBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJylcbiAgICBjb25zdCBtb250aCA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpXG4gICAgY29uc3QgaG91ciA9IFN0cmluZyhkYXRlLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJylcbiAgICBjb25zdCBtaW51dGUgPSBTdHJpbmcoZGF0ZS5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsICcwJylcblxuICAgIHJldHVybiBgJHtkYXl9LyR7bW9udGh9ICR7aG91cn06JHttaW51dGV9YFxuICB9XG5cbiAgcHJpdmF0ZSByb3VuZFRvVHdvKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChOdW1iZXIuaXNOYU4odmFsdWUpIHx8IHZhbHVlIDw9IDApXG4gICAgICByZXR1cm4gMFxuXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwXG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZVByb2dyZXNzUGVyY2VudCh0YXNrOiBUYXNrSXRlbSk6IG51bWJlciB7XG4gICAgY29uc3QgdG90YWwgPSB0YXNrLmVzdGltYWNpb24gfHwgMFxuICAgIGlmICh0b3RhbCA8PSAwKVxuICAgICAgcmV0dXJuIDBcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKCh0YXNrLmRlZGljYWRvIC8gdG90YWwpICogMTAwKVxuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDYXJkRHJhZ0hhbmRsZXJzKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGNhcmQ6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSwgYWxsVGFza3M6IFRhc2tJdGVtW10pIHtcbiAgICBjYXJkLmRyYWdnYWJsZSA9IHRydWVcblxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBkYXRhVHJhbnNmZXIgPSBldmVudC5kYXRhVHJhbnNmZXJcbiAgICAgIGlmICghZGF0YVRyYW5zZmVyKVxuICAgICAgICByZXR1cm5cblxuICAgICAgdGhpcy5kcmFnUGF0aCA9IHRhc2suZmlsZS5wYXRoXG4gICAgICB0aGlzLmRyYWdEZXB0aCA9IDBcbiAgICAgIHRoaXMuZHJhZ1BhcmVudCA9IHRhc2sucGFyZW50XG4gICAgICB0aGlzLmRyYWdJbnNlcnRQb3NpdGlvbiA9IG51bGxcbiAgICAgIGNhcmQuYWRkQ2xhc3MoJ3RhcmVhcy10YXNrLWNhcmQtZHJhZ2dpbmcnKVxuICAgICAgY2FyZC5hZGRDbGFzcygndGFyZWFzLXRhc2stY2FyZC1kcmFnLXByZXZpZXcnKVxuICAgICAgZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfSlcblxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHtcbiAgICAgIHRoaXMucmVzZXRDYXJkRHJhZ1N0YXRlKGNvbnRhaW5lciwgY2FyZClcbiAgICB9KVxuXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNhbkRyb3BPblJvdyh0YXNrLCAwKSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyKVxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJ1xuXG4gICAgICBjb25zdCBpbnNlcnRQb3NpdGlvbiA9IHRoaXMucmVzb2x2ZUNhcmRJbnNlcnRQb3NpdGlvbihldmVudCwgY2FyZClcbiAgICAgIHRoaXMuZHJhZ0luc2VydFBvc2l0aW9uID0gaW5zZXJ0UG9zaXRpb25cbiAgICAgIHRoaXMuY2xlYXJDYXJkRHJvcE1hcmtlcnMoKVxuICAgICAgY2FyZC5hZGRDbGFzcyhpbnNlcnRQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyAndGFyZWFzLXRhc2stY2FyZC1kcmFnLW92ZXItdG9wJyA6ICd0YXJlYXMtdGFzay1jYXJkLWRyYWctb3Zlci1ib3R0b20nKVxuICAgIH0pXG5cbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghdGhpcy5jYW5Ecm9wT25Sb3codGFzaywgMCkpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgY29uc3QgaW5zZXJ0UG9zaXRpb24gPSB0aGlzLmRyYWdJbnNlcnRQb3NpdGlvbiA/PyB0aGlzLnJlc29sdmVDYXJkSW5zZXJ0UG9zaXRpb24oZXZlbnQsIGNhcmQpXG4gICAgICBjYXJkLnJlbW92ZUNsYXNzKCd0YXJlYXMtdGFzay1jYXJkLWRyYWctb3Zlci10b3AnKVxuICAgICAgY2FyZC5yZW1vdmVDbGFzcygndGFyZWFzLXRhc2stY2FyZC1kcmFnLW92ZXItYm90dG9tJylcblxuICAgICAgaWYgKCF0aGlzLmRyYWdQYXRoKVxuICAgICAgICByZXR1cm5cblxuICAgICAgY29uc3QgZHJhZ2dlZCA9IGFsbFRhc2tzLmZpbmQoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gdGhpcy5kcmFnUGF0aClcbiAgICAgIGlmICghZHJhZ2dlZClcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHRoaXMuZHJvcHBlZFRhc2tBbmltYXRpb25QYXRoID0gdGhpcy5kcmFnUGF0aFxuICAgICAgaWYgKCFkcmFnZ2VkLnBhcmVudCAmJiBkcmFnZ2VkLnRhYmxlcm8gPT09IHRhc2sudGFibGVybyAmJiBkcmFnZ2VkLmVxdWlwbyAhPT0gdGFzay5lcXVpcG8pXG4gICAgICAgIGF3YWl0IHRoaXMubW92ZVRhc2tUb0dyb3VwKHRoaXMuZHJhZ1BhdGgsIHRhc2suZXF1aXBvLCBhbGxUYXNrcywgdGFzay5maWxlLnBhdGgsIGluc2VydFBvc2l0aW9uKVxuICAgICAgZWxzZVxuICAgICAgICBhd2FpdCB0aGlzLnJlb3JkZXJUYXNrKHRoaXMuZHJhZ1BhdGgsIHRhc2suZmlsZS5wYXRoLCBhbGxUYXNrcywgaW5zZXJ0UG9zaXRpb24pXG5cbiAgICAgIHRoaXMucmVzZXRDYXJkRHJhZ1N0YXRlKGNvbnRhaW5lciwgY2FyZClcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hHcm91cENhcmRMaXN0RHJvcEhhbmRsZXJzKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGdyb3VwTmFtZTogc3RyaW5nLCBhbGxUYXNrczogVGFza0l0ZW1bXSkge1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZHJhZ1BhdGggPSB0aGlzLmRyYWdQYXRoXG4gICAgICBpZiAoIWRyYWdQYXRoKVxuICAgICAgICByZXR1cm5cblxuICAgICAgY29uc3QgZHJhZ2dlZCA9IGFsbFRhc2tzLmZpbmQoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gZHJhZ1BhdGgpXG4gICAgICBpZiAoIWRyYWdnZWQgfHwgZHJhZ2dlZC5wYXJlbnQpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBpZiAoZHJhZ2dlZC50YWJsZXJvICE9PSB0aGlzLmFjdGl2ZVRhYiB8fCBkcmFnZ2VkLmVxdWlwbyA9PT0gZ3JvdXBOYW1lKVxuICAgICAgICByZXR1cm5cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIpXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG5cbiAgICAgIGNvbnRhaW5lci5hZGRDbGFzcygndGFyZWFzLWNhcmQtbGlzdC1kcm9wLXRhcmdldCcpXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5yZWxhdGVkVGFyZ2V0IGluc3RhbmNlb2YgTm9kZSAmJiBjb250YWluZXIuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3RhcmVhcy1jYXJkLWxpc3QtZHJvcC10YXJnZXQnKVxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZHJhZ1BhdGggPSB0aGlzLmRyYWdQYXRoXG4gICAgICBpZiAoIWRyYWdQYXRoKVxuICAgICAgICByZXR1cm5cblxuICAgICAgY29uc3QgbWFya2VyQ2FyZCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGFyZWFzLXRhc2stY2FyZC1kcmFnLW92ZXItdG9wLCAudGFyZWFzLXRhc2stY2FyZC1kcmFnLW92ZXItYm90dG9tJylcbiAgICAgIGNvbnN0IG1hcmtlclRhcmdldFBhdGggPSBtYXJrZXJDYXJkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBtYXJrZXJDYXJkLmRhdGFzZXQucGF0aCA/PyBudWxsIDogbnVsbFxuICAgICAgY29uc3QgbWFya2VySW5zZXJ0UG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJyB8IG51bGwgPSBtYXJrZXJDYXJkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICAgICAgPyAobWFya2VyQ2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhcmVhcy10YXNrLWNhcmQtZHJhZy1vdmVyLXRvcCcpID8gJ2JlZm9yZScgOiAnYWZ0ZXInKVxuICAgICAgICA6IG51bGxcblxuICAgICAgY29uc3QgdGFyZ2V0Q2FyZCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQgfCBudWxsKT8uY2xvc2VzdCgnLnRhcmVhcy10YXNrLWNhcmQnKVxuICAgICAgaWYgKHRhcmdldENhcmQgJiYgIXRhcmdldENhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXJlYXMtdGFzay1jYXJkLWFkZCcpKVxuICAgICAgICByZXR1cm5cblxuICAgICAgY29uc3QgZHJhZ2dlZCA9IGFsbFRhc2tzLmZpbmQoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gZHJhZ1BhdGgpXG4gICAgICBpZiAoIWRyYWdnZWQgfHwgZHJhZ2dlZC5wYXJlbnQpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBpZiAoZHJhZ2dlZC50YWJsZXJvICE9PSB0aGlzLmFjdGl2ZVRhYilcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3RhcmVhcy1jYXJkLWxpc3QtZHJvcC10YXJnZXQnKVxuICAgICAgdGhpcy5kcm9wcGVkVGFza0FuaW1hdGlvblBhdGggPSBkcmFnUGF0aFxuXG4gICAgICBpZiAobWFya2VyVGFyZ2V0UGF0aCAmJiBtYXJrZXJJbnNlcnRQb3NpdGlvbikge1xuICAgICAgICBpZiAoZHJhZ2dlZC5lcXVpcG8gPT09IGdyb3VwTmFtZSlcbiAgICAgICAgICBhd2FpdCB0aGlzLnJlb3JkZXJUYXNrKGRyYWdQYXRoLCBtYXJrZXJUYXJnZXRQYXRoLCBhbGxUYXNrcywgbWFya2VySW5zZXJ0UG9zaXRpb24pXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBhd2FpdCB0aGlzLm1vdmVUYXNrVG9Hcm91cChkcmFnUGF0aCwgZ3JvdXBOYW1lLCBhbGxUYXNrcywgbWFya2VyVGFyZ2V0UGF0aCwgbWFya2VySW5zZXJ0UG9zaXRpb24pXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkcmFnZ2VkLmVxdWlwbyAhPT0gZ3JvdXBOYW1lKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubW92ZVRhc2tUb0dyb3VwKGRyYWdQYXRoLCBncm91cE5hbWUsIGFsbFRhc2tzKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmRyYWdQYXRoID0gbnVsbFxuICAgICAgdGhpcy5kcmFnRGVwdGggPSBudWxsXG4gICAgICB0aGlzLmRyYWdQYXJlbnQgPSBudWxsXG4gICAgICB0aGlzLmRyYWdJbnNlcnRQb3NpdGlvbiA9IG51bGxcbiAgICAgIHRoaXMuY2xlYXJDYXJkRHJvcE1hcmtlcnMoKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlb3JkZXJUYXNrKGRyYWdnZWRQYXRoOiBzdHJpbmcsIHRhcmdldFBhdGg6IHN0cmluZywgYWxsVGFza3M6IFRhc2tJdGVtW10sIGluc2VydFBvc2l0aW9uOiAnYmVmb3JlJyB8ICdhZnRlcicgfCBudWxsID0gbnVsbCkge1xuICAgIGNvbnN0IGRyYWdnZWQgPSBhbGxUYXNrcy5maW5kKHRhc2sgPT4gdGFzay5maWxlLnBhdGggPT09IGRyYWdnZWRQYXRoKVxuICAgIGNvbnN0IHRhcmdldCA9IGFsbFRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmZpbGUucGF0aCA9PT0gdGFyZ2V0UGF0aClcbiAgICBpZiAoIWRyYWdnZWQgfHwgIXRhcmdldClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3Qgc2libGluZ3MgPSBhbGxUYXNrc1xuICAgICAgLmZpbHRlcih0YXNrID0+ICF0YXNrLnBhcmVudCAmJiB0YXNrLnRhYmxlcm8gPT09IGRyYWdnZWQudGFibGVybyAmJiB0YXNrLmVxdWlwbyA9PT0gZHJhZ2dlZC5lcXVpcG8pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpXG5cbiAgICBjb25zdCBmcm9tSW5kZXggPSBzaWJsaW5ncy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gZHJhZ2dlZFBhdGgpXG4gICAgY29uc3QgdG9JbmRleCA9IHNpYmxpbmdzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSB0YXJnZXRQYXRoKVxuXG4gICAgbGV0IG5leHRJbmRleCA9IHRvSW5kZXhcbiAgICBpZiAoaW5zZXJ0UG9zaXRpb24pIHtcbiAgICAgIG5leHRJbmRleCA9IHRvSW5kZXggKyAoaW5zZXJ0UG9zaXRpb24gPT09ICdhZnRlcicgPyAxIDogMClcbiAgICAgIGlmIChmcm9tSW5kZXggPCBuZXh0SW5kZXgpXG4gICAgICAgIG5leHRJbmRleCAtPSAxXG4gICAgfVxuXG4gICAgY29uc3QgbmV4dE9yZGVyID0gcmVvcmRlckxpc3Qoc2libGluZ3MsIGZyb21JbmRleCwgbmV4dEluZGV4KVxuICAgIGF3YWl0IHBlcnNpc3RUYXNrT3JkZXIobmV4dE9yZGVyLCBhc3luYyAodGFzaywgb3JkZXIpID0+IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IG9yZGVyIH0pKVxuICAgIGF3YWl0IHRoaXMucmViYWxhbmNlQm9hcmRTY2hlZHVsZShkcmFnZ2VkLnRhYmxlcm8sIGRyYWdnZWQuZXF1aXBvKVxuICAgIGF3YWl0IHRoaXMucmVuZGVyKClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVvcmRlclN1YnRhc2soZHJhZ2dlZFBhdGg6IHN0cmluZywgdGFyZ2V0UGF0aDogc3RyaW5nLCBhbGxUYXNrczogVGFza0l0ZW1bXSkge1xuICAgIGNvbnN0IGRyYWdnZWQgPSBhbGxUYXNrcy5maW5kKHRhc2sgPT4gdGFzay5maWxlLnBhdGggPT09IGRyYWdnZWRQYXRoKVxuICAgIGNvbnN0IHRhcmdldCA9IGFsbFRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmZpbGUucGF0aCA9PT0gdGFyZ2V0UGF0aClcbiAgICBpZiAoIWRyYWdnZWQgfHwgIXRhcmdldClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3Qgc2libGluZ3MgPSBhbGxUYXNrc1xuICAgICAgLmZpbHRlcih0YXNrID0+IHRhc2sucGFyZW50ID09PSBkcmFnZ2VkLnBhcmVudClcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcilcblxuICAgIGNvbnN0IGZyb21JbmRleCA9IHNpYmxpbmdzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSBkcmFnZ2VkUGF0aClcbiAgICBjb25zdCB0b0luZGV4ID0gc2libGluZ3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5maWxlLnBhdGggPT09IHRhcmdldFBhdGgpXG5cbiAgICBjb25zdCBuZXh0T3JkZXIgPSByZW9yZGVyTGlzdChzaWJsaW5ncywgZnJvbUluZGV4LCB0b0luZGV4KVxuICAgIGF3YWl0IHBlcnNpc3RUYXNrT3JkZXIobmV4dE9yZGVyLCBhc3luYyAodGFzaywgb3JkZXIpID0+IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IG9yZGVyIH0pKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBtb3ZlVGFza1RvR3JvdXAoXG4gICAgZHJhZ2dlZFBhdGg6IHN0cmluZyxcbiAgICB0YXJnZXRHcm91cDogc3RyaW5nLFxuICAgIGFsbFRhc2tzOiBUYXNrSXRlbVtdLFxuICAgIHRhcmdldFBhdGg6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIGluc2VydFBvc2l0aW9uOiAnYmVmb3JlJyB8ICdhZnRlcicgPSAnYWZ0ZXInLFxuICApIHtcbiAgICBjb25zdCBkcmFnZ2VkID0gYWxsVGFza3MuZmluZCh0YXNrID0+IHRhc2suZmlsZS5wYXRoID09PSBkcmFnZ2VkUGF0aClcbiAgICBpZiAoIWRyYWdnZWQgfHwgZHJhZ2dlZC5wYXJlbnQpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHByZXZpb3VzR3JvdXAgPSBkcmFnZ2VkLmVxdWlwb1xuICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayhkcmFnZ2VkLCB7IGVxdWlwbzogdGFyZ2V0R3JvdXAgfSlcblxuICAgIGNvbnN0IHN1YnRhc2tzID0gYWxsVGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5wYXJlbnQgPT09IGRyYWdnZWQuZmlsZS5iYXNlbmFtZSlcbiAgICBmb3IgKGNvbnN0IHN1YnRhc2sgb2Ygc3VidGFza3MpXG4gICAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2soc3VidGFzaywgeyBlcXVpcG86IHRhcmdldEdyb3VwIH0pXG5cbiAgICBpZiAoIXRhcmdldFBhdGgpIHtcbiAgICAgIGNvbnN0IG5leHRPcmRlciA9IHRoaXMucmVzb2x2ZU5leHRPcmRlckZvckdyb3VwKGFsbFRhc2tzLCBkcmFnZ2VkLnRhYmxlcm8sIHRhcmdldEdyb3VwLCBkcmFnZ2VkUGF0aClcbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayhkcmFnZ2VkLCB7IG9yZGVyOiBuZXh0T3JkZXIgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBzaWJsaW5ncyA9IGFsbFRhc2tzXG4gICAgICAgIC5maWx0ZXIodGFzayA9PiAhdGFzay5wYXJlbnQgJiYgdGFzay50YWJsZXJvID09PSBkcmFnZ2VkLnRhYmxlcm8gJiYgdGFzay5lcXVpcG8gPT09IHRhcmdldEdyb3VwICYmIHRhc2suZmlsZS5wYXRoICE9PSBkcmFnZ2VkUGF0aClcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKVxuXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IHNpYmxpbmdzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSB0YXJnZXRQYXRoKVxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkge1xuICAgICAgICBjb25zdCBuZXh0T3JkZXIgPSB0aGlzLnJlc29sdmVOZXh0T3JkZXJGb3JHcm91cChhbGxUYXNrcywgZHJhZ2dlZC50YWJsZXJvLCB0YXJnZXRHcm91cCwgZHJhZ2dlZFBhdGgpXG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayhkcmFnZ2VkLCB7IG9yZGVyOiBuZXh0T3JkZXIgfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBpbnNlcnRJbmRleCA9IHRhcmdldEluZGV4ICsgKGluc2VydFBvc2l0aW9uID09PSAnYWZ0ZXInID8gMSA6IDApXG4gICAgICAgIGNvbnN0IG5leHRPcmRlciA9IFsuLi5zaWJsaW5nc11cbiAgICAgICAgbmV4dE9yZGVyLnNwbGljZShpbnNlcnRJbmRleCwgMCwgZHJhZ2dlZClcbiAgICAgICAgYXdhaXQgcGVyc2lzdFRhc2tPcmRlcihuZXh0T3JkZXIsIGFzeW5jICh0YXNrLCBvcmRlcikgPT4gdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgb3JkZXIgfSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXdhaXQgdGhpcy5yZWJhbGFuY2VCb2FyZFNjaGVkdWxlKGRyYWdnZWQudGFibGVybywgcHJldmlvdXNHcm91cClcbiAgICBhd2FpdCB0aGlzLnJlYmFsYW5jZUJvYXJkU2NoZWR1bGUoZHJhZ2dlZC50YWJsZXJvLCB0YXJnZXRHcm91cClcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpXG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVDYXJkSW5zZXJ0UG9zaXRpb24oZXZlbnQ6IERyYWdFdmVudCwgY2FyZDogSFRNTEVsZW1lbnQpOiAnYmVmb3JlJyB8ICdhZnRlcicge1xuICAgIGNvbnN0IGJvdW5kcyA9IGNhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBtaWRwb2ludCA9IGJvdW5kcy50b3AgKyAoYm91bmRzLmhlaWdodCAvIDIpXG4gICAgcmV0dXJuIGV2ZW50LmNsaWVudFkgPCBtaWRwb2ludCA/ICdiZWZvcmUnIDogJ2FmdGVyJ1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckNhcmREcm9wTWFya2VycygpIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5nZXRSb290RWwoKVxuICAgIHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy10YXNrLWNhcmQtZHJhZy1vdmVyJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgndGFyZWFzLXRhc2stY2FyZC1kcmFnLW92ZXInKSlcbiAgICByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJlYXMtdGFzay1jYXJkLWRyYWctb3Zlci10b3AnKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd0YXJlYXMtdGFzay1jYXJkLWRyYWctb3Zlci10b3AnKSlcbiAgICByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJlYXMtdGFzay1jYXJkLWRyYWctb3Zlci1ib3R0b20nKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd0YXJlYXMtdGFzay1jYXJkLWRyYWctb3Zlci1ib3R0b20nKSlcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZU5leHRPcmRlckZvckdyb3VwKGFsbFRhc2tzOiBUYXNrSXRlbVtdLCBib2FyZE5hbWU6IHN0cmluZywgZ3JvdXBOYW1lOiBzdHJpbmcsIGV4Y2x1ZGVQYXRoOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IHNpYmxpbmdPcmRlcnMgPSBhbGxUYXNrc1xuICAgICAgLmZpbHRlcih0YXNrID0+ICF0YXNrLnBhcmVudCAmJiB0YXNrLnRhYmxlcm8gPT09IGJvYXJkTmFtZSAmJiB0YXNrLmVxdWlwbyA9PT0gZ3JvdXBOYW1lICYmIHRhc2suZmlsZS5wYXRoICE9PSBleGNsdWRlUGF0aClcbiAgICAgIC5tYXAodGFzayA9PiBOdW1iZXIuaXNGaW5pdGUodGFzay5vcmRlcikgPyB0YXNrLm9yZGVyIDogMClcblxuICAgIGlmIChzaWJsaW5nT3JkZXJzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiBPUkRFUl9TVEVQXG5cbiAgICByZXR1cm4gTWF0aC5tYXgoLi4uc2libGluZ09yZGVycykgKyBPUkRFUl9TVEVQXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHVwZGF0ZVRhc2sodGFzazogVGFza0l0ZW0sIHVwZGF0ZXM6IFBhcnRpYWw8VGFza0Zyb250bWF0dGVyPikge1xuICAgIGF3YWl0IHVwZGF0ZUZyb250bWF0dGVyKHRoaXMuYXBwLCB0YXNrLmZpbGUsIHVwZGF0ZXMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGFwcGx5U3RhdGVUcmFuc2l0aW9uKFxuICAgIHRhc2s6IFRhc2tJdGVtLFxuICAgIG5leHRTdGF0dXM6IHN0cmluZyxcbiAgICBleHBsaWNpdFVwZGF0ZXM/OiBQYXJ0aWFsPFRhc2tGcm9udG1hdHRlcj4sXG4gICAgb3B0aW9ucz86IHsgbW92ZUZpbGU/OiBib29sZWFuLCBzeW5jU3VidGFza3NXaXRoUGFyZW50PzogYm9vbGVhbiB9LFxuICApIHtcbiAgICBjb25zdCB1cGRhdGVzID0gZXhwbGljaXRVcGRhdGVzID8/IHRoaXMuYnVpbGRTdGF0ZUNoYW5nZVVwZGF0ZXModGFzaywgbmV4dFN0YXR1cylcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2sodGFzaywgdXBkYXRlcylcblxuICAgIGNvbnN0IHNob3VsZE1vdmVGaWxlID0gb3B0aW9ucz8ubW92ZUZpbGUgPz8gdHJ1ZVxuICAgIGNvbnN0IHNob3VsZFN5bmNTdWJ0YXNrcyA9IG9wdGlvbnM/LnN5bmNTdWJ0YXNrc1dpdGhQYXJlbnQgPz8gdHJ1ZVxuICAgIGNvbnN0IGlzSW5BcmNoaXZlZEZvbGRlciA9IGlzVGFza0luQ29tcGxldGVkRm9sZGVyKHRhc2suZmlsZS5wYXRoKVxuICAgIGlmIChzaG91bGRNb3ZlRmlsZSAmJiBuZXh0U3RhdHVzID09PSAnRmluYWxpemFkYScpXG4gICAgICBhd2FpdCBtb3ZlVGFza1RvQ29tcGxldGVkRm9sZGVyKHRoaXMuYXBwLCB0YXNrLmZpbGUsIEJvb2xlYW4odGFzay5wYXJlbnQpKVxuXG4gICAgaWYgKHNob3VsZE1vdmVGaWxlICYmIG5leHRTdGF0dXMgPT09ICdDYW5jZWxhZGEnKVxuICAgICAgYXdhaXQgbW92ZVRhc2tUb0NhbmNlbGxlZEZvbGRlcih0aGlzLmFwcCwgdGFzay5maWxlLCBCb29sZWFuKHRhc2sucGFyZW50KSlcblxuICAgIGlmIChzaG91bGRNb3ZlRmlsZSAmJiBuZXh0U3RhdHVzICE9PSAnRmluYWxpemFkYScgJiYgbmV4dFN0YXR1cyAhPT0gJ0NhbmNlbGFkYScgJiYgaXNJbkFyY2hpdmVkRm9sZGVyKVxuICAgICAgYXdhaXQgbW92ZVRhc2tUb0FjdGl2ZUZvbGRlcih0aGlzLmFwcCwgdGFzay5maWxlLCBCb29sZWFuKHRhc2sucGFyZW50KSlcblxuICAgIGlmIChzaG91bGRNb3ZlRmlsZSAmJiBzaG91bGRTeW5jU3VidGFza3MgJiYgIXRhc2sucGFyZW50KSB7XG4gICAgICBpZiAobmV4dFN0YXR1cyA9PT0gJ0VuIHByb2dyZXNvJylcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdWJ0YXNrc1N0YXR1c0ZvclBhcmVudCh0YXNrLmZpbGUuYmFzZW5hbWUsICdFbiBwcm9ncmVzbycpXG5cbiAgICAgIGlmIChuZXh0U3RhdHVzID09PSAnRmluYWxpemFkYScpXG4gICAgICAgIGF3YWl0IHRoaXMubW92ZVN1YnRhc2tzRm9yUGFyZW50KHRhc2suZmlsZS5iYXNlbmFtZSwgJ0ZpbmFsaXphZGEnKVxuXG4gICAgICBpZiAobmV4dFN0YXR1cyA9PT0gJ0NhbmNlbGFkYScpXG4gICAgICAgIGF3YWl0IHRoaXMubW92ZVN1YnRhc2tzRm9yUGFyZW50KHRhc2suZmlsZS5iYXNlbmFtZSwgJ0NhbmNlbGFkYScpXG5cbiAgICAgIGlmIChuZXh0U3RhdHVzICE9PSAnRmluYWxpemFkYScgJiYgbmV4dFN0YXR1cyAhPT0gJ0NhbmNlbGFkYScgJiYgaXNJbkFyY2hpdmVkRm9sZGVyKVxuICAgICAgICBhd2FpdCB0aGlzLm1vdmVTdWJ0YXNrc0ZvclBhcmVudCh0YXNrLmZpbGUuYmFzZW5hbWUsIG51bGwpXG4gICAgfVxuXG4gICAgaWYgKG5leHRTdGF0dXMgPT09ICdGaW5hbGl6YWRhJyB8fCBuZXh0U3RhdHVzID09PSAnQ2FuY2VsYWRhJyB8fCBpc0luQXJjaGl2ZWRGb2xkZXIpXG4gICAgICBhd2FpdCB0aGlzLnJlYmFsYW5jZUJvYXJkU2NoZWR1bGUodGFzay50YWJsZXJvLCB0YXNrLmVxdWlwbylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbW92ZVN1YnRhc2tzRm9yUGFyZW50KHBhcmVudFRhc2tOYW1lOiBzdHJpbmcsIG5leHRUZXJtaW5hbFN0YXR1czogJ0ZpbmFsaXphZGEnIHwgJ0NhbmNlbGFkYScgfCBudWxsKSB7XG4gICAgY29uc3Qgc3VidGFza3MgPSBnZXRUYXNrcyh0aGlzLmFwcCkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wYXJlbnQgPT09IHBhcmVudFRhc2tOYW1lKVxuXG4gICAgZm9yIChjb25zdCBzdWJ0YXNrIG9mIHN1YnRhc2tzKSB7XG4gICAgICBpZiAobmV4dFRlcm1pbmFsU3RhdHVzKSB7XG4gICAgICAgIGlmIChzdWJ0YXNrLmVzdGFkbyAhPT0gbmV4dFRlcm1pbmFsU3RhdHVzKVxuICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayhzdWJ0YXNrLCB7IGVzdGFkbzogbmV4dFRlcm1pbmFsU3RhdHVzIH0pXG5cbiAgICAgICAgaWYgKG5leHRUZXJtaW5hbFN0YXR1cyA9PT0gJ0ZpbmFsaXphZGEnKVxuICAgICAgICAgIGF3YWl0IG1vdmVUYXNrVG9Db21wbGV0ZWRGb2xkZXIodGhpcy5hcHAsIHN1YnRhc2suZmlsZSwgdHJ1ZSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGF3YWl0IG1vdmVUYXNrVG9DYW5jZWxsZWRGb2xkZXIodGhpcy5hcHAsIHN1YnRhc2suZmlsZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBhd2FpdCBtb3ZlVGFza1RvQWN0aXZlRm9sZGVyKHRoaXMuYXBwLCBzdWJ0YXNrLmZpbGUsIHRydWUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyB1cGRhdGVTdWJ0YXNrc1N0YXR1c0ZvclBhcmVudChwYXJlbnRUYXNrTmFtZTogc3RyaW5nLCBuZXh0U3RhdHVzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdWJ0YXNrcyA9IGdldFRhc2tzKHRoaXMuYXBwKS5maWx0ZXIoaXRlbSA9PiBpdGVtLnBhcmVudCA9PT0gcGFyZW50VGFza05hbWUpXG5cbiAgICBmb3IgKGNvbnN0IHN1YnRhc2sgb2Ygc3VidGFza3MpIHtcbiAgICAgIGlmIChzdWJ0YXNrLmVzdGFkbyA9PT0gbmV4dFN0YXR1cylcbiAgICAgICAgY29udGludWVcblxuICAgICAgYXdhaXQgdGhpcy5hcHBseVN0YXRlVHJhbnNpdGlvbihzdWJ0YXNrLCBuZXh0U3RhdHVzLCB1bmRlZmluZWQsIHsgc3luY1N1YnRhc2tzV2l0aFBhcmVudDogZmFsc2UgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlYmFsYW5jZUJvYXJkU2NoZWR1bGUoYm9hcmROYW1lOiBzdHJpbmcsIGdyb3VwTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCFib2FyZE5hbWUgfHwgIWdyb3VwTmFtZSlcbiAgICAgIHJldHVyblxuXG4gICAgYXdhaXQgcmViYWxhbmNlR3JvdXBFbmREYXRlcyh0aGlzLmFwcCwgYm9hcmROYW1lLCBncm91cE5hbWUpXG4gIH1cblxuICBwcml2YXRlIGNhbkRyb3BPblJvdyh0YXJnZXQ6IFRhc2tJdGVtLCBkZXB0aDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5kcmFnUGF0aFxuICAgICAgJiYgdGhpcy5kcmFnUGF0aCAhPT0gdGFyZ2V0LmZpbGUucGF0aFxuICAgICAgJiYgdGhpcy5kcmFnRGVwdGggPT09IGRlcHRoXG4gICAgICAmJiB0aGlzLmRyYWdQYXJlbnQgPT09IHRhcmdldC5wYXJlbnRcbiAgICApXG4gIH1cblxuICBwcml2YXRlIHJlc2V0Um93RHJhZ1N0YXRlKHRib2R5OiBIVE1MRWxlbWVudCwgcm93OiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuZHJhZ1BhdGggPSBudWxsXG4gICAgdGhpcy5kcmFnRGVwdGggPSBudWxsXG4gICAgdGhpcy5kcmFnUGFyZW50ID0gbnVsbFxuICAgIHJvdy5yZW1vdmVDbGFzcygndGFyZWFzLXJvdy1kcmFnZ2luZycpXG4gICAgdGJvZHkucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy1yb3ctZHJhZy1vdmVyJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgndGFyZWFzLXJvdy1kcmFnLW92ZXInKSlcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRDYXJkRHJhZ1N0YXRlKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGNhcmQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5kcmFnUGF0aCA9IG51bGxcbiAgICB0aGlzLmRyYWdEZXB0aCA9IG51bGxcbiAgICB0aGlzLmRyYWdQYXJlbnQgPSBudWxsXG4gICAgdGhpcy5kcmFnSW5zZXJ0UG9zaXRpb24gPSBudWxsXG4gICAgY2FyZC5yZW1vdmVDbGFzcygndGFyZWFzLXRhc2stY2FyZC1kcmFnZ2luZycpXG4gICAgY2FyZC5yZW1vdmVDbGFzcygndGFyZWFzLXRhc2stY2FyZC1kcmFnLXByZXZpZXcnKVxuICAgIHRoaXMuY2xlYXJDYXJkRHJvcE1hcmtlcnMoKVxuICAgIHRoaXMuZ2V0Um9vdEVsKCkucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy1jYXJkLWxpc3QtZHJvcC10YXJnZXQnKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd0YXJlYXMtY2FyZC1saXN0LWRyb3AtdGFyZ2V0JykpXG4gIH1cblxuICBwcml2YXRlIGdldFJvb3RFbCgpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuY29udGFpbmVyRWwuY2hpbGRyZW5bMV1cbiAgICBpZiAoIShyb290IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYXJlYXNWaWV3IHJvb3QgZWxlbWVudCBpcyBub3QgYXZhaWxhYmxlJylcblxuICAgIHJldHVybiByb290XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQge1xuICBDQU5DRUxMRURfU1VCVEFTS1NfRk9MREVSLFxuICBDQU5DRUxMRURfVEFTS1NfRk9MREVSLFxuICBDT01QTEVURURfU1VCVEFTS1NfRk9MREVSLFxuICBDT01QTEVURURfVEFTS1NfRk9MREVSLFxuICBERUZBVUxUX0JPQVJEX05BTUUsXG4gIERFRkFVTFRfRVFVSVBPUyxcbiAgREVGQVVMVF9UQUJMRVJPUyxcbiAgSU5ERVhfVEFHLFxuICBMRUdBQ1lfQ09NUExFVEVEX1RBU0tTX0ZPTERFUixcbiAgTE9DS0VEX0VRVUlQT19OQU1FUyxcbiAgU1VCVEFTS19UQUcsXG4gIFRBUkVBU19GT0xERVIsXG4gIFRBU0tfVEFHLFxuICBWSUVXX1RZUEUsXG59IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHRQb21vZG9yb1N0YXRlIH0gZnJvbSAnLi4vZW5naW5lcy9wb21vZG9yb0VuZ2luZSdcbmltcG9ydCB7IHJlYnVpbGRUYXNrQ2hpbGRMaW5rcywgc3luY1Rhc2tUeXBlVGFncyB9IGZyb20gJy4uL2VuZ2luZXMvZnJvbnRtYXR0ZXJFbmdpbmUnXG5pbXBvcnQgeyBnZXRUYXNrcyB9IGZyb20gJy4uL2VuZ2luZXMvdGFza0VuZ2luZSdcbmltcG9ydCB7XG4gIGVuc3VyZUJvYXJkVGFza0luZGV4RmlsZSxcbiAgcmVtb3ZlVGFza0xpbmtGcm9tQ2FuY2VsbGVkSW5kZXgsXG4gIHJlbW92ZVRhc2tMaW5rRnJvbUZpbmlzaGVkSW5kZXgsXG4gIHJlbW92ZVRhc2tMaW5rRnJvbUluZGV4LFxuICBzeW5jQWxsVGFza0luZGV4ZXMsXG4gIHN5bmNSb290VGFza0luZGV4TGlua3MsXG59IGZyb20gJy4uL2VuZ2luZXMvdGFza0luZGV4RW5naW5lJ1xuaW1wb3J0IHsgTmV3VGFza01vZGFsIH0gZnJvbSAnLi4vbW9kYWxzL05ld1Rhc2tNb2RhbCdcbmltcG9ydCB0eXBlIHsgRXF1aXBvLCBQb21vZG9yb1N0YXRlIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBub3JtYWxpemVFcXVpcG9zRnJvbVNldHRpbmdzLCBub3JtYWxpemVQb21vZG9yb0Zyb21TZXR0aW5ncywgbm9ybWFsaXplVGFibGVyb3NGcm9tU2V0dGluZ3MgfSBmcm9tICcuLi91dGlscy9zZXR0aW5ncydcbmltcG9ydCB7IFRhcmVhc1ZpZXcgfSBmcm9tICcuLi92aWV3L1RhcmVhc1ZpZXcnXG5cbmludGVyZmFjZSBHcmFwaEdyb3VwRGVmaW5pdGlvbiB7XG4gIHF1ZXJ5OiBzdHJpbmdcbiAgY29sb3I6IHN0cmluZ1xufVxuXG5leHBvcnQgY2xhc3MgVGFyZWFzUGx1Z2luIGV4dGVuZHMgb2JzaWRpYW4uUGx1Z2luIHtcbiAgdGFibGVyb3M6IEVxdWlwb1tdID0gWy4uLkRFRkFVTFRfVEFCTEVST1NdXG4gIGVxdWlwb3M6IEVxdWlwb1tdID0gWy4uLkRFRkFVTFRfRVFVSVBPU11cbiAgcG9tb2Rvcm86IFBvbW9kb3JvU3RhdGUgPSBjcmVhdGVEZWZhdWx0UG9tb2Rvcm9TdGF0ZSgpXG5cbiAgYXN5bmMgb25sb2FkKCkge1xuICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKClcbiAgICBhd2FpdCB0aGlzLmVuc3VyZURlZmF1bHRCb2FyZEluU2V0dGluZ3MoKVxuXG4gICAgdGhpcy5yZWdpc3RlclZpZXcoVklFV19UWVBFLCBsZWFmID0+IG5ldyBUYXJlYXNWaWV3KGxlYWYsIHRoaXMpKVxuXG4gICAgdGhpcy5hZGRSaWJib25JY29uKCdsaXN0LWNoZWNrcycsICdBYnJpciBUYXJlYXMnLCAoKSA9PiB0aGlzLmFjdGl2YXRlVmlldygpKVxuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnb3Blbi10YXJlYXMtdmlldycsXG4gICAgICBuYW1lOiAnQWJyaXIgdmlzdGEgZGUgVGFyZWFzJyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLmFjdGl2YXRlVmlldygpLFxuICAgIH0pXG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICduZXctdGFyZWEnLFxuICAgICAgbmFtZTogJ051ZXZhIHRhcmVhJyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiBuZXcgTmV3VGFza01vZGFsKHRoaXMuYXBwLCB0aGlzKS5vcGVuKCksXG4gICAgfSlcblxuICAgIGF3YWl0IHRoaXMuZW5zdXJlVGFza3NGb2xkZXIoKVxuICAgIGF3YWl0IHRoaXMuZW5zdXJlQm9hcmRXb3Jrc3BhY2UoREVGQVVMVF9CT0FSRF9OQU1FKVxuICAgIGF3YWl0IHN5bmNBbGxUYXNrSW5kZXhlcyh0aGlzLmFwcClcbiAgICBhd2FpdCByZWJ1aWxkVGFza0NoaWxkTGlua3ModGhpcy5hcHApXG4gICAgYXdhaXQgc3luY1Rhc2tUeXBlVGFncyh0aGlzLmFwcClcbiAgICBhd2FpdCB0aGlzLmVuc3VyZU9ic2lkaWFuR3JhcGhHcm91cHMoKVxuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLnZhdWx0Lm9uKCdkZWxldGUnLCAoZmlsZSkgPT4ge1xuICAgICAgdm9pZCB0aGlzLmhhbmRsZUZpbGVEZWxldGUoZmlsZSlcbiAgICB9KSlcbiAgfVxuXG4gIGFzeW5jIGFjdGl2YXRlVmlldygpIHtcbiAgICBjb25zdCB7IHdvcmtzcGFjZSB9ID0gdGhpcy5hcHBcbiAgICBsZXQgbGVhZiA9IHdvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFKVswXVxuXG4gICAgaWYgKCFsZWFmKSB7XG4gICAgICBsZWFmID0gd29ya3NwYWNlLmdldExlYWYoJ3RhYicpXG4gICAgICBhd2FpdCBsZWFmLnNldFZpZXdTdGF0ZSh7IHR5cGU6IFZJRVdfVFlQRSwgYWN0aXZlOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgd29ya3NwYWNlLnJldmVhbExlYWYobGVhZilcbiAgfVxuXG4gIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcbiAgICBjb25zdCByYXdEYXRhID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gICAgdGhpcy50YWJsZXJvcyA9IG5vcm1hbGl6ZVRhYmxlcm9zRnJvbVNldHRpbmdzKHJhd0RhdGEpXG4gICAgdGhpcy5lcXVpcG9zID0gbm9ybWFsaXplRXF1aXBvc0Zyb21TZXR0aW5ncyhyYXdEYXRhKVxuICAgIHRoaXMucG9tb2Rvcm8gPSBub3JtYWxpemVQb21vZG9yb0Zyb21TZXR0aW5ncyhyYXdEYXRhKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBlbnN1cmVEZWZhdWx0Qm9hcmRJblNldHRpbmdzKCkge1xuICAgIGNvbnN0IGhhc0RlZmF1bHRCb2FyZCA9IHRoaXMudGFibGVyb3Muc29tZShib2FyZCA9PiBib2FyZC5uYW1lID09PSBERUZBVUxUX0JPQVJEX05BTUUpXG4gICAgaWYgKGhhc0RlZmF1bHRCb2FyZClcbiAgICAgIHJldHVyblxuXG4gICAgdGhpcy50YWJsZXJvcy51bnNoaWZ0KHsgbmFtZTogREVGQVVMVF9CT0FSRF9OQU1FLCBjb2xvcjogJyMyZTZkYjAnIH0pXG4gICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKVxuICB9XG5cbiAgYXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEoe1xuICAgICAgdGFibGVyb3M6IHRoaXMudGFibGVyb3MsXG4gICAgICBlcXVpcG9zOiB0aGlzLmVxdWlwb3MsXG4gICAgICBwb21vZG9ybzogdGhpcy5wb21vZG9ybyxcbiAgICB9KVxuICB9XG5cbiAgc2V0UG9tb2Rvcm9TdGF0ZShuZXh0U3RhdGU6IFBvbW9kb3JvU3RhdGUpIHtcbiAgICB0aGlzLnBvbW9kb3JvID0ge1xuICAgICAgLi4ubmV4dFN0YXRlLFxuICAgICAgZHVyYXRpb25zOiB7IC4uLm5leHRTdGF0ZS5kdXJhdGlvbnMgfSxcbiAgICB9XG4gICAgdm9pZCB0aGlzLnNhdmVTZXR0aW5ncygpXG4gIH1cblxuICBhZGRUYWJsZXJvKG5hbWU6IHN0cmluZywgY29sb3IgPSAnIzZiNWNlNycpIHtcbiAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoIW5vcm1hbGl6ZWROYW1lKVxuICAgICAgcmV0dXJuXG5cbiAgICBpZiAodGhpcy50YWJsZXJvcy5zb21lKHRhYmxlcm8gPT4gdGFibGVyby5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lKSlcbiAgICAgIHJldHVyblxuXG4gICAgdGhpcy50YWJsZXJvcy5wdXNoKHsgbmFtZTogbm9ybWFsaXplZE5hbWUsIGNvbG9yIH0pXG4gICAgdm9pZCB0aGlzLmVuc3VyZUJvYXJkV29ya3NwYWNlKG5vcm1hbGl6ZWROYW1lKVxuICAgIHZvaWQgdGhpcy5zYXZlU2V0dGluZ3MoKVxuICB9XG5cbiAgY2FuUmVtb3ZlVGFibGVybyhib2FyZE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRCb2FyZE5hbWUgPSBib2FyZE5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoIW5vcm1hbGl6ZWRCb2FyZE5hbWUgfHwgbm9ybWFsaXplZEJvYXJkTmFtZSA9PT0gREVGQVVMVF9CT0FSRF9OQU1FKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICByZXR1cm4gdGhpcy50YWJsZXJvcy5zb21lKHRhYmxlcm8gPT4gdGFibGVyby5uYW1lID09PSBub3JtYWxpemVkQm9hcmROYW1lKVxuICB9XG5cbiAgYXN5bmMgcmVtb3ZlVGFibGVybyhib2FyZE5hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRCb2FyZE5hbWUgPSBib2FyZE5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoIXRoaXMuY2FuUmVtb3ZlVGFibGVybyhub3JtYWxpemVkQm9hcmROYW1lKSlcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgY29uc3QgYm9hcmRUYXNrUGF0aHMgPSBuZXcgU2V0KFxuICAgICAgZ2V0VGFza3ModGhpcy5hcHApXG4gICAgICAgIC5maWx0ZXIodGFzayA9PiB0YXNrLnRhYmxlcm8gPT09IG5vcm1hbGl6ZWRCb2FyZE5hbWUpXG4gICAgICAgIC5tYXAodGFzayA9PiB0YXNrLmZpbGUucGF0aCksXG4gICAgKVxuXG4gICAgZm9yIChjb25zdCB0YXNrUGF0aCBvZiBib2FyZFRhc2tQYXRocykge1xuICAgICAgY29uc3QgdGFza0ZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgodGFza1BhdGgpXG4gICAgICBpZiAoISh0YXNrRmlsZSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGaWxlKSlcbiAgICAgICAgY29udGludWVcblxuICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuZGVsZXRlKHRhc2tGaWxlLCB0cnVlKVxuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGVkVGFza1BhdGggPSB0aGlzLnBvbW9kb3JvLnNlbGVjdGVkVGFza1BhdGhcbiAgICBpZiAoc2VsZWN0ZWRUYXNrUGF0aCAmJiBib2FyZFRhc2tQYXRocy5oYXMoc2VsZWN0ZWRUYXNrUGF0aCkpIHtcbiAgICAgIHRoaXMucG9tb2Rvcm8gPSB7XG4gICAgICAgIC4uLnRoaXMucG9tb2Rvcm8sXG4gICAgICAgIGR1cmF0aW9uczogeyAuLi50aGlzLnBvbW9kb3JvLmR1cmF0aW9ucyB9LFxuICAgICAgICBzZWxlY3RlZFRhc2tQYXRoOiBudWxsLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGFibGVyb3MgPSB0aGlzLnRhYmxlcm9zLmZpbHRlcih0YWJsZXJvID0+IHRhYmxlcm8ubmFtZSAhPT0gbm9ybWFsaXplZEJvYXJkTmFtZSlcbiAgICB0aGlzLmVxdWlwb3MgPSB0aGlzLmVxdWlwb3MuZmlsdGVyKGVxdWlwbyA9PiAoZXF1aXBvLnRhYmxlcm8gfHwgREVGQVVMVF9CT0FSRF9OQU1FKSAhPT0gbm9ybWFsaXplZEJvYXJkTmFtZSlcblxuICAgIGF3YWl0IHRoaXMucmVtb3ZlQm9hcmRGb2xkZXJzKG5vcm1hbGl6ZWRCb2FyZE5hbWUpXG4gICAgYXdhaXQgc3luY1Jvb3RUYXNrSW5kZXhMaW5rcyh0aGlzLmFwcClcbiAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGFkZEVxdWlwbyhuYW1lOiBzdHJpbmcsIGNvbG9yID0gJyM2YjVjZTcnKSB7XG4gICAgdGhpcy5hZGRFcXVpcG9JblRhYmxlcm8obmFtZSwgY29sb3IsIHRoaXMudGFibGVyb3NbMF0/Lm5hbWUgfHwgJ2RlZmF1bHQnKVxuICB9XG5cbiAgYWRkRXF1aXBvSW5UYWJsZXJvKG5hbWU6IHN0cmluZywgY29sb3IgPSAnIzZiNWNlNycsIGJvYXJkTmFtZSA9ICdkZWZhdWx0Jykge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gbmFtZS50cmltKClcbiAgICBjb25zdCBub3JtYWxpemVkQm9hcmROYW1lID0gYm9hcmROYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKCFub3JtYWxpemVkTmFtZSlcbiAgICAgIHJldHVyblxuXG4gICAgaWYgKHRoaXMuZXF1aXBvcy5zb21lKGVxdWlwbyA9PiBlcXVpcG8ubmFtZSA9PT0gbm9ybWFsaXplZE5hbWUgJiYgKGVxdWlwby50YWJsZXJvIHx8ICdkZWZhdWx0JykgPT09IG5vcm1hbGl6ZWRCb2FyZE5hbWUpKVxuICAgICAgcmV0dXJuXG5cbiAgICB0aGlzLmVxdWlwb3MucHVzaCh7IG5hbWU6IG5vcm1hbGl6ZWROYW1lLCBjb2xvciwgdGFibGVybzogbm9ybWFsaXplZEJvYXJkTmFtZSB9KVxuICAgIHZvaWQgdGhpcy5zYXZlU2V0dGluZ3MoKVxuICB9XG5cbiAgcmVtb3ZlRXF1aXBvKG5hbWU6IHN0cmluZywgYm9hcmROYW1lID0gJ2RlZmF1bHQnKTogYm9vbGVhbiB7XG4gICAgaWYgKExPQ0tFRF9FUVVJUE9fTkFNRVMuaW5jbHVkZXMobmFtZSkpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIGNvbnN0IG5vcm1hbGl6ZWRCb2FyZE5hbWUgPSBib2FyZE5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBuZXh0RXF1aXBvcyA9IHRoaXMuZXF1aXBvcy5maWx0ZXIoZXF1aXBvID0+ICEoZXF1aXBvLm5hbWUgPT09IG5hbWUgJiYgKGVxdWlwby50YWJsZXJvIHx8ICdkZWZhdWx0JykgPT09IG5vcm1hbGl6ZWRCb2FyZE5hbWUpKVxuICAgIGlmIChuZXh0RXF1aXBvcy5sZW5ndGggPT09IHRoaXMuZXF1aXBvcy5sZW5ndGgpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIHRoaXMuZXF1aXBvcyA9IG5leHRFcXVpcG9zXG4gICAgdm9pZCB0aGlzLnNhdmVTZXR0aW5ncygpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHVwZGF0ZUVxdWlwbyhuYW1lOiBzdHJpbmcsIGJvYXJkTmFtZTogc3RyaW5nLCB1cGRhdGVzOiBQYXJ0aWFsPEVxdWlwbz4pIHtcbiAgICBjb25zdCBub3JtYWxpemVkQm9hcmROYW1lID0gYm9hcmROYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgdGVhbSA9IHRoaXMuZXF1aXBvcy5maW5kKGVxdWlwbyA9PiBlcXVpcG8ubmFtZSA9PT0gbmFtZSAmJiAoZXF1aXBvLnRhYmxlcm8gfHwgJ2RlZmF1bHQnKSA9PT0gbm9ybWFsaXplZEJvYXJkTmFtZSlcbiAgICBpZiAoIXRlYW0pXG4gICAgICByZXR1cm5cblxuICAgIE9iamVjdC5hc3NpZ24odGVhbSwgdXBkYXRlcylcbiAgICB2b2lkIHRoaXMuc2F2ZVNldHRpbmdzKClcbiAgfVxuXG4gIGdldEVxdWlwb3NGb3JUYWJsZXJvKGJvYXJkTmFtZTogc3RyaW5nKTogRXF1aXBvW10ge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRCb2FyZE5hbWUgPSBib2FyZE5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICByZXR1cm4gdGhpcy5lcXVpcG9zLmZpbHRlcihlcXVpcG8gPT4gKGVxdWlwby50YWJsZXJvIHx8ICdkZWZhdWx0JykgPT09IG5vcm1hbGl6ZWRCb2FyZE5hbWUpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGVuc3VyZVRhc2tzRm9sZGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmVuc3VyZUZvbGRlclBhdGgoVEFSRUFTX0ZPTERFUilcbiAgICAgIGF3YWl0IHRoaXMuZW5zdXJlRm9sZGVyUGF0aChDT01QTEVURURfVEFTS1NfRk9MREVSKVxuICAgICAgYXdhaXQgdGhpcy5lbnN1cmVGb2xkZXJQYXRoKENPTVBMRVRFRF9TVUJUQVNLU19GT0xERVIpXG4gICAgICBhd2FpdCB0aGlzLmVuc3VyZUZvbGRlclBhdGgoQ0FOQ0VMTEVEX1RBU0tTX0ZPTERFUilcbiAgICAgIGF3YWl0IHRoaXMuZW5zdXJlRm9sZGVyUGF0aChDQU5DRUxMRURfU1VCVEFTS1NfRk9MREVSKVxuICAgICAgY29uc3QgYm9hcmROYW1lcyA9IG5ldyBTZXQ8c3RyaW5nPihbXG4gICAgICAgIC4uLnRoaXMudGFibGVyb3MubWFwKGJvYXJkID0+IGJvYXJkLm5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCkpLmZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgLi4udGhpcy5nZXRFeGlzdGluZ0JvYXJkRm9sZGVyTmFtZXMoKSxcbiAgICAgIF0pXG4gICAgICBib2FyZE5hbWVzLmFkZChERUZBVUxUX0JPQVJEX05BTUUpXG5cbiAgICAgIGZvciAoY29uc3QgYm9hcmROYW1lIG9mIGJvYXJkTmFtZXMpXG4gICAgICAgIGF3YWl0IHRoaXMuZW5zdXJlQm9hcmRXb3Jrc3BhY2UoYm9hcmROYW1lKVxuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBObyBzZSBwdWRvIGNyZWFyIGxhIGNhcnBldGEgXCIke1RBUkVBU19GT0xERVJ9XCIuYClcbiAgICB9XG4gIH1cblxuICBhc3luYyBlbnN1cmVCb2FyZEZvbGRlcnMoYm9hcmROYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub3JtYWxpemVkID0gYm9hcmROYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKCFub3JtYWxpemVkKVxuICAgICAgcmV0dXJuXG5cbiAgICBhd2FpdCB0aGlzLmVuc3VyZUZvbGRlclBhdGgoYCR7VEFSRUFTX0ZPTERFUn0vJHtub3JtYWxpemVkfWApXG4gICAgYXdhaXQgdGhpcy5lbnN1cmVGb2xkZXJQYXRoKGAke1RBUkVBU19GT0xERVJ9LyR7bm9ybWFsaXplZH0vc3ViVGFza3NgKVxuICB9XG5cbiAgYXN5bmMgZW5zdXJlQm9hcmRXb3Jrc3BhY2UoYm9hcmROYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub3JtYWxpemVkID0gYm9hcmROYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKCFub3JtYWxpemVkKVxuICAgICAgcmV0dXJuXG5cbiAgICBhd2FpdCB0aGlzLmVuc3VyZUJvYXJkRm9sZGVycyhub3JtYWxpemVkKVxuICAgIGF3YWl0IGVuc3VyZUJvYXJkVGFza0luZGV4RmlsZSh0aGlzLmFwcCwgbm9ybWFsaXplZClcbiAgICBhd2FpdCBzeW5jUm9vdFRhc2tJbmRleExpbmtzKHRoaXMuYXBwKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZW1vdmVCb2FyZEZvbGRlcnMoYm9hcmROYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBib2FyZFJvb3RQYXRoID0gYCR7VEFSRUFTX0ZPTERFUn0vJHtib2FyZE5hbWV9YFxuICAgIGNvbnN0IGJvYXJkU3VidGFza3NQYXRoID0gYCR7Ym9hcmRSb290UGF0aH0vc3ViVGFza3NgXG4gICAgYXdhaXQgdGhpcy5kZWxldGVGb2xkZXJJZkV4aXN0cyhib2FyZFN1YnRhc2tzUGF0aClcbiAgICBhd2FpdCB0aGlzLmRlbGV0ZUZvbGRlcklmRXhpc3RzKGJvYXJkUm9vdFBhdGgpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGRlbGV0ZUZvbGRlcklmRXhpc3RzKHBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IGFic3RyYWN0RmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKVxuICAgIGlmICghKGFic3RyYWN0RmlsZSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGb2xkZXIpKVxuICAgICAgcmV0dXJuXG5cbiAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5kZWxldGUoYWJzdHJhY3RGaWxlLCB0cnVlKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBlbnN1cmVGb2xkZXJQYXRoKHBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IHNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLycpLmZpbHRlcihCb29sZWFuKVxuICAgIGxldCBjdXJyZW50UGF0aCA9ICcnXG5cbiAgICBmb3IgKGNvbnN0IHNlZ21lbnQgb2Ygc2VnbWVudHMpIHtcbiAgICAgIGN1cnJlbnRQYXRoID0gY3VycmVudFBhdGggPyBgJHtjdXJyZW50UGF0aH0vJHtzZWdtZW50fWAgOiBzZWdtZW50XG4gICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChjdXJyZW50UGF0aClcblxuICAgICAgaWYgKGV4aXN0aW5nIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZvbGRlcilcbiAgICAgICAgY29udGludWVcblxuICAgICAgaWYgKGV4aXN0aW5nKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4aXN0ZSB1biBhcmNoaXZvIGxsYW1hZG8gXCIke2N1cnJlbnRQYXRofVwiLmApXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihjdXJyZW50UGF0aClcbiAgICAgIH1cbiAgICAgIGNhdGNoIHtcbiAgICAgICAgY29uc3QgcmV0cnkgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoY3VycmVudFBhdGgpXG4gICAgICAgIGlmIChyZXRyeSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGb2xkZXIpXG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHNlIHB1ZG8gY3JlYXIgbGEgY2FycGV0YSBcIiR7Y3VycmVudFBhdGh9XCIuYClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEV4aXN0aW5nQm9hcmRGb2xkZXJOYW1lcygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3Qgcm9vdEZvbGRlciA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChUQVJFQVNfRk9MREVSKVxuICAgIGlmICghKHJvb3RGb2xkZXIgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKSlcbiAgICAgIHJldHVybiBbXVxuXG4gICAgY29uc3QgZXhjbHVkZWRGb2xkZXJzID0gbmV3IFNldChbXG4gICAgICBDT01QTEVURURfVEFTS1NfRk9MREVSLnNwbGl0KCcvJykucG9wKCkgPz8gJycsXG4gICAgICBDQU5DRUxMRURfVEFTS1NfRk9MREVSLnNwbGl0KCcvJykucG9wKCkgPz8gJycsXG4gICAgICBMRUdBQ1lfQ09NUExFVEVEX1RBU0tTX0ZPTERFUi5zcGxpdCgnLycpLnBvcCgpID8/ICcnLFxuICAgIF0pXG5cbiAgICByZXR1cm4gcm9vdEZvbGRlci5jaGlsZHJlblxuICAgICAgLmZpbHRlcigoY2hpbGQpOiBjaGlsZCBpcyBvYnNpZGlhbi5URm9sZGVyID0+IGNoaWxkIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZvbGRlcilcbiAgICAgIC5tYXAoZm9sZGVyID0+IGZvbGRlci5uYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgLmZpbHRlcihuYW1lID0+IEJvb2xlYW4obmFtZSkgJiYgIWV4Y2x1ZGVkRm9sZGVycy5oYXMobmFtZSkpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZUZpbGVEZWxldGUoZmlsZTogb2JzaWRpYW4uVEFic3RyYWN0RmlsZSkge1xuICAgIGlmICghKGZpbGUgaW5zdGFuY2VvZiBvYnNpZGlhbi5URmlsZSkpXG4gICAgICByZXR1cm5cblxuICAgIGlmIChmaWxlLmV4dGVuc2lvbiAhPT0gJ21kJylcbiAgICAgIHJldHVyblxuXG4gICAgaWYgKCFmaWxlLnBhdGguc3RhcnRzV2l0aChgJHtUQVJFQVNfRk9MREVSfS9gKSlcbiAgICAgIHJldHVyblxuXG4gICAgYXdhaXQgcmVtb3ZlVGFza0xpbmtGcm9tSW5kZXgodGhpcy5hcHAsIGZpbGUpXG4gICAgYXdhaXQgcmVtb3ZlVGFza0xpbmtGcm9tRmluaXNoZWRJbmRleCh0aGlzLmFwcCwgZmlsZSlcbiAgICBhd2FpdCByZW1vdmVUYXNrTGlua0Zyb21DYW5jZWxsZWRJbmRleCh0aGlzLmFwcCwgZmlsZSlcbiAgICBhd2FpdCByZWJ1aWxkVGFza0NoaWxkTGlua3ModGhpcy5hcHApXG4gICAgYXdhaXQgc3luY1Rhc2tUeXBlVGFncyh0aGlzLmFwcClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZW5zdXJlT2JzaWRpYW5HcmFwaEdyb3VwcygpIHtcbiAgICBjb25zdCBkZXNpcmVkR3JvdXBzOiBHcmFwaEdyb3VwRGVmaW5pdGlvbltdID0gW1xuICAgICAgeyBxdWVyeTogYHRhZzojJHtJTkRFWF9UQUd9YCwgY29sb3I6ICcjN2M1Y2U3JyB9LFxuICAgICAgeyBxdWVyeTogYHRhZzojJHtUQVNLX1RBR31gLCBjb2xvcjogJyMyZTZkYjAnIH0sXG4gICAgICB7IHF1ZXJ5OiBgdGFnOiMke1NVQlRBU0tfVEFHfWAsIGNvbG9yOiAnIzAwYjg5NCcgfSxcbiAgICBdXG5cbiAgICBhd2FpdCB0aGlzLmVuc3VyZUdyYXBoQ29uZmlnR3JvdXBzKGRlc2lyZWRHcm91cHMpXG4gICAgdGhpcy5lbnN1cmVSdW50aW1lR3JhcGhHcm91cHMoZGVzaXJlZEdyb3VwcylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZW5zdXJlR3JhcGhDb25maWdHcm91cHMoZGVzaXJlZEdyb3VwczogR3JhcGhHcm91cERlZmluaXRpb25bXSkge1xuICAgIGNvbnN0IGFkYXB0ZXIgPSB0aGlzLmFwcC52YXVsdC5hZGFwdGVyXG4gICAgY29uc3QgY29uZmlnRGlyID0gdGhpcy5hcHAudmF1bHQuY29uZmlnRGlyXG4gICAgY29uc3QgZ3JhcGhDb25maWdQYXRoID0gYCR7Y29uZmlnRGlyfS9ncmFwaC5qc29uYFxuXG4gICAgbGV0IGdyYXBoQ29uZmlnOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9XG4gICAgdHJ5IHtcbiAgICAgIGlmIChhd2FpdCBhZGFwdGVyLmV4aXN0cyhncmFwaENvbmZpZ1BhdGgpKSB7XG4gICAgICAgIGNvbnN0IHJhd0NvbmZpZyA9IGF3YWl0IGFkYXB0ZXIucmVhZChncmFwaENvbmZpZ1BhdGgpXG4gICAgICAgIGdyYXBoQ29uZmlnID0gcmF3Q29uZmlnLnRyaW0oKSA/IEpTT04ucGFyc2UocmF3Q29uZmlnKSA6IHt9XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgIGdyYXBoQ29uZmlnID0ge31cbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50R3JvdXBzID0gQXJyYXkuaXNBcnJheShncmFwaENvbmZpZy5ncm91cHMpID8gZ3JhcGhDb25maWcuZ3JvdXBzIDogW11cbiAgICBncmFwaENvbmZpZy5ncm91cHMgPSB0aGlzLm1lcmdlR3JhcGhHcm91cHMoY3VycmVudEdyb3VwcywgZGVzaXJlZEdyb3VwcylcblxuICAgIGF3YWl0IGFkYXB0ZXIud3JpdGUoZ3JhcGhDb25maWdQYXRoLCBKU09OLnN0cmluZ2lmeShncmFwaENvbmZpZywgbnVsbCwgMikpXG4gIH1cblxuICBwcml2YXRlIGVuc3VyZVJ1bnRpbWVHcmFwaEdyb3VwcyhkZXNpcmVkR3JvdXBzOiBHcmFwaEdyb3VwRGVmaW5pdGlvbltdKSB7XG4gICAgY29uc3QgYXBwV2l0aEludGVybmFscyA9IHRoaXMuYXBwIGFzIHVua25vd24gYXMge1xuICAgICAgaW50ZXJuYWxQbHVnaW5zPzoge1xuICAgICAgICBwbHVnaW5zPzogUmVjb3JkPHN0cmluZywge1xuICAgICAgICAgIGluc3RhbmNlPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgICAgfT5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBncmFwaEluc3RhbmNlID0gYXBwV2l0aEludGVybmFscy5pbnRlcm5hbFBsdWdpbnM/LnBsdWdpbnM/LmdyYXBoPy5pbnN0YW5jZVxuICAgIGlmICghZ3JhcGhJbnN0YW5jZSlcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgY2FuZGlkYXRlSG9sZGVycyA9IFtcbiAgICAgIGdyYXBoSW5zdGFuY2Uub3B0aW9ucyxcbiAgICAgIGdyYXBoSW5zdGFuY2UubG9jYWxHcmFwaE9wdGlvbnMsXG4gICAgICBncmFwaEluc3RhbmNlLmdsb2JhbEdyYXBoT3B0aW9ucyxcbiAgICBdIGFzIEFycmF5PFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkPlxuXG4gICAgZm9yIChjb25zdCBob2xkZXIgb2YgY2FuZGlkYXRlSG9sZGVycykge1xuICAgICAgaWYgKCFob2xkZXIgfHwgIUFycmF5LmlzQXJyYXkoaG9sZGVyLmdyb3VwcykpXG4gICAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGhvbGRlci5ncm91cHMgPSB0aGlzLm1lcmdlR3JhcGhHcm91cHMoaG9sZGVyLmdyb3VwcywgZGVzaXJlZEdyb3VwcylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1lcmdlR3JhcGhHcm91cHMoXG4gICAgY3VycmVudEdyb3VwczogdW5rbm93bltdLFxuICAgIGRlc2lyZWRHcm91cHM6IEdyYXBoR3JvdXBEZWZpbml0aW9uW10sXG4gICk6IEFycmF5PFJlY29yZDxzdHJpbmcsIHVua25vd24+PiB7XG4gICAgY29uc3Qgbm9ybWFsaXplZEN1cnJlbnQgPSBjdXJyZW50R3JvdXBzXG4gICAgICAuZmlsdGVyKChncm91cCk6IGdyb3VwIGlzIFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0+IEJvb2xlYW4oZ3JvdXApICYmIHR5cGVvZiBncm91cCA9PT0gJ29iamVjdCcpXG4gICAgICAuZmlsdGVyKGdyb3VwID0+IHR5cGVvZiBncm91cC5xdWVyeSA9PT0gJ3N0cmluZycpXG5cbiAgICBjb25zdCBieVF1ZXJ5ID0gbmV3IE1hcDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHVua25vd24+PigpXG4gICAgZm9yIChjb25zdCBncm91cCBvZiBub3JtYWxpemVkQ3VycmVudClcbiAgICAgIGJ5UXVlcnkuc2V0KGdyb3VwLnF1ZXJ5IGFzIHN0cmluZywgeyAuLi5ncm91cCB9KVxuXG4gICAgZm9yIChjb25zdCBncm91cCBvZiBkZXNpcmVkR3JvdXBzKSB7XG4gICAgICBjb25zdCBleGlzdGluZyA9IGJ5UXVlcnkuZ2V0KGdyb3VwLnF1ZXJ5KVxuICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgIGlmICghZXhpc3RpbmcuY29sb3IpXG4gICAgICAgICAgZXhpc3RpbmcuY29sb3IgPSBncm91cC5jb2xvclxuICAgICAgICBieVF1ZXJ5LnNldChncm91cC5xdWVyeSwgZXhpc3RpbmcpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGJ5UXVlcnkuc2V0KGdyb3VwLnF1ZXJ5LCB7IHF1ZXJ5OiBncm91cC5xdWVyeSwgY29sb3I6IGdyb3VwLmNvbG9yIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIEFycmF5LmZyb20oYnlRdWVyeS52YWx1ZXMoKSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgVGFyZWFzUGx1Z2luIH0gZnJvbSAnLi90YXNrTWFubmFnZXIvcGx1Z2luL1RhcmVhc1BsdWdpbidcblxuZXhwb3J0IHsgVGFyZWFzUGx1Z2luIH1cbmV4cG9ydCBkZWZhdWx0IFRhcmVhc1BsdWdpblxuIiwiaW1wb3J0IHsgZ2V0RGVmYXVsdEV4cG9ydEZyb21DanMgfSBmcm9tIFwiXHUwMDAwY29tbW9uanNIZWxwZXJzLmpzXCI7XG5pbXBvcnQgeyBfX3JlcXVpcmUgYXMgcmVxdWlyZVRhc2tNYW5uYWdlciB9IGZyb20gXCIvaG9tZS9nYWJyaWVsL0Rlc2t0b3AvcmVwb3MvdGFzay1tYW5uYWdlci9zcmMvdGFza01hbm5hZ2VyLnRzXCI7XG52YXIgdGFza01hbm5hZ2VyRXhwb3J0cyA9IHJlcXVpcmVUYXNrTWFubmFnZXIoKTtcbmV4cG9ydCB7IHRhc2tNYW5uYWdlckV4cG9ydHMgYXMgX19tb2R1bGVFeHBvcnRzIH07XG5leHBvcnQgZGVmYXVsdCAvKkBfX1BVUkVfXyovZ2V0RGVmYXVsdEV4cG9ydEZyb21DanModGFza01hbm5hZ2VyRXhwb3J0cyk7Il0sIm5hbWVzIjpbInJlcXVpcmUkJDAiLCJyZXF1aXJlJCQxIiwibmV4dER1cmF0aW9uIiwicmVxdWlyZSQkMiIsInJlcXVpcmUkJDMiLCJyZXF1aXJlJCQ0IiwicmVxdWlyZSQkNSIsInJlcXVpcmUkJDYiLCJub3JtYWxpemVkIiwicmVxdWlyZSQkNyIsInJlcXVpcmUkJDgiLCJyZXF1aXJlJCQ5IiwicmVxdWlyZSQkMTAiLCJyZXF1aXJlJCQxMSIsInJlcXVpcmUkJDEyIiwicmVxdWlyZSQkMTMiLCJyZXF1aXJlJCQxNCIsInJlcXVpcmUkJDE1IiwicmVxdWlyZSQkMTYiLCJyZXF1aXJlJCQxNyIsInJlcXVpcmUkJDE4IiwicmVxdWlyZSQkMTkiLCJ0YXNrTWFubmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQSxJQUFBLGlCQUFBLEdBQUEsRUFBQTtDQUFBLFFBQUEsQ0FBQSxpQkFBQSxFQUFBO0dBQUEseUJBQUEsRUFBQSxNQUFBLHlCQUFBO0dBQUEsc0JBQUEsRUFBQSxNQUFBLHNCQUFBO0dBQUEsNkJBQUEsRUFBQSxNQUFBLDZCQUFBO0dBQUEseUJBQUEsRUFBQSxNQUFBLHlCQUFBO0dBQUEsc0JBQUEsRUFBQSxNQUFBLHNCQUFBO0dBQUEsa0JBQUEsRUFBQSxNQUFBLGtCQUFBO0dBQUEsZUFBQSxFQUFBLE1BQUEsZUFBQTtHQUFBLG1DQUFBLEVBQUEsTUFBQSxtQ0FBQTtHQUFBLG9D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
