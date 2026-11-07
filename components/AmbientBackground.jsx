"use client";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function AmbientBackground() {
  const shouldReduceMotion = useReducedMotion();
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    let rafId;

    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Advanced Interactive Electric Cyan / Blue Connected-Node Constellation
  useEffect(() => {
    if (shouldReduceMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 32 : 55;
    const connectionDist = isMobile ? 85 : 130;
    const mouseRadius = isMobile ? 120 : 190;

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const handleCanvasMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleCanvasMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleCanvasMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleCanvasMouseLeave);

    // Nodes with 3D depth simulation & electric cyan/blue lighting
    const nodes = Array.from({ length: nodeCount }, () => {
      const z = Math.random() * 0.8 + 0.2; // depth layer
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45 * z,
        vy: (Math.random() - 0.5) * 0.45 * z,
        radius: (Math.random() * 1.6 + 1.0) * z,
        z: z,
        isCyan: Math.random() > 0.35,
        pulseVal: Math.random() * Math.PI,
        pulseSpeed: Math.random() * 0.02 + 0.008,
      };
    });

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibility);

    let scrollY = window.scrollY;
    let prevScrollY = scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const scrollDelta = (scrollY - prevScrollY) * 0.2;
      prevScrollY = scrollY;

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Velocity & scroll parallax
        n.x += n.vx;
        n.y += n.vy - scrollDelta * n.z;
        n.pulseVal += n.pulseSpeed;

        // Screen boundary wrap
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;

        // Mouse interactive magnetic deflection
        const dxMouse = mouse.x - n.x;
        const dyMouse = mouse.y - n.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouseRadius) {
          const force = (1 - distMouse / mouseRadius) * 0.8;
          n.x -= (dxMouse / distMouse) * force;
          n.y -= (dyMouse / distMouse) * force;

          // Draw connection to mouse cursor in electric cyan
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          const cursorLineAlpha = (1 - distMouse / mouseRadius) * 0.3;
          ctx.strokeStyle = `rgba(0, 240, 255, ${cursorLineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // Draw connections between nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.18 * n.z;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = n.isCyan || n2.isCyan
              ? `rgba(0, 240, 255, ${alpha})`
              : `rgba(0, 102, 255, ${alpha * 0.9})`;
            ctx.lineWidth = 0.6 * n.z;
            ctx.stroke();
          }
        }

        // Draw node with cyan/blue glow
        const pulse = 0.7 + 0.3 * Math.sin(n.pulseVal);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = n.isCyan
          ? `rgba(0, 240, 255, ${0.75 * pulse * n.z})`
          : `rgba(56, 189, 248, ${0.65 * pulse * n.z})`;
        if (n.isCyan) {
          ctx.shadowColor = "#00F0FF";
          ctx.shadowBlur = 8 * n.z;
        } else {
          ctx.shadowColor = "#0066FF";
          ctx.shadowBlur = 4 * n.z;
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleCanvasMouseMove);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleCanvasMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldReduceMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top ambient electric cyan radial lighting */}
      <div className="ambient-cyan-top" />

      {/* Subtle technical background grid pattern */}
      <div className="absolute inset-0 bg-subtle-grid bg-radial-fade opacity-70" />

      {/* 3D Cyber Horizon Floor Mesh in Electric Cyan */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[48vh] pointer-events-none opacity-30 overflow-hidden"
        style={{
          perspective: "800px",
          maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 95%)",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            transform: "rotateX(72deg) translateY(20%)",
            transformOrigin: "bottom center",
            backgroundImage:
              "linear-gradient(to right, rgba(0, 240, 255, 0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.16) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Dynamic drifting electric blue & cyan ambient orbs */}
      <div
        className="ambient-cyan-glow w-[550px] h-[550px] -top-40 -left-40 bg-[#0066FF] animate-pulse"
        style={{ opacity: 0.1, animationDuration: "8s" }}
      />
      <div
        className="ambient-cyan-glow w-[650px] h-[650px] top-1/3 -right-60 bg-[#00F0FF] animate-pulse"
        style={{ opacity: 0.08, animationDuration: "11s" }}
      />
      <div
        className="ambient-cyan-glow w-[550px] h-[550px] bottom-40 -left-40 bg-[#0066FF] animate-pulse"
        style={{ opacity: 0.09, animationDuration: "9s" }}
      />

      {/* Interactive Connected-Node Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Interactive mouse spotlight glow in electric cyan */}
      {mousePos.x > -500 && !shouldReduceMotion && (
        <div
          className="hidden lg:block fixed w-[650px] h-[650px] rounded-full pointer-events-none transition-opacity duration-500 ease-out"
          style={{
            left: `${mousePos.x - 325}px`,
            top: `${mousePos.y - 325}px`,
            background:
              "radial-gradient(circle, rgba(0, 240, 255, 0.07) 0%, rgba(0, 102, 255, 0.02) 45%, transparent 70%)",
            transform: "translate3d(0, 0, 0)",
          }}
        />
      )}
    </div>
  );
}
