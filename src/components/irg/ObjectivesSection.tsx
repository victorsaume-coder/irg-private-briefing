import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { OBJECTIVES } from "./content";
import { HomeIcon, OBJECTIVE_ICONS } from "./ObjectiveIcons";

/** Matches the Tailwind `lg` breakpoint (1024px): below it, the mobile
 *  bottom-sheet experience is active. */
function useIsNarrow() {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 1023px)");
    const onChange = () => setNarrow(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return narrow;
}

export function ObjectivesSection() {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const isNarrow = useIsNarrow();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const sheetRef = useRef<HTMLDivElement | null>(null);

  const currentObj = active !== null ? OBJECTIVES[active] : null;
  const last = OBJECTIVES.length - 1;

  const goPrev = () =>
    setActive((a) => (a === null ? null : (a - 1 + OBJECTIVES.length) % OBJECTIVES.length));
  const goNext = () => setActive((a) => (a === null ? null : (a + 1) % OBJECTIVES.length));

  // Lock background scroll while the sheet is open (mobile only).
  useEffect(() => {
    if (active === null || !isNarrow) return;
    const body = document.body;
    const prev = body.style.overflow;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = prev;
    };
  }, [active, isNarrow]);

  // Focus management + keyboard nav while the sheet is open.
  useEffect(() => {
    if (active === null || !isNarrow) return;
    const el = sheetRef.current;
    el?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setActive(null);
        requestAnimationFrame(() => triggerRef.current?.focus());
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, isNarrow]);

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
        {/* Section Header — shared by both experiences */}
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

          <Reveal delay={0.06} className="mt-8 flex items-center gap-3.5">
            <span className="irg-rule w-10 text-warm-white/45" />
            <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-warm-white/80">
              Select an objective to discover the possibilities
            </span>
          </Reveal>
        </div>

        {/* ───────────────────────── DESKTOP ───────────────────────── */}
        {/* Horizontal editorial navigation + single shared content area. */}
        <div className="hidden lg:block">
          <div
            role="tablist"
            aria-label="Pre-construction objectives"
            className="mt-10 grid grid-cols-5 gap-3.5"
          >
            {OBJECTIVES.map((obj, i) => {
              const isSelected = active === i;
              const Icon = OBJECTIVE_ICONS[i] ?? HomeIcon;
              return (
                <button
                  key={obj.n}
                  type="button"
                  role="tab"
                  id={`tab-obj-${obj.n}`}
                  aria-selected={isSelected}
                  aria-controls="shared-objective-panel"
                  onClick={() => setActive(isSelected ? null : i)}
                  className={`group relative flex flex-col justify-between rounded-sm border px-5 py-5 text-left transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-warm-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-irg-navy-deep ${
                    isSelected
                      ? "border-warm-white/55 bg-irg-navy-card shadow-[0_10px_36px_-8px_rgba(0,0,0,0.55)]"
                      : "border-warm-white/12 bg-irg-navy-card/60 hover:-translate-y-1 hover:border-warm-white/35 hover:bg-irg-navy-card hover:shadow-[0_14px_36px_-10px_rgba(0,0,0,0.5)]"
                  }`}
                >
                  <div>
                    <span
                      className={`transition-colors duration-300 ${
                        isSelected
                          ? "text-warm-white"
                          : "text-warm-white/55 group-hover:text-warm-white/90"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="mt-5 block font-display text-[19px] font-light leading-snug tracking-tight text-warm-white">
                      {obj.title}
                    </span>
                  </div>

                  {/* Subtle downward indicator — infers expanding downward on click */}
                  <div className="mt-5 flex items-center justify-between pt-1">
                    <span
                      className={`h-px transition-all duration-300 ${
                        isSelected
                          ? "w-7 bg-warm-white/55"
                          : "w-4 bg-warm-white/20 group-hover:w-7 group-hover:bg-warm-white/45"
                      }`}
                    />
                    <span
                      aria-hidden
                      className={`flex h-5 w-5 items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? "text-warm-white"
                          : "text-warm-white/45 group-hover:translate-y-0.5 group-hover:text-warm-white"
                      }`}
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ${
                          isSelected ? "rotate-180" : ""
                        }`}
                      >
                        <path d="M3 5.5l4 4 4-4" />
                      </svg>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

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
                className="mt-8 overflow-hidden rounded-sm border border-warm-white/15 bg-warm-white/[0.04] p-10 backdrop-blur-sm"
              >
                <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.3fr_minmax(0,380px)]">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-warm-white/50">
                      <span>Objective {currentObj.n}</span>
                      <span className="h-1 w-1 rounded-full bg-warm-white/40" />
                      <span className="text-warm-white/70">{currentObj.title}</span>
                    </div>
                    <h3 className="mt-3.5 font-display text-[2rem] font-light leading-snug text-warm-white">
                      {currentObj.headline}
                    </h3>
                    <p className="mt-4 text-[15.5px] font-light leading-relaxed text-warm-white/75">
                      {currentObj.body}
                    </p>
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
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-warm-white/10">
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

        {/* ───────────────────────── MOBILE ───────────────────────── */}
        {/* Compact 2-col cards (5th spans full width); opens a bottom sheet. */}
        <div className="mt-8 lg:hidden">
          <div className="grid grid-cols-2 gap-2.5">
            {OBJECTIVES.map((obj, i) => {
              const isSelected = active === i;
              const isFifth = i === last;
              const Icon = OBJECTIVE_ICONS[i] ?? HomeIcon;
              return (
                <button
                  key={obj.n}
                  type="button"
                  ref={(el) => {
                    if (i === 0) triggerRef.current = el;
                  }}
                  aria-haspopup="dialog"
                  aria-expanded={isSelected}
                  onClick={() => setActive(isSelected ? null : i)}
                  className={`group relative flex flex-col overflow-hidden rounded-sm border px-4 pb-4 pt-4 text-left transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-warm-white/70 ${
                    isFifth ? "col-span-2" : ""
                  } ${
                    isSelected
                      ? "border-warm-white/55 bg-irg-navy-card"
                      : "border-warm-white/12 bg-irg-navy-card/60 active:bg-irg-navy-card"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span
                      className={`transition-colors duration-300 ${
                        isSelected
                          ? "text-warm-white"
                          : "text-warm-white/55 group-active:text-warm-white/90"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span
                      aria-hidden
                      className={`flex h-4 w-4 items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? "text-warm-white"
                          : "text-warm-white/45 group-active:text-warm-white/85"
                      }`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ${
                          isSelected ? "rotate-180" : ""
                        }`}
                      >
                        <path d="M3 5.5l4 4 4-4" />
                      </svg>
                    </span>
                  </span>
                  <span
                    className={`mt-4 font-display text-[17.5px] font-light leading-tight tracking-tight transition-colors duration-300 ${
                      isSelected ? "text-warm-white" : "text-warm-white"
                    }`}
                  >
                    {obj.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─────────────────── MOBILE BOTTOM SHEET ─────────────────── */}
      <AnimatePresence>
        {currentObj && isNarrow && (
          <>
            {/* Backdrop */}
            <motion.div
              aria-hidden
              onClick={() => {
                setActive(null);
                requestAnimationFrame(() => triggerRef.current?.focus());
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-irg-navy-deep/70 backdrop-blur-[2px] lg:hidden"
            />

            {/* Sheet */}
            <motion.div
              key={currentObj.n}
              ref={sheetRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-label={`${currentObj.title} — objective`}
              initial={reduce ? { opacity: 0 } : { y: "100%" }}
              animate={reduce ? { opacity: 1 } : { y: 0 }}
              exit={reduce ? { opacity: 0 } : { y: "100%" }}
              transition={{ type: "tween", duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 bottom-0 z-50 flex max-h-[90vh] flex-col overflow-hidden rounded-t-2xl bg-warm-white text-irg-navy outline-none lg:hidden"
              style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.5rem)" }}
            >
              {/* Drag indicator */}
              <div className="flex justify-center pt-2.5" aria-hidden>
                <span className="h-1 w-9 rounded-full bg-irg-navy/15" />
              </div>

              {/* Header: title + close */}
              <div className="flex items-start justify-between gap-4 px-5 pb-3 pt-3.5">
                <div className="min-w-0">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-irg-navy/55">
                    Objective {currentObj.n} of 05
                  </p>
                  <p className="mt-1 font-display text-[19px] font-light leading-tight text-irg-navy">
                    {currentObj.title}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActive(null);
                    requestAnimationFrame(() => triggerRef.current?.focus());
                  }}
                  aria-label="Close"
                  className="-mr-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-irg-navy/70 transition-colors hover:bg-irg-navy/[0.06] hover:text-irg-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-irg-navy/30"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    aria-hidden
                  >
                    <path d="M4.5 4.5l9 9M13.5 4.5l-9 9" />
                  </svg>
                </button>
              </div>

              {/* Scrollable content */}
              <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentObj.n}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h3 className="font-display text-[27px] font-light leading-[1.18] text-irg-navy">
                      {currentObj.headline}
                    </h3>
                    <p className="mt-3 text-[15px] font-light leading-relaxed text-irg-navy/75">
                      {currentObj.body}
                    </p>

                    <div className="mt-5 border-t border-irg-navy/12 pt-4">
                      <ul className="space-y-2.5">
                        {currentObj.points.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-3 text-[13.5px] font-light text-irg-navy/85"
                          >
                            <span className="mt-2 h-px w-3.5 shrink-0 bg-irg-navy/40" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-lg border border-irg-navy/10">
                      <img
                        src={currentObj.image}
                        alt={currentObj.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-irg-navy/15 via-transparent to-transparent"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer: prev / counter / next */}
              <div className="mt-2 flex items-center justify-between gap-3 border-t border-irg-navy/12 px-5 pt-3">
                <button
                  type="button"
                  onClick={goPrev}
                  className="flex items-center gap-1.5 text-[13px] font-medium uppercase tracking-[0.12em] text-irg-navy/70 transition-colors hover:text-irg-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-irg-navy/25 rounded-sm"
                  aria-label="Previous objective"
                >
                  <span aria-hidden className="text-base leading-none">
                    ←
                  </span>
                  Prev
                </button>

                <div className="flex items-center gap-1.5" aria-hidden>
                  {OBJECTIVES.map((o, i) => (
                    <span
                      key={o.n}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === active ? "w-4 bg-irg-navy" : "w-1 bg-irg-navy/25"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={goNext}
                  className="flex items-center gap-1.5 text-[13px] font-medium uppercase tracking-[0.12em] text-irg-navy/70 transition-colors hover:text-irg-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-irg-navy/25 rounded-sm"
                  aria-label="Next objective"
                >
                  Next
                  <span aria-hidden className="text-base leading-none">
                    →
                  </span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
