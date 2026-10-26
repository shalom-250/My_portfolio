"use client";
import { motion } from "framer-motion";
import {
    GraduationCap,
    Server,
    Rocket,
    Cloud,
    Brain,
    Users,
    Globe,
} from "lucide-react";
import { careerGoals } from "@/data/education";
import SectionHeading from "@/components/ui/SectionHeading";

const iconComponents: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-6 h-6" />,
    Server: <Server className="w-6 h-6" />,
    Rocket: <Rocket className="w-6 h-6" />,
    Cloud: <Cloud className="w-6 h-6" />,
    Brain: <Brain className="w-6 h-6" />,
    Users: <Users className="w-6 h-6" />,
    Globe: <Globe className="w-6 h-6" />,
};

export default function Goals() {
    return (
        <section id="goals" className="section-padding" aria-label="Career goals">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeading
                        eyebrow="Where I'm Headed"
                        title="Career Goals"
                        subtitle="Aspirations that drive my learning and the direction I'm working toward."
                    />
                </motion.div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
                    {careerGoals.map((goal, index) => (
                        <motion.div
                            key={goal.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <div className="card-base p-5 h-full group hover:border-[#168BFF]/40 glow-blue-hover transition-all duration-300 flex flex-col">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#168BFF]/20 to-[#38BDF8]/10 border border-[#168BFF]/20 flex items-center justify-center text-[#168BFF] mb-4 group-hover:scale-110 transition-transform duration-200">
                                    {iconComponents[goal.icon] || <Rocket className="w-6 h-6" />}
                                </div>
                                <p className="text-[#A9B8CC] text-sm leading-relaxed group-hover:text-[#F8FAFC] transition-colors duration-200">
                                    {goal.goal}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-10 max-w-lg mx-auto"
                >
                    <p className="text-[#A9B8CC] text-sm leading-relaxed">
                        These are aspirations I&apos;m actively working toward — not achievements I can yet claim. I believe in honest progress over inflated credentials.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
