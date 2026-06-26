import * as React from 'react';

export interface DialogProps {
  /** Controls visibility. */
  open: boolean;
  /** Called on scrim click, × button, or Escape. */
  onClose?: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Right-aligned footer node (usually buttons). */
  footer?: React.ReactNode;
  /** Max width in px. @default 480 */
  width?: number;
  style?: React.CSSProperties;
}

/** Centered modal dialog with ink scrim, title bar and footer slot. */
export function Dialog(props: DialogProps): React.JSX.Element | null;
