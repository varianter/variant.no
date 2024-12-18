import { groq } from "next-sanity";
import { SlugValidationContext, defineField } from "sanity";

import { apiVersion } from "studio/env";
import { buildDraftId, buildPublishedId } from "studio/utils/documentUtils";

export function isSlugUniqueAcrossDocuments(
  slug: string,
  { document, getClient }: SlugValidationContext,
  documentType?: string,
) {
  if (document === undefined) {
    return true;
  }
  const language = "language" in document ? document.language : undefined;
  const isUniqueQuery = groq`
    count(*[
      !(_id in [$draft, $published])
      && slug.current == $slug
      ${documentType !== undefined ? `&& _type == $documentType` : ""}
      ${language !== undefined ? " && language == $language" : ""}
    ]) == 0
  `;
  return getClient({ apiVersion }).fetch<boolean>(isUniqueQuery, {
    draft: buildDraftId(document._id),
    published: buildPublishedId(document._id),
    slug,
    ...(documentType !== undefined ? { documentType } : {}),
    ...(language !== undefined ? { language } : {}),
  });
}

function slugify(input: string): string {
  return (
    input
      .toLowerCase()
      // replace æøå according to https://sprakradet.no/spraksporsmal-og-svar/ae-o-og-a-i-internasjonal-sammenheng/
      .replace(/[æ,å]/g, "a")
      .replace(/ø/g, "o")
      // remove non-whitespace URL-unsafe chars (section 2.3 in https://www.ietf.org/rfc/rfc3986.txt)
      .replace(/[^a-zA-Z0-9-_.~\s]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .slice(0, SLUG_MAX_LENGTH)
  );
}

const SLUG_MAX_LENGTH = 200;

function createSlugField(source: string) {
  return defineField({
    type: "slug",
    name: "slug",
    title: "URL Path (slug)",
    description:
      "Enter a unique URL path for the page. This path will be used in the website's address bar. " +
      "A URL path, also known as a slug, is a URL-friendly version of the page title, used to create " +
      "a human-readable and search engine optimized URL for the content. ",
    options: {
      source,
      maxLength: SLUG_MAX_LENGTH,
      slugify,
      isUnique: isSlugUniqueAcrossDocuments,
    },
    validation: (rule) =>
      rule.required().custom((value) => {
        if (value?.current === undefined) return true;
        return (
          encodeURIComponent(value.current) === value.current ||
          "Slug can only consist of latin letters (a-z, A-Z), digits (0-9), hyphen (-), underscore (_), full stop (.) and tilde (~)"
        );
      }),
  });
}

const pageSlug = createSlugField("page");
const titleSlug = createSlugField("basicTitle");

export { pageSlug, titleSlug };
