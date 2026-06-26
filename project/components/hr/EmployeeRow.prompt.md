Employee list row composing Avatar + StatusPill; the building block of the people table.

```jsx
<EmployeeRow name="Anna Mortensen" role="Designer" department="Udvikling" status="active"
  actions={<IconButton icon={icon('more-horizontal')} aria-label="More" />} onClick={openProfile} />
```

- `status`: active · invited · draft · pending.
- Stack rows inside a `Card` with `padding={0}` for a clean table.
