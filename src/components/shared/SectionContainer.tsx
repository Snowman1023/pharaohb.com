import { ReactNode } from 'react';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({ children, className, id }: SectionContainerProps) {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section 
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={cn("py-16 md:py-24", className)}
    >
      <div className="container mx-auto px-6">
        <div className={cn(
          "transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {children}
        </div>
      </div>
    </section>
  );
}

export default SectionContainer;
