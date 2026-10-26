import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Goals from "@/components/sections/Goals";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Experience />
            <Goals />
            <Contact />
        </>
    );
}
