"use client";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Calendar, Building } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const { education } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
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
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden">
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
              05 // Education
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
            Academic <span className="text-zinc-400 font-light">Qualifications</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            Formal computer science degrees establishing strong foundations in systems, algorithms, and software engineering.
          </p>
        </motion.div>

        {/* Education Cards Grid with Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5, borderColor: "rgba(0, 240, 255, 0.4)" }}
              className="rounded-2xl p-6 sm:p-8 bg-[#080D1A]/90 border border-cyan-900/30 transition-all flex flex-col justify-between group relative overflow-hidden cursor-default shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F0FF]/5 rounded-bl-full pointer-events-none group-hover:bg-[#00F0FF]/10 transition-colors duration-500" />

              <div>
                {/* Header Icon & Year Badge */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-xl bg-[#0B132B] border border-cyan-900/40 flex items-center justify-center text-[#00F0FF] group-hover:border-[#00F0FF]/40 group-hover:bg-[#00F0FF]/10 transition-colors"
                  >
                    <GraduationCap size={24} />
                  </motion.div>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B132B] border border-cyan-900/40 text-xs font-mono text-zinc-300">
                    <Calendar size={12} className="text-[#00F0FF]" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Degree Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-[#00F0FF] transition-colors">
                  {edu.degree}
                </h3>

                {/* Institution & University */}
                <div className="flex items-start gap-2 text-sm text-zinc-300 font-medium mb-1">
                  <Building size={16} className="text-[#00F0FF] flex-shrink-0 mt-0.5" />
                  <span>{edu.institution}</span>
                </div>

                <div className="text-xs font-mono text-cyan-400/70 pl-6 mb-4">
                  {edu.affiliation}
                </div>

                {/* Curriculum Highlight */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-6">
                  {edu.highlight}
                </p>
              </div>

              {/* Card Footer Credential */}
              <div className="pt-4 border-t border-cyan-900/30 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500 uppercase tracking-wider">Qualification:</span>
                <span className="px-3 py-1 rounded bg-[#0B132B] border border-cyan-900/40 text-[#00F0FF] font-medium">
                  {edu.credential || "Degree in Computer Applications"}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
