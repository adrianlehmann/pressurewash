import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="section-cta-banner"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cta-bg.jpg"
          alt="Beautiful clean home in golden sunlight"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Bring Your Home Back to Life
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-10 max-w-2xl mx-auto">
            Schedule your free estimate today and discover why homeowners throughout Central New Jersey trust Spic & Span Pros.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleScrollToContact}
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 h-auto"
              data-testid="button-cta-estimate"
            >
              Get Free Estimate
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 h-auto"
              data-testid="button-cta-call"
            >
              <a href="tel:7326484094">
                <Phone className="w-5 h-5 mr-2" />
                Call (732) 648-4094
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
