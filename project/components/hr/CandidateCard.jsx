import React from 'react';
import { Avatar } from '../feedback/Avatar.jsx';
import { Badge } from '../feedback/Badge.jsx';

/** Draggable-looking candidate card for the recruitment board. */
export function CandidateCard({ name, role, appliedFor, tags = [], rating, isNew = false, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)', padding: 14,
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        transform: hover ? 'translateY(-1px)' : 'none',
        transition: 'box-shadow var(--dur-base), transform var(--dur-base)',
        cursor: onClick ? 'pointer' : 'default', ...style,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <Avatar name={name} size="sm" />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-heading)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</div>
          {role && <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{role}</div>}
        </div>
        {isNew && <Badge tone="accent" size="sm">New</Badge>}
      </div>
      {appliedFor && <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: tags.length ? 10 : 0 }}>Applied for <span style={{ color: 'var(--text-body)', fontWeight: 600 }}>{appliedFor}</span></div>}
      {tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {tags.map((t, i) => <Badge key={i} tone="neutral" size="sm">{t}</Badge>)}
        </div>
      )}
      {rating != null && (
        <div style={{ display: 'flex', gap: 2, marginTop: 10 }}>
          {[1,2,3,4,5].map(n => (
            <span key={n} style={{ color: n <= rating ? 'var(--clay-500)' : 'var(--sand-300)', fontSize: 14 }}>★</span>
          ))}
        </div>
      )}
    </div>
  );
}
