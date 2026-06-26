Round avatar — renders a photo when `src` is set, otherwise initials on a warm, deterministic on-brand tint (no random rainbow colors).

```jsx
<Avatar name="Anna Mortensen" />
<Avatar name="Lars Frank" src="/people/lars.jpg" size="lg" />
```

- `size`: xs (24) · sm (32) · md (40) · lg (56).
- Tint is derived from the name so the same person is always the same color.
