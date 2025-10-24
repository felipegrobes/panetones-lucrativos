'use server';

/**
 * @fileOverview Generates engaging Instagram content for a panettone business.
 *
 * - generateInstagramContent - A function that generates Instagram content.
 * - GenerateInstagramContentInput - The input type for the generateInstagramContent function.
 * - GenerateInstagramContentOutput - The return type for the generateInstagramContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInstagramContentInputSchema = z.object({
  productName: z.string().describe('The name of the panettone product.'),
  targetAudience: z.string().describe('The target audience for the Instagram content.'),
  promotionDetails: z.string().describe('Details about any ongoing promotions or special offers.'),
  desiredTone: z.string().describe('The desired tone or style of the content (e.g., festive, humorous, informative).'),
});

export type GenerateInstagramContentInput = z.infer<typeof GenerateInstagramContentInputSchema>;

const GenerateInstagramContentOutputSchema = z.object({
  caption: z.string().describe('The generated Instagram caption.'),
  hashtags: z.string().describe('Relevant hashtags to maximize reach.'),
});

export type GenerateInstagramContentOutput = z.infer<typeof GenerateInstagramContentOutputSchema>;

export async function generateInstagramContent(
  input: GenerateInstagramContentInput
): Promise<GenerateInstagramContentOutput> {
  return generateInstagramContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateInstagramContentPrompt',
  input: {schema: GenerateInstagramContentInputSchema},
  output: {schema: GenerateInstagramContentOutputSchema},
  prompt: `You are a social media marketing expert specializing in creating engaging Instagram content for food businesses, especially during the Christmas season.

  Generate an Instagram caption and a list of relevant hashtags for a panettone product.

  Product Name: {{{productName}}}
  Target Audience: {{{targetAudience}}}
  Promotion Details: {{{promotionDetails}}}
  Desired Tone: {{{desiredTone}}}

  Caption:
  Hashtags:`,
});

const generateInstagramContentFlow = ai.defineFlow(
  {
    name: 'generateInstagramContentFlow',
    inputSchema: GenerateInstagramContentInputSchema,
    outputSchema: GenerateInstagramContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
