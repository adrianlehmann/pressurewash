import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Clock, Star, Users } from 'lucide-react';

const stats = [
  { icon: Clock, label: '7+ Years Experience', value: '2017' },
  { icon: Users, label: 'Happy Customers', value: '500+' },
  { icon: Star, label: '5-Star Reviews', value: '★★★★★' },
  { icon: Clock, label: 'Open 24/7', value: '24/7' },
];

const badges = [
  { text: 'Family Owned Since 2017', color: 'bg-primary/10 text-primary border-primary/20' },
  { text: 'Former Firefighter — Discipline & Professionalism', color: 'bg-accent/10 text-accent border-accent/20' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30"
      data-testid="section-about"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Exterior Cleaning Done Right
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Since 2017, Spic & Span Pros has proudly helped homeowners throughout Central New Jersey restore the beauty of their homes through professional exterior cleaning services. As a family-owned business, we understand the importance of honesty, communication, and treating every customer's home with respect.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              Owner Brian Ochoa brings the discipline and professionalism developed during his years as a firefighter into every project. From the initial estimate through the final walkthrough, our team focuses on delivering exceptional workmanship while making the entire experience simple and stress-free.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8" data-testid="container-about-badges">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`px-5 py-3 border rounded-full font-semibold text-sm ${badge.color}`}
                  data-testid={`badge-about-${index}`}
                >
                  {badge.text}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4" data-testid="container-about-stats">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="glassmorphism p-5 rounded-xl"
                    data-testid={`stat-${index}`}
                  >
                    <Icon className="w-6 h-6 text-primary mb-2" />
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-chart-2 rounded-3xl blur-2xl opacity-20" />
              <img
                src="/owner-portrait.jpg"
                alt="Brian Ochoa, Owner of Spic & Span Pros"
                className="relative w-full rounded-3xl shadow-2xl"
                loading="lazy"
                data-testid="img-owner-portrait"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
