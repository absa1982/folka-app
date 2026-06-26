import * as React from 'react';

export interface FormFieldProps {
  /** Field label text. */
  label?: React.ReactNode;
  /** id of the control, for the <label for>. */
  htmlFor?: string;
  /** Helper text shown below when there's no error. */
  hint?: React.ReactNode;
  /** Error text — replaces hint and shows in danger color. */
  error?: React.ReactNode;
  /** Append a red asterisk to the label. @default false */
  required?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Vertical label + control + hint/error wrapper for forms. */
export function FormField({ label, htmlFor, hint, error, required = false, children, style }: FormFieldProps) {
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
