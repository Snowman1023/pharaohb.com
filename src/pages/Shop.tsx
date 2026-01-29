import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import { cn } from '@/lib/utils';

// Products without categories
const products = [
  { id: 1, name: 'The Ankh Pendant', price: '$89', description: 'Hand-crafted gold pendant symbolizing eternal life.' },
  { id: 2, name: 'Sacred Incense Set', price: '$34', description: 'Premium frankincense and myrrh for sacred ceremonies.' },
  { id: 3, name: 'Papyrus Journal', price: '$45', description: 'Leather-bound journal with golden Egyptian motifs.' },
  { id: 4, name: 'Signature Robe', price: '$199', description: 'Luxurious black silk robe with gold embroidery.' },
  { id: 5, name: 'Healing Crystal Set', price: '$75', description: 'Curated collection of crystals for spiritual practice.' },
  { id: 6, name: 'Golden Ankh Ring', price: '$129', description: 'Sterling silver ring with gold-plated ankh design.' },
  { id: 7, name: 'Sacred Candle Collection', price: '$55', description: 'Set of three hand-poured soy candles with sacred scents.' },
  { id: 8, name: 'Temple Meditation Mat', price: '$85', description: 'Premium meditation mat with Egyptian hieroglyphic design.' },
];

const Shop = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Shop"
        subtitle="Editions, objects, and other forms."
        symbol="𓋾"
      />

      {/* Products grid */}
      <SectionContainer>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id}
              className={cn(
                "group relative bg-card border border-border hover:border-primary/50",
                "transition-all duration-500 overflow-hidden cursor-pointer"
              )}
            >
              {/* Product image placeholder */}
              <PlaceholderImage 
                aspectRatio="square" 
                label=""
                symbol="☥"
              />

              {/* Product info */}
              <div className="p-4 space-y-2">
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
