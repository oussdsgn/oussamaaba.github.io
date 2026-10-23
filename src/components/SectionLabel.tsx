import { site } from "@/data/site";

export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="label">
      <span>{index}</span>
      <h2 className="label__title">( {title} )</h2>
      <span>© {site.year}</span>
    </div>
  );
}
