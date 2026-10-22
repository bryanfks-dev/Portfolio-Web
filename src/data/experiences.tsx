import { IExperiencesData } from '@/types';

export const EXPERIENCES_DATA: IExperiencesData = {
  experiences: [
    {
      position: 'Software Engineer (Freelance)',
      period: {
        start: new Date('2026-09-02'),
        end: new Date('2026-12-02'),
      },
      company: {
        name: 'PT. Shunda Flavor Nusantara',
        logoSrc: '/images/companies/shunda-logo.png',
        website: 'https://shundafood.id',
      },
      done: [
        'Developed a B2B company profile website to showcase services and attract business clients.',
        'Implemented SEO best practices to improve website visibility and search engine rankings.',
        'Implemented Content Management System (CMS) to allow easy content updates and management for the website.',
        'Teamed up with stakeholders IT team to set up the website on a cloud server and configure domain and SSL certificate.',
        'Collaborated with the design team to ensure the website design aligns with the company brand and user experience.',
      ],
    },
    {
      position: 'Software Engineer',
      period: {
        start: new Date('2026-02-28'),
      },
      company: {
        name: 'PT. Pharos Indonesia',
        logoSrc: '/images/companies/pharos-logo.svg',
        website: 'https://www.pharos.co.id',
      },
      done: [
        'Deployed an API gateway as the first step toward microservices and used it to manage multiple services',
        'Migrated legacy secrets into HashiCorp Vault',
        'Rewrote the Excel product import program using the new architecture, making it scalable and its business logic reusable, which cuts development time for future changes by 60%.',
        'Reviewed code, mentored other developers, and enforced new coding standards.',
        'Integrated and created a program to import outletsʼ products from external services for product creation automation.',
        'Led a workshop for 20+ developers to introduce the new project architecture and new coding standards.',
        'Reduced the existing Docker image size by 60% and build time by 40%.',
        'Automated database migrations during deployments.',
      ],
    },
    {
      position: 'Software Engineer (Intern)',
      period: {
        start: new Date('2025-02-03'),
        end: new Date('2026-02-03'),
      },
      company: {
        name: 'PT. Pharos Indonesia',
        logoSrc: '/images/companies/pharos-logo.svg',
        website: 'https://www.pharos.co.id',
      },
      done: [
        'Designed the architecture for new services and for migrating existing applications, using Clean Architecture and Domain-Driven Design (DDD).',
        'Built a DICOM service that tracks clinic ultrasound usage and automatically converts results into images.',
        'Teamed up with DevOps and IT support teams to set up ultrasound machine in a clinic',
        'Deployed Evolution API for WhatsApp automation and an SFTP server linked to Google Cloud Storage for secure external file exchange.',
        'Collaborated with QA teams to resolve bugs and improve software quality.',
        'Set up and integrated Sentry across services and web apps to improve error monitoring.',
        'Developed reusable Next.js and Flutter widgets (e.g., chat) by integrating Chatwoot as the base chat engine and Jitsi for video call integration.',
      ],
    },
  ],
} as const;
