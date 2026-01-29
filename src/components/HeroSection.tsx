import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import healingFrequency from '@/assets/healing-frequency.avif';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${healingFrequency})` }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative ornament */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Main headline */}
        <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight">
          <span className="text-gold-gradient text-glow-gold">
            {/* PLACEHOLDER: [HERO_HEADLINE] */}
            [HERO_HEADLINE]
          </span>
        </h1>

        {/* Subhead */}
        <p className="font-cormorant text-xl md:text-2xl text-muted-foreground mb-12 italic max-w-2xl mx-auto">
          {/* PLACEHOLDER: [HERO_SUBHEAD] */}
          [HERO_SUBHEAD]
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            className="font-cinzel text-sm tracking-widest px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500"
          >
            <Link to="/canon">
              Enter the Archive
            </Link>
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="font-cinzel text-sm tracking-widest px-8 py-6 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            <Link to="/shop">
              Shop Art
            </Link>
          </Button>
        </div>

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
