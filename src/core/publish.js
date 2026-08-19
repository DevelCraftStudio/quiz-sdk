import { setConfig } from "./config.js";
import { quizInfo } from "./api.js";

export async function publish(options) {
  setConfig(options);

  await quizInfo();
}