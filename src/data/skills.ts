// src/data/skills.ts
import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
    {
        id: "languages",
        title: "Programming Languages",
        description: "Languages I write and understand",
        skills: [
            { name: "JavaScript", level: "used-in-projects" },
            { name: "TypeScript", level: "familiar" },
            { name: "HTML", level: "proficient" },
            { name: "CSS", level: "proficient" },
            { name: "C", level: "familiar" },
        ],
    },
    {
        id: "frontend",
        title: "Frontend Development",
        description: "Building interfaces and user experiences",
        skills: [
            { name: "React", level: "used-in-projects" },
            { name: "Next.js", level: "used-in-projects" },
            { name: "Tailwind CSS", level: "used-in-projects" },
            { name: "Responsive Design", level: "used-in-projects" },
        ],
    },
    {
        id: "backend",
        title: "Backend Development",
        description: "APIs, servers, and application logic",
        skills: [
            { name: "Node.js", level: "familiar" },
            { name: "NestJS", level: "learning" },
            { name: "Express.js", level: "familiar" },
            { name: "REST APIs", level: "familiar" },
            { name: "Authentication & Authorization", level: "familiar" },
            { name: "Data Validation", level: "familiar" },
            { name: "Swagger / API Docs", level: "learning" },
        ],
    },
    {
        id: "databases",
        title: "Databases & Data Management",
        description: "Storing, querying, and managing data",
        skills: [
            { name: "PostgreSQL", level: "familiar" },
            { name: "MySQL", level: "familiar" },
            { name: "Prisma ORM", level: "learning" },
            { name: "SQL", level: "familiar" },
            { name: "Relational DB Design", level: "familiar" },
        ],
    },
    {
        id: "tools",
        title: "Dev Tools & Infrastructure",
        description: "Tools that support development and deployment",
        skills: [
            { name: "Git & GitHub", level: "used-in-projects" },
            { name: "Docker", level: "learning" },
            { name: "Docker Compose", level: "learning" },
            { name: "Redis", level: "learning" },
            { name: "Linux Fundamentals", level: "familiar" },
            { name: "VS Code", level: "proficient" },
        ],
    },
    {
        id: "emerging",
        title: "Emerging Interests",
        description: "Areas I am actively exploring",
        skills: [
            { name: "AI Automation", level: "learning" },
            { name: "Cloud Technologies", level: "learning" },
            { name: "Kubernetes", level: "learning" },
            { name: "Software Architecture", level: "learning" },
            { name: "Monorepo Development", level: "learning" },
            { name: "Real-time Applications", level: "learning" },
        ],
    },
];

export const proficiencyLabels: Record<string, { label: string; color: string }> = {
    learning: { label: "Learning", color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20" },
    familiar: { label: "Familiar", color: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
    "used-in-projects": { label: "Used in Projects", color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20" },
    proficient: { label: "Proficient", color: "text-green-400 bg-green-400/10 border-green-400/20" },
};
