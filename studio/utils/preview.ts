import { PortableTextBlock } from "sanity";

// Convert rich text content to plaintext preview string
// (see https://www.sanity.io/docs/previewing-block-content)
export function richTextPreview(
  richText: PortableTextBlock[],
): string | undefined {
  console.log(richText);
  const block = richText.find((block) => block._type === "block");
  if (
    block === undefined ||
    !("children" in block) ||
    !Array.isArray(block.children)
  ) {
    return undefined;
  }
  return block.children
    .filter(
      (child: unknown) =>
        typeof child === "object" &&
        child !== null &&
        "_type" in child &&
        child._type === "span",
    )
    .map((span) => span.text)
    .join("");
}
