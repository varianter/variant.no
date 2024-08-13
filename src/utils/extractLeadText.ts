type Children = {
  text: string;
};

type PortableTextBlock = {
  children: Children[];
  _type: string;
  style: RichTextType;
  _key: string;
};

type RichTextType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";

interface ExtractedText {
  leadText: string;
  remainingBlocks: PortableTextBlock[];
  leftoverText: string;
}

/**
 * Function to extract the lead text and remaining text from a PortableTextBlock array
 * @param {Array} blocks - Array of PortableTextBlock
 * @returns {Object} - Object containing leadText, remainingBlocks, and leftoverText
 */

export function extractLeadText(blocks: PortableTextBlock[]): ExtractedText {
  const MAX_LENGTH = 450;
  const headlineTypes: RichTextType[] = ["h1", "h2", "h3", "h4", "h5", "h6"];

  let leadText = "";
  let remainingBlocks: PortableTextBlock[] = [];
  let leftoverText = "";
  let accumulatedLength = 0;
  let i = 0;
  let addNextBlock = false;

  for (i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const blockText = block.children.map((child) => child.text).join(" ");
    const blockLength = blockText.length;

    if (accumulatedLength + blockLength > MAX_LENGTH || addNextBlock) {
      if (
        addNextBlock ||
        (accumulatedLength === 0 && headlineTypes.includes(block.style))
      ) {
        // Include the headline block fully and add the next block
        leadText += blockText + " ";
        addNextBlock = true;
      } else {
        // Split the block to fit the MAX_LENGTH without breaking words
        const splitIndex = blockText.lastIndexOf(
          " ",
          MAX_LENGTH - accumulatedLength
        );
        leadText += blockText.substring(0, splitIndex) + " ";
        leftoverText = blockText.substring(splitIndex + 1);
        break;
      }
    } else {
      leadText += blockText + " ";
      accumulatedLength += blockLength;
    }
  }

  // Remove the blocks processed from the original array
  remainingBlocks = blocks.slice(i + 1);

  return {
    leadText: leadText.trim(),
    remainingBlocks,
    leftoverText,
  };
}
