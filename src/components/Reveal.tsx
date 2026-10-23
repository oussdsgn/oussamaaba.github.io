"use client";

import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from "react";

type Props = {
  as?: ElementType;
  className?: string;
  /** "up" fades/slides in, "scale" scales an inner media in, "mask" slides lines up from a clip */
  variant?: "up" | "scale" | "mask";
  delay?: number;
  children: ReactNode;
  [key: string]: unknown;
};

/** Adds `is-in` once the element scrolls into view. */
export function Reveal({ as: Tag = "div", className = "", variant = "up", delay = 0, children, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${className}`}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}
