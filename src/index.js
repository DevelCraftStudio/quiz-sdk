import { setConfig } from "./core/config.js";
import { createSession } from "./core/api.js";
import { saveSessionId } from "./core/storage.js";
import { startInactivityTimer } from "./core/session.js";
import { getTotalQuestions } from "./utils/quiz.js";
import { initializeAnswers } from "./services/answer.js";
import { initializeEvents } from "./services/event.js";

export async function init(options) {
  const totalQuestions = getTotalQuestions();

  setConfig({
    ...options,
    totalQuestions,
  });

  try {
    const { sessionId } = await createSession();

    saveSessionId(sessionId);

    initializeEvents();

    initializeAnswers();

    startInactivityTimer();

  } catch (error) {
    console.error("Erro ao iniciar a sessão do quiz.", error);
  }
}