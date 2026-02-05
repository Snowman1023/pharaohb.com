import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Frequencies',
    description: 'Healing tones and binaural beats to align your nervous system',
  },
  {
    name: 'Affirmations',
    description: 'I Am declarations and frequency-layered guidance to reprogram your consciousness',
  },
  {
    name: 'Audiobooks',
    description: 'Wisdom from the sacred texts',
  },
  {
    name: 'Teachings',
    description: 'Written teachings on consciousness and form',
  },
  {
    name: 'Spoken Word',
    description: 'Poems and messages to accompany your journey',
  },
  {
    name: 'Music',
    description: 'Original compositions for the soul',
  },
];

export function TheTransmissionSection() {
  return (
    <section className="py-16 md:py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
          {/* Header Content */}
          <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
            {/* Section Title */}
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gold-gradient">
              The Transmission
            </h2>
            
            {/* Main Statement */}
            <p className="font-cormorant text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground/90 leading-relaxed max-w-3xl mx-auto px-2">
              I guide you toward the liberation that already exists within you.
            </p>
            
            {/* Supporting Text */}
            <p className="font-cormorant text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
              Everything here is an invitation: to witness yourself, to dissolve the barriers between who you are and who you are becoming, to attune your consciousness to higher frequencies of clarity, peace, and power.
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-2 sm:pt-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="p-4 sm:p-6 border border-primary/20 bg-card/30 hover:border-primary/40 transition-colors duration-300"
              >
                <h3 className="font-cinzel text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary uppercase mb-2 sm:mb-3">
                  {category.name}
                </h3>
                <p className="font-cormorant text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-2 sm:pt-4">
            <Link
              to="/transmissions"
              className="inline-flex items-center gap-2 sm:gap-3 font-cinzel text-xs sm:text-sm tracking-wide sm:tracking-widest text-primary hover:opacity-70 transition-opacity border border-primary/30 px-4 sm:px-8 py-2 sm:py-3 hover:border-primary/60"
            >
              <span className="text-center">Step into the echo. Begin where you are.</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
