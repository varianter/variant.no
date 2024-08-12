import { client } from "studio/lib/client";
import {
  CATEGORIZED_POSTS_QUERY,
  COUNT_POSTS_QUERY,
} from "studio/lib/queries/pages";
import { Post } from "studio/lib/payloads/pages";

interface FetchResult {
  data: Post[];
  error: string | null;
}

export const fetchCategorizedPosts = async (
  category: string | null,
  start = 0,
  end = 11
): Promise<FetchResult> => {
  try {
    const data = await client.fetch(CATEGORIZED_POSTS_QUERY, {
      category,
      start,
      end,
    });
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { data: [], error: `Failed to fetch posts: ${error}` };
  }
};

export const fetchPostCount = async (
  category?: string | null
): Promise<number> => {
  try {
    const count = await client.fetch(COUNT_POSTS_QUERY, { category });
    return count;
  } catch (error) {
    console.error("Error fetching post count:", error);
    throw new Error("Failed to fetch post count");
  }
};
