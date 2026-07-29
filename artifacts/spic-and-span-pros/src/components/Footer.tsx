import { Phone, MapPin, Clock } from 'lucide-react';
import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';

const services = [
  'House Power Washing',
  'Soft Washing',
  'Window Cleaning',
  'Gutter Cleaning',
  'Deck Cleaning',
  'Solar Panel Cleaning',
];

const areas = [
  'Piscataway',
  'Edison',
  'New Brunswick',
  'South Plainfield',
  'Highland Park',
  'Metuchen',
];

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background" data-testid="footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Business Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Spic & Span Pros
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-chart-2" />
                <div>
                  301 N Randolphville Rd Apt 73
                  <br />
                  Piscataway, NJ 08854
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-chart-2" />
                <a href="tel:7326484094" className="hover:text-chart-2 transition-colors">
                  (732) 648-4094
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0 text-chart-2" />
                <div>
                  Open 24 Hours
                  <br />
                  7 Days a Week
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-chart-2 transition-colors"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-chart-2 transition-colors"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-chart-2 transition-colors"
                aria-label="Google"
                data-testid="link-google"
              >
                <FaGoogle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="cursor-pointer hover:text-chart-2 transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="cursor-pointer hover:text-chart-2 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              © 2025 Spic & Span Pros Power Washing, Window & Gutter Cleaning. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="hover:text-chart-2 transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-chart-2 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
