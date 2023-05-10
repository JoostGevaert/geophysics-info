export type NavItems = Record<string, NavItem>;

interface NavItem {
  path: string;
  title: string;
  nestedNavItems?: Record<string, NavItem>;
}
