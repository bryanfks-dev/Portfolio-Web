interface IExperience {
  readonly position: string;
  readonly period: IExperiencePeriod;
  readonly company: IExperienceCompany;
  readonly done: string[];
}

interface IExperiencePeriod {
  readonly start: Date;
  readonly end?: Date;
}

interface IExperienceCompany {
  readonly name: string;
  readonly logoSrc: string;
  readonly website?: string;
}
