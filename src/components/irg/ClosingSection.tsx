import { Reveal } from "./Reveal";
import { LOGO_DARK } from "./assets";

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden bg-irg-navy-deep px-6 py-32 text-warm-white lg:px-12 lg:py-44">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #faf9f6 1px, transparent 1px), linear-gradient(to bottom, #faf9f6 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-irg-navy-card/35 blur-[160px]" />

      <div className="relative mx-auto flex max-w-[1000px] flex-col items-center text-center">
        <Reveal>
          <img
            src={LOGO_DARK}
            alt="International Realty Group"
            className="mx-auto h-12 w-auto object-contain opacity-90 lg:h-14"
            loading="lazy"
          />
          <div className="mx-auto mt-12 h-px w-16 bg-warm-white/30" />
          <h2 className="mx-auto mt-12 max-w-2xl font-display text-4xl font-light leading-[1.1] text-warm-white sm:text-5xl lg:text-[3.4rem]">
            Let's Explore What's Possible.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
