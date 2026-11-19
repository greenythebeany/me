# Design System: Bone & Phosphor
**Project ID:** greenybeany.dev — shared spec for every site under the domain (first consumer: `greenythebeany/me`)

Tokens live in `src/styles/tokens.css`. This file explains them; the CSS is the source of truth for values. When the two disagree, fix whichever is wrong and update both in the same commit.

## 1. Visual Theme & Atmosphere

An editorial page set on warm black. Big soft serif headlines with an italic accent, small tracked monospace labels, and plain sans paragraphs, all held together by hairline rules instead of boxes. It reads like a well-made spec sheet or a printed catalogue, not an app.

- **Mood:** calm, crafted, nocturnal, precise. Bone ink on warm black, with one phosphor green accent. Green is the identity: it's in the name.
- **Density:** sparse at page level, tidy inside sections. Whitespace separates ideas, hairlines group them.
- **Structure over decoration.** Numbered section heads, key/value spec rows, stat cells and index lists carry the personality. Decoration is limited to the 緑 mark (halftone in the hero, outlined in the footer), outlined section numerals and one orbiting dot.
- The GitHub profile renders should use the same palette: bone on warm black, green accent.

Two hard rules:
1. Every affordance must be real. Never print a shortcut (`F2`) that doesn't work.
2. Decoration never sits under text at a contrast that hurts reading, and moving decoration stops when motion is off.

## 2. Color Palette & Roles

Each theme uses the same token names, so components never branch on theme. Contrast figures are against `--bg`.

### Dark (default)

| Token | Name | Hex | Role |
|---|---|---|---|
| `--bg` | Warm Black | `#0b0b0a` | Page background |
| `--bg-panel` | Soot | `#111110` | Row hover wash |
| `--bg-raise` | Charcoal | `#181715` | Raised surfaces |
| `--ghost` | Ash | `#1f1e1b` | Button hover wash |
| `--faint` | Smoke | `#2a2824` | **Decorative only.** Empty activity bars |
| `--dim` | Slate | `#46423b` | **Decorative only.** Halftone dots, outlined numerals |
| `--mid` | Stone | `#99928a` | Secondary text: labels, dates, metadata (6.4:1) |
| `--bright` | Phosphor | `#8fd67f` | The accent: italic heading words, section numbers, active nav, links, focus ring (11.3:1) |
| `--hot` | Pale Phosphor | `#b9e8ad` | Link hover |
| `--ink` | Bone | `#ebe4d8` | Primary text (15.6:1) |
| `--ink-soft` | Parchment | `#c4bcaf` | Body copy, descriptions (10.5:1) |
| `--rule` | Hairline | `#2a2925` | Rules, cell borders (decorative) |
| `--rule-soft` | Faint Hairline | `#1d1c19` | Minor dividers |
| `--rule-strong` | Wire | `#6b665d` | Borders of controls and the hero ring (3.5:1, meets the 3:1 non-text rule) |
| `--fill` / `--on-fill` | Bone / Warm Black | `#ebe4d8` / `#0b0b0a` | Primary button fill and its text (15.6:1) |

### Light

| Token | Name | Hex | Role |
|---|---|---|---|
| `--bg` | Paper | `#f4f1ea` | Page background |
| `--bg-panel` | Card | `#faf8f3` | Row hover wash |
| `--bg-raise` | Linen | `#ebe7dd` | Raised surfaces |
| `--ghost` | Oat | `#e3ded2` | Button hover wash |
| `--faint` / `--dim` | Sand / Taupe | `#d9d3c6` / `#b4ad9f` | **Decorative only** |
| `--mid` | Graphite | `#625c53` | Secondary text (5.9:1; 4.9:1 on `--ghost`) |
| `--bright` | Ledger Green | `#2e6b22` | Accent (5.7:1) |
| `--hot` | Deep Ledger | `#1f4d16` | Link hover |
| `--ink` | Ink | `#1c1b18` | Primary text (15.3:1) |
| `--ink-soft` | Umber | `#48443d` | Body copy (8.6:1) |
| `--rule` / `--rule-soft` | Hairline | `#d6d0c3` / `#e6e1d6` | Rules (decorative) |
| `--rule-strong` | Wire | `#807a6e` | Control borders (3.8:1) |
| `--fill` / `--on-fill` | Ink / Paper | `#1c1b18` / `#f4f1ea` | Primary button; hover turns the fill `--bright` (5.7:1) |

