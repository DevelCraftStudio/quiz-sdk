import fs from "node:fs";
import { publish } from "../src/core/publish.js";
import { getQuestionsFromHtml } from "../src/utils/getInformation.js";

const html = fs.readFileSync("./index.html", "utf8");

const match = html.match(
    /init\s*\(\s*\{\s*slug:\s*["']([^"']+)["'](?:\s*,\s*totalQuestions:\s*(\d+))?\s*\}\s*\)/
);

if (!match) {
    throw new Error(
        "Não foi possível encontrar o slug no index.html."
    );
}

const options = {
    slug: match[1],
};

if (match[2]) {
    options.totalQuestions = Number(match[2]);
} else {
    options.totalQuestions = getQuestionsFromHtml(html);
}

await publish(options);

console.log("Quiz sincronizado com sucesso.");