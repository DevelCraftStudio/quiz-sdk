import { getStaticQuestions } from "../utils/getInformation.js";

const config = {
  slug: "",
  totalQuestions: 0,
};

export function setConfig(options = {}) {
  if (!options.slug) {
    throw new Error("O slug do quiz é obrigatório.");
  }

  config.slug = options.slug;

  let totalQuestions = options.totalQuestions;

  if (totalQuestions == null) {
    totalQuestions = getStaticQuestions();
  }

  if (totalQuestions <= 0) {
    throw new Error(
      "O total de perguntas deve ser maior que zero."
    );
  }

  config.totalQuestions = totalQuestions;
}

export function getConfig() {
  return { ...config };
}