### Color rules
- Text uses only `--ink`, `--ink-soft`, `--mid` or `--bright`. All four pass WCAG AA (4.5:1) on every surface in both themes.
- `--faint` and `--dim` are for decoration. If something needs to be quieter than `--mid`, make it smaller, not lower in contrast.
- One accent. Green marks emphasis and state; there is no second hue.
- Text on a `--bright` fill (timetable "now" flag) uses `--bg`.

## 3. Typography Rules

Three families with separate jobs:

- **Serif (`--serif`, Fraunces)** is the display voice: h1–h3, stat numbers, education roles, skill names, the footer sign-off. Weight 400 upright; italic 300 for the accented word, which is always `--bright`.
- **Monospace (`--mono`, JetBrains Mono)** is the label voice: navigation, eyebrows, section numbers, keys, dates, times, counts. Always small, uppercase, tracked 0.12–0.18em.
- **Sans (`--sans`, Atkinson Hyperlegible Next)** is the reading voice: leads, paragraphs, descriptions, list items. Sentence case.

All three are self-hosted variable woff2 files (latin + latin-ext) in `public/fonts`.

| Token | Value | Used for |
|---|---|---|
| `--fs-display` | `clamp(2.9rem, 8.4vw, 6.4rem)` | Hero title only. Tracking −0.025em, line height 0.98 |
| `--fs-h2` | `clamp(2.3rem, 6vw, 4.2rem)` | Section titles, footer sign-off |
| `--fs-h3` | `clamp(1.4rem, 2.6vw, 1.75rem)` | About cards, project titles |
| `--fs-lead` | `clamp(1.04rem, 2.2vw, 1.2rem)` | Lead paragraphs |
| `--fs-body` | `1.02rem` | Body copy, line height 1.7 |
| `--fs-small` | `0.94rem` | Places, list items, timetable subjects |
| `--fs-chrome` | `0.76rem` | Nav items, buttons |
| `--fs-label` | `0.7rem` | Eyebrows, spec keys, cell headers |
| `--fs-micro` | `0.64rem` | Key caps, tags, stat labels |

Rules:
- Every section title ends in an italic accent word (`title` + `titleEm` in content).
- Uppercase and tracking belong to the mono face only.
- Body measure caps at `--measure` (62ch).
- Headings use `text-wrap: balance`; paragraphs use `text-wrap: pretty`.
- Numbers that update or align use `.tabular` (`font-variant-numeric: tabular-nums`).
- Slovak: single-letter prepositions and conjunctions are bound to the next word by `t()`.
- Real typographic characters: `…`, `—`, `·`, `→ ↗ ↓`.

## 4. Component Stylings

* **Top bar:** sticky, 72px, translucent `--bg` with a 12px backdrop blur and a hairline bottom. The 緑 mark (28px, `--bright`) and the name, vertically centred on each other, on the left, numbered mono nav centred, keys and a small primary CV button on the right. The active nav item turns `--ink`, its number turns `--bright`, and a 1px accent rule draws in under it. A 1px green scroll-progress line runs along the bottom edge.
* **Keys:** small bordered mono chips with an optional cap (`F2`). The cap only appears if the key works. Below 640px the motion word and CV button hide; below 380px the caps hide.
* **Buttons:** 48px tall, 3px radius, mono uppercase.
  * *Primary:* solid `--fill` with `--on-fill` text, ryoku-style bone slab (ink slab in light).
  * *Secondary:* transparent, `--rule-strong` border, `--ink` text; hover gets an `--ghost` wash and an `--ink` border.
  * Trailing glyphs (`→`, `↓`, `↗`) are `aria-hidden` and nudge 3px on hover.
* **Section head:** mono line with green number and eyebrow on the left, optional status on the right, hairline below. An outlined italic serif numeral in `--dim` sits above it at the right edge.
* **Spec rows (`.spec`):** `KEY` in mono label on the left, value on the right, hairline below. Stack on phones.
* **Stat cells:** a bordered strip of cells split by hairlines: serif number, mono caption. The most active repo shows as an italic green link.
* **Cells (`.cv-block`, timetable days):** no box. A 1px `--ink` rule on top, mono heading and zero-padded count, hairline under the header, hairline-separated rows.
* **Meters:** a 2px hairline track with a green fill that scales in, plus a mono percentage that counts up.
* **Project index:** an ordered list, one row per repo: green number, serif title with description and tags, a 13-week activity bar chart on a baseline, and an `↗`. The whole row is one link (stretched hit area); the website link sits above it. Hover washes the row in `--bg-panel` and turns the title green.
* **Hero art:** a hairline circle in `--rule-strong`, a large 緑 printed through an SVG halftone dot pattern in `--dim` with a soft diagonal fade, and a green dot that orbits the ring once every 48s. All `aria-hidden`. It fades and slides partly off-canvas on narrow screens so it never competes with the text.
* **Focus:** 2px `--bright` outline, 3px offset, on every interactive element. Project rows show it on the whole row.
* **Inputs/Forms:** none today. If one is added: `--bg-panel` fill, 1px `--rule-strong` border, 3px radius, mono label above, focus ring as above.

