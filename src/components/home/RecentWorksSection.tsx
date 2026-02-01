import { Link } from 'react-router-dom';
import { books } from '@/data/books';
import { artworks } from '@/data/artworks';
import { writings } from '@/data/writings';

const recentWorks = [
  { 
    type: 'book',
    title: books[0].title, 
    description: 'A transformative exploration of identity and purpose.',
    image: books[0].image,
    link: `/canon/${books[0].slug}`
  },
  { 
    type: 'art',
    title: artworks[0].title, 
    description: artworks[0].description,
    image: artworks[0].image,
    link: `/art/${artworks[0].slug}`
  },
  { 
    type: 'writing',
    title: writings[0].title, 
    description: writings[0].excerpt.slice(0, 80) + '...',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    link: `/writings/${writings[0].slug}`
  },
  { 
    type: 'art',
    title: artworks[3].title, 
    description: artworks[3].description,
    image: artworks[3].image,
    link: `/art/${artworks[3].slug}`
  },
  { 
    type: 'book',
    title: books[1].title, 
    description: 'Building sacred spaces within and without.',
    image: books[1].image,
    link: `/canon/${books[1].slug}`
  },
  { 
    type: 'writing',
    title: writings[2].title, 
    description: writings[2].excerpt.slice(0, 80) + '...',
    image: 'https://images.unsplash.com/photo-1473186505569-9c61870c11f9?w=800&q=80',
    link: `/writings/${writings[2].slug}`
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
          {recentWorks.map((work, index) => (
            <Link
              key={index}
              to={work.link}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
