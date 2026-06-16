import { Nav } from "./components/portfolio/Nav";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { TechStack } from "./components/portfolio/TechStack";
import { Experience } from "./components/portfolio/Experience";
import { Projects } from "./components/portfolio/Projects";
import { Clients } from "./components/portfolio/Clients";
// import { Achievements } from "./components/portfolio/Achievements";
// import { Skills } from "./components/portfolio/Skills";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";

function App() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Clients />
      {/* <Achievements /> */}
      {/* <Skills /> */}
      <Contact />
      <Footer />
    </main>
  );
}

export default App;