import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { ContactForm } from './ContactForm';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-32 bg-background"
      data-testid="section-contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get Your Free Estimate
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Business Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glassmorphism p-8 rounded-2xl space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Spic & Span Pros
                </h3>
                <p className="text-muted-foreground mb-2">
                  Power Washing, Window & Gutter Cleaning
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3" data-testid="contact-address">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Address</div>
                    <div className="text-muted-foreground">
                      301 N Randolphville Rd Apt 73
                      <br />
                      Piscataway, NJ 08854
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3" data-testid="contact-phone">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <a
                      href="tel:7326484094"
                      className="text-primary hover:underline"
                    >
                      (732) 648-4094
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3" data-testid="contact-hours">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Hours</div>
                    <div className="text-muted-foreground">
                      Open 24 Hours
                      <br />
                      Monday – Sunday
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.4651234567!2d-74.45678901234567!3d40.56789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM0JzA0LjQiTiA3NMKwMjcnMjQuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Business location map"
                data-testid="map-contact"
              />
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
