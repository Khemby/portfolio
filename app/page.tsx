import Nav from "./components/Nav";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import AboutExperience from "./components/AboutExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <FeaturedProjects />
      <AboutExperience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
