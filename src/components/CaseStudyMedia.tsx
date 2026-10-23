"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import type { ProjectBlock } from "@/data/site";
import { Lightbox, type LightboxItem } from "./Lightbox";
import { Reveal } from "./Reveal";

/** Renders a case study's blocks; every image opens full-size in a lightbox. */
export function CaseStudyBlocks({ blocks, title }: { blocks: ProjectBlock[]; title: string }) {
  const [open, setOpen] = useState<number | null>(null);

  const items: LightboxItem[] = useMemo(
    () =>
      blocks.flatMap((b) =>
        b.type === "image" ? [{ image: b.image, title, caption: b.alt }] : b.type === "pair" ? b.images.map((im) => ({ image: im.image, title, caption: im.alt })) : []
      ),
    [blocks, title]
  );
  const nav = useCallback((dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length)), [items.length]);

  let n = 0;
  const zoomable = (image: LightboxItem["image"], alt: string, sizes: string, key?: string) => {
    const idx = n++;
    return (
      <button key={key} className="cs-media" data-cursor="Zoom" onClick={() => setOpen(idx)} aria-label={`Enlarge: ${alt}`}>
        <Image src={image} alt={alt} placeholder="blur" sizes={sizes} />
      </button>
    );
  };

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
        if (b.type === "image")
          return <Reveal key={i} className="cs-full">{zoomable(b.image, b.alt, "(max-width: 760px) 100vw, 1440px")}</Reveal>;
        return (
          <div key={i} className="cs-pair">
            {b.images.map((im, j) => (
              <Reveal key={j} delay={j * 100}>{zoomable(im.image, im.alt, "(max-width: 760px) 100vw, 50vw")}</Reveal>
            ))}
          </div>
        );
      })}
      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onNav={nav} />
    </>
  );
}
