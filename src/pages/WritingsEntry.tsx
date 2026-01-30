import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { ArrowLeft } from 'lucide-react';

const WritingsEntry = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Convert slug to display title
  const displayTitle = slug
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Untitled';

  return (
    <PageLayout>
      <SectionContainer className="pt-32 md:pt-40">
        <article className="max-w-2xl mx-auto">
          {/* Back link */}
          <Link 
            to="/writings" 
            className="inline-flex items-center gap-2 font-cinzel text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Writings
          </Link>

          {/* Header */}
          <header className="mb-12">
            <h1 className="font-cinzel text-3xl md:text-4xl text-gold-gradient mb-4">
              {displayTitle}
            </h1>
            <time className="font-cormorant text-muted-foreground">
              January 20, 2024
            </time>
          </header>

          {/* Content */}
          <div className="space-y-6 font-cormorant text-lg text-foreground/90 leading-relaxed">
            <p>
              The echo is not mere repetition. It is the original sound transformed by every surface it has touched, carrying with it the imprint of space itself. When you hear your voice return to you from across a canyon, what arrives is not what left.
            </p>
            
            <p>
              This principle extends beyond sound. Every action, every thought, every intention moves outward and returns. But the return journey changes what was sent. The space between—the medium, the distance, the time—leaves its mark.
            </p>

            <p>
              Consider the words you speak to another person. They leave your mouth carrying one meaning. They travel through the air, through the filter of another's perception, through their history and expectations. What they hear is the echo of what you said—transformed, colored, shaped by passage.
            </p>

            <blockquote className="border-l-2 border-primary/40 pl-6 my-8 italic text-foreground/80">
              "What returns to you is not what left—it carries the imprint of every surface it touched."
            </blockquote>

            <p>
              This is not a problem to be solved but a principle to be understood. Communication, relationship, creation—all operate through this law of echo. The more clearly we understand the transformative nature of passage, the more skillfully we can work with it.
            </p>

            <p>
              The practice, then, is not to eliminate distortion but to account for it. To speak knowing that transformation will occur. To listen knowing that what you receive has traveled. To create knowing that meaning multiplies through every interpretation.
            </p>

            <p>
              In this way, the echo becomes not a diminishment but an expansion. Each reflection adds rather than subtracts. The original intention, rather than being diluted, is enriched by its journey through space and consciousness.
            </p>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <Link 
              to="/writings" 
              className="inline-flex items-center gap-2 font-cinzel text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Writings
            </Link>
          </footer>
        </article>
      </SectionContainer>
    </PageLayout>
  );
};

export default WritingsEntry;
