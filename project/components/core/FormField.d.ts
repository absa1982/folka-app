import * as React from 'react';

export interface FormFieldProps {
  /** Field label text. */
  label?: React.ReactNode;
  /** id of the control, for the <label for>. */
  htmlFor?: string;
  /** Helper text shown below when there's no error. */
  hint?: React.ReactNode;
  /** Error text — replaces hint and shows in danger color. */
  error?: React.ReactNode;
  /** Append a red asterisk to the label. @default false */
  required?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Vertical label + control + hint/error wrapper for forms. */
export function FormField(props: FormFieldProps): React.JSX.Element;
