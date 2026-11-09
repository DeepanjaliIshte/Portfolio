"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-12 md:py-16 relative overflow-hidden bg-[#FFF9F3] dark:bg-[#171219] transition-colors duration-300">
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
            <span className="text-xs font-mono font-bold tracking-widest text-[#A13A64] dark:text-[#F8C8DB] uppercase flex items-center gap-1.5">
              <span>03 // Work Experience</span>
              <span className="text-[#C9B6F2] dark:text-[#D4C4F7]">✨</span>
            </span>
            <div className="h-[2px] w-14 bg-gradient-to-r from-[#F6B8D0] via-[#FFC9A9] to-[#C9B6F2] rounded-full" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-[#292326] dark:text-[#F8F3F6]">
            Engineering Practice &amp; <br />
            <span className="rainbow-gradient-text italic font-normal">Industry Contribution</span>
          </h2>
          <p className="mt-3 text-base text-[#292326] dark:text-[#C5B9C8] font-normal leading-relaxed">
            Real-world software development engineering, cross-platform applications, and backend systems delivery.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Cute Rainbow Timeline Spine */}
          <div className="absolute left-4 md:left-8 top-6 bottom-6 w-[2.5px] bg-gradient-to-b from-[#F6B8D0] via-[#C9B6F2] via-[#A9D8F5] to-[#B9E6D0] rounded-full pointer-events-none" />

          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-12 md:pl-20 mb-8"
            >
              {/* Cute Timeline Marker Dot */}
              <div className="absolute left-[9px] md:left-[25px] top-7 -translate-x-1/2 flex items-center justify-center z-20">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#F6B8D0] to-[#C9B6F2] border-3 border-[#FFF9F3] dark:border-[#171219] shadow-xs flex items-center justify-center transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
              </div>

              {/* Experience Card */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                transition={{ duration: 0.2 }}
                className="p-7 sm:p-9 rounded-2xl bg-white dark:bg-[#231C28] border border-[#EBDCD2] dark:border-[#3D3147] shadow-2xs hover:border-[#F6B8D0] dark:hover:border-[#C9B6F2] hover:shadow-[0_6px_22px_rgba(246,184,208,0.2)] dark:hover:shadow-black/40 transition-all"
              >
                {/* Header Information */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#EBDCD2] dark:border-[#3D3147]">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6B8D0]/30 dark:bg-[#F6B8D0]/15 border border-[#F6B8D0]/80 dark:border-[#F6B8D0]/40 text-[#8C244C] dark:text-[#F8C8DB] text-xs font-mono uppercase tracking-wider mb-2 font-bold shadow-2xs">
                      <Briefcase size={12} className="text-[#8C244C] dark:text-[#F8C8DB]" />
                      <span>{exp.type}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292326] dark:text-[#F8F3F6] tracking-tight">
                      {exp.role}
                    </h3>

                    <div className="text-base font-bold text-[#A13A64] dark:text-[#F8C8DB] mt-1 font-mono flex items-center gap-1.5">
                      <span>{exp.company}</span>
                      <span className="text-xs text-[#C9B6F2] dark:text-[#D4C4F7]">✦</span>
                    </div>
                  </div>

                  {/* Metadata Chips in IBM Plex Mono */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#292326] dark:text-[#F8F3F6] font-medium">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF9F3] dark:bg-[#1D1722] border border-[#EBDCD2] dark:border-[#3D3147]">
                      <Calendar size={13} className="text-[#A13A64] dark:text-[#F8C8DB]" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF9F3] dark:bg-[#1D1722] border border-[#EBDCD2] dark:border-[#3D3147]">
                      <MapPin size={13} className="text-[#A13A64] dark:text-[#F8C8DB]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-[#292326] dark:text-[#F8F3F6] text-base leading-[1.68] py-5 font-normal">
                  {exp.description}
                </p>

                {/* Key Contributions */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#A13A64] dark:text-[#F8C8DB] font-bold flex items-center gap-1">
                    <span>// Key Engineering Contributions:</span>
                    <span className="text-[#C9B6F2] dark:text-[#D4C4F7]">✨</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 text-sm text-[#292326] dark:text-[#C5B9C8] leading-relaxed">
                        <CheckCircle2 size={16} className="text-[#196B45] dark:text-[#C7EDE0] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack Tags */}
                <div className="pt-5 border-t border-[#EBDCD2] dark:border-[#3D3147] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A13A64] dark:text-[#F8C8DB] font-bold mr-2">
                    Technologies:
                  </span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full bg-[#FFF9F3] dark:bg-[#1D1722] border border-[#EBDCD2] dark:border-[#3D3147] text-xs font-mono font-semibold text-[#292326] dark:text-[#F8F3F6] hover:border-[#F6B8D0] dark:hover:border-[#C9B6F2] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
