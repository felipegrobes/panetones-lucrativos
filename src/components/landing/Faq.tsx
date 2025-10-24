import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: '¿Cómo recibiré los libros después de la compra?',
    answer: 'Una vez realizada la compra, recibirás un enlace de acceso directamente en tu correo electrónico. Si necesitas ayuda, escríbenos a: digitalpay.ofc@gmail.com',
  },
  {
    question: '¿Necesito experiencia para hacer panetones?',
    answer: '¡No! Las recetas son paso a paso, perfectas para principiantes. ¡Aprenderás desde cero!',
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
    <section id="faq" className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">
            Preguntas Frecuentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="mx-auto mt-12 max-w-3xl">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-primary/10">
              <AccordionTrigger className="text-left font-headline text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
