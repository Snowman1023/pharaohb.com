import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import { Link } from 'react-router-dom';

// Filter options (visual only for now)
const filters = {
  theme: ['All', 'Sacred', 'Abstract', 'Architectural'],
  size: ['All', 'Small', 'Medium', 'Large'],
  format: ['All', 'Canvas', 'Print', 'Digital'],
};

// Mock art items
const artItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  slug: `artwork-${i + 1}`,
  title: i % 4 === 0 ? '' : `Untitled ${i + 1}`, // Some without titles
  symbol: ['𓋹', '𓇳', '𓂓', '𓃭', '𓆣', '𓅓'][i % 6],
}));

const Art = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Art"
        subtitle="Visual works and explorations."
        symbol="𓋹"
      />

      <SectionContainer>
        <div className="max-w-6xl mx-auto">
          {/* Filter Bar (Visual Only) */}
          <div className="mb-12 pb-6 border-b border-border/50">
            <div className="flex flex-wrap gap-8">
              {Object.entries(filters).map(([category, options]) => (
                <div key={category} className="space-y-2">
                  <label className="font-cinzel text-xs tracking-widest text-muted-foreground uppercase">
                    {category}
                  </label>
                  <div className="flex gap-2">
                    {options.map((option, idx) => (
                      <button
                        key={option}
                        className={`px-3 py-1 font-cormorant text-sm transition-colors ${
                          idx === 0 
                            ? 'text-primary border-b border-primary' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dense Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {artItems.map((item) => (
              <Link
                key={item.id}
                to={`/art/${item.slug}`}
                className="group relative overflow-hidden"
              >
                <PlaceholderImage 
                  aspectRatio="square" 
                  label=""
                  symbol={item.symbol}
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Hover overlay with optional title */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  {item.title && (
                    <span className="font-cinzel text-sm text-foreground">
                      {item.title}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Load more indicator */}
          <div className="mt-12 text-center">
            <p className="font-cormorant text-muted-foreground italic">
              More works available.
            </p>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default Art;
