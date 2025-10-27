"use client";

import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const bonuses = [
  {
    image: '/images/regalo1.webp',
    title: '15 Recetas de Panetones Fitness',
    description: 'Recetas especiales para personas que desean cuidar su salud.',
    number: 1,
    width: 144,
    height: 144,
  },
  {
    image: '/images/regalo2.webp',
    title: 'Guía de Empaques Económicos y Bonitos',
    description: 'Aprende a empacar cada panetón de forma sencilla y atractiva.',
    number: 2,
    width: 144,
    height: 144,
  },
  {
    image: '/images/regalo3.webp',
    title: 'Hoja de Cálculo de Costos + Simulador de Ganancias',
    description: 'Sabe exactamente cuánto estás gastando y cuánto estás ganando con cada venta.',
    number: 3,
    width: 144,
    height: 144,
  },
  {
    image: '/images/regalo4.webp',
    title: 'Instagram Rentable',
    description: 'Aprende a vender en Instagram y atraer clientes, incluso sin mostrarte.',
    number: 4,
    width: 144,
    height: 144,
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
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {bonuses.map((bonus) => (
            <Card key={bonus.number} className="transform border-primary/10 bg-white transition-transform duration-300 hover:-translate-y-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 flex flex-col">
              <CardHeader className="flex-grow">
                <div className="mb-4 flex justify-center">
                    <Image src={bonus.image} alt={bonus.title} width={bonus.width} height={bonus.height} className="object-contain border-2 border-[#FF0000] rounded-xl" />
                </div>
                <CardTitle className="font-headline text-xl text-center">Regalo #{bonus.number}: {bonus.title}</CardTitle>
                <CardDescription className="pt-2 text-base text-foreground/70 text-center">{bonus.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
