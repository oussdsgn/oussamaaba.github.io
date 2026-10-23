import type { Metadata } from "next";
import Image from "next/image";
import { RevealWords } from "@/components/RevealWords";
import { Reveal } from "@/components/Reveal";
import { Stats } from "@/components/Stats";
import { Cta } from "@/components/Cta";
import { about, clients, site, stats } from "@/data/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="about-hero" data-header-dark aria-hidden="true">
        <Image src={site.images.aboutHero} alt="" fill priority placeholder="blur" sizes="100vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
      </section>

      <section className="about-intro">
        <div className="container">
          <RevealWords as="h1" className="about-intro__text" text={about.intro} />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="approach">
            <Reveal as="h2" className="approach__label">Approach</Reveal>
            <Reveal as="p" className="approach__text" delay={100}>{about.approach}</Reveal>
          </div>
          <div className="about-stats"><Stats items={stats} /></div>
        </div>
      </section>

      <section className="clients">
        <div className="container">
          <h2 className="clients__title">Clients</h2>
          <ul className="clients__grid">
            {clients.map((c, i) => (
              <Reveal as="li" key={c.name} className="client" delay={(i % 3) * 80}>
                <Image src={c.image} alt={c.name} placeholder="blur" sizes="(max-width: 760px) 50vw, 33vw" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Cta />
    </>
  );
}
