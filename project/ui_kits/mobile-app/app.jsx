// Folka mobile time-tracking app (employee side). Single-file app.
const M = window.FolkaDesignSystem_019e18;

const WEEK = [
  { day: 'Mandag', date: '24. feb', clockIn: '08:30', clockOut: '16:15', hours: '7,5', type: 'work' },
  { day: 'Tirsdag', date: '25. feb', clockIn: '08:00', clockOut: '16:00', hours: '8,0', type: 'work' },
  { day: 'Onsdag', date: '26. feb', clockIn: '08:15', clockOut: '16:00', hours: '7,75', type: 'work' },
  { day: 'Torsdag', date: '27. feb', type: 'sick', hours: '—', note: 'Sygt barn' },
  { day: 'Fredag', date: '28. feb', clockIn: '08:00', clockOut: '14:15', hours: '6,25', type: 'work' },
];

function MIcon({ name, size = 20, style }) {
  return <i data-lucide={name} style={{ width: size, height: size, display: 'inline-flex', flex: 'none', ...style }} />;
}

const TYPE = {
  work: { color: 'var(--text-heading)' },
  sick: { label: 'Syg', color: 'var(--warning)', bg: 'var(--warning-bg)' },
  holiday: { label: 'Ferie', color: 'var(--info)', bg: 'var(--info-bg)' },
};

function DayRow({ d }) {
  const t = TYPE[d.type] || TYPE.work;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14, padding: '14px 4px',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{ width: 80, flex: 'none' }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-heading)' }}>{d.day}</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{d.date}</div>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        {d.type === 'work'
          ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-body)' }}>{d.clockIn} – {d.clockOut}</span>
          : <span style={{ fontSize: 13, fontWeight: 600, color: t.color, background: t.bg, padding: '3px 9px', borderRadius: 999 }}>{t.label}{d.note ? ` · ${d.note}` : ''}</span>}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 15, color: 'var(--text-heading)' }}>{d.hours}{d.type === 'work' ? ' t' : ''}</div>
    </div>
  );
}

function MobileApp() {
  const { Button, Avatar, ProgressBar, StatusPill } = M;
  const [tab, setTab] = React.useState('tid');
  const [approved, setApproved] = React.useState(false);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--surface-page)' }}>
      {/* status bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 24px 4px', fontSize: 13, fontWeight: 600, color: 'var(--ink-900)', fontFamily: 'var(--font-mono)' }}>
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 6 }}><MIcon name="signal" size={15} /><MIcon name="wifi" size={15} /><MIcon name="battery-full" size={15} /></span>
      </div>

      {/* header */}
      <div style={{ padding: '12px 22px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src="../../assets/folka-mark.svg" width="32" height="32" alt="" />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>God morgen</div>
          <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-heading)' }}>Anna</div>
        </div>
        <Avatar name="Anna Mortensen" size="md" />
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '0 18px 18px' }}>
        {tab === 'tid' && (
          <>
            <div style={{
              background: 'var(--green-700)', color: '#fff', borderRadius: 'var(--radius-xl)',
              padding: 20, marginBottom: 16, boxShadow: 'var(--shadow-brand)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: 'var(--green-200)', fontWeight: 600 }}>Uge 9 · 24–28 feb</span>
                {approved ? <StatusPill status="approved" /> : <StatusPill status="pending" label="Ikke godkendt" />}
              </div>
              <div style={{ fontSize: 40, fontWeight: 800, fontFamily: 'var(--font-mono)', letterSpacing: '-0.02em' }}>29,5 t</div>
              <div style={{ fontSize: 13, color: 'var(--green-100)' }}>registreret denne uge</div>
            </div>

            <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', padding: '4px 16px', boxShadow: 'var(--shadow-sm)' }}>
              {WEEK.map((d) => <DayRow key={d.day} d={d} />)}
            </div>

            <div style={{ marginTop: 18 }}>
              {approved
                ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'var(--success)', fontWeight: 600, fontSize: 15, padding: 12 }}><MIcon name="check-circle" size={18} /> Ugen er godkendt</div>
                : <Button fullWidth size="lg" onClick={() => setApproved(true)} leftIcon={<MIcon name="check" size={18} />}>Godkend min uge</Button>}
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', marginTop: 12 }}>Tager under 1 minut. Du overholder reglerne om tidsregistrering.</p>
          </>
        )}

        {tab === 'fravaer' && (
          <div style={{ paddingTop: 6 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14 }}>Registrer fravær</h2>
            {[
              { icon: 'palmtree', label: 'Ferie', sub: '18 dage tilbage' },
              { icon: 'thermometer', label: 'Sygdom', sub: 'Meld dig syg i dag' },
              { icon: 'baby', label: 'Barns 1. sygedag', sub: '2 dage tilbage' },
              { icon: 'clock', label: 'Afspadsering', sub: '+4,5 t optjent' },
            ].map((o) => (
              <div key={o.label} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 16, marginBottom: 12, boxShadow: 'var(--shadow-sm)' }}>
                <span style={{ width: 42, height: 42, borderRadius: 'var(--radius-md)', background: 'var(--green-50)', color: 'var(--green-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><MIcon name={o.icon} size={20} /></span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-heading)' }}>{o.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{o.sub}</div>
                </div>
                <MIcon name="chevron-right" size={18} style={{ color: 'var(--text-subtle)' }} />
              </div>
            ))}
          </div>
        )}

        {tab === 'profil' && (
          <div style={{ paddingTop: 6, textAlign: 'center' }}>
            <div style={{ display: 'inline-block', margin: '12px auto' }}><Avatar name="Anna Mortensen" size="lg" /></div>
            <h2 style={{ fontSize: 20, fontWeight: 700 }}>Anna Mortensen</h2>
            <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 20 }}>Designer · Rotpunkt ApS</div>
            <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', textAlign: 'left', boxShadow: 'var(--shadow-sm)' }}>
              {['Mine oplysninger', 'Notifikationer', 'Hjælp & support', 'Log ud'].map((r) => (
                <div key={r} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 16px', borderBottom: '1px solid var(--border-subtle)', fontSize: 15, color: 'var(--text-body)' }}>
                  {r}<MIcon name="chevron-right" size={16} style={{ color: 'var(--text-subtle)' }} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* tab bar */}
      <div style={{ display: 'flex', borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-card)', padding: '8px 0 22px' }}>
        {[{ id: 'tid', icon: 'clock', label: 'Tid' }, { id: 'fravaer', icon: 'calendar-off', label: 'Fravær' }, { id: 'profil', icon: 'user', label: 'Profil' }].map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            border: 'none', background: 'transparent', cursor: 'pointer',
            color: tab === t.id ? 'var(--green-700)' : 'var(--text-subtle)',
            fontSize: 11, fontWeight: 600, fontFamily: 'var(--font-sans)',
          }}>
            <MIcon name={t.icon} size={22} /> {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function PhoneFrame() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--sand-100)', padding: 24 }}>
      <div style={{
        width: 390, height: 800, background: 'var(--surface-page)', borderRadius: 46,
        border: '11px solid var(--ink-900)', boxShadow: 'var(--shadow-xl)', overflow: 'hidden', position: 'relative',
      }}>
        <MobileApp />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PhoneFrame />);
