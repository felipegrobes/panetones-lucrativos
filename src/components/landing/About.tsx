import { TrendingUp, Target, Handshake } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">¿Quiénes somos?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80 text-balance">
          Somos una empresa en constante crecimiento. Nuestro objetivo es ayudarte con nuestras recetas y ofrecerte el soporte necesario para que alcances tus resultados.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80 text-balance">
          No estás solo(a), puedes contar con nosotros siempre que lo necesites. 😉
        </p>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center gap-2">
            <TrendingUp className="h-10 w-10 text-accent" />
            <p className="font-headline text-lg font-semibold">5.000+ Ventas</p>
            <p className="text-sm text-muted-foreground">Solo en el último año.</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Target className="h-10 w-10 text-accent" />
            <p className="font-headline text-lg font-semibold">Tu Éxito es Nuestro Objetivo</p>
            <p className="text-sm text-muted-foreground">Te ayudamos a alcanzar tus metas.</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Handshake className="h-10 w-10 text-accent" />
            <p className="font-headline text-lg font-semibold">Soporte Continuo</p>
            <p className="text-sm text-muted-foreground">Puedes contar con nosotros.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
