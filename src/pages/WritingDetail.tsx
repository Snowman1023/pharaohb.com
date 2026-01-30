import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { ArrowLeft } from 'lucide-react';
import { getWritingBySlug } from '@/data/writings';

const WritingDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const writing = getWritingBySlug(slug || '');

  if (!writing) {
    return (
      <PageLayout>
        <SectionContainer className="pt-32">
          <div className="text-center">
            <h1 className="font-cinzel text-3xl text-foreground mb-4">Writing Not Found</h1>
            <Link to="/writings" className="text-primary hover:underline">
              Return to Writings
            </Link>
          </div>
        </SectionContainer>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SectionContainer className="pt-32">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/writings"
            className="inline-flex items-center gap-2 font-cinzel text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Writings
          </Link>

          {/* Header */}
          <header className="text-center mb-16">
            <time className="font-cormorant text-sm text-primary/70 italic block mb-4">
              {writing.date}
            </time>
            <h1 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-gold-gradient leading-tight">
              {writing.title}
            </h1>
          </header>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-16 h-px bg-primary/30" />
            <span className="text-primary/50">◆</span>
            <div className="w-16 h-px bg-primary/30" />
          </div>

          {/* Content */}
          <article className="prose prose-lg max-w-none">
            {writing.content.map((paragraph, index) => (
              <p
                key={index}
                className="font-cormorant text-xl text-foreground/90 leading-relaxed mb-8"
              >
                {paragraph}
              </p>
            ))}
          </article>

          {/* Footer divider */}
          <div className="flex items-center justify-center gap-4 mt-16">
            <div className="w-16 h-px bg-primary/30" />
            <span className="text-primary/50">◆</span>
            <div className="w-16 h-px bg-primary/30" />
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default WritingDetail;
