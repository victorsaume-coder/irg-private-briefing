import { Link } from "@tanstack/react-router";

import { WhatsAppIcon } from "./WhatsAppIcon";
import { LOGO_LIGHT, WHATSAPP_URL } from "./assets";
import { NAV } from "./content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-warm-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <Link to="/" className="flex items-center gap-4">
          <img
            src={LOGO_LIGHT}
            alt="International Realty Group"
            className="h-9 w-auto object-contain"
          />
          <span className="hidden border-l border-hairline pl-4 text-[10px] font-medium uppercase tracking-irg text-irg-gray sm:block">
            Private Briefing · Miami
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium tracking-wide text-charcoal/80 transition-colors hover:text-irg-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-2 text-[12px] font-medium tracking-wide text-charcoal/80 transition-colors hover:border-irg-navy hover:text-irg-navy"
          aria-label="Open a WhatsApp conversation with IRG"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
