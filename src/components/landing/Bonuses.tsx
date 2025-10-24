"use client";

import { Gift, HeartPulse, Package, Calculator, Instagram } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { InstagramPrompter } from './InstagramPrompter';

const bonuses = [
  {
    icon: <HeartPulse className="h-6 w-6" />,
    title: '15 Recetas de Panetones Fitness',
    description: 'Recetas especiales para personas que desean cuidar su salud.',
    number: 1,
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: 'Guía de Empaques Económicos y Bonitos',
    description: 'Aprende a empacar cada panetón de forma sencilla y atractiva.',
    number: 2,
  },
  {
    icon: <Calculator className="h-6 w-6" />,
    title: 'Hoja de Cálculo de Costos + Simulador de Ganancias',
    description: 'Sabe exactamente cuánto estás gastando y ganando con cada venta.',
    number: 3,
  },
  {
    icon: <Instagram className="h-6 w-6" />,
    title: 'Instagram Rentable',
    description: 'Aprende a vender en Instagram y atraer clientes, incluso sin mostrarte.',
    number: 4,
  },
];

export function Bonuses() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl text-balance">
            Y si compras hoy, recibirás 4 regalos exclusivos:
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {bonuses.map((bonus) => (
            <div key={bonus.number} className="flex items-start space-x-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Gift className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-headline text-lg font-semibold">Regalo #{bonus.number}: {bonus.title}</h3>
                <p className="mt-1 text-foreground/70">{bonus.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Card className="mt-16 bg-card/50 shadow-xl border-primary/10">
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Instagram className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="font-headline text-2xl">Prueba el Generador de Contenido para Instagram</CardTitle>
                <CardDescription>Genera ideas para tus posts y aumenta tu alcance. ¡Es parte del regalo #4!</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <InstagramPrompter />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
