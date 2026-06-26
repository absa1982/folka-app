import * as React from 'react';

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Optional text label rendered to the right. */
  label?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

/** Checkbox with brand-green checked state and optional inline label. */
export function Checkbox(props: CheckboxProps): React.JSX.Element;
