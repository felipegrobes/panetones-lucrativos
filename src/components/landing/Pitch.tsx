import Image from 'next/image';

export function Pitch() {
  return (
    <section className="bg-primary/5 py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl text-balance">
            Te enseñaré a preparar, poner precio y vender los panetones
          </h2>
          <div className="mt-8 flex justify-center">
            <Image src="/images/logo.webp" alt="Logo Panettone Profits" width={150} height={150} className="object-contain" />
          </div>
          <p className="mt-8 text-xl text-foreground/80 text-balance">
            — todo lo que necesitas para ganar mucho dinero esta Navidad. Aprovecha esta oportunidad, porque si no lo haces tú, otros la aprovecharán.
          </p>
        </div>
      </div>
    </section>
  );
}
