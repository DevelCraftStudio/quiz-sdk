import { sendEvent } from "../core/api.js";

export function initializeEvents() {
  window.qEvent = async function (
    eventName,
    questionNumber = null
  ) {
    await sendEvent(
      eventName,
      questionNumber
    );
  };
}