Square icon-only button for toolbars, table-row actions and headers; always pass an `aria-label`.

```jsx
<IconButton icon={icon('more-horizontal')} aria-label="More" />
<IconButton icon={icon('plus')} variant="brand" aria-label="Add" />
<IconButton icon={icon('pencil')} variant="outline" size="sm" aria-label="Edit" />
```

- `variant`: `ghost` (default) · `outline` · `brand` (green).
- `size`: `sm` (32) · `md` (38) · `lg` (44).
