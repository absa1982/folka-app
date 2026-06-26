Checkbox with brand-green checked state; used heavily in onboarding checklists and filter menus.

```jsx
<Checkbox checked={done} onChange={setDone} label="Signed contract" />
```

- `onChange(checked, event)` returns the boolean first.
- Pair multiples in a vertical stack with `gap: var(--space-2)`.
