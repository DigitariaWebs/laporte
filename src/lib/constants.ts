export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Menus', href: '#' },
  { label: 'Promos & Événements', href: '#' },
  { label: 'Concept & Histoire', href: '#' },
  { label: 'Réserve en ligne', href: '#' },
  { label: 'Trouve un restaurant', href: '#' },
  { label: 'Commande maintenant', href: '#' },
  { label: 'Franchise', href: '#' },
];

export const SOCIALS = [
  { id: 'fb', label: 'Facebook', href: '#', icon: 'F' },
  { id: 'ig', label: 'Instagram', href: '#', icon: 'I' },
  { id: 'x', label: 'X', href: '#', icon: 'X' },
];

export const DESIGN_TOKENS = {
  colors: {
    red: '#B5121B',
    black: '#0B0B0B',
    offwhite: '#F3F1ED',
    yellow: '#FFD400',
  },
  sidebarWidth: 180,
};


