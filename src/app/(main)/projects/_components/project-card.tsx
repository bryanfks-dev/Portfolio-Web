import Image from 'next/image';
import Link from 'next/link';
import { IProject } from '@/types/project';

interface IProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: IProjectCardProps) {
  return (
    <Link
      className="flex items-center gap-6 text-primary"
      href={`/projects/${project.name}`}
    >
      <Image
        src={project.image.src}
        alt={project.image.alt}
        height={0}
        width={0}
        unoptimized
        className="md:w-9xl h-32 w-5xl rounded-xl object-cover object-top md:h-52 lg:w-2xl"
      />

      <div className="flex flex-col gap-2">
        <span className="text-gray-400">{project.techStack.join(', ')}</span>
        <span className="text-lg font-bold">{project.name}</span>
        <span className="line-clamp-2">{project.description}</span>
      </div>
    </Link>
  );
}
