import React from 'react';

const SIZES = {
  sm: { fontSize: 13, padding: '7px 14px', height: 34, gap: 6 },
  md: { fontSize: 15, padding: '10px 18px', height: 42, gap: 8 },
  lg: { fontSize: 16, padding: '13px 24px', height: 50, gap: 9 },
};

const VARIANTS = {
  primary: {
    background: 'var(--green-600)', color: 'var(--text-on-brand)',
    border: '1px solid var(--green-600)', boxShadow: 'var(--shadow-brand)',
    '--hover-bg': 'var(--green-700)',
  },
  secondary: {
    background: 'var(--surface-card)', color: 'var(--text-heading)',
    border: '1px solid var(--border-strong)', boxShadow: 'var(--shadow-xs)',
    '--hover-bg': 'var(--sand-100)',
  },
  ghost: {
    background: 'transparent', color: 'var(--text-heading)',
    border: '1px solid transparent', boxShadow: 'none',
    '--hover-bg': 'var(--sand-100)',
  },
  danger: {
    background: 'var(--danger)', color: '#fff',
    border: '1px solid var(--danger)', boxShadow: 'none',
    '--hover-bg': 'var(--clay-700)',
  },
};

/**
 * Folka primary button. Brand-green by default; sentence-case labels.
 */
export function Button({
  children, variant = 'primary', size = 'md', leftIcon, rightIcon,
  fullWidth = false, disabled = false, type = 'button', onClick, style, ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: s.gap, fontFamily: 'var(--font-sans)', fontWeight: 600,
        fontSize: s.fontSize, lineHeight: 1, padding: s.padding, minHeight: s.height,
        width: fullWidth ? '100%' : 'auto',
        borderRadius: 'var(--radius-md)', cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
        background: hover && !disabled ? v['--hover-bg'] : v.background,
        color: v.color, border: v.border, boxShadow: v.boxShadow,
        opacity: disabled ? 0.5 : 1,
        transform: active && !disabled ? 'translateY(1px)' : 'none',
        whiteSpace: 'nowrap', ...style,
      }}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
