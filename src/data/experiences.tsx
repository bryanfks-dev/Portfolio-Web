import { IExperiencesData } from '@/types';

export const EXPERIENCES_DATA: IExperiencesData = {
  experiences: [
    {
      position: 'Full Stack Software Engineer',
      period: {
        start: new Date('2026-02-23'),
      },
      company: {
        name: 'PT. Pharos Indonesia',
        logoSrc: '/images/pharos-logo.svg',
        website: 'https://www.pharos.co.id',
      },
      done: [
        'Developed and integrated an authentication micro service using FastAPI and Keycloak, with an API gateway as the initial step in the company’s microservices journey.',
      ],
    },
    {
      position: 'Full Stack Software Engineer Intern',
      period: {
        start: new Date('2025-02-03'),
        end: new Date('2026-02-03'),
      },
      company: {
        name: 'PT. Pharos Indonesia',
        logoSrc: '/images/pharos-logo.svg',
        website: 'https://www.pharos.co.id',
      },
      done: [
        'Designed the architecture for new services and web applications based on Clean Architecture and Domain-Driven Design (DDD) pattern best practices.',
        'Developed a Digital Imaging and Communications in Medicine (DICOM) service to track clinic ultrasound machine usage and automate the conversion of ultrasound results from DICOM files into images.',
        'Developed reusable Next.js and Flutter widgets (e.g., chat) by integrating Chatwoot as the base chat engine and Jitsi for video call integration.',
        'Deployed the Evolution API for WhatsApp messaging automation and an SFTP server for file exchanges with external stakeholders.',
        'Boosted web app build time by applying Jenkins stage parallelism.',
        'Set up and integrated Sentry with existing services and web applications for improved error monitoring.',
      ],
    },
  ],
} as const;
