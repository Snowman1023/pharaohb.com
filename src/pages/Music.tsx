import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';

// Mock albums/releases
const releases = [
  {
    id: 1,
    title: 'Frequencies of Return',
    description: 'Ambient compositions designed for meditation and inner reflection. 8 tracks, 52 minutes.',
    year: '2024',
    symbol: '𓇳',
  },
  {
    id: 2,
    title: 'The Temple Sessions',
    description: 'Live recordings from private gatherings. Unedited sonic explorations.',
    year: '2023',
    symbol: '𓆣',
  },
  {
    id: 3,
    title: 'Echoes from the Void',
    description: 'Deep listening pieces for extended contemplation. Best experienced with headphones.',
    year: '2023',
    symbol: '𓅓',
  },
  {
    id: 4,
    title: 'Sacred Geometry Soundscapes',
    description: 'Audio interpretations of geometric principles. Frequencies tuned to natural harmonics.',
    year: '2022',
    symbol: '𓋹',
  },
  {
    id: 5,
    title: 'The Architect\'s Tones',
    description: 'Minimalist compositions exploring structure and silence.',
    year: '2022',
    symbol: '𓂓',
  },
  {
    id: 6,
    title: 'Night Transmissions',
    description: 'Recordings made between 2am and 5am. The quietest hours.',
    year: '2021',
    symbol: '𓃭',
  },
];

const Music = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Music"
        subtitle="Sound compositions and audio works."
        symbol="𓇳"
      />

      <SectionContainer>
        <div className="max-w-5xl mx-auto">
          {/* Album Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {releases.map((release) => (
              <div 
                key={release.id}
                className="group border border-border hover:border-primary/50 bg-card/30 transition-all duration-500"
              >
                {/* Album cover */}
                <PlaceholderImage 
                  aspectRatio="square" 
                  label=""
                  symbol={release.symbol}
                />
                
                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="font-cinzel text-lg text-foreground group-hover:text-gold-gradient transition-colors">
                      {release.title}
                    </h3>
                    <span className="font-cormorant text-sm text-muted-foreground">
                      {release.year}
                    </span>
                  </div>
                  
                  <p className="font-cormorant text-muted-foreground text-sm">
                    {release.description}
                  </p>

                  {/* Embedded player placeholder */}
                  <div className="pt-4">
                    <div className="h-12 bg-muted/30 border border-border flex items-center justify-center">
                      <span className="font-cormorant text-sm text-muted-foreground italic">
                        Audio player
                      </span>
                    </div>
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

export default Music;
