export class DocumentFinder {
    constructor(docs) {
        this.docs = docs;
    }

    tokenize(text) {
        return text
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, " ")
            .split(/\s+/)
            .filter(Boolean);
    }

    similarity(qTokens, dTokens) {
        const qSet = new Set(qTokens);
        let matches = 0;

        for (const token of dTokens) {
            if (qSet.has(token)) matches++;
        }

        return matches / Math.max(1, dTokens.length);
    }

    search(query, topK = 3) {
        const qTokens = this.tokenize(query);

        const ranked = this.docs.map(doc => {
            const text = `${doc.title} ${doc.content}`;
            const dTokens = this.tokenize(text);

            return {
                doc,
                score: this.similarity(qTokens, dTokens)
            };
        });

        return ranked.sort((a, b) => b.score - a.score).slice(0, topK);
    }
}
