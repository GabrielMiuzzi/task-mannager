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
	  deletePomodoroLogEntry: () => deletePomodoroLogEntry,
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
	  "| fecha | horario | tipo de pomodoro | duracion elegida | tarea | tiempo | desvio | finalizacion |",
	  "| --- | --- | --- | --- | --- | --- | --- | --- |"
	].join("\n");
	async function appendPomodoroLogEntry(app, input) {
	  await ensurePomodoroLogFile(app);
	  const date = new Date(input.timestampMs);
	  const dateText = toLocalDateText(date);
	  const timeText = toLocalTimeText(date);
	  const typeText = sanitizePipeText(input.type);
	  const durationChoiceText = sanitizePipeText(input.durationChoice);
	  const taskText = sanitizePipeText(input.task);
	  const durationMinutesText = formatMinutes(input.durationMinutes);
	  const deviationText = formatHours(input.deviationHours);
	  const finalizedText = input.finalized ? "true" : "false";
	  const row = `| ${dateText} | ${timeText} | ${typeText} | ${durationChoiceText} | ${taskText} | ${durationMinutesText} | ${deviationText} | ${finalizedText} |`;
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
	  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
	    const line = lines[lineIndex];
	    if (!line.trim().startsWith("|"))
	      continue;
	    if (line.includes("fecha | horario | tipo de pomodoro"))
	      continue;
	    if (line.includes("| --- |"))
	      continue;
	    const columns = line.split("|").map((item) => item.trim()).filter(Boolean);
	    if (columns.length < 5)
	      continue;
	    const hasDurationColumns = columns.length >= 7;
	    const hasFinalizedColumn = columns.length >= 8;
	    const durationChoice = hasDurationColumns ? columns[3] : "-";
	    const task = hasDurationColumns ? columns[4] : columns[3];
	    const durationMinutes = hasDurationColumns ? Number.parseFloat(columns[5]) : 0;
	    const deviationHours = Number.parseFloat(hasDurationColumns ? columns[6] : columns[4]);
	    const finalizedValue = hasFinalizedColumn ? columns[7] : "true";
	    entries.push({
	      id: String(lineIndex),
	      date: columns[0],
	      time: columns[1],
	      type: columns[2],
	      durationChoice,
	      task,
	      durationMinutes: Number.isNaN(durationMinutes) ? 0 : durationMinutes,
	      deviationHours: Number.isNaN(deviationHours) ? 0 : deviationHours,
	      finalized: finalizedValue.toLowerCase() !== "false"
	    });
	  }
	  return entries;
	}
	async function deletePomodoroLogEntry(app, entryId) {
	  await ensurePomodoroLogFile(app);
	  const file = app.vault.getAbstractFileByPath(POMODORO_LOG_PATH);
	  if (!(file instanceof import_obsidian.TFile))
	    return false;
	  const content = await app.vault.cachedRead(file);
	  const lines = content.split(/\r?\n/);
	  const targetIndex = Number.parseInt(entryId, 10);
	  if (Number.isNaN(targetIndex) || targetIndex < 0 || targetIndex >= lines.length)
	    return false;
	  const targetLine = lines[targetIndex] || "";
	  if (!targetLine.trim().startsWith("|"))
	    return false;
	  if (targetLine.includes("fecha | horario | tipo de pomodoro") || targetLine.includes("| --- |"))
	    return false;
	  lines.splice(targetIndex, 1);
	  const nextContent = `${lines.join("\n").trimEnd()}
`;
	  await app.vault.modify(file, nextContent);
	  return true;
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
	function formatMinutes(minutes) {
	  return (Math.round(minutes * 100) / 100).toFixed(2);
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

var EditBoardModal_1;
var hasRequiredEditBoardModal;

function requireEditBoardModal () {
	if (hasRequiredEditBoardModal) return EditBoardModal_1;
	hasRequiredEditBoardModal = 1;
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
	var EditBoardModal_exports = {};
	__export(EditBoardModal_exports, {
	  EditBoardModal: () => EditBoardModal
	});
	EditBoardModal_1 = __toCommonJS(EditBoardModal_exports);
	var obsidian = __toESM(require$$0);
	var import_constants = requireConstants();
	var import_colorPicker = requireColorPicker();
	class EditBoardModal extends obsidian.Modal {
	  plugin;
	  view;
	  boardName;
	  data;
	  constructor(app, plugin, view, board) {
	    super(app);
	    this.plugin = plugin;
	    this.view = view;
	    this.boardName = board.name;
	    this.data = { name: board.name, color: board.color };
	  }
	  onOpen() {
	    const { contentEl } = this;
	    const isDefaultBoard = this.boardName === import_constants.DEFAULT_BOARD_NAME;
	    contentEl.addClass("tareas-modal");
	    contentEl.createEl("h2", { text: "Editar tablero" });
	    new obsidian.Setting(contentEl).setName("Nombre del tablero").addText((text) => {
	      text.setValue(this.data.name);
	      text.onChange((value) => this.data.name = value);
	      text.setDisabled(isDefaultBoard);
	      setTimeout(() => text.inputEl.focus(), 50);
	    });
	    if (isDefaultBoard) {
	      const note = contentEl.createEl("p");
	      note.addClass("setting-item-description");
	      note.setText('El tablero "default" no puede editarse.');
	    }
	    const colorSetting = new obsidian.Setting(contentEl).setName("Color");
	    (0, import_colorPicker.createColorPicker)(colorSetting.controlEl, import_constants.PRESET_COLORS, this.data.color, (nextColor) => {
	      this.data.color = nextColor;
	    });
	    const footer = contentEl.createDiv({ cls: "tareas-modal-footer" });
	    const cancelButton = footer.createEl("button", { text: "Cancelar" });
	    cancelButton.onclick = () => this.close();
	    const saveButton = footer.createEl("button", { text: "Guardar", cls: "mod-cta" });
	    saveButton.onclick = () => void this.save();
	  }
	  onClose() {
	    this.contentEl.empty();
	  }
	  async save() {
	    const nextName = this.data.name.trim().toLowerCase();
	    if (!nextName) {
	      new obsidian.Notice("El nombre es requerido");
	      return;
	    }
	    const result = await this.plugin.editTablero(this.boardName, {
	      name: nextName,
	      color: this.data.color
	    });
	    if (!result.ok) {
	      const messageByError = {
	        "invalid-name": "El nombre del tablero no es v\xE1lido.",
	        "board-not-found": "No se encontr\xF3 el tablero a editar.",
	        "default-board-locked": 'El tablero "default" no puede editarse.',
	        "board-already-exists": `Ya existe un tablero llamado "${nextName}".`,
	        "board-folder-conflict": `No se pudo renombrar el tablero porque ya existe la carpeta "${nextName}".`
	      };
	      new obsidian.Notice(messageByError[result.error || ""] || "No se pudo editar el tablero.");
	      return;
	    }
	    this.view.setActiveTab(result.boardName);
	    this.view.render();
	    new obsidian.Notice(`Tablero "${this.boardName}" actualizado.`);
	    this.close();
	  }
	}
	return EditBoardModal_1;
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
	var import_EditBoardModal = requireEditBoardModal();
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
	  static POMODORO_BREAK_MESSAGES = [
	    "Respir\xE1 un toque, ven\xEDs bien.",
	    "Solt\xE1 los hombros un segundo.",
	    "Hidratate, campe\xF3n.",
	    "Micro descanso para volver m\xE1s fuerte.",
	    "Buen ritmo!.",
	    "Estir\xE1 el cuello dos segundos.",
	    "Aprovech\xE1 este mini reset mental.",
	    "Par\xE1 un segundo: tu cerebro lo agradece.",
	    "Pasito atr\xE1s y volv\xE9s con foco.",
	    "Mirada lejos de la pantalla.",
	    "Afloj\xE1 la mand\xEDbula.",
	    "Respir\xE1 profundo, crack.",
	    "Sacate tensi\xF3n del cuello.",
	    "Desenchuf\xE1 20 segundos.",
	    "Te est\xE1s volviendo una m\xE1quina de constancia."
	  ];
	  plugin;
	  expandedGroups;
	  expandedTasks;
	  expandedCardSubtasks;
	  debouncedRender;
	  dragPath = null;
	  dragDepth = null;
	  dragParent = null;
	  dragInsertPosition = null;
	  dragGroupName = null;
	  dragGroupColumn = null;
	  droppedTaskAnimationPath = null;
	  lastRenderedTab = null;
	  activeTab;
	  pomodoroPanelEl = null;
	  pomodoroTimeEl = null;
	  pomodoroProgressEl = null;
	  pomodoroPhaseEl = null;
	  pomodoroCycleEl = null;
	  pomodoroStateEl = null;
	  pomodoroBreakMessageEl = null;
	  pomodoroRunGlyphEl = null;
	  pomodoroLastVisualState = null;
	  pomodoroLastBreathSoundSecond = null;
	  pomodoroLastBreathSoundKey = null;
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
	    this.pomodoroCycleEl = top.createEl("span", { cls: "tareas-pomodoro-cycles-badge" });
	    const timerWrap = panel.createDiv({ cls: "tareas-pomodoro-timer-wrap" });
	    this.pomodoroProgressEl = timerWrap.createDiv({ cls: "tareas-pomodoro-progress" });
	    const timerInner = this.pomodoroProgressEl.createDiv({ cls: "tareas-pomodoro-progress-inner" });
	    this.pomodoroTimeEl = timerInner.createEl("div", { cls: "tareas-pomodoro-time" });
	    this.pomodoroRunGlyphEl = timerInner.createEl("div", { cls: "tareas-pomodoro-run-glyph" });
	    this.pomodoroBreakMessageEl = panel.createEl("p", { cls: "tareas-pomodoro-break-message" });
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
	    resetButton.onclick = () => {
	      void this.handlePomodoroReset();
	    };
	    const deviationButton = iconControls.createEl("button", {
	      text: state.isDeviationActive ? "\u{1F4F5}" : "\u{1F4DE}",
	      cls: `tareas-pomodoro-btn tareas-pomodoro-btn-icon${state.isDeviationActive ? " is-deviation-active" : ""}`
	    });
	    deviationButton.setAttr("aria-label", "Desv\xEDo");
	    deviationButton.setAttr("title", state.isDeviationActive ? "Finalizar desv\xEDo" : "Iniciar desv\xEDo (llamadas/reuniones)");
	    const canToggleDeviation = state.isDeviationActive || state.runState === "running";
	    deviationButton.disabled = !canToggleDeviation;
	    deviationButton.onclick = () => this.handlePomodoroDeviationToggle();
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
	  async handlePomodoroReset() {
	    this.unlockPomodoroAudio();
	    const now = Date.now();
	    const current = this.getPomodoroRuntimeState(false);
	    await this.logPomodoroResetEntry(current, now);
	    const next = (0, import_pomodoroEngine.resetPomodoro)(current);
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
	        this.playPomodoroAlarmShort();
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
	    if (!this.pomodoroTimeEl || !this.pomodoroPhaseEl || !this.pomodoroCycleEl || !this.pomodoroStateEl || !this.pomodoroRunGlyphEl)
	      return;
	    const remaining = (0, import_pomodoroEngine.getPomodoroRemainingSeconds)(state, nowMs);
	    const deviationElapsed = (0, import_pomodoroEngine.getDeviationElapsedSeconds)(state, nowMs);
	    const displayedSeconds = state.isDeviationActive ? deviationElapsed : remaining;
	    this.handlePomodoroCountdownBreathAudio(state, remaining);
	    this.pomodoroTimeEl.setText((0, import_pomodoroEngine.formatPomodoroCountdown)(displayedSeconds));
	    this.pomodoroTimeEl.toggleClass("is-deviation", state.isDeviationActive);
	    if (this.pomodoroProgressEl) {
	      const totalSeconds = Math.max(1, state.isDeviationActive ? Math.max(1, state.deviationBaseRemainingSeconds) : (0, import_pomodoroEngine.getPhaseDurationSeconds)(state.durations, state.phase));
	      const elapsed = state.isDeviationActive ? deviationElapsed : Math.max(0, totalSeconds - remaining);
	      const progressPercent = Math.min(100, elapsed / totalSeconds * 100);
	      this.pomodoroProgressEl.style.setProperty("--tareas-pomodoro-progress", `${progressPercent}%`);
	      this.pomodoroProgressEl.setAttr("data-mode", this.resolvePomodoroVisualMode(state));
	      this.pomodoroProgressEl.setAttr("data-run-state", state.runState);
	      this.pomodoroProgressEl.setAttr("data-pulse", String(this.shouldPulsePomodoroRing(state, remaining)));
	      const glowState = this.resolvePomodoroGlowState(state);
	      this.pomodoroProgressEl.setAttr("data-glow", glowState);
	    }
	    this.pomodoroPhaseEl.setText((0, import_pomodoroEngine.getPomodoroPhaseLabel)(state.phase));
	    const completedInCycle = state.completedWorkCycles % import_constants.POMODORO_WORK_CYCLES_BEFORE_LONG_BREAK;
	    const cycleValue = completedInCycle === 0 && state.completedWorkCycles > 0 ? import_constants.POMODORO_WORK_CYCLES_BEFORE_LONG_BREAK : completedInCycle;
	    this.pomodoroCycleEl.setText(`${cycleValue} / ${import_constants.POMODORO_WORK_CYCLES_BEFORE_LONG_BREAK}`);
	    const runStateLabel = this.resolvePomodoroRunStateLabel(state);
	    this.pomodoroStateEl.setText(runStateLabel);
	    this.pomodoroStateEl.setAttr("data-state", state.isDeviationActive ? "deviation" : state.runState);
	    const runGlyph = state.runState === "running" ? "" : state.runState === "paused" ? "\u23F8" : "\u25FC";
	    this.pomodoroRunGlyphEl.setText(runGlyph);
	    this.pomodoroRunGlyphEl.toggleClass("is-visible", Boolean(runGlyph));
	    if (this.pomodoroBreakMessageEl) {
	      const breakMessage = this.resolvePomodoroBreakMessage(state);
	      this.pomodoroBreakMessageEl.setText(breakMessage);
	      this.pomodoroBreakMessageEl.toggleClass("is-visible", Boolean(breakMessage));
	    }
	    this.applyPomodoroTransitionEffects(state);
	    this.pomodoroLastVisualState = {
	      phase: state.phase,
	      runState: state.runState,
	      isDeviationActive: state.isDeviationActive
	    };
	  }
	  shouldPulsePomodoroRing(state, remainingSeconds) {
	    if (state.runState !== "running" || state.isDeviationActive)
	      return false;
	    return remainingSeconds > 0 && remainingSeconds <= 10;
	  }
	  handlePomodoroCountdownBreathAudio(state, remainingSeconds) {
	    const phaseKey = `${state.phase}:${state.runState}:${state.isDeviationActive ? "deviation" : "normal"}`;
	    if (this.pomodoroLastBreathSoundKey !== phaseKey) {
	      this.pomodoroLastBreathSoundKey = phaseKey;
	      this.pomodoroLastBreathSoundSecond = null;
	    }
	    const shouldPlayBreath = state.runState === "running" && !state.isDeviationActive && remainingSeconds > 0 && remainingSeconds <= 4;
	    if (!shouldPlayBreath)
	      return;
	    if (this.pomodoroLastBreathSoundSecond === remainingSeconds)
	      return;
	    this.pomodoroLastBreathSoundSecond = remainingSeconds;
	    this.playPomodoroBreathTick();
	  }
	  resolvePomodoroVisualMode(state) {
	    if (state.isDeviationActive)
	      return "deviation";
	    if (state.runState === "idle")
	      return "prepared";
	    if (state.runState === "paused") {
	      if (state.phase === "short-break")
	        return "paused-short-break";
	      if (state.phase === "long-break")
	        return "paused-long-break";
	      return "paused-work";
	    }
	    if (state.phase === "short-break")
	      return "short-break";
	    if (state.phase === "long-break")
	      return "long-break";
	    return "work";
	  }
	  resolvePomodoroGlowState(state) {
	    if (state.isDeviationActive)
	      return state.runState === "running" ? "deviation" : "paused";
	    if (state.runState === "idle")
	      return "prepared";
	    if (state.runState === "paused")
	      return "paused";
	    if (state.phase === "short-break")
	      return "short-break";
	    if (state.phase === "long-break")
	      return "long-break";
	    return "work";
	  }
	  resolvePomodoroRunStateLabel(state) {
	    if (state.runState === "idle")
	      return "Preparado";
	    if (state.runState === "paused")
	      return "Pausado...";
	    if (state.isDeviationActive)
	      return "Desv\xEDo activo...";
	    if (state.phase === "work")
	      return "Trabajando...";
	    if (state.phase === "short-break")
	      return "Descanso corto...";
	    if (state.phase === "long-break")
	      return "Descanso largo...";
	    return "Listo";
	  }
	  resolvePomodoroBreakMessage(state) {
	    const isBreak = state.phase === "short-break" || state.phase === "long-break";
	    if (!isBreak)
	      return "";
	    const messageIndexSeed = state.completedWorkCycles + (state.phase === "long-break" ? 7 : 3);
	    const messageIndex = messageIndexSeed % TareasView.POMODORO_BREAK_MESSAGES.length;
	    return TareasView.POMODORO_BREAK_MESSAGES[messageIndex] || "";
	  }
	  applyPomodoroTransitionEffects(state) {
	    const previous = this.pomodoroLastVisualState;
	    if (!previous)
	      return;
	    const phaseChanged = previous.phase !== state.phase || previous.isDeviationActive !== state.isDeviationActive;
	    const runStateChanged = previous.runState !== state.runState;
	    if (phaseChanged)
	      this.triggerPomodoroVisualPulse("is-phase-shift");
	    if (runStateChanged)
	      this.triggerPomodoroVisualPulse("is-runstate-shift");
	    if (phaseChanged && this.pomodoroTimeEl)
	      this.triggerPomodoroVisualPulse("is-phase-shift-time", this.pomodoroTimeEl);
	  }
	  triggerPomodoroVisualPulse(className, target) {
	    const node = target || this.pomodoroProgressEl;
	    if (!node)
	      return;
	    node.removeClass(className);
	    void node.offsetWidth;
	    node.addClass(className);
	    window.setTimeout(() => {
	      node.removeClass(className);
	    }, 520);
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
	    this.playPomodoroAlarmShort();
	    void this.addPomodoroWorkTimeToSelectedTask(completedPhases, nextState);
	    void this.logPomodoroEntries(completedPhases, nextState, Date.now());
	  }
	  async logPomodoroEntries(completedPhases, state, nowMs) {
	    if (completedPhases.length === 0)
	      return;
	    const selectedTask = state.selectedTaskPath ? (0, import_taskEngine.getTasks)(this.app).find((item) => item.file.path === state.selectedTaskPath) : null;
	    const taskName = selectedTask?.tarea || "Sin tarea vinculada";
	    const durationChoice = this.resolvePomodoroDurationChoice(state.durations);
	    const totalDeviationHours = this.roundToTwo(state.phaseDeviationSeconds / 3600);
	    for (let index = 0; index < completedPhases.length; index++) {
	      const phase = completedPhases[index];
	      const deviationHours = index === completedPhases.length - 1 ? totalDeviationHours : 0;
	      const durationMinutes = (0, import_pomodoroEngine.getPhaseDurationSeconds)(state.durations, phase) / 60;
	      await (0, import_pomodoroLogEngine.appendPomodoroLogEntry)(this.app, {
	        timestampMs: nowMs,
	        type: (0, import_pomodoroEngine.getPomodoroPhaseLabel)(phase),
	        durationChoice,
	        task: taskName,
	        durationMinutes,
	        deviationHours,
	        finalized: true
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
	    for (const title of ["Horario", "Tipo de pomodoro", "Duraci\xF3n elegida", "Tarea", "Tiempo", "Desvio", "Finalizaci\xF3n", ""])
	      headRow.createEl("th", { text: title });
	    const body = table.createEl("tbody");
	    for (const entry of todayEntries) {
	      const row = body.createEl("tr");
	      row.createEl("td", { text: entry.time });
	      row.createEl("td", { text: entry.type });
	      row.createEl("td", { text: entry.durationChoice });
	      row.createEl("td", { text: entry.task });
	      row.createEl("td", { text: this.formatPomodoroDurationMinutes(entry.durationMinutes) });
	      row.createEl("td", { text: `${this.formatDecimal(entry.deviationHours)} h` });
	      row.createEl("td", { text: entry.finalized ? "true" : "false" });
	      const actionsCell = row.createEl("td", { cls: "tareas-pomodoro-log-actions" });
	      const deleteButton = actionsCell.createEl("button", {
	        cls: "tareas-pomodoro-log-delete-btn"
	      });
	      obsidian.setIcon(deleteButton, "trash-2");
	      deleteButton.setAttr("aria-label", "Eliminar registro");
	      deleteButton.setAttr("title", "Eliminar registro");
	      deleteButton.onclick = () => this.openDeletePomodoroLogEntryConfirm(entry.id);
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
	  openDeletePomodoroLogEntryConfirm(entryId) {
	    new import_ConfirmDeleteTaskModal.ConfirmDeleteTaskModal(this.app, {
	      title: "Eliminar registro Pomodoro",
	      message: "\xBFSeguro que quer\xE9s eliminar este registro del d\xEDa?",
	      confirmText: "Aceptar",
	      onConfirm: async () => {
	        const removed = await (0, import_pomodoroLogEngine.deletePomodoroLogEntry)(this.app, entryId);
	        if (!removed) {
	          new obsidian.Notice("No se pudo eliminar el registro.");
	          return;
	        }
	        new obsidian.Notice("Registro eliminado.");
	        await this.render();
	      }
	    }).open();
	  }
	  resolvePomodoroDurationChoice(durations) {
	    const cardData = (0, import_PomodoroPresetModal.getPomodoroPresetCardData)(durations);
	    const normalizedTitle = cardData.title.replace(/^[^A-Za-z0-9ÁÉÍÓÚáéíóúÑñ]+/g, "").trim();
	    const baseLabel = normalizedTitle.split(" - ")[0]?.trim();
	    return baseLabel || "Personalizado";
	  }
	  formatPomodoroDurationMinutes(minutes) {
	    if (!Number.isFinite(minutes) || minutes <= 0)
	      return "-";
	    const rounded = Math.round(minutes * 100) / 100;
	    return `${this.formatDecimal(rounded)} min`;
	  }
	  async logPomodoroResetEntry(state, nowMs) {
	    const elapsedSeconds = this.resolveElapsedSecondsForReset(state, nowMs);
	    if (elapsedSeconds <= 0 && state.phaseDeviationSeconds <= 0)
	      return;
	    const durationChoice = this.resolvePomodoroDurationChoice(state.durations);
	    const selectedTask = state.selectedTaskPath ? (0, import_taskEngine.getTasks)(this.app).find((item) => item.file.path === state.selectedTaskPath) : null;
	    const taskName = selectedTask?.tarea || "Sin tarea vinculada";
	    const durationMinutes = this.roundToTwo(elapsedSeconds / 60);
	    const deviationSeconds = state.phaseDeviationSeconds + (state.isDeviationActive ? elapsedSeconds : 0);
	    const deviationHours = this.roundToTwo(deviationSeconds / 3600);
	    await (0, import_pomodoroLogEngine.appendPomodoroLogEntry)(this.app, {
	      timestampMs: nowMs,
	      type: (0, import_pomodoroEngine.getPomodoroPhaseLabel)(state.phase),
	      durationChoice,
	      task: taskName,
	      durationMinutes,
	      deviationHours,
	      finalized: false
	    });
	    if (state.isDeviationActive)
	      await this.addPomodoroDeviationTimeToSelectedTask(elapsedSeconds, state);
	    else if (state.phase === "work")
	      await this.addPomodoroElapsedWorkTimeToSelectedTask(elapsedSeconds, state);
	  }
	  resolveElapsedSecondsForReset(state, nowMs) {
	    if (state.isDeviationActive)
	      return (0, import_pomodoroEngine.getDeviationElapsedSeconds)(state, nowMs);
	    const totalSeconds = Math.max(0, (0, import_pomodoroEngine.getPhaseDurationSeconds)(state.durations, state.phase));
	    const remainingSeconds = Math.max(0, (0, import_pomodoroEngine.getPomodoroRemainingSeconds)(state, nowMs));
	    return Math.max(0, totalSeconds - remainingSeconds);
	  }
	  async addPomodoroElapsedWorkTimeToSelectedTask(elapsedSeconds, state) {
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
	    const workedHours = this.roundToTwo(elapsedSeconds / 3600);
	    if (workedHours <= 0)
	      return;
	    const nextDedicated = this.roundToTwo(task.dedicado + workedHours);
	    await this.updateTask(task, { dedicado: nextDedicated });
	    new obsidian.Notice(`Se sumaron ${this.formatDecimal(workedHours)} h a "${task.tarea}".`, 5e3);
	  }
	  flashPomodoroPanel() {
	    if (!this.pomodoroPanelEl)
	      return;
	    this.pomodoroPanelEl.addClass("tareas-pomodoro-panel-flash");
	    window.setTimeout(() => {
	      this.pomodoroPanelEl?.removeClass("tareas-pomodoro-panel-flash");
	    }, 900);
	  }
	  playPomodoroBreathTick() {
	    const audioContext = this.ensurePomodoroAudioContext();
	    if (!audioContext)
	      return;
	    const playTick = () => {
	      try {
	        const now = audioContext.currentTime;
	        const oscillator = audioContext.createOscillator();
	        const gain = audioContext.createGain();
	        oscillator.type = "sine";
	        oscillator.frequency.value = 660;
	        gain.gain.setValueAtTime(1e-4, now);
	        gain.gain.exponentialRampToValueAtTime(0.045, now + 0.015);
	        gain.gain.exponentialRampToValueAtTime(1e-4, now + 0.16);
	        oscillator.connect(gain);
	        gain.connect(audioContext.destination);
	        oscillator.start(now);
	        oscillator.stop(now + 0.16);
	      } catch {
	      }
	    };
	    if (audioContext.state === "suspended") {
	      void audioContext.resume().then(playTick).catch(() => {
	      });
	      return;
	    }
	    playTick();
	  }
	  playPomodoroAlarmShort() {
	    const audioContext = this.ensurePomodoroAudioContext();
	    if (!audioContext)
	      return;
	    const playAlarm = () => {
	      try {
	        const now = audioContext.currentTime;
	        const oscillator = audioContext.createOscillator();
	        const gain = audioContext.createGain();
	        oscillator.type = "triangle";
	        oscillator.frequency.setValueAtTime(988, now);
	        oscillator.frequency.exponentialRampToValueAtTime(784, now + 0.24);
	        gain.gain.setValueAtTime(1e-4, now);
	        gain.gain.exponentialRampToValueAtTime(0.11, now + 0.015);
	        gain.gain.exponentialRampToValueAtTime(1e-4, now + 0.28);
	        oscillator.connect(gain);
	        gain.connect(audioContext.destination);
	        oscillator.start(now);
	        oscillator.stop(now + 0.3);
	      } catch {
	      }
	    };
	    if (audioContext.state === "suspended") {
	      void audioContext.resume().then(playAlarm).catch(() => {
	      });
	      return;
	    }
	    playAlarm();
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
	    this.pomodoroBreakMessageEl = null;
	    this.pomodoroRunGlyphEl = null;
	    this.pomodoroLastVisualState = null;
	    this.pomodoroLastBreathSoundSecond = null;
	    this.pomodoroLastBreathSoundKey = null;
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
	  setActiveTab(tabId) {
	    this.activeTab = tabId;
	  }
	  isArchivedTab() {
	    return this.activeTab === TareasView.COMPLETED_TAB_ID || this.activeTab === TareasView.CANCELLED_TAB_ID;
	  }
	  isPomodoroTab() {
	    return this.activeTab === TareasView.POMODORO_TAB_ID;
	  }
	  renderHeader(root) {
	    const header = root.createDiv({ cls: "tareas-header" });
	    const actions = header.createDiv({ cls: "tareas-header-actions" });
	    const newButton = actions.createEl("button", { cls: "tareas-btn-new" });
	    newButton.createEl("span", { text: "Nuevo tablero" });
	    newButton.onclick = () => new import_NewBoardModal.NewBoardModal(this.app, this.plugin, this).open();
	    const editButton = actions.createEl("button", { cls: "tareas-btn-edit-board" });
	    editButton.createEl("span", { text: "Editar tablero" });
	    const currentBoard = this.plugin.tableros.find((board) => board.name === this.activeTab);
	    const canEditBoard = Boolean(currentBoard) && this.activeTab !== import_constants.DEFAULT_BOARD_NAME;
	    editButton.disabled = !canEditBoard;
	    editButton.onclick = () => {
	      if (!canEditBoard || !currentBoard)
	        return;
	      new import_EditBoardModal.EditBoardModal(this.app, this.plugin, this, currentBoard).open();
	    };
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
	    column.dataset.group = groupName;
	    const header = column.createDiv({ cls: "tareas-group-header" });
	    let dragHandle = null;
	    if (isManaged) {
	      dragHandle = header.createEl("span", { text: "\u2630", cls: "tareas-group-drag-handle" });
	      dragHandle.setAttr("aria-label", `Mover grupo ${groupName}`);
	      dragHandle.setAttr("title", "Arrastrar para mover grupo");
	      dragHandle.draggable = true;
	    }
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
	    this.attachGroupDragHandlers(root, column, dragHandle, groupName, isManaged);
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
	  attachGroupDragHandlers(board, column, handle, groupName, isManaged) {
	    if (!isManaged || !handle)
	      return;
	    handle.addEventListener("mousedown", (event) => event.stopPropagation());
	    handle.addEventListener("click", (event) => event.stopPropagation());
	    handle.addEventListener("dragstart", (event) => {
	      const dataTransfer = event.dataTransfer;
	      if (!dataTransfer)
	        return;
	      this.dragGroupName = groupName;
	      this.dragGroupColumn = column;
	      column.addClass("tareas-group-dragging");
	      dataTransfer.effectAllowed = "move";
	      dataTransfer.setData("text/plain", groupName);
	      event.stopPropagation();
	    });
	    handle.addEventListener("dragend", () => {
	      this.resetGroupDragState(board);
	    });
	    column.addEventListener("dragover", (event) => {
	      const draggedGroupColumn = this.dragGroupColumn;
	      if (!this.dragGroupName || !draggedGroupColumn || this.dragGroupName === groupName || draggedGroupColumn === column)
	        return;
	      event.preventDefault();
	      event.stopPropagation();
	      if (event.dataTransfer)
	        event.dataTransfer.dropEffect = "move";
	      const insertPosition = this.resolveGroupInsertPosition(event, column);
	      this.clearGroupDropMarkers(board);
	      column.addClass(insertPosition === "before" ? "tareas-group-drag-over-before" : "tareas-group-drag-over-after");
	      const referenceNode = insertPosition === "before" ? column : column.nextElementSibling;
	      if (referenceNode === draggedGroupColumn)
	        return;
	      if (insertPosition === "after" && column.nextElementSibling === draggedGroupColumn)
	        return;
	      this.animateGroupReflow(board, () => {
	        board.insertBefore(draggedGroupColumn, referenceNode);
	      });
	    });
	    column.addEventListener("dragleave", (event) => {
	      if (event.relatedTarget instanceof Node && column.contains(event.relatedTarget))
	        return;
	      column.removeClass("tareas-group-drag-over-before");
	      column.removeClass("tareas-group-drag-over-after");
	    });
	    column.addEventListener("drop", async (event) => {
	      const draggedGroupName = this.dragGroupName;
	      if (!draggedGroupName || draggedGroupName === groupName)
	        return;
	      event.preventDefault();
	      event.stopPropagation();
	      const managedGroupNames = new Set(this.plugin.getEquiposForTablero(this.activeTab).map((item) => item.name));
	      const orderedGroupNames = Array.from(board.querySelectorAll(":scope > .tareas-group")).map((item) => item.dataset.group ?? "").filter((name) => managedGroupNames.has(name));
	      const reordered = await this.plugin.setEquiposOrderForTablero(this.activeTab, orderedGroupNames);
	      this.resetGroupDragState(board);
	      if (reordered)
	        await this.render();
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
	  resolveGroupInsertPosition(event, column) {
	    const bounds = column.getBoundingClientRect();
	    const midpoint = bounds.left + bounds.width / 2;
	    return event.clientX < midpoint ? "before" : "after";
	  }
	  animateGroupReflow(board, mutateDom) {
	    const items = Array.from(board.querySelectorAll(":scope > .tareas-group"));
	    const previousBoxes = new Map(items.map((item) => [item, item.getBoundingClientRect()]));
	    mutateDom();
	    const nextItems = Array.from(board.querySelectorAll(":scope > .tareas-group"));
	    for (const item of nextItems) {
	      const previousBox = previousBoxes.get(item);
	      if (!previousBox)
	        continue;
	      const nextBox = item.getBoundingClientRect();
	      const offsetX = previousBox.left - nextBox.left;
	      const offsetY = previousBox.top - nextBox.top;
	      if (Math.abs(offsetX) < 1 && Math.abs(offsetY) < 1)
	        continue;
	      item.animate(
	        [
	          { transform: `translate(${offsetX}px, ${offsetY}px)` },
	          { transform: "translate(0, 0)" }
	        ],
	        { duration: 240, easing: "cubic-bezier(0.2, 0.82, 0.2, 1)", fill: "both" }
	      );
	    }
	  }
	  clearGroupDropMarkers(board) {
	    board.querySelectorAll(".tareas-group-drag-over-before").forEach((item) => item.classList.remove("tareas-group-drag-over-before"));
	    board.querySelectorAll(".tareas-group-drag-over-after").forEach((item) => item.classList.remove("tareas-group-drag-over-after"));
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
	  resetGroupDragState(board) {
	    this.dragGroupName = null;
	    this.dragGroupColumn = null;
	    board.querySelectorAll(".tareas-group-dragging").forEach((item) => item.classList.remove("tareas-group-dragging"));
	    this.clearGroupDropMarkers(board);
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
	  async editTablero(currentBoardName, updates) {
	    const currentName = currentBoardName.trim().toLowerCase();
	    const nextName = updates.name.trim().toLowerCase();
	    if (!currentName || !nextName)
	      return { ok: false, boardName: currentName || nextName, error: "invalid-name" };
	    const boardIndex = this.tableros.findIndex((tablero) => tablero.name === currentName);
	    if (boardIndex < 0)
	      return { ok: false, boardName: currentName, error: "board-not-found" };
	    if (currentName === import_constants.DEFAULT_BOARD_NAME)
	      return { ok: false, boardName: currentName, error: "default-board-locked" };
	    if (nextName !== currentName && this.tableros.some((tablero) => tablero.name === nextName))
	      return { ok: false, boardName: currentName, error: "board-already-exists" };
	    if (nextName !== currentName) {
	      const renamed = await this.renameBoardFolder(currentName, nextName);
	      if (!renamed)
	        return { ok: false, boardName: currentName, error: "board-folder-conflict" };
	      await this.renameBoardTaskIndexFile(currentName, nextName);
	      await this.renameBoardInTaskFrontmatter(currentName, nextName);
	      this.equipos = this.equipos.map((equipo) => {
	        if ((equipo.tablero || import_constants.DEFAULT_BOARD_NAME) !== currentName)
	          return equipo;
	        return { ...equipo, tablero: nextName };
	      });
	      this.pomodoro = this.remapPomodoroTaskPath(currentName, nextName);
	    }
	    this.tableros[boardIndex] = {
	      ...this.tableros[boardIndex],
	      name: nextName,
	      color: updates.color
	    };
	    await this.ensureBoardWorkspace(nextName);
	    await (0, import_taskIndexEngine.syncAllTaskIndexes)(this.app);
	    await this.saveSettings();
	    return { ok: true, boardName: nextName };
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
	  async reorderEquipoInTablero(boardName, draggedGroupName, targetGroupName, insertPosition) {
	    const normalizedBoardName = boardName.trim().toLowerCase();
	    if (!normalizedBoardName)
	      return false;
	    const boardGroups = this.getEquiposForTablero(normalizedBoardName);
	    const fromIndex = boardGroups.findIndex((group) => group.name === draggedGroupName);
	    const targetIndex = boardGroups.findIndex((group) => group.name === targetGroupName);
	    if (fromIndex < 0 || targetIndex < 0 || fromIndex === targetIndex)
	      return false;
	    const nextBoardGroups = [...boardGroups];
	    const [dragged] = nextBoardGroups.splice(fromIndex, 1);
	    let nextIndex = nextBoardGroups.findIndex((group) => group.name === targetGroupName);
	    if (nextIndex < 0)
	      return false;
	    if (insertPosition === "after")
	      nextIndex += 1;
	    nextBoardGroups.splice(nextIndex, 0, dragged);
	    const orderedGroupNames = nextBoardGroups.map((group) => group.name);
	    return this.setEquiposOrderForTablero(normalizedBoardName, orderedGroupNames);
	  }
	  async setEquiposOrderForTablero(boardName, orderedGroupNames) {
	    const normalizedBoardName = boardName.trim().toLowerCase();
	    if (!normalizedBoardName)
	      return false;
	    const boardGroups = this.getEquiposForTablero(normalizedBoardName);
	    if (boardGroups.length === 0)
	      return false;
	    const uniqueOrderedNames = Array.from(new Set(orderedGroupNames));
	    if (uniqueOrderedNames.length !== boardGroups.length)
	      return false;
	    const orderedGroupByName = new Map(boardGroups.map((group) => [group.name, group]));
	    const nextBoardGroups = [];
	    for (const groupName of uniqueOrderedNames) {
	      const group = orderedGroupByName.get(groupName);
	      if (!group)
	        return false;
	      nextBoardGroups.push(group);
	    }
	    let boardPointer = 0;
	    this.equipos = this.equipos.map((equipo) => {
	      if ((equipo.tablero || "default") !== normalizedBoardName)
	        return equipo;
	      const replacement = nextBoardGroups[boardPointer];
	      boardPointer += 1;
	      return replacement || equipo;
	    });
	    await this.saveSettings();
	    return true;
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
	  async renameBoardFolder(currentBoardName, nextBoardName) {
	    const currentFolderPath = `${import_constants.TAREAS_FOLDER}/${currentBoardName}`;
	    const nextFolderPath = `${import_constants.TAREAS_FOLDER}/${nextBoardName}`;
	    const currentFolder = this.app.vault.getAbstractFileByPath(currentFolderPath);
	    const nextFolder = this.app.vault.getAbstractFileByPath(nextFolderPath);
	    if (nextFolder)
	      return false;
	    if (!(currentFolder instanceof obsidian.TFolder))
	      return true;
	    await this.app.fileManager.renameFile(currentFolder, nextFolderPath);
	    return true;
	  }
	  async renameBoardTaskIndexFile(currentBoardName, nextBoardName) {
	    const currentIndexBasename = (0, import_taskIndexEngine.getBoardTaskIndexBasename)(currentBoardName);
	    const nextIndexBasename = (0, import_taskIndexEngine.getBoardTaskIndexBasename)(nextBoardName);
	    const currentIndexPath = `${import_constants.TAREAS_FOLDER}/${nextBoardName}/${currentIndexBasename}.md`;
	    const nextIndexPath = `${import_constants.TAREAS_FOLDER}/${nextBoardName}/${nextIndexBasename}.md`;
	    const currentIndexFile = this.app.vault.getAbstractFileByPath(currentIndexPath);
	    const nextIndexFile = this.app.vault.getAbstractFileByPath(nextIndexPath);
	    if (nextIndexFile instanceof obsidian.TFile) {
	      if (currentIndexFile instanceof obsidian.TFile)
	        await this.app.vault.delete(currentIndexFile, true);
	      return;
	    }
	    if (currentIndexFile instanceof obsidian.TFile)
	      await this.app.fileManager.renameFile(currentIndexFile, nextIndexPath);
	  }
	  async renameBoardInTaskFrontmatter(currentBoardName, nextBoardName) {
	    const files = this.app.vault.getMarkdownFiles().filter((file) => file.path.startsWith(`${import_constants.TAREAS_FOLDER}/${nextBoardName}/`));
	    for (const file of files) {
	      await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
	        const boardInFrontmatter = typeof frontmatter.tablero === "string" ? frontmatter.tablero.trim().toLowerCase() : "";
	        if (boardInFrontmatter === currentBoardName)
	          frontmatter.tablero = nextBoardName;
	      });
	    }
	  }
	  remapPomodoroTaskPath(currentBoardName, nextBoardName) {
	    const selectedTaskPath = this.pomodoro.selectedTaskPath;
	    const currentPrefix = `${import_constants.TAREAS_FOLDER}/${currentBoardName}/`;
	    const nextPrefix = `${import_constants.TAREAS_FOLDER}/${nextBoardName}/`;
	    const nextSelectedTaskPath = selectedTaskPath?.startsWith(currentPrefix) ? `${nextPrefix}${selectedTaskPath.slice(currentPrefix.length)}` : selectedTaskPath;
	    return {
	      ...this.pomodoro,
	      durations: { ...this.pomodoro.durations },
	      selectedTaskPath: nextSelectedTaskPath ?? null
	    };
	  }
	  async deleteFolderIfExists(path) {
	    const abstractFile = this.app.vault.getAbstractFileByPath(path);
	    if (!(abstractFile instanceof obsidian.TFolder))
	      return;
	    await this.app.vault.delete(abstractFile, true);
	  }
	  async ensureFolderPath(path) {
	    const adapter = this.app.vault.adapter;
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
	        if (await adapter.exists(currentPath))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL3Rhc2tNYW5uYWdlci9jb25zdGFudHMudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL3V0aWxzL2d1YXJkcy50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy9wb21vZG9yb0VuZ2luZS50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy90YXNrSW5kZXhFbmdpbmUudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL2VuZ2luZXMvZnJvbnRtYXR0ZXJFbmdpbmUudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL3V0aWxzL3N0YXR1cy50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy90YXNrRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9lbmdpbmVzL3NjaGVkdWxlRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci91dGlscy9zYW5pdGl6ZUZpbGVuYW1lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9tb2RhbHMvTmV3VGFza01vZGFsLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci91dGlscy9zZXR0aW5ncy50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy9jb21wbGV0aW9uRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9lbmdpbmVzL29yZGVyRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9lbmdpbmVzL3BvbW9kb3JvTG9nRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci91aS9jb2xvclBpY2tlci50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvbW9kYWxzL0VkaXRTZWN0aW9uTW9kYWwudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL21vZGFscy9FZGl0Qm9hcmRNb2RhbC50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvbW9kYWxzL05ld0JvYXJkTW9kYWwudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL21vZGFscy9OZXdHcm91cE1vZGFsLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9tb2RhbHMvRWRpdFRhc2tGaWxlTW9kYWwudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL21vZGFscy9BZGRUYXNrQ29tbWVudE1vZGFsLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9tb2RhbHMvQ29uZmlybURlbGV0ZVRhc2tNb2RhbC50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvbW9kYWxzL1BvbW9kb3JvUHJlc2V0TW9kYWwudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL21vZGFscy9TZWxlY3RQb21vZG9yb1Rhc2tNb2RhbC50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvdWkvZHJvcGRvd24udHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL3V0aWxzL2RlYm91bmNlLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci92aWV3L1RhcmVhc1ZpZXcudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL3BsdWdpbi9UYXJlYXNQbHVnaW4udHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci50cz9jb21tb25qcy1lbnRyeSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVklFV19UWVBFID0gJ3RhcmVhcy12aWV3J1xuZXhwb3J0IGNvbnN0IFRBUkVBU19GT0xERVIgPSAndGFzay1tYW5uYWdlcidcbmV4cG9ydCBjb25zdCBDT01QTEVURURfVEFTS1NfRk9MREVSID0gYCR7VEFSRUFTX0ZPTERFUn0vZmluaXNoZWRgXG5leHBvcnQgY29uc3QgQ09NUExFVEVEX1NVQlRBU0tTX0ZPTERFUiA9IGAke0NPTVBMRVRFRF9UQVNLU19GT0xERVJ9L3N1YlRhc2tzYFxuZXhwb3J0IGNvbnN0IENBTkNFTExFRF9UQVNLU19GT0xERVIgPSBgJHtUQVJFQVNfRk9MREVSfS9jYW5jZWxsZWRgXG5leHBvcnQgY29uc3QgQ0FOQ0VMTEVEX1NVQlRBU0tTX0ZPTERFUiA9IGAke0NBTkNFTExFRF9UQVNLU19GT0xERVJ9L3N1YlRhc2tzYFxuZXhwb3J0IGNvbnN0IExFR0FDWV9DT01QTEVURURfVEFTS1NfRk9MREVSID0gYCR7VEFSRUFTX0ZPTERFUn0vY29tcGxldGFkYXNgXG5leHBvcnQgY29uc3QgVEFTS19JTkRFWF9CQVNFTkFNRSA9ICd0YXNrSW5kZXgnXG5leHBvcnQgY29uc3QgRklOSVNIRURfVEFTS19JTkRFWF9CQVNFTkFNRSA9ICd0YXNrSW5kZXhGaW5pc2hlZCdcbmV4cG9ydCBjb25zdCBDQU5DRUxMRURfVEFTS19JTkRFWF9CQVNFTkFNRSA9ICd0YXNrSW5kZXhDYW5jZWxsZWQnXG5leHBvcnQgY29uc3QgUE9NT0RPUk9fTE9HX0JBU0VOQU1FID0gJ3BvbW9kb3JvJ1xuZXhwb3J0IGNvbnN0IElOREVYX1RBRyA9ICdpbmRleCdcbmV4cG9ydCBjb25zdCBUQVNLX1RBRyA9ICd0YXNrJ1xuZXhwb3J0IGNvbnN0IFNVQlRBU0tfVEFHID0gJ3N1Yi10YXNrJ1xuXG5leHBvcnQgY29uc3QgRVNUQURPUyA9IFsnUGVuZGllbnRlJywgJ0NhbmNlbGFkYScsICdFbiBwcm9ncmVzbycsICdGaW5hbGl6YWRhJywgJ0Jsb3F1ZWFkYSddXG5leHBvcnQgY29uc3QgUFJJT1JJREFERVMgPSBbJ0JhamEnLCAnTWVkaWEnLCAnQWx0YScsICdVcmdlbnRlJ11cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQk9BUkRfTkFNRSA9ICdkZWZhdWx0J1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVEFCTEVST1M6IEFycmF5PHsgbmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nIH0+ID0gW1xuICB7IG5hbWU6IERFRkFVTFRfQk9BUkRfTkFNRSwgY29sb3I6ICcjMmU2ZGIwJyB9LFxuXVxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVFVSVBPUzogQXJyYXk8eyBuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcgfT4gPSBbXVxuZXhwb3J0IGNvbnN0IExPQ0tFRF9FUVVJUE9fTkFNRVM6IHN0cmluZ1tdID0gW11cblxuZXhwb3J0IGNvbnN0IFBSRVNFVF9DT0xPUlMgPSBbXG4gICcjZTA1YzVjJywgJyNlMDg1NWMnLCAnI2Q5N2ExZScsICcjYzliODRhJyxcbiAgJyM0Y2FmNTAnLCAnIzAwYjg5NCcsICcjMDk4NGUzJywgJyMyZTZkYjAnLFxuICAnIzdjNWNlNycsICcjZmQ3OWE4JywgJyM2MzZlNzInLCAnI2IyYmVjMycsXG5dXG5cbmV4cG9ydCBjb25zdCBPUkRFUl9TVEVQID0gMTBcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUE9NT0RPUk9fV09SS19NSU5VVEVTID0gMjVcbmV4cG9ydCBjb25zdCBERUZBVUxUX1BPTU9ET1JPX1NIT1JUX0JSRUFLX01JTlVURVMgPSA1XG5leHBvcnQgY29uc3QgREVGQVVMVF9QT01PRE9ST19MT05HX0JSRUFLX01JTlVURVMgPSAxNVxuZXhwb3J0IGNvbnN0IFBPTU9ET1JPX1dPUktfQ1lDTEVTX0JFRk9SRV9MT05HX0JSRUFLID0gNFxuIiwiaW1wb3J0IHR5cGUgeyBUYXNrRnJvbnRtYXR0ZXIgfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVjb3JkKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICByZXR1cm4gQm9vbGVhbih2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9UYXNrRnJvbnRtYXR0ZXIodmFsdWU6IHVua25vd24pOiBUYXNrRnJvbnRtYXR0ZXIgfCBudWxsIHtcbiAgaWYgKCFpc1JlY29yZCh2YWx1ZSkpXG4gICAgcmV0dXJuIG51bGxcblxuICBjb25zdCBmcm9udG1hdHRlcjogVGFza0Zyb250bWF0dGVyID0ge31cblxuICBpZiAodHlwZW9mIHZhbHVlLnRhcmVhID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci50YXJlYSA9IHZhbHVlLnRhcmVhXG4gIGlmICh0eXBlb2YgdmFsdWUuZGV0YWxsZSA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIuZGV0YWxsZSA9IHZhbHVlLmRldGFsbGVcbiAgaWYgKHR5cGVvZiB2YWx1ZS5lc3RhZG8gPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLmVzdGFkbyA9IHZhbHVlLmVzdGFkb1xuICBpZiAodHlwZW9mIHZhbHVlLmZlY2hhSW5pY2lvID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5mZWNoYUluaWNpbyA9IHZhbHVlLmZlY2hhSW5pY2lvXG4gIGlmICh0eXBlb2YgdmFsdWUuZmVjaGFGaW4gPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLmZlY2hhRmluID0gdmFsdWUuZmVjaGFGaW5cbiAgaWYgKHR5cGVvZiB2YWx1ZS50YWJsZXJvID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci50YWJsZXJvID0gdmFsdWUudGFibGVyb1xuICBpZiAodHlwZW9mIHZhbHVlLmVxdWlwbyA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIuZXF1aXBvID0gdmFsdWUuZXF1aXBvXG4gIGlmICh0eXBlb2YgdmFsdWUucHJpb3JpZGFkID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5wcmlvcmlkYWQgPSB2YWx1ZS5wcmlvcmlkYWRcbiAgaWYgKHR5cGVvZiB2YWx1ZS5kZWRpY2FkbyA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlLmRlZGljYWRvID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5kZWRpY2FkbyA9IHZhbHVlLmRlZGljYWRvXG4gIGlmICh0eXBlb2YgdmFsdWUuZXN0aW1hY2lvbiA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlLmVzdGltYWNpb24gPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLmVzdGltYWNpb24gPSB2YWx1ZS5lc3RpbWFjaW9uXG4gIGlmICh0eXBlb2YgdmFsdWUuZGVzdmlvID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUuZGVzdmlvID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5kZXN2aW8gPSB2YWx1ZS5kZXN2aW9cbiAgaWYgKHR5cGVvZiB2YWx1ZS5wYXJlbnQgPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLnBhcmVudCA9IHZhbHVlLnBhcmVudFxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZS5jaGlsZHMpICYmIHZhbHVlLmNoaWxkcy5ldmVyeShpdGVtID0+IHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykpXG4gICAgZnJvbnRtYXR0ZXIuY2hpbGRzID0gdmFsdWUuY2hpbGRzXG4gIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZS5jaGlsZHMgPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLmNoaWxkcyA9IHZhbHVlLmNoaWxkc1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZS50YWdzKSAmJiB2YWx1ZS50YWdzLmV2ZXJ5KGl0ZW0gPT4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSlcbiAgICBmcm9udG1hdHRlci50YWdzID0gdmFsdWUudGFnc1xuICBlbHNlIGlmICh0eXBlb2YgdmFsdWUudGFncyA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIudGFncyA9IHZhbHVlLnRhZ3NcbiAgaWYgKHR5cGVvZiB2YWx1ZS5vcmRlciA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlLm9yZGVyID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5vcmRlciA9IHZhbHVlLm9yZGVyXG5cbiAgcmV0dXJuIGZyb250bWF0dGVyXG59XG4iLCJpbXBvcnQge1xuICBERUZBVUxUX1BPTU9ET1JPX0xPTkdfQlJFQUtfTUlOVVRFUyxcbiAgREVGQVVMVF9QT01PRE9ST19TSE9SVF9CUkVBS19NSU5VVEVTLFxuICBERUZBVUxUX1BPTU9ET1JPX1dPUktfTUlOVVRFUyxcbiAgUE9NT0RPUk9fV09SS19DWUNMRVNfQkVGT1JFX0xPTkdfQlJFQUssXG59IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB0eXBlIHsgUG9tb2Rvcm9EdXJhdGlvbnMsIFBvbW9kb3JvUGhhc2UsIFBvbW9kb3JvUnVuU3RhdGUsIFBvbW9kb3JvU3RhdGUgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IGlzUmVjb3JkIH0gZnJvbSAnLi4vdXRpbHMvZ3VhcmRzJ1xuXG5jb25zdCBNSU5fRFVSQVRJT05fTUlOVVRFUyA9IDFcbmNvbnN0IE1BWF9EVVJBVElPTl9NSU5VVEVTID0gMTgwXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZWZhdWx0UG9tb2Rvcm9TdGF0ZSgpOiBQb21vZG9yb1N0YXRlIHtcbiAgY29uc3QgZHVyYXRpb25zID0gY3JlYXRlRGVmYXVsdFBvbW9kb3JvRHVyYXRpb25zKClcbiAgcmV0dXJuIHtcbiAgICBwaGFzZTogJ3dvcmsnLFxuICAgIHJ1blN0YXRlOiAnaWRsZScsXG4gICAgcmVtYWluaW5nU2Vjb25kczogZ2V0UGhhc2VEdXJhdGlvblNlY29uZHMoZHVyYXRpb25zLCAnd29yaycpLFxuICAgIGVuZFRpbWVzdGFtcDogbnVsbCxcbiAgICBjb21wbGV0ZWRXb3JrQ3ljbGVzOiAwLFxuICAgIHNlbGVjdGVkVGFza1BhdGg6IG51bGwsXG4gICAgaXNEZXZpYXRpb25BY3RpdmU6IGZhbHNlLFxuICAgIGRldmlhdGlvblN0YXJ0ZWRBdDogbnVsbCxcbiAgICBkZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kczogMCxcbiAgICBwaGFzZURldmlhdGlvblNlY29uZHM6IDAsXG4gICAgZHVyYXRpb25zLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZWZhdWx0UG9tb2Rvcm9EdXJhdGlvbnMoKTogUG9tb2Rvcm9EdXJhdGlvbnMge1xuICByZXR1cm4ge1xuICAgIHdvcmtNaW51dGVzOiBERUZBVUxUX1BPTU9ET1JPX1dPUktfTUlOVVRFUyxcbiAgICBzaG9ydEJyZWFrTWludXRlczogREVGQVVMVF9QT01PRE9ST19TSE9SVF9CUkVBS19NSU5VVEVTLFxuICAgIGxvbmdCcmVha01pbnV0ZXM6IERFRkFVTFRfUE9NT0RPUk9fTE9OR19CUkVBS19NSU5VVEVTLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVQb21vZG9yb1N0YXRlKHJhd1ZhbHVlOiB1bmtub3duKTogUG9tb2Rvcm9TdGF0ZSB7XG4gIGNvbnN0IGZhbGxiYWNrID0gY3JlYXRlRGVmYXVsdFBvbW9kb3JvU3RhdGUoKVxuICBpZiAoIWlzUmVjb3JkKHJhd1ZhbHVlKSlcbiAgICByZXR1cm4gZmFsbGJhY2tcblxuICBjb25zdCBkdXJhdGlvbnMgPSBub3JtYWxpemVQb21vZG9yb0R1cmF0aW9ucyhyYXdWYWx1ZS5kdXJhdGlvbnMpXG4gIGNvbnN0IHBoYXNlID0gbm9ybWFsaXplUG9tb2Rvcm9QaGFzZShyYXdWYWx1ZS5waGFzZSlcbiAgY29uc3QgcnVuU3RhdGUgPSBub3JtYWxpemVQb21vZG9yb1J1blN0YXRlKHJhd1ZhbHVlLnJ1blN0YXRlKVxuICBjb25zdCBkZWZhdWx0UmVtYWluaW5nID0gZ2V0UGhhc2VEdXJhdGlvblNlY29uZHMoZHVyYXRpb25zLCBwaGFzZSlcbiAgY29uc3QgcmVtYWluaW5nU2Vjb25kcyA9IG5vcm1hbGl6ZVNlY29uZHMocmF3VmFsdWUucmVtYWluaW5nU2Vjb25kcywgZGVmYXVsdFJlbWFpbmluZylcbiAgY29uc3QgZW5kVGltZXN0YW1wID0gdHlwZW9mIHJhd1ZhbHVlLmVuZFRpbWVzdGFtcCA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzRmluaXRlKHJhd1ZhbHVlLmVuZFRpbWVzdGFtcClcbiAgICA/IHJhd1ZhbHVlLmVuZFRpbWVzdGFtcFxuICAgIDogbnVsbFxuICBjb25zdCBjb21wbGV0ZWRXb3JrQ3ljbGVzID0gdHlwZW9mIHJhd1ZhbHVlLmNvbXBsZXRlZFdvcmtDeWNsZXMgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZShyYXdWYWx1ZS5jb21wbGV0ZWRXb3JrQ3ljbGVzKVxuICAgID8gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcihyYXdWYWx1ZS5jb21wbGV0ZWRXb3JrQ3ljbGVzKSlcbiAgICA6IDBcbiAgY29uc3Qgc2VsZWN0ZWRUYXNrUGF0aCA9IHR5cGVvZiByYXdWYWx1ZS5zZWxlY3RlZFRhc2tQYXRoID09PSAnc3RyaW5nJyAmJiByYXdWYWx1ZS5zZWxlY3RlZFRhc2tQYXRoLnRyaW0oKS5sZW5ndGggPiAwXG4gICAgPyByYXdWYWx1ZS5zZWxlY3RlZFRhc2tQYXRoXG4gICAgOiBudWxsXG4gIGNvbnN0IGlzRGV2aWF0aW9uQWN0aXZlID0gQm9vbGVhbihyYXdWYWx1ZS5pc0RldmlhdGlvbkFjdGl2ZSlcbiAgY29uc3QgZGV2aWF0aW9uU3RhcnRlZEF0ID0gdHlwZW9mIHJhd1ZhbHVlLmRldmlhdGlvblN0YXJ0ZWRBdCA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzRmluaXRlKHJhd1ZhbHVlLmRldmlhdGlvblN0YXJ0ZWRBdClcbiAgICA/IHJhd1ZhbHVlLmRldmlhdGlvblN0YXJ0ZWRBdFxuICAgIDogbnVsbFxuICBjb25zdCBkZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kcyA9IG5vcm1hbGl6ZVNlY29uZHMocmF3VmFsdWUuZGV2aWF0aW9uQmFzZVJlbWFpbmluZ1NlY29uZHMsIDApXG4gIGNvbnN0IHBoYXNlRGV2aWF0aW9uU2Vjb25kcyA9IG5vcm1hbGl6ZVNlY29uZHMocmF3VmFsdWUucGhhc2VEZXZpYXRpb25TZWNvbmRzLCAwKVxuXG4gIHJldHVybiB7XG4gICAgcGhhc2UsXG4gICAgcnVuU3RhdGUsXG4gICAgcmVtYWluaW5nU2Vjb25kcyxcbiAgICBlbmRUaW1lc3RhbXAsXG4gICAgY29tcGxldGVkV29ya0N5Y2xlcyxcbiAgICBzZWxlY3RlZFRhc2tQYXRoLFxuICAgIGlzRGV2aWF0aW9uQWN0aXZlLFxuICAgIGRldmlhdGlvblN0YXJ0ZWRBdDogaXNEZXZpYXRpb25BY3RpdmUgPyBkZXZpYXRpb25TdGFydGVkQXQgOiBudWxsLFxuICAgIGRldmlhdGlvbkJhc2VSZW1haW5pbmdTZWNvbmRzOiBpc0RldmlhdGlvbkFjdGl2ZSA/IGRldmlhdGlvbkJhc2VSZW1haW5pbmdTZWNvbmRzIDogMCxcbiAgICBwaGFzZURldmlhdGlvblNlY29uZHMsXG4gICAgZHVyYXRpb25zLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVQb21vZG9yb0R1cmF0aW9ucyhyYXdWYWx1ZTogdW5rbm93bik6IFBvbW9kb3JvRHVyYXRpb25zIHtcbiAgY29uc3QgZmFsbGJhY2sgPSBjcmVhdGVEZWZhdWx0UG9tb2Rvcm9EdXJhdGlvbnMoKVxuICBpZiAoIWlzUmVjb3JkKHJhd1ZhbHVlKSlcbiAgICByZXR1cm4gZmFsbGJhY2tcblxuICByZXR1cm4ge1xuICAgIHdvcmtNaW51dGVzOiBjbGFtcE1pbnV0ZXMocmF3VmFsdWUud29ya01pbnV0ZXMsIGZhbGxiYWNrLndvcmtNaW51dGVzKSxcbiAgICBzaG9ydEJyZWFrTWludXRlczogY2xhbXBNaW51dGVzKHJhd1ZhbHVlLnNob3J0QnJlYWtNaW51dGVzLCBmYWxsYmFjay5zaG9ydEJyZWFrTWludXRlcyksXG4gICAgbG9uZ0JyZWFrTWludXRlczogY2xhbXBNaW51dGVzKHJhd1ZhbHVlLmxvbmdCcmVha01pbnV0ZXMsIGZhbGxiYWNrLmxvbmdCcmVha01pbnV0ZXMpLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyhkdXJhdGlvbnM6IFBvbW9kb3JvRHVyYXRpb25zLCBwaGFzZTogUG9tb2Rvcm9QaGFzZSk6IG51bWJlciB7XG4gIGlmIChwaGFzZSA9PT0gJ3Nob3J0LWJyZWFrJylcbiAgICByZXR1cm4gZHVyYXRpb25zLnNob3J0QnJlYWtNaW51dGVzICogNjBcblxuICBpZiAocGhhc2UgPT09ICdsb25nLWJyZWFrJylcbiAgICByZXR1cm4gZHVyYXRpb25zLmxvbmdCcmVha01pbnV0ZXMgKiA2MFxuXG4gIHJldHVybiBkdXJhdGlvbnMud29ya01pbnV0ZXMgKiA2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9tb2Rvcm9SZW1haW5pbmdTZWNvbmRzKHN0YXRlOiBQb21vZG9yb1N0YXRlLCBub3dNczogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHN0YXRlLnJ1blN0YXRlICE9PSAncnVubmluZycgfHwgc3RhdGUuZW5kVGltZXN0YW1wID09PSBudWxsKVxuICAgIHJldHVybiBzdGF0ZS5yZW1haW5pbmdTZWNvbmRzXG5cbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGguY2VpbCgoc3RhdGUuZW5kVGltZXN0YW1wIC0gbm93TXMpIC8gMTAwMCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFBvbW9kb3JvKHN0YXRlOiBQb21vZG9yb1N0YXRlLCBub3dNczogbnVtYmVyKTogUG9tb2Rvcm9TdGF0ZSB7XG4gIGlmIChzdGF0ZS5ydW5TdGF0ZSA9PT0gJ3J1bm5pbmcnIHx8IHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlKVxuICAgIHJldHVybiBzdGF0ZVxuXG4gIGNvbnN0IHJlbWFpbmluZ1NlY29uZHMgPSBzdGF0ZS5ydW5TdGF0ZSA9PT0gJ3BhdXNlZCdcbiAgICA/IHN0YXRlLnJlbWFpbmluZ1NlY29uZHNcbiAgICA6IGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKHN0YXRlLmR1cmF0aW9ucywgc3RhdGUucGhhc2UpXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBydW5TdGF0ZTogJ3J1bm5pbmcnLFxuICAgIHJlbWFpbmluZ1NlY29uZHMsXG4gICAgZW5kVGltZXN0YW1wOiBub3dNcyArIHJlbWFpbmluZ1NlY29uZHMgKiAxMDAwLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXVzZVBvbW9kb3JvKHN0YXRlOiBQb21vZG9yb1N0YXRlLCBub3dNczogbnVtYmVyKTogUG9tb2Rvcm9TdGF0ZSB7XG4gIGlmIChzdGF0ZS5ydW5TdGF0ZSAhPT0gJ3J1bm5pbmcnIHx8IHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlKVxuICAgIHJldHVybiBzdGF0ZVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgcnVuU3RhdGU6ICdwYXVzZWQnLFxuICAgIHJlbWFpbmluZ1NlY29uZHM6IGdldFBvbW9kb3JvUmVtYWluaW5nU2Vjb25kcyhzdGF0ZSwgbm93TXMpLFxuICAgIGVuZFRpbWVzdGFtcDogbnVsbCxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzdW1lUG9tb2Rvcm8oc3RhdGU6IFBvbW9kb3JvU3RhdGUsIG5vd01zOiBudW1iZXIpOiBQb21vZG9yb1N0YXRlIHtcbiAgaWYgKHN0YXRlLnJ1blN0YXRlICE9PSAncGF1c2VkJyB8fCBzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSlcbiAgICByZXR1cm4gc3RhdGVcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIHJ1blN0YXRlOiAncnVubmluZycsXG4gICAgZW5kVGltZXN0YW1wOiBub3dNcyArIHN0YXRlLnJlbWFpbmluZ1NlY29uZHMgKiAxMDAwLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFBvbW9kb3JvKHN0YXRlOiBQb21vZG9yb1N0YXRlKTogUG9tb2Rvcm9TdGF0ZSB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgcnVuU3RhdGU6ICdpZGxlJyxcbiAgICByZW1haW5pbmdTZWNvbmRzOiBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyhzdGF0ZS5kdXJhdGlvbnMsIHN0YXRlLnBoYXNlKSxcbiAgICBlbmRUaW1lc3RhbXA6IG51bGwsXG4gICAgaXNEZXZpYXRpb25BY3RpdmU6IGZhbHNlLFxuICAgIGRldmlhdGlvblN0YXJ0ZWRBdDogbnVsbCxcbiAgICBkZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kczogMCxcbiAgICBwaGFzZURldmlhdGlvblNlY29uZHM6IDAsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UG9tb2Rvcm9EdXJhdGlvbnMoc3RhdGU6IFBvbW9kb3JvU3RhdGUsIGR1cmF0aW9uczogUG9tb2Rvcm9EdXJhdGlvbnMpOiBQb21vZG9yb1N0YXRlIHtcbiAgaWYgKHN0YXRlLnJ1blN0YXRlICE9PSAnaWRsZScpXG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIGR1cmF0aW9uczogeyAuLi5kdXJhdGlvbnMgfSB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBkdXJhdGlvbnM6IHsgLi4uZHVyYXRpb25zIH0sXG4gICAgcmVtYWluaW5nU2Vjb25kczogZ2V0UGhhc2VEdXJhdGlvblNlY29uZHMoZHVyYXRpb25zLCBzdGF0ZS5waGFzZSksXG4gICAgZW5kVGltZXN0YW1wOiBudWxsLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZHZhbmNlUG9tb2Rvcm9TdGF0ZShcbiAgc3RhdGU6IFBvbW9kb3JvU3RhdGUsXG4gIG5vd01zOiBudW1iZXIsXG4pOiB7IHN0YXRlOiBQb21vZG9yb1N0YXRlLCBjb21wbGV0ZWRQaGFzZXM6IFBvbW9kb3JvUGhhc2VbXSwgdHJhbnNpdGlvbmVkOiBib29sZWFuIH0ge1xuICBpZiAoc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUgfHwgc3RhdGUucnVuU3RhdGUgIT09ICdydW5uaW5nJyB8fCBzdGF0ZS5lbmRUaW1lc3RhbXAgPT09IG51bGwpXG4gICAgcmV0dXJuIHsgc3RhdGUsIGNvbXBsZXRlZFBoYXNlczogW10sIHRyYW5zaXRpb25lZDogZmFsc2UgfVxuXG4gIGxldCBuZXh0ID0geyAuLi5zdGF0ZSwgZHVyYXRpb25zOiB7IC4uLnN0YXRlLmR1cmF0aW9ucyB9IH1cbiAgY29uc3QgY29tcGxldGVkUGhhc2VzOiBQb21vZG9yb1BoYXNlW10gPSBbXVxuICBsZXQgdHJhbnNpdGlvbmVkID0gZmFsc2VcblxuICB3aGlsZSAobmV4dC5lbmRUaW1lc3RhbXAgIT09IG51bGwgJiYgbmV4dC5lbmRUaW1lc3RhbXAgPD0gbm93TXMpIHtcbiAgICBjb21wbGV0ZWRQaGFzZXMucHVzaChuZXh0LnBoYXNlKVxuICAgIHRyYW5zaXRpb25lZCA9IHRydWVcblxuICAgIGlmIChuZXh0LnBoYXNlID09PSAnd29yaycpIHtcbiAgICAgIGNvbnN0IGNvbXBsZXRlZFdvcmtDeWNsZXMgPSBuZXh0LmNvbXBsZXRlZFdvcmtDeWNsZXMgKyAxXG4gICAgICBjb25zdCBuZXh0UGhhc2U6IFBvbW9kb3JvUGhhc2UgPSBjb21wbGV0ZWRXb3JrQ3ljbGVzICUgUE9NT0RPUk9fV09SS19DWUNMRVNfQkVGT1JFX0xPTkdfQlJFQUsgPT09IDBcbiAgICAgICAgPyAnbG9uZy1icmVhaydcbiAgICAgICAgOiAnc2hvcnQtYnJlYWsnXG4gICAgICBjb25zdCBuZXh0RHVyYXRpb24gPSBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyhuZXh0LmR1cmF0aW9ucywgbmV4dFBoYXNlKVxuICAgICAgbmV4dCA9IHtcbiAgICAgICAgLi4ubmV4dCxcbiAgICAgICAgcGhhc2U6IG5leHRQaGFzZSxcbiAgICAgICAgY29tcGxldGVkV29ya0N5Y2xlcyxcbiAgICAgICAgcnVuU3RhdGU6ICdydW5uaW5nJyxcbiAgICAgICAgcmVtYWluaW5nU2Vjb25kczogbmV4dER1cmF0aW9uLFxuICAgICAgICBlbmRUaW1lc3RhbXA6IChuZXh0LmVuZFRpbWVzdGFtcCA/PyBub3dNcykgKyBuZXh0RHVyYXRpb24gKiAxMDAwLFxuICAgICAgfVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0RHVyYXRpb24gPSBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyhuZXh0LmR1cmF0aW9ucywgJ3dvcmsnKVxuICAgIG5leHQgPSB7XG4gICAgICAuLi5uZXh0LFxuICAgICAgcGhhc2U6ICd3b3JrJyxcbiAgICAgIHJ1blN0YXRlOiAncnVubmluZycsXG4gICAgICByZW1haW5pbmdTZWNvbmRzOiBuZXh0RHVyYXRpb24sXG4gICAgICBlbmRUaW1lc3RhbXA6IChuZXh0LmVuZFRpbWVzdGFtcCA/PyBub3dNcykgKyBuZXh0RHVyYXRpb24gKiAxMDAwLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlbWFpbmluZ1NlY29uZHMgPSBnZXRQb21vZG9yb1JlbWFpbmluZ1NlY29uZHMobmV4dCwgbm93TXMpXG4gIGlmIChyZW1haW5pbmdTZWNvbmRzICE9PSBuZXh0LnJlbWFpbmluZ1NlY29uZHMpXG4gICAgbmV4dCA9IHsgLi4ubmV4dCwgcmVtYWluaW5nU2Vjb25kcyB9XG5cbiAgcmV0dXJuIHsgc3RhdGU6IG5leHQsIGNvbXBsZXRlZFBoYXNlcywgdHJhbnNpdGlvbmVkIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERldmlhdGlvbkVsYXBzZWRTZWNvbmRzKHN0YXRlOiBQb21vZG9yb1N0YXRlLCBub3dNczogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKCFzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSB8fCBzdGF0ZS5kZXZpYXRpb25TdGFydGVkQXQgPT09IG51bGwpXG4gICAgcmV0dXJuIDBcblxuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcigobm93TXMgLSBzdGF0ZS5kZXZpYXRpb25TdGFydGVkQXQpIC8gMTAwMCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnRlclBvbW9kb3JvRGV2aWF0aW9uKHN0YXRlOiBQb21vZG9yb1N0YXRlLCBub3dNczogbnVtYmVyKTogUG9tb2Rvcm9TdGF0ZSB7XG4gIGlmIChzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSB8fCBzdGF0ZS5ydW5TdGF0ZSAhPT0gJ3J1bm5pbmcnKVxuICAgIHJldHVybiBzdGF0ZVxuXG4gIGNvbnN0IHJlbWFpbmluZ1NlY29uZHMgPSBnZXRQb21vZG9yb1JlbWFpbmluZ1NlY29uZHMoc3RhdGUsIG5vd01zKVxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIHJ1blN0YXRlOiAncGF1c2VkJyxcbiAgICByZW1haW5pbmdTZWNvbmRzLFxuICAgIGVuZFRpbWVzdGFtcDogbnVsbCxcbiAgICBpc0RldmlhdGlvbkFjdGl2ZTogdHJ1ZSxcbiAgICBkZXZpYXRpb25TdGFydGVkQXQ6IG5vd01zLFxuICAgIGRldmlhdGlvbkJhc2VSZW1haW5pbmdTZWNvbmRzOiByZW1haW5pbmdTZWNvbmRzLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleGl0UG9tb2Rvcm9EZXZpYXRpb24oXG4gIHN0YXRlOiBQb21vZG9yb1N0YXRlLFxuICBub3dNczogbnVtYmVyLFxuKTogeyBzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgZWxhcHNlZFNlY29uZHM6IG51bWJlciwgY29tcGxldGVkV29yazogYm9vbGVhbiwgb3ZlcnRpbWVTZWNvbmRzOiBudW1iZXIgfSB7XG4gIGlmICghc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUpXG4gICAgcmV0dXJuIHsgc3RhdGUsIGVsYXBzZWRTZWNvbmRzOiAwLCBjb21wbGV0ZWRXb3JrOiBmYWxzZSwgb3ZlcnRpbWVTZWNvbmRzOiAwIH1cblxuICBjb25zdCBlbGFwc2VkU2Vjb25kcyA9IGdldERldmlhdGlvbkVsYXBzZWRTZWNvbmRzKHN0YXRlLCBub3dNcylcbiAgY29uc3QgYmFzZVJlbWFpbmluZyA9IE1hdGgubWF4KDAsIHN0YXRlLmRldmlhdGlvbkJhc2VSZW1haW5pbmdTZWNvbmRzKVxuXG4gIGNvbnN0IGNsZWFyRGV2aWF0aW9uID0gKG5leHQ6IFBvbW9kb3JvU3RhdGUpOiBQb21vZG9yb1N0YXRlID0+ICh7XG4gICAgLi4ubmV4dCxcbiAgICBpc0RldmlhdGlvbkFjdGl2ZTogZmFsc2UsXG4gICAgZGV2aWF0aW9uU3RhcnRlZEF0OiBudWxsLFxuICAgIGRldmlhdGlvbkJhc2VSZW1haW5pbmdTZWNvbmRzOiAwLFxuICAgIHBoYXNlRGV2aWF0aW9uU2Vjb25kczogbmV4dC5waGFzZURldmlhdGlvblNlY29uZHMgKyBlbGFwc2VkU2Vjb25kcyxcbiAgfSlcblxuICBpZiAoc3RhdGUucGhhc2UgIT09ICd3b3JrJykge1xuICAgIGNvbnN0IHJlbWFpbmluZ1NlY29uZHMgPSBNYXRoLm1heCgwLCBiYXNlUmVtYWluaW5nIC0gZWxhcHNlZFNlY29uZHMpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiBjbGVhckRldmlhdGlvbih7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBydW5TdGF0ZTogJ3J1bm5pbmcnLFxuICAgICAgICByZW1haW5pbmdTZWNvbmRzLFxuICAgICAgICBlbmRUaW1lc3RhbXA6IG5vd01zICsgcmVtYWluaW5nU2Vjb25kcyAqIDEwMDAsXG4gICAgICB9KSxcbiAgICAgIGVsYXBzZWRTZWNvbmRzLFxuICAgICAgY29tcGxldGVkV29yazogZmFsc2UsXG4gICAgICBvdmVydGltZVNlY29uZHM6IDAsXG4gICAgfVxuICB9XG5cbiAgaWYgKGVsYXBzZWRTZWNvbmRzIDwgYmFzZVJlbWFpbmluZykge1xuICAgIGNvbnN0IHJlbWFpbmluZ1NlY29uZHMgPSBNYXRoLm1heCgwLCBiYXNlUmVtYWluaW5nIC0gZWxhcHNlZFNlY29uZHMpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiBjbGVhckRldmlhdGlvbih7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBydW5TdGF0ZTogJ3J1bm5pbmcnLFxuICAgICAgICByZW1haW5pbmdTZWNvbmRzLFxuICAgICAgICBlbmRUaW1lc3RhbXA6IG5vd01zICsgcmVtYWluaW5nU2Vjb25kcyAqIDEwMDAsXG4gICAgICB9KSxcbiAgICAgIGVsYXBzZWRTZWNvbmRzLFxuICAgICAgY29tcGxldGVkV29yazogZmFsc2UsXG4gICAgICBvdmVydGltZVNlY29uZHM6IDAsXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb3ZlcnRpbWVTZWNvbmRzID0gZWxhcHNlZFNlY29uZHMgLSBiYXNlUmVtYWluaW5nXG4gIGNvbnN0IGNvbXBsZXRlZFdvcmtDeWNsZXMgPSBzdGF0ZS5jb21wbGV0ZWRXb3JrQ3ljbGVzICsgMVxuICBjb25zdCBuZXh0UGhhc2U6IFBvbW9kb3JvUGhhc2UgPSBjb21wbGV0ZWRXb3JrQ3ljbGVzICUgUE9NT0RPUk9fV09SS19DWUNMRVNfQkVGT1JFX0xPTkdfQlJFQUsgPT09IDBcbiAgICA/ICdsb25nLWJyZWFrJ1xuICAgIDogJ3Nob3J0LWJyZWFrJ1xuICBjb25zdCBiYXNlQnJlYWtTZWNvbmRzID0gZ2V0UGhhc2VEdXJhdGlvblNlY29uZHMoc3RhdGUuZHVyYXRpb25zLCBuZXh0UGhhc2UpXG4gIGNvbnN0IHdvcmtEdXJhdGlvblNlY29uZHMgPSBNYXRoLm1heCgxLCBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyhzdGF0ZS5kdXJhdGlvbnMsICd3b3JrJykpXG4gIGNvbnN0IGV4dHJhQnJlYWtTZWNvbmRzID0gTWF0aC5yb3VuZCgob3ZlcnRpbWVTZWNvbmRzICogYmFzZUJyZWFrU2Vjb25kcykgLyB3b3JrRHVyYXRpb25TZWNvbmRzKVxuICBjb25zdCBuZXh0QnJlYWtTZWNvbmRzID0gYmFzZUJyZWFrU2Vjb25kcyArIGV4dHJhQnJlYWtTZWNvbmRzXG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZTogY2xlYXJEZXZpYXRpb24oe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBwaGFzZTogbmV4dFBoYXNlLFxuICAgICAgcnVuU3RhdGU6ICdydW5uaW5nJyxcbiAgICAgIGNvbXBsZXRlZFdvcmtDeWNsZXMsXG4gICAgICByZW1haW5pbmdTZWNvbmRzOiBuZXh0QnJlYWtTZWNvbmRzLFxuICAgICAgZW5kVGltZXN0YW1wOiBub3dNcyArIG5leHRCcmVha1NlY29uZHMgKiAxMDAwLFxuICAgIH0pLFxuICAgIGVsYXBzZWRTZWNvbmRzLFxuICAgIGNvbXBsZXRlZFdvcms6IHRydWUsXG4gICAgb3ZlcnRpbWVTZWNvbmRzLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb21vZG9yb1BoYXNlTGFiZWwocGhhc2U6IFBvbW9kb3JvUGhhc2UpOiBzdHJpbmcge1xuICBpZiAocGhhc2UgPT09ICdzaG9ydC1icmVhaycpXG4gICAgcmV0dXJuICdEZXNjYW5zbyBjb3J0bydcblxuICBpZiAocGhhc2UgPT09ICdsb25nLWJyZWFrJylcbiAgICByZXR1cm4gJ0Rlc2NhbnNvIGxhcmdvJ1xuXG4gIHJldHVybiAnVHJhYmFqbydcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBvbW9kb3JvQ291bnRkb3duKHRvdGFsU2Vjb25kczogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodG90YWxTZWNvbmRzIC8gNjApXG4gIGNvbnN0IHNlY29uZHMgPSB0b3RhbFNlY29uZHMgJSA2MFxuICByZXR1cm4gYCR7U3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJyl9OiR7U3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsICcwJyl9YFxufVxuXG5mdW5jdGlvbiBjbGFtcE1pbnV0ZXModmFsdWU6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJyB8fCAhTnVtYmVyLmlzRmluaXRlKHZhbHVlKSlcbiAgICByZXR1cm4gZmFsbGJhY2tcblxuICByZXR1cm4gTWF0aC5taW4oTUFYX0RVUkFUSU9OX01JTlVURVMsIE1hdGgubWF4KE1JTl9EVVJBVElPTl9NSU5VVEVTLCBNYXRoLnJvdW5kKHZhbHVlKSkpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvbW9kb3JvUGhhc2UodmFsdWU6IHVua25vd24pOiBQb21vZG9yb1BoYXNlIHtcbiAgaWYgKHZhbHVlID09PSAnd29yaycgfHwgdmFsdWUgPT09ICdzaG9ydC1icmVhaycgfHwgdmFsdWUgPT09ICdsb25nLWJyZWFrJylcbiAgICByZXR1cm4gdmFsdWVcblxuICByZXR1cm4gJ3dvcmsnXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvbW9kb3JvUnVuU3RhdGUodmFsdWU6IHVua25vd24pOiBQb21vZG9yb1J1blN0YXRlIHtcbiAgaWYgKHZhbHVlID09PSAnaWRsZScgfHwgdmFsdWUgPT09ICdydW5uaW5nJyB8fCB2YWx1ZSA9PT0gJ3BhdXNlZCcpXG4gICAgcmV0dXJuIHZhbHVlXG5cbiAgcmV0dXJuICdpZGxlJ1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTZWNvbmRzKHZhbHVlOiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgfHwgIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpXG4gICAgcmV0dXJuIGZhbGxiYWNrXG5cbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGguZmxvb3IodmFsdWUpKVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7XG4gIENBTkNFTExFRF9UQVNLX0lOREVYX0JBU0VOQU1FLFxuICBDQU5DRUxMRURfVEFTS1NfRk9MREVSLFxuICBDT01QTEVURURfVEFTS1NfRk9MREVSLFxuICBERUZBVUxUX0JPQVJEX05BTUUsXG4gIEZJTklTSEVEX1RBU0tfSU5ERVhfQkFTRU5BTUUsXG4gIElOREVYX1RBRyxcbiAgTEVHQUNZX0NPTVBMRVRFRF9UQVNLU19GT0xERVIsXG4gIFRBUkVBU19GT0xERVIsXG4gIFRBU0tfSU5ERVhfQkFTRU5BTUUsXG59IGZyb20gJy4uL2NvbnN0YW50cydcblxuY29uc3QgVEFTS19JTkRFWF9GSUxFTkFNRSA9IGAke1RBU0tfSU5ERVhfQkFTRU5BTUV9Lm1kYFxuY29uc3QgVEFTS19JTkRFWF9QQVRIID0gYCR7VEFSRUFTX0ZPTERFUn0vJHtUQVNLX0lOREVYX0ZJTEVOQU1FfWBcbmNvbnN0IEZJTklTSEVEX1RBU0tfSU5ERVhfRklMRU5BTUUgPSBgJHtGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FfS5tZGBcbmNvbnN0IEZJTklTSEVEX1RBU0tfSU5ERVhfUEFUSCA9IGAke0NPTVBMRVRFRF9UQVNLU19GT0xERVJ9LyR7RklOSVNIRURfVEFTS19JTkRFWF9GSUxFTkFNRX1gXG5jb25zdCBDQU5DRUxMRURfVEFTS19JTkRFWF9GSUxFTkFNRSA9IGAke0NBTkNFTExFRF9UQVNLX0lOREVYX0JBU0VOQU1FfS5tZGBcbmNvbnN0IENBTkNFTExFRF9UQVNLX0lOREVYX1BBVEggPSBgJHtDQU5DRUxMRURfVEFTS1NfRk9MREVSfS8ke0NBTkNFTExFRF9UQVNLX0lOREVYX0ZJTEVOQU1FfWBcbmNvbnN0IEJPQVJEX1RBU0tfSU5ERVhfU1VGRklYID0gJ1Rhc2tJbmRleCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuc3VyZVRhc2tJbmRleEZpbGUoYXBwOiBvYnNpZGlhbi5BcHApOiBQcm9taXNlPG9ic2lkaWFuLlRGaWxlIHwgbnVsbD4ge1xuICBjb25zdCBpbmRleEZpbGUgPSBhd2FpdCBlbnN1cmVJbmRleEZpbGUoYXBwLCBUQVJFQVNfRk9MREVSLCBUQVNLX0lOREVYX1BBVEgpXG4gIGlmICghaW5kZXhGaWxlKVxuICAgIHJldHVybiBudWxsXG5cbiAgYXdhaXQgc3luY1Jvb3RUYXNrSW5kZXhMaW5rcyhhcHApXG4gIHJldHVybiBpbmRleEZpbGVcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuc3VyZUZpbmlzaGVkVGFza0luZGV4RmlsZShhcHA6IG9ic2lkaWFuLkFwcCk6IFByb21pc2U8b2JzaWRpYW4uVEZpbGUgfCBudWxsPiB7XG4gIHJldHVybiBlbnN1cmVJbmRleEZpbGUoYXBwLCBDT01QTEVURURfVEFTS1NfRk9MREVSLCBGSU5JU0hFRF9UQVNLX0lOREVYX1BBVEgpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnN1cmVDYW5jZWxsZWRUYXNrSW5kZXhGaWxlKGFwcDogb2JzaWRpYW4uQXBwKTogUHJvbWlzZTxvYnNpZGlhbi5URmlsZSB8IG51bGw+IHtcbiAgcmV0dXJuIGVuc3VyZUluZGV4RmlsZShhcHAsIENBTkNFTExFRF9UQVNLU19GT0xERVIsIENBTkNFTExFRF9UQVNLX0lOREVYX1BBVEgpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBlbmRUYXNrTGlua1RvSW5kZXgoYXBwOiBvYnNpZGlhbi5BcHAsIHRhc2tGaWxlOiBvYnNpZGlhbi5URmlsZSk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBib2FyZE5hbWUgPSByZXNvbHZlQWN0aXZlVGFza0JvYXJkKGFwcCwgdGFza0ZpbGUpXG4gIGNvbnN0IGJvYXJkSW5kZXhQYXRoID0gZ2V0Qm9hcmRUYXNrSW5kZXhQYXRoKGJvYXJkTmFtZSlcbiAgYXdhaXQgYXBwZW5kVGFza0xpbmtUb0luZGV4RmlsZShhcHAsIHRhc2tGaWxlLCBib2FyZEluZGV4UGF0aCwgKCkgPT4gZW5zdXJlQm9hcmRUYXNrSW5kZXhGaWxlKGFwcCwgYm9hcmROYW1lKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcGVuZFRhc2tMaW5rVG9GaW5pc2hlZEluZGV4KGFwcDogb2JzaWRpYW4uQXBwLCB0YXNrRmlsZTogb2JzaWRpYW4uVEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgYXBwZW5kVGFza0xpbmtUb0luZGV4RmlsZShhcHAsIHRhc2tGaWxlLCBGSU5JU0hFRF9UQVNLX0lOREVYX1BBVEgsICgpID0+IGVuc3VyZUZpbmlzaGVkVGFza0luZGV4RmlsZShhcHApKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBwZW5kVGFza0xpbmtUb0NhbmNlbGxlZEluZGV4KGFwcDogb2JzaWRpYW4uQXBwLCB0YXNrRmlsZTogb2JzaWRpYW4uVEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgYXBwZW5kVGFza0xpbmtUb0luZGV4RmlsZShhcHAsIHRhc2tGaWxlLCBDQU5DRUxMRURfVEFTS19JTkRFWF9QQVRILCAoKSA9PiBlbnN1cmVDYW5jZWxsZWRUYXNrSW5kZXhGaWxlKGFwcCkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVUYXNrTGlua0Zyb21JbmRleChhcHA6IG9ic2lkaWFuLkFwcCwgdGFza0ZpbGU6IG9ic2lkaWFuLlRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGJvYXJkTmFtZXMgPSBhd2FpdCBnZXRCb2FyZEZvbGRlck5hbWVzKGFwcClcbiAgZm9yIChjb25zdCBib2FyZE5hbWUgb2YgYm9hcmROYW1lcylcbiAgICBhd2FpdCByZW1vdmVUYXNrTGlua0Zyb21JbmRleEZpbGUoYXBwLCB0YXNrRmlsZSwgZ2V0Qm9hcmRUYXNrSW5kZXhQYXRoKGJvYXJkTmFtZSkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVUYXNrTGlua0Zyb21GaW5pc2hlZEluZGV4KGFwcDogb2JzaWRpYW4uQXBwLCB0YXNrRmlsZTogb2JzaWRpYW4uVEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgcmVtb3ZlVGFza0xpbmtGcm9tSW5kZXhGaWxlKGFwcCwgdGFza0ZpbGUsIEZJTklTSEVEX1RBU0tfSU5ERVhfUEFUSClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZVRhc2tMaW5rRnJvbUNhbmNlbGxlZEluZGV4KGFwcDogb2JzaWRpYW4uQXBwLCB0YXNrRmlsZTogb2JzaWRpYW4uVEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgcmVtb3ZlVGFza0xpbmtGcm9tSW5kZXhGaWxlKGFwcCwgdGFza0ZpbGUsIENBTkNFTExFRF9UQVNLX0lOREVYX1BBVEgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCb2FyZFRhc2tJbmRleEJhc2VuYW1lKGJvYXJkTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUJvYXJkTmFtZShib2FyZE5hbWUpXG4gIHJldHVybiBgJHtub3JtYWxpemVkfSR7Qk9BUkRfVEFTS19JTkRFWF9TVUZGSVh9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm9hcmRUYXNrSW5kZXhQYXRoKGJvYXJkTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUJvYXJkTmFtZShib2FyZE5hbWUpXG4gIGNvbnN0IGZpbGVOYW1lID0gYCR7Z2V0Qm9hcmRUYXNrSW5kZXhCYXNlbmFtZShub3JtYWxpemVkKX0ubWRgXG4gIHJldHVybiBgJHtUQVJFQVNfRk9MREVSfS8ke25vcm1hbGl6ZWR9LyR7ZmlsZU5hbWV9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCb2FyZFRhc2tJbmRleFBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICghcGF0aC5zdGFydHNXaXRoKGAke1RBUkVBU19GT0xERVJ9L2ApIHx8ICFwYXRoLmVuZHNXaXRoKCcubWQnKSlcbiAgICByZXR1cm4gZmFsc2VcblxuICBjb25zdCByZWxhdGl2ZVBhdGggPSBwYXRoLnNsaWNlKGAke1RBUkVBU19GT0xERVJ9L2AubGVuZ3RoKVxuICBjb25zdCBzZWdtZW50cyA9IHJlbGF0aXZlUGF0aC5zcGxpdCgnLycpXG4gIGlmIChzZWdtZW50cy5sZW5ndGggIT09IDIpXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAgY29uc3QgW2JvYXJkTmFtZSwgZmlsZU5hbWVdID0gc2VnbWVudHNcbiAgaWYgKCFib2FyZE5hbWUpXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAgY29uc3QgZXhwZWN0ZWRGaWxlTmFtZSA9IGAke2dldEJvYXJkVGFza0luZGV4QmFzZW5hbWUoYm9hcmROYW1lKX0ubWRgXG4gIHJldHVybiBmaWxlTmFtZSA9PT0gZXhwZWN0ZWRGaWxlTmFtZVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW5zdXJlQm9hcmRUYXNrSW5kZXhGaWxlKGFwcDogb2JzaWRpYW4uQXBwLCBib2FyZE5hbWU6IHN0cmluZyk6IFByb21pc2U8b2JzaWRpYW4uVEZpbGUgfCBudWxsPiB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVCb2FyZE5hbWUoYm9hcmROYW1lKVxuICBjb25zdCBmb2xkZXJQYXRoID0gYCR7VEFSRUFTX0ZPTERFUn0vJHtub3JtYWxpemVkfWBcbiAgY29uc3QgaW5kZXhQYXRoID0gZ2V0Qm9hcmRUYXNrSW5kZXhQYXRoKG5vcm1hbGl6ZWQpXG4gIHJldHVybiBlbnN1cmVJbmRleEZpbGUoYXBwLCBmb2xkZXJQYXRoLCBpbmRleFBhdGgpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzeW5jUm9vdFRhc2tJbmRleExpbmtzKGFwcDogb2JzaWRpYW4uQXBwKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJvb3RJbmRleCA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoVEFTS19JTkRFWF9QQVRIKVxuICBpZiAoIShyb290SW5kZXggaW5zdGFuY2VvZiBvYnNpZGlhbi5URmlsZSkpXG4gICAgcmV0dXJuXG5cbiAgY29uc3QgYm9hcmROYW1lcyA9IGF3YWl0IGdldEJvYXJkRm9sZGVyTmFtZXMoYXBwKVxuICBjb25zdCBsaW5rcyA9IGJvYXJkTmFtZXNcbiAgICAubWFwKGJvYXJkTmFtZSA9PiBgW1ske2JvYXJkTmFtZX0vJHtnZXRCb2FyZFRhc2tJbmRleEJhc2VuYW1lKGJvYXJkTmFtZSl9XV1gKVxuICAgIC5zb3J0KChhLCBiKSA9PiBhLmxvY2FsZUNvbXBhcmUoYikpXG5cbiAgY29uc3QgZGVmYXVsdExpbmsgPSBgW1ske0RFRkFVTFRfQk9BUkRfTkFNRX0vJHtnZXRCb2FyZFRhc2tJbmRleEJhc2VuYW1lKERFRkFVTFRfQk9BUkRfTkFNRSl9XV1gXG4gIGNvbnN0IGZpbmlzaGVkTGluayA9IGBbW2ZpbmlzaGVkLyR7RklOSVNIRURfVEFTS19JTkRFWF9CQVNFTkFNRX1dXWBcbiAgY29uc3QgY2FuY2VsbGVkTGluayA9IGBbW2NhbmNlbGxlZC8ke0NBTkNFTExFRF9UQVNLX0lOREVYX0JBU0VOQU1FfV1dYFxuICBjb25zdCBvcmRlcmVkTGlua3MgPSBbXG4gICAgZGVmYXVsdExpbmssXG4gICAgLi4ubGlua3MuZmlsdGVyKGxpbmsgPT4gbGluayAhPT0gZGVmYXVsdExpbmspLFxuICAgIGZpbmlzaGVkTGluayxcbiAgICBjYW5jZWxsZWRMaW5rLFxuICBdXG4gIGNvbnN0IG5leHRDb250ZW50ID0gYnVpbGRJbmRleENvbnRlbnQob3JkZXJlZExpbmtzKVxuICBjb25zdCBjdXJyZW50Q29udGVudCA9IGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKHJvb3RJbmRleClcbiAgaWYgKGN1cnJlbnRDb250ZW50ID09PSBuZXh0Q29udGVudClcbiAgICByZXR1cm5cblxuICBhd2FpdCBhcHAudmF1bHQubW9kaWZ5KHJvb3RJbmRleCwgbmV4dENvbnRlbnQpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzeW5jQm9hcmRUYXNrSW5kZXhMaW5rcyhhcHA6IG9ic2lkaWFuLkFwcCwgYm9hcmROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3Qgbm9ybWFsaXplZEJvYXJkTmFtZSA9IG5vcm1hbGl6ZUJvYXJkTmFtZShib2FyZE5hbWUpXG4gIGNvbnN0IGJvYXJkRm9sZGVyUHJlZml4ID0gYCR7VEFSRUFTX0ZPTERFUn0vJHtub3JtYWxpemVkQm9hcmROYW1lfS9gXG4gIGNvbnN0IGJvYXJkSW5kZXhQYXRoID0gZ2V0Qm9hcmRUYXNrSW5kZXhQYXRoKG5vcm1hbGl6ZWRCb2FyZE5hbWUpXG4gIGNvbnN0IGJvYXJkSW5kZXggPSBhd2FpdCBlbnN1cmVCb2FyZFRhc2tJbmRleEZpbGUoYXBwLCBub3JtYWxpemVkQm9hcmROYW1lKVxuICBpZiAoIWJvYXJkSW5kZXgpXG4gICAgcmV0dXJuXG5cbiAgY29uc3QgbGlua3MgPSBhcHAudmF1bHRcbiAgICAuZ2V0TWFya2Rvd25GaWxlcygpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUucGF0aC5zdGFydHNXaXRoKGJvYXJkRm9sZGVyUHJlZml4KSlcbiAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5wYXRoICE9PSBib2FyZEluZGV4UGF0aClcbiAgICAuZmlsdGVyKGZpbGUgPT4gIWlzQm9hcmRUYXNrSW5kZXhQYXRoKGZpbGUucGF0aCkpXG4gICAgLm1hcChmaWxlID0+IGBbWyR7ZmlsZS5iYXNlbmFtZX1dXWApXG4gICAgLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSlcblxuICBjb25zdCBuZXh0Q29udGVudCA9IGJ1aWxkSW5kZXhDb250ZW50KGxpbmtzKVxuICBjb25zdCBjdXJyZW50Q29udGVudCA9IGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKGJvYXJkSW5kZXgpXG4gIGlmIChjdXJyZW50Q29udGVudCA9PT0gbmV4dENvbnRlbnQpXG4gICAgcmV0dXJuXG5cbiAgYXdhaXQgYXBwLnZhdWx0Lm1vZGlmeShib2FyZEluZGV4LCBuZXh0Q29udGVudClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNBbGxCb2FyZFRhc2tJbmRleExpbmtzKGFwcDogb2JzaWRpYW4uQXBwKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGJvYXJkTmFtZXMgPSBhd2FpdCBnZXRCb2FyZEZvbGRlck5hbWVzKGFwcClcbiAgZm9yIChjb25zdCBib2FyZE5hbWUgb2YgYm9hcmROYW1lcylcbiAgICBhd2FpdCBzeW5jQm9hcmRUYXNrSW5kZXhMaW5rcyhhcHAsIGJvYXJkTmFtZSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNGaW5pc2hlZFRhc2tJbmRleExpbmtzKGFwcDogb2JzaWRpYW4uQXBwKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IHN5bmNUZXJtaW5hbFRhc2tJbmRleExpbmtzKGFwcCwgQ09NUExFVEVEX1RBU0tTX0ZPTERFUiwgRklOSVNIRURfVEFTS19JTkRFWF9QQVRILCAoKSA9PiBlbnN1cmVGaW5pc2hlZFRhc2tJbmRleEZpbGUoYXBwKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNDYW5jZWxsZWRUYXNrSW5kZXhMaW5rcyhhcHA6IG9ic2lkaWFuLkFwcCk6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBzeW5jVGVybWluYWxUYXNrSW5kZXhMaW5rcyhhcHAsIENBTkNFTExFRF9UQVNLU19GT0xERVIsIENBTkNFTExFRF9UQVNLX0lOREVYX1BBVEgsICgpID0+IGVuc3VyZUNhbmNlbGxlZFRhc2tJbmRleEZpbGUoYXBwKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNBbGxUYXNrSW5kZXhlcyhhcHA6IG9ic2lkaWFuLkFwcCk6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBlbnN1cmVUYXNrSW5kZXhGaWxlKGFwcClcbiAgYXdhaXQgZW5zdXJlRmluaXNoZWRUYXNrSW5kZXhGaWxlKGFwcClcbiAgYXdhaXQgZW5zdXJlQ2FuY2VsbGVkVGFza0luZGV4RmlsZShhcHApXG4gIGF3YWl0IHN5bmNBbGxCb2FyZFRhc2tJbmRleExpbmtzKGFwcClcbiAgYXdhaXQgc3luY0ZpbmlzaGVkVGFza0luZGV4TGlua3MoYXBwKVxuICBhd2FpdCBzeW5jQ2FuY2VsbGVkVGFza0luZGV4TGlua3MoYXBwKVxuICBhd2FpdCBzeW5jUm9vdFRhc2tJbmRleExpbmtzKGFwcClcbn1cblxuYXN5bmMgZnVuY3Rpb24gZW5zdXJlSW5kZXhGaWxlKFxuICBhcHA6IG9ic2lkaWFuLkFwcCxcbiAgZm9sZGVyUGF0aDogc3RyaW5nLFxuICBmaWxlUGF0aDogc3RyaW5nLFxuKTogUHJvbWlzZTxvYnNpZGlhbi5URmlsZSB8IG51bGw+IHtcbiAgY29uc3QgZm9sZGVyID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmb2xkZXJQYXRoKVxuICBpZiAoIShmb2xkZXIgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKSlcbiAgICByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IGV4aXN0aW5nID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmaWxlUGF0aClcbiAgaWYgKGV4aXN0aW5nIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZpbGUpXG4gICAgcmV0dXJuIGV4aXN0aW5nXG5cbiAgaWYgKGV4aXN0aW5nKVxuICAgIHJldHVybiBudWxsXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBpbml0aWFsQ29udGVudCA9IFsnLS0tJywgYHRhZ3M6IFske0lOREVYX1RBR31dYCwgJy0tLScsICcnXS5qb2luKCdcXG4nKVxuICAgIHJldHVybiBhd2FpdCBhcHAudmF1bHQuY3JlYXRlKGZpbGVQYXRoLCBpbml0aWFsQ29udGVudClcbiAgfVxuICBjYXRjaCB7XG4gICAgY29uc3QgcmV0cnkgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZpbGVQYXRoKVxuICAgIHJldHVybiByZXRyeSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGaWxlID8gcmV0cnkgOiBudWxsXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Qm9hcmRGb2xkZXJOYW1lcyhhcHA6IG9ic2lkaWFuLkFwcCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgY29uc3Qgcm9vdEZvbGRlciA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoVEFSRUFTX0ZPTERFUilcbiAgaWYgKCEocm9vdEZvbGRlciBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGb2xkZXIpKVxuICAgIHJldHVybiBbREVGQVVMVF9CT0FSRF9OQU1FXVxuXG4gIGNvbnN0IGJvYXJkTmFtZXMgPSByb290Rm9sZGVyLmNoaWxkcmVuXG4gICAgLmZpbHRlcigoY2hpbGQpOiBjaGlsZCBpcyBvYnNpZGlhbi5URm9sZGVyID0+IGNoaWxkIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZvbGRlcilcbiAgICAubWFwKGZvbGRlciA9PiBmb2xkZXIubmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSlcbiAgICAuZmlsdGVyKG5hbWUgPT4gQm9vbGVhbihuYW1lKVxuICAgICAgJiYgbmFtZSAhPT0gQ09NUExFVEVEX1RBU0tTX0ZPTERFUi5zcGxpdCgnLycpLnBvcCgpXG4gICAgICAmJiBuYW1lICE9PSBDQU5DRUxMRURfVEFTS1NfRk9MREVSLnNwbGl0KCcvJykucG9wKClcbiAgICAgICYmIG5hbWUgIT09IExFR0FDWV9DT01QTEVURURfVEFTS1NfRk9MREVSLnNwbGl0KCcvJykucG9wKCkpXG5cbiAgaWYgKCFib2FyZE5hbWVzLmluY2x1ZGVzKERFRkFVTFRfQk9BUkRfTkFNRSkpXG4gICAgYm9hcmROYW1lcy5wdXNoKERFRkFVTFRfQk9BUkRfTkFNRSlcblxuICByZXR1cm4gYm9hcmROYW1lc1xufVxuXG5hc3luYyBmdW5jdGlvbiBhcHBlbmRUYXNrTGlua1RvSW5kZXhGaWxlKFxuICBhcHA6IG9ic2lkaWFuLkFwcCxcbiAgdGFza0ZpbGU6IG9ic2lkaWFuLlRGaWxlLFxuICBpbmRleFBhdGg6IHN0cmluZyxcbiAgZW5zdXJlSW5kZXg6ICgpID0+IFByb21pc2U8b2JzaWRpYW4uVEZpbGUgfCBudWxsPixcbik6IFByb21pc2U8dm9pZD4ge1xuICBpZiAodGFza0ZpbGUucGF0aCA9PT0gaW5kZXhQYXRoKVxuICAgIHJldHVyblxuXG4gIGNvbnN0IGluZGV4RmlsZSA9IGF3YWl0IGVuc3VyZUluZGV4KClcbiAgaWYgKCFpbmRleEZpbGUpXG4gICAgcmV0dXJuXG5cbiAgY29uc3QgbGlua0xpbmUgPSBgW1ske3Rhc2tGaWxlLmJhc2VuYW1lfV1dYFxuICBjb25zdCBjdXJyZW50ID0gYXdhaXQgYXBwLnZhdWx0LmNhY2hlZFJlYWQoaW5kZXhGaWxlKVxuICBjb25zdCBsaW5lcyA9IGN1cnJlbnQuc3BsaXQoJ1xcbicpLm1hcChsaW5lID0+IGxpbmUudHJpbSgpKS5maWx0ZXIoQm9vbGVhbilcbiAgaWYgKGxpbmVzLmluY2x1ZGVzKGxpbmtMaW5lKSlcbiAgICByZXR1cm5cblxuICBjb25zdCBzZXBhcmF0b3IgPSBjdXJyZW50Lmxlbmd0aCA+IDAgJiYgIWN1cnJlbnQuZW5kc1dpdGgoJ1xcbicpID8gJ1xcbicgOiAnJ1xuICBjb25zdCBuZXh0ID0gYCR7Y3VycmVudH0ke3NlcGFyYXRvcn0ke2xpbmtMaW5lfVxcbmBcbiAgYXdhaXQgYXBwLnZhdWx0Lm1vZGlmeShpbmRleEZpbGUsIG5leHQpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbW92ZVRhc2tMaW5rRnJvbUluZGV4RmlsZShcbiAgYXBwOiBvYnNpZGlhbi5BcHAsXG4gIHRhc2tGaWxlOiBvYnNpZGlhbi5URmlsZSxcbiAgaW5kZXhQYXRoOiBzdHJpbmcsXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKHRhc2tGaWxlLnBhdGggPT09IGluZGV4UGF0aClcbiAgICByZXR1cm5cblxuICBjb25zdCBpbmRleEZpbGUgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGluZGV4UGF0aClcbiAgaWYgKCEoaW5kZXhGaWxlIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZpbGUpKVxuICAgIHJldHVyblxuXG4gIGNvbnN0IGxpbmtMaW5lID0gYFtbJHt0YXNrRmlsZS5iYXNlbmFtZX1dXWBcbiAgY29uc3QgbGluZXMgPSAoYXdhaXQgYXBwLnZhdWx0LmNhY2hlZFJlYWQoaW5kZXhGaWxlKSkuc3BsaXQoJ1xcbicpXG4gIGNvbnN0IGZpbHRlcmVkID0gbGluZXMuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkgIT09IGxpbmtMaW5lKVxuXG4gIGlmIChmaWx0ZXJlZC5sZW5ndGggPT09IGxpbmVzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICBjb25zdCBuZXh0ID0gZmlsdGVyZWQuam9pbignXFxuJylcbiAgYXdhaXQgYXBwLnZhdWx0Lm1vZGlmeShpbmRleEZpbGUsIG5leHQpXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVBY3RpdmVUYXNrQm9hcmQoYXBwOiBvYnNpZGlhbi5BcHAsIHRhc2tGaWxlOiBvYnNpZGlhbi5URmlsZSk6IHN0cmluZyB7XG4gIGNvbnN0IGZyb250bWF0dGVyID0gYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKHRhc2tGaWxlKT8uZnJvbnRtYXR0ZXJcbiAgY29uc3QgcmF3Qm9hcmQgPSB0eXBlb2YgZnJvbnRtYXR0ZXI/LnRhYmxlcm8gPT09ICdzdHJpbmcnXG4gICAgPyBmcm9udG1hdHRlci50YWJsZXJvLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gICAgOiAnJ1xuICBpZiAocmF3Qm9hcmQpXG4gICAgcmV0dXJuIHJhd0JvYXJkXG5cbiAgY29uc3QgcmVsYXRpdmVQYXRoID0gdGFza0ZpbGUucGF0aC5zdGFydHNXaXRoKGAke1RBUkVBU19GT0xERVJ9L2ApXG4gICAgPyB0YXNrRmlsZS5wYXRoLnNsaWNlKGAke1RBUkVBU19GT0xERVJ9L2AubGVuZ3RoKVxuICAgIDogJydcbiAgY29uc3QgYm9hcmRGcm9tUGF0aCA9IHJlbGF0aXZlUGF0aC5zcGxpdCgnLycpWzBdPy50cmltKCkudG9Mb3dlckNhc2UoKSB8fCAnJ1xuICByZXR1cm4gbm9ybWFsaXplQm9hcmROYW1lKGJvYXJkRnJvbVBhdGgpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUJvYXJkTmFtZShib2FyZE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBib2FyZE5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgcmV0dXJuIG5vcm1hbGl6ZWQgfHwgREVGQVVMVF9CT0FSRF9OQU1FXG59XG5cbmZ1bmN0aW9uIGJ1aWxkSW5kZXhDb250ZW50KGxpbmVzOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gIHJldHVybiBbJy0tLScsIGB0YWdzOiBbJHtJTkRFWF9UQUd9XWAsICctLS0nLCAnJywgLi4ubGluZXMsICcnXS5qb2luKCdcXG4nKVxufVxuXG5hc3luYyBmdW5jdGlvbiBzeW5jVGVybWluYWxUYXNrSW5kZXhMaW5rcyhcbiAgYXBwOiBvYnNpZGlhbi5BcHAsXG4gIGZvbGRlclBhdGg6IHN0cmluZyxcbiAgaW5kZXhQYXRoOiBzdHJpbmcsXG4gIGVuc3VyZUluZGV4OiAoKSA9PiBQcm9taXNlPG9ic2lkaWFuLlRGaWxlIHwgbnVsbD4sXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgaW5kZXhGaWxlID0gYXdhaXQgZW5zdXJlSW5kZXgoKVxuICBpZiAoIWluZGV4RmlsZSlcbiAgICByZXR1cm5cblxuICBjb25zdCBsaW5rcyA9IGFwcC52YXVsdFxuICAgIC5nZXRNYXJrZG93bkZpbGVzKClcbiAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5wYXRoLnN0YXJ0c1dpdGgoYCR7Zm9sZGVyUGF0aH0vYCkpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUucGF0aCAhPT0gaW5kZXhQYXRoKVxuICAgIC5tYXAoZmlsZSA9PiBgW1ske2ZpbGUuYmFzZW5hbWV9XV1gKVxuICAgIC5zb3J0KChhLCBiKSA9PiBhLmxvY2FsZUNvbXBhcmUoYikpXG5cbiAgY29uc3QgbmV4dENvbnRlbnQgPSBidWlsZEluZGV4Q29udGVudChsaW5rcylcbiAgY29uc3QgY3VycmVudENvbnRlbnQgPSBhd2FpdCBhcHAudmF1bHQuY2FjaGVkUmVhZChpbmRleEZpbGUpXG4gIGlmIChjdXJyZW50Q29udGVudCA9PT0gbmV4dENvbnRlbnQpXG4gICAgcmV0dXJuXG5cbiAgYXdhaXQgYXBwLnZhdWx0Lm1vZGlmeShpbmRleEZpbGUsIG5leHRDb250ZW50KVxufVxuIiwiaW1wb3J0IHR5cGUgeyBBcHAsIFRGaWxlIH0gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7XG4gIENBTkNFTExFRF9UQVNLX0lOREVYX0JBU0VOQU1FLFxuICBGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FLFxuICBJTkRFWF9UQUcsXG4gIFNVQlRBU0tfVEFHLFxuICBUQVJFQVNfRk9MREVSLFxuICBUQVNLX0lOREVYX0JBU0VOQU1FLFxuICBUQVNLX1RBRyxcbn0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgaXNCb2FyZFRhc2tJbmRleFBhdGggfSBmcm9tICcuL3Rhc2tJbmRleEVuZ2luZSdcbmltcG9ydCB0eXBlIHsgVGFza0Zyb250bWF0dGVyIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyB0b1Rhc2tGcm9udG1hdHRlciB9IGZyb20gJy4uL3V0aWxzL2d1YXJkcydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUZyb250bWF0dGVyKGFwcDogQXBwLCBmaWxlOiBURmlsZSwgdXBkYXRlczogUGFydGlhbDxUYXNrRnJvbnRtYXR0ZXI+KSB7XG4gIGF3YWl0IGFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIoZmlsZSwgKGZtKSA9PiB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModXBkYXRlcykpXG4gICAgICBmbVtrZXldID0gdmFsdWVcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZVRlYW1JblRhc2tzKGFwcDogQXBwLCBvbGROYW1lOiBzdHJpbmcsIG5ld05hbWU6IHN0cmluZywgYm9hcmROYW1lOiBzdHJpbmcpIHtcbiAgY29uc3QgZmlsZXMgPSBhcHAudmF1bHRcbiAgICAuZ2V0TWFya2Rvd25GaWxlcygpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUucGF0aC5zdGFydHNXaXRoKGAke1RBUkVBU19GT0xERVJ9L2ApKVxuXG4gIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgIGNvbnN0IGZtID0gdG9UYXNrRnJvbnRtYXR0ZXIoYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpPy5mcm9udG1hdHRlcilcbiAgICBpZiAoZm0/LmVxdWlwbyAhPT0gb2xkTmFtZSB8fCAoZm0/LnRhYmxlcm8gfHwgJycpLnRyaW0oKS50b0xvd2VyQ2FzZSgpICE9PSBib2FyZE5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCkpXG4gICAgICBjb250aW51ZVxuXG4gICAgYXdhaXQgYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcihmaWxlLCAoZnJvbnRtYXR0ZXIpID0+IHtcbiAgICAgIGZyb250bWF0dGVyLmVxdWlwbyA9IG5ld05hbWVcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3VudFRvcExldmVsVGVhbVRhc2tzKGFwcDogQXBwLCB0ZWFtTmFtZTogc3RyaW5nLCBib2FyZE5hbWU6IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IGZpbGVzID0gYXBwLnZhdWx0XG4gICAgLmdldE1hcmtkb3duRmlsZXMoKVxuICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLnBhdGguc3RhcnRzV2l0aChgJHtUQVJFQVNfRk9MREVSfS9gKSlcblxuICBsZXQgY291bnQgPSAwXG4gIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgIGNvbnN0IGZtID0gdG9UYXNrRnJvbnRtYXR0ZXIoYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpPy5mcm9udG1hdHRlcilcbiAgICBpZiAoZm0/LmVxdWlwbyA9PT0gdGVhbU5hbWVcbiAgICAgICYmIChmbT8udGFibGVybyB8fCAnJykudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT09IGJvYXJkTmFtZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICAgICAgJiYgIWZtPy5wYXJlbnQpXG4gICAgICBjb3VudCsrXG4gIH1cblxuICByZXR1cm4gY291bnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYnVpbGRUYXNrQ2hpbGRMaW5rcyhhcHA6IEFwcCkge1xuICBjb25zdCBmaWxlcyA9IGFwcC52YXVsdFxuICAgIC5nZXRNYXJrZG93bkZpbGVzKClcbiAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5wYXRoLnN0YXJ0c1dpdGgoYCR7VEFSRUFTX0ZPTERFUn0vYCkpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUuYmFzZW5hbWUgIT09IFRBU0tfSU5ERVhfQkFTRU5BTUVcbiAgICAgICYmIGZpbGUuYmFzZW5hbWUgIT09IEZJTklTSEVEX1RBU0tfSU5ERVhfQkFTRU5BTUVcbiAgICAgICYmIGZpbGUuYmFzZW5hbWUgIT09IENBTkNFTExFRF9UQVNLX0lOREVYX0JBU0VOQU1FKVxuXG4gIGNvbnN0IGNoaWxkTWFwID0gbmV3IE1hcDxzdHJpbmcsIFNldDxzdHJpbmc+PigpXG4gIGNvbnN0IHRhc2tFbnRyaWVzOiBBcnJheTx7IGZpbGU6IFRGaWxlLCB0YXNrTmFtZTogc3RyaW5nIH0+ID0gW11cblxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBmbSA9IGF3YWl0IHJlYWRUYXNrRnJvbnRtYXR0ZXIoYXBwLCBmaWxlKVxuICAgIGlmICghZm0pXG4gICAgICBjb250aW51ZVxuXG4gICAgY29uc3QgdGFza05hbWUgPSAoZm0/LnRhcmVhPy50cmltKCkgfHwgZmlsZS5iYXNlbmFtZSkudHJpbSgpXG4gICAgdGFza0VudHJpZXMucHVzaCh7IGZpbGUsIHRhc2tOYW1lIH0pXG5cbiAgICBjb25zdCBwYXJlbnROYW1lID0gbm9ybWFsaXplUGFyZW50UmVmZXJlbmNlKGZtPy5wYXJlbnQpXG4gICAgaWYgKCFwYXJlbnROYW1lKVxuICAgICAgY29udGludWVcblxuICAgIGNvbnN0IGNoaWxkU2V0ID0gY2hpbGRNYXAuZ2V0KHBhcmVudE5hbWUpID8/IG5ldyBTZXQ8c3RyaW5nPigpXG4gICAgY2hpbGRTZXQuYWRkKGZpbGUuYmFzZW5hbWUpXG4gICAgY2hpbGRNYXAuc2V0KHBhcmVudE5hbWUsIGNoaWxkU2V0KVxuICB9XG5cbiAgZm9yIChjb25zdCBlbnRyeSBvZiB0YXNrRW50cmllcykge1xuICAgIGNvbnN0IHsgZmlsZSwgdGFza05hbWUgfSA9IGVudHJ5XG4gICAgY29uc3QgY2hpbGRCYXNlbmFtZXMgPSBuZXcgU2V0PHN0cmluZz4oW1xuICAgICAgLi4uKGNoaWxkTWFwLmdldChmaWxlLmJhc2VuYW1lKSA/PyBbXSksXG4gICAgICAuLi4oY2hpbGRNYXAuZ2V0KHRhc2tOYW1lKSA/PyBbXSksXG4gICAgXSlcbiAgICBjaGlsZEJhc2VuYW1lcy5kZWxldGUoZmlsZS5iYXNlbmFtZSlcblxuICAgIGNvbnN0IG5leHRDaGlsZExpbmtzID0gQXJyYXkuZnJvbShjaGlsZEJhc2VuYW1lcylcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmxvY2FsZUNvbXBhcmUoYikpXG4gICAgICAubWFwKG5hbWUgPT4gYFtbJHtuYW1lfV1dYClcblxuICAgIGF3YWl0IGFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIoZmlsZSwgKGZtKSA9PiB7XG4gICAgICBmbS5jaGlsZHMgPSBuZXh0Q2hpbGRMaW5rc1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNUYXNrVHlwZVRhZ3MoYXBwOiBBcHApIHtcbiAgY29uc3QgZmlsZXMgPSBhcHAudmF1bHRcbiAgICAuZ2V0TWFya2Rvd25GaWxlcygpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUucGF0aC5zdGFydHNXaXRoKGAke1RBUkVBU19GT0xERVJ9L2ApKVxuXG4gIGNvbnN0IGNsYXNzaWZpY2F0aW9uVGFncyA9IG5ldyBTZXQoW0lOREVYX1RBRywgVEFTS19UQUcsIFNVQlRBU0tfVEFHXSlcbiAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgY29uc3QgbmV4dENsYXNzaWZpY2F0aW9uID0gcmVzb2x2ZUNsYXNzaWZpY2F0aW9uVGFnKGZpbGUpXG5cbiAgICBhd2FpdCBhcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKGZpbGUsIChmcm9udG1hdHRlcikgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFRhZ3MgPSBub3JtYWxpemVUYWdzKGZyb250bWF0dGVyLnRhZ3MpXG4gICAgICBjb25zdCBwcmVzZXJ2ZWRUYWdzID0gY3VycmVudFRhZ3MuZmlsdGVyKHRhZyA9PiAhY2xhc3NpZmljYXRpb25UYWdzLmhhcyh0YWcpKVxuICAgICAgZnJvbnRtYXR0ZXIudGFncyA9IFsuLi5wcmVzZXJ2ZWRUYWdzLCBuZXh0Q2xhc3NpZmljYXRpb25dXG4gICAgfSlcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWFkVGFza0Zyb250bWF0dGVyKGFwcDogQXBwLCBmaWxlOiBURmlsZSk6IFByb21pc2U8VGFza0Zyb250bWF0dGVyIHwgbnVsbD4ge1xuICBjb25zdCBjb250ZW50ID0gYXdhaXQgYXBwLnZhdWx0LmNhY2hlZFJlYWQoZmlsZSlcbiAgY29uc3QgbWF0Y2ggPSBjb250ZW50Lm1hdGNoKC9eLS0tXFxyP1xcbihbXFxzXFxTXSo/KVxccj9cXG4tLS0vKVxuICBpZiAoIW1hdGNoKVxuICAgIHJldHVybiBudWxsXG5cbiAgY29uc3QgcmF3WWFtbCA9IG1hdGNoWzFdXG4gIGNvbnN0IGZyb250bWF0dGVyRGF0YSA9IHBhcnNlU2ltcGxlWWFtbChyYXdZYW1sKVxuICByZXR1cm4gdG9UYXNrRnJvbnRtYXR0ZXIoZnJvbnRtYXR0ZXJEYXRhKVxufVxuXG5mdW5jdGlvbiBwYXJzZVNpbXBsZVlhbWwoeWFtbFRleHQ6IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgY29uc3QgcmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9XG4gIGNvbnN0IGxpbmVzID0geWFtbFRleHQuc3BsaXQoL1xccj9cXG4vKVxuICBsZXQgaW5kZXggPSAwXG5cbiAgd2hpbGUgKGluZGV4IDwgbGluZXMubGVuZ3RoKSB7XG4gICAgY29uc3QgbGluZSA9IGxpbmVzW2luZGV4XVxuICAgIGlmICghbGluZS50cmltKCkpIHtcbiAgICAgIGluZGV4KytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3Qga2V5VmFsdWVNYXRjaCA9IGxpbmUubWF0Y2goL14oW0EtWmEtejAtOV8tXSspOlxccyooLiopJC8pXG4gICAgaWYgKCFrZXlWYWx1ZU1hdGNoKSB7XG4gICAgICBpbmRleCsrXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IFssIGtleSwgcmF3VmFsdWVdID0ga2V5VmFsdWVNYXRjaFxuICAgIGNvbnN0IHRyaW1tZWRWYWx1ZSA9IHJhd1ZhbHVlLnRyaW0oKVxuXG4gICAgaWYgKHRyaW1tZWRWYWx1ZSA9PT0gJycpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gJydcbiAgICAgIGluZGV4KytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKHRyaW1tZWRWYWx1ZSA9PT0gJ1tdJykge1xuICAgICAgcmVzdWx0W2tleV0gPSBbXVxuICAgICAgaW5kZXgrK1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAodHJpbW1lZFZhbHVlLnN0YXJ0c1dpdGgoJ1snKSAmJiB0cmltbWVkVmFsdWUuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgY29uc3QgaW5uZXIgPSB0cmltbWVkVmFsdWUuc2xpY2UoMSwgLTEpLnRyaW0oKVxuICAgICAgaWYgKCFpbm5lcikge1xuICAgICAgICByZXN1bHRba2V5XSA9IFtdXG4gICAgICAgIGluZGV4KytcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgcmVzdWx0W2tleV0gPSBpbm5lci5zcGxpdCgnLCcpLm1hcChpdGVtID0+IHVucXVvdGVZYW1sVmFsdWUoaXRlbS50cmltKCkpKVxuICAgICAgaW5kZXgrK1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAodHJpbW1lZFZhbHVlID09PSAnfCcpIHtcbiAgICAgIGNvbnN0IGJsb2NrTGluZXM6IHN0cmluZ1tdID0gW11cbiAgICAgIGluZGV4KytcbiAgICAgIHdoaWxlIChpbmRleCA8IGxpbmVzLmxlbmd0aCAmJiAvXlxccysvLnRlc3QobGluZXNbaW5kZXhdKSkge1xuICAgICAgICBibG9ja0xpbmVzLnB1c2gobGluZXNbaW5kZXhdLnJlcGxhY2UoL15cXHMrLywgJycpKVxuICAgICAgICBpbmRleCsrXG4gICAgICB9XG4gICAgICByZXN1bHRba2V5XSA9IGJsb2NrTGluZXMuam9pbignXFxuJylcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgcmVzdWx0W2tleV0gPSB1bnF1b3RlWWFtbFZhbHVlKHRyaW1tZWRWYWx1ZSlcbiAgICBpbmRleCsrXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIHVucXVvdGVZYW1sVmFsdWUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICh2YWx1ZS5zdGFydHNXaXRoKCdcIicpICYmIHZhbHVlLmVuZHNXaXRoKCdcIicpKVxuICAgIHJldHVybiB2YWx1ZS5zbGljZSgxLCAtMSkucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG5cbiAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoJ1xcJycpICYmIHZhbHVlLmVuZHNXaXRoKCdcXCcnKSlcbiAgICByZXR1cm4gdmFsdWUuc2xpY2UoMSwgLTEpXG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmVudFJlZmVyZW5jZShwYXJlbnRWYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgY29uc3QgdHJpbW1lZCA9IChwYXJlbnRWYWx1ZSB8fCAnJykudHJpbSgpXG4gIGlmICghdHJpbW1lZClcbiAgICByZXR1cm4gJydcblxuICBjb25zdCBsaW5rTWF0Y2ggPSB0cmltbWVkLm1hdGNoKC9eXFxbXFxbKC4rPylcXF1cXF0kLylcbiAgY29uc3QgcmF3UmVmZXJlbmNlID0gKGxpbmtNYXRjaCA/IGxpbmtNYXRjaFsxXSA6IHRyaW1tZWQpLnRyaW0oKVxuICBjb25zdCB3aXRob3V0QWxpYXMgPSByYXdSZWZlcmVuY2Uuc3BsaXQoJ3wnKVswXS50cmltKClcbiAgY29uc3Qgd2l0aG91dEhlYWRpbmcgPSB3aXRob3V0QWxpYXMuc3BsaXQoJyMnKVswXS50cmltKClcbiAgY29uc3QgYmFzZW5hbWUgPSB3aXRob3V0SGVhZGluZy5zcGxpdCgnLycpLnBvcCgpID8/IHdpdGhvdXRIZWFkaW5nXG4gIHJldHVybiBiYXNlbmFtZS5yZXBsYWNlKC9cXC5tZCQvaSwgJycpLnRyaW0oKVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQ2xhc3NpZmljYXRpb25UYWcoZmlsZTogVEZpbGUpOiBzdHJpbmcge1xuICBpZiAoZmlsZS5iYXNlbmFtZSA9PT0gVEFTS19JTkRFWF9CQVNFTkFNRVxuICAgIHx8IGZpbGUuYmFzZW5hbWUgPT09IEZJTklTSEVEX1RBU0tfSU5ERVhfQkFTRU5BTUVcbiAgICB8fCBmaWxlLmJhc2VuYW1lID09PSBDQU5DRUxMRURfVEFTS19JTkRFWF9CQVNFTkFNRVxuICAgIHx8IGlzQm9hcmRUYXNrSW5kZXhQYXRoKGZpbGUucGF0aCkpXG4gICAgcmV0dXJuIElOREVYX1RBR1xuXG4gIGlmIChmaWxlLnBhdGguaW5jbHVkZXMoJy9zdWJUYXNrcy8nKSlcbiAgICByZXR1cm4gU1VCVEFTS19UQUdcblxuICByZXR1cm4gVEFTS19UQUdcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVGFncyh2YWx1ZTogdW5rbm93bik6IHN0cmluZ1tdIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKVxuICAgIHJldHVybiB2YWx1ZS5maWx0ZXIoKGl0ZW0pOiBpdGVtIGlzIHN0cmluZyA9PiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpLm1hcChub3JtYWxpemVUYWdWYWx1ZSkuZmlsdGVyKEJvb2xlYW4pXG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplVGFnVmFsdWUodmFsdWUpXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWQgPyBbbm9ybWFsaXplZF0gOiBbXVxuICB9XG5cbiAgcmV0dXJuIFtdXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVRhZ1ZhbHVlKHRhZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRhZy5yZXBsYWNlKC9eIy8sICcnKS50cmltKClcbn1cbiIsImNvbnN0IEVTVEFET19BTElBU0VTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBjYW5jZWxhZGE6ICdDYW5jZWxhZGEnLFxuICBjYW5jZWxhZG86ICdDYW5jZWxhZGEnLFxuICBkZXNlc3RpbWFkYTogJ0NhbmNlbGFkYScsXG4gIGRlc2VzdGltYWRvOiAnQ2FuY2VsYWRhJyxcbiAgJ2VuIHByb2dyZXNvJzogJ0VuIHByb2dyZXNvJyxcbiAgcGVuZGllbnRlOiAnUGVuZGllbnRlJyxcbiAgZmluYWxpemFkYTogJ0ZpbmFsaXphZGEnLFxuICBmaW5hbGl6YWRvOiAnRmluYWxpemFkYScsXG4gIGNvbXBsZXRhZGE6ICdGaW5hbGl6YWRhJyxcbiAgY29tcGxldGFkbzogJ0ZpbmFsaXphZGEnLFxuICBibG9xdWVhZGE6ICdCbG9xdWVhZGEnLFxuICBibG9xdWVhZG86ICdCbG9xdWVhZGEnLFxuICB1cmdlbnRlOiAnUGVuZGllbnRlJyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUVzdGFkbyh2YWx1ZT86IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghdmFsdWUpXG4gICAgcmV0dXJuICdQZW5kaWVudGUnXG5cbiAgY29uc3Qgbm9ybWFsaXplZCA9IHZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiBFU1RBRE9fQUxJQVNFU1tub3JtYWxpemVkXSA/PyAnUGVuZGllbnRlJ1xufVxuIiwiaW1wb3J0IHR5cGUgeyBBcHAsIFRGaWxlIH0gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7XG4gIERFRkFVTFRfQk9BUkRfTkFNRSxcbiAgQ0FOQ0VMTEVEX1NVQlRBU0tTX0ZPTERFUixcbiAgQ0FOQ0VMTEVEX1RBU0tfSU5ERVhfQkFTRU5BTUUsXG4gIENBTkNFTExFRF9UQVNLU19GT0xERVIsXG4gIENPTVBMRVRFRF9TVUJUQVNLU19GT0xERVIsXG4gIENPTVBMRVRFRF9UQVNLU19GT0xERVIsXG4gIEZJTklTSEVEX1RBU0tfSU5ERVhfQkFTRU5BTUUsXG4gIExFR0FDWV9DT01QTEVURURfVEFTS1NfRk9MREVSLFxuICBTVUJUQVNLX1RBRyxcbiAgVEFTS19JTkRFWF9CQVNFTkFNRSxcbiAgVEFTS19UQUcsXG4gIE9SREVSX1NURVAsXG4gIFRBUkVBU19GT0xERVIsXG59IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB7IGlzQm9hcmRUYXNrSW5kZXhQYXRoIH0gZnJvbSAnLi90YXNrSW5kZXhFbmdpbmUnXG5pbXBvcnQgdHlwZSB7IEVxdWlwbywgVGFza0Zvcm1EYXRhLCBUYXNrRnJvbnRtYXR0ZXIsIFRhc2tJdGVtIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyB0b1Rhc2tGcm9udG1hdHRlciB9IGZyb20gJy4uL3V0aWxzL2d1YXJkcydcbmltcG9ydCB7IG5vcm1hbGl6ZUVzdGFkbyB9IGZyb20gJy4uL3V0aWxzL3N0YXR1cydcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tGaWxlcyhhcHA6IEFwcCkge1xuICByZXR1cm4gYXBwLnZhdWx0XG4gICAgLmdldE1hcmtkb3duRmlsZXMoKVxuICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLnBhdGguc3RhcnRzV2l0aChgJHtUQVJFQVNfRk9MREVSfS9gKSlcbiAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5iYXNlbmFtZSAhPT0gVEFTS19JTkRFWF9CQVNFTkFNRVxuICAgICAgJiYgZmlsZS5iYXNlbmFtZSAhPT0gRklOSVNIRURfVEFTS19JTkRFWF9CQVNFTkFNRVxuICAgICAgJiYgZmlsZS5iYXNlbmFtZSAhPT0gQ0FOQ0VMTEVEX1RBU0tfSU5ERVhfQkFTRU5BTUVcbiAgICAgICYmICFpc0JvYXJkVGFza0luZGV4UGF0aChmaWxlLnBhdGgpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUYXNrSW5GaW5pc2hlZEZvbGRlcihwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGguc3RhcnRzV2l0aChgJHtDT01QTEVURURfVEFTS1NfRk9MREVSfS9gKVxuICAgIHx8IHBhdGguc3RhcnRzV2l0aChgJHtDT01QTEVURURfU1VCVEFTS1NfRk9MREVSfS9gKVxuICAgIHx8IHBhdGguc3RhcnRzV2l0aChgJHtMRUdBQ1lfQ09NUExFVEVEX1RBU0tTX0ZPTERFUn0vYClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGFza0luQ2FuY2VsbGVkRm9sZGVyKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aC5zdGFydHNXaXRoKGAke0NBTkNFTExFRF9UQVNLU19GT0xERVJ9L2ApXG4gICAgfHwgcGF0aC5zdGFydHNXaXRoKGAke0NBTkNFTExFRF9TVUJUQVNLU19GT0xERVJ9L2ApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Rhc2tJbkNvbXBsZXRlZEZvbGRlcihwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzVGFza0luRmluaXNoZWRGb2xkZXIocGF0aCkgfHwgaXNUYXNrSW5DYW5jZWxsZWRGb2xkZXIocGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tzKGFwcDogQXBwKTogVGFza0l0ZW1bXSB7XG4gIGNvbnN0IHRhc2tzOiBUYXNrSXRlbVtdID0gW11cblxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZ2V0VGFza0ZpbGVzKGFwcCkpIHtcbiAgICBjb25zdCBmbSA9IGdldFRhc2tGcm9udG1hdHRlcihhcHAsIGZpbGUpXG4gICAgaWYgKCFmbSlcbiAgICAgIGNvbnRpbnVlXG5cbiAgICB0YXNrcy5wdXNoKHtcbiAgICAgIGZpbGUsXG4gICAgICB0YXJlYTogZm0udGFyZWEgPz8gZmlsZS5iYXNlbmFtZSxcbiAgICAgIGRldGFsbGU6IGZtLmRldGFsbGUgPz8gJycsXG4gICAgICBlc3RhZG86IG5vcm1hbGl6ZUVzdGFkbyhmbS5lc3RhZG8pLFxuICAgICAgZmVjaGFJbmljaW86IGZtLmZlY2hhSW5pY2lvID8/ICcnLFxuICAgICAgZmVjaGFGaW46IGZtLmZlY2hhRmluID8/ICcnLFxuICAgICAgdGFibGVybzogcmVzb2x2ZVRhc2tCb2FyZChmaWxlLnBhdGgsIGZtKSxcbiAgICAgIGVxdWlwbzogZm0uZXF1aXBvID8/ICcnLFxuICAgICAgcHJpb3JpZGFkOiBmbS5wcmlvcmlkYWQgPz8gJycsXG4gICAgICBkZWRpY2FkbzogTnVtYmVyKGZtLmRlZGljYWRvKSB8fCAwLFxuICAgICAgZXN0aW1hY2lvbjogTnVtYmVyKGZtLmVzdGltYWNpb24pIHx8IDAsXG4gICAgICBkZXN2aW86IE51bWJlcihmbS5kZXN2aW8pIHx8IDAsXG4gICAgICBwYXJlbnQ6IG5vcm1hbGl6ZVBhcmVudFRhc2tOYW1lKGZtLnBhcmVudCA/PyAnJyksXG4gICAgICBvcmRlcjogTnVtYmVyKGZtLm9yZGVyKSA/PyA5OTk5OTksXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB0YXNrc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBUb3BMZXZlbFRhc2tzKHRhc2tzOiBUYXNrSXRlbVtdLCBlcXVpcG9zOiBFcXVpcG9bXSkge1xuICBjb25zdCBncm91cHM6IFJlY29yZDxzdHJpbmcsIFRhc2tJdGVtW10+ID0ge31cblxuICBmb3IgKGNvbnN0IGVxdWlwbyBvZiBlcXVpcG9zKVxuICAgIGdyb3Vwc1tlcXVpcG8ubmFtZV0gPSBbXVxuXG4gIGZvciAoY29uc3QgdGFzayBvZiB0YXNrcykge1xuICAgIGlmICh0YXNrLnBhcmVudClcbiAgICAgIGNvbnRpbnVlXG5cbiAgICBjb25zdCBncm91cE5hbWUgPSB0YXNrLmVxdWlwbyB8fCAnU2luIGdydXBvJ1xuICAgIGlmICghZ3JvdXBzW2dyb3VwTmFtZV0pXG4gICAgICBncm91cHNbZ3JvdXBOYW1lXSA9IFtdXG5cbiAgICBncm91cHNbZ3JvdXBOYW1lXS5wdXNoKHRhc2spXG4gIH1cblxuICByZXR1cm4gZ3JvdXBzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFRhc2tDb250ZW50KGRhdGE6IFRhc2tGb3JtRGF0YSwgb3JkZXI6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IHNhZmVUaXRsZSA9IGRhdGEudGFyZWEucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpXG4gIGNvbnN0IHNhZmVEZXRhaWwgPSBkYXRhLmRldGFsbGUucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpXG4gIGNvbnN0IHNhZmVFbmREYXRlID0gZGF0YS5mZWNoYUZpbi5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJylcbiAgY29uc3Qgc2FmZVBhcmVudFRhc2sgPSBkYXRhLnBhcmVudC50cmltKCkucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpXG4gIGNvbnN0IHBhcmVudExpbmsgPSBzYWZlUGFyZW50VGFzayA/IGBbWyR7c2FmZVBhcmVudFRhc2t9XV1gIDogJydcbiAgY29uc3QgdGFza1RhZyA9IHNhZmVQYXJlbnRUYXNrID8gU1VCVEFTS19UQUcgOiBUQVNLX1RBR1xuXG4gIHJldHVybiBbXG4gICAgJy0tLScsXG4gICAgYHRhcmVhOiBcIiR7c2FmZVRpdGxlfVwiYCxcbiAgICBgZGV0YWxsZTogXCIke3NhZmVEZXRhaWx9XCJgLFxuICAgIGBlc3RhZG86IFwiJHtkYXRhLmVzdGFkb31cImAsXG4gICAgJ2ZlY2hhSW5pY2lvOiBcIlwiJyxcbiAgICBgZmVjaGFGaW46IFwiJHtzYWZlRW5kRGF0ZX1cImAsXG4gICAgYHRhYmxlcm86IFwiJHtkYXRhLnRhYmxlcm99XCJgLFxuICAgIGBlcXVpcG86IFwiJHtkYXRhLmVxdWlwb31cImAsXG4gICAgYHByaW9yaWRhZDogXCIke2RhdGEucHJpb3JpZGFkfVwiYCxcbiAgICAnZGVkaWNhZG86IDAnLFxuICAgIGBlc3RpbWFjaW9uOiAke2RhdGEuZXN0aW1hY2lvbn1gLFxuICAgICdkZXN2aW86IDAnLFxuICAgIGBwYXJlbnQ6IFwiJHtwYXJlbnRMaW5rfVwiYCxcbiAgICAnY2hpbGRzOiBbXScsXG4gICAgYHRhZ3M6IFske3Rhc2tUYWd9XWAsXG4gICAgYG9yZGVyOiAke29yZGVyfWAsXG4gICAgJy0tLScsXG4gICAgJycsXG4gICAgZGF0YS5kZXRhbGxlIHx8ICcnLFxuICAgICcnLFxuICBdLmpvaW4oJ1xcbicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlTmV3VGFza09yZGVyKGFwcDogQXBwLCBkYXRhOiBUYXNrRm9ybURhdGEpOiBudW1iZXIge1xuICBjb25zdCBnb2VzVG9wID0gZGF0YS5lc3RhZG8gPT09ICdFbiBwcm9ncmVzbycgfHwgZGF0YS5wcmlvcmlkYWQgPT09ICdVcmdlbnRlJ1xuXG4gIGlmIChkYXRhLnBhcmVudClcbiAgICByZXR1cm4gT1JERVJfU1RFUFxuXG4gIGNvbnN0IHNpYmxpbmdPcmRlcnMgPSBnZXRUYXNrRmlsZXMoYXBwKVxuICAgIC5tYXAoZmlsZSA9PiBnZXRUYXNrRnJvbnRtYXR0ZXIoYXBwLCBmaWxlKSlcbiAgICAuZmlsdGVyKChmbSk6IGZtIGlzIFRhc2tGcm9udG1hdHRlciA9PiBCb29sZWFuKGZtKSlcbiAgICAuZmlsdGVyKChmbSkgPT4ge1xuICAgICAgaWYgKGZtLnBhcmVudClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgIGNvbnN0IGJvYXJkTmFtZSA9IG5vcm1hbGl6ZUJvYXJkTmFtZShmbS50YWJsZXJvIHx8ICcnKVxuICAgICAgY29uc3QgZ3JvdXBOYW1lID0gKGZtLmVxdWlwbyB8fCAnJykudHJpbSgpXG4gICAgICByZXR1cm4gYm9hcmROYW1lID09PSBub3JtYWxpemVCb2FyZE5hbWUoZGF0YS50YWJsZXJvKSAmJiBncm91cE5hbWUgPT09IGRhdGEuZXF1aXBvXG4gICAgfSlcbiAgICAubWFwKGZtID0+IE51bWJlcihmbS5vcmRlcikgfHwgMClcblxuICBpZiAoc2libGluZ09yZGVycy5sZW5ndGggPT09IDApXG4gICAgcmV0dXJuIE9SREVSX1NURVBcblxuICByZXR1cm4gZ29lc1RvcFxuICAgID8gTWF0aC5taW4oLi4uc2libGluZ09yZGVycykgLSBPUkRFUl9TVEVQXG4gICAgOiBNYXRoLm1heCguLi5zaWJsaW5nT3JkZXJzKSArIE9SREVSX1NURVBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVUYXNrUGF0aChhcHA6IEFwcCwgdGFza05hbWU6IHN0cmluZywgYm9hcmROYW1lOiBzdHJpbmcsIHBhcmVudFRhc2tOYW1lID0gJycpOiBzdHJpbmcge1xuICBjb25zdCBmb2xkZXJQYXRoID0gcGFyZW50VGFza05hbWUudHJpbSgpXG4gICAgPyBnZXRCb2FyZFN1YnRhc2tzRm9sZGVyKGJvYXJkTmFtZSlcbiAgICA6IGdldEJvYXJkRm9sZGVyKGJvYXJkTmFtZSlcbiAgY29uc3QgYmFzZVBhdGggPSBgJHtmb2xkZXJQYXRofS8ke3Rhc2tOYW1lfS5tZGBcbiAgaWYgKCFhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGJhc2VQYXRoKSlcbiAgICByZXR1cm4gYmFzZVBhdGhcblxuICByZXR1cm4gYCR7Zm9sZGVyUGF0aH0vJHt0YXNrTmFtZX0gJHtEYXRlLm5vdygpfS5tZGBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvYXJkRm9sZGVyKGJvYXJkTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke1RBUkVBU19GT0xERVJ9LyR7bm9ybWFsaXplQm9hcmROYW1lKGJvYXJkTmFtZSl9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm9hcmRTdWJ0YXNrc0ZvbGRlcihib2FyZE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtnZXRCb2FyZEZvbGRlcihib2FyZE5hbWUpfS9zdWJUYXNrc2Bcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVRhc2tCb2FyZChwYXRoOiBzdHJpbmcsIGZtOiBUYXNrRnJvbnRtYXR0ZXIpOiBzdHJpbmcge1xuICBjb25zdCByYXdGcm9tRnJvbnRtYXR0ZXIgPSAoZm0udGFibGVybyB8fCAnJykudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgaWYgKHJhd0Zyb21Gcm9udG1hdHRlcilcbiAgICByZXR1cm4gcmF3RnJvbUZyb250bWF0dGVyXG5cbiAgY29uc3Qgcm9vdFByZWZpeCA9IGAke1RBUkVBU19GT0xERVJ9L2BcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgocm9vdFByZWZpeCkpXG4gICAgcmV0dXJuIERFRkFVTFRfQk9BUkRfTkFNRVxuXG4gIGNvbnN0IHNlZ21lbnRzID0gcGF0aC5zbGljZShyb290UHJlZml4Lmxlbmd0aCkuc3BsaXQoJy8nKVxuICBjb25zdCBjYW5kaWRhdGUgPSBzZWdtZW50c1swXT8udHJpbSgpLnRvTG93ZXJDYXNlKCkgfHwgJydcbiAgaWYgKCFjYW5kaWRhdGUgfHwgY2FuZGlkYXRlID09PSAnZmluaXNoZWQnIHx8IGNhbmRpZGF0ZSA9PT0gJ2NhbmNlbGxlZCcgfHwgY2FuZGlkYXRlID09PSAnY29tcGxldGFkYXMnKVxuICAgIHJldHVybiBERUZBVUxUX0JPQVJEX05BTUVcblxuICByZXR1cm4gY2FuZGlkYXRlXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUJvYXJkTmFtZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiBub3JtYWxpemVkIHx8IERFRkFVTFRfQk9BUkRfTkFNRVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVRhc2tFbmREYXRlKGZlY2hhRmluOiBzdHJpbmcsIGVzdGltYWNpb246IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IGV4cGxpY2l0RW5kID0gcGFyc2VUYXNrRGF0ZShmZWNoYUZpbilcbiAgaWYgKGV4cGxpY2l0RW5kKVxuICAgIHJldHVybiBleHBsaWNpdEVuZC50b0lTT1N0cmluZygpXG5cbiAgaWYgKGVzdGltYWNpb24gPD0gMClcbiAgICByZXR1cm4gJydcblxuICBjb25zdCBjb21wdXRlZCA9IG5ldyBEYXRlKERhdGUubm93KCkgKyBlc3RpbWFjaW9uICogNjAgKiA2MCAqIDEwMDApXG4gIHJldHVybiBjb21wdXRlZC50b0lTT1N0cmluZygpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRhc2tEYXRlKHZhbHVlOiBzdHJpbmcpOiBEYXRlIHwgbnVsbCB7XG4gIGNvbnN0IHRyaW1tZWQgPSB2YWx1ZS50cmltKClcbiAgaWYgKCF0cmltbWVkKVxuICAgIHJldHVybiBudWxsXG5cbiAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUodHJpbW1lZClcbiAgaWYgKE51bWJlci5pc05hTihwYXJzZWQuZ2V0VGltZSgpKSlcbiAgICByZXR1cm4gbnVsbFxuXG4gIHJldHVybiBwYXJzZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RUYXNrQm9keVByZXZpZXcoY29udGVudDogc3RyaW5nLCBtYXhMZW5ndGggPSAxODApOiBzdHJpbmcge1xuICBsZXQgYm9keSA9IGNvbnRlbnRcblxuICAvLyBSZW1vdmUgWUFNTCBmcm9udG1hdHRlciBibG9jayBpZiBwcmVzZW50LlxuICBib2R5ID0gYm9keS5yZXBsYWNlKC9eLS0tXFxyP1xcbltcXHNcXFNdKj9cXHI/XFxuLS0tXFxyP1xcbj8vLCAnJylcblxuICBjb25zdCBsaW5lcyA9IGJvZHlcbiAgICAuc3BsaXQoL1xccj9cXG4vKVxuICAgIC5tYXAobGluZSA9PiBsaW5lLnRyaW0oKSlcblxuICB3aGlsZSAobGluZXMubGVuZ3RoID4gMCAmJiAhbGluZXNbMF0pXG4gICAgbGluZXMuc2hpZnQoKVxuXG4gIC8vIFJlbW92ZSBsZWFkaW5nIHRpdGxlIGhlYWRpbmcgc28gcHJldmlldyBzdGFydHMgd2l0aCB0aGUgYm9keSB0ZXh0LlxuICBpZiAobGluZXNbMF0/LnN0YXJ0c1dpdGgoJyMgJykpXG4gICAgbGluZXMuc2hpZnQoKVxuXG4gIHdoaWxlIChsaW5lcy5sZW5ndGggPiAwICYmICFsaW5lc1swXSlcbiAgICBsaW5lcy5zaGlmdCgpXG5cbiAgY29uc3Qgbm9ybWFsaXplZCA9IGxpbmVzLmpvaW4oJyAnKS5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpXG4gIGlmICghbm9ybWFsaXplZClcbiAgICByZXR1cm4gJydcblxuICBpZiAobm9ybWFsaXplZC5sZW5ndGggPD0gbWF4TGVuZ3RoKVxuICAgIHJldHVybiBub3JtYWxpemVkXG5cbiAgcmV0dXJuIGAke25vcm1hbGl6ZWQuc2xpY2UoMCwgbWF4TGVuZ3RoIC0gMSkudHJpbUVuZCgpfeKApmBcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGFyZW50VGFza05hbWUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHRyaW1tZWQgPSB2YWx1ZS50cmltKClcbiAgaWYgKCF0cmltbWVkKVxuICAgIHJldHVybiAnJ1xuXG4gIGNvbnN0IGxpbmtNYXRjaCA9IHRyaW1tZWQubWF0Y2goL15cXFtcXFsoLis/KVxcXVxcXSQvKVxuICBjb25zdCByYXdSZWYgPSBsaW5rTWF0Y2ggPyBsaW5rTWF0Y2hbMV0udHJpbSgpIDogdHJpbW1lZFxuICBjb25zdCB3aXRob3V0QWxpYXMgPSByYXdSZWYuc3BsaXQoJ3wnKVswXS50cmltKClcbiAgY29uc3Qgd2l0aG91dEhlYWRpbmcgPSB3aXRob3V0QWxpYXMuc3BsaXQoJyMnKVswXS50cmltKClcbiAgY29uc3QgbGFzdFNlZ21lbnQgPSB3aXRob3V0SGVhZGluZy5zcGxpdCgnLycpLnBvcCgpID8/IHdpdGhvdXRIZWFkaW5nXG5cbiAgcmV0dXJuIGxhc3RTZWdtZW50LnJlcGxhY2UoL1xcLm1kJC9pLCAnJykudHJpbSgpXG59XG5cbmZ1bmN0aW9uIGdldFRhc2tGcm9udG1hdHRlcihhcHA6IEFwcCwgZmlsZTogVEZpbGUpOiBUYXNrRnJvbnRtYXR0ZXIgfCBudWxsIHtcbiAgY29uc3QgcmF3RnJvbnRtYXR0ZXIgPSBhcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk/LmZyb250bWF0dGVyXG4gIHJldHVybiB0b1Rhc2tGcm9udG1hdHRlcihyYXdGcm9udG1hdHRlcilcbn1cbiIsImltcG9ydCB0eXBlIHsgQXBwIH0gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7IGdldFRhc2tzLCBpc1Rhc2tJbkNvbXBsZXRlZEZvbGRlciwgcGFyc2VUYXNrRGF0ZSB9IGZyb20gJy4vdGFza0VuZ2luZSdcbmltcG9ydCB7IHVwZGF0ZUZyb250bWF0dGVyIH0gZnJvbSAnLi9mcm9udG1hdHRlckVuZ2luZSdcblxuY29uc3QgSE9VUl9NUyA9IDYwICogNjAgKiAxMDAwXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWJhbGFuY2VHcm91cEVuZERhdGVzKGFwcDogQXBwLCBib2FyZE5hbWU6IHN0cmluZywgZ3JvdXBOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgdGFza3MgPSBnZXRUYXNrcyhhcHApXG4gICAgLmZpbHRlcih0YXNrID0+ICF0YXNrLnBhcmVudFxuICAgICAgJiYgdGFzay50YWJsZXJvID09PSBib2FyZE5hbWVcbiAgICAgICYmIHRhc2suZXF1aXBvID09PSBncm91cE5hbWVcbiAgICAgICYmICFpc1Rhc2tJbkNvbXBsZXRlZEZvbGRlcih0YXNrLmZpbGUucGF0aCkpXG4gICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKVxuXG4gIGlmICh0YXNrcy5sZW5ndGggPT09IDApXG4gICAgcmV0dXJuXG5cbiAgY29uc3QgZmlyc3RTdGFydCA9IHBhcnNlVGFza0RhdGUodGFza3NbMF0uZmVjaGFJbmljaW8pID8/IG5ldyBEYXRlKClcbiAgbGV0IGN1cnNvciA9IGZpcnN0U3RhcnQuZ2V0VGltZSgpXG5cbiAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tzKSB7XG4gICAgY29uc3QgZXN0aW1hdGVkSG91cnMgPSBOdW1iZXIuaXNGaW5pdGUodGFzay5lc3RpbWFjaW9uKSAmJiB0YXNrLmVzdGltYWNpb24gPiAwXG4gICAgICA/IHRhc2suZXN0aW1hY2lvblxuICAgICAgOiAwXG4gICAgY29uc3QgZGVkaWNhdGVkSG91cnMgPSBOdW1iZXIuaXNGaW5pdGUodGFzay5kZWRpY2FkbykgJiYgdGFzay5kZWRpY2FkbyA+IDBcbiAgICAgID8gdGFzay5kZWRpY2Fkb1xuICAgICAgOiAwXG4gICAgY29uc3QgZXN0aW1hdGVIb3VycyA9IE1hdGgubWF4KGVzdGltYXRlZEhvdXJzLCBkZWRpY2F0ZWRIb3VycylcblxuICAgIGN1cnNvciArPSBlc3RpbWF0ZUhvdXJzICogSE9VUl9NU1xuICAgIGF3YWl0IHVwZGF0ZUZyb250bWF0dGVyKGFwcCwgdGFzay5maWxlLCB7IGZlY2hhRmluOiBuZXcgRGF0ZShjdXJzb3IpLnRvSVNPU3RyaW5nKCkgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplRmlsZW5hbWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvW1xcXFwvOio/XCI8PnwjXltcXF1dL2csICctJykudHJpbSgpXG59XG4iLCJpbXBvcnQgKiBhcyBvYnNpZGlhbiBmcm9tICdvYnNpZGlhbidcblxuaW1wb3J0IHsgRVNUQURPUywgUFJJT1JJREFERVMgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyByZWJ1aWxkVGFza0NoaWxkTGlua3MsIHN5bmNUYXNrVHlwZVRhZ3MgfSBmcm9tICcuLi9lbmdpbmVzL2Zyb250bWF0dGVyRW5naW5lJ1xuaW1wb3J0IHsgcmViYWxhbmNlR3JvdXBFbmREYXRlcyB9IGZyb20gJy4uL2VuZ2luZXMvc2NoZWR1bGVFbmdpbmUnXG5pbXBvcnQgeyBhcHBlbmRUYXNrTGlua1RvSW5kZXggfSBmcm9tICcuLi9lbmdpbmVzL3Rhc2tJbmRleEVuZ2luZSdcbmltcG9ydCB7XG4gIGJ1aWxkVGFza0NvbnRlbnQsXG4gIGdldEJvYXJkRm9sZGVyLFxuICBnZXRCb2FyZFN1YnRhc2tzRm9sZGVyLFxuICByZXNvbHZlTmV3VGFza09yZGVyLFxuICByZXNvbHZlVGFza0VuZERhdGUsXG4gIHJlc29sdmVUYXNrUGF0aCxcbn0gZnJvbSAnLi4vZW5naW5lcy90YXNrRW5naW5lJ1xuaW1wb3J0IHR5cGUgeyBUYXNrRm9ybURhdGEgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IHNhbml0aXplRmlsZW5hbWUgfSBmcm9tICcuLi91dGlscy9zYW5pdGl6ZUZpbGVuYW1lJ1xuaW1wb3J0IHR5cGUgeyBUYXJlYXNQbHVnaW4gfSBmcm9tICcuLi9wbHVnaW4vVGFyZWFzUGx1Z2luJ1xuXG5leHBvcnQgY2xhc3MgTmV3VGFza01vZGFsIGV4dGVuZHMgb2JzaWRpYW4uTW9kYWwge1xuICBwcml2YXRlIHBsdWdpbjogVGFyZWFzUGx1Z2luXG4gIHByaXZhdGUgZGF0YTogVGFza0Zvcm1EYXRhXG5cbiAgY29uc3RydWN0b3IoYXBwOiBvYnNpZGlhbi5BcHAsIHBsdWdpbjogVGFyZWFzUGx1Z2luLCBkZWZhdWx0Qm9hcmQ/OiBzdHJpbmcsIGRlZmF1bHRQYXJlbnQ/OiBzdHJpbmcsIGRlZmF1bHRHcm91cD86IHN0cmluZykge1xuICAgIHN1cGVyKGFwcClcbiAgICBjb25zdCByZXNvbHZlZEJvYXJkID0gZGVmYXVsdEJvYXJkIHx8IHBsdWdpbi50YWJsZXJvc1swXT8ubmFtZSB8fCAnJ1xuICAgIGNvbnN0IGZpcnN0R3JvdXBGb3JCb2FyZCA9IHBsdWdpbi5nZXRFcXVpcG9zRm9yVGFibGVybyhyZXNvbHZlZEJvYXJkKVswXT8ubmFtZSB8fCAnJ1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luXG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgdGFyZWE6ICcnLFxuICAgICAgZGV0YWxsZTogJycsXG4gICAgICBlc3RhZG86ICdQZW5kaWVudGUnLFxuICAgICAgZmVjaGFGaW46ICcnLFxuICAgICAgdGFibGVybzogcmVzb2x2ZWRCb2FyZCxcbiAgICAgIGVxdWlwbzogZGVmYXVsdEdyb3VwIHx8IGZpcnN0R3JvdXBGb3JCb2FyZCxcbiAgICAgIHByaW9yaWRhZDogJ01lZGlhJyxcbiAgICAgIGVzdGltYWNpb246IDAsXG4gICAgICBwYXJlbnQ6IGRlZmF1bHRQYXJlbnQgfHwgJycsXG4gICAgfVxuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzXG4gICAgY29udGVudEVsLmFkZENsYXNzKCd0YXJlYXMtbW9kYWwnKVxuICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdOdWV2YSBUYXJlYScgfSlcblxuICAgIG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZSgnVGFyZWEnKS5hZGRUZXh0KCh0ZXh0KSA9PiB7XG4gICAgICB0ZXh0LnNldFBsYWNlaG9sZGVyKCdOb21icmUgZGUgbGEgdGFyZWEnKVxuICAgICAgdGV4dC5vbkNoYW5nZSh2YWx1ZSA9PiB0aGlzLmRhdGEudGFyZWEgPSB2YWx1ZSlcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGV4dC5pbnB1dEVsLmZvY3VzKCksIDUwKVxuICAgIH0pXG5cbiAgICBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpLnNldE5hbWUoJ0VzdGFkbycpLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT4ge1xuICAgICAgZm9yIChjb25zdCBlc3RhZG8gb2YgRVNUQURPUylcbiAgICAgICAgZHJvcGRvd24uYWRkT3B0aW9uKGVzdGFkbywgZXN0YWRvKVxuXG4gICAgICBkcm9wZG93bi5zZXRWYWx1ZSh0aGlzLmRhdGEuZXN0YWRvKVxuICAgICAgZHJvcGRvd24ub25DaGFuZ2UodmFsdWUgPT4gdGhpcy5kYXRhLmVzdGFkbyA9IHZhbHVlKVxuICAgIH0pXG5cbiAgICBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpXG4gICAgICAuc2V0TmFtZSgnRmVjaGEgZmluJylcbiAgICAgIC5zZXREZXNjKCdPcGNpb25hbC4gU2kgcXVlZGEgdmFjw61hLCBzZSBjYWxjdWxhIGNvbiBsYSBlc3RpbWFjacOzbi4nKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+IHtcbiAgICAgICAgdGV4dC5pbnB1dEVsLnR5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnXG4gICAgICAgIHRleHQuc2V0VmFsdWUodGhpcy5kYXRhLmZlY2hhRmluKVxuICAgICAgICB0ZXh0Lm9uQ2hhbmdlKHZhbHVlID0+IHRoaXMuZGF0YS5mZWNoYUZpbiA9IHZhbHVlKVxuICAgICAgfSlcblxuICAgIGxldCBncm91cERyb3Bkb3duOiBvYnNpZGlhbi5Ecm9wZG93bkNvbXBvbmVudCB8IG51bGwgPSBudWxsXG5cbiAgICBjb25zdCByZWZyZXNoR3JvdXBPcHRpb25zID0gKCkgPT4ge1xuICAgICAgaWYgKCFncm91cERyb3Bkb3duKVxuICAgICAgICByZXR1cm5cblxuICAgICAgY29uc3Qgc2VsZWN0RWwgPSBncm91cERyb3Bkb3duLnNlbGVjdEVsXG4gICAgICB3aGlsZSAoc2VsZWN0RWwub3B0aW9ucy5sZW5ndGggPiAwKVxuICAgICAgICBzZWxlY3RFbC5yZW1vdmUoMClcblxuICAgICAgZ3JvdXBEcm9wZG93bi5hZGRPcHRpb24oJycsICdTaW4gZ3J1cG8nKVxuICAgICAgY29uc3QgZ3JvdXBzID0gdGhpcy5wbHVnaW4uZ2V0RXF1aXBvc0ZvclRhYmxlcm8odGhpcy5kYXRhLnRhYmxlcm8pXG4gICAgICBmb3IgKGNvbnN0IGVxdWlwbyBvZiBncm91cHMpXG4gICAgICAgIGdyb3VwRHJvcGRvd24uYWRkT3B0aW9uKGVxdWlwby5uYW1lLCBlcXVpcG8ubmFtZSlcblxuICAgICAgaWYgKHRoaXMuZGF0YS5lcXVpcG8gJiYgZ3JvdXBzLnNvbWUoZ3JvdXAgPT4gZ3JvdXAubmFtZSA9PT0gdGhpcy5kYXRhLmVxdWlwbykpIHtcbiAgICAgICAgZ3JvdXBEcm9wZG93bi5zZXRWYWx1ZSh0aGlzLmRhdGEuZXF1aXBvKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXRhLmVxdWlwbyA9IGdyb3Vwc1swXT8ubmFtZSB8fCAnJ1xuICAgICAgZ3JvdXBEcm9wZG93bi5zZXRWYWx1ZSh0aGlzLmRhdGEuZXF1aXBvKVxuICAgIH1cblxuICAgIG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZSgnVGFibGVybycpLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT4ge1xuICAgICAgZm9yIChjb25zdCB0YWJsZXJvIG9mIHRoaXMucGx1Z2luLnRhYmxlcm9zKVxuICAgICAgICBkcm9wZG93bi5hZGRPcHRpb24odGFibGVyby5uYW1lLCB0YWJsZXJvLm5hbWUpXG5cbiAgICAgIGRyb3Bkb3duLnNldFZhbHVlKHRoaXMuZGF0YS50YWJsZXJvKVxuICAgICAgZHJvcGRvd24ub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YS50YWJsZXJvID0gdmFsdWVcbiAgICAgICAgcmVmcmVzaEdyb3VwT3B0aW9ucygpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpLnNldE5hbWUoJ0dydXBvJykuYWRkRHJvcGRvd24oKGRyb3Bkb3duKSA9PiB7XG4gICAgICBncm91cERyb3Bkb3duID0gZHJvcGRvd25cbiAgICAgIHJlZnJlc2hHcm91cE9wdGlvbnMoKVxuICAgICAgZHJvcGRvd24ub25DaGFuZ2UodmFsdWUgPT4gdGhpcy5kYXRhLmVxdWlwbyA9IHZhbHVlKVxuICAgIH0pXG5cbiAgICBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpLnNldE5hbWUoJ1ByaW9yaWRhZCcpLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT4ge1xuICAgICAgZm9yIChjb25zdCBwcmlvcmlkYWQgb2YgUFJJT1JJREFERVMpXG4gICAgICAgIGRyb3Bkb3duLmFkZE9wdGlvbihwcmlvcmlkYWQsIHByaW9yaWRhZClcblxuICAgICAgZHJvcGRvd24uc2V0VmFsdWUodGhpcy5kYXRhLnByaW9yaWRhZClcbiAgICAgIGRyb3Bkb3duLm9uQ2hhbmdlKHZhbHVlID0+IHRoaXMuZGF0YS5wcmlvcmlkYWQgPSB2YWx1ZSlcbiAgICB9KVxuXG4gICAgbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKVxuICAgICAgLnNldE5hbWUoJ0VzdGltYWNpw7NuIChob3JhcyknKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+IHtcbiAgICAgICAgdGV4dC5zZXRQbGFjZWhvbGRlcignMCcpXG4gICAgICAgIHRleHQuaW5wdXRFbC50eXBlID0gJ251bWJlcidcbiAgICAgICAgdGV4dC5pbnB1dEVsLm1pbiA9ICcwJ1xuICAgICAgICB0ZXh0LmlucHV0RWwuc3RlcCA9ICcwLjAxJ1xuICAgICAgICB0ZXh0Lm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IE51bWJlci5wYXJzZUZsb2F0KHZhbHVlKVxuICAgICAgICAgIHRoaXMuZGF0YS5lc3RpbWFjaW9uID0gTnVtYmVyLmlzTmFOKHBhcnNlZCkgfHwgcGFyc2VkIDwgMFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IE1hdGgucm91bmQocGFyc2VkICogMTAwKSAvIDEwMFxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgIG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbClcbiAgICAgIC5zZXROYW1lKCdTdWJ0YXJlYSBkZScpXG4gICAgICAuc2V0RGVzYygnRGVqYXIgdmFjw61vIHNpIGVzIHRhcmVhIHByaW5jaXBhbCcpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgICB0ZXh0LnNldFBsYWNlaG9sZGVyKCdOb21icmUgZGUgdGFyZWEgcGFkcmUgKHNpbiAubWQpJylcbiAgICAgICAgdGV4dC5zZXRWYWx1ZSh0aGlzLmRhdGEucGFyZW50KVxuICAgICAgICB0ZXh0Lm9uQ2hhbmdlKHZhbHVlID0+IHRoaXMuZGF0YS5wYXJlbnQgPSB2YWx1ZSlcbiAgICAgIH0pXG5cbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLW1vZGFsLWZvb3RlcicgfSlcblxuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ3JlYXIgdGFyZWEnLCBjbHM6ICdtb2QtY3RhJyB9KVxuICAgIGNyZWF0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jcmVhdGUoKVxuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdDYW5jZWxhcicgfSlcbiAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuY2xvc2UoKVxuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNyZWF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YS50YXJlYS50cmltKCkpIHtcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoJ0VsIG5vbWJyZSBlcyByZXF1ZXJpZG8nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2FuaXRpemVkVGFza05hbWUgPSBzYW5pdGl6ZUZpbGVuYW1lKHRoaXMuZGF0YS50YXJlYSlcbiAgICBjb25zdCB0YXJnZXRGb2xkZXIgPSB0aGlzLmRhdGEucGFyZW50LnRyaW0oKVxuICAgICAgPyBnZXRCb2FyZFN1YnRhc2tzRm9sZGVyKHRoaXMuZGF0YS50YWJsZXJvKVxuICAgICAgOiBnZXRCb2FyZEZvbGRlcih0aGlzLmRhdGEudGFibGVybylcbiAgICBhd2FpdCB0aGlzLmVuc3VyZUZvbGRlclBhdGgodGFyZ2V0Rm9sZGVyKVxuXG4gICAgY29uc3QgcGF0aCA9IHJlc29sdmVUYXNrUGF0aCh0aGlzLmFwcCwgc2FuaXRpemVkVGFza05hbWUsIHRoaXMuZGF0YS50YWJsZXJvLCB0aGlzLmRhdGEucGFyZW50KVxuICAgIGNvbnN0IG9yZGVyID0gcmVzb2x2ZU5ld1Rhc2tPcmRlcih0aGlzLmFwcCwgdGhpcy5kYXRhKVxuICAgIGNvbnN0IGNvbnRlbnQgPSBidWlsZFRhc2tDb250ZW50KFxuICAgICAge1xuICAgICAgICAuLi50aGlzLmRhdGEsXG4gICAgICAgIGZlY2hhRmluOiByZXNvbHZlVGFza0VuZERhdGUodGhpcy5kYXRhLmZlY2hhRmluLCB0aGlzLmRhdGEuZXN0aW1hY2lvbiksXG4gICAgICB9LFxuICAgICAgb3JkZXIsXG4gICAgKVxuXG4gICAgY29uc3QgdGFza0ZpbGUgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGUocGF0aCwgY29udGVudClcbiAgICBhd2FpdCBhcHBlbmRUYXNrTGlua1RvSW5kZXgodGhpcy5hcHAsIHRhc2tGaWxlKVxuICAgIGF3YWl0IHJlYnVpbGRUYXNrQ2hpbGRMaW5rcyh0aGlzLmFwcClcbiAgICBhd2FpdCBzeW5jVGFza1R5cGVUYWdzKHRoaXMuYXBwKVxuICAgIGF3YWl0IHJlYmFsYW5jZUdyb3VwRW5kRGF0ZXModGhpcy5hcHAsIHRoaXMuZGF0YS50YWJsZXJvLCB0aGlzLmRhdGEuZXF1aXBvKVxuICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYFRhcmVhIFwiJHt0aGlzLmRhdGEudGFyZWF9XCIgY3JlYWRhYClcbiAgICB0aGlzLmNsb3NlKClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZW5zdXJlRm9sZGVyUGF0aChwYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKVxuICAgIGlmIChleGlzdGluZyBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGb2xkZXIpXG4gICAgICByZXR1cm5cblxuICAgIGlmIChleGlzdGluZylcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gc2UgcHVkbyBjcmVhciBsYSBjYXJwZXRhIFwiJHtwYXRofVwiIHBvcnF1ZSBleGlzdGUgdW4gYXJjaGl2byBjb24gZXNlIG5vbWJyZWApXG5cbiAgICBjb25zdCBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbilcbiAgICBsZXQgY3VycmVudFBhdGggPSAnJ1xuICAgIGZvciAoY29uc3Qgc2VnbWVudCBvZiBzZWdtZW50cykge1xuICAgICAgY3VycmVudFBhdGggPSBjdXJyZW50UGF0aCA/IGAke2N1cnJlbnRQYXRofS8ke3NlZ21lbnR9YCA6IHNlZ21lbnRcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoY3VycmVudFBhdGgpXG4gICAgICBpZiAoY3VycmVudCBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGb2xkZXIpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICBpZiAoY3VycmVudClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBzZSBwdWRvIGNyZWFyIGxhIGNhcnBldGEgXCIke2N1cnJlbnRQYXRofVwiIHBvcnF1ZSBleGlzdGUgdW4gYXJjaGl2byBjb24gZXNlIG5vbWJyZWApXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihjdXJyZW50UGF0aClcbiAgICAgIH1cbiAgICAgIGNhdGNoIHtcbiAgICAgICAgY29uc3QgcmV0cnkgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoY3VycmVudFBhdGgpXG4gICAgICAgIGlmIChyZXRyeSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGb2xkZXIpXG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHNlIHB1ZG8gY3JlYXIgbGEgY2FycGV0YSBcIiR7Y3VycmVudFBhdGh9XCJgKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgREVGQVVMVF9CT0FSRF9OQU1FLCBERUZBVUxUX0VRVUlQT1MsIERFRkFVTFRfVEFCTEVST1MgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBub3JtYWxpemVQb21vZG9yb1N0YXRlIH0gZnJvbSAnLi4vZW5naW5lcy9wb21vZG9yb0VuZ2luZSdcbmltcG9ydCB0eXBlIHsgRXF1aXBvLCBQb21vZG9yb1N0YXRlIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBpc1JlY29yZCB9IGZyb20gJy4vZ3VhcmRzJ1xuXG5jb25zdCBMRUdBQ1lfRkFMTEJBQ0tfQ09MT1JTID0gWycjZDk3YTFlJywgJyMyZTZkYjAnLCAnIzdjNWNlNycsICcjMDBiODk0JywgJyNlMTcwNTUnLCAnI2ZkNzlhOCddXG5jb25zdCBSRU1PVkVEX0RFRkFVTFRfVEVBTV9OQU1FUyA9IG5ldyBTZXQoWydTZW1hbmFsJywgJ0RpYXJpbycsICdDb21wbGV0YWRhcyddKVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplRXF1aXBvc0Zyb21TZXR0aW5ncyhyYXdEYXRhOiB1bmtub3duKTogRXF1aXBvW10ge1xuICBjb25zdCBlcXVpcG9zID0gZXh0cmFjdEVxdWlwb3MocmF3RGF0YSlcblxuICBpZiAoIWVxdWlwb3MgfHwgZXF1aXBvcy5sZW5ndGggPT09IDApXG4gICAgcmV0dXJuIFsuLi5ERUZBVUxUX0VRVUlQT1NdXG5cbiAgaWYgKGlzU3RyaW5nQXJyYXkoZXF1aXBvcykpIHtcbiAgICBjb25zdCBub3JtYWxpemVkRnJvbUxlZ2FjeSA9IGVxdWlwb3NcbiAgICAgIC5maWx0ZXIobmFtZSA9PiAhUkVNT1ZFRF9ERUZBVUxUX1RFQU1fTkFNRVMuaGFzKG5hbWUpKVxuICAgICAgLm1hcCgobmFtZSwgaW5kZXgpID0+ICh7XG4gICAgICAgIG5hbWU6IG5hbWUudHJpbSgpLFxuICAgICAgICBjb2xvcjogTEVHQUNZX0ZBTExCQUNLX0NPTE9SU1tpbmRleCAlIExFR0FDWV9GQUxMQkFDS19DT0xPUlMubGVuZ3RoXSxcbiAgICAgICAgdGFibGVybzogREVGQVVMVF9CT0FSRF9OQU1FLFxuICAgICAgfSkpXG4gICAgcmV0dXJuIG1lcmdlV2l0aERlZmF1bHRFcXVpcG9zKG5vcm1hbGl6ZWRGcm9tTGVnYWN5KVxuICB9XG5cbiAgY29uc3Qgbm9ybWFsaXplZCA9IGVxdWlwb3NcbiAgICAuZmlsdGVyKGlzRXF1aXBvKVxuICAgIC5tYXAoZXF1aXBvID0+ICh7XG4gICAgICBuYW1lOiBlcXVpcG8ubmFtZS50cmltKCksXG4gICAgICBjb2xvcjogZXF1aXBvLmNvbG9yLFxuICAgICAgdGFibGVybzogKGVxdWlwby50YWJsZXJvIHx8IERFRkFVTFRfQk9BUkRfTkFNRSkudHJpbSgpLnRvTG93ZXJDYXNlKCksXG4gICAgfSkpXG4gICAgLmZpbHRlcihlcXVpcG8gPT4gIVJFTU9WRURfREVGQVVMVF9URUFNX05BTUVTLmhhcyhlcXVpcG8ubmFtZSkpXG4gICAgLmZpbHRlcihlcXVpcG8gPT4gQm9vbGVhbihlcXVpcG8ubmFtZSkpXG5cbiAgaWYgKG5vcm1hbGl6ZWQubGVuZ3RoID09PSAwKVxuICAgIHJldHVybiBbLi4uREVGQVVMVF9FUVVJUE9TXVxuXG4gIHJldHVybiBtZXJnZVdpdGhEZWZhdWx0RXF1aXBvcyhub3JtYWxpemVkKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVGFibGVyb3NGcm9tU2V0dGluZ3MocmF3RGF0YTogdW5rbm93bik6IEVxdWlwb1tdIHtcbiAgbGV0IHRhYmxlcm9zID0gZXh0cmFjdFRhYmxlcm9zKHJhd0RhdGEpXG4gIGlmICgoIXRhYmxlcm9zIHx8IHRhYmxlcm9zLmxlbmd0aCA9PT0gMCkgJiYgc2hvdWxkUmV1c2VFcXVpcG9zQXNCb2FyZHMocmF3RGF0YSkpXG4gICAgdGFibGVyb3MgPSBleHRyYWN0RXF1aXBvcyhyYXdEYXRhKVxuXG4gIGlmICghdGFibGVyb3MgfHwgdGFibGVyb3MubGVuZ3RoID09PSAwKVxuICAgIHJldHVybiBbLi4uREVGQVVMVF9UQUJMRVJPU11cblxuICBpZiAoaXNTdHJpbmdBcnJheSh0YWJsZXJvcykpIHtcbiAgICBjb25zdCBub3JtYWxpemVkID0gdGFibGVyb3NcbiAgICAgIC5tYXAoKG5hbWUsIGluZGV4KSA9PiAoe1xuICAgICAgICBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBjb2xvcjogTEVHQUNZX0ZBTExCQUNLX0NPTE9SU1tpbmRleCAlIExFR0FDWV9GQUxMQkFDS19DT0xPUlMubGVuZ3RoXSxcbiAgICAgIH0pKVxuICAgICAgLmZpbHRlcihib2FyZCA9PiBCb29sZWFuKGJvYXJkLm5hbWUpKVxuICAgIHJldHVybiBtZXJnZVdpdGhEZWZhdWx0VGFibGVyb3Mobm9ybWFsaXplZClcbiAgfVxuXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSB0YWJsZXJvc1xuICAgIC5maWx0ZXIoaXNFcXVpcG8pXG4gICAgLm1hcChib2FyZCA9PiAoeyBuYW1lOiBib2FyZC5uYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvcjogYm9hcmQuY29sb3IgfSkpXG4gICAgLmZpbHRlcihib2FyZCA9PiBCb29sZWFuKGJvYXJkLm5hbWUpKVxuICByZXR1cm4gbWVyZ2VXaXRoRGVmYXVsdFRhYmxlcm9zKG5vcm1hbGl6ZWQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVQb21vZG9yb0Zyb21TZXR0aW5ncyhyYXdEYXRhOiB1bmtub3duKTogUG9tb2Rvcm9TdGF0ZSB7XG4gIGlmICghaXNSZWNvcmQocmF3RGF0YSkpXG4gICAgcmV0dXJuIG5vcm1hbGl6ZVBvbW9kb3JvU3RhdGUobnVsbClcblxuICByZXR1cm4gbm9ybWFsaXplUG9tb2Rvcm9TdGF0ZShyYXdEYXRhLnBvbW9kb3JvKVxufVxuXG5mdW5jdGlvbiBleHRyYWN0RXF1aXBvcyhyYXdEYXRhOiB1bmtub3duKTogdW5rbm93bltdIHwgdW5kZWZpbmVkIHtcbiAgaWYgKCFpc1JlY29yZChyYXdEYXRhKSlcbiAgICByZXR1cm4gdW5kZWZpbmVkXG5cbiAgY29uc3QgZXF1aXBvcyA9IHJhd0RhdGEuZXF1aXBvc1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZXF1aXBvcykpXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuXG4gIHJldHVybiBlcXVpcG9zXG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RUYWJsZXJvcyhyYXdEYXRhOiB1bmtub3duKTogdW5rbm93bltdIHwgdW5kZWZpbmVkIHtcbiAgaWYgKCFpc1JlY29yZChyYXdEYXRhKSlcbiAgICByZXR1cm4gdW5kZWZpbmVkXG5cbiAgY29uc3QgdGFibGVyb3MgPSByYXdEYXRhLnRhYmxlcm9zXG4gIGlmICghQXJyYXkuaXNBcnJheSh0YWJsZXJvcykpXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuXG4gIHJldHVybiB0YWJsZXJvc1xufVxuXG5mdW5jdGlvbiBzaG91bGRSZXVzZUVxdWlwb3NBc0JvYXJkcyhyYXdEYXRhOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIGNvbnN0IGVxdWlwb3MgPSBleHRyYWN0RXF1aXBvcyhyYXdEYXRhKVxuICBpZiAoIWVxdWlwb3MgfHwgZXF1aXBvcy5sZW5ndGggPT09IDApXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKGlzU3RyaW5nQXJyYXkoZXF1aXBvcykpXG4gICAgcmV0dXJuIGVxdWlwb3Muc29tZShuYW1lID0+IG5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT09ICdkZWZhdWx0JylcblxuICBjb25zdCBuYW1lZEVxdWlwb3MgPSBlcXVpcG9zLmZpbHRlcihpc0VxdWlwbylcbiAgcmV0dXJuIG5hbWVkRXF1aXBvcy5zb21lKGl0ZW0gPT4gaXRlbS5uYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSAnZGVmYXVsdCcpXG59XG5cbmZ1bmN0aW9uIGlzRXF1aXBvKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgRXF1aXBvIHtcbiAgaWYgKCFpc1JlY29yZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZS5uYW1lID09PSAnc3RyaW5nJ1xuICAgICYmIHR5cGVvZiB2YWx1ZS5jb2xvciA9PT0gJ3N0cmluZydcbiAgICAmJiAodHlwZW9mIHZhbHVlLnRhYmxlcm8gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB2YWx1ZS50YWJsZXJvID09PSAnc3RyaW5nJylcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmdBcnJheSh2YWx1ZTogdW5rbm93bltdKTogdmFsdWUgaXMgc3RyaW5nW10ge1xuICByZXR1cm4gdmFsdWUuZXZlcnkoaXRlbSA9PiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpXG59XG5cbmZ1bmN0aW9uIG1lcmdlV2l0aERlZmF1bHRFcXVpcG9zKGVxdWlwb3M6IEVxdWlwb1tdKTogRXF1aXBvW10ge1xuICBjb25zdCBkZWZhdWx0c0J5TmFtZSA9IG5ldyBNYXAoREVGQVVMVF9FUVVJUE9TLm1hcChlcXVpcG8gPT4gW2VxdWlwby5uYW1lLCBlcXVpcG9dKSlcbiAgY29uc3Qgbm9ybWFsaXplZEJ5TmFtZSA9IG5ldyBNYXAoZXF1aXBvcy5tYXAoZXF1aXBvID0+IFtlcXVpcG8ubmFtZSwgZXF1aXBvXSkpXG5cbiAgY29uc3Qgd2l0aERlZmF1bHRzID0gREVGQVVMVF9FUVVJUE9TLm1hcCgoZXF1aXBvKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRFcXVpcG8gPSBub3JtYWxpemVkQnlOYW1lLmdldChlcXVpcG8ubmFtZSlcbiAgICByZXR1cm4gc2F2ZWRFcXVpcG8gPyB7IC4uLnNhdmVkRXF1aXBvIH0gOiB7IC4uLmVxdWlwbyB9XG4gIH0pXG5cbiAgY29uc3QgY3VzdG9tRXF1aXBvcyA9IGVxdWlwb3MuZmlsdGVyKGVxdWlwbyA9PiAhZGVmYXVsdHNCeU5hbWUuaGFzKGVxdWlwby5uYW1lKSlcbiAgcmV0dXJuIFsuLi53aXRoRGVmYXVsdHMsIC4uLmN1c3RvbUVxdWlwb3NdXG59XG5cbmZ1bmN0aW9uIG1lcmdlV2l0aERlZmF1bHRUYWJsZXJvcyh0YWJsZXJvczogRXF1aXBvW10pOiBFcXVpcG9bXSB7XG4gIGNvbnN0IGRlZmF1bHRzQnlOYW1lID0gbmV3IE1hcChERUZBVUxUX1RBQkxFUk9TLm1hcChib2FyZCA9PiBbYm9hcmQubmFtZSwgYm9hcmRdKSlcbiAgY29uc3Qgbm9ybWFsaXplZEJ5TmFtZSA9IG5ldyBNYXAodGFibGVyb3MubWFwKGJvYXJkID0+IFtib2FyZC5uYW1lLCBib2FyZF0pKVxuXG4gIGNvbnN0IHdpdGhEZWZhdWx0cyA9IERFRkFVTFRfVEFCTEVST1MubWFwKChib2FyZCkgPT4ge1xuICAgIGNvbnN0IHNhdmVkQm9hcmQgPSBub3JtYWxpemVkQnlOYW1lLmdldChib2FyZC5uYW1lKVxuICAgIHJldHVybiBzYXZlZEJvYXJkID8geyAuLi5zYXZlZEJvYXJkIH0gOiB7IC4uLmJvYXJkIH1cbiAgfSlcblxuICBjb25zdCBjdXN0b21Cb2FyZHMgPSB0YWJsZXJvcy5maWx0ZXIoYm9hcmQgPT4gIWRlZmF1bHRzQnlOYW1lLmhhcyhib2FyZC5uYW1lKSlcbiAgcmV0dXJuIFsuLi53aXRoRGVmYXVsdHMsIC4uLmN1c3RvbUJvYXJkc11cbn1cbiIsImltcG9ydCB0eXBlIHsgQXBwLCBUQWJzdHJhY3RGaWxlLCBURmlsZSwgVEZvbGRlciB9IGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQge1xuICBDQU5DRUxMRURfU1VCVEFTS1NfRk9MREVSLFxuICBDQU5DRUxMRURfVEFTS1NfRk9MREVSLFxuICBDT01QTEVURURfU1VCVEFTS1NfRk9MREVSLFxuICBDT01QTEVURURfVEFTS1NfRk9MREVSLFxuICBERUZBVUxUX0JPQVJEX05BTUUsXG59IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB7IGdldEJvYXJkRm9sZGVyLCBnZXRCb2FyZFN1YnRhc2tzRm9sZGVyIH0gZnJvbSAnLi90YXNrRW5naW5lJ1xuaW1wb3J0IHtcbiAgYXBwZW5kVGFza0xpbmtUb0NhbmNlbGxlZEluZGV4LFxuICBhcHBlbmRUYXNrTGlua1RvRmluaXNoZWRJbmRleCxcbiAgYXBwZW5kVGFza0xpbmtUb0luZGV4LFxuICByZW1vdmVUYXNrTGlua0Zyb21DYW5jZWxsZWRJbmRleCxcbiAgcmVtb3ZlVGFza0xpbmtGcm9tRmluaXNoZWRJbmRleCxcbiAgcmVtb3ZlVGFza0xpbmtGcm9tSW5kZXgsXG59IGZyb20gJy4vdGFza0luZGV4RW5naW5lJ1xuaW1wb3J0IHsgc3luY1Rhc2tUeXBlVGFncyB9IGZyb20gJy4vZnJvbnRtYXR0ZXJFbmdpbmUnXG5pbXBvcnQgeyB0b1Rhc2tGcm9udG1hdHRlciB9IGZyb20gJy4uL3V0aWxzL2d1YXJkcydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1vdmVUYXNrVG9Db21wbGV0ZWRGb2xkZXIoYXBwOiBBcHAsIGZpbGU6IFRGaWxlLCBpc1N1YnRhc2sgPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB0YXJnZXRGb2xkZXIgPSBpc1N1YnRhc2sgPyBDT01QTEVURURfU1VCVEFTS1NfRk9MREVSIDogQ09NUExFVEVEX1RBU0tTX0ZPTERFUlxuICBhd2FpdCBlbnN1cmVGb2xkZXIoYXBwLCB0YXJnZXRGb2xkZXIpXG4gIGNvbnN0IG5leHRQYXRoID0gcmVzb2x2ZVVuaXF1ZVBhdGgoYXBwLCBgJHt0YXJnZXRGb2xkZXJ9LyR7ZmlsZS5uYW1lfWApXG4gIGlmIChuZXh0UGF0aCA9PT0gZmlsZS5wYXRoKVxuICAgIHJldHVyblxuXG4gIGF3YWl0IHJlbW92ZVRhc2tGcm9tQWxsSW5kZXhlcyhhcHAsIGZpbGUpXG4gIGF3YWl0IGFwcC5maWxlTWFuYWdlci5yZW5hbWVGaWxlKGZpbGUsIG5leHRQYXRoKVxuICBhd2FpdCBhcHBlbmRUYXNrTGlua1RvRmluaXNoZWRJbmRleChhcHAsIGZpbGUpXG4gIGF3YWl0IHN5bmNUYXNrVHlwZVRhZ3MoYXBwKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZVRhc2tUb0NhbmNlbGxlZEZvbGRlcihhcHA6IEFwcCwgZmlsZTogVEZpbGUsIGlzU3VidGFzayA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHRhcmdldEZvbGRlciA9IGlzU3VidGFzayA/IENBTkNFTExFRF9TVUJUQVNLU19GT0xERVIgOiBDQU5DRUxMRURfVEFTS1NfRk9MREVSXG4gIGF3YWl0IGVuc3VyZUZvbGRlcihhcHAsIHRhcmdldEZvbGRlcilcbiAgY29uc3QgbmV4dFBhdGggPSByZXNvbHZlVW5pcXVlUGF0aChhcHAsIGAke3RhcmdldEZvbGRlcn0vJHtmaWxlLm5hbWV9YClcbiAgaWYgKG5leHRQYXRoID09PSBmaWxlLnBhdGgpXG4gICAgcmV0dXJuXG5cbiAgYXdhaXQgcmVtb3ZlVGFza0Zyb21BbGxJbmRleGVzKGFwcCwgZmlsZSlcbiAgYXdhaXQgYXBwLmZpbGVNYW5hZ2VyLnJlbmFtZUZpbGUoZmlsZSwgbmV4dFBhdGgpXG4gIGF3YWl0IGFwcGVuZFRhc2tMaW5rVG9DYW5jZWxsZWRJbmRleChhcHAsIGZpbGUpXG4gIGF3YWl0IHN5bmNUYXNrVHlwZVRhZ3MoYXBwKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZVRhc2tUb0FjdGl2ZUZvbGRlcihhcHA6IEFwcCwgZmlsZTogVEZpbGUsIGlzU3VidGFzayA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHRhcmdldEJvYXJkID0gcmVzb2x2ZVRhc2tCb2FyZEZvckZpbGUoYXBwLCBmaWxlKVxuICBjb25zdCB0YXJnZXRGb2xkZXIgPSBpc1N1YnRhc2tcbiAgICA/IGdldEJvYXJkU3VidGFza3NGb2xkZXIodGFyZ2V0Qm9hcmQpXG4gICAgOiBnZXRCb2FyZEZvbGRlcih0YXJnZXRCb2FyZClcbiAgYXdhaXQgZW5zdXJlRm9sZGVyKGFwcCwgdGFyZ2V0Rm9sZGVyKVxuICBjb25zdCBuZXh0UGF0aCA9IHJlc29sdmVVbmlxdWVQYXRoKGFwcCwgYCR7dGFyZ2V0Rm9sZGVyfS8ke2ZpbGUubmFtZX1gKVxuICBpZiAobmV4dFBhdGggPT09IGZpbGUucGF0aClcbiAgICByZXR1cm5cblxuICBhd2FpdCByZW1vdmVUYXNrRnJvbUFsbEluZGV4ZXMoYXBwLCBmaWxlKVxuICBhd2FpdCBhcHAuZmlsZU1hbmFnZXIucmVuYW1lRmlsZShmaWxlLCBuZXh0UGF0aClcbiAgYXdhaXQgYXBwZW5kVGFza0xpbmtUb0luZGV4KGFwcCwgZmlsZSlcbiAgYXdhaXQgc3luY1Rhc2tUeXBlVGFncyhhcHApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbW92ZVRhc2tGcm9tQWxsSW5kZXhlcyhhcHA6IEFwcCwgZmlsZTogVEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgcmVtb3ZlVGFza0xpbmtGcm9tSW5kZXgoYXBwLCBmaWxlKVxuICBhd2FpdCByZW1vdmVUYXNrTGlua0Zyb21GaW5pc2hlZEluZGV4KGFwcCwgZmlsZSlcbiAgYXdhaXQgcmVtb3ZlVGFza0xpbmtGcm9tQ2FuY2VsbGVkSW5kZXgoYXBwLCBmaWxlKVxufVxuXG5mdW5jdGlvbiByZXNvbHZlVGFza0JvYXJkRm9yRmlsZShhcHA6IEFwcCwgZmlsZTogVEZpbGUpOiBzdHJpbmcge1xuICBjb25zdCByYXdGcm9udG1hdHRlciA9IGFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKT8uZnJvbnRtYXR0ZXJcbiAgY29uc3QgZnJvbnRtYXR0ZXIgPSB0b1Rhc2tGcm9udG1hdHRlcihyYXdGcm9udG1hdHRlcilcbiAgY29uc3QgcmF3Qm9hcmQgPSAoZnJvbnRtYXR0ZXI/LnRhYmxlcm8gfHwgJycpLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiByYXdCb2FyZCB8fCBERUZBVUxUX0JPQVJEX05BTUVcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVVuaXF1ZVBhdGgoYXBwOiBBcHAsIGRlc2lyZWRQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBleGlzdGluZyA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZGVzaXJlZFBhdGgpXG4gIGlmICghZXhpc3RpbmcgfHwgZXhpc3RpbmcucGF0aCA9PT0gZGVzaXJlZFBhdGgpXG4gICAgcmV0dXJuIGRlc2lyZWRQYXRoXG5cbiAgY29uc3QgZG90SW5kZXggPSBkZXNpcmVkUGF0aC5sYXN0SW5kZXhPZignLicpXG4gIGNvbnN0IGJhc2UgPSBkb3RJbmRleCA+IDAgPyBkZXNpcmVkUGF0aC5zbGljZSgwLCBkb3RJbmRleCkgOiBkZXNpcmVkUGF0aFxuICBjb25zdCBleHQgPSBkb3RJbmRleCA+IDAgPyBkZXNpcmVkUGF0aC5zbGljZShkb3RJbmRleCkgOiAnJ1xuICByZXR1cm4gYCR7YmFzZX0gJHtEYXRlLm5vdygpfSR7ZXh0fWBcbn1cblxuYXN5bmMgZnVuY3Rpb24gZW5zdXJlRm9sZGVyKGFwcDogQXBwLCBwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3Qgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJykuZmlsdGVyKEJvb2xlYW4pXG4gIGxldCBjdXJyZW50UGF0aCA9ICcnXG4gIGZvciAoY29uc3Qgc2VnbWVudCBvZiBzZWdtZW50cykge1xuICAgIGN1cnJlbnRQYXRoID0gY3VycmVudFBhdGggPyBgJHtjdXJyZW50UGF0aH0vJHtzZWdtZW50fWAgOiBzZWdtZW50XG4gICAgY29uc3QgZXhpc3RpbmcgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGN1cnJlbnRQYXRoKVxuICAgIGlmIChpc0ZvbGRlcihleGlzdGluZykpXG4gICAgICBjb250aW51ZVxuXG4gICAgaWYgKGV4aXN0aW5nKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY3JlYXRlIGZvbGRlciBcIiR7Y3VycmVudFBhdGh9XCIgYmVjYXVzZSBhIGZpbGUgd2l0aCB0aGF0IG5hbWUgZXhpc3RzLmApXG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihjdXJyZW50UGF0aClcbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgY29uc3QgcmV0cnkgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGN1cnJlbnRQYXRoKVxuICAgICAgaWYgKGlzRm9sZGVyKHJldHJ5KSlcbiAgICAgICAgY29udGludWVcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY3JlYXRlIGZvbGRlciBcIiR7Y3VycmVudFBhdGh9XCIuYClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNGb2xkZXIoZmlsZTogVEFic3RyYWN0RmlsZSB8IG51bGwpOiBmaWxlIGlzIFRGb2xkZXIge1xuICByZXR1cm4gZmlsZSAhPT0gbnVsbCAmJiAnY2hpbGRyZW4nIGluIGZpbGVcbn1cbiIsImltcG9ydCB7IE9SREVSX1NURVAgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgdHlwZSB7IFRhc2tJdGVtIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiByZW9yZGVyTGlzdDxUPihpdGVtczogVFtdLCBmcm9tSW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyKTogVFtdIHtcbiAgaWYgKGZyb21JbmRleCA8IDAgfHwgdG9JbmRleCA8IDAgfHwgZnJvbUluZGV4ID09PSB0b0luZGV4KVxuICAgIHJldHVybiBpdGVtc1xuXG4gIGNvbnN0IG5leHQgPSBbLi4uaXRlbXNdXG4gIGNvbnN0IFttb3ZlZF0gPSBuZXh0LnNwbGljZShmcm9tSW5kZXgsIDEpXG4gIG5leHQuc3BsaWNlKHRvSW5kZXgsIDAsIG1vdmVkKVxuICByZXR1cm4gbmV4dFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGVyc2lzdFRhc2tPcmRlcihcbiAgdGFza3M6IFRhc2tJdGVtW10sXG4gIHVwZGF0ZXI6ICh0YXNrOiBUYXNrSXRlbSwgb3JkZXI6IG51bWJlcikgPT4gUHJvbWlzZTx2b2lkPixcbik6IFByb21pc2U8dm9pZD4ge1xuICBmb3IgKGNvbnN0IFtpbmRleCwgdGFza10gb2YgdGFza3MuZW50cmllcygpKVxuICAgIGF3YWl0IHVwZGF0ZXIodGFzaywgKGluZGV4ICsgMSkgKiBPUkRFUl9TVEVQKVxufVxuIiwiaW1wb3J0IHsgVEZpbGUsIFRGb2xkZXIsIHR5cGUgQXBwIH0gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7IFBPTU9ET1JPX0xPR19CQVNFTkFNRSwgVEFSRUFTX0ZPTERFUiB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGludGVyZmFjZSBQb21vZG9yb0xvZ0VudHJ5IHtcbiAgaWQ6IHN0cmluZ1xuICBkYXRlOiBzdHJpbmdcbiAgdGltZTogc3RyaW5nXG4gIHR5cGU6IHN0cmluZ1xuICBkdXJhdGlvbkNob2ljZTogc3RyaW5nXG4gIHRhc2s6IHN0cmluZ1xuICBkdXJhdGlvbk1pbnV0ZXM6IG51bWJlclxuICBkZXZpYXRpb25Ib3VyczogbnVtYmVyXG4gIGZpbmFsaXplZDogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgQXBwZW5kUG9tb2Rvcm9Mb2dFbnRyeUlucHV0IHtcbiAgdGltZXN0YW1wTXM6IG51bWJlclxuICB0eXBlOiBzdHJpbmdcbiAgZHVyYXRpb25DaG9pY2U6IHN0cmluZ1xuICB0YXNrOiBzdHJpbmdcbiAgZHVyYXRpb25NaW51dGVzOiBudW1iZXJcbiAgZGV2aWF0aW9uSG91cnM6IG51bWJlclxuICBmaW5hbGl6ZWQ6IGJvb2xlYW5cbn1cblxuY29uc3QgUE9NT0RPUk9fTE9HX1BBVEggPSBgJHtUQVJFQVNfRk9MREVSfS8ke1BPTU9ET1JPX0xPR19CQVNFTkFNRX0ubWRgXG5jb25zdCBQT01PRE9ST19MT0dfSEVBREVSID0gW1xuICAnIyBSZWdpc3RybyBQb21vZG9ybycsXG4gICcnLFxuICAnfCBmZWNoYSB8IGhvcmFyaW8gfCB0aXBvIGRlIHBvbW9kb3JvIHwgZHVyYWNpb24gZWxlZ2lkYSB8IHRhcmVhIHwgdGllbXBvIHwgZGVzdmlvIHwgZmluYWxpemFjaW9uIHwnLFxuICAnfCAtLS0gfCAtLS0gfCAtLS0gfCAtLS0gfCAtLS0gfCAtLS0gfCAtLS0gfCAtLS0gfCcsXG5dLmpvaW4oJ1xcbicpXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBlbmRQb21vZG9yb0xvZ0VudHJ5KGFwcDogQXBwLCBpbnB1dDogQXBwZW5kUG9tb2Rvcm9Mb2dFbnRyeUlucHV0KSB7XG4gIGF3YWl0IGVuc3VyZVBvbW9kb3JvTG9nRmlsZShhcHApXG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGlucHV0LnRpbWVzdGFtcE1zKVxuICBjb25zdCBkYXRlVGV4dCA9IHRvTG9jYWxEYXRlVGV4dChkYXRlKVxuICBjb25zdCB0aW1lVGV4dCA9IHRvTG9jYWxUaW1lVGV4dChkYXRlKVxuICBjb25zdCB0eXBlVGV4dCA9IHNhbml0aXplUGlwZVRleHQoaW5wdXQudHlwZSlcbiAgY29uc3QgZHVyYXRpb25DaG9pY2VUZXh0ID0gc2FuaXRpemVQaXBlVGV4dChpbnB1dC5kdXJhdGlvbkNob2ljZSlcbiAgY29uc3QgdGFza1RleHQgPSBzYW5pdGl6ZVBpcGVUZXh0KGlucHV0LnRhc2spXG4gIGNvbnN0IGR1cmF0aW9uTWludXRlc1RleHQgPSBmb3JtYXRNaW51dGVzKGlucHV0LmR1cmF0aW9uTWludXRlcylcbiAgY29uc3QgZGV2aWF0aW9uVGV4dCA9IGZvcm1hdEhvdXJzKGlucHV0LmRldmlhdGlvbkhvdXJzKVxuICBjb25zdCBmaW5hbGl6ZWRUZXh0ID0gaW5wdXQuZmluYWxpemVkID8gJ3RydWUnIDogJ2ZhbHNlJ1xuICBjb25zdCByb3cgPSBgfCAke2RhdGVUZXh0fSB8ICR7dGltZVRleHR9IHwgJHt0eXBlVGV4dH0gfCAke2R1cmF0aW9uQ2hvaWNlVGV4dH0gfCAke3Rhc2tUZXh0fSB8ICR7ZHVyYXRpb25NaW51dGVzVGV4dH0gfCAke2RldmlhdGlvblRleHR9IHwgJHtmaW5hbGl6ZWRUZXh0fSB8YFxuXG4gIGNvbnN0IGZpbGUgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKFBPTU9ET1JPX0xPR19QQVRIKVxuICBpZiAoIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKVxuICAgIHJldHVyblxuXG4gIGNvbnN0IGN1cnJlbnQgPSBhd2FpdCBhcHAudmF1bHQuY2FjaGVkUmVhZChmaWxlKVxuICBjb25zdCBuZXh0Q29udGVudCA9IGN1cnJlbnQudHJpbUVuZCgpXG4gICAgPyBgJHtjdXJyZW50LnRyaW1FbmQoKX1cXG4ke3Jvd31cXG5gXG4gICAgOiBgJHtQT01PRE9ST19MT0dfSEVBREVSfVxcbiR7cm93fVxcbmBcbiAgYXdhaXQgYXBwLnZhdWx0Lm1vZGlmeShmaWxlLCBuZXh0Q29udGVudClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYWRQb21vZG9yb0xvZ0VudHJpZXMoYXBwOiBBcHApOiBQcm9taXNlPFBvbW9kb3JvTG9nRW50cnlbXT4ge1xuICBhd2FpdCBlbnN1cmVQb21vZG9yb0xvZ0ZpbGUoYXBwKVxuXG4gIGNvbnN0IGZpbGUgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKFBPTU9ET1JPX0xPR19QQVRIKVxuICBpZiAoIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKVxuICAgIHJldHVybiBbXVxuXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBhcHAudmF1bHQuY2FjaGVkUmVhZChmaWxlKVxuICBjb25zdCBlbnRyaWVzOiBQb21vZG9yb0xvZ0VudHJ5W10gPSBbXVxuXG4gIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdCgvXFxyP1xcbi8pXG4gIGZvciAobGV0IGxpbmVJbmRleCA9IDA7IGxpbmVJbmRleCA8IGxpbmVzLmxlbmd0aDsgbGluZUluZGV4KyspIHtcbiAgICBjb25zdCBsaW5lID0gbGluZXNbbGluZUluZGV4XVxuICAgIGlmICghbGluZS50cmltKCkuc3RhcnRzV2l0aCgnfCcpKVxuICAgICAgY29udGludWVcblxuICAgIGlmIChsaW5lLmluY2x1ZGVzKCdmZWNoYSB8IGhvcmFyaW8gfCB0aXBvIGRlIHBvbW9kb3JvJykpXG4gICAgICBjb250aW51ZVxuXG4gICAgaWYgKGxpbmUuaW5jbHVkZXMoJ3wgLS0tIHwnKSlcbiAgICAgIGNvbnRpbnVlXG5cbiAgICBjb25zdCBjb2x1bW5zID0gbGluZS5zcGxpdCgnfCcpLm1hcChpdGVtID0+IGl0ZW0udHJpbSgpKS5maWx0ZXIoQm9vbGVhbilcbiAgICBpZiAoY29sdW1ucy5sZW5ndGggPCA1KVxuICAgICAgY29udGludWVcblxuICAgIGNvbnN0IGhhc0R1cmF0aW9uQ29sdW1ucyA9IGNvbHVtbnMubGVuZ3RoID49IDdcbiAgICBjb25zdCBoYXNGaW5hbGl6ZWRDb2x1bW4gPSBjb2x1bW5zLmxlbmd0aCA+PSA4XG4gICAgY29uc3QgZHVyYXRpb25DaG9pY2UgPSBoYXNEdXJhdGlvbkNvbHVtbnMgPyBjb2x1bW5zWzNdIDogJy0nXG4gICAgY29uc3QgdGFzayA9IGhhc0R1cmF0aW9uQ29sdW1ucyA/IGNvbHVtbnNbNF0gOiBjb2x1bW5zWzNdXG4gICAgY29uc3QgZHVyYXRpb25NaW51dGVzID0gaGFzRHVyYXRpb25Db2x1bW5zID8gTnVtYmVyLnBhcnNlRmxvYXQoY29sdW1uc1s1XSkgOiAwXG4gICAgY29uc3QgZGV2aWF0aW9uSG91cnMgPSBOdW1iZXIucGFyc2VGbG9hdChoYXNEdXJhdGlvbkNvbHVtbnMgPyBjb2x1bW5zWzZdIDogY29sdW1uc1s0XSlcbiAgICBjb25zdCBmaW5hbGl6ZWRWYWx1ZSA9IGhhc0ZpbmFsaXplZENvbHVtbiA/IGNvbHVtbnNbN10gOiAndHJ1ZSdcblxuICAgIGVudHJpZXMucHVzaCh7XG4gICAgICBpZDogU3RyaW5nKGxpbmVJbmRleCksXG4gICAgICBkYXRlOiBjb2x1bW5zWzBdLFxuICAgICAgdGltZTogY29sdW1uc1sxXSxcbiAgICAgIHR5cGU6IGNvbHVtbnNbMl0sXG4gICAgICBkdXJhdGlvbkNob2ljZSxcbiAgICAgIHRhc2ssXG4gICAgICBkdXJhdGlvbk1pbnV0ZXM6IE51bWJlci5pc05hTihkdXJhdGlvbk1pbnV0ZXMpID8gMCA6IGR1cmF0aW9uTWludXRlcyxcbiAgICAgIGRldmlhdGlvbkhvdXJzOiBOdW1iZXIuaXNOYU4oZGV2aWF0aW9uSG91cnMpID8gMCA6IGRldmlhdGlvbkhvdXJzLFxuICAgICAgZmluYWxpemVkOiBmaW5hbGl6ZWRWYWx1ZS50b0xvd2VyQ2FzZSgpICE9PSAnZmFsc2UnLFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZW50cmllc1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUG9tb2Rvcm9Mb2dFbnRyeShhcHA6IEFwcCwgZW50cnlJZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGF3YWl0IGVuc3VyZVBvbW9kb3JvTG9nRmlsZShhcHApXG5cbiAgY29uc3QgZmlsZSA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoUE9NT0RPUk9fTE9HX1BBVEgpXG4gIGlmICghKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKGZpbGUpXG4gIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdCgvXFxyP1xcbi8pXG4gIGNvbnN0IHRhcmdldEluZGV4ID0gTnVtYmVyLnBhcnNlSW50KGVudHJ5SWQsIDEwKVxuICBpZiAoTnVtYmVyLmlzTmFOKHRhcmdldEluZGV4KSB8fCB0YXJnZXRJbmRleCA8IDAgfHwgdGFyZ2V0SW5kZXggPj0gbGluZXMubGVuZ3RoKVxuICAgIHJldHVybiBmYWxzZVxuXG4gIGNvbnN0IHRhcmdldExpbmUgPSBsaW5lc1t0YXJnZXRJbmRleF0gfHwgJydcbiAgaWYgKCF0YXJnZXRMaW5lLnRyaW0oKS5zdGFydHNXaXRoKCd8JykpXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKHRhcmdldExpbmUuaW5jbHVkZXMoJ2ZlY2hhIHwgaG9yYXJpbyB8IHRpcG8gZGUgcG9tb2Rvcm8nKSB8fCB0YXJnZXRMaW5lLmluY2x1ZGVzKCd8IC0tLSB8JykpXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAgbGluZXMuc3BsaWNlKHRhcmdldEluZGV4LCAxKVxuICBjb25zdCBuZXh0Q29udGVudCA9IGAke2xpbmVzLmpvaW4oJ1xcbicpLnRyaW1FbmQoKX1cXG5gXG4gIGF3YWl0IGFwcC52YXVsdC5tb2RpZnkoZmlsZSwgbmV4dENvbnRlbnQpXG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbnRyaWVzQnlEYXRlKGVudHJpZXM6IFBvbW9kb3JvTG9nRW50cnlbXSwgbG9jYWxEYXRlVGV4dDogc3RyaW5nKTogUG9tb2Rvcm9Mb2dFbnRyeVtdIHtcbiAgcmV0dXJuIGVudHJpZXMuZmlsdGVyKGVudHJ5ID0+IGVudHJ5LmRhdGUgPT09IGxvY2FsRGF0ZVRleHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0xvY2FsRGF0ZVRleHQoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgY29uc3QgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKVxuICBjb25zdCBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJylcbiAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWBcbn1cblxuZnVuY3Rpb24gdG9Mb2NhbFRpbWVUZXh0KGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICBjb25zdCBob3VycyA9IFN0cmluZyhkYXRlLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJylcbiAgY29uc3QgbWludXRlcyA9IFN0cmluZyhkYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKVxuICByZXR1cm4gYCR7aG91cnN9OiR7bWludXRlc31gXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVBvbW9kb3JvTG9nRmlsZShhcHA6IEFwcCkge1xuICBjb25zdCBmb2xkZXIgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKFRBUkVBU19GT0xERVIpXG4gIGlmICghZm9sZGVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFwcC52YXVsdC5jcmVhdGVGb2xkZXIoVEFSRUFTX0ZPTERFUilcbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgY29uc3QgcmV0cnkgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKFRBUkVBU19GT0xERVIpXG4gICAgICBpZiAoIShyZXRyeSBpbnN0YW5jZW9mIFRGb2xkZXIpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHNlIHB1ZG8gY3JlYXIgbGEgY2FycGV0YSBcIiR7VEFSRUFTX0ZPTERFUn1cIi5gKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGV4aXN0aW5nID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChQT01PRE9ST19MT0dfUEFUSClcbiAgaWYgKGV4aXN0aW5nKVxuICAgIHJldHVyblxuXG4gIGF3YWl0IGFwcC52YXVsdC5jcmVhdGUoUE9NT0RPUk9fTE9HX1BBVEgsIGAke1BPTU9ET1JPX0xPR19IRUFERVJ9XFxuYClcbn1cblxuZnVuY3Rpb24gc2FuaXRpemVQaXBlVGV4dCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xcfC9nLCAnLycpLnRyaW0oKSB8fCAnLSdcbn1cblxuZnVuY3Rpb24gZm9ybWF0SG91cnMoaG91cnM6IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiAoTWF0aC5yb3VuZChob3VycyAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMilcbn1cblxuZnVuY3Rpb24gZm9ybWF0TWludXRlcyhtaW51dGVzOiBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gKE1hdGgucm91bmQobWludXRlcyAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMilcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb2xvclBpY2tlcihcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgY29sb3JzOiBzdHJpbmdbXSxcbiAgc2VsZWN0ZWQ6IHN0cmluZyxcbiAgb25DaGFuZ2U6IChuZXh0Q29sb3I6IHN0cmluZykgPT4gdm9pZCxcbikge1xuICBjb25zdCB3cmFwID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jb2xvci1waWNrZXInIH0pXG5cbiAgZm9yIChjb25zdCBjb2xvciBvZiBjb2xvcnMpIHtcbiAgICBjb25zdCBzd2F0Y2ggPSB3cmFwLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICd0YXJlYXMtY29sb3Itc3dhdGNoJyB9KVxuICAgIHN3YXRjaC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3JcblxuICAgIGlmIChjb2xvciA9PT0gc2VsZWN0ZWQpXG4gICAgICBzd2F0Y2guYWRkQ2xhc3MoJ3RhcmVhcy1zd2F0Y2gtc2VsZWN0ZWQnKVxuXG4gICAgc3dhdGNoLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBvbkNoYW5nZShjb2xvcilcbiAgICAgIG1hcmtTZWxlY3RlZCh3cmFwLCBzd2F0Y2gpXG4gICAgICBjdXN0b21JbnB1dC52YWx1ZSA9IGNvbG9yXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY3VzdG9tSW5wdXQgPSB3cmFwLmNyZWF0ZUVsKCdpbnB1dCcpXG4gIGN1c3RvbUlucHV0LnR5cGUgPSAnY29sb3InXG4gIGN1c3RvbUlucHV0LnZhbHVlID0gc2VsZWN0ZWRcbiAgY3VzdG9tSW5wdXQuY2xhc3NOYW1lID0gJ3RhcmVhcy1jb2xvci1pbnB1dCdcbiAgY3VzdG9tSW5wdXQub25pbnB1dCA9ICgpID0+IHtcbiAgICBvbkNoYW5nZShjdXN0b21JbnB1dC52YWx1ZSlcbiAgICBjbGVhclNlbGVjdGVkKHdyYXApXG4gIH1cblxuICByZXR1cm4geyB3cmFwLCBjdXN0b21JbnB1dCB9XG59XG5cbmZ1bmN0aW9uIG1hcmtTZWxlY3RlZCh3cmFwOiBIVE1MRWxlbWVudCwgc2VsZWN0ZWRTd2F0Y2g6IEhUTUxFbGVtZW50KSB7XG4gIGNsZWFyU2VsZWN0ZWQod3JhcClcbiAgc2VsZWN0ZWRTd2F0Y2guYWRkQ2xhc3MoJ3RhcmVhcy1zd2F0Y2gtc2VsZWN0ZWQnKVxufVxuXG5mdW5jdGlvbiBjbGVhclNlbGVjdGVkKHdyYXA6IEhUTUxFbGVtZW50KSB7XG4gIHdyYXBcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy1jb2xvci1zd2F0Y2gnKVxuICAgIC5mb3JFYWNoKHN3YXRjaCA9PiBzd2F0Y2guY2xhc3NMaXN0LnJlbW92ZSgndGFyZWFzLXN3YXRjaC1zZWxlY3RlZCcpKVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7IExPQ0tFRF9FUVVJUE9fTkFNRVMsIFBSRVNFVF9DT0xPUlMgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBjb3VudFRvcExldmVsVGVhbVRhc2tzLCByZW5hbWVUZWFtSW5UYXNrcyB9IGZyb20gJy4uL2VuZ2luZXMvZnJvbnRtYXR0ZXJFbmdpbmUnXG5pbXBvcnQgdHlwZSB7IFRhcmVhc1BsdWdpbiB9IGZyb20gJy4uL3BsdWdpbi9UYXJlYXNQbHVnaW4nXG5pbXBvcnQgdHlwZSB7IEVxdWlwbywgVGFyZWFzVmlld0hhbmRsZSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgY3JlYXRlQ29sb3JQaWNrZXIgfSBmcm9tICcuLi91aS9jb2xvclBpY2tlcidcblxuZXhwb3J0IGNsYXNzIEVkaXRTZWN0aW9uTW9kYWwgZXh0ZW5kcyBvYnNpZGlhbi5Nb2RhbCB7XG4gIHByaXZhdGUgcGx1Z2luOiBUYXJlYXNQbHVnaW5cbiAgcHJpdmF0ZSBlcU9iajogRXF1aXBvXG4gIHByaXZhdGUgYm9hcmROYW1lOiBzdHJpbmdcbiAgcHJpdmF0ZSB2aWV3OiBUYXJlYXNWaWV3SGFuZGxlXG4gIHByaXZhdGUgZGF0YTogeyBuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcgfVxuXG4gIGNvbnN0cnVjdG9yKGFwcDogb2JzaWRpYW4uQXBwLCBwbHVnaW46IFRhcmVhc1BsdWdpbiwgZXFPYmo6IEVxdWlwbywgdmlldzogVGFyZWFzVmlld0hhbmRsZSwgYm9hcmROYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihhcHApXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW5cbiAgICB0aGlzLmVxT2JqID0gZXFPYmpcbiAgICB0aGlzLmJvYXJkTmFtZSA9IGJvYXJkTmFtZVxuICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICB0aGlzLmRhdGEgPSB7IG5hbWU6IGVxT2JqLm5hbWUsIGNvbG9yOiBlcU9iai5jb2xvciB9XG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXNcbiAgICBjb250ZW50RWwuYWRkQ2xhc3MoJ3RhcmVhcy1tb2RhbCcpXG4gICAgY29udGVudEVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ0VkaXRhciBzZWNjacOzbicgfSlcblxuICAgIG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZSgnTm9tYnJlJykuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgdGV4dC5zZXRWYWx1ZSh0aGlzLmRhdGEubmFtZSlcbiAgICAgIHRleHQub25DaGFuZ2UodmFsdWUgPT4gdGhpcy5kYXRhLm5hbWUgPSB2YWx1ZSlcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGV4dC5pbnB1dEVsLmZvY3VzKCksIDUwKVxuICAgIH0pXG5cbiAgICBjb25zdCBjb2xvclNldHRpbmcgPSBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpLnNldE5hbWUoJ0NvbG9yJylcbiAgICBjcmVhdGVDb2xvclBpY2tlcihjb2xvclNldHRpbmcuY29udHJvbEVsLCBQUkVTRVRfQ09MT1JTLCB0aGlzLmRhdGEuY29sb3IsIChuZXh0Q29sb3IpID0+IHtcbiAgICAgIHRoaXMuZGF0YS5jb2xvciA9IG5leHRDb2xvclxuICAgIH0pXG5cbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLW1vZGFsLWZvb3RlcicgfSlcblxuICAgIGlmICghdGhpcy5pc0xvY2tlZFNlY3Rpb24oKSkge1xuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgIHRleHQ6ICdFbGltaW5hciBzZWNjacOzbicsXG4gICAgICAgIGNsczogJ21vZC13YXJuaW5nJyxcbiAgICAgIH0pXG4gICAgICBkZWxldGVCdXR0b24uc3R5bGUubWFyZ2luUmlnaHQgPSAnYXV0bydcbiAgICAgIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jb25maXJtRGVsZXRlKClcbiAgICB9XG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NhbmNlbGFyJyB9KVxuICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jbG9zZSgpXG5cbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdHdWFyZGFyJywgY2xzOiAnbW9kLWN0YScgfSlcbiAgICBzYXZlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLnNhdmUoKVxuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNhdmUoKSB7XG4gICAgY29uc3QgbmV3TmFtZSA9IHRoaXMuZGF0YS5uYW1lLnRyaW0oKVxuICAgIGlmICghbmV3TmFtZSkge1xuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZSgnRWwgbm9tYnJlIGVzIHJlcXVlcmlkbycpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBvbGROYW1lID0gdGhpcy5lcU9iai5uYW1lXG4gICAgaWYgKHRoaXMuaXNMb2NrZWRTZWN0aW9uKCkgJiYgbmV3TmFtZSAhPT0gb2xkTmFtZSkge1xuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShgTGEgc2VjY2nDs24gXCIke29sZE5hbWV9XCIgbm8gcHVlZGUgcmVub21icmFyc2VgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKG5ld05hbWUgIT09IG9sZE5hbWUpXG4gICAgICBhd2FpdCByZW5hbWVUZWFtSW5UYXNrcyh0aGlzLmFwcCwgb2xkTmFtZSwgbmV3TmFtZSwgdGhpcy5ib2FyZE5hbWUpXG5cbiAgICB0aGlzLnBsdWdpbi51cGRhdGVFcXVpcG8ob2xkTmFtZSwgdGhpcy5ib2FyZE5hbWUsIHsgbmFtZTogbmV3TmFtZSwgY29sb3I6IHRoaXMuZGF0YS5jb2xvciB9KVxuICAgIHRoaXMudmlldy5leHBhbmRlZEdyb3Vwcy5kZWxldGUoYCR7dGhpcy5ib2FyZE5hbWV9Ojoke29sZE5hbWV9YClcbiAgICB0aGlzLnZpZXcuZXhwYW5kZWRHcm91cHMuYWRkKGAke3RoaXMuYm9hcmROYW1lfTo6JHtuZXdOYW1lfWApXG4gICAgdGhpcy52aWV3LnJlbmRlcigpXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cblxuICBwcml2YXRlIGNvbmZpcm1EZWxldGUoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2NrZWRTZWN0aW9uKCkpIHtcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYExhIHNlY2Npw7NuIFwiJHt0aGlzLmVxT2JqLm5hbWV9XCIgbm8gc2UgcHVlZGUgZWxpbWluYXJgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGFza0NvdW50ID0gY291bnRUb3BMZXZlbFRlYW1UYXNrcyh0aGlzLmFwcCwgdGhpcy5lcU9iai5uYW1lLCB0aGlzLmJvYXJkTmFtZSlcbiAgICBpZiAodGFza0NvdW50ID4gMCkge1xuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShgTGEgc2VjY2nDs24gXCIke3RoaXMuZXFPYmoubmFtZX1cIiB0aWVuZSAke3Rhc2tDb3VudH0gdGFyZWEocykuIE1vdmFsYXMgYSBvdHJhIHNlY2Npw7NuIGFudGVzIGRlIGVsaW1pbmFyLmApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnBsdWdpbi5yZW1vdmVFcXVpcG8odGhpcy5lcU9iai5uYW1lLCB0aGlzLmJvYXJkTmFtZSlcbiAgICB0aGlzLnZpZXcuZXhwYW5kZWRHcm91cHMuZGVsZXRlKGAke3RoaXMuYm9hcmROYW1lfTo6JHt0aGlzLmVxT2JqLm5hbWV9YClcbiAgICB0aGlzLnZpZXcucmVuZGVyKClcbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBTZWNjacOzbiBcIiR7dGhpcy5lcU9iai5uYW1lfVwiIGVsaW1pbmFkYWApXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cblxuICBwcml2YXRlIGlzTG9ja2VkU2VjdGlvbigpIHtcbiAgICByZXR1cm4gTE9DS0VEX0VRVUlQT19OQU1FUy5pbmNsdWRlcyh0aGlzLmVxT2JqLm5hbWUpXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQgeyBERUZBVUxUX0JPQVJEX05BTUUsIFBSRVNFVF9DT0xPUlMgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgdHlwZSB7IFRhcmVhc1BsdWdpbiB9IGZyb20gJy4uL3BsdWdpbi9UYXJlYXNQbHVnaW4nXG5pbXBvcnQgdHlwZSB7IFRhcmVhc1ZpZXdIYW5kbGUgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IGNyZWF0ZUNvbG9yUGlja2VyIH0gZnJvbSAnLi4vdWkvY29sb3JQaWNrZXInXG5cbmV4cG9ydCBjbGFzcyBFZGl0Qm9hcmRNb2RhbCBleHRlbmRzIG9ic2lkaWFuLk1vZGFsIHtcbiAgcHJpdmF0ZSBwbHVnaW46IFRhcmVhc1BsdWdpblxuICBwcml2YXRlIHZpZXc6IFRhcmVhc1ZpZXdIYW5kbGVcbiAgcHJpdmF0ZSBib2FyZE5hbWU6IHN0cmluZ1xuICBwcml2YXRlIGRhdGE6IHsgbmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBhcHA6IG9ic2lkaWFuLkFwcCxcbiAgICBwbHVnaW46IFRhcmVhc1BsdWdpbixcbiAgICB2aWV3OiBUYXJlYXNWaWV3SGFuZGxlLFxuICAgIGJvYXJkOiB7IG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyB9LFxuICApIHtcbiAgICBzdXBlcihhcHApXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW5cbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy5ib2FyZE5hbWUgPSBib2FyZC5uYW1lXG4gICAgdGhpcy5kYXRhID0geyBuYW1lOiBib2FyZC5uYW1lLCBjb2xvcjogYm9hcmQuY29sb3IgfVxuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzXG4gICAgY29uc3QgaXNEZWZhdWx0Qm9hcmQgPSB0aGlzLmJvYXJkTmFtZSA9PT0gREVGQVVMVF9CT0FSRF9OQU1FXG5cbiAgICBjb250ZW50RWwuYWRkQ2xhc3MoJ3RhcmVhcy1tb2RhbCcpXG4gICAgY29udGVudEVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ0VkaXRhciB0YWJsZXJvJyB9KVxuXG4gICAgbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKS5zZXROYW1lKCdOb21icmUgZGVsIHRhYmxlcm8nKS5hZGRUZXh0KCh0ZXh0KSA9PiB7XG4gICAgICB0ZXh0LnNldFZhbHVlKHRoaXMuZGF0YS5uYW1lKVxuICAgICAgdGV4dC5vbkNoYW5nZSh2YWx1ZSA9PiB0aGlzLmRhdGEubmFtZSA9IHZhbHVlKVxuICAgICAgdGV4dC5zZXREaXNhYmxlZChpc0RlZmF1bHRCb2FyZClcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGV4dC5pbnB1dEVsLmZvY3VzKCksIDUwKVxuICAgIH0pXG5cbiAgICBpZiAoaXNEZWZhdWx0Qm9hcmQpIHtcbiAgICAgIGNvbnN0IG5vdGUgPSBjb250ZW50RWwuY3JlYXRlRWwoJ3AnKVxuICAgICAgbm90ZS5hZGRDbGFzcygnc2V0dGluZy1pdGVtLWRlc2NyaXB0aW9uJylcbiAgICAgIG5vdGUuc2V0VGV4dCgnRWwgdGFibGVybyBcImRlZmF1bHRcIiBubyBwdWVkZSBlZGl0YXJzZS4nKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbG9yU2V0dGluZyA9IG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZSgnQ29sb3InKVxuICAgIGNyZWF0ZUNvbG9yUGlja2VyKGNvbG9yU2V0dGluZy5jb250cm9sRWwsIFBSRVNFVF9DT0xPUlMsIHRoaXMuZGF0YS5jb2xvciwgKG5leHRDb2xvcikgPT4ge1xuICAgICAgdGhpcy5kYXRhLmNvbG9yID0gbmV4dENvbG9yXG4gICAgfSlcblxuICAgIGNvbnN0IGZvb3RlciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtbW9kYWwtZm9vdGVyJyB9KVxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ2FuY2VsYXInIH0pXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlKClcblxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0d1YXJkYXInLCBjbHM6ICdtb2QtY3RhJyB9KVxuICAgIHNhdmVCdXR0b24ub25jbGljayA9ICgpID0+IHZvaWQgdGhpcy5zYXZlKClcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzYXZlKCkge1xuICAgIGNvbnN0IG5leHROYW1lID0gdGhpcy5kYXRhLm5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoIW5leHROYW1lKSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdFbCBub21icmUgZXMgcmVxdWVyaWRvJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucGx1Z2luLmVkaXRUYWJsZXJvKHRoaXMuYm9hcmROYW1lLCB7XG4gICAgICBuYW1lOiBuZXh0TmFtZSxcbiAgICAgIGNvbG9yOiB0aGlzLmRhdGEuY29sb3IsXG4gICAgfSlcbiAgICBpZiAoIXJlc3VsdC5vaykge1xuICAgICAgY29uc3QgbWVzc2FnZUJ5RXJyb3I6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgICAgICdpbnZhbGlkLW5hbWUnOiAnRWwgbm9tYnJlIGRlbCB0YWJsZXJvIG5vIGVzIHbDoWxpZG8uJyxcbiAgICAgICAgJ2JvYXJkLW5vdC1mb3VuZCc6ICdObyBzZSBlbmNvbnRyw7MgZWwgdGFibGVybyBhIGVkaXRhci4nLFxuICAgICAgICAnZGVmYXVsdC1ib2FyZC1sb2NrZWQnOiAnRWwgdGFibGVybyBcImRlZmF1bHRcIiBubyBwdWVkZSBlZGl0YXJzZS4nLFxuICAgICAgICAnYm9hcmQtYWxyZWFkeS1leGlzdHMnOiBgWWEgZXhpc3RlIHVuIHRhYmxlcm8gbGxhbWFkbyBcIiR7bmV4dE5hbWV9XCIuYCxcbiAgICAgICAgJ2JvYXJkLWZvbGRlci1jb25mbGljdCc6IGBObyBzZSBwdWRvIHJlbm9tYnJhciBlbCB0YWJsZXJvIHBvcnF1ZSB5YSBleGlzdGUgbGEgY2FycGV0YSBcIiR7bmV4dE5hbWV9XCIuYCxcbiAgICAgIH1cbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UobWVzc2FnZUJ5RXJyb3JbcmVzdWx0LmVycm9yIHx8ICcnXSB8fCAnTm8gc2UgcHVkbyBlZGl0YXIgZWwgdGFibGVyby4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy52aWV3LnNldEFjdGl2ZVRhYihyZXN1bHQuYm9hcmROYW1lKVxuICAgIHRoaXMudmlldy5yZW5kZXIoKVxuICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYFRhYmxlcm8gXCIke3RoaXMuYm9hcmROYW1lfVwiIGFjdHVhbGl6YWRvLmApXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQgeyBQUkVTRVRfQ09MT1JTIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHR5cGUgeyBUYXJlYXNQbHVnaW4gfSBmcm9tICcuLi9wbHVnaW4vVGFyZWFzUGx1Z2luJ1xuaW1wb3J0IHR5cGUgeyBUYXJlYXNWaWV3SGFuZGxlIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBjcmVhdGVDb2xvclBpY2tlciB9IGZyb20gJy4uL3VpL2NvbG9yUGlja2VyJ1xuXG5leHBvcnQgY2xhc3MgTmV3Qm9hcmRNb2RhbCBleHRlbmRzIG9ic2lkaWFuLk1vZGFsIHtcbiAgcHJpdmF0ZSBwbHVnaW46IFRhcmVhc1BsdWdpblxuICBwcml2YXRlIHZpZXc6IFRhcmVhc1ZpZXdIYW5kbGVcbiAgcHJpdmF0ZSBkYXRhOiB7IG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyB9XG5cbiAgY29uc3RydWN0b3IoYXBwOiBvYnNpZGlhbi5BcHAsIHBsdWdpbjogVGFyZWFzUGx1Z2luLCB2aWV3OiBUYXJlYXNWaWV3SGFuZGxlKSB7XG4gICAgc3VwZXIoYXBwKVxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luXG4gICAgdGhpcy52aWV3ID0gdmlld1xuICAgIHRoaXMuZGF0YSA9IHsgbmFtZTogJycsIGNvbG9yOiBQUkVTRVRfQ09MT1JTWzFdIH1cbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpc1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLW1vZGFsJylcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnTnVldm8gVGFibGVybycgfSlcblxuICAgIG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZSgnTm9tYnJlIGRlbCB0YWJsZXJvJykuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgdGV4dC5zZXRQbGFjZWhvbGRlcignRWo6IHBlcnNvbmFsLCBlc3R1ZGlvLCB0cmFiYWpvJylcbiAgICAgIHRleHQub25DaGFuZ2UodmFsdWUgPT4gdGhpcy5kYXRhLm5hbWUgPSB2YWx1ZSlcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGV4dC5pbnB1dEVsLmZvY3VzKCksIDUwKVxuICAgIH0pXG5cbiAgICBjb25zdCBjb2xvclNldHRpbmcgPSBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpLnNldE5hbWUoJ0NvbG9yJylcbiAgICBjcmVhdGVDb2xvclBpY2tlcihjb2xvclNldHRpbmcuY29udHJvbEVsLCBQUkVTRVRfQ09MT1JTLCB0aGlzLmRhdGEuY29sb3IsIChuZXh0Q29sb3IpID0+IHtcbiAgICAgIHRoaXMuZGF0YS5jb2xvciA9IG5leHRDb2xvclxuICAgIH0pXG5cbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLW1vZGFsLWZvb3RlcicgfSlcbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NyZWFyIHRhYmxlcm8nLCBjbHM6ICdtb2QtY3RhJyB9KVxuICAgIGNyZWF0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jcmVhdGVCb2FyZCgpXG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NhbmNlbGFyJyB9KVxuICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jbG9zZSgpXG4gIH1cblxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KClcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmROYW1lID0gdGhpcy5kYXRhLm5hbWUudHJpbSgpXG4gICAgaWYgKCFib2FyZE5hbWUpIHtcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoJ0VsIG5vbWJyZSBlcyByZXF1ZXJpZG8nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5wbHVnaW4uYWRkVGFibGVybyhib2FyZE5hbWUsIHRoaXMuZGF0YS5jb2xvcilcbiAgICB0aGlzLnZpZXcucmVuZGVyKClcbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBUYWJsZXJvIFwiJHtib2FyZE5hbWV9XCIgY3JlYWRvYClcbiAgICB0aGlzLmNsb3NlKClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7IFBSRVNFVF9DT0xPUlMgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgdHlwZSB7IFRhcmVhc1BsdWdpbiB9IGZyb20gJy4uL3BsdWdpbi9UYXJlYXNQbHVnaW4nXG5pbXBvcnQgdHlwZSB7IFRhcmVhc1ZpZXdIYW5kbGUgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IGNyZWF0ZUNvbG9yUGlja2VyIH0gZnJvbSAnLi4vdWkvY29sb3JQaWNrZXInXG5cbmV4cG9ydCBjbGFzcyBOZXdHcm91cE1vZGFsIGV4dGVuZHMgb2JzaWRpYW4uTW9kYWwge1xuICBwcml2YXRlIHBsdWdpbjogVGFyZWFzUGx1Z2luXG4gIHByaXZhdGUgdmlldzogVGFyZWFzVmlld0hhbmRsZVxuICBwcml2YXRlIGJvYXJkTmFtZTogc3RyaW5nXG4gIHByaXZhdGUgZGF0YTogeyBuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcgfVxuXG4gIGNvbnN0cnVjdG9yKGFwcDogb2JzaWRpYW4uQXBwLCBwbHVnaW46IFRhcmVhc1BsdWdpbiwgdmlldzogVGFyZWFzVmlld0hhbmRsZSwgYm9hcmROYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihhcHApXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW5cbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy5ib2FyZE5hbWUgPSBib2FyZE5hbWVcbiAgICB0aGlzLmRhdGEgPSB7IG5hbWU6ICcnLCBjb2xvcjogUFJFU0VUX0NPTE9SU1syXSB9XG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXNcbiAgICBjb250ZW50RWwuYWRkQ2xhc3MoJ3RhcmVhcy1tb2RhbCcpXG4gICAgY29udGVudEVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ051ZXZvIEdydXBvJyB9KVxuXG4gICAgbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKS5zZXROYW1lKCdOb21icmUgZGVsIGdydXBvJykuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgdGV4dC5zZXRQbGFjZWhvbGRlcignRWo6IEJhY2tlbmQsIEZyb250ZW5kLCBRQScpXG4gICAgICB0ZXh0Lm9uQ2hhbmdlKHZhbHVlID0+IHRoaXMuZGF0YS5uYW1lID0gdmFsdWUpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRleHQuaW5wdXRFbC5mb2N1cygpLCA1MClcbiAgICB9KVxuXG4gICAgY29uc3QgY29sb3JTZXR0aW5nID0gbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKS5zZXROYW1lKCdDb2xvcicpXG4gICAgY3JlYXRlQ29sb3JQaWNrZXIoY29sb3JTZXR0aW5nLmNvbnRyb2xFbCwgUFJFU0VUX0NPTE9SUywgdGhpcy5kYXRhLmNvbG9yLCAobmV4dENvbG9yKSA9PiB7XG4gICAgICB0aGlzLmRhdGEuY29sb3IgPSBuZXh0Q29sb3JcbiAgICB9KVxuXG4gICAgY29uc3QgZm9vdGVyID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1tb2RhbC1mb290ZXInIH0pXG5cbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NyZWFyIGdydXBvJywgY2xzOiAnbW9kLWN0YScgfSlcbiAgICBjcmVhdGVCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuY3JlYXRlR3JvdXAoKVxuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdDYW5jZWxhcicgfSlcbiAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuY2xvc2UoKVxuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpXG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUdyb3VwKCkge1xuICAgIGNvbnN0IGdyb3VwTmFtZSA9IHRoaXMuZGF0YS5uYW1lLnRyaW0oKVxuICAgIGlmICghZ3JvdXBOYW1lKSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdFbCBub21icmUgZXMgcmVxdWVyaWRvJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMucGx1Z2luLmFkZEVxdWlwb0luVGFibGVybyhncm91cE5hbWUsIHRoaXMuZGF0YS5jb2xvciwgdGhpcy5ib2FyZE5hbWUpXG4gICAgdGhpcy52aWV3LnJlbmRlcigpXG5cbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBHcnVwbyBcIiR7Z3JvdXBOYW1lfVwiIGNyZWFkb2ApXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQgdHlwZSB7IFRhc2tJdGVtIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBjbGFzcyBFZGl0VGFza0ZpbGVNb2RhbCBleHRlbmRzIG9ic2lkaWFuLk1vZGFsIHtcbiAgcHJpdmF0ZSB0YXNrOiBUYXNrSXRlbVxuICBwcml2YXRlIHRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBpbml0aWFsQ29udGVudCA9ICcnXG5cbiAgY29uc3RydWN0b3IoYXBwOiBvYnNpZGlhbi5BcHAsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgc3VwZXIoYXBwKVxuICAgIHRoaXMudGFzayA9IHRhc2tcbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpc1xuICAgIHRoaXMubW9kYWxFbC5hZGRDbGFzcygndGFyZWFzLWVkaXQtdGFzay1tb2RhbC1zaGVsbCcpXG4gICAgY29udGVudEVsLmFkZENsYXNzKCd0YXJlYXMtbW9kYWwnKVxuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLWVkaXQtdGFzay1tb2RhbCcpXG4gICAgY29udGVudEVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogYEVkaXRhcjogJHt0aGlzLnRhc2sudGFyZWF9YCB9KVxuXG4gICAgY29uc3QgaGVscGVyID0gY29udGVudEVsLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtZWRpdC10YXNrLWhpbnQnIH0pXG4gICAgaGVscGVyLnNldFRleHQoYEVkaXRhIGVsIGNvbnRlbmlkbyBjb21wbGV0byBkZSAke3RoaXMudGFzay5maWxlLnBhdGh9YClcblxuICAgIHRoaXMudGV4dGFyZWEgPSBjb250ZW50RWwuY3JlYXRlRWwoJ3RleHRhcmVhJywge1xuICAgICAgY2xzOiAndGFyZWFzLWVkaXQtdGFzay10ZXh0YXJlYScsXG4gICAgICBhdHRyOiB7XG4gICAgICAgIHNwZWxsY2hlY2s6ICdmYWxzZScsXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLW1vZGFsLWZvb3RlcicgfSlcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NhbmNlbGFyJyB9KVxuICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jbG9zZSgpXG5cbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdHdWFyZGFyJywgY2xzOiAnbW9kLWN0YScgfSlcbiAgICBzYXZlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB2b2lkIHRoaXMuc2F2ZSgpXG4gICAgfVxuXG4gICAgdm9pZCB0aGlzLmxvYWRGaWxlQ29udGVudCgpXG4gIH1cblxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbG9hZEZpbGVDb250ZW50KCkge1xuICAgIGlmICghdGhpcy50ZXh0YXJlYSlcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNhY2hlZFJlYWQodGhpcy50YXNrLmZpbGUpXG4gICAgdGhpcy5pbml0aWFsQ29udGVudCA9IGNvbnRlbnRcbiAgICB0aGlzLnRleHRhcmVhLnZhbHVlID0gY29udGVudFxuICAgIHRoaXMudGV4dGFyZWEuZm9jdXMoKVxuICAgIHRoaXMudGV4dGFyZWEuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgMClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2F2ZSgpIHtcbiAgICBpZiAoIXRoaXMudGV4dGFyZWEpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IG5leHRDb250ZW50ID0gdGhpcy50ZXh0YXJlYS52YWx1ZVxuICAgIGlmIChuZXh0Q29udGVudCA9PT0gdGhpcy5pbml0aWFsQ29udGVudCkge1xuICAgICAgdGhpcy5jbG9zZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkodGhpcy50YXNrLmZpbGUsIG5leHRDb250ZW50KVxuICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoJ1RhcmVhIGFjdHVhbGl6YWRhJylcbiAgICB0aGlzLmNsb3NlKClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB0eXBlIHsgVGFza0l0ZW0gfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGNsYXNzIEFkZFRhc2tDb21tZW50TW9kYWwgZXh0ZW5kcyBvYnNpZGlhbi5Nb2RhbCB7XG4gIHByaXZhdGUgdGFzazogVGFza0l0ZW1cbiAgcHJpdmF0ZSB0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGwgPSBudWxsXG5cbiAgY29uc3RydWN0b3IoYXBwOiBvYnNpZGlhbi5BcHAsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgc3VwZXIoYXBwKVxuICAgIHRoaXMudGFzayA9IHRhc2tcbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpc1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLW1vZGFsJylcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiBgQ29tZW50YXJpbzogJHt0aGlzLnRhc2sudGFyZWF9YCB9KVxuXG4gICAgY29uc3QgaGVscCA9IGNvbnRlbnRFbC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLWNvbW1lbnQtbW9kYWwtaGludCcgfSlcbiAgICBoZWxwLnNldFRleHQoJ1NlIGFncmVnYXLDoSBhbCBmaW5hbCBkZWwgYXJjaGl2byBkZSBsYSB0YXJlYS4nKVxuXG4gICAgdGhpcy50ZXh0YXJlYSA9IGNvbnRlbnRFbC5jcmVhdGVFbCgndGV4dGFyZWEnLCB7XG4gICAgICBjbHM6ICd0YXJlYXMtY29tbWVudC1tb2RhbC10ZXh0YXJlYScsXG4gICAgICBhdHRyOiB7IHBsYWNlaG9sZGVyOiAnRXNjcmliZSB1biBjb21lbnRhcmlvLi4uJyB9LFxuICAgIH0pXG4gICAgdGhpcy50ZXh0YXJlYS5mb2N1cygpXG5cbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLW1vZGFsLWZvb3RlcicgfSlcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ2FuY2VsYXInIH0pXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlKClcblxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQWdyZWdhcicsIGNsczogJ21vZC1jdGEnIH0pXG4gICAgYWRkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB2b2lkIHRoaXMuYXBwZW5kQ29tbWVudCgpXG4gICAgfVxuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGFwcGVuZENvbW1lbnQoKSB7XG4gICAgY29uc3QgcmF3Q29tbWVudCA9IHRoaXMudGV4dGFyZWE/LnZhbHVlID8/ICcnXG4gICAgY29uc3QgY29tbWVudCA9IHJhd0NvbW1lbnQudHJpbSgpXG4gICAgaWYgKCFjb21tZW50KSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdFc2NyaWJlIHVuIGNvbWVudGFyaW8gYW50ZXMgZGUgZ3VhcmRhcicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQuY2FjaGVkUmVhZCh0aGlzLnRhc2suZmlsZSlcbiAgICBjb25zdCBoYXNDb250ZW50ID0gY3VycmVudC50cmltKCkubGVuZ3RoID4gMFxuICAgIGNvbnN0IHdpdGhOZXdsaW5lID0gY3VycmVudC5lbmRzV2l0aCgnXFxuJykgPyBjdXJyZW50IDogYCR7Y3VycmVudH1cXG5gXG4gICAgY29uc3Qgc3BhY2VyID0gaGFzQ29udGVudCA/ICdcXG4nIDogJydcbiAgICBjb25zdCBjb21tZW50QmxvY2sgPSB0aGlzLmJ1aWxkQ29tbWVudEJsb2NrKGNvbW1lbnQpXG4gICAgY29uc3QgbmV4dCA9IGAke3dpdGhOZXdsaW5lfSR7c3BhY2VyfSR7Y29tbWVudEJsb2NrfWBcblxuICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeSh0aGlzLnRhc2suZmlsZSwgbmV4dClcbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdDb21lbnRhcmlvIGFncmVnYWRvJylcbiAgICB0aGlzLmNsb3NlKClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRDb21tZW50QmxvY2soY29tbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgZGF5ID0gU3RyaW5nKG5vdy5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJylcbiAgICBjb25zdCBtb250aCA9IFN0cmluZyhub3cuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJylcbiAgICBjb25zdCB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKClcbiAgICBjb25zdCBob3VycyA9IFN0cmluZyhub3cuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgJzAnKVxuICAgIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcobm93LmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKVxuXG4gICAgY29uc3Qgc3RhbXAgPSBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn0gJHtob3Vyc306JHttaW51dGVzfWBcbiAgICByZXR1cm4gYCMjIENvbWVudGFyaW8gLSAke3N0YW1wfVxcblxcbiR7Y29tbWVudH1cXG5gXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbnRlcmZhY2UgQ29uZmlybURlbGV0ZVRhc2tNb2RhbE9wdGlvbnMge1xuICB0aXRsZTogc3RyaW5nXG4gIG1lc3NhZ2U6IHN0cmluZ1xuICBjb25maXJtVGV4dD86IHN0cmluZ1xuICBvbkNvbmZpcm06ICgpID0+IFByb21pc2U8dm9pZD5cbn1cblxuZXhwb3J0IGNsYXNzIENvbmZpcm1EZWxldGVUYXNrTW9kYWwgZXh0ZW5kcyBvYnNpZGlhbi5Nb2RhbCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogQ29uZmlybURlbGV0ZVRhc2tNb2RhbE9wdGlvbnNcblxuICBjb25zdHJ1Y3RvcihhcHA6IG9ic2lkaWFuLkFwcCwgb3B0aW9uczogQ29uZmlybURlbGV0ZVRhc2tNb2RhbE9wdGlvbnMpIHtcbiAgICBzdXBlcihhcHApXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzXG4gICAgY29udGVudEVsLmFkZENsYXNzKCd0YXJlYXMtbW9kYWwnKVxuICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6IHRoaXMub3B0aW9ucy50aXRsZSB9KVxuICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgncCcsIHsgdGV4dDogdGhpcy5vcHRpb25zLm1lc3NhZ2UgfSlcblxuICAgIGNvbnN0IGZvb3RlciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtbW9kYWwtZm9vdGVyJyB9KVxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ2FuY2VsYXInIH0pXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlKClcblxuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIHRleHQ6IHRoaXMub3B0aW9ucy5jb25maXJtVGV4dCA/PyAnRWxpbWluYXInLFxuICAgICAgY2xzOiAnbW9kLXdhcm5pbmcnLFxuICAgIH0pXG4gICAgY29uZmlybUJ1dHRvbi5vbmNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIGNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMub3B0aW9ucy5vbkNvbmZpcm0oKVxuICAgICAgICB0aGlzLmNsb3NlKClcbiAgICAgIH1cbiAgICAgIGZpbmFsbHkge1xuICAgICAgICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgICAgY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB0eXBlIHsgUG9tb2Rvcm9EdXJhdGlvbnMgfSBmcm9tICcuLi90eXBlcydcblxuaW50ZXJmYWNlIFBvbW9kb3JvUHJlc2V0IHtcbiAgaWQ6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIHdvcmtMYWJlbDogc3RyaW5nXG4gIHNob3J0QnJlYWtMYWJlbDogc3RyaW5nXG4gIGN5Y2xlc0xhYmVsOiBzdHJpbmdcbiAgbG9uZ0JyZWFrTGFiZWw6IHN0cmluZ1xuICBpZGVhbEZvcjogc3RyaW5nXG4gIGR1cmF0aW9uczogUG9tb2Rvcm9EdXJhdGlvbnNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb21vZG9yb1ByZXNldENhcmREYXRhIHtcbiAgdGl0bGU6IHN0cmluZ1xuICB1c2FnZTogc3RyaW5nXG4gIHdvcmtMYWJlbDogc3RyaW5nXG4gIHNob3J0QnJlYWtMYWJlbDogc3RyaW5nXG4gIGxvbmdCcmVha0xhYmVsOiBzdHJpbmdcbiAgY3ljbGVzTGFiZWw6IHN0cmluZ1xufVxuXG5jb25zdCBQT01PRE9ST19QUkVTRVRTOiBQb21vZG9yb1ByZXNldFtdID0gW1xuICB7XG4gICAgaWQ6ICdkZWJ1Zy0xLTEnLFxuICAgIHRpdGxlOiAn8J+boCBEZWJ1ZyAtIDEvMScsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogMSBtaW4nLFxuICAgIHNob3J0QnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGNvcnRvOiAxIG1pbicsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDQnLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDEgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IHByb2JhciByw6FwaWRvIGVsIGZsdWpvIGRlbCB0ZW1wb3JpemFkb3IgeSB0cmFuc2ljaW9uZXMgZGUgZmFzZS4nLFxuICAgIGR1cmF0aW9uczogeyB3b3JrTWludXRlczogMSwgc2hvcnRCcmVha01pbnV0ZXM6IDEsIGxvbmdCcmVha01pbnV0ZXM6IDEgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnc3RhbmRhcmQtMjUtNScsXG4gICAgdGl0bGU6ICfirZAgRXN0w6FuZGFyIC0gMjUvNScsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogMjUgbWluJyxcbiAgICBzaG9ydEJyZWFrTGFiZWw6ICdEZXNjYW5zbyBjb3J0bzogNSBtaW4nLFxuICAgIGN5Y2xlc0xhYmVsOiAnQ2ljbG9zOiA0JyxcbiAgICBsb25nQnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGxhcmdvOiAxNSBtaW4nLFxuICAgIGlkZWFsRm9yOiAnSWRlYWwgcGFyYTogdGFyZWFzIG1vZGVyYWRhcywgcHJvZ3JhbWFjacOzbiwgZXN0dWRpbywgbWFudGVuZXIgcml0bW8gY29uc3RhbnRlIHNpbiBxdWVtYXJzZS4nLFxuICAgIGR1cmF0aW9uczogeyB3b3JrTWludXRlczogMjUsIHNob3J0QnJlYWtNaW51dGVzOiA1LCBsb25nQnJlYWtNaW51dGVzOiAxNSB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdkZWVwLWZvY3VzLTUwLTEwJyxcbiAgICB0aXRsZTogJ+KaoSBQYXJhIGZvY28gcHJvZnVuZG8gLSA1MC8xMCcsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogNTAgbWluJyxcbiAgICBzaG9ydEJyZWFrTGFiZWw6ICdEZXNjYW5zbyBjb3J0bzogMTAgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogMycsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMjAgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IHByb2dyYW1hY2nDs24gcGVzYWRhLCBkZWJ1Z2dpbmcsIGludmVzdGlnYWNpw7NuLCBlc2NyaXR1cmEgbGFyZ2EuIEN1YW5kbyB0ZSBtZXTDqXMgZW4gXCJkZWVwIHdvcmtcIi4nLFxuICAgIGR1cmF0aW9uczogeyB3b3JrTWludXRlczogNTAsIHNob3J0QnJlYWtNaW51dGVzOiAxMCwgbG9uZ0JyZWFrTWludXRlczogMjAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnZGV2LWNsYXNzaWMtNTItMTcnLFxuICAgIHRpdGxlOiAn8J+SuyBDbMOhc2ljbyBkZSBwcm9ncmFtYWRvcmVzIC0gNTIvMTcnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDUyIG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDE3IG1pbicsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDInLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDIwIG1pbicsXG4gICAgaWRlYWxGb3I6ICdJZGVhbCBwYXJhOiB0YXJlYXMgY29tcGxlamFzIHF1ZSByZXF1aWVyZW4gZmx1aXIgc2luIGNvcnRlcyBsYXJnb3MuIE1hbnRpZW5lIGVuZXJnw61hIGFsdGEuJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDUyLCBzaG9ydEJyZWFrTWludXRlczogMTcsIGxvbmdCcmVha01pbnV0ZXM6IDIwIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ2NyZWF0aXZlLTQwLTEwJyxcbiAgICB0aXRsZTogJ/CfjqggQ3JlYXRpdm8gLSA0MC8xMCcsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogNDAgbWluJyxcbiAgICBzaG9ydEJyZWFrTGFiZWw6ICdEZXNjYW5zbyBjb3J0bzogMTAgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogNCcsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMjAgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IGRpc2XDsW8sIGVzY3JpdHVyYSBjcmVhdGl2YSwgYnJhaW5zdG9ybWluZywgZG9uZGUgcXVlcsOpcyB0aWVtcG8gcGFyYSBlbnRyYXIgZW4gZXN0YWRvLicsXG4gICAgZHVyYXRpb25zOiB7IHdvcmtNaW51dGVzOiA0MCwgc2hvcnRCcmVha01pbnV0ZXM6IDEwLCBsb25nQnJlYWtNaW51dGVzOiAyMCB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdzcHJpbnQtNDUtMTUnLFxuICAgIHRpdGxlOiAn8J+UqCBTcHJpbnQgLSA0NS8xNScsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogNDUgbWluJyxcbiAgICBzaG9ydEJyZWFrTGFiZWw6ICdEZXNjYW5zbyBjb3J0bzogMTUgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogMycsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMjUgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IHRhcmVhcyBncmFuZGVzIGRvbmRlIG5lY2VzaXTDoXMgZW1wdWphciBmdWVydGUgKHJlZmFjdG9ycywgZG9jdW1lbnRhY2nDs24sIGFuw6FsaXNpcykuJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDQ1LCBzaG9ydEJyZWFrTWludXRlczogMTUsIGxvbmdCcmVha01pbnV0ZXM6IDI1IH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ2FkaGQtMjAtNScsXG4gICAgdGl0bGU6ICfwn6egIFBhcmEgVERBSCBvIG11Y2hhIGRpc3RyYWNjacOzbiAtIDIwLzUnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDIwIG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDUgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogNCcsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMTUgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IGN1YW5kbyB0ZSBjdWVzdGEgZW5nYW5jaGFydGUgbyBtYW50ZW5lciBmb2NvIHNvc3Rlbmlkby4gRW50cmFkYXMgY29ydGFzIHBlcm8gZWZlY3RpdmFzLicsXG4gICAgZHVyYXRpb25zOiB7IHdvcmtNaW51dGVzOiAyMCwgc2hvcnRCcmVha01pbnV0ZXM6IDUsIGxvbmdCcmVha01pbnV0ZXM6IDE1IH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ21pY3JvLTE1LTUnLFxuICAgIHRpdGxlOiAn8J+TiSBNaWNyby1Qb21vZG9ybyAtIDE1LzUnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDE1IG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDUgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogNCcsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMTUgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IHRhcmVhcyBjaGljYXMsIHJldmlzYXIgbWFpbHMsIG9yZGVuYXIgcGVuZGllbnRlcywgY3VhbmRvIGVzdMOhcyBtZW50YWxtZW50ZSBtdXkgY2Fuc2Fkby4nLFxuICAgIGR1cmF0aW9uczogeyB3b3JrTWludXRlczogMTUsIHNob3J0QnJlYWtNaW51dGVzOiA1LCBsb25nQnJlYWtNaW51dGVzOiAxNSB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdsb3ctZW5lcmd5LTE1LTMnLFxuICAgIHRpdGxlOiAn8J+UiyBFbmVyZ8OtYSBiYWphIC0gMTUvMycsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogMTUgbWluJyxcbiAgICBzaG9ydEJyZWFrTGFiZWw6ICdEZXNjYW5zbyBjb3J0bzogMyBtaW4nLFxuICAgIGN5Y2xlc0xhYmVsOiAnQ2ljbG9zOiA0JyxcbiAgICBsb25nQnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGxhcmdvOiAxMiBtaW4nLFxuICAgIGlkZWFsRm9yOiAnSWRlYWwgcGFyYTogZMOtYXMgZGUgZmF0aWdhIG1lbnRhbCwgdGFyZWFzIGxpZ2VyYXMsIGF2YW56YXIgbGVudG8gcGVybyBjb25zdGFudGUuJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDE1LCBzaG9ydEJyZWFrTWludXRlczogMywgbG9uZ0JyZWFrTWludXRlczogMTIgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAndWx0cmFkaWFuLTkwLTIwJyxcbiAgICB0aXRsZTogJ/Cfp7EgQ2ljbG9zIHVsdHJhZGlhbm9zIC0gOTAvMjAnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDkwIG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IG5vIGFwbGljYScsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDIgcG9yIHNlc2nDs24nLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDIwIG1pbicsXG4gICAgaWRlYWxGb3I6ICdJZGVhbCBwYXJhOiBzZXNpb25lcyBjcmVhdGl2YXMgcHJvZnVuZGFzIG8gZGUgaW5nZW5pZXLDrWEgZG9uZGUgY29ydGFyIGVzIGNvbnRyYXByb2R1Y2VudGUuJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDkwLCBzaG9ydEJyZWFrTWludXRlczogMjAsIGxvbmdCcmVha01pbnV0ZXM6IDIwIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ2FnZ3Jlc3NpdmUtNTAtNScsXG4gICAgdGl0bGU6ICfwn6epIDUwLzUgKGFncmVzaXZvKScsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogNTAgbWluJyxcbiAgICBzaG9ydEJyZWFrTGFiZWw6ICdEZXNjYW5zbyBjb3J0bzogNSBtaW4nLFxuICAgIGN5Y2xlc0xhYmVsOiAnQ2ljbG9zOiAzJyxcbiAgICBsb25nQnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGxhcmdvOiAyMCBtaW4nLFxuICAgIGlkZWFsRm9yOiAnSWRlYWwgcGFyYTogdGFyZWFzIGRlIGFsdGEgcHJlc2nDs24gbyBlbnRyZWdhcyBkb25kZSBxdWVyw6lzIG1pbmltaXphciBwYXVzYXMuJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDUwLCBzaG9ydEJyZWFrTWludXRlczogNSwgbG9uZ0JyZWFrTWludXRlczogMjAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnYmFsYW5jZWQtMzAtMTAnLFxuICAgIHRpdGxlOiAn8J+qtiAzMC8xMCAoYmFsYW5jZWFkbyknLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDMwIG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDEwIG1pbicsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDQnLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDIwIG1pbicsXG4gICAgaWRlYWxGb3I6ICdJZGVhbCBwYXJhOiB0YXJlYXMgZGUgYW7DoWxpc2lzLCBhZG1pbmlzdHJhY2nDs24sIGNvbnRhYmlsaWRhZCBtZW50YWwgbGl2aWFuYSBvIHJlc2VhcmNoIHZhcmlhZG8uJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDMwLCBzaG9ydEJyZWFrTWludXRlczogMTAsIGxvbmdCcmVha01pbnV0ZXM6IDIwIH0sXG4gIH0sXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb21vZG9yb1ByZXNldENhcmREYXRhKGR1cmF0aW9uczogUG9tb2Rvcm9EdXJhdGlvbnMpOiBQb21vZG9yb1ByZXNldENhcmREYXRhIHtcbiAgY29uc3QgcHJlc2V0ID0gZmluZFBvbW9kb3JvUHJlc2V0QnlEdXJhdGlvbnMoZHVyYXRpb25zKVxuICBpZiAocHJlc2V0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBwcmVzZXQudGl0bGUsXG4gICAgICB1c2FnZTogcHJlc2V0LmlkZWFsRm9yLnJlcGxhY2UoL15JZGVhbCBwYXJhOlxccyovaSwgJycpLFxuICAgICAgd29ya0xhYmVsOiBwcmVzZXQud29ya0xhYmVsLFxuICAgICAgc2hvcnRCcmVha0xhYmVsOiBwcmVzZXQuc2hvcnRCcmVha0xhYmVsLFxuICAgICAgbG9uZ0JyZWFrTGFiZWw6IHByZXNldC5sb25nQnJlYWtMYWJlbCxcbiAgICAgIGN5Y2xlc0xhYmVsOiBwcmVzZXQuY3ljbGVzTGFiZWwsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogYFBlcnNvbmFsaXphZG8gLSAke2R1cmF0aW9ucy53b3JrTWludXRlc30vJHtkdXJhdGlvbnMuc2hvcnRCcmVha01pbnV0ZXN9YCxcbiAgICB1c2FnZTogJ0NvbmZpZ3VyYWNpw7NuIG1hbnVhbCBndWFyZGFkYS4nLFxuICAgIHdvcmtMYWJlbDogYFRyYWJham86ICR7ZHVyYXRpb25zLndvcmtNaW51dGVzfSBtaW5gLFxuICAgIHNob3J0QnJlYWtMYWJlbDogYERlc2NhbnNvIGNvcnRvOiAke2R1cmF0aW9ucy5zaG9ydEJyZWFrTWludXRlc30gbWluYCxcbiAgICBsb25nQnJlYWtMYWJlbDogYERlc2NhbnNvIGxhcmdvOiAke2R1cmF0aW9ucy5sb25nQnJlYWtNaW51dGVzfSBtaW5gLFxuICAgIGN5Y2xlc0xhYmVsOiAnQ2ljbG9zOiA0JyxcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kUG9tb2Rvcm9QcmVzZXRCeUR1cmF0aW9ucyhkdXJhdGlvbnM6IFBvbW9kb3JvRHVyYXRpb25zKTogUG9tb2Rvcm9QcmVzZXQgfCBudWxsIHtcbiAgZm9yIChjb25zdCBwcmVzZXQgb2YgUE9NT0RPUk9fUFJFU0VUUykge1xuICAgIGlmIChcbiAgICAgIHByZXNldC5kdXJhdGlvbnMud29ya01pbnV0ZXMgPT09IGR1cmF0aW9ucy53b3JrTWludXRlc1xuICAgICAgJiYgcHJlc2V0LmR1cmF0aW9ucy5zaG9ydEJyZWFrTWludXRlcyA9PT0gZHVyYXRpb25zLnNob3J0QnJlYWtNaW51dGVzXG4gICAgICAmJiBwcmVzZXQuZHVyYXRpb25zLmxvbmdCcmVha01pbnV0ZXMgPT09IGR1cmF0aW9ucy5sb25nQnJlYWtNaW51dGVzXG4gICAgKSB7XG4gICAgICByZXR1cm4gcHJlc2V0XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGNsYXNzIFBvbW9kb3JvUHJlc2V0TW9kYWwgZXh0ZW5kcyBvYnNpZGlhbi5Nb2RhbCB7XG4gIHByaXZhdGUgb25BY2NlcHQ6IChkdXJhdGlvbnM6IFBvbW9kb3JvRHVyYXRpb25zKSA9PiB2b2lkXG4gIHByaXZhdGUgc2VsZWN0ZWRQcmVzZXRJZDogc3RyaW5nXG4gIHByaXZhdGUgY2FyZEJ5SWQgPSBuZXcgTWFwPHN0cmluZywgSFRNTERpdkVsZW1lbnQ+KClcblxuICBjb25zdHJ1Y3RvcihhcHA6IG9ic2lkaWFuLkFwcCwgY3VycmVudER1cmF0aW9uczogUG9tb2Rvcm9EdXJhdGlvbnMsIG9uQWNjZXB0OiAoZHVyYXRpb25zOiBQb21vZG9yb0R1cmF0aW9ucykgPT4gdm9pZCkge1xuICAgIHN1cGVyKGFwcClcbiAgICB0aGlzLm9uQWNjZXB0ID0gb25BY2NlcHRcbiAgICBjb25zdCBtYXRjaGVkID0gZmluZFBvbW9kb3JvUHJlc2V0QnlEdXJhdGlvbnMoY3VycmVudER1cmF0aW9ucylcbiAgICB0aGlzLnNlbGVjdGVkUHJlc2V0SWQgPSBtYXRjaGVkPy5pZCA/PyBQT01PRE9ST19QUkVTRVRTWzBdLmlkXG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgdGhpcy5tb2RhbEVsLmFkZENsYXNzKCd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LW1vZGFsLXNoZWxsJylcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpc1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLW1vZGFsJywgJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtbW9kYWwnKVxuICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdFbGVnw60gdW4gcHJlc2V0IFBvbW9kb3JvJyB9KVxuXG4gICAgY29uc3QgY2FyZHMgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXByZXNldC1jYXJkcycgfSlcbiAgICBmb3IgKGNvbnN0IHByZXNldCBvZiBQT01PRE9ST19QUkVTRVRTKSB7XG4gICAgICBjb25zdCBjYXJkID0gY2FyZHMuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXByZXNldC1jYXJkJyB9KVxuICAgICAgY2FyZC5zZXRBdHRyKCdyb2xlJywgJ2J1dHRvbicpXG4gICAgICBjYXJkLnNldEF0dHIoJ3RhYmluZGV4JywgJzAnKVxuICAgICAgY2FyZC5vbmNsaWNrID0gKCkgPT4gdGhpcy5zZWxlY3RQcmVzZXQocHJlc2V0LmlkKVxuICAgICAgY2FyZC5vbmtleWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSAhPT0gJ0VudGVyJyAmJiBldmVudC5rZXkgIT09ICcgJylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLnNlbGVjdFByZXNldChwcmVzZXQuaWQpXG4gICAgICB9XG5cbiAgICAgIGNhcmQuY3JlYXRlRWwoJ2gzJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LXRpdGxlJywgdGV4dDogcHJlc2V0LnRpdGxlIH0pXG4gICAgICBjYXJkLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtZGl2aWRlcicgfSlcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtdXNhZ2UtdGl0bGUnLCB0ZXh0OiAnVXNvJyB9KVxuICAgICAgY2FyZC5jcmVhdGVFbCgncCcsIHtcbiAgICAgICAgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXByZXNldC11c2FnZScsXG4gICAgICAgIHRleHQ6IHByZXNldC5pZGVhbEZvci5yZXBsYWNlKC9eSWRlYWwgcGFyYTpcXHMqL2ksICcnKSxcbiAgICAgIH0pXG4gICAgICBjYXJkLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtZGl2aWRlcicgfSlcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtbGluZScsIHRleHQ6IHByZXNldC53b3JrTGFiZWwgfSlcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtbGluZScsIHRleHQ6IHByZXNldC5zaG9ydEJyZWFrTGFiZWwgfSlcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtbGluZScsIHRleHQ6IHByZXNldC5sb25nQnJlYWtMYWJlbCB9KVxuICAgICAgY2FyZC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXByZXNldC1saW5lJywgdGV4dDogcHJlc2V0LmN5Y2xlc0xhYmVsIH0pXG5cbiAgICAgIHRoaXMuY2FyZEJ5SWQuc2V0KHByZXNldC5pZCwgY2FyZClcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hTZWxlY3Rpb24oKVxuXG4gICAgY29uc3QgZm9vdGVyID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1tb2RhbC1mb290ZXInIH0pXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdDYW5jZWxhcicgfSlcbiAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuY2xvc2UoKVxuXG4gICAgY29uc3QgYWNjZXB0QnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdBY2VwdGFyJywgY2xzOiAnbW9kLWN0YScgfSlcbiAgICBhY2NlcHRCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuYWNjZXB0KClcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5tb2RhbEVsLnJlbW92ZUNsYXNzKCd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LW1vZGFsLXNoZWxsJylcbiAgICB0aGlzLmNhcmRCeUlkLmNsZWFyKClcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpXG4gIH1cblxuICBwcml2YXRlIHNlbGVjdFByZXNldChwcmVzZXRJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWxlY3RlZFByZXNldElkID0gcHJlc2V0SWRcbiAgICB0aGlzLnJlZnJlc2hTZWxlY3Rpb24oKVxuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoU2VsZWN0aW9uKCkge1xuICAgIGZvciAoY29uc3QgcHJlc2V0IG9mIFBPTU9ET1JPX1BSRVNFVFMpIHtcbiAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmNhcmRCeUlkLmdldChwcmVzZXQuaWQpXG4gICAgICBpZiAoIWNhcmQpXG4gICAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGNhcmQudG9nZ2xlQ2xhc3MoJ2lzLXNlbGVjdGVkJywgdGhpcy5zZWxlY3RlZFByZXNldElkID09PSBwcmVzZXQuaWQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhY2NlcHQoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBQT01PRE9ST19QUkVTRVRTLmZpbmQocHJlc2V0ID0+IHByZXNldC5pZCA9PT0gdGhpcy5zZWxlY3RlZFByZXNldElkKVxuICAgIGlmICghc2VsZWN0ZWQpXG4gICAgICByZXR1cm5cblxuICAgIHRoaXMub25BY2NlcHQoeyAuLi5zZWxlY3RlZC5kdXJhdGlvbnMgfSlcbiAgICB0aGlzLmNsb3NlKClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB0eXBlIHsgVGFza0l0ZW0gfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGNsYXNzIFNlbGVjdFBvbW9kb3JvVGFza01vZGFsIGV4dGVuZHMgb2JzaWRpYW4uTW9kYWwge1xuICBwcml2YXRlIHRhc2tzOiBUYXNrSXRlbVtdXG4gIHByaXZhdGUgc2VsZWN0ZWRUYXNrUGF0aDogc3RyaW5nIHwgbnVsbFxuICBwcml2YXRlIG9uU2VsZWN0OiAodGFza1BhdGg6IHN0cmluZykgPT4gdm9pZFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGFwcDogb2JzaWRpYW4uQXBwLFxuICAgIHRhc2tzOiBUYXNrSXRlbVtdLFxuICAgIHNlbGVjdGVkVGFza1BhdGg6IHN0cmluZyB8IG51bGwsXG4gICAgb25TZWxlY3Q6ICh0YXNrUGF0aDogc3RyaW5nKSA9PiB2b2lkLFxuICApIHtcbiAgICBzdXBlcihhcHApXG4gICAgdGhpcy50YXNrcyA9IFsuLi50YXNrc10uc29ydCgoYSwgYikgPT4gYS50YXJlYS5sb2NhbGVDb21wYXJlKGIudGFyZWEpKVxuICAgIHRoaXMuc2VsZWN0ZWRUYXNrUGF0aCA9IHNlbGVjdGVkVGFza1BhdGhcbiAgICB0aGlzLm9uU2VsZWN0ID0gb25TZWxlY3RcbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICB0aGlzLm1vZGFsRWwuYWRkQ2xhc3MoJ3RhcmVhcy1wb21vZG9yby10YXNrLW1vZGFsLXNoZWxsJylcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpc1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLW1vZGFsJywgJ3RhcmVhcy1wb21vZG9yby10YXNrLW1vZGFsJylcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnU2VsZWNjaW9uYXIgdGFyZWEgcGFyYSBQb21vZG9ybycgfSlcblxuICAgIGlmICh0aGlzLnRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29udGVudEVsLmNyZWF0ZUVsKCdwJywge1xuICAgICAgICBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tdGFzay1lbXB0eScsXG4gICAgICAgIHRleHQ6ICdObyBoYXkgdGFyZWFzIHBhZHJlIGVuIGN1cnNvIGRpc3BvbmlibGVzLicsXG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IGxpc3QgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRhc2stbGlzdCcgfSlcbiAgICAgIGZvciAoY29uc3QgdGFzayBvZiB0aGlzLnRhc2tzKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBsaXN0LmNyZWF0ZURpdih7XG4gICAgICAgICAgY2xzOiBgdGFyZWFzLXBvbW9kb3JvLXRhc2staXRlbSR7dGhpcy5zZWxlY3RlZFRhc2tQYXRoID09PSB0YXNrLmZpbGUucGF0aCA/ICcgaXMtc2VsZWN0ZWQnIDogJyd9YCxcbiAgICAgICAgfSlcbiAgICAgICAgaXRlbS5zZXRBdHRyKCdyb2xlJywgJ2J1dHRvbicpXG4gICAgICAgIGl0ZW0uc2V0QXR0cigndGFiaW5kZXgnLCAnMCcpXG5cbiAgICAgICAgaXRlbS5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRhc2stbmFtZScsIHRleHQ6IHRhc2sudGFyZWEgfSlcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IFtcbiAgICAgICAgICB0YXNrLnRhYmxlcm8gPyBgVGFibGVybzogJHt0YXNrLnRhYmxlcm99YCA6IG51bGwsXG4gICAgICAgICAgYEVzdGFkbzogJHt0YXNrLmVzdGFkb31gLFxuICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgwrcgJylcbiAgICAgICAgaXRlbS5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRhc2stbWV0YScsIHRleHQ6IGRldGFpbHMgfSlcblxuICAgICAgICBjb25zdCBzZWxlY3QgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vblNlbGVjdCh0YXNrLmZpbGUucGF0aClcbiAgICAgICAgICB0aGlzLmNsb3NlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0ub25jbGljayA9IHNlbGVjdFxuICAgICAgICBpdGVtLm9ua2V5ZG93biA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXkgIT09ICdFbnRlcicgJiYgZXZlbnQua2V5ICE9PSAnICcpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgc2VsZWN0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZvb3RlciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtbW9kYWwtZm9vdGVyJyB9KVxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ2FuY2VsYXInIH0pXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlKClcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5tb2RhbEVsLnJlbW92ZUNsYXNzKCd0YXJlYXMtcG9tb2Rvcm8tdGFzay1tb2RhbC1zaGVsbCcpXG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBvYnNpZGlhbiBmcm9tICdvYnNpZGlhbidcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dEcm9wZG93bihcbiAgYW5jaG9yOiBIVE1MRWxlbWVudCxcbiAgb3B0aW9uczogc3RyaW5nW10sXG4gIGN1cnJlbnQ6IHN0cmluZyxcbiAgb25TZWxlY3Q6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLFxuKSB7XG4gIGNvbnN0IG1lbnUgPSBuZXcgb2JzaWRpYW4uTWVudSgpXG5cbiAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5zZXRUaXRsZShgJHtvcHRpb24gPT09IGN1cnJlbnQgPyAn4pyTICcgOiAnICAnfSR7b3B0aW9ufWApXG4gICAgICBpdGVtLm9uQ2xpY2soKCkgPT4gb25TZWxlY3Qob3B0aW9uKSlcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgcmVjdCA9IGFuY2hvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICBtZW51LnNob3dBdFBvc2l0aW9uKHsgeDogcmVjdC5sZWZ0LCB5OiByZWN0LmJvdHRvbSArIDQgfSlcbn1cbiIsInR5cGUgR2VuZXJpY0ZuID0gKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdm9pZFxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2U8VCBleHRlbmRzIEdlbmVyaWNGbj4oZm46IFQsIG1zOiBudW1iZXIpIHtcbiAgbGV0IHRpbWVvdXQ6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgdW5kZWZpbmVkXG5cbiAgcmV0dXJuICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gZm4oLi4uYXJncyksIG1zKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBvYnNpZGlhbiBmcm9tICdvYnNpZGlhbidcblxuaW1wb3J0IHtcbiAgREVGQVVMVF9CT0FSRF9OQU1FLFxuICBFU1RBRE9TLFxuICBPUkRFUl9TVEVQLFxuICBQT01PRE9ST19MT0dfQkFTRU5BTUUsXG4gIFBPTU9ET1JPX1dPUktfQ1lDTEVTX0JFRk9SRV9MT05HX0JSRUFLLFxuICBQUklPUklEQURFUyxcbiAgVklFV19UWVBFLFxufSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBtb3ZlVGFza1RvQWN0aXZlRm9sZGVyLCBtb3ZlVGFza1RvQ2FuY2VsbGVkRm9sZGVyLCBtb3ZlVGFza1RvQ29tcGxldGVkRm9sZGVyIH0gZnJvbSAnLi4vZW5naW5lcy9jb21wbGV0aW9uRW5naW5lJ1xuaW1wb3J0IHsgdXBkYXRlRnJvbnRtYXR0ZXIgfSBmcm9tICcuLi9lbmdpbmVzL2Zyb250bWF0dGVyRW5naW5lJ1xuaW1wb3J0IHsgcGVyc2lzdFRhc2tPcmRlciwgcmVvcmRlckxpc3QgfSBmcm9tICcuLi9lbmdpbmVzL29yZGVyRW5naW5lJ1xuaW1wb3J0IHtcbiAgYWR2YW5jZVBvbW9kb3JvU3RhdGUsXG4gIGFwcGx5UG9tb2Rvcm9EdXJhdGlvbnMsXG4gIGVudGVyUG9tb2Rvcm9EZXZpYXRpb24sXG4gIGV4aXRQb21vZG9yb0RldmlhdGlvbixcbiAgZm9ybWF0UG9tb2Rvcm9Db3VudGRvd24sXG4gIGdldERldmlhdGlvbkVsYXBzZWRTZWNvbmRzLFxuICBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyxcbiAgZ2V0UG9tb2Rvcm9QaGFzZUxhYmVsLFxuICBnZXRQb21vZG9yb1JlbWFpbmluZ1NlY29uZHMsXG4gIG5vcm1hbGl6ZVBvbW9kb3JvRHVyYXRpb25zLFxuICBwYXVzZVBvbW9kb3JvLFxuICByZXNldFBvbW9kb3JvLFxuICByZXN1bWVQb21vZG9ybyxcbiAgc3RhcnRQb21vZG9ybyxcbn0gZnJvbSAnLi4vZW5naW5lcy9wb21vZG9yb0VuZ2luZSdcbmltcG9ydCB7XG4gIGFwcGVuZFBvbW9kb3JvTG9nRW50cnksXG4gIGRlbGV0ZVBvbW9kb3JvTG9nRW50cnksXG4gIGdldEVudHJpZXNCeURhdGUsXG4gIHJlYWRQb21vZG9yb0xvZ0VudHJpZXMsXG4gIHRvTG9jYWxEYXRlVGV4dCxcbn0gZnJvbSAnLi4vZW5naW5lcy9wb21vZG9yb0xvZ0VuZ2luZSdcbmltcG9ydCB7IHJlYmFsYW5jZUdyb3VwRW5kRGF0ZXMgfSBmcm9tICcuLi9lbmdpbmVzL3NjaGVkdWxlRW5naW5lJ1xuaW1wb3J0IHtcbiAgZXh0cmFjdFRhc2tCb2R5UHJldmlldyxcbiAgZ2V0VGFza3MsXG4gIGdyb3VwVG9wTGV2ZWxUYXNrcyxcbiAgaXNUYXNrSW5DYW5jZWxsZWRGb2xkZXIsXG4gIGlzVGFza0luQ29tcGxldGVkRm9sZGVyLFxuICBpc1Rhc2tJbkZpbmlzaGVkRm9sZGVyLFxuICBwYXJzZVRhc2tEYXRlLFxufSBmcm9tICcuLi9lbmdpbmVzL3Rhc2tFbmdpbmUnXG5pbXBvcnQgeyBFZGl0U2VjdGlvbk1vZGFsIH0gZnJvbSAnLi4vbW9kYWxzL0VkaXRTZWN0aW9uTW9kYWwnXG5pbXBvcnQgeyBFZGl0Qm9hcmRNb2RhbCB9IGZyb20gJy4uL21vZGFscy9FZGl0Qm9hcmRNb2RhbCdcbmltcG9ydCB7IE5ld0JvYXJkTW9kYWwgfSBmcm9tICcuLi9tb2RhbHMvTmV3Qm9hcmRNb2RhbCdcbmltcG9ydCB7IE5ld0dyb3VwTW9kYWwgfSBmcm9tICcuLi9tb2RhbHMvTmV3R3JvdXBNb2RhbCdcbmltcG9ydCB7IE5ld1Rhc2tNb2RhbCB9IGZyb20gJy4uL21vZGFscy9OZXdUYXNrTW9kYWwnXG5pbXBvcnQgeyBFZGl0VGFza0ZpbGVNb2RhbCB9IGZyb20gJy4uL21vZGFscy9FZGl0VGFza0ZpbGVNb2RhbCdcbmltcG9ydCB7IEFkZFRhc2tDb21tZW50TW9kYWwgfSBmcm9tICcuLi9tb2RhbHMvQWRkVGFza0NvbW1lbnRNb2RhbCdcbmltcG9ydCB7IENvbmZpcm1EZWxldGVUYXNrTW9kYWwgfSBmcm9tICcuLi9tb2RhbHMvQ29uZmlybURlbGV0ZVRhc2tNb2RhbCdcbmltcG9ydCB7IGdldFBvbW9kb3JvUHJlc2V0Q2FyZERhdGEsIFBvbW9kb3JvUHJlc2V0TW9kYWwgfSBmcm9tICcuLi9tb2RhbHMvUG9tb2Rvcm9QcmVzZXRNb2RhbCdcbmltcG9ydCB7IFNlbGVjdFBvbW9kb3JvVGFza01vZGFsIH0gZnJvbSAnLi4vbW9kYWxzL1NlbGVjdFBvbW9kb3JvVGFza01vZGFsJ1xuaW1wb3J0IHR5cGUgeyBUYXJlYXNQbHVnaW4gfSBmcm9tICcuLi9wbHVnaW4vVGFyZWFzUGx1Z2luJ1xuaW1wb3J0IHR5cGUgeyBFcXVpcG8sIFBvbW9kb3JvRHVyYXRpb25zLCBQb21vZG9yb1BoYXNlLCBQb21vZG9yb1N0YXRlLCBUYXNrRnJvbnRtYXR0ZXIsIFRhc2tJdGVtIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBzaG93RHJvcGRvd24gfSBmcm9tICcuLi91aS9kcm9wZG93bidcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnLi4vdXRpbHMvZGVib3VuY2UnXG5cbmV4cG9ydCBjbGFzcyBUYXJlYXNWaWV3IGV4dGVuZHMgb2JzaWRpYW4uSXRlbVZpZXcge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBDT01QTEVURURfVEFCX0lEID0gJ19fY29tcGxldGVkX18nXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENBTkNFTExFRF9UQUJfSUQgPSAnX19jYW5jZWxsZWRfXydcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUE9NT0RPUk9fVEFCX0lEID0gJ19fcG9tb2Rvcm9fXydcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUE9NT0RPUk9fQlJFQUtfTUVTU0FHRVMgPSBbXG4gICAgJ1Jlc3BpcsOhIHVuIHRvcXVlLCB2ZW7DrXMgYmllbi4nLFxuICAgICdTb2x0w6EgbG9zIGhvbWJyb3MgdW4gc2VndW5kby4nLFxuICAgICdIaWRyYXRhdGUsIGNhbXBlw7NuLicsXG4gICAgJ01pY3JvIGRlc2NhbnNvIHBhcmEgdm9sdmVyIG3DoXMgZnVlcnRlLicsXG4gICAgJ0J1ZW4gcml0bW8hLicsXG4gICAgJ0VzdGlyw6EgZWwgY3VlbGxvIGRvcyBzZWd1bmRvcy4nLFxuICAgICdBcHJvdmVjaMOhIGVzdGUgbWluaSByZXNldCBtZW50YWwuJyxcbiAgICAnUGFyw6EgdW4gc2VndW5kbzogdHUgY2VyZWJybyBsbyBhZ3JhZGVjZS4nLFxuICAgICdQYXNpdG8gYXRyw6FzIHkgdm9sdsOpcyBjb24gZm9jby4nLFxuICAgICdNaXJhZGEgbGVqb3MgZGUgbGEgcGFudGFsbGEuJyxcbiAgICAnQWZsb2rDoSBsYSBtYW5kw61idWxhLicsXG4gICAgJ1Jlc3BpcsOhIHByb2Z1bmRvLCBjcmFjay4nLFxuICAgICdTYWNhdGUgdGVuc2nDs24gZGVsIGN1ZWxsby4nLFxuICAgICdEZXNlbmNodWbDoSAyMCBzZWd1bmRvcy4nLFxuICAgICdUZSBlc3TDoXMgdm9sdmllbmRvIHVuYSBtw6FxdWluYSBkZSBjb25zdGFuY2lhLicsXG4gIF1cblxuICBwcml2YXRlIHBsdWdpbjogVGFyZWFzUGx1Z2luXG4gIGV4cGFuZGVkR3JvdXBzOiBTZXQ8c3RyaW5nPlxuICBleHBhbmRlZFRhc2tzOiBTZXQ8c3RyaW5nPlxuICBleHBhbmRlZENhcmRTdWJ0YXNrczogU2V0PHN0cmluZz5cblxuICBwcml2YXRlIGRlYm91bmNlZFJlbmRlcjogKCkgPT4gdm9pZFxuICBwcml2YXRlIGRyYWdQYXRoOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGRyYWdEZXB0aDogbnVtYmVyIHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBkcmFnUGFyZW50OiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGRyYWdJbnNlcnRQb3NpdGlvbjogJ2JlZm9yZScgfCAnYWZ0ZXInIHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBkcmFnR3JvdXBOYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGRyYWdHcm91cENvbHVtbjogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGRyb3BwZWRUYXNrQW5pbWF0aW9uUGF0aDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBsYXN0UmVuZGVyZWRUYWI6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgYWN0aXZlVGFiOiBzdHJpbmdcbiAgcHJpdmF0ZSBwb21vZG9yb1BhbmVsRWw6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBwb21vZG9yb1RpbWVFbDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIHBvbW9kb3JvUHJvZ3Jlc3NFbDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIHBvbW9kb3JvUGhhc2VFbDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIHBvbW9kb3JvQ3ljbGVFbDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIHBvbW9kb3JvU3RhdGVFbDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIHBvbW9kb3JvQnJlYWtNZXNzYWdlRWw6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBwb21vZG9yb1J1bkdseXBoRWw6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBwb21vZG9yb0xhc3RWaXN1YWxTdGF0ZTogeyBwaGFzZTogUG9tb2Rvcm9QaGFzZSwgcnVuU3RhdGU6IFBvbW9kb3JvU3RhdGVbJ3J1blN0YXRlJ10sIGlzRGV2aWF0aW9uQWN0aXZlOiBib29sZWFuIH0gfCBudWxsID0gbnVsbFxuICBwcml2YXRlIHBvbW9kb3JvTGFzdEJyZWF0aFNvdW5kU2Vjb25kOiBudW1iZXIgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIHBvbW9kb3JvTGFzdEJyZWF0aFNvdW5kS2V5OiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIHBvbW9kb3JvQXVkaW9Db250ZXh0OiBBdWRpb0NvbnRleHQgfCBudWxsID0gbnVsbFxuXG4gIGNvbnN0cnVjdG9yKGxlYWY6IG9ic2lkaWFuLldvcmtzcGFjZUxlYWYsIHBsdWdpbjogVGFyZWFzUGx1Z2luKSB7XG4gICAgc3VwZXIobGVhZilcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpblxuICAgIHRoaXMuZXhwYW5kZWRHcm91cHMgPSBuZXcgU2V0KHBsdWdpbi5lcXVpcG9zLm1hcChlcXVpcG8gPT4gYCR7ZXF1aXBvLnRhYmxlcm8gfHwgJ2RlZmF1bHQnfTo6JHtlcXVpcG8ubmFtZX1gKSlcbiAgICB0aGlzLmV4cGFuZGVkVGFza3MgPSBuZXcgU2V0KClcbiAgICB0aGlzLmV4cGFuZGVkQ2FyZFN1YnRhc2tzID0gbmV3IFNldCgpXG4gICAgdGhpcy5hY3RpdmVUYWIgPSBwbHVnaW4udGFibGVyb3NbMF0/Lm5hbWUgfHwgJ2RlZmF1bHQnXG4gICAgdGhpcy5kZWJvdW5jZWRSZW5kZXIgPSBkZWJvdW5jZSgoKSA9PiB0aGlzLnJlbmRlcigpLCAyNTApXG4gIH1cblxuICBnZXRWaWV3VHlwZSgpIHtcbiAgICByZXR1cm4gVklFV19UWVBFXG4gIH1cblxuICBnZXREaXNwbGF5VGV4dCgpIHtcbiAgICByZXR1cm4gJ1RhcmVhcydcbiAgfVxuXG4gIGdldEljb24oKSB7XG4gICAgcmV0dXJuICdsaXN0LWNoZWNrcydcbiAgfVxuXG4gIGFzeW5jIG9uT3BlbigpIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5nZXRSb290RWwoKVxuICAgIHJvb3QuYWRkQ2xhc3MoJ3RhcmVhcy1yb290JylcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpXG5cbiAgICB0aGlzLnJlZ2lzdGVySW50ZXJ2YWwod2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHZvaWQgdGhpcy5oYW5kbGVQb21vZG9yb1RpY2soKVxuICAgIH0sIDEwMDApKVxuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUub24oJ3Jlc29sdmVkJywgdGhpcy5kZWJvdW5jZWRSZW5kZXIpKVxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC52YXVsdC5vbignY3JlYXRlJywgdGhpcy5kZWJvdW5jZWRSZW5kZXIpKVxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC52YXVsdC5vbignZGVsZXRlJywgdGhpcy5kZWJvdW5jZWRSZW5kZXIpKVxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC52YXVsdC5vbigncmVuYW1lJywgdGhpcy5kZWJvdW5jZWRSZW5kZXIpKVxuICB9XG5cbiAgYXN5bmMgb25DbG9zZSgpIHtcbiAgICBpZiAodGhpcy5wb21vZG9yb0F1ZGlvQ29udGV4dCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5wb21vZG9yb0F1ZGlvQ29udGV4dC5jbG9zZSgpXG4gICAgICB9XG4gICAgICBjYXRjaCB7XG4gICAgICAgIC8vIElnbm9yZSBjbG9zZSBlcnJvcnMgd2hlbiBjb250ZXh0IGlzIGFscmVhZHkgY2xvc2VkLlxuICAgICAgfVxuICAgICAgdGhpcy5wb21vZG9yb0F1ZGlvQ29udGV4dCA9IG51bGxcbiAgICB9XG4gIH1cblxuICBhc3luYyByZW5kZXIoKSB7XG4gICAgdGhpcy5lbnN1cmVWYWxpZEFjdGl2ZVRhYigpXG4gICAgY29uc3Qgc2hvdWxkQW5pbWF0ZVRhYlRyYW5zaXRpb24gPSB0aGlzLmxhc3RSZW5kZXJlZFRhYiAhPT0gbnVsbCAmJiB0aGlzLmxhc3RSZW5kZXJlZFRhYiAhPT0gdGhpcy5hY3RpdmVUYWJcbiAgICB0aGlzLmxhc3RSZW5kZXJlZFRhYiA9IHRoaXMuYWN0aXZlVGFiXG5cbiAgICBjb25zdCByb290ID0gdGhpcy5nZXRSb290RWwoKVxuICAgIHJvb3QuZW1wdHkoKVxuICAgIHRoaXMucmVzZXRQb21vZG9yb0RvbVJlZnMoKVxuXG4gICAgdGhpcy5yZW5kZXJIZWFkZXIocm9vdClcbiAgICB0aGlzLnJlbmRlclRhYnMocm9vdClcbiAgICBjb25zdCBjb250ZW50ID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtdGFiLWNvbnRlbnQnIH0pXG4gICAgaWYgKHNob3VsZEFuaW1hdGVUYWJUcmFuc2l0aW9uKVxuICAgICAgY29udGVudC5hZGRDbGFzcygndGFyZWFzLXRhYi1jb250ZW50LWFuaW1hdGUnKVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlVGFiID09PSBUYXJlYXNWaWV3LlBPTU9ET1JPX1RBQl9JRCkge1xuICAgICAgYXdhaXQgdGhpcy5yZW5kZXJQb21vZG9yb1BhbmVsKGNvbnRlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhbGxUYXNrcyA9IGdldFRhc2tzKHRoaXMuYXBwKVxuICAgIGNvbnN0IHRhYlRhc2tzID0gdGhpcy5hY3RpdmVUYWIgPT09IFRhcmVhc1ZpZXcuQ09NUExFVEVEX1RBQl9JRFxuICAgICAgPyBhbGxUYXNrcy5maWx0ZXIodGFzayA9PiBpc1Rhc2tJbkZpbmlzaGVkRm9sZGVyKHRhc2suZmlsZS5wYXRoKSlcbiAgICAgIDogdGhpcy5hY3RpdmVUYWIgPT09IFRhcmVhc1ZpZXcuQ0FOQ0VMTEVEX1RBQl9JRFxuICAgICAgICA/IGFsbFRhc2tzLmZpbHRlcih0YXNrID0+IGlzVGFza0luQ2FuY2VsbGVkRm9sZGVyKHRhc2suZmlsZS5wYXRoKSlcbiAgICAgICAgOiBhbGxUYXNrc1xuICAgICAgICAgICAgLmZpbHRlcih0YXNrID0+ICFpc1Rhc2tJbkNvbXBsZXRlZEZvbGRlcih0YXNrLmZpbGUucGF0aCkpXG4gICAgICAgICAgICAuZmlsdGVyKHRhc2sgPT4gdGFzay5maWxlLmJhc2VuYW1lLnRvTG93ZXJDYXNlKCkgIT09IFBPTU9ET1JPX0xPR19CQVNFTkFNRS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgLmZpbHRlcih0YXNrID0+IHRhc2sudGFibGVybyA9PT0gdGhpcy5hY3RpdmVUYWIpXG5cbiAgICBpZiAodGhpcy5hY3RpdmVUYWIgPT09IFRhcmVhc1ZpZXcuQ09NUExFVEVEX1RBQl9JRCB8fCB0aGlzLmFjdGl2ZVRhYiA9PT0gVGFyZWFzVmlldy5DQU5DRUxMRURfVEFCX0lEKSB7XG4gICAgICB0aGlzLnJlbmRlckNvbXBsZXRlZFRhYmxlKGNvbnRlbnQsIHRhYlRhc2tzKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGFza1ByZXZpZXdNYXAgPSBhd2FpdCB0aGlzLmJ1aWxkVGFza1ByZXZpZXdNYXAodGFiVGFza3MpXG4gICAgY29uc3QgYm9hcmQgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1ib2FyZCcgfSlcbiAgICBjb25zdCBib2FyZEdyb3VwcyA9IHRoaXMucGx1Z2luLmdldEVxdWlwb3NGb3JUYWJsZXJvKHRoaXMuYWN0aXZlVGFiKVxuICAgIGNvbnN0IGdyb3VwcyA9IGdyb3VwVG9wTGV2ZWxUYXNrcyh0YWJUYXNrcywgYm9hcmRHcm91cHMpXG4gICAgZm9yIChjb25zdCBncm91cCBvZiBib2FyZEdyb3VwcylcbiAgICAgIHRoaXMucmVuZGVyR3JvdXAoYm9hcmQsIGdyb3VwLCBncm91cHNbZ3JvdXAubmFtZV0gfHwgW10sIHRhYlRhc2tzLCB0YXNrUHJldmlld01hcClcblxuICAgIGlmIChncm91cHNbJ1NpbiBncnVwbyddPy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbmRlckdyb3VwKGJvYXJkLCB7IG5hbWU6ICdTaW4gZ3J1cG8nLCBjb2xvcjogJ3ZhcigtLXRleHQtZmFpbnQpJyB9LCBncm91cHNbJ1NpbiBncnVwbyddLCB0YWJUYXNrcywgdGFza1ByZXZpZXdNYXApXG5cbiAgICBjb25zdCBhZGRHcm91cCA9IGNvbnRlbnQuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLW5ldy1ncm91cCcgfSlcbiAgICBjb25zdCBhZGRHcm91cExpbmsgPSBhZGRHcm91cC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJysgTnVldm8gZ3J1cG8nLCBjbHM6ICd0YXJlYXMtYWRkLWxpbmsnIH0pXG4gICAgYWRkR3JvdXBMaW5rLm9uY2xpY2sgPSAoKSA9PiBuZXcgTmV3R3JvdXBNb2RhbCh0aGlzLmFwcCwgdGhpcy5wbHVnaW4sIHRoaXMsIHRoaXMuYWN0aXZlVGFiKS5vcGVuKClcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQ29tcGxldGVkVGFibGUocm9vdDogSFRNTEVsZW1lbnQsIHRhc2tzOiBUYXNrSXRlbVtdKSB7XG4gICAgY29uc3Qgd3JhcCA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXRhYmxlLXdyYXAnIH0pXG4gICAgY29uc3QgdGFibGUgPSB3cmFwLmNyZWF0ZUVsKCd0YWJsZScsIHsgY2xzOiAndGFyZWFzLXRhYmxlJyB9KVxuICAgIGNvbnN0IGNvbHVtbnMgPSBbJycsICcnLCAnVGFyZWEnLCAnRXN0YWRvJywgJ0dydXBvJywgJ1ByaW9yaWRhZCcsICdEZWRpY2FkbycsICdFc3RpbWFjacOzbicsICdJbmljaW8nLCAnRmluJywgJyUnLCAnQWNjaW9uZXMnXVxuXG4gICAgY29uc3QgdGFibGVIZWFkID0gdGFibGUuY3JlYXRlRWwoJ3RoZWFkJylcbiAgICBjb25zdCBoZWFkUm93ID0gdGFibGVIZWFkLmNyZWF0ZUVsKCd0cicpXG4gICAgZm9yIChjb25zdCBjb2x1bW4gb2YgY29sdW1ucykge1xuICAgICAgY29uc3QgaGVhZGVyQ2VsbCA9IGhlYWRSb3cuY3JlYXRlRWwoJ3RoJywgeyB0ZXh0OiBjb2x1bW4gfSlcbiAgICAgIGlmIChbJ0RlZGljYWRvJywgJ0VzdGltYWNpw7NuJywgJyUnXS5pbmNsdWRlcyhjb2x1bW4pKVxuICAgICAgICBoZWFkZXJDZWxsLmFkZENsYXNzKCd0YXJlYXMtdGgtbnVtJylcbiAgICB9XG5cbiAgICBjb25zdCB0YWJsZUJvZHkgPSB0YWJsZS5jcmVhdGVFbCgndGJvZHknKVxuICAgIGNvbnN0IHRvcExldmVsVGFza3MgPSB0YXNrc1xuICAgICAgLmZpbHRlcih0YXNrID0+ICF0YXNrLnBhcmVudClcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcilcblxuICAgIGZvciAoY29uc3QgdGFzayBvZiB0b3BMZXZlbFRhc2tzKVxuICAgICAgdGhpcy5yZW5kZXJSb3codGFibGVCb2R5LCB0YXNrLCB0YXNrcywgMClcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyVGFicyhyb290OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHRhYnMgPSByb290LmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy10YWJzJyB9KVxuXG4gICAgZm9yIChjb25zdCBib2FyZCBvZiB0aGlzLnBsdWdpbi50YWJsZXJvcykge1xuICAgICAgY29uc3QgYm9hcmRCdG4gPSB0YWJzLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgIHRleHQ6IGJvYXJkLm5hbWUsXG4gICAgICAgIGNsczogYHRhcmVhcy10YWItYnRuJHt0aGlzLmFjdGl2ZVRhYiA9PT0gYm9hcmQubmFtZSA/ICcgaXMtYWN0aXZlJyA6ICcnfWAsXG4gICAgICB9KVxuICAgICAgYm9hcmRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSBib2FyZC5uYW1lXG4gICAgICAgIHRoaXMucmVuZGVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZWRCdG4gPSB0YWJzLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICB0ZXh0OiAnQ29tcGxldGFkYXMnLFxuICAgICAgY2xzOiBgdGFyZWFzLXRhYi1idG4ke3RoaXMuYWN0aXZlVGFiID09PSBUYXJlYXNWaWV3LkNPTVBMRVRFRF9UQUJfSUQgPyAnIGlzLWFjdGl2ZScgOiAnJ31gLFxuICAgIH0pXG4gICAgY29tcGxldGVkQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9IFRhcmVhc1ZpZXcuQ09NUExFVEVEX1RBQl9JRFxuICAgICAgdGhpcy5yZW5kZXIoKVxuICAgIH1cblxuICAgIGNvbnN0IGNhbmNlbGxlZEJ0biA9IHRhYnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIHRleHQ6ICdDYW5jZWxhZGFzJyxcbiAgICAgIGNsczogYHRhcmVhcy10YWItYnRuJHt0aGlzLmFjdGl2ZVRhYiA9PT0gVGFyZWFzVmlldy5DQU5DRUxMRURfVEFCX0lEID8gJyBpcy1hY3RpdmUnIDogJyd9YCxcbiAgICB9KVxuICAgIGNhbmNlbGxlZEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVUYWIgPSBUYXJlYXNWaWV3LkNBTkNFTExFRF9UQUJfSURcbiAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9XG5cbiAgICBjb25zdCBwb21vZG9yb0J0biA9IHRhYnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIHRleHQ6ICdQb21vZG9ybycsXG4gICAgICBjbHM6IGB0YXJlYXMtdGFiLWJ0biR7dGhpcy5hY3RpdmVUYWIgPT09IFRhcmVhc1ZpZXcuUE9NT0RPUk9fVEFCX0lEID8gJyBpcy1hY3RpdmUnIDogJyd9YCxcbiAgICB9KVxuICAgIHBvbW9kb3JvQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9IFRhcmVhc1ZpZXcuUE9NT0RPUk9fVEFCX0lEXG4gICAgICB0aGlzLnJlbmRlcigpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZW5kZXJQb21vZG9yb1BhbmVsKHJvb3Q6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgcnVudGltZVN0YXRlID0gdGhpcy5nZXRQb21vZG9yb1J1bnRpbWVTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IHBhbmVsID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcGFuZWwnIH0pXG4gICAgdGhpcy5wb21vZG9yb1BhbmVsRWwgPSBwYW5lbFxuXG4gICAgY29uc3QgdG9wID0gcGFuZWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRvcCcgfSlcbiAgICB0aGlzLnBvbW9kb3JvUGhhc2VFbCA9IHRvcC5jcmVhdGVFbCgnaDInLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1waGFzZScgfSlcbiAgICB0aGlzLnBvbW9kb3JvQ3ljbGVFbCA9IHRvcC5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWN5Y2xlcy1iYWRnZScgfSlcblxuICAgIGNvbnN0IHRpbWVyV3JhcCA9IHBhbmVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby10aW1lci13cmFwJyB9KVxuICAgIHRoaXMucG9tb2Rvcm9Qcm9ncmVzc0VsID0gdGltZXJXcmFwLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcm9ncmVzcycgfSlcbiAgICBjb25zdCB0aW1lcklubmVyID0gdGhpcy5wb21vZG9yb1Byb2dyZXNzRWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXByb2dyZXNzLWlubmVyJyB9KVxuICAgIHRoaXMucG9tb2Rvcm9UaW1lRWwgPSB0aW1lcklubmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby10aW1lJyB9KVxuICAgIHRoaXMucG9tb2Rvcm9SdW5HbHlwaEVsID0gdGltZXJJbm5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcnVuLWdseXBoJyB9KVxuICAgIHRoaXMucG9tb2Rvcm9CcmVha01lc3NhZ2VFbCA9IHBhbmVsLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tYnJlYWstbWVzc2FnZScgfSlcblxuICAgIGNvbnN0IGNvbnRyb2xzID0gcGFuZWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbnRyb2xzJyB9KVxuICAgIHRoaXMucmVuZGVyUG9tb2Rvcm9Db250cm9scyhjb250cm9scywgcnVudGltZVN0YXRlKVxuICAgIHRoaXMucG9tb2Rvcm9TdGF0ZUVsID0gcGFuZWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXN0YXRlLWJhcicgfSlcblxuICAgIGNvbnN0IGNvbmZpZyA9IHBhbmVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb25maWcnIH0pXG4gICAgY29uZmlnLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ0R1cmFjaW9uZXMgKG1pbiknIH0pXG4gICAgdGhpcy5yZW5kZXJQb21vZG9yb0R1cmF0aW9uQ2FyZChjb25maWcsIHJ1bnRpbWVTdGF0ZS5kdXJhdGlvbnMpXG4gICAgYXdhaXQgdGhpcy5yZW5kZXJQb21vZG9yb1Rhc2tDYXJkKHBhbmVsKVxuICAgIGF3YWl0IHRoaXMucmVuZGVyUG9tb2Rvcm9EYWlseUxvZyhwYW5lbClcblxuICAgIHRoaXMudXBkYXRlUG9tb2Rvcm9Eb20ocnVudGltZVN0YXRlLCBEYXRlLm5vdygpKVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJQb21vZG9yb0R1cmF0aW9uQ2FyZChjb250YWluZXI6IEhUTUxFbGVtZW50LCBkdXJhdGlvbnM6IFBvbW9kb3JvRHVyYXRpb25zKSB7XG4gICAgY29uc3QgY2FyZERhdGEgPSBnZXRQb21vZG9yb1ByZXNldENhcmREYXRhKGR1cmF0aW9ucylcbiAgICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb25maWctY2FyZCcgfSlcbiAgICBjYXJkLnNldEF0dHIoJ3JvbGUnLCAnYnV0dG9uJylcbiAgICBjYXJkLnNldEF0dHIoJ3RhYmluZGV4JywgJzAnKVxuICAgIGNhcmQub25kYmxjbGljayA9ICgpID0+IHRoaXMub3BlblBvbW9kb3JvUHJlc2V0TW9kYWwoZHVyYXRpb25zKVxuICAgIGNhcmQub25rZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ICE9PSAnRW50ZXInICYmIGV2ZW50LmtleSAhPT0gJyAnKVxuICAgICAgICByZXR1cm5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMub3BlblBvbW9kb3JvUHJlc2V0TW9kYWwoZHVyYXRpb25zKVxuICAgIH1cblxuICAgIGNhcmQuY3JlYXRlRWwoJ2g0JywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnLWNhcmQtdGl0bGUnLCB0ZXh0OiBjYXJkRGF0YS50aXRsZSB9KVxuICAgIGNhcmQuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZy1jYXJkLWRpdmlkZXInIH0pXG4gICAgY2FyZC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZy1jYXJkLWxhYmVsJywgdGV4dDogJ1VzbycgfSlcbiAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnLWNhcmQtdGV4dCcsIHRleHQ6IGNhcmREYXRhLnVzYWdlIH0pXG4gICAgY2FyZC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnLWNhcmQtZGl2aWRlcicgfSlcbiAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnLWNhcmQtdGV4dCcsIHRleHQ6IGNhcmREYXRhLndvcmtMYWJlbCB9KVxuICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb25maWctY2FyZC10ZXh0JywgdGV4dDogY2FyZERhdGEuc2hvcnRCcmVha0xhYmVsIH0pXG4gICAgY2FyZC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZy1jYXJkLXRleHQnLCB0ZXh0OiBjYXJkRGF0YS5sb25nQnJlYWtMYWJlbCB9KVxuICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb25maWctY2FyZC10ZXh0JywgdGV4dDogY2FyZERhdGEuY3ljbGVzTGFiZWwgfSlcbiAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnLWNhcmQtaGludCcsIHRleHQ6ICdEb2JsZSBjbGljayBwYXJhIGNhbWJpYXIgZHVyYWNpw7NuJyB9KVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuUG9tb2Rvcm9QcmVzZXRNb2RhbChkdXJhdGlvbnM6IFBvbW9kb3JvRHVyYXRpb25zKSB7XG4gICAgbmV3IFBvbW9kb3JvUHJlc2V0TW9kYWwodGhpcy5hcHAsIGR1cmF0aW9ucywgKG5leHREdXJhdGlvbnMpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlUG9tb2Rvcm9EdXJhdGlvbnMobmV4dER1cmF0aW9ucylcbiAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9KS5vcGVuKClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVuZGVyUG9tb2Rvcm9UYXNrQ2FyZChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tdGFzay1zZWN0aW9uJyB9KVxuICAgIHNlY3Rpb24uY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnVGFyZWEgdmluY3VsYWRhJyB9KVxuICAgIGNvbnN0IGlzUnVubmluZyA9IHRoaXMucGx1Z2luLnBvbW9kb3JvLnJ1blN0YXRlID09PSAncnVubmluZydcblxuICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IHRoaXMuZ2V0U2VsZWN0ZWRQb21vZG9yb1Rhc2soKVxuICAgIGlmIChzZWxlY3RlZFRhc2spIHtcbiAgICAgIGNvbnN0IGFsbFRhc2tzID0gZ2V0VGFza3ModGhpcy5hcHApXG4gICAgICBjb25zdCB0YXNrUHJldmlld01hcCA9IGF3YWl0IHRoaXMuYnVpbGRUYXNrUHJldmlld01hcChbc2VsZWN0ZWRUYXNrXSlcbiAgICAgIGNvbnN0IGxpc3QgPSBzZWN0aW9uLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLWxpc3QgdGFyZWFzLXBvbW9kb3JvLXRhc2stY2FyZC1saXN0JyB9KVxuICAgICAgdGhpcy5yZW5kZXJUYXNrQ2FyZChsaXN0LCBzZWxlY3RlZFRhc2ssIGFsbFRhc2tzLCB0YXNrUHJldmlld01hcC5nZXQoc2VsZWN0ZWRUYXNrLmZpbGUucGF0aCkgfHwgJycpXG4gICAgICBzZWN0aW9uLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tdGFzay1jYXJkLWhpbnQnLCB0ZXh0OiAnVXPDoSBlbCBib3TDs24gcGFyYSBjYW1iaWFyIGxhIHRhcmVhIHZpbmN1bGFkYScgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBlbXB0eUNhcmQgPSBzZWN0aW9uLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby10YXNrLWNhcmQnIH0pXG4gICAgICBlbXB0eUNhcmQuY3JlYXRlRWwoJ3AnLCB7XG4gICAgICAgIGNsczogJ3RhcmVhcy1wb21vZG9yby10YXNrLWNhcmQtZW1wdHknLFxuICAgICAgICB0ZXh0OiAnTm8gaGF5IHRhcmVhIHNlbGVjY2lvbmFkYScsXG4gICAgICB9KVxuICAgICAgZW1wdHlDYXJkLmNyZWF0ZUVsKCdwJywge1xuICAgICAgICBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tdGFzay1jYXJkLWhpbnQnLFxuICAgICAgICB0ZXh0OiAnU2VsZWNjaW9uw6EgdW5hIHRhcmVhIGNvbiBlbCBib3TDs24nLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VCdXR0b24gPSBzZWN0aW9uLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICB0ZXh0OiAnQ2FtYmlhciB0YXJlYSB2aW5jdWxhZGEnLFxuICAgICAgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWJ0biB0YXJlYXMtcG9tb2Rvcm8tdGFzay1jaGFuZ2UtYnRuJyxcbiAgICB9KVxuICAgIGNoYW5nZUJ1dHRvbi5kaXNhYmxlZCA9IGlzUnVubmluZ1xuICAgIGNoYW5nZUJ1dHRvbi5zZXRBdHRyKCdhcmlhLWxhYmVsJywgJ0NhbWJpYXIgdGFyZWEgdmluY3VsYWRhJylcbiAgICBjaGFuZ2VCdXR0b24uc2V0QXR0cigndGl0bGUnLCBpc1J1bm5pbmdcbiAgICAgID8gJ05vIHNlIHB1ZWRlIGNhbWJpYXIgbGEgdGFyZWEgbWllbnRyYXMgZWwgY29udGFkb3IgZXN0w6EgY29ycmllbmRvJ1xuICAgICAgOiAnQ2FtYmlhciB0YXJlYSB2aW5jdWxhZGEnKVxuICAgIGNoYW5nZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5vcGVuUG9tb2Rvcm9UYXNrU2VsZWN0b3IoKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZWxlY3RlZFBvbW9kb3JvVGFzaygpOiBUYXNrSXRlbSB8IG51bGwge1xuICAgIGNvbnN0IHNlbGVjdGVkVGFza1BhdGggPSB0aGlzLnBsdWdpbi5wb21vZG9yby5zZWxlY3RlZFRhc2tQYXRoXG4gICAgaWYgKCFzZWxlY3RlZFRhc2tQYXRoKVxuICAgICAgcmV0dXJuIG51bGxcblxuICAgIGNvbnN0IHRhc2sgPSBnZXRUYXNrcyh0aGlzLmFwcCkuZmluZChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSBzZWxlY3RlZFRhc2tQYXRoKVxuICAgIGlmICh0YXNrKVxuICAgICAgcmV0dXJuIHRhc2tcblxuICAgIHRoaXMuc2V0UG9tb2Rvcm9TZWxlY3RlZFRhc2tQYXRoKG51bGwpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHByaXZhdGUgb3BlblBvbW9kb3JvVGFza1NlbGVjdG9yKCkge1xuICAgIGlmICh0aGlzLnBsdWdpbi5wb21vZG9yby5ydW5TdGF0ZSA9PT0gJ3J1bm5pbmcnKSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdObyBzZSBwdWVkZSBjYW1iaWFyIGxhIHRhcmVhIG1pZW50cmFzIGVsIGNvbnRhZG9yIGVzdMOhIGNvcnJpZW5kby4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWxsVGFza3MgPSBnZXRUYXNrcyh0aGlzLmFwcClcbiAgICBjb25zdCBzZWxlY3RhYmxlVGFza3MgPSBhbGxUYXNrc1xuICAgICAgLmZpbHRlcih0YXNrID0+ICF0YXNrLnBhcmVudClcbiAgICAgIC5maWx0ZXIodGFzayA9PiB0YXNrLmVzdGFkbyA9PT0gJ0VuIHByb2dyZXNvJylcbiAgICAgIC5maWx0ZXIodGFzayA9PiAhaXNUYXNrSW5Db21wbGV0ZWRGb2xkZXIodGFzay5maWxlLnBhdGgpKVxuXG4gICAgbmV3IFNlbGVjdFBvbW9kb3JvVGFza01vZGFsKFxuICAgICAgdGhpcy5hcHAsXG4gICAgICBzZWxlY3RhYmxlVGFza3MsXG4gICAgICB0aGlzLnBsdWdpbi5wb21vZG9yby5zZWxlY3RlZFRhc2tQYXRoLFxuICAgICAgKHRhc2tQYXRoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0UG9tb2Rvcm9TZWxlY3RlZFRhc2tQYXRoKHRhc2tQYXRoKVxuICAgICAgICB0aGlzLnJlbmRlcigpXG4gICAgICB9LFxuICAgICkub3BlbigpXG4gIH1cblxuICBwcml2YXRlIHNldFBvbW9kb3JvU2VsZWN0ZWRUYXNrUGF0aCh0YXNrUGF0aDogc3RyaW5nIHwgbnVsbCkge1xuICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUoe1xuICAgICAgLi4udGhpcy5wbHVnaW4ucG9tb2Rvcm8sXG4gICAgICBkdXJhdGlvbnM6IHsgLi4udGhpcy5wbHVnaW4ucG9tb2Rvcm8uZHVyYXRpb25zIH0sXG4gICAgICBzZWxlY3RlZFRhc2tQYXRoOiB0YXNrUGF0aCxcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJQb21vZG9yb0NvbnRyb2xzKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHN0YXRlOiBQb21vZG9yb1N0YXRlKSB7XG4gICAgY29uc3QgaWNvbkNvbnRyb2xzID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb250cm9scy1pY29ucycgfSlcblxuICAgIGlmIChzdGF0ZS5ydW5TdGF0ZSA9PT0gJ3J1bm5pbmcnKSB7XG4gICAgICBjb25zdCBwYXVzZUJ1dHRvbiA9IGljb25Db250cm9scy5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAn4o+4JywgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWJ0biB0YXJlYXMtcG9tb2Rvcm8tYnRuLWljb24nIH0pXG4gICAgICBwYXVzZUJ1dHRvbi5zZXRBdHRyKCdhcmlhLWxhYmVsJywgJ1BhdXNhcicpXG4gICAgICBwYXVzZUJ1dHRvbi5zZXRBdHRyKCd0aXRsZScsICdQYXVzYXInKVxuICAgICAgcGF1c2VCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuaGFuZGxlUG9tb2Rvcm9QYXVzZSgpXG4gICAgfVxuICAgIGVsc2UgaWYgKHN0YXRlLnJ1blN0YXRlID09PSAncGF1c2VkJykge1xuICAgICAgY29uc3QgcmVzdW1lQnV0dG9uID0gaWNvbkNvbnRyb2xzLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICfilrYnLCBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tYnRuIHRhcmVhcy1wb21vZG9yby1idG4taWNvbiBtb2QtY3RhJyB9KVxuICAgICAgcmVzdW1lQnV0dG9uLnNldEF0dHIoJ2FyaWEtbGFiZWwnLCAnUmVhbnVkYXInKVxuICAgICAgcmVzdW1lQnV0dG9uLnNldEF0dHIoJ3RpdGxlJywgJ1JlYW51ZGFyJylcbiAgICAgIHJlc3VtZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5oYW5kbGVQb21vZG9yb1Jlc3VtZSgpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3Qgc3RhcnRCdXR0b24gPSBpY29uQ29udHJvbHMuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ+KWticsIGNsczogJ3RhcmVhcy1wb21vZG9yby1idG4gdGFyZWFzLXBvbW9kb3JvLWJ0bi1pY29uIG1vZC1jdGEnIH0pXG4gICAgICBzdGFydEJ1dHRvbi5zZXRBdHRyKCdhcmlhLWxhYmVsJywgJ0luaWNpYXInKVxuICAgICAgc3RhcnRCdXR0b24uc2V0QXR0cigndGl0bGUnLCAnSW5pY2lhcicpXG4gICAgICBzdGFydEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5oYW5kbGVQb21vZG9yb1N0YXJ0KClcbiAgICB9XG5cbiAgICBjb25zdCByZXNldEJ1dHRvbiA9IGljb25Db250cm9scy5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAn4oa6JywgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWJ0biB0YXJlYXMtcG9tb2Rvcm8tYnRuLWljb24nIH0pXG4gICAgcmVzZXRCdXR0b24uc2V0QXR0cignYXJpYS1sYWJlbCcsICdSZWluaWNpYXInKVxuICAgIHJlc2V0QnV0dG9uLnNldEF0dHIoJ3RpdGxlJywgJ1JlaW5pY2lhcicpXG4gICAgcmVzZXRCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHZvaWQgdGhpcy5oYW5kbGVQb21vZG9yb1Jlc2V0KClcbiAgICB9XG5cbiAgICBjb25zdCBkZXZpYXRpb25CdXR0b24gPSBpY29uQ29udHJvbHMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIHRleHQ6IHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlID8gJ/Cfk7UnIDogJ/Cfk54nLFxuICAgICAgY2xzOiBgdGFyZWFzLXBvbW9kb3JvLWJ0biB0YXJlYXMtcG9tb2Rvcm8tYnRuLWljb24ke3N0YXRlLmlzRGV2aWF0aW9uQWN0aXZlID8gJyBpcy1kZXZpYXRpb24tYWN0aXZlJyA6ICcnfWAsXG4gICAgfSlcbiAgICBkZXZpYXRpb25CdXR0b24uc2V0QXR0cignYXJpYS1sYWJlbCcsICdEZXN2w61vJylcbiAgICBkZXZpYXRpb25CdXR0b24uc2V0QXR0cigndGl0bGUnLCBzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZVxuICAgICAgPyAnRmluYWxpemFyIGRlc3bDrW8nXG4gICAgICA6ICdJbmljaWFyIGRlc3bDrW8gKGxsYW1hZGFzL3JldW5pb25lcyknKVxuICAgIGNvbnN0IGNhblRvZ2dsZURldmlhdGlvbiA9IHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlIHx8IHN0YXRlLnJ1blN0YXRlID09PSAncnVubmluZydcbiAgICBkZXZpYXRpb25CdXR0b24uZGlzYWJsZWQgPSAhY2FuVG9nZ2xlRGV2aWF0aW9uXG4gICAgZGV2aWF0aW9uQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmhhbmRsZVBvbW9kb3JvRGV2aWF0aW9uVG9nZ2xlKClcblxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb21vZG9yb1N0YXJ0KCkge1xuICAgIHRoaXMudW5sb2NrUG9tb2Rvcm9BdWRpbygpXG4gICAgY29uc3QgbmV4dCA9IHN0YXJ0UG9tb2Rvcm8odGhpcy5nZXRQb21vZG9yb1J1bnRpbWVTdGF0ZShmYWxzZSksIERhdGUubm93KCkpXG4gICAgdGhpcy5wbHVnaW4uc2V0UG9tb2Rvcm9TdGF0ZShuZXh0KVxuICAgIHRoaXMucmVuZGVyKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUG9tb2Rvcm9QYXVzZSgpIHtcbiAgICB0aGlzLnVubG9ja1BvbW9kb3JvQXVkaW8oKVxuICAgIGNvbnN0IG5leHQgPSBwYXVzZVBvbW9kb3JvKHRoaXMuZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUoZmFsc2UpLCBEYXRlLm5vdygpKVxuICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUobmV4dClcbiAgICB0aGlzLnJlbmRlcigpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBvbW9kb3JvUmVzdW1lKCkge1xuICAgIHRoaXMudW5sb2NrUG9tb2Rvcm9BdWRpbygpXG4gICAgY29uc3QgbmV4dCA9IHJlc3VtZVBvbW9kb3JvKHRoaXMuZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUoZmFsc2UpLCBEYXRlLm5vdygpKVxuICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUobmV4dClcbiAgICB0aGlzLnJlbmRlcigpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZVBvbW9kb3JvUmVzZXQoKSB7XG4gICAgdGhpcy51bmxvY2tQb21vZG9yb0F1ZGlvKClcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUoZmFsc2UpXG4gICAgYXdhaXQgdGhpcy5sb2dQb21vZG9yb1Jlc2V0RW50cnkoY3VycmVudCwgbm93KVxuICAgIGNvbnN0IG5leHQgPSByZXNldFBvbW9kb3JvKGN1cnJlbnQpXG4gICAgdGhpcy5wbHVnaW4uc2V0UG9tb2Rvcm9TdGF0ZShuZXh0KVxuICAgIHRoaXMucmVuZGVyKClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlUG9tb2Rvcm9EZXZpYXRpb25Ub2dnbGUoKSB7XG4gICAgdGhpcy51bmxvY2tQb21vZG9yb0F1ZGlvKClcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUoZmFsc2UpXG5cbiAgICBpZiAoY3VycmVudC5pc0RldmlhdGlvbkFjdGl2ZSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZXhpdFBvbW9kb3JvRGV2aWF0aW9uKGN1cnJlbnQsIG5vdylcbiAgICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUocmVzdWx0LnN0YXRlKVxuICAgICAgYXdhaXQgdGhpcy5hZGRQb21vZG9yb0RldmlhdGlvblRpbWVUb1NlbGVjdGVkVGFzayhyZXN1bHQuZWxhcHNlZFNlY29uZHMsIHJlc3VsdC5zdGF0ZSlcblxuICAgICAgaWYgKHJlc3VsdC5jb21wbGV0ZWRXb3JrKSB7XG4gICAgICAgIGNvbnN0IG5leHRQaGFzZUxhYmVsID0gZ2V0UG9tb2Rvcm9QaGFzZUxhYmVsKHJlc3VsdC5zdGF0ZS5waGFzZSlcbiAgICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShgRGVzdsOtbyBmaW5hbGl6YWRvLiBJbmljaWFuZG8gJHtuZXh0UGhhc2VMYWJlbC50b0xvd2VyQ2FzZSgpfS5gLCA3MDAwKVxuICAgICAgICB0aGlzLmZsYXNoUG9tb2Rvcm9QYW5lbCgpXG4gICAgICAgIHRoaXMucGxheVBvbW9kb3JvQWxhcm1TaG9ydCgpXG4gICAgICAgIGF3YWl0IHRoaXMuYWRkUG9tb2Rvcm9Xb3JrVGltZVRvU2VsZWN0ZWRUYXNrKFsnd29yayddLCByZXN1bHQuc3RhdGUpXG4gICAgICAgIGF3YWl0IHRoaXMubG9nUG9tb2Rvcm9FbnRyaWVzKFsnd29yayddLCByZXN1bHQuc3RhdGUsIG5vdylcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZW5kZXIoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbmV4dCA9IGVudGVyUG9tb2Rvcm9EZXZpYXRpb24oY3VycmVudCwgbm93KVxuICAgIGlmIChuZXh0ID09PSBjdXJyZW50KSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdTb2xvIHBvZMOpcyBpbmljaWFyIGRlc3bDrW8gY3VhbmRvIGVsIGNvbnRhZG9yIGVzdMOhIGNvcnJpZW5kby4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5wbHVnaW4uc2V0UG9tb2Rvcm9TdGF0ZShuZXh0KVxuICAgIHRoaXMucmVuZGVyKClcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUG9tb2Rvcm9EdXJhdGlvbnMobmV4dER1cmF0aW9uczogUG9tb2Rvcm9EdXJhdGlvbnMpIHtcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplUG9tb2Rvcm9EdXJhdGlvbnMobmV4dER1cmF0aW9ucylcbiAgICBjb25zdCBuZXh0ID0gYXBwbHlQb21vZG9yb0R1cmF0aW9ucyh0aGlzLmdldFBvbW9kb3JvUnVudGltZVN0YXRlKGZhbHNlKSwgbm9ybWFsaXplZClcbiAgICB0aGlzLnBsdWdpbi5zZXRQb21vZG9yb1N0YXRlKG5leHQpXG4gICAgdGhpcy51cGRhdGVQb21vZG9yb0RvbShuZXh0LCBEYXRlLm5vdygpKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVQb21vZG9yb1RpY2soKSB7XG4gICAgY29uc3QgcnVudGltZVN0YXRlID0gdGhpcy5nZXRQb21vZG9yb1J1bnRpbWVTdGF0ZSh0cnVlKVxuICAgIGlmICh0aGlzLmFjdGl2ZVRhYiA9PT0gVGFyZWFzVmlldy5QT01PRE9ST19UQUJfSUQpXG4gICAgICB0aGlzLnVwZGF0ZVBvbW9kb3JvRG9tKHJ1bnRpbWVTdGF0ZSwgRGF0ZS5ub3coKSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUobm90aWZ5Q29tcGxldGlvbjogYm9vbGVhbik6IFBvbW9kb3JvU3RhdGUge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBjb25zdCBhZHZhbmNlZCA9IGFkdmFuY2VQb21vZG9yb1N0YXRlKHRoaXMucGx1Z2luLnBvbW9kb3JvLCBub3cpXG5cbiAgICBpZiAoYWR2YW5jZWQudHJhbnNpdGlvbmVkKSB7XG4gICAgICB0aGlzLnBsdWdpbi5zZXRQb21vZG9yb1N0YXRlKGFkdmFuY2VkLnN0YXRlKVxuXG4gICAgICBpZiAobm90aWZ5Q29tcGxldGlvbilcbiAgICAgICAgdGhpcy5ub3RpZnlQb21vZG9yb1RyYW5zaXRpb25zKGFkdmFuY2VkLmNvbXBsZXRlZFBoYXNlcywgYWR2YW5jZWQuc3RhdGUpXG5cbiAgICAgIGlmICh0aGlzLmFjdGl2ZVRhYiA9PT0gVGFyZWFzVmlldy5QT01PRE9ST19UQUJfSUQpXG4gICAgICAgIHZvaWQgdGhpcy5yZW5kZXIoKVxuXG4gICAgICByZXR1cm4gYWR2YW5jZWQuc3RhdGVcbiAgICB9XG5cbiAgICBpZiAoYWR2YW5jZWQuc3RhdGUgIT09IHRoaXMucGx1Z2luLnBvbW9kb3JvKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hZHZhbmNlZC5zdGF0ZSxcbiAgICAgICAgcmVtYWluaW5nU2Vjb25kczogZ2V0UG9tb2Rvcm9SZW1haW5pbmdTZWNvbmRzKGFkdmFuY2VkLnN0YXRlLCBub3cpLFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLnBsdWdpbi5wb21vZG9ybyxcbiAgICAgIGR1cmF0aW9uczogeyAuLi50aGlzLnBsdWdpbi5wb21vZG9yby5kdXJhdGlvbnMgfSxcbiAgICAgIHJlbWFpbmluZ1NlY29uZHM6IGdldFBvbW9kb3JvUmVtYWluaW5nU2Vjb25kcyh0aGlzLnBsdWdpbi5wb21vZG9ybywgbm93KSxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBvbW9kb3JvRG9tKHN0YXRlOiBQb21vZG9yb1N0YXRlLCBub3dNczogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLnBvbW9kb3JvVGltZUVsXG4gICAgICB8fCAhdGhpcy5wb21vZG9yb1BoYXNlRWxcbiAgICAgIHx8ICF0aGlzLnBvbW9kb3JvQ3ljbGVFbFxuICAgICAgfHwgIXRoaXMucG9tb2Rvcm9TdGF0ZUVsXG4gICAgICB8fCAhdGhpcy5wb21vZG9yb1J1bkdseXBoRWwpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHJlbWFpbmluZyA9IGdldFBvbW9kb3JvUmVtYWluaW5nU2Vjb25kcyhzdGF0ZSwgbm93TXMpXG4gICAgY29uc3QgZGV2aWF0aW9uRWxhcHNlZCA9IGdldERldmlhdGlvbkVsYXBzZWRTZWNvbmRzKHN0YXRlLCBub3dNcylcbiAgICBjb25zdCBkaXNwbGF5ZWRTZWNvbmRzID0gc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUgPyBkZXZpYXRpb25FbGFwc2VkIDogcmVtYWluaW5nXG4gICAgdGhpcy5oYW5kbGVQb21vZG9yb0NvdW50ZG93bkJyZWF0aEF1ZGlvKHN0YXRlLCByZW1haW5pbmcpXG4gICAgdGhpcy5wb21vZG9yb1RpbWVFbC5zZXRUZXh0KGZvcm1hdFBvbW9kb3JvQ291bnRkb3duKGRpc3BsYXllZFNlY29uZHMpKVxuICAgIHRoaXMucG9tb2Rvcm9UaW1lRWwudG9nZ2xlQ2xhc3MoJ2lzLWRldmlhdGlvbicsIHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlKVxuICAgIGlmICh0aGlzLnBvbW9kb3JvUHJvZ3Jlc3NFbCkge1xuICAgICAgY29uc3QgdG90YWxTZWNvbmRzID0gTWF0aC5tYXgoMSwgc3RhdGUuaXNEZXZpYXRpb25BY3RpdmVcbiAgICAgICAgPyBNYXRoLm1heCgxLCBzdGF0ZS5kZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kcylcbiAgICAgICAgOiBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyhzdGF0ZS5kdXJhdGlvbnMsIHN0YXRlLnBoYXNlKSlcbiAgICAgIGNvbnN0IGVsYXBzZWQgPSBzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZVxuICAgICAgICA/IGRldmlhdGlvbkVsYXBzZWRcbiAgICAgICAgOiBNYXRoLm1heCgwLCB0b3RhbFNlY29uZHMgLSByZW1haW5pbmcpXG4gICAgICBjb25zdCBwcm9ncmVzc1BlcmNlbnQgPSBNYXRoLm1pbigxMDAsIChlbGFwc2VkIC8gdG90YWxTZWNvbmRzKSAqIDEwMClcbiAgICAgIHRoaXMucG9tb2Rvcm9Qcm9ncmVzc0VsLnN0eWxlLnNldFByb3BlcnR5KCctLXRhcmVhcy1wb21vZG9yby1wcm9ncmVzcycsIGAke3Byb2dyZXNzUGVyY2VudH0lYClcbiAgICAgIHRoaXMucG9tb2Rvcm9Qcm9ncmVzc0VsLnNldEF0dHIoJ2RhdGEtbW9kZScsIHRoaXMucmVzb2x2ZVBvbW9kb3JvVmlzdWFsTW9kZShzdGF0ZSkpXG4gICAgICB0aGlzLnBvbW9kb3JvUHJvZ3Jlc3NFbC5zZXRBdHRyKCdkYXRhLXJ1bi1zdGF0ZScsIHN0YXRlLnJ1blN0YXRlKVxuICAgICAgdGhpcy5wb21vZG9yb1Byb2dyZXNzRWwuc2V0QXR0cignZGF0YS1wdWxzZScsIFN0cmluZyh0aGlzLnNob3VsZFB1bHNlUG9tb2Rvcm9SaW5nKHN0YXRlLCByZW1haW5pbmcpKSlcblxuICAgICAgY29uc3QgZ2xvd1N0YXRlID0gdGhpcy5yZXNvbHZlUG9tb2Rvcm9HbG93U3RhdGUoc3RhdGUpXG4gICAgICB0aGlzLnBvbW9kb3JvUHJvZ3Jlc3NFbC5zZXRBdHRyKCdkYXRhLWdsb3cnLCBnbG93U3RhdGUpXG4gICAgfVxuICAgIHRoaXMucG9tb2Rvcm9QaGFzZUVsLnNldFRleHQoZ2V0UG9tb2Rvcm9QaGFzZUxhYmVsKHN0YXRlLnBoYXNlKSlcbiAgICBjb25zdCBjb21wbGV0ZWRJbkN5Y2xlID0gc3RhdGUuY29tcGxldGVkV29ya0N5Y2xlcyAlIFBPTU9ET1JPX1dPUktfQ1lDTEVTX0JFRk9SRV9MT05HX0JSRUFLXG4gICAgY29uc3QgY3ljbGVWYWx1ZSA9IGNvbXBsZXRlZEluQ3ljbGUgPT09IDAgJiYgc3RhdGUuY29tcGxldGVkV29ya0N5Y2xlcyA+IDBcbiAgICAgID8gUE9NT0RPUk9fV09SS19DWUNMRVNfQkVGT1JFX0xPTkdfQlJFQUtcbiAgICAgIDogY29tcGxldGVkSW5DeWNsZVxuICAgIHRoaXMucG9tb2Rvcm9DeWNsZUVsLnNldFRleHQoYCR7Y3ljbGVWYWx1ZX0gLyAke1BPTU9ET1JPX1dPUktfQ1lDTEVTX0JFRk9SRV9MT05HX0JSRUFLfWApXG5cbiAgICBjb25zdCBydW5TdGF0ZUxhYmVsID0gdGhpcy5yZXNvbHZlUG9tb2Rvcm9SdW5TdGF0ZUxhYmVsKHN0YXRlKVxuICAgIHRoaXMucG9tb2Rvcm9TdGF0ZUVsLnNldFRleHQocnVuU3RhdGVMYWJlbClcbiAgICB0aGlzLnBvbW9kb3JvU3RhdGVFbC5zZXRBdHRyKCdkYXRhLXN0YXRlJywgc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUgPyAnZGV2aWF0aW9uJyA6IHN0YXRlLnJ1blN0YXRlKVxuXG4gICAgY29uc3QgcnVuR2x5cGggPSBzdGF0ZS5ydW5TdGF0ZSA9PT0gJ3J1bm5pbmcnXG4gICAgICA/ICcnXG4gICAgICA6IHN0YXRlLnJ1blN0YXRlID09PSAncGF1c2VkJ1xuICAgICAgICA/ICfij7gnXG4gICAgICAgIDogJ+KXvCdcbiAgICB0aGlzLnBvbW9kb3JvUnVuR2x5cGhFbC5zZXRUZXh0KHJ1bkdseXBoKVxuICAgIHRoaXMucG9tb2Rvcm9SdW5HbHlwaEVsLnRvZ2dsZUNsYXNzKCdpcy12aXNpYmxlJywgQm9vbGVhbihydW5HbHlwaCkpXG5cbiAgICBpZiAodGhpcy5wb21vZG9yb0JyZWFrTWVzc2FnZUVsKSB7XG4gICAgICBjb25zdCBicmVha01lc3NhZ2UgPSB0aGlzLnJlc29sdmVQb21vZG9yb0JyZWFrTWVzc2FnZShzdGF0ZSlcbiAgICAgIHRoaXMucG9tb2Rvcm9CcmVha01lc3NhZ2VFbC5zZXRUZXh0KGJyZWFrTWVzc2FnZSlcbiAgICAgIHRoaXMucG9tb2Rvcm9CcmVha01lc3NhZ2VFbC50b2dnbGVDbGFzcygnaXMtdmlzaWJsZScsIEJvb2xlYW4oYnJlYWtNZXNzYWdlKSlcbiAgICB9XG5cbiAgICB0aGlzLmFwcGx5UG9tb2Rvcm9UcmFuc2l0aW9uRWZmZWN0cyhzdGF0ZSlcbiAgICB0aGlzLnBvbW9kb3JvTGFzdFZpc3VhbFN0YXRlID0ge1xuICAgICAgcGhhc2U6IHN0YXRlLnBoYXNlLFxuICAgICAgcnVuU3RhdGU6IHN0YXRlLnJ1blN0YXRlLFxuICAgICAgaXNEZXZpYXRpb25BY3RpdmU6IHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlLFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvdWxkUHVsc2VQb21vZG9yb1Jpbmcoc3RhdGU6IFBvbW9kb3JvU3RhdGUsIHJlbWFpbmluZ1NlY29uZHM6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmIChzdGF0ZS5ydW5TdGF0ZSAhPT0gJ3J1bm5pbmcnIHx8IHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICByZXR1cm4gcmVtYWluaW5nU2Vjb25kcyA+IDAgJiYgcmVtYWluaW5nU2Vjb25kcyA8PSAxMFxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb21vZG9yb0NvdW50ZG93bkJyZWF0aEF1ZGlvKHN0YXRlOiBQb21vZG9yb1N0YXRlLCByZW1haW5pbmdTZWNvbmRzOiBudW1iZXIpIHtcbiAgICBjb25zdCBwaGFzZUtleSA9IGAke3N0YXRlLnBoYXNlfToke3N0YXRlLnJ1blN0YXRlfToke3N0YXRlLmlzRGV2aWF0aW9uQWN0aXZlID8gJ2RldmlhdGlvbicgOiAnbm9ybWFsJ31gXG4gICAgaWYgKHRoaXMucG9tb2Rvcm9MYXN0QnJlYXRoU291bmRLZXkgIT09IHBoYXNlS2V5KSB7XG4gICAgICB0aGlzLnBvbW9kb3JvTGFzdEJyZWF0aFNvdW5kS2V5ID0gcGhhc2VLZXlcbiAgICAgIHRoaXMucG9tb2Rvcm9MYXN0QnJlYXRoU291bmRTZWNvbmQgPSBudWxsXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvdWxkUGxheUJyZWF0aCA9IHN0YXRlLnJ1blN0YXRlID09PSAncnVubmluZydcbiAgICAgICYmICFzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZVxuICAgICAgJiYgcmVtYWluaW5nU2Vjb25kcyA+IDBcbiAgICAgICYmIHJlbWFpbmluZ1NlY29uZHMgPD0gNFxuICAgIGlmICghc2hvdWxkUGxheUJyZWF0aClcbiAgICAgIHJldHVyblxuXG4gICAgaWYgKHRoaXMucG9tb2Rvcm9MYXN0QnJlYXRoU291bmRTZWNvbmQgPT09IHJlbWFpbmluZ1NlY29uZHMpXG4gICAgICByZXR1cm5cblxuICAgIHRoaXMucG9tb2Rvcm9MYXN0QnJlYXRoU291bmRTZWNvbmQgPSByZW1haW5pbmdTZWNvbmRzXG4gICAgdGhpcy5wbGF5UG9tb2Rvcm9CcmVhdGhUaWNrKClcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZVBvbW9kb3JvVmlzdWFsTW9kZShzdGF0ZTogUG9tb2Rvcm9TdGF0ZSk6XG4gICAgJ3ByZXBhcmVkJ1xuICAgIHwgJ3dvcmsnXG4gICAgfCAnc2hvcnQtYnJlYWsnXG4gICAgfCAnbG9uZy1icmVhaydcbiAgICB8ICdwYXVzZWQtd29yaydcbiAgICB8ICdwYXVzZWQtc2hvcnQtYnJlYWsnXG4gICAgfCAncGF1c2VkLWxvbmctYnJlYWsnXG4gICAgfCAnZGV2aWF0aW9uJyB7XG4gICAgaWYgKHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlKVxuICAgICAgcmV0dXJuICdkZXZpYXRpb24nXG5cbiAgICBpZiAoc3RhdGUucnVuU3RhdGUgPT09ICdpZGxlJylcbiAgICAgIHJldHVybiAncHJlcGFyZWQnXG5cbiAgICBpZiAoc3RhdGUucnVuU3RhdGUgPT09ICdwYXVzZWQnKSB7XG4gICAgICBpZiAoc3RhdGUucGhhc2UgPT09ICdzaG9ydC1icmVhaycpXG4gICAgICAgIHJldHVybiAncGF1c2VkLXNob3J0LWJyZWFrJ1xuICAgICAgaWYgKHN0YXRlLnBoYXNlID09PSAnbG9uZy1icmVhaycpXG4gICAgICAgIHJldHVybiAncGF1c2VkLWxvbmctYnJlYWsnXG4gICAgICByZXR1cm4gJ3BhdXNlZC13b3JrJ1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5waGFzZSA9PT0gJ3Nob3J0LWJyZWFrJylcbiAgICAgIHJldHVybiAnc2hvcnQtYnJlYWsnXG4gICAgaWYgKHN0YXRlLnBoYXNlID09PSAnbG9uZy1icmVhaycpXG4gICAgICByZXR1cm4gJ2xvbmctYnJlYWsnXG4gICAgcmV0dXJuICd3b3JrJ1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlUG9tb2Rvcm9HbG93U3RhdGUoc3RhdGU6IFBvbW9kb3JvU3RhdGUpOlxuICAgICdwcmVwYXJlZCdcbiAgICB8ICd3b3JrJ1xuICAgIHwgJ3Nob3J0LWJyZWFrJ1xuICAgIHwgJ2xvbmctYnJlYWsnXG4gICAgfCAncGF1c2VkJ1xuICAgIHwgJ2RldmlhdGlvbicge1xuICAgIGlmIChzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSlcbiAgICAgIHJldHVybiBzdGF0ZS5ydW5TdGF0ZSA9PT0gJ3J1bm5pbmcnID8gJ2RldmlhdGlvbicgOiAncGF1c2VkJ1xuXG4gICAgaWYgKHN0YXRlLnJ1blN0YXRlID09PSAnaWRsZScpXG4gICAgICByZXR1cm4gJ3ByZXBhcmVkJ1xuXG4gICAgaWYgKHN0YXRlLnJ1blN0YXRlID09PSAncGF1c2VkJylcbiAgICAgIHJldHVybiAncGF1c2VkJ1xuXG4gICAgaWYgKHN0YXRlLnBoYXNlID09PSAnc2hvcnQtYnJlYWsnKVxuICAgICAgcmV0dXJuICdzaG9ydC1icmVhaydcbiAgICBpZiAoc3RhdGUucGhhc2UgPT09ICdsb25nLWJyZWFrJylcbiAgICAgIHJldHVybiAnbG9uZy1icmVhaydcbiAgICByZXR1cm4gJ3dvcmsnXG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVQb21vZG9yb1J1blN0YXRlTGFiZWwoc3RhdGU6IFBvbW9kb3JvU3RhdGUpOiBzdHJpbmcge1xuICAgIGlmIChzdGF0ZS5ydW5TdGF0ZSA9PT0gJ2lkbGUnKVxuICAgICAgcmV0dXJuICdQcmVwYXJhZG8nXG5cbiAgICBpZiAoc3RhdGUucnVuU3RhdGUgPT09ICdwYXVzZWQnKVxuICAgICAgcmV0dXJuICdQYXVzYWRvLi4uJ1xuXG4gICAgaWYgKHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlKVxuICAgICAgcmV0dXJuICdEZXN2w61vIGFjdGl2by4uLidcblxuICAgIGlmIChzdGF0ZS5waGFzZSA9PT0gJ3dvcmsnKVxuICAgICAgcmV0dXJuICdUcmFiYWphbmRvLi4uJ1xuXG4gICAgaWYgKHN0YXRlLnBoYXNlID09PSAnc2hvcnQtYnJlYWsnKVxuICAgICAgcmV0dXJuICdEZXNjYW5zbyBjb3J0by4uLidcblxuICAgIGlmIChzdGF0ZS5waGFzZSA9PT0gJ2xvbmctYnJlYWsnKVxuICAgICAgcmV0dXJuICdEZXNjYW5zbyBsYXJnby4uLidcblxuICAgIHJldHVybiAnTGlzdG8nXG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVQb21vZG9yb0JyZWFrTWVzc2FnZShzdGF0ZTogUG9tb2Rvcm9TdGF0ZSk6IHN0cmluZyB7XG4gICAgY29uc3QgaXNCcmVhayA9IHN0YXRlLnBoYXNlID09PSAnc2hvcnQtYnJlYWsnIHx8IHN0YXRlLnBoYXNlID09PSAnbG9uZy1icmVhaydcbiAgICBpZiAoIWlzQnJlYWspXG4gICAgICByZXR1cm4gJydcblxuICAgIGNvbnN0IG1lc3NhZ2VJbmRleFNlZWQgPSBzdGF0ZS5jb21wbGV0ZWRXb3JrQ3ljbGVzICsgKHN0YXRlLnBoYXNlID09PSAnbG9uZy1icmVhaycgPyA3IDogMylcbiAgICBjb25zdCBtZXNzYWdlSW5kZXggPSBtZXNzYWdlSW5kZXhTZWVkICUgVGFyZWFzVmlldy5QT01PRE9ST19CUkVBS19NRVNTQUdFUy5sZW5ndGhcbiAgICByZXR1cm4gVGFyZWFzVmlldy5QT01PRE9ST19CUkVBS19NRVNTQUdFU1ttZXNzYWdlSW5kZXhdIHx8ICcnXG4gIH1cblxuICBwcml2YXRlIGFwcGx5UG9tb2Rvcm9UcmFuc2l0aW9uRWZmZWN0cyhzdGF0ZTogUG9tb2Rvcm9TdGF0ZSkge1xuICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5wb21vZG9yb0xhc3RWaXN1YWxTdGF0ZVxuICAgIGlmICghcHJldmlvdXMpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHBoYXNlQ2hhbmdlZCA9IHByZXZpb3VzLnBoYXNlICE9PSBzdGF0ZS5waGFzZSB8fCBwcmV2aW91cy5pc0RldmlhdGlvbkFjdGl2ZSAhPT0gc3RhdGUuaXNEZXZpYXRpb25BY3RpdmVcbiAgICBjb25zdCBydW5TdGF0ZUNoYW5nZWQgPSBwcmV2aW91cy5ydW5TdGF0ZSAhPT0gc3RhdGUucnVuU3RhdGVcblxuICAgIGlmIChwaGFzZUNoYW5nZWQpXG4gICAgICB0aGlzLnRyaWdnZXJQb21vZG9yb1Zpc3VhbFB1bHNlKCdpcy1waGFzZS1zaGlmdCcpXG5cbiAgICBpZiAocnVuU3RhdGVDaGFuZ2VkKVxuICAgICAgdGhpcy50cmlnZ2VyUG9tb2Rvcm9WaXN1YWxQdWxzZSgnaXMtcnVuc3RhdGUtc2hpZnQnKVxuXG4gICAgaWYgKHBoYXNlQ2hhbmdlZCAmJiB0aGlzLnBvbW9kb3JvVGltZUVsKVxuICAgICAgdGhpcy50cmlnZ2VyUG9tb2Rvcm9WaXN1YWxQdWxzZSgnaXMtcGhhc2Utc2hpZnQtdGltZScsIHRoaXMucG9tb2Rvcm9UaW1lRWwpXG4gIH1cblxuICBwcml2YXRlIHRyaWdnZXJQb21vZG9yb1Zpc3VhbFB1bHNlKGNsYXNzTmFtZTogc3RyaW5nLCB0YXJnZXQ/OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IG5vZGUgPSB0YXJnZXQgfHwgdGhpcy5wb21vZG9yb1Byb2dyZXNzRWxcbiAgICBpZiAoIW5vZGUpXG4gICAgICByZXR1cm5cblxuICAgIG5vZGUucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKVxuICAgIHZvaWQgbm9kZS5vZmZzZXRXaWR0aFxuICAgIG5vZGUuYWRkQ2xhc3MoY2xhc3NOYW1lKVxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG5vZGUucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKVxuICAgIH0sIDUyMClcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5UG9tb2Rvcm9UcmFuc2l0aW9ucyhjb21wbGV0ZWRQaGFzZXM6IFBvbW9kb3JvUGhhc2VbXSwgbmV4dFN0YXRlOiBQb21vZG9yb1N0YXRlKSB7XG4gICAgY29uc3QgY29tcGxldGVkID0gY29tcGxldGVkUGhhc2VzW2NvbXBsZXRlZFBoYXNlcy5sZW5ndGggLSAxXVxuICAgIGlmICghY29tcGxldGVkKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBuZXh0UGhhc2VMYWJlbCA9IGdldFBvbW9kb3JvUGhhc2VMYWJlbChuZXh0U3RhdGUucGhhc2UpXG4gICAgaWYgKGNvbXBsZXRlZCA9PT0gJ3dvcmsnKVxuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShgUG9tb2Rvcm8gZmluYWxpemFkby4gSW5pY2lhbmRvICR7bmV4dFBoYXNlTGFiZWwudG9Mb3dlckNhc2UoKX0uYCwgNzAwMClcbiAgICBlbHNlXG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBEZXNjYW5zbyBmaW5hbGl6YWRvLiBJbmljaWFuZG8gJHtuZXh0UGhhc2VMYWJlbC50b0xvd2VyQ2FzZSgpfS5gLCA3MDAwKVxuXG4gICAgdGhpcy5mbGFzaFBvbW9kb3JvUGFuZWwoKVxuICAgIHRoaXMucGxheVBvbW9kb3JvQWxhcm1TaG9ydCgpXG4gICAgdm9pZCB0aGlzLmFkZFBvbW9kb3JvV29ya1RpbWVUb1NlbGVjdGVkVGFzayhjb21wbGV0ZWRQaGFzZXMsIG5leHRTdGF0ZSlcbiAgICB2b2lkIHRoaXMubG9nUG9tb2Rvcm9FbnRyaWVzKGNvbXBsZXRlZFBoYXNlcywgbmV4dFN0YXRlLCBEYXRlLm5vdygpKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2dQb21vZG9yb0VudHJpZXMoY29tcGxldGVkUGhhc2VzOiBQb21vZG9yb1BoYXNlW10sIHN0YXRlOiBQb21vZG9yb1N0YXRlLCBub3dNczogbnVtYmVyKSB7XG4gICAgaWYgKGNvbXBsZXRlZFBoYXNlcy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IHN0YXRlLnNlbGVjdGVkVGFza1BhdGhcbiAgICAgID8gZ2V0VGFza3ModGhpcy5hcHApLmZpbmQoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gc3RhdGUuc2VsZWN0ZWRUYXNrUGF0aClcbiAgICAgIDogbnVsbFxuICAgIGNvbnN0IHRhc2tOYW1lID0gc2VsZWN0ZWRUYXNrPy50YXJlYSB8fCAnU2luIHRhcmVhIHZpbmN1bGFkYSdcbiAgICBjb25zdCBkdXJhdGlvbkNob2ljZSA9IHRoaXMucmVzb2x2ZVBvbW9kb3JvRHVyYXRpb25DaG9pY2Uoc3RhdGUuZHVyYXRpb25zKVxuICAgIGNvbnN0IHRvdGFsRGV2aWF0aW9uSG91cnMgPSB0aGlzLnJvdW5kVG9Ud28oc3RhdGUucGhhc2VEZXZpYXRpb25TZWNvbmRzIC8gMzYwMClcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wbGV0ZWRQaGFzZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBwaGFzZSA9IGNvbXBsZXRlZFBoYXNlc1tpbmRleF1cbiAgICAgIGNvbnN0IGRldmlhdGlvbkhvdXJzID0gaW5kZXggPT09IGNvbXBsZXRlZFBoYXNlcy5sZW5ndGggLSAxXG4gICAgICAgID8gdG90YWxEZXZpYXRpb25Ib3Vyc1xuICAgICAgICA6IDBcbiAgICAgIGNvbnN0IGR1cmF0aW9uTWludXRlcyA9IGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKHN0YXRlLmR1cmF0aW9ucywgcGhhc2UpIC8gNjBcbiAgICAgIGF3YWl0IGFwcGVuZFBvbW9kb3JvTG9nRW50cnkodGhpcy5hcHAsIHtcbiAgICAgICAgdGltZXN0YW1wTXM6IG5vd01zLFxuICAgICAgICB0eXBlOiBnZXRQb21vZG9yb1BoYXNlTGFiZWwocGhhc2UpLFxuICAgICAgICBkdXJhdGlvbkNob2ljZSxcbiAgICAgICAgdGFzazogdGFza05hbWUsXG4gICAgICAgIGR1cmF0aW9uTWludXRlcyxcbiAgICAgICAgZGV2aWF0aW9uSG91cnMsXG4gICAgICAgIGZpbmFsaXplZDogdHJ1ZSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnBoYXNlRGV2aWF0aW9uU2Vjb25kcyA+IDApIHtcbiAgICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZHVyYXRpb25zOiB7IC4uLnN0YXRlLmR1cmF0aW9ucyB9LFxuICAgICAgICBwaGFzZURldmlhdGlvblNlY29uZHM6IDAsXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLmFjdGl2ZVRhYiA9PT0gVGFyZWFzVmlldy5QT01PRE9ST19UQUJfSUQpXG4gICAgICBhd2FpdCB0aGlzLnJlbmRlcigpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGFkZFBvbW9kb3JvV29ya1RpbWVUb1NlbGVjdGVkVGFzayhjb21wbGV0ZWRQaGFzZXM6IFBvbW9kb3JvUGhhc2VbXSwgc3RhdGU6IFBvbW9kb3JvU3RhdGUpIHtcbiAgICBjb25zdCBjb21wbGV0ZWRXb3JrQ291bnQgPSBjb21wbGV0ZWRQaGFzZXMuZmlsdGVyKHBoYXNlID0+IHBoYXNlID09PSAnd29yaycpLmxlbmd0aFxuICAgIGlmIChjb21wbGV0ZWRXb3JrQ291bnQgPT09IDApXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHNlbGVjdGVkVGFza1BhdGggPSBzdGF0ZS5zZWxlY3RlZFRhc2tQYXRoXG4gICAgaWYgKCFzZWxlY3RlZFRhc2tQYXRoKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCB0YXNrID0gZ2V0VGFza3ModGhpcy5hcHApLmZpbmQoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gc2VsZWN0ZWRUYXNrUGF0aClcbiAgICBpZiAoIXRhc2spIHtcbiAgICAgIHRoaXMuc2V0UG9tb2Rvcm9TZWxlY3RlZFRhc2tQYXRoKG51bGwpXG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdMYSB0YXJlYSBzZWxlY2Npb25hZGEgcGFyYSBQb21vZG9ybyB5YSBubyBleGlzdGUuIFNlIHF1aXTDsyBsYSBzZWxlY2Npw7NuLicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB3b3JrZWRIb3VycyA9IHRoaXMucm91bmRUb1R3bygoY29tcGxldGVkV29ya0NvdW50ICogc3RhdGUuZHVyYXRpb25zLndvcmtNaW51dGVzKSAvIDYwKVxuICAgIGlmICh3b3JrZWRIb3VycyA8PSAwKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBuZXh0RGVkaWNhdGVkID0gdGhpcy5yb3VuZFRvVHdvKHRhc2suZGVkaWNhZG8gKyB3b3JrZWRIb3VycylcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBkZWRpY2FkbzogbmV4dERlZGljYXRlZCB9KVxuICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYFNlIHN1bWFyb24gJHt0aGlzLmZvcm1hdERlY2ltYWwod29ya2VkSG91cnMpfSBoIGEgXCIke3Rhc2sudGFyZWF9XCIuYCwgNTAwMClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgYWRkUG9tb2Rvcm9EZXZpYXRpb25UaW1lVG9TZWxlY3RlZFRhc2soZWxhcHNlZFNlY29uZHM6IG51bWJlciwgc3RhdGU6IFBvbW9kb3JvU3RhdGUpIHtcbiAgICBpZiAoZWxhcHNlZFNlY29uZHMgPD0gMClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrUGF0aCA9IHN0YXRlLnNlbGVjdGVkVGFza1BhdGhcbiAgICBpZiAoIXNlbGVjdGVkVGFza1BhdGgpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHRhc2sgPSBnZXRUYXNrcyh0aGlzLmFwcCkuZmluZChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSBzZWxlY3RlZFRhc2tQYXRoKVxuICAgIGlmICghdGFzaykge1xuICAgICAgdGhpcy5zZXRQb21vZG9yb1NlbGVjdGVkVGFza1BhdGgobnVsbClcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoJ0xhIHRhcmVhIHNlbGVjY2lvbmFkYSBwYXJhIFBvbW9kb3JvIHlhIG5vIGV4aXN0ZS4gU2UgcXVpdMOzIGxhIHNlbGVjY2nDs24uJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRldmlhdGlvbkhvdXJzID0gdGhpcy5yb3VuZFRvVHdvKGVsYXBzZWRTZWNvbmRzIC8gMzYwMClcbiAgICBpZiAoZGV2aWF0aW9uSG91cnMgPD0gMClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgbmV4dERldmlhdGlvbiA9IHRoaXMucm91bmRUb1R3byh0YXNrLmRlc3ZpbyArIGRldmlhdGlvbkhvdXJzKVxuICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IGRlc3ZpbzogbmV4dERldmlhdGlvbiB9KVxuICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYFNlIHN1bWFyb24gJHt0aGlzLmZvcm1hdERlY2ltYWwoZGV2aWF0aW9uSG91cnMpfSBoIGRlIGRlc3bDrW8gYSBcIiR7dGFzay50YXJlYX1cIi5gLCA1MDAwKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZW5kZXJQb21vZG9yb0RhaWx5TG9nKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1sb2ctc2VjdGlvbicgfSlcbiAgICBzZWN0aW9uLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ1JlZ2lzdHJvcyBkZWwgZGlhJyB9KVxuXG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IHJlYWRQb21vZG9yb0xvZ0VudHJpZXModGhpcy5hcHApXG4gICAgY29uc3QgdG9kYXlFbnRyaWVzID0gZ2V0RW50cmllc0J5RGF0ZShlbnRyaWVzLCB0b0xvY2FsRGF0ZVRleHQobmV3IERhdGUoKSkpXG5cbiAgICBpZiAodG9kYXlFbnRyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2VjdGlvbi5jcmVhdGVFbCgncCcsIHtcbiAgICAgICAgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWxvZy1lbXB0eScsXG4gICAgICAgIHRleHQ6ICd0b2RhdmlhIG5vIHNlIHJlZ2lzdHJhbiBwb21vZG9yb3MgZW4gZWwgZGlhJyxcbiAgICAgIH0pXG4gICAgICB0aGlzLnJlbmRlclBvbW9kb3JvSG91cmx5SGVhdG1hcChzZWN0aW9uLCB0b2RheUVudHJpZXMpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB3cmFwID0gc2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tbG9nLXRhYmxlLXdyYXAnIH0pXG4gICAgY29uc3QgdGFibGUgPSB3cmFwLmNyZWF0ZUVsKCd0YWJsZScsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWxvZy10YWJsZScgfSlcbiAgICBjb25zdCBoZWFkID0gdGFibGUuY3JlYXRlRWwoJ3RoZWFkJylcbiAgICBjb25zdCBoZWFkUm93ID0gaGVhZC5jcmVhdGVFbCgndHInKVxuICAgIGZvciAoY29uc3QgdGl0bGUgb2YgWydIb3JhcmlvJywgJ1RpcG8gZGUgcG9tb2Rvcm8nLCAnRHVyYWNpw7NuIGVsZWdpZGEnLCAnVGFyZWEnLCAnVGllbXBvJywgJ0Rlc3ZpbycsICdGaW5hbGl6YWNpw7NuJywgJyddKVxuICAgICAgaGVhZFJvdy5jcmVhdGVFbCgndGgnLCB7IHRleHQ6IHRpdGxlIH0pXG5cbiAgICBjb25zdCBib2R5ID0gdGFibGUuY3JlYXRlRWwoJ3Rib2R5JylcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRvZGF5RW50cmllcykge1xuICAgICAgY29uc3Qgcm93ID0gYm9keS5jcmVhdGVFbCgndHInKVxuICAgICAgcm93LmNyZWF0ZUVsKCd0ZCcsIHsgdGV4dDogZW50cnkudGltZSB9KVxuICAgICAgcm93LmNyZWF0ZUVsKCd0ZCcsIHsgdGV4dDogZW50cnkudHlwZSB9KVxuICAgICAgcm93LmNyZWF0ZUVsKCd0ZCcsIHsgdGV4dDogZW50cnkuZHVyYXRpb25DaG9pY2UgfSlcbiAgICAgIHJvdy5jcmVhdGVFbCgndGQnLCB7IHRleHQ6IGVudHJ5LnRhc2sgfSlcbiAgICAgIHJvdy5jcmVhdGVFbCgndGQnLCB7IHRleHQ6IHRoaXMuZm9ybWF0UG9tb2Rvcm9EdXJhdGlvbk1pbnV0ZXMoZW50cnkuZHVyYXRpb25NaW51dGVzKSB9KVxuICAgICAgcm93LmNyZWF0ZUVsKCd0ZCcsIHsgdGV4dDogYCR7dGhpcy5mb3JtYXREZWNpbWFsKGVudHJ5LmRldmlhdGlvbkhvdXJzKX0gaGAgfSlcbiAgICAgIHJvdy5jcmVhdGVFbCgndGQnLCB7IHRleHQ6IGVudHJ5LmZpbmFsaXplZCA/ICd0cnVlJyA6ICdmYWxzZScgfSlcblxuICAgICAgY29uc3QgYWN0aW9uc0NlbGwgPSByb3cuY3JlYXRlRWwoJ3RkJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tbG9nLWFjdGlvbnMnIH0pXG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBhY3Rpb25zQ2VsbC5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgICBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tbG9nLWRlbGV0ZS1idG4nLFxuICAgICAgfSlcbiAgICAgIG9ic2lkaWFuLnNldEljb24oZGVsZXRlQnV0dG9uLCAndHJhc2gtMicpXG4gICAgICBkZWxldGVCdXR0b24uc2V0QXR0cignYXJpYS1sYWJlbCcsICdFbGltaW5hciByZWdpc3RybycpXG4gICAgICBkZWxldGVCdXR0b24uc2V0QXR0cigndGl0bGUnLCAnRWxpbWluYXIgcmVnaXN0cm8nKVxuICAgICAgZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm9wZW5EZWxldGVQb21vZG9yb0xvZ0VudHJ5Q29uZmlybShlbnRyeS5pZClcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlclBvbW9kb3JvSG91cmx5SGVhdG1hcChzZWN0aW9uLCB0b2RheUVudHJpZXMpXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclBvbW9kb3JvSG91cmx5SGVhdG1hcChjb250YWluZXI6IEhUTUxFbGVtZW50LCB0b2RheUVudHJpZXM6IEFycmF5PHsgdGltZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcgfT4pIHtcbiAgICBjb25zdCBoZWF0bWFwU2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8taGVhdG1hcCcgfSlcbiAgICBoZWF0bWFwU2VjdGlvbi5jcmVhdGVFbCgnaDQnLCB7IHRleHQ6ICdIZWF0bWFwIGhvcmFyaW8gKHRyYWJham8pJyB9KVxuXG4gICAgY29uc3Qgd29ya0VudHJpZXMgPSB0b2RheUVudHJpZXMuZmlsdGVyKGVudHJ5ID0+IGVudHJ5LnR5cGUgPT09ICdUcmFiYWpvJylcbiAgICBjb25zdCBob3VybHlDb3VudHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAyNCB9LCAoKSA9PiAwKVxuICAgIGZvciAoY29uc3QgZW50cnkgb2Ygd29ya0VudHJpZXMpIHtcbiAgICAgIGNvbnN0IGhvdXIgPSBOdW1iZXIucGFyc2VJbnQoZW50cnkudGltZS5zbGljZSgwLCAyKSwgMTApXG4gICAgICBpZiAoTnVtYmVyLmlzTmFOKGhvdXIpIHx8IGhvdXIgPCAwIHx8IGhvdXIgPiAyMylcbiAgICAgICAgY29udGludWVcbiAgICAgIGhvdXJseUNvdW50c1tob3VyXSArPSAxXG4gICAgfVxuXG4gICAgY29uc3QgbWF4Q291bnQgPSBNYXRoLm1heCgxLCAuLi5ob3VybHlDb3VudHMpXG4gICAgY29uc3QgZ3JpZCA9IGhlYXRtYXBTZWN0aW9uLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1oZWF0bWFwLWdyaWQnIH0pXG4gICAgZm9yIChsZXQgaG91ciA9IDA7IGhvdXIgPCAyNDsgaG91cisrKSB7XG4gICAgICBjb25zdCBjb3VudCA9IGhvdXJseUNvdW50c1tob3VyXVxuICAgICAgY29uc3QgbGV2ZWwgPSBjb3VudCA9PT0gMFxuICAgICAgICA/IDBcbiAgICAgICAgOiBNYXRoLm1pbig0LCBNYXRoLmNlaWwoKGNvdW50IC8gbWF4Q291bnQpICogNCkpXG4gICAgICBjb25zdCBjZWxsID0gZ3JpZC5jcmVhdGVEaXYoeyBjbHM6IGB0YXJlYXMtcG9tb2Rvcm8taGVhdG1hcC1jZWxsIGlzLWxldmVsLSR7bGV2ZWx9YCB9KVxuICAgICAgY2VsbC5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgICAgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWhlYXRtYXAtaG91cicsXG4gICAgICAgIHRleHQ6IFN0cmluZyhob3VyKS5wYWRTdGFydCgyLCAnMCcpLFxuICAgICAgfSlcbiAgICAgIGNlbGwuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgIGNsczogJ3RhcmVhcy1wb21vZG9yby1oZWF0bWFwLWNvdW50JyxcbiAgICAgICAgdGV4dDogU3RyaW5nKGNvdW50KSxcbiAgICAgIH0pXG4gICAgICBjZWxsLnNldEF0dHIoJ3RpdGxlJywgYCR7U3RyaW5nKGhvdXIpLnBhZFN0YXJ0KDIsICcwJyl9OjAwIC0gJHtjb3VudH0gcG9tb2Rvcm8ocykgZGUgdHJhYmFqb2ApXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuRGVsZXRlUG9tb2Rvcm9Mb2dFbnRyeUNvbmZpcm0oZW50cnlJZDogc3RyaW5nKSB7XG4gICAgbmV3IENvbmZpcm1EZWxldGVUYXNrTW9kYWwodGhpcy5hcHAsIHtcbiAgICAgIHRpdGxlOiAnRWxpbWluYXIgcmVnaXN0cm8gUG9tb2Rvcm8nLFxuICAgICAgbWVzc2FnZTogJ8K/U2VndXJvIHF1ZSBxdWVyw6lzIGVsaW1pbmFyIGVzdGUgcmVnaXN0cm8gZGVsIGTDrWE/JyxcbiAgICAgIGNvbmZpcm1UZXh0OiAnQWNlcHRhcicsXG4gICAgICBvbkNvbmZpcm06IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVtb3ZlZCA9IGF3YWl0IGRlbGV0ZVBvbW9kb3JvTG9nRW50cnkodGhpcy5hcHAsIGVudHJ5SWQpXG4gICAgICAgIGlmICghcmVtb3ZlZCkge1xuICAgICAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoJ05vIHNlIHB1ZG8gZWxpbWluYXIgZWwgcmVnaXN0cm8uJylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoJ1JlZ2lzdHJvIGVsaW1pbmFkby4nKVxuICAgICAgICBhd2FpdCB0aGlzLnJlbmRlcigpXG4gICAgICB9LFxuICAgIH0pLm9wZW4oKVxuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlUG9tb2Rvcm9EdXJhdGlvbkNob2ljZShkdXJhdGlvbnM6IFBvbW9kb3JvRHVyYXRpb25zKTogc3RyaW5nIHtcbiAgICBjb25zdCBjYXJkRGF0YSA9IGdldFBvbW9kb3JvUHJlc2V0Q2FyZERhdGEoZHVyYXRpb25zKVxuICAgIGNvbnN0IG5vcm1hbGl6ZWRUaXRsZSA9IGNhcmREYXRhLnRpdGxlLnJlcGxhY2UoL15bXkEtWmEtejAtOcOBw4nDjcOTw5rDocOpw63Ds8O6w5HDsV0rL2csICcnKS50cmltKClcbiAgICBjb25zdCBiYXNlTGFiZWwgPSBub3JtYWxpemVkVGl0bGUuc3BsaXQoJyAtICcpWzBdPy50cmltKClcbiAgICByZXR1cm4gYmFzZUxhYmVsIHx8ICdQZXJzb25hbGl6YWRvJ1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRQb21vZG9yb0R1cmF0aW9uTWludXRlcyhtaW51dGVzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKG1pbnV0ZXMpIHx8IG1pbnV0ZXMgPD0gMClcbiAgICAgIHJldHVybiAnLSdcblxuICAgIGNvbnN0IHJvdW5kZWQgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgKiAxMDApIC8gMTAwXG4gICAgcmV0dXJuIGAke3RoaXMuZm9ybWF0RGVjaW1hbChyb3VuZGVkKX0gbWluYFxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2dQb21vZG9yb1Jlc2V0RW50cnkoc3RhdGU6IFBvbW9kb3JvU3RhdGUsIG5vd01zOiBudW1iZXIpIHtcbiAgICBjb25zdCBlbGFwc2VkU2Vjb25kcyA9IHRoaXMucmVzb2x2ZUVsYXBzZWRTZWNvbmRzRm9yUmVzZXQoc3RhdGUsIG5vd01zKVxuICAgIGlmIChlbGFwc2VkU2Vjb25kcyA8PSAwICYmIHN0YXRlLnBoYXNlRGV2aWF0aW9uU2Vjb25kcyA8PSAwKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBkdXJhdGlvbkNob2ljZSA9IHRoaXMucmVzb2x2ZVBvbW9kb3JvRHVyYXRpb25DaG9pY2Uoc3RhdGUuZHVyYXRpb25zKVxuICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IHN0YXRlLnNlbGVjdGVkVGFza1BhdGhcbiAgICAgID8gZ2V0VGFza3ModGhpcy5hcHApLmZpbmQoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gc3RhdGUuc2VsZWN0ZWRUYXNrUGF0aClcbiAgICAgIDogbnVsbFxuICAgIGNvbnN0IHRhc2tOYW1lID0gc2VsZWN0ZWRUYXNrPy50YXJlYSB8fCAnU2luIHRhcmVhIHZpbmN1bGFkYSdcbiAgICBjb25zdCBkdXJhdGlvbk1pbnV0ZXMgPSB0aGlzLnJvdW5kVG9Ud28oZWxhcHNlZFNlY29uZHMgLyA2MClcbiAgICBjb25zdCBkZXZpYXRpb25TZWNvbmRzID0gc3RhdGUucGhhc2VEZXZpYXRpb25TZWNvbmRzICsgKHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlID8gZWxhcHNlZFNlY29uZHMgOiAwKVxuICAgIGNvbnN0IGRldmlhdGlvbkhvdXJzID0gdGhpcy5yb3VuZFRvVHdvKGRldmlhdGlvblNlY29uZHMgLyAzNjAwKVxuXG4gICAgYXdhaXQgYXBwZW5kUG9tb2Rvcm9Mb2dFbnRyeSh0aGlzLmFwcCwge1xuICAgICAgdGltZXN0YW1wTXM6IG5vd01zLFxuICAgICAgdHlwZTogZ2V0UG9tb2Rvcm9QaGFzZUxhYmVsKHN0YXRlLnBoYXNlKSxcbiAgICAgIGR1cmF0aW9uQ2hvaWNlLFxuICAgICAgdGFzazogdGFza05hbWUsXG4gICAgICBkdXJhdGlvbk1pbnV0ZXMsXG4gICAgICBkZXZpYXRpb25Ib3VycyxcbiAgICAgIGZpbmFsaXplZDogZmFsc2UsXG4gICAgfSlcblxuICAgIGlmIChzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSlcbiAgICAgIGF3YWl0IHRoaXMuYWRkUG9tb2Rvcm9EZXZpYXRpb25UaW1lVG9TZWxlY3RlZFRhc2soZWxhcHNlZFNlY29uZHMsIHN0YXRlKVxuICAgIGVsc2UgaWYgKHN0YXRlLnBoYXNlID09PSAnd29yaycpXG4gICAgICBhd2FpdCB0aGlzLmFkZFBvbW9kb3JvRWxhcHNlZFdvcmtUaW1lVG9TZWxlY3RlZFRhc2soZWxhcHNlZFNlY29uZHMsIHN0YXRlKVxuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlRWxhcHNlZFNlY29uZHNGb3JSZXNldChzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgbm93TXM6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlKVxuICAgICAgcmV0dXJuIGdldERldmlhdGlvbkVsYXBzZWRTZWNvbmRzKHN0YXRlLCBub3dNcylcblxuICAgIGNvbnN0IHRvdGFsU2Vjb25kcyA9IE1hdGgubWF4KDAsIGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKHN0YXRlLmR1cmF0aW9ucywgc3RhdGUucGhhc2UpKVxuICAgIGNvbnN0IHJlbWFpbmluZ1NlY29uZHMgPSBNYXRoLm1heCgwLCBnZXRQb21vZG9yb1JlbWFpbmluZ1NlY29uZHMoc3RhdGUsIG5vd01zKSlcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgdG90YWxTZWNvbmRzIC0gcmVtYWluaW5nU2Vjb25kcylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgYWRkUG9tb2Rvcm9FbGFwc2VkV29ya1RpbWVUb1NlbGVjdGVkVGFzayhlbGFwc2VkU2Vjb25kczogbnVtYmVyLCBzdGF0ZTogUG9tb2Rvcm9TdGF0ZSkge1xuICAgIGlmIChlbGFwc2VkU2Vjb25kcyA8PSAwKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBzZWxlY3RlZFRhc2tQYXRoID0gc3RhdGUuc2VsZWN0ZWRUYXNrUGF0aFxuICAgIGlmICghc2VsZWN0ZWRUYXNrUGF0aClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgdGFzayA9IGdldFRhc2tzKHRoaXMuYXBwKS5maW5kKGl0ZW0gPT4gaXRlbS5maWxlLnBhdGggPT09IHNlbGVjdGVkVGFza1BhdGgpXG4gICAgaWYgKCF0YXNrKSB7XG4gICAgICB0aGlzLnNldFBvbW9kb3JvU2VsZWN0ZWRUYXNrUGF0aChudWxsKVxuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZSgnTGEgdGFyZWEgc2VsZWNjaW9uYWRhIHBhcmEgUG9tb2Rvcm8geWEgbm8gZXhpc3RlLiBTZSBxdWl0w7MgbGEgc2VsZWNjacOzbi4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgd29ya2VkSG91cnMgPSB0aGlzLnJvdW5kVG9Ud28oZWxhcHNlZFNlY29uZHMgLyAzNjAwKVxuICAgIGlmICh3b3JrZWRIb3VycyA8PSAwKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBuZXh0RGVkaWNhdGVkID0gdGhpcy5yb3VuZFRvVHdvKHRhc2suZGVkaWNhZG8gKyB3b3JrZWRIb3VycylcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBkZWRpY2FkbzogbmV4dERlZGljYXRlZCB9KVxuICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYFNlIHN1bWFyb24gJHt0aGlzLmZvcm1hdERlY2ltYWwod29ya2VkSG91cnMpfSBoIGEgXCIke3Rhc2sudGFyZWF9XCIuYCwgNTAwMClcbiAgfVxuXG4gIHByaXZhdGUgZmxhc2hQb21vZG9yb1BhbmVsKCkge1xuICAgIGlmICghdGhpcy5wb21vZG9yb1BhbmVsRWwpXG4gICAgICByZXR1cm5cblxuICAgIHRoaXMucG9tb2Rvcm9QYW5lbEVsLmFkZENsYXNzKCd0YXJlYXMtcG9tb2Rvcm8tcGFuZWwtZmxhc2gnKVxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucG9tb2Rvcm9QYW5lbEVsPy5yZW1vdmVDbGFzcygndGFyZWFzLXBvbW9kb3JvLXBhbmVsLWZsYXNoJylcbiAgICB9LCA5MDApXG4gIH1cblxuICBwcml2YXRlIHBsYXlQb21vZG9yb0JyZWF0aFRpY2soKSB7XG4gICAgY29uc3QgYXVkaW9Db250ZXh0ID0gdGhpcy5lbnN1cmVQb21vZG9yb0F1ZGlvQ29udGV4dCgpXG4gICAgaWYgKCFhdWRpb0NvbnRleHQpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHBsYXlUaWNrID0gKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm93ID0gYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lXG4gICAgICAgIGNvbnN0IG9zY2lsbGF0b3IgPSBhdWRpb0NvbnRleHQuY3JlYXRlT3NjaWxsYXRvcigpXG4gICAgICAgIGNvbnN0IGdhaW4gPSBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpXG5cbiAgICAgICAgb3NjaWxsYXRvci50eXBlID0gJ3NpbmUnXG4gICAgICAgIG9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlID0gNjYwXG5cbiAgICAgICAgZ2Fpbi5nYWluLnNldFZhbHVlQXRUaW1lKDAuMDAwMSwgbm93KVxuICAgICAgICBnYWluLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjA0NSwgbm93ICsgMC4wMTUpXG4gICAgICAgIGdhaW4uZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMDAwMSwgbm93ICsgMC4xNilcblxuICAgICAgICBvc2NpbGxhdG9yLmNvbm5lY3QoZ2FpbilcbiAgICAgICAgZ2Fpbi5jb25uZWN0KGF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbilcblxuICAgICAgICBvc2NpbGxhdG9yLnN0YXJ0KG5vdylcbiAgICAgICAgb3NjaWxsYXRvci5zdG9wKG5vdyArIDAuMTYpXG4gICAgICB9XG4gICAgICBjYXRjaCB7XG4gICAgICAgIC8vIElnbm9yZSBwbGF5YmFjayBlcnJvcnMgaW4gZW52aXJvbm1lbnRzIHRoYXQgYmxvY2sgYXV0b3BsYXkuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGF1ZGlvQ29udGV4dC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIHtcbiAgICAgIHZvaWQgYXVkaW9Db250ZXh0LnJlc3VtZSgpXG4gICAgICAgIC50aGVuKHBsYXlUaWNrKVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIC8vIElnbm9yZSByZXN1bWUgZXJyb3JzLlxuICAgICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcGxheVRpY2soKVxuICB9XG5cbiAgcHJpdmF0ZSBwbGF5UG9tb2Rvcm9BbGFybVNob3J0KCkge1xuICAgIGNvbnN0IGF1ZGlvQ29udGV4dCA9IHRoaXMuZW5zdXJlUG9tb2Rvcm9BdWRpb0NvbnRleHQoKVxuICAgIGlmICghYXVkaW9Db250ZXh0KVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBwbGF5QWxhcm0gPSAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBub3cgPSBhdWRpb0NvbnRleHQuY3VycmVudFRpbWVcbiAgICAgICAgY29uc3Qgb3NjaWxsYXRvciA9IGF1ZGlvQ29udGV4dC5jcmVhdGVPc2NpbGxhdG9yKClcbiAgICAgICAgY29uc3QgZ2FpbiA9IGF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKClcblxuICAgICAgICBvc2NpbGxhdG9yLnR5cGUgPSAndHJpYW5nbGUnXG4gICAgICAgIG9zY2lsbGF0b3IuZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKDk4OCwgbm93KVxuICAgICAgICBvc2NpbGxhdG9yLmZyZXF1ZW5jeS5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDc4NCwgbm93ICsgMC4yNClcblxuICAgICAgICBnYWluLmdhaW4uc2V0VmFsdWVBdFRpbWUoMC4wMDAxLCBub3cpXG4gICAgICAgIGdhaW4uZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMTEsIG5vdyArIDAuMDE1KVxuICAgICAgICBnYWluLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMDEsIG5vdyArIDAuMjgpXG5cbiAgICAgICAgb3NjaWxsYXRvci5jb25uZWN0KGdhaW4pXG4gICAgICAgIGdhaW4uY29ubmVjdChhdWRpb0NvbnRleHQuZGVzdGluYXRpb24pXG5cbiAgICAgICAgb3NjaWxsYXRvci5zdGFydChub3cpXG4gICAgICAgIG9zY2lsbGF0b3Iuc3RvcChub3cgKyAwLjMwKVxuICAgICAgfVxuICAgICAgY2F0Y2gge1xuICAgICAgICAvLyBJZ25vcmUgcGxheWJhY2sgZXJyb3JzIGluIGVudmlyb25tZW50cyB0aGF0IGJsb2NrIGF1dG9wbGF5LlxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhdWRpb0NvbnRleHQuc3RhdGUgPT09ICdzdXNwZW5kZWQnKSB7XG4gICAgICB2b2lkIGF1ZGlvQ29udGV4dC5yZXN1bWUoKVxuICAgICAgICAudGhlbihwbGF5QWxhcm0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgLy8gSWdub3JlIHJlc3VtZSBlcnJvcnMuXG4gICAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBwbGF5QWxhcm0oKVxuICB9XG5cbiAgcHJpdmF0ZSBlbnN1cmVQb21vZG9yb0F1ZGlvQ29udGV4dCgpOiBBdWRpb0NvbnRleHQgfCBudWxsIHtcbiAgICBpZiAodGhpcy5wb21vZG9yb0F1ZGlvQ29udGV4dCAmJiB0aGlzLnBvbW9kb3JvQXVkaW9Db250ZXh0LnN0YXRlICE9PSAnY2xvc2VkJylcbiAgICAgIHJldHVybiB0aGlzLnBvbW9kb3JvQXVkaW9Db250ZXh0XG5cbiAgICBjb25zdCBBdWRpb0NvbnRleHRDdG9yID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCAod2luZG93IGFzIHR5cGVvZiB3aW5kb3cgJiB7IHdlYmtpdEF1ZGlvQ29udGV4dD86IHR5cGVvZiBBdWRpb0NvbnRleHQgfSkud2Via2l0QXVkaW9Db250ZXh0XG4gICAgaWYgKCFBdWRpb0NvbnRleHRDdG9yKVxuICAgICAgcmV0dXJuIG51bGxcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLnBvbW9kb3JvQXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dEN0b3IoKVxuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICB0aGlzLnBvbW9kb3JvQXVkaW9Db250ZXh0ID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnBvbW9kb3JvQXVkaW9Db250ZXh0XG4gIH1cblxuICBwcml2YXRlIHVubG9ja1BvbW9kb3JvQXVkaW8oKSB7XG4gICAgY29uc3QgYXVkaW9Db250ZXh0ID0gdGhpcy5lbnN1cmVQb21vZG9yb0F1ZGlvQ29udGV4dCgpXG4gICAgaWYgKCFhdWRpb0NvbnRleHQgfHwgYXVkaW9Db250ZXh0LnN0YXRlICE9PSAnc3VzcGVuZGVkJylcbiAgICAgIHJldHVyblxuXG4gICAgdm9pZCBhdWRpb0NvbnRleHQucmVzdW1lKCkuY2F0Y2goKCkgPT4ge1xuICAgICAgLy8gSWdub3JlIHJlc3VtZSBlcnJvcnMuXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRQb21vZG9yb0RvbVJlZnMoKSB7XG4gICAgdGhpcy5wb21vZG9yb1BhbmVsRWwgPSBudWxsXG4gICAgdGhpcy5wb21vZG9yb1RpbWVFbCA9IG51bGxcbiAgICB0aGlzLnBvbW9kb3JvUHJvZ3Jlc3NFbCA9IG51bGxcbiAgICB0aGlzLnBvbW9kb3JvUGhhc2VFbCA9IG51bGxcbiAgICB0aGlzLnBvbW9kb3JvQ3ljbGVFbCA9IG51bGxcbiAgICB0aGlzLnBvbW9kb3JvU3RhdGVFbCA9IG51bGxcbiAgICB0aGlzLnBvbW9kb3JvQnJlYWtNZXNzYWdlRWwgPSBudWxsXG4gICAgdGhpcy5wb21vZG9yb1J1bkdseXBoRWwgPSBudWxsXG4gICAgdGhpcy5wb21vZG9yb0xhc3RWaXN1YWxTdGF0ZSA9IG51bGxcbiAgICB0aGlzLnBvbW9kb3JvTGFzdEJyZWF0aFNvdW5kU2Vjb25kID0gbnVsbFxuICAgIHRoaXMucG9tb2Rvcm9MYXN0QnJlYXRoU291bmRLZXkgPSBudWxsXG4gIH1cblxuICBwcml2YXRlIGVuc3VyZVZhbGlkQWN0aXZlVGFiKCkge1xuICAgIGNvbnN0IGJvYXJkTmFtZXMgPSB0aGlzLnBsdWdpbi50YWJsZXJvcy5tYXAoYm9hcmQgPT4gYm9hcmQubmFtZSlcbiAgICBjb25zdCBmaXhlZFRhYnMgPSBuZXcgU2V0KFtcbiAgICAgIFRhcmVhc1ZpZXcuQ09NUExFVEVEX1RBQl9JRCxcbiAgICAgIFRhcmVhc1ZpZXcuQ0FOQ0VMTEVEX1RBQl9JRCxcbiAgICAgIFRhcmVhc1ZpZXcuUE9NT0RPUk9fVEFCX0lELFxuICAgIF0pXG5cbiAgICBpZiAoZml4ZWRUYWJzLmhhcyh0aGlzLmFjdGl2ZVRhYikpXG4gICAgICByZXR1cm5cblxuICAgIGlmIChib2FyZE5hbWVzLmluY2x1ZGVzKHRoaXMuYWN0aXZlVGFiKSlcbiAgICAgIHJldHVyblxuXG4gICAgdGhpcy5hY3RpdmVUYWIgPSBib2FyZE5hbWVzWzBdIHx8ICdkZWZhdWx0J1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRHcm91cEV4cGFuc2lvbktleShncm91cE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuYWN0aXZlVGFifTo6JHtncm91cE5hbWV9YFxuICB9XG5cbiAgc2V0QWN0aXZlVGFiKHRhYklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFjdGl2ZVRhYiA9IHRhYklkXG4gIH1cblxuICBwcml2YXRlIGlzQXJjaGl2ZWRUYWIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlVGFiID09PSBUYXJlYXNWaWV3LkNPTVBMRVRFRF9UQUJfSUQgfHwgdGhpcy5hY3RpdmVUYWIgPT09IFRhcmVhc1ZpZXcuQ0FOQ0VMTEVEX1RBQl9JRFxuICB9XG5cbiAgcHJpdmF0ZSBpc1BvbW9kb3JvVGFiKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZVRhYiA9PT0gVGFyZWFzVmlldy5QT01PRE9ST19UQUJfSURcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVySGVhZGVyKHJvb3Q6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgaGVhZGVyID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtaGVhZGVyJyB9KVxuXG4gICAgY29uc3QgYWN0aW9ucyA9IGhlYWRlci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtaGVhZGVyLWFjdGlvbnMnIH0pXG4gICAgY29uc3QgbmV3QnV0dG9uID0gYWN0aW9ucy5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICd0YXJlYXMtYnRuLW5ldycgfSlcbiAgICBuZXdCdXR0b24uY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICdOdWV2byB0YWJsZXJvJyB9KVxuICAgIG5ld0J1dHRvbi5vbmNsaWNrID0gKCkgPT4gbmV3IE5ld0JvYXJkTW9kYWwodGhpcy5hcHAsIHRoaXMucGx1Z2luLCB0aGlzKS5vcGVuKClcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBhY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ3RhcmVhcy1idG4tZWRpdC1ib2FyZCcgfSlcbiAgICBlZGl0QnV0dG9uLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnRWRpdGFyIHRhYmxlcm8nIH0pXG4gICAgY29uc3QgY3VycmVudEJvYXJkID0gdGhpcy5wbHVnaW4udGFibGVyb3MuZmluZChib2FyZCA9PiBib2FyZC5uYW1lID09PSB0aGlzLmFjdGl2ZVRhYilcbiAgICBjb25zdCBjYW5FZGl0Qm9hcmQgPSBCb29sZWFuKGN1cnJlbnRCb2FyZCkgJiYgdGhpcy5hY3RpdmVUYWIgIT09IERFRkFVTFRfQk9BUkRfTkFNRVxuICAgIGVkaXRCdXR0b24uZGlzYWJsZWQgPSAhY2FuRWRpdEJvYXJkXG4gICAgZWRpdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKCFjYW5FZGl0Qm9hcmQgfHwgIWN1cnJlbnRCb2FyZClcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIG5ldyBFZGl0Qm9hcmRNb2RhbCh0aGlzLmFwcCwgdGhpcy5wbHVnaW4sIHRoaXMsIGN1cnJlbnRCb2FyZCkub3BlbigpXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gYWN0aW9ucy5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICd0YXJlYXMtYnRuLWRlbGV0ZS1ib2FyZCcgfSlcbiAgICBkZWxldGVCdXR0b24uY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICdFbGltaW5hciB0YWJsZXJvJyB9KVxuICAgIGRlbGV0ZUJ1dHRvbi5kaXNhYmxlZCA9ICF0aGlzLnBsdWdpbi5jYW5SZW1vdmVUYWJsZXJvKHRoaXMuYWN0aXZlVGFiKVxuICAgIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5vcGVuRGVsZXRlQm9hcmRDb25maXJtKClcbiAgfVxuXG4gIHByaXZhdGUgb3BlbkRlbGV0ZUJvYXJkQ29uZmlybSgpIHtcbiAgICBpZiAoIXRoaXMucGx1Z2luLmNhblJlbW92ZVRhYmxlcm8odGhpcy5hY3RpdmVUYWIpKSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBFbCB0YWJsZXJvIFwiJHt0aGlzLmFjdGl2ZVRhYn1cIiBubyBzZSBwdWVkZSBlbGltaW5hci5gKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYm9hcmROYW1lID0gdGhpcy5hY3RpdmVUYWJcbiAgICBjb25zdCBib2FyZFRhc2tzID0gZ2V0VGFza3ModGhpcy5hcHApLmZpbHRlcih0YXNrID0+IHRhc2sudGFibGVybyA9PT0gYm9hcmROYW1lKVxuICAgIGNvbnN0IHRvcExldmVsQ291bnQgPSBib2FyZFRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLnBhcmVudCkubGVuZ3RoXG4gICAgY29uc3Qgc3VidGFza0NvdW50ID0gYm9hcmRUYXNrcy5sZW5ndGggLSB0b3BMZXZlbENvdW50XG4gICAgY29uc3QgdGFza1N1bW1hcnkgPSBzdWJ0YXNrQ291bnQgPiAwXG4gICAgICA/IGAke3RvcExldmVsQ291bnR9IHRhcmVhKHMpIHkgJHtzdWJ0YXNrQ291bnR9IHN1YnRhcmVhKHMpYFxuICAgICAgOiBgJHt0b3BMZXZlbENvdW50fSB0YXJlYShzKWBcblxuICAgIG5ldyBDb25maXJtRGVsZXRlVGFza01vZGFsKHRoaXMuYXBwLCB7XG4gICAgICB0aXRsZTogJ0VsaW1pbmFyIHRhYmxlcm8nLFxuICAgICAgbWVzc2FnZTogYMK/U2VndXJvIHF1ZSBxdWVyw6lzIGVsaW1pbmFyIGVsIHRhYmxlcm8gXCIke2JvYXJkTmFtZX1cIj8gU2UgYm9ycmFyw6FuICR7dGFza1N1bW1hcnl9LCBzdXMgYXJjaGl2b3MgLm1kLCBncnVwb3MgeSBjYXJwZXRhcyBhc29jaWFkYXMuYCxcbiAgICAgIGNvbmZpcm1UZXh0OiAnQWNlcHRhcicsXG4gICAgICBvbkNvbmZpcm06IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVtb3ZlZCA9IGF3YWl0IHRoaXMucGx1Z2luLnJlbW92ZVRhYmxlcm8oYm9hcmROYW1lKVxuICAgICAgICBpZiAoIXJlbW92ZWQpIHtcbiAgICAgICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBObyBzZSBwdWRvIGVsaW1pbmFyIGVsIHRhYmxlcm8gXCIke2JvYXJkTmFtZX1cIi5gKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSB0aGlzLnBsdWdpbi50YWJsZXJvc1swXT8ubmFtZSB8fCBERUZBVUxUX0JPQVJEX05BTUVcbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXIoKVxuICAgICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBUYWJsZXJvIFwiJHtib2FyZE5hbWV9XCIgZWxpbWluYWRvLmApXG4gICAgICB9LFxuICAgIH0pLm9wZW4oKVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJHcm91cChcbiAgICByb290OiBIVE1MRWxlbWVudCxcbiAgICBncm91cDogRXF1aXBvLFxuICAgIHRhc2tzOiBUYXNrSXRlbVtdLFxuICAgIGFsbFRhc2tzOiBUYXNrSXRlbVtdLFxuICAgIHRhc2tQcmV2aWV3TWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+LFxuICApIHtcbiAgICBjb25zdCBncm91cE5hbWUgPSBncm91cC5uYW1lXG4gICAgY29uc3QgZXhwYW5zaW9uS2V5ID0gdGhpcy5nZXRHcm91cEV4cGFuc2lvbktleShncm91cE5hbWUpXG4gICAgY29uc3QgaXNNYW5hZ2VkID0gdGhpcy5wbHVnaW4uZ2V0RXF1aXBvc0ZvclRhYmxlcm8odGhpcy5hY3RpdmVUYWIpLnNvbWUoaXRlbSA9PiBpdGVtLm5hbWUgPT09IGdyb3VwTmFtZSlcbiAgICBjb25zdCBleHBhbmRlZCA9IHRoaXMuZXhwYW5kZWRHcm91cHMuaGFzKGV4cGFuc2lvbktleSlcblxuICAgIGNvbnN0IGNvbHVtbiA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWdyb3VwJyB9KVxuICAgIGNvbHVtbi5kYXRhc2V0Lmdyb3VwID0gZ3JvdXBOYW1lXG4gICAgY29uc3QgaGVhZGVyID0gY29sdW1uLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1ncm91cC1oZWFkZXInIH0pXG4gICAgbGV0IGRyYWdIYW5kbGU6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGxcblxuICAgIGlmIChpc01hbmFnZWQpIHtcbiAgICAgIGRyYWdIYW5kbGUgPSBoZWFkZXIuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICfimLAnLCBjbHM6ICd0YXJlYXMtZ3JvdXAtZHJhZy1oYW5kbGUnIH0pXG4gICAgICBkcmFnSGFuZGxlLnNldEF0dHIoJ2FyaWEtbGFiZWwnLCBgTW92ZXIgZ3J1cG8gJHtncm91cE5hbWV9YClcbiAgICAgIGRyYWdIYW5kbGUuc2V0QXR0cigndGl0bGUnLCAnQXJyYXN0cmFyIHBhcmEgbW92ZXIgZ3J1cG8nKVxuICAgICAgZHJhZ0hhbmRsZS5kcmFnZ2FibGUgPSB0cnVlXG4gICAgfVxuXG4gICAgaGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBleHBhbmRlZCA/ICfilrwgJyA6ICfilrYgJywgY2xzOiAndGFyZWFzLXRvZ2dsZScgfSlcbiAgICBjb25zdCBiYWRnZSA9IGhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogZ3JvdXBOYW1lLCBjbHM6ICd0YXJlYXMtYmFkZ2UnIH0pXG4gICAgYmFkZ2Uuc3R5bGUuYmFja2dyb3VuZCA9IGdyb3VwLmNvbG9yXG4gICAgaGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBgICAke3Rhc2tzLmxlbmd0aH1gLCBjbHM6ICd0YXJlYXMtY291bnQnIH0pXG5cbiAgICBpZiAoaXNNYW5hZ2VkKSB7XG4gICAgICBjb25zdCBlZGl0QnV0dG9uID0gaGVhZGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICfinI4nLCBjbHM6ICd0YXJlYXMtZ3JvdXAtZWRpdC1idG4nIH0pXG4gICAgICBlZGl0QnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgbmV3IEVkaXRTZWN0aW9uTW9kYWwodGhpcy5hcHAsIHRoaXMucGx1Z2luLCBncm91cCwgdGhpcywgdGhpcy5hY3RpdmVUYWIpLm9wZW4oKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXR0YWNoR3JvdXBEcmFnSGFuZGxlcnMocm9vdCwgY29sdW1uLCBkcmFnSGFuZGxlLCBncm91cE5hbWUsIGlzTWFuYWdlZClcblxuICAgIGhlYWRlci5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKGV4cGFuZGVkKVxuICAgICAgICB0aGlzLmV4cGFuZGVkR3JvdXBzLmRlbGV0ZShleHBhbnNpb25LZXkpXG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuZXhwYW5kZWRHcm91cHMuYWRkKGV4cGFuc2lvbktleSlcblxuICAgICAgdGhpcy5yZW5kZXIoKVxuICAgIH1cblxuICAgIGlmICghZXhwYW5kZWQpXG4gICAgICByZXR1cm5cblxuICAgIHRhc2tzLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKVxuICAgIGNvbnN0IGNhcmRzID0gY29sdW1uLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLWxpc3QnIH0pXG4gICAgY2FyZHMuZGF0YXNldC5ncm91cCA9IGdyb3VwTmFtZVxuICAgIGNhcmRzLmRhdGFzZXQuYm9hcmQgPSB0aGlzLmFjdGl2ZVRhYlxuICAgIGNhcmRzLmRhdGFzZXQuaGFzVGFza3MgPSB0YXNrcy5sZW5ndGggPiAwID8gJ3RydWUnIDogJ2ZhbHNlJ1xuICAgIHRoaXMuYXR0YWNoR3JvdXBDYXJkTGlzdERyb3BIYW5kbGVycyhjYXJkcywgZ3JvdXBOYW1lLCBhbGxUYXNrcylcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpXG4gICAgICB0aGlzLnJlbmRlclRhc2tDYXJkKGNhcmRzLCB0YXNrLCBhbGxUYXNrcywgdGFza1ByZXZpZXdNYXAuZ2V0KHRhc2suZmlsZS5wYXRoKSB8fCAnJylcblxuICAgIGNvbnN0IGFkZENhcmQgPSBjYXJkcy5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtdGFzay1jYXJkIHRhcmVhcy10YXNrLWNhcmQtYWRkJyB9KVxuICAgIGNvbnN0IGxpbmsgPSBhZGRDYXJkLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnKyBOdWV2YSB0YXJlYScsIGNsczogJ3RhcmVhcy1hZGQtbGluaycgfSlcbiAgICBsaW5rLm9uY2xpY2sgPSAoKSA9PiBuZXcgTmV3VGFza01vZGFsKHRoaXMuYXBwLCB0aGlzLnBsdWdpbiwgdGhpcy5hY3RpdmVUYWIsICcnLCBncm91cE5hbWUpLm9wZW4oKVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJUYXNrQ2FyZChjb250YWluZXI6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSwgYWxsVGFza3M6IFRhc2tJdGVtW10sIHRhc2tQcmV2aWV3OiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdWJ0YXNrcyA9IGFsbFRhc2tzXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wYXJlbnQgPT09IHRhc2suZmlsZS5iYXNlbmFtZSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcilcbiAgICBjb25zdCBoYXNTdWJ0YXNrcyA9IHN1YnRhc2tzLmxlbmd0aCA+IDBcbiAgICBjb25zdCBzdWJ0YXNrc0V4cGFuZGVkID0gdGhpcy5leHBhbmRlZENhcmRTdWJ0YXNrcy5oYXModGFzay5maWxlLnBhdGgpXG5cbiAgICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy10YXNrLWNhcmQnIH0pXG4gICAgY2FyZC5kYXRhc2V0LnBhdGggPSB0YXNrLmZpbGUucGF0aFxuICAgIGlmICh0aGlzLmRyb3BwZWRUYXNrQW5pbWF0aW9uUGF0aCA9PT0gdGFzay5maWxlLnBhdGgpIHtcbiAgICAgIGNhcmQuYWRkQ2xhc3MoJ3RhcmVhcy10YXNrLWNhcmQtZHJvcC1hbmltYXRlJylcbiAgICAgIHRoaXMuZHJvcHBlZFRhc2tBbmltYXRpb25QYXRoID0gbnVsbFxuICAgIH1cblxuICAgIHRoaXMuYXR0YWNoQ2FyZERyYWdIYW5kbGVycyhjb250YWluZXIsIGNhcmQsIHRhc2ssIGFsbFRhc2tzKVxuICAgIHRoaXMuYXR0YWNoQ2FyZEVkaXRIYW5kbGVycyhjYXJkLCB0YXNrKVxuXG4gICAgY29uc3Qgc3RhdHVzQmFuZENsYXNzID0gdGhpcy5nZXRTdGF0dXNDbGFzc05hbWUodGFzay5lc3RhZG8pXG4gICAgY29uc3Qgc3RhdHVzQmFuZCA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBgdGFyZWFzLWNhcmQtc2lkZS1iYW5kIHRhcmVhcy1jYXJkLXN0YXR1cy1iYW5kIHRhcmVhcy1jYXJkLXN0YXR1cy1iYW5kLSR7c3RhdHVzQmFuZENsYXNzfWAgfSlcbiAgICB0aGlzLnJlbmRlclN0YXR1c0JhbmQoc3RhdHVzQmFuZCwgdGFzaylcblxuICAgIGNvbnN0IHByaW9yaXR5QmFuZENsYXNzID0gdGhpcy5nZXRQcmlvcml0eUNsYXNzTmFtZSh0YXNrLnByaW9yaWRhZClcbiAgICBjb25zdCBwcmlvcml0eUJhbmQgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogYHRhcmVhcy1jYXJkLXNpZGUtYmFuZCB0YXJlYXMtY2FyZC1wcmlvcml0eS1iYW5kIHRhcmVhcy1jYXJkLXByaW9yaXR5LWJhbmQtJHtwcmlvcml0eUJhbmRDbGFzc31gIH0pXG4gICAgdGhpcy5yZW5kZXJQcmlvcml0eUJhbmQocHJpb3JpdHlCYW5kLCB0YXNrKVxuXG4gICAgY29uc3QgYWN0aW9ucyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWNhcmQtYWN0aW9ucyB0YXJlYXMtY2FyZC1hY3Rpb25zLWJhbmQnIH0pXG4gICAgdGhpcy5yZW5kZXJTdGF0dXNBY3Rpb25zKGFjdGlvbnMsIHRhc2spXG4gICAgdGhpcy5zeW5jQ2FyZFNpZGVCYW5kc1RvcE9mZnNldChjYXJkLCBhY3Rpb25zKVxuXG4gICAgY29uc3QgdGl0bGVSb3cgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLXRpdGxlLXJvdycgfSlcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlUm93LmNyZWF0ZUVsKCdhJywgeyB0ZXh0OiB0YXNrLnRhcmVhLCBjbHM6ICd0YXJlYXMtdGFzay1jYXJkLXRpdGxlJyB9KVxuICAgIHRpdGxlLnNldEF0dHIoJ3RpdGxlJywgdGFzay50YXJlYSlcbiAgICB0aXRsZS5vbmNsaWNrID0gKCkgPT4gdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dCh0YXNrLmZpbGUucGF0aCwgJycsIHRydWUpXG5cbiAgICBjb25zdCBjb21tZW50QnV0dG9uID0gdGl0bGVSb3cuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAndGFyZWFzLWNhcmQtY29tbWVudC1idG4nIH0pXG4gICAgY29tbWVudEJ1dHRvbi5zZXRBdHRyKCdhcmlhLWxhYmVsJywgJ0FncmVnYXIgY29tZW50YXJpbycpXG4gICAgY29tbWVudEJ1dHRvbi5zZXRBdHRyKCd0aXRsZScsICdBZ3JlZ2FyIGNvbWVudGFyaW8nKVxuICAgIG9ic2lkaWFuLnNldEljb24oY29tbWVudEJ1dHRvbiwgJ3Njcm9sbC10ZXh0JylcbiAgICBjb21tZW50QnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBuZXcgQWRkVGFza0NvbW1lbnRNb2RhbCh0aGlzLmFwcCwgdGFzaykub3BlbigpXG4gICAgfVxuXG4gICAgaWYgKHRhc2tQcmV2aWV3KVxuICAgICAgY2FyZC5jcmVhdGVFbCgncCcsIHsgdGV4dDogdGFza1ByZXZpZXcsIGNsczogJ3RhcmVhcy1jYXJkLXByZXZpZXcnIH0pXG5cbiAgICBjb25zdCBmb290ZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLWZvb3RlcicgfSlcbiAgICBpZiAoaGFzU3VidGFza3MpIHtcbiAgICAgIGNvbnN0IHN1YnRhc2tzVG9nZ2xlID0gZm9vdGVyLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICB0ZXh0OiBgJHtzdWJ0YXNrc0V4cGFuZGVkID8gJ+KWvCcgOiAn4pa2J30gJHtzdWJ0YXNrcy5sZW5ndGh9IHN1YnRhcmVhKHMpYCxcbiAgICAgICAgY2xzOiBgdGFyZWFzLWNhcmQtc3VidGFza3MgdGFyZWFzLWNhcmQtc3VidGFza3MtdG9nZ2xlJHtzdWJ0YXNrc0V4cGFuZGVkID8gJyBpcy1leHBhbmRlZCcgOiAnJ31gLFxuICAgICAgfSlcblxuICAgICAgc3VidGFza3NUb2dnbGUub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBpZiAoc3VidGFza3NFeHBhbmRlZClcbiAgICAgICAgICB0aGlzLmV4cGFuZGVkQ2FyZFN1YnRhc2tzLmRlbGV0ZSh0YXNrLmZpbGUucGF0aClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXMuZXhwYW5kZWRDYXJkU3VidGFza3MuYWRkKHRhc2suZmlsZS5wYXRoKVxuXG4gICAgICAgIHRoaXMucmVuZGVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRTdWJ0YXNrID0gZm9vdGVyLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnKyBTdWJ0YXJlYScsIGNsczogJ3RhcmVhcy1hZGQtbGluaycgfSlcbiAgICBhZGRTdWJ0YXNrLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBuZXcgTmV3VGFza01vZGFsKHRoaXMuYXBwLCB0aGlzLnBsdWdpbiwgdGFzay50YWJsZXJvLCB0YXNrLmZpbGUuYmFzZW5hbWUsIHRhc2suZXF1aXBvKS5vcGVuKClcbiAgICB9XG5cbiAgICBpZiAoaGFzU3VidGFza3MgJiYgc3VidGFza3NFeHBhbmRlZClcbiAgICAgIHRoaXMucmVuZGVyQ2FyZFN1YnRhc2tMaXN0KGNhcmQsIHN1YnRhc2tzKVxuXG4gICAgdGhpcy5yZW5kZXJDYXJkUHJvZ3Jlc3NCYW5kKGNhcmQsIHRhc2spXG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENhcmRFZGl0SGFuZGxlcnMoY2FyZDogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCEoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICByZXR1cm5cblxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdhLCBidXR0b24sIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0JykpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgbmV3IEVkaXRUYXNrRmlsZU1vZGFsKHRoaXMuYXBwLCB0YXNrKS5vcGVuKClcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jQ2FyZFNpZGVCYW5kc1RvcE9mZnNldChjYXJkOiBIVE1MRWxlbWVudCwgYWN0aW9uc0JhbmQ6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgYXBwbHlPZmZzZXQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBtZWFzdXJlZEhlaWdodCA9IE1hdGguY2VpbChhY3Rpb25zQmFuZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpXG4gICAgICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KCctLXRhcmVhcy1jYXJkLWFjdGlvbnMtYmFuZC1oZWlnaHQnLCBgJHttZWFzdXJlZEhlaWdodH1weGApXG4gICAgfVxuXG4gICAgYXBwbHlPZmZzZXQoKVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXBwbHlPZmZzZXQpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGJ1aWxkVGFza1ByZXZpZXdNYXAodGFza3M6IFRhc2tJdGVtW10pOiBQcm9taXNlPE1hcDxzdHJpbmcsIHN0cmluZz4+IHtcbiAgICBjb25zdCBwcmV2aWV3TWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwodGFza3MubWFwKGFzeW5jICh0YXNrKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlQ29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNhY2hlZFJlYWQodGFzay5maWxlKVxuICAgICAgICBwcmV2aWV3TWFwLnNldCh0YXNrLmZpbGUucGF0aCwgZXh0cmFjdFRhc2tCb2R5UHJldmlldyhmaWxlQ29udGVudCkpXG4gICAgICB9XG4gICAgICBjYXRjaCB7XG4gICAgICAgIHByZXZpZXdNYXAuc2V0KHRhc2suZmlsZS5wYXRoLCAnJylcbiAgICAgIH1cbiAgICB9KSlcblxuICAgIHJldHVybiBwcmV2aWV3TWFwXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclJvdyh0Ym9keTogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtLCBhbGxUYXNrczogVGFza0l0ZW1bXSwgZGVwdGg6IG51bWJlcikge1xuICAgIGNvbnN0IHN1YnRhc2tzID0gYWxsVGFza3NcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLnBhcmVudCA9PT0gdGFzay5maWxlLmJhc2VuYW1lKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKVxuXG4gICAgY29uc3QgaGFzU3VidGFza3MgPSBzdWJ0YXNrcy5sZW5ndGggPiAwXG4gICAgY29uc3QgZXhwYW5kZWQgPSB0aGlzLmV4cGFuZGVkVGFza3MuaGFzKHRhc2suZmlsZS5wYXRoKVxuXG4gICAgY29uc3Qgcm93ID0gdGJvZHkuY3JlYXRlRWwoJ3RyJywgeyBjbHM6ICd0YXJlYXMtcm93JyB9KVxuICAgIHJvdy5kYXRhc2V0LnBhdGggPSB0YXNrLmZpbGUucGF0aFxuICAgIHJvdy5kYXRhc2V0LmRlcHRoID0gU3RyaW5nKGRlcHRoKVxuXG4gICAgdGhpcy5yZW5kZXJEcmFnQ2VsbChyb3csIHRib2R5LCB0YXNrLCBhbGxUYXNrcywgZGVwdGgpXG4gICAgdGhpcy5yZW5kZXJUb2dnbGVDZWxsKHJvdywgdGFzaywgaGFzU3VidGFza3MsIGV4cGFuZGVkLCBkZXB0aClcbiAgICB0aGlzLnJlbmRlclRhc2tOYW1lQ2VsbChyb3csIHRhc2ssIGRlcHRoKVxuICAgIHRoaXMucmVuZGVyU3RhdHVzQ2VsbChyb3csIHRhc2spXG4gICAgdGhpcy5yZW5kZXJUZWFtQ2VsbChyb3csIHRhc2ssIGRlcHRoKVxuICAgIHRoaXMucmVuZGVyUHJpb3JpdHlDZWxsKHJvdywgdGFzaylcbiAgICB0aGlzLnJlbmRlckRlZGljYXRlZENlbGwocm93LCB0YXNrKVxuICAgIHRoaXMucmVuZGVyRXN0aW1hdGVkQ2VsbChyb3csIHRhc2spXG4gICAgdGhpcy5yZW5kZXJTdGFydERhdGVDZWxsKHJvdywgdGFzaylcbiAgICB0aGlzLnJlbmRlckVuZERhdGVDZWxsKHJvdywgdGFzaylcbiAgICB0aGlzLnJlbmRlclBlcmNlbnRDZWxsKHJvdywgdGFzaylcbiAgICB0aGlzLnJlbmRlclN0YXR1c0FjdGlvbnNDZWxsKHJvdywgdGFzaylcblxuICAgIGlmICghZXhwYW5kZWQpXG4gICAgICByZXR1cm5cblxuICAgIGZvciAoY29uc3Qgc3VidGFzayBvZiBzdWJ0YXNrcylcbiAgICAgIHRoaXMucmVuZGVyUm93KHRib2R5LCBzdWJ0YXNrLCBhbGxUYXNrcywgZGVwdGggKyAxKVxuXG4gICAgaWYgKCF0aGlzLmlzQXJjaGl2ZWRUYWIoKSAmJiAhdGhpcy5pc1BvbW9kb3JvVGFiKCkpIHtcbiAgICAgIGNvbnN0IGFkZFN1YlJvdyA9IHRib2R5LmNyZWF0ZUVsKCd0cicsIHsgY2xzOiAndGFyZWFzLWFkZC1yb3cnIH0pXG4gICAgICBhZGRTdWJSb3cuY3JlYXRlRWwoJ3RkJylcbiAgICAgIGFkZFN1YlJvdy5jcmVhdGVFbCgndGQnKVxuXG4gICAgICBjb25zdCBhZGRTdWJDZWxsID0gYWRkU3ViUm93LmNyZWF0ZUVsKCd0ZCcsIHsgYXR0cjogeyBjb2xzcGFuOiAnMTAnIH0gfSlcbiAgICAgIGFkZFN1YkNlbGwuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHsoZGVwdGggKyAxKSAqIDI0ICsgOH1weGBcblxuICAgICAgY29uc3QgYWRkU3VidGFzayA9IGFkZFN1YkNlbGwuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICcrIFN1YnRhcmVhJywgY2xzOiAndGFyZWFzLWFkZC1saW5rJyB9KVxuICAgICAgYWRkU3VidGFzay5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIG5ldyBOZXdUYXNrTW9kYWwodGhpcy5hcHAsIHRoaXMucGx1Z2luLCB0YXNrLnRhYmxlcm8sIHRhc2suZmlsZS5iYXNlbmFtZSwgdGFzay5lcXVpcG8pLm9wZW4oKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyRHJhZ0NlbGwocm93OiBIVE1MRWxlbWVudCwgdGJvZHk6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSwgYWxsVGFza3M6IFRhc2tJdGVtW10sIGRlcHRoOiBudW1iZXIpIHtcbiAgICBjb25zdCBkcmFnQ2VsbCA9IHJvdy5jcmVhdGVFbCgndGQnLCB7IGNsczogJ3RhcmVhcy1jZWxsLWRyYWcnIH0pXG4gICAgZHJhZ0NlbGwuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICfioIHioIHioIEnLCBjbHM6ICd0YXJlYXMtZHJhZy1oYW5kbGUnIH0pXG5cbiAgICByb3cuZHJhZ2dhYmxlID0gdHJ1ZVxuXG4gICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZGF0YVRyYW5zZmVyID0gZXZlbnQuZGF0YVRyYW5zZmVyXG4gICAgICBpZiAoIWRhdGFUcmFuc2ZlcilcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHRoaXMuZHJhZ1BhdGggPSB0YXNrLmZpbGUucGF0aFxuICAgICAgdGhpcy5kcmFnRGVwdGggPSBkZXB0aFxuICAgICAgdGhpcy5kcmFnUGFyZW50ID0gdGFzay5wYXJlbnRcbiAgICAgIHJvdy5hZGRDbGFzcygndGFyZWFzLXJvdy1kcmFnZ2luZycpXG4gICAgICBkYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJ1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9KVxuXG4gICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0Um93RHJhZ1N0YXRlKHRib2R5LCByb3cpXG4gICAgfSlcblxuICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNhbkRyb3BPblJvdyh0YXNrLCBkZXB0aCkpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2ZlcilcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcblxuICAgICAgdGJvZHkucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy1yb3ctZHJhZy1vdmVyJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgndGFyZWFzLXJvdy1kcmFnLW92ZXInKSlcbiAgICAgIHJvdy5hZGRDbGFzcygndGFyZWFzLXJvdy1kcmFnLW92ZXInKVxuICAgIH0pXG5cbiAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKCkgPT4ge1xuICAgICAgcm93LnJlbW92ZUNsYXNzKCd0YXJlYXMtcm93LWRyYWctb3ZlcicpXG4gICAgfSlcblxuICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY2FuRHJvcE9uUm93KHRhc2ssIGRlcHRoKSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICByb3cucmVtb3ZlQ2xhc3MoJ3RhcmVhcy1yb3ctZHJhZy1vdmVyJylcblxuICAgICAgaWYgKCF0aGlzLmRyYWdQYXRoKVxuICAgICAgICByZXR1cm5cblxuICAgICAgaWYgKGRlcHRoID09PSAwKVxuICAgICAgICBhd2FpdCB0aGlzLnJlb3JkZXJUYXNrKHRoaXMuZHJhZ1BhdGgsIHRhc2suZmlsZS5wYXRoLCBhbGxUYXNrcylcbiAgICAgIGVsc2VcbiAgICAgICAgYXdhaXQgdGhpcy5yZW9yZGVyU3VidGFzayh0aGlzLmRyYWdQYXRoLCB0YXNrLmZpbGUucGF0aCwgYWxsVGFza3MpXG5cbiAgICAgIHRoaXMucmVzZXRSb3dEcmFnU3RhdGUodGJvZHksIHJvdylcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJUb2dnbGVDZWxsKHJvdzogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtLCBoYXNTdWJ0YXNrczogYm9vbGVhbiwgZXhwYW5kZWQ6IGJvb2xlYW4sIGRlcHRoOiBudW1iZXIpIHtcbiAgICBjb25zdCB0b2dnbGVDZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtdG9nZ2xlJyB9KVxuXG4gICAgaWYgKGRlcHRoICE9PSAwKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCB0b2dnbGUgPSB0b2dnbGVDZWxsLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgdGV4dDogZXhwYW5kZWQgPyAn4pa8JyA6ICfilrYnLFxuICAgICAgY2xzOiBgdGFyZWFzLXN1YnRhc2stdG9nZ2xlJHtoYXNTdWJ0YXNrcyA/ICcnIDogJyB0YXJlYXMtdG9nZ2xlLWVtcHR5J31gLFxuICAgIH0pXG5cbiAgICB0b2dnbGUub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgaWYgKGV4cGFuZGVkKVxuICAgICAgICB0aGlzLmV4cGFuZGVkVGFza3MuZGVsZXRlKHRhc2suZmlsZS5wYXRoKVxuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmV4cGFuZGVkVGFza3MuYWRkKHRhc2suZmlsZS5wYXRoKVxuXG4gICAgICB0aGlzLnJlbmRlcigpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJUYXNrTmFtZUNlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0sIGRlcHRoOiBudW1iZXIpIHtcbiAgICBjb25zdCBjZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtbmFtZScgfSlcbiAgICBjZWxsLnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7ZGVwdGggKiAyNCArIDh9cHhgXG5cbiAgICBjb25zdCB0aXRsZVdyYXAgPSBjZWxsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy10YXNrLXRpdGxlLXdyYXAnIH0pXG5cbiAgICBpZiAoZGVwdGggPiAwKVxuICAgICAgdGl0bGVXcmFwLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAn4pSUICcsIGNsczogJ3RhcmVhcy1zdWJ0YXNrLWluZGVudCcgfSlcblxuICAgIGNvbnN0IGxpbmsgPSB0aXRsZVdyYXAuY3JlYXRlRWwoJ2EnLCB7IHRleHQ6IHRhc2sudGFyZWEsIGNsczogJ3RhcmVhcy10YXNrLWxpbmsnIH0pXG4gICAgbGluay5zZXRBdHRyKCd0aXRsZScsIHRhc2sudGFyZWEpXG4gICAgbGluay5vbmNsaWNrID0gKCkgPT4gdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dCh0YXNrLmZpbGUucGF0aCwgJycsIHRydWUpXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclN0YXR1c0NlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBjZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtZXN0YWRvJyB9KVxuICAgIHRoaXMucmVuZGVyU3RhdHVzQmFkZ2UoY2VsbCwgdGFzaylcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU3RhdHVzQmFkZ2UoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBzdGF0dXNDbGFzcyA9IHRoaXMuZ2V0U3RhdHVzQ2xhc3NOYW1lKHRhc2suZXN0YWRvKVxuICAgIGNvbnN0IGJhZGdlID0gY29udGFpbmVyLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgdGV4dDogdGFzay5lc3RhZG8sXG4gICAgICBjbHM6IGB0YXJlYXMtZXN0YWRvIHRhcmVhcy1lc3RhZG8tJHtzdGF0dXNDbGFzc31gLFxuICAgIH0pXG5cbiAgICBiYWRnZS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgc2hvd0Ryb3Bkb3duKGJhZGdlLCBFU1RBRE9TLCB0YXNrLmVzdGFkbywgYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwbHlTdGF0ZVRyYW5zaXRpb24odGFzaywgdmFsdWUpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU3RhdHVzQmFuZChjb250YWluZXI6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnRhaW5lci5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogdGFzay5lc3RhZG8sIGNsczogJ3RhcmVhcy1jYXJkLXNpZGUtYmFuZC10ZXh0JyB9KVxuICAgIGNvbnRhaW5lci5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgc2hvd0Ryb3Bkb3duKGNvbnRhaW5lciwgRVNUQURPUywgdGFzay5lc3RhZG8sIGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcGx5U3RhdGVUcmFuc2l0aW9uKHRhc2ssIHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclByaW9yaXR5QmFuZChjb250YWluZXI6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnRhaW5lci5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogdGFzay5wcmlvcmlkYWQsIGNsczogJ3RhcmVhcy1jYXJkLXNpZGUtYmFuZC10ZXh0JyB9KVxuICAgIGNvbnRhaW5lci5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgc2hvd0Ryb3Bkb3duKGNvbnRhaW5lciwgUFJJT1JJREFERVMsIHRhc2sucHJpb3JpZGFkLCBhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgcHJpb3JpZGFkOiB2YWx1ZSB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckNhcmRTdWJ0YXNrTGlzdChjYXJkOiBIVE1MRWxlbWVudCwgc3VidGFza3M6IFRhc2tJdGVtW10pIHtcbiAgICBjb25zdCBsaXN0ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtY2FyZC1zdWJ0YXNrLWxpc3QnIH0pXG5cbiAgICBmb3IgKGNvbnN0IHN1YnRhc2sgb2Ygc3VidGFza3MpIHtcbiAgICAgIGNvbnN0IHJvdyA9IGxpc3QuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWNhcmQtc3VidGFzay1yb3cnIH0pXG4gICAgICBjb25zdCBjaGVja2VkID0gc3VidGFzay5lc3RhZG8gPT09ICdGaW5hbGl6YWRhJ1xuXG4gICAgICBjb25zdCBjaGVja2JveCA9IHJvdy5jcmVhdGVFbCgnaW5wdXQnLCB7XG4gICAgICAgIGNsczogJ3RhcmVhcy1jYXJkLXN1YnRhc2stY2hlY2snLFxuICAgICAgICBhdHRyOiB7IHR5cGU6ICdjaGVja2JveCcgfSxcbiAgICAgIH0pXG4gICAgICBjaGVja2JveC5jaGVja2VkID0gY2hlY2tlZFxuXG4gICAgICBjaGVja2JveC5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB9XG5cbiAgICAgIGNoZWNrYm94Lm9uY2hhbmdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnN0IG5leHRTdGF0dXMgPSBjaGVja2JveC5jaGVja2VkID8gJ0ZpbmFsaXphZGEnIDogJ1BlbmRpZW50ZSdcbiAgICAgICAgaWYgKHN1YnRhc2suZXN0YWRvID09PSBuZXh0U3RhdHVzKVxuICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIGF3YWl0IHRoaXMuYXBwbHlTdGF0ZVRyYW5zaXRpb24oc3VidGFzaywgbmV4dFN0YXR1cywgdW5kZWZpbmVkLCB7IG1vdmVGaWxlOiBmYWxzZSB9KVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0aXRsZSA9IHJvdy5jcmVhdGVFbCgnYScsIHtcbiAgICAgICAgdGV4dDogc3VidGFzay50YXJlYSxcbiAgICAgICAgY2xzOiBgdGFyZWFzLWNhcmQtc3VidGFzay10aXRsZSR7Y2hlY2tlZCA/ICcgaXMtZG9uZScgOiAnJ31gLFxuICAgICAgfSlcbiAgICAgIHRpdGxlLnNldEF0dHIoJ3RpdGxlJywgc3VidGFzay50YXJlYSlcbiAgICAgIHRpdGxlLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChzdWJ0YXNrLmZpbGUucGF0aCwgJycsIHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbW1lbnRCdXR0b24gPSByb3cuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAndGFyZWFzLWNhcmQtY29tbWVudC1idG4gdGFyZWFzLWNhcmQtc3VidGFzay1jb21tZW50LWJ0bicgfSlcbiAgICAgIGNvbW1lbnRCdXR0b24uc2V0QXR0cignYXJpYS1sYWJlbCcsICdBZ3JlZ2FyIGNvbWVudGFyaW8nKVxuICAgICAgY29tbWVudEJ1dHRvbi5zZXRBdHRyKCd0aXRsZScsICdBZ3JlZ2FyIGNvbWVudGFyaW8nKVxuICAgICAgb2JzaWRpYW4uc2V0SWNvbihjb21tZW50QnV0dG9uLCAnc2Nyb2xsLXRleHQnKVxuICAgICAgY29tbWVudEJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIG5ldyBBZGRUYXNrQ29tbWVudE1vZGFsKHRoaXMuYXBwLCBzdWJ0YXNrKS5vcGVuKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckNhcmRQcm9ncmVzc0JhbmQoY2FyZDogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3Qgcm93ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtY2FyZC1wcm9ncmVzcy1yb3cnIH0pXG4gICAgY29uc3QgYmFuZCA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtY2FyZC1wcm9ncmVzcy1iYW5kJyB9KVxuICAgIGNvbnN0IGZpbGwgPSBiYW5kLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLXByb2dyZXNzLWJhbmQtZmlsbCcgfSlcbiAgICBjb25zdCB0ZXh0ID0gYmFuZC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtY2FyZC1wcm9ncmVzcy1iYW5kLXRleHQnIH0pXG4gICAgY29uc3QgZGVkaWNhdGVkQW5kRXN0aW1hdGVkVGV4dCA9IGAke3RoaXMuZm9ybWF0RGVjaW1hbCh0YXNrLmRlZGljYWRvKX0vJHt0aGlzLmZvcm1hdERlY2ltYWwodGFzay5lc3RpbWFjaW9uKX1gXG4gICAgY29uc3QgZGV2aWF0aW9uVGV4dCA9IGAgKy0+ICR7dGhpcy5mb3JtYXREZWNpbWFsKHRhc2suZGVzdmlvKX1gXG4gICAgY29uc3QgdGV4dFZhbHVlID0gdGV4dC5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgIGNsczogJ3RhcmVhcy1jYXJkLXByb2dyZXNzLWJhbmQtdGV4dC12YWx1ZSB0YXJlYXMtY2FyZC1wcm9ncmVzcy1iYW5kLXRleHQtZWRpdGFibGUnLFxuICAgICAgdGV4dDogZGVkaWNhdGVkQW5kRXN0aW1hdGVkVGV4dCxcbiAgICB9KVxuICAgIHRleHRWYWx1ZS5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAndGFyZWFzLWNhcmQtcHJvZ3Jlc3MtYmFuZC10ZXh0LWRldmlhdGlvbicsIHRleHQ6IGRldmlhdGlvblRleHQgfSlcbiAgICB0ZXh0VmFsdWUuc2V0QXR0cigndGl0bGUnLCBgJHt0aGlzLmZvcm1hdERlY2ltYWwodGFzay5kZWRpY2Fkbyl9IGggLyAke3RoaXMuZm9ybWF0RGVjaW1hbCh0YXNrLmVzdGltYWNpb24pfSBoICstPiAke3RoaXMuZm9ybWF0RGVjaW1hbCh0YXNrLmRlc3Zpbyl9IGhgKVxuICAgIHRleHRWYWx1ZS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgdGhpcy5lZGl0Q2FyZERlZGljYXRlZFZhbHVlKGJhbmQsIHRleHRWYWx1ZSwgdGFzaylcbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzc1BlcmNlbnQgPSB0YXNrLmVzdGltYWNpb24gPiAwXG4gICAgICA/ICh0YXNrLmRlZGljYWRvIC8gdGFzay5lc3RpbWFjaW9uKSAqIDEwMFxuICAgICAgOiAwXG5cbiAgICBjb25zdCBpc092ZXJmbG93ID0gcHJvZ3Jlc3NQZXJjZW50ID4gMTAwXG4gICAgbGV0IHZpc2libGVQZXJjZW50ID0gaXNPdmVyZmxvd1xuICAgICAgPyBwcm9ncmVzc1BlcmNlbnQgJSAxMDBcbiAgICAgIDogcHJvZ3Jlc3NQZXJjZW50XG5cbiAgICBpZiAoaXNPdmVyZmxvdyAmJiB2aXNpYmxlUGVyY2VudCA9PT0gMClcbiAgICAgIHZpc2libGVQZXJjZW50ID0gMTAwXG5cbiAgICBjb25zdCBjbGFtcGVkUGVyY2VudCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgdmlzaWJsZVBlcmNlbnQpKVxuICAgIGZpbGwuc3R5bGUud2lkdGggPSBgJHtjbGFtcGVkUGVyY2VudH0lYFxuXG4gICAgaWYgKGlzT3ZlcmZsb3cpXG4gICAgICBiYW5kLmFkZENsYXNzKCdpcy1vdmVyZmxvdycpXG5cbiAgICBjb25zdCBwb21vZG9yb0J1dHRvbiA9IHJvdy5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICd0YXJlYXMtY2FyZC1wb21vZG9yby1idG4nIH0pXG4gICAgY29uc3QgaXNQb21vZG9yb1J1bm5pbmcgPSB0aGlzLnBsdWdpbi5wb21vZG9yby5ydW5TdGF0ZSA9PT0gJ3J1bm5pbmcnXG4gICAgcG9tb2Rvcm9CdXR0b24uZGlzYWJsZWQgPSBpc1BvbW9kb3JvUnVubmluZ1xuICAgIHBvbW9kb3JvQnV0dG9uLnNldEF0dHIoJ2FyaWEtbGFiZWwnLCAnQWJyaXIgUG9tb2Rvcm8gY29uIGVzdGEgdGFyZWEnKVxuICAgIHBvbW9kb3JvQnV0dG9uLnNldEF0dHIoJ3RpdGxlJywgaXNQb21vZG9yb1J1bm5pbmdcbiAgICAgID8gJ05vIHNlIHB1ZWRlIHZpbmN1bGFyIHVuYSB0YXJlYSBtaWVudHJhcyBlbCBjb250YWRvciBlc3TDoSBjb3JyaWVuZG8nXG4gICAgICA6ICdBYnJpciBQb21vZG9ybyBjb24gZXN0YSB0YXJlYScpXG4gICAgb2JzaWRpYW4uc2V0SWNvbihwb21vZG9yb0J1dHRvbiwgJ2Nsb2NrLTMnKVxuICAgIHBvbW9kb3JvQnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0aGlzLm9wZW5Qb21vZG9yb1dpdGhUYXNrKHRhc2spXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuUG9tb2Rvcm9XaXRoVGFzayh0YXNrOiBUYXNrSXRlbSkge1xuICAgIGlmICh0aGlzLnBsdWdpbi5wb21vZG9yby5ydW5TdGF0ZSA9PT0gJ3J1bm5pbmcnKSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdObyBzZSBwdWVkZSBjYW1iaWFyIGxhIHRhcmVhIG1pZW50cmFzIGVsIGNvbnRhZG9yIGVzdMOhIGNvcnJpZW5kby4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zZXRQb21vZG9yb1NlbGVjdGVkVGFza1BhdGgodGFzay5maWxlLnBhdGgpXG4gICAgdGhpcy5hY3RpdmVUYWIgPSBUYXJlYXNWaWV3LlBPTU9ET1JPX1RBQl9JRFxuICAgIHZvaWQgdGhpcy5yZW5kZXIoKVxuICB9XG5cbiAgcHJpdmF0ZSBlZGl0Q2FyZERlZGljYXRlZFZhbHVlKGJhbmQ6IEhUTUxFbGVtZW50LCB0ZXh0OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBpZiAoYmFuZC5xdWVyeVNlbGVjdG9yKCcudGFyZWFzLWNhcmQtcHJvZ3Jlc3MtaW5wdXQnKSlcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgaW5wdXQgPSBiYW5kLmNyZWF0ZUVsKCdpbnB1dCcsIHsgY2xzOiAndGFyZWFzLWNhcmQtcHJvZ3Jlc3MtaW5wdXQnIH0pXG4gICAgaW5wdXQudHlwZSA9ICdudW1iZXInXG4gICAgaW5wdXQubWluID0gJzAnXG4gICAgaW5wdXQuc3RlcCA9ICcwLjAxJ1xuICAgIGlucHV0LnZhbHVlID0gdGhpcy5mb3JtYXREZWNpbWFsKHRhc2suZGVkaWNhZG8pXG5cbiAgICB0ZXh0LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgIGlucHV0LmZvY3VzKClcbiAgICBpbnB1dC5zZWxlY3QoKVxuXG4gICAgY29uc3QgY2xvc2VFZGl0b3IgPSBhc3luYyAoc2F2ZTogYm9vbGVhbikgPT4ge1xuICAgICAgY29uc3QgbmV4dFZhbHVlID0gdGhpcy5wYXJzZURlY2ltYWwoaW5wdXQudmFsdWUpXG4gICAgICBpbnB1dC5yZW1vdmUoKVxuICAgICAgdGV4dC5zdHlsZS52aXNpYmlsaXR5ID0gJydcblxuICAgICAgaWYgKCFzYXZlIHx8IG5leHRWYWx1ZSA9PT0gdGFzay5kZWRpY2FkbylcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IGRlZGljYWRvOiBuZXh0VmFsdWUgfSlcbiAgICB9XG5cbiAgICBpbnB1dC5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICB2b2lkIGNsb3NlRWRpdG9yKHRydWUpXG4gICAgfSlcblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpXG4gICAgICAgIGlucHV0LmJsdXIoKVxuXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHZvaWQgY2xvc2VFZGl0b3IoZmFsc2UpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU3RhdHVzQWN0aW9uc0NlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBjZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtYWN0aW9ucycgfSlcbiAgICBpZiAodGhpcy5pc0FyY2hpdmVkVGFiKCkpIHtcbiAgICAgIHRoaXMucmVuZGVyQXJjaGl2ZWRBY3Rpb25zKGNlbGwsIHRhc2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlclN0YXR1c0FjdGlvbnMoY2VsbCwgdGFzaylcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RhdHVzQ2xhc3NOYW1lKHN0YXR1czogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RhdHVzLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnLScpXG4gIH1cblxuICBwcml2YXRlIGdldFByaW9yaXR5Q2xhc3NOYW1lKHByaW9yaXR5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBwcmlvcml0eS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJy0nKVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJTdGF0dXNBY3Rpb25zKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtc3RhdHVzLWFjdGlvbnMnIH0pXG5cbiAgICBjb25zdCBwcm9ncmVzc0FjdGlvbiA9IHRhc2suZXN0YWRvID09PSAnRW4gcHJvZ3Jlc28nXG4gICAgICA/IHsgbGFiZWw6ICdQYXJhcicsIG5leHRTdGF0dXM6ICdQZW5kaWVudGUnIH1cbiAgICAgIDogeyBsYWJlbDogJ0luaWNpYXInLCBuZXh0U3RhdHVzOiAnRW4gcHJvZ3Jlc28nIH1cblxuICAgIGNvbnN0IHN0YXR1c0FjdGlvbnMgPSBbXG4gICAgICB7IGlkOiAnZGlzbWlzcycsIGxhYmVsOiAnRGVzZXN0aW1hcicsIG5leHRTdGF0dXM6ICdDYW5jZWxhZGEnLCBjbHM6ICdpcy1kaXNtaXNzJyB9LFxuICAgICAgeyBpZDogJ3N0YXJ0LXN0b3AnLCAuLi5wcm9ncmVzc0FjdGlvbiwgY2xzOiAnaXMtc3RhcnQtc3RvcCcgfSxcbiAgICAgIHsgaWQ6ICdmaW5pc2gnLCBsYWJlbDogJ0ZpbmFsaXphcicsIG5leHRTdGF0dXM6ICdGaW5hbGl6YWRhJywgY2xzOiAnaXMtZmluaXNoJyB9LFxuICAgICAgeyBpZDogJ2Jsb2NrJywgbGFiZWw6ICdCbG9xdWVhcicsIG5leHRTdGF0dXM6ICdCbG9xdWVhZGEnLCBjbHM6ICdpcy1ibG9jaycgfSxcbiAgICBdXG5cbiAgICBmb3IgKGNvbnN0IGFjdGlvbiBvZiBzdGF0dXNBY3Rpb25zKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBhY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgIHRleHQ6IGFjdGlvbi5sYWJlbCxcbiAgICAgICAgY2xzOiAndGFyZWFzLXN0YXR1cy1hY3Rpb24tYnRuJyxcbiAgICAgIH0pXG4gICAgICBidXR0b24uYWRkQ2xhc3MoYWN0aW9uLmNscylcblxuICAgICAgaWYgKHRhc2suZXN0YWRvID09PSBhY3Rpb24ubmV4dFN0YXR1cylcbiAgICAgICAgYnV0dG9uLmFkZENsYXNzKCdpcy1hY3RpdmUnKVxuXG4gICAgICBidXR0b24ub25jbGljayA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgIGlmICh0YXNrLmVzdGFkbyA9PT0gYWN0aW9uLm5leHRTdGF0dXMpXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgYXdhaXQgdGhpcy5hcHBseVN0YXR1c0FjdGlvbih0YXNrLCBhY3Rpb24uaWQsIGFjdGlvbi5uZXh0U3RhdHVzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHVyZ2VudEJ1dHRvbiA9IGFjdGlvbnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIHRleHQ6ICdVcmdlbnRlJyxcbiAgICAgIGNsczogJ3RhcmVhcy1zdGF0dXMtYWN0aW9uLWJ0bicsXG4gICAgfSlcbiAgICB1cmdlbnRCdXR0b24uYWRkQ2xhc3MoJ2lzLXVyZ2VudCcpXG5cbiAgICBpZiAodGFzay5wcmlvcmlkYWQgPT09ICdVcmdlbnRlJylcbiAgICAgIHVyZ2VudEJ1dHRvbi5hZGRDbGFzcygnaXMtYWN0aXZlJylcblxuICAgIHVyZ2VudEJ1dHRvbi5vbmNsaWNrID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaWYgKHRhc2sucHJpb3JpZGFkID09PSAnVXJnZW50ZScpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBwcmlvcmlkYWQ6ICdVcmdlbnRlJyB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQXJjaGl2ZWRBY3Rpb25zKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtc3RhdHVzLWFjdGlvbnMnIH0pXG5cbiAgICBjb25zdCByZWNvdmVyQnV0dG9uID0gYWN0aW9ucy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgdGV4dDogJ1JlY3VwZXJhcicsXG4gICAgICBjbHM6ICd0YXJlYXMtc3RhdHVzLWFjdGlvbi1idG4nLFxuICAgIH0pXG4gICAgcmVjb3ZlckJ1dHRvbi5vbmNsaWNrID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgYXdhaXQgdGhpcy5yZWNvdmVyQXJjaGl2ZWRUYXNrKHRhc2spXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gYWN0aW9ucy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgdGV4dDogJ0VsaW1pbmFyJyxcbiAgICAgIGNsczogJ3RhcmVhcy1zdGF0dXMtYWN0aW9uLWJ0biBpcy1kaXNtaXNzJyxcbiAgICB9KVxuICAgIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgdGhpcy5vcGVuRGVsZXRlVGFza0NvbmZpcm0odGFzaylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlY292ZXJBcmNoaXZlZFRhc2sodGFzazogVGFza0l0ZW0pIHtcbiAgICBhd2FpdCB0aGlzLmFwcGx5U3RhdGVUcmFuc2l0aW9uKHRhc2ssICdQZW5kaWVudGUnKVxuICAgIGF3YWl0IHRoaXMucmVuZGVyKClcbiAgfVxuXG4gIHByaXZhdGUgb3BlbkRlbGV0ZVRhc2tDb25maXJtKHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgZmFtaWx5ID0gdGhpcy5nZXRUYXNrRmFtaWx5UG9zdE9yZGVyKHRhc2spXG4gICAgY29uc3QgZmlsZUNvdW50ID0gZmFtaWx5Lmxlbmd0aFxuICAgIGNvbnN0IHRhc2tMYWJlbCA9IGZpbGVDb3VudCA+IDFcbiAgICAgID8gYFwiJHt0YXNrLnRhcmVhfVwiIHkgJHtmaWxlQ291bnQgLSAxfSBzdWJ0YXJlYShzKWBcbiAgICAgIDogYFwiJHt0YXNrLnRhcmVhfVwiYFxuXG4gICAgbmV3IENvbmZpcm1EZWxldGVUYXNrTW9kYWwodGhpcy5hcHAsIHtcbiAgICAgIHRpdGxlOiAnRWxpbWluYXIgdGFyZWEgZGVmaW5pdGl2YW1lbnRlJyxcbiAgICAgIG1lc3NhZ2U6IGDCv1NlZ3VybyBxdWUgcXVlcsOpcyBlbGltaW5hciAke3Rhc2tMYWJlbH0/IEVzdGEgYWNjacOzbiBib3JyYSBsb3MgYXJjaGl2b3MgLm1kIHkgbm8gc2UgcHVlZGUgZGVzaGFjZXIuYCxcbiAgICAgIGNvbmZpcm1UZXh0OiAnQWNlcHRhcicsXG4gICAgICBvbkNvbmZpcm06IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5kZWxldGVUYXNrRmFtaWx5KHRhc2ssIGZhbWlseSlcbiAgICAgIH0sXG4gICAgfSkub3BlbigpXG4gIH1cblxuICBwcml2YXRlIGdldFRhc2tGYW1pbHlQb3N0T3JkZXIodGFzazogVGFza0l0ZW0pOiBUYXNrSXRlbVtdIHtcbiAgICBjb25zdCBhbGxUYXNrcyA9IGdldFRhc2tzKHRoaXMuYXBwKVxuICAgIGNvbnN0IGJ5UGFyZW50ID0gbmV3IE1hcDxzdHJpbmcsIFRhc2tJdGVtW10+KClcbiAgICBmb3IgKGNvbnN0IGN1cnJlbnQgb2YgYWxsVGFza3MpIHtcbiAgICAgIGlmICghY3VycmVudC5wYXJlbnQpXG4gICAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGNvbnN0IHNpYmxpbmdzID0gYnlQYXJlbnQuZ2V0KGN1cnJlbnQucGFyZW50KSA/PyBbXVxuICAgICAgc2libGluZ3MucHVzaChjdXJyZW50KVxuICAgICAgYnlQYXJlbnQuc2V0KGN1cnJlbnQucGFyZW50LCBzaWJsaW5ncylcbiAgICB9XG5cbiAgICBjb25zdCB2aXNpdGVkUGF0aHMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICAgIGNvbnN0IG9yZGVyZWQ6IFRhc2tJdGVtW10gPSBbXVxuXG4gICAgY29uc3QgdmlzaXQgPSAoY3VycmVudFRhc2s6IFRhc2tJdGVtKSA9PiB7XG4gICAgICBpZiAodmlzaXRlZFBhdGhzLmhhcyhjdXJyZW50VGFzay5maWxlLnBhdGgpKVxuICAgICAgICByZXR1cm5cblxuICAgICAgdmlzaXRlZFBhdGhzLmFkZChjdXJyZW50VGFzay5maWxlLnBhdGgpXG4gICAgICBjb25zdCBjaGlsZHJlbiA9IGJ5UGFyZW50LmdldChjdXJyZW50VGFzay5maWxlLmJhc2VuYW1lKSA/PyBbXVxuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbilcbiAgICAgICAgdmlzaXQoY2hpbGQpXG5cbiAgICAgIG9yZGVyZWQucHVzaChjdXJyZW50VGFzaylcbiAgICB9XG5cbiAgICB2aXNpdCh0YXNrKVxuICAgIHJldHVybiBvcmRlcmVkXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGRlbGV0ZVRhc2tGYW1pbHkodGFzazogVGFza0l0ZW0sIGZhbWlseTogVGFza0l0ZW1bXSkge1xuICAgIGNvbnN0IHNlbGVjdGVkVGFza1BhdGggPSB0aGlzLnBsdWdpbi5wb21vZG9yby5zZWxlY3RlZFRhc2tQYXRoXG4gICAgZm9yIChjb25zdCBtZW1iZXIgb2YgZmFtaWx5KSB7XG4gICAgICBjb25zdCBhYnN0cmFjdEZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgobWVtYmVyLmZpbGUucGF0aClcbiAgICAgIGlmICghKGFic3RyYWN0RmlsZSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGaWxlKSlcbiAgICAgICAgY29udGludWVcblxuICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuZGVsZXRlKGFic3RyYWN0RmlsZSwgdHJ1ZSlcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0ZWRUYXNrUGF0aCAmJiBmYW1pbHkuc29tZShtZW1iZXIgPT4gbWVtYmVyLmZpbGUucGF0aCA9PT0gc2VsZWN0ZWRUYXNrUGF0aCkpXG4gICAgICB0aGlzLnNldFBvbW9kb3JvU2VsZWN0ZWRUYXNrUGF0aChudWxsKVxuXG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKVxuICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYFNlIGVsaW1pbsOzIFwiJHt0YXNrLnRhcmVhfVwiIGRlIGZvcm1hIGRlZmluaXRpdmEuYClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgYXBwbHlTdGF0dXNBY3Rpb24odGFzazogVGFza0l0ZW0sIGFjdGlvbklkOiBzdHJpbmcsIG5leHRTdGF0dXM6IHN0cmluZykge1xuICAgIGlmIChhY3Rpb25JZCA9PT0gJ3N0YXJ0LXN0b3AnKSB7XG4gICAgICBpZiAodGFzay5lc3RhZG8gPT09ICdFbiBwcm9ncmVzbycpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHBseVN0YXRlVHJhbnNpdGlvbih0YXNrLCBuZXh0U3RhdHVzKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5hcHBseVN0YXRlVHJhbnNpdGlvbih0YXNrLCBuZXh0U3RhdHVzLCB7XG4gICAgICAgIC4uLnRoaXMuYnVpbGRTdGF0ZUNoYW5nZVVwZGF0ZXModGFzaywgbmV4dFN0YXR1cyksXG4gICAgICAgIGZlY2hhSW5pY2lvOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbklkID09PSAnZmluaXNoJykge1xuICAgICAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHBhcnNlVGFza0RhdGUodGFzay5mZWNoYUluaWNpbylcbiAgICAgIGNvbnN0IGRlZGljYXRlZEhvdXJzID0gc3RhcnREYXRlXG4gICAgICAgID8gdGhpcy5yb3VuZFRvVHdvKChlbmREYXRlLmdldFRpbWUoKSAtIHN0YXJ0RGF0ZS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwKSlcbiAgICAgICAgOiAwXG5cbiAgICAgIGNvbnN0IHVwZGF0ZXM6IFBhcnRpYWw8VGFza0Zyb250bWF0dGVyPiA9IHtcbiAgICAgICAgZXN0YWRvOiBuZXh0U3RhdHVzLFxuICAgICAgICBmZWNoYUZpbjogZW5kRGF0ZS50b0lTT1N0cmluZygpLFxuICAgICAgICBkZWRpY2FkbzogZGVkaWNhdGVkSG91cnMsXG4gICAgICB9XG5cbiAgICAgIGlmICghc3RhcnREYXRlKVxuICAgICAgICB1cGRhdGVzLmZlY2hhSW5pY2lvID0gZW5kRGF0ZS50b0lTT1N0cmluZygpXG5cbiAgICAgIGlmICh0YXNrLmVzdGltYWNpb24gPT09IDApXG4gICAgICAgIHVwZGF0ZXMuZXN0aW1hY2lvbiA9IGRlZGljYXRlZEhvdXJzXG5cbiAgICAgIGF3YWl0IHRoaXMuYXBwbHlTdGF0ZVRyYW5zaXRpb24odGFzaywgbmV4dFN0YXR1cywgdXBkYXRlcylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuYXBwbHlTdGF0ZVRyYW5zaXRpb24odGFzaywgbmV4dFN0YXR1cylcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRTdGF0ZUNoYW5nZVVwZGF0ZXModGFzazogVGFza0l0ZW0sIG5leHRTdGF0dXM6IHN0cmluZyk6IFBhcnRpYWw8VGFza0Zyb250bWF0dGVyPiB7XG4gICAgY29uc3QgdXBkYXRlczogUGFydGlhbDxUYXNrRnJvbnRtYXR0ZXI+ID0geyBlc3RhZG86IG5leHRTdGF0dXMgfVxuXG4gICAgaWYgKHRhc2suZXN0YWRvICE9PSAnRmluYWxpemFkYScgfHwgbmV4dFN0YXR1cyA9PT0gJ0ZpbmFsaXphZGEnKVxuICAgICAgcmV0dXJuIHVwZGF0ZXNcblxuICAgIGNvbnN0IHJlbWFpbmluZ0hvdXJzID0gdGhpcy5yb3VuZFRvVHdvKHRhc2suZXN0aW1hY2lvbiAtIHRhc2suZGVkaWNhZG8pXG4gICAgaWYgKHJlbWFpbmluZ0hvdXJzIDw9IDApXG4gICAgICByZXR1cm4gdXBkYXRlc1xuXG4gICAgdXBkYXRlcy5mZWNoYUZpbiA9IG5ldyBEYXRlKERhdGUubm93KCkgKyByZW1haW5pbmdIb3VycyAqIDYwICogNjAgKiAxMDAwKS50b0lTT1N0cmluZygpXG4gICAgcmV0dXJuIHVwZGF0ZXNcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyVGVhbUNlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0sIGRlcHRoOiBudW1iZXIpIHtcbiAgICBjb25zdCBjZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcpXG4gICAgaWYgKGRlcHRoID4gMClcbiAgICAgIHJldHVyblxuXG4gICAgdGhpcy5yZW5kZXJUZWFtQmFkZ2UoY2VsbCwgdGFzaylcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyVGVhbUJhZGdlKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgYm9hcmRHcm91cHMgPSB0aGlzLnBsdWdpbi5nZXRFcXVpcG9zRm9yVGFibGVybyh0YXNrLnRhYmxlcm8pXG4gICAgY29uc3QgdGVhbUNvbmZpZyA9IGJvYXJkR3JvdXBzLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IHRhc2suZXF1aXBvKVxuICAgIGNvbnN0IGJhZGdlID0gY29udGFpbmVyLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgdGV4dDogdGFzay5lcXVpcG8gfHwgJ1NpbiBncnVwbycsXG4gICAgICBjbHM6ICd0YXJlYXMtZXF1aXBvLWJhZGdlJyxcbiAgICB9KVxuXG4gICAgaWYgKHRlYW1Db25maWcpXG4gICAgICBiYWRnZS5zdHlsZS5iYWNrZ3JvdW5kID0gdGVhbUNvbmZpZy5jb2xvclxuXG4gICAgYmFkZ2Uub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgY29uc3Qgb3B0aW9ucyA9IGJvYXJkR3JvdXBzLm1hcChlcXVpcG8gPT4gZXF1aXBvLm5hbWUpXG4gICAgICBzaG93RHJvcGRvd24oYmFkZ2UsIG9wdGlvbnMsIHRhc2suZXF1aXBvLCBhc3luYyAobmV4dFRlYW0pID0+IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNUZWFtID0gdGFzay5lcXVpcG9cbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgZXF1aXBvOiBuZXh0VGVhbSB9KVxuXG4gICAgICAgIGNvbnN0IHN1YnRhc2tzID0gZ2V0VGFza3ModGhpcy5hcHApLmZpbHRlcihpdGVtID0+IGl0ZW0ucGFyZW50ID09PSB0YXNrLmZpbGUuYmFzZW5hbWUpXG4gICAgICAgIGZvciAoY29uc3Qgc3VidGFzayBvZiBzdWJ0YXNrcylcbiAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2soc3VidGFzaywgeyBlcXVpcG86IG5leHRUZWFtIH0pXG5cbiAgICAgICAgYXdhaXQgdGhpcy5yZWJhbGFuY2VCb2FyZFNjaGVkdWxlKHRhc2sudGFibGVybywgcHJldmlvdXNUZWFtKVxuICAgICAgICBhd2FpdCB0aGlzLnJlYmFsYW5jZUJvYXJkU2NoZWR1bGUodGFzay50YWJsZXJvLCBuZXh0VGVhbSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJQcmlvcml0eUNlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBjZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtcHJpb3JpZGFkJyB9KVxuICAgIHRoaXMucmVuZGVyUHJpb3JpdHlCYWRnZShjZWxsLCB0YXNrKVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJQcmlvcml0eUJhZGdlKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgcHJpb3JpdHlDbGFzcyA9IHRhc2sucHJpb3JpZGFkLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCB1cmdlbnRBY3RpdmUgPSB0YXNrLnByaW9yaWRhZCA9PT0gJ1VyZ2VudGUnICYmIHRhc2suZXN0YWRvICE9PSAnRmluYWxpemFkYSdcblxuICAgIGNvbnN0IGJhZGdlID0gY29udGFpbmVyLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgdGV4dDogdGFzay5wcmlvcmlkYWQsXG4gICAgICBjbHM6IGB0YXJlYXMtcHJpb3JpZGFkIHRhcmVhcy1wcmlvcmlkYWQtJHtwcmlvcml0eUNsYXNzfSR7dXJnZW50QWN0aXZlID8gJyB0YXJlYXMtdXJnZW50ZS1hY3RpdmEnIDogJyd9YCxcbiAgICB9KVxuXG4gICAgYmFkZ2Uub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHNob3dEcm9wZG93bihiYWRnZSwgUFJJT1JJREFERVMsIHRhc2sucHJpb3JpZGFkLCBhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgcHJpb3JpZGFkOiB2YWx1ZSB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckRlZGljYXRlZENlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBjZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtbnVtJyB9KVxuICAgIGNvbnN0IGVkaXRhYmxlID0gY2VsbC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogdGhpcy5mb3JtYXREZWNpbWFsKHRhc2suZGVkaWNhZG8pLCBjbHM6ICd0YXJlYXMtZWRpdGFibGUnIH0pXG5cbiAgICBlZGl0YWJsZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5lZGl0TnVtYmVyQ2VsbChlZGl0YWJsZSwgdGFzay5kZWRpY2FkbywgYXN5bmMgdmFsdWUgPT4gdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgZGVkaWNhZG86IHZhbHVlIH0pKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyRXN0aW1hdGVkQ2VsbChyb3c6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnN0IGNlbGwgPSByb3cuY3JlYXRlRWwoJ3RkJywgeyBjbHM6ICd0YXJlYXMtY2VsbC1udW0nIH0pXG4gICAgY29uc3QgZWRpdGFibGUgPSBjZWxsLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiB0aGlzLmZvcm1hdERlY2ltYWwodGFzay5lc3RpbWFjaW9uKSwgY2xzOiAndGFyZWFzLWVkaXRhYmxlJyB9KVxuXG4gICAgZWRpdGFibGUub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuZWRpdE51bWJlckNlbGwoZWRpdGFibGUsIHRhc2suZXN0aW1hY2lvbiwgYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IGVzdGltYWNpb246IHZhbHVlIH0pXG4gICAgICAgIGF3YWl0IHRoaXMucmViYWxhbmNlQm9hcmRTY2hlZHVsZSh0YXNrLnRhYmxlcm8sIHRhc2suZXF1aXBvKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclN0YXJ0RGF0ZUNlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICByb3cuY3JlYXRlRWwoJ3RkJywgeyBjbHM6ICd0YXJlYXMtY2VsbC1kYXRlJywgdGV4dDogdGhpcy5mb3JtYXRUYXNrRGF0ZSh0YXNrLmZlY2hhSW5pY2lvKSB9KVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJFbmREYXRlQ2VsbChyb3c6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIHJvdy5jcmVhdGVFbCgndGQnLCB7IGNsczogJ3RhcmVhcy1jZWxsLWRhdGUnLCB0ZXh0OiB0aGlzLmZvcm1hdFRhc2tEYXRlKHRhc2suZmVjaGFGaW4pIH0pXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclBlcmNlbnRDZWxsKHJvdzogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgcGVyY2VudCA9IHRoaXMuY2FsY3VsYXRlUHJvZ3Jlc3NQZXJjZW50KHRhc2spXG5cbiAgICBjb25zdCBjZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtcGN0JyB9KVxuICAgIGNlbGwuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IGAke3BlcmNlbnR9ICVgLCBjbHM6ICd0YXJlYXMtcGN0LXRleHQnIH0pXG5cbiAgICBjb25zdCBkb3QgPSBjZWxsLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICd0YXJlYXMtcGN0LWRvdCcgfSlcbiAgICBpZiAocGVyY2VudCA+PSAxMDApXG4gICAgICBkb3QuYWRkQ2xhc3MoJ2Z1bGwnKVxuICAgIGVsc2UgaWYgKHBlcmNlbnQgPiAwKVxuICAgICAgZG90LmFkZENsYXNzKCdwYXJ0aWFsJylcbiAgfVxuXG4gIHByaXZhdGUgZWRpdE51bWJlckNlbGwoXG4gICAgc3BhbjogSFRNTFNwYW5FbGVtZW50LFxuICAgIGN1cnJlbnRWYWx1ZTogbnVtYmVyLFxuICAgIG9uU2F2ZTogKG5leHRWYWx1ZTogbnVtYmVyKSA9PiBQcm9taXNlPHZvaWQ+LFxuICApIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC50eXBlID0gJ251bWJlcidcbiAgICBpbnB1dC5jbGFzc05hbWUgPSAndGFyZWFzLWlubGluZS1pbnB1dCdcbiAgICBpbnB1dC52YWx1ZSA9IHRoaXMuZm9ybWF0RGVjaW1hbChjdXJyZW50VmFsdWUpXG4gICAgaW5wdXQubWluID0gJzAnXG4gICAgaW5wdXQuc3RlcCA9ICcwLjAxJ1xuXG4gICAgc3Bhbi5yZXBsYWNlV2l0aChpbnB1dClcbiAgICBpbnB1dC5mb2N1cygpXG4gICAgaW5wdXQuc2VsZWN0KClcblxuICAgIGNvbnN0IGZpbmlzaCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wYXJzZURlY2ltYWwoaW5wdXQudmFsdWUpXG4gICAgICB2b2lkIG9uU2F2ZSh2YWx1ZSlcbiAgICB9XG5cbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZmluaXNoKVxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpXG4gICAgICAgIGlucHV0LmJsdXIoKVxuXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHRoaXMuZm9ybWF0RGVjaW1hbChjdXJyZW50VmFsdWUpXG4gICAgICAgIGlucHV0LmJsdXIoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIHBhcnNlRGVjaW1hbCh2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBwYXJzZWQgPSBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSlcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHBhcnNlZCkgfHwgcGFyc2VkIDwgMClcbiAgICAgIHJldHVybiAwXG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZChwYXJzZWQgKiAxMDApIC8gMTAwXG4gIH1cblxuICBwcml2YXRlIGZvcm1hdERlY2ltYWwodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VEZWNpbWFsKFN0cmluZyh2YWx1ZSkpLnRvRml4ZWQoMilcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0VGFza0RhdGUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZGF0ZSA9IHBhcnNlVGFza0RhdGUodmFsdWUpXG4gICAgaWYgKCFkYXRlKVxuICAgICAgcmV0dXJuICfigJQnXG5cbiAgICBjb25zdCBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJylcbiAgICBjb25zdCBtb250aCA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpXG4gICAgY29uc3QgaG91ciA9IFN0cmluZyhkYXRlLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJylcbiAgICBjb25zdCBtaW51dGUgPSBTdHJpbmcoZGF0ZS5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsICcwJylcblxuICAgIHJldHVybiBgJHtkYXl9LyR7bW9udGh9ICR7aG91cn06JHttaW51dGV9YFxuICB9XG5cbiAgcHJpdmF0ZSByb3VuZFRvVHdvKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChOdW1iZXIuaXNOYU4odmFsdWUpIHx8IHZhbHVlIDw9IDApXG4gICAgICByZXR1cm4gMFxuXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwXG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZVByb2dyZXNzUGVyY2VudCh0YXNrOiBUYXNrSXRlbSk6IG51bWJlciB7XG4gICAgY29uc3QgdG90YWwgPSB0YXNrLmVzdGltYWNpb24gfHwgMFxuICAgIGlmICh0b3RhbCA8PSAwKVxuICAgICAgcmV0dXJuIDBcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKCh0YXNrLmRlZGljYWRvIC8gdG90YWwpICogMTAwKVxuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDYXJkRHJhZ0hhbmRsZXJzKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGNhcmQ6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSwgYWxsVGFza3M6IFRhc2tJdGVtW10pIHtcbiAgICBjYXJkLmRyYWdnYWJsZSA9IHRydWVcblxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBkYXRhVHJhbnNmZXIgPSBldmVudC5kYXRhVHJhbnNmZXJcbiAgICAgIGlmICghZGF0YVRyYW5zZmVyKVxuICAgICAgICByZXR1cm5cblxuICAgICAgdGhpcy5kcmFnUGF0aCA9IHRhc2suZmlsZS5wYXRoXG4gICAgICB0aGlzLmRyYWdEZXB0aCA9IDBcbiAgICAgIHRoaXMuZHJhZ1BhcmVudCA9IHRhc2sucGFyZW50XG4gICAgICB0aGlzLmRyYWdJbnNlcnRQb3NpdGlvbiA9IG51bGxcbiAgICAgIGNhcmQuYWRkQ2xhc3MoJ3RhcmVhcy10YXNrLWNhcmQtZHJhZ2dpbmcnKVxuICAgICAgY2FyZC5hZGRDbGFzcygndGFyZWFzLXRhc2stY2FyZC1kcmFnLXByZXZpZXcnKVxuICAgICAgZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfSlcblxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHtcbiAgICAgIHRoaXMucmVzZXRDYXJkRHJhZ1N0YXRlKGNvbnRhaW5lciwgY2FyZClcbiAgICB9KVxuXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNhbkRyb3BPblJvdyh0YXNrLCAwKSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyKVxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJ1xuXG4gICAgICBjb25zdCBpbnNlcnRQb3NpdGlvbiA9IHRoaXMucmVzb2x2ZUNhcmRJbnNlcnRQb3NpdGlvbihldmVudCwgY2FyZClcbiAgICAgIHRoaXMuZHJhZ0luc2VydFBvc2l0aW9uID0gaW5zZXJ0UG9zaXRpb25cbiAgICAgIHRoaXMuY2xlYXJDYXJkRHJvcE1hcmtlcnMoKVxuICAgICAgY2FyZC5hZGRDbGFzcyhpbnNlcnRQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyAndGFyZWFzLXRhc2stY2FyZC1kcmFnLW92ZXItdG9wJyA6ICd0YXJlYXMtdGFzay1jYXJkLWRyYWctb3Zlci1ib3R0b20nKVxuICAgIH0pXG5cbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghdGhpcy5jYW5Ecm9wT25Sb3codGFzaywgMCkpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgY29uc3QgaW5zZXJ0UG9zaXRpb24gPSB0aGlzLmRyYWdJbnNlcnRQb3NpdGlvbiA/PyB0aGlzLnJlc29sdmVDYXJkSW5zZXJ0UG9zaXRpb24oZXZlbnQsIGNhcmQpXG4gICAgICBjYXJkLnJlbW92ZUNsYXNzKCd0YXJlYXMtdGFzay1jYXJkLWRyYWctb3Zlci10b3AnKVxuICAgICAgY2FyZC5yZW1vdmVDbGFzcygndGFyZWFzLXRhc2stY2FyZC1kcmFnLW92ZXItYm90dG9tJylcblxuICAgICAgaWYgKCF0aGlzLmRyYWdQYXRoKVxuICAgICAgICByZXR1cm5cblxuICAgICAgY29uc3QgZHJhZ2dlZCA9IGFsbFRhc2tzLmZpbmQoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gdGhpcy5kcmFnUGF0aClcbiAgICAgIGlmICghZHJhZ2dlZClcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHRoaXMuZHJvcHBlZFRhc2tBbmltYXRpb25QYXRoID0gdGhpcy5kcmFnUGF0aFxuICAgICAgaWYgKCFkcmFnZ2VkLnBhcmVudCAmJiBkcmFnZ2VkLnRhYmxlcm8gPT09IHRhc2sudGFibGVybyAmJiBkcmFnZ2VkLmVxdWlwbyAhPT0gdGFzay5lcXVpcG8pXG4gICAgICAgIGF3YWl0IHRoaXMubW92ZVRhc2tUb0dyb3VwKHRoaXMuZHJhZ1BhdGgsIHRhc2suZXF1aXBvLCBhbGxUYXNrcywgdGFzay5maWxlLnBhdGgsIGluc2VydFBvc2l0aW9uKVxuICAgICAgZWxzZVxuICAgICAgICBhd2FpdCB0aGlzLnJlb3JkZXJUYXNrKHRoaXMuZHJhZ1BhdGgsIHRhc2suZmlsZS5wYXRoLCBhbGxUYXNrcywgaW5zZXJ0UG9zaXRpb24pXG5cbiAgICAgIHRoaXMucmVzZXRDYXJkRHJhZ1N0YXRlKGNvbnRhaW5lciwgY2FyZClcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hHcm91cENhcmRMaXN0RHJvcEhhbmRsZXJzKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGdyb3VwTmFtZTogc3RyaW5nLCBhbGxUYXNrczogVGFza0l0ZW1bXSkge1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZHJhZ1BhdGggPSB0aGlzLmRyYWdQYXRoXG4gICAgICBpZiAoIWRyYWdQYXRoKVxuICAgICAgICByZXR1cm5cblxuICAgICAgY29uc3QgZHJhZ2dlZCA9IGFsbFRhc2tzLmZpbmQoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gZHJhZ1BhdGgpXG4gICAgICBpZiAoIWRyYWdnZWQgfHwgZHJhZ2dlZC5wYXJlbnQpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBpZiAoZHJhZ2dlZC50YWJsZXJvICE9PSB0aGlzLmFjdGl2ZVRhYiB8fCBkcmFnZ2VkLmVxdWlwbyA9PT0gZ3JvdXBOYW1lKVxuICAgICAgICByZXR1cm5cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIpXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG5cbiAgICAgIGNvbnRhaW5lci5hZGRDbGFzcygndGFyZWFzLWNhcmQtbGlzdC1kcm9wLXRhcmdldCcpXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5yZWxhdGVkVGFyZ2V0IGluc3RhbmNlb2YgTm9kZSAmJiBjb250YWluZXIuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3RhcmVhcy1jYXJkLWxpc3QtZHJvcC10YXJnZXQnKVxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZHJhZ1BhdGggPSB0aGlzLmRyYWdQYXRoXG4gICAgICBpZiAoIWRyYWdQYXRoKVxuICAgICAgICByZXR1cm5cblxuICAgICAgY29uc3QgbWFya2VyQ2FyZCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGFyZWFzLXRhc2stY2FyZC1kcmFnLW92ZXItdG9wLCAudGFyZWFzLXRhc2stY2FyZC1kcmFnLW92ZXItYm90dG9tJylcbiAgICAgIGNvbnN0IG1hcmtlclRhcmdldFBhdGggPSBtYXJrZXJDYXJkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBtYXJrZXJDYXJkLmRhdGFzZXQucGF0aCA/PyBudWxsIDogbnVsbFxuICAgICAgY29uc3QgbWFya2VySW5zZXJ0UG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJyB8IG51bGwgPSBtYXJrZXJDYXJkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICAgICAgPyAobWFya2VyQ2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhcmVhcy10YXNrLWNhcmQtZHJhZy1vdmVyLXRvcCcpID8gJ2JlZm9yZScgOiAnYWZ0ZXInKVxuICAgICAgICA6IG51bGxcblxuICAgICAgY29uc3QgdGFyZ2V0Q2FyZCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQgfCBudWxsKT8uY2xvc2VzdCgnLnRhcmVhcy10YXNrLWNhcmQnKVxuICAgICAgaWYgKHRhcmdldENhcmQgJiYgIXRhcmdldENhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXJlYXMtdGFzay1jYXJkLWFkZCcpKVxuICAgICAgICByZXR1cm5cblxuICAgICAgY29uc3QgZHJhZ2dlZCA9IGFsbFRhc2tzLmZpbmQoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gZHJhZ1BhdGgpXG4gICAgICBpZiAoIWRyYWdnZWQgfHwgZHJhZ2dlZC5wYXJlbnQpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBpZiAoZHJhZ2dlZC50YWJsZXJvICE9PSB0aGlzLmFjdGl2ZVRhYilcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3RhcmVhcy1jYXJkLWxpc3QtZHJvcC10YXJnZXQnKVxuICAgICAgdGhpcy5kcm9wcGVkVGFza0FuaW1hdGlvblBhdGggPSBkcmFnUGF0aFxuXG4gICAgICBpZiAobWFya2VyVGFyZ2V0UGF0aCAmJiBtYXJrZXJJbnNlcnRQb3NpdGlvbikge1xuICAgICAgICBpZiAoZHJhZ2dlZC5lcXVpcG8gPT09IGdyb3VwTmFtZSlcbiAgICAgICAgICBhd2FpdCB0aGlzLnJlb3JkZXJUYXNrKGRyYWdQYXRoLCBtYXJrZXJUYXJnZXRQYXRoLCBhbGxUYXNrcywgbWFya2VySW5zZXJ0UG9zaXRpb24pXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBhd2FpdCB0aGlzLm1vdmVUYXNrVG9Hcm91cChkcmFnUGF0aCwgZ3JvdXBOYW1lLCBhbGxUYXNrcywgbWFya2VyVGFyZ2V0UGF0aCwgbWFya2VySW5zZXJ0UG9zaXRpb24pXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkcmFnZ2VkLmVxdWlwbyAhPT0gZ3JvdXBOYW1lKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubW92ZVRhc2tUb0dyb3VwKGRyYWdQYXRoLCBncm91cE5hbWUsIGFsbFRhc2tzKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmRyYWdQYXRoID0gbnVsbFxuICAgICAgdGhpcy5kcmFnRGVwdGggPSBudWxsXG4gICAgICB0aGlzLmRyYWdQYXJlbnQgPSBudWxsXG4gICAgICB0aGlzLmRyYWdJbnNlcnRQb3NpdGlvbiA9IG51bGxcbiAgICAgIHRoaXMuY2xlYXJDYXJkRHJvcE1hcmtlcnMoKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGF0dGFjaEdyb3VwRHJhZ0hhbmRsZXJzKFxuICAgIGJvYXJkOiBIVE1MRWxlbWVudCxcbiAgICBjb2x1bW46IEhUTUxFbGVtZW50LFxuICAgIGhhbmRsZTogSFRNTEVsZW1lbnQgfCBudWxsLFxuICAgIGdyb3VwTmFtZTogc3RyaW5nLFxuICAgIGlzTWFuYWdlZDogYm9vbGVhbixcbiAgKSB7XG4gICAgaWYgKCFpc01hbmFnZWQgfHwgIWhhbmRsZSlcbiAgICAgIHJldHVyblxuXG4gICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpKVxuICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpKVxuXG4gICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZGF0YVRyYW5zZmVyID0gZXZlbnQuZGF0YVRyYW5zZmVyXG4gICAgICBpZiAoIWRhdGFUcmFuc2ZlcilcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHRoaXMuZHJhZ0dyb3VwTmFtZSA9IGdyb3VwTmFtZVxuICAgICAgdGhpcy5kcmFnR3JvdXBDb2x1bW4gPSBjb2x1bW5cbiAgICAgIGNvbHVtbi5hZGRDbGFzcygndGFyZWFzLWdyb3VwLWRyYWdnaW5nJylcbiAgICAgIGRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnXG4gICAgICBkYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGdyb3VwTmFtZSlcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfSlcblxuICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldEdyb3VwRHJhZ1N0YXRlKGJvYXJkKVxuICAgIH0pXG5cbiAgICBjb2x1bW4uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGRyYWdnZWRHcm91cENvbHVtbiA9IHRoaXMuZHJhZ0dyb3VwQ29sdW1uXG4gICAgICBpZiAoIXRoaXMuZHJhZ0dyb3VwTmFtZSB8fCAhZHJhZ2dlZEdyb3VwQ29sdW1uIHx8IHRoaXMuZHJhZ0dyb3VwTmFtZSA9PT0gZ3JvdXBOYW1lIHx8IGRyYWdnZWRHcm91cENvbHVtbiA9PT0gY29sdW1uKVxuICAgICAgICByZXR1cm5cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIpXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG5cbiAgICAgIGNvbnN0IGluc2VydFBvc2l0aW9uID0gdGhpcy5yZXNvbHZlR3JvdXBJbnNlcnRQb3NpdGlvbihldmVudCwgY29sdW1uKVxuICAgICAgdGhpcy5jbGVhckdyb3VwRHJvcE1hcmtlcnMoYm9hcmQpXG4gICAgICBjb2x1bW4uYWRkQ2xhc3MoaW5zZXJ0UG9zaXRpb24gPT09ICdiZWZvcmUnID8gJ3RhcmVhcy1ncm91cC1kcmFnLW92ZXItYmVmb3JlJyA6ICd0YXJlYXMtZ3JvdXAtZHJhZy1vdmVyLWFmdGVyJylcblxuICAgICAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IGluc2VydFBvc2l0aW9uID09PSAnYmVmb3JlJyA/IGNvbHVtbiA6IGNvbHVtbi5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgIGlmIChyZWZlcmVuY2VOb2RlID09PSBkcmFnZ2VkR3JvdXBDb2x1bW4pXG4gICAgICAgIHJldHVyblxuXG4gICAgICBpZiAoaW5zZXJ0UG9zaXRpb24gPT09ICdhZnRlcicgJiYgY29sdW1uLm5leHRFbGVtZW50U2libGluZyA9PT0gZHJhZ2dlZEdyb3VwQ29sdW1uKVxuICAgICAgICByZXR1cm5cblxuICAgICAgdGhpcy5hbmltYXRlR3JvdXBSZWZsb3coYm9hcmQsICgpID0+IHtcbiAgICAgICAgYm9hcmQuaW5zZXJ0QmVmb3JlKGRyYWdnZWRHcm91cENvbHVtbiwgcmVmZXJlbmNlTm9kZSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbHVtbi5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5yZWxhdGVkVGFyZ2V0IGluc3RhbmNlb2YgTm9kZSAmJiBjb2x1bW4uY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBjb2x1bW4ucmVtb3ZlQ2xhc3MoJ3RhcmVhcy1ncm91cC1kcmFnLW92ZXItYmVmb3JlJylcbiAgICAgIGNvbHVtbi5yZW1vdmVDbGFzcygndGFyZWFzLWdyb3VwLWRyYWctb3Zlci1hZnRlcicpXG4gICAgfSlcblxuICAgIGNvbHVtbi5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBkcmFnZ2VkR3JvdXBOYW1lID0gdGhpcy5kcmFnR3JvdXBOYW1lXG4gICAgICBpZiAoIWRyYWdnZWRHcm91cE5hbWUgfHwgZHJhZ2dlZEdyb3VwTmFtZSA9PT0gZ3JvdXBOYW1lKVxuICAgICAgICByZXR1cm5cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgY29uc3QgbWFuYWdlZEdyb3VwTmFtZXMgPSBuZXcgU2V0KHRoaXMucGx1Z2luLmdldEVxdWlwb3NGb3JUYWJsZXJvKHRoaXMuYWN0aXZlVGFiKS5tYXAoaXRlbSA9PiBpdGVtLm5hbWUpKVxuICAgICAgY29uc3Qgb3JkZXJlZEdyb3VwTmFtZXMgPSBBcnJheS5mcm9tKGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCc6c2NvcGUgPiAudGFyZWFzLWdyb3VwJykpXG4gICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLmRhdGFzZXQuZ3JvdXAgPz8gJycpXG4gICAgICAgIC5maWx0ZXIobmFtZSA9PiBtYW5hZ2VkR3JvdXBOYW1lcy5oYXMobmFtZSkpXG5cbiAgICAgIGNvbnN0IHJlb3JkZXJlZCA9IGF3YWl0IHRoaXMucGx1Z2luLnNldEVxdWlwb3NPcmRlckZvclRhYmxlcm8odGhpcy5hY3RpdmVUYWIsIG9yZGVyZWRHcm91cE5hbWVzKVxuICAgICAgdGhpcy5yZXNldEdyb3VwRHJhZ1N0YXRlKGJvYXJkKVxuICAgICAgaWYgKHJlb3JkZXJlZClcbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXIoKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlb3JkZXJUYXNrKGRyYWdnZWRQYXRoOiBzdHJpbmcsIHRhcmdldFBhdGg6IHN0cmluZywgYWxsVGFza3M6IFRhc2tJdGVtW10sIGluc2VydFBvc2l0aW9uOiAnYmVmb3JlJyB8ICdhZnRlcicgfCBudWxsID0gbnVsbCkge1xuICAgIGNvbnN0IGRyYWdnZWQgPSBhbGxUYXNrcy5maW5kKHRhc2sgPT4gdGFzay5maWxlLnBhdGggPT09IGRyYWdnZWRQYXRoKVxuICAgIGNvbnN0IHRhcmdldCA9IGFsbFRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmZpbGUucGF0aCA9PT0gdGFyZ2V0UGF0aClcbiAgICBpZiAoIWRyYWdnZWQgfHwgIXRhcmdldClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3Qgc2libGluZ3MgPSBhbGxUYXNrc1xuICAgICAgLmZpbHRlcih0YXNrID0+ICF0YXNrLnBhcmVudCAmJiB0YXNrLnRhYmxlcm8gPT09IGRyYWdnZWQudGFibGVybyAmJiB0YXNrLmVxdWlwbyA9PT0gZHJhZ2dlZC5lcXVpcG8pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpXG5cbiAgICBjb25zdCBmcm9tSW5kZXggPSBzaWJsaW5ncy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gZHJhZ2dlZFBhdGgpXG4gICAgY29uc3QgdG9JbmRleCA9IHNpYmxpbmdzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSB0YXJnZXRQYXRoKVxuXG4gICAgbGV0IG5leHRJbmRleCA9IHRvSW5kZXhcbiAgICBpZiAoaW5zZXJ0UG9zaXRpb24pIHtcbiAgICAgIG5leHRJbmRleCA9IHRvSW5kZXggKyAoaW5zZXJ0UG9zaXRpb24gPT09ICdhZnRlcicgPyAxIDogMClcbiAgICAgIGlmIChmcm9tSW5kZXggPCBuZXh0SW5kZXgpXG4gICAgICAgIG5leHRJbmRleCAtPSAxXG4gICAgfVxuXG4gICAgY29uc3QgbmV4dE9yZGVyID0gcmVvcmRlckxpc3Qoc2libGluZ3MsIGZyb21JbmRleCwgbmV4dEluZGV4KVxuICAgIGF3YWl0IHBlcnNpc3RUYXNrT3JkZXIobmV4dE9yZGVyLCBhc3luYyAodGFzaywgb3JkZXIpID0+IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IG9yZGVyIH0pKVxuICAgIGF3YWl0IHRoaXMucmViYWxhbmNlQm9hcmRTY2hlZHVsZShkcmFnZ2VkLnRhYmxlcm8sIGRyYWdnZWQuZXF1aXBvKVxuICAgIGF3YWl0IHRoaXMucmVuZGVyKClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVvcmRlclN1YnRhc2soZHJhZ2dlZFBhdGg6IHN0cmluZywgdGFyZ2V0UGF0aDogc3RyaW5nLCBhbGxUYXNrczogVGFza0l0ZW1bXSkge1xuICAgIGNvbnN0IGRyYWdnZWQgPSBhbGxUYXNrcy5maW5kKHRhc2sgPT4gdGFzay5maWxlLnBhdGggPT09IGRyYWdnZWRQYXRoKVxuICAgIGNvbnN0IHRhcmdldCA9IGFsbFRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmZpbGUucGF0aCA9PT0gdGFyZ2V0UGF0aClcbiAgICBpZiAoIWRyYWdnZWQgfHwgIXRhcmdldClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3Qgc2libGluZ3MgPSBhbGxUYXNrc1xuICAgICAgLmZpbHRlcih0YXNrID0+IHRhc2sucGFyZW50ID09PSBkcmFnZ2VkLnBhcmVudClcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcilcblxuICAgIGNvbnN0IGZyb21JbmRleCA9IHNpYmxpbmdzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSBkcmFnZ2VkUGF0aClcbiAgICBjb25zdCB0b0luZGV4ID0gc2libGluZ3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5maWxlLnBhdGggPT09IHRhcmdldFBhdGgpXG5cbiAgICBjb25zdCBuZXh0T3JkZXIgPSByZW9yZGVyTGlzdChzaWJsaW5ncywgZnJvbUluZGV4LCB0b0luZGV4KVxuICAgIGF3YWl0IHBlcnNpc3RUYXNrT3JkZXIobmV4dE9yZGVyLCBhc3luYyAodGFzaywgb3JkZXIpID0+IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IG9yZGVyIH0pKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBtb3ZlVGFza1RvR3JvdXAoXG4gICAgZHJhZ2dlZFBhdGg6IHN0cmluZyxcbiAgICB0YXJnZXRHcm91cDogc3RyaW5nLFxuICAgIGFsbFRhc2tzOiBUYXNrSXRlbVtdLFxuICAgIHRhcmdldFBhdGg6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIGluc2VydFBvc2l0aW9uOiAnYmVmb3JlJyB8ICdhZnRlcicgPSAnYWZ0ZXInLFxuICApIHtcbiAgICBjb25zdCBkcmFnZ2VkID0gYWxsVGFza3MuZmluZCh0YXNrID0+IHRhc2suZmlsZS5wYXRoID09PSBkcmFnZ2VkUGF0aClcbiAgICBpZiAoIWRyYWdnZWQgfHwgZHJhZ2dlZC5wYXJlbnQpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHByZXZpb3VzR3JvdXAgPSBkcmFnZ2VkLmVxdWlwb1xuICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayhkcmFnZ2VkLCB7IGVxdWlwbzogdGFyZ2V0R3JvdXAgfSlcblxuICAgIGNvbnN0IHN1YnRhc2tzID0gYWxsVGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5wYXJlbnQgPT09IGRyYWdnZWQuZmlsZS5iYXNlbmFtZSlcbiAgICBmb3IgKGNvbnN0IHN1YnRhc2sgb2Ygc3VidGFza3MpXG4gICAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2soc3VidGFzaywgeyBlcXVpcG86IHRhcmdldEdyb3VwIH0pXG5cbiAgICBpZiAoIXRhcmdldFBhdGgpIHtcbiAgICAgIGNvbnN0IG5leHRPcmRlciA9IHRoaXMucmVzb2x2ZU5leHRPcmRlckZvckdyb3VwKGFsbFRhc2tzLCBkcmFnZ2VkLnRhYmxlcm8sIHRhcmdldEdyb3VwLCBkcmFnZ2VkUGF0aClcbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayhkcmFnZ2VkLCB7IG9yZGVyOiBuZXh0T3JkZXIgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBzaWJsaW5ncyA9IGFsbFRhc2tzXG4gICAgICAgIC5maWx0ZXIodGFzayA9PiAhdGFzay5wYXJlbnQgJiYgdGFzay50YWJsZXJvID09PSBkcmFnZ2VkLnRhYmxlcm8gJiYgdGFzay5lcXVpcG8gPT09IHRhcmdldEdyb3VwICYmIHRhc2suZmlsZS5wYXRoICE9PSBkcmFnZ2VkUGF0aClcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKVxuXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IHNpYmxpbmdzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSB0YXJnZXRQYXRoKVxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkge1xuICAgICAgICBjb25zdCBuZXh0T3JkZXIgPSB0aGlzLnJlc29sdmVOZXh0T3JkZXJGb3JHcm91cChhbGxUYXNrcywgZHJhZ2dlZC50YWJsZXJvLCB0YXJnZXRHcm91cCwgZHJhZ2dlZFBhdGgpXG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayhkcmFnZ2VkLCB7IG9yZGVyOiBuZXh0T3JkZXIgfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBpbnNlcnRJbmRleCA9IHRhcmdldEluZGV4ICsgKGluc2VydFBvc2l0aW9uID09PSAnYWZ0ZXInID8gMSA6IDApXG4gICAgICAgIGNvbnN0IG5leHRPcmRlciA9IFsuLi5zaWJsaW5nc11cbiAgICAgICAgbmV4dE9yZGVyLnNwbGljZShpbnNlcnRJbmRleCwgMCwgZHJhZ2dlZClcbiAgICAgICAgYXdhaXQgcGVyc2lzdFRhc2tPcmRlcihuZXh0T3JkZXIsIGFzeW5jICh0YXNrLCBvcmRlcikgPT4gdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgb3JkZXIgfSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXdhaXQgdGhpcy5yZWJhbGFuY2VCb2FyZFNjaGVkdWxlKGRyYWdnZWQudGFibGVybywgcHJldmlvdXNHcm91cClcbiAgICBhd2FpdCB0aGlzLnJlYmFsYW5jZUJvYXJkU2NoZWR1bGUoZHJhZ2dlZC50YWJsZXJvLCB0YXJnZXRHcm91cClcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpXG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVDYXJkSW5zZXJ0UG9zaXRpb24oZXZlbnQ6IERyYWdFdmVudCwgY2FyZDogSFRNTEVsZW1lbnQpOiAnYmVmb3JlJyB8ICdhZnRlcicge1xuICAgIGNvbnN0IGJvdW5kcyA9IGNhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBtaWRwb2ludCA9IGJvdW5kcy50b3AgKyAoYm91bmRzLmhlaWdodCAvIDIpXG4gICAgcmV0dXJuIGV2ZW50LmNsaWVudFkgPCBtaWRwb2ludCA/ICdiZWZvcmUnIDogJ2FmdGVyJ1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckNhcmREcm9wTWFya2VycygpIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5nZXRSb290RWwoKVxuICAgIHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy10YXNrLWNhcmQtZHJhZy1vdmVyJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgndGFyZWFzLXRhc2stY2FyZC1kcmFnLW92ZXInKSlcbiAgICByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJlYXMtdGFzay1jYXJkLWRyYWctb3Zlci10b3AnKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd0YXJlYXMtdGFzay1jYXJkLWRyYWctb3Zlci10b3AnKSlcbiAgICByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJlYXMtdGFzay1jYXJkLWRyYWctb3Zlci1ib3R0b20nKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd0YXJlYXMtdGFzay1jYXJkLWRyYWctb3Zlci1ib3R0b20nKSlcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUdyb3VwSW5zZXJ0UG9zaXRpb24oZXZlbnQ6IERyYWdFdmVudCwgY29sdW1uOiBIVE1MRWxlbWVudCk6ICdiZWZvcmUnIHwgJ2FmdGVyJyB7XG4gICAgY29uc3QgYm91bmRzID0gY29sdW1uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgbWlkcG9pbnQgPSBib3VuZHMubGVmdCArIChib3VuZHMud2lkdGggLyAyKVxuICAgIHJldHVybiBldmVudC5jbGllbnRYIDwgbWlkcG9pbnQgPyAnYmVmb3JlJyA6ICdhZnRlcidcbiAgfVxuXG4gIHByaXZhdGUgYW5pbWF0ZUdyb3VwUmVmbG93KGJvYXJkOiBIVE1MRWxlbWVudCwgbXV0YXRlRG9tOiAoKSA9PiB2b2lkKSB7XG4gICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCc6c2NvcGUgPiAudGFyZWFzLWdyb3VwJykpXG4gICAgY29uc3QgcHJldmlvdXNCb3hlcyA9IG5ldyBNYXAoaXRlbXMubWFwKGl0ZW0gPT4gW2l0ZW0sIGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCldKSlcbiAgICBtdXRhdGVEb20oKVxuXG4gICAgY29uc3QgbmV4dEl0ZW1zID0gQXJyYXkuZnJvbShib2FyZC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignOnNjb3BlID4gLnRhcmVhcy1ncm91cCcpKVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBuZXh0SXRlbXMpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzQm94ID0gcHJldmlvdXNCb3hlcy5nZXQoaXRlbSlcbiAgICAgIGlmICghcHJldmlvdXNCb3gpXG4gICAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGNvbnN0IG5leHRCb3ggPSBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBjb25zdCBvZmZzZXRYID0gcHJldmlvdXNCb3gubGVmdCAtIG5leHRCb3gubGVmdFxuICAgICAgY29uc3Qgb2Zmc2V0WSA9IHByZXZpb3VzQm94LnRvcCAtIG5leHRCb3gudG9wXG4gICAgICBpZiAoTWF0aC5hYnMob2Zmc2V0WCkgPCAxICYmIE1hdGguYWJzKG9mZnNldFkpIDwgMSlcbiAgICAgICAgY29udGludWVcblxuICAgICAgaXRlbS5hbmltYXRlKFxuICAgICAgICBbXG4gICAgICAgICAgeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHtvZmZzZXRYfXB4LCAke29mZnNldFl9cHgpYCB9LFxuICAgICAgICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsIDApJyB9LFxuICAgICAgICBdLFxuICAgICAgICB7IGR1cmF0aW9uOiAyNDAsIGVhc2luZzogJ2N1YmljLWJlemllcigwLjIsIDAuODIsIDAuMiwgMSknLCBmaWxsOiAnYm90aCcgfSxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyR3JvdXBEcm9wTWFya2Vycyhib2FyZDogSFRNTEVsZW1lbnQpIHtcbiAgICBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZWFzLWdyb3VwLWRyYWctb3Zlci1iZWZvcmUnKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd0YXJlYXMtZ3JvdXAtZHJhZy1vdmVyLWJlZm9yZScpKVxuICAgIGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJlYXMtZ3JvdXAtZHJhZy1vdmVyLWFmdGVyJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgndGFyZWFzLWdyb3VwLWRyYWctb3Zlci1hZnRlcicpKVxuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlTmV4dE9yZGVyRm9yR3JvdXAoYWxsVGFza3M6IFRhc2tJdGVtW10sIGJvYXJkTmFtZTogc3RyaW5nLCBncm91cE5hbWU6IHN0cmluZywgZXhjbHVkZVBhdGg6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3Qgc2libGluZ09yZGVycyA9IGFsbFRhc2tzXG4gICAgICAuZmlsdGVyKHRhc2sgPT4gIXRhc2sucGFyZW50ICYmIHRhc2sudGFibGVybyA9PT0gYm9hcmROYW1lICYmIHRhc2suZXF1aXBvID09PSBncm91cE5hbWUgJiYgdGFzay5maWxlLnBhdGggIT09IGV4Y2x1ZGVQYXRoKVxuICAgICAgLm1hcCh0YXNrID0+IE51bWJlci5pc0Zpbml0ZSh0YXNrLm9yZGVyKSA/IHRhc2sub3JkZXIgOiAwKVxuXG4gICAgaWYgKHNpYmxpbmdPcmRlcnMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIE9SREVSX1NURVBcblxuICAgIHJldHVybiBNYXRoLm1heCguLi5zaWJsaW5nT3JkZXJzKSArIE9SREVSX1NURVBcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgdXBkYXRlVGFzayh0YXNrOiBUYXNrSXRlbSwgdXBkYXRlczogUGFydGlhbDxUYXNrRnJvbnRtYXR0ZXI+KSB7XG4gICAgYXdhaXQgdXBkYXRlRnJvbnRtYXR0ZXIodGhpcy5hcHAsIHRhc2suZmlsZSwgdXBkYXRlcylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgYXBwbHlTdGF0ZVRyYW5zaXRpb24oXG4gICAgdGFzazogVGFza0l0ZW0sXG4gICAgbmV4dFN0YXR1czogc3RyaW5nLFxuICAgIGV4cGxpY2l0VXBkYXRlcz86IFBhcnRpYWw8VGFza0Zyb250bWF0dGVyPixcbiAgICBvcHRpb25zPzogeyBtb3ZlRmlsZT86IGJvb2xlYW4sIHN5bmNTdWJ0YXNrc1dpdGhQYXJlbnQ/OiBib29sZWFuIH0sXG4gICkge1xuICAgIGNvbnN0IHVwZGF0ZXMgPSBleHBsaWNpdFVwZGF0ZXMgPz8gdGhpcy5idWlsZFN0YXRlQ2hhbmdlVXBkYXRlcyh0YXNrLCBuZXh0U3RhdHVzKVxuICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayh0YXNrLCB1cGRhdGVzKVxuXG4gICAgY29uc3Qgc2hvdWxkTW92ZUZpbGUgPSBvcHRpb25zPy5tb3ZlRmlsZSA/PyB0cnVlXG4gICAgY29uc3Qgc2hvdWxkU3luY1N1YnRhc2tzID0gb3B0aW9ucz8uc3luY1N1YnRhc2tzV2l0aFBhcmVudCA/PyB0cnVlXG4gICAgY29uc3QgaXNJbkFyY2hpdmVkRm9sZGVyID0gaXNUYXNrSW5Db21wbGV0ZWRGb2xkZXIodGFzay5maWxlLnBhdGgpXG4gICAgaWYgKHNob3VsZE1vdmVGaWxlICYmIG5leHRTdGF0dXMgPT09ICdGaW5hbGl6YWRhJylcbiAgICAgIGF3YWl0IG1vdmVUYXNrVG9Db21wbGV0ZWRGb2xkZXIodGhpcy5hcHAsIHRhc2suZmlsZSwgQm9vbGVhbih0YXNrLnBhcmVudCkpXG5cbiAgICBpZiAoc2hvdWxkTW92ZUZpbGUgJiYgbmV4dFN0YXR1cyA9PT0gJ0NhbmNlbGFkYScpXG4gICAgICBhd2FpdCBtb3ZlVGFza1RvQ2FuY2VsbGVkRm9sZGVyKHRoaXMuYXBwLCB0YXNrLmZpbGUsIEJvb2xlYW4odGFzay5wYXJlbnQpKVxuXG4gICAgaWYgKHNob3VsZE1vdmVGaWxlICYmIG5leHRTdGF0dXMgIT09ICdGaW5hbGl6YWRhJyAmJiBuZXh0U3RhdHVzICE9PSAnQ2FuY2VsYWRhJyAmJiBpc0luQXJjaGl2ZWRGb2xkZXIpXG4gICAgICBhd2FpdCBtb3ZlVGFza1RvQWN0aXZlRm9sZGVyKHRoaXMuYXBwLCB0YXNrLmZpbGUsIEJvb2xlYW4odGFzay5wYXJlbnQpKVxuXG4gICAgaWYgKHNob3VsZE1vdmVGaWxlICYmIHNob3VsZFN5bmNTdWJ0YXNrcyAmJiAhdGFzay5wYXJlbnQpIHtcbiAgICAgIGlmIChuZXh0U3RhdHVzID09PSAnRW4gcHJvZ3Jlc28nKVxuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVN1YnRhc2tzU3RhdHVzRm9yUGFyZW50KHRhc2suZmlsZS5iYXNlbmFtZSwgJ0VuIHByb2dyZXNvJylcblxuICAgICAgaWYgKG5leHRTdGF0dXMgPT09ICdGaW5hbGl6YWRhJylcbiAgICAgICAgYXdhaXQgdGhpcy5tb3ZlU3VidGFza3NGb3JQYXJlbnQodGFzay5maWxlLmJhc2VuYW1lLCAnRmluYWxpemFkYScpXG5cbiAgICAgIGlmIChuZXh0U3RhdHVzID09PSAnQ2FuY2VsYWRhJylcbiAgICAgICAgYXdhaXQgdGhpcy5tb3ZlU3VidGFza3NGb3JQYXJlbnQodGFzay5maWxlLmJhc2VuYW1lLCAnQ2FuY2VsYWRhJylcblxuICAgICAgaWYgKG5leHRTdGF0dXMgIT09ICdGaW5hbGl6YWRhJyAmJiBuZXh0U3RhdHVzICE9PSAnQ2FuY2VsYWRhJyAmJiBpc0luQXJjaGl2ZWRGb2xkZXIpXG4gICAgICAgIGF3YWl0IHRoaXMubW92ZVN1YnRhc2tzRm9yUGFyZW50KHRhc2suZmlsZS5iYXNlbmFtZSwgbnVsbClcbiAgICB9XG5cbiAgICBpZiAobmV4dFN0YXR1cyA9PT0gJ0ZpbmFsaXphZGEnIHx8IG5leHRTdGF0dXMgPT09ICdDYW5jZWxhZGEnIHx8IGlzSW5BcmNoaXZlZEZvbGRlcilcbiAgICAgIGF3YWl0IHRoaXMucmViYWxhbmNlQm9hcmRTY2hlZHVsZSh0YXNrLnRhYmxlcm8sIHRhc2suZXF1aXBvKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBtb3ZlU3VidGFza3NGb3JQYXJlbnQocGFyZW50VGFza05hbWU6IHN0cmluZywgbmV4dFRlcm1pbmFsU3RhdHVzOiAnRmluYWxpemFkYScgfCAnQ2FuY2VsYWRhJyB8IG51bGwpIHtcbiAgICBjb25zdCBzdWJ0YXNrcyA9IGdldFRhc2tzKHRoaXMuYXBwKS5maWx0ZXIoaXRlbSA9PiBpdGVtLnBhcmVudCA9PT0gcGFyZW50VGFza05hbWUpXG5cbiAgICBmb3IgKGNvbnN0IHN1YnRhc2sgb2Ygc3VidGFza3MpIHtcbiAgICAgIGlmIChuZXh0VGVybWluYWxTdGF0dXMpIHtcbiAgICAgICAgaWYgKHN1YnRhc2suZXN0YWRvICE9PSBuZXh0VGVybWluYWxTdGF0dXMpXG4gICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKHN1YnRhc2ssIHsgZXN0YWRvOiBuZXh0VGVybWluYWxTdGF0dXMgfSlcblxuICAgICAgICBpZiAobmV4dFRlcm1pbmFsU3RhdHVzID09PSAnRmluYWxpemFkYScpXG4gICAgICAgICAgYXdhaXQgbW92ZVRhc2tUb0NvbXBsZXRlZEZvbGRlcih0aGlzLmFwcCwgc3VidGFzay5maWxlLCB0cnVlKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgYXdhaXQgbW92ZVRhc2tUb0NhbmNlbGxlZEZvbGRlcih0aGlzLmFwcCwgc3VidGFzay5maWxlLCB0cnVlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGF3YWl0IG1vdmVUYXNrVG9BY3RpdmVGb2xkZXIodGhpcy5hcHAsIHN1YnRhc2suZmlsZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHVwZGF0ZVN1YnRhc2tzU3RhdHVzRm9yUGFyZW50KHBhcmVudFRhc2tOYW1lOiBzdHJpbmcsIG5leHRTdGF0dXM6IHN0cmluZykge1xuICAgIGNvbnN0IHN1YnRhc2tzID0gZ2V0VGFza3ModGhpcy5hcHApLmZpbHRlcihpdGVtID0+IGl0ZW0ucGFyZW50ID09PSBwYXJlbnRUYXNrTmFtZSlcblxuICAgIGZvciAoY29uc3Qgc3VidGFzayBvZiBzdWJ0YXNrcykge1xuICAgICAgaWYgKHN1YnRhc2suZXN0YWRvID09PSBuZXh0U3RhdHVzKVxuICAgICAgICBjb250aW51ZVxuXG4gICAgICBhd2FpdCB0aGlzLmFwcGx5U3RhdGVUcmFuc2l0aW9uKHN1YnRhc2ssIG5leHRTdGF0dXMsIHVuZGVmaW5lZCwgeyBzeW5jU3VidGFza3NXaXRoUGFyZW50OiBmYWxzZSB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmViYWxhbmNlQm9hcmRTY2hlZHVsZShib2FyZE5hbWU6IHN0cmluZywgZ3JvdXBOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIWJvYXJkTmFtZSB8fCAhZ3JvdXBOYW1lKVxuICAgICAgcmV0dXJuXG5cbiAgICBhd2FpdCByZWJhbGFuY2VHcm91cEVuZERhdGVzKHRoaXMuYXBwLCBib2FyZE5hbWUsIGdyb3VwTmFtZSlcbiAgfVxuXG4gIHByaXZhdGUgY2FuRHJvcE9uUm93KHRhcmdldDogVGFza0l0ZW0sIGRlcHRoOiBudW1iZXIpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLmRyYWdQYXRoXG4gICAgICAmJiB0aGlzLmRyYWdQYXRoICE9PSB0YXJnZXQuZmlsZS5wYXRoXG4gICAgICAmJiB0aGlzLmRyYWdEZXB0aCA9PT0gZGVwdGhcbiAgICAgICYmIHRoaXMuZHJhZ1BhcmVudCA9PT0gdGFyZ2V0LnBhcmVudFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRSb3dEcmFnU3RhdGUodGJvZHk6IEhUTUxFbGVtZW50LCByb3c6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5kcmFnUGF0aCA9IG51bGxcbiAgICB0aGlzLmRyYWdEZXB0aCA9IG51bGxcbiAgICB0aGlzLmRyYWdQYXJlbnQgPSBudWxsXG4gICAgcm93LnJlbW92ZUNsYXNzKCd0YXJlYXMtcm93LWRyYWdnaW5nJylcbiAgICB0Ym9keS5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZWFzLXJvdy1kcmFnLW92ZXInKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd0YXJlYXMtcm93LWRyYWctb3ZlcicpKVxuICB9XG5cbiAgcHJpdmF0ZSByZXNldENhcmREcmFnU3RhdGUoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgY2FyZDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLmRyYWdQYXRoID0gbnVsbFxuICAgIHRoaXMuZHJhZ0RlcHRoID0gbnVsbFxuICAgIHRoaXMuZHJhZ1BhcmVudCA9IG51bGxcbiAgICB0aGlzLmRyYWdJbnNlcnRQb3NpdGlvbiA9IG51bGxcbiAgICBjYXJkLnJlbW92ZUNsYXNzKCd0YXJlYXMtdGFzay1jYXJkLWRyYWdnaW5nJylcbiAgICBjYXJkLnJlbW92ZUNsYXNzKCd0YXJlYXMtdGFzay1jYXJkLWRyYWctcHJldmlldycpXG4gICAgdGhpcy5jbGVhckNhcmREcm9wTWFya2VycygpXG4gICAgdGhpcy5nZXRSb290RWwoKS5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZWFzLWNhcmQtbGlzdC1kcm9wLXRhcmdldCcpLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmVhcy1jYXJkLWxpc3QtZHJvcC10YXJnZXQnKSlcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRHcm91cERyYWdTdGF0ZShib2FyZDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLmRyYWdHcm91cE5hbWUgPSBudWxsXG4gICAgdGhpcy5kcmFnR3JvdXBDb2x1bW4gPSBudWxsXG4gICAgYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy1ncm91cC1kcmFnZ2luZycpLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmVhcy1ncm91cC1kcmFnZ2luZycpKVxuICAgIHRoaXMuY2xlYXJHcm91cERyb3BNYXJrZXJzKGJvYXJkKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb290RWwoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmNvbnRhaW5lckVsLmNoaWxkcmVuWzFdXG4gICAgaWYgKCEocm9vdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGFyZWFzVmlldyByb290IGVsZW1lbnQgaXMgbm90IGF2YWlsYWJsZScpXG5cbiAgICByZXR1cm4gcm9vdFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBvYnNpZGlhbiBmcm9tICdvYnNpZGlhbidcblxuaW1wb3J0IHtcbiAgQ0FOQ0VMTEVEX1NVQlRBU0tTX0ZPTERFUixcbiAgQ0FOQ0VMTEVEX1RBU0tTX0ZPTERFUixcbiAgQ09NUExFVEVEX1NVQlRBU0tTX0ZPTERFUixcbiAgQ09NUExFVEVEX1RBU0tTX0ZPTERFUixcbiAgREVGQVVMVF9CT0FSRF9OQU1FLFxuICBERUZBVUxUX0VRVUlQT1MsXG4gIERFRkFVTFRfVEFCTEVST1MsXG4gIElOREVYX1RBRyxcbiAgTEVHQUNZX0NPTVBMRVRFRF9UQVNLU19GT0xERVIsXG4gIExPQ0tFRF9FUVVJUE9fTkFNRVMsXG4gIFNVQlRBU0tfVEFHLFxuICBUQVJFQVNfRk9MREVSLFxuICBUQVNLX1RBRyxcbiAgVklFV19UWVBFLFxufSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBjcmVhdGVEZWZhdWx0UG9tb2Rvcm9TdGF0ZSB9IGZyb20gJy4uL2VuZ2luZXMvcG9tb2Rvcm9FbmdpbmUnXG5pbXBvcnQgeyByZWJ1aWxkVGFza0NoaWxkTGlua3MsIHN5bmNUYXNrVHlwZVRhZ3MgfSBmcm9tICcuLi9lbmdpbmVzL2Zyb250bWF0dGVyRW5naW5lJ1xuaW1wb3J0IHsgZ2V0VGFza3MgfSBmcm9tICcuLi9lbmdpbmVzL3Rhc2tFbmdpbmUnXG5pbXBvcnQge1xuICBlbnN1cmVCb2FyZFRhc2tJbmRleEZpbGUsXG4gIGdldEJvYXJkVGFza0luZGV4QmFzZW5hbWUsXG4gIHJlbW92ZVRhc2tMaW5rRnJvbUNhbmNlbGxlZEluZGV4LFxuICByZW1vdmVUYXNrTGlua0Zyb21GaW5pc2hlZEluZGV4LFxuICByZW1vdmVUYXNrTGlua0Zyb21JbmRleCxcbiAgc3luY0FsbFRhc2tJbmRleGVzLFxuICBzeW5jUm9vdFRhc2tJbmRleExpbmtzLFxufSBmcm9tICcuLi9lbmdpbmVzL3Rhc2tJbmRleEVuZ2luZSdcbmltcG9ydCB7IE5ld1Rhc2tNb2RhbCB9IGZyb20gJy4uL21vZGFscy9OZXdUYXNrTW9kYWwnXG5pbXBvcnQgdHlwZSB7IEVxdWlwbywgUG9tb2Rvcm9TdGF0ZSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgbm9ybWFsaXplRXF1aXBvc0Zyb21TZXR0aW5ncywgbm9ybWFsaXplUG9tb2Rvcm9Gcm9tU2V0dGluZ3MsIG5vcm1hbGl6ZVRhYmxlcm9zRnJvbVNldHRpbmdzIH0gZnJvbSAnLi4vdXRpbHMvc2V0dGluZ3MnXG5pbXBvcnQgeyBUYXJlYXNWaWV3IH0gZnJvbSAnLi4vdmlldy9UYXJlYXNWaWV3J1xuXG5pbnRlcmZhY2UgR3JhcGhHcm91cERlZmluaXRpb24ge1xuICBxdWVyeTogc3RyaW5nXG4gIGNvbG9yOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNsYXNzIFRhcmVhc1BsdWdpbiBleHRlbmRzIG9ic2lkaWFuLlBsdWdpbiB7XG4gIHRhYmxlcm9zOiBFcXVpcG9bXSA9IFsuLi5ERUZBVUxUX1RBQkxFUk9TXVxuICBlcXVpcG9zOiBFcXVpcG9bXSA9IFsuLi5ERUZBVUxUX0VRVUlQT1NdXG4gIHBvbW9kb3JvOiBQb21vZG9yb1N0YXRlID0gY3JlYXRlRGVmYXVsdFBvbW9kb3JvU3RhdGUoKVxuXG4gIGFzeW5jIG9ubG9hZCgpIHtcbiAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpXG4gICAgYXdhaXQgdGhpcy5lbnN1cmVEZWZhdWx0Qm9hcmRJblNldHRpbmdzKClcblxuICAgIHRoaXMucmVnaXN0ZXJWaWV3KFZJRVdfVFlQRSwgbGVhZiA9PiBuZXcgVGFyZWFzVmlldyhsZWFmLCB0aGlzKSlcblxuICAgIHRoaXMuYWRkUmliYm9uSWNvbignbGlzdC1jaGVja3MnLCAnQWJyaXIgVGFyZWFzJywgKCkgPT4gdGhpcy5hY3RpdmF0ZVZpZXcoKSlcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ29wZW4tdGFyZWFzLXZpZXcnLFxuICAgICAgbmFtZTogJ0FicmlyIHZpc3RhIGRlIFRhcmVhcycsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5hY3RpdmF0ZVZpZXcoKSxcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnbmV3LXRhcmVhJyxcbiAgICAgIG5hbWU6ICdOdWV2YSB0YXJlYScsXG4gICAgICBjYWxsYmFjazogKCkgPT4gbmV3IE5ld1Rhc2tNb2RhbCh0aGlzLmFwcCwgdGhpcykub3BlbigpLFxuICAgIH0pXG5cbiAgICBhd2FpdCB0aGlzLmVuc3VyZVRhc2tzRm9sZGVyKClcbiAgICBhd2FpdCBzeW5jQWxsVGFza0luZGV4ZXModGhpcy5hcHApXG4gICAgYXdhaXQgcmVidWlsZFRhc2tDaGlsZExpbmtzKHRoaXMuYXBwKVxuICAgIGF3YWl0IHN5bmNUYXNrVHlwZVRhZ3ModGhpcy5hcHApXG4gICAgYXdhaXQgdGhpcy5lbnN1cmVPYnNpZGlhbkdyYXBoR3JvdXBzKClcblxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC52YXVsdC5vbignZGVsZXRlJywgKGZpbGUpID0+IHtcbiAgICAgIHZvaWQgdGhpcy5oYW5kbGVGaWxlRGVsZXRlKGZpbGUpXG4gICAgfSkpXG4gIH1cblxuICBhc3luYyBhY3RpdmF0ZVZpZXcoKSB7XG4gICAgY29uc3QgeyB3b3Jrc3BhY2UgfSA9IHRoaXMuYXBwXG4gICAgbGV0IGxlYWYgPSB3b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRSlbMF1cblxuICAgIGlmICghbGVhZikge1xuICAgICAgbGVhZiA9IHdvcmtzcGFjZS5nZXRMZWFmKCd0YWInKVxuICAgICAgYXdhaXQgbGVhZi5zZXRWaWV3U3RhdGUoeyB0eXBlOiBWSUVXX1RZUEUsIGFjdGl2ZTogdHJ1ZSB9KVxuICAgIH1cblxuICAgIHdvcmtzcGFjZS5yZXZlYWxMZWFmKGxlYWYpXG4gIH1cblxuICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IHRoaXMubG9hZERhdGEoKVxuICAgIHRoaXMudGFibGVyb3MgPSBub3JtYWxpemVUYWJsZXJvc0Zyb21TZXR0aW5ncyhyYXdEYXRhKVxuICAgIHRoaXMuZXF1aXBvcyA9IG5vcm1hbGl6ZUVxdWlwb3NGcm9tU2V0dGluZ3MocmF3RGF0YSlcbiAgICB0aGlzLnBvbW9kb3JvID0gbm9ybWFsaXplUG9tb2Rvcm9Gcm9tU2V0dGluZ3MocmF3RGF0YSlcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZW5zdXJlRGVmYXVsdEJvYXJkSW5TZXR0aW5ncygpIHtcbiAgICBjb25zdCBoYXNEZWZhdWx0Qm9hcmQgPSB0aGlzLnRhYmxlcm9zLnNvbWUoYm9hcmQgPT4gYm9hcmQubmFtZSA9PT0gREVGQVVMVF9CT0FSRF9OQU1FKVxuICAgIGlmIChoYXNEZWZhdWx0Qm9hcmQpXG4gICAgICByZXR1cm5cblxuICAgIHRoaXMudGFibGVyb3MudW5zaGlmdCh7IG5hbWU6IERFRkFVTFRfQk9BUkRfTkFNRSwgY29sb3I6ICcjMmU2ZGIwJyB9KVxuICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKClcbiAgfVxuXG4gIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcbiAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHtcbiAgICAgIHRhYmxlcm9zOiB0aGlzLnRhYmxlcm9zLFxuICAgICAgZXF1aXBvczogdGhpcy5lcXVpcG9zLFxuICAgICAgcG9tb2Rvcm86IHRoaXMucG9tb2Rvcm8sXG4gICAgfSlcbiAgfVxuXG4gIHNldFBvbW9kb3JvU3RhdGUobmV4dFN0YXRlOiBQb21vZG9yb1N0YXRlKSB7XG4gICAgdGhpcy5wb21vZG9ybyA9IHtcbiAgICAgIC4uLm5leHRTdGF0ZSxcbiAgICAgIGR1cmF0aW9uczogeyAuLi5uZXh0U3RhdGUuZHVyYXRpb25zIH0sXG4gICAgfVxuICAgIHZvaWQgdGhpcy5zYXZlU2V0dGluZ3MoKVxuICB9XG5cbiAgYWRkVGFibGVybyhuYW1lOiBzdHJpbmcsIGNvbG9yID0gJyM2YjVjZTcnKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKCFub3JtYWxpemVkTmFtZSlcbiAgICAgIHJldHVyblxuXG4gICAgaWYgKHRoaXMudGFibGVyb3Muc29tZSh0YWJsZXJvID0+IHRhYmxlcm8ubmFtZS50b0xvd2VyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZSkpXG4gICAgICByZXR1cm5cblxuICAgIHRoaXMudGFibGVyb3MucHVzaCh7IG5hbWU6IG5vcm1hbGl6ZWROYW1lLCBjb2xvciB9KVxuICAgIHZvaWQgdGhpcy5lbnN1cmVCb2FyZFdvcmtzcGFjZShub3JtYWxpemVkTmFtZSlcbiAgICB2b2lkIHRoaXMuc2F2ZVNldHRpbmdzKClcbiAgfVxuXG4gIGFzeW5jIGVkaXRUYWJsZXJvKFxuICAgIGN1cnJlbnRCb2FyZE5hbWU6IHN0cmluZyxcbiAgICB1cGRhdGVzOiB7IG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyB9LFxuICApOiBQcm9taXNlPHsgb2s6IGJvb2xlYW4sIGJvYXJkTmFtZTogc3RyaW5nLCBlcnJvcj86IHN0cmluZyB9PiB7XG4gICAgY29uc3QgY3VycmVudE5hbWUgPSBjdXJyZW50Qm9hcmROYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbmV4dE5hbWUgPSB1cGRhdGVzLm5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoIWN1cnJlbnROYW1lIHx8ICFuZXh0TmFtZSlcbiAgICAgIHJldHVybiB7IG9rOiBmYWxzZSwgYm9hcmROYW1lOiBjdXJyZW50TmFtZSB8fCBuZXh0TmFtZSwgZXJyb3I6ICdpbnZhbGlkLW5hbWUnIH1cblxuICAgIGNvbnN0IGJvYXJkSW5kZXggPSB0aGlzLnRhYmxlcm9zLmZpbmRJbmRleCh0YWJsZXJvID0+IHRhYmxlcm8ubmFtZSA9PT0gY3VycmVudE5hbWUpXG4gICAgaWYgKGJvYXJkSW5kZXggPCAwKVxuICAgICAgcmV0dXJuIHsgb2s6IGZhbHNlLCBib2FyZE5hbWU6IGN1cnJlbnROYW1lLCBlcnJvcjogJ2JvYXJkLW5vdC1mb3VuZCcgfVxuXG4gICAgaWYgKGN1cnJlbnROYW1lID09PSBERUZBVUxUX0JPQVJEX05BTUUpXG4gICAgICByZXR1cm4geyBvazogZmFsc2UsIGJvYXJkTmFtZTogY3VycmVudE5hbWUsIGVycm9yOiAnZGVmYXVsdC1ib2FyZC1sb2NrZWQnIH1cblxuICAgIGlmIChuZXh0TmFtZSAhPT0gY3VycmVudE5hbWUgJiYgdGhpcy50YWJsZXJvcy5zb21lKHRhYmxlcm8gPT4gdGFibGVyby5uYW1lID09PSBuZXh0TmFtZSkpXG4gICAgICByZXR1cm4geyBvazogZmFsc2UsIGJvYXJkTmFtZTogY3VycmVudE5hbWUsIGVycm9yOiAnYm9hcmQtYWxyZWFkeS1leGlzdHMnIH1cblxuICAgIGlmIChuZXh0TmFtZSAhPT0gY3VycmVudE5hbWUpIHtcbiAgICAgIGNvbnN0IHJlbmFtZWQgPSBhd2FpdCB0aGlzLnJlbmFtZUJvYXJkRm9sZGVyKGN1cnJlbnROYW1lLCBuZXh0TmFtZSlcbiAgICAgIGlmICghcmVuYW1lZClcbiAgICAgICAgcmV0dXJuIHsgb2s6IGZhbHNlLCBib2FyZE5hbWU6IGN1cnJlbnROYW1lLCBlcnJvcjogJ2JvYXJkLWZvbGRlci1jb25mbGljdCcgfVxuXG4gICAgICBhd2FpdCB0aGlzLnJlbmFtZUJvYXJkVGFza0luZGV4RmlsZShjdXJyZW50TmFtZSwgbmV4dE5hbWUpXG4gICAgICBhd2FpdCB0aGlzLnJlbmFtZUJvYXJkSW5UYXNrRnJvbnRtYXR0ZXIoY3VycmVudE5hbWUsIG5leHROYW1lKVxuXG4gICAgICB0aGlzLmVxdWlwb3MgPSB0aGlzLmVxdWlwb3MubWFwKChlcXVpcG8pID0+IHtcbiAgICAgICAgaWYgKChlcXVpcG8udGFibGVybyB8fCBERUZBVUxUX0JPQVJEX05BTUUpICE9PSBjdXJyZW50TmFtZSlcbiAgICAgICAgICByZXR1cm4gZXF1aXBvXG5cbiAgICAgICAgcmV0dXJuIHsgLi4uZXF1aXBvLCB0YWJsZXJvOiBuZXh0TmFtZSB9XG4gICAgICB9KVxuXG4gICAgICB0aGlzLnBvbW9kb3JvID0gdGhpcy5yZW1hcFBvbW9kb3JvVGFza1BhdGgoY3VycmVudE5hbWUsIG5leHROYW1lKVxuICAgIH1cblxuICAgIHRoaXMudGFibGVyb3NbYm9hcmRJbmRleF0gPSB7XG4gICAgICAuLi50aGlzLnRhYmxlcm9zW2JvYXJkSW5kZXhdLFxuICAgICAgbmFtZTogbmV4dE5hbWUsXG4gICAgICBjb2xvcjogdXBkYXRlcy5jb2xvcixcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLmVuc3VyZUJvYXJkV29ya3NwYWNlKG5leHROYW1lKVxuICAgIGF3YWl0IHN5bmNBbGxUYXNrSW5kZXhlcyh0aGlzLmFwcClcbiAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpXG5cbiAgICByZXR1cm4geyBvazogdHJ1ZSwgYm9hcmROYW1lOiBuZXh0TmFtZSB9XG4gIH1cblxuICBjYW5SZW1vdmVUYWJsZXJvKGJvYXJkTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgbm9ybWFsaXplZEJvYXJkTmFtZSA9IGJvYXJkTmFtZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICAgIGlmICghbm9ybWFsaXplZEJvYXJkTmFtZSB8fCBub3JtYWxpemVkQm9hcmROYW1lID09PSBERUZBVUxUX0JPQVJEX05BTUUpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIHJldHVybiB0aGlzLnRhYmxlcm9zLnNvbWUodGFibGVybyA9PiB0YWJsZXJvLm5hbWUgPT09IG5vcm1hbGl6ZWRCb2FyZE5hbWUpXG4gIH1cblxuICBhc3luYyByZW1vdmVUYWJsZXJvKGJvYXJkTmFtZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3Qgbm9ybWFsaXplZEJvYXJkTmFtZSA9IGJvYXJkTmFtZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICAgIGlmICghdGhpcy5jYW5SZW1vdmVUYWJsZXJvKG5vcm1hbGl6ZWRCb2FyZE5hbWUpKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBjb25zdCBib2FyZFRhc2tQYXRocyA9IG5ldyBTZXQoXG4gICAgICBnZXRUYXNrcyh0aGlzLmFwcClcbiAgICAgICAgLmZpbHRlcih0YXNrID0+IHRhc2sudGFibGVybyA9PT0gbm9ybWFsaXplZEJvYXJkTmFtZSlcbiAgICAgICAgLm1hcCh0YXNrID0+IHRhc2suZmlsZS5wYXRoKSxcbiAgICApXG5cbiAgICBmb3IgKGNvbnN0IHRhc2tQYXRoIG9mIGJvYXJkVGFza1BhdGhzKSB7XG4gICAgICBjb25zdCB0YXNrRmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aCh0YXNrUGF0aClcbiAgICAgIGlmICghKHRhc2tGaWxlIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZpbGUpKVxuICAgICAgICBjb250aW51ZVxuXG4gICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5kZWxldGUodGFza0ZpbGUsIHRydWUpXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrUGF0aCA9IHRoaXMucG9tb2Rvcm8uc2VsZWN0ZWRUYXNrUGF0aFxuICAgIGlmIChzZWxlY3RlZFRhc2tQYXRoICYmIGJvYXJkVGFza1BhdGhzLmhhcyhzZWxlY3RlZFRhc2tQYXRoKSkge1xuICAgICAgdGhpcy5wb21vZG9ybyA9IHtcbiAgICAgICAgLi4udGhpcy5wb21vZG9ybyxcbiAgICAgICAgZHVyYXRpb25zOiB7IC4uLnRoaXMucG9tb2Rvcm8uZHVyYXRpb25zIH0sXG4gICAgICAgIHNlbGVjdGVkVGFza1BhdGg6IG51bGwsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50YWJsZXJvcyA9IHRoaXMudGFibGVyb3MuZmlsdGVyKHRhYmxlcm8gPT4gdGFibGVyby5uYW1lICE9PSBub3JtYWxpemVkQm9hcmROYW1lKVxuICAgIHRoaXMuZXF1aXBvcyA9IHRoaXMuZXF1aXBvcy5maWx0ZXIoZXF1aXBvID0+IChlcXVpcG8udGFibGVybyB8fCBERUZBVUxUX0JPQVJEX05BTUUpICE9PSBub3JtYWxpemVkQm9hcmROYW1lKVxuXG4gICAgYXdhaXQgdGhpcy5yZW1vdmVCb2FyZEZvbGRlcnMobm9ybWFsaXplZEJvYXJkTmFtZSlcbiAgICBhd2FpdCBzeW5jUm9vdFRhc2tJbmRleExpbmtzKHRoaXMuYXBwKVxuICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgYWRkRXF1aXBvKG5hbWU6IHN0cmluZywgY29sb3IgPSAnIzZiNWNlNycpIHtcbiAgICB0aGlzLmFkZEVxdWlwb0luVGFibGVybyhuYW1lLCBjb2xvciwgdGhpcy50YWJsZXJvc1swXT8ubmFtZSB8fCAnZGVmYXVsdCcpXG4gIH1cblxuICBhZGRFcXVpcG9JblRhYmxlcm8obmFtZTogc3RyaW5nLCBjb2xvciA9ICcjNmI1Y2U3JywgYm9hcmROYW1lID0gJ2RlZmF1bHQnKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSBuYW1lLnRyaW0oKVxuICAgIGNvbnN0IG5vcm1hbGl6ZWRCb2FyZE5hbWUgPSBib2FyZE5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoIW5vcm1hbGl6ZWROYW1lKVxuICAgICAgcmV0dXJuXG5cbiAgICBpZiAodGhpcy5lcXVpcG9zLnNvbWUoZXF1aXBvID0+IGVxdWlwby5uYW1lID09PSBub3JtYWxpemVkTmFtZSAmJiAoZXF1aXBvLnRhYmxlcm8gfHwgJ2RlZmF1bHQnKSA9PT0gbm9ybWFsaXplZEJvYXJkTmFtZSkpXG4gICAgICByZXR1cm5cblxuICAgIHRoaXMuZXF1aXBvcy5wdXNoKHsgbmFtZTogbm9ybWFsaXplZE5hbWUsIGNvbG9yLCB0YWJsZXJvOiBub3JtYWxpemVkQm9hcmROYW1lIH0pXG4gICAgdm9pZCB0aGlzLnNhdmVTZXR0aW5ncygpXG4gIH1cblxuICByZW1vdmVFcXVpcG8obmFtZTogc3RyaW5nLCBib2FyZE5hbWUgPSAnZGVmYXVsdCcpOiBib29sZWFuIHtcbiAgICBpZiAoTE9DS0VEX0VRVUlQT19OQU1FUy5pbmNsdWRlcyhuYW1lKSlcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgY29uc3Qgbm9ybWFsaXplZEJvYXJkTmFtZSA9IGJvYXJkTmFtZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IG5leHRFcXVpcG9zID0gdGhpcy5lcXVpcG9zLmZpbHRlcihlcXVpcG8gPT4gIShlcXVpcG8ubmFtZSA9PT0gbmFtZSAmJiAoZXF1aXBvLnRhYmxlcm8gfHwgJ2RlZmF1bHQnKSA9PT0gbm9ybWFsaXplZEJvYXJkTmFtZSkpXG4gICAgaWYgKG5leHRFcXVpcG9zLmxlbmd0aCA9PT0gdGhpcy5lcXVpcG9zLmxlbmd0aClcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgdGhpcy5lcXVpcG9zID0gbmV4dEVxdWlwb3NcbiAgICB2b2lkIHRoaXMuc2F2ZVNldHRpbmdzKClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgdXBkYXRlRXF1aXBvKG5hbWU6IHN0cmluZywgYm9hcmROYW1lOiBzdHJpbmcsIHVwZGF0ZXM6IFBhcnRpYWw8RXF1aXBvPikge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRCb2FyZE5hbWUgPSBib2FyZE5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCB0ZWFtID0gdGhpcy5lcXVpcG9zLmZpbmQoZXF1aXBvID0+IGVxdWlwby5uYW1lID09PSBuYW1lICYmIChlcXVpcG8udGFibGVybyB8fCAnZGVmYXVsdCcpID09PSBub3JtYWxpemVkQm9hcmROYW1lKVxuICAgIGlmICghdGVhbSlcbiAgICAgIHJldHVyblxuXG4gICAgT2JqZWN0LmFzc2lnbih0ZWFtLCB1cGRhdGVzKVxuICAgIHZvaWQgdGhpcy5zYXZlU2V0dGluZ3MoKVxuICB9XG5cbiAgZ2V0RXF1aXBvc0ZvclRhYmxlcm8oYm9hcmROYW1lOiBzdHJpbmcpOiBFcXVpcG9bXSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZEJvYXJkTmFtZSA9IGJvYXJkTmFtZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICAgIHJldHVybiB0aGlzLmVxdWlwb3MuZmlsdGVyKGVxdWlwbyA9PiAoZXF1aXBvLnRhYmxlcm8gfHwgJ2RlZmF1bHQnKSA9PT0gbm9ybWFsaXplZEJvYXJkTmFtZSlcbiAgfVxuXG4gIGFzeW5jIHJlb3JkZXJFcXVpcG9JblRhYmxlcm8oXG4gICAgYm9hcmROYW1lOiBzdHJpbmcsXG4gICAgZHJhZ2dlZEdyb3VwTmFtZTogc3RyaW5nLFxuICAgIHRhcmdldEdyb3VwTmFtZTogc3RyaW5nLFxuICAgIGluc2VydFBvc2l0aW9uOiAnYmVmb3JlJyB8ICdhZnRlcicsXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRCb2FyZE5hbWUgPSBib2FyZE5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoIW5vcm1hbGl6ZWRCb2FyZE5hbWUpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIGNvbnN0IGJvYXJkR3JvdXBzID0gdGhpcy5nZXRFcXVpcG9zRm9yVGFibGVybyhub3JtYWxpemVkQm9hcmROYW1lKVxuICAgIGNvbnN0IGZyb21JbmRleCA9IGJvYXJkR3JvdXBzLmZpbmRJbmRleChncm91cCA9PiBncm91cC5uYW1lID09PSBkcmFnZ2VkR3JvdXBOYW1lKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gYm9hcmRHcm91cHMuZmluZEluZGV4KGdyb3VwID0+IGdyb3VwLm5hbWUgPT09IHRhcmdldEdyb3VwTmFtZSlcbiAgICBpZiAoZnJvbUluZGV4IDwgMCB8fCB0YXJnZXRJbmRleCA8IDAgfHwgZnJvbUluZGV4ID09PSB0YXJnZXRJbmRleClcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgY29uc3QgbmV4dEJvYXJkR3JvdXBzID0gWy4uLmJvYXJkR3JvdXBzXVxuICAgIGNvbnN0IFtkcmFnZ2VkXSA9IG5leHRCb2FyZEdyb3Vwcy5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgIGxldCBuZXh0SW5kZXggPSBuZXh0Qm9hcmRHcm91cHMuZmluZEluZGV4KGdyb3VwID0+IGdyb3VwLm5hbWUgPT09IHRhcmdldEdyb3VwTmFtZSlcbiAgICBpZiAobmV4dEluZGV4IDwgMClcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgKGluc2VydFBvc2l0aW9uID09PSAnYWZ0ZXInKVxuICAgICAgbmV4dEluZGV4ICs9IDFcblxuICAgIG5leHRCb2FyZEdyb3Vwcy5zcGxpY2UobmV4dEluZGV4LCAwLCBkcmFnZ2VkKVxuXG4gICAgY29uc3Qgb3JkZXJlZEdyb3VwTmFtZXMgPSBuZXh0Qm9hcmRHcm91cHMubWFwKGdyb3VwID0+IGdyb3VwLm5hbWUpXG4gICAgcmV0dXJuIHRoaXMuc2V0RXF1aXBvc09yZGVyRm9yVGFibGVybyhub3JtYWxpemVkQm9hcmROYW1lLCBvcmRlcmVkR3JvdXBOYW1lcylcbiAgfVxuXG4gIGFzeW5jIHNldEVxdWlwb3NPcmRlckZvclRhYmxlcm8oYm9hcmROYW1lOiBzdHJpbmcsIG9yZGVyZWRHcm91cE5hbWVzOiBzdHJpbmdbXSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRCb2FyZE5hbWUgPSBib2FyZE5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoIW5vcm1hbGl6ZWRCb2FyZE5hbWUpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIGNvbnN0IGJvYXJkR3JvdXBzID0gdGhpcy5nZXRFcXVpcG9zRm9yVGFibGVybyhub3JtYWxpemVkQm9hcmROYW1lKVxuICAgIGlmIChib2FyZEdyb3Vwcy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIGNvbnN0IHVuaXF1ZU9yZGVyZWROYW1lcyA9IEFycmF5LmZyb20obmV3IFNldChvcmRlcmVkR3JvdXBOYW1lcykpXG4gICAgaWYgKHVuaXF1ZU9yZGVyZWROYW1lcy5sZW5ndGggIT09IGJvYXJkR3JvdXBzLmxlbmd0aClcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgY29uc3Qgb3JkZXJlZEdyb3VwQnlOYW1lID0gbmV3IE1hcChib2FyZEdyb3Vwcy5tYXAoZ3JvdXAgPT4gW2dyb3VwLm5hbWUsIGdyb3VwXSkpXG4gICAgY29uc3QgbmV4dEJvYXJkR3JvdXBzOiBFcXVpcG9bXSA9IFtdXG4gICAgZm9yIChjb25zdCBncm91cE5hbWUgb2YgdW5pcXVlT3JkZXJlZE5hbWVzKSB7XG4gICAgICBjb25zdCBncm91cCA9IG9yZGVyZWRHcm91cEJ5TmFtZS5nZXQoZ3JvdXBOYW1lKVxuICAgICAgaWYgKCFncm91cClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgIG5leHRCb2FyZEdyb3Vwcy5wdXNoKGdyb3VwKVxuICAgIH1cblxuICAgIGxldCBib2FyZFBvaW50ZXIgPSAwXG4gICAgdGhpcy5lcXVpcG9zID0gdGhpcy5lcXVpcG9zLm1hcCgoZXF1aXBvKSA9PiB7XG4gICAgICBpZiAoKGVxdWlwby50YWJsZXJvIHx8ICdkZWZhdWx0JykgIT09IG5vcm1hbGl6ZWRCb2FyZE5hbWUpXG4gICAgICAgIHJldHVybiBlcXVpcG9cblxuICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBuZXh0Qm9hcmRHcm91cHNbYm9hcmRQb2ludGVyXVxuICAgICAgYm9hcmRQb2ludGVyICs9IDFcbiAgICAgIHJldHVybiByZXBsYWNlbWVudCB8fCBlcXVpcG9cbiAgICB9KVxuXG4gICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGVuc3VyZVRhc2tzRm9sZGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmVuc3VyZUZvbGRlclBhdGgoVEFSRUFTX0ZPTERFUilcbiAgICAgIGF3YWl0IHRoaXMuZW5zdXJlRm9sZGVyUGF0aChDT01QTEVURURfVEFTS1NfRk9MREVSKVxuICAgICAgYXdhaXQgdGhpcy5lbnN1cmVGb2xkZXJQYXRoKENPTVBMRVRFRF9TVUJUQVNLU19GT0xERVIpXG4gICAgICBhd2FpdCB0aGlzLmVuc3VyZUZvbGRlclBhdGgoQ0FOQ0VMTEVEX1RBU0tTX0ZPTERFUilcbiAgICAgIGF3YWl0IHRoaXMuZW5zdXJlRm9sZGVyUGF0aChDQU5DRUxMRURfU1VCVEFTS1NfRk9MREVSKVxuICAgICAgY29uc3QgYm9hcmROYW1lcyA9IG5ldyBTZXQ8c3RyaW5nPihbXG4gICAgICAgIC4uLnRoaXMudGFibGVyb3MubWFwKGJvYXJkID0+IGJvYXJkLm5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCkpLmZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgLi4udGhpcy5nZXRFeGlzdGluZ0JvYXJkRm9sZGVyTmFtZXMoKSxcbiAgICAgIF0pXG4gICAgICBib2FyZE5hbWVzLmFkZChERUZBVUxUX0JPQVJEX05BTUUpXG5cbiAgICAgIGZvciAoY29uc3QgYm9hcmROYW1lIG9mIGJvYXJkTmFtZXMpXG4gICAgICAgIGF3YWl0IHRoaXMuZW5zdXJlQm9hcmRXb3Jrc3BhY2UoYm9hcmROYW1lKVxuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBObyBzZSBwdWRvIGNyZWFyIGxhIGNhcnBldGEgXCIke1RBUkVBU19GT0xERVJ9XCIuYClcbiAgICB9XG4gIH1cblxuICBhc3luYyBlbnN1cmVCb2FyZEZvbGRlcnMoYm9hcmROYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub3JtYWxpemVkID0gYm9hcmROYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKCFub3JtYWxpemVkKVxuICAgICAgcmV0dXJuXG5cbiAgICBhd2FpdCB0aGlzLmVuc3VyZUZvbGRlclBhdGgoYCR7VEFSRUFTX0ZPTERFUn0vJHtub3JtYWxpemVkfWApXG4gICAgYXdhaXQgdGhpcy5lbnN1cmVGb2xkZXJQYXRoKGAke1RBUkVBU19GT0xERVJ9LyR7bm9ybWFsaXplZH0vc3ViVGFza3NgKVxuICB9XG5cbiAgYXN5bmMgZW5zdXJlQm9hcmRXb3Jrc3BhY2UoYm9hcmROYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub3JtYWxpemVkID0gYm9hcmROYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKCFub3JtYWxpemVkKVxuICAgICAgcmV0dXJuXG5cbiAgICBhd2FpdCB0aGlzLmVuc3VyZUJvYXJkRm9sZGVycyhub3JtYWxpemVkKVxuICAgIGF3YWl0IGVuc3VyZUJvYXJkVGFza0luZGV4RmlsZSh0aGlzLmFwcCwgbm9ybWFsaXplZClcbiAgICBhd2FpdCBzeW5jUm9vdFRhc2tJbmRleExpbmtzKHRoaXMuYXBwKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZW1vdmVCb2FyZEZvbGRlcnMoYm9hcmROYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBib2FyZFJvb3RQYXRoID0gYCR7VEFSRUFTX0ZPTERFUn0vJHtib2FyZE5hbWV9YFxuICAgIGNvbnN0IGJvYXJkU3VidGFza3NQYXRoID0gYCR7Ym9hcmRSb290UGF0aH0vc3ViVGFza3NgXG4gICAgYXdhaXQgdGhpcy5kZWxldGVGb2xkZXJJZkV4aXN0cyhib2FyZFN1YnRhc2tzUGF0aClcbiAgICBhd2FpdCB0aGlzLmRlbGV0ZUZvbGRlcklmRXhpc3RzKGJvYXJkUm9vdFBhdGgpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlbmFtZUJvYXJkRm9sZGVyKGN1cnJlbnRCb2FyZE5hbWU6IHN0cmluZywgbmV4dEJvYXJkTmFtZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgY3VycmVudEZvbGRlclBhdGggPSBgJHtUQVJFQVNfRk9MREVSfS8ke2N1cnJlbnRCb2FyZE5hbWV9YFxuICAgIGNvbnN0IG5leHRGb2xkZXJQYXRoID0gYCR7VEFSRUFTX0ZPTERFUn0vJHtuZXh0Qm9hcmROYW1lfWBcbiAgICBjb25zdCBjdXJyZW50Rm9sZGVyID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGN1cnJlbnRGb2xkZXJQYXRoKVxuICAgIGNvbnN0IG5leHRGb2xkZXIgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgobmV4dEZvbGRlclBhdGgpXG4gICAgaWYgKG5leHRGb2xkZXIpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIGlmICghKGN1cnJlbnRGb2xkZXIgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKSlcbiAgICAgIHJldHVybiB0cnVlXG5cbiAgICBhd2FpdCB0aGlzLmFwcC5maWxlTWFuYWdlci5yZW5hbWVGaWxlKGN1cnJlbnRGb2xkZXIsIG5leHRGb2xkZXJQYXRoKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlbmFtZUJvYXJkVGFza0luZGV4RmlsZShjdXJyZW50Qm9hcmROYW1lOiBzdHJpbmcsIG5leHRCb2FyZE5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleEJhc2VuYW1lID0gZ2V0Qm9hcmRUYXNrSW5kZXhCYXNlbmFtZShjdXJyZW50Qm9hcmROYW1lKVxuICAgIGNvbnN0IG5leHRJbmRleEJhc2VuYW1lID0gZ2V0Qm9hcmRUYXNrSW5kZXhCYXNlbmFtZShuZXh0Qm9hcmROYW1lKVxuICAgIGNvbnN0IGN1cnJlbnRJbmRleFBhdGggPSBgJHtUQVJFQVNfRk9MREVSfS8ke25leHRCb2FyZE5hbWV9LyR7Y3VycmVudEluZGV4QmFzZW5hbWV9Lm1kYFxuICAgIGNvbnN0IG5leHRJbmRleFBhdGggPSBgJHtUQVJFQVNfRk9MREVSfS8ke25leHRCb2FyZE5hbWV9LyR7bmV4dEluZGV4QmFzZW5hbWV9Lm1kYFxuXG4gICAgY29uc3QgY3VycmVudEluZGV4RmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChjdXJyZW50SW5kZXhQYXRoKVxuICAgIGNvbnN0IG5leHRJbmRleEZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgobmV4dEluZGV4UGF0aClcblxuICAgIGlmIChuZXh0SW5kZXhGaWxlIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZpbGUpIHtcbiAgICAgIGlmIChjdXJyZW50SW5kZXhGaWxlIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZpbGUpXG4gICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmRlbGV0ZShjdXJyZW50SW5kZXhGaWxlLCB0cnVlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRJbmRleEZpbGUgaW5zdGFuY2VvZiBvYnNpZGlhbi5URmlsZSlcbiAgICAgIGF3YWl0IHRoaXMuYXBwLmZpbGVNYW5hZ2VyLnJlbmFtZUZpbGUoY3VycmVudEluZGV4RmlsZSwgbmV4dEluZGV4UGF0aClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVuYW1lQm9hcmRJblRhc2tGcm9udG1hdHRlcihjdXJyZW50Qm9hcmROYW1lOiBzdHJpbmcsIG5leHRCb2FyZE5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHRcbiAgICAgIC5nZXRNYXJrZG93bkZpbGVzKClcbiAgICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLnBhdGguc3RhcnRzV2l0aChgJHtUQVJFQVNfRk9MREVSfS8ke25leHRCb2FyZE5hbWV9L2ApKVxuXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICBhd2FpdCB0aGlzLmFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIoZmlsZSwgKGZyb250bWF0dGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvYXJkSW5Gcm9udG1hdHRlciA9IHR5cGVvZiBmcm9udG1hdHRlci50YWJsZXJvID09PSAnc3RyaW5nJ1xuICAgICAgICAgID8gZnJvbnRtYXR0ZXIudGFibGVyby50cmltKCkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIDogJydcblxuICAgICAgICBpZiAoYm9hcmRJbkZyb250bWF0dGVyID09PSBjdXJyZW50Qm9hcmROYW1lKVxuICAgICAgICAgIGZyb250bWF0dGVyLnRhYmxlcm8gPSBuZXh0Qm9hcmROYW1lXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVtYXBQb21vZG9yb1Rhc2tQYXRoKGN1cnJlbnRCb2FyZE5hbWU6IHN0cmluZywgbmV4dEJvYXJkTmFtZTogc3RyaW5nKTogUG9tb2Rvcm9TdGF0ZSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrUGF0aCA9IHRoaXMucG9tb2Rvcm8uc2VsZWN0ZWRUYXNrUGF0aFxuICAgIGNvbnN0IGN1cnJlbnRQcmVmaXggPSBgJHtUQVJFQVNfRk9MREVSfS8ke2N1cnJlbnRCb2FyZE5hbWV9L2BcbiAgICBjb25zdCBuZXh0UHJlZml4ID0gYCR7VEFSRUFTX0ZPTERFUn0vJHtuZXh0Qm9hcmROYW1lfS9gXG4gICAgY29uc3QgbmV4dFNlbGVjdGVkVGFza1BhdGggPSBzZWxlY3RlZFRhc2tQYXRoPy5zdGFydHNXaXRoKGN1cnJlbnRQcmVmaXgpXG4gICAgICA/IGAke25leHRQcmVmaXh9JHtzZWxlY3RlZFRhc2tQYXRoLnNsaWNlKGN1cnJlbnRQcmVmaXgubGVuZ3RoKX1gXG4gICAgICA6IHNlbGVjdGVkVGFza1BhdGhcblxuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLnBvbW9kb3JvLFxuICAgICAgZHVyYXRpb25zOiB7IC4uLnRoaXMucG9tb2Rvcm8uZHVyYXRpb25zIH0sXG4gICAgICBzZWxlY3RlZFRhc2tQYXRoOiBuZXh0U2VsZWN0ZWRUYXNrUGF0aCA/PyBudWxsLFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZGVsZXRlRm9sZGVySWZFeGlzdHMocGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgYWJzdHJhY3RGaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpXG4gICAgaWYgKCEoYWJzdHJhY3RGaWxlIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZvbGRlcikpXG4gICAgICByZXR1cm5cblxuICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmRlbGV0ZShhYnN0cmFjdEZpbGUsIHRydWUpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGVuc3VyZUZvbGRlclBhdGgocGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgYWRhcHRlciA9IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXJcbiAgICBjb25zdCBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbilcbiAgICBsZXQgY3VycmVudFBhdGggPSAnJ1xuXG4gICAgZm9yIChjb25zdCBzZWdtZW50IG9mIHNlZ21lbnRzKSB7XG4gICAgICBjdXJyZW50UGF0aCA9IGN1cnJlbnRQYXRoID8gYCR7Y3VycmVudFBhdGh9LyR7c2VnbWVudH1gIDogc2VnbWVudFxuICAgICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoY3VycmVudFBhdGgpXG5cbiAgICAgIGlmIChleGlzdGluZyBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGb2xkZXIpXG4gICAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGlmIChleGlzdGluZylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeGlzdGUgdW4gYXJjaGl2byBsbGFtYWRvIFwiJHtjdXJyZW50UGF0aH1cIi5gKVxuXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoY3VycmVudFBhdGgpXG4gICAgICB9XG4gICAgICBjYXRjaCB7XG4gICAgICAgIGNvbnN0IHJldHJ5ID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGN1cnJlbnRQYXRoKVxuICAgICAgICBpZiAocmV0cnkgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgaWYgKGF3YWl0IGFkYXB0ZXIuZXhpc3RzKGN1cnJlbnRQYXRoKSlcbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gc2UgcHVkbyBjcmVhciBsYSBjYXJwZXRhIFwiJHtjdXJyZW50UGF0aH1cIi5gKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0RXhpc3RpbmdCb2FyZEZvbGRlck5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCByb290Rm9sZGVyID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKFRBUkVBU19GT0xERVIpXG4gICAgaWYgKCEocm9vdEZvbGRlciBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGb2xkZXIpKVxuICAgICAgcmV0dXJuIFtdXG5cbiAgICBjb25zdCBleGNsdWRlZEZvbGRlcnMgPSBuZXcgU2V0KFtcbiAgICAgIENPTVBMRVRFRF9UQVNLU19GT0xERVIuc3BsaXQoJy8nKS5wb3AoKSA/PyAnJyxcbiAgICAgIENBTkNFTExFRF9UQVNLU19GT0xERVIuc3BsaXQoJy8nKS5wb3AoKSA/PyAnJyxcbiAgICAgIExFR0FDWV9DT01QTEVURURfVEFTS1NfRk9MREVSLnNwbGl0KCcvJykucG9wKCkgPz8gJycsXG4gICAgXSlcblxuICAgIHJldHVybiByb290Rm9sZGVyLmNoaWxkcmVuXG4gICAgICAuZmlsdGVyKChjaGlsZCk6IGNoaWxkIGlzIG9ic2lkaWFuLlRGb2xkZXIgPT4gY2hpbGQgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKVxuICAgICAgLm1hcChmb2xkZXIgPT4gZm9sZGVyLm5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAuZmlsdGVyKG5hbWUgPT4gQm9vbGVhbihuYW1lKSAmJiAhZXhjbHVkZWRGb2xkZXJzLmhhcyhuYW1lKSlcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlRmlsZURlbGV0ZShmaWxlOiBvYnNpZGlhbi5UQWJzdHJhY3RGaWxlKSB7XG4gICAgaWYgKCEoZmlsZSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGaWxlKSlcbiAgICAgIHJldHVyblxuXG4gICAgaWYgKGZpbGUuZXh0ZW5zaW9uICE9PSAnbWQnKVxuICAgICAgcmV0dXJuXG5cbiAgICBpZiAoIWZpbGUucGF0aC5zdGFydHNXaXRoKGAke1RBUkVBU19GT0xERVJ9L2ApKVxuICAgICAgcmV0dXJuXG5cbiAgICBhd2FpdCByZW1vdmVUYXNrTGlua0Zyb21JbmRleCh0aGlzLmFwcCwgZmlsZSlcbiAgICBhd2FpdCByZW1vdmVUYXNrTGlua0Zyb21GaW5pc2hlZEluZGV4KHRoaXMuYXBwLCBmaWxlKVxuICAgIGF3YWl0IHJlbW92ZVRhc2tMaW5rRnJvbUNhbmNlbGxlZEluZGV4KHRoaXMuYXBwLCBmaWxlKVxuICAgIGF3YWl0IHJlYnVpbGRUYXNrQ2hpbGRMaW5rcyh0aGlzLmFwcClcbiAgICBhd2FpdCBzeW5jVGFza1R5cGVUYWdzKHRoaXMuYXBwKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBlbnN1cmVPYnNpZGlhbkdyYXBoR3JvdXBzKCkge1xuICAgIGNvbnN0IGRlc2lyZWRHcm91cHM6IEdyYXBoR3JvdXBEZWZpbml0aW9uW10gPSBbXG4gICAgICB7IHF1ZXJ5OiBgdGFnOiMke0lOREVYX1RBR31gLCBjb2xvcjogJyM3YzVjZTcnIH0sXG4gICAgICB7IHF1ZXJ5OiBgdGFnOiMke1RBU0tfVEFHfWAsIGNvbG9yOiAnIzJlNmRiMCcgfSxcbiAgICAgIHsgcXVlcnk6IGB0YWc6IyR7U1VCVEFTS19UQUd9YCwgY29sb3I6ICcjMDBiODk0JyB9LFxuICAgIF1cblxuICAgIGF3YWl0IHRoaXMuZW5zdXJlR3JhcGhDb25maWdHcm91cHMoZGVzaXJlZEdyb3VwcylcbiAgICB0aGlzLmVuc3VyZVJ1bnRpbWVHcmFwaEdyb3VwcyhkZXNpcmVkR3JvdXBzKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBlbnN1cmVHcmFwaENvbmZpZ0dyb3VwcyhkZXNpcmVkR3JvdXBzOiBHcmFwaEdyb3VwRGVmaW5pdGlvbltdKSB7XG4gICAgY29uc3QgYWRhcHRlciA9IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXJcbiAgICBjb25zdCBjb25maWdEaXIgPSB0aGlzLmFwcC52YXVsdC5jb25maWdEaXJcbiAgICBjb25zdCBncmFwaENvbmZpZ1BhdGggPSBgJHtjb25maWdEaXJ9L2dyYXBoLmpzb25gXG5cbiAgICBsZXQgZ3JhcGhDb25maWc6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge31cbiAgICB0cnkge1xuICAgICAgaWYgKGF3YWl0IGFkYXB0ZXIuZXhpc3RzKGdyYXBoQ29uZmlnUGF0aCkpIHtcbiAgICAgICAgY29uc3QgcmF3Q29uZmlnID0gYXdhaXQgYWRhcHRlci5yZWFkKGdyYXBoQ29uZmlnUGF0aClcbiAgICAgICAgZ3JhcGhDb25maWcgPSByYXdDb25maWcudHJpbSgpID8gSlNPTi5wYXJzZShyYXdDb25maWcpIDoge31cbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgZ3JhcGhDb25maWcgPSB7fVxuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRHcm91cHMgPSBBcnJheS5pc0FycmF5KGdyYXBoQ29uZmlnLmdyb3VwcykgPyBncmFwaENvbmZpZy5ncm91cHMgOiBbXVxuICAgIGdyYXBoQ29uZmlnLmdyb3VwcyA9IHRoaXMubWVyZ2VHcmFwaEdyb3VwcyhjdXJyZW50R3JvdXBzLCBkZXNpcmVkR3JvdXBzKVxuXG4gICAgYXdhaXQgYWRhcHRlci53cml0ZShncmFwaENvbmZpZ1BhdGgsIEpTT04uc3RyaW5naWZ5KGdyYXBoQ29uZmlnLCBudWxsLCAyKSlcbiAgfVxuXG4gIHByaXZhdGUgZW5zdXJlUnVudGltZUdyYXBoR3JvdXBzKGRlc2lyZWRHcm91cHM6IEdyYXBoR3JvdXBEZWZpbml0aW9uW10pIHtcbiAgICBjb25zdCBhcHBXaXRoSW50ZXJuYWxzID0gdGhpcy5hcHAgYXMgdW5rbm93biBhcyB7XG4gICAgICBpbnRlcm5hbFBsdWdpbnM/OiB7XG4gICAgICAgIHBsdWdpbnM/OiBSZWNvcmQ8c3RyaW5nLCB7XG4gICAgICAgICAgaW5zdGFuY2U/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgICB9PlxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdyYXBoSW5zdGFuY2UgPSBhcHBXaXRoSW50ZXJuYWxzLmludGVybmFsUGx1Z2lucz8ucGx1Z2lucz8uZ3JhcGg/Lmluc3RhbmNlXG4gICAgaWYgKCFncmFwaEluc3RhbmNlKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBjYW5kaWRhdGVIb2xkZXJzID0gW1xuICAgICAgZ3JhcGhJbnN0YW5jZS5vcHRpb25zLFxuICAgICAgZ3JhcGhJbnN0YW5jZS5sb2NhbEdyYXBoT3B0aW9ucyxcbiAgICAgIGdyYXBoSW5zdGFuY2UuZ2xvYmFsR3JhcGhPcHRpb25zLFxuICAgIF0gYXMgQXJyYXk8UmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQ+XG5cbiAgICBmb3IgKGNvbnN0IGhvbGRlciBvZiBjYW5kaWRhdGVIb2xkZXJzKSB7XG4gICAgICBpZiAoIWhvbGRlciB8fCAhQXJyYXkuaXNBcnJheShob2xkZXIuZ3JvdXBzKSlcbiAgICAgICAgY29udGludWVcblxuICAgICAgaG9sZGVyLmdyb3VwcyA9IHRoaXMubWVyZ2VHcmFwaEdyb3Vwcyhob2xkZXIuZ3JvdXBzLCBkZXNpcmVkR3JvdXBzKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbWVyZ2VHcmFwaEdyb3VwcyhcbiAgICBjdXJyZW50R3JvdXBzOiB1bmtub3duW10sXG4gICAgZGVzaXJlZEdyb3VwczogR3JhcGhHcm91cERlZmluaXRpb25bXSxcbiAgKTogQXJyYXk8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+IHtcbiAgICBjb25zdCBub3JtYWxpemVkQ3VycmVudCA9IGN1cnJlbnRHcm91cHNcbiAgICAgIC5maWx0ZXIoKGdyb3VwKTogZ3JvdXAgaXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPT4gQm9vbGVhbihncm91cCkgJiYgdHlwZW9mIGdyb3VwID09PSAnb2JqZWN0JylcbiAgICAgIC5maWx0ZXIoZ3JvdXAgPT4gdHlwZW9mIGdyb3VwLnF1ZXJ5ID09PSAnc3RyaW5nJylcblxuICAgIGNvbnN0IGJ5UXVlcnkgPSBuZXcgTWFwPHN0cmluZywgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KClcbiAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIG5vcm1hbGl6ZWRDdXJyZW50KVxuICAgICAgYnlRdWVyeS5zZXQoZ3JvdXAucXVlcnkgYXMgc3RyaW5nLCB7IC4uLmdyb3VwIH0pXG5cbiAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIGRlc2lyZWRHcm91cHMpIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gYnlRdWVyeS5nZXQoZ3JvdXAucXVlcnkpXG4gICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgaWYgKCFleGlzdGluZy5jb2xvcilcbiAgICAgICAgICBleGlzdGluZy5jb2xvciA9IGdyb3VwLmNvbG9yXG4gICAgICAgIGJ5UXVlcnkuc2V0KGdyb3VwLnF1ZXJ5LCBleGlzdGluZylcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgYnlRdWVyeS5zZXQoZ3JvdXAucXVlcnksIHsgcXVlcnk6IGdyb3VwLnF1ZXJ5LCBjb2xvcjogZ3JvdXAuY29sb3IgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShieVF1ZXJ5LnZhbHVlcygpKVxuICB9XG59XG4iLCJpbXBvcnQgeyBUYXJlYXNQbHVnaW4gfSBmcm9tICcuL3Rhc2tNYW5uYWdlci9wbHVnaW4vVGFyZWFzUGx1Z2luJ1xuXG5leHBvcnQgeyBUYXJlYXNQbHVnaW4gfVxuZXhwb3J0IGRlZmF1bHQgVGFyZWFzUGx1Z2luXG4iLCJpbXBvcnQgeyBnZXREZWZhdWx0RXhwb3J0RnJvbUNqcyB9IGZyb20gXCJcdTAwMDBjb21tb25qc0hlbHBlcnMuanNcIjtcbmltcG9ydCB7IF9fcmVxdWlyZSBhcyByZXF1aXJlVGFza01hbm5hZ2VyIH0gZnJvbSBcIi9ob21lL2dhYnJpZWwvRGVza3RvcC9yZXBvcy90YXNrLW1hbm5hZ2VyL3NyYy90YXNrTWFubmFnZXIudHNcIjtcbnZhciB0YXNrTWFubmFnZXJFeHBvcnRzID0gcmVxdWlyZVRhc2tNYW5uYWdlcigpO1xuZXhwb3J0IHsgdGFza01hbm5hZ2VyRXhwb3J0cyBhcyBfX21vZHVsZUV4cG9ydHMgfTtcbmV4cG9ydCBkZWZhdWx0IC8qQF9fUFVSRV9fKi9nZXREZWZhdWx0RXhwb3J0RnJvbUNqcyh0YXNrTWFubmFnZXJFeHBvcnRzKTsiXSwibmFtZXMiOlsicmVxdWlyZSQkMCIsInJlcXVpcmUkJDEiLCJuZXh0RHVyYXRpb24iLCJyZXF1aXJlJCQyIiwicmVxdWlyZSQkMyIsInJlcXVpcmUkJDQiLCJyZXF1aXJlJCQ1IiwicmVxdWlyZSQkNiIsIm5vcm1hbGl6ZWQiLCJyZXF1aXJlJCQ3IiwicmVxdWlyZSQkOCIsInJlcXVpcmUkJDkiLCJyZXF1aXJlJCQxMCIsInJlcXVpcmUkJDExIiwicmVxdWlyZSQkMTIiLCJyZXF1aXJlJCQxMyIsInJlcXVpcmUkJDE0IiwicmVxdWlyZSQkMTUiLCJyZXF1aXJlJCQxNiIsInJlcXVpcmUkJDE3IiwicmVxdWlyZSQkMTgiLCJyZXF1aXJlJCQxOSIsInJlcXVpcmUkJDIwIiwidGFza01hbm5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUEsSUFBQSxpQkFBQSxHQUFBLEVBQUE7Q0FBQSxRQUFBLENBQUEsaUJBQUEsRUFBQTtHQUFBLHlCQUFBLEVBQUEsTUFBQSx5QkFBQTtHQUFBLHNCQUFBLEVBQUEsTUFBQSxzQkFBQTtHQUFBLDZCQUFBLEVBQUEsTUFBQSw2QkFBQTtHQUFBLHlCQUFBLEVBQUEsTUFBQSx5QkFBQTtHQUFBLHNCQUFBLEVBQUEsTUFBQSxzQkFBQTtHQUFBLGtCQUFBLEVBQUEsTUFBQSxrQkFBQTtHQUFBLGVBQUEsRUFBQSxNQUFBLGVBQUE7R0FBQSxtQ0FBQSxFQUFBLE1BQUEsbUNBQUE7R0FBQSxvQ0FBQSxFQUFBLE1BQUEsb0NBQUE7R0FBQSw2QkFBQSxFQUFBLE1BQUEsNkJBQUE7R0FBQSxnQkFBQSxFQUFBLE1BQUEsZ0JBQUE7R0FBQSxPQUFBLEVBQUEsTUFBQSxPQUFBO0dBQUEsNEJBQUEsRUFBQSxNQUFBLDRCQUFBO0dBQUEsU0FBQSxFQUFBLE1BQUEsU0FBQTtHQUFBLDZCQUFBLEVBQUEsTUFBQSw2QkFBQTtHQUFBLG1CQUFBLEVBQUEsTUFBQSxtQkFBQTtHQUFBLFVBQUEsRUFBQSxNQUFBLFVBQUE7R0FBQSxxQkFBQSxFQUFBLE1BQUEscUJBQUE7R0FBQSxzQ0FBQSxFQUFBLE1BQUEsc0NBQUE7R0FBQSxhQUFBLEVBQUEsTUFBQSxhQUFBO0dBQUEsV0FBQSxFQUFBLE1BQUEsV0FBQTtHQUFBLFdBQUEsRUFBQSxNQUFBLFdBQUE7R0FBQSxhQUFBLEVBQUEsTUFBQSxhQUFBO0dBQUEsbUJBQUEsRUFBQSxNQUFBLG1CQUFBO0dBQUEsUUFBQSxFQUFBLE1BQUEs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
