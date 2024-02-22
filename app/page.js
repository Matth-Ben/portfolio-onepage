import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="container">
        <HeroSection />
        <AboutSection />        
        <ProjectsSection />        
      </div>
    </main>
  );
}
