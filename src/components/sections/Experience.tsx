"use client";
import { motion } from "framer-motion";
import {
    GraduationCap,
    Server,
    BookOpen,
    Telescope,
} from "lucide-react";
import { experienceCategories } from "@/data/education";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-5 h-5" />,
    Server: <Server className="w-5 h-5" />,
    BookOpen: <BookOpen className="w-5 h-5" />,
    Telescope: <Telescope className="w-5 h-5" />,
};

export default function Experience() {
    return (
        <section id="experience" className="section-padding bg-[#0D1B2A]/50" aria-label="Experience and activities">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeading
                        eyebrow="What I've Done"
                        title="Experience & Activities"
                        subtitle="Academic projects, backend development, independent learning, and technical exploration."
                    />
                </motion.div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {experienceCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                        >
                            <div className="card-base p-6 h-full hover:border-[#168BFF]/40 transition-all duration-300">
                                {/* Category header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-[#168BFF]/10 border border-[#168BFF]/20 flex items-center justify-center text-[#168BFF]">
                                        {iconMap[category.icon] || <GraduationCap className="w-5 h-5" />}
                                    </div>
                                    <h3 className="text-[#F8FAFC] font-bold text-lg">{category.title}</h3>
                                </div>

                                {/* Entries */}
                                <div className="space-y-5">
                                    {category.entries.map((entry, entryIndex) => (
                                        <div
                                            key={entryIndex}
                                            className="pl-4 border-l-2 border-[#168BFF]/20 hover:border-[#168BFF]/60 transition-colors duration-200"
                                        >
                                            <h4 className="text-[#F8FAFC] font-semibold text-sm mb-1.5">{entry.title}</h4>
                                            <p className="text-[#A9B8CC] text-sm leading-relaxed mb-3">{entry.description}</p>
                                            {entry.tags && (
                                                <div className="flex flex-wrap gap-1.5">
                                                    {entry.tags.map((tag) => (
                                                        <Badge key={tag} variant="tech">{tag}</Badge>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-10"
                >
                    <p className="text-[#A9B8CC] text-sm italic">
                        Internships, employment, and volunteer work will be added here as my career develops.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
