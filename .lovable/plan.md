

# Transmissions Page - YouTube Video Catalog

## Overview

Rebuilding the Transmissions page to display YouTube videos in a professional catalog format with:
- Category filter tabs (All, Frequencies, Audiobooks, Spoken Word, Teachings)
- Long-form video grid (16:9 thumbnails) with duration badges and play overlays
- Shorts section (9:16 vertical cards)
- Updated header with "Audio & Video" subtitle

---

## Current State

The existing Transmissions page shows 6 placeholder entries with:
- Stock Unsplash images
- Generic YouTube links
- `type` field with values: `spoken`, `audio`, `reading`, `frequency`
- Simple card layout linking externally

The data structure needs to be completely replaced with the new YouTube-focused format.

---

## Changes Required

### 1. Replace Data File

**File:** `src/data/transmissions.ts`

Replace entirely with new structure:
- **Transmission interface**: `id`, `title`, `description`, `thumbnail`, `href`, `duration`, `views`, `category`, `featured`
- **Short interface**: `id`, `title`, `thumbnail`, `href`
- **Categories**: `frequency`, `audiobook`, `spoken-word`, `teaching`
- **Helper functions**: `getTransmissionsByCategory()`, `getFeaturedTransmissions()`
- Initial data: 3 featured videos provided (999 Hz, Chakra Healing, Master Key System)

### 2. Create VideoCard Component

**New file:** `src/components/transmissions/VideoCard.tsx`

Features:
- 16:9 aspect ratio thumbnail
- Hover play button overlay with circular background
- Duration badge (bottom-right corner)
- Title and optional view count below
- External link to YouTube

### 3. Create ShortCard Component

**New file:** `src/components/transmissions/ShortCard.tsx`

Features:
- 9:16 vertical aspect ratio
- Centered play icon on hover
- Title below thumbnail
- External link to YouTube shorts

### 4. Rebuild Transmissions Page

**File:** `src/pages/Transmissions.tsx`

Complete rebuild with:
- Updated PageHeader ("Audio & Video" subtitle, new orientation text)
- Category filter buttons (styled like Shop page)
- Long-form video grid (3 columns desktop, 2 tablet, 1 mobile)
- Divider with brand symbol
- Shorts section with horizontal scroll or 5-column grid
- "View All Shorts on YouTube" external link

---

## Component Architecture

```text
Transmissions Page
├── PageHeader (title, subtitle, description)
├── SectionContainer
│   ├── Category Filter Tabs
│   │   └── Button per category (All, Frequencies, Audiobooks, etc.)
│   └── Video Grid
│       └── VideoCard (for each transmission)
├── Divider with brand symbol
└── Shorts Section
    ├── Section Header
    ├── Shorts Grid (horizontal)
    │   └── ShortCard (for each short)
    └── External YouTube Link
```

---

## File Changes Summary

| Action | File | Description |
|--------|------|-------------|
| Replace | `src/data/transmissions.ts` | New YouTube-focused data structure |
| Create | `src/components/transmissions/VideoCard.tsx` | 16:9 video card component |
| Create | `src/components/transmissions/ShortCard.tsx` | 9:16 short card component |
| Rewrite | `src/pages/Transmissions.tsx` | Full page rebuild with filters and sections |

---

## Technical Details

### Category Filter Implementation

```text
Categories:
- all: Shows all transmissions
- frequency: Healing frequencies content
- audiobook: Audiobook readings
- spoken-word: Spoken word pieces
- teaching: Teaching videos

Filter uses useState hook and filters the transmissions array based on category match.
```

### Video Thumbnail Strategy

YouTube provides automatic thumbnails via:
- `https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg` (1280x720)
- Falls back to `hqdefault.jpg` if max resolution unavailable

### Duration Badge Format

Displays as provided (e.g., "11:11:45", "8:18:14", "5:21:16") in bottom-right corner with semi-transparent black background.

### Shorts Section Layout

5 columns on desktop, 4 on tablet, 2 on mobile. Each card has:
- Vertical 9:16 aspect ratio
- Play icon centered on hover
- Title truncated if too long

### External Links

All videos open in new tab with:
- `target="_blank"`
- `rel="noopener noreferrer"`

---

## Design Consistency

Using existing design patterns:
- `font-cinzel` for headings and labels
- `font-cormorant` for descriptions
- `text-primary` for gold accents (#D4A84B)
- `border-border` for subtle borders
- Brand symbol from `src/assets/brand-symbol.png` for dividers
- Category buttons styled like Shop page filters
- Hover transitions matching site-wide 300ms/500ms durations

