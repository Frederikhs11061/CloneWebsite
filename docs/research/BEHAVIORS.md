# pop.site — Behaviors & Interactions

## Global
- **Framework:** Framer static export. Uses `data-framer-appear-id` + IntersectionObserver for scroll-triggered fade/slide-in animations.
- **Smooth scroll:** None (no Lenis, no Locomotive). Native scrolling.
- **No sticky header:** The header is a normal flow element at top (height 72px).
- **Chat widget:** Small dark bubble at bottom-right (`z-index: 99999`). We omit this in the clone.

## Appear Animations
Most elements fade up (`opacity 0 → 1`, `translateY(20px → 0)`) with ~0.4s easing when they enter the viewport (~30% threshold). We'll reproduce with Tailwind's `animate-in fade-in slide-in-from-bottom-4` or a small custom CSS class using `IntersectionObserver`.

## Hover States
- **Primary button (`Claim your pop.site`):** bg stays `#3B82F6`, may slightly darken; cursor pointer
- **Nav links:** base `#000`, likely hover opacity change
- **Section cards (showcase grid):** subtle scale or shadow intensify on hover

## Videos
- Section 7 (Video Themes): `<video>` with explicit play button — click to play. Poster `pcuazrEIpAoQPBPbCjblc9C1YJY.png`.
- Section 12 (Animated Themes): `<video autoplay muted loop playsinline>` for the background animation.
- Footer area: `93SQYLzKtZptZWQRtVmSw1DFjDY.mp4` autoplays in some position.

## Responsive
- Breakpoints observed in Framer (`__framer__breakpoints`): standard mobile/tablet/desktop.
- Hero heading font scales from 120px desktop → much smaller mobile.
- Sections 4 (showcase grid) shifts from 3-col → 2-col → 1-col.
- Device mockups stack vertically on mobile.

## Not Implemented in Clone
- Real Create Account / Log In flow (links open `/choose-account` and `app.pop.site`).
- Chat widget.
- Actual submission of the `.pop.site` claim input — in clone it's a visual-only form.
