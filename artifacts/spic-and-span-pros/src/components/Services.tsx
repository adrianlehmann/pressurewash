import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Home,
  Droplets,
  Frame,
  Wind,
  Fence,
  ParkingCircle,
  Building2,
  Sun,
  Sparkles,
  Waves,
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'House Power Washing',
    description:
      'Restore siding, brick, stucco, and exterior surfaces by removing years of dirt, mildew, algae, and grime.',
  },
  {
    icon: Droplets,
    title: 'Soft Washing',
    description:
      'Safe cleaning for delicate exterior surfaces using low-pressure techniques.',
  },
  {
    icon: Frame,
    title: 'Window Cleaning',
    description:
      'Crystal-clear windows inside and out. Includes: Interior/Exterior Window Cleaning, Frame Cleaning, Screen Cleaning.',
  },
  {
    icon: Wind,
    title: 'Gutter Cleaning',
    description:
      'Prevent water damage with professional gutter cleaning and debris removal.',
  },
  {
    icon: Building2,
    title: 'Deck Cleaning',
    description:
      'Restore wood and composite decks for outdoor enjoyment.',
  },
  {
    icon: Fence,
    title: 'Fence Cleaning',
    description:
      'Bring fences back to life by removing dirt, algae, and weather stains.',
  },
  {
    icon: ParkingCircle,
    title: 'Driveway & Sidewalk Cleaning',
    description:
      'Professional concrete cleaning that dramatically improves curb appeal.',
  },
  {
    icon: Waves,
    title: 'Roof Cleaning',
    description:
      'Safe removal of algae, moss, and organic buildup.',
  },
  {
    icon: Sun,
    title: 'Solar Panel Cleaning',
    description:
      'Maximize efficiency by keeping rooftop solar panels clean.',
  },
  {
    icon: Sparkles,
    title: 'Graffiti Removal',
    description:
      'Professional removal from exterior surfaces.',
  },
];

const removeItems = [
  'Dirt',
  'Mold',
  'Mildew',
  'Algae',
  'Moss',
  'Rust Stains',
  'Graffiti',
  'Pollen',
  'Organic Staining',
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 md:py-32 bg-background"
      data-testid="section-services"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Exterior Cleaning Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card border border-card-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                data-testid={`card-service-${index}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* We Remove Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">We Remove</h3>
          <div className="flex flex-wrap justify-center gap-3" data-testid="container-remove-items">
            {removeItems.map((item, index) => (
              <div
                key={index}
                className="px-5 py-2.5 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold text-sm hover:bg-accent/20 transition-colors"
                data-testid={`chip-remove-${index}`}
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
