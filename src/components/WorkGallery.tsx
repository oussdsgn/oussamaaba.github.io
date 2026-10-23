"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "@/data/site";
import { Reveal } from "./Reveal";

type Props = { items: Project[]; layout: "scatter" | "grid"; filters?: boolean };

export function WorkGallery({ items, layout, filters = false }: Props) {
  const [active, setActive] = useState("All");

  const tags = useMemo(() => ["All", ...new Set(items.flatMap((p) => p.tags))], [items]);
  const shown = active === "All" ? items : items.filter((p) => p.tags.includes(active));

  return (
    <>
      {filters && (
        <div className="filters" role="group" aria-label="Filter projects">
          {tags.map((t) => {
            const count = t === "All" ? items.length : items.filter((p) => p.tags.includes(t)).length;
            return (
              <button key={t} className="filter" aria-pressed={active === t} onClick={() => setActive(t)}>
                {t}<sup>{count}</sup>
              </button>
            );
          })}
        </div>
      )}

      <div className={layout === "scatter" ? "works__list" : "grid-2"}>
        {shown.map((p, i) => (
          <Reveal
            key={`${active}-${p.slug}`}
            variant="scale"
            delay={layout === "grid" ? (i % 2) * 90 : 0}
            className={`work ${layout === "scatter" ? `work--${i + 1}` : ""}`}
          >
            <Link className="work__hit" href={`/projects/${p.slug}`} data-cursor="View">
              <div className="work__media">
                <Image
                  src={p.image}
                  alt=""
                  placeholder="blur"
                  sizes={layout === "scatter" ? "(max-width: 760px) 100vw, 45vw" : "(max-width: 760px) 100vw, 50vw"}
                />
              </div>
              <div className="work__meta">
                <h3 className="work__title">{p.title}</h3>
                <span className="work__tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
