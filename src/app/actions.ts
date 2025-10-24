'use server';

import { generateInstagramContent, GenerateInstagramContentInput } from '@/ai/flows/generate-instagram-content';

export async function generateContentAction(
  prevState: any,
  formData: FormData,
) {
  // A real app would have user authentication and input validation.
  const input: GenerateInstagramContentInput = {
    productName: formData.get('productName') as string,
    targetAudience: formData.get('targetAudience') as string,
    promotionDetails: formData.get('promotionDetails') as string,
    desiredTone: formData.get('desiredTone') as string,
  };

  try {
    const result = await generateInstagramContent(input);
    if (!result.caption || !result.hashtags) {
        throw new Error("La IA no pudo generar contenido. Intenta con una descripción diferente.");
    }
    return { success: true, data: result, message: '¡Contenido generado!', error: null };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'Error al generar contenido. Inténtalo de nuevo.';
    return { success: false, data: null, error: errorMessage };
  }
}
