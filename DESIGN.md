# Design System: Phosphor BIOS
**Project ID:** greenybeany.dev — shared spec for every site under the domain (first consumer: `greenythebeany/me`)

Tokens live in `src/styles/tokens.css`. This file explains them; the CSS is the source of truth for values. When the two disagree, fix whichever is wrong and update both in the same commit.

## 1. Visual Theme & Atmosphere

A firmware setup screen that learned some manners. The page reads like a BIOS: framed panels with corner ticks, numbered sections, uppercase letterspaced status labels, dot leaders, a boot sequence and a blinking caret. Underneath that chrome, the reading experience is calm and modern: generous line height, a comfortable measure, plenty of air between sections.

- **Mood:** utilitarian, nocturnal, precise, a little playful. P1 phosphor green on tube black, like a CRT terminal left on overnight. Green is the identity: it's in the name.
- **Density:** sparse at page level, dense inside panels. Whitespace separates ideas; panels group them.
- **Personality comes from the chrome, never from the copy.** Labels, keys, numbers and statuses carry the BIOS voice. Paragraphs are plain, readable prose.
- **The palette is a warm, true CRT green**, not a teal or mint. The GitHub profile renders should be updated to match.

Two hard rules keep the gimmick honest:
1. Every BIOS affordance must be real or clearly decorative. Never print a shortcut (`F2`, `<ENTER>`) that doesn't work.
2. Texture (scanlines, glow, decode effects) stays below the threshold of noise and disappears entirely under `prefers-reduced-motion`.

## 2. Color Palette & Roles

Each theme has the same token names, so components never branch on theme. Contrast figures are against the page background.

### Dark (default)

| Token | Name | Hex | Role |
|---|---|---|---|
| `--bg` | Tube Black | `#0a0e09` | Page background, black with a trace of green like an unlit CRT |
| `--bg-panel` | Bezel | `#0d120c` | Panel fill |
| `--bg-raise` | Raised Bezel | `#121a10` | Panel header strips and footers |
| `--ghost` | Burn-in | `#1a2a17` | Hover wash, lab-slot fill, key caps, oversized ghost numerals |
| `--faint` | Deep Moss | `#1f3a1a` | **Decorative only** (1.6:1). Never text |
| `--dim` | Low Phosphor | `#2f6b26` | **Decorative only** (3.0:1). Glitch ghost, inactive marks. Never text |
| `--mid` | Signal Green | `#5fbf4f` | Secondary text: labels, dates, metadata (8.4:1) |
| `--bright` | P1 Phosphor | `#41ff3a` | Accent: headings' emphasis, active states, primary button fill, focus ring (14.4:1) |
| `--hot` | Overdriven Phosphor | `#b6ffaf` | Primary button hover |
| `--ink` | Pale Phosphor | `#dcf2d5` | Primary text (16.4:1) |
| `--ink-soft` | Faded Phosphor | `#a3c49a` | Body copy, descriptions (10.1:1) |
| `--rule` | Circuit Trace | `#284d22` | Panel borders, dividers (decorative, 2.0:1) |
| `--rule-soft` | Faint Trace | `#1a2a17` | Inner dividers, hairlines |
| `--rule-strong` | Live Trace | `#3f8a35` | Borders of interactive controls: buttons, keys (4.5:1, meets the 3:1 non-text rule) |

### Light

| Token | Name | Hex | Role |
|---|---|---|---|
| `--bg` | Green Paper | `#fafcf6` | Page background, the faint green of fanfold printer paper |
| `--bg-panel` | Paper | `#fdfefb` | Panel fill |
| `--bg-raise` | Tinted Paper | `#f1f7e9` | Panel header strips and footers |
| `--ghost` | Paper Wash | `#e5f0d9` | Hover wash, lab-slot fill, key caps, ghost numerals |
| `--faint` | Mist | `#d4e8c2` | **Decorative only** |
| `--dim` | Fern | `#9cc982` | **Decorative only** |
| `--mid` | Field Green | `#2d6a1e` | Secondary text (6.4:1; 5.6:1 on `--ghost`) |
| `--bright` | Ledger Green | `#1d5c10` | Accent, primary button fill, focus ring (7.8:1) |
| `--hot` | Deep Ledger | `#113d08` | Primary button hover |
| `--ink` | Forest Ink | `#152510` | Primary text (15.6:1) |
| `--ink-soft` | Lichen | `#45613b` | Body copy (6.7:1) |
| `--rule` | Green Line | `#bdd9a9` | Panel borders, dividers (decorative) |
| `--rule-soft` | Whisper Line | `#e3eed7` | Inner dividers |
| `--rule-strong` | Moss Line | `#6c9a58` | Borders of interactive controls (3.2:1) |

