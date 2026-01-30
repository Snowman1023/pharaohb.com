import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/canon', label: 'The Canon' },
  { href: '/art', label: 'Art' },
  { href: '/music', label: 'Music' },
  { href: '/writings', label: 'Writings' },
  { href: '/shop', label: 'Shop' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md border-b border-primary/20' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-cinzel text-xl md:text-2xl font-semibold text-gold-gradient tracking-widest"
          >
            PHARAOH B. 1111
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "font-cinzel text-sm tracking-wider transition-colors duration-300 relative group",
                  location.pathname === link.href || location.pathname.startsWith(link.href + '/')
                    ? "text-primary" 
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300",
                  location.pathname === link.href || location.pathname.startsWith(link.href + '/') 
                    ? "w-full" 
                    : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={cn(
                "w-full h-0.5 bg-primary transition-all duration-300",
                isMobileMenuOpen && "rotate-45 translate-y-2"
              )} />
              <span className={cn(
                "w-full h-0.5 bg-primary transition-all duration-300",
                isMobileMenuOpen && "opacity-0"
              )} />
              <span className={cn(
                "w-full h-0.5 bg-primary transition-all duration-300",
                isMobileMenuOpen && "-rotate-45 -translate-y-2"
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-500",
          isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
        )}>
          <div className="flex flex-col gap-4 py-4 border-t border-primary/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "font-cinzel text-sm tracking-wider transition-colors text-left",
                  location.pathname === link.href || location.pathname.startsWith(link.href + '/')
                    ? "text-primary" 
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
