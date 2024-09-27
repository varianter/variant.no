import { NextRequest } from "next/server";

import { languageMiddleware } from "./middlewares/languageMiddleware";
import { redirectMiddleware } from "./middlewares/redirectMiddleware";

export async function middleware(request: NextRequest) {
  const response = await redirectMiddleware(request);
  if (response !== undefined) {
    return response;
  }
  return languageMiddleware(request);
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
