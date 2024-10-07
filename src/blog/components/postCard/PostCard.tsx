"use client";
import { SanityImage } from "src/components/image/SanityImage";
import Text from "src/components/text/Text";
import { Post } from "studio/lib/interfaces/pages";

import styles from "./postCard.module.css";

export const PostCard = ({
  post,
  slug,
  focusRef,
}: {
  post: Post;
  slug: string;
  focusRef?: React.Ref<HTMLAnchorElement>;
}) => {
  const postLink = `/${slug}/${post.slug.current}`;
  return (
    <li className={styles.cardWrapper}>
      <a href={postLink} className={styles.card} ref={focusRef}>
        {post.lead.image && (
          <div className={styles.image} aria-hidden={true}>
            <SanityImage image={post.lead.image} />
          </div>
        )}
        <Text type="caption">{post.category}</Text>
        <span>{post.basicTitle}</span>
      </a>
    </li>
  );
};
