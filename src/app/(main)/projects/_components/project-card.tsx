import Image from 'next/image';
import Link from 'next/link';
import { IProject } from '@/types/project';

interface IProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: IProjectCardProps) {
  return (
    <Link
      className="group flex items-center gap-6 rounded-xl p-8 text-primary transition duration-100 hover:bg-primary_hover"
      href={`/projects/${project.name}`}
    >
      <Image
        src={project.image.src}
        alt={project.image.alt}
        height={0}
        width={0}
        unoptimized
        className="h-32 w-full rounded-xl object-cover object-center md:h-56 md:max-w-86 md:min-w-86"
      />

      <div className="flex flex-col gap-2">
        <span className="text-gray-400">{project.techStack.join(', ')}</span>
        <span className="text-lg font-bold group-hover:text-brand-500">
          {project.name}
        </span>
        <span className="line-clamp-2">{project.description}</span>
      </div>
    </Link>
  );
}
