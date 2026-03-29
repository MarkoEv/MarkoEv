import { Blogs } from "./components/Blogs";
import { SkillCarrusel } from "./components/Carrusels/SkillCarrusel";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <Hero />
      <SkillCarrusel />
      <Projects />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
