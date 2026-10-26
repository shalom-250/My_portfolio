"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown, ChevronUp, Tag, Layers } from "lucide-react";
import { projects } from "@/data/projects";
import { projectStatusConfig } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export default function Projects() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <section id="projects" className="section-padding bg-[#0D1B2A]/50" aria-label="Featured projects">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeading
                        eyebrow="My Work"
                        title="Featured Projects"
                        subtitle="Academic concepts, personal builds, and technical explorations I've worked on."
                    />
                </motion.div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {projects.map((project, index) => {
                        const isExpanded = expandedId === project.id;
                        const statusConfig = projectStatusConfig[project.status];

                        return (
                            <motion.article
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={cn(
                                    "card-base overflow-hidden transition-all duration-300",
                                    "hover:border-[#168BFF]/40 glow-blue-hover",
                                    project.highlight && "border-[#168BFF]/30"
                                )}
                            >
                                {/* Card Header */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between gap-3 mb-3">
                                        <div className="flex items-center gap-2">
                                            <Layers className="w-4 h-4 text-[#168BFF] flex-shrink-0" />
                                            <span className="text-[#A9B8CC] text-xs">{project.category}</span>
                                        </div>
                                        <span
                                            className={cn(
                                                "text-xs font-semibold px-2.5 py-0.5 rounded-full border flex-shrink-0",
                                                statusConfig.color
                                            )}
                                        >
                                            {statusConfig.label}
                                        </span>
                                    </div>

                                    <h3 className="text-[#F8FAFC] font-bold text-lg leading-snug mb-3">
                                        {project.name}
                                    </h3>
                                    <p className="text-[#A9B8CC] text-sm leading-relaxed">{project.shortDescription}</p>

                                    {/* Tech tags */}
                                    <div className="flex flex-wrap gap-1.5 mt-4">
                                        {project.technologies.slice(0, 5).map((tech) => (
                                            <Badge key={tech} variant="tech">{tech}</Badge>
                                        ))}
                                        {project.technologies.length > 5 && (
                                            <Badge variant="default">+{project.technologies.length - 5}</Badge>
                                        )}
                                    </div>
                                </div>

                                {/* Expandable Details */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="border-t border-[#1E3A5F] px-6 py-5 space-y-4 bg-[#0D1B2A]/30">
                                                {/* Problem */}
                                                <div>
                                                    <h4 className="text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-2">Problem</h4>
                                                    <p className="text-[#A9B8CC] text-sm leading-relaxed">{project.problem}</p>
                                                </div>
                                                {/* Solution */}
                                                <div>
                                                    <h4 className="text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-2">Solution</h4>
                                                    <p className="text-[#A9B8CC] text-sm leading-relaxed">{project.solution}</p>
                                                </div>
                                                {/* Features */}
                                                <div>
                                                    <h4 className="text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-2">Key Features</h4>
                                                    <ul className="space-y-1">
                                                        {project.features.map((f) => (
                                                            <li key={f} className="flex items-start gap-2 text-[#A9B8CC] text-sm">
                                                                <span className="text-[#168BFF] mt-1 flex-shrink-0">›</span>
                                                                {f}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                {/* All technologies */}
                                                <div>
                                                    <h4 className="text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1">
                                                        <Tag className="w-3 h-3" /> Technologies
                                                    </h4>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {project.technologies.map((tech) => (
                                                            <Badge key={tech} variant="tech">{tech}</Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Card Footer */}
                                <div className="px-6 py-4 border-t border-[#1E3A5F] flex items-center justify-between gap-3">
                                    <div className="flex gap-2">
                                        {project.links.map((link) => (
                                            <a
                                                key={link.type}
                                                href={link.url ?? undefined}
                                                target={link.url ? "_blank" : undefined}
                                                rel="noopener noreferrer"
                                                aria-label={link.label}
                                                className={cn(
                                                    "flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all duration-200",
                                                    link.url
                                                        ? "border-[#1E3A5F] text-[#A9B8CC] hover:border-[#168BFF]/50 hover:text-[#168BFF]"
                                                        : "border-[#1E3A5F]/50 text-[#A9B8CC]/40 cursor-not-allowed"
                                                )}
                                                onClick={(e) => !link.url && e.preventDefault()}
                                            >
                                                {link.type === "github" ? (
                                                    <Github className="w-3.5 h-3.5" />
                                                ) : (
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                )}
                                                {link.type === "github" ? "GitHub" : "Live"}
                                            </a>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setExpandedId(isExpanded ? null : project.id)}
                                        aria-expanded={isExpanded}
                                        className="flex items-center gap-1 text-xs text-[#168BFF] hover:text-[#38BDF8] transition-colors font-medium"
                                    >
                                        {isExpanded ? (
                                            <>Less <ChevronUp className="w-4 h-4" /></>
                                        ) : (
                                            <>Details <ChevronDown className="w-4 h-4" /></>
                                        )}
                                    </button>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-[#A9B8CC] text-sm mt-10"
                >
                    More projects will be added as they progress. All project statuses reflect real development stages.
                </motion.p>
            </div>
        </section>
    );
}
