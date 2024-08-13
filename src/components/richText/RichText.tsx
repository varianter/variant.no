"use client";

import { PortableText } from "@portabletext/react";
import Text from "../text/Text";
import styles from "./richText.module.css";
import textStyles from "../text/text.module.css";
import { useConvertSanityImageToNextImage } from "src/utils/hooks/useConvertImage";

type Children = {
  _type: string;
  marks: any[];
  text: string;
  _key: string;
};

export type RichTextType = "h1" | "h2" | "h3" | "normal" | "blockquote";

export type PortableTextBlock = {
  children?: Children[];
  _type: string;
  style?: RichTextType;
  _key: string;
  asset?: {
    _ref: string;
    _type: string;
  };
  alt?: string;
  markDefs?: any[];
};

const formatId = (children: any): string => {
  const text = children.join(" ");

  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

const SanityImage = ({ value }: { value: PortableTextBlock }) => {
  const ImageElement = useConvertSanityImageToNextImage(value);
  return <div className={styles.image}>{ImageElement}</div>;
};

const myPortableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <Text type="h2" id={formatId(children)}>
        {children}
      </Text>
    ),
    h3: ({ children }: any) => (
      <Text type="h3" id={formatId(children)}>
        {children}
      </Text>
    ),
    normal: ({ children }: any) => <Text type="body">{children}</Text>,
    blockquote: ({ children }: any) => (
      <blockquote className={`${styles.blockquote} ${textStyles.body}`}>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className={styles.list}>{children}</ul>,
    number: ({ children }: any) => <ol className={styles.list}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className={textStyles.body}>{children}</li>
    ),
    number: ({ children }: any) => (
      <li className={textStyles.body}>{children}</li>
    ),
  },
  types: {
    image: SanityImage,
  },
};

interface GroupedBlogTextProps {
  value: PortableTextBlock[];
}

interface Group {
  title: PortableTextBlock | null;
  subtitles: PortableTextBlock[];
  paragraphs: PortableTextBlock[];
}

/**
 * Helper function to create a new group.
 * @param {PortableTextBlock} title - The title block for the new group.
 * @returns {Group} - A new group object.
 */
const createNewGroup = (title: PortableTextBlock | null): Group => ({
  title,
  subtitles: [],
  paragraphs: [],
});

/**
 * Groups PortableTextBlocks into sections with titles, subtitles, and paragraphs.
 * @param {PortableTextBlock[]} blocks - Array of PortableTextBlocks.
 * @returns {Group[]} - Array of grouped blocks.
 */
const groupBlocks = (blocks: PortableTextBlock[]): Group[] => {
  return blocks.reduce<Group[]>((groups, block) => {
    const lastGroup = groups[groups.length - 1];

    if (block.style === "h2") {
      // Start a new group for h2 titles
      groups.push(createNewGroup(block));
    } else if (block.style === "h3") {
      // Add h3 to the last group if the last group is an h2 without paragraphs
      if (
        lastGroup &&
        lastGroup.title?.style === "h2" &&
        lastGroup.paragraphs.length === 0
      ) {
        lastGroup.subtitles.push(block);
      } else {
        groups.push(createNewGroup(block));
      }
    } else if (block._type === "image" || block.style === "blockquote") {
      // Start a new group for images or blockquotes
      groups.push(createNewGroup(block));
    } else if (block.style === "normal") {
      // Add normal text to the last group if it exists, otherwise start a new group
      if (lastGroup) {
        lastGroup.paragraphs.push(block);
      } else {
        groups.push(createNewGroup(null));
        groups[groups.length - 1].paragraphs.push(block);
      }
    }
    return groups;
  }, []);
};

/**
 * GroupedBlogText component
 * This component takes a PortableTextBlock array as input,
 * groups paragraphs under h2 with optional h3, and blockquotes,
 * and renders images as separate blocks.
 */
const GroupedBlogText = ({ value }: GroupedBlogTextProps) => {
  const groupedBlocks = groupBlocks(value);

  return (
    <>
      {groupedBlocks.map((group, index) => {
        // Directly render PortableText for images and blockquotes without a div wrapper
        if (
          group.title?._type === "image" ||
          group.title?.style === "blockquote"
        ) {
          return (
            <PortableText
              key={group.title._key || `group-${index}`}
              value={[group.title, ...group.paragraphs]}
              components={myPortableTextComponents}
            />
          );
        }

        // Render h2 titles, h3 subtitles, and paragraphs within a div wrapper for other groups
        return (
          <div key={index} className={styles.paragraph}>
            {group.title && (
              <PortableText
                value={[group.title]}
                components={myPortableTextComponents}
              />
            )}
            {group.subtitles.length > 0 && (
              <PortableText
                value={group.subtitles}
                components={myPortableTextComponents}
              />
            )}
            {group.paragraphs.length > 0 && (
              <PortableText
                key={group.title ? group.title._key : `group-${index}`}
                value={group.paragraphs}
                components={myPortableTextComponents}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export const RichText = ({ value }: { value: PortableTextBlock[] }) => (
  <GroupedBlogText value={value} />
);
