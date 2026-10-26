// src/types/index.ts

export type ProficiencyLevel = "learning" | "familiar" | "used-in-projects" | "proficient";

export type ProjectStatus =
    | "proposed"
    | "in-development"
    | "completed"
    | "archived";

export interface SocialLink {
    platform: string;
    url: string;
    label: string;
}

export interface Profile {
    name: string;
    title: string;
    tagline: string;
    introduction: string;
    email: string;
    whatsapp: string;
    location: string;
    university: string;
    campus: string;
    programme: string;
    academicYear: string;
    github: string;
    linkedin: string;
    instagram: string;
    facebook: string;
    cvPath: string | null;
    socials: SocialLink[];
}

export interface Skill {
    name: string;
    level: ProficiencyLevel;
    icon?: string;
}

export interface SkillCategory {
    id: string;
    title: string;
    description: string;
    skills: Skill[];
}

export interface ProjectLink {
    type: "github" | "live" | "demo";
    url: string | null;
    label: string;
}

export interface Project {
    id: string;
    name: string;
    category: string;
    shortDescription: string;
    problem: string;
    solution: string;
    features: string[];
    technologies: string[];
    status: ProjectStatus;
    links: ProjectLink[];
    highlight?: boolean;
}

export interface EducationEntry {
    id: string;
    institution: string;
    campus?: string;
    degree: string;
    field: string;
    period: string;
    status: "current" | "completed";
    subjects: string[];
    description?: string;
}

export interface ExperienceCategory {
    id: string;
    title: string;
    icon: string;
    entries: ExperienceEntry[];
}

export interface ExperienceEntry {
    title: string;
    description: string;
    period?: string;
    tags?: string[];
}

export interface CareerGoal {
    id: string;
    goal: string;
    icon: string;
}
