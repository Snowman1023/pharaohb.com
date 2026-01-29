import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';

const Terms = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Terms of Service"
        subtitle="The covenant between us"
        symbol="𓆓"
      />
      
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert max-w-none font-cormorant text-lg">
            {/* PLACEHOLDER: Replace with actual terms of service */}
            <p className="text-muted-foreground italic mb-8">
              Last updated: January 1, 2024
            </p>

            <h2 className="font-cinzel text-xl text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-6">
              PLACEHOLDER: Statement about accepting terms by using the website/services.
            </p>

            <h2 className="font-cinzel text-xl text-foreground mt-8 mb-4">2. Use of Services</h2>
            <p className="text-muted-foreground mb-6">
              PLACEHOLDER: Describe permitted and prohibited uses of the website and services.
            </p>

            <h2 className="font-cinzel text-xl text-foreground mt-8 mb-4">3. Intellectual Property</h2>
            <p className="text-muted-foreground mb-6">
              PLACEHOLDER: Explain ownership of content, trademarks, and copyrights.
            </p>

            <h2 className="font-cinzel text-xl text-foreground mt-8 mb-4">4. User Accounts</h2>
            <p className="text-muted-foreground mb-6">
              PLACEHOLDER: Terms related to account creation, responsibilities, and termination.
            </p>

            <h2 className="font-cinzel text-xl text-foreground mt-8 mb-4">5. Purchases & Refunds</h2>
            <p className="text-muted-foreground mb-6">
              PLACEHOLDER: Terms for any products or services sold, including refund policy.
            </p>

            <h2 className="font-cinzel text-xl text-foreground mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">
              PLACEHOLDER: Standard limitation of liability clause.
            </p>

            <h2 className="font-cinzel text-xl text-foreground mt-8 mb-4">7. Changes to Terms</h2>
            <p className="text-muted-foreground mb-6">
              PLACEHOLDER: How users will be notified of changes to these terms.
            </p>

            <h2 className="font-cinzel text-xl text-foreground mt-8 mb-4">8. Contact</h2>
            <p className="text-muted-foreground mb-6">
              PLACEHOLDER: Provide contact information for terms-related inquiries.
            </p>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default Terms;
