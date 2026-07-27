import { sendAnswer } from "../core/api.js";

export function initializeAnswers() {
  window.quizAnswer = {
    async send(
      questionNumber,
      optionSelected
    ){
      const answeredAt = new Date().toISOString();
      await sendAnswer(
        questionNumber,
        optionSelected, 
        answeredAt
      );
    },
  };
}
