// Folka web-app screens. Exports each screen to window.
const NS = window.FolkaDesignSystem_019e18;
const { Card, CardHeader, Button, IconButton, Tabs, Badge, StatusPill, Avatar,
  ProgressBar, EmployeeRow, TimeEntry, ChecklistItem, CandidateCard, EquipmentRow,
  Dialog, Input, Select, FormField, Toast } = NS;

const TONE_BG = { brand: 'var(--green-50)', warning: 'var(--warning-bg)', info: 'var(--info-bg)', success: 'var(--success-bg)' };
const TONE_FG = { brand: 'var(--green-700)', warning: 'var(--warning)', info: 'var(--info)', success: 'var(--success)' };

/* ---------------------------- Dashboard ---------------------------- */
function DashboardScreen() {
  const D = window.FolkaData;
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
            {D.employees.filter(e => e.time !== 'draft').slice(0, 5).map((e) => (
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

/* -------------------------- Time approval -------------------------- */
function TimeApprovalScreen({ onToast }) {
  const D = window.FolkaData;
  const pending = D.employees.filter(e => e.time !== 'draft');
  const [sel, setSel] = React.useState(pending[0].name);
  const [statuses, setStatuses] = React.useState(() => Object.fromEntries(pending.map(e => [e.name, e.time])));
  const cur = pending.find(e => e.name === sel);
  const approve = () => { setStatuses(s => ({ ...s, [sel]: 'approved' })); onToast && onToast(`${sel}s uge er godkendt`); };

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

/* ---------------------------- Employees ---------------------------- */
function EmployeesScreen({ onAdd }) {
  const D = window.FolkaData;
  const [q, setQ] = React.useState('');
  const [dept, setDept] = React.useState('');
  const depts = [...new Set(D.employees.map(e => e.dept))];
  const list = D.employees.filter(e =>
    (!q || e.name.toLowerCase().includes(q.toLowerCase())) && (!dept || e.dept === dept));
  return (
    <div style={{ padding: 32 }}>
      <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
        <div style={{ flex: 1, maxWidth: 320 }}><Input placeholder="Søg medarbejder" value={q} onChange={e => setQ(e.target.value)} leftIcon={<Icon name="search" size={16} />} /></div>
        <div style={{ width: 200 }}>
          <Select value={dept} onChange={e => setDept(e.target.value)}>
            <option value="">Alle afdelinger</option>
            {depts.map(d => <option key={d} value={d}>{d}</option>)}
          </Select>
        </div>
        <div style={{ flex: 1 }} />
        <Button onClick={onAdd} leftIcon={<Icon name="plus" size={16} />}>Tilføj medarbejder</Button>
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

/* ---------------------------- Onboarding --------------------------- */
function OnboardingScreen() {
  const D = window.FolkaData;
  const [items, setItems] = React.useState(D.onboarding);
  const done = items.filter(i => i.done).length;
  const toggle = (idx) => setItems(its => its.map((it, i) => i === idx ? { ...it, done: !it.done } : it));
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
            {['Anna M', 'Lars F', 'Sine H', 'Diana R'].map(n => <Avatar key={n} name={n} size="sm" />)}
          </div>
        </Card>
      </div>
    </div>
  );
}

/* --------------------------- Recruitment --------------------------- */
function RecruitmentScreen() {
  const D = window.FolkaData;
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
              {c.items.map((cand) => <CandidateCard key={cand.name} {...cand} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------- Equipment ---------------------------- */
function EquipmentScreen() {
  const D = window.FolkaData;
  return (
    <div style={{ padding: 32 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
        <Button leftIcon={<Icon name="plus" size={16} />}>Registrer udstyr</Button>
      </div>
      <Card padding="0">
        {D.equipment.map((it) => (
          <EquipmentRow key={it.name} name={it.name} category={it.category} serial={it.serial}
            assignedTo={it.who} status={it.status} iconNode={<Icon name={it.icon} size={18} />}
            actions={<IconButton icon={<Icon name="more-horizontal" size={16} />} aria-label="Mere" />} />
        ))}
      </Card>
    </div>
  );
}

Object.assign(window, { DashboardScreen, TimeApprovalScreen, EmployeesScreen, OnboardingScreen, RecruitmentScreen, EquipmentScreen });
