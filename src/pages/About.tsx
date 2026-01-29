import { PageLayout } from '@/components/layout/PageLayout';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <PageLayout>
      {/* 1. Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            
            <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-gold-gradient mb-6">
              About
            </h1>
            
            <p className="font-cormorant text-xl md:text-2xl text-muted-foreground italic">
              Writer. Architect. Mirror. Messenger.
            </p>
            
            <div className="egyptian-divider max-w-md mx-auto mt-8">
              <span className="text-primary text-2xl">𓂀</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <SectionContainer className="py-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-cormorant text-xl text-muted-foreground leading-relaxed">
            The work spans forms. It moves through writing, image, sound, and object. 
            It accumulates. It continues.
          </p>
        </div>
      </SectionContainer>

      {/* 3. What Exists - Visual rhythm without labels */}
      <SectionContainer className="py-20 border-y border-border/50">
        <div className="max-w-4xl mx-auto">
          <Link to="/work" className="group block">
            <div className="grid grid-cols-3 gap-8 md:gap-16">
              {['𓏏', '𓋹', '𓇳'].map((symbol, index) => (
                <div 
                  key={index} 
                  className="text-center group-hover:scale-105 transition-transform duration-500"
                >
                  <div className="text-5xl md:text-6xl text-primary/40 group-hover:text-primary/70 transition-colors duration-500">
                    {symbol}
                  </div>
                </div>
              ))}
            </div>
          </Link>
        </div>
      </SectionContainer>

      {/* 4. A Note */}
      <SectionContainer className="py-20">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="relative">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl text-primary/20">
              "
            </span>
            <p className="font-cormorant text-2xl text-foreground/90 italic leading-relaxed">
              Everything here is offered, not prescribed.
            </p>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-4xl text-primary/20">
              "
            </span>
          </blockquote>
        </div>
      </SectionContainer>

      {/* 5. Connect */}
      <SectionContainer className="py-16 border-t border-border/50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="font-cinzel text-sm tracking-widest px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/work">
                Explore the Work
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="font-cinzel text-sm tracking-widest px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default About;
