import { DocumentFinder } from "./finder.js";
import knowledge from "../knowledge/kb.json" assert { type: "json" };
import { askOpenAI } from "../core/openaiClient.js";

export async function generateResponse(question) {
    const finder = new DocumentFinder(knowledge);

    const matches = finder.search(question, 3);

    const context = matches
        .map((m, i) => `Source ${i + 1} — ${m.doc.title}:\n${m.doc.content}`)
        .join("\n\n");

    const systemPrompt = `
You are a helpful assistant specializing in Hajj & Umrah.
Use ONLY the provided sources.
If the answer is unknown, say "I do not have this information."
    `;

    const userPrompt = `
Question: ${question}

Sources:
${context}

Provide a clear and accurate answer.
    `;

    const answer = await askOpenAI(systemPrompt, userPrompt);

    return {
        answer,
        sources: matches.map(m => ({
            id: m.doc.id,
            title: m.doc.title,
            score: m.score
        }))
    };
}
