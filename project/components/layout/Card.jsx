import React from 'react';

/** White surface card — the primary container in Folka. Optional hover-lift. */
export function Card({ children, padding = 'var(--gap-card)', interactive = false, style, onClick, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)', padding,
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        cursor: interactive ? 'pointer' : 'default',
        transform: hover ? 'translateY(-1px)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

/** Optional header row for a Card: title + optional action node. */
export function CardHeader({ title, subtitle, action, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 'var(--space-4)', ...style }}>
      <div>
        <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-heading)' }}>{title}</div>
        {subtitle && <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{subtitle}</div>}
      </div>
      {action}
    </div>
  );
}
