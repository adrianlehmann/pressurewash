import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    text: "Our house looked brand new after years of mildew and dirt buildup. We couldn't believe the transformation.",
    author: 'Sarah M.',
    location: 'Piscataway',
  },
  {
    text: 'Brian explained every option, provided honest recommendations, and made the entire process incredibly easy.',
    author: 'James T.',
    location: 'Edison',
  },
  {
    text: "Our deck looks incredible. We've already scheduled gutter cleaning for next season.",
    author: 'The Johnson Family',
    location: 'Metuchen',
  },
  {
    text: "The windows are crystal clear inside and out. I didn't realize how dirty they had become until after they were cleaned.",
    author: 'Linda R.',
    location: 'South Plainfield',
  },
  {
    text: 'They arrived on time, completed everything exactly as promised, and left our property spotless.',
    author: 'Michael D.',
    location: 'Highland Park',
  },
  {
    text: 'The price was very reasonable and the quality exceeded our expectations.',
    author: 'Karen S.',
    location: 'New Brunswick',
  },
];

export function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="reviews"
      ref={ref}
      className="py-20 bg-gradient-to-b from-secondary/30 to-background"
      data-testid="section-reviews"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevReview}
              className="shrink-0 rounded-full w-10 h-10 sm:w-12 sm:h-12 glassmorphism hover:bg-primary hover:text-primary-foreground"
              data-testid="button-review-prev"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="relative min-h-[300px] flex-1 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <div className="glassmorphism p-8 md:p-12 rounded-3xl shadow-xl">
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl text-foreground text-center mb-6 leading-relaxed italic">
                      "{reviews[currentIndex].text}"
                    </p>

                    <div className="text-center">
                      <div className="font-bold text-lg text-foreground">
                        {reviews[currentIndex].author}
                      </div>
                      <div className="text-muted-foreground">
                        {reviews[currentIndex].location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextReview}
              className="shrink-0 rounded-full w-10 h-10 sm:w-12 sm:h-12 glassmorphism hover:bg-primary hover:text-primary-foreground"
              data-testid="button-review-next"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8" data-testid="container-review-dots">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-border hover:bg-muted-foreground'
                }`}
                data-testid={`dot-review-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
