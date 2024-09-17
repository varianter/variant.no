"use client";
import Text from "src/components/text/Text";
import { useConvertSanityImageToNextImage } from "src/utils/hooks/useConvertImage";
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
  const renderedImage = useConvertSanityImageToNextImage(post.lead.image);
  const postLink = `/${slug}/${post.slug.current}`;
  return (
    <li className={styles.cardWrapper}>
      <a href={postLink} className={styles.card} ref={focusRef}>
        {renderedImage && (
          <div className={styles.image} aria-hidden={true}>
            {renderedImage}
          </div>
        )}
        <Text type="caption">{post.category}</Text>
        <span>{post.basicTitle}</span>
      </a>
    </li>
  );
};
