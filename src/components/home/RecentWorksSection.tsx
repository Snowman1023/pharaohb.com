import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { books } from '@/data/books';
import { transmissions, getFeaturedTransmissions } from '@/data/transmissions';

// Get featured transmissions for display
const featuredTransmissions = getFeaturedTransmissions();
const featuredVideo = featuredTransmissions.find(t => t.category === 'music') || featuredTransmissions[0];

// Get additional videos for the row (exclude the featured one)
const additionalVideos = featuredTransmissions
  .filter(t => t.id !== featuredVideo.id)
  .slice(0, 3);

// Get featured books
const featuredBooks = books.slice(0, 2);

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

        {/* Featured Row: Stacked Videos + Stacked Books */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
          {/* Two Stacked Videos - Takes 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Video 1: Master Key */}
            <a
              href={featuredVideo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-background/90 text-foreground text-xs font-medium tracking-wide">
                  {featuredVideo.duration}
                </div>
              </div>
              
              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="font-cinzel text-xs text-primary/70 uppercase tracking-widest mb-1 block">
                  {featuredVideo.category}
                </span>
                <h3 className="font-cinzel text-lg text-foreground group-hover:text-gold-gradient transition-colors">
                  {featuredVideo.title}
                </h3>
              </div>
            </a>

            {/* Video 2: Second featured */}
            {additionalVideos[0] && (
              <a
                href={additionalVideos[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={additionalVideos[0].thumbnail}
                    alt={additionalVideos[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-background/90 text-foreground text-xs font-medium tracking-wide">
                    {additionalVideos[0].duration}
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="font-cinzel text-xs text-primary/70 uppercase tracking-widest mb-1 block">
                    {additionalVideos[0].category}
                  </span>
                  <h3 className="font-cinzel text-lg text-foreground group-hover:text-gold-gradient transition-colors">
                    {additionalVideos[0].title}
                  </h3>
                </div>
              </a>
            )}
          </div>

          {/* Stacked Books - Takes 1 column */}
          <div className="flex flex-col gap-6">
            {featuredBooks.map((book, index) => (
              <Link
                key={index}
                to={`/canon/${book.slug}`}
                className="group relative overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 flex-1"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="font-cinzel text-xs text-primary/70 uppercase tracking-widest mb-1 block">
                    book
                  </span>
                  <h3 className="font-cinzel text-sm text-foreground group-hover:text-gold-gradient transition-colors">
                    {book.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Video Row: 3 columns of 16:9 videos (skip first one, it's in top section) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {additionalVideos.slice(1).map((video) => (
            <a
              key={video.id}
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-6 h-6 text-primary-foreground ml-0.5" fill="currentColor" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 px-2 py-0.5 bg-background/90 text-foreground text-xs font-medium tracking-wide">
                  {video.duration}
                </div>
              </div>
              
              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="font-cinzel text-xs text-primary/70 uppercase tracking-widest mb-1 block">
                  {video.category}
                </span>
                <h3 className="font-cinzel text-sm text-foreground group-hover:text-gold-gradient transition-colors line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            to="/transmissions"
            className="inline-flex items-center gap-2 font-cinzel text-sm tracking-widest text-primary hover:opacity-70 transition-opacity"
          >
            View All Transmissions
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
