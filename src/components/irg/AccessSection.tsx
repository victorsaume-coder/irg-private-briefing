import { Reveal } from "./Reveal";
import { ACCESS_TIERS, EARLY_ACCESS } from "./content";

export function AccessSection() {
  return (
    <section
      id="access"
      className="relative overflow-hidden bg-[#0d1622] px-6 py-28 text-[#faf9f6] lg:px-12 lg:py-36"
    >
      {/* Editorial geometric grid backdrop instead of washed out photo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #faf9f6 1px, transparent 1px), linear-gradient(to bottom, #faf9f6 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Subtle architectural radial lighting */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-[#1e344f]/30 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-[#132234]/50 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Eyebrow */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[#faf9f6]/40" />
            <p className="irg-eyebrow text-[#faf9f6]/70">Access Changes the Opportunity</p>
          </div>
        </Reveal>

        {/* Two-column headline + early access panel */}
        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-4xl font-light leading-[1.08] text-[#faf9f6] sm:text-5xl lg:text-[3.2rem]">
              In Miami pre-construction, knowing what is available is only part of the equation.
            </h2>
            <p className="mt-8 max-w-xl text-[17px] font-light leading-relaxed text-[#faf9f6]/80">
              Knowing what is coming, when to enter and where the strongest opportunities may exist
              can make a significant difference. Some of the most interesting moments in a
              development happen before broader commercialization begins.
            </p>

            <div className="mt-10 border-l border-[#faf9f6]/30 pl-6">
              <p className="font-display text-2xl font-light italic leading-snug text-[#faf9f6]/95 lg:text-[1.7rem]">
                "By the time a development becomes broadly visible, some of the earliest pricing,
                incentives or most desirable inventory may already have changed."
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.15}>
            <div className="relative overflow-hidden rounded-[2px] border border-[#faf9f6]/20 bg-[#142030]/90 p-8 shadow-2xl backdrop-blur-md lg:p-10">
              <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-[#faf9f6]/10 to-transparent pointer-events-none" />
              <p className="irg-eyebrow text-[#faf9f6]/60">Private / Limited Early Access</p>
              <h3 className="mt-3 font-display text-2xl font-normal text-[#faf9f6]">
                Before Public Release
              </h3>
              <p className="mt-4 text-[15px] font-light leading-relaxed text-[#faf9f6]/80">
                Through long-standing relationships with Miami developers and sales teams, IRG
                clients may receive access to selected opportunities such as:
              </p>

              <ul className="mt-6 space-y-3.5 text-[15px] font-light text-[#faf9f6]">
                {EARLY_ACCESS.map((x) => (
                  <li key={x} className="flex items-center gap-3.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#faf9f6]/80" />
                    <span className="tracking-wide text-[#faf9f6]/95">{x}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-[#faf9f6]/15 pt-5">
                <p className="text-[12px] font-light leading-relaxed text-[#faf9f6]/55">
                  These opportunities vary from project to project and are never presented as
                  guaranteed.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Market Sequence */}
        <div className="mt-24 pt-12 border-t border-[#faf9f6]/15">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="irg-eyebrow text-[#faf9f6]/60">Development Commercialization</p>
                <h3 className="mt-2 font-display text-2xl font-light text-[#faf9f6] lg:text-3xl">
                  The Market Sequence
                </h3>
              </div>
              <p className="text-[13px] font-light text-[#faf9f6]/60">
                Where an investor enters dictates pricing, terms and inventory availability.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {ACCESS_TIERS.map((tier, i) => (
                <div
                  key={tier.stage}
                  className={`relative flex flex-col justify-between rounded-[2px] p-8 transition-all duration-300 ${
                    tier.dominant
                      ? "border-2 border-[#faf9f6] bg-[#faf9f6] text-[#0d1622] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                      : "border border-[#faf9f6]/20 bg-[#142030]/80 text-[#faf9f6] hover:border-[#faf9f6]/40"
                  }`}
                >
                  {tier.dominant && (
                    <div className="absolute -top-3 left-6 bg-[#0d1622] px-3 py-0.5 text-[10px] font-medium uppercase tracking-widest text-[#faf9f6]">
                      Where IRG Operates
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-display text-lg font-light ${
                          tier.dominant ? "text-[#0d1622]/50" : "text-[#faf9f6]/40"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={`text-[10px] uppercase tracking-irg ${
                          tier.dominant ? "text-[#0d1622]/60" : "text-[#faf9f6]/50"
                        }`}
                      >
                        {i === 0 ? "First Entry" : i === 1 ? "Secondary" : "Open Market"}
                      </span>
                    </div>

                    <h4
                      className={`mt-4 font-display text-2xl font-normal leading-snug ${
                        tier.dominant ? "text-[#0d1622]" : "text-[#faf9f6]"
                      }`}
                    >
                      {tier.stage}
                    </h4>

                    <p
                      className={`mt-3 text-[14px] font-medium tracking-wide ${
                        tier.dominant ? "text-[#0d1622]/80" : "text-[#faf9f6]/85"
                      }`}
                    >
                      {tier.items}
                    </p>
                  </div>

                  <div
                    className={`mt-8 border-t pt-5 ${
                      tier.dominant ? "border-[#0d1622]/15" : "border-[#faf9f6]/15"
                    }`}
                  >
                    <p
                      className={`text-[13px] font-light leading-relaxed ${
                        tier.dominant ? "text-[#0d1622]/75" : "text-[#faf9f6]/65"
                      }`}
                    >
                      {tier.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline indicator bar */}
            <div className="mt-8 flex items-center gap-4 text-[11px] uppercase tracking-irg text-[#faf9f6]/50">
              <span className="flex items-center gap-2 font-medium text-[#faf9f6]/80">
                <span className="inline-block h-2 w-2 rounded-full bg-[#faf9f6]" />
                Earlier in the cycle
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-[#faf9f6]/40 via-[#faf9f6]/20 to-[#faf9f6]/10" />
              <span className="font-light text-[#faf9f6]/40">Later in the cycle (Retail)</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
