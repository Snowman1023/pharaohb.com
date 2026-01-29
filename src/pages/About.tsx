import { PageLayout } from '@/components/layout/PageLayout';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Palette, Feather, Music } from 'lucide-react';

const About = () => {
  return (
    <PageLayout>
      {/* 1. Hero-lite Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            
            <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-gold-gradient mb-6">
              [ABOUT_HEADLINE]
            </h1>
            
            <p className="font-cormorant text-xl md:text-2xl text-muted-foreground italic">
              [ABOUT_SUBHEAD]
            </p>
            
            <div className="egyptian-divider max-w-md mx-auto mt-8">
              <span className="text-primary text-2xl">𓂀</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What I Make */}
      <SectionContainer className="py-20 border-y border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-cinzel text-2xl md:text-3xl text-gold-gradient text-center mb-12">
            What I Make
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Palette, title: 'Art', desc: '[ART_DESCRIPTION]' },
              { icon: Feather, title: 'Writing', desc: '[WRITING_DESCRIPTION]' },
              { icon: Music, title: 'Music', desc: '[MUSIC_DESCRIPTION]' },
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center p-8 border border-border/50 bg-card/20"
              >
                <item.icon className="w-10 h-10 text-primary/60 mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-cinzel text-lg text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-cormorant text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 3. Why It Exists */}
      <SectionContainer className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cinzel text-2xl md:text-3xl text-gold-gradient mb-8">
            Why It Exists
          </h2>
          
          <p className="font-cormorant text-lg text-muted-foreground leading-relaxed mb-10">
            [WHY_IT_EXISTS_PARAGRAPH]
          </p>
          
          {/* Pull Quote */}
          <blockquote className="relative py-8 px-6 border-l-2 border-r-2 border-primary/30">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl text-primary/30">
              "
            </span>
            <p className="font-cinzel text-xl text-foreground/90 italic">
              [PULL_QUOTE]
            </p>
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-4xl text-primary/30">
              "
            </span>
          </blockquote>
        </div>
      </SectionContainer>

      {/* 4. How to Start */}
      <SectionContainer className="py-20 border-y border-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cinzel text-2xl md:text-3xl text-gold-gradient text-center mb-12">
            How to Start
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '01', title: '[STEP_1_TITLE]', desc: '[STEP_1_DESC]', to: '/canon', cta: 'Enter the Canon' },
              { step: '02', title: '[STEP_2_TITLE]', desc: '[STEP_2_DESC]', to: '/shop', cta: 'Browse the Shop' },
              { step: '03', title: '[STEP_3_TITLE]', desc: '[STEP_3_DESC]', to: '/echoverse', cta: 'Explore EchoVerse' },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="group p-6 border border-border hover:border-primary/50 bg-card/20 transition-all duration-300"
              >
                <span className="font-cinzel text-3xl text-primary/30 group-hover:text-primary/60 transition-colors">
                  {item.step}
                </span>
                <h3 className="font-cinzel text-lg text-foreground mt-4 mb-2 group-hover:text-gold-gradient transition-colors">
                  {item.title}
                </h3>
                <p className="font-cormorant text-muted-foreground text-sm mb-4">
                  {item.desc}
                </p>
                <span className="font-cinzel text-xs tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                  {item.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 5. Image Band */}
      <SectionContainer className="py-0">
        <div className="w-full aspect-[21/9] bg-muted/20 border-y border-border/50 flex items-center justify-center">
          <span className="font-cormorant text-muted-foreground italic">
            [WIDE_CINEMATIC_IMAGE]
          </span>
        </div>
      </SectionContainer>

      {/* 6. Final CTA */}
      <SectionContainer className="py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-cormorant text-xl text-muted-foreground mb-8">
            [FINAL_CTA_TEXT]
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="font-cinzel text-sm tracking-widest px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/shop">
                Visit the Shop
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
