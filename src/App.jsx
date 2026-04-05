import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import FunSection from './components/FunSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Cursor />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Publications />
          <Certifications />
          <Contact />
          <FunSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
