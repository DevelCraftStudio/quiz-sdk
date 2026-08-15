import { getConfig } from "../core/config.js";
import { getAnswers } from "../utils/storage.js";

const sendQuestions = {};

export function initializeSend() {
  /* --------------------------------
     Configuração do envio
  -------------------------------- */

  window.qEnv = function (questionNumber) {
    if (questionNumber === "all") {
      const { totalQuestions } = getConfig();

      for (let i = 1; i <= totalQuestions; i++) {
        sendQuestions[i] = true;
      }

      return;
    }

    sendQuestions[questionNumber] = true;
  };

  /* --------------------------------
     Envio das respostas
  -------------------------------- */

  window.qSend = function (questionNumber) {
    const answers = getAnswers();

    if (questionNumber === "all") {
      Object.entries(answers).forEach(([questionNumber, optionSelected]) => {
        qAnswer(Number(questionNumber), optionSelected);
      });

      return;
    }

    const optionSelected = answers[questionNumber];

    if (!optionSelected) {
      return;
    }

    qAnswer(Number(questionNumber), optionSelected);
  };
}

export function hasEnv(questionNumber) {
  return sendQuestions[questionNumber] === true;
}
