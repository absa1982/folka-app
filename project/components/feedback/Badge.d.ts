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

/** Small rounded label for counts, categories and metadata. */
export function Badge(props: BadgeProps): React.JSX.Element;
