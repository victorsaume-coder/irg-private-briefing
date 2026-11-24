import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "./assets";

export function ConversationSection() {
  return (
    <section className="relative overflow-hidden bg-[#0d1622] px-6 py-28 text-[#faf9f6] lg:px-12 lg:py-36">
      {/* Editorial geometric grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #faf9f6 1px, transparent 1px), linear-gradient(to bottom, #faf9f6 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#1e344f]/25 blur-[140px]" />

      <div className="relative mx-auto max-w-[1100px] text-center">
        <Reveal>
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-[#faf9f6]/40" />
            <p className="irg-eyebrow text-[#faf9f6]/70">Open the Conversation</p>
            <span className="h-px w-6 bg-[#faf9f6]/40" />
          </div>

          <h2 className="mx-auto mt-7 max-w-3xl font-display text-4xl font-light leading-[1.08] text-[#faf9f6] sm:text-5xl lg:text-[3.4rem]">
            Some opportunities are better understood in conversation.
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-[17px] font-light leading-relaxed text-[#faf9f6]/80">
            If something in this briefing caught your attention, let's talk. We can walk through the
            market, the opportunities we are currently seeing and whether any of them deserve a
            closer look for you.
          </p>

          <div className="mt-12 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#faf9f6] px-9 py-4 text-[14px] font-medium tracking-wide text-[#0d1622] transition-all duration-300 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] active:scale-[0.99]"
            >
              <WhatsAppIcon className="h-5 w-5 fill-[#0d1622] text-[#0d1622]" />
              Talk With Victor &amp; Luis on WhatsApp
            </a>
          </div>

          <p className="mt-10 text-[13px] font-light text-[#faf9f6]/50">
            Continuing a private conversation — not entering a sales funnel.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
