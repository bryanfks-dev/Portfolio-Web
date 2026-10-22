import { Bash } from '@/components/icons/bash';
import Chi from '@/components/icons/chi';
import Dart from '@/components/icons/dart';
import { Docker } from '@/components/icons/docker';
import Echo from '@/components/icons/echo';
import { Express } from '@/components/icons/express';
import { FastAPI } from '@/components/icons/fast-api';
import { Flutter } from '@/components/icons/flutter';
import { Git } from '@/components/icons/git';
import { Go } from '@/components/icons/go';
import { GoogleCloudPlatform } from '@/components/icons/google-cloud-platform';
import { HashicorpVault } from '@/components/icons/hashicorp-vault';
import { Helm } from '@/components/icons/helm';
import { Java } from '@/components/icons/java';
import JavaScript from '@/components/icons/javascript';
import { Jenkins } from '@/components/icons/jenkins';
import { Kubernetes } from '@/components/icons/kubernetes';
import { Laravel } from '@/components/icons/laravel';
import { Linux } from '@/components/icons/linux';
import { MySQL } from '@/components/icons/mysql';
import { NextJS } from '@/components/icons/next-js';
import Nginx from '@/components/icons/nginx';
import { Nuxt } from '@/components/icons/nuxt';
import PHP from '@/components/icons/php';
import { PostgreSQL } from '@/components/icons/postgresql';
import Python from '@/components/icons/python';
import Redis from '@/components/icons/redis';
import { SocketIO } from '@/components/icons/socket-io';
import { SpringBoot } from '@/components/icons/spring-boot';
import { TailwindCSS } from '@/components/icons/tailwindcss';
import TypeScript from '@/components/icons/typescript';
import { ICapabilitiesData } from '@/types';

export const CAPABILITIES_DATA: ICapabilitiesData = {
  programmingLanguages: [
    {
      name: 'Go',
      logo: <Go />,
      prefered: true,
    },
    {
      name: 'Java',
      logo: <Java />,
      prefered: true
    },
    {
      name: 'Python',
      logo: <Python />,
      prefered: true
    },
    {
      name: 'JavaScript',
      logo: <JavaScript />,
    },
    {
      name: 'TypeScript',
      logo: <TypeScript />,
    },
    {
      name: 'PHP',
      logo: <PHP />,
    },
    {
      name: 'Dart',
      logo: <Dart />,
    },
  ],
  frontendAndMobileFrameworks: [
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
      name: 'Flutter',
      logo: <Flutter />,
      prefered: true,
    },
    {
      name: 'Tailwind CSS',
      logo: <TailwindCSS />,
      prefered: true,
    },
  ],
  backendFrameworks: [
    {
      name: 'Echo',
      logo: <Echo />,
      prefered: true,
    },
    {
      name: 'Chi',
      logo: <Chi />,
    },
    {
      name: 'Spring Boot',
      logo: <SpringBoot />,
      prefered: true,
    },
    {
      name: 'Express',
      logo: <Express />,
    },
    {
      name: 'FastAPI',
      logo: <FastAPI />,
      prefered: true,
    },
    {
      name: 'Laravel',
      logo: <Laravel />,
    },
  ],
  cloudAndDevOps: [
    {
      name: 'Linux',
      logo: <Linux />,
      prefered: true,
    },
    {
      name: 'Bash',
      logo: <Bash />,
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
      name: 'Nginx',
      logo: <Nginx />,
    },
    {
      name: 'Google Cloud Platform',
      logo: <GoogleCloudPlatform />,
    },
  ],
  databases: [
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
      name: 'Redis',
      logo: <Redis />,
      prefered: true,
    },
  ],
  others: [
    {
      name: 'Git',
      logo: <Git />,
      prefered: true,
    },
    {
      name: 'Socket IO',
      logo: <SocketIO />,
    },
  ],
} as const;

export const CAPABILITIES_KEY_LABELS: Record<keyof ICapabilitiesData, string> =
  {
    programmingLanguages: 'Programming Languages',
    frontendAndMobileFrameworks: 'Frontend and Mobile Frameworks',
    backendFrameworks: 'Backend Frameworks',
    cloudAndDevOps: 'Cloud & DevOps',
    databases: 'Databases',
    others: 'Others',
  };
