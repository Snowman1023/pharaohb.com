import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Link } from 'react-router-dom';

// PLACEHOLDER: Replace with actual blog posts data
const placeholderPosts = [
  {
    slug: 'awakening-the-inner-pharaoh',
    title: 'Awakening the Inner Pharaoh',
    excerpt: 'A journey into the sacred teachings of ancient wisdom and how they apply to modern consciousness...',
    date: '2024-01-15',
    category: 'Teachings',
  },
  {
    slug: 'the-frequency-of-1111',
    title: 'The Frequency of 1111',
    excerpt: 'Understanding the numerical significance and spiritual vibration of the master number 1111...',
    date: '2024-01-10',
    category: 'Numerology',
  },
  {
    slug: 'echoes-from-the-void',
    title: 'Echoes from the Void',
    excerpt: 'Exploring the space between thoughts where true wisdom resides and creation begins...',
    date: '2024-01-05',
    category: 'Philosophy',
  },
  {
    slug: 'sacred-geometry-in-daily-life',
    title: 'Sacred Geometry in Daily Life',
    excerpt: 'Practical applications of sacred geometric principles for harmony and balance...',
    date: '2024-01-01',
    category: 'Practice',
  },
];

const News = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="News & Transmissions"
        subtitle="Updates, teachings, and revelations from the eternal now"
        symbol="𓏏"
      />
      
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          {/* Featured Post */}
          <div className="mb-16">
            <Link 
              to={`/news/${placeholderPosts[0].slug}`}
              className="group block p-8 border border-border hover:border-primary/50 bg-card/50 transition-all duration-300"
            >
              <span className="font-cinzel text-xs tracking-widest text-primary/60 uppercase">
                Featured • {placeholderPosts[0].category}
              </span>
              <h2 className="font-cinzel text-2xl md:text-3xl text-foreground group-hover:text-gold-gradient mt-3 mb-4 transition-colors">
                {placeholderPosts[0].title}
              </h2>
              <p className="font-cormorant text-lg text-muted-foreground mb-4">
                {placeholderPosts[0].excerpt}
              </p>
              <span className="font-cormorant text-sm text-muted-foreground italic">
                {new Date(placeholderPosts[0].date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </Link>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {placeholderPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                to={`/news/${post.slug}`}
                className="group p-6 border border-border hover:border-primary/50 bg-card/50 transition-all duration-300"
              >
                <span className="font-cinzel text-xs tracking-widest text-primary/60 uppercase">
                  {post.category}
                </span>
                <h3 className="font-cinzel text-lg text-foreground group-hover:text-gold-gradient mt-2 mb-3 transition-colors">
                  {post.title}
                </h3>
                <p className="font-cormorant text-muted-foreground mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="font-cormorant text-sm text-muted-foreground italic">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </Link>
            ))}
          </div>

          {/* Placeholder for pagination */}
          <div className="mt-12 text-center">
            <p className="font-cormorant text-muted-foreground italic">
              {/* PLACEHOLDER: Add pagination when more posts exist */}
              More transmissions coming soon...
            </p>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default News;
