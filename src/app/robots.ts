import type { MetadataRoute } from "next";

import { readBaseUrl } from "./env";

export default function robots(): MetadataRoute.Robots {
  const robotsFile: MetadataRoute.Robots = {
    rules: {
      userAgent: "*",
      disallow: ["/studio", "/shared", "/api"],
    },
  };
  const baseUrlResult = readBaseUrl();
  if (baseUrlResult.ok) {
    robotsFile.sitemap = new URL("sitemap.xml", baseUrlResult.value).toString();
  } else {
    console.warn(
      "Could not include sitemap in robots.txt, missing base url:",
      baseUrlResult.error,
    );
  }
  return robotsFile;
}
