

# Responsive Audit Plan: PharaohB.com

## Overview

This plan addresses responsive design issues across all pages at five breakpoints:
- **320px** (small mobile)
- **375px** (iPhone standard)
- **768px** (tablet)
- **1024px** (small desktop)
- **1440px** (large desktop)

---

## Technical Details

### Issues Identified & Fixes

#### 1. Navigation (Navbar.tsx)

**Issues:**
- Mobile menu touch targets are too small (nav links lack adequate padding)
- Logo text may overflow on 320px screens
- Social links in mobile menu are cramped

**Fixes:**
- Add `py-3` padding to mobile nav links for 44px+ touch targets
- Scale logo text down on smallest screens: `text-lg sm:text-xl md:text-2xl`
- Ensure mobile menu items have proper spacing

---

#### 2. Hero Section (HeroSection.tsx)

**Issues:**
- Egyptian decorative corners may overlap content on small screens
- Hero headline may be too large at 320px
- Scroll indicator positioning may conflict with corners on mobile

**Fixes:**
- Hide decorative corners on mobile: `hidden md:block`
- Reduce hero text size progression: `text-3xl sm:text-4xl md:text-6xl lg:text-7xl`
- Adjust scroll indicator bottom positioning for mobile
- Reduce horizontal padding on very small screens: `px-4 sm:px-6`

---

#### 3. Footer (Footer.tsx)

**Issues:**
- 3-column grid doesn't stack properly on mobile
- Newsletter form input/button flex layout may break on 320px
- Social links may wrap awkwardly
- Bottom bar flex layout needs improvement for very small screens

**Fixes:**
- Change grid to `grid-cols-1 md:grid-cols-3`
- Newsletter input: make button full-width on mobile with `flex-col sm:flex-row`
- Add proper gap spacing for mobile: `gap-8 md:gap-12`
- Bottom bar: `flex-col` on mobile with centered text

---

#### 4. Home Page Sections

**ExploreTilesSection.tsx:**
- Tile height may be too tall on mobile
- Reduce heights: `h-40 md:h-48 lg:h-64`
- Text sizing adjustment for mobile

**RecentWorksSection.tsx:**
- Grid needs mobile adjustment: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`

**AvailableNowSection.tsx:**
- Grid needs adjustment: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3`

---

#### 5. Canon Page (Canon.tsx)

**Issues:**
- 2-column grid on mobile causes cards to be too narrow at 320px
- Price/button row may wrap awkwardly

**Fixes:**
- Change grid: `grid-cols-1 md:grid-cols-2`
- Ensure button and price have proper alignment on all sizes

---

#### 6. Art Gallery (Art.tsx)

**Issues:**
- 2-column grid on smallest screens (320px) creates very small tiles
- Hover overlays don't work on touch devices

**Fixes:**
- Reduce columns on mobile: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
- Show title/price below image on mobile instead of overlay
- Add alternative touch-friendly behavior

---

#### 7. Music Page (Music.tsx)

**Issues:**
- 2-column grid may cause issues on tablet portrait
- Player control button size needs touch-target compliance (44px minimum)
- Track list text may be cramped

**Fixes:**
- Grid adjustment: `grid-cols-1 lg:grid-cols-2`
- Increase play button size to `w-14 h-14` for touch compliance
- Improve track list spacing

---

#### 8. Shop Page (Shop.tsx)

**Issues:**
- Category filter buttons may wrap poorly on mobile
- 4-column grid creates tiny cards on tablet
- Product info text may overflow

**Fixes:**
- Filter buttons: ensure proper wrapping with `flex-wrap justify-center gap-2 sm:gap-3`
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- Category filter buttons need touch-friendly sizing: `min-h-[44px]`

---

#### 9. Transmissions Page (Transmissions.tsx)

**Issues:**
- Grid may cause narrow cards on tablet

**Fixes:**
- Adjust grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Ensure touch targets on "Enter Transmission" links are adequate

---

#### 10. Writings Page (Writings.tsx)

**Issues:**
- Date placement may cause awkward stacking on mobile
- Touch targets on writing links may be too small

**Fixes:**
- Improve spacing in flex layout for mobile
- Add adequate vertical padding for touch targets: `py-6 sm:py-8`

---

#### 11. About Page (About.tsx)

**Issues:**
- "How To Engage" numbered boxes may be too close together on mobile
- Image divider height may need reduction on mobile

**Fixes:**
- Increase gap in step items on mobile
- Reduce image height: `h-48 md:h-64 lg:h-96`

---

#### 12. Contact Page (Contact.tsx)

**Issues:**
- 2-column layout may stack awkwardly
- Form inputs need adequate sizing for mobile

**Fixes:**
- Ensure grid stacking: `grid-cols-1 md:grid-cols-2`
- Form elements already use proper Tailwind input sizing

---

#### 13. Detail Pages (CanonDetail, ArtDetail, WritingDetail, NewsArticle)

**Issues:**
- Decorative corner elements on CanonDetail may overlap on mobile
- Grid layouts need responsive adjustment
- Back links need adequate touch targets

**Fixes:**
- Hide decorative corners on small screens or reduce size
- Ensure `grid-cols-1 md:grid-cols-2` pattern
- Add `py-3` to back links for touch compliance

---

#### 14. PageHeader Component (PageHeader.tsx)

**Issues:**
- Top padding may be excessive on mobile
- Title sizing may need reduction for very small screens

**Fixes:**
- Adjust padding: `pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20`
- Title scaling: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`

---

#### 15. NotFound Page (NotFound.tsx)

**Issues:**
- Uses `bg-muted` instead of `bg-background`, inconsistent with site design
- Not using PageLayout or site styling

**Fixes:**
- Apply consistent dark background and styling
- Match site typography (Cinzel/Cormorant)

---

#### 16. GoldenTorus 3D Element (GoldenTorus.tsx)

**Performance consideration:**
- 3D WebGL canvas may cause performance issues on lower-end mobile devices

**Recommendation:**
- Current implementation is already set to `pointer-events-none` and fades with scroll
- Consider reducing geometry complexity or adding a static fallback for mobile

---

## Implementation Order

1. **Global Components First**
   - Navbar (affects all pages)
   - Footer (affects all pages)
   - PageHeader (affects multiple pages)

2. **Home Page Sections**
   - HeroSection
   - ExploreTilesSection
   - RecentWorksSection
   - AvailableNowSection

3. **Primary Content Pages**
   - Canon + CanonDetail
   - Art + ArtDetail
   - Music
   - Shop
   - Transmissions

4. **Secondary Pages**
   - Writings + WritingDetail
   - About
   - Contact
   - News + NewsArticle
   - Echoverse
   - NotFound

---

## Summary

This audit covers **16 components/pages** with fixes for:
- Text overflow at 320px
- Touch target sizing (minimum 44px)
- Grid layout adjustments for all breakpoints
- Spacing and padding refinements
- Mobile-friendly navigation
- Consistent styling on all pages

No visual design changes; all adjustments maintain the existing Egyptian aesthetic while ensuring full responsiveness.

