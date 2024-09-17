import React, { useEffect, useRef, useState, useCallback } from "react";
import Text from "src/components/text/Text";
import { Post } from "studio/lib/interfaces/pages";
import styles from "./postPreviewGrid.module.css";
import Button from "src/components/buttons/Button";
import { PostCard } from "../postCard/PostCard";

const PostPreviewGrid = ({
  posts,
  numberOfPosts,
  title,
  slug,
  onLoadMore,
  loading,
}: {
  posts: Post[];
  numberOfPosts: number;
  title: string;
  slug: string;
  onLoadMore: () => void;
  loading: boolean;
}) => {
  const postRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [prevPostCount, setPrevPostCount] = useState(posts.length);

  const setRef = useCallback(
    (index: number) => (el: HTMLAnchorElement | null) => {
      postRefs.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    if (posts.length > prevPostCount) {
      const firstNewPostIndex = prevPostCount;
      const postElement = postRefs?.current[firstNewPostIndex];
      if (postElement) {
        postElement.focus();
      }
      setPrevPostCount(posts.length);
    }
  }, [posts, prevPostCount]);

  if (!posts) {
    return null;
  }

  const titleID = "title";
  const postsAlreadyRendered = posts.length + 3; // the number is a reference to the first three posts shown as PostPreview;
  const remainingPosts = numberOfPosts - postsAlreadyRendered;
  const loadMoreButtonText = `Show ${remainingPosts > 9 ? 9 : remainingPosts} more`;

  return (
    <article className={styles.wrapper}>
      <div className={styles.previewGrid}>
        <Text type="h2" id={titleID}>
          {title}
        </Text>
        <ul
          className={styles.list}
          aria-labelledby={titleID}
          aria-live="polite"
        >
          {posts.map((post, index) => (
            <PostCard
              post={post}
              slug={slug}
              key={post._id}
              focusRef={setRef(index)}
            />
          ))}
        </ul>
        {remainingPosts > 0 && (
          <div>
            <Button
              type="secondary"
              size="small"
              onClick={onLoadMore}
              disabled={loading}
              loading={loading}
            >
              {loading ? "Loading more..." : loadMoreButtonText}
            </Button>
          </div>
        )}
      </div>
    </article>
  );
};

export default PostPreviewGrid;
