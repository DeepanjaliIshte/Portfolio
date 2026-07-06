"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import Image from "next/image";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#9d4edd] to-[#00b4d8] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden border border-white/10 group flex flex-col h-full"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 w-full bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium z-0">
                  {project.title} Visual
                </div>
                {/* 
                  If using real images:
                  <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="group-hover:scale-110 transition-transform duration-500" /> 
                */}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00b4d8] transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-semibold text-[#9d4edd] bg-[#9d4edd]/10 px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#00b4d8] transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
