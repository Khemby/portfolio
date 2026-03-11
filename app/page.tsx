import Nav from "./components/Nav";
import Hero from "./components/Hero";
import HeroBackground from "./components/HeroBackground";
import FeaturedProjects from "./components/FeaturedProjects";
import AboutExperience from "./components/AboutExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />

      {/* Shared background zone: particles + grid + accent lines cover both Hero and carousel */}
      <div className="grid-bg" style={{ position: "relative", backgroundColor: "#0a0a0a" }}>
        <HeroBackground />
        <Hero />
        <FeaturedProjects />
      </div>

      <AboutExperience />
      <Skills />
      <Projects />
      <div className="grid-bg" style={{ position: "relative", backgroundColor: "#0a0a0a" }}>
        <HeroBackground />
        <Contact />
      </div>
    </>
  );
}
