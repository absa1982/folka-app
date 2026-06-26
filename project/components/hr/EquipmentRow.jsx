import React from 'react';
import { Avatar } from '../feedback/Avatar.jsx';

/** Equipment register row — item, type, serial, assigned employee. */
export function EquipmentRow({ name, category, serial, assignedTo, iconNode, status = 'assigned', actions, style }) {
  const [hover, setHover] = React.useState(false);
  const statusMeta = {
    assigned:  { label: 'Assigned', color: 'var(--green-700)', bg: 'var(--green-50)' },
    available: { label: 'Available', color: 'var(--ink-500)', bg: 'var(--sand-100)' },
    repair:    { label: 'Repair', color: 'var(--warning)', bg: 'var(--warning-bg)' },
  }[status] || {};
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px',
        background: hover ? 'var(--sand-50)' : 'var(--surface-card)',
        borderBottom: '1px solid var(--border-subtle)', transition: 'background var(--dur-fast)', ...style,
      }}
    >
      <span style={{
        width: 38, height: 38, flex: 'none', borderRadius: 'var(--radius-md)',
        background: 'var(--sand-100)', color: 'var(--text-body)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>{iconNode}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-heading)' }}>{name}</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
          {category}{serial && <span style={{ fontFamily: 'var(--font-mono)', marginLeft: 8 }}>{serial}</span>}
        </div>
      </div>
      <div style={{ width: 150, flex: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
        {assignedTo
          ? <><Avatar name={assignedTo} size="xs" /><span style={{ fontSize: 13, color: 'var(--text-body)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{assignedTo}</span></>
          : <span style={{ fontSize: 13, color: 'var(--text-subtle)' }}>Unassigned</span>}
      </div>
      <span style={{
        flex: 'none', fontSize: 12, fontWeight: 600, padding: '4px 9px', borderRadius: 'var(--radius-pill)',
        color: statusMeta.color, background: statusMeta.bg,
      }}>{statusMeta.label}</span>
      {actions && <div style={{ flex: 'none' }}>{actions}</div>}
    </div>
  );
}
