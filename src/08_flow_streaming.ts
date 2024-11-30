import { gemini15Flash, googleAI } from "@genkit-ai/googleai";
import { genkit, z } from "genkit";

const ai = genkit({
    plugins: [googleAI()],
});


export const menuSuggestionStreamingFlowWithSchema = ai.defineStreamingFlow(
    {
        name: 'menuSuggestionStreamingFlowWithSchema',
        inputSchema: z.string(),
        streamSchema: z.string(),
        outputSchema: z.string(),
    },
    async (restaurantTheme, streamingCallback) => {
        const response = await ai.generateStream({
            model: gemini15Flash,
            prompt: `Invent a menu item for a ${restaurantTheme} themed restaurant.`,
        });
        if (streamingCallback) {
            for await (const chunk of response.stream) {
                streamingCallback(chunk.text);
            }
        }
        return (await response.response).text;
    }
);

(async () => {
    const response = menuSuggestionStreamingFlowWithSchema('Danube');
    for await (const chunk of response.stream) {
        console.log('chunk', chunk);
    }
})();