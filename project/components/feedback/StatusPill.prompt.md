Rounded status pill with a leading colored dot — the standard way Folka shows time-approval, employee and task state.

```jsx
<StatusPill status="approved" />
<StatusPill status="pending" label="Afventer" />
<StatusPill status="overdue" />
```

- `status`: approved · pending · overdue · draft · active · invited.
- `label` overrides the English default (use for Danish copy).
