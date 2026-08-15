import { sendEvent } from "../core/api.js";

export function initializeActions() {
  window.qAction = async function (actionName) {
    let backendAction;

    switch (actionName) {
      case "cResult":
        backendAction = "CLICK_RESULT";
        break;

      case "cOffer":
        backendAction = "CLICK_OFFER";
        break;

      default:
        console.warn(`Ação desconhecida: ${actionName}`);
        return;
    }

    try {
      await sendEvent(backendAction);
    } catch (error) {
      console.error("Erro ao enviar ação:", error);
    }
  };
}