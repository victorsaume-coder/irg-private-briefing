import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { OBJECTIVES } from "./content";

export function ObjectivesSection() {
  return (
    <section className="bg-warm-white px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="irg-eyebrow text-irg-navy/70">One Market. Different Objectives.</p>
          <h2 className="mt-7 max-w-3xl font-display text-4xl font-light leading-[1.1] text-irg-navy-deep lg:text-5xl">
            The right opportunity depends on what you want the asset to do for you.
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3" gap={0.09}>
          {OBJECTIVES.map((o) => (
            <StaggerItem key={o.n}>
              <div className="group h-full bg-warm-white p-9 transition-colors duration-500 hover:bg-sand/60">
                <span className="font-display text-sm font-light text-irg-navy/40">{o.n}</span>
                <h3 className="mt-5 text-xl font-medium tracking-tight text-irg-navy-deep">
                  {o.title}
                </h3>
                <p className="mt-4 text-[15px] font-light leading-relaxed text-charcoal/65">
                  {o.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12 max-w-3xl">
          <p className="text-[14px] font-light leading-relaxed text-irg-gray">
            Purchasing a Miami residence does not automatically qualify someone for EB-5 or U.S.
            residency. Immigration strategies are separate and require specialized legal advice.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
