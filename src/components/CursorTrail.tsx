"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 14;
const SPAWN_EVERY = 28; // ms between spawned ghosts
const GHOST_LIFETIME = 480; // ms before a ghost fully fades
const BASE_SCALE = 1.1;
const TRAIL_HUE = 30; // orange, matches --accent

type Ghost = { x: number; y: number; bornAt: number };

const BASE_RADIUS = 8;

function drawCircle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  scale: number,
  fillStyle: string
) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, BASE_RADIUS * scale, 0, Math.PI * 2);
  ctx.fillStyle = fillStyle;
  ctx.fill();
  ctx.restore();
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ghostsRef = useRef<Ghost[]>([]);
  const posRef = useRef<{ x: number; y: number } | null>(null);
  const activeRef = useRef(false);
  const lastSpawnRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      canvas!.style.width = `${window.innerWidth}px`;
      canvas!.style.height = `${window.innerHeight}px`;
    }
    resize();
    window.addEventListener("resize", resize);

    function spawn(x: number, y: number) {
      posRef.current = { x, y };
      activeRef.current = true;
      const now = performance.now();
      if (now - lastSpawnRef.current > SPAWN_EVERY) {
        lastSpawnRef.current = now;
        ghostsRef.current.push({ x, y, bornAt: now });
        if (ghostsRef.current.length > TRAIL_LENGTH) ghostsRef.current.shift();
      }
    }

    function onMouseMove(e: MouseEvent) {
      spawn(e.clientX, e.clientY);
    }
    function onMouseLeave() {
      activeRef.current = false;
      posRef.current = null;
    }
    function onTouchMove(e: TouchEvent) {
      const t = e.touches[0];
      if (t) spawn(t.clientX, t.clientY);
    }
    function onTouchEnd() {
      activeRef.current = false;
      posRef.current = null;
    }

    if (isFinePointer) {
      window.addEventListener("mousemove", onMouseMove);
      document.documentElement.addEventListener("mouseleave", onMouseLeave);
      document.body.classList.add("custom-cursor-active");
    } else {
      window.addEventListener("touchstart", onTouchMove, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", onTouchEnd);
      window.addEventListener("touchcancel", onTouchEnd);
    }

    function loop() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx!.save();
      ctx!.scale(dpr, dpr);

      const now = performance.now();
      ghostsRef.current = ghostsRef.current.filter(
        (g) => now - g.bornAt < GHOST_LIFETIME
      );

      ghostsRef.current.forEach((g) => {
        const age = (now - g.bornAt) / GHOST_LIFETIME;
        const alpha = 1 - age;
        const scale = BASE_SCALE * (1 - age * 0.45);
        drawCircle(
          ctx!,
          g.x,
          g.y,
          scale,
          `hsla(${TRAIL_HUE}, 100%, 55%, ${alpha * 0.85})`
        );
      });

      if (activeRef.current && posRef.current) {
        drawCircle(ctx!, posRef.current.x, posRef.current.y, BASE_SCALE, "#ffffff");
      }

      ctx!.restore();
      rafRef.current = requestAnimationFrame(loop);
    }
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("touchstart", onTouchMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
      cancelAnimationFrame(rafRef.current);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      aria-hidden="true"
    />
  );
}
