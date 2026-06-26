Onboarding/offboarding checklist row — toggleable check, task label (strikes through when done), due date and assignee avatar.

```jsx
<ChecklistItem label="Sign contract" done onToggle={t} due="28/2" assignee="Anna M" />
<ChecklistItem label="Order laptop" due="1/3" overdue assignee="Lars F" onToggle={t} />
```

- `overdue` turns the due date red while the task is still open.
- Stack inside a `Card` for a full checklist.
