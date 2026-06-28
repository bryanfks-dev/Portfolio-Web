import { Bash } from '@/components/icons/bash';
import { Docker } from '@/components/icons/docker';
import { Express } from '@/components/icons/express';
import { FastAPI } from '@/components/icons/fast-api';
import { Flutter } from '@/components/icons/flutter';
import { Git } from '@/components/icons/git';
import { Go } from '@/components/icons/go';
import { GoogleCloudPlatform } from '@/components/icons/google-cloud-platform';
import { HashicorpVault } from '@/components/icons/hashicorp-vault';
import { Helm } from '@/components/icons/helm';
import { Jenkins } from '@/components/icons/jenkins';
import { Kubernetes } from '@/components/icons/kubernetes';
import { Laravel } from '@/components/icons/laravel';
import { Linux } from '@/components/icons/linux';
import { MySQL } from '@/components/icons/mysql';
import { NextJS } from '@/components/icons/next-js';
import { Nuxt } from '@/components/icons/nuxt';
import { PostgreSQL } from '@/components/icons/postgresql';
import Redis from '@/components/icons/redis';
import { SocketIO } from '@/components/icons/socket-io';
import { SpringBoot } from '@/components/icons/spring-boot';
import { TailwindCSS } from '@/components/icons/tailwindcss';
import Unity from '@/components/icons/unity';
import Vite from '@/components/icons/vite';
import { ICapabilitiesData } from '@/types';

const defineCapabilities = <T extends ICapabilitiesData>(data: T) => data;
export const CAPABILITIES_DATA = defineCapabilities({
  tools: [
    {
      name: 'Go',
      logo: <Go />,
      prefered: true,
    },
    {
      name: 'Spring Boot',
      logo: <SpringBoot />,
      prefered: true,
    },
    {
      name: 'Bash',
      logo: <Bash />,
    },
    {
      name: 'Next.js',
      logo: <NextJS />,
      prefered: true,
    },
    {
      name: 'Nuxt',
      logo: <Nuxt />,
    },
    {
      name: 'Vite',
      logo: <Vite />,
    },
    {
      name: 'Flutter',
      logo: <Flutter />,
      prefered: true,
    },
    {
      name: 'Laravel',
      logo: <Laravel />,
    },
    {
      name: 'Tailwind CSS',
      logo: <TailwindCSS />,
      prefered: true,
    },
    {
      name: 'Express',
      logo: <Express />,
    },
    {
      name: 'FastAPI',
      logo: <FastAPI />,
    },
    {
      name: 'Socket IO',
      logo: <SocketIO />,
    },
    {
      name: 'PostgreSQL',
      logo: <PostgreSQL />,
      prefered: true,
    },
    {
      name: 'MySQL',
      logo: <MySQL />,
    },
    {
      name: 'Git',
      logo: <Git />,
      prefered: true,
    },
    {
      name: 'Linux',
      logo: <Linux />,
    },
    {
      name: 'Jenkins',
      logo: <Jenkins />,
    },
    {
      name: 'Docker',
      logo: <Docker />,
      prefered: true,
    },
    {
      name: 'Helm',
      logo: <Helm />,
    },
    {
      name: 'Kubernetes',
      logo: <Kubernetes />,
    },
    {
      name: 'Hashicorp Vault',
      logo: <HashicorpVault />,
    },
    {
      name: 'Google Cloud Platform',
      logo: <GoogleCloudPlatform />,
    },
    {
      name: 'Redis',
      logo: <Redis />,
    },
    {
      name: 'Unity',
      logo: <Unity />,
    },
  ],
} as const);
