"use client";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    className?: string;
    centered?: boolean;
}

export default function SectionHeading({
    eyebrow,
    title,
    subtitle,
    className,
    centered = true,
}: SectionHeadingProps) {
    return (
        <div className={cn(centered && "text-center", className)}>
            {eyebrow && (
                <p className="text-[#168BFF] text-sm font-semibold uppercase tracking-widest mb-3 font-mono">
                    {eyebrow}
                </p>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8FAFC] leading-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-4 text-[#A9B8CC] text-lg max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
            <div className={cn("mt-6 flex gap-1", centered ? "justify-center" : "justify-start")}>
                <div className="h-1 w-12 rounded-full bg-[#168BFF]" />
                <div className="h-1 w-4 rounded-full bg-[#38BDF8]/50" />
                <div className="h-1 w-2 rounded-full bg-[#38BDF8]/25" />
            </div>
        </div>
    );
}
