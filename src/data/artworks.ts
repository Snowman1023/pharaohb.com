export interface Artwork {
  slug: string;
  title: string;
  description: string;
  image: string;
  formats: {
    type: string;
    price: string;
  }[];
}

export const artworks: Artwork[] = [
  {
    slug: 'convergence-i',
    title: 'Convergence I',
    description: 'A meditation on the point where all paths meet. Gold and shadow dance in eternal balance.',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339bbe3c6c?w=800&q=80',
    formats: [
      { type: 'Print', price: '$120' },
      { type: 'Canvas', price: '$280' },
      { type: 'Framed', price: '$380' }
    ]
  },
  {
    slug: 'golden-ratio',
    title: 'Golden Ratio',
    description: 'The divine proportion made visible. Sacred mathematics rendered in light and form.',
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80',
    formats: [
      { type: 'Print', price: '$150' },
      { type: 'Canvas', price: '$320' },
      { type: 'Framed', price: '$420' }
    ]
  },
  {
    slug: 'obsidian-dreams',
    title: 'Obsidian Dreams',
    description: 'From the volcanic depths of the unconscious, visions crystallize into form.',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80',
    formats: [
      { type: 'Print', price: '$140' },
      { type: 'Canvas', price: '$300' },
      { type: 'Framed', price: '$400' }
    ]
  },
  {
    slug: 'temple-gate',
    title: 'Temple Gate',
    description: 'The threshold between worlds. An invitation to cross into the sacred unknown.',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80',
    formats: [
      { type: 'Print', price: '$160' },
      { type: 'Canvas', price: '$340' },
      { type: 'Framed', price: '$450' }
    ]
  },
  {
    slug: 'cosmic-alignment',
    title: 'Cosmic Alignment',
    description: 'When celestial bodies converge, so too do the fragments of the soul.',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80',
    formats: [
      { type: 'Print', price: '$180' },
      { type: 'Canvas', price: '$380' },
      { type: 'Framed', price: '$500' }
    ]
  },
  {
    slug: 'the-threshold',
    title: 'The Threshold',
    description: 'Neither here nor there, but everywhere at once. The liminal space where transformation occurs.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    formats: [
      { type: 'Print', price: '$130' },
      { type: 'Canvas', price: '$290' },
      { type: 'Framed', price: '$390' }
    ]
  },
  {
    slug: 'fractal-memory',
    title: 'Fractal Memory',
    description: 'Patterns within patterns, memories within memories. The infinite nested in the finite.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    formats: [
      { type: 'Print', price: '$145' },
      { type: 'Canvas', price: '$310' },
      { type: 'Framed', price: '$410' }
    ]
  },
  {
    slug: 'ascension',
    title: 'Ascension',
    description: 'The upward spiral of consciousness. Rising through veils into luminous clarity.',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80',
    formats: [
      { type: 'Print', price: '$175' },
      { type: 'Canvas', price: '$370' },
      { type: 'Framed', price: '$480' }
    ]
  },
  {
    slug: 'void-reflection',
    title: 'Void Reflection',
    description: 'In the absence of everything, we find the presence of all that matters.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    formats: [
      { type: 'Print', price: '$155' },
      { type: 'Canvas', price: '$330' },
      { type: 'Framed', price: '$430' }
    ]
  },
  {
    slug: 'sacred-axis',
    title: 'Sacred Axis',
    description: 'The vertical line connecting earth to heaven, body to spirit, form to formless.',
    image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80',
    formats: [
      { type: 'Print', price: '$165' },
      { type: 'Canvas', price: '$350' },
      { type: 'Framed', price: '$460' }
    ]
  },
  {
    slug: 'eternal-spiral',
    title: 'Eternal Spiral',
    description: 'The path that never ends, always returning yet always progressing.',
    image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&q=80',
    formats: [
      { type: 'Print', price: '$140' },
      { type: 'Canvas', price: '$300' },
      { type: 'Framed', price: '$400' }
    ]
  },
  {
    slug: 'shadow-temple',
    title: 'Shadow Temple',
    description: 'Sacred architecture built from darkness and silence. A sanctuary for the soul.',
    image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=800&q=80',
    formats: [
      { type: 'Print', price: '$170' },
      { type: 'Canvas', price: '$360' },
      { type: 'Framed', price: '$470' }
    ]
  },
  {
    slug: 'aurora-nocturne',
    title: 'Aurora Nocturne',
    description: 'Night light dancing at the edge of the world. Celestial fire in frozen form.',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    formats: [
      { type: 'Print', price: '$185' },
      { type: 'Canvas', price: '$390' },
      { type: 'Framed', price: '$510' }
    ]
  },
  {
    slug: 'monolith',
    title: 'Monolith',
    description: 'Standing witness through ages. Silent keeper of ancient truths.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
    formats: [
      { type: 'Print', price: '$150' },
      { type: 'Canvas', price: '$320' },
      { type: 'Framed', price: '$420' }
    ]
  },
  {
    slug: 'golden-hour-geometry',
    title: 'Golden Hour Geometry',
    description: 'When light becomes liquid gold, all shapes reveal their sacred origin.',
    image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&q=80',
    formats: [
      { type: 'Print', price: '$160' },
      { type: 'Canvas', price: '$340' },
      { type: 'Framed', price: '$450' }
    ]
  },
  {
    slug: 'nebula-consciousness',
    title: 'Nebula Consciousness',
    description: 'Birth clouds of stars, birth clouds of thought. The cosmic and the cranial united.',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80',
    formats: [
      { type: 'Print', price: '$175' },
      { type: 'Canvas', price: '$370' },
      { type: 'Framed', price: '$480' }
    ]
  },
  {
    slug: 'architectural-silence',
    title: 'Architectural Silence',
    description: 'Space designed for the absence of noise. Form shaped by the need for stillness.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
    formats: [
      { type: 'Print', price: '$145' },
      { type: 'Canvas', price: '$310' },
      { type: 'Framed', price: '$410' }
    ]
  },
  {
    slug: 'primordial-waters',
    title: 'Primordial Waters',
    description: 'Before form, before light, before separation. The original unity.',
    image: 'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?w=800&q=80',
    formats: [
      { type: 'Print', price: '$155' },
      { type: 'Canvas', price: '$330' },
      { type: 'Framed', price: '$430' }
    ]
  },
  {
    slug: 'desert-oracle',
    title: 'Desert Oracle',
    description: 'Sand speaks in silence. The wasteland is not empty but waiting.',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
    formats: [
      { type: 'Print', price: '$165' },
      { type: 'Canvas', price: '$350' },
      { type: 'Framed', price: '$460' }
    ]
  },
  {
    slug: 'midnight-architecture',
    title: 'Midnight Architecture',
    description: 'Structures built when the world sleeps. Dreams made solid.',
    image: 'https://images.unsplash.com/photo-1470723710355-95304d8aece4?w=800&q=80',
    formats: [
      { type: 'Print', price: '$180' },
      { type: 'Canvas', price: '$380' },
      { type: 'Framed', price: '$500' }
    ]
  }
];

export const getArtworkBySlug = (slug: string): Artwork | undefined => {
  return artworks.find(artwork => artwork.slug === slug);
};
