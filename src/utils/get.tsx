import { ILink, LinkType } from "studio/lib/payloads/navigation";

const hash = "#";

export const getHref = (link: ILink): string => {
  switch (link?.linkType) {
    case LinkType.Internal:
      if (link.internalLink?._ref) {
        try {
          return `/${link.internalLink._ref}${link.anchor ? `#${link.anchor}` : ""}`;
        } catch (error) {
          console.error("Error fetching page:", error);
          return hash;
        }
      }
      return hash;
    case LinkType.External:
      return link.url || hash;
    case LinkType.Email:
      return `mailto:${link.email}`;
    case LinkType.Phone:
      return `tel:${link.phone}`;
    default:
      return hash;
  }
};
