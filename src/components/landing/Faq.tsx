import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: '¿Cómo recibiré los libros después de la compra?',
    answer: 'Una vez realizada la compra, recibirás un enlace de acceso directamente en tu correo electrónico. Si necesitas ayuda, escríbenos a: digitalpay.ofc@gmail.com',
  },
  {
    question: '¿Los libros son físicos o digitales?',
    answer: 'Los libros son 100% digitales (formato eBook PDF). Puedes leerlos en tu celular, tablet o computadora, donde y cuando quieras.',
  },
  {
    question: '¿Es seguro comprar aquí?',
    answer: 'Sí, es 100% seguro. La transacción está protegida por la tecnología de seguridad avanzada de Hotmart (empresa líder en pagos y alojamiento de productos digitales).',
  },
  {
    question: '¿Y si no me gusta el contenido?',
    answer: 'Tienes 30 días de garantía incondicional. Si no te gusta por cualquier motivo, te devolvemos el 100% de tu dinero, sin trámites ni complicaciones.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-primary/5 py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">
            Preguntas Frecuentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-lg border border-primary/10 bg-card shadow-sm">
              <AccordionTrigger className="px-6 text-left font-headline text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 text-base text-foreground/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="font-bold shadow-lg shadow-primary/30 transform transition-transform hover:scale-105">
                <a href="#pricing">¡Resolví mis dudas, quiero comprar!</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
