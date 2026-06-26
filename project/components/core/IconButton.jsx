import React from 'react';

const SIZES = { sm: 32, md: 38, lg: 44 };

/**
 * Square icon-only button. Provide an aria-label for accessibility.
 */
export function IconButton({
  icon, size = 'md', variant = 'ghost', disabled = false,
  'aria-label': ariaLabel, onClick, style, ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: { background: hover ? 'var(--sand-100)' : 'transparent', color: 'var(--text-body)', border: '1px solid transparent' },
    outline: { background: hover ? 'var(--sand-100)' : 'var(--surface-card)', color: 'var(--text-body)', border: '1px solid var(--border-strong)' },
    brand: { background: hover ? 'var(--green-700)' : 'var(--green-600)', color: '#fff', border: '1px solid var(--green-600)' },
  };
  const v = variants[variant] || variants.ghost;
  return (
    <button
      type="button" aria-label={ariaLabel} disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dim, height: dim, borderRadius: 'var(--radius-md)', padding: 0,
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
        transition: 'background var(--dur-fast) var(--ease-out)', ...v, ...style,
      }}
      {...rest}
    >
      {icon}
    </button>
  );
}
