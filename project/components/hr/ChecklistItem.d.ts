import * as React from 'react';

export interface ChecklistItemProps {
  label: React.ReactNode;
  done?: boolean;
  onToggle?: () => void;
  /** Assignee name → small avatar. */
  assignee?: string;
  /** Due date string, e.g. "1/3". */
  due?: React.ReactNode;
  /** Show due date in danger color when not done. @default false */
  overdue?: boolean;
  style?: React.CSSProperties;
}

/** Onboarding/offboarding checklist row — toggle, task, due date, assignee. */
export function ChecklistItem(props: ChecklistItemProps): React.JSX.Element;
