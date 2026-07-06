"use client";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = ["Home", "About", "Experience", "Skills", "Projects", "Education", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.toLowerCase());
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 250;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "glass py-4 shadow-lg shadow-black/20 border-b border-white/5" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white tracking-tighter">
          <span className="text-gradient">DI.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-medium transition-colors hover:text-[#9d4edd] ${activeSection === link.toLowerCase() ? "text-[#00b4d8]" : "text-gray-300"}`}
            >
              {link}
            </a>
          ))}
          <a 
            href="/resume/Deepanjali_Ishte_Resume.pdf" 
            download="Deepanjali_Ishte_Resume.pdf"
            aria-label="Download Deepanjali Ishte Resume"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/10 hover:scale-105 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(157,78,221,0.5)] text-white text-sm font-medium transition-all duration-300"
          >
            <Download size={16} /> Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass flex flex-col items-center py-6 space-y-4 md:hidden border-b border-white/10"
          >
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium ${activeSection === link.toLowerCase() ? "text-[#00b4d8]" : "text-gray-300"}`}
              >
                {link}
              </a>
            ))}
            <a 
              href="/resume/Deepanjali_Ishte_Resume.pdf" 
              download="Deepanjali_Ishte_Resume.pdf"
              aria-label="Download Deepanjali Ishte Resume"
              className="flex items-center gap-2 px-6 py-3 mt-4 rounded-full bg-gradient-to-r from-[#9d4edd] to-[#00b4d8] border border-transparent hover:scale-105 hover:border-white/50 hover:shadow-[0_0_15px_rgba(0,180,216,0.6)] text-white text-sm font-medium transition-all duration-300"
            >
              <Download size={16} /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
