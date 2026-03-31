import { Blogs } from './components/Blog';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Blogs />
    </>
  );
}

export default App;
