import { defineField, SlugValidationContext } from "sanity";

async function isSlugUniqueAcrossAllDocuments(
  slug: string,
  context: SlugValidationContext
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

function createSlugField(source: string) {
  return defineField({
    type: "slug",
    name: "slug",
    title: "URL Path (slug)",
    description:
      "Enter a unique URL path for the page. This path will be used in the website's address bar. A URL path, also known as a slug, is a URL-friendly version of the page title, used to create a human-readable and search engine optimized URL for the content.",
    options: {
      source,
      maxLength: 200,
      slugify: (input) =>
        input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      isUnique: isSlugUniqueAcrossAllDocuments,
    },
    validation: (Rule) => Rule.required(),
  });
}

const pageSlug = createSlugField("page");
const blogSlug = createSlugField("basicTitle");
const legalSlug = createSlugField("basicTitle");

export { pageSlug, blogSlug, legalSlug };
