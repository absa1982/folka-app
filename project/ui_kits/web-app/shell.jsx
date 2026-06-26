// Folka web-app shell — Icon helper, Sidebar, Topbar. Exports to window.
const { Avatar, IconButton, Input } = window.FolkaDesignSystem_019e18;

function Icon({ name, size = 18, style }) {
  return <i data-lucide={name} style={{ width: size, height: size, display: 'inline-flex', flex: 'none', ...style }} />;
}

function Sidebar({ route, setRoute }) {
  const D = window.FolkaData;
  return (
    <aside style={{
      width: 'var(--sidebar-w)', flex: 'none', background: 'var(--surface-card)',
      borderRight: '1px solid var(--border-subtle)', height: '100vh', position: 'sticky', top: 0,
      display: 'flex', flexDirection: 'column', padding: '20px 14px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 8px 22px' }}>
        <img src="../../assets/folka-mark.svg" width="30" height="30" alt="" />
        <span style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--ink-900)' }}>Folka</span>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {D.nav.map((n) => {
          const active = n.id === route;
          return (
            <button key={n.id} onClick={() => setRoute(n.id)} style={{
              display: 'flex', alignItems: 'center', gap: 11, padding: '9px 12px',
              border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer', textAlign: 'left',
              background: active ? 'var(--green-50)' : 'transparent',
              color: active ? 'var(--green-700)' : 'var(--text-body)',
              fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: active ? 700 : 500,
              transition: 'background var(--dur-fast)',
            }}>
              <Icon name={n.icon} />
              <span style={{ flex: 1 }}>{n.label}</span>
              {n.badge && (
                <span style={{
                  fontSize: 11, fontWeight: 700, fontFamily: 'var(--font-mono)',
                  background: active ? 'var(--green-600)' : 'var(--clay-500)', color: '#fff',
                  borderRadius: 999, padding: '1px 7px', minWidth: 20, textAlign: 'center',
                }}>{n.badge}</span>
              )}
            </button>
          );
        })}
      </nav>

      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10, padding: '12px 8px', borderTop: '1px solid var(--border-subtle)' }}>
        <Avatar name={D.user.name} size="sm" />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-heading)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{D.user.name}</div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{D.user.role}</div>
        </div>
        <Icon name="settings" size={16} style={{ color: 'var(--text-muted)' }} />
      </div>
    </aside>
  );
}

function Topbar({ title, subtitle, actions }) {
  const D = window.FolkaData;
  return (
    <header style={{
      display: 'flex', alignItems: 'center', gap: 16, padding: '20px 32px',
      borderBottom: '1px solid var(--border-subtle)', background: 'rgba(250,248,243,0.8)',
      backdropFilter: 'blur(8px)', position: 'sticky', top: 0, zIndex: 10,
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h1 style={{ fontSize: 23, fontWeight: 700, color: 'var(--text-heading)' }}>{title}</h1>
        {subtitle && <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{subtitle}</div>}
      </div>
      <div style={{ width: 240 }}>
        <Input placeholder="Søg…" leftIcon={<Icon name="search" size={16} />} size="sm" />
      </div>
      {actions}
      <IconButton icon={<Icon name="bell" size={18} />} variant="ghost" aria-label="Notifikationer" />
    </header>
  );
}

Object.assign(window, { Icon, Sidebar, Topbar });
