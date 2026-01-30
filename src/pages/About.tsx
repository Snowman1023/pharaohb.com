import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="About"
        subtitle="Writer. Architect. Mirror. Messenger."
        symbol="𓂀"
      />

      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          {/* Primary Image */}
          <div className="mb-16">
            <PlaceholderImage 
              aspectRatio="wide" 
              label=""
              symbol="𓂀"
              className="w-full"
            />
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Section 1: Who */}
            <section className="max-w-2xl">
              <h2 className="font-cinzel text-2xl text-gold-gradient mb-6">
                The Work and Its Author
              </h2>
              <p className="font-cormorant text-lg text-muted-foreground leading-relaxed mb-4">
                Pharaoh B. is a writer, visual artist, and composer whose work spans multiple forms and media. The body of work explores themes of consciousness, identity, sacred geometry, and the structures underlying human experience.
              </p>
              <p className="font-cormorant text-lg text-muted-foreground leading-relaxed">
                Based in Houston, Texas. Creating since 2018.
              </p>
            </section>

            {/* Section 2: What the work represents */}
            <section className="max-w-2xl">
              <h2 className="font-cinzel text-2xl text-gold-gradient mb-6">
                What the Work Represents
              </h2>
              <p className="font-cormorant text-lg text-muted-foreground leading-relaxed mb-4">
                The work is not instruction or doctrine. It is a body of exploration offered for those who find resonance in it. Each piece—whether written, visual, or sonic—stands as an independent creation while contributing to a larger, accumulating whole.
              </p>
              <p className="font-cormorant text-lg text-muted-foreground leading-relaxed">
                The themes recur and interweave: reflection, architecture, echo, form. These are not beliefs to be adopted but patterns to be observed.
              </p>
            </section>

            {/* Section 3: How to engage */}
            <section className="max-w-2xl">
              <h2 className="font-cinzel text-2xl text-gold-gradient mb-6">
                How to Engage
              </h2>
              <div className="space-y-4 font-cormorant text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Read</strong> — Begin with The Canon, a collection of written works ranging from short essays to full-length books.
                </p>
                <p>
                  <strong className="text-foreground">View</strong> — The Art section houses visual works exploring form, geometry, and symbolic expression.
                </p>
                <p>
                  <strong className="text-foreground">Listen</strong> — Music and audio compositions designed for contemplation and inner work.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="font-cinzel text-sm tracking-widest px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link to="/canon">
                  Explore The Canon
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="font-cinzel text-sm tracking-widest px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default About;
