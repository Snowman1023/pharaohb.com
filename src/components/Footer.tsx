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
      className="relative py-16 border-t border-primary/20"
    >
      {/* Egyptian decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className={cn(
          "transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Column 1: Brand & Newsletter */}
            <div className="space-y-6">
              <div className="font-cinzel text-xl text-gold-gradient">
                Pharaoh B.
              </div>
              <p className="font-cormorant text-muted-foreground italic">
                Writer. Architect. Mirror. Messenger.
              </p>
              
              {/* Newsletter signup */}
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <label className="font-cinzel text-xs tracking-widest text-foreground/80">
                  Stay Close
                </label>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/50 border-border font-cormorant"
                    required
                  />
                  <Button type="submit" variant="outline" className="font-cinzel text-xs">
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>

            {/* Column 2: Navigation */}
            <div className="space-y-6">
              <h4 className="font-cinzel text-sm tracking-widest text-foreground/80">
                Navigate
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { to: '/about', label: 'About' },
                  { to: '/work', label: 'Work' },
                  { to: '/shop', label: 'Shop' },
                  { to: '/contact', label: 'Contact' },
                  { to: '/echoverse', label: 'Echoverse' },
                  { to: '/notes', label: 'Notes' },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="font-cormorant text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: Other Doors (External Links) */}
            <div className="space-y-6">
              <h4 className="font-cinzel text-sm tracking-widest text-foreground/80">
                Other Doors
              </h4>
              <div className="space-y-3">
                <a
                  href="https://1111.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-cormorant text-muted-foreground hover:text-primary transition-colors"
                >
                  1111.live →
                </a>
                <a
                  href="https://humanityimagined.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-cormorant text-muted-foreground hover:text-primary transition-colors"
                >
                  Humanity Imagined →
                </a>
                <a
                  href="https://echoverse.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-cormorant text-muted-foreground hover:text-primary transition-colors"
                >
                  Echoverse →
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="font-cinzel text-sm tracking-widest text-foreground/80 mb-3">
                  Connect
                </h4>
                <div className="flex items-center gap-4">
                  {['Instagram', 'Twitter', 'YouTube'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="font-cinzel text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border">
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
                © {new Date().getFullYear()} Pharaoh B.
              </p>
            </div>
          </div>

          {/* Bottom ornament */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
              <span className="text-2xl text-primary">𓂀</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
