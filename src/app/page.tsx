import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Tech from "@/components/Tech";
import { ToggleTheme } from "@/components/toggle-theme";

export default function Home() {
  return (
    <div className="min-h-screen  grid-lines ">
      <div className="max-w-7xl mx-auto relative flex flex-col items-center gap-20 ">
        <ToggleTheme />
        <Hero />
        <div className="grid grid-cols-2 max-w-4xl gap-10 mt-10">
          <About />
          <Tech />
        </div>
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
