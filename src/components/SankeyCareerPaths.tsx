"use client";

import { useEffect, useRef } from "react";

export default function SankeyCareerPaths() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // Keep non-null refs for closures (TypeScript doesn't narrow in nested functions)
    const canvasEl: HTMLCanvasElement = canvas;
    const ctx2d: CanvasRenderingContext2D = ctx;

    let W = 0, H = 0, frame = 0, animationId: number;
    let mouse = { x: -999, y: -999 };
    let hoveredNodeId: string | null = null;

    // ── Data (Finance track) — colors from site palette: gray-900, blue, gray-700 ─
    const ROWS = [
      [{ id: "you",  label: "You",                color: "#111111" }],
      [
        { id: "wm",   label: "Wealth Mgmt",        color: "#1a3dff" },
        { id: "cf",   label: "Corporate Finance",  color: "#1a3dff" },
        { id: "ib",   label: "Investment Banking", color: "#1a3dff" },
        { id: "cons", label: "Consulting",         color: "#1a3dff" },
        { id: "su",   label: "Startups",           color: "#1a3dff" },
      ],
      [
        { id: "mba",  label: "MBA",               color: "#444444" },
        { id: "pe",   label: "Private Equity",    color: "#444444" },
        { id: "hf",   label: "Hedge Fund",        color: "#444444" },
        { id: "vc",   label: "Venture Capital",   color: "#444444" },
        { id: "cd",   label: "Corp Dev",          color: "#444444" },
        { id: "mbb",  label: "MBB",               color: "#444444" },
      ],
    ];

    const EDGES = [
      { from: "you",  to: "wm",   weight: 2, row: 0 },
      { from: "you",  to: "cf",   weight: 3, row: 0 },
      { from: "you",  to: "ib",   weight: 5, row: 0 },
      { from: "you",  to: "cons", weight: 3, row: 0 },
      { from: "you",  to: "su",   weight: 2, row: 0 },
      { from: "wm",   to: "hf",   weight: 3, row: 1 },
      { from: "wm",   to: "mba",  weight: 1, row: 1 },
      { from: "cf",   to: "pe",   weight: 2, row: 1 },
      { from: "cf",   to: "mba",  weight: 2, row: 1 },
      { from: "cf",   to: "cd",   weight: 2, row: 1 },
      { from: "ib",   to: "pe",   weight: 5, row: 1 },
      { from: "ib",   to: "hf",   weight: 3, row: 1 },
      { from: "ib",   to: "mba",  weight: 2, row: 1 },
      { from: "ib",   to: "vc",   weight: 1, row: 1 },
      { from: "cons", to: "mbb",  weight: 4, row: 1 },
      { from: "cons", to: "mba",  weight: 3, row: 1 },
      { from: "cons", to: "vc",   weight: 1, row: 1 },
      { from: "su",   to: "vc",   weight: 4, row: 1 },
      { from: "su",   to: "cd",   weight: 1, row: 1 },
    ];

    const ROW_SPREAD = [0, 0.64, 0.58];

    // ── Layout ───────────────────────────────────────────────────────────────
    type NodeInfo = { x: number; y: number; id: string; label: string; color: string; row: number };
    let nodes: Record<string, NodeInfo> = {};

    function layout() {
      W = canvasEl.offsetWidth;
      H = canvasEl.offsetHeight;
      const dpr = window.devicePixelRatio || 1;
      canvasEl.width  = W * dpr;
      canvasEl.height = H * dpr;
      ctx2d.scale(dpr, dpr);

      const marginTop = H * 0.08;
      const marginBot = H * 0.10;
      const rowYs = ROWS.map((_, ri) =>
        marginTop + (ri / (ROWS.length - 1)) * (H - marginTop - marginBot)
      );

      nodes = {};
      ROWS.forEach((row, ri) => {
        const total = row.length;
        const spread = ROW_SPREAD[ri];
        const mx = W * (1 - spread) / 2;
        row.forEach((n, ci) => {
          nodes[n.id] = {
            ...n,
            x: total === 1 ? W / 2 : mx + (ci / (total - 1)) * (W - mx * 2),
            y: rowYs[ri],
            row: ri,
          };
        });
      });
    }

    // ── Bezier helpers ───────────────────────────────────────────────────────
    function cp(src: NodeInfo, tgt: NodeInfo) {
      const midY = src.y + (tgt.y - src.y) * 0.5;
      return { cp1x: src.x, cp1y: midY, cp2x: tgt.x, cp2y: midY };
    }

    function bezierPt(src: NodeInfo, tgt: NodeInfo, t: number) {
      const { cp1x, cp1y, cp2x, cp2y } = cp(src, tgt);
      const mt = 1 - t;
      return {
        x: mt*mt*mt*src.x + 3*mt*mt*t*cp1x + 3*mt*t*t*cp2x + t*t*t*tgt.x,
        y: mt*mt*mt*src.y + 3*mt*mt*t*cp1y + 3*mt*t*t*cp2y + t*t*t*tgt.y,
      };
    }

    // ── Hover: closest node ──────────────────────────────────────────────────
    const NODE_HIT_RADIUS = 28;
    function updateHover() {
      let bestId: string | null = null;
      let bestDist = NODE_HIT_RADIUS;
      (Object.values(nodes) as NodeInfo[]).forEach((node) => {
        const d = Math.hypot(node.x - mouse.x, node.y - mouse.y);
        if (d < bestDist) { bestDist = d; bestId = node.id; }
      });
      hoveredNodeId = bestId;
    }

    // ── Highlight edges by hovered node ──────────────────────────────────────
    // • You: only edges You → first layer (nothing else)
    // • Row 1: same as before — chain from You through this node to row 2
    // • Row 2: all edges that can take you there (into this node + You → sources)
    function getHighlightedEdgesForNode(nodeId: string | null): Set<string> {
      const set = new Set<string>();
      if (!nodeId || !nodes[nodeId]) return set;
      const node = nodes[nodeId];

      if (nodeId === "you") {
        EDGES.filter(e => e.from === "you").forEach(e => set.add(`${e.from}-${e.to}`));
        return set;
      }

      if (node.row === 1) {
        set.add(`you-${nodeId}`);
        EDGES.filter(e => e.from === nodeId).forEach(e => set.add(`${e.from}-${e.to}`));
        return set;
      }

      if (node.row === 2) {
        EDGES.filter(e => e.to === nodeId).forEach(e => {
          set.add(`${e.from}-${e.to}`);
          set.add(`you-${e.from}`);
        });
        return set;
      }

      return set;
    }

    // ── Particles ────────────────────────────────────────────────────────────
    type Particle = {
      src: NodeInfo; tgt: NodeInfo; color: string;
      t: number; speed: number; size: number; opacity: number;
      edgeKey: string;
    };
    let particles: Particle[] = [];

    function spawnParticle(edge: (typeof EDGES)[0]) {
      const src = nodes[edge.from], tgt = nodes[edge.to];
      if (!src || !tgt) return;
      particles.push({
        src, tgt,
        color: src.color,
        t: 0,
        speed:   0.002 + Math.random() * 0.003,
        size:    1.0   + Math.random() * 1.2,
        opacity: 0.35  + Math.random() * 0.25,
        edgeKey: `${edge.from}-${edge.to}`,
      });
    }

    // ── Draw ─────────────────────────────────────────────────────────────────
    function draw() {
      ctx2d.clearRect(0, 0, W, H);
      frame++;

      const highlightSet = hoveredNodeId ? getHighlightedEdgesForNode(hoveredNodeId) : new Set<string>();
      const hasHover = highlightSet.size > 0;

      // Edges
      EDGES.forEach(edge => {
        const src = nodes[edge.from], tgt = nodes[edge.to];
        if (!src || !tgt) return;
        const key = `${edge.from}-${edge.to}`;
        const highlighted = hasHover && highlightSet.has(key);
        const dimmed = hasHover && !highlighted;

        const { cp1x, cp1y, cp2x, cp2y } = cp(src, tgt);
        ctx2d.beginPath();
        ctx2d.moveTo(src.x, src.y);
        ctx2d.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, tgt.x, tgt.y);

        const alpha = dimmed ? 0.12 : highlighted ? 0.65 : 0.38;
        const edgeHiColor = src.row === 0 ? "#111111" : src.row === 1 ? "#1a3dff" : "#444444";
        ctx2d.strokeStyle = highlighted
          ? edgeHiColor + Math.round(alpha * 255).toString(16).padStart(2, "0")
          : `rgba(100,100,100,${alpha})`;
        ctx2d.lineWidth = highlighted ? 1.4 : 0.8;
        ctx2d.stroke();
      });

      // Particles
      particles = particles.filter(p => p.t <= 1);
      particles.forEach(p => {
        p.t += p.speed;
        const pos = bezierPt(p.src, p.tgt, Math.min(p.t, 1));
        const fadeIn  = p.t < 0.1 ? p.t / 0.1 : 1;
        const fadeOut = p.t > 0.8 ? (1 - p.t) / 0.2 : 1;
        const boosted = hasHover && highlightSet.has(p.edgeKey);
        const finalOpacity = boosted
          ? Math.min(1, p.opacity * 2)
          : hasHover ? p.opacity * 0.12 : p.opacity;

        ctx2d.beginPath();
        ctx2d.arc(pos.x, pos.y, p.size * (1 + 0.15 * Math.sin(p.t * Math.PI * 5)), 0, Math.PI * 2);
        ctx2d.fillStyle = p.color + Math.round(fadeIn * fadeOut * finalOpacity * 255).toString(16).padStart(2, "0");
        ctx2d.fill();
      });

      // Spawn particles (reduced: less often, one per spawn for cleaner look)
      if (frame % 20 === 0) {
        const edge = EDGES[Math.floor(Math.random() * EDGES.length)];
        spawnParticle(edge);
      }

      // Nodes
      ROWS.flat().forEach(n => {
        const node = nodes[n.id];
        if (!node) return;
        const isHighlighted = hasHover && EDGES.some(e =>
          (e.from === n.id || e.to === n.id) && highlightSet.has(`${e.from}-${e.to}`)
        );
        const dimmed = hasHover && !isHighlighted;

        // Layer colors from site palette: gray-900, blue, gray-700
        const hiColor = node.row === 0 ? "#111111" : node.row === 1 ? "#1a3dff" : "#444444";

        // Dot only (no glow) — solid color so each node is clear and not blurred
        const baseR = node.row === 0 ? 7 : 5;
        const dotColor = isHighlighted
          ? hiColor
          : dimmed
            ? "#d1d1d1"
            : node.row === 0
              ? "#111111"
              : node.row === 1
                ? "#1a3dff"
                : "#444444";
        ctx2d.beginPath();
        ctx2d.arc(node.x, node.y, isHighlighted ? baseR * 1.2 : baseR, 0, Math.PI * 2);
        ctx2d.fillStyle = dotColor;
        ctx2d.fill();

        // Label
        ctx2d.globalAlpha = dimmed ? 0.18 : 1;
        ctx2d.font = `${isHighlighted ? 600 : node.row === 0 ? 600 : 400} ${node.row === 0 ? 17 : 13}px var(--font-instrument-sans), sans-serif`;
        ctx2d.fillStyle = isHighlighted ? hiColor : node.row === 0 ? "#111" : "#555";
        ctx2d.textAlign = "center";
        ctx2d.textBaseline = "bottom";
        ctx2d.fillText(n.label, node.x, node.y - 11);
        ctx2d.globalAlpha = 1;
      });
      ctx2d.textBaseline = "alphabetic";

      if (frame % 2 === 0) updateHover();
      animationId = requestAnimationFrame(draw);
    }

    // ── Events ───────────────────────────────────────────────────────────────
    canvasEl.addEventListener("mousemove", e => {
      const rect = canvasEl.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) * W) / rect.width;
      mouse.y = ((e.clientY - rect.top)  * H) / rect.height;
    });
    canvasEl.addEventListener("mouseleave", () => {
      mouse.x = -999; mouse.y = -999; hoveredNodeId = null;
    });
    window.addEventListener("resize", layout);

    layout();
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", layout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="block w-full h-[320px] md:h-[400px] cursor-crosshair"
      aria-label="Career paths diagram: You to industries to career paths"
    />
  );
}
