import { Link } from 'react-router-dom';
import { poems } from '@/data/poems';

// Abstract Unsplash images that match the vibration of each poem (no people, dark/architectural/symbolic)
const poemImages: Record<string, string> = {
  'the-union': 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=600&q=80', // Sacred geometry golden spiral
  'the-unmaking': 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=600&q=80', // Dark abstract dissolution
  'the-radiance': 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80', // Starry cosmic glow
  'the-threshold': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', // Ancient doorway/arch
  'the-witness': 'https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=600&q=80', // Abstract reflection
  'the-mirror': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', // Reflective surface
  'the-end-of-trying': 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80', // Nebula cosmos
  'the-return': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80', // Earth from space
  'the-agreement': 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=600&q=80', // Galaxy unity
};

// Get first 9 poems
const featuredPoems = poems.slice(0, 9);

// Get first 2 lines of poem content
function getExcerpt(content: string): string {
  const lines = content.split('\n').filter(line => line.trim());
  return lines.slice(0, 2).join(' ');
}

export function ArtifactsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-3xl md:text-4xl text-gold-gradient mb-4">
            Artifacts
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Transmissions from the threshold.
          </p>
        </div>

        {/* 3x3 Grid of Poem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredPoems.map((poem) => (
            <Link
              key={poem.id}
              to="/writings"
              className="group relative overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={poemImages[poem.id] || 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80'}
                  alt={poem.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>

              {/* Poem Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="font-cinzel text-xs text-primary/70 uppercase tracking-widest mb-2 block">
                  Poetry
                </span>
                <h3 className="font-cinzel text-lg text-foreground group-hover:text-gold-gradient transition-colors mb-2">
                  {poem.title}
                </h3>
                <p className="font-cormorant text-sm text-muted-foreground italic line-clamp-2">
                  "{getExcerpt(poem.content)}"
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            to="/writings"
            className="inline-flex items-center gap-2 font-cinzel text-sm tracking-widest text-primary hover:opacity-70 transition-opacity"
          >
            View All Writings
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ArtifactsSection;
