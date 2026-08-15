import { sendAnswer } from "../core/api.js";
import { hasEnv } from "./send.js";
import { saveAnswer } from "../utils/storage.js";

export function initializeAnswers() {
  window.qAnswer = async function (questionNumber, optionSelected) {

    if (hasEnv(questionNumber)) {
      saveAnswer(questionNumber, optionSelected);
      return;
    }

    try {
      await sendAnswer(questionNumber, optionSelected);
    } catch (error) {
      console.error("Erro ao enviar resposta:", error);
    }
  };
}