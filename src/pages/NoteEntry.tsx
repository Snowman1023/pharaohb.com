import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { ArrowLeft } from 'lucide-react';

const NoteEntry = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Convert slug to display title
  const displayTitle = slug
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Untitled';

  return (
    <PageLayout>
      <SectionContainer className="pt-32 md:pt-40">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link 
            to="/notes" 
            className="inline-flex items-center gap-2 font-cinzel text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Notes
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-gold-gradient mb-6">
              {displayTitle}
            </h1>
            <div className="flex items-center gap-4">
              <span className="font-cormorant text-muted-foreground italic">
                January 15, 2024
              </span>
            </div>
            
            {/* Egyptian divider */}
            <div className="egyptian-divider max-w-xs mt-8">
              <span className="text-primary text-xl">𓂀</span>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-invert prose-gold max-w-none font-cormorant text-lg leading-relaxed space-y-6">
            <p>
              This is placeholder content for the note. When the content management system is connected, this will display the actual article text.
            </p>
            <p>
              The template supports rich text content including formatted paragraphs, lists, embedded images, and block quotes.
            </p>
            <blockquote className="border-l-2 border-primary/40 pl-6 italic text-foreground/90">
              "The universe speaks in frequencies; learn to tune in."
            </blockquote>
            <p>
              Replace this placeholder content with actual article text when ready.
            </p>
          </article>

          {/* Footer navigation */}
          <footer className="mt-16 pt-8 border-t border-border">
            <Link 
              to="/notes" 
              className="inline-flex items-center gap-2 font-cinzel text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Notes
            </Link>
          </footer>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default NoteEntry;
