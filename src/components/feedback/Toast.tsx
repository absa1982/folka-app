import * as React from 'react';

export interface ToastProps {
  title?: React.ReactNode;
  message?: React.ReactNode;
  /** @default 'success' */
  tone?: 'success' | 'info' | 'warning' | 'danger';
  /** Optional leading icon node (e.g. Lucide), tinted to the tone. */
  iconNode?: React.ReactNode;
  /** Show a dismiss × and handle click. */
  onClose?: () => void;
  style?: React.CSSProperties;
}

const TONES = {
  success: { accent: 'var(--success)' },
  info:    { accent: 'var(--info)' },
  warning: { accent: 'var(--warning)' },
  danger:  { accent: 'var(--danger)' },
};

/** Toast notification card; render in a fixed corner stack. */
export function Toast({ title, message, tone = 'success', iconNode, onClose, style }: ToastProps) {
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
