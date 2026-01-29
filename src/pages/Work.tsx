import { PageLayout } from '@/components/layout/PageLayout';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Link } from 'react-router-dom';

// Work entries - no categories, just titles, lines, and optional years
const workEntries = [
  { slug: 'the-book-of-sacred-echoes', title: 'The Book of Sacred Echoes', line: 'A meditation on silence and return.', year: '2024' },
  { slug: 'letters-to-the-forgotten-throne', title: 'Letters to the Forgotten Throne', line: 'Correspondence with what remains.', year: '2024' },
  { slug: 'the-architects-blueprint', title: 'The Architect\'s Blueprint', line: 'Structure as language. Form as meaning.', year: '2023' },
  { slug: 'on-sacred-geometry', title: 'On Sacred Geometry', line: 'The mathematics of the invisible.', year: '2023' },
  { slug: 'the-frequency-of-becoming', title: 'The Frequency of Becoming', line: 'Movement through states of being.', year: '2023' },
  { slug: 'houston-transmission-2024', title: 'Houston Transmission', line: 'Live recording. November 2024.', year: '2024' },
  { slug: 'the-law-of-mirrors', title: 'The Law of Mirrors', line: 'Reflection as truth.', year: '2022' },
  { slug: 'the-principle-of-echo', title: 'The Principle of Echo', line: 'What returns, transformed.', year: '2022' },
];

// Where to begin - featured entries
const whereToBegin = [
  { slug: 'the-book-of-sacred-echoes', title: 'The Book of Sacred Echoes', line: 'Start with the foundational text.' },
  { slug: 'the-law-of-mirrors', title: 'The Law of Mirrors', line: 'A principle for seeing clearly.' },
  { slug: 'on-sacred-geometry', title: 'On Sacred Geometry', line: 'The structure beneath all things.' },
];

const Work = () => {
  return (
    <PageLayout>
      {/* Page Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            
            <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-gold-gradient mb-6">
              The Work
            </h1>
            
            <p className="font-cormorant text-xl md:text-2xl text-muted-foreground italic">
              Writings, editions, and ongoing forms.
            </p>
          </div>
        </div>
      </section>

      {/* Work Entries Grid */}
      <SectionContainer className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workEntries.map((entry) => (
              <Link
                key={entry.slug}
                to={`/work/${entry.slug}`}
                className="group p-6 border border-border hover:border-primary/50 bg-card/20 transition-all duration-300"
              >
                {/* Year */}
                <span className="font-cormorant text-sm text-muted-foreground/60">
                  {entry.year}
                </span>
                
                {/* Title */}
                <h3 className="font-cinzel text-lg text-foreground mt-2 mb-3 group-hover:text-gold-gradient transition-colors leading-tight">
                  {entry.title}
                </h3>
                
                {/* Line */}
                <p className="font-cormorant text-muted-foreground text-sm mb-4">
                  {entry.line}
                </p>
                
                {/* Read indicator */}
                <span className="font-cinzel text-xs tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Where to Begin */}
      <SectionContainer className="py-16 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cinzel text-2xl text-gold-gradient text-center mb-4">
            Where to Begin
          </h2>
          <p className="font-cormorant text-muted-foreground text-center mb-10">
            Three entry points into the work.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {whereToBegin.map((entry, index) => (
              <Link
                key={entry.slug}
                to={`/work/${entry.slug}`}
                className="group relative p-6 border-2 border-primary/30 hover:border-primary bg-card/30 transition-all duration-300"
              >
                <span className="absolute -top-3 left-4 bg-background px-2 font-cinzel text-xs text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                <h3 className="font-cinzel text-lg text-foreground mb-2 group-hover:text-gold-gradient transition-colors">
                  {entry.title}
                </h3>
                <p className="font-cormorant text-muted-foreground text-sm">
                  {entry.line}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default Work;
