"use client";
import { Github, Linkedin, Instagram, MessageCircle, ArrowRight, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";

const socialIconMap: Record<string, React.ReactNode> = {
    GitHub: <Github className="w-5 h-5" />,
    LinkedIn: <Linkedin className="w-5 h-5" />,
    Instagram: <Instagram className="w-5 h-5" />,
    WhatsApp: <MessageCircle className="w-5 h-5" />,
};

function DevAvatar() {
    return (
        <div className="relative w-full max-w-sm mx-auto aspect-square">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#168BFF]/20 to-[#38BDF8]/10 blur-2xl animate-pulse-slow" />
            {/* Main circle */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#0D1B2A] to-[#102238] border-2 border-[#168BFF]/30 flex items-center justify-center overflow-hidden">
                {/* Grid background */}
                <div className="absolute inset-0 hero-grid-bg opacity-60" />
                {/* Code illustration */}
                <div className="relative z-10 p-6 font-mono text-xs leading-relaxed text-left">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <p className="text-[#38BDF8]">
                            <span className="text-[#A9B8CC]">const</span>{" "}
                            <span className="text-[#168BFF]">developer</span>{" "}
                            <span className="text-[#A9B8CC]">=</span> {"{"}
                        </p>
                        <p className="pl-4 text-[#A9B8CC]">
                            name:{" "}
                            <span className="text-green-400">&quot;Shalom&quot;</span>,
                        </p>
                        <p className="pl-4 text-[#A9B8CC]">
                            role:{" "}
                            <span className="text-green-400">&quot;Backend Dev&quot;</span>,
                        </p>
                        <p className="pl-4 text-[#A9B8CC]">
                            passion:{" "}
                            <span className="text-green-400">&quot;Building&quot;</span>,
                        </p>
                        <p className="pl-4 text-[#A9B8CC]">
                            learning:{" "}
                            <span className="text-yellow-400">true</span>,
                        </p>
                        <p className="pl-4 text-[#A9B8CC]">
                            goal:{" "}
                            <span className="text-green-400">&quot;Impact&quot;</span>,
                        </p>
                        <p className="text-[#38BDF8]">{"}"}</p>
                        <p className="mt-2 text-[#168BFF]">
                            <span className="text-[#A9B8CC]">// </span>
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1.2, repeat: Infinity }}
                            >
                                ▋
                            </motion.span>
                        </p>
                    </motion.div>
                </div>
            </div>
            {/* Floating tech badges */}
            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-4 bg-[#168BFF] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-[#168BFF]/40"
            >
                NestJS
            </motion.div>
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-2 -left-4 bg-[#0D1B2A] border border-[#38BDF8]/50 text-[#38BDF8] text-xs font-bold px-3 py-1 rounded-full shadow-lg"
            >
                PostgreSQL
            </motion.div>
            <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -left-8 bg-[#0D1B2A] border border-[#1E3A5F] text-[#A9B8CC] text-xs px-2 py-1 rounded-full"
            >
                Docker
            </motion.div>
        </div>
    );
}

export default function Hero() {
    const handleScroll = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-20 overflow-hidden"
            aria-label="Introduction"
        >
            {/* Background */}
            <div className="absolute inset-0 hero-grid-bg" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07111F]/50 to-[#07111F]" />
            {/* Glow orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#168BFF]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative container-max section-padding w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[#168BFF] font-mono text-sm font-medium mb-4 flex items-center gap-2"
                        >
                            <span className="w-8 h-px bg-[#168BFF] inline-block" />
                            Hello, I&apos;m
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F8FAFC] leading-tight mb-4"
                        >
                            Niyonkuru{" "}
                            <span className="gradient-text block sm:inline">Shalom</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-[#38BDF8] font-semibold text-lg sm:text-xl mb-6 font-mono"
                        >
                            Aspiring Backend Developer &amp; BIT Student
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-[#A9B8CC] text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
                        >
                            {profile.introduction}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-3 mb-8"
                        >
                            <Button
                                size="lg"
                                variant="primary"
                                onClick={() => handleScroll("#projects")}
                            >
                                Explore My Projects
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                            <Button
                                size="lg"
                                variant="secondary"
                                onClick={() => handleScroll("#contact")}
                            >
                                <Mail className="w-4 h-4" />
                                Contact Me
                            </Button>
                            {profile.cvPath ? (
                                <a href={profile.cvPath} download>
                                    <Button size="lg" variant="ghost">
                                        <Download className="w-4 h-4" />
                                        Download CV
                                    </Button>
                                </a>
                            ) : null}
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex items-center gap-3"
                        >
                            <span className="text-[#A9B8CC] text-sm">Find me on:</span>
                            {profile.socials.map((social) => (
                                <a
                                    key={social.platform}
                                    href={social.url}
                                    target={social.url.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-lg bg-[#102238] border border-[#1E3A5F] flex items-center justify-center text-[#A9B8CC] hover:text-[#168BFF] hover:border-[#168BFF]/50 hover:bg-[#168BFF]/5 transition-all duration-200 hover:scale-105"
                                >
                                    {socialIconMap[social.platform] || <Mail className="w-5 h-5" />}
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex justify-center items-center"
                    >
                        <DevAvatar />
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[#A9B8CC] text-xs font-mono">scroll down</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-5 h-8 rounded-full border-2 border-[#1E3A5F] flex items-start justify-center pt-1.5"
                    >
                        <div className="w-1 h-2 bg-[#168BFF] rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
