export interface Album {
  slug: string;
  title: string;
  description: string;
  image: string;
  tracks: string[];
  year: string;
  spotifyEmbedId?: string;
  youtubeVideoId?: string;
}

export const albums: Album[] = [
  {
    slug: 'frequencies-of-the-eternal',
    title: 'Frequencies of the Eternal',
    description: 'A sonic journey through the harmonic principles underlying all creation. Each track is calibrated to resonate with the fundamental frequencies of transformation and awakening.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
    tracks: [
      '432 Hz - The Fundamental',
      'Spiral Ascension',
      'Temple of Frequencies',
      'Golden Mean',
      'Eternal Return',
      'Harmonic Convergence',
      'The Infinite Octave'
    ],
    year: '2024',
    spotifyEmbedId: '1gVW4727OxzEj6EQ7wQBSi',
    youtubeVideoId: 'UBGAjWD1WdI',
  },
  {
    slug: 'temple-meditations-vol-i',
    title: 'Temple Meditations Vol. I',
    description: 'Ambient soundscapes designed for deep meditation and inner exploration. Recorded in sacred spaces with intention and reverence.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    tracks: [
      'Dawn at the Threshold',
      'Inner Sanctum',
      'Breathing Gold',
      'The Still Point',
      'Descent and Return',
      'Midnight Prayers'
    ],
    year: '2023',
    spotifyEmbedId: '7r3I3KZnSZPyjci4zxJAZR',
    youtubeVideoId: 'Zrfoe0cz5FQ',
  },
  {
    slug: 'the-obsidian-sessions',
    title: 'The Obsidian Sessions',
    description: 'Dark, contemplative compositions exploring the shadow realms of consciousness. Music for the night journey of the soul.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    tracks: [
      'Obsidian Gate',
      'Shadow Work',
      'The Dark Mirror',
      'Underworld Transit',
      'Volcanic Origins',
      'Emergence',
      'Black Gold'
    ],
    year: '2023',
    spotifyEmbedId: '799xzarOcV5RSWk3LCVI8C',
    youtubeVideoId: 'mcH4iDuTd6c',
  },
  {
    slug: 'golden-hour-transmissions',
    title: 'Golden Hour Transmissions',
    description: 'Radiant, uplifting frequencies captured during the liminal moments of dawn and dusk. Music that carries the quality of golden light.',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80',
    tracks: [
      'First Light',
      'Solar Plexus Activation',
      'The Golden Thread',
      'Amber Frequencies',
      'Sunset Dissolution',
      'Between Day and Night',
      'The Glow Within',
      'Aureate Dreams'
    ],
    year: '2024',
    spotifyEmbedId: '3184qyYgGnm8yBs6asYF5d',
    youtubeVideoId: '6-yEttH5hiA',
  },
  {
    slug: 'sacred-geometry-soundscapes',
    title: 'Sacred Geometry Soundscapes',
    description: 'Sound patterns aligned with the mathematical harmonies found in nature. Frequencies that mirror the golden ratio and Fibonacci sequences.',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&q=80',
    tracks: [
      'Phi Sequence',
      'Metatron\'s Cube',
      'Flower of Life',
      'Vesica Piscis',
      'Seed of Creation',
      'Infinite Spiral'
    ],
    year: '2024',
    spotifyEmbedId: '0G8WL3Q4cIEwzNgQl5Jw2f',
    youtubeVideoId: 'XGq0-MGq2O0',
  }
];

export const getAlbumBySlug = (slug: string): Album | undefined => {
  return albums.find(album => album.slug === slug);
};
