import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: ["/studio", "/shared", "/api"],
    },
    sitemap: new URL("sitemap.xml", process.env.NEXT_PUBLIC_URL).toString(),
  };
}
