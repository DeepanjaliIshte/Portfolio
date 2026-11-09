"use client";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Calendar, Building, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const { education } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const eduTheme = [
    {
      iconBg: "bg-[#C9B6F2]/35 border-[#C9B6F2]/80 text-[#4E378C]",
      hoverBorder: "hover:border-[#C9B6F2]",
    },
    {
      iconBg: "bg-[#F6B8D0]/35 border-[#F6B8D0]/80 text-[#8C244C]",
      hoverBorder: "hover:border-[#F6B8D0]",
    },
  ];

  return (
    <section id="education" className="py-12 md:py-16 relative overflow-hidden bg-[#FFF9F3]">
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
              <span>05 // Academic Foundations</span>
              <span className="text-[#C9B6F2]">✨</span>
            </span>
            <div className="h-[2px] w-14 bg-gradient-to-r from-[#F6B8D0] via-[#FFC9A9] to-[#C9B6F2] rounded-full" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-[#292326]">
            Computer Science Degrees &amp; <br />
            <span className="rainbow-gradient-text italic font-normal">Academic Rigor</span>
          </h2>
          <p className="mt-3 text-base text-[#292326] font-normal leading-relaxed">
            Formal educational background providing foundational depth in algorithms, relational DBMS, and software design principles.
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, idx) => {
            const theme = eduTheme[idx % eduTheme.length];
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                className={`p-7 sm:p-9 rounded-2xl bg-white border border-[#EBDCD2] ${theme.hoverBorder} transition-all flex flex-col justify-between shadow-2xs hover:shadow-[0_8px_25px_rgba(201,182,242,0.2)] group`}
              >
                <div>
                  {/* Header Icon & Year */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${theme.iconBg} border flex items-center justify-center transition-transform group-hover:scale-105`}>
                      <GraduationCap size={24} />
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF9F3] border border-[#EBDCD2] text-xs font-mono text-[#A13A64] font-bold">
                      <Calendar size={13} className="text-[#A13A64]" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* Degree & Institution */}
                  <span className="inline-block text-xs font-mono uppercase tracking-wider text-[#A13A64] mb-1 font-bold flex items-center gap-1">
                    <span>{edu.credential}</span>
                    <span className="text-xs text-[#C9B6F2]">✦</span>
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292326] mb-2 group-hover:text-[#A13A64] transition-colors leading-snug">
                    {edu.degree}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#292326] font-medium mb-4">
                    <Building size={14} className="text-[#8C244C]" />
                    <span>{edu.institution}</span>
                  </div>

                  <p className="text-sm text-[#292326] leading-relaxed font-normal mb-6">
                    {edu.highlight}
                  </p>
                </div>

                {/* Status footer */}
                <div className="pt-4 border-t border-[#EBDCD2] flex items-center justify-between text-xs font-mono text-[#292326]">
                  <span className="font-medium text-[#574F54]">{edu.affiliation}</span>
                  <span className="text-[#8C244C] font-bold flex items-center gap-1">
                    <span>• Verified</span>
                    <span className="text-xs">✨</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
