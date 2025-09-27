'use server';

/**
 * @fileOverview A chatbot that can answer questions about Steffin Thomas's portfolio.
 *
 * - portfolioChatbot - A function that handles the chat interaction.
 * - PortfolioChatbotInput - The input type for the portfolioChatbot function.
 * - PortfolioChatbotOutput - The return type for the portfolioChatbot function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { portfolioContext } from '@/ai/portfolio-context';

const PortfolioChatbotInputSchema = z.object({
  query: z.string().describe('The user\'s question about the portfolio.'),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).optional().describe('The conversation history.'),
});
export type PortfolioChatbotInput = z.infer<typeof PortfolioChatbotInputSchema>;

const PortfolioChatbotOutputSchema = z.object({
  answer: z.string().describe('The AI\'s answer to the user\'s question.'),
});
export type PortfolioChatbotOutput = z.infer<typeof PortfolioChatbotOutputSchema>;

export async function portfolioChatbot(input: PortfolioChatbotInput): Promise<PortfolioChatbotOutput> {
  return portfolioChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioChatbotPrompt',
  input: { schema: PortfolioChatbotInputSchema },
  output: { schema: PortfolioChatbotOutputSchema },
  prompt: `You are an AI assistant for Steffin Thomas, a Data Analyst. Your name is "Clippy's Ghost".
You are friendly, helpful, and a little bit enthusiastic.
Your goal is to answer questions from visitors and recruiters about Steffin's portfolio, skills, and experience.

Use the following context about Steffin Thomas to answer the user's question.
Do not make up information. If you don't know the answer, say that you don't have that information but can pass the message along to Steffin.

Keep your answers concise and to the point.

CONTEXT:
{{{context}}}

HISTORY:
{{#if history}}
{{#each history}}
{{#if isUser}}
User: {{{content}}}
{{/if}}
{{#if isModel}}
Clippy's Ghost: {{{content}}}
{{/if}}
{{/each}}
{{/if}}

User's new question: {{{query}}}
`,
});

const portfolioChatbotFlow = ai.defineFlow(
  {
    name: 'portfolioChatbotFlow',
    inputSchema: PortfolioChatbotInputSchema,
    outputSchema: PortfolioChatbotOutputSchema,
  },
  async (input) => {
    // Augment history with boolean flags for Handlebars
    const history = input.history?.map(message => ({
        ...message,
        isUser: message.role === 'user',
        isModel: message.role === 'model',
    }));

    const { output } = await prompt({
        ...input,
        history,
        context: portfolioContext,
    });
    return output!;
  }
);
