import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { HeroSection } from '@/components/HeroSection';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

// Recent work entries - no categories, just titles and lines
const recentWork = [
  { slug: 'the-book-of-sacred-echoes', title: 'The Book of Sacred Echoes', line: 'A meditation on silence and return.' },
  { slug: 'letters-to-the-forgotten-throne', title: 'Letters to the Forgotten Throne', line: 'Correspondence with what remains.' },
  { slug: 'on-sacred-geometry', title: 'On Sacred Geometry', line: 'Form as language. Structure as meaning.' },
  { slug: 'the-frequency-of-becoming', title: 'The Frequency of Becoming', line: 'Movement through states of being.' },
  { slug: 'the-law-of-mirrors', title: 'The Law of Mirrors', line: 'Reflection as truth.' },
  { slug: 'houston-transmission-2024', title: 'Houston Transmission', line: 'Live recording. November 2024.' },
];

// Featured archive piece
const featuredPiece = {
  slug: 'the-architects-blueprint',
  title: 'The Architect\'s Blueprint',
  excerpt: 'There is a structure beneath all things. Not imposed, but discovered. The architect does not create the laws of form—only reveals them, traces them, makes them visible to others.',
};

// Shop items - no categories
const shopItems = [
  { id: 1, name: 'The Ankh Pendant', price: '$89' },
  { id: 2, name: 'Papyrus Journal', price: '$45' },
  { id: 3, name: 'Sacred Incense Set', price: '$34' },
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
      {/* 1. Hero Section */}
      <HeroSection />
      
      {/* 2. Recent Work */}
      <SectionContainer className="py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-cinzel text-2xl md:text-3xl text-gold-gradient text-center mb-12">
            Recent Work
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentWork.map((item) => (
              <Link 
                key={item.slug}
                to={`/work/${item.slug}`}
                className="group p-6 border border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-300"
              >
                <h3 className="font-cinzel text-lg text-foreground group-hover:text-gold-gradient transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="font-cormorant text-muted-foreground text-sm">
                  {item.line}
                </p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="font-cinzel text-sm tracking-widest px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              <Link to="/work">
                View All
              </Link>
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* 3. From the Archive */}
      <SectionContainer className="py-20 border-y border-border/50">
        <div className="max-w-3xl mx-auto">
          <Link 
            to={`/work/${featuredPiece.slug}`}
            className="group block text-center"
          >
            <span className="font-cinzel text-xs tracking-widest text-primary/60 uppercase">
              From the Archive
            </span>
            <h2 className="font-cinzel text-2xl md:text-3xl text-foreground group-hover:text-gold-gradient transition-colors mt-4 mb-6">
              {featuredPiece.title}
            </h2>
            <p className="font-cormorant text-lg text-muted-foreground italic leading-relaxed mb-6">
              "{featuredPiece.excerpt}"
            </p>
            <span className="font-cinzel text-sm tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
              Continue Reading →
            </span>
          </Link>
        </div>
      </SectionContainer>

      {/* 4. Available Now (Shop) */}
      <SectionContainer className="py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cinzel text-2xl md:text-3xl text-gold-gradient text-center mb-12">
            Available Now
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {shopItems.map((item) => (
              <Link 
                key={item.id}
                to="/shop"
                className="group"
              >
                <div className="border border-border hover:border-primary/50 bg-card/30 transition-all duration-300 overflow-hidden">
                  <PlaceholderImage 
                    aspectRatio="square" 
                    label=""
                    symbol="☥"
                  />
                  <div className="p-4">
                    <h3 className="font-cinzel text-sm text-foreground group-hover:text-gold-gradient transition-colors mb-1">
                      {item.name}
                    </h3>
                    <span className="font-cinzel text-lg text-primary">
                      {item.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="font-cinzel text-sm tracking-widest px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              <Link to="/shop">
                Browse Shop
              </Link>
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* 5. Stay Close (Newsletter) */}
      <SectionContainer className="py-20 border-y border-border/50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-cinzel text-2xl md:text-3xl text-gold-gradient mb-4">
            Stay Close
          </h2>
          <p className="font-cormorant text-lg text-muted-foreground mb-8">
            Periodic updates and new work.
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

      {/* 6. Reach Out */}
      <SectionContainer className="py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-cormorant text-xl text-muted-foreground mb-6">
            For inquiries, collaborations, or anything else.
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
