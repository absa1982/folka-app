# Folka Design System

**Folka** is an original design system for a modern, Nordic **HR & time-tracking platform** for small and mid-sized businesses (SMBs). It is inspired by the category of Danish HR SaaS products like [HRfamly](https://www.hrfamly.dk/) — time registration (a Danish legal requirement since 1 July 2024), onboarding/offboarding, employee records, equipment tracking, recruitment, and HR templates — but Folka is a **wholly original brand**, not a recreation of any existing product's proprietary UI.

> **Why an original brand?** The brief asked to "create an app like" HRfamly. Rather than clone another company's distinctive branding, Folka reinterprets the category with its own name, palette, typography, voice, and components. Use it freely for production or throwaway prototypes of HR/time-tracking surfaces.

---

## What Folka is

A calm, warm, trustworthy software brand that helps small companies feel **"ro i maven"** (peace of mind) about the boring-but-necessary parts of having employees. The product spans three surfaces:

1. **Marketing website** — explains the product, builds trust, drives free signups.
2. **Web admin app** — the HR dashboard where managers run onboarding, approve time, manage people, equipment and recruitment.
3. **Mobile time-tracking app** — where employees register hours, leave and absence with one tap and approve their week.

### Core product areas
- **Time registration** — employees log work time, holiday and absence; managers approve weeks and stay legally compliant.
- **Onboarding & offboarding** — reusable checklists make the first and last day go smoothly.
- **Employees** — a single GDPR-safe home for contracts, documents and personal data.
- **Equipment** — track who has which laptop, key or phone.
- **Recruitment** — a candidate board to organise applicants without email chaos.
- **Templates & HR guidance** — contracts, 1:1 templates, plus access to real HR consultants and legal advice.

---

## Sources

This system was derived from publicly available material on the HRfamly marketing site (no codebase or Figma was provided):
- **Marketing site:** https://www.hrfamly.dk/ (Danish). Read for product scope, feature naming, tone, pricing structure, and testimonial voice.
- **App entry point referenced:** https://app.hrfamly.dk/
- No GitHub repo, Figma file, or design tokens were supplied. All visual foundations below are **original** to Folka. If you have the real product's design context, attach it and I can align Folka more closely or pivot to a faithful recreation.

---

## CONTENT FUNDAMENTALS — how Folka writes

Folka is **bilingual: English-first UI with Danish examples and labels** where the audience is Danish SMBs. The voice is warm, plain, and reassuring — never corporate or jargon-heavy.

**Tone & vibe**
- **Calm and reassuring.** We remove worry. Recurring theme: peace of mind, "handled", "in one place", "compliant without thinking about it".
- **Human and warm.** We sound like a helpful colleague, not a legal department. Friendly but competent.
- **Plain.** Short sentences. Concrete benefits ("Approve your week in under a minute") over abstract features.

**Person & address**
- Address the user directly as **"you" / "du"**. Folka refers to itself as **"we" / "vi"** ("we're here when you need us").
- Active voice. "Approve time", not "Time can be approved".

**Casing**
- **Sentence case** for headings, buttons, labels and nav ("Approve time", "Add employee") — never Title Case on UI controls.
- Uppercase reserved for **eyebrows** (small section labels above headings) with wide letter-spacing, e.g. `ONBOARDING`, `TIDSREGISTRERING`.

**Examples (voice)**
- Hero: *"All your people, in one calm place."* / *"HR og tid — samlet ét sted."*
- Eyebrow + heading: `TIME REGISTRATION` → *"Ready to track work time?"*
- Reassurance: *"Save time, avoid fines, and keep a calmer workplace."*
- Empty state: *"No one's clocked in yet. Add your first employee to get started."*
- Button copy: *"Try free for 1 month"*, *"Approve week"*, *"Add employee"*, *"Book a demo"*.
- Microcopy stays kind: *"Almost there — one field left."*

**Numbers & data**
- Always tabular figures (`.tnum` / mono) for hours, money, dates, counts so columns align.
- Danish formats in Danish contexts: `1.250,00 kr.`, `kr. 500,- /md`, dates `28. feb 2026`, 24-hour time `08:30–16:15`.

**Emoji**: not used in product UI or marketing. Personality comes from color, illustration accents and warm copy — not emoji.

---

## VISUAL FOUNDATIONS

**Overall feel:** warm, soft, grown-up. Spruce-green + warm sand + a clay accent. Generous rounding, low-contrast soft shadows, lots of calm whitespace. Feels closer to a friendly Nordic bank/health app than a hard enterprise tool.

### Color
- **Primary — Spruce green** (`--green-600 #157254`, hover `--green-700`). Conveys growth, calm, trust. Used for primary buttons, active nav, brand surfaces, links. Deep and confident rather than neon.
- **Accent — Clay** (`--clay-500 #E8674A`). Warm coral used *sparingly* for illustrative highlights, a single emphasis, recruitment/attention states. Never for large fills.
- **Neutrals — warm sand**, not cold gray. Page background `--sand-50 #FAF8F3`; cards pure white; borders `--sand-200`. Text is a warm green-tinted near-black (`--ink-900 #18211D`).
- **Semantic:** success = brand green; warning = amber `#C7841A`; danger = clay-red `#D2543C`; info = muted blue `#3B72A6`. Each has a soft tinted background for badges/banners.
- **Vibe of imagery:** warm and natural — soft daylight, real people, muted warm tones; avoid cold corporate stock and harsh saturation. Mono/duotone treatments use the green ramp.

### Typography
- **Hanken Grotesk** for everything — a warm humanist grotesk. Weights 400/500/600/700/800. Big confident headings (display up to 56px, weight 800, tight tracking `-0.02em`).
- **JetBrains Mono** for time, hours, money, IDs, dates — anywhere numbers must align (tabular).
- Body UI text 15px; secondary 13px; eyebrows 11px uppercase. Headings sentence case.

### Spacing & layout
- **4px base grid.** Section rhythm is generous (64–96px between marketing sections; 24px card padding).
- Web app: fixed **248px sidebar** + fluid content, `1200px` max container for marketing.
- Layout favors calm: clear columns, plenty of air, content rarely full-bleed except hero imagery.

### Backgrounds
- Predominantly flat **warm sand** (`--sand-50`) and white. **No busy gradients or purple/blue tech gradients.** Occasional very soft green tint (`--green-50`) blocks to separate sections. Hero may use a warm photographic image with a soft light overlay. No repeating patterns or heavy textures.

### Corner radii & cards
- Generous, friendly rounding: inputs/buttons `10px`, **cards `14px`**, large panels/modals `20px`, marketing hero cards `28px`, pills fully round.
- **Cards:** white surface, `1px` `--sand-200` border, soft `--shadow-sm`; on hover lift to `--shadow-md`. No colored left-border-accent cards (an AI cliché we avoid).

### Shadows
- Soft, warm, **ink-tinted** (`rgba(24,33,29,…)`), low opacity. Layered xs→xl. Brand buttons get a subtle green-tinted shadow `--shadow-brand`. No hard black drop shadows, no neon glows.

### Borders
- Hairline `1px` warm `--sand-200` for dividers and card edges; `--sand-300` when more definition is needed. Inputs use a `1px` border that turns green with a soft focus ring on focus.

### Motion
- Gentle and quick. `--ease-out cubic-bezier(0.22,1,0.36,1)`, durations 120–320ms. **Fades and small slides/lifts only — no bounce, no spring overshoot.** Respect `prefers-reduced-motion`.

### Hover / press states
- **Hover:** primary buttons darken one green step (`600→700`); ghost/secondary fill with `--sand-100`; cards lift shadow; links underline.
- **Press/active:** subtle darken + `transform: translateY(1px)` (settle, no shrink-pop). Active nav item gets `--green-50` fill + green text.
- **Focus:** always a visible `--focus-ring` (3px soft green halo). Never remove focus outlines.

### Transparency & blur
- Used sparingly: sticky headers get a translucent white with `backdrop-filter: blur(8px)`; modal scrims are `rgba(24,33,29,0.4)`. No frosted-glass everywhere.

### Protection / overlays
- Photographic heroes use a soft top-down warm light gradient (white→transparent) so text stays legible — not a heavy dark scrim.

---

## ICONOGRAPHY

- **Icon set: [Lucide](https://lucide.dev/)** — clean, rounded, consistent `1.75px`-ish stroke, friendly but precise. It matches Folka's warm-but-competent feel. Loaded from CDN (`https://unpkg.com/lucide@latest`) — see any UI kit `index.html` for usage. No custom icon font.
- **Style:** outline (stroke) icons only, never filled/duotone, `20–24px` in UI, `currentColor` so they inherit text color. Stroke width kept at Lucide's default for evenness.
- **No emoji** anywhere in product or marketing. **No unicode glyph icons.**
- **Logo & brand marks** (in `assets/`): `folka-logo.svg` (mark + wordmark), `folka-logo-white.svg` (for green/dark surfaces), `folka-mark.svg` (squircle app-icon / avatar fallback). The mark is a stylised sprout — growth + a person — in a rounded green tile.
- **Illustration:** when richer imagery is needed, prefer warm photography or simple flat spot illustration using the brand ramp; we do not hand-draw detailed SVG scenes.
- If you need an icon Lucide lacks, pick the nearest Lucide glyph rather than mixing icon sets.

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry point (consumers link this). `@import` list only.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill manifest for use in Claude Code.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radii-shadows.css`, `base.css`.

**`assets/`** — `folka-logo.svg`, `folka-logo-white.svg`, `folka-mark.svg`.

**`guidelines/`** — foundation specimen cards (Type, Colors, Spacing, Brand) shown in the Design System tab.

**`components/`** — reusable React primitives, grouped:
- `core/` — Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch, FormField.
- `feedback/` — Badge, StatusPill, Avatar, ProgressBar, Toast, Tooltip.
- `layout/` — Card, Tabs, Dialog.
- `hr/` — EmployeeRow, TimeEntry, ChecklistItem, CandidateCard, EquipmentRow.

**`ui_kits/`** — full-screen product recreations:
- `web-app/` — HR admin dashboard (overview, employees, time approval, onboarding, recruitment, equipment).
- `mobile-app/` — employee time-tracking app.
- `marketing/` — Folka marketing homepage.

**`slides/`** — branded 16:9 slide template (title, statement, metrics, comparison, quote, closing) built on the tokens; shared `slides.css`.

> Components are bundled automatically into `_ds_bundle.js` under the global namespace — see any component card or UI kit `index.html` for the exact `window.<Namespace>` usage.
