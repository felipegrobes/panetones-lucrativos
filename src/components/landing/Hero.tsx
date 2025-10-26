import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-[90svh] min-h-[700px] w-full overflow-hidden bg-primary/10 flex items-center justify-center">
      <Image
        src="/images/fundo da primeira seção.jpg"
        alt="Panetone delicioso em um fundo festivo"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      
      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto pt-32">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl text-balance">
            ¡Transforma tu Navidad en algo lucrativo, incluso comenzando desde cero!
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 md:text-xl text-balance">
            Aprende las recetas más rentables y fáciles de panetones y gana dinero esta Navidad. ¡No te quedes atrás!
          </p>
          <div className="mt-8 flex justify-center">
            <Image src="/images/logo.webp" alt="Logo Panettone Profits" width={150} height={150} className="object-contain" />
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="font-bold shadow-lg shadow-primary/30">
              <a href="#pricing">Quiero Empezar Ahora</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
