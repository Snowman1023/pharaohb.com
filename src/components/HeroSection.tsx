import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative ornament */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Main headline */}
        <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight">
          <span className="text-gold-gradient text-glow-gold">
            Welcome to the Echo
          </span>
          <br />
          <span className="text-foreground/90">
            of Your Own Becoming
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-cormorant text-xl md:text-2xl text-muted-foreground mb-4 italic">
          Pharaoh B. | Writer. Architect. Mirror. Messenger.
        </p>

        {/* Subtitle */}
        <p className="font-cormorant text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
          Step into the sacred space where ancient wisdom meets modern revelation.
          This is not just a destination—it is a mirror reflecting the eternal within you.
        </p>

        {/* CTA Button */}
        <Button
          onClick={() => scrollToSection('#canon')}
          className="font-cinzel text-sm tracking-widest px-8 py-6 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 glow-gold"
        >
          Enter the Canon
        </Button>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse-gold" />
          </div>
        </div>
      </div>

      {/* Egyptian decorative corners */}
      <div className="absolute top-20 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-20 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30" />
    </section>
  );
}

export default HeroSection;
