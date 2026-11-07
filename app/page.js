import Navbar from "../components/Navbar";
import AmbientBackground from "../components/AmbientBackground";
import Floating3DObjects from "../components/Floating3DObjects";
import CustomCursor from "../components/CustomCursor";
import CinematicIntro from "../components/CinematicIntro";
import RuntimeTelemetryHud from "../components/RuntimeTelemetryHud";
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
    <div className="relative min-h-screen bg-[#030712] text-[#EDEDED] overflow-x-hidden selection:bg-[#00F0FF]/30 selection:text-white">
      {/* First-Load WOW Factor Cinematic Intro Shutter */}
      <CinematicIntro />

      {/* Desktop Custom Ambient Cursor */}
      <CustomCursor />

      {/* Atmospheric background lighting, particles, 3D horizon grid & neural network */}
      <AmbientBackground />

      {/* Futuristic Floating 3D Geometric Objects (Wireframe Octahedron, Gyro Rings, Cube) */}
      <Floating3DObjects />

      {/* Fixed Sticky Navigation */}
      <Navbar />

      {/* Main Sections */}
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

      {/* Interactive Runtime Telemetry Console (Surprise Moment) */}
      <RuntimeTelemetryHud />

      {/* Footer & Chat CTA */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
