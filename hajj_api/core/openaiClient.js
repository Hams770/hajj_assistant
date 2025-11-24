import fetch from "node-fetch";
import { loadEnv } from "../config/settings.js";

const env = loadEnv();

export async function askOpenAI(system, user) {
    const payload = {
        model: env.model,
        messages: [
            { role: "system", content: system },
            { role: "user", content: user }
        ],
        max_tokens: 500,
        temperature: 0.1
    };

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${env.key}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    const data = await res.json();
    return data.choices?.[0]?.message?.content || "No reply generated.";
}
