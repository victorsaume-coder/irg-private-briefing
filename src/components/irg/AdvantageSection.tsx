import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { CONSTRUCTION_IMAGE } from "./assets";
import { COMPARISONS } from "./content";

export function AdvantageSection() {
  return (
    <section id="advantage" className="bg-warm-white px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="irg-eyebrow text-irg-navy/70">The Pre-Construction Advantage</p>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <h2 className="font-display text-4xl font-light leading-[1.1] text-irg-navy-deep lg:text-[3.2rem]">
              Miami pre-construction means securing a residence directly from a developer before the
              building is completed.
            </h2>
            <p className="mt-8 text-[17px] font-light leading-relaxed text-charcoal/70">
              It is not simply another type of real estate purchase. Entering earlier in the
              development cycle can create advantages in pricing, capital deployment, inventory
              selection and timing that are different from buying an already completed property.
            </p>
          </Reveal>

          <div className="lg:col-span-6">
            <Reveal>
              <div className="overflow-hidden rounded-[3px] border border-hairline">
                <img
                  src={CONSTRUCTION_IMAGE}
                  alt="A new Miami residential tower under construction at dawn"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-[12px] uppercase tracking-irg text-irg-gray">
                Entering earlier in the development cycle
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24">
          <Reveal>
            <div className="grid grid-cols-2 gap-6 border-b border-hairline pb-6 text-[12px] uppercase tracking-irg text-irg-gray">
              <span>Conventional Real Estate</span>
              <span className="text-irg-navy">Pre-Construction</span>
            </div>
          </Reveal>

          <Stagger className="mt-2" gap={0.1}>
            {COMPARISONS.map((c) => (
              <StaggerItem key={c.conv}>
                <div className="grid grid-cols-2 gap-6 border-b border-hairline py-7 lg:gap-12 lg:py-9">
                  <p className="flex items-start gap-4 text-[17px] font-light leading-snug text-charcoal/55">
                    <span className="mt-2 h-px w-6 shrink-0 bg-irg-gray/40" />
                    {c.conv}
                  </p>
                  <p className="flex items-start gap-4 text-[17px] font-normal leading-snug text-irg-navy-deep">
                    <span className="mt-2 h-px w-6 shrink-0 bg-irg-navy/60" />
                    {c.pre}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-12 max-w-3xl">
            <p className="font-display text-2xl font-light leading-snug text-irg-navy-deep lg:text-[1.7rem]">
              Earlier access. More flexible capital. Better selection. More time for value to
              develop.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
