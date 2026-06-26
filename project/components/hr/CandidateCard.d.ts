import * as React from 'react';

export interface CandidateCardProps {
  name: string;
  role?: React.ReactNode;
  /** Position applied for. */
  appliedFor?: React.ReactNode;
  /** Skill/source tags. */
  tags?: React.ReactNode[];
  /** 1–5 star rating. */
  rating?: number;
  /** Mark as a new applicant. @default false */
  isNew?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/** Candidate card for the recruitment board (kanban column item). */
export function CandidateCard(props: CandidateCardProps): React.JSX.Element;
