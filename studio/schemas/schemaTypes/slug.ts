import {
  SlugValidationContext,
  SlugValue,
  ValidationContext,
  defineField,
  isSlug,
} from "sanity";

import { apiVersion } from "studio/env";
import {
  buildDraftId,
  buildPublishedId,
  isPublished,
} from "studio/utils/documentUtils";

function isSlugUniqueAcrossAllDocuments(
  slug: string,
  { document, getClient }: SlugValidationContext,
) {
  if (document === undefined) {
    return true;
  }
  return getClient({ apiVersion }).fetch(
    "!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)",
    {
      draft: buildDraftId(document._id),
      published: buildPublishedId(document._id),
      slug,
    },
  );
}

/**
 Validate that slug has not been changed after initial publication
 */
async function validateSlugNotChangedAfterPublication(
  value: SlugValue | undefined,
  { document, getClient }: ValidationContext,
) {
  if (document === undefined || isPublished(document)) {
    return true;
  }
  const publishedDocument = await getClient({ apiVersion }).getDocument(
    buildPublishedId(document._id),
  );
  if (
    publishedDocument !== undefined &&
    "slug" in publishedDocument &&
    isSlug(publishedDocument.slug) &&
    publishedDocument.slug.current !== value?.current
  ) {
    return "Can not be changed after publication";
  }
  return true;
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
      "a human-readable and search engine optimized URL for the content. " +
      "Note that the slug can not be changed after publication, but alternative slugs can be defined via Redirects.",
    options: {
      source,
      maxLength: SLUG_MAX_LENGTH,
      slugify,
      isUnique: isSlugUniqueAcrossAllDocuments,
    },
    validation: (rule) =>
      rule
        .required()
        .custom(validateSlugNotChangedAfterPublication)
        .custom((value) => {
          if (value?.current === undefined) return true;
          return (
            encodeURIComponent(value.current) === value.current ||
            "Slug can only consist of latin letters (a-z, A-Z), digits (0-9), hyphen (-), underscore (_), full stop (.) and tilde (~)"
          );
        }),
    readOnly: ({ document }) => {
      /*
        make slugs read-only after initial publish
        to avoid breaking shared links

        if document is already draft, this is handled through validation instead

        if new slugs are needed, redirects can be used instead
       */
      return document !== undefined && isPublished(document);
    },
  });
}

const pageSlug = createSlugField("page");
const titleSlug = createSlugField("basicTitle");

export { pageSlug, titleSlug };
