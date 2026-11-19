import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { PEOPLE_IMAGE } from "./assets";

export function PeopleSection() {
  return (
    <section className="bg-sand px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="irg-eyebrow text-irg-navy/70">The People Behind the Access</p>
          <h2 className="mt-7 max-w-3xl font-display text-4xl font-light leading-[1.1] text-irg-navy-deep lg:text-5xl">
            International Realty Group, represented by complementary strengths.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-hairline lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="h-full bg-sand p-9 lg:p-12">
              <div className="overflow-hidden rounded-[3px] border border-hairline">
                <img
                  src={PEOPLE_IMAGE}
                  alt="Victor and Luis overlooking the Miami skyline"
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-6 font-display text-2xl font-light leading-snug text-irg-navy-deep">
                The right opportunity starts before the property does.
              </p>
              <p className="mt-5 text-[15px] font-light leading-relaxed text-charcoal/65">
                IRG provides the brokerage infrastructure, market relationships, access and
                execution capability — while the people behind the relationship bring the
                conversation that makes them meaningful.
              </p>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Stagger className="h-full bg-sand" gap={0.12}>
              <StaggerItem>
                <div className="border-b border-hairline p-9 lg:p-12">
                  <p className="irg-eyebrow text-irg-navy/60">International Realty Group</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="border-b border-hairline p-9 lg:p-12">
                  <h3 className="font-display text-3xl font-normal text-irg-navy-deep">
                    Victor Saume
                  </h3>
                  <p className="mt-2 text-[12px] uppercase tracking-irg text-irg-gray">
                    Strategic Partner / Investor Relations
                  </p>
                  <p className="mt-5 text-[15px] font-light leading-relaxed text-charcoal/65">
                    Brings the relationship, the strategic conversation and the business perspective
                    — an understanding of the client's broader objectives.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="p-9 lg:p-12">
                  <h3 className="font-display text-3xl font-normal text-irg-navy-deep">
                    Luis Victor Villalobos
                  </h3>
                  <p className="mt-2 text-[12px] uppercase tracking-irg text-irg-gray">
                    Luxury Real Estate Specialist / Miami Pre-Construction Advisor
                  </p>
                  <p className="mt-5 text-[15px] font-light leading-relaxed text-charcoal/65">
                    Brings deep Miami real estate knowledge, developer relationships, project
                    evaluation and transaction expertise.
                  </p>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
