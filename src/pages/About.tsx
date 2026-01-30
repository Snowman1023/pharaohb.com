import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';

const About = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="The Messenger"
        subtitle="Architect of echoes and guardian of sacred truths"
        symbol="𓂀"
      />

      <SectionContainer>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Image placeholder */}
          <div className="relative order-2 md:order-1">
            <PlaceholderImage 
              aspectRatio="portrait" 
              label="Portrait of the Pharaoh"
              className="rounded"
            />
            {/* Decorative frame corners */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-primary" />
            <div className="absolute -top-3 -right-3 w-12 h-12 border-r-2 border-t-2 border-primary" />
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-l-2 border-b-2 border-primary" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-primary" />
          </div>

          {/* Text content */}
          <div className="order-1 md:order-2 space-y-6">
            <p className="font-cormorant text-xl md:text-2xl text-foreground/90 leading-relaxed">
              {/* PLACEHOLDER: Bio paragraph 1 */}
              I am Pharaoh B., the architect of echoes and guardian of sacred truths. 
              My work exists at the intersection of ancient wisdom and contemporary consciousness.
            </p>
            
            <p className="font-cormorant text-lg text-muted-foreground leading-relaxed">
              {/* PLACEHOLDER: Bio paragraph 2 */}
              Through words forged in the fires of revelation, I craft pathways 
              for those seeking to remember who they truly are. Every book, every teaching, 
              every creation is a mirror—reflecting back the royalty that sleeps within you.
            </p>

            <p className="font-cormorant text-lg text-muted-foreground leading-relaxed">
              {/* PLACEHOLDER: Bio paragraph 3 */}
              From the sacred lands to the cosmic realms, my journey has been one of 
              transformation and awakening. Now, I extend my hand to guide you through 
              the same golden gates that have been opened before me.
            </p>

            <div className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-primary" />
                <span className="font-cinzel text-sm text-primary tracking-widest">
                  {/* PLACEHOLDER: Roles/titles */}
                  WRITER • ARCHITECT • MIRROR • MESSENGER
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Additional sections can be added here */}
      <SectionContainer className="bg-gradient-to-b from-transparent via-muted/10 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cinzel text-2xl md:text-3xl text-gold-gradient mb-6">
            {/* PLACEHOLDER: Section heading */}
            The Path of Becoming
          </h2>
          <p className="font-cormorant text-lg text-muted-foreground leading-relaxed">
            {/* PLACEHOLDER: Additional about content */}
            Each step on this journey brings you closer to your divine inheritance. 
            The teachings within these sacred spaces are designed to awaken the 
            sleeping pharaoh within your soul.
          </p>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default About;
