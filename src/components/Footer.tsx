import { Link } from 'react-router-dom';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import { cn } from '@/lib/utils';

export function Footer() {
  const { ref, isVisible } = useFadeInOnScroll();

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
          {/* Footer links & Copyright */}
          <div className="flex flex-col items-center gap-8">
            {/* Navigation links */}
            <div className="flex items-center gap-6 flex-wrap justify-center">
              {[
                { to: '/about', label: 'About' },
                { to: '/canon', label: 'The Canon' },
                { to: '/echoverse', label: 'Echoverse' },
                { to: '/shop', label: 'Shop' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-cinzel text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-6">
              {/* PLACEHOLDER: Social links - replace href with actual URLs */}
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
              {/* PLACEHOLDER: Copyright year */}
              © 2024 Pharaoh B. All Rights Reserved.
            </p>
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
