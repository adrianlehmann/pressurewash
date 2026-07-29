import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Star, Users, DollarSign, Calendar, ThumbsUp } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    title: 'Family Owned & Operated',
    description: 'Local service built on honesty, respect, and quality workmanship.',
  },
  {
    icon: Star,
    title: 'Outstanding Customer Service',
    description: 'Friendly communication from your first call until the job is complete.',
  },
  {
    icon: Users,
    title: 'Experienced Professionals',
    description: 'Attention to detail on every project.',
  },
  {
    icon: DollarSign,
    title: 'Fair Pricing',
    description: 'Excellent value without sacrificing quality.',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'We work around your schedule with minimal disruption.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    description: 'Our goal is complete customer satisfaction every time.',
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30"
      data-testid="section-why-choose-us"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Homeowners Choose Spic & Span Pros
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glassmorphism p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-testid={`card-reason-${index}`}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
