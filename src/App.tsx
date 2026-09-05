import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Features";
import About from "./components/About";
import Projects from "./components/Projects";
import Connect from "./components/CTA";
import BodyAtlas from "./components/BodyAtlas";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <About />
        <Projects />
        <BodyAtlas />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
