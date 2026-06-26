Toast notification card with a tone-colored left accent; render in a fixed corner stack and auto-dismiss in app code.

```jsx
<Toast tone="success" title="Week approved" message="Anna's hours are locked for payroll." onClose={dismiss} />
```

- `tone`: success (default) · info · warning · danger.
- Presentational only — positioning, stacking and timers live in your app.
