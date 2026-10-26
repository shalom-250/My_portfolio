"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Instagram, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    subject: z.string().min(3, "Subject must be at least 3 characters"),
    message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfoItems = [
    {
        icon: Mail,
        label: "Email",
        value: profile.email,
        href: `mailto:${profile.email}`,
    },
    {
        icon: MapPin,
        label: "Location",
        value: profile.location,
        href: null,
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: profile.whatsapp,
        href: `https://wa.me/250793117690`,
    },
];

const socialLinksContact = [
    { icon: Github, label: "GitHub", href: profile.github, placeholder: true },
    { icon: Linkedin, label: "LinkedIn", href: profile.linkedin, placeholder: true },
    { icon: Instagram, label: "Instagram", href: profile.instagram, placeholder: false },
];

export default function Contact() {
    const [submitState, setSubmitState] = useState<"idle" | "sent">("idle");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactForm>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = (data: ContactForm) => {
        const mailtoBody = `Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0A%0D%0A${encodeURIComponent(data.message)}`;
        const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(`[Portfolio] ${data.subject}`)}&body=${mailtoBody}`;
        window.open(mailtoUrl, "_blank");
        setSubmitState("sent");
        reset();
        setTimeout(() => setSubmitState("idle"), 6000);
    };

    return (
        <section id="contact" className="section-padding bg-[#0D1B2A]/50" aria-label="Contact">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeading
                        eyebrow="Get In Touch"
                        title="Contact Me"
                        subtitle="Have a project idea, a question, or just want to connect? I'd love to hear from you."
                    />
                </motion.div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="card-base p-6">
                            <h3 className="text-[#F8FAFC] font-bold text-lg mb-6">Let&apos;s Connect</h3>
                            <div className="space-y-4">
                                {contactInfoItems.map(({ icon: Icon, label, value, href }) => (
                                    <div key={label} className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-[#168BFF]/10 border border-[#168BFF]/20 flex items-center justify-center text-[#168BFF] flex-shrink-0">
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-[#A9B8CC] text-xs uppercase tracking-wide font-medium">{label}</p>
                                            {href ? (
                                                <a
                                                    href={href}
                                                    target={href.startsWith("http") ? "_blank" : undefined}
                                                    rel="noopener noreferrer"
                                                    className="text-[#F8FAFC] text-sm font-medium hover:text-[#168BFF] transition-colors"
                                                >
                                                    {value}
                                                </a>
                                            ) : (
                                                <p className="text-[#F8FAFC] text-sm font-medium">{value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="card-base p-6">
                            <h3 className="text-[#F8FAFC] font-bold text-sm uppercase tracking-wider mb-4">Find Me Online</h3>
                            <div className="flex gap-3">
                                {socialLinksContact.map(({ icon: Icon, label, href, placeholder }) => (
                                    <a
                                        key={label}
                                        href={placeholder ? undefined : href}
                                        target={!placeholder && href.startsWith("http") ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        aria-label={placeholder ? `${label} (link coming soon)` : label}
                                        title={placeholder ? `${label} — link coming soon` : label}
                                        className={cn(
                                            "flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200",
                                            placeholder
                                                ? "border-[#1E3A5F]/50 text-[#A9B8CC]/40 cursor-not-allowed"
                                                : "border-[#1E3A5F] text-[#A9B8CC] hover:text-[#168BFF] hover:border-[#168BFF]/50"
                                        )}
                                        onClick={(e) => placeholder && e.preventDefault()}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {label}
                                        {placeholder && <span className="text-xs opacity-50">Soon</span>}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Response note */}
                        <div className="flex items-start gap-3 p-4 bg-[#168BFF]/5 border border-[#168BFF]/20 rounded-xl">
                            <AlertCircle className="w-4 h-4 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                            <p className="text-[#A9B8CC] text-sm leading-relaxed">
                                The form opens your email client with a pre-filled message — no backend is required for this portfolio.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="card-base p-6">
                            <h3 className="text-[#F8FAFC] font-bold text-lg mb-6">Send a Message</h3>

                            {submitState === "sent" ? (
                                <div className="flex flex-col items-center justify-center py-12 gap-4">
                                    <CheckCircle className="w-12 h-12 text-green-400" />
                                    <p className="text-[#F8FAFC] font-semibold text-lg">Your email client opened!</p>
                                    <p className="text-[#A9B8CC] text-sm text-center">
                                        Complete sending the message from your email client. I&apos;ll get back to you as soon as possible.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-[#A9B8CC] text-sm font-medium mb-1.5">
                                            Full Name <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            autoComplete="name"
                                            placeholder="Your full name"
                                            {...register("name")}
                                            className={cn(
                                                "w-full px-4 py-3 rounded-xl bg-[#0D1B2A] border text-[#F8FAFC] text-sm placeholder:text-[#A9B8CC]/40 outline-none transition-all duration-200",
                                                "focus:border-[#168BFF] focus:ring-1 focus:ring-[#168BFF]/30",
                                                errors.name ? "border-red-400/60" : "border-[#1E3A5F]"
                                            )}
                                        />
                                        {errors.name && (
                                            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                                <AlertCircle className="w-3 h-3" />
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-[#A9B8CC] text-sm font-medium mb-1.5">
                                            Email Address <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            autoComplete="email"
                                            placeholder="your@email.com"
                                            {...register("email")}
                                            className={cn(
                                                "w-full px-4 py-3 rounded-xl bg-[#0D1B2A] border text-[#F8FAFC] text-sm placeholder:text-[#A9B8CC]/40 outline-none transition-all duration-200",
                                                "focus:border-[#168BFF] focus:ring-1 focus:ring-[#168BFF]/30",
                                                errors.email ? "border-red-400/60" : "border-[#1E3A5F]"
                                            )}
                                        />
                                        {errors.email && (
                                            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                                <AlertCircle className="w-3 h-3" />
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label htmlFor="subject" className="block text-[#A9B8CC] text-sm font-medium mb-1.5">
                                            Subject <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            id="subject"
                                            type="text"
                                            placeholder="What is this about?"
                                            {...register("subject")}
                                            className={cn(
                                                "w-full px-4 py-3 rounded-xl bg-[#0D1B2A] border text-[#F8FAFC] text-sm placeholder:text-[#A9B8CC]/40 outline-none transition-all duration-200",
                                                "focus:border-[#168BFF] focus:ring-1 focus:ring-[#168BFF]/30",
                                                errors.subject ? "border-red-400/60" : "border-[#1E3A5F]"
                                            )}
                                        />
                                        {errors.subject && (
                                            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                                <AlertCircle className="w-3 h-3" />
                                                {errors.subject.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-[#A9B8CC] text-sm font-medium mb-1.5">
                                            Message <span className="text-red-400">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            placeholder="Tell me about your project, idea, or question..."
                                            {...register("message")}
                                            className={cn(
                                                "w-full px-4 py-3 rounded-xl bg-[#0D1B2A] border text-[#F8FAFC] text-sm placeholder:text-[#A9B8CC]/40 outline-none transition-all duration-200 resize-none",
                                                "focus:border-[#168BFF] focus:ring-1 focus:ring-[#168BFF]/30",
                                                errors.message ? "border-red-400/60" : "border-[#1E3A5F]"
                                            )}
                                        />
                                        {errors.message && (
                                            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                                <AlertCircle className="w-3 h-3" />
                                                {errors.message.message}
                                            </p>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="primary"
                                        size="lg"
                                        className="w-full"
                                        disabled={isSubmitting}
                                    >
                                        <Send className="w-4 h-4" />
                                        {isSubmitting ? "Opening email…" : "Send Message"}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
