import { Reveal } from "./Reveal";
import { IRG_ADVANTAGE } from "./content";

export function IrgAdvantageSection() {
  const a = IRG_ADVANTAGE;

  return (
    <section
      id="irg-advantage"
      className="relative overflow-hidden bg-irg-navy-deep px-6 py-28 text-warm-white lg:px-12 lg:py-36"
    >
      {/* Subtle editorial grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #faf9f6 1px, transparent 1px), linear-gradient(to bottom, #faf9f6 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />
      <div className="pointer-events-none absolute -top-1/4 right-0 h-[520px] w-[520px] rounded-full bg-irg-navy-card/40 blur-[150px]" />

      <div className="relative mx-auto max-w-[1280px]">
        <Reveal>
          <div className="flex flex-col gap-7 border-b border-warm-white/12 pb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div className="max-w-2xl">
              <p className="irg-eyebrow text-warm-white/55">{a.eyebrow}</p>
              <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] text-warm-white sm:text-5xl lg:text-[3.6rem]">
                {a.headline}
              </h2>
              <p className="mt-7 max-w-xl text-[16px] font-light leading-relaxed text-warm-white/70">
                {a.intro}
              </p>
            </div>
            <div className="shrink-0 lg:pb-2">
              <div className="flex flex-col items-start">
                <span className="font-display text-[5.5rem] font-light leading-none text-warm-white sm:text-[7rem]">
                  {a.years.stat}
                </span>
                <span className="irg-eyebrow mt-2 text-warm-white/55">{a.years.label}</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Privileged Access + Private Early Access */}
        <div className="grid gap-8 pt-14 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="irg-eyebrow text-warm-white/45">{a.privileged.label}</p>
            <h3 className="mt-5 max-w-md font-display text-2xl font-light leading-snug text-warm-white sm:text-[1.7rem]">
              {a.privileged.headline}
            </h3>
            <p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-warm-white/65">
              {a.privileged.body}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-sm border border-warm-white/14 bg-irg-navy-card/60 p-8 lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-warm-white/[0.06] to-transparent" />
              <div className="relative">
                <p className="irg-eyebrow text-warm-white/55">{a.earlyAccess.label}</p>
                <h4 className="mt-5 font-display text-2xl font-light leading-snug text-warm-white sm:text-[1.6rem]">
                  {a.earlyAccess.headline}
                </h4>
                <p className="mt-5 text-[13px] font-light leading-relaxed text-warm-white/60">
                  {a.earlyAccess.intro}
                </p>
                <ul className="mt-6 space-y-3.5">
                  {a.earlyAccess.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3.5 text-[14px] font-light text-warm-white/85"
                    >
                      <span className="mt-2 h-px w-4 shrink-0 bg-warm-white/45" />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-warm-white/10 pt-5 text-[11px] font-light italic leading-relaxed text-warm-white/45">
                  {a.earlyAccess.note}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Strategic Expertise + Personalized Representation */}
        <div className="mt-14 grid gap-10 border-t border-warm-white/12 pt-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="irg-eyebrow text-warm-white/45">{a.strategic.label}</p>
            <p className="mt-5 max-w-md text-[15px] font-light leading-relaxed text-warm-white/70">
              {a.strategic.body}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="irg-eyebrow text-warm-white/45">{a.personalized.label}</p>
            <p className="mt-5 max-w-md text-[15px] font-light leading-relaxed text-warm-white/70">
              {a.personalized.body}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
