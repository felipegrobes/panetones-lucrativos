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
import dynamic from 'next/dynamic';

const InstagramPrompterSection = dynamic(() => import('@/components/landing/InstagramPrompterSection').then(mod => mod.InstagramPrompterSection), {
  loading: () => <div className="container py-16 sm:py-24"><div className="mx-auto h-[400px] w-full max-w-4xl animate-pulse rounded-lg bg-muted/50" /></div>,
});


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <main className="flex-1">
        <Hero />
        <SectionSeparator />
        <Features />
        <SectionSeparator />
        <Pitch />
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
        <SectionSeparator />
        <InstagramPrompterSection />
      </main>
      <Footer />
    </div>
  );
}
