import React from 'react';
import { Avatar } from '../feedback/Avatar.jsx';
import { StatusPill } from '../feedback/StatusPill.jsx';

/** A row in the employee list — avatar, name, role, department, status, actions. */
export function EmployeeRow({ name, role, department, status = 'active', avatarSrc, actions, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '12px 16px', background: hover ? 'var(--sand-50)' : 'var(--surface-card)',
        borderBottom: '1px solid var(--border-subtle)', cursor: onClick ? 'pointer' : 'default',
        transition: 'background var(--dur-fast)', ...style,
      }}
    >
      <Avatar name={name} src={avatarSrc} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-heading)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</div>
        <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{role}</div>
      </div>
      {department && (
        <span style={{ fontSize: 13, color: 'var(--text-muted)', width: 120, flex: 'none' }}>{department}</span>
      )}
      <div style={{ width: 110, flex: 'none' }}><StatusPill status={status} /></div>
      {actions && <div style={{ flex: 'none', display: 'flex', gap: 4 }}>{actions}</div>}
    </div>
  );
}
