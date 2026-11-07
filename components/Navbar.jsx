"use client";
import { useState, useEffect } from "react";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Navbar() {
  const { resumeUrl, resumeDownloadName } = portfolioData.personalInfo;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredSection, setHoveredSection] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll Progress Bar across top
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
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
      setScrolled(window.scrollY > 30);

      const sections = ["about", "skills", "experience", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 250;

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

      if (window.scrollY < 300) {
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
          ? "bg-[#030712]/85 backdrop-blur-md border-b border-cyan-900/30 py-3.5 shadow-2xl shadow-black/80"
          : "bg-transparent py-5"
      }`}
    >
      {/* Scroll Progress Bar */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0066FF] via-[#00F0FF] to-white origin-left z-50 shadow-[0_0_10px_#00F0FF]"
          style={{ scaleX }}
        />
      )}

      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Monogram */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center gap-2.5 text-white tracking-wider cursor-pointer"
          aria-label="Deepanjali Ishte Home"
        >
          <div className="w-8 h-8 rounded-lg bg-[#080D1A] border border-cyan-900/40 flex items-center justify-center font-mono font-bold text-sm text-white group-hover:border-[#00F0FF] group-hover:shadow-[0_0_12px_rgba(0,240,255,0.4)] transition-all relative overflow-hidden">
            <span className="relative z-10 text-cyan-300">DI</span>
            <span className="absolute inset-0 bg-[#00F0FF]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-[#00F0FF] transition-colors">
              DEEPANJALI ISHTE
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400/70">
              Software Developer
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav
          onMouseLeave={() => setHoveredSection(null)}
          className="hidden lg:flex items-center space-x-1 bg-[#080D1A]/80 border border-cyan-900/40 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg shadow-black/60"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            const isHovered = hoveredSection === item.href;

            return (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredSection(item.href)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
                  isActive || isHovered
                    ? "text-[#00F0FF]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {/* Active Section Background Glow */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-[#00F0FF]/15 border border-[#00F0FF]/40 rounded-full -z-10 shadow-[0_0_15px_rgba(0,240,255,0.25)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Hover Underline Glow */}
                {isHovered && !isActive && (
                  <motion.span
                    layoutId="hoverNavIndicator"
                    className="absolute inset-0 bg-white/[0.05] border border-cyan-500/20 rounded-full -z-20"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}

                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Quick CTA & Resume */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href={resumeUrl}
            download={resumeDownloadName}
            aria-label="Download Deepanjali Ishte Java Developer Resume"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#080D1A] border border-cyan-900/40 hover:border-[#00F0FF]/60 text-zinc-300 hover:text-[#00F0FF] text-xs font-mono font-medium tracking-wide transition-all shadow-sm hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] cursor-pointer"
          >
            <Download size={13} className="text-[#00F0FF] group-hover:translate-y-0.5 transition-transform duration-200" />
            <span>RESUME</span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00F0FF] hover:from-[#1D4ED8] hover:to-[#00D4E0] text-black font-semibold text-xs tracking-wide transition-all shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] cursor-pointer"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={14} className="stroke-[2.5]" />
          </motion.a>
        </div>

        {/* Mobile Menu Hamburger */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          className="lg:hidden p-2 rounded-lg bg-[#080D1A] border border-cyan-900/40 text-zinc-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-[#080D1A]/95 backdrop-blur-xl border-b border-cyan-900/40 px-6 py-6 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                      isActive
                        ? "text-[#00F0FF] bg-[#00F0FF]/15 border border-[#00F0FF]/30"
                        : "text-zinc-400 hover:text-white hover:bg-white/[0.03]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"></span>}
                  </motion.a>
                );
              })}

              <div className="pt-4 border-t border-cyan-900/30 flex flex-col gap-2.5">
                <a
                  href={resumeUrl}
                  download={resumeDownloadName}
                  aria-label="Download Deepanjali Ishte Java Developer Resume"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0B132B] border border-cyan-900/40 text-zinc-300 text-xs font-mono font-medium hover:border-[#00F0FF]/50 hover:text-[#00F0FF]"
                >
                  <Download size={14} className="text-[#00F0FF]" />
                  DOWNLOAD RESUME (PDF)
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#00F0FF] text-black font-semibold text-xs shadow-[0_0_20px_rgba(0,240,255,0.35)]"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
