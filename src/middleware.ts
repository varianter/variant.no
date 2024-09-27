import { NextRequest } from "next/server";

import { languageMiddleware } from "./middlewares/languageMiddleware";
import { redirectMiddleware } from "./middlewares/redirectMiddleware";

export async function middleware(request: NextRequest) {
  const res = await redirectMiddleware(request);
  if (res !== undefined) {
    return res;
  }
  return languageMiddleware(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
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
