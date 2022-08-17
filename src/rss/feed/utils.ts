/** Returns a truncated version string
 * @param text text to truncate, should it exceed desired length
 * @param desiredCharacterLength desired maximum length of output
 * @param truncationText string that will replace removed text
 * @returns truncated version of input text
 */
export function truncateOnSpace(
  text: string,
  desiredCharacterLength: number,
  truncationText = ' ...',
) {
  if (
    text.length > desiredCharacterLength &&
    text.length > truncationText.length
  ) {
    return (
      text.substring(
        0,
        text.lastIndexOf(' ', desiredCharacterLength - truncationText.length),
      ) + truncationText
    );
  } else {
    return text;
  }
}
