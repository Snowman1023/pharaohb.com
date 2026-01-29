import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { CanonSection } from '@/components/CanonSection';
import { EchoverseSection } from '@/components/EchoverseSection';
import { ShopSection } from '@/components/ShopSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <CanonSection />
        <EchoverseSection />
        <ShopSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
