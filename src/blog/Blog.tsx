"use client";
import { useEffect, useCallback } from "react";
import useTabs from "src/utils/hooks/useTabs";
import { BlogPage, Post } from "studio/lib/payloads/pages";
import styles from "./blog.module.css";
import { useFetchPosts } from "src/utils/hooks/useFetchPosts";
import BlogHero from "./components/hero/BlogHero";
import PostPreview from "src/blog/components/postPreview/PostPreview";
import PostPreviewGrid from "./components/postPreviewGrid/PostPreviewGrid";
import LoadingNews from "./components/loadingNews/LoadingNews";
import CustomErrorMessage, {
  homeLink,
} from "./components/customErrorMessage/CustomErrorMessage";

interface BlogProps {
  blog: BlogPage;
  initialPosts: Post[];
  slug: string;
}

export const Blog = ({ blog, initialPosts, slug }: BlogProps) => {
  const { tabListRef, selectedTabIndex } = useTabs();

  const postCategories = new Set(
    initialPosts.map((post) => post.category).filter((category) => category),
  );

  const filteredCategories = blog?.categories.filter((category) =>
    postCategories.has(category.name),
  );

  const categories = [
    {
      _key: "all-posts-label",
      _type: "category",
      name: `All ${blog?.allPostsLabel}`,
    },
    ...filteredCategories,
  ];

  const {
    posts,
    postsCount,
    fetchPosts: originalFetchPosts,
  } = useFetchPosts({
    initialPosts,
    selectedTabIndex,
    categories,
  });

  const fetchPosts = useCallback(() => {
    originalFetchPosts({ reset: true });
  }, [originalFetchPosts]);

  const handleLoadMore = () => {
    originalFetchPosts({ reset: false });
  };

  const readMoreTitle =
    selectedTabIndex === 0
      ? `All ${blog.allPostsLabel}`
      : `More ${categories[selectedTabIndex]?.name} ${blog.allPostsLabel}`;

  useEffect(() => {
    fetchPosts();
  }, [selectedTabIndex, fetchPosts]);

  if (!initialPosts || posts.error) {
    return (
      <CustomErrorMessage
        title={`Error - Can’t fetch news`}
        body={`Struggling to fetch stories, and we don't know why. Please be patient and try to refresh the page.`}
        link={homeLink}
        button={{
          label: "Try Again",
          onClick: fetchPosts,
        }}
      />
    );
  }

  return (
    <div className={styles.wrapper}>
      <BlogHero
        title={blog.basicTitle}
        categories={categories}
        ariaLabel={blog.page}
        tabListRef={tabListRef}
        selectedTabIndex={selectedTabIndex}
      />
      <section
        aria-live="polite"
        role="region"
        className={`${styles.body} ${posts.initialLoading ? styles.loading : styles.loaded}`}
      >
        <div className={styles.contentWrapper}>
          {posts.initialLoading ? (
            <LoadingNews />
          ) : (
            categories.map((category, index) => {
              const isVisible = selectedTabIndex === index;
              return (
                <section
                  role="tabpanel"
                  aria-labelledby={`category-tab-${index}`}
                  id={`category-tabpanel-${index}`}
                  key={`category-tabpanel-${index}`}
                >
                  {isVisible &&
                    posts.data
                      .slice(0, 3)
                      .map((post, index) => (
                        <PostPreview
                          post={post}
                          alignImageToRight={Boolean(index % 2 !== 0)}
                          slug={slug}
                          key={`post-preview-${index}`}
                        />
                      ))}
                </section>
              );
            })
          )}
        </div>
        {!posts.initialLoading &&
          posts.data.length > 3 &&
          posts.data.slice(3).length > 0 && (
            <PostPreviewGrid
              title={readMoreTitle}
              numberOfPosts={postsCount}
              posts={posts.data.slice(3)}
              slug={slug}
              onLoadMore={handleLoadMore}
              loading={posts.loadingMore}
            />
          )}
      </section>
    </div>
  );
};
