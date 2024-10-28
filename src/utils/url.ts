import { NextRequest } from "next/server";

export function absoluteUrlFromNextRequest(
  request: NextRequest,
  pathname?: string,
) {
  /**
   * useful for middleware redirects where absolute url is required
   * https://nextjs.org/docs/messages/middleware-relative-urls#possible-ways-to-fix-it
   */
  const absoluteUrl = request.nextUrl.clone();
  if (pathname !== undefined) {
    absoluteUrl.pathname = pathname;
  }
  return absoluteUrl;
}

const FALLBACK_DOMAIN = "variant.no";

/**
 * attempts to extract the relevant Variant domain, without subdomains, from the given hostname
 *
 * ```
 * 'v3.variant.no' -> 'variant.no'
 *
 * 'variant.se' -> 'variant.se'
 *
 * 'example.org' -> [fallback]
 *
 * 'localhost' -> [fallback]
 *
 * null -> [fallback]
 * ```
 *
 * @param hostname
 */
export function domainFromHostname(hostname: string | null): string {
  if (hostname === null) {
    return FALLBACK_DOMAIN;
  }
  const matches = hostname.match(/^(?:[a-z0-9-]+\.)*?(variant\.[a-z]{2,})$/i);
  if (!matches) {
    return FALLBACK_DOMAIN;
  }
  return matches[1];
}
