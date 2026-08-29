---
name: Shubham Sharma — Portfolio
description: A dark, terminal-native engineering portfolio that behaves like a monitored system console.
colors:
  void-ink: "#0A0A0F"
  pale-paper: "#F5F3FF"
  signal-violet: "#7C3AED"
  signal-violet-light: "#A78BFA"
  signal-violet-pale: "#EDE9FE"
  signal-violet-dim: "rgba(124,58,237,0.1)"
  signal-violet-deep: "#6D28D9"
  electric-sky: "#60A5FA"
  electric-sky-soft: "#93C5FD"
  muted-slate: "#6B7280"
  status-green: "#4ADE80"
  status-emerald: "#10B981"
  status-amber: "#FCD34D"
  status-amber-deep: "#F59E0B"
typography:
  display:
    fontFamily: "Syne, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  hero:
    fontFamily: "Syne, sans-serif"
    fontSize: "clamp(4.5rem, 12vw, 10.5rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  stat:
    fontFamily: "Syne, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)"
    fontWeight: 700
    letterSpacing: "-0.03em"
  display-compact:
    fontFamily: "Syne, sans-serif"
    fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)"
    fontWeight: 700
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Syne, sans-serif"
    fontSize: "clamp(1.2rem, 2vw, 1.6rem)"
    fontWeight: 700
    letterSpacing: "-0.02em"
  metric:
    fontFamily: "Syne, sans-serif"
    fontSize: "clamp(1.2rem, 2vw, 1.65rem)"
    fontWeight: 700
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "15px"
    fontWeight: 300
    lineHeight: 1.85
  body-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: 1.85
  meta:
    fontFamily: "Inter, sans-serif"
    fontSize: "13.5px"
    fontWeight: 300
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.15em"
  small:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0.1em"
  caption:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "10px"
    fontWeight: 400
    letterSpacing: "0.1em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
  section: "128px"
components:
  button-primary:
    backgroundColor: "{colors.signal-violet}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.signal-violet}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "14px 24px"
  card:
    backgroundColor: "#0A0A0F"
    textColor: "#ffffff"
    rounded: "{rounded.xl}"
  card-hover:
    backgroundColor: "rgba(14,14,24,1)"
  tag:
    backgroundColor: "rgba(255,255,255,0.04)"
    textColor: "rgba(255,255,255,0.4)"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
---

# Design System: Shubham Sharma — Portfolio

## Overview

**Creative North Star: "The Command Deck"**

The site presents Shubham's work the way a monitored system console presents its own status: a scroll-progress bar tracks position like a load meter, a marquee ticker scrolls a live "Now" status line, a pulsing green dot signals "available," and a typewriter-animated terminal block prints role, stack, and status one line at a time. Nothing is decorative chrome — every recurring motif (the ticker, the pulse, the progress bar, the mono labels) reads as instrumentation reporting real state, because everything it reports (metrics, uptime, client count) is a real, verified number.

Visually, this plays out as a near-black control surface (Void Ink) lit by a single accent color family — violet warming to electric blue — used sparingly as signal, never as decoration. Depth comes from layering translucent panels and blurred ambient glows rather than shadows; the console is flat by design, like a dark-mode dashboard, not a lifted card stack. A mouse-reactive particle field in the hero is the one moment of pure atmosphere, standing in for "the system is alive and watching your cursor," before the console settles into its instrumented, text-driven rhythm for the rest of the page.

The system explicitly rejects the generic "gradient-hero SaaS portfolio" look: no glassy hero illustrations, no stock-photo team feel, no rainbow gradients. Every gradient on this site runs the same two stops (violet → electric blue) and is reserved for accents, text, and active states — never full backgrounds.

**Key Characteristics:**
- Near-black console surface with a single violet→blue signal color, used sparingly
- Flat by default; depth via translucent layering and blurred ambient glow, not shadows
- Terminal/mono vocabulary (labels, tickers, typewriter text) treated as live instrumentation, not decoration
- Hairline 1px violet grid lines standing in for card borders across every multi-item grid
- Every visible metric is a real, verified number — the design's credibility depends on this

## Colors

A near-monochrome dark console lit by one accent family (violet warming to blue); color is signal, not decoration.

### Primary
- **Signal Violet** (`#7C3AED`): the one accent that means "this is interactive or important" — primary buttons, section eyebrow labels, active nav underline, cursor dot, focus rings.
- **Signal Violet Light** (`#A78BFA`): the raised version of Signal Violet for text-on-dark contexts — gradient text, hover states, terminal value highlights, particle color.

