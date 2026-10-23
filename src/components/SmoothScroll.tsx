"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

let lenis: Lenis | null = null;

export function scrollToTop(immediate = false) {
  if (lenis) lenis.scrollTo(0, { immediate });
  else window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
}

/** Inertia scrolling (skipped for reduced-motion and touch devices). */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
    let raf = 0;
    const loop = (t: number) => {
      lenis?.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  useEffect(() => {
    scrollToTop(true);
  }, [pathname]);

  return null;
}
