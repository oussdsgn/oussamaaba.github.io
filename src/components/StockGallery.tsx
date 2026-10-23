"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { stockFeatured } from "@/data/site";
import { Lightbox } from "./Lightbox";
import { Reveal } from "./Reveal";

export function StockGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const items = stockFeatured.map((b) => ({ image: b.image, title: "Featured assets", caption: b.alt }));
  const nav = useCallback((dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length)), [items.length]);
  return (
    <>
      <div className="store__featured">
        {stockFeatured.map((b, i) => (
          <Reveal key={b.alt} delay={i * 90}>
            <button className="archive__board" data-cursor="Zoom" onClick={() => setOpen(i)} aria-label={`Enlarge: ${b.alt}`}>
              <Image src={b.image} alt={b.alt} placeholder="blur" sizes="(max-width: 760px) 100vw, 50vw" />
            </button>
          </Reveal>
        ))}
      </div>
      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onNav={nav} />
    </>
  );
}
