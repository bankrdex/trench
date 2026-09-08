import { useId } from "react";

export function TrenchMark({ className = "" }: { className?: string }) {
  const gid = useId();

  return (
    <div className={`relative size-14 ${className}`} aria-hidden="true">
      <div className="trench-mark-glow pointer-events-none absolute -inset-3 rounded-3xl bg-accent/25 blur-xl" />
      <div className="trench-tile relative flex size-14 items-center justify-center rounded-2xl bg-bg-elevated">
        <svg viewBox="0 0 64 64" className="size-8" fill="none">
          <defs>
            <linearGradient
              id={gid}
              x1="10"
              y1="16"
              x2="54"
              y2="16"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="var(--color-fg)" />
              <stop offset="100%" stopColor="var(--color-accent)" />
            </linearGradient>
          </defs>
          <rect x="14" y="16" width="36" height="6.5" rx="1.6" fill={`url(#${gid})`} />
          <rect
            x="28.75"
            y="16"
            width="6.5"
            height="32"
            rx="1.6"
            fill="var(--color-accent)"
          />
        </svg>
      </div>
    </div>
  );
}
