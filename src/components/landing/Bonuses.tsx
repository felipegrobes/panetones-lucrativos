"use client";

import Image from 'next/image';
import { Gift } from 'lucide-react';

const bonuses = [
  {
    image: '/images/regalo1.webp',
    title: '15 Recetas de Panetones Fitness',
    description: 'Recetas especiales para personas que desean cuidar su salud.',
    number: 1,
  },
  {
    image: '/images/regalo2.webp',
    title: 'Guía de Empaques Económicos y Bonitos',
    description: 'Aprende a empacar cada panetón de forma sencilla y atractiva.',
    number: 2,
  },
  {
    image: '/images/regalo3.webp',
    title: 'Hoja de Cálculo de Costos + Simulador de Ganancias',
    description: 'Sabe exactamente cuánto estás gastando y cuánto estás ganando con cada venta.',
    number: 3,
  },
  {
    image: '/images/regalo4.webp',
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
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Image src={bonus.image} alt={bonus.title} width={48} height={48} className="object-contain" />
              </div>
              <div>
                <h3 className="font-headline text-lg font-semibold">Regalo #{bonus.number}: {bonus.title}</h3>
                <p className="mt-1 text-foreground/70">{bonus.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
