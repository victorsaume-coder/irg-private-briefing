import { Reveal } from "./Reveal";
import { BRICKELL_IMAGE, LOGO_DARK } from "./assets";
import { DEVELOPERS } from "./content";

export function IrgSection() {
  return (
    <section
      id="irg"
      className="relative overflow-hidden bg-irg-navy px-6 py-28 text-warm-white lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
          <Reveal>
            <img
              src={LOGO_DARK}
              alt="International Realty Group"
              className="h-12 w-auto object-contain opacity-90"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[11px] uppercase tracking-irg text-warm-white/45">
              Private Advisory · Miami
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="irg-eyebrow text-warm-white/55">
                Built on Experience. Powered by Relationships.
              </p>
              <h2 className="mt-7 font-display text-4xl font-light leading-[1.08] text-warm-white lg:text-[3.4rem]">
                IRG is not built around showing more properties. It is built around helping a select
                group of clients access and evaluate the right opportunities.
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 max-w-xl">
              <p className="text-[16px] font-light leading-relaxed text-warm-white/75">
                A Miami-based boutique real estate advisory firm with nearly two decades of market
                presence and over 18 years of relevant real estate experience. A strong reputation
                built through long-term relationships, highly personalized representation, and a
                deliberately selective approach rather than a volume-based sales model — with direct
                relationships with developers, sales directors and decision-makers, and experience
                serving sophisticated domestic and international clients.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-[3px] border border-warm-white/15">
                <img
                  src={BRICKELL_IMAGE}
                  alt="The Miami Brickell district at twilight"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-[12px] uppercase tracking-irg text-warm-white/45">
                Working across the teams shaping Miami's next generation of residential real estate
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-20">
          <p className="irg-eyebrow text-warm-white/45">
            Relationships across Miami's leading development community
          </p>
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3 lg:grid-cols-4">
            {DEVELOPERS.map((d) => (
              <span key={d} className="font-display text-lg font-light text-warm-white/70">
                {d}
              </span>
            ))}
          </div>
          <p className="mt-6 text-[12px] text-warm-white/40">
            Development groups referenced represent market relationships; formal partnerships are
            verified per project.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
