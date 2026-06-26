import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Icon node before the field. */
  leftIcon?: React.ReactNode;
  /** Icon node after the field. */
  rightIcon?: React.ReactNode;
  /** Show error styling (red border + ring). @default false */
  invalid?: boolean;
}

/** Single-line text input with brand focus ring and optional adornments. */
export function Input({
  size = 'md', leftIcon, rightIcon, invalid = false, disabled = false,
  style, value, onChange, type = 'text', ...rest
}: InputProps) {
  const [focus, setFocus] = React.useState(false);
  const heights = { sm: 34, md: 42, lg: 48 };
  const h = heights[size] || heights.md;
  const borderColor = invalid ? 'var(--danger)' : focus ? 'var(--green-600)' : 'var(--border-strong)';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      background: disabled ? 'var(--sand-100)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
      padding: `0 12px`, height: h,
      boxShadow: focus ? (invalid ? '0 0 0 3px rgba(210,84,60,.22)' : 'var(--focus-ring)') : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      opacity: disabled ? 0.7 : 1, ...style,
    }}>
      {leftIcon && <span style={{ display: 'flex', color: 'var(--text-muted)', flex: 'none' }}>{leftIcon}</span>}
      <input
        type={type} value={value} onChange={onChange} disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
          fontFamily: 'var(--font-sans)', fontSize: size === 'sm' ? 13 : 15,
          color: 'var(--text-heading)', height: '100%',
        }}
        {...rest}
      />
      {rightIcon && <span style={{ display: 'flex', color: 'var(--text-muted)', flex: 'none' }}>{rightIcon}</span>}
    </div>
  );
}
