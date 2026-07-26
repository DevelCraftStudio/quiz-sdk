const SESSION_KEY = "quizSessionId";

export function saveSessionId(sessionId) {
  localStorage.setItem(SESSION_KEY, sessionId);
}

export function getSessionId() {
  return localStorage.getItem(SESSION_KEY);
}

export function removeSessionId() {
  localStorage.removeItem(SESSION_KEY);
}

const ANSWERS_KEY = "quizAnswers";

export function saveAnswers(answers) {
  localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
}

export function getAnswers() {
  const answers = localStorage.getItem(ANSWERS_KEY);

  return answers ? JSON.parse(answers) : [];
}

export function removeAnswers() {
  localStorage.removeItem(ANSWERS_KEY);
}
