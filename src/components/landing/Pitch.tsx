import Image from 'next/image';

export function Pitch() {
  return (
    <section className="bg-primary/5 py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mt-8 flex justify-center">
            {/* The user requested to remove the image here */}
          </div>
          <p className="mt-1 text-xl text-foreground/80 text-balance">
            todo lo que necesitas para ganar mucho dinero esta Navidad. Aprovecha esta oportunidad, porque si no lo haces tú, otros la aprovecharán.
          </p>
        </div>
      </div>
    </section>
  );
}
