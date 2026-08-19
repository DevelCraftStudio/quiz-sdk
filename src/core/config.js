const config = {
  slug: "",
  totalQuestions: 0,
};

export function setConfig(options) {
  if (!options?.slug) {
    throw new Error("O slug é obrigatório.");
  }

  if (
    options?.totalQuestions == null ||
    options.totalQuestions <= 0
  ) {
    throw new Error("O total de perguntas deve ser maior que zero.");
  }

  config.slug = options.slug;
  config.totalQuestions = options.totalQuestions;
}

export function getConfig() {
  return { ...config };
}