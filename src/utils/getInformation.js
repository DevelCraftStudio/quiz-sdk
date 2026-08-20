/* ------------------------------------------
 *   Pega quantidade de perguntas estáticas
 * ------------------------------------------ */

export function getStaticQuestions() {
    return document.querySelectorAll("[data-q-event='vQuestion']").length;
}


/* ------------------------------------------
 *   Pega quantidade de perguntas no build
 * ------------------------------------------ */

export function getQuestionsFromHtml(html) {
    return html.match(/data-q-event=["']vQuestion["']/g)?.length ?? 0;
}