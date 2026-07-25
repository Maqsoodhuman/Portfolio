"use client";

import { useEffect, useRef } from "react";

const CODE_FRAGS = [
  "def fuse(bev, lidar):",
  "  q = attn(q,k,v)",
  "model.eval()",
  "loss.backward()",
  "x = norm(x + h)",
  "for t in traj:",
  "  kf.update(z)",
  "emb = enc(tok)",
  "yaw += dt*w",
  "if conf > .9:",
  "  publish(msg)",
  "grad_clip(1.0)",
  "pcd.voxel_down()",
  "ret = pid(err)",
];

/** Animated network-mesh canvas + code-rain column inside the hero's dark panel. */
export default function HeroFx() {
  const meshRef = useRef<HTMLCanvasElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const col = codeRef.current;
    if (col) {
      const lines: string[] = [];
      for (let i = 0; i < 26; i++) lines.push(CODE_FRAGS[i % CODE_FRAGS.length]);
      col.textContent = lines.join("\n");
    }

    const cv = meshRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let W = 0,
      H = 0;
    let nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    const dpr = window.devicePixelRatio || 1;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const resize = () => {
      W = cv.width = cv.offsetWidth * dpr;
      H = cv.height = cv.offsetHeight * dpr;
      nodes = [];
      const n = Math.floor((W * H) / 38000);
      for (let i = 0; i < n; i++)
        nodes.push({
          x: Math.random() * W,
          y: H * 0.35 + Math.random() * H * 0.65,
          vx: (Math.random() - 0.5) * 0.15 * dpr,
          vy: (Math.random() - 0.5) * 0.15 * dpr,
        });
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const R = 130 * dpr;
      for (const p of nodes) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < H * 0.3 || p.y > H) p.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++)
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i],
            b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < R) {
            ctx.strokeStyle = `rgba(200,240,0,${(1 - d / R) * 0.22})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      for (const p of nodes) {
        ctx.fillStyle = "rgba(200,240,0,.75)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6 * dpr, 0, 7);
        ctx.fill();
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      resize();
      if (reduced) draw();
    };

    resize();
    draw();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <canvas ref={meshRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />
      <div
        ref={codeRef}
        aria-hidden="true"
        className="absolute left-[22%] top-[12%] w-[220px] select-none whitespace-pre font-mono text-[10px] leading-[1.7] text-[rgba(160,220,120,.35)] blur-[.3px]"
      />
    </>
  );
}
