import * as React from 'react';
import { CandidateCard } from '../../../components/hr/CandidateCard';
import { FolkaData } from '../../../data/folkaData';

export function RecruitmentScreen() {
  const D = FolkaData;
  const cols = [
    { id: 'new', label: 'Nye', items: D.candidates.new },
    { id: 'screening', label: 'Screening', items: D.candidates.screening },
    { id: 'interview', label: 'Samtale', items: D.candidates.interview },
    { id: 'offer', label: 'Tilbud', items: D.candidates.offer },
  ];
  return (
    <div style={{ padding: 32 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, alignItems: 'start' }}>
        {cols.map((c) => (
          <div key={c.id} style={{ background: 'var(--surface-sunken)', borderRadius: 'var(--radius-lg)', padding: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 6px 12px' }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-heading)' }}>{c.label}</span>
              <span style={{ fontSize: 12, fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{c.items.length}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {c.items.map((cand) => <CandidateCard key={cand.name} {...cand} appliedFor={cand.applied} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
