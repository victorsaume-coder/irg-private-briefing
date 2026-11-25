import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { MIAMI_REASONS } from "./content";

export function WhyMiamiSection() {
  return (
    <section
      id="why-miami"
      className="border-t border-hairline bg-sand px-6 py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1360px]">
        {/* Editorial Header */}
        <div className="max-w-3xl">
          <Reveal>
            <p className="irg-eyebrow text-irg-navy/70">Why Miami</p>
            <h2 className="mt-5 font-display text-3.5xl font-light leading-[1.12] text-irg-navy-deep sm:text-4xl lg:text-[2.75rem]">
              A Global Destination for Business, Wealth and Real Estate.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] font-light leading-relaxed text-charcoal/70 sm:text-[16px]">
              Miami is attracting global capital, leading companies, international buyers and some
              of the world&apos;s most prestigious luxury brands. The numbers tell the story.
            </p>
          </Reveal>
        </div>

        {/* 5-Column Metric Grid — Clean, architectural & balanced */}
        <div className="mt-16 pt-10 border-t border-hairline">
          <Stagger
            gap={0.08}
            className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8"
          >
            {MIAMI_REASONS.map((r) => (
              <StaggerItem key={r.n}>
                <article className="flex flex-col justify-between h-full group">
                  <div>
                    {/* Index */}
                    <span className="font-mono text-[11px] font-normal tracking-irg text-irg-navy/40">
                      {r.n}
                    </span>

                    {/* Stat */}
                    <div className="mt-4">
                      <span className="font-display text-4xl font-light tracking-tight text-irg-navy-deep sm:text-5xl lg:text-[2.9rem] leading-none block">
                        {r.stat}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 text-[15px] font-medium tracking-tight text-irg-navy-deep leading-snug">
                      {r.title}
                    </h3>

                    {/* Hairline divider */}
                    <div className="my-4 w-8 h-px bg-irg-navy/15 transition-all duration-300 group-hover:w-12 group-hover:bg-irg-navy/40" />

                    {/* Body */}
                    <p className="text-[13.5px] font-light leading-relaxed text-charcoal/70">
                      {r.body}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
