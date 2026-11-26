import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Reveal } from "./Reveal";
import { OPPORTUNITY_IMAGES } from "./assets";
import { DEVELOPMENTS } from "./content";

export function DevelopmentsSection() {
  const [active, setActive] = useState(0);
  const total = DEVELOPMENTS.length;
  const project = DEVELOPMENTS[active]!;

  return (
    <section id="developments" className="bg-warm-white px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="irg-eyebrow text-irg-navy/70">Selected Developments</p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-light leading-[1.08] text-irg-navy-deep lg:text-[3.4rem]">
            Discover Miami's Next Generation of Residences.
          </h2>
          <p className="mt-7 max-w-xl text-[16px] font-light leading-relaxed text-charcoal/55">
            A selection of exceptional developments that reflect the caliber of opportunities we
            explore with our clients.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr] lg:gap-12">
            {/* Architectural display */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-sand lg:aspect-[5/4]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={OPPORTUNITY_IMAGES[active % OPPORTUNITY_IMAGES.length]}
                    alt={`${project.name}, Miami`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Legibility scrim */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-irg-navy-deep/70 via-irg-navy-deep/10 to-transparent" />

              {/* Overlay caption */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7 lg:p-10">
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={`name-${active}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display text-2xl font-light leading-tight text-warm-white sm:text-3xl lg:text-[2.1rem]"
                  >
                    {project.name}
                  </motion.h3>
                </AnimatePresence>
                <span className="shrink-0 pb-1 font-display text-[13px] tracking-irg text-warm-white/60">
                  {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Editorial selector */}
            <div className="flex flex-col">
              <ul className="flex h-full flex-col divide-y divide-irg-navy/10">
                {DEVELOPMENTS.map((d, i) => {
                  const isActive = i === active;
                  return (
                    <li key={d.name} className="flex-1">
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        aria-pressed={isActive}
                        className="group flex h-full w-full items-center gap-5 py-5 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:[--tw-ring-offset-width:0]"
                      >
                        <span
                          className={`font-display text-[13px] tabular-nums tracking-irg transition-colors duration-300 ${
                            isActive ? "text-irg-navy" : "text-irg-navy/35"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`flex-1 font-display text-[17px] font-light leading-snug transition-all duration-300 lg:text-lg ${
                            isActive
                              ? "text-irg-navy-deep"
                              : "text-charcoal/45 group-hover:text-irg-navy-deep/80"
                          }`}
                        >
                          {d.name}
                        </span>
                        <span
                          className={`h-px w-6 shrink-0 transition-all duration-500 ${
                            isActive ? "bg-irg-navy w-10" : "bg-irg-navy/20"
                          }`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10 max-w-2xl">
          <p className="text-[13px] font-light leading-relaxed text-irg-gray">
            Project imagery shown is representative. Official renders, pricing, delivery timelines
            and availability are confirmed per opportunity and shared in conversation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
