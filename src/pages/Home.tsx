import { PageLayout } from '@/components/layout/PageLayout';
import { HeroSection } from '@/components/HeroSection';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <PageLayout>
      {/* Hero Section - kept exactly as-is */}
      <HeroSection />
      
      {/* Brief intro section with links to other pages */}
      <SectionContainer>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cinzel text-3xl md:text-4xl text-gold-gradient mb-6">
            Begin Your Journey
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            {/* PLACEHOLDER: Home intro text */}
            Explore the realms of sacred wisdom, discover the Canon of teachings, 
            and find treasures for your spiritual path.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { to: '/about', title: 'The Messenger', symbol: '𓂀' },
              { to: '/canon', title: 'The Canon', symbol: '𓅓' },
              { to: '/echoverse', title: 'Echoverse', symbol: '𓆣' },
              { to: '/shop', title: 'Sacred Shop', symbol: '𓋾' },
            ].map((item) => (
              <Link 
                key={item.to} 
                to={item.to}
                className="group p-6 border border-border hover:border-primary/50 bg-card/50 transition-all duration-300"
              >
                <div className="text-4xl text-primary/40 group-hover:text-primary transition-colors mb-4">
                  {item.symbol}
                </div>
                <h3 className="font-cinzel text-lg text-foreground group-hover:text-gold-gradient transition-colors">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default Home;
