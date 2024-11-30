import { gemini15Flash, googleAI } from "@genkit-ai/googleai";
import { genkit, z } from "genkit";

const ai = genkit({
    plugins: [googleAI()],
});

const MenuItemSchema = z.object({
    dishname: z.string(),
    description: z.string(),
});

export const menuSuggestionFlowWithSchema = ai.defineFlow(
    {
        name: 'menuSuggestionFlow',
        inputSchema: z.string(),
        outputSchema: MenuItemSchema,
    },
    async (restaurantTheme) => {
        const { output } = await ai.generate({
            model: gemini15Flash,
            prompt: `Invent a menu item for a ${restaurantTheme} themed restaurant.`,
            output: { schema: MenuItemSchema },
        });
        if (output == null) {
            throw new Error("Response doesn't satisfy schema.");
        }
        return output;
    }
);


(async () => {
    const { dishname, description } = await menuSuggestionFlowWithSchema('bistro');
    console.log(dishname);
    console.log(description);
})();
