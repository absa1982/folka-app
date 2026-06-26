Centered modal dialog with an ink scrim, title bar and footer button slot; closes on scrim click, ×, or Escape.

```jsx
<Dialog open={open} onClose={close} title="Add employee"
  footer={<><Button variant="ghost" onClick={close}>Cancel</Button><Button onClick={save}>Add</Button></>}>
  <FormField label="Full name"><Input /></FormField>
</Dialog>
```

- Returns `null` when `open` is false — always mount it; toggle `open`.
- `width` caps the panel; content scrolls past 90vh.
