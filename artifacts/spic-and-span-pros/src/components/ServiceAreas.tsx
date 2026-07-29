import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';

const areas = [
  'Piscataway',
  'Edison',
  'New Brunswick',
  'South Plainfield',
  'Highland Park',
  'Metuchen',
  'Somerset',
  'North Brunswick',
  'Bound Brook',
  'Middlesex County',
];

export function ServiceAreas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-background"
      data-testid="section-service-areas"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Proudly Serving Piscataway & Central New Jersey
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="flex flex-wrap justify-center gap-3"
            data-testid="container-area-chips"
          >
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                className="flex items-center gap-2 px-5 py-3 bg-card border border-card-border rounded-full"
                data-testid={`chip-area-${index}`}
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-semibold text-sm">{area}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