### Depth & elevation
Flat. No shadows and no rounded cards. Hierarchy comes from type scale, hairlines and the `--bg` → `--bg-panel` wash. The top bar's blur is the only layered effect.

### Brand mark & icons
- The mark is 緑 ("green"), drawn as SVG paths from Noto Sans JP (OFL) in `src/data/mark.js` and rendered by `src/components/Mark.jsx`. It never depends on a CJK font being installed. Use the heavy cut at small sizes and the bold cut for large decoration.
- Icons: `favicon.svg`, `favicon.ico` (16/32/48), `favicon-48.png`, `icon-192.png`, `icon-512.png` and `apple-touch-icon.png` (180). All show the green mark on a warm-black tile, so they read on light and dark browser tabs. Google Search needs a square icon in a multiple of 48px, linked from the page.
- `og.png` (1200×630) repeats the hero: wordmark, title, name and the halftone mark in its ring.
- Search plumbing lives in `public/`: `sitemap.xml`, `robots.txt` (crawlers only read it at the domain root, so copy its `Sitemap:` line to greenybeany.dev/robots.txt) and `site.webmanifest`.

## 5. Layout Principles

- **Container:** max width `--maxw` (1240px), side gutter `--gutter` (`clamp(16px, 4vw, 40px)`).
- **Spacing scale:** 4px base (`--space-1` … `--space-16`). Sections are separated by `--space-section` (`clamp(88px, 13vw, 168px)`).
- **Hero:** info strip (location, live Bratislava time, site version), eyebrow, display title, lead, spec rows, stat cells, actions. The copy column is capped near 640px, and the art sits behind the right half.
- **Grids:** CSS grid only. About is 2 columns split by a vertical hairline. CV is a 6-column grid: education 4 + skills 2, then three 2-column cells. Timetable is 4 columns, then 2, then 1. Projects is a full-width list.
- **Anchors:** `scroll-padding-top: var(--bar-h)`.
- **Breakpoints:** verify at 375, 768 and 1440. The nav collapses into a dropdown below 960px; grids reflow at 1100, 960 and 640px.

## 6. Motion Rules

Motion is quiet and editorial. It reveals, it never performs.

| Token | Value | Use |
|---|---|---|
| `--ease` | `cubic-bezier(0.22, 0.68, 0.24, 1)` | Everything |
| `--dur-fast` | `0.2s` | Hover colour, border and nudge |
| `--dur-base` | `0.42s` | Nav underline, menu drop |
| `--dur-slow` | `0.7s` | Scroll reveals |

- **Reveals:** elements fade up 18px on entering the viewport, staggered 60–90ms, once.
- **Count-up:** the commit total and skill percentages ease from 0.
- **Meters:** the green fill scales in over 1.1s.
- **Orbit:** the hero dot circles the ring every 48s.
- **Menu:** the mobile dropdown unclips downward and its items step in.
- Animate only `transform`, `opacity`, `clip-path` and colours. Never `transition: all`.
- **Motion opt-out:** a first visit follows `prefers-reduced-motion`. `F4` flips it and the choice is stored (`gb-motion`) and wins from then on. With motion off, everything lands at its end state instantly and smooth scrolling turns off. The inline script in `index.html` sets `data-motion` before first paint.

## 7. Theming

- **Dark is always the default**, whatever the OS setting. Only an explicit `F3` choice of light is stored (`gb-theme`) and used on later visits.
- An inline script in `<head>` sets `data-theme` before first paint, so the wrong theme never flashes.
- Each theme sets `color-scheme`, and `<meta name="theme-color">` follows the active `--bg`.

## 8. Content & Voice

- Every user-facing string is an `{ en, sk }` pair in `src/data/content.js`, read through `t()`. That includes aria-labels, statuses and counts.
- English and Slovak are written, not translated.
- Personality lives in structure and the serif accent, not in jokes. Copy is plain and first-person.
- No cookies, analytics or third-party requests. Fonts are self-hosted.
- `index.html` carries the SEO title, description, Open Graph tags, JSON-LD (Person + Triptych) and a no-JS fallback; keep them in sync with the content.
