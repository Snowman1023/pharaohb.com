

# Plan: Recent Works — Audiobook Layout

## Your Requested Layout

```text
+---------------------------+----------------+
|                           |   ADDICTION    |
|   THE MASTER KEY SYSTEM   +----------------+
|   (large, 16:9)           |  THE LIGHT     |
|                           |   WITHIN       |
+---------------------------+----------------+
|   THE ART OF NOT          |                |
|   THINKING YOURSELF       |  THE KYBALION  |
|   TO DEATH (large, 16:9)  |                |
+---------------------------+----------------+
```

## Audiobook IDs

| Position | ID | Title |
|----------|-----|-------|
| Left Top | `Nd_9Nuv39Zw` | The Master Key System |
| Left Bottom | `msA-q_PwIz8` | The Art of Not Thinking Yourself to Death |
| Right Top | `I-xKF7PyoVM` | You Are Not Your Addiction |
| Right Middle | `HOfjZTY0Q4s` | The Light Within |
| Right Bottom | `ejbByodADwA` | The Kybalion |

## Technical Changes

**File:** `src/components/home/RecentWorksSection.tsx`

1. **Update video arrays** (lines 10-24):
   - Left column: Master Key System + Art of Not Thinking (2 videos)
   - Right column: Addiction + Light Within + Kybalion (3 videos)
   - Remove bottom row entirely

2. **Update grid structure** (lines 89-110):
   - Left column: `lg:col-span-2` with 2 stacked 16:9 videos
   - Right column: `lg:col-span-1` with 3 stacked smaller cards
   - Remove the separate bottom row section

3. **Result**: 5 audiobook cards in the exact layout you specified

