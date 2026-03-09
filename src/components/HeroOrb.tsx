"use client";

import { useEffect, useRef } from "react";

/**
 * HeroOrb — Animated gradient orbs in the hero background (canvas).
 * Uses requestAnimationFrame and mouse position for a subtle parallax effect.
 */
export default function HeroOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0,
      H = 0,
      t = 0;
    let tx = 0.75,
      ty = 0.45,
      mx = 0.75,
      my = 0.45;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      W = canvas.width = rect.width;
      H = canvas.height = rect.height;
    };

    const onMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      tx = (e.clientX - r.left) / W;
      ty = (e.clientY - r.top) / H;
    };
    const onMouseLeave = () => {
      tx = 0.75;
      ty = 0.45;
    };

    const parent = canvas.parentElement;
    parent?.addEventListener("mousemove", onMouseMove);
    parent?.addEventListener("mouseleave", onMouseLeave);

    const orbs = [
      { bx: 0.72, by: 0.38, ox: 0.1, oy: 0.11, r: 0.55, a: 0.16, sp: 0.8, ph: 0 },
      { bx: 0.86, by: 0.6, ox: 0.06, oy: 0.07, r: 0.38, a: 0.12, sp: 1.15, ph: 1.9 },
      { bx: 0.6, by: 0.52, ox: 0.07, oy: 0.08, r: 0.28, a: 0.09, sp: 0.65, ph: 3.3 },
      { bx: 0.93, by: 0.3, ox: 0.04, oy: 0.05, r: 0.22, a: 0.07, sp: 1.55, ph: 5.1 },
    ];

    const tick = () => {
      t += 0.006;
      mx += (tx - mx) * 0.04;
      my += (ty - my) * 0.04;

      ctx.clearRect(0, 0, W, H);
      const R = Math.min(W, H);

      orbs.forEach((o, i) => {
        const p = t * o.sp + o.ph;
        const cx = W * (o.bx + o.ox * Math.sin(p) + o.ox * 0.4 * Math.sin(p * 1.7));
        const cy = H * (o.by + o.oy * Math.cos(p * 0.85) + o.oy * 0.3 * Math.cos(p * 2.3));
        const cx2 = cx + (mx - 0.75) * 70;
        const cy2 = cy + (my - 0.45) * 60;
        const r = R * o.r * (1 + 0.07 * Math.sin(p * 1.3 + i));
        const g = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, r);
        g.addColorStop(0, `rgba(37,99,235,${o.a * 1.2})`);
        g.addColorStop(0.35, `rgba(37,99,235,${o.a * 0.7})`);
        g.addColorStop(0.7, `rgba(37,99,235,${o.a * 0.25})`);
        g.addColorStop(1, "rgba(37,99,235,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      });

      requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    tick();
    return () => {
      parent?.removeEventListener("mousemove", onMouseMove);
      parent?.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none z-0"
      aria-hidden
    />
  );
}
