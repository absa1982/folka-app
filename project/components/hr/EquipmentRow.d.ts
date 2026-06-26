import * as React from 'react';

export interface EquipmentRowProps {
  name: string;
  /** Category label, e.g. "Laptop". */
  category?: React.ReactNode;
  /** Serial / asset tag (mono). */
  serial?: React.ReactNode;
  /** Employee the item is assigned to. */
  assignedTo?: string;
  /** Icon node for the item type (Lucide). */
  iconNode?: React.ReactNode;
  /** @default 'assigned' */
  status?: 'assigned' | 'available' | 'repair';
  actions?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Equipment register row — item, serial, assignee and status. */
export function EquipmentRow(props: EquipmentRowProps): React.JSX.Element;
