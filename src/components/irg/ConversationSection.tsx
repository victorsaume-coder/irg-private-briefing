import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { INTERIOR_IMAGE, WHATSAPP_URL } from "./assets";

export function ConversationSection() {
  return (
    <section className="relative overflow-hidden bg-irg-navy-deep px-6 py-28 text-warm-white lg:px-12 lg:py-36">
      <div className="absolute inset-0 opacity-20">
        <img
          src={INTERIOR_IMAGE}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-irg-navy-deep/60" />
      </div>

      <div className="relative mx-auto max-w-[1100px] text-center">
        <Reveal>
          <p className="irg-eyebrow text-warm-white/55">Open the Conversation</p>
          <h2 className="mx-auto mt-7 max-w-3xl font-display text-4xl font-light leading-[1.08] text-warm-white lg:text-[3.4rem]">
            Some opportunities are better understood in conversation.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[17px] font-light leading-relaxed text-warm-white/75">
            If something in this briefing caught your attention, let's talk. We can walk through the
            market, the opportunities we are currently seeing and whether any of them deserve a
            closer look for you.
          </p>

          <div className="mt-12 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-warm-white px-8 py-4 text-[14px] font-medium tracking-wide text-irg-navy-deep transition-all duration-300 hover:bg-warm-white/90 hover:shadow-[0_20px_60px_-20px_rgba(255,255,255,0.35)]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Talk With Victor &amp; Luis on WhatsApp
            </a>
          </div>

          <p className="mt-10 text-[13px] font-light text-warm-white/45">
            Continuing a private conversation — not entering a sales funnel.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
