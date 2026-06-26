Wraps a form control with a label, optional hint, and error text in Folka's vertical field layout.

```jsx
<FormField label="Work email" htmlFor="email" required hint="We'll send the welcome link here.">
  <Input id="email" type="email" />
</FormField>
<FormField label="Start date" error="Pick a date in the future.">
  <Input id="d" invalid type="date" />
</FormField>
```

- `error` replaces `hint` and renders red; set the control's `invalid` too.
