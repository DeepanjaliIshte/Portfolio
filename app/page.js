import Navbar from "../components/Navbar";
import AmbientBackground from "../components/AmbientBackground";
import SectionDivider from "../components/SectionDivider";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FFF9F3] text-[#292326] dark:bg-[#171219] dark:text-[#F8F3F6] overflow-x-hidden selection:bg-[#F6B8D0] selection:text-[#292326] dark:selection:bg-[#C9B6F2] dark:selection:text-[#171219]">
      {/* Subtle Warm Ivory Atmosphere */}
      <AmbientBackground />

      {/* Editorial Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col w-full">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Education />
        <Certifications />
        <SectionDivider />
        <Contact />
      </main>

      {/* Editorial Footer & Connect */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
