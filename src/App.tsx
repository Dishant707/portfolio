import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Features";
import About from "./components/About";
import Connect from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <About />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
