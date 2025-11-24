import dotenv from "dotenv";

export function loadEnv() {
    dotenv.config();

    if (!process.env.OPENAI_API_KEY) {
        console.warn("Warning: Missing OPENAI_API_KEY");
    }

    return {
        key: process.env.OPENAI_API_KEY,
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini"
    };
}
