export default function formatLongStrings(
  maxLength: number,
  textString?: string,
) {
  const text = (textString ? textString : "") || "\u00A0";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
