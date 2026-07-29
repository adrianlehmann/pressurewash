import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BeforeAfterSlider } from './BeforeAfterSlider';

const galleryItems = [
  {
    id: 1,
    beforeImage: '/before-house.jpg',
    afterImage: '/after-house.jpg',
    title: 'House Siding Transformation',
  },
  {
    id: 2,
    beforeImage: '/before-deck.jpg',
    afterImage: '/after-deck.jpg',
    title: 'Deck Restoration',
  },
  {
    id: 3,
    beforeImage: '/before-driveway.jpg',
    afterImage: '/after-driveway.jpg',
    title: 'Driveway Deep Clean',
  },
];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background"
      data-testid="section-gallery"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Stunning Transformations
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              data-testid={`gallery-item-${item.id}`}
            >
              <div className="bg-card border border-card-border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <BeforeAfterSlider
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
