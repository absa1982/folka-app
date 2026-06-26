// Folka web-app — root App with routing, add-employee dialog, and toasts.
const APP_NS = window.FolkaDesignSystem_019e18;

function App() {
  const [route, setRoute] = React.useState('dashboard');
  const [addOpen, setAddOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);

  // Re-scan Lucide icons after every render.
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);

  const titles = {
    dashboard: ['Overblik', `God morgen, ${window.FolkaData.user.name.split(' ')[0]}`],
    time: ['Tidsregistrering', 'Godkend medarbejdernes uge'],
    employees: ['Medarbejdere', `${window.FolkaData.employees.length} ansatte hos ${window.FolkaData.company}`],
    onboarding: ['Onboarding', '2 forløb i gang'],
    recruitment: ['Rekruttering', '7 kandidater i pipeline'],
    equipment: ['Udstyr', 'Hvem har hvad'],
  };
  const [title, subtitle] = titles[route];

  const { Button, IconButton, Dialog, Input, Select, FormField, Toast } = APP_NS;

  const screens = {
    dashboard: <DashboardScreen />,
    time: <TimeApprovalScreen onToast={setToast} />,
    employees: <EmployeesScreen onAdd={() => setAddOpen(true)} />,
    onboarding: <OnboardingScreen />,
    recruitment: <RecruitmentScreen />,
    equipment: <EquipmentScreen />,
  };

  const topActions = route === 'dashboard'
    ? <Button leftIcon={<Icon name="plus" size={16} />} onClick={() => setAddOpen(true)}>Tilføj medarbejder</Button>
    : null;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--surface-page)' }}>
      <Sidebar route={route} setRoute={setRoute} />
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <Topbar title={title} subtitle={subtitle} actions={topActions} />
        <main style={{ flex: 1 }}>{screens[route]}</main>
      </div>

      <Dialog open={addOpen} onClose={() => setAddOpen(false)} title="Tilføj medarbejder"
        footer={<>
          <Button variant="ghost" onClick={() => setAddOpen(false)}>Annuller</Button>
          <Button onClick={() => { setAddOpen(false); setToast('Invitation sendt til den nye medarbejder'); }}>Send invitation</Button>
        </>}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <FormField label="Fulde navn" htmlFor="n" required><Input id="n" placeholder="F.eks. Mette Bjerg" /></FormField>
          <FormField label="Arbejdsmail" htmlFor="m" required hint="Vi sender velkomstlinket hertil."><Input id="m" type="email" placeholder="navn@firma.dk" /></FormField>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <FormField label="Afdeling" htmlFor="d">
              <Select id="d"><option>Udvikling</option><option>Salg</option><option>Marketing</option><option>Drift</option></Select>
            </FormField>
            <FormField label="Startdato" htmlFor="s"><Input id="s" type="date" /></FormField>
          </div>
        </div>
      </Dialog>

      {toast && (
        <div style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 200 }}>
          <Toast tone="success" iconNode={<Icon name="check-circle" size={18} />} title={toast} onClose={() => setToast(null)} />
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
