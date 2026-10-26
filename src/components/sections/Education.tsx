"use client";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, CalendarDays, MapPin } from "lucide-react";
import { educationEntries } from "@/data/education";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

export default function Education() {
    return (
        <section id="education" className="section-padding" aria-label="Education">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeading
                        eyebrow="Academic Background"
                        title="Education"
                        subtitle="My formal education and the academic areas I study."
                    />
                </motion.div>

                <div className="mt-12 max-w-3xl mx-auto">
                    {educationEntries.map((entry, index) => (
                        <motion.div
                            key={entry.id}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative pl-8 pb-8"
                        >
                            {/* Timeline line */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#168BFF] via-[#168BFF]/30 to-transparent" />
                            {/* Timeline dot */}
                            <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-[#168BFF] -translate-x-[3.5px] ring-4 ring-[#07111F]" />

                            <div className="card-base p-6 hover:border-[#168BFF]/40 transition-all duration-300">
                                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                    <div>
                                        <h3 className="text-[#F8FAFC] font-bold text-xl">{entry.institution}</h3>
                                        {entry.campus && (
                                            <p className="text-[#A9B8CC] text-sm flex items-center gap-1 mt-0.5">
                                                <MapPin className="w-3 h-3" />
                                                {entry.campus}
                                            </p>
                                        )}
                                    </div>
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${entry.status === "current"
                                                ? "bg-[#168BFF]/10 text-[#38BDF8] border-[#168BFF]/30"
                                                : "bg-green-400/10 text-green-400 border-green-400/30"
                                            }`}
                                    >
                                        {entry.status === "current" ? "Currently Enrolled" : "Completed"}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-4 text-sm text-[#A9B8CC] mb-4">
                                    <span className="flex items-center gap-1.5">
                                        <GraduationCap className="w-4 h-4 text-[#168BFF]" />
                                        {entry.degree} in {entry.field}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <CalendarDays className="w-4 h-4 text-[#168BFF]" />
                                        {entry.period}
                                    </span>
                                </div>

                                {entry.description && (
                                    <p className="text-[#A9B8CC] text-sm leading-relaxed mb-5">{entry.description}</p>
                                )}

                                {/* Subjects */}
                                <div>
                                    <p className="text-[#A9B8CC] text-xs uppercase tracking-wider font-semibold mb-3 flex items-center gap-1.5">
                                        <BookOpen className="w-3.5 h-3.5 text-[#168BFF]" />
                                        Academic Learning Areas
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {entry.subjects.map((subject) => (
                                            <Badge key={subject} variant="default">{subject}</Badge>
                                        ))}
                                    </div>
                                    <p className="text-[#A9B8CC]/60 text-xs mt-3 italic">
                                        These are academic study areas, not professional qualifications.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
