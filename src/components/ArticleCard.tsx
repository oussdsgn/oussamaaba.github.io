import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/site";
import { Reveal } from "./Reveal";

type Props = Pick<Article, "slug" | "title" | "category" | "date" | "image"> & { wide?: boolean; delay?: number };

export function ArticleCard({ slug, title, category, date, image, wide = false, delay = 0 }: Props) {
  return (
    <Reveal as="article" className={`article ${wide ? "article--wide" : ""}`} delay={delay}>
      <Link href={`/journal/${slug}`} className="article__link" data-cursor="Read">
        <div className="article__media">
          <Image src={image} alt="" placeholder="blur" sizes={wide ? "(max-width: 760px) 100vw, 50vw" : "(max-width: 760px) 100vw, 25vw"} />
        </div>
        <p className="article__meta">{category} / {date}</p>
        <h3 className="article__title">{title}</h3>
      </Link>
    </Reveal>
  );
}
