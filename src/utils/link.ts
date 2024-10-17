import { ILink, LinkType } from "studio/lib/interfaces/navigation";

const hash = "#";

export const getHref = (link: ILink): string => {
  switch (link.linkType) {
    case LinkType.Internal:
      if (link.internalLink?._ref !== undefined) {
        return `${link.internalLink._ref}${link.anchor ? `#${link.anchor}` : ""}`;
      }
      return hash;
    case LinkType.External:
      return link.url || hash;
    case LinkType.Email:
      return `mailto:${link.email}`;
    case LinkType.Phone:
      return `tel:${link.phone}`;
  }
};
