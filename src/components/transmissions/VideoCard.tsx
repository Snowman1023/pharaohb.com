import { Play } from 'lucide-react';
import type { Transmission } from '@/data/transmissions';

interface VideoCardProps {
  video: Transmission;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <a
      href={video.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      {/* Thumbnail Container - 16:9 aspect ratio */}
      <div className="relative aspect-video overflow-hidden border border-border group-hover:border-primary/50 transition-all duration-300">
        {/* Thumbnail Image */}
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-background/90 text-foreground text-xs font-medium tracking-wide">
          {video.duration}
        </div>
      </div>

      {/* Video Info */}
      <div className="mt-3 space-y-1">
        <h3 className="font-cinzel text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {video.title}
        </h3>
        {video.views && (
          <p className="font-cormorant text-sm text-muted-foreground">
            {video.views.toLocaleString()} views
          </p>
        )}
      </div>
    </a>
  );
}

export default VideoCard;
