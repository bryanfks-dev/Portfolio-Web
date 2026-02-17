import {
  GitHub,
  Instagram,
  LinkedIn,
} from '@/components/foundations/social-icons';
import { IHomeData } from '@/types';

const START_AS_PROFERSIONAL_YEAR = 2023;
const YEARS_OF_EXPERIENCES =
  new Date().getFullYear() - START_AS_PROFERSIONAL_YEAR;

const COMPLETED_PROJECTS_COUNT = 3;
const HAPPY_CLIENTS_COUNT = 2;

export const HOME_DATA: IHomeData = {
  avatar: {
    src: '/images/avatar.jpg',
    alt: 'Bryan Fernando Kurniawan Suhartono',
  },
  user: {
    name: 'Bryan Fernando Kurniawan Suhartono',
    nickname: 'Bryan',
    profesions: [
      'Software Architect',
      'Software Engineer',
      'Full Stack Developer',
    ],
  },
  socials: [
    {
      name: 'GitHub',
      href: 'https://github.com/bryanfks-dev',
      icon: <GitHub className="size-5 text-primary" />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/_bryanfks',
      icon: <Instagram className="size-5 text-pink-500" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bryan-fernando-kurniawan-suhartono',
      icon: <LinkedIn className="size-5 text-blue-500" />,
    },
  ],
  records: [
    {
      name: 'Years of Experience',
      value: YEARS_OF_EXPERIENCES,
      valuePrefix: '+',
    },
    {
      name: 'Completed Projects',
      value: COMPLETED_PROJECTS_COUNT,
    },
    {
      name: 'Happy Clients',
      value: HAPPY_CLIENTS_COUNT,
    },
  ],
} as const;
