import React from 'react';

const TONES = {
  neutral: { bg: 'var(--sand-100)', fg: 'var(--ink-700)' },
  brand:   { bg: 'var(--green-50)', fg: 'var(--green-700)' },
  success: { bg: 'var(--success-bg)', fg: 'var(--success)' },
  warning: { bg: 'var(--warning-bg)', fg: 'var(--warning)' },
  danger:  { bg: 'var(--danger-bg)', fg: 'var(--danger)' },
  info:    { bg: 'var(--info-bg)', fg: 'var(--info)' },
  accent:  { bg: 'var(--clay-50)', fg: 'var(--clay-700)' },
};

/** Small rounded label for counts, categories and metadata. */
export function Badge({ children, tone = 'neutral', size = 'md', icon, style }) {
  const t = TONES[tone] || TONES.neutral;
  const sm = size === 'sm';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      background: t.bg, color: t.fg,
      fontFamily: 'var(--font-sans)', fontSize: sm ? 11 : 12, fontWeight: 600,
      lineHeight: 1, padding: sm ? '3px 7px' : '4px 9px',
      borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap', ...style,
    }}>
      {icon}{children}
    </span>
  );
}
