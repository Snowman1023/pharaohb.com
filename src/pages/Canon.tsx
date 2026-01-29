import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const categories = ['All', 'Books', 'Essays', 'Talks', 'Principles'];

// PLACEHOLDER: Canon entries data
const canonEntries = [
  { slug: 'the-book-of-sacred-echoes', title: '[ENTRY_TITLE_1]', desc: '[ENTRY_DESC_1]', tag: 'Books' },
  { slug: 'letters-to-the-forgotten-throne', title: '[ENTRY_TITLE_2]', desc: '[ENTRY_DESC_2]', tag: 'Books' },
  { slug: 'the-architects-blueprint', title: '[ENTRY_TITLE_3]', desc: '[ENTRY_DESC_3]', tag: 'Books' },
  { slug: 'on-sacred-geometry', title: '[ENTRY_TITLE_4]', desc: '[ENTRY_DESC_4]', tag: 'Essays' },
  { slug: 'the-frequency-of-becoming', title: '[ENTRY_TITLE_5]', desc: '[ENTRY_DESC_5]', tag: 'Essays' },
  { slug: 'houston-transmission-2024', title: '[ENTRY_TITLE_6]', desc: '[ENTRY_DESC_6]', tag: 'Talks' },
  { slug: 'the-law-of-mirrors', title: '[ENTRY_TITLE_7]', desc: '[ENTRY_DESC_7]', tag: 'Principles' },
  { slug: 'the-principle-of-echo', title: '[ENTRY_TITLE_8]', desc: '[ENTRY_DESC_8]', tag: 'Principles' },
];

const startHereEntries = [
  { slug: 'the-book-of-sacred-echoes', title: '[START_HERE_1]', desc: '[START_DESC_1]' },
  { slug: 'the-law-of-mirrors', title: '[START_HERE_2]', desc: '[START_DESC_2]' },
  { slug: 'on-sacred-geometry', title: '[START_HERE_3]', desc: '[START_DESC_3]' },
];

const Canon = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredEntries = activeCategory === 'All' 
    ? canonEntries 
    : canonEntries.filter(entry => entry.tag === activeCategory);

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
              [CANON_HEADLINE]
            </h1>
            
            <p className="font-cormorant text-xl md:text-2xl text-muted-foreground italic">
              [CANON_SUBHEAD]
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <SectionContainer className="py-8 border-y border-border/50">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "font-cinzel text-xs md:text-sm tracking-widest px-4 py-2 transition-all duration-300",
                activeCategory === category
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </SectionContainer>

      {/* Canon Entries Grid */}
      <SectionContainer className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredEntries.map((entry, index) => (
              <Link
                key={entry.slug}
                to={`/canon/${entry.slug}`}
                className="group p-6 border border-border hover:border-primary/50 bg-card/20 transition-all duration-300"
              >
                {/* Tag */}
                <span className="font-cinzel text-[10px] tracking-widest text-primary/60 uppercase">
                  {entry.tag}
                </span>
                
                {/* Title */}
                <h3 className="font-cinzel text-lg text-foreground mt-2 mb-3 group-hover:text-gold-gradient transition-colors leading-tight">
                  {entry.title}
                </h3>
                
                {/* Description */}
                <p className="font-cormorant text-muted-foreground text-sm mb-4 line-clamp-2">
                  {entry.desc}
                </p>
                
                {/* Read Button */}
                <span className="font-cinzel text-xs tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                  Read →
                </span>
              </Link>
            ))}
          </div>

          {filteredEntries.length === 0 && (
            <p className="text-center font-cormorant text-muted-foreground italic py-12">
              No entries found in this category.
            </p>
          )}
        </div>
      </SectionContainer>

      {/* Start Here Section */}
      <SectionContainer className="py-16 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cinzel text-2xl text-gold-gradient text-center mb-4">
            Start Here
          </h2>
          <p className="font-cormorant text-muted-foreground text-center mb-10">
            [START_HERE_INTRO]
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {startHereEntries.map((entry, index) => (
              <Link
                key={entry.slug}
                to={`/canon/${entry.slug}`}
                className="group relative p-6 border-2 border-primary/30 hover:border-primary bg-card/30 transition-all duration-300"
              >
                <span className="absolute -top-3 left-4 bg-background px-2 font-cinzel text-xs text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                <h3 className="font-cinzel text-lg text-foreground mb-2 group-hover:text-gold-gradient transition-colors">
                  {entry.title}
                </h3>
                <p className="font-cormorant text-muted-foreground text-sm">
                  {entry.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default Canon;
