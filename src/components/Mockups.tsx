import Image, { type StaticImageData } from "next/image";
import type { CSSProperties } from "react";
import { Phone } from "./DeviceMockup";

export type Mock =
  | { kind: "box"; front: StaticImageData; side: StaticImageData; top: string; alt: string; bg?: string }
  | { kind: "photo"; image: StaticImageData; alt: string }
  | { kind: "product"; image: StaticImageData; alt: string; bg?: string }
  | { kind: "rollups"; images: StaticImageData[]; alt: string; bg?: string }
  | { kind: "billboard"; image: StaticImageData; alt: string; bg?: string }
  | { kind: "browser"; image: StaticImageData; alt: string; layout: "hero" | "leaderboard"; bg?: string }
  | { kind: "phones"; images: StaticImageData[]; alt: string; bg?: string };

/** The full-size image a mockup opens in the lightbox. */
export const mockImage = (m: Mock) => ("image" in m ? m.image : "images" in m ? m.images[0] : m.front);

const scene = (bg?: string) => (bg ? ({ "--scene-bg": bg } as CSSProperties) : undefined);

export function MockScene({ mock }: { mock: Mock }) {
  switch (mock.kind) {
    case "box": {
      const ratio = mock.front.width / mock.front.height;
      const depth = mock.side.width / mock.side.height;
      return (
        <div className="mock mock--box" style={scene(mock.bg)}>
          <div className="box3d" style={{ "--r": ratio, "--d": depth, "--top": mock.top } as CSSProperties}>
            <div className="box3d__face box3d__front"><Image src={mock.front} alt={mock.alt} sizes="(max-width: 760px) 50vw, 18vw" quality={90} /></div>
            <div className="box3d__face box3d__side"><Image src={mock.side} alt="" sizes="8vw" quality={90} /></div>
            <div className="box3d__face box3d__top" />
          </div>
          <span className="mock__shadow" aria-hidden="true" />
        </div>
      );
    }
    case "photo":
      return (
        <div className="mock mock--photo">
          <Image src={mock.image} alt={mock.alt} placeholder="blur" sizes="(max-width: 760px) 100vw, 50vw" quality={88} />
        </div>
      );
    case "product":
      return (
        <div className="mock mock--product" style={scene(mock.bg)}>
          <Image src={mock.image} alt={mock.alt} sizes="(max-width: 760px) 80vw, 35vw" quality={90} />
          <span className="mock__shadow" aria-hidden="true" />
        </div>
      );
    case "rollups":
      return (
        <div className="mock mock--rollups" style={scene(mock.bg)}>
          {mock.images.map((img, i) => (
            <div className="rollup" key={i}>
              <span className="rollup__bar" aria-hidden="true" />
              <div className="rollup__banner"><Image src={img} alt={i === 0 ? mock.alt : ""} sizes="(max-width: 760px) 40vw, 14vw" quality={90} /></div>
              <span className="rollup__base" aria-hidden="true" />
            </div>
          ))}
        </div>
      );
    case "billboard":
      return (
        <div className="mock mock--billboard" style={scene(mock.bg)}>
          <div className="billboard">
            <div className="billboard__panel"><Image src={mock.image} alt={mock.alt} sizes="(max-width: 760px) 90vw, 40vw" quality={90} /></div>
            <span className="billboard__lights" aria-hidden="true"><i /><i /><i /></span>
            <span className="billboard__posts" aria-hidden="true"><i /><i /></span>
          </div>
        </div>
      );
    case "browser":
      return (
        <div className="mock mock--browser" style={scene(mock.bg)}>
          <div className={`browser browser--${mock.layout}`}>
            <div className="browser__bar" aria-hidden="true"><i /><i /><i /><span /></div>
            <div className="browser__page">
              <div className="browser__nav" aria-hidden="true"><b /><span /><span /><span /></div>
              <div className="browser__ad"><Image src={mock.image} alt={mock.alt} sizes="(max-width: 760px) 90vw, 40vw" quality={90} /></div>
              <div className="browser__content" aria-hidden="true"><span /><span /><span /><span /></div>
            </div>
          </div>
        </div>
      );
    case "phones":
      return (
        <div className="mock mock--phones" style={scene(mock.bg)}>
          {mock.images.map((img, i) => (
            <Phone key={i} image={img} alt={i === 0 ? mock.alt : ""} className="mock__phone" feed />
          ))}
        </div>
      );
  }
}
