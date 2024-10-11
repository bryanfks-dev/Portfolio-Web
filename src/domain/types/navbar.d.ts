/**
 * NavbarItemProps is a type for the props of the NavbarItem component.
 *
 * @property {string} label - The label of the navbar item.
 * @property {React.ElementType} unselectedIcon - The unselected icon of the navbar item.
 * @property {React.ElementType} selectedIcon - The selected icon of the navbar item.
 * @property {string} href - The href of the navbar item.
 */
declare interface NavbarItemProps {
  label: string;
  unselectedIcon: React.ElementType;
  selectedIcon: React.ElementType;
  href: string;
}

/**
 * NavbarProps is a type for the props of the Navbar component.
 *
 * @property {NavbarItemProps[]} items - The items of the navbar.
 *
 * @see {@link NavbarItemProps}
 */
declare interface NavbarProps {
  items: NavbarItemProps[];
}
