import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { writings } from '@/data/writings';

const Writings = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Writings"
        subtitle="Transmissions from the threshold"
        orientationText="Reflections offered as companions, not conclusions."
      />

      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-cormorant text-xl text-muted-foreground">
            Essays, reflections, and letters from the edge of becoming. 
            Words offered as companions for your journey.
          </p>
        </div>

        {/* Writings list */}
        <div className="max-w-3xl mx-auto divide-y divide-border">
          {writings.map((writing) => (
            <Link
              key={writing.slug}
              to={`/writings/${writing.slug}`}
              className="group block py-6 sm:py-8 first:pt-0 last:pb-0 min-h-[44px]"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-cinzel text-xl text-foreground group-hover:text-gold-gradient transition-colors mb-2">
                    {writing.title}
                  </h3>
                  <p className="font-cormorant text-muted-foreground leading-relaxed line-clamp-2">
                    {writing.excerpt}
                  </p>
                </div>
                <time className="font-cormorant text-sm text-primary/70 italic md:text-right whitespace-nowrap">
                  {writing.date}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default Writings;
