import * as React from 'react';

export interface TooltipProps {
  /** Tooltip text. */
  label: React.ReactNode;
  /** @default 'top' */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /** Trigger element. */
  children: React.ReactNode;
  style?: React.CSSProperties;
}

/** Dark hover/focus tooltip bubble wrapping a trigger element. */
export function Tooltip(props: TooltipProps): React.JSX.Element;
