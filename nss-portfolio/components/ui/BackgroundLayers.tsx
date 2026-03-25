"use client";

import { useEffect } from "react";

export default function BackgroundLayers() {
  // Mouse spotlight glow — desktop only, respects reduced-motion
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 1024) return;

    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div aria-hidden="true" className="bg-layers-root">
      {/* Layer 1 (z -10): Animated gradient orbs */}
      <div className="bg-layer">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>

      {/* Layer 2 (z -9): Subtle dot grid */}
      <div className="bg-layer bg-layer-grid" />

      {/* Layer 3 (z -8): Mouse spotlight */}
      <div className="bg-layer bg-layer-mouse" />

      {/* Layer 4 (z -7): Film-grain noise — small tiled SVG to avoid OOM */}
      <div
        aria-hidden="true"
        className="bg-layer bg-layer-noise"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  );
}
