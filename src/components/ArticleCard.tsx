import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Reveal } from "./Reveal";

type Props = { title: string; category: string; date: string; image: StaticImageData; wide?: boolean; delay?: number };

export function ArticleCard({ title, category, date, image, wide = false, delay = 0 }: Props) {
  return (
    <Reveal as="article" className={`article ${wide ? "article--wide" : ""}`} delay={delay}>
      <div className="article__media">
        <Image src={image} alt="" placeholder="blur" sizes={wide ? "(max-width: 760px) 100vw, 50vw" : "(max-width: 760px) 100vw, 25vw"} />
      </div>
      <p className="article__meta">{category} / {date}</p>
      <h3 className="article__title">{title}</h3>
    </Reveal>
  );
}
