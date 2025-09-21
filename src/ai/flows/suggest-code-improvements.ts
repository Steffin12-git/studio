'use server';

/**
 * @fileOverview AI-driven suggestions for improving code quality of GitHub projects.
 *
 * - suggestCodeImprovements - A function that provides AI-driven suggestions for improving code quality.
 * - SuggestCodeImprovementsInput - The input type for the suggestCodeImprovements function.
 * - SuggestCodeImprovementsOutput - The return type for the suggestCodeImprovements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestCodeImprovementsInputSchema = z.object({
  githubRepoUrl: z
    .string()
    .describe('The URL of the GitHub repository to analyze.'),
  programmingLanguage: z
    .string()
    .describe('The primary programming language used in the repository.'),
});
export type SuggestCodeImprovementsInput = z.infer<
  typeof SuggestCodeImprovementsInputSchema
>;

const SuggestCodeImprovementsOutputSchema = z.object({
  codeSimplificationSuggestions: z
    .string()
    .describe('Suggestions for simplifying the code.'),
  potentialBugFixes: z.string().describe('Potential bug fixes in the code.'),
  securityEnhancements: z
    .string()
    .describe('Suggestions for security enhancements.'),
});
export type SuggestCodeImprovementsOutput = z.infer<
  typeof SuggestCodeImprovementsOutputSchema
>;

export async function suggestCodeImprovements(
  input: SuggestCodeImprovementsInput
): Promise<SuggestCodeImprovementsOutput> {
  return suggestCodeImprovementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestCodeImprovementsPrompt',
  input: {schema: SuggestCodeImprovementsInputSchema},
  output: {schema: SuggestCodeImprovementsOutputSchema},
  prompt: `You are a senior software engineer providing code improvement suggestions for a given GitHub repository.

You will analyze the code in the repository and provide suggestions for code simplification, potential bug fixes, and security enhancements.

Consider the programming language used in the repository when providing suggestions.

Repository URL: {{{githubRepoUrl}}}
Programming Language: {{{programmingLanguage}}}

Provide your suggestions in a structured format.
`,
});

const suggestCodeImprovementsFlow = ai.defineFlow(
  {
    name: 'suggestCodeImprovementsFlow',
    inputSchema: SuggestCodeImprovementsInputSchema,
    outputSchema: SuggestCodeImprovementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
