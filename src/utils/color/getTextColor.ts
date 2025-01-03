/**
 * Determines the appropriate text color (light or dark) based on the background color's luminance.
 *
 * @param {string} bgColor - The background color in hexadecimal format (e.g., `#RRGGBB`).
 * @returns {string} The hexadecimal color code for the text color:
 *   - Light text color (`#faf8f5`) if the background is dark.
 *   - Dark text color (`#222424`) if the background is light.
 */
const LIGHT_TEXT_COLOR = "#faf8f5"; // For dark backgrounds
const DARK_TEXT_COLOR = "#222424"; // For light backgrounds

export const getTextColor = (bgColor: string): string => {
  const rgb = bgColor
    .replace(/^#/, "")
    .match(/.{2}/g)
    ?.map((hex) => parseInt(hex, 16)) || [255, 255, 255];

  // Weighted based on human perception of color brightness
  // See: https://stackoverflow.com/questions/1754211/evaluate-whether-a-hex-value-is-dark-or-light/23791856
  const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;

  // Return light text for dark backgrounds, and dark text for light backgrounds
  return luminance > 0.5 ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR;
};
