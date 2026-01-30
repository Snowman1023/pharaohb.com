import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const CanonEntry = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Convert slug to display title
  const displayTitle = slug
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Untitled';

  return (
    <PageLayout>
      <SectionContainer className="pt-32 md:pt-40">
        <div className="max-w-5xl mx-auto">
          {/* Back Link */}
          <Link 
            to="/canon" 
            className="inline-flex items-center gap-2 font-cinzel text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to The Canon
          </Link>

          {/* Product Layout */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Image */}
            <div>
              <PlaceholderImage 
                aspectRatio="portrait" 
                label=""
                symbol="𓏏"
                className="w-full"
              />
            </div>

            {/* Right: Details */}
            <div className="space-y-6">
              <div>
                <h1 className="font-cinzel text-3xl md:text-4xl text-gold-gradient mb-2">
                  {displayTitle}
                </h1>
                <p className="font-cormorant text-lg text-primary/70 italic">
                  Volume I
                </p>
              </div>

              <div className="font-cinzel text-3xl text-primary">
                $28
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h2 className="font-cinzel text-lg text-foreground">Description</h2>
                <p className="font-cormorant text-muted-foreground leading-relaxed">
                  A foundational text exploring the nature of consciousness, memory, and the architecture of self. This work serves as an entry point into the broader philosophy, offering both conceptual frameworks and practical contemplations.
                </p>
                <p className="font-cormorant text-muted-foreground leading-relaxed">
                  Through a series of interconnected essays, the reader is guided through fundamental questions of identity, perception, and meaning. Each section builds upon the last, creating a cohesive journey from surface understanding to deeper recognition.
                </p>
              </div>

              {/* Excerpt */}
              <div className="space-y-4 py-6 border-y border-border/50">
                <h2 className="font-cinzel text-lg text-foreground">Excerpt</h2>
                <blockquote className="font-cormorant text-lg text-foreground/80 italic border-l-2 border-primary/40 pl-4">
                  "The echo is not repetition. It is the sound transformed by the space it has traveled through. What returns to you is not what left—it carries the imprint of every surface it touched."
                </blockquote>
              </div>

              {/* Format */}
              <div className="space-y-3">
                <h2 className="font-cinzel text-lg text-foreground">Format</h2>
                <div className="flex flex-wrap gap-3">
                  {['Hardcover', 'Paperback', 'Digital PDF'].map((format) => (
                    <button
                      key={format}
                      className="px-4 py-2 border border-border hover:border-primary font-cormorant text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {format}
                    </button>
                  ))}
                </div>
              </div>

              {/* Purchase Button */}
              <Button
                className="w-full font-cinzel text-sm tracking-widest py-6 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Purchase
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default CanonEntry;
