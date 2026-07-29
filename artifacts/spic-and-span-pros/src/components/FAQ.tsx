import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is the difference between power washing and soft washing?',
    answer:
      'Power washing uses high-pressure water to blast away dirt and grime from hard surfaces. Soft washing uses low pressure with specialized cleaning solutions, perfect for delicate surfaces like siding, roofs, and wood.',
  },
  {
    question: 'How often should I have my house washed?',
    answer:
      'We recommend every 1–2 years depending on your climate, tree cover, and exposure to humidity and pollution.',
  },
  {
    question: 'Do you clean interior windows?',
    answer:
      'Yes! Our window cleaning service includes both interior and exterior window cleaning, frame cleaning, and screen cleaning.',
  },
  {
    question: 'Can power washing damage my home?',
    answer:
      'In the hands of professionals, power washing is completely safe. We assess every surface and use appropriate pressure and solutions for each material.',
  },
  {
    question: 'Do you clean gutters?',
    answer:
      'Absolutely. Our gutter cleaning service removes all debris and ensures proper water flow to protect your foundation.',
  },
  {
    question: 'Do you remove algae and moss?',
    answer:
      'Yes. We specialize in safely removing algae, moss, mold, and organic staining from all exterior surfaces.',
  },
  {
    question: 'Do you clean solar panels?',
    answer:
      'Yes — professional solar panel cleaning to remove dirt and buildup that reduces energy efficiency.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Most residential projects take 2–6 hours depending on size and services requested.',
  },
  {
    question: 'Are estimates free?',
    answer:
      'Yes, completely free no-obligation estimates for all services.',
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="faq"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30"
      data-testid="section-faq"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glassmorphism px-6 rounded-xl border-none"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
