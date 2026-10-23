import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Cta } from "@/components/Cta";
import { articles } from "@/data/site";

export const metadata: Metadata = { title: "Assets Store" };

export default function AssetsStorePage() {
  return (
    <>
      <div className="page-top">
        <div className="container">
          <div className="page-head">
            <h1 className="page-title"><span className="line"><span>Assets Store</span></span></h1>
            <p className="page-head__count">({String(articles.length).padStart(2, "0")})</p>
          </div>
          <div className="grid-2">
            {articles.map((a, i) => <ArticleCard key={a.title} {...a} wide delay={(i % 2) * 90} />)}
          </div>
        </div>
      </div>
      <Cta />
    </>
  );
}
