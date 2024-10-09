import { groq } from "next-sanity";

export const LANGUAGE_FIELD_FRAGMENT = groq`
  "language": $language
`;

export function translatedFieldFragment(fieldName: string) {
  return groq`${fieldName}[_key == $language][0].value`;
}

export const TRANSLATED_LINK_TITLE_FRAGMENT = groq`
  "linkTitle": ${translatedFieldFragment("linkTitle")}
`;

export const TRANSLATED_SLUG_VALUE_FRAGMENT = groq`
  select(
    slug._type == "slug" => slug.current,
    ${translatedFieldFragment("slug")}
  )
`;

export const TRANSLATED_INTERNAL_LINK_FRAGMENT = groq`
    ...select(linkType == "internal" => {
      "internalLink": internalLink->{
        "_ref": ${TRANSLATED_SLUG_VALUE_FRAGMENT}
      }
    })
`;

export const TRANSLATED_LINK_FRAGMENT = groq`
    ${LANGUAGE_FIELD_FRAGMENT},
    ${TRANSLATED_LINK_TITLE_FRAGMENT},
    ${TRANSLATED_INTERNAL_LINK_FRAGMENT}
`;

const SECTIONS_FRAGMENT = groq`
  sections[]{
    ...,
    _type == "hero" => {
      ...,
      callToActions[] {
        ...,
        ${TRANSLATED_LINK_FRAGMENT}
      }
    },
    _type == "article" => {
      ...,
      link {
        ...,
        ${TRANSLATED_LINK_FRAGMENT}
      }
    },
    _type == "callout" => {
      ...,
      link {
        ...,
        ${TRANSLATED_LINK_FRAGMENT}
      }
    },
    _type == "ctaSection" => {
      ...,
      callToActions[] {
        ...,
        ${TRANSLATED_LINK_FRAGMENT}
      }
    }
  }
`;

export const PAGE_FRAGMENT = groq`
  ...,
  ${LANGUAGE_FIELD_FRAGMENT},
  ${SECTIONS_FRAGMENT}
`;

export const PAGE_QUERY = groq`
  *[_type == "pageBuilder" && _id == $id][0]{
    ${PAGE_FRAGMENT}
  }
`;

export const PAGE_SEO_QUERY = groq`
  *[_type == "pageBuilder" && _id == $id][0]{
      "title": seo.seoTitle,
      "description": seo.seoDescription,
      "imageUrl": seo.seoImage.asset->url
  }
`;

export const PAGE_BY_SLUG_QUERY = groq`
  *[_type == "pageBuilder" && slug.current == $slug][0]{
    ${PAGE_FRAGMENT}
  }
`;

export const SEO_SLUG_QUERY = groq`
  *[defined(seo) && slug.current == $slug][0]{
      "title": seo.seoTitle,
      "description": seo.seoDescription,
      "imageUrl": seo.seoImage.asset->url
  }
`;

export const BLOG_PAGE_QUERY = groq`
  *[_type == "blog" && slug.current == $slug][0]
`;

export const POSTS_QUERY = groq`
  *[_type == "blogPosts" && date < now()] | order(date desc)[0..11]
`;

export const COUNT_POSTS_QUERY = groq`
  count(*[_type == "blogPosts" && date < now() && (!defined($category) || category == $category)])
`;

export const CATEGORIZED_POSTS_QUERY = groq`
  *[_type == "blogPosts" && date < now() && (!defined($category) || category == $category)] | order(date desc)[$start..$end]
`;

export const POST_SLUG_QUERY = groq`
  *[_type == "blogPosts" && slug.current == $id][0]
`;

export const SEO_POST_SLUG_QUERY = groq`
  *[_type == "blogPosts" && slug.current == $id][0]{
      "title": basicTitle,
      "description": richText,
      "imageUrl": image.asset->url
  }
`;

export const MORE_POST_PREVIEW = groq`
  *[_type == "blogPosts"] | order(_createdAt desc)[0..2]
`;
