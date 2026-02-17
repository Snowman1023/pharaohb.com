import { Link } from 'react-router-dom';
import { poems } from '@/data/poems';

// Custom generated images for poems
import theUnionImg from '@/assets/poems/the-union.jpg';
import theUnmakingImg from '@/assets/poems/the-unmaking.jpg';
import theRadianceImg from '@/assets/poems/the-radiance.jpg';
import theThresholdImg from '@/assets/poems/the-threshold.jpg';
import theWitnessImg from '@/assets/poems/the-witness.jpg';
import theMirrorImg from '@/assets/poems/the-mirror.jpg';
import theEndOfTryingImg from '@/assets/poems/the-end-of-trying.jpg';
import theReturnImg from '@/assets/poems/the-return.jpg';
import theAgreementImg from '@/assets/poems/the-agreement.jpg';

// Images matching the vibration of each poem
const poemImages: Record<string, string> = {
  'the-union': theUnionImg,
  'the-unmaking': theUnmakingImg,
  'the-radiance': theRadianceImg,
  'the-threshold': theThresholdImg,
  'the-witness': theWitnessImg,
  'the-mirror': theMirrorImg,
  'the-end-of-trying': theEndOfTryingImg,
  'the-return': theReturnImg,
  'the-agreement': theAgreementImg,
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
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-gold-gradient mb-3 sm:mb-4">
            Artifacts
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Transmissions from the threshold.
          </p>
        </div>

        {/* 3x3 Grid of Poem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {featuredPoems.map((poem) => (
            <Link
              key={poem.id}
              to="/canon"
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
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <span className="font-cinzel text-[10px] sm:text-xs text-primary/70 uppercase tracking-widest mb-1 sm:mb-2 block">
                  Poetry
                </span>
                <h3 className="font-cinzel text-base sm:text-lg text-foreground group-hover:text-gold-gradient transition-colors mb-1 sm:mb-2">
                  {poem.title}
                </h3>
                <p className="font-cormorant text-xs sm:text-sm text-muted-foreground italic line-clamp-2">
                  "{getExcerpt(poem.content)}"
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            to="/canon"
            className="inline-flex items-center gap-2 font-cinzel text-sm tracking-widest text-primary hover:opacity-70 transition-opacity"
          >
            View All Canon
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ArtifactsSection;
