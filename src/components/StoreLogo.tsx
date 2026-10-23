// Platform marks: Gumroad and DeviantArt from Simple Icons (CC0), Magnific from its favicon.
const marks = {
  gumroad: { viewBox: "0 0 24 24", d: "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0Zm-.007 5.12c4.48 0 5.995 3.025 6.064 4.744h-3.239c-.069-.962-.897-2.406-2.896-2.406-2.136 0-3.514 1.857-3.514 4.126 0 2.27 1.378 4.125 3.514 4.125 1.93 0 2.758-1.512 3.103-3.025h-3.103v-1.238h6.509v6.327h-2.855v-3.989c-.207 1.444-1.102 4.264-4.617 4.264-3.516 0-5.584-2.82-5.584-6.326 0-3.645 2.276-6.602 6.618-6.602z" },
  deviantart: { viewBox: "0 0 24 24", d: "M19.207 4.794l.23-.43V0H15.07l-.436.44-2.058 3.925-.646.436H4.58v5.993h4.04l.36.436-4.175 7.98-.24.43V24H8.93l.436-.44 2.07-3.925.644-.436h7.35v-5.993h-4.05l-.36-.438 4.186-7.977z" },
  magnific: { viewBox: "6 11 36 26", d: "M27.6002 11L24 19.9654L20.4016 11H13.2012L6.00076 37C5.90425 37 15.0004 37 15.0004 37L24 25.3443L32.9996 37C32.9996 37 42.0958 37 41.9992 37L34.8006 11H27.6002Z" },
};

export type StoreId = keyof typeof marks;

export function StoreLogo({ id, className }: { id: StoreId; className?: string }) {
  const mark = marks[id];
  return (
    <svg className={className} viewBox={mark.viewBox} aria-hidden="true">
      <path fill="currentColor" d={mark.d} />
    </svg>
  );
}
