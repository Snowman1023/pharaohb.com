import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { albums } from '@/data/albums';
import { musicPageContent, streamingPlatforms } from '@/data/musicData';
import { Play } from 'lucide-react';
import brandSymbol from '@/assets/brand-symbol.png';

const Music = () => {
  return (
    <PageLayout>
      <PageHeader
        title={musicPageContent.title}
        subtitle={musicPageContent.subtitle}
        orientationText={musicPageContent.description}
      />

      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-cormorant text-xl text-muted-foreground">
            Sound as medicine. Composition as ceremony. Each album is crafted to attune 
            consciousness to higher frequencies.
          </p>
        </div>

        {/* Albums grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {albums.map((album) => (
            <div key={album.slug} className="group flex flex-col h-full">
              {/* Album Cover */}
              <div className="relative aspect-square overflow-hidden mb-6 border border-border">
                <img
                  src={album.image}
                  alt={album.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/60 transition-colors duration-300" />
              </div>

              {/* Album Info */}
              <div className="flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="font-cinzel text-2xl text-foreground group-hover:text-primary transition-colors">
                    {album.title}
                  </h3>
                  <p className="font-cormorant text-sm text-primary/70 italic">
                    {album.year}
                  </p>
                </div>

                <p className="font-cormorant text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {album.description}
                </p>

                {/* Player Placeholder - fills remaining space */}
                <div className="bg-muted/30 border border-border p-6 mt-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <button className="w-14 h-14 min-w-[44px] min-h-[44px] rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Play className="w-5 h-5 ml-0.5" />
                    </button>
                    <div className="flex-1">
                      <div className="h-1 bg-border rounded-full overflow-hidden">
                        <div className="h-full w-0 bg-primary" />
                      </div>
                    </div>
                    <span className="font-cormorant text-sm text-muted-foreground">0:00</span>
                  </div>

                  {/* Track List - fixed height with scroll */}
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {album.tracks.map((track, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 sm:gap-4 py-2 border-b border-border/50 last:border-0"
                      >
                        <span className="font-cinzel text-xs text-primary/50 w-6">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <span className="font-cormorant text-sm text-foreground/80">
                          {track}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Divider */}
      <div className="egyptian-divider max-w-md mx-auto my-16">
        <img src={brandSymbol} alt="Pharaoh B. Symbol" className="w-12 h-12 object-contain" />
      </div>

      {/* Streaming Links Section */}
      <SectionContainer>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-cinzel text-xl md:text-2xl text-foreground mb-8">
            Listen On
          </h2>
          <div className="flex items-center justify-center gap-8 md:gap-12">
            {streamingPlatforms.map((platform) => (
              <a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-cinzel text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                {platform.name}
              </a>
            ))}
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default Music;
