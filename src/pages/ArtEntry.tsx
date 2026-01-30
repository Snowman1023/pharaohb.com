import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Mock format options
const formatOptions = [
  { name: 'Canvas', sizes: ['16×20"', '24×30"', '36×48"'], basePrice: 180 },
  { name: 'Framed', sizes: ['16×20"', '24×30"'], basePrice: 240 },
  { name: 'Print', sizes: ['8×10"', '16×20"', '24×30"'], basePrice: 45 },
];

const ArtEntry = () => {
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
            to="/art" 
            className="inline-flex items-center gap-2 font-cinzel text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Art
          </Link>

          {/* Main Image */}
          <div className="mb-12">
            <PlaceholderImage 
              aspectRatio="wide" 
              label=""
              symbol="𓋹"
              className="w-full"
            />
          </div>

          {/* Details */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Title and reflection */}
            <div className="space-y-6">
              <h1 className="font-cinzel text-3xl md:text-4xl text-gold-gradient">
                {displayTitle}
              </h1>
              
              <p className="font-cormorant text-xl text-muted-foreground italic">
                Form holding space for what cannot be spoken.
              </p>
            </div>

            {/* Right: Format options and pricing */}
            <div className="space-y-8">
              {formatOptions.map((format) => (
                <div key={format.name} className="space-y-3">
                  <h3 className="font-cinzel text-lg text-foreground">
                    {format.name}
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {format.sizes.map((size, idx) => (
                      <button
                        key={size}
                        className="p-3 border border-border hover:border-primary transition-colors text-center"
                      >
                        <span className="block font-cormorant text-sm text-muted-foreground">
                          {size}
                        </span>
                        <span className="block font-cinzel text-primary mt-1">
                          ${format.basePrice + (idx * 60)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <Button
                className="w-full font-cinzel text-sm tracking-widest py-6 bg-primary text-primary-foreground hover:bg-primary/90 mt-6"
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

export default ArtEntry;
