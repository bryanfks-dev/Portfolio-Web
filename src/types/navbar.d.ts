interface INavbarLogo {
  href: string;
  child: React.ReactNode;
}

interface INavbarNavigation {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface INavbarData {
  logo: INavbarLogo;
  navigations: INavbarNavigation[];
}
