import { defineField, SlugValidationContext } from "sanity";
import { isPublished } from "../../utils/documentUtils";

async function isSlugUniqueAcrossAllDocuments(
  slug: string,
  context: SlugValidationContext,
) {
  const { document, getClient } = context;
  const client = getClient({ apiVersion: "2022-12-07" });
  const id = document?._id.replace(/^drafts\./, "");
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
  };
  const SLUG_QUERY =
    "!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)";

  const result = await client.fetch(SLUG_QUERY, params);
  return result;
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
      slugify: (input) =>
        input
          .toLowerCase()
          // replace æøå according to https://sprakradet.no/spraksporsmal-og-svar/ae-o-og-a-i-internasjonal-sammenheng/
          .replace(/[æ,å]/g, "a")
          .replace(/ø/g, "o")
          .replace(/[^a-zA-Z0-9-_.~\s]/g, "") // remove non-whitespace URL-unsafe chars (section 2.3 in https://www.ietf.org/rfc/rfc3986.txt)
          .trim()
          .replace(/\s+/g, "-")
          .slice(0, SLUG_MAX_LENGTH),
      isUnique: isSlugUniqueAcrossAllDocuments,
    },
    validation: (rule) =>
      rule.required().custom((value) => {
        if (value?.current === undefined) return true;
        return (
          encodeURIComponent(value.current) === value.current ||
          "Slug can only consist of latin letters (a-z, A-Z), digits (0-9), hyphen (-), underscore (_), full stop (.) and tilde (~)"
        );
      }),
    readOnly: (ctx) => {
      /*
        make slugs read-only after initial publish
        to avoid breaking shared links

        if new slugs are needed, redirects can be used instead
       */
      return ctx.document !== undefined && isPublished(ctx.document);
    },
  });
}

const pageSlug = createSlugField("page");
const titleSlug = createSlugField("basicTitle");

export { pageSlug, titleSlug };
