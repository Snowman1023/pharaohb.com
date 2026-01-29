import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// PLACEHOLDER: Book data - replace with actual content
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

const Canon = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="The Canon"
        subtitle="Sacred texts and teachings for the modern seeker"
        symbol="𓅓"
      />

      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-cormorant text-xl text-muted-foreground">
            {/* PLACEHOLDER: Canon intro text */}
            Each work is a key to unlock the chambers of your own becoming. 
            These are not merely books—they are portals to remembrance.
          </p>
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
            >
              {/* Book cover placeholder */}
              <PlaceholderImage 
                aspectRatio="portrait" 
                label={`Cover: ${book.title}`}
                symbol="𓅓"
              />

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
      </SectionContainer>
    </PageLayout>
  );
};

export default Canon;
