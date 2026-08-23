import { sendEvent } from "../core/api.js";

export function initializeEvents() {
  window.qEvent = async function (eventName, questionNumber = null) {
    let backendEvent;

    switch (eventName) {
      case "vLanding":
        if (questionNumber !== null) {
          console.warn("vLanding não aceita número de questão.");
          return;
        }

        backendEvent = "VIEW_LANDING";
        break;

      case "vQuestion":
        if (questionNumber === null) {
          console.warn("vQuestion precisa de um número de questão.");
          return;
        }

        backendEvent = "VIEW_QUESTION";
        break;

      case "vResult":
        if (questionNumber !== null) {
          console.warn("vResult não aceita número de questão.");
          return;
        }

        backendEvent = "VIEW_RESULT";
        break;

      case "vOffer":
        if (questionNumber !== null) {
          console.warn("vOffer não aceita número de questão.");
          return;
        }

        backendEvent = "VIEW_OFFER";
        break;

      case "cResult":
        if (questionNumber !== null) {
          console.warn("cResult não aceita número de questão.");
          return;
        }

        backendEvent = "CLICK_RESULT";
        break;

      case "cOffer":
        if (questionNumber !== null) {
          console.warn("cOffer não aceita número de questão.");
          return;
        }

        backendEvent = "CLICK_OFFER";
        break;

      default:
        console.warn(`Evento desconhecido: ${eventName}`);
        return;
    }

    try {
      await sendEvent(backendEvent, questionNumber);
    } catch (error) {
      console.error("Erro ao enviar evento:", error);
    }
  };
}