import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { MIAMI_REASONS } from "./content";

export function WhyMiamiSection() {
  return (
    <section id="why-miami" className="bg-sand px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="irg-eyebrow text-irg-navy/70">Why Miami</p>
              <h2 className="mt-7 font-display text-5xl font-light leading-[1.05] text-irg-navy-deep lg:text-6xl">
                A city being reshaped by capital, business, infrastructure, global brands and
                sustained residential demand.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Stagger gap={0.11}>
              {MIAMI_REASONS.map((r) => (
                <StaggerItem key={r.n}>
                  <div className="border-b border-hairline py-8 first:pt-0">
                    <div className="flex gap-6 lg:gap-8">
                      <span className="font-display text-xl font-light text-irg-navy/50">
                        {r.n}
                      </span>
                      <div>
                        <h3 className="text-lg font-medium tracking-tight text-irg-navy-deep">
                          {r.title}
                        </h3>
                        <p className="mt-3 text-[15px] font-light leading-relaxed text-charcoal/65">
                          {r.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        <Reveal className="mt-20">
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-hairline bg-hairline lg:grid-cols-4">
            {[
              { label: "Population Trend", sub: "Net migration" },
              { label: "Wealth Inflow", sub: "HNW residents" },
              { label: "New Supply", sub: "Pipeline" },
              { label: "Tax Position", sub: "No state income tax" },
            ].map((s) => (
              <div key={s.label} className="bg-warm-white px-6 py-10 text-center">
                <p className="font-display text-3xl font-light tracking-tight text-irg-navy/30 lg:text-4xl">
                  &mdash;
                </p>
                <p className="mt-4 text-[11px] uppercase tracking-irg text-irg-navy/70">
                  {s.label}
                </p>
                <p className="mt-1 text-[11px] text-irg-gray">{s.sub}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-irg-gray/70">
            Verified market statistics to be added once confirmed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
