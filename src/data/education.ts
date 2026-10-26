// src/data/education.ts
import { EducationEntry, ExperienceCategory, CareerGoal } from "@/types";

export const educationEntries: EducationEntry[] = [
    {
        id: "ur-bit",
        institution: "University of Rwanda",
        campus: "Huye Campus",
        degree: "Bachelor's Degree",
        field: "Business Information Technology (BIT)",
        period: "2022 – Present",
        status: "current",
        description:
            "Studying the intersection of business and information technology, with a personal focus on software development, database systems, and modern web technologies.",
        subjects: [
            "Software Development",
            "Database Systems",
            "Web Development",
            "Data Communication and Networking",
            "Multimedia Technology",
            "Research Methodology",
            "E-Business and E-Commerce",
            "Systems Analysis and Design",
            "Business Information Systems",
        ],
    },
];

export const experienceCategories: ExperienceCategory[] = [
    {
        id: "academic",
        title: "Academic Projects",
        icon: "GraduationCap",
        entries: [
            {
                title: "Smart Classroom Reservation System (Concept)",
                description:
                    "Designed and proposed a smart campus system for classroom allocation and attendance management at the University of Rwanda. Defined system requirements, user roles, and a proposed technical architecture using NestJS, PostgreSQL, and Docker.",
                tags: ["System Design", "NestJS", "PostgreSQL", "Docker"],
            },
            {
                title: "Student Project Management Web App",
                description:
                    "Built a basic project management interface using HTML, CSS, and JavaScript, practicing frontend development fundamentals and UI layout techniques.",
                tags: ["HTML", "CSS", "JavaScript"],
            },
        ],
    },
    {
        id: "backend",
        title: "Backend Development",
        icon: "Server",
        entries: [
            {
                title: "Amamaza Platform Backend",
                description:
                    "Developed and explored backend API architecture using NestJS and PostgreSQL. Integrated Docker Compose for containerized development, Redis for caching, and MinIO for file storage.",
                tags: ["NestJS", "PostgreSQL", "Redis", "Docker", "MinIO"],
            },
            {
                title: "Q-Trix Monorepo Architecture",
                description:
                    "Designed a monorepo-based backend system architecture intended to serve both web and mobile client applications from a single shared NestJS backend with shared TypeScript packages.",
                tags: ["Monorepo", "NestJS", "TypeScript", "System Architecture"],
            },
            {
                title: "REST API Design & Authentication",
                description:
                    "Practiced building REST APIs with authentication, authorization, data validation, and Swagger documentation using NestJS and Express.js.",
                tags: ["REST API", "JWT", "NestJS", "Express.js"],
            },
        ],
    },
    {
        id: "learning",
        title: "Independent Learning",
        icon: "BookOpen",
        entries: [
            {
                title: "Modern Framework Exploration",
                description:
                    "Actively learning Next.js (App Router), NestJS, and TypeScript through personal projects and online resources. Building hands-on familiarity with modern frontend and backend patterns.",
                tags: ["Next.js", "NestJS", "TypeScript"],
            },
            {
                title: "Database & ORM Practice",
                description:
                    "Working with PostgreSQL and MySQL for relational database design, SQL queries, and exploring Prisma ORM for type-safe database access in TypeScript projects.",
                tags: ["PostgreSQL", "MySQL", "Prisma", "SQL"],
            },
            {
                title: "Containerization with Docker",
                description:
                    "Learning Docker and Docker Compose to create reproducible development environments and explore containerized application deployment.",
                tags: ["Docker", "Docker Compose", "Linux"],
            },
        ],
    },
    {
        id: "exploration",
        title: "Technical Exploration",
        icon: "Telescope",
        entries: [
            {
                title: "AI Automation Interest",
                description:
                    "Exploring how AI tools and automation can be applied to real-world workflows and software development productivity. Interested in integrating AI capabilities into practical applications.",
                tags: ["AI", "Automation", "Productivity"],
            },
            {
                title: "Cloud & DevOps Fundamentals",
                description:
                    "Beginning to explore cloud infrastructure concepts, Kubernetes basics, and modern DevOps practices as part of a broader goal to understand the full software deployment lifecycle.",
                tags: ["Cloud", "Kubernetes", "DevOps", "CI/CD"],
            },
            {
                title: "C Programming",
                description:
                    "Practiced low-level programming fundamentals using C, reinforcing understanding of memory management, algorithms, and computational thinking.",
                tags: ["C", "Algorithms", "Problem Solving"],
            },
        ],
    },
];

export const careerGoals: CareerGoal[] = [
    {
        id: "1",
        goal: "Complete my BIT studies and graduate with a strong foundation in software engineering.",
        icon: "GraduationCap",
    },
    {
        id: "2",
        goal: "Improve my backend engineering skills — designing robust APIs and database schemas.",
        icon: "Server",
    },
    {
        id: "3",
        goal: "Build and deploy reliable, production-ready applications end-to-end.",
        icon: "Rocket",
    },
    {
        id: "4",
        goal: "Develop practical experience with cloud infrastructure and DevOps practices.",
        icon: "Cloud",
    },
    {
        id: "5",
        goal: "Explore how AI automation can be applied to solve real business problems.",
        icon: "Brain",
    },
    {
        id: "6",
        goal: "Contribute to collaborative software projects and open-source communities.",
        icon: "Users",
    },
    {
        id: "7",
        goal: "Build software that creates meaningful impact in Rwanda and across Africa.",
        icon: "Globe",
    },
];
