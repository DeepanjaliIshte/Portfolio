"use client";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ExternalLink, Workflow, Shield, Cpu, ChevronDown, ChevronUp, CheckCircle2, Sparkles } from "lucide-react";
import { Github } from "./Icons";
import { portfolioData } from "../data/portfolioData";

function ProjectCard({ project, index, renderVisual }) {
  const [showSpecs, setShowSpecs] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -3 }}
      className="p-7 sm:p-9 rounded-2xl bg-white dark:bg-[#231C28] border border-[#EBDCD2] dark:border-[#3D3147] hover:border-[#F6B8D0] dark:hover:border-[#C9B6F2] transition-all flex flex-col justify-between shadow-2xs hover:shadow-[0_8px_25px_rgba(201,182,242,0.22)] dark:hover:shadow-black/40 group"
    >
      <div>
        {/* Top Header Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#EBDCD2] dark:border-[#3D3147]">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F6B8D0]/30 dark:bg-[#F6B8D0]/15 border border-[#F6B8D0]/80 dark:border-[#F6B8D0]/40 text-[#8C244C] dark:text-[#F8C8DB] text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
            <span className="text-xs">✨</span>
            <span>{project.badge}</span>
          </span>
          <span className="text-xs font-mono text-[#A13A64] dark:text-[#F8C8DB] font-bold">
            CASE STUDY // 0{index + 1}
          </span>
        </div>

        {/* Visual Architectural Preview with Controlled Scale */}
        <div className="mb-6 rounded-xl overflow-hidden border border-[#EBDCD2] dark:border-[#3D3147] group-hover:border-[#C9B6F2] transition-colors">
          {renderVisual(project.visualTheme, project.title)}
        </div>

        {/* Title and Tagline */}
        <div className="space-y-1.5 mb-5">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292326] dark:text-[#F8F3F6] group-hover:text-[#A13A64] dark:group-hover:text-[#F8C8DB] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-[#A13A64] dark:text-[#F8C8DB] font-bold tracking-wide">
            {project.tagline}
          </p>
        </div>

        {/* Problem & Solution Case Study Narrative */}
        <div className="space-y-3.5 mb-6 text-sm text-[#292326] dark:text-[#F8F3F6] font-normal leading-relaxed">
          <div className="p-4 rounded-xl bg-[#FFF9F3] dark:bg-[#1D1722] border border-[#EBDCD2] dark:border-[#3D3147]">
            <span className="font-mono text-xs font-bold text-[#8C244C] dark:text-[#F8C8DB] uppercase block mb-1">
              Problem Definition:
            </span>
            <p className="text-[#292326] dark:text-[#C5B9C8]">{project.problem}</p>
          </div>

          <div className="p-4 rounded-xl bg-[#FFF9F3] dark:bg-[#1D1722] border border-[#EBDCD2] dark:border-[#3D3147]">
            <span className="font-mono text-xs font-bold text-[#196B45] dark:text-[#C7EDE0] uppercase block mb-1">
              Engineered Solution:
            </span>
            <p className="text-[#292326] dark:text-[#C5B9C8]">{project.solution}</p>
          </div>
        </div>

        {/* Collapsible Architecture Specs */}
        <div className="mb-6">
          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className="flex items-center justify-between w-full p-3.5 rounded-xl bg-[#FFF9F3] dark:bg-[#1D1722] hover:bg-white dark:hover:bg-[#2A2230] border border-[#EBDCD2] dark:border-[#3D3147] text-xs font-mono text-[#A13A64] dark:text-[#F8C8DB] font-bold transition-colors cursor-pointer shadow-2xs"
          >
            <span className="flex items-center gap-1.5">
              <span>{showSpecs ? "Hide Architecture Flow" : "View Architecture Flow & Key Features"}</span>
              <span className="text-xs">✦</span>
            </span>
            {showSpecs ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          <AnimatePresence>
            {showSpecs && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 p-4 rounded-xl bg-[#FFF9F3] dark:bg-[#1D1722] border border-[#EBDCD2] dark:border-[#3D3147] space-y-3 text-xs overflow-hidden"
              >
                <div className="font-mono text-[#292326] dark:text-[#F8F3F6]">
                  <span className="font-bold block mb-1 uppercase tracking-wider text-xs text-[#A13A64] dark:text-[#F8C8DB]">
                    Data Flow Topology:
                  </span>
                  <span className="text-[#292326] dark:text-[#F8F3F6] bg-white dark:bg-[#231C28] p-2.5 rounded-lg border border-[#EBDCD2] dark:border-[#3D3147] block text-xs sm:text-sm font-semibold">
                    {project.architectureSummary}
                  </span>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#EBDCD2] dark:border-[#3D3147]">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#A13A64] dark:text-[#F8C8DB] block">
                    Implementation Highlights:
                  </span>
                  {project.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-[#292326] dark:text-[#C5B9C8] text-xs sm:text-sm leading-relaxed font-normal">
                      <CheckCircle2 size={15} className="text-[#196B45] dark:text-[#C7EDE0] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="px-3 py-1 rounded-full bg-[#FFF9F3] dark:bg-[#1D1722] border border-[#EBDCD2] dark:border-[#3D3147] text-xs font-mono font-semibold text-[#292326] dark:text-[#F8F3F6] hover:border-[#F6B8D0] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Verified Action Links */}
      <div className="pt-5 border-t border-[#EBDCD2] dark:border-[#3D3147] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          {project.liveDemo && (
            <motion.a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#8C244C] dark:text-[#F8C8DB] hover:text-[#A13A64] dark:hover:text-[#D4C4F7] transition-colors cursor-pointer"
              aria-label={`Live Demo of ${project.title}`}
            >
              <ExternalLink size={14} className="text-[#8C244C] dark:text-[#F8C8DB]" />
              <span>Live Application</span>
            </motion.a>
          )}

          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#292326] dark:text-[#F8F3F6] hover:text-[#8C244C] dark:hover:text-[#F8C8DB] transition-colors cursor-pointer"
              aria-label={`GitHub Repository of ${project.title}`}
            >
              <Github size={15} className="text-[#292326] dark:text-[#F8F3F6]" />
              <span>Verified Repository</span>
            </motion.a>
          )}

          {!project.github && !project.liveDemo && (
            <span className="text-xs font-mono text-[#574F54] dark:text-[#C5B9C8] italic font-medium">
              Production Deployment • Enterprise Codebase
            </span>
          )}
        </div>

        <span className="text-xs font-mono font-bold text-[#A13A64] dark:text-[#F8C8DB] uppercase flex items-center gap-1">
          <span>{project.stats}</span>
          <span className="text-xs">✨</span>
        </span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { projects } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const renderProjectVisual = (visualTheme, title) => {
    switch (visualTheme) {
      case "code":
        return (
          <div className="h-44 w-full bg-[#1A1520] dark:bg-[#15101A] p-4 flex flex-col justify-between font-mono text-xs text-[#FFF9F3] border border-transparent dark:border-[#3D3147]/50">
            <div className="flex items-center justify-between pb-2 border-b border-white/15 dark:border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F6B8D0]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F9E7A0]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#B9E6D0]" />
                <span className="text-[#FFF9F3] ml-1 font-semibold">DeepCodeWarriors // CourseController.java</span>
              </div>
              <span className="text-[#F6B8D0] dark:text-[#F8C8DB] font-bold">Spring Boot 3</span>
            </div>
            <div className="py-2 text-xs leading-relaxed text-[#FFF9F3] space-y-0.5">
              <p><span className="text-[#F6B8D0] dark:text-[#F8C8DB] font-semibold">@RestController</span></p>
              <p><span className="text-[#F6B8D0] dark:text-[#F8C8DB] font-semibold">@RequestMapping</span>(&quot;/api/v1/courses&quot;)</p>
              <p><span className="text-[#FFF9F3] font-bold">public class</span> CourseController &#123;</p>
              <p className="pl-3 text-[#FFF9F3]"><span className="text-[#A9D8F5] dark:text-[#BBE0F8] font-semibold">return</span> ResponseEntity.ok(service.getTopics());</p>
              <p>&#125;</p>
            </div>
            <div className="flex items-center justify-between text-xs text-[#C9B6F2] dark:text-[#D4C4F7] pt-2 border-t border-white/15 dark:border-white/10 font-medium">
              <span>Next.js 16 UI ⇄ MySQL 8.0</span>
              <span className="text-[#B9E6D0] dark:text-[#C7EDE0] font-bold">HTTP 200 OK ✨</span>
            </div>
          </div>
        );

      case "workflow":
        return (
          <div className="h-44 w-full bg-[#1A1520] dark:bg-[#15101A] p-4 flex flex-col justify-between font-mono text-xs text-[#FFF9F3] border border-transparent dark:border-[#3D3147]/50">
            <div className="flex items-center justify-between pb-2 border-b border-white/15 dark:border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <Workflow size={14} className="text-[#F6B8D0] dark:text-[#F8C8DB]" />
                <span className="text-[#FFF9F3] font-bold">FlowMaster :: Kafka Task Engine</span>
              </div>
              <span className="text-[#B9E6D0] dark:text-[#C7EDE0] font-bold">Docker Compose</span>
            </div>
            <div className="flex items-center justify-around my-auto">
              <div className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-center text-xs">
                <div className="font-bold text-[#FFF9F3]">Task Dispatch</div>
                <div className="text-xs text-[#A9D8F5] dark:text-[#BBE0F8]">REST Controller</div>
              </div>
              <span className="text-[#F6B8D0] dark:text-[#F8C8DB] text-sm font-bold">──▶</span>
              <div className="px-3 py-1.5 rounded-lg bg-[#F6B8D0]/20 border border-[#F6B8D0]/50 text-center text-xs">
                <div className="font-bold text-[#FFF9F3]">Kafka Topic</div>
                <div className="text-xs text-[#F6B8D0] dark:text-[#F8C8DB]">[tasks-stream]</div>
              </div>
              <span className="text-[#C9B6F2] dark:text-[#D4C4F7] text-sm font-bold">──▶</span>
              <div className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-center text-xs">
                <div className="font-bold text-[#FFF9F3]">PostgreSQL</div>
                <div className="text-xs text-[#B9E6D0] dark:text-[#C7EDE0]">State Log</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-[#C9B6F2] dark:text-[#D4C4F7] pt-2 border-t border-white/15 dark:border-white/10 font-medium">
              <span>Cluster: 3 Nodes Active</span>
              <span className="text-[#F9E7A0] dark:text-[#FAEEB8] font-bold">Idempotent Execution ✦</span>
            </div>
          </div>
        );

      case "trading":
        return (
          <div className="h-44 w-full bg-[#1A1520] dark:bg-[#15101A] p-4 flex flex-col justify-between font-mono text-xs text-[#FFF9F3] border border-transparent dark:border-[#3D3147]/50">
            <div className="flex items-center justify-between pb-2 border-b border-white/15 dark:border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <Cpu size={14} className="text-[#FFC9A9] dark:text-[#FFD6BF]" />
                <span className="text-[#FFF9F3] font-bold">Algo Engine :: Market Pipeline</span>
              </div>
              <span className="text-[#FFC9A9] dark:text-[#FFD6BF] font-bold">Python • Pandas</span>
            </div>
            <div className="h-16 flex items-end justify-between gap-2 px-3 my-auto">
              {[
                { h: 40, c: "bg-[#F6B8D0]" },
                { h: 65, c: "bg-[#FFC9A9]" },
                { h: 30, c: "bg-[#F9E7A0]" },
                { h: 85, c: "bg-[#B9E6D0]" },
                { h: 55, c: "bg-[#A9D8F5]" },
                { h: 95, c: "bg-[#C9B6F2]" },
                { h: 70, c: "bg-[#F6B8D0]" },
                { h: 90, c: "bg-[#B9E6D0]" },
              ].map((bar, i) => (
                <div key={i} className={`flex-1 ${bar.c} rounded-t-sm`} style={{ height: `${bar.h}%` }} />
              ))}
            </div>
            <div className="flex items-center justify-between text-xs text-[#C9B6F2] dark:text-[#D4C4F7] pt-2 border-t border-white/15 dark:border-white/10 font-medium">
              <span>Vectorized Indicators: RSI / EMA</span>
              <span className="text-[#B9E6D0] dark:text-[#C7EDE0] font-bold">Broker API Hook: Active ✨</span>
            </div>
          </div>
        );

      case "network":
      default:
        return (
          <div className="h-44 w-full bg-[#1A1520] dark:bg-[#15101A] p-4 flex flex-col justify-between font-mono text-xs text-[#FFF9F3] border border-transparent dark:border-[#3D3147]/50">
            <div className="flex items-center justify-between pb-2 border-b border-white/15 dark:border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <Shield size={14} className="text-[#A9D8F5] dark:text-[#BBE0F8]" />
                <span className="text-[#FFF9F3] font-bold">VPN Simulator :: Core Java Swing</span>
              </div>
              <span className="text-[#A9D8F5] dark:text-[#BBE0F8] font-bold">OOP Architecture</span>
            </div>
            <div className="grid grid-cols-2 gap-3 my-auto text-xs">
              <div className="p-2.5 rounded-lg bg-white/10 border border-white/20">
                <div className="text-[#C9B6F2] dark:text-[#D4C4F7] uppercase text-xs font-semibold">Concurrency</div>
                <div className="text-[#FFF9F3] font-bold mt-0.5">Worker Threads</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/10 border border-white/20">
                <div className="text-[#C9B6F2] dark:text-[#D4C4F7] uppercase text-xs font-semibold">Telemetry</div>
                <div className="text-[#F6B8D0] dark:text-[#F8C8DB] font-bold mt-0.5">Dynamic Server Monitor</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-[#A9D8F5] dark:text-[#BBE0F8] pt-2 border-t border-white/15 dark:border-white/10 font-medium">
              <span>Pattern: MVC Domain Separation</span>
              <span className="text-[#F9E7A0] dark:text-[#FAEEB8] font-bold">Socket Simulator ✦</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-12 md:py-16 relative overflow-hidden bg-[#FFF9F3] dark:bg-[#171219] transition-colors duration-300">
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
              <span>04 // Featured Engineering</span>
              <span className="text-[#C9B6F2] dark:text-[#D4C4F7]">✨</span>
            </span>
            <div className="h-[2px] w-14 bg-gradient-to-r from-[#F6B8D0] via-[#FFC9A9] to-[#C9B6F2] rounded-full" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-[#292326] dark:text-[#F8F3F6]">
            Architectural Case Studies &amp; <br />
            <span className="rainbow-gradient-text italic font-normal">Distributed Systems</span>
          </h2>
          <p className="mt-3 text-base text-[#292326] dark:text-[#C5B9C8] font-normal leading-relaxed">
            Engineered systems demonstrating object-oriented design, event-driven streaming, quantitative algorithms, and full-stack integration.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              renderVisual={renderProjectVisual}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
