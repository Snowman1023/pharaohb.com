import { Play } from 'lucide-react';
import type { Short } from '@/data/transmissions';

interface ShortCardProps {
  short: Short;
}

export function ShortCard({ short }: ShortCardProps) {
  return (
    <a
      href={short.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      {/* Thumbnail Container - 9:16 vertical aspect ratio */}
      <div className="relative aspect-[9/16] overflow-hidden border border-border group-hover:border-primary/50 transition-all duration-300">
        {/* Thumbnail Image */}
        <img
          src={short.thumbnail}
          alt={short.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Short Title */}
      <h3 className="mt-2 font-cinzel text-xs text-foreground group-hover:text-primary transition-colors line-clamp-2 text-center">
        {short.title}
      </h3>
    </a>
  );
}

export default ShortCard;
