import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="container">
        <HeroSection />
        <AboutSection />        
      </div>
    </main>
  );
}
