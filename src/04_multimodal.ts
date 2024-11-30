import { gemini15Flash, googleAI } from "@genkit-ai/googleai";
import { genkit, z } from "genkit";

const ai = genkit({
    plugins: [googleAI()],
    model: gemini15Flash,
});

(async () => {
    const { text } = await ai.generate([
        { media: { url: 'https://storage.googleapis.com/questionsanswersproject/animales_mexico.jpeg' } },
        { text: 'What animals are in the photo?' },
    ]);

    console.log(text);
})();