import { cn } from '@/lib/utils';

interface PlaceholderImageProps {
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide';
  label?: string;
  symbol?: string;
  className?: string;
}

const aspectRatioClasses = {
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[16/9]',
};

export function PlaceholderImage({ 
  aspectRatio = 'square', 
  label = 'Image Placeholder', 
  symbol = '☥',
  className 
}: PlaceholderImageProps) {
  return (
    <div className={cn(
      "bg-gradient-to-br from-muted to-charcoal flex items-center justify-center border border-border",
      aspectRatioClasses[aspectRatio],
      className
    )}>
      <div className="text-center p-6">
        <div className="text-5xl mb-3 text-primary/50">{symbol}</div>
        <p className="font-cormorant text-sm text-muted-foreground italic">
          {label}
        </p>
      </div>
    </div>
  );
}

export default PlaceholderImage;
