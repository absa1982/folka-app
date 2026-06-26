import * as React from 'react';
import { Avatar } from '../feedback/Avatar';

export interface ChecklistItemProps {
  label: React.ReactNode;
  done?: boolean;
  onToggle?: () => void;
  /** Assignee name → small avatar. */
  assignee?: string;
  /** Due date string, e.g. "1/3". */
  due?: React.ReactNode;
  /** Show due date in danger color when not done. @default false */
  overdue?: boolean;
  style?: React.CSSProperties;
}

/** Onboarding/offboarding checklist item — checkbox, task, assignee, due date. */
export function ChecklistItem({ label, done = false, onToggle, assignee, due, overdue = false, style }: ChecklistItemProps) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12, padding: '11px 4px',
      borderBottom: '1px solid var(--border-subtle)', ...style,
    }}>
      <button
        type="button" role="checkbox" aria-checked={done} onClick={onToggle}
        style={{
          width: 22, height: 22, flex: 'none', borderRadius: 6, cursor: 'pointer', padding: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: done ? 'var(--green-600)' : 'var(--surface-card)',
          border: `1.5px solid ${done ? 'var(--green-600)' : 'var(--border-strong)'}`,
          transition: 'background var(--dur-fast), border-color var(--dur-fast)',
        }}
      >
        {done && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
      </button>
      <span style={{
        flex: 1, minWidth: 0, fontSize: 14,
        color: done ? 'var(--text-subtle)' : 'var(--text-heading)',
        textDecoration: done ? 'line-through' : 'none',
      }}>{label}</span>
      {due && (
        <span style={{ fontSize: 12, fontWeight: 600, fontFamily: 'var(--font-mono)', color: overdue && !done ? 'var(--danger)' : 'var(--text-muted)' }}>{due}</span>
      )}
      {assignee && <Avatar name={assignee} size="xs" />}
    </div>
  );
}
