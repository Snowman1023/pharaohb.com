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
  // FEATURED
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
    title: 'The Master Key System | Complete Audiobook',
    description: 'A careful, deliberate reading of The Master Key System by Charles F. Haanel.',
    thumbnail: 'https://i.ytimg.com/vi/Nd_9Nuv39Zw/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=Nd_9Nuv39Zw',
    duration: '5:21:16',
    views: 315,
    category: 'audiobook',
    featured: true,
  },

  // FREQUENCIES
  {
    id: 'UBGAjWD1WdI',
    title: '432 Hz Deep Healing Frequency | Cellular Regeneration',
    description: 'Pure 432 Hz tone for deep cellular healing and DNA repair meditation.',
    thumbnail: 'https://i.ytimg.com/vi/UBGAjWD1WdI/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=UBGAjWD1WdI',
    duration: '3:00:00',
    category: 'frequency',
  },
  {
    id: 'Zrfoe0cz5FQ',
    title: '528 Hz Miracle Tone | Love Frequency',
    description: 'The love frequency for transformation and miracles. 528 Hz Solfeggio.',
    thumbnail: 'https://i.ytimg.com/vi/Zrfoe0cz5FQ/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=Zrfoe0cz5FQ',
    duration: '2:00:00',
    category: 'frequency',
  },
  {
    id: '6-yEttH5hiA',
    title: '741 Hz Detox Frequency | Cleanse Negativity',
    description: 'Frequency for detoxification and cleansing negative energy from your field.',
    thumbnail: 'https://i.ytimg.com/vi/6-yEttH5hiA/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=6-yEttH5hiA',
    duration: '2:30:00',
    category: 'frequency',
  },
  {
    id: 'XGq0-MGq2O0',
    title: '963 Hz Crown Chakra Activation | Divine Connection',
    description: 'The frequency of the gods. 963 Hz for pineal gland activation and spiritual awakening.',
    thumbnail: 'https://i.ytimg.com/vi/XGq0-MGq2O0/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=XGq0-MGq2O0',
    duration: '3:00:00',
    category: 'frequency',
  },
  {
    id: 'sHwBFVEq33c',
    title: '396 Hz Liberation Frequency | Release Fear & Guilt',
    description: 'Solfeggio frequency for liberating guilt and fear. Ground into safety.',
    thumbnail: 'https://i.ytimg.com/vi/sHwBFVEq33c/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=sHwBFVEq33c',
    duration: '2:00:00',
    category: 'frequency',
  },
  {
    id: 'npiLiP3pVBM',
    title: '639 Hz Heart Chakra Frequency | Attract Love',
    description: 'Open the heart chakra and attract harmonious relationships with 639 Hz.',
    thumbnail: 'https://i.ytimg.com/vi/npiLiP3pVBM/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=npiLiP3pVBM',
    duration: '2:00:00',
    category: 'frequency',
  },
  {
    id: 'ZFjiDQ3fG6M',
    title: '852 Hz Third Eye Activation | Awakening Intuition',
    description: 'Activate your third eye and enhance intuition with 852 Hz frequency.',
    thumbnail: 'https://i.ytimg.com/vi/ZFjiDQ3fG6M/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=ZFjiDQ3fG6M',
    duration: '2:30:00',
    category: 'frequency',
  },
  {
    id: 'msA-q_PwIz8',
    title: '174 Hz Pain Relief Frequency | Physical Healing',
    description: 'The lowest Solfeggio frequency for physical healing and pain relief.',
    thumbnail: 'https://i.ytimg.com/vi/msA-q_PwIz8/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=msA-q_PwIz8',
    duration: '2:00:00',
    category: 'frequency',
  },
  {
    id: 'EAU5cD0Sh_4',
    title: '285 Hz Tissue Regeneration | Heal the Body',
    description: 'Frequency for tissue regeneration and cellular healing. Physical restoration.',
    thumbnail: 'https://i.ytimg.com/vi/EAU5cD0Sh_4/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=EAU5cD0Sh_4',
    duration: '2:00:00',
    category: 'frequency',
  },
  {
    id: '8qCJMoRaAbg',
    title: '417 Hz Remove Negative Energy | Facilitate Change',
    description: 'Clear negative energy and facilitate positive change with 417 Hz.',
    thumbnail: 'https://i.ytimg.com/vi/8qCJMoRaAbg/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=8qCJMoRaAbg',
    duration: '2:00:00',
    category: 'frequency',
  },
  {
    id: 'CZC6VNTc1sY',
    title: 'Full Solfeggio Scale | All 9 Frequencies',
    description: 'Complete journey through all 9 Solfeggio frequencies for total alignment.',
    thumbnail: 'https://i.ytimg.com/vi/CZC6VNTc1sY/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=CZC6VNTc1sY',
    duration: '4:00:00',
    category: 'frequency',
  },

  // AUDIOBOOKS
  {
    id: 'mcH4iDuTd6c',
    title: 'Think and Grow Rich | Complete Audiobook',
    description: 'Napoleon Hill\'s classic on the philosophy of achievement and success.',
    thumbnail: 'https://i.ytimg.com/vi/mcH4iDuTd6c/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=mcH4iDuTd6c',
    duration: '8:30:00',
    category: 'audiobook',
  },
  {
    id: 'I-xKF7PyoVM',
    title: 'The Kybalion | Complete Audiobook',
    description: 'The seven Hermetic principles explained. Ancient wisdom for the modern seeker.',
    thumbnail: 'https://i.ytimg.com/vi/I-xKF7PyoVM/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=I-xKF7PyoVM',
    duration: '3:45:00',
    category: 'audiobook',
  },
  {
    id: '4wBd6HZzYzg',
    title: 'As a Man Thinketh | Complete Audiobook',
    description: 'James Allen\'s meditation on the power of thought and character.',
    thumbnail: 'https://i.ytimg.com/vi/4wBd6HZzYzg/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=4wBd6HZzYzg',
    duration: '1:00:00',
    category: 'audiobook',
  },
  {
    id: 'R_90k9LPywQ',
    title: 'The Science of Getting Rich | Complete Audiobook',
    description: 'Wallace D. Wattles\' foundational text on prosperity consciousness.',
    thumbnail: 'https://i.ytimg.com/vi/R_90k9LPywQ/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=R_90k9LPywQ',
    duration: '2:30:00',
    category: 'audiobook',
  },
  {
    id: 'w8FbD3EMkiY',
    title: 'The Power of Your Subconscious Mind | Complete Audiobook',
    description: 'Joseph Murphy\'s guide to harnessing the power of your subconscious.',
    thumbnail: 'https://i.ytimg.com/vi/w8FbD3EMkiY/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=w8FbD3EMkiY',
    duration: '6:00:00',
    category: 'audiobook',
  },
  {
    id: '-KVdYmfVoRg',
    title: 'The Game of Life and How to Play It | Complete Audiobook',
    description: 'Florence Scovel Shinn\'s metaphysical classic on manifestation.',
    thumbnail: 'https://i.ytimg.com/vi/-KVdYmfVoRg/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=-KVdYmfVoRg',
    duration: '2:15:00',
    category: 'audiobook',
  },

  // TEACHINGS
  {
    id: '0lTnOJfD33M',
    title: 'The Law of Vibration Explained',
    description: 'Deep dive into the law of vibration and how to apply it in daily life.',
    thumbnail: 'https://i.ytimg.com/vi/0lTnOJfD33M/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=0lTnOJfD33M',
    duration: '45:00',
    category: 'teaching',
  },
  {
    id: 'HE806qtLYNE',
    title: 'Understanding Your Energy Field',
    description: 'How to sense, protect, and cultivate your personal energy field.',
    thumbnail: 'https://i.ytimg.com/vi/HE806qtLYNE/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=HE806qtLYNE',
    duration: '30:00',
    category: 'teaching',
  },
  {
    id: '-ySQ19J3ewo',
    title: 'The Art of Stillness | Meditation Teaching',
    description: 'A teaching on the practice of stillness and its transformative power.',
    thumbnail: 'https://i.ytimg.com/vi/-ySQ19J3ewo/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=-ySQ19J3ewo',
    duration: '25:00',
    category: 'teaching',
  },
  {
    id: 'vff0ny5Dfxs',
    title: 'Sacred Geometry in Daily Life',
    description: 'How to recognize and work with sacred geometry patterns around you.',
    thumbnail: 'https://i.ytimg.com/vi/vff0ny5Dfxs/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=vff0ny5Dfxs',
    duration: '35:00',
    category: 'teaching',
  },
  {
    id: 'MXtf36KfeqM',
    title: 'The Power of Affirmations',
    description: 'How to create and use affirmations for lasting transformation.',
    thumbnail: 'https://i.ytimg.com/vi/MXtf36KfeqM/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=MXtf36KfeqM',
    duration: '40:00',
    category: 'teaching',
  },
  {
    id: 'm7BdjZ4vHBs',
    title: 'Ancestral Healing Practices',
    description: 'Connecting with and healing through your ancestral lineage.',
    thumbnail: 'https://i.ytimg.com/vi/m7BdjZ4vHBs/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=m7BdjZ4vHBs',
    duration: '50:00',
    category: 'teaching',
  },
  {
    id: 'HOfjZTY0Q4s',
    title: 'The Observer Effect | Consciousness Teaching',
    description: 'Understanding how observation shapes reality and consciousness.',
    thumbnail: 'https://i.ytimg.com/vi/HOfjZTY0Q4s/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=HOfjZTY0Q4s',
    duration: '45:00',
    category: 'teaching',
  },

  // SPOKEN WORD
  {
    id: 'ejbByodADwA',
    title: 'I Am That I Am | Spoken Word',
    description: 'A powerful spoken word piece on divine identity and self-realization.',
    thumbnail: 'https://i.ytimg.com/vi/ejbByodADwA/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=ejbByodADwA',
    duration: '8:00',
    category: 'spoken-word',
  },
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
