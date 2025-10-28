import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const offerItems = [
  '+100 Recetas de Panetones Rentables',
  'Tabla de Precios',
  'Guía para Vender Panetones',
  '15 Recetas de Panetones Fitness',
  'Guía de Empaques Económicos y Bonitos',
  'Hoja de Cálculo de Costos + Simulador de Ganancias',
  'Instagram Rentable',
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24" style={{ backgroundColor: '#921C1C' }}>
      <div className="container">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12" style={{ backgroundColor: '#F3D2D1' }}>
              <h3 className="font-headline text-2xl font-bold text-primary">
                ¡ATENCIÓN!
              </h3>
              <p className="mt-2 text-foreground/80">
                ¡Esta oferta puede terminar en cualquier momento! La Navidad se acerca y el tiempo para comenzar se está acabando...
              </p>
              <h4 className="mt-8 font-headline text-xl font-semibold text-primary">Todo lo que obtendrás:</h4>
              <ul className="mt-4 space-y-2">
                {offerItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-600">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center bg-background p-8 text-center">
                <p className="font-semibold text-muted-foreground">Acceso de por vida</p>
                <p className="mt-4 text-xl text-muted-foreground line-through">
                    De $40,00 USD
                </p>
                <p className="mt-1 text-lg text-muted-foreground">por solo</p>
                <p className="font-headline text-5xl font-bold text-primary">
                    $4,90<span className="text-2xl font-medium text-foreground/50"> USD</span>
                </p>
                <Button asChild size="lg" className="mt-8 w-full font-bold text-base sm:text-lg py-6 sm:py-8 shadow-lg shadow-primary/30 transform transition-transform hover:scale-105">
                  <a href="https://pay.hotmart.com/X102635608N?checkoutMode=10">¡SÍ, QUIERO LA OFERTA!</a>
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">Compra 100% segura. 30 días de garantía.</p>
                <div className="mt-6 text-sm">
                  <h3 className="inline-block bg-destructive px-2 py-1 text-base font-bold text-destructive-foreground">
                    ¡NO TE PREOCUPES!
                  </h3>
                  <p className="mt-2 text-foreground/80 text-balance">
                    El valor de <span className="font-bold">$4,90 USD</span> se convertirá automáticamente a tu moneda y podrás pagar con <span className="font-bold">métodos locales de tu país.</span>
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
