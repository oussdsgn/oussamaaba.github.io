"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/site";
import { Reveal } from "./Reveal";

/** Selected works on the Home page: a numbered two-column grid. */
export function WorkGallery({ items }: { items: Project[] }) {
  return (
    <div className="works__grid">
      {items.map((p, i) => (
        <Reveal key={p.slug} variant="scale" className="work">
          <Link className="work__hit" href={`/projects/${p.slug}`} data-cursor="View">
            <div className="work__media">
              <Image src={p.image} alt="" placeholder="blur" sizes="(max-width: 760px) 100vw, 45vw" />
            </div>
            <div className="work__meta">
              <h3 className="work__title">
                <span className="work__num">{String(i + 1).padStart(2, "0")}</span>
                {p.title}
              </h3>
              <span className="work__tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
