import * as React from 'react';

export interface RadioProps {
  checked?: boolean;
  onChange?: (value: string | undefined, e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  name?: string;
  value?: string;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

/** Radio button with brand-green selected state. Group by shared `name`. */
export function Radio(props: RadioProps): React.JSX.Element;
