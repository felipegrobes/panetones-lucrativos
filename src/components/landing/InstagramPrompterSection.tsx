import { InstagramPrompter } from './InstagramPrompter';

export function InstagramPrompterSection() {
  return (
    <section id="instagram-prompter" className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl text-balance">
            Crea Posts para Instagram con IA
          </h2>
          <p className="mt-4 text-lg text-foreground/80 text-balance">
            ¿Sin ideas para tus redes sociales? Usa nuestra herramienta de inteligencia artificial para generar ideas de posts para Instagram y atraer más clientes.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <InstagramPrompter />
        </div>
      </div>
    </section>
  );
}
