import { getAnswers, saveAnswers } from "../utils/storage.js";
import { sendAnswer } from "../core/api.js";

export function initializeAnswers() {

    const questions = document.querySelectorAll('[data-view="question"]');

    questions.forEach((question, index) => {

        const questionNumber = index + 1;

        const options = question.querySelectorAll('[data-option]');

        options.forEach(option => {

            option.addEventListener("click", () => {

                saveAnswer(
                    questionNumber,
                    option.dataset.option
                );

            });

        });

    });

}

export async function saveAnswer(questionNumber, optionSelected) {

    const answeredAt = new Date().toISOString();

    await sendAnswer(
        questionNumber,
        optionSelected,
        answeredAt
    );

}