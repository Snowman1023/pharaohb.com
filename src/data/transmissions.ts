// Transmissions Data for PharaohB.com
// Last updated: 2026-02-05

export interface Transmission {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  href: string;
  duration: string;
  views?: number;
  category: 'frequency' | 'audiobook' | 'spoken-word' | 'teaching';
  featured?: boolean;
}

export interface Short {
  id: string;
  title: string;
  thumbnail: string;
  href: string;
}

// ═══════════════════════════════════════════════════════════════
// LONG-FORM TRANSMISSIONS (16:9)
// ═══════════════════════════════════════════════════════════════

export const transmissions: Transmission[] = [
  {
    id: 'HGszmeu4CBg',
    title: 'Raise Your Vibration 999 Hz | Align with The Universe',
    description: 'The 999 Hz abundance frequency for spiritual alignment and inner peace.',
    thumbnail: 'https://i.ytimg.com/vi/HGszmeu4CBg/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=HGszmeu4CBg',
    duration: '11:11:45',
    views: 562,
    category: 'frequency',
    featured: true,
  },
  {
    id: '8HbGjiSI0Xs',
    title: 'Complete Chakra Healing | Return to Natural Balance',
    description: '8+ hours of frequencies moving through the complete chakra spectrum.',
    thumbnail: 'https://i.ytimg.com/vi/8HbGjiSI0Xs/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=8HbGjiSI0Xs',
    duration: '8:18:14',
    views: 359,
    category: 'frequency',
    featured: true,
  },
  {
    id: 'Nd_9Nuv39Zw',
    title: "The Wealthy Never Skip This — Here's Why",
    description: 'A careful, deliberate reading of The Master Key System.',
    thumbnail: 'https://i.ytimg.com/vi/Nd_9Nuv39Zw/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=Nd_9Nuv39Zw',
    duration: '5:21:16',
    views: 315,
    category: 'audiobook',
    featured: true,
  },
  // ═══════════════════════════════════════════════════════════════
  // ADD YOUR REMAINING VIDEOS HERE
  // Format:
  // {
  //   id: 'VIDEO_ID',
  //   title: 'Video Title',
  //   description: 'Description for SEO',
  //   thumbnail: 'https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg',
  //   href: 'https://www.youtube.com/watch?v=VIDEO_ID',
  //   duration: 'HH:MM:SS',
  //   views: 123,
  //   category: 'frequency' | 'audiobook' | 'spoken-word' | 'teaching',
  // },
  // ═══════════════════════════════════════════════════════════════
];

// ═══════════════════════════════════════════════════════════════
// SHORTS (9:16 vertical, < 60 seconds)
// ═══════════════════════════════════════════════════════════════

export const shorts: Short[] = [
  // ADD YOUR SHORTS HERE
  // Format:
  // {
  //   id: 'SHORT_ID',
  //   title: 'Short Title',
  //   thumbnail: 'https://i.ytimg.com/vi/SHORT_ID/maxresdefault.jpg',
  //   href: 'https://www.youtube.com/shorts/SHORT_ID',
  // },
];

// ═══════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════

export const getTransmissionsByCategory = (category: string): Transmission[] => {
  if (category === 'all') return transmissions;
  return transmissions.filter((t) => t.category === category);
};

export const getFeaturedTransmissions = (): Transmission[] => {
  return transmissions.filter((t) => t.featured);
};

// ═══════════════════════════════════════════════════════════════
// PAGE CONTENT
// ═══════════════════════════════════════════════════════════════

export const transmissionsPageContent = {
  title: 'Transmissions',
  subtitle: 'Audio & Video',
  description: 'Healing frequencies, affirmations, spoken word, and teachings for the soul.',
  symbol: '𓂀',
};

// ═══════════════════════════════════════════════════════════════
// CATEGORIES
// ═══════════════════════════════════════════════════════════════

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'frequency', label: 'Frequencies' },
  { id: 'audiobook', label: 'Audiobooks' },
  { id: 'spoken-word', label: 'Spoken Word' },
  { id: 'teaching', label: 'Teachings' },
] as const;

export type CategoryId = typeof categories[number]['id'];
