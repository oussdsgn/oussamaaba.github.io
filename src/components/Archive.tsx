"use client";

import Image from "next/image";
import { useCallback, useState, type CSSProperties } from "react";
import { archive, webProjects, type ArchiveGroup } from "@/data/site";
import { DeviceScene } from "./DeviceMockup";
import { MockScene, mockImage } from "./Mockups";
import { Lightbox } from "./Lightbox";
import { Reveal } from "./Reveal";

/** One piece of work, framed according to its discipline. */
export function PieceFrame({ kind, piece, onOpen, i }: { kind: ArchiveGroup["kind"]; piece: ArchiveGroup["items"][number]; onOpen: () => void; i: number }) {
  return (
    <Reveal className={`piece piece--${kind}`} delay={(i % 4) * 60}>
      <button
        className="piece__hit"
        data-cursor="Zoom"
        onClick={onOpen}
        aria-label={`Enlarge: ${piece.alt}`}
        style={piece.bg ? ({ "--piece-bg": piece.bg } as CSSProperties) : undefined}
      >
        <span className="piece__frame">
          <Image src={piece.image} alt={piece.alt} placeholder={kind === "logos" ? "empty" : "blur"} sizes="(max-width: 760px) 50vw, 25vw" quality={90} />
        </span>
      </button>
    </Reveal>
  );
}

/** Tabbed "More work" archive: one discipline at a time, every piece opens full-size. */
export function Archive() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const group = archive[tab];
  const isWeb = group.kind === "web";
  const items = isWeb
    ? webProjects.map((w) => ({ image: w.desktop, title: w.name, caption: w.note }))
    : group.mocks
      ? group.mocks.map((m) => ({ image: mockImage(m), title: group.title, caption: m.alt }))
      : group.items.map((p) => ({ image: p.image, title: group.title, caption: p.alt }));
  const nav = useCallback((dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length)), [items.length]);

  return (
    <section className="archive" aria-labelledby="archive-title">
      <div className="container">
        <div className="archive__head">
          <h2 id="archive-title" className="archive__title">More work</h2>
          <p className="archive__note">A wider look across disciplines — click any piece to see it full-size.</p>
        </div>
        <div className="archive__tabs" role="tablist" aria-label="Disciplines">
          {archive.map((g, i) => (
            <button key={g.title} role="tab" aria-selected={tab === i} className="archive__tab" onClick={() => { setTab(i); setOpen(null); }}>
              <span className="archive__tab-num">{String(i + 1).padStart(2, "0")}</span>
              {g.title}
            </button>
          ))}
        </div>

        <div className={`archive__grid archive__grid--${group.kind}`} role="tabpanel" key={tab}>
          {isWeb
            ? webProjects.map((w, i) => (
                <Reveal key={w.name} delay={(i % 2) * 90} className="web-card">
                  <button className="web-card__hit" data-cursor="Zoom" onClick={() => setOpen(i)} aria-label={`Enlarge: ${w.name} website`}>
                    <DeviceScene desktop={w.desktop} mobile={w.mobile} name={w.name} background={w.background} />
                  </button>
                  <div className="web-card__meta">
                    <div>
                      <h3 className="web-card__name">{w.name}</h3>
                      <p className="web-card__note">{w.note}</p>
                    </div>
                    {w.url && <a className="cs-link" href={w.url} target="_blank" rel="noopener noreferrer">Visit site <span aria-hidden="true">↗</span></a>}
                  </div>
                </Reveal>
              ))
            : group.mocks
              ? group.mocks.map((m, i) => (
                  <Reveal key={m.alt} delay={(i % 2) * 90}>
                    <button className="mock__hit" data-cursor="Zoom" onClick={() => setOpen(i)} aria-label={`Enlarge: ${m.alt}`}>
                      <MockScene mock={m} />
                    </button>
                    <p className="mock__caption">{m.alt}</p>
                  </Reveal>
                ))
              : group.items.map((p, i) => <PieceFrame key={p.alt + i} kind={group.kind} piece={p} i={i} onOpen={() => setOpen(i)} />)}
        </div>
      </div>
      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onNav={nav} />
    </section>
  );
}
