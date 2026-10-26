"use client";
import { motion } from "framer-motion";
import { skillCategories, proficiencyLabels } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export default function Skills() {
    return (
        <section id="skills" className="section-padding" aria-label="Technical skills">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeading
                        eyebrow="What I Work With"
                        title="Technical Skills"
                        subtitle="Technologies and tools I've learned, used in projects, or am currently exploring."
                    />
                </motion.div>

                {/* Legend */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mt-8 mb-12"
                >
                    {Object.entries(proficiencyLabels).map(([key, { label, color }]) => (
                        <span
                            key={key}
                            className={cn(
                                "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border",
                                color
                            )}
                        >
                            {label}
                        </span>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                        >
                            <div className="card-base p-6 h-full hover:border-[#168BFF]/40 glow-blue-hover transition-all duration-300">
                                <h3 className="text-[#F8FAFC] font-bold text-base mb-1">{category.title}</h3>
                                <p className="text-[#A9B8CC] text-xs mb-5">{category.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => {
                                        const { label, color } = proficiencyLabels[skill.level];
                                        return (
                                            <div key={skill.name} className="group relative">
                                                <span
                                                    className={cn(
                                                        "inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border cursor-default",
                                                        skill.level === "proficient"
                                                            ? "bg-green-400/10 text-green-400 border-green-400/20"
                                                            : skill.level === "used-in-projects"
                                                                ? "bg-cyan-400/10 text-[#38BDF8] border-cyan-400/20"
                                                                : skill.level === "familiar"
                                                                    ? "bg-blue-400/10 text-blue-300 border-blue-400/20"
                                                                    : "bg-yellow-400/10 text-yellow-400 border-yellow-400/20"
                                                    )}
                                                >
                                                    {skill.name}
                                                </span>
                                                {/* Tooltip */}
                                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-0.5 bg-[#0D1B2A] border border-[#1E3A5F] text-[#A9B8CC] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                                    {label}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-[#A9B8CC] text-sm mt-10 italic"
                >
                    Proficiency levels reflect my actual experience — not self-rated percentages.
                </motion.p>
            </div>
        </section>
    );
}
