import { groq } from "next-sanity";

export const NAV_QUERY = groq`
  *[_type == "navigationManager"]{
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
  }[1]
`;

export const LANDING_QUERY = groq`
  *[_type == "navigationManager" && _id == "navigationManager"][0].setLanding._ref
`;
