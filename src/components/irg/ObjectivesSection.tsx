import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { OBJECTIVES } from "./content";

export function ObjectivesSection() {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section
      id="objectives"
      className="relative overflow-hidden bg-irg-navy-deep px-6 py-24 text-warm-white lg:px-12 lg:py-32"
    >
      {/* Ambient depth — subtle petroleum gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(120% 80% at 85% 0%, rgba(40, 64, 92, 0.55) 0%, transparent 55%), radial-gradient(90% 70% at 0% 100%, rgba(15, 28, 43, 0.6) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-[1180px]">
        {/* Introduction */}
        <div className="max-w-2xl">
          <Reveal>
            <p className="irg-eyebrow text-warm-white/55">One Market. Your Objectives.</p>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.1] text-warm-white lg:text-[2.9rem]">
              How Can Pre-Construction Work for You?
            </h2>
            <p className="mt-6 max-w-xl text-[15px] font-light leading-relaxed text-warm-white/70 lg:text-[16px]">
              From personal enjoyment to long-term wealth creation, buying early can serve very
              different objectives.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-8 flex items-center gap-3">
            <span className="irg-rule w-10 text-warm-white/40" />
            <span className="irg-eyebrow text-[0.62rem] text-warm-white/55">
              Select an objective to discover the possibilities
            </span>
          </Reveal>
        </div>

        {/* Interactive editorial list */}
        <div className="mt-14 border-t border-warm-white/12 lg:mt-16">
          {OBJECTIVES.map((o, i) => {
            const isOpen = active === i;
            return (
              <div key={o.n} className="border-b border-warm-white/12">
                {/* Title row — the interactive trigger */}
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`obj-panel-${o.n}`}
                  className="group flex w-full items-center gap-6 py-7 text-left transition-colors duration-500 hover:text-warm-white lg:py-8"
                >
                  <span
                    className={`font-display text-sm font-light tabular-nums transition-colors duration-500 ${
                      isOpen
                        ? "text-warm-white"
                        : "text-warm-white/35 group-hover:text-warm-white/60"
                    }`}
                  >
                    {o.n}
                  </span>

                  <span className="flex-1 font-display text-2xl font-light tracking-tight transition-all duration-500 sm:text-[1.7rem] lg:text-[1.85rem]">
                    <span
                      className={`transition-colors duration-500 ${
                        isOpen
                          ? "text-warm-white"
                          : "text-warm-white/80 group-hover:text-warm-white"
                      }`}
                    >
                      {o.title}
                    </span>
                  </span>

                  {/* Interaction indicator — elegant plus/cross */}
                  <span
                    aria-hidden
                    className="relative flex h-5 w-5 shrink-0 items-center justify-center"
                  >
                    <span
                      className={`absolute h-px bg-warm-white transition-all duration-500 ${
                        isOpen ? "w-0" : "w-5 opacity-50 group-hover:opacity-100"
                      }`}
                    />
                    <span
                      className={`h-px bg-warm-white transition-all duration-500 ${
                        isOpen ? "w-5 opacity-100" : "w-0 opacity-0"
                      }`}
                      style={{ transform: "rotate(90deg)" }}
                    />
                  </span>
                </button>

                {/* Expanded editorial content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`obj-panel-${o.n}`}
                      key="panel"
                      initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-10 pb-12 pl-0 sm:pl-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pl-12">
                        {/* Copy */}
                        <div className="max-w-xl">
                          <motion.h3
                            initial={reduce ? false : { opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                            className="font-display text-2xl font-light leading-snug text-warm-white lg:text-[1.7rem]"
                          >
                            {o.headline}
                          </motion.h3>
                          <motion.p
                            initial={reduce ? false : { opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-5 text-[15px] font-light leading-relaxed text-warm-white/70 lg:text-[15.5px]"
                          >
                            {o.body}
                          </motion.p>

                          <motion.ul
                            initial={reduce ? false : { opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-8 space-y-3.5"
                          >
                            {o.points.map((p) => (
                              <li
                                key={p}
                                className="flex items-start gap-4 text-[14px] font-light text-warm-white/75"
                              >
                                <span className="mt-2 h-px w-5 shrink-0 bg-warm-white/40" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </motion.ul>
                        </div>

                        {/* Imagery */}
                        <motion.div
                          initial={reduce ? false : { opacity: 0, scale: 1.04 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-[4/5]"
                        >
                          <img
                            src={o.image}
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                          <div
                            aria-hidden
                            className="absolute inset-0"
                            style={{
                              background:
                                "linear-gradient(180deg, transparent 55%, rgba(15,28,43,0.45) 100%)",
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
