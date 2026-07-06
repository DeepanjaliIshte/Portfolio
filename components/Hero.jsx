"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { name, title, about, github, linkedin, email, status } = portfolioData.personalInfo;
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % title.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [title.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-grid">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">{status}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">{name.split(" ")[0]} {name.split(" ")[2]}</span> 👋
          </h1>
          
          <div className="h-8 md:h-12 overflow-hidden">
            <motion.p 
              key={currentTitle}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              className="text-xl md:text-2xl font-semibold text-[#00b4d8]"
            >
              {title[currentTitle]}
            </motion.p>
          </div>
          
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            {about.split('.')[0] + '.'} {about.split('.')[1] + '.'}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-[#9d4edd] to-[#00b4d8] text-white font-medium hover:opacity-90 transition-opacity">
              View My Projects
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full bg-transparent border border-white/20 text-white font-medium hover:bg-white/10 transition-colors">
              Contact Me
            </a>
          </div>
          
          <div className="flex items-center gap-6 pt-6">
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00b4d8] transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${email}`} className="text-gray-400 hover:text-[#9d4edd] transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Profile Image & Badges */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center h-[400px] md:h-[500px]"
        >
          {/* Animated Gradient Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-[#9d4edd]/30 border-dashed"
            />
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full border border-[#00b4d8]/40 border-dotted"
            />
          </div>
          
          {/* Profile Picture Placeholder */}
          <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-800 bg-gray-900 shadow-2xl flex items-center justify-center text-4xl font-bold text-gray-700">
            {/* If we had an image it would be here */}
            <span className="text-gradient">DI</span>
          </div>

          {/* Floating Badges */}
          <FloatingBadge tech="Java" top="10%" left="10%" delay={0} />
          <FloatingBadge tech="Spring Boot" top="15%" right="10%" delay={1} />
          <FloatingBadge tech="Python" bottom="20%" left="5%" delay={2} />
          <FloatingBadge tech="React" bottom="15%" right="15%" delay={3} />
          <FloatingBadge tech="Flutter" top="80%" left="40%" delay={1.5} />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingBadge({ tech, top, left, right, bottom, delay }) {
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay: delay, ease: "easeInOut" }}
      className="absolute glass px-4 py-2 rounded-xl text-sm font-medium text-[#00b4d8] shadow-lg border border-white/10 z-20"
      style={{ top, left, right, bottom }}
    >
      {tech}
    </motion.div>
  );
}
