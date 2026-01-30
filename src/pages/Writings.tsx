import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Link } from 'react-router-dom';

// Mock blog posts
const posts = [
  {
    slug: 'on-the-nature-of-echoes',
    title: 'On the Nature of Echoes',
    excerpt: 'The echo is not mere repetition. It is the original sound transformed by every surface it has touched, carrying with it the imprint of space itself.',
    date: '2024-01-20',
  },
  {
    slug: 'architecture-and-meaning',
    title: 'Architecture and Meaning',
    excerpt: 'Structure precedes content. Before the words, there is the container. Before the thought, there is the form that will hold it.',
    date: '2024-01-15',
  },
  {
    slug: 'the-practice-of-reflection',
    title: 'The Practice of Reflection',
    excerpt: 'To reflect is not to passively receive. It is an active engagement with what appears, a conscious participation in the act of seeing.',
    date: '2024-01-10',
  },
  {
    slug: 'notes-on-sacred-geometry',
    title: 'Notes on Sacred Geometry',
    excerpt: 'The circle contains everything. The square grounds it. The triangle directs it. These are not symbols but structures of consciousness itself.',
    date: '2024-01-05',
  },
  {
    slug: 'silence-as-foundation',
    title: 'Silence as Foundation',
    excerpt: 'Sound requires silence to exist. Thought requires stillness. Creation requires the void. What we build stands upon what we leave empty.',
    date: '2024-01-01',
  },
  {
    slug: 'the-law-of-correspondence',
    title: 'The Law of Correspondence',
    excerpt: 'As above, so below. As within, so without. This is not mysticism but observation. The patterns repeat across every scale.',
    date: '2023-12-28',
  },
];

const Writings = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Writings"
        subtitle="Essays, reflections, and ongoing notes."
        symbol="𓏏"
      />

      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          {/* Article List */}
          <div className="space-y-0">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                to={`/writings/${post.slug}`}
                className="group block py-8 border-b border-border/50 hover:bg-muted/5 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <h2 className="font-cinzel text-xl text-foreground group-hover:text-gold-gradient transition-colors">
                    {post.title}
                  </h2>
                  <time className="font-cormorant text-sm text-muted-foreground shrink-0">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                </div>
                <p className="font-cormorant text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>

          {/* Archive note */}
          <div className="mt-12 text-center">
            <p className="font-cormorant text-muted-foreground italic">
              Archive continues.
            </p>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default Writings;
