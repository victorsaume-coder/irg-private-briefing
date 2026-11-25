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
              Global capital, leading companies, international buyers and prestigious luxury brands
              are choosing Miami. The numbers tell the story.
            </p>
          </Reveal>
        </div>

        {/* Vertical Editorial List — statistic left, narrative right */}
        <Stagger gap={0.08} className="mt-16 lg:mt-20">
          {MIAMI_REASONS.map((r, i) => (
            <StaggerItem key={r.stat}>
              <article
                className={`group grid grid-cols-1 items-baseline gap-4 py-10 sm:grid-cols-[minmax(0,7rem)_1fr] sm:gap-10 lg:grid-cols-[minmax(0,13rem)_1fr] lg:gap-16 lg:py-12 ${
                  i > 0 ? "border-t border-hairline" : ""
                }`}
              >
                {/* Statistic */}
                <span
                  className="font-display text-5xl font-light leading-none tracking-tight text-irg-navy-deep transition-colors duration-500 group-hover:text-irg-navy sm:text-6xl lg:text-[4.25rem]"
                  aria-label={r.stat}
                >
                  {r.stat}
                </span>

                {/* Narrative */}
                <div className="max-w-2xl">
                  <h3 className="text-[15px] font-medium tracking-tight text-irg-navy-deep sm:text-[16px]">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] font-light leading-relaxed text-charcoal/70 sm:text-[14.5px]">
                    {r.body}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
