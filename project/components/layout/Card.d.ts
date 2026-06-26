import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** CSS padding value. @default 'var(--gap-card)' (24px) */
  padding?: string;
  /** Enable hover-lift + pointer cursor. @default false */
  interactive?: boolean;
}

export interface CardHeaderProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Right-aligned action node (button, menu). */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * White rounded surface card — the primary container in Folka.
 *
 * @startingPoint section="Layout" subtitle="Card surface + header" viewport="700x220"
 */
export function Card(props: CardProps): React.JSX.Element;
export function CardHeader(props: CardHeaderProps): React.JSX.Element;
