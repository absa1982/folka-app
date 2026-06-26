White rounded surface card — the primary container across dashboard, lists and marketing. `CardHeader` adds a title/subtitle + action row.

```jsx
<Card>
  <CardHeader title="This week" subtitle="6 of 12 approved" action={<Button size="sm" variant="ghost">View all</Button>} />
  …content…
</Card>
<Card interactive onClick={open}>Clickable card with hover-lift</Card>
```

- Default 24px padding, 14px radius, soft shadow; `interactive` adds a subtle lift on hover.
- No colored left-border accent — that's off-brand.
