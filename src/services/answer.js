import { sendAnswer } from "../core/api.js";

export function initializeAnswers() {
  window.qAnswer = async function (
    questionNumber,
    optionSelected
  ) {
    await sendAnswer(
      questionNumber,
      optionSelected,
      new Date().toISOString()
    );
  };
}