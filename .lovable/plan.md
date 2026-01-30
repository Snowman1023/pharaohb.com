

# Complete Multi-Page Website Build for PharaohB.com

## Overview
Transform the existing site scaffold into a visually complete, production-ready website with all pages fully designed and populated with high-quality content and images. The Home hero section, torus, color palette, typography, and navigation remain untouched.

---

## Technical Approach

### Image Strategy
All images will be sourced from Unsplash using their direct URL format with specific search terms matching the site aesthetic:
- Dark, architectural, abstract imagery
- Gold/black tones, geometric patterns, sacred geometry
- No people, no stock-photo aesthetics
- Categories: architecture, abstract, geometric, dark, metallic, cosmic

Image URLs will use the format: `https://images.unsplash.com/photo-[ID]?w=800&q=80`

### Component Architecture
```text
src/
├── components/
│   ├── home/
│   │   ├── RecentWorksSection.tsx
│   │   ├── AvailableNowSection.tsx
│   │   └── ExploreTilesSection.tsx
│   ├── shared/
│   │   └── (existing components)
│   └── (existing layout components)
├── pages/
│   ├── Home.tsx (enhanced below hero)
│   ├── Canon.tsx (enhanced)
│   ├── CanonDetail.tsx (new)
│   ├── Art.tsx (new)
│   ├── ArtDetail.tsx (new)
│   ├── Music.tsx (new)
│   ├── Writings.tsx (new)
│   ├── WritingDetail.tsx (new)
│   ├── Shop.tsx (enhanced)
│   ├── About.tsx (enhanced)
│   └── Contact.tsx (enhanced)
└── data/
    ├── books.ts
    ├── artworks.ts
    ├── albums.ts
    ├── writings.ts
    └── products.ts
```

---

## Page Implementations

### 1. HOME (Below Hero Only)

**Section A: "Recent Works" (6 cards)**
- Grid of 6 visual cards (3 columns on desktop, 2 on tablet, 1 on mobile)
- Each card: image, title, one-line description
- Hover effect with golden border glow
- Links to respective detail pages

**Section B: "Available Now" (3 products)**
- Horizontal row of 3 product cards
- Each card: image, title, price, "View" button
- Pulls from books/art data

**Section C: "Explore" (3 large tiles)**
- Three large horizontal tiles linking to The Canon, Art, Music
- Full-width stacked on mobile
- Each tile: background image, title overlay, subtle arrow indicator

---

### 2. THE CANON (/canon)

**Book Grid (4 books)**
Each book entry includes:
- Cover image (dark, abstract book cover style)
- Title
- Short description (2-3 sentences)
- Price
- "View Details" button linking to /canon/[slug]

**Book Slugs and Titles:**
1. `echoes-of-becoming` - "Echoes of Becoming"
2. `the-architects-blueprint` - "The Architect's Blueprint"
3. `letters-from-the-threshold` - "Letters from the Threshold"
4. `sacred-geometries` - "Sacred Geometries"

---

### 3. CANON DETAIL (/canon/:slug)

**Layout:**
- Large cover image (left on desktop, top on mobile)
- Title, subtitle, price
- Full description paragraph
- "Excerpt" section with styled blockquote
- "Purchase" button (golden, prominent)
- Back to Canon link

---

### 4. ART (/art)

**Gallery Grid (20+ pieces)**
- Dense grid layout (4 columns desktop, 3 tablet, 2 mobile)
- Each piece: image, title on hover
- Click links to /art/[slug]

**Art Titles (examples):**
- "Convergence I", "Golden Ratio", "Obsidian Dreams", "Temple Gate", "Cosmic Alignment", "The Threshold", "Fractal Memory", "Ascension", "Void Reflection", "Sacred Axis", etc.

---

### 5. ART DETAIL (/art/:slug)

**Layout:**
- Large artwork image (centered)
- Title
- Format options (Canvas / Framed / Print) as radio buttons or tabs
- Price (varies by format)
- "Purchase" button
- Back to gallery link

---

### 6. MUSIC (/music)

**Album Grid (4 albums)**
- Each album: cover art, title, short description
- Embedded player placeholder (styled black box with play icon)
- No autoplay

**Album Titles:**
1. "Frequencies of the Eternal"
2. "Temple Meditations Vol. I"
3. "The Obsidian Sessions"
4. "Golden Hour Transmissions"

---

### 7. WRITINGS (/writings)

**List View (12 entries)**
- Vertical list with clear spacing
- Each entry: title, date, short excerpt (2-3 lines)
- Click links to /writings/[slug]

