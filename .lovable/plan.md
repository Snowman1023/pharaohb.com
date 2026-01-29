
# Front-End Finalization: pharaohb.com

A comprehensive design plan to transform the current scaffolded site into a finished, living presence that implies depth, continuity, and active creation across many forms of work.

---

## Design Philosophy

The site will feel like entering a space, not reading a brochure. Every section implies there is more beyond it. Language is confident but never explanatory. Structure suggests accumulation and expansion without naming categories or capping scope.

---

## Global Changes

### Navigation
- Simplify nav labels: **About**, **Work**, **Shop**, **Contact**
- Rename "The Canon" → "Work" (or "Archive") to avoid doctrinal connotations
- Remove "Echoverse" and "News" from primary nav (content can live within Work or be reached through the footer)

### Footer
- Replace placeholder tagline with: **Writer. Architect. Mirror. Messenger.**
- Remove "awakening consciousness" language
- Keep newsletter, navigation, social, and external links
- Update copyright to use current year dynamically

---

## Page-by-Page Finalization

### Home (/)

**Hero Section**
- Headline: **Pharaoh B.**
- Subhead: **Writer. Architect. Mirror. Messenger.**
- Keep existing CTAs: "Enter the Archive" → links to /work, "Shop" → links to /shop
- Preserve background artwork and torus

**Remove or Replace**
- Remove "Signature Value Strip" (pillars with placeholder labels)
- Remove "Featured Drops" with bracket placeholders
- Remove "The Canon Preview" section with tiles
- Remove "EchoVerse Preview" section
- Remove placeholder newsletter copy

**New Structure (7 sections)**

1. **Hero** — Identity and presence established
2. **Recent Work** — A flexible grid of 6 items (no category labels, no types). Each card shows a title and a single line. Clicking enters the archive. Visual rhythm implies variety without naming it.
3. **From the Archive** — A single featured piece with a brief excerpt. Implies depth and history.
4. **Available Now** — 3 items from the shop. Clean product cards with image placeholder, title, and price. No category labels.
5. **Stay Close** — Newsletter signup. Clean headline: "Stay Close" with a single line beneath. Email field and button.
6. **Reach Out** — One sentence and a button to /contact.
7. **Footer** — Already established.

---

### About (/about)

**Header**
- Headline: **About**
- Subhead: **Writer. Architect. Mirror. Messenger.**

**Remove or Replace**
- Remove "What I Make" section with Art/Writing/Music columns
- Remove "Why It Exists" with placeholder philosophy
- Remove "How to Start" steps
- Remove wide image band placeholder

**New Structure**

1. **Header** — Simple identity statement
2. **Introduction** — A single paragraph of finished, restrained copy. (For now, placeholder with: "The work spans forms. It moves through writing, image, sound, and object. It accumulates. It continues.")
3. **What Exists** — A quiet 3-column rhythm showing icons or symbols (no labels) that imply breadth without naming. On hover, a subtle effect. Clicking leads to /work.
4. **A Note** — A pull-quote or single sentence that feels personal but not instructive.
5. **Connect** — Two buttons: "Explore the Work" → /work, "Get in Touch" → /contact
6. **Footer**

---

### Work (/work) — renamed from Canon

**Header**
- Headline: **The Work**
- Subhead: A single quiet line (e.g., "Writings, editions, and ongoing forms")

**Structure**
- Remove rigid category filter bar (Books/Essays/Talks/Principles)
- Replace with a quiet, optional filter row that uses softer terms if needed later (for now, show "All" only or remove entirely)
- Display a grid of entries — each card shows:
  - A title
  - A single line
  - A subtle date or year (optional)
  - No category badge
- "Start Here" section renamed to **Where to Begin** — 3 featured pieces with numbered styling retained

---

### Work Entry (/work/:slug) — renamed from Canon Entry

- Keep existing template structure
- Remove "reading time" placeholder
- Ensure related entries section uses softer language: "Continue" or "More from the Archive"

---

### Shop (/shop)

**Header**
- Headline: **Shop**
- Subhead: Remove current copy. Replace with a single line: "Editions, objects, and other forms."

**Structure**
- Keep product grid
- Remove category labels from cards
- Show: image placeholder, title, price, and a quiet hover state
- Remove "Quick View" overlay (simplify)

---

### Echoverse (/echoverse)

- This page can remain as an expansion point
- Simplify header: **Echoverse** with a single line: "Projects, collaborations, and other doors."
- Keep the 4-card grid but remove category labels
- Cards show: title, description, and "Explore →"

---

### News (/news)

- Rename to **Notes** or **Transmissions**
- Simplify header: "Updates and other writings"
- Keep post cards but remove category labels
- Ensure the page feels like a quiet log, not a blog

---

### Contact (/contact)

**Header**
- Headline: **Contact**
- Subhead: "A simple way to reach me."

**Structure**
- Keep newsletter and contact form side by side
- Remove "Join the Sacred Circle" language — replace with "Stay Close"
- Remove "Send a Message" heading — keep form only
- Remove "Follow the Journey" language — replace social section with quiet list
- Remove "Houston, Texas" location reference

---

## Content Approach

All placeholder brackets will be replaced with:
- **Finished, restrained language** that feels complete
- **No instructional or philosophical framing**
- **Short, confident lines** that imply more exists

Example replacements:
- `[HERO_HEADLINE]` → "Pharaoh B."
- `[HERO_SUBHEAD]` → "Writer. Architect. Mirror. Messenger."
- `[ABOUT_HEADLINE]` → "About"
- `[NEWSLETTER_COPY]` → "Periodic updates and new work."
- `[CONTACT_ONELINER]` → "For inquiries, collaborations, or anything else."

---

## Visual Refinements

- Maintain current gold/black palette and typography (Cinzel + Cormorant)
- Ensure torus remains subtle and ambient on all pages
- Keep Egyptian decorative elements (corners, dividers) minimal
- Ensure all sections have adequate spacing and breathing room
- Cards and containers should feel like entries or editions, not tiles

---

## Routing Changes

| Old Route | New Route | Notes |
|-----------|-----------|-------|
| /canon | /work | Renamed |
| /canon/:slug | /work/:slug | Renamed |
| /echoverse | /echoverse | Kept (optional expansion) |
| /news | /notes | Renamed (or kept) |
| /news/:slug | /notes/:slug | Renamed |

---

## Technical Summary

Files to modify:
- `src/pages/Home.tsx` — Rebuild sections with finished content
- `src/pages/About.tsx` — Simplify and finalize
- `src/pages/Canon.tsx` → rename to `src/pages/Work.tsx`
- `src/pages/CanonEntry.tsx` → rename to `src/pages/WorkEntry.tsx`
- `src/pages/Shop.tsx` — Remove labels, simplify
- `src/pages/Echoverse.tsx` — Soften language
- `src/pages/News.tsx` — Rename and simplify
- `src/pages/NewsArticle.tsx` — Rename
- `src/pages/Contact.tsx` — Remove extra language
- `src/components/Navbar.tsx` — Update nav links
- `src/components/Footer.tsx` — Add tagline, update language
- `src/components/HeroSection.tsx` — Replace placeholders
- `src/App.tsx` — Update routes

---

## Outcome

When complete, the site will:
- Feel finished and intentional
- Imply depth without explaining it
- Present many forms of work without categorizing them
- Invite exploration without instruction
- Support future expansion without scaffolding

