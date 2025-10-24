import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { Pitch } from '@/components/landing/Pitch';
import { Bonuses } from '@/components/landing/Bonuses';
import { Guarantee } from '@/components/landing/Guarantee';
import { Pricing } from '@/components/landing/Pricing';
import { About } from '@/components/landing/About';
import { PainPoints } from '@/components/landing/PainPoints';
import { Faq } from '@/components/landing/Faq';
import { Footer } from '@/components/landing/Footer';
import { SectionSeparator } from '@/components/landing/SectionSeparator';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <main className="flex-1">
        <Hero />
        <Features />
        <Pitch />
        <Bonuses />
        <Guarantee />
        <Pricing />
        <SectionSeparator />
        <About />
        <PainPoints />
        <SectionSeparator />
        <Faq />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
