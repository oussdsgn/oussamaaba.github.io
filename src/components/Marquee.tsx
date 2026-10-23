import { Star } from "./Logo";

export function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <div className="marquee__row" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <span key={t} className="marquee__item">
          {t}
          <Star className="marquee__star" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee" role="marquee" aria-label={items.join(", ")}>
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
