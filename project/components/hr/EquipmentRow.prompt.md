Equipment register row — type icon, item name, serial, assigned employee and status; the building block of the equipment view.

```jsx
<EquipmentRow name='MacBook Pro 14"' category="Laptop" serial="C02XL0"
  assignedTo="Anna Mortensen" status="assigned" iconNode={icon('laptop')} />
<EquipmentRow name="Office key #12" category="Key" status="available" iconNode={icon('key-round')} />
```

- `status`: assigned (green) · available (neutral) · repair (amber).
- Pass a Lucide icon as `iconNode`.
