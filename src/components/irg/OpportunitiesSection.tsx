import { Reveal } from "./Reveal";
import { LANDMARK_IMAGE } from "./assets";
import { OPPORTUNITIES } from "./content";

export function OpportunitiesSection() {
  return (
    <section className="bg-warm-white px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="irg-eyebrow text-irg-navy/70">A New Generation of Miami Real Estate</p>
          <h2 className="mt-7 max-w-3xl font-display text-4xl font-light leading-[1.1] text-irg-navy-deep lg:text-[3.4rem]">
            Selected opportunities from the development universe IRG navigates for its clients.
          </h2>
          <p className="mt-7 max-w-2xl text-[16px] font-light leading-relaxed text-charcoal/60">
            A highly curated showcase of branded and landmark residences currently relevant to the
            IRG universe — presented through architecture and brand caliber, not an inventory
            portal.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {OPPORTUNITIES.map((o, i) => (
            <Reveal key={o.name} delay={(i % 3) * 0.08}>
              <figure className="group h-full bg-warm-white">
                <div className="overflow-hidden bg-sand">
                  <img
                    src={LANDMARK_IMAGE}
                    alt={`${o.name}, ${o.place}`}
                    className="aspect-[4/5] w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
                <figcaption className="px-7 py-7">
                  <h3 className="font-display text-xl font-normal leading-snug text-irg-navy-deep">
                    {o.name}
                  </h3>
                  <p className="mt-2 text-[12px] uppercase tracking-irg text-irg-gray">{o.place}</p>
                  <p className="mt-4 text-[13px] font-light leading-relaxed text-irg-gray">
                    Official project imagery and verified details to be inserted.
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
