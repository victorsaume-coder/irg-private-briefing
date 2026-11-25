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
              <h2 className="mt-7 font-display text-4xl font-light leading-[1.08] text-irg-navy-deep lg:text-[3.2rem]">
                A Global Destination for Business, Wealth and Real Estate.
              </h2>
              <p className="mt-7 max-w-md text-[16px] font-light leading-relaxed text-charcoal/70 lg:text-[17px]">
                Miami is attracting global capital, leading companies, international buyers and some
                of the world's most prestigious luxury brands. The numbers tell the story.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Stagger gap={0.1}>
              {MIAMI_REASONS.map((r) => (
                <StaggerItem key={r.n}>
                  <article className="group border-b border-hairline py-10 first:pt-0 last:border-b-0">
                    <div className="flex items-start gap-6 lg:gap-10">
                      <span className="font-display text-[13px] font-normal tracking-irg text-irg-gray">
                        {r.n}
                      </span>

                      <div className="flex-1">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-8">
                          <span className="font-display text-5xl font-light leading-none tracking-tight text-irg-navy-deep lg:text-6xl">
                            {r.stat}
                          </span>
                          <h3 className="text-lg font-medium tracking-tight text-irg-navy-deep">
                            {r.title}
                          </h3>
                        </div>

                        <p className="mt-5 max-w-xl text-[15px] font-light leading-relaxed text-charcoal/70">
                          {r.body}
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-irg-gray">
                          <span className="uppercase tracking-irg text-irg-navy/45">Source</span>
                          <a
                            href={r.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline-offset-4 transition-colors duration-300 hover:text-irg-navy hover:underline"
                          >
                            {r.source}
                          </a>
                          {r.note ? (
                            <span className="text-irg-gray/70">
                              <span className="mx-1 text-irg-navy/25">·</span>
                              {r.note}
                            </span>
                          ) : null}
                          {r.citadelUrl ? (
                            <a
                              href={r.citadelUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-irg-gray/70 underline-offset-4 transition-colors duration-300 hover:text-irg-navy hover:underline"
                            >
                              <span className="mx-1 text-irg-navy/25">·</span>
                              Citadel, Miami HQ
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
