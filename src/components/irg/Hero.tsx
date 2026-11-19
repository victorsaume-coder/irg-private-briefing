import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { HERO_IMAGE } from "./assets";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[92vh] overflow-hidden bg-irg-navy-deep">
      <motion.div style={reduce ? {} : { y }} className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Miami skyline and residential towers at blue hour"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-irg-navy-deep/85 via-irg-navy-deep/35 to-irg-navy-deep/55" />
      </motion.div>

      <motion.div
        style={reduce ? {} : { opacity }}
        className="relative mx-auto flex min-h-[92vh] max-w-[1400px] flex-col justify-end px-6 pb-24 pt-32 lg:px-12"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="irg-eyebrow text-warm-white/70"
        >
          IRG Private Briefing
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-4xl font-display text-[2.6rem] font-light leading-[1.04] text-warm-white sm:text-6xl lg:text-[4.4rem]"
        >
          A Private Look at Miami{" "}
          <span className="italic text-warm-white/90">Pre-Construction</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-warm-white/85"
        >
          Understand how buying before completion works, where the advantage can exist, and how IRG
          gives selected clients access to some of Miami's most relevant new developments.
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-10 max-w-xl border-l border-warm-white/25 pl-5 text-[15px] font-light leading-relaxed text-warm-white/65"
        >
          Pre-construction is not simply another way to buy real estate. Timing, access, capital
          structure and project selection can fundamentally change the opportunity.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="mt-14 flex items-center gap-3 text-[12px] uppercase tracking-irg text-warm-white/55"
        >
          <span>Explore the briefing</span>
          <span className="block h-px w-10 bg-warm-white/40" />
          <span>↓</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
