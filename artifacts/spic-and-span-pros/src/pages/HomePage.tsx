import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Services } from '@/components/Services';
import { Gallery } from '@/components/Gallery';
import { Process } from '@/components/Process';
import { About } from '@/components/About';
import { Reviews } from '@/components/Reviews';
import { ServiceAreas } from '@/components/ServiceAreas';
import { FAQ } from '@/components/FAQ';
import { CTABanner } from '@/components/CTABanner';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { MobileFloatingButton } from '@/components/MobileFloatingButton';

export default function HomePage() {
  return (
    <>
      <SEO />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <WhyChooseUs />
          <Services />
          <Gallery />
          <Process />
          <About />
          <Reviews />
          <ServiceAreas />
          <FAQ />
          <CTABanner />
          <Contact />
        </main>
        <Footer />
        <MobileFloatingButton />
      </div>
    </>
  );
}
