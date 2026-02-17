import { Link } from 'react-router-dom';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import { cn } from '@/lib/utils';
import brandSymbol from '@/assets/brand-symbol.png';

export function Footer() {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <footer
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-10 sm:py-16 border-t border-primary/20 bg-background"
    >
      {/* Egyptian decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className={cn(
          "transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Main footer content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Brand */}
            <div className="text-center md:text-left">
              <Link to="/" className="font-cinzel text-xl text-gold-gradient">
                Pharaoh B.
              </Link>
              <p className="font-cormorant text-sm text-muted-foreground mt-2 italic">
                Writer. Architect. Mirror. Messenger.
              </p>
            </div>

            {/* Explore (footerNav) */}
            <div className="text-center md:text-left">
              <h4 className="font-cinzel text-sm tracking-wider text-foreground/80 mb-4">
                Explore
              </h4>
              <div className="space-y-2">
                <Link to="/about" className="block font-cormorant text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
                <Link to="/canon" className="block font-cormorant text-sm text-muted-foreground hover:text-primary transition-colors">
                  The Canon
                </Link>
                <Link to="/transmissions" className="block font-cormorant text-sm text-muted-foreground hover:text-primary transition-colors">
                  Transmissions
                </Link>
                <Link to="/echoverse" className="block font-cormorant text-sm text-muted-foreground hover:text-primary transition-colors">
                  Echoverse
                </Link>
                <Link to="/shop" className="block font-cormorant text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shop
                </Link>
                <Link to="/news" className="block font-cormorant text-sm text-muted-foreground hover:text-primary transition-colors">
                  News
                </Link>
                <Link to="/contact" className="block font-cormorant text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Realms (externalLinks) */}
            <div className="text-center md:text-left">
              <h4 className="font-cinzel text-sm tracking-wider text-foreground/80 mb-4">
                Realms
              </h4>
              <div className="space-y-2">
                <a
                  href="https://1111.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-cormorant text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  1111.live
                </a>
                <a
                  href="https://humanityimagined.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-cormorant text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Humanity Imagined
                </a>
                <a
                  href="https://echoverse.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-cormorant text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Echoverse
                </a>
              </div>
            </div>

            {/* Connect (socialLinks) */}
            <div className="text-center md:text-left">
              <h4 className="font-cinzel text-sm tracking-wider text-foreground/80 mb-4">
                Connect
              </h4>
              <div className="space-y-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-cormorant text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-cormorant text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="https://youtube.com/@PharaohB-1111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-cormorant text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  YouTube
                </a>
                <a
                  href="https://tiktok.com/@awmoive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-cormorant text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Disclaimer */}
          <p className="font-cormorant text-xs text-muted-foreground/70 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            PharaohB.com is a curated archive of writing, research, and creative work.
            It includes historical material, philosophical interpretations, and symbolic frameworks.
            Facts and sources are labeled. Interpretations are presented as interpretations.
            This site is not a religion and does not ask you to adopt beliefs — only to explore ideas and think clearly.
          </p>

          {/* Copyright */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="font-cormorant text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="font-cormorant text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
            <p className="font-cormorant text-xs text-muted-foreground">
              © 2024 Pharaoh B. All Rights Reserved.
            </p>
            <img src={brandSymbol} alt="Pharaoh B. Symbol" className="w-8 h-8 object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
