import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-[103.68svh] min-h-[806px] w-full overflow-hidden bg-primary/10 flex items-start justify-center pt-12">
      <Image
        src="/images/fundo da primeira seção.webp"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      
      <div className="container relative z-10 text-center px-4">
        <div className="max-w-3xl mx-auto px-0">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl text-balance">
            ¡Transforma tu Navidad en algo lucrativo, incluso comenzando desde cero!
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 md:text-xl text-balance">
            Aprende las recetas más rentables y fáciles de panetones y gana dinero esta Navidad. ¡No te quedes atrás!
          </p>
          <div className="mt-6 flex justify-center">
            <Image src="/images/produto.webp" alt="Libros de Recetas de Panettone" width={512} height={512} />
          </div>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="font-bold shadow-lg shadow-primary/30">
              <a href="#features">Quero Empezar Ahora</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
