import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Cta } from "@/components/Cta";
import Image from "next/image";
import { articles, products, site } from "@/data/site";
import { StoreLogo } from "@/components/StoreLogo";

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
            Alongside client work, I create digital assets and artwork for other creatives — available on Gumroad, Magnific and DeviantArt.
          </Reveal>
          <div className="store__cards">
            {site.stores.map((st, i) => (
              <Reveal key={st.id} delay={i * 90}>
                <a className={`store-card store-card--${st.id}`} href={st.href} target="_blank" rel="noopener noreferrer" data-cursor="Visit">
                  <StoreLogo id={st.id} className="store-card__logo" />
                  <span className="store-card__name">{st.name} <span aria-hidden="true">↗</span></span>
                  <span className="store-card__handle">{st.handle}</span>
                  <span className="store-card__note">{st.note}</span>
                  <span className="store-card__cta">{st.cta}</span>
                </a>
              </Reveal>
            ))}
          </div>
          {products.length > 0 && <div className="products">
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
          </div>}
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
