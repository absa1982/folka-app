import * as React from 'react';

export interface ProgressBarProps {
  /** Current value. @default 0 */
  value?: number;
  /** @default 100 */
  max?: number;
  /** @default 'brand' */
  tone?: 'brand' | 'accent' | 'warning' | 'neutral';
  /** Show a trailing % label. @default false */
  showLabel?: boolean;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

/** Slim rounded progress bar for onboarding completion and week progress. */
export function ProgressBar({ value = 0, max = 100, tone = 'brand', showLabel = false, size = 'md', style }: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const colors = { brand: 'var(--green-500)', accent: 'var(--clay-500)', warning: 'var(--warning)', neutral: 'var(--ink-400)' };
  const h = size === 'sm' ? 6 : size === 'lg' ? 12 : 8;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, ...style }}>
      <div style={{ flex: 1, height: h, background: 'var(--sand-200)', borderRadius: 999, overflow: 'hidden' }}>
        <div style={{
          width: pct + '%', height: '100%', background: colors[tone] || colors.brand,
          borderRadius: 999, transition: 'width var(--dur-slow) var(--ease-out)',
        }} />
      </div>
      {showLabel && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', minWidth: 36, textAlign: 'right' }}>
          {Math.round(pct)}%
        </span>
      )}
    </div>
  );
}
