'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { PROJECTS_DATA } from '@/data/projects';
import BackButton from './_components/back-button';
import ReadAgainButton from './_components/read-again-button';
import VisitProjectUrlButton from './_components/visit-project-url-button';

export default function ProjectDetailPage() {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  const { name } = useParams<{ name: string }>();

  const project = PROJECTS_DATA.projects.find(
    (project) => project.name.toLowerCase() === name.toLowerCase(),
  );
  if (project === undefined) {
    return <div>Project not found</div>;
  }

  return (
    <section className="mx-8 my-16 flex flex-col gap-8 md:mx-28 lg:mx-72">
      <div className="flex flex-col items-center gap-8">
        <div data-aos="fade-up">
          <BackButton />
        </div>

        <h5
          className="text-display-md font-bold text-primary"
          data-aos="fade-up"
        >
          {project.name}
        </h5>
        <span className="text-brand-500" data-aos="fade-up" data-aos-delay="50">
          {project.techStack.join(', ')}
        </span>
        <Image
          width={0}
          height={0}
          src={project.image.src}
          className="h-full max-h-96 w-auto rounded-lg md:max-h-128 lg:max-h-156"
          unoptimized
          loading="eager"
          alt={project.image.alt}
          data-aos="fade-up"
          data-aos-delay="100"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p
          className="text-justify text-tertiary"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {project.description}
        </p>
        {project.url && (
          <div data-aos="fade-up" data-aos-delay="200">
            <VisitProjectUrlButton url={project.url} />
          </div>
        )}
      </div>

      <hr
        className="h-1 w-full border-tertiary"
        data-aos="fade-up"
        data-aos-delay="200"
      />

      <div className="flex flex-col gap-8">
        <h2
          className="text-2xl font-semibold"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          ❓ The Problem
        </h2>

        <ol className="flex list-decimal flex-col gap-4 text-tertiary">
          {project.problems.map((problem, index) => (
            <li
              key={problem}
              className="ml-4"
              data-aos="fade-right"
              data-aos-delay={300 + index * 50}
            >
              {problem}
            </li>
          ))}
        </ol>
      </div>

      <hr
        className="h-1 w-full border-tertiary"
        data-aos="fade-up"
        data-aos-delay={350 + (project.problems.length + 1) * 50}
      />

      <div className="flex flex-col gap-8">
        <h2
          className="text-2xl font-semibold"
          data-aos="fade-up"
          data-aos-delay={400 + (project.problems.length + 1) * 50}
        >
          ✨ My Solution
        </h2>

        <ol className="flex list-decimal flex-col gap-4 text-tertiary">
          {project.solutions.map((solution, index) => (
            <li
              key={solution}
              className="ml-4"
              data-aos="fade-right"
              data-aos-delay={
                450 + (project.problems.length + 1) * 50 + index * 50
              }
            >
              {solution}
            </li>
          ))}
        </ol>
      </div>

      <hr
        className="h-1 w-full border-tertiary"
        data-aos="fade-up"
        data-aos-delay={
          500 +
          (project.problems.length + 1) * 50 +
          (project.solutions.length + 1) * 50
        }
      />

      <div
        className="mx-auto"
        data-aos="fade-up"
        data-aos-delay={
          550 +
          (project.problems.length + 1) * 50 +
          (project.solutions.length + 1) * 50
        }
      >
        <ReadAgainButton />
      </div>
    </section>
  );
}
