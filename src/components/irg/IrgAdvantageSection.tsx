import { Reveal } from "./Reveal";
import { IRG_ADVANTAGE } from "./content";
import { LOGO_DARK } from "./assets";

export function IrgAdvantageSection() {
  const a = IRG_ADVANTAGE;

  return (
    <section
      id="irg-advantage"
      className="relative overflow-hidden bg-irg-navy-deep px-6 py-24 text-warm-white lg:px-12 lg:py-32"
    >
      {/* Editorial grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #faf9f6 1px, transparent 1px), linear-gradient(to bottom, #faf9f6 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />
      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute -top-1/4 right-[-12%] h-[560px] w-[560px] rounded-full bg-irg-navy-card/35 blur-[160px]" />

      <div className="relative mx-auto max-w-[1240px]">
        {/* ── Header — headline, brand mark and experience ── */}
        <Reveal>
          <div className="grid gap-10 border-b border-warm-white/10 pb-14 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            <div className="max-w-2xl">
              <p className="irg-eyebrow text-warm-white/55">{a.eyebrow}</p>
              <h2 className="mt-6 font-display text-[2.6rem] font-light leading-[1.05] text-warm-white sm:text-5xl lg:text-[3.6rem]">
                {a.headline}
              </h2>
              <p className="mt-7 max-w-xl text-[16px] font-light leading-relaxed text-warm-white/68">
                {a.intro}
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-start gap-7 lg:items-end lg:pb-1">
              <img
                src={LOGO_DARK}
                alt="International Realty Group"
                className="h-9 w-auto opacity-90 lg:h-10"
                loading="lazy"
              />
              <div className="flex items-end gap-7">
                <div className="hidden h-14 w-px bg-warm-white/15 sm:block" />
                <div>
                  <span className="block font-display text-6xl font-light leading-none tracking-tight text-warm-white sm:text-7xl lg:text-[5.5rem]">
                    {a.years.stat}
                  </span>
                  <span className="irg-eyebrow mt-3 block text-warm-white/55">{a.years.label}</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Privileged Access + List Zero & Friends & Family ── */}
        <div className="grid gap-12 pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <Reveal>
            <p className="irg-eyebrow text-warm-white/45">{a.privileged.label}</p>
            <h3 className="mt-6 max-w-md font-display text-3xl font-light leading-[1.16] text-warm-white sm:text-[2.1rem]">
              {a.privileged.headline}
            </h3>
            <p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-warm-white/68">
              {a.privileged.body}
            </p>

            <div className="mt-10 border-t border-warm-white/10 pt-6">
              <p className="irg-eyebrow text-warm-white/40">Developer Relationships</p>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2.5">
                {a.privileged.developers.map((d) => (
                  <span
                    key={d}
                    className="text-[15px] font-medium tracking-[0.04em] text-warm-white/82"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-sm border border-warm-white/14 bg-irg-navy-card/55 p-8 lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-warm-white/[0.04]" />
              <div className="relative">
                <p className="irg-eyebrow text-warm-white/55">{a.earlyAccess.label}</p>
                <h4 className="mt-5 font-display text-2xl font-light leading-snug text-warm-white sm:text-[1.7rem]">
                  {a.earlyAccess.headline}
                </h4>
                <p className="mt-5 text-[13.5px] font-light leading-relaxed text-warm-white/60">
                  {a.earlyAccess.intro}
                </p>
                <ul className="mt-7 space-y-4">
                  {a.earlyAccess.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3.5 text-[14px] font-light leading-relaxed text-warm-white/85"
                    >
                      <span className="mt-2 h-px w-5 shrink-0 bg-warm-white/40" />
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

        {/* ── Strategic Expertise + Personalized Representation ── */}
        <div className="mt-16 grid gap-10 border-t border-warm-white/10 pt-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="irg-eyebrow text-warm-white/45">{a.strategic.label}</p>
            <p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-warm-white/72">
              {a.strategic.body}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="lg:border-l lg:border-warm-white/10 lg:pl-16">
              <p className="irg-eyebrow text-warm-white/45">{a.personalized.label}</p>
              <p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-warm-white/72">
                {a.personalized.body}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
