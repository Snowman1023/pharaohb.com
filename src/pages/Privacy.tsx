import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';

const Privacy = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Privacy Policy"
        subtitle="How we protect your sacred information"
      />
      
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert max-w-none font-cormorant text-lg">
            {/* PLACEHOLDER: Replace with actual privacy policy */}
            <p className="text-muted-foreground italic mb-8">
              Last updated: January 1, 2024
            </p>

            <h2 className="font-cinzel text-xl text-foreground mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-6">
              PLACEHOLDER: Describe what personal information is collected (email, name, etc.) 
              and how it's gathered (forms, cookies, analytics).
            </p>

            <h2 className="font-cinzel text-xl text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-6">
              PLACEHOLDER: Explain the purposes for which collected data is used 
              (newsletter, order processing, account management).
            </p>

            <h2 className="font-cinzel text-xl text-foreground mt-8 mb-4">3. Data Protection</h2>
            <p className="text-muted-foreground mb-6">
              PLACEHOLDER: Describe security measures taken to protect user data.
            </p>

            <h2 className="font-cinzel text-xl text-foreground mt-8 mb-4">4. Third-Party Services</h2>
            <p className="text-muted-foreground mb-6">
              PLACEHOLDER: List any third-party services that may have access to user data 
              (payment processors, email services, analytics).
            </p>

            <h2 className="font-cinzel text-xl text-foreground mt-8 mb-4">5. Your Rights</h2>
            <p className="text-muted-foreground mb-6">
              PLACEHOLDER: Explain user rights regarding their data 
              (access, deletion, opt-out options).
            </p>

            <h2 className="font-cinzel text-xl text-foreground mt-8 mb-4">6. Contact</h2>
            <p className="text-muted-foreground mb-6">
              PLACEHOLDER: Provide contact information for privacy-related inquiries.
            </p>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default Privacy;
