import {
  PortableTextBlock,
  isPortableTextSpan,
  isPortableTextTextBlock,
} from "sanity";

// Convert rich text content to plaintext preview string
// (inspired by https://www.sanity.io/docs/previewing-block-content)
export function richTextPreview(
  richText: PortableTextBlock[],
): string | undefined {
  const block = richText.find((block) => block._type === "block");
  if (!isPortableTextTextBlock(block)) {
    return undefined;
  }
  return block.children
    .filter((child) => isPortableTextSpan(child))
    .map((span) => span.text)
    .join("");
}
