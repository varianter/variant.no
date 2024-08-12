/**
 * Capitalizes the first letter of the provided string.
 * @param {string} string - The string to be transformed.
 * @return {string} The transformed string with the first letter capitalized.
 */
export function capitalizeFirstLetter(string: string): string {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Converts the provided string to camel case.
 * @param {string} string - The string to be transformed.
 * @return {string} The transformed string in camel case.
 */
export function toCamelCase(string: string): string {
  return string
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

/**
 * Trims the provided string and replaces multiple spaces with a single space.
 * @param {string} string - The string to be transformed.
 * @return {string} The transformed string with trimmed spaces.
 */
export function normalizeSpaces(string: string): string {
  return string.trim().replace(/\s+/g, " ");
}

// Add more string utility functions as needed...
