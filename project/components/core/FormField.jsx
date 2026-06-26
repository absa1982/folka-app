import React from 'react';

/** Field wrapper: label, optional hint, the control (children), and error text. */
export function FormField({ label, htmlFor, hint, error, required = false, children, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-field)', ...style }}>
      {label && (
        <label htmlFor={htmlFor} style={{
          fontSize: 13, fontWeight: 600, color: 'var(--text-heading)', lineHeight: 1.3,
        }}>
          {label}
          {required && <span style={{ color: 'var(--danger)', marginLeft: 3 }}>*</span>}
        </label>
      )}
      {children}
      {error
        ? <span style={{ fontSize: 12, color: 'var(--danger)' }}>{error}</span>
        : hint ? <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{hint}</span> : null}
    </div>
  );
}
