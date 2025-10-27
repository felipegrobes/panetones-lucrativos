'use server';

import {
  generateInstagramContent,
  type GenerateInstagramContentInput,
} from '@/ai/flows/generate-instagram-content';
import { z } from 'zod';

const GenerateInstagramContentInputSchema = z.object({
  productName: z.string(),
  targetAudience: z.string(),
  promotionDetails: z.string(),
  desiredTone: z.string(),
});

export async function generateContentAction(
  prevState: any,
  formData: FormData
) {
  const parsedData = GenerateInstagramContentInputSchema.safeParse({
    productName: formData.get('productName'),
    targetAudience: formData.get('targetAudience'),
    promotionDetails: formData.get('promotionDetails'),
    desiredTone: formData.get('desiredTone'),
  });

  if (!parsedData.success) {
    return {
      success: false,
      data: null,
      error: parsedData.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generateInstagramContent(
      parsedData.data as GenerateInstagramContentInput
    );
    return {
      success: true,
      data: result,
      error: null,
    };
  } catch (e: any) {
    return {
      success: false,
      data: null,
      error: e.message || 'Something went wrong.',
    };
  }
}
