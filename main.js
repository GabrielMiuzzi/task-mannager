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
	  for (const line of lines) {
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
	    for (const title of ["Horario", "Tipo de pomodoro", "Duraci\xF3n elegida", "Tarea", "Tiempo", "Desvio", "Finalizaci\xF3n"])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL3Rhc2tNYW5uYWdlci9jb25zdGFudHMudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL3V0aWxzL2d1YXJkcy50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy9wb21vZG9yb0VuZ2luZS50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy90YXNrSW5kZXhFbmdpbmUudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL2VuZ2luZXMvZnJvbnRtYXR0ZXJFbmdpbmUudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL3V0aWxzL3N0YXR1cy50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy90YXNrRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9lbmdpbmVzL3NjaGVkdWxlRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci91dGlscy9zYW5pdGl6ZUZpbGVuYW1lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9tb2RhbHMvTmV3VGFza01vZGFsLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci91dGlscy9zZXR0aW5ncy50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvZW5naW5lcy9jb21wbGV0aW9uRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9lbmdpbmVzL29yZGVyRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9lbmdpbmVzL3BvbW9kb3JvTG9nRW5naW5lLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci91aS9jb2xvclBpY2tlci50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvbW9kYWxzL0VkaXRTZWN0aW9uTW9kYWwudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL21vZGFscy9OZXdCb2FyZE1vZGFsLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9tb2RhbHMvTmV3R3JvdXBNb2RhbC50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvbW9kYWxzL0VkaXRUYXNrRmlsZU1vZGFsLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9tb2RhbHMvQWRkVGFza0NvbW1lbnRNb2RhbC50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvbW9kYWxzL0NvbmZpcm1EZWxldGVUYXNrTW9kYWwudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL21vZGFscy9Qb21vZG9yb1ByZXNldE1vZGFsLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9tb2RhbHMvU2VsZWN0UG9tb2Rvcm9UYXNrTW9kYWwudHMiLCIuLi9zcmMvdGFza01hbm5hZ2VyL3VpL2Ryb3Bkb3duLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci91dGlscy9kZWJvdW5jZS50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIvdmlldy9UYXJlYXNWaWV3LnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci9wbHVnaW4vVGFyZWFzUGx1Z2luLnRzIiwiLi4vc3JjL3Rhc2tNYW5uYWdlci50cyIsIi4uL3NyYy90YXNrTWFubmFnZXIudHM/Y29tbW9uanMtZW50cnkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFZJRVdfVFlQRSA9ICd0YXJlYXMtdmlldydcbmV4cG9ydCBjb25zdCBUQVJFQVNfRk9MREVSID0gJ3Rhc2stbWFubmFnZXInXG5leHBvcnQgY29uc3QgQ09NUExFVEVEX1RBU0tTX0ZPTERFUiA9IGAke1RBUkVBU19GT0xERVJ9L2ZpbmlzaGVkYFxuZXhwb3J0IGNvbnN0IENPTVBMRVRFRF9TVUJUQVNLU19GT0xERVIgPSBgJHtDT01QTEVURURfVEFTS1NfRk9MREVSfS9zdWJUYXNrc2BcbmV4cG9ydCBjb25zdCBDQU5DRUxMRURfVEFTS1NfRk9MREVSID0gYCR7VEFSRUFTX0ZPTERFUn0vY2FuY2VsbGVkYFxuZXhwb3J0IGNvbnN0IENBTkNFTExFRF9TVUJUQVNLU19GT0xERVIgPSBgJHtDQU5DRUxMRURfVEFTS1NfRk9MREVSfS9zdWJUYXNrc2BcbmV4cG9ydCBjb25zdCBMRUdBQ1lfQ09NUExFVEVEX1RBU0tTX0ZPTERFUiA9IGAke1RBUkVBU19GT0xERVJ9L2NvbXBsZXRhZGFzYFxuZXhwb3J0IGNvbnN0IFRBU0tfSU5ERVhfQkFTRU5BTUUgPSAndGFza0luZGV4J1xuZXhwb3J0IGNvbnN0IEZJTklTSEVEX1RBU0tfSU5ERVhfQkFTRU5BTUUgPSAndGFza0luZGV4RmluaXNoZWQnXG5leHBvcnQgY29uc3QgQ0FOQ0VMTEVEX1RBU0tfSU5ERVhfQkFTRU5BTUUgPSAndGFza0luZGV4Q2FuY2VsbGVkJ1xuZXhwb3J0IGNvbnN0IFBPTU9ET1JPX0xPR19CQVNFTkFNRSA9ICdwb21vZG9ybydcbmV4cG9ydCBjb25zdCBJTkRFWF9UQUcgPSAnaW5kZXgnXG5leHBvcnQgY29uc3QgVEFTS19UQUcgPSAndGFzaydcbmV4cG9ydCBjb25zdCBTVUJUQVNLX1RBRyA9ICdzdWItdGFzaydcblxuZXhwb3J0IGNvbnN0IEVTVEFET1MgPSBbJ1BlbmRpZW50ZScsICdDYW5jZWxhZGEnLCAnRW4gcHJvZ3Jlc28nLCAnRmluYWxpemFkYScsICdCbG9xdWVhZGEnXVxuZXhwb3J0IGNvbnN0IFBSSU9SSURBREVTID0gWydCYWphJywgJ01lZGlhJywgJ0FsdGEnLCAnVXJnZW50ZSddXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0JPQVJEX05BTUUgPSAnZGVmYXVsdCdcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RBQkxFUk9TOiBBcnJheTx7IG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyB9PiA9IFtcbiAgeyBuYW1lOiBERUZBVUxUX0JPQVJEX05BTUUsIGNvbG9yOiAnIzJlNmRiMCcgfSxcbl1cbmV4cG9ydCBjb25zdCBERUZBVUxUX0VRVUlQT1M6IEFycmF5PHsgbmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nIH0+ID0gW11cbmV4cG9ydCBjb25zdCBMT0NLRURfRVFVSVBPX05BTUVTOiBzdHJpbmdbXSA9IFtdXG5cbmV4cG9ydCBjb25zdCBQUkVTRVRfQ09MT1JTID0gW1xuICAnI2UwNWM1YycsICcjZTA4NTVjJywgJyNkOTdhMWUnLCAnI2M5Yjg0YScsXG4gICcjNGNhZjUwJywgJyMwMGI4OTQnLCAnIzA5ODRlMycsICcjMmU2ZGIwJyxcbiAgJyM3YzVjZTcnLCAnI2ZkNzlhOCcsICcjNjM2ZTcyJywgJyNiMmJlYzMnLFxuXVxuXG5leHBvcnQgY29uc3QgT1JERVJfU1RFUCA9IDEwXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BPTU9ET1JPX1dPUktfTUlOVVRFUyA9IDI1XG5leHBvcnQgY29uc3QgREVGQVVMVF9QT01PRE9ST19TSE9SVF9CUkVBS19NSU5VVEVTID0gNVxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUE9NT0RPUk9fTE9OR19CUkVBS19NSU5VVEVTID0gMTVcbmV4cG9ydCBjb25zdCBQT01PRE9ST19XT1JLX0NZQ0xFU19CRUZPUkVfTE9OR19CUkVBSyA9IDRcbiIsImltcG9ydCB0eXBlIHsgVGFza0Zyb250bWF0dGVyIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlY29yZCh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgcmV0dXJuIEJvb2xlYW4odmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvVGFza0Zyb250bWF0dGVyKHZhbHVlOiB1bmtub3duKTogVGFza0Zyb250bWF0dGVyIHwgbnVsbCB7XG4gIGlmICghaXNSZWNvcmQodmFsdWUpKVxuICAgIHJldHVybiBudWxsXG5cbiAgY29uc3QgZnJvbnRtYXR0ZXI6IFRhc2tGcm9udG1hdHRlciA9IHt9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZS50YXJlYSA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIudGFyZWEgPSB2YWx1ZS50YXJlYVxuICBpZiAodHlwZW9mIHZhbHVlLmRldGFsbGUgPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLmRldGFsbGUgPSB2YWx1ZS5kZXRhbGxlXG4gIGlmICh0eXBlb2YgdmFsdWUuZXN0YWRvID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5lc3RhZG8gPSB2YWx1ZS5lc3RhZG9cbiAgaWYgKHR5cGVvZiB2YWx1ZS5mZWNoYUluaWNpbyA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIuZmVjaGFJbmljaW8gPSB2YWx1ZS5mZWNoYUluaWNpb1xuICBpZiAodHlwZW9mIHZhbHVlLmZlY2hhRmluID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5mZWNoYUZpbiA9IHZhbHVlLmZlY2hhRmluXG4gIGlmICh0eXBlb2YgdmFsdWUudGFibGVybyA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIudGFibGVybyA9IHZhbHVlLnRhYmxlcm9cbiAgaWYgKHR5cGVvZiB2YWx1ZS5lcXVpcG8gPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLmVxdWlwbyA9IHZhbHVlLmVxdWlwb1xuICBpZiAodHlwZW9mIHZhbHVlLnByaW9yaWRhZCA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIucHJpb3JpZGFkID0gdmFsdWUucHJpb3JpZGFkXG4gIGlmICh0eXBlb2YgdmFsdWUuZGVkaWNhZG8gPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWx1ZS5kZWRpY2FkbyA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIuZGVkaWNhZG8gPSB2YWx1ZS5kZWRpY2Fkb1xuICBpZiAodHlwZW9mIHZhbHVlLmVzdGltYWNpb24gPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWx1ZS5lc3RpbWFjaW9uID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5lc3RpbWFjaW9uID0gdmFsdWUuZXN0aW1hY2lvblxuICBpZiAodHlwZW9mIHZhbHVlLmRlc3ZpbyA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlLmRlc3ZpbyA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIuZGVzdmlvID0gdmFsdWUuZGVzdmlvXG4gIGlmICh0eXBlb2YgdmFsdWUucGFyZW50ID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5wYXJlbnQgPSB2YWx1ZS5wYXJlbnRcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUuY2hpbGRzKSAmJiB2YWx1ZS5jaGlsZHMuZXZlcnkoaXRlbSA9PiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpKVxuICAgIGZyb250bWF0dGVyLmNoaWxkcyA9IHZhbHVlLmNoaWxkc1xuICBlbHNlIGlmICh0eXBlb2YgdmFsdWUuY2hpbGRzID09PSAnc3RyaW5nJylcbiAgICBmcm9udG1hdHRlci5jaGlsZHMgPSB2YWx1ZS5jaGlsZHNcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUudGFncykgJiYgdmFsdWUudGFncy5ldmVyeShpdGVtID0+IHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykpXG4gICAgZnJvbnRtYXR0ZXIudGFncyA9IHZhbHVlLnRhZ3NcbiAgZWxzZSBpZiAodHlwZW9mIHZhbHVlLnRhZ3MgPT09ICdzdHJpbmcnKVxuICAgIGZyb250bWF0dGVyLnRhZ3MgPSB2YWx1ZS50YWdzXG4gIGlmICh0eXBlb2YgdmFsdWUub3JkZXIgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWx1ZS5vcmRlciA9PT0gJ3N0cmluZycpXG4gICAgZnJvbnRtYXR0ZXIub3JkZXIgPSB2YWx1ZS5vcmRlclxuXG4gIHJldHVybiBmcm9udG1hdHRlclxufVxuIiwiaW1wb3J0IHtcbiAgREVGQVVMVF9QT01PRE9ST19MT05HX0JSRUFLX01JTlVURVMsXG4gIERFRkFVTFRfUE9NT0RPUk9fU0hPUlRfQlJFQUtfTUlOVVRFUyxcbiAgREVGQVVMVF9QT01PRE9ST19XT1JLX01JTlVURVMsXG4gIFBPTU9ET1JPX1dPUktfQ1lDTEVTX0JFRk9SRV9MT05HX0JSRUFLLFxufSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgdHlwZSB7IFBvbW9kb3JvRHVyYXRpb25zLCBQb21vZG9yb1BoYXNlLCBQb21vZG9yb1J1blN0YXRlLCBQb21vZG9yb1N0YXRlIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBpc1JlY29yZCB9IGZyb20gJy4uL3V0aWxzL2d1YXJkcydcblxuY29uc3QgTUlOX0RVUkFUSU9OX01JTlVURVMgPSAxXG5jb25zdCBNQVhfRFVSQVRJT05fTUlOVVRFUyA9IDE4MFxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFBvbW9kb3JvU3RhdGUoKTogUG9tb2Rvcm9TdGF0ZSB7XG4gIGNvbnN0IGR1cmF0aW9ucyA9IGNyZWF0ZURlZmF1bHRQb21vZG9yb0R1cmF0aW9ucygpXG4gIHJldHVybiB7XG4gICAgcGhhc2U6ICd3b3JrJyxcbiAgICBydW5TdGF0ZTogJ2lkbGUnLFxuICAgIHJlbWFpbmluZ1NlY29uZHM6IGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKGR1cmF0aW9ucywgJ3dvcmsnKSxcbiAgICBlbmRUaW1lc3RhbXA6IG51bGwsXG4gICAgY29tcGxldGVkV29ya0N5Y2xlczogMCxcbiAgICBzZWxlY3RlZFRhc2tQYXRoOiBudWxsLFxuICAgIGlzRGV2aWF0aW9uQWN0aXZlOiBmYWxzZSxcbiAgICBkZXZpYXRpb25TdGFydGVkQXQ6IG51bGwsXG4gICAgZGV2aWF0aW9uQmFzZVJlbWFpbmluZ1NlY29uZHM6IDAsXG4gICAgcGhhc2VEZXZpYXRpb25TZWNvbmRzOiAwLFxuICAgIGR1cmF0aW9ucyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFBvbW9kb3JvRHVyYXRpb25zKCk6IFBvbW9kb3JvRHVyYXRpb25zIHtcbiAgcmV0dXJuIHtcbiAgICB3b3JrTWludXRlczogREVGQVVMVF9QT01PRE9ST19XT1JLX01JTlVURVMsXG4gICAgc2hvcnRCcmVha01pbnV0ZXM6IERFRkFVTFRfUE9NT0RPUk9fU0hPUlRfQlJFQUtfTUlOVVRFUyxcbiAgICBsb25nQnJlYWtNaW51dGVzOiBERUZBVUxUX1BPTU9ET1JPX0xPTkdfQlJFQUtfTUlOVVRFUyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUG9tb2Rvcm9TdGF0ZShyYXdWYWx1ZTogdW5rbm93bik6IFBvbW9kb3JvU3RhdGUge1xuICBjb25zdCBmYWxsYmFjayA9IGNyZWF0ZURlZmF1bHRQb21vZG9yb1N0YXRlKClcbiAgaWYgKCFpc1JlY29yZChyYXdWYWx1ZSkpXG4gICAgcmV0dXJuIGZhbGxiYWNrXG5cbiAgY29uc3QgZHVyYXRpb25zID0gbm9ybWFsaXplUG9tb2Rvcm9EdXJhdGlvbnMocmF3VmFsdWUuZHVyYXRpb25zKVxuICBjb25zdCBwaGFzZSA9IG5vcm1hbGl6ZVBvbW9kb3JvUGhhc2UocmF3VmFsdWUucGhhc2UpXG4gIGNvbnN0IHJ1blN0YXRlID0gbm9ybWFsaXplUG9tb2Rvcm9SdW5TdGF0ZShyYXdWYWx1ZS5ydW5TdGF0ZSlcbiAgY29uc3QgZGVmYXVsdFJlbWFpbmluZyA9IGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKGR1cmF0aW9ucywgcGhhc2UpXG4gIGNvbnN0IHJlbWFpbmluZ1NlY29uZHMgPSBub3JtYWxpemVTZWNvbmRzKHJhd1ZhbHVlLnJlbWFpbmluZ1NlY29uZHMsIGRlZmF1bHRSZW1haW5pbmcpXG4gIGNvbnN0IGVuZFRpbWVzdGFtcCA9IHR5cGVvZiByYXdWYWx1ZS5lbmRUaW1lc3RhbXAgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZShyYXdWYWx1ZS5lbmRUaW1lc3RhbXApXG4gICAgPyByYXdWYWx1ZS5lbmRUaW1lc3RhbXBcbiAgICA6IG51bGxcbiAgY29uc3QgY29tcGxldGVkV29ya0N5Y2xlcyA9IHR5cGVvZiByYXdWYWx1ZS5jb21wbGV0ZWRXb3JrQ3ljbGVzID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNGaW5pdGUocmF3VmFsdWUuY29tcGxldGVkV29ya0N5Y2xlcylcbiAgICA/IE1hdGgubWF4KDAsIE1hdGguZmxvb3IocmF3VmFsdWUuY29tcGxldGVkV29ya0N5Y2xlcykpXG4gICAgOiAwXG4gIGNvbnN0IHNlbGVjdGVkVGFza1BhdGggPSB0eXBlb2YgcmF3VmFsdWUuc2VsZWN0ZWRUYXNrUGF0aCA9PT0gJ3N0cmluZycgJiYgcmF3VmFsdWUuc2VsZWN0ZWRUYXNrUGF0aC50cmltKCkubGVuZ3RoID4gMFxuICAgID8gcmF3VmFsdWUuc2VsZWN0ZWRUYXNrUGF0aFxuICAgIDogbnVsbFxuICBjb25zdCBpc0RldmlhdGlvbkFjdGl2ZSA9IEJvb2xlYW4ocmF3VmFsdWUuaXNEZXZpYXRpb25BY3RpdmUpXG4gIGNvbnN0IGRldmlhdGlvblN0YXJ0ZWRBdCA9IHR5cGVvZiByYXdWYWx1ZS5kZXZpYXRpb25TdGFydGVkQXQgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZShyYXdWYWx1ZS5kZXZpYXRpb25TdGFydGVkQXQpXG4gICAgPyByYXdWYWx1ZS5kZXZpYXRpb25TdGFydGVkQXRcbiAgICA6IG51bGxcbiAgY29uc3QgZGV2aWF0aW9uQmFzZVJlbWFpbmluZ1NlY29uZHMgPSBub3JtYWxpemVTZWNvbmRzKHJhd1ZhbHVlLmRldmlhdGlvbkJhc2VSZW1haW5pbmdTZWNvbmRzLCAwKVxuICBjb25zdCBwaGFzZURldmlhdGlvblNlY29uZHMgPSBub3JtYWxpemVTZWNvbmRzKHJhd1ZhbHVlLnBoYXNlRGV2aWF0aW9uU2Vjb25kcywgMClcblxuICByZXR1cm4ge1xuICAgIHBoYXNlLFxuICAgIHJ1blN0YXRlLFxuICAgIHJlbWFpbmluZ1NlY29uZHMsXG4gICAgZW5kVGltZXN0YW1wLFxuICAgIGNvbXBsZXRlZFdvcmtDeWNsZXMsXG4gICAgc2VsZWN0ZWRUYXNrUGF0aCxcbiAgICBpc0RldmlhdGlvbkFjdGl2ZSxcbiAgICBkZXZpYXRpb25TdGFydGVkQXQ6IGlzRGV2aWF0aW9uQWN0aXZlID8gZGV2aWF0aW9uU3RhcnRlZEF0IDogbnVsbCxcbiAgICBkZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kczogaXNEZXZpYXRpb25BY3RpdmUgPyBkZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kcyA6IDAsXG4gICAgcGhhc2VEZXZpYXRpb25TZWNvbmRzLFxuICAgIGR1cmF0aW9ucyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUG9tb2Rvcm9EdXJhdGlvbnMocmF3VmFsdWU6IHVua25vd24pOiBQb21vZG9yb0R1cmF0aW9ucyB7XG4gIGNvbnN0IGZhbGxiYWNrID0gY3JlYXRlRGVmYXVsdFBvbW9kb3JvRHVyYXRpb25zKClcbiAgaWYgKCFpc1JlY29yZChyYXdWYWx1ZSkpXG4gICAgcmV0dXJuIGZhbGxiYWNrXG5cbiAgcmV0dXJuIHtcbiAgICB3b3JrTWludXRlczogY2xhbXBNaW51dGVzKHJhd1ZhbHVlLndvcmtNaW51dGVzLCBmYWxsYmFjay53b3JrTWludXRlcyksXG4gICAgc2hvcnRCcmVha01pbnV0ZXM6IGNsYW1wTWludXRlcyhyYXdWYWx1ZS5zaG9ydEJyZWFrTWludXRlcywgZmFsbGJhY2suc2hvcnRCcmVha01pbnV0ZXMpLFxuICAgIGxvbmdCcmVha01pbnV0ZXM6IGNsYW1wTWludXRlcyhyYXdWYWx1ZS5sb25nQnJlYWtNaW51dGVzLCBmYWxsYmFjay5sb25nQnJlYWtNaW51dGVzKSxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGhhc2VEdXJhdGlvblNlY29uZHMoZHVyYXRpb25zOiBQb21vZG9yb0R1cmF0aW9ucywgcGhhc2U6IFBvbW9kb3JvUGhhc2UpOiBudW1iZXIge1xuICBpZiAocGhhc2UgPT09ICdzaG9ydC1icmVhaycpXG4gICAgcmV0dXJuIGR1cmF0aW9ucy5zaG9ydEJyZWFrTWludXRlcyAqIDYwXG5cbiAgaWYgKHBoYXNlID09PSAnbG9uZy1icmVhaycpXG4gICAgcmV0dXJuIGR1cmF0aW9ucy5sb25nQnJlYWtNaW51dGVzICogNjBcblxuICByZXR1cm4gZHVyYXRpb25zLndvcmtNaW51dGVzICogNjBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvbW9kb3JvUmVtYWluaW5nU2Vjb25kcyhzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgbm93TXM6IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChzdGF0ZS5ydW5TdGF0ZSAhPT0gJ3J1bm5pbmcnIHx8IHN0YXRlLmVuZFRpbWVzdGFtcCA9PT0gbnVsbClcbiAgICByZXR1cm4gc3RhdGUucmVtYWluaW5nU2Vjb25kc1xuXG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLmNlaWwoKHN0YXRlLmVuZFRpbWVzdGFtcCAtIG5vd01zKSAvIDEwMDApKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRQb21vZG9ybyhzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgbm93TXM6IG51bWJlcik6IFBvbW9kb3JvU3RhdGUge1xuICBpZiAoc3RhdGUucnVuU3RhdGUgPT09ICdydW5uaW5nJyB8fCBzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSlcbiAgICByZXR1cm4gc3RhdGVcblxuICBjb25zdCByZW1haW5pbmdTZWNvbmRzID0gc3RhdGUucnVuU3RhdGUgPT09ICdwYXVzZWQnXG4gICAgPyBzdGF0ZS5yZW1haW5pbmdTZWNvbmRzXG4gICAgOiBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyhzdGF0ZS5kdXJhdGlvbnMsIHN0YXRlLnBoYXNlKVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgcnVuU3RhdGU6ICdydW5uaW5nJyxcbiAgICByZW1haW5pbmdTZWNvbmRzLFxuICAgIGVuZFRpbWVzdGFtcDogbm93TXMgKyByZW1haW5pbmdTZWNvbmRzICogMTAwMCxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF1c2VQb21vZG9ybyhzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgbm93TXM6IG51bWJlcik6IFBvbW9kb3JvU3RhdGUge1xuICBpZiAoc3RhdGUucnVuU3RhdGUgIT09ICdydW5uaW5nJyB8fCBzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSlcbiAgICByZXR1cm4gc3RhdGVcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIHJ1blN0YXRlOiAncGF1c2VkJyxcbiAgICByZW1haW5pbmdTZWNvbmRzOiBnZXRQb21vZG9yb1JlbWFpbmluZ1NlY29uZHMoc3RhdGUsIG5vd01zKSxcbiAgICBlbmRUaW1lc3RhbXA6IG51bGwsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3VtZVBvbW9kb3JvKHN0YXRlOiBQb21vZG9yb1N0YXRlLCBub3dNczogbnVtYmVyKTogUG9tb2Rvcm9TdGF0ZSB7XG4gIGlmIChzdGF0ZS5ydW5TdGF0ZSAhPT0gJ3BhdXNlZCcgfHwgc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUpXG4gICAgcmV0dXJuIHN0YXRlXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBydW5TdGF0ZTogJ3J1bm5pbmcnLFxuICAgIGVuZFRpbWVzdGFtcDogbm93TXMgKyBzdGF0ZS5yZW1haW5pbmdTZWNvbmRzICogMTAwMCxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRQb21vZG9ybyhzdGF0ZTogUG9tb2Rvcm9TdGF0ZSk6IFBvbW9kb3JvU3RhdGUge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIHJ1blN0YXRlOiAnaWRsZScsXG4gICAgcmVtYWluaW5nU2Vjb25kczogZ2V0UGhhc2VEdXJhdGlvblNlY29uZHMoc3RhdGUuZHVyYXRpb25zLCBzdGF0ZS5waGFzZSksXG4gICAgZW5kVGltZXN0YW1wOiBudWxsLFxuICAgIGlzRGV2aWF0aW9uQWN0aXZlOiBmYWxzZSxcbiAgICBkZXZpYXRpb25TdGFydGVkQXQ6IG51bGwsXG4gICAgZGV2aWF0aW9uQmFzZVJlbWFpbmluZ1NlY29uZHM6IDAsXG4gICAgcGhhc2VEZXZpYXRpb25TZWNvbmRzOiAwLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBvbW9kb3JvRHVyYXRpb25zKHN0YXRlOiBQb21vZG9yb1N0YXRlLCBkdXJhdGlvbnM6IFBvbW9kb3JvRHVyYXRpb25zKTogUG9tb2Rvcm9TdGF0ZSB7XG4gIGlmIChzdGF0ZS5ydW5TdGF0ZSAhPT0gJ2lkbGUnKVxuICAgIHJldHVybiB7IC4uLnN0YXRlLCBkdXJhdGlvbnM6IHsgLi4uZHVyYXRpb25zIH0gfVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZHVyYXRpb25zOiB7IC4uLmR1cmF0aW9ucyB9LFxuICAgIHJlbWFpbmluZ1NlY29uZHM6IGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKGR1cmF0aW9ucywgc3RhdGUucGhhc2UpLFxuICAgIGVuZFRpbWVzdGFtcDogbnVsbCxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWR2YW5jZVBvbW9kb3JvU3RhdGUoXG4gIHN0YXRlOiBQb21vZG9yb1N0YXRlLFxuICBub3dNczogbnVtYmVyLFxuKTogeyBzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgY29tcGxldGVkUGhhc2VzOiBQb21vZG9yb1BoYXNlW10sIHRyYW5zaXRpb25lZDogYm9vbGVhbiB9IHtcbiAgaWYgKHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlIHx8IHN0YXRlLnJ1blN0YXRlICE9PSAncnVubmluZycgfHwgc3RhdGUuZW5kVGltZXN0YW1wID09PSBudWxsKVxuICAgIHJldHVybiB7IHN0YXRlLCBjb21wbGV0ZWRQaGFzZXM6IFtdLCB0cmFuc2l0aW9uZWQ6IGZhbHNlIH1cblxuICBsZXQgbmV4dCA9IHsgLi4uc3RhdGUsIGR1cmF0aW9uczogeyAuLi5zdGF0ZS5kdXJhdGlvbnMgfSB9XG4gIGNvbnN0IGNvbXBsZXRlZFBoYXNlczogUG9tb2Rvcm9QaGFzZVtdID0gW11cbiAgbGV0IHRyYW5zaXRpb25lZCA9IGZhbHNlXG5cbiAgd2hpbGUgKG5leHQuZW5kVGltZXN0YW1wICE9PSBudWxsICYmIG5leHQuZW5kVGltZXN0YW1wIDw9IG5vd01zKSB7XG4gICAgY29tcGxldGVkUGhhc2VzLnB1c2gobmV4dC5waGFzZSlcbiAgICB0cmFuc2l0aW9uZWQgPSB0cnVlXG5cbiAgICBpZiAobmV4dC5waGFzZSA9PT0gJ3dvcmsnKSB7XG4gICAgICBjb25zdCBjb21wbGV0ZWRXb3JrQ3ljbGVzID0gbmV4dC5jb21wbGV0ZWRXb3JrQ3ljbGVzICsgMVxuICAgICAgY29uc3QgbmV4dFBoYXNlOiBQb21vZG9yb1BoYXNlID0gY29tcGxldGVkV29ya0N5Y2xlcyAlIFBPTU9ET1JPX1dPUktfQ1lDTEVTX0JFRk9SRV9MT05HX0JSRUFLID09PSAwXG4gICAgICAgID8gJ2xvbmctYnJlYWsnXG4gICAgICAgIDogJ3Nob3J0LWJyZWFrJ1xuICAgICAgY29uc3QgbmV4dER1cmF0aW9uID0gZ2V0UGhhc2VEdXJhdGlvblNlY29uZHMobmV4dC5kdXJhdGlvbnMsIG5leHRQaGFzZSlcbiAgICAgIG5leHQgPSB7XG4gICAgICAgIC4uLm5leHQsXG4gICAgICAgIHBoYXNlOiBuZXh0UGhhc2UsXG4gICAgICAgIGNvbXBsZXRlZFdvcmtDeWNsZXMsXG4gICAgICAgIHJ1blN0YXRlOiAncnVubmluZycsXG4gICAgICAgIHJlbWFpbmluZ1NlY29uZHM6IG5leHREdXJhdGlvbixcbiAgICAgICAgZW5kVGltZXN0YW1wOiAobmV4dC5lbmRUaW1lc3RhbXAgPz8gbm93TXMpICsgbmV4dER1cmF0aW9uICogMTAwMCxcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgbmV4dER1cmF0aW9uID0gZ2V0UGhhc2VEdXJhdGlvblNlY29uZHMobmV4dC5kdXJhdGlvbnMsICd3b3JrJylcbiAgICBuZXh0ID0ge1xuICAgICAgLi4ubmV4dCxcbiAgICAgIHBoYXNlOiAnd29yaycsXG4gICAgICBydW5TdGF0ZTogJ3J1bm5pbmcnLFxuICAgICAgcmVtYWluaW5nU2Vjb25kczogbmV4dER1cmF0aW9uLFxuICAgICAgZW5kVGltZXN0YW1wOiAobmV4dC5lbmRUaW1lc3RhbXAgPz8gbm93TXMpICsgbmV4dER1cmF0aW9uICogMTAwMCxcbiAgICB9XG4gIH1cblxuICBjb25zdCByZW1haW5pbmdTZWNvbmRzID0gZ2V0UG9tb2Rvcm9SZW1haW5pbmdTZWNvbmRzKG5leHQsIG5vd01zKVxuICBpZiAocmVtYWluaW5nU2Vjb25kcyAhPT0gbmV4dC5yZW1haW5pbmdTZWNvbmRzKVxuICAgIG5leHQgPSB7IC4uLm5leHQsIHJlbWFpbmluZ1NlY29uZHMgfVxuXG4gIHJldHVybiB7IHN0YXRlOiBuZXh0LCBjb21wbGV0ZWRQaGFzZXMsIHRyYW5zaXRpb25lZCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZXZpYXRpb25FbGFwc2VkU2Vjb25kcyhzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgbm93TXM6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICghc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUgfHwgc3RhdGUuZGV2aWF0aW9uU3RhcnRlZEF0ID09PSBudWxsKVxuICAgIHJldHVybiAwXG5cbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGguZmxvb3IoKG5vd01zIC0gc3RhdGUuZGV2aWF0aW9uU3RhcnRlZEF0KSAvIDEwMDApKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW50ZXJQb21vZG9yb0RldmlhdGlvbihzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgbm93TXM6IG51bWJlcik6IFBvbW9kb3JvU3RhdGUge1xuICBpZiAoc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUgfHwgc3RhdGUucnVuU3RhdGUgIT09ICdydW5uaW5nJylcbiAgICByZXR1cm4gc3RhdGVcblxuICBjb25zdCByZW1haW5pbmdTZWNvbmRzID0gZ2V0UG9tb2Rvcm9SZW1haW5pbmdTZWNvbmRzKHN0YXRlLCBub3dNcylcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBydW5TdGF0ZTogJ3BhdXNlZCcsXG4gICAgcmVtYWluaW5nU2Vjb25kcyxcbiAgICBlbmRUaW1lc3RhbXA6IG51bGwsXG4gICAgaXNEZXZpYXRpb25BY3RpdmU6IHRydWUsXG4gICAgZGV2aWF0aW9uU3RhcnRlZEF0OiBub3dNcyxcbiAgICBkZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kczogcmVtYWluaW5nU2Vjb25kcyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhpdFBvbW9kb3JvRGV2aWF0aW9uKFxuICBzdGF0ZTogUG9tb2Rvcm9TdGF0ZSxcbiAgbm93TXM6IG51bWJlcixcbik6IHsgc3RhdGU6IFBvbW9kb3JvU3RhdGUsIGVsYXBzZWRTZWNvbmRzOiBudW1iZXIsIGNvbXBsZXRlZFdvcms6IGJvb2xlYW4sIG92ZXJ0aW1lU2Vjb25kczogbnVtYmVyIH0ge1xuICBpZiAoIXN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlKVxuICAgIHJldHVybiB7IHN0YXRlLCBlbGFwc2VkU2Vjb25kczogMCwgY29tcGxldGVkV29yazogZmFsc2UsIG92ZXJ0aW1lU2Vjb25kczogMCB9XG5cbiAgY29uc3QgZWxhcHNlZFNlY29uZHMgPSBnZXREZXZpYXRpb25FbGFwc2VkU2Vjb25kcyhzdGF0ZSwgbm93TXMpXG4gIGNvbnN0IGJhc2VSZW1haW5pbmcgPSBNYXRoLm1heCgwLCBzdGF0ZS5kZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kcylcblxuICBjb25zdCBjbGVhckRldmlhdGlvbiA9IChuZXh0OiBQb21vZG9yb1N0YXRlKTogUG9tb2Rvcm9TdGF0ZSA9PiAoe1xuICAgIC4uLm5leHQsXG4gICAgaXNEZXZpYXRpb25BY3RpdmU6IGZhbHNlLFxuICAgIGRldmlhdGlvblN0YXJ0ZWRBdDogbnVsbCxcbiAgICBkZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kczogMCxcbiAgICBwaGFzZURldmlhdGlvblNlY29uZHM6IG5leHQucGhhc2VEZXZpYXRpb25TZWNvbmRzICsgZWxhcHNlZFNlY29uZHMsXG4gIH0pXG5cbiAgaWYgKHN0YXRlLnBoYXNlICE9PSAnd29yaycpIHtcbiAgICBjb25zdCByZW1haW5pbmdTZWNvbmRzID0gTWF0aC5tYXgoMCwgYmFzZVJlbWFpbmluZyAtIGVsYXBzZWRTZWNvbmRzKVxuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZTogY2xlYXJEZXZpYXRpb24oe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcnVuU3RhdGU6ICdydW5uaW5nJyxcbiAgICAgICAgcmVtYWluaW5nU2Vjb25kcyxcbiAgICAgICAgZW5kVGltZXN0YW1wOiBub3dNcyArIHJlbWFpbmluZ1NlY29uZHMgKiAxMDAwLFxuICAgICAgfSksXG4gICAgICBlbGFwc2VkU2Vjb25kcyxcbiAgICAgIGNvbXBsZXRlZFdvcms6IGZhbHNlLFxuICAgICAgb3ZlcnRpbWVTZWNvbmRzOiAwLFxuICAgIH1cbiAgfVxuXG4gIGlmIChlbGFwc2VkU2Vjb25kcyA8IGJhc2VSZW1haW5pbmcpIHtcbiAgICBjb25zdCByZW1haW5pbmdTZWNvbmRzID0gTWF0aC5tYXgoMCwgYmFzZVJlbWFpbmluZyAtIGVsYXBzZWRTZWNvbmRzKVxuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZTogY2xlYXJEZXZpYXRpb24oe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcnVuU3RhdGU6ICdydW5uaW5nJyxcbiAgICAgICAgcmVtYWluaW5nU2Vjb25kcyxcbiAgICAgICAgZW5kVGltZXN0YW1wOiBub3dNcyArIHJlbWFpbmluZ1NlY29uZHMgKiAxMDAwLFxuICAgICAgfSksXG4gICAgICBlbGFwc2VkU2Vjb25kcyxcbiAgICAgIGNvbXBsZXRlZFdvcms6IGZhbHNlLFxuICAgICAgb3ZlcnRpbWVTZWNvbmRzOiAwLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG92ZXJ0aW1lU2Vjb25kcyA9IGVsYXBzZWRTZWNvbmRzIC0gYmFzZVJlbWFpbmluZ1xuICBjb25zdCBjb21wbGV0ZWRXb3JrQ3ljbGVzID0gc3RhdGUuY29tcGxldGVkV29ya0N5Y2xlcyArIDFcbiAgY29uc3QgbmV4dFBoYXNlOiBQb21vZG9yb1BoYXNlID0gY29tcGxldGVkV29ya0N5Y2xlcyAlIFBPTU9ET1JPX1dPUktfQ1lDTEVTX0JFRk9SRV9MT05HX0JSRUFLID09PSAwXG4gICAgPyAnbG9uZy1icmVhaydcbiAgICA6ICdzaG9ydC1icmVhaydcbiAgY29uc3QgYmFzZUJyZWFrU2Vjb25kcyA9IGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKHN0YXRlLmR1cmF0aW9ucywgbmV4dFBoYXNlKVxuICBjb25zdCB3b3JrRHVyYXRpb25TZWNvbmRzID0gTWF0aC5tYXgoMSwgZ2V0UGhhc2VEdXJhdGlvblNlY29uZHMoc3RhdGUuZHVyYXRpb25zLCAnd29yaycpKVxuICBjb25zdCBleHRyYUJyZWFrU2Vjb25kcyA9IE1hdGgucm91bmQoKG92ZXJ0aW1lU2Vjb25kcyAqIGJhc2VCcmVha1NlY29uZHMpIC8gd29ya0R1cmF0aW9uU2Vjb25kcylcbiAgY29uc3QgbmV4dEJyZWFrU2Vjb25kcyA9IGJhc2VCcmVha1NlY29uZHMgKyBleHRyYUJyZWFrU2Vjb25kc1xuXG4gIHJldHVybiB7XG4gICAgc3RhdGU6IGNsZWFyRGV2aWF0aW9uKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgcGhhc2U6IG5leHRQaGFzZSxcbiAgICAgIHJ1blN0YXRlOiAncnVubmluZycsXG4gICAgICBjb21wbGV0ZWRXb3JrQ3ljbGVzLFxuICAgICAgcmVtYWluaW5nU2Vjb25kczogbmV4dEJyZWFrU2Vjb25kcyxcbiAgICAgIGVuZFRpbWVzdGFtcDogbm93TXMgKyBuZXh0QnJlYWtTZWNvbmRzICogMTAwMCxcbiAgICB9KSxcbiAgICBlbGFwc2VkU2Vjb25kcyxcbiAgICBjb21wbGV0ZWRXb3JrOiB0cnVlLFxuICAgIG92ZXJ0aW1lU2Vjb25kcyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9tb2Rvcm9QaGFzZUxhYmVsKHBoYXNlOiBQb21vZG9yb1BoYXNlKTogc3RyaW5nIHtcbiAgaWYgKHBoYXNlID09PSAnc2hvcnQtYnJlYWsnKVxuICAgIHJldHVybiAnRGVzY2Fuc28gY29ydG8nXG5cbiAgaWYgKHBoYXNlID09PSAnbG9uZy1icmVhaycpXG4gICAgcmV0dXJuICdEZXNjYW5zbyBsYXJnbydcblxuICByZXR1cm4gJ1RyYWJham8nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQb21vZG9yb0NvdW50ZG93bih0b3RhbFNlY29uZHM6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDYwKVxuICBjb25zdCBzZWNvbmRzID0gdG90YWxTZWNvbmRzICUgNjBcbiAgcmV0dXJuIGAke1N0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCAnMCcpfToke1N0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpfWBcbn1cblxuZnVuY3Rpb24gY2xhbXBNaW51dGVzKHZhbHVlOiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgfHwgIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpXG4gICAgcmV0dXJuIGZhbGxiYWNrXG5cbiAgcmV0dXJuIE1hdGgubWluKE1BWF9EVVJBVElPTl9NSU5VVEVTLCBNYXRoLm1heChNSU5fRFVSQVRJT05fTUlOVVRFUywgTWF0aC5yb3VuZCh2YWx1ZSkpKVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQb21vZG9yb1BoYXNlKHZhbHVlOiB1bmtub3duKTogUG9tb2Rvcm9QaGFzZSB7XG4gIGlmICh2YWx1ZSA9PT0gJ3dvcmsnIHx8IHZhbHVlID09PSAnc2hvcnQtYnJlYWsnIHx8IHZhbHVlID09PSAnbG9uZy1icmVhaycpXG4gICAgcmV0dXJuIHZhbHVlXG5cbiAgcmV0dXJuICd3b3JrJ1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQb21vZG9yb1J1blN0YXRlKHZhbHVlOiB1bmtub3duKTogUG9tb2Rvcm9SdW5TdGF0ZSB7XG4gIGlmICh2YWx1ZSA9PT0gJ2lkbGUnIHx8IHZhbHVlID09PSAncnVubmluZycgfHwgdmFsdWUgPT09ICdwYXVzZWQnKVxuICAgIHJldHVybiB2YWx1ZVxuXG4gIHJldHVybiAnaWRsZSdcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplU2Vjb25kcyh2YWx1ZTogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInIHx8ICFOdW1iZXIuaXNGaW5pdGUodmFsdWUpKVxuICAgIHJldHVybiBmYWxsYmFja1xuXG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLmZsb29yKHZhbHVlKSlcbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQge1xuICBDQU5DRUxMRURfVEFTS19JTkRFWF9CQVNFTkFNRSxcbiAgQ0FOQ0VMTEVEX1RBU0tTX0ZPTERFUixcbiAgQ09NUExFVEVEX1RBU0tTX0ZPTERFUixcbiAgREVGQVVMVF9CT0FSRF9OQU1FLFxuICBGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FLFxuICBJTkRFWF9UQUcsXG4gIExFR0FDWV9DT01QTEVURURfVEFTS1NfRk9MREVSLFxuICBUQVJFQVNfRk9MREVSLFxuICBUQVNLX0lOREVYX0JBU0VOQU1FLFxufSBmcm9tICcuLi9jb25zdGFudHMnXG5cbmNvbnN0IFRBU0tfSU5ERVhfRklMRU5BTUUgPSBgJHtUQVNLX0lOREVYX0JBU0VOQU1FfS5tZGBcbmNvbnN0IFRBU0tfSU5ERVhfUEFUSCA9IGAke1RBUkVBU19GT0xERVJ9LyR7VEFTS19JTkRFWF9GSUxFTkFNRX1gXG5jb25zdCBGSU5JU0hFRF9UQVNLX0lOREVYX0ZJTEVOQU1FID0gYCR7RklOSVNIRURfVEFTS19JTkRFWF9CQVNFTkFNRX0ubWRgXG5jb25zdCBGSU5JU0hFRF9UQVNLX0lOREVYX1BBVEggPSBgJHtDT01QTEVURURfVEFTS1NfRk9MREVSfS8ke0ZJTklTSEVEX1RBU0tfSU5ERVhfRklMRU5BTUV9YFxuY29uc3QgQ0FOQ0VMTEVEX1RBU0tfSU5ERVhfRklMRU5BTUUgPSBgJHtDQU5DRUxMRURfVEFTS19JTkRFWF9CQVNFTkFNRX0ubWRgXG5jb25zdCBDQU5DRUxMRURfVEFTS19JTkRFWF9QQVRIID0gYCR7Q0FOQ0VMTEVEX1RBU0tTX0ZPTERFUn0vJHtDQU5DRUxMRURfVEFTS19JTkRFWF9GSUxFTkFNRX1gXG5jb25zdCBCT0FSRF9UQVNLX0lOREVYX1NVRkZJWCA9ICdUYXNrSW5kZXgnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnN1cmVUYXNrSW5kZXhGaWxlKGFwcDogb2JzaWRpYW4uQXBwKTogUHJvbWlzZTxvYnNpZGlhbi5URmlsZSB8IG51bGw+IHtcbiAgY29uc3QgaW5kZXhGaWxlID0gYXdhaXQgZW5zdXJlSW5kZXhGaWxlKGFwcCwgVEFSRUFTX0ZPTERFUiwgVEFTS19JTkRFWF9QQVRIKVxuICBpZiAoIWluZGV4RmlsZSlcbiAgICByZXR1cm4gbnVsbFxuXG4gIGF3YWl0IHN5bmNSb290VGFza0luZGV4TGlua3MoYXBwKVxuICByZXR1cm4gaW5kZXhGaWxlXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnN1cmVGaW5pc2hlZFRhc2tJbmRleEZpbGUoYXBwOiBvYnNpZGlhbi5BcHApOiBQcm9taXNlPG9ic2lkaWFuLlRGaWxlIHwgbnVsbD4ge1xuICByZXR1cm4gZW5zdXJlSW5kZXhGaWxlKGFwcCwgQ09NUExFVEVEX1RBU0tTX0ZPTERFUiwgRklOSVNIRURfVEFTS19JTkRFWF9QQVRIKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW5zdXJlQ2FuY2VsbGVkVGFza0luZGV4RmlsZShhcHA6IG9ic2lkaWFuLkFwcCk6IFByb21pc2U8b2JzaWRpYW4uVEZpbGUgfCBudWxsPiB7XG4gIHJldHVybiBlbnN1cmVJbmRleEZpbGUoYXBwLCBDQU5DRUxMRURfVEFTS1NfRk9MREVSLCBDQU5DRUxMRURfVEFTS19JTkRFWF9QQVRIKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBwZW5kVGFza0xpbmtUb0luZGV4KGFwcDogb2JzaWRpYW4uQXBwLCB0YXNrRmlsZTogb2JzaWRpYW4uVEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgYm9hcmROYW1lID0gcmVzb2x2ZUFjdGl2ZVRhc2tCb2FyZChhcHAsIHRhc2tGaWxlKVxuICBjb25zdCBib2FyZEluZGV4UGF0aCA9IGdldEJvYXJkVGFza0luZGV4UGF0aChib2FyZE5hbWUpXG4gIGF3YWl0IGFwcGVuZFRhc2tMaW5rVG9JbmRleEZpbGUoYXBwLCB0YXNrRmlsZSwgYm9hcmRJbmRleFBhdGgsICgpID0+IGVuc3VyZUJvYXJkVGFza0luZGV4RmlsZShhcHAsIGJvYXJkTmFtZSkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBlbmRUYXNrTGlua1RvRmluaXNoZWRJbmRleChhcHA6IG9ic2lkaWFuLkFwcCwgdGFza0ZpbGU6IG9ic2lkaWFuLlRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IGFwcGVuZFRhc2tMaW5rVG9JbmRleEZpbGUoYXBwLCB0YXNrRmlsZSwgRklOSVNIRURfVEFTS19JTkRFWF9QQVRILCAoKSA9PiBlbnN1cmVGaW5pc2hlZFRhc2tJbmRleEZpbGUoYXBwKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcGVuZFRhc2tMaW5rVG9DYW5jZWxsZWRJbmRleChhcHA6IG9ic2lkaWFuLkFwcCwgdGFza0ZpbGU6IG9ic2lkaWFuLlRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IGFwcGVuZFRhc2tMaW5rVG9JbmRleEZpbGUoYXBwLCB0YXNrRmlsZSwgQ0FOQ0VMTEVEX1RBU0tfSU5ERVhfUEFUSCwgKCkgPT4gZW5zdXJlQ2FuY2VsbGVkVGFza0luZGV4RmlsZShhcHApKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlVGFza0xpbmtGcm9tSW5kZXgoYXBwOiBvYnNpZGlhbi5BcHAsIHRhc2tGaWxlOiBvYnNpZGlhbi5URmlsZSk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBib2FyZE5hbWVzID0gYXdhaXQgZ2V0Qm9hcmRGb2xkZXJOYW1lcyhhcHApXG4gIGZvciAoY29uc3QgYm9hcmROYW1lIG9mIGJvYXJkTmFtZXMpXG4gICAgYXdhaXQgcmVtb3ZlVGFza0xpbmtGcm9tSW5kZXhGaWxlKGFwcCwgdGFza0ZpbGUsIGdldEJvYXJkVGFza0luZGV4UGF0aChib2FyZE5hbWUpKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlVGFza0xpbmtGcm9tRmluaXNoZWRJbmRleChhcHA6IG9ic2lkaWFuLkFwcCwgdGFza0ZpbGU6IG9ic2lkaWFuLlRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IHJlbW92ZVRhc2tMaW5rRnJvbUluZGV4RmlsZShhcHAsIHRhc2tGaWxlLCBGSU5JU0hFRF9UQVNLX0lOREVYX1BBVEgpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVUYXNrTGlua0Zyb21DYW5jZWxsZWRJbmRleChhcHA6IG9ic2lkaWFuLkFwcCwgdGFza0ZpbGU6IG9ic2lkaWFuLlRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IHJlbW92ZVRhc2tMaW5rRnJvbUluZGV4RmlsZShhcHAsIHRhc2tGaWxlLCBDQU5DRUxMRURfVEFTS19JTkRFWF9QQVRIKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm9hcmRUYXNrSW5kZXhCYXNlbmFtZShib2FyZE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVCb2FyZE5hbWUoYm9hcmROYW1lKVxuICByZXR1cm4gYCR7bm9ybWFsaXplZH0ke0JPQVJEX1RBU0tfSU5ERVhfU1VGRklYfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvYXJkVGFza0luZGV4UGF0aChib2FyZE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVCb2FyZE5hbWUoYm9hcmROYW1lKVxuICBjb25zdCBmaWxlTmFtZSA9IGAke2dldEJvYXJkVGFza0luZGV4QmFzZW5hbWUobm9ybWFsaXplZCl9Lm1kYFxuICByZXR1cm4gYCR7VEFSRUFTX0ZPTERFUn0vJHtub3JtYWxpemVkfS8ke2ZpbGVOYW1lfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQm9hcmRUYXNrSW5kZXhQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoIXBhdGguc3RhcnRzV2l0aChgJHtUQVJFQVNfRk9MREVSfS9gKSB8fCAhcGF0aC5lbmRzV2l0aCgnLm1kJykpXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAgY29uc3QgcmVsYXRpdmVQYXRoID0gcGF0aC5zbGljZShgJHtUQVJFQVNfRk9MREVSfS9gLmxlbmd0aClcbiAgY29uc3Qgc2VnbWVudHMgPSByZWxhdGl2ZVBhdGguc3BsaXQoJy8nKVxuICBpZiAoc2VnbWVudHMubGVuZ3RoICE9PSAyKVxuICAgIHJldHVybiBmYWxzZVxuXG4gIGNvbnN0IFtib2FyZE5hbWUsIGZpbGVOYW1lXSA9IHNlZ21lbnRzXG4gIGlmICghYm9hcmROYW1lKVxuICAgIHJldHVybiBmYWxzZVxuXG4gIGNvbnN0IGV4cGVjdGVkRmlsZU5hbWUgPSBgJHtnZXRCb2FyZFRhc2tJbmRleEJhc2VuYW1lKGJvYXJkTmFtZSl9Lm1kYFxuICByZXR1cm4gZmlsZU5hbWUgPT09IGV4cGVjdGVkRmlsZU5hbWVcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuc3VyZUJvYXJkVGFza0luZGV4RmlsZShhcHA6IG9ic2lkaWFuLkFwcCwgYm9hcmROYW1lOiBzdHJpbmcpOiBQcm9taXNlPG9ic2lkaWFuLlRGaWxlIHwgbnVsbD4ge1xuICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplQm9hcmROYW1lKGJvYXJkTmFtZSlcbiAgY29uc3QgZm9sZGVyUGF0aCA9IGAke1RBUkVBU19GT0xERVJ9LyR7bm9ybWFsaXplZH1gXG4gIGNvbnN0IGluZGV4UGF0aCA9IGdldEJvYXJkVGFza0luZGV4UGF0aChub3JtYWxpemVkKVxuICByZXR1cm4gZW5zdXJlSW5kZXhGaWxlKGFwcCwgZm9sZGVyUGF0aCwgaW5kZXhQYXRoKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3luY1Jvb3RUYXNrSW5kZXhMaW5rcyhhcHA6IG9ic2lkaWFuLkFwcCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCByb290SW5kZXggPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKFRBU0tfSU5ERVhfUEFUSClcbiAgaWYgKCEocm9vdEluZGV4IGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZpbGUpKVxuICAgIHJldHVyblxuXG4gIGNvbnN0IGJvYXJkTmFtZXMgPSBhd2FpdCBnZXRCb2FyZEZvbGRlck5hbWVzKGFwcClcbiAgY29uc3QgbGlua3MgPSBib2FyZE5hbWVzXG4gICAgLm1hcChib2FyZE5hbWUgPT4gYFtbJHtib2FyZE5hbWV9LyR7Z2V0Qm9hcmRUYXNrSW5kZXhCYXNlbmFtZShib2FyZE5hbWUpfV1dYClcbiAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKVxuXG4gIGNvbnN0IGRlZmF1bHRMaW5rID0gYFtbJHtERUZBVUxUX0JPQVJEX05BTUV9LyR7Z2V0Qm9hcmRUYXNrSW5kZXhCYXNlbmFtZShERUZBVUxUX0JPQVJEX05BTUUpfV1dYFxuICBjb25zdCBmaW5pc2hlZExpbmsgPSBgW1tmaW5pc2hlZC8ke0ZJTklTSEVEX1RBU0tfSU5ERVhfQkFTRU5BTUV9XV1gXG4gIGNvbnN0IGNhbmNlbGxlZExpbmsgPSBgW1tjYW5jZWxsZWQvJHtDQU5DRUxMRURfVEFTS19JTkRFWF9CQVNFTkFNRX1dXWBcbiAgY29uc3Qgb3JkZXJlZExpbmtzID0gW1xuICAgIGRlZmF1bHRMaW5rLFxuICAgIC4uLmxpbmtzLmZpbHRlcihsaW5rID0+IGxpbmsgIT09IGRlZmF1bHRMaW5rKSxcbiAgICBmaW5pc2hlZExpbmssXG4gICAgY2FuY2VsbGVkTGluayxcbiAgXVxuICBjb25zdCBuZXh0Q29udGVudCA9IGJ1aWxkSW5kZXhDb250ZW50KG9yZGVyZWRMaW5rcylcbiAgY29uc3QgY3VycmVudENvbnRlbnQgPSBhd2FpdCBhcHAudmF1bHQuY2FjaGVkUmVhZChyb290SW5kZXgpXG4gIGlmIChjdXJyZW50Q29udGVudCA9PT0gbmV4dENvbnRlbnQpXG4gICAgcmV0dXJuXG5cbiAgYXdhaXQgYXBwLnZhdWx0Lm1vZGlmeShyb290SW5kZXgsIG5leHRDb250ZW50KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3luY0JvYXJkVGFza0luZGV4TGlua3MoYXBwOiBvYnNpZGlhbi5BcHAsIGJvYXJkTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IG5vcm1hbGl6ZWRCb2FyZE5hbWUgPSBub3JtYWxpemVCb2FyZE5hbWUoYm9hcmROYW1lKVxuICBjb25zdCBib2FyZEZvbGRlclByZWZpeCA9IGAke1RBUkVBU19GT0xERVJ9LyR7bm9ybWFsaXplZEJvYXJkTmFtZX0vYFxuICBjb25zdCBib2FyZEluZGV4UGF0aCA9IGdldEJvYXJkVGFza0luZGV4UGF0aChub3JtYWxpemVkQm9hcmROYW1lKVxuICBjb25zdCBib2FyZEluZGV4ID0gYXdhaXQgZW5zdXJlQm9hcmRUYXNrSW5kZXhGaWxlKGFwcCwgbm9ybWFsaXplZEJvYXJkTmFtZSlcbiAgaWYgKCFib2FyZEluZGV4KVxuICAgIHJldHVyblxuXG4gIGNvbnN0IGxpbmtzID0gYXBwLnZhdWx0XG4gICAgLmdldE1hcmtkb3duRmlsZXMoKVxuICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLnBhdGguc3RhcnRzV2l0aChib2FyZEZvbGRlclByZWZpeCkpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUucGF0aCAhPT0gYm9hcmRJbmRleFBhdGgpXG4gICAgLmZpbHRlcihmaWxlID0+ICFpc0JvYXJkVGFza0luZGV4UGF0aChmaWxlLnBhdGgpKVxuICAgIC5tYXAoZmlsZSA9PiBgW1ske2ZpbGUuYmFzZW5hbWV9XV1gKVxuICAgIC5zb3J0KChhLCBiKSA9PiBhLmxvY2FsZUNvbXBhcmUoYikpXG5cbiAgY29uc3QgbmV4dENvbnRlbnQgPSBidWlsZEluZGV4Q29udGVudChsaW5rcylcbiAgY29uc3QgY3VycmVudENvbnRlbnQgPSBhd2FpdCBhcHAudmF1bHQuY2FjaGVkUmVhZChib2FyZEluZGV4KVxuICBpZiAoY3VycmVudENvbnRlbnQgPT09IG5leHRDb250ZW50KVxuICAgIHJldHVyblxuXG4gIGF3YWl0IGFwcC52YXVsdC5tb2RpZnkoYm9hcmRJbmRleCwgbmV4dENvbnRlbnQpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzeW5jQWxsQm9hcmRUYXNrSW5kZXhMaW5rcyhhcHA6IG9ic2lkaWFuLkFwcCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBib2FyZE5hbWVzID0gYXdhaXQgZ2V0Qm9hcmRGb2xkZXJOYW1lcyhhcHApXG4gIGZvciAoY29uc3QgYm9hcmROYW1lIG9mIGJvYXJkTmFtZXMpXG4gICAgYXdhaXQgc3luY0JvYXJkVGFza0luZGV4TGlua3MoYXBwLCBib2FyZE5hbWUpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzeW5jRmluaXNoZWRUYXNrSW5kZXhMaW5rcyhhcHA6IG9ic2lkaWFuLkFwcCk6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBzeW5jVGVybWluYWxUYXNrSW5kZXhMaW5rcyhhcHAsIENPTVBMRVRFRF9UQVNLU19GT0xERVIsIEZJTklTSEVEX1RBU0tfSU5ERVhfUEFUSCwgKCkgPT4gZW5zdXJlRmluaXNoZWRUYXNrSW5kZXhGaWxlKGFwcCkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzeW5jQ2FuY2VsbGVkVGFza0luZGV4TGlua3MoYXBwOiBvYnNpZGlhbi5BcHApOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgc3luY1Rlcm1pbmFsVGFza0luZGV4TGlua3MoYXBwLCBDQU5DRUxMRURfVEFTS1NfRk9MREVSLCBDQU5DRUxMRURfVEFTS19JTkRFWF9QQVRILCAoKSA9PiBlbnN1cmVDYW5jZWxsZWRUYXNrSW5kZXhGaWxlKGFwcCkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzeW5jQWxsVGFza0luZGV4ZXMoYXBwOiBvYnNpZGlhbi5BcHApOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgZW5zdXJlVGFza0luZGV4RmlsZShhcHApXG4gIGF3YWl0IGVuc3VyZUZpbmlzaGVkVGFza0luZGV4RmlsZShhcHApXG4gIGF3YWl0IGVuc3VyZUNhbmNlbGxlZFRhc2tJbmRleEZpbGUoYXBwKVxuICBhd2FpdCBzeW5jQWxsQm9hcmRUYXNrSW5kZXhMaW5rcyhhcHApXG4gIGF3YWl0IHN5bmNGaW5pc2hlZFRhc2tJbmRleExpbmtzKGFwcClcbiAgYXdhaXQgc3luY0NhbmNlbGxlZFRhc2tJbmRleExpbmtzKGFwcClcbiAgYXdhaXQgc3luY1Jvb3RUYXNrSW5kZXhMaW5rcyhhcHApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZUluZGV4RmlsZShcbiAgYXBwOiBvYnNpZGlhbi5BcHAsXG4gIGZvbGRlclBhdGg6IHN0cmluZyxcbiAgZmlsZVBhdGg6IHN0cmluZyxcbik6IFByb21pc2U8b2JzaWRpYW4uVEZpbGUgfCBudWxsPiB7XG4gIGNvbnN0IGZvbGRlciA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZm9sZGVyUGF0aClcbiAgaWYgKCEoZm9sZGVyIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZvbGRlcikpXG4gICAgcmV0dXJuIG51bGxcblxuICBjb25zdCBleGlzdGluZyA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZmlsZVBhdGgpXG4gIGlmIChleGlzdGluZyBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGaWxlKVxuICAgIHJldHVybiBleGlzdGluZ1xuXG4gIGlmIChleGlzdGluZylcbiAgICByZXR1cm4gbnVsbFxuXG4gIHRyeSB7XG4gICAgY29uc3QgaW5pdGlhbENvbnRlbnQgPSBbJy0tLScsIGB0YWdzOiBbJHtJTkRFWF9UQUd9XWAsICctLS0nLCAnJ10uam9pbignXFxuJylcbiAgICByZXR1cm4gYXdhaXQgYXBwLnZhdWx0LmNyZWF0ZShmaWxlUGF0aCwgaW5pdGlhbENvbnRlbnQpXG4gIH1cbiAgY2F0Y2gge1xuICAgIGNvbnN0IHJldHJ5ID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmaWxlUGF0aClcbiAgICByZXR1cm4gcmV0cnkgaW5zdGFuY2VvZiBvYnNpZGlhbi5URmlsZSA/IHJldHJ5IDogbnVsbFxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEJvYXJkRm9sZGVyTmFtZXMoYXBwOiBvYnNpZGlhbi5BcHApOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGNvbnN0IHJvb3RGb2xkZXIgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKFRBUkVBU19GT0xERVIpXG4gIGlmICghKHJvb3RGb2xkZXIgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKSlcbiAgICByZXR1cm4gW0RFRkFVTFRfQk9BUkRfTkFNRV1cblxuICBjb25zdCBib2FyZE5hbWVzID0gcm9vdEZvbGRlci5jaGlsZHJlblxuICAgIC5maWx0ZXIoKGNoaWxkKTogY2hpbGQgaXMgb2JzaWRpYW4uVEZvbGRlciA9PiBjaGlsZCBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGb2xkZXIpXG4gICAgLm1hcChmb2xkZXIgPT4gZm9sZGVyLm5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCkpXG4gICAgLmZpbHRlcihuYW1lID0+IEJvb2xlYW4obmFtZSlcbiAgICAgICYmIG5hbWUgIT09IENPTVBMRVRFRF9UQVNLU19GT0xERVIuc3BsaXQoJy8nKS5wb3AoKVxuICAgICAgJiYgbmFtZSAhPT0gQ0FOQ0VMTEVEX1RBU0tTX0ZPTERFUi5zcGxpdCgnLycpLnBvcCgpXG4gICAgICAmJiBuYW1lICE9PSBMRUdBQ1lfQ09NUExFVEVEX1RBU0tTX0ZPTERFUi5zcGxpdCgnLycpLnBvcCgpKVxuXG4gIGlmICghYm9hcmROYW1lcy5pbmNsdWRlcyhERUZBVUxUX0JPQVJEX05BTUUpKVxuICAgIGJvYXJkTmFtZXMucHVzaChERUZBVUxUX0JPQVJEX05BTUUpXG5cbiAgcmV0dXJuIGJvYXJkTmFtZXNcbn1cblxuYXN5bmMgZnVuY3Rpb24gYXBwZW5kVGFza0xpbmtUb0luZGV4RmlsZShcbiAgYXBwOiBvYnNpZGlhbi5BcHAsXG4gIHRhc2tGaWxlOiBvYnNpZGlhbi5URmlsZSxcbiAgaW5kZXhQYXRoOiBzdHJpbmcsXG4gIGVuc3VyZUluZGV4OiAoKSA9PiBQcm9taXNlPG9ic2lkaWFuLlRGaWxlIHwgbnVsbD4sXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKHRhc2tGaWxlLnBhdGggPT09IGluZGV4UGF0aClcbiAgICByZXR1cm5cblxuICBjb25zdCBpbmRleEZpbGUgPSBhd2FpdCBlbnN1cmVJbmRleCgpXG4gIGlmICghaW5kZXhGaWxlKVxuICAgIHJldHVyblxuXG4gIGNvbnN0IGxpbmtMaW5lID0gYFtbJHt0YXNrRmlsZS5iYXNlbmFtZX1dXWBcbiAgY29uc3QgY3VycmVudCA9IGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKGluZGV4RmlsZSlcbiAgY29uc3QgbGluZXMgPSBjdXJyZW50LnNwbGl0KCdcXG4nKS5tYXAobGluZSA9PiBsaW5lLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pXG4gIGlmIChsaW5lcy5pbmNsdWRlcyhsaW5rTGluZSkpXG4gICAgcmV0dXJuXG5cbiAgY29uc3Qgc2VwYXJhdG9yID0gY3VycmVudC5sZW5ndGggPiAwICYmICFjdXJyZW50LmVuZHNXaXRoKCdcXG4nKSA/ICdcXG4nIDogJydcbiAgY29uc3QgbmV4dCA9IGAke2N1cnJlbnR9JHtzZXBhcmF0b3J9JHtsaW5rTGluZX1cXG5gXG4gIGF3YWl0IGFwcC52YXVsdC5tb2RpZnkoaW5kZXhGaWxlLCBuZXh0KVxufVxuXG5hc3luYyBmdW5jdGlvbiByZW1vdmVUYXNrTGlua0Zyb21JbmRleEZpbGUoXG4gIGFwcDogb2JzaWRpYW4uQXBwLFxuICB0YXNrRmlsZTogb2JzaWRpYW4uVEZpbGUsXG4gIGluZGV4UGF0aDogc3RyaW5nLFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmICh0YXNrRmlsZS5wYXRoID09PSBpbmRleFBhdGgpXG4gICAgcmV0dXJuXG5cbiAgY29uc3QgaW5kZXhGaWxlID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChpbmRleFBhdGgpXG4gIGlmICghKGluZGV4RmlsZSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGaWxlKSlcbiAgICByZXR1cm5cblxuICBjb25zdCBsaW5rTGluZSA9IGBbWyR7dGFza0ZpbGUuYmFzZW5hbWV9XV1gXG4gIGNvbnN0IGxpbmVzID0gKGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKGluZGV4RmlsZSkpLnNwbGl0KCdcXG4nKVxuICBjb25zdCBmaWx0ZXJlZCA9IGxpbmVzLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSBsaW5rTGluZSlcblxuICBpZiAoZmlsdGVyZWQubGVuZ3RoID09PSBsaW5lcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgY29uc3QgbmV4dCA9IGZpbHRlcmVkLmpvaW4oJ1xcbicpXG4gIGF3YWl0IGFwcC52YXVsdC5tb2RpZnkoaW5kZXhGaWxlLCBuZXh0KVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQWN0aXZlVGFza0JvYXJkKGFwcDogb2JzaWRpYW4uQXBwLCB0YXNrRmlsZTogb2JzaWRpYW4uVEZpbGUpOiBzdHJpbmcge1xuICBjb25zdCBmcm9udG1hdHRlciA9IGFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZSh0YXNrRmlsZSk/LmZyb250bWF0dGVyXG4gIGNvbnN0IHJhd0JvYXJkID0gdHlwZW9mIGZyb250bWF0dGVyPy50YWJsZXJvID09PSAnc3RyaW5nJ1xuICAgID8gZnJvbnRtYXR0ZXIudGFibGVyby50cmltKCkudG9Mb3dlckNhc2UoKVxuICAgIDogJydcbiAgaWYgKHJhd0JvYXJkKVxuICAgIHJldHVybiByYXdCb2FyZFxuXG4gIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHRhc2tGaWxlLnBhdGguc3RhcnRzV2l0aChgJHtUQVJFQVNfRk9MREVSfS9gKVxuICAgID8gdGFza0ZpbGUucGF0aC5zbGljZShgJHtUQVJFQVNfRk9MREVSfS9gLmxlbmd0aClcbiAgICA6ICcnXG4gIGNvbnN0IGJvYXJkRnJvbVBhdGggPSByZWxhdGl2ZVBhdGguc3BsaXQoJy8nKVswXT8udHJpbSgpLnRvTG93ZXJDYXNlKCkgfHwgJydcbiAgcmV0dXJuIG5vcm1hbGl6ZUJvYXJkTmFtZShib2FyZEZyb21QYXRoKVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVCb2FyZE5hbWUoYm9hcmROYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBub3JtYWxpemVkID0gYm9hcmROYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiBub3JtYWxpemVkIHx8IERFRkFVTFRfQk9BUkRfTkFNRVxufVxuXG5mdW5jdGlvbiBidWlsZEluZGV4Q29udGVudChsaW5lczogc3RyaW5nW10pOiBzdHJpbmcge1xuICByZXR1cm4gWyctLS0nLCBgdGFnczogWyR7SU5ERVhfVEFHfV1gLCAnLS0tJywgJycsIC4uLmxpbmVzLCAnJ10uam9pbignXFxuJylcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3luY1Rlcm1pbmFsVGFza0luZGV4TGlua3MoXG4gIGFwcDogb2JzaWRpYW4uQXBwLFxuICBmb2xkZXJQYXRoOiBzdHJpbmcsXG4gIGluZGV4UGF0aDogc3RyaW5nLFxuICBlbnN1cmVJbmRleDogKCkgPT4gUHJvbWlzZTxvYnNpZGlhbi5URmlsZSB8IG51bGw+LFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGluZGV4RmlsZSA9IGF3YWl0IGVuc3VyZUluZGV4KClcbiAgaWYgKCFpbmRleEZpbGUpXG4gICAgcmV0dXJuXG5cbiAgY29uc3QgbGlua3MgPSBhcHAudmF1bHRcbiAgICAuZ2V0TWFya2Rvd25GaWxlcygpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUucGF0aC5zdGFydHNXaXRoKGAke2ZvbGRlclBhdGh9L2ApKVxuICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLnBhdGggIT09IGluZGV4UGF0aClcbiAgICAubWFwKGZpbGUgPT4gYFtbJHtmaWxlLmJhc2VuYW1lfV1dYClcbiAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKVxuXG4gIGNvbnN0IG5leHRDb250ZW50ID0gYnVpbGRJbmRleENvbnRlbnQobGlua3MpXG4gIGNvbnN0IGN1cnJlbnRDb250ZW50ID0gYXdhaXQgYXBwLnZhdWx0LmNhY2hlZFJlYWQoaW5kZXhGaWxlKVxuICBpZiAoY3VycmVudENvbnRlbnQgPT09IG5leHRDb250ZW50KVxuICAgIHJldHVyblxuXG4gIGF3YWl0IGFwcC52YXVsdC5tb2RpZnkoaW5kZXhGaWxlLCBuZXh0Q29udGVudClcbn1cbiIsImltcG9ydCB0eXBlIHsgQXBwLCBURmlsZSB9IGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQge1xuICBDQU5DRUxMRURfVEFTS19JTkRFWF9CQVNFTkFNRSxcbiAgRklOSVNIRURfVEFTS19JTkRFWF9CQVNFTkFNRSxcbiAgSU5ERVhfVEFHLFxuICBTVUJUQVNLX1RBRyxcbiAgVEFSRUFTX0ZPTERFUixcbiAgVEFTS19JTkRFWF9CQVNFTkFNRSxcbiAgVEFTS19UQUcsXG59IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB7IGlzQm9hcmRUYXNrSW5kZXhQYXRoIH0gZnJvbSAnLi90YXNrSW5kZXhFbmdpbmUnXG5pbXBvcnQgdHlwZSB7IFRhc2tGcm9udG1hdHRlciB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgdG9UYXNrRnJvbnRtYXR0ZXIgfSBmcm9tICcuLi91dGlscy9ndWFyZHMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVGcm9udG1hdHRlcihhcHA6IEFwcCwgZmlsZTogVEZpbGUsIHVwZGF0ZXM6IFBhcnRpYWw8VGFza0Zyb250bWF0dGVyPikge1xuICBhd2FpdCBhcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKGZpbGUsIChmbSkgPT4ge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHVwZGF0ZXMpKVxuICAgICAgZm1ba2V5XSA9IHZhbHVlXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5hbWVUZWFtSW5UYXNrcyhhcHA6IEFwcCwgb2xkTmFtZTogc3RyaW5nLCBuZXdOYW1lOiBzdHJpbmcsIGJvYXJkTmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IGZpbGVzID0gYXBwLnZhdWx0XG4gICAgLmdldE1hcmtkb3duRmlsZXMoKVxuICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLnBhdGguc3RhcnRzV2l0aChgJHtUQVJFQVNfRk9MREVSfS9gKSlcblxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBmbSA9IHRvVGFza0Zyb250bWF0dGVyKGFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKT8uZnJvbnRtYXR0ZXIpXG4gICAgaWYgKGZtPy5lcXVpcG8gIT09IG9sZE5hbWUgfHwgKGZtPy50YWJsZXJvIHx8ICcnKS50cmltKCkudG9Mb3dlckNhc2UoKSAhPT0gYm9hcmROYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgY29udGludWVcblxuICAgIGF3YWl0IGFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIoZmlsZSwgKGZyb250bWF0dGVyKSA9PiB7XG4gICAgICBmcm9udG1hdHRlci5lcXVpcG8gPSBuZXdOYW1lXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY291bnRUb3BMZXZlbFRlYW1UYXNrcyhhcHA6IEFwcCwgdGVhbU5hbWU6IHN0cmluZywgYm9hcmROYW1lOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBmaWxlcyA9IGFwcC52YXVsdFxuICAgIC5nZXRNYXJrZG93bkZpbGVzKClcbiAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5wYXRoLnN0YXJ0c1dpdGgoYCR7VEFSRUFTX0ZPTERFUn0vYCkpXG5cbiAgbGV0IGNvdW50ID0gMFxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBmbSA9IHRvVGFza0Zyb250bWF0dGVyKGFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKT8uZnJvbnRtYXR0ZXIpXG4gICAgaWYgKGZtPy5lcXVpcG8gPT09IHRlYW1OYW1lXG4gICAgICAmJiAoZm0/LnRhYmxlcm8gfHwgJycpLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBib2FyZE5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICAgICYmICFmbT8ucGFyZW50KVxuICAgICAgY291bnQrK1xuICB9XG5cbiAgcmV0dXJuIGNvdW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWJ1aWxkVGFza0NoaWxkTGlua3MoYXBwOiBBcHApIHtcbiAgY29uc3QgZmlsZXMgPSBhcHAudmF1bHRcbiAgICAuZ2V0TWFya2Rvd25GaWxlcygpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUucGF0aC5zdGFydHNXaXRoKGAke1RBUkVBU19GT0xERVJ9L2ApKVxuICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLmJhc2VuYW1lICE9PSBUQVNLX0lOREVYX0JBU0VOQU1FXG4gICAgICAmJiBmaWxlLmJhc2VuYW1lICE9PSBGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FXG4gICAgICAmJiBmaWxlLmJhc2VuYW1lICE9PSBDQU5DRUxMRURfVEFTS19JTkRFWF9CQVNFTkFNRSlcblxuICBjb25zdCBjaGlsZE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBTZXQ8c3RyaW5nPj4oKVxuICBjb25zdCB0YXNrRW50cmllczogQXJyYXk8eyBmaWxlOiBURmlsZSwgdGFza05hbWU6IHN0cmluZyB9PiA9IFtdXG5cbiAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgY29uc3QgZm0gPSBhd2FpdCByZWFkVGFza0Zyb250bWF0dGVyKGFwcCwgZmlsZSlcbiAgICBpZiAoIWZtKVxuICAgICAgY29udGludWVcblxuICAgIGNvbnN0IHRhc2tOYW1lID0gKGZtPy50YXJlYT8udHJpbSgpIHx8IGZpbGUuYmFzZW5hbWUpLnRyaW0oKVxuICAgIHRhc2tFbnRyaWVzLnB1c2goeyBmaWxlLCB0YXNrTmFtZSB9KVxuXG4gICAgY29uc3QgcGFyZW50TmFtZSA9IG5vcm1hbGl6ZVBhcmVudFJlZmVyZW5jZShmbT8ucGFyZW50KVxuICAgIGlmICghcGFyZW50TmFtZSlcbiAgICAgIGNvbnRpbnVlXG5cbiAgICBjb25zdCBjaGlsZFNldCA9IGNoaWxkTWFwLmdldChwYXJlbnROYW1lKSA/PyBuZXcgU2V0PHN0cmluZz4oKVxuICAgIGNoaWxkU2V0LmFkZChmaWxlLmJhc2VuYW1lKVxuICAgIGNoaWxkTWFwLnNldChwYXJlbnROYW1lLCBjaGlsZFNldClcbiAgfVxuXG4gIGZvciAoY29uc3QgZW50cnkgb2YgdGFza0VudHJpZXMpIHtcbiAgICBjb25zdCB7IGZpbGUsIHRhc2tOYW1lIH0gPSBlbnRyeVxuICAgIGNvbnN0IGNoaWxkQmFzZW5hbWVzID0gbmV3IFNldDxzdHJpbmc+KFtcbiAgICAgIC4uLihjaGlsZE1hcC5nZXQoZmlsZS5iYXNlbmFtZSkgPz8gW10pLFxuICAgICAgLi4uKGNoaWxkTWFwLmdldCh0YXNrTmFtZSkgPz8gW10pLFxuICAgIF0pXG4gICAgY2hpbGRCYXNlbmFtZXMuZGVsZXRlKGZpbGUuYmFzZW5hbWUpXG5cbiAgICBjb25zdCBuZXh0Q2hpbGRMaW5rcyA9IEFycmF5LmZyb20oY2hpbGRCYXNlbmFtZXMpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKVxuICAgICAgLm1hcChuYW1lID0+IGBbWyR7bmFtZX1dXWApXG5cbiAgICBhd2FpdCBhcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKGZpbGUsIChmbSkgPT4ge1xuICAgICAgZm0uY2hpbGRzID0gbmV4dENoaWxkTGlua3NcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzeW5jVGFza1R5cGVUYWdzKGFwcDogQXBwKSB7XG4gIGNvbnN0IGZpbGVzID0gYXBwLnZhdWx0XG4gICAgLmdldE1hcmtkb3duRmlsZXMoKVxuICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLnBhdGguc3RhcnRzV2l0aChgJHtUQVJFQVNfRk9MREVSfS9gKSlcblxuICBjb25zdCBjbGFzc2lmaWNhdGlvblRhZ3MgPSBuZXcgU2V0KFtJTkRFWF9UQUcsIFRBU0tfVEFHLCBTVUJUQVNLX1RBR10pXG4gIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgIGNvbnN0IG5leHRDbGFzc2lmaWNhdGlvbiA9IHJlc29sdmVDbGFzc2lmaWNhdGlvblRhZyhmaWxlKVxuXG4gICAgYXdhaXQgYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcihmaWxlLCAoZnJvbnRtYXR0ZXIpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUYWdzID0gbm9ybWFsaXplVGFncyhmcm9udG1hdHRlci50YWdzKVxuICAgICAgY29uc3QgcHJlc2VydmVkVGFncyA9IGN1cnJlbnRUYWdzLmZpbHRlcih0YWcgPT4gIWNsYXNzaWZpY2F0aW9uVGFncy5oYXModGFnKSlcbiAgICAgIGZyb250bWF0dGVyLnRhZ3MgPSBbLi4ucHJlc2VydmVkVGFncywgbmV4dENsYXNzaWZpY2F0aW9uXVxuICAgIH0pXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVhZFRhc2tGcm9udG1hdHRlcihhcHA6IEFwcCwgZmlsZTogVEZpbGUpOiBQcm9taXNlPFRhc2tGcm9udG1hdHRlciB8IG51bGw+IHtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKGZpbGUpXG4gIGNvbnN0IG1hdGNoID0gY29udGVudC5tYXRjaCgvXi0tLVxccj9cXG4oW1xcc1xcU10qPylcXHI/XFxuLS0tLylcbiAgaWYgKCFtYXRjaClcbiAgICByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHJhd1lhbWwgPSBtYXRjaFsxXVxuICBjb25zdCBmcm9udG1hdHRlckRhdGEgPSBwYXJzZVNpbXBsZVlhbWwocmF3WWFtbClcbiAgcmV0dXJuIHRvVGFza0Zyb250bWF0dGVyKGZyb250bWF0dGVyRGF0YSlcbn1cblxuZnVuY3Rpb24gcGFyc2VTaW1wbGVZYW1sKHlhbWxUZXh0OiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIGNvbnN0IHJlc3VsdDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fVxuICBjb25zdCBsaW5lcyA9IHlhbWxUZXh0LnNwbGl0KC9cXHI/XFxuLylcbiAgbGV0IGluZGV4ID0gMFxuXG4gIHdoaWxlIChpbmRleCA8IGxpbmVzLmxlbmd0aCkge1xuICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpbmRleF1cbiAgICBpZiAoIWxpbmUudHJpbSgpKSB7XG4gICAgICBpbmRleCsrXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IGtleVZhbHVlTWF0Y2ggPSBsaW5lLm1hdGNoKC9eKFtBLVphLXowLTlfLV0rKTpcXHMqKC4qKSQvKVxuICAgIGlmICgha2V5VmFsdWVNYXRjaCkge1xuICAgICAgaW5kZXgrK1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBbLCBrZXksIHJhd1ZhbHVlXSA9IGtleVZhbHVlTWF0Y2hcbiAgICBjb25zdCB0cmltbWVkVmFsdWUgPSByYXdWYWx1ZS50cmltKClcblxuICAgIGlmICh0cmltbWVkVmFsdWUgPT09ICcnKSB7XG4gICAgICByZXN1bHRba2V5XSA9ICcnXG4gICAgICBpbmRleCsrXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmICh0cmltbWVkVmFsdWUgPT09ICdbXScpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gW11cbiAgICAgIGluZGV4KytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKHRyaW1tZWRWYWx1ZS5zdGFydHNXaXRoKCdbJykgJiYgdHJpbW1lZFZhbHVlLmVuZHNXaXRoKCddJykpIHtcbiAgICAgIGNvbnN0IGlubmVyID0gdHJpbW1lZFZhbHVlLnNsaWNlKDEsIC0xKS50cmltKClcbiAgICAgIGlmICghaW5uZXIpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBbXVxuICAgICAgICBpbmRleCsrXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHJlc3VsdFtrZXldID0gaW5uZXIuc3BsaXQoJywnKS5tYXAoaXRlbSA9PiB1bnF1b3RlWWFtbFZhbHVlKGl0ZW0udHJpbSgpKSlcbiAgICAgIGluZGV4KytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKHRyaW1tZWRWYWx1ZSA9PT0gJ3wnKSB7XG4gICAgICBjb25zdCBibG9ja0xpbmVzOiBzdHJpbmdbXSA9IFtdXG4gICAgICBpbmRleCsrXG4gICAgICB3aGlsZSAoaW5kZXggPCBsaW5lcy5sZW5ndGggJiYgL15cXHMrLy50ZXN0KGxpbmVzW2luZGV4XSkpIHtcbiAgICAgICAgYmxvY2tMaW5lcy5wdXNoKGxpbmVzW2luZGV4XS5yZXBsYWNlKC9eXFxzKy8sICcnKSlcbiAgICAgICAgaW5kZXgrK1xuICAgICAgfVxuICAgICAgcmVzdWx0W2tleV0gPSBibG9ja0xpbmVzLmpvaW4oJ1xcbicpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHJlc3VsdFtrZXldID0gdW5xdW90ZVlhbWxWYWx1ZSh0cmltbWVkVmFsdWUpXG4gICAgaW5kZXgrK1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiB1bnF1b3RlWWFtbFZhbHVlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnXCInKSAmJiB2YWx1ZS5lbmRzV2l0aCgnXCInKSlcbiAgICByZXR1cm4gdmFsdWUuc2xpY2UoMSwgLTEpLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuXG4gIGlmICh2YWx1ZS5zdGFydHNXaXRoKCdcXCcnKSAmJiB2YWx1ZS5lbmRzV2l0aCgnXFwnJykpXG4gICAgcmV0dXJuIHZhbHVlLnNsaWNlKDEsIC0xKVxuXG4gIHJldHVybiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQYXJlbnRSZWZlcmVuY2UocGFyZW50VmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gIGNvbnN0IHRyaW1tZWQgPSAocGFyZW50VmFsdWUgfHwgJycpLnRyaW0oKVxuICBpZiAoIXRyaW1tZWQpXG4gICAgcmV0dXJuICcnXG5cbiAgY29uc3QgbGlua01hdGNoID0gdHJpbW1lZC5tYXRjaCgvXlxcW1xcWyguKz8pXFxdXFxdJC8pXG4gIGNvbnN0IHJhd1JlZmVyZW5jZSA9IChsaW5rTWF0Y2ggPyBsaW5rTWF0Y2hbMV0gOiB0cmltbWVkKS50cmltKClcbiAgY29uc3Qgd2l0aG91dEFsaWFzID0gcmF3UmVmZXJlbmNlLnNwbGl0KCd8JylbMF0udHJpbSgpXG4gIGNvbnN0IHdpdGhvdXRIZWFkaW5nID0gd2l0aG91dEFsaWFzLnNwbGl0KCcjJylbMF0udHJpbSgpXG4gIGNvbnN0IGJhc2VuYW1lID0gd2l0aG91dEhlYWRpbmcuc3BsaXQoJy8nKS5wb3AoKSA/PyB3aXRob3V0SGVhZGluZ1xuICByZXR1cm4gYmFzZW5hbWUucmVwbGFjZSgvXFwubWQkL2ksICcnKS50cmltKClcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUNsYXNzaWZpY2F0aW9uVGFnKGZpbGU6IFRGaWxlKTogc3RyaW5nIHtcbiAgaWYgKGZpbGUuYmFzZW5hbWUgPT09IFRBU0tfSU5ERVhfQkFTRU5BTUVcbiAgICB8fCBmaWxlLmJhc2VuYW1lID09PSBGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FXG4gICAgfHwgZmlsZS5iYXNlbmFtZSA9PT0gQ0FOQ0VMTEVEX1RBU0tfSU5ERVhfQkFTRU5BTUVcbiAgICB8fCBpc0JvYXJkVGFza0luZGV4UGF0aChmaWxlLnBhdGgpKVxuICAgIHJldHVybiBJTkRFWF9UQUdcblxuICBpZiAoZmlsZS5wYXRoLmluY2x1ZGVzKCcvc3ViVGFza3MvJykpXG4gICAgcmV0dXJuIFNVQlRBU0tfVEFHXG5cbiAgcmV0dXJuIFRBU0tfVEFHXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVRhZ3ModmFsdWU6IHVua25vd24pOiBzdHJpbmdbXSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSlcbiAgICByZXR1cm4gdmFsdWUuZmlsdGVyKChpdGVtKTogaXRlbSBpcyBzdHJpbmcgPT4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKS5tYXAobm9ybWFsaXplVGFnVmFsdWUpLmZpbHRlcihCb29sZWFuKVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVRhZ1ZhbHVlKHZhbHVlKVxuICAgIHJldHVybiBub3JtYWxpemVkID8gW25vcm1hbGl6ZWRdIDogW11cbiAgfVxuXG4gIHJldHVybiBbXVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVUYWdWYWx1ZSh0YWc6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB0YWcucmVwbGFjZSgvXiMvLCAnJykudHJpbSgpXG59XG4iLCJjb25zdCBFU1RBRE9fQUxJQVNFUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgY2FuY2VsYWRhOiAnQ2FuY2VsYWRhJyxcbiAgY2FuY2VsYWRvOiAnQ2FuY2VsYWRhJyxcbiAgZGVzZXN0aW1hZGE6ICdDYW5jZWxhZGEnLFxuICBkZXNlc3RpbWFkbzogJ0NhbmNlbGFkYScsXG4gICdlbiBwcm9ncmVzbyc6ICdFbiBwcm9ncmVzbycsXG4gIHBlbmRpZW50ZTogJ1BlbmRpZW50ZScsXG4gIGZpbmFsaXphZGE6ICdGaW5hbGl6YWRhJyxcbiAgZmluYWxpemFkbzogJ0ZpbmFsaXphZGEnLFxuICBjb21wbGV0YWRhOiAnRmluYWxpemFkYScsXG4gIGNvbXBsZXRhZG86ICdGaW5hbGl6YWRhJyxcbiAgYmxvcXVlYWRhOiAnQmxvcXVlYWRhJyxcbiAgYmxvcXVlYWRvOiAnQmxvcXVlYWRhJyxcbiAgdXJnZW50ZTogJ1BlbmRpZW50ZScsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVFc3RhZG8odmFsdWU/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIXZhbHVlKVxuICAgIHJldHVybiAnUGVuZGllbnRlJ1xuXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSB2YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICByZXR1cm4gRVNUQURPX0FMSUFTRVNbbm9ybWFsaXplZF0gPz8gJ1BlbmRpZW50ZSdcbn1cbiIsImltcG9ydCB0eXBlIHsgQXBwLCBURmlsZSB9IGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQge1xuICBERUZBVUxUX0JPQVJEX05BTUUsXG4gIENBTkNFTExFRF9TVUJUQVNLU19GT0xERVIsXG4gIENBTkNFTExFRF9UQVNLX0lOREVYX0JBU0VOQU1FLFxuICBDQU5DRUxMRURfVEFTS1NfRk9MREVSLFxuICBDT01QTEVURURfU1VCVEFTS1NfRk9MREVSLFxuICBDT01QTEVURURfVEFTS1NfRk9MREVSLFxuICBGSU5JU0hFRF9UQVNLX0lOREVYX0JBU0VOQU1FLFxuICBMRUdBQ1lfQ09NUExFVEVEX1RBU0tTX0ZPTERFUixcbiAgU1VCVEFTS19UQUcsXG4gIFRBU0tfSU5ERVhfQkFTRU5BTUUsXG4gIFRBU0tfVEFHLFxuICBPUkRFUl9TVEVQLFxuICBUQVJFQVNfRk9MREVSLFxufSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBpc0JvYXJkVGFza0luZGV4UGF0aCB9IGZyb20gJy4vdGFza0luZGV4RW5naW5lJ1xuaW1wb3J0IHR5cGUgeyBFcXVpcG8sIFRhc2tGb3JtRGF0YSwgVGFza0Zyb250bWF0dGVyLCBUYXNrSXRlbSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgdG9UYXNrRnJvbnRtYXR0ZXIgfSBmcm9tICcuLi91dGlscy9ndWFyZHMnXG5pbXBvcnQgeyBub3JtYWxpemVFc3RhZG8gfSBmcm9tICcuLi91dGlscy9zdGF0dXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrRmlsZXMoYXBwOiBBcHApIHtcbiAgcmV0dXJuIGFwcC52YXVsdFxuICAgIC5nZXRNYXJrZG93bkZpbGVzKClcbiAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5wYXRoLnN0YXJ0c1dpdGgoYCR7VEFSRUFTX0ZPTERFUn0vYCkpXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUuYmFzZW5hbWUgIT09IFRBU0tfSU5ERVhfQkFTRU5BTUVcbiAgICAgICYmIGZpbGUuYmFzZW5hbWUgIT09IEZJTklTSEVEX1RBU0tfSU5ERVhfQkFTRU5BTUVcbiAgICAgICYmIGZpbGUuYmFzZW5hbWUgIT09IENBTkNFTExFRF9UQVNLX0lOREVYX0JBU0VOQU1FXG4gICAgICAmJiAhaXNCb2FyZFRhc2tJbmRleFBhdGgoZmlsZS5wYXRoKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGFza0luRmluaXNoZWRGb2xkZXIocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoLnN0YXJ0c1dpdGgoYCR7Q09NUExFVEVEX1RBU0tTX0ZPTERFUn0vYClcbiAgICB8fCBwYXRoLnN0YXJ0c1dpdGgoYCR7Q09NUExFVEVEX1NVQlRBU0tTX0ZPTERFUn0vYClcbiAgICB8fCBwYXRoLnN0YXJ0c1dpdGgoYCR7TEVHQUNZX0NPTVBMRVRFRF9UQVNLU19GT0xERVJ9L2ApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Rhc2tJbkNhbmNlbGxlZEZvbGRlcihwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGguc3RhcnRzV2l0aChgJHtDQU5DRUxMRURfVEFTS1NfRk9MREVSfS9gKVxuICAgIHx8IHBhdGguc3RhcnRzV2l0aChgJHtDQU5DRUxMRURfU1VCVEFTS1NfRk9MREVSfS9gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUYXNrSW5Db21wbGV0ZWRGb2xkZXIocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc1Rhc2tJbkZpbmlzaGVkRm9sZGVyKHBhdGgpIHx8IGlzVGFza0luQ2FuY2VsbGVkRm9sZGVyKHBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrcyhhcHA6IEFwcCk6IFRhc2tJdGVtW10ge1xuICBjb25zdCB0YXNrczogVGFza0l0ZW1bXSA9IFtdXG5cbiAgZm9yIChjb25zdCBmaWxlIG9mIGdldFRhc2tGaWxlcyhhcHApKSB7XG4gICAgY29uc3QgZm0gPSBnZXRUYXNrRnJvbnRtYXR0ZXIoYXBwLCBmaWxlKVxuICAgIGlmICghZm0pXG4gICAgICBjb250aW51ZVxuXG4gICAgdGFza3MucHVzaCh7XG4gICAgICBmaWxlLFxuICAgICAgdGFyZWE6IGZtLnRhcmVhID8/IGZpbGUuYmFzZW5hbWUsXG4gICAgICBkZXRhbGxlOiBmbS5kZXRhbGxlID8/ICcnLFxuICAgICAgZXN0YWRvOiBub3JtYWxpemVFc3RhZG8oZm0uZXN0YWRvKSxcbiAgICAgIGZlY2hhSW5pY2lvOiBmbS5mZWNoYUluaWNpbyA/PyAnJyxcbiAgICAgIGZlY2hhRmluOiBmbS5mZWNoYUZpbiA/PyAnJyxcbiAgICAgIHRhYmxlcm86IHJlc29sdmVUYXNrQm9hcmQoZmlsZS5wYXRoLCBmbSksXG4gICAgICBlcXVpcG86IGZtLmVxdWlwbyA/PyAnJyxcbiAgICAgIHByaW9yaWRhZDogZm0ucHJpb3JpZGFkID8/ICcnLFxuICAgICAgZGVkaWNhZG86IE51bWJlcihmbS5kZWRpY2FkbykgfHwgMCxcbiAgICAgIGVzdGltYWNpb246IE51bWJlcihmbS5lc3RpbWFjaW9uKSB8fCAwLFxuICAgICAgZGVzdmlvOiBOdW1iZXIoZm0uZGVzdmlvKSB8fCAwLFxuICAgICAgcGFyZW50OiBub3JtYWxpemVQYXJlbnRUYXNrTmFtZShmbS5wYXJlbnQgPz8gJycpLFxuICAgICAgb3JkZXI6IE51bWJlcihmbS5vcmRlcikgPz8gOTk5OTk5LFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gdGFza3Ncbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwVG9wTGV2ZWxUYXNrcyh0YXNrczogVGFza0l0ZW1bXSwgZXF1aXBvczogRXF1aXBvW10pIHtcbiAgY29uc3QgZ3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUYXNrSXRlbVtdPiA9IHt9XG5cbiAgZm9yIChjb25zdCBlcXVpcG8gb2YgZXF1aXBvcylcbiAgICBncm91cHNbZXF1aXBvLm5hbWVdID0gW11cblxuICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpIHtcbiAgICBpZiAodGFzay5wYXJlbnQpXG4gICAgICBjb250aW51ZVxuXG4gICAgY29uc3QgZ3JvdXBOYW1lID0gdGFzay5lcXVpcG8gfHwgJ1NpbiBncnVwbydcbiAgICBpZiAoIWdyb3Vwc1tncm91cE5hbWVdKVxuICAgICAgZ3JvdXBzW2dyb3VwTmFtZV0gPSBbXVxuXG4gICAgZ3JvdXBzW2dyb3VwTmFtZV0ucHVzaCh0YXNrKVxuICB9XG5cbiAgcmV0dXJuIGdyb3Vwc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUYXNrQ29udGVudChkYXRhOiBUYXNrRm9ybURhdGEsIG9yZGVyOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBzYWZlVGl0bGUgPSBkYXRhLnRhcmVhLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuICBjb25zdCBzYWZlRGV0YWlsID0gZGF0YS5kZXRhbGxlLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuICBjb25zdCBzYWZlRW5kRGF0ZSA9IGRhdGEuZmVjaGFGaW4ucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpXG4gIGNvbnN0IHNhZmVQYXJlbnRUYXNrID0gZGF0YS5wYXJlbnQudHJpbSgpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuICBjb25zdCBwYXJlbnRMaW5rID0gc2FmZVBhcmVudFRhc2sgPyBgW1ske3NhZmVQYXJlbnRUYXNrfV1dYCA6ICcnXG4gIGNvbnN0IHRhc2tUYWcgPSBzYWZlUGFyZW50VGFzayA/IFNVQlRBU0tfVEFHIDogVEFTS19UQUdcblxuICByZXR1cm4gW1xuICAgICctLS0nLFxuICAgIGB0YXJlYTogXCIke3NhZmVUaXRsZX1cImAsXG4gICAgYGRldGFsbGU6IFwiJHtzYWZlRGV0YWlsfVwiYCxcbiAgICBgZXN0YWRvOiBcIiR7ZGF0YS5lc3RhZG99XCJgLFxuICAgICdmZWNoYUluaWNpbzogXCJcIicsXG4gICAgYGZlY2hhRmluOiBcIiR7c2FmZUVuZERhdGV9XCJgLFxuICAgIGB0YWJsZXJvOiBcIiR7ZGF0YS50YWJsZXJvfVwiYCxcbiAgICBgZXF1aXBvOiBcIiR7ZGF0YS5lcXVpcG99XCJgLFxuICAgIGBwcmlvcmlkYWQ6IFwiJHtkYXRhLnByaW9yaWRhZH1cImAsXG4gICAgJ2RlZGljYWRvOiAwJyxcbiAgICBgZXN0aW1hY2lvbjogJHtkYXRhLmVzdGltYWNpb259YCxcbiAgICAnZGVzdmlvOiAwJyxcbiAgICBgcGFyZW50OiBcIiR7cGFyZW50TGlua31cImAsXG4gICAgJ2NoaWxkczogW10nLFxuICAgIGB0YWdzOiBbJHt0YXNrVGFnfV1gLFxuICAgIGBvcmRlcjogJHtvcmRlcn1gLFxuICAgICctLS0nLFxuICAgICcnLFxuICAgIGRhdGEuZGV0YWxsZSB8fCAnJyxcbiAgICAnJyxcbiAgXS5qb2luKCdcXG4nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZU5ld1Rhc2tPcmRlcihhcHA6IEFwcCwgZGF0YTogVGFza0Zvcm1EYXRhKTogbnVtYmVyIHtcbiAgY29uc3QgZ29lc1RvcCA9IGRhdGEuZXN0YWRvID09PSAnRW4gcHJvZ3Jlc28nIHx8IGRhdGEucHJpb3JpZGFkID09PSAnVXJnZW50ZSdcblxuICBpZiAoZGF0YS5wYXJlbnQpXG4gICAgcmV0dXJuIE9SREVSX1NURVBcblxuICBjb25zdCBzaWJsaW5nT3JkZXJzID0gZ2V0VGFza0ZpbGVzKGFwcClcbiAgICAubWFwKGZpbGUgPT4gZ2V0VGFza0Zyb250bWF0dGVyKGFwcCwgZmlsZSkpXG4gICAgLmZpbHRlcigoZm0pOiBmbSBpcyBUYXNrRnJvbnRtYXR0ZXIgPT4gQm9vbGVhbihmbSkpXG4gICAgLmZpbHRlcigoZm0pID0+IHtcbiAgICAgIGlmIChmbS5wYXJlbnQpXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgICBjb25zdCBib2FyZE5hbWUgPSBub3JtYWxpemVCb2FyZE5hbWUoZm0udGFibGVybyB8fCAnJylcbiAgICAgIGNvbnN0IGdyb3VwTmFtZSA9IChmbS5lcXVpcG8gfHwgJycpLnRyaW0oKVxuICAgICAgcmV0dXJuIGJvYXJkTmFtZSA9PT0gbm9ybWFsaXplQm9hcmROYW1lKGRhdGEudGFibGVybykgJiYgZ3JvdXBOYW1lID09PSBkYXRhLmVxdWlwb1xuICAgIH0pXG4gICAgLm1hcChmbSA9PiBOdW1iZXIoZm0ub3JkZXIpIHx8IDApXG5cbiAgaWYgKHNpYmxpbmdPcmRlcnMubGVuZ3RoID09PSAwKVxuICAgIHJldHVybiBPUkRFUl9TVEVQXG5cbiAgcmV0dXJuIGdvZXNUb3BcbiAgICA/IE1hdGgubWluKC4uLnNpYmxpbmdPcmRlcnMpIC0gT1JERVJfU1RFUFxuICAgIDogTWF0aC5tYXgoLi4uc2libGluZ09yZGVycykgKyBPUkRFUl9TVEVQXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlVGFza1BhdGgoYXBwOiBBcHAsIHRhc2tOYW1lOiBzdHJpbmcsIGJvYXJkTmFtZTogc3RyaW5nLCBwYXJlbnRUYXNrTmFtZSA9ICcnKTogc3RyaW5nIHtcbiAgY29uc3QgZm9sZGVyUGF0aCA9IHBhcmVudFRhc2tOYW1lLnRyaW0oKVxuICAgID8gZ2V0Qm9hcmRTdWJ0YXNrc0ZvbGRlcihib2FyZE5hbWUpXG4gICAgOiBnZXRCb2FyZEZvbGRlcihib2FyZE5hbWUpXG4gIGNvbnN0IGJhc2VQYXRoID0gYCR7Zm9sZGVyUGF0aH0vJHt0YXNrTmFtZX0ubWRgXG4gIGlmICghYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChiYXNlUGF0aCkpXG4gICAgcmV0dXJuIGJhc2VQYXRoXG5cbiAgcmV0dXJuIGAke2ZvbGRlclBhdGh9LyR7dGFza05hbWV9ICR7RGF0ZS5ub3coKX0ubWRgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCb2FyZEZvbGRlcihib2FyZE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtUQVJFQVNfRk9MREVSfS8ke25vcm1hbGl6ZUJvYXJkTmFtZShib2FyZE5hbWUpfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvYXJkU3VidGFza3NGb2xkZXIoYm9hcmROYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7Z2V0Qm9hcmRGb2xkZXIoYm9hcmROYW1lKX0vc3ViVGFza3NgXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVUYXNrQm9hcmQocGF0aDogc3RyaW5nLCBmbTogVGFza0Zyb250bWF0dGVyKTogc3RyaW5nIHtcbiAgY29uc3QgcmF3RnJvbUZyb250bWF0dGVyID0gKGZtLnRhYmxlcm8gfHwgJycpLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gIGlmIChyYXdGcm9tRnJvbnRtYXR0ZXIpXG4gICAgcmV0dXJuIHJhd0Zyb21Gcm9udG1hdHRlclxuXG4gIGNvbnN0IHJvb3RQcmVmaXggPSBgJHtUQVJFQVNfRk9MREVSfS9gXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKHJvb3RQcmVmaXgpKVxuICAgIHJldHVybiBERUZBVUxUX0JPQVJEX05BTUVcblxuICBjb25zdCBzZWdtZW50cyA9IHBhdGguc2xpY2Uocm9vdFByZWZpeC5sZW5ndGgpLnNwbGl0KCcvJylcbiAgY29uc3QgY2FuZGlkYXRlID0gc2VnbWVudHNbMF0/LnRyaW0oKS50b0xvd2VyQ2FzZSgpIHx8ICcnXG4gIGlmICghY2FuZGlkYXRlIHx8IGNhbmRpZGF0ZSA9PT0gJ2ZpbmlzaGVkJyB8fCBjYW5kaWRhdGUgPT09ICdjYW5jZWxsZWQnIHx8IGNhbmRpZGF0ZSA9PT0gJ2NvbXBsZXRhZGFzJylcbiAgICByZXR1cm4gREVGQVVMVF9CT0FSRF9OQU1FXG5cbiAgcmV0dXJuIGNhbmRpZGF0ZVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVCb2FyZE5hbWUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSB2YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICByZXR1cm4gbm9ybWFsaXplZCB8fCBERUZBVUxUX0JPQVJEX05BTUVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVUYXNrRW5kRGF0ZShmZWNoYUZpbjogc3RyaW5nLCBlc3RpbWFjaW9uOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBleHBsaWNpdEVuZCA9IHBhcnNlVGFza0RhdGUoZmVjaGFGaW4pXG4gIGlmIChleHBsaWNpdEVuZClcbiAgICByZXR1cm4gZXhwbGljaXRFbmQudG9JU09TdHJpbmcoKVxuXG4gIGlmIChlc3RpbWFjaW9uIDw9IDApXG4gICAgcmV0dXJuICcnXG5cbiAgY29uc3QgY29tcHV0ZWQgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgZXN0aW1hY2lvbiAqIDYwICogNjAgKiAxMDAwKVxuICByZXR1cm4gY29tcHV0ZWQudG9JU09TdHJpbmcoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUYXNrRGF0ZSh2YWx1ZTogc3RyaW5nKTogRGF0ZSB8IG51bGwge1xuICBjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpXG4gIGlmICghdHJpbW1lZClcbiAgICByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHBhcnNlZCA9IG5ldyBEYXRlKHRyaW1tZWQpXG4gIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkpXG4gICAgcmV0dXJuIG51bGxcblxuICByZXR1cm4gcGFyc2VkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0VGFza0JvZHlQcmV2aWV3KGNvbnRlbnQ6IHN0cmluZywgbWF4TGVuZ3RoID0gMTgwKTogc3RyaW5nIHtcbiAgbGV0IGJvZHkgPSBjb250ZW50XG5cbiAgLy8gUmVtb3ZlIFlBTUwgZnJvbnRtYXR0ZXIgYmxvY2sgaWYgcHJlc2VudC5cbiAgYm9keSA9IGJvZHkucmVwbGFjZSgvXi0tLVxccj9cXG5bXFxzXFxTXSo/XFxyP1xcbi0tLVxccj9cXG4/LywgJycpXG5cbiAgY29uc3QgbGluZXMgPSBib2R5XG4gICAgLnNwbGl0KC9cXHI/XFxuLylcbiAgICAubWFwKGxpbmUgPT4gbGluZS50cmltKCkpXG5cbiAgd2hpbGUgKGxpbmVzLmxlbmd0aCA+IDAgJiYgIWxpbmVzWzBdKVxuICAgIGxpbmVzLnNoaWZ0KClcblxuICAvLyBSZW1vdmUgbGVhZGluZyB0aXRsZSBoZWFkaW5nIHNvIHByZXZpZXcgc3RhcnRzIHdpdGggdGhlIGJvZHkgdGV4dC5cbiAgaWYgKGxpbmVzWzBdPy5zdGFydHNXaXRoKCcjICcpKVxuICAgIGxpbmVzLnNoaWZ0KClcblxuICB3aGlsZSAobGluZXMubGVuZ3RoID4gMCAmJiAhbGluZXNbMF0pXG4gICAgbGluZXMuc2hpZnQoKVxuXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBsaW5lcy5qb2luKCcgJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKVxuICBpZiAoIW5vcm1hbGl6ZWQpXG4gICAgcmV0dXJuICcnXG5cbiAgaWYgKG5vcm1hbGl6ZWQubGVuZ3RoIDw9IG1heExlbmd0aClcbiAgICByZXR1cm4gbm9ybWFsaXplZFxuXG4gIHJldHVybiBgJHtub3JtYWxpemVkLnNsaWNlKDAsIG1heExlbmd0aCAtIDEpLnRyaW1FbmQoKX3igKZgXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmVudFRhc2tOYW1lKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpXG4gIGlmICghdHJpbW1lZClcbiAgICByZXR1cm4gJydcblxuICBjb25zdCBsaW5rTWF0Y2ggPSB0cmltbWVkLm1hdGNoKC9eXFxbXFxbKC4rPylcXF1cXF0kLylcbiAgY29uc3QgcmF3UmVmID0gbGlua01hdGNoID8gbGlua01hdGNoWzFdLnRyaW0oKSA6IHRyaW1tZWRcbiAgY29uc3Qgd2l0aG91dEFsaWFzID0gcmF3UmVmLnNwbGl0KCd8JylbMF0udHJpbSgpXG4gIGNvbnN0IHdpdGhvdXRIZWFkaW5nID0gd2l0aG91dEFsaWFzLnNwbGl0KCcjJylbMF0udHJpbSgpXG4gIGNvbnN0IGxhc3RTZWdtZW50ID0gd2l0aG91dEhlYWRpbmcuc3BsaXQoJy8nKS5wb3AoKSA/PyB3aXRob3V0SGVhZGluZ1xuXG4gIHJldHVybiBsYXN0U2VnbWVudC5yZXBsYWNlKC9cXC5tZCQvaSwgJycpLnRyaW0oKVxufVxuXG5mdW5jdGlvbiBnZXRUYXNrRnJvbnRtYXR0ZXIoYXBwOiBBcHAsIGZpbGU6IFRGaWxlKTogVGFza0Zyb250bWF0dGVyIHwgbnVsbCB7XG4gIGNvbnN0IHJhd0Zyb250bWF0dGVyID0gYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpPy5mcm9udG1hdHRlclxuICByZXR1cm4gdG9UYXNrRnJvbnRtYXR0ZXIocmF3RnJvbnRtYXR0ZXIpXG59XG4iLCJpbXBvcnQgdHlwZSB7IEFwcCB9IGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQgeyBnZXRUYXNrcywgaXNUYXNrSW5Db21wbGV0ZWRGb2xkZXIsIHBhcnNlVGFza0RhdGUgfSBmcm9tICcuL3Rhc2tFbmdpbmUnXG5pbXBvcnQgeyB1cGRhdGVGcm9udG1hdHRlciB9IGZyb20gJy4vZnJvbnRtYXR0ZXJFbmdpbmUnXG5cbmNvbnN0IEhPVVJfTVMgPSA2MCAqIDYwICogMTAwMFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmViYWxhbmNlR3JvdXBFbmREYXRlcyhhcHA6IEFwcCwgYm9hcmROYW1lOiBzdHJpbmcsIGdyb3VwTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHRhc2tzID0gZ2V0VGFza3MoYXBwKVxuICAgIC5maWx0ZXIodGFzayA9PiAhdGFzay5wYXJlbnRcbiAgICAgICYmIHRhc2sudGFibGVybyA9PT0gYm9hcmROYW1lXG4gICAgICAmJiB0YXNrLmVxdWlwbyA9PT0gZ3JvdXBOYW1lXG4gICAgICAmJiAhaXNUYXNrSW5Db21wbGV0ZWRGb2xkZXIodGFzay5maWxlLnBhdGgpKVxuICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcilcblxuICBpZiAodGFza3MubGVuZ3RoID09PSAwKVxuICAgIHJldHVyblxuXG4gIGNvbnN0IGZpcnN0U3RhcnQgPSBwYXJzZVRhc2tEYXRlKHRhc2tzWzBdLmZlY2hhSW5pY2lvKSA/PyBuZXcgRGF0ZSgpXG4gIGxldCBjdXJzb3IgPSBmaXJzdFN0YXJ0LmdldFRpbWUoKVxuXG4gIGZvciAoY29uc3QgdGFzayBvZiB0YXNrcykge1xuICAgIGNvbnN0IGVzdGltYXRlZEhvdXJzID0gTnVtYmVyLmlzRmluaXRlKHRhc2suZXN0aW1hY2lvbikgJiYgdGFzay5lc3RpbWFjaW9uID4gMFxuICAgICAgPyB0YXNrLmVzdGltYWNpb25cbiAgICAgIDogMFxuICAgIGNvbnN0IGRlZGljYXRlZEhvdXJzID0gTnVtYmVyLmlzRmluaXRlKHRhc2suZGVkaWNhZG8pICYmIHRhc2suZGVkaWNhZG8gPiAwXG4gICAgICA/IHRhc2suZGVkaWNhZG9cbiAgICAgIDogMFxuICAgIGNvbnN0IGVzdGltYXRlSG91cnMgPSBNYXRoLm1heChlc3RpbWF0ZWRIb3VycywgZGVkaWNhdGVkSG91cnMpXG5cbiAgICBjdXJzb3IgKz0gZXN0aW1hdGVIb3VycyAqIEhPVVJfTVNcbiAgICBhd2FpdCB1cGRhdGVGcm9udG1hdHRlcihhcHAsIHRhc2suZmlsZSwgeyBmZWNoYUZpbjogbmV3IERhdGUoY3Vyc29yKS50b0lTT1N0cmluZygpIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUZpbGVuYW1lKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoL1tcXFxcLzoqP1wiPD58I15bXFxdXS9nLCAnLScpLnRyaW0oKVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7IEVTVEFET1MsIFBSSU9SSURBREVTIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgcmVidWlsZFRhc2tDaGlsZExpbmtzLCBzeW5jVGFza1R5cGVUYWdzIH0gZnJvbSAnLi4vZW5naW5lcy9mcm9udG1hdHRlckVuZ2luZSdcbmltcG9ydCB7IHJlYmFsYW5jZUdyb3VwRW5kRGF0ZXMgfSBmcm9tICcuLi9lbmdpbmVzL3NjaGVkdWxlRW5naW5lJ1xuaW1wb3J0IHsgYXBwZW5kVGFza0xpbmtUb0luZGV4IH0gZnJvbSAnLi4vZW5naW5lcy90YXNrSW5kZXhFbmdpbmUnXG5pbXBvcnQge1xuICBidWlsZFRhc2tDb250ZW50LFxuICBnZXRCb2FyZEZvbGRlcixcbiAgZ2V0Qm9hcmRTdWJ0YXNrc0ZvbGRlcixcbiAgcmVzb2x2ZU5ld1Rhc2tPcmRlcixcbiAgcmVzb2x2ZVRhc2tFbmREYXRlLFxuICByZXNvbHZlVGFza1BhdGgsXG59IGZyb20gJy4uL2VuZ2luZXMvdGFza0VuZ2luZSdcbmltcG9ydCB0eXBlIHsgVGFza0Zvcm1EYXRhIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBzYW5pdGl6ZUZpbGVuYW1lIH0gZnJvbSAnLi4vdXRpbHMvc2FuaXRpemVGaWxlbmFtZSdcbmltcG9ydCB0eXBlIHsgVGFyZWFzUGx1Z2luIH0gZnJvbSAnLi4vcGx1Z2luL1RhcmVhc1BsdWdpbidcblxuZXhwb3J0IGNsYXNzIE5ld1Rhc2tNb2RhbCBleHRlbmRzIG9ic2lkaWFuLk1vZGFsIHtcbiAgcHJpdmF0ZSBwbHVnaW46IFRhcmVhc1BsdWdpblxuICBwcml2YXRlIGRhdGE6IFRhc2tGb3JtRGF0YVxuXG4gIGNvbnN0cnVjdG9yKGFwcDogb2JzaWRpYW4uQXBwLCBwbHVnaW46IFRhcmVhc1BsdWdpbiwgZGVmYXVsdEJvYXJkPzogc3RyaW5nLCBkZWZhdWx0UGFyZW50Pzogc3RyaW5nLCBkZWZhdWx0R3JvdXA/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihhcHApXG4gICAgY29uc3QgcmVzb2x2ZWRCb2FyZCA9IGRlZmF1bHRCb2FyZCB8fCBwbHVnaW4udGFibGVyb3NbMF0/Lm5hbWUgfHwgJydcbiAgICBjb25zdCBmaXJzdEdyb3VwRm9yQm9hcmQgPSBwbHVnaW4uZ2V0RXF1aXBvc0ZvclRhYmxlcm8ocmVzb2x2ZWRCb2FyZClbMF0/Lm5hbWUgfHwgJydcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpblxuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIHRhcmVhOiAnJyxcbiAgICAgIGRldGFsbGU6ICcnLFxuICAgICAgZXN0YWRvOiAnUGVuZGllbnRlJyxcbiAgICAgIGZlY2hhRmluOiAnJyxcbiAgICAgIHRhYmxlcm86IHJlc29sdmVkQm9hcmQsXG4gICAgICBlcXVpcG86IGRlZmF1bHRHcm91cCB8fCBmaXJzdEdyb3VwRm9yQm9hcmQsXG4gICAgICBwcmlvcmlkYWQ6ICdNZWRpYScsXG4gICAgICBlc3RpbWFjaW9uOiAwLFxuICAgICAgcGFyZW50OiBkZWZhdWx0UGFyZW50IHx8ICcnLFxuICAgIH1cbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpc1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLW1vZGFsJylcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnTnVldmEgVGFyZWEnIH0pXG5cbiAgICBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpLnNldE5hbWUoJ1RhcmVhJykuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgdGV4dC5zZXRQbGFjZWhvbGRlcignTm9tYnJlIGRlIGxhIHRhcmVhJylcbiAgICAgIHRleHQub25DaGFuZ2UodmFsdWUgPT4gdGhpcy5kYXRhLnRhcmVhID0gdmFsdWUpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRleHQuaW5wdXRFbC5mb2N1cygpLCA1MClcbiAgICB9KVxuXG4gICAgbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKS5zZXROYW1lKCdFc3RhZG8nKS5hZGREcm9wZG93bigoZHJvcGRvd24pID0+IHtcbiAgICAgIGZvciAoY29uc3QgZXN0YWRvIG9mIEVTVEFET1MpXG4gICAgICAgIGRyb3Bkb3duLmFkZE9wdGlvbihlc3RhZG8sIGVzdGFkbylcblxuICAgICAgZHJvcGRvd24uc2V0VmFsdWUodGhpcy5kYXRhLmVzdGFkbylcbiAgICAgIGRyb3Bkb3duLm9uQ2hhbmdlKHZhbHVlID0+IHRoaXMuZGF0YS5lc3RhZG8gPSB2YWx1ZSlcbiAgICB9KVxuXG4gICAgbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKVxuICAgICAgLnNldE5hbWUoJ0ZlY2hhIGZpbicpXG4gICAgICAuc2V0RGVzYygnT3BjaW9uYWwuIFNpIHF1ZWRhIHZhY8OtYSwgc2UgY2FsY3VsYSBjb24gbGEgZXN0aW1hY2nDs24uJylcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PiB7XG4gICAgICAgIHRleHQuaW5wdXRFbC50eXBlID0gJ2RhdGV0aW1lLWxvY2FsJ1xuICAgICAgICB0ZXh0LnNldFZhbHVlKHRoaXMuZGF0YS5mZWNoYUZpbilcbiAgICAgICAgdGV4dC5vbkNoYW5nZSh2YWx1ZSA9PiB0aGlzLmRhdGEuZmVjaGFGaW4gPSB2YWx1ZSlcbiAgICAgIH0pXG5cbiAgICBsZXQgZ3JvdXBEcm9wZG93bjogb2JzaWRpYW4uRHJvcGRvd25Db21wb25lbnQgfCBudWxsID0gbnVsbFxuXG4gICAgY29uc3QgcmVmcmVzaEdyb3VwT3B0aW9ucyA9ICgpID0+IHtcbiAgICAgIGlmICghZ3JvdXBEcm9wZG93bilcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGNvbnN0IHNlbGVjdEVsID0gZ3JvdXBEcm9wZG93bi5zZWxlY3RFbFxuICAgICAgd2hpbGUgKHNlbGVjdEVsLm9wdGlvbnMubGVuZ3RoID4gMClcbiAgICAgICAgc2VsZWN0RWwucmVtb3ZlKDApXG5cbiAgICAgIGdyb3VwRHJvcGRvd24uYWRkT3B0aW9uKCcnLCAnU2luIGdydXBvJylcbiAgICAgIGNvbnN0IGdyb3VwcyA9IHRoaXMucGx1Z2luLmdldEVxdWlwb3NGb3JUYWJsZXJvKHRoaXMuZGF0YS50YWJsZXJvKVxuICAgICAgZm9yIChjb25zdCBlcXVpcG8gb2YgZ3JvdXBzKVxuICAgICAgICBncm91cERyb3Bkb3duLmFkZE9wdGlvbihlcXVpcG8ubmFtZSwgZXF1aXBvLm5hbWUpXG5cbiAgICAgIGlmICh0aGlzLmRhdGEuZXF1aXBvICYmIGdyb3Vwcy5zb21lKGdyb3VwID0+IGdyb3VwLm5hbWUgPT09IHRoaXMuZGF0YS5lcXVpcG8pKSB7XG4gICAgICAgIGdyb3VwRHJvcGRvd24uc2V0VmFsdWUodGhpcy5kYXRhLmVxdWlwbylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0YS5lcXVpcG8gPSBncm91cHNbMF0/Lm5hbWUgfHwgJydcbiAgICAgIGdyb3VwRHJvcGRvd24uc2V0VmFsdWUodGhpcy5kYXRhLmVxdWlwbylcbiAgICB9XG5cbiAgICBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpLnNldE5hbWUoJ1RhYmxlcm8nKS5hZGREcm9wZG93bigoZHJvcGRvd24pID0+IHtcbiAgICAgIGZvciAoY29uc3QgdGFibGVybyBvZiB0aGlzLnBsdWdpbi50YWJsZXJvcylcbiAgICAgICAgZHJvcGRvd24uYWRkT3B0aW9uKHRhYmxlcm8ubmFtZSwgdGFibGVyby5uYW1lKVxuXG4gICAgICBkcm9wZG93bi5zZXRWYWx1ZSh0aGlzLmRhdGEudGFibGVybylcbiAgICAgIGRyb3Bkb3duLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEudGFibGVybyA9IHZhbHVlXG4gICAgICAgIHJlZnJlc2hHcm91cE9wdGlvbnMoKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKS5zZXROYW1lKCdHcnVwbycpLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT4ge1xuICAgICAgZ3JvdXBEcm9wZG93biA9IGRyb3Bkb3duXG4gICAgICByZWZyZXNoR3JvdXBPcHRpb25zKClcbiAgICAgIGRyb3Bkb3duLm9uQ2hhbmdlKHZhbHVlID0+IHRoaXMuZGF0YS5lcXVpcG8gPSB2YWx1ZSlcbiAgICB9KVxuXG4gICAgbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKS5zZXROYW1lKCdQcmlvcmlkYWQnKS5hZGREcm9wZG93bigoZHJvcGRvd24pID0+IHtcbiAgICAgIGZvciAoY29uc3QgcHJpb3JpZGFkIG9mIFBSSU9SSURBREVTKVxuICAgICAgICBkcm9wZG93bi5hZGRPcHRpb24ocHJpb3JpZGFkLCBwcmlvcmlkYWQpXG5cbiAgICAgIGRyb3Bkb3duLnNldFZhbHVlKHRoaXMuZGF0YS5wcmlvcmlkYWQpXG4gICAgICBkcm9wZG93bi5vbkNoYW5nZSh2YWx1ZSA9PiB0aGlzLmRhdGEucHJpb3JpZGFkID0gdmFsdWUpXG4gICAgfSlcblxuICAgIG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbClcbiAgICAgIC5zZXROYW1lKCdFc3RpbWFjacOzbiAoaG9yYXMpJylcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PiB7XG4gICAgICAgIHRleHQuc2V0UGxhY2Vob2xkZXIoJzAnKVxuICAgICAgICB0ZXh0LmlucHV0RWwudHlwZSA9ICdudW1iZXInXG4gICAgICAgIHRleHQuaW5wdXRFbC5taW4gPSAnMCdcbiAgICAgICAgdGV4dC5pbnB1dEVsLnN0ZXAgPSAnMC4wMSdcbiAgICAgICAgdGV4dC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJzZWQgPSBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSlcbiAgICAgICAgICB0aGlzLmRhdGEuZXN0aW1hY2lvbiA9IE51bWJlci5pc05hTihwYXJzZWQpIHx8IHBhcnNlZCA8IDBcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiBNYXRoLnJvdW5kKHBhcnNlZCAqIDEwMCkgLyAxMDBcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpXG4gICAgICAuc2V0TmFtZSgnU3VidGFyZWEgZGUnKVxuICAgICAgLnNldERlc2MoJ0RlamFyIHZhY8OtbyBzaSBlcyB0YXJlYSBwcmluY2lwYWwnKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+IHtcbiAgICAgICAgdGV4dC5zZXRQbGFjZWhvbGRlcignTm9tYnJlIGRlIHRhcmVhIHBhZHJlIChzaW4gLm1kKScpXG4gICAgICAgIHRleHQuc2V0VmFsdWUodGhpcy5kYXRhLnBhcmVudClcbiAgICAgICAgdGV4dC5vbkNoYW5nZSh2YWx1ZSA9PiB0aGlzLmRhdGEucGFyZW50ID0gdmFsdWUpXG4gICAgICB9KVxuXG4gICAgY29uc3QgZm9vdGVyID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1tb2RhbC1mb290ZXInIH0pXG5cbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NyZWFyIHRhcmVhJywgY2xzOiAnbW9kLWN0YScgfSlcbiAgICBjcmVhdGVCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuY3JlYXRlKClcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ2FuY2VsYXInIH0pXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlKClcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjcmVhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEudGFyZWEudHJpbSgpKSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdFbCBub21icmUgZXMgcmVxdWVyaWRvJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNhbml0aXplZFRhc2tOYW1lID0gc2FuaXRpemVGaWxlbmFtZSh0aGlzLmRhdGEudGFyZWEpXG4gICAgY29uc3QgdGFyZ2V0Rm9sZGVyID0gdGhpcy5kYXRhLnBhcmVudC50cmltKClcbiAgICAgID8gZ2V0Qm9hcmRTdWJ0YXNrc0ZvbGRlcih0aGlzLmRhdGEudGFibGVybylcbiAgICAgIDogZ2V0Qm9hcmRGb2xkZXIodGhpcy5kYXRhLnRhYmxlcm8pXG4gICAgYXdhaXQgdGhpcy5lbnN1cmVGb2xkZXJQYXRoKHRhcmdldEZvbGRlcilcblxuICAgIGNvbnN0IHBhdGggPSByZXNvbHZlVGFza1BhdGgodGhpcy5hcHAsIHNhbml0aXplZFRhc2tOYW1lLCB0aGlzLmRhdGEudGFibGVybywgdGhpcy5kYXRhLnBhcmVudClcbiAgICBjb25zdCBvcmRlciA9IHJlc29sdmVOZXdUYXNrT3JkZXIodGhpcy5hcHAsIHRoaXMuZGF0YSlcbiAgICBjb25zdCBjb250ZW50ID0gYnVpbGRUYXNrQ29udGVudChcbiAgICAgIHtcbiAgICAgICAgLi4udGhpcy5kYXRhLFxuICAgICAgICBmZWNoYUZpbjogcmVzb2x2ZVRhc2tFbmREYXRlKHRoaXMuZGF0YS5mZWNoYUZpbiwgdGhpcy5kYXRhLmVzdGltYWNpb24pLFxuICAgICAgfSxcbiAgICAgIG9yZGVyLFxuICAgIClcblxuICAgIGNvbnN0IHRhc2tGaWxlID0gYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKHBhdGgsIGNvbnRlbnQpXG4gICAgYXdhaXQgYXBwZW5kVGFza0xpbmtUb0luZGV4KHRoaXMuYXBwLCB0YXNrRmlsZSlcbiAgICBhd2FpdCByZWJ1aWxkVGFza0NoaWxkTGlua3ModGhpcy5hcHApXG4gICAgYXdhaXQgc3luY1Rhc2tUeXBlVGFncyh0aGlzLmFwcClcbiAgICBhd2FpdCByZWJhbGFuY2VHcm91cEVuZERhdGVzKHRoaXMuYXBwLCB0aGlzLmRhdGEudGFibGVybywgdGhpcy5kYXRhLmVxdWlwbylcbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBUYXJlYSBcIiR7dGhpcy5kYXRhLnRhcmVhfVwiIGNyZWFkYWApXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGVuc3VyZUZvbGRlclBhdGgocGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aClcbiAgICBpZiAoZXhpc3RpbmcgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKVxuICAgICAgcmV0dXJuXG5cbiAgICBpZiAoZXhpc3RpbmcpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHNlIHB1ZG8gY3JlYXIgbGEgY2FycGV0YSBcIiR7cGF0aH1cIiBwb3JxdWUgZXhpc3RlIHVuIGFyY2hpdm8gY29uIGVzZSBub21icmVgKVxuXG4gICAgY29uc3Qgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJykuZmlsdGVyKEJvb2xlYW4pXG4gICAgbGV0IGN1cnJlbnRQYXRoID0gJydcbiAgICBmb3IgKGNvbnN0IHNlZ21lbnQgb2Ygc2VnbWVudHMpIHtcbiAgICAgIGN1cnJlbnRQYXRoID0gY3VycmVudFBhdGggPyBgJHtjdXJyZW50UGF0aH0vJHtzZWdtZW50fWAgOiBzZWdtZW50XG4gICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGN1cnJlbnRQYXRoKVxuICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKVxuICAgICAgICBjb250aW51ZVxuICAgICAgaWYgKGN1cnJlbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gc2UgcHVkbyBjcmVhciBsYSBjYXJwZXRhIFwiJHtjdXJyZW50UGF0aH1cIiBwb3JxdWUgZXhpc3RlIHVuIGFyY2hpdm8gY29uIGVzZSBub21icmVgKVxuXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoY3VycmVudFBhdGgpXG4gICAgICB9XG4gICAgICBjYXRjaCB7XG4gICAgICAgIGNvbnN0IHJldHJ5ID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGN1cnJlbnRQYXRoKVxuICAgICAgICBpZiAocmV0cnkgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBzZSBwdWRvIGNyZWFyIGxhIGNhcnBldGEgXCIke2N1cnJlbnRQYXRofVwiYClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERFRkFVTFRfQk9BUkRfTkFNRSwgREVGQVVMVF9FUVVJUE9TLCBERUZBVUxUX1RBQkxFUk9TIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgbm9ybWFsaXplUG9tb2Rvcm9TdGF0ZSB9IGZyb20gJy4uL2VuZ2luZXMvcG9tb2Rvcm9FbmdpbmUnXG5pbXBvcnQgdHlwZSB7IEVxdWlwbywgUG9tb2Rvcm9TdGF0ZSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgaXNSZWNvcmQgfSBmcm9tICcuL2d1YXJkcydcblxuY29uc3QgTEVHQUNZX0ZBTExCQUNLX0NPTE9SUyA9IFsnI2Q5N2ExZScsICcjMmU2ZGIwJywgJyM3YzVjZTcnLCAnIzAwYjg5NCcsICcjZTE3MDU1JywgJyNmZDc5YTgnXVxuY29uc3QgUkVNT1ZFRF9ERUZBVUxUX1RFQU1fTkFNRVMgPSBuZXcgU2V0KFsnU2VtYW5hbCcsICdEaWFyaW8nLCAnQ29tcGxldGFkYXMnXSlcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUVxdWlwb3NGcm9tU2V0dGluZ3MocmF3RGF0YTogdW5rbm93bik6IEVxdWlwb1tdIHtcbiAgY29uc3QgZXF1aXBvcyA9IGV4dHJhY3RFcXVpcG9zKHJhd0RhdGEpXG5cbiAgaWYgKCFlcXVpcG9zIHx8IGVxdWlwb3MubGVuZ3RoID09PSAwKVxuICAgIHJldHVybiBbLi4uREVGQVVMVF9FUVVJUE9TXVxuXG4gIGlmIChpc1N0cmluZ0FycmF5KGVxdWlwb3MpKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZEZyb21MZWdhY3kgPSBlcXVpcG9zXG4gICAgICAuZmlsdGVyKG5hbWUgPT4gIVJFTU9WRURfREVGQVVMVF9URUFNX05BTUVTLmhhcyhuYW1lKSlcbiAgICAgIC5tYXAoKG5hbWUsIGluZGV4KSA9PiAoe1xuICAgICAgICBuYW1lOiBuYW1lLnRyaW0oKSxcbiAgICAgICAgY29sb3I6IExFR0FDWV9GQUxMQkFDS19DT0xPUlNbaW5kZXggJSBMRUdBQ1lfRkFMTEJBQ0tfQ09MT1JTLmxlbmd0aF0sXG4gICAgICAgIHRhYmxlcm86IERFRkFVTFRfQk9BUkRfTkFNRSxcbiAgICAgIH0pKVxuICAgIHJldHVybiBtZXJnZVdpdGhEZWZhdWx0RXF1aXBvcyhub3JtYWxpemVkRnJvbUxlZ2FjeSlcbiAgfVxuXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBlcXVpcG9zXG4gICAgLmZpbHRlcihpc0VxdWlwbylcbiAgICAubWFwKGVxdWlwbyA9PiAoe1xuICAgICAgbmFtZTogZXF1aXBvLm5hbWUudHJpbSgpLFxuICAgICAgY29sb3I6IGVxdWlwby5jb2xvcixcbiAgICAgIHRhYmxlcm86IChlcXVpcG8udGFibGVybyB8fCBERUZBVUxUX0JPQVJEX05BTUUpLnRyaW0oKS50b0xvd2VyQ2FzZSgpLFxuICAgIH0pKVxuICAgIC5maWx0ZXIoZXF1aXBvID0+ICFSRU1PVkVEX0RFRkFVTFRfVEVBTV9OQU1FUy5oYXMoZXF1aXBvLm5hbWUpKVxuICAgIC5maWx0ZXIoZXF1aXBvID0+IEJvb2xlYW4oZXF1aXBvLm5hbWUpKVxuXG4gIGlmIChub3JtYWxpemVkLmxlbmd0aCA9PT0gMClcbiAgICByZXR1cm4gWy4uLkRFRkFVTFRfRVFVSVBPU11cblxuICByZXR1cm4gbWVyZ2VXaXRoRGVmYXVsdEVxdWlwb3Mobm9ybWFsaXplZClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVRhYmxlcm9zRnJvbVNldHRpbmdzKHJhd0RhdGE6IHVua25vd24pOiBFcXVpcG9bXSB7XG4gIGxldCB0YWJsZXJvcyA9IGV4dHJhY3RUYWJsZXJvcyhyYXdEYXRhKVxuICBpZiAoKCF0YWJsZXJvcyB8fCB0YWJsZXJvcy5sZW5ndGggPT09IDApICYmIHNob3VsZFJldXNlRXF1aXBvc0FzQm9hcmRzKHJhd0RhdGEpKVxuICAgIHRhYmxlcm9zID0gZXh0cmFjdEVxdWlwb3MocmF3RGF0YSlcblxuICBpZiAoIXRhYmxlcm9zIHx8IHRhYmxlcm9zLmxlbmd0aCA9PT0gMClcbiAgICByZXR1cm4gWy4uLkRFRkFVTFRfVEFCTEVST1NdXG5cbiAgaWYgKGlzU3RyaW5nQXJyYXkodGFibGVyb3MpKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IHRhYmxlcm9zXG4gICAgICAubWFwKChuYW1lLCBpbmRleCkgPT4gKHtcbiAgICAgICAgbmFtZTogbmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgY29sb3I6IExFR0FDWV9GQUxMQkFDS19DT0xPUlNbaW5kZXggJSBMRUdBQ1lfRkFMTEJBQ0tfQ09MT1JTLmxlbmd0aF0sXG4gICAgICB9KSlcbiAgICAgIC5maWx0ZXIoYm9hcmQgPT4gQm9vbGVhbihib2FyZC5uYW1lKSlcbiAgICByZXR1cm4gbWVyZ2VXaXRoRGVmYXVsdFRhYmxlcm9zKG5vcm1hbGl6ZWQpXG4gIH1cblxuICBjb25zdCBub3JtYWxpemVkID0gdGFibGVyb3NcbiAgICAuZmlsdGVyKGlzRXF1aXBvKVxuICAgIC5tYXAoYm9hcmQgPT4gKHsgbmFtZTogYm9hcmQubmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSwgY29sb3I6IGJvYXJkLmNvbG9yIH0pKVxuICAgIC5maWx0ZXIoYm9hcmQgPT4gQm9vbGVhbihib2FyZC5uYW1lKSlcbiAgcmV0dXJuIG1lcmdlV2l0aERlZmF1bHRUYWJsZXJvcyhub3JtYWxpemVkKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUG9tb2Rvcm9Gcm9tU2V0dGluZ3MocmF3RGF0YTogdW5rbm93bik6IFBvbW9kb3JvU3RhdGUge1xuICBpZiAoIWlzUmVjb3JkKHJhd0RhdGEpKVxuICAgIHJldHVybiBub3JtYWxpemVQb21vZG9yb1N0YXRlKG51bGwpXG5cbiAgcmV0dXJuIG5vcm1hbGl6ZVBvbW9kb3JvU3RhdGUocmF3RGF0YS5wb21vZG9ybylcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEVxdWlwb3MocmF3RGF0YTogdW5rbm93bik6IHVua25vd25bXSB8IHVuZGVmaW5lZCB7XG4gIGlmICghaXNSZWNvcmQocmF3RGF0YSkpXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuXG4gIGNvbnN0IGVxdWlwb3MgPSByYXdEYXRhLmVxdWlwb3NcbiAgaWYgKCFBcnJheS5pc0FycmF5KGVxdWlwb3MpKVxuICAgIHJldHVybiB1bmRlZmluZWRcblxuICByZXR1cm4gZXF1aXBvc1xufVxuXG5mdW5jdGlvbiBleHRyYWN0VGFibGVyb3MocmF3RGF0YTogdW5rbm93bik6IHVua25vd25bXSB8IHVuZGVmaW5lZCB7XG4gIGlmICghaXNSZWNvcmQocmF3RGF0YSkpXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuXG4gIGNvbnN0IHRhYmxlcm9zID0gcmF3RGF0YS50YWJsZXJvc1xuICBpZiAoIUFycmF5LmlzQXJyYXkodGFibGVyb3MpKVxuICAgIHJldHVybiB1bmRlZmluZWRcblxuICByZXR1cm4gdGFibGVyb3Ncbn1cblxuZnVuY3Rpb24gc2hvdWxkUmV1c2VFcXVpcG9zQXNCb2FyZHMocmF3RGF0YTogdW5rbm93bik6IGJvb2xlYW4ge1xuICBjb25zdCBlcXVpcG9zID0gZXh0cmFjdEVxdWlwb3MocmF3RGF0YSlcbiAgaWYgKCFlcXVpcG9zIHx8IGVxdWlwb3MubGVuZ3RoID09PSAwKVxuICAgIHJldHVybiBmYWxzZVxuXG4gIGlmIChpc1N0cmluZ0FycmF5KGVxdWlwb3MpKVxuICAgIHJldHVybiBlcXVpcG9zLnNvbWUobmFtZSA9PiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSAnZGVmYXVsdCcpXG5cbiAgY29uc3QgbmFtZWRFcXVpcG9zID0gZXF1aXBvcy5maWx0ZXIoaXNFcXVpcG8pXG4gIHJldHVybiBuYW1lZEVxdWlwb3Muc29tZShpdGVtID0+IGl0ZW0ubmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSA9PT0gJ2RlZmF1bHQnKVxufVxuXG5mdW5jdGlvbiBpc0VxdWlwbyh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIEVxdWlwbyB7XG4gIGlmICghaXNSZWNvcmQodmFsdWUpKVxuICAgIHJldHVybiBmYWxzZVxuXG4gIHJldHVybiB0eXBlb2YgdmFsdWUubmFtZSA9PT0gJ3N0cmluZydcbiAgICAmJiB0eXBlb2YgdmFsdWUuY29sb3IgPT09ICdzdHJpbmcnXG4gICAgJiYgKHR5cGVvZiB2YWx1ZS50YWJsZXJvID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdmFsdWUudGFibGVybyA9PT0gJ3N0cmluZycpXG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nQXJyYXkodmFsdWU6IHVua25vd25bXSk6IHZhbHVlIGlzIHN0cmluZ1tdIHtcbiAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGl0ZW0gPT4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKVxufVxuXG5mdW5jdGlvbiBtZXJnZVdpdGhEZWZhdWx0RXF1aXBvcyhlcXVpcG9zOiBFcXVpcG9bXSk6IEVxdWlwb1tdIHtcbiAgY29uc3QgZGVmYXVsdHNCeU5hbWUgPSBuZXcgTWFwKERFRkFVTFRfRVFVSVBPUy5tYXAoZXF1aXBvID0+IFtlcXVpcG8ubmFtZSwgZXF1aXBvXSkpXG4gIGNvbnN0IG5vcm1hbGl6ZWRCeU5hbWUgPSBuZXcgTWFwKGVxdWlwb3MubWFwKGVxdWlwbyA9PiBbZXF1aXBvLm5hbWUsIGVxdWlwb10pKVxuXG4gIGNvbnN0IHdpdGhEZWZhdWx0cyA9IERFRkFVTFRfRVFVSVBPUy5tYXAoKGVxdWlwbykgPT4ge1xuICAgIGNvbnN0IHNhdmVkRXF1aXBvID0gbm9ybWFsaXplZEJ5TmFtZS5nZXQoZXF1aXBvLm5hbWUpXG4gICAgcmV0dXJuIHNhdmVkRXF1aXBvID8geyAuLi5zYXZlZEVxdWlwbyB9IDogeyAuLi5lcXVpcG8gfVxuICB9KVxuXG4gIGNvbnN0IGN1c3RvbUVxdWlwb3MgPSBlcXVpcG9zLmZpbHRlcihlcXVpcG8gPT4gIWRlZmF1bHRzQnlOYW1lLmhhcyhlcXVpcG8ubmFtZSkpXG4gIHJldHVybiBbLi4ud2l0aERlZmF1bHRzLCAuLi5jdXN0b21FcXVpcG9zXVxufVxuXG5mdW5jdGlvbiBtZXJnZVdpdGhEZWZhdWx0VGFibGVyb3ModGFibGVyb3M6IEVxdWlwb1tdKTogRXF1aXBvW10ge1xuICBjb25zdCBkZWZhdWx0c0J5TmFtZSA9IG5ldyBNYXAoREVGQVVMVF9UQUJMRVJPUy5tYXAoYm9hcmQgPT4gW2JvYXJkLm5hbWUsIGJvYXJkXSkpXG4gIGNvbnN0IG5vcm1hbGl6ZWRCeU5hbWUgPSBuZXcgTWFwKHRhYmxlcm9zLm1hcChib2FyZCA9PiBbYm9hcmQubmFtZSwgYm9hcmRdKSlcblxuICBjb25zdCB3aXRoRGVmYXVsdHMgPSBERUZBVUxUX1RBQkxFUk9TLm1hcCgoYm9hcmQpID0+IHtcbiAgICBjb25zdCBzYXZlZEJvYXJkID0gbm9ybWFsaXplZEJ5TmFtZS5nZXQoYm9hcmQubmFtZSlcbiAgICByZXR1cm4gc2F2ZWRCb2FyZCA/IHsgLi4uc2F2ZWRCb2FyZCB9IDogeyAuLi5ib2FyZCB9XG4gIH0pXG5cbiAgY29uc3QgY3VzdG9tQm9hcmRzID0gdGFibGVyb3MuZmlsdGVyKGJvYXJkID0+ICFkZWZhdWx0c0J5TmFtZS5oYXMoYm9hcmQubmFtZSkpXG4gIHJldHVybiBbLi4ud2l0aERlZmF1bHRzLCAuLi5jdXN0b21Cb2FyZHNdXG59XG4iLCJpbXBvcnQgdHlwZSB7IEFwcCwgVEFic3RyYWN0RmlsZSwgVEZpbGUsIFRGb2xkZXIgfSBmcm9tICdvYnNpZGlhbidcblxuaW1wb3J0IHtcbiAgQ0FOQ0VMTEVEX1NVQlRBU0tTX0ZPTERFUixcbiAgQ0FOQ0VMTEVEX1RBU0tTX0ZPTERFUixcbiAgQ09NUExFVEVEX1NVQlRBU0tTX0ZPTERFUixcbiAgQ09NUExFVEVEX1RBU0tTX0ZPTERFUixcbiAgREVGQVVMVF9CT0FSRF9OQU1FLFxufSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBnZXRCb2FyZEZvbGRlciwgZ2V0Qm9hcmRTdWJ0YXNrc0ZvbGRlciB9IGZyb20gJy4vdGFza0VuZ2luZSdcbmltcG9ydCB7XG4gIGFwcGVuZFRhc2tMaW5rVG9DYW5jZWxsZWRJbmRleCxcbiAgYXBwZW5kVGFza0xpbmtUb0ZpbmlzaGVkSW5kZXgsXG4gIGFwcGVuZFRhc2tMaW5rVG9JbmRleCxcbiAgcmVtb3ZlVGFza0xpbmtGcm9tQ2FuY2VsbGVkSW5kZXgsXG4gIHJlbW92ZVRhc2tMaW5rRnJvbUZpbmlzaGVkSW5kZXgsXG4gIHJlbW92ZVRhc2tMaW5rRnJvbUluZGV4LFxufSBmcm9tICcuL3Rhc2tJbmRleEVuZ2luZSdcbmltcG9ydCB7IHN5bmNUYXNrVHlwZVRhZ3MgfSBmcm9tICcuL2Zyb250bWF0dGVyRW5naW5lJ1xuaW1wb3J0IHsgdG9UYXNrRnJvbnRtYXR0ZXIgfSBmcm9tICcuLi91dGlscy9ndWFyZHMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtb3ZlVGFza1RvQ29tcGxldGVkRm9sZGVyKGFwcDogQXBwLCBmaWxlOiBURmlsZSwgaXNTdWJ0YXNrID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgdGFyZ2V0Rm9sZGVyID0gaXNTdWJ0YXNrID8gQ09NUExFVEVEX1NVQlRBU0tTX0ZPTERFUiA6IENPTVBMRVRFRF9UQVNLU19GT0xERVJcbiAgYXdhaXQgZW5zdXJlRm9sZGVyKGFwcCwgdGFyZ2V0Rm9sZGVyKVxuICBjb25zdCBuZXh0UGF0aCA9IHJlc29sdmVVbmlxdWVQYXRoKGFwcCwgYCR7dGFyZ2V0Rm9sZGVyfS8ke2ZpbGUubmFtZX1gKVxuICBpZiAobmV4dFBhdGggPT09IGZpbGUucGF0aClcbiAgICByZXR1cm5cblxuICBhd2FpdCByZW1vdmVUYXNrRnJvbUFsbEluZGV4ZXMoYXBwLCBmaWxlKVxuICBhd2FpdCBhcHAuZmlsZU1hbmFnZXIucmVuYW1lRmlsZShmaWxlLCBuZXh0UGF0aClcbiAgYXdhaXQgYXBwZW5kVGFza0xpbmtUb0ZpbmlzaGVkSW5kZXgoYXBwLCBmaWxlKVxuICBhd2FpdCBzeW5jVGFza1R5cGVUYWdzKGFwcClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1vdmVUYXNrVG9DYW5jZWxsZWRGb2xkZXIoYXBwOiBBcHAsIGZpbGU6IFRGaWxlLCBpc1N1YnRhc2sgPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB0YXJnZXRGb2xkZXIgPSBpc1N1YnRhc2sgPyBDQU5DRUxMRURfU1VCVEFTS1NfRk9MREVSIDogQ0FOQ0VMTEVEX1RBU0tTX0ZPTERFUlxuICBhd2FpdCBlbnN1cmVGb2xkZXIoYXBwLCB0YXJnZXRGb2xkZXIpXG4gIGNvbnN0IG5leHRQYXRoID0gcmVzb2x2ZVVuaXF1ZVBhdGgoYXBwLCBgJHt0YXJnZXRGb2xkZXJ9LyR7ZmlsZS5uYW1lfWApXG4gIGlmIChuZXh0UGF0aCA9PT0gZmlsZS5wYXRoKVxuICAgIHJldHVyblxuXG4gIGF3YWl0IHJlbW92ZVRhc2tGcm9tQWxsSW5kZXhlcyhhcHAsIGZpbGUpXG4gIGF3YWl0IGFwcC5maWxlTWFuYWdlci5yZW5hbWVGaWxlKGZpbGUsIG5leHRQYXRoKVxuICBhd2FpdCBhcHBlbmRUYXNrTGlua1RvQ2FuY2VsbGVkSW5kZXgoYXBwLCBmaWxlKVxuICBhd2FpdCBzeW5jVGFza1R5cGVUYWdzKGFwcClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1vdmVUYXNrVG9BY3RpdmVGb2xkZXIoYXBwOiBBcHAsIGZpbGU6IFRGaWxlLCBpc1N1YnRhc2sgPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB0YXJnZXRCb2FyZCA9IHJlc29sdmVUYXNrQm9hcmRGb3JGaWxlKGFwcCwgZmlsZSlcbiAgY29uc3QgdGFyZ2V0Rm9sZGVyID0gaXNTdWJ0YXNrXG4gICAgPyBnZXRCb2FyZFN1YnRhc2tzRm9sZGVyKHRhcmdldEJvYXJkKVxuICAgIDogZ2V0Qm9hcmRGb2xkZXIodGFyZ2V0Qm9hcmQpXG4gIGF3YWl0IGVuc3VyZUZvbGRlcihhcHAsIHRhcmdldEZvbGRlcilcbiAgY29uc3QgbmV4dFBhdGggPSByZXNvbHZlVW5pcXVlUGF0aChhcHAsIGAke3RhcmdldEZvbGRlcn0vJHtmaWxlLm5hbWV9YClcbiAgaWYgKG5leHRQYXRoID09PSBmaWxlLnBhdGgpXG4gICAgcmV0dXJuXG5cbiAgYXdhaXQgcmVtb3ZlVGFza0Zyb21BbGxJbmRleGVzKGFwcCwgZmlsZSlcbiAgYXdhaXQgYXBwLmZpbGVNYW5hZ2VyLnJlbmFtZUZpbGUoZmlsZSwgbmV4dFBhdGgpXG4gIGF3YWl0IGFwcGVuZFRhc2tMaW5rVG9JbmRleChhcHAsIGZpbGUpXG4gIGF3YWl0IHN5bmNUYXNrVHlwZVRhZ3MoYXBwKVxufVxuXG5hc3luYyBmdW5jdGlvbiByZW1vdmVUYXNrRnJvbUFsbEluZGV4ZXMoYXBwOiBBcHAsIGZpbGU6IFRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IHJlbW92ZVRhc2tMaW5rRnJvbUluZGV4KGFwcCwgZmlsZSlcbiAgYXdhaXQgcmVtb3ZlVGFza0xpbmtGcm9tRmluaXNoZWRJbmRleChhcHAsIGZpbGUpXG4gIGF3YWl0IHJlbW92ZVRhc2tMaW5rRnJvbUNhbmNlbGxlZEluZGV4KGFwcCwgZmlsZSlcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVRhc2tCb2FyZEZvckZpbGUoYXBwOiBBcHAsIGZpbGU6IFRGaWxlKTogc3RyaW5nIHtcbiAgY29uc3QgcmF3RnJvbnRtYXR0ZXIgPSBhcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk/LmZyb250bWF0dGVyXG4gIGNvbnN0IGZyb250bWF0dGVyID0gdG9UYXNrRnJvbnRtYXR0ZXIocmF3RnJvbnRtYXR0ZXIpXG4gIGNvbnN0IHJhd0JvYXJkID0gKGZyb250bWF0dGVyPy50YWJsZXJvIHx8ICcnKS50cmltKCkudG9Mb3dlckNhc2UoKVxuICByZXR1cm4gcmF3Qm9hcmQgfHwgREVGQVVMVF9CT0FSRF9OQU1FXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVVbmlxdWVQYXRoKGFwcDogQXBwLCBkZXNpcmVkUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgZXhpc3RpbmcgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGRlc2lyZWRQYXRoKVxuICBpZiAoIWV4aXN0aW5nIHx8IGV4aXN0aW5nLnBhdGggPT09IGRlc2lyZWRQYXRoKVxuICAgIHJldHVybiBkZXNpcmVkUGF0aFxuXG4gIGNvbnN0IGRvdEluZGV4ID0gZGVzaXJlZFBhdGgubGFzdEluZGV4T2YoJy4nKVxuICBjb25zdCBiYXNlID0gZG90SW5kZXggPiAwID8gZGVzaXJlZFBhdGguc2xpY2UoMCwgZG90SW5kZXgpIDogZGVzaXJlZFBhdGhcbiAgY29uc3QgZXh0ID0gZG90SW5kZXggPiAwID8gZGVzaXJlZFBhdGguc2xpY2UoZG90SW5kZXgpIDogJydcbiAgcmV0dXJuIGAke2Jhc2V9ICR7RGF0ZS5ub3coKX0ke2V4dH1gXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZUZvbGRlcihhcHA6IEFwcCwgcGF0aDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLycpLmZpbHRlcihCb29sZWFuKVxuICBsZXQgY3VycmVudFBhdGggPSAnJ1xuICBmb3IgKGNvbnN0IHNlZ21lbnQgb2Ygc2VnbWVudHMpIHtcbiAgICBjdXJyZW50UGF0aCA9IGN1cnJlbnRQYXRoID8gYCR7Y3VycmVudFBhdGh9LyR7c2VnbWVudH1gIDogc2VnbWVudFxuICAgIGNvbnN0IGV4aXN0aW5nID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChjdXJyZW50UGF0aClcbiAgICBpZiAoaXNGb2xkZXIoZXhpc3RpbmcpKVxuICAgICAgY29udGludWVcblxuICAgIGlmIChleGlzdGluZylcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGNyZWF0ZSBmb2xkZXIgXCIke2N1cnJlbnRQYXRofVwiIGJlY2F1c2UgYSBmaWxlIHdpdGggdGhhdCBuYW1lIGV4aXN0cy5gKVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFwcC52YXVsdC5jcmVhdGVGb2xkZXIoY3VycmVudFBhdGgpXG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgIGNvbnN0IHJldHJ5ID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChjdXJyZW50UGF0aClcbiAgICAgIGlmIChpc0ZvbGRlcihyZXRyeSkpXG4gICAgICAgIGNvbnRpbnVlXG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGNyZWF0ZSBmb2xkZXIgXCIke2N1cnJlbnRQYXRofVwiLmApXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzRm9sZGVyKGZpbGU6IFRBYnN0cmFjdEZpbGUgfCBudWxsKTogZmlsZSBpcyBURm9sZGVyIHtcbiAgcmV0dXJuIGZpbGUgIT09IG51bGwgJiYgJ2NoaWxkcmVuJyBpbiBmaWxlXG59XG4iLCJpbXBvcnQgeyBPUkRFUl9TVEVQIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHR5cGUgeyBUYXNrSXRlbSB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVvcmRlckxpc3Q8VD4oaXRlbXM6IFRbXSwgZnJvbUluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcik6IFRbXSB7XG4gIGlmIChmcm9tSW5kZXggPCAwIHx8IHRvSW5kZXggPCAwIHx8IGZyb21JbmRleCA9PT0gdG9JbmRleClcbiAgICByZXR1cm4gaXRlbXNcblxuICBjb25zdCBuZXh0ID0gWy4uLml0ZW1zXVxuICBjb25zdCBbbW92ZWRdID0gbmV4dC5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICBuZXh0LnNwbGljZSh0b0luZGV4LCAwLCBtb3ZlZClcbiAgcmV0dXJuIG5leHRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBlcnNpc3RUYXNrT3JkZXIoXG4gIHRhc2tzOiBUYXNrSXRlbVtdLFxuICB1cGRhdGVyOiAodGFzazogVGFza0l0ZW0sIG9yZGVyOiBudW1iZXIpID0+IFByb21pc2U8dm9pZD4sXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgZm9yIChjb25zdCBbaW5kZXgsIHRhc2tdIG9mIHRhc2tzLmVudHJpZXMoKSlcbiAgICBhd2FpdCB1cGRhdGVyKHRhc2ssIChpbmRleCArIDEpICogT1JERVJfU1RFUClcbn1cbiIsImltcG9ydCB7IFRGaWxlLCBURm9sZGVyLCB0eXBlIEFwcCB9IGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQgeyBQT01PRE9ST19MT0dfQkFTRU5BTUUsIFRBUkVBU19GT0xERVIgfSBmcm9tICcuLi9jb25zdGFudHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9tb2Rvcm9Mb2dFbnRyeSB7XG4gIGRhdGU6IHN0cmluZ1xuICB0aW1lOiBzdHJpbmdcbiAgdHlwZTogc3RyaW5nXG4gIGR1cmF0aW9uQ2hvaWNlOiBzdHJpbmdcbiAgdGFzazogc3RyaW5nXG4gIGR1cmF0aW9uTWludXRlczogbnVtYmVyXG4gIGRldmlhdGlvbkhvdXJzOiBudW1iZXJcbiAgZmluYWxpemVkOiBib29sZWFuXG59XG5cbmludGVyZmFjZSBBcHBlbmRQb21vZG9yb0xvZ0VudHJ5SW5wdXQge1xuICB0aW1lc3RhbXBNczogbnVtYmVyXG4gIHR5cGU6IHN0cmluZ1xuICBkdXJhdGlvbkNob2ljZTogc3RyaW5nXG4gIHRhc2s6IHN0cmluZ1xuICBkdXJhdGlvbk1pbnV0ZXM6IG51bWJlclxuICBkZXZpYXRpb25Ib3VyczogbnVtYmVyXG4gIGZpbmFsaXplZDogYm9vbGVhblxufVxuXG5jb25zdCBQT01PRE9ST19MT0dfUEFUSCA9IGAke1RBUkVBU19GT0xERVJ9LyR7UE9NT0RPUk9fTE9HX0JBU0VOQU1FfS5tZGBcbmNvbnN0IFBPTU9ET1JPX0xPR19IRUFERVIgPSBbXG4gICcjIFJlZ2lzdHJvIFBvbW9kb3JvJyxcbiAgJycsXG4gICd8IGZlY2hhIHwgaG9yYXJpbyB8IHRpcG8gZGUgcG9tb2Rvcm8gfCBkdXJhY2lvbiBlbGVnaWRhIHwgdGFyZWEgfCB0aWVtcG8gfCBkZXN2aW8gfCBmaW5hbGl6YWNpb24gfCcsXG4gICd8IC0tLSB8IC0tLSB8IC0tLSB8IC0tLSB8IC0tLSB8IC0tLSB8IC0tLSB8IC0tLSB8Jyxcbl0uam9pbignXFxuJylcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcGVuZFBvbW9kb3JvTG9nRW50cnkoYXBwOiBBcHAsIGlucHV0OiBBcHBlbmRQb21vZG9yb0xvZ0VudHJ5SW5wdXQpIHtcbiAgYXdhaXQgZW5zdXJlUG9tb2Rvcm9Mb2dGaWxlKGFwcClcblxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoaW5wdXQudGltZXN0YW1wTXMpXG4gIGNvbnN0IGRhdGVUZXh0ID0gdG9Mb2NhbERhdGVUZXh0KGRhdGUpXG4gIGNvbnN0IHRpbWVUZXh0ID0gdG9Mb2NhbFRpbWVUZXh0KGRhdGUpXG4gIGNvbnN0IHR5cGVUZXh0ID0gc2FuaXRpemVQaXBlVGV4dChpbnB1dC50eXBlKVxuICBjb25zdCBkdXJhdGlvbkNob2ljZVRleHQgPSBzYW5pdGl6ZVBpcGVUZXh0KGlucHV0LmR1cmF0aW9uQ2hvaWNlKVxuICBjb25zdCB0YXNrVGV4dCA9IHNhbml0aXplUGlwZVRleHQoaW5wdXQudGFzaylcbiAgY29uc3QgZHVyYXRpb25NaW51dGVzVGV4dCA9IGZvcm1hdE1pbnV0ZXMoaW5wdXQuZHVyYXRpb25NaW51dGVzKVxuICBjb25zdCBkZXZpYXRpb25UZXh0ID0gZm9ybWF0SG91cnMoaW5wdXQuZGV2aWF0aW9uSG91cnMpXG4gIGNvbnN0IGZpbmFsaXplZFRleHQgPSBpbnB1dC5maW5hbGl6ZWQgPyAndHJ1ZScgOiAnZmFsc2UnXG4gIGNvbnN0IHJvdyA9IGB8ICR7ZGF0ZVRleHR9IHwgJHt0aW1lVGV4dH0gfCAke3R5cGVUZXh0fSB8ICR7ZHVyYXRpb25DaG9pY2VUZXh0fSB8ICR7dGFza1RleHR9IHwgJHtkdXJhdGlvbk1pbnV0ZXNUZXh0fSB8ICR7ZGV2aWF0aW9uVGV4dH0gfCAke2ZpbmFsaXplZFRleHR9IHxgXG5cbiAgY29uc3QgZmlsZSA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoUE9NT0RPUk9fTE9HX1BBVEgpXG4gIGlmICghKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpXG4gICAgcmV0dXJuXG5cbiAgY29uc3QgY3VycmVudCA9IGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKGZpbGUpXG4gIGNvbnN0IG5leHRDb250ZW50ID0gY3VycmVudC50cmltRW5kKClcbiAgICA/IGAke2N1cnJlbnQudHJpbUVuZCgpfVxcbiR7cm93fVxcbmBcbiAgICA6IGAke1BPTU9ET1JPX0xPR19IRUFERVJ9XFxuJHtyb3d9XFxuYFxuICBhd2FpdCBhcHAudmF1bHQubW9kaWZ5KGZpbGUsIG5leHRDb250ZW50KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVhZFBvbW9kb3JvTG9nRW50cmllcyhhcHA6IEFwcCk6IFByb21pc2U8UG9tb2Rvcm9Mb2dFbnRyeVtdPiB7XG4gIGF3YWl0IGVuc3VyZVBvbW9kb3JvTG9nRmlsZShhcHApXG5cbiAgY29uc3QgZmlsZSA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoUE9NT0RPUk9fTE9HX1BBVEgpXG4gIGlmICghKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpXG4gICAgcmV0dXJuIFtdXG5cbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKGZpbGUpXG4gIGNvbnN0IGVudHJpZXM6IFBvbW9kb3JvTG9nRW50cnlbXSA9IFtdXG5cbiAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KC9cXHI/XFxuLylcbiAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgaWYgKCFsaW5lLnRyaW0oKS5zdGFydHNXaXRoKCd8JykpXG4gICAgICBjb250aW51ZVxuXG4gICAgaWYgKGxpbmUuaW5jbHVkZXMoJ2ZlY2hhIHwgaG9yYXJpbyB8IHRpcG8gZGUgcG9tb2Rvcm8nKSlcbiAgICAgIGNvbnRpbnVlXG5cbiAgICBpZiAobGluZS5pbmNsdWRlcygnfCAtLS0gfCcpKVxuICAgICAgY29udGludWVcblxuICAgIGNvbnN0IGNvbHVtbnMgPSBsaW5lLnNwbGl0KCd8JykubWFwKGl0ZW0gPT4gaXRlbS50cmltKCkpLmZpbHRlcihCb29sZWFuKVxuICAgIGlmIChjb2x1bW5zLmxlbmd0aCA8IDUpXG4gICAgICBjb250aW51ZVxuXG4gICAgY29uc3QgaGFzRHVyYXRpb25Db2x1bW5zID0gY29sdW1ucy5sZW5ndGggPj0gN1xuICAgIGNvbnN0IGhhc0ZpbmFsaXplZENvbHVtbiA9IGNvbHVtbnMubGVuZ3RoID49IDhcbiAgICBjb25zdCBkdXJhdGlvbkNob2ljZSA9IGhhc0R1cmF0aW9uQ29sdW1ucyA/IGNvbHVtbnNbM10gOiAnLSdcbiAgICBjb25zdCB0YXNrID0gaGFzRHVyYXRpb25Db2x1bW5zID8gY29sdW1uc1s0XSA6IGNvbHVtbnNbM11cbiAgICBjb25zdCBkdXJhdGlvbk1pbnV0ZXMgPSBoYXNEdXJhdGlvbkNvbHVtbnMgPyBOdW1iZXIucGFyc2VGbG9hdChjb2x1bW5zWzVdKSA6IDBcbiAgICBjb25zdCBkZXZpYXRpb25Ib3VycyA9IE51bWJlci5wYXJzZUZsb2F0KGhhc0R1cmF0aW9uQ29sdW1ucyA/IGNvbHVtbnNbNl0gOiBjb2x1bW5zWzRdKVxuICAgIGNvbnN0IGZpbmFsaXplZFZhbHVlID0gaGFzRmluYWxpemVkQ29sdW1uID8gY29sdW1uc1s3XSA6ICd0cnVlJ1xuXG4gICAgZW50cmllcy5wdXNoKHtcbiAgICAgIGRhdGU6IGNvbHVtbnNbMF0sXG4gICAgICB0aW1lOiBjb2x1bW5zWzFdLFxuICAgICAgdHlwZTogY29sdW1uc1syXSxcbiAgICAgIGR1cmF0aW9uQ2hvaWNlLFxuICAgICAgdGFzayxcbiAgICAgIGR1cmF0aW9uTWludXRlczogTnVtYmVyLmlzTmFOKGR1cmF0aW9uTWludXRlcykgPyAwIDogZHVyYXRpb25NaW51dGVzLFxuICAgICAgZGV2aWF0aW9uSG91cnM6IE51bWJlci5pc05hTihkZXZpYXRpb25Ib3VycykgPyAwIDogZGV2aWF0aW9uSG91cnMsXG4gICAgICBmaW5hbGl6ZWQ6IGZpbmFsaXplZFZhbHVlLnRvTG93ZXJDYXNlKCkgIT09ICdmYWxzZScsXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlbnRyaWVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbnRyaWVzQnlEYXRlKGVudHJpZXM6IFBvbW9kb3JvTG9nRW50cnlbXSwgbG9jYWxEYXRlVGV4dDogc3RyaW5nKTogUG9tb2Rvcm9Mb2dFbnRyeVtdIHtcbiAgcmV0dXJuIGVudHJpZXMuZmlsdGVyKGVudHJ5ID0+IGVudHJ5LmRhdGUgPT09IGxvY2FsRGF0ZVRleHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0xvY2FsRGF0ZVRleHQoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgY29uc3QgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKVxuICBjb25zdCBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJylcbiAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWBcbn1cblxuZnVuY3Rpb24gdG9Mb2NhbFRpbWVUZXh0KGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICBjb25zdCBob3VycyA9IFN0cmluZyhkYXRlLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJylcbiAgY29uc3QgbWludXRlcyA9IFN0cmluZyhkYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKVxuICByZXR1cm4gYCR7aG91cnN9OiR7bWludXRlc31gXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVBvbW9kb3JvTG9nRmlsZShhcHA6IEFwcCkge1xuICBjb25zdCBmb2xkZXIgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKFRBUkVBU19GT0xERVIpXG4gIGlmICghZm9sZGVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFwcC52YXVsdC5jcmVhdGVGb2xkZXIoVEFSRUFTX0ZPTERFUilcbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgY29uc3QgcmV0cnkgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKFRBUkVBU19GT0xERVIpXG4gICAgICBpZiAoIShyZXRyeSBpbnN0YW5jZW9mIFRGb2xkZXIpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHNlIHB1ZG8gY3JlYXIgbGEgY2FycGV0YSBcIiR7VEFSRUFTX0ZPTERFUn1cIi5gKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGV4aXN0aW5nID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChQT01PRE9ST19MT0dfUEFUSClcbiAgaWYgKGV4aXN0aW5nKVxuICAgIHJldHVyblxuXG4gIGF3YWl0IGFwcC52YXVsdC5jcmVhdGUoUE9NT0RPUk9fTE9HX1BBVEgsIGAke1BPTU9ET1JPX0xPR19IRUFERVJ9XFxuYClcbn1cblxuZnVuY3Rpb24gc2FuaXRpemVQaXBlVGV4dCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xcfC9nLCAnLycpLnRyaW0oKSB8fCAnLSdcbn1cblxuZnVuY3Rpb24gZm9ybWF0SG91cnMoaG91cnM6IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiAoTWF0aC5yb3VuZChob3VycyAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMilcbn1cblxuZnVuY3Rpb24gZm9ybWF0TWludXRlcyhtaW51dGVzOiBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gKE1hdGgucm91bmQobWludXRlcyAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMilcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb2xvclBpY2tlcihcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgY29sb3JzOiBzdHJpbmdbXSxcbiAgc2VsZWN0ZWQ6IHN0cmluZyxcbiAgb25DaGFuZ2U6IChuZXh0Q29sb3I6IHN0cmluZykgPT4gdm9pZCxcbikge1xuICBjb25zdCB3cmFwID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jb2xvci1waWNrZXInIH0pXG5cbiAgZm9yIChjb25zdCBjb2xvciBvZiBjb2xvcnMpIHtcbiAgICBjb25zdCBzd2F0Y2ggPSB3cmFwLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICd0YXJlYXMtY29sb3Itc3dhdGNoJyB9KVxuICAgIHN3YXRjaC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3JcblxuICAgIGlmIChjb2xvciA9PT0gc2VsZWN0ZWQpXG4gICAgICBzd2F0Y2guYWRkQ2xhc3MoJ3RhcmVhcy1zd2F0Y2gtc2VsZWN0ZWQnKVxuXG4gICAgc3dhdGNoLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBvbkNoYW5nZShjb2xvcilcbiAgICAgIG1hcmtTZWxlY3RlZCh3cmFwLCBzd2F0Y2gpXG4gICAgICBjdXN0b21JbnB1dC52YWx1ZSA9IGNvbG9yXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY3VzdG9tSW5wdXQgPSB3cmFwLmNyZWF0ZUVsKCdpbnB1dCcpXG4gIGN1c3RvbUlucHV0LnR5cGUgPSAnY29sb3InXG4gIGN1c3RvbUlucHV0LnZhbHVlID0gc2VsZWN0ZWRcbiAgY3VzdG9tSW5wdXQuY2xhc3NOYW1lID0gJ3RhcmVhcy1jb2xvci1pbnB1dCdcbiAgY3VzdG9tSW5wdXQub25pbnB1dCA9ICgpID0+IHtcbiAgICBvbkNoYW5nZShjdXN0b21JbnB1dC52YWx1ZSlcbiAgICBjbGVhclNlbGVjdGVkKHdyYXApXG4gIH1cblxuICByZXR1cm4geyB3cmFwLCBjdXN0b21JbnB1dCB9XG59XG5cbmZ1bmN0aW9uIG1hcmtTZWxlY3RlZCh3cmFwOiBIVE1MRWxlbWVudCwgc2VsZWN0ZWRTd2F0Y2g6IEhUTUxFbGVtZW50KSB7XG4gIGNsZWFyU2VsZWN0ZWQod3JhcClcbiAgc2VsZWN0ZWRTd2F0Y2guYWRkQ2xhc3MoJ3RhcmVhcy1zd2F0Y2gtc2VsZWN0ZWQnKVxufVxuXG5mdW5jdGlvbiBjbGVhclNlbGVjdGVkKHdyYXA6IEhUTUxFbGVtZW50KSB7XG4gIHdyYXBcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy1jb2xvci1zd2F0Y2gnKVxuICAgIC5mb3JFYWNoKHN3YXRjaCA9PiBzd2F0Y2guY2xhc3NMaXN0LnJlbW92ZSgndGFyZWFzLXN3YXRjaC1zZWxlY3RlZCcpKVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7IExPQ0tFRF9FUVVJUE9fTkFNRVMsIFBSRVNFVF9DT0xPUlMgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBjb3VudFRvcExldmVsVGVhbVRhc2tzLCByZW5hbWVUZWFtSW5UYXNrcyB9IGZyb20gJy4uL2VuZ2luZXMvZnJvbnRtYXR0ZXJFbmdpbmUnXG5pbXBvcnQgdHlwZSB7IFRhcmVhc1BsdWdpbiB9IGZyb20gJy4uL3BsdWdpbi9UYXJlYXNQbHVnaW4nXG5pbXBvcnQgdHlwZSB7IEVxdWlwbywgVGFyZWFzVmlld0hhbmRsZSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgY3JlYXRlQ29sb3JQaWNrZXIgfSBmcm9tICcuLi91aS9jb2xvclBpY2tlcidcblxuZXhwb3J0IGNsYXNzIEVkaXRTZWN0aW9uTW9kYWwgZXh0ZW5kcyBvYnNpZGlhbi5Nb2RhbCB7XG4gIHByaXZhdGUgcGx1Z2luOiBUYXJlYXNQbHVnaW5cbiAgcHJpdmF0ZSBlcU9iajogRXF1aXBvXG4gIHByaXZhdGUgYm9hcmROYW1lOiBzdHJpbmdcbiAgcHJpdmF0ZSB2aWV3OiBUYXJlYXNWaWV3SGFuZGxlXG4gIHByaXZhdGUgZGF0YTogeyBuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcgfVxuXG4gIGNvbnN0cnVjdG9yKGFwcDogb2JzaWRpYW4uQXBwLCBwbHVnaW46IFRhcmVhc1BsdWdpbiwgZXFPYmo6IEVxdWlwbywgdmlldzogVGFyZWFzVmlld0hhbmRsZSwgYm9hcmROYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihhcHApXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW5cbiAgICB0aGlzLmVxT2JqID0gZXFPYmpcbiAgICB0aGlzLmJvYXJkTmFtZSA9IGJvYXJkTmFtZVxuICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICB0aGlzLmRhdGEgPSB7IG5hbWU6IGVxT2JqLm5hbWUsIGNvbG9yOiBlcU9iai5jb2xvciB9XG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXNcbiAgICBjb250ZW50RWwuYWRkQ2xhc3MoJ3RhcmVhcy1tb2RhbCcpXG4gICAgY29udGVudEVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ0VkaXRhciBzZWNjacOzbicgfSlcblxuICAgIG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZSgnTm9tYnJlJykuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgdGV4dC5zZXRWYWx1ZSh0aGlzLmRhdGEubmFtZSlcbiAgICAgIHRleHQub25DaGFuZ2UodmFsdWUgPT4gdGhpcy5kYXRhLm5hbWUgPSB2YWx1ZSlcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGV4dC5pbnB1dEVsLmZvY3VzKCksIDUwKVxuICAgIH0pXG5cbiAgICBjb25zdCBjb2xvclNldHRpbmcgPSBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpLnNldE5hbWUoJ0NvbG9yJylcbiAgICBjcmVhdGVDb2xvclBpY2tlcihjb2xvclNldHRpbmcuY29udHJvbEVsLCBQUkVTRVRfQ09MT1JTLCB0aGlzLmRhdGEuY29sb3IsIChuZXh0Q29sb3IpID0+IHtcbiAgICAgIHRoaXMuZGF0YS5jb2xvciA9IG5leHRDb2xvclxuICAgIH0pXG5cbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLW1vZGFsLWZvb3RlcicgfSlcblxuICAgIGlmICghdGhpcy5pc0xvY2tlZFNlY3Rpb24oKSkge1xuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgIHRleHQ6ICdFbGltaW5hciBzZWNjacOzbicsXG4gICAgICAgIGNsczogJ21vZC13YXJuaW5nJyxcbiAgICAgIH0pXG4gICAgICBkZWxldGVCdXR0b24uc3R5bGUubWFyZ2luUmlnaHQgPSAnYXV0bydcbiAgICAgIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jb25maXJtRGVsZXRlKClcbiAgICB9XG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NhbmNlbGFyJyB9KVxuICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jbG9zZSgpXG5cbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdHdWFyZGFyJywgY2xzOiAnbW9kLWN0YScgfSlcbiAgICBzYXZlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLnNhdmUoKVxuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNhdmUoKSB7XG4gICAgY29uc3QgbmV3TmFtZSA9IHRoaXMuZGF0YS5uYW1lLnRyaW0oKVxuICAgIGlmICghbmV3TmFtZSkge1xuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZSgnRWwgbm9tYnJlIGVzIHJlcXVlcmlkbycpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBvbGROYW1lID0gdGhpcy5lcU9iai5uYW1lXG4gICAgaWYgKHRoaXMuaXNMb2NrZWRTZWN0aW9uKCkgJiYgbmV3TmFtZSAhPT0gb2xkTmFtZSkge1xuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShgTGEgc2VjY2nDs24gXCIke29sZE5hbWV9XCIgbm8gcHVlZGUgcmVub21icmFyc2VgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKG5ld05hbWUgIT09IG9sZE5hbWUpXG4gICAgICBhd2FpdCByZW5hbWVUZWFtSW5UYXNrcyh0aGlzLmFwcCwgb2xkTmFtZSwgbmV3TmFtZSwgdGhpcy5ib2FyZE5hbWUpXG5cbiAgICB0aGlzLnBsdWdpbi51cGRhdGVFcXVpcG8ob2xkTmFtZSwgdGhpcy5ib2FyZE5hbWUsIHsgbmFtZTogbmV3TmFtZSwgY29sb3I6IHRoaXMuZGF0YS5jb2xvciB9KVxuICAgIHRoaXMudmlldy5leHBhbmRlZEdyb3Vwcy5kZWxldGUoYCR7dGhpcy5ib2FyZE5hbWV9Ojoke29sZE5hbWV9YClcbiAgICB0aGlzLnZpZXcuZXhwYW5kZWRHcm91cHMuYWRkKGAke3RoaXMuYm9hcmROYW1lfTo6JHtuZXdOYW1lfWApXG4gICAgdGhpcy52aWV3LnJlbmRlcigpXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cblxuICBwcml2YXRlIGNvbmZpcm1EZWxldGUoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2NrZWRTZWN0aW9uKCkpIHtcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYExhIHNlY2Npw7NuIFwiJHt0aGlzLmVxT2JqLm5hbWV9XCIgbm8gc2UgcHVlZGUgZWxpbWluYXJgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGFza0NvdW50ID0gY291bnRUb3BMZXZlbFRlYW1UYXNrcyh0aGlzLmFwcCwgdGhpcy5lcU9iai5uYW1lLCB0aGlzLmJvYXJkTmFtZSlcbiAgICBpZiAodGFza0NvdW50ID4gMCkge1xuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShgTGEgc2VjY2nDs24gXCIke3RoaXMuZXFPYmoubmFtZX1cIiB0aWVuZSAke3Rhc2tDb3VudH0gdGFyZWEocykuIE1vdmFsYXMgYSBvdHJhIHNlY2Npw7NuIGFudGVzIGRlIGVsaW1pbmFyLmApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnBsdWdpbi5yZW1vdmVFcXVpcG8odGhpcy5lcU9iai5uYW1lLCB0aGlzLmJvYXJkTmFtZSlcbiAgICB0aGlzLnZpZXcuZXhwYW5kZWRHcm91cHMuZGVsZXRlKGAke3RoaXMuYm9hcmROYW1lfTo6JHt0aGlzLmVxT2JqLm5hbWV9YClcbiAgICB0aGlzLnZpZXcucmVuZGVyKClcbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBTZWNjacOzbiBcIiR7dGhpcy5lcU9iai5uYW1lfVwiIGVsaW1pbmFkYWApXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cblxuICBwcml2YXRlIGlzTG9ja2VkU2VjdGlvbigpIHtcbiAgICByZXR1cm4gTE9DS0VEX0VRVUlQT19OQU1FUy5pbmNsdWRlcyh0aGlzLmVxT2JqLm5hbWUpXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQgeyBQUkVTRVRfQ09MT1JTIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHR5cGUgeyBUYXJlYXNQbHVnaW4gfSBmcm9tICcuLi9wbHVnaW4vVGFyZWFzUGx1Z2luJ1xuaW1wb3J0IHR5cGUgeyBUYXJlYXNWaWV3SGFuZGxlIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBjcmVhdGVDb2xvclBpY2tlciB9IGZyb20gJy4uL3VpL2NvbG9yUGlja2VyJ1xuXG5leHBvcnQgY2xhc3MgTmV3Qm9hcmRNb2RhbCBleHRlbmRzIG9ic2lkaWFuLk1vZGFsIHtcbiAgcHJpdmF0ZSBwbHVnaW46IFRhcmVhc1BsdWdpblxuICBwcml2YXRlIHZpZXc6IFRhcmVhc1ZpZXdIYW5kbGVcbiAgcHJpdmF0ZSBkYXRhOiB7IG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyB9XG5cbiAgY29uc3RydWN0b3IoYXBwOiBvYnNpZGlhbi5BcHAsIHBsdWdpbjogVGFyZWFzUGx1Z2luLCB2aWV3OiBUYXJlYXNWaWV3SGFuZGxlKSB7XG4gICAgc3VwZXIoYXBwKVxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luXG4gICAgdGhpcy52aWV3ID0gdmlld1xuICAgIHRoaXMuZGF0YSA9IHsgbmFtZTogJycsIGNvbG9yOiBQUkVTRVRfQ09MT1JTWzFdIH1cbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpc1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLW1vZGFsJylcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnTnVldm8gVGFibGVybycgfSlcblxuICAgIG5ldyBvYnNpZGlhbi5TZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZSgnTm9tYnJlIGRlbCB0YWJsZXJvJykuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgdGV4dC5zZXRQbGFjZWhvbGRlcignRWo6IHBlcnNvbmFsLCBlc3R1ZGlvLCB0cmFiYWpvJylcbiAgICAgIHRleHQub25DaGFuZ2UodmFsdWUgPT4gdGhpcy5kYXRhLm5hbWUgPSB2YWx1ZSlcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGV4dC5pbnB1dEVsLmZvY3VzKCksIDUwKVxuICAgIH0pXG5cbiAgICBjb25zdCBjb2xvclNldHRpbmcgPSBuZXcgb2JzaWRpYW4uU2V0dGluZyhjb250ZW50RWwpLnNldE5hbWUoJ0NvbG9yJylcbiAgICBjcmVhdGVDb2xvclBpY2tlcihjb2xvclNldHRpbmcuY29udHJvbEVsLCBQUkVTRVRfQ09MT1JTLCB0aGlzLmRhdGEuY29sb3IsIChuZXh0Q29sb3IpID0+IHtcbiAgICAgIHRoaXMuZGF0YS5jb2xvciA9IG5leHRDb2xvclxuICAgIH0pXG5cbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLW1vZGFsLWZvb3RlcicgfSlcbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NyZWFyIHRhYmxlcm8nLCBjbHM6ICdtb2QtY3RhJyB9KVxuICAgIGNyZWF0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jcmVhdGVCb2FyZCgpXG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NhbmNlbGFyJyB9KVxuICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jbG9zZSgpXG4gIH1cblxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KClcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmROYW1lID0gdGhpcy5kYXRhLm5hbWUudHJpbSgpXG4gICAgaWYgKCFib2FyZE5hbWUpIHtcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoJ0VsIG5vbWJyZSBlcyByZXF1ZXJpZG8nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5wbHVnaW4uYWRkVGFibGVybyhib2FyZE5hbWUsIHRoaXMuZGF0YS5jb2xvcilcbiAgICB0aGlzLnZpZXcucmVuZGVyKClcbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBUYWJsZXJvIFwiJHtib2FyZE5hbWV9XCIgY3JlYWRvYClcbiAgICB0aGlzLmNsb3NlKClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB7IFBSRVNFVF9DT0xPUlMgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgdHlwZSB7IFRhcmVhc1BsdWdpbiB9IGZyb20gJy4uL3BsdWdpbi9UYXJlYXNQbHVnaW4nXG5pbXBvcnQgdHlwZSB7IFRhcmVhc1ZpZXdIYW5kbGUgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IGNyZWF0ZUNvbG9yUGlja2VyIH0gZnJvbSAnLi4vdWkvY29sb3JQaWNrZXInXG5cbmV4cG9ydCBjbGFzcyBOZXdHcm91cE1vZGFsIGV4dGVuZHMgb2JzaWRpYW4uTW9kYWwge1xuICBwcml2YXRlIHBsdWdpbjogVGFyZWFzUGx1Z2luXG4gIHByaXZhdGUgdmlldzogVGFyZWFzVmlld0hhbmRsZVxuICBwcml2YXRlIGJvYXJkTmFtZTogc3RyaW5nXG4gIHByaXZhdGUgZGF0YTogeyBuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcgfVxuXG4gIGNvbnN0cnVjdG9yKGFwcDogb2JzaWRpYW4uQXBwLCBwbHVnaW46IFRhcmVhc1BsdWdpbiwgdmlldzogVGFyZWFzVmlld0hhbmRsZSwgYm9hcmROYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihhcHApXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW5cbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy5ib2FyZE5hbWUgPSBib2FyZE5hbWVcbiAgICB0aGlzLmRhdGEgPSB7IG5hbWU6ICcnLCBjb2xvcjogUFJFU0VUX0NPTE9SU1syXSB9XG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXNcbiAgICBjb250ZW50RWwuYWRkQ2xhc3MoJ3RhcmVhcy1tb2RhbCcpXG4gICAgY29udGVudEVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ051ZXZvIEdydXBvJyB9KVxuXG4gICAgbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKS5zZXROYW1lKCdOb21icmUgZGVsIGdydXBvJykuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgdGV4dC5zZXRQbGFjZWhvbGRlcignRWo6IEJhY2tlbmQsIEZyb250ZW5kLCBRQScpXG4gICAgICB0ZXh0Lm9uQ2hhbmdlKHZhbHVlID0+IHRoaXMuZGF0YS5uYW1lID0gdmFsdWUpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRleHQuaW5wdXRFbC5mb2N1cygpLCA1MClcbiAgICB9KVxuXG4gICAgY29uc3QgY29sb3JTZXR0aW5nID0gbmV3IG9ic2lkaWFuLlNldHRpbmcoY29udGVudEVsKS5zZXROYW1lKCdDb2xvcicpXG4gICAgY3JlYXRlQ29sb3JQaWNrZXIoY29sb3JTZXR0aW5nLmNvbnRyb2xFbCwgUFJFU0VUX0NPTE9SUywgdGhpcy5kYXRhLmNvbG9yLCAobmV4dENvbG9yKSA9PiB7XG4gICAgICB0aGlzLmRhdGEuY29sb3IgPSBuZXh0Q29sb3JcbiAgICB9KVxuXG4gICAgY29uc3QgZm9vdGVyID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1tb2RhbC1mb290ZXInIH0pXG5cbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NyZWFyIGdydXBvJywgY2xzOiAnbW9kLWN0YScgfSlcbiAgICBjcmVhdGVCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuY3JlYXRlR3JvdXAoKVxuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdDYW5jZWxhcicgfSlcbiAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuY2xvc2UoKVxuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpXG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUdyb3VwKCkge1xuICAgIGNvbnN0IGdyb3VwTmFtZSA9IHRoaXMuZGF0YS5uYW1lLnRyaW0oKVxuICAgIGlmICghZ3JvdXBOYW1lKSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdFbCBub21icmUgZXMgcmVxdWVyaWRvJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMucGx1Z2luLmFkZEVxdWlwb0luVGFibGVybyhncm91cE5hbWUsIHRoaXMuZGF0YS5jb2xvciwgdGhpcy5ib2FyZE5hbWUpXG4gICAgdGhpcy52aWV3LnJlbmRlcigpXG5cbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBHcnVwbyBcIiR7Z3JvdXBOYW1lfVwiIGNyZWFkb2ApXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQgdHlwZSB7IFRhc2tJdGVtIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBjbGFzcyBFZGl0VGFza0ZpbGVNb2RhbCBleHRlbmRzIG9ic2lkaWFuLk1vZGFsIHtcbiAgcHJpdmF0ZSB0YXNrOiBUYXNrSXRlbVxuICBwcml2YXRlIHRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBpbml0aWFsQ29udGVudCA9ICcnXG5cbiAgY29uc3RydWN0b3IoYXBwOiBvYnNpZGlhbi5BcHAsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgc3VwZXIoYXBwKVxuICAgIHRoaXMudGFzayA9IHRhc2tcbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpc1xuICAgIHRoaXMubW9kYWxFbC5hZGRDbGFzcygndGFyZWFzLWVkaXQtdGFzay1tb2RhbC1zaGVsbCcpXG4gICAgY29udGVudEVsLmFkZENsYXNzKCd0YXJlYXMtbW9kYWwnKVxuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLWVkaXQtdGFzay1tb2RhbCcpXG4gICAgY29udGVudEVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogYEVkaXRhcjogJHt0aGlzLnRhc2sudGFyZWF9YCB9KVxuXG4gICAgY29uc3QgaGVscGVyID0gY29udGVudEVsLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtZWRpdC10YXNrLWhpbnQnIH0pXG4gICAgaGVscGVyLnNldFRleHQoYEVkaXRhIGVsIGNvbnRlbmlkbyBjb21wbGV0byBkZSAke3RoaXMudGFzay5maWxlLnBhdGh9YClcblxuICAgIHRoaXMudGV4dGFyZWEgPSBjb250ZW50RWwuY3JlYXRlRWwoJ3RleHRhcmVhJywge1xuICAgICAgY2xzOiAndGFyZWFzLWVkaXQtdGFzay10ZXh0YXJlYScsXG4gICAgICBhdHRyOiB7XG4gICAgICAgIHNwZWxsY2hlY2s6ICdmYWxzZScsXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLW1vZGFsLWZvb3RlcicgfSlcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NhbmNlbGFyJyB9KVxuICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jbG9zZSgpXG5cbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdHdWFyZGFyJywgY2xzOiAnbW9kLWN0YScgfSlcbiAgICBzYXZlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB2b2lkIHRoaXMuc2F2ZSgpXG4gICAgfVxuXG4gICAgdm9pZCB0aGlzLmxvYWRGaWxlQ29udGVudCgpXG4gIH1cblxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbG9hZEZpbGVDb250ZW50KCkge1xuICAgIGlmICghdGhpcy50ZXh0YXJlYSlcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNhY2hlZFJlYWQodGhpcy50YXNrLmZpbGUpXG4gICAgdGhpcy5pbml0aWFsQ29udGVudCA9IGNvbnRlbnRcbiAgICB0aGlzLnRleHRhcmVhLnZhbHVlID0gY29udGVudFxuICAgIHRoaXMudGV4dGFyZWEuZm9jdXMoKVxuICAgIHRoaXMudGV4dGFyZWEuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgMClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2F2ZSgpIHtcbiAgICBpZiAoIXRoaXMudGV4dGFyZWEpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IG5leHRDb250ZW50ID0gdGhpcy50ZXh0YXJlYS52YWx1ZVxuICAgIGlmIChuZXh0Q29udGVudCA9PT0gdGhpcy5pbml0aWFsQ29udGVudCkge1xuICAgICAgdGhpcy5jbG9zZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkodGhpcy50YXNrLmZpbGUsIG5leHRDb250ZW50KVxuICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoJ1RhcmVhIGFjdHVhbGl6YWRhJylcbiAgICB0aGlzLmNsb3NlKClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB0eXBlIHsgVGFza0l0ZW0gfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGNsYXNzIEFkZFRhc2tDb21tZW50TW9kYWwgZXh0ZW5kcyBvYnNpZGlhbi5Nb2RhbCB7XG4gIHByaXZhdGUgdGFzazogVGFza0l0ZW1cbiAgcHJpdmF0ZSB0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGwgPSBudWxsXG5cbiAgY29uc3RydWN0b3IoYXBwOiBvYnNpZGlhbi5BcHAsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgc3VwZXIoYXBwKVxuICAgIHRoaXMudGFzayA9IHRhc2tcbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpc1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLW1vZGFsJylcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiBgQ29tZW50YXJpbzogJHt0aGlzLnRhc2sudGFyZWF9YCB9KVxuXG4gICAgY29uc3QgaGVscCA9IGNvbnRlbnRFbC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLWNvbW1lbnQtbW9kYWwtaGludCcgfSlcbiAgICBoZWxwLnNldFRleHQoJ1NlIGFncmVnYXLDoSBhbCBmaW5hbCBkZWwgYXJjaGl2byBkZSBsYSB0YXJlYS4nKVxuXG4gICAgdGhpcy50ZXh0YXJlYSA9IGNvbnRlbnRFbC5jcmVhdGVFbCgndGV4dGFyZWEnLCB7XG4gICAgICBjbHM6ICd0YXJlYXMtY29tbWVudC1tb2RhbC10ZXh0YXJlYScsXG4gICAgICBhdHRyOiB7IHBsYWNlaG9sZGVyOiAnRXNjcmliZSB1biBjb21lbnRhcmlvLi4uJyB9LFxuICAgIH0pXG4gICAgdGhpcy50ZXh0YXJlYS5mb2N1cygpXG5cbiAgICBjb25zdCBmb290ZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLW1vZGFsLWZvb3RlcicgfSlcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ2FuY2VsYXInIH0pXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlKClcblxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQWdyZWdhcicsIGNsczogJ21vZC1jdGEnIH0pXG4gICAgYWRkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB2b2lkIHRoaXMuYXBwZW5kQ29tbWVudCgpXG4gICAgfVxuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGFwcGVuZENvbW1lbnQoKSB7XG4gICAgY29uc3QgcmF3Q29tbWVudCA9IHRoaXMudGV4dGFyZWE/LnZhbHVlID8/ICcnXG4gICAgY29uc3QgY29tbWVudCA9IHJhd0NvbW1lbnQudHJpbSgpXG4gICAgaWYgKCFjb21tZW50KSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdFc2NyaWJlIHVuIGNvbWVudGFyaW8gYW50ZXMgZGUgZ3VhcmRhcicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQuY2FjaGVkUmVhZCh0aGlzLnRhc2suZmlsZSlcbiAgICBjb25zdCBoYXNDb250ZW50ID0gY3VycmVudC50cmltKCkubGVuZ3RoID4gMFxuICAgIGNvbnN0IHdpdGhOZXdsaW5lID0gY3VycmVudC5lbmRzV2l0aCgnXFxuJykgPyBjdXJyZW50IDogYCR7Y3VycmVudH1cXG5gXG4gICAgY29uc3Qgc3BhY2VyID0gaGFzQ29udGVudCA/ICdcXG4nIDogJydcbiAgICBjb25zdCBjb21tZW50QmxvY2sgPSB0aGlzLmJ1aWxkQ29tbWVudEJsb2NrKGNvbW1lbnQpXG4gICAgY29uc3QgbmV4dCA9IGAke3dpdGhOZXdsaW5lfSR7c3BhY2VyfSR7Y29tbWVudEJsb2NrfWBcblxuICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeSh0aGlzLnRhc2suZmlsZSwgbmV4dClcbiAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdDb21lbnRhcmlvIGFncmVnYWRvJylcbiAgICB0aGlzLmNsb3NlKClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRDb21tZW50QmxvY2soY29tbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgZGF5ID0gU3RyaW5nKG5vdy5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJylcbiAgICBjb25zdCBtb250aCA9IFN0cmluZyhub3cuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJylcbiAgICBjb25zdCB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKClcbiAgICBjb25zdCBob3VycyA9IFN0cmluZyhub3cuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgJzAnKVxuICAgIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcobm93LmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKVxuXG4gICAgY29uc3Qgc3RhbXAgPSBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn0gJHtob3Vyc306JHttaW51dGVzfWBcbiAgICByZXR1cm4gYCMjIENvbWVudGFyaW8gLSAke3N0YW1wfVxcblxcbiR7Y29tbWVudH1cXG5gXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbnRlcmZhY2UgQ29uZmlybURlbGV0ZVRhc2tNb2RhbE9wdGlvbnMge1xuICB0aXRsZTogc3RyaW5nXG4gIG1lc3NhZ2U6IHN0cmluZ1xuICBjb25maXJtVGV4dD86IHN0cmluZ1xuICBvbkNvbmZpcm06ICgpID0+IFByb21pc2U8dm9pZD5cbn1cblxuZXhwb3J0IGNsYXNzIENvbmZpcm1EZWxldGVUYXNrTW9kYWwgZXh0ZW5kcyBvYnNpZGlhbi5Nb2RhbCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogQ29uZmlybURlbGV0ZVRhc2tNb2RhbE9wdGlvbnNcblxuICBjb25zdHJ1Y3RvcihhcHA6IG9ic2lkaWFuLkFwcCwgb3B0aW9uczogQ29uZmlybURlbGV0ZVRhc2tNb2RhbE9wdGlvbnMpIHtcbiAgICBzdXBlcihhcHApXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzXG4gICAgY29udGVudEVsLmFkZENsYXNzKCd0YXJlYXMtbW9kYWwnKVxuICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6IHRoaXMub3B0aW9ucy50aXRsZSB9KVxuICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgncCcsIHsgdGV4dDogdGhpcy5vcHRpb25zLm1lc3NhZ2UgfSlcblxuICAgIGNvbnN0IGZvb3RlciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtbW9kYWwtZm9vdGVyJyB9KVxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ2FuY2VsYXInIH0pXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlKClcblxuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBmb290ZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIHRleHQ6IHRoaXMub3B0aW9ucy5jb25maXJtVGV4dCA/PyAnRWxpbWluYXInLFxuICAgICAgY2xzOiAnbW9kLXdhcm5pbmcnLFxuICAgIH0pXG4gICAgY29uZmlybUJ1dHRvbi5vbmNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIGNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMub3B0aW9ucy5vbkNvbmZpcm0oKVxuICAgICAgICB0aGlzLmNsb3NlKClcbiAgICAgIH1cbiAgICAgIGZpbmFsbHkge1xuICAgICAgICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgICAgY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB0eXBlIHsgUG9tb2Rvcm9EdXJhdGlvbnMgfSBmcm9tICcuLi90eXBlcydcblxuaW50ZXJmYWNlIFBvbW9kb3JvUHJlc2V0IHtcbiAgaWQ6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIHdvcmtMYWJlbDogc3RyaW5nXG4gIHNob3J0QnJlYWtMYWJlbDogc3RyaW5nXG4gIGN5Y2xlc0xhYmVsOiBzdHJpbmdcbiAgbG9uZ0JyZWFrTGFiZWw6IHN0cmluZ1xuICBpZGVhbEZvcjogc3RyaW5nXG4gIGR1cmF0aW9uczogUG9tb2Rvcm9EdXJhdGlvbnNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb21vZG9yb1ByZXNldENhcmREYXRhIHtcbiAgdGl0bGU6IHN0cmluZ1xuICB1c2FnZTogc3RyaW5nXG4gIHdvcmtMYWJlbDogc3RyaW5nXG4gIHNob3J0QnJlYWtMYWJlbDogc3RyaW5nXG4gIGxvbmdCcmVha0xhYmVsOiBzdHJpbmdcbiAgY3ljbGVzTGFiZWw6IHN0cmluZ1xufVxuXG5jb25zdCBQT01PRE9ST19QUkVTRVRTOiBQb21vZG9yb1ByZXNldFtdID0gW1xuICB7XG4gICAgaWQ6ICdkZWJ1Zy0xLTEnLFxuICAgIHRpdGxlOiAn8J+boCBEZWJ1ZyAtIDEvMScsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogMSBtaW4nLFxuICAgIHNob3J0QnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGNvcnRvOiAxIG1pbicsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDQnLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDEgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IHByb2JhciByw6FwaWRvIGVsIGZsdWpvIGRlbCB0ZW1wb3JpemFkb3IgeSB0cmFuc2ljaW9uZXMgZGUgZmFzZS4nLFxuICAgIGR1cmF0aW9uczogeyB3b3JrTWludXRlczogMSwgc2hvcnRCcmVha01pbnV0ZXM6IDEsIGxvbmdCcmVha01pbnV0ZXM6IDEgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnc3RhbmRhcmQtMjUtNScsXG4gICAgdGl0bGU6ICfirZAgRXN0w6FuZGFyIC0gMjUvNScsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogMjUgbWluJyxcbiAgICBzaG9ydEJyZWFrTGFiZWw6ICdEZXNjYW5zbyBjb3J0bzogNSBtaW4nLFxuICAgIGN5Y2xlc0xhYmVsOiAnQ2ljbG9zOiA0JyxcbiAgICBsb25nQnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGxhcmdvOiAxNSBtaW4nLFxuICAgIGlkZWFsRm9yOiAnSWRlYWwgcGFyYTogdGFyZWFzIG1vZGVyYWRhcywgcHJvZ3JhbWFjacOzbiwgZXN0dWRpbywgbWFudGVuZXIgcml0bW8gY29uc3RhbnRlIHNpbiBxdWVtYXJzZS4nLFxuICAgIGR1cmF0aW9uczogeyB3b3JrTWludXRlczogMjUsIHNob3J0QnJlYWtNaW51dGVzOiA1LCBsb25nQnJlYWtNaW51dGVzOiAxNSB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdkZWVwLWZvY3VzLTUwLTEwJyxcbiAgICB0aXRsZTogJ+KaoSBQYXJhIGZvY28gcHJvZnVuZG8gLSA1MC8xMCcsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogNTAgbWluJyxcbiAgICBzaG9ydEJyZWFrTGFiZWw6ICdEZXNjYW5zbyBjb3J0bzogMTAgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogMycsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMjAgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IHByb2dyYW1hY2nDs24gcGVzYWRhLCBkZWJ1Z2dpbmcsIGludmVzdGlnYWNpw7NuLCBlc2NyaXR1cmEgbGFyZ2EuIEN1YW5kbyB0ZSBtZXTDqXMgZW4gXCJkZWVwIHdvcmtcIi4nLFxuICAgIGR1cmF0aW9uczogeyB3b3JrTWludXRlczogNTAsIHNob3J0QnJlYWtNaW51dGVzOiAxMCwgbG9uZ0JyZWFrTWludXRlczogMjAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnZGV2LWNsYXNzaWMtNTItMTcnLFxuICAgIHRpdGxlOiAn8J+SuyBDbMOhc2ljbyBkZSBwcm9ncmFtYWRvcmVzIC0gNTIvMTcnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDUyIG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDE3IG1pbicsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDInLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDIwIG1pbicsXG4gICAgaWRlYWxGb3I6ICdJZGVhbCBwYXJhOiB0YXJlYXMgY29tcGxlamFzIHF1ZSByZXF1aWVyZW4gZmx1aXIgc2luIGNvcnRlcyBsYXJnb3MuIE1hbnRpZW5lIGVuZXJnw61hIGFsdGEuJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDUyLCBzaG9ydEJyZWFrTWludXRlczogMTcsIGxvbmdCcmVha01pbnV0ZXM6IDIwIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ2NyZWF0aXZlLTQwLTEwJyxcbiAgICB0aXRsZTogJ/CfjqggQ3JlYXRpdm8gLSA0MC8xMCcsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogNDAgbWluJyxcbiAgICBzaG9ydEJyZWFrTGFiZWw6ICdEZXNjYW5zbyBjb3J0bzogMTAgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogNCcsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMjAgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IGRpc2XDsW8sIGVzY3JpdHVyYSBjcmVhdGl2YSwgYnJhaW5zdG9ybWluZywgZG9uZGUgcXVlcsOpcyB0aWVtcG8gcGFyYSBlbnRyYXIgZW4gZXN0YWRvLicsXG4gICAgZHVyYXRpb25zOiB7IHdvcmtNaW51dGVzOiA0MCwgc2hvcnRCcmVha01pbnV0ZXM6IDEwLCBsb25nQnJlYWtNaW51dGVzOiAyMCB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdzcHJpbnQtNDUtMTUnLFxuICAgIHRpdGxlOiAn8J+UqCBTcHJpbnQgLSA0NS8xNScsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogNDUgbWluJyxcbiAgICBzaG9ydEJyZWFrTGFiZWw6ICdEZXNjYW5zbyBjb3J0bzogMTUgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogMycsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMjUgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IHRhcmVhcyBncmFuZGVzIGRvbmRlIG5lY2VzaXTDoXMgZW1wdWphciBmdWVydGUgKHJlZmFjdG9ycywgZG9jdW1lbnRhY2nDs24sIGFuw6FsaXNpcykuJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDQ1LCBzaG9ydEJyZWFrTWludXRlczogMTUsIGxvbmdCcmVha01pbnV0ZXM6IDI1IH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ2FkaGQtMjAtNScsXG4gICAgdGl0bGU6ICfwn6egIFBhcmEgVERBSCBvIG11Y2hhIGRpc3RyYWNjacOzbiAtIDIwLzUnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDIwIG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDUgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogNCcsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMTUgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IGN1YW5kbyB0ZSBjdWVzdGEgZW5nYW5jaGFydGUgbyBtYW50ZW5lciBmb2NvIHNvc3Rlbmlkby4gRW50cmFkYXMgY29ydGFzIHBlcm8gZWZlY3RpdmFzLicsXG4gICAgZHVyYXRpb25zOiB7IHdvcmtNaW51dGVzOiAyMCwgc2hvcnRCcmVha01pbnV0ZXM6IDUsIGxvbmdCcmVha01pbnV0ZXM6IDE1IH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ21pY3JvLTE1LTUnLFxuICAgIHRpdGxlOiAn8J+TiSBNaWNyby1Qb21vZG9ybyAtIDE1LzUnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDE1IG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDUgbWluJyxcbiAgICBjeWNsZXNMYWJlbDogJ0NpY2xvczogNCcsXG4gICAgbG9uZ0JyZWFrTGFiZWw6ICdEZXNjYW5zbyBsYXJnbzogMTUgbWluJyxcbiAgICBpZGVhbEZvcjogJ0lkZWFsIHBhcmE6IHRhcmVhcyBjaGljYXMsIHJldmlzYXIgbWFpbHMsIG9yZGVuYXIgcGVuZGllbnRlcywgY3VhbmRvIGVzdMOhcyBtZW50YWxtZW50ZSBtdXkgY2Fuc2Fkby4nLFxuICAgIGR1cmF0aW9uczogeyB3b3JrTWludXRlczogMTUsIHNob3J0QnJlYWtNaW51dGVzOiA1LCBsb25nQnJlYWtNaW51dGVzOiAxNSB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdsb3ctZW5lcmd5LTE1LTMnLFxuICAgIHRpdGxlOiAn8J+UiyBFbmVyZ8OtYSBiYWphIC0gMTUvMycsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogMTUgbWluJyxcbiAgICBzaG9ydEJyZWFrTGFiZWw6ICdEZXNjYW5zbyBjb3J0bzogMyBtaW4nLFxuICAgIGN5Y2xlc0xhYmVsOiAnQ2ljbG9zOiA0JyxcbiAgICBsb25nQnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGxhcmdvOiAxMiBtaW4nLFxuICAgIGlkZWFsRm9yOiAnSWRlYWwgcGFyYTogZMOtYXMgZGUgZmF0aWdhIG1lbnRhbCwgdGFyZWFzIGxpZ2VyYXMsIGF2YW56YXIgbGVudG8gcGVybyBjb25zdGFudGUuJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDE1LCBzaG9ydEJyZWFrTWludXRlczogMywgbG9uZ0JyZWFrTWludXRlczogMTIgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAndWx0cmFkaWFuLTkwLTIwJyxcbiAgICB0aXRsZTogJ/Cfp7EgQ2ljbG9zIHVsdHJhZGlhbm9zIC0gOTAvMjAnLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDkwIG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IG5vIGFwbGljYScsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDIgcG9yIHNlc2nDs24nLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDIwIG1pbicsXG4gICAgaWRlYWxGb3I6ICdJZGVhbCBwYXJhOiBzZXNpb25lcyBjcmVhdGl2YXMgcHJvZnVuZGFzIG8gZGUgaW5nZW5pZXLDrWEgZG9uZGUgY29ydGFyIGVzIGNvbnRyYXByb2R1Y2VudGUuJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDkwLCBzaG9ydEJyZWFrTWludXRlczogMjAsIGxvbmdCcmVha01pbnV0ZXM6IDIwIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ2FnZ3Jlc3NpdmUtNTAtNScsXG4gICAgdGl0bGU6ICfwn6epIDUwLzUgKGFncmVzaXZvKScsXG4gICAgd29ya0xhYmVsOiAnVHJhYmFqbzogNTAgbWluJyxcbiAgICBzaG9ydEJyZWFrTGFiZWw6ICdEZXNjYW5zbyBjb3J0bzogNSBtaW4nLFxuICAgIGN5Y2xlc0xhYmVsOiAnQ2ljbG9zOiAzJyxcbiAgICBsb25nQnJlYWtMYWJlbDogJ0Rlc2NhbnNvIGxhcmdvOiAyMCBtaW4nLFxuICAgIGlkZWFsRm9yOiAnSWRlYWwgcGFyYTogdGFyZWFzIGRlIGFsdGEgcHJlc2nDs24gbyBlbnRyZWdhcyBkb25kZSBxdWVyw6lzIG1pbmltaXphciBwYXVzYXMuJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDUwLCBzaG9ydEJyZWFrTWludXRlczogNSwgbG9uZ0JyZWFrTWludXRlczogMjAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnYmFsYW5jZWQtMzAtMTAnLFxuICAgIHRpdGxlOiAn8J+qtiAzMC8xMCAoYmFsYW5jZWFkbyknLFxuICAgIHdvcmtMYWJlbDogJ1RyYWJham86IDMwIG1pbicsXG4gICAgc2hvcnRCcmVha0xhYmVsOiAnRGVzY2Fuc28gY29ydG86IDEwIG1pbicsXG4gICAgY3ljbGVzTGFiZWw6ICdDaWNsb3M6IDQnLFxuICAgIGxvbmdCcmVha0xhYmVsOiAnRGVzY2Fuc28gbGFyZ286IDIwIG1pbicsXG4gICAgaWRlYWxGb3I6ICdJZGVhbCBwYXJhOiB0YXJlYXMgZGUgYW7DoWxpc2lzLCBhZG1pbmlzdHJhY2nDs24sIGNvbnRhYmlsaWRhZCBtZW50YWwgbGl2aWFuYSBvIHJlc2VhcmNoIHZhcmlhZG8uJyxcbiAgICBkdXJhdGlvbnM6IHsgd29ya01pbnV0ZXM6IDMwLCBzaG9ydEJyZWFrTWludXRlczogMTAsIGxvbmdCcmVha01pbnV0ZXM6IDIwIH0sXG4gIH0sXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb21vZG9yb1ByZXNldENhcmREYXRhKGR1cmF0aW9uczogUG9tb2Rvcm9EdXJhdGlvbnMpOiBQb21vZG9yb1ByZXNldENhcmREYXRhIHtcbiAgY29uc3QgcHJlc2V0ID0gZmluZFBvbW9kb3JvUHJlc2V0QnlEdXJhdGlvbnMoZHVyYXRpb25zKVxuICBpZiAocHJlc2V0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBwcmVzZXQudGl0bGUsXG4gICAgICB1c2FnZTogcHJlc2V0LmlkZWFsRm9yLnJlcGxhY2UoL15JZGVhbCBwYXJhOlxccyovaSwgJycpLFxuICAgICAgd29ya0xhYmVsOiBwcmVzZXQud29ya0xhYmVsLFxuICAgICAgc2hvcnRCcmVha0xhYmVsOiBwcmVzZXQuc2hvcnRCcmVha0xhYmVsLFxuICAgICAgbG9uZ0JyZWFrTGFiZWw6IHByZXNldC5sb25nQnJlYWtMYWJlbCxcbiAgICAgIGN5Y2xlc0xhYmVsOiBwcmVzZXQuY3ljbGVzTGFiZWwsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogYFBlcnNvbmFsaXphZG8gLSAke2R1cmF0aW9ucy53b3JrTWludXRlc30vJHtkdXJhdGlvbnMuc2hvcnRCcmVha01pbnV0ZXN9YCxcbiAgICB1c2FnZTogJ0NvbmZpZ3VyYWNpw7NuIG1hbnVhbCBndWFyZGFkYS4nLFxuICAgIHdvcmtMYWJlbDogYFRyYWJham86ICR7ZHVyYXRpb25zLndvcmtNaW51dGVzfSBtaW5gLFxuICAgIHNob3J0QnJlYWtMYWJlbDogYERlc2NhbnNvIGNvcnRvOiAke2R1cmF0aW9ucy5zaG9ydEJyZWFrTWludXRlc30gbWluYCxcbiAgICBsb25nQnJlYWtMYWJlbDogYERlc2NhbnNvIGxhcmdvOiAke2R1cmF0aW9ucy5sb25nQnJlYWtNaW51dGVzfSBtaW5gLFxuICAgIGN5Y2xlc0xhYmVsOiAnQ2ljbG9zOiA0JyxcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kUG9tb2Rvcm9QcmVzZXRCeUR1cmF0aW9ucyhkdXJhdGlvbnM6IFBvbW9kb3JvRHVyYXRpb25zKTogUG9tb2Rvcm9QcmVzZXQgfCBudWxsIHtcbiAgZm9yIChjb25zdCBwcmVzZXQgb2YgUE9NT0RPUk9fUFJFU0VUUykge1xuICAgIGlmIChcbiAgICAgIHByZXNldC5kdXJhdGlvbnMud29ya01pbnV0ZXMgPT09IGR1cmF0aW9ucy53b3JrTWludXRlc1xuICAgICAgJiYgcHJlc2V0LmR1cmF0aW9ucy5zaG9ydEJyZWFrTWludXRlcyA9PT0gZHVyYXRpb25zLnNob3J0QnJlYWtNaW51dGVzXG4gICAgICAmJiBwcmVzZXQuZHVyYXRpb25zLmxvbmdCcmVha01pbnV0ZXMgPT09IGR1cmF0aW9ucy5sb25nQnJlYWtNaW51dGVzXG4gICAgKSB7XG4gICAgICByZXR1cm4gcHJlc2V0XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGNsYXNzIFBvbW9kb3JvUHJlc2V0TW9kYWwgZXh0ZW5kcyBvYnNpZGlhbi5Nb2RhbCB7XG4gIHByaXZhdGUgb25BY2NlcHQ6IChkdXJhdGlvbnM6IFBvbW9kb3JvRHVyYXRpb25zKSA9PiB2b2lkXG4gIHByaXZhdGUgc2VsZWN0ZWRQcmVzZXRJZDogc3RyaW5nXG4gIHByaXZhdGUgY2FyZEJ5SWQgPSBuZXcgTWFwPHN0cmluZywgSFRNTERpdkVsZW1lbnQ+KClcblxuICBjb25zdHJ1Y3RvcihhcHA6IG9ic2lkaWFuLkFwcCwgY3VycmVudER1cmF0aW9uczogUG9tb2Rvcm9EdXJhdGlvbnMsIG9uQWNjZXB0OiAoZHVyYXRpb25zOiBQb21vZG9yb0R1cmF0aW9ucykgPT4gdm9pZCkge1xuICAgIHN1cGVyKGFwcClcbiAgICB0aGlzLm9uQWNjZXB0ID0gb25BY2NlcHRcbiAgICBjb25zdCBtYXRjaGVkID0gZmluZFBvbW9kb3JvUHJlc2V0QnlEdXJhdGlvbnMoY3VycmVudER1cmF0aW9ucylcbiAgICB0aGlzLnNlbGVjdGVkUHJlc2V0SWQgPSBtYXRjaGVkPy5pZCA/PyBQT01PRE9ST19QUkVTRVRTWzBdLmlkXG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgdGhpcy5tb2RhbEVsLmFkZENsYXNzKCd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LW1vZGFsLXNoZWxsJylcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpc1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLW1vZGFsJywgJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtbW9kYWwnKVxuICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdFbGVnw60gdW4gcHJlc2V0IFBvbW9kb3JvJyB9KVxuXG4gICAgY29uc3QgY2FyZHMgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXByZXNldC1jYXJkcycgfSlcbiAgICBmb3IgKGNvbnN0IHByZXNldCBvZiBQT01PRE9ST19QUkVTRVRTKSB7XG4gICAgICBjb25zdCBjYXJkID0gY2FyZHMuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXByZXNldC1jYXJkJyB9KVxuICAgICAgY2FyZC5zZXRBdHRyKCdyb2xlJywgJ2J1dHRvbicpXG4gICAgICBjYXJkLnNldEF0dHIoJ3RhYmluZGV4JywgJzAnKVxuICAgICAgY2FyZC5vbmNsaWNrID0gKCkgPT4gdGhpcy5zZWxlY3RQcmVzZXQocHJlc2V0LmlkKVxuICAgICAgY2FyZC5vbmtleWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSAhPT0gJ0VudGVyJyAmJiBldmVudC5rZXkgIT09ICcgJylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLnNlbGVjdFByZXNldChwcmVzZXQuaWQpXG4gICAgICB9XG5cbiAgICAgIGNhcmQuY3JlYXRlRWwoJ2gzJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LXRpdGxlJywgdGV4dDogcHJlc2V0LnRpdGxlIH0pXG4gICAgICBjYXJkLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtZGl2aWRlcicgfSlcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtdXNhZ2UtdGl0bGUnLCB0ZXh0OiAnVXNvJyB9KVxuICAgICAgY2FyZC5jcmVhdGVFbCgncCcsIHtcbiAgICAgICAgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXByZXNldC11c2FnZScsXG4gICAgICAgIHRleHQ6IHByZXNldC5pZGVhbEZvci5yZXBsYWNlKC9eSWRlYWwgcGFyYTpcXHMqL2ksICcnKSxcbiAgICAgIH0pXG4gICAgICBjYXJkLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtZGl2aWRlcicgfSlcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtbGluZScsIHRleHQ6IHByZXNldC53b3JrTGFiZWwgfSlcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtbGluZScsIHRleHQ6IHByZXNldC5zaG9ydEJyZWFrTGFiZWwgfSlcbiAgICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wcmVzZXQtbGluZScsIHRleHQ6IHByZXNldC5sb25nQnJlYWtMYWJlbCB9KVxuICAgICAgY2FyZC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXByZXNldC1saW5lJywgdGV4dDogcHJlc2V0LmN5Y2xlc0xhYmVsIH0pXG5cbiAgICAgIHRoaXMuY2FyZEJ5SWQuc2V0KHByZXNldC5pZCwgY2FyZClcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hTZWxlY3Rpb24oKVxuXG4gICAgY29uc3QgZm9vdGVyID0gY29udGVudEVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1tb2RhbC1mb290ZXInIH0pXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdDYW5jZWxhcicgfSlcbiAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuY2xvc2UoKVxuXG4gICAgY29uc3QgYWNjZXB0QnV0dG9uID0gZm9vdGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdBY2VwdGFyJywgY2xzOiAnbW9kLWN0YScgfSlcbiAgICBhY2NlcHRCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuYWNjZXB0KClcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5tb2RhbEVsLnJlbW92ZUNsYXNzKCd0YXJlYXMtcG9tb2Rvcm8tcHJlc2V0LW1vZGFsLXNoZWxsJylcbiAgICB0aGlzLmNhcmRCeUlkLmNsZWFyKClcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpXG4gIH1cblxuICBwcml2YXRlIHNlbGVjdFByZXNldChwcmVzZXRJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWxlY3RlZFByZXNldElkID0gcHJlc2V0SWRcbiAgICB0aGlzLnJlZnJlc2hTZWxlY3Rpb24oKVxuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoU2VsZWN0aW9uKCkge1xuICAgIGZvciAoY29uc3QgcHJlc2V0IG9mIFBPTU9ET1JPX1BSRVNFVFMpIHtcbiAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmNhcmRCeUlkLmdldChwcmVzZXQuaWQpXG4gICAgICBpZiAoIWNhcmQpXG4gICAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGNhcmQudG9nZ2xlQ2xhc3MoJ2lzLXNlbGVjdGVkJywgdGhpcy5zZWxlY3RlZFByZXNldElkID09PSBwcmVzZXQuaWQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhY2NlcHQoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBQT01PRE9ST19QUkVTRVRTLmZpbmQocHJlc2V0ID0+IHByZXNldC5pZCA9PT0gdGhpcy5zZWxlY3RlZFByZXNldElkKVxuICAgIGlmICghc2VsZWN0ZWQpXG4gICAgICByZXR1cm5cblxuICAgIHRoaXMub25BY2NlcHQoeyAuLi5zZWxlY3RlZC5kdXJhdGlvbnMgfSlcbiAgICB0aGlzLmNsb3NlKClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgb2JzaWRpYW4gZnJvbSAnb2JzaWRpYW4nXG5cbmltcG9ydCB0eXBlIHsgVGFza0l0ZW0gfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGNsYXNzIFNlbGVjdFBvbW9kb3JvVGFza01vZGFsIGV4dGVuZHMgb2JzaWRpYW4uTW9kYWwge1xuICBwcml2YXRlIHRhc2tzOiBUYXNrSXRlbVtdXG4gIHByaXZhdGUgc2VsZWN0ZWRUYXNrUGF0aDogc3RyaW5nIHwgbnVsbFxuICBwcml2YXRlIG9uU2VsZWN0OiAodGFza1BhdGg6IHN0cmluZykgPT4gdm9pZFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGFwcDogb2JzaWRpYW4uQXBwLFxuICAgIHRhc2tzOiBUYXNrSXRlbVtdLFxuICAgIHNlbGVjdGVkVGFza1BhdGg6IHN0cmluZyB8IG51bGwsXG4gICAgb25TZWxlY3Q6ICh0YXNrUGF0aDogc3RyaW5nKSA9PiB2b2lkLFxuICApIHtcbiAgICBzdXBlcihhcHApXG4gICAgdGhpcy50YXNrcyA9IFsuLi50YXNrc10uc29ydCgoYSwgYikgPT4gYS50YXJlYS5sb2NhbGVDb21wYXJlKGIudGFyZWEpKVxuICAgIHRoaXMuc2VsZWN0ZWRUYXNrUGF0aCA9IHNlbGVjdGVkVGFza1BhdGhcbiAgICB0aGlzLm9uU2VsZWN0ID0gb25TZWxlY3RcbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICB0aGlzLm1vZGFsRWwuYWRkQ2xhc3MoJ3RhcmVhcy1wb21vZG9yby10YXNrLW1vZGFsLXNoZWxsJylcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpc1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygndGFyZWFzLW1vZGFsJywgJ3RhcmVhcy1wb21vZG9yby10YXNrLW1vZGFsJylcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnU2VsZWNjaW9uYXIgdGFyZWEgcGFyYSBQb21vZG9ybycgfSlcblxuICAgIGlmICh0aGlzLnRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29udGVudEVsLmNyZWF0ZUVsKCdwJywge1xuICAgICAgICBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tdGFzay1lbXB0eScsXG4gICAgICAgIHRleHQ6ICdObyBoYXkgdGFyZWFzIHBhZHJlIGVuIGN1cnNvIGRpc3BvbmlibGVzLicsXG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IGxpc3QgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRhc2stbGlzdCcgfSlcbiAgICAgIGZvciAoY29uc3QgdGFzayBvZiB0aGlzLnRhc2tzKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBsaXN0LmNyZWF0ZURpdih7XG4gICAgICAgICAgY2xzOiBgdGFyZWFzLXBvbW9kb3JvLXRhc2staXRlbSR7dGhpcy5zZWxlY3RlZFRhc2tQYXRoID09PSB0YXNrLmZpbGUucGF0aCA/ICcgaXMtc2VsZWN0ZWQnIDogJyd9YCxcbiAgICAgICAgfSlcbiAgICAgICAgaXRlbS5zZXRBdHRyKCdyb2xlJywgJ2J1dHRvbicpXG4gICAgICAgIGl0ZW0uc2V0QXR0cigndGFiaW5kZXgnLCAnMCcpXG5cbiAgICAgICAgaXRlbS5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRhc2stbmFtZScsIHRleHQ6IHRhc2sudGFyZWEgfSlcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IFtcbiAgICAgICAgICB0YXNrLnRhYmxlcm8gPyBgVGFibGVybzogJHt0YXNrLnRhYmxlcm99YCA6IG51bGwsXG4gICAgICAgICAgYEVzdGFkbzogJHt0YXNrLmVzdGFkb31gLFxuICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgwrcgJylcbiAgICAgICAgaXRlbS5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRhc2stbWV0YScsIHRleHQ6IGRldGFpbHMgfSlcblxuICAgICAgICBjb25zdCBzZWxlY3QgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vblNlbGVjdCh0YXNrLmZpbGUucGF0aClcbiAgICAgICAgICB0aGlzLmNsb3NlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0ub25jbGljayA9IHNlbGVjdFxuICAgICAgICBpdGVtLm9ua2V5ZG93biA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXkgIT09ICdFbnRlcicgJiYgZXZlbnQua2V5ICE9PSAnICcpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgc2VsZWN0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZvb3RlciA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtbW9kYWwtZm9vdGVyJyB9KVxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvb3Rlci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ2FuY2VsYXInIH0pXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlKClcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5tb2RhbEVsLnJlbW92ZUNsYXNzKCd0YXJlYXMtcG9tb2Rvcm8tdGFzay1tb2RhbC1zaGVsbCcpXG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBvYnNpZGlhbiBmcm9tICdvYnNpZGlhbidcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dEcm9wZG93bihcbiAgYW5jaG9yOiBIVE1MRWxlbWVudCxcbiAgb3B0aW9uczogc3RyaW5nW10sXG4gIGN1cnJlbnQ6IHN0cmluZyxcbiAgb25TZWxlY3Q6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLFxuKSB7XG4gIGNvbnN0IG1lbnUgPSBuZXcgb2JzaWRpYW4uTWVudSgpXG5cbiAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5zZXRUaXRsZShgJHtvcHRpb24gPT09IGN1cnJlbnQgPyAn4pyTICcgOiAnICAnfSR7b3B0aW9ufWApXG4gICAgICBpdGVtLm9uQ2xpY2soKCkgPT4gb25TZWxlY3Qob3B0aW9uKSlcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgcmVjdCA9IGFuY2hvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICBtZW51LnNob3dBdFBvc2l0aW9uKHsgeDogcmVjdC5sZWZ0LCB5OiByZWN0LmJvdHRvbSArIDQgfSlcbn1cbiIsInR5cGUgR2VuZXJpY0ZuID0gKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdm9pZFxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2U8VCBleHRlbmRzIEdlbmVyaWNGbj4oZm46IFQsIG1zOiBudW1iZXIpIHtcbiAgbGV0IHRpbWVvdXQ6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgdW5kZWZpbmVkXG5cbiAgcmV0dXJuICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gZm4oLi4uYXJncyksIG1zKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBvYnNpZGlhbiBmcm9tICdvYnNpZGlhbidcblxuaW1wb3J0IHsgREVGQVVMVF9CT0FSRF9OQU1FLCBFU1RBRE9TLCBPUkRFUl9TVEVQLCBQT01PRE9ST19MT0dfQkFTRU5BTUUsIFBSSU9SSURBREVTLCBWSUVXX1RZUEUgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBtb3ZlVGFza1RvQWN0aXZlRm9sZGVyLCBtb3ZlVGFza1RvQ2FuY2VsbGVkRm9sZGVyLCBtb3ZlVGFza1RvQ29tcGxldGVkRm9sZGVyIH0gZnJvbSAnLi4vZW5naW5lcy9jb21wbGV0aW9uRW5naW5lJ1xuaW1wb3J0IHsgdXBkYXRlRnJvbnRtYXR0ZXIgfSBmcm9tICcuLi9lbmdpbmVzL2Zyb250bWF0dGVyRW5naW5lJ1xuaW1wb3J0IHsgcGVyc2lzdFRhc2tPcmRlciwgcmVvcmRlckxpc3QgfSBmcm9tICcuLi9lbmdpbmVzL29yZGVyRW5naW5lJ1xuaW1wb3J0IHtcbiAgYWR2YW5jZVBvbW9kb3JvU3RhdGUsXG4gIGFwcGx5UG9tb2Rvcm9EdXJhdGlvbnMsXG4gIGVudGVyUG9tb2Rvcm9EZXZpYXRpb24sXG4gIGV4aXRQb21vZG9yb0RldmlhdGlvbixcbiAgZm9ybWF0UG9tb2Rvcm9Db3VudGRvd24sXG4gIGdldERldmlhdGlvbkVsYXBzZWRTZWNvbmRzLFxuICBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyxcbiAgZ2V0UG9tb2Rvcm9QaGFzZUxhYmVsLFxuICBnZXRQb21vZG9yb1JlbWFpbmluZ1NlY29uZHMsXG4gIG5vcm1hbGl6ZVBvbW9kb3JvRHVyYXRpb25zLFxuICBwYXVzZVBvbW9kb3JvLFxuICByZXNldFBvbW9kb3JvLFxuICByZXN1bWVQb21vZG9ybyxcbiAgc3RhcnRQb21vZG9ybyxcbn0gZnJvbSAnLi4vZW5naW5lcy9wb21vZG9yb0VuZ2luZSdcbmltcG9ydCB7IGFwcGVuZFBvbW9kb3JvTG9nRW50cnksIGdldEVudHJpZXNCeURhdGUsIHJlYWRQb21vZG9yb0xvZ0VudHJpZXMsIHRvTG9jYWxEYXRlVGV4dCB9IGZyb20gJy4uL2VuZ2luZXMvcG9tb2Rvcm9Mb2dFbmdpbmUnXG5pbXBvcnQgeyByZWJhbGFuY2VHcm91cEVuZERhdGVzIH0gZnJvbSAnLi4vZW5naW5lcy9zY2hlZHVsZUVuZ2luZSdcbmltcG9ydCB7XG4gIGV4dHJhY3RUYXNrQm9keVByZXZpZXcsXG4gIGdldFRhc2tzLFxuICBncm91cFRvcExldmVsVGFza3MsXG4gIGlzVGFza0luQ2FuY2VsbGVkRm9sZGVyLFxuICBpc1Rhc2tJbkNvbXBsZXRlZEZvbGRlcixcbiAgaXNUYXNrSW5GaW5pc2hlZEZvbGRlcixcbiAgcGFyc2VUYXNrRGF0ZSxcbn0gZnJvbSAnLi4vZW5naW5lcy90YXNrRW5naW5lJ1xuaW1wb3J0IHsgRWRpdFNlY3Rpb25Nb2RhbCB9IGZyb20gJy4uL21vZGFscy9FZGl0U2VjdGlvbk1vZGFsJ1xuaW1wb3J0IHsgTmV3Qm9hcmRNb2RhbCB9IGZyb20gJy4uL21vZGFscy9OZXdCb2FyZE1vZGFsJ1xuaW1wb3J0IHsgTmV3R3JvdXBNb2RhbCB9IGZyb20gJy4uL21vZGFscy9OZXdHcm91cE1vZGFsJ1xuaW1wb3J0IHsgTmV3VGFza01vZGFsIH0gZnJvbSAnLi4vbW9kYWxzL05ld1Rhc2tNb2RhbCdcbmltcG9ydCB7IEVkaXRUYXNrRmlsZU1vZGFsIH0gZnJvbSAnLi4vbW9kYWxzL0VkaXRUYXNrRmlsZU1vZGFsJ1xuaW1wb3J0IHsgQWRkVGFza0NvbW1lbnRNb2RhbCB9IGZyb20gJy4uL21vZGFscy9BZGRUYXNrQ29tbWVudE1vZGFsJ1xuaW1wb3J0IHsgQ29uZmlybURlbGV0ZVRhc2tNb2RhbCB9IGZyb20gJy4uL21vZGFscy9Db25maXJtRGVsZXRlVGFza01vZGFsJ1xuaW1wb3J0IHsgZ2V0UG9tb2Rvcm9QcmVzZXRDYXJkRGF0YSwgUG9tb2Rvcm9QcmVzZXRNb2RhbCB9IGZyb20gJy4uL21vZGFscy9Qb21vZG9yb1ByZXNldE1vZGFsJ1xuaW1wb3J0IHsgU2VsZWN0UG9tb2Rvcm9UYXNrTW9kYWwgfSBmcm9tICcuLi9tb2RhbHMvU2VsZWN0UG9tb2Rvcm9UYXNrTW9kYWwnXG5pbXBvcnQgdHlwZSB7IFRhcmVhc1BsdWdpbiB9IGZyb20gJy4uL3BsdWdpbi9UYXJlYXNQbHVnaW4nXG5pbXBvcnQgdHlwZSB7IEVxdWlwbywgUG9tb2Rvcm9EdXJhdGlvbnMsIFBvbW9kb3JvUGhhc2UsIFBvbW9kb3JvU3RhdGUsIFRhc2tGcm9udG1hdHRlciwgVGFza0l0ZW0gfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IHNob3dEcm9wZG93biB9IGZyb20gJy4uL3VpL2Ryb3Bkb3duJ1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICcuLi91dGlscy9kZWJvdW5jZSdcblxuZXhwb3J0IGNsYXNzIFRhcmVhc1ZpZXcgZXh0ZW5kcyBvYnNpZGlhbi5JdGVtVmlldyB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENPTVBMRVRFRF9UQUJfSUQgPSAnX19jb21wbGV0ZWRfXydcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ0FOQ0VMTEVEX1RBQl9JRCA9ICdfX2NhbmNlbGxlZF9fJ1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBQT01PRE9ST19UQUJfSUQgPSAnX19wb21vZG9yb19fJ1xuXG4gIHByaXZhdGUgcGx1Z2luOiBUYXJlYXNQbHVnaW5cbiAgZXhwYW5kZWRHcm91cHM6IFNldDxzdHJpbmc+XG4gIGV4cGFuZGVkVGFza3M6IFNldDxzdHJpbmc+XG4gIGV4cGFuZGVkQ2FyZFN1YnRhc2tzOiBTZXQ8c3RyaW5nPlxuXG4gIHByaXZhdGUgZGVib3VuY2VkUmVuZGVyOiAoKSA9PiB2b2lkXG4gIHByaXZhdGUgZHJhZ1BhdGg6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgZHJhZ0RlcHRoOiBudW1iZXIgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGRyYWdQYXJlbnQ6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgZHJhZ0luc2VydFBvc2l0aW9uOiAnYmVmb3JlJyB8ICdhZnRlcicgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGRyYWdHcm91cE5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgZHJhZ0dyb3VwQ29sdW1uOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgZHJvcHBlZFRhc2tBbmltYXRpb25QYXRoOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGxhc3RSZW5kZXJlZFRhYjogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBhY3RpdmVUYWI6IHN0cmluZ1xuICBwcml2YXRlIHBvbW9kb3JvUGFuZWxFbDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIHBvbW9kb3JvVGltZUVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcG9tb2Rvcm9Qcm9ncmVzc0VsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcG9tb2Rvcm9QaGFzZUVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcG9tb2Rvcm9DeWNsZUVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcG9tb2Rvcm9TdGF0ZUVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcG9tb2Rvcm9BdWRpb0NvbnRleHQ6IEF1ZGlvQ29udGV4dCB8IG51bGwgPSBudWxsXG5cbiAgY29uc3RydWN0b3IobGVhZjogb2JzaWRpYW4uV29ya3NwYWNlTGVhZiwgcGx1Z2luOiBUYXJlYXNQbHVnaW4pIHtcbiAgICBzdXBlcihsZWFmKVxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luXG4gICAgdGhpcy5leHBhbmRlZEdyb3VwcyA9IG5ldyBTZXQocGx1Z2luLmVxdWlwb3MubWFwKGVxdWlwbyA9PiBgJHtlcXVpcG8udGFibGVybyB8fCAnZGVmYXVsdCd9Ojoke2VxdWlwby5uYW1lfWApKVxuICAgIHRoaXMuZXhwYW5kZWRUYXNrcyA9IG5ldyBTZXQoKVxuICAgIHRoaXMuZXhwYW5kZWRDYXJkU3VidGFza3MgPSBuZXcgU2V0KClcbiAgICB0aGlzLmFjdGl2ZVRhYiA9IHBsdWdpbi50YWJsZXJvc1swXT8ubmFtZSB8fCAnZGVmYXVsdCdcbiAgICB0aGlzLmRlYm91bmNlZFJlbmRlciA9IGRlYm91bmNlKCgpID0+IHRoaXMucmVuZGVyKCksIDI1MClcbiAgfVxuXG4gIGdldFZpZXdUeXBlKCkge1xuICAgIHJldHVybiBWSUVXX1RZUEVcbiAgfVxuXG4gIGdldERpc3BsYXlUZXh0KCkge1xuICAgIHJldHVybiAnVGFyZWFzJ1xuICB9XG5cbiAgZ2V0SWNvbigpIHtcbiAgICByZXR1cm4gJ2xpc3QtY2hlY2tzJ1xuICB9XG5cbiAgYXN5bmMgb25PcGVuKCkge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmdldFJvb3RFbCgpXG4gICAgcm9vdC5hZGRDbGFzcygndGFyZWFzLXJvb3QnKVxuICAgIGF3YWl0IHRoaXMucmVuZGVyKClcblxuICAgIHRoaXMucmVnaXN0ZXJJbnRlcnZhbCh3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdm9pZCB0aGlzLmhhbmRsZVBvbW9kb3JvVGljaygpXG4gICAgfSwgMTAwMCkpXG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5hcHAubWV0YWRhdGFDYWNoZS5vbigncmVzb2x2ZWQnLCB0aGlzLmRlYm91bmNlZFJlbmRlcikpXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLnZhdWx0Lm9uKCdjcmVhdGUnLCB0aGlzLmRlYm91bmNlZFJlbmRlcikpXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLnZhdWx0Lm9uKCdkZWxldGUnLCB0aGlzLmRlYm91bmNlZFJlbmRlcikpXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLnZhdWx0Lm9uKCdyZW5hbWUnLCB0aGlzLmRlYm91bmNlZFJlbmRlcikpXG4gIH1cblxuICBhc3luYyBvbkNsb3NlKCkge1xuICAgIGlmICh0aGlzLnBvbW9kb3JvQXVkaW9Db250ZXh0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLnBvbW9kb3JvQXVkaW9Db250ZXh0LmNsb3NlKClcbiAgICAgIH1cbiAgICAgIGNhdGNoIHtcbiAgICAgICAgLy8gSWdub3JlIGNsb3NlIGVycm9ycyB3aGVuIGNvbnRleHQgaXMgYWxyZWFkeSBjbG9zZWQuXG4gICAgICB9XG4gICAgICB0aGlzLnBvbW9kb3JvQXVkaW9Db250ZXh0ID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlbmRlcigpIHtcbiAgICB0aGlzLmVuc3VyZVZhbGlkQWN0aXZlVGFiKClcbiAgICBjb25zdCBzaG91bGRBbmltYXRlVGFiVHJhbnNpdGlvbiA9IHRoaXMubGFzdFJlbmRlcmVkVGFiICE9PSBudWxsICYmIHRoaXMubGFzdFJlbmRlcmVkVGFiICE9PSB0aGlzLmFjdGl2ZVRhYlxuICAgIHRoaXMubGFzdFJlbmRlcmVkVGFiID0gdGhpcy5hY3RpdmVUYWJcblxuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmdldFJvb3RFbCgpXG4gICAgcm9vdC5lbXB0eSgpXG4gICAgdGhpcy5yZXNldFBvbW9kb3JvRG9tUmVmcygpXG5cbiAgICB0aGlzLnJlbmRlckhlYWRlcihyb290KVxuICAgIHRoaXMucmVuZGVyVGFicyhyb290KVxuICAgIGNvbnN0IGNvbnRlbnQgPSByb290LmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy10YWItY29udGVudCcgfSlcbiAgICBpZiAoc2hvdWxkQW5pbWF0ZVRhYlRyYW5zaXRpb24pXG4gICAgICBjb250ZW50LmFkZENsYXNzKCd0YXJlYXMtdGFiLWNvbnRlbnQtYW5pbWF0ZScpXG5cbiAgICBpZiAodGhpcy5hY3RpdmVUYWIgPT09IFRhcmVhc1ZpZXcuUE9NT0RPUk9fVEFCX0lEKSB7XG4gICAgICBhd2FpdCB0aGlzLnJlbmRlclBvbW9kb3JvUGFuZWwoY29udGVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFsbFRhc2tzID0gZ2V0VGFza3ModGhpcy5hcHApXG4gICAgY29uc3QgdGFiVGFza3MgPSB0aGlzLmFjdGl2ZVRhYiA9PT0gVGFyZWFzVmlldy5DT01QTEVURURfVEFCX0lEXG4gICAgICA/IGFsbFRhc2tzLmZpbHRlcih0YXNrID0+IGlzVGFza0luRmluaXNoZWRGb2xkZXIodGFzay5maWxlLnBhdGgpKVxuICAgICAgOiB0aGlzLmFjdGl2ZVRhYiA9PT0gVGFyZWFzVmlldy5DQU5DRUxMRURfVEFCX0lEXG4gICAgICAgID8gYWxsVGFza3MuZmlsdGVyKHRhc2sgPT4gaXNUYXNrSW5DYW5jZWxsZWRGb2xkZXIodGFzay5maWxlLnBhdGgpKVxuICAgICAgICA6IGFsbFRhc2tzXG4gICAgICAgICAgICAuZmlsdGVyKHRhc2sgPT4gIWlzVGFza0luQ29tcGxldGVkRm9sZGVyKHRhc2suZmlsZS5wYXRoKSlcbiAgICAgICAgICAgIC5maWx0ZXIodGFzayA9PiB0YXNrLmZpbGUuYmFzZW5hbWUudG9Mb3dlckNhc2UoKSAhPT0gUE9NT0RPUk9fTE9HX0JBU0VOQU1FLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAuZmlsdGVyKHRhc2sgPT4gdGFzay50YWJsZXJvID09PSB0aGlzLmFjdGl2ZVRhYilcblxuICAgIGlmICh0aGlzLmFjdGl2ZVRhYiA9PT0gVGFyZWFzVmlldy5DT01QTEVURURfVEFCX0lEIHx8IHRoaXMuYWN0aXZlVGFiID09PSBUYXJlYXNWaWV3LkNBTkNFTExFRF9UQUJfSUQpIHtcbiAgICAgIHRoaXMucmVuZGVyQ29tcGxldGVkVGFibGUoY29udGVudCwgdGFiVGFza3MpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0YXNrUHJldmlld01hcCA9IGF3YWl0IHRoaXMuYnVpbGRUYXNrUHJldmlld01hcCh0YWJUYXNrcylcbiAgICBjb25zdCBib2FyZCA9IGNvbnRlbnQuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWJvYXJkJyB9KVxuICAgIGNvbnN0IGJvYXJkR3JvdXBzID0gdGhpcy5wbHVnaW4uZ2V0RXF1aXBvc0ZvclRhYmxlcm8odGhpcy5hY3RpdmVUYWIpXG4gICAgY29uc3QgZ3JvdXBzID0gZ3JvdXBUb3BMZXZlbFRhc2tzKHRhYlRhc2tzLCBib2FyZEdyb3VwcylcbiAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIGJvYXJkR3JvdXBzKVxuICAgICAgdGhpcy5yZW5kZXJHcm91cChib2FyZCwgZ3JvdXAsIGdyb3Vwc1tncm91cC5uYW1lXSB8fCBbXSwgdGFiVGFza3MsIHRhc2tQcmV2aWV3TWFwKVxuXG4gICAgaWYgKGdyb3Vwc1snU2luIGdydXBvJ10/Lmxlbmd0aClcbiAgICAgIHRoaXMucmVuZGVyR3JvdXAoYm9hcmQsIHsgbmFtZTogJ1NpbiBncnVwbycsIGNvbG9yOiAndmFyKC0tdGV4dC1mYWludCknIH0sIGdyb3Vwc1snU2luIGdydXBvJ10sIHRhYlRhc2tzLCB0YXNrUHJldmlld01hcClcblxuICAgIGNvbnN0IGFkZEdyb3VwID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtbmV3LWdyb3VwJyB9KVxuICAgIGNvbnN0IGFkZEdyb3VwTGluayA9IGFkZEdyb3VwLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnKyBOdWV2byBncnVwbycsIGNsczogJ3RhcmVhcy1hZGQtbGluaycgfSlcbiAgICBhZGRHcm91cExpbmsub25jbGljayA9ICgpID0+IG5ldyBOZXdHcm91cE1vZGFsKHRoaXMuYXBwLCB0aGlzLnBsdWdpbiwgdGhpcywgdGhpcy5hY3RpdmVUYWIpLm9wZW4oKVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJDb21wbGV0ZWRUYWJsZShyb290OiBIVE1MRWxlbWVudCwgdGFza3M6IFRhc2tJdGVtW10pIHtcbiAgICBjb25zdCB3cmFwID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtdGFibGUtd3JhcCcgfSlcbiAgICBjb25zdCB0YWJsZSA9IHdyYXAuY3JlYXRlRWwoJ3RhYmxlJywgeyBjbHM6ICd0YXJlYXMtdGFibGUnIH0pXG4gICAgY29uc3QgY29sdW1ucyA9IFsnJywgJycsICdUYXJlYScsICdFc3RhZG8nLCAnR3J1cG8nLCAnUHJpb3JpZGFkJywgJ0RlZGljYWRvJywgJ0VzdGltYWNpw7NuJywgJ0luaWNpbycsICdGaW4nLCAnJScsICdBY2Npb25lcyddXG5cbiAgICBjb25zdCB0YWJsZUhlYWQgPSB0YWJsZS5jcmVhdGVFbCgndGhlYWQnKVxuICAgIGNvbnN0IGhlYWRSb3cgPSB0YWJsZUhlYWQuY3JlYXRlRWwoJ3RyJylcbiAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2x1bW5zKSB7XG4gICAgICBjb25zdCBoZWFkZXJDZWxsID0gaGVhZFJvdy5jcmVhdGVFbCgndGgnLCB7IHRleHQ6IGNvbHVtbiB9KVxuICAgICAgaWYgKFsnRGVkaWNhZG8nLCAnRXN0aW1hY2nDs24nLCAnJSddLmluY2x1ZGVzKGNvbHVtbikpXG4gICAgICAgIGhlYWRlckNlbGwuYWRkQ2xhc3MoJ3RhcmVhcy10aC1udW0nKVxuICAgIH1cblxuICAgIGNvbnN0IHRhYmxlQm9keSA9IHRhYmxlLmNyZWF0ZUVsKCd0Ym9keScpXG4gICAgY29uc3QgdG9wTGV2ZWxUYXNrcyA9IHRhc2tzXG4gICAgICAuZmlsdGVyKHRhc2sgPT4gIXRhc2sucGFyZW50KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKVxuXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRvcExldmVsVGFza3MpXG4gICAgICB0aGlzLnJlbmRlclJvdyh0YWJsZUJvZHksIHRhc2ssIHRhc2tzLCAwKVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJUYWJzKHJvb3Q6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgdGFicyA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXRhYnMnIH0pXG5cbiAgICBmb3IgKGNvbnN0IGJvYXJkIG9mIHRoaXMucGx1Z2luLnRhYmxlcm9zKSB7XG4gICAgICBjb25zdCBib2FyZEJ0biA9IHRhYnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgICAgdGV4dDogYm9hcmQubmFtZSxcbiAgICAgICAgY2xzOiBgdGFyZWFzLXRhYi1idG4ke3RoaXMuYWN0aXZlVGFiID09PSBib2FyZC5uYW1lID8gJyBpcy1hY3RpdmUnIDogJyd9YCxcbiAgICAgIH0pXG4gICAgICBib2FyZEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYiA9IGJvYXJkLm5hbWVcbiAgICAgICAgdGhpcy5yZW5kZXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlZEJ0biA9IHRhYnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIHRleHQ6ICdDb21wbGV0YWRhcycsXG4gICAgICBjbHM6IGB0YXJlYXMtdGFiLWJ0biR7dGhpcy5hY3RpdmVUYWIgPT09IFRhcmVhc1ZpZXcuQ09NUExFVEVEX1RBQl9JRCA/ICcgaXMtYWN0aXZlJyA6ICcnfWAsXG4gICAgfSlcbiAgICBjb21wbGV0ZWRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gVGFyZWFzVmlldy5DT01QTEVURURfVEFCX0lEXG4gICAgICB0aGlzLnJlbmRlcigpXG4gICAgfVxuXG4gICAgY29uc3QgY2FuY2VsbGVkQnRuID0gdGFicy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgdGV4dDogJ0NhbmNlbGFkYXMnLFxuICAgICAgY2xzOiBgdGFyZWFzLXRhYi1idG4ke3RoaXMuYWN0aXZlVGFiID09PSBUYXJlYXNWaWV3LkNBTkNFTExFRF9UQUJfSUQgPyAnIGlzLWFjdGl2ZScgOiAnJ31gLFxuICAgIH0pXG4gICAgY2FuY2VsbGVkQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9IFRhcmVhc1ZpZXcuQ0FOQ0VMTEVEX1RBQl9JRFxuICAgICAgdGhpcy5yZW5kZXIoKVxuICAgIH1cblxuICAgIGNvbnN0IHBvbW9kb3JvQnRuID0gdGFicy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgdGV4dDogJ1BvbW9kb3JvJyxcbiAgICAgIGNsczogYHRhcmVhcy10YWItYnRuJHt0aGlzLmFjdGl2ZVRhYiA9PT0gVGFyZWFzVmlldy5QT01PRE9ST19UQUJfSUQgPyAnIGlzLWFjdGl2ZScgOiAnJ31gLFxuICAgIH0pXG4gICAgcG9tb2Rvcm9CdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gVGFyZWFzVmlldy5QT01PRE9ST19UQUJfSURcbiAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlbmRlclBvbW9kb3JvUGFuZWwocm9vdDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBydW50aW1lU3RhdGUgPSB0aGlzLmdldFBvbW9kb3JvUnVudGltZVN0YXRlKHRydWUpXG4gICAgY29uc3QgcGFuZWwgPSByb290LmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1wYW5lbCcgfSlcbiAgICB0aGlzLnBvbW9kb3JvUGFuZWxFbCA9IHBhbmVsXG5cbiAgICBjb25zdCB0b3AgPSBwYW5lbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tdG9wJyB9KVxuICAgIHRoaXMucG9tb2Rvcm9QaGFzZUVsID0gdG9wLmNyZWF0ZUVsKCdoMicsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXBoYXNlJyB9KVxuICAgIHRoaXMucG9tb2Rvcm9DeWNsZUVsID0gdG9wLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY3ljbGVzJyB9KVxuXG4gICAgY29uc3QgdGltZXJXcmFwID0gcGFuZWwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRpbWVyLXdyYXAnIH0pXG4gICAgdGhpcy5wb21vZG9yb1Byb2dyZXNzRWwgPSB0aW1lcldyYXAuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXByb2dyZXNzJyB9KVxuICAgIGNvbnN0IHRpbWVySW5uZXIgPSB0aGlzLnBvbW9kb3JvUHJvZ3Jlc3NFbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tcHJvZ3Jlc3MtaW5uZXInIH0pXG4gICAgdGhpcy5wb21vZG9yb1RpbWVFbCA9IHRpbWVySW5uZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRpbWUnIH0pXG5cbiAgICBjb25zdCBjb250cm9scyA9IHBhbmVsLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb250cm9scycgfSlcbiAgICB0aGlzLnJlbmRlclBvbW9kb3JvQ29udHJvbHMoY29udHJvbHMsIHJ1bnRpbWVTdGF0ZSlcbiAgICB0aGlzLnBvbW9kb3JvU3RhdGVFbCA9IHBhbmVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1zdGF0ZS1iYXInIH0pXG5cbiAgICBjb25zdCBjb25maWcgPSBwYW5lbC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnJyB9KVxuICAgIGNvbmZpZy5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6ICdEdXJhY2lvbmVzIChtaW4pJyB9KVxuICAgIHRoaXMucmVuZGVyUG9tb2Rvcm9EdXJhdGlvbkNhcmQoY29uZmlnLCBydW50aW1lU3RhdGUuZHVyYXRpb25zKVxuICAgIGF3YWl0IHRoaXMucmVuZGVyUG9tb2Rvcm9UYXNrQ2FyZChwYW5lbClcbiAgICBhd2FpdCB0aGlzLnJlbmRlclBvbW9kb3JvRGFpbHlMb2cocGFuZWwpXG5cbiAgICB0aGlzLnVwZGF0ZVBvbW9kb3JvRG9tKHJ1bnRpbWVTdGF0ZSwgRGF0ZS5ub3coKSlcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUG9tb2Rvcm9EdXJhdGlvbkNhcmQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgZHVyYXRpb25zOiBQb21vZG9yb0R1cmF0aW9ucykge1xuICAgIGNvbnN0IGNhcmREYXRhID0gZ2V0UG9tb2Rvcm9QcmVzZXRDYXJkRGF0YShkdXJhdGlvbnMpXG4gICAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnLWNhcmQnIH0pXG4gICAgY2FyZC5zZXRBdHRyKCdyb2xlJywgJ2J1dHRvbicpXG4gICAgY2FyZC5zZXRBdHRyKCd0YWJpbmRleCcsICcwJylcbiAgICBjYXJkLm9uZGJsY2xpY2sgPSAoKSA9PiB0aGlzLm9wZW5Qb21vZG9yb1ByZXNldE1vZGFsKGR1cmF0aW9ucylcbiAgICBjYXJkLm9ua2V5ZG93biA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSAhPT0gJ0VudGVyJyAmJiBldmVudC5rZXkgIT09ICcgJylcbiAgICAgICAgcmV0dXJuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLm9wZW5Qb21vZG9yb1ByZXNldE1vZGFsKGR1cmF0aW9ucylcbiAgICB9XG5cbiAgICBjYXJkLmNyZWF0ZUVsKCdoNCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZy1jYXJkLXRpdGxlJywgdGV4dDogY2FyZERhdGEudGl0bGUgfSlcbiAgICBjYXJkLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb25maWctY2FyZC1kaXZpZGVyJyB9KVxuICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb25maWctY2FyZC1sYWJlbCcsIHRleHQ6ICdVc28nIH0pXG4gICAgY2FyZC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZy1jYXJkLXRleHQnLCB0ZXh0OiBjYXJkRGF0YS51c2FnZSB9KVxuICAgIGNhcmQuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZy1jYXJkLWRpdmlkZXInIH0pXG4gICAgY2FyZC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZy1jYXJkLXRleHQnLCB0ZXh0OiBjYXJkRGF0YS53b3JrTGFiZWwgfSlcbiAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnLWNhcmQtdGV4dCcsIHRleHQ6IGNhcmREYXRhLnNob3J0QnJlYWtMYWJlbCB9KVxuICAgIGNhcmQuY3JlYXRlRWwoJ3AnLCB7IGNsczogJ3RhcmVhcy1wb21vZG9yby1jb25maWctY2FyZC10ZXh0JywgdGV4dDogY2FyZERhdGEubG9uZ0JyZWFrTGFiZWwgfSlcbiAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29uZmlnLWNhcmQtdGV4dCcsIHRleHQ6IGNhcmREYXRhLmN5Y2xlc0xhYmVsIH0pXG4gICAgY2FyZC5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWNvbmZpZy1jYXJkLWhpbnQnLCB0ZXh0OiAnRG9ibGUgY2xpY2sgcGFyYSBjYW1iaWFyIGR1cmFjacOzbicgfSlcbiAgfVxuXG4gIHByaXZhdGUgb3BlblBvbW9kb3JvUHJlc2V0TW9kYWwoZHVyYXRpb25zOiBQb21vZG9yb0R1cmF0aW9ucykge1xuICAgIG5ldyBQb21vZG9yb1ByZXNldE1vZGFsKHRoaXMuYXBwLCBkdXJhdGlvbnMsIChuZXh0RHVyYXRpb25zKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVBvbW9kb3JvRHVyYXRpb25zKG5leHREdXJhdGlvbnMpXG4gICAgICB0aGlzLnJlbmRlcigpXG4gICAgfSkub3BlbigpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlbmRlclBvbW9kb3JvVGFza0NhcmQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRhc2stc2VjdGlvbicgfSlcbiAgICBzZWN0aW9uLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ1RhcmVhIHZpbmN1bGFkYScgfSlcbiAgICBjb25zdCBpc1J1bm5pbmcgPSB0aGlzLnBsdWdpbi5wb21vZG9yby5ydW5TdGF0ZSA9PT0gJ3J1bm5pbmcnXG5cbiAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSB0aGlzLmdldFNlbGVjdGVkUG9tb2Rvcm9UYXNrKClcbiAgICBpZiAoc2VsZWN0ZWRUYXNrKSB7XG4gICAgICBjb25zdCBhbGxUYXNrcyA9IGdldFRhc2tzKHRoaXMuYXBwKVxuICAgICAgY29uc3QgdGFza1ByZXZpZXdNYXAgPSBhd2FpdCB0aGlzLmJ1aWxkVGFza1ByZXZpZXdNYXAoW3NlbGVjdGVkVGFza10pXG4gICAgICBjb25zdCBsaXN0ID0gc2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtY2FyZC1saXN0IHRhcmVhcy1wb21vZG9yby10YXNrLWNhcmQtbGlzdCcgfSlcbiAgICAgIHRoaXMucmVuZGVyVGFza0NhcmQobGlzdCwgc2VsZWN0ZWRUYXNrLCBhbGxUYXNrcywgdGFza1ByZXZpZXdNYXAuZ2V0KHNlbGVjdGVkVGFzay5maWxlLnBhdGgpIHx8ICcnKVxuICAgICAgc2VjdGlvbi5jcmVhdGVFbCgncCcsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRhc2stY2FyZC1oaW50JywgdGV4dDogJ1Vzw6EgZWwgYm90w7NuIHBhcmEgY2FtYmlhciBsYSB0YXJlYSB2aW5jdWxhZGEnIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3QgZW1wdHlDYXJkID0gc2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tdGFzay1jYXJkJyB9KVxuICAgICAgZW1wdHlDYXJkLmNyZWF0ZUVsKCdwJywge1xuICAgICAgICBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tdGFzay1jYXJkLWVtcHR5JyxcbiAgICAgICAgdGV4dDogJ05vIGhheSB0YXJlYSBzZWxlY2Npb25hZGEnLFxuICAgICAgfSlcbiAgICAgIGVtcHR5Q2FyZC5jcmVhdGVFbCgncCcsIHtcbiAgICAgICAgY2xzOiAndGFyZWFzLXBvbW9kb3JvLXRhc2stY2FyZC1oaW50JyxcbiAgICAgICAgdGV4dDogJ1NlbGVjY2lvbsOhIHVuYSB0YXJlYSBjb24gZWwgYm90w7NuJyxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlQnV0dG9uID0gc2VjdGlvbi5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgdGV4dDogJ0NhbWJpYXIgdGFyZWEgdmluY3VsYWRhJyxcbiAgICAgIGNsczogJ3RhcmVhcy1wb21vZG9yby1idG4gdGFyZWFzLXBvbW9kb3JvLXRhc2stY2hhbmdlLWJ0bicsXG4gICAgfSlcbiAgICBjaGFuZ2VCdXR0b24uZGlzYWJsZWQgPSBpc1J1bm5pbmdcbiAgICBjaGFuZ2VCdXR0b24uc2V0QXR0cignYXJpYS1sYWJlbCcsICdDYW1iaWFyIHRhcmVhIHZpbmN1bGFkYScpXG4gICAgY2hhbmdlQnV0dG9uLnNldEF0dHIoJ3RpdGxlJywgaXNSdW5uaW5nXG4gICAgICA/ICdObyBzZSBwdWVkZSBjYW1iaWFyIGxhIHRhcmVhIG1pZW50cmFzIGVsIGNvbnRhZG9yIGVzdMOhIGNvcnJpZW5kbydcbiAgICAgIDogJ0NhbWJpYXIgdGFyZWEgdmluY3VsYWRhJylcbiAgICBjaGFuZ2VCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMub3BlblBvbW9kb3JvVGFza1NlbGVjdG9yKClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VsZWN0ZWRQb21vZG9yb1Rhc2soKTogVGFza0l0ZW0gfCBudWxsIHtcbiAgICBjb25zdCBzZWxlY3RlZFRhc2tQYXRoID0gdGhpcy5wbHVnaW4ucG9tb2Rvcm8uc2VsZWN0ZWRUYXNrUGF0aFxuICAgIGlmICghc2VsZWN0ZWRUYXNrUGF0aClcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICBjb25zdCB0YXNrID0gZ2V0VGFza3ModGhpcy5hcHApLmZpbmQoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gc2VsZWN0ZWRUYXNrUGF0aClcbiAgICBpZiAodGFzaylcbiAgICAgIHJldHVybiB0YXNrXG5cbiAgICB0aGlzLnNldFBvbW9kb3JvU2VsZWN0ZWRUYXNrUGF0aChudWxsKVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBwcml2YXRlIG9wZW5Qb21vZG9yb1Rhc2tTZWxlY3RvcigpIHtcbiAgICBpZiAodGhpcy5wbHVnaW4ucG9tb2Rvcm8ucnVuU3RhdGUgPT09ICdydW5uaW5nJykge1xuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZSgnTm8gc2UgcHVlZGUgY2FtYmlhciBsYSB0YXJlYSBtaWVudHJhcyBlbCBjb250YWRvciBlc3TDoSBjb3JyaWVuZG8uJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFsbFRhc2tzID0gZ2V0VGFza3ModGhpcy5hcHApXG4gICAgY29uc3Qgc2VsZWN0YWJsZVRhc2tzID0gYWxsVGFza3NcbiAgICAgIC5maWx0ZXIodGFzayA9PiAhdGFzay5wYXJlbnQpXG4gICAgICAuZmlsdGVyKHRhc2sgPT4gdGFzay5lc3RhZG8gPT09ICdFbiBwcm9ncmVzbycpXG4gICAgICAuZmlsdGVyKHRhc2sgPT4gIWlzVGFza0luQ29tcGxldGVkRm9sZGVyKHRhc2suZmlsZS5wYXRoKSlcblxuICAgIG5ldyBTZWxlY3RQb21vZG9yb1Rhc2tNb2RhbChcbiAgICAgIHRoaXMuYXBwLFxuICAgICAgc2VsZWN0YWJsZVRhc2tzLFxuICAgICAgdGhpcy5wbHVnaW4ucG9tb2Rvcm8uc2VsZWN0ZWRUYXNrUGF0aCxcbiAgICAgICh0YXNrUGF0aCkgPT4ge1xuICAgICAgICB0aGlzLnNldFBvbW9kb3JvU2VsZWN0ZWRUYXNrUGF0aCh0YXNrUGF0aClcbiAgICAgICAgdGhpcy5yZW5kZXIoKVxuICAgICAgfSxcbiAgICApLm9wZW4oKVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRQb21vZG9yb1NlbGVjdGVkVGFza1BhdGgodGFza1BhdGg6IHN0cmluZyB8IG51bGwpIHtcbiAgICB0aGlzLnBsdWdpbi5zZXRQb21vZG9yb1N0YXRlKHtcbiAgICAgIC4uLnRoaXMucGx1Z2luLnBvbW9kb3JvLFxuICAgICAgZHVyYXRpb25zOiB7IC4uLnRoaXMucGx1Z2luLnBvbW9kb3JvLmR1cmF0aW9ucyB9LFxuICAgICAgc2VsZWN0ZWRUYXNrUGF0aDogdGFza1BhdGgsXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUG9tb2Rvcm9Db250cm9scyhjb250YWluZXI6IEhUTUxFbGVtZW50LCBzdGF0ZTogUG9tb2Rvcm9TdGF0ZSkge1xuICAgIGNvbnN0IGljb25Db250cm9scyA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29udHJvbHMtaWNvbnMnIH0pXG5cbiAgICBpZiAoc3RhdGUucnVuU3RhdGUgPT09ICdydW5uaW5nJykge1xuICAgICAgY29uc3QgcGF1c2VCdXR0b24gPSBpY29uQ29udHJvbHMuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ+KPuCcsIGNsczogJ3RhcmVhcy1wb21vZG9yby1idG4gdGFyZWFzLXBvbW9kb3JvLWJ0bi1pY29uJyB9KVxuICAgICAgcGF1c2VCdXR0b24uc2V0QXR0cignYXJpYS1sYWJlbCcsICdQYXVzYXInKVxuICAgICAgcGF1c2VCdXR0b24uc2V0QXR0cigndGl0bGUnLCAnUGF1c2FyJylcbiAgICAgIHBhdXNlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmhhbmRsZVBvbW9kb3JvUGF1c2UoKVxuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5ydW5TdGF0ZSA9PT0gJ3BhdXNlZCcpIHtcbiAgICAgIGNvbnN0IHJlc3VtZUJ1dHRvbiA9IGljb25Db250cm9scy5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAn4pa2JywgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWJ0biB0YXJlYXMtcG9tb2Rvcm8tYnRuLWljb24gbW9kLWN0YScgfSlcbiAgICAgIHJlc3VtZUJ1dHRvbi5zZXRBdHRyKCdhcmlhLWxhYmVsJywgJ1JlYW51ZGFyJylcbiAgICAgIHJlc3VtZUJ1dHRvbi5zZXRBdHRyKCd0aXRsZScsICdSZWFudWRhcicpXG4gICAgICByZXN1bWVCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuaGFuZGxlUG9tb2Rvcm9SZXN1bWUoKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gaWNvbkNvbnRyb2xzLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICfilrYnLCBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tYnRuIHRhcmVhcy1wb21vZG9yby1idG4taWNvbiBtb2QtY3RhJyB9KVxuICAgICAgc3RhcnRCdXR0b24uc2V0QXR0cignYXJpYS1sYWJlbCcsICdJbmljaWFyJylcbiAgICAgIHN0YXJ0QnV0dG9uLnNldEF0dHIoJ3RpdGxlJywgJ0luaWNpYXInKVxuICAgICAgc3RhcnRCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuaGFuZGxlUG9tb2Rvcm9TdGFydCgpXG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRCdXR0b24gPSBpY29uQ29udHJvbHMuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ+KGuicsIGNsczogJ3RhcmVhcy1wb21vZG9yby1idG4gdGFyZWFzLXBvbW9kb3JvLWJ0bi1pY29uJyB9KVxuICAgIHJlc2V0QnV0dG9uLnNldEF0dHIoJ2FyaWEtbGFiZWwnLCAnUmVpbmljaWFyJylcbiAgICByZXNldEJ1dHRvbi5zZXRBdHRyKCd0aXRsZScsICdSZWluaWNpYXInKVxuICAgIHJlc2V0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB2b2lkIHRoaXMuaGFuZGxlUG9tb2Rvcm9SZXNldCgpXG4gICAgfVxuXG4gICAgY29uc3QgZGV2aWF0aW9uQnV0dG9uID0gaWNvbkNvbnRyb2xzLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICB0ZXh0OiBzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSA/ICfwn5O1JyA6ICfwn5OeJyxcbiAgICAgIGNsczogYHRhcmVhcy1wb21vZG9yby1idG4gdGFyZWFzLXBvbW9kb3JvLWJ0bi1pY29uJHtzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSA/ICcgaXMtZGV2aWF0aW9uLWFjdGl2ZScgOiAnJ31gLFxuICAgIH0pXG4gICAgZGV2aWF0aW9uQnV0dG9uLnNldEF0dHIoJ2FyaWEtbGFiZWwnLCAnRGVzdsOtbycpXG4gICAgZGV2aWF0aW9uQnV0dG9uLnNldEF0dHIoJ3RpdGxlJywgc3RhdGUuaXNEZXZpYXRpb25BY3RpdmVcbiAgICAgID8gJ0ZpbmFsaXphciBkZXN2w61vJ1xuICAgICAgOiAnSW5pY2lhciBkZXN2w61vIChsbGFtYWRhcy9yZXVuaW9uZXMpJylcbiAgICBjb25zdCBjYW5Ub2dnbGVEZXZpYXRpb24gPSBzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZSB8fCBzdGF0ZS5ydW5TdGF0ZSA9PT0gJ3J1bm5pbmcnXG4gICAgZGV2aWF0aW9uQnV0dG9uLmRpc2FibGVkID0gIWNhblRvZ2dsZURldmlhdGlvblxuICAgIGRldmlhdGlvbkJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5oYW5kbGVQb21vZG9yb0RldmlhdGlvblRvZ2dsZSgpXG5cbiAgICBpZiAoc3RhdGUucGhhc2UgIT09ICd3b3JrJykge1xuICAgICAgY29uc3QgZXh0cmFDb250cm9scyA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tY29udHJvbHMtZXh0cmEnIH0pXG4gICAgICBjb25zdCB3b3JrQnV0dG9uID0gZXh0cmFDb250cm9scy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgICB0ZXh0OiAnSXIgYSB0cmFiYWpvJyxcbiAgICAgICAgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWJ0bicsXG4gICAgICB9KVxuICAgICAgd29ya0J1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5oYW5kbGVQb21vZG9yb1N3aXRjaFRvV29yaygpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb21vZG9yb1N0YXJ0KCkge1xuICAgIHRoaXMudW5sb2NrUG9tb2Rvcm9BdWRpbygpXG4gICAgY29uc3QgbmV4dCA9IHN0YXJ0UG9tb2Rvcm8odGhpcy5nZXRQb21vZG9yb1J1bnRpbWVTdGF0ZShmYWxzZSksIERhdGUubm93KCkpXG4gICAgdGhpcy5wbHVnaW4uc2V0UG9tb2Rvcm9TdGF0ZShuZXh0KVxuICAgIHRoaXMucmVuZGVyKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUG9tb2Rvcm9QYXVzZSgpIHtcbiAgICB0aGlzLnVubG9ja1BvbW9kb3JvQXVkaW8oKVxuICAgIGNvbnN0IG5leHQgPSBwYXVzZVBvbW9kb3JvKHRoaXMuZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUoZmFsc2UpLCBEYXRlLm5vdygpKVxuICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUobmV4dClcbiAgICB0aGlzLnJlbmRlcigpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBvbW9kb3JvUmVzdW1lKCkge1xuICAgIHRoaXMudW5sb2NrUG9tb2Rvcm9BdWRpbygpXG4gICAgY29uc3QgbmV4dCA9IHJlc3VtZVBvbW9kb3JvKHRoaXMuZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUoZmFsc2UpLCBEYXRlLm5vdygpKVxuICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUobmV4dClcbiAgICB0aGlzLnJlbmRlcigpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZVBvbW9kb3JvUmVzZXQoKSB7XG4gICAgdGhpcy51bmxvY2tQb21vZG9yb0F1ZGlvKClcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUoZmFsc2UpXG4gICAgYXdhaXQgdGhpcy5sb2dQb21vZG9yb1Jlc2V0RW50cnkoY3VycmVudCwgbm93KVxuICAgIGNvbnN0IG5leHQgPSByZXNldFBvbW9kb3JvKGN1cnJlbnQpXG4gICAgdGhpcy5wbHVnaW4uc2V0UG9tb2Rvcm9TdGF0ZShuZXh0KVxuICAgIHRoaXMucmVuZGVyKClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlUG9tb2Rvcm9EZXZpYXRpb25Ub2dnbGUoKSB7XG4gICAgdGhpcy51bmxvY2tQb21vZG9yb0F1ZGlvKClcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUoZmFsc2UpXG5cbiAgICBpZiAoY3VycmVudC5pc0RldmlhdGlvbkFjdGl2ZSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZXhpdFBvbW9kb3JvRGV2aWF0aW9uKGN1cnJlbnQsIG5vdylcbiAgICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUocmVzdWx0LnN0YXRlKVxuICAgICAgYXdhaXQgdGhpcy5hZGRQb21vZG9yb0RldmlhdGlvblRpbWVUb1NlbGVjdGVkVGFzayhyZXN1bHQuZWxhcHNlZFNlY29uZHMsIHJlc3VsdC5zdGF0ZSlcblxuICAgICAgaWYgKHJlc3VsdC5jb21wbGV0ZWRXb3JrKSB7XG4gICAgICAgIGNvbnN0IG5leHRQaGFzZUxhYmVsID0gZ2V0UG9tb2Rvcm9QaGFzZUxhYmVsKHJlc3VsdC5zdGF0ZS5waGFzZSlcbiAgICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShgRGVzdsOtbyBmaW5hbGl6YWRvLiBJbmljaWFuZG8gJHtuZXh0UGhhc2VMYWJlbC50b0xvd2VyQ2FzZSgpfS5gLCA3MDAwKVxuICAgICAgICB0aGlzLmZsYXNoUG9tb2Rvcm9QYW5lbCgpXG4gICAgICAgIHRoaXMucGxheVBvbW9kb3JvQmVlcCgpXG4gICAgICAgIGF3YWl0IHRoaXMuYWRkUG9tb2Rvcm9Xb3JrVGltZVRvU2VsZWN0ZWRUYXNrKFsnd29yayddLCByZXN1bHQuc3RhdGUpXG4gICAgICAgIGF3YWl0IHRoaXMubG9nUG9tb2Rvcm9FbnRyaWVzKFsnd29yayddLCByZXN1bHQuc3RhdGUsIG5vdylcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZW5kZXIoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbmV4dCA9IGVudGVyUG9tb2Rvcm9EZXZpYXRpb24oY3VycmVudCwgbm93KVxuICAgIGlmIChuZXh0ID09PSBjdXJyZW50KSB7XG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdTb2xvIHBvZMOpcyBpbmljaWFyIGRlc3bDrW8gY3VhbmRvIGVsIGNvbnRhZG9yIGVzdMOhIGNvcnJpZW5kby4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5wbHVnaW4uc2V0UG9tb2Rvcm9TdGF0ZShuZXh0KVxuICAgIHRoaXMucmVuZGVyKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUG9tb2Rvcm9Td2l0Y2hUb1dvcmsoKSB7XG4gICAgdGhpcy51bmxvY2tQb21vZG9yb0F1ZGlvKClcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5nZXRQb21vZG9yb1J1bnRpbWVTdGF0ZShmYWxzZSlcbiAgICBjb25zdCB3b3JrU3RhdGUgPSB7XG4gICAgICAuLi5jdXJyZW50LFxuICAgICAgcGhhc2U6ICd3b3JrJyBhcyBQb21vZG9yb1BoYXNlLFxuICAgICAgcnVuU3RhdGU6ICdpZGxlJyBhcyBjb25zdCxcbiAgICAgIHJlbWFpbmluZ1NlY29uZHM6IGN1cnJlbnQuZHVyYXRpb25zLndvcmtNaW51dGVzICogNjAsXG4gICAgICBlbmRUaW1lc3RhbXA6IG51bGwsXG4gICAgICBpc0RldmlhdGlvbkFjdGl2ZTogZmFsc2UsXG4gICAgICBkZXZpYXRpb25TdGFydGVkQXQ6IG51bGwsXG4gICAgICBkZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kczogMCxcbiAgICAgIHBoYXNlRGV2aWF0aW9uU2Vjb25kczogMCxcbiAgICB9XG4gICAgdGhpcy5wbHVnaW4uc2V0UG9tb2Rvcm9TdGF0ZSh3b3JrU3RhdGUpXG4gICAgdGhpcy5yZW5kZXIoKVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQb21vZG9yb0R1cmF0aW9ucyhuZXh0RHVyYXRpb25zOiBQb21vZG9yb0R1cmF0aW9ucykge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVQb21vZG9yb0R1cmF0aW9ucyhuZXh0RHVyYXRpb25zKVxuICAgIGNvbnN0IG5leHQgPSBhcHBseVBvbW9kb3JvRHVyYXRpb25zKHRoaXMuZ2V0UG9tb2Rvcm9SdW50aW1lU3RhdGUoZmFsc2UpLCBub3JtYWxpemVkKVxuICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUobmV4dClcbiAgICB0aGlzLnVwZGF0ZVBvbW9kb3JvRG9tKG5leHQsIERhdGUubm93KCkpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZVBvbW9kb3JvVGljaygpIHtcbiAgICBjb25zdCBydW50aW1lU3RhdGUgPSB0aGlzLmdldFBvbW9kb3JvUnVudGltZVN0YXRlKHRydWUpXG4gICAgaWYgKHRoaXMuYWN0aXZlVGFiID09PSBUYXJlYXNWaWV3LlBPTU9ET1JPX1RBQl9JRClcbiAgICAgIHRoaXMudXBkYXRlUG9tb2Rvcm9Eb20ocnVudGltZVN0YXRlLCBEYXRlLm5vdygpKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQb21vZG9yb1J1bnRpbWVTdGF0ZShub3RpZnlDb21wbGV0aW9uOiBib29sZWFuKTogUG9tb2Rvcm9TdGF0ZSB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGNvbnN0IGFkdmFuY2VkID0gYWR2YW5jZVBvbW9kb3JvU3RhdGUodGhpcy5wbHVnaW4ucG9tb2Rvcm8sIG5vdylcblxuICAgIGlmIChhZHZhbmNlZC50cmFuc2l0aW9uZWQpIHtcbiAgICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUoYWR2YW5jZWQuc3RhdGUpXG5cbiAgICAgIGlmIChub3RpZnlDb21wbGV0aW9uKVxuICAgICAgICB0aGlzLm5vdGlmeVBvbW9kb3JvVHJhbnNpdGlvbnMoYWR2YW5jZWQuY29tcGxldGVkUGhhc2VzLCBhZHZhbmNlZC5zdGF0ZSlcblxuICAgICAgaWYgKHRoaXMuYWN0aXZlVGFiID09PSBUYXJlYXNWaWV3LlBPTU9ET1JPX1RBQl9JRClcbiAgICAgICAgdm9pZCB0aGlzLnJlbmRlcigpXG5cbiAgICAgIHJldHVybiBhZHZhbmNlZC5zdGF0ZVxuICAgIH1cblxuICAgIGlmIChhZHZhbmNlZC5zdGF0ZSAhPT0gdGhpcy5wbHVnaW4ucG9tb2Rvcm8pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFkdmFuY2VkLnN0YXRlLFxuICAgICAgICByZW1haW5pbmdTZWNvbmRzOiBnZXRQb21vZG9yb1JlbWFpbmluZ1NlY29uZHMoYWR2YW5jZWQuc3RhdGUsIG5vdyksXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMucGx1Z2luLnBvbW9kb3JvLFxuICAgICAgZHVyYXRpb25zOiB7IC4uLnRoaXMucGx1Z2luLnBvbW9kb3JvLmR1cmF0aW9ucyB9LFxuICAgICAgcmVtYWluaW5nU2Vjb25kczogZ2V0UG9tb2Rvcm9SZW1haW5pbmdTZWNvbmRzKHRoaXMucGx1Z2luLnBvbW9kb3JvLCBub3cpLFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUG9tb2Rvcm9Eb20oc3RhdGU6IFBvbW9kb3JvU3RhdGUsIG5vd01zOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMucG9tb2Rvcm9UaW1lRWwgfHwgIXRoaXMucG9tb2Rvcm9QaGFzZUVsIHx8ICF0aGlzLnBvbW9kb3JvQ3ljbGVFbCB8fCAhdGhpcy5wb21vZG9yb1N0YXRlRWwpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHJlbWFpbmluZyA9IGdldFBvbW9kb3JvUmVtYWluaW5nU2Vjb25kcyhzdGF0ZSwgbm93TXMpXG4gICAgY29uc3QgZGV2aWF0aW9uRWxhcHNlZCA9IGdldERldmlhdGlvbkVsYXBzZWRTZWNvbmRzKHN0YXRlLCBub3dNcylcbiAgICBjb25zdCBkaXNwbGF5ZWRTZWNvbmRzID0gc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUgPyBkZXZpYXRpb25FbGFwc2VkIDogcmVtYWluaW5nXG4gICAgdGhpcy5wb21vZG9yb1RpbWVFbC5zZXRUZXh0KGZvcm1hdFBvbW9kb3JvQ291bnRkb3duKGRpc3BsYXllZFNlY29uZHMpKVxuICAgIHRoaXMucG9tb2Rvcm9UaW1lRWwudG9nZ2xlQ2xhc3MoJ2lzLWRldmlhdGlvbicsIHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlKVxuICAgIGlmICh0aGlzLnBvbW9kb3JvUHJvZ3Jlc3NFbCkge1xuICAgICAgY29uc3QgdG90YWxTZWNvbmRzID0gTWF0aC5tYXgoMSwgc3RhdGUuaXNEZXZpYXRpb25BY3RpdmVcbiAgICAgICAgPyBNYXRoLm1heCgxLCBzdGF0ZS5kZXZpYXRpb25CYXNlUmVtYWluaW5nU2Vjb25kcylcbiAgICAgICAgOiBnZXRQaGFzZUR1cmF0aW9uU2Vjb25kcyhzdGF0ZS5kdXJhdGlvbnMsIHN0YXRlLnBoYXNlKSlcbiAgICAgIGNvbnN0IGVsYXBzZWQgPSBzdGF0ZS5pc0RldmlhdGlvbkFjdGl2ZVxuICAgICAgICA/IGRldmlhdGlvbkVsYXBzZWRcbiAgICAgICAgOiBNYXRoLm1heCgwLCB0b3RhbFNlY29uZHMgLSByZW1haW5pbmcpXG4gICAgICBjb25zdCBwcm9ncmVzc1BlcmNlbnQgPSBNYXRoLm1pbigxMDAsIChlbGFwc2VkIC8gdG90YWxTZWNvbmRzKSAqIDEwMClcbiAgICAgIHRoaXMucG9tb2Rvcm9Qcm9ncmVzc0VsLnN0eWxlLnNldFByb3BlcnR5KCctLXRhcmVhcy1wb21vZG9yby1wcm9ncmVzcycsIGAke3Byb2dyZXNzUGVyY2VudH0lYClcbiAgICAgIHRoaXMucG9tb2Rvcm9Qcm9ncmVzc0VsLnNldEF0dHIoJ2RhdGEtbW9kZScsIHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlID8gJ2RldmlhdGlvbicgOiAnbm9ybWFsJylcbiAgICB9XG4gICAgdGhpcy5wb21vZG9yb1BoYXNlRWwuc2V0VGV4dChnZXRQb21vZG9yb1BoYXNlTGFiZWwoc3RhdGUucGhhc2UpKVxuICAgIHRoaXMucG9tb2Rvcm9DeWNsZUVsLnNldFRleHQoYENpY2xvcyBjb21wbGV0YWRvczogJHtzdGF0ZS5jb21wbGV0ZWRXb3JrQ3ljbGVzfWApXG5cbiAgICBjb25zdCBydW5TdGF0ZUxhYmVsID0gc3RhdGUuaXNEZXZpYXRpb25BY3RpdmVcbiAgICAgID8gJ0Rlc3bDrW8nXG4gICAgICA6IHN0YXRlLnJ1blN0YXRlID09PSAncnVubmluZydcbiAgICAgICAgPyAnRW4gY3Vyc28nXG4gICAgICAgIDogc3RhdGUucnVuU3RhdGUgPT09ICdwYXVzZWQnXG4gICAgICAgICAgPyAnUGF1c2FkbydcbiAgICAgICAgICA6ICdMaXN0bydcbiAgICB0aGlzLnBvbW9kb3JvU3RhdGVFbC5zZXRUZXh0KHJ1blN0YXRlTGFiZWwpXG4gICAgdGhpcy5wb21vZG9yb1N0YXRlRWwuc2V0QXR0cignZGF0YS1zdGF0ZScsIHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlID8gJ2RldmlhdGlvbicgOiBzdGF0ZS5ydW5TdGF0ZSlcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5UG9tb2Rvcm9UcmFuc2l0aW9ucyhjb21wbGV0ZWRQaGFzZXM6IFBvbW9kb3JvUGhhc2VbXSwgbmV4dFN0YXRlOiBQb21vZG9yb1N0YXRlKSB7XG4gICAgY29uc3QgY29tcGxldGVkID0gY29tcGxldGVkUGhhc2VzW2NvbXBsZXRlZFBoYXNlcy5sZW5ndGggLSAxXVxuICAgIGlmICghY29tcGxldGVkKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBuZXh0UGhhc2VMYWJlbCA9IGdldFBvbW9kb3JvUGhhc2VMYWJlbChuZXh0U3RhdGUucGhhc2UpXG4gICAgaWYgKGNvbXBsZXRlZCA9PT0gJ3dvcmsnKVxuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShgUG9tb2Rvcm8gZmluYWxpemFkby4gSW5pY2lhbmRvICR7bmV4dFBoYXNlTGFiZWwudG9Mb3dlckNhc2UoKX0uYCwgNzAwMClcbiAgICBlbHNlXG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKGBEZXNjYW5zbyBmaW5hbGl6YWRvLiBJbmljaWFuZG8gJHtuZXh0UGhhc2VMYWJlbC50b0xvd2VyQ2FzZSgpfS5gLCA3MDAwKVxuXG4gICAgdGhpcy5mbGFzaFBvbW9kb3JvUGFuZWwoKVxuICAgIHRoaXMucGxheVBvbW9kb3JvQmVlcCgpXG4gICAgdm9pZCB0aGlzLmFkZFBvbW9kb3JvV29ya1RpbWVUb1NlbGVjdGVkVGFzayhjb21wbGV0ZWRQaGFzZXMsIG5leHRTdGF0ZSlcbiAgICB2b2lkIHRoaXMubG9nUG9tb2Rvcm9FbnRyaWVzKGNvbXBsZXRlZFBoYXNlcywgbmV4dFN0YXRlLCBEYXRlLm5vdygpKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2dQb21vZG9yb0VudHJpZXMoY29tcGxldGVkUGhhc2VzOiBQb21vZG9yb1BoYXNlW10sIHN0YXRlOiBQb21vZG9yb1N0YXRlLCBub3dNczogbnVtYmVyKSB7XG4gICAgaWYgKGNvbXBsZXRlZFBoYXNlcy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IHN0YXRlLnNlbGVjdGVkVGFza1BhdGhcbiAgICAgID8gZ2V0VGFza3ModGhpcy5hcHApLmZpbmQoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gc3RhdGUuc2VsZWN0ZWRUYXNrUGF0aClcbiAgICAgIDogbnVsbFxuICAgIGNvbnN0IHRhc2tOYW1lID0gc2VsZWN0ZWRUYXNrPy50YXJlYSB8fCAnU2luIHRhcmVhIHZpbmN1bGFkYSdcbiAgICBjb25zdCBkdXJhdGlvbkNob2ljZSA9IHRoaXMucmVzb2x2ZVBvbW9kb3JvRHVyYXRpb25DaG9pY2Uoc3RhdGUuZHVyYXRpb25zKVxuICAgIGNvbnN0IHRvdGFsRGV2aWF0aW9uSG91cnMgPSB0aGlzLnJvdW5kVG9Ud28oc3RhdGUucGhhc2VEZXZpYXRpb25TZWNvbmRzIC8gMzYwMClcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wbGV0ZWRQaGFzZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBwaGFzZSA9IGNvbXBsZXRlZFBoYXNlc1tpbmRleF1cbiAgICAgIGNvbnN0IGRldmlhdGlvbkhvdXJzID0gaW5kZXggPT09IGNvbXBsZXRlZFBoYXNlcy5sZW5ndGggLSAxXG4gICAgICAgID8gdG90YWxEZXZpYXRpb25Ib3Vyc1xuICAgICAgICA6IDBcbiAgICAgIGNvbnN0IGR1cmF0aW9uTWludXRlcyA9IGdldFBoYXNlRHVyYXRpb25TZWNvbmRzKHN0YXRlLmR1cmF0aW9ucywgcGhhc2UpIC8gNjBcbiAgICAgIGF3YWl0IGFwcGVuZFBvbW9kb3JvTG9nRW50cnkodGhpcy5hcHAsIHtcbiAgICAgICAgdGltZXN0YW1wTXM6IG5vd01zLFxuICAgICAgICB0eXBlOiBnZXRQb21vZG9yb1BoYXNlTGFiZWwocGhhc2UpLFxuICAgICAgICBkdXJhdGlvbkNob2ljZSxcbiAgICAgICAgdGFzazogdGFza05hbWUsXG4gICAgICAgIGR1cmF0aW9uTWludXRlcyxcbiAgICAgICAgZGV2aWF0aW9uSG91cnMsXG4gICAgICAgIGZpbmFsaXplZDogdHJ1ZSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnBoYXNlRGV2aWF0aW9uU2Vjb25kcyA+IDApIHtcbiAgICAgIHRoaXMucGx1Z2luLnNldFBvbW9kb3JvU3RhdGUoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZHVyYXRpb25zOiB7IC4uLnN0YXRlLmR1cmF0aW9ucyB9LFxuICAgICAgICBwaGFzZURldmlhdGlvblNlY29uZHM6IDAsXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLmFjdGl2ZVRhYiA9PT0gVGFyZWFzVmlldy5QT01PRE9ST19UQUJfSUQpXG4gICAgICBhd2FpdCB0aGlzLnJlbmRlcigpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGFkZFBvbW9kb3JvV29ya1RpbWVUb1NlbGVjdGVkVGFzayhjb21wbGV0ZWRQaGFzZXM6IFBvbW9kb3JvUGhhc2VbXSwgc3RhdGU6IFBvbW9kb3JvU3RhdGUpIHtcbiAgICBjb25zdCBjb21wbGV0ZWRXb3JrQ291bnQgPSBjb21wbGV0ZWRQaGFzZXMuZmlsdGVyKHBoYXNlID0+IHBoYXNlID09PSAnd29yaycpLmxlbmd0aFxuICAgIGlmIChjb21wbGV0ZWRXb3JrQ291bnQgPT09IDApXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHNlbGVjdGVkVGFza1BhdGggPSBzdGF0ZS5zZWxlY3RlZFRhc2tQYXRoXG4gICAgaWYgKCFzZWxlY3RlZFRhc2tQYXRoKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCB0YXNrID0gZ2V0VGFza3ModGhpcy5hcHApLmZpbmQoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gc2VsZWN0ZWRUYXNrUGF0aClcbiAgICBpZiAoIXRhc2spIHtcbiAgICAgIHRoaXMuc2V0UG9tb2Rvcm9TZWxlY3RlZFRhc2tQYXRoKG51bGwpXG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdMYSB0YXJlYSBzZWxlY2Npb25hZGEgcGFyYSBQb21vZG9ybyB5YSBubyBleGlzdGUuIFNlIHF1aXTDsyBsYSBzZWxlY2Npw7NuLicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB3b3JrZWRIb3VycyA9IHRoaXMucm91bmRUb1R3bygoY29tcGxldGVkV29ya0NvdW50ICogc3RhdGUuZHVyYXRpb25zLndvcmtNaW51dGVzKSAvIDYwKVxuICAgIGlmICh3b3JrZWRIb3VycyA8PSAwKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBuZXh0RGVkaWNhdGVkID0gdGhpcy5yb3VuZFRvVHdvKHRhc2suZGVkaWNhZG8gKyB3b3JrZWRIb3VycylcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBkZWRpY2FkbzogbmV4dERlZGljYXRlZCB9KVxuICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYFNlIHN1bWFyb24gJHt0aGlzLmZvcm1hdERlY2ltYWwod29ya2VkSG91cnMpfSBoIGEgXCIke3Rhc2sudGFyZWF9XCIuYCwgNTAwMClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgYWRkUG9tb2Rvcm9EZXZpYXRpb25UaW1lVG9TZWxlY3RlZFRhc2soZWxhcHNlZFNlY29uZHM6IG51bWJlciwgc3RhdGU6IFBvbW9kb3JvU3RhdGUpIHtcbiAgICBpZiAoZWxhcHNlZFNlY29uZHMgPD0gMClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrUGF0aCA9IHN0YXRlLnNlbGVjdGVkVGFza1BhdGhcbiAgICBpZiAoIXNlbGVjdGVkVGFza1BhdGgpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHRhc2sgPSBnZXRUYXNrcyh0aGlzLmFwcCkuZmluZChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSBzZWxlY3RlZFRhc2tQYXRoKVxuICAgIGlmICghdGFzaykge1xuICAgICAgdGhpcy5zZXRQb21vZG9yb1NlbGVjdGVkVGFza1BhdGgobnVsbClcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoJ0xhIHRhcmVhIHNlbGVjY2lvbmFkYSBwYXJhIFBvbW9kb3JvIHlhIG5vIGV4aXN0ZS4gU2UgcXVpdMOzIGxhIHNlbGVjY2nDs24uJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRldmlhdGlvbkhvdXJzID0gdGhpcy5yb3VuZFRvVHdvKGVsYXBzZWRTZWNvbmRzIC8gMzYwMClcbiAgICBpZiAoZGV2aWF0aW9uSG91cnMgPD0gMClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgbmV4dERldmlhdGlvbiA9IHRoaXMucm91bmRUb1R3byh0YXNrLmRlc3ZpbyArIGRldmlhdGlvbkhvdXJzKVxuICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IGRlc3ZpbzogbmV4dERldmlhdGlvbiB9KVxuICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYFNlIHN1bWFyb24gJHt0aGlzLmZvcm1hdERlY2ltYWwoZGV2aWF0aW9uSG91cnMpfSBoIGRlIGRlc3bDrW8gYSBcIiR7dGFzay50YXJlYX1cIi5gLCA1MDAwKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZW5kZXJQb21vZG9yb0RhaWx5TG9nKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1sb2ctc2VjdGlvbicgfSlcbiAgICBzZWN0aW9uLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ1JlZ2lzdHJvcyBkZWwgZGlhJyB9KVxuXG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IHJlYWRQb21vZG9yb0xvZ0VudHJpZXModGhpcy5hcHApXG4gICAgY29uc3QgdG9kYXlFbnRyaWVzID0gZ2V0RW50cmllc0J5RGF0ZShlbnRyaWVzLCB0b0xvY2FsRGF0ZVRleHQobmV3IERhdGUoKSkpXG5cbiAgICBpZiAodG9kYXlFbnRyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2VjdGlvbi5jcmVhdGVFbCgncCcsIHtcbiAgICAgICAgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWxvZy1lbXB0eScsXG4gICAgICAgIHRleHQ6ICd0b2RhdmlhIG5vIHNlIHJlZ2lzdHJhbiBwb21vZG9yb3MgZW4gZWwgZGlhJyxcbiAgICAgIH0pXG4gICAgICB0aGlzLnJlbmRlclBvbW9kb3JvSG91cmx5SGVhdG1hcChzZWN0aW9uLCB0b2RheUVudHJpZXMpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB3cmFwID0gc2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8tbG9nLXRhYmxlLXdyYXAnIH0pXG4gICAgY29uc3QgdGFibGUgPSB3cmFwLmNyZWF0ZUVsKCd0YWJsZScsIHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWxvZy10YWJsZScgfSlcbiAgICBjb25zdCBoZWFkID0gdGFibGUuY3JlYXRlRWwoJ3RoZWFkJylcbiAgICBjb25zdCBoZWFkUm93ID0gaGVhZC5jcmVhdGVFbCgndHInKVxuICAgIGZvciAoY29uc3QgdGl0bGUgb2YgWydIb3JhcmlvJywgJ1RpcG8gZGUgcG9tb2Rvcm8nLCAnRHVyYWNpw7NuIGVsZWdpZGEnLCAnVGFyZWEnLCAnVGllbXBvJywgJ0Rlc3ZpbycsICdGaW5hbGl6YWNpw7NuJ10pXG4gICAgICBoZWFkUm93LmNyZWF0ZUVsKCd0aCcsIHsgdGV4dDogdGl0bGUgfSlcblxuICAgIGNvbnN0IGJvZHkgPSB0YWJsZS5jcmVhdGVFbCgndGJvZHknKVxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdG9kYXlFbnRyaWVzKSB7XG4gICAgICBjb25zdCByb3cgPSBib2R5LmNyZWF0ZUVsKCd0cicpXG4gICAgICByb3cuY3JlYXRlRWwoJ3RkJywgeyB0ZXh0OiBlbnRyeS50aW1lIH0pXG4gICAgICByb3cuY3JlYXRlRWwoJ3RkJywgeyB0ZXh0OiBlbnRyeS50eXBlIH0pXG4gICAgICByb3cuY3JlYXRlRWwoJ3RkJywgeyB0ZXh0OiBlbnRyeS5kdXJhdGlvbkNob2ljZSB9KVxuICAgICAgcm93LmNyZWF0ZUVsKCd0ZCcsIHsgdGV4dDogZW50cnkudGFzayB9KVxuICAgICAgcm93LmNyZWF0ZUVsKCd0ZCcsIHsgdGV4dDogdGhpcy5mb3JtYXRQb21vZG9yb0R1cmF0aW9uTWludXRlcyhlbnRyeS5kdXJhdGlvbk1pbnV0ZXMpIH0pXG4gICAgICByb3cuY3JlYXRlRWwoJ3RkJywgeyB0ZXh0OiBgJHt0aGlzLmZvcm1hdERlY2ltYWwoZW50cnkuZGV2aWF0aW9uSG91cnMpfSBoYCB9KVxuICAgICAgcm93LmNyZWF0ZUVsKCd0ZCcsIHsgdGV4dDogZW50cnkuZmluYWxpemVkID8gJ3RydWUnIDogJ2ZhbHNlJyB9KVxuICAgIH1cblxuICAgIHRoaXMucmVuZGVyUG9tb2Rvcm9Ib3VybHlIZWF0bWFwKHNlY3Rpb24sIHRvZGF5RW50cmllcylcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUG9tb2Rvcm9Ib3VybHlIZWF0bWFwKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRvZGF5RW50cmllczogQXJyYXk8eyB0aW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZyB9Pikge1xuICAgIGNvbnN0IGhlYXRtYXBTZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1wb21vZG9yby1oZWF0bWFwJyB9KVxuICAgIGhlYXRtYXBTZWN0aW9uLmNyZWF0ZUVsKCdoNCcsIHsgdGV4dDogJ0hlYXRtYXAgaG9yYXJpbyAodHJhYmFqbyknIH0pXG5cbiAgICBjb25zdCB3b3JrRW50cmllcyA9IHRvZGF5RW50cmllcy5maWx0ZXIoZW50cnkgPT4gZW50cnkudHlwZSA9PT0gJ1RyYWJham8nKVxuICAgIGNvbnN0IGhvdXJseUNvdW50cyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDI0IH0sICgpID0+IDApXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB3b3JrRW50cmllcykge1xuICAgICAgY29uc3QgaG91ciA9IE51bWJlci5wYXJzZUludChlbnRyeS50aW1lLnNsaWNlKDAsIDIpLCAxMClcbiAgICAgIGlmIChOdW1iZXIuaXNOYU4oaG91cikgfHwgaG91ciA8IDAgfHwgaG91ciA+IDIzKVxuICAgICAgICBjb250aW51ZVxuICAgICAgaG91cmx5Q291bnRzW2hvdXJdICs9IDFcbiAgICB9XG5cbiAgICBjb25zdCBtYXhDb3VudCA9IE1hdGgubWF4KDEsIC4uLmhvdXJseUNvdW50cylcbiAgICBjb25zdCBncmlkID0gaGVhdG1hcFNlY3Rpb24uY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWhlYXRtYXAtZ3JpZCcgfSlcbiAgICBmb3IgKGxldCBob3VyID0gMDsgaG91ciA8IDI0OyBob3VyKyspIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gaG91cmx5Q291bnRzW2hvdXJdXG4gICAgICBjb25zdCBsZXZlbCA9IGNvdW50ID09PSAwXG4gICAgICAgID8gMFxuICAgICAgICA6IE1hdGgubWluKDQsIE1hdGguY2VpbCgoY291bnQgLyBtYXhDb3VudCkgKiA0KSlcbiAgICAgIGNvbnN0IGNlbGwgPSBncmlkLmNyZWF0ZURpdih7IGNsczogYHRhcmVhcy1wb21vZG9yby1oZWF0bWFwLWNlbGwgaXMtbGV2ZWwtJHtsZXZlbH1gIH0pXG4gICAgICBjZWxsLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICBjbHM6ICd0YXJlYXMtcG9tb2Rvcm8taGVhdG1hcC1ob3VyJyxcbiAgICAgICAgdGV4dDogU3RyaW5nKGhvdXIpLnBhZFN0YXJ0KDIsICcwJyksXG4gICAgICB9KVxuICAgICAgY2VsbC5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgICAgY2xzOiAndGFyZWFzLXBvbW9kb3JvLWhlYXRtYXAtY291bnQnLFxuICAgICAgICB0ZXh0OiBTdHJpbmcoY291bnQpLFxuICAgICAgfSlcbiAgICAgIGNlbGwuc2V0QXR0cigndGl0bGUnLCBgJHtTdHJpbmcoaG91cikucGFkU3RhcnQoMiwgJzAnKX06MDAgLSAke2NvdW50fSBwb21vZG9ybyhzKSBkZSB0cmFiYWpvYClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVQb21vZG9yb0R1cmF0aW9uQ2hvaWNlKGR1cmF0aW9uczogUG9tb2Rvcm9EdXJhdGlvbnMpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNhcmREYXRhID0gZ2V0UG9tb2Rvcm9QcmVzZXRDYXJkRGF0YShkdXJhdGlvbnMpXG4gICAgY29uc3Qgbm9ybWFsaXplZFRpdGxlID0gY2FyZERhdGEudGl0bGUucmVwbGFjZSgvXlteQS1aYS16MC05w4HDicONw5PDmsOhw6nDrcOzw7rDkcOxXSsvZywgJycpLnRyaW0oKVxuICAgIGNvbnN0IGJhc2VMYWJlbCA9IG5vcm1hbGl6ZWRUaXRsZS5zcGxpdCgnIC0gJylbMF0/LnRyaW0oKVxuICAgIHJldHVybiBiYXNlTGFiZWwgfHwgJ1BlcnNvbmFsaXphZG8nXG4gIH1cblxuICBwcml2YXRlIGZvcm1hdFBvbW9kb3JvRHVyYXRpb25NaW51dGVzKG1pbnV0ZXM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobWludXRlcykgfHwgbWludXRlcyA8PSAwKVxuICAgICAgcmV0dXJuICctJ1xuXG4gICAgY29uc3Qgcm91bmRlZCA9IE1hdGgucm91bmQobWludXRlcyAqIDEwMCkgLyAxMDBcbiAgICByZXR1cm4gYCR7dGhpcy5mb3JtYXREZWNpbWFsKHJvdW5kZWQpfSBtaW5gXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxvZ1BvbW9kb3JvUmVzZXRFbnRyeShzdGF0ZTogUG9tb2Rvcm9TdGF0ZSwgbm93TXM6IG51bWJlcikge1xuICAgIGNvbnN0IGVsYXBzZWRTZWNvbmRzID0gdGhpcy5yZXNvbHZlRWxhcHNlZFNlY29uZHNGb3JSZXNldChzdGF0ZSwgbm93TXMpXG4gICAgaWYgKGVsYXBzZWRTZWNvbmRzIDw9IDAgJiYgc3RhdGUucGhhc2VEZXZpYXRpb25TZWNvbmRzIDw9IDApXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IGR1cmF0aW9uQ2hvaWNlID0gdGhpcy5yZXNvbHZlUG9tb2Rvcm9EdXJhdGlvbkNob2ljZShzdGF0ZS5kdXJhdGlvbnMpXG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gc3RhdGUuc2VsZWN0ZWRUYXNrUGF0aFxuICAgICAgPyBnZXRUYXNrcyh0aGlzLmFwcCkuZmluZChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSBzdGF0ZS5zZWxlY3RlZFRhc2tQYXRoKVxuICAgICAgOiBudWxsXG4gICAgY29uc3QgdGFza05hbWUgPSBzZWxlY3RlZFRhc2s/LnRhcmVhIHx8ICdTaW4gdGFyZWEgdmluY3VsYWRhJ1xuICAgIGNvbnN0IGR1cmF0aW9uTWludXRlcyA9IHRoaXMucm91bmRUb1R3byhlbGFwc2VkU2Vjb25kcyAvIDYwKVxuICAgIGNvbnN0IGRldmlhdGlvblNlY29uZHMgPSBzdGF0ZS5waGFzZURldmlhdGlvblNlY29uZHMgKyAoc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUgPyBlbGFwc2VkU2Vjb25kcyA6IDApXG4gICAgY29uc3QgZGV2aWF0aW9uSG91cnMgPSB0aGlzLnJvdW5kVG9Ud28oZGV2aWF0aW9uU2Vjb25kcyAvIDM2MDApXG5cbiAgICBhd2FpdCBhcHBlbmRQb21vZG9yb0xvZ0VudHJ5KHRoaXMuYXBwLCB7XG4gICAgICB0aW1lc3RhbXBNczogbm93TXMsXG4gICAgICB0eXBlOiBnZXRQb21vZG9yb1BoYXNlTGFiZWwoc3RhdGUucGhhc2UpLFxuICAgICAgZHVyYXRpb25DaG9pY2UsXG4gICAgICB0YXNrOiB0YXNrTmFtZSxcbiAgICAgIGR1cmF0aW9uTWludXRlcyxcbiAgICAgIGRldmlhdGlvbkhvdXJzLFxuICAgICAgZmluYWxpemVkOiBmYWxzZSxcbiAgICB9KVxuXG4gICAgaWYgKHN0YXRlLmlzRGV2aWF0aW9uQWN0aXZlKVxuICAgICAgYXdhaXQgdGhpcy5hZGRQb21vZG9yb0RldmlhdGlvblRpbWVUb1NlbGVjdGVkVGFzayhlbGFwc2VkU2Vjb25kcywgc3RhdGUpXG4gICAgZWxzZSBpZiAoc3RhdGUucGhhc2UgPT09ICd3b3JrJylcbiAgICAgIGF3YWl0IHRoaXMuYWRkUG9tb2Rvcm9FbGFwc2VkV29ya1RpbWVUb1NlbGVjdGVkVGFzayhlbGFwc2VkU2Vjb25kcywgc3RhdGUpXG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVFbGFwc2VkU2Vjb25kc0ZvclJlc2V0KHN0YXRlOiBQb21vZG9yb1N0YXRlLCBub3dNczogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoc3RhdGUuaXNEZXZpYXRpb25BY3RpdmUpXG4gICAgICByZXR1cm4gZ2V0RGV2aWF0aW9uRWxhcHNlZFNlY29uZHMoc3RhdGUsIG5vd01zKVxuXG4gICAgY29uc3QgdG90YWxTZWNvbmRzID0gTWF0aC5tYXgoMCwgZ2V0UGhhc2VEdXJhdGlvblNlY29uZHMoc3RhdGUuZHVyYXRpb25zLCBzdGF0ZS5waGFzZSkpXG4gICAgY29uc3QgcmVtYWluaW5nU2Vjb25kcyA9IE1hdGgubWF4KDAsIGdldFBvbW9kb3JvUmVtYWluaW5nU2Vjb25kcyhzdGF0ZSwgbm93TXMpKVxuICAgIHJldHVybiBNYXRoLm1heCgwLCB0b3RhbFNlY29uZHMgLSByZW1haW5pbmdTZWNvbmRzKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBhZGRQb21vZG9yb0VsYXBzZWRXb3JrVGltZVRvU2VsZWN0ZWRUYXNrKGVsYXBzZWRTZWNvbmRzOiBudW1iZXIsIHN0YXRlOiBQb21vZG9yb1N0YXRlKSB7XG4gICAgaWYgKGVsYXBzZWRTZWNvbmRzIDw9IDApXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHNlbGVjdGVkVGFza1BhdGggPSBzdGF0ZS5zZWxlY3RlZFRhc2tQYXRoXG4gICAgaWYgKCFzZWxlY3RlZFRhc2tQYXRoKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCB0YXNrID0gZ2V0VGFza3ModGhpcy5hcHApLmZpbmQoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gc2VsZWN0ZWRUYXNrUGF0aClcbiAgICBpZiAoIXRhc2spIHtcbiAgICAgIHRoaXMuc2V0UG9tb2Rvcm9TZWxlY3RlZFRhc2tQYXRoKG51bGwpXG4gICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKCdMYSB0YXJlYSBzZWxlY2Npb25hZGEgcGFyYSBQb21vZG9ybyB5YSBubyBleGlzdGUuIFNlIHF1aXTDsyBsYSBzZWxlY2Npw7NuLicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB3b3JrZWRIb3VycyA9IHRoaXMucm91bmRUb1R3byhlbGFwc2VkU2Vjb25kcyAvIDM2MDApXG4gICAgaWYgKHdvcmtlZEhvdXJzIDw9IDApXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IG5leHREZWRpY2F0ZWQgPSB0aGlzLnJvdW5kVG9Ud28odGFzay5kZWRpY2FkbyArIHdvcmtlZEhvdXJzKVxuICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IGRlZGljYWRvOiBuZXh0RGVkaWNhdGVkIH0pXG4gICAgbmV3IG9ic2lkaWFuLk5vdGljZShgU2Ugc3VtYXJvbiAke3RoaXMuZm9ybWF0RGVjaW1hbCh3b3JrZWRIb3Vycyl9IGggYSBcIiR7dGFzay50YXJlYX1cIi5gLCA1MDAwKVxuICB9XG5cbiAgcHJpdmF0ZSBmbGFzaFBvbW9kb3JvUGFuZWwoKSB7XG4gICAgaWYgKCF0aGlzLnBvbW9kb3JvUGFuZWxFbClcbiAgICAgIHJldHVyblxuXG4gICAgdGhpcy5wb21vZG9yb1BhbmVsRWwuYWRkQ2xhc3MoJ3RhcmVhcy1wb21vZG9yby1wYW5lbC1mbGFzaCcpXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5wb21vZG9yb1BhbmVsRWw/LnJlbW92ZUNsYXNzKCd0YXJlYXMtcG9tb2Rvcm8tcGFuZWwtZmxhc2gnKVxuICAgIH0sIDkwMClcbiAgfVxuXG4gIHByaXZhdGUgcGxheVBvbW9kb3JvQmVlcCgpIHtcbiAgICBjb25zdCBhdWRpb0NvbnRleHQgPSB0aGlzLmVuc3VyZVBvbW9kb3JvQXVkaW9Db250ZXh0KClcbiAgICBpZiAoIWF1ZGlvQ29udGV4dClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3Qgc3RhcnRCZWVwID0gKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm93ID0gYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lXG4gICAgICAgIGNvbnN0IGZpcnN0ID0gYXVkaW9Db250ZXh0LmNyZWF0ZU9zY2lsbGF0b3IoKVxuICAgICAgICBjb25zdCBzZWNvbmQgPSBhdWRpb0NvbnRleHQuY3JlYXRlT3NjaWxsYXRvcigpXG4gICAgICAgIGNvbnN0IGdhaW4gPSBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpXG5cbiAgICAgICAgZmlyc3QudHlwZSA9ICdzaW5lJ1xuICAgICAgICBzZWNvbmQudHlwZSA9ICdzaW5lJ1xuICAgICAgICBmaXJzdC5mcmVxdWVuY3kudmFsdWUgPSA4ODBcbiAgICAgICAgc2Vjb25kLmZyZXF1ZW5jeS52YWx1ZSA9IDk4OFxuXG4gICAgICAgIGdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZSgwLjAwMDEsIG5vdylcbiAgICAgICAgZ2Fpbi5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wOSwgbm93ICsgMC4wMSlcbiAgICAgICAgZ2Fpbi5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wMDAxLCBub3cgKyAwLjE4KVxuICAgICAgICBnYWluLmdhaW4uc2V0VmFsdWVBdFRpbWUoMC4wMDAxLCBub3cgKyAwLjIwKVxuICAgICAgICBnYWluLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjA4LCBub3cgKyAwLjIyKVxuICAgICAgICBnYWluLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMDEsIG5vdyArIDAuMzgpXG5cbiAgICAgICAgZmlyc3QuY29ubmVjdChnYWluKVxuICAgICAgICBzZWNvbmQuY29ubmVjdChnYWluKVxuICAgICAgICBnYWluLmNvbm5lY3QoYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKVxuXG4gICAgICAgIGZpcnN0LnN0YXJ0KG5vdylcbiAgICAgICAgZmlyc3Quc3RvcChub3cgKyAwLjE4KVxuICAgICAgICBzZWNvbmQuc3RhcnQobm93ICsgMC4yMClcbiAgICAgICAgc2Vjb25kLnN0b3Aobm93ICsgMC4zOClcbiAgICAgIH1cbiAgICAgIGNhdGNoIHtcbiAgICAgICAgLy8gSWdub3JlIHBsYXliYWNrIGVycm9ycyBpbiBlbnZpcm9ubWVudHMgdGhhdCBibG9jayBhdXRvcGxheS5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXVkaW9Db250ZXh0LnN0YXRlID09PSAnc3VzcGVuZGVkJykge1xuICAgICAgdm9pZCBhdWRpb0NvbnRleHQucmVzdW1lKClcbiAgICAgICAgLnRoZW4oc3RhcnRCZWVwKVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIC8vIElnbm9yZSByZXN1bWUgZXJyb3JzLlxuICAgICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3RhcnRCZWVwKClcbiAgfVxuXG4gIHByaXZhdGUgZW5zdXJlUG9tb2Rvcm9BdWRpb0NvbnRleHQoKTogQXVkaW9Db250ZXh0IHwgbnVsbCB7XG4gICAgaWYgKHRoaXMucG9tb2Rvcm9BdWRpb0NvbnRleHQgJiYgdGhpcy5wb21vZG9yb0F1ZGlvQ29udGV4dC5zdGF0ZSAhPT0gJ2Nsb3NlZCcpXG4gICAgICByZXR1cm4gdGhpcy5wb21vZG9yb0F1ZGlvQ29udGV4dFxuXG4gICAgY29uc3QgQXVkaW9Db250ZXh0Q3RvciA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgKHdpbmRvdyBhcyB0eXBlb2Ygd2luZG93ICYgeyB3ZWJraXRBdWRpb0NvbnRleHQ/OiB0eXBlb2YgQXVkaW9Db250ZXh0IH0pLndlYmtpdEF1ZGlvQ29udGV4dFxuICAgIGlmICghQXVkaW9Db250ZXh0Q3RvcilcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5wb21vZG9yb0F1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHRDdG9yKClcbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgdGhpcy5wb21vZG9yb0F1ZGlvQ29udGV4dCA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wb21vZG9yb0F1ZGlvQ29udGV4dFxuICB9XG5cbiAgcHJpdmF0ZSB1bmxvY2tQb21vZG9yb0F1ZGlvKCkge1xuICAgIGNvbnN0IGF1ZGlvQ29udGV4dCA9IHRoaXMuZW5zdXJlUG9tb2Rvcm9BdWRpb0NvbnRleHQoKVxuICAgIGlmICghYXVkaW9Db250ZXh0IHx8IGF1ZGlvQ29udGV4dC5zdGF0ZSAhPT0gJ3N1c3BlbmRlZCcpXG4gICAgICByZXR1cm5cblxuICAgIHZvaWQgYXVkaW9Db250ZXh0LnJlc3VtZSgpLmNhdGNoKCgpID0+IHtcbiAgICAgIC8vIElnbm9yZSByZXN1bWUgZXJyb3JzLlxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIHJlc2V0UG9tb2Rvcm9Eb21SZWZzKCkge1xuICAgIHRoaXMucG9tb2Rvcm9QYW5lbEVsID0gbnVsbFxuICAgIHRoaXMucG9tb2Rvcm9UaW1lRWwgPSBudWxsXG4gICAgdGhpcy5wb21vZG9yb1Byb2dyZXNzRWwgPSBudWxsXG4gICAgdGhpcy5wb21vZG9yb1BoYXNlRWwgPSBudWxsXG4gICAgdGhpcy5wb21vZG9yb0N5Y2xlRWwgPSBudWxsXG4gICAgdGhpcy5wb21vZG9yb1N0YXRlRWwgPSBudWxsXG4gIH1cblxuICBwcml2YXRlIGVuc3VyZVZhbGlkQWN0aXZlVGFiKCkge1xuICAgIGNvbnN0IGJvYXJkTmFtZXMgPSB0aGlzLnBsdWdpbi50YWJsZXJvcy5tYXAoYm9hcmQgPT4gYm9hcmQubmFtZSlcbiAgICBjb25zdCBmaXhlZFRhYnMgPSBuZXcgU2V0KFtcbiAgICAgIFRhcmVhc1ZpZXcuQ09NUExFVEVEX1RBQl9JRCxcbiAgICAgIFRhcmVhc1ZpZXcuQ0FOQ0VMTEVEX1RBQl9JRCxcbiAgICAgIFRhcmVhc1ZpZXcuUE9NT0RPUk9fVEFCX0lELFxuICAgIF0pXG5cbiAgICBpZiAoZml4ZWRUYWJzLmhhcyh0aGlzLmFjdGl2ZVRhYikpXG4gICAgICByZXR1cm5cblxuICAgIGlmIChib2FyZE5hbWVzLmluY2x1ZGVzKHRoaXMuYWN0aXZlVGFiKSlcbiAgICAgIHJldHVyblxuXG4gICAgdGhpcy5hY3RpdmVUYWIgPSBib2FyZE5hbWVzWzBdIHx8ICdkZWZhdWx0J1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRHcm91cEV4cGFuc2lvbktleShncm91cE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuYWN0aXZlVGFifTo6JHtncm91cE5hbWV9YFxuICB9XG5cbiAgcHJpdmF0ZSBpc0FyY2hpdmVkVGFiKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZVRhYiA9PT0gVGFyZWFzVmlldy5DT01QTEVURURfVEFCX0lEIHx8IHRoaXMuYWN0aXZlVGFiID09PSBUYXJlYXNWaWV3LkNBTkNFTExFRF9UQUJfSURcbiAgfVxuXG4gIHByaXZhdGUgaXNQb21vZG9yb1RhYigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVUYWIgPT09IFRhcmVhc1ZpZXcuUE9NT0RPUk9fVEFCX0lEXG4gIH1cblxuICBwcml2YXRlIHJlbmRlckhlYWRlcihyb290OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGhlYWRlciA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWhlYWRlcicgfSlcblxuICAgIGNvbnN0IHRpdGxlV3JhcCA9IGhlYWRlci5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtdGl0bGUtd3JhcCcgfSlcbiAgICB0aXRsZVdyYXAuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICfimLAnLCBjbHM6ICd0YXJlYXMtaWNvbicgfSlcbiAgICB0aXRsZVdyYXAuY3JlYXRlRWwoJ2gxJywgeyB0ZXh0OiAnIFRhcmVhcycgfSlcblxuICAgIGNvbnN0IGFjdGlvbnMgPSBoZWFkZXIuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWhlYWRlci1hY3Rpb25zJyB9KVxuICAgIGFjdGlvbnMuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICfilqYgVGFibGVybycsIGNsczogJ3RhcmVhcy12aWV3LXRvZ2dsZScgfSlcblxuICAgIGNvbnN0IG5ld0J1dHRvbiA9IGFjdGlvbnMuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAndGFyZWFzLWJ0bi1uZXcnIH0pXG4gICAgbmV3QnV0dG9uLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnTnVldm8gdGFibGVybycgfSlcbiAgICBuZXdCdXR0b24ub25jbGljayA9ICgpID0+IG5ldyBOZXdCb2FyZE1vZGFsKHRoaXMuYXBwLCB0aGlzLnBsdWdpbiwgdGhpcykub3BlbigpXG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBhY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ3RhcmVhcy1idG4tZGVsZXRlLWJvYXJkJyB9KVxuICAgIGRlbGV0ZUJ1dHRvbi5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJ0VsaW1pbmFyIHRhYmxlcm8nIH0pXG4gICAgZGVsZXRlQnV0dG9uLmRpc2FibGVkID0gIXRoaXMucGx1Z2luLmNhblJlbW92ZVRhYmxlcm8odGhpcy5hY3RpdmVUYWIpXG4gICAgZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm9wZW5EZWxldGVCb2FyZENvbmZpcm0oKVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuRGVsZXRlQm9hcmRDb25maXJtKCkge1xuICAgIGlmICghdGhpcy5wbHVnaW4uY2FuUmVtb3ZlVGFibGVybyh0aGlzLmFjdGl2ZVRhYikpIHtcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYEVsIHRhYmxlcm8gXCIke3RoaXMuYWN0aXZlVGFifVwiIG5vIHNlIHB1ZWRlIGVsaW1pbmFyLmApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBib2FyZE5hbWUgPSB0aGlzLmFjdGl2ZVRhYlxuICAgIGNvbnN0IGJvYXJkVGFza3MgPSBnZXRUYXNrcyh0aGlzLmFwcCkuZmlsdGVyKHRhc2sgPT4gdGFzay50YWJsZXJvID09PSBib2FyZE5hbWUpXG4gICAgY29uc3QgdG9wTGV2ZWxDb3VudCA9IGJvYXJkVGFza3MuZmlsdGVyKHRhc2sgPT4gIXRhc2sucGFyZW50KS5sZW5ndGhcbiAgICBjb25zdCBzdWJ0YXNrQ291bnQgPSBib2FyZFRhc2tzLmxlbmd0aCAtIHRvcExldmVsQ291bnRcbiAgICBjb25zdCB0YXNrU3VtbWFyeSA9IHN1YnRhc2tDb3VudCA+IDBcbiAgICAgID8gYCR7dG9wTGV2ZWxDb3VudH0gdGFyZWEocykgeSAke3N1YnRhc2tDb3VudH0gc3VidGFyZWEocylgXG4gICAgICA6IGAke3RvcExldmVsQ291bnR9IHRhcmVhKHMpYFxuXG4gICAgbmV3IENvbmZpcm1EZWxldGVUYXNrTW9kYWwodGhpcy5hcHAsIHtcbiAgICAgIHRpdGxlOiAnRWxpbWluYXIgdGFibGVybycsXG4gICAgICBtZXNzYWdlOiBgwr9TZWd1cm8gcXVlIHF1ZXLDqXMgZWxpbWluYXIgZWwgdGFibGVybyBcIiR7Ym9hcmROYW1lfVwiPyBTZSBib3JyYXLDoW4gJHt0YXNrU3VtbWFyeX0sIHN1cyBhcmNoaXZvcyAubWQsIGdydXBvcyB5IGNhcnBldGFzIGFzb2NpYWRhcy5gLFxuICAgICAgY29uZmlybVRleHQ6ICdBY2VwdGFyJyxcbiAgICAgIG9uQ29uZmlybTogYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZW1vdmVkID0gYXdhaXQgdGhpcy5wbHVnaW4ucmVtb3ZlVGFibGVybyhib2FyZE5hbWUpXG4gICAgICAgIGlmICghcmVtb3ZlZCkge1xuICAgICAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYE5vIHNlIHB1ZG8gZWxpbWluYXIgZWwgdGFibGVybyBcIiR7Ym9hcmROYW1lfVwiLmApXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGl2ZVRhYiA9IHRoaXMucGx1Z2luLnRhYmxlcm9zWzBdPy5uYW1lIHx8IERFRkFVTFRfQk9BUkRfTkFNRVxuICAgICAgICBhd2FpdCB0aGlzLnJlbmRlcigpXG4gICAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoYFRhYmxlcm8gXCIke2JvYXJkTmFtZX1cIiBlbGltaW5hZG8uYClcbiAgICAgIH0sXG4gICAgfSkub3BlbigpXG4gIH1cblxuICBwcml2YXRlIHJlbmRlckdyb3VwKFxuICAgIHJvb3Q6IEhUTUxFbGVtZW50LFxuICAgIGdyb3VwOiBFcXVpcG8sXG4gICAgdGFza3M6IFRhc2tJdGVtW10sXG4gICAgYWxsVGFza3M6IFRhc2tJdGVtW10sXG4gICAgdGFza1ByZXZpZXdNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4sXG4gICkge1xuICAgIGNvbnN0IGdyb3VwTmFtZSA9IGdyb3VwLm5hbWVcbiAgICBjb25zdCBleHBhbnNpb25LZXkgPSB0aGlzLmdldEdyb3VwRXhwYW5zaW9uS2V5KGdyb3VwTmFtZSlcbiAgICBjb25zdCBpc01hbmFnZWQgPSB0aGlzLnBsdWdpbi5nZXRFcXVpcG9zRm9yVGFibGVybyh0aGlzLmFjdGl2ZVRhYikuc29tZShpdGVtID0+IGl0ZW0ubmFtZSA9PT0gZ3JvdXBOYW1lKVxuICAgIGNvbnN0IGV4cGFuZGVkID0gdGhpcy5leHBhbmRlZEdyb3Vwcy5oYXMoZXhwYW5zaW9uS2V5KVxuXG4gICAgY29uc3QgY29sdW1uID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtZ3JvdXAnIH0pXG4gICAgY29sdW1uLmRhdGFzZXQuZ3JvdXAgPSBncm91cE5hbWVcbiAgICBjb25zdCBoZWFkZXIgPSBjb2x1bW4uY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWdyb3VwLWhlYWRlcicgfSlcbiAgICBsZXQgZHJhZ0hhbmRsZTogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbFxuXG4gICAgaWYgKGlzTWFuYWdlZCkge1xuICAgICAgZHJhZ0hhbmRsZSA9IGhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJ+KYsCcsIGNsczogJ3RhcmVhcy1ncm91cC1kcmFnLWhhbmRsZScgfSlcbiAgICAgIGRyYWdIYW5kbGUuc2V0QXR0cignYXJpYS1sYWJlbCcsIGBNb3ZlciBncnVwbyAke2dyb3VwTmFtZX1gKVxuICAgICAgZHJhZ0hhbmRsZS5zZXRBdHRyKCd0aXRsZScsICdBcnJhc3RyYXIgcGFyYSBtb3ZlciBncnVwbycpXG4gICAgICBkcmFnSGFuZGxlLmRyYWdnYWJsZSA9IHRydWVcbiAgICB9XG5cbiAgICBoZWFkZXIuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IGV4cGFuZGVkID8gJ+KWvCAnIDogJ+KWtiAnLCBjbHM6ICd0YXJlYXMtdG9nZ2xlJyB9KVxuICAgIGNvbnN0IGJhZGdlID0gaGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBncm91cE5hbWUsIGNsczogJ3RhcmVhcy1iYWRnZScgfSlcbiAgICBiYWRnZS5zdHlsZS5iYWNrZ3JvdW5kID0gZ3JvdXAuY29sb3JcbiAgICBoZWFkZXIuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IGAgICR7dGFza3MubGVuZ3RofWAsIGNsczogJ3RhcmVhcy1jb3VudCcgfSlcblxuICAgIGlmIChpc01hbmFnZWQpIHtcbiAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBoZWFkZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ+KcjicsIGNsczogJ3RhcmVhcy1ncm91cC1lZGl0LWJ0bicgfSlcbiAgICAgIGVkaXRCdXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBuZXcgRWRpdFNlY3Rpb25Nb2RhbCh0aGlzLmFwcCwgdGhpcy5wbHVnaW4sIGdyb3VwLCB0aGlzLCB0aGlzLmFjdGl2ZVRhYikub3BlbigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hdHRhY2hHcm91cERyYWdIYW5kbGVycyhyb290LCBjb2x1bW4sIGRyYWdIYW5kbGUsIGdyb3VwTmFtZSwgaXNNYW5hZ2VkKVxuXG4gICAgaGVhZGVyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoZXhwYW5kZWQpXG4gICAgICAgIHRoaXMuZXhwYW5kZWRHcm91cHMuZGVsZXRlKGV4cGFuc2lvbktleSlcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5leHBhbmRlZEdyb3Vwcy5hZGQoZXhwYW5zaW9uS2V5KVxuXG4gICAgICB0aGlzLnJlbmRlcigpXG4gICAgfVxuXG4gICAgaWYgKCFleHBhbmRlZClcbiAgICAgIHJldHVyblxuXG4gICAgdGFza3Muc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpXG4gICAgY29uc3QgY2FyZHMgPSBjb2x1bW4uY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWNhcmQtbGlzdCcgfSlcbiAgICBjYXJkcy5kYXRhc2V0Lmdyb3VwID0gZ3JvdXBOYW1lXG4gICAgY2FyZHMuZGF0YXNldC5ib2FyZCA9IHRoaXMuYWN0aXZlVGFiXG4gICAgY2FyZHMuZGF0YXNldC5oYXNUYXNrcyA9IHRhc2tzLmxlbmd0aCA+IDAgPyAndHJ1ZScgOiAnZmFsc2UnXG4gICAgdGhpcy5hdHRhY2hHcm91cENhcmRMaXN0RHJvcEhhbmRsZXJzKGNhcmRzLCBncm91cE5hbWUsIGFsbFRhc2tzKVxuICAgIGZvciAoY29uc3QgdGFzayBvZiB0YXNrcylcbiAgICAgIHRoaXMucmVuZGVyVGFza0NhcmQoY2FyZHMsIHRhc2ssIGFsbFRhc2tzLCB0YXNrUHJldmlld01hcC5nZXQodGFzay5maWxlLnBhdGgpIHx8ICcnKVxuXG4gICAgY29uc3QgYWRkQ2FyZCA9IGNhcmRzLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy10YXNrLWNhcmQgdGFyZWFzLXRhc2stY2FyZC1hZGQnIH0pXG4gICAgY29uc3QgbGluayA9IGFkZENhcmQuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICcrIE51ZXZhIHRhcmVhJywgY2xzOiAndGFyZWFzLWFkZC1saW5rJyB9KVxuICAgIGxpbmsub25jbGljayA9ICgpID0+IG5ldyBOZXdUYXNrTW9kYWwodGhpcy5hcHAsIHRoaXMucGx1Z2luLCB0aGlzLmFjdGl2ZVRhYiwgJycsIGdyb3VwTmFtZSkub3BlbigpXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclRhc2tDYXJkKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtLCBhbGxUYXNrczogVGFza0l0ZW1bXSwgdGFza1ByZXZpZXc6IHN0cmluZykge1xuICAgIGNvbnN0IHN1YnRhc2tzID0gYWxsVGFza3NcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLnBhcmVudCA9PT0gdGFzay5maWxlLmJhc2VuYW1lKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKVxuICAgIGNvbnN0IGhhc1N1YnRhc2tzID0gc3VidGFza3MubGVuZ3RoID4gMFxuICAgIGNvbnN0IHN1YnRhc2tzRXhwYW5kZWQgPSB0aGlzLmV4cGFuZGVkQ2FyZFN1YnRhc2tzLmhhcyh0YXNrLmZpbGUucGF0aClcblxuICAgIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXRhc2stY2FyZCcgfSlcbiAgICBjYXJkLmRhdGFzZXQucGF0aCA9IHRhc2suZmlsZS5wYXRoXG4gICAgaWYgKHRoaXMuZHJvcHBlZFRhc2tBbmltYXRpb25QYXRoID09PSB0YXNrLmZpbGUucGF0aCkge1xuICAgICAgY2FyZC5hZGRDbGFzcygndGFyZWFzLXRhc2stY2FyZC1kcm9wLWFuaW1hdGUnKVxuICAgICAgdGhpcy5kcm9wcGVkVGFza0FuaW1hdGlvblBhdGggPSBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5hdHRhY2hDYXJkRHJhZ0hhbmRsZXJzKGNvbnRhaW5lciwgY2FyZCwgdGFzaywgYWxsVGFza3MpXG4gICAgdGhpcy5hdHRhY2hDYXJkRWRpdEhhbmRsZXJzKGNhcmQsIHRhc2spXG5cbiAgICBjb25zdCBzdGF0dXNCYW5kQ2xhc3MgPSB0aGlzLmdldFN0YXR1c0NsYXNzTmFtZSh0YXNrLmVzdGFkbylcbiAgICBjb25zdCBzdGF0dXNCYW5kID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IGB0YXJlYXMtY2FyZC1zaWRlLWJhbmQgdGFyZWFzLWNhcmQtc3RhdHVzLWJhbmQgdGFyZWFzLWNhcmQtc3RhdHVzLWJhbmQtJHtzdGF0dXNCYW5kQ2xhc3N9YCB9KVxuICAgIHRoaXMucmVuZGVyU3RhdHVzQmFuZChzdGF0dXNCYW5kLCB0YXNrKVxuXG4gICAgY29uc3QgcHJpb3JpdHlCYW5kQ2xhc3MgPSB0aGlzLmdldFByaW9yaXR5Q2xhc3NOYW1lKHRhc2sucHJpb3JpZGFkKVxuICAgIGNvbnN0IHByaW9yaXR5QmFuZCA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBgdGFyZWFzLWNhcmQtc2lkZS1iYW5kIHRhcmVhcy1jYXJkLXByaW9yaXR5LWJhbmQgdGFyZWFzLWNhcmQtcHJpb3JpdHktYmFuZC0ke3ByaW9yaXR5QmFuZENsYXNzfWAgfSlcbiAgICB0aGlzLnJlbmRlclByaW9yaXR5QmFuZChwcmlvcml0eUJhbmQsIHRhc2spXG5cbiAgICBjb25zdCBhY3Rpb25zID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtY2FyZC1hY3Rpb25zIHRhcmVhcy1jYXJkLWFjdGlvbnMtYmFuZCcgfSlcbiAgICB0aGlzLnJlbmRlclN0YXR1c0FjdGlvbnMoYWN0aW9ucywgdGFzaylcbiAgICB0aGlzLnN5bmNDYXJkU2lkZUJhbmRzVG9wT2Zmc2V0KGNhcmQsIGFjdGlvbnMpXG5cbiAgICBjb25zdCB0aXRsZVJvdyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWNhcmQtdGl0bGUtcm93JyB9KVxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVSb3cuY3JlYXRlRWwoJ2EnLCB7IHRleHQ6IHRhc2sudGFyZWEsIGNsczogJ3RhcmVhcy10YXNrLWNhcmQtdGl0bGUnIH0pXG4gICAgdGl0bGUuc2V0QXR0cigndGl0bGUnLCB0YXNrLnRhcmVhKVxuICAgIHRpdGxlLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KHRhc2suZmlsZS5wYXRoLCAnJywgdHJ1ZSlcblxuICAgIGNvbnN0IGNvbW1lbnRCdXR0b24gPSB0aXRsZVJvdy5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICd0YXJlYXMtY2FyZC1jb21tZW50LWJ0bicgfSlcbiAgICBjb21tZW50QnV0dG9uLnNldEF0dHIoJ2FyaWEtbGFiZWwnLCAnQWdyZWdhciBjb21lbnRhcmlvJylcbiAgICBjb21tZW50QnV0dG9uLnNldEF0dHIoJ3RpdGxlJywgJ0FncmVnYXIgY29tZW50YXJpbycpXG4gICAgb2JzaWRpYW4uc2V0SWNvbihjb21tZW50QnV0dG9uLCAnc2Nyb2xsLXRleHQnKVxuICAgIGNvbW1lbnRCdXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIG5ldyBBZGRUYXNrQ29tbWVudE1vZGFsKHRoaXMuYXBwLCB0YXNrKS5vcGVuKClcbiAgICB9XG5cbiAgICBpZiAodGFza1ByZXZpZXcpXG4gICAgICBjYXJkLmNyZWF0ZUVsKCdwJywgeyB0ZXh0OiB0YXNrUHJldmlldywgY2xzOiAndGFyZWFzLWNhcmQtcHJldmlldycgfSlcblxuICAgIGNvbnN0IGZvb3RlciA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWNhcmQtZm9vdGVyJyB9KVxuICAgIGlmIChoYXNTdWJ0YXNrcykge1xuICAgICAgY29uc3Qgc3VidGFza3NUb2dnbGUgPSBmb290ZXIuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgIHRleHQ6IGAke3N1YnRhc2tzRXhwYW5kZWQgPyAn4pa8JyA6ICfilrYnfSAke3N1YnRhc2tzLmxlbmd0aH0gc3VidGFyZWEocylgLFxuICAgICAgICBjbHM6IGB0YXJlYXMtY2FyZC1zdWJ0YXNrcyB0YXJlYXMtY2FyZC1zdWJ0YXNrcy10b2dnbGUke3N1YnRhc2tzRXhwYW5kZWQgPyAnIGlzLWV4cGFuZGVkJyA6ICcnfWAsXG4gICAgICB9KVxuXG4gICAgICBzdWJ0YXNrc1RvZ2dsZS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGlmIChzdWJ0YXNrc0V4cGFuZGVkKVxuICAgICAgICAgIHRoaXMuZXhwYW5kZWRDYXJkU3VidGFza3MuZGVsZXRlKHRhc2suZmlsZS5wYXRoKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy5leHBhbmRlZENhcmRTdWJ0YXNrcy5hZGQodGFzay5maWxlLnBhdGgpXG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFN1YnRhc2sgPSBmb290ZXIuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICcrIFN1YnRhcmVhJywgY2xzOiAndGFyZWFzLWFkZC1saW5rJyB9KVxuICAgIGFkZFN1YnRhc2sub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIG5ldyBOZXdUYXNrTW9kYWwodGhpcy5hcHAsIHRoaXMucGx1Z2luLCB0YXNrLnRhYmxlcm8sIHRhc2suZmlsZS5iYXNlbmFtZSwgdGFzay5lcXVpcG8pLm9wZW4oKVxuICAgIH1cblxuICAgIGlmIChoYXNTdWJ0YXNrcyAmJiBzdWJ0YXNrc0V4cGFuZGVkKVxuICAgICAgdGhpcy5yZW5kZXJDYXJkU3VidGFza0xpc3QoY2FyZCwgc3VidGFza3MpXG5cbiAgICB0aGlzLnJlbmRlckNhcmRQcm9ncmVzc0JhbmQoY2FyZCwgdGFzaylcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2FyZEVkaXRIYW5kbGVycyhjYXJkOiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIShldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2EsIGJ1dHRvbiwgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QnKSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBuZXcgRWRpdFRhc2tGaWxlTW9kYWwodGhpcy5hcHAsIHRhc2spLm9wZW4oKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIHN5bmNDYXJkU2lkZUJhbmRzVG9wT2Zmc2V0KGNhcmQ6IEhUTUxFbGVtZW50LCBhY3Rpb25zQmFuZDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBhcHBseU9mZnNldCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG1lYXN1cmVkSGVpZ2h0ID0gTWF0aC5jZWlsKGFjdGlvbnNCYW5kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodClcbiAgICAgIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdGFyZWFzLWNhcmQtYWN0aW9ucy1iYW5kLWhlaWdodCcsIGAke21lYXN1cmVkSGVpZ2h0fXB4YClcbiAgICB9XG5cbiAgICBhcHBseU9mZnNldCgpXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhcHBseU9mZnNldClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgYnVpbGRUYXNrUHJldmlld01hcCh0YXNrczogVGFza0l0ZW1bXSk6IFByb21pc2U8TWFwPHN0cmluZywgc3RyaW5nPj4ge1xuICAgIGNvbnN0IHByZXZpZXdNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpXG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbCh0YXNrcy5tYXAoYXN5bmMgKHRhc2spID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQuY2FjaGVkUmVhZCh0YXNrLmZpbGUpXG4gICAgICAgIHByZXZpZXdNYXAuc2V0KHRhc2suZmlsZS5wYXRoLCBleHRyYWN0VGFza0JvZHlQcmV2aWV3KGZpbGVDb250ZW50KSlcbiAgICAgIH1cbiAgICAgIGNhdGNoIHtcbiAgICAgICAgcHJldmlld01hcC5zZXQodGFzay5maWxlLnBhdGgsICcnKVxuICAgICAgfVxuICAgIH0pKVxuXG4gICAgcmV0dXJuIHByZXZpZXdNYXBcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUm93KHRib2R5OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0sIGFsbFRhc2tzOiBUYXNrSXRlbVtdLCBkZXB0aDogbnVtYmVyKSB7XG4gICAgY29uc3Qgc3VidGFza3MgPSBhbGxUYXNrc1xuICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0ucGFyZW50ID09PSB0YXNrLmZpbGUuYmFzZW5hbWUpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpXG5cbiAgICBjb25zdCBoYXNTdWJ0YXNrcyA9IHN1YnRhc2tzLmxlbmd0aCA+IDBcbiAgICBjb25zdCBleHBhbmRlZCA9IHRoaXMuZXhwYW5kZWRUYXNrcy5oYXModGFzay5maWxlLnBhdGgpXG5cbiAgICBjb25zdCByb3cgPSB0Ym9keS5jcmVhdGVFbCgndHInLCB7IGNsczogJ3RhcmVhcy1yb3cnIH0pXG4gICAgcm93LmRhdGFzZXQucGF0aCA9IHRhc2suZmlsZS5wYXRoXG4gICAgcm93LmRhdGFzZXQuZGVwdGggPSBTdHJpbmcoZGVwdGgpXG5cbiAgICB0aGlzLnJlbmRlckRyYWdDZWxsKHJvdywgdGJvZHksIHRhc2ssIGFsbFRhc2tzLCBkZXB0aClcbiAgICB0aGlzLnJlbmRlclRvZ2dsZUNlbGwocm93LCB0YXNrLCBoYXNTdWJ0YXNrcywgZXhwYW5kZWQsIGRlcHRoKVxuICAgIHRoaXMucmVuZGVyVGFza05hbWVDZWxsKHJvdywgdGFzaywgZGVwdGgpXG4gICAgdGhpcy5yZW5kZXJTdGF0dXNDZWxsKHJvdywgdGFzaylcbiAgICB0aGlzLnJlbmRlclRlYW1DZWxsKHJvdywgdGFzaywgZGVwdGgpXG4gICAgdGhpcy5yZW5kZXJQcmlvcml0eUNlbGwocm93LCB0YXNrKVxuICAgIHRoaXMucmVuZGVyRGVkaWNhdGVkQ2VsbChyb3csIHRhc2spXG4gICAgdGhpcy5yZW5kZXJFc3RpbWF0ZWRDZWxsKHJvdywgdGFzaylcbiAgICB0aGlzLnJlbmRlclN0YXJ0RGF0ZUNlbGwocm93LCB0YXNrKVxuICAgIHRoaXMucmVuZGVyRW5kRGF0ZUNlbGwocm93LCB0YXNrKVxuICAgIHRoaXMucmVuZGVyUGVyY2VudENlbGwocm93LCB0YXNrKVxuICAgIHRoaXMucmVuZGVyU3RhdHVzQWN0aW9uc0NlbGwocm93LCB0YXNrKVxuXG4gICAgaWYgKCFleHBhbmRlZClcbiAgICAgIHJldHVyblxuXG4gICAgZm9yIChjb25zdCBzdWJ0YXNrIG9mIHN1YnRhc2tzKVxuICAgICAgdGhpcy5yZW5kZXJSb3codGJvZHksIHN1YnRhc2ssIGFsbFRhc2tzLCBkZXB0aCArIDEpXG5cbiAgICBpZiAoIXRoaXMuaXNBcmNoaXZlZFRhYigpICYmICF0aGlzLmlzUG9tb2Rvcm9UYWIoKSkge1xuICAgICAgY29uc3QgYWRkU3ViUm93ID0gdGJvZHkuY3JlYXRlRWwoJ3RyJywgeyBjbHM6ICd0YXJlYXMtYWRkLXJvdycgfSlcbiAgICAgIGFkZFN1YlJvdy5jcmVhdGVFbCgndGQnKVxuICAgICAgYWRkU3ViUm93LmNyZWF0ZUVsKCd0ZCcpXG5cbiAgICAgIGNvbnN0IGFkZFN1YkNlbGwgPSBhZGRTdWJSb3cuY3JlYXRlRWwoJ3RkJywgeyBhdHRyOiB7IGNvbHNwYW46ICcxMCcgfSB9KVxuICAgICAgYWRkU3ViQ2VsbC5zdHlsZS5wYWRkaW5nTGVmdCA9IGAkeyhkZXB0aCArIDEpICogMjQgKyA4fXB4YFxuXG4gICAgICBjb25zdCBhZGRTdWJ0YXNrID0gYWRkU3ViQ2VsbC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJysgU3VidGFyZWEnLCBjbHM6ICd0YXJlYXMtYWRkLWxpbmsnIH0pXG4gICAgICBhZGRTdWJ0YXNrLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgbmV3IE5ld1Rhc2tNb2RhbCh0aGlzLmFwcCwgdGhpcy5wbHVnaW4sIHRhc2sudGFibGVybywgdGFzay5maWxlLmJhc2VuYW1lLCB0YXNrLmVxdWlwbykub3BlbigpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJEcmFnQ2VsbChyb3c6IEhUTUxFbGVtZW50LCB0Ym9keTogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtLCBhbGxUYXNrczogVGFza0l0ZW1bXSwgZGVwdGg6IG51bWJlcikge1xuICAgIGNvbnN0IGRyYWdDZWxsID0gcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtZHJhZycgfSlcbiAgICBkcmFnQ2VsbC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJ+KggeKggeKggScsIGNsczogJ3RhcmVhcy1kcmFnLWhhbmRsZScgfSlcblxuICAgIHJvdy5kcmFnZ2FibGUgPSB0cnVlXG5cbiAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBkYXRhVHJhbnNmZXIgPSBldmVudC5kYXRhVHJhbnNmZXJcbiAgICAgIGlmICghZGF0YVRyYW5zZmVyKVxuICAgICAgICByZXR1cm5cblxuICAgICAgdGhpcy5kcmFnUGF0aCA9IHRhc2suZmlsZS5wYXRoXG4gICAgICB0aGlzLmRyYWdEZXB0aCA9IGRlcHRoXG4gICAgICB0aGlzLmRyYWdQYXJlbnQgPSB0YXNrLnBhcmVudFxuICAgICAgcm93LmFkZENsYXNzKCd0YXJlYXMtcm93LWRyYWdnaW5nJylcbiAgICAgIGRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH0pXG5cbiAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHtcbiAgICAgIHRoaXMucmVzZXRSb3dEcmFnU3RhdGUodGJvZHksIHJvdylcbiAgICB9KVxuXG4gICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY2FuRHJvcE9uUm93KHRhc2ssIGRlcHRoKSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyKVxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJ1xuXG4gICAgICB0Ym9keS5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZWFzLXJvdy1kcmFnLW92ZXInKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd0YXJlYXMtcm93LWRyYWctb3ZlcicpKVxuICAgICAgcm93LmFkZENsYXNzKCd0YXJlYXMtcm93LWRyYWctb3ZlcicpXG4gICAgfSlcblxuICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoKSA9PiB7XG4gICAgICByb3cucmVtb3ZlQ2xhc3MoJ3RhcmVhcy1yb3ctZHJhZy1vdmVyJylcbiAgICB9KVxuXG4gICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghdGhpcy5jYW5Ecm9wT25Sb3codGFzaywgZGVwdGgpKVxuICAgICAgICByZXR1cm5cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHJvdy5yZW1vdmVDbGFzcygndGFyZWFzLXJvdy1kcmFnLW92ZXInKVxuXG4gICAgICBpZiAoIXRoaXMuZHJhZ1BhdGgpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBpZiAoZGVwdGggPT09IDApXG4gICAgICAgIGF3YWl0IHRoaXMucmVvcmRlclRhc2sodGhpcy5kcmFnUGF0aCwgdGFzay5maWxlLnBhdGgsIGFsbFRhc2tzKVxuICAgICAgZWxzZVxuICAgICAgICBhd2FpdCB0aGlzLnJlb3JkZXJTdWJ0YXNrKHRoaXMuZHJhZ1BhdGgsIHRhc2suZmlsZS5wYXRoLCBhbGxUYXNrcylcblxuICAgICAgdGhpcy5yZXNldFJvd0RyYWdTdGF0ZSh0Ym9keSwgcm93KVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclRvZ2dsZUNlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0sIGhhc1N1YnRhc2tzOiBib29sZWFuLCBleHBhbmRlZDogYm9vbGVhbiwgZGVwdGg6IG51bWJlcikge1xuICAgIGNvbnN0IHRvZ2dsZUNlbGwgPSByb3cuY3JlYXRlRWwoJ3RkJywgeyBjbHM6ICd0YXJlYXMtY2VsbC10b2dnbGUnIH0pXG5cbiAgICBpZiAoZGVwdGggIT09IDApXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IHRvZ2dsZSA9IHRvZ2dsZUNlbGwuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICB0ZXh0OiBleHBhbmRlZCA/ICfilrwnIDogJ+KWticsXG4gICAgICBjbHM6IGB0YXJlYXMtc3VidGFzay10b2dnbGUke2hhc1N1YnRhc2tzID8gJycgOiAnIHRhcmVhcy10b2dnbGUtZW1wdHknfWAsXG4gICAgfSlcblxuICAgIHRvZ2dsZS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICBpZiAoZXhwYW5kZWQpXG4gICAgICAgIHRoaXMuZXhwYW5kZWRUYXNrcy5kZWxldGUodGFzay5maWxlLnBhdGgpXG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuZXhwYW5kZWRUYXNrcy5hZGQodGFzay5maWxlLnBhdGgpXG5cbiAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclRhc2tOYW1lQ2VsbChyb3c6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSwgZGVwdGg6IG51bWJlcikge1xuICAgIGNvbnN0IGNlbGwgPSByb3cuY3JlYXRlRWwoJ3RkJywgeyBjbHM6ICd0YXJlYXMtY2VsbC1uYW1lJyB9KVxuICAgIGNlbGwuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHtkZXB0aCAqIDI0ICsgOH1weGBcblxuICAgIGNvbnN0IHRpdGxlV3JhcCA9IGNlbGwuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLXRhc2stdGl0bGUtd3JhcCcgfSlcblxuICAgIGlmIChkZXB0aCA+IDApXG4gICAgICB0aXRsZVdyYXAuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICfilJQgJywgY2xzOiAndGFyZWFzLXN1YnRhc2staW5kZW50JyB9KVxuXG4gICAgY29uc3QgbGluayA9IHRpdGxlV3JhcC5jcmVhdGVFbCgnYScsIHsgdGV4dDogdGFzay50YXJlYSwgY2xzOiAndGFyZWFzLXRhc2stbGluaycgfSlcbiAgICBsaW5rLnNldEF0dHIoJ3RpdGxlJywgdGFzay50YXJlYSlcbiAgICBsaW5rLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KHRhc2suZmlsZS5wYXRoLCAnJywgdHJ1ZSlcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU3RhdHVzQ2VsbChyb3c6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnN0IGNlbGwgPSByb3cuY3JlYXRlRWwoJ3RkJywgeyBjbHM6ICd0YXJlYXMtY2VsbC1lc3RhZG8nIH0pXG4gICAgdGhpcy5yZW5kZXJTdGF0dXNCYWRnZShjZWxsLCB0YXNrKVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJTdGF0dXNCYWRnZShjb250YWluZXI6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnN0IHN0YXR1c0NsYXNzID0gdGhpcy5nZXRTdGF0dXNDbGFzc05hbWUodGFzay5lc3RhZG8pXG4gICAgY29uc3QgYmFkZ2UgPSBjb250YWluZXIuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICB0ZXh0OiB0YXNrLmVzdGFkbyxcbiAgICAgIGNsczogYHRhcmVhcy1lc3RhZG8gdGFyZWFzLWVzdGFkby0ke3N0YXR1c0NsYXNzfWAsXG4gICAgfSlcblxuICAgIGJhZGdlLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBzaG93RHJvcGRvd24oYmFkZ2UsIEVTVEFET1MsIHRhc2suZXN0YWRvLCBhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHBseVN0YXRlVHJhbnNpdGlvbih0YXNrLCB2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJTdGF0dXNCYW5kKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29udGFpbmVyLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiB0YXNrLmVzdGFkbywgY2xzOiAndGFyZWFzLWNhcmQtc2lkZS1iYW5kLXRleHQnIH0pXG4gICAgY29udGFpbmVyLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBzaG93RHJvcGRvd24oY29udGFpbmVyLCBFU1RBRE9TLCB0YXNrLmVzdGFkbywgYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwbHlTdGF0ZVRyYW5zaXRpb24odGFzaywgdmFsdWUpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUHJpb3JpdHlCYW5kKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29udGFpbmVyLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiB0YXNrLnByaW9yaWRhZCwgY2xzOiAndGFyZWFzLWNhcmQtc2lkZS1iYW5kLXRleHQnIH0pXG4gICAgY29udGFpbmVyLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBzaG93RHJvcGRvd24oY29udGFpbmVyLCBQUklPUklEQURFUywgdGFzay5wcmlvcmlkYWQsIGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBwcmlvcmlkYWQ6IHZhbHVlIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQ2FyZFN1YnRhc2tMaXN0KGNhcmQ6IEhUTUxFbGVtZW50LCBzdWJ0YXNrczogVGFza0l0ZW1bXSkge1xuICAgIGNvbnN0IGxpc3QgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLXN1YnRhc2stbGlzdCcgfSlcblxuICAgIGZvciAoY29uc3Qgc3VidGFzayBvZiBzdWJ0YXNrcykge1xuICAgICAgY29uc3Qgcm93ID0gbGlzdC5jcmVhdGVEaXYoeyBjbHM6ICd0YXJlYXMtY2FyZC1zdWJ0YXNrLXJvdycgfSlcbiAgICAgIGNvbnN0IGNoZWNrZWQgPSBzdWJ0YXNrLmVzdGFkbyA9PT0gJ0ZpbmFsaXphZGEnXG5cbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gcm93LmNyZWF0ZUVsKCdpbnB1dCcsIHtcbiAgICAgICAgY2xzOiAndGFyZWFzLWNhcmQtc3VidGFzay1jaGVjaycsXG4gICAgICAgIGF0dHI6IHsgdHlwZTogJ2NoZWNrYm94JyB9LFxuICAgICAgfSlcbiAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBjaGVja2VkXG5cbiAgICAgIGNoZWNrYm94Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIH1cblxuICAgICAgY2hlY2tib3gub25jaGFuZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc3QgbmV4dFN0YXR1cyA9IGNoZWNrYm94LmNoZWNrZWQgPyAnRmluYWxpemFkYScgOiAnUGVuZGllbnRlJ1xuICAgICAgICBpZiAoc3VidGFzay5lc3RhZG8gPT09IG5leHRTdGF0dXMpXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgYXdhaXQgdGhpcy5hcHBseVN0YXRlVHJhbnNpdGlvbihzdWJ0YXNrLCBuZXh0U3RhdHVzLCB1bmRlZmluZWQsIHsgbW92ZUZpbGU6IGZhbHNlIH0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRpdGxlID0gcm93LmNyZWF0ZUVsKCdhJywge1xuICAgICAgICB0ZXh0OiBzdWJ0YXNrLnRhcmVhLFxuICAgICAgICBjbHM6IGB0YXJlYXMtY2FyZC1zdWJ0YXNrLXRpdGxlJHtjaGVja2VkID8gJyBpcy1kb25lJyA6ICcnfWAsXG4gICAgICB9KVxuICAgICAgdGl0bGUuc2V0QXR0cigndGl0bGUnLCBzdWJ0YXNrLnRhcmVhKVxuICAgICAgdGl0bGUub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KHN1YnRhc2suZmlsZS5wYXRoLCAnJywgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tbWVudEJ1dHRvbiA9IHJvdy5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICd0YXJlYXMtY2FyZC1jb21tZW50LWJ0biB0YXJlYXMtY2FyZC1zdWJ0YXNrLWNvbW1lbnQtYnRuJyB9KVxuICAgICAgY29tbWVudEJ1dHRvbi5zZXRBdHRyKCdhcmlhLWxhYmVsJywgJ0FncmVnYXIgY29tZW50YXJpbycpXG4gICAgICBjb21tZW50QnV0dG9uLnNldEF0dHIoJ3RpdGxlJywgJ0FncmVnYXIgY29tZW50YXJpbycpXG4gICAgICBvYnNpZGlhbi5zZXRJY29uKGNvbW1lbnRCdXR0b24sICdzY3JvbGwtdGV4dCcpXG4gICAgICBjb21tZW50QnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgbmV3IEFkZFRhc2tDb21tZW50TW9kYWwodGhpcy5hcHAsIHN1YnRhc2spLm9wZW4oKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQ2FyZFByb2dyZXNzQmFuZChjYXJkOiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCByb3cgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLXByb2dyZXNzLXJvdycgfSlcbiAgICBjb25zdCBiYW5kID0gcm93LmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLXByb2dyZXNzLWJhbmQnIH0pXG4gICAgY29uc3QgZmlsbCA9IGJhbmQuY3JlYXRlRGl2KHsgY2xzOiAndGFyZWFzLWNhcmQtcHJvZ3Jlc3MtYmFuZC1maWxsJyB9KVxuICAgIGNvbnN0IHRleHQgPSBiYW5kLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1jYXJkLXByb2dyZXNzLWJhbmQtdGV4dCcgfSlcbiAgICBjb25zdCBkZWRpY2F0ZWRBbmRFc3RpbWF0ZWRUZXh0ID0gYCR7dGhpcy5mb3JtYXREZWNpbWFsKHRhc2suZGVkaWNhZG8pfS8ke3RoaXMuZm9ybWF0RGVjaW1hbCh0YXNrLmVzdGltYWNpb24pfWBcbiAgICBjb25zdCBkZXZpYXRpb25UZXh0ID0gYCArLT4gJHt0aGlzLmZvcm1hdERlY2ltYWwodGFzay5kZXN2aW8pfWBcbiAgICBjb25zdCB0ZXh0VmFsdWUgPSB0ZXh0LmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgY2xzOiAndGFyZWFzLWNhcmQtcHJvZ3Jlc3MtYmFuZC10ZXh0LXZhbHVlIHRhcmVhcy1jYXJkLXByb2dyZXNzLWJhbmQtdGV4dC1lZGl0YWJsZScsXG4gICAgICB0ZXh0OiBkZWRpY2F0ZWRBbmRFc3RpbWF0ZWRUZXh0LFxuICAgIH0pXG4gICAgdGV4dFZhbHVlLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICd0YXJlYXMtY2FyZC1wcm9ncmVzcy1iYW5kLXRleHQtZGV2aWF0aW9uJywgdGV4dDogZGV2aWF0aW9uVGV4dCB9KVxuICAgIHRleHRWYWx1ZS5zZXRBdHRyKCd0aXRsZScsIGAke3RoaXMuZm9ybWF0RGVjaW1hbCh0YXNrLmRlZGljYWRvKX0gaCAvICR7dGhpcy5mb3JtYXREZWNpbWFsKHRhc2suZXN0aW1hY2lvbil9IGggKy0+ICR7dGhpcy5mb3JtYXREZWNpbWFsKHRhc2suZGVzdmlvKX0gaGApXG4gICAgdGV4dFZhbHVlLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0aGlzLmVkaXRDYXJkRGVkaWNhdGVkVmFsdWUoYmFuZCwgdGV4dFZhbHVlLCB0YXNrKVxuICAgIH1cblxuICAgIGNvbnN0IHByb2dyZXNzUGVyY2VudCA9IHRhc2suZXN0aW1hY2lvbiA+IDBcbiAgICAgID8gKHRhc2suZGVkaWNhZG8gLyB0YXNrLmVzdGltYWNpb24pICogMTAwXG4gICAgICA6IDBcblxuICAgIGNvbnN0IGlzT3ZlcmZsb3cgPSBwcm9ncmVzc1BlcmNlbnQgPiAxMDBcbiAgICBsZXQgdmlzaWJsZVBlcmNlbnQgPSBpc092ZXJmbG93XG4gICAgICA/IHByb2dyZXNzUGVyY2VudCAlIDEwMFxuICAgICAgOiBwcm9ncmVzc1BlcmNlbnRcblxuICAgIGlmIChpc092ZXJmbG93ICYmIHZpc2libGVQZXJjZW50ID09PSAwKVxuICAgICAgdmlzaWJsZVBlcmNlbnQgPSAxMDBcblxuICAgIGNvbnN0IGNsYW1wZWRQZXJjZW50ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCB2aXNpYmxlUGVyY2VudCkpXG4gICAgZmlsbC5zdHlsZS53aWR0aCA9IGAke2NsYW1wZWRQZXJjZW50fSVgXG5cbiAgICBpZiAoaXNPdmVyZmxvdylcbiAgICAgIGJhbmQuYWRkQ2xhc3MoJ2lzLW92ZXJmbG93JylcblxuICAgIGNvbnN0IHBvbW9kb3JvQnV0dG9uID0gcm93LmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ3RhcmVhcy1jYXJkLXBvbW9kb3JvLWJ0bicgfSlcbiAgICBjb25zdCBpc1BvbW9kb3JvUnVubmluZyA9IHRoaXMucGx1Z2luLnBvbW9kb3JvLnJ1blN0YXRlID09PSAncnVubmluZydcbiAgICBwb21vZG9yb0J1dHRvbi5kaXNhYmxlZCA9IGlzUG9tb2Rvcm9SdW5uaW5nXG4gICAgcG9tb2Rvcm9CdXR0b24uc2V0QXR0cignYXJpYS1sYWJlbCcsICdBYnJpciBQb21vZG9ybyBjb24gZXN0YSB0YXJlYScpXG4gICAgcG9tb2Rvcm9CdXR0b24uc2V0QXR0cigndGl0bGUnLCBpc1BvbW9kb3JvUnVubmluZ1xuICAgICAgPyAnTm8gc2UgcHVlZGUgdmluY3VsYXIgdW5hIHRhcmVhIG1pZW50cmFzIGVsIGNvbnRhZG9yIGVzdMOhIGNvcnJpZW5kbydcbiAgICAgIDogJ0FicmlyIFBvbW9kb3JvIGNvbiBlc3RhIHRhcmVhJylcbiAgICBvYnNpZGlhbi5zZXRJY29uKHBvbW9kb3JvQnV0dG9uLCAnY2xvY2stMycpXG4gICAgcG9tb2Rvcm9CdXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHRoaXMub3BlblBvbW9kb3JvV2l0aFRhc2sodGFzaylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9wZW5Qb21vZG9yb1dpdGhUYXNrKHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgaWYgKHRoaXMucGx1Z2luLnBvbW9kb3JvLnJ1blN0YXRlID09PSAncnVubmluZycpIHtcbiAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoJ05vIHNlIHB1ZWRlIGNhbWJpYXIgbGEgdGFyZWEgbWllbnRyYXMgZWwgY29udGFkb3IgZXN0w6EgY29ycmllbmRvLicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnNldFBvbW9kb3JvU2VsZWN0ZWRUYXNrUGF0aCh0YXNrLmZpbGUucGF0aClcbiAgICB0aGlzLmFjdGl2ZVRhYiA9IFRhcmVhc1ZpZXcuUE9NT0RPUk9fVEFCX0lEXG4gICAgdm9pZCB0aGlzLnJlbmRlcigpXG4gIH1cblxuICBwcml2YXRlIGVkaXRDYXJkRGVkaWNhdGVkVmFsdWUoYmFuZDogSFRNTEVsZW1lbnQsIHRleHQ6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGlmIChiYW5kLnF1ZXJ5U2VsZWN0b3IoJy50YXJlYXMtY2FyZC1wcm9ncmVzcy1pbnB1dCcpKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBpbnB1dCA9IGJhbmQuY3JlYXRlRWwoJ2lucHV0JywgeyBjbHM6ICd0YXJlYXMtY2FyZC1wcm9ncmVzcy1pbnB1dCcgfSlcbiAgICBpbnB1dC50eXBlID0gJ251bWJlcidcbiAgICBpbnB1dC5taW4gPSAnMCdcbiAgICBpbnB1dC5zdGVwID0gJzAuMDEnXG4gICAgaW5wdXQudmFsdWUgPSB0aGlzLmZvcm1hdERlY2ltYWwodGFzay5kZWRpY2FkbylcblxuICAgIHRleHQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG4gICAgaW5wdXQuZm9jdXMoKVxuICAgIGlucHV0LnNlbGVjdCgpXG5cbiAgICBjb25zdCBjbG9zZUVkaXRvciA9IGFzeW5jIChzYXZlOiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zdCBuZXh0VmFsdWUgPSB0aGlzLnBhcnNlRGVjaW1hbChpbnB1dC52YWx1ZSlcbiAgICAgIGlucHV0LnJlbW92ZSgpXG4gICAgICB0ZXh0LnN0eWxlLnZpc2liaWxpdHkgPSAnJ1xuXG4gICAgICBpZiAoIXNhdmUgfHwgbmV4dFZhbHVlID09PSB0YXNrLmRlZGljYWRvKVxuICAgICAgICByZXR1cm5cblxuICAgICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgZGVkaWNhZG86IG5leHRWYWx1ZSB9KVxuICAgIH1cblxuICAgIGlucHV0Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgIHZvaWQgY2xvc2VFZGl0b3IodHJ1ZSlcbiAgICB9KVxuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJylcbiAgICAgICAgaW5wdXQuYmx1cigpXG5cbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdm9pZCBjbG9zZUVkaXRvcihmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJTdGF0dXNBY3Rpb25zQ2VsbChyb3c6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnN0IGNlbGwgPSByb3cuY3JlYXRlRWwoJ3RkJywgeyBjbHM6ICd0YXJlYXMtY2VsbC1hY3Rpb25zJyB9KVxuICAgIGlmICh0aGlzLmlzQXJjaGl2ZWRUYWIoKSkge1xuICAgICAgdGhpcy5yZW5kZXJBcmNoaXZlZEFjdGlvbnMoY2VsbCwgdGFzaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMucmVuZGVyU3RhdHVzQWN0aW9ucyhjZWxsLCB0YXNrKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGF0dXNDbGFzc05hbWUoc3RhdHVzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdGF0dXMudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csICctJylcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJpb3JpdHlDbGFzc05hbWUocHJpb3JpdHk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByaW9yaXR5LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnLScpXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclN0YXR1c0FjdGlvbnMoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBhY3Rpb25zID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1zdGF0dXMtYWN0aW9ucycgfSlcblxuICAgIGNvbnN0IHByb2dyZXNzQWN0aW9uID0gdGFzay5lc3RhZG8gPT09ICdFbiBwcm9ncmVzbydcbiAgICAgID8geyBsYWJlbDogJ1BhcmFyJywgbmV4dFN0YXR1czogJ1BlbmRpZW50ZScgfVxuICAgICAgOiB7IGxhYmVsOiAnSW5pY2lhcicsIG5leHRTdGF0dXM6ICdFbiBwcm9ncmVzbycgfVxuXG4gICAgY29uc3Qgc3RhdHVzQWN0aW9ucyA9IFtcbiAgICAgIHsgaWQ6ICdkaXNtaXNzJywgbGFiZWw6ICdEZXNlc3RpbWFyJywgbmV4dFN0YXR1czogJ0NhbmNlbGFkYScsIGNsczogJ2lzLWRpc21pc3MnIH0sXG4gICAgICB7IGlkOiAnc3RhcnQtc3RvcCcsIC4uLnByb2dyZXNzQWN0aW9uLCBjbHM6ICdpcy1zdGFydC1zdG9wJyB9LFxuICAgICAgeyBpZDogJ2ZpbmlzaCcsIGxhYmVsOiAnRmluYWxpemFyJywgbmV4dFN0YXR1czogJ0ZpbmFsaXphZGEnLCBjbHM6ICdpcy1maW5pc2gnIH0sXG4gICAgICB7IGlkOiAnYmxvY2snLCBsYWJlbDogJ0Jsb3F1ZWFyJywgbmV4dFN0YXR1czogJ0Jsb3F1ZWFkYScsIGNsczogJ2lzLWJsb2NrJyB9LFxuICAgIF1cblxuICAgIGZvciAoY29uc3QgYWN0aW9uIG9mIHN0YXR1c0FjdGlvbnMpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGFjdGlvbnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgICAgdGV4dDogYWN0aW9uLmxhYmVsLFxuICAgICAgICBjbHM6ICd0YXJlYXMtc3RhdHVzLWFjdGlvbi1idG4nLFxuICAgICAgfSlcbiAgICAgIGJ1dHRvbi5hZGRDbGFzcyhhY3Rpb24uY2xzKVxuXG4gICAgICBpZiAodGFzay5lc3RhZG8gPT09IGFjdGlvbi5uZXh0U3RhdHVzKVxuICAgICAgICBidXR0b24uYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpXG5cbiAgICAgIGJ1dHRvbi5vbmNsaWNrID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgaWYgKHRhc2suZXN0YWRvID09PSBhY3Rpb24ubmV4dFN0YXR1cylcbiAgICAgICAgICByZXR1cm5cblxuICAgICAgICBhd2FpdCB0aGlzLmFwcGx5U3RhdHVzQWN0aW9uKHRhc2ssIGFjdGlvbi5pZCwgYWN0aW9uLm5leHRTdGF0dXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdXJnZW50QnV0dG9uID0gYWN0aW9ucy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgdGV4dDogJ1VyZ2VudGUnLFxuICAgICAgY2xzOiAndGFyZWFzLXN0YXR1cy1hY3Rpb24tYnRuJyxcbiAgICB9KVxuICAgIHVyZ2VudEJ1dHRvbi5hZGRDbGFzcygnaXMtdXJnZW50JylcblxuICAgIGlmICh0YXNrLnByaW9yaWRhZCA9PT0gJ1VyZ2VudGUnKVxuICAgICAgdXJnZW50QnV0dG9uLmFkZENsYXNzKCdpcy1hY3RpdmUnKVxuXG4gICAgdXJnZW50QnV0dG9uLm9uY2xpY2sgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpZiAodGFzay5wcmlvcmlkYWQgPT09ICdVcmdlbnRlJylcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayh0YXNrLCB7IHByaW9yaWRhZDogJ1VyZ2VudGUnIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJBcmNoaXZlZEFjdGlvbnMoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBhY3Rpb25zID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RhcmVhcy1zdGF0dXMtYWN0aW9ucycgfSlcblxuICAgIGNvbnN0IHJlY292ZXJCdXR0b24gPSBhY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICB0ZXh0OiAnUmVjdXBlcmFyJyxcbiAgICAgIGNsczogJ3RhcmVhcy1zdGF0dXMtYWN0aW9uLWJ0bicsXG4gICAgfSlcbiAgICByZWNvdmVyQnV0dG9uLm9uY2xpY2sgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBhd2FpdCB0aGlzLnJlY292ZXJBcmNoaXZlZFRhc2sodGFzaylcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBhY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICB0ZXh0OiAnRWxpbWluYXInLFxuICAgICAgY2xzOiAndGFyZWFzLXN0YXR1cy1hY3Rpb24tYnRuIGlzLWRpc21pc3MnLFxuICAgIH0pXG4gICAgZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0aGlzLm9wZW5EZWxldGVUYXNrQ29uZmlybSh0YXNrKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVjb3ZlckFyY2hpdmVkVGFzayh0YXNrOiBUYXNrSXRlbSkge1xuICAgIGF3YWl0IHRoaXMuYXBwbHlTdGF0ZVRyYW5zaXRpb24odGFzaywgJ1BlbmRpZW50ZScpXG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuRGVsZXRlVGFza0NvbmZpcm0odGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBmYW1pbHkgPSB0aGlzLmdldFRhc2tGYW1pbHlQb3N0T3JkZXIodGFzaylcbiAgICBjb25zdCBmaWxlQ291bnQgPSBmYW1pbHkubGVuZ3RoXG4gICAgY29uc3QgdGFza0xhYmVsID0gZmlsZUNvdW50ID4gMVxuICAgICAgPyBgXCIke3Rhc2sudGFyZWF9XCIgeSAke2ZpbGVDb3VudCAtIDF9IHN1YnRhcmVhKHMpYFxuICAgICAgOiBgXCIke3Rhc2sudGFyZWF9XCJgXG5cbiAgICBuZXcgQ29uZmlybURlbGV0ZVRhc2tNb2RhbCh0aGlzLmFwcCwge1xuICAgICAgdGl0bGU6ICdFbGltaW5hciB0YXJlYSBkZWZpbml0aXZhbWVudGUnLFxuICAgICAgbWVzc2FnZTogYMK/U2VndXJvIHF1ZSBxdWVyw6lzIGVsaW1pbmFyICR7dGFza0xhYmVsfT8gRXN0YSBhY2Npw7NuIGJvcnJhIGxvcyBhcmNoaXZvcyAubWQgeSBubyBzZSBwdWVkZSBkZXNoYWNlci5gLFxuICAgICAgY29uZmlybVRleHQ6ICdBY2VwdGFyJyxcbiAgICAgIG9uQ29uZmlybTogYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLmRlbGV0ZVRhc2tGYW1pbHkodGFzaywgZmFtaWx5KVxuICAgICAgfSxcbiAgICB9KS5vcGVuKClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGFza0ZhbWlseVBvc3RPcmRlcih0YXNrOiBUYXNrSXRlbSk6IFRhc2tJdGVtW10ge1xuICAgIGNvbnN0IGFsbFRhc2tzID0gZ2V0VGFza3ModGhpcy5hcHApXG4gICAgY29uc3QgYnlQYXJlbnQgPSBuZXcgTWFwPHN0cmluZywgVGFza0l0ZW1bXT4oKVxuICAgIGZvciAoY29uc3QgY3VycmVudCBvZiBhbGxUYXNrcykge1xuICAgICAgaWYgKCFjdXJyZW50LnBhcmVudClcbiAgICAgICAgY29udGludWVcblxuICAgICAgY29uc3Qgc2libGluZ3MgPSBieVBhcmVudC5nZXQoY3VycmVudC5wYXJlbnQpID8/IFtdXG4gICAgICBzaWJsaW5ncy5wdXNoKGN1cnJlbnQpXG4gICAgICBieVBhcmVudC5zZXQoY3VycmVudC5wYXJlbnQsIHNpYmxpbmdzKVxuICAgIH1cblxuICAgIGNvbnN0IHZpc2l0ZWRQYXRocyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gICAgY29uc3Qgb3JkZXJlZDogVGFza0l0ZW1bXSA9IFtdXG5cbiAgICBjb25zdCB2aXNpdCA9IChjdXJyZW50VGFzazogVGFza0l0ZW0pID0+IHtcbiAgICAgIGlmICh2aXNpdGVkUGF0aHMuaGFzKGN1cnJlbnRUYXNrLmZpbGUucGF0aCkpXG4gICAgICAgIHJldHVyblxuXG4gICAgICB2aXNpdGVkUGF0aHMuYWRkKGN1cnJlbnRUYXNrLmZpbGUucGF0aClcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gYnlQYXJlbnQuZ2V0KGN1cnJlbnRUYXNrLmZpbGUuYmFzZW5hbWUpID8/IFtdXG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKVxuICAgICAgICB2aXNpdChjaGlsZClcblxuICAgICAgb3JkZXJlZC5wdXNoKGN1cnJlbnRUYXNrKVxuICAgIH1cblxuICAgIHZpc2l0KHRhc2spXG4gICAgcmV0dXJuIG9yZGVyZWRcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZGVsZXRlVGFza0ZhbWlseSh0YXNrOiBUYXNrSXRlbSwgZmFtaWx5OiBUYXNrSXRlbVtdKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrUGF0aCA9IHRoaXMucGx1Z2luLnBvbW9kb3JvLnNlbGVjdGVkVGFza1BhdGhcbiAgICBmb3IgKGNvbnN0IG1lbWJlciBvZiBmYW1pbHkpIHtcbiAgICAgIGNvbnN0IGFic3RyYWN0RmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChtZW1iZXIuZmlsZS5wYXRoKVxuICAgICAgaWYgKCEoYWJzdHJhY3RGaWxlIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZpbGUpKVxuICAgICAgICBjb250aW51ZVxuXG4gICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5kZWxldGUoYWJzdHJhY3RGaWxlLCB0cnVlKVxuICAgIH1cblxuICAgIGlmIChzZWxlY3RlZFRhc2tQYXRoICYmIGZhbWlseS5zb21lKG1lbWJlciA9PiBtZW1iZXIuZmlsZS5wYXRoID09PSBzZWxlY3RlZFRhc2tQYXRoKSlcbiAgICAgIHRoaXMuc2V0UG9tb2Rvcm9TZWxlY3RlZFRhc2tQYXRoKG51bGwpXG5cbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpXG4gICAgbmV3IG9ic2lkaWFuLk5vdGljZShgU2UgZWxpbWluw7MgXCIke3Rhc2sudGFyZWF9XCIgZGUgZm9ybWEgZGVmaW5pdGl2YS5gKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBhcHBseVN0YXR1c0FjdGlvbih0YXNrOiBUYXNrSXRlbSwgYWN0aW9uSWQ6IHN0cmluZywgbmV4dFN0YXR1czogc3RyaW5nKSB7XG4gICAgaWYgKGFjdGlvbklkID09PSAnc3RhcnQtc3RvcCcpIHtcbiAgICAgIGlmICh0YXNrLmVzdGFkbyA9PT0gJ0VuIHByb2dyZXNvJykge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcGx5U3RhdGVUcmFuc2l0aW9uKHRhc2ssIG5leHRTdGF0dXMpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLmFwcGx5U3RhdGVUcmFuc2l0aW9uKHRhc2ssIG5leHRTdGF0dXMsIHtcbiAgICAgICAgLi4udGhpcy5idWlsZFN0YXRlQ2hhbmdlVXBkYXRlcyh0YXNrLCBuZXh0U3RhdHVzKSxcbiAgICAgICAgZmVjaGFJbmljaW86IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uSWQgPT09ICdmaW5pc2gnKSB7XG4gICAgICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUoKVxuICAgICAgY29uc3Qgc3RhcnREYXRlID0gcGFyc2VUYXNrRGF0ZSh0YXNrLmZlY2hhSW5pY2lvKVxuICAgICAgY29uc3QgZGVkaWNhdGVkSG91cnMgPSBzdGFydERhdGVcbiAgICAgICAgPyB0aGlzLnJvdW5kVG9Ud28oKGVuZERhdGUuZ2V0VGltZSgpIC0gc3RhcnREYXRlLmdldFRpbWUoKSkgLyAoMTAwMCAqIDYwICogNjApKVxuICAgICAgICA6IDBcblxuICAgICAgY29uc3QgdXBkYXRlczogUGFydGlhbDxUYXNrRnJvbnRtYXR0ZXI+ID0ge1xuICAgICAgICBlc3RhZG86IG5leHRTdGF0dXMsXG4gICAgICAgIGZlY2hhRmluOiBlbmREYXRlLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIGRlZGljYWRvOiBkZWRpY2F0ZWRIb3VycyxcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdGFydERhdGUpXG4gICAgICAgIHVwZGF0ZXMuZmVjaGFJbmljaW8gPSBlbmREYXRlLnRvSVNPU3RyaW5nKClcblxuICAgICAgaWYgKHRhc2suZXN0aW1hY2lvbiA9PT0gMClcbiAgICAgICAgdXBkYXRlcy5lc3RpbWFjaW9uID0gZGVkaWNhdGVkSG91cnNcblxuICAgICAgYXdhaXQgdGhpcy5hcHBseVN0YXRlVHJhbnNpdGlvbih0YXNrLCBuZXh0U3RhdHVzLCB1cGRhdGVzKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgdGhpcy5hcHBseVN0YXRlVHJhbnNpdGlvbih0YXNrLCBuZXh0U3RhdHVzKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFN0YXRlQ2hhbmdlVXBkYXRlcyh0YXNrOiBUYXNrSXRlbSwgbmV4dFN0YXR1czogc3RyaW5nKTogUGFydGlhbDxUYXNrRnJvbnRtYXR0ZXI+IHtcbiAgICBjb25zdCB1cGRhdGVzOiBQYXJ0aWFsPFRhc2tGcm9udG1hdHRlcj4gPSB7IGVzdGFkbzogbmV4dFN0YXR1cyB9XG5cbiAgICBpZiAodGFzay5lc3RhZG8gIT09ICdGaW5hbGl6YWRhJyB8fCBuZXh0U3RhdHVzID09PSAnRmluYWxpemFkYScpXG4gICAgICByZXR1cm4gdXBkYXRlc1xuXG4gICAgY29uc3QgcmVtYWluaW5nSG91cnMgPSB0aGlzLnJvdW5kVG9Ud28odGFzay5lc3RpbWFjaW9uIC0gdGFzay5kZWRpY2FkbylcbiAgICBpZiAocmVtYWluaW5nSG91cnMgPD0gMClcbiAgICAgIHJldHVybiB1cGRhdGVzXG5cbiAgICB1cGRhdGVzLmZlY2hhRmluID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIHJlbWFpbmluZ0hvdXJzICogNjAgKiA2MCAqIDEwMDApLnRvSVNPU3RyaW5nKClcbiAgICByZXR1cm4gdXBkYXRlc1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJUZWFtQ2VsbChyb3c6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSwgZGVwdGg6IG51bWJlcikge1xuICAgIGNvbnN0IGNlbGwgPSByb3cuY3JlYXRlRWwoJ3RkJylcbiAgICBpZiAoZGVwdGggPiAwKVxuICAgICAgcmV0dXJuXG5cbiAgICB0aGlzLnJlbmRlclRlYW1CYWRnZShjZWxsLCB0YXNrKVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJUZWFtQmFkZ2UoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBib2FyZEdyb3VwcyA9IHRoaXMucGx1Z2luLmdldEVxdWlwb3NGb3JUYWJsZXJvKHRhc2sudGFibGVybylcbiAgICBjb25zdCB0ZWFtQ29uZmlnID0gYm9hcmRHcm91cHMuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gdGFzay5lcXVpcG8pXG4gICAgY29uc3QgYmFkZ2UgPSBjb250YWluZXIuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICB0ZXh0OiB0YXNrLmVxdWlwbyB8fCAnU2luIGdydXBvJyxcbiAgICAgIGNsczogJ3RhcmVhcy1lcXVpcG8tYmFkZ2UnLFxuICAgIH0pXG5cbiAgICBpZiAodGVhbUNvbmZpZylcbiAgICAgIGJhZGdlLnN0eWxlLmJhY2tncm91bmQgPSB0ZWFtQ29uZmlnLmNvbG9yXG5cbiAgICBiYWRnZS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICBjb25zdCBvcHRpb25zID0gYm9hcmRHcm91cHMubWFwKGVxdWlwbyA9PiBlcXVpcG8ubmFtZSlcbiAgICAgIHNob3dEcm9wZG93bihiYWRnZSwgb3B0aW9ucywgdGFzay5lcXVpcG8sIGFzeW5jIChuZXh0VGVhbSkgPT4ge1xuICAgICAgICBjb25zdCBwcmV2aW91c1RlYW0gPSB0YXNrLmVxdWlwb1xuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBlcXVpcG86IG5leHRUZWFtIH0pXG5cbiAgICAgICAgY29uc3Qgc3VidGFza3MgPSBnZXRUYXNrcyh0aGlzLmFwcCkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wYXJlbnQgPT09IHRhc2suZmlsZS5iYXNlbmFtZSlcbiAgICAgICAgZm9yIChjb25zdCBzdWJ0YXNrIG9mIHN1YnRhc2tzKVxuICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayhzdWJ0YXNrLCB7IGVxdWlwbzogbmV4dFRlYW0gfSlcblxuICAgICAgICBhd2FpdCB0aGlzLnJlYmFsYW5jZUJvYXJkU2NoZWR1bGUodGFzay50YWJsZXJvLCBwcmV2aW91c1RlYW0pXG4gICAgICAgIGF3YWl0IHRoaXMucmViYWxhbmNlQm9hcmRTY2hlZHVsZSh0YXNrLnRhYmxlcm8sIG5leHRUZWFtKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclByaW9yaXR5Q2VsbChyb3c6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnN0IGNlbGwgPSByb3cuY3JlYXRlRWwoJ3RkJywgeyBjbHM6ICd0YXJlYXMtY2VsbC1wcmlvcmlkYWQnIH0pXG4gICAgdGhpcy5yZW5kZXJQcmlvcml0eUJhZGdlKGNlbGwsIHRhc2spXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclByaW9yaXR5QmFkZ2UoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBwcmlvcml0eUNsYXNzID0gdGFzay5wcmlvcmlkYWQudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IHVyZ2VudEFjdGl2ZSA9IHRhc2sucHJpb3JpZGFkID09PSAnVXJnZW50ZScgJiYgdGFzay5lc3RhZG8gIT09ICdGaW5hbGl6YWRhJ1xuXG4gICAgY29uc3QgYmFkZ2UgPSBjb250YWluZXIuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICB0ZXh0OiB0YXNrLnByaW9yaWRhZCxcbiAgICAgIGNsczogYHRhcmVhcy1wcmlvcmlkYWQgdGFyZWFzLXByaW9yaWRhZC0ke3ByaW9yaXR5Q2xhc3N9JHt1cmdlbnRBY3RpdmUgPyAnIHRhcmVhcy11cmdlbnRlLWFjdGl2YScgOiAnJ31gLFxuICAgIH0pXG5cbiAgICBiYWRnZS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgc2hvd0Ryb3Bkb3duKGJhZGdlLCBQUklPUklEQURFUywgdGFzay5wcmlvcmlkYWQsIGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBwcmlvcmlkYWQ6IHZhbHVlIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyRGVkaWNhdGVkQ2VsbChyb3c6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnN0IGNlbGwgPSByb3cuY3JlYXRlRWwoJ3RkJywgeyBjbHM6ICd0YXJlYXMtY2VsbC1udW0nIH0pXG4gICAgY29uc3QgZWRpdGFibGUgPSBjZWxsLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiB0aGlzLmZvcm1hdERlY2ltYWwodGFzay5kZWRpY2FkbyksIGNsczogJ3RhcmVhcy1lZGl0YWJsZScgfSlcblxuICAgIGVkaXRhYmxlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmVkaXROdW1iZXJDZWxsKGVkaXRhYmxlLCB0YXNrLmRlZGljYWRvLCBhc3luYyB2YWx1ZSA9PiB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBkZWRpY2FkbzogdmFsdWUgfSkpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJFc3RpbWF0ZWRDZWxsKHJvdzogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgY29uc3QgY2VsbCA9IHJvdy5jcmVhdGVFbCgndGQnLCB7IGNsczogJ3RhcmVhcy1jZWxsLW51bScgfSlcbiAgICBjb25zdCBlZGl0YWJsZSA9IGNlbGwuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IHRoaXMuZm9ybWF0RGVjaW1hbCh0YXNrLmVzdGltYWNpb24pLCBjbHM6ICd0YXJlYXMtZWRpdGFibGUnIH0pXG5cbiAgICBlZGl0YWJsZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5lZGl0TnVtYmVyQ2VsbChlZGl0YWJsZSwgdGFzay5lc3RpbWFjaW9uLCBhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgZXN0aW1hY2lvbjogdmFsdWUgfSlcbiAgICAgICAgYXdhaXQgdGhpcy5yZWJhbGFuY2VCb2FyZFNjaGVkdWxlKHRhc2sudGFibGVybywgdGFzay5lcXVpcG8pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU3RhcnREYXRlQ2VsbChyb3c6IEhUTUxFbGVtZW50LCB0YXNrOiBUYXNrSXRlbSkge1xuICAgIHJvdy5jcmVhdGVFbCgndGQnLCB7IGNsczogJ3RhcmVhcy1jZWxsLWRhdGUnLCB0ZXh0OiB0aGlzLmZvcm1hdFRhc2tEYXRlKHRhc2suZmVjaGFJbmljaW8pIH0pXG4gIH1cblxuICBwcml2YXRlIHJlbmRlckVuZERhdGVDZWxsKHJvdzogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgcm93LmNyZWF0ZUVsKCd0ZCcsIHsgY2xzOiAndGFyZWFzLWNlbGwtZGF0ZScsIHRleHQ6IHRoaXMuZm9ybWF0VGFza0RhdGUodGFzay5mZWNoYUZpbikgfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUGVyY2VudENlbGwocm93OiBIVE1MRWxlbWVudCwgdGFzazogVGFza0l0ZW0pIHtcbiAgICBjb25zdCBwZXJjZW50ID0gdGhpcy5jYWxjdWxhdGVQcm9ncmVzc1BlcmNlbnQodGFzaylcblxuICAgIGNvbnN0IGNlbGwgPSByb3cuY3JlYXRlRWwoJ3RkJywgeyBjbHM6ICd0YXJlYXMtY2VsbC1wY3QnIH0pXG4gICAgY2VsbC5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogYCR7cGVyY2VudH0gJWAsIGNsczogJ3RhcmVhcy1wY3QtdGV4dCcgfSlcblxuICAgIGNvbnN0IGRvdCA9IGNlbGwuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ3RhcmVhcy1wY3QtZG90JyB9KVxuICAgIGlmIChwZXJjZW50ID49IDEwMClcbiAgICAgIGRvdC5hZGRDbGFzcygnZnVsbCcpXG4gICAgZWxzZSBpZiAocGVyY2VudCA+IDApXG4gICAgICBkb3QuYWRkQ2xhc3MoJ3BhcnRpYWwnKVxuICB9XG5cbiAgcHJpdmF0ZSBlZGl0TnVtYmVyQ2VsbChcbiAgICBzcGFuOiBIVE1MU3BhbkVsZW1lbnQsXG4gICAgY3VycmVudFZhbHVlOiBudW1iZXIsXG4gICAgb25TYXZlOiAobmV4dFZhbHVlOiBudW1iZXIpID0+IFByb21pc2U8dm9pZD4sXG4gICkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnR5cGUgPSAnbnVtYmVyJ1xuICAgIGlucHV0LmNsYXNzTmFtZSA9ICd0YXJlYXMtaW5saW5lLWlucHV0J1xuICAgIGlucHV0LnZhbHVlID0gdGhpcy5mb3JtYXREZWNpbWFsKGN1cnJlbnRWYWx1ZSlcbiAgICBpbnB1dC5taW4gPSAnMCdcbiAgICBpbnB1dC5zdGVwID0gJzAuMDEnXG5cbiAgICBzcGFuLnJlcGxhY2VXaXRoKGlucHV0KVxuICAgIGlucHV0LmZvY3VzKClcbiAgICBpbnB1dC5zZWxlY3QoKVxuXG4gICAgY29uc3QgZmluaXNoID0gKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlRGVjaW1hbChpbnB1dC52YWx1ZSlcbiAgICAgIHZvaWQgb25TYXZlKHZhbHVlKVxuICAgIH1cblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmaW5pc2gpXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJylcbiAgICAgICAgaW5wdXQuYmx1cigpXG5cbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gdGhpcy5mb3JtYXREZWNpbWFsKGN1cnJlbnRWYWx1ZSlcbiAgICAgICAgaW5wdXQuYmx1cigpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VEZWNpbWFsKHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IHBhcnNlZCA9IE51bWJlci5wYXJzZUZsb2F0KHZhbHVlKVxuICAgIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VkKSB8fCBwYXJzZWQgPCAwKVxuICAgICAgcmV0dXJuIDBcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKHBhcnNlZCAqIDEwMCkgLyAxMDBcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0RGVjaW1hbCh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZURlY2ltYWwoU3RyaW5nKHZhbHVlKSkudG9GaXhlZCgyKVxuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRUYXNrRGF0ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBkYXRlID0gcGFyc2VUYXNrRGF0ZSh2YWx1ZSlcbiAgICBpZiAoIWRhdGUpXG4gICAgICByZXR1cm4gJ+KAlCdcblxuICAgIGNvbnN0IGRheSA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKVxuICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJylcbiAgICBjb25zdCBob3VyID0gU3RyaW5nKGRhdGUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgJzAnKVxuICAgIGNvbnN0IG1pbnV0ZSA9IFN0cmluZyhkYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKVxuXG4gICAgcmV0dXJuIGAke2RheX0vJHttb250aH0gJHtob3VyfToke21pbnV0ZX1gXG4gIH1cblxuICBwcml2YXRlIHJvdW5kVG9Ud28odmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkgfHwgdmFsdWUgPD0gMClcbiAgICAgIHJldHVybiAwXG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDBcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlUHJvZ3Jlc3NQZXJjZW50KHRhc2s6IFRhc2tJdGVtKTogbnVtYmVyIHtcbiAgICBjb25zdCB0b3RhbCA9IHRhc2suZXN0aW1hY2lvbiB8fCAwXG4gICAgaWYgKHRvdGFsIDw9IDApXG4gICAgICByZXR1cm4gMFxuXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKHRhc2suZGVkaWNhZG8gLyB0b3RhbCkgKiAxMDApXG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENhcmREcmFnSGFuZGxlcnMoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgY2FyZDogSFRNTEVsZW1lbnQsIHRhc2s6IFRhc2tJdGVtLCBhbGxUYXNrczogVGFza0l0ZW1bXSkge1xuICAgIGNhcmQuZHJhZ2dhYmxlID0gdHJ1ZVxuXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGRhdGFUcmFuc2ZlciA9IGV2ZW50LmRhdGFUcmFuc2ZlclxuICAgICAgaWYgKCFkYXRhVHJhbnNmZXIpXG4gICAgICAgIHJldHVyblxuXG4gICAgICB0aGlzLmRyYWdQYXRoID0gdGFzay5maWxlLnBhdGhcbiAgICAgIHRoaXMuZHJhZ0RlcHRoID0gMFxuICAgICAgdGhpcy5kcmFnUGFyZW50ID0gdGFzay5wYXJlbnRcbiAgICAgIHRoaXMuZHJhZ0luc2VydFBvc2l0aW9uID0gbnVsbFxuICAgICAgY2FyZC5hZGRDbGFzcygndGFyZWFzLXRhc2stY2FyZC1kcmFnZ2luZycpXG4gICAgICBjYXJkLmFkZENsYXNzKCd0YXJlYXMtdGFzay1jYXJkLWRyYWctcHJldmlldycpXG4gICAgICBkYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJ1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9KVxuXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldENhcmREcmFnU3RhdGUoY29udGFpbmVyLCBjYXJkKVxuICAgIH0pXG5cbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY2FuRHJvcE9uUm93KHRhc2ssIDApKVxuICAgICAgICByZXR1cm5cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIpXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG5cbiAgICAgIGNvbnN0IGluc2VydFBvc2l0aW9uID0gdGhpcy5yZXNvbHZlQ2FyZEluc2VydFBvc2l0aW9uKGV2ZW50LCBjYXJkKVxuICAgICAgdGhpcy5kcmFnSW5zZXJ0UG9zaXRpb24gPSBpbnNlcnRQb3NpdGlvblxuICAgICAgdGhpcy5jbGVhckNhcmREcm9wTWFya2VycygpXG4gICAgICBjYXJkLmFkZENsYXNzKGluc2VydFBvc2l0aW9uID09PSAnYmVmb3JlJyA/ICd0YXJlYXMtdGFzay1jYXJkLWRyYWctb3Zlci10b3AnIDogJ3RhcmVhcy10YXNrLWNhcmQtZHJhZy1vdmVyLWJvdHRvbScpXG4gICAgfSlcblxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNhbkRyb3BPblJvdyh0YXNrLCAwKSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBjb25zdCBpbnNlcnRQb3NpdGlvbiA9IHRoaXMuZHJhZ0luc2VydFBvc2l0aW9uID8/IHRoaXMucmVzb2x2ZUNhcmRJbnNlcnRQb3NpdGlvbihldmVudCwgY2FyZClcbiAgICAgIGNhcmQucmVtb3ZlQ2xhc3MoJ3RhcmVhcy10YXNrLWNhcmQtZHJhZy1vdmVyLXRvcCcpXG4gICAgICBjYXJkLnJlbW92ZUNsYXNzKCd0YXJlYXMtdGFzay1jYXJkLWRyYWctb3Zlci1ib3R0b20nKVxuXG4gICAgICBpZiAoIXRoaXMuZHJhZ1BhdGgpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBjb25zdCBkcmFnZ2VkID0gYWxsVGFza3MuZmluZChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSB0aGlzLmRyYWdQYXRoKVxuICAgICAgaWYgKCFkcmFnZ2VkKVxuICAgICAgICByZXR1cm5cblxuICAgICAgdGhpcy5kcm9wcGVkVGFza0FuaW1hdGlvblBhdGggPSB0aGlzLmRyYWdQYXRoXG4gICAgICBpZiAoIWRyYWdnZWQucGFyZW50ICYmIGRyYWdnZWQudGFibGVybyA9PT0gdGFzay50YWJsZXJvICYmIGRyYWdnZWQuZXF1aXBvICE9PSB0YXNrLmVxdWlwbylcbiAgICAgICAgYXdhaXQgdGhpcy5tb3ZlVGFza1RvR3JvdXAodGhpcy5kcmFnUGF0aCwgdGFzay5lcXVpcG8sIGFsbFRhc2tzLCB0YXNrLmZpbGUucGF0aCwgaW5zZXJ0UG9zaXRpb24pXG4gICAgICBlbHNlXG4gICAgICAgIGF3YWl0IHRoaXMucmVvcmRlclRhc2sodGhpcy5kcmFnUGF0aCwgdGFzay5maWxlLnBhdGgsIGFsbFRhc2tzLCBpbnNlcnRQb3NpdGlvbilcblxuICAgICAgdGhpcy5yZXNldENhcmREcmFnU3RhdGUoY29udGFpbmVyLCBjYXJkKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGF0dGFjaEdyb3VwQ2FyZExpc3REcm9wSGFuZGxlcnMoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgZ3JvdXBOYW1lOiBzdHJpbmcsIGFsbFRhc2tzOiBUYXNrSXRlbVtdKSB7XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBkcmFnUGF0aCA9IHRoaXMuZHJhZ1BhdGhcbiAgICAgIGlmICghZHJhZ1BhdGgpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBjb25zdCBkcmFnZ2VkID0gYWxsVGFza3MuZmluZChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSBkcmFnUGF0aClcbiAgICAgIGlmICghZHJhZ2dlZCB8fCBkcmFnZ2VkLnBhcmVudClcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGlmIChkcmFnZ2VkLnRhYmxlcm8gIT09IHRoaXMuYWN0aXZlVGFiIHx8IGRyYWdnZWQuZXF1aXBvID09PSBncm91cE5hbWUpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2ZlcilcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcblxuICAgICAgY29udGFpbmVyLmFkZENsYXNzKCd0YXJlYXMtY2FyZC1saXN0LWRyb3AtdGFyZ2V0JylcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgaW5zdGFuY2VvZiBOb2RlICYmIGNvbnRhaW5lci5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDbGFzcygndGFyZWFzLWNhcmQtbGlzdC1kcm9wLXRhcmdldCcpXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBkcmFnUGF0aCA9IHRoaXMuZHJhZ1BhdGhcbiAgICAgIGlmICghZHJhZ1BhdGgpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBjb25zdCBtYXJrZXJDYXJkID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50YXJlYXMtdGFzay1jYXJkLWRyYWctb3Zlci10b3AsIC50YXJlYXMtdGFzay1jYXJkLWRyYWctb3Zlci1ib3R0b20nKVxuICAgICAgY29uc3QgbWFya2VyVGFyZ2V0UGF0aCA9IG1hcmtlckNhcmQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IG1hcmtlckNhcmQuZGF0YXNldC5wYXRoID8/IG51bGwgOiBudWxsXG4gICAgICBjb25zdCBtYXJrZXJJbnNlcnRQb3NpdGlvbjogJ2JlZm9yZScgfCAnYWZ0ZXInIHwgbnVsbCA9IG1hcmtlckNhcmQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICAgICA/IChtYXJrZXJDYXJkLmNsYXNzTGlzdC5jb250YWlucygndGFyZWFzLXRhc2stY2FyZC1kcmFnLW92ZXItdG9wJykgPyAnYmVmb3JlJyA6ICdhZnRlcicpXG4gICAgICAgIDogbnVsbFxuXG4gICAgICBjb25zdCB0YXJnZXRDYXJkID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCB8IG51bGwpPy5jbG9zZXN0KCcudGFyZWFzLXRhc2stY2FyZCcpXG4gICAgICBpZiAodGFyZ2V0Q2FyZCAmJiAhdGFyZ2V0Q2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhcmVhcy10YXNrLWNhcmQtYWRkJykpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBjb25zdCBkcmFnZ2VkID0gYWxsVGFza3MuZmluZChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSBkcmFnUGF0aClcbiAgICAgIGlmICghZHJhZ2dlZCB8fCBkcmFnZ2VkLnBhcmVudClcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGlmIChkcmFnZ2VkLnRhYmxlcm8gIT09IHRoaXMuYWN0aXZlVGFiKVxuICAgICAgICByZXR1cm5cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDbGFzcygndGFyZWFzLWNhcmQtbGlzdC1kcm9wLXRhcmdldCcpXG4gICAgICB0aGlzLmRyb3BwZWRUYXNrQW5pbWF0aW9uUGF0aCA9IGRyYWdQYXRoXG5cbiAgICAgIGlmIChtYXJrZXJUYXJnZXRQYXRoICYmIG1hcmtlckluc2VydFBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChkcmFnZ2VkLmVxdWlwbyA9PT0gZ3JvdXBOYW1lKVxuICAgICAgICAgIGF3YWl0IHRoaXMucmVvcmRlclRhc2soZHJhZ1BhdGgsIG1hcmtlclRhcmdldFBhdGgsIGFsbFRhc2tzLCBtYXJrZXJJbnNlcnRQb3NpdGlvbilcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGF3YWl0IHRoaXMubW92ZVRhc2tUb0dyb3VwKGRyYWdQYXRoLCBncm91cE5hbWUsIGFsbFRhc2tzLCBtYXJrZXJUYXJnZXRQYXRoLCBtYXJrZXJJbnNlcnRQb3NpdGlvbilcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRyYWdnZWQuZXF1aXBvICE9PSBncm91cE5hbWUpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5tb3ZlVGFza1RvR3JvdXAoZHJhZ1BhdGgsIGdyb3VwTmFtZSwgYWxsVGFza3MpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZHJhZ1BhdGggPSBudWxsXG4gICAgICB0aGlzLmRyYWdEZXB0aCA9IG51bGxcbiAgICAgIHRoaXMuZHJhZ1BhcmVudCA9IG51bGxcbiAgICAgIHRoaXMuZHJhZ0luc2VydFBvc2l0aW9uID0gbnVsbFxuICAgICAgdGhpcy5jbGVhckNhcmREcm9wTWFya2VycygpXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoR3JvdXBEcmFnSGFuZGxlcnMoXG4gICAgYm9hcmQ6IEhUTUxFbGVtZW50LFxuICAgIGNvbHVtbjogSFRNTEVsZW1lbnQsXG4gICAgaGFuZGxlOiBIVE1MRWxlbWVudCB8IG51bGwsXG4gICAgZ3JvdXBOYW1lOiBzdHJpbmcsXG4gICAgaXNNYW5hZ2VkOiBib29sZWFuLFxuICApIHtcbiAgICBpZiAoIWlzTWFuYWdlZCB8fCAhaGFuZGxlKVxuICAgICAgcmV0dXJuXG5cbiAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkpXG4gICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkpXG5cbiAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBkYXRhVHJhbnNmZXIgPSBldmVudC5kYXRhVHJhbnNmZXJcbiAgICAgIGlmICghZGF0YVRyYW5zZmVyKVxuICAgICAgICByZXR1cm5cblxuICAgICAgdGhpcy5kcmFnR3JvdXBOYW1lID0gZ3JvdXBOYW1lXG4gICAgICB0aGlzLmRyYWdHcm91cENvbHVtbiA9IGNvbHVtblxuICAgICAgY29sdW1uLmFkZENsYXNzKCd0YXJlYXMtZ3JvdXAtZHJhZ2dpbmcnKVxuICAgICAgZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICAgIGRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZ3JvdXBOYW1lKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9KVxuXG4gICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0R3JvdXBEcmFnU3RhdGUoYm9hcmQpXG4gICAgfSlcblxuICAgIGNvbHVtbi5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZHJhZ2dlZEdyb3VwQ29sdW1uID0gdGhpcy5kcmFnR3JvdXBDb2x1bW5cbiAgICAgIGlmICghdGhpcy5kcmFnR3JvdXBOYW1lIHx8ICFkcmFnZ2VkR3JvdXBDb2x1bW4gfHwgdGhpcy5kcmFnR3JvdXBOYW1lID09PSBncm91cE5hbWUgfHwgZHJhZ2dlZEdyb3VwQ29sdW1uID09PSBjb2x1bW4pXG4gICAgICAgIHJldHVyblxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2ZlcilcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcblxuICAgICAgY29uc3QgaW5zZXJ0UG9zaXRpb24gPSB0aGlzLnJlc29sdmVHcm91cEluc2VydFBvc2l0aW9uKGV2ZW50LCBjb2x1bW4pXG4gICAgICB0aGlzLmNsZWFyR3JvdXBEcm9wTWFya2Vycyhib2FyZClcbiAgICAgIGNvbHVtbi5hZGRDbGFzcyhpbnNlcnRQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyAndGFyZWFzLWdyb3VwLWRyYWctb3Zlci1iZWZvcmUnIDogJ3RhcmVhcy1ncm91cC1kcmFnLW92ZXItYWZ0ZXInKVxuXG4gICAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gaW5zZXJ0UG9zaXRpb24gPT09ICdiZWZvcmUnID8gY29sdW1uIDogY29sdW1uLm5leHRFbGVtZW50U2libGluZ1xuICAgICAgaWYgKHJlZmVyZW5jZU5vZGUgPT09IGRyYWdnZWRHcm91cENvbHVtbilcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGlmIChpbnNlcnRQb3NpdGlvbiA9PT0gJ2FmdGVyJyAmJiBjb2x1bW4ubmV4dEVsZW1lbnRTaWJsaW5nID09PSBkcmFnZ2VkR3JvdXBDb2x1bW4pXG4gICAgICAgIHJldHVyblxuXG4gICAgICB0aGlzLmFuaW1hdGVHcm91cFJlZmxvdyhib2FyZCwgKCkgPT4ge1xuICAgICAgICBib2FyZC5pbnNlcnRCZWZvcmUoZHJhZ2dlZEdyb3VwQ29sdW1uLCByZWZlcmVuY2VOb2RlKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgY29sdW1uLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgaW5zdGFuY2VvZiBOb2RlICYmIGNvbHVtbi5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGNvbHVtbi5yZW1vdmVDbGFzcygndGFyZWFzLWdyb3VwLWRyYWctb3Zlci1iZWZvcmUnKVxuICAgICAgY29sdW1uLnJlbW92ZUNsYXNzKCd0YXJlYXMtZ3JvdXAtZHJhZy1vdmVyLWFmdGVyJylcbiAgICB9KVxuXG4gICAgY29sdW1uLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGRyYWdnZWRHcm91cE5hbWUgPSB0aGlzLmRyYWdHcm91cE5hbWVcbiAgICAgIGlmICghZHJhZ2dlZEdyb3VwTmFtZSB8fCBkcmFnZ2VkR3JvdXBOYW1lID09PSBncm91cE5hbWUpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICBjb25zdCBtYW5hZ2VkR3JvdXBOYW1lcyA9IG5ldyBTZXQodGhpcy5wbHVnaW4uZ2V0RXF1aXBvc0ZvclRhYmxlcm8odGhpcy5hY3RpdmVUYWIpLm1hcChpdGVtID0+IGl0ZW0ubmFtZSkpXG4gICAgICBjb25zdCBvcmRlcmVkR3JvdXBOYW1lcyA9IEFycmF5LmZyb20oYm9hcmQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJzpzY29wZSA+IC50YXJlYXMtZ3JvdXAnKSlcbiAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0uZGF0YXNldC5ncm91cCA/PyAnJylcbiAgICAgICAgLmZpbHRlcihuYW1lID0+IG1hbmFnZWRHcm91cE5hbWVzLmhhcyhuYW1lKSlcblxuICAgICAgY29uc3QgcmVvcmRlcmVkID0gYXdhaXQgdGhpcy5wbHVnaW4uc2V0RXF1aXBvc09yZGVyRm9yVGFibGVybyh0aGlzLmFjdGl2ZVRhYiwgb3JkZXJlZEdyb3VwTmFtZXMpXG4gICAgICB0aGlzLnJlc2V0R3JvdXBEcmFnU3RhdGUoYm9hcmQpXG4gICAgICBpZiAocmVvcmRlcmVkKVxuICAgICAgICBhd2FpdCB0aGlzLnJlbmRlcigpXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVvcmRlclRhc2soZHJhZ2dlZFBhdGg6IHN0cmluZywgdGFyZ2V0UGF0aDogc3RyaW5nLCBhbGxUYXNrczogVGFza0l0ZW1bXSwgaW5zZXJ0UG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJyB8IG51bGwgPSBudWxsKSB7XG4gICAgY29uc3QgZHJhZ2dlZCA9IGFsbFRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmZpbGUucGF0aCA9PT0gZHJhZ2dlZFBhdGgpXG4gICAgY29uc3QgdGFyZ2V0ID0gYWxsVGFza3MuZmluZCh0YXNrID0+IHRhc2suZmlsZS5wYXRoID09PSB0YXJnZXRQYXRoKVxuICAgIGlmICghZHJhZ2dlZCB8fCAhdGFyZ2V0KVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBzaWJsaW5ncyA9IGFsbFRhc2tzXG4gICAgICAuZmlsdGVyKHRhc2sgPT4gIXRhc2sucGFyZW50ICYmIHRhc2sudGFibGVybyA9PT0gZHJhZ2dlZC50YWJsZXJvICYmIHRhc2suZXF1aXBvID09PSBkcmFnZ2VkLmVxdWlwbylcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcilcblxuICAgIGNvbnN0IGZyb21JbmRleCA9IHNpYmxpbmdzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZmlsZS5wYXRoID09PSBkcmFnZ2VkUGF0aClcbiAgICBjb25zdCB0b0luZGV4ID0gc2libGluZ3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5maWxlLnBhdGggPT09IHRhcmdldFBhdGgpXG5cbiAgICBsZXQgbmV4dEluZGV4ID0gdG9JbmRleFxuICAgIGlmIChpbnNlcnRQb3NpdGlvbikge1xuICAgICAgbmV4dEluZGV4ID0gdG9JbmRleCArIChpbnNlcnRQb3NpdGlvbiA9PT0gJ2FmdGVyJyA/IDEgOiAwKVxuICAgICAgaWYgKGZyb21JbmRleCA8IG5leHRJbmRleClcbiAgICAgICAgbmV4dEluZGV4IC09IDFcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0T3JkZXIgPSByZW9yZGVyTGlzdChzaWJsaW5ncywgZnJvbUluZGV4LCBuZXh0SW5kZXgpXG4gICAgYXdhaXQgcGVyc2lzdFRhc2tPcmRlcihuZXh0T3JkZXIsIGFzeW5jICh0YXNrLCBvcmRlcikgPT4gdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgb3JkZXIgfSkpXG4gICAgYXdhaXQgdGhpcy5yZWJhbGFuY2VCb2FyZFNjaGVkdWxlKGRyYWdnZWQudGFibGVybywgZHJhZ2dlZC5lcXVpcG8pXG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZW9yZGVyU3VidGFzayhkcmFnZ2VkUGF0aDogc3RyaW5nLCB0YXJnZXRQYXRoOiBzdHJpbmcsIGFsbFRhc2tzOiBUYXNrSXRlbVtdKSB7XG4gICAgY29uc3QgZHJhZ2dlZCA9IGFsbFRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmZpbGUucGF0aCA9PT0gZHJhZ2dlZFBhdGgpXG4gICAgY29uc3QgdGFyZ2V0ID0gYWxsVGFza3MuZmluZCh0YXNrID0+IHRhc2suZmlsZS5wYXRoID09PSB0YXJnZXRQYXRoKVxuICAgIGlmICghZHJhZ2dlZCB8fCAhdGFyZ2V0KVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBzaWJsaW5ncyA9IGFsbFRhc2tzXG4gICAgICAuZmlsdGVyKHRhc2sgPT4gdGFzay5wYXJlbnQgPT09IGRyYWdnZWQucGFyZW50KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKVxuXG4gICAgY29uc3QgZnJvbUluZGV4ID0gc2libGluZ3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5maWxlLnBhdGggPT09IGRyYWdnZWRQYXRoKVxuICAgIGNvbnN0IHRvSW5kZXggPSBzaWJsaW5ncy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmZpbGUucGF0aCA9PT0gdGFyZ2V0UGF0aClcblxuICAgIGNvbnN0IG5leHRPcmRlciA9IHJlb3JkZXJMaXN0KHNpYmxpbmdzLCBmcm9tSW5kZXgsIHRvSW5kZXgpXG4gICAgYXdhaXQgcGVyc2lzdFRhc2tPcmRlcihuZXh0T3JkZXIsIGFzeW5jICh0YXNrLCBvcmRlcikgPT4gdGhpcy51cGRhdGVUYXNrKHRhc2ssIHsgb3JkZXIgfSkpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG1vdmVUYXNrVG9Hcm91cChcbiAgICBkcmFnZ2VkUGF0aDogc3RyaW5nLFxuICAgIHRhcmdldEdyb3VwOiBzdHJpbmcsXG4gICAgYWxsVGFza3M6IFRhc2tJdGVtW10sXG4gICAgdGFyZ2V0UGF0aDogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4gICAgaW5zZXJ0UG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJyA9ICdhZnRlcicsXG4gICkge1xuICAgIGNvbnN0IGRyYWdnZWQgPSBhbGxUYXNrcy5maW5kKHRhc2sgPT4gdGFzay5maWxlLnBhdGggPT09IGRyYWdnZWRQYXRoKVxuICAgIGlmICghZHJhZ2dlZCB8fCBkcmFnZ2VkLnBhcmVudClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgcHJldmlvdXNHcm91cCA9IGRyYWdnZWQuZXF1aXBvXG4gICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKGRyYWdnZWQsIHsgZXF1aXBvOiB0YXJnZXRHcm91cCB9KVxuXG4gICAgY29uc3Qgc3VidGFza3MgPSBhbGxUYXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnBhcmVudCA9PT0gZHJhZ2dlZC5maWxlLmJhc2VuYW1lKVxuICAgIGZvciAoY29uc3Qgc3VidGFzayBvZiBzdWJ0YXNrcylcbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGFzayhzdWJ0YXNrLCB7IGVxdWlwbzogdGFyZ2V0R3JvdXAgfSlcblxuICAgIGlmICghdGFyZ2V0UGF0aCkge1xuICAgICAgY29uc3QgbmV4dE9yZGVyID0gdGhpcy5yZXNvbHZlTmV4dE9yZGVyRm9yR3JvdXAoYWxsVGFza3MsIGRyYWdnZWQudGFibGVybywgdGFyZ2V0R3JvdXAsIGRyYWdnZWRQYXRoKVxuICAgICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKGRyYWdnZWQsIHsgb3JkZXI6IG5leHRPcmRlciB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IHNpYmxpbmdzID0gYWxsVGFza3NcbiAgICAgICAgLmZpbHRlcih0YXNrID0+ICF0YXNrLnBhcmVudCAmJiB0YXNrLnRhYmxlcm8gPT09IGRyYWdnZWQudGFibGVybyAmJiB0YXNrLmVxdWlwbyA9PT0gdGFyZ2V0R3JvdXAgJiYgdGFzay5maWxlLnBhdGggIT09IGRyYWdnZWRQYXRoKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpXG5cbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gc2libGluZ3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5maWxlLnBhdGggPT09IHRhcmdldFBhdGgpXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSB7XG4gICAgICAgIGNvbnN0IG5leHRPcmRlciA9IHRoaXMucmVzb2x2ZU5leHRPcmRlckZvckdyb3VwKGFsbFRhc2tzLCBkcmFnZ2VkLnRhYmxlcm8sIHRhcmdldEdyb3VwLCBkcmFnZ2VkUGF0aClcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKGRyYWdnZWQsIHsgb3JkZXI6IG5leHRPcmRlciB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGluc2VydEluZGV4ID0gdGFyZ2V0SW5kZXggKyAoaW5zZXJ0UG9zaXRpb24gPT09ICdhZnRlcicgPyAxIDogMClcbiAgICAgICAgY29uc3QgbmV4dE9yZGVyID0gWy4uLnNpYmxpbmdzXVxuICAgICAgICBuZXh0T3JkZXIuc3BsaWNlKGluc2VydEluZGV4LCAwLCBkcmFnZ2VkKVxuICAgICAgICBhd2FpdCBwZXJzaXN0VGFza09yZGVyKG5leHRPcmRlciwgYXN5bmMgKHRhc2ssIG9yZGVyKSA9PiB0aGlzLnVwZGF0ZVRhc2sodGFzaywgeyBvcmRlciB9KSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLnJlYmFsYW5jZUJvYXJkU2NoZWR1bGUoZHJhZ2dlZC50YWJsZXJvLCBwcmV2aW91c0dyb3VwKVxuICAgIGF3YWl0IHRoaXMucmViYWxhbmNlQm9hcmRTY2hlZHVsZShkcmFnZ2VkLnRhYmxlcm8sIHRhcmdldEdyb3VwKVxuICAgIGF3YWl0IHRoaXMucmVuZGVyKClcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUNhcmRJbnNlcnRQb3NpdGlvbihldmVudDogRHJhZ0V2ZW50LCBjYXJkOiBIVE1MRWxlbWVudCk6ICdiZWZvcmUnIHwgJ2FmdGVyJyB7XG4gICAgY29uc3QgYm91bmRzID0gY2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IG1pZHBvaW50ID0gYm91bmRzLnRvcCArIChib3VuZHMuaGVpZ2h0IC8gMilcbiAgICByZXR1cm4gZXZlbnQuY2xpZW50WSA8IG1pZHBvaW50ID8gJ2JlZm9yZScgOiAnYWZ0ZXInXG4gIH1cblxuICBwcml2YXRlIGNsZWFyQ2FyZERyb3BNYXJrZXJzKCkge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmdldFJvb3RFbCgpXG4gICAgcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZWFzLXRhc2stY2FyZC1kcmFnLW92ZXInKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd0YXJlYXMtdGFzay1jYXJkLWRyYWctb3ZlcicpKVxuICAgIHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy10YXNrLWNhcmQtZHJhZy1vdmVyLXRvcCcpLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmVhcy10YXNrLWNhcmQtZHJhZy1vdmVyLXRvcCcpKVxuICAgIHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy10YXNrLWNhcmQtZHJhZy1vdmVyLWJvdHRvbScpLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmVhcy10YXNrLWNhcmQtZHJhZy1vdmVyLWJvdHRvbScpKVxuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlR3JvdXBJbnNlcnRQb3NpdGlvbihldmVudDogRHJhZ0V2ZW50LCBjb2x1bW46IEhUTUxFbGVtZW50KTogJ2JlZm9yZScgfCAnYWZ0ZXInIHtcbiAgICBjb25zdCBib3VuZHMgPSBjb2x1bW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBtaWRwb2ludCA9IGJvdW5kcy5sZWZ0ICsgKGJvdW5kcy53aWR0aCAvIDIpXG4gICAgcmV0dXJuIGV2ZW50LmNsaWVudFggPCBtaWRwb2ludCA/ICdiZWZvcmUnIDogJ2FmdGVyJ1xuICB9XG5cbiAgcHJpdmF0ZSBhbmltYXRlR3JvdXBSZWZsb3coYm9hcmQ6IEhUTUxFbGVtZW50LCBtdXRhdGVEb206ICgpID0+IHZvaWQpIHtcbiAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oYm9hcmQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJzpzY29wZSA+IC50YXJlYXMtZ3JvdXAnKSlcbiAgICBjb25zdCBwcmV2aW91c0JveGVzID0gbmV3IE1hcChpdGVtcy5tYXAoaXRlbSA9PiBbaXRlbSwgaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKV0pKVxuICAgIG11dGF0ZURvbSgpXG5cbiAgICBjb25zdCBuZXh0SXRlbXMgPSBBcnJheS5mcm9tKGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCc6c2NvcGUgPiAudGFyZWFzLWdyb3VwJykpXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIG5leHRJdGVtcykge1xuICAgICAgY29uc3QgcHJldmlvdXNCb3ggPSBwcmV2aW91c0JveGVzLmdldChpdGVtKVxuICAgICAgaWYgKCFwcmV2aW91c0JveClcbiAgICAgICAgY29udGludWVcblxuICAgICAgY29uc3QgbmV4dEJveCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGNvbnN0IG9mZnNldFggPSBwcmV2aW91c0JveC5sZWZ0IC0gbmV4dEJveC5sZWZ0XG4gICAgICBjb25zdCBvZmZzZXRZID0gcHJldmlvdXNCb3gudG9wIC0gbmV4dEJveC50b3BcbiAgICAgIGlmIChNYXRoLmFicyhvZmZzZXRYKSA8IDEgJiYgTWF0aC5hYnMob2Zmc2V0WSkgPCAxKVxuICAgICAgICBjb250aW51ZVxuXG4gICAgICBpdGVtLmFuaW1hdGUoXG4gICAgICAgIFtcbiAgICAgICAgICB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke29mZnNldFh9cHgsICR7b2Zmc2V0WX1weClgIH0sXG4gICAgICAgICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwgMCknIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHsgZHVyYXRpb246IDI0MCwgZWFzaW5nOiAnY3ViaWMtYmV6aWVyKDAuMiwgMC44MiwgMC4yLCAxKScsIGZpbGw6ICdib3RoJyB9LFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJHcm91cERyb3BNYXJrZXJzKGJvYXJkOiBIVE1MRWxlbWVudCkge1xuICAgIGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJlYXMtZ3JvdXAtZHJhZy1vdmVyLWJlZm9yZScpLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmVhcy1ncm91cC1kcmFnLW92ZXItYmVmb3JlJykpXG4gICAgYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLnRhcmVhcy1ncm91cC1kcmFnLW92ZXItYWZ0ZXInKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd0YXJlYXMtZ3JvdXAtZHJhZy1vdmVyLWFmdGVyJykpXG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVOZXh0T3JkZXJGb3JHcm91cChhbGxUYXNrczogVGFza0l0ZW1bXSwgYm9hcmROYW1lOiBzdHJpbmcsIGdyb3VwTmFtZTogc3RyaW5nLCBleGNsdWRlUGF0aDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBzaWJsaW5nT3JkZXJzID0gYWxsVGFza3NcbiAgICAgIC5maWx0ZXIodGFzayA9PiAhdGFzay5wYXJlbnQgJiYgdGFzay50YWJsZXJvID09PSBib2FyZE5hbWUgJiYgdGFzay5lcXVpcG8gPT09IGdyb3VwTmFtZSAmJiB0YXNrLmZpbGUucGF0aCAhPT0gZXhjbHVkZVBhdGgpXG4gICAgICAubWFwKHRhc2sgPT4gTnVtYmVyLmlzRmluaXRlKHRhc2sub3JkZXIpID8gdGFzay5vcmRlciA6IDApXG5cbiAgICBpZiAoc2libGluZ09yZGVycy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gT1JERVJfU1RFUFxuXG4gICAgcmV0dXJuIE1hdGgubWF4KC4uLnNpYmxpbmdPcmRlcnMpICsgT1JERVJfU1RFUFxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyB1cGRhdGVUYXNrKHRhc2s6IFRhc2tJdGVtLCB1cGRhdGVzOiBQYXJ0aWFsPFRhc2tGcm9udG1hdHRlcj4pIHtcbiAgICBhd2FpdCB1cGRhdGVGcm9udG1hdHRlcih0aGlzLmFwcCwgdGFzay5maWxlLCB1cGRhdGVzKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBhcHBseVN0YXRlVHJhbnNpdGlvbihcbiAgICB0YXNrOiBUYXNrSXRlbSxcbiAgICBuZXh0U3RhdHVzOiBzdHJpbmcsXG4gICAgZXhwbGljaXRVcGRhdGVzPzogUGFydGlhbDxUYXNrRnJvbnRtYXR0ZXI+LFxuICAgIG9wdGlvbnM/OiB7IG1vdmVGaWxlPzogYm9vbGVhbiwgc3luY1N1YnRhc2tzV2l0aFBhcmVudD86IGJvb2xlYW4gfSxcbiAgKSB7XG4gICAgY29uc3QgdXBkYXRlcyA9IGV4cGxpY2l0VXBkYXRlcyA/PyB0aGlzLmJ1aWxkU3RhdGVDaGFuZ2VVcGRhdGVzKHRhc2ssIG5leHRTdGF0dXMpXG4gICAgYXdhaXQgdGhpcy51cGRhdGVUYXNrKHRhc2ssIHVwZGF0ZXMpXG5cbiAgICBjb25zdCBzaG91bGRNb3ZlRmlsZSA9IG9wdGlvbnM/Lm1vdmVGaWxlID8/IHRydWVcbiAgICBjb25zdCBzaG91bGRTeW5jU3VidGFza3MgPSBvcHRpb25zPy5zeW5jU3VidGFza3NXaXRoUGFyZW50ID8/IHRydWVcbiAgICBjb25zdCBpc0luQXJjaGl2ZWRGb2xkZXIgPSBpc1Rhc2tJbkNvbXBsZXRlZEZvbGRlcih0YXNrLmZpbGUucGF0aClcbiAgICBpZiAoc2hvdWxkTW92ZUZpbGUgJiYgbmV4dFN0YXR1cyA9PT0gJ0ZpbmFsaXphZGEnKVxuICAgICAgYXdhaXQgbW92ZVRhc2tUb0NvbXBsZXRlZEZvbGRlcih0aGlzLmFwcCwgdGFzay5maWxlLCBCb29sZWFuKHRhc2sucGFyZW50KSlcblxuICAgIGlmIChzaG91bGRNb3ZlRmlsZSAmJiBuZXh0U3RhdHVzID09PSAnQ2FuY2VsYWRhJylcbiAgICAgIGF3YWl0IG1vdmVUYXNrVG9DYW5jZWxsZWRGb2xkZXIodGhpcy5hcHAsIHRhc2suZmlsZSwgQm9vbGVhbih0YXNrLnBhcmVudCkpXG5cbiAgICBpZiAoc2hvdWxkTW92ZUZpbGUgJiYgbmV4dFN0YXR1cyAhPT0gJ0ZpbmFsaXphZGEnICYmIG5leHRTdGF0dXMgIT09ICdDYW5jZWxhZGEnICYmIGlzSW5BcmNoaXZlZEZvbGRlcilcbiAgICAgIGF3YWl0IG1vdmVUYXNrVG9BY3RpdmVGb2xkZXIodGhpcy5hcHAsIHRhc2suZmlsZSwgQm9vbGVhbih0YXNrLnBhcmVudCkpXG5cbiAgICBpZiAoc2hvdWxkTW92ZUZpbGUgJiYgc2hvdWxkU3luY1N1YnRhc2tzICYmICF0YXNrLnBhcmVudCkge1xuICAgICAgaWYgKG5leHRTdGF0dXMgPT09ICdFbiBwcm9ncmVzbycpXG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3VidGFza3NTdGF0dXNGb3JQYXJlbnQodGFzay5maWxlLmJhc2VuYW1lLCAnRW4gcHJvZ3Jlc28nKVxuXG4gICAgICBpZiAobmV4dFN0YXR1cyA9PT0gJ0ZpbmFsaXphZGEnKVxuICAgICAgICBhd2FpdCB0aGlzLm1vdmVTdWJ0YXNrc0ZvclBhcmVudCh0YXNrLmZpbGUuYmFzZW5hbWUsICdGaW5hbGl6YWRhJylcblxuICAgICAgaWYgKG5leHRTdGF0dXMgPT09ICdDYW5jZWxhZGEnKVxuICAgICAgICBhd2FpdCB0aGlzLm1vdmVTdWJ0YXNrc0ZvclBhcmVudCh0YXNrLmZpbGUuYmFzZW5hbWUsICdDYW5jZWxhZGEnKVxuXG4gICAgICBpZiAobmV4dFN0YXR1cyAhPT0gJ0ZpbmFsaXphZGEnICYmIG5leHRTdGF0dXMgIT09ICdDYW5jZWxhZGEnICYmIGlzSW5BcmNoaXZlZEZvbGRlcilcbiAgICAgICAgYXdhaXQgdGhpcy5tb3ZlU3VidGFza3NGb3JQYXJlbnQodGFzay5maWxlLmJhc2VuYW1lLCBudWxsKVxuICAgIH1cblxuICAgIGlmIChuZXh0U3RhdHVzID09PSAnRmluYWxpemFkYScgfHwgbmV4dFN0YXR1cyA9PT0gJ0NhbmNlbGFkYScgfHwgaXNJbkFyY2hpdmVkRm9sZGVyKVxuICAgICAgYXdhaXQgdGhpcy5yZWJhbGFuY2VCb2FyZFNjaGVkdWxlKHRhc2sudGFibGVybywgdGFzay5lcXVpcG8pXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG1vdmVTdWJ0YXNrc0ZvclBhcmVudChwYXJlbnRUYXNrTmFtZTogc3RyaW5nLCBuZXh0VGVybWluYWxTdGF0dXM6ICdGaW5hbGl6YWRhJyB8ICdDYW5jZWxhZGEnIHwgbnVsbCkge1xuICAgIGNvbnN0IHN1YnRhc2tzID0gZ2V0VGFza3ModGhpcy5hcHApLmZpbHRlcihpdGVtID0+IGl0ZW0ucGFyZW50ID09PSBwYXJlbnRUYXNrTmFtZSlcblxuICAgIGZvciAoY29uc3Qgc3VidGFzayBvZiBzdWJ0YXNrcykge1xuICAgICAgaWYgKG5leHRUZXJtaW5hbFN0YXR1cykge1xuICAgICAgICBpZiAoc3VidGFzay5lc3RhZG8gIT09IG5leHRUZXJtaW5hbFN0YXR1cylcbiAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2soc3VidGFzaywgeyBlc3RhZG86IG5leHRUZXJtaW5hbFN0YXR1cyB9KVxuXG4gICAgICAgIGlmIChuZXh0VGVybWluYWxTdGF0dXMgPT09ICdGaW5hbGl6YWRhJylcbiAgICAgICAgICBhd2FpdCBtb3ZlVGFza1RvQ29tcGxldGVkRm9sZGVyKHRoaXMuYXBwLCBzdWJ0YXNrLmZpbGUsIHRydWUpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBhd2FpdCBtb3ZlVGFza1RvQ2FuY2VsbGVkRm9sZGVyKHRoaXMuYXBwLCBzdWJ0YXNrLmZpbGUsIHRydWUpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYXdhaXQgbW92ZVRhc2tUb0FjdGl2ZUZvbGRlcih0aGlzLmFwcCwgc3VidGFzay5maWxlLCB0cnVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgdXBkYXRlU3VidGFza3NTdGF0dXNGb3JQYXJlbnQocGFyZW50VGFza05hbWU6IHN0cmluZywgbmV4dFN0YXR1czogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3VidGFza3MgPSBnZXRUYXNrcyh0aGlzLmFwcCkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wYXJlbnQgPT09IHBhcmVudFRhc2tOYW1lKVxuXG4gICAgZm9yIChjb25zdCBzdWJ0YXNrIG9mIHN1YnRhc2tzKSB7XG4gICAgICBpZiAoc3VidGFzay5lc3RhZG8gPT09IG5leHRTdGF0dXMpXG4gICAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGF3YWl0IHRoaXMuYXBwbHlTdGF0ZVRyYW5zaXRpb24oc3VidGFzaywgbmV4dFN0YXR1cywgdW5kZWZpbmVkLCB7IHN5bmNTdWJ0YXNrc1dpdGhQYXJlbnQ6IGZhbHNlIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZWJhbGFuY2VCb2FyZFNjaGVkdWxlKGJvYXJkTmFtZTogc3RyaW5nLCBncm91cE5hbWU6IHN0cmluZykge1xuICAgIGlmICghYm9hcmROYW1lIHx8ICFncm91cE5hbWUpXG4gICAgICByZXR1cm5cblxuICAgIGF3YWl0IHJlYmFsYW5jZUdyb3VwRW5kRGF0ZXModGhpcy5hcHAsIGJvYXJkTmFtZSwgZ3JvdXBOYW1lKVxuICB9XG5cbiAgcHJpdmF0ZSBjYW5Ecm9wT25Sb3codGFyZ2V0OiBUYXNrSXRlbSwgZGVwdGg6IG51bWJlcikge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZHJhZ1BhdGhcbiAgICAgICYmIHRoaXMuZHJhZ1BhdGggIT09IHRhcmdldC5maWxlLnBhdGhcbiAgICAgICYmIHRoaXMuZHJhZ0RlcHRoID09PSBkZXB0aFxuICAgICAgJiYgdGhpcy5kcmFnUGFyZW50ID09PSB0YXJnZXQucGFyZW50XG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSByZXNldFJvd0RyYWdTdGF0ZSh0Ym9keTogSFRNTEVsZW1lbnQsIHJvdzogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLmRyYWdQYXRoID0gbnVsbFxuICAgIHRoaXMuZHJhZ0RlcHRoID0gbnVsbFxuICAgIHRoaXMuZHJhZ1BhcmVudCA9IG51bGxcbiAgICByb3cucmVtb3ZlQ2xhc3MoJ3RhcmVhcy1yb3ctZHJhZ2dpbmcnKVxuICAgIHRib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJlYXMtcm93LWRyYWctb3ZlcicpLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmVhcy1yb3ctZHJhZy1vdmVyJykpXG4gIH1cblxuICBwcml2YXRlIHJlc2V0Q2FyZERyYWdTdGF0ZShjb250YWluZXI6IEhUTUxFbGVtZW50LCBjYXJkOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuZHJhZ1BhdGggPSBudWxsXG4gICAgdGhpcy5kcmFnRGVwdGggPSBudWxsXG4gICAgdGhpcy5kcmFnUGFyZW50ID0gbnVsbFxuICAgIHRoaXMuZHJhZ0luc2VydFBvc2l0aW9uID0gbnVsbFxuICAgIGNhcmQucmVtb3ZlQ2xhc3MoJ3RhcmVhcy10YXNrLWNhcmQtZHJhZ2dpbmcnKVxuICAgIGNhcmQucmVtb3ZlQ2xhc3MoJ3RhcmVhcy10YXNrLWNhcmQtZHJhZy1wcmV2aWV3JylcbiAgICB0aGlzLmNsZWFyQ2FyZERyb3BNYXJrZXJzKClcbiAgICB0aGlzLmdldFJvb3RFbCgpLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJlYXMtY2FyZC1saXN0LWRyb3AtdGFyZ2V0JykuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgndGFyZWFzLWNhcmQtbGlzdC1kcm9wLXRhcmdldCcpKVxuICB9XG5cbiAgcHJpdmF0ZSByZXNldEdyb3VwRHJhZ1N0YXRlKGJvYXJkOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuZHJhZ0dyb3VwTmFtZSA9IG51bGxcbiAgICB0aGlzLmRyYWdHcm91cENvbHVtbiA9IG51bGxcbiAgICBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZWFzLWdyb3VwLWRyYWdnaW5nJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgndGFyZWFzLWdyb3VwLWRyYWdnaW5nJykpXG4gICAgdGhpcy5jbGVhckdyb3VwRHJvcE1hcmtlcnMoYm9hcmQpXG4gIH1cblxuICBwcml2YXRlIGdldFJvb3RFbCgpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuY29udGFpbmVyRWwuY2hpbGRyZW5bMV1cbiAgICBpZiAoIShyb290IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYXJlYXNWaWV3IHJvb3QgZWxlbWVudCBpcyBub3QgYXZhaWxhYmxlJylcblxuICAgIHJldHVybiByb290XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9ic2lkaWFuIGZyb20gJ29ic2lkaWFuJ1xuXG5pbXBvcnQge1xuICBDQU5DRUxMRURfU1VCVEFTS1NfRk9MREVSLFxuICBDQU5DRUxMRURfVEFTS1NfRk9MREVSLFxuICBDT01QTEVURURfU1VCVEFTS1NfRk9MREVSLFxuICBDT01QTEVURURfVEFTS1NfRk9MREVSLFxuICBERUZBVUxUX0JPQVJEX05BTUUsXG4gIERFRkFVTFRfRVFVSVBPUyxcbiAgREVGQVVMVF9UQUJMRVJPUyxcbiAgSU5ERVhfVEFHLFxuICBMRUdBQ1lfQ09NUExFVEVEX1RBU0tTX0ZPTERFUixcbiAgTE9DS0VEX0VRVUlQT19OQU1FUyxcbiAgU1VCVEFTS19UQUcsXG4gIFRBUkVBU19GT0xERVIsXG4gIFRBU0tfVEFHLFxuICBWSUVXX1RZUEUsXG59IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHRQb21vZG9yb1N0YXRlIH0gZnJvbSAnLi4vZW5naW5lcy9wb21vZG9yb0VuZ2luZSdcbmltcG9ydCB7IHJlYnVpbGRUYXNrQ2hpbGRMaW5rcywgc3luY1Rhc2tUeXBlVGFncyB9IGZyb20gJy4uL2VuZ2luZXMvZnJvbnRtYXR0ZXJFbmdpbmUnXG5pbXBvcnQgeyBnZXRUYXNrcyB9IGZyb20gJy4uL2VuZ2luZXMvdGFza0VuZ2luZSdcbmltcG9ydCB7XG4gIGVuc3VyZUJvYXJkVGFza0luZGV4RmlsZSxcbiAgcmVtb3ZlVGFza0xpbmtGcm9tQ2FuY2VsbGVkSW5kZXgsXG4gIHJlbW92ZVRhc2tMaW5rRnJvbUZpbmlzaGVkSW5kZXgsXG4gIHJlbW92ZVRhc2tMaW5rRnJvbUluZGV4LFxuICBzeW5jQWxsVGFza0luZGV4ZXMsXG4gIHN5bmNSb290VGFza0luZGV4TGlua3MsXG59IGZyb20gJy4uL2VuZ2luZXMvdGFza0luZGV4RW5naW5lJ1xuaW1wb3J0IHsgTmV3VGFza01vZGFsIH0gZnJvbSAnLi4vbW9kYWxzL05ld1Rhc2tNb2RhbCdcbmltcG9ydCB0eXBlIHsgRXF1aXBvLCBQb21vZG9yb1N0YXRlIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBub3JtYWxpemVFcXVpcG9zRnJvbVNldHRpbmdzLCBub3JtYWxpemVQb21vZG9yb0Zyb21TZXR0aW5ncywgbm9ybWFsaXplVGFibGVyb3NGcm9tU2V0dGluZ3MgfSBmcm9tICcuLi91dGlscy9zZXR0aW5ncydcbmltcG9ydCB7IFRhcmVhc1ZpZXcgfSBmcm9tICcuLi92aWV3L1RhcmVhc1ZpZXcnXG5cbmludGVyZmFjZSBHcmFwaEdyb3VwRGVmaW5pdGlvbiB7XG4gIHF1ZXJ5OiBzdHJpbmdcbiAgY29sb3I6IHN0cmluZ1xufVxuXG5leHBvcnQgY2xhc3MgVGFyZWFzUGx1Z2luIGV4dGVuZHMgb2JzaWRpYW4uUGx1Z2luIHtcbiAgdGFibGVyb3M6IEVxdWlwb1tdID0gWy4uLkRFRkFVTFRfVEFCTEVST1NdXG4gIGVxdWlwb3M6IEVxdWlwb1tdID0gWy4uLkRFRkFVTFRfRVFVSVBPU11cbiAgcG9tb2Rvcm86IFBvbW9kb3JvU3RhdGUgPSBjcmVhdGVEZWZhdWx0UG9tb2Rvcm9TdGF0ZSgpXG5cbiAgYXN5bmMgb25sb2FkKCkge1xuICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKClcbiAgICBhd2FpdCB0aGlzLmVuc3VyZURlZmF1bHRCb2FyZEluU2V0dGluZ3MoKVxuXG4gICAgdGhpcy5yZWdpc3RlclZpZXcoVklFV19UWVBFLCBsZWFmID0+IG5ldyBUYXJlYXNWaWV3KGxlYWYsIHRoaXMpKVxuXG4gICAgdGhpcy5hZGRSaWJib25JY29uKCdsaXN0LWNoZWNrcycsICdBYnJpciBUYXJlYXMnLCAoKSA9PiB0aGlzLmFjdGl2YXRlVmlldygpKVxuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnb3Blbi10YXJlYXMtdmlldycsXG4gICAgICBuYW1lOiAnQWJyaXIgdmlzdGEgZGUgVGFyZWFzJyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLmFjdGl2YXRlVmlldygpLFxuICAgIH0pXG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICduZXctdGFyZWEnLFxuICAgICAgbmFtZTogJ051ZXZhIHRhcmVhJyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiBuZXcgTmV3VGFza01vZGFsKHRoaXMuYXBwLCB0aGlzKS5vcGVuKCksXG4gICAgfSlcblxuICAgIGF3YWl0IHRoaXMuZW5zdXJlVGFza3NGb2xkZXIoKVxuICAgIGF3YWl0IHN5bmNBbGxUYXNrSW5kZXhlcyh0aGlzLmFwcClcbiAgICBhd2FpdCByZWJ1aWxkVGFza0NoaWxkTGlua3ModGhpcy5hcHApXG4gICAgYXdhaXQgc3luY1Rhc2tUeXBlVGFncyh0aGlzLmFwcClcbiAgICBhd2FpdCB0aGlzLmVuc3VyZU9ic2lkaWFuR3JhcGhHcm91cHMoKVxuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLnZhdWx0Lm9uKCdkZWxldGUnLCAoZmlsZSkgPT4ge1xuICAgICAgdm9pZCB0aGlzLmhhbmRsZUZpbGVEZWxldGUoZmlsZSlcbiAgICB9KSlcbiAgfVxuXG4gIGFzeW5jIGFjdGl2YXRlVmlldygpIHtcbiAgICBjb25zdCB7IHdvcmtzcGFjZSB9ID0gdGhpcy5hcHBcbiAgICBsZXQgbGVhZiA9IHdvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFKVswXVxuXG4gICAgaWYgKCFsZWFmKSB7XG4gICAgICBsZWFmID0gd29ya3NwYWNlLmdldExlYWYoJ3RhYicpXG4gICAgICBhd2FpdCBsZWFmLnNldFZpZXdTdGF0ZSh7IHR5cGU6IFZJRVdfVFlQRSwgYWN0aXZlOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgd29ya3NwYWNlLnJldmVhbExlYWYobGVhZilcbiAgfVxuXG4gIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcbiAgICBjb25zdCByYXdEYXRhID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gICAgdGhpcy50YWJsZXJvcyA9IG5vcm1hbGl6ZVRhYmxlcm9zRnJvbVNldHRpbmdzKHJhd0RhdGEpXG4gICAgdGhpcy5lcXVpcG9zID0gbm9ybWFsaXplRXF1aXBvc0Zyb21TZXR0aW5ncyhyYXdEYXRhKVxuICAgIHRoaXMucG9tb2Rvcm8gPSBub3JtYWxpemVQb21vZG9yb0Zyb21TZXR0aW5ncyhyYXdEYXRhKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBlbnN1cmVEZWZhdWx0Qm9hcmRJblNldHRpbmdzKCkge1xuICAgIGNvbnN0IGhhc0RlZmF1bHRCb2FyZCA9IHRoaXMudGFibGVyb3Muc29tZShib2FyZCA9PiBib2FyZC5uYW1lID09PSBERUZBVUxUX0JPQVJEX05BTUUpXG4gICAgaWYgKGhhc0RlZmF1bHRCb2FyZClcbiAgICAgIHJldHVyblxuXG4gICAgdGhpcy50YWJsZXJvcy51bnNoaWZ0KHsgbmFtZTogREVGQVVMVF9CT0FSRF9OQU1FLCBjb2xvcjogJyMyZTZkYjAnIH0pXG4gICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKVxuICB9XG5cbiAgYXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEoe1xuICAgICAgdGFibGVyb3M6IHRoaXMudGFibGVyb3MsXG4gICAgICBlcXVpcG9zOiB0aGlzLmVxdWlwb3MsXG4gICAgICBwb21vZG9ybzogdGhpcy5wb21vZG9ybyxcbiAgICB9KVxuICB9XG5cbiAgc2V0UG9tb2Rvcm9TdGF0ZShuZXh0U3RhdGU6IFBvbW9kb3JvU3RhdGUpIHtcbiAgICB0aGlzLnBvbW9kb3JvID0ge1xuICAgICAgLi4ubmV4dFN0YXRlLFxuICAgICAgZHVyYXRpb25zOiB7IC4uLm5leHRTdGF0ZS5kdXJhdGlvbnMgfSxcbiAgICB9XG4gICAgdm9pZCB0aGlzLnNhdmVTZXR0aW5ncygpXG4gIH1cblxuICBhZGRUYWJsZXJvKG5hbWU6IHN0cmluZywgY29sb3IgPSAnIzZiNWNlNycpIHtcbiAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoIW5vcm1hbGl6ZWROYW1lKVxuICAgICAgcmV0dXJuXG5cbiAgICBpZiAodGhpcy50YWJsZXJvcy5zb21lKHRhYmxlcm8gPT4gdGFibGVyby5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lKSlcbiAgICAgIHJldHVyblxuXG4gICAgdGhpcy50YWJsZXJvcy5wdXNoKHsgbmFtZTogbm9ybWFsaXplZE5hbWUsIGNvbG9yIH0pXG4gICAgdm9pZCB0aGlzLmVuc3VyZUJvYXJkV29ya3NwYWNlKG5vcm1hbGl6ZWROYW1lKVxuICAgIHZvaWQgdGhpcy5zYXZlU2V0dGluZ3MoKVxuICB9XG5cbiAgY2FuUmVtb3ZlVGFibGVybyhib2FyZE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRCb2FyZE5hbWUgPSBib2FyZE5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoIW5vcm1hbGl6ZWRCb2FyZE5hbWUgfHwgbm9ybWFsaXplZEJvYXJkTmFtZSA9PT0gREVGQVVMVF9CT0FSRF9OQU1FKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICByZXR1cm4gdGhpcy50YWJsZXJvcy5zb21lKHRhYmxlcm8gPT4gdGFibGVyby5uYW1lID09PSBub3JtYWxpemVkQm9hcmROYW1lKVxuICB9XG5cbiAgYXN5bmMgcmVtb3ZlVGFibGVybyhib2FyZE5hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRCb2FyZE5hbWUgPSBib2FyZE5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoIXRoaXMuY2FuUmVtb3ZlVGFibGVybyhub3JtYWxpemVkQm9hcmROYW1lKSlcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgY29uc3QgYm9hcmRUYXNrUGF0aHMgPSBuZXcgU2V0KFxuICAgICAgZ2V0VGFza3ModGhpcy5hcHApXG4gICAgICAgIC5maWx0ZXIodGFzayA9PiB0YXNrLnRhYmxlcm8gPT09IG5vcm1hbGl6ZWRCb2FyZE5hbWUpXG4gICAgICAgIC5tYXAodGFzayA9PiB0YXNrLmZpbGUucGF0aCksXG4gICAgKVxuXG4gICAgZm9yIChjb25zdCB0YXNrUGF0aCBvZiBib2FyZFRhc2tQYXRocykge1xuICAgICAgY29uc3QgdGFza0ZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgodGFza1BhdGgpXG4gICAgICBpZiAoISh0YXNrRmlsZSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGaWxlKSlcbiAgICAgICAgY29udGludWVcblxuICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuZGVsZXRlKHRhc2tGaWxlLCB0cnVlKVxuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGVkVGFza1BhdGggPSB0aGlzLnBvbW9kb3JvLnNlbGVjdGVkVGFza1BhdGhcbiAgICBpZiAoc2VsZWN0ZWRUYXNrUGF0aCAmJiBib2FyZFRhc2tQYXRocy5oYXMoc2VsZWN0ZWRUYXNrUGF0aCkpIHtcbiAgICAgIHRoaXMucG9tb2Rvcm8gPSB7XG4gICAgICAgIC4uLnRoaXMucG9tb2Rvcm8sXG4gICAgICAgIGR1cmF0aW9uczogeyAuLi50aGlzLnBvbW9kb3JvLmR1cmF0aW9ucyB9LFxuICAgICAgICBzZWxlY3RlZFRhc2tQYXRoOiBudWxsLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGFibGVyb3MgPSB0aGlzLnRhYmxlcm9zLmZpbHRlcih0YWJsZXJvID0+IHRhYmxlcm8ubmFtZSAhPT0gbm9ybWFsaXplZEJvYXJkTmFtZSlcbiAgICB0aGlzLmVxdWlwb3MgPSB0aGlzLmVxdWlwb3MuZmlsdGVyKGVxdWlwbyA9PiAoZXF1aXBvLnRhYmxlcm8gfHwgREVGQVVMVF9CT0FSRF9OQU1FKSAhPT0gbm9ybWFsaXplZEJvYXJkTmFtZSlcblxuICAgIGF3YWl0IHRoaXMucmVtb3ZlQm9hcmRGb2xkZXJzKG5vcm1hbGl6ZWRCb2FyZE5hbWUpXG4gICAgYXdhaXQgc3luY1Jvb3RUYXNrSW5kZXhMaW5rcyh0aGlzLmFwcClcbiAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGFkZEVxdWlwbyhuYW1lOiBzdHJpbmcsIGNvbG9yID0gJyM2YjVjZTcnKSB7XG4gICAgdGhpcy5hZGRFcXVpcG9JblRhYmxlcm8obmFtZSwgY29sb3IsIHRoaXMudGFibGVyb3NbMF0/Lm5hbWUgfHwgJ2RlZmF1bHQnKVxuICB9XG5cbiAgYWRkRXF1aXBvSW5UYWJsZXJvKG5hbWU6IHN0cmluZywgY29sb3IgPSAnIzZiNWNlNycsIGJvYXJkTmFtZSA9ICdkZWZhdWx0Jykge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gbmFtZS50cmltKClcbiAgICBjb25zdCBub3JtYWxpemVkQm9hcmROYW1lID0gYm9hcmROYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKCFub3JtYWxpemVkTmFtZSlcbiAgICAgIHJldHVyblxuXG4gICAgaWYgKHRoaXMuZXF1aXBvcy5zb21lKGVxdWlwbyA9PiBlcXVpcG8ubmFtZSA9PT0gbm9ybWFsaXplZE5hbWUgJiYgKGVxdWlwby50YWJsZXJvIHx8ICdkZWZhdWx0JykgPT09IG5vcm1hbGl6ZWRCb2FyZE5hbWUpKVxuICAgICAgcmV0dXJuXG5cbiAgICB0aGlzLmVxdWlwb3MucHVzaCh7IG5hbWU6IG5vcm1hbGl6ZWROYW1lLCBjb2xvciwgdGFibGVybzogbm9ybWFsaXplZEJvYXJkTmFtZSB9KVxuICAgIHZvaWQgdGhpcy5zYXZlU2V0dGluZ3MoKVxuICB9XG5cbiAgcmVtb3ZlRXF1aXBvKG5hbWU6IHN0cmluZywgYm9hcmROYW1lID0gJ2RlZmF1bHQnKTogYm9vbGVhbiB7XG4gICAgaWYgKExPQ0tFRF9FUVVJUE9fTkFNRVMuaW5jbHVkZXMobmFtZSkpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIGNvbnN0IG5vcm1hbGl6ZWRCb2FyZE5hbWUgPSBib2FyZE5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBuZXh0RXF1aXBvcyA9IHRoaXMuZXF1aXBvcy5maWx0ZXIoZXF1aXBvID0+ICEoZXF1aXBvLm5hbWUgPT09IG5hbWUgJiYgKGVxdWlwby50YWJsZXJvIHx8ICdkZWZhdWx0JykgPT09IG5vcm1hbGl6ZWRCb2FyZE5hbWUpKVxuICAgIGlmIChuZXh0RXF1aXBvcy5sZW5ndGggPT09IHRoaXMuZXF1aXBvcy5sZW5ndGgpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIHRoaXMuZXF1aXBvcyA9IG5leHRFcXVpcG9zXG4gICAgdm9pZCB0aGlzLnNhdmVTZXR0aW5ncygpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHVwZGF0ZUVxdWlwbyhuYW1lOiBzdHJpbmcsIGJvYXJkTmFtZTogc3RyaW5nLCB1cGRhdGVzOiBQYXJ0aWFsPEVxdWlwbz4pIHtcbiAgICBjb25zdCBub3JtYWxpemVkQm9hcmROYW1lID0gYm9hcmROYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgdGVhbSA9IHRoaXMuZXF1aXBvcy5maW5kKGVxdWlwbyA9PiBlcXVpcG8ubmFtZSA9PT0gbmFtZSAmJiAoZXF1aXBvLnRhYmxlcm8gfHwgJ2RlZmF1bHQnKSA9PT0gbm9ybWFsaXplZEJvYXJkTmFtZSlcbiAgICBpZiAoIXRlYW0pXG4gICAgICByZXR1cm5cblxuICAgIE9iamVjdC5hc3NpZ24odGVhbSwgdXBkYXRlcylcbiAgICB2b2lkIHRoaXMuc2F2ZVNldHRpbmdzKClcbiAgfVxuXG4gIGdldEVxdWlwb3NGb3JUYWJsZXJvKGJvYXJkTmFtZTogc3RyaW5nKTogRXF1aXBvW10ge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRCb2FyZE5hbWUgPSBib2FyZE5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICByZXR1cm4gdGhpcy5lcXVpcG9zLmZpbHRlcihlcXVpcG8gPT4gKGVxdWlwby50YWJsZXJvIHx8ICdkZWZhdWx0JykgPT09IG5vcm1hbGl6ZWRCb2FyZE5hbWUpXG4gIH1cblxuICBhc3luYyByZW9yZGVyRXF1aXBvSW5UYWJsZXJvKFxuICAgIGJvYXJkTmFtZTogc3RyaW5nLFxuICAgIGRyYWdnZWRHcm91cE5hbWU6IHN0cmluZyxcbiAgICB0YXJnZXRHcm91cE5hbWU6IHN0cmluZyxcbiAgICBpbnNlcnRQb3NpdGlvbjogJ2JlZm9yZScgfCAnYWZ0ZXInLFxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBub3JtYWxpemVkQm9hcmROYW1lID0gYm9hcmROYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKCFub3JtYWxpemVkQm9hcmROYW1lKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBjb25zdCBib2FyZEdyb3VwcyA9IHRoaXMuZ2V0RXF1aXBvc0ZvclRhYmxlcm8obm9ybWFsaXplZEJvYXJkTmFtZSlcbiAgICBjb25zdCBmcm9tSW5kZXggPSBib2FyZEdyb3Vwcy5maW5kSW5kZXgoZ3JvdXAgPT4gZ3JvdXAubmFtZSA9PT0gZHJhZ2dlZEdyb3VwTmFtZSlcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGJvYXJkR3JvdXBzLmZpbmRJbmRleChncm91cCA9PiBncm91cC5uYW1lID09PSB0YXJnZXRHcm91cE5hbWUpXG4gICAgaWYgKGZyb21JbmRleCA8IDAgfHwgdGFyZ2V0SW5kZXggPCAwIHx8IGZyb21JbmRleCA9PT0gdGFyZ2V0SW5kZXgpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIGNvbnN0IG5leHRCb2FyZEdyb3VwcyA9IFsuLi5ib2FyZEdyb3Vwc11cbiAgICBjb25zdCBbZHJhZ2dlZF0gPSBuZXh0Qm9hcmRHcm91cHMuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICBsZXQgbmV4dEluZGV4ID0gbmV4dEJvYXJkR3JvdXBzLmZpbmRJbmRleChncm91cCA9PiBncm91cC5uYW1lID09PSB0YXJnZXRHcm91cE5hbWUpXG4gICAgaWYgKG5leHRJbmRleCA8IDApXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIGlmIChpbnNlcnRQb3NpdGlvbiA9PT0gJ2FmdGVyJylcbiAgICAgIG5leHRJbmRleCArPSAxXG5cbiAgICBuZXh0Qm9hcmRHcm91cHMuc3BsaWNlKG5leHRJbmRleCwgMCwgZHJhZ2dlZClcblxuICAgIGNvbnN0IG9yZGVyZWRHcm91cE5hbWVzID0gbmV4dEJvYXJkR3JvdXBzLm1hcChncm91cCA9PiBncm91cC5uYW1lKVxuICAgIHJldHVybiB0aGlzLnNldEVxdWlwb3NPcmRlckZvclRhYmxlcm8obm9ybWFsaXplZEJvYXJkTmFtZSwgb3JkZXJlZEdyb3VwTmFtZXMpXG4gIH1cblxuICBhc3luYyBzZXRFcXVpcG9zT3JkZXJGb3JUYWJsZXJvKGJvYXJkTmFtZTogc3RyaW5nLCBvcmRlcmVkR3JvdXBOYW1lczogc3RyaW5nW10pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBub3JtYWxpemVkQm9hcmROYW1lID0gYm9hcmROYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKCFub3JtYWxpemVkQm9hcmROYW1lKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBjb25zdCBib2FyZEdyb3VwcyA9IHRoaXMuZ2V0RXF1aXBvc0ZvclRhYmxlcm8obm9ybWFsaXplZEJvYXJkTmFtZSlcbiAgICBpZiAoYm9hcmRHcm91cHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBjb25zdCB1bmlxdWVPcmRlcmVkTmFtZXMgPSBBcnJheS5mcm9tKG5ldyBTZXQob3JkZXJlZEdyb3VwTmFtZXMpKVxuICAgIGlmICh1bmlxdWVPcmRlcmVkTmFtZXMubGVuZ3RoICE9PSBib2FyZEdyb3Vwcy5sZW5ndGgpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIGNvbnN0IG9yZGVyZWRHcm91cEJ5TmFtZSA9IG5ldyBNYXAoYm9hcmRHcm91cHMubWFwKGdyb3VwID0+IFtncm91cC5uYW1lLCBncm91cF0pKVxuICAgIGNvbnN0IG5leHRCb2FyZEdyb3VwczogRXF1aXBvW10gPSBbXVxuICAgIGZvciAoY29uc3QgZ3JvdXBOYW1lIG9mIHVuaXF1ZU9yZGVyZWROYW1lcykge1xuICAgICAgY29uc3QgZ3JvdXAgPSBvcmRlcmVkR3JvdXBCeU5hbWUuZ2V0KGdyb3VwTmFtZSlcbiAgICAgIGlmICghZ3JvdXApXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgICBuZXh0Qm9hcmRHcm91cHMucHVzaChncm91cClcbiAgICB9XG5cbiAgICBsZXQgYm9hcmRQb2ludGVyID0gMFxuICAgIHRoaXMuZXF1aXBvcyA9IHRoaXMuZXF1aXBvcy5tYXAoKGVxdWlwbykgPT4ge1xuICAgICAgaWYgKChlcXVpcG8udGFibGVybyB8fCAnZGVmYXVsdCcpICE9PSBub3JtYWxpemVkQm9hcmROYW1lKVxuICAgICAgICByZXR1cm4gZXF1aXBvXG5cbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gbmV4dEJvYXJkR3JvdXBzW2JvYXJkUG9pbnRlcl1cbiAgICAgIGJvYXJkUG9pbnRlciArPSAxXG4gICAgICByZXR1cm4gcmVwbGFjZW1lbnQgfHwgZXF1aXBvXG4gICAgfSlcblxuICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBlbnN1cmVUYXNrc0ZvbGRlcigpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5lbnN1cmVGb2xkZXJQYXRoKFRBUkVBU19GT0xERVIpXG4gICAgICBhd2FpdCB0aGlzLmVuc3VyZUZvbGRlclBhdGgoQ09NUExFVEVEX1RBU0tTX0ZPTERFUilcbiAgICAgIGF3YWl0IHRoaXMuZW5zdXJlRm9sZGVyUGF0aChDT01QTEVURURfU1VCVEFTS1NfRk9MREVSKVxuICAgICAgYXdhaXQgdGhpcy5lbnN1cmVGb2xkZXJQYXRoKENBTkNFTExFRF9UQVNLU19GT0xERVIpXG4gICAgICBhd2FpdCB0aGlzLmVuc3VyZUZvbGRlclBhdGgoQ0FOQ0VMTEVEX1NVQlRBU0tTX0ZPTERFUilcbiAgICAgIGNvbnN0IGJvYXJkTmFtZXMgPSBuZXcgU2V0PHN0cmluZz4oW1xuICAgICAgICAuLi50aGlzLnRhYmxlcm9zLm1hcChib2FyZCA9PiBib2FyZC5uYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpKS5maWx0ZXIoQm9vbGVhbiksXG4gICAgICAgIC4uLnRoaXMuZ2V0RXhpc3RpbmdCb2FyZEZvbGRlck5hbWVzKCksXG4gICAgICBdKVxuICAgICAgYm9hcmROYW1lcy5hZGQoREVGQVVMVF9CT0FSRF9OQU1FKVxuXG4gICAgICBmb3IgKGNvbnN0IGJvYXJkTmFtZSBvZiBib2FyZE5hbWVzKVxuICAgICAgICBhd2FpdCB0aGlzLmVuc3VyZUJvYXJkV29ya3NwYWNlKGJvYXJkTmFtZSlcbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShgTm8gc2UgcHVkbyBjcmVhciBsYSBjYXJwZXRhIFwiJHtUQVJFQVNfRk9MREVSfVwiLmApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZW5zdXJlQm9hcmRGb2xkZXJzKGJvYXJkTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IGJvYXJkTmFtZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICAgIGlmICghbm9ybWFsaXplZClcbiAgICAgIHJldHVyblxuXG4gICAgYXdhaXQgdGhpcy5lbnN1cmVGb2xkZXJQYXRoKGAke1RBUkVBU19GT0xERVJ9LyR7bm9ybWFsaXplZH1gKVxuICAgIGF3YWl0IHRoaXMuZW5zdXJlRm9sZGVyUGF0aChgJHtUQVJFQVNfRk9MREVSfS8ke25vcm1hbGl6ZWR9L3N1YlRhc2tzYClcbiAgfVxuXG4gIGFzeW5jIGVuc3VyZUJvYXJkV29ya3NwYWNlKGJvYXJkTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IGJvYXJkTmFtZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICAgIGlmICghbm9ybWFsaXplZClcbiAgICAgIHJldHVyblxuXG4gICAgYXdhaXQgdGhpcy5lbnN1cmVCb2FyZEZvbGRlcnMobm9ybWFsaXplZClcbiAgICBhd2FpdCBlbnN1cmVCb2FyZFRhc2tJbmRleEZpbGUodGhpcy5hcHAsIG5vcm1hbGl6ZWQpXG4gICAgYXdhaXQgc3luY1Jvb3RUYXNrSW5kZXhMaW5rcyh0aGlzLmFwcClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVtb3ZlQm9hcmRGb2xkZXJzKGJvYXJkTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgYm9hcmRSb290UGF0aCA9IGAke1RBUkVBU19GT0xERVJ9LyR7Ym9hcmROYW1lfWBcbiAgICBjb25zdCBib2FyZFN1YnRhc2tzUGF0aCA9IGAke2JvYXJkUm9vdFBhdGh9L3N1YlRhc2tzYFxuICAgIGF3YWl0IHRoaXMuZGVsZXRlRm9sZGVySWZFeGlzdHMoYm9hcmRTdWJ0YXNrc1BhdGgpXG4gICAgYXdhaXQgdGhpcy5kZWxldGVGb2xkZXJJZkV4aXN0cyhib2FyZFJvb3RQYXRoKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBkZWxldGVGb2xkZXJJZkV4aXN0cyhwYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBhYnN0cmFjdEZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aClcbiAgICBpZiAoIShhYnN0cmFjdEZpbGUgaW5zdGFuY2VvZiBvYnNpZGlhbi5URm9sZGVyKSlcbiAgICAgIHJldHVyblxuXG4gICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuZGVsZXRlKGFic3RyYWN0RmlsZSwgdHJ1ZSlcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZW5zdXJlRm9sZGVyUGF0aChwYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBhZGFwdGVyID0gdGhpcy5hcHAudmF1bHQuYWRhcHRlclxuICAgIGNvbnN0IHNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLycpLmZpbHRlcihCb29sZWFuKVxuICAgIGxldCBjdXJyZW50UGF0aCA9ICcnXG5cbiAgICBmb3IgKGNvbnN0IHNlZ21lbnQgb2Ygc2VnbWVudHMpIHtcbiAgICAgIGN1cnJlbnRQYXRoID0gY3VycmVudFBhdGggPyBgJHtjdXJyZW50UGF0aH0vJHtzZWdtZW50fWAgOiBzZWdtZW50XG4gICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChjdXJyZW50UGF0aClcblxuICAgICAgaWYgKGV4aXN0aW5nIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZvbGRlcilcbiAgICAgICAgY29udGludWVcblxuICAgICAgaWYgKGV4aXN0aW5nKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4aXN0ZSB1biBhcmNoaXZvIGxsYW1hZG8gXCIke2N1cnJlbnRQYXRofVwiLmApXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihjdXJyZW50UGF0aClcbiAgICAgIH1cbiAgICAgIGNhdGNoIHtcbiAgICAgICAgY29uc3QgcmV0cnkgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoY3VycmVudFBhdGgpXG4gICAgICAgIGlmIChyZXRyeSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGb2xkZXIpXG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBpZiAoYXdhaXQgYWRhcHRlci5leGlzdHMoY3VycmVudFBhdGgpKVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBzZSBwdWRvIGNyZWFyIGxhIGNhcnBldGEgXCIke2N1cnJlbnRQYXRofVwiLmApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRFeGlzdGluZ0JvYXJkRm9sZGVyTmFtZXMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHJvb3RGb2xkZXIgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoVEFSRUFTX0ZPTERFUilcbiAgICBpZiAoIShyb290Rm9sZGVyIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZvbGRlcikpXG4gICAgICByZXR1cm4gW11cblxuICAgIGNvbnN0IGV4Y2x1ZGVkRm9sZGVycyA9IG5ldyBTZXQoW1xuICAgICAgQ09NUExFVEVEX1RBU0tTX0ZPTERFUi5zcGxpdCgnLycpLnBvcCgpID8/ICcnLFxuICAgICAgQ0FOQ0VMTEVEX1RBU0tTX0ZPTERFUi5zcGxpdCgnLycpLnBvcCgpID8/ICcnLFxuICAgICAgTEVHQUNZX0NPTVBMRVRFRF9UQVNLU19GT0xERVIuc3BsaXQoJy8nKS5wb3AoKSA/PyAnJyxcbiAgICBdKVxuXG4gICAgcmV0dXJuIHJvb3RGb2xkZXIuY2hpbGRyZW5cbiAgICAgIC5maWx0ZXIoKGNoaWxkKTogY2hpbGQgaXMgb2JzaWRpYW4uVEZvbGRlciA9PiBjaGlsZCBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGb2xkZXIpXG4gICAgICAubWFwKGZvbGRlciA9PiBmb2xkZXIubmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSlcbiAgICAgIC5maWx0ZXIobmFtZSA9PiBCb29sZWFuKG5hbWUpICYmICFleGNsdWRlZEZvbGRlcnMuaGFzKG5hbWUpKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVGaWxlRGVsZXRlKGZpbGU6IG9ic2lkaWFuLlRBYnN0cmFjdEZpbGUpIHtcbiAgICBpZiAoIShmaWxlIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZpbGUpKVxuICAgICAgcmV0dXJuXG5cbiAgICBpZiAoZmlsZS5leHRlbnNpb24gIT09ICdtZCcpXG4gICAgICByZXR1cm5cblxuICAgIGlmICghZmlsZS5wYXRoLnN0YXJ0c1dpdGgoYCR7VEFSRUFTX0ZPTERFUn0vYCkpXG4gICAgICByZXR1cm5cblxuICAgIGF3YWl0IHJlbW92ZVRhc2tMaW5rRnJvbUluZGV4KHRoaXMuYXBwLCBmaWxlKVxuICAgIGF3YWl0IHJlbW92ZVRhc2tMaW5rRnJvbUZpbmlzaGVkSW5kZXgodGhpcy5hcHAsIGZpbGUpXG4gICAgYXdhaXQgcmVtb3ZlVGFza0xpbmtGcm9tQ2FuY2VsbGVkSW5kZXgodGhpcy5hcHAsIGZpbGUpXG4gICAgYXdhaXQgcmVidWlsZFRhc2tDaGlsZExpbmtzKHRoaXMuYXBwKVxuICAgIGF3YWl0IHN5bmNUYXNrVHlwZVRhZ3ModGhpcy5hcHApXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGVuc3VyZU9ic2lkaWFuR3JhcGhHcm91cHMoKSB7XG4gICAgY29uc3QgZGVzaXJlZEdyb3VwczogR3JhcGhHcm91cERlZmluaXRpb25bXSA9IFtcbiAgICAgIHsgcXVlcnk6IGB0YWc6IyR7SU5ERVhfVEFHfWAsIGNvbG9yOiAnIzdjNWNlNycgfSxcbiAgICAgIHsgcXVlcnk6IGB0YWc6IyR7VEFTS19UQUd9YCwgY29sb3I6ICcjMmU2ZGIwJyB9LFxuICAgICAgeyBxdWVyeTogYHRhZzojJHtTVUJUQVNLX1RBR31gLCBjb2xvcjogJyMwMGI4OTQnIH0sXG4gICAgXVxuXG4gICAgYXdhaXQgdGhpcy5lbnN1cmVHcmFwaENvbmZpZ0dyb3VwcyhkZXNpcmVkR3JvdXBzKVxuICAgIHRoaXMuZW5zdXJlUnVudGltZUdyYXBoR3JvdXBzKGRlc2lyZWRHcm91cHMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGVuc3VyZUdyYXBoQ29uZmlnR3JvdXBzKGRlc2lyZWRHcm91cHM6IEdyYXBoR3JvdXBEZWZpbml0aW9uW10pIHtcbiAgICBjb25zdCBhZGFwdGVyID0gdGhpcy5hcHAudmF1bHQuYWRhcHRlclxuICAgIGNvbnN0IGNvbmZpZ0RpciA9IHRoaXMuYXBwLnZhdWx0LmNvbmZpZ0RpclxuICAgIGNvbnN0IGdyYXBoQ29uZmlnUGF0aCA9IGAke2NvbmZpZ0Rpcn0vZ3JhcGguanNvbmBcblxuICAgIGxldCBncmFwaENvbmZpZzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fVxuICAgIHRyeSB7XG4gICAgICBpZiAoYXdhaXQgYWRhcHRlci5leGlzdHMoZ3JhcGhDb25maWdQYXRoKSkge1xuICAgICAgICBjb25zdCByYXdDb25maWcgPSBhd2FpdCBhZGFwdGVyLnJlYWQoZ3JhcGhDb25maWdQYXRoKVxuICAgICAgICBncmFwaENvbmZpZyA9IHJhd0NvbmZpZy50cmltKCkgPyBKU09OLnBhcnNlKHJhd0NvbmZpZykgOiB7fVxuICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICBncmFwaENvbmZpZyA9IHt9XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudEdyb3VwcyA9IEFycmF5LmlzQXJyYXkoZ3JhcGhDb25maWcuZ3JvdXBzKSA/IGdyYXBoQ29uZmlnLmdyb3VwcyA6IFtdXG4gICAgZ3JhcGhDb25maWcuZ3JvdXBzID0gdGhpcy5tZXJnZUdyYXBoR3JvdXBzKGN1cnJlbnRHcm91cHMsIGRlc2lyZWRHcm91cHMpXG5cbiAgICBhd2FpdCBhZGFwdGVyLndyaXRlKGdyYXBoQ29uZmlnUGF0aCwgSlNPTi5zdHJpbmdpZnkoZ3JhcGhDb25maWcsIG51bGwsIDIpKVxuICB9XG5cbiAgcHJpdmF0ZSBlbnN1cmVSdW50aW1lR3JhcGhHcm91cHMoZGVzaXJlZEdyb3VwczogR3JhcGhHcm91cERlZmluaXRpb25bXSkge1xuICAgIGNvbnN0IGFwcFdpdGhJbnRlcm5hbHMgPSB0aGlzLmFwcCBhcyB1bmtub3duIGFzIHtcbiAgICAgIGludGVybmFsUGx1Z2lucz86IHtcbiAgICAgICAgcGx1Z2lucz86IFJlY29yZDxzdHJpbmcsIHtcbiAgICAgICAgICBpbnN0YW5jZT86IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgICAgIH0+XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ3JhcGhJbnN0YW5jZSA9IGFwcFdpdGhJbnRlcm5hbHMuaW50ZXJuYWxQbHVnaW5zPy5wbHVnaW5zPy5ncmFwaD8uaW5zdGFuY2VcbiAgICBpZiAoIWdyYXBoSW5zdGFuY2UpXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IGNhbmRpZGF0ZUhvbGRlcnMgPSBbXG4gICAgICBncmFwaEluc3RhbmNlLm9wdGlvbnMsXG4gICAgICBncmFwaEluc3RhbmNlLmxvY2FsR3JhcGhPcHRpb25zLFxuICAgICAgZ3JhcGhJbnN0YW5jZS5nbG9iYWxHcmFwaE9wdGlvbnMsXG4gICAgXSBhcyBBcnJheTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZD5cblxuICAgIGZvciAoY29uc3QgaG9sZGVyIG9mIGNhbmRpZGF0ZUhvbGRlcnMpIHtcbiAgICAgIGlmICghaG9sZGVyIHx8ICFBcnJheS5pc0FycmF5KGhvbGRlci5ncm91cHMpKVxuICAgICAgICBjb250aW51ZVxuXG4gICAgICBob2xkZXIuZ3JvdXBzID0gdGhpcy5tZXJnZUdyYXBoR3JvdXBzKGhvbGRlci5ncm91cHMsIGRlc2lyZWRHcm91cHMpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtZXJnZUdyYXBoR3JvdXBzKFxuICAgIGN1cnJlbnRHcm91cHM6IHVua25vd25bXSxcbiAgICBkZXNpcmVkR3JvdXBzOiBHcmFwaEdyb3VwRGVmaW5pdGlvbltdLFxuICApOiBBcnJheTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRDdXJyZW50ID0gY3VycmVudEdyb3Vwc1xuICAgICAgLmZpbHRlcigoZ3JvdXApOiBncm91cCBpcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9PiBCb29sZWFuKGdyb3VwKSAmJiB0eXBlb2YgZ3JvdXAgPT09ICdvYmplY3QnKVxuICAgICAgLmZpbHRlcihncm91cCA9PiB0eXBlb2YgZ3JvdXAucXVlcnkgPT09ICdzdHJpbmcnKVxuXG4gICAgY29uc3QgYnlRdWVyeSA9IG5ldyBNYXA8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4oKVxuICAgIGZvciAoY29uc3QgZ3JvdXAgb2Ygbm9ybWFsaXplZEN1cnJlbnQpXG4gICAgICBieVF1ZXJ5LnNldChncm91cC5xdWVyeSBhcyBzdHJpbmcsIHsgLi4uZ3JvdXAgfSlcblxuICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgZGVzaXJlZEdyb3Vwcykge1xuICAgICAgY29uc3QgZXhpc3RpbmcgPSBieVF1ZXJ5LmdldChncm91cC5xdWVyeSlcbiAgICAgIGlmIChleGlzdGluZykge1xuICAgICAgICBpZiAoIWV4aXN0aW5nLmNvbG9yKVxuICAgICAgICAgIGV4aXN0aW5nLmNvbG9yID0gZ3JvdXAuY29sb3JcbiAgICAgICAgYnlRdWVyeS5zZXQoZ3JvdXAucXVlcnksIGV4aXN0aW5nKVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBieVF1ZXJ5LnNldChncm91cC5xdWVyeSwgeyBxdWVyeTogZ3JvdXAucXVlcnksIGNvbG9yOiBncm91cC5jb2xvciB9KVxuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5mcm9tKGJ5UXVlcnkudmFsdWVzKCkpXG4gIH1cbn1cbiIsImltcG9ydCB7IFRhcmVhc1BsdWdpbiB9IGZyb20gJy4vdGFza01hbm5hZ2VyL3BsdWdpbi9UYXJlYXNQbHVnaW4nXG5cbmV4cG9ydCB7IFRhcmVhc1BsdWdpbiB9XG5leHBvcnQgZGVmYXVsdCBUYXJlYXNQbHVnaW5cbiIsImltcG9ydCB7IGdldERlZmF1bHRFeHBvcnRGcm9tQ2pzIH0gZnJvbSBcIlx1MDAwMGNvbW1vbmpzSGVscGVycy5qc1wiO1xuaW1wb3J0IHsgX19yZXF1aXJlIGFzIHJlcXVpcmVUYXNrTWFubmFnZXIgfSBmcm9tIFwiL2hvbWUvZ2FicmllbC9EZXNrdG9wL3JlcG9zL3Rhc2stbWFubmFnZXIvc3JjL3Rhc2tNYW5uYWdlci50c1wiO1xudmFyIHRhc2tNYW5uYWdlckV4cG9ydHMgPSByZXF1aXJlVGFza01hbm5hZ2VyKCk7XG5leHBvcnQgeyB0YXNrTWFubmFnZXJFeHBvcnRzIGFzIF9fbW9kdWxlRXhwb3J0cyB9O1xuZXhwb3J0IGRlZmF1bHQgLypAX19QVVJFX18qL2dldERlZmF1bHRFeHBvcnRGcm9tQ2pzKHRhc2tNYW5uYWdlckV4cG9ydHMpOyJdLCJuYW1lcyI6WyJyZXF1aXJlJCQwIiwicmVxdWlyZSQkMSIsIm5leHREdXJhdGlvbiIsInJlcXVpcmUkJDIiLCJyZXF1aXJlJCQzIiwicmVxdWlyZSQkNCIsInJlcXVpcmUkJDUiLCJyZXF1aXJlJCQ2Iiwibm9ybWFsaXplZCIsInJlcXVpcmUkJDciLCJyZXF1aXJlJCQ4IiwicmVxdWlyZSQkOSIsInJlcXVpcmUkJDEwIiwicmVxdWlyZSQkMTEiLCJyZXF1aXJlJCQxMiIsInJlcXVpcmUkJDEzIiwicmVxdWlyZSQkMTQiLCJyZXF1aXJlJCQxNSIsInJlcXVpcmUkJDE2IiwicmVxdWlyZSQkMTciLCJyZXF1aXJlJCQxOCIsInJlcXVpcmUkJDE5IiwidGFza01hbm5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUEsSUFBQSxpQkFBQSxHQUFBLEVBQUE7Q0FBQSxRQUFBLENBQUEsaUJBQUEsRUFBQTtHQUFBLHlCQUFBLEVBQUEsTUFBQSx5QkFBQTtHQUFBLHNC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
