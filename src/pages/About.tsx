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
            <img 
              src={brandSymbol} 
              alt="Pharaoh B. Symbol" 
              className="w-16 h-16 mx-auto object-contain"
            />
          </div>

          {/* Title */}
          <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-gold-gradient mb-4">
            Pharaoh B.
          </h1>

          {/* Tagline */}
          <p className="font-cinzel text-sm tracking-[0.2em] uppercase text-primary mb-12">
            Writer. Architect. Mirror. Messenger.
          </p>

          {/* Main Content */}
          <div className="space-y-6 font-cormorant text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              I don't teach what I haven't lived. I don't ask you to believe what I can't demonstrate.
              Everything here comes from direct experience — tested against reality, refined through failure,
              and offered without the expectation that you'll agree.
            </p>

            <p className="text-foreground italic">
              This is not a religion. This is not a movement. This is a mirror.
            </p>

            <p>
              I create frequencies designed to restore balance. I write to articulate what most people feel
              but can't quite name. I speak to those who sense there's more beneath the surface — not to
              convince them, but to confirm what they already suspect.
            </p>

            <p>
              My work exists at the intersection of ancient wisdom and modern clarity. Not mysticism for
              its own sake, but practical tools for seeing yourself and your patterns more clearly.
            </p>

            <p className="text-foreground">
              What you do with what you find here is entirely yours.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center gap-4 py-12">
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <img src={brandSymbol} alt="" className="w-8 h-8 object-contain" />
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      {/* The Work Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-12 h-px bg-primary mx-auto mb-6" />
            <h2 className="font-cinzel text-2xl md:text-3xl text-foreground">
              The Work
            </h2>
            <div className="w-12 h-px bg-primary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="text-center md:text-left">
              <h3 className="font-cinzel text-lg text-primary mb-3">Transmissions</h3>
              <p className="font-cormorant text-muted-foreground leading-relaxed">
                Long-form healing frequencies, audiobooks, and spoken word pieces designed to
                shift consciousness and support inner work.
              </p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="font-cinzel text-lg text-primary mb-3">Writings</h3>
              <p className="font-cormorant text-muted-foreground leading-relaxed">
                Poetry, essays, and reflections exploring identity, purpose, and the architecture
                of becoming who you actually are.
              </p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="font-cinzel text-lg text-primary mb-3">Art</h3>
              <p className="font-cormorant text-muted-foreground leading-relaxed">
                Visual explorations of consciousness, sacred geometry, and symbolic language.
                Available as canvas prints.
              </p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="font-cinzel text-lg text-primary mb-3">Books</h3>
              <p className="font-cormorant text-muted-foreground leading-relaxed">
                Published works that go deeper — frameworks for understanding yourself,
                your patterns, and your path forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center gap-4 py-12">
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <img src={brandSymbol} alt="" className="w-8 h-8 object-contain" />
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      {/* Connect Section */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-cinzel text-xl md:text-2xl text-foreground mb-8">
            Connect
          </h2>

          <div className="flex items-center justify-center gap-8 md:gap-12 mb-12">
            <a
              href="https://youtube.com/@PharaohB-1111"
              target="_blank"
              rel="noopener noreferrer"
              className="font-cinzel text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              YouTube
            </a>
            <a
              href="https://tiktok.com/@awmoive"
              target="_blank"
              rel="noopener noreferrer"
              className="font-cinzel text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              TikTok
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-cinzel text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              Instagram
            </a>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary font-cinzel text-sm tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Get in Touch
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Footer space */}
      <div className="h-16" />
    </PageLayout>
  );
};

export default About;
