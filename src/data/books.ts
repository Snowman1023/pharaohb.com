export interface Book {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  excerpt: string;
  price: string;
  image: string;
}

export const books: Book[] = [
  {
    slug: 'echoes-of-becoming',
    title: 'Echoes of Becoming',
    subtitle: 'A Journey Through the Self',
    description: 'A transformative exploration of identity and purpose, weaving ancient wisdom with modern consciousness. This work serves as a compass for those navigating the labyrinth of self-discovery, offering insights that illuminate the path from who you were to who you are becoming.',
    excerpt: '"In the space between breaths, we find the architecture of our true selves. Each exhale releases the stories we were told to believe; each inhale draws in the truth we were born knowing. To become is not to transform into something new, but to remember what has always been inscribed upon the chambers of your heart."',
    price: '$34.99',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80'
  },
  {
    slug: 'the-architects-blueprint',
    title: "The Architect's Blueprint",
    subtitle: 'Building Sacred Spaces Within',
    description: 'A practical yet mystical guide to constructing the inner temple. Drawing from sacred geometry and timeless principles, this blueprint reveals how to design a life of intention, purpose, and spiritual alignment.',
    excerpt: '"We are all architects of invisible cathedrals. The materials we use—thought, intention, attention—are more permanent than stone. What you build within yourself echoes across generations, across dimensions. Build with the precision of the ancients, and your temple will stand eternal."',
    price: '$39.99',
    image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&q=80'
  },
  {
    slug: 'letters-from-the-threshold',
    title: 'Letters from the Threshold',
    subtitle: 'Messages for the Awakening Soul',
    description: 'A collection of intimate transmissions written at the edge of revelation. These letters speak directly to the soul in transition, offering comfort, challenge, and companionship for those standing at the precipice of transformation.',
    excerpt: '"Dear Threshold Walker, I write to you from the place where certainty dissolves and possibility ignites. You have stood here before, in other lives, other forms. The door before you is not new—only your readiness to open it. Step forward. The darkness you fear is merely the womb of your next becoming."',
    price: '$28.99',
    image: 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=800&q=80'
  },
  {
    slug: 'sacred-geometries',
    title: 'Sacred Geometries',
    subtitle: 'The Mathematics of the Divine',
    description: 'An illuminated exploration of the patterns underlying creation itself. From the spiral of galaxies to the structure of DNA, discover how mathematical perfection reveals the fingerprints of cosmic intelligence.',
    excerpt: '"The universe speaks in ratios and proportions. The golden spiral, the flower of life, the platonic solids—these are not mere shapes but doorways. When you learn to see the geometry in all things, you begin to read the language in which reality itself was written."',
    price: '$44.99',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80'
  }
];

export const getBookBySlug = (slug: string): Book | undefined => {
  return books.find(book => book.slug === slug);
};
