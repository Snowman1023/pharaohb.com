import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { books } from '@/data/books';
import { writings } from '@/data/writings';
import { poems } from '@/data/poems';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'books', label: 'Books' },
  { id: 'essays', label: 'Essays' },
  { id: 'poetry', label: 'Poetry' },
] as const;

type TabId = typeof tabs[number]['id'];

const Canon = () => {
  const [activeTab, setActiveTab] = useState<TabId>('books');

  return (
    <PageLayout>
      <PageHeader
        title="The Canon"
        subtitle="Sacred texts and teachings for the modern seeker"
        orientationText="Begin here."
      />

      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="font-cormorant text-xl text-muted-foreground">
            Books, essays, and poetry — the written transmissions of Pharaoh B.
            Each work is a key to unlock the chambers of your own becoming.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-6 py-2 font-cinzel text-xs tracking-widest uppercase border transition-all duration-300",
                activeTab === tab.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── BOOKS TAB ── */}
        {activeTab === 'books' && (
          <div className="max-w-4xl mx-auto space-y-8">
            {books.map((book) => (
              <Link
                key={book.slug}
                to={`/canon/${book.slug}`}
                className="group block bg-card border border-border hover:border-primary/50 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center space-y-3">
                    <h3 className="font-cinzel text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="font-cormorant text-sm text-primary italic">
                      {book.subtitle}
                    </p>
                    <p className="font-cormorant text-muted-foreground leading-relaxed">
                      {book.description}
                    </p>
                    <p className="font-cormorant text-foreground/80 italic text-sm leading-relaxed line-clamp-3 border-l-2 border-primary/30 pl-4 mt-2">
                      {book.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 font-cinzel text-xs tracking-widest text-primary pt-2">
                      Read More <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* ── ESSAYS TAB ── */}
        {activeTab === 'essays' && (
          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-border">
              {writings.map((writing) => (
                <Link
                  key={writing.slug}
                  to={`/writings/${writing.slug}`}
                  className="group block py-6 sm:py-8 first:pt-0 last:pb-0 min-h-[44px]"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="font-cinzel text-xl text-foreground group-hover:text-primary transition-colors mb-2">
                        {writing.title}
                      </h3>
                      <p className="font-cormorant text-muted-foreground leading-relaxed line-clamp-2">
                        {writing.excerpt}
                      </p>
                    </div>
                    <time className="font-cormorant text-sm text-primary/70 italic md:text-right whitespace-nowrap">
                      {writing.date}
                    </time>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ── POETRY TAB ── */}
        {activeTab === 'poetry' && (
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {poems.map((poem, index) => (
                <AccordionItem
                  key={poem.id}
                  value={poem.id}
                  className="border border-border hover:border-primary/50 transition-colors duration-300 px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="py-6 hover:no-underline group">
                    <div className="flex items-start gap-6 text-left w-full">
                      <span className="font-cinzel text-sm text-primary/50 tabular-nums">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-cinzel text-lg text-foreground group-hover:text-primary transition-colors">
                          {poem.title}
                        </h3>
                        {poem.source && (
                          <p className="font-cormorant text-sm text-muted-foreground italic mt-1">
                            {poem.source}
                          </p>
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <div className="pl-12 pr-4">
                      <div className="font-cormorant text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
                        {poem.content}
                      </div>
                      <p className="font-cormorant text-sm text-primary italic mt-8">
                        — Pharaoh B.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </SectionContainer>
    </PageLayout>
  );
};

export default Canon;
