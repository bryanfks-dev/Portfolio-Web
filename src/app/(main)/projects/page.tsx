'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import { PROJECTS_DATA } from '@/data/projects';
import ProjectCard from './_components/project-card';

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <section className="mx-8 my-16 flex flex-col gap-8 md:mx-28 lg:mx-72">
      <h2
        className="mb-4 text-2xl font-bold text-primary"
        data-aos="fade-up"
        data-aos-delya="50"
      >
        💻 All My Projects
      </h2>

      <div className="flex flex-col gap-8">
        {PROJECTS_DATA.projects.map((project, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={(index + 1) * 100}
            key={project.name}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
