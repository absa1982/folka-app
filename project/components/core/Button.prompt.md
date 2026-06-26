Folka's primary action button — brand-green primary, secondary/ghost/danger variants; use for all click actions with sentence-case labels.

```jsx
<Button onClick={save}>Add employee</Button>
<Button variant="secondary" leftIcon={icon('plus')}>Invite</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="danger">Offboard</Button>
```

- `variant`: `primary` (green, default) · `secondary` (white, bordered) · `ghost` (transparent) · `danger` (red).
- `size`: `sm` · `md` (default) · `lg`.
- `leftIcon` / `rightIcon` take a React node — pair with Lucide icons.
- `fullWidth` stretches to container; `disabled` dims to 50%.
- Hover darkens one green step; press settles down 1px. Never use Title Case labels.
