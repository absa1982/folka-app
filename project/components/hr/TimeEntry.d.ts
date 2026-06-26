import * as React from 'react';

export interface TimeEntryProps {
  /** Weekday label, e.g. "Man". */
  day: string;
  /** Date in mono, e.g. "24/2". */
  date?: string;
  clockIn?: string;
  clockOut?: string;
  /** Total hours string, e.g. "7,5 t". */
  hours: string;
  /** @default 'work' */
  type?: 'work' | 'holiday' | 'sick' | 'absence';
  /** Short note shown after the time range. */
  note?: React.ReactNode;
  style?: React.CSSProperties;
}

/** One day's time registration row — clock range or leave type + total hours. */
export function TimeEntry(props: TimeEntryProps): React.JSX.Element;
