import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { MIAMI_REASONS } from "./content";

export function WhyMiamiSection() {
  return (
    <section
      id="why-miami"
      className="border-t border-hairline bg-sand px-6 py-20 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Editorial Header */}
        <div className="max-w-2xl">
          <Reveal>
            <p className="irg-eyebrow text-irg-navy/70">Why Miami</p>
            <h2 className="mt-5 font-display text-3xl font-light leading-[1.15] text-irg-navy-deep sm:text-[2.5rem] lg:text-[2.625rem]">
              A Global Destination for Business, Wealth and Real Estate.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] font-light leading-relaxed text-charcoal/70 sm:text-[16px]">
              Global capital, leading companies, international buyers and prestigious luxury brands
              are choosing Miami. The numbers tell the story.
            </p>
          </Reveal>
        </div>

        {/* Vertical Editorial List — statistic left, narrative right */}
        <Stagger gap={0.07} className="mt-14 lg:mt-16">
          {MIAMI_REASONS.map((r, i) => (
            <StaggerItem key={r.stat}>
              <article
                className={`group grid grid-cols-1 items-center gap-3 py-7 sm:grid-cols-[minmax(0,8.5rem)_1fr] sm:gap-12 lg:grid-cols-[minmax(0,11rem)_1fr] lg:gap-20 lg:py-8 ${
                  i > 0 ? "border-t border-hairline" : ""
                }`}
              >
                {/* Statistic */}
                <span
                  className="font-display text-[2.5rem] font-light leading-none tracking-tight text-irg-navy-deep transition-colors duration-500 group-hover:text-irg-navy sm:text-[3rem] lg:text-[3.25rem]"
                  aria-label={r.stat}
                >
                  {r.stat}
                </span>

                {/* Narrative */}
                <div className="max-w-xl">
                  <h3 className="text-[14px] font-medium uppercase tracking-[0.14em] text-irg-navy-deep sm:text-[13px]">
                    {r.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] font-light leading-relaxed text-charcoal/65 sm:text-[14.5px]">
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
