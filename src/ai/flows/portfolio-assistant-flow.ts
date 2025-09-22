'use server';
/**
 * @fileOverview A conversational AI assistant for a portfolio.
 *
 * - portfolioAssistant - A function that handles the conversation with the user.
 * - PortfolioAssistantInput - The input type for the portfolioAssistant function.
 * - PortfolioAssistantOutput - The return type for the portfolioAssistant function.
 */

import { ai } from '@/ai/genkit';
import { about, skillsData, projectsData, experienceData, socialLinks } from '@/lib/data';
import { z } from 'genkit';

const PortfolioAssistantInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).describe('The conversation history.'),
});
export type PortfolioAssistantInput = z.infer<typeof PortfolioAssistantInputSchema>;

const PortfolioAssistantOutputSchema = z.object({
  response: z.string().describe('The AI assistant\'s response.'),
});
export type PortfolioAssistantOutput = z.infer<typeof PortfolioAssistantOutputSchema>;

export async function portfolioAssistant(input: PortfolioAssistantInput): Promise<PortfolioAssistantOutput> {
  return portfolioAssistantFlow(input);
}

const context = `
You are Steffin Thomas's friendly and professional AI assistant integrated into his portfolio website. Your goal is to answer questions from potential recruiters, hiring managers, or collaborators.

Keep your responses concise, helpful, and engaging.

Here is all the information you have about Steffin Thomas:

**About Me:**
${about.bio}

**Contact & Social Links:**
${socialLinks.map(link => `- ${link.name}: ${link.url}`).join('\n')}
- Email: steffinthomas12@gmail.com

**Skills:**
${Object.entries(skillsData).map(([category, skills]) => `
**${category}:**
${(skills as string[]).map(skill => `- ${skill}`).join('\n')}
`).join('')}

**Projects:**
${projectsData.map(p => `
- **${p.title}**: ${p.description} (Technologies: ${p.tags.join(', ')})
`).join('')}

**Work Experience:**
${experienceData.map(e => `
- **${e.role} at ${e.company} (${e.duration})**: ${e.description}
`).join('')}

Your instructions:
- Use the provided information to answer questions.
- If asked a question you can't answer from the context, politely say that you don't have that information but can pass the message along.
- Maintain a positive and professional tone.
`;

const prompt = ai.definePrompt({
  name: 'portfolioAssistantPrompt',
  input: { schema: z.object({ formattedHistory: z.string() }) },
  output: { schema: PortfolioAssistantOutputSchema },
  system: context,
  prompt: `Continue the conversation based on the provided history.

{{{formattedHistory}}}
`,
  config: {
    model: 'googleai/gemini-2.5-flash',
  }
});


const portfolioAssistantFlow = ai.defineFlow(
  {
    name: 'portfolioAssistantFlow',
    inputSchema: PortfolioAssistantInputSchema,
    outputSchema: PortfolioAssistantOutputSchema,
  },
  async (input) => {
    const formattedHistory = input.history
      .map(message => {
        if (message.role === 'user') {
          return `User: ${message.content}`;
        }
        return `Assistant: ${message.content}`;
      })
      .join('\n');

    const { output } = await prompt({ formattedHistory });
    return { response: output!.response };
  }
);
