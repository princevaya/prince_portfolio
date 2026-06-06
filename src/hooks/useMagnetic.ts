"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function useMagnetic<T extends HTMLElement>(strength = 18) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const handleMove = (event: MouseEvent) => {
      const bounds = element.getBoundingClientRect();
      const relX = event.clientX - bounds.left - bounds.width / 2;
      const relY = event.clientY - bounds.top - bounds.height / 2;

      gsap.to(element, {
        x: relX / strength,
        y: relY / strength,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return ref;
}
