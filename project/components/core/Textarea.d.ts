import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Show error styling. @default false */
  invalid?: boolean;
}

/** Multi-line text input; vertically resizable, matches Input. */
export function Textarea(props: TextareaProps): React.JSX.Element;
