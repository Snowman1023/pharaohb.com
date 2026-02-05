import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Button } from '@/components/ui/button';
import { products, Product } from '@/data/products';
import { cn } from '@/lib/utils';
import brandSymbol from '@/assets/brand-symbol.png';

const categories = ['All', 'Books', 'Art', 'Objects', 'Apparel'] as const;
type Category = typeof categories[number];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <PageLayout>
      <PageHeader 
        title="The Sacred Shop"
        subtitle="Artifacts and treasures for your sacred journey"
        orientationText="These works are offered as companions, not commodities."
      />

      {/* Canvas Prints Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-primary" />
            <span className="font-cinzel text-xs tracking-widest uppercase text-primary">
              Canvas Prints
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>

          <p className="text-center font-cormorant text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Original artwork printed on museum-quality canvas. Each piece is made to order 
            with archival inks and gallery-wrapped for timeless display.
          </p>

          <div className="text-center">
            <a
              href="https://printful.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-cinzel text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Browse All Prints
              <span>→</span>
            </a>
          </div>

          {/* Divider with brand symbol */}
          <div className="flex items-center justify-center gap-4 mt-16">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <img src={brandSymbol} alt="" className="h-6 w-auto opacity-70" />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </div>
      </section>

      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="font-cormorant text-xl text-muted-foreground">
            Each item carries the essence of ancient royalty. 
            Adorn yourself with symbols of power and protection.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 sm:px-6 py-2 min-h-[44px] font-cinzel text-xs sm:text-sm tracking-wider border transition-all duration-300",
                activeCategory === category
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className={cn(
                "group relative bg-card border border-border hover:border-primary/50",
                "transition-all duration-500 overflow-hidden"
              )}
            >
              {/* Product image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Quick view overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  {product.link ? (
                    <Button
                      asChild
                      size="sm"
                      className="font-cinzel text-xs tracking-wider bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link to={product.link}>View Details</Link>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      className="font-cinzel text-xs tracking-wider bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Quick View
                    </Button>
                  )}
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
