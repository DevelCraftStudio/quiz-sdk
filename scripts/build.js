import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { publish } from "../src/core/publish.js";
import { getQuestionsFromHtml } from "../src/utils/getInformation.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.resolve(__dirname, "../index.html");

const html = fs.readFileSync(indexPath, "utf8");

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