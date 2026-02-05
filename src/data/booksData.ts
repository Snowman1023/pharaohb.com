// Books Data for PharaohB.com
// Last updated: 2026-02-05

export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  coverImage: string;
  price: number;
  format: 'ebook' | 'paperback' | 'hardcover' | 'audiobook';
  purchaseLink?: string;
  featured?: boolean;
}

// ═══════════════════════════════════════════════════════════════
// BOOKS
// ═══════════════════════════════════════════════════════════════

export const books: Book[] = [
  {
    id: 'echoes-of-becoming',
    title: 'Echoes of Becoming',
    subtitle: 'A transformative exploration of identity and purpose',
    description: 'A transformative exploration weaving ancient wisdom with modern consciousness. This work guides you through the architecture of self-discovery and the patterns that shape who you become.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    price: 34.99,
    format: 'paperback',
    purchaseLink: '',
    featured: true,
  },
  {
    id: 'cosmic-alignment',
    title: 'Cosmic Alignment',
    subtitle: 'Print Edition',
    description: 'Exploring consciousness, healing, and the architecture of self. A limited print edition for those who seek the physical weight of wisdom.',
    coverImage: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&q=80',
    price: 180.00,
    format: 'hardcover',
    purchaseLink: '',
    featured: true,
  },
  {
    id: 'sacred-geometries',
    title: 'Sacred Geometries',
    description: 'An illuminated exploration of the patterns underlying creation itself. The shapes that repeat across nature, consciousness, and the cosmos.',
    coverImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    price: 44.99,
    format: 'paperback',
    purchaseLink: '',
    featured: true,
  },
];

// ═══════════════════════════════════════════════════════════════
// PAGE CONTENT
// ═══════════════════════════════════════════════════════════════

export const booksPageContent = {
  title: 'The Canon',
  subtitle: 'The Written Word',
  description: 'Published works exploring consciousness, healing, and the architecture of self.',
  symbol: '𓂀',
};

// ═══════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════

export const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};

export const getFeaturedBooks = (): Book[] => {
  return books.filter(book => book.featured);
};
