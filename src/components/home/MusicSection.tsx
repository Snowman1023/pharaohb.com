import { Link } from 'react-router-dom';

// Featured content - Galaxies in Your Gaze
const featuredVideo = {
  id: 'EAU5cD0Sh_4',
  title: 'Galaxies in Your Gaze',
};

// Spotify embeds to display (exactly as provided)
const spotifyEmbeds = [
  {
    src: 'https://open.spotify.com/embed/album/1gVW4727OxzEj6EQ7wQBSi?utm_source=generator',
    title: 'Spotify embed 01',
  },
  {
    src: 'https://open.spotify.com/embed/album/7r3I3KZnSZPyjci4zxJAZR?utm_source=generator',
    title: 'Spotify embed 02',
  },
  {
    src: 'https://open.spotify.com/embed/album/7r3I3KZnSZPyjci4zxJAZR?utm_source=generator',
    title: 'Spotify embed 03',
  },
  {
    src: 'https://open.spotify.com/embed/album/799xzarOcV5RSWk3LCVI8C?utm_source=generator',
    title: 'Spotify embed 04',
  },
  {
    src: 'https://open.spotify.com/embed/album/799xzarOcV5RSWk3LCVI8C?utm_source=generator',
    title: 'Spotify embed 05',
  },
  {
    src: 'https://open.spotify.com/embed/album/799xzarOcV5RSWk3LCVI8C?utm_source=generator',
    title: 'Spotify embed 06',
  },
  {
    src: 'https://open.spotify.com/embed/album/3184qyYgGnm8yBs6asYF5d?utm_source=generator',
    title: 'Spotify embed 07',
  },
  {
    src: 'https://open.spotify.com/embed/album/0G8WL3Q4cIEwzNgQl5Jw2f?utm_source=generator',
    title: 'Spotify embed 08',
  },
];

export function MusicSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-3xl md:text-4xl text-gold-gradient mb-4">
            Music
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Featured YouTube Video - 16:9 */}
          <div className="mb-10">
            <div className="aspect-video overflow-hidden border border-border bg-background">
              <iframe
                src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
                title={featuredVideo.title}
              />
            </div>
            <p className="text-center mt-4 font-cinzel text-lg text-foreground">
              {featuredVideo.title}
            </p>
          </div>

          {/* Spotify Embeds */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spotifyEmbeds.map((embed, idx) => (
              <div key={`${embed.src}-${idx}`}>
                <iframe
                  src={embed.src}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg"
                  title={embed.title}
                />
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
