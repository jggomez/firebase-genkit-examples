import { genkit } from "genkit";
import { gemini15Flash, googleAI } from "@genkit-ai/googleai";
import { createInterface } from "node:readline/promises"

const ai = genkit({
    plugins: [googleAI()],
});

(async () => {
    const chat = ai.chat({
        model: gemini15Flash,
        config: {
            temperature: 0.8
        }
    });
    console.log("You are chatting with a LLM. Ctr+C to quit. \n");
    const readline = createInterface(process.stdin, process.stdout);
    while (true) {
        const userInput = await readline.question("> ");
        const { text } = await chat.send(userInput);
        console.log(text)
    }
})();