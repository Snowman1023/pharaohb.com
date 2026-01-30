import { PageLayout } from '@/components/layout/PageLayout';
import { HeroSection } from '@/components/HeroSection';
import { RecentWorksSection } from '@/components/home/RecentWorksSection';
import { AvailableNowSection } from '@/components/home/AvailableNowSection';
import { ExploreTilesSection } from '@/components/home/ExploreTilesSection';

const Home = () => {
  return (
    <PageLayout>
      {/* Hero Section - kept exactly as-is */}
      <HeroSection />
      
      {/* Recent Works Section */}
      <RecentWorksSection />
      
      {/* Available Now Section */}
      <AvailableNowSection />
      
      {/* Explore Tiles Section */}
      <ExploreTilesSection />
    </PageLayout>
  );
};

export default Home;
