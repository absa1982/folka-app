import * as React from 'react';

export interface ToastProps {
  title?: React.ReactNode;
  message?: React.ReactNode;
  /** @default 'success' */
  tone?: 'success' | 'info' | 'warning' | 'danger';
  /** Optional leading icon node (e.g. Lucide), tinted to the tone. */
  iconNode?: React.ReactNode;
  /** Show a dismiss × and handle click. */
  onClose?: () => void;
  style?: React.CSSProperties;
}

/** Toast notification card; render in a fixed corner stack. */
export function Toast(props: ToastProps): React.JSX.Element;
