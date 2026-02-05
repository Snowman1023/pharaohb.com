import { Link } from 'react-router-dom';
import { books } from '@/data/books';
import { artworks } from '@/data/artworks';
import { writings } from '@/data/writings';
import { transmissions } from '@/data/transmissions';

// Pull featured/recent items from each category
const featuredBook = books[0]; // Echoes of Becoming
const featuredArt = artworks[0];
const featuredWriting = writings[0];
const featuredTransmission = transmissions.find(t => t.featured) || transmissions[0];
const secondBook = books[1];
const secondArt = artworks[1];

const recentWorks = [
  { 
    type: 'book',
    title: featuredBook.title, 
    description: featuredBook.description.slice(0, 100) + '...',
    image: featuredBook.image,
    link: `/canon/${featuredBook.slug}`
  },
  { 
    type: 'art',
    title: featuredArt.title, 
    description: featuredArt.description,
    image: featuredArt.image,
    link: `/art/${featuredArt.slug}`
  },
  { 
    type: 'transmission',
    title: featuredTransmission.title, 
    description: featuredTransmission.description.slice(0, 80) + '...',
    image: featuredTransmission.thumbnail,
    link: featuredTransmission.href,
    external: true
  },
  { 
    type: 'writing',
    title: featuredWriting.title, 
    description: featuredWriting.excerpt.slice(0, 80) + '...',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    link: `/writings/${featuredWriting.slug}`
  },
  { 
    type: 'book',
    title: secondBook.title, 
    description: secondBook.description.slice(0, 100) + '...',
    image: secondBook.image,
    link: `/canon/${secondBook.slug}`
  },
  { 
    type: 'art',
    title: secondArt.title, 
    description: secondArt.description,
    image: secondArt.image,
    link: `/art/${secondArt.slug}`
  }
];

export function RecentWorksSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-3xl md:text-4xl text-gold-gradient mb-4">
            Recent Works
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Explorations in word, image, and form—each piece a doorway into deeper territories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {recentWorks.map((work, index) => {
            const Wrapper = work.external ? 'a' : Link;
            const wrapperProps = work.external 
              ? { href: work.link, target: '_blank', rel: 'noopener noreferrer' }
              : { to: work.link };
            
            return (
              <Wrapper
                key={index}
                {...wrapperProps as any}
                className="group relative overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="font-cinzel text-xs text-primary/70 uppercase tracking-widest mb-2 block">
                    {work.type}
                  </span>
                  <h3 className="font-cinzel text-lg text-foreground group-hover:text-gold-gradient transition-colors mb-2">
                    {work.title}
                  </h3>
                  <p className="font-cormorant text-sm text-muted-foreground line-clamp-2">
                    {work.description}
                  </p>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
