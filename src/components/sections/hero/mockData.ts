import { HeroSection } from "studio/lib/payloads/pages";
import { LinkType } from "studio/lib/payloads/navigation";

export const mockHeroSection: HeroSection = {
  _key: "",
  _type: "hero",
  basicTitle: "Effortless Climate Action",
  description:
    "Understand your carbon footprint, identify opportunities for reducing emissions, and reach your sustainability goals.",
  callToActions: [
    {
      _key: "1",
      url: "/how-it-works",
      linkTitle: "See how it works",
      linkType: LinkType.Internal,
      newTab: false,
      _type: "",
    },
    {
      _key: "2",
      url: "/get-started",
      linkTitle: "Get started",
      linkType: LinkType.Internal,
      newTab: false,
      _type: "",
    },
  ],
};
