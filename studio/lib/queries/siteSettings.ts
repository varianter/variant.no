import { groq } from "next-sanity";

import {
  LANGUAGE_FIELD_FRAGMENT,
  PAGE_FRAGMENT,
  TRANSLATED_LINK_FRAGMENT,
  TRANSLATED_SLUG_VALUE_FRAGMENT,
} from "./pages";

//Brand Assets
export const BRAND_ASSETS_QUERY = groq`
  *[_type == "brandAssets" && _id == "brandAssets"][0]
`;

//Navigation Manager
export const NAV_QUERY = groq`
  *[_type == "navigationManager"][0]{
    ${LANGUAGE_FIELD_FRAGMENT},
    "main": main[] {
      ...,
      ${TRANSLATED_LINK_FRAGMENT}
    },
    "footer": footer[] {
      ...,
      linksAndContent[] {
        ...,
        ${TRANSLATED_LINK_FRAGMENT}
      },
      socialMediaLinks->{
        "_ref": ${TRANSLATED_SLUG_VALUE_FRAGMENT}
      }
    },
    "sidebar": sidebar[] {
      ...,
      ${TRANSLATED_LINK_FRAGMENT}
    }
  }
`;

export const LANDING_PAGE_REF_QUERY = groq`
  *[_type == "navigationManager"][0].setLanding._ref
`;

export const LANDING_PAGE_QUERY = groq`
  *[_type == "navigationManager"][0].setLanding -> {
    ${PAGE_FRAGMENT}
  }
`;

//Social Media Profiles
export const SOME_PROFILES_QUERY = groq`
  *[_type == "soMeLinksID" && _id == "soMeLinksID"][0]
`;

//Languages
export const LANGUAGES_QUERY = groq`
  *[_type == "languageSettings" && _id == "languageSettings"][0].languages
`;
export const DEFAULT_LANGUAGE_QUERY = groq`
  *[_type == "languageSettings" && _id == "languageSettings"][0].languages[default][0]
`;

//Default SEO
export const DEFAULT_SEO_QUERY = groq`
  *[_type == "seoFallback"][0]{
    seo {
      seoTitle,
      seoDescription,
      seoKeywords,
      "seoImageUrl": seoImage.asset->url
    }
  }
`;
