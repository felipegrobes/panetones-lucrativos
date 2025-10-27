import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    image: '/images/logo.webp',
    title: '100 Recetas de Panetones Rentables',
    description: '100 recetas de panetones deliciosos y fáciles de preparar que se venden muchísimo.',
    width: 126,
    height: 126,
  },
  {
    image: '/images/Tabla de Precios.webp',
    title: 'Tabla de Precios',
    description: 'No tienes que preocuparte por la fijación de precios, nosotros te ayudaremos para que pongas el precio justo y obtengas grandes ganancias.',
    width: 126,
    height: 126,
  },
  {
    image: '/images/Guía para Vender.webp',
    title: 'Guía para Vender Panetones',
    description: 'Te enseñaremos paso a paso las mejores estrategias de venta para que vendas mucho.',
    width: 126,
    height: 126,
  },
];

export function Features() {
  return (
    <section id="features" className="pt-16 sm:pt-24 pb-16 sm:pb-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">
            ¿POR QUÉ DEBERÍAS COMPRAR?
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Este combo fue cuidadosamente creado para tu éxito en esta Navidad. Mira todo lo que recibirás:
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <Card key={i} className="transform border-[#FF0000] bg-white transition-transform duration-300 hover:-translate-y-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 flex flex-col">
              <CardHeader className="flex-grow">
                <div className="mb-4 flex justify-center">
                    <Image src={feature.image} alt={feature.title} width={feature.width} height={feature.height} className="object-contain rounded-[5%]" />
                </div>
                <CardTitle className="font-headline text-xl text-center">{feature.title}</CardTitle>
                <CardDescription className="pt-2 text-base text-foreground/70 text-center">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
