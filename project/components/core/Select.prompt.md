Native select styled to match Folka inputs, with a chevron; use `<option>` children.

```jsx
<Select value={dept} onChange={e => setDept(e.target.value)}>
  <option value="">All departments</option>
  <option value="sales">Salg</option>
  <option value="dev">Udvikling</option>
</Select>
```

- `size` and `invalid` mirror Input.
