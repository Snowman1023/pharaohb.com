import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { getBookBySlug } from '@/data/books';

const CanonDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const book = getBookBySlug(slug || '');

  if (!book) {
    return (
      <PageLayout>
        <SectionContainer className="pt-32">
          <div className="text-center">
            <h1 className="font-cinzel text-3xl text-foreground mb-4">Book Not Found</h1>
            <Link to="/canon" className="text-primary hover:underline">
              Return to The Canon
            </Link>
          </div>
        </SectionContainer>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SectionContainer className="pt-32">
        <Link
          to="/canon"
          className="inline-flex items-center gap-2 font-cinzel text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to The Canon
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Book Cover */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden border border-border">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative corners */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-primary" />
            <div className="absolute -top-3 -right-3 w-12 h-12 border-r-2 border-t-2 border-primary" />
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-l-2 border-b-2 border-primary" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-primary" />
          </div>

          {/* Book Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-cinzel text-3xl md:text-4xl text-gold-gradient mb-2">
                {book.title}
              </h1>
              <p className="font-cormorant text-xl text-primary italic">
                {book.subtitle}
              </p>
            </div>

            <p className="font-cormorant text-lg text-muted-foreground leading-relaxed">
              {book.description}
            </p>

            <div className="py-6 border-y border-border">
              <span className="font-cinzel text-3xl text-primary">{book.price}</span>
            </div>

            <Button
              size="lg"
              className="w-full font-cinzel tracking-wider bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Purchase Now
            </Button>
          </div>
        </div>

        {/* Excerpt Section */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="font-cinzel text-2xl text-gold-gradient mb-8 text-center">
            Excerpt
          </h2>
          <blockquote className="font-cormorant text-xl text-foreground/90 leading-relaxed italic border-l-2 border-primary pl-8">
            {book.excerpt}
          </blockquote>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default CanonDetail;
