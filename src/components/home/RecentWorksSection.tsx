import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { transmissions } from '@/data/transmissions';

// Helper to find video by YouTube ID
const findVideoById = (youtubeId: string) => 
  transmissions.find(t => t.href.includes(youtubeId));

// Left column - 2 large stacked audiobooks (TOP to BOTTOM order)
const leftColumnVideos = [
  findVideoById('Nd_9Nuv39Zw'), // The Master Key System - TOP
  findVideoById('msA-q_PwIz8'), // The Art of Not Thinking Yourself to Death - BOTTOM
].filter(Boolean);

// Right column - 3 smaller stacked audiobooks (TOP to BOTTOM order)
const rightColumnVideos = [
  findVideoById('I-xKF7PyoVM'), // You Are Not Your Addiction
  findVideoById('HOfjZTY0Q4s'), // The Light Within
  findVideoById('ejbByodADwA'), // The Kybalion
].filter(Boolean);

interface VideoCardProps {
  video: typeof transmissions[0];
}

function VideoCard({ video }: VideoCardProps) {
  return (
    <a
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
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-background/90 text-foreground text-xs font-medium tracking-wide">
          {video.duration}
        </div>
      </div>
      
      {/* Video Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="font-cinzel text-xs text-primary/70 uppercase tracking-widest mb-1 block">
          {video.category}
        </span>
        <h3 className="font-cinzel text-sm lg:text-base text-foreground group-hover:text-gold-gradient transition-colors line-clamp-2">
          {video.title}
        </h3>
      </div>
    </a>
  );
}

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

        {/* 2-Column Grid: Left (2 large 16:9) + Right (3 smaller 16:9) with 3:2 ratio for equal heights */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 max-w-6xl mx-auto">
          {/* Left Column - 2 large stacked audiobooks */}
          <div className="flex flex-col gap-4">
            {leftColumnVideos.map((video) => (
              video && <VideoCard key={video.id} video={video} />
            ))}
          </div>

          {/* Right Column - 3 stacked audiobooks */}
          <div className="flex flex-col gap-4">
            {rightColumnVideos.map((video) => (
              video && <VideoCard key={video.id} video={video} />
            ))}
          </div>
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
