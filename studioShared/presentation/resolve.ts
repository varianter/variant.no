import { groq } from "next-sanity";
import type { SanityDocument, Slug } from "sanity";

import { client } from "studio/lib/client";

const CUSTOMER_CASES_PAGE_SLUG_QUERY = groq`
  *[
    _type == "customerCasesPage" &&
    defined(slug[_key == $language][0].value)
  ][0].slug[_key == $language][0].value
`;

const localUrl = "http://localhost:3000";
const secret = process.env.NEXT_PUBLIC_SANITY_STUDIO_PREVIEW_SECRET || "";

export const previewDomains = ["variant.no", "variant.se"] as const;
export type PreviewDomain = (typeof previewDomains)[number];
export const previewLocales = ["no", "en", "se"] as const;
export type PreviewLocale = (typeof previewLocales)[number];

const customerCasesPageSlugFallbacks: Record<PreviewLocale, string> = {
  no: "arbeid",
  en: "cases",
  se: "cases",
};

interface InternationalizedSlug {
  _key: string;
  value: string;
}

function getSlug(
  slug: Slug | string | InternationalizedSlug[] | undefined | null,
  locale: PreviewLocale,
): string {
  if (!slug) return "";

  if (Array.isArray(slug)) {
    const localizedSlug = slug.find((item) => item._key === locale);
    return localizedSlug?.value || "";
  }

  if (typeof slug === "object" && "current" in slug && slug.current) {
    return slug.current;
  }

  return typeof slug === "string" ? slug : "";
}

function getOrigin(domain: PreviewDomain): string {
  if (
    typeof window !== "undefined" &&
    window.location.hostname === "localhost"
  ) {
    return localUrl;
  }

  return `https://www.${domain}`;
}

export async function resolveCustomerCaseUrl(
  doc: SanityDocument,
  domain: PreviewDomain,
  locale: PreviewLocale,
): Promise<string> {
  const caseSlug = getSlug(
    doc.slug as Slug | string | InternationalizedSlug[] | undefined,
    locale,
  );
  const pageSlug = await client.fetch<string | null>(
    CUSTOMER_CASES_PAGE_SLUG_QUERY,
    { language: locale },
    { perspective: "published" },
  );
  const customerCasesPageSlug =
    pageSlug || customerCasesPageSlugFallbacks[locale];
  const path = [customerCasesPageSlug, caseSlug].filter(Boolean).join("/");
  const previewUrl = new URL(getOrigin(domain));

  previewUrl.pathname = doc._id.startsWith("drafts.")
    ? "/api/draft"
    : "/api/disable-draft";
  previewUrl.searchParams.set("secret", secret);
  previewUrl.searchParams.set("locale", locale);
  if (path) previewUrl.searchParams.set("slug", path);

  return previewUrl.toString();
}
