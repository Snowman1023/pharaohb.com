import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { HeroSection } from '@/components/HeroSection';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

// Word cloud terms
const wordCloudTerms = ['writing', 'philosophy', 'art', 'reflection', 'identity'];

// Three paths
const threePaths = [
  {
    title: 'The Canon',
    description: 'Written works exploring consciousness, identity, and the architecture of meaning.',
    link: '/canon',
    symbol: '𓏏',
  },
  {
    title: 'Art',
    description: 'Visual explorations in form, geometry, and symbolic expression.',
    link: '/art',
    symbol: '𓋹',
  },
  {
    title: 'Music',
    description: 'Sound compositions designed for contemplation and inner work.',
    link: '/music',
    symbol: '𓇳',
  },
];

const Home = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <PageLayout>
      {/* 1. Hero Section - Unchanged */}
      <HeroSection />
      
      {/* 2. Word Cloud Section */}
      <SectionContainer className="py-20 border-b border-border/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12 md:gap-y-6">
            {wordCloudTerms.map((term) => (
              <span 
                key={term}
                className="font-cormorant text-2xl md:text-3xl lg:text-4xl text-muted-foreground/60 hover:text-primary transition-colors duration-500 cursor-default"
              >
                {term}
              </span>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 3. Three Paths Grid */}
      <SectionContainer className="py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {threePaths.map((path) => (
              <Link 
                key={path.title}
                to={path.link}
                className="group block"
              >
                <div className="border border-border hover:border-primary/50 bg-card/30 transition-all duration-500 overflow-hidden">
                  {/* Abstract image placeholder */}
                  <PlaceholderImage 
                    aspectRatio="landscape" 
                    label=""
                    symbol={path.symbol}
                  />
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-cinzel text-xl text-foreground group-hover:text-gold-gradient transition-colors mb-3">
                      {path.title}
                    </h3>
                    <p className="font-cormorant text-muted-foreground mb-4 line-clamp-2">
                      {path.description}
                    </p>
                    <span className="font-cinzel text-sm tracking-widest text-primary">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 4. Email Updates */}
      <SectionContainer className="py-20 border-y border-border/30">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-cinzel text-2xl md:text-3xl text-gold-gradient mb-4">
            Stay Updated
          </h2>
          <p className="font-cormorant text-lg text-muted-foreground mb-8">
            Receive updates, writings, and new works.
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
    </PageLayout>
  );
};

export default Home;

