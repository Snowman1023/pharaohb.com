import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Mock book/product data
const canonItems = [
  {
    id: 1,
    slug: 'the-book-of-sacred-echoes',
    title: 'The Book of Sacred Echoes',
    subtitle: 'Volume I',
    description: 'A foundational text exploring the nature of consciousness, memory, and the architecture of self. This work serves as an entry point into the broader philosophy.',
    price: '$28',
  },
  {
    id: 2,
    slug: 'letters-to-the-forgotten-throne',
    title: 'Letters to the Forgotten Throne',
    subtitle: 'Collected Correspondence',
    description: 'A series of meditations written as letters to the self that exists beyond time. Each piece addresses themes of identity, purpose, and remembrance.',
    price: '$24',
  },
  {
    id: 3,
    slug: 'the-architects-blueprint',
    title: 'The Architect\'s Blueprint',
    subtitle: 'Essays on Form',
    description: 'Essays examining the relationship between structure and meaning. How form shapes thought, and how thought shapes experience.',
    price: '$32',
  },
  {
    id: 4,
    slug: 'on-sacred-geometry',
    title: 'On Sacred Geometry',
    subtitle: 'Visual Philosophy',
    description: 'An exploration of geometric principles as they relate to consciousness and creation. Includes visual diagrams and contemplative exercises.',
    price: '$45',
  },
  {
    id: 5,
    slug: 'the-frequency-of-becoming',
    title: 'The Frequency of Becoming',
    subtitle: 'Audio Companion',
    description: 'A written guide accompanying the audio series. Contains transcriptions, extended notes, and additional material for deeper study.',
    price: '$18',
  },
  {
    id: 6,
    slug: 'the-law-of-mirrors',
    title: 'The Law of Mirrors',
    subtitle: 'Principles of Reflection',
    description: 'A concise work outlining the principle of reflection as it operates in consciousness. How what we perceive reflects what we are.',
    price: '$22',
  },
];

const Canon = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="The Canon"
        subtitle="Written works and collected texts."
        symbol="𓏏"
      />

      <SectionContainer>
        <div className="max-w-6xl mx-auto">
          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {canonItems.map((item) => (
              <div 
                key={item.id}
                className="group border border-border hover:border-primary/50 bg-card/30 transition-all duration-500"
              >
                {/* Book cover placeholder */}
                <PlaceholderImage 
                  aspectRatio="portrait" 
                  label=""
                  symbol="𓏏"
                />
                
                {/* Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-cinzel text-lg text-foreground group-hover:text-gold-gradient transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-cormorant text-sm text-primary/70 italic">
                      {item.subtitle}
                    </p>
                  </div>
                  
                  <p className="font-cormorant text-muted-foreground text-sm line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-cinzel text-xl text-primary">
                      {item.price}
                    </span>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="font-cinzel text-xs tracking-wider border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Link to={`/canon/${item.slug}`}>
                        View Details
                      </Link>
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

export default Canon;
