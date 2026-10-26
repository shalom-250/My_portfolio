// src/data/profile.ts
import { Profile } from "@/types";

export const profile: Profile = {
    name: "Niyonkuru Shalom",
    title: "Aspiring Backend Developer | BIT Student | Software Developer",
    tagline: "Turning Ideas Into Reliable Digital Products",
    introduction:
        "I'm a Business Information Technology student at the University of Rwanda with a strong interest in backend development and building practical software solutions. I enjoy working with databases, APIs, and modern development tools while exploring cloud technologies, DevOps, and AI automation. My goal is to turn ideas into reliable digital products that solve real-world problems.",
    email: "nishalom250@gmail.com",
    whatsapp: "+250793117690",
    location: "Huye, Rwanda",
    university: "University of Rwanda",
    campus: "Huye Campus",
    programme: "Bachelor of Information Technology",
    academicYear: "Year 3",
    github: "https://github.com/shalom-250", // TODO: Add GitHub profile URL
    linkedin: "https://www.linkedin.com/in/shalom-niyonkuru-610a74422?utm_source=share_via&utm_content=profile&utm_medium=member_android", // TODO: Add LinkedIn profile URL
    instagram: "https://www.instagram.com/n_shalom_250",
    facebook: "https://www.facebook.com/share/1KmNkNEnzE", // TODO: Add Facebook profile URL
    cvPath: null, // TODO: Add path to CV PDF in /public/cv/shalom-cv.pdf
    socials: [
        {
            platform: "GitHub",
            url: "#", // TODO: Add GitHub URL
            label: "GitHub Profile",
        },
        {
            platform: "LinkedIn",
            url: "#", // TODO: Add LinkedIn URL
            label: "LinkedIn Profile",
        },
        {
            platform: "Instagram",
            url: "https://www.instagram.com/n_shalom_250",
            label: "Instagram: @n_shalom_250",
        },
        {
            platform: "WhatsApp",
            url: "https://wa.me/250793117690",
            label: "WhatsApp: +250 793 117 690",
        },
    ],
};
