import { BookCopy, Target, Wallet } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    icon: BookCopy,
    title: '+100 Recetas de Panetones Rentables',
    description: '100 recetas de panetones deliciosos y fáciles de preparar que se venden muchísimo.',
  },
  {
    icon: Target,
    title: 'Tabla de Precios',
    description: 'No tienes que preocuparte por la fijación de precios, nosotros te ayudaremos para que pongas el precio justo y obtengas grandes ganancias.',
  },
  {
    icon: Wallet,
    title: 'Guía para Vender Panetones',
    description: 'Te enseñaremos paso a paso las mejores estrategias de venta para que vendas mucho.',
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
            <Card key={i} className="flex flex-col bg-card/50">
              <CardHeader className="flex-grow">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <feature.icon className="h-8 w-8" />
                  </div>
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
