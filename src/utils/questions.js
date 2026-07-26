export function getTotalQuestions() {
    return document.querySelectorAll('[data-view="question"]').length;
}

export function getQuestions() {
    const questions = document.querySelectorAll('[data-view="question"]');

    return Array.from(questions).map((question, index) => {

        const options = question.querySelectorAll('[data-option]');

        return {
            question: index + 1,
            options: Array.from(options).map(option => option.dataset.option)
        };

    });
}