import Text from "src/components/text/Text";
import { Post } from "studio/lib/payloads/pages";
import styles from "./morePostsGrid.module.css";
import BackButton from "src/components/buttons/BackButton";
import { PostCard } from "src/blog/components/postCard/PostCard";

const MorePostsGrid = ({
  posts,
  title,
  slug,
}: {
  posts: Post[];
  title: string;
  slug: string;
}) => {
  const titleID = "more-posts-title";

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
          {posts.map((post) => (
            <PostCard post={post} slug={slug} key={post._id} />
          ))}
        </ul>
        <div>
          <BackButton />
        </div>
      </div>
    </article>
  );
};

export default MorePostsGrid;
