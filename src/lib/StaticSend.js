import { getAnswers } from "../utils/storage.js";

function handleSend(event) {
  const element = event.currentTarget;

  const sendTarget = element.dataset.qSend;

  if (!sendTarget) {
    return;
  }

  const answers = getAnswers();

  if (sendTarget === "all") {
    Object.entries(answers).forEach(([questionNumber, optionSelected]) => {
      qAnswer(Number(questionNumber), optionSelected);
    });

    return;
  }

  const optionSelected = answers[sendTarget];

  if (!optionSelected) {
    return;
  }

  qAnswer(Number(sendTarget), optionSelected);
}

export function initializeStaticSend() {
  const sendElements = document.querySelectorAll("[data-q-send]");

  if (!sendElements.length) {
    return;
  }

  sendElements.forEach((element) => {
    element.addEventListener("click", handleSend);
  });
}

export function hasStaticSend(questionNumber) {
  const sendElements = document.querySelectorAll("[data-q-send]");

  return [...sendElements].some(
    (element) =>
      element.dataset.qSend === "all" ||
      element.dataset.qSend === String(questionNumber),
  );
}
