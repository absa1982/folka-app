Underline tab bar with a green active indicator and optional count badges; used to switch views (e.g. feature tabs, candidate stages).

```jsx
const [tab, setTab] = React.useState('all');
<Tabs value={tab} onChange={setTab} tabs={[
  { id: 'all', label: 'All', badge: 42 },
  { id: 'pending', label: 'Pending', badge: 6 },
  { id: 'approved', label: 'Approved' },
]} />
```

- Controlled: pass `value` + `onChange`; render the panel yourself below.
