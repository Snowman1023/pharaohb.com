import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { books } from '@/data/books';
import { artworks } from '@/data/artworks';

const availableNow = [
  {
    title: books[0].title,
    price: books[0].price,
    image: books[0].image,
    link: `/canon/${books[0].slug}`
  },
  {
    title: artworks[4].title + ' (Print)',
    price: artworks[4].formats[0].price,
    image: artworks[4].image,
    link: `/art/${artworks[4].slug}`
  },
  {
    title: books[3].title,
    price: books[3].price,
    image: books[3].image,
    link: `/canon/${books[3].slug}`
  }
];

export function AvailableNowSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-transparent via-muted/5 to-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-gold-gradient mb-3 sm:mb-4">
            Available Now
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Artifacts and teachings ready to accompany your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {availableNow.map((item, index) => (
            <div
              key={index}
              className="group bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="font-cinzel text-base sm:text-lg text-foreground group-hover:text-gold-gradient transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-cinzel text-xl sm:text-2xl text-primary">
                    {item.price}
                  </span>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="font-cinzel text-xs tracking-wider border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Link to={item.link}>View</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="font-cinzel tracking-wider border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link to="/shop">Browse All</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