In light mode the roles invert: `--bright` becomes the darkest green, because the accent has to be the highest-contrast color on the page in both themes.

### Color rules
- Text uses only `--ink`, `--ink-soft`, `--mid` or `--bright`. All four pass WCAG AA (4.5:1) on every surface in both themes.
- `--faint` and `--dim` are for decoration. If a design needs "quieter than `--mid`" text, the answer is smaller size or less weight, not a lower-contrast color.
- One accent. No second hue for status, errors or links: the only signals are brightness and the chrome itself (`[ OK ]`, `[X]`).
- Text on a `--bright` fill uses `--bg`.

## 3. Typography Rules

Two families with strictly separate jobs:

- **Monospace (`--mono`, JetBrains Mono)** is the BIOS voice: headings, labels, keys, numbers, statuses, times. Weights 400, 500 and 700.
- **Sans (`--sans`)** is the reading voice: lead paragraphs, card copy, descriptions, list items. Weights 400 and 600. The face is Atkinson Hyperlegible Next, chosen for distinct letterforms (`I`, `l`, `1`) over a generic grotesk.

| Token | Value | Used for |
|---|---|---|
| `--fs-display` | `clamp(2.2rem, 4.4vw, 3.8rem)` | Hero title only. Mono 700, tracking −0.035em |
| `--fs-h2` | `clamp(1.9rem, 5.6vw, 3.1rem)` | Section titles. Mono 700, tracking −0.02em |
| `--fs-h3` | `1.34rem` | Project titles. Mono 700 |
| `--fs-lead` | `clamp(1.02rem, 2.2vw, 1.16rem)` | Lead paragraphs. Sans |
| `--fs-body` | `1.02rem` | Body copy. Sans, line height `--lh-body` (1.72) |
| `--fs-small` | `0.94rem` | Secondary copy (places, descriptions in tight panels) |
| `--fs-chrome` | `0.8rem` | Menu items, card headers, leaders. Mono, uppercase, 0.14em |
| `--fs-label` | `0.72rem` | Eyebrows and labels. Mono, uppercase, 0.2em |
| `--fs-micro` | `0.66rem` | Section numbers, key caps, card footers. Mono, uppercase |

Rules:
- Uppercase and wide tracking belong to the mono face only. Sans text is always sentence case.
- Body measure caps at `--measure` (68ch).
- Headings use `text-wrap: balance`; paragraphs use `text-wrap: pretty`.
- Numbers that update or align (clock, percentages, times) use `font-variant-numeric: tabular-nums`.
- Slovak: single-letter prepositions and conjunctions (v, k, s, z, a, o, u, i) are bound to the next word with a non-breaking space.
- Use real typographic characters: `…` not `...`, `—` for breaks, `·` as a separator.

## 4. Component Stylings

* **Panels:** the core container. Gently rounded corners (`--radius`, 10px), 1px `--rule` border, `--bg-panel` fill, and two 9px corner ticks in `--bright` at 55% opacity (top-left and bottom-right) that mark the frame like a setup screen. Panels are flat: no shadow at rest.
* **Card header strip:** a `--bg-raise` band across the top of a panel, mono chrome text in `--bright` on the left, an optional dim `--mid` readout on the right (slot number, count). Separated from the body by a `--rule-soft` hairline.
* **Buttons:** softly rounded (8px), mono uppercase at `--fs-chrome`-ish size with 0.12em tracking.
  * *Primary:* solid `--bright` fill, `--bg` text. Hover shifts to `--hot`.
  * *Secondary:* transparent with a `--rule-strong` border and `--mid` text. Hover brightens the border and text to `--bright` over a `--ghost` wash.
  * Both lift 2px on hover. A trailing glyph (`>>`, `↓`) is `aria-hidden`.
