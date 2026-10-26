"use client";
import { Code2, Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";
import { profile } from "@/data/profile";

const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

const socialIcons: Record<string, React.ReactNode> = {
    GitHub: <Github className="w-4 h-4" />,
    LinkedIn: <Linkedin className="w-4 h-4" />,
    Instagram: <Instagram className="w-4 h-4" />,
    Email: <Mail className="w-4 h-4" />,
};

export default function Footer() {
    const year = new Date().getFullYear();

    const handleNavClick = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="bg-[#0D1B2A] border-t border-[#1E3A5F]/50 mt-0">
            <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-[#168BFF]/10 border border-[#168BFF]/30 flex items-center justify-center">
                                <Code2 className="w-4 h-4 text-[#168BFF]" />
                            </div>
                            <span className="font-bold text-[#F8FAFC]">
                                <span className="gradient-text">Shalom</span>
                                <span className="text-[#A9B8CC]">.dev</span>
                            </span>
                        </div>
                        <p className="text-[#A9B8CC] text-sm leading-relaxed max-w-xs">
                            Aspiring backend developer and BIT student at the University of Rwanda,
                            building software that solves real-world problems.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-[#F8FAFC] font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                        className="text-[#A9B8CC] hover:text-[#168BFF] text-sm transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-[#F8FAFC] font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {profile.socials.map((social) => (
                                <a
                                    key={social.platform}
                                    href={social.url}
                                    target={social.url.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-lg bg-[#102238] border border-[#1E3A5F] flex items-center justify-center text-[#A9B8CC] hover:text-[#168BFF] hover:border-[#168BFF]/50 transition-all duration-200"
                                >
                                    {socialIcons[social.platform] || <Mail className="w-4 h-4" />}
                                </a>
                            ))}
                            <a
                                href={`mailto:${profile.email}`}
                                aria-label="Send email"
                                className="w-9 h-9 rounded-lg bg-[#102238] border border-[#1E3A5F] flex items-center justify-center text-[#A9B8CC] hover:text-[#168BFF] hover:border-[#168BFF]/50 transition-all duration-200"
                            >
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                        <p className="text-[#A9B8CC] text-sm">{profile.email}</p>
                        <p className="text-[#A9B8CC] text-sm">{profile.location}</p>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-[#1E3A5F]/50 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[#A9B8CC] text-sm">
                        © {year} {profile.name}. All rights reserved.
                    </p>
                    <p className="text-[#A9B8CC] text-sm flex items-center gap-1">
                        Built with{" "}
                        <Heart className="w-3 h-3 text-red-400 fill-red-400" aria-hidden="true" />
                        {" "}using Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
