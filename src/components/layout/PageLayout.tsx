import { ReactNode } from 'react';
import { GoldenTorus } from '@/components/GoldenTorus';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollProgress } from '@/hooks/useScrollProgress';

interface PageLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

export function PageLayout({ children, showFooter = true }: PageLayoutProps) {
  const scrollProgress = useScrollProgress();

  return (
    <div className="relative min-h-screen bg-background">
      {/* 3D Golden Torus Background - persistent across all pages */}
      <GoldenTorus scrollProgress={scrollProgress} />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>
      
      {/* Footer */}
      {showFooter && <Footer />}
    </div>
  );
}

export default PageLayout;