* **Keys (top bar toggles):** small bordered chips styled like keyboard keys, with an optional cap (`F2`). The cap is only shown if that key actually works.
* **Menu:** a single `--bright` pill slides between items instead of each item painting its own background, so changing section reads as one movement. On narrow screens the menu collapses behind a key and the bar shows the current section instead.
* **Meters:** skills render as segmented bars (6px block, 3px gap), like a BIOS memory gauge rather than a progress bar.
* **Leaders:** `NAME ........ VALUE` dotted leaders for key/value lists.
* **Project cards:** whole card is one link. Header strip with module number, body with mono title and sans description, footer strip with the call to action. An oversized ghost numeral in `--ghost` sits behind the body as texture and must never overlap text.
* **Hover glow:** panels that respond to the pointer carry a soft radial bloom (`--glow`) that tracks the cursor. Disabled on touch devices.
* **Focus:** every interactive element shows a 2px `--bright` outline with 3px offset on `:focus-visible`. Never removed.
* **Inputs/Forms:** none on the site today. If one is added: `--bg-panel` fill, 1px `--rule-strong` border, 8px radius, mono label above in `--fs-label`, focus ring as above.

### Depth & elevation
Almost entirely flat. Hierarchy comes from borders, fills (`--bg` → `--bg-panel` → `--bg-raise`) and brightness, not shadows. The only shadow (`--shadow`) is a long, soft drop that appears under a project card on hover to sell the lift. The sticky top bar uses a translucent background with a 12px backdrop blur.

## 5. Layout Principles

- **Container:** max width `--maxw` (1180px), side gutter `--gutter` (`clamp(16px, 4vw, 40px)`).
- **Spacing scale:** 4px base. `--space-1` 4 · `--space-2` 8 · `--space-3` 12 · `--space-4` 16 · `--space-5` 20 · `--space-6` 24 · `--space-8` 32 · `--space-10` 40 · `--space-12` 48 · `--space-16` 64. Grid gaps use `--space-5`-ish (18–20px); panel padding is 20px.
- **Section rhythm:** sections are separated by `--space-section` (`clamp(72px, 12vw, 148px)`). Each opens with a chrome header line (number, eyebrow, status) over a hairline, then a mono title, then content.
- **Grids:** CSS grid with `auto-fit` / `minmax`, never JS measurement. Cards align to the top so uneven content doesn't stretch neighbors. Avoid orphaned last items: choose column counts that divide the item count, or let the last item span.
- **Anchors:** in-page jumps land below the sticky bar via `scroll-padding-top: var(--bar-h)`.
- **Breakpoints:** 375 (phone), 768 (tablet), 1440 (desktop) are the verification widths. The menu collapses below 860px.

## 6. Motion Rules

Motion explains state or rewards attention. It never blocks reading.

| Token | Value | Use |
|---|---|---|
| `--ease` | `cubic-bezier(0.22, 0.68, 0.24, 1)` | Everything. A quick start and long settle |
| `--dur-fast` | `0.2s` | Hover color and border changes |
| `--dur-base` | `0.42s` | Menu pill, card lift |
| `--dur-slow` | `0.55s` | Scroll reveals |

- **Boot sequence:** a POST log of five or so lines, about 1.5 seconds. Runs once per tab (`sessionStorage`), skippable by any key or click, and skipped entirely under reduced motion. The page behind it is `inert` until it finishes.
- **Reveals:** elements fade up 14px when they enter the viewport, staggered by 60–90ms. Fire once.
- **Decode:** titles resolve out of random glyphs left to right. Text length never changes, so nothing reflows. The accessible name is always the final text, never the noise.
- **Count-up:** meter percentages ease from 0 as the bar fills.
- **Caret:** a stepped 1.06s blink. Stops under reduced motion.
- Animate only `transform`, `opacity` and colors. Never `transition: all`.
- **Reduced motion:** all of the above collapse to their end state instantly; scanlines and smooth scrolling turn off.

## 7. Theming

- Dark is the default. A first visit follows `prefers-color-scheme`; after that the stored choice wins.
- An inline script in `<head>` sets `data-theme` before first paint, so the wrong theme never flashes.
- Each theme sets `color-scheme` so native scrollbars and controls match, and `<meta name="theme-color">` follows the active `--bg`.

## 8. Content & Voice

- Every user-facing string is an `{ en, sk }` pair in `src/data/content.js`, read through `t()`. That includes aria-labels, statuses and counts.
- English and Slovak are written, not translated. Slovak follows Slovak conventions (lowercase field names, `sep.`-style month abbreviations, natural word order).
- No cookies, analytics or third-party requests. Fonts are self-hosted.
