import { saveAnswer } from "../utils/storage.js";
import { hasStaticSend } from "./StaticSend.js";

function handleOption(event) {
  const element = event.currentTarget;

  const option = element.dataset.qOption;

  if (!option) {
    return;
  }

  const [questionNumber, optionSelected] = option.split(":");

  if (hasStaticSend(questionNumber)) {
    saveAnswer(Number(questionNumber), optionSelected);
    return;
  }

  qAnswer(Number(questionNumber), optionSelected);
}

export function initializeStaticOptions() {
  const optionElements = document.querySelectorAll("[data-q-option]");

  if (!optionElements.length) {
    return;
  }

  optionElements.forEach((element) => {
    element.addEventListener("click", handleOption);
  });
}