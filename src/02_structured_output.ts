// import the Genkit and Google AI plugin libraries
import { gemini15Flash, googleAI } from "@genkit-ai/googleai";
import { genkit, z } from "genkit";

// configure a Genkit instance
const ai = genkit({
    plugins: [googleAI()],
    model: gemini15Flash, // set default model
});

const MenuItemSchema = z.object({
    name: z.string(),
    description: z.string(),
    calories: z.number(),
    allergens: z.array(z.string()),
});

(async () => {
    // make a generation request
    const { output } = await ai.generate({
        system: 'You are a food industry marketing consultant.',
        prompt: 'Invent a menu item for a pirate themed restaurant.',
        output: { schema: MenuItemSchema },
        config: {
            maxOutputTokens: 400,
            stopSequences: ['<end>', '<fin>'],
            temperature: 0.8,
            topP: 0.4,
            topK: 50,
        },
    });

    if (output) {
        const { name, description, calories, allergens } = output;
        console.log(`Name: ${name}`);
        console.log(`Description: ${description}`);
        console.log(`Calories: ${calories}`);
        console.log(`Allergens: ${allergens.join(', ')}`);
    }
})();