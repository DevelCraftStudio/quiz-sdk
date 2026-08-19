import fs from "node:fs";
import { publish } from "../src/core/publish.js";

const html = fs.readFileSync("./index.html", "utf8");

const match = html.match(
    /init\s*\(\s*\{\s*slug:\s*["']([^"']+)["']\s*,\s*totalQuestions:\s*(\d+)\s*\}\s*\)/
);

if (!match) {
    throw new Error(
        "Não foi possível encontrar slug e totalQuestions no index.html."
    );
}

const options = {
    slug: match[1],
    totalQuestions: Number(match[2]),
};

await publish(options);

console.log("Quiz sincronizado com sucesso.");