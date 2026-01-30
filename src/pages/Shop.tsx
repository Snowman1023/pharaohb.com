import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// PLACEHOLDER: Product data - replace with actual content
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
  {
    id: 5,
    name: "Healing Crystal Set",
    category: "Spiritual",
    price: "$75.00",
    description: "Curated collection of crystals for spiritual practice.",
  },
  {
    id: 6,
    name: "Golden Ankh Ring",
    category: "Jewelry",
    price: "$129.00",
    description: "Sterling silver ring with gold-plated ankh design.",
  },
  {
    id: 7,
    name: "Sacred Candle Collection",
    category: "Ritual",
    price: "$55.00",
    description: "Set of three hand-poured soy candles with sacred scents.",
  },
  {
    id: 8,
    name: "Temple Meditation Mat",
    category: "Wellness",
    price: "$85.00",
    description: "Premium meditation mat with Egyptian hieroglyphic design.",
  },
];

const Shop = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="The Sacred Shop"
        subtitle="Artifacts and treasures for your sacred journey"
        symbol="𓋾"
      />

      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-cormorant text-xl text-muted-foreground">
            {/* PLACEHOLDER: Shop intro text */}
            Each item carries the essence of ancient royalty. 
            Adorn yourself with symbols of power and protection.
          </p>
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
            >
              {/* Product image placeholder */}
              <div className="relative">
                <PlaceholderImage 
                  aspectRatio="square" 
                  label={`Product: ${product.name}`}
                  symbol="☥"
                />
                
                {/* Quick view overlay */}
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
      </SectionContainer>
    </PageLayout>
  );
};

export default Shop;
