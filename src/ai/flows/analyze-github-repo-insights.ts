'use server';

/**
 * @fileOverview Analyzes GitHub repositories to extract insights about code quality, potential bugs, and security vulnerabilities.
 *
 * - analyzeGithubRepo - A function that initiates the analysis of a GitHub repository.
 * - AnalyzeGithubRepoInput - The input type for the analyzeGithubRepo function, specifying the repository URL.
 * - AnalyzeGithubRepoOutput - The return type for the analyzeGithubRepo function, providing insights and suggestions.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeGithubRepoInputSchema = z.object({
  repoUrl: z.string().describe('The URL of the GitHub repository to analyze.'),
});
export type AnalyzeGithubRepoInput = z.infer<typeof AnalyzeGithubRepoInputSchema>;

const AnalyzeGithubRepoOutputSchema = z.object({
  codeComplexity: z.string().describe('An estimation of the code complexity.'),
  potentialBugs: z.string().describe('Identified potential bugs in the repository.'),
  securityFlaws: z.string().describe('Identified potential security flaws in the repository.'),
  suggestions: z.string().describe('Suggestions for improving the code quality and security.'),
});
export type AnalyzeGithubRepoOutput = z.infer<typeof AnalyzeGithubRepoOutputSchema>;

export async function analyzeGithubRepo(input: AnalyzeGithubRepoInput): Promise<AnalyzeGithubRepoOutput> {
  return analyzeGithubRepoFlow(input);
}

const analyzeRepoPrompt = ai.definePrompt({
  name: 'analyzeRepoPrompt',
  input: {schema: AnalyzeGithubRepoInputSchema},
  output: {schema: AnalyzeGithubRepoOutputSchema},
  prompt: `You are an AI code analysis tool. Analyze the GitHub repository at the following URL and provide insights about its code quality, potential bugs, and security vulnerabilities. Also, suggest improvements for the code.

Repository URL: {{{repoUrl}}}

Analyze the repository and provide insights into:
- Code Complexity: (Provide an estimation of the code complexity)
- Potential Bugs: (List any identified potential bugs in the repository)
- Security Flaws: (List any identified potential security flaws in the repository)
- Suggestions: (Suggest improvements for the code quality and security)
`,
});

const analyzeGithubRepoFlow = ai.defineFlow(
  {
    name: 'analyzeGithubRepoFlow',
    inputSchema: AnalyzeGithubRepoInputSchema,
    outputSchema: AnalyzeGithubRepoOutputSchema,
  },
  async input => {
    const {output} = await analyzeRepoPrompt(input);
    return output!;
  }
);

