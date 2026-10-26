"use client";
import { useState, useEffect } from "react";
import { Code2, Menu, X, Download } from "lucide-react";
import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Find active section
            const sections = navLinks.map((l) => l.href.slice(1));
            for (const section of sections.reverse()) {
                const el = document.getElementById(section);
                if (el && window.scrollY >= el.offsetTop - 100) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-[#07111F]/95 backdrop-blur-md border-b border-[#1E3A5F]/50 shadow-xl shadow-black/20"
                    : "bg-transparent"
            )}
        >
            <nav className="container-max px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
                        className="flex items-center gap-2 group"
                        aria-label="Go to homepage"
                    >
                        <div className="relative w-9 h-9 rounded-lg bg-[#168BFF]/10 border border-[#168BFF]/30 flex items-center justify-center group-hover:bg-[#168BFF]/20 transition-colors duration-200">
                            <Code2 className="w-5 h-5 text-[#168BFF]" />
                        </div>
                        <span className="font-bold text-[#F8FAFC] text-base hidden sm:block">
                            <span className="gradient-text">Shalom</span>
                            <span className="text-[#A9B8CC]">.dev</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <ul className="hidden lg:flex items-center gap-1" role="list">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                    className={cn(
                                        "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                        activeSection === link.href.slice(1)
                                            ? "text-[#168BFF] bg-[#168BFF]/10"
                                            : "text-[#A9B8CC] hover:text-[#F8FAFC] hover:bg-white/5"
                                    )}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        {profile.cvPath ? (
                            <a href={profile.cvPath} download aria-label="Download CV">
                                <Button size="sm" variant="outline">
                                    <Download className="w-4 h-4" />
                                    Download CV
                                </Button>
                            </a>
                        ) : (
                            <Button
                                size="sm"
                                variant="outline"
                                disabled
                                title="CV not yet available"
                                className="opacity-60 cursor-not-allowed"
                            >
                                <Download className="w-4 h-4" />
                                CV (Coming Soon)
                            </Button>
                        )}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg text-[#A9B8CC] hover:text-[#F8FAFC] hover:bg-white/5 transition-colors"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div
                        id="mobile-menu"
                        className="lg:hidden border-t border-[#1E3A5F]/50 bg-[#07111F]/98 backdrop-blur-md"
                    >
                        <ul className="py-4 space-y-1 px-2" role="list">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                        className={cn(
                                            "block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                                            activeSection === link.href.slice(1)
                                                ? "text-[#168BFF] bg-[#168BFF]/10"
                                                : "text-[#A9B8CC] hover:text-[#F8FAFC] hover:bg-white/5"
                                        )}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-2 px-2">
                                {profile.cvPath ? (
                                    <a href={profile.cvPath} download className="block">
                                        <Button size="md" variant="outline" className="w-full">
                                            <Download className="w-4 h-4" />
                                            Download CV
                                        </Button>
                                    </a>
                                ) : (
                                    <Button size="md" variant="outline" className="w-full opacity-60 cursor-not-allowed" disabled>
                                        <Download className="w-4 h-4" />
                                        CV (Coming Soon)
                                    </Button>
                                )}
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
