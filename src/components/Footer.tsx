import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  const { ref, isVisible } = useFadeInOnScroll();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer 
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-16 border-t border-border/50"
    >
      {/* Decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className={cn(
          "transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Main footer content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Brand */}
            <div className="space-y-4">
              <Link to="/" className="font-cinzel text-xl text-gold-gradient">
                Pharaoh B.
              </Link>
              <p className="font-cormorant text-muted-foreground">
                Writer. Architect. Mirror. Messenger.
              </p>
            </div>

            {/* Column 2: Navigation */}
            <div className="space-y-4">
              <h4 className="font-cinzel text-sm tracking-widest text-foreground">
                Navigate
              </h4>
              <div className="space-y-2">
                {[
                  { to: '/about', label: 'About' },
                  { to: '/canon', label: 'The Canon' },
                  { to: '/art', label: 'Art' },
                  { to: '/music', label: 'Music' },
                  { to: '/shop', label: 'Shop' },
                  { to: '/writings', label: 'Writings' },
                  { to: '/contact', label: 'Contact' },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block font-cormorant text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: Email Updates */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="font-cinzel text-sm tracking-widest text-foreground">
                Updates
              </h4>
              <p className="font-cormorant text-muted-foreground">
                Receive updates, writings, and new works.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50 border-border font-cormorant"
                  required
                />
                <Button type="submit" variant="outline" className="font-cinzel text-xs shrink-0">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Legal links */}
              <div className="flex items-center gap-6">
                <Link
                  to="/privacy"
                  className="font-cormorant text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  to="/terms"
                  className="font-cormorant text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms
                </Link>
              </div>

              {/* Copyright */}
              <p className="font-cormorant text-sm text-muted-foreground">
                © {new Date().getFullYear()} Pharaoh B. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
