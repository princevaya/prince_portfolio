"use client";

import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const cursor = cursorRef.current;
    const glow = glowRef.current;
    if (!cursor || !glow) return;

    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const onHover = () => {
      cursor.classList.add("scale-150");
      glow.classList.add("opacity-80");
    };

    const onLeave = () => {
      cursor.classList.remove("scale-150");
      glow.classList.remove("opacity-80");
    };

    const loop = () => {
      x += (targetX - x) * 0.15;
      y += (targetY - y) * 0.15;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      glow.style.transform = `translate3d(${x - 140}px, ${y - 140}px, 0)`;
      requestAnimationFrame(loop);
    };

    const hoverTargets = document.querySelectorAll(
      "a, button, [data-cursor='hover']"
    );

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onLeave);
    });

    document.addEventListener("mousemove", onMove);
    requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[70] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.12),rgba(34,211,238,0)_60%)] opacity-40 blur-2xl transition-opacity"
      />
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[80] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/60 bg-cyan-300/20 transition-transform duration-200"
      />
    </>
  );
}
