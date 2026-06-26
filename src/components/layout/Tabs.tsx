import * as React from 'react';

export interface TabItem {
  id: string;
  label: React.ReactNode;
  /** Optional count badge. */
  badge?: number | string;
}

export interface TabsProps {
  tabs: TabItem[];
  /** id of the active tab. */
  value: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}

/** Underline tab bar with active green indicator and optional count badges. */
export function Tabs({ tabs = [], value, onChange, style }: TabsProps) {
  return (
    <div role="tablist" style={{
      display: 'flex', gap: 4, borderBottom: '1px solid var(--border-subtle)', ...style,
    }}>
      {tabs.map((t) => {
        const active = t.id === value;
        return (
          <button
            key={t.id} role="tab" aria-selected={active}
            onClick={() => onChange && onChange(t.id)}
            style={{
              position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 7,
              border: 'none', background: 'transparent', cursor: 'pointer',
              fontFamily: 'var(--font-sans)', fontSize: 14,
              fontWeight: active ? 700 : 500,
              color: active ? 'var(--text-heading)' : 'var(--text-muted)',
              padding: '11px 12px 13px', marginBottom: -1,
              borderBottom: `2px solid ${active ? 'var(--green-600)' : 'transparent'}`,
              transition: 'color var(--dur-fast)',
            }}
          >
            {t.label}
            {t.badge != null && (
              <span style={{
                fontSize: 11, fontWeight: 700, fontFamily: 'var(--font-mono)',
                background: active ? 'var(--green-50)' : 'var(--sand-100)',
                color: active ? 'var(--green-700)' : 'var(--text-muted)',
                borderRadius: 999, padding: '1px 7px',
              }}>{t.badge}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
