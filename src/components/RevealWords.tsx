"use client";

import { useEffect, useRef, type ElementType } from "react";

/** Words brighten one by one as the block scrolls through the viewport. */
export function RevealWords({ text, as: Tag = "p", className = "" }: { text: string; as?: ElementType; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(/\s+/);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el?.querySelectorAll<HTMLElement>(".w").forEach((s) => (s.style.opacity = "1"));
      return;
    }
    const spans = [...el.querySelectorAll<HTMLElement>(".w")];
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      const start = vh * 0.85;
      const end = vh * 0.4;
      const progress = Math.min(1, Math.max(0, (start - r.top) / (start - end + r.height)));
      const lit = progress * spans.length;
      spans.forEach((s, i) => (s.style.opacity = String(Math.min(1, Math.max(0.14, lit - i + 0.14)))));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Tag ref={ref} className={`reveal-words ${className}`} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden="true">
          <span className="w">{w}</span>{" "}
        </span>
      ))}
    </Tag>
  );
}
