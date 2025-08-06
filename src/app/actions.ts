// src/app/actions.ts
'use server';

import { 
  summarizeBatteryNews, 
  type SummarizeBatteryNewsInput, 
  type SummarizeBatteryNewsOutput 
} from '@/ai/flows/summarize-battery-news';

export async function getSummary(input: SummarizeBatteryNewsInput): Promise<{ data: SummarizeBatteryNewsOutput | null; error: string | null }> {
  try {
    const result = await summarizeBatteryNews(input);
    return { data: result, error: null };
  } catch (error) {
    console.error('Error summarizing news:', error);
    return { data: null, error: 'An unexpected error occurred while summarizing the article. Please try again later.' };
  }
}
