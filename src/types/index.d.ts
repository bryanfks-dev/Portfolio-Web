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
  readonly programmingLanguages: ICapabilityTool[];
  readonly frontendAndMobileFrameworks: ICapabilityTool[];
  readonly backendFrameworks: ICapabilityTool[];
  readonly cloudAndDevOps: ICapabilityTool[];
  readonly databases: ICapabilityTool[];
  readonly others: ICapabilityTool[];
}

interface IExperiencesData {
  readonly experiences: IExperience[];
}

export interface IIntroductionData {
  readonly user: IUser;
  readonly location: ILocation;
}
