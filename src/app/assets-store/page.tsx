import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { StockGallery } from "@/components/StockGallery";
import { Cta } from "@/components/Cta";
import { articles, site, stockHistory } from "@/data/site";

export const metadata: Metadata = { title: "Assets Store" };

export default function AssetsStorePage() {
  return (
    <>
      <div className="page-top">
        <div className="container">
          <div className="page-head">
            <h1 className="page-title"><span className="line"><span>Assets Store</span></span></h1>
          </div>
          <Reveal as="p" className="store__intro">
            Alongside client work, I design graphic assets for other creatives — templates, posters, apparel graphics and more. Browse and buy them on my Gumroad store.
          </Reveal>
          <div className="store__cards">
            <Reveal>
              <a className="store-card store-card--primary" href={site.gumroad.href} target="_blank" rel="noopener noreferrer" data-cursor="Shop">
                <span className="store-card__name">Gumroad <span aria-hidden="true">↗</span></span>
                <span className="store-card__handle">{site.gumroad.handle}</span>
                <span className="store-card__cta">Shop the store</span>
              </a>
            </Reveal>
            <Reveal delay={100}>
              <div className="store-card store-card--muted">
                <span className="store-card__label">Track record</span>
                {stockHistory.map((s) => (
                  <div key={s.name} className="store-card__row">
                    <span className="store-card__row-name">{s.name}</span>
                    <span className="store-card__facts">{s.facts.map((f) => <span key={f}>{f}</span>)}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <StockGallery />
          <div className="journal">
            <SectionLabel index="01" title="Journal" />
            <p className="journal__note">Design work from other studios that caught my eye.</p>
            <div className="grid-2">
              {articles.map((a, i) => <ArticleCard key={a.title} {...a} wide delay={(i % 2) * 90} />)}
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </>
  );
}
