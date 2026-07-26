const config = {
  slug: "",
  totalQuestions: 0,
};

export function setConfig(options) {
  if (!options?.slug) {
    throw new Error("O slug é obrigatório.");
  }

  config.slug = options.slug;
  config.totalQuestions = options.totalQuestions ?? 0;
}

export function getConfig() {
  return { ...config };
}