"use client";

import Image from "next/image";
import { useCallback, useMemo, useState, type CSSProperties } from "react";
import type { ProjectBlock } from "@/data/site";
import { Lightbox, type LightboxItem } from "./Lightbox";
import { Reveal } from "./Reveal";

const SIZES = { 1: "(max-width: 760px) 100vw, 1440px", 2: "(max-width: 760px) 100vw, 50vw", 3: "(max-width: 760px) 100vw, 33vw", 4: "(max-width: 760px) 50vw, 25vw" };

/** Renders a case study's blocks; every image opens full-size in a lightbox. */
export function CaseStudyBlocks({ blocks, title }: { blocks: ProjectBlock[]; title: string }) {
  const [open, setOpen] = useState<number | null>(null);

  const items: LightboxItem[] = useMemo(
    () => blocks.flatMap((b) => (b.type === "gallery" ? b.images.map((im) => ({ image: im.image, title, caption: im.alt })) : [])),
    [blocks, title]
  );
  const nav = useCallback((dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length)), [items.length]);

  let n = 0;
  return (
    <>
      {blocks.map((b, i) => {
        if (b.type === "text")
          return (
            <section key={i} className="cs-row cs-text">
              <Reveal as="h2" className="cs-label">{b.title}</Reveal>
              <Reveal className="cs-copy" delay={80}>
                {b.paragraphs.map((p) => <p key={p}>{p}</p>)}
              </Reveal>
            </section>
          );
        return (
          <div
            key={i}
            className={`cs-gallery cs-gallery--${b.cols} ${b.ratio ? "is-cropped" : ""}`}
            style={b.ratio ? ({ "--ratio": b.ratio } as CSSProperties) : undefined}
          >
            {b.images.map((im, j) => {
              const idx = n++;
              return (
                <Reveal key={j} delay={j * 90}>
                  <button className="cs-media" data-cursor="Zoom" onClick={() => setOpen(idx)} aria-label={`Enlarge: ${im.alt}`}>
                    <Image src={im.image} alt={im.alt} placeholder="blur" sizes={SIZES[b.cols]} quality={85} />
                  </button>
                </Reveal>
              );
            })}
          </div>
        );
      })}
      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onNav={nav} />
    </>
  );
}
