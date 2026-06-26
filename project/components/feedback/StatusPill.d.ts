import * as React from 'react';

export type Status = 'approved' | 'pending' | 'overdue' | 'draft' | 'active' | 'invited';

export interface StatusPillProps {
  /** @default 'pending' */
  status?: Status;
  /** Override the default label text. */
  label?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Pill with a colored leading dot for work/employee/task states. */
export function StatusPill(props: StatusPillProps): React.JSX.Element;
