import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="flex min-h-[60vh] items-center justify-center pt-24 pb-16">
        <div className="text-center px-4">
          {/* Decorative symbol */}
          <div className="text-4xl text-primary/50 mb-6">𓂀</div>
          
          <h1 className="font-cinzel text-5xl md:text-6xl text-gold-gradient mb-4">404</h1>
          <p className="font-cormorant text-xl md:text-2xl text-muted-foreground mb-8">
            This path leads nowhere... yet.
          </p>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-primary/30" />
            <span className="text-primary/50">◆</span>
            <div className="w-16 h-px bg-primary/30" />
          </div>
          
          <Link 
            to="/" 
            className="inline-block font-cinzel text-sm tracking-wider text-primary hover:text-primary/80 transition-colors border border-primary/50 px-8 py-3 min-h-[44px] hover:bg-primary/10"
          >
            Return to the Temple
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
