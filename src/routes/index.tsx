import { createFileRoute } from "@tanstack/react-router";

import { AdvantageSection } from "@/components/irg/AdvantageSection";
import { AccessSection } from "@/components/irg/AccessSection";
import { ConversationSection } from "@/components/irg/ConversationSection";
import { Footer } from "@/components/irg/Footer";
import { Header } from "@/components/irg/Header";
import { Hero } from "@/components/irg/Hero";
import { IrgSection } from "@/components/irg/IrgSection";
import { HERO_IMAGE } from "@/components/irg/assets";
import { ObjectivesSection } from "@/components/irg/ObjectivesSection";
import { OpportunitiesSection } from "@/components/irg/OpportunitiesSection";
import { PeopleSection } from "@/components/irg/PeopleSection";
import { WhyMiamiSection } from "@/components/irg/WhyMiamiSection";
import { BuyWellSection } from "@/components/irg/BuyWellSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IRG · A Private Look at Miami Pre-Construction" },
      {
        name: "description",
        content:
          "A private briefing on Miami pre-construction real estate from International Realty Group. Understand the opportunity, the access, and the relationships that shape it.",
      },
      { property: "og:title", content: "IRG · A Private Look at Miami Pre-Construction" },
      {
        property: "og:description",
        content:
          "A private briefing on Miami pre-construction real estate from International Realty Group.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-warm-white font-body text-foreground">
      <Header />
      <main>
        <Hero />
        <AdvantageSection />
        <ObjectivesSection />
        <WhyMiamiSection />
        <AccessSection />
        <BuyWellSection />
        <IrgSection />
        <OpportunitiesSection />
        <PeopleSection />
        <ConversationSection />
      </main>
      <Footer />
    </div>
  );
}
