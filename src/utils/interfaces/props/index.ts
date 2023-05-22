import { Project as IProject, Skill as ISkill } from '@/utils/interfaces';

export interface IProjectProps {
  projects: IProject[];
}

export interface IProjectComponentProps {
  project: IProject;
  showLinks?: boolean;
  dragFree?: boolean;
}
export interface ISkillProps {
  skills: ISkill[];
}

export interface ISkillComponentProps {
  skill: ISkill;
  widthCustom?: boolean;
}

export interface IDeveloperIconProps {
  icon: string;
}
