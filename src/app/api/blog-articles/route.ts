import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser({
  customFields: {
    item: [["content:encoded", "content"]],
  },
});

export async function GET() {
  const FEED_URL = "https://blog.variant.no/feed";

  try {
    const feed = await parser.parseURL(FEED_URL);

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

        const text = item.content.replace(/<[^>]*>?/gm, "");
        description = text.substring(0, 125) + "...";
      }

      return {
        title: item.title || "No title",
        url: item.link || "",
        pubDate: item.pubDate || "",
        thumbnail,
        description,
        creator: item.creator || "",
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
