import { useCallback, useState } from "react";
import { Category, Post } from "studio/lib/interfaces/pages";
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
          end,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedTabIndex],
  );

  return { posts, postsCount, fetchPosts };
};

/*
  The ESLint rule `react-hooks/exhaustive-deps` is disabled for this `useCallback` 
  hook because `fetchPosts` should only be triggered by changes to `selectedTabIndex`.
  Although `categories` and `posts.data.length` are used within the callback, 
  they are managed and updated internally within the callback itself and do not need 
  to be part of the dependency array. Including them would cause unnecessary re-fetches 
  whenever they change, which is not desired.
*/
