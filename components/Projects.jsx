"use client";
import { useState, useRef } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ExternalLink, Workflow, Shield, Cpu, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { Github } from "./Icons";
import { portfolioData } from "../data/portfolioData";

function ProjectCard({ project, index, renderVisual }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const getArchitectureSpecs = (id) => {
    switch (id) {
      case "java-education-website":
        return {
          flow: "Next.js 16 Client ⇄ Spring Boot REST ⇄ MySQL 8.0",
          highlights: [
            "Spring Boot RESTful backend with modular controller & service layers",
            "Next.js 16 App Router frontend with responsive interview prep modules",
            "MySQL relational schema for courses, topics, and user management",
            "Deployed live on Vercel with high-availability REST routing"
          ],
          engine: "Java • Spring Boot • MySQL • Next.js"
        };
      case "flowmaster":
        return {
          flow: "Task Trigger ⇄ Kafka Topic [tasks] ⇄ Spring Boot Workers ⇄ PostgreSQL State",
          highlights: [
            "Distributed workflow engine using Apache Kafka for event-driven decoupled streaming",
            "PostgreSQL persistent execution log for state transitions & recovery checkpoints",
            "Docker Compose multi-container cluster orchestrating broker and microservices",
            "Spring Boot worker services with idempotent job processing & automatic retries"
          ],
          engine: "Java • Spring Boot • Apache Kafka • Docker • PostgreSQL"
        };
      case "algo-trading-system":
        return {
          flow: "TradingView Alerts ⇄ FastAPI ⇄ Pandas/NumPy ⇄ Broker APIs",
          highlights: [
            "Automated buy/sell trade execution from quantitative strategy signals",
            "Technical indicators pipeline calculating real-time demand & supply zones",
            "High-speed API ingestion with sub-second order processing",
            "MySQL logging for historical telemetry and audit trails"
          ],
          engine: "Python • Pandas • NumPy • REST APIs"
        };
      case "vpn-client-simulator":
      default:
        return {
          flow: "Java Swing GUI ⇄ Worker Threads ⇄ Socket Layer ⇄ Telemetry",
          highlights: [
            "Engineered with Core Java applying strict OOP principles",
            "Multithreaded connection state monitoring & server node selector",
            "Real-time data-usage tracking dashboard with bandwidth telemetry",
            "Modular architecture separating UI, network mock, and state models"
          ],
          engine: "Core Java • Swing • Multithreading • OOP"
        };
    }
  };

  const specs = getArchitectureSpecs(project.id);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rX = -((y - centerY) / centerY) * 7;
    const rY = ((x - centerX) / centerX) * 7;
    setRotate({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 50,
      filter: shouldReduceMotion ? "none" : "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        delay: index * 0.14,
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
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        y: isHovered ? -8 : 0,
      }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
      className="card-dark rounded-2xl overflow-hidden border border-white/[0.08] transition-all flex flex-col justify-between group shadow-2xl relative"
    >
      {/* Specular Light Sheen Reflection following Mouse */}
      {isHovered && !shouldReduceMotion && (
        <>
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-200 z-0"
            style={{
              background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.15), transparent 70%)`,
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0 opacity-40"
            style={{
              background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.1), transparent 60%)`,
            }}
          />
        </>
      )}

      {/* Top Border Glow Laser Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 shadow-[0_0_10px_#00F0FF]" />

      {/* 3D Depth Layer 1: Visual Header */}
      <div style={{ transform: "translateZ(20px)" }} className="relative z-10 transition-transform duration-300">
        {renderVisual(project.visualTheme, project.title, isHovered, mousePos)}
      </div>

      {/* 3D Depth Layer 2: Card Content Body */}
      <div className="p-6 sm:p-8 relative z-10 flex flex-col justify-between flex-grow">
        <div>
          {/* Category Pill & Stats */}
          <div
            style={{ transform: "translateZ(30px)" }}
            className="flex items-center justify-between gap-2 mb-3 transition-transform duration-300"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/30 px-2.5 py-1 rounded-full font-semibold shadow-sm">
              {project.badge}
            </span>
            <span className="text-[10px] font-mono text-zinc-500">
              {project.stats}
            </span>
          </div>

          {/* Title & Tagline with 3D Pop */}
          <h3
            style={{ transform: "translateZ(35px)" }}
            className="text-2xl font-bold text-white tracking-tight group-hover:text-[#00F0FF] transition-colors mb-1"
          >
            {project.title}
          </h3>

          <div
            style={{ transform: "translateZ(25px)" }}
            className="text-xs font-mono text-cyan-400/80 mb-4 transition-transform duration-300"
          >
            {project.tagline}
          </div>

          <p
            style={{ transform: "translateZ(20px)" }}
            className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal transition-transform duration-300"
          >
            {project.description}
          </p>

          {/* Tech Stack Pills with 3D Depth */}
          <div
            style={{ transform: "translateZ(25px)" }}
            className="flex flex-wrap gap-1.5 mb-4 transition-transform duration-300"
          >
            {project.technologies.map((tech, tIdx) => (
              <motion.span
                key={tIdx}
                whileHover={{ scale: 1.06, y: -1 }}
                className="text-[11px] font-mono text-zinc-300 bg-[#0B132B] px-2.5 py-1 rounded border border-cyan-900/40 group-hover:border-cyan-500/40 group-hover:text-[#00F0FF] transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Interactive Architecture Specs Toggle Button */}
          <button
            onClick={() => setShowSpecs((prev) => !prev)}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#0B132B]/80 hover:bg-[#0B132B] border border-cyan-900/40 hover:border-[#00F0FF]/50 text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer group/specs mb-1"
          >
            <span className="flex items-center gap-2">
              <Cpu size={13} className="text-[#00F0FF]" />
              <span className="tracking-wider uppercase text-[11px]">
                {showSpecs ? "Hide System Architecture" : "Inspect Architecture Specs"}
              </span>
            </span>
            {showSpecs ? (
              <ChevronUp size={14} className="text-[#00F0FF]" />
            ) : (
              <ChevronDown size={14} className="text-zinc-500 group-hover/specs:text-[#00F0FF]" />
            )}
          </button>

          {/* Interactive Architecture Blueprint Drawer */}
          <AnimatePresence>
            {showSpecs && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-3.5 rounded-xl bg-[#080D1A] border border-[#00F0FF]/30 space-y-2.5 my-2">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center justify-between">
                    <span>Request Flow:</span>
                    <span className="text-[#00F0FF] font-semibold">{specs.engine}</span>
                  </div>
                  <div className="p-2 rounded bg-[#0B132B] text-[10px] font-mono text-zinc-200 border border-cyan-900/40 break-all">
                    {specs.flow}
                  </div>
                  <div className="space-y-1.5 pt-1">
                    {specs.highlights.map((item, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-[11px] text-zinc-300">
                        <CheckCircle2 size={12} className="text-[#00F0FF] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 3D Depth Layer 3: Card Footer Actions */}
      <div
        style={{ transform: "translateZ(30px)" }}
        className="px-6 sm:px-8 py-4 bg-[#080D1A] border-t border-cyan-900/30 flex items-center justify-between relative z-20"
      >
        <div className="flex items-center gap-4">
          {project.liveDemo && (
            <motion.a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="group/link inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white hover:text-[#00F0FF] transition-colors cursor-pointer"
              aria-label={`Live Demo of ${project.title}`}
            >
              <ExternalLink size={13} className="text-[#00F0FF] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              <span>Live Demo</span>
            </motion.a>
          )}

          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="group/link inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-400 hover:text-[#00F0FF] transition-colors cursor-pointer"
              aria-label={`GitHub Repository of ${project.title}`}
            >
              <Github size={14} className="group-hover/link:text-[#00F0FF] transition-colors" />
              <span>Source Code</span>
            </motion.a>
          )}

          {!project.github && !project.liveDemo && (
            <span className="text-[11px] font-mono text-zinc-500 italic">
              Private Repository / Production Deployment
            </span>
          )}
        </div>

        <div className="text-[11px] font-mono text-zinc-600">
          REF // 0{index + 1}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { projects } = portfolioData;

  // Custom Futuristic Visual Renderers for each project with Motion
  const renderProjectVisual = (visualTheme, title, isHovered, mousePos) => {
    switch (visualTheme) {
      case "trading":
        return (
          <div className="relative h-52 w-full bg-[#080D1A] border-b border-cyan-900/30 p-4 flex flex-col justify-between overflow-hidden font-mono">
            {/* Visual Top Bar */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[11px] text-zinc-300 font-bold">ALGO_ENGINE::ACTIVE</span>
              </div>
              <div className="text-[10px] text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded border border-[#00F0FF]/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping" />
                <span>ZONE: DEMAND_TEST</span>
              </div>
            </div>

            {/* Trading Chart Visual Simulation with Interactive Hover Crosshair */}
            <div className="relative my-auto h-24 flex items-end justify-between gap-1.5 px-2 z-10">
              {/* Candlesticks with dynamic bounce on hover */}
              {[
                { h: "45%", color: "bg-cyan-950 border border-cyan-800/40" },
                { h: "60%", color: "bg-[#0066FF]" },
                { h: "35%", color: "bg-cyan-800" },
                { h: "75%", color: "bg-[#00F0FF]" },
                { h: "50%", color: "bg-cyan-900" },
                { h: "85%", color: "bg-[#38BDF8]" },
                { h: "65%", color: "bg-[#0066FF]" },
                { h: "90%", color: "bg-[#00F0FF]" },
              ].map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                  <motion.div
                    animate={isHovered ? { scaleY: [1, 1.1, 0.95, 1] } : {}}
                    transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.12 }}
                    style={{ height: bar.h }}
                    className={`w-full rounded-sm ${bar.color} opacity-85 origin-bottom shadow-sm`}
                  />
                </div>
              ))}

              {/* Demand Zone Overlay Line with Travelling Laser Pulse */}
              <div className="absolute left-0 right-0 top-1/2 border-b border-dashed border-[#00F0FF]/60 pointer-events-none">
                <motion.div
                  animate={{ x: ["0%", "100%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-[2px] bg-white shadow-[0_0_10px_#00F0FF]"
                />
                <span className="absolute right-0 -top-4 text-[9px] text-[#00F0FF] bg-[#080D1A] px-1 border border-cyan-900/50">
                  SUPPLY / DEMAND TRIGGER
                </span>
              </div>
            </div>

            {/* Bottom Telemetry */}
            <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-2 border-t border-cyan-900/30 z-10">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                TradingView Webhook: 200 OK
              </span>
              <span className="text-cyan-400/80 font-mono">Latency: 14ms</span>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00F0FF]/10 via-transparent to-transparent pointer-events-none" />
          </div>
        );

      case "code":
        return (
          <div className="relative h-52 w-full bg-[#080D1A] border-b border-cyan-900/30 p-4 flex flex-col justify-between overflow-hidden font-mono">
            {/* Visual Header */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_6px_#00F0FF]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-900"></span>
                <span className="text-[11px] text-zinc-300 ml-2">JavaCourseController.java</span>
              </div>
              <span className="text-[10px] text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                Spring Boot + MySQL
              </span>
            </div>

            {/* Code Snippet Display with Animated Typing Blinking Cursor */}
            <div className="text-[11px] leading-relaxed text-zinc-400 z-10 pl-2 border-l border-[#00F0FF]/40 my-auto">
              <p><span className="text-[#00F0FF]">@RestController</span></p>
              <p><span className="text-[#00F0FF]">@RequestMapping</span>(<span className="text-emerald-400">&quot;/api/v1/courses&quot;</span>)</p>
              <p><span className="text-[#38BDF8]">public class</span> <span className="text-zinc-200">JavaCourseController</span> &#123;</p>
              <p className="pl-3 flex items-center">
                <span className="text-[#00F0FF]">return</span> ResponseEntity.<span className="text-emerald-400">ok</span>(service.<span className="text-zinc-200">getCurriculum</span>());
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1.5 h-3 bg-[#00F0FF] ml-1 shadow-[0_0_6px_#00F0FF]"
                />
              </p>
              <p>&#125;</p>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-2 border-t border-cyan-900/30 z-10">
              <span>Database: MySQL 8.0</span>
              <span className="text-emerald-400">REST API: 200 OK</span>
            </div>

            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#00F0FF]/10 rounded-full blur-2xl pointer-events-none" />
          </div>
        );

      case "workflow":
        return (
          <div className="relative h-52 w-full bg-[#080D1A] border-b border-cyan-900/30 p-4 flex flex-col justify-between overflow-hidden font-mono">
            {/* Visual Header */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Workflow size={14} className="text-[#00F0FF]" />
                <span className="text-[11px] text-zinc-300 font-bold">KAFKA::PIPELINE_ORCHESTRATOR</span>
              </div>
              <span className="text-[10px] text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                Docker Cluster
              </span>
            </div>

            {/* Workflow Nodes Visual with Moving Data Packets */}
            <div className="flex items-center justify-around my-auto z-10 relative">
              <div className="flex flex-col items-center">
                <div className="px-3 py-1.5 rounded bg-[#0B132B] border border-cyan-900/40 text-[10px] text-zinc-200">
                  Task Trigger
                </div>
                <span className="text-[9px] text-cyan-400/70 mt-1">REST / Event</span>
              </div>

              {/* Pulsing Connector Arrow */}
              <div className="relative flex items-center justify-center">
                <span className="text-[#00F0FF] text-xs">──▶</span>
                <motion.span
                  animate={{ x: [-14, 14] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#00F0FF]"
                />
              </div>

              <div className="flex flex-col items-center">
                <div className="px-3 py-1.5 rounded bg-[#00F0FF]/15 border border-[#00F0FF]/50 text-[10px] text-[#00F0FF] font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  Kafka Stream
                </div>
                <span className="text-[9px] text-[#38BDF8] mt-1">Topic: Tasks</span>
              </div>

              {/* Pulsing Connector Arrow */}
              <div className="relative flex items-center justify-center">
                <span className="text-[#00F0FF] text-xs">──▶</span>
                <motion.span
                  animate={{ x: [-14, 14] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "linear", delay: 0.8 }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#00F0FF]"
                />
              </div>

              <div className="flex flex-col items-center">
                <div className="px-3 py-1.5 rounded bg-[#0B132B] border border-cyan-900/40 text-[10px] text-zinc-200">
                  PostgreSQL
                </div>
                <span className="text-[9px] text-cyan-400/70 mt-1">State Log</span>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-2 border-t border-cyan-900/30 z-10">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Cluster Healthy
              </span>
              <span className="text-zinc-400">3 Containers Active</span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-[#00F0FF]/10 pointer-events-none" />
          </div>
        );

      case "network":
      default:
        return (
          <div className="relative h-52 w-full bg-[#080D1A] border-b border-cyan-900/30 p-4 flex flex-col justify-between overflow-hidden font-mono">
            {/* Visual Header */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Shield size={14} className="text-[#00F0FF]" />
                <span className="text-[11px] text-zinc-300 font-bold">VPN_TUNNEL::SIMULATOR</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>CONNECTED</span>
              </span>
            </div>

            {/* Telemetry Display */}
            <div className="grid grid-cols-2 gap-3 my-auto z-10">
              <div className="p-2.5 rounded bg-[#0B132B] border border-cyan-900/40">
                <div className="text-[9px] text-zinc-500 uppercase">Architecture</div>
                <div className="text-xs font-bold text-white mt-0.5">Java Swing • OOP</div>
              </div>
              <div className="p-2.5 rounded bg-[#0B132B] border border-cyan-900/40">
                <div className="text-[9px] text-zinc-500 uppercase">Features</div>
                <div className="text-xs font-bold text-[#38BDF8] mt-0.5">Server Monitor • Telemetry</div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-2 border-t border-cyan-900/30 z-10">
              <span>UI Framework: Java Swing</span>
              <span className="text-emerald-400">Connection: Active</span>
            </div>

            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-[#00F0FF]/10 rounded-full blur-2xl pointer-events-none" />
          </div>
        );
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#080D1A]/30">
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
              04 // Showcase
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
            Featured <span className="text-zinc-400 font-light">Engineering Projects</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            Real software systems with actual architectures, deployed platforms, and verified repository links.
          </p>
        </motion.div>

        {/* Projects Grid with Stagger & 3D Tilt Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              renderVisual={renderProjectVisual}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
