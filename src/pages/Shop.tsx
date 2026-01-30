import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Unified product grid - books, art, apparel
const products = [
  // Books
  { id: 1, type: 'book', slug: 'the-book-of-sacred-echoes', name: 'The Book of Sacred Echoes', price: '$28', symbol: '𓏏' },
  { id: 2, type: 'book', slug: 'letters-to-the-forgotten-throne', name: 'Letters to the Forgotten Throne', price: '$24', symbol: '𓏏' },
  { id: 3, type: 'book', slug: 'the-architects-blueprint', name: 'The Architect\'s Blueprint', price: '$32', symbol: '𓏏' },
  // Art
  { id: 4, type: 'art', slug: 'artwork-1', name: 'Sacred Geometry I', price: '$180', symbol: '𓋹' },
  { id: 5, type: 'art', slug: 'artwork-2', name: 'Temple Forms', price: '$240', symbol: '𓋹' },
  { id: 6, type: 'art', slug: 'artwork-3', name: 'Echo Pattern', price: '$160', symbol: '𓋹' },
  // Apparel
  { id: 7, type: 'apparel', slug: 'ankh-pendant', name: 'The Ankh Pendant', price: '$89', symbol: '☥' },
  { id: 8, type: 'apparel', slug: 'signature-robe', name: 'Signature Robe', price: '$199', symbol: '𓂓' },
  { id: 9, type: 'apparel', slug: 'golden-ankh-ring', name: 'Golden Ankh Ring', price: '$129', symbol: '☥' },
  { id: 10, type: 'apparel', slug: 'papyrus-journal', name: 'Papyrus Journal', price: '$45', symbol: '𓏏' },
  { id: 11, type: 'apparel', slug: 'sacred-incense-set', name: 'Sacred Incense Set', price: '$34', symbol: '𓆣' },
  { id: 12, type: 'apparel', slug: 'temple-meditation-mat', name: 'Temple Meditation Mat', price: '$85', symbol: '𓇳' },
];

const Shop = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Shop"
        subtitle="Books, art, and objects."
        symbol="𓋾"
      />

      <SectionContainer>
        <div className="max-w-6xl mx-auto">
          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div 
                key={product.id}
                className="group border border-border hover:border-primary/50 bg-card/30 transition-all duration-500"
              >
                {/* Product image placeholder */}
                <PlaceholderImage 
                  aspectRatio="square" 
                  label=""
                  symbol={product.symbol}
                />

                {/* Product info */}
                <div className="p-4 space-y-3">
                  <h3 className="font-cinzel text-sm text-foreground group-hover:text-gold-gradient transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-cinzel text-lg text-primary">
                      {product.price}
                    </span>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 font-cinzel text-xs tracking-wider border-border text-muted-foreground hover:border-primary hover:text-primary"
                    >
                      <Link to={product.type === 'book' ? `/canon/${product.slug}` : product.type === 'art' ? `/art/${product.slug}` : '#'}>
                        Details
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 font-cinzel text-xs tracking-wider bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Purchase
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default Shop;
