import { LinkType } from "studio/lib/interfaces/navigation";
import { CallToActionSection } from "studio/lib/interfaces/pages";

export const ctaMockData: CallToActionSection = {
  _key: "9410f9860a00",
  _type: "ctaSection",
  basicTitle: "Ready to begin your climate journey?",
  callToActions: [
    {
      _type: "",
      _key: "786eccc51909",
      linkTitle: "Get started",
      linkType: LinkType.External,
      newTab: false,
      url: "https://dashboard.energi.ai/auth/registration",
    },
    {
      _type: "",
      _key: "8aba2dc3497b",
      internalLink: {
        _ref: "696ab97f-4830-4812-9aa3-4050196fab58",
      },
      linkTitle: "Book a demo",
      linkType: LinkType.Internal,
      newTab: false,
    },
    {
      _type: "",
      _key: "0a6e47ebca0e",
      internalLink: {
        _ref: "696ab97f-4830-4812-9aa3-4050196fab58",
      },
      linkTitle: "Partner with us",
      linkType: LinkType.Internal,
      newTab: false,
    },
  ],
};
