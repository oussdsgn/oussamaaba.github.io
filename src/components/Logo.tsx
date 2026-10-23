export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 192 200" aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 0H92A100 100 0 0 1 92 200H0ZM0 70H78L95 33L108 87L160 100L108 113L95 167L78 130H0Z"
      />
    </svg>
  );
}

/** The four-point star from the logo, used as a separator. */
export function Star({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path fill="currentColor" d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40Z" />
    </svg>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 26 14" aria-hidden="true">
      <path d="M0 7h24M18 1l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
