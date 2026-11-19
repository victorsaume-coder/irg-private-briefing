import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { FACADE_IMAGE } from "./assets";
import { FRAMEWORK } from "./content";

export function BuyWellSection() {
  return (
    <section className="bg-warm-white px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="irg-eyebrow text-irg-navy/70">
                Buying Early Is Only an Advantage if You Buy Well
              </p>
              <h2 className="mt-7 font-display text-4xl font-light leading-[1.08] text-irg-navy-deep lg:text-[3rem]">
                Not every pre-construction project deserves the same attention.
              </h2>
              <p className="mt-8 text-[16px] font-light leading-relaxed text-charcoal/65">
                Access creates possibilities. Selection is what turns those possibilities into
                strategy. IRG evaluates opportunities rather than simply showing every project
                available in Miami.
              </p>
              <div className="mt-10 overflow-hidden rounded-[3px] border border-hairline">
                <img
                  src={FACADE_IMAGE}
                  alt="Architectural detail of a luxury Miami residential tower"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-2">
            <Stagger className="grid gap-px bg-hairline sm:grid-cols-2" gap={0.1}>
              {FRAMEWORK.map((f) => (
                <StaggerItem key={f.k}>
                  <div className="h-full bg-warm-white p-9">
                    <h3 className="font-display text-xl font-normal text-irg-navy-deep">{f.k}</h3>
                    <p className="mt-3 text-[15px] font-light leading-relaxed text-charcoal/65">
                      {f.v}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="mt-10 max-w-xl">
              <p className="font-display text-2xl font-light leading-snug text-irg-navy-deep">
                The objective is not to see more projects. It is to identify the right ones.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
