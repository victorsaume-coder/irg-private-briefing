import { LOGO_DARK } from "./assets";

export function Footer() {
  return (
    <footer className="bg-irg-navy-deep px-6 py-14 text-warm-white lg:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 border-t border-warm-white/10 pt-12 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-3">
          <img
            src={LOGO_DARK}
            alt="International Realty Group"
            className="h-9 w-auto object-contain opacity-80"
          />
          <p className="text-[11px] uppercase tracking-irg text-warm-white/40">
            Private Briefing · Miami Pre-Construction
          </p>
        </div>
        <div className="flex flex-col gap-3 text-[12px] text-warm-white/45 sm:items-end">
          <p className="max-w-sm leading-relaxed">
            This briefing is provided for informational purposes only and does not constitute an
            offer to sell or a solicitation to buy real estate. Pre-construction opportunities vary
            by project and are not guaranteed. Individual tax and immigration situations require
            professional advice.
          </p>
          <p className="text-warm-white/30">
            © {new Date().getFullYear()} International Realty Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
