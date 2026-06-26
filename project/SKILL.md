---
name: folka-design
description: Use this skill to generate well-branded interfaces and assets for Folka, an original Nordic HR & time-tracking platform (time registration, onboarding/offboarding, employees, equipment, recruitment), either for production or throwaway prototypes/mocks. Contains design guidelines, colors, type, fonts, assets, and a UI kit of components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

Folka is a calm, warm, trustworthy HR-platform brand: spruce-green primary, warm sand neutrals, a clay accent, Hanken Grotesk + JetBrains Mono, soft rounded cards and gentle motion. Voice is plain, reassuring, English-first with Danish product terms; no emoji.

Key files:
- `readme.md` — full brand guide: content fundamentals, visual foundations, iconography, index.
- `styles.css` — global entry point; `@import`s all tokens. Link this one file.
- `tokens/` — colors, typography, spacing, radii/shadows, base, fonts (Hanken Grotesk + JetBrains Mono via Google Fonts).
- `assets/` — `folka-logo.svg`, `folka-logo-white.svg`, `folka-mark.svg`.
- `components/` — React primitives (core, feedback, layout, hr). Each has a `.d.ts` + `.prompt.md`.
- `ui_kits/` — full product recreations: `web-app/` (HR admin), `mobile-app/` (employee time tracking), `marketing/` (homepage).
- `guidelines/` — foundation specimen cards.

Icons: use [Lucide](https://lucide.dev) (outline, currentColor) via CDN. No emoji, no other icon sets.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to design as an expert in this brand. The reusable components are bundled at `_ds_bundle.js` under the global `window.FolkaDesignSystem_*` namespace — see any UI kit `index.html` for load order and usage.

If the user invokes this skill without other guidance, ask what they want to build, ask a few questions, and act as an expert designer who outputs HTML artifacts or production code as needed.
