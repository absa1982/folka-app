import React from 'react';

const TONES = {
  success: { accent: 'var(--success)', icon: 'check-circle' },
  info:    { accent: 'var(--info)', icon: 'info' },
  warning: { accent: 'var(--warning)', icon: 'alert-triangle' },
  danger:  { accent: 'var(--danger)', icon: 'alert-circle' },
};

/**
 * Toast notification card. Presentational — render in a fixed corner stack.
 * Pass `iconNode` (e.g. a Lucide icon) or rely on text only.
 */
export function Toast({ title, message, tone = 'success', iconNode, onClose, style }) {
  const t = TONES[tone] || TONES.success;
  return (
    <div role="status" style={{
      display: 'flex', alignItems: 'flex-start', gap: 12,
      background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-subtle)',
      borderLeft: `3px solid ${t.accent}`, padding: '14px 16px',
      minWidth: 280, maxWidth: 400, ...style,
    }}>
      {iconNode && <span style={{ color: t.accent, display: 'flex', flex: 'none', marginTop: 1 }}>{iconNode}</span>}
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-heading)' }}>{title}</div>}
        {message && <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: title ? 2 : 0 }}>{message}</div>}
      </div>
      {onClose && (
        <button onClick={onClose} aria-label="Dismiss" style={{
          border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-subtle)',
          fontSize: 18, lineHeight: 1, padding: 0, flex: 'none',
        }}>×</button>
      )}
    </div>
  );
}
