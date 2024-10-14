import type { MetadataRoute } from "next";

import { client } from "studio/lib/client";
import {
  DocumentTranslatedSitemapData,
  FieldTranslatedSitemapData,
  SitemapBaseData,
  UntranslatedSitemapData,
} from "studio/lib/interfaces/sitemap";
import { LanguageObject } from "studio/lib/interfaces/supportedLanguages";
import { LEGAL_DOCUMENTS_SITEMAP_QUERY } from "studio/lib/queries/admin";
import { PAGES_SITEMAP_QUERY } from "studio/lib/queries/pages";
import {
  LANDING_PAGE_SITEMAP_QUERY,
  LANGUAGES_QUERY,
} from "studio/lib/queries/siteSettings";
import {
  COMPENSATIONS_PAGE_SITEMAP_QUERY,
  CUSTOMER_CASES_PAGE_SITEMAP_QUERY,
} from "studio/lib/queries/specialPages";
import { token as studioToken } from "studio/lib/token";
import { sharedClient } from "studioShared/lib/client";
import { CUSTOMER_CASES_SITEMAP_QUERY } from "studioShared/lib/queries/customerCases";
import { token as sharedToken } from "studioShared/lib/token";

import { readBaseUrl } from "./env";

const clientWithToken = client.withConfig({ token: studioToken });
const sharedClientWithToken = sharedClient.withConfig({ token: sharedToken });

export const dynamic = "force-dynamic";
export const fetchCache = "default-no-store";

type RelativeSiteMap = {
  relativeUrl: string;
  lastModified: Date;
}[];

async function landingPageSitemap(): Promise<RelativeSiteMap> {
  const languages = await clientWithToken.fetch<LanguageObject[] | null>(
    LANGUAGES_QUERY,
  );
  const page = await clientWithToken.fetch<SitemapBaseData | null>(
    LANDING_PAGE_SITEMAP_QUERY,
  );
  if (languages !== null && page !== null) {
    const siteMap = languages.map((language) => ({
      relativeUrl: language.id,
      lastModified: new Date(page._updatedAt),
    }));
    siteMap.push({
      relativeUrl: "",
      lastModified: new Date(page._updatedAt),
    });
    return siteMap;
  }
  return [];
}

async function compensationsPageSitemap(): Promise<RelativeSiteMap> {
  const page = await clientWithToken.fetch<FieldTranslatedSitemapData | null>(
    COMPENSATIONS_PAGE_SITEMAP_QUERY,
  );
  if (page?.slug !== undefined) {
    return page.slug.map((slug) => {
      return {
        relativeUrl: `${slug._key}/${slug.value}`,
        lastModified: new Date(page._updatedAt),
      };
    });
  }
  return [];
}

async function dynamicPagesSitemap(): Promise<RelativeSiteMap> {
  const pages = await clientWithToken.fetch<UntranslatedSitemapData[] | null>(
    PAGES_SITEMAP_QUERY,
  );
  if (pages !== null) {
    return pages.map((page) => ({
      relativeUrl: page.slug.current,
      lastModified: new Date(page._updatedAt),
    }));
  }
  return [];
}

async function customerCasesSitemap(): Promise<RelativeSiteMap> {
  const page = await clientWithToken.fetch<UntranslatedSitemapData | null>(
    CUSTOMER_CASES_PAGE_SITEMAP_QUERY,
  );
  if (page !== null) {
    const siteMap = [
      {
        relativeUrl: page.slug.current,
        lastModified: new Date(page._updatedAt),
      },
    ];
    const cases = await sharedClientWithToken.fetch<
      DocumentTranslatedSitemapData[] | null
    >(CUSTOMER_CASES_SITEMAP_QUERY);
    if (cases !== null) {
      siteMap.push(
        ...cases.map((customerCase) => ({
          relativeUrl: `${customerCase.language}/${page.slug.current}/${customerCase.slug.current}`,
          lastModified: new Date(customerCase._updatedAt),
        })),
      );
    }
    return siteMap;
  }
  return [];
}

async function legalDocumentsSitemap(): Promise<RelativeSiteMap> {
  const pages = await clientWithToken.fetch<
    DocumentTranslatedSitemapData[] | null
  >(LEGAL_DOCUMENTS_SITEMAP_QUERY);
  if (pages !== null) {
    return pages.map((page) => ({
      relativeUrl: `${page.language}/${page.slug.current}`,
      lastModified: new Date(page._updatedAt),
    }));
  }
  return [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrlResult = readBaseUrl();
  if (!baseUrlResult.ok) {
    console.error("Failed to generate sitemap:", baseUrlResult.error);
    return [];
  }
  const baseUrl = baseUrlResult.value;
  return (
    await Promise.all([
      landingPageSitemap(),
      compensationsPageSitemap(),
      dynamicPagesSitemap(),
      customerCasesSitemap(),
      legalDocumentsSitemap(),
    ])
  )
    .flat()
    .map(({ lastModified, relativeUrl }) => ({
      url: new URL(relativeUrl, baseUrl).toString(),
      lastModified,
    }));
}
