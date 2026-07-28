import { sendAnswer } from "../core/api.js";

export function initializeAnswers() {
  window.qAnswer = async function (questionNumber, optionSelected) {

    try {
      await sendAnswer(
        questionNumber,
        optionSelected,
        new Date().toISOString(),
      );
    } catch (error) {
      console.error("Erro ao enviar resposta:", error);
    }
    
  };
}
