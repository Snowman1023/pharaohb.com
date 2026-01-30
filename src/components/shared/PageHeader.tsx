import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  symbol?: string;
  orientationText?: string;
  className?: string;
}

export function PageHeader({ title, subtitle, symbol = "☥", orientationText, className }: PageHeaderProps) {
  return (
    <div className={cn("pt-32 pb-16 md:pt-40 md:pb-20", className)}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          {/* Decorative ornament */}
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          
          <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-gold-gradient mb-4">
            {title}
          </h1>
          
          {subtitle && (
            <p className="font-cormorant text-xl md:text-2xl text-muted-foreground italic">
              {subtitle}
            </p>
          )}
          
          {orientationText && (
            <p className="font-cormorant text-base md:text-lg text-primary/60 mt-2 max-w-2xl mx-auto">
              {orientationText}
            </p>
          )}
          
          {/* Egyptian divider */}
          <div className="egyptian-divider max-w-md mx-auto mt-8">
            <span className="text-primary text-2xl">{symbol}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
