import * as React from 'react';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Show error styling. @default false */
  invalid?: boolean;
  children?: React.ReactNode;
}

/** Native <select> styled to match Folka inputs, with a chevron affordance. */
export function Select(props: SelectProps): React.JSX.Element;
