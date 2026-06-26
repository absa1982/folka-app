import * as React from 'react';

export interface IconButtonProps {
  /** Icon node (Lucide glyph). */
  icon: React.ReactNode;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** @default 'ghost' */
  variant?: 'ghost' | 'outline' | 'brand';
  /** Accessible label — required for icon-only buttons. */
  'aria-label': string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/** Square icon-only button for toolbars, table rows and headers. */
export function IconButton(props: IconButtonProps): React.JSX.Element;
