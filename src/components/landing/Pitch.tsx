import { CheckCircle } from 'lucide-react';

const recipes = [
    "Panetones de Frutas Cristalizadas Gourmet",
    "Panetones de Chocolate Gourmet",
    "Panetones Rellenos Gourmet",
];

export function Pitch() {
  return (
    <section className="bg-primary/5 py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">
            Mira una parte de lo que recibirás en los libros:
          </h2>
          <ul className="mt-8 space-y-4 text-lg text-foreground/80">
            {recipes.map((recipe, index) => (
              <li key={index} className="flex items-center justify-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span>{recipe}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xl font-semibold text-foreground/90">
            Y mucho más...
          </p>
        </div>
      </div>
    </section>
  );
}
