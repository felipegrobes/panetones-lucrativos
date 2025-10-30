import { CheckIcon, CrossIcon } from './icons';

const pains = [
  '¿Ver pasar la Navidad y no vender como deberías?',
  '¿Depender siempre de las mismas recetas que ya no se venden tanto?',
  '¿Perder la oportunidad de aprovechar la época más lucrativa del año?',
];

export function PainPoints() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold text-primary">
              ¿Estás cansado(a) de...
            </h2>
            <ul className="space-y-4">
              {pains.map((pain, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive mt-1">
                    <CrossIcon className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-foreground/80">{pain}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center rounded-xl bg-accent/10 p-8 shadow-lg border border-accent/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                <CheckIcon className="h-8 w-8" />
            </div>
            <h3 className="mt-6 font-headline text-3xl font-bold text-primary">
              ¡Ha llegado el momento de cambiar eso!
            </h3>
            <p className="mt-4 text-lg text-foreground/80">
              ¡Con nuestras variedades de recetas gourmet puedes transformar esta Navidad en la mejor de todas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
