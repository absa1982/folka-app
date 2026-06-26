import * as React from 'react';

export type Status = 'approved' | 'pending' | 'overdue' | 'draft' | 'active' | 'invited';

export interface StatusPillProps {
  /** @default 'pending' */
  status?: Status;
  /** Override the default label text. */
  label?: React.ReactNode;
  style?: React.CSSProperties;
}

const STATUS: Record<Status, { label: string; bg: string; fg: string; dot: string }> = {
  approved: { label: 'Approved', bg: 'var(--success-bg)', fg: 'var(--success)', dot: 'var(--success)' },
  pending:  { label: 'Pending',  bg: 'var(--warning-bg)', fg: 'var(--warning)', dot: 'var(--warning)' },
  overdue:  { label: 'Overdue',  bg: 'var(--danger-bg)',  fg: 'var(--danger)',  dot: 'var(--danger)' },
  draft:    { label: 'Draft',    bg: 'var(--sand-100)',   fg: 'var(--ink-500)', dot: 'var(--ink-400)' },
  active:   { label: 'Active',   bg: 'var(--green-50)',   fg: 'var(--green-700)', dot: 'var(--green-500)' },
  invited:  { label: 'Invited',  bg: 'var(--info-bg)',    fg: 'var(--info)',    dot: 'var(--info)' },
};

/** Status pill with a leading dot — for time approval, employee and task states. */
export function StatusPill({ status = 'pending', label, style }: StatusPillProps) {
  const s = STATUS[status] || STATUS.pending;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: s.bg, color: s.fg, fontFamily: 'var(--font-sans)',
      fontSize: 12, fontWeight: 600, lineHeight: 1, padding: '5px 10px 5px 8px',
      borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap', ...style,
    }}>
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: s.dot, flex: 'none' }} />
      {label || s.label}
    </span>
  );
}
