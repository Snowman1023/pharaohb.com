import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';

const About = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="About"
        subtitle="Understanding the architecture of this work"
      />

      {/* What This Is */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cinzel text-2xl md:text-3xl text-gold-gradient mb-8">
            What This Is
          </h2>
          <div className="space-y-6 font-cormorant text-lg text-foreground/90 leading-relaxed">
            <p>
              This is a temple built in digital form. A sanctuary for those seeking 
              to remember who they truly are beyond the narratives imposed by culture, 
              family, and circumstance. Every piece of content here—written, visual, 
              or sonic—is designed to activate dormant codes within your consciousness.
            </p>
            <p>
              The books are not mere collections of words. They are transmissions 
              encoded with frequencies of awakening. The art is not decoration. 
              It is visual medicine. The music is not entertainment. It is sonic 
              architecture designed to attune your nervous system to higher states 
              of being.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Full-width image divider */}
      <div className="relative h-48 md:h-64 lg:h-96 my-12 md:my-16">
        <img
          src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1600&q=80"
          alt="Sunrise over ancient landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* How To Engage */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cinzel text-2xl md:text-3xl text-gold-gradient mb-8">
            How To Engage
          </h2>
          <div className="space-y-6 sm:space-y-8">
            <div className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 border border-primary flex items-center justify-center text-primary font-cinzel text-sm sm:text-base">
                01
              </div>
              <div>
                <h3 className="font-cinzel text-lg text-foreground mb-2">Read</h3>
                <p className="font-cormorant text-muted-foreground leading-relaxed">
                  Begin with the writings. Let the words enter slowly. Do not rush. 
                  Each essay is a meditation. The Canon contains deeper teachings 
                  for those ready to descend into the mysteries.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 border border-primary flex items-center justify-center text-primary font-cinzel text-sm sm:text-base">
                02
              </div>
              <div>
                <h3 className="font-cinzel text-lg text-foreground mb-2">View</h3>
                <p className="font-cormorant text-muted-foreground leading-relaxed">
                  The art gallery is a visual journey. Each piece holds a frequency. 
                  Sit with the images that call to you. Let them work on you 
                  without analyzing. Trust the resonance.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 border border-primary flex items-center justify-center text-primary font-cinzel text-sm sm:text-base">
                03
              </div>
              <div>
                <h3 className="font-cinzel text-lg text-foreground mb-2">Listen</h3>
                <p className="font-cormorant text-muted-foreground leading-relaxed">
                  The music is designed for intentional listening. Use headphones. 
                  Create space. Allow the frequencies to recalibrate your 
                  energetic field. Best experienced during meditation or rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Why It Exists */}
      <SectionContainer className="bg-gradient-to-b from-transparent via-muted/5 to-transparent">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cinzel text-2xl md:text-3xl text-gold-gradient mb-8">
            Why It Exists
          </h2>
          <div className="space-y-6 font-cormorant text-lg text-foreground/90 leading-relaxed">
            <p>
              We live in an age of profound forgetting. The systems we inhabit 
              are designed to keep us asleep—consuming, reacting, never questioning 
              the fundamental nature of our existence. This work exists as a 
              counter-frequency. A signal for those with ears to hear.
            </p>
            <p>
              You found this space because some part of you remembers. Some part 
              of you knows there is more. This is not about belief or doctrine. 
              It is about remembrance. About returning to the throne you never 
              truly left. The pharaoh within you is not dead. Only sleeping. 
              These offerings are designed to wake that sleeping royalty.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary" />
              <span className="font-cinzel text-sm text-primary tracking-widest">
                PHARAOH B. • HOUSTON, TEXAS
              </span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default About;
