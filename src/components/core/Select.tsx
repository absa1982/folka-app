import * as React from 'react';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Show error styling. @default false */
  invalid?: boolean;
  children?: React.ReactNode;
}

/** Native <select> styled to match Folka inputs, with a chevron affordance. */
export function Select({ size = 'md', invalid = false, disabled = false, children, style, ...rest }: SelectProps) {
  const [focus, setFocus] = React.useState(false);
  const heights = { sm: 34, md: 42, lg: 48 };
  const h = heights[size] || heights.md;
  const borderColor = invalid ? 'var(--danger)' : focus ? 'var(--green-600)' : 'var(--border-strong)';
  return (
    <div style={{ position: 'relative', display: 'inline-flex', width: '100%' }}>
      <select
        disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          appearance: 'none', WebkitAppearance: 'none', width: '100%', height: h,
          fontFamily: 'var(--font-sans)', fontSize: size === 'sm' ? 13 : 15,
          color: 'var(--text-heading)', cursor: disabled ? 'not-allowed' : 'pointer',
          background: disabled ? 'var(--sand-100)' : 'var(--surface-card)',
          border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
          padding: '0 36px 0 12px', outline: 'none',
          boxShadow: focus ? 'var(--focus-ring)' : 'none',
          transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)', ...style,
        } as React.CSSProperties}
        {...rest}
      >
        {children}
      </select>
      <span aria-hidden="true" style={{
        position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
        pointerEvents: 'none', color: 'var(--text-muted)', fontSize: 12, lineHeight: 0,
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </span>
    </div>
  );
}
