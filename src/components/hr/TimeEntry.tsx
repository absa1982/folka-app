import * as React from 'react';

export interface TimeEntryProps {
  /** Weekday label, e.g. "Man". */
  day: string;
  /** Date in mono, e.g. "24/2". */
  date?: string;
  clockIn?: string;
  clockOut?: string;
  /** Total hours string, e.g. "7,5 t". */
  hours: string;
  /** @default 'work' */
  type?: 'work' | 'holiday' | 'sick' | 'absence';
  /** Short note shown after the time range. */
  note?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * One day's time entry — weekday, clock range, total hours, type & status.
 */
const TYPE_META = {
  work:    { label: 'Work', color: 'var(--text-heading)', tint: 'transparent' },
  holiday: { label: 'Ferie', color: 'var(--info)', tint: 'var(--info-bg)' },
  sick:    { label: 'Syg', color: 'var(--warning)', tint: 'var(--warning-bg)' },
  absence: { label: 'Fravær', color: 'var(--ink-500)', tint: 'var(--sand-100)' },
};

export function TimeEntry({ day, date, clockIn, clockOut, hours, type = 'work', note, style }: TimeEntryProps) {
  const meta = TYPE_META[type] || TYPE_META.work;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px',
      background: meta.tint === 'transparent' ? 'var(--surface-card)' : meta.tint,
      borderBottom: '1px solid var(--border-subtle)', ...style,
    }}>
      <div style={{ width: 56, flex: 'none' }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-heading)' }}>{day}</div>
        {date && <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{date}</div>}
      </div>
      <div style={{ flex: 1, minWidth: 0, fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-body)' }}>
        {type === 'work'
          ? <span>{clockIn} – {clockOut}</span>
          : <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: meta.color }}>{meta.label}</span>}
        {note && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)', marginLeft: 10 }}>{note}</span>}
      </div>
      <div style={{
        flex: 'none', fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 15,
        fontVariantNumeric: 'tabular-nums', color: 'var(--text-heading)',
      }}>{hours}</div>
    </div>
  );
}
