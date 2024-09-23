import { groq } from "next-sanity";

export const NAV_QUERY = groq`
  *[_type == "navigationManager"][0]{
    "main": main[] {
      ...,
      linkType == "internal" => {
        ...,
        "internalLink": internalLink->{
          "_ref": slug.current
        }
      }
    },
    "footer": footer[] {
      ...,
      linksAndContent[] {
        ...,
        linkType == "internal" => {
          ...,
          "internalLink": internalLink->{
            "_ref": slug.current
          }
        }
      },
      socialMediaLinks->{
        "_ref": slug.current
      }
    },
    "sidebar": sidebar[] {
      ...,
      linkType == "internal" => {
        ...,
        "internalLink": internalLink->{
          "_ref": slug.current
        }
      }
    }
  }
`;

export const LANDING_PAGE_REF_QUERY = groq`
  *[_type == "navigationManager"][0].setLanding._ref
`;

export const LANDING_PAGE_QUERY = groq`
  *[_type == "navigationManager"][0].setLanding ->
`;
