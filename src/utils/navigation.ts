export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const docsNavigation: NavItem[] = [
  {
    label: 'Introduction',
    href: '/docs',
  },
  {
    label: 'Changelog',
    href: '/docs/changelog',
  },
  {
    label: 'Getting Started',
    href: '/docs/getting-started/installation',
    children: [
      { label: 'Installation', href: '/docs/getting-started/installation' },
      { label: 'Quick Start', href: '/docs/getting-started/quick-start' },
      { label: 'Activation', href: '/docs/getting-started/activation' },
    ],
  },
  {
    label: 'Using GDAgent',
    href: '/docs/using-gdagent/editor',
    children: [
      { label: 'Editor Overview', href: '/docs/using-gdagent/editor' },
      { label: 'Sessions & Tabs', href: '/docs/using-gdagent/sessions' },
      { label: 'Keyboard Shortcuts', href: '/docs/using-gdagent/shortcuts' },
    ],
  },
  {
    label: 'Reference',
    href: '/docs/reference/cli',
    children: [
      { label: 'CLI Reference', href: '/docs/reference/cli' },
    ],
  },
  {
    label: 'Support',
    href: '/docs/support/faq',
    children: [
      { label: 'FAQ', href: '/docs/support/faq' },
      { label: 'Troubleshooting', href: '/docs/support/troubleshooting' },
      { label: 'Contact', href: '/docs/support/contact' },
    ],
  },
];

export function isActiveLink(currentPath: string, href: string): boolean {
  const normalizedCurrent = currentPath.replace(/\/$/, '') || '/';
  const normalizedHref = href.replace(/\/$/, '') || '/';

  if (normalizedCurrent === normalizedHref) return true;
  if (normalizedHref === '/docs/changelog' && normalizedCurrent.startsWith('/docs/changelog/')) return true;

  return false;
}

export function isActiveSection(currentPath: string, item: NavItem): boolean {
  if (isActiveLink(currentPath, item.href)) return true;
  if (item.children) {
    return item.children.some(child => isActiveLink(currentPath, child.href));
  }
  return false;
}
