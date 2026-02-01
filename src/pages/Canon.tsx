import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Button } from '@/components/ui/button';
import { books, getBookBySlug } from '@/data/books';
import { cn } from '@/lib/utils';

const Canon = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="The Canon"
        subtitle="Sacred texts and teachings for the modern seeker"
        orientationText="Begin here."
        symbol="𓅓"
      />

      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-cormorant text-xl text-muted-foreground">
            Each work is a key to unlock the chambers of your own becoming. 
            These are not merely books—they are portals to remembrance.
          </p>
        </div>

        {/* Books grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {books.map((book) => (
            <div 
              key={book.slug}
              className={cn(
                "group relative bg-card border border-border hover:border-primary/50 transition-all duration-500",
                "transform hover:-translate-y-2"
              )}
            >
              {/* Book cover */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Book info */}
              <div className="p-6 space-y-3">
                <h3 className="font-cinzel text-xl text-foreground group-hover:text-gold-gradient transition-colors">
                  {book.title}
                </h3>
                <p className="font-cormorant text-sm text-primary italic">
                  {book.subtitle}
                </p>
                <p className="font-cormorant text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {book.description}
                </p>
                <div className="flex items-center justify-between pt-4">
                  <span className="font-cinzel text-xl text-primary">
                    {book.price}
                  </span>
                  <Button 
                    asChild
                    variant="outline" 
                    size="sm"
                    className="font-cinzel text-xs tracking-wider border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Link to={`/canon/${book.slug}`}>View Details</Link>
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
