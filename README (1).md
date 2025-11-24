# 🕋 Hajj & Umrah RAG Chatbot

An AI assistant that answers questions about **Hajj and Umrah** using:

* A custom **Hajj & Umrah knowledge base** (`knowledge.json`)
* A simple **RAG (Retrieval-Augmented Generation)** backend (Node.js + Express + OpenAI)
* A **React + Vite + Tailwind CSS** frontend chat interface

---

# 📦 1. Project Structure

```text
hajj-assistant/
│
├── hajj_api/                  # RAG backend
│   ├── api.js
│   ├── engine/
│   │   ├── processor.js
│   │   └── finder.js
│   ├── core/
│   │   └── openaiClient.js
│   ├── config/
│   │   └── settings.js
│   ├── knowledge/
│   │   └── kb.json            # Knowledge base
│   └── package.json
│
├── Hajj_UI/                   # Frontend (React + Vite + Tailwind)
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── src/
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   ├── ChatAssistant.jsx
│   │   ├── LanguageSwitcher.jsx
│   │   ├── GuidePanel.jsx
│   │   └── styles/
│   │       └── base.css
│   └── public/
│       └── icons/
│           ├── chat.svg
│           ├── guide.svg
│           └── settings.svg
```

---

# 🚀 Features

### ✔ Retrieval-Augmented Generation

Retrieves the **most relevant Islamic knowledge** (Hajj & Umrah rituals, rulings, steps) before sending context to the LLM.

### ✔ Safe & Faithful Islamic Answers

The model answers **strictly from the provided knowledge**.

### ✔ Lightweight Custom Retriever

A simple similarity-based retriever.

### ✔ Modern Frontend UI

* Hajj-themed responsive layout
* Smooth chat experience
* Starter questions
* Loading animation

---

# 🔧 Backend Setup (Node.js + Express + OpenAI)

## 1. Install dependencies

```bash
cd hajj_api
npm install
```

## 2. Create `.env`

```
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxx
PORT=3001
```

## 3. Knowledge Base

Located at:

```
hajj_api/knowledge/kb.json
```

Example:

```json
{
  "id": "hajj_001",
  "title": "Pillars of Hajj",
  "category": "Hajj Basics",
  "content": "The five pillars (Arkan) of Hajj are...",
  "tags": ["pillars", "arkan", "obligatory"]
}
```

## 4. Run backend

```bash
npm start
```

Backend URL:

```
http://localhost:3001
```

Health check:

```
http://localhost:3001/api/health
```

---

## 🎨 Frontend Setup (React + Vite + Tailwind)

### 1. Install dependencies

```bash
cd Hajj_UI
npm install
```

### 2. Tailwind Configuration

**tailwind.config.js**:

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

**postcss.config.js**:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**src/base.css**:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Vite Proxy

**vite.config.js**:

```js
server: {
  proxy: {
    "/api": "http://localhost:3001"
  }
}
```

### 4. Run frontend

```bash
npm run dev
```

Frontend URL:

```
http://localhost:5173
```

---

# 🔁 How the RAG Pipeline Works

1. User asks a question in the React UI.
2. Frontend sends:

```
POST /api/chat
```

3. Backend retrieves the most relevant passages from `kb.json`.
4. Backend builds a secure prompt:

   * Context documents
   * User question
   * Faithful-answer rules
5. Sends prompt to OpenAI.
6. Returns `{ answer }`.
7. UI displays the message.

---

# 🧪 Testing the RAG System

Try:

* "What are the pillars of Hajj?"
* "Explain the steps of Umrah."
* "What happens on the Day of Arafat?"
* "What is Ihram?"
* "What are the prohibitions during Ihram?"
* "What is Tawaf al-Wida?"

---

# 📌 Future Extensions

* Expand the knowledge base
* Arabic/English dual-mode
* Use embeddings instead of BoW retriever
* Save chat histories
* Deploy backend (Railway/Render) + frontend (Vercel/Netlify)

---

## 👥 Team Members

* **Albatool Moathen**
* **Hams Aljohani**
