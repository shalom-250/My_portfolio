// src/data/projects.ts
import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "smart-classroom",
        name: "Smart Classroom Reservation & Attendance System",
        category: "University / Smart Campus Technology",
        shortDescription:
            "A proposed smart campus system for improving classroom allocation and attendance management at the University of Rwanda, Huye Campus.",
        problem:
            "Students and class representatives may struggle to identify available classrooms, coordinate reservations, and prevent booking conflicts. Manual attendance processes are also prone to errors and inconsistencies.",
        solution:
            "A centralized platform that manages classroom availability, handles reservation requests through approval workflows, and provides role-based access for students, class representatives, lecturers, and administrators. A future phase will explore IoT-assisted attendance tracking.",
        features: [
            "Classroom registration and management",
            "Real-time classroom availability tracking",
            "Reservation request and approval workflow",
            "Role-based access control (student, class rep, lecturer, admin)",
            "Reservation conflict prevention logic",
            "Attendance management (planned future phase)",
            "Fingerprint-based attendance investigation (future IoT phase)",
        ],
        technologies: [
            "Next.js",
            "NestJS",
            "PostgreSQL",
            "Prisma",
            "Docker",
            "Redis",
            "IoT (planned)",
        ],
        status: "proposed",
        links: [
            { type: "github", url: null, label: "GitHub (Coming Soon)" },
            { type: "live", url: null, label: "Live Demo (Not Yet Available)" },
        ],
        highlight: true,
    },
    {
        id: "qtrix-warehouse",
        name: "Q-Trix Warehouse Management Platform",
        category: "Enterprise Software / Warehouse Management",
        shortDescription:
            "A planned monorepo-based warehouse management platform serving both web and mobile client applications from a shared backend.",
        problem:
            "Managing warehouse operations across multiple client platforms (web and mobile) often leads to duplicated business logic and inconsistent data. Maintaining separate backends for each platform increases complexity and maintenance overhead.",
        solution:
            "A monorepo architecture with a single NestJS backend serving both a Next.js web client and an Expo React Native mobile app. Shared TypeScript packages ensure consistency across client applications.",
        features: [
            "Shared backend for web and mobile clients",
            "Centralized authentication and authorization",
            "Warehouse and cargo management modules",
            "Finance and reporting features",
            "Gate operations and tally management",
            "Real-time notifications",
            "Shared database and validation packages",
            "Containerized development infrastructure",
        ],
        technologies: [
            "Next.js",
            "Expo React Native",
            "NestJS",
            "PostgreSQL",
            "Prisma",
            "Redis",
            "Docker",
            "TypeScript",
        ],
        status: "in-development",
        links: [
            { type: "github", url: null, label: "GitHub (Private)" },
            { type: "live", url: null, label: "Live Demo (Not Yet Available)" },
        ],
        highlight: true,
    },
    {
        id: "amamaza",
        name: "Amamaza Platform",
        category: "Web Application / Backend Development",
        shortDescription:
            "A backend development project involving API architecture, database integration, and modern infrastructure tooling.",
        problem:
            "Building a reliable web platform backend requires careful integration of multiple technologies — database ORM, file storage, caching, containerization, and OAuth — in a way that remains maintainable as the project grows.",
        solution:
            "A NestJS-based backend with PostgreSQL for data persistence, Redis for caching, Docker Compose for containerized development, and MinIO for S3-compatible file storage. OAuth integration is planned.",
        features: [
            "NestJS REST API architecture",
            "PostgreSQL database integration",
            "Redis caching layer",
            "Docker Compose development environment",
            "S3-compatible file storage with MinIO",
            "OAuth integration (planned)",
            "Environment configuration and deployment exploration",
        ],
        technologies: [
            "NestJS",
            "PostgreSQL",
            "Prisma",
            "Redis",
            "Docker Compose",
            "MinIO",
            "TypeScript",
        ],
        status: "in-development",
        links: [
            { type: "github", url: null, label: "GitHub (Private)" },
            { type: "live", url: null, label: "Live Demo (Not Yet Available)" },
        ],
        highlight: false,
    },
    {
        id: "student-pm",
        name: "Student Project Management System",
        category: "Web Development / Academic Project",
        shortDescription:
            "A web application concept for organizing and managing student projects, tasks, and progress.",
        problem:
            "Students working on multiple projects simultaneously need a simple, organized way to track tasks, monitor project status, and maintain project information without relying on scattered notes or documents.",
        solution:
            "A lightweight, responsive web application built with HTML, CSS, and JavaScript that allows students to create and manage projects, add tasks, and track overall progress.",
        features: [
            "Project creation and listing",
            "Task tracking within projects",
            "Project status management",
            "Organized project information display",
            "Responsive user interface",
        ],
        technologies: ["HTML", "CSS", "JavaScript"],
        status: "completed",
        links: [
            { type: "github", url: null, label: "GitHub (Coming Soon)" },
            { type: "live", url: null, label: "Live Demo (Coming Soon)" },
        ],
        highlight: false,
    },
];
