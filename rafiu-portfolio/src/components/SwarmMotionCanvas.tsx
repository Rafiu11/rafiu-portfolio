import React, { useEffect, useRef } from "react";

interface SwarmMotionCanvasProps {
  enabled: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originX: number;
  originY: number;
  size: number;
  color: string;
  alpha: number;
  phase: number;
}

export const SwarmMotionCanvas: React.FC<SwarmMotionCanvasProps> = ({ enabled }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });

  useEffect(() => {
    if (!enabled) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    const handlePointerMove = (e: PointerEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    // Responsive particle count: fewer on small screens
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 32 : 65;

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const isAccent = Math.random() < 0.28; // 28% red accent particles
        particles.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4 - 0.1, // subtle antigravity upward drift
          size: isAccent ? Math.random() * 2.2 + 1.2 : Math.random() * 1.5 + 0.8,
          color: isAccent ? "rgba(227, 43, 60, " : "rgba(242, 239, 235, ",
          alpha: Math.random() * 0.35 + 0.15,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    initParticles();

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const connectionDist = isMobile ? 70 : 100;
      const mouseInfluenceRadius = 140;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Antigravity wave drift
        p.x += p.vx + Math.sin(time + p.phase) * 0.25;
        p.y += p.vy + Math.cos(time + p.phase) * 0.25;

        // Mouse repelling physics
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseInfluenceRadius && dist > 0) {
            const force = (1 - dist / mouseInfluenceRadius) * 2.5;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        // Screen boundary wrap
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();

        // Connect nearby particles with subtle hairlines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distSq = (p.x - p2.x) ** 2 + (p.y - p2.y) ** 2;
          if (distSq < connectionDist * connectionDist) {
            const lineAlpha = (1 - Math.sqrt(distSq) / connectionDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(227, 43, 60, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-10 opacity-70 transition-opacity duration-700"
    />
  );
};
