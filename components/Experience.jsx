"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll-linked timeline line animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 60%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate pixel or percentage position of the laser head
  const laserTop = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
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
              03 // Journey
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
            Work <span className="text-zinc-400 font-light">Experience</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            Real-world software development engineering, cross-platform applications, and backend systems delivery.
          </p>
        </motion.div>

        {/* Animated Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Static Background Track */}
          <div className="absolute left-4 md:left-8 top-6 bottom-6 w-[2px] bg-white/[0.08] pointer-events-none" />

          {/* Dynamic Scroll-Linked Glowing Cyan Line */}
          {!shouldReduceMotion && (
            <>
              <motion.div
                className="absolute left-4 md:left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#0066FF] via-[#00F0FF] to-[#0066FF] origin-top pointer-events-none z-10 shadow-[0_0_12px_#00F0FF]"
                style={{ scaleY }}
              />

              {/* Laser Spark Traveling Head */}
              <motion.div
                className="absolute left-4 md:left-8 w-2 h-2 -ml-1 rounded-full bg-white shadow-[0_0_12px_#00F0FF,0_0_20px_#38BDF8] pointer-events-none z-20"
                style={{ top: laserTop }}
              />
            </>
          )}

          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, filter: shouldReduceMotion ? "none" : "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-12 md:pl-20"
            >
              {/* Timeline Glowing Milestone Node */}
              <div className="absolute left-[9px] md:left-[25px] top-6 -translate-x-1/2 flex items-center justify-center z-20">
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-[#030712] border-2 border-[#00F0FF] items-center justify-center shadow-[0_0_15px_#00F0FF]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                  </span>
                </span>
              </div>

              {/* Main Experience Card with 3D Depth */}
              <motion.div
                whileHover={{ y: -5, borderColor: "rgba(0, 240, 255, 0.45)" }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-6 sm:p-8 md:p-10 bg-[#080D1A]/90 border border-cyan-900/30 shadow-2xl relative overflow-hidden group transition-all"
              >
                {/* Subtle Cyan Glow on Hover */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#00F0FF]/5 rounded-bl-full pointer-events-none group-hover:bg-[#00F0FF]/10 transition-colors duration-500" />

                {/* Role Header Info */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-cyan-900/30">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono uppercase tracking-wider mb-2">
                      <Briefcase size={12} />
                      <span>{exp.type}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-[#00F0FF] transition-colors">
                      {exp.role}
                    </h3>

                    <div className="text-lg font-semibold text-[#38BDF8] mt-1">
                      {exp.company}
                    </div>
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B132B] border border-cyan-900/40 transition-colors"
                    >
                      <Calendar size={13} className="text-[#00F0FF]" />
                      <span>{exp.period}</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B132B] border border-cyan-900/40 transition-colors"
                    >
                      <MapPin size={13} className="text-[#00F0FF]" />
                      <span>{exp.location}</span>
                    </motion.div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed py-5 font-normal">
                  {exp.description}
                </p>

                {/* Deliverables / Responsibilities Grid with Stagger */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono uppercase tracking-widest text-cyan-400/80 mb-2">
                    Key Engineering Contributions:
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <motion.div
                        key={hIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.08 * hIdx }}
                        whileHover={{ x: 4, borderColor: "rgba(0, 240, 255, 0.4)" }}
                        className="p-3.5 rounded-xl bg-[#0B132B]/70 border border-cyan-900/30 transition-all flex items-start gap-3 cursor-default"
                      >
                        <CheckCircle2 size={16} className="text-[#00F0FF] flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies Stack Tags with Micro-Hover */}
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-cyan-400/80 mb-3">
                    Verified Tools &amp; Technologies:
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tIdx) => (
                      <motion.span
                        key={tIdx}
                        whileHover={{ scale: 1.06, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        className="px-3 py-1.5 rounded-full bg-[#0B132B] border border-cyan-900/40 text-xs font-mono text-zinc-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/60 hover:bg-[#00F0FF]/10 transition-all cursor-default shadow-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
