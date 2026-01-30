import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Button } from '@/components/ui/button';
import { products, Product } from '@/data/products';
import { cn } from '@/lib/utils';

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
        symbol="𓋾"
      />

      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="font-cormorant text-xl text-muted-foreground">
            Each item carries the essence of ancient royalty. 
            Adorn yourself with symbols of power and protection.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 font-cinzel text-sm tracking-wider border transition-all duration-300",
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
