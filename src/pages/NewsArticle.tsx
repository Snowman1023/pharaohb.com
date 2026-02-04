import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { ArrowLeft } from 'lucide-react';
import brandSymbol from '@/assets/brand-symbol.png';

// PLACEHOLDER: This would come from a CMS or database
const getArticle = (slug: string) => ({
  slug,
  title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
  date: '2024-01-15',
  category: 'Teachings',
  content: `
    <p>PLACEHOLDER: Article content for "${slug}" goes here.</p>
    <p>This template supports rich text content including:</p>
    <ul>
      <li>Formatted paragraphs</li>
      <li>Lists and bullet points</li>
      <li>Embedded images</li>
      <li>Block quotes</li>
    </ul>
    <blockquote>
      "The universe speaks in frequencies; learn to tune in." — Pharaoh B.
    </blockquote>
    <p>Replace this placeholder content with actual article text when ready.</p>
  `,
});

const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticle(slug || '');

  return (
    <PageLayout>
      <SectionContainer className="pt-32 md:pt-40">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link 
            to="/news" 
            className="inline-flex items-center gap-2 font-cinzel text-sm text-muted-foreground hover:text-primary transition-colors mb-8 py-2 min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <span className="font-cinzel text-xs tracking-widest text-primary/60 uppercase">
              {article.category}
            </span>
            <h1 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-gold-gradient mt-3 mb-6">
              {article.title}
            </h1>
            <div className="flex items-center gap-4">
              <span className="font-cormorant text-muted-foreground italic">
                {new Date(article.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            
            {/* Egyptian divider */}
            <div className="egyptian-divider max-w-xs mt-8">
              <img src={brandSymbol} alt="Pharaoh B. Symbol" className="w-8 h-8 object-contain" />
            </div>
          </header>

          {/* Article Content */}
          <article 
            className="prose prose-invert prose-gold max-w-none font-cormorant text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Footer navigation */}
          <footer className="mt-16 pt-8 border-t border-border">
            <Link 
              to="/news" 
              className="inline-flex items-center gap-2 font-cinzel text-sm text-muted-foreground hover:text-primary transition-colors py-2 min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to all transmissions
            </Link>
          </footer>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default NewsArticle;
