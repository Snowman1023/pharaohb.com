import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: "The Sacred Archives",
    category: "Digital Experience",
    description: "An immersive digital sanctuary housing ancient teachings reimagined for the modern soul.",
    symbol: "𓋹",
  },
  {
    id: 2,
    title: "Temple of Echoes",
    category: "Podcast",
    description: "Weekly transmissions from the eternal realm, bringing wisdom to your ears.",
    symbol: "𓇳",
  },
  {
    id: 3,
    title: "The Golden Circle",
    category: "Community",
    description: "A sacred gathering of seekers united in the pursuit of self-mastery.",
    symbol: "𓂓",
  },
  {
    id: 4,
    title: "Pharaonic Arts",
    category: "Visual Art",
    description: "Original artwork channeling the mystical energy of ancient kingdoms.",
    symbol: "𓃭",
  },
];

export function EchoverseSection() {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section 
      id="echoverse" 
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 md:py-32"
    >
      <div className="container mx-auto px-6">
        <div className={cn(
          "transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-5xl text-gold-gradient mb-4">
              The Echoverse
            </h2>
            <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the expanding universe of creation. Each realm is a gateway to deeper 
              understanding and sacred connection.
            </p>
            <div className="egyptian-divider max-w-md mx-auto mt-6">
              <span className="text-primary text-2xl">𓆣</span>
            </div>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={cn(
                  "group relative p-8 bg-gradient-to-br from-card to-muted/30",
                  "border border-border hover:border-primary/50",
                  "transition-all duration-500 cursor-pointer",
                  "overflow-hidden"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Symbol */}
                <div className="text-5xl text-primary/30 group-hover:text-primary/60 transition-colors mb-4">
                  {project.symbol}
                </div>

                {/* Content */}
                <div className="relative space-y-3">
                  <span className="font-cinzel text-xs tracking-widest text-primary/80 uppercase">
                    {project.category}
                  </span>
                  <h3 className="font-cinzel text-2xl text-foreground group-hover:text-gold-gradient transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-cormorant text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Explore link */}
                  <div className="pt-4">
                    <span className="inline-flex items-center gap-2 font-cinzel text-sm text-primary group-hover:gap-4 transition-all">
                      Explore
                      <span className="text-lg">→</span>
                    </span>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-primary/30 group-hover:border-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EchoverseSection;
