import { Track } from '@/data/musicData';
import { Play, Music } from 'lucide-react';

interface TrackCardProps {
  track: Track;
  index: number;
}

export function TrackCard({ track, index }: TrackCardProps) {
  return (
    <div className="group flex items-center gap-4 py-4 border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors duration-300 px-2 -mx-2 rounded">
      {/* Track Number */}
      <span className="font-cinzel text-sm text-primary/50 w-8 shrink-0">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Cover Image (if available) */}
      {track.coverImage ? (
        <div className="w-12 h-12 shrink-0 overflow-hidden border border-border">
          <img
            src={track.coverImage}
            alt={track.title}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-12 h-12 shrink-0 border border-border bg-muted/30 flex items-center justify-center">
          <Music className="w-5 h-5 text-muted-foreground" />
        </div>
      )}

      {/* Track Info */}
      <div className="flex-1 min-w-0">
        <h4 className="font-cinzel text-sm text-foreground group-hover:text-primary transition-colors truncate">
          {track.title}
        </h4>
        {track.description && (
          <p className="font-cormorant text-xs text-muted-foreground truncate">
            {track.description}
          </p>
        )}
      </div>

      {/* Duration */}
      <span className="font-cormorant text-sm text-muted-foreground shrink-0">
        {track.duration}
      </span>

      {/* Play Links */}
      <div className="flex items-center gap-2 shrink-0">
        {track.youtubeUrl && (
          <a
            href={track.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            aria-label="Play on YouTube"
          >
            <Play className="w-4 h-4" />
          </a>
        )}
        {track.spotifyUrl && (
          <a
            href={track.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            aria-label="Play on Spotify"
          >
            <span className="text-lg">●</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default TrackCard;
