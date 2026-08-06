import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ClipboardList, Search, FileCheck, Sparkles, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    number: 1,
    title: 'Request Your Free Estimate',
    description: 'Call or fill out our contact form to get started.',
  },
  {
    icon: Search,
    number: 2,
    title: 'On-Site Assessment',
    description: 'We visit your property to assess the scope of work.',
  },
  {
    icon: FileCheck,
    number: 3,
    title: 'Customized Cleaning Plan',
    description: 'Receive a detailed proposal tailored to your needs.',
  },
  {
    icon: Sparkles,
    number: 4,
    title: 'Professional Cleaning',
    description: 'Our experienced team delivers exceptional results.',
  },
  {
    icon: CheckCircle,
    number: 5,
    title: 'Final Walkthrough & Satisfaction Check',
    description: "We ensure you're completely satisfied with the work.",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 bg-background"
      data-testid="section-process"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Simple 5-Step Process
          </h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex flex-col items-center text-center"
                  data-testid={`step-${index}`}
                >
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-primary to-chart-2 text-[10px] font-bold text-white shadow-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
