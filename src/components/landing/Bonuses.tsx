"use client";

import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const bonuses = [
  {
    image: '/images/regalo1.webp',
    title: '15 Recetas de Panetones Fitness',
    description: 'Aumenta tus ventas con panetones saludables para personas que desean cuidar su salud.',
    number: 1,
    width: 144,
    height: 144,
  },
  {
    image: '/images/regalo2.webp',
    title: 'Guía de Empaques Elegantes y Rentables',
    description: 'Aumenta tus márgenes de ganancia con empaques sofisticados.',
    number: 2,
    width: 144,
    height: 144,
  },
  {
    image: '/images/regalo3.webp',
    title: 'Hoja de Cálculo de Costos + Simulador de Ganancias',
    description: 'Sabrás exactamente cuánto estás gastando y cuánto estás ganando con cada venta.',
    number: 3,
    width: 144,
    height: 144,
  },
  {
    image: '/images/regalo4.webp',
    title: 'Instagram Rentable',
    description: 'Vende más en Instagram y atrae más clientes con estrategias de marketing.',
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
            <Card key={bonus.number} className="flex flex-col bg-card shadow-sm text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-lg border border-primary/20">
              <CardHeader className="flex-grow">
                <div className="mb-4 flex justify-center">
                    <Image src={bonus.image} alt={bonus.title} width={bonus.width} height={bonus.height} loading="lazy" className="object-contain rounded-xl shadow-lg shadow-primary/20" />
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
