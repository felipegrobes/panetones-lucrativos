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
import { Header } from '@/components/landing/Header';
import { InstagramPrompterSection } from '@/components/landing/InstagramPrompterSection';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <SectionSeparator />
        <Features />
        <SectionSeparator />
        <Pitch />
        <InstagramPrompterSection />
        <SectionSeparator />
        <Bonuses />
        <SectionSeparator />
        <Guarantee />
        <Pricing />
        <SectionSeparator />
        <About />
        <SectionSeparator />
        <PainPoints />
        <SectionSeparator />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
