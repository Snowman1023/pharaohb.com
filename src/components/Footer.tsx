import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import brandSymbol from '@/assets/brand-symbol.png';

export function Footer() {
  const { ref, isVisible } = useFadeInOnScroll();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // PLACEHOLDER: Implement newsletter signup
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Column 1: Brand & Newsletter */}
            <div className="space-y-6">
              <div className="font-cinzel text-xl text-gold-gradient">
                ☥ PHARAOH B. 1111 ☥
              </div>
              <p className="font-cormorant text-muted-foreground">
                {/* PLACEHOLDER: Brand tagline */}
                Awakening consciousness through ancient wisdom and modern frequencies.
              </p>
              
              {/* Newsletter signup */}
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <label className="font-cinzel text-xs tracking-widest text-foreground/80">
                  Join the Inner Circle
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/50 border-border font-cormorant"
                    required
                  />
                  <Button type="submit" variant="outline" className="font-cinzel text-xs min-h-[44px] whitespace-nowrap">
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
                  { to: '/canon', label: 'The Canon' },
                  { to: '/echoverse', label: 'Echoverse' },
                  { to: '/shop', label: 'Shop' },
                  { to: '/news', label: 'News' },
                  { to: '/contact', label: 'Contact' },
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
                {/* PLACEHOLDER: Replace # with actual URLs when available */}
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
                  {/* PLACEHOLDER: Replace # with actual social URLs */}
                  {['Instagram', 'Twitter', 'YouTube', 'TikTok'].map((social) => (
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
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              {/* Legal links */}
              <div className="flex items-center gap-6">
                <Link
                  to="/privacy"
                  className="font-cormorant text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="font-cormorant text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </div>

              {/* Copyright */}
              <p className="font-cormorant text-sm text-muted-foreground">
                {/* PLACEHOLDER: Update year dynamically if needed */}
                © 2024 Pharaoh B. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Bottom ornament */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
              <img src={brandSymbol} alt="Pharaoh B. Symbol" className="w-10 h-10 object-contain" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
