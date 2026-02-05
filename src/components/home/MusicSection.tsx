import { Link } from 'react-router-dom';

// Featured content - Galaxies in Your Gaze
const featuredVideo = {
  id: 'EAU5cD0Sh_4',
  title: 'Galaxies in Your Gaze',
};

// Spotify albums to display (all 5 unique albums)
const spotifyAlbums = [
  { id: '1gVW4727OxzEj6EQ7wQBSi', title: 'Frequencies of the Eternal' },
  { id: '7r3I3KZnSZPyjci4zxJAZR', title: 'Temple Meditations Vol. I' },
  { id: '799xzarOcV5RSWk3LCVI8C', title: 'The Obsidian Sessions' },
  { id: '3184qyYgGnm8yBs6asYF5d', title: 'Golden Hour Transmissions' },
  { id: '0G8WL3Q4cIEwzNgQl5Jw2f', title: 'Sacred Geometry Soundscapes' },
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

          {/* Spotify Albums - 3 column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spotifyAlbums.map((album) => (
              <div key={album.id}>
                <iframe
                  src={`https://open.spotify.com/embed/album/${album.id}?utm_source=generator&theme=0`}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg"
                  title={album.title}
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
