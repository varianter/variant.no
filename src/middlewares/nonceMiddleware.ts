import { NextResponse } from "next/server";

const generateNonce = () => {
  return Buffer.from(crypto.randomUUID()).toString("base64");
};

const contentSecurityPolicy = (nonce: string) => {
  // TODO: remove style-src 'unsafe-inline' when fixed https://github.com/vercel/next.js/discussions/54907
  const csp = `
    default-src 'self';
    connect-src 'self' https://variant.innocraft.cloud/ https://g.nav.no/api/v1/;
    script-src 'self' 'unsafe-inline' 'nonce-${nonce}' 'strict-dynamic' ${
      process.env.NODE_ENV !== "production" ? "'unsafe-eval'" : ""
    };
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https://cdn.sanity.io/ https://cdn-images-1.medium.com/ https://miro.medium.com/;
    media-src 'self';
    frame-src 'self' https://vercel.live/;
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self';
    object-src 'none';
  `;
  return csp.replace(/\s{2,}/g, " ").trim();
};

export function nonceMiddleware(response: NextResponse): NextResponse {
  const nonce = generateNonce();
  const csp = contentSecurityPolicy(nonce);

  response.headers.set("x-nonce", nonce);
  response.headers.set("Content-Security-Policy", csp);

  return response;
}
