import { gemini15Flash, googleAI } from "@genkit-ai/googleai";
import { genkit, z } from "genkit";
import { readFile } from 'node:fs/promises';

const ai = genkit({
    plugins: [googleAI()],
    model: gemini15Flash,
});

const BlogPostSchema = z.object({
    title: z.string(),
    description: z.string(),
});

export const BlogPostFlowWithSchema = ai.defineFlow(
    {
        name: 'BlogPostFlow',
        inputSchema: z.void(),
        outputSchema: BlogPostSchema,
    },
    async () => {
        const b64Data = await readFile('Ajolote.jpeg', { encoding: 'base64url' });
        const dataUrl = `data:image/jpeg;base64,${b64Data}`;
        const { text } = await ai.generate([
            { media: { url: dataUrl } },
            { text: 'What animals are in the photo?' },
        ])
        const { output } = await ai.generate({
            model: gemini15Flash,
            prompt: `Create a blog post for national geographic over this animal ${text}`,
            output: { schema: BlogPostSchema },
        });
        if (output == null) {
            throw new Error("Response doesn't satisfy schema.");
        }
        return output;
    }
);


(async () => {
    const { title, description } = await BlogPostFlowWithSchema();
    console.log(title);
    console.log(description);
})();
