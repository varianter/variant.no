import { groq } from "next-sanity";

import { brandAssetsID } from "studio/schemas/documents/siteSettings/brandAssets";

//Brand Assets
export const BRAND_ASSETS_QUERY = groq`
  *[_type == "${brandAssetsID}" && _id == "${brandAssetsID}"][0]
`;

//Navigation Manager
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

//Social Media Profiles
export const SOME_PROFILES_QUERY = groq`
  *[_type == "soMeLinksID" && _id == "soMeLinksID"][0]
`;

//Languages
export const LANGUAGES_QUERY = groq`*[_type == "languageSettings" && _id == "languageSettings"][0].languages`;
export const DEFAULT_LANGUAGE_QUERY = groq`*[_type == "languageSettings" && _id == "languageSettings"][0].languages[default][0]`;

//Default SEO
export const DEFAULT_SEO_QUERY = groq`*[_type == "seoFallback"]{
    seo {
      seoTitle,
      seoDescription,
      seoKeywords,
      "seoImageUrl": seoImage.asset->url
    }
  }[0]`;
