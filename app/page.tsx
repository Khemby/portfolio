import Nav from "./components/Nav";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <FeaturedProjects />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
