"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { generateContentAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Wand2, Loader2, Copy } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  success: false,
  data: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full font-bold">
      {pending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Wand2 className="mr-2 h-4 w-4" />
      )}
      Generar Contenido
    </Button>
  );
}

export function InstagramPrompter() {
  const [state, formAction] = useFormState(generateContentAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
  }, [state, toast]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: '¡Copiado!',
      description: 'El contenido ha sido copiado al portapapeles.',
    });
  };

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <form action={formAction} className="space-y-4">
        <div>
          <Label htmlFor="productName">Nombre del Producto</Label>
          <Input id="productName" name="productName" defaultValue="Panettone Artesanal de Chocolate y Naranja" />
        </div>
        <div>
          <Label htmlFor="targetAudience">Público Objetivo</Label>
          <Input id="targetAudience" name="targetAudience" defaultValue="Amantes de los dulces navideños y regalos gourmet" />
        </div>
        <div>
          <Label htmlFor="promotionDetails">Detalles de la Promoción</Label>
          <Input id="promotionDetails" name="promotionDetails" defaultValue="20% de descuento en la primera compra" />
        </div>
        <div>
          <Label htmlFor="desiredTone">Tono Deseado</Label>
          <Input id="desiredTone" name="desiredTone" defaultValue="Festivo, cálido y apetitoso" />
        </div>
        <SubmitButton />
      </form>
      
      <div className="space-y-4">
        <h3 className="font-headline text-lg font-semibold">Contenido Generado</h3>
        {state?.data ? (
          <Card className="bg-background">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-base">Tu Post de Instagram</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => handleCopy(`${state.data?.caption}\n\n${state.data?.hashtags}`)}>
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copiar</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <p className="font-semibold mb-2">Descripción:</p>
                <p className="whitespace-pre-line text-foreground/80">{state.data.caption}</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Hashtags:</p>
                <p className="text-foreground/80 break-words">{state.data.hashtags}</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="flex h-full min-h-[200px] items-center justify-center rounded-lg border border-dashed text-center text-muted-foreground p-4">
            <p>El contenido generado por la IA para tu post de Instagram aparecerá aquí.</p>
          </div>
        )}
      </div>
    </div>
  );
}
