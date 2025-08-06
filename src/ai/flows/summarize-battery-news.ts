// Summarize battery tech news
'use server';
/**
 * @fileOverview A news summarization AI agent for battery technology news.
 *
 * - summarizeBatteryNews - A function that handles the news summarization process.
 * - SummarizeBatteryNewsInput - The input type for the summarizeBatteryNews function.
 * - SummarizeBatteryNewsOutput - The return type for the summarizeBatteryNews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeBatteryNewsInputSchema = z.object({
  articleTitle: z.string().describe('The title of the news article.'),
  articleContent: z.string().describe('The content of the news article.'),
});
export type SummarizeBatteryNewsInput = z.infer<typeof SummarizeBatteryNewsInputSchema>;

const SummarizeBatteryNewsOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the battery technology news article.'),
  relevanceScore: z.number().describe('A score (0-1) indicating the relevance of the article to Meshesha Solutions.'),
});
export type SummarizeBatteryNewsOutput = z.infer<typeof SummarizeBatteryNewsOutputSchema>;

export async function summarizeBatteryNews(input: SummarizeBatteryNewsInput): Promise<SummarizeBatteryNewsOutput> {
  return summarizeBatteryNewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeBatteryNewsPrompt',
  input: {schema: SummarizeBatteryNewsInputSchema},
  output: {schema: SummarizeBatteryNewsOutputSchema},
  prompt: `You are an AI assistant specializing in summarizing battery technology news articles. Your goal is to provide concise summaries that highlight the key advancements and industry trends relevant to Meshesha Solutions, an advanced battery technology startup.

Article Title: {{{articleTitle}}}
Article Content: {{{articleContent}}}

Instructions:
1. Summarize the article content in no more than 150 words.
2. Assess the relevance of the article to Meshesha Solutions, considering its focus on solid-state batteries, zinc-ion batteries, and heat-resistant Li-ion batteries, as well as AI-accelerated material discovery and Smart Factory 4.0 manufacturing.
3. Assign a relevance score between 0 and 1, where 1 indicates high relevance and 0 indicates no relevance.
4. Return the summary and relevance score in JSON format.
`,
});

const summarizeBatteryNewsFlow = ai.defineFlow(
  {
    name: 'summarizeBatteryNewsFlow',
    inputSchema: SummarizeBatteryNewsInputSchema,
    outputSchema: SummarizeBatteryNewsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
