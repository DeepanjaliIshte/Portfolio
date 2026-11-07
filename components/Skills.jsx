"use client";
import { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Code2, Server, Layout, Database, Wrench, Cloud } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function SkillCard({ group, groupKey, icon, index }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
      filter: shouldReduceMotion ? "none" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      className="card-dark rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between group transition-all duration-300"
    >
      {/* Interactive Cursor Spotlight Glow */}
      {isHovered && !shouldReduceMotion && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 -z-0"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.12), transparent 60%)`,
          }}
        />
      )}

      {/* Subtle top border glow on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_#00F0FF]" />

      <div className="relative z-10">
        {/* Header with Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 rounded-xl bg-[#0B132B] border border-cyan-900/40 flex items-center justify-center group-hover:border-[#00F0FF]/40 group-hover:bg-[#00F0FF]/10 transition-colors"
            >
              {icon}
            </motion.div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#00F0FF] transition-colors">
                {group.title}
              </h3>
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                {group.skills.length} Technologies
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs text-zinc-400 mb-6 font-normal leading-relaxed">
          {group.description}
        </p>

        {/* Skill Badges with Micro Hover */}
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, sIdx) => (
            <motion.span
              key={sIdx}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B132B] border border-cyan-900/40 text-xs font-mono font-medium text-zinc-200 hover:text-white hover:border-[#00F0FF]/50 hover:bg-[#00F0FF]/10 transition-all cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_6px_#00F0FF]"></span>
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Card Footer Status */}
      <div className="pt-6 mt-6 border-t border-cyan-900/30 flex items-center justify-between text-[11px] font-mono text-zinc-500 relative z-10">
        <span className="flex items-center gap-1.5 text-cyan-400/80">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_6px_#00F0FF]" />
          Production Verified
        </span>
        <span className="text-zinc-600">0{index + 1}</span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons = {
    coreJava: <Code2 size={20} className="text-[#00F0FF]" />,
    backend: <Server size={20} className="text-[#38BDF8]" />,
    database: <Database size={20} className="text-[#00F0FF]" />,
    web: <Layout size={20} className="text-[#38BDF8]" />,
    tools: <Wrench size={20} className="text-[#00F0FF]" />,
    cloud: <Cloud size={20} className="text-[#38BDF8]" />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#080D1A]/30">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-[#00F0FF] uppercase">
              02 // Capabilities
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[1px] w-12 bg-[#00F0FF]/40 origin-left"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
            Technical <span className="text-zinc-400 font-light">Proficiencies</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            Organized across core engineering layers—from foundational system logic and microservices to modern frontend interfaces and containerized infrastructure.
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.entries(skills).map(([key, group], idx) => (
            <SkillCard
              key={key}
              group={group}
              groupKey={key}
              icon={categoryIcons[key]}
              index={idx}
            />
          ))}
        </motion.div>

        {/* Additional Foundations Band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ borderColor: "rgba(0, 240, 255, 0.3)" }}
          className="mt-10 p-6 rounded-2xl bg-[#080D1A]/70 border border-cyan-900/30 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse shadow-[0_0_8px_#00F0FF]"></span>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Computer Science Foundations:
            </span>
            <span className="text-xs font-medium text-zinc-300">
              Core Java • OOP Architecture • Data Structures &amp; Algorithms (DSA) • DBMS • REST APIs
            </span>
          </div>

          <div className="text-[11px] font-mono text-zinc-500">
            Validated by MCA Curriculum &amp; Practical Projects
          </div>
        </motion.div>
      </div>
    </section>
  );
}
