
# Plan: Restructure Recent Works Section for YouTube Thumbnails

## Problem Analysis

The current "Recent Works" section has two main issues:
1. **Aspect Ratio Mismatch**: YouTube thumbnails are 16:9 but the grid uses 4:3 cards, causing awkward cropping
2. **Placeholder Images**: Artwork, books, and writings are using Unsplash placeholders instead of real content

---

## Solution: Mixed-Layout Section

Instead of a uniform 6-card grid, create a visually dynamic layout that properly showcases different content types:

```text
Current Layout:              New Layout:
+---------+---------+---------+    +-------------------+---------+
|  4:3    |  4:3    |  4:3    |    |                   |  1:1    |
|  card   |  card   |  card   |    |    FEATURED       |  book   |
+---------+---------+---------+    |    16:9 Video     +---------+
|  4:3    |  4:3    |  4:3    |    |                   |  1:1    |
|  card   |  card   |  card   |    |                   |  book   |
+---------+---------+---------+    +-------------------+---------+
                                   +---------+---------+---------+
                                   |  16:9   |  16:9   |  16:9   |
                                   |  video  |  video  |  video  |
                                   +---------+---------+---------+
```

---

## Step 1: Create New Layout Structure

Redesign the Recent Works section with:

1. **Featured Row (Large)**: 
   - Left: One large 16:9 featured transmission (YouTube video with proper thumbnail)
   - Right: 2 stacked square cards for books

2. **Video Row**: 
   - 3 columns of 16:9 YouTube video cards with proper thumbnails
   - Includes play button overlay and duration badge

---

## Step 2: Use Real YouTube Thumbnails

Pull directly from the transmissions data which already has proper YouTube thumbnail URLs:
- `https://i.ytimg.com/vi/[VIDEO_ID]/maxresdefault.jpg`

Featured transmissions to display:
- "Galaxies in Your Gaze" (Music - featured)
- "Delta Waves - Deep Healing Sleep" (Frequency)  
- "Master Key Affirmations" (Affirmation)
- "A Vision for Humanity" (Spoken Word)

---

## Step 3: Remove Placeholder Content

Remove artworks and writings from this section since they still use Unsplash placeholders. Focus on content that has real imagery:
- **YouTube Videos**: Have real thumbnails
- **Books**: Keep but note they still need real cover images

---

## Technical Implementation

### File: `src/components/home/RecentWorksSection.tsx`

Changes:
1. Import only needed data (transmissions, books)
2. Filter for featured transmissions
3. Create featured video component with 16:9 aspect ratio
4. Create video card row with 16:9 cards
5. Add play overlay and duration badges for videos
6. Use CSS Grid with proper responsive breakpoints

### CSS Classes Used:
- `aspect-video` (16:9 for YouTube thumbnails)
- `aspect-square` (1:1 for books)
- Grid layout with `grid-cols-1 md:grid-cols-3`

---

## Visual Result

- Featured YouTube video displays at full 16:9 with no cropping
- Additional videos in a row below, also 16:9
- Play button overlays on video cards
- Duration badges showing video length
- Clean, professional look matching YouTube's own layout

---

## Files Modified

1. **`src/components/home/RecentWorksSection.tsx`**
   - Complete restructure of the layout
   - Use 16:9 aspect ratio for all video content
   - Add video-specific UI (play buttons, duration)
   - Focus on content with real images (YouTube videos)

---

## Future Considerations

Once you have real artwork and book cover images, the section can be expanded to include those in a separate "Featured Works" row with appropriate aspect ratios for each content type.
