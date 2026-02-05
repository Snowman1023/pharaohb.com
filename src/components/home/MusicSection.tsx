import { Link } from 'react-router-dom';
import { Play, Music } from 'lucide-react';
import { albums } from '@/data/albums';

// Featured album (first one with YouTube video)
const featuredAlbum = albums.find(a => a.youtubeVideoId);

// Other albums for Spotify embeds (take first 4 with Spotify IDs, excluding featured)
const spotifyAlbums = albums
  .filter(a => a.spotifyEmbedId && a.slug !== featuredAlbum?.slug)
  .slice(0, 4);

export function MusicSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-3xl md:text-4xl text-gold-gradient mb-4">
            Music
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Sound as medicine. Composition as ceremony. Frequencies calibrated for transformation.
          </p>
        </div>

        {/* Main Layout: Featured Video + Spotify Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Featured YouTube Video */}
          {featuredAlbum?.youtubeVideoId && (
            <div className="mb-8">
              <div className="relative group">
                <div className="aspect-video overflow-hidden border border-border bg-background">
                  <iframe
                    src={`https://www.youtube.com/embed/${featuredAlbum.youtubeVideoId}`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                    title={featuredAlbum.title}
                  />
                </div>
                {/* Featured Label */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground font-cinzel text-xs tracking-widest uppercase">
                  Featured
                </div>
              </div>
              {/* Featured Album Info */}
              <div className="mt-4 text-center">
                <h3 className="font-cinzel text-xl text-foreground">
                  {featuredAlbum.title}
                </h3>
                <p className="font-cormorant text-muted-foreground italic">
                  {featuredAlbum.year}
                </p>
              </div>
            </div>
          )}

          {/* Spotify Albums Grid - 2x2 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {spotifyAlbums.map((album) => (
              <div key={album.slug} className="group">
                {/* Album Header */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-16 h-16 shrink-0 overflow-hidden border border-border">
                    <img
                      src={album.image}
                      alt={album.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-cinzel text-sm text-foreground group-hover:text-primary transition-colors truncate">
                      {album.title}
                    </h4>
                    <p className="font-cormorant text-xs text-primary/70 italic">
                      {album.year}
                    </p>
                  </div>
                </div>
                
                {/* Spotify Embed */}
                {album.spotifyEmbedId && (
                  <iframe
                    src={`https://open.spotify.com/embed/album/${album.spotifyEmbedId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            to="/music"
            className="inline-flex items-center gap-2 font-cinzel text-sm tracking-widest text-primary hover:opacity-70 transition-opacity"
          >
            Explore All Music
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MusicSection;
