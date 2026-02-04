import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import brandSymbol from '@/assets/brand-symbol.png';

const books = [
  {
    id: 1,
    title: "The Book of Sacred Echoes",
    subtitle: "Volume I: Awakening",
    description: "A transformative journey through the chambers of self-discovery and ancient wisdom.",
    price: "$29.99",
  },
  {
    id: 2,
    title: "Letters to the Forgotten Throne",
    subtitle: "Reclaiming Your Crown",
    description: "Messages from the divine realm to remind you of the royalty you carry within.",
    price: "$24.99",
  },
  {
    id: 3,
    title: "The Architect's Blueprint",
    subtitle: "Building Sacred Spaces",
    description: "A practical guide to constructing a life aligned with your highest purpose.",
    price: "$34.99",
  },
];

export function CanonSection() {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section 
      id="canon" 
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background"
    >
      <div className="container mx-auto px-6">
        <div className={cn(
          "transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-5xl text-gold-gradient mb-4">
              The Canon
            </h2>
            <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
              Sacred texts and teachings for the modern seeker. Each work is a key to unlock 
              the chambers of your own becoming.
            </p>
            <div className="egyptian-divider max-w-md mx-auto mt-6">
              <img src={brandSymbol} alt="Pharaoh B. Symbol" className="w-10 h-10 object-contain" />
            </div>
          </div>

          {/* Books grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {books.map((book, index) => (
              <div 
                key={book.id}
                className={cn(
                  "group relative bg-card border border-border hover:border-primary/50 transition-all duration-500",
                  "transform hover:-translate-y-2"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Book cover placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-br from-muted to-charcoal flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="relative text-center p-6">
                    <div className="text-5xl mb-4 text-primary/50 group-hover:text-primary transition-colors">
                      𓅓
                    </div>
                    <h3 className="font-cinzel text-lg text-foreground/80">
                      {book.title}
                    </h3>
                  </div>
                  
                  {/* Golden frame on hover */}
                  <div className="absolute inset-4 border border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
                </div>

                {/* Book info */}
                <div className="p-6 space-y-3">
                  <h3 className="font-cinzel text-xl text-foreground group-hover:text-gold-gradient transition-colors">
                    {book.title}
                  </h3>
                  <p className="font-cormorant text-sm text-primary italic">
                    {book.subtitle}
                  </p>
                  <p className="font-cormorant text-muted-foreground text-sm leading-relaxed">
                    {book.description}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="font-cinzel text-xl text-primary">
                      {book.price}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="font-cinzel text-xs tracking-wider border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CanonSection;
