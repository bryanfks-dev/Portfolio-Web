import { CubeOutline, Home03 } from '@untitledui/icons';

export const NAVBAR_DATA: INavbarData = {
  logo: {
    href: '/',
    child: (
      <div className="flex items-center gap-2 text-xl font-bold select-none">
        Portfolio
      </div>
    ),
  },
  navigations: [
    {
      name: 'Home',
      href: '/',
      icon: <Home03 />,
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: <CubeOutline />,
    },
  ],
};
