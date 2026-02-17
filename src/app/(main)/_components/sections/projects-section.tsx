import { PROJECTS_DATA } from '@/data/projects';
import ProjectCard from '../project-card';
import SeeAllProjectsButton from '../see-all-projects-button';

const MAX_PROJECTS_COUNT_TO_SHOW = 4;

export default function ProjectsSection() {
  return (
    <div id="projects" className="bg-primary">
      <h2 className="mb-6 text-2xl font-bold" data-aos="fade-up">
        💻 My Works
      </h2>

      <div className="flex flex-col gap-16">
        <div className="grid grid-cols-2 gap-4">
          {PROJECTS_DATA.projects
            .slice(
              0,
              Math.min(
                PROJECTS_DATA.projects.length,
                MAX_PROJECTS_COUNT_TO_SHOW,
              ),
            )
            .map((project, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
                key={project.name}
              >
                <ProjectCard project={project} />
              </div>
            ))}
        </div>

        <div
          className="mx-auto"
          data-aos="fade-up"
          data-aos-delay={(PROJECTS_DATA.projects.length + 1) * 100}
        >
          <SeeAllProjectsButton />
        </div>
      </div>
    </div>
  );
}
