import type { StaticImageData } from "next/image";

export type Garment = "tee" | "singlet" | "jacket" | "stripes" | "kid" | "hoodie" | "polo";
export type Worn = { medal: StaticImageData; garment: Garment; color: string; trim?: string; ribbon: string[]; bg: string; skin?: string; alt: string };

const BODY: Record<Garment, string> = {
  tee: "M30 300 L30 178 Q34 122 96 104 L158 84 Q200 118 242 84 L304 104 Q366 122 370 178 L370 300 Z",
  stripes: "M30 300 L30 178 Q34 122 96 104 L158 84 Q200 118 242 84 L304 104 Q366 122 370 178 L370 300 Z",
  polo: "M30 300 L30 178 Q34 122 96 104 L162 84 L200 112 L238 84 L304 104 Q366 122 370 178 L370 300 Z",
  jacket: "M26 300 L26 176 Q30 118 94 100 L156 78 Q200 104 244 78 L306 100 Q370 118 374 176 L374 300 Z",
  hoodie: "M26 300 L26 176 Q30 118 94 100 L150 80 Q200 126 250 80 L306 100 Q370 118 374 176 L374 300 Z",
  singlet: "M96 300 L96 196 Q98 150 122 132 Q132 100 160 84 Q200 116 240 84 Q268 100 278 132 Q302 150 304 196 L304 300 Z",
  kid: "M70 300 L70 190 Q74 140 122 124 L166 104 Q200 130 234 104 L278 124 Q326 140 330 190 L330 300 Z",
};
const SHOULDERS = "M10 300 L10 200 Q14 128 92 112 L160 92 L240 92 L308 112 Q386 128 390 200 L390 300 Z";

/** A finisher medal hanging on its ribbon, worn over a garment — flat illustration around the real medal art. */
export function MedalWorn({ w, id }: { w: Worn; id: string }) {
  const skin = w.skin ?? "#c99a78";
  const stops = (dir: "l" | "r") =>
    w.ribbon.flatMap((c, i) => {
      const a = (i / w.ribbon.length) * 100, b = ((i + 1) / w.ribbon.length) * 100;
      return [<stop key={`${dir}${i}a`} offset={`${a}%`} stopColor={c} />, <stop key={`${dir}${i}b`} offset={`${b}%`} stopColor={c} />];
    });
  const aspect = w.medal.width / w.medal.height;
  const mw = Math.min(130, 122 * aspect), mh = mw / aspect;
  return (
    <svg className="worn" viewBox="0 0 400 300" role="img" aria-label={w.alt} style={{ background: w.bg }}>
      <defs>
        <linearGradient id={`${id}-rl`} gradientUnits="userSpaceOnUse" x1="166" y1="0" x2="184" y2="0">{stops("l")}</linearGradient>
        <linearGradient id={`${id}-rr`} gradientUnits="userSpaceOnUse" x1="216" y1="0" x2="234" y2="0">{stops("r")}</linearGradient>
        <linearGradient id={`${id}-shade`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="0.22" /><stop offset="0.25" stopColor="#000" stopOpacity="0" />
          <stop offset="0.75" stopColor="#000" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity="0.22" />
        </linearGradient>
        <pattern id={`${id}-stripes`} width="20" height="20" patternUnits="userSpaceOnUse"><rect width="20" height="10" fill={w.trim ?? "#fff"} /></pattern>
        <filter id={`${id}-drop`} x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="8" stdDeviation="7" floodOpacity="0.35" /></filter>
        <filter id={`${id}-soft`}><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25" /></filter>
      </defs>

      {/* neck and (for singlets) shoulders */}
      <path d="M176 0 L224 0 L226 100 Q200 116 174 100 Z" fill={skin} />
      {w.garment === "singlet" && <path d={SHOULDERS} fill={skin} />}

      {/* garment */}
      <path d={BODY[w.garment]} fill={w.color} />
      {w.garment === "stripes" && <path d={BODY.stripes} fill={`url(#${id}-stripes)`} opacity="0.95" />}
      <path d={BODY[w.garment]} fill={`url(#${id}-shade)`} />
      {w.garment === "jacket" && (
        <>
          <path d="M156 78 L200 104 L244 78 L238 64 Q200 84 162 64 Z" fill={w.trim ?? "#222"} />
          <line x1="200" y1="104" x2="200" y2="300" stroke={w.trim ?? "#222"} strokeWidth="3" />
        </>
      )}
      {w.garment === "hoodie" && <path d="M150 80 Q200 140 250 80 Q240 60 200 62 Q160 60 150 80 Z" fill={w.trim ?? "#000"} opacity="0.35" />}
      {w.garment === "polo" && (
        <>
          <path d="M162 84 L200 112 L184 126 L150 92 Z M238 84 L200 112 L216 126 L250 92 Z" fill={w.trim ?? "#fff"} />
          <line x1="200" y1="112" x2="200" y2="150" stroke={w.trim ?? "#fff"} strokeWidth="2" />
        </>
      )}
      {(w.garment === "tee" || w.garment === "kid" || w.garment === "stripes") && (
        <path d={w.garment === "kid" ? "M166 104 Q200 130 234 104" : "M158 84 Q200 118 242 84"} stroke={w.trim ?? "#000"} strokeOpacity="0.35" strokeWidth="6" fill="none" />
      )}

      {/* ribbon */}
      <g filter={`url(#${id}-soft)`}>
        <polygon points="166,86 184,86 206,170 194,170" fill={`url(#${id}-rl)`} />
        <polygon points="216,86 234,86 206,170 194,170" fill={`url(#${id}-rr)`} />
      </g>

      {/* medal */}
      <g transform="rotate(-4 200 168)" filter={`url(#${id}-drop)`}>
        <image href={w.medal.src} x={200 - mw / 2} y={158} width={mw} height={mh} preserveAspectRatio="xMidYMin meet" />
      </g>
    </svg>
  );
}
