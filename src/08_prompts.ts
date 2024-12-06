import { googleAI } from "@genkit-ai/googleai";
import { genkit, z } from "genkit";

const ai = genkit({
    plugins: [googleAI()],
    // Directory prompts is for default but you can change it
    //promptDir: 'prompts', 
});

export const recommenderMedicationsFromPrompt = async (symptoms: string) => {
    const prompt = ai.prompt("recommender-medications");
    const { text } = await prompt({ symptoms });
    console.log(text);
}

const tipicalDishSchema = z.object({
    dishName: z.string().nullable(),
    dishDescription: z.string(),
    dishIngredients: z.array(z.string()),
    dishPreparation: z.string().nullable(),
});

const tipicalDishesSchema = ai.defineSchema(
    "tipicalDishesSchema",
    z.object({
        tipicalDishes: z.array(tipicalDishSchema),
    })
);

export const recommenderRecipesFromPrompt = async (region: string) => {
    const prompt = ai.prompt<
        z.ZodTypeAny, //Input
        typeof tipicalDishesSchema, //output
        z.ZodTypeAny>("recommender-recipes");
    const { data } = await prompt(
        { region },
        {
            config: {
                temperature: 1.4,
                topK: 50,
                topP: 0.4,
                maxOutputTokens: 400,
                stopSequences: ['<end>', '<fin>'],
            },
        }
    );
    console.log(data);
}

export const animalDiscoveredPrompt = async () => {
    const multimodalPrompt = ai.prompt("discover-animal-multimodal");
    const { text } = await multimodalPrompt({
        things: "animals",
        photoUrl: "https://storage.googleapis.com/questionsanswersproject/animales_mexico.jpeg",
    });
    console.log(text);
}

export const variantsAnimalDiscoveredPrompt = async () => {
    const multimodalPrompt = ai.prompt("discover-animal-multimodal", {variant: "geminipro"});
    const { text } = await multimodalPrompt({
        things: "animals",
        photoUrl: "https://storage.googleapis.com/questionsanswersproject/animales_mexico.jpeg",
    });
    console.log(text);
}

(async () => {
    await variantsAnimalDiscoveredPrompt()
})();

