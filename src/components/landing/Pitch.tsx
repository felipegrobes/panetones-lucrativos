import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const recipes = [
    {
        name: "Panetones de Frutas Cristalizadas Gourmet",
        image: "/images/frutas.webp",
        alt: "Panetone de Frutas Cristalizadas"
    },
    {
        name: "Panetones de Chocolate Gourmet",
        image: "/images/chocolate.webp",
        alt: "Panetone de Chocolate"
    },
    {
        name: "Panetones Rellenos Gourmet",
        image: "/images/relleno.webp",
        alt: "Panetone Recheado"
    },
];

export function Pitch() {
  return (
    <section className="bg-primary/5 py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">
            Mira una parte de lo que recibirás en los libros:
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {recipes.map((recipe) => (
            <div key={recipe.name} className="flex flex-col items-center text-center">
              <Image 
                src={recipe.image} 
                alt={recipe.alt} 
                width={300} 
                height={300} 
                className="rounded-lg shadow-lg object-cover w-full h-64 transition-transform duration-300 transform hover:scale-105"
              />
              <div className="mt-4 flex items-center gap-2 justify-center">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-lg text-foreground/80">{recipe.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-foreground/90">
                Y mucho más...
            </p>
        </div>
      </div>
    </section>
  );
}
