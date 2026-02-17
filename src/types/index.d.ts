import { IProject } from './project';

interface IHomeData {
  readonly avatar: IAvatar;
  readonly user: IUser;
  readonly socials: ISocial[];
  readonly records: IRecord[];
}

interface IMessageMeData {
  readonly email: string;
  readonly subject?: string;
  readonly body?: string;
}

interface IProjectsData {
  readonly projects: IProject[];
}

interface ICapabilitiesData {
  readonly tools: ICapabilityTool[];
}

interface IExperiencesData {
  readonly experiences: IExperience[];
}

export interface IIntroductionData {
  readonly user: IUser;
  readonly location: ILocation;
  readonly bigFanOfVibeCode: boolean;
}
