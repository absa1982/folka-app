import * as React from 'react';
import { Icon } from '../../../components/Icon';
import { Card } from '../../../components/layout/Card';
import { Button } from '../../../components/core/Button';
import { IconButton } from '../../../components/core/IconButton';
import { Input } from '../../../components/core/Input';
import { Select } from '../../../components/core/Select';
import { EmployeeRow } from '../../../components/hr/EmployeeRow';
import { FolkaData } from '../../../data/folkaData';
import { useAppShell } from '../AppLayout';

export function EmployeesScreen() {
  const { openAddEmployee } = useAppShell();
  const D = FolkaData;
  const [q, setQ] = React.useState('');
  const [dept, setDept] = React.useState('');
  const depts = [...new Set(D.employees.map((e) => e.dept))];
  const list = D.employees.filter((e) =>
    (!q || e.name.toLowerCase().includes(q.toLowerCase())) && (!dept || e.dept === dept));
  return (
    <div style={{ padding: 32 }}>
      <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
        <div style={{ flex: 1, maxWidth: 320 }}>
          <Input placeholder="Søg medarbejder" value={q} onChange={(e) => setQ(e.target.value)} leftIcon={<Icon name="search" size={16} />} />
        </div>
        <div style={{ width: 200 }}>
          <Select value={dept} onChange={(e) => setDept(e.target.value)}>
            <option value="">Alle afdelinger</option>
            {depts.map((d) => <option key={d} value={d}>{d}</option>)}
          </Select>
        </div>
        <div style={{ flex: 1 }} />
        <Button onClick={openAddEmployee} leftIcon={<Icon name="plus" size={16} />}>Tilføj medarbejder</Button>
      </div>
      <Card padding="0">
        <div style={{ display: 'flex', padding: '10px 16px', fontSize: 12, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
          <span style={{ flex: 1, paddingLeft: 54 }}>Navn</span>
          <span style={{ width: 120 }}>Afdeling</span>
          <span style={{ width: 110 }}>Status</span>
          <span style={{ width: 40 }} />
        </div>
        {list.map((e) => (
          <EmployeeRow key={e.name} name={e.name} role={e.role} department={e.dept} status={e.status}
            actions={<IconButton icon={<Icon name="more-horizontal" size={16} />} aria-label="Mere" />} />
        ))}
        {list.length === 0 && <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)' }}>Ingen medarbejdere matcher søgningen.</div>}
      </Card>
    </div>
  );
}
