"use client";
import { useState, useEffect } from "react";
import { Menu, X, Download, Sparkles } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Navbar() {
  const { resumeUrl, resumeDownloadName } = portfolioData.personalInfo;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredSection, setHoveredSection] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll Progress Bar in Cute Rainbow Gradient
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = ["about", "skills", "experience", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }

      if (window.scrollY < 260) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFF9F3]/95 backdrop-blur-md border-b border-[#EBDCD2] py-3.5 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      {/* Scroll Progress Bar in Cute Rainbow Gradient */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#F6B8D0] via-[#FFC9A9] via-[#F9E7A0] via-[#B9E6D0] via-[#A9D8F5] to-[#C9B6F2] origin-left z-50"
          style={{ scaleX }}
        />
      )}

      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Monogram & Title */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.01 }}
          className="group flex items-center gap-3 text-[#292326] cursor-pointer"
          aria-label="Deepanjali's Portfolio — Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F6B8D0] via-[#FFC9A9] to-[#C9B6F2] text-[#292326] flex items-center justify-center font-mono font-bold text-xs tracking-wider shadow-xs group-hover:shadow-[0_4px_14px_rgba(246,184,208,0.4)] transition-all">
            DRI
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-[#292326] group-hover:text-[#A13A64] transition-colors leading-tight flex items-center gap-1.5">
              <span>Deepanjali&apos;s Portfolio</span>
              <span className="text-xs text-[#C9B6F2] inline-block">✨</span>
            </span>
            <span className="text-xs font-mono font-bold tracking-wider text-[#A13A64] uppercase leading-tight mt-0.5">
              Deepanjali R. Ishte
            </span>
            <span className="text-[11px] font-mono font-semibold tracking-wider text-[#4E378C] uppercase leading-tight">
              Java Developer
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav
          onMouseLeave={() => setHoveredSection(null)}
          className="hidden lg:flex items-center space-x-1 bg-white/70 border border-[#EBDCD2] px-3.5 py-1.5 rounded-full backdrop-blur-sm shadow-xs"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            const isHovered = hoveredSection === item.href;

            return (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredSection(item.href)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                  isActive
                    ? "text-[#FFF9F3]"
                    : isHovered
                    ? "text-[#292326]"
                    : "text-[#574F54] hover:text-[#292326]"
                }`}
              >
                {/* Active Section Background Pill */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-[#292326] rounded-full -z-10 shadow-xs"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Hover Indicator */}
                {isHovered && !isActive && (
                  <motion.span
                    layoutId="hoverNavIndicator"
                    className="absolute inset-0 bg-[#F6B8D0]/25 rounded-full -z-20"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}

                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Quick Actions: Resume & Contact */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href={resumeUrl}
            download={resumeDownloadName}
            aria-label="Download Deepanjali Ishte Java Developer Resume"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#EBDCD2] hover:border-[#F6B8D0] text-[#292326] text-xs font-mono font-semibold tracking-wider transition-all shadow-2xs hover:shadow-[0_3px_12px_rgba(246,184,208,0.25)] cursor-pointer"
          >
            <Download size={13} className="text-[#A13A64] group-hover:translate-y-0.5 transition-transform duration-200" />
            <span>RESUME</span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#F6B8D0] via-[#FFC9A9] to-[#C9B6F2] hover:opacity-95 text-[#292326] font-bold text-xs tracking-wider transition-all shadow-sm shadow-[#F6B8D0]/30 cursor-pointer"
          >
            <Sparkles size={13} className="text-[#A13A64]" />
            <span>Let&apos;s Talk</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl bg-white border border-[#EBDCD2] text-[#292326] hover:bg-[#F6B8D0]/20 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#FFF9F3] border-b border-[#EBDCD2] px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-semibold py-2.5 px-3.5 rounded-xl transition-colors ${
                      isActive
                        ? "bg-[#292326] text-[#FFF9F3]"
                        : "text-[#292326] hover:bg-white hover:text-[#A13A64]"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}

              <div className="pt-4 border-t border-[#EBDCD2] flex flex-col space-y-2">
                <a
                  href={resumeUrl}
                  download={resumeDownloadName}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#EBDCD2] bg-white text-[#292326] text-xs font-mono font-bold"
                >
                  <Download size={14} className="text-[#A13A64]" />
                  <span>DOWNLOAD RESUME</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-gradient-to-r from-[#F6B8D0] via-[#FFC9A9] to-[#C9B6F2] text-[#292326] text-xs font-bold shadow-xs"
                >
                  <Sparkles size={14} className="text-[#A13A64]" />
                  <span>Contact Deepanjali</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
