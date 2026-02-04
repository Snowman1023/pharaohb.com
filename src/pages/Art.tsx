import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { artworks } from '@/data/artworks';

const Art = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Art"
        subtitle="Visual meditations on form, void, and the spaces between"
        orientationText="Each piece is a doorway. Pause before entering."
      />

      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="font-cormorant text-xl text-muted-foreground">
            Each piece is a doorway. What you see depends on how you look. 
            Available as archival prints, gallery canvas, and museum-quality frames.
          </p>
        </div>

        {/* Dense gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-7xl mx-auto">
          {artworks.map((artwork) => (
            <Link
              key={artwork.slug}
              to={`/art/${artwork.slug}`}
              className="group relative aspect-square overflow-hidden bg-muted"
            >
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/70 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                  <h3 className="font-cinzel text-lg text-foreground">
                    {artwork.title}
                  </h3>
                  <p className="font-cormorant text-sm text-primary mt-1">
                    From {artwork.formats[0].price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default Art;
