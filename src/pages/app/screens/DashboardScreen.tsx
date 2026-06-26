import * as React from 'react';
import { Icon } from '../../../components/Icon';
import { Card, CardHeader } from '../../../components/layout/Card';
import { Button } from '../../../components/core/Button';
import { IconButton } from '../../../components/core/IconButton';
import { Avatar } from '../../../components/feedback/Avatar';
import { ProgressBar } from '../../../components/feedback/ProgressBar';
import { EmployeeRow } from '../../../components/hr/EmployeeRow';
import { FolkaData } from '../../../data/folkaData';

const TONE_BG: Record<string, string> = { brand: 'var(--green-50)', warning: 'var(--warning-bg)', info: 'var(--info-bg)', success: 'var(--success-bg)' };
const TONE_FG: Record<string, string> = { brand: 'var(--green-700)', warning: 'var(--warning)', info: 'var(--info)', success: 'var(--success)' };

export function DashboardScreen() {
  const D = FolkaData;
  return (
    <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {D.metrics.map((m) => (
          <Card key={m.label} padding="18px">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ width: 36, height: 36, borderRadius: 'var(--radius-md)', background: TONE_BG[m.tone], color: TONE_FG[m.tone], display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={m.icon} size={18} />
              </span>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{m.delta}</span>
            </div>
            <div style={{ fontSize: 30, fontWeight: 800, color: 'var(--text-heading)', marginTop: 12, fontVariantNumeric: 'tabular-nums' }}>{m.value}</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{m.label}</div>
          </Card>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24 }}>
        <Card padding="0">
          <div style={{ padding: '20px 24px 0' }}>
            <CardHeader title="Tidsregistrering denne uge" subtitle="6 uger afventer godkendelse"
              action={<Button size="sm" variant="ghost">Se alle</Button>} />
          </div>
          <div>
            {D.employees.filter((e) => e.time !== 'draft').slice(0, 5).map((e) => (
              <EmployeeRow key={e.name} name={e.name} role={`${e.hours} · ${e.dept}`} status={e.time}
                actions={<IconButton icon={<Icon name="chevron-right" size={16} />} aria-label="Åbn" />} />
            ))}
          </div>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card>
            <CardHeader title="Onboarding · Sofie Holm" subtitle="Starter 1. mar 2026" />
            <ProgressBar value={2} max={8} showLabel />
            <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 12 }}>2 af 8 opgaver klar. Næste: opret IT-konti.</div>
            <Button variant="secondary" size="sm" style={{ marginTop: 14 }} leftIcon={<Icon name="arrow-right" size={15} />}>Fortsæt</Button>
          </Card>
          <Card>
            <CardHeader title="Hjælp lige ved hånden" />
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Avatar name="Stine Halkjær" />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-heading)' }}>Book en HR-konsulent</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Gratis indledende samtale</div>
              </div>
              <Button size="sm">Book</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
