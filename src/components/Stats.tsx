import type { Stat } from "@/data/site";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

export function Stats({ items }: { items: Stat[] }) {
  return (
    <div className="stats__grid">
      {items.map((s, i) => (
        <Reveal key={s.label} className="stat" delay={i * 100}>
          <Counter value={s.value} suffix={s.suffix} />
          <p className="stat__label">{s.label}</p>
          <p className="stat__text">{s.text}</p>
        </Reveal>
      ))}
    </div>
  );
}
