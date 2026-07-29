import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MobileFloatingButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-primary shadow-2xl">
      <Button
        asChild
        className="w-full h-16 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded-none"
        data-testid="button-mobile-floating-call"
      >
        <a href="tel:7326484094" className="flex items-center justify-center gap-3">
          <Phone className="w-6 h-6" />
          Call (732) 648-4094
        </a>
      </Button>
    </div>
  );
}
