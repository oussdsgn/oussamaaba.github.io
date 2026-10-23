import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Cta } from "@/components/Cta";
import Image from "next/image";
import { articles, products, site, stockHistory } from "@/data/site";

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
            Alongside client work, I make tools for other creatives — texture, ink, chalk and effect brush kits for Procreate, Photoshop, Affinity and Clip Studio. Available on my Gumroad store — with more on Magnific and DeviantArt.
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
          <div className="store__elsewhere">
            {site.elsewhere.map((e, i) => (
              <Reveal key={e.name} delay={i * 80}>
                <a className="store-link" href={e.href} target="_blank" rel="noopener noreferrer" data-cursor="Visit">
                  <span>
                    <span className="store-link__name">{e.name}</span>
                    <span className="store-link__handle">{e.handle}</span>
                  </span>
                  <span className="store-link__note">{e.note} <span aria-hidden="true">↗</span></span>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="products">
            {products.map((pr, i) => (
              <Reveal key={pr.href} delay={(i % 3) * 80}>
                <a className="product" href={pr.href} target="_blank" rel="noopener noreferrer" data-cursor="Buy">
                  <span className="product__media"><Image src={pr.image} alt="" placeholder="blur" sizes="(max-width: 760px) 50vw, 30vw" /></span>
                  <span className="product__meta">
                    <span className="product__name">{pr.name}</span>
                    <span className="product__price">${pr.price}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
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
