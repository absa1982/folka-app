Dark hover/focus tooltip wrapping a trigger (often an IconButton); appears on a near-black bubble.

```jsx
<Tooltip label="Approve week">
  <IconButton icon={icon('check')} aria-label="Approve" />
</Tooltip>
```

- `placement`: top (default) · bottom · left · right.
- Keep labels to a few words; the bubble doesn't wrap.
