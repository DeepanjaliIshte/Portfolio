"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Floating3DObjects() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (shouldReduceMotion) return;
    let rafId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 35;
        const y = (e.clientY / window.innerHeight - 0.5) * 35;
        setMousePos({ x, y });
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none"
      style={{ perspective: 1200 }}
      aria-hidden="true"
    >
      {/* 3D Object 1: Futuristic Wireframe Octahedron (Top Right) */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotateX: [0, 180, 360],
          rotateY: [0, 360, 720],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformStyle: "preserve-3d",
          x: mousePos.x * 0.8,
          y: mousePos.y * 0.8,
        }}
        className="absolute top-[18%] -right-10 md:right-[8%] w-32 h-32 md:w-44 md:h-44 opacity-40 hover:opacity-80 transition-opacity"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
          <polygon
            points="50,5 95,50 50,95 5,50"
            fill="none"
            stroke="#00F0FF"
            strokeWidth="1.2"
            strokeDasharray="4 2"
          />
          <polygon
            points="50,5 50,95"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="0.8"
          />
          <polygon
            points="5,50 95,50"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="0.8"
          />
          <circle cx="50" cy="50" r="14" fill="none" stroke="#0066FF" strokeWidth="1" />
          <circle cx="50" cy="50" r="3" fill="#00F0FF" />
        </svg>
      </motion.div>

      {/* 3D Object 2: Rotating Technical Gyroscope Ring (Mid Left) */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotateZ: [0, 360],
        }}
        transition={{
          y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          rotateZ: { duration: 35, repeat: Infinity, ease: "linear" },
        }}
        style={{
          transformStyle: "preserve-3d",
          x: -mousePos.x * 0.6,
          y: -mousePos.y * 0.6,
        }}
        className="hidden lg:block absolute top-[48%] -left-12 w-48 h-48 opacity-30"
      >
        <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-[0_0_20px_rgba(0,102,255,0.4)]">
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="#0066FF"
            strokeWidth="1.2"
            strokeDasharray="6 4"
          />
          <circle
            cx="60"
            cy="60"
            r="40"
            fill="none"
            stroke="#00F0FF"
            strokeWidth="0.8"
          />
          <circle
            cx="60"
            cy="60"
            r="28"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
          <line x1="60" y1="4" x2="60" y2="116" stroke="#00F0FF" strokeWidth="0.6" strokeOpacity="0.5" />
          <line x1="4" y1="60" x2="116" y2="60" stroke="#00F0FF" strokeWidth="0.6" strokeOpacity="0.5" />
        </svg>
      </motion.div>

      {/* 3D Object 3: Floating Wireframe Cube Node (Lower Right) */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotateX: [20, 40, 20],
          rotateY: [0, 180, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformStyle: "preserve-3d",
          x: mousePos.x * 0.5,
          y: mousePos.y * 0.5,
        }}
        className="hidden md:block absolute bottom-[22%] right-[5%] w-36 h-36 opacity-35"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,240,255,0.35)]">
          {/* Isometric Cube */}
          <polygon points="50,15 85,35 50,55 15,35" fill="none" stroke="#00F0FF" strokeWidth="1" />
          <polygon points="15,35 50,55 50,90 15,70" fill="none" stroke="#0066FF" strokeWidth="1" />
          <polygon points="50,55 85,35 85,70 50,90" fill="none" stroke="#38BDF8" strokeWidth="1" />
          {/* Inner core */}
          <circle cx="50" cy="55" r="4" fill="#00F0FF" />
        </svg>
      </motion.div>

      {/* 3D Object 4: Floating Tech Coordinate Crosshairs (Upper Left) */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          x: -mousePos.x * 0.4,
          y: -mousePos.y * 0.4,
        }}
        className="absolute top-[12%] left-[4%] w-24 h-24 pointer-events-none"
      >
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <line x1="40" y1="10" x2="40" y2="70" stroke="#00F0FF" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="10" y1="40" x2="70" y2="40" stroke="#00F0FF" strokeWidth="1" strokeDasharray="3 3" />
          <rect x="30" y="30" width="20" height="20" fill="none" stroke="#0066FF" strokeWidth="1" />
          <text x="44" y="28" fill="#38BDF8" fontSize="6" fontFamily="monospace">SYS//3D</text>
        </svg>
      </motion.div>
    </div>
  );
}

