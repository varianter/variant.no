"use client";
import { RichText, PortableTextBlock } from "src/components/richText/RichText";
import Text from "src/components/text/Text";
import { Post } from "studio/lib/payloads/pages";
import styles from "./postPreview.module.css";
import CustomLink from "src/components/link/CustomLink";
import { LinkType } from "studio/lib/payloads/navigation";
import { useConvertSanityImageToNextImage } from "src/utils/hooks/useConvertImage";

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
  const renderedImage = useConvertSanityImageToNextImage(post.lead.image);

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

  const truncateFirstBlock = (richText: PortableTextBlock[], limit: number) => {
    if (!richText || richText.length === 0) return richText;

    const firstBlock = richText[0];
    let charCount = 0;
    const truncatedChildren = firstBlock?.children?.map((child) => {
      if (charCount >= limit) return { ...child, text: "" };
      const remainingChars = limit - charCount;
      const truncatedText = child.text.slice(0, remainingChars);
      charCount += truncatedText.length;
      return { ...child, text: truncatedText };
    });

    return [{ ...firstBlock, children: truncatedChildren }];
  };

  const truncatedText = truncateFirstBlock(post.lead.richText, 400);

  return (
    <article className={styles.wrapper}>
      <div
        className={`${styles.postPreview} ${alignImageToRight ? styles.right : ""}`}
      >
        {renderedImage && <div className={styles.image}>{renderedImage}</div>}
        <div
          className={`${styles.content} ${renderedImage ? styles.maxWidthSmall : styles.maxWidthLarge}`}
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
