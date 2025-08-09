export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  // Big links (primary)
  { label: 'Home', href: '/' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  // Small links (secondary)
  { label: 'Commande maintenant', href: '/#order' },
  { label: 'Pots Lundi Mason', href: '/#mason' },
  { label: 'Heures Joyeuses', href: '/#happy-hours' },
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


