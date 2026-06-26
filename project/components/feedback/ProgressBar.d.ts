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
export function ProgressBar(props: ProgressBarProps): React.JSX.Element;
