import Hero from "@/components/Hero";
import Image from "next/image";
import ProjectCards from "@/components/Projects";
import { LampContainer } from "@/components/ui/Lamp";
import ParticlesDesign from "@/components/ui/Particles";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <ParticlesDesign />
        <Hero />
        <Education />
        <ProjectCards />
        <Contact />
      </div>
    </main>
  );
}
