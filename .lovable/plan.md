
# Plan: Update Recent Works with Correct Videos

## Your Request
Replace the current layout to match your annotations exactly:
- **Left column**: Master Key (top) + Galaxies in Your Gaze (bottom) - stacked vertically, full 16:9
- **Right column**: Overthinking (top) + Procrastination (bottom) - stacked vertically
- **Bottom row**: 3 Frequency videos

## Current Problem
The code is using `getFeaturedTransmissions()` which pulls random featured videos, not the specific ones you want. The right column is showing books instead of videos.

---

## New Layout Structure

```text
+---------------------------+--------------+
|   MASTER KEY AFFIRMATIONS |  OVERTHINKING|
|   (16:9 video, stacked)   |  (16:9)      |
+---------------------------+--------------+
|   GALAXIES IN YOUR GAZE   | PROCRASTIN-  |
|   (16:9 video, stacked)   |  ATION (16:9)|
+---------------------------+--------------+

+----------+-----------+----------+
|  FREQ 1  |  FREQ 2   |  FREQ 3  |
| (16:9)   |  (16:9)   |  (16:9)  |
+----------+-----------+----------+
```

---

## Implementation Details

### File: `src/components/home/RecentWorksSection.tsx`

1. **Remove books import** - no longer needed
2. **Hardcode specific video IDs** for precise control:
   - Master Key: `XGq0-MGq2O0`
   - Galaxies: `EAU5cD0Sh_4`
   - Overthinking: `msA-q_PwIz8`
   - Procrastination: `HE806qtLYNE`
   - Delta Waves: `Zrfoe0cz5FQ`
   - Alpha Frequency: `mcH4iDuTd6c`
   - Handpan Meditation: `UBGAjWD1WdI`

3. **Update grid structure**:
   - Left column: `lg:col-span-2` with 2 stacked 16:9 videos
   - Right column: `lg:col-span-1` with 2 stacked 16:9 videos (NOT books)
   - Bottom row: 3-column grid with frequency videos

4. **Helper function** to find videos by ID from transmissions data

### Expected Result
- All 7 video cards are real YouTube content with proper thumbnails
- No placeholder images or books in this section
- Books remain in the Canon, poems in Artifacts (already done)
