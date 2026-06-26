Single-line text input with brand green focus ring; supports icon adornments and an error state.

```jsx
<Input placeholder="Search employees" leftIcon={icon('search')} />
<Input value={email} onChange={e => setEmail(e.target.value)} type="email" />
<Input invalid placeholder="Required" />
```

- `size`: `sm` · `md` (default) · `lg`.
- `invalid` turns the border + ring red. Pair with `FormField` for label/help/error text.
