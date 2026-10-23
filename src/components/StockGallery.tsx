"use client";

import { useCallback, useState } from "react";
import { stockFeatured } from "@/data/site";
import { PieceFrame } from "./Archive";
import { Lightbox } from "./Lightbox";

export function StockGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const items = stockFeatured.map((b) => ({ image: b.image, title: "Featured assets", caption: b.alt }));
  const nav = useCallback((dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length)), [items.length]);
  return (
    <>
      <div className="archive__grid archive__grid--posters store__featured">
        {stockFeatured.map((p, i) => <PieceFrame key={i} kind="posters" piece={p} i={i} onOpen={() => setOpen(i)} />)}
      </div>
      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onNav={nav} />
    </>
  );
}
