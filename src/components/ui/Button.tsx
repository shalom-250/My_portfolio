"use client";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
    href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const base =
            "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111F] disabled:opacity-50 disabled:cursor-not-allowed";

        const variants = {
            primary:
                "bg-[#168BFF] hover:bg-[#1a99ff] text-white shadow-lg hover:shadow-[#168BFF]/25 hover:scale-[1.02] active:scale-[0.98]",
            secondary:
                "bg-transparent border-2 border-[#168BFF] text-[#168BFF] hover:bg-[#168BFF]/10 hover:scale-[1.02] active:scale-[0.98]",
            ghost:
                "bg-transparent text-[#A9B8CC] hover:text-[#F8FAFC] hover:bg-white/5",
            outline:
                "bg-[#102238] border border-[#1E3A5F] text-[#F8FAFC] hover:border-[#168BFF] hover:bg-[#168BFF]/5",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-2.5 text-sm",
            lg: "px-8 py-3.5 text-base",
        };

        return (
            <button
                ref={ref}
                className={cn(base, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
export default Button;
