import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Primary = brand green. @default 'primary' */
  variant?: ButtonVariant;
  /** @default 'md' */
  size?: ButtonSize;
  /** Icon node rendered before the label (e.g. a Lucide <i>/<svg>). */
  leftIcon?: React.ReactNode;
  /** Icon node rendered after the label. */
  rightIcon?: React.ReactNode;
  /** Stretch to fill container width. @default false */
  fullWidth?: boolean;
  children?: React.ReactNode;
}

/**
 * Folka's primary action button. Sentence-case labels, soft green-tinted
 * shadow on the primary variant, gentle press-settle (no shrink).
 *
 * @startingPoint section="Core" subtitle="Button variants & sizes" viewport="700x180"
 */
export function Button(props: ButtonProps): React.JSX.Element;
