# Muscle Meals Indore

## Current State
- Full-screen dark overlay hero (gym/dark feel, not HelloFresh)
- Static trust bar with 4 numbers in a green band
- Serious, corporate font (Inter)
- Dark overlays, heavy black sections — not bright/playful
- Design feels like a generic gym landing page, not like HelloFresh

## Requested Changes (Diff)

### Add
- Scrolling marquee/ticker trust strip (replacing static trust bar)
- Figtree font (playful, rounded — available locally at /assets/fonts/Figtree.woff2)
- Cream/warm background sections (#FFF9F2 or similar) alternating with white

### Modify
- **Hero**: Remove fullscreen dark overlay. Use HelloFresh split-layout: left 55% white/cream with bold headline + CTA, right 45% bright food image. No dark overlay. Bright, inviting.
- **Color tokens**: Keep green primary but make it slightly brighter/more vivid. Warm cream accent background.
- **Font**: Switch from Inter to Figtree throughout — more rounded and friendly
- **Navbar**: Keep white, but use Figtree bold for brand name
- **All section headings**: More natural casing (not ALL CAPS), warmer tone
- **TrustBar**: Replace with auto-scrolling marquee (CSS animation) showing rotating trust items in bright green strip
- **Plan cards**: Larger food photo area, more rounded corners (rounded-2xl), pill-style "Order" buttons
- **Buttons**: Rounded-full pill style like HelloFresh
- **Backgrounds**: Use warm cream (#FFF8F2) for alternating sections instead of grey
- **How It Works**: Colorful illustrated step circles, warmer background

### Remove
- Full-screen dark overlay from hero
- ALL-CAPS headings everywhere (keep a few for accent labels only)
- Heavy black/dark sections

## Implementation Plan
1. Update index.css: Add Figtree @font-face, update body font, warm background colors
2. Update HeroSection: Split layout (text left, image right), no dark overlay, pill CTA buttons
3. Update TrustBar: Scrolling marquee strip
4. Update Navbar: Figtree font
5. Update all section headings: Title case, warmer tone
6. Update buttons throughout to rounded-full pill style
7. Update plan cards: larger image, more rounded
8. Warmer background colors throughout (cream sections)
