"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { archive } from "@/data/site";
import { Lightbox } from "./Lightbox";
import { Reveal } from "./Reveal";

/** Tabbed "More work" archive: one discipline at a time, boards open full-size. */
export function Archive() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const group = archive[tab];
  const items = group.boards.map((b) => ({ image: b.image, title: group.title, caption: b.alt }));
  const nav = useCallback((dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length)), [items.length]);

  return (
    <section className="archive" aria-labelledby="archive-title">
      <div className="container">
        <div className="archive__head">
          <h2 id="archive-title" className="archive__title">More work</h2>
          <p className="archive__note">A wider look across disciplines — click any board to see it full-size.</p>
        </div>
        <div className="archive__tabs" role="tablist" aria-label="Disciplines">
          {archive.map((g, i) => (
            <button key={g.title} role="tab" aria-selected={tab === i} className="archive__tab" onClick={() => setTab(i)}>
              <span className="archive__tab-num">{String(i + 1).padStart(2, "0")}</span>
              {g.title}
            </button>
          ))}
        </div>
        <div className="archive__grid" role="tabpanel" key={tab}>
          {group.boards.map((b, i) => (
            <Reveal key={b.alt} delay={(i % 2) * 90}>
              <button className="archive__board" data-cursor="Zoom" onClick={() => setOpen(i)} aria-label={`Enlarge: ${b.alt}`}>
                <Image src={b.image} alt={b.alt} placeholder="blur" sizes="(max-width: 760px) 100vw, 50vw" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onNav={nav} />
    </section>
  );
}
