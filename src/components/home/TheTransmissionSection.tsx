import { Link } from 'react-router-dom';

export function TheTransmissionSection() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Section Title */}
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-gold-gradient">
            The Transmission
          </h2>
          
          {/* Main Statement */}
          <p className="font-cormorant text-2xl md:text-3xl lg:text-4xl text-foreground/90 leading-relaxed">
            I guide you toward the liberation that already exists within you.
          </p>
          
          {/* Supporting Text */}
          <p className="font-cormorant text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Everything here is an invitation: to witness yourself, to dissolve the barriers between who you are and who you are becoming, to attune your consciousness to higher frequencies of clarity, peace, and power.
          </p>
          
          {/* Categories */}
          <p className="font-cinzel text-sm md:text-base tracking-[0.3em] text-primary/80 uppercase">
            Audio Frequencies · Affirmations · Teachings · Music
          </p>
          
          {/* CTA */}
          <div className="pt-4">
            <Link
              to="/transmissions"
              className="inline-flex items-center gap-3 font-cinzel text-sm tracking-widest text-primary hover:opacity-70 transition-opacity border border-primary/30 px-8 py-3 hover:border-primary/60"
            >
              Enter the Transmissions
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
