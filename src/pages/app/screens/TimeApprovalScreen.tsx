import * as React from 'react';
import { Icon } from '../../../components/Icon';
import { Card } from '../../../components/layout/Card';
import { Button } from '../../../components/core/Button';
import { Avatar } from '../../../components/feedback/Avatar';
import { StatusPill, type Status } from '../../../components/feedback/StatusPill';
import { TimeEntry } from '../../../components/hr/TimeEntry';
import { FolkaData } from '../../../data/folkaData';
import { useAppShell } from '../AppLayout';

export function TimeApprovalScreen() {
  const { showToast } = useAppShell();
  const D = FolkaData;
  const pending = D.employees.filter((e) => e.time !== 'draft');
  const [sel, setSel] = React.useState(pending[0].name);
  const [statuses, setStatuses] = React.useState<Record<string, Status>>(() =>
    Object.fromEntries(pending.map((e) => [e.name, e.time])));
  const cur = pending.find((e) => e.name === sel)!;
  const approve = () => {
    setStatuses((s) => ({ ...s, [sel]: 'approved' }));
    showToast(`${sel}s uge er godkendt`);
  };

  return (
    <div style={{ padding: 32, display: 'grid', gridTemplateColumns: '320px 1fr', gap: 24, alignItems: 'start' }}>
      <Card padding="0">
        <div style={{ padding: '16px 16px 8px' }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-heading)' }}>Uge 9 · 24–28 feb</div>
        </div>
        {pending.map((e) => (
          <button key={e.name} onClick={() => setSel(e.name)} style={{
            display: 'flex', alignItems: 'center', gap: 12, width: '100%', textAlign: 'left',
            padding: '11px 16px', border: 'none', borderLeft: `3px solid ${sel === e.name ? 'var(--green-600)' : 'transparent'}`,
            background: sel === e.name ? 'var(--green-50)' : 'transparent', cursor: 'pointer',
            borderBottom: '1px solid var(--border-subtle)',
          }}>
            <Avatar name={e.name} size="sm" />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-heading)' }}>{e.name}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{e.hours}</div>
            </div>
            <StatusPill status={statuses[e.name]} />
          </button>
        ))}
      </Card>

      <Card padding="0">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '20px 24px', borderBottom: '1px solid var(--border-subtle)' }}>
          <Avatar name={cur.name} size="lg" />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 19, fontWeight: 700, color: 'var(--text-heading)' }}>{cur.name}</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{cur.role} · {cur.dept}</div>
          </div>
          <StatusPill status={statuses[sel]} />
        </div>
        <div>
          {D.week.map((d) => <TimeEntry key={d.day} {...d} />)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', background: 'var(--sand-50)' }}>
          <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>I alt denne uge</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 700, color: 'var(--text-heading)' }}>{cur.hours}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, padding: '16px 24px', borderTop: '1px solid var(--border-subtle)' }}>
          <Button variant="secondary" leftIcon={<Icon name="message-square" size={15} />}>Bed om rettelse</Button>
          <Button onClick={approve} disabled={statuses[sel] === 'approved'} leftIcon={<Icon name="check" size={16} />}>
            {statuses[sel] === 'approved' ? 'Godkendt' : 'Godkend uge'}
          </Button>
        </div>
      </Card>
    </div>
  );
}
