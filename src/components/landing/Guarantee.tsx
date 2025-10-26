import Image from 'next/image';

export function Guarantee() {
  return (
    <section className="bg-primary/5 py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-xl border-2 border-accent/50 bg-background p-8 text-center shadow-lg md:flex-row md:gap-12 md:text-left">
          <div className="flex-shrink-0">
            <Image src="/images/garantia.webp" alt="Selo de garantia de 30 dias" width={150} height={150} className="object-contain" />
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold text-primary">
              ¡Prueba primero y decide después!
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Puedes comprar con total seguridad. Si el contenido descrito arriba no es el mismo que recibes, tendrás 30 días de garantía y te devolveremos tu dinero sin complicaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
