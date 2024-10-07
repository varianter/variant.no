"use client";
import { PortableTextBlock } from "sanity";

import { SanityImage } from "src/components/image/SanityImage";
import CustomLink from "src/components/link/CustomLink";
import { RichText } from "src/components/richText/RichText";
import Text from "src/components/text/Text";
import { LinkType } from "studio/lib/interfaces/navigation";
import { Post } from "studio/lib/interfaces/pages";

import styles from "./postPreview.module.css";

export interface PostPreviewProps {
  post: Post;
  alignImageToRight: boolean;
  slug: string;
}

const PostPreview = ({
  post,
  alignImageToRight = true,
  slug,
}: PostPreviewProps) => {
  const link = {
    _key: "string",
    _type: "string",
    linkTitle: "Read more",
    ariaLabelledby: `Read more on ${post.basicTitle}`,
    linkType: LinkType.Internal,
    internalLink: {
      _ref: `${slug}/${post.slug.current}`,
    },
  };

  const truncateFirstBlock = (
    richText: PortableTextBlock[],
    limit: number,
  ): PortableTextBlock[] => {
    if (!richText || richText.length === 0) return richText;

    const firstBlock = richText[0];
    let charCount = 0;

    if (!("children" in firstBlock) || !Array.isArray(firstBlock.children)) {
      return [firstBlock];
    }

    const truncatedChildren = firstBlock.children?.map((child) => {
      if (charCount >= limit) return { ...child, text: "" };
      const remainingChars = limit - charCount;
      const truncatedText = child.text.slice(0, remainingChars);
      charCount += truncatedText.length;
      return { ...child, text: truncatedText };
    });

    return [{ ...firstBlock, children: truncatedChildren }];
  };

  const truncatedText = truncateFirstBlock(post.lead.richText, 400);

  const hasImage = post.lead.image !== undefined;

  return (
    <article className={styles.wrapper}>
      <div
        className={`${styles.postPreview} ${alignImageToRight ? styles.right : ""}`}
      >
        {hasImage && (
          <div className={styles.image}>
            <SanityImage image={post.lead.image} />
          </div>
        )}
        <div
          className={`${styles.content} ${hasImage ? styles.maxWidthSmall : styles.maxWidthLarge}`}
        >
          <div>
            <Text type="caption">{post.category}</Text>
            <Text type="h2">{post.basicTitle}</Text>
          </div>
          {truncatedText && <RichText value={truncatedText} />}
          {link && <CustomLink link={link} />}
        </div>
      </div>
    </article>
  );
};

export default PostPreview;
