import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { ArrowLeft } from 'lucide-react';

// Related entries
const relatedEntries = [
  { slug: 'the-law-of-mirrors', title: 'The Law of Mirrors' },
  { slug: 'on-sacred-geometry', title: 'On Sacred Geometry' },
  { slug: 'the-principle-of-echo', title: 'The Principle of Echo' },
];

const WorkEntry = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Convert slug to display title
  const displayTitle = slug
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Untitled';

  return (
    <PageLayout>
      <SectionContainer className="pt-32 md:pt-40">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 font-cinzel text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>

          {/* Entry Header */}
          <header className="mb-12">
            {/* Title */}
            <h1 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-gold-gradient mb-4">
              {displayTitle}
            </h1>
            
            {/* Subtitle placeholder */}
            <p className="font-cormorant text-xl text-muted-foreground italic mb-6">
              A piece from the archive.
            </p>
            
            {/* Divider */}
            <div className="egyptian-divider max-w-xs mt-8">
              <span className="text-primary text-xl">𓅓</span>
            </div>
          </header>

          {/* Entry Body */}
          <article className="space-y-8 mb-16">
            {/* Intro Block */}
            <div className="font-cormorant text-lg text-foreground/90 leading-relaxed">
              <p className="mb-6">
                This is a placeholder for the opening passage. The actual content will be added when the archive is populated with real work.
              </p>
              <p>
                The form of each piece varies—some are long explorations, others brief transmissions. All are offered without instruction, meant to resonate rather than prescribe.
              </p>
            </div>

            {/* Section 1 */}
            <section>
              <h2 className="font-cinzel text-2xl text-foreground mb-4">
                The First Movement
              </h2>
              <div className="font-cormorant text-lg text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  Content for the first section of this piece. When populated, this will contain the actual writing, formatted appropriately for the web.
                </p>
                <p>
                  The structure here is flexible—some entries will have multiple sections, others a single continuous flow.
                </p>
              </div>
            </section>

            {/* Pull Quote */}
            <blockquote className="relative py-8 px-6 border-l-2 border-primary/40 bg-card/30">
              <p className="font-cinzel text-xl text-foreground/90 italic">
                "What is offered returns. What is forced dissipates."
              </p>
            </blockquote>

            {/* Section 2 */}
            <section>
              <h2 className="font-cinzel text-2xl text-foreground mb-4">
                The Second Movement
              </h2>
              <div className="font-cormorant text-lg text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  Additional content continues here. The rhythm of each piece is its own.
                </p>
                <p>
                  Some works include images, audio references, or visual elements. The template accommodates all forms.
                </p>
              </div>
            </section>

            {/* Image Placeholder */}
            <div className="aspect-video bg-muted/20 border border-border/50 flex items-center justify-center">
              <span className="font-cormorant text-muted-foreground/60 italic">
                Visual element placeholder
              </span>
            </div>

            {/* Closing */}
            <div className="font-cormorant text-lg text-foreground/90 leading-relaxed pt-4">
              <p>
                The closing passage of the work. Every ending is also a threshold.
              </p>
            </div>
          </article>

          {/* Footer Navigation */}
          <footer className="py-8 border-t border-border">
            <Link 
              to="/work" 
              className="inline-flex items-center gap-2 font-cinzel text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Work
            </Link>
          </footer>
        </div>
      </SectionContainer>

      {/* Continue Section */}
      <SectionContainer className="py-16 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cinzel text-xl text-gold-gradient text-center mb-8">
            Continue
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedEntries.map((entry) => (
              <Link
                key={entry.slug}
                to={`/work/${entry.slug}`}
                className="group p-5 border border-border hover:border-primary/50 bg-card/20 transition-all duration-300"
              >
                <h3 className="font-cinzel text-base text-foreground group-hover:text-gold-gradient transition-colors">
                  {entry.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default WorkEntry;
