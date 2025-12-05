import { NextResponse } from "next/server";
import Parser from "rss-parser";

import formatLongStrings from "src/components/utils/formatLongStrings";

const parser = new Parser({
  customFields: {
    item: [["content:encoded", "content"]],
  },
});

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_URL;
  const FEED_URL =
    process.env.COUNTRY === "sweden"
      ? "https://medium.com/feed/variant-swe"
      : "https://blog.variant.no/feed";

  try {
    const response = await fetch(FEED_URL, {
      headers: {
        "User-Agent": `VariantWebsite (+${baseUrl})`,
        Accept: "application/rss+xml, application/xml;q=0.9, */*;q=0.8",
      },
    });

    if (!response.ok) {
      console.error(
        `RSS fetch failed: ${response.status} ${response.statusText}`,
      );
      return NextResponse.json(
        { error: "Could not fetch articles" },
        { status: 500 },
      );
    }

    const xml = await response.text();
    const feed = await parser.parseString(xml);

    const articles = feed.items.map((item) => {
      let thumbnail: { src: string; alt: string } | null = null;
      let description = item.contentSnippet || "";

      if (item.content) {
        const imgMatch = item.content.match(
          /<img[^>]+alt="([^"]*)"[^>]+src="([^">]+)"|<img[^>]+src="([^">]+)"[^>]+alt="([^"]*)"/,
        );
        if (imgMatch) {
          const alt = imgMatch[1] || "";
          const src = imgMatch[2] || "";
          if (src) {
            thumbnail = { src, alt };
          }
        }

        const text = item.content.replace(/<[^>]*>?/gm, " ");
        description = formatLongStrings(155, text);
      }

      return {
        title: item.title || "No title",
        url: item.link || "",
        publishedDate: item.pubDate || "",
        thumbnail,
        description,
      };
    });

    return NextResponse.json(articles, {
      headers: {
        "Cache-Control": "s-maxage=3600, stale-while-revalidate",
      },
    });
  } catch (error) {
    console.error("Error when fetching RSS-feed:", error);
    return NextResponse.json(
      { error: "Could not fetch articles" },
      { status: 500 },
    );
  }
}
