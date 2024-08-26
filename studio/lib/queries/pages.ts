import { groq } from "next-sanity";

// TODO: set all sectons.ref's to slug.current
const SECTIONS_FRAGMENT = groq`
  sections[]{
    ...,
    _type == "hero" => {
      ...,
      callToActions[] {
        ...,
        linkType == "internal" => {
          ...,
          "internalLink": internalLink->{
            "_ref": slug.current
          }
        }
      }
    },
    _type == "article" => {
      ...,
      link {
        ...,
        linkType == "internal" => {
          ...,
          "internalLink": internalLink->{
            "_ref": slug.current
          }
        }
      }
    },
    _type == "callout" => {
      ...,
      link {
        ...,
        linkType == "internal" => {
          ...,
          "internalLink": internalLink->{
            "_ref": slug.current
          }
        }
      }
    },
       _type == "ctaSection" => {
      ...,
      callToActions[] {
        ...,
        linkType == "internal" => {
          ...,
          "internalLink": internalLink->{
            "_ref": slug.current
          }
        }
      }
    },
  }
`;

export const PAGE_QUERY = groq`
  *[_type == "pageBuilder" && _id == $id][0]{
    ...,
    ${SECTIONS_FRAGMENT}
  }
`;

export const SEO_PAGE_QUERY = groq`
  *[_type == "pageBuilder" && _id == $id][0]{
        "title": seo.seoTitle,
        "description": seo.seoDescription,
        "imageUrl": seo.seoImage.asset->url
}`;

export const SLUG_QUERY = groq`
  *[_type == "pageBuilder" && slug.current == $slug][0]{
    ...,
    ${SECTIONS_FRAGMENT}
  }
`;

export const SEO_SLUG_QUERY = groq`
  *[_type == "pageBuilder" && slug.current == $slug][0]{
        "title": seo.seoTitle,
        "description": seo.seoDescription,
        "imageUrl": seo.seoImage.asset->url
}`;

export const BLOG_PAGE_QUERY = groq`
  *[_type == "blog" && slug.current == $slug][0]
`;

export const SALARY_AND_BENEFITS_PAGE_QUERY = groq`
  *[_type == "salaryAndBenefits" && slug.current == $slug][0]
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
