import { LinkType } from "studio/lib/interfaces/navigation";

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
  internalLink: { _ref: "studio" },
};

export const sharedStudioLink = {
  _key: "go-to-shared-studio",
  _type: "link",
  linkTitle: "Go to shared studio",
  linkType: LinkType.Internal,
  internalLink: { _ref: "shared" },
};

export const sharedCustomerCasesLink = {
  _key: "go-to-shared-studio-customer-cases",
  _type: "link",
  linkTitle: "Go to shared studio",
  linkType: LinkType.Internal,
  internalLink: { _ref: "shared/structure/customerCases" },
};
