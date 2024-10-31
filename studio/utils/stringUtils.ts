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

/**
 * Converts a camel cased string (first letter can be either upper- or lowercase),
 * to a more human-readable string where words are seperated with spaces and
 * the first letter of each word is in uppercase
 *
 * ThisIsTheStringToSplit -> This Is The String To Split
 * thisIsTheStringToSplit -> This Is The String To Split
 * thisIsATrickyOne -> This Is A Tricky One
 *
 * @param {string} s
 * @returns {string}
 */
export function humanizeCamelCase(s: string): string {
  if (s.length === 0) {
    return s;
  }
  return (s[0].toUpperCase() + s.slice(1)).split(/(?=[A-Z])/).join(" ");
}

// Add more string utility functions as needed...
