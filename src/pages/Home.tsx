import { PageLayout } from '@/components/layout/PageLayout';
import { HeroSection } from '@/components/HeroSection';
import { TheTransmissionSection } from '@/components/home/TheTransmissionSection';
import { RecentWorksSection } from '@/components/home/RecentWorksSection';
import { MusicSection } from '@/components/home/MusicSection';
import { AvailableNowSection } from '@/components/home/AvailableNowSection';
import { ArtifactsSection } from '@/components/home/ArtifactsSection';
import { ExploreTilesSection } from '@/components/home/ExploreTilesSection';

const Home = () => {
  return (
    <PageLayout>
      {/* Hero Section - kept exactly as-is */}
      <HeroSection />
      
      {/* The Transmission Section */}
      <TheTransmissionSection />
      
      {/* Recent Works Section */}
      <RecentWorksSection />
      {/* Music Section */}
      <MusicSection />
      
      {/* Available Now Section */}
      <AvailableNowSection />
      
      {/* Artifacts Section - Poems with abstract imagery */}
      <ArtifactsSection />
      
      {/* Explore Tiles Section - moved below Artifacts */}
      <ExploreTilesSection />
    </PageLayout>
  );
};

export default Home;
