"use client";
import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "accent" | "success" | "warning" | "tech";
}

export default function Badge({
    children,
    className,
    variant = "default",
}: BadgeProps) {
    const variants = {
        default:
            "bg-[#1E3A5F]/60 text-[#A9B8CC] border border-[#1E3A5F]",
        accent:
            "bg-[#168BFF]/10 text-[#38BDF8] border border-[#168BFF]/30",
        success:
            "bg-green-400/10 text-green-400 border border-green-400/30",
        warning:
            "bg-yellow-400/10 text-yellow-400 border border-yellow-400/30",
        tech:
            "bg-[#0D1B2A] text-[#A9B8CC] border border-[#1E3A5F] hover:border-[#168BFF]/50 hover:text-[#38BDF8] transition-colors duration-200",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}