### Secondary
- **Electric Sky** (`#60A5FA`): appears only as the second stop in the violet→blue gradient (text-gradient, accent-line hovers, progress bar) — never used as a standalone fill.
- **Electric Sky Soft** (`#93C5FD`): a lighter version used for the "stack" line in the hero terminal block.

### Neutral
- **Void Ink** (`#0A0A0F`): the base background for the entire page and every "resting" card surface.
- **Pale Paper** (`#F5F3FF`): the base text-white value and the light theme's paper reference; body copy renders as `white/45`–`white/70` opacity steps over Void Ink rather than a separate gray scale.
- **Muted Slate** (`#6B7280`): reserved, low-emphasis secondary text where opacity-stepped white isn't used.

### Status accents
- **Status Green** (`#4ADE80`): the pulsing "available" dot only — nav, ticker, and hero eyebrow indicator.
- **Status Emerald** (`#10B981`): every other "positive/live" signal — Experience's "Active" badge, Client Work's "Live ↗" badge, the hero terminal's `award` line, and green (non-gradient) Projects metric numbers. One shade for every non-pulse positive signal, so a new positive-metric component never has to pick a new green.
- **Status Amber** (`#FCD34D`): the hero terminal's `status` line value.
- **Status Amber Deep** (`#F59E0B`): the "Founding Eng" experience badge (text, background tint, border).
- **Signal Violet Deep** (`#6D28D9`): the second stop in the primary button's own internal gradient (`#7C3AED → #6D28D9`), distinct from the page-wide violet→sky gradient.

### Named Rules
**The Hairline Rule.** Every border on the site is Signal Violet at 8–20% opacity (`rgba(124,58,237,0.08–0.2)`), never a solid neutral gray and never fully opaque. A border this site draws should always look like it could disappear.

**The One Signal Rule.** Signal Violet and Electric Sky are the only saturated colors on the page. Everything else is Void Ink, white-opacity steps, or the two status accents. A new component reaching for a third hue is off-system.

**The 45% Floor.** No text renders below `white/45` (4.5:1 against Void Ink, WCAG AA for normal text) — not even captions, index numbers, or tags. `white/45` and `white/50` are the two lowest steps in active use; nothing goes lower.

## Typography

