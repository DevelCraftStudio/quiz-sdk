import { createSession, finishSession } from "../core/api.js";

// ------------------------------------------
// Configuração da sessão
// ------------------------------------------

const TIMEOUT = 5 * 60 * 1000; // 5 minutos

const ACTIVITY_EVENTS = [
  "mousedown",
  "keydown",
  "pointermove",
  "scroll",
  "input",
  "touchstart",
];


// ------------------------------------------
// Estado da sessão
// ------------------------------------------

let inactivityTimer;
let sessionFinished = false;
let initialized = false;


// ------------------------------------------
// Inicialização
// ------------------------------------------

export function initializeSession() {
  if (initialized) {
    return;
  }

  initialized = true;

  resetInactivityTimer();

  ACTIVITY_EVENTS.forEach((event) => {
    window.addEventListener(event, resetInactivityTimer);
  });

  window.addEventListener("pointerdown", restartSession);
  window.addEventListener("pagehide", finish);
}


// ------------------------------------------
// Controle de inatividade
// ------------------------------------------

function resetInactivityTimer() {
  if (sessionFinished) {
    return;
  }

  clearTimeout(inactivityTimer);

  inactivityTimer = setTimeout(finish, TIMEOUT);
}


// ------------------------------------------
// Finalização da sessão
// ------------------------------------------

async function finish() {
  if (sessionFinished) {
    return;
  }

  sessionFinished = true;

  clearTimeout(inactivityTimer);

  try {
    await finishSession();
  } catch (error) {
    console.error("Erro ao finalizar sessão:", error);
  }
}


// ------------------------------------------
// Reativação da sessão
// ------------------------------------------

async function restartSession() {
  if (!sessionFinished) {
    return;
  }

  try {
    await createSession();

    sessionFinished = false;

    resetInactivityTimer();
  } catch (error) {
    console.error("Erro ao reiniciar sessão:", error);
  }
}