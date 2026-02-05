
# Protected Art Gallery + Writings Page + Shop Integration

## Overview

This plan implements three major updates to PharaohB.com:
1. A protected art gallery with 5-layer image theft protection
2. An updated Writings page with 10 expandable poems
3. A canvas prints section in the Shop

---

## Part 1: Protected Art Gallery (/art)

### Current State
The Art page currently uses standard `<img>` tags wrapped in `<Link>` components, linking to individual `/art/:slug` detail pages. Images are fully accessible for right-click saving and dragging.

### Changes Required

**A. Create ProtectedArtwork Component**

New file: `src/components/art/ProtectedArtwork.tsx`

The component implements 5 layers of protection:
1. CSS background-image instead of `<img>` tags
2. Invisible overlay div blocking interaction
3. Right-click disabled via `onContextMenu`
4. Drag disabled via `onDragStart`
5. Images limited to reasonable display size

**B. Update Art Page**

File: `src/pages/Art.tsx`

Changes:
- Update page header subtitle to "Visual Transmissions"
- Add global right-click disable `useEffect` for entire page
- Replace current gallery grid with ProtectedArtwork component
- Change grid to 3 columns desktop, 2 tablet, 1 mobile
- Add "Shop Prints" call-to-action section below gallery
- Add copyright footer

**C. Keep Existing Data Structure**

The current `src/data/artworks.ts` will remain as is - it already has the needed structure with `slug`, `title`, `image`, `description`, and `formats`. No need to create a new `artData.ts` since the existing file works well.

---

## Part 2: Writings Page with Expandable Poems

### Current State
The Writings page displays a list linking to individual detail pages. It uses `src/data/writings.ts` with essay-style content (paragraph arrays).

### Changes Required

**A. Create Poems Data File**

New file: `src/data/poems.ts`

Contains all 10 poems provided:
- The Union
- The Unmaking (from The Dawn of You - Part I)
- The Radiance (from The Dawn of You - Part II)
- The Threshold
- The Witness
- The Mirror
- The End of Trying
- The Return
- The Agreement
- The Door

**B. Update Writings Page**

File: `src/pages/Writings.tsx`

Changes:
- Add poems section with expandable accordion cards
- Each poem card shows:
  - Poem number (01, 02, 03...)
  - Title (clickable to expand/collapse)
  - Source attribution if applicable
  - Full poem content when expanded
  - Signature "- Pharaoh B." at the bottom
- Keep existing essays section below poems (optional - or replace entirely with poems)
- Use the Radix UI Accordion component already installed

---

## Part 3: Shop Page - Canvas Prints Section

### Current State
Shop has category filters (All, Books, Art, Objects, Apparel) and displays products in a grid.

### Changes Required

**A. Add Canvas Prints Section**

File: `src/pages/Shop.tsx`

Add a dedicated section above or within the existing shop content:
- Section header "Canvas Prints"
- Description about museum-quality prints
- "Browse All Prints" button linking to external Printful store (placeholder URL for now)

---

## Part 4: Homepage Pillar Update

### Current State
The homepage has `ExploreTilesSection` showing Canon, Art, and Music tiles - but no dedicated writings reference in the pillars.

### Changes Required

Looking at the codebase, there is no `contentPillars` array in a `homeData.ts` file. The explore tiles are hardcoded in `ExploreTilesSection.tsx`. 

**Option**: Add a Writings tile to the explore section if desired, or leave as is since Writings is accessible via navigation.

---

## File Changes Summary

| Action | File | Description |
|--------|------|-------------|
| Create | `src/components/art/ProtectedArtwork.tsx` | Protected artwork display component |
| Modify | `src/pages/Art.tsx` | Implement protected gallery with CTA and copyright |
| Create | `src/data/poems.ts` | 10 poems data with full content |
| Modify | `src/pages/Writings.tsx` | Expandable poem accordion cards |
| Modify | `src/pages/Shop.tsx` | Add canvas prints section with external link |

---

## Technical Details

### ProtectedArtwork Component Structure

```text
ProtectedArtwork
├── Container div (onContextMenu, onDragStart handlers)
│   ├── Background image div (CSS background-image)
│   ├── Invisible overlay div (blocks all interaction)
│   └── Title/info overlay (visible on hover)
```

### Accordion Implementation

The project already has `@radix-ui/react-accordion` installed and a pre-built `Accordion` component in `src/components/ui/accordion.tsx`. The poems will use this for expand/collapse behavior.

### Poems Data Structure

```text
interface Poem {
  id: string;
  title: string;
  source?: string;
  content: string;
}
```

The content field will contain the full poem text with preserved line breaks using template literals.

### Shop Canvas Prints Section

Will be added as a new section below the page header, featuring:
- Section divider with label
- Description text
- Call-to-action button (placeholder external URL)

---

## Design Consistency

All implementations will use:
- `font-cinzel` for headings
- `font-cormorant` for body text
- `text-gold-gradient` for emphasis
- `text-primary` (#D4A84B gold) for accents
- `bg-background` (#0a0a0a) for backgrounds
- `border-border` for subtle borders
- Brand symbol from `src/assets/brand-symbol.png` for dividers

---

## Routes

All required routes already exist:
- `/art` - Art.tsx
- `/writings` - Writings.tsx
- `/shop` - Shop.tsx

No routing changes needed.
