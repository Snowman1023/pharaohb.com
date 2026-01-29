import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Link } from 'react-router-dom';

// Posts without category labels
const posts = [
  {
    slug: 'awakening-the-inner-pharaoh',
    title: 'Awakening the Inner Pharaoh',
    excerpt: 'A journey into the sacred teachings of ancient wisdom and how they apply to modern consciousness.',
    date: '2024-01-15',
  },
  {
    slug: 'the-frequency-of-1111',
    title: 'The Frequency of 1111',
    excerpt: 'Understanding the numerical significance and spiritual vibration of the master number.',
    date: '2024-01-10',
  },
  {
    slug: 'echoes-from-the-void',
    title: 'Echoes from the Void',
    excerpt: 'Exploring the space between thoughts where true wisdom resides and creation begins.',
    date: '2024-01-05',
  },
  {
    slug: 'sacred-geometry-in-daily-life',
    title: 'Sacred Geometry in Daily Life',
    excerpt: 'Practical applications of sacred geometric principles for harmony and balance.',
    date: '2024-01-01',
  },
];

const Notes = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Notes"
        subtitle="Updates and other writings."
        symbol="𓏏"
      />
      
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          {/* Featured Post */}
          <div className="mb-16">
            <Link 
              to={`/notes/${posts[0].slug}`}
              className="group block p-8 border border-border hover:border-primary/50 bg-card/50 transition-all duration-300"
            >
              <span className="font-cormorant text-sm text-muted-foreground/60">
                {new Date(posts[0].date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <h2 className="font-cinzel text-2xl md:text-3xl text-foreground group-hover:text-gold-gradient mt-3 mb-4 transition-colors">
                {posts[0].title}
              </h2>
              <p className="font-cormorant text-lg text-muted-foreground">
                {posts[0].excerpt}
              </p>
            </Link>
          </div>

          {/* Post Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                to={`/notes/${post.slug}`}
                className="group p-6 border border-border hover:border-primary/50 bg-card/50 transition-all duration-300"
              >
                <span className="font-cormorant text-sm text-muted-foreground/60">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <h3 className="font-cinzel text-lg text-foreground group-hover:text-gold-gradient mt-2 mb-3 transition-colors">
                  {post.title}
                </h3>
                <p className="font-cormorant text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>

          {/* More coming */}
          <div className="mt-12 text-center">
            <p className="font-cormorant text-muted-foreground italic">
              More to come.
            </p>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default Notes;
