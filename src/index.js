import { createSession } from "./core/api.js";
import { setConfig } from "./core/config.js";
import { saveSessionId } from "./utils/storage.js";
import { initializeSession } from "./services/session.js";
import { initializeAnswers } from "./services/answer.js";
import { initializeEvents } from "./services/event.js";
import { initializeStaticObserver } from "./lib/StaticObserver.js";

export async function init(options) {
  setConfig(options);

  try {
    const { sessionId } = await createSession();

    saveSessionId(sessionId);

    initializeEvents();
    initializeAnswers();

    initializeStaticObserver();

    initializeSession();

  } catch (error) {
    console.error("Erro ao iniciar a sessão do quiz.", error);
  }
}
