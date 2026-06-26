import * as React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Sidebar, Topbar } from './Shell';
import { Button } from '../../components/core/Button';
import { Dialog } from '../../components/layout/Dialog';
import { Input } from '../../components/core/Input';
import { Select } from '../../components/core/Select';
import { FormField } from '../../components/core/FormField';
import { Toast } from '../../components/feedback/Toast';
import { FolkaData } from '../../data/folkaData';

const TITLES: Record<string, [string, string]> = {
  dashboard: ['Overblik', `God morgen, ${FolkaData.user.name.split(' ')[0]}`],
  time: ['Tidsregistrering', 'Godkend medarbejdernes uge'],
  employees: ['Medarbejdere', `${FolkaData.employees.length} ansatte hos ${FolkaData.company}`],
  onboarding: ['Onboarding', '2 forløb i gang'],
  recruitment: ['Rekruttering', '7 kandidater i pipeline'],
  equipment: ['Udstyr', 'Hvem har hvad'],
};

interface AppContextValue {
  openAddEmployee: () => void;
  showToast: (message: string) => void;
}

const AppContext = React.createContext<AppContextValue | null>(null);

export function useAppShell() {
  const ctx = React.useContext(AppContext);
  if (!ctx) throw new Error('useAppShell must be used within AppLayout');
  return ctx;
}

export function AppLayout() {
  const [addOpen, setAddOpen] = React.useState(false);
  const [toast, setToast] = React.useState<string | null>(null);
  const location = useLocation();
  const route = location.pathname.split('/')[2] || 'dashboard';

  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);

  const [title, subtitle] = TITLES[route] || TITLES.dashboard;

  const topActions = route === 'dashboard'
    ? <Button leftIcon={<Icon name="plus" size={16} />} onClick={() => setAddOpen(true)}>Tilføj medarbejder</Button>
    : null;

  return (
    <AppContext.Provider value={{ openAddEmployee: () => setAddOpen(true), showToast: setToast }}>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--surface-page)' }}>
        <Sidebar />
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          <Topbar title={title} subtitle={subtitle} actions={topActions} />
          <main style={{ flex: 1 }}><Outlet /></main>
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
    </AppContext.Provider>
  );
}
