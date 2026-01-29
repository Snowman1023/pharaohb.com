import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import { cn } from '@/lib/utils';

export function AboutSection() {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section 
      id="about" 
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 md:py-32"
    >
      <div className="container mx-auto px-6">
        <div className={cn(
          "transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-5xl text-gold-gradient mb-4">
              The Messenger
            </h2>
            <div className="egyptian-divider max-w-md mx-auto">
              <span className="text-primary text-2xl">☥</span>
            </div>
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            {/* Image placeholder */}
            <div className="relative order-2 md:order-1">
              <div className="aspect-[3/4] bg-gradient-to-br from-charcoal to-muted rounded border-gold-gradient overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4 text-primary">☥</div>
                    <p className="font-cormorant text-muted-foreground italic">
                      Portrait of the Pharaoh
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative frame corners */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-primary" />
              <div className="absolute -top-3 -right-3 w-12 h-12 border-r-2 border-t-2 border-primary" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-l-2 border-b-2 border-primary" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-primary" />
            </div>

            {/* Text content */}
            <div className="order-1 md:order-2 space-y-6">
              <p className="font-cormorant text-xl md:text-2xl text-foreground/90 leading-relaxed">
                I am Pharaoh B., the architect of echoes and guardian of sacred truths. 
                My work exists at the intersection of ancient wisdom and contemporary consciousness.
              </p>
              
              <p className="font-cormorant text-lg text-muted-foreground leading-relaxed">
                Through words forged in the fires of revelation, I craft pathways 
                for those seeking to remember who they truly are. Every book, every teaching, 
                every creation is a mirror—reflecting back the royalty that sleeps within you.
              </p>

              <p className="font-cormorant text-lg text-muted-foreground leading-relaxed">
                From the sacred lands to the cosmic realms, my journey has been one of 
                transformation and awakening. Now, I extend my hand to guide you through 
                the same golden gates that have been opened before me.
              </p>

              <div className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-primary" />
                  <span className="font-cinzel text-sm text-primary tracking-widest">
                    WRITER • ARCHITECT • MIRROR • MESSENGER
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
