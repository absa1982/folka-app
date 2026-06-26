export interface NavItem {
  id: string;
  label: string;
  icon: string;
  badge?: number;
}

export interface Employee {
  name: string;
  role: string;
  dept: string;
  status: 'active' | 'invited' | 'draft' | 'pending';
  hours: string;
  time: 'pending' | 'approved' | 'draft';
}

export interface WeekDay {
  day: string;
  date?: string;
  clockIn?: string;
  clockOut?: string;
  hours: string;
  type?: 'work' | 'holiday' | 'sick' | 'absence';
  note?: string;
}

export interface OnboardingTask {
  label: string;
  done: boolean;
  due: string;
  who: string;
  overdue?: boolean;
}

export interface Candidate {
  name: string;
  role: string;
  applied: string;
  tags: string[];
  rating: number;
  isNew?: boolean;
}

export interface EquipmentItem {
  name: string;
  category: string;
  serial: string;
  who: string | null;
  status: 'assigned' | 'available' | 'repair';
  icon: string;
}

export interface Metric {
  label: string;
  value: string;
  delta: string;
  icon: string;
  tone: 'brand' | 'warning' | 'info' | 'success';
}

export const FolkaData = {
  company: 'Rotpunkt ApS',
  user: { name: 'Sine Halkjær', role: 'HR Manager' },
  nav: [
    { id: 'dashboard', label: 'Overblik', icon: 'layout-dashboard' },
    { id: 'time', label: 'Tidsregistrering', icon: 'clock', badge: 6 },
    { id: 'employees', label: 'Medarbejdere', icon: 'users' },
    { id: 'onboarding', label: 'Onboarding', icon: 'list-checks' },
    { id: 'recruitment', label: 'Rekruttering', icon: 'user-search', badge: 3 },
    { id: 'equipment', label: 'Udstyr', icon: 'laptop' },
  ] as NavItem[],
  employees: [
    { name: 'Anna Mortensen', role: 'Designer', dept: 'Udvikling', status: 'active', hours: '37,5 t', time: 'pending' },
    { name: 'Lars Frank', role: 'Sales lead', dept: 'Salg', status: 'active', hours: '40,0 t', time: 'approved' },
    { name: 'Mikkel Sørensen', role: 'Developer', dept: 'Udvikling', status: 'active', hours: '38,0 t', time: 'pending' },
    { name: 'Camilla Holt', role: 'Bookkeeper', dept: 'Økonomi', status: 'active', hours: '30,0 t', time: 'approved' },
    { name: 'Sofie Holm', role: 'Marketing intern', dept: 'Marketing', status: 'invited', hours: '—', time: 'draft' },
    { name: 'Jonas Bek', role: 'Support', dept: 'Drift', status: 'active', hours: '37,0 t', time: 'pending' },
    { name: 'Rune Therkildsen', role: 'Developer', dept: 'Udvikling', status: 'active', hours: '39,5 t', time: 'pending' },
    { name: 'Diana Rank', role: 'Office manager', dept: 'Drift', status: 'active', hours: '32,0 t', time: 'approved' },
  ] as Employee[],
  week: [
    { day: 'Man', date: '24/2', clockIn: '08:30', clockOut: '16:15', hours: '7,5 t', type: 'work' },
    { day: 'Tir', date: '25/2', clockIn: '08:00', clockOut: '16:00', hours: '8,0 t', type: 'work' },
    { day: 'Ons', date: '26/2', clockIn: '08:15', clockOut: '16:00', hours: '7,75 t', type: 'work' },
    { day: 'Tor', date: '27/2', type: 'sick', hours: '—', note: 'Sygt barn' },
    { day: 'Fre', date: '28/2', clockIn: '08:00', clockOut: '14:15', hours: '6,25 t', type: 'work' },
  ] as WeekDay[],
  onboarding: [
    { label: 'Underskriv kontrakt', done: true, due: '20/2', who: 'Anna M' },
    { label: 'Bestil computer', done: true, due: '24/2', who: 'Lars F' },
    { label: 'Opret IT-konti', done: false, due: '1/3', who: 'Sine H', overdue: true },
    { label: 'Send velkomstmail', done: false, due: '1/3', who: 'Sine H' },
    { label: 'Book intro med team', done: false, due: '3/3', who: 'Anna M' },
    { label: 'Udlever adgangskort', done: false, due: '3/3', who: 'Diana R' },
    { label: 'Tilmeld lønsystem', done: false, due: '5/3', who: 'Camilla H' },
    { label: 'Første 1:1 samtale', done: false, due: '10/3', who: 'Sine H' },
  ] as OnboardingTask[],
  candidates: {
    new: [
      { name: 'Mette Bjerg', role: 'Frontend dev', applied: 'Designer', tags: ['Figma', 'React'], rating: 4, isNew: true },
      { name: 'Karl Boysen', role: 'Student', applied: 'Designer', tags: ['UI'], rating: 3, isNew: true },
    ],
    screening: [
      { name: 'Jesper Nielsen', role: 'Account mgr', applied: 'Sales lead', tags: ['B2B', 'CRM'], rating: 4 },
    ],
    interview: [
      { name: 'Emilie Vindahl', role: 'Ops lead', applied: 'Operations', tags: ['Finance'], rating: 5 },
    ],
    offer: [
      { name: 'Cliff Morgen', role: 'Developer', applied: 'Backend', tags: ['Go', 'AWS'], rating: 5 },
    ],
  } as Record<string, Candidate[]>,
  equipment: [
    { name: 'MacBook Pro 14"', category: 'Laptop', serial: 'C02XL0FT', who: 'Anna Mortensen', status: 'assigned', icon: 'laptop' },
    { name: 'iPhone 15', category: 'Telefon', serial: 'F2LXK91', who: 'Lars Frank', status: 'assigned', icon: 'smartphone' },
    { name: 'Dell U2723', category: 'Skærm', serial: 'CN-0A2', who: null, status: 'available', icon: 'monitor' },
    { name: 'Kontornøgle #12', category: 'Nøgle', serial: 'K-12', who: 'Diana Rank', status: 'assigned', icon: 'key-round' },
    { name: 'MacBook Air', category: 'Laptop', serial: 'C02Z9KL', who: null, status: 'repair', icon: 'laptop' },
  ] as EquipmentItem[],
  metrics: [
    { label: 'Medarbejdere', value: '42', delta: '+3', icon: 'users', tone: 'brand' },
    { label: 'Uger til godkendelse', value: '6', delta: 'denne uge', icon: 'clock', tone: 'warning' },
    { label: 'Onboarding i gang', value: '2', delta: 'aktive', icon: 'list-checks', tone: 'info' },
    { label: 'Compliance', value: '100%', delta: 'tidsregistrering', icon: 'shield-check', tone: 'success' },
  ] as Metric[],
};
