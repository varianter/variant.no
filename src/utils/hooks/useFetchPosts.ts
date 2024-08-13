import { useCallback, useState } from "react";
import { Category, Post } from "studio/lib/payloads/pages";
import { fetchCategorizedPosts, fetchPostCount } from "../api";

interface FetchState {
  data: Post[];
  initialLoading: boolean;
  loadingMore: boolean;
  error: string | null;
}

interface FetchPostsProps {
  initialPosts: Post[];
  selectedTabIndex: number;
  categories: Category[];
}

export const useFetchPosts = ({
  initialPosts,
  selectedTabIndex,
  categories,
}: FetchPostsProps) => {
  const [postsCount, setPostsCount] = useState<number>(0);
  const [posts, setPosts] = useState<FetchState>({
    data: initialPosts,
    initialLoading: true,
    loadingMore: false,
    error: null,
  });

  const fetchPosts = useCallback(
    async ({ reset = false }) => {
      const category =
        selectedTabIndex === 0 ? null : categories[selectedTabIndex].name;
      const start = reset ? 0 : posts.data.length;
      const end = reset ? 11 : start + 9;

      setPosts((prevState) => ({
        ...prevState,
        initialLoading: reset ? true : prevState.initialLoading,
        loadingMore: reset ? false : true,
        error: null,
      }));

      try {
        const { data, error } = await fetchCategorizedPosts(
          category,
          start,
          end
        );
        const count = await fetchPostCount(category);

        setPosts((prevState) => ({
          data: reset ? data : [...prevState.data, ...data],
          initialLoading: false,
          loadingMore: false,
          error,
        }));

        setPostsCount(count);
      } catch (error) {
        setPosts((prevState) => ({
          ...prevState,
          initialLoading: false,
          loadingMore: false,
          error: "Failed to fetch posts or count",
        }));
      }
    },
    [selectedTabIndex]
  );

  return { posts, postsCount, fetchPosts };
};
