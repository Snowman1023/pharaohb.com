import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { ArrowLeft, Clock } from 'lucide-react';

// PLACEHOLDER: Related entries data
const relatedEntries = [
  { slug: 'related-entry-1', title: '[RELATED_TITLE_1]', tag: 'Essays' },
  { slug: 'related-entry-2', title: '[RELATED_TITLE_2]', tag: 'Principles' },
  { slug: 'related-entry-3', title: '[RELATED_TITLE_3]', tag: 'Books' },
];

const CanonEntry = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Convert slug to display title
  const displayTitle = slug
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : '[ENTRY_TITLE]';

  return (
    <PageLayout>
      <SectionContainer className="pt-32 md:pt-40">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link 
            to="/canon" 
            className="inline-flex items-center gap-2 font-cinzel text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to The Canon
          </Link>

          {/* Entry Header */}
          <header className="mb-12">
            {/* Tag */}
            <span className="font-cinzel text-xs tracking-widest text-primary/60 uppercase">
              [ENTRY_TAG]
            </span>
            
            {/* Title */}
            <h1 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-gold-gradient mt-3 mb-4">
              {displayTitle}
            </h1>
            
            {/* Subtitle */}
            <p className="font-cormorant text-xl text-muted-foreground italic mb-6">
              [ENTRY_SUBTITLE]
            </p>
            
            {/* Meta */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="font-cormorant">[X] min read</span>
              </span>
            </div>
            
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
                [INTRO_PARAGRAPH_1]
              </p>
              <p>
                [INTRO_PARAGRAPH_2]
              </p>
            </div>

            {/* Section 1 */}
            <section>
              <h2 className="font-cinzel text-2xl text-foreground mb-4">
                [SECTION_1_HEADING]
              </h2>
              <div className="font-cormorant text-lg text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  [SECTION_1_CONTENT]
                </p>
                <p>
                  [SECTION_1_CONTENT_CONTINUED]
                </p>
              </div>
            </section>

            {/* Pull Quote */}
            <blockquote className="relative py-8 px-6 border-l-2 border-primary/40 bg-card/30">
              <p className="font-cinzel text-xl text-foreground/90 italic">
                "[PULL_QUOTE]"
              </p>
            </blockquote>

            {/* Section 2 */}
            <section>
              <h2 className="font-cinzel text-2xl text-foreground mb-4">
                [SECTION_2_HEADING]
              </h2>
              <div className="font-cormorant text-lg text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  [SECTION_2_CONTENT]
                </p>
                <p>
                  [SECTION_2_CONTENT_CONTINUED]
                </p>
              </div>
            </section>

            {/* Image Placeholder */}
            <div className="aspect-video bg-muted/20 border border-border/50 flex items-center justify-center">
              <span className="font-cormorant text-muted-foreground italic">
                [CONTENT_IMAGE]
              </span>
            </div>

            {/* Section 3 */}
            <section>
              <h2 className="font-cinzel text-2xl text-foreground mb-4">
                [SECTION_3_HEADING]
              </h2>
              <div className="font-cormorant text-lg text-muted-foreground leading-relaxed">
                <p>
                  [SECTION_3_CONTENT]
                </p>
              </div>
            </section>

            {/* Closing */}
            <div className="font-cormorant text-lg text-foreground/90 leading-relaxed pt-4">
              <p>
                [CLOSING_PARAGRAPH]
              </p>
            </div>
          </article>

          {/* Footer Navigation */}
          <footer className="py-8 border-t border-border">
            <Link 
              to="/canon" 
              className="inline-flex items-center gap-2 font-cinzel text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to The Canon
            </Link>
          </footer>
        </div>
      </SectionContainer>

      {/* Related Entries Section */}
      <SectionContainer className="py-16 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cinzel text-xl text-gold-gradient text-center mb-8">
            Related Entries
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedEntries.map((entry) => (
              <Link
                key={entry.slug}
                to={`/canon/${entry.slug}`}
                className="group p-5 border border-border hover:border-primary/50 bg-card/20 transition-all duration-300"
              >
                <span className="font-cinzel text-[10px] tracking-widest text-primary/60 uppercase">
                  {entry.tag}
                </span>
                <h3 className="font-cinzel text-base text-foreground mt-2 group-hover:text-gold-gradient transition-colors">
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

export default CanonEntry;
