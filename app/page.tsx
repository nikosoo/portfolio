import Hero from "@/components/Hero";
import ProjectCards from "@/components/Projects";
import ParticlesDesign from "@/components/ui/Particles";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Sidebar from "@/components/ui/NavBar";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <ParticlesDesign />
          <div id="hero">
            <Hero />
          </div>
          <div id="education">
            <Education />
          </div>
          <div id="projects">
            <ProjectCards />
          </div>
        </div>
      </main>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
