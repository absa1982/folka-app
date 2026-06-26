import * as React from 'react';
import { Card, CardHeader } from '../../../components/layout/Card';
import { Button } from '../../../components/core/Button';
import { Badge } from '../../../components/feedback/Badge';
import { Avatar } from '../../../components/feedback/Avatar';
import { ProgressBar } from '../../../components/feedback/ProgressBar';
import { ChecklistItem } from '../../../components/hr/ChecklistItem';
import { FolkaData } from '../../../data/folkaData';

export function OnboardingScreen() {
  const [items, setItems] = React.useState(FolkaData.onboarding);
  const done = items.filter((i) => i.done).length;
  const toggle = (idx: number) => setItems((its) => its.map((it, i) => (i === idx ? { ...it, done: !it.done } : it)));
  return (
    <div style={{ padding: 32, display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24, alignItems: 'start' }}>
      <Card padding="0">
        <div style={{ padding: '20px 24px' }}>
          <CardHeader title="Sofie Holm · Marketing intern" subtitle="Starter 1. mar 2026" />
          <ProgressBar value={done} max={items.length} showLabel />
        </div>
        <div style={{ padding: '0 24px 12px' }}>
          {items.map((it, i) => (
            <ChecklistItem key={it.label} label={it.label} done={it.done} due={it.due} overdue={it.overdue} assignee={it.who} onToggle={() => toggle(i)} />
          ))}
        </div>
      </Card>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Card>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-heading)', marginBottom: 10 }}>Skabelon</div>
          <Badge tone="brand">Standard onboarding</Badge>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 12 }}>8 opgaver fordelt på 4 ansvarlige. Tilpas til denne medarbejder.</p>
          <Button variant="secondary" size="sm" style={{ marginTop: 8 }} fullWidth>Rediger skabelon</Button>
        </Card>
        <Card>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-heading)', marginBottom: 10 }}>Ansvarlige</div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['Anna M', 'Lars F', 'Sine H', 'Diana R'].map((n) => <Avatar key={n} name={n} size="sm" />)}
          </div>
        </Card>
      </div>
    </div>
  );
}