**Writing Titles (examples):**
- "On the Nature of Becoming", "The Architecture of Self", "Letters to the Unborn", "Reflections on the Threshold", etc.

---

### 8. WRITING DETAIL (/writings/:slug)

**Layout:**
- Title (large, centered)
- Date
- Full article content (3-4 paragraphs minimum)
- Styled prose with proper typography
- Back to Writings link

---

### 9. SHOP (/shop - Enhanced)

**Unified Product Grid**
- All products in one grid
- Categories: Books, Art, Objects/Apparel
- Each product: image, title, category tag, price, "View" button
- 12+ products total

**Product Types:**
- 4 books (from Canon)
- 4 art prints (from Art)
- 4 objects/apparel (robes, jewelry, journals, candles)

---

### 10. ABOUT (/about - Enhanced)

**Three Sections:**

**Section 1: "What This Is"**
- Header + 2 paragraphs
- Description of the work and its purpose

**Section 2: "How to Engage"**
- Header + bullet points or short paragraphs
- Read, View, Listen guidance

**Section 3: "Why It Exists"**
- Header + 2 paragraphs
- Philosophy and intention

**Supporting Image:**
- One strong architectural/abstract image
- Positioned between sections or as a full-width divider

---

### 11. CONTACT (/contact - Enhanced)

**Layout:**
- Short intro text (2 sentences)
- Contact form (name, email, subject, message)
- Newsletter signup (separate section)
- Social links

---

## Route Updates

Add to App.tsx:
```text
/canon/:slug    → CanonDetail.tsx
/art            → Art.tsx
/art/:slug      → ArtDetail.tsx
/music          → Music.tsx
/writings       → Writings.tsx
/writings/:slug → WritingDetail.tsx
```

Update Navbar to include: About, The Canon, Art, Music, Writings, Shop, Contact

---

## Data Files Structure

**src/data/books.ts**
```typescript
export const books = [
  {
    slug: 'echoes-of-becoming',
    title: 'Echoes of Becoming',
    subtitle: 'A Journey Through the Self',
    description: '...',
    excerpt: '...',
    price: '$34.99',
    image: 'https://images.unsplash.com/...'
  },
  // ... 3 more
];
```

Similar structure for artworks.ts, albums.ts, writings.ts, products.ts.

---

## Design Consistency

**Typography:**
- Headings: font-cinzel with text-gold-gradient
- Body: font-cormorant
- Small text: font-cinzel uppercase tracking-widest

**Spacing:**
- Sections: py-16 md:py-24
- Grid gaps: gap-6 or gap-8
- Container: max-w-6xl mx-auto

**Cards:**
- bg-card border border-border
- hover:border-primary/50 transition
- Consistent padding (p-6)

**Buttons:**
- Primary: bg-primary text-primary-foreground
- Outline: border-primary text-primary

---

## Files to Create

1. `src/data/books.ts`
2. `src/data/artworks.ts`
3. `src/data/albums.ts`
4. `src/data/writings.ts`
5. `src/data/products.ts`
6. `src/components/home/RecentWorksSection.tsx`
7. `src/components/home/AvailableNowSection.tsx`
8. `src/components/home/ExploreTilesSection.tsx`
9. `src/pages/CanonDetail.tsx`
10. `src/pages/Art.tsx`
11. `src/pages/ArtDetail.tsx`
12. `src/pages/Music.tsx`
13. `src/pages/Writings.tsx`
14. `src/pages/WritingDetail.tsx`

## Files to Modify

1. `src/App.tsx` - Add new routes
2. `src/components/Navbar.tsx` - Update navigation links
3. `src/pages/Home.tsx` - Add sections below hero
4. `src/pages/Canon.tsx` - Complete book grid
5. `src/pages/Shop.tsx` - Unified product grid
6. `src/pages/About.tsx` - Three content sections
7. `src/pages/Contact.tsx` - Enhanced layout

---

## Image Sources (Curated Unsplash)

All images will be carefully selected to match the dark, architectural, symbolic aesthetic:

- **Abstract/Geometric:** Dark geometric patterns, golden spirals, sacred geometry
- **Architecture:** Dark corridors, ancient structures, minimalist spaces
- **Cosmic:** Dark nebulae, star fields, celestial imagery
- **Metallic:** Gold textures, bronze surfaces, obsidian reflections

Example queries for selection:
- "dark abstract geometric gold"
- "sacred geometry black"
- "minimal architecture dark"
- "cosmic gold nebula"
- "ancient temple shadows"

