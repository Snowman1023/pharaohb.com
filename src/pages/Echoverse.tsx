import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { cn } from '@/lib/utils';

// Projects without category labels
const projects = [
  {
    id: 1,
    title: 'The Sacred Archives',
    description: 'An immersive digital sanctuary housing ancient teachings reimagined for the modern soul.',
    symbol: '𓋹',
  },
  {
    id: 2,
    title: 'Temple of Echoes',
    description: 'Weekly transmissions from the eternal realm, bringing wisdom to your ears.',
    symbol: '𓇳',
  },
  {
    id: 3,
    title: 'The Golden Circle',
    description: 'A sacred gathering of seekers united in the pursuit of self-mastery.',
    symbol: '𓂓',
  },
  {
    id: 4,
    title: 'Pharaonic Arts',
    description: 'Original artwork channeling the mystical energy of ancient kingdoms.',
    symbol: '𓃭',
  },
];

const Echoverse = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Echoverse"
        subtitle="Projects, collaborations, and other doors."
        symbol="𓆣"
      />

      <SectionContainer>
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={cn(
                "group relative p-8 bg-gradient-to-br from-card to-muted/30",
                "border border-border hover:border-primary/50",
                "transition-all duration-500 cursor-pointer",
                "overflow-hidden"
              )}
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Symbol */}
              <div className="text-5xl text-primary/30 group-hover:text-primary/60 transition-colors mb-4">
                {project.symbol}
              </div>

              {/* Content */}
              <div className="relative space-y-3">
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
      </SectionContainer>
    </PageLayout>
  );
};

export default Echoverse;
