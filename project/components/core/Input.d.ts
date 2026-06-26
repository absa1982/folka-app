import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Icon node before the field. */
  leftIcon?: React.ReactNode;
  /** Icon node after the field. */
  rightIcon?: React.ReactNode;
  /** Show error styling (red border + ring). @default false */
  invalid?: boolean;
}

/** Single-line text input with brand focus ring and optional adornments. */
export function Input(props: InputProps): React.JSX.Element;
