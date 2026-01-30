export interface Transmission {
  slug: string;
  title: string;
  intention: string;
  thumbnail: string;
  youtubeUrl: string;
  type: 'spoken' | 'audio' | 'reading' | 'frequency';
}

export const transmissions: Transmission[] = [
  {
    slug: 'on-the-threshold',
    title: 'On the Threshold',
    intention: 'A spoken meditation on the liminal space between knowing and becoming.',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    youtubeUrl: 'https://youtube.com',
    type: 'spoken'
  },
  {
    slug: 'frequency-432',
    title: 'Frequency 432',
    intention: 'Harmonic resonance for deep listening and cellular alignment.',
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80',
    youtubeUrl: 'https://youtube.com',
    type: 'frequency'
  },
  {
    slug: 'letters-to-the-unborn',
    title: 'Letters to the Unborn',
    intention: 'A reading from the forthcoming collection.',
    thumbnail: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80',
    youtubeUrl: 'https://youtube.com',
    type: 'reading'
  },
  {
    slug: 'the-architecture-of-silence',
    title: 'The Architecture of Silence',
    intention: 'Reflections on the structure that holds all sound.',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    youtubeUrl: 'https://youtube.com',
    type: 'spoken'
  },
  {
    slug: 'temple-frequencies-vol-1',
    title: 'Temple Frequencies Vol. I',
    intention: 'Sonic architecture for inner sanctuary.',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    youtubeUrl: 'https://youtube.com',
    type: 'frequency'
  },
  {
    slug: 'becoming-without-arriving',
    title: 'Becoming Without Arriving',
    intention: 'A voice essay on the eternal unfolding.',
    thumbnail: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&q=80',
    youtubeUrl: 'https://youtube.com',
    type: 'audio'
  }
];
