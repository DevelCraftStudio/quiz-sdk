import { createSession } from "./core/api.js";
import { setConfig } from "./core/config.js";
import { saveSessionCode } from "./utils/storage.js";

/*-----------------------------------
    Funções para SPA
------------------------------------*/

import { initializeSend } from "./services/send.js";
import { initializeActions } from "./services/action.js";
import { initializeSession } from "./services/session.js";
import { initializeAnswers } from "./services/answer.js";
import { initializeEvents } from "./services/event.js";

/*-----------------------------------
    Funções para HTML estático
------------------------------------*/

import { initializeStaticSend } from "./lib/StaticSend.js";
import { initializeStaticObserver } from "./lib/StaticObserver.js";
import { initializeStaticActions } from "./lib/StaticAction.js";
import { initializeStaticOptions } from "./lib/StaticOption.js";

export async function init(options) {
  setConfig(options);

  try {

    console.log("Biblioteca inicializada.");

    const { sessionCode } = await createSession();

    saveSessionCode(sessionCode);

    initializeSend();
    initializeEvents();
    initializeActions();
    initializeAnswers();

    initializeStaticSend();
    initializeStaticObserver();
    initializeStaticActions();
    initializeStaticOptions();

    initializeSession();

  } catch (error) {
    console.error("Erro ao iniciar a sessão do quiz.", error);
  }
}