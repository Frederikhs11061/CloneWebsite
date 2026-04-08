# pop.site — Page Topology

## Summary
- Target: https://pop.site/
- Framework: Framer (static site)
- Total page height (desktop 1440px): ~15,219px
- Font: Satoshi (headings + body) via Google Fonts / self-host
- Primary brand color: #3B82F6 (blue-500) — used for CTA buttons
- Text colors: #171717 (near-black) for headings/body, gray-500 for muted copy
- Background: #FFFFFF with subtle blue gradient glows in hero/CTA sections

## Section List (top to bottom, desktop)

| # | Name | y-start | height | Summary |
|---|------|---------|--------|---------|
| H | Header / Navigation | 0 | 72 | `pop site*` logo + nav links + Create Account + Log In |
| 1 | Hero | 72 | 1340 | "Make a stunning site, easily" + claim URL input + phone mockup |
| 2 | Pre-built Sections Teaser | 1412 | 1225 | "Use Pre-Built Sections" + carousel of section cards |
| 3 | Desktop & Mobile Responsive | 2637 | 1097 | Badge "New" + "Look incredible on mobile & desktop" + device mockups |
| 4 | Sections Showcase Grid | 3734 | 2756 | "Sections designed to get clicks, leads, and sales" — grid of ~15 section cards (Links, Socials, Forms, Services, Projects, Gallery, Skills, Resume, FAQ, Tech Stack, Videos, etc.) |
| 5 | Oliur Testimonial | 6490 | 534 | Quote + "Oliur — Designer & Creator / 421K Subscribers" + YouTube thumbnail |
| 6 | Shopify Integration | 7024 | 995 | Badge "New" + "Let customers buy straight from your site" + claim URL + mockup |
| 7 | Video Themes | 8019 | 855 | Badge "New Video" + "Themes that make you look incredible" + video player |
| 8 | Launch Personal Brand CTA | 8874 | 1040 | "Launch your personal brand today" + claim URL + 4 feature cards (Stunning Themes, Share Instantly, Easily Edit, Powerful Analytics) |
| 9 | Easiest Way Copy Block | 9914 | 1014 | "The easiest way to build a quality personal site" + claim URL + mockup |
| 10 | Fabian Testimonial | 10929 | 777 | Quote + "Fabian Albert — Designer & Founder" + YouTube thumbnail |
| 11 | Membership (MemberSpace) | 11706 | 886 | "Make a powerful membership site." + "Learn More" button |
| 12 | Animated Themes | 12592 | 994 | "Animated themes make you stand out" + claim URL + auto-playing video |
| 13 | Featured On | 13586 | 397 | "Featured on" + row of press logos |
| 14 | Final CTA | 13983 | 791 | "Make your personal site now." + claim URL input |
| F | Footer | 14775 | 445 | Copyright + link columns (Use / Featured / Legal / More) |

## Interaction Models
- Most sections: **static content with intersection-observer fade-in** (Framer appear animations)
- Section 4 (Sections Showcase): grid of cards (~15), each card image clipped + hoverable
- Video themes (7) + Animated themes (12): `<video autoplay muted loop>`
- Hero + CTA sections: input pill + blue button; no special behavior beyond hover
- Header: appears to be static (not sticky/scroll-reactive in this page, but occupies top 72px)

## Global Visual Patterns
- Full-bleed white background with subtle blue radial/linear gradient glows in hero + CTA
- Section containers: max-width ~1200–1300px, generous vertical padding (100–160px)
- Cards: `border-radius: 16–24px`, soft shadows, light gray borders (#EAEAEA-ish)
- Badges: pill-shaped with "New" text in gray bg
- Primary CTA: pill button `#3B82F6` bg, white text, `border-radius: 26px`, `padding: 16px 24px`
- URL input: white pill, `.pop.site` suffix, stacked inline with the CTA button
- Nav links: 12px, weight 400, near-black color
