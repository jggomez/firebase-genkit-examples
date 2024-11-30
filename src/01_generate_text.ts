// import the Genkit and Google AI plugin libraries
import { gemini15Flash, googleAI } from "@genkit-ai/googleai";
import { genkit } from "genkit";

// configure a Genkit instance
const ai = genkit({
    plugins: [googleAI()],
    model: gemini15Flash, // set default model
});

(async () => {
    // make a generation request
    const { text } = await ai.generate({
        system: 'You are a food industry marketing consultant.',
        prompt: 'Invent a menu item for a pirate themed restaurant.',
        config: {
            maxOutputTokens: 400,
            stopSequences: ['<end>', '<fin>'],
            temperature: 0.8,
            topP: 0.4,
            topK: 50,
        },
    });
    console.log(text);
})();