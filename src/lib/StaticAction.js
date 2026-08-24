function handleAction(event) {
  const element = event.currentTarget;

  const actionName = element.dataset.qAction;

  if (!actionName) {
    return;
  }

  if (window.qAction) {
    window.qAction(actionName);
  }
}

export function initializeStaticActions() {
  const actionElements = document.querySelectorAll("[data-q-action]");

  if (!actionElements.length) {
    return;
  }

  actionElements.forEach((element) => {
    element.addEventListener("click", handleAction);
  });
}