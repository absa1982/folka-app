Radio button with brand-green selected state; group options by a shared `name`.

```jsx
<Radio name="plan" value="free" checked={plan==='free'} onChange={setPlan} label="Freemium" />
<Radio name="plan" value="premium" checked={plan==='premium'} onChange={setPlan} label="Premium" />
```

- `onChange(value, event)` returns the option value first.
