import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { HeroSection } from '@/components/HeroSection';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Feather, Eye, Sparkles } from 'lucide-react';

const Home = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // PLACEHOLDER: Implement newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <PageLayout>
      {/* Hero Section - kept exactly as-is */}
      <HeroSection />
      
      {/* 2. Signature Value Strip */}
      <SectionContainer className="py-16 border-b border-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Feather, label: '[PILLAR_1]' },
              { icon: Eye, label: '[PILLAR_2]' },
              { icon: Sparkles, label: '[PILLAR_3]' },
            ].map((pillar, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <pillar.icon className="w-8 h-8 text-primary/70" strokeWidth={1.5} />
                <span className="font-cinzel text-sm tracking-widest text-foreground/80">
                  {pillar.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 3. Featured Drops */}
      <SectionContainer className="py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-cinzel text-2xl md:text-3xl text-gold-gradient text-center mb-12">
            Featured Drops
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <Link 
                key={num}
                to="/shop"
                className="group p-6 border border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="aspect-square bg-muted/20 border border-border/50 mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground font-cormorant italic">
                    [DROP_IMAGE_{num}]
                  </span>
                </div>
                
                <h3 className="font-cinzel text-lg text-foreground group-hover:text-gold-gradient transition-colors mb-2">
                  [DROP_TITLE_{num}]
                </h3>
                <p className="font-cormorant text-muted-foreground text-sm mb-3">
                  [DROP_DESC_{num}]
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-cinzel text-sm text-primary/80">
                    $[PRICE]
                  </span>
                  <span className="font-cinzel text-xs tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                    View →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 4. The Canon Preview */}
      <SectionContainer className="py-20 border-y border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cinzel text-2xl md:text-3xl text-gold-gradient mb-6">
            The Canon
          </h2>
          <p className="font-cormorant text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {/* PLACEHOLDER: Canon intro text */}
            [CANON_INTRO_TEXT]
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { title: '[CANON_TILE_1]', symbol: '𓂀' },
              { title: '[CANON_TILE_2]', symbol: '𓅓' },
              { title: '[CANON_TILE_3]', symbol: '𓆣' },
            ].map((tile, index) => (
              <Link
                key={index}
                to="/canon"
                className="group p-6 border border-border hover:border-primary/50 bg-card/20 transition-all duration-300"
              >
                <div className="text-3xl text-primary/40 group-hover:text-primary transition-colors mb-3">
                  {tile.symbol}
                </div>
                <span className="font-cinzel text-sm tracking-wider text-foreground/80 group-hover:text-gold-gradient transition-colors">
                  {tile.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 5. EchoVerse Preview */}
      <SectionContainer className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cinzel text-2xl md:text-3xl text-gold-gradient mb-6">
            EchoVerse
          </h2>
          <p className="font-cormorant text-lg text-muted-foreground mb-8">
            {/* PLACEHOLDER: EchoVerse intro */}
            [ECHOVERSE_INTRO_TEXT]
          </p>
          <Button
            asChild
            variant="outline"
            className="font-cinzel text-sm tracking-widest px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            <Link to="/echoverse">
              Explore EchoVerse
            </Link>
          </Button>
        </div>
      </SectionContainer>

      {/* 6. Join the Circle (Newsletter) */}
      <SectionContainer className="py-20 border-y border-border/50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-cinzel text-2xl md:text-3xl text-gold-gradient mb-4">
            Join the Circle
          </h2>
          <p className="font-cormorant text-lg text-muted-foreground mb-8">
            {/* PLACEHOLDER: Newsletter copy */}
            [NEWSLETTER_COPY]
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background/50 border-border font-cormorant text-base py-6"
              required
            />
            <Button 
              type="submit" 
              className="font-cinzel text-sm tracking-widest px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </SectionContainer>

      {/* 7. Contact CTA Band */}
      <SectionContainer className="py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-cormorant text-xl text-muted-foreground mb-6">
            {/* PLACEHOLDER: Contact one-liner */}
            [CONTACT_ONELINER]
          </p>
          <Button
            asChild
            variant="outline"
            className="font-cinzel text-sm tracking-widest px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            <Link to="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default Home;
