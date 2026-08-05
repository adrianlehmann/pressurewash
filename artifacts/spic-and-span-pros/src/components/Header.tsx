import { useState, useEffect } from 'react';
import { Menu, X, Phone, Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-md'
          : 'bg-transparent'
      }`}
      data-testid="header"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 group"
            data-testid="button-logo"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Droplet className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:block">
              Spic & Span Pros
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                  isScrolled
                    ? 'text-foreground hover:text-primary hover:bg-secondary'
                    : 'text-white hover:text-white/80'
                }`}
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:7326484094"
              className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-white hover:text-white/80'
              }`}
              data-testid="link-phone-desktop"
            >
              <Phone className="w-4 h-4" />
              (732) 648-4094
            </a>
            <Button
              onClick={() => handleNavClick('#contact')}
              className="border-0 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              data-testid="button-cta-desktop"
            >
              Free Estimate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden transition-colors duration-300 ${
                  isScrolled
                    ? 'text-foreground hover:text-foreground'
                    : 'text-white hover:text-white'
                }`}
                data-testid="button-menu-mobile"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-4 mt-8" data-testid="nav-mobile">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="border-t pt-4 mt-2">
                  <a
                    href="tel:7326484094"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-semibold text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                    data-testid="link-phone-mobile"
                  >
                    <Phone className="w-5 h-5" />
                    (732) 648-4094
                  </a>
                  <Button
                    onClick={() => handleNavClick('#contact')}
                    className="w-full mt-3 border-0 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    data-testid="button-cta-mobile"
                  >
                    Free Estimate
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
