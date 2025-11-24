import express from "express";
import cors from "cors";
import { loadEnv } from "./config/settings.js";
import { generateResponse } from "./engine/processor.js";

loadEnv();

const app = express();
app.use(cors());
app.use(express.json());

// Still matches Hajj_UI frontend: POST /ask
app.post("/ask", async (req, res) => {
    try {
        const { question } = req.body;

        if (!question) {
            return res.status(400).json({ error: "Question is required." });
        }

        const output = await generateResponse(question);

        res.json(output);
    } catch (err) {
        console.error("API Error:", err);
        res.status(500).json({ error: "Server error" });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Hajj API running on port ${PORT}`));
