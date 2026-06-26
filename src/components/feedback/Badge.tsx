import * as React from 'react';

export type BadgeTone = 'neutral' | 'brand' | 'success' | 'warning' | 'danger' | 'info' | 'accent';

export interface BadgeProps {
  children?: React.ReactNode;
  /** @default 'neutral' */
  tone?: BadgeTone;
  /** @default 'md' */
  size?: 'sm' | 'md';
  /** Optional leading icon node. */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

const TONES: Record<BadgeTone, { bg: string; fg: string }> = {
  neutral: { bg: 'var(--sand-100)', fg: 'var(--ink-700)' },
  brand:   { bg: 'var(--green-50)', fg: 'var(--green-700)' },
  success: { bg: 'var(--success-bg)', fg: 'var(--success)' },
  warning: { bg: 'var(--warning-bg)', fg: 'var(--warning)' },
  danger:  { bg: 'var(--danger-bg)', fg: 'var(--danger)' },
  info:    { bg: 'var(--info-bg)', fg: 'var(--info)' },
  accent:  { bg: 'var(--clay-50)', fg: 'var(--clay-700)' },
};

/** Small rounded label for counts, categories and metadata. */
export function Badge({ children, tone = 'neutral', size = 'md', icon, style }: BadgeProps) {
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
