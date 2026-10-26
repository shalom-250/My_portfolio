// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .trim();
}

export const projectStatusConfig = {
    proposed: {
        label: "Proposed",
        color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    },
    "in-development": {
        label: "In Development",
        color: "text-blue-400 bg-blue-400/10 border-blue-400/30",
    },
    completed: {
        label: "Completed",
        color: "text-green-400 bg-green-400/10 border-green-400/30",
    },
    archived: {
        label: "Archived",
        color: "text-gray-400 bg-gray-400/10 border-gray-400/30",
    },
} as const;
