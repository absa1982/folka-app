import * as React from 'react';

export interface EmployeeRowProps {
  name: string;
  role?: React.ReactNode;
  department?: React.ReactNode;
  /** @default 'active' */
  status?: 'active' | 'invited' | 'draft' | 'pending';
  avatarSrc?: string;
  /** Trailing action nodes (IconButtons). */
  actions?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/**
 * One row in the employee list: avatar, name + role, department, status, actions.
 *
 * @startingPoint section="HR" subtitle="Employee list row" viewport="700x70"
 */
export function EmployeeRow(props: EmployeeRowProps): React.JSX.Element;
