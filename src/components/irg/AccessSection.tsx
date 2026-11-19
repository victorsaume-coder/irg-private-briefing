import { Reveal } from "./Reveal";
import { FACADE_IMAGE } from "./assets";
import { ACCESS_TIERS, EARLY_ACCESS } from "./content";

export function AccessSection() {
  return (
    <section
      id="access"
      className="relative overflow-hidden bg-irg-navy-deep px-6 py-28 text-warm-white lg:px-12 lg:py-36"
    >
      <div className="absolute inset-0 opacity-30">
        <img
          src={FACADE_IMAGE}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-irg-navy-deep/55" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        <Reveal>
          <p className="irg-eyebrow text-warm-white/55">Access Changes the Opportunity</p>
        </Reveal>

        <div className="mt-9 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-4xl font-light leading-[1.08] text-warm-white lg:text-[3rem]">
              In Miami pre-construction, knowing what is available is only part of the equation.
            </h2>
            <p className="mt-7 max-w-xl text-[17px] font-light leading-relaxed text-warm-white/75">
              Knowing what is coming, when to enter and where the strongest opportunities may exist
              can make a significant difference. Some of the most interesting moments in a
              development happen before broader commercialization begins.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="rounded-[3px] border border-warm-white/15 bg-warm-white/[0.04] p-8 backdrop-blur-sm">
              <p className="irg-eyebrow text-warm-white/55">Private / Limited Early Access</p>
              <p className="mt-4 text-[15px] font-light leading-relaxed text-warm-white/80">
                Through long-standing relationships with Miami developers and sales teams, IRG
                clients may receive access to selected opportunities such as:
              </p>
              <ul className="mt-5 space-y-2.5 text-[15px] font-light text-warm-white/85">
                {EARLY_ACCESS.map((x) => (
                  <li key={x} className="flex items-center gap-3">
                    <span className="h-px w-4 bg-warm-white/40" />
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[12px] leading-relaxed text-warm-white/45">
                These opportunities vary from project to project and should never be presented as
                guaranteed.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <p className="irg-eyebrow text-warm-white/45">The Market Sequence</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.6fr_0.12fr_1fr_0.12fr_1fr] lg:items-stretch">
            {ACCESS_TIERS.map((tier, i) => (
              <div key={tier.stage} className="contents">
                <div
                  className={`flex flex-col justify-between rounded-[3px] border p-7 ${
                    tier.dominant
                      ? "border-warm-white/25 bg-warm-white text-irg-navy-deep"
                      : "border-warm-white/12 bg-warm-white/[0.03] text-warm-white/80"
                  }`}
                >
                  <div>
                    <p
                      className={`irg-eyebrow ${
                        tier.dominant ? "text-irg-navy/70" : "text-warm-white/50"
                      }`}
                    >
                      {tier.stage}
                    </p>
                    <p
                      className={`mt-4 font-display text-xl font-light leading-snug ${
                        tier.dominant ? "text-irg-navy-deep" : "text-warm-white"
                      }`}
                    >
                      {tier.items}
                    </p>
                  </div>
                  <p
                    className={`mt-6 text-[13px] font-light leading-relaxed ${
                      tier.dominant ? "text-irg-navy/65" : "text-warm-white/55"
                    }`}
                  >
                    {tier.note}
                  </p>
                </div>
                {i < ACCESS_TIERS.length - 1 && (
                  <div className="hidden items-center justify-center text-warm-white/30 lg:flex">
                    <span className="text-2xl font-light">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-14 max-w-3xl">
          <p className="border-l border-warm-white/25 pl-5 font-display text-2xl font-light leading-snug text-warm-white/85 lg:text-[1.6rem]">
            By the time a development becomes broadly visible, some of the earliest pricing,
            incentives or most desirable inventory may already have changed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
