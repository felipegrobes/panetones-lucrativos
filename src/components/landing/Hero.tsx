import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Snowflake } from 'lucide-react';

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
          <div className="mb-4 flex items-center gap-2 rounded-full border border-primary/20 bg-background/50 px-4 py-1 text-sm text-primary backdrop-blur-sm">
            <Snowflake className="h-4 w-4" />
            <span>Edición Navideña 2024</span>
          </div>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl text-balance">
            ¡Transforma tu Navidad en algo lucrativo!
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 md:text-xl text-balance">
            Aprende las recetas más rentables y fáciles de panetones y gana dinero esta Navidad. ¡No te quedes atrás!
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button asChild size="lg" className="font-bold shadow-lg shadow-primary/30">
              <a href="#pricing">Quiero Empezar Ahora</a>
            </Button>
            <Button asChild variant="link" className="text-foreground/80 font-semibold">
              <a href="#features">Ver lo que incluye &rarr;</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
