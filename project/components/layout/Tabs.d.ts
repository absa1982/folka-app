import * as React from 'react';

export interface TabItem {
  id: string;
  label: React.ReactNode;
  /** Optional count badge. */
  badge?: number | string;
}

export interface TabsProps {
  tabs: TabItem[];
  /** id of the active tab. */
  value: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}

/** Underline tab bar with active green indicator and optional count badges. */
export function Tabs(props: TabsProps): React.JSX.Element;
