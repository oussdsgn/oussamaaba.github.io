"use client";

import { useEffect, useRef, useState } from "react";

/** A "View" bubble that follows the mouse over elements marked data-cursor. */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current!;
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const target = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      setLabel(target ? target.dataset.cursor ?? "" : null);
    };
    const loop = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    const leave = () => setLabel(null);
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="cursor" aria-hidden="true">
      <span className={`cursor__bubble ${label !== null ? "is-active" : ""}`}>{label}</span>
    </div>
  );
}
