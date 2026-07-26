import { sendEvent } from "../core/api.js";

export function initializeEvents() {
  observeViews();
  observeClicks();
  observeQuestions();
}

function observeViews() {
  const elements = document.querySelectorAll(
    '[data-view="result"], [data-view="offer"]',
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const view = entry.target.dataset.view;

      switch (view) {
        case "result":
          sendEvent("VIEW_RESULT");
          break;

        case "offer":
          sendEvent("VIEW_OFFER");
          break;
      }

      observer.unobserve(entry.target);
    });
  });

  elements.forEach((element) => observer.observe(element));
}

function observeClicks() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");

    if (!target) return;

    const action = target.dataset.action;

    switch (action) {
      case "click_result":
        sendEvent("CLICK_RESULT");
        break;

      case "click_offer":
        sendEvent("CLICK_OFFER");
        break;
    }
  });
}

function observeQuestions() {
  const questions = document.querySelectorAll('[data-view="question"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const questionNumber = Array.from(questions).indexOf(entry.target) + 1;

      sendEvent("VIEW_QUESTION", questionNumber);

      observer.unobserve(entry.target);
    });
  });

  questions.forEach((question) => observer.observe(question));
}
