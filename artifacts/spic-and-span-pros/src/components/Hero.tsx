import { motion } from 'framer-motion';
import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const trustBadges = [
  'Family Owned',
  'Serving Since 2017',
  'Open 24 Hours',
  'Free Estimates',
  '5-Star Service',
];

export function Hero() {
  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Professional power washing service transforming home exterior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            data-testid="text-hero-headline"
          >
            Restore Your Home's Beauty with Professional Exterior Cleaning
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed"
            data-testid="text-hero-subheadline"
          >
            Spic & Span Pros provides professional power washing, soft washing, gutter cleaning, window cleaning, and solar panel cleaning throughout Piscataway and surrounding communities. Family-owned, fully committed to quality, and available whenever you need us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              onClick={handleScrollToContact}
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 h-auto"
              data-testid="button-hero-estimate"
            >
              Get Free Estimate
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 h-auto"
              data-testid="button-hero-call"
            >
              <a href="tel:7326484094">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
            data-testid="container-trust-badges"
          >
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full border border-white/40 bg-black/45 px-4 py-2 shadow-sm backdrop-blur-md"
                data-testid={`badge-trust-${index}`}
              >
                <CheckCircle2 className="w-4 h-4 shrink-0 text-accent" />
                <span className="text-sm font-semibold text-white drop-shadow-sm">
                  {badge}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
