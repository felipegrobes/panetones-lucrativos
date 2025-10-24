import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'panettone-hero');

  return (
    <section className="relative h-[90svh] min-h-[700px] w-full overflow-hidden bg-primary/10">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover object-center"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      
      <div className="container relative z-10 flex h-full flex-col items-start justify-center text-left">
        <div className="max-w-2xl">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl text-balance">
            ¡Transforma tu Navidad en algo lucrativo, incluso comenzando desde cero!
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 md:text-xl text-balance">
            Aprende las recetas más rentables y fáciles de panetones y gana dinero esta Navidad. ¡No te quedes atrás!
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button asChild size="lg" className="font-bold shadow-lg shadow-primary/30">
              <a href="#pricing">Quiero Empezar Ahora</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
