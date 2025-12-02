import Hero3D from "@/components/Hero3D";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero3D />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Experience />
      <Publications />
      <Contact />
    </div>
  );
}
