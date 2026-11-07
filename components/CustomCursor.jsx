"use client";
import { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export default function CustomCursor() {
  const shouldReduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [ripples, setRipples] = useState([]);

  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const prevMousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const velocity = useRef({ x: 0, y: 0, speed: 0, angle: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer || shouldReduceMotion) return;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);

      const target = e.target;
      if (target) {
        const isInteractive = target.closest(
          "a, button, input, textarea, [role='button'], .clickable, .card-dark"
        );
        setHovered(!!isInteractive);
      }
    };

    const onMouseDown = (e) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-3), newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // High performance animation loop with velocity stretching
    const render = () => {
      const vx = mousePos.current.x - prevMousePos.current.x;
      const vy = mousePos.current.y - prevMousePos.current.y;
      const speed = Math.sqrt(vx * vx + vy * vy);
      const angle = Math.atan2(vy, vx) * (180 / Math.PI);

      velocity.current = {
        x: vx,
        y: vy,
        speed: Math.min(speed, 60),
        angle: angle,
      };

      prevMousePos.current = { ...mousePos.current };

      // Lerp smooth follow
      const ease = 0.2;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      // Stretch along velocity vector
      const stretch = Math.min(velocity.current.speed * 0.015, 0.4);
      const scaleX = 1 + stretch;
      const scaleY = 1 - stretch * 0.5;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) rotate(${velocity.current.angle}deg) scale(${scaleX}, ${scaleY})`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Center sharp dot in electric cyan */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF] pointer-events-none z-50 transition-transform duration-75"
        style={{ willChange: "transform" }}
      />

      {/* Fluid Velocity-Stretching Outer Ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none border transition-colors duration-200 -translate-x-1/2 -translate-y-1/2 ${
          hovered
            ? "w-12 h-12 -ml-6 -mt-6 border-[#00F0FF] bg-[#00F0FF]/15 shadow-[0_0_25px_rgba(0,240,255,0.5)]"
            : "w-8 h-8 -ml-4 -mt-4 border-cyan-400/30 bg-cyan-500/[0.03]"
        }`}
        style={{ willChange: "transform" }}
      />

      {/* Click Ripple Shockwaves in Electric Cyan */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00F0FF] pointer-events-none animate-ping"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: "36px",
            height: "36px",
            animationDuration: "500ms",
            animationIterationCount: 1,
            boxShadow: "0 0 20px rgba(0,240,255,0.7)",
          }}
        />
      ))}
    </div>
  );
}
