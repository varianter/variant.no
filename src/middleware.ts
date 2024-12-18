import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";
import { languageMiddleware } from "./middlewares/languageMiddleware";

export async function middleware(request: NextRequest) {
  await languageMiddleware(request);
  return createMiddleware(routing)(request);
}

export const config = {
  matcher: [
    /*
     * Exclude request paths starting with:
     * - api (API routes)
     * - sw.js (Service Worker)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - _assets (asset files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - studio, shared (Sanity studios)
     */
    "/((?!api|sw.js|_next/static|_next/image|_assets|favicon.ico|sitemap.xml|robots.txt|studio|shared).*)",
  ],
};
