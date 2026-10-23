"use client";

import { scrollToTop } from "./SmoothScroll";

export function BackToTop() {
  return (
    <button type="button" className="footer__top" onClick={() => scrollToTop()}>
      Back to top <span aria-hidden="true">↗</span>
    </button>
  );
}
