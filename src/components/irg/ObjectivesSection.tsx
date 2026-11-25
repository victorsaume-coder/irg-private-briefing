import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { OBJECTIVES } from "./content";

export function ObjectivesSection() {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const currentObj = active !== null ? OBJECTIVES[active] : null;

  return (
    <section
      id="objectives"
      className="relative overflow-hidden bg-irg-navy-deep px-6 py-20 text-warm-white sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Subtle ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(100% 60% at 50% 0%, rgba(35, 60, 88, 0.45) 0%, transparent 65%), radial-gradient(80% 50% at 85% 100%, rgba(20, 38, 58, 0.45) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1180px]">
        {/* Section Header */}
        <div className="max-w-2xl">
          <Reveal>
            <p className="irg-eyebrow text-warm-white/55">ONE MARKET. YOUR OBJECTIVES.</p>
            <h2 className="mt-5 font-display text-3xl font-light leading-[1.15] text-warm-white sm:text-4xl lg:text-[2.65rem]">
              How Can Pre-Construction Work for You?
            </h2>
            <p className="mt-4 max-w-xl text-[15px] font-light leading-relaxed text-warm-white/70 sm:text-[16px]">
              From personal enjoyment to long-term wealth creation, buying early can serve very
              different objectives.
            </p>
          </Reveal>

          {/* Interaction Instruction */}
          <Reveal delay={0.06} className="mt-7 flex items-center gap-3">
            <span className="irg-rule w-8 text-warm-white/35" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-warm-white/60">
              Select an objective to discover the possibilities
            </span>
          </Reveal>
        </div>

        {/* Horizontal Editorial Navigation — 5 items across desktop */}
        <div
          role="tablist"
          aria-label="Pre-construction objectives"
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-3.5"
        >
          {OBJECTIVES.map((obj, i) => {
            const isSelected = active === i;
            return (
              <button
                key={obj.n}
                type="button"
                role="tab"
                id={`tab-obj-${obj.n}`}
                aria-selected={isSelected}
                aria-controls="shared-objective-panel"
                onClick={() => setActive(isSelected ? null : i)}
                className={`group relative flex flex-col justify-between rounded-sm border p-5 text-left transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-warm-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-irg-navy-deep sm:p-5 lg:min-h-[128px] ${
                  isSelected
                    ? "border-warm-white/50 bg-warm-white/[0.08] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.35)]"
                    : "border-warm-white/12 bg-warm-white/[0.025] hover:border-warm-white/30 hover:bg-warm-white/[0.05]"
                }`}
              >
                {/* Top row: Number and subtle status indicator */}
                <div className="flex items-center justify-between">
                  <span
                    className={`font-display text-xs font-light tracking-wider transition-colors duration-300 ${
                      isSelected
                        ? "text-warm-white"
                        : "text-warm-white/40 group-hover:text-warm-white/65"
                    }`}
                  >
                    {obj.n}
                  </span>
                  <span
                    aria-hidden
                    className={`text-xs transition-transform duration-300 ${
                      isSelected
                        ? "translate-x-0.5 -translate-y-0.5 text-warm-white"
                        : "text-warm-white/35 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-warm-white/70"
                    }`}
                  >
                    {isSelected ? "×" : "↗"}
                  </span>
                </div>

                {/* Navigation title */}
                <div className="mt-5">
                  <span
                    className={`font-display text-[15px] font-light leading-snug tracking-tight transition-colors duration-300 sm:text-[16px] lg:text-[16.5px] ${
                      isSelected
                        ? "text-warm-white"
                        : "text-warm-white/80 group-hover:text-warm-white"
                    }`}
                  >
                    {obj.title}
                  </span>
                </div>

                {/* Subtle active accent underline */}
                <span
                  aria-hidden
                  className={`absolute -bottom-px left-0 right-0 h-[2px] transition-all duration-300 ${
                    isSelected ? "bg-warm-white opacity-90" : "bg-transparent opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Single Shared Content Area */}
        <AnimatePresence mode="wait">
          {currentObj && (
            <motion.div
              id="shared-objective-panel"
              key={currentObj.n}
              role="tabpanel"
              aria-labelledby={`tab-obj-${currentObj.n}`}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 overflow-hidden rounded-sm border border-warm-white/15 bg-warm-white/[0.04] p-7 backdrop-blur-sm sm:p-9 lg:mt-10 lg:p-11"
            >
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.3fr_minmax(0,380px)] lg:gap-14">
                {/* Left: Written content as primary visual element */}
                <div className="max-w-xl">
                  {/* Category breadcrumb */}
                  <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-warm-white/50">
                    <span>Objective {currentObj.n}</span>
                    <span className="h-1 w-1 rounded-full bg-warm-white/40" />
                    <span className="text-warm-white/70">{currentObj.title}</span>
                  </div>

                  {/* Prominent Editorial Headline */}
                  <h3 className="mt-3.5 font-display text-2xl font-light leading-snug text-warm-white sm:text-3xl lg:text-[2rem]">
                    {currentObj.headline}
                  </h3>

                  {/* Body description */}
                  <p className="mt-4 text-[15px] font-light leading-relaxed text-warm-white/75 sm:text-[15.5px]">
                    {currentObj.body}
                  </p>

                  {/* Three supporting points */}
                  <div className="mt-6 border-t border-warm-white/10 pt-5">
                    <ul className="space-y-3">
                      {currentObj.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-3 text-[14px] font-light text-warm-white/85"
                        >
                          <span className="mt-2 h-px w-4 shrink-0 bg-warm-white/45" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Compact, proportionate photograph */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-warm-white/10 sm:aspect-[16/9] lg:aspect-[4/3]">
                  <img
                    src={currentObj.image}
                    alt={currentObj.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-irg-navy-deep/40 via-transparent to-transparent"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
