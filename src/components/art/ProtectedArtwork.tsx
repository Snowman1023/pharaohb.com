import { Artwork } from '@/data/artworks';

interface ProtectedArtworkProps {
  artwork: Artwork;
}

export function ProtectedArtwork({ artwork }: ProtectedArtworkProps) {
  return (
    <div 
      className="relative group cursor-pointer"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Image rendered as background - harder to save than <img> */}
      <div 
        className="w-full aspect-square bg-cover bg-center border border-border group-hover:border-primary/50 transition-all duration-300"
        style={{ backgroundImage: `url(${artwork.image})` }}
      />
      
      {/* Invisible overlay blocks all interaction with image */}
      <div className="absolute inset-0" />
      
      {/* Title on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="font-cinzel text-sm text-primary">
          {artwork.title}
        </h3>
        {artwork.formats && artwork.formats.length > 0 && (
          <span className="text-xs text-muted-foreground">
            Print Available from {artwork.formats[0].price}
          </span>
        )}
      </div>
    </div>
  );
}

export default ProtectedArtwork;
