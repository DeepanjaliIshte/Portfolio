"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import Image from "next/image";

export default function Hero() {
  const { name, title, about, github, linkedin, status } = portfolioData.personalInfo;
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
            <a href="mailto:deepanjaliishte@gmail.com?subject=Portfolio%20Contact" className="px-8 py-3 rounded-full bg-transparent border border-white/20 text-white font-medium hover:bg-white/10 transition-colors">
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
            <a 
              href="mailto:deepanjaliishte@gmail.com" 
              aria-label="Email Deepanjali Ishte"
              className="text-gray-400 hover:text-[#9d4edd] transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Profile Image & Badges */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center h-[500px] md:h-[600px] w-full mt-8 lg:mt-0"
        >
          {/* Radial Gradient Glows */}
          <div className="absolute w-[300px] h-[300px] bg-[#9d4edd]/20 rounded-full blur-[80px] z-0"></div>
          <div className="absolute w-[200px] h-[200px] bg-[#00b4d8]/20 rounded-full blur-[60px] translate-y-12 z-0"></div>

          {/* Profile Picture Container */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative z-10 w-[320px] h-[400px] md:w-[420px] md:h-[520px] mx-auto background-animate shadow-2xl"
          >
            <div className="absolute -inset-[3px] rounded-[2rem] bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400" />
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-950">
              <Image 
                src="/images/profile.png" 
                alt="Deepanjali Ishte - Software Developer" 
                fill
                priority
                sizes="(max-width: 768px) 320px, 420px"
                className="object-cover object-top z-10"
              />
            </div>
          </motion.div>

          {/* Floating Badges */}
          <FloatingBadge tech="Java" top="10%" left="0%" delay={0} />
          <FloatingBadge tech="Spring Boot" top="20%" right="-5%" delay={1} />
          <FloatingBadge tech="Python" bottom="25%" left="-10%" delay={2} />
          <FloatingBadge tech="React" bottom="15%" right="0%" delay={3} />
          
          {/* Status Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[5%] md:bottom-[2%] left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2 bg-[#050505]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-white whitespace-nowrap">Open to Opportunities</span>
          </motion.div>
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
      className="absolute glass px-4 py-2 rounded-xl text-sm font-medium text-[#00b4d8] shadow-lg border border-white/10 z-20 hidden sm:block"
      style={{ top, left, right, bottom }}
    >
      {tech}
    </motion.div>
  );
}
