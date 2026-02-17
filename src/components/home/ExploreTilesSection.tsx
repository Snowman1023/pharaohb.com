import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const exploreTiles = [
  {
    title: 'The Canon',
    description: 'Books, essays, and poetry',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80',
    link: '/canon'
  },
  {
    title: 'Transmissions',
    description: 'Frequencies, teachings, and music',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80',
    link: '/transmissions'
  },
  {
    title: 'Shop',
    description: 'Art prints, objects, and apparel',
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=1200&q=80',
    link: '/shop'
  }
];

export function ExploreTilesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-gold-gradient mb-3 sm:mb-4">
            Explore
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Three paths into the work. Choose your doorway.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4 max-w-5xl mx-auto">
          {exploreTiles.map((tile, index) => (
            <Link
              key={index}
              to={tile.link}
              className="group relative block overflow-hidden h-32 sm:h-40 md:h-48 lg:h-64"
            >
              <img
                src={tile.image}
                alt={tile.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/70 group-hover:bg-background/60 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 md:px-16">
                <div>
                  <h3 className="font-cinzel text-lg sm:text-xl md:text-2xl lg:text-4xl text-foreground group-hover:text-gold-gradient transition-colors mb-1 sm:mb-2">
                    {tile.title}
                  </h3>
                  <p className="font-cormorant text-sm sm:text-base md:text-lg text-muted-foreground">
                    {tile.description}
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
