import { LinkType } from "studio/lib/interfaces/navigation";

export const homeLink = {
  _key: "return-home",
  _type: "link",
  linkTitle: "Return to home",
  linkType: LinkType.Internal,
  internalLink: {
    _ref: "",
  },
};

export const sharedCustomerCasesLink = {
  _key: "go-to-shared-studio-customer-cases",
  _type: "link",
  linkTitle: "Go to shared studio",
  linkType: LinkType.Internal,
  internalLink: { _ref: "shared/structure/customerCases" },
};
