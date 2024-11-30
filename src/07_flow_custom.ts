import { gemini15Flash, googleAI } from "@genkit-ai/googleai";
import { genkit, z, run } from "genkit";

const ai = genkit({
    plugins: [googleAI()],
});

export const menuQuestionFlow = ai.defineFlow(
    {
        name: 'menuQuestionFlow',
        inputSchema: z.string(),
        outputSchema: z.string(),
    },
    async (input: string): Promise<string> => {
        const menu = await run('retrieve-daily-menu', async (): Promise<string> => {
            // Call API or DB
            return "Today's menu: rice with onion";
        });
        const { text } = await ai.generate({
            model: gemini15Flash,
            system: "Help the user answer questions about today's menu.",
            prompt: input,
            docs: [{ content: [{ text: menu }] }],
        });
        return text;
    }
);
