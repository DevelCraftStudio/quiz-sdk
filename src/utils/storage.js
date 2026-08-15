/*---------------------------------------
   Storage chave de sessão
  --------------------------------------- */

const SESSION_KEY = "quizSessionCode";

export function saveSessionCode(sessionCode) {
  localStorage.setItem(SESSION_KEY, sessionCode);
}

export function getSessionCode() {
  return localStorage.getItem(SESSION_KEY);
}

export function removeSessionCode() {
  localStorage.removeItem(SESSION_KEY);
}

/*---------------------------------------
   Storage de respostas
  --------------------------------------- */

const ANSWERS_KEY = "quizAnswers";

export function saveAnswer(questionNumber, optionSelected) {
  const answers = getAnswers();

  answers[questionNumber] = optionSelected;

  localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
}

export function getAnswers() {
  const stored = localStorage.getItem(ANSWERS_KEY);

  if (!stored) {
    return {};
  }

  return JSON.parse(stored);
}
