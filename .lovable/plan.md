
## Michael Dittmann — Handmade Classical Guitars

A calm, warm, editorial site for a high-end classical guitar maker. German default, English mirror, URL-based routing.

### Design system
- **Palette (Bone & cedar):** background `#FAF7F2` (bone), text `#1C1916` (soft black), muted text `#6B635A`, accent `#B5673A` (warm cedar/terracotta), hairline borders `#E8E2D8`.
- **Typography:** Fraunces (display, slight optical size) for headlines and editorial moments; Inter for body, navigation, and meta. Generous line-height, restrained sizes.
- **Rhythm:** wide margins, tall vertical spacing, rounded-corner imagery (≈12–16px), no hard shadows, hairline dividers only.
- **Motion:** 600–800ms ease-out transitions, soft crossfades, no bounces or flashy effects.

### Routing & i18n
- URL-based: `/de/...` (default) and `/en/...`. Visiting `/` redirects to `/de`.
- Language switch top-right: minimal `DE / EN`, active state in cedar.
- Translations stored in a single dictionary file per language; one `useT()` hook reads from current locale segment.
- Shared layout (header + footer) wraps every page.

### Global header / footer
- Header: maker name left (links home), nav center/right (Verfügbare Instrumente · Auftragsbau · Bauweise · Kontakt), language switch far right. Transparent over hero, gains a soft bone background on scroll.
- Footer: name, email, location, language switch, small copyright. One thin hairline only.

### Pages

**1. Home (`/de`, `/en`)**
1. **Hero** — fullscreen image container (built as a swappable media slot ready for video later), name + "Handmade Classical Guitars" set in Fraunces, bottom-left, calm and small. No slogan.
2. **Two Paths** — split layout: rounded image left, two stacked options right ("Verfügbare Instrumente" / "Auftragsbau"), each as a large serif line with a thin underline that grows on hover. Hovering each option soft-crossfades the image (~700ms). Click navigates to the matching page.
3. **About** — portrait of the maker left, 3–4 line personal text right, signature-feeling.
4. **Philosophy strip** — single centered Fraunces sentence on bone, lots of breathing room, hairlines above/below.
5. **Process entry** — large full-width image, one quiet link below: "Die Bauweise ansehen →" linking to Construction page.
6. **Contact invitation** — small italic line "Jedes Instrument beginnt mit einem Gespräch." with a subtle link to Contact. No button.

**2. Available Instruments (`/de/instrumente`, `/en/instruments`)**
- Visual-first. Each instrument: large rounded image, short character/sound paragraph in Fraunces, technical specs (Decke, Boden/Zargen, Mensur, Jahr) as small Inter meta below a hairline. Generous spacing between instruments. Alternating image alignment for rhythm.

**3. Commission a Guitar (`/de/auftragsbau`, `/en/commission`)**
- Quiet intro paragraph, then numbered sections with small cedar numerals: Gespräch · Planung & Vorlieben · Holzauswahl · Bauphase · Fertigstellung. Each section short, personal, paired with a small image where natural.

**4. Construction (`/de/bauweise`, `/en/construction`)**
- Building philosophy intro, then short blocks: Hölzer, Konstruktion, Klangideal, Detail. Each block = small heading + 2–3 sentence paragraph + image. No long walls of text.

**5. Contact (`/de/kontakt`, `/en/contact`)**
- Centered minimal layout: short inviting sentence, email and phone as quiet links, workshop location line. No form, no CTA button.

### Imagery
- Use warm, natural placeholder photography (workshop wood, guitar details, maker portrait) generated to match the palette. All hero/section images built as easily swappable slots so the maker's real photos drop in later.

### Deliverables
- Full design system (tokens, fonts, base styles)
- Layout shell with header, footer, language switch, locale routing
- Translation dictionaries (DE + EN) covering all pages
- All five pages built per spec, fully responsive
- Two Paths soft-crossfade interaction
- Smooth, restrained hover and scroll transitions throughout
