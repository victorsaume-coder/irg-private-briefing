import { createFileRoute } from "@tanstack/react-router";
import { PrivateBriefing } from "@/components/irg/PrivateBriefing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IRG Private Briefing | A Different Way Into Miami" },
      {
        name: "description",
        content:
          "A personal introduction to Miami pre-construction. Explore the advantage of timing, private access and a considered selection of residences with International Realty Group.",
      },
      { property: "og:title", content: "IRG Private Briefing | A Different Way Into Miami" },
      {
        property: "og:description",
        content:
          "The right residence. The right moment. A private perspective on Miami pre-construction with Victor Saume, Luis Victor Villalobos and International Realty Group.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://private-brief.irg-realestate.com/images/hero.webp",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "https://private-brief.irg-realestate.com/images/hero.webp",
      },
    ],
  }),
  component: PrivateBriefing,
});
