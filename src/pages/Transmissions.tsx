import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { transmissions } from '@/data/transmissions';
import { ExternalLink } from 'lucide-react';

const Transmissions = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Transmissions"
        subtitle="Spoken works, frequencies, and audio reflections"
        orientationText="Receive without grasping. These are living signals."
      />

      <SectionContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {transmissions.map((transmission) => (
            <article key={transmission.slug} className="group">
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden mb-4 border border-border">
                <img
                  src={transmission.thumbnail}
                  alt={transmission.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/20 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h2 className="font-cinzel text-xl text-foreground group-hover:text-gold-gradient transition-colors">
                  {transmission.title}
                </h2>
                
                <p className="font-cormorant text-muted-foreground leading-relaxed">
                  {transmission.intention}
                </p>

                {/* CTA */}
                <a
                  href={transmission.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-cinzel text-sm tracking-wider text-primary hover:text-primary/80 transition-colors pt-2 py-2 min-h-[44px]"
                >
                  Enter Transmission
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default Transmissions;
