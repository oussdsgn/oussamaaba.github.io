import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { StockGallery } from "@/components/StockGallery";
import { Cta } from "@/components/Cta";
import { articles, stock } from "@/data/site";

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
            Alongside client work, I design graphic assets for designers worldwide — posters, apparel graphics, illustrations and templates published on Freepik and Adobe Stock.
          </Reveal>
          <div className="store__cards">
            {stock.map((s, i) => (
              <Reveal key={s.name} delay={i * 100}>
                <a className="store-card" href={s.href} target="_blank" rel="noopener noreferrer" data-cursor="Visit">
                  <span className="store-card__name">{s.name} <span aria-hidden="true">↗</span></span>
                  <span className="store-card__handle">{s.handle}</span>
                  <span className="store-card__facts">{s.facts.map((f) => <span key={f}>{f}</span>)}</span>
                </a>
              </Reveal>
            ))}
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
