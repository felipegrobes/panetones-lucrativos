import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative bg-primary/10 flex items-start justify-center pt-16 pb-12">
      <div className="container relative z-10 text-center px-4">
        <div className="max-w-3xl mx-auto px-0">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl text-balance bg-gradient-to-r from-primary to-[#ff0000] bg-clip-text text-transparent">
            ¡Gana Mucho Dinero en Navidad con Panetones Gourmet!
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 md:text-xl text-balance">
            Aprende las recetas de Panetones Gourmet más rentables y que más se venden. ¡No te quedes atrás!
          </p>
          <div className="mt-6 flex justify-center">
            <Image src="/images/mouckp.webp" alt="Libros de Recetas de Panettone" width={512} height={512} priority />
          </div>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="font-bold shadow-lg shadow-primary/30">
              <a href="#features">Quiero Empezar Ahora</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
