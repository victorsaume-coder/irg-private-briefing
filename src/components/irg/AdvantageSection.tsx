import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { CONSTRUCTION_IMAGE } from "./assets";
import { ADVANTAGES } from "./content";

export function AdvantageSection() {
  return (
    <section id="advantage" className="bg-warm-white px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="irg-eyebrow text-irg-navy/70">Understanding Pre-Construction</p>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7 xl:col-span-8">
            <h2 className="font-display text-4xl font-light leading-[1.08] text-irg-navy-deep lg:text-[3.2rem]">
              The opportunity starts before completion.
            </h2>
            <div className="mt-7 max-w-xl space-y-4 text-[16px] font-light leading-relaxed text-charcoal/75 lg:text-[17px]">
              <p>
                Pre-construction allows you to purchase a residence directly from a developer before
                the building is completed, sometimes even before construction begins.
              </p>
              <p>
                What makes it particularly attractive is the combination of significant advantages
                rarely available when purchasing an existing property.
              </p>
            </div>
          </Reveal>

          <div className="lg:col-span-5 xl:col-span-4 flex justify-start lg:justify-end">
            <Reveal className="w-full max-w-[380px]">
              <div className="overflow-hidden rounded-[2px] border border-hairline shadow-sm">
                <img
                  src={CONSTRUCTION_IMAGE}
                  alt="A new Miami residential tower under construction at dawn"
                  className="aspect-[16/11] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <Stagger className="mt-24 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((a) => (
            <StaggerItem key={a.n}>
              <div className="group flex h-full flex-col bg-warm-white p-8 transition-colors duration-500 hover:bg-sand/60 lg:p-10">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-[13px] font-normal tracking-irg text-irg-gray">
                    {a.n}
                  </span>
                  <span className="text-[11px] uppercase tracking-irg text-irg-navy/50">
                    {a.tag}
                  </span>
                </div>
                <div className="mt-8 h-px w-10 bg-irg-navy/40 transition-all duration-500 group-hover:w-16 group-hover:bg-irg-navy/70" />
                <h3 className="mt-7 font-display text-2xl font-light leading-tight text-irg-navy-deep lg:text-[1.7rem]">
                  {a.title}
                </h3>
                <p className="mt-4 text-[15px] font-light leading-relaxed text-charcoal/65">
                  {a.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
