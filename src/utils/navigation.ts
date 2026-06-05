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
      { label: 'Quick Start & Activation', href: '/docs/getting-started/quick-start' },
    ],
  },
  {
    label: 'Features',
    href: '/docs/features/prompt-library',
    children: [
      { label: 'Prompt Library', href: '/docs/features/prompt-library' },
      { label: 'Workspace Restore', href: '/docs/features/workspace-restore' },
      { label: 'Bundled Godot MCP', href: '/docs/features/bundled-godot-mcp' },
    ],
  },
  {
    label: 'Reference',
    href: '/docs/reference/cli',
    children: [
      { label: 'CLI Reference', href: '/docs/reference/cli' },
      { label: 'Support Matrix', href: '/docs/reference/support-matrix' },
      { label: 'Godot MCP Tools', href: '/docs/reference/mcp-tools' },
      { label: 'Packaged Binaries & Security', href: '/docs/reference/packaged-binaries' },
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
