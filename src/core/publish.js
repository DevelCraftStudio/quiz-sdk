import { setConfig } from "./config.js";
import { syncQuizInfo } from "./api.js";

export async function publish(options) {
  const totalQuestions = getTotalQuestions();

  setConfig({
    ...options,
    totalQuestions,
  });

  await syncQuizInfo();
}