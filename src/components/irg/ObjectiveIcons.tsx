import type * as React from "react";

/**
 * Minimalist line icons for the five pre-construction objectives.
 * Single-weight stroke, no fill — consistent with the IRG editorial identity.
 * Each accepts the rendered size via `className` (width/height set on the svg).
 */

export type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.35,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Own & Enjoy — residential home. */
export function HomeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 11.5 12 4l8.5 7.5" />
      <path d="M5.5 10v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V10" />
      <path d="M10 20.5v-5.5h4v5.5" />
    </svg>
  );
}

/** Capital Appreciation — upward growth. */
export function GrowthIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 17l6-6 3.5 3.5L21 6" />
      <path d="M15 6h6v6" />
    </svg>
  );
}

/** Rental Income — property key. */
export function KeyIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="8" cy="8" r="3.6" />
      <path d="M10.6 10.6 20 20" />
      <path d="M16.5 16.5l2-2" />
      <path d="M19.5 19.5l2-2" />
    </svg>
  );
}

/** Wealth Diversification — global exposure. */
export function GlobeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.6 2.4 4 5.4 4 8.5s-1.4 6.1-4 8.5c-2.6-2.4-4-5.4-4-8.5s1.4-6.1 4-8.5Z" />
    </svg>
  );
}

/** Future & Family — family. */
export function FamilyIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="7.5" cy="6" r="2.4" />
      <circle cx="16.5" cy="6" r="2.4" />
      <path d="M3.5 20v-4.5a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4V20" />
      <path d="M12.5 20v-4.5a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4V20" />
    </svg>
  );
}

export const OBJECTIVE_ICONS: React.ComponentType<IconProps>[] = [
  HomeIcon,
  GrowthIcon,
  KeyIcon,
  GlobeIcon,
  FamilyIcon,
];
