import { gemini15Flash, googleAI } from "@genkit-ai/googleai";
import { genkit } from "genkit";
import { readFile } from 'node:fs/promises';

const ai = genkit({
    plugins: [googleAI()],
    model: gemini15Flash,
});

(async () => {
    const { text } = await ai.generate([
        // Public URL or gs://
        { media: { url: 'https://storage.googleapis.com/questionsanswersproject/animales_mexico.jpeg' } },
        { text: 'What animals are in the photo?' },
    ]);

    console.log(text);
})();

(async () => {
    console.log("Another example with images")
    const b64Data = await readFile('Ajolote.jpeg', { encoding: 'base64url' });
    const dataUrl = `data:image/jpeg;base64,${b64Data}`;
    const { text } = await ai.generate([
        { media: { url: dataUrl } },
        { text: 'What animals are in the photo?' },
    ])
    console.log(text);
})();
