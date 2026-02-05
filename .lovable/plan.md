

# Plan: Add Spotify Albums & YouTube Videos with SEO Content

## Overview

This plan will populate your Music page with real Spotify albums and add all your YouTube videos to the Transmissions page, complete with proper descriptions and categorization for SEO.

---

## What You Provided

### Spotify Albums (5 unique)
| Album ID | Will need title/description |
|----------|---------------------------|
| `1gVW4727OxzEj6EQ7wQBSi` | Yes |
| `7r3I3KZnSZPyjci4zxJAZR` | Yes |
| `799xzarOcV5RSWk3LCVI8C` | Yes |
| `3184qyYgGnm8yBs6asYF5d` | Yes |
| `0G8WL3Q4cIEwzNgQl5Jw2f` | Yes |

### YouTube Videos (24+ unique videos)
These will be categorized based on content type:
- **Audiobooks**: The Master Key System, Think and Grow Rich, The Kybalion, etc.
- **Frequencies**: 432 Hz, 528 Hz, 999 Hz healing frequencies
- **Teachings**: Wisdom teachings and spoken word pieces

---

## Implementation Steps

### Step 1: Update Albums Data (Music Page)

Replace the placeholder albums in `src/data/albums.ts` with your real Spotify albums:

```text
Album 1: ID 1gVW4727OxzEj6EQ7wQBSi
Album 2: ID 7r3I3KZnSZPyjci4zxJAZR  
Album 3: ID 799xzarOcV5RSWk3LCVI8C
Album 4: ID 3184qyYgGnm8yBs6asYF5d
Album 5: ID 0G8WL3Q4cIEwzNgQl5Jw2f
```

Each album will include:
- Spotify embed ID for playback
- YouTube video ID where available (for dual-player option)
- Placeholder title/description (you can update later with exact names)

### Step 2: Add All YouTube Videos to Transmissions

Add all 24+ videos to `src/data/transmissions.ts` with:
- Auto-generated thumbnails using YouTube's image URL format
- Categorization (frequency/audiobook/spoken-word/teaching)
- SEO-friendly descriptions
- Placeholder durations (can be updated)

### Step 3: Add SEO Fields (Optional Enhancement)

Add to Album and Transmission interfaces:
- `longDescription`: Extended description for detail pages
- `keywords`: Array of SEO keywords
- `metaTitle` / `metaDescription`: For page meta tags

---

## Technical Details

### Albums Data Structure Update

```typescript
// src/data/albums.ts
export const albums: Album[] = [
  {
    slug: 'album-1',
    title: 'Album Title Here',
    description: 'Description for SEO...',
    image: 'https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg',
    tracks: ['Track 1', 'Track 2'],
    year: '2024',
    spotifyEmbedId: '1gVW4727OxzEj6EQ7wQBSi',
    youtubeVideoId: 'UBGAjWD1WdI', // Optional
  },
  // ... more albums
];
```

### Transmissions Data Structure

```typescript
// src/data/transmissions.ts - Adding your videos
{
  id: 'UBGAjWD1WdI',
  title: 'Video Title',
  description: 'SEO description...',
  thumbnail: 'https://i.ytimg.com/vi/UBGAjWD1WdI/maxresdefault.jpg',
  href: 'https://www.youtube.com/watch?v=UBGAjWD1WdI',
  duration: '1:00:00',
  category: 'audiobook', // or 'frequency', 'teaching', 'spoken-word'
  featured: true,
},
```

---

## Video IDs to Add

| Video ID | Likely Category | Notes |
|----------|----------------|-------|
| `UBGAjWD1WdI` | audiobook/frequency | |
| `Zrfoe0cz5FQ` | frequency | |
| `mcH4iDuTd6c` | audiobook | |
| `Nd_9Nuv39Zw` | audiobook | Already exists (Master Key System) |
| `6-yEttH5hiA` | frequency | |
| `0lTnOJfD33M` | teaching | |
| `XGq0-MGq2O0` | frequency | |
| `I-xKF7PyoVM` | audiobook | |
| `sHwBFVEq33c` | frequency | |
| `HE806qtLYNE` | teaching | |
| `npiLiP3pVBM` | frequency | |
| `4wBd6HZzYzg` | audiobook | |
| `ejbByodADwA` | spoken-word | |
| `ZFjiDQ3fG6M` | frequency | |
| `-ySQ19J3ewo` | teaching | |
| `R_90k9LPywQ` | audiobook | |
| `msA-q_PwIz8` | frequency | |
| `vff0ny5Dfxs` | teaching | |
| `EAU5cD0Sh_4` | frequency | |
| `w8FbD3EMkiY` | audiobook | |
| `MXtf36KfeqM` | teaching | |
| `8qCJMoRaAbg` | frequency | |
| `-KVdYmfVoRg` | audiobook | |
| `m7BdjZ4vHBs` | teaching | |
| `CZC6VNTc1sY` | frequency | |
| `HOfjZTY0Q4s` | teaching | |

---

## What You'll Need to Provide Later

After I add these entries with placeholder content:

1. **Album Names**: The actual titles for each Spotify album
2. **Video Categories**: Confirm if my category guesses are correct
3. **Descriptions**: You can edit the SEO descriptions in the data files anytime
4. **Durations**: Exact video lengths (optional - can stay as placeholders)

---

## Files to be Modified

1. `src/data/albums.ts` - Replace placeholder albums with real Spotify data
2. `src/data/transmissions.ts` - Add all YouTube videos with categories
3. `src/data/musicData.ts` - Update streaming platform links

---

## Result

After implementation:
- **Music Page**: Will show 5 real Spotify albums with working embedded players
- **Transmissions Page**: Will display 25+ videos organized by category (Frequencies, Audiobooks, Spoken Word, Teachings)
- **SEO**: Each entry will have descriptions that help with search visibility

