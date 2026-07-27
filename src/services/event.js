import { sendEvent } from "../core/api.js";

export function initializeEvents() {
  window.quizEvent = {
    async send(
      eventName,
      questionNumber = null
    ) {
      await sendEvent(
        eventName,
        questionNumber
      );
    },
  };
}
