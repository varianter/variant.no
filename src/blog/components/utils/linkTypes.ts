import { LinkType } from "studio/lib/payloads/navigation";

export const homeLink = {
  _key: "return-home",
  _type: "link",
  linkTitle: "Return to home",
  linkType: LinkType.Internal,
  internalLink: {
    _ref: "/",
  },
};

export const studioLink = {
  _key: "go-to-studio",
  _type: "link",
  linkTitle: "Go to studio",
  linkType: LinkType.Internal,
  internalLink: { _ref: "/studio" },
};
