import React from 'react';

/** Multi-line text input matching Input styling. */
export function Textarea({ rows = 4, invalid = false, disabled = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = invalid ? 'var(--danger)' : focus ? 'var(--green-600)' : 'var(--border-strong)';
  return (
    <textarea
      rows={rows} disabled={disabled}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{
        width: '100%', resize: 'vertical', fontFamily: 'var(--font-sans)', fontSize: 15,
        color: 'var(--text-heading)', lineHeight: 'var(--lh-normal)',
        background: disabled ? 'var(--sand-100)' : 'var(--surface-card)',
        border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-md)', padding: '10px 12px',
        outline: 'none',
        boxShadow: focus ? (invalid ? '0 0 0 3px rgba(210,84,60,.22)' : 'var(--focus-ring)') : 'none',
        transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)', ...style,
      }}
      {...rest}
    />
  );
}
