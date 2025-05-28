export interface NavigationLink {
  id: string;
  name: string;
  icon: string;
  active: boolean;
  category: 'general' | 'tools';
}

export const navigationLinks: NavigationLink[] = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    icon: 'LayoutDashboard',
    active: true,
    category: 'general'
  },
  {
    id: 'history',
    name: 'History',
    icon: 'History',
    active: false,
    category: 'general'
  },
  {
    id: 'calendar',
    name: 'Calendar',
    icon: 'Calendar',
    active: false,
    category: 'general'
  },
  {
    id: 'appointments',
    name: 'Appointments',
    icon: 'CalendarClock',
    active: false,
    category: 'general'
  },
  {
    id: 'statistics',
    name: 'Statistics',
    icon: 'BarChart',
    active: false,
    category: 'general'
  },
  {
    id: 'chat',
    name: 'Chat',
    icon: 'MessageCircle',
    active: false,
    category: 'tools'
  },
  {
    id: 'support',
    name: 'Support',
    icon: 'Headphones',
    active: false,
    category: 'tools'
  },
  {
    id: 'setting',
    name: 'Setting',
    icon: 'Settings',
    active: false,
    category: 'tools'
  }
];