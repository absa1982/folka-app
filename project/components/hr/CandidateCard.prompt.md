Candidate card for the recruitment board — avatar, name, position applied for, tags and an optional star rating.

```jsx
<CandidateCard name="Mette Bjerg" role="Frontend dev" appliedFor="Designer"
  tags={['Figma', 'React']} rating={4} isNew onClick={open} />
```

- Place several in vertical kanban columns (New · Screening · Interview · Offer).
- `isNew` adds a clay "New" badge; rating renders clay stars.
