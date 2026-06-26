# Folka → Real Project · Claude Code Handoff

This package is the **Folka Design System**: design tokens, an original brand, reusable React component sources, three full product UI recreations (web admin, mobile app, marketing), a slide deck, and foundation cards.

There are **two ways** to use it with Claude Code. Pick one (or do both).

---

## Option A — Use it as a Claude Code *Agent Skill* (fastest)

The repo already ships a cross-compatible `SKILL.md`, so Claude Code can use Folka as a design skill — it will read the brand rules and produce in-brand HTML or production code on demand.

1. Download this project (zip).
2. Drop the folder into your Claude Code skills directory, renamed to the skill name:
   ```
   ~/.claude/skills/folka-design/        # user-level, all projects
   # or, per-project:
   <your-repo>/.claude/skills/folka-design/
   ```
   The folder must contain `SKILL.md` at its root (it does).
3. In Claude Code: `/folka-design` — or just ask "design X using the Folka brand". Claude reads `readme.md` + tokens + components and builds in-brand.

Good for: generating new screens, mocks, marketing pages, and decks that match the brand — without hand-maintaining a component library.

---

## Option B — Turn it into a real codebase (component library + app)

The HTML/JSX here are **design references** — accurate prototypes of the intended look and behavior, not production code to ship as-is. The job is to **recreate them in a real environment** using its own patterns. Recommended target: **Vite + React + TypeScript**, tokens as CSS custom properties (or a Tailwind theme).

### 1. Tokens → CSS / Tailwind
- `styles.css` is the single entry point; it `@import`s everything in `tokens/`.
- `tokens/colors.css`, `typography.css`, `spacing.css`, `radii-shadows.css` are plain `:root` custom properties — copy them straight into your app's global CSS. They already use semantic aliases (`--surface-card`, `--text-heading`, `--border-subtle`) so component code stays stable if the palette changes.
- To use Tailwind instead, map each token in `tailwind.config` (`theme.extend.colors`, `borderRadius`, `boxShadow`, `fontFamily`). Keep the token names.
- Fonts: **Hanken Grotesk** + **JetBrains Mono**, currently loaded from Google Fonts in `tokens/fonts.css`. For production, self-host the `.woff2` files and replace the `@import` with `@font-face` rules.

### 2. Components → your framework
- `components/<group>/<Name>.jsx` are the reference implementations. Each has a sibling `<Name>.d.ts` (the props contract) and `<Name>.prompt.md` (usage + variants). These `.d.ts` files are your spec — port them verbatim as the public API.
- They use **inline styles referencing CSS variables** for portability. In a real lib you'll likely move these to CSS modules / Tailwind classes, but keep the same prop names, variants, sizes, and states documented in the `.d.ts`.
- Groups: `core/` (Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch, FormField), `feedback/` (Badge, StatusPill, Avatar, ProgressBar, Toast, Tooltip), `layout/` (Card, CardHeader, Tabs, Dialog), `hr/` (EmployeeRow, TimeEntry, ChecklistItem, CandidateCard, EquipmentRow).
- Icons: **Lucide** (`lucide-react` in a real app). Outline only, `currentColor`. No emoji.

### 3. Screens → routes/pages
- `ui_kits/web-app/` — the HR admin app. `data.js` is fake seed data (replace with your API). `shell.jsx` (Sidebar/Topbar), `screens.jsx` (six views), `App.jsx` (routing + dialog + toasts). Recreate each screen as a route; swap fake data for real queries.
- `ui_kits/mobile-app/` — employee time-tracking app (React Native / Expo or responsive web).
- `ui_kits/marketing/` — marketing homepage (Next.js / Astro). This one is plain HTML/CSS, easy to port.
- `slides/` — branded deck template (optional; for sales/investor decks).

### 4. Suggested real structure
```
src/
  styles/tokens.css        ← from tokens/*
  components/              ← ported from components/*  (+ Storybook)
  features/
    time-approval/         ← from ui_kits/web-app screens
    employees/
    onboarding/
    recruitment/
    equipment/
  pages/ or app/           ← routing
```

### 5. Fidelity
**High-fidelity.** Colors, type, spacing, radii, shadows, and interactions are final and intentional — recreate pixel-accurately. Exact values live in `tokens/` and are documented in `readme.md` (VISUAL FOUNDATIONS) and each component's `.d.ts` / `.prompt.md`.

---

## Where everything is
- `readme.md` — full brand guide (content voice, visual foundations, iconography, index). **Read this first.**
- `SKILL.md` — Agent-Skill manifest (Option A).
- `styles.css` + `tokens/` — design tokens.
- `assets/` — `folka-logo.svg`, `folka-logo-white.svg`, `folka-mark.svg`.
- `components/` — React primitives with `.d.ts` + `.prompt.md` specs.
- `ui_kits/` — web-app, mobile-app, marketing recreations.
- `slides/` — deck template.
- `guidelines/` — foundation specimen cards.

## Notes
- Folka is an **original brand** built for this project (inspired by the Danish HR/time-tracking category), so all assets are yours to use and re-theme.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` are generated artifacts — don't hand-edit; regenerate from sources.
- Fonts are CDN-loaded today; self-host before production.
