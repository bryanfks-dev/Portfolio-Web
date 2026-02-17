import { IProjectsData } from '@/types';

export const PROJECTS_DATA: IProjectsData = {
  projects: [
    {
      name: 'Notify',
      releasedYear: 2023,
      image: {
        src: '/images/projects/notify.jpg',
        alt: 'Notify App Screenshot',
      },
      description:
        'A mobile application to manage and notify users about apartment or boarding house payments based on deadlines and record daily food expenses. Created using Flutter and Firebase. Created in the form of a mobile application to prioritize ease of access for users.',
      techStack: ['Flutter'],
      problems: [
        'Many tenants often forget payment deadlines for their apartments or boarding houses, leading to late fees and strained relationships with landlords.',
        'Tracking daily food expenses can be tedious and time-consuming, making it difficult for tenants to manage their budgets effectively.',
      ],
      solutions: [
        'The app sends timely notifications to users about upcoming payment deadlines, helping them avoid late fees and maintain good relationships with their landlords.',
        'It provides an easy-to-use interface for recording and categorizing daily food expenses, allowing users to track their spending habits and manage their budgets more effectively.',
      ],
    },
    {
      name: 'Courtly',
      releasedYear: 2024,
      image: {
        src: '/images/projects/courtly.png',
        alt: 'Courtly App Screenshot',
      },
      techStack: ['Flutter', 'Go'],
      description:
        'A mobile application for managing court-related tasks and information. Created using Flutter and Go. The app provides a centralized platform for users to manage their court-related tasks, including scheduling court dates and receiving timely notifications about updates and deadlines.',
      problems: [
        'Many small business owners struggle to get timely updates and manage their court-related tasks effectively, including scheduling court dates.',
        'The lack of a centralized platform for managing court-related information can lead to missed deadlines and increased stress for users.',
      ],
      solutions: [
        'The app provides a centralized platform for users to manage their court-related tasks, including scheduling court dates.',
        'It sends timely notifications and updates to users about their court-related tasks, helping them stay organized and avoid missed deadlines.',
      ],
    },
  ],
} as const;
