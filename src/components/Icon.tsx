import * as React from 'react';
import {
  LayoutDashboard, Clock, Users, ListChecks, UserSearch, Laptop, Search, Bell,
  ChevronRight, ArrowRight, Check, CheckCircle, Plus, MoreHorizontal, MessageSquare,
  Settings, Smartphone, Monitor, KeyRound, ShieldCheck, Signal, Wifi, BatteryFull,
  Palmtree, Thermometer, Baby, CalendarOff, User, PlayCircle, Scale, AlertTriangle,
  AlertCircle, Info, type LucideProps,
} from 'lucide-react';

const ICONS: Record<string, React.ComponentType<LucideProps>> = {
  'layout-dashboard': LayoutDashboard,
  clock: Clock,
  users: Users,
  'list-checks': ListChecks,
  'user-search': UserSearch,
  laptop: Laptop,
  search: Search,
  bell: Bell,
  'chevron-right': ChevronRight,
  'arrow-right': ArrowRight,
  check: Check,
  'check-circle': CheckCircle,
  plus: Plus,
  'more-horizontal': MoreHorizontal,
  'message-square': MessageSquare,
  settings: Settings,
  smartphone: Smartphone,
  monitor: Monitor,
  'key-round': KeyRound,
  'shield-check': ShieldCheck,
  signal: Signal,
  wifi: Wifi,
  'battery-full': BatteryFull,
  palmtree: Palmtree,
  thermometer: Thermometer,
  baby: Baby,
  'calendar-off': CalendarOff,
  user: User,
  'play-circle': PlayCircle,
  scale: Scale,
  'alert-triangle': AlertTriangle,
  'alert-circle': AlertCircle,
  info: Info,
};

export interface IconProps {
  name: string;
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}

/** Resolves a kebab-case Lucide icon name to its component. Outline, currentColor. */
export function Icon({ name, size = 18, style, className }: IconProps) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return <Cmp size={size} style={{ flex: 'none', ...style }} className={className} />;
}
