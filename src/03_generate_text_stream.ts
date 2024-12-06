import { gemini15Flash, googleAI } from "@genkit-ai/googleai";
import { genkit, z } from "genkit";

const ai = genkit({
    plugins: [googleAI()],
    model: gemini15Flash,
});

//Define schema
const MenuItemSchema = z.object({
    name: z.string(),
    description: z.string(),
    calories: z.number(),
    allergens: z.array(z.string()),
});

const MenuSchema = z.object({
    starters: z.array(MenuItemSchema),
    mains: z.array(MenuItemSchema),
    desserts: z.array(MenuItemSchema),
});

(async () => {
    const { response, stream } = await ai.generateStream({
        prompt: 'Suggest a complete menu for a pirate themed restaurant.',
        output: { schema: MenuSchema },
    });

    for await (const chunk of stream) {
        // `output` is an object representing the entire output so far.
        console.log(chunk.output);
    }

    // Get the completed output.
    const { output } = await response;
    console.log(output);
})();