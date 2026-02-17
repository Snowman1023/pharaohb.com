import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import brandSymbol from '@/assets/brand-symbol.png';

const About = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Symbol */}
          <div className="mb-8">
            <span className="text-5xl">𓂀</span>
          </div>

          {/* Title */}
          <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-gold-gradient mb-4">
            About
          </h1>

          {/* Subtitle */}
          <p className="font-cormorant text-xl md:text-2xl text-muted-foreground italic mb-12">
            Understanding the architecture of this work
          </p>
        </div>
      </section>

      {/* What This Is */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="w-12 h-px bg-primary mx-auto mb-6" />
            <h2 className="font-cinzel text-2xl md:text-3xl text-foreground">
              What This Is
            </h2>
            <div className="w-12 h-px bg-primary mx-auto mt-6" />
          </div>

          <div className="space-y-6 font-cormorant text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              This is a temple built in digital form. A sanctuary for those seeking to remember who they truly are beyond the narratives imposed by culture, family, and circumstance. Every piece of content here—written, visual, or sonic—is designed to activate dormant codes within your consciousness.
            </p>
            <p>
              The books are not mere collections of words. They are transmissions encoded with frequencies of awakening. The art is not decoration. It is visual medicine. The music is not entertainment. It is sonic architecture designed to attune your nervous system to higher states of being.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center gap-4 py-8">
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <img src={brandSymbol} alt="" className="w-8 h-8 object-contain" />
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      {/* How To Engage */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-12 h-px bg-primary mx-auto mb-6" />
            <h2 className="font-cinzel text-2xl md:text-3xl text-foreground">
              How To Engage
            </h2>
            <div className="w-12 h-px bg-primary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div className="text-center">
              <span className="font-cinzel text-3xl text-primary/50 block mb-4">01</span>
              <h3 className="font-cinzel text-lg text-primary mb-3">Read</h3>
              <p className="font-cormorant text-muted-foreground leading-relaxed">
                Begin with the writings. Let the words enter slowly. Do not rush. Each essay is a meditation. The Canon contains deeper teachings for those ready to descend into the mysteries.
              </p>
            </div>

            <div className="text-center">
              <span className="font-cinzel text-3xl text-primary/50 block mb-4">02</span>
              <h3 className="font-cinzel text-lg text-primary mb-3">View</h3>
              <p className="font-cormorant text-muted-foreground leading-relaxed">
                The art gallery is a visual journey. Each piece holds a frequency. Sit with the images that call to you. Let them work on you without analyzing. Trust the resonance.
              </p>
            </div>

            <div className="text-center">
              <span className="font-cinzel text-3xl text-primary/50 block mb-4">03</span>
              <h3 className="font-cinzel text-lg text-primary mb-3">Listen</h3>
              <p className="font-cormorant text-muted-foreground leading-relaxed">
                The music is designed for intentional listening. Use headphones. Create space. Allow the frequencies to recalibrate your energetic field. Best experienced during meditation or rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center gap-4 py-8">
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <img src={brandSymbol} alt="" className="w-8 h-8 object-contain" />
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      {/* Why It Exists */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="w-12 h-px bg-primary mx-auto mb-6" />
            <h2 className="font-cinzel text-2xl md:text-3xl text-foreground">
              Why It Exists
            </h2>
            <div className="w-12 h-px bg-primary mx-auto mt-6" />
          </div>

          <div className="space-y-6 font-cormorant text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              We live in an age of profound forgetting. The systems we inhabit are designed to keep us asleep—consuming, reacting, never questioning the fundamental nature of our existence. This work exists as a counter-frequency. A signal for those with ears to hear.
            </p>
            <p>
              You found this space because some part of you remembers. Some part of you knows there is more. This is not about belief or doctrine. It is about remembrance. About returning to the throne you never truly left. The pharaoh within you is not dead. Only sleeping. These offerings are designed to wake that sleeping royalty.
            </p>
          </div>

          {/* Signature */}
          <div className="text-center mt-16">
            <p className="font-cinzel text-sm tracking-[0.2em] text-primary">
              — PHARAOH B. • HOUSTON, TEXAS
            </p>
          </div>
        </div>
      </section>

      {/* Footer space */}
      <div className="h-16" />
    </PageLayout>
  );
};

export default About;