**Display Font:** Syne (with sans-serif fallback)
**Body Font:** Inter (with sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (with monospace fallback)

**Character:** Syne's geometric, slightly architectural bold weight carries every headline and number; Inter stays light-weight and quiet for body copy so it never competes with Syne; JetBrains Mono renders anything that reads as system output — labels, tags, terminal lines, tickers — reinforcing the console metaphor at the type level.

### Hierarchy
- **Hero Display** (700, `clamp(4.5rem, 12vw, 10.5rem)`, line-height 0.88, letter-spacing -0.04em): the name/role treatment on the hero only.
- **Display** (700, `clamp(2.5rem, 5vw, 4rem)`, line-height 1.02–1.05, letter-spacing -0.03em): every standard section headline ("Things I've built.", "Where I've shipped.").
- **Display Compact** (700, `clamp(2.5rem, 4.5vw, 3.75rem)`, letter-spacing -0.03em): Skills' section headline — the one section that caps its display size slightly lower.
- **Stat** (700, `clamp(1.75rem, 3.5vw, 2.75rem)`, letter-spacing -0.03em): the hero's top stats row (10K+, 99.95%, etc.).
- **Metric** (700, `clamp(1.2rem, 2vw, 1.65rem)`, letter-spacing -0.03em): in-card metric numbers (Projects card stats).
- **Title** (700, `clamp(1.2rem, 2vw, 1.6rem)`, letter-spacing -0.02em): every role/company/card-name title site-wide (Experience roles and companies, Project card names, Client Work full-width card names) — the single canonical size for this role after a consolidation pass unified four near-duplicate clamps.
- **Body Large** (300, 16px, line-height 1.85): About's intro paragraphs, the one place body copy runs at the larger step.
- **Body** (300, 15px, line-height 1.85): standard paragraph copy, rendered at `white/45`–`white/55` opacity over Void Ink.
- **Meta** (300, 13–14px, line-height 1.6): card descriptions, bullet text, secondary sentence-level copy that isn't full body prose.
- **Label** (400–500, 11px, letter-spacing 0.15em, uppercase where used as an eyebrow): section eyebrows, primary tags, nav links' mono siblings.
- **Small** (400, 12px, letter-spacing 0.1em): secondary mono metadata (dates, sub-labels).
- **Caption** (400, 10px, letter-spacing 0.1em): the smallest mono tier — card numbers ("01"), stat captions, dense tag rows.

### Named Rules
**The Mono-Means-System Rule.** JetBrains Mono is reserved for anything that reads as system-generated or metadata (labels, tags, dates, tech-stack chips, terminal lines). Prose and headlines never use it; using mono for a sentence of narrative copy breaks the console illusion.

## Layout

The page is a single-column vertical scroll of full-bleed sections (`max-w-7xl` centered, `px-6 lg:px-12`), each separated by a hairline top border (`1px solid rgba(124,58,237,0.08)`) rather than large empty gaps — sections read as adjoining console panels, not isolated blocks. Vertical rhythm between sections is generous (`py-32`), but density inside a section is tight.

Grids are intentionally asymmetric bento layouts on desktop (Projects: 7/5/4/4/4/4-column spans on a 12-col grid; Client Work: 2-up narrow cards plus full-width wide cards) and collapse to a single column below `lg`. Two sections (Experience, Skills) use a sticky left rail (`lg:sticky lg:top-24`) paired with scrolling content on the right — the meta/label column stays pinned while detail scrolls past it, reinforcing the "console readout" feel. Multi-item grids render their dividers as a 1px background-colored gap between cells (see Shapes) instead of individual card borders.

Two fixed overlays run above all page content at all times: a top scroll-progress bar (`height: 2px`, full-width, filling left-to-right with scroll) and a status ticker bar (`height: 32px`) above the main nav, which itself sits `32px` below the ticker and gains a blurred dark background only after `40px` of scroll.

## Elevation & Depth

Flat by default — the system uses no `box-shadow` on cards, buttons at rest, or content panels. Depth is conveyed instead through translucent layering: a card's resting background is pure Void Ink (`rgba(10,10,15,1)`) and its hover state lightens to a slightly raised translucent panel (`rgba(14,14,24,1)`), a shift of only a few percent in lightness. Large blurred radial gradients ("ambient glow" blobs, `filter: blur(60–80px)`, opacity 0.08–0.18) sit behind hero and contact content and drift slowly via CSS keyframes — this is the system's only source of atmospheric depth, and it is always violet or electric-sky colored, never neutral.

The one true elevation event is the primary button's hover glow (`box-shadow: 0 12px 40px rgba(124,58,237,0.4)`), which exists specifically to make the call-to-action feel physically liftable while everything else on the page stays flat.

### Named Rules
**The Flat-Console Rule.** Nothing lifts except the primary CTA button on hover. If a new component reaches for a resting-state shadow, translate that "depth" into a background-lightness step or a hairline border instead.

## Shapes

Corners are rounded throughout but with two distinct radii doing two distinct jobs: large-radius containers (`rounded-xl`/`rounded-2xl`/`rounded-3xl`, 12–24px) for cards, badges, and the contact panel, and fully-rounded pills (`rounded-full`) for every clickable button, nav CTA, and status chip. Nothing on the site is sharp-cornered or fully square.

The signature structural device is the **1px hairline grid**: any multi-item grid (Projects, Skills, Achievements, Client Work narrow cards) sets its own background to translucent Signal Violet and gives each cell a solid Void Ink background with a `1px` gap — the gap itself becomes the border, so grid lines are perfectly uniform and always exactly as faint as the "One Signal" color rule allows. A secondary device is the **animated accent line**: a 1–2px gradient bar (violet → electric-sky) that grows from `scaleX/scaleY: 0` to `1` on hover along a card's top or left edge — used identically across About badges, Experience rows, Skills groups, and Client Work cards.

Gradient borders (`.border-gradient`, a 1px violet→sky ring achieved via mask-composite) mark secondary/ghost buttons that need a visible edge without a solid fill.

## Components

Every interactive surface is **quiet and precise**: flat at rest, restrained hairline borders, and hover feedback that is exact and immediate rather than bouncy or loud — a background lightens a few percent, an accent line grows to full length, a border sharpens from 8% to 40% opacity. Nothing overshoots; transitions run 200–400ms with no elastic easing.

### Buttons
- **Shape:** fully rounded (`rounded-full`, 9999px).
- **Primary:** Signal Violet fill (gradient `#7C3AED → #6D28D9` on the hero CTA), white text, `14px 28px` padding, Syne semibold; hover adds `translateY(-2px)` plus the one true `box-shadow` glow (`0 12px 40px rgba(124,58,237,0.4)`) — see Elevation.
- **Ghost/Secondary:** transparent fill with a `.border-gradient` violet→sky 1px ring, white/60 text; hover fills with `rgba(255,255,255,0.04)` and brightens text to full white. Used for "Download Resume."
- **Nav "Hire me":** solid Signal Violet pill at 100% opacity, drops to 80% opacity on hover instead of lifting — the one button that doesn't use the glow treatment, reserved for the persistent nav CTA.

### Chips / Tags
- **Style:** JetBrains Mono, 10–11px, `rgba(255,255,255,0.04)` background, `rgba(255,255,255,0.06–0.07)` hairline border, `white/40–50` text.
- **State:** on hover (where interactive, e.g. skill tags), border brightens to `rgba(124,58,237,0.5)` and text shifts to Signal Violet Light — no background change.
- **Status badges** (nav availability dot, Client Work "Live" tag, Experience role badges): pair a small pulsing dot or icon with a colored translucent pill (`bg` at 10% opacity, `border` at 20%, text at full saturation) in Status Green, Signal Violet, or Status Amber depending on meaning.

### Cards / Containers
- **Corner Style:** `rounded-xl`–`rounded-2xl` (12–24px).
- **Background:** Void Ink at rest (`rgba(10,10,15,1)`), lightens to `rgba(14,14,24,1)` on hover — see Elevation.
- **Border:** none on individual cards inside a grid; the grid's own 1px background gap serves as the border (see Shapes). Standalone panels (About badges list, Contact card) use a direct hairline border instead (`1px solid rgba(124,58,237,0.1–0.2)`).
- **Internal Padding:** 24–32px (`p-6`–`p-8`), tightening to 20px (`p-5`) in dense list rows like About's badge stack.
- **Signature hover motion:** a gradient accent line (top or left edge) animates from `scale: 0` to `1` — see Shapes.

### Navigation
- Two-tier fixed header: a 32px status-ticker strip (marquee text, mono, `white/45` with Signal Violet Light highlights on key phrases) sits above a 60px main nav bar.
- Main nav is transparent at page top, gains a `rgba(10,10,15,0.85)` blurred background and a hairline bottom border only after 40px of scroll.
- Links are Syne medium, `white/50` at rest, full white on hover, with an animated underline (`w-0 → w-full`) growing from the left.
- Mobile collapses to a full-screen `rgba(10,10,15,0.97)` blurred overlay with staggered-entrance 4xl links.

### Signature Component: Live Terminal Block
The hero's terminal window (rounded, hairline-bordered, translucent dark panel with red/yellow/green traffic-light dots and a `~/portfolio — zsh` label) types out role/stack/award/status lines character-by-character in mono, each value color-coded (violet, blue, green, amber). It is the clearest single expression of the Command Deck metaphor and the template for any future "live status" component.

### Signature Component: Particle Field
A canvas-based field of small violet dots in the hero that repel from the cursor within 120px, gently attract between 120–220px, drift back to their origin point, and draw faint connecting lines to near neighbors — representing "the system reacting to you" before the page settles into its static instrumentation. Respects `prefers-reduced-motion` by not rendering.

## Do's and Don'ts

### Do:
- **Do** keep every border a translucent Signal Violet hairline (8–20% opacity) — never a solid neutral gray.
- **Do** render any multi-item grid with the 1px background-gap technique instead of individual card borders.
- **Do** reserve JetBrains Mono for labels, tags, tickers, and terminal/status text — never for prose or headlines.
- **Do** keep depth flat: convey elevation through background-lightness steps and blurred ambient glow, not `box-shadow`, with the single exception of the primary button's hover glow.
- **Do** make every number on the page a real, verified metric — the design's entire credibility premise depends on this.
- **Do** use the violet→electric-sky gradient consistently as the only two-stop gradient on the site (text-gradient, accent lines, progress bar, primary button).

### Don't:
- **Don't** introduce a third saturated hue outside Signal Violet, Electric Sky, and the two status accents (green/amber).
- **Don't** add shadows to cards or buttons at rest — the Flat-Console Rule reserves lift for the primary CTA's hover state only.
- **Don't** use sharp/square corners anywhere; every surface is either a large-radius container or a full pill.
- **Don't** fabricate or round up a stat to make a component look more impressive — invented numbers break the console metaphor's premise that every readout is real.
