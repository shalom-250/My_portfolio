import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Niyonkuru Shalom | Backend Developer & BIT Student",
    description:
        "Explore the software development portfolio of Niyonkuru Shalom, a Business Information Technology student at the University of Rwanda interested in backend engineering, databases, modern web development, and AI automation.",
    keywords: [
        "Niyonkuru Shalom",
        "backend developer",
        "BIT student",
        "University of Rwanda",
        "software engineer",
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "Rwanda developer",
    ],
    authors: [{ name: "Niyonkuru Shalom", url: "mailto:nishalom250@gmail.com" }],
    creator: "Niyonkuru Shalom",
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "Niyonkuru Shalom | Backend Developer & BIT Student",
        description:
            "Portfolio of Niyonkuru Shalom — aspiring backend developer and BIT student at the University of Rwanda.",
        siteName: "Shalom.dev Portfolio",
    },
    twitter: {
        card: "summary",
        title: "Niyonkuru Shalom | Portfolio",
        description:
            "Aspiring backend developer and BIT student — building software that solves real-world problems.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-[#07111F] text-[#F8FAFC] antialiased">
                <Navbar />
                <main id="main-content">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
