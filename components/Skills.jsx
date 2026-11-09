"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Code2, Server, Layout, Database, Wrench, Cloud, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function SkillCard({ group, iconInfo, index }) {
  const shouldReduceMotion = useReducedMotion();

  // Cute dot colors for skill badges
  const dotColors = ["bg-[#F6B8D0]", "bg-[#FFC9A9]", "bg-[#F9E7A0]", "bg-[#B9E6D0]", "bg-[#A9D8F5]", "bg-[#C9B6F2]"];

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -3 }}
      className={`p-6 sm:p-7 rounded-2xl bg-white border border-[#EBDCD2] ${iconInfo.hoverBorder} transition-all flex flex-col justify-between group shadow-2xs hover:shadow-[0_6px_22px_rgba(201,182,242,0.22)]`}
    >
      <div>
        {/* Category Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${iconInfo.bg} border ${iconInfo.border} flex items-center justify-center transition-transform group-hover:scale-105`}>
              {iconInfo.icon}
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#292326] group-hover:text-[#A13A64] transition-colors">
                {group.title}
              </h3>
              <span className={`text-xs font-mono font-bold ${iconInfo.textColor} uppercase tracking-wider flex items-center gap-1`}>
                <span>{group.skills.length} Technologies</span>
                <span className="text-[10px]">✨</span>
              </span>
            </div>
          </div>
          <span className="text-xs font-mono text-[#A13A64] font-bold">
            0{index + 1}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#292326] mb-5 font-normal leading-relaxed">
          {group.description}
        </p>

        {/* Skill Badges with Cute Rounded Pills */}
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, sIdx) => (
            <motion.span
              key={sIdx}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -1 }}
              transition={{ duration: 0.18 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9F3] border border-[#EBDCD2] text-xs font-mono font-semibold text-[#292326] hover:border-[#F6B8D0] hover:text-[#8C244C] transition-colors cursor-default shadow-2xs"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${dotColors[sIdx % dotColors.length]}`} />
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Footer Status */}
      <div className="pt-4 mt-5 border-t border-[#EBDCD2] flex items-center justify-between text-xs font-mono text-[#292326]">
        <span className="font-medium text-[#574F54]">Verified Competency</span>
        <span className="text-[#8C244C] font-bold flex items-center gap-1">
          <span>• Production Ready</span>
          <span className="text-xs">✦</span>
        </span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { skills } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const categoryConfig = {
    coreJava: {
      icon: <Code2 size={20} className="text-[#8C244C]" />,
      bg: "bg-[#F6B8D0]/35",
      border: "border-[#F6B8D0]/80",
      textColor: "text-[#8C244C]",
      hoverBorder: "hover:border-[#F6B8D0]",
    },
    backend: {
      icon: <Server size={20} className="text-[#196B45]" />,
      bg: "bg-[#B9E6D0]/40",
      border: "border-[#B9E6D0]/80",
      textColor: "text-[#196B45]",
      hoverBorder: "hover:border-[#B9E6D0]",
    },
    database: {
      icon: <Database size={20} className="text-[#1C5B85]" />,
      bg: "bg-[#A9D8F5]/40",
      border: "border-[#A9D8F5]/80",
      textColor: "text-[#1C5B85]",
      hoverBorder: "hover:border-[#A9D8F5]",
    },
    web: {
      icon: <Layout size={20} className="text-[#4E378C]" />,
      bg: "bg-[#C9B6F2]/35",
      border: "border-[#C9B6F2]/80",
      textColor: "text-[#4E378C]",
      hoverBorder: "hover:border-[#C9B6F2]",
    },
    tools: {
      icon: <Wrench size={20} className="text-[#8A3F15]" />,
      bg: "bg-[#FFC9A9]/40",
      border: "border-[#FFC9A9]/80",
      textColor: "text-[#8A3F15]",
      hoverBorder: "hover:border-[#FFC9A9]",
    },
    cloud: {
      icon: <Cloud size={20} className="text-[#735F0D]" />,
      bg: "bg-[#F9E7A0]/45",
      border: "border-[#F9E7A0]/90",
      textColor: "text-[#735F0D]",
      hoverBorder: "hover:border-[#F9E7A0]",
    },
  };

  const skillGroups = Object.entries(skills);

  return (
    <section id="skills" className="py-12 md:py-16 relative overflow-hidden bg-[#FFF9F3]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with Viewport Reveal */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col mb-10 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#A13A64] uppercase flex items-center gap-1.5">
              <span>02 // Technical Capabilities</span>
              <span className="text-[#C9B6F2]">✨</span>
            </span>
            <div className="h-[2px] w-14 bg-gradient-to-r from-[#F6B8D0] via-[#FFC9A9] to-[#C9B6F2] rounded-full" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-[#201A1D]">
            Core Engineering Stack &amp; <br />
            <span className="rainbow-gradient-text italic font-normal">Technical Proficiency</span>
          </h2>
          <p className="mt-3 text-base text-[#292326] font-normal leading-relaxed">
            Verified backend, distributed systems, persistence, and frontend development competencies applied across production architectures.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(([key, group], idx) => (
            <SkillCard
              key={key}
              group={group}
              iconInfo={categoryConfig[key] || categoryConfig.coreJava}
              index={idx}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
