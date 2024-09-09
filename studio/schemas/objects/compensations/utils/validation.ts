interface LocationReference {
  _ref: string;
  _type: string;
  title?: string;
}

export interface DocumentWithLocation {
  location: LocationReference;
}

/**
 * Checks for duplicate location references in the documents array.
 * Ensures each location has a unique document entry.
 *
 * @param {DocumentWithLocation[] | undefined} documents - The array of documents, each with one or more locations.
 * @returns {string | true} - Returns an error message if duplicate locations are found, or true if all are unique.
 */
export const checkForDuplicateLocations = (
  documents: DocumentWithLocation[] | undefined,
): boolean => {
  if (!documents) return true;
  const locationRefs = documents
    .map((entry) => entry.location?._ref)
    .filter(Boolean);
  const uniqueRefs = new Set(locationRefs);
  return uniqueRefs.size === locationRefs.length;
};
