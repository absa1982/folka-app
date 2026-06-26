import * as React from 'react';

export interface AvatarProps {
  /** Full name — used for initials and the deterministic tint. */
  name?: string;
  /** Optional photo URL; falls back to initials. */
  src?: string;
  /** @default 'md' */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

const SIZES = { xs: 24, sm: 32, md: 40, lg: 56 };
// Warm, on-brand initial colors (no random hues)
const PALETTE: Array<[string, string]> = [
  ['var(--green-100)', 'var(--green-700)'],
  ['var(--clay-100)', 'var(--clay-700)'],
  ['var(--info-bg)', 'var(--info)'],
  ['var(--warning-bg)', 'var(--warning)'],
  ['var(--sand-200)', 'var(--ink-700)'],
];

function initials(name = '') {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || '') + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}

/** Round avatar — shows photo if `src`, else initials on a warm tint. */
export function Avatar({ name = '', src, size = 'md', style }: AvatarProps) {
  const dim = SIZES[size] || SIZES.md;
  const idx = (name.charCodeAt(0) || 0) % PALETTE.length;
  const [bg, fg] = PALETTE[idx];
  return (
    <span
      title={name}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dim, height: dim, borderRadius: '50%', overflow: 'hidden',
        background: bg, color: fg, flex: 'none',
        fontFamily: 'var(--font-sans)', fontWeight: 700,
        fontSize: dim * 0.4, lineHeight: 1, userSelect: 'none', ...style,
      }}
    >
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : initials(name)}
    </span>
  );
}
