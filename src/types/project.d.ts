import { TCapableToolName } from './capabilities';

interface IProjectImage {
  src: string;
  alt: string;
}

interface IProject {
  readonly image: IProjectImage;
  readonly releasedYear?: number;
  readonly name: string;
  readonly description: string;
  readonly techStack: TCapableToolName[];
  readonly url?: string;
  readonly problems: string[];
  readonly solutions: string[];
}
