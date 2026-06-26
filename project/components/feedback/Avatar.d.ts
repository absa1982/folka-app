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

/** Round avatar showing a photo or initials on a warm on-brand tint. */
export function Avatar(props: AvatarProps): React.JSX.Element;
