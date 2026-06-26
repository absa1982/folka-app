import * as React from 'react';

export interface DialogProps {
  /** Controls visibility. */
  open: boolean;
  /** Called on scrim click, × button, or Escape. */
  onClose?: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Right-aligned footer node (usually buttons). */
  footer?: React.ReactNode;
  /** Max width in px. @default 480 */
  width?: number;
  style?: React.CSSProperties;
}

/** Centered modal dialog with ink scrim, title bar and footer slot. */
export function Dialog({ open, onClose, title, children, footer, width = 480, style }: DialogProps) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose && onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(24,33,29,0.4)', backdropFilter: 'blur(2px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
        animation: 'folkaFade var(--dur-base) var(--ease-out)',
      }}
    >
      <div
        role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-xl)', width: '100%', maxWidth: width,
          maxHeight: '90vh', overflow: 'auto', ...style,
        }}
      >
        {title && (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
            padding: '20px 24px', borderBottom: '1px solid var(--border-subtle)',
          }}>
            <h3 style={{ fontSize: 19, fontWeight: 700, color: 'var(--text-heading)' }}>{title}</h3>
            <button onClick={onClose} aria-label="Close" style={{
              border: 'none', background: 'transparent', cursor: 'pointer',
              color: 'var(--text-muted)', fontSize: 22, lineHeight: 1, padding: 0,
            }}>×</button>
          </div>
        )}
        <div style={{ padding: '20px 24px' }}>{children}</div>
        {footer && (
          <div style={{
            display: 'flex', justifyContent: 'flex-end', gap: 10,
            padding: '16px 24px', borderTop: '1px solid var(--border-subtle)',
            background: 'var(--sand-50)', borderRadius: '0 0 var(--radius-xl) var(--radius-xl)',
          }}>{footer}</div>
        )}
      </div>
      <style>{`@keyframes folkaFade { from { opacity: 0 } to { opacity: 1 } }`}</style>
    </div>
  );
}
