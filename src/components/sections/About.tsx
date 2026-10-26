"use client";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, BookOpen, University } from "lucide-react";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6 },
    }),
};

const infoItems = [
    { icon: GraduationCap, label: "Programme", value: "Bachelor of Information Technology" },
    { icon: BookOpen, label: "Academic Level", value: "Year 3" },
    { icon: University, label: "Institution", value: "University of Rwanda" },
    { icon: MapPin, label: "Location", value: "Huye, Rwanda" },
];

export default function About() {
    return (
        <section id="about" className="section-padding bg-[#0D1B2A]/50" aria-label="About me">
            <div className="container-max">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <SectionHeading
                        eyebrow="Who I Am"
                        title="About Me"
                        subtitle="Getting to know the person behind the code."
                    />
                </motion.div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Bio */}
                    <motion.div
                        custom={0}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-5 text-[#A9B8CC] leading-relaxed text-base"
                    >
                        <p>
                            I&apos;m <span className="text-[#F8FAFC] font-semibold">Niyonkuru Shalom</span>, a Year 3
                            Business Information Technology student at the{" "}
                            <span className="text-[#38BDF8]">University of Rwanda, Huye Campus</span>. My programme
                            combines business understanding with information technology, and I&apos;ve channelled that
                            foundation into a growing interest in software engineering.
                        </p>
                        <p>
                            My primary focus is on{" "}
                            <span className="text-[#F8FAFC] font-semibold">backend development</span> —
                            designing APIs, working with relational databases, and structuring applications that are
                            maintainable and scalable. I enjoy the challenge of thinking through system architecture
                            and building the layers that make applications reliable.
                        </p>
                        <p>
                            Beyond the backend, I explore{" "}
                            <span className="text-[#F8FAFC] font-semibold">full-stack development</span> with
                            Next.js and React, and I actively work on understanding DevOps tools like Docker and
                            containerized environments. I&apos;m drawn to technologies such as Redis, cloud infrastructure,
                            and NestJS, and I approach learning with a hands-on, project-first mindset.
                        </p>
                        <p>
                            I&apos;ve worked on academic software concepts and personal development projects, including a
                            proposed smart classroom management system and a monorepo warehouse platform. These
                            projects have pushed me to think seriously about{" "}
                            <span className="text-[#F8FAFC] font-semibold">
                                database design, API architecture, and development infrastructure
                            </span>
                            .
                        </p>
                        <p>
                            I&apos;m also developing an interest in{" "}
                            <span className="text-[#F8FAFC] font-semibold">AI automation</span> and how intelligent
                            tools can complement modern software systems. My long-term ambition is to become a
                            capable software engineer who builds reliable, impactful products — starting in Rwanda
                            and growing beyond.
                        </p>
                    </motion.div>

                    {/* Info panel */}
                    <motion.div
                        custom={1}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="card-base p-6 glow-blue">
                            <h3 className="text-[#F8FAFC] font-semibold text-lg mb-6 flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-[#168BFF]" />
                                Quick Info
                            </h3>
                            <dl className="space-y-4">
                                {infoItems.map(({ icon: Icon, label, value }) => (
                                    <div key={label} className="flex items-start gap-3">
                                        <div className="mt-0.5 w-9 h-9 rounded-lg bg-[#168BFF]/10 border border-[#168BFF]/20 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-4 h-4 text-[#168BFF]" />
                                        </div>
                                        <div>
                                            <dt className="text-[#A9B8CC] text-xs uppercase tracking-wide font-medium">{label}</dt>
                                            <dd className="text-[#F8FAFC] font-semibold text-sm mt-0.5">{value}</dd>
                                        </div>
                                    </div>
                                ))}
                            </dl>

                            {/* Divider */}
                            <div className="border-t border-[#1E3A5F] mt-6 pt-6">
                                <p className="text-[#A9B8CC] text-xs uppercase tracking-wider font-semibold mb-3">Current Focus</p>
                                <div className="flex flex-wrap gap-2">
                                    {["NestJS", "PostgreSQL", "Docker", "Next.js", "TypeScript"].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-[#168BFF]/10 border border-[#168BFF]/20 text-[#38BDF8] text-xs rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            {[
                                { value: "4+", label: "Projects", desc: "Academic & Personal" },
                                { value: "10+", label: "Technologies", desc: "Explored & Learning" },
                                { value: "3rd", label: "Year", desc: "BIT Programme" },
                            ].map((stat) => (
                                <div key={stat.label} className="card-base p-4 text-center">
                                    <div className="text-2xl font-black gradient-text">{stat.value}</div>
                                    <div className="text-[#F8FAFC] text-sm font-semibold">{stat.label}</div>
                                    <div className="text-[#A9B8CC] text-xs mt-0.5">{stat.desc}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
