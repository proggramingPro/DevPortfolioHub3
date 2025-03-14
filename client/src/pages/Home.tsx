import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Certifiacte from "@/components/Certificate";
export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Certifiacte/>
      <Contact />
    </div>
  );
}
