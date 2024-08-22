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
