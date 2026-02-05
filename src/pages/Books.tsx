import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { BookCard } from '@/components/books/BookCard';
import { books, booksPageContent } from '@/data/booksData';
import brandSymbol from '@/assets/brand-symbol.png';

const Books = () => {
  return (
    <PageLayout>
      <PageHeader
        title={booksPageContent.title}
        subtitle={booksPageContent.subtitle}
        orientationText={booksPageContent.description}
      />

      <SectionContainer>
        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </SectionContainer>

      {/* Divider */}
      <div className="egyptian-divider max-w-md mx-auto my-16">
        <img src={brandSymbol} alt="Pharaoh B. Symbol" className="w-12 h-12 object-contain" />
      </div>

      {/* On the Horizon Section */}
      <SectionContainer>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-cinzel text-2xl md:text-3xl text-foreground mb-6">
            On the Horizon
          </h2>
          <p className="font-cormorant text-lg text-muted-foreground leading-relaxed">
            New works are in progress. Subscribe to The Quiet Circle to be notified when they arrive.
          </p>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default Books;
