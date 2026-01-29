import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: "The Ankh Pendant",
    category: "Jewelry",
    price: "$89.00",
    description: "Hand-crafted gold pendant symbolizing eternal life.",
  },
  {
    id: 2,
    name: "Sacred Incense Set",
    category: "Ritual",
    price: "$34.00",
    description: "Premium frankincense and myrrh for sacred ceremonies.",
  },
  {
    id: 3,
    name: "Papyrus Journal",
    category: "Stationery",
    price: "$45.00",
    description: "Leather-bound journal with golden Egyptian motifs.",
  },
  {
    id: 4,
    name: "Pharaoh B. Signature Robe",
    category: "Apparel",
    price: "$199.00",
    description: "Luxurious black silk robe with gold embroidery.",
  },
];

export function ShopSection() {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section 
      id="shop" 
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
              The Sacred Shop
            </h2>
            <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
              Artifacts and treasures for your sacred journey. Each item carries the 
              essence of ancient royalty.
            </p>
            <div className="egyptian-divider max-w-md mx-auto mt-6">
              <span className="text-primary text-2xl">𓋾</span>
            </div>
          </div>

          {/* Products grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className={cn(
                  "group relative bg-card border border-border hover:border-primary/50",
                  "transition-all duration-500 overflow-hidden"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Product image placeholder */}
                <div className="aspect-square bg-gradient-to-br from-muted to-charcoal flex items-center justify-center relative">
                  <div className="text-4xl text-primary/40 group-hover:text-primary/70 group-hover:scale-110 transition-all duration-500">
                    ☥
                  </div>
                  
                  {/* Quick add overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="font-cinzel text-xs tracking-wider bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Quick View
                    </Button>
                  </div>
                </div>

                {/* Product info */}
                <div className="p-4 space-y-2">
                  <span className="font-cinzel text-xs text-primary/70 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-cinzel text-sm text-foreground group-hover:text-gold-gradient transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-cormorant text-xs text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                  <div className="pt-2">
                    <span className="font-cinzel text-lg text-primary">
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="font-cinzel text-sm tracking-widest px-8 py-6 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopSection;
