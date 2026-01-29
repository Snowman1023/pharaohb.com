import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import { cn } from '@/lib/utils';

export function Footer() {
  const { ref, isVisible } = useFadeInOnScroll();
  const [email, setEmail] = useState('');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', contactForm);
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <footer 
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 border-t border-primary/20"
    >
      {/* Egyptian decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className={cn(
          "transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="font-cinzel text-2xl text-gold-gradient">
                Join the Sacred Circle
              </h3>
              <p className="font-cormorant text-muted-foreground">
                Receive transmissions from the eternal realm. Wisdom, updates, and exclusive 
                offerings delivered to your sanctuary.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-muted/50 border-primary/30 focus:border-primary font-cormorant"
                />
                <Button
                  type="submit"
                  className="w-full font-cinzel text-sm tracking-wider bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <h3 className="font-cinzel text-2xl text-gold-gradient">
                Send a Message
              </h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="bg-muted/50 border-primary/30 focus:border-primary font-cormorant"
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="bg-muted/50 border-primary/30 focus:border-primary font-cormorant"
                />
                <Textarea
                  placeholder="Your message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="bg-muted/50 border-primary/30 focus:border-primary font-cormorant min-h-24"
                />
                <Button
                  type="submit"
                  variant="outline"
                  className="w-full font-cinzel text-sm tracking-wider border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Social links & Copyright */}
          <div className="mt-16 pt-8 border-t border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Social icons */}
              <div className="flex items-center gap-6">
                {['Instagram', 'Twitter', 'YouTube', 'TikTok'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="font-cinzel text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>

              {/* Logo */}
              <div className="font-cinzel text-xl text-gold-gradient">
                ☥ PHARAOH B. 1111 ☥
              </div>

              {/* Copyright */}
              <p className="font-cormorant text-sm text-muted-foreground">
                © 2024 Pharaoh B. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Bottom ornament */}
          <div className="flex justify-center mt-12">
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
