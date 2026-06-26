One day's time registration row — mono clock range (or leave type) plus the day's total hours; the core of the week-approval view.

```jsx
<TimeEntry day="Man" date="24/2" clockIn="08:30" clockOut="16:15" hours="7,5 t" />
<TimeEntry day="Tir" date="25/2" type="holiday" hours="—" />
<TimeEntry day="Ons" date="26/2" type="sick" hours="—" note="Sick child" />
```

- `type`: work · holiday (Ferie) · sick (Syg) · absence (Fravær); leave types tint the row.
- Hours and clock times use tabular mono numerals.
