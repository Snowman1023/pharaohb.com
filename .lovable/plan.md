

# Books and Music Pages Implementation Plan

## Overview

This plan implements updates to support a dedicated Books page at `/books` and enhances the Music page with streaming links and a track-focused layout.

---

## Current State Analysis

**Existing Structure:**
- `/canon` - Shows books with detail page links (uses `src/data/books.ts`)
- `/music` - Shows albums with track lists (uses `src/data/albums.ts`)
- No `/books` route exists currently
- No `homeData.ts` file with `contentPillars` - tiles are hardcoded in `ExploreTilesSection.tsx`

**Decision Point:** The prompt asks for `/books` as a new route. Since `/canon` already exists as the books section, I will:
1. Create a NEW `/books` page as requested
2. Keep `/canon` intact (it serves as the detail-oriented version)
3. The new `/books` page will have format badges and purchase links as specified

---

## Part 1: Create Books Page (/books)

### New Files

**A. Create `src/data/booksData.ts`**

New data structure with:
- `Book` interface: `id`, `title`, `subtitle`, `description`, `coverImage`, `price` (number), `format`, `purchaseLink`, `featured`
- 3 initial books: Echoes of Becoming, Cosmic Alignment, Sacred Geometries
- `booksPageContent` object with page metadata

**B. Create `src/components/books/BookCard.tsx`**

Component features:
- 3:4 aspect ratio book cover
- Format badge (ebook/paperback/hardcover/audiobook) in top-right corner
- Title, subtitle, description below cover
- Price display and Purchase/Coming Soon button
- Hover lift effect

**C. Create `src/pages/Books.tsx`**

Page structure:
- PageHeader with "The Canon" title, "The Written Word" subtitle
- Introduction text
- Books grid (3 columns desktop, 2 tablet, 1 mobile)
- "On the Horizon" section with newsletter call-to-action

---

## Part 2: Update Music Page

### Changes to Existing Files

**A. Create `src/data/musicData.ts`**

New data structure with:
- `Track` interface: `id`, `title`, `description`, `duration`, `coverImage`, `youtubeUrl`, `spotifyUrl`, `appleMusicUrl`, `category`
- Empty tracks array (ready for content)
- `musicPageContent` object

**B. Create `src/components/music/TrackCard.tsx`**

Component features:
- Track number (01, 02, 03...)
- Optional cover image thumbnail
- Title and description
- Duration display
- Play links (YouTube, Spotify icons)
- Horizontal row layout

**C. Update `src/pages/Music.tsx`**

Enhancements:
- Update subtitle to "Sound & Frequency"
- Keep existing album display (already well-structured)
- Add new "Streaming Links" section at bottom
- Add divider with brand symbol
- Links to YouTube, Spotify, Apple Music

---

## Part 3: Add Route

**Update `src/App.tsx`**

Add new route:
```text
/books -> Books.tsx
```

---

## File Changes Summary

| Action | File | Description |
|--------|------|-------------|
| Create | `src/data/booksData.ts` | Books data with format, price, purchase links |
| Create | `src/components/books/BookCard.tsx` | Book card with format badge |
| Create | `src/pages/Books.tsx` | New Books page |
| Create | `src/data/musicData.ts` | Tracks data structure |
| Create | `src/components/music/TrackCard.tsx` | Track list item component |
| Modify | `src/pages/Music.tsx` | Add streaming links section |
| Modify | `src/App.tsx` | Add /books route |

---

## Technical Details

### BookCard Component Structure

```text
BookCard
├── Cover Container (aspect-[3/4])
│   ├── Cover Image
│   └── Format Badge (absolute, top-right)
├── Content Area
│   ├── Title (font-cinzel)
│   ├── Subtitle (font-cormorant, italic)
│   ├── Description (line-clamp-3)
│   └── Footer
│       ├── Price
│       └── Purchase Button / Coming Soon
```

### Books Page Layout

```text
Books Page
├── PageHeader ("The Canon", "The Written Word")
├── SectionContainer
│   ├── Intro paragraph
│   └── Books Grid (1-2-3 responsive columns)
├── Divider with brand symbol
└── "On the Horizon" Section
    ├── Heading
    └── Newsletter teaser text
```

### Music Page Updates

Current album layout will be preserved. Adding:

```text
Music Page (updated)
├── PageHeader (subtitle: "Sound & Frequency")
├── SectionContainer with albums (existing)
├── Divider with brand symbol
└── Streaming Links Section
    ├── "Listen On" heading
    └── Platform links (YouTube, Spotify, Apple Music)
```

### TrackCard Component Structure

```text
TrackCard
├── Track Number (2-digit padded)
├── Cover Thumbnail (optional, 48x48)
├── Info Area (flex-1)
│   ├── Title
│   └── Description
├── Duration
└── Play Links (YouTube, Spotify icons)
```

---

## Design Consistency

All new components will use:
- `font-cinzel` for headings
- `font-cormorant` for body text
- `text-primary` for gold accents
- `border-border` for subtle borders
- Brand symbol from `src/assets/brand-symbol.png` for dividers
- Consistent hover transitions (300ms/500ms)
- Button styling matching existing patterns

---

## Navigation Note

The navbar currently shows "The Canon" linking to `/canon`. After this implementation:
- `/canon` - Detailed book pages with excerpts and detail views
- `/books` - Overview page with format badges and purchase links

Consider updating navigation to include both, or updating "The Canon" to point to `/books` if that becomes the primary books entry point.